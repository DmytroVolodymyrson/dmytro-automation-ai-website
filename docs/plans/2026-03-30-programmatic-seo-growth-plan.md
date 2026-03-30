# Programmatic SEO Growth Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Extend the existing GEO strategy for dmytroai.com into a bounded, high-quality programmatic SEO workstream that can generate more high-intent surface area without turning the site into thin-page spam.

**Architecture:** Keep this inside the existing website project. Treat GEO as the trust/citation layer and programmatic SEO as the scalable capture layer. Manage execution as a growth initiative in Paperclip, but do not create a separate repo or standalone project unless we later build a reusable page-generation engine for multiple sites.

**Tech Stack:** React, Vite, TypeScript, Tailwind, current website content system, PostHog, Search Console / GEO tracking, Paperclip issues for execution management

---

## Important note on source quality

I attempted to pull the full YouTube transcript for `YeoGehNsrLc`, but YouTube exposed the auto-caption track without returning subtitle payloads from this environment. So this plan is based on:
- the video title / page metadata available from YouTube
- current dmytroai.com GEO strategy documents
- current website project memory/status
- current Paperclip operating direction
- web research on 2025 programmatic SEO best practices and failure modes

That means this is strong enough for planning, but not yet a word-for-word transcript extraction.

## Bottom-line recommendation

### What we should do
- Keep the **existing GEO strategy**.
- Add a **bounded programmatic SEO layer**.
- Focus on **high-intent, high-specificity pages**, not mass city spam.
- Track this as a **growth initiative inside the website project**.
- Use **Paperclip issues** to manage execution.

### What we should not do
- Do **not** create a separate repo yet.
- Do **not** generate hundreds of thin pages.
- Do **not** create industry/location pages where we have no proof, case study, or credibility.
- Do **not** split GEO and programmatic SEO into separate businesses or parallel project structures.

## Why this matters

Our current website strategy already has strong GEO foundations:
- FAQ/schema
- case studies
- `llm.txt` / `llms.txt` discussion
- decision pages
- citation tracking direction

Programmatic SEO can help only if it amplifies those strengths.
For a solo consultant site, the winning move is not "publish 1,000 pages."
The winning move is:
- pick tight search patterns with buying intent
- build reusable templates with real proof and differentiation
- start small
- measure citations + conversions, not traffic vanity

## Management recommendation

### Use one existing website project, not a new standalone project

**Recommended structure:**
- **Repo ownership:** `projects/dmytroai-website`
- **Execution tracking:** one Paperclip initiative / project for website growth
- **Workstreams inside it:**
  1. GEO foundations
  2. Programmatic SEO pilot
  3. Measurement / attribution
  4. Conversion optimization

### When to create a separate project later
Create a separate project only if one of these becomes true:
- we build a reusable page-generation engine for multiple client sites
- we create a separate content/data pipeline with its own codebase
- this grows into a distinct content-ops product or service line

Right now, that would be premature.

## Strategic direction: GEO + Programmatic SEO

### GEO should keep doing this
- help Dmytro show up in AI-generated recommendations
- reinforce trust, authority, and extractable answers
- make decision pages and case studies more citable

### Programmatic SEO should add this
- more query coverage for long-tail buyer-intent searches
- more structured landing surfaces for niche intents
- more internal-link depth into case studies and booking CTAs

### The combined model
Think of it this way:
- **GEO = recommendation layer**
- **Programmatic SEO = discoverability layer**
- **Conversion work = monetization layer**

## Best-practice constraints from research

These are the rules we should use before creating any pages.

### 1. Start with a pilot, not scale
Start with **20-30 pages max** in the first batch.
Do not go larger until:
- content quality is validated
- indexing is healthy
- internal linking works
- at least some conversion / citation signal appears

### 2. Use only high-intent page patterns
Strong candidates for this site:
- consultant vs agency / DIY
- service + business-type pages where we have proof
- problem-solution pages
- use-case pages
- platform-comparison pages
- local pages only where authenticity exists

