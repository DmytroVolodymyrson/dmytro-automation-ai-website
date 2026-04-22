# GEO Tracking: Core Decision Pages

Repeatable measurement system for checking whether dmytroai.com gets cited, mentioned, or paraphrased by AI answer engines.

## Canonical Prompt Source

Tracked pages and prompts live in `scripts/geo-prompts.json`.
That file is the source of truth for both the automated runner and manual spot checks.

## Current Tracked Pages

This watchlist is intentionally bounded. It covers the highest-value decision, comparison, geo, workflow, and vertical pages without turning the weekly run into noise or runaway API spend.

### Strategy + comparison pages
- `/ai-automation-consultant-small-business`
- `/n8n-vs-zapier-small-business`
- `/hire-ai-automation-consultant-vs-agency`
- `/ai-automation-consultant-pricing-small-business`
- `/ai-automation-consultant-vs-freelancer`
- `/how-to-hire-ai-automation-consultant`
- `/what-does-an-ai-automation-consultant-do`
- `/build-vs-buy-ai-automation`
- `/vapi-vs-retell-small-business`
- `/ai-appointment-setter-vs-receptionist`
- `/ai-appointment-setter-vs-virtual-assistant`
- `/ai-voice-agent-vs-voicemail`
- `/ai-voice-agent-vs-call-center`
- `/ai-voice-agent-vs-human-appointment-setter`
- `/n8n-vs-make-small-business`

- `/ai-automation-for-businesses-without-a-tech-team`

### Workflow + solution pages
- `/ai-appointment-setter`
- `/ai-appointment-setter-setup`
- `/ai-lead-follow-up-for-service-businesses`
- `/ai-lead-follow-up-cost-small-business`
- `/client-onboarding-automation`
- `/ai-automation-roi-guide`
- `/n8n-automation-examples-small-business`
- `/ai-email-sequence-automation`
- `/ai-voice-agent-lead-qualification`
- `/ai-voice-agent-roi-for-lead-follow-up`
- `/instant-lead-response-automation`
- `/contact-form-lead-follow-up-automation`
- `/missed-call-follow-up-automation`

### Geo + industry pages
- `/ai-automation-consultant-calgary`
- `/ai-automation-consultant-edmonton`
- `/ai-automation-for-hvac-companies`
- `/ai-automation-for-restaurants`
- `/ai-voice-agent-for-restaurants`
- `/missed-call-text-back-for-restaurants`
- `/ai-automation-for-real-estate`
- `/showing-coordination-automation-for-real-estate-teams`
- `/ai-lead-follow-up-for-mortgage-brokers`
- `/document-collection-automation-for-mortgage-brokers`
- `/incomplete-application-follow-up-for-mortgage-brokers`
- `/ai-automation-for-insurance-agencies`
- `/renewal-reminder-automation-for-insurance-agencies`
- `/quote-follow-up-automation-for-insurance-agencies`
- `/cross-sell-automation-for-insurance-agencies`
- `/ai-automation-for-property-management`
- `/maintenance-request-automation-for-property-management-companies`
- `/ai-automation-ecommerce`
- `/ai-automation-for-auto-parts-ecommerce`
- `/ecommerce-crm-automation-with-ai-follow-up`
- `/fitment-inquiry-automation-for-auto-parts-ecommerce`
- `/repeat-purchase-reactivation-automation-for-ecommerce-brands`
- `/customer-service-automation-for-ecommerce-brands`

## Weekly Check Process

1. Run the automated baseline first:
   - `npm run geo`
2. Review the generated markdown report in `docs/data/geo-results/YYYY-MM-DD.md`
3. Manually spot-check only:
   - the page you published or improved this week
   - any page that got its first non-zero score
   - 2-3 highest-value commercial pages if the automated run looks flat
4. Upgrade automated `-` scores to `P` or `R` if the answer clearly paraphrases the page or recommends Dmytro without a direct link
5. Note what changed versus last week: first citation, first name mention, dropped visibility, or new competitor pattern

## What to Record

For each prompt + platform combination, record one of:

| Code | Meaning |
|------|---------|
| **L** | Direct link to our page in response or citations |
| **M** | Mention of Dmytro / dmytroai.com by name (no link) |
| **P** | Paraphrase of our content (recognizable but no attribution) |
| **R** | Listed in a recommendation or comparison set |
| **-** | Not present at all |

## Scoring Rubric

Weekly score per page = sum of all prompt results across all platforms.

| Result | Points |
|--------|--------|
| L (link) | 3 |
| M (mention) | 2 |
| R (recommendation) | 2 |
| P (paraphrase) | 1 |
| - (absent) | 0 |

