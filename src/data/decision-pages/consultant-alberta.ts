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
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-consultant-alberta",
  metaTitle:
    "AI Automation Consultant Alberta | Dmytro AI",
  metaDescription:
    "AI automation consultant serving businesses across Alberta. Custom automations for lead follow-up, scheduling, CRM workflows, and operations. Based in Calgary, working province-wide.",
  badgeText: "Alberta, Canada",
  badgeIcon: MapPin,
  h1: "AI Automation Consultant for Alberta Businesses",
  heroIntro:
    "Whether you are in Calgary, Edmonton, Red Deer, Lethbridge, or anywhere else in Alberta, the operational bottlenecks are the same. Leads go cold because follow-up is slow. Appointments fall through the cracks. Your team spends hours on admin work that should run itself. We build AI-powered automations that handle it.",
  heroSubtext:
    "Below: what we automate, which Alberta industries we work with most, how the process works, and how to tell if this is the right fit for your business.",
  sections: [
    {
      type: "cards",
      title: "What we automate for Alberta businesses",
      subtitle:
        "The bottlenecks we see most often across Alberta service businesses — and the automations that fix them:",
      items: [
        {
          icon: Phone,
          title: "Lead follow-up and response",
          body: "Instant SMS and email responses to every inquiry. Multi-touch follow-up sequences that run until the lead books or opts out. No more leads going cold because nobody had time to call back.",
        },
        {
          icon: CalendarCheck,
          title: "Appointment scheduling",
          body: "AI-powered booking that qualifies leads, checks availability, and confirms appointments without your team touching a thing. Reminders and no-show follow-up included.",
        },
        {
          icon: BarChart3,
          title: "CRM cleanup and automation",
          body: "Leads logged, tagged, and enrolled in the right sequences automatically. No more messy data, duplicate contacts, or leads sitting untouched in your pipeline.",
        },
        {
          icon: Wrench,
          title: "Operations and internal workflows",
          body: "Invoice generation, reporting, inventory updates, team notifications. If your team does it repeatedly and it follows a pattern, it can probably be automated.",
        },
        {
          icon: Bot,
          title: "AI voice agents",
          body: "24/7 phone answering for booking, qualification, and routing. Handles the calls your team cannot get to and routes complex requests to the right person.",
        },
        {
          icon: Building2,
          title: "Multi-location coordination",
          body: "If you operate multiple locations across Alberta, we build systems that keep scheduling, lead routing, and reporting consistent across all of them.",
        },
      ],
    },
    {
      type: "cards",
      title: "Alberta industries we work with",
      subtitle:
        "Alberta runs on trades, professional services, and energy. These are the industries where we see the clearest automation ROI:",
      items: [
        {
          icon: Wrench,
          title: "HVAC, plumbing, and electrical",
          body: "Missed call text-back, lead follow-up, dispatch coordination, estimate follow-up, seasonal maintenance campaigns, and review automation.",
        },
        {
          icon: Building2,
          title: "Real estate teams and brokerages",
          body: "Lead qualification, showing coordination, drip campaigns, CRM automation, and follow-up on listing inquiries.",
        },
        {
          icon: Users,
          title: "Dental and medical clinics",
          body: "Patient booking, intake forms, appointment reminders, recall campaigns, and no-show follow-up sequences.",
        },
        {
          icon: BarChart3,
          title: "Law firms and accounting practices",
          body: "Consultation booking, client intake, document collection reminders, and follow-up sequences for prospects who do not book.",
        },
        {
          icon: Workflow,
          title: "Construction and field service",
          body: "Estimate follow-up, dispatch automation, vendor coordination, job status updates, and project reporting.",
        },
        {
          icon: CalendarCheck,
          title: "Mortgage brokers and financial services",
          body: "Application follow-up, document collection automation, rate alert sequences, and client nurture campaigns.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit / not a fit",
      subtitle:
        "Honest assessment of when automation consulting makes sense for your Alberta business:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your team spends hours daily on repetitive manual tasks",
            "You lose leads because follow-up is slow or inconsistent",
            "You are growing but cannot keep hiring to handle the volume",
            "You use a CRM or scheduling tool but it is not fully utilized",
            "You want fixed pricing and a clear scope before committing",
            "You do $500K to $10M in annual revenue and are hitting operational limits",
          ],
        },
        {
          icon: XCircle,
          heading: "Not a fit",
          variant: "neutral",
          items: [
            "You are looking for a full software product, not targeted automation",
            "Your processes change weekly and are not defined enough to automate",
            "You need a full-time in-house developer, not a consulting engagement",
            "You want the cheapest option regardless of quality",
            "You are not ready to invest at least $2,000 in a one-time build",
            "You have no existing lead flow to automate",
          ],
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from businesses like yours",
      subtitle:
        "These case studies show the types of automation we build. The patterns apply directly to Alberta service businesses:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "A NYC restaurant was missing reservations every night. We built a 24/7 AI voice agent that handles all calls, books tables, and routes complex requests. Freed up 15 hours/week of management time.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "5,600 leads organized and automated",
          body: "A US auto parts brand had thousands of untouched leads. We built automated follow-up sequences, tripled team capacity without hiring, and lifted conversions significantly.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Info Business",
          headline: "50+ qualified leads per day on autopilot",
          body: "An info business replaced manual Instagram prospecting with an automated pipeline that discovers, qualifies, and delivers leads daily with zero manual work.",
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
      question: "Do I need to be in Calgary to work with you?",
      answer:
        "No. We work remotely with businesses across Alberta and all of Canada. We are based in Calgary but our delivery is fully remote. Whether you are in Edmonton, Red Deer, Lethbridge, Medicine Hat, or a rural community, the process is the same.",
    },
    {
      question: "What size business is this for?",
      answer:
        "Most of our clients are small to mid-size businesses with 5 to 100 employees. The sweet spot is businesses doing $500K to $10M in annual revenue that are growing but hitting operational bottlenecks.",
    },
    {
      question: "How long does a typical automation project take?",
      answer:
        "A focused automation (lead follow-up, appointment booking, CRM cleanup) takes 1 to 3 weeks. A larger system with multiple integrations and custom logic takes 3 to 6 weeks. We scope everything before starting so there are no surprises.",
    },
    {
      question: "What tools and platforms do you work with?",
      answer:
        "We build primarily with n8n, Make, and custom API integrations. For AI components, we use OpenAI, Anthropic, and voice platforms like Vapi and Bland. For CRMs, we work with GoHighLevel, HubSpot, Salesforce, and others.",
    },
    {
      question: "What if I am not sure what to automate first?",
      answer:
        "That is exactly what the initial call is for. We look at your current operations, identify the highest-impact bottlenecks, and recommend where to start. Most businesses have 2 to 3 obvious automation opportunities once someone maps out the workflows.",
    },
  ],
  faqSubtitle:
    "Practical answers about working with an AI automation consultant in Alberta",
  ctaHeading: "Ready to automate the busywork?",
  ctaText:
    "Book a 30-minute call. We will look at your current operations, identify the highest-impact automation opportunities, and give you a clear picture of what it would take to build them.",
  ctaSubtext:
    "No obligation. No hard sell. Just a straightforward conversation about whether automation makes sense for your business.",
  relatedLinks: [
    { label: "AI automation consultant Calgary", href: "/ai-automation-consultant-calgary" },
    { label: "AI automation consultant Edmonton", href: "/ai-automation-consultant-edmonton" },
    { label: "AI automation consultant Canada", href: "/ai-automation-consultant-canada" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
