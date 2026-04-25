# dmytroai.com — Project Status

**Last updated:** 2026-04-25 MDT

## Update 2026-04-25 — Technical indexability audit for priority URLs
- Browser session is not authenticated to GSC and no local Search Console API credentials exist, so GSC URL Inspection statuses remain `NOT INSPECTED` rather than guessed.
- Added `scripts/audit-indexability.mjs` for reproducible public/live technical checks of the 25 priority URLs.
- Audit results: 25/25 HTTP 200, 25/25 in sitemap, 25/25 self-canonical, 0 noindex, 0 robots-blocked.
- Added `/best-ai-automation-for-service-businesses` to `scripts/geo-prompts.json`, bringing priority commercial/category page tracking to 22/25; the remaining 3 untracked URLs are homepage/guides/case-study hubs.
- Updated `docs/geo-priority-urls.md` with full technical readiness columns, `NOT INSPECTED` GSC status per URL, and next manual GSC actions.
- Verification: `node scripts/audit-indexability.mjs`, `npm run geo:weekly:dry`, and `npm run build` passed; build prerendered 322 routes.

## Update 2026-04-25 — Phase 1/2 GEO authority execution
- Proceeded on GSC + entity cleanup foundation after Dmytro confirmed the sitemap shows 320 discovered pages.
- Added `docs/geo-priority-urls.md` with a bounded 25-URL priority set, GSC status placeholders, GEO status, problem notes, and next actions.
- Recreated/saved `docs/plans/2026-04-25-geo-authority-improvement.md` so the authority plan is durable in-repo.
- Strengthened homepage JSON-LD entity clarity: `Person` now explicitly links Dmytro Afanasiev to Dmytro AI, adds alternate names, knowsAbout topics, n8n profile sameAs, and `worksFor`; business node is now `LocalBusiness` + `ProfessionalService` named Dmytro AI.
- Updated `public/llm.txt` and `public/llms.txt` lead entity text to use the same Dmytro AI / Dmytro Afanasiev identity language.
- Verification: priority URL validation passed (25 URLs, all in sitemap); `npm run build` passed with 321 indexable/prerendered routes; `npm run geo:weekly:dry` passed with all providers ready.

## Update 2026-04-25 — Weekly GEO visibility worker
- Added weekly bounded mode to `scripts/geo-runner.ts`: `--providers`, `--sample-pages`/`--sample-size`, `--run-id`, `--output-prefix`, `--output-dir`, `--weekly-report`/`--report` flags.
- Weekly mode samples 30 pages deterministically (ISO week seed), outputs to `docs/data/geo-weekly/`, and generates an executive report with visibility metrics, provider breakdown, competitor domains, wins/gaps, and action suggestions.
- Updated `scripts/geo-weekly-cron.sh` to run `geo:weekly` (bounded sample) instead of `geo` (full 276-page sweep).
- Updated `scripts/geo-discord-summary.sh` with `--weekly` flag for weekly report paths.
- Added `geo:weekly` and `geo:weekly:dry` package scripts.
- Updated `docs/geo-runner.md` and `docs/geo-tracking.md` with weekly worker design and Perplexity measurement notes.
- All provider guardrails preserved: no `OPENAI_API_KEY` / `ANTHROPIC_API_KEY` / `api.openai.com` / `api.anthropic.com` dependence.
- Verification: `npm run geo:weekly:dry` passed; real smoke with Perplexity+Gemini originally skipped Perplexity because `.env.local` held a stale placeholder key, while the Hermes MCP Perplexity key was valid. Synced `.env.local` from the Hermes MCP Perplexity config locally, reran Perplexity smoke successfully (`sonar`, 5 prompts, citations returned, no errors), and `npm run build` passed with 314 prerendered routes.

