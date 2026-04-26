import {
  Scale,
  Bot,
  DollarSign,
  Clock,
  AlertTriangle,
  Zap,
  Headphones,
  RotateCcw,
  Link,
  FileText,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-voice-agent-vs-answering-service-for-small-business",
  metaTitle:
    "AI Voice Agent vs. Answering Service for Small Business — Honest Cost and Quality Comparison | Dmytro AI",
  metaDescription:
    "Compare AI voice agents and traditional answering services for small businesses. Side-by-side on monthly cost, after-hours coverage, booking accuracy, CRM logging, and caller experience.",
  badgeText: "Decision Guide",
  badgeIcon: Scale,
  h1: "AI Voice Agent vs. Answering Service for Small Business",
  heroIntro:
    "Answering services have been the standard way small businesses keep phones covered without hiring a full-time receptionist. They work — a real person picks up, takes a message, and usually sends you a summary. But AI voice agents now handle much of the same work faster, cheaper, and with tighter system integration. This guide compares both options honestly, including where answering services still have a real edge.",
  heroSubtext:
    "Below: what each option actually costs, where quality differs, and a practical framework for deciding which one fits your business today.",
  sections: [
    {
      type: "cards",
      title: "Two ways to keep phones covered",
      subtitle:
        "Both solve the same problem — your phone rings and you need it handled professionally. How they do it is different:",
      items: [
        {
          icon: Headphones,
          title: "Answering service",
          body: "A team of live operators answers your calls using scripts you provide. They take messages, transfer urgent calls, and handle basic intake. Pricing is usually per-minute or per-call. Quality depends on the service — some are excellent, many have high turnover and inconsistent operators. Works best when calls need empathy or judgment.",
        },
        {
          icon: Bot,
          title: "AI voice agent",
          body: "A trained AI agent answers your calls, follows your script precisely, qualifies leads, books appointments in real time, and logs everything to your CRM automatically. Available 24/7 with zero wait time. Quality is consistent — every caller gets the same handling regardless of time of day or call volume.",
        },
        {
          icon: Zap,
          title: "Hybrid approach",
          body: "AI handles the front line: after-hours calls, routine inquiries, appointment booking, and FAQ answers. Complex calls, complaints, or high-value prospects get routed to a live operator or your own staff. This gives you 24/7 coverage at AI pricing with human backup where it actually matters.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "The factors that matter most for small businesses choosing between these options:",
      headers: ["Answering Service", "AI Voice Agent"],
      rows: [
        {
          label: "Monthly cost",
          values: [
            "$200-$1,000+ depending on minutes and plan tier",
            "$50-$200 software + per-minute usage",
          ],
        },
        {
          label: "Per-call cost",
          values: [
            "$0.75-$2.50 per minute or $6-$15 per call",
            "$0.05-$0.15 per minute of talk time",
          ],
        },
        {
          label: "After-hours coverage",
          values: [
            "Available but usually at premium rates — 24/7 plans cost significantly more",
            "24/7/365, same cost regardless of time of day",
          ],
        },
        {
          label: "Hold times",
          values: [
            "Varies — during peak periods, shared operators mean your callers wait",
            "Zero wait time, unlimited concurrent calls",
          ],
        },
        {
          label: "Script consistency",
          values: [
            "Depends on the operator — new hires miss details, turnover causes drift",
            "Follows your script exactly, every call, no drift over time",
          ],
        },
        {
          label: "CRM integration",
          values: [
            "Basic — typically email or text summaries, someone still enters data manually",
            "Direct integration — auto-logs calls, transcripts, and actions to your CRM",
          ],
        },
        {
          label: "Appointment booking",
          values: [
            "Manual — operator checks availability and may still need a callback",
            "Real-time — checks your calendar and books during the call",
          ],
        },
        {
          label: "Complex call handling",
          values: [
            "Better — humans adapt to emotion, unusual situations, and multi-topic calls",
            "Good for routine calls, escalates complex or sensitive ones to your team",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Neither is universally better. The right choice depends on your call patterns, budget, and how much of your call volume follows predictable scripts:",
      options: [
        {
          icon: Headphones,
          heading: "Answering service fits better when...",
          highlighted: false,
          items: [
            "Many of your calls require empathy or judgment — complaints, sensitive intake, emotional callers",
            "You need bilingual support that AI cannot reliably deliver yet for your language pair",
            "Your callers expect to reach a person and will reject automation",
            "Call volume is low enough that per-minute pricing stays reasonable",
            "Your industry has compliance requirements where a human must make real-time judgment calls",
          ],
        },
        {
          icon: Bot,
          heading: "AI voice agent wins when...",
          highlighted: true,
          items: [
            "You need 24/7 coverage without paying premium after-hours rates",
            "Most calls follow predictable patterns: scheduling, availability, pricing, service-area questions",
            "You want every call logged to your CRM automatically with transcripts and next actions",
            "Call volume is growing and you need costs to stay flatter instead of scaling with each call",
            "Speed matters — you cannot afford callers waiting in a shared queue during peak hours",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What answering services do not tell you upfront",
      subtitle:
        "Answering service pricing looks clean on the sales page. Here is what you often discover after a few months:",
      items: [
        {
          icon: Clock,
          title: "Shared operators mean shared wait times",
          body: "Your answering service handles dozens of businesses. When multiple clients are busy at the same time, your callers wait in a queue they do not know about. Average hold times of 45-90 seconds during peak hours are common. Your caller just knows they called your business and nobody picked up quickly.",
        },
        {
          icon: FileText,
          title: "Message quality degrades over time",
          body: "The service starts strong. But operators handle many accounts simultaneously. Over time, messages get shorter, qualification questions get skipped, and details get lost. You only notice when a lead complains or a booking falls through. An AI agent does not drift — it captures the same detail on call 1 and call 1,000.",
        },
        {
          icon: RotateCcw,
          title: "Operator turnover erodes consistency",
          body: "Answering services have high turnover. The operator who learned your script well may be gone in a few months, replaced by someone reading your instructions for the first time. You pay the same rate for inconsistent quality.",
        },
        {
          icon: Link,
          title: "There is still a gap between a message and a booked appointment",
          body: "Most answering services send you a summary by email or text. Someone on your team still has to read it, open the CRM, check the calendar, and call back to confirm. An AI voice agent can book the appointment, log it to your CRM, and send the confirmation during the original call. That gap is hours of admin work per week for a busy small business.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Adjacent proof for replacing answering-service-style coverage",
      subtitle:
        "The existing proof is not 'we replaced Ruby for client X.' It is narrower and more honest than that:",
      studies: [
        {
          industry: "Restaurant",
          headline: "AI voice agent replaced after-hours message-taking and callback lag",
          body: "The Paris Cafe case study shows what happens when a business stops relying on message capture and delayed callbacks for missed calls. Calls get answered immediately, common questions get handled live, and reservation demand stops sitting in a queue. That is the closest direct proof on the site for replacing traditional answering-service-style coverage.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Small business phone coverage",
          headline: "Existing cost pages already show the AI side of the math",
          body: "The current AI voice agent cost page already anchors realistic SMB pricing for live phone coverage. That makes this comparison page useful without pretending there is already a published case study about replacing a named answering service vendor. The honest claim is cost compression plus tighter booking/CRM workflow when the call pattern is routine enough.",
          link: "/ai-voice-agent-cost-small-business",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
        { label: "AI voice agent cost guide", href: "/ai-voice-agent-cost-small-business" },
        { label: "AI phone answering guide", href: "/ai-phone-answering-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is an AI voice agent as good as a live answering service?",
      answer:
        "For routine calls — scheduling, lead qualification, FAQ answers, service-area questions — AI can match or beat a typical answering service because it is consistent and can book appointments in real time. For calls requiring empathy, complex judgment, or unusual problem-solving, a good live operator is still better. In practice, many small businesses can let AI handle 70-85% of call volume and route the rest.",
    },
    {
      question: "How much cheaper is an AI voice agent than an answering service?",
      answer:
        "At 100 calls per month, a typical answering service may cost $300-$800 while an AI voice agent may land closer to $70-$150. At 300 calls per month, the answering service often runs $600-$1,500 while AI stays nearer to $150-$300. The exact spread depends on your current plan and call duration, but the percentage savings is often 50-80%.",
    },
    {
      question: "Will my callers know they are talking to AI instead of a person?",
      answer:
        "Some callers notice, many do not — especially on routine calls like scheduling or pricing-range questions. You can configure the voice agent to identify itself as an AI assistant or virtual receptionist depending on your preference and any disclosure requirements. Most callers care more about getting a fast answer than who answered first.",
    },
    {
      question: "How do I transition from an answering service to AI?",
      answer:
        "Start with after-hours calls or one narrow call type. Run AI alongside your answering service for 2-4 weeks, compare message accuracy, booking rates, and any caller feedback, then expand if the workflow is stable. Most businesses should not cut the old system on day one.",
    },
    {
      question: "What happens when the AI cannot handle a call?",
      answer:
        "A well-configured voice agent should recognize when a call exceeds its script — emotional callers, complex multi-part requests, or topics outside its training. It captures what it can, tells the caller what happens next, and routes the details to your team or fallback operator. The goal is not to pretend every call is routine. The goal is to stop using a high-cost human layer for calls that are routine.",
    },
  ],
  faqSubtitle:
    "Practical answers about switching from an answering service to an AI voice agent",
  ctaHeading: "Paying too much for basic phone coverage?",
  ctaText:
    "Book a 30-minute call. We will compare your current answering-service-style coverage against what an AI voice agent would cost and where the workflow should stay human.",
  ctaSubtext:
    "Bring your current invoice or call volume if you have it. We will do the math together.",
  relatedLinks: [
    { label: "AI voice agent vs. call center", href: "/ai-voice-agent-vs-call-center" },
    { label: "AI voice agent vs. voicemail", href: "/ai-voice-agent-vs-voicemail" },
    { label: "AI voice agent cost guide", href: "/ai-voice-agent-cost-small-business" },
    { label: "AI phone answering guide", href: "/ai-phone-answering-for-service-businesses" },
  ],
};

export default data;
