/**
 * Post-build script: injects route-specific <title>, <meta>, <link rel="canonical">,
 * and OG tags into pre-built index.html copies so that non-JS fetchers / crawlers
 * see correct metadata in the raw HTML.
 *
 * Usage: node scripts/inject-meta.cjs
 * Runs after `vite build` — reads dist/index.html as template, writes
 * dist/<route>/index.html for every entry in ROUTES.
 */

const fs = require("fs");
const path = require("path");

const DIST = path.resolve(__dirname, "../dist");
const TEMPLATE = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

const SITE = "https://www.dmytroai.com";

// ── Route metadata ──────────────────────────────────────────────────────────
const ROUTES = [
  {
    path: "/",
    title: "Dmytro | AI Automation Expert",
    description:
      "Turn AI & Automation into Your Competitive Advantage. Helping businesses automate workflows, save time, and scale faster—without the tech headaches.",
    canonical: SITE,
    ogTitle: "Dmytro | AI Automation Expert",
    ogDescription:
      "Helping businesses automate workflows, save time, and scale faster with custom AI solutions.",
    ogType: "website",
    ogUrl: SITE,
  },
  {
    path: "/guides",
    title: "Guides | Dmytro AI",
    description:
      "Practical guides for small businesses exploring AI automation. Comparisons, use cases, and decision frameworks to help you make informed choices.",
    canonical: `${SITE}/guides`,
    ogTitle: "Guides | Dmytro AI",
    ogDescription:
      "Practical guides for small businesses exploring AI automation.",
    ogType: "website",
    ogUrl: `${SITE}/guides`,
  },
  {
    path: "/ai-automation-consultant-small-business",
    title: "AI Automation Consultant for Small Business | Dmytro AI",
    description:
      "AI automation consultant for small businesses. Reduce manual work, respond to leads faster, and build systems that run without adding headcount. See what it looks like and whether your business is a fit.",
    canonical: `${SITE}/ai-automation-consultant-small-business`,
    ogTitle: "AI Automation Consultant for Small Business | Dmytro AI",
    ogDescription:
      "What an AI automation consultant actually does for small businesses, and how to tell if you need one.",
    ogType: "article",
    ogUrl: `${SITE}/ai-automation-consultant-small-business`,
  },
  {
    path: "/n8n-vs-zapier-small-business",
    title: "n8n vs Zapier for Small Business | Dmytro AI",
    description:
      "Practical comparison of n8n and Zapier for small businesses. When Zapier is enough, when n8n is the better fit, and what to consider for cost, complexity, and control.",
    canonical: `${SITE}/n8n-vs-zapier-small-business`,
    ogTitle: "n8n vs Zapier for Small Business | Dmytro AI",
    ogDescription:
      "When Zapier is enough, when n8n is the better fit, and what actually matters for small business automation.",
    ogType: "article",
    ogUrl: `${SITE}/n8n-vs-zapier-small-business`,
  },
  {
    path: "/ai-appointment-setter",
    title: "AI Appointment Setter for Service Businesses | Dmytro AI",
    description:
      "What an AI appointment setter actually does for service businesses. Where it helps, when it is a fit, and what it should not replace. Practical guide for business owners.",
    canonical: `${SITE}/ai-appointment-setter`,
    ogTitle: "AI Appointment Setter for Service Businesses | Dmytro AI",
    ogDescription:
      "What an AI appointment setter does, where it helps most, and how to decide if it is the right move.",
    ogType: "article",
    ogUrl: `${SITE}/ai-appointment-setter`,
  },
  {
    path: "/ai-lead-follow-up-for-service-businesses",
    title: "AI Lead Follow-Up for Service Businesses | Dmytro AI",
    description:
      "How AI lead follow-up works for service businesses. Respond to every inquiry in seconds, not hours. Practical guide covering setup, channels, cost, and when it makes sense.",
    canonical: `${SITE}/ai-lead-follow-up-for-service-businesses`,
    ogTitle: "AI Lead Follow-Up for Service Businesses | Dmytro AI",
    ogDescription:
      "How AI lead follow-up works for service businesses. Respond in seconds, not hours.",
    ogType: "article",
    ogUrl: `${SITE}/ai-lead-follow-up-for-service-businesses`,
  },
  {
    path: "/ai-automation-consultant-calgary",
    title: "AI Automation Consultant Calgary | Dmytro AI",
    description:
      "AI automation consultant serving Calgary businesses. Custom automations for lead follow-up, scheduling, CRM, and operations. Practical solutions, fixed pricing, real results.",
    canonical: `${SITE}/ai-automation-consultant-calgary`,
    ogTitle: "AI Automation Consultant Calgary | Dmytro AI",
    ogDescription:
      "AI automation consultant serving Calgary businesses. Practical solutions, fixed pricing, real results.",
    ogType: "article",
    ogUrl: `${SITE}/ai-automation-consultant-calgary`,
  },
  {
    path: "/case-studies",
    title:
      "Case Studies — AI Automation Results for Real Businesses | Dmytro AI",
    description:
      "Real AI automation case studies: restaurant voice agent, Instagram lead generation pipeline, e-commerce CRM automation. Specific problems, specific results.",
    canonical: `${SITE}/case-studies`,
    ogTitle: "Case Studies — AI Automation Results for Real Businesses",
    ogDescription:
      "See how AI automation drives measurable growth for small businesses. Real systems, real numbers.",
    ogType: "website",
    ogUrl: `${SITE}/case-studies`,
  },
  {
    path: "/case-studies/paris-cafe-voice-agent",
    title: "AI Voice Receptionist for NYC Restaurant — Case Study | Dmytro AI",
    description:
      "How The Paris Cafe stopped losing after-hours reservations with a 24/7 AI voice agent. Results: 100% calls answered, 15 hrs/week freed, sub-60s web lead response.",
    canonical: `${SITE}/case-studies/paris-cafe-voice-agent`,
    ogTitle: "AI Voice Receptionist for NYC Restaurant — Case Study",
    ogDescription:
      "How The Paris Cafe stopped losing after-hours reservations with a 24/7 AI voice agent built by Dmytro Afanasiev.",
    ogType: "article",
    ogUrl: `${SITE}/case-studies/paris-cafe-voice-agent`,
  },
  {
    path: "/case-studies/instagram-lead-generation",
    title: "Automated Instagram Lead Generation — Case Study | Dmytro AI",
    description:
      "How an info business went from manual Instagram prospecting to 50+ qualified leads per day at $0.29/lead using an automated n8n + AI pipeline. Zero manual work.",
    canonical: `${SITE}/case-studies/instagram-lead-generation`,
    ogTitle: "Automated Instagram Lead Generation — Case Study",
    ogDescription:
      "50+ qualified leads per day at $0.29/lead with zero manual work. Built with n8n, Apify, and AI qualification.",
    ogType: "article",
    ogUrl: `${SITE}/case-studies/instagram-lead-generation`,
  },
  {
    path: "/case-studies/ecommerce-crm-automation",
    title:
      "E-Commerce CRM & Lead Follow-Up Automation — Case Study | Dmytro AI",
    description:
      "How a US auto parts brand went from 5,600 untouched leads to automated follow-up for every single one. 3x team capacity, instant response time, +185% conversion lift.",
    canonical: `${SITE}/case-studies/ecommerce-crm-automation`,
    ogTitle: "E-Commerce CRM & Lead Follow-Up Automation — Case Study",
    ogDescription:
      "5,600+ leads organized and enrolled in automated email sequences. 3x team capacity without hiring.",
    ogType: "article",
    ogUrl: `${SITE}/case-studies/ecommerce-crm-automation`,
  },
  {
    path: "/ai-automation-hvac",
    title: "AI Automation for HVAC Companies | Dmytro AI",
    description:
      "AI automation for HVAC companies. Automate lead follow-up, after-hours calls, scheduling, and dispatch so you stop losing jobs to slow response times.",
    canonical: `${SITE}/ai-automation-hvac`,
    ogTitle: "AI Automation for HVAC Companies | Dmytro AI",
    ogDescription:
      "Stop losing HVAC jobs to slow follow-up. AI automation for calls, scheduling, and lead management.",
    ogType: "article",
    ogUrl: `${SITE}/ai-automation-hvac`,
  },
  {
    path: "/hire-ai-automation-consultant-vs-agency",
    title: "Hire an AI Automation Consultant vs. Agency vs. DIY | Dmytro AI",
    description:
      "Comparing your options for AI automation: solo consultant, agency, or DIY. Honest breakdown of cost, speed, quality, and what makes sense for your business.",
    canonical: `${SITE}/hire-ai-automation-consultant-vs-agency`,
    ogTitle:
      "Hire an AI Automation Consultant vs. Agency vs. DIY | Dmytro AI",
    ogDescription:
      "Should you hire a consultant, an agency, or do it yourself? Honest comparison for business owners exploring AI automation.",
    ogType: "article",
    ogUrl: `${SITE}/hire-ai-automation-consultant-vs-agency`,
  },
  {
    path: "/hvac-database-reactivation",
    title:
      "HVAC Database Reactivation | Turn Old Leads Into Booked Jobs | Dmytro AI",
    description:
      "Reactivate your HVAC database — old estimates, past customers, and dormant leads. No new ad spend. Done-for-you system that turns contacts you already paid for into booked jobs.",
    canonical: `${SITE}/hvac-database-reactivation`,
    ogTitle:
      "HVAC Database Reactivation | Turn Old Leads Into Booked Jobs",
    ogDescription:
      "You already paid for these leads. A done-for-you reactivation system turns dormant HVAC contacts into booked jobs — no new ad spend required.",
    ogType: "website",
    ogUrl: `${SITE}/hvac-database-reactivation`,
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Dmytro AI",
    description:
      "Privacy policy for Dmytro AI. How we collect, use, and protect your information.",
    canonical: `${SITE}/privacy`,
    ogTitle: "Privacy Policy | Dmytro AI",
    ogDescription: "Privacy policy for Dmytro AI.",
    ogType: "website",
    ogUrl: `${SITE}/privacy`,
  },
  {
    path: "/terms",
    title: "Terms of Service | Dmytro AI",
    description:
      "Terms of service for Dmytro AI. Rules and guidelines for using our website and services.",
    canonical: `${SITE}/terms`,
    ogTitle: "Terms of Service | Dmytro AI",
    ogDescription: "Terms of service for Dmytro AI.",
    ogType: "website",
    ogUrl: `${SITE}/terms`,
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function injectMeta(template, route) {
  let html = template;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(route.title)}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeHtml(route.description)}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${escapeHtml(route.canonical)}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeHtml(route.ogTitle)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${escapeHtml(route.ogDescription)}" />`
  );
  html = html.replace(
    /<meta property="og:type" content="[^"]*" \/>/,
    `<meta property="og:type" content="${escapeHtml(route.ogType)}" />`
  );

  // Add og:url if not present, or update it
  if (html.includes('property="og:url"')) {
    html = html.replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${escapeHtml(route.ogUrl)}" />`
    );
  } else {
    html = html.replace(
      /<meta property="og:type" content="[^"]*" \/>/,
      `<meta property="og:type" content="${escapeHtml(route.ogType)}" />\n    <meta property="og:url" content="${escapeHtml(route.ogUrl)}" />`
    );
  }

  return html;
}

// ── Main ────────────────────────────────────────────────────────────────────

let count = 0;

for (const route of ROUTES) {
  if (route.path === "/") {
    // Overwrite root index.html in place (it already exists)
    const html = injectMeta(TEMPLATE, route);
    fs.writeFileSync(path.join(DIST, "index.html"), html);
    count++;
    continue;
  }

  const dir = path.join(DIST, route.path);
  fs.mkdirSync(dir, { recursive: true });

  const html = injectMeta(TEMPLATE, route);
  fs.writeFileSync(path.join(dir, "index.html"), html);
  count++;
}

console.log(`✓ Injected route-specific meta into ${count} HTML files`);