### 3. Each page needs genuine uniqueness
Every template must include enough unique value to avoid thin-page risk.
That means each page should have some mix of:
- a direct answer section
- real examples or case-study references
- who it is for / not for
- implementation considerations
- internal links to proof
- page-specific FAQ
- page-specific CTA context

### 4. Prioritize business outcomes over traffic
Success metrics should be:
- citations / mentions in AI answers
- qualified landing-page sessions
- CTA interactions
- booked calls
- pipeline conversations

Traffic alone is not enough.

### 5. Human review stays required
No autopublishing without review.
Templates and datasets can scale drafting, but publishing should remain human-reviewed until there is a proven quality bar.

## Recommended content patterns for dmytroai.com

## Pattern A: Industry pages with proof
Build only where Dmytro has real experience or adjacent proof.

Examples:
- `/ai-automation-for-hvac-companies`
- `/ai-lead-follow-up-for-mortgage-brokers`
- `/ai-automation-for-auto-parts-ecommerce`

Requirements:
- relevant case-study references
- specific operational pains
- concrete use cases
- explicit "not right for you if" section

## Pattern B: Decision/comparison pages
This is already aligned with the current GEO plan and should remain the top priority.

Examples:
- `/hire-ai-automation-consultant-vs-agency`
- `/n8n-vs-zapier-small-business`
- `/vapi-vs-retell-for-small-business`
- `/ai-appointment-setter-vs-human-va`

## Pattern C: Problem-solution pages
Target the job-to-be-done directly.

Examples:
- `/after-hours-lead-capture-for-service-businesses`
- `/missed-calls-follow-up-automation`
- `/ai-lead-follow-up-for-service-businesses`
- `/booking-confirmation-and-reminder-automation`

## Pattern D: Local-intent pages, used carefully
Do this only if it remains authentic and commercially relevant.

Examples:
- `/ai-automation-consultant-calgary`
- `/ai-automation-consultant-alberta`
- `/ai-automation-consultant-canada`

Avoid fake city explosion. No 200-city rollout.

## Recommended Paperclip issue structure

Create one website growth initiative in Paperclip, then add these epics/issues.

## Epic 1: Programmatic SEO strategy and quality guardrails

### Issue 1.1 — Define the page-pattern matrix
**Outcome:** a single source of truth for what patterns we will and will not build.

Tasks:
- list all candidate content patterns
- sort by intent and proof strength
- reject low-credibility patterns
- rank the top 3 patterns for the pilot

Deliverable:
- `docs/programmatic-seo-pattern-matrix.md`

### Issue 1.2 — Define quality gates for templated pages
**Outcome:** every templated page must pass a clear quality bar before publication.

Tasks:
- define minimum unique sections per page
- define banned thin-page behaviors
- define human review checklist
- define required proof/internal-link elements

Deliverable:
- `docs/programmatic-seo-quality-gates.md`

### Issue 1.3 — Decide pilot scope
**Outcome:** a capped first batch with clear limits.

Tasks:
- choose 1-2 page patterns only
- choose 20-30 pages maximum
- define publish/no-publish criteria
- define success metrics for the pilot

Deliverable:
- pilot scope section in planning docs

## Epic 2: Content architecture and templates

### Issue 2.1 — Design reusable page templates
**Outcome:** page structures that work for both search and GEO extraction.

Tasks:
- define common block structure
- define variable slots
- define CTA variants
- define page-level FAQ structure
- define case-study link strategy

Deliverable:
- `docs/programmatic-seo-template-spec.md`

### Issue 2.2 — Build keyword / intent dataset
**Outcome:** a clean dataset for the first pilot.

Tasks:
- gather keyword patterns by intent
- map each keyword to page pattern
- remove duplicates/cannibalization risks
- add proof-source notes per page

Deliverable:
- `docs/programmatic-seo-pilot-keywords.csv` or `.md`

### Issue 2.3 — Define internal-linking rules
**Outcome:** every page strengthens the site graph.

Tasks:
- define hub pages
- define cross-link rules
- define case-study link rules
- define booking / CTA link rules

