# GEO Priority URLs

Last updated: 2026-04-27 MDT

## GSC status snapshot

**GSC URL Inspection: PARTIAL SNAPSHOT FROM MANUAL UI** — Dmytro manually inspected 5 priority URLs in Google Search Console on Apr 25, 2026. Result: homepage is indexed; `/guides`, `/case-studies`, `/ai-automation-consultant-small-business`, and `/best-ai-automation-for-service-businesses` are discovered but not yet indexed. The remaining priority URLs still need manual URL Inspection or API access. On Apr 27, 2026, `/case-studies` got a bounded indexing refresh focused on a new buyer-question FAQ block with FAQPage schema plus stronger contextual routing into the highest-intent commercial and hub pages. Later the same day, `/guides` got a bounded refresh that added a bottleneck-based routing block plus a new answer-extractable FAQ so the hub now points more directly into lead-follow-up, appointment-setter, consultant, reactivation, and proof pages.

Background context:
- Google Search Console sitemap submission is successful for `https://www.dmytroai.com/sitemap.xml`.
- Screenshot from Apr 25, 2026 shows `Status: Success`, `Last read: Apr 25, 2026`, and `Discovered pages: 320`.
- Live checks confirmed `robots.txt` and `sitemap.xml` return HTTP 200 and `robots.txt` points to the sitemap.
- This confirms discovery plumbing. It does **not** prove every URL is indexed or eligible for AI citation. The partial manual snapshot shows discovery is working, but several important pages have not been crawled/indexed yet.


## Manual GSC URL Inspection snapshot (2026-04-25)

| URL | GSC status | Discovery/referring signal | Crawl details | Interpretation | Immediate action |
|---|---|---|---|---|---|
| `/` | URL is on Google; page is indexed | Indexed homepage | Enhancements visible: HTTPS + FAQ | Core entity page is indexed and eligible | No urgent action; request indexing only if homepage changed after last crawl |
| `/guides` | Discovered — currently not indexed | Sitemap + referring page `/ai-voice-agent-vs-human-appointment-setter` | Last crawl N/A | Google knows the hub exists but has not crawled it | Request indexing after strengthening hub links |
| `/case-studies` | Discovered — currently not indexed | Sitemap + referring page `/ai-automation-for-home-inspectors` | Last crawl N/A | Proof hub is discovered but uncrawled | Request indexing after the new FAQ + proof-routing refresh is live |
| `/ai-automation-consultant-small-business` | Discovered — currently not indexed | Sitemap + referring page `/guides` | Last crawl N/A | Main commercial category page is discovered but not crawled/indexed | Request indexing now; then strengthen links/proof |
| `/best-ai-automation-for-service-businesses` | Discovered — currently not indexed | Sitemap | Last crawl N/A | Important category page is discovered only through sitemap so far | Add stronger internal links, then request indexing |

## Technical indexability audit (2026-04-25)

Automated live-site checks via `scripts/audit-indexability.mjs`. All 25 URLs passed every technical check.

| Check | Result |
|---|---|
| HTTP 200 | 25/25 |
| In `sitemap.xml` | 25/25 |
| Self-referencing canonical | 25/25 |
| Missing canonical | 0 |
| `meta noindex` | 0 |
| `robots.txt` blocked | 0 |
| Tracked in `geo-prompts.json` | 22/25 |

**Not tracked in GEO prompts** (hub/structural pages, intentionally not prompt targets):
- `/` — homepage/entity page
- `/guides` — hub page
- `/case-studies` — proof hub page

`/best-ai-automation-for-service-businesses` is now added to `scripts/geo-prompts.json` because it is a priority commercial/category page.

## Priority 25 URLs — full audit

