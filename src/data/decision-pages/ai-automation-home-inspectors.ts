import {
  ClipboardCheck,
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
  slug: "ai-automation-for-home-inspectors",
  metaTitle:
    "AI Automation for Home Inspectors — Agent Nurture, Booking, Follow-Up | Dmytro AI",
  metaDescription:
    "AI automation for home inspectors. Missed call text-back, agent nurture campaigns, booking automation, report follow-up, and review requests. What works and where to start.",
  badgeText: "Home Inspection Industry",
  badgeIcon: ClipboardCheck,
  h1: "AI Automation for Home Inspectors",
  heroIntro:
    "You are crawling through an attic when a real estate agent calls with a referral. Two hours later, when you finally check your phone, that agent has already sent the buyer to another inspector. Your income depends on agent relationships, and agent relationships depend on responsiveness. AI automation answers when you cannot, follows up with every agent consistently, and turns booking into a self-service process so you never lose a referral to a missed call.",
  heroSubtext:
    "Below: what home inspection automation looks like in practice, where it delivers the most value, and how to decide if it is the right investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a home inspection business",
      subtitle:
        "These automations are built for how home inspectors actually work — 2 to 4 hours on-site per inspection, phone off, and a business that lives and dies by agent relationships:",
      items: [
        {
          icon: Phone,
          title: "Missed call text-back",
          body: "You are on-site for 2 to 4 hours per inspection and cannot answer the phone. When a call goes unanswered, an automatic text goes out within seconds — captures the caller's needs and keeps the conversation alive until you are available.",
        },
        {
          icon: MessageSquare,
          title: "Lead follow-up sequences",
          body: "Real estate agents send referrals and expect fast confirmation. Every new inquiry — agent call, web form, referral — gets an instant response and a follow-up sequence. The agent knows you are on it, even when you are under a house.",
        },
        {
          icon: CalendarCheck,
          title: "Booking automation",
          body: "Self-scheduling based on your availability, location, and inspection type. Agents and buyers book directly without the back-and-forth of phone tag. Confirmations, reminders, and rescheduling are handled automatically.",
        },
        {
          icon: Users,
          title: "Real estate agent nurture campaigns",
          body: "Automated check-ins with referring agents — periodic touchpoints that keep you top of mind without manual effort. Agents who referred you 6 months ago get a professional follow-up, not silence.",
        },
        {
          icon: Bot,
          title: "Report delivery and follow-up",
          body: "Automated report delivery to the buyer and agent when your report is ready. Follow-up messages check if they have questions, then transition to a review request. Professional and consistent every time.",
        },
        {
          icon: Star,
          title: "Review request automation",
          body: "After every inspection, an automated sequence asks for a Google review. Happy clients get a direct review link. This builds your online presence and gives agents confidence when recommending you to buyers.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your inspection business?",
      subtitle:
        "Honest assessment. Some inspectors see immediate ROI. Others are not ready yet:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You miss calls during inspections — 2 to 4 hours on-site with your phone off or in your pocket",
            "Real estate agents have stopped referring you because you did not respond fast enough",
            "Booking is manual and time-consuming — phone tag with agents and buyers eats your evenings",
            "You have relationships with past referring agents but no system to stay in touch",
            "You are doing 10 or more inspections per month and want to grow",
            "You know you should be asking for reviews but rarely do it consistently",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a solo inspector fully booked from 2 to 3 agents who always call you first",
            "You do exclusively commercial inspections with corporate contracts and no agent referrals",
            "You are doing fewer than 5 inspections per month",
            "You already have a virtual assistant or office manager handling all scheduling and follow-up",
            "You are not ready to invest at least $2K in a one-time build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI expectations for home inspectors",
      subtitle:
        "The math for inspectors is less about individual job value and more about agent relationships:",
      items: [
        {
          icon: Users,
          title: "The real value of an agent relationship",
          body: "A single active referring agent can send you $5,000 to $20,000 per year in inspection work. Missing that agent's call while you are on-site — even once — can cost the relationship. Automated text-back and fast response protect your most valuable asset.",
        },
        {
          icon: BarChart3,
          title: "Per-inspection economics",
          body: "Average home inspection runs $350 to $600. The margins are solid but the volume depends entirely on referral flow. Losing 2 to 3 inspections per month to slow response costs $700 to $1,800 — more than the automation build in a single quarter.",
        },
        {
          icon: Clock,
          title: "Agent nurture compounding",
          body: "Most inspectors stay in touch with their top 2 to 3 agents and forget the rest. Automated nurture campaigns keep you top of mind with every agent who has ever referred you. Over 12 months, reactivating even a few dormant agent relationships adds meaningful volume.",
        },
        {
          icon: TrendingUp,
          title: "Booking friction reduction",
          body: "Every round of phone tag between an agent and your voicemail is a chance for them to call another inspector. Self-scheduling eliminates this friction entirely. Agents book in 60 seconds and get instant confirmation.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same call handling and relationship nurture patterns that apply directly to home inspectors:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "AI voice agent handles all calls when the team is unavailable. For home inspectors, the same system captures agent referrals and buyer inquiries while you are on-site, texts back instantly, and routes urgent requests.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and reactivated",
          body: "Automated follow-up sequences organized dormant contacts and built consistent outreach. For inspectors, this means every referring agent gets systematic nurture — no relationship goes cold because you got busy.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for real estate", href: "/ai-automation-for-real-estate" },
        { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What automation has the most impact for home inspectors?",
      answer:
        "Missed call text-back and agent nurture campaigns. Your business runs on agent referrals, and agents expect fast response. Missed call text-back captures every inquiry while you are on-site. Agent nurture campaigns keep you top of mind with every agent who has ever referred you — not just your top 2 or 3. These two together protect and grow your referral pipeline.",
    },
    {
      question: "How do agent nurture campaigns work?",
      answer:
        "After an agent refers a client, they enter your nurture system. They receive periodic check-ins — typically every 4 to 6 weeks — with a brief, professional message. These are not spammy marketing emails. They are short touchpoints that remind the agent you exist and are available. Agents who have not referred in 3 to 6 months get a slightly different message designed to re-engage the relationship.",
    },
    {
      question: "How does booking automation handle availability and inspection types?",
      answer:
        "The booking system syncs with your calendar and accounts for travel time between locations. It can differentiate inspection types — standard home, condo, townhouse, radon add-on, sewer scope — and adjust time blocks accordingly. Agents and buyers see your real availability and book directly. Confirmations and reminders go out automatically.",
    },
    {
      question: "What does it cost?",
      answer:
        "A single workflow like missed call text-back or review automation runs $1K to $2K. A complete system — missed calls, agent nurture, booking automation, report follow-up, and reviews — runs $3K to $6K. Fixed pricing, scoped before work starts.",
    },
    {
      question: "Will this work with my current inspection software?",
      answer:
        "In most cases, yes. We integrate at the communication and scheduling layer. If you use Spectora, HomeGauge, ISN, Horizon, or another platform with an API or webhook support, we can connect to it. We verify compatibility during the scoping call and confirm before any work begins.",
    },
  ],
  faqSubtitle:
    "Practical answers for home inspectors considering automation",
  ctaHeading: "Stop losing agent referrals to missed calls and forgotten follow-ups",
  ctaText:
    "Book a 30-minute call. We will look at your current referral flow, identify where inspections are being lost, and give you a clear plan for what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your inspection business.",
  relatedLinks: [
    { label: "AI automation for real estate", href: "/ai-automation-for-real-estate" },
    { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
