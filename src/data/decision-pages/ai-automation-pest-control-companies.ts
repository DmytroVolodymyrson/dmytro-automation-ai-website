import {
  Phone,
  CalendarCheck,
  MessageSquare,
  Clock,
  Star,
  CheckCircle2,
  XCircle,
  Users,
  BarChart3,
  TrendingUp,
  Shield,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-for-pest-control-companies",
  metaTitle:
    "AI Automation for Pest Control Companies — Lead Follow-Up, Renewals, Seasonal Campaigns | Dmytro AI",
  metaDescription:
    "AI automation for pest control companies. Missed call text-back, lead follow-up, recurring service reminders, seasonal campaigns, quote follow-up, and review automation. What works and where to start.",
  badgeText: "Pest Control Industry",
  badgeIcon: Shield,
  h1: "AI Automation for Pest Control Companies",
  heroIntro:
    "A homeowner finds carpenter ants in their kitchen on a Saturday morning. They call three pest control companies. Two go to voicemail — techs are already on route. The third texts back in 20 seconds with availability. That company gets the job. Pest control is an urgency business. When someone has a pest problem, they want it solved now — not tomorrow, not after you check your voicemail at 5 PM. AI automation handles the instant response, recurring service management, and seasonal outreach that your team cannot keep up with while they are out treating homes.",
  heroSubtext:
    "Below: what pest control automation looks like in practice, where it delivers the clearest ROI, and how to decide if it is worth the investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a pest control company",
      subtitle:
        "These automations are built for the reality of running a pest control business — urgent inbound calls, recurring service contracts, and seasonal demand swings:",
      items: [
        {
          icon: Phone,
          title: "Missed call text-back",
          body: "When a call goes unanswered — and with techs on route all day, many will — an automatic text goes out within seconds. Captures the lead and starts a conversation before they call the next company on their list.",
        },
        {
          icon: MessageSquare,
          title: "Lead follow-up sequences",
          body: "Every new inquiry — web form, Google ad, missed call — gets an instant response and a multi-step follow-up sequence. Pest problems are urgent. The first company to respond wins the job more often than not.",
        },
        {
          icon: CalendarCheck,
          title: "Recurring service reminders and renewal automation",
          body: "Automated reminders before every scheduled treatment. Renewal sequences for annual contracts that are expiring. No more relying on your office to manually track who is due and who is lapsing.",
        },
        {
          icon: Users,
          title: "Seasonal campaign automation",
          body: "Spring ant campaigns. Summer mosquito treatment promotions. Fall rodent exclusion outreach. Winter wildlife prevention reminders. Automated sequences go out to the right client segments at the right time — without your team building campaigns from scratch every quarter.",
        },
        {
          icon: Clock,
          title: "Quote follow-up for one-time services",
          body: "One-time treatments like termite inspections, wildlife removal, or bed bug treatments have higher price points and longer decision cycles. Automated follow-up at 2, 5, and 14 days keeps your quote in front of homeowners who are still deciding.",
        },
        {
          icon: Star,
          title: "Review request automation",
          body: "After every completed service, an automated text asks for a Google review. Happy clients get a direct review link. Unhappy ones get routed to you first. Pest control is heavily review-driven — consistent 5-star reviews build the trust that converts searchers into callers.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your pest control company?",
      subtitle:
        "Honest assessment. Some pest control companies see immediate ROI. Others are not ready yet:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You miss calls because your techs are on route and your office cannot answer every one",
            "You lose leads to competitors who respond faster",
            "You have recurring clients but no systematic renewal outreach — contracts lapse silently",
            "Your business is seasonal and you have no consistent marketing between peak periods",
            "You are running 2 or more technicians and growing",
            "You want to offer maintenance programs but have no system to manage the outreach",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a solo operator fully booked from referrals alone",
            "You already have office staff handling all calls and follow-up consistently",
            "You have no online lead flow — no website, no ads, no inbound to optimize",
            "You want the cheapest option regardless of quality",
            "You are not ready to invest at least $2K in a one-time build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI expectations for pest control automation",
      subtitle:
        "The math is straightforward for most pest control companies:",
      items: [
        {
          icon: BarChart3,
          title: "The value of a recurring client",
          body: "A recurring pest control client is worth $500 to $2,000 per year in service revenue. Lose a handful of those to missed calls or lapsed renewals and the annual revenue impact adds up fast. A lead follow-up and renewal system costs $1K to $2K to build.",
        },
        {
          icon: Clock,
          title: "Speed-to-lead in an urgency business",
          body: "When someone finds termites or a wasp nest, they are calling companies until someone picks up. Responding in under 60 seconds — even by text — makes the difference between booking the job and never hearing from that homeowner again.",
        },
        {
          icon: TrendingUp,
          title: "Seasonal lead capture",
          body: "Pest control demand spikes hard in spring and summer. Your call volume doubles or triples, and your team is already stretched thin running routes. Automation captures every lead during peak season instead of letting them overflow to competitors.",
        },
        {
          icon: Users,
          title: "Recurring revenue protection",
          body: "Your recurring service contracts are the backbone of your business. Automated renewal sequences and service reminders prevent the silent attrition that quietly erodes your monthly revenue. Reactivating lapsed clients is cheaper than acquiring new ones.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same lead follow-up and client retention patterns that apply directly to pest control companies:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "AI voice agent handles all after-hours calls and routes requests. For pest control companies, the same system captures urgent pest inquiries and books service calls while your techs are on route.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and reactivated",
          body: "Automated follow-up sequences organized untouched leads and drove consistent outreach. For pest control companies, this means no lead or lapsed recurring client gets forgotten — especially during seasonal spikes.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for landscaping companies", href: "/ai-automation-for-landscaping-companies" },
        { label: "AI automation for cleaning companies", href: "/ai-automation-for-cleaning-companies" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is the most impactful automation for a pest control company?",
      answer:
        "Missed call text-back and recurring service renewal sequences. These solve the two biggest revenue leaks in pest control: urgent leads that go to voicemail and recurring contracts that silently lapse. Fixing those two problems typically pays for the entire automation build within the first month or two.",
    },
    {
      question: "Can the system manage recurring service reminders and renewals?",
      answer:
        "Yes. The system sends automated reminders before each scheduled treatment, handles rescheduling requests via text, and triggers renewal sequences when annual contracts are approaching expiration. It flags clients who cancel or do not renew so your team can follow up personally on high-value accounts.",
    },
    {
      question: "How do seasonal campaigns work?",
      answer:
        "You define the campaigns once — spring ant prevention, summer mosquito treatment, fall rodent exclusion, winter wildlife proofing — and the system sends them automatically to the right client segments at the right time each year. No manual list building, no forgetting to send them. They run on schedule every season.",
    },
    {
      question: "What does it cost?",
      answer:
        "A single workflow like missed call text-back runs $1K to $2K. A complete system — lead follow-up, recurring service management, seasonal campaigns, reactivation, reviews — runs $3K to $6K. Fixed pricing, scoped before work starts. A few saved clients cover the investment.",
    },
    {
      question: "Will this work with my pest control software?",
      answer:
        "In most cases, yes. We integrate at the communication and scheduling layer. If your platform — PestRoutes, FieldRoutes, Briostack, Housecall Pro, or similar — has an API or supports webhooks, we can connect to it. We verify compatibility during the scoping call.",
    },
  ],
  faqSubtitle:
    "Practical answers for pest control companies considering automation",
  ctaHeading: "Stop losing pest control jobs to missed calls and lapsed renewals",
  ctaText:
    "Book a 30-minute call. We will look at your current lead flow and recurring service management, identify where jobs and clients are being lost, and give you a clear plan for what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your pest control business.",
  relatedLinks: [
    { label: "AI automation for landscaping companies", href: "/ai-automation-for-landscaping-companies" },
    { label: "AI automation for cleaning companies", href: "/ai-automation-for-cleaning-companies" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
