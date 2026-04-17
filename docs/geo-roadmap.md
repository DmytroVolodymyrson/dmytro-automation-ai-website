# GEO Roadmap

Last updated: 2026-04-17

## Live GEO Assets

| Asset | URL | Type | Status |
|-------|-----|------|--------|
| Homepage | `/` | Core page, JSON-LD (Person, LocalBusiness, FAQPage) | Live |
| Guides Hub | `/guides` | Index page | Live |
| Case Studies Index | `/case-studies` | Hub page | Live |
| Paris Cafe Voice Agent | `/case-studies/paris-cafe-voice-agent` | Case study | Live |
| Instagram Lead Gen | `/case-studies/instagram-lead-generation` | Case study | Live |
| E-commerce CRM | `/case-studies/ecommerce-crm-automation` | Case study | Live |
| AI Consultant (SMB) | `/ai-automation-consultant-small-business` | Decision page | Live |
| n8n vs Zapier | `/n8n-vs-zapier-small-business` | Comparison page | Live |
| AI Appointment Setter | `/ai-appointment-setter` | Decision page | Live |
| AI Lead Follow-Up | `/ai-lead-follow-up-for-service-businesses` | Decision page | Live |
| AI Consultant Calgary | `/ai-automation-consultant-calgary` | Geo landing page | Live |
| AI Consultant vs Agency | `/hire-ai-automation-consultant-vs-agency` | Comparison page | Live |
| HVAC Database Reactivation | `/hvac-database-reactivation` | Decision page | Live |
| AI Consultant vs Freelancer | `/ai-automation-consultant-vs-freelancer` | Comparison page | Live |
| AI Chatbot vs Voice Agent | `/ai-chatbot-vs-ai-voice-agent-for-lead-qualification` | Comparison page | Live |
| GoHighLevel vs Custom CRM | `/gohighlevel-vs-custom-crm-small-business` | Comparison page | Live |
| AI Consultant Pricing | `/ai-automation-consultant-pricing-small-business` | Decision page | Live |
| Best AI Automations for Service Businesses | `/best-ai-automation-for-service-businesses` | Decision page | Live |
| AI Automation for HVAC Companies | `/ai-automation-for-hvac-companies` | Industry page | Live |
| HVAC Lead Follow-Up Automation | `/hvac-lead-follow-up-automation` | Industry page | Live |
| HVAC Missed Call Text Back | `/hvac-missed-call-text-back` | Industry page | Live |
| AI Appointment Setter for HVAC | `/ai-appointment-setter-for-hvac` | Industry page | Live |
| `llms.txt` | `/llms.txt` | AI crawler file | Live |
| `sitemap.xml` | `/sitemap.xml` | Sitemap | Live |
| `robots.txt` | `/robots.txt` | Crawler directives (AI bots included) | Live |

**Total decision/comparison/industry pages live: 13**
**Total case studies live: 3**

---

## Next 8 Pages (Prioritized Queue)

| # | Priority | Page / Topic | Search Intent | Why It Matters | Status |
|---|----------|-------------|---------------|----------------|--------|
| 1 | **P0** | AI Voice Agent for Restaurants | "AI phone answering for restaurants" | Paris Cafe gives direct proof and a natural commercial follow-on page | Not started |
| 2 | **P0** | AI Automation Consultant Edmonton | "AI automation consultant Edmonton" | Reuses the Calgary geo pattern and expands Alberta local coverage | Not started |
| 3 | **P0** | AI Automation for Real Estate | "AI lead follow-up for real estate agents" | Strong service-business fit and natural extension of lead follow-up positioning | Not started |
| 4 | **P1** | AI Automation for Mortgage Brokers | "AI tools for mortgage brokers" | Another high-value service-business vertical with follow-up pain | Not started |
| 5 | **P1** | Client Onboarding Automation | "automate client onboarding service business" | Strong decision-intent workflow page, broad service-business relevance | Not started |
| 6 | **P1** | AI Automation ROI Calculator / Guide | "is AI automation worth it small business" | Useful decision-stage content and supports pricing + consultant pages | Not started |
| 7 | **P2** | n8n Automation Examples for Small Business | "n8n automation ideas small business" | Top-of-funnel authority page around a core tool | Not started |
| 8 | **P2** | AI Email Sequence Automation | "automate email follow-up with AI" | Supports CRM / follow-up cluster and ties to real implementation work | Not started |

### Priority Definitions

- **P0**: Build this month. High buyer intent, strong proof points exist, or fills a critical gap.
- **P1**: Build next month. Good opportunity but needs research or lacks a direct case study.
- **P2**: Backlog. Worth doing when P0/P1 are shipped and performing.

---

## New Page vs. Improve Existing Page

Create a new page when:
- The search intent is distinct from any existing page
- You have real data, case studies, or specific experience to back it
- The topic targets a different buyer persona or funnel stage

Improve an existing page when:
- The page already ranks or gets cited but the content is thin
- You have new metrics, testimonials, or case study results to add
- The page's FAQ section has fewer than 4 questions
- Schema markup is missing or incomplete (Article, FAQPage)
- The first 150 words do not directly answer the target query

Rule of thumb: if you are debating, check whether the target query would be well served by a section on an existing page. If it needs more than 200 words of new content and targets a meaningfully different intent, make it its own page.

---

## Monthly Review (do on the 1st of each month)

1. **Check live page count** against this roadmap. Update the "Live GEO Assets" table.
2. **Score each tracked page** using the weekly tracking system in `docs/geo-tracking.md`. Look for pages scoring 0 after 8+ weeks and flag them for content revision.
3. **Reprioritize the queue.** Move items up if a new case study or client result makes them stronger. Move items down if the vertical no longer fits.
4. **Update content freshness.** Pages not touched in 60+ days should get a meaningful content update (new metrics, refined copy, added FAQ). Update `dateModified` in Article schema when you do.
5. **Review competitor citations.** Run 3-5 core prompts in ChatGPT and Perplexity. Note which competitors appear. If a competitor consistently outranks on a query you target, read their page and identify what they have that you do not.
6. **Decide next month's build target.** Pick 1-2 pages from the queue. Commit to shipping them.
