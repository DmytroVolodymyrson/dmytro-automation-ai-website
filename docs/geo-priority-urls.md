# GEO Priority URLs

Last updated: 2026-04-25 MDT

## GSC status snapshot

**GSC URL Inspection: PARTIAL SNAPSHOT FROM MANUAL UI** — Dmytro manually inspected 5 priority URLs in Google Search Console on Apr 25, 2026. Result: homepage is indexed; `/guides`, `/case-studies`, `/ai-automation-consultant-small-business`, and `/best-ai-automation-for-service-businesses` are discovered but not yet indexed. The remaining priority URLs still need manual URL Inspection or API access.

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
| `/case-studies` | Discovered — currently not indexed | Sitemap + referring page `/ai-automation-for-home-inspectors` | Last crawl N/A | Proof hub is discovered but uncrawled | Request indexing after linking proof from priority commercial pages |
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
| 2 | `/guides` | Guides \| Dmytro AI | Practical Guides for Small Business Automation | 200 | self | no | yes | — | **Discovered — currently not indexed** | Updated 2026-04-25 | Added 'Start Here' section; request indexing |
| 3 | `/case-studies` | Case Studies — AI Automation Results for Real Businesses \| Dmytro AI | Proven Automation Outcomes | 200 | self | no | yes | — | **Discovered — currently not indexed** | Not separately scored | Link proof to priority workflows and request indexing |
| 4 | `/ai-automation-consultant-small-business` | AI Automation Consultant for Small Business \| Dmytro AI | AI Automation Consultant for Small Businesses | 200 | self | no | yes | yes | **Discovered — currently not indexed** | Updated 2026-04-25 | Content improved with AEO answer block and schema; request indexing |
| 5 | `/what-does-an-ai-automation-consultant-do` | What Does an AI Automation Consultant Do? ... \| Dmytro AI | What Does an AI Automation Consultant Actually Do? | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Improve answer block and link to proof |
| 6 | `/ai-automation-consultant-pricing-small-business` | AI Automation Consultant Pricing for Small Business ... \| Dmytro AI | AI Automation Consultant Pricing for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Add fixed-price framing and proof examples |
| 7 | `/ai-automation-cost-small-business` | AI Automation Cost for Small Business ... \| Dmytro AI | AI Automation Cost for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Add cost ranges and related pricing links |
| 8 | `/best-ai-automation-for-service-businesses` | Best AI Automations for Service Businesses ... \| Dmytro AI | Best AI Automations for Service Businesses | 200 | self | no | yes | yes | **Discovered — currently not indexed** | Added to GEO tracking | Add stronger internal links, then request indexing |
| 9 | `/ai-automation-for-businesses-without-a-tech-team` | AI Automation for Businesses Without a Tech Team ... \| Dmytro AI | AI Automation for Businesses Without a Tech Team | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Add fit/not-fit details and case proof |
| 10 | `/n8n-vs-zapier-small-business` | n8n vs Zapier for Small Business \| Dmytro AI | n8n vs Zapier for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Add implementation examples and external template links |
| 11 | `/ai-appointment-setter` | AI Appointment Setter for Service Businesses \| Dmytro AI | AI Appointment Setter for Service Businesses | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Build hub links to setup/cost/ROI pages |
| 12 | `/ai-appointment-setter-cost-small-business` | AI Appointment Setter Cost for Small Business ... \| Dmytro AI | AI Appointment Setter Cost for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | 0 on fresh sample | Add more source-worthy pricing breakdown |
| 13 | `/ai-appointment-setter-roi-small-business` | AI Appointment Setter ROI for Small Business ... \| Dmytro AI | AI Appointment Setter ROI for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Tie to response-time and booking examples |
| 14 | `/ai-lead-follow-up-for-service-businesses` | AI Lead Follow-Up for Service Businesses \| Dmytro AI | AI Lead Follow-Up for Service Businesses | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Make canonical lead follow-up cluster page |
| 15 | `/ai-lead-follow-up-cost-small-business` | AI Lead Follow-Up Cost for Small Business ... \| Dmytro AI | AI Lead Follow-Up Cost for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Add cost drivers and case proof |
| 16 | `/ai-voice-agent-setup-cost-small-business` | AI Voice Agent Setup Cost for Small Business ... \| Dmytro AI | AI Voice Agent Setup Cost for Small Business | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Add scope tiers and related voice-agent pages |
| 17 | `/ai-voice-agent-for-restaurants` | AI Voice Agent for Restaurants ... \| Dmytro AI | AI Voice Agent for Restaurants | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Strengthen case-study linkage |
| 18 | `/ai-automation-for-restaurants` | AI Automation for Restaurants ... \| Dmytro AI | AI Automation for Restaurants | 200 | self | no | yes | yes | NOT INSPECTED | 0 on fresh/full samples | Use as restaurant canonical page |
| 19 | `/what-to-automate-first-for-restaurants` | What to Automate First for Restaurants ... \| Dmytro AI | What to Automate First for Restaurants | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Add decision tree and proof links |
| 20 | `/private-event-inquiry-follow-up-for-restaurants` | Private Event Inquiry Follow-Up for Restaurants ... \| Dmytro AI | Private Event Inquiry Follow-Up for Restaurants | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Add concrete intake workflow |
| 21 | `/missed-call-text-back-for-restaurants` | Missed Call Text-Back for Restaurants ... \| Dmytro AI | Missed Call Text-Back for Restaurants | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Tie to after-hours cluster |
| 22 | `/ai-automation-for-hvac-companies` | AI Automation for HVAC Companies ... \| Dmytro AI | AI Automation for HVAC Companies ... | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Strengthen local/service proof |
| 23 | `/what-to-automate-first-for-property-management-companies` | What to Automate First for Property Management Companies ... \| Dmytro AI | What to Automate First for Property Management Companies | 200 | self | no | yes | yes | NOT INSPECTED | 0 on latest full sweep | Tie to showing/maintenance/lease workflows |
| 24 | `/showing-coordination-automation-for-property-management-companies` | Showing Coordination Automation for Property Management Companies ... \| Dmytro AI | Showing Coordination Automation for Property Management Companies | 200 | self | no | yes | yes | NOT INSPECTED | 0 on fresh sample | Add workflow diagram/internal cluster links |
| 25 | `/ai-automation-for-auto-parts-ecommerce` | AI Automation for Auto Parts E-Commerce ... \| Dmytro AI | AI Automation for Auto Parts E-Commerce | 200 | self | no | yes | yes | NOT INSPECTED | 0 on fresh sample | Tie to WheelsFeels proof and fitment workflows |

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
