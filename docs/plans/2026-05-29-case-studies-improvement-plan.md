# Case Studies Improvement Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Turn case studies into a stronger proof layer on dmytroai.com: keep the three strongest examples on the homepage, create a better case-study library page, and add the recent marketing-agency/outbound-video case study with a clear $9,000/month savings claim once the underlying numbers are verified.

**Architecture:** The site already has `/case-studies`, individual case-study routes, `src/data/caseStudies.ts`, and homepage cards in `src/config/siteConfig.ts` rendered by `src/components/ResultsSection.tsx`. The plan should consolidate case-study metadata, improve homepage selection logic, upgrade the hub page, add the new agency case study, and wire internal links/schema/sitemap without touching homepage copy beyond the case-study section.

**Tech Stack:** Vite, React, TypeScript, Tailwind, shadcn/ui style cards, Framer Motion, React Router, static metadata/schema in React components.

---

## Current state from repo audit

- Existing hub route: `/case-studies` in `src/routes.tsx`.
- Existing hub file: `src/pages/CaseStudies.tsx`.
- Existing case-study data file: `src/data/caseStudies.ts`.
- Existing individual pages:
  - `/case-studies/facebook-marketplace-ai-lead-qualification`
  - `/case-studies/instagram-lead-generation`
  - `/case-studies/paris-cafe-voice-agent`
  - `/case-studies/ecommerce-crm-automation`
- Homepage cards currently come from `src/config/siteConfig.ts`, not from `src/data/caseStudies.ts`, so the homepage and case-study hub can drift.
- The case-study hub already exists, but it reads as a proof/SEO page more than a polished portfolio library.
- The homepage currently shows 3 case studies: Paris Cafe, Instagram lead generation, and e-commerce CRM automation.
- Evidence found for the new marketing-agency case:
  - Session logs mention Dmytro citing a recent win saving a marketing agency `$9,000/month` on outreach.
  - Nightly digest/content notes refer to an AI outbound video case with `$9,000/mo` savings and target `4-5k videos/day`.
  - Related Otavio project notes show personalized video generation, live CRM, and invoice/volume context, but the public case-study claim should be verified before publishing as audited fact.

## Strategic direction

### Case-study positioning

Use case studies as the bridge between “AI automation consultant” pages and the booking CTA.

Case studies should answer:
- What business problem existed?
- What system did Dmytro build?
- What measurable result happened?
- What type of buyer should care?
- What page should the reader visit next?

### Homepage role

Homepage should not list every case study. It should show the 3 strongest proof cards only, with a clear CTA to the full library.

Recommended homepage top 3:
1. **Marketing agency outbound video automation**
   - Best business outcome: `$9,000/month saved`
   - Strongest relevance to agencies, outbound, AI video, scale, lead generation
   - Needs verification before final wording
2. **E-commerce CRM and lead follow-up automation**
   - Best CRM/follow-up proof: `5,600+ leads organized`, `3x capacity`, current `+185%` claim needs evidence check
3. **Paris Cafe AI voice receptionist**
   - Best service-business proof: `0% to 100% after-hours calls answered`, `15 hrs/week freed`

Hold Instagram and Facebook Marketplace for the library unless the goal is to emphasize lead generation volume over direct cost savings.

### Case-study library role

`/case-studies` should become a clean portfolio hub:
- Hero with proof-led promise.
- Featured case study at top, likely marketing agency once verified.
- Filter/group cards by workflow type:
  - Revenue and outbound
  - Lead follow-up and CRM
  - Phone and appointment handling
  - Lead qualification and enrichment
- Each card should show:
  - Industry
  - Workflow type
  - Result metric
  - 1-sentence problem
  - 1-sentence system built
  - “Read case study” CTA
- Add “Not sure which applies?” routing section to guides, pricing, consultant overview, and booking.

---

## Implementation tasks

### Task 1: Verify the marketing-agency case-study claim

**Objective:** Confirm what can be safely published about the `$9,000/month` marketing-agency result.

**Files:**
- Read: project notes for the relevant outbound video/Otavio project
- Read: any SMM case-study source document from the content workspace if available
- Create/Modify: `docs/case-study-evidence/marketing-agency-outbound-video.md`

**Steps:**
1. Locate the source project and existing notes for the AI outbound video/marketing-agency work.
2. Extract only publishable claims:
   - savings basis
   - previous monthly cost
   - new monthly cost
   - production volume
   - workflow summary
   - client anonymity requirement
3. Separate verified facts from modeled/estimated facts.
4. If `$9,000/month saved` is modeled rather than client-confirmed, phrase as “projected monthly savings” or “modeled savings” unless Dmytro approves stronger wording.
5. Save the evidence note under `docs/case-study-evidence/`.

