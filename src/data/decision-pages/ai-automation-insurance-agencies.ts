import {
  Shield,
  Phone,
  CalendarCheck,
  Mail,
  Clock,
  CheckCircle2,
  XCircle,
  BarChart3,
  TrendingUp,
  Bot,
  Users,
  Star,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-for-insurance-agencies",
  metaTitle:
    "AI Automation for Insurance Agencies — Lead Follow-Up, Renewals, Quoting | Dmytro AI",
  metaDescription:
    "AI automation for insurance agencies. Lead follow-up, renewal reminders, quote follow-up, cross-sell campaigns, and client communication. What works and where to start.",
  badgeText: "Insurance Industry",
  badgeIcon: Shield,
  h1: "AI Automation for Insurance Agencies",
  heroIntro:
    "Insurance is a follow-up business. The agency that responds fastest to quote requests wins the policy. The agency that stays in touch before renewal keeps the client. The agency that cross-sells proactively grows revenue per account. But most agencies are buried in paperwork, chasing signatures, and juggling carrier portals instead of actually talking to clients. AI automation handles the repetitive communication so your producers can focus on selling.",
  heroSubtext:
    "Below: what automation looks like for insurance agencies, which workflows deliver the clearest ROI, and how to decide if your agency is ready.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in an insurance agency",
      subtitle:
        "These automations are built for insurance agency workflows — high lead volume, long nurture cycles, and renewal-driven revenue:",
      items: [
        {
          icon: Phone,
          title: "Lead response and speed-to-quote",
          body: "When a quote request comes in — web form, phone call, referral — an instant response goes out within seconds. Pre-qualifying questions are asked automatically so your producer can jump straight to quoting instead of playing phone tag.",
        },
        {
          icon: Mail,
          title: "Quote follow-up sequences",
          body: "Quote sent but not signed? Automated follow-up at 1 day, 3 days, and 7 days. Each touchpoint adds value — answering common objections, comparing coverage highlights, or reminding of the quote expiration date.",
        },
        {
          icon: CalendarCheck,
          title: "Renewal reminders and campaigns",
          body: "60-day, 30-day, and 14-day renewal reminders go out automatically. For high-value accounts, internal alerts notify the producer to make a personal call. For standard renewals, the automated sequence handles the entire process.",
        },
        {
          icon: Users,
          title: "Cross-sell and upsell campaigns",
          body: "Client has auto but not home? Renter's but not umbrella? Automated campaigns identify cross-sell opportunities based on current coverage and reach out with relevant messaging at natural touch points.",
        },
        {
          icon: Star,
          title: "Review and referral requests",
          body: "After a claim is resolved or a policy is bound, an automated sequence requests a Google review and asks for referrals. Timing is key — the ask goes out when the client is most satisfied.",
        },
        {
          icon: Bot,
          title: "After-hours inquiry handling",
          body: "AI text responder or voice agent that answers after-hours inquiries, captures basic information, and books a callback for the next business day. No lead sits unanswered until morning.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is automation a good fit for your agency?",
      subtitle:
        "Honest assessment. Some agencies see immediate ROI. Others are not ready:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You get 20+ quote requests per month and response time is inconsistent",
            "Renewal retention is slipping because outreach is manual and late",
            "You have a book of business with cross-sell potential you are not tapping",
            "Producers spend more time on admin than on selling",
            "You use an AMS or CRM but follow-up is still manual",
            "You are a 2-15 person agency looking to grow without adding staff",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a captive agent with limited product flexibility",
            "Your agency management system handles all communication already",
            "You get fewer than 10 quote requests per month",
            "Your book is small enough that manual renewal outreach is manageable",
            "You are not willing to invest at least $2K in a one-time build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI expectations for insurance agency automation",
      subtitle:
        "The math works well for most independent agencies:",
      items: [
        {
          icon: TrendingUp,
          title: "Speed-to-quote impact",
          body: "Insurance shoppers request multiple quotes simultaneously. The agency that responds first has a significant advantage. Reducing response time from hours to minutes means winning policies that would have gone to a faster competitor.",
        },
        {
          icon: BarChart3,
          title: "Renewal retention",
          body: "Losing a client at renewal costs the lifetime value of that policy. Automated renewal campaigns that start 60 days out and escalate appropriately keep retention rates high without manual effort from your team.",
        },
        {
          icon: Clock,
          title: "Producer time recovery",
          body: "If your producers spend 30-40% of their time on follow-up emails, reminder calls, and administrative communication, automation reclaims that time for actual sales conversations. At even $50/hour effective cost, that adds up fast.",
        },
        {
          icon: Users,
          title: "Cross-sell revenue",
          body: "Most agencies know they should cross-sell more but do not have the bandwidth. Automated cross-sell campaigns that run in the background consistently generate additional policies from your existing book — revenue with near-zero acquisition cost.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same lead follow-up and CRM automation patterns that apply directly to insurance agencies:",
      studies: [
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and followed up",
          body: "Automated CRM workflows organized leads and ran multi-step follow-up sequences. For insurance, the same system handles quote follow-up, renewal outreach, and cross-sell campaigns.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Restaurant",
          headline: "100% of after-hours inquiries captured",
          body: "AI handles all after-hours communication and routes requests. For insurance, the same approach captures after-hours quote requests and books callbacks for the next business day.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "AI email sequence automation", href: "/ai-email-sequence-automation" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Will this work with my agency management system?",
      answer:
        "In most cases, yes. We integrate at the communication and data layer. If your AMS (Applied Epic, Hawksoft, QQ Catalyst, etc.) has an API or supports webhooks, we can connect to it. For systems without APIs, we use email parsing or form-based triggers as alternatives.",
    },
    {
      question: "How do you handle compliance with insurance communication regulations?",
      answer:
        "All automated messages are opt-in based and include proper identification and unsubscribe options. We build sequences that comply with CAN-SPAM, TCPA, and state insurance communication regulations. You approve all message templates before they go live.",
    },
    {
      question: "How long does setup take?",
      answer:
        "A lead response and quote follow-up system can be live in 1-2 weeks. A full system with renewal campaigns, cross-sell automation, and review requests takes 2-4 weeks. We scope everything before work starts.",
    },
    {
      question: "What does it cost?",
      answer:
        "A single workflow like quote follow-up runs $1.5K-$2.5K. A complete system — lead response, quote nurture, renewal campaigns, cross-sell, reviews — runs $4K-$7K. Fixed pricing, scoped before work starts.",
    },
    {
      question: "Can the automation distinguish between personal and commercial lines?",
      answer:
        "Yes. Workflows are segmented by line of business, policy type, and client tier. Commercial accounts can get a different follow-up cadence, different messaging, and different escalation rules than personal lines.",
    },
  ],
  faqSubtitle:
    "Practical answers for insurance agencies considering automation",
  ctaHeading: "Stop losing policies to slow follow-up",
  ctaText:
    "Book a 30-minute call. We will look at your current lead flow and renewal process, identify where policies are being lost, and give you a clear plan for what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your insurance agency.",
  relatedLinks: [
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "AI email sequence automation", href: "/ai-email-sequence-automation" },
    { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
