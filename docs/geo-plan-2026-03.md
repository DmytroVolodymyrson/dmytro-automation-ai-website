# GEO Plan — dmytroai.com (March 2026)

**Date**: 2026-03-17
**Author**: Claude (research + audit), for Dmytro's review
**Scope**: Comprehensive Generative Engine Optimization plan for dmytroai.com
**Status**: Plan only — no implementation changes made

---

## A. Executive Summary

dmytroai.com already has a stronger GEO foundation than most solo consultant sites: JSON-LD structured data (Person, LocalBusiness, FAQPage), an `llm.txt` file, a visible FAQ section with schema, and three detailed case study pages with real metrics. The site is ahead of ~90% of comparable sites.

The gaps are specific and fixable:
1. **No sitemap.xml** — AI crawlers and search engines can't efficiently discover the 8+ pages
2. **robots.txt is incomplete** — no AI bot directives, no sitemap reference
3. **The file is `llm.txt`, not `llms.txt`** — the actual spec (llmstxt.org) uses `llms.txt`; no crawler looks for `llm.txt`
4. **No decision/comparison pages** — the content that AI models most frequently cite (comparison queries, "how to choose" queries) doesn't exist yet
5. **No measurement system** — no way to know if GEO is working
6. **Case study pages have no per-page structured data** — only the homepage has schema markup

The highest-ROI actions are: fix the technical basics (sitemap, robots, rename llm→llms), add Article schema to case studies, and start building 2-3 decision pages that target the queries AI models actually answer.

---

## B. What Is Already Implemented

### Structured Data (JSON-LD in index.html)
- **Person** schema: Name, jobTitle, description, URL, email, address (Calgary), sameAs (LinkedIn, GitHub)
- **LocalBusiness** schema: Name, description, areaServed (Calgary, Alberta, Canada, USA), hasOfferCatalog with 5 services (n8n, GHL, VAPI, appointment setters, email sequences)
- **FAQPage** schema: 5 questions with substantive, fact-dense answers (pricing, timelines, ROI, support)

**Assessment**: This is solid. The FAQ answers include specific numbers ($1,500-$8,000, 1-3 weeks, 30-day ROI). AI models favor this kind of specificity.

### FAQ Section (Visible on Homepage)
- 6 questions rendered in an accordion via `FAQSection.tsx`
- Content imported from `siteConfig.ts` — clean separation of copy from components
- PostHog tracking on FAQ opens (already instrumented)
- Questions match the JSON-LD FAQPage schema

**Issue**: The JSON-LD has 5 questions, but the visible FAQ has 6 (the "What kind of ROI can I expect?" question is only in `siteConfig.ts`, not in the JSON-LD). These must match exactly or Google may flag the mismatch.

### llm.txt (note: singular, not plural)
- Located at `public/llm.txt`
- Contains: About, Services, Best For, Case Studies, Contact
- Well-written, specific, includes case study summaries with metrics

**Issue**: The file is named `llm.txt`. The actual standard proposed by Jeremy Howard (llmstxt.org, September 2024) uses `llms.txt`. No major AI service has documented support for `llm.txt` as a filename. This should be renamed.

### Case Study Pages (3 pages, each with dedicated routes)
- `/case-studies/paris-cafe-voice-agent` — VAPI AI voice receptionist, NYC restaurant
- `/case-studies/instagram-lead-generation` — n8n automated lead gen pipeline
- `/case-studies/ecommerce-crm-automation` — Supabase CRM + n8n email automation
- `/case-studies` — index page listing all three
- Each has: challenge/solution narrative, specific metrics, tech stack, "How It Works" flow, booking widget CTA
- Paris Cafe page includes an audio demo of a real AI call

**Assessment**: These are GEO gold. Specific problems, specific solutions, specific numbers. This is exactly what AI models look for when answering "who can build an AI voice agent for my restaurant?"

### Meta Tags & Open Graph
- Title: "Dmytro | AI Automation Expert"
- Description: "Turn AI & Automation into Your Competitive Advantage..."
- Canonical: `https://dmytroai.com` (note: not `www.`)
- OG image, Twitter card configured
- Author meta tag present

### robots.txt
- Allows all bots (`User-agent: * / Allow: /`)
- Specific allows for Googlebot, Bingbot, Twitterbot, facebookexternalhit
- No Sitemap directive
- No AI-specific bot directives

