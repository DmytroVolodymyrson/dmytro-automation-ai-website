import {
  Heart,
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
  slug: "ai-automation-for-chiropractors",
  metaTitle:
    "AI Automation for Chiropractors — Patient Booking, Recall, No-Shows | Dmytro AI",
  metaDescription:
    "AI automation for chiropractors. New patient intake, appointment scheduling, recall campaigns, no-show reduction, and review automation. What works and where to start.",
  badgeText: "Chiropractic Industry",
  badgeIcon: Heart,
  h1: "AI Automation for Chiropractors",
  heroIntro:
    "A new patient calls during lunch. Your front desk is helping someone check out. The call goes to voicemail, and that patient books with the chiropractor down the street who picked up. Meanwhile, dozens of past patients who should be on a care plan have not been in for months because nobody called them. AI automation handles the intake, scheduling, reminders, and reactivation that your front desk cannot do while they are face-to-face with patients.",
  heroSubtext:
    "Below: what chiropractic automation looks like in practice, where it delivers the clearest ROI, and how to decide if it is worth the investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a chiropractic practice",
      subtitle:
        "These automations are built for the reality of running a chiropractic office — high appointment volume, care plan adherence, and a front desk that cannot be on the phone and at the counter at the same time:",
      items: [
        {
          icon: Phone,
          title: "Missed call text-back",
          body: "When a call goes unanswered, an automatic text goes out within seconds. Captures the new patient inquiry and starts a conversation before they call someone else.",
        },
        {
          icon: CalendarCheck,
          title: "New patient intake and scheduling",
          body: "AI-powered booking that handles scheduling new patient appointments. Collects intake information, confirms insurance details, sends prep instructions, and handles rescheduling.",
        },
        {
          icon: Users,
          title: "Care plan recall campaigns",
          body: "Automated outreach when patients fall off their care plan. Personalized reminders based on treatment plan, last visit date, and recommended frequency.",
        },
        {
          icon: Clock,
          title: "No-show reduction",
          body: "Multi-step confirmation and reminder sequences before every appointment. Confirmation requests at 48 hours, reminders at 24 hours and 2 hours, with easy rescheduling links.",
        },
        {
          icon: Star,
          title: "Review request automation",
          body: "After every visit, an automated text asks for a Google review. Happy patients get a direct review link. Unhappy ones get routed to you privately first.",
        },
        {
          icon: Bot,
          title: "After-hours call handling",
          body: "AI answers calls and texts after hours. Captures new patient details, books appointments for the next available slot, and answers common questions about services, insurance, and hours.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your chiropractic practice?",
      subtitle:
        "Honest assessment. Some practices see immediate ROI. Others are not ready yet:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You miss calls regularly because your front desk is with patients",
            "Patients drop off care plans and nobody follows up consistently",
            "No-shows leave gaps in your schedule that cost you $100 to $300 per slot",
            "You want more Google reviews but asking is inconsistent",
            "You are spending on ads or SEO but new patient bookings are not keeping pace",
            "You see 50 or more patient visits per week and growing",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a solo practitioner seeing under 20 visits per week and managing fine",
            "Your front desk already handles recall and follow-up consistently",
            "You have no marketing spend and get all patients from referrals",
            "You want the cheapest option regardless of quality",
            "You are not ready to invest at least $2K in a one-time build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI expectations for chiropractic automation",
      subtitle:
        "The math is straightforward for most chiropractic practices:",
      items: [
        {
          icon: BarChart3,
          title: "The cost of a missed new patient call",
          body: "A new chiropractic patient is worth $1,500 to $5,000 over a care plan. If you miss even a few new patient calls per month, the lost revenue far exceeds the cost of a missed call text-back system ($1K to $2K to build).",
        },
        {
          icon: Clock,
          title: "No-show and cancellation cost",
          body: "Every empty slot costs you $75 to $300 in lost revenue. Automated confirmations and reminders reduce no-shows by 30 to 50 percent without adding any work for your front desk.",
        },
        {
          icon: TrendingUp,
          title: "Care plan adherence revenue",
          body: "Most practices lose significant revenue from patients who stop coming in. Automated recall sequences re-engage patients who are overdue, bringing them back before they find another provider.",
        },
        {
          icon: Star,
          title: "Review volume",
          body: "More Google reviews means better local ranking means more new patient calls. Automated review requests after every visit build your review count consistently.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same lead follow-up and appointment handling patterns that apply directly to chiropractic practices:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "AI voice agent handles all after-hours calls and routes requests. For chiropractors, the same system captures new patient inquiries and books appointments around the clock.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and reactivated",
          body: "Automated follow-up sequences organized untouched leads and drove consistent outreach. For chiropractic, this means no new patient inquiry or lapsed care plan patient gets forgotten.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for dental practices", href: "/ai-automation-for-dental-practices" },
        { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is the most impactful automation for a chiropractic practice?",
      answer:
        "Care plan recall and missed call text-back. Most practices lose the most revenue from patients who drop off their care plan and from new patient calls that go to voicemail. Fixing those two problems typically pays for the entire automation build within the first month.",
    },
    {
      question: "Can the AI handle different care plan schedules?",
      answer:
        "Yes. The system is configured with treatment types and recommended visit frequencies. A patient on a twice-weekly acute care plan gets different recall timing than a patient on monthly maintenance. Outreach is personalized based on the plan.",
    },
    {
      question: "How long does setup take?",
      answer:
        "A missed call text-back system can be live in under a week. A full system with intake, scheduling, recall campaigns, no-show reduction, and review automation takes 2 to 3 weeks.",
    },
    {
      question: "What does it cost?",
      answer:
        "A single workflow like missed call text-back runs $1K to $2K. A complete system — intake, recall, no-show reduction, reviews — runs $3K to $6K. Fixed pricing, scoped before work starts.",
    },
    {
      question: "Will this work with my EHR or practice management software?",
      answer:
        "In most cases, yes. We integrate at the communication and scheduling layer. If your platform (ChiroTouch, Jane, Platinum System, etc.) has an API or supports webhooks, we can connect to it. We verify compatibility during the scoping call.",
    },
  ],
  faqSubtitle:
    "Practical answers for chiropractors considering automation",
  ctaHeading: "Stop losing patients to missed calls and lapsed care plans",
  ctaText:
    "Book a 30-minute call. We will look at your current patient flow, identify where revenue is being lost, and give you a clear plan for what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your chiropractic practice.",
  relatedLinks: [
    { label: "AI automation for dental practices", href: "/ai-automation-for-dental-practices" },
    { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
    { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
