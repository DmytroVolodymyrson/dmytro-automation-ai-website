import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Clock,
  MessageSquare,
  PhoneMissed,
  Route,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "../../components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-launch-checklist-small-business",
  metaTitle:
    "Missed Call Text-Back Launch Checklist for Small Business — What to Verify Before Go-Live | Dmytro AI",
  metaDescription:
    "Practical missed-call text-back launch checklist for small businesses. What to verify before go-live: answered-call filtering, business-hours logic, reply routing, booking paths, CRM visibility, and ugly-case testing before SMS starts firing live.",
  badgeText: "Launch Checklist",
  badgeIcon: ClipboardList,
  h1: "Missed Call Text-Back Launch Checklist for Small Business",
  heroIntro:
    "Missed-call text-back should not go live just because the first demo text sounded polite and the automation technically fired. Before a small business turns SMS-first missed-call recovery on, the real operating layer underneath the workflow needs to be trustworthy: the trigger only fires on genuinely missed inbound calls, business-hours and after-hours paths stay separate, the first text creates the right next step instead of a dead end, urgent replies route fast, and the CRM shows enough state that the team can trust what happened after the phone rang. If those checks are still fuzzy, launch week usually teaches the wrong lesson — the system texts people you already spoke with, after-hours language goes out at the wrong time, threads sit unowned, duplicate contacts pile up, and the office starts treating text-back like another cleanup project instead of a simple lead-recovery layer.",
  heroSubtext:
    "Below: the launch checklist that matters most, what to test before turning missed-call text-back on, when this page is useful, and how it stays distinct from the setup-help, setup-mistakes, setup-vs-DIY, cost, ROI, and comparison pages already live in the missed-call-text-back cluster.",
  sections: [
    {
      type: "cards",
      title: "What to verify before missed-call text-back goes live",
      subtitle:
        "These are the checks that decide whether launch week feels reliable or careless:",
      items: [
        {
          icon: PhoneMissed,
          title: "The trigger only fires on real missed inbound calls",
          body: "The workflow should know the difference between a genuinely missed inbound call, an answered call, a transfer, a short spam ring, and a number already in an active thread. If the trigger is fuzzy, every text after it inherits the same trust problem.",
        },
        {
          icon: Clock,
          title: "Business-hours and after-hours timing matches reality",
          body: "A caller missed at 2 PM and a caller missed at 9 PM should not get the same expectation. Before launch, the schedule, delay, and message path should match when the team is actually available and what the next step really looks like.",
        },
        {
          icon: MessageSquare,
          title: "The first text opens the right conversation",
          body: "A good text-back message creates a clear next move: reply with the need, use a booking link, or expect a callback within a real window. If the message only acknowledges the miss without shaping what happens next, the workflow feels fast but not useful.",
        },
        {
          icon: Route,
          title: "Urgent and off-script replies route correctly",
          body: "Emergency keywords, billing complaints, angry replies, existing-customer context, and service-area mismatches need an intentional path before go-live. If every reply drops into the same generic thread, the workflow is not ready.",
        },
        {
          icon: Users,
          title: "CRM visibility and ownership are tested",
          body: "The office should be able to see when the call was missed, when the text fired, whether the caller replied, who owns the next move, and whether the workflow stopped. If the team still has to reconstruct state manually, the launch is not ready.",
        },
      ],
    },
    {
      type: "table",
      title: "The pre-launch checks that matter most",
      subtitle:
        "If you only test the clean happy path, you miss the failures that usually break trust first:",
      headers: ["Checklist item", "What to verify", "Why it matters"],
      rows: [
        {
          label: "Answered-call filtering",
          values: [
            "The system only texts on genuinely missed inbound calls — not answered calls, internal transfers, spam, or numbers already being handled",
            "This is the single fastest way to protect trust. One wrong sorry-we-missed-you text after a live conversation can make the workflow feel broken immediately",
          ],
        },
        {
          label: "Business-hours and after-hours paths",
          values: [
            "Schedules, holidays, callback expectations, and booking links all match the real operating window",
            "Wrong time-of-day logic creates false promises and makes the workflow feel careless even when the SMS itself sounds fine",
          ],
        },
        {
          label: "First-message next step",
          values: [
            "The first text clearly drives a useful next action — reply with the need, book now, or expect a defined callback window",
            "If the message is only an acknowledgment, the business still has a faster missed call and not a real recovery workflow",
          ],
        },
        {
          label: "Reply routing and escalation",
          values: [
            "Urgent needs, existing-customer issues, off-topic replies, and high-intent opportunities route to the right human fast",
            "A text-back workflow only works when the team can trust where replies go after the automation opens the thread",
          ],
        },
        {
          label: "CRM logging and ownership",
          values: [
            "The team can see last touch, reply status, next-step owner, duplicate handling, and whether the thread is still active",
            "Without clear state truth, the workflow becomes one more inbox mess instead of a reliable missed-call recovery layer",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is useful — and when it is not",
      subtitle:
        "This checklist is useful for businesses that are already near launch and want a safer first rollout:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You already know missed-call text-back is the right lighter phone layer and now need to decide whether it is safe enough to turn on",
            "Wrong trigger logic, weak ownership, or sloppy schedule rules would create visible office friction quickly",
            "The business wants a narrower release gate, not another broad page about pricing or whether text-back fits at all",
            "A few wrong live texts would be enough to make the team distrust the workflow",
            "You need a real go-live checklist before SMS starts firing to live callers and leads",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether text-back is the right phone-recovery layer versus voicemail or live AI phone answering",
            "Your main question is setup scope, cost, ROI, or DIY versus hiring help rather than release readiness",
            "Call volume is low enough that careful manual callbacks still work without much pain",
            "The real gap is deeper live phone coverage, not the text-back release gate",
            "You want a generic checklist that avoids making a real trigger, routing, or ownership decision",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to use a launch checklist without turning it into busywork",
      subtitle:
        "The goal is not another internal doc. The goal is a narrower and more trustworthy first release:",
      items: [
        {
          icon: Wrench,
          title: "Launch one disciplined recovery path first",
          body: "One reliable trigger, one clear business-hours path, one after-hours path, one visible CRM destination, and one clean owner for replies is enough for a first release. The checklist should make the workflow smaller and safer, not broader and harder to trust.",
        },
        {
          icon: AlertTriangle,
          title: "Test ugly scenarios, not just silent leads",
          body: "Run answered-call false positives, repeat callers, angry replies, existing-customer messages, service-area mismatches, duplicate contacts, and urgent texts that should escalate. If the workflow only works when the caller behaves politely and predictably, it is not ready.",
        },
        {
          icon: ShieldCheck,
          title: "Write the stop and ownership rules before polishing copy",
          body: "The expensive launch failures are boundary failures, not wording failures. Decide what stops the workflow, who owns replies, and when a human should take over before debating whether the first message should sound warmer.",
        },
        {
          icon: Workflow,
          title: "Make downstream visibility part of launch, not cleanup",
          body: "The office should know what happened after the missed call without opening three systems. If the CRM still cannot show the contact state, text status, owner, and next action, the workflow is not truly ready for live volume.",
        },
      ],
    },
    {
      type: "prose",
      title: "How this page stays distinct from the other missed-call text-back setup pages",
      subtitle:
        "The live cluster already covers setup help, setup mistakes, setup-vs-DIY, cost, ROI, and the two core comparison pages. This page sits one step later in the decision chain:",
      blocks: [
        {
          heading: "This page is about go-live readiness, not implementation scope",
          body: "The setup-help page explains what a proper missed-call text-back build should include and when setup help is worth paying for. This launch-checklist page assumes the workflow is already close to that stage and asks whether it is actually safe enough to turn on now.",
        },
        {
          heading: "This page turns the mistakes layer into an operational release gate",
          body: "The setup-mistakes page explains the design failures that usually create wrong texts and future cleanup. This page turns those risks into a launch decision: what has to be verified, tested, and owned before live missed-call recovery starts texting real callers.",
        },
        {
          heading: "A useful checklist should change launch behavior",
          body: "If this page does not help the owner narrow the release, delay a risky launch, tighten ownership, or test uglier real-world scenarios, it is just content clutter. The real output should be a cleaner first rollout, not more automation theater.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone missed-call-text-back launch-checklist case study here. The support comes from the live text-back cluster, adjacent phone-recovery pages, and the published CRM/call-handling case studies already on the site:",
      studies: [
        {
          industry: "Existing missed-call text-back cluster",
          headline: "The parent, setup-help, setup-mistakes, DIY, cost, ROI, and comparison pages already define the surrounding buyer decisions clearly",
          body: "That live cluster makes the remaining exact launch-readiness page viable: what should be verified before text-back goes live? This page isolates the release gate instead of rehashing broader setup scope, budget, or buy-vs-build framing.",
          link: "/missed-call-text-back-setup-for-service-businesses",
        },
        {
          industry: "Phone workflow proof",
          headline: "Paris Cafe proves why fast call capture only helps when the routing and next-step layer are disciplined before live demand hits it",
          body: "Different exact workflow, same operational lesson. The restaurant voice-agent case study worked because call capture, timing, routing, and follow-through were tight enough to protect after-hours demand instead of creating more manual rescue work.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "CRM state-truth proof",
          headline: "The vehicle accessories CRM case study proves why recovered conversations still need clean state, routing, and next-step ownership behind them",
          body: "Text-back only becomes real leverage when the lead state stays visible after the phone rings. That case study is honest adjacent proof for the back half of this checklist: logging, ownership, and downstream handoff after the first response.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Missed call text-back for service businesses", href: "/missed-call-text-back-for-service-businesses" },
        { label: "Missed call text-back setup help", href: "/missed-call-text-back-setup-for-service-businesses" },
        { label: "Missed call text-back setup mistakes", href: "/missed-call-text-back-setup-mistakes-small-business" },
        { label: "Missed call text-back setup vs. DIY", href: "/missed-call-text-back-setup-vs-diy-small-business" },
        { label: "Missed call text-back cost", href: "/missed-call-text-back-cost-small-business" },
        { label: "Missed call text-back ROI", href: "/missed-call-text-back-roi-small-business" },
        { label: "Missed call text-back vs. voicemail", href: "/missed-call-text-back-vs-voicemail-for-service-businesses" },
        { label: "Missed call text-back vs. AI phone answering", href: "/missed-call-text-back-vs-ai-phone-answering-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should be verified before missed-call text-back goes live?",
      answer:
        "At minimum: trustworthy answered-call filtering, clear business-hours and after-hours paths, a first message that creates the right next step, reliable reply routing, CRM visibility, and obvious ownership after the caller responds. If those pieces are still fuzzy, the launch is not ready.",
    },
    {
      question: "What should I test before turning on missed-call text-back?",
      answer:
        "Test answered-call false positives, repeat callers, duplicate-contact behavior, angry or urgent replies, after-hours timing, booking-link flow, existing-customer replies, and any path where a human should take over quickly. The real test is whether the workflow behaves responsibly when the caller is off the happy path.",
    },
    {
      question: "How is this different from the missed-call text-back setup-help page?",
      answer:
        "The setup-help page explains what a good implementation project should include and when setup help is worth paying for. This page is narrower: the go-live checklist that helps you decide whether the workflow is actually safe enough to launch now.",
    },
    {
      question: "How is this different from the missed-call text-back setup-mistakes page?",
      answer:
        "The setup-mistakes page explains the failure patterns that usually create wrong texts, duplicate cleanup, and weak routing. This page turns those risks into a practical release gate: what has to be verified, tested, and owned before the workflow goes live.",
    },
    {
      question: "When should I delay launch instead of forcing missed-call text-back live?",
      answer:
        "Delay launch when answered-call filtering is still inconsistent, after-hours logic is still guessed, reply ownership is unclear, the CRM cannot show what happened after the text fired, or ugly-case testing still breaks the flow. A slightly later clean launch is usually cheaper than a fast launch the team stops trusting after a few bad texts.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners who are close to launching missed-call text-back and want a safer first release instead of a cleanup project a few weeks later",
  ctaHeading: "Need a second opinion before missed-call text-back goes live?",
  ctaText:
    "Book a 30-minute call. We will review your trigger logic, schedule rules, reply routing, next-step path, CRM visibility, and ugly-case tests so you can decide whether the workflow is ready now, needs a narrower first launch, or should wait until the release risk is lower.",
  ctaSubtext:
    "Useful if you are already near go-live and want to avoid teaching the team that missed-call text-back is noisy or unreliable after the first few live callers.",
  relatedLinks: [
    { label: "Missed call text-back for service businesses", href: "/missed-call-text-back-for-service-businesses" },
    { label: "Missed call text-back setup help", href: "/missed-call-text-back-setup-for-service-businesses" },
    { label: "Missed call text-back setup mistakes", href: "/missed-call-text-back-setup-mistakes-small-business" },
    { label: "Missed call text-back setup vs. DIY", href: "/missed-call-text-back-setup-vs-diy-small-business" },
    { label: "Missed call text-back cost", href: "/missed-call-text-back-cost-small-business" },
    { label: "Missed call text-back ROI", href: "/missed-call-text-back-roi-small-business" },
    { label: "Missed call text-back vs. voicemail", href: "/missed-call-text-back-vs-voicemail-for-service-businesses" },
    { label: "Missed call text-back vs. AI phone answering", href: "/missed-call-text-back-vs-ai-phone-answering-for-service-businesses" },
  ],
};

export default data;