### Other
- `site.webmanifest` with PWA metadata
- Favicon set (SVG, ICO, PNG at multiple sizes)
- Google Fonts loaded with non-blocking pattern
- React SPA with client-side routing (BrowserRouter)
- Existing GEO plan at `/GEO-PLAN.md` (created March 7, 2026) — good decision query research, proposed decision pages, but some outdated/imprecise guidance
- Homepage optimization system plan at `docs/plans/homepage-optimization-system.md` — PostHog instrumentation, siteConfig extraction (appears partially implemented)

---

## C. Gaps and Issues

### Critical (blocks AI discoverability)

| # | Gap | Impact | Effort |
|---|-----|--------|--------|
| 1 | **No sitemap.xml** | Search engines and AI crawlers can't efficiently discover all 8 pages (home, 3 case studies, case study index, privacy, terms, 404). For an SPA, this is essential since crawlers may not execute JS to find routes. | 30 min |
| 2 | **robots.txt missing AI bot directives** | No explicit allow/disallow for GPTBot, ClaudeBot, PerplexityBot, etc. Currently relying on the catch-all `User-agent: *`, which works but misses the Sitemap directive and signals no intentional AI strategy. | 15 min |
| 3 | **`llm.txt` vs `llms.txt` filename** | The spec is `llms.txt` (plural). No AI service documents support for `llm.txt`. The file content is good but served at the wrong path. | 5 min |
| 4 | **FAQ schema/visible mismatch** | JSON-LD has 5 FAQs, visible section has 6. Google's Rich Results guidelines require exact content parity. Could result in manual action or schema being ignored. | 15 min |

### Important (limits citation potential)

| # | Gap | Impact | Effort |
|---|-----|--------|--------|
| 5 | **No per-page structured data on case studies** | Case study pages have no JSON-LD. Adding Article schema (with author, datePublished, headline) would signal freshness and authorship to AI crawlers. | 1-2 hrs |
| 6 | **No decision/comparison content** | The existing GEO-PLAN.md identified decision queries ("n8n vs Zapier", "AI automation consultant vs agency", "AI automation for HVAC") but none have been built. These comparison/decision pages achieve 32-50% AI citation rates — the highest of any content type. | 2-3 hrs each |
| 7 | **SPA rendering concerns** | React SPA with client-side routing. GPTBot, ClaudeBot, and PerplexityBot have varying JS rendering capability. Some may see only the empty `<div id="root"></div>`. The JSON-LD in `index.html` helps, but case study content is invisible without JS execution. | Medium (SSR/prerender) |
| 8 | **No canonical/meta on sub-pages** | Only `index.html` has meta tags. Case study pages, privacy, terms have no page-specific `<title>` or `<meta description>` in the HTML. React Helmet or equivalent needed. | 1-2 hrs |
| 9 | **Canonical URL inconsistency** | `index.html` uses `https://dmytroai.com` (no www), but JSON-LD uses `https://www.dmytroai.com`. Pick one and be consistent. | 15 min |

### Nice to Have

| # | Gap | Impact | Effort |
|---|-----|--------|--------|
| 10 | **No blog/article section** | AI models heavily cite fresh, specific content. A blog with even 1-2 posts/month on automation topics would build topical authority. | Ongoing |
| 11 | **No cross-platform presence tracking** | No system for monitoring AI citations (Perplexity, ChatGPT, Google AI Overviews). | Setup: 1 hr, ongoing: 15 min/week |
| 12 | **No `llms-full.txt`** | Extended version containing all page content as markdown. Low priority for a small site. | 30 min |
| 13 | **Audio demo not transcribed** | Paris Cafe case study has an audio demo but no text transcript. AI crawlers can't process audio. | 30 min |

---

## D. High-Confidence GEO Actions

These are supported by research and have measurable impact.

### D1. Fix Technical Foundations (This Week)

**1. Create `sitemap.xml`**

