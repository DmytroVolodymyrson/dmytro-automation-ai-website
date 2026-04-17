import {
  Phone,
  Bot,
  CalendarCheck,
  Clock,
  MessageSquare,
  Users,
  CheckCircle2,
  XCircle,
  TrendingUp,
  BarChart3,
  Mic,
  ArrowUpRight,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-phone-answering-for-service-businesses",
  metaTitle:
    "AI Phone Answering for Service Businesses — 24/7 Call Handling Without Staff | Dmytro AI",
  metaDescription:
    "How AI phone answering works for service businesses. 24/7 call handling, appointment booking, caller qualification, and CRM integration. When it makes sense and what to expect.",
  badgeText: "Voice AI",
  badgeIcon: Phone,
  h1: "AI Phone Answering for Service Businesses",
  heroIntro:
    "Your phone rings and nobody picks up. The caller hangs up and calls your competitor. This happens dozens of times per week for busy service businesses — during jobs, after hours, on weekends. AI phone answering means every call gets answered, every time. Not a voicemail. Not an answering service. An AI agent that can answer questions, qualify the caller, and book appointments directly into your calendar.",
  heroSubtext:
    "Below: what AI phone answering actually does, what callers experience, where it works well, and where it does not.",
  sections: [
    {
      type: "cards",
      title: "What AI phone answering handles",
      subtitle:
        "A well-configured AI phone agent does more than just answer the phone. It replaces the most common call handling tasks:",
      items: [
        {
          icon: Phone,
          title: "Answer every inbound call",
          body: "Picks up within 2 rings — during business hours when staff are busy, after hours, weekends, and holidays. No voicemail, no hold music, no missed opportunities.",
        },
        {
          icon: MessageSquare,
          title: "Handle common questions",
          body: "Hours, location, service areas, pricing ranges, what you do and do not handle. The agent is trained on your business information and answers consistently every time.",
        },
        {
          icon: CalendarCheck,
          title: "Book appointments",
          body: "Checks your calendar availability, books the appointment, and sends a confirmation to both the customer and your team. No phone tag. No back-and-forth scheduling.",
        },
        {
          icon: Bot,
          title: "Qualify callers",
          body: "Asks the right questions — what service they need, where they are located, their timeline, whether it is an emergency. Routes qualified leads to the right person or workflow.",
        },
        {
          icon: ArrowUpRight,
          title: "Escalate when needed",
          body: "Complex situations, complaints, emergencies, and VIP callers get routed to a real person immediately. The AI knows what it can handle and what it should not.",
        },
        {
          icon: Users,
          title: "Log everything to CRM",
          body: "Every call is logged with caller details, call summary, transcript, and any actions taken. Your team has full context without listening to recordings.",
        },
      ],
    },
    {
      type: "table",
      title: "AI phone answering vs alternatives",
      subtitle:
        "Most service businesses compare three options. The right choice depends on your call volume, budget, and how much nuance your calls require:",
      headers: ["AI phone agent", "Answering service", "Voicemail"],
      rows: [
        {
          label: "Availability",
          values: ["24/7, instant pickup", "Depends on service hours", "24/7 but no interaction"],
        },
        {
          label: "Appointment booking",
          values: ["Automated", "Manual (callback later)", "None"],
        },
        {
          label: "Caller qualification",
          values: ["Structured questions", "Basic (depends on operator)", "None"],
        },
        {
          label: "Monthly cost",
          values: ["$50-$200 software", "$300-$800+", "Free but costly in lost leads"],
        },
        {
          label: "Consistency",
          values: ["Identical every call", "Varies by operator", "N/A"],
        },
        {
          label: "Best for",
          values: ["High volume, routine calls", "Low volume, complex calls", "Very low volume only"],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When AI phone answering makes sense",
      subtitle:
        "Honest assessment — this is a strong fit for most service businesses, but not all:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Strong fit",
          variant: "green",
          items: [
            "You miss calls during peak hours, jobs, or after hours",
            "Most calls are routine: scheduling, pricing questions, service area inquiries",
            "You get 15+ inbound calls per day",
            "Speed of response directly affects whether you win the job",
            "You cannot justify hiring a full-time receptionist",
            "Your team is in the field and cannot answer calls consistently",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Most calls require detailed technical consultation",
            "Your callers expect a personal relationship with the person answering",
            "You get fewer than 5 calls per day",
            "Your business depends on long, nuanced phone conversations for sales",
            "You already have a receptionist who handles calls effectively",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What callers actually experience",
      subtitle:
        "Caller experience is what makes or breaks an AI phone system:",
      items: [
        {
          icon: Mic,
          title: "Natural-sounding voice",
          body: "Modern AI voice agents sound conversational, not robotic. The voice, pace, and tone are configured to match your brand. Most callers do not realize they are talking to AI for the first few exchanges.",
        },
        {
          icon: Clock,
          title: "Fast and direct",
          body: "The agent answers the question or starts booking within the first 30 seconds. No menu trees, no 'press 1 for sales.' Direct engagement from the moment they call.",
        },
        {
          icon: MessageSquare,
          title: "Handles interruptions",
          body: "Good AI agents handle callers who interrupt, change topics, or ask unexpected questions. They are not rigid scripts — they adapt to the conversation within the boundaries you set.",
        },
        {
          icon: ArrowUpRight,
          title: "Smooth handoffs",
          body: "When the AI reaches its limits, it tells the caller: 'Let me connect you with someone who can help with that' or takes detailed notes for a callback. No awkward dead ends.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "AI phone answering in practice",
      subtitle:
        "Real implementation showing what this looks like for a service business:",
      studies: [
        {
          industry: "Restaurant",
          headline: "24/7 AI voice receptionist",
          body: "AI voice agent answers every call — reservations, hours, event inquiries. After-hours coverage went from 0% to 100%. Response time dropped from hours to under 60 seconds. The same approach works for any service business.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
        { label: "After-hours lead capture", href: "/after-hours-lead-capture-for-service-businesses" },
        { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Do callers know it is AI?",
      answer:
        "Some do, some do not. The agent can introduce itself as an AI assistant if required by your preference or regulations. In practice, most callers care more about getting their question answered quickly than whether a human or AI handled it.",
    },
    {
      question: "What if the AI cannot handle a question?",
      answer:
        "It takes a message and routes it to your team, or transfers the call to a live person if one is available. Good AI phone systems are configured with clear boundaries — they do not try to fake answers.",
    },
    {
      question: "Can it handle multiple calls at once?",
      answer:
        "Yes. Unlike a human receptionist, AI phone answering handles unlimited concurrent calls. During peak periods when every line is busy, the AI still picks up immediately.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "A basic AI phone agent takes 1-2 weeks to configure, test, and deploy. More complex setups with CRM integration, appointment booking, and multi-step qualification take 2-3 weeks.",
    },
    {
      question: "What does it cost?",
      answer:
        "Setup runs $2.5K-$5K depending on complexity. Monthly software costs are typically $50-$200 for the voice AI platform plus per-minute usage fees. Total monthly cost is usually a fraction of an answering service or part-time receptionist.",
    },
  ],
  faqSubtitle:
    "Practical answers about AI phone answering for service businesses",
  ctaHeading: "Stop losing callers to voicemail",
  ctaText:
    "Book a 30-minute call. We will look at your call volume, where calls are being missed, and whether AI phone answering would pay off for your business.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your phone coverage gaps.",
  relatedLinks: [
    { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
