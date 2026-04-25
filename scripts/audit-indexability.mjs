#!/usr/bin/env node
/**
 * Technical indexability audit for GEO priority URLs.
 *
 * Checks live pages for HTTP status, canonical, meta noindex, title, and h1.
 * Checks local files for sitemap presence, robots blocking, and GEO tracking.
 * This is not a Google Search Console URL Inspection replacement.
 *
 * Usage:
 *   node scripts/audit-indexability.mjs
 *   node scripts/audit-indexability.mjs --json
 */
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DOMAIN = "https://www.dmytroai.com";

const PRIORITY_SLUGS = [
  "/",
  "/guides",
  "/case-studies",
  "/ai-automation-consultant-small-business",
  "/what-does-an-ai-automation-consultant-do",
  "/ai-automation-consultant-pricing-small-business",
  "/ai-automation-cost-small-business",
  "/best-ai-automation-for-service-businesses",
  "/ai-automation-for-businesses-without-a-tech-team",
  "/n8n-vs-zapier-small-business",
  "/ai-appointment-setter",
  "/ai-appointment-setter-cost-small-business",
  "/ai-appointment-setter-roi-small-business",
  "/ai-lead-follow-up-for-service-businesses",
  "/ai-lead-follow-up-cost-small-business",
  "/ai-voice-agent-setup-cost-small-business",
  "/ai-voice-agent-for-restaurants",
  "/ai-automation-for-restaurants",
  "/what-to-automate-first-for-restaurants",
  "/private-event-inquiry-follow-up-for-restaurants",
  "/missed-call-text-back-for-restaurants",
  "/ai-automation-for-hvac-companies",
  "/what-to-automate-first-for-property-management-companies",
  "/showing-coordination-automation-for-property-management-companies",
  "/ai-automation-for-auto-parts-ecommerce",
];

function normPath(value) {
  return value.replace(/\/$/, "") || "/";
}

function loadSitemapUrls() {
  const xml = readFileSync(resolve(ROOT, "public/sitemap.xml"), "utf-8");
  const urls = new Set();
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    try {
      urls.add(normPath(new URL(m[1]).pathname));
    } catch {
      // Skip malformed entries.
    }
  }
  return urls;
}

function loadGeoTrackedPaths() {
  const json = JSON.parse(readFileSync(resolve(ROOT, "scripts/geo-prompts.json"), "utf-8"));
  return new Set(json.pages.map((p) => p.path));
}

function loadRobotsTxt() {
  try {
    return readFileSync(resolve(ROOT, "public/robots.txt"), "utf-8");
  } catch {
    return "";
  }
}

function checkRobotsTxt(slug, robotsTxt) {
  // Current robots.txt has no global path disallow rules for normal search bots.
  // Keep this narrow so the audit does not pretend to be a full robots parser.
  const globalDisallows = [];
  let activeGlobal = false;
  for (const rawLine of robotsTxt.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*/, "").trim();
    if (!line) continue;
    const [fieldRaw, ...rest] = line.split(":");
    const field = fieldRaw.trim().toLowerCase();
    const value = rest.join(":").trim();
    if (field === "user-agent") activeGlobal = value === "*";
    if (activeGlobal && field === "disallow" && value) globalDisallows.push(value);
  }
  return { blocked: globalDisallows.some((rule) => slug.startsWith(rule)) };
}

function extractFirst(html, regex) {
  const m = html.match(regex);
  return m ? m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : null;
}