Since this is an SPA, create a static `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/2000/svg/2000/sitemap/0.9">
  <url><loc>https://dmytroai.com/</loc><priority>1.0</priority></url>
  <url><loc>https://dmytroai.com/case-studies</loc><priority>0.8</priority></url>
  <url><loc>https://dmytroai.com/case-studies/paris-cafe-voice-agent</loc><priority>0.8</priority></url>
  <url><loc>https://dmytroai.com/case-studies/instagram-lead-generation</loc><priority>0.8</priority></url>
  <url><loc>https://dmytroai.com/case-studies/ecommerce-crm-automation</loc><priority>0.8</priority></url>
  <url><loc>https://dmytroai.com/privacy</loc><priority>0.3</priority></url>
  <url><loc>https://dmytroai.com/terms</loc><priority>0.3</priority></url>
</urlset>
```

Update as new pages are added.

**2. Rename `llm.txt` → `llms.txt`**

The llmstxt.org spec uses `llms.txt`. Keep the content, rename the file.

**3. Update robots.txt**

```
# Search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Social/preview bots
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

# AI search bots (allow — we want to appear in AI answers)
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

# AI training bots (allow with consideration)
# Allowing these means content may be used for model training.
# For a small consultant site, training inclusion = more visibility.
User-agent: Google-Extended
Allow: /

User-agent: Meta-ExternalAgent
Disallow: /

User-agent: Amazonbot
Allow: /

# Default
User-agent: *
Allow: /

Sitemap: https://dmytroai.com/sitemap.xml
```

**Rationale for Meta-ExternalAgent Disallow**: Meta's crawler is the 2nd-largest AI crawler (15.6% of AI bot traffic) and is used for LLM training. Meta does not operate a search/answer product that would cite dmytroai.com. Blocking it costs nothing in discoverability. Allow the rest — GPTBot, ClaudeBot, PerplexityBot, and Google-Extended all power products that can directly cite or surface the site.

**4. Fix FAQ schema parity**

Add the 6th FAQ item ("What kind of ROI can I expect?") to the JSON-LD in `index.html`, or remove it from the visible section. They must match.

**5. Fix canonical URL consistency**

Decide: `dmytroai.com` or `www.dmytroai.com`. Use one everywhere — `<link rel="canonical">`, JSON-LD `@id` and `url` fields, sitemap `<loc>` values.

### D2. Add Per-Page Metadata and Schema (This Week / Next Week)

**6. Install react-helmet-async (or equivalent)**

Every page needs its own `<title>` and `<meta name="description">`. For case studies, also add Article schema:

```json
{
  "@type": "Article",
  "headline": "24/7 AI Voice Receptionist for a NYC Restaurant",
  "author": { "@id": "https://dmytroai.com/#person" },
  "datePublished": "2026-02-01",
  "dateModified": "2026-03-15",
  "publisher": { "@id": "https://dmytroai.com/#business" },
  "description": "How The Paris Cafe stopped losing after-hours reservations...",
  "mainEntityOfPage": "https://dmytroai.com/case-studies/paris-cafe-voice-agent"
}
```

**7. Add transcript for Paris Cafe audio demo**

The audio demo is invisible to crawlers. Add a text transcript below the audio player, either always visible or in an expandable section.

### D3. Build Decision Pages (This Month)

Research shows comparison/decision content achieves 32-50% AI citation rates — the highest of any content type. The existing GEO-PLAN.md identified good targets. Prioritize by buyer intent:

**Priority 1 (build first 2-3):**
1. `/ai-automation-consultant-small-business` — "should I hire an AI automation consultant?"
2. `/ai-appointment-setter` — "AI appointment setter: how it works, what it costs"
3. `/n8n-vs-zapier-small-business` — "n8n vs Zapier for small business"

**Content structure for each (optimized for AI extraction):**
- **First 150 words**: Direct answer to the query. No preamble. AI models weight opening content heavily.
- **H2 sections**: Each self-contained and extractable. 60-100 words per paragraph.
- **Specific numbers**: Pricing, timelines, ROI — always with context.
- **"Not right for you if..."** section: Honest disqualification builds AI trust signals.
- **FAQ at bottom**: 3-5 page-specific questions with FAQPage schema.
- **CTA**: Book a call, with internal links to relevant case studies.

### D4. Content Freshness Strategy (Ongoing)

Pages updated within the last 30 days receive 3.2x more AI citations. For a solo consultant:
- Update case study pages quarterly with any new metrics or follow-up results
- Add `dateModified` to Article schema and actually change content (not just the date)
- Keep the `llms.txt` file updated when services or case studies change

