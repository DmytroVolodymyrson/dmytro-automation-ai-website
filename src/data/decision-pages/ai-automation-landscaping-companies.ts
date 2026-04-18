import {
  Leaf,
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
  slug: "ai-automation-for-landscaping-companies",
  metaTitle:
    "AI Automation for Landscaping Companies — Lead Follow-Up, Estimate Nurture, Seasonal Campaigns | Dmytro AI",
  metaDescription:
    "AI automation for landscaping companies. Lead follow-up, estimate follow-up, missed call text-back, seasonal upsell campaigns, recurring service management, and review automation. What works and where to start.",
  badgeText: "Landscaping Industry",
  badgeIcon: Leaf,
  h1: "AI Automation for Landscaping Companies",
  heroIntro:
    "Spring hits and your phone explodes. Thirty quote requests come in over a weekend. Your crews are out from 7 AM to dark, you are juggling estimates between job sites, and by Tuesday half those leads have already booked with the company that responded first. Landscaping companies live and die by seasonal volume — spring rush, summer maintenance, fall cleanup, winter contracts. AI automation handles the lead response, estimate follow-up, and seasonal outreach that your team cannot keep up with when every crew is in the field.",
  heroSubtext:
    "Below: what landscaping company automation looks like in practice, where it delivers the clearest ROI, and how to decide if it is worth the investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a landscaping company",
      subtitle:
        "These automations are built for the reality of running a landscaping business — crews in the field all day, seasonal surges, and estimates that take days to prepare:",
      items: [
        {
          icon: Phone,
          title: "Missed call text-back",
          body: "When a call goes unanswered — because you are on a job site or driving between properties — an automatic text goes out within seconds. Captures the lead and starts a conversation before they call your competitor down the road.",
        },
        {
          icon: MessageSquare,
          title: "Lead follow-up sequences",
          body: "Every new inquiry — web form, Google ad, missed call — gets an instant response and a multi-step follow-up sequence. During spring rush, this is the difference between winning and losing dozens of jobs.",
        },
        {
          icon: Clock,
          title: "Estimate follow-up",
          body: "Landscaping estimates take time to prepare — site visits, measurements, material calculations. Then the quote sits in the customer's inbox. Automated sequences follow up at 2 days, 5 days, and 14 days until they approve or decline.",
        },
        {
          icon: TrendingUp,
          title: "Seasonal upsell campaigns",
          body: "Automated outreach to existing clients for spring cleanup, mulching, fall leaf removal, and snow removal. Creates revenue in every season instead of feast-or-famine cycles tied to mowing season.",
        },
        {
          icon: CalendarCheck,
          title: "Recurring service management",
          body: "Automated confirmations before every weekly mowing visit. Handles schedule change requests, sends weather delay notifications, and flags clients who cancel multiple times in a row.",
        },
        {
          icon: Star,
          title: "Review request automation",
          body: "After every completed project or at the end of the mowing season, an automated text asks for a Google review. Happy clients get a direct review link. Unhappy ones get routed to you first.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your landscaping company?",
      subtitle:
        "Honest assessment. Some landscaping companies see immediate ROI. Others are not ready yet:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Spring rush overwhelms your phone capacity and leads slip through",
            "You send estimates but do not follow up when the customer goes quiet",
            "Your crews are in the field all day and calls go to voicemail",
            "You have a seasonal business with revenue dips between peak months",
            "You are running 2 or more crews and growing",
            "You are losing jobs to faster-responding competitors",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a solo landscaper fully booked from referrals",
            "You already have office staff handling scheduling and follow-up consistently",
            "You only do commercial contracts with locked-in annual agreements",
            "You are not ready to invest at least $2K in a one-time build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI expectations for landscaping company automation",
      subtitle:
        "The math is straightforward for most landscaping companies:",
      items: [
        {
          icon: BarChart3,
          title: "The cost of a slow response",
          body: "Your average landscape project runs $2,000 to $10,000. During spring rush, every hour of delay costs jobs — homeowners request 3 to 5 quotes and book with whoever responds first. An instant lead response system costs $1K to $2K to build and can pay for itself with a single captured project.",
        },
        {
          icon: Clock,
          title: "Estimate conversion",
          body: "Landscaping estimates take real effort — site visits, measurements, detailed proposals. Then they sit in the customer's inbox unanswered. Automated follow-up at the right intervals converts quotes that would otherwise die silently, recovering revenue you already spent time earning.",
        },
        {
          icon: TrendingUp,
          title: "Seasonal revenue smoothing",
          body: "Most landscaping companies see revenue crater between seasons. Automated upsell campaigns — spring cleanup to existing mowing clients, snow removal to summer clients, fall leaf removal before the season starts — create consistent revenue year-round instead of scrambling each season.",
        },
        {
          icon: Users,
          title: "Recurring client lifetime value",
          body: "A weekly mowing client is worth $2,000 to $5,000 per year. Add seasonal services and that number doubles. Automated confirmations, easy rescheduling, and proactive upsell campaigns keep clients locked in year after year instead of shopping around each spring.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same lead follow-up and seasonal outreach patterns that apply directly to landscaping companies:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "AI voice agent handles all after-hours calls and routes requests. For landscaping companies, the same system captures quote requests and books estimates while your crews are in the field.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and reactivated",
          body: "Automated follow-up sequences organized untouched leads and drove consistent outreach. For landscaping companies, this means no spring lead sits unanswered and no past client gets forgotten when fall cleanup season arrives.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for painting contractors", href: "/ai-automation-for-painting-contractors" },
        { label: "AI automation for pest control companies", href: "/ai-automation-for-pest-control-companies" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is the most impactful automation for a landscaping company?",
      answer:
        "Instant lead response during spring rush and estimate follow-up. Most landscaping companies lose the most revenue from leads that go unanswered for hours during peak season and from detailed estimates that never get followed up on. Fixing those two problems typically pays for the entire automation build within the first few weeks of spring.",
    },
    {
      question: "How do seasonal campaigns work?",
      answer:
        "You define the services and timing once — spring cleanup outreach in early March, mulching offers in April, fall leaf removal in September, snow removal in October. The system sends targeted messages to the right client segments at the right time. Each campaign runs automatically year after year with no manual effort.",
    },
    {
      question: "Can the system handle recurring mowing schedule changes?",
      answer:
        "Yes. The system sends confirmation messages before each weekly visit and provides a simple way for clients to skip, reschedule, or add services via text. If a client cancels multiple times in a row, it flags them so you can follow up personally before they churn.",
    },
    {
      question: "What does it cost?",
      answer:
        "A single workflow like missed call text-back runs $1K to $2K. A complete system — lead follow-up, estimate nurture, seasonal campaigns, recurring service management, reviews — runs $3K to $6K. Fixed pricing, scoped before work starts.",
    },
    {
      question: "Will this work with my landscaping business software?",
      answer:
        "In most cases, yes. We integrate at the communication and scheduling layer. If your platform — Aspire, LMN, Jobber, Service Autopilot, or similar — has an API or supports webhooks, we can connect to it. We verify compatibility during the scoping call.",
    },
  ],
  faqSubtitle:
    "Practical answers for landscaping companies considering automation",
  ctaHeading: "Stop losing landscaping jobs to slow quotes and seasonal gaps",
  ctaText:
    "Book a 30-minute call. We will look at your current lead flow, identify where jobs are being lost, and give you a clear plan for what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your landscaping business.",
  relatedLinks: [
    { label: "AI automation for painting contractors", href: "/ai-automation-for-painting-contractors" },
    { label: "AI automation for pest control companies", href: "/ai-automation-for-pest-control-companies" },
    { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
