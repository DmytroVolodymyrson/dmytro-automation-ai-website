import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  LayoutDashboard,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "gohighlevel-account-audit-checklist",
  metaTitle:
    "GoHighLevel Account Audit Checklist — What to Check Before You Pay for Cleanup | Dmytro AI",
  metaDescription:
    "Use this GoHighLevel account audit checklist before you pay for cleanup. Practical guide to pipeline trust, broken automations, duplicate contacts, ownership gaps, and whether cleanup, rebuild, or a different stack is the smarter move.",
  badgeText: "GHL Audit",
  badgeIcon: ClipboardList,
  h1: "GoHighLevel Account Audit Checklist",
  heroIntro:
    "If your GoHighLevel account feels messy, do not pay for cleanup blindly. Audit the account first. The goal is not to create another giant checklist nobody uses. The goal is to answer three practical questions fast: what is actually broken, whether the core workflow is still worth saving, and whether you need bounded cleanup, a rebuild, or a different stack entirely. A good GoHighLevel account audit looks at the live revenue path first — lead intake, pipeline movement, follow-up logic, booking handoff, and contact hygiene — before anybody starts selling more implementation hours.",
  heroSubtext:
    "Below: what to inspect before you pay for cleanup, which red flags usually mean cleanup is enough, which ones point to rebuild, and how to keep this audit page distinct from the broader cleanup-service and cleanup-vs-rebuild guides already live on the site.",
  sections: [
    {
      type: "cards",
      title: "What to audit first in a messy GoHighLevel account",
      subtitle:
        "Do not start with cosmetic clutter. Start with the parts of the account that decide whether leads get handled correctly or quietly leak:",
      items: [
        {
          icon: Workflow,
          title: "The automation layer",
          body: "Can somebody explain which workflows are live, what triggers them, what should stop them, and why they still exist? If the answer is no, the account needs simplification before more automation gets added.",
        },
        {
          icon: LayoutDashboard,
          title: "Pipeline truth",
          body: "Compare the pipeline against actual operations. Do booked calls move stages properly? Do won deals close? Do no-shows, stale leads, and callbacks reflect reality? If the pipeline tells a different story than the business, reporting is already fiction.",
        },
        {
          icon: RefreshCcw,
          title: "Contact hygiene and duplicate state",
          body: "Check for duplicate contacts, conflicting tags, repeated nurture entry, and stale opportunities that never close. One lead should not be able to exist in multiple contradictory states at once.",
        },
        {
          icon: ShieldCheck,
          title: "Ownership and handoff rules",
          body: "Who owns a lead when it enters? Who owns it after it books, replies, no-shows, or stalls? If staff still manage that from memory, Slack, or spreadsheets, the account is not operationally trustworthy yet.",
        },
      ],
    },
    {
      type: "table",
      title: "What the audit usually points to",
      subtitle:
        "A useful audit should lead to one of three honest outcomes instead of vague 'we can fix anything' language:",
      headers: ["Bounded cleanup", "Rebuild inside GoHighLevel", "Different stack / do not force GHL"],
      rows: [
        {
          label: "Usually the right answer when...",
          values: [
            "One or two revenue-critical workflows are salvageable and the basic operating model is still right",
            "Stages, tags, automations, and ownership are too tangled to trust, but GHL is still strategically the right tool",
            "The workflow needs data structure, flexibility, or handoff logic GHL will keep handling awkwardly",
          ],
        },
        {
          label: "Audit signs",
          values: [
            "Duplicate triggers, stale campaigns, wrong stage movement, but a clear path still exists underneath the mess",
            "Nobody can explain why automation fires in its current order and every fix creates a new edge case",
            "The team keeps working outside GHL because the workflow model itself does not match how the business operates",
          ],
        },
        {
          label: "Goal",
          values: [
            "Stabilize the smallest trustworthy workflow fast",
            "Reset the account with cleaner naming, ownership, and stop conditions",
            "Stop paying cleanup costs on the wrong platform and redesign the workflow more honestly",
          ],
        },
        {
          label: "Big mistake",
          values: [
            "Trying to preserve every old artifact just because it already exists",
            "Paying for a full rebuild when a narrow rescue would have solved the leak",
            "Pretending every CRM problem is just a cleanup problem when the platform fit is wrong",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this checklist is useful — and when it is not",
      subtitle:
        "This page is for owners with a live, messy GoHighLevel account who want a clearer diagnosis before paying for more help:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your GHL account already exists and nobody fully trusts what it says",
            "You inherited the account from a freelancer, agency, employee, or old template-heavy setup",
            "You want to know whether cleanup is enough before paying for a rescue project",
            "Leads, bookings, or follow-up are important enough that one broken workflow is already expensive",
            "You are willing to hear that the right answer may be cleanup, rebuild, or leaving GHL for this workflow",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are choosing a CRM for the first time and do not even have a live account yet",
            "The account is basically fine and you mainly need one new workflow built",
            "You want a fake checklist that avoids making an actual cleanup-vs-rebuild decision",
            "Nobody on the team can own the workflow even after the audit identifies what is wrong",
            "The problem is broader sales-process chaos, not the CRM layer itself",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The five red flags that should change your decision quickly",
      subtitle:
        "These usually matter more than how polished the account looks on screen:",
      items: [
        {
          icon: AlertTriangle,
          title: "People keep working outside GoHighLevel",
          body: "If the team tracks real lead status somewhere else because the CRM cannot be trusted, the account has an adoption problem created by workflow trust, not just by missing training.",
        },
        {
          icon: Sparkles,
          title: "Automations still fire after the customer already booked or replied",
          body: "That usually means stop conditions, suppression logic, or ownership rules are broken. It is one of the clearest signs the account needs an audit before any new workflow goes live.",
        },
        {
          icon: Wrench,
          title: "Nobody knows which workflows are safe to delete",
          body: "When dead snapshots, copied campaigns, and old trigger paths stay in place forever because the team is afraid to touch them, cleanup scope is usually real and urgent.",
        },
        {
          icon: Scale,
          title: "The invoice decision is smaller than the owner-time decision",
          body: "A cheap cleanup that keeps dragging the owner into trigger triage is often more expensive than it looks. The audit should count hidden checking, fixing, and apology time — not just vendor hours.",
        },
      ],
    },
    {
      type: "prose",
      title: "How this page stays distinct from the other GoHighLevel recovery pages",
      subtitle:
        "The live cluster already covers setup help, pricing, cleanup service, and cleanup vs. rebuild. This page sits one step earlier:",
      blocks: [
        {
          heading: "This page is about diagnosis before purchase",
          body: "The cleanup-service page explains what rescue help includes. The cleanup-vs-rebuild page explains how to choose between two recovery paths. This audit checklist page exists to help an owner inspect the account first so that either of those decisions can be made with less guesswork.",
        },
        {
          heading: "A checklist is only useful if it leads to a decision",
          body: "The right output is not 'your account is messy.' The right output is: bounded cleanup now, rebuild now, or stop forcing GoHighLevel into this workflow. If the checklist does not get you closer to that answer, it is just content fluff.",
        },
        {
          heading: "This page should make cleanup scope smaller, not larger",
          body: "A disciplined audit narrows the project to the workflow that leaks revenue first. It should reduce vague implementation sprawl, not create another open-ended list of things someone might eventually fix.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone GoHighLevel audit case study here. The support comes from the live GoHighLevel cluster plus adjacent CRM and routing proof already published on the site:",
      studies: [
        {
          industry: "Existing GoHighLevel cluster",
          headline: "The setup, pricing, cleanup, and rebuild pages already define the surrounding buyer decisions clearly",
          body: "That cluster proves there is a real commercially distinct cleanup/recovery stage. This audit page extracts the exact pre-purchase diagnostic query hiding inside that cluster: what should I inspect before I pay for cleanup help?",
          link: "/gohighlevel-account-cleanup-service",
        },
        {
          industry: "CRM workflow proof",
          headline: "The WheelsFeels CRM case study shows why state truth, ownership, and follow-up discipline matter more than dashboard cosmetics",
          body: "That project is direct adjacent proof for the same operational issues a GoHighLevel audit should surface: messy stage logic, weak handoff, and follow-up that becomes manual when the system is not trustworthy.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Workflow trust proof",
          headline: "Paris Cafe proves the business value of a workflow the team can trust live",
          body: "Different stack, same operational lesson. When inquiries are captured, routed, and handed off cleanly, the business can rely on the system. When the workflow layer is confusing, manual workarounds come back quickly.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "GoHighLevel account cleanup service", href: "/gohighlevel-account-cleanup-service" },
        { label: "GoHighLevel account cleanup vs. rebuild", href: "/gohighlevel-account-cleanup-vs-rebuild" },
        { label: "GoHighLevel automation setup help", href: "/gohighlevel-automation-setup" },
        { label: "E-commerce CRM case study", href: "/case-studies/ecommerce-crm-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How do I audit a messy GoHighLevel account before paying for cleanup?",
      answer:
        "Start with the live revenue path: lead intake, stage movement, booking handoff, stop conditions, duplicate contacts, and who owns the record when it changes state. If nobody can explain those cleanly, the account needs a real recovery decision before more automation gets added.",
    },
    {
      question: "What should I check first in a GoHighLevel account audit?",
      answer:
        "Check whether the pipeline matches real operations, whether automations fire in the right order, whether duplicate contacts or stale opportunities are distorting reporting, and whether the team still trusts the CRM enough to work inside it day to day.",
    },
    {
      question: "How do I know if GoHighLevel cleanup is enough or if I need a rebuild?",
      answer:
        "If one or two core workflows are salvageable and the account structure is mostly right, cleanup is often enough. If nobody can explain the logic cleanly, the pipeline is detached from reality, and every fix creates a new edge case, rebuild is usually safer.",
    },
    {
      question: "Can an audit show that GoHighLevel is the wrong stack for this workflow?",
      answer:
        "Yes. A real audit should be willing to conclude that the workflow needs a different CRM shape or a custom layer instead of more cleanup hours inside GHL. That is one reason to audit first instead of assuming the platform has to stay in place.",
    },
    {
      question: "How is this different from the cleanup-service page already on the site?",
      answer:
        "The cleanup-service page explains what rescue help includes. This page helps you inspect the account before buying that help. It is the diagnostic layer that should make cleanup, rebuild, or platform-fit decisions more honest.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners trying to diagnose a messy GoHighLevel account before paying for more implementation work",
  ctaHeading: "Need a second opinion on what is actually broken in your GoHighLevel account?",
  ctaText:
    "Book a 30-minute call. We will look at the live workflow first, identify whether the account needs bounded cleanup, a rebuild, or a different stack, and help you avoid paying for the wrong rescue project.",
  ctaSubtext:
    "Useful if the account already exists and the real problem is diagnosis, trust, and scope — not generic first-time setup advice.",
  relatedLinks: [
    { label: "GoHighLevel account cleanup service", href: "/gohighlevel-account-cleanup-service" },
    { label: "GoHighLevel account cleanup vs. rebuild", href: "/gohighlevel-account-cleanup-vs-rebuild" },
    { label: "GoHighLevel setup cost for small business", href: "/gohighlevel-setup-cost-small-business" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
