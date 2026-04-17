# GEO Weekly Checklist

Repeatable checklist for every Friday after the cron reminder fires.
Time budget: 30-45 minutes.

---

## 1. Choose This Week's Focus

Pick one:

- [ ] **Publish** a new decision page from the roadmap queue (`docs/geo-roadmap.md`)
- [ ] **Improve** an existing page (content, schema, FAQ, freshness update)
- [ ] **Track only** (no publish/improve this week, just run checks)

Write it down:
> This week's focus: _______________

---

## 2. Publish or Improve

If publishing a new page:

- [ ] Page follows the decision page template (direct answer in first 150 words, H2 sections, specific numbers, FAQ at bottom)
- [ ] Article + FAQPage JSON-LD schema added
- [ ] Page-specific `<title>` and `<meta description>` set
- [ ] Internal links added: link to at least one case study and one related decision page
- [ ] Route added in `src/routes.tsx` and entry added to `sitemap.xml`
- [ ] `llms.txt` updated if the page covers a new service or topic area
- [ ] Update the "Live GEO Assets" table in `docs/geo-roadmap.md`

If improving an existing page:

- [ ] Identify what to improve (thin content, missing schema, stale metrics, weak opening)
- [ ] Make the change
- [ ] Update `dateModified` in Article schema
- [ ] Add the improvement to this week's tracking notes

---

## 3. Manual GEO Prompt Checks

Run the test prompts from `docs/geo-tracking.md` across ChatGPT, Perplexity, Gemini, and Claude.

For each page being tracked:

- [ ] Run all 5 prompts on ChatGPT
- [ ] Run all 5 prompts on Perplexity
- [ ] Run all 5 prompts on Gemini
- [ ] Run all 5 prompts on Claude

Record results using the codes from `docs/geo-tracking.md`:
- **L** = direct link, **M** = mention by name, **R** = listed in recommendation, **P** = paraphrase, **-** = absent

If you published a new page this week, add 3-5 test prompts for it to `docs/geo-tracking.md` so it gets tracked going forward.

---

## 4. Results Logging

Copy the tracking table template from `docs/geo-tracking.md` and fill it in:

```
Week of: YYYY-MM-DD

Page: _______________
| Prompt | ChatGPT | Perplexity | Gemini | Claude |
|--------|---------|------------|--------|--------|
| 1      |         |            |        |        |
| ...    |         |            |        |        |

Total score: ___
```

Note anything interesting:
- Which platform cited us first?
- Which prompt got the strongest result?
- Did any competitor appear that was not there last week?
- Did any previously-cited page drop off?

Keep the filled-in tables in `docs/geo-tracking.md` or a separate log file.

---

## 5. Next Decision

Before closing out, answer these:

- [ ] Is the current week's page performing well enough, or does it need revision next week?
- [ ] What is next week's focus? (publish / improve / track only)
- [ ] Are there any roadmap priority changes to make? If yes, update `docs/geo-roadmap.md`.

Write it down:
> Next week's plan: _______________

---

## Quick Reference

| Doc | What it contains |
|-----|-----------------|
| `docs/geo-roadmap.md` | Live assets, prioritized build queue, new-vs-improve rules, monthly review |
| `docs/geo-tracking.md` | Test prompts, scoring rubric, tracking table templates |
| `docs/geo-plan-2026-03.md` | Full GEO strategy, technical details, research notes |
