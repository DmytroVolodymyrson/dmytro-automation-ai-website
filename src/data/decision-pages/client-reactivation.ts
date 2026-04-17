import {
  RefreshCw,
  Mail,
  MessageSquare,
  Clock,
  Users,
  Target,
  CheckCircle2,
  XCircle,
  TrendingUp,
  BarChart3,
  Bot,
  Phone,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "client-reactivation-automation",
  metaTitle:
    "Client Reactivation Automation — Turn Past Customers Into Repeat Business | Dmytro AI",
  metaDescription:
    "How client reactivation automation works for service businesses. Automated campaigns to re-engage past customers, dormant leads, and lapsed clients. What works and where to start.",
  badgeText: "Retention",
  badgeIcon: RefreshCw,
  h1: "Client Reactivation Automation",
  heroIntro:
    "Your CRM is full of past clients who have not heard from you in months. Former customers who were happy with your work but forgot you exist. Leads who showed interest but never converted. These contacts already know who you are — they are the cheapest, highest-quality leads in your business. Client reactivation automation runs targeted campaigns to bring them back, without your team manually reaching out to hundreds of contacts.",
  heroSubtext:
    "Below: what reactivation campaigns look like, which segments respond best, and how to run them without being annoying.",
  sections: [
    {
      type: "cards",
      title: "Types of reactivation campaigns",
      subtitle:
        "Different segments need different approaches. These are the campaigns with the highest response rates for service businesses:",
      items: [
        {
          icon: Users,
          title: "Past client re-engagement",
          body: "Clients who have not booked in 6+ months get a personalized check-in: 'It has been a while since we last worked together — is there anything coming up we can help with?' Simple, conversational, and effective.",
        },
        {
          icon: Target,
          title: "Seasonal campaigns",
          body: "HVAC before summer and winter. Dental for overdue cleanings. Accounting before tax season. Timed campaigns that align with when customers actually need the service again.",
        },
        {
          icon: Mail,
          title: "Dormant lead re-engagement",
          body: "Leads who inquired but never converted get a follow-up 30-90 days later: 'You reached out about [service] a while back — is that still on your radar?' Some were not ready then. Some are ready now.",
        },
        {
          icon: MessageSquare,
          title: "Special offer or limited promotion",
          body: "Time-limited offers to past clients: early booking discounts, loyalty pricing, or package deals. Creates urgency without devaluing your service. Works best when the offer is genuinely valuable.",
        },
        {
          icon: Phone,
          title: "AI voice outreach",
          body: "For high-value reactivation, an AI voice agent calls past clients with a personalized message. More impactful than email for certain demographics and service types. Routes interested contacts to your team.",
        },
        {
          icon: Bot,
          title: "Review and referral request",
          body: "Reactivation is also an opportunity to ask for reviews and referrals. Past clients who had a good experience are your best source of new business — but most never get asked.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is reactivation automation right for your business?",
      subtitle:
        "If you have past clients who could buy again, the answer is almost always yes:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Strong fit",
          variant: "green",
          items: [
            "You have 200+ contacts in your CRM from past clients and leads",
            "Your service is recurring or repeat-purchase (maintenance, cleaning, checkups)",
            "You have not contacted your past client list in months",
            "Customer acquisition cost is high — reactivating past clients is cheaper than finding new ones",
            "You have seasonal demand patterns",
            "Past clients were generally satisfied with your work",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your service is one-time only (e.g., wedding photography)",
            "You have fewer than 50 past contacts",
            "Your CRM data is outdated or contact info is unreliable",
            "Past clients had mixed or poor experiences (fix service quality first)",
            "You do not have a CRM or contact database at all",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Why reactivation is your cheapest lead source",
      subtitle:
        "Past clients cost less to convert and spend more:",
      blocks: [
        {
          heading: "They already trust you",
          body: "A past client does not need to be convinced you are legitimate. They have already worked with you and know what to expect. The sales cycle is shorter, the conversion rate is higher, and they are less likely to price-shop aggressively.",
        },
        {
          heading: "They cost nothing to acquire",
          body: "You already have their contact information. No ad spend, no lead generation cost, no referral fee. The only cost is the campaign itself and the messaging tools. This makes reactivation one of the highest-ROI marketing activities for any service business.",
        },
        {
          heading: "They forgot about you, not left you",
          body: "Most clients do not stop using your service because of a bad experience. They just forget. Life gets busy. They move on to other priorities. A well-timed reminder — 'Hey, it has been 6 months since your last service' — is often all it takes to bring them back.",
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI of reactivation campaigns",
      subtitle:
        "The numbers on reactivation consistently outperform new lead acquisition:",
      items: [
        {
          icon: TrendingUp,
          title: "Response rates",
          body: "Reactivation campaigns to past clients typically see response rates of 5-15%, compared to 1-3% for cold outreach. These are people who already know and trust your business.",
        },
        {
          icon: BarChart3,
          title: "Revenue per campaign",
          body: "A single reactivation campaign to 500 past contacts can generate 25-75 responses and 10-30 booked jobs. At $300 average job value, that is $3,000-$9,000 from one automated campaign.",
        },
        {
          icon: Clock,
          title: "Ongoing automation",
          body: "Once built, reactivation campaigns run on autopilot. Contacts automatically enter the reactivation sequence when they hit the inactivity threshold. Your pipeline refills itself without manual effort.",
        },
        {
          icon: Bot,
          title: "Setup cost",
          body: "A reactivation system typically costs $2K-$4K to build, covering segmentation, messaging, multi-channel outreach, and CRM integration. Monthly running costs are minimal — just messaging platform fees.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Reactivation patterns in practice",
      subtitle:
        "These projects use the same database reactivation and re-engagement patterns:",
      studies: [
        {
          industry: "E-Commerce",
          headline: "Automated follow-up for thousands of contacts",
          body: "CRM workflows organized and re-engaged dormant contacts with multi-step outreach sequences. The same segmentation and reactivation logic powers client reactivation for service businesses.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "HVAC database reactivation", href: "/hvac-database-reactivation" },
        { label: "AI email sequence automation", href: "/ai-email-sequence-automation" },
        { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How far back should I go with reactivation?",
      answer:
        "6-18 months is the sweet spot for most service businesses. Clients from 6-12 months ago respond best. Beyond 18 months, response rates drop significantly and contact info may be outdated. For recurring services like HVAC or dental, even 2+ years can work if the contact info is good.",
    },
    {
      question: "Will past clients be annoyed by outreach?",
      answer:
        "Not if done right. A personalized, relevant message from a business they used before is welcomed by most people. The key is relevance and frequency — one well-timed campaign every 3-6 months is helpful. Weekly promotional blasts are annoying.",
    },
    {
      question: "What channels work best for reactivation?",
      answer:
        "SMS and email together outperform either alone. SMS gets opened and read quickly. Email allows for longer, more detailed messages. AI voice outreach adds a personal touch for high-value segments. The right mix depends on your client demographics.",
    },
    {
      question: "Can I segment my database for different campaigns?",
      answer:
        "Yes, and you should. Past clients who bought service A get a different message than those who bought service B. Clients who were last active 6 months ago get a different tone than those from 18 months ago. Segmentation is what separates effective reactivation from generic blasts.",
    },
    {
      question: "What does it cost?",
      answer:
        "A reactivation automation system runs $2K-$4K to build, including segmentation, multi-channel sequences, CRM integration, and response handling. Individual campaign runs cost $50-$200 in messaging fees depending on database size.",
    },
  ],
  faqSubtitle:
    "Practical answers about client reactivation automation",
  ctaHeading: "Stop ignoring your best lead source",
  ctaText:
    "Book a 30-minute call. We will look at your past client database, identify the highest-value segments, and map out a reactivation campaign that makes sense for your business.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about turning your existing contacts into revenue.",
  relatedLinks: [
    { label: "HVAC database reactivation", href: "/hvac-database-reactivation" },
    { label: "AI email sequence automation", href: "/ai-email-sequence-automation" },
    { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
