# Homepage Optimization System — Implementation Plan

**Date**: 2026-03-15
**Status**: Draft — awaiting Dmytro approval
**Scope**: v1 — homepage only (dmytroai.com)

---

## 1. Executive Summary

Build a lightweight, semi-autonomous optimization loop for dmytroai.com's homepage. PostHog Cloud tracks visitor behavior through a defined funnel (pageview → CTA click → booking widget view). An AI agent (Claude Code, triggered manually or via cron) reads PostHog data, identifies the single highest-leverage copy/ordering change, opens a PR, and posts a plain-English summary to Discord. Dmytro approves or rejects in Discord before merge.

v1 is deliberately simple: no A/B testing framework, no feature flags, no server-side rendering. Just tracking, a decision engine prompt, and a human-in-the-loop PR workflow.

---

## 2. Recommended Architecture

```
┌─────────────┐     ┌──────────────┐     ┌───────────────┐
│  Visitor     │────▶│  React App   │────▶│  PostHog Cloud│
│  (browser)   │     │  (posthog-js)│     │  (events +    │
└─────────────┘     └──────────────┘     │   dashboard)  │
                                          └───────┬───────┘
                                                  │ API
                                          ┌───────▼───────┐
                                          │  Optimization  │
                                          │  Agent (Claude)│
                                          │  reads metrics │
                                          │  proposes PR   │
                                          └───────┬───────┘
                                                  │ gh pr create
                                          ┌───────▼───────┐
                                          │  Discord Bot / │
                                          │  Webhook       │
                                          │  (Cedric posts)│
                                          └───────┬───────┘
                                                  │ approve/reject
                                          ┌───────▼───────┐
                                          │  Merge + Vercel│
                                          │  auto-deploy   │
                                          └───────────────┘
```

**Key decisions:**
- PostHog Cloud (not self-hosted) — zero infrastructure
- `posthog-js` loaded via npm, initialized in `main.tsx`
- No PostHog Experiments in v1 — traffic is too low for statistical significance; use before/after comparison instead
- Optimization agent runs as a Claude Code session with a structured prompt + PostHog API data
- Discord notification via webhook (not a full bot)

---

## 3. PostHog Event Taxonomy

### Auto-captured (enabled by default)
PostHog autocapture handles `$pageview`, `$pageleave`, scroll depth, and click heatmaps. Keep autocapture ON.

### Custom Events

| Event Name | Trigger | Properties |
|---|---|---|
| `cta_clicked` | Any booking CTA button clicked | `{ location: "hero" \| "navbar_desktop" \| "navbar_mobile", label: string }` |
| `booking_widget_viewed` | Booking widget iframe scrolls into viewport | `{ source: "scroll" \| "cta_scroll" }` |
| `section_viewed` | Each major section enters viewport | `{ section: "hero" \| "about" \| "services" \| "results" \| "faq" \| "testimonials" \| "booking" }` |
| `case_study_clicked` | Case study card clicked | `{ slug: string, industry: string, position: number }` |
| `faq_opened` | FAQ accordion opened | `{ question_index: number, question_text: string }` |

### Properties on all events (via PostHog identify/register)
- `viewport`: `"mobile"` / `"tablet"` / `"desktop"` (set once on load based on `window.innerWidth`)
- `experiment_config_version`: string from `siteConfig.version` (see section 9)

### Events NOT tracked in v1
- `booking_completed` — the booking widget is a GoHighLevel iframe on `api.leadconnectorhq.com`. We cannot instrument inside it. Booking completions will be measured via GoHighLevel's own reporting or a future GHL webhook → PostHog integration. This is an explicit gap in v1.
- Form field interactions inside the iframe

### Event naming convention
- `snake_case`, no prefix
- Properties are `snake_case`
- Avoid `$` prefix (reserved for PostHog internals)

---

## 4. Funnel Definition and Dashboard Setup

### Primary Funnel: "Homepage → Booking Intent"

