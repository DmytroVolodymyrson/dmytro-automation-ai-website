# AGENTS.md — dmytroai.com Website

## Project
Vite + React + TypeScript + Tailwind + shadcn/ui + Framer Motion  
Live at: https://www.dmytroai.com  
Repo: DmytroVolodymyrson/dmytro-automation-ai-website  
Deployed on Vercel (auto-deploys from main)

---

## 🔴 POST LOGGING TRIGGER (CRITICAL — Check Every Message)

**When copy on this website is updated OR new content is published** (new case study, FAQ update, homepage rewrite, new landing page, new blog post):

Run this pipeline immediately, without being asked:

1. Create a post markdown file in `style-learner/posts/<platform>/<date>-<slug>.md`
   - Platform: `landing-page`, `case-study`, `blog`, or `faq`
   - Include: final copy text, section name, any style notes
2. `cd style-learner && node src/learning/schema.js add --file posts/<platform>/<date>-<slug>.md`
3. `node src/learning/analyze.js --all`
4. `node src/learning/profile.js`
5. `git add -A && git commit -m "data: style-learner — add <date> <slug>" && git push`

Do NOT wait to be asked. Do it in the same turn the copy is published.

---

## Style Learner

Located at `style-learner/` — learns writing style from published website copy.

Config: `style-learner/config.json`
- Persona: Dmytro — AI automation consultant, dmytroai.com
- Platforms: landing-page, case-study, blog, faq
- Style goal: Clear, direct, credible. Speaks to business owners. No fluff, no jargon.

Profile: `style-learner/data/learning/profile.json` (rebuilt on every new post)

---

## Dev Workflow

```bash
# Local dev
npm run dev -- --host 0.0.0.0 --port 8080

# Build check before pushing
npm run build

# Deploy: just push to main — Vercel auto-deploys
git push origin main
```

## Page Structure (current)
Navbar → HeroSection → AboutSection → ServicesSection → ResultsSection → FAQSection → TestimonialsSection → BookingSection → Footer

## Key Files
- `src/data/caseStudies.ts` — all case study data
- `src/components/ResultsSection.tsx` — homepage case study cards
- `src/pages/case-studies/` — full case study pages
- `src/App.tsx` — routing
- `public/llm.txt` — AI crawler summary
- `index.html` — schema markup (LocalBusiness + Person + FAQPage)

## GEO Strategy
Full plan in `GEO-PLAN.md`. Priority order:
1. Quick wins (done): llm.txt, FAQ section, schema markup
2. Paris Cafe case study page (next)
3. Decision pages (5 priority pages)
4. Blog/content for AI citation
