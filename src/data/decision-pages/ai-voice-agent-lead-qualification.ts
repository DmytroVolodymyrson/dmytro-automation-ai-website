import {
  Phone,
  CalendarCheck,
  Clock,
  DollarSign,
  MessageSquare,
  Zap,
  CheckCircle2,
  XCircle,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-voice-agent-lead-qualification",
  metaTitle:
    "AI Voice Agent for Lead Qualification — When It Works, What It Costs, and What to Expect | Dmytro AI",
  metaDescription:
    "How AI voice agents qualify leads for service businesses. Learn when voice qualification works, what it costs, how it compares to manual callback workflows, and where it is not the right fit.",
  badgeText: "Voice AI Guide",
  badgeIcon: Phone,
  h1: "AI Voice Agent for Lead Qualification",
  heroIntro:
    "If your best leads call first, an AI voice agent can qualify them before your team ever picks up the phone. It answers immediately, asks the right screening questions, books good-fit appointments, and routes edge cases to a human. This is not right for every business, but it is one of the highest-leverage automations for service companies that lose leads to missed calls, slow callback times, and inconsistent intake.",
  heroSubtext:
    "Below: what voice qualification actually handles, how it compares to manual callback workflows, what it typically costs, and the situations where you should not use it.",
  sections: [
    {
      type: "cards",
      title: "What a voice agent can qualify on the first call",
      subtitle:
        "A good lead-qualification flow is not just \"take a message and call back later.\" It screens for fit, urgency, and next steps while the lead is still engaged:",
      items: [
        {
          icon: Phone,
          title: "Answer instantly",
          body: "The call gets picked up on the first ring during business hours, after hours, and on weekends. That alone changes the economics of lead qualification because the lead does not have to wait for a callback.",
        },
        {
          icon: MessageSquare,
          title: "Ask the same qualification questions every time",
          body: "Service needed, location, urgency, budget range, timeline, and any disqualifiers you care about. The agent follows the intake logic exactly instead of relying on whoever happened to answer the phone.",
        },
        {
          icon: CalendarCheck,
          title: "Book or route in real time",
          body: "Qualified leads can go straight to a calendar, dispatch queue, or internal handoff. Poor-fit leads can be filtered or routed into a lower-priority follow-up path.",
        },
        {
          icon: FileText,
          title: "Log the conversation to your CRM",
          body: "Every call can create or update a CRM record with transcript, summary, contact details, qualification answers, and recommended next action. Your team starts with context instead of a vague note.",
        },
      ],
    },
    {
      type: "table",
      title: "AI voice qualification vs. manual callback workflow",
      subtitle:
        "Most businesses are really choosing between instant phone qualification and a slower callback process. Here is what changes when AI handles the first conversation:",
      headers: ["AI voice agent", "Manual callback workflow"],
      rows: [
        {
          label: "First response",
          values: ["Immediate — first ring", "Minutes to hours later, often next business day"],
        },
        {
          label: "After-hours capture",
          values: ["Strong — still qualifies and books", "Weak — voicemail, web form, or missed lead"],
        },
        {
          label: "Qualification consistency",
          values: ["Same questions every time", "Depends on who calls back and how rushed they are"],
        },
        {
          label: "Booking speed",
          values: ["Can book during the call", "Usually requires phone tag or separate scheduling follow-up"],
        },
        {
          label: "CRM logging",
          values: ["Automatic transcript, summary, and tags", "Manual notes if someone remembers to enter them"],
        },
        {
          label: "Cost profile",
          values: ["Setup + low monthly software and usage costs", "Ongoing labor cost plus missed-opportunity cost from delays"],
        },
        {
          label: "Best for",
          values: ["High-intent inbound calls with repeatable intake logic", "Low call volume or highly consultative sales calls"],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit vs. bad fit",
      subtitle:
        "This page is only worth building around if the use case is commercially real. Here is the honest version:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Strong fit",
          variant: "green",
          items: [
            "You lose leads to missed calls, after-hours calls, or slow callback times",
            "Most inbound calls follow a repeatable intake pattern before someone books",
            "Phone is a primary lead channel, not just a support channel",
            "Your team needs cleaner CRM data and more consistent qualification",
            "One extra booked job or consultation per week would more than cover the cost",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Every call requires detailed technical diagnosis or custom quoting from the first minute",
            "You get very low inbound call volume and already answer nearly every call live",
            "Your market expects a named human relationship from the first interaction",
            "You do not yet have a clear definition of what counts as a qualified lead",
            "You want AI to improvise outside a tight, tested call scope",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What makes voice qualification work in the real world",
      subtitle:
        "The technology is not the hard part. The workflow design is:",
      items: [
        {
          icon: Zap,
          title: "The script needs business logic, not generic prompts",
          body: "A useful voice agent is built around the decisions your team already makes: which jobs are worth booking, what counts as urgent, who gets routed where, and what information must be collected before a handoff.",
        },
        {
          icon: Clock,
          title: "Speed-to-lead is the actual ROI lever",
          body: "Most businesses do not lose the lead because the intake questions were imperfect. They lose the lead because nobody responded while the buyer was ready to talk. Voice qualification shortens that gap to nearly zero.",
        },
        {
          icon: DollarSign,
          title: "The cost is usually justified by a small lift in booked calls",
          body: "For businesses where a single booked consultation, service call, or estimate is worth meaningful revenue, the ROI math is simple. You do not need dozens of extra wins per month. Often one or two recovered leads covers the system.",
        },
        {
          icon: ArrowUpRight,
          title: "Escalation paths matter more than perfect AI",
          body: "The agent should know when to transfer, create a priority callback, or step aside. A voice agent that qualifies and routes well is far more valuable than one trying to fake expertise it does not have.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "There is direct proof for voice handling and adjacent proof for automated qualification and CRM routing:",
      studies: [
        {
          industry: "Restaurant",
          headline: "After-hours calls answered instead of lost",
          body: "For The Paris Café, a VAPI voice agent now answers every after-hours call and routes reservation inquiries automatically. That is direct proof that a voice workflow can capture and qualify inbound demand while the team is offline.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce",
          headline: "Qualification data logged and acted on automatically",
          body: "The WheelsFeels CRM build shows the back-half of the same system: leads routed, segmented, and followed up automatically instead of sitting untouched. Voice qualification is strongest when it plugs into this kind of downstream workflow.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Info business",
          headline: "Automated qualification at scale",
          body: "The Instagram pipeline proves the qualification logic itself can be systemized. Different channel, same principle: define what a good lead looks like, score it consistently, and route only the right opportunities forward.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "AI phone answering guide", href: "/ai-phone-answering-for-service-businesses" },
        { label: "AI appointment setter guide", href: "/ai-appointment-setter" },
        { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is this different from an AI appointment setter?",
      answer:
        "Yes. Appointment setting is usually the end result. Lead qualification happens one step earlier. A voice agent for qualification screens the caller, collects the right details, and decides whether they should be booked, routed, or followed up differently. Many systems do both, but qualification is the decision layer that makes booking useful instead of chaotic.",
    },
    {
      question: "What kinds of businesses benefit most from voice qualification?",
      answer:
        "Service businesses where phone calls are high intent: HVAC, dental, legal, real estate, mortgage, home services, and other appointment-driven businesses. It is especially valuable when calls come in after hours or when field teams cannot answer consistently during the day.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "A narrow voice qualification flow can often be live in 1-2 weeks. More complex setups with calendar booking, CRM sync, dispatch routing, and fallback logic usually take 2-3 weeks because the edge cases need to be tested properly.",
    },
    {
      question: "What does an AI voice qualification system usually cost?",
      answer:
        "Most small-business builds land somewhere in the low-thousands for setup, with ongoing platform and usage costs that are usually far below even part-time phone coverage. The important comparison is not just software cost — it is software cost versus lost leads, missed after-hours calls, and staff time spent chasing callbacks.",
    },
    {
      question: "When should I avoid this and keep qualification human?",
      answer:
        "If nearly every call requires deep expertise, delicate emotional handling, or a custom quote before any next step can be offered, start with human intake. AI works best when you can define a tight call scope and a clear handoff point.",
    },
  ],
  faqSubtitle:
    "Practical questions about using AI voice agents to qualify inbound leads",
  ctaHeading: "Want to know if voice qualification fits your lead flow?",
  ctaText:
    "Book a 30-minute call. We will look at how your leads come in, what makes someone qualified in your business, and whether an AI voice workflow would create real ROI or just add noise.",
  ctaSubtext:
    "No hype. Just a practical fit check based on your call flow and sales process.",
  relatedLinks: [
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "AI chatbot vs. AI voice agent", href: "/ai-chatbot-vs-ai-voice-agent-for-lead-qualification" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