## Update 2026-04-25 08:50 MDT
- Verified Dmytro's Codex login: `codex login status` now reports logged in via ChatGPT.
- Ran an OpenAI GEO provider smoke test through the new `codex exec` CLI path with no local `OPENAI_API_KEY` or `ANTHROPIC_API_KEY` active. The OpenAI provider now authenticates and runs through Codex subscription instead of OpenAI API.
- During the verification window, the scheduled GEO expansion worker also shipped `/client-reactivation-automation-for-auto-repair-shops`; paused GEO cron jobs to avoid further race conditions, cleaned the temporary GEO smoke result artifacts, kept the worker's coherent page ship, and verified build.
- New page wiring includes the decision-page data file, page wrapper, both route files, Guides, sitemap, `llm.txt`, `llms.txt`, GEO prompts, roadmap/tracking docs, and style-learner artifacts.
- Pinned Codex GEO runner to `gpt-5.4` after verification showed the local Codex default `gpt-5.5` requires a newer CLI; OpenAI GEO smoke now runs through Codex subscription and scored normally.
- Verification: `scripts/geo-prompts.json` parses successfully; `npm run build` passed and prerendered 312 routes.

## Update 2026-04-25 07:48 MDT
- Switched GEO visibility checks away from OpenAI and Claude pay-per-token APIs.
- `scripts/geo-runner.ts` now treats `openai` as a CLI provider through `codex exec` and `claude` as a CLI provider through `claude -p`; both subprocesses strip API-key env vars and never call OpenAI/Anthropic API endpoints.
- Default GEO providers are now `openai`, `claude`, `gemini`, and `perplexity`; Gemini/Perplexity remain API-key providers.
- Removed the active local `OPENAI_API_KEY` assignment from `.env.local`; `ANTHROPIC_API_KEY` also remains absent.
- Verification: forbidden OpenAI/Anthropic API endpoint/model references are absent from the runner/docs/config; `npm run geo:dry -- --page ai-automation-consultant-small-business` works and shows Claude authenticated via CLI, Codex CLI currently not logged in; `npm run geo -- --provider openai --page ...` exits before prompts/API calls because Codex subscription auth is missing; `npm run build` passes and prerendered 310 routes.
- Follow-up needed: run `codex login` locally to connect the Codex subscription before OpenAI GEO checks can run through the CLI path.

## Update 2026-04-25 07:15 MDT
- Investigated Anthropic Console screenshot showing API key `cedric` with recent spend/usage.
- Found the local GEO runner path still had Anthropic enabled: `.env.local` contained an active `ANTHROPIC_API_KEY`, `scripts/geo-prompts.json` still listed `anthropic`, and `scripts/geo-runner.ts` mapped Anthropic to `claude-sonnet-4-20250514`.
- Confirmed `docs/data/geo-results/2026-04-25.json` contained 1,065 Anthropic result entries from the full GEO sweep.
- Removed the active Anthropic assignment from `.env.local` locally and committed code/docs guardrails so the GEO runner defaults to OpenAI, Gemini, and Perplexity only.
- Verification: `npm run geo -- --provider anthropic --page ai-automation-consultant-small-business` exits before any API call; `npm run build` passed and prerendered 309 routes.
- Commit pushed: `44f02552 fix: disable paid Claude API in GEO runner`.

## Update 2026-04-03 10:56 MDT
- Ran the full GEO prompt sweep via the repo runner: `npm run geo`.
- Prompt source used: `scripts/geo-prompts.json` (10 prompts across 2 tracked pages).
- Providers checked in this run:
  - OpenAI
  - Anthropic
  - Gemini
  - Perplexity
- Result for this run: **0 across the board**.
  - `AI Lead Follow-Up for Service Businesses` page score = 0
  - `AI Automation Consultant Calgary` page score = 0
  - total score = 0
- Generated result artifacts:
  - `docs/data/geo-results/2026-04-03.json`
  - `docs/data/geo-results/2026-04-03.md`
