import {
  DollarSign,
  MessageSquare,
  Clock,
  PhoneMissed,
  Bot,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Calculator,
  Users,
  Phone,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-cost-small-business",
  metaTitle:
    "Missed Call Text-Back Cost for Small Business — Real Pricing Guide | Dmytro AI",
  metaDescription:
    "What does missed-call text-back cost for a small business? Practical pricing ranges for SMS-first missed-call recovery, CRM logging, booking links, escalation rules, and when a lighter text-back layer is enough.",
  badgeText: "Phone Recovery Pricing",
  badgeIcon: DollarSign,
  h1: "Missed Call Text-Back Cost for Small Business",
  heroIntro:
    "Most small businesses should expect a focused missed-call text-back build to land somewhere between $1.2K and $3.5K, with monthly running costs often in the $20-$120 range before higher SMS volume, heavier CRM complexity, or ongoing support. The useful question is not just 'what does text-back cost?' It is 'what layer of phone-recovery problem am I actually solving?' A business that only needs a fast acknowledgment text and booking link should not buy the same stack as a business that needs after-hours logic, qualification questions, owner alerts, CRM routing, and escalation rules for urgent calls. This page stays narrow on the pricing decision for missed-call text-back specifically — not full AI phone answering, and not the broader missed-call follow-up stack — so you can budget the lightest phone layer that still protects revenue.",
  heroSubtext:
    "Below: realistic build and monthly cost ranges, what those price bands usually include, what pushes the number up, where small businesses overspend, and when text-back is the right first layer versus when it is too light for the call pattern.",
  sections: [
    {
      type: "table",
      title: "What missed-call text-back usually costs",
      subtitle:
        "These are realistic small-business ranges for the most common SMS-first missed-call recovery builds:",
      headers: ["Build Cost", "Monthly Running Cost", "Typical Timeline"],
      rows: [
        {
          label: "Basic missed-call acknowledgment + booking link",
          values: ["$1.2K-$1.8K", "$20-$50", "3-5 days"],
        },
        {
          label: "Two-way text-back with CRM logging",
          values: ["$1.5K-$2.4K", "$25-$70", "4-7 days"],
        },
        {
          label: "Text-back with service-type or lead-source routing",
          values: ["$2K-$2.8K", "$35-$90", "1-2 weeks"],
        },
        {
          label: "After-hours text-back with next-morning handoff rules",
          values: ["$2.2K-$3.2K", "$40-$100", "1-2 weeks"],
        },
        {
          label: "Urgency-aware text-back with escalation logic",
          values: ["$2.8K-$3.5K+", "$50-$120", "1-3 weeks"],
        },
      ],
    },
    {
      type: "prose",
      title: "What those pricing bands actually buy",
      subtitle:
        "The number only becomes useful when you tie it to the operating problem the workflow is solving:",
      blocks: [
        {
          heading: "$1.2K-$1.8K range: fast acknowledgment and one clear next step",
          body: "This is the right band when the main leak is simple: calls get missed, nobody follows up quickly enough, and callers disappear before your team can call back. Expect a text within seconds of the missed call, a short opening message, a booking link or reply path, and basic logging. It is the cheapest layer between passive voicemail and a heavier phone workflow.",
        },
        {
          heading: "$1.8K-$2.8K range: real ownership and routing logic",
          body: "This is where the system starts doing more than firing off a generic text. Expect CRM contact creation, simple qualification prompts, owner or office alerts, business-hours versus after-hours message logic, and better routing when the caller replies. This is the realistic range most small businesses should benchmark against when they want a production workflow instead of a gimmick.",
        },
        {
          heading: "$3K+ range: escalation rules and messier operating environments",
          body: "Once the workflow has to detect urgency, route by service type, handle multiple teams, or work around a messy CRM and unclear ownership, you are no longer paying for one SMS. You are paying for system design, testing, and failure-handling so the lighter text-back layer can still work safely in a real business.",
        },
      ],
    },
    {
      type: "cards",
      title: "What makes the price go up",
      subtitle:
        "Missed-call text-back pricing is mostly driven by workflow complexity, not by the word AI itself:",
      items: [
        {
          icon: MessageSquare,
          title: "Whether the workflow is one-way or truly conversational",
          body: "A simple 'sorry we missed your call' text is cheap. A workflow that keeps the thread alive, watches for replies, routes the right owner, and records the conversation cleanly costs more because it actually manages the lead instead of just acknowledging it.",
        },
        {
          icon: Clock,
          title: "Business-hours versus after-hours logic",
          body: "The message and next step should differ when the office is closed. Adding separate timing rules, morning handoff logic, and booking/callback paths for nights and weekends adds setup and testing time.",
        },
        {
          icon: Phone,
          title: "How much urgency detection is needed",
          body: "If certain calls need same-day escalation — burst pipe, no heat, emergency lockout, or another time-sensitive request — the workflow gets more expensive because it needs routing rules, alerts, and clearer human fallback instead of one generic text path.",
        },
        {
          icon: Users,
          title: "How messy the human process is behind the scenes",
          body: "If nobody agrees on who owns missed calls, how fast text threads should be answered, or when a caller should be pushed to booking versus callback, the project gets more expensive because the real work is workflow design before any automation goes live.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this is worth paying for — and when it is too light",
      subtitle:
        "This page is for businesses with a real missed-call leak, not owners shopping for AI because it sounds modern:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth the investment",
          variant: "green",
          items: [
            "You regularly miss inbound calls during jobs, after hours, or on weekends",
            "Most callers have straightforward requests that can survive a fast text reply",
            "One recovered job, estimate, or booked consult per month would matter financially",
            "Your team can follow up on text threads within a few hours once the lead is captured",
            "You want the cheapest useful phone layer before considering live AI phone answering",
          ],
        },
        {
          icon: XCircle,
          heading: "Probably too light for your situation",
          variant: "neutral",
          items: [
            "Callers usually need a real-time intake conversation before any next step makes sense",
            "Missed calls are frequent and callers expect a live answer immediately",
            "Your business handles many urgent requests that cannot sit in a text thread",
            "The bigger problem is messy office ownership and slow human follow-through after the text",
            "You are comparing a custom recovery workflow to a bare texting subscription and expecting them to cost the same",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to budget this without overbuilding",
      subtitle:
        "The easiest way to waste money is to buy a heavier phone stack before proving the smaller SMS-first layer:",
      items: [
        {
          icon: Calculator,
          title: "Start with the narrowest phone-recovery layer that protects revenue",
          body: "If the main leak is unanswered calls that could have become a text conversation, buy text-back first. Do not jump straight to full live AI phone answering unless your call pattern clearly demands a real-time voice conversation.",
        },
        {
          icon: AlertTriangle,
          title: "Do not ignore monthly texting and platform costs",
          body: "Twilio or phone-platform usage, CRM seats, sending fees, and hosting all add to the monthly number. Those costs are usually manageable, but they should be budgeted before launch instead of treated like a surprise later.",
        },
        {
          icon: TrendingUp,
          title: "Compare the price to one recovered missed-call opportunity per month",
          body: "That is the most useful sanity check. If one recovered estimate, consult, or service job per month covers a meaningful share of the build and running cost, the economics are usually credible.",
        },
        {
          icon: PhoneMissed,
          title: "Know the line between text-back and full missed-call follow-up",
          body: "Text-back is the lighter layer. If you also need voicemail transcription, multi-step sequences, deeper qualification, or complex re-engagement, the project is no longer just a text-back workflow. That scope shift changes the price and should be named honestly.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "There is no dedicated horizontal text-back cost case study on this site. The proof comes from adjacent published work and the large existing missed-call cluster already live:",
      studies: [
        {
          industry: "Restaurant / immediate response",
          headline: "Paris Cafe proves why fast call recovery is worth paying for",
          body: "The Paris Cafe case study shows the core economic logic behind phone-recovery workflows: after-hours calls stop dying in silence, the response happens immediately, and routine booking-style demand gets captured while the customer is still engaged. Missed-call text-back is the lighter version of that same recovery principle.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Horizontal workflow cluster",
          headline: "The parent and comparison pages define the lower-cost middle layer",
          body: "The existing missed-call text-back parent page and the text-back-versus-AI-phone-answering comparison page already frame where SMS-first recovery fits. This page stays narrower by focusing specifically on pricing, budget ranges, and scope control for that lighter layer.",
          link: "/missed-call-text-back-for-service-businesses",
        },
        {
          industry: "Cost-page sibling",
          headline: "Existing cost pages establish the same buying pattern",
          body: "The site already has strong pricing pages for lead follow-up, appointment setters, and setup-heavy systems. This page extends that same commercial pattern into the phone-recovery cluster without pretending text-back has the same complexity or budget profile as a live voice agent.",
          link: "/ai-lead-follow-up-cost-small-business",
        },
      ],
      links: [
        { label: "Missed call text-back for service businesses", href: "/missed-call-text-back-for-service-businesses" },
        { label: "Missed call text-back vs. AI phone answering", href: "/missed-call-text-back-vs-ai-phone-answering-for-service-businesses" },
        { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "AI lead follow-up cost", href: "/ai-lead-follow-up-cost-small-business" },
        { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
      ],
    },
    {
      type: "prose",
      title: "What small businesses usually get wrong about text-back pricing",
      subtitle:
        "These assumptions create bad buying decisions and disappointing rollout economics:",
      blocks: [
        {
          heading: "Mistaking a texting tool for a finished recovery workflow",
          body: "A cheap SMS tool is not the same thing as a working missed-call system. The value comes from the trigger logic, message timing, booking path, CRM logging, ownership alerts, and the rules that decide what happens when someone replies. That workflow design is what you are really paying for.",
        },
        {
          heading: "Buying live AI answering when the lighter layer would have solved most of the leak",
          body: "Many owners overbuy because live AI phone answering sounds more sophisticated. But if most missed calls only need a quick acknowledgment, a booking link, and a short human callback window, text-back is often the better first purchase. Prove the lighter layer first before funding the heavier stack.",
        },
        {
          heading: "Ignoring the cost of missed calls because nobody sends an invoice for them",
          body: "Manual callback lag feels free because it does not show up as software spend. It is not free. Every unanswered call that never turns into a text thread or callback is already a revenue leak. The question is whether the workflow costs less than the missed opportunities it recovers.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does missed-call text-back cost for a small business?",
      answer:
        "For most small businesses, a focused missed-call text-back workflow usually lands between $1.2K and $3.5K depending on CRM integration, after-hours logic, escalation rules, and whether the workflow only acknowledges the call or also manages routing and ownership. Monthly running costs are often in the $20-$120 range before heavier SMS volume or ongoing support.",
    },
    {
      question: "Why is this different from the generic missed-call text-back page?",
      answer:
        "The parent text-back page explains what the workflow is, when it fits, and how it compares with voicemail and AI phone answering. This page stays narrow on the buying decision: realistic budget ranges, what makes the price go up, and how to avoid paying for a heavier phone stack before you need it.",
    },
    {
      question: "What usually makes missed-call text-back expensive?",
      answer:
        "After-hours branching, CRM routing, ownership alerts, urgency escalation, two-way conversational handling, and messy human processes behind the scenes. The more the workflow has to do after the text is sent, the more setup and testing it needs.",
    },
    {
      question: "Can I start with a basic text-back workflow and expand later?",
      answer:
        "Yes. That is usually the smartest move. Start with the narrowest SMS-first layer that captures the lead and creates a clear next step, then expand into broader missed-call follow-up or live AI phone answering only if the call pattern proves the lighter layer is no longer enough.",
    },
    {
      question: "How do I know if the price is worth it?",
      answer:
        "Compare the build cost to one recovered estimate, consult, or service job per month. If one saved opportunity meaningfully offsets the cost — and your team is currently missing enough calls for that to happen — the economics are usually solid. If call volume is low or your team already responds fast, it may be overkill for now.",
    },
  ],
  faqSubtitle:
    "Practical answers about budgeting missed-call text-back for a small business",
  ctaHeading: "Want a realistic quote for a missed-call text-back workflow?",
  ctaText:
    "Book a 30-minute call. We will look at how many calls you are missing, what the lighter SMS-first layer should actually handle, and whether a focused text-back workflow is enough or your situation already points to a broader missed-call stack.",
  ctaSubtext:
    "No padded phone-AI proposal. Just a practical scope and cost discussion.",
  relatedLinks: [
    { label: "Missed call text-back for service businesses", href: "/missed-call-text-back-for-service-businesses" },
    { label: "Missed call text-back setup for service businesses", href: "/missed-call-text-back-setup-for-service-businesses" },
    { label: "Missed-call text-back setup vs. DIY for small business", href: "/missed-call-text-back-setup-vs-diy-small-business" },
    { label: "Missed call text-back vs. AI phone answering", href: "/missed-call-text-back-vs-ai-phone-answering-for-service-businesses" },
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "AI lead follow-up cost", href: "/ai-lead-follow-up-cost-small-business" },
    { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
    { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "Case studies", href: "/case-studies" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
