# GEO Test Runner

Automated weekly tracker that runs GEO prompts against AI providers and records whether dmytroai.com appears in responses.

## Quick Start

```bash
# Dry run — see what prompts would be sent, no API calls
npm run geo:dry

# Run all providers that are available
npm run geo

# Run a single provider
npx tsx scripts/geo-runner.ts --provider perplexity

# Run one tracked page only
npx tsx scripts/geo-runner.ts --page ai-appointment-setter

# Fast spot-check: one provider + one page
npx tsx scripts/geo-runner.ts --provider perplexity --page ai-automation-consultant-small-business
```

## Setup

### CLI providers (no API keys needed)

OpenAI and Claude use local CLI subscriptions — flat-rate, no pay-per-token API keys.

| Provider | CLI Command | Subscription | Install |
|----------|-------------|--------------|---------|
| OpenAI | `codex exec` | Codex CLI subscription | Install `codex`, then authenticate |
| Claude | `claude -p` | Claude Code Max subscription | Install `claude`, then authenticate |

The runner verifies each CLI is installed and authenticated before making any calls. If a CLI is missing or unauthenticated, that provider is skipped with a clear error; if no providers remain, the run exits. It will never fall back to an API key.

**OPENAI_API_KEY and ANTHROPIC_API_KEY are not used.** The runner explicitly blocks these environment variables from reaching CLI subprocesses.

### API providers (pay-per-token keys)

| Provider | Env Var | API Key URL |
|----------|---------|-----------------|
| Gemini | `GEMINI_API_KEY` | https://aistudio.google.com/apikey |
| Perplexity | `PERPLEXITY_API_KEY` | https://www.perplexity.ai/settings/api |

Copy `.env.example` to `.env.local` and fill in the API keys for the providers you want to test. The runner gracefully skips any API provider without a key.

## How It Works

1. Reads prompts from `scripts/geo-prompts.json`
2. Pre-flight: verifies CLI tools (`codex`, `claude`) are installed and authenticated
3. Sends each prompt to each available provider:
   - **CLI providers** (openai, claude): runs the prompt through the local CLI binary
   - **API providers** (gemini, perplexity): calls the provider's HTTP API with web search / grounding enabled
4. Extracts citations: API providers return structured citation data; CLI providers have URLs extracted from response text via regex
5. Checks responses and citations for dmytroai.com or brand name mentions
6. Auto-scores each result: **L** (link), **M** (mention), **-** (absent)
7. Saves results to `docs/data/geo-results/`

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

| Provider | Type | Model / CLI | Search Method | Notes |
|----------|------|-------------|---------------|-------|
| OpenAI | CLI | `codex exec` (Codex subscription) | Web search via Codex | URLs extracted from text output |
| Claude | CLI | `claude -p` (Claude Code Max) | Web search via Claude | URLs extracted from text output |
| Gemini | API | gemini-2.5-flash | `google_search` grounding | Returns groundingMetadata chunks |
| Perplexity | API | sonar | Chat completions (search is built-in) | Returns top-level `citations` array |

### CLI vs API providers

**CLI providers** (OpenAI, Claude) run through local subscription CLIs. They produce plain-text responses, so the runner extracts URLs via regex. This means citation coverage may differ from structured API responses, but it avoids all pay-per-token API spend for these two providers.

**API providers** (Gemini, Perplexity) use traditional HTTP API calls with structured citation data. These require API keys and incur per-token costs.

### API vs UI differences

API and CLI results may differ from the web UI experience for each provider. The web UIs sometimes have additional search integration, personalization, or formatting that the APIs/CLIs do not expose. This runner tests the programmatic path, which is reproducible and scriptable. For the most complete picture, occasionally cross-check with manual UI runs per the process in `docs/geo-weekly-checklist.md`.

## Weekly Workflow

1. Every Friday, run `npm run geo`
2. Review the generated `.md` summary
3. Manually upgrade any `-` scores to P or R where appropriate
4. Spot-check only the pages that were improved, newly published, or showed movement
5. Commit the results to the repo: `git add docs/data/geo-results/ && git commit -m "data: geo run YYYY-MM-DD"`
6. Compare week-over-week using the JSON files or markdown tables

## Adding Prompts or Pages

Edit `scripts/geo-prompts.json` to add new tracked pages or prompts. Keep `docs/geo-tracking.md` in sync for the human-readable reference.

Use a bounded watchlist. Add a page only if it is:
- a primary commercial page
- a workflow / comparison page with distinct intent
- an industry page tied to a real service cluster or adjacent proof

Do not automatically track every new page the site publishes. Keep the watchlist useful and reviewable.
