import {
  Zap,
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
  slug: "ai-automation-for-electrical-contractors",
  metaTitle:
    "AI Automation for Electrical Contractors — Lead Follow-Up, Scheduling, Estimates | Dmytro AI",
  metaDescription:
    "AI automation for electrical contractors. Missed call text-back, lead follow-up, appointment scheduling, estimate follow-up, and review automation. What works and where to start.",
  badgeText: "Electrical Industry",
  badgeIcon: Zap,
  h1: "AI Automation for Electrical Contractors",
  heroIntro:
    "Your electricians are on job sites. Your office is managing dispatch, permits, and callbacks. When a homeowner calls for a panel upgrade or a property manager needs emergency service, speed matters. If you do not respond quickly, they call the next contractor on the list. AI automation handles the lead response, follow-up, and scheduling so your team focuses on the work.",
  heroSubtext:
    "Below: what electrical contractor automation looks like in practice, where it delivers the most value, and how to decide if it is the right investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in an electrical contracting business",
      subtitle:
        "These automations address the operational challenges specific to electrical contractors — project variety, permit timelines, and a mobile workforce:",
      items: [
        {
          icon: Phone,
          title: "Missed call text-back",
          body: "When a call goes unanswered, an automatic text goes out within seconds. Captures the lead and opens a conversation before they call your competitor.",
        },
        {
          icon: MessageSquare,
          title: "Lead follow-up sequences",
          body: "Every new inquiry — web form, Google LSA, phone call — gets an instant response and a multi-step follow-up. Residential and commercial leads are handled consistently.",
        },
        {
          icon: CalendarCheck,
          title: "Appointment and estimate scheduling",
          body: "AI-powered booking for service calls, estimate appointments, and inspections. Syncs with your calendar, sends confirmations and reminders.",
        },
        {
          icon: Clock,
          title: "Estimate follow-up",
          body: "Automated sequences that follow up on quotes that have not been accepted. Persistent reminders at 2, 5, and 14 days. Particularly valuable for larger projects like panel upgrades and rewiring.",
        },
        {
          icon: Star,
          title: "Review request automation",
          body: "After every completed job, an automated text asks for a Google review. Builds your review count consistently without relying on your team to remember.",
        },
        {
          icon: Bot,
          title: "After-hours and emergency call handling",
          body: "AI voice agent that answers calls 24/7. Captures details, qualifies urgency, books non-emergency work, and routes true emergencies to your on-call electrician.",
        },
      ],
    },
    {
      type: "table",
      title: "Residential vs. commercial automation needs",
      subtitle:
        "Electrical contractors often serve both markets. Here is how automation applies to each:",
      headers: ["Residential focus", "Commercial focus"],
      rows: [
        {
          label: "Lead source",
          values: [
            "Google LSA, HomeAdvisor, Angi, website",
            "Referrals, property managers, GCs",
          ],
        },
        {
          label: "Response urgency",
          values: [
            "High — homeowner calls 2 to 3 companies",
            "Moderate — but follow-up consistency wins",
          ],
        },
        {
          label: "Best starting automation",
          values: [
            "Missed call text-back + lead follow-up",
            "Estimate follow-up + CRM pipeline",
          ],
        },
        {
          label: "Review importance",
          values: [
            "Critical for local SEO and Google ranking",
            "Helpful but less weight than relationships",
          ],
        },
        {
          label: "Scheduling complexity",
          values: [
            "Simpler — 1 to 2 hour service windows",
            "More complex — multi-day projects and coordination",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your electrical company?",
      subtitle:
        "Honest assessment. Automation works well for some contractors and not others:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You miss calls regularly because your team is on job sites",
            "Leads go cold because follow-up is slow or inconsistent",
            "You send estimates but rarely follow up systematically",
            "You want more Google reviews but nobody on your team asks",
            "You are running 2 to 15 trucks and growing",
            "You are spending on Google LSAs or ads but not converting enough",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a solo electrician handling a few calls per day and managing fine",
            "All your work comes from GC referrals and you have no direct consumer marketing",
            "Your office team already follows up on every lead consistently",
            "You are not ready to invest at least $2K in a one-time build",
            "You do exclusively new construction with no service or repair work",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI expectations for electrical contractors",
      subtitle:
        "The math for automation in the electrical trade:",
      items: [
        {
          icon: BarChart3,
          title: "Value of a captured lead",
          body: "Residential electrical jobs range from $200 for an outlet repair to $5,000+ for a panel upgrade. Even capturing 2 to 3 additional jobs per month from better follow-up can pay for the entire automation build quickly.",
        },
        {
          icon: Clock,
          title: "Speed-to-lead in a competitive market",
          body: "Homeowners looking for an electrician typically call 2 to 3 contractors. The first one to respond with a professional, helpful message has a significant advantage.",
        },
        {
          icon: TrendingUp,
          title: "Estimate conversion improvement",
          body: "Most electrical contractors send estimates and hope for the best. Automated follow-up at 2, 5, and 14 days keeps your quote top of mind without manual effort.",
        },
        {
          icon: Star,
          title: "Review accumulation",
          body: "Google reviews drive local SEO rankings for electricians. Automated review requests after every job build your count steadily instead of in sporadic bursts.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same lead follow-up and call handling patterns used by trades companies:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "AI voice agent handles all calls outside business hours. For electrical contractors, the same system captures service requests and routes emergencies to your on-call electrician.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and reactivated",
          body: "Automated CRM workflows organized untouched leads and built consistent follow-up. For electricians, this means no estimate request or past customer gets forgotten.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for HVAC companies", href: "/ai-automation-for-hvac-companies" },
        { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How does missed call text-back work for electrical contractors?",
      answer:
        "When a call goes to voicemail, the system automatically sends a text to the caller within seconds. The message is customizable — something like 'Hey, we missed your call. Do you need residential or commercial electrical service?' This opens a text conversation and captures the lead.",
    },
    {
      question: "Can the AI distinguish emergency from non-emergency calls?",
      answer:
        "Yes. The AI voice agent asks qualifying questions — exposed wiring, power outage, smell of burning — and routes based on urgency. Emergencies go to your on-call number. Everything else gets scheduled for the next available slot.",
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
      question: "Will this integrate with my existing field service software?",
      answer:
        "In most cases, yes. We integrate with ServiceTitan, Housecall Pro, Jobber, FieldEdge, and similar platforms at the communication and scheduling layer. We verify compatibility during the scoping call.",
    },
  ],
  faqSubtitle:
    "Practical answers for electrical contractors considering automation",
  ctaHeading: "Stop losing jobs to missed calls and slow follow-up",
  ctaText:
    "Book a 30-minute call. We will look at your current lead flow, identify where jobs are being lost, and give you a clear plan for what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your electrical contracting business.",
  relatedLinks: [
    { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
    { label: "AI automation for HVAC companies", href: "/ai-automation-for-hvac-companies" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
