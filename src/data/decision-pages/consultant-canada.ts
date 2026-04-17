import {
  MapPin,
  Phone,
  CalendarCheck,
  Bot,
  Workflow,
  BarChart3,
  Building2,
  CheckCircle2,
  XCircle,
  Users,
  Wrench,
  Globe,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-consultant-canada",
  metaTitle:
    "AI Automation Consultant Canada | Dmytro AI",
  metaDescription:
    "AI automation consultant serving businesses across Canada. Custom automations for lead follow-up, scheduling, CRM workflows, and operations. Remote delivery, fixed pricing.",
  badgeText: "Canada-Wide",
  badgeIcon: Globe,
  h1: "AI Automation Consultant for Canadian Businesses",
  heroIntro:
    "Same bottlenecks whether you are in Vancouver, Toronto, Montreal, or a town of 10,000. Leads go cold. Appointments get missed. Your team spends half the day on admin that should run itself. We build AI-powered automations that handle the repetitive work so your people focus on revenue.",
  heroSubtext:
    "Below: what we automate, which Canadian industries see the best results, how remote delivery works, and how to tell if this is the right fit.",
  sections: [
    {
      type: "cards",
      title: "What we automate for Canadian businesses",
      subtitle:
        "These automations work the same whether you are in Alberta, Ontario, BC, or the Maritimes. The operational bottlenecks are universal:",
      items: [
        {
          icon: Phone,
          title: "Lead follow-up and response",
          body: "Instant SMS and email responses to every inquiry. Multi-touch follow-up sequences that run until the lead books or opts out. Works across time zones without your team staying late.",
        },
        {
          icon: CalendarCheck,
          title: "Appointment scheduling",
          body: "AI-powered booking that qualifies leads, checks availability, and confirms appointments. Handles time zone differences for businesses serving multiple provinces.",
        },
        {
          icon: BarChart3,
          title: "CRM cleanup and automation",
          body: "Leads logged, tagged, and enrolled in the right sequences automatically. No more messy data or leads sitting untouched in your pipeline.",
        },
        {
          icon: Bot,
          title: "AI voice agents",
          body: "24/7 phone answering for booking, qualification, and routing. Handles calls in English and can be configured for bilingual environments.",
        },
        {
          icon: Workflow,
          title: "Operations and internal workflows",
          body: "Invoice generation, reporting, team notifications, and process automation. If your team does it repeatedly and it follows a pattern, it can be automated.",
        },
        {
          icon: Building2,
          title: "Multi-location coordination",
          body: "Consistent scheduling, lead routing, and reporting across multiple locations or provinces. One system, one view.",
        },
      ],
    },
    {
      type: "prose",
      title: "How remote delivery works",
      subtitle:
        "We are based in Calgary, Alberta. Every project is delivered remotely. Here is what that looks like:",
      blocks: [
        {
          heading: "Discovery and scoping",
          body: "A 30-minute video call to map your current workflows, identify bottlenecks, and agree on what gets built. You do not need to prepare anything technical. Just explain how your business runs today.",
        },
        {
          heading: "Build and review",
          body: "We build the automation, test it with your data, and walk you through it on a screen share. You approve everything before it goes live. Revisions are included in the fixed price.",
        },
        {
          heading: "Launch and support",
          body: "The system goes live. We monitor it for the first two weeks and fix anything that comes up. All communication happens over video call, email, or Slack. No travel required.",
        },
      ],
    },
    {
      type: "cards",
      title: "Industries across Canada where we see the best results",
      subtitle:
        "Canadian service businesses share the same automation opportunities regardless of province:",
      items: [
        {
          icon: Wrench,
          title: "Trades and home services",
          body: "HVAC, plumbing, electrical, roofing, landscaping. Missed call text-back, lead follow-up, estimate follow-up, and seasonal campaigns.",
        },
        {
          icon: Building2,
          title: "Real estate and mortgage",
          body: "Lead qualification, showing coordination, application follow-up, document collection, and drip campaigns.",
        },
        {
          icon: Users,
          title: "Healthcare and dental",
          body: "Patient booking, intake, reminders, recall campaigns, and no-show follow-up.",
        },
        {
          icon: BarChart3,
          title: "Professional services",
          body: "Law firms, accounting practices, consulting firms. Client intake, consultation booking, and follow-up sequences.",
        },
        {
          icon: CalendarCheck,
          title: "Fitness, wellness, and coaching",
          body: "Class booking, membership management, retention sequences, and re-engagement campaigns.",
        },
        {
          icon: Workflow,
          title: "Construction and field service",
          body: "Dispatch automation, estimate follow-up, vendor coordination, and project status reporting.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit / not a fit",
      subtitle:
        "Honest assessment. Remote automation consulting works well for some businesses and not others:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your team spends hours daily on repetitive manual tasks",
            "You lose leads because follow-up is slow or inconsistent",
            "You are growing but cannot keep hiring to handle the volume",
            "You are comfortable working remotely via video call and email",
            "You want fixed pricing and a clear scope before committing",
            "You do $500K to $10M in annual revenue",
          ],
        },
        {
          icon: XCircle,
          heading: "Not a fit",
          variant: "neutral",
          items: [
            "You need someone physically on-site to implement",
            "Your processes change weekly and are not defined enough to automate",
            "You need a full-time in-house developer",
            "You want the cheapest option regardless of quality",
            "You are not ready to invest at least $2,000 in a one-time build",
            "You need enterprise integrations with legacy systems",
          ],
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from businesses we have worked with",
      subtitle:
        "These projects were all delivered remotely. The same approach works for Canadian businesses coast to coast:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "A restaurant was missing reservations every night. We built a 24/7 AI voice agent that handles all calls, books tables, and routes complex requests. Freed up 15 hours/week of management time.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "5,600 leads organized and automated",
          body: "An online brand had thousands of untouched leads. We built automated follow-up sequences and tripled team capacity without hiring.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Info Business",
          headline: "50+ qualified leads per day on autopilot",
          body: "Manual prospecting replaced with an automated pipeline that discovers, qualifies, and delivers leads daily with zero manual work.",
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
      question: "Can you work with businesses outside Alberta?",
      answer:
        "Yes. We work with businesses across Canada. Everything is delivered remotely via video call, email, and screen share. We have worked with clients in multiple provinces and the process is the same regardless of location.",
    },
    {
      question: "What size business is this for?",
      answer:
        "Most of our clients are small to mid-size businesses with 5 to 100 employees doing $500K to $10M in annual revenue. If you have manual processes eating up your team's time, you are likely a fit.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "A focused automation takes 1 to 3 weeks. A larger system with multiple integrations takes 3 to 6 weeks. We scope everything before starting with a fixed price and timeline.",
    },
    {
      question: "Do you work in French?",
      answer:
        "Project communication is in English. AI voice agents and automated messaging can be configured for French-speaking customers if your business requires bilingual communication.",
    },
    {
      question: "What if I am not sure what to automate first?",
      answer:
        "That is what the initial call is for. We look at your current operations, identify the highest-impact bottlenecks, and recommend where to start. Most businesses have 2 to 3 obvious opportunities.",
    },
  ],
  faqSubtitle:
    "Practical answers about working with an AI automation consultant in Canada",
  ctaHeading: "Ready to automate the busywork?",
  ctaText:
    "Book a 30-minute call. We will look at your current operations, identify the highest-impact automation opportunities, and give you a clear picture of what it would take.",
  ctaSubtext:
    "No obligation. No hard sell. Remote delivery, fixed pricing, clear scope.",
  relatedLinks: [
    { label: "AI automation consultant Alberta", href: "/ai-automation-consultant-alberta" },
    { label: "AI automation consultant Calgary", href: "/ai-automation-consultant-calgary" },
    { label: "AI automation consultant Edmonton", href: "/ai-automation-consultant-edmonton" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
