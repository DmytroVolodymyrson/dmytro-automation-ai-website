import {
  Home,
  Phone,
  CalendarCheck,
  MessageSquare,
  Bot,
  Users,
  CheckCircle2,
  XCircle,
  BarChart3,
  Wrench,
  Clock,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-for-real-estate",
  metaTitle:
    "AI Automation for Real Estate Agents and Teams | Dmytro AI",
  metaDescription:
    "AI automation for real estate — lead follow-up, showing coordination, CRM workflows, and drip campaigns. What works, what does not, and where to start.",
  badgeText: "Real Estate",
  badgeIcon: Home,
  h1: "AI Automation for Real Estate Agents and Teams",
  heroIntro:
    "Real estate runs on speed. The agent who responds first usually wins the lead. But when you are at a showing, in a listing appointment, or driving between properties, every unanswered inquiry is a potential client going to whoever picks up next. AI automation handles the follow-up, qualification, and scheduling so you never lose a lead to slow response time.",
  heroSubtext:
    "Below: what real estate automation actually looks like in practice, where it makes the biggest difference, and how to evaluate whether it is the right move for your business.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a real estate business",
      subtitle:
        "These are the automations we build most often for agents and teams. Each one runs without daily attention once it is set up:",
      items: [
        {
          icon: Phone,
          title: "Instant lead response",
          body: "Every Zillow, Realtor.com, website, or social media inquiry gets an instant text and email within 60 seconds. The lead hears from you before they move on to the next agent.",
        },
        {
          icon: MessageSquare,
          title: "Multi-touch follow-up sequences",
          body: "Automated SMS and email sequences that nurture leads who do not respond on first contact. Drip campaigns that run for weeks without manual effort.",
        },
        {
          icon: CalendarCheck,
          title: "Showing and appointment scheduling",
          body: "AI-powered booking that lets leads schedule showings, consultations, or listing appointments directly. Syncs with your calendar and sends confirmations.",
        },
        {
          icon: BarChart3,
          title: "CRM pipeline automation",
          body: "Leads automatically tagged, scored, and routed to the right pipeline stage. No more manual data entry or leads getting lost in your CRM.",
        },
        {
          icon: Bot,
          title: "AI lead qualification",
          body: "Automated qualification that asks the right questions — timeline, budget, pre-approval status — before your time gets committed to unqualified prospects.",
        },
        {
          icon: Users,
          title: "Past client reactivation",
          body: "Automated outreach to past clients for referrals, market updates, and anniversary check-ins. Turns your database into a consistent lead source.",
        },
      ],
    },
    {
      type: "table",
      title: "Manual follow-up vs. automated follow-up",
      subtitle:
        "Most real estate leads need 5 to 12 touches before they convert. Here is how manual and automated approaches compare:",
      headers: ["Automated", "Manual"],
      rows: [
        {
          label: "Response time",
          values: [
            "Under 60 seconds, 24/7",
            "Minutes to hours, business hours only",
          ],
        },
        {
          label: "Follow-up consistency",
          values: [
            "Every lead, every time, no exceptions",
            "Depends on workload and memory",
          ],
        },
        {
          label: "Lead nurture duration",
          values: [
            "Weeks or months on autopilot",
            "Usually stops after 2 to 3 attempts",
          ],
        },
        {
          label: "Time cost to agent",
          values: [
            "Zero after setup",
            "30 to 60 minutes per day minimum",
          ],
        },
        {
          label: "Scalability",
          values: [
            "Handles hundreds of leads identically",
            "Quality degrades as volume increases",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your real estate business?",
      subtitle:
        "Honest assessment. Automation works well for some real estate professionals and not others:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You get consistent inbound leads but respond too slowly",
            "You lose deals because other agents follow up faster",
            "Your CRM has hundreds of contacts with no active nurture",
            "You want to scale without hiring an ISA or assistant",
            "You are a team or brokerage managing leads for multiple agents",
            "You spend too much time on admin instead of appointments and closings",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You get fewer than 10 leads per month and can handle them manually",
            "You already have a full-time ISA doing consistent follow-up",
            "You are brand new and have no lead sources set up yet",
            "You want to replace all personal communication with AI",
            "You are not willing to invest in a system before seeing results",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Your options for real estate automation",
      subtitle:
        "Three paths to consider. Each has trade-offs:",
      options: [
        {
          icon: Wrench,
          heading: "Hire a consultant to build it",
          highlighted: true,
          items: [
            "Custom system built around your specific workflow and lead sources",
            "Integrates with your existing CRM (Follow Up Boss, KVCore, Sierra, etc.)",
            "One-time build cost: $2K to $6K depending on complexity",
            "You own everything that gets built",
            "Best for: agents or teams ready to systematize their follow-up",
          ],
        },
        {
          icon: Bot,
          heading: "Use a platform with built-in automation",
          highlighted: false,
          items: [
            "Platforms like Follow Up Boss, Real Geeks, or kvCORE have some automation",
            "Limited to what the platform supports — customization is restricted",
            "Monthly subscription cost adds up over time",
            "Works for basic sequences but breaks down with complex logic",
            "Best for: agents who want something out of the box and are okay with limitations",
          ],
        },
        {
          icon: Users,
          heading: "Hire an ISA or virtual assistant",
          highlighted: false,
          items: [
            "Human touch on every call and text",
            "$2K to $4K per month ongoing",
            "Quality depends entirely on the individual you hire",
            "Does not scale well — each person handles limited volume",
            "Best for: high-volume teams that need human judgment on every lead",
          ],
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar automation projects",
      subtitle:
        "These case studies show the same lead follow-up and CRM automation patterns that apply directly to real estate:",
      studies: [
        {
          industry: "E-Commerce",
          headline: "5,600 leads organized and automated",
          body: "Thousands of leads sitting in spreadsheets with no outreach. Automated CRM workflows organized every contact and made follow-up consistent. The same approach works for real estate databases.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Restaurant",
          headline: "100% of after-hours inquiries captured",
          body: "AI voice agent handles all inbound calls and routes complex requests. For real estate, the same system qualifies buyer inquiries and schedules showings.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Info Business",
          headline: "Automated lead qualification at scale",
          body: "Manual prospecting replaced with automated discovery and qualification. The same qualification logic helps real estate teams sort serious buyers from browsers.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Will this work with my existing CRM?",
      answer:
        "Yes. We integrate with Follow Up Boss, KVCore, Sierra Interactive, LionDesk, HubSpot, GoHighLevel, and most other real estate CRMs. The automation plugs into what you already use.",
    },
    {
      question: "Can it handle leads from multiple sources?",
      answer:
        "Yes. We route leads from Zillow, Realtor.com, your website, Facebook ads, Google ads, and other sources into one system with consistent follow-up regardless of where the lead came from.",
    },
    {
      question: "How fast can this be set up?",
      answer:
        "A basic lead follow-up system can be live in 1 to 2 weeks. A full system with qualification, scheduling, drip campaigns, and CRM automation takes 2 to 4 weeks.",
    },
    {
      question: "Is this only for individual agents?",
      answer:
        "No. We work with solo agents, teams, and brokerages. For teams, we build round-robin lead distribution, agent-specific follow-up sequences, and team-wide reporting.",
    },
    {
      question: "What does it cost?",
      answer:
        "A focused lead follow-up automation runs $2K to $4K. A full system with qualification, scheduling, CRM automation, and database reactivation runs $4K to $6K. Fixed pricing, scoped before any work starts.",
    },
  ],
  faqSubtitle:
    "Practical answers for real estate professionals considering automation",
  ctaHeading: "Stop losing leads to slow follow-up",
  ctaText:
    "Book a 30-minute call. We will look at your current lead flow, identify where deals are falling through the cracks, and give you a clear plan for automation.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a focused conversation about your real estate business.",
  relatedLinks: [
    { label: "What to automate first for real estate teams", href: "/what-to-automate-first-for-real-estate" },
    { label: "Real estate lead response and follow-up automation", href: "/real-estate-lead-response-and-follow-up-automation" },
    { label: "Showing coordination automation for real estate teams", href: "/showing-coordination-automation-for-real-estate-teams" },
    { label: "CRM cleanup and routing for real estate teams", href: "/crm-cleanup-and-routing-for-real-estate-teams" },
    { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