---

## E. Experimental / Low-Confidence Ideas

These may help but lack strong evidence. Test them only after the high-confidence items are done.

| Idea | Why it might work | Why it might not | Recommendation |
|------|-------------------|-------------------|----------------|
| **`llms-full.txt`** | Gives AI systems complete site content in one fetch | No evidence of adoption by major AI services for small sites | Skip for now. Site is small enough that crawlers can index all pages directly. |
| **Pre-rendering / SSG** | Ensures AI crawlers see full HTML without JS execution | GPTBot and most modern crawlers render JS. Adds build complexity. | Consider only if you observe that case study content isn't appearing in AI answers despite good content. |
| **ROI calculator (interactive tool)** | Original GEO-PLAN.md suggested this. Interactive tools can generate unique, shareable content. | Crawlers can't use interactive tools. The value is in the static content surrounding it. | Build if you want it for conversion, not for GEO specifically. |
| **Industry-specific landing pages** (HVAC, real estate, etc.) | Targets long-tail queries like "AI automation for HVAC companies" | Thin content risk if you don't have real case studies for each industry | Only build pages where you have real experience or real data to share. Don't fabricate. |
| **Reddit/community seeding** | Perplexity over-indexes Reddit at 46.7% of top-10 citation share | Requires ongoing time investment. Inauthentic participation backfires. | Valuable if genuine. Answer questions you actually know the answer to. Don't manufacture posts. |
| **Schema for HowTo** | 1.7x citation lift when structured with HowTo schema | Only applicable if you have step-by-step process content | Add to decision pages that include "how it works" sections. |

---

## F. Proposed Content Architecture

### Current Pages
```
/ (homepage)
├── /#about
├── /#services
├── /#faq
├── /#testimonials
├── /#booking
/case-studies/
├── /case-studies/paris-cafe-voice-agent
├── /case-studies/instagram-lead-generation
├── /case-studies/ecommerce-crm-automation
/privacy
/terms
```

### Proposed Addition: Decision Pages
```
/ai-automation-consultant-small-business    ← "should I hire a consultant?"
/ai-appointment-setter                       ← "AI appointment setter guide"
/n8n-vs-zapier-small-business               ← tool comparison
/hire-ai-automation-consultant-vs-agency    ← consultant vs agency vs DIY
/ai-automation-hvac                          ← industry vertical (only if real data)
```

### Case Study Structure (keep current, enhance)
Each case study page should have:
- Page-specific `<title>` and `<meta description>`
- Article JSON-LD with author, dates, headline
- Internal links to related decision pages
- FAQ section at bottom with page-specific questions + FAQPage schema
- Transcript for any audio/video content

### Decision Page Template
```
URL: /[slug]
Title: [H1 that matches the query]
Schema: Article + FAQPage

Structure:
1. Direct answer (150 words, no preamble)
2. Who this is for / who it's not for
3. Key considerations (with specific numbers)
4. How Dmytro's approach differs
5. Relevant case study reference (internal link)
6. FAQ (3-5 questions, with schema)
7. CTA: Book a strategy call
```

---

## G. Technical Implementation Checklist

### Immediate (this week)

- [ ] Rename `public/llm.txt` → `public/llms.txt`
- [ ] Create `public/sitemap.xml` with all current routes
- [ ] Rewrite `public/robots.txt` with AI bot directives + Sitemap reference
- [ ] Add 6th FAQ to JSON-LD in `index.html` (match visible content)
- [ ] Fix canonical URL consistency (pick `dmytroai.com` or `www.dmytroai.com`, use everywhere)

### Soon (this month)

- [ ] Install `react-helmet-async` for per-page `<title>`, `<meta>`, and JSON-LD
- [ ] Add Article schema to each case study page
- [ ] Add page-specific meta descriptions to all sub-pages
- [ ] Add text transcript below Paris Cafe audio demo
- [ ] Update `llms.txt` content to reflect current services and all case studies
- [ ] Build first decision page (`/ai-automation-consultant-small-business`)

### Later (next 1-3 months)

