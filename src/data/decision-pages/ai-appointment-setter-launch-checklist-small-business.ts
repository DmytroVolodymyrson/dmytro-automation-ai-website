import {
  AlertTriangle,
  Bot,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  Database,
  Phone,
  Route,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-appointment-setter-launch-checklist-small-business",
  metaTitle:
    "AI Appointment Setter Launch Checklist for Small Business — What to Verify Before Go-Live | Dmytro AI",
  metaDescription:
    "Practical AI appointment-setter launch checklist for small businesses. What to verify before go-live: qualification rules, booking boundaries, fallback behavior, CRM handoff, ugly-call testing, and ownership after launch.",
  badgeText: "Launch Checklist",
  badgeIcon: ClipboardList,
  h1: "AI Appointment Setter Launch Checklist for Small Business",
  heroIntro:
    "An appointment setter should not go live just because the first script sounds polished. Before launch, a small business needs to verify the operating layer underneath it: which inquiry types are in scope, what should count as qualified, what the booking boundaries are, when the AI should stop and hand off, how the CRM summary lands, and what happens when a real caller does something the happy-path demo never covered. If those checks are fuzzy, the first week usually turns into office cleanup — wrong bookings, weak handoff notes, duplicate follow-up, and a team that stops trusting the workflow.",
  heroSubtext:
    "Below: what to verify before an appointment setter goes live, which tests matter most, when this checklist is useful, and how this page stays distinct from the setup-help, setup-mistakes, cost, ROI, and DIY pages already live in the appointment-setter cluster.",
  sections: [
    {
      type: "cards",
      title: "What to verify before an appointment setter goes live",
      subtitle:
        "This is the short list that usually decides whether launch week feels trustworthy or chaotic:",
      items: [
        {
          icon: Bot,
          title: "Inquiry types and qualification rules are explicit",
          body: "A new lead, an existing customer, a reschedule request, a bad-fit inquiry, and a routine question should not all hit the same logic path. Before launch, the business should know exactly who the AI is allowed to qualify, who it should book, who it should route, and who should stay manual.",
        },
        {
          icon: CalendarCheck,
          title: "Booking boundaries match the real calendar rules",
          body: "The workflow should know appointment types, buffers, service areas, no-go times, escalation cases, and when a callback is safer than an instant booking. If those boundaries are vague, the AI will create calendar friction faster than it creates leverage.",
        },
        {
          icon: Route,
          title: "Fallback behavior and human handoff are tested",
          body: "The system should know what to do when the caller is not a fit, needs a human immediately, asks an off-script question, wants to reschedule, or cannot be booked safely. Most fragile launches fail here, not on the perfect demo lead.",
        },
        {
          icon: Database,
          title: "CRM summaries, owner assignment, and next-step state land cleanly",
          body: "If the team cannot clearly see what happened, whether the lead was booked, what qualification answers matter, and who owns the next step, the office still has to reconstruct the interaction manually. A captured booking without trustworthy state is only half captured.",
        },
      ],
    },
    {
      type: "table",
      title: "The pre-launch checks that matter most",
      subtitle:
        "If you only test the clean demo call, you miss the things that usually break trust first:",
      headers: ["Checklist item", "What to verify", "Why it matters"],
      rows: [
        {
          label: "Qualification logic",
          values: [
            "The AI can separate good-fit leads, bad-fit leads, reschedules, routine questions, and edge cases without pushing everything toward the same booking path",
            "If the qualification layer is weak, the workflow sounds helpful but creates the wrong bookings and extra staff cleanup later",
          ],
        },
        {
          label: "Booking boundaries",
          values: [
            "Appointment types, calendar windows, service areas, buffers, and escalation cases are mapped clearly before live demand touches the system",
            "This is where a lot of small-business launches fail — the calendar logic looks fine in a demo but breaks on real-world exceptions",
          ],
        },
        {
          label: "Fallback and handoff",
          values: [
            "Off-script questions, complaints, callback requests, pricing objections, and other out-of-lane scenarios route to the right human path instead of leaving the caller stuck",
            "A few visibly wrong handoff moments are enough to make the team stop trusting the appointment setter on real demand",
          ],
        },
        {
          label: "CRM and downstream state",
          values: [
            "Contact creation, owner assignment, summaries, tags, booked status, and next-step routing all land correctly after the interaction ends",
            "If downstream state is messy, the workflow still creates manual admin work even when the front-end conversation sounds fine",
          ],
        },
        {
          label: "Ownership after go-live",
          values: [
            "Someone owns changes to qualification rules, booking windows, escalation paths, and CRM mappings after launch",
            "A decent launch without ownership usually degrades quietly into a workflow nobody wants to touch within a few weeks",
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
            "You are close to launching appointment-setting automation for calls, forms, or message-based first response",
            "The workflow touches real bookings, consultations, estimates, or after-hours demand where a weak launch would damage trust quickly",
            "You already have a rough setup plan and now need to decide whether the system is actually safe to turn on",
            "One or two obviously wrong bookings or bad handoffs would be enough to make the office stop trusting the workflow",
            "You want a narrower, cleaner first launch instead of an ambitious build that looks impressive but breaks under real traffic",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether appointment-setting automation is the right workflow at all",
            "Your main question is setup scope, cost, ROI, or DIY vs. hiring help rather than go-live readiness",
            "Every inbound inquiry still requires a long human sales conversation before any next step can be offered safely",
            "You do not yet have clear qualification rules, booking boundaries, or ownership for the workflow",
            "You mainly want a generic checklist that avoids making real scope decisions before launch",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to use a launch checklist without turning it into busywork",
      subtitle:
        "The point is not to create another document. The point is to make the first live workflow safer and easier to trust:",
      items: [
        {
          icon: Wrench,
          title: "Launch one narrow booking workflow first",
          body: "One inquiry type, one qualification path, one booking path, one fallback path, and one CRM destination is usually enough for a first release. The checklist should make the first rollout smaller and clearer, not push you toward a broader build.",
        },
        {
          icon: AlertTriangle,
          title: "Test ugly real-world conversations on purpose",
          body: "Run duplicate form submissions, after-hours calls, not-a-fit leads, pricing-first questions, reschedule requests, and anything that should force a human handoff. If the system only passes a polished happy-path test, it is not ready for real demand.",
        },
        {
          icon: Phone,
          title: "Write down what the AI should never do alone",
          body: "Pricing promises, complaint handling, highly nuanced sales questions, off-area bookings, and anything that should route immediately to a human need explicit boundaries before launch. That protects caller experience and team adoption.",
        },
        {
          icon: Clock,
          title: "Keep the first success metric operational",
          body: "Start with a concrete launch target: faster first response after hours, fewer missed booking opportunities, cleaner qualification summaries, or fewer manual booking corrections. If the launch target is vague, the checklist will stay vague too.",
        },
        {
          icon: Users,
          title: "Make ownership visible before go-live",
          body: "Someone should own qualification changes, booking-window updates, CRM mappings, escalation rules, and issue triage after launch. That is what keeps an appointment setter from turning into a black box the office resents.",
        },
      ],
    },
    {
      type: "prose",
      title: "How this page stays distinct from the rest of the appointment-setter cluster",
      subtitle:
        "The live cluster already covers setup help, setup mistakes, DIY, cost, and ROI. This page sits one step later in the decision chain:",
      blocks: [
        {
          heading: "This page is about go-live readiness, not implementation scope",
          body: "The setup-help page explains what a solid appointment-setter implementation should include and when expert help is worth paying for. This launch-checklist page assumes you are already near that stage and need to verify whether the workflow is actually safe to turn on now.",
        },
        {
          heading: "This page is narrower than the setup-mistakes page",
          body: "The setup-mistakes page explains the pre-launch decisions that usually create expensive cleanup later. This checklist page turns that idea into an operational release gate: what to verify, what to test, and what should be true before live callers touch the system.",
        },
        {
          heading: "A checklist is only useful if it changes launch behavior",
          body: "If the page does not lead to a smaller first rollout, better edge-case testing, clearer booking boundaries, or a delayed launch until the workflow is safer, it is just content clutter. The real output should be a more trustworthy first release, not more automation theatre.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone appointment-setter launch-checklist case study here. The support comes from the live appointment-setter setup cluster plus adjacent call-handling, qualification, and CRM proof already published on the site:",
      studies: [
        {
          industry: "Existing appointment-setter setup cluster",
          headline: "The live setup, setup-mistakes, setup-vs-DIY, cost, and ROI pages already define the surrounding buyer decisions clearly",
          body: "That cluster makes the remaining exact buyer-intent page viable: what should be verified before an appointment setter goes live? This page isolates the release-readiness layer without rehashing implementation scope, pricing, ROI, or the broader setup-mistakes framing.",
          link: "/ai-appointment-setter-setup",
        },
        {
          industry: "Phone workflow proof",
          headline: "Paris Cafe shows why disciplined first-response and booking logic matter before live demand is handed to AI",
          body: "Different exact use case, same operational lesson. The published restaurant voice-agent case study worked because the call flow, fallback behavior, and handoff path were strong enough to protect after-hours demand instead of sending callers into dead ends or next-day delay.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Qualification and CRM handoff proof",
          headline: "The voice-agent qualification guide plus the WheelsFeels CRM case study show why the middle and back half matter",
          body: "A working appointment setter is not just about answering first. It has to qualify cleanly, book within real boundaries, log correctly, and hand off reliably so the team does not inherit a new cleanup problem after the conversation ends.",
          link: "/ai-voice-agent-lead-qualification",
        },
      ],
      links: [
        { label: "AI appointment setter", href: "/ai-appointment-setter" },
        { label: "AI appointment setter setup help", href: "/ai-appointment-setter-setup" },
        { label: "AI appointment setter setup mistakes", href: "/ai-appointment-setter-setup-mistakes-small-business" },
        { label: "AI appointment setter setup vs. DIY", href: "/ai-appointment-setter-setup-vs-diy-small-business" },
        { label: "AI appointment setter cost", href: "/ai-appointment-setter-cost-small-business" },
        { label: "AI appointment setter ROI", href: "/ai-appointment-setter-roi-small-business" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should be verified before launching an AI appointment setter?",
      answer:
        "At minimum: qualification rules are explicit, booking boundaries match the real calendar, fallback behavior and human handoff are tested, CRM summaries and owner assignment land cleanly, and someone owns changes after launch. If those pieces are fuzzy, the workflow is not actually ready.",
    },
    {
      question: "What should I test before turning on an AI appointment setter?",
      answer:
        "Test duplicate inquiries, after-hours calls, bad-fit leads, pricing-first questions, reschedule requests, off-area bookings, and any scenario where the AI should stop and hand off. The real test is whether the workflow stays trustworthy when callers arrive off the happy path.",
    },
    {
      question: "How is this different from the AI appointment-setter setup-help page?",
      answer:
        "The setup-help page explains what a good implementation project should include and when expert help is worth paying for. This page is narrower: the go-live checklist that helps you decide whether the workflow is actually safe enough to launch now.",
    },
    {
      question: "How is this different from the setup-mistakes page?",
      answer:
        "The setup-mistakes page explains the failure patterns that usually create future cleanup work. This page turns those risks into a release gate: what has to be verified, tested, and owned before live callers touch the system.",
    },
    {
      question: "When should I delay launch instead of forcing an appointment setter live?",
      answer:
        "Delay launch when qualification rules are still fuzzy, booking boundaries are not trustworthy, edge-case routing is untested, CRM handoff is messy, or nobody owns workflow changes after launch. A slightly later clean launch is usually cheaper than a fast launch the team stops trusting after a few bad bookings.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners who are already close to launching appointment-setting automation and want a safer release instead of an avoidable cleanup project a few weeks later",
  ctaHeading: "Need a second opinion before you turn an appointment setter live?",
  ctaText:
    "Book a 30-minute call. We will review qualification logic, booking boundaries, fallback behavior, CRM handoff, and ugly-call testing so you can decide whether the workflow is ready now, needs a narrower first launch, or should wait until the release risk is lower.",
  ctaSubtext:
    "Useful if you are already close to go-live and want to reduce the chance that launch week turns into office cleanup.",
  relatedLinks: [
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "AI appointment setter setup help", href: "/ai-appointment-setter-setup" },
    { label: "AI appointment setter setup mistakes", href: "/ai-appointment-setter-setup-mistakes-small-business" },
    { label: "AI appointment setter setup vs. DIY", href: "/ai-appointment-setter-setup-vs-diy-small-business" },
    { label: "AI appointment setter cost", href: "/ai-appointment-setter-cost-small-business" },
    { label: "AI appointment setter ROI", href: "/ai-appointment-setter-roi-small-business" },
    { label: "AI appointment setter for home service businesses", href: "/ai-appointment-setter-for-home-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
