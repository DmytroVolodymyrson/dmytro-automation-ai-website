# AI Style Learner

A template system that learns a writer's style from published posts and author edits. No ML, no AI dependencies — pure Node.js.

Clone once per persona or project. Each instance learns independently.

---

## For AI Agents: How to Set Up a New Instance

If you are an AI agent and someone has cloned this repo for a new project, follow this setup checklist:

### Step 1 — Understand the project context
Before touching anything, find answers to these questions:
- What platform(s) will this learn from? (Telegram, LinkedIn, Circle, Twitter, blog...)
- What language? (en, ru, uk, mixed?)
- What is the writer's persona goal? (personal brand, community member, client copywriter...)
- Is there an existing style profile or notes anywhere? Check:
  - Project AGENTS.md or CLAUDE.md
  - Any `docs/STYLE-PROFILE.md` or `memory/` folder in the parent project
  - Ask the user if nothing is found

### Step 2 — Configure `config.json`
Edit it with the real values:
```json
{
  "project": "<repo-name>",
  "persona": "<Name — role description>",
  "language": "<primary language code>",
  "platforms": ["<platform1>", "<platform2>"],
  "contentTypes": ["post", "comment", "reply"],
  "styleGoal": "<one sentence: what good writing looks like for this persona>",
  "hardRules": [
    "<rule 1 — e.g. No em-dashes>",
    "<rule 2>"
  ],
  "templateRepo": "DmytroVolodymyrson/ai-style-learner"
}
```

### Step 3 — Add the POST LOGGING TRIGGER to this project's AGENTS.md
Add this section at the top of AGENTS.md (create it if it doesn't exist):

```markdown
## 🔴 POST LOGGING TRIGGER (CRITICAL — Check Every Message)

**When the user pastes a final published post or comment** (phrases like "I posted this",
"here's what went live", "I ended up posting", or just sharing text + saying it went live):

Run this pipeline immediately, without being asked:
1. Create a post markdown file in posts/<platform>/<date>-<slug>.md
   Include: final text, media description (if any), engagement stats (if mentioned),
   what was changed from any AI draft
2. node src/learning/schema.js add --file posts/<platform>/<date>-<slug>.md
3. node src/learning/analyze.js --all
4. node src/learning/profile.js
5. git add -A && git commit -m "data: add post <date> <slug>" && git push

Do NOT wait to be asked. Do it in the same turn the user shares the final post.
```

### Step 4 — Seed the corpus with existing posts
If the user has published before, backfill:
- Ask the user to paste known published posts, OR
- Check if the platform has a public URL you can scrape (e.g. `https://t.me/s/<channel>`)
- For each post: create a markdown file in `posts/<platform>/`, run the pipeline

### Step 5 — Seed hard rules from existing style knowledge
If a style profile or notes exist:
- Extract hard rules (things never to do, signature phrases, format preferences)
- Add them to `config.json` under `hardRules`
- They will appear in the profile with `confidence: "proven"` automatically

### Step 6 — Run initial analysis and verify
```bash
node src/learning/analyze.js --all
node src/learning/profile.js --print
npm test
```
All tests should pass. Profile should show post count > 0.

### Step 7 — Commit and push
```bash
git add -A && git commit -m "config: initialize for <persona/project>" && git push
```

---

## For Humans: Quick Start

```bash
# Clone from template
gh repo create my-style-learner --template DmytroVolodymyrson/ai-style-learner --private
gh repo clone <your-username>/my-style-learner
cd my-style-learner

# Configure
nano config.json

# Add a post
node src/learning/schema.js add --file posts/linkedin/2026-03-07-my-post.md

# Analyze + build profile
node src/learning/analyze.js --all
node src/learning/profile.js --print

# Run tests
npm test
```

---

## Post Markdown Format

Create files in `posts/<platform>/YYYY-MM-DD-slug.md`:

```markdown
# Post: Your title here
**Date:** 2026-03-07
**Platform:** linkedin
**Language:** en
**Engagement:** 142 views, 12 reactions

## Final Published Text
Your post text here.

## Attached Media
- **Type:** image
- **Description:** What the image shows and why it was included

## Style Notes
- No AI draft — written directly
- OR: What you changed from the AI draft and why
```

---

## How Learning Compounds

| Observations | Confidence | Meaning |
|-------------|-----------|---------|
| 1-2 | `low` | Noticed, not yet a pattern |
| 3-5 | `medium` | Emerging pattern |
| 6-9 | `high` | Reliable |
| 10+ | `proven` | Hard rule |

---

## Project Structure

```
config.json              # Project config
src/learning/
  schema.js              # Post entry schema + factory
  analyze.js             # Style signal extraction
  diff.js                # Auto text diff (draft vs published)
  profile.js             # Aggregate profile builder
data/learning/
  corpus/                # Per-post JSON entries
  profile.json           # Aggregate style profile (rebuilt on every new post)
  profile-history/       # Timestamped snapshots
posts/                   # Raw post markdown files (one per published post)
tests/
  phase1.test.js         # 121 tests covering schema, analyze, profile
  phase2.test.js         # 78 tests covering diff, richer classification
  style-checker.js       # Style rule linter
  style-checker.test.js  # Style checker tests
docs/
  ARCHITECTURE.md        # Full system design
  SETUP.md               # Configuration guide
```

---

## Syncing with the Template

This repo is the canonical template. If you improve `src/learning/` or `tests/` in a project instance, port the generic version back here and commit.

Downstream instances: pull improvements from this template periodically.
