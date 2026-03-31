# Autoresearch Program — Website

This file is the human-maintained operating brief for autonomous iteration on the website project.

The goal is to follow the **repo pattern** from Karpathy's autoresearch as closely as possible while adapting it to website work:

- human edits `program.md`
- agent edits **one target artifact only**
- the run is judged against a **fixed rubric**
- keep or discard based on explicit criteria
- promote learnings back into `program.md`

## 0. Current operating mode

Single-artifact mode.

Do not spread changes across the site.
Do not redesign multiple pages at once.
Do not turn this into general website cleanup.

## 1. Fixed file roles

### Human-owned file
- `program.md`
- This is the durable instruction layer.
- Update this file when we learn something reusable.

### Fixed context / support files
Treat these as context, not the main experiment target:
- `src/pages/AiAutomationHvac.tsx`
- `public/llm.txt`
- shared components / layout / navbar / footer
- route discovery surfaces unless the current pass explicitly allows touching them

### Single editable artifact for loop 01
- `src/pages/HvacDatabaseReactivation.tsx`

For loop 01, the agent should modify **only** `src/pages/HvacDatabaseReactivation.tsx` unless this file alone cannot satisfy a hard requirement.
If another file must change, stop and explain why before broadening scope.

## 2. Objective

Improve the paid HVAC database reactivation page so it becomes a stronger ad-traffic landing page without turning vague, hypey, or unsupported.

This page is **not** the broad HVAC GEO page.
This page is the narrower paid-offer page for residential HVAC database reactivation.

## 3. Page intent

### This page IS
- a paid-traffic landing page
- a focused offer page
- about turning old estimates and past customers into booked jobs
- for residential HVAC companies
- optimized for clarity, trust, and message-match

### This page is NOT
- a general "AI for HVAC" explainer
- a broad services overview
- a city page
- a generic listicle
- a page that claims benchmark results we cannot prove

## 4. Allowed improvements in loop 01

The agent may improve:
- headline clarity
- subhead specificity
- section order
- CTA wording
- objection handling
- proof framing
- internal message consistency
- distinction between old estimates vs past-customer buckets
- risk-reversal language
- FAQ wording
- broad-to-narrow positioning vs the GEO page

The agent may remove weak content.
The agent may simplify.
The agent may tighten language.

## 5. Forbidden changes in loop 01

Do not:
- invent case studies
- invent numbers
- invent timing claims
- invent conversion benchmarks
- add fake testimonials
- broaden scope into whole-site restructuring
- rewrite unrelated pages
- merge this page with the broad HVAC page
- create extra pages during this loop

## 6. Evaluation rubric

Score each pass from 1 to 5 on:

1. **Message match**
   - Does this feel like the right page for paid HVAC database-reactivation traffic?

2. **Offer clarity**
   - Is the service obvious within a few seconds?

3. **Trust / credibility**
   - Are claims honest, specific, and supportable?

4. **Intent separation**
   - Is this page clearly distinct from the broad HVAC GEO page?

5. **Persuasion**
   - Does the page create a clear reason to book a call now?

6. **Objection handling**
   - Does it answer the real concerns about old lists, annoyance, messy CRMs, and workload?

7. **Simplicity**
   - Does the page feel tighter and less bloated, not more?

## 7. Acceptance gate

Keep a revision only if:
- message match improves
- trust/credibility does not regress
- intent separation does not regress
- the page becomes clearer or tighter overall

Reject revisions that add hype, clutter, or unsupported claims even if they sound more persuasive.

## 8. Loop procedure

For each pass:

1. Read this file.
2. Read the target artifact: `src/pages/HvacDatabaseReactivation.tsx`.
3. Read the neighboring context page: `src/pages/AiAutomationHvac.tsx`.
4. State the single pass goal.
5. Edit only the target artifact.
6. Run the build.
7. Score baseline vs new version using the rubric.
8. Keep only if it clears the acceptance gate.
9. Leave a concise note with:
   - what changed
   - why it improved
   - what should be promoted into `program.md`

## 9. Current pass goal

Pass 01 goal:
- make the paid page sharper, more ad-specific, and more trustable
- reduce anything that reads like broad website copy
- strengthen the distinction between:
  - broad HVAC automation page
  - narrow database-reactivation page

## 10. Current learnings to preserve

- HVAC needs separate pages for broad GEO intent and narrow paid intent.
- Process clarity beats aggressive claims.
- Risk reversal should be expressed through specificity and honest scope, not inflated ROI language.
- AEO-friendly structure is useful, but readability and trust come first on paid landing pages.
- Reusable page systems are good, but narrow offer pages still need explicit intent separation.

## 11. Output format for the agent

Return a concise report with:
- pass goal
- edits made
- rubric delta
- keep/discard decision
- promoted learning

If uncertain, prefer a smaller, cleaner pass over a dramatic rewrite.
