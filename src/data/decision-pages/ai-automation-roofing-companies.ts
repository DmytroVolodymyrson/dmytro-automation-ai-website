import {
  Home,
  Phone,
  MessageSquare,
  Clock,
  Star,
  CheckCircle2,
  XCircle,
  Users,
  BarChart3,
  TrendingUp,
  Shield,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-for-roofing-companies",
  metaTitle:
    "AI Automation for Roofing Companies — Lead Follow-Up, Estimate Nurture, Storm Response | Dmytro AI",
  metaDescription:
    "AI automation for roofing companies. Missed call text-back, lead follow-up, estimate follow-up, insurance claim coordination, client reactivation, and review automation. What works and where to start.",
  badgeText: "Roofing Industry",
  badgeIcon: Home,
  h1: "AI Automation for Roofing Companies",
  heroIntro:
    "A hailstorm hits your area on a Tuesday night. By Wednesday morning your phone is ringing nonstop — but your crews are already out on three jobs. Half the calls go to voicemail. By the time you return them that evening, those homeowners have already scheduled inspections with the roofer who texted back in 30 seconds. Roofing is a high-ticket, time-sensitive business. A single missed call during storm season can cost you an $8,000 to $15,000 job. AI automation handles the call response, estimate follow-up, and client outreach that your team physically cannot keep up with when it matters most.",
  heroSubtext:
    "Below: what roofing company automation looks like in practice, where it delivers the clearest ROI, and how to decide if it is worth the investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a roofing company",
      subtitle:
        "These automations are built for the reality of running a roofing business — storm-driven call spikes, crews in the field all day, and high-value estimates with long decision cycles:",
      items: [
        {
          icon: Phone,
          title: "Missed call text-back",
          body: "When a call goes unanswered — and during storm season, many will — an automatic text goes out within seconds. Captures the lead, confirms you received their call, and starts a conversation before they move on to the next company.",
        },
        {
          icon: MessageSquare,
          title: "Lead follow-up sequences",
          body: "Every new inquiry — web form, Google ad, storm damage request — gets an instant response and a multi-step follow-up sequence. Storm damage leads go cold within hours, not days. Automation keeps you in front of them.",
        },
        {
          icon: Clock,
          title: "Estimate and quote follow-up",
          body: "Roofing estimates are $5,000 to $25,000 or more. Homeowners take time to decide, get second opinions, and procrastinate. Automated follow-up at 2, 5, and 14 days keeps your estimate top of mind without your team chasing every one manually.",
        },
        {
          icon: Shield,
          title: "Insurance claim coordination follow-up",
          body: "Insurance jobs stall for weeks waiting on adjusters, approvals, and paperwork. Automated check-ins with the homeowner keep the project moving and prevent them from going with another roofer while they wait.",
        },
        {
          icon: Users,
          title: "Client reactivation and maintenance campaigns",
          body: "Automated outreach to past clients for roof inspections, gutter cleaning, and maintenance programs. Turns one-time storm damage jobs into recurring revenue and referral sources.",
        },
        {
          icon: Star,
          title: "Review request automation",
          body: "After every completed job, an automated text asks for a Google review. Happy clients get a direct review link. Unhappy ones get routed to you first. Consistent reviews compound — roofing is one of the most review-driven home services.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your roofing company?",
      subtitle:
        "Honest assessment. Some roofing companies see immediate ROI. Others are not ready yet:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You miss calls during storm season because your team is on roofs or driving between jobs",
            "You send estimates but do not follow up systematically — homeowners ghost and you lose the job",
            "Your crews are in the field all day and nobody is managing inbound leads in real time",
            "You are running 2 or more crews and your volume is growing",
            "You lose jobs because homeowners went with whoever responded first",
            "You want a maintenance or inspection program but have no system to manage outreach",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a solo roofer with a full referral book and do not need more work",
            "You already have a dedicated sales team that handles every lead and follow-up consistently",
            "You do fewer than 10 jobs per month and are not actively marketing",
            "You want the cheapest option regardless of quality",
            "You are not ready to invest at least $2K in a one-time build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI expectations for roofing company automation",
      subtitle:
        "The math on roofing automation is hard to argue with:",
      items: [
        {
          icon: BarChart3,
          title: "The cost of one missed job",
          body: "Your average roofing job is $8,000 to $15,000. One job lost to a missed call or forgotten estimate follow-up covers the entire cost of building an automation system. During storm season, you are not losing one — you are losing several.",
        },
        {
          icon: Clock,
          title: "Storm season call spikes",
          body: "After a major storm, call volume can spike 5x to 10x in a single day. Your office cannot physically answer every call. The companies that capture those leads with instant text-back and automated follow-up book the jobs. The rest leave voicemails that never get returned.",
        },
        {
          icon: TrendingUp,
          title: "Estimate conversion improvement",
          body: "Most roofing companies send estimates and hope for the best. Systematic follow-up at the right intervals — not pushy, just professional — can meaningfully improve your close rate on high-value quotes that would otherwise go silent.",
        },
        {
          icon: Users,
          title: "Recurring revenue from past clients",
          body: "A past roofing client is your best source of referrals and maintenance revenue. Automated annual inspection reminders and maintenance program campaigns turn your completed job list into a long-term asset instead of a dead database.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same lead follow-up and estimate management patterns that apply directly to roofing companies:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "AI voice agent handles all after-hours calls and routes requests. For roofing companies, the same system captures storm damage inquiries and estimate requests while your crews are on jobs.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and reactivated",
          body: "Automated follow-up sequences organized untouched leads and drove consistent outreach. For roofing companies, this means no estimate request or past client gets forgotten — especially during the chaos of storm season.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for painting contractors", href: "/ai-automation-for-painting-contractors" },
        { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is the most impactful automation for a roofing company?",
      answer:
        "Missed call text-back and estimate follow-up. These solve the two biggest revenue leaks in roofing: calls that go to voicemail during storm season and high-value estimates that sit unanswered for weeks. Fixing those two problems typically pays for the entire automation build with the first job you save.",
    },
    {
      question: "How does automation handle storm season call spikes?",
      answer:
        "When call volume surges, every unanswered call triggers an instant text-back within seconds. The system captures the lead, confirms you received their request, and queues them into a follow-up sequence. Your team can prioritize callbacks based on urgency instead of scrambling to return 40 voicemails at the end of the day.",
    },
    {
      question: "Can the system help with insurance claim follow-up?",
      answer:
        "Yes. Insurance jobs have long timelines with multiple stall points — waiting on adjusters, approvals, supplements. Automated check-in sequences keep the homeowner updated and engaged throughout the process, reducing the chance they get frustrated and hire someone else.",
    },
    {
      question: "What does it cost?",
      answer:
        "A single workflow like missed call text-back runs $1K to $2K. A complete system — lead follow-up, estimate nurture, insurance follow-up, reactivation, reviews — runs $3K to $6K. Fixed pricing, scoped before work starts. One saved roofing job pays for it.",
    },
    {
      question: "Will this work with my roofing CRM?",
      answer:
        "In most cases, yes. We integrate at the communication and lead management layer. If your platform — JobNimbus, AccuLynx, Jobber, or similar — has an API or supports webhooks, we can connect to it. We verify compatibility during the scoping call.",
    },
  ],
  faqSubtitle:
    "Practical answers for roofing companies considering automation",
  ctaHeading: "Stop losing roofing jobs to missed calls and forgotten estimates",
  ctaText:
    "Book a 30-minute call. We will look at your current lead flow, identify where jobs are being lost — especially during storm season — and give you a clear plan for what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your roofing business.",
  relatedLinks: [
    { label: "AI automation for painting contractors", href: "/ai-automation-for-painting-contractors" },
    { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
    { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
