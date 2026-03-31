# dmytroai.com — Project Status

**Last updated:** 2026-03-30 11:12 PM MDT

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
- Confirmed website Paperclip project exists and should be reused:
  - project: `Website` (`b004c08e-c4d2-4bf8-ae73-6bbc7e56b7ed`)
  - workspace: `website-repo` (`f6516846-b0d9-4526-a2b6-90e6de3053cf`)
- Added local/private Paperclip setup note at `private/docs/paperclip-local-setup-2026-03-30.md`.
- Added root OpenClaw routing guidance at `/Users/whatever/clawd/docs/paperclip-discord-project-routing.md` and reinforced the rule in workspace `AGENTS.md`.
- New routing rule: website work from Discord must create Paperclip issues with explicit `projectId` + `projectWorkspaceId`; do not create generic company-only website issues.
- New assignment rule: default to agent ownership; "board" means CEO-agent review unless Dmytro explicitly wants personal ownership.
- Autoresearch loop was already initialized in this repo with `program.md`; future website iteration work should continue inside the Website Paperclip project.
- Next step when resuming from `#dmytroai-website`: use the Website Paperclip project directly for HVAC / AEO / programmatic SEO / autoresearch tasks.

## Update 2026-03-30 16:xx MDT
- Analyzed a new marketing direction: whether to extend the website from GEO into bounded programmatic SEO.
- Saved a planning doc at `docs/plans/2026-03-30-programmatic-seo-growth-plan.md`.
- Main decision: do **not** create a separate standalone project/repo yet. Keep this inside `dmytroai-website` and manage execution as a website-growth initiative in Paperclip.
- Recommended approach: GEO stays the trust/citation layer; programmatic SEO becomes a bounded high-intent capture layer.
- Guardrail: start with a 20-30 page pilot max, use only proof-backed patterns, and require human review to avoid thin-page spam.
- Next step when resuming: create the Paperclip issue epic + first issue set from the plan, then choose the first 3 pilot pages to draft manually.

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
