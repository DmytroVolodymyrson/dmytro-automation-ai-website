import {
  AlertTriangle,
  Bot,
  CheckCircle2,
  ClipboardList,
  Clock,
  DollarSign,
  Phone,
  Route,
  ShieldCheck,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-voice-agent-launch-checklist-small-business",
  metaTitle:
    "AI Voice Agent Launch Checklist for Small Business — What to Verify Before Go-Live | Dmytro AI",
  metaDescription:
    "Practical AI voice-agent launch checklist for small businesses. What to verify before go-live: call objective, transfer rules, fallback handling, CRM handoff, ugly-call testing, and ownership after launch.",
  badgeText: "Launch Checklist",
  badgeIcon: ClipboardList,
  h1: "AI Voice Agent Launch Checklist for Small Business",
  heroIntro:
    "A voice agent should not go live just because the demo sounds good. Before launch, a small business needs to verify the real operating layer: what the call is supposed to accomplish, which leads qualify, when the agent should transfer or stop, how the result lands in the CRM, and what happens when a noisy real caller does something unexpected. If those checks are vague, the first week after launch usually turns into manual rescue work.",
  heroSubtext:
    "Below: the pre-launch checklist that matters most, what to test before you turn the number on, when this checklist is useful, and how this page stays distinct from the broader setup-help, setup-mistakes, DIY, cost, ROI, and manual-callback pages already live on the site.",
  sections: [
    {
      type: "cards",
      title: "What to verify before an AI voice agent goes live",
      subtitle:
        "This is the short list that decides whether launch week feels trustworthy or chaotic:",
      items: [
        {
          icon: Phone,
          title: "The call objective is explicit",
          body: "Know the exact job of the first live workflow. Is the agent qualifying, routing, booking, capturing callback details, or handling after-hours overflow? If the workflow does not have a single primary objective, it will sound capable while still missing the business outcome.",
        },
        {
          icon: Bot,
          title: "Qualification and disqualification rules are written down",
          body: "The agent should know what counts as a fit, which questions matter, what should trigger escalation, and what it should never improvise around. A launch checklist is useful because these rules often feel obvious until the first live caller exposes a gap.",
        },
        {
          icon: Route,
          title: "Transfer and fallback paths are tested",
          body: "You should know exactly what happens when the caller wants a human, when the calendar cannot book, when the line drops, when the caller is urgent, or when the agent reaches an edge case. A voice workflow with weak fallback logic is not ready, even if the happy path sounds polished.",
        },
        {
          icon: Workflow,
          title: "CRM, summaries, and next-step ownership are clean",
          body: "A good launch does not end with the call. It ends with the right contact created or updated, the right summary and tags attached, the right disposition logged, and a clear owner for the next step. If that handoff is messy, the workflow is still leaking work.",
        },
      ],
    },
    {
      type: "table",
      title: "The pre-launch checks that matter most",
      subtitle:
        "If you only test the scripted demo path, you miss the things that usually break trust first:",
      headers: ["Checklist item", "What to verify", "Why it matters"],
      rows: [
        {
          label: "Opening and first question",
          values: [
            "The first 20-30 seconds sound clear, on-brand, and tied to the real call objective",
            "A weak opening wastes caller patience fast and often hides the fact that the workflow is not actually scoped yet",
          ],
        },
        {
          label: "Transfer and escalation behavior",
          values: [
            "Live transfer, callback fallback, urgent-case handling, wrong-number handling, and stop conditions all work intentionally",
            "This is usually where team trust is won or lost during the first live week",
          ],
        },
        {
          label: "Real-world call testing",
          values: [
            "Interruptions, background noise, impatience, unexpected questions, and reschedule requests have been tested",
            "Most broken launches fail here, not on the perfect scripted test call",
          ],
        },
        {
          label: "Downstream handoff",
          values: [
            "The CRM record, summary, tags, booking outcome, and next-step owner all land cleanly after the call",
            "If the team still has to reconstruct what happened manually, the AI layer did not create real operational leverage",
          ],
        },
        {
          label: "Ownership after go-live",
          values: [
            "Someone owns prompt changes, routing updates, number admin, booking rules, and integration fixes after launch",
            "A launch without clear ownership usually decays quietly into a fragile system nobody wants to touch",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is useful — and when it is not",
      subtitle:
        "This checklist is useful for businesses that are already close to launch and want to reduce avoidable rollout risk:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are about to launch a voice agent for inbound lead qualification, phone coverage, or booking",
            "The workflow touches real revenue, after-hours demand, or staff handoff — not just an internal experiment",
            "You want a narrower, safer first launch instead of a bigger AI phone workflow that looks impressive but breaks under pressure",
            "You already have a rough setup plan, and now the real question is whether it is actually ready to go live",
            "One or two avoidable bad calls would be enough to make the team stop trusting the workflow",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether voice is the right channel at all",
            "Your main question is implementation help, pricing, ROI, or DIY vs hiring help rather than go-live readiness",
            "Every call requires deep human expertise from the first minute, so launch readiness is not the real bottleneck",
            "You do not yet have basic qualification rules, transfer ownership, or booking windows defined",
            "You are looking for a generic checklist that avoids making a real scope decision",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to use a launch checklist without turning it into busywork",
      subtitle:
        "The point is not to create another long document. The point is to make the first live workflow safer and easier to trust:",
      items: [
        {
          icon: Wrench,
          title: "Launch one narrow call workflow first",
          body: "One qualification path, one transfer path, one CRM destination, and one clear definition of success is usually enough for a first release. The checklist should make the first rollout smaller and clearer, not push you toward a more ambitious launch.",
        },
        {
          icon: AlertTriangle,
          title: "Test ugly calls, not just pretty ones",
          body: "Run noisy calls, interruptions, impatient callers, half-complete answers, booking conflicts, and urgent requests. If the system only passes the polished happy path, it is not ready for the phone number to go live.",
        },
        {
          icon: ShieldCheck,
          title: "Write down what the agent should never do",
          body: "Pricing promises, complaint handling, edge-case reschedules, technical diagnosis, and anything that should go straight to a human need hard boundaries before launch. That protects both caller experience and staff adoption.",
        },
        {
          icon: Clock,
          title: "Keep the first success metric operational",
          body: "Start with a concrete launch target: recovered after-hours calls, cleaner qualification, faster first response, or fewer callback delays. If the first launch target is vague, the checklist will stay vague too.",
        },
        {
          icon: DollarSign,
          title: "Tie readiness to recovered demand, not AI novelty",
          body: "If one or two extra booked calls, consultations, or saved after-hours opportunities per week would justify the project, a disciplined launch is worth the effort. If the business case still feels fuzzy, the workflow is probably too broad.",
        },
      ],
    },
    {
      type: "prose",
      title: "How this page stays distinct from the other voice-agent setup pages",
      subtitle:
        "The live cluster already covers setup help, setup mistakes, DIY, cost, ROI, and manual callback. This page sits one step later in the decision chain:",
      blocks: [
        {
          heading: "This page is about go-live readiness, not project scope",
          body: "The setup-help page explains what a solid implementation should include. This launch-checklist page assumes you are already near that stage and need to verify whether the workflow is actually ready for live calls.",
        },
        {
          heading: "This page is narrower than the setup-mistakes page",
          body: "The setup-mistakes page explains the common pre-launch decisions that create bigger cleanup later. This checklist page turns that idea into an operational release gate: what to verify, what to test, and what should be true before the number turns on.",
        },
        {
          heading: "A checklist is only useful if it changes launch behavior",
          body: "If the page does not lead to a narrower scope, better testing, clearer handoff, or a delayed launch until the workflow is safer, it is just content clutter. The real output should be a more trustworthy first release, not more AI theatre.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone voice-agent launch-checklist case study here. The support comes from the live voice-agent setup cluster plus adjacent phone and CRM proof already published on the site:",
      studies: [
        {
          industry: "Existing voice-agent setup cluster",
          headline: "The live setup, setup-mistakes, setup-vs-DIY, cost, ROI, and manual-callback pages already define the surrounding buyer decisions clearly",
          body: "That cluster makes the remaining exact tracked queries viable: what should a voice agent include before it goes live, and what should be tested before launch? This page isolates the release-readiness layer without rehashing broader implementation or pricing advice.",
          link: "/ai-voice-agent-setup-for-lead-qualification",
        },
        {
          industry: "Phone workflow proof",
          headline: "Paris Cafe proves the business value of getting phone handling and fallback behavior right before demand is routed live",
          body: "Different exact use case, same operational lesson. The restaurant voice-agent case study works because the call flow, fallback behavior, and downstream handoff were disciplined enough to protect after-hours reservation demand instead of confusing callers.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "CRM handoff proof",
          headline: "The WheelsFeels CRM case study shows why captured conversations still need clean state truth and next-step ownership behind them",
          body: "That project is adjacent proof for the back half of the release checklist: summary quality, routing, logging, follow-up ownership, and why the workflow is not truly live if the downstream team still has to reconstruct everything manually.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI voice agent setup help", href: "/ai-voice-agent-setup-for-lead-qualification" },
        { label: "AI voice agent setup mistakes", href: "/ai-voice-agent-setup-mistakes-small-business" },
        { label: "AI voice agent vs. manual callback", href: "/ai-voice-agent-vs-manual-callback-for-service-businesses" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should an AI voice agent include before it goes live?",
      answer:
        "At minimum: a clear call objective, qualification and disqualification rules, transfer and fallback logic, booking or routing boundaries, CRM logging, and clear ownership for updates after launch. If those pieces are vague, the workflow is not actually ready even if the demo sounds polished.",
    },
    {
      question: "What should I test before launching an AI voice agent?",
      answer:
        "Test interruptions, background noise, urgent callers, wrong numbers, transfer failures, booking conflicts, reschedule requests, and any edge case where the agent should stop or escalate. The real test is whether the workflow stays trustworthy when the call goes off script.",
    },
    {
      question: "How is this different from the voice-agent setup-help page?",
      answer:
        "The setup-help page explains what a good implementation project should include and when expert help is worth paying for. This page is narrower: the go-live checklist that helps you decide whether the workflow is actually safe enough to launch now.",
    },
    {
      question: "How is this different from the setup-mistakes page?",
      answer:
        "The setup-mistakes page explains the failure patterns that usually create future cleanup work. This page turns those risks into a practical release gate: what has to be verified, tested, and owned before the number goes live.",
    },
    {
      question: "When should I delay launch instead of forcing a voice agent live?",
      answer:
        "Delay launch when transfer boundaries are still fuzzy, qualification rules are still changing, downstream CRM handoff is weak, or nobody owns prompt and routing updates after go-live. A slightly later clean launch is usually cheaper than a fast launch the team stops trusting after a few bad calls.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners who are already close to launching a voice agent and want a safer release instead of an avoidable cleanup project a few weeks later",
  ctaHeading: "Need a second opinion before you turn a voice agent live?",
  ctaText:
    "Book a 30-minute call. We will review the live-call objective, transfer rules, fallback behavior, CRM handoff, and ugly-call test cases so you can decide whether the workflow is ready now, needs a narrower first launch, or should wait until the release risk is lower.",
  ctaSubtext:
    "Useful if you are already close to go-live and want to reduce the chance that launch week turns into manual rescue work.",
  relatedLinks: [
    { label: "AI voice agent setup help", href: "/ai-voice-agent-setup-for-lead-qualification" },
    { label: "AI voice agent setup mistakes", href: "/ai-voice-agent-setup-mistakes-small-business" },
    { label: "AI voice agent setup vs. DIY", href: "/ai-voice-agent-setup-vs-diy-small-business" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