**Max possible per page per week:** 5 prompts x 4 platforms x 3 points = 60

## What Counts as Positive Movement

- **Week 1-2:** Baseline. Zeroes are normal.
- **Week 3-4:** Any non-zero score, especially on Perplexity, is a useful early signal.
- **Week 5-8:** Look for first mentions, paraphrases, or one page consistently surfacing ahead of the others.
- **After 8 weeks:** Pages still stuck at 0 should be reviewed for stronger specificity, proof, schema, and internal-link support.

## Tracking Table Template

Use this when you want a compact manual notes block for a specific page:

```text
Week of: YYYY-MM-DD
Page: /example-path

| Prompt | ChatGPT | Perplexity | Gemini | Claude |
|--------|---------|------------|--------|--------|
| 1      |         |            |        |        |
| 2      |         |            |        |        |
| 3      |         |            |        |        |
| 4      |         |            |        |        |
| 5      |         |            |        |        |

Total score this week: ___
Notes:
- 
```

## Automated Runner

The GEO test runner (`scripts/geo-runner.ts`) automates weekly checks across all 4 providers via their APIs.

```bash
npm run geo            # Run all tracked pages across all providers
npm run geo:dry        # Preview prompts without API calls
npx tsx scripts/geo-runner.ts --provider openai
npx tsx scripts/geo-runner.ts --page ai-voice-agent-restaurants
npx tsx scripts/geo-runner.ts --provider perplexity --page ai-automation-for-hvac-companies
```

Results are saved to `docs/data/geo-results/`:
- `YYYY-MM-DD.json` — full machine-readable results (answers, citations, latency, scores)
- `YYYY-MM-DD.md` — human-readable summary table

Requires: `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, `PERPLEXITY_API_KEY` in `.env.local`.

**Note:** API-based results may differ from browser UI results. APIs use web search tools but may not have the same retrieval index as the consumer products. Treat API results as a consistent, reproducible signal, not an exact replica of UI behavior.

## Tracking Expansion Rule

When a new page is published, add it to `scripts/geo-prompts.json` only if it is one of:
- a new primary commercial page
- a new workflow / comparison page with distinct intent
- an industry page that maps to a real service cluster

If a page is useful but not yet priority enough to track weekly, leave it out until:
- the page gets real clicks or leads
- a related case study ships
- a nearby tracked page starts showing GEO movement

---

## Baseline Run — 2026-03-27 (Perplexity MCP, manual)

Week of: 2026-03-27

AI Lead Follow-Up Page:
| Prompt | ChatGPT | Perplexity | Gemini | Claude |
|--------|---------|------------|--------|--------|
| 1      |         | -          |        |        |
| 2      |         | -          |        |        |
| 3      |         | -          |        |        |
| 4      |         | -          |        |        |
| 5      |         | -          |        |        |

AI Automation Consultant Calgary Page:
| Prompt | ChatGPT | Perplexity | Gemini | Claude |
|--------|---------|------------|--------|--------|
| 6      |         | -          |        |        |
| 7      |         | -          |        |        |
| 8      |         | -          |        |        |
| 9      |         | -          |        |        |
| 10     |         | -          |        |        |

Total score this week: 0 (Perplexity-only baseline)

## Baseline Run — 2026-03-27 (Full 4-provider API run)

All 4 providers, all 10 prompts. Full results in `docs/data/geo-results/2026-03-27.json`.

AI Lead Follow-Up Page:
| Prompt | OpenAI | Anthropic | Gemini | Perplexity |
|--------|--------|-----------|--------|------------|
| 1      | -      | -         | -      | -          |
| 2      | -      | -         | -      | -          |
| 3      | -      | -         | -      | -          |
| 4      | -      | -         | -      | -          |
| 5      | -      | -         | -      | -          |

AI Automation Consultant Calgary Page:
| Prompt | OpenAI | Anthropic | Gemini | Perplexity |
|--------|--------|-----------|--------|------------|
| 6      | -      | -         | -      | -          |
| 7      | -      | -         | -      | -          |
| 8      | -      | -         | -      | -          |
| 9      | -      | -         | -      | -          |
| 10     | -      | -         | -      | -          |

Total score this week: 0

Notes:
- First full 4-provider automated baseline via API.
- Score 0 across all providers — expected for early-stage GEO (week 1).
- All APIs returned substantive answers with web search grounding — no errors.
- dmytroai.com not yet in any provider's search index for these queries.
- Anthropic/Claude had highest latency (~20-40s) due to web search tool execution.