| # | URL | Title | H1 | HTTP | Canonical | Noindex | Sitemap | GEO tracked | GSC Inspection | GEO status | Next action |
|--:|---|---|---|:---:|:---:|:---:|:---:|:---:|---|---|---|
| 1 | `/` | Dmytro \| AI Automation Expert | Automate boring work. Focus on growth. | 200 | self | no | yes | — | **Indexed** | Branded visible; category baseline weak | Keep as entity anchor; no urgent GSC action |
| 2 | `/guides` | AI Automation Guides for Small Service Businesses \| Dmytro AI | Practical Guides for Small Business Automation | 200 | self | no | yes | — | **Discovered — currently not indexed** | Updated 2026-04-27 | Bounded indexing refresh: strengthened title/meta/OG to be keyword-specific; rewrote hero paragraph with direct links to the 5 highest-intent pages (consultant, best-automations, lead follow-up, appointment setter, case studies); added top-of-page FAQ section with 4 Q&As plus FAQPage JSON-LD schema; added a new bottleneck-based routing block that points directly into lead-follow-up, appointment-setter, best-first-automation, client-reactivation, consultant, and proof pages; request indexing after deploy |
| 3 | `/case-studies` | Case Studies — AI Automation Results for Real Businesses \| Dmytro AI | Proven Automation Outcomes | 200 | self | no | yes | — | **Discovered — currently not indexed** | Updated 2026-04-27 | Added a buyer-question FAQ block with 3 answer-extractable Q&As plus FAQPage schema, strengthened the intro with direct links to best-first-automation and /guides, and kept the proof-routing section pushing into the highest-intent consultant/lead-follow-up/appointment-setter pages; request indexing after deploy |
| 4 | `/ai-automation-consultant-small-business` | AI Automation Consultant for Small Business \| Dmytro AI | AI Automation Consultant for Small Businesses | 200 | self | no | yes | yes | **Discovered — currently not indexed** | Updated 2026-04-26 | Sharpened hero answer with pricing/timeline specifics; added 5 new internal links (what-does, pricing, how-to-hire, vs-diy, vs-agency) in body + comparison section + nav grid; expanded Continue Researching from 3→8 links; updated llm.txt/llms.txt descriptions; request indexing after deploy |
| 5 | `/what-does-an-ai-automation-consultant-do` | What Does an AI Automation Consultant Do? ... \| Dmytro AI | What Does an AI Automation Consultant Actually Do? | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Tightened the opening around first-project scoping and ownership, added a clearer first-engagement explanation, embedded more consultant-cluster/proof links inside the page cards, expanded related links into cost/time-savings/consultant-vs-freelancer pages, and refreshed llm.txt/llms.txt wording for cleaner AI extraction; request indexing after deploy |
| 6 | `/ai-automation-consultant-pricing-small-business` | AI Automation Consultant Pricing for Small Business ... \| Dmytro AI | AI Automation Consultant Pricing for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Added a new budget-band routing section (under ~$2K, ~$2K-$5K, $5K+), sharpened the hero around what each band usually buys, expanded internal links into consultant-role / cost / ROI / maintenance / no-tech-team / proof pages, refreshed the FAQ for under-$2K buyers, and updated llm.txt/llms.txt wording for cleaner AI extraction. Request indexing after deploy |
| 7 | `/ai-automation-cost-small-business` | AI Automation Cost for Small Business ... \| Dmytro AI | AI Automation Cost for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Added a new budget-routing block that sends readers into consultant pricing, ROI, time-savings, affordable-budget, maintenance, case-study, and guide paths; expanded bottom related links into the full budgeting/support cluster; sharpened the hero around where small-business budgets actually break down; added new FAQs on tight-budget first projects and support-vs-build cost; refreshed llm.txt/llms.txt summary language. Request indexing after deploy |
| 8 | `/best-ai-automation-for-service-businesses` | Best AI Automations for Service Businesses ... | Best AI Automations for Service Businesses | 200 | self | no | yes | yes | **Discovered — currently not indexed** | Updated 2026-04-27 | Added a new industry-routing section ("Find the guide for your industry") with 4 bottleneck-grouped cards (high call volume, appointment-heavy, long sales cycle, field service) linking to 20 industry-specific child pages; each card includes concrete outcome data and maps the reader's industry type to the right first automation. Previously added budget-first routing and sharpened FAQ. Request indexing after deploy |
| 9 | `/ai-automation-for-businesses-without-a-tech-team` | AI Automation for Businesses Without a Tech Team ... \| Dmytro AI | AI Automation for Businesses Without a Tech Team | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-26 | Added stronger direct-answer / first-project framing, tighter fit-not-fit signals, proof-aware case-study language, and higher-intent internal links to pricing, DIY, affordable, and case-study pages |
| 10 | `/n8n-vs-zapier-small-business` | n8n vs Zapier for Small Business \| Dmytro AI | n8n vs Zapier for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Added "Three real scenarios" section with concrete small-business decision framing (simple SaaS, custom lead-routing, inherited messy workflows); added 8 new internal links to n8n cluster pages (examples, consultant, hire, cost, DIY, audit checklist, cleanup service, cleanup-vs-rebuild) plus lead follow-up; expanded related-links from 2 to 4; request indexing after deploy |
| 11 | `/ai-appointment-setter` | AI Appointment Setter for Service Businesses \| Dmytro AI | AI Appointment Setter for Service Businesses | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-26 | Added a top-of-page cluster-routing block to setup, cost, ROI, DIY-vs-hire, voice-vs-human, and home-service child pages; added contextual internal links in evaluation/proof sections; request indexing after deploy |
| 12 | `/ai-appointment-setter-cost-small-business` | AI Appointment Setter Cost for Small Business ... \| Dmytro AI | AI Appointment Setter Cost for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Added 6-tier pricing-band breakdown with concrete scope/inclusions per band; added contextual internal links on all 4 cost-driver cards to voice-agent, booking, no-show, lead-follow-up, and qualification pages; expanded case-study links (+ROI, +missed-call-text-back-vs-phone); added FAQ on $2K–$4K band inclusions; grew relatedLinks from 5→10 covering ROI, DIY, voice-agent, and phone-answering cluster; request indexing after deploy |
| 13 | `/ai-appointment-setter-roi-small-business` | AI Appointment Setter ROI for Small Business ... \| Dmytro AI | AI Appointment Setter ROI for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-26 | Added clickable ROI-model links into instant-response, manual-callback, voice-vs-human, setup, cost, and home-service pages; strengthened proof section around the sub-60-second response example and replaced generic related links with tighter appointment-setter cluster routes; request indexing after deploy |
| 14 | `/ai-lead-follow-up-for-service-businesses` | AI Lead Follow-Up for Service Businesses \| Dmytro AI | AI Lead Follow-Up for Service Businesses | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Added a top-of-page cluster-routing block to instant response, missed-call text-back, estimate follow-up, cost, proof, and appointment-setter pages so the parent guide now points directly into the highest-intent child workflows; request indexing after deploy |
| 15 | `/ai-lead-follow-up-cost-small-business` | AI Lead Follow-Up Cost for Small Business ... \| Dmytro AI | AI Lead Follow-Up Cost for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-26 | Added a sharper direct-answer hero with concrete price bands, a new budget-band explainer section, stronger adjacent proof/case-study routing, a natural pricing link from the parent lead-follow-up page, and refreshed llm/llms cluster summaries; request indexing after deploy |
| 16 | `/ai-voice-agent-setup-cost-small-business` | AI Voice Agent Setup Cost for Small Business ... \| Dmytro AI | AI Voice Agent Setup Cost for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Tightened the hero around realistic $2.5K-$5.5K production setup ranges, sharpened the setup-scope tiers and setup-vs-total-cost framing, and added natural cluster links from the setup-help, broader voice-agent cost, ROI, and setup-mistakes pages so the setup-cost page is easier to discover and classify |
| 17 | `/ai-voice-agent-for-restaurants` | AI Voice Agent for Restaurants ... \| Dmytro AI | AI Voice Agent for Restaurants | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-26 | Rewrote the opening around Paris Cafe proof (0%→100% after-hours coverage, under-60-second lead response, ~15 hrs/week freed), added contextual internal links into the restaurant phone/booking cluster, refreshed llm/llms summaries, and linked the first-project page back into this voice-agent guide; request indexing after deploy |
| 18 | `/ai-automation-for-restaurants` | AI Automation for Restaurants ... \| Dmytro AI | AI Automation for Restaurants | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Reframed the hero around the exact narrow restaurant workflows worth automating first, added an early cluster-routing section, expanded contextual internal links to the strongest restaurant children plus guides/case-studies/best-ai-automation hubs, and refreshed llm/llms positioning so this is a stronger canonical restaurant parent; request indexing after deploy |
| 19 | `/what-to-automate-first-for-restaurants` | What to Automate First for Restaurants ... \| Dmytro AI | What to Automate First for Restaurants | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Added clickable decision-tree routing under all four first-project cards (missed calls, reminders, private events, after-hours coverage) plus direct proof/adjacent links into Paris Cafe and the restaurant child pages; request indexing after deploy |
| 20 | `/private-event-inquiry-follow-up-for-restaurants` | Private Event Inquiry Follow-Up for Restaurants ... \| Dmytro AI | Private Event Inquiry Follow-Up for Restaurants | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Added an answer-extractable 5-step intake-to-handoff workflow, tightened hero copy around under-60-second acknowledgement and clean human handoff, and expanded restaurant-cluster/proof links to what-to-automate-first, after-hours phone answering, missed-call recovery, reservation reminders, and Paris Cafe proof; request indexing after deploy |
| 21 | `/missed-call-text-back-for-restaurants` | Missed Call Text-Back for Restaurants ... \| Dmytro AI | Missed Call Text-Back for Restaurants | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Added contextual internal links into the restaurant after-hours, voice-agent, reservation-reminder, comparison, and proof paths; added parent-page routing from the main restaurant guide so the zero-visibility child sits more clearly inside the after-hours cluster; request indexing after deploy |
| 22 | `/ai-automation-for-hvac-companies` | AI Automation for HVAC Companies — What Actually Works Today \| Dmytro AI | AI Automation for HVAC Companies — What Actually Works Today | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Bounded indexing refresh: strengthened direct-answer hero with six production-ready automations, added 10-link cluster routing block, added contextual internal links on all three category cards, promoted HVAC database reactivation as lead proof card, added Continue Researching section with 8 related links including comparison pages and /guides + /case-studies + /best-ai-automation-for-service-businesses, updated llm.txt/llms.txt HVAC summary; request indexing after deploy |
| 23 | `/what-to-automate-first-for-property-management-companies` | What to Automate First for Property Management Companies ... \| Dmytro AI | What to Automate First for Property Management Companies | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Added clickable first-project routing under all four decision cards plus stronger cluster links to maintenance, lease-renewal, showing, after-hours, and triage pages; request indexing after deploy |
| 24 | `/showing-coordination-automation-for-property-management-companies` | Showing Coordination Automation for Property Management Companies ... \| Dmytro AI | Showing Coordination Automation for Property Management Companies | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Added clickable internal-link routing under all six operating cards so the page now routes cleanly into the parent property-management guide, first-project selector, maintenance/after-hours siblings, tenant communication/onboarding, owner-reporting, and the Paris Cafe proof path; request indexing after deploy |
| 25 | `/ai-automation-for-auto-parts-ecommerce` | AI Automation for Auto Parts E-Commerce ... \| Dmytro AI | AI Automation for Auto Parts E-Commerce | 200 | self | no | yes | yes | NOT INSPECTED | Updated 2026-04-27 | Tightened the opening around the four highest-ROI auto-parts workflow leaks, made the WheelsFeels 5,600+ contact proof more explicit, expanded child-page routing on the parent guide, added a new contextual internal-link section on the WheelsFeels case study, and refreshed llm/llms summaries for the auto-parts parent; request indexing after deploy |

## Next manual GSC actions

1. **URL Inspection for priorities 1-10 first.** Open GSC > URL Inspection, paste each full URL, and record:
   - indexed
   - discovered-not-indexed
   - crawled-not-indexed
   - duplicate/canonical
   - excluded
2. **Request indexing** only after a meaningful content/schema/internal-link update lands.
3. **If any URL shows “discovered not indexed”**: improve internal links from homepage/guides/case studies and resubmit after the update.
4. **If any URL shows “crawled not indexed”**: strengthen unique proof, reduce templated similarity, and add clearer answer blocks before requesting reindexing.
5. **Future automation**: to inspect URL status programmatically, create a Google Cloud service account with Search Console API access and add it to the GSC property. No such integration exists locally right now.

## GEO measurement status
- Branded/entity prompts currently show visibility, but entity ambiguity remains.
- Unbranded commercial prompts currently show near-zero direct citations/mentions.
- Weekly reporting should keep branded wins separate from category visibility.

## Reproducibility

Re-run the audit at any time:

```bash
node scripts/audit-indexability.mjs          # human-readable
node scripts/audit-indexability.mjs --json   # machine-readable JSON
```