```
Step 1: $pageview (url = "/")
Step 2: cta_clicked (any location)
Step 3: booking_widget_viewed
```

This is the funnel the optimization engine watches. Each step has a conversion rate.

### Secondary Signals (dashboard widgets, not funnel steps)
- Section view depth: what % of visitors see each section
- FAQ engagement: which questions get opened
- Case study clicks: which proof points resonate
- CTA location breakdown: hero vs. navbar click distribution
- Device split: mobile vs. desktop conversion rates

### PostHog Dashboard: "Homepage Optimization"

Create one dashboard with these panels:
1. **Funnel**: Homepage → CTA Click → Booking Widget View (7d, 30d)
2. **Trend**: `cta_clicked` by `location` over time
3. **Trend**: `section_viewed` by `section` (shows scroll depth distribution)
4. **Trend**: `case_study_clicked` by `industry`
5. **Table**: FAQ open rates by question
6. **Breakdown**: All events by `viewport` (mobile/desktop)

### Reporting cadence
- Dashboard is always live
- Optimization agent reads data via PostHog API at trigger thresholds (see section 5)

---

## 5. Experiment Framework for v1

### Why NOT PostHog Experiments in v1

PostHog Experiments (feature flags + statistical testing) require:
- ~1,000+ visitors per variant for significance at typical effect sizes
- A server-side or client-side feature flag SDK
- Enough traffic to converge within a reasonable window

For a solo consultant's homepage, traffic is likely 50-500 visitors/week. A/B tests would take months to converge. **Not worth the complexity.**

### v1 approach: Sequential testing with before/after comparison

1. Establish a baseline period (7-14 days of tracking, no changes)
2. Make one change per optimization cycle
3. Compare the same funnel metrics before vs. after
4. Use PostHog's date-range comparison feature on the dashboard
5. If the change clearly helps (>15% relative improvement in funnel step), keep it. If it hurts or is ambiguous after one cycle, revert.

### Trigger thresholds for optimization cycle

The agent should propose a change when ANY of these are met:
- 200+ unique `$pageview` events on `/` since last change
- 30+ `cta_clicked` events since last change
- 10+ `booking_widget_viewed` events since last change
- 7 calendar days since last change (weekly fallback)

These thresholds are stored in config (see section 9) and can be tuned.

---

## 6. Optimization Decision Engine

### How the AI decides what to change

The optimization agent receives:
1. **Current copy**: The full content of `siteConfig.ts` (all mutable text)
2. **Funnel data**: PostHog API export of funnel conversion rates (current period vs. previous period)
3. **Section engagement**: Which sections visitors see, in what order, on what devices
4. **CTA performance**: Click rates by location
5. **Scroll depth**: How far visitors get before leaving
6. **Previous changes log**: `optimization-log.json` with history of what was changed and what happened

### Decision logic (prompt structure)

```
You are optimizing the homepage of dmytroai.com for booking conversions.

CURRENT METRICS:
{posthog_data}

CURRENT COPY:
{siteConfig contents}

CHANGE HISTORY:
{optimization-log.json}

CONSTRAINTS:
- You may change exactly ONE element per cycle
- LOCKED (do not change): hero headline "Automate boring work. Focus on growth."
- LOCKED: core brand voice (professional, direct, results-focused solo consultant)
- LOCKED: solo-consultant positioning
- MUTABLE: hero subtitle, CTA button text, CTA placement/emphasis,
  supporting section microcopy, case study ordering, proof ordering
- NOT YET MUTABLE: booking section copy (deferred until tracking is trusted)
- Aggression level: balanced (no radical redesigns, no clickbait)

INSTRUCTIONS:
1. Identify the biggest drop-off in the funnel
2. Hypothesize why visitors drop off at that step
3. Propose exactly one copy or ordering change that addresses it
4. Explain the hypothesis in 2-3 plain-English sentences (for Discord)
5. Output the exact code diff (changed lines in siteConfig.ts)
6. If metrics look healthy and no clear improvement opportunity exists, output "NO_CHANGE" with reasoning
```

