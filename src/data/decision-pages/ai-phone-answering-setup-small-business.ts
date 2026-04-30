import {
  Phone,
  Settings,
  Workflow,
  CheckCircle2,
  XCircle,
  ClipboardList,
  ArrowUpRight,
  Clock,
  Route,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-phone-answering-setup-small-business",
  metaTitle:
    "AI Phone Answering Setup for Small Business — What to Configure Before Launch | Dmytro AI",
  metaDescription:
    "What goes into setting up AI phone answering for a small business? Setup scope, handoff logic, call routing, CRM connections, and when professional setup help is worth paying for versus a lighter workflow.",
  badgeText: "Phone Setup",
  badgeIcon: Settings,
  h1: "AI Phone Answering Setup for Small Business",
  heroIntro:
    "Most AI phone answering projects do not fail because the voice platform is bad. They fail because the setup was incomplete. The system goes live without clear handoff rules, without tested transfer logic, without a plan for what happens when callers say something unexpected, and without the CRM or calendar connections that make the call outcome useful. The difference between an AI phone system that actually works and one that frustrates callers is almost always in setup scope — what was configured before launch and how carefully the edge cases were tested. This page covers what a small business should expect from a proper AI phone answering setup, when professional implementation help is worth the spend, and when a lighter workflow handles the real need.",
  heroSubtext:
    "Below: what setup actually involves, the handoff logic that matters most, what should be configured before launch, and how to tell whether you need full setup help or a simpler path.",
  sections: [
    {
      type: "cards",
      title: "What AI phone answering setup actually covers",
      subtitle:
        "Setup is not just connecting a phone number. These are the real implementation layers:",
      items: [
        {
          icon: Phone,
          title: "Call flow design and greeting logic",
          body: "Mapping what the AI says when it picks up, how it identifies the caller's intent, and what paths it follows for different call types. A plumbing company handling emergency calls needs a completely different opening than a med spa fielding appointment requests.",
        },
        {
          icon: Route,
          title: "Handoff and transfer rules",
          body: "Defining when the AI should transfer to a human, when it should take a message, and when it should book directly. This includes office-hours logic, emergency escalation, VIP routing, and what happens when the transfer target does not answer.",
        },
        {
          icon: Workflow,
          title: "CRM, calendar, and post-call automation",
          body: "Connecting the call outcome to your real systems: contact creation, appointment booking, transcript logging, summary delivery, SMS follow-up triggers, and pipeline updates. Without these connections, the call is answered but nothing useful happens downstream.",
        },
        {
          icon: ShieldCheck,
          title: "Edge-case testing and failure paths",
          body: "Testing what happens when callers interrupt, give unclear answers, ask off-script questions, or hang up mid-transfer. A setup that only works for clean demo calls will break within the first week of real traffic.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What should be configured before launch",
      subtitle:
        "These are the setup decisions that protect call quality from day one:",
      items: [
        {
          icon: ClipboardList,
          title: "Call routing by time of day and caller intent",
          body: "Office hours, after hours, weekends, and holidays should each have clear paths. A call at 2 PM and a call at 10 PM usually need different handling even if the caller asks the same question.",
        },
        {
          icon: Route,
          title: "Transfer thresholds and escalation rules",
          body: "Define exactly when the AI should stop trying to help and route to a human. Urgent calls, high-value callers, complex requests, and frustrated callers all need explicit transfer conditions — not a generic fallback.",
        },
        {
          icon: Wrench,
          title: "Booking rules and service-area constraints",
          body: "If the system books appointments, it needs to know appointment types, buffer times, service areas, technician availability, and what to do when the calendar is full. Incomplete booking setup creates more problems than no booking at all.",
        },
        {
          icon: ArrowUpRight,
          title: "Post-call actions and notification rules",
          body: "Every answered call should produce a useful outcome: a CRM record, a booking, a summary sent to the right person, or a follow-up task. Decide before launch what each call type should trigger downstream.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When setup help is worth paying for — and when it is not",
      subtitle:
        "Professional setup makes sense when the workflow is complex enough that getting it wrong wastes more than the setup cost:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth paying for setup help",
          variant: "green",
          items: [
            "You need live transfer to humans with clear escalation rules and fallback paths",
            "The system must book appointments with real scheduling constraints like service areas, technician availability, or appointment types",
            "Multiple call types need different handling: emergency, routine, existing customer, new inquiry",
            "CRM integration, transcript logging, and post-call automation need to work reliably from day one",
            "You do not have someone internal who can test call flows, tune prompts, and debug edge cases across dozens of real scenarios",
          ],
        },
        {
          icon: XCircle,
          heading: "A lighter path is probably enough",
          variant: "neutral",
          items: [
            "Your main need is after-hours message capture without live booking or transfers",
            "Call volume is low enough that a missed-call text-back covers most of the gap",
            "The phone workflow is simple: greet, capture name and reason, send a summary to the owner",
            "You are comfortable testing and tuning call flows yourself using the platform's tools",
            "The real bottleneck is not phone answering — it is what happens after the call",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Common setup mistakes that break phone workflows",
      subtitle:
        "These are the implementation gaps that cause most early failures:",
      blocks: [
        {
          heading: "Launching without testing real caller behavior",
          body: "Demo calls with a script are not real testing. Real callers interrupt, mumble, ask two questions at once, give wrong information, and get frustrated when the system does not understand them. Setup must include adversarial testing with messy, realistic call scenarios.",
        },
        {
          heading: "Skipping transfer logic because it seems simple",
          body: "Transfer rules sound easy until you map the edge cases. What happens when the transfer target is busy? When the caller needs a specific person? When it is after hours but the call is urgent? Every unmapped transfer scenario becomes a dropped call in production.",
        },
        {
          heading: "Connecting the phone number before the downstream systems are ready",
          body: "Answering the call is only half the job. If the CRM connection is not working, the calendar integration is incomplete, or post-call notifications are not configured, the system answers calls but nothing useful happens afterward. That creates a worse experience than voicemail because the caller thinks their request was handled.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "This page uses published proof already on the site. The framing is setup scope and implementation quality, not pricing or platform comparison.",
      studies: [
        {
          industry: "Restaurant / live phone setup",
          headline: "Paris Cafe shows what proper phone setup actually delivers",
          body: "The Paris Cafe case study demonstrates the downstream value of getting phone setup right: after-hours coverage went from 0% to 100% and management recovered roughly 15 hours per week. That result required proper call flow design, handoff logic, and integration work — not just connecting a phone number.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Phone answering fit",
          headline: "The service-business phone-answering page explains when live answering is the right layer",
          body: "Before investing in setup, the broader phone-answering guide helps small businesses decide whether live AI answering is the right fit versus simpler alternatives like missed-call text-back or voicemail with fast callbacks.",
          link: "/ai-phone-answering-for-service-businesses",
        },
        {
          industry: "Phone answering pricing",
          headline: "The cost page covers what to budget once you have decided to move forward",
          body: "Once setup scope is clear, the AI phone answering cost page breaks down realistic small-business pricing ranges for different build complexities — from basic after-hours answering to richer booking and qualification workflows.",
          link: "/ai-phone-answering-cost-small-business",
        },
      ],
      links: [
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "AI phone answering launch checklist for small business", href: "/ai-phone-answering-launch-checklist-small-business" },
        { label: "AI phone answering cost for small business", href: "/ai-phone-answering-cost-small-business" },
        { label: "AI phone answering ROI for small business", href: "/ai-phone-answering-roi-small-business" },
        { label: "AI voice agent setup vs DIY for small business", href: "/ai-voice-agent-setup-vs-diy-small-business" },
        { label: "AI voice agent launch checklist for small business", href: "/ai-voice-agent-launch-checklist-small-business" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does AI phone answering setup involve for a small business?",
      answer:
        "Setup covers call flow design, greeting and intent logic, handoff and transfer rules, CRM and calendar connections, post-call automation, and edge-case testing. The goal is a phone system that handles real callers reliably, not just clean demo calls.",
    },
    {
      question: "How long does setup usually take?",
      answer:
        "A focused phone-answering setup for a small business typically takes one to three weeks depending on complexity. Simple after-hours answering is faster. Builds with live booking, transfer rules, and CRM integration take longer because each layer needs real testing.",
    },
    {
      question: "Can I set up AI phone answering myself?",
      answer:
        "For simple message-capture or after-hours greeting workflows, many platforms offer self-service tools that work. Once the build requires transfer logic, booking constraints, CRM integration, or multi-path call routing, professional setup usually saves more time and failed calls than it costs.",
    },
    {
      question: "What is the most common setup mistake?",
      answer:
        "Launching without testing messy real-world caller behavior. Demo calls with a script always work. Real callers interrupt, give vague answers, ask unexpected questions, and get frustrated. Setup that does not include adversarial testing breaks quickly.",
    },
    {
      question: "How is this different from the AI voice agent setup pages?",
      answer:
        "This page focuses specifically on phone answering: picking up inbound calls, handling routine inquiries, and routing or booking callers. The voice agent setup pages cover broader conversational AI workflows that may include outbound calls, lead qualification sequences, and richer multi-step interactions.",
    },
  ],
  faqSubtitle:
    "Practical answers for small business owners evaluating AI phone answering implementation",
  ctaHeading: "Want to get AI phone answering set up properly?",
  ctaText:
    "Book a 30-minute call. We will look at your inbound call patterns, handoff rules, booking needs, and downstream systems, then scope the narrowest setup that handles your real phone coverage gap.",
  ctaSubtext:
    "No generic demo. Just a practical conversation about what your phone setup actually needs.",
  relatedLinks: [
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "AI phone answering launch checklist for small business", href: "/ai-phone-answering-launch-checklist-small-business" },
    { label: "AI phone answering setup mistakes for small business", href: "/ai-phone-answering-setup-mistakes-small-business" },
    { label: "AI phone answering cost for small business", href: "/ai-phone-answering-cost-small-business" },
    { label: "AI phone answering ROI for small business", href: "/ai-phone-answering-roi-small-business" },
    { label: "AI phone answering setup vs. DIY for small business", href: "/ai-phone-answering-setup-vs-diy-small-business" },
    { label: "AI voice agent setup vs DIY for small business", href: "/ai-voice-agent-setup-vs-diy-small-business" },
    { label: "AI voice agent launch checklist for small business", href: "/ai-voice-agent-launch-checklist-small-business" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
