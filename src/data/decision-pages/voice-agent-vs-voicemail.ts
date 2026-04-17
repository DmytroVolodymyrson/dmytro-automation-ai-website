import {
  Scale,
  Phone,
  Voicemail,
  MessageSquare,
  DollarSign,
  Clock,
  AlertTriangle,
  Zap,
  Bot,
  Users,
  TrendingUp,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-voice-agent-vs-voicemail",
  metaTitle:
    "AI Voice Agent vs. Voicemail — How Many Leads Are You Losing? | Dmytro AI",
  metaDescription:
    "Compare AI voice agents and voicemail for service businesses. Data on lead capture rates, response times, caller experience, and real cost of missed calls.",
  badgeText: "Decision Guide",
  badgeIcon: Scale,
  h1: "AI Voice Agent vs. Voicemail",
  heroIntro:
    "When your phone rings and nobody picks up, two things can happen: a voicemail that might get checked in a few hours, or an AI voice agent that answers immediately, captures the lead, and books the appointment. Most service businesses default to voicemail because it is free. But the leads it loses are not.",
  heroSubtext:
    "Below: what actually happens to callers who hit voicemail, how AI voice agents change the math, and which option makes sense for your call volume.",
  sections: [
    {
      type: "cards",
      title: "What happens when you miss a call",
      subtitle:
        "Three paths a caller can take when nobody picks up. Each one produces very different results:",
      items: [
        {
          icon: Voicemail,
          title: "Voicemail",
          body: "The caller hears a beep and decides whether to leave a message. Industry data shows 80% of callers do not leave voicemails. They hang up and call the next provider. Of the 20% who do leave a message, average callback time is 4-6 hours. By then, many have already booked elsewhere.",
        },
        {
          icon: Bot,
          title: "AI voice agent",
          body: "The caller gets an immediate answer. The AI identifies what they need, answers common questions, qualifies the lead, and books an appointment — all in under 2 minutes. No waiting, no callback, no chance for the competitor to win the lead. Works 24/7 with no hold times.",
        },
        {
          icon: MessageSquare,
          title: "Missed call text-back",
          body: "The caller gets an automated text within 30 seconds: 'Sorry we missed your call. How can we help?' This captures some leads who would not leave voicemail, but it is text-only — no voice interaction, no real-time booking, and the conversion rate is lower than a live conversation. Better than voicemail, but not as good as answering the phone.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "How voicemail, AI voice agents, and missed call text-back compare across the metrics that affect your revenue:",
      headers: ["Voicemail", "AI Voice Agent", "Missed Call Text-Back"],
      rows: [
        {
          label: "Lead capture rate",
          values: [
            "15-20% of missed callers",
            "85-95% of callers engaged",
            "40-55% respond to text",
          ],
        },
        {
          label: "Response time",
          values: [
            "4-6 hours average callback",
            "Instant — answers on first ring",
            "30-60 seconds for text",
          ],
        },
        {
          label: "Caller experience",
          values: [
            "Frustrating, feels ignored",
            "Professional, conversational",
            "Impersonal but fast",
          ],
        },
        {
          label: "Monthly cost",
          values: [
            "Free (but costly in lost revenue)",
            "$50-$200 software + per-minute fees",
            "$20-$50 for SMS automation",
          ],
        },
        {
          label: "Setup complexity",
          values: [
            "None — already built into your phone",
            "1-3 weeks to configure and train",
            "1-2 days for basic SMS flow",
          ],
        },
        {
          label: "After-hours coverage",
          values: [
            "Records messages, no engagement",
            "Full live interaction 24/7",
            "Sends text, no voice interaction",
          ],
        },
        {
          label: "Appointment booking",
          values: [
            "None — requires callback",
            "Books directly into your calendar",
            "Can link to booking page in text",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Voicemail is not always wrong. But it is wrong more often than most business owners realize:",
      options: [
        {
          icon: Voicemail,
          heading: "Voicemail is fine when...",
          highlighted: false,
          items: [
            "You get fewer than 5 missed calls per week",
            "Your callers are existing clients who will wait for a callback",
            "Speed of response does not determine whether you win the job",
            "You have a system to check and return voicemails within 30 minutes",
            "Your industry has very low competition for phone-based leads",
          ],
        },
        {
          icon: Bot,
          heading: "AI voice agent wins when...",
          highlighted: true,
          items: [
            "You miss 10+ calls per week during jobs, after hours, or weekends",
            "Callers are shopping around and will book with whoever answers first",
            "Your average job value is $200+ making each missed lead expensive",
            "You need after-hours coverage but cannot afford evening staff",
            "Most missed calls follow a pattern: service inquiry, availability, booking",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What voicemail actually costs you",
      subtitle:
        "Voicemail is free to run. The cost is in what it loses. Here is the math most businesses never do:",
      items: [
        {
          icon: TrendingUp,
          title: "80% of callers never leave a voicemail",
          body: "This is not an estimate — it is a well-documented industry figure. Of the people who call your business and get voicemail, 4 out of 5 hang up without leaving a message. If you miss 50 calls per month, voicemail captures maybe 10 of them. The other 40 call someone else.",
        },
        {
          icon: Clock,
          title: "Callback lag kills conversion",
          body: "Even for the 20% who leave voicemail, timing matters. Studies show lead conversion drops 80% after the first 5 minutes. If your average callback time is 4 hours, you are reaching people who have already solved their problem or booked with a competitor. Speed is not a nice-to-have. It is the difference between winning and losing the job.",
        },
        {
          icon: DollarSign,
          title: "Do the math on your lost revenue",
          body: "Take your average job value. Multiply by the number of missed calls per month. Multiply by 0.80 (the ones who never leave voicemail). Multiply by your close rate. That is your monthly cost of voicemail. For a plumber averaging $400 per job who misses 40 calls/month, that is $6,400-$9,600 in lost revenue. Every month.",
        },
        {
          icon: AlertTriangle,
          title: "Your competitors are answering their phones",
          body: "When a homeowner needs a plumber, electrician, or HVAC tech, they call 2-3 providers and book with whoever answers. If you send them to voicemail and your competitor picks up — even if your competitor uses AI — you lose that job. The bar is not perfection. The bar is answering the phone.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What replacing voicemail looks like",
      subtitle:
        "Businesses that switched from voicemail to AI call handling:",
      studies: [
        {
          industry: "Restaurant",
          headline: "From voicemail to 100% call answer rate",
          body: "A NYC restaurant was losing reservation calls to voicemail every evening and weekend. After deploying an AI voice agent, every call gets answered. After-hours coverage went from 0% to 100%. Callers book reservations and get answers to common questions without waiting for a callback.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Info Business",
          headline: "50+ leads per day captured automatically",
          body: "An automated lead pipeline replaced manual follow-up and voicemail-based workflows. The system responds to every inquiry instantly, qualifies leads, and delivers them to the sales team ready to close. Zero leads lost to delayed responses.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
        { label: "Missed call follow-up guide", href: "/missed-call-follow-up-automation" },
        { label: "After-hours lead capture", href: "/after-hours-lead-capture-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How many leads does voicemail actually lose?",
      answer:
        "Industry data consistently shows 75-85% of callers do not leave voicemails. For service businesses, the number tends toward the higher end because callers are actively looking for immediate help. If you miss 50 calls per month, voicemail loses you 37-42 of those leads. At a $300 average job value and 30% close rate, that is $3,300-$3,800 in monthly lost revenue.",
    },
    {
      question: "Can an AI voice agent handle complex questions?",
      answer:
        "AI voice agents handle common scenarios well: scheduling, pricing ranges, service area questions, hours, and basic qualification. For complex or unusual requests, the agent takes detailed notes and either routes to a live person immediately or schedules a callback with full context. The goal is not to handle every call perfectly — it is to capture every lead and handle 70-80% of calls without human involvement.",
    },
    {
      question: "How does the monthly cost compare?",
      answer:
        "Voicemail costs $0 to run. An AI voice agent costs $50-$200/month for the platform plus $0.05-$0.15 per minute of call time. For a business handling 200 minutes of AI calls per month, total cost is $60-$230. Compare that to the revenue lost from missed calls — even one recovered lead per month typically covers the entire annual cost of the AI system.",
    },
    {
      question: "What do callers actually hear when AI answers?",
      answer:
        "A natural-sounding voice greets the caller by your business name and asks how it can help. Modern AI voices are conversational, not robotic. The agent can identify itself as an AI assistant or simply act as a virtual receptionist, depending on your preference. Most callers care more about getting an answer than who (or what) provided it.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "A basic AI voice agent takes 1-2 weeks to configure, train on your business information, integrate with your calendar, and test. More complex setups with CRM integration and multi-step qualification take 2-3 weeks. You can run AI alongside your existing voicemail during testing before switching over fully.",
    },
  ],
  faqSubtitle:
    "Straight answers about replacing voicemail with AI call handling",
  ctaHeading: "Find out what voicemail is costing you",
  ctaText:
    "Book a 30-minute call. We will look at your missed call volume, calculate the revenue you are leaving on the table, and show you what AI call handling would look like for your specific business.",
  ctaSubtext:
    "No pressure. Just math and a plan you can act on.",
  relatedLinks: [
    { label: "AI phone answering guide", href: "/ai-phone-answering-for-service-businesses" },
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
    { label: "After-hours lead capture", href: "/after-hours-lead-capture-for-service-businesses" },
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
  ],
};

export default data;
