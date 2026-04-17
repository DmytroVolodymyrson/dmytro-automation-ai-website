import {
  Building2,
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
  Wrench,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-for-property-management",
  metaTitle:
    "AI Automation for Property Management — Tenant Communication, Maintenance, Leasing | Dmytro AI",
  metaDescription:
    "AI automation for property management companies. Tenant communication, maintenance requests, lease renewals, showing scheduling, and owner reporting. What works and where to start.",
  badgeText: "Property Management",
  badgeIcon: Building2,
  h1: "AI Automation for Property Management",
  heroIntro:
    "Property management is a communication grind. Tenant maintenance requests at 11 PM. Lease renewal follow-ups that slip through the cracks. Prospective tenants calling about showings and getting voicemail. Owner reports that take hours to compile. AI automation handles the repetitive communication layer — tenant inquiries, maintenance routing, lease reminders, and showing coordination — so your team focuses on the work that actually requires judgment.",
  heroSubtext:
    "Below: what automation looks like for property management companies, which workflows deliver the fastest ROI, and how to decide if your operation is ready.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in property management",
      subtitle:
        "These automations address the highest-volume communication pain points in property management:",
      items: [
        {
          icon: Wrench,
          title: "Maintenance request intake and routing",
          body: "Tenant submits a maintenance request via text, form, or call. AI categorizes the issue (emergency vs. routine), routes it to the right vendor or team member, sends the tenant a confirmation and timeline, and follows up when the work is complete.",
        },
        {
          icon: Phone,
          title: "After-hours tenant communication",
          body: "AI text responder or voice agent handles after-hours tenant calls. True emergencies (water leak, lockout, fire) get routed to your on-call person. Non-emergencies get logged and scheduled for the next business day.",
        },
        {
          icon: CalendarCheck,
          title: "Showing scheduling for vacancies",
          body: "Prospective tenants inquire about a listing and get an instant response with available showing times. Booking, confirmation, reminders, and no-show follow-up are all automated. No more phone tag with prospects.",
        },
        {
          icon: Mail,
          title: "Lease renewal campaigns",
          body: "90-day, 60-day, and 30-day renewal reminders go out automatically. Non-responders get escalating follow-up. Tenants who express interest in renewing get sent the renewal documents. Tenants who decline trigger a vacancy prep workflow.",
        },
        {
          icon: Users,
          title: "Tenant onboarding sequences",
          body: "New tenant signs the lease and gets a structured onboarding sequence: move-in instructions, utility setup reminders, community guidelines, emergency contacts, and a check-in at 30 days. Every tenant gets the same professional experience.",
        },
        {
          icon: Bot,
          title: "Owner communication and reporting",
          body: "Monthly owner reports compiled and sent automatically from your property management data. Maintenance updates, occupancy status, financial summaries — generated and delivered without manual work.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is automation right for your property management company?",
      subtitle:
        "Honest assessment based on what we see across the industry:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You manage 50+ units and communication volume is overwhelming",
            "Maintenance requests are handled inconsistently or get lost",
            "Showing scheduling for vacancies involves excessive phone tag",
            "Lease renewals are tracked on spreadsheets or forgotten",
            "Your team spends more time on communication than property operations",
            "You are growing your portfolio and need to scale without proportional hiring",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You manage fewer than 20 units and handle communication fine",
            "Your property management software already handles all tenant communication",
            "Vacancy rates are near zero and leasing is not a priority",
            "Your tenants are not comfortable with text or digital communication",
            "You are not ready to invest at least $2K in a one-time build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI of property management automation",
      subtitle:
        "The value comes from three places:",
      items: [
        {
          icon: Clock,
          title: "Staff time recovered",
          body: "Property managers spend 15-25 hours per week on repetitive communication — maintenance follow-ups, showing coordination, lease reminders, and tenant questions. Automation handles the routine, freeing your team for the work that requires human judgment.",
        },
        {
          icon: TrendingUp,
          title: "Faster vacancy fill",
          body: "When a prospective tenant inquires about a listing, responding in minutes instead of hours means more showings and faster leasing. Every day a unit sits vacant costs you money. Automated showing scheduling reduces vacancy duration.",
        },
        {
          icon: BarChart3,
          title: "Improved tenant retention",
          body: "Consistent communication, proactive renewal outreach, and responsive maintenance handling all improve tenant satisfaction. Tenants who feel well-managed renew more often. Turnover is expensive — typically one to two months of rent in lost income and prep costs.",
        },
        {
          icon: Users,
          title: "Portfolio scalability",
          body: "Without automation, adding 50 units means hiring another property manager. With automation handling the communication layer, your existing team can manage a significantly larger portfolio. The math on this alone often justifies the investment.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar automation builds",
      subtitle:
        "These case studies show the same communication and workflow automation patterns that apply to property management:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls handled",
          body: "AI voice agent handles all after-hours inquiries and routes by urgency. For property management, the same system triages tenant maintenance requests — emergencies to on-call, routine to the next-day queue.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of contacts with automated follow-up",
          body: "Automated CRM workflows managed high-volume communication. For property management, the same pipeline logic powers tenant onboarding, lease renewals, and maintenance tracking.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Client onboarding automation", href: "/client-onboarding-automation" },
        { label: "AI automation for real estate", href: "/ai-automation-for-real-estate" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Will this work with my property management software?",
      answer:
        "In most cases, yes. We integrate at the communication and data layer. If your PM software (AppFolio, Buildium, Rent Manager, Yardi) has an API or supports webhooks, we connect directly. For systems without APIs, we use email parsing, form triggers, or parallel workflows.",
    },
    {
      question: "How does the AI handle emergency maintenance requests?",
      answer:
        "The AI is configured with clear rules for categorizing urgency. Keywords and descriptions matching emergencies (water leak, fire, gas smell, lockout) trigger immediate routing to your on-call contact with a phone call or urgent text. Everything else is logged and scheduled for the next business day.",
    },
    {
      question: "How long does setup take?",
      answer:
        "A maintenance request system or showing scheduler can be live in 1-2 weeks. A comprehensive system with tenant onboarding, lease renewals, maintenance routing, and owner reports takes 3-4 weeks.",
    },
    {
      question: "What does it cost?",
      answer:
        "A single workflow like maintenance routing or showing scheduling runs $1.5K-$3K. A full system covering tenant communication, lease renewals, onboarding, and reporting runs $5K-$8K. Fixed pricing, scoped before work starts.",
    },
    {
      question: "Can tenants still reach a human when they need to?",
      answer:
        "Always. Automation handles the first response, categorization, and routing. Tenants can request a callback or transfer at any point. The goal is faster, more consistent communication — not removing the human element entirely.",
    },
  ],
  faqSubtitle:
    "Practical answers for property management companies considering automation",
  ctaHeading: "Scale your portfolio without scaling your headcount",
  ctaText:
    "Book a 30-minute call. We will look at your current communication workflow, identify the biggest time drains, and map out what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your property management operation.",
  relatedLinks: [
    { label: "AI automation for real estate", href: "/ai-automation-for-real-estate" },
    { label: "Client onboarding automation", href: "/client-onboarding-automation" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
