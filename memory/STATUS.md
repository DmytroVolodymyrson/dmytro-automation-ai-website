# dmytroai.com — Project Status

**Last updated:** 2026-03-21 03:09 MDT

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
