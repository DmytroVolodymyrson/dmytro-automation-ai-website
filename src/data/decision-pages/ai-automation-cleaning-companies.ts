import {
  Home,
  Phone,
  CalendarCheck,
  MessageSquare,
  Clock,
  Star,
  CheckCircle2,
  XCircle,
  Users,
  Bot,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-for-cleaning-companies",
  metaTitle:
    "AI Automation for Cleaning Companies — Lead Follow-Up, Booking, Quote Nurture | Dmytro AI",
  metaDescription:
    "AI automation for cleaning companies. Lead follow-up, quote follow-up, missed call text-back, scheduling, client reactivation, and review automation. What works and where to start.",
  badgeText: "Cleaning Industry",
  badgeIcon: Home,
  h1: "AI Automation for Cleaning Companies",
  heroIntro:
    "A homeowner requests a cleaning quote on your website at 8 PM. She also requested quotes from two other companies. The first one to respond gets the job. If your team does not see the request until morning, you are already competing for second place. Cleaning companies run on volume — dozens of quote requests, recurring schedules, and seasonal surges. AI automation handles the lead response, quote follow-up, and client retention that your team cannot keep up with manually.",
  heroSubtext:
    "Below: what cleaning company automation looks like in practice, where it delivers the clearest ROI, and how to decide if it is worth the investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a cleaning company",
      subtitle:
        "These automations are built for the reality of running a cleaning business — high quote volume, recurring clients, and a team that is out in the field all day:",
      items: [
        {
          icon: MessageSquare,
          title: "Lead follow-up sequences",
          body: "Every new inquiry — web form, Google ad, missed call — gets an instant response and a multi-step follow-up sequence. No more quote requests sitting unanswered while your team is on jobs.",
        },
        {
          icon: Phone,
          title: "Missed call text-back",
          body: "When a call goes unanswered, an automatic text goes out within seconds. Captures the lead and starts a conversation before they call your competitor.",
        },
        {
          icon: Clock,
          title: "Quote follow-up",
          body: "Automated sequences that follow up on estimates that have not been accepted. Professional reminders at 2 days, 5 days, and 14 days after the quote is sent.",
        },
        {
          icon: CalendarCheck,
          title: "Recurring schedule management",
          body: "Automated confirmations before every recurring clean. Handles rescheduling requests, sends reminders, and flags clients who cancel multiple times in a row.",
        },
        {
          icon: Users,
          title: "Client reactivation campaigns",
          body: "Automated outreach to past clients who have not booked in a while. Seasonal deep-clean promotions, move-out clean reminders, and re-engagement sequences.",
        },
        {
          icon: Star,
          title: "Review request automation",
          body: "After every completed job, an automated text asks for a Google review. Happy clients get a direct review link. Unhappy ones get routed to you first.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your cleaning company?",
      subtitle:
        "Honest assessment. Some cleaning companies see immediate ROI. Others are not ready yet:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You get quote requests but lose jobs because your response is too slow",
            "Your team is in the field and cannot answer every call during the day",
            "You send quotes but never follow up systematically",
            "Past clients lapse and you have no system to bring them back",
            "You want more Google reviews but asking is inconsistent",
            "You are running 3 or more crews and growing",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a solo cleaner with a full schedule from referrals",
            "Your office already handles all follow-up and rebooking consistently",
            "You have no marketing spend and no inbound lead flow to optimize",
            "You want the cheapest option regardless of quality",
            "You are not ready to invest at least $2K in a one-time build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI expectations for cleaning company automation",
      subtitle:
        "The math is straightforward for most cleaning companies:",
      items: [
        {
          icon: BarChart3,
          title: "The cost of a lost quote",
          body: "If your average recurring client is worth $3,000 to $8,000 per year and you lose even a few quote requests per month to slow follow-up, the revenue impact adds up fast. A lead follow-up system costs $1K to $2K to build.",
        },
        {
          icon: Clock,
          title: "Speed-to-lead impact",
          body: "Responding in under 60 seconds instead of hours makes a meaningful difference in whether you win the job. Cleaning is one of the most commoditized services — the company that responds first usually gets it.",
        },
        {
          icon: TrendingUp,
          title: "Quote conversion",
          body: "Most cleaning companies send quotes and never follow up systematically. Even a modest improvement in quote-to-booking conversion rate from automated follow-up adds up significantly over a year.",
        },
        {
          icon: Users,
          title: "Client retention",
          body: "Reactivating past clients is cheaper than acquiring new ones. Automated seasonal campaigns and re-engagement sequences turn dormant contacts into recurring revenue.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same lead follow-up and client management patterns that apply directly to cleaning companies:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "AI voice agent handles all after-hours calls and routes requests. For cleaning companies, the same system captures quote requests and books estimates while your team is on jobs.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and reactivated",
          body: "Automated follow-up sequences organized untouched leads and drove consistent outreach. For cleaning companies, this means no quote request or past client gets forgotten.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for pest control companies", href: "/ai-automation-for-pest-control-companies" },
        { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is the most impactful automation for a cleaning company?",
      answer:
        "Instant lead response and quote follow-up. Most cleaning companies lose the most revenue from quote requests that go unanswered for hours and from sent quotes that are never followed up on. Fixing those two problems typically pays for the entire automation build within the first month.",
    },
    {
      question: "Can the AI manage recurring cleaning schedules?",
      answer:
        "Yes. The system sends confirmation messages before each recurring clean, handles rescheduling requests via text, and flags clients who cancel multiple times so you can follow up personally.",
    },
    {
      question: "How long does setup take?",
      answer:
        "A lead follow-up and missed call text-back system can be live in under a week. A full system with quote follow-up, recurring schedule management, reactivation campaigns, and review requests takes 2 to 3 weeks.",
    },
    {
      question: "What does it cost?",
      answer:
        "A single workflow like missed call text-back runs $1K to $2K. A complete system — lead follow-up, quote nurture, reactivation, reviews — runs $3K to $6K. Fixed pricing, scoped before work starts.",
    },
    {
      question: "Will this work with my scheduling software?",
      answer:
        "In most cases, yes. We integrate at the communication and scheduling layer. If your platform (Jobber, Housecall Pro, Launch27, ZenMaid, etc.) has an API or supports webhooks, we can connect to it. We verify compatibility during the scoping call.",
    },
  ],
  faqSubtitle:
    "Practical answers for cleaning companies considering automation",
  ctaHeading: "Stop losing jobs to slow quotes and forgotten follow-ups",
  ctaText:
    "Book a 30-minute call. We will look at your current lead flow, identify where jobs are being lost, and give you a clear plan for what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your cleaning business.",
  relatedLinks: [
    { label: "AI automation for pest control companies", href: "/ai-automation-for-pest-control-companies" },
    { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
    { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
