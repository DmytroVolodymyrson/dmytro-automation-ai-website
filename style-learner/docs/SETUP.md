# Setup Guide

## Quick Start

1. Clone this repository
2. Edit `config.json` with your settings
3. Add your first post to `posts/`
4. Run the learning pipeline

## Configuration

Edit `config.json` at the repository root:

```json
{
  "project": {
    "name": "my-style-learner",
    "description": "Style learning for my content"
  },
  "persona": {
    "name": "Your Name",
    "language": "en"
  },
  "platforms": ["twitter", "linkedin", "blog"],
  "platformLanguages": {
    "twitter": "en",
    "linkedin": "en",
    "blog": "en"
  },
  "languages": ["en"],
  "styleRules": {
    "violations": {
      "emDash": true,
      "yo": false
    }
  }
}
```

### Fields

- **platforms**: Array of platform names you publish to. These are used for validation.
- **platformLanguages**: Map of platform to language code. Used for language-specific analysis.
- **persona.language**: Default language for analysis.

## Adding Posts

Create markdown files in `posts/<platform>/`:

```markdown
# Post: My First Post

**Date:** 2026-03-06
**Engagement:** 120 views, 7 comments

## Final Published Text

Your actual published text goes here.

## Style Notes / Edits

- "building" -> "making" (more casual)
- Removed the detailed breakdown
- Added "all data stored securely"
```

## Running the Pipeline

```bash
# 1. Add a post to the corpus
npm run add-post -- --file posts/twitter/2026-03-06-my-post.md

# 2. Analyze all posts
npm run analyze

# 3. Build the aggregate profile
npm run build-profile

# 4. Run style checker
npm run check -- "your text here"

# 5. Run tests
npm test
```

## Understanding the Profile

After running the pipeline, check `data/learning/profile.json` for:
- Your typical sentence length and paragraph count
- Most common opener/closer patterns
- Punctuation preferences
- Edit patterns with confidence levels
- Word swap dictionary