### What the agent can propose

| Element | File | Mutable? |
|---|---|---|
| Hero headline | `siteConfig.ts` → `hero.headline` | NO — locked |
| Hero subtitle | `siteConfig.ts` → `hero.subtitle` | YES |
| Hero CTA text | `siteConfig.ts` → `hero.ctaText` | YES |
| Navbar CTA text | `siteConfig.ts` → `navbar.ctaText` | YES |
| Hero stat badges | `siteConfig.ts` → `hero.stats` | YES |
| Service descriptions | `siteConfig.ts` → `services[].description` | YES |
| Results section header/subheader | `siteConfig.ts` → `results.header/subheader` | YES |
| Case study order | `siteConfig.ts` → `caseStudies` (array order) | YES |
| Testimonial order | `siteConfig.ts` → `testimonials` (array order) | YES |
| FAQ order | `siteConfig.ts` → `faqItems` (array order) | YES |
| Booking section copy | `siteConfig.ts` → `booking.*` | NOT YET (v2) |

---

## 7. PR + Discord Approval Workflow

### PR naming convention
```
opt/YYYY-MM-DD-{short-description}
```
Examples:
- `opt/2026-03-20-hero-subtitle-specificity`
- `opt/2026-04-01-cta-text-urgency`
- `opt/2026-04-10-case-study-reorder`

### PR template

**Title**: `opt: {one-line description of change}`

**Body**:
```markdown
## Optimization Proposal

**Cycle**: #N (since tracking started)
**Trigger**: {which threshold was hit}
**Period**: {date range of data analyzed}

### Hypothesis
{2-3 sentences explaining what data shows and why this change should help}

### Change
{human-readable description of what changed}

### Metrics at time of proposal
- Pageviews: X
- CTA clicks: Y (Z% of pageviews)
- Booking widget views: W (V% of CTA clicks)

### Diff
{code diff}

### Rollback
Revert this PR's commit.
```

### Discord notification

Post to a dedicated `#website-optimization` Discord channel via webhook:

```
📊 **Homepage Optimization Proposal #N**

**What changed**: Hero subtitle updated from "I help businesses save 10+ hours weekly..." to "..."

**Why**: Only 8% of visitors click the CTA. The current subtitle is generic — adding the specific price range ("starting at $1,500") may increase trust and urgency.

**Data**: 245 pageviews, 19 CTA clicks (7.8%), 6 widget views (31.6% of clicks)

**PR**: https://github.com/...

React ✅ to approve, ❌ to reject.
```

### Approval states

| State | Meaning |
|---|---|
| PR opened, Discord posted | Awaiting Dmytro's review |
| ✅ reaction in Discord | Dmytro approves → merge PR |
| ❌ reaction in Discord | Dmytro rejects → close PR, log reason |
| No response after 48h | Ping Dmytro again |
| PR merged | Vercel auto-deploys, new baseline period starts |

### Who does what
- **Claude (optimization agent)**: Reads data, generates PR, formats Discord message
- **Cedric (assistant/bot)**: Posts the Discord message (can be a simple webhook call from the agent)
- **Dmytro**: Reviews in Discord, reacts to approve/reject

---

## 8. Safety Guardrails and Non-Negotiables

### Hard locks
1. Hero headline "Automate boring work. Focus on growth." — NEVER changes
2. Brand voice — no clickbait, no false urgency, no "limited time" pressure tactics
3. Solo-consultant positioning — never imply a team or agency
4. Factual claims — no metrics not backed by actual client results
5. Booking widget URL — never changes without explicit Dmytro approval

### Rate limits
- Maximum 1 change per optimization cycle
- Minimum 5 days between changes (even if thresholds hit sooner)
- Maximum 3 consecutive changes without a "NO_CHANGE" assessment

