# GEO Tracking: AI Lead Follow-Up & AI Automation Consultant Calgary

Lightweight manual measurement system for tracking whether these two GEO landing pages get cited or referenced by AI systems.

## Pages Being Tracked

1. `/ai-lead-follow-up-for-service-businesses`
2. `/ai-automation-consultant-calgary`

## Test Prompts

Run these prompts weekly across ChatGPT, Perplexity, Gemini, and Claude. Record whether the page or dmytroai.com appears in responses or citations.

### AI Lead Follow-Up

1. "How does AI lead follow-up work for service businesses?"
2. "What is the best way to automate lead response for a home services company?"
3. "AI tools for faster lead follow-up in small business"
4. "How to respond to leads instantly using AI automation"
5. "What does AI lead follow-up cost for a small business?"

### AI Automation Consultant Calgary

6. "AI automation consultant in Calgary"
7. "Who can help my Calgary business automate workflows?"
8. "Best AI automation services for small businesses in Calgary Alberta"
9. "Calgary business automation consulting"
10. "AI consultant for HVAC company in Calgary"

## Weekly Check Process

1. Open ChatGPT, Perplexity, Gemini, and Claude (web versions)
2. Run each prompt as a fresh conversation (no prior context)
3. Check the response and any cited sources for:
   - Direct link to dmytroai.com
   - Mention of Dmytro, Dmytro AI, or Dmytro Automation
   - Content that clearly paraphrases our page copy
   - Listing in a recommendation or comparison
4. Record results in the tracking table below

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

- **Week 1-2:** Baseline. Score is likely 0 across the board. That is expected.
- **Week 3-4:** Any non-zero score on Perplexity is a good early signal (Perplexity indexes fastest).
- **Week 5-8:** Look for at least 1-2 mentions (M) or paraphrases (P) across any platform.
- **After 8 weeks:** Consistent scores above 5/week per page suggest the content is being picked up.

**Red flag:** If both pages score 0 after 8 weeks, revisit the content for stronger unique data points, more specific claims, or additional schema markup.

## Tracking Table Template

Copy this for each week:

```
Week of: YYYY-MM-DD

AI Lead Follow-Up Page:
| Prompt | ChatGPT | Perplexity | Gemini | Claude |
|--------|---------|------------|--------|--------|
| 1      |         |            |        |        |
| 2      |         |            |        |        |
| 3      |         |            |        |        |
| 4      |         |            |        |        |
| 5      |         |            |        |        |

AI Automation Consultant Calgary Page:
| Prompt | ChatGPT | Perplexity | Gemini | Claude |
|--------|---------|------------|--------|--------|
| 6      |         |            |        |        |
| 7      |         |            |        |        |
| 8      |         |            |        |        |
| 9      |         |            |        |        |
| 10     |         |            |        |        |

Total score this week: ___
Notes:
```

## Automated Runner

The GEO test runner (`scripts/geo-runner.ts`) automates weekly checks across all 4 providers via their APIs.

```bash
npm run geo            # Run all tracked pages across all providers
npm run geo:dry        # Preview prompts without API calls
npx tsx scripts/geo-runner.ts --provider openai  # Single provider
npx tsx scripts/geo-runner.ts --page ai-appointment-setter
npx tsx scripts/geo-runner.ts --provider perplexity --page ai-automation-for-hvac-companies
```

Results are saved to `docs/data/geo-results/`:
- `YYYY-MM-DD.json` — full machine-readable results (answers, citations, latency, scores)
- `YYYY-MM-DD.md` — human-readable summary table

Requires: `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, `PERPLEXITY_API_KEY` in `.env.local`.

Canonical prompt source: `scripts/geo-prompts.json`

**Note:** API-based results may differ from browser UI results. APIs use web search tools but may not have the same retrieval index as the consumer products. Treat API results as a consistent, reproducible signal — not an exact replica of UI behavior.

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
```
