import {
  AlertTriangle,
  CheckCircle2,
  ClipboardX,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  XCircle,
  Clock,
  DollarSign,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "gohighlevel-setup-mistakes-small-business",
  metaTitle:
    "GoHighLevel Setup Mistakes for Small Business — What Usually Goes Wrong Before Launch | Dmytro AI",
  metaDescription:
    "Common GoHighLevel setup mistakes that cost small businesses leads, trust, and cleanup money. Practical guide to pipeline mistakes, automation conflicts, bad booking logic, ownership gaps, and how to avoid turning setup into a rescue project.",
  badgeText: "GHL Setup Risks",
  badgeIcon: ClipboardX,
  h1: "GoHighLevel Setup Mistakes for Small Business",
  heroIntro:
    "Most GoHighLevel problems do not start at the cleanup stage. They start during setup. A small business launches with vague pipeline stages, copied template automations, weak stop conditions, broken calendar handoff, or no real ownership after go-live — then spends the next few months wondering why leads still leak. If you are setting up GoHighLevel now, the smartest move is to catch the expensive mistakes before they become a cleanup project.",
  heroSubtext:
    "Below: the most common GHL setup mistakes, which ones usually create the worst downstream mess, when DIY is still fine, and how this page stays distinct from the broader setup-help, setup-cost, DIY, cleanup, and audit pages already live on the site.",
  sections: [
    {
      type: "cards",
      title: "The setup mistakes that usually create the biggest mess later",
      subtitle:
        "These are the early decisions that quietly turn a first build into a cleanup job:",
      items: [
        {
          icon: LayoutDashboard,
          title: "Building a pipeline that does not match the real sales process",
          body: "If stages are too vague, too numerous, or disconnected from how leads actually move, every automation built on top becomes brittle. A clean setup starts with operational truth, not whatever a template snapshot happened to name the columns.",
        },
        {
          icon: Workflow,
          title: "Stacking automations before the workflow is mapped",
          body: "One of the most common GoHighLevel setup mistakes is building triggers first and thinking about ownership later. If nobody defines where a lead enters, when it exits, what counts as booked, and which events should stop follow-up, GHL turns into a pile of disconnected sequences fast.",
        },
        {
          icon: Sparkles,
          title: "Installing templates that look complete but do not fit the business",
          body: "Marketplace snapshots and agency templates often create the illusion of progress. The account looks busy, but the forms, tags, calendars, campaigns, and messaging do not match your real booking rules, service areas, or follow-up needs.",
        },
        {
          icon: ShieldCheck,
          title: "Skipping ownership, naming, and documentation rules",
          body: "If nobody knows which workflow owns new leads, who can safely edit triggers, how campaigns are named, or where handoff rules live, the account becomes fragile immediately. That is how teams end up afraid to touch anything a week after launch.",
        },
      ],
    },
    {
      type: "table",
      title: "What each setup mistake usually causes downstream",
      subtitle:
        "The early mistake matters because it creates a specific operational problem later:",
      headers: ["Setup mistake", "What it usually breaks", "Why it gets expensive"],
      rows: [
        {
          label: "Pipeline copied from a template",
          values: [
            "Stage movement, reporting, and trigger logic stop matching the real business",
            "The team stops trusting the CRM and starts tracking important status elsewhere",
          ],
        },
        {
          label: "No stop conditions on nurture workflows",
          values: [
            "Leads keep receiving messages after they replied, booked, or moved stages",
            "Owner time goes into apology work, manual suppression, and trust repair",
          ],
        },
        {
          label: "Calendars and forms wired loosely",
          values: [
            "Bookings land with missing data, wrong ownership, or bad routing",
            "The business pays for setup and still needs manual cleanup every day",
          ],
        },
        {
          label: "No naming or documentation discipline",
          values: [
            "Nobody knows which automations are safe to edit or remove",
            "Simple future changes become risky and push the account toward cleanup help sooner",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is useful — and when it is not",
      subtitle:
        "This page is for owners trying to avoid obvious setup mistakes before they become expensive:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are setting up GoHighLevel now or cleaning up a very recent rollout",
            "You want to catch the mistakes that usually create duplicate automations, broken routing, or weak pipeline trust",
            "You already know GHL might be the right platform, but you do not want a messy first launch",
            "Your lead response, booking flow, or nurture system is important enough that a bad setup will cost real revenue",
            "You want a smaller first build instead of stuffing every possible feature into launch week",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your GoHighLevel account is already deeply messy and the real question is cleanup vs rebuild",
            "You are still choosing between GHL and a different CRM",
            "You only need one simple reminder flow and nothing else is mission-critical yet",
            "Your sales process itself is undefined, so the tool setup is not the real bottleneck",
            "You want a fake checklist that avoids making actual scope decisions",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to avoid turning setup into future cleanup",
      subtitle:
        "Most small businesses do not need a bigger setup. They need a more disciplined one:",
      items: [
        {
          icon: AlertTriangle,
          title: "Start with one revenue-critical workflow",
          body: "New lead intake, missed-call follow-up, appointment booking, or reactivation — pick one workflow that clearly affects revenue and make it trustworthy first. Do not try to launch ten half-owned workflows just because GHL can technically support them.",
        },
        {
          icon: Wrench,
          title: "Map states before triggers",
          body: "Write down the states first: new lead, contacted, booked, quoted, won, lost, no-show, inactive. Then decide what should move a record, what should stop follow-up, and what should notify a human. That order alone prevents a lot of avoidable GHL mess.",
        },
        {
          icon: Clock,
          title: "Protect future edits during the first launch",
          body: "Use naming rules, comments, and documentation from day one. It feels slower now, but it is usually the difference between a system that can be improved cleanly and one nobody wants to touch later.",
        },
        {
          icon: DollarSign,
          title: "Keep the first build sized to the payoff",
          body: "If the first workflow cannot plausibly pay back the setup cost through recovered leads, cleaner booking, or less admin time, the scope is probably too broad. A smaller trustworthy rollout usually beats an impressive noisy one.",
        },
      ],
    },
    {
      type: "prose",
      title: "The five GoHighLevel setup mistakes owners regret most",
      subtitle:
        "These are the patterns that show up again and again when a new account already feels fragile:",
      blocks: [
        {
          heading: "Mistake 1: treating GoHighLevel like a funnel template instead of an operating system",
          body: "A lot of bad setups happen because the account is built around whatever the software demo makes easy instead of how the business actually works. If ownership, handoff, and stage truth are not designed first, the account looks live while the real work still happens outside it.",
        },
        {
          heading: "Mistake 2: confusing activity with clarity",
          body: "Dozens of triggers, tags, campaigns, and snapshots can make a fresh setup feel sophisticated. But complexity is not the same as usefulness. If nobody can explain why each automation exists and what should stop it, the account is already drifting toward cleanup.",
        },
        {
          heading: "Mistake 3: letting forms, calendars, and pipelines tell different stories",
          body: "When a lead books but does not move stages, when forms miss source data, or when assignment rules bypass the real owner, the account starts lying. That makes reporting weak and forces manual workarounds right after launch.",
        },
        {
          heading: "Mistake 4: launching without edge-case testing",
          body: "Bad-fit leads, duplicate submissions, reschedules, no-shows, replies during nurture, and after-hours calls should all be tested before a workflow goes live. Skipping those tests is one of the fastest ways to create an account that technically works and still fails operationally.",
        },
        {
          heading: "Mistake 5: no one owns the account after implementation",
          body: "Even a good initial build needs someone to own change requests, naming, admin access, and logic updates. Without that, the first quick fix usually creates the first layer of account mess.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone GoHighLevel setup-mistakes case study here. The support comes from the live GoHighLevel cluster plus adjacent CRM and routing proof already published on the site:",
      studies: [
        {
          industry: "Existing GoHighLevel setup cluster",
          headline: "The live setup, cost, DIY, cleanup, audit, and cleanup-vs-rebuild pages already define the surrounding buyer decisions clearly",
          body: "That cluster makes the remaining exact tracked query viable: what are the most common GoHighLevel setup mistakes for a small business? This page isolates the pre-launch mistake layer instead of rehashing setup-help or recovery-stage cleanup.",
          link: "/gohighlevel-automation-setup",
        },
        {
          industry: "CRM workflow proof",
          headline: "The WheelsFeels CRM case study shows why state truth and ownership matter more than a pretty dashboard",
          body: "That project is adjacent proof for the same setup mistakes this page warns about: weak stage logic, manual workarounds, inconsistent follow-up state, and systems that stop being trustworthy when the workflow model is not designed carefully.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Phone and routing proof",
          headline: "Paris Cafe proves the value of mapping intake, routing, and handoff before a workflow goes live",
          body: "Different stack, same operational lesson. The system works because the live workflow was designed around real handoff and response rules instead of generic automation theater.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "GoHighLevel automation setup help", href: "/gohighlevel-automation-setup" },
        { label: "GoHighLevel setup vs. DIY", href: "/gohighlevel-setup-vs-diy-small-business" },
        { label: "GoHighLevel account audit checklist", href: "/gohighlevel-account-audit-checklist" },
        { label: "E-commerce CRM case study", href: "/case-studies/ecommerce-crm-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What are the most common GoHighLevel setup mistakes for a small business?",
      answer:
        "The biggest ones are copying a pipeline that does not match the real sales process, launching automations before ownership and stop conditions are defined, wiring forms and calendars loosely, skipping edge-case testing, and failing to set naming or documentation rules that protect future edits.",
    },
    {
      question: "How do I avoid creating a messy GoHighLevel account during setup?",
      answer:
        "Start with one revenue-critical workflow, map states before triggers, test what should start and stop automation, keep calendars and pipelines aligned, and document ownership from day one. Most messy accounts are built from rushed scope and weak workflow design more than from the platform itself.",
    },
    {
      question: "How is this different from the GoHighLevel setup-help page?",
      answer:
        "The setup-help page explains what a solid GHL implementation should include and when expert help is worth it. This page stays narrower: the specific mistakes that usually make a first rollout fragile and expensive later.",
    },
    {
      question: "When do setup mistakes turn into a cleanup project?",
      answer:
        "Usually when the team no longer trusts stage movement, leads keep getting the wrong follow-up, duplicate logic starts piling up, or nobody knows which workflows are safe to edit. At that point the account has crossed from setup risk into recovery-stage cleanup.",
    },
    {
      question: "Should I fix setup mistakes myself or hire help before launch?",
      answer:
        "DIY is fine when the workflow is simple and you can clearly map ownership, triggers, and stop conditions yourself. If the setup affects revenue-critical lead routing, booking, or nurture — and mistakes would create daily cleanup work — expert help usually costs less than a messy launch.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners trying to avoid the setup mistakes that quietly turn a GoHighLevel rollout into a future cleanup project",
  ctaHeading: "Want a cleaner GoHighLevel launch before small setup mistakes get expensive?",
  ctaText:
    "Book a 30-minute call. We will look at your planned workflow, identify the setup mistakes most likely to create duplicate automation, weak handoff, or pipeline confusion, and help you scope the narrowest trustworthy rollout first.",
  ctaSubtext:
    "Useful if you are still in setup mode and want to avoid paying for cleanup a month from now.",
  relatedLinks: [
    { label: "GoHighLevel automation setup help", href: "/gohighlevel-automation-setup" },
    { label: "GoHighLevel setup cost for small business", href: "/gohighlevel-setup-cost-small-business" },
    { label: "GoHighLevel account audit checklist", href: "/gohighlevel-account-audit-checklist" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
