import {
  Sparkles,
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
  slug: "ai-automation-for-med-spas",
  metaTitle:
    "AI Automation for Med Spas — Lead Follow-Up, Booking, No-Show Reduction | Dmytro AI",
  metaDescription:
    "AI automation for med spas. Lead follow-up, consultation booking, no-show reduction, review requests, and treatment recall campaigns. What works and where to start.",
  badgeText: "Med Spa Industry",
  badgeIcon: Sparkles,
  h1: "AI Automation for Med Spas",
  heroIntro:
    "A prospective patient fills out your consultation request form at 9 PM. By the time your front desk sees it at 10 AM, she has already booked with the med spa that texted her back in 30 seconds. Med spas live and die on speed-to-lead and repeat visits. AI automation handles the follow-up, booking, reminders, and reactivation that your front desk cannot keep up with — so you stop losing consultations to slow response and no-shows.",
  heroSubtext:
    "Below: what med spa automation looks like in practice, where it delivers the clearest ROI, and how to decide if it is worth the investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a med spa",
      subtitle:
        "These automations are built for the reality of running a med spa — high-value consultations, repeat treatments, and patients who expect instant communication:",
      items: [
        {
          icon: MessageSquare,
          title: "Lead follow-up sequences",
          body: "Every new inquiry — web form, Instagram DM, phone call — gets an instant response and a multi-step follow-up sequence. No more consultation requests sitting unanswered while your team is with patients.",
        },
        {
          icon: CalendarCheck,
          title: "Consultation booking",
          body: "AI-powered booking that handles the back-and-forth of scheduling consultations. Checks provider availability, confirms time slots, sends reminders, and handles rescheduling.",
        },
        {
          icon: Clock,
          title: "No-show reduction",
          body: "Multi-step confirmation and reminder sequences before every appointment. Confirmation requests at 48 hours, reminders at 24 hours and 2 hours, with easy rescheduling links.",
        },
        {
          icon: Star,
          title: "Review request automation",
          body: "After every treatment, an automated text asks for a Google review. Happy patients get a direct review link. Unhappy ones get routed to you first before anything goes public.",
        },
        {
          icon: Users,
          title: "Treatment recall campaigns",
          body: "Automated outreach when patients are due for their next Botox, filler, or laser session. Personalized reminders based on treatment type and last visit date.",
        },
        {
          icon: Bot,
          title: "After-hours inquiry handling",
          body: "AI responds to texts, web forms, and calls after hours. Captures consultation interest, answers common questions about services, and books appointments without waiting until morning.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your med spa?",
      subtitle:
        "Honest assessment. Some med spas see immediate ROI. Others are not ready yet:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are spending on ads or social media but consultation bookings are not keeping pace",
            "No-shows cost you hundreds per empty slot",
            "Patients lapse on repeat treatments because nobody follows up",
            "Your front desk is overwhelmed and leads slip through the cracks",
            "You want more Google reviews but your team never asks consistently",
            "You are running 1 to 5 treatment rooms and growing",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a solo practitioner seeing 3 to 5 patients per day and managing fine",
            "Your front desk already handles all follow-up and recall consistently",
            "You have no marketing spend and get all patients from referrals",
            "You want the cheapest option regardless of quality",
            "You are not ready to invest at least $2K in a one-time build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI expectations for med spa automation",
      subtitle:
        "The math is straightforward for most med spas:",
      items: [
        {
          icon: BarChart3,
          title: "The cost of a missed consultation",
          body: "If your average patient lifetime value is $3,000 to $15,000 and you lose even a few consultation requests per month to slow follow-up, the revenue impact adds up fast. A lead follow-up system costs $1K to $2K to build.",
        },
        {
          icon: Clock,
          title: "No-show cost per slot",
          body: "An empty treatment room costs you $200 to $800 in lost revenue per slot. Automated confirmation and reminder sequences reduce no-shows by 30 to 50 percent with zero staff effort.",
        },
        {
          icon: TrendingUp,
          title: "Treatment recall revenue",
          body: "Most med spas lose 20 to 40 percent of repeat treatment revenue because patients simply forget to rebook. Automated recall campaigns bring patients back consistently.",
        },
        {
          icon: Star,
          title: "Review volume",
          body: "More Google reviews means better local search ranking means more inbound inquiries. Automated review requests after every treatment build your review count without relying on your staff to remember.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same lead follow-up and appointment handling patterns that apply directly to med spas:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "AI voice agent handles all after-hours calls and routes requests. For med spas, the same system captures consultation inquiries, books appointments, and answers treatment questions after hours.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and reactivated",
          body: "Automated follow-up sequences organized untouched leads and drove consistent outreach. For med spas, this means no consultation request or lapsed patient gets forgotten.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for dental practices", href: "/ai-automation-for-dental-practices" },
        { label: "AI automation for chiropractors", href: "/ai-automation-for-chiropractors" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is the most impactful automation for a med spa?",
      answer:
        "Lead follow-up and no-show reduction. Most med spas lose the most revenue from consultation requests that go unanswered for hours and from patients who simply do not show up. Fixing those two problems typically pays for the entire automation build within the first month or two.",
    },
    {
      question: "Can the AI handle treatment-specific recall reminders?",
      answer:
        "Yes. The system is configured with treatment types and recommended intervals. When a patient is due for their next Botox (3 to 4 months), filler (6 to 12 months), or laser session, they receive a personalized outreach sequence.",
    },
    {
      question: "How long does setup take?",
      answer:
        "A lead follow-up and booking system can be live in under a week. A full system with no-show reduction, treatment recall, review requests, and after-hours handling takes 2 to 3 weeks.",
    },
    {
      question: "What does it cost?",
      answer:
        "A single workflow like lead follow-up runs $1K to $2K. A complete system — booking, no-show reduction, recall campaigns, reviews — runs $3K to $6K. Fixed pricing, scoped before work starts.",
    },
    {
      question: "Will this work with my existing booking software?",
      answer:
        "In most cases, yes. We integrate at the communication and scheduling layer. If your platform (Vagaro, Boulevard, Mangomint, Jane, etc.) has an API or supports webhooks, we can connect to it. We verify compatibility during the scoping call.",
    },
  ],
  faqSubtitle:
    "Practical answers for med spas considering automation",
  ctaHeading: "Stop losing consultations to slow follow-up and no-shows",
  ctaText:
    "Book a 30-minute call. We will look at your current patient flow, identify where revenue is being lost, and give you a clear plan for what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your med spa.",
  relatedLinks: [
    { label: "AI automation for dental practices", href: "/ai-automation-for-dental-practices" },
    { label: "AI automation for chiropractors", href: "/ai-automation-for-chiropractors" },
    { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