async function auditUrl(slug, sitemapUrls, geoTracked, robotsTxt) {
  const url = `${DOMAIN}${slug}`;
  const norm = normPath(slug);
  const result = {
    slug,
    url,
    inSitemap: sitemapUrls.has(norm),
    inGeoPrompts: geoTracked.has(slug),
    robotsBlocked: checkRobotsTxt(slug, robotsTxt).blocked,
    httpStatus: null,
    redirectTarget: null,
    title: null,
    h1: null,
    canonical: null,
    selfCanonical: null,
    metaNoindex: false,
    error: null,
  };

  try {
    const resp = await fetch(url, {
      redirect: "follow",
      headers: { "User-Agent": "dmytroai-indexability-audit/1.0" },
      signal: AbortSignal.timeout(15000),
    });
    result.httpStatus = resp.status;
    if (resp.redirected) {
      try { result.redirectTarget = new URL(resp.url).pathname; }
      catch { result.redirectTarget = resp.url; }
    }
    if (resp.ok) {
      const html = await resp.text();
      result.title = extractFirst(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
      result.h1 = extractFirst(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i)?.slice(0, 120) || null;
      const canonMatch =
        html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
        html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
      result.canonical = canonMatch ? canonMatch[1] : null;
      if (result.canonical) {
        try { result.selfCanonical = normPath(new URL(result.canonical, DOMAIN).pathname) === norm; }
        catch { result.selfCanonical = false; }
      }
      result.metaNoindex =
        /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html) ||
        /<meta[^>]+content=["'][^"']*noindex[^"']*["'][^>]+name=["']robots["']/i.test(html);
    }
  } catch (err) {
    result.error = err.message || String(err);
  }
  return result;
}

function summarize(results) {
  return {
    total: results.length,
    http200: results.filter((r) => r.httpStatus === 200).length,
    inSitemap: results.filter((r) => r.inSitemap).length,
    selfCanonical: results.filter((r) => r.selfCanonical).length,
    missingCanonical: results.filter((r) => r.httpStatus === 200 && !r.canonical).length,
    metaNoindex: results.filter((r) => r.metaNoindex).length,
    robotsBlocked: results.filter((r) => r.robotsBlocked).length,
    geoTracked: results.filter((r) => r.inGeoPrompts).length,
    notGeoTracked: results.filter((r) => !r.inGeoPrompts).map((r) => r.slug),
  };
}

async function main() {
  const jsonMode = process.argv.includes("--json");
  const sitemapUrls = loadSitemapUrls();
  const geoTracked = loadGeoTrackedPaths();
  const robotsTxt = loadRobotsTxt();
  const results = [];

  if (!jsonMode) {
    console.log(`Auditing ${PRIORITY_SLUGS.length} priority URLs against ${DOMAIN}`);
    console.log(`Sitemap has ${sitemapUrls.size} URLs; geo-prompts tracks ${geoTracked.size} pages\n`);
  }

  for (let i = 0; i < PRIORITY_SLUGS.length; i += 5) {
    const batch = PRIORITY_SLUGS.slice(i, i + 5);
    const batchResults = await Promise.all(batch.map((slug) => auditUrl(slug, sitemapUrls, geoTracked, robotsTxt)));
    results.push(...batchResults);
    if (!jsonMode) {
      for (const r of batchResults) {
        const status = r.httpStatus === 200 ? "OK" : `${r.httpStatus || "ERR"}`;
        const canon = r.selfCanonical ? "self" : r.canonical ? `-> ${r.canonical}` : "MISSING";
        const idx = r.metaNoindex || r.robotsBlocked ? "blocked/noindex" : "indexable";
        const geo = r.inGeoPrompts ? "tracked" : "NOT tracked";
        console.log(`  [${status}] ${r.slug}  canonical=${canon}  ${idx}  geo=${geo}`);
      }
    }
  }

  const summary = summarize(results);
  if (jsonMode) {
    console.log(JSON.stringify({ summary, results }, null, 2));
    return;
  }

  console.log(`\n--- Summary ---`);
  console.log(`HTTP 200:           ${summary.http200}/${summary.total}`);
  console.log(`In sitemap:         ${summary.inSitemap}/${summary.total}`);
  console.log(`Self-canonical:     ${summary.selfCanonical}/${summary.total}`);
  console.log(`Missing canonical:  ${summary.missingCanonical}`);
  console.log(`Meta noindex:       ${summary.metaNoindex}`);
  console.log(`Robots blocked:     ${summary.robotsBlocked}`);
  console.log(`GEO tracked:        ${summary.geoTracked}/${summary.total}`);
  if (summary.notGeoTracked.length) console.log(`Not GEO-tracked:    ${summary.notGeoTracked.join(", ")}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