Deliverable:
- `docs/programmatic-seo-internal-linking.md`

## Epic 3: Pilot implementation

### Issue 3.1 — Build first 3 pilot pages manually
**Outcome:** test the template before scaling.

Tasks:
- choose 3 representative pages
- draft manually
- review for quality
- publish
- verify metadata/schema/internal linking

### Issue 3.2 — Review pilot pages for thin-content risk
**Outcome:** prove the pages are actually strong before expanding.

Tasks:
- compare against quality gates
- remove repetitive language
- improve specificity and proof
- tighten opening 150 words for extractability

### Issue 3.3 — Expand to 20-30 page pilot
**Outcome:** release bounded first batch only after the manual sample works.

Tasks:
- generate drafts from approved pattern
- review all pages manually
- publish in batches
- submit/update sitemap if needed

## Epic 4: Measurement and decision loop

### Issue 4.1 — Add pilot tracking dashboard
**Outcome:** one place to judge whether this is working.

Tasks:
- track pages published
- track indexation status
- track search impressions/clicks
- track PostHog landing sessions / CTA actions
- track AI citation checks where relevant

### Issue 4.2 — Run a 30-day review
**Outcome:** decide whether to scale, adjust, or stop.

Tasks:
- compare performance across patterns
- identify pages with no traction
- identify pages with conversion traction
- decide what to scale next

## Recommended first 10 issue candidates

If we want a simple Paperclip queue, create these first:
1. Define programmatic SEO page-pattern matrix
2. Define thin-content quality gates for website pages
3. Choose 20-30 page pilot scope
4. Design reusable page template spec
5. Build pilot keyword / intent dataset
6. Define internal-linking rules for decision and problem pages
7. Draft first 3 pilot pages manually
8. Review first 3 pages for specificity and proof strength
9. Set up pilot measurement dashboard
10. Run 30-day pilot review and scale decision

## Recommended first content candidates

These are the safest next candidates because they fit current positioning.

### High-confidence
- `/hire-ai-automation-consultant-vs-agency`
- `/n8n-vs-zapier-small-business`
- `/ai-appointment-setter`
- `/after-hours-lead-capture-for-service-businesses`
- `/missed-calls-follow-up-automation`

### Good candidates if proof is strong enough
- `/ai-automation-for-hvac-companies`
- `/ai-lead-follow-up-for-mortgage-brokers`
- `/ai-automation-for-auto-parts-ecommerce`
- `/vapi-vs-retell-for-small-business`

### Low-confidence / do later
- mass location pages
- broad industry pages with weak proof
- generic "AI automation for small business" duplicates of existing decision pages

## Recommended decision on project structure

### My recommendation
**Do not create a separate project for this yet.**

Instead:
- keep strategy and implementation docs inside `projects/dmytroai-website`
- create one website growth initiative in Paperclip
- manage tasks/issues there
- treat programmatic SEO as one workstream under website growth

### Why
- the website is already the asset being improved
- GEO and programmatic SEO should reinforce each other
- splitting too early creates overhead and context fragmentation
- current stage calls for tighter iteration, not more structure

## Suggested next actions

### Immediate
1. create Paperclip issue epic: "Website Growth — Programmatic SEO Pilot"
2. create the first 5-10 issues from the queue above
3. choose the first 3 pages to draft manually
4. write the quality-gates doc before any scaling

### Next after that
5. draft/publish first 3 pilot pages
6. measure performance for 2-4 weeks
7. decide whether to scale to 20-30 pages

## Recommended ownership inside Paperclip

- **CEO / Growth lead:** decide priorities, approve patterns, judge business value
- **Builder / engineer:** implement templates and routing where needed
- **Growth / content:** draft content structure, keyword sets, FAQs, internal links
- **QA / reviewer:** enforce thin-content and proof-quality checks

## Final recommendation

Yes, we should consider programmatic SEO.
But for this site, the right version is:
- narrow
- proof-backed
- high-intent
- manually reviewed
- managed inside the current website project

Not a separate content empire. Not yet.
