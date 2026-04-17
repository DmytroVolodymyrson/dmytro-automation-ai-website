# GEO Tracking: Core Decision Pages

Repeatable measurement system for checking whether dmytroai.com gets cited, mentioned, or paraphrased by AI answer engines.

## Canonical Prompt Source

Tracked pages and prompts live in `scripts/geo-prompts.json`.
That file is the source of truth for both the automated runner and manual spot checks.

## Current Tracked Pages

- `/ai-automation-consultant-small-business`
- `/n8n-vs-zapier-small-business`
- `/ai-appointment-setter`
- `/ai-voice-agent-for-restaurants`
- `/ai-lead-follow-up-for-service-businesses`
- `/ai-automation-consultant-calgary`
- `/ai-automation-for-hvac-companies`

## Weekly Check Process

1. Run the automated baseline first:
   - `npm run geo`
2. Review the generated markdown report in `docs/data/geo-results/YYYY-MM-DD.md`
3. For any page you actively published or improved this week, manually spot-check the most important prompts in ChatGPT, Perplexity, Gemini, and Claude web UIs
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

```
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
