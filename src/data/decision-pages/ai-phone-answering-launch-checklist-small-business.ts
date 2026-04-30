import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Clock,
  Phone,
  Route,
  Settings,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-phone-answering-launch-checklist-small-business",
  metaTitle:
    "AI Phone Answering Launch Checklist for Small Business — What to Verify Before Go-Live | Dmytro AI",
  metaDescription:
    "Practical AI phone-answering launch checklist for small businesses. What to verify before go-live: greeting logic, transfer rules, booking constraints, caller escalation, CRM handoff, and ugly-call testing.",
  badgeText: "Launch Checklist",
  badgeIcon: ClipboardList,
  h1: "AI Phone Answering Launch Checklist for Small Business",
  heroIntro:
    "AI phone answering should not go live just because the demo sounded smooth. Before a small business turns live call coverage on, the real operating layer needs to be ready: what the caller is trying to do, when the AI should answer versus transfer, what happens when booking logic fails, how urgent cases get escalated, and where the call outcome lands after the conversation ends. If those checks are still vague, launch week usually turns into manual rescue work and staff stop trusting the system fast.",
  heroSubtext:
    "Below: the pre-launch checklist that matters most, what to test before you put the number live, when this page is useful, and how this checklist stays distinct from the broader phone-answering setup, cost, ROI, and DIY pages already live on the site.",
  sections: [
    {
      type: "cards",
      title: "What to verify before AI phone answering goes live",
      subtitle:
        "This is the short list that decides whether launch week feels trustworthy or chaotic:",
      items: [
        {
          icon: Phone,
          title: "The first call objective is explicit",
          body: "Know the exact job of the first live workflow. Is the AI covering after-hours calls, booking routine appointments, screening new callers, routing existing customers, or simply capturing cleaner message details? If the launch scope tries to do everything at once, it usually sounds capable while still missing the real business outcome.",
        },
        {
          icon: Route,
          title: "Transfer and escalation rules are written down",
          body: "The AI should know when to transfer, when to offer a callback, when to take a message, and when to stop pretending it can help. Urgent callers, billing complaints, angry callers, service-area mismatches, and high-value opportunities all need explicit handoff logic before launch.",
        },
        {
          icon: Settings,
          title: "Booking and service constraints are actually configured",
          body: "If the system books appointments, it needs real business rules: service areas, appointment types, buffers, team availability, office hours, and what to do when the calendar cannot support the request. A live phone workflow with weak booking rules creates more cleanup than a missed call ever did.",
        },
        {
          icon: Workflow,
          title: "CRM, notifications, and next-step ownership are clean",
          body: "A good launch does not end with the AI answering the call. It ends with the right contact updated, the right summary delivered, the right booking outcome logged, and a clear owner for the next action. If the team still has to reconstruct what happened manually, the workflow is not actually ready.",
        },
      ],
    },
    {
      type: "table",
      title: "The pre-launch checks that matter most",
      subtitle:
        "If you only test the happy-path demo call, you miss the things that usually break trust first:",
      headers: ["Checklist item", "What to verify", "Why it matters"],
      rows: [
        {
          label: "Greeting and first question",
          values: [
            "The first 20-30 seconds sound clear, on-brand, and tied to the exact reason this workflow exists",
            "A weak opening wastes caller patience fast and usually hides the fact that the phone workflow is still too broad",
          ],
        },
        {
          label: "Transfer behavior",
          values: [
            "Live transfer, callback fallback, after-hours routing, wrong-number handling, and urgent-case escalation all work intentionally",
            "This is usually where staff trust is won or lost during the first live week",
          ],
        },
        {
          label: "Booking and availability logic",
          values: [
            "Appointment types, buffers, calendar limits, office-hours rules, and service-area constraints have been tested with real scenarios",
            "If booking logic is fuzzy, the AI can create the illusion of coverage while actually creating a second scheduling mess",
          ],
        },
        {
          label: "Ugly-call testing",
          values: [
            "Interruptions, background noise, frustrated callers, vague answers, reschedule requests, and off-script questions have been tested",
            "Most bad launches fail here, not on the polished demo path",
          ],
        },
        {
          label: "Downstream handoff",
          values: [
            "The CRM record, summary, tags, notification, booking result, and next-step owner all land cleanly after the call",
            "If the office still has to listen back and guess what happened, the AI layer did not create real leverage",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is useful — and when it is not",
      subtitle:
        "This checklist is useful for owners who are already close to launch and want to reduce avoidable rollout risk:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are about to launch AI phone answering for inbound call coverage, routine booking, or front-desk overflow",
            "The workflow touches real revenue, after-hours demand, or customer experience — not just an internal experiment",
            "You want a narrower safer first release instead of a bigger phone workflow that looks impressive but breaks under pressure",
            "You already have a rough setup plan, and now the real question is whether it is actually ready to go live",
            "A few avoidable bad calls would be enough to make the team stop trusting the system",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether live AI phone answering is even the right layer versus voicemail or missed-call text-back",
            "Your main question is implementation help, pricing, ROI, or DIY vs hiring help rather than launch readiness",
            "Every call requires deep human expertise from the first minute, so release readiness is not the real bottleneck",
            "You do not yet have basic transfer ownership, booking rules, or service-area constraints defined",
            "You are looking for a generic checklist that avoids making a real scope decision",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to use a launch checklist without turning it into busywork",
      subtitle:
        "The point is not to create another internal document. The point is to make the first live workflow safer and easier to trust:",
      items: [
        {
          icon: Wrench,
          title: "Launch one narrow phone workflow first",
          body: "One call type, one booking path, one transfer path, one CRM destination, and one clear definition of success is usually enough for a first release. The checklist should make the launch smaller and clearer, not push you toward a more ambitious scope.",
        },
        {
          icon: AlertTriangle,
          title: "Test ugly calls, not just polite scripted ones",
          body: "Run noisy calls, interruptions, irritated callers, service-area mismatches, booking conflicts, and edge cases where the AI should stop or escalate. If the system only passes polished tests, it is not ready for real callers.",
        },
        {
          icon: ShieldCheck,
          title: "Write down what the AI should never do",
          body: "Do not let the system improvise around urgent requests, pricing promises, policy questions, complaint handling, or anything that should go straight to a human. Hard boundaries protect caller experience and staff trust.",
        },
        {
          icon: Clock,
          title: "Keep the first success metric operational",
          body: "Start with a concrete launch target: fewer missed after-hours calls, faster routine booking, cleaner message capture, or fewer front-desk interruptions. If the launch target is vague, the checklist will stay vague too.",
        },
        {
          icon: Users,
          title: "Decide who owns changes after go-live",
          body: "Someone needs to own greeting updates, routing changes, calendar rules, escalation logic, and CRM handoff fixes after launch. A phone workflow without clear ownership quietly decays into something nobody wants to touch.",
        },
      ],
    },
    {
      type: "prose",
      title: "How this page stays distinct from the other phone-answering setup pages",
      subtitle:
        "The live cluster already covers setup help, cost, ROI, and DIY. This page sits one step later in the decision chain:",
      blocks: [
        {
          heading: "This page is about release readiness, not project scope",
          body: "The setup-help page explains what a proper implementation should include and when expert help is worth paying for. This checklist page assumes you are already close to that stage and need to verify whether the workflow is actually safe enough to go live now.",
        },
        {
          heading: "This page is narrower than the cost and ROI pages",
          body: "The cost and ROI pages help you decide whether the economics work. This checklist page helps you avoid turning a justified project into a messy launch because the transfer, booking, or handoff layer was never fully verified.",
        },
        {
          heading: "A checklist only matters if it changes launch behavior",
          body: "If this page does not lead to a narrower rollout, better ugly-call testing, clearer handoff, or a delayed launch until the workflow is safer, it is just content clutter. The real output should be a more trustworthy first release, not more AI theater.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone phone-answering launch-checklist case study here. The support comes from the live phone-answering cluster plus adjacent call-handling and CRM proof already published on the site:",
      studies: [
        {
          industry: "Existing phone-answering setup cluster",
          headline: "The live phone-answering setup, cost, ROI, and DIY pages already define the surrounding buyer decisions clearly",
          body: "That cluster makes the remaining exact tracked query viable: what should be configured before launching AI phone answering? This page isolates the release-readiness layer without rehashing broader implementation, pricing, or buy-vs-build advice.",
          link: "/ai-phone-answering-setup-small-business",
        },
        {
          industry: "Phone workflow proof",
          headline: "Paris Cafe shows why live phone coverage only works when fallback behavior and call handling are disciplined before demand is routed live",
          body: "Different exact use case, same operational lesson. The restaurant voice-agent case study worked because the call flow, routing, and downstream handoff were strong enough to protect after-hours reservation demand instead of confusing callers.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "CRM handoff proof",
          headline: "The WheelsFeels CRM case study shows why captured conversations still need clean state truth and next-step ownership behind them",
          body: "That project is adjacent proof for the back half of the release checklist: summaries, routing, logging, follow-up ownership, and why the workflow is not truly live if the office still has to reconstruct everything manually.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "AI phone answering setup for small business", href: "/ai-phone-answering-setup-small-business" },
        { label: "AI phone answering ROI for small business", href: "/ai-phone-answering-roi-small-business" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should be configured before launching AI phone answering?",
      answer:
        "At minimum: a clear call objective, transfer and escalation rules, office-hours logic, booking constraints, CRM logging, and clear ownership for updates after launch. If those pieces are vague, the workflow is not actually ready even if the demo sounds polished.",
    },
    {
      question: "What should I test before AI phone answering goes live?",
      answer:
        "Test interruptions, background noise, angry callers, wrong numbers, service-area mismatches, transfer failures, booking conflicts, and any edge case where the AI should stop or escalate. The real test is whether the workflow stays trustworthy when the call goes off script.",
    },
    {
      question: "How is this different from the AI phone answering setup-help page?",
      answer:
        "The setup-help page explains what a solid implementation project should include and when expert help is worth paying for. This page is narrower: the go-live checklist that helps you decide whether the workflow is actually safe enough to launch now.",
    },
    {
      question: "How is this different from the cost or ROI pages?",
      answer:
        "The cost and ROI pages help you decide whether the economics justify the build. This page assumes you are already near launch and need to verify whether the workflow is operationally ready, not just financially justified.",
    },
    {
      question: "When should I delay launch instead of forcing AI phone answering live?",
      answer:
        "Delay launch when transfer boundaries are still fuzzy, booking rules are still changing, downstream CRM handoff is weak, or nobody owns updates after go-live. A slightly later clean launch is usually cheaper than a fast launch the team stops trusting after a few bad calls.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners who are already close to launching AI phone answering and want a safer release instead of an avoidable cleanup project a few weeks later",
  ctaHeading: "Need a second opinion before you turn AI phone answering live?",
  ctaText:
    "Book a 30-minute call. We will review the live-call objective, transfer rules, booking logic, ugly-call test cases, and CRM handoff so you can decide whether the workflow is ready now, needs a narrower first launch, or should wait until the release risk is lower.",
  ctaSubtext:
    "Useful if you are already close to go-live and want to reduce the chance that launch week turns into manual rescue work.",
  relatedLinks: [
    { label: "AI phone answering setup help", href: "/ai-phone-answering-setup-small-business" },
    { label: "AI phone answering setup mistakes", href: "/ai-phone-answering-setup-mistakes-small-business" },
    { label: "AI phone answering cost", href: "/ai-phone-answering-cost-small-business" },
    { label: "AI phone answering ROI", href: "/ai-phone-answering-roi-small-business" },
    { label: "AI phone answering setup vs. DIY", href: "/ai-phone-answering-setup-vs-diy-small-business" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
