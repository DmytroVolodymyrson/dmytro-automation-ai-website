# Style Learning System - Architecture

## Problem

The style profile is a static document written once. It doesn't learn from new posts. Every time the author edits an AI draft, the corrections vanish -- we make the same mistakes again next session. We need a system that accumulates style knowledge from every published post and every edit.

## Design Principles

1. **No ML, no AI dependencies.** Pure structured JSON analysis with Node.js.
2. **File-based storage.** Posts stored as JSON files, profile as a single JSON file. No database.
3. **Additive learning.** Each new post enriches the profile. Nothing is lost.
4. **Diff-first.** The most valuable signal is what the author changes from an AI draft.
5. **Confidence via frequency.** A pattern observed 10 times is weighted higher than one seen once.

## System Overview

```
posts/*.md          src/learning/           data/learning/
(human-authored) --> schema.js              corpus/
                     analyze.js         --> {post}.json (per-post analysis)
                     profile.js         --> profile.json (aggregate style profile)
```

### Workflow

1. **Capture**: After a post is published, create a structured entry in `data/learning/corpus/`
2. **Analyze**: Run `analyze.js` on the entry to extract style signals
3. **Build**: Run `profile.js` to rebuild the aggregate profile from all analyzed entries
4. **Apply**: When drafting new content, read `data/learning/profile.json` for guidance

## Configuration

All project-specific settings live in `config.json` at the repo root:

```json
{
  "project": { "name": "my-style-learner" },
  "persona": { "name": "Author", "language": "en" },
  "platforms": ["twitter", "linkedin", "blog"],
  "platformLanguages": { "twitter": "en", "linkedin": "en", "blog": "en" }
}
```

## Data Model

### Post Entry (`data/learning/corpus/{date}-{slug}.json`)

```json
{
  "schemaVersion": 1,
  "id": "2026-03-06-my-post",
  "platform": "twitter",
  "language": "en",
  "date": "2026-03-06",
  "dayOfWeek": "friday",
  "published": {
    "text": "Friday. Several projects in flight...",
    "formatting": ["bold:Friday"],
    "media": [{ "type": "image", "file": "screenshot.png", "description": "Dashboard screenshot" }]
  },
  "draft": {
    "text": "Friday. Building a voice agent...",
    "source": "claude"
  },
  "engagement": { "views": 120, "comments": 7 },
  "edits": [
    { "type": "word_swap", "draft": "building", "final": "making", "reason": "more casual" },
    { "type": "cut", "description": "Removed detailed pipeline breakdown" },
    { "type": "addition", "text": "all data stored securely", "reason": "trust signal" }
  ],
  "analysis": null
}
```

### Aggregate Profile (`data/learning/profile.json`)

Built by `profile.js` from all analyzed corpus entries. Contains:
- Structure statistics (paragraph count, sentence length, word count)
- Opener/closer pattern frequencies with examples
- Punctuation usage rates
- Vocabulary preferences
- Edit pattern frequencies with confidence scores
- Word swap dictionary
- Engagement correlations

## Confidence Scoring

Patterns are tagged with confidence based on observation count:

| Count | Confidence | Meaning |
|-------|-----------|---------|
| 1-2   | `low`     | Observed, not yet a pattern |
| 3-5   | `medium`  | Emerging pattern, worth following |
| 6-9   | `high`    | Reliable pattern |
| 10+   | `proven`  | Definitive style rule |

## File Structure

```
config.json                  # Project configuration
data/
  learning/
    corpus/                  # One JSON per published post
    profile.json             # Aggregate style profile
    profile-history/         # Snapshots for tracking evolution
src/
  learning/
    schema.js                # Post entry schema + validation + factory
    analyze.js               # Extract style signals from a post entry
    profile.js               # Build/update aggregate profile from corpus
posts/                       # Raw post markdown files
tests/
  style-checker.js           # Style rule checker
  style-checker.test.js      # Tests for style checker
  phase1.test.js             # Comprehensive Phase 1 tests
  sample-texts.json          # Sample texts for testing
```

## Implementation Phases

### Phase 1: Foundation
- Post entry schema with validation
- Basic text analysis (sentence length, word count, punctuation)
- Manual entry of edits (structured in the markdown)
- Profile aggregation with confidence scoring

### Phase 2: Richer Analysis
- Automatic diff between draft and published text
- Opener/closer pattern classification
- Structural template extraction
- Platform-specific profile sections

### Phase 3: Application
- Profile-aware draft generation prompts
- Style compliance checker (does this draft match the learned profile?)
- Engagement correlation (which patterns correlate with higher engagement?)

### Phase 4: Automation
- Auto-capture from publishing platforms (API integration)
- Engagement stats auto-update
- Profile rebuild on every new post (CI hook)

## How Learning Compounds

```
Post 1:  "cuts-detail-lists" observed once     -> confidence: low
Post 5:  "cuts-detail-lists" observed 4 times  -> confidence: medium
Post 10: "cuts-detail-lists" observed 8 times  -> confidence: high
Post 15: "cuts-detail-lists" observed 12 times -> confidence: proven
```

At `proven`, the pattern becomes a hard rule in draft generation.
