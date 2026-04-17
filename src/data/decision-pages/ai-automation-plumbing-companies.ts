import {
  Wrench,
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
  slug: "ai-automation-for-plumbing-companies",
  metaTitle:
    "AI Automation for Plumbing Companies — Missed Calls, Lead Follow-Up, Scheduling | Dmytro AI",
  metaDescription:
    "AI automation for plumbing companies. Missed call text-back, lead follow-up, appointment scheduling, estimate follow-up, and review automation. What works and where to start.",
  badgeText: "Plumbing Industry",
  badgeIcon: Wrench,
  h1: "AI Automation for Plumbing Companies",
  heroIntro:
    "When a pipe bursts at 11 PM, the homeowner calls whoever picks up. If your phone goes to voicemail, that job goes to the plumber who answers next. During the day, your techs are on jobs and your office is juggling dispatch, estimates, and callbacks. AI automation handles the calls, follow-ups, and scheduling that slip through the cracks so you stop losing jobs to slow response.",
  heroSubtext:
    "Below: what plumbing automation looks like in practice, where it delivers the clearest ROI, and how to decide if it is worth the investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a plumbing company",
      subtitle:
        "These automations are built for the reality of running a plumbing business — emergency calls, seasonal demand, and a team that is always on the road:",
      items: [
        {
          icon: Phone,
          title: "Missed call text-back",
          body: "When a call goes unanswered, an automatic text goes out within seconds. Captures the lead and starts a conversation before they call your competitor.",
        },
        {
          icon: MessageSquare,
          title: "Lead follow-up sequences",
          body: "Every new lead — web form, Google LSA, missed call — gets an instant response and a multi-step follow-up sequence. No more leads sitting in the inbox until someone has time.",
        },
        {
          icon: CalendarCheck,
          title: "Appointment scheduling",
          body: "AI-powered booking that handles the back-and-forth of scheduling service calls. Checks availability, confirms time windows, sends reminders, and handles rescheduling.",
        },
        {
          icon: Clock,
          title: "Estimate follow-up",
          body: "Automated sequences that follow up on quotes that have not been accepted. Persistent but professional — reminders at 2 days, 5 days, and 14 days after the estimate.",
        },
        {
          icon: Star,
          title: "Review request automation",
          body: "After every completed job, an automated text asks for a Google review. Happy customers get a direct review link. Unhappy ones get routed to you first.",
        },
        {
          icon: Bot,
          title: "After-hours call handling",
          body: "AI voice agent that answers calls 24/7. Captures emergency details, books non-emergency service calls, and routes urgent requests to your on-call tech.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your plumbing company?",
      subtitle:
        "Honest assessment. Some plumbing companies see immediate ROI. Others are not ready yet:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You miss calls regularly because your team is on jobs",
            "Leads go cold because follow-up is slow or inconsistent",
            "You are spending on Google LSAs or ads but not converting enough leads",
            "Estimates are sent but never followed up on systematically",
            "You want more Google reviews but your team never asks",
            "You are running 2 to 15 trucks and growing",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a solo plumber handling 2 to 3 calls per day and managing fine",
            "Your office staff already handles all follow-up consistently",
            "You get all your work from referrals and have no marketing spend",
            "You want the cheapest option regardless of quality",
            "You are not ready to invest at least $2K in a one-time build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI expectations for plumbing automation",
      subtitle:
        "The math is straightforward for most plumbing companies:",
      items: [
        {
          icon: BarChart3,
          title: "The cost of a missed call",
          body: "If your average service call is worth $300 to $1,500 and you miss even a few calls per week, the lost revenue adds up fast. A missed call text-back system costs $1K to $2K to build.",
        },
        {
          icon: Clock,
          title: "Speed-to-lead impact",
          body: "Responding in under 60 seconds instead of hours makes a meaningful difference in whether you win the job. Emergency plumbing is one of the most time-sensitive service categories.",
        },
        {
          icon: TrendingUp,
          title: "Estimate conversion",
          body: "Most plumbing companies send estimates and never follow up systematically. Even a modest improvement in estimate-to-job conversion rate from automated follow-up adds up over a year.",
        },
        {
          icon: Star,
          title: "Review volume",
          body: "More Google reviews means better local ranking means more inbound calls. Automated review requests after every job build your review count consistently.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same lead follow-up and call handling patterns that apply directly to plumbing companies:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "AI voice agent handles all after-hours calls and routes requests. For plumbing, the same system captures emergency calls, books non-urgent jobs, and routes urgent requests to on-call techs.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and reactivated",
          body: "Automated follow-up sequences organized untouched leads and drove consistent outreach. For plumbing, this means no estimate request or past customer gets forgotten.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for HVAC companies", href: "/ai-automation-for-hvac-companies" },
        { label: "AI automation for electrical contractors", href: "/ai-automation-for-electrical-contractors" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How does missed call text-back work?",
      answer:
        "When a call goes to voicemail, the system automatically sends a text to the caller within seconds. The message is customizable — something like 'Hey, we missed your call. What can we help with?' This opens a text conversation and captures the lead before they call someone else.",
    },
    {
      question: "Can the AI handle emergency vs. non-emergency calls?",
      answer:
        "Yes. The AI voice agent is configured to ask qualifying questions and route based on urgency. True emergencies (active leaks, sewage backups) get routed to your on-call number. Non-emergency requests get booked for the next available slot.",
    },
    {
      question: "How long does setup take?",
      answer:
        "A missed call text-back system can be live in under a week. A full system with lead follow-up, scheduling, estimate follow-up, and review automation takes 2 to 3 weeks.",
    },
    {
      question: "What does it cost?",
      answer:
        "A single workflow like missed call text-back runs $1K to $2K. A complete system — lead follow-up, scheduling, estimate nurture, reviews — runs $3K to $6K. Fixed pricing, scoped before work starts.",
    },
    {
      question: "Will this work with ServiceTitan, Housecall Pro, or Jobber?",
      answer:
        "In most cases, yes. We integrate at the communication and scheduling layer. If your platform has an API or supports webhooks, we can connect to it. We verify compatibility during the scoping call.",
    },
  ],
  faqSubtitle:
    "Practical answers for plumbing companies considering automation",
  ctaHeading: "Stop losing jobs to missed calls and slow follow-up",
  ctaText:
    "Book a 30-minute call. We will look at your current lead flow, identify where jobs are being lost, and give you a clear plan for what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your plumbing business.",
  relatedLinks: [
    { label: "AI automation for HVAC companies", href: "/ai-automation-for-hvac-companies" },
    { label: "AI automation for electrical contractors", href: "/ai-automation-for-electrical-contractors" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