- [ ] Build 2-4 more decision pages (prioritized by buyer intent)
- [ ] Add FAQPage schema to each decision page
- [ ] Set up AI citation tracking (see Section H)
- [ ] Consider adding `dateModified` to Article schema and establishing quarterly content refresh cadence
- [ ] Evaluate pre-rendering if JS rendering proves to be a crawlability issue

---

## H. Measurement Plan

### How to Track Whether GEO Is Working

**1. Manual Citation Tracking (free, start immediately)**

Weekly, run these queries across ChatGPT, Perplexity, and Google AI Overviews:
- "best AI automation consultant for small business"
- "AI automation consultant Calgary"
- "AI appointment setter for small business"
- "n8n automation consultant"
- "how to automate lead follow-up for [industry]"

Log: date, platform, query, whether dmytroai.com was cited, what was cited instead.

**2. GA4 AI Traffic Channel (free, set up once)**

Create a custom channel group in GA4 that captures AI-referred traffic:
- Regex pattern for source/medium: `chatgpt|perplexity|gemini|claude|copilot|ai-overview`
- Note: Many AI visits show as "direct" because referrer headers are stripped. This will undercount.

**3. "How did you find me?" tracking**

Add a question to the booking flow or follow-up: "How did you first hear about me?" Track mentions of ChatGPT, Perplexity, "asked AI", etc. For a solo consultant, one client attributing their discovery to AI is a meaningful signal.

**4. Search Console monitoring**

Monitor Google Search Console for:
- Impressions on target queries (especially long-tail decision queries)
- Click-through rates
- New pages being indexed

**5. Paid tools (optional, not recommended yet)**

- Otterly.ai ($25-99/mo): Automated AI citation tracking across platforms
- Consider only after you have 5+ decision pages live and want to track at scale

### What "working" looks like for a solo consultant site

| Timeframe | Realistic target |
|-----------|-----------------|
| 1 month | Technical foundations fixed. First decision page live. Manual tracking started. |
| 3 months | 3-5 decision pages indexed. First AI citation observed on at least one query. |
| 6 months | Appearing in 1-3 AI answers for core niche queries. 5-15% of organic sessions attributable to AI platforms. |
| 12 months | Consistent citations on 30%+ of tracked niche queries. At least 1 client per quarter attributing discovery to AI. |

---

## I. Prioritized Roadmap

### This Week (March 17-23)

1. **Rename `llm.txt` → `llms.txt`** (5 min)
2. **Create `sitemap.xml`** (30 min)
3. **Rewrite `robots.txt`** with AI bot directives (15 min)
4. **Fix FAQ JSON-LD parity** — add 6th question (15 min)
5. **Fix canonical URL consistency** (15 min)

Total: ~1.5 hours. All are deploy-and-done.

### This Month (March-April)

6. **Add per-page meta/title** via react-helmet-async (1-2 hrs)
7. **Add Article schema to case study pages** (1-2 hrs)
8. **Add Paris Cafe audio transcript** (30 min)
9. **Build first decision page**: `/ai-automation-consultant-small-business` (2-3 hrs)
10. **Set up manual citation tracking spreadsheet** (30 min)
11. **Set up GA4 AI traffic channel** (30 min)

### Next 1-3 Months

12. Build 2-3 more decision pages (prioritized from existing GEO-PLAN.md list)
13. Add FAQPage schema to decision pages
14. Quarterly case study content refresh (update metrics, add follow-up results)
15. Start publishing on LinkedIn (1 article/month with case study numbers)
16. Evaluate pre-rendering if JS crawlability issues are observed

### Later / Ongoing

17. Industry vertical pages (only where real data exists)
18. Reddit/community presence (organic, not manufactured)
19. Consider Otterly.ai if tracking needs grow
20. Revisit `llms-full.txt` if site grows significantly

---

## J. Risks and Cautions

### Privacy & Confidentiality in Case Studies
- **Paris Cafe**: Named, public restaurant. Low risk.
- **WheelsFeels**: Named, with owner's testimonial. Low risk if owner consented.
- **"Toufic Fares"**: Named in `llms.txt` but not in case study pages. Verify consent before including in any new content.
- **General rule**: Never publish client revenue numbers, customer lists, or internal metrics without explicit written permission. Stick to operational metrics (time saved, leads processed, response time).

