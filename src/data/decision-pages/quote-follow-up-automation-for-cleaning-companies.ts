import {
  Home,
  ClipboardCheck,
  MessageSquare,
  Clock,
  BadgeDollarSign,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileText,
  Users,
  RefreshCcw,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "quote-follow-up-automation-for-cleaning-companies",
  metaTitle:
    "Quote Follow-Up Automation for Cleaning Companies — Recover More Open Estimates | Dmytro AI",
  metaDescription:
    "How cleaning companies automate quote follow-up without sounding robotic. Timed reminders, objection-aware messaging, owner handoff, and practical ways to recover sent estimates before the job goes cold.",
  badgeText: "Cleaning Workflow",
  badgeIcon: Home,
  h1: "Quote Follow-Up Automation for Cleaning Companies",
  heroIntro:
    "A homeowner asks for a quote, you send the estimate, and then the job disappears. That leak is common in cleaning companies because the office is juggling inbound calls, schedule changes, recurring clients, and crews already out in the field. The quote went out, but nobody followed up at the right time with the right next step. Quote follow-up automation for cleaning companies fixes that narrow stage. It starts after the estimate is sent, keeps the opportunity alive with practical reminders and low-friction reply paths, and routes serious buying intent back to a human before another solid quote quietly dies.",
  heroSubtext:
    "Below: what cleaning-company quote follow-up automation actually handles, how it stays distinct from the broader cleaning page and the generic quote-follow-up guide, what guardrails matter, and what adjacent proof supports the page without pretending there is already a published cleaning-specific quote-recovery case study.",
  sections: [
    {
      type: "cards",
      title: "What cleaning-company quote follow-up automation actually handles",
      subtitle:
        "This page is specifically about opportunities that already reached the estimate stage but have not booked yet.",
      items: [
        {
          icon: Clock,
          title: "Timed follow-up after the quote goes out",
          body: "Once the estimate is marked sent, the workflow can trigger touches at practical intervals like day 1, day 3, and day 7. In cleaning, that matters because homeowners often request multiple quotes and the company that stays visible tends to win.",
        },
        {
          icon: MessageSquare,
          title: "Messages that match how cleaning buyers actually decide",
          body: "Good follow-up is not a vague 'just checking in.' It can reference the service type, whether the request was for recurring cleanings or a one-time deep clean, whether timing is the blocker, and what the next simple step should be.",
        },
        {
          icon: BadgeDollarSign,
          title: "Objection-aware nudges around price, scope, and timing",
          body: "Cleaning quotes often stall for predictable reasons: comparing providers, waiting until after payday, uncertainty about frequency, or deciding whether to start with a one-time clean. Automation can handle those common hesitation points while still routing real negotiation to a human.",
        },
        {
          icon: ArrowUpRight,
          title: "Owner or office handoff when intent returns",
          body: "If the prospect replies, asks a real question, or wants to move forward, the right human gets the conversation with the quote context attached. That keeps people focused on live opportunities instead of manually chasing every stale estimate from scratch.",
        },
        {
          icon: FileText,
          title: "Open-quote visibility and stale-estimate reporting",
          body: "Owners can finally see how many cleaning estimates are sitting open, how old they are, which channel gets replies, and whether quotes are dying because nobody followed up consistently.",
        },
        {
          icon: RefreshCcw,
          title: "Simple route back into booking",
          body: "The workflow can point prospects toward the next clean step: reply with a question, confirm they want to book, choose a time window, or request a callback. The goal is to reduce decision friction, not create a longer admin chain.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct from the rest of the cleaning-company cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for cleaning companies",
          values: [
            "Owners evaluating the broader cleaning-company operating layer",
            "Explains the full system across lead follow-up, missed calls, quote follow-up, recurring schedules, reactivation, and review automation",
          ],
        },
        {
          label: "What to automate first for cleaning companies",
          values: [
            "Owners deciding which one workflow deserves to be the first build",
            "Helps choose between instant lead follow-up, missed-call recovery, quote follow-up, and recurring-client reactivation before anything broader",
          ],
        },
        {
          label: "Quote follow-up automation for cleaning companies",
          values: [
            "Companies that already respond and quote reliably but let too many estimates go cold afterward",
            "Focuses tightly on sent-estimate recovery: reminder timing, objection-aware messaging, owner handoff, and stale-quote visibility",
          ],
        },
        {
          label: "Quote follow-up automation",
          values: [
            "Service businesses that want the broad estimate-recovery pattern without cleaning-specific detail",
            "Explains generic quote-follow-up mechanics without the cleaning realities of recurring-service decisions, owner-in-the-field follow-up gaps, and one-time vs recurring pricing hesitation",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your cleaning company?",
      subtitle:
        "Best fit when quotes are already being sent, but too many jobs still die after the estimate goes out.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You send cleaning quotes every week and a meaningful share of them go cold",
            "The office or owner is too busy to follow up consistently once the estimate is out",
            "Prospects are clearly comparing multiple providers and the company that stays visible usually wins",
            "Your average recurring client value or deep-clean ticket size is high enough that one recovered job matters",
            "You have a workable CRM, spreadsheet, or quoting process with a clear 'quote sent' stage",
            "You want a narrower build before trying to automate every part of the office at once",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger problem is still slow first response before the estimate exists",
            "You already close most quotes with disciplined manual follow-up",
            "You send very few estimates each month",
            "There is no reliable way to tell when a quote was actually sent",
            "You want automation negotiating custom scope, edge-case pricing, or service recovery without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for cleaning-company quote follow-up",
      subtitle:
        "The system should create disciplined follow-through, not more noise or more awkward customer conversations.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate before the quote stage is clean",
          body: "If one person texts pricing, another sends PDF quotes manually, and nobody updates status consistently, the workflow has nothing stable to trigger from. Tighten the estimate stage first, then automate.",
        },
        {
          icon: FileText,
          title: "Each touch needs one clear next step",
          body: "The best follow-up tells the prospect exactly what to do next: reply with a question, confirm they want to move ahead, choose a schedule window, or request a callback. Long generic check-ins do not close cleaning jobs.",
        },
        {
          icon: Users,
          title: "Know when a human should step in",
          body: "The automation should escalate when the prospect wants to adjust scope, discuss frequency, ask about trust and access concerns, or negotiate timing. It is there to keep the quote active, not to replace the person closing the work.",
        },
        {
          icon: ClipboardCheck,
          title: "Keep reminders honest and useful",
          body: "A cleaning prospect can tell the difference between a helpful reminder and a spammy drip campaign. Follow-up should feel like a practical nudge, not pressure for pressure's sake.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical cleaning-company quote-recovery workflow usually works",
      subtitle:
        "The strongest version is simple: trigger from the estimate stage, follow up while the job is still warm, and route humans when intent comes back.",
      blocks: [
        {
          heading: "The cleaning quote is marked sent",
          body: "That event becomes the workflow trigger. Whether the quote lives in Jobber, Housecall Pro, GoHighLevel, a spreadsheet, or a simple CRM, the key is one reliable point where the system knows pricing is out and the prospect is waiting to decide.",
        },
        {
          heading: "The first follow-up lands before the prospect forgets the request",
          body: "A short, professional touch lands while the quote is still fresh. This is where many cleaning companies get the biggest lift because manual follow-up usually happens too late or only when someone remembers between jobs and schedule changes.",
        },
        {
          heading: "Later touches handle predictable hesitation",
          body: "If there is still no response, later messages can address familiar stall points: comparing providers, not sure about recurring frequency, waiting for a better date, or wanting to start with a one-time clean first. Each message should reduce friction instead of repeating the same ask.",
        },
        {
          heading: "High-intent replies go to the right human fast",
          body: "Once the prospect re-engages, the owner or office manager sees the conversation with the quote context attached. That means the human steps in when the opportunity becomes live again instead of wasting time manually chasing every stale estimate.",
        },
        {
          heading: "The company learns why quotes are really stalling",
          body: "Over time you can see whether estimates are dying because follow-up is too slow, the messaging stops too early, certain lead sources are weaker, or the team is simply overloaded. That makes the workflow useful as both a revenue-recovery system and an operational diagnosis tool.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is not a published cleaning-company quote-recovery case study on the site yet. The honest proof frame is the broader cleaning-company page, the generic quote-follow-up guide, and the published CRM case study that proves the same stage-tracking and follow-up discipline.",
      studies: [
        {
          industry: "Cleaning parent page",
          headline: "The broader cleaning-company page already identifies quote follow-up as one of the clearest revenue leaks",
          body: "The parent cleaning guide explains why jobs get lost across slow lead response, missed calls, stale quotes, recurring-client churn, and review inconsistency. This child page narrows that down to one workflow stage: recovering sent cleaning estimates before they quietly die.",
          link: "/ai-automation-for-cleaning-companies",
        },
        {
          industry: "Generic quote-recovery workflow",
          headline: "The live quote-follow-up guide already proves the same sent-estimate recovery pattern across service businesses",
          body: "That page covers reminder timing, objection-aware follow-up, and human handoff in a broader service-business context. This cleaning child keeps the same mechanics but adds cleaning realities like recurring vs one-time bookings and owner-in-the-field follow-through gaps.",
          link: "/quote-follow-up-automation",
        },
        {
          industry: "Published CRM lifecycle proof",
          headline: "The e-commerce CRM case study proves the visibility and follow-up discipline this workflow depends on",
          body: "That project is not a cleaning-company build, but it is direct proof that stale opportunities, weak ownership, and inconsistent follow-up destroy recoverable value. The same workflow logic supports sent-estimate recovery for cleaning companies.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for cleaning companies", href: "/ai-automation-for-cleaning-companies" },
        { label: "What to automate first for cleaning companies", href: "/what-to-automate-first-for-cleaning-companies" },
        { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader cleaning-company page?",
      answer:
        "The broader cleaning page covers the full operating system: lead follow-up, missed calls, quote follow-up, recurring schedules, reactivation, and reviews. This page is narrower. It focuses specifically on what happens after the cleaning estimate is sent and before the prospect books or disappears.",
    },
    {
      question: "How is this different from the generic quote-follow-up page?",
      answer:
        "The generic quote-follow-up page explains the broad estimate-recovery pattern for service businesses. This cleaning page adds the details that matter for cleaning companies: recurring vs one-time buying decisions, owner-in-the-field follow-up gaps, and the specific hesitation that shows up after a cleaning quote is delivered.",
    },
    {
      question: "What does a focused cleaning-company quote-follow-up build usually cost?",
      answer:
        "A focused quote-recovery workflow usually lands around $1.5K-$3K depending on your current systems, message channels, escalation rules, and whether the quote-stage trigger is already clean. Broader cleaning-company automation builds cost more when they also include lead response, missed calls, reactivation, and review automation.",
    },
    {
      question: "Can this work with Jobber, Housecall Pro, GoHighLevel, or a simple spreadsheet workflow?",
      answer:
        "Usually yes, as long as there is a reliable way to detect when a quote was sent and who should own the follow-up. In many cases the existing quoting or CRM layer stays in place while automation improves reminder timing, visibility, and handoff.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is recovering cleaning estimates that would otherwise fade out because nobody stayed in touch at the right time. When the client value is meaningful, one additional booked job or recurring client can cover the build quickly. The secondary win is freeing the owner or office manager from repetitive chase work.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating quote follow-up for cleaning companies",
  ctaHeading: "Want fewer cleaning quotes dying after the estimate is sent?",
  ctaText:
    "Book a 30-minute call. We will look at how your company handles sent estimates today, where cleaning quotes are going cold, and whether a focused quote-follow-up workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No inflated close-rate promises. Just a practical recommendation based on your quote process, current follow-up discipline, and where jobs are actually leaking.",
  relatedLinks: [
    { label: "AI automation for cleaning companies", href: "/ai-automation-for-cleaning-companies" },
    { label: "What to automate first for cleaning companies", href: "/what-to-automate-first-for-cleaning-companies" },
    { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
