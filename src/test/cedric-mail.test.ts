import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

// Default suite checks source; test:cedric-mail repeats against a fresh real build.
const root = process.env.CEDRIC_MAIL_ROOT || "public";
const pages = [
  { route: "/cedric-mail", title: "Cedric Mail Access", reciprocal: "/cedric-mail/privacy" },
  { route: "/cedric-mail/privacy", title: "Cedric Mail Access — Privacy Policy", reciprocal: "/cedric-mail" },
];
const policy = "https://developers.google.com/terms/api-services-user-data-policy";
const revoke = "https://myaccount.google.com/connections";
const allowedLinks = new Set(["/", "/#booking", "#main", ...pages.map((p) => p.route), policy, revoke]);
const allowedTags = new Set("HTML HEAD META TITLE STYLE BODY HEADER MAIN FOOTER NAV A SECTION H1 H2 P UL OL LI STRONG TIME".split(" "));
const load = (route: string) => {
  const html = fs.readFileSync(path.join(root, route.slice(1), "index.html"), "utf8");
  return { html, doc: new DOMParser().parseFromString(html, "text/html") };
};

describe(`Cedric Mail Access static pages (${root})`, () => {
  for (const page of pages) {
    it(`${page.route} exists at its directory index with the exact identity and reciprocal link`, () => {
      const { html, doc } = load(page.route);
      expect(html).toMatch(/^<!doctype html>/i);
      expect(doc.title).toBe(page.title);
      expect(doc.querySelectorAll("h1")).toHaveLength(1);
      expect(doc.querySelector("h1")?.textContent).toContain("Cedric Mail Access");
      expect(doc.querySelector(`a[href="${page.reciprocal}"]`)?.textContent?.trim()).toBeTruthy();
      expect(doc.querySelector('a[href="/#booking"]')?.textContent).toContain("Contact");
    });

    it(`${page.route} is readable and keyboard accessible without scripts or external assets`, () => {
      const { doc } = load(page.route);
      expect(doc.documentElement.lang).toBe("en");
      expect(doc.querySelector('meta[name="viewport"]')?.getAttribute("content")).toBe("width=device-width, initial-scale=1");
      expect(doc.querySelectorAll("main#main")).toHaveLength(1);
      expect(doc.querySelector('a[href="#main"]')?.textContent).toBe("Skip to content");
      const css = doc.querySelector("style")?.textContent || "";
      expect(css).toContain("system-ui");
      expect(css).toMatch(/max-width:\s*48rem/);
      expect(css).toContain("overflow-wrap: anywhere");
      expect(css).toContain(":focus-visible");
      expect(css).not.toMatch(/@import|url\s*\(|@font-face/i);
      for (const anchor of doc.querySelectorAll("a")) {
        expect(anchor.textContent?.trim()).toBeTruthy();
        expect(allowedLinks.has(anchor.getAttribute("href") || "")).toBe(true);
      }
    });

    it(`${page.route} has no active tracking, forms, credentials, or public data endpoint`, () => {
      const { html, doc } = load(page.route);
      for (const el of doc.querySelectorAll("*")) {
        expect(allowedTags.has(el.tagName), el.tagName).toBe(true);
        for (const attr of el.attributes) {
          expect(attr.name).not.toMatch(/^on|^(src|srcset|srcdoc|action|ping|nonce)$/i);
        }
      }
      expect(doc.querySelector('meta[http-equiv]')).toBeNull();
      expect(html).not.toMatch(/googletagmanager|google-analytics|posthog|gtag\(|fbq\(|document\.cookie|localStorage|sessionStorage/i);
      expect(html).not.toMatch(/[\w.+-]+@[\w.-]+\.[a-z]{2,}|\/Users\/|\/home\/|\.apps\.googleusercontent\.com|client_secret|refresh_token|access_token|ya29\.|GOCSPX-|sk-proj-|1\/\/[A-Za-z0-9_-]{10,}/i);
      expect(html).not.toMatch(/cedric-mail-access|Cedric Local Mail Connector/);
    });
  }

  it("explains operational allowlisting and separate explicit send authorization", () => {
    const text = load("/cedric-mail").doc.body.textContent || "";
    expect(text).toMatch(/allowlist/i);
    expect(text).toMatch(/no public signup/i);
    expect(text).toMatch(/External[\s\S]*does not restrict/i);
    expect(text).toContain("gmail.readonly");
    expect(text).toContain("gmail.send");
    expect(text).toMatch(/initial[\s\S]*read-only/i);
    expect(text).toMatch(/separate explicit owner authorization/i);
    expect(text).toMatch(/no automatic or test sends/i);
  });

  it("discloses Limited Use, AI controls, storage, retention and independent revocation/deletion", () => {
    const { doc } = load("/cedric-mail/privacy");
    const text = doc.body.textContent || "";
    expect(doc.querySelector(`a[href="${policy}"]`)).not.toBeNull();
    expect(doc.querySelector(`a[href="${revoke}"]`)).not.toBeNull();
    for (const phrase of ["Limited Use", "OpenAI", "no-training controls", "before", "owner-restricted local files", "conversation history", "no guaranteed automatic expiry", "provider", "Google retains", "Stop the local connector", "does not automatically revoke", "headers", "bodies", "attachments", "settings"]) {
      expect(text, phrase).toContain(phrase);
    }
    expect(text).toMatch(/not sell[\s\S]*advertising[\s\S]*general-purpose AI/i);
    expect(text).toMatch(/not[\s\S]*whole-mailbox sync/i);
    expect(text).toMatch(/not[\s\S]*encrypted at rest/i);
    expect(text).toMatch(/zero-retention guarantee/i);
    expect(text).toMatch(/tokens[\s\S]*never[\s\S]*AI/i);
    expect(doc.querySelector("time")?.getAttribute("datetime")).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("resolves both extensionless Vercel routes explicitly to static HTML", () => {
    // Exact rewrites keep these URLs out of the unrelated React/analytics shell.
    // See https://vercel.com/docs/routing/rewrites; existing redirects stay unchanged.
    const config = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
    expect(config.rewrites).toEqual([
      { source: "/cedric-mail", destination: "/cedric-mail/index.html" },
      { source: "/cedric-mail/privacy", destination: "/cedric-mail/privacy/index.html" },
    ]);
    expect(config.cleanUrls).not.toBe(true);
    expect(config.routes).toBeUndefined();
    expect(config.redirects).toEqual([
      { source: "/ai-automation-hvac", destination: "/ai-automation-for-hvac-companies", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "dmytroai.com" }], destination: "https://www.dmytroai.com/:path*", permanent: true },
      { source: "/search/cc.php", destination: "/", permanent: true },
    ]);
    if (root === "dist") {
      for (const page of pages) {
        expect(fs.readFileSync(path.join("dist", page.route, "index.html"), "utf8"))
          .toBe(fs.readFileSync(path.join("public", page.route, "index.html"), "utf8"));
      }
    }
  });
});