### Revert policy
- If funnel conversion drops >20% relative after a change, auto-propose revert PR
- If Dmytro says "revert" in Discord, immediately open revert PR

### What the agent must NOT do
- Modify component structure, layout, or styling (copy/ordering only in v1)
- Add or remove sections
- Change the booking widget integration
- Push directly to `main` — always PR
- Merge its own PRs

---

## 9. Repo-Level Implementation Plan

### New files to create

```
src/
├── config/
│   └── siteConfig.ts          # All mutable copy extracted here
├── lib/
│   └── posthog.ts             # PostHog init + helper functions
├── hooks/
│   └── useTrackSection.ts     # IntersectionObserver hook for section_viewed
├── components/
│   └── TrackCTA.tsx            # Wrapper component for CTA click tracking
optimization/
├── optimization-log.json       # History of changes + metrics snapshots
├── trigger-config.json         # Thresholds for optimization cycles
└── prompts/
    └── optimization-prompt.md  # The structured prompt for the decision engine
```

### Files to modify

| File | Change |
|---|---|
| `package.json` | Add `posthog-js` dependency |
| `src/main.tsx` | Initialize PostHog with project API key |
| `src/components/HeroSection.tsx` | Import copy from `siteConfig.ts`, add `cta_clicked` tracking, add `data-section="hero"` |
| `src/components/Navbar.tsx` | Import CTA text from `siteConfig.ts`, add `cta_clicked` tracking with location |
| `src/components/BookingSection.tsx` | Add `booking_widget_viewed` via IntersectionObserver, import copy from `siteConfig.ts` |
| `src/components/ServicesSection.tsx` | Import descriptions from `siteConfig.ts`, add section tracking |
| `src/components/ResultsSection.tsx` | Import case study order from `siteConfig.ts`, add section tracking, add `case_study_clicked` |
| `src/components/TestimonialsSection.tsx` | Import testimonial order from `siteConfig.ts`, add section tracking |
| `src/components/FAQSection.tsx` | Add `faq_opened` tracking, import order from `siteConfig.ts` |
| `src/components/AboutSection.tsx` | Add section tracking |
| `index.html` | No changes needed (PostHog loaded via JS, not script tag) |
| `.env.local` | Add `VITE_POSTHOG_KEY` and `VITE_POSTHOG_HOST` |
| `.gitignore` | Ensure `.env.local` is ignored (likely already is) |

### Where tracking lives

**Initialization**: `src/lib/posthog.ts`
```ts
// PostHog singleton init
// Exports: posthog instance, track() helper, identifyViewport()
// Called once from main.tsx
```

**Section tracking**: `src/hooks/useTrackSection.ts`
```ts
// Uses IntersectionObserver (threshold: 0.3)
// Fires section_viewed once per section per page load
// Used by every section component
```

**CTA tracking**: Inline in each component's onClick handler
```ts
onClick={() => {
  posthog.capture('cta_clicked', { location: 'hero', label: siteConfig.hero.ctaText });
  scrollToBooking();
}}
```

**Booking widget view**: IntersectionObserver on `#booking-widget` div in `BookingSection.tsx`

### Where experiment config lives

**`src/config/siteConfig.ts`** — single source of truth for all mutable copy:

```ts
export const siteConfig = {
  version: "1.0.0", // incremented with each optimization change

  hero: {
    // LOCKED — do not change
    headline: "Automate boring work.",
    headlineAccent: "Focus on growth.",

    // MUTABLE
    subtitle: "I help businesses save 10+ hours weekly and generate 300%+ ROI by building AI systems that automate repetitive work and let teams focus on what matters.",
    ctaText: "Book a Free Strategy Call",
    stats: [
      { icon: "Clock", text: "Save 10+ hrs/week" },
      { icon: "TrendingUp", text: "Scale without hiring" },
    ],
  },

  navbar: {
    ctaText: "Book a Call",
  },

  caseStudyOrder: [0, 1, 2], // indices into the caseStudies array

  testimonialOrder: [0, 1, 2], // indices into the testimonials array

  faqOrder: [0, 1, 2, 3, 4, 5], // indices into the faqItems array

  // NOT YET MUTABLE — booking section copy stays hardcoded until v2
} as const;
```