**Verification:**
- Evidence note clearly labels each public claim as verified, modeled, or needs Dmytro confirmation.
- No private client names, credentials, invoices, CRM IDs, or non-public operational details are copied into website content.

### Task 2: Define a single case-study data model

**Objective:** Stop duplicating homepage and hub case-study data across `siteConfig.ts` and `caseStudies.ts`.

**Files:**
- Modify: `src/data/caseStudies.ts`
- Modify: `src/config/siteConfig.ts`
- Modify: `src/components/ResultsSection.tsx`
- Modify: `src/pages/CaseStudies.tsx`

**Steps:**
1. Expand `CaseStudySummary` to include fields needed by both homepage and hub:
   - `slug`
   - `title`
   - `industry`
   - `workflowType`
   - `description`
   - `challenge`
   - `solution`
   - `keyResult`
   - `featured`
   - `homepageRank`
   - `proofStatus`, with values like `verified`, `modeled`, `needs-confirmation`
2. Export derived lists:
   - `homepageCaseStudies = caseStudies.filter(...).sort(...).slice(0, 3)`
   - `featuredCaseStudies`
   - `caseStudiesByWorkflow`
3. Update `ResultsSection.tsx` to use `homepageCaseStudies` instead of `siteConfig.results.caseStudies`.
4. Keep `siteConfig.results.heading`, `subtitle`, and stats in place for now.

**Verification:**
- Homepage still renders exactly 3 case-study cards.
- `/case-studies` renders all case studies from the same data source.
- TypeScript catches missing fields on new case-study entries.

### Task 3: Add the marketing-agency outbound-video case-study data

**Objective:** Add the new best case study to the library and make it eligible for homepage placement.

**Files:**
- Modify: `src/data/caseStudies.ts`
- Create: `src/pages/case-studies/MarketingAgencyOutboundVideoCaseStudy.tsx`
- Modify: `src/routes.tsx`

**Draft positioning:**
- Slug: `marketing-agency-outbound-video-automation`
- Title: `AI Outbound Video Automation for a Marketing Agency`
- Industry: `Marketing Agency`
- Workflow type: `Outbound and personalized video`
- Key result: `$9,000/month saved` only if verified, otherwise `Projected $9,000/month savings`
- Problem: agency needed high-volume personalized videos for outreach without manual production costs scaling linearly
- System: CRM-driven video generation pipeline with personalized scripts/assets, automated processing, delivery links, and CRM writeback
- Result: lower manual production cost, higher video output capacity, faster campaign launch

**Verification:**
- Route loads locally.
- Case card links to the new page.
- The public page contains no sensitive operational details.
- If proof is modeled, the page includes a short “basis” note in plain language.

### Task 4: Redesign the `/case-studies` hub around discoverability

**Objective:** Make the case-study page feel like a serious portfolio library, not a long SEO article.

**Files:**
- Modify: `src/pages/CaseStudies.tsx`
- Potentially modify: `src/components/case-studies/CaseStudyCard.tsx`

**Sections:**
1. Hero:
   - “AI Automation Case Studies”
   - Subheadline around real systems, measurable outcomes, and small-business workflows.
2. Featured result strip:
   - 3 strongest metrics: `$9,000/month saved`, `5,600+ leads organized`, `15 hrs/week freed`.
   - Use proof labels where needed.
3. Featured case-study block:
   - Marketing agency case once verified.
4. Case-study grid:
   - Cards grouped by workflow type.
5. “Find the closest example” guide:
   - If losing calls, read Paris Cafe.
   - If CRM/leads are messy, read e-commerce CRM.
   - If outbound/video scale is the bottleneck, read marketing agency.
   - If raw lead lists need review, read Marketplace.
6. CTA:
   - “Want to know which automation fits your business?” link to booking.

**Verification:**
- Page has a clear above-the-fold CTA.
- All existing case studies remain accessible.
- Existing schema still includes all case studies.
- No markdown-table-like UI in copy.

### Task 5: Update homepage case-study section

**Objective:** Keep the landing page concise while showcasing the strongest proof.

**Files:**
- Modify: `src/components/ResultsSection.tsx`
- Modify: `src/config/siteConfig.ts` only for non-card headings if needed

**Changes:**
1. Rename section from generic “Client Success Stories” to stronger proof language, for example:
   - “Proof from shipped automation systems”
2. Use exactly 3 cards from `homepageCaseStudies`.
3. Add a secondary CTA below cards:
   - `View all case studies` linking to `/case-studies`
4. Add proof status treatment if a metric is modeled:
   - small muted note: `Modeled from workflow data` or `Based on project estimate`

**Verification:**
- Homepage still has only 3 cards.
- CTA to full library is visible.
- No homepage sections outside the case-study/results area are changed without explicit approval.

### Task 6: Improve individual case-study page template consistency

