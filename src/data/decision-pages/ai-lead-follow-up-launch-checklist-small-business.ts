import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Clock,
  DollarSign,
  MessageSquare,
  Route,
  ShieldCheck,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-launch-checklist-small-business",
  metaTitle:
    "AI Lead Follow-Up Launch Checklist for Small Business — What to Verify Before Go-Live | Dmytro AI",
  metaDescription:
    "Practical AI lead-follow-up launch checklist for small businesses. What to verify before go-live: response logic, stop conditions, CRM handoff, channel mapping, ugly-lead testing, and ownership after launch.",
  badgeText: "Launch Checklist",
  badgeIcon: ClipboardList,
  h1: "AI Lead Follow-Up Launch Checklist for Small Business",
  heroIntro:
    "A lead follow-up workflow should not go live just because the first auto-reply sounds good. Before launch, a small business needs to verify the real operating layer: which lead sources are mapped, what the response timing looks like by channel and time of day, whether stop conditions actually work, how the CRM handoff lands, and what happens when a real lead does something the happy path never tested. If those checks are vague, the first week usually turns into manual rescue work — duplicate messages, unowned leads, and a team that stops trusting the automation.",
  heroSubtext:
    "Below: the pre-launch checklist that matters most, what to test before turning the workflow on, when this checklist is useful, and how this page stays distinct from the setup-help, setup-mistakes, cost, ROI, and DIY pages already live on the site.",
  sections: [
    {
      type: "cards",
      title: "What to verify before a lead follow-up workflow goes live",
      subtitle:
        "This is the short list that decides whether launch week feels trustworthy or chaotic:",
      items: [
        {
          icon: MessageSquare,
          title: "Every active lead source has a mapped response path",
          body: "Web forms, missed calls, Google Business messages, social DMs, and referral inquiries each carry different urgency. Before launch, each source should have a defined first response, timing, and escalation path. A workflow that only handles one channel while the rest stay on manual is not ready.",
        },
        {
          icon: Route,
          title: "Stop conditions and reply handling are tested",
          body: "The workflow should know exactly what happens when a lead replies, books, calls back, opts out, or goes silent. If any of those paths are unmapped, the first real lead who triggers one will get a duplicate message, an awkward follow-up after they already booked, or dead silence.",
        },
        {
          icon: Workflow,
          title: "CRM state, owner assignment, and pipeline routing are clean",
          body: "A launch is not ready if the right contact is not created, the right pipeline stage is not set, the right owner is not assigned, and duplicate handling is not working. Messages going out while CRM state is broken means the team still has to reconstruct what happened manually.",
        },
        {
          icon: ShieldCheck,
          title: "Ugly real-world lead scenarios have been tested",
          body: "The happy-path demo lead rarely breaks. The real problems show up when a lead submits twice, replies at 11 PM, asks a question the workflow was not designed for, or books through a path the sequence did not expect. If those edge cases were not tested, trust breaks fast.",
        },
      ],
    },
    {
      type: "table",
      title: "The pre-launch checks that matter most",
      subtitle:
        "If you only test the clean demo path, you miss the things that usually break trust first:",
      headers: ["Checklist item", "What to verify", "Why it matters"],
      rows: [
        {
          label: "Channel-specific first response",
          values: [
            "Each active lead source has its own response message, timing, and escalation path that matches the intent and urgency of that channel",
            "A web form and a missed call carry different urgency — one-size-fits-all response logic under-handles one while over-handling the other",
          ],
        },
        {
          label: "Stop conditions and sequence logic",
          values: [
            "Replies, bookings, callbacks, opt-outs, and no-fit answers each trigger the right next step instead of continuing the queued sequence",
            "This is usually where team trust is won or lost during the first live week — a few obviously wrong follow-ups are enough to kill adoption",
          ],
        },
        {
          label: "After-hours and edge-case behavior",
          values: [
            "Leads arriving at night, on weekends, or during holidays have defined response paths instead of silence or inappropriate immediate outreach",
            "Most broken launches fail here, not on the leads that arrive during business hours",
          ],
        },
        {
          label: "CRM handoff and downstream state",
          values: [
            "Contact creation, pipeline stage, owner assignment, tags, and duplicate handling all land correctly after the first response fires",
            "If the team still has to clean up contact records manually, the automation did not actually create operational leverage",
          ],
        },
        {
          label: "Ownership after go-live",
          values: [
            "Someone owns sequence updates, routing changes, CRM field adjustments, and integration fixes after launch",
            "A launch without clear ownership usually decays quietly into a system nobody wants to touch within a few weeks",
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
            "You are about to launch lead follow-up automation for web forms, missed calls, or multi-channel inquiry handling",
            "The workflow touches real inbound demand where slow response or duplicate outreach costs revenue",
            "You want a safer first launch instead of a broader build that looks impressive but breaks under real lead traffic",
            "You already have a rough setup plan, and now the real question is whether it is actually ready to go live",
            "One or two avoidable bad follow-ups would be enough to make the team stop trusting the workflow",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether lead follow-up is the right first workflow to automate at all",
            "Your main question is implementation help, pricing, ROI, or DIY vs. hiring help rather than go-live readiness",
            "Lead volume is low enough that a fast manual callback is still covering the real gap",
            "You do not yet have basic response rules, CRM routing, or owner assignment defined",
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
          title: "Launch one narrow follow-up workflow first",
          body: "One lead source, one response path, one CRM destination, and one clear definition of success is usually enough for a first release. The checklist should make the first rollout smaller and clearer, not push you toward a more ambitious launch.",
        },
        {
          icon: AlertTriangle,
          title: "Test ugly leads, not just clean demo submissions",
          body: "Run duplicate form submissions, after-hours replies, mid-sequence bookings, unexpected questions, and opt-out requests. If the system only passes the polished happy-path test, it is not ready for real lead traffic.",
        },
        {
          icon: ShieldCheck,
          title: "Write down what the workflow should never do",
          body: "Pricing promises, complaint handling, leads that belong to a different owner, and anything that should go straight to a human need hard boundaries before launch. That protects both lead experience and team adoption.",
        },
        {
          icon: Clock,
          title: "Keep the first success metric operational",
          body: "Start with a concrete launch target: faster first response on one channel, recovered missed-call leads, cleaner CRM handoff, or fewer follow-ups that require manual intervention. If the first launch target is vague, the checklist will stay vague too.",
        },
        {
          icon: DollarSign,
          title: "Tie readiness to recovered demand, not automation novelty",
          body: "If recovering a handful of lost leads each month or preventing one recurring CRM routing mistake would justify the project, a disciplined launch is worth the effort. If the business case still feels fuzzy, the workflow is probably scoped too broadly.",
        },
      ],
    },
    {
      type: "prose",
      title: "How this page stays distinct from the other lead-follow-up setup pages",
      subtitle:
        "The live cluster already covers setup help, setup mistakes, DIY, cost, and ROI. This page sits one step later in the decision chain:",
      blocks: [
        {
          heading: "This page is about go-live readiness, not project scope",
          body: "The setup-help page explains what a solid implementation should include. This launch-checklist page assumes you are already near that stage and need to verify whether the workflow is actually ready for live leads.",
        },
        {
          heading: "This page is narrower than the setup-mistakes page",
          body: "The setup-mistakes page explains the common pre-launch decisions that create bigger cleanup later. This checklist page turns that idea into an operational release gate: what to verify, what to test, and what should be true before the workflow turns on.",
        },
        {
          heading: "A checklist is only useful if it changes launch behavior",
          body: "If the page does not lead to a narrower scope, better testing, clearer handoff, or a delayed launch until the workflow is safer, it is just content clutter. The real output should be a more trustworthy first release, not more automation theatre.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone lead-follow-up launch-checklist case study here. The support comes from the live lead-follow-up setup cluster plus adjacent CRM and first-response proof already published on the site:",
      studies: [
        {
          industry: "Existing lead-follow-up setup cluster",
          headline: "The live setup, setup-mistakes, setup-vs-DIY, cost, and ROI pages already define the surrounding buyer decisions clearly",
          body: "That cluster makes the remaining exact tracked query viable: what should be verified before launching lead follow-up automation? This page isolates the release-readiness layer without rehashing broader implementation, mistake patterns, or pricing advice.",
          link: "/ai-lead-follow-up-setup-for-service-businesses",
        },
        {
          industry: "CRM handoff proof",
          headline: "The WheelsFeels CRM case study shows why captured leads still need clean state truth and next-step ownership behind them",
          body: "That project is adjacent proof for the back half of the release checklist: contact creation quality, pipeline routing, owner assignment, and why the workflow is not truly live if the downstream team still has to reconstruct everything manually.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "First-response proof",
          headline: "The contact-form and instant-response pages show why a narrower first launch is usually smarter than a broad fragile build",
          body: "For some businesses, the right launch is not full multi-channel follow-up on day one. It is solving the highest-value first-response leak first, then expanding once the workflow state and handoff logic are trustworthy.",
          link: "/contact-form-lead-follow-up-automation",
        },
      ],
      links: [
        { label: "AI lead follow-up setup help", href: "/ai-lead-follow-up-setup-for-service-businesses" },
        { label: "AI lead follow-up setup mistakes", href: "/ai-lead-follow-up-setup-mistakes-small-business" },
        { label: "AI lead follow-up setup vs. DIY", href: "/ai-lead-follow-up-setup-vs-diy-small-business" },
        { label: "AI lead follow-up cost for small business", href: "/ai-lead-follow-up-cost-small-business" },
        { label: "AI lead follow-up ROI for small business", href: "/ai-lead-follow-up-roi-small-business" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should be verified before launching lead follow-up automation?",
      answer:
        "At minimum: every active lead source has a mapped response path, stop conditions handle replies and bookings correctly, CRM contact creation and owner assignment are clean, after-hours and edge-case behavior has been tested, and someone owns workflow updates after go-live. If those pieces are vague, the workflow is not actually ready.",
    },
    {
      question: "What should I test before turning on lead follow-up automation?",
      answer:
        "Test duplicate form submissions, after-hours lead arrivals, mid-sequence bookings, opt-out requests, unexpected replies, and any channel-specific edge case where the workflow might send the wrong message or lose the lead. The real test is whether the system stays trustworthy when leads arrive off the happy path.",
    },
    {
      question: "How is this different from the lead-follow-up setup-help page?",
      answer:
        "The setup-help page explains what a good implementation project should include and when expert help is worth paying for. This page is narrower: the go-live checklist that helps you decide whether the workflow is actually safe enough to launch now.",
    },
    {
      question: "How is this different from the setup-mistakes page?",
      answer:
        "The setup-mistakes page explains the failure patterns that usually create future cleanup work. This page turns those risks into a practical release gate: what has to be verified, tested, and owned before the workflow goes live.",
    },
    {
      question: "When should I delay launch instead of forcing a lead follow-up workflow live?",
      answer:
        "Delay launch when stop conditions are still fuzzy, CRM routing and owner assignment are not trustworthy, after-hours behavior is untested, or nobody owns sequence and routing updates after go-live. A slightly later clean launch is usually cheaper than a fast launch the team stops trusting after a few bad follow-ups.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners who are already close to launching lead follow-up automation and want a safer release instead of an avoidable cleanup project a few weeks later",
  ctaHeading: "Need a second opinion before you turn lead follow-up live?",
  ctaText:
    "Book a 30-minute call. We will review the channel mapping, response logic, stop conditions, CRM handoff, and edge-case testing so you can decide whether the workflow is ready now, needs a narrower first launch, or should wait until the release risk is lower.",
  ctaSubtext:
    "Useful if you are already close to go-live and want to reduce the chance that launch week turns into manual rescue work.",
  relatedLinks: [
    { label: "AI lead follow-up setup help", href: "/ai-lead-follow-up-setup-for-service-businesses" },
    { label: "AI lead follow-up setup mistakes", href: "/ai-lead-follow-up-setup-mistakes-small-business" },
    { label: "AI lead follow-up setup vs. DIY", href: "/ai-lead-follow-up-setup-vs-diy-small-business" },
    { label: "AI lead follow-up cost", href: "/ai-lead-follow-up-cost-small-business" },
    { label: "AI lead follow-up ROI", href: "/ai-lead-follow-up-roi-small-business" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