- Practical interpretation: on the API-based GEO sweep, dmytroai.com is **not showing up yet** for the tracked prompts. No direct links, brand mentions, or auto-detected citations surfaced in this run.
- Important nuance: this runner measures reproducible API search/grounding behavior, not the exact consumer UI experience of ChatGPT/Claude/Gemini/Perplexity. It is still the best current repeatable signal in-repo.
- Recommended next move after this baseline remains content/distribution work that can create stronger pickup signals: proof assets, sharper unique data points, and additional high-intent GEO pages.

## Update 2026-04-01 15:11 MDT
- Ran a final direct QA pass against the live repo before closing the outstanding website QA lane.
- Verification on current `main` still held:
  - `/ai-automation-hvac` only redirects to `/ai-automation-for-hvac-companies`
  - Guides, sitemap, `llm.txt`, and `llms.txt` stay aligned with the canonical HVAC cluster
  - no previous HVAC blocker strings reappeared in the targeted spot check
  - `npm run build` passed cleanly and route-specific meta injected successfully
- Closed the active HVAC QA lane in the prior tracking system:
  - `DMY-26` comment posted and status moved to `done`
  - `DMY-23` parent closeout comment posted and status moved to `done`
- Left `DMY-21` alone at `in_progress` because it belongs to the broader older AEO/programmatic lane and was intentionally not bundled into the HVAC closeout.
- Current board picture:
  - `DMY-23` = `done`
  - `DMY-26` = `done`
  - `DMY-21` = `in_progress`
  - `DMY-33` = `done`
- Highest-value next website move is no longer HVAC cleanup. It is likely proof-asset collection, ad-message alignment, or homepage conversion polish.

## Update 2026-04-01 13:43 MDT
- Followed through on status cleanup after verifying the live tracking records.
- `DMY-26` had stale status drift: comments said the HVAC cleanup was ready for re-review, but the issue itself still said `blocked`.
- Patched `DMY-26` status from `blocked` -> `in_progress` successfully.
- Patched `DMY-21` status from `blocked` -> `in_progress` successfully for the same stale-board reason.
- `DMY-23` remained correctly `in_progress`, so no parent status change was needed.
- Current board picture is now coherent:
  - `DMY-23` = `in_progress`
  - `DMY-26` = `in_progress`
  - `DMY-21` = `in_progress`
  - `DMY-33` = `done`
- Practical next step is QA decision / review closeout, not more website implementation.

## Update 2026-04-01 13:20 MDT
- Synced the final HVAC cleanup state back into the tracking notes after Dmytro confirmed to proceed.
- Important nuance: the earlier tracking system already had an intermediate QA comment that still reflected the pre-`d9d4574` blocked state, so the board needed a follow-up update rather than more repo edits.
- Posted fresh board-sync comments to:
  - `DMY-26` — final narrow copy cleanup landed; issue looks ready for QA re-review on current `main`
  - `DMY-23` — parent now reflects that implementation cleanup is done enough and the remaining gate is QA re-review
  - `af5d7a70-152f-4fe3-a0dc-e476e078c3dd` — route / manifest / cannibalization thread updated to current clean state
- Repo state remained unchanged during board sync:
  - latest code commits still `d9d4574` and `04faee1`
  - no new website code edits were needed
- Practical next step is still the same: QA re-review / board closeout, not more blind HVAC rewriting.

## Update 2026-04-01 12:46 MDT
- Ran a direct QA rerun against the HVAC cluster after the earlier cleanup commits.
- Verified the structural blocker set is resolved on `main`:
  - `/ai-automation-hvac` now redirects to `/ai-automation-for-hvac-companies`
  - `src/pages/Guides.tsx` now promotes the canonical broad HVAC page plus the narrower cluster pages, instead of two overlapping broad HVAC pages
  - `public/sitemap.xml`, `public/llm.txt`, and `public/llms.txt` all include the active HVAC cluster and no longer rely on the deprecated broad route