**Objective:** Make individual case pages feel consistent and conversion-oriented.

**Files:**
- Modify existing pages in `src/pages/case-studies/`
- Potentially create reusable component: `src/components/case-studies/CaseStudyPageTemplate.tsx`

**Recommended page structure:**
1. Hero with industry, title, result metric, and one-sentence outcome.
2. Situation/problem.
3. System built.
4. Workflow diagram/list.
5. Results and metric basis.
6. Tools used, but framed as implementation detail, not vendor promotion.
7. “Could this apply to your business?” section.
8. CTA to book or read related guide.

**Verification:**
- Existing pages still compile.
- Reusable template reduces repeated layout code if practical.
- Metrics with assumptions have basis notes.

### Task 7: SEO, schema, sitemap, and internal links

**Objective:** Make the new and improved pages discoverable by Google and AI answer engines.

**Files:**
- Modify: `src/pages/CaseStudies.tsx`
- Modify: individual case-study pages
- Modify: `src/routes.tsx`
- Modify: `public/sitemap.xml`
- Modify if applicable: `public/llm.txt` and/or `public/llms.txt`
- Modify: related guide pages where case-study links are relevant

**Steps:**
1. Add route for the new agency case study.
2. Add sitemap URL for the new case study if sitemap is static.
3. Update `/case-studies` CollectionPage/ItemList schema to include new page.
4. Add Article/CaseStudy-style schema where applicable, using supported schema types conservatively.
5. Link relevant guide pages to closest case studies:
   - outbound/video/lead gen pages to marketing agency
   - CRM/follow-up pages to e-commerce CRM
   - appointment/call pages to Paris Cafe
6. Update crawler summary files if they mention the case-study count.

**Verification:**
- `npm run build` passes.
- Route appears in sitemap.
- Internal links resolve.
- No stale “four case studies” copy remains if there are now five.

### Task 8: QA and visual review

**Objective:** Verify the improvement in-browser before publishing.

**Files:**
- No direct file edits unless bugs are found.

**Steps:**
1. Run `npm run build`.
2. Run local dev server.
3. Browser-check:
   - `/`
   - `/case-studies`
   - `/case-studies/marketing-agency-outbound-video-automation`
   - each existing case-study route
4. Check mobile-ish width and desktop width.
5. Verify no card text overflows, no broken routes, and CTA hierarchy is clear.
6. Run a quick search for stale claims:
   - “four case studies”
   - old case-study count
   - `$9,000` basis wording

**Verification:**
- Build passes.
- Browser route checks pass.
- No stale count copy.
- Homepage has exactly 3 cards.
- Hub has all case studies.

### Task 9: Style learner logging after publishing copy

**Objective:** Follow project rule for newly published case-study/landing copy.

**Files:**
- Create: `style-learner/posts/case-study/2026-05-29-marketing-agency-outbound-video.md`
- Potentially create: `style-learner/posts/landing-page/2026-05-29-case-studies-section-refresh.md`

**Steps:**
1. Add final published case-study copy to style learner.
2. Run:
   - `cd style-learner && node src/learning/schema.js add --file posts/case-study/2026-05-29-marketing-agency-outbound-video.md`
   - `node src/learning/analyze.js --all`
   - `node src/learning/profile.js`
3. Commit style learner data with website changes.

**Verification:**
- Style learner commands pass.
- Generated profile updates are committed.

---

## Proposed implementation order

1. Evidence verification for marketing-agency `$9,000/month` claim.
2. Data model cleanup.
3. New marketing-agency case-study page.
4. `/case-studies` hub redesign.
5. Homepage 3-card section refresh.
6. Internal links, schema, sitemap, crawler summaries.
7. Build/browser QA.
8. Style learner logging.
9. Commit and push.

## Copy guardrails

- Do not overclaim. If a result is modeled, label it as modeled.
- Do not reveal client names unless already public or approved.
- Do not expose vendor internals, private CRM details, invoices, raw operational IDs, or sensitive project architecture.
- Keep the homepage case-study update scoped to the case-study/results section only.
- Prefer concrete numbers over vague phrases.
- Avoid hype. Use clear proof language.

## Open questions for Dmytro

1. Can we publicly describe the marketing-agency case as a “marketing agency,” or should it stay anonymous as “outbound agency” / “growth agency”?
2. Is `$9,000/month saved` client-confirmed, or should we phrase it as projected/modeled savings?
3. Are we allowed to mention personalized video generation publicly?
4. Which conversion action should case-study readers take first: book a call, read pricing, or read the consultant overview?

## Recommended default answers if Dmytro wants speed

- Keep the client anonymous.
- Use “projected $9,000/month savings” until confirmed.
- Mention personalized outbound video at the workflow level, not internal implementation details.
- Primary CTA: book a call. Secondary CTA: view pricing/consultant overview.
