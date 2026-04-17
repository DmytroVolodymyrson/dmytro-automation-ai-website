import {
  Landmark,
  Phone,
  CalendarCheck,
  MessageSquare,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  Users,
  Wrench,
  BarChart3,
  Bot,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-for-mortgage-brokers",
  metaTitle:
    "AI Automation for Mortgage Brokers — Lead Follow-Up, Document Collection, CRM | Dmytro AI",
  metaDescription:
    "AI automation for mortgage brokers. Automate lead follow-up, document collection, application nurture, and CRM workflows. What works, what to avoid, and where to start.",
  badgeText: "Mortgage Industry",
  badgeIcon: Landmark,
  h1: "AI Automation for Mortgage Brokers",
  heroIntro:
    "Mortgage leads are expensive and time-sensitive. A pre-approval inquiry that sits for two hours is already shopping with another broker. Meanwhile, your team is buried in document chasing, application follow-ups, and manual CRM updates. AI automation handles the time-sensitive, repetitive work so you focus on closings.",
  heroSubtext:
    "Below: what mortgage automation looks like in practice, where it delivers the most value, and how to decide if it is worth the investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a mortgage brokerage",
      subtitle:
        "These are the automations that make the biggest difference for brokers and loan officers:",
      items: [
        {
          icon: Phone,
          title: "Instant lead response",
          body: "Every inquiry from your website, Zillow, LendingTree, or referral partner gets an instant text and email. The prospect hears from you in under 60 seconds, not two hours.",
        },
        {
          icon: MessageSquare,
          title: "Application nurture sequences",
          body: "Automated follow-up for prospects who inquired but did not complete an application. Multi-touch sequences over days or weeks that keep your brokerage top of mind.",
        },
        {
          icon: FileText,
          title: "Document collection automation",
          body: "Automated reminders for missing documents — pay stubs, tax returns, bank statements. The system tracks what has been submitted and follows up on what is still outstanding.",
        },
        {
          icon: CalendarCheck,
          title: "Consultation scheduling",
          body: "AI-powered booking for initial consultations and pre-approval calls. Prospects self-schedule based on availability. Confirmations and reminders go out automatically.",
        },
        {
          icon: BarChart3,
          title: "CRM and pipeline automation",
          body: "Leads automatically tagged by source, stage, and loan type. Pipeline updates happen automatically as applications progress. No more manual data entry.",
        },
        {
          icon: Clock,
          title: "Rate alert and reactivation campaigns",
          body: "Automated outreach when rates shift. Re-engagement campaigns for past clients approaching renewal or prospects who went cold months ago.",
        },
      ],
    },
    {
      type: "table",
      title: "Manual vs. automated mortgage operations",
      subtitle:
        "Mortgage brokerages that automate the repetitive work close more deals with the same team:",
      headers: ["Automated", "Manual"],
      rows: [
        {
          label: "Lead response time",
          values: [
            "Under 60 seconds, 24/7",
            "Minutes to hours, business hours only",
          ],
        },
        {
          label: "Document follow-up",
          values: [
            "Automatic reminders until complete",
            "Manual emails and phone calls",
          ],
        },
        {
          label: "Application nurture",
          values: [
            "Multi-touch sequence for every lead",
            "1 to 2 attempts, then forgotten",
          ],
        },
        {
          label: "CRM updates",
          values: [
            "Automatic pipeline progression",
            "Manual entry between meetings",
          ],
        },
        {
          label: "Past client re-engagement",
          values: [
            "Scheduled campaigns on autopilot",
            "Happens when someone remembers",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your brokerage?",
      subtitle:
        "Honest assessment. Automation helps some mortgage businesses more than others:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You get 20+ leads per month and struggle to follow up on all of them",
            "Document chasing eats up hours of your team's week",
            "Leads go cold because your response time is inconsistent",
            "You want to scale without adding another loan officer or admin",
            "You have a CRM but it is not being used to its full potential",
            "You are spending money on leads but not converting enough of them",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You handle fewer than 5 applications per month and can manage manually",
            "You already have a fully staffed operations team doing consistent follow-up",
            "Your lead sources are not yet established",
            "You want to automate compliance-sensitive communication without review",
            "You are not ready to invest $2K to $5K in a one-time system build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important considerations for mortgage automation",
      subtitle:
        "Mortgage is a regulated industry. Automation needs to be built with these factors in mind:",
      items: [
        {
          icon: FileText,
          title: "Compliance awareness",
          body: "Automated messages should be reviewed for regulatory compliance. We build the workflows; your compliance team reviews the messaging. The system respects opt-outs and consent requirements.",
        },
        {
          icon: Users,
          title: "Human handoff points",
          body: "Automation handles the repetitive follow-up and qualification. Complex financial discussions, rate negotiations, and application review stay with your team.",
        },
        {
          icon: Wrench,
          title: "CRM integration",
          body: "The automation needs to work with your existing LOS and CRM. We integrate with Velocity, Finastra, GoHighLevel, HubSpot, and custom systems.",
        },
        {
          icon: Clock,
          title: "Timing sensitivity",
          body: "Mortgage leads have short windows. The automation is designed for immediate response and persistent follow-up during the critical first 48 hours.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar automation projects",
      subtitle:
        "These case studies demonstrate the same lead follow-up and CRM patterns that apply to mortgage brokerages:",
      studies: [
        {
          industry: "E-Commerce",
          headline: "5,600 leads organized and automated",
          body: "Thousands of leads with no follow-up system. Automated CRM workflows organized contacts and made outreach consistent. The same approach works for mortgage lead databases.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Restaurant",
          headline: "100% of after-hours inquiries captured",
          body: "AI voice agent handles all inbound calls. For mortgage brokers, the same technology qualifies inbound rate inquiries and schedules consultations.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Will this work with my loan origination system?",
      answer:
        "In most cases, yes. We integrate with common LOS platforms and CRMs via APIs. If your system supports webhooks or has an API, we can connect it. We verify compatibility during the scoping call.",
    },
    {
      question: "Can automated messages comply with mortgage regulations?",
      answer:
        "We build the automation workflows and you provide the approved messaging. Your compliance team reviews all customer-facing copy before launch. The system handles opt-out management and consent tracking.",
    },
    {
      question: "How fast can this be set up?",
      answer:
        "A lead follow-up system can be live in 1 to 2 weeks. A full system with document collection, pipeline automation, and reactivation campaigns takes 2 to 4 weeks.",
    },
    {
      question: "What does it cost?",
      answer:
        "A focused lead follow-up automation runs $2K to $4K. A comprehensive system with document automation, pipeline management, and reactivation campaigns runs $4K to $6K. Fixed pricing, scoped upfront.",
    },
    {
      question: "Is this for individual brokers or teams?",
      answer:
        "Both. Solo brokers benefit from automated follow-up that runs while they are in meetings. Teams benefit from lead distribution, consistent follow-up, and centralized reporting.",
    },
  ],
  faqSubtitle:
    "Practical answers for mortgage professionals considering automation",
  ctaHeading: "Stop losing mortgage leads to slow follow-up",
  ctaText:
    "Book a 30-minute call. We will look at your lead flow, document process, and follow-up gaps, then give you a clear plan for what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your brokerage operations.",
  relatedLinks: [
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "AI automation for real estate", href: "/ai-automation-for-real-estate" },
    { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