### How to structure prompts for future optimization runs

**`optimization/prompts/optimization-prompt.md`**:
- Contains the full system prompt template (see section 6)
- Placeholders for `{posthog_data}`, `{siteConfig}`, `{optimization_log}`
- The Claude Code session fills these from PostHog API + local files

**`optimization/optimization-log.json`**:
```json
{
  "changes": [
    {
      "id": 1,
      "date": "2026-04-01",
      "element": "hero.subtitle",
      "from": "I help businesses save...",
      "to": "Your repetitive work is costing you...",
      "hypothesis": "Current subtitle is benefit-focused but vague. Adding cost framing may increase urgency.",
      "metrics_before": { "pageviews": 312, "cta_clicks": 24, "widget_views": 8 },
      "metrics_after": null,
      "outcome": "pending",
      "pr": "https://github.com/.../pull/15"
    }
  ],
  "baseline": {
    "established": "2026-03-25",
    "period_days": 14,
    "metrics": { "pageviews": 450, "cta_clicks": 35, "widget_views": 12 }
  }
}
```

**`optimization/trigger-config.json`**:
```json
{
  "min_pageviews": 200,
  "min_cta_clicks": 30,
  "min_widget_views": 10,
  "fallback_days": 7,
  "min_days_between_changes": 5,
  "revert_threshold_drop_pct": 20
}
```

---

## 10. Phased Rollout Plan

### Phase 1: Instrumentation (build now)
**Duration**: 1-2 days of implementation
**Goal**: Get tracking live, establish baseline

1. Install `posthog-js`, create `src/lib/posthog.ts`
2. Initialize in `main.tsx` with env vars
3. Create `useTrackSection` hook
4. Add tracking to all components (section views, CTA clicks, booking widget view, FAQ opens, case study clicks)
5. Extract mutable copy into `siteConfig.ts`, update components to import from it
6. Deploy to production
7. Create PostHog dashboard with funnel + supporting panels
8. Wait 7-14 days to collect baseline data

### Phase 2: Decision engine + workflow (build during baseline wait)
**Duration**: 1 day of implementation
**Goal**: Have the optimization loop ready to run when baseline data is in

