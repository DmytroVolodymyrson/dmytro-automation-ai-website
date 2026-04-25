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

# Weekly bounded sample (30 pages, Perplexity-first, executive report)
npm run geo:weekly

# Weekly dry run — preview which pages would be sampled
npm run geo:weekly:dry
```

## Setup

### CLI providers (no API keys needed)

OpenAI and Claude use local CLI subscriptions — flat-rate, no pay-per-token API keys.

| Provider | CLI Command | Subscription | Install |
|----------|-------------|--------------|---------|
| OpenAI | `codex exec -m gpt-5.4` | Codex CLI subscription | Install `codex`, then authenticate |
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

### Daily runs (default)

Each run creates two files in `docs/data/geo-results/`:

- `YYYY-MM-DD.json` — full machine-readable results (all answers, citations, latencies)
- `YYYY-MM-DD.md` — human-readable summary table

Running multiple times on the same day overwrites the same date's files.

### Weekly runs

Weekly runs output to `docs/data/geo-weekly/` with a `weekly-` prefix:

- `weekly-YYYY-MM-DD.json` — full results for the bounded sample
- `weekly-YYYY-MM-DD.md` — per-page summary table
- `weekly-YYYY-MM-DD-report.md` — executive report with metrics:
  - Visibility responses, citation/domain hits, mention hits, absent, errors
  - Provider breakdown table
  - Top cited external domains (competitors)
  - Strongest wins (pages with highest scores)
  - Biggest gaps (zero-score pages)
  - Action suggestions based on visibility rate

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

### Advanced CLI options

| Flag | Description | Example |
|------|-------------|---------|
| `--provider <name>` | Single provider override | `--provider perplexity` |
| `--providers <list>` | Comma-separated multi-provider override | `--providers perplexity,gemini` |
| `--page <id>` | Run a single page | `--page ai-appointment-setter` |
| `--sample-pages <N>` | Deterministic bounded sample of N pages | `--sample-pages 30` |
| `--sample-size <N>` | Backward-compatible alias for `--sample-pages` | `--sample-size 30` |
| `--run-id <id>` | Override output run id / filename stem | `--run-id smoke-weekly` |
| `--output-prefix <str>` | Prefix for output filenames | `--output-prefix weekly-` |
| `--output-dir <path>` | Output directory (relative to repo root) | `--output-dir docs/data/geo-weekly` |
| `--weekly-report` | Generate an executive markdown report | `--weekly-report` |
| `--report` | Backward-compatible alias for `--weekly-report` | `--report` |
| `--dry-run` | Preview prompts without making provider calls | `--dry-run` |

The `--sample-pages` option uses a deterministic seed based on the ISO week number, so the same pages are selected within a given week but the selection rotates across weeks.

### Perplexity as primary GEO signal

Perplexity (Sonar API) is the most useful provider for GEO measurement because:
- It has native web search built into every response (no grounding toggle needed)
- It returns structured `citations` arrays with the exact URLs it referenced
- Its API behavior closely mirrors the consumer Perplexity web product
- Citation pickup on Perplexity tends to be the earliest signal of GEO traction

For weekly bounded runs, Perplexity is listed first in the provider order. If only one provider is available, Perplexity alone produces a useful weekly signal.

### API vs UI differences

API and CLI results may differ from the web UI experience for each provider. The web UIs sometimes have additional search integration, personalization, or formatting that the APIs/CLIs do not expose. This runner tests the programmatic path, which is reproducible and scriptable. For the most complete picture, occasionally cross-check with manual UI runs per the process in `docs/geo-weekly-checklist.md`.

## Weekly Workflow

### Bounded weekly mode (recommended)

1. Every Friday, run `npm run geo:weekly` (or let the cron handle it)
2. This samples 30 pages deterministically (same pages within a week, rotates across weeks)
3. Provider priority: Perplexity first (best GEO signal), then Gemini, Codex CLI, Claude CLI
4. Review the executive report at `docs/data/geo-weekly/weekly-YYYY-MM-DD-report.md`
5. Manually upgrade any `-` scores to P or R where appropriate
6. Commit: `git add docs/data/geo-weekly/ && git commit -m "data: geo weekly run YYYY-MM-DD"`

### Full sweep (occasional)

1. Run `npm run geo` for a complete check across all 276+ pages
2. Review the generated `.md` summary
3. Spot-check only the pages that were improved, newly published, or showed movement
4. Commit the results to the repo: `git add docs/data/geo-results/ && git commit -m "data: geo run YYYY-MM-DD"`
5. Compare week-over-week using the JSON files or markdown tables

## Adding Prompts or Pages

Edit `scripts/geo-prompts.json` to add new tracked pages or prompts. Keep `docs/geo-tracking.md` in sync for the human-readable reference.

Use a bounded watchlist. Add a page only if it is:
- a primary commercial page
- a workflow / comparison page with distinct intent
- an industry page tied to a real service cluster or adjacent proof

Do not automatically track every new page the site publishes. Keep the watchlist useful and reviewable.
