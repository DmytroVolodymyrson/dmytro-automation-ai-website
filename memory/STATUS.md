# dmytroai.com — Project Status

**Last updated:** 2026-03-16

## Current State
- Website is live (Vite + React + Tailwind, deployed on Vercel)
- GEO quick wins and multiple case study pages are now in place
- Lovable branding/artifacts have been removed from the public site, build config, repo docs, and asset paths
- PostHog Stage 1 instrumentation is live; default SDK host now targets the custom reverse-proxy domain `https://b.dmytroai.com`
- Canonical env names remain `VITE_POSTHOG_KEY` and `VITE_POSTHOG_HOST`
- New planning doc added from video review: `docs/plans/2026-03-15-video-inspired-website-improvement-plan.md`
- Homepage now includes a compact proof strip directly under the hero with 3 case-study-driven cards (restaurant voice AI, Instagram lead gen, e-commerce CRM automation) to surface credibility earlier without moving the full Results section
- The proof strip was refined into a more minimal, premium scan pattern: short intro, then cards with industry label, one big result, one support line, and a lightweight case-study affordance
- Booking section copy + layout now reduce friction before the widget by clarifying what the first call is, who it is for, what happens next, and adding a direct low-pressure reassurance line above the scheduler
- Booking section layout was widened within the existing design so the embedded scheduler can use more horizontal space, reducing the cramped one-column feel without changing the section concept
- Booking section supporting bullets were tightened into three approved one-liners to make the outcomes faster to scan without changing layout or structure
- Booking section supporting bullets were further simplified into blunter true one-liners: “Find the bottleneck”, “See the best next move”, and “Leave with a plan”
- Booking section duration copy now correctly says 30 minutes in the heading/subtitle and supporting detail text so the homepage matches the actual scheduler
- FAQ, testimonials, and booking sections had their top padding reduced to tighten the lower-homepage rhythm after the results section removal, while leaving bottom spacing and overall structure intact
- Homepage lower "Results / Client Success Stories" section was removed; proof now lives in the upper proof strip only, with homepage flow preserved as Hero → Proof Strip → About → Services → FAQ → Testimonials → Booking
- Navbar dead anchors were cleaned up by removing `#results` and `#case-studies` links; booking CTA behavior and case study routes remain intact

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