1. Create `optimization/` directory with prompt template, log file, trigger config
2. Write Discord webhook integration (simple `fetch` call in a script or Claude Code action)
3. Document the manual process: "run this Claude Code session, it reads PostHog, opens PR, posts to Discord"
4. Test with a dry run (propose a change but don't merge)

### Phase 3: First optimization cycle (after baseline)
**Duration**: ~2 weeks after Phase 1 deploys
**Goal**: First real proposed change

1. Agent reads baseline data from PostHog API
2. Agent proposes first change (or says NO_CHANGE)
3. Dmytro reviews and approves/rejects
4. If approved, merge and start measuring

### Phase 4: Iteration (ongoing)
**Goal**: Continuous improvement, one change at a time

- Run optimization cycle at trigger thresholds
- Log every change and outcome
- After 5-10 cycles, review what's working and adjust the prompt/constraints

### Future phases (NOT v1)
- Booking section copy becomes mutable (after tracking trust is established)
- PostHog Experiments for A/B testing (when traffic justifies it, likely 500+ weekly visitors)
- Automated trigger via cron/n8n instead of manual Claude Code sessions
- GHL webhook → PostHog for actual booking completion tracking

---

## 11. Risks, Failure Modes, and Mitigation

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Low traffic makes before/after comparison noisy** | High | Medium | Use longer comparison windows (14d+). Accept that early cycles are directional, not statistically rigorous. |
| **Booking completion not trackable** | Certain (v1) | High | Use `booking_widget_viewed` as proxy. Cross-reference with GHL booking reports manually. Accept this gap. |
| **PostHog snippet affects page performance** | Low | Medium | PostHog JS is ~20KB gzipped, async. Measure Core Web Vitals before/after. |
| **Copy changes hurt brand voice** | Medium | High | Dmytro reviews every change. Agent prompt explicitly locks brand voice. |
| **Agent proposes same unhelpful change repeatedly** | Low | Low | `optimization-log.json` prevents re-proposing reverted changes. |
| **GoHighLevel iframe blocks IntersectionObserver** | Very low | Low | IO triggers on the wrapper div, not the iframe itself. Already verified pattern. |
| **Vercel preview deploys leak tracking to PostHog** | Medium | Low | Filter PostHog by `window.location.hostname === 'dmytroai.com'` or use PostHog's URL filter. |
| **siteConfig extraction introduces bugs** | Medium | Medium | Test extraction carefully. Run `npm run build` and visual QA before deploying Phase 1. |

---

## 12. Open Questions / Assumptions to Verify

1. **PostHog project**: Does Dmytro already have a PostHog Cloud account, or do we need to create one? (Free tier supports 1M events/month — more than enough.)

2. **Discord webhook**: Is there an existing `#website-optimization` channel, or should we create one? Does Dmytro want Cedric to post, or is a webhook bot fine?

3. **GoHighLevel booking data**: Can we get a webhook from GHL when a booking is completed? This would close the funnel gap. Not blocking for v1, but valuable for v2.

4. **Vercel environment variables**: Can we add `VITE_POSTHOG_KEY` and `VITE_POSTHOG_HOST` to the Vercel project settings?

5. **Traffic volume**: What's current weekly homepage traffic? This affects how long baseline collection takes and whether trigger thresholds are realistic.

6. **Existing GHL analytics**: Does GHL already report on booking widget views or form starts? If so, we can cross-validate our PostHog `booking_widget_viewed` numbers.

7. **PostHog region**: EU or US instance? Affects the host URL (`us.i.posthog.com` vs `eu.i.posthog.com`). May also matter for GDPR if serving EU visitors.

8. **Cookie consent**: Does the site need a cookie banner for PostHog? PostHog can run in cookieless mode (`persistence: 'memory'`) with reduced functionality. What's the preference?

---

## 13. Recommended First Implementation Slice

**The smallest useful v1 is Phase 1 only: instrumentation + siteConfig extraction.**

Specifically, the first PR should contain:

1. `npm install posthog-js`
2. `src/lib/posthog.ts` — init with env vars, `track()` helper
3. `src/hooks/useTrackSection.ts` — IntersectionObserver hook
4. `src/config/siteConfig.ts` — extract all mutable copy
5. Update all 7 section components to:
   - Import mutable copy from `siteConfig.ts`
   - Add `useTrackSection` calls
   - Add `cta_clicked` tracking on all 3 CTA buttons (hero, navbar desktop, navbar mobile)
   - Add `booking_widget_viewed` tracking
   - Add `faq_opened` and `case_study_clicked` tracking
6. `.env.local` with PostHog credentials (`.env.example` committed with placeholder values)
7. Update `main.tsx` to call PostHog init

**What this does NOT include** (intentionally deferred):
- The optimization prompt/agent workflow
- The Discord webhook
- The optimization log
- Any copy changes

**Why this order**: You can't optimize what you don't measure. The tracking must be live and trusted before the optimization loop adds any value. The siteConfig extraction is bundled here because it's a prerequisite for the agent to make targeted copy changes later — and it's easier to extract copy now while we're already touching every component for tracking.

**Estimated effort**: 3-4 hours of implementation + QA, one PR, one deploy.

After this deploys and collects 7-14 days of data, Phase 2 (the optimization workflow) becomes a ~2 hour effort.