- The QA rerun still found a few copy-risk leftovers, so a final narrow cleanup was applied and pushed:
  - commit `d9d4574` — `fix: soften remaining hvac qa-risk claims`
  - `src/pages/HvacLeadFollowUpAutomation.tsx`
    - softened exact timing/stat-style language (`5-minute window`, `15 hours later`)
    - softened outreach-capacity phrasing to more supportable language
  - `src/pages/HvacMissedCallTextBack.tsx`
    - `about 5 minutes` → `just a few minutes`
  - `src/pages/AiAutomationForHvacCompanies.tsx`
    - softened `dramatically increased follow-up capacity`
- Verification:
  - `npm run build` passed after the final cleanup
  - repo is clean and synced on `main`
- The earlier tracking notes were updated with the main structural cleanup; current practical state is that `DMY-21` / `DMY-26` look ready for QA re-review on current `main`.
- Recommended next step: QA re-review, not more blind HVAC rewriting.

## Update 2026-03-31 14:58 MDT
- Heartbeat auto-commit caught a dirty website repo after the AI-first routing upgrade pass.
- Uncommitted changes were present in:
  - `public/llms.txt`
  - `public/sitemap.xml`
  - `src/App.tsx`
  - `src/pages/AiAppointmentSetterForHvac.tsx`
  - `src/pages/AiAutomationForHvacCompanies.tsx`
  - `src/pages/Guides.tsx`
  - `src/pages/HvacDatabaseReactivation.tsx`
  - `src/pages/HvacLeadFollowUpAutomation.tsx`
  - `src/pages/HvacMissedCallTextBack.tsx`
  - deletion of `src/pages/AiAutomationHvac.tsx`
- This heartbeat sync is only preserving repo state so the project does not stay dirty. It does not by itself verify or describe all product-level effects of those page/routing changes.

## Update 2026-03-31 08:24 MDT
- Completed autoresearch pass 03 on `src/pages/HvacDatabaseReactivation.tsx`.
- Goal of the pass: improve structural scannability for paid traffic while preserving the calmer trust framing from pass 02.
- Main structural changes:
  - made the two revenue buckets more visually distinct with separate labels, color treatment, and one-line strategic summaries
  - renamed the bucket headings to be more descriptive for skimmers
  - demoted the broader `/ai-automation-hvac` cross-link from its own section into a small inline note under the fit section
  - reduced section competition so the page stays more focused on the paid-offer CTA
- Verification:
  - `npm run build` passes after the edit
- Current judgment: keep. This pass improves offer clarity, intent separation, and scannability without adding bloat.
- Current state of the page after 3 passes: sharper paid message match, more honest trust framing, and better scan structure.
- Recommended next move: pause page iteration and switch to either ad-message alignment or proof-asset collection, unless a live test shows a specific weak section.

## Update 2026-03-30 23:12 MDT
- Completed autoresearch pass 02 on `src/pages/HvacDatabaseReactivation.tsx`.
- Goal of the pass: improve trust/proof framing without inventing proof.
- Main copy changes:
  - softened absolute claims like "every HVAC company" and "revenue sitting in your CRM"
  - clarified the difference between old estimates and past customers in the trust/risk framing
  - removed implied capabilities like discount creation / smart high-value flagging where the mechanism was not explicit
  - improved the final CTA risk reversal with more honest language: if reactivation is not a fit, say so
  - cost-vs-ads FAQ now frames the comparison as something to assess based on list size and quality, not an implied universal win
- Verification:
  - `npm run build` passes after the edit
- Current judgment: keep. This pass improves credibility and objection handling without making the page weaker or broader.
- Likely next pass: decide whether to stop here or do one final structural pass that makes the two buckets even more visually and strategically distinct.

## Update 2026-03-30 23:05 MDT
- Completed autoresearch pass 01 on `src/pages/HvacDatabaseReactivation.tsx`.
- Goal of the pass: make the page sharper for paid HVAC database-reactivation traffic without adding hype or unsupported proof.
- Main copy changes:
  - CTA tightened from a generic database prompt to `Book a Free Database Review Call`
  - hero/body copy made more ad-specific and less broad-service sounding
  - accusatory phrasing like "the revenue you're ignoring" was softened
  - timing/performance claims in the page and FAQ were reduced to more supportable language
  - user-facing em dashes were removed from the page copy for cleaner commercial tone