### Benchmark Claim Discipline
- Current claims: "10+ hrs/week saved", "300%+ ROI", "$100K+ saved for clients annually", "50+ automations built"
- These appear in the hero, about section, and results section.
- **Risk**: If AI models cite these numbers, they become findable and quotable. Ensure every number is defensible.
- **Recommendation**: Document the basis for each claim internally. If a number is approximate or aspirational, either tighten it or qualify it ("across all client engagements" vs. "per client").

### Avoiding Fake Metrics / Vanity Signals
- Don't inflate numbers for GEO. AI models are trained on vast data and can be asked to verify claims.
- "50+ automations built" — is this 50 unique client projects, or 50 n8n workflows (which might be 10 projects)? Be precise.
- Better to say "15 client projects, 50+ individual automations" than overstate.

### SPA Rendering Risk
- The site is a React SPA. The homepage JSON-LD is in static HTML (good), but all page content is rendered client-side.
- GPTBot and most major AI crawlers can render JavaScript, but with varying reliability.
- **Mitigation**: Monitor which pages appear in search results. If case study pages aren't indexed after 30 days, consider pre-rendering (Vite SSG plugin or a prerender service).

### Don't Treat GEO as Separate from SEO
- Research consensus: ~80% of effective GEO is fundamentally good SEO.
- The work here (structured data, sitemaps, good content, clear headings) improves both.
- Don't buy "GEO-specific" tools or services. The fundamentals are the same.

### llms.txt Expectations
- Only 10% of sites have adopted `llms.txt`. Research shows 8 of 10 studied sites saw no measurable traffic change after implementing it.
- John Mueller (Google) confirmed no major AI service officially uses `llms.txt` as a ranking/citation signal.
- Implement it because it's cheap and there's no downside — but don't expect it to be a magic bullet. The real GEO value comes from content quality, structured data, and third-party authority.

---

## Appendix: AI Crawler User-Agent Reference

| Bot | User-Agent | Operator | Purpose | Recommended |
|-----|-----------|----------|---------|-------------|
| GPTBot | `GPTBot/1.0` | OpenAI | Model training | Allow |
| OAI-SearchBot | `OAI-SearchBot` | OpenAI | ChatGPT search results | Allow |
| ChatGPT-User | `ChatGPT-User` | OpenAI | User-initiated browsing | Allow (may not respect robots.txt) |
| ClaudeBot | `ClaudeBot` | Anthropic | Model training | Allow |
| Claude-SearchBot | `Claude-SearchBot` | Anthropic | Search result quality | Allow |
| Claude-User | `Claude-User` | Anthropic | User-initiated browsing | Allow |
| PerplexityBot | `PerplexityBot` | Perplexity | Answer engine indexing | Allow |
| Googlebot | `Googlebot` | Google | Search + AI Overviews | Allow |
| Google-Extended | `Google-Extended` | Google | Gemini training data | Allow |
| Bingbot | `Bingbot` | Microsoft | Bing + Copilot | Allow |
| Meta-ExternalAgent | `Meta-ExternalAgent` | Meta | LLM training | **Disallow** |
| Amazonbot | `Amazonbot` | Amazon | Alexa/Amazon AI | Allow |

**Strategy**: Allow everything except Meta-ExternalAgent. Meta doesn't operate an answer product that would cite your site. Everyone else either powers a search/answer engine (valuable) or trains models that may learn about you (neutral-to-positive for a small site seeking visibility).

---

## Appendix: Existing GEO-PLAN.md Assessment

The root-level `GEO-PLAN.md` (created March 7) contains good decision query research and content architecture proposals. Key issues to note:

1. **Uses `llm.txt` (singular)** — should reference `llms.txt` per the actual spec
2. **Says "New standard"** — `llms.txt` has very low adoption and no confirmed usage by major AI services. Implement it, but don't oversell its impact.
3. **Mentions "Retell AI"** in the llm.txt template — the live `llm.txt` and case studies reference VAPI, not Retell. The GEO-PLAN.md template is stale.
4. **Decision page proposals are still valid** — the 5 Priority 1 pages and 8 Priority 2 pages are well-chosen targets
5. **90-day execution plan is reasonable** but hasn't been executed (10 days have passed since creation)

This new plan supersedes GEO-PLAN.md for technical implementation guidance. The decision query research and content proposals in GEO-PLAN.md remain useful as a content backlog.
