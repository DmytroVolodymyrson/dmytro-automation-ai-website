import {
  Calculator,
  DollarSign,
  Clock,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  XCircle,
  Users,
  Target,
  AlertTriangle,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-roi-guide",
  metaTitle:
    "AI Automation ROI Guide for Small Business — Is It Worth It? | Dmytro AI",
  metaDescription:
    "How to calculate AI automation ROI for your small business. Real cost breakdowns, payback timelines, and an honest framework for deciding whether automation is worth the investment.",
  badgeText: "ROI Framework",
  badgeIcon: Calculator,
  h1: "AI Automation ROI Guide for Small Business",
  heroIntro:
    "Every AI automation pitch promises 10x returns. The reality is more nuanced. Some automations pay for themselves in the first month. Others take six months. A few are not worth building at all. This guide gives you a practical framework for calculating ROI on AI automation — with real numbers, not vendor marketing.",
  heroSubtext:
    "Below: how to think about automation ROI, which automations have the clearest payback, and how to avoid spending money on the wrong things.",
  sections: [
    {
      type: "prose",
      title: "How to think about automation ROI",
      subtitle:
        "Before calculating anything, understand the three ways automation creates value:",
      blocks: [
        {
          heading: "1. Revenue recovered — leads you are currently losing",
          body: "This is the biggest lever for most service businesses. If you miss calls, respond to leads slowly, or fail to follow up on quotes, you are already losing money. The ROI calculation is straightforward: estimate how many leads slip through per month, multiply by your average job value and close rate, and you have the revenue at stake. Most businesses underestimate this number significantly.",
        },
        {
          heading: "2. Time reclaimed — hours your team spends on repetitive tasks",
          body: "Calculate how many hours per week your team spends on scheduling, follow-up emails, data entry, and status updates. Multiply by their effective hourly cost. This gives you the labor cost of manual work. Automation does not replace people — it frees them to do higher-value work.",
        },
        {
          heading: "3. Capacity unlocked — growth without adding headcount",
          body: "This one is harder to quantify but often the most valuable. If your current team can handle 50 clients with manual processes and 80 clients with automation, you have unlocked 60% more capacity without a single hire. The value depends on your growth plans, but the math usually favors automation over hiring for repeatable tasks.",
        },
      ],
    },
    {
      type: "table",
      title: "ROI by automation type",
      subtitle:
        "Realistic payback timelines based on what we see across service businesses. These are ranges, not guarantees:",
      headers: ["Typical Cost", "Monthly Value", "Payback"],
      rows: [
        {
          label: "Missed call text-back",
          values: ["$1K–$2K", "$500–$3K in recovered leads", "1–3 months"],
        },
        {
          label: "Lead follow-up sequences",
          values: ["$2K–$4K", "$1K–$5K in converted leads", "1–4 months"],
        },
        {
          label: "Appointment scheduling",
          values: ["$1.5K–$3K", "$300–$1.5K in time savings", "2–6 months"],
        },
        {
          label: "Client onboarding",
          values: ["$2K–$5K", "$500–$2K in time savings", "3–6 months"],
        },
        {
          label: "Review request automation",
          values: ["$800–$1.5K", "Hard to quantify directly", "3–9 months"],
        },
        {
          label: "Database reactivation",
          values: ["$2K–$4K", "$2K–$10K in reactivated revenue", "Often < 1 month"],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is automation worth it for your business right now?",
      subtitle:
        "Honest assessment. Not every business is ready:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Likely worth it",
          variant: "green",
          items: [
            "You are losing leads to slow response or missed calls",
            "Your team spends 10+ hours per week on tasks that could be automated",
            "You are spending money on ads but not converting enough leads",
            "You have a repeatable sales or onboarding process",
            "You are growing and need to handle more volume without hiring",
            "Your average customer value is $500+ (services) or $50+ (recurring)",
          ],
        },
        {
          icon: XCircle,
          heading: "Probably not yet",
          variant: "neutral",
          items: [
            "You have fewer than 10 leads per month",
            "Your current process works well and clients are happy",
            "You do not have a CRM or any digital tools in place",
            "Your business model is changing and processes are not stable",
            "You want automation to fix a broken product or service",
            "Your budget is under $1.5K and you need everything at once",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Common ROI mistakes to avoid",
      subtitle:
        "These trip up most small businesses evaluating automation:",
      items: [
        {
          icon: AlertTriangle,
          title: "Automating the wrong thing first",
          body: "Start with the automation that has the clearest, most direct revenue impact. For most businesses, that is speed-to-lead — responding to inquiries faster. Do not start with internal process optimization if you are still losing leads at the top of the funnel.",
        },
        {
          icon: DollarSign,
          title: "Ignoring ongoing costs",
          body: "The build cost is not the full picture. Factor in monthly platform fees ($50-$200 for CRM, $20-$50 for automation tools), AI usage costs ($10-$100/month for voice or chat), and occasional maintenance. A $3K build with $100/month in running costs is still a great deal if it recovers $2K/month.",
        },
        {
          icon: Target,
          title: "Expecting instant perfection",
          body: "Every automation needs a tuning period. The first version captures 80% of the value. Refinements over the first month get you to 95%. Plan for 2-4 weeks of optimization after launch before judging ROI.",
        },
        {
          icon: Lightbulb,
          title: "Comparing against zero instead of the alternative",
          body: "The real comparison is not 'automation vs. doing nothing.' It is 'automation vs. hiring someone to do this manually.' A $3K automation that replaces 10 hours per week of admin work is dramatically cheaper than a part-time hire.",
        },
      ],
    },
    {
      type: "cards",
      title: "Where to start: highest-ROI automations by industry",
      subtitle:
        "If you are not sure where to begin, here is what we recommend based on industry:",
      items: [
        {
          icon: Users,
          title: "Home services (HVAC, plumbing, electrical)",
          body: "Start with missed call text-back and lead follow-up. These have the fastest payback because emergency service calls are high-value and extremely time-sensitive.",
        },
        {
          icon: BarChart3,
          title: "Professional services (law, accounting, consulting)",
          body: "Start with client onboarding automation and appointment scheduling. The time savings per client compound fast when you are onboarding multiple clients per month.",
        },
        {
          icon: TrendingUp,
          title: "Real estate and mortgage",
          body: "Start with lead follow-up sequences and database reactivation. The long sales cycle means consistent follow-up is the difference between closing and losing to a faster competitor.",
        },
        {
          icon: ArrowUpRight,
          title: "Healthcare (dental, chiropractic, med spa)",
          body: "Start with appointment reminders and recall campaigns. No-show reduction and patient reactivation have the most direct revenue impact for appointment-based practices.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "How do I calculate ROI if I do not track my lead sources?",
      answer:
        "Start simple. Estimate how many inquiries you get per month (calls, forms, emails), how many you respond to within an hour, and how many fall through the cracks. Even rough estimates reveal whether the opportunity is worth pursuing. We help you set up proper tracking as part of any automation build.",
    },
    {
      question: "What is a realistic payback period?",
      answer:
        "For revenue-generating automations like lead follow-up and missed call text-back, 1-3 months is typical. For efficiency automations like onboarding and scheduling, 3-6 months. Database reactivation campaigns often pay for themselves on the first run.",
    },
    {
      question: "Is it better to start small or build a full system?",
      answer:
        "Start small. Pick the one automation with the clearest ROI, build it, prove it works, then expand. A $2K automation that delivers results in 30 days builds confidence and funds the next build. A $10K project that takes 3 months to launch is risky.",
    },
    {
      question: "How much should I budget for my first automation?",
      answer:
        "For a single workflow (missed call text-back, lead follow-up sequence, or onboarding automation), budget $1.5K-$3K. For a multi-workflow system, $3K-$6K. Monthly running costs are typically $50-$200 depending on tools and volume.",
    },
    {
      question: "Can you show me the ROI for my specific situation?",
      answer:
        "Yes. On the scoping call we walk through your current numbers — lead volume, response time, close rate, average job value — and build a simple ROI model. If the math does not work, we will tell you that too.",
    },
  ],
  faqSubtitle:
    "Honest answers about automation ROI for small businesses",
  ctaHeading: "Find out what automation is actually worth for your business",
  ctaText:
    "Book a 30-minute call. We will walk through your numbers, identify the highest-ROI automation for your situation, and give you a realistic payback estimate.",
  ctaSubtext:
    "No obligation. If the ROI does not make sense, we will tell you.",
  relatedLinks: [
    { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
    { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "Client onboarding automation", href: "/client-onboarding-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