- Verification:
  - `npm run build` passes after the edit
  - final page remains clearly separate from the broader `/ai-automation-hvac` page
- Current judgment: this is a keepable pass because trust improved and the page now feels more like a paid offer page than a general HVAC automation explainer.
- Likely next pass: improve trust/proof framing and sharpen the distinction between old estimates vs past customers even further.

## Update 2026-03-30 16:20 MDT
- The website is now the intended Discord continuation point for this work via `#dmytroai-website`, not the generic `#paperclip-ing` channel.
- At that time, website work was being tracked in a separate local system, but that system is no longer active.
- The durable part to keep is simpler:
  - `#dmytroai-website` is the correct continuation channel
  - the repo remains the source of truth
  - `program.md` remains the autoresearch loop starting point for future website iteration
- Next step when resuming from `#dmytroai-website`: continue directly from repo state and project memory for HVAC / AEO / programmatic SEO / autoresearch tasks.

## Update 2026-03-30 16:xx MDT
- Analyzed a new marketing direction: whether to extend the website from GEO into bounded programmatic SEO.
- Saved a planning doc at `docs/plans/2026-03-30-programmatic-seo-growth-plan.md`.
- Main decision: do **not** create a separate standalone project/repo yet. Keep this inside `dmytroai-website` and manage execution as a website-growth initiative in the website repo and project memory.
- Recommended approach: GEO stays the trust/citation layer; programmatic SEO becomes a bounded high-intent capture layer.
- Guardrail: start with a 20-30 page pilot max, use only proof-backed patterns, and require human review to avoid thin-page spam.
- Next step when resuming: turn the plan into the next small website task set, then choose the first 3 pilot pages to draft manually.

## Update 2026-03-30 12:08 MDT
- Repository synchronization check completed.
- Local `main` and `origin/main` matched exactly before this status sync (`fed6e3f`), with ahead/behind = `0/0`.
- Working tree was clean before the memory update; no uncommitted website/code changes were waiting to be synchronized.
- This session is a housekeeping sync only so work can resume later from an accurate repo state.
- Next step when resuming: pick up from the website/GEO backlog already captured below, without assuming any hidden local changes exist.

## Update 2026-03-27
- **Work:** Replaced "About" section photo and optimized frame rendering.
- **Key Decisions:**
    - Swapped old photo for a new presentation-style speaking photo.
    - Implemented tighter portrait crop; exported responsive `400/600/800.jpg` assets.
    - Fixed image rendering bug by switching from `absolute bottom-0` to `object-cover object-bottom`.
- **Outcomes:** Photo updated and pushed to Vercel (commit `4a0dc9d`).
- **Session:** `8e1c6455-bda8-46e2-9e8a-e884c83e7a99` (snuggly-roaming-raven)

## Update 2026-03-27 ~23:00 MDT
- Fixed About image crop to be visibly effective: replaced `object-cover object-bottom` with `flex items-end` wrapper + `w-full h-auto` img. Image renders at full natural width, bottom-aligns in the fixed-height frame, and the top genuinely clips via overflow-hidden. No asset changes.

## Update 2026-03-27 ~22:30 MDT
- Adjusted About image crop: reduced frame heights by 2rem per breakpoint (26/30/34rem) so more top is clipped, but kept the image at full width with `object-cover object-bottom` unchanged. No asset changes.

## Update 2026-03-27 22:10 MDT
- Shortened the About section image frame in the component (no asset changes).
- Added an overflow-hidden wrapper with fixed responsive heights and bottom-aligned the image so only the top is clipped.
- Build passes.
- **Fix (same session):** the `absolute bottom-0 h-auto` approach broke rendering — image didn't fill the frame. Replaced with `w-full h-full object-cover object-bottom` so the image fills the container and only clips from the top. Build passes.

