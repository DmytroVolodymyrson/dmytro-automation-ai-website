# GEO Test Runner

Automated weekly tracker that runs GEO prompts against AI providers and records whether dmytroai.com appears in responses.

## Quick Start

```bash
# Dry run — see what prompts would be sent, no API calls
npm run geo:dry

# Run all providers that have API keys set
npm run geo

# Run a single provider
npx tsx scripts/geo-runner.ts --provider perplexity

# Run one tracked page only
npx tsx scripts/geo-runner.ts --page ai-appointment-setter

# Fast spot-check: one provider + one page
npx tsx scripts/geo-runner.ts --provider perplexity --page ai-automation-consultant-small-business
```

## Setup

1. Copy `.env.example` to `.env.local` (or export vars in your shell)
2. Add API keys for the providers you want to test:

| Provider | Env Var | Where to get it |
|----------|---------|-----------------|
| OpenAI | `OPENAI_API_KEY` | https://platform.openai.com/api-keys |
| Anthropic | `ANTHROPIC_API_KEY` | https://console.anthropic.com/settings/keys |
| Gemini | `GEMINI_API_KEY` | https://aistudio.google.com/apikey |
| Perplexity | `PERPLEXITY_API_KEY` | https://www.perplexity.ai/settings/api |

You only need the providers you want to track. The runner gracefully skips any provider without a key.

## How It Works

1. Reads prompts from `scripts/geo-prompts.json` (derived from `docs/geo-tracking.md`)
2. Sends each prompt to each available provider with web search / grounding enabled
3. Checks responses and citations for dmytroai.com or brand name mentions
4. Auto-scores each result: **L** (link), **M** (mention), **-** (absent)
5. Saves results to `docs/data/geo-results/`

### Auto-scoring limitations

The runner can auto-detect:
- **L** — direct link to dmytroai.com in citations or answer text
- **M** — brand name mention (Dmytro, dmytroai, Dmytro Automation, etc.)
- **-** — nothing found

It **cannot** auto-detect:
- **P** — paraphrase of our content (requires human judgment)
- **R** — listed in a recommendation set (requires context understanding)

Review the markdown summary after each run and upgrade any `-` scores to P or R if appropriate.

## Output

Each run creates two files in `docs/data/geo-results/`:

- `YYYY-MM-DD.json` — full machine-readable results (all answers, citations, latencies)
- `YYYY-MM-DD.md` — human-readable summary table

Running multiple times on the same day overwrites the same date's files.

## Provider Details

| Provider | Model | Search Method | Notes |
|----------|-------|---------------|-------|
| OpenAI | gpt-4o | Responses API + `web_search_preview` tool | Returns inline URL annotations |
| Anthropic | claude-sonnet-4 | Messages API + `web_search` tool | Returns web_search_result blocks |
| Gemini | gemini-2.5-flash | `google_search` grounding | Returns groundingMetadata chunks |
| Perplexity | sonar | Chat completions (search is built-in) | Returns top-level `citations` array |

### API vs UI differences

API results may differ from the web UI experience for each provider. The web UIs sometimes have additional search integration, personalization, or formatting that the APIs do not expose. This runner tests the API path, which is reproducible and scriptable. For the most complete picture, occasionally cross-check with manual UI runs per the process in `docs/geo-weekly-checklist.md`.

## Weekly Workflow

1. Every Friday, run `npm run geo`
2. Review the generated `.md` summary
3. Manually upgrade any `-` scores to P or R where appropriate
4. Commit the results to the repo: `git add docs/data/geo-results/ && git commit -m "data: geo run YYYY-MM-DD"`
5. Compare week-over-week using the JSON files or markdown tables

## Adding Prompts or Pages

Edit `scripts/geo-prompts.json` to add new tracked pages or prompts. The format is self-documenting. Keep `docs/geo-tracking.md` in sync for the human-readable reference.
