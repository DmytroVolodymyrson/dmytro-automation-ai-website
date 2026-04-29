import {
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
  MessageSquare,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-setup-for-service-businesses",
  metaTitle:
    "Missed Call Text-Back Setup for Service Businesses — What a First Build Should Include | Dmytro AI",
  metaDescription:
    "What goes into setting up missed call text-back for a service business? Setup scope, SMS trigger logic, response timing, CRM connections, after-hours rules, and when professional setup help is worth paying for versus building it yourself.",
  badgeText: "Text-Back Setup",
  badgeIcon: Settings,
  h1: "Missed Call Text-Back Setup for Service Businesses",
  heroIntro:
    "Missed call text-back is one of the simplest automations a service business can deploy, but simple does not mean setup-proof. The workflow has a narrow job — detect a missed call, send an immediate text, open a two-way thread, and log the lead — yet most first builds break on details that sound trivial until they cause real problems: the SMS fires on calls the team actually answered, the after-hours message goes out during business hours, the CRM creates duplicate contacts, or the booking link lands on a page that does not work on mobile. The gap between a text-back system that reliably recovers missed calls and one that sends confusing texts to people you already spoke with is almost always in setup scope. This page covers what a first missed-call text-back build should actually include, what configuration decisions matter most, and when professional setup help is worth paying for versus wiring it yourself.",
  heroSubtext:
    "Below: what setup actually involves, the trigger and timing logic that matters most, what should be configured before launch, and how to tell whether you need setup help or can handle the build yourself.",
  sections: [
    {
      type: "cards",
      title: "What missed call text-back setup actually covers",
      subtitle:
        "The workflow is simple, but setup is more than connecting a phone number to an SMS tool. These are the real implementation layers:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call detection and trigger logic",
          body: "Defining what counts as a missed call versus an answered call, a voicemail, or an internal transfer. The trigger must fire only on genuinely missed inbound calls — not on outbound dials, answered calls that disconnected early, or spam numbers. Getting the trigger wrong means texts go to people your team already talked to.",
        },
        {
          icon: Clock,
          title: "Response timing and message rules",
          body: "Setting the SMS delay window (typically under 30 seconds), the message content for business hours versus after hours, and whether the text includes a booking link, a question, or both. The first message should open a conversation, not deliver a brochure.",
        },
        {
          icon: Route,
          title: "After-hours and business-hours routing",
          body: "Configuring separate message paths and escalation rules for calls missed during office hours, after hours, weekends, and holidays. A missed call at 2 PM usually means the team was busy. A missed call at 9 PM means nobody is coming back tonight — the message and next step should reflect that difference.",
        },
        {
          icon: Workflow,
          title: "CRM logging and contact creation",
          body: "Every missed call should create or update a contact record with the phone number, call timestamp, text-back status, and any conversation that follows. Without CRM logging, recovered leads exist only in a text thread that gets buried within hours.",
        },
        {
          icon: ShieldCheck,
          title: "Duplicate and edge-case prevention",
          body: "Handling what happens when the same number calls multiple times, when a caller texts back after the team already called them, when the number belongs to an existing customer, or when the call was from a known spam source. Every unmapped edge case becomes an embarrassing or confusing text in production.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What should be configured before launch",
      subtitle:
        "These are the setup decisions that protect response quality and prevent the most common first-week failures:",
      items: [
        {
          icon: ClipboardList,
          title: "Trigger filtering rules",
          body: "Define which calls should not trigger a text-back: answered calls, internal transfers, known spam numbers, calls shorter than a ring threshold, and calls from numbers already in an active text thread. Launching without trigger filters is the single most common cause of embarrassing first-week texts.",
        },
        {
          icon: Clock,
          title: "Business-hours schedule and holiday logic",
          body: "Set the exact hours, days, and exceptions that control which message path fires. If the schedule is wrong, callers get after-hours messages at noon or business-hours messages on Thanksgiving. Most platforms let you set a schedule once, but holidays and seasonal hours need manual updates.",
        },
        {
          icon: Wrench,
          title: "CRM field mapping and duplicate handling",
          body: "Map the phone number, call timestamp, text-back status, and conversation history to the right CRM fields. Configure duplicate detection so repeat missed calls update the existing record instead of creating a new contact each time.",
        },
        {
          icon: ArrowUpRight,
          title: "Urgency keywords and escalation paths",
          body: "For businesses that handle emergencies, define which text replies should trigger an immediate alert to the on-call person instead of following the standard reply flow. A plumber's missed call text-back system needs an escalation path that a med spa's probably does not.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When setup help is worth paying for — and when it is not",
      subtitle:
        "Text-back is a narrow workflow. Professional setup makes sense when the integration and edge-case testing would take you longer than paying someone who has done it before:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth paying for setup help",
          variant: "green",
          items: [
            "Your phone system or CRM has integration quirks — non-standard call detection, limited API, or incomplete webhook support",
            "You need after-hours routing, urgency escalation, and CRM logging working reliably from day one",
            "Missed calls come from multiple numbers or locations and each needs different handling",
            "You do not have someone internal who can test trigger logic, debug CRM connections, and handle edge cases",
            "The cost of sending wrong texts to answered callers or existing customers is higher than the setup fee",
          ],
        },
        {
          icon: XCircle,
          heading: "You can probably handle it yourself",
          variant: "neutral",
          items: [
            "Your CRM platform has a built-in missed-call text-back feature with a simple toggle",
            "You only need a single message for all missed calls without after-hours or urgency logic",
            "Call volume is low enough that you can test and fix issues manually in the first week",
            "You are comfortable working with your platform's automation builder and phone integration",
            "The workflow is truly just one trigger, one text, one booking link — no CRM routing or escalation",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Common setup mistakes that break text-back workflows",
      subtitle:
        "These are the implementation gaps that cause most early failures:",
      blocks: [
        {
          heading: "Launching without filtering answered calls",
          body: "The most common first-week failure is texting people your team already spoke with. If the trigger fires on all calls to a tracking number instead of only unanswered inbound calls, every caller gets a confusing 'sorry we missed you' text — including the ones who just had a conversation with your office.",
        },
        {
          heading: "Using the same message for business hours and after hours",
          body: "A missed call at 2 PM means someone will probably call back in minutes. A missed call at 9 PM means nobody is available until morning. Using the same message for both situations either overpromises speed or undersells availability. After-hours messages should set realistic expectations and offer self-service options.",
        },
        {
          heading: "Skipping CRM logging because the workflow seems too simple",
          body: "Text-back without CRM logging means recovered leads exist only in a text thread on someone's phone. After a few days, nobody remembers which missed calls were followed up and which were not. Even a basic missed-call text-back system needs to create a contact record with a timestamp and conversation status.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "There is no dedicated horizontal missed-call text-back setup case study on this site. The proof comes from the existing cluster pages and adjacent published results that use the same operational patterns:",
      studies: [
        {
          industry: "Restaurant / missed-call recovery",
          headline: "Paris Cafe shows what proper missed-call capture actually delivers",
          body: "The Paris Cafe case study demonstrates the downstream value of getting phone-recovery setup right: after-hours coverage went from 0% to 100% and management recovered roughly 15 hours per week. The missed-call detection, fast response, and CRM logging that made that result possible are the same setup layers that text-back requires — just applied to a voice agent instead of SMS.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Text-back parent page",
          headline: "The parent page covers when text-back is the right workflow",
          body: "Before investing in setup, the missed call text-back parent page covers when SMS-first recovery is enough versus when you need a fuller system. If you are still deciding whether text-back fits your call pattern, start there before scoping a build.",
          link: "/missed-call-text-back-for-service-businesses",
        },
        {
          industry: "Text-back cost",
          headline: "The cost page covers what to budget once setup scope is clear",
          body: "Once you know what the build should include, the missed call text-back cost page breaks down realistic pricing for different setup complexities — from a simple single-message trigger to a build with after-hours logic, urgency routing, and CRM integration.",
          link: "/missed-call-text-back-cost-small-business",
        },
      ],
      links: [
        { label: "Missed call text-back for service businesses", href: "/missed-call-text-back-for-service-businesses" },
        { label: "Missed-call text-back setup vs. DIY for small business", href: "/missed-call-text-back-setup-vs-diy-small-business" },
        { label: "Missed call text-back cost for small business", href: "/missed-call-text-back-cost-small-business" },
        { label: "Missed call text-back ROI for small business", href: "/missed-call-text-back-roi-small-business" },
        { label: "Missed call text-back vs. AI phone answering", href: "/missed-call-text-back-vs-ai-phone-answering-for-service-businesses" },
        { label: "AI phone answering setup for small business", href: "/ai-phone-answering-setup-small-business" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does missed call text-back setup involve for a service business?",
      answer:
        "Setup covers missed-call trigger logic, response timing rules, business-hours versus after-hours message paths, CRM contact creation and duplicate handling, booking link or next-step configuration, and edge-case testing. The goal is a text-back system that fires only on genuinely missed calls and creates a useful lead record every time.",
    },
    {
      question: "How long does setup usually take?",
      answer:
        "A focused text-back setup typically takes a few days to a week depending on complexity. A single-message trigger with basic CRM logging is faster. Builds with after-hours routing, urgency escalation, multi-location numbers, and detailed CRM field mapping take longer because each layer needs real testing with actual missed calls.",
    },
    {
      question: "Can I set up missed call text-back myself?",
      answer:
        "For platforms with a built-in missed-call text-back toggle and simple CRM logging, self-setup works. Once the build requires custom trigger filtering, after-hours logic, urgency routing, or CRM field mapping across a non-standard phone integration, professional setup usually saves more time and embarrassing texts than it costs.",
    },
    {
      question: "What is the most common setup mistake?",
      answer:
        "Texting people your team already spoke with. If the trigger fires on all inbound calls instead of only unanswered ones, every caller gets a 'sorry we missed you' text — including the ones who just finished a conversation with your office. Proper trigger filtering is the single most important setup step.",
    },
    {
      question: "How is this different from the text-back parent page?",
      answer:
        "The parent page covers what missed call text-back is and when it fits. This page focuses specifically on setup scope: what needs to be configured before launch, what breaks if it is not, and when professional implementation help is worth paying for versus handling the build yourself.",
    },
  ],
  faqSubtitle:
    "Practical answers for service business owners evaluating missed call text-back implementation",
  ctaHeading: "Want to get missed call text-back set up properly?",
  ctaText:
    "Book a 30-minute call. We will look at your phone system, CRM, missed-call patterns, and after-hours needs, then scope the narrowest build that recovers calls reliably without sending texts to people you already spoke with.",
  ctaSubtext:
    "No generic demo. Just a practical conversation about what your text-back setup actually needs.",
  relatedLinks: [
    { label: "Missed call text-back for service businesses", href: "/missed-call-text-back-for-service-businesses" },
    { label: "Missed-call text-back setup vs. DIY for small business", href: "/missed-call-text-back-setup-vs-diy-small-business" },
    { label: "Missed call text-back cost for small business", href: "/missed-call-text-back-cost-small-business" },
    { label: "Missed call text-back ROI for small business", href: "/missed-call-text-back-roi-small-business" },
    { label: "Missed call text-back vs. AI phone answering", href: "/missed-call-text-back-vs-ai-phone-answering-for-service-businesses" },
    { label: "AI phone answering setup for small business", href: "/ai-phone-answering-setup-small-business" },
    { label: "AI lead follow-up setup for service businesses", href: "/ai-lead-follow-up-setup-for-service-businesses" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