## Update 2026-03-27 21:54 MDT
- Tightened the new About section presentation photo crop after Dmytro feedback.
- Reduced empty space above the head while preserving the presenter framing and visible projector text.
- Re-exported the responsive `about-speaking-400/600/800.jpg` assets and re-verified the build.

## Update 2026-03-27 21:50 MDT
- Replaced the About section photo with a new presentation image provided by Dmytro.
- Rotated the source photo upright, created a tighter portrait crop focused on Dmytro speaking, and exported new responsive assets: `about-speaking-400/600/800.jpg`.
- Updated `src/components/AboutSection.tsx` to use the new assets and a matching alt text.
- `npm run build` passes after the image swap.

## Update 2026-03-27 12:41 MDT
- Researched how to automate GEO testing for ChatGPT, Claude, Gemini, and Perplexity.
- Main conclusion: use official APIs for automated recurring checks, and reserve browser/UI automation for occasional spot-checks of the real consumer products.
- Important caveat: API outputs are useful for trend tracking, but they are not always identical to the consumer UIs (especially for ChatGPT Search).
- Recommended system design:
  1. weekly API-based prompt sweep across OpenAI Responses API web search, Claude web search, Gemini Google Search grounding, and Perplexity/Sonar
  2. structured capture of answer text, citations, latency, and scoring
  3. periodic browser/manual spot-checks in actual product UIs to validate what users really see
- This became the preferred direction for future GEO automation research/implementation.

## Update 2026-03-27 12:36 MDT
- Ran the first Perplexity GEO baseline across all 10 tracked prompts from `docs/geo-tracking.md`.
- Result: 0/10 positive signals on Perplexity for the two tracked pages (`/ai-lead-follow-up-for-service-businesses` and `/ai-automation-consultant-calgary`).
- No links, mentions, recommendations, or clear paraphrases surfaced yet.
- Logged the baseline directly into `docs/geo-tracking.md`.
- Interpretation: still early; this does not yet indicate failure, only that model-surface pickup has not appeared on Perplexity so far.
- Next best step: run the same prompt set in ChatGPT, Claude, and Gemini for a fuller baseline.

## Update 2026-03-27 09:46 MDT
- Ran a first GEO smoke test on the live decision pages.
- Verified live fetchability/title visibility for `/ai-automation-consultant-calgary`, `/ai-lead-follow-up-for-service-businesses`, and `/guides`.
- Ran two buyer-intent web-grounded checks; no clear early citation traction yet, which is still consistent with the expected baseline window from the GEO tracking docs.
- Recommended next step: run the full first weekly GEO prompt sweep and log the baseline.

## Update 2026-03-21 03:09 MDT
- Flagship case study selection (2026-03-20).
- "Ted OpenClaw Team Manager" selected as the next flagship case study.
- Defined proof-packaging strategy (anonymized names, real numbers, Telegram screenshots).
- Synced latest activity to `memory/2026-03-20.md`.

## Current State
- Website is live (Vite + React + Tailwind, deployed on Vercel)
- GEO quick wins and multiple case study pages are now in place
- "Ted" narrative drafting in motion with specific metrics.
- Proof assets (screenshots) required before final publishing.

## What Was Just Planned (March 7, 2026)
A full GEO (Generative Engine Optimization) plan was created to make Dmytro show up when buyers ask ChatGPT/Perplexity/Claude "who should I hire for AI automation?"

**Full plan:** `GEO-PLAN.md` in project root — READ THIS FIRST before doing any website work.

## Immediate Next Steps (Priority Order)

### Quick Wins (this week — no content needed)
1. Add `/llm.txt` to public/ — tells AI crawlers who Dmytro is and what he does
2. Add FAQ section to homepage — structured Q&A for AI extraction
3. Add schema markup — LocalBusiness + Person JSON-LD in index.html

