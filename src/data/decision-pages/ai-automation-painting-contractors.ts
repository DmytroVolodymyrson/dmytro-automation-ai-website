import {
  Paintbrush,
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
  slug: "ai-automation-for-painting-contractors",
  metaTitle:
    "AI Automation for Painting Contractors — Estimates, Follow-Up, Referrals | Dmytro AI",
  metaDescription:
    "AI automation for painting contractors. Missed call text-back, estimate follow-up, seasonal campaigns, referral automation, and review requests. What works and where to start.",
  badgeText: "Painting Industry",
  badgeIcon: Paintbrush,
  h1: "AI Automation for Painting Contractors",
  heroIntro:
    "You are on a ladder when the phone rings. By the time you climb down, the homeowner has already called two other painters. Painting is one of those trades where the customer requests three or more quotes and picks whoever responds first. Meanwhile, the estimate you sent last Tuesday is sitting in someone's inbox — no follow-up, no reminder, no close. AI automation handles the calls you miss, follows up on every estimate, and turns past clients into a steady referral pipeline.",
  heroSubtext:
    "Below: what painting contractor automation looks like in practice, where it delivers the clearest ROI, and how to decide if it is worth the investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a painting business",
      subtitle:
        "These automations are built for how painting companies actually operate — crews on job sites, seasonal demand swings, and a business that runs on referrals and estimates:",
      items: [
        {
          icon: Phone,
          title: "Missed call text-back",
          body: "You are on a job site all day. When a call goes unanswered, an automatic text goes out within seconds — something like 'Hey, we missed your call. Looking for interior or exterior painting?' Captures the lead before they move to the next name on their list.",
        },
        {
          icon: MessageSquare,
          title: "Lead follow-up sequences",
          body: "Homeowners requesting painting quotes typically contact 3 or more companies. The first professional response wins. Every new lead — web form, Google, missed call — gets an instant reply and a multi-step follow-up sequence so you are never the slow responder.",
        },
        {
          icon: Clock,
          title: "Estimate follow-up",
          body: "Painting estimates sit for days or weeks while homeowners compare quotes and think it over. Automated follow-up at 2 days, 5 days, and 14 days keeps your quote top of mind. No chasing, no forgotten estimates, no awkward manual check-ins.",
        },
        {
          icon: CalendarCheck,
          title: "Seasonal campaign automation",
          body: "Spring and summer are exterior season. Winter is interior season. Automated campaigns go out to your past client list at the right time — exterior touch-ups before summer, interior refreshes before the holidays. Fills your schedule without manual outreach.",
        },
        {
          icon: Users,
          title: "Referral request and nurture",
          body: "Painting is heavily referral-driven but most painters never systematically ask. Automated referral requests go out after every completed job. Past clients get periodic check-ins that keep you top of mind when their neighbor asks for a recommendation.",
        },
        {
          icon: Star,
          title: "Job completion follow-up",
          body: "After every completed project, an automated sequence checks in on satisfaction, asks for a Google review, and requests referrals. Happy clients get a direct review link. Unhappy ones get routed to you before they post publicly.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your painting company?",
      subtitle:
        "Honest assessment. Some painting companies see immediate ROI. Others are not ready yet:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You miss calls because you and your crew are on ladders or behind tarps all day",
            "You send estimates but rarely follow up — they either call back or they do not",
            "You lose jobs to painters who respond faster, not painters who do better work",
            "You have years of past clients but no system for generating referrals",
            "You are running 2 or more crews and growing",
            "Your revenue swings hard between seasons and you want to smooth it out",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a solo painter fully booked year-round from word of mouth",
            "You already have an office manager who handles all follow-up consistently",
            "Your work is exclusively commercial or contract-based with no residential estimates",
            "You are not ready to invest at least $2K in a one-time build",
            "You do fewer than 3 estimates per week",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI expectations for painting contractors",
      subtitle:
        "The math is compelling because painting jobs are high-value and estimate volume is high:",
      items: [
        {
          icon: BarChart3,
          title: "The value of one more closed estimate",
          body: "Average interior painting job runs $3,000 to $10,000. Average exterior job runs $5,000 to $15,000. If automated estimate follow-up closes even one additional job per month that would have otherwise gone cold, the system pays for itself many times over.",
        },
        {
          icon: Clock,
          title: "Speed-to-lead in a quote-heavy business",
          body: "Homeowners requesting painting quotes contact 3 or more companies. Data consistently shows the first responder wins the job at a significantly higher rate. Responding in 60 seconds instead of 6 hours changes your close rate.",
        },
        {
          icon: TrendingUp,
          title: "Estimate conversion improvement",
          body: "Most painting contractors send the estimate and wait. Automated follow-up at 2, 5, and 14 days keeps your quote in front of the homeowner during their decision window. Even a small improvement in conversion rate on $5K to $10K jobs adds up fast.",
        },
        {
          icon: Users,
          title: "Referral compounding",
          body: "A painting contractor with 200 past clients and no referral system is leaving money on the table. Automated referral requests and periodic check-ins turn your past client list into a consistent lead source that compounds over time.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same lead follow-up and referral patterns that apply directly to painting contractors:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "AI voice agent handles all calls outside business hours. For painting contractors, the same system captures calls while your crew is on the job, texts back instantly, and books estimate appointments.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and reactivated",
          body: "Automated follow-up sequences organized untouched leads and drove consistent outreach. For painters, this means no estimate request or past client gets forgotten — every lead gets followed up, every past client gets asked for referrals.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for roofing companies", href: "/ai-automation-for-roofing-companies" },
        { label: "AI automation for landscaping companies", href: "/ai-automation-for-landscaping-companies" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What automation has the most impact for painting contractors?",
      answer:
        "Estimate follow-up and missed call text-back. Painting is a high-quote business — homeowners get multiple estimates and pick whoever stays in front of them. Automated estimate follow-up at 2, 5, and 14 days keeps your quote top of mind. Missed call text-back captures leads while your crew is on the job. These two alone typically deliver the fastest ROI.",
    },
    {
      question: "How does estimate follow-up timing work?",
      answer:
        "After you send an estimate, the system waits a set period — typically 2 days for the first follow-up, then 5 days, then 14 days. Each message is different and professional, not pushy. If the client books or declines at any point, the sequence stops automatically. You can customize the timing and messaging to match your style.",
    },
    {
      question: "How does referral automation work for painters?",
      answer:
        "After a job is completed, the system sends a satisfaction check-in, then asks for a Google review, then asks if they know anyone else who needs painting work. Past clients also get periodic check-ins — typically before exterior season in spring and interior season in winter. This keeps you top of mind when their neighbor, coworker, or family member mentions needing a painter.",
    },
    {
      question: "What does it cost?",
      answer:
        "A single workflow like missed call text-back or estimate follow-up runs $1K to $2K. A complete system — missed calls, lead follow-up, estimate nurture, seasonal campaigns, referral automation, and reviews — runs $3K to $6K. Fixed pricing, scoped before work starts.",
    },
    {
      question: "Will this work with my current software?",
      answer:
        "In most cases, yes. We integrate at the communication and scheduling layer. If you use Painter's Pilot, Estimate Rocket, Jobber, or another CRM with an API or webhook support, we can connect to it. If you are running everything from spreadsheets and your phone, we can set up a lightweight CRM as part of the build. We verify compatibility during the scoping call.",
    },
  ],
  faqSubtitle:
    "Practical answers for painting contractors considering automation",
  ctaHeading: "Stop losing painting jobs to slow estimates and forgotten follow-ups",
  ctaText:
    "Book a 30-minute call. We will look at your current estimate flow, identify where jobs are being lost, and give you a clear plan for what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your painting business.",
  relatedLinks: [
    { label: "AI automation for roofing companies", href: "/ai-automation-for-roofing-companies" },
    { label: "AI automation for landscaping companies", href: "/ai-automation-for-landscaping-companies" },
    { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
