import {
  Scale,
  Phone,
  Bot,
  DollarSign,
  Clock,
  AlertTriangle,
  Zap,
  Users,
  CalendarCheck,
  Handshake,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-appointment-setter-vs-receptionist",
  metaTitle:
    "AI Appointment Setter vs. Human Receptionist — Which One Books More Jobs? | Dmytro AI",
  metaDescription:
    "Compare AI appointment setters and human receptionists for service businesses. Side-by-side on cost, availability, booking accuracy, caller experience, and scalability.",
  badgeText: "Decision Guide",
  badgeIcon: Scale,
  h1: "AI Appointment Setter vs. Human Receptionist",
  heroIntro:
    "You need someone to answer the phone and book appointments. The question is whether that someone needs to be a person. AI appointment setters handle scheduling 24/7 at a fraction of the cost. Human receptionists build rapport and handle complexity. This guide breaks down where each option wins, what each actually costs, and how to decide for your business.",
  heroSubtext:
    "Below: a direct comparison on cost, availability, caller experience, and booking accuracy — plus a hybrid approach that works for many service businesses.",
  sections: [
    {
      type: "cards",
      title: "Two ways to handle appointment scheduling",
      subtitle:
        "Both options get the job done. The difference is in when, how, and at what cost:",
      items: [
        {
          icon: Bot,
          title: "AI appointment setter",
          body: "An AI voice agent that answers calls, checks your calendar, and books appointments in real time. Works 24/7 including evenings, weekends, and holidays. Handles unlimited concurrent calls. Costs a flat monthly fee plus per-minute usage. Best for businesses with high call volume and straightforward booking flows.",
        },
        {
          icon: Phone,
          title: "Human receptionist",
          body: "A trained person who answers calls, builds rapport, and manages scheduling. Handles nuance, emotional callers, and complex requests naturally. Limited to business hours unless you pay for shift coverage. Costs $2,800-$4,500/month in salary and benefits. Best for businesses where caller relationships drive revenue.",
        },
        {
          icon: Zap,
          title: "Hybrid approach",
          body: "AI handles after-hours calls, overflow during peak times, and routine scheduling. Human receptionist handles complex calls, VIP clients, and situations that need a personal touch during business hours. Many service businesses find this gives the best of both: 24/7 coverage without 24/7 staffing costs.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "How AI appointment setters and human receptionists compare on what actually matters for your bottom line:",
      headers: ["AI Appointment Setter", "Human Receptionist"],
      rows: [
        {
          label: "Monthly cost",
          values: [
            "$50-$200 software + per-minute usage",
            "$2,800-$4,500 salary + benefits + overhead",
          ],
        },
        {
          label: "Availability",
          values: [
            "24/7/365, no sick days or vacations",
            "40-50 hours/week, needs coverage for time off",
          ],
        },
        {
          label: "Scalability",
          values: [
            "Handles unlimited concurrent calls instantly",
            "One call at a time, needs hiring for growth",
          ],
        },
        {
          label: "Caller experience",
          values: [
            "Consistent, professional, slightly less personal",
            "Warm, adaptive, builds genuine rapport",
          ],
        },
        {
          label: "Booking accuracy",
          values: [
            "99%+ with calendar integration, no double-booking",
            "Varies by individual, occasional human error",
          ],
        },
        {
          label: "Setup time",
          values: [
            "1-3 weeks to configure and test",
            "2-6 weeks to hire, 2-4 weeks to train",
          ],
        },
        {
          label: "Complex call handling",
          values: [
            "Follows scripts, escalates edge cases",
            "Handles nuance, reads emotion, improvises",
          ],
        },
        {
          label: "CRM logging",
          values: [
            "Automatic, every call logged with full transcript",
            "Manual, depends on discipline and training",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option wins",
      subtitle:
        "The right choice depends on your call patterns, budget, and how much complexity your calls involve:",
      options: [
        {
          icon: Bot,
          heading: "AI appointment setter wins when...",
          highlighted: true,
          items: [
            "You miss calls after hours and on weekends — that is when 40-60% of leads call",
            "Most calls follow a pattern: service request, availability check, book appointment",
            "You cannot justify $3K-$5K/month for a full-time receptionist",
            "Call volume spikes unpredictably and you need instant scaling",
            "You want every call logged automatically with full transcripts in your CRM",
          ],
        },
        {
          icon: Phone,
          heading: "Human receptionist wins when...",
          highlighted: false,
          items: [
            "Your callers expect a personal relationship — they know your receptionist by name",
            "Calls require emotional intelligence: insurance claims, legal intake, medical concerns",
            "You need someone to handle walk-ins, mail, and office tasks beyond phone calls",
            "Your booking process involves custom quoting or multi-step consultations",
            "Your clientele is older and may be uncomfortable with AI interactions",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What most comparisons miss",
      subtitle:
        "The AI vs. human debate looks simple on paper. These are the factors that actually decide the outcome:",
      items: [
        {
          icon: Handshake,
          title: "Caller trust depends on speed, not humanity",
          body: "Studies show caller satisfaction correlates more with speed of answer and speed of resolution than whether a human or AI picked up. A caller who waits on hold for 3 minutes with a human is less satisfied than one whose call is answered instantly by AI. The trust gap between AI and humans is smaller than most business owners assume.",
        },
        {
          icon: Zap,
          title: "Integration determines real-world value",
          body: "An AI setter that books directly into your calendar, sends confirmation texts, and logs to your CRM creates a seamless flow. A receptionist who books appointments in a spreadsheet and forgets to send confirmations creates gaps. The value of either option depends on how well it connects to your existing systems.",
        },
        {
          icon: Clock,
          title: "The transition period matters more than the final state",
          body: "Switching from a receptionist to AI overnight alienates repeat callers. A smart transition starts with AI handling after-hours and overflow, then gradually expanding. Give existing clients time to adjust. Most businesses run a 30-60 day hybrid period before going fully AI on phones.",
        },
        {
          icon: DollarSign,
          title: "Cost at scale tells the real story",
          body: "A receptionist costs roughly the same whether you get 20 calls or 200. AI costs scale with usage — 200 calls costs more than 20. At very high volumes (300+ calls/day), AI per-minute costs can approach receptionist salary. For most service businesses doing 20-100 calls/day, AI is 60-80% cheaper.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What this looks like in practice",
      subtitle:
        "Real businesses that chose AI for call handling and appointment scheduling:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of calls answered, zero reception staff",
          body: "A NYC restaurant replaced its phone receptionist with an AI voice agent. Every call gets answered on the first ring — reservations, hours, event inquiries. After-hours coverage went from 0% to 100%. The owner estimates $3,200/month saved versus the part-time phone staff it replaced.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce",
          headline: "Automated scheduling for 5,600+ leads",
          body: "An e-commerce brand automated its entire lead follow-up and booking pipeline. CRM integration handles scheduling, reminders, and follow-ups without human intervention. The system tripled their booking capacity without adding staff.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
        { label: "AI appointment setter guide", href: "/ai-appointment-setter" },
        { label: "AI phone answering guide", href: "/ai-phone-answering-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Can AI handle complex scheduling like multi-step consultations?",
      answer:
        "For straightforward bookings (pick a time, confirm details), AI handles this perfectly. For multi-step scheduling that requires back-and-forth about scope, pricing, or specific provider matching, AI can handle the initial intake and then route to a human for the final booking. Most service businesses find 70-80% of their calls are routine enough for full AI handling.",
    },
    {
      question: "Will callers trust an AI to book their appointment?",
      answer:
        "Most callers care about three things: someone picked up, their question was answered, and their appointment is confirmed. Research shows that caller satisfaction is driven more by response speed and resolution than by whether a human was involved. That said, some demographics (particularly older clients) may prefer human interaction. You can configure AI to disclose that it is an assistant, or let callers request a human callback.",
    },
    {
      question: "How does the cost compare over a full year?",
      answer:
        "A human receptionist costs $33,600-$54,000/year in salary alone, plus benefits, training, and coverage for sick days and vacations. An AI appointment setter costs $2,500-$5,000 to set up plus $100-$300/month in ongoing costs. For most service businesses, the first-year total with AI is 75-85% less than a full-time hire.",
    },
    {
      question: "How do I handle the transition from receptionist to AI?",
      answer:
        "Start with AI handling after-hours and weekend calls only. This is the lowest-risk entry point because those calls currently go to voicemail anyway. Once you are confident in the AI performance, expand to overflow during business hours. Some businesses keep a part-time receptionist for complex and VIP calls while AI handles the rest.",
    },
    {
      question: "Can AI fully replace a receptionist?",
      answer:
        "For phone-based appointment scheduling, yes — for most service businesses. But if your receptionist also handles walk-ins, manages the front desk, processes paperwork, or performs tasks beyond phone calls, you still need a person for those. The most common outcome is that AI takes over phone coverage while a part-time admin handles in-person tasks.",
    },
  ],
  faqSubtitle:
    "Honest answers about choosing between AI and human appointment scheduling",
  ctaHeading: "Not sure which option fits your business?",
  ctaText:
    "Book a 30-minute call. We will review your call volume, scheduling workflow, and budget to recommend whether AI, human, or hybrid makes the most sense for your situation.",
  ctaSubtext:
    "No sales pitch. Just a practical conversation about your appointment scheduling.",
  relatedLinks: [
    { label: "AI appointment setter guide", href: "/ai-appointment-setter" },
    { label: "AI phone answering", href: "/ai-phone-answering-for-service-businesses" },
    { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
    { label: "Chatbot vs. voice agent", href: "/ai-chatbot-vs-ai-voice-agent-for-lead-qualification" },
  ],
};

export default data;
