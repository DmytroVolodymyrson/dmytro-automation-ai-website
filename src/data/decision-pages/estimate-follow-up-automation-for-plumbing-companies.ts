import {
  ClipboardCheck,
  Wrench,
  MessageSquare,
  BadgeDollarSign,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileText,
  ShieldAlert,
  Users,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "estimate-follow-up-automation-for-plumbing-companies",
  metaTitle:
    "Estimate Follow-Up Automation for Plumbing Companies — Recover More Open Plumbing Quotes | Dmytro AI",
  metaDescription:
    "Estimate follow-up automation for plumbing companies. Recover open water-heater, drain, sewer, repipe, and service quotes with timed reminders, objection-aware messaging, office handoff, and clearer quote-stage visibility.",
  badgeText: "Plumbing Workflow",
  badgeIcon: ClipboardCheck,
  h1: "Estimate Follow-Up Automation for Plumbing Companies",
  heroIntro:
    "The service visit happened. The water-heater replacement, drain repair, sewer-line job, repipe, leak repair, or larger plumbing estimate went out. Then the quote just sits there. In plumbing, that silence is expensive. Some homeowners are comparing bids. Some are waiting on a landlord, spouse, or property manager. Some are unsure about timing, budget, or whether the issue feels urgent enough to move now. Some simply move forward with the plumber who stayed in touch first. Estimate follow-up automation fixes that narrow stage. It starts after the quote is sent, keeps the opportunity alive with practical reminders and next-step prompts, and surfaces real buying intent before another plumbing job dies quietly after pricing is already out.",
  heroSubtext:
    "Below: what plumbing estimate follow-up automation actually handles, how it stays distinct from the broader plumbing parent page and the first-project scoping page, what guardrails matter, and what adjacent proof supports the page without pretending there is already a published plumbing estimate-recovery case study.",
  sections: [
    {
      type: "cards",
      title: "What plumbing estimate follow-up automation actually handles",
      subtitle:
        "This page is specifically about opportunities that already reached the estimate stage but have not turned into booked work yet.",
      items: [
        {
          icon: Wrench,
          title: "Timed follow-up after the plumbing quote goes out",
          body: "Once the estimate is marked sent, the workflow can trigger touches at practical intervals like day 2, day 5, and day 10. That matters because plumbing quotes often die from delay, not a clear no. The plumber who stays visible after pricing usually keeps more good jobs alive.",
        },
        {
          icon: MessageSquare,
          title: "Messages that match the real plumbing decision",
          body: "Good follow-up is not a generic 'just checking in.' The sequence can recap scope, ask whether timing changed, confirm whether the quote is still under review, or prompt the next step around access, scheduling, financing, or budget questions. The goal is to reduce friction, not to nag.",
        },
        {
          icon: BadgeDollarSign,
          title: "Objection-aware nudges around price, timing, and scope hesitation",
          body: "Plumbing quotes often stall for predictable reasons: comparing bids, waiting on approval, uncertainty about whether the job should happen now, or questions about what is and is not included. Automation can address those common hesitation points with approved messaging while still routing negotiation and custom scope changes to a human.",
        },
        {
          icon: ArrowUpRight,
          title: "Office handoff when the prospect re-engages",
          body: "If the customer replies, clicks to review, asks a real question, or confirms timing, the office manager or estimator gets the conversation with the estimate context attached. That keeps humans focused on live opportunities instead of manually chasing every quiet quote from scratch.",
        },
        {
          icon: FileText,
          title: "Open-estimate visibility and stale-quote reporting",
          body: "Owners can see how many quotes are sitting open, how old they are, which channels get replies, and whether estimates are being left untouched too long. That visibility often matters as much as the messages because it shows where the quoting process is actually leaking.",
        },
        {
          icon: ShieldAlert,
          title: "Urgency tied to real plumbing-service timing",
          body: "Plumbing work often has legitimate urgency: active leaks, worsening drain issues, replacement timing, tenant disruptions, or schedule openings. Follow-up can reflect those realities without fake countdown tactics. The point is to help the customer decide while the quote is still commercially useful.",
        },
      ],
    },
    {
      type: "table",
      title: "Plumbing estimate follow-up vs. broader plumbing automation vs. first-project scoping",
      subtitle:
        "These pages can coexist when the workflow stage stays clearly bounded:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for plumbing companies",
          values: [
            "Plumbing companies evaluating the full operating picture",
            "Covers the broader system: missed calls, lead response, scheduling, estimate follow-up, review requests, and heavier after-hours phone coverage",
          ],
        },
        {
          label: "What to automate first for plumbing companies",
          values: [
            "Owners deciding which single plumbing workflow deserves to be the first project",
            "Helps choose between missed-call recovery, lead follow-up, scheduling, estimate follow-up, and heavier phone coverage before a bigger rollout",
          ],
        },
        {
          label: "Estimate follow-up automation for plumbing companies",
          values: [
            "Companies that already quote consistently but let too many estimates go quiet afterward",
            "Focuses tightly on sent-quote recovery: reminder timing, objection-aware messaging, office handoff, and open-estimate visibility once pricing is already out",
          ],
        },
        {
          label: "Quote follow-up automation",
          values: [
            "Service businesses that want the broad estimate-recovery pattern without plumbing-specific detail",
            "Explains the overall follow-up logic without plumbing realities like active-leak urgency, property-access friction, replacement timing, and office ownership after the visit",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your plumbing company?",
      subtitle:
        "Best fit when your team already gets estimates out, but too many of them die in silence.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You send estimates every week and a meaningful share of them go cold",
            "Your office manager or estimator does not have time to follow up consistently",
            "You lose work to competitors who stay in front of the customer longer after pricing",
            "Your average job value is high enough that one recovered quote matters",
            "You already have a workable CRM, spreadsheet, or job-management process with a clear 'estimate sent' stage",
            "You want a narrower build before tackling a broader plumbing automation rollout",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger problem is still missed calls or slow first response before the estimate exists",
            "You already close most estimates with disciplined manual follow-up",
            "You send very few estimates each month",
            "Your team has no clean way to tell when a plumbing quote was actually sent",
            "You want automation negotiating custom scope, emergency triage, or field exceptions without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for plumbing estimate-recovery workflows",
      subtitle:
        "The system should create cleaner follow-up, not vague spam or more office confusion.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate before the estimate stage is real",
          body: "If one person says 'quote sent,' another texts pricing manually with no stage update, and a third keeps everything in a private inbox, the workflow has nothing stable to trigger from. Tighten the estimate stage first, then automate.",
        },
        {
          icon: FileText,
          title: "Every touch should move the customer toward one next step",
          body: "The strongest follow-up asks for something concrete: reply with a question, confirm timing, review options, approve the quote, or book the next step. Long generic check-ins do not recover plumbing jobs.",
        },
        {
          icon: Users,
          title: "Know when the office should take over",
          body: "The automation should escalate when the customer asks for scope revisions, financing details, scheduling constraints, access coordination, or property-specific questions. It is there to keep the quote alive, not to replace the person actually closing the work.",
        },
        {
          icon: ShieldAlert,
          title: "Use honest urgency, not fake scarcity",
          body: "Plumbing companies often have legitimate urgency: worsening leaks, replacement windows, tenant disruption, or schedule openings. Follow-up should reflect those real constraints. Fake countdowns usually create distrust instead of better close rates.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical plumbing estimate-recovery system usually works",
      subtitle:
        "The strongest version is simple: trigger from the estimate stage, follow up while the quote is still warm, and route humans when intent comes back.",
      blocks: [
        {
          heading: "The plumbing quote is marked sent",
          body: "That event becomes the workflow trigger. Whether the estimate lives in Jobber, Housecall Pro, GoHighLevel, a custom CRM, a spreadsheet, or another ops stack, the key is having one reliable point where the system knows the quote is out and waiting on the customer.",
        },
        {
          heading: "The first follow-up lands before the customer forgets the visit",
          body: "A short professional touch goes out while the walkthrough, diagnosis, or pricing conversation is still fresh. This is often where plumbing companies get the biggest lift, because manual follow-up usually happens too late or only after the best opportunities have already drifted toward another bid.",
        },
        {
          heading: "Later messages handle predictable hesitation",
          body: "If there is still no response, later touches can address familiar stall points: comparing bids, uncertain timing, waiting on approval, budget hesitation, or not fully understanding the next step. Each message should reduce decision friction instead of repeating the same ask.",
        },
        {
          heading: "High-intent replies go to the right human fast",
          body: "Once the prospect re-engages, the office manager or estimator sees the conversation with the quote context attached. That means the human steps in when the opportunity becomes live again instead of wasting time manually chasing every stale estimate.",
        },
        {
          heading: "Owners learn why quotes are really stalling",
          body: "Over time, you can see whether estimates are dying because follow-up is too slow, the reminders stop too early, certain job types need different timing, or the team is simply overloaded. That turns the workflow into both a revenue-recovery system and an operations diagnosis tool.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is not a published plumbing estimate-recovery case study yet. The honest proof frame is the plumbing parent page, the first-project scoping page, the broader contractor estimate-follow-up guide, and the published CRM case study that proves the same stage-tracking and reminder discipline.",
      studies: [
        {
          industry: "Plumbing parent page",
          headline: "The broader plumbing automation page already identifies estimate follow-up as one of the clearest revenue leaks",
          body: "The plumbing parent guide explains why jobs get lost across missed calls, slow lead response, estimate-stage drift, and weak post-job follow-through. This child page narrows that down to one workflow stage: recovering sent plumbing quotes before they quietly die.",
          link: "/ai-automation-for-plumbing-companies",
        },
        {
          industry: "Plumbing first-project scoping",
          headline: "The plumbing first-project page already proves estimate follow-up is a distinct buyer decision inside the plumbing cluster",
          body: "That page helps owners choose between missed-call recovery, lead follow-up, scheduling, estimate follow-up, and heavier phone coverage. This child page isolates the estimate stage once the owner already knows that is the real leak.",
          link: "/what-to-automate-first-for-plumbing-companies",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "Published CRM automation work shows the same stage visibility, automated reminders, and human handoff logic this workflow depends on",
          body: "The e-commerce CRM case study demonstrates the mechanics that matter here too: stage tracking, reminder discipline, stale-opportunity visibility, and routing high-intent replies to humans. The plumbing context is different, but the workflow logic is directly relevant.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
        { label: "What to automate first for plumbing companies", href: "/what-to-automate-first-for-plumbing-companies" },
        { label: "Estimate follow-up automation for contractors", href: "/estimate-follow-up-automation-for-contractors" },
        { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader plumbing automation page?",
      answer:
        "The broader plumbing page covers the whole operating system: missed calls, lead response, scheduling, estimate follow-up, review requests, and heavier phone coverage. This page is narrower. It focuses specifically on what happens after the plumbing quote is sent and before the customer says yes or disappears.",
    },
    {
      question: "How is this different from the first-project page for plumbing companies?",
      answer:
        "The first-project page helps an owner choose which workflow deserves attention first. This page assumes that decision is already made and goes deep on one narrower leak: recovering sent quotes that go quiet after pricing is already out.",
    },
    {
      question: "What does a focused plumbing estimate-follow-up build usually cost?",
      answer:
        "A focused estimate-recovery workflow usually lands around $1.5K-$3K depending on your current systems, message channels, escalation rules, and whether the estimate-stage trigger is already clean. Broader plumbing automation builds cost more when they also include intake, scheduling, reviews, or live phone coverage.",
    },
    {
      question: "Can this work with my current contractor software?",
      answer:
        "Usually yes, as long as there is a reliable way to detect when a plumbing quote was sent and who should own the follow-up. Jobber, Housecall Pro, GoHighLevel, spreadsheets, and custom CRM stacks can often support this directly or through a practical integration layer.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is recovering estimates that would otherwise fade out because nobody followed up in time. When your average plumbing job value is meaningful, one additional booked job per month can cover the build quickly. The secondary win is giving estimators and office staff back time by removing repetitive chase work.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating plumbing estimate follow-up",
  ctaHeading: "Want fewer plumbing quotes dying in silence?",
  ctaText:
    "Book a 30-minute call. We will look at how your team handles sent estimates today, where quotes go cold, and whether a focused estimate-recovery workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No fake close-rate promises. Just a practical recommendation based on your current quoting process, response discipline, and office workload.",
  relatedLinks: [
    { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
    { label: "What to automate first for plumbing companies", href: "/what-to-automate-first-for-plumbing-companies" },
    { label: "Estimate follow-up automation for contractors", href: "/estimate-follow-up-automation-for-contractors" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
