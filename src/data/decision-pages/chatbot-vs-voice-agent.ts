import {
  Scale,
  MessageSquare,
  Phone,
  DollarSign,
  Clock,
  AlertTriangle,
  Zap,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-chatbot-vs-ai-voice-agent-for-lead-qualification",
  metaTitle:
    "AI Chatbot vs. AI Voice Agent for Lead Qualification | Dmytro AI",
  metaDescription:
    "Should you use an AI chatbot or an AI voice agent to qualify leads? Compare response rates, conversion, cost, and implementation for service businesses.",
  badgeText: "Decision Guide",
  badgeIcon: Scale,
  h1: "AI Chatbot vs. AI Voice Agent for Lead Qualification",
  heroIntro:
    "Both can qualify leads automatically. But they work in fundamentally different ways, reach different people, and cost different amounts to build and run. This guide helps you pick the right one — or decide if you need both.",
  heroSubtext:
    "Below: how each works, where each wins, real cost comparisons, and a decision framework for service businesses.",
  sections: [
    {
      type: "cards",
      title: "Two approaches to the same problem",
      subtitle:
        "Your leads come in, and someone needs to qualify them — fast. Here's how each AI approach handles that:",
      items: [
        {
          icon: MessageSquare,
          title: "AI chatbot",
          body: "Text-based qualification on your website, SMS, or social channels. Asks screening questions, collects info, and routes qualified leads to your team. Works 24/7, handles multiple conversations simultaneously. Best for web traffic, form follow-ups, and text-first audiences.",
        },
        {
          icon: Phone,
          title: "AI voice agent",
          body: "Handles phone calls like a trained receptionist. Answers questions, qualifies callers, books appointments, and routes urgent calls. Handles one call at a time but builds more trust. Best for industries where phone calls are the primary lead channel.",
        },
        {
          icon: Zap,
          title: "Both together",
          body: "Chatbot handles web and text leads; voice agent handles phone calls. The combination covers all inbound channels. Most service businesses get the biggest lift from starting with one and adding the second once the first is proven.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "How chatbots and voice agents compare across the factors that matter for lead qualification:",
      headers: ["AI Chatbot", "AI Voice Agent"],
      rows: [
        {
          label: "Primary channel",
          values: ["Website, SMS, social DMs", "Inbound and outbound phone calls"],
        },
        {
          label: "Response speed",
          values: ["Instant (sub-second)", "Answers on first ring"],
        },
        {
          label: "Concurrent capacity",
          values: [
            "Unlimited simultaneous conversations",
            "One call at a time (per line)",
          ],
        },
        {
          label: "Trust building",
          values: [
            "Lower — text feels less personal",
            "Higher — voice creates real connection",
          ],
        },
        {
          label: "Setup cost",
          values: ["$1K–$3K typical", "$2K–$5K typical"],
        },
        {
          label: "Running cost",
          values: [
            "Low — pennies per conversation",
            "Higher — per-minute telephony costs",
          ],
        },
        {
          label: "Complexity handling",
          values: [
            "Good for structured Q&A flows",
            "Better for nuanced, branching conversations",
          ],
        },
        {
          label: "Best industries",
          values: [
            "E-commerce, SaaS, online services",
            "HVAC, dental, legal, real estate, restaurants",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each approach wins",
      subtitle:
        "The right choice depends on how your leads prefer to reach you:",
      options: [
        {
          icon: MessageSquare,
          heading: "Start with a chatbot when…",
          highlighted: false,
          items: [
            "Most of your leads come through your website or social media",
            "Your qualification flow is structured — specific questions with specific answers",
            "You need to handle high volume (dozens or hundreds of leads per day)",
            "Your audience is younger or text-first (they'd rather type than talk)",
            "Budget is tight and you want the lowest-cost starting point",
          ],
        },
        {
          icon: Phone,
          heading: "Start with a voice agent when…",
          highlighted: true,
          items: [
            "Phone calls are your primary lead channel (HVAC, dental, legal)",
            "You're missing calls after hours and losing those leads to competitors",
            "Your leads need reassurance — they want to talk to someone before committing",
            "Qualification requires nuanced conversation, not just checkbox questions",
            "Booking appointments over the phone is your main conversion event",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What most guides leave out",
      subtitle:
        "The decision isn't just about features. Here's what actually drives the outcome:",
      items: [
        {
          icon: DollarSign,
          title: "Voice agents cost more but convert better in some industries",
          body: "For HVAC, dental, and legal services, phone leads convert at 2–3x the rate of web leads. A voice agent that costs more per lead can still deliver better ROI because the leads it captures are higher intent. Don't optimize for cost per lead — optimize for cost per booked appointment.",
        },
        {
          icon: Clock,
          title: "Speed-to-lead matters more than channel",
          body: "A chatbot that responds in 2 seconds beats a human who calls back in 2 hours. A voice agent that answers on the first ring beats a voicemail that gets checked tomorrow. The channel matters less than whether someone (or something) is there when the lead reaches out.",
        },
        {
          icon: AlertTriangle,
          title: "Bad AI is worse than no AI",
          body: "A chatbot that gives wrong answers or a voice agent that can't handle basic questions will actively damage your reputation. Start simple — qualify and route. Don't try to make the AI do everything on day one. A well-built simple system beats a broken complex one.",
        },
        {
          icon: Zap,
          title: "Integration is where the real value lives",
          body: "Neither a chatbot nor a voice agent works in isolation. The value comes from what happens after qualification: CRM entry, automated follow-up sequences, appointment booking, team notifications. If the AI qualifies a lead but nobody follows up, you've automated the wrong part.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What this looks like in practice",
      subtitle:
        "Real implementations across different industries:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "A NYC restaurant deployed a VAPI voice agent to handle reservations and questions after hours. Every call gets answered. Response time for web leads dropped from hours to under 60 seconds.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Info Business",
          headline: "50+ qualified leads per day",
          body: "An automated pipeline qualifies Instagram leads via chatbot-style DM sequences. $0.29 per qualified lead, zero manual work. The system identifies, qualifies, and delivers leads without human involvement.",
          link: "/case-studies/instagram-lead-generation",
        },
        {
          industry: "E-commerce",
          headline: "3x follow-up capacity",
          body: "Automated CRM sequences handle SMS and email follow-up for 5,600+ leads. The system qualifies leads based on engagement signals and routes hot leads to the sales team.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
        { label: "HVAC automation guide", href: "/ai-automation-for-hvac-companies" },
        {
          label: "AI lead follow-up guide",
          href: "/ai-lead-follow-up-for-service-businesses",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "Can I use both a chatbot and a voice agent?",
      answer:
        "Yes, and many businesses eventually do. The key is starting with whichever channel your leads use most. If 80% of your leads call, start with a voice agent. Once that's working, add a chatbot for web and social. Running both from day one increases complexity and cost without necessarily increasing results.",
    },
    {
      question: "How good are AI voice agents at handling real conversations?",
      answer:
        "Modern voice agents (built on platforms like VAPI) handle common scenarios well: booking, rescheduling, answering FAQ-type questions, and routing complex calls. They're not perfect for every situation, but they're reliable for the 80% of calls that follow predictable patterns. Calls that fall outside scope get routed to your team with full context.",
    },
    {
      question: "What about SMS-based qualification?",
      answer:
        "SMS qualification is essentially a chatbot delivered via text message. It works well for speed-to-lead because everyone reads texts quickly. The tradeoff is that SMS has compliance requirements (opt-in, TCPA) that web chatbots don't. For service businesses, SMS follow-up after a missed call is one of the highest-ROI automations you can build.",
    },
    {
      question: "How long does it take to set up each option?",
      answer:
        "A basic chatbot with qualification flow takes 3–7 days to build and test. A voice agent takes 1–3 weeks because phone conversations have more edge cases and require more testing. Either way, you see results the day it goes live.",
    },
  ],
  faqSubtitle:
    "Practical answers about choosing between chatbots and voice agents",
  ctaHeading: "Not sure which approach fits your business?",
  ctaText:
    "Book a 30-minute call. We'll look at where your leads come from, figure out which AI approach makes the most sense, and map out what implementation would look like — no commitment required.",
  ctaSubtext:
    "No buzzwords. Just an honest conversation about your lead flow.",
  relatedLinks: [
    {
      label: "AI appointment setter guide",
      href: "/ai-appointment-setter",
    },
    {
      label: "AI lead follow-up guide",
      href: "/ai-lead-follow-up-for-service-businesses",
    },
    { label: "HVAC automation", href: "/ai-automation-for-hvac-companies" },
  ],
};

export default data;
