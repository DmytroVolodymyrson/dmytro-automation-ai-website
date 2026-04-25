# GEO Priority URLs

Last updated: 2026-04-25 MDT

## GSC status snapshot
- Google Search Console sitemap submission is successful for `https://www.dmytroai.com/sitemap.xml`.
- Screenshot from Apr 25, 2026 shows `Status: Success`, `Last read: Apr 25, 2026`, and `Discovered pages: 320`.
- Live checks confirmed `robots.txt` and `sitemap.xml` return HTTP 200 and `robots.txt` points to the sitemap.
- This confirms discovery plumbing. It does **not** prove every URL is indexed or eligible for AI citation.

## Priority 25 URLs

| Priority | URL | Page | Cluster | GSC status | GEO status | Problem | Next action |
|---:|---|---|---|---|---|---|---|
| 1 | `/` | Core entity/homepage | brand/entity | Sitemap discovered; URL Inspection pending | Branded visible; category baseline weak | Entity ambiguity with other Dmytros | Clarify Person/ProfessionalService schema and sameAs |
| 2 | `/guides` | Guides hub | hub | Sitemap discovered; URL Inspection pending | Not separately scored | Hub must pass authority to priority clusters | Strengthen start-here links and cluster intros |
| 3 | `/case-studies` | Case studies index | proof | Sitemap discovered; URL Inspection pending | Not separately scored | Proof needs to support commercial pages | Link proof to priority workflows |
| 4 | `/ai-automation-consultant-small-business` | AI Automation Consultant for Small Business | strategy | Sitemap discovered; tracked | 0 on latest full sweep | Core category page not cited | Add stronger proof links, related links, entity language |
| 5 | `/what-does-an-ai-automation-consultant-do` | What Does an AI Automation Consultant Do? | strategy | Sitemap discovered; tracked | 0 on latest full sweep | Educational query should build topical authority | Improve answer block and link to proof |
| 6 | `/ai-automation-consultant-pricing-small-business` | AI Automation Consultant Pricing | strategy/pricing | Sitemap discovered; tracked | 0 on latest full sweep | Pricing queries are commercially valuable | Add fixed-price framing and proof examples |
| 7 | `/ai-automation-cost-small-business` | AI Automation Cost for Small Business | strategy/pricing | Sitemap discovered; tracked | 0 on latest full sweep | Cost intent attracts competitors | Add cost ranges and related pricing links |
| 8 | `/best-ai-automation-for-service-businesses` | Best AI Automation for Service Businesses | strategy | Sitemap discovered; not yet in bounded GEO watchlist | Not tracked in latest runner | Broad category answer not cited | Add to `scripts/geo-prompts.json` if selected for the next tracking update; make it canonical cluster summary |
| 9 | `/ai-automation-for-businesses-without-a-tech-team` | Automation Without a Tech Team | strategy | Sitemap discovered; tracked | 0 on latest full sweep | Strong small-business fit query | Add fit/not-fit details and case proof |
| 10 | `/n8n-vs-zapier-small-business` | n8n vs Zapier for Small Business | comparison | Sitemap discovered; tracked | 0 on latest full sweep | Comparison query needs authority | Add implementation examples and external template links |
| 11 | `/ai-appointment-setter` | AI Appointment Setter | workflow | Sitemap discovered; tracked | 0 on latest full sweep | High-intent workflow page | Build hub links to setup/cost/ROI pages |
| 12 | `/ai-appointment-setter-cost-small-business` | AI Appointment Setter Cost | workflow/pricing | Sitemap discovered; tracked | 0 on fresh sample | Fresh sample had 0 category visibility | Add more source-worthy pricing breakdown |
| 13 | `/ai-appointment-setter-roi-small-business` | AI Appointment Setter ROI | workflow/ROI | Sitemap discovered; tracked | 0 on latest full sweep | ROI intent needs proof | Tie to response-time and booking examples |
| 14 | `/ai-lead-follow-up-for-service-businesses` | AI Lead Follow-Up for Service Businesses | workflow | Sitemap discovered; tracked | 0 on latest full sweep | Core offer not cited | Make canonical lead follow-up cluster page |
| 15 | `/ai-lead-follow-up-cost-small-business` | AI Lead Follow-Up Cost | workflow/pricing | Sitemap discovered; tracked | 0 on latest full sweep | Commercial cost intent | Add cost drivers and case proof |
| 16 | `/ai-voice-agent-setup-cost-small-business` | AI Voice Agent Setup Cost | workflow/pricing | Sitemap discovered; tracked | 0 on latest full sweep | Voice agent pricing query | Add scope tiers and related voice-agent pages |
| 17 | `/ai-voice-agent-for-restaurants` | AI Voice Agent for Restaurants | restaurant/proof | Sitemap discovered; tracked | 0 on latest full sweep | Should leverage Paris Cafe proof | Strengthen case-study linkage |
| 18 | `/ai-automation-for-restaurants` | AI Automation for Restaurants | restaurant | Sitemap discovered; tracked | 0 on fresh/full samples | Industry cluster not cited | Use as restaurant canonical page |
| 19 | `/what-to-automate-first-for-restaurants` | What to Automate First for Restaurants | restaurant/strategy | Sitemap discovered; tracked | 0 on latest full sweep | Good answer-engine query | Add decision tree and proof links |
| 20 | `/private-event-inquiry-follow-up-for-restaurants` | Private Event Inquiry Follow-Up | restaurant/workflow | Sitemap discovered; tracked | 0 on latest full sweep | Niche workflow intent | Add concrete intake workflow |
| 21 | `/missed-call-text-back-for-restaurants` | Missed Call Text-Back for Restaurants | restaurant/workflow | Sitemap discovered; tracked | 0 on latest full sweep | Strong missed-call query | Tie to after-hours cluster |
| 22 | `/ai-automation-for-hvac-companies` | AI Automation for HVAC Companies | HVAC | Sitemap discovered; tracked | 0 on latest full sweep | Important service vertical | Strengthen local/service proof |
| 23 | `/what-to-automate-first-for-property-management-companies` | What to Automate First for Property Management | property management | Sitemap discovered; tracked | 0 on latest full sweep | Vertical strategy page | Tie to showing/maintenance/lease workflows |
| 24 | `/showing-coordination-automation-for-property-management-companies` | Showing Coordination Automation | property management/workflow | Sitemap discovered; tracked | 0 on fresh sample | Fresh sample had 0 category visibility | Add workflow diagram/internal cluster links |
| 25 | `/ai-automation-for-auto-parts-ecommerce` | AI Automation for Auto Parts E-Commerce | e-commerce/auto parts | Sitemap discovered; tracked | 0 on fresh sample | Fresh sample had 0 category visibility | Tie to WheelsFeels proof and fitment workflows |

## Indexing checks to run in GSC
- URL Inspection for priorities 1-10 first.
- Mark each URL as indexed, discovered not indexed, crawled not indexed, duplicate/canonical, or excluded.
- Request indexing only after a meaningful content/schema/internal-link update.

## GEO measurement status
- Branded/entity prompts currently show visibility, but entity ambiguity remains.
- Unbranded commercial prompts currently show near-zero direct citations/mentions.
- Weekly reporting should keep branded wins separate from category visibility.