### Decision Pages to Build (this month)
1. `/ai-automation-consultant-small-business` — "should I hire a consultant or DIY?"
2. `/ai-appointment-setter` — ties directly to voice agent demo offer
3. `/n8n-vs-zapier-small-business` — comparison page
4. `/ai-automation-hvac` — industry page using real HVAC campaign case study
5. `/hire-ai-automation-consultant-vs-agency` — decision page

### Homepage Rewrite
- Above-fold positioning: needs to be more specific (see GEO-PLAN.md for draft copy)
- Add FAQ section with 6+ Q&As using exact buyer language
- New proof strip under hero now handles early trust/relevance; next homepage gains should focus on sharper hero specificity and conversion polish
- Booking area is now more conversion-oriented; next polish pass could tighten widget spacing on mobile or add a tiny scheduling FAQ if drop-off remains high

### Brand Cleanup Completed (March 14, 2026)
- Removed `lovable-tagger` from dependencies and Vite config
- Rewrote project README to reflect the actual dmytroai.com stack and workflow
- Cleaned internal docs to remove Lovable-specific references
- Moved testimonial asset out of `/lovable-uploads/` into `/images/testimonials/`
- Verified zero remaining `lovable` / `componentTagger` references in tracked project files
- `npm run build` passes after cleanup

### Update 2026-03-19
- First GEO decision page live at `/ai-automation-consultant-small-business`
- Fixed missing `Phone` icon import in the page component (was a runtime error)
- Style-learner post created and pipeline run for the new page content
- Route was already wired in App.tsx; Helmet meta/canonical/OG/JSON-LD already in place

### Update 2026-03-18 20:00 MDT
- Updated /llm.txt with "AI Automation Consultant" keyword focus.
- Restored named client attribution (Toufic Fares) in case studies.
- Added PostHog version tracking for website A/B testing.

### Update 2026-03-18 00:00 MDT
- Smart Memory Sync triggered.
- Synced latest changes to website positioning and content.
- Decision: LLM-facing text in /llm.txt must prioritize 'AI Automation Consultant' as the primary keyword.
- Decision: PostHog events should now include the project-specific 'website_version' property for A/B testing baseline.
- Status: LIVE -- Website updated and synced with latest project decisions.

## Key Context
- Dmytro's differentiator: solo consultant, accountable, no agency overhead
- Target buyers: small service businesses (HVAC, real estate, mortgage, e-commerce)
- Active case studies to reference: WheelsFeels CRM, HVAC email campaign, AI voice agent
- Tech stack: React + Vite + Tailwind + TypeScript, deployed Vercel

## Positioning Statement (for all pages)
"Unlike agencies that charge $5K/month for a team you never meet, Dmytro builds the system, shows you how it works, and charges for results — not for overhead."

- 2026-03-27: Made About photo responsive across breakpoints — switched from flex bottom-align trick to `object-cover object-[center_15%]` so the head is preserved at all sizes.

- Reverted About photo to prior desktop width behavior after object-cover changed the framing.
- 2026-03-28: PostHog API review found a real Google Ads traffic spike but weak paid-session engagement so far. On 2026-03-27 to 2026-03-28, 47 sessions had ad params in the landing URL and produced 0 CTA sessions / 0 booking-widget-view sessions. Attribution is partially blind because `utm_source` / `utm_medium` are null in queryable events; current paid detection relies on URL params.
- 2026-03-28: Current recommendation is to test a dedicated paid landing page instead of sending cold Google Ads traffic to the general homepage. Working diagnosis: visitors are stalling at the hero due to message-match / traffic-quality issues, not because deeper page sections are broken.
- 2026-03-28: Removed pricing/cost mentions from FAQ sections on four guide/decision pages. Pricing language still remains in metadata, comparison content, and some body copy (`fixed pricing`, `fixed price`, `cost`, `budget`) outside the FAQs and may need a second cleanup pass if the goal is site-wide removal.


## Done
- [x] Synced repo to the updated project-template structure: added `docs/index.md` and refreshed agent/session-sync guidance
