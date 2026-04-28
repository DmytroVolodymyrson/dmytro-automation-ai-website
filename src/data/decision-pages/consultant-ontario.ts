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
  slug: "ai-automation-consultant-ontario",
  metaTitle:
    "AI Automation Consultant Ontario | Dmytro AI",
  metaDescription:
    "AI automation consultant serving businesses across Ontario. Custom automations for lead follow-up, scheduling, CRM workflows, and operations. Remote delivery, fixed pricing, clear scope.",
  badgeText: "Ontario, Canada",
  badgeIcon: MapPin,
  h1: "AI Automation Consultant for Ontario Businesses",
  heroIntro:
    "Whether you are in Toronto, Ottawa, Hamilton, Mississauga, London, or Kitchener-Waterloo, the bottlenecks look familiar. Leads go cold because nobody replies fast enough. Appointments and consults slip because follow-up is inconsistent. Your team burns hours on CRM updates, scheduling, and admin work that should already run in the background. We build AI-powered automations that handle that workload.",
  heroSubtext:
    "Below: what we automate, where Ontario businesses usually see the clearest ROI, how remote delivery works across the province, and how to tell if this is the right fit for your business.",
  sections: [
    {
      type: "cards",
      title: "What we automate for Ontario businesses",
      subtitle:
        "The operational problems are consistent across Ontario service businesses — and so are the automation patterns that fix them:",
      items: [
        {
          icon: Phone,
          title: "Lead follow-up and response",
          body: "Instant SMS and email responses to every inquiry. Multi-touch follow-up sequences that keep working after the first reply so warm leads do not die in a crowded inbox.",
        },
        {
          icon: CalendarCheck,
          title: "Appointment scheduling",
          body: "AI-powered booking that qualifies leads, checks availability, confirms appointments, and sends reminders without your team managing the whole chain manually.",
        },
        {
          icon: BarChart3,
          title: "CRM cleanup and automation",
          body: "Leads logged, tagged, assigned, and enrolled in the right sequences automatically. No more duplicate records, manual copy-paste, or leads sitting untouched in your pipeline.",
        },
        {
          icon: Wrench,
          title: "Operations and internal workflows",
          body: "Invoice generation, reporting, handoff notifications, status updates, and recurring back-office tasks. If the work repeats and follows clear rules, it is usually a candidate for automation.",
        },
        {
          icon: Bot,
          title: "AI voice agents",
          body: "24/7 phone answering for booking, qualification, and routing. Handles routine call volume when your team cannot get to the phone fast enough.",
        },
        {
          icon: Building2,
          title: "Multi-location coordination",
          body: "If you operate across the GTA or across multiple Ontario cities, we build systems that keep lead routing, booking, and reporting consistent across locations.",
        },
      ],
    },
    {
      type: "cards",
      title: "Ontario industries where the ROI is usually clearest",
      subtitle:
        "The strongest fits tend to be service businesses with real inquiry volume, repeatable workflows, and too much admin drag:",
      items: [
        {
          icon: Building2,
          title: "Real estate teams and mortgage brokerages",
          body: "Lead response, showing or consult coordination, document collection, CRM routing, and follow-up on inquiries that would otherwise go stale.",
        },
        {
          icon: BarChart3,
          title: "Law firms, accounting firms, and professional services",
          body: "Client intake, consultation booking, document reminders, status updates, and follow-up on prospects who do not book right away.",
        },
        {
          icon: Users,
          title: "Dental, medical, and clinic operators",
          body: "Patient booking, intake forms, recall campaigns, appointment reminders, and no-show follow-up sequences.",
        },
        {
          icon: Wrench,
          title: "Trades and home services",
          body: "Missed-call recovery, estimate follow-up, dispatch coordination, review requests, seasonal campaigns, and repeat-customer reactivation.",
        },
        {
          icon: Workflow,
          title: "Agencies, info businesses, and sales teams",
          body: "Lead qualification, outreach support, CRM hygiene, pipeline handoff, and repetitive internal workflows that should not consume the founder's day.",
        },
        {
          icon: CalendarCheck,
          title: "Multi-location operators",
          body: "Consistent scheduling, lead routing, and reporting for businesses serving the GTA plus satellite locations elsewhere in Ontario.",
        },
      ],
    },
    {
      type: "prose",
      title: "How remote delivery works across Ontario",
      subtitle:
        "We are based in Alberta. Ontario projects are delivered remotely. The practical process is simple:",
      blocks: [
        {
          heading: "Discovery and scoping",
          body: "We start with a 30-minute call to map your current workflow, identify the bottlenecks, and agree on the smallest high-value build worth doing first. You do not need technical prep. Just explain how the process works today.",
        },
        {
          heading: "Build and review",
          body: "We build the workflow, test it against real scenarios, and review it with you on a screen share. You see exactly what is going live and where the human handoff still belongs.",
        },
        {
          heading: "Launch and support",
          body: "Once approved, the automation goes live. We monitor the early rollout, fix what needs tightening, and make sure ownership is clear so the system does not become another neglected tool.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit / not a fit",
      subtitle:
        "Honest assessment of when automation consulting makes sense for an Ontario business:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your team spends hours every week on repetitive manual work",
            "You lose leads because response time is slow or inconsistent",
            "You are growing but cannot keep solving volume with more headcount",
            "You use a CRM or scheduling system but the workflow around it is messy",
            "You want fixed pricing and a clearly scoped first project",
            "You do roughly $500K to $10M in annual revenue and operations are starting to strain",
          ],
        },
        {
          icon: XCircle,
          heading: "Not a fit",
          variant: "neutral",
          items: [
            "You need a full custom software platform, not bounded workflow automation",
            "Your process changes weekly and is not stable enough to automate yet",
            "You want a full-time in-house developer rather than a consulting engagement",
            "You are shopping for the cheapest possible option regardless of reliability",
            "You are not ready to invest at least $2,000 in a focused build",
            "You have almost no lead volume or repetitive workflow to improve",
          ],
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from businesses we have worked with",
      subtitle:
        "These are not Ontario-specific case studies, but they prove the kinds of automation patterns that Ontario service businesses buy:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "A restaurant was missing reservation demand every night. We built a 24/7 AI voice agent that handles routine calls, books tables, and routes complex requests. The result was full after-hours coverage and less management time lost to the phone.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "5,600 leads organized and automated",
          body: "A US auto parts brand had thousands of untouched leads. We built automated follow-up sequences and CRM routing that lifted team capacity without adding more admin overhead.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Info Business",
          headline: "50+ qualified leads per day on autopilot",
          body: "Manual Instagram prospecting was replaced with an automated pipeline that discovers, qualifies, and delivers leads daily with minimal manual effort.",
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
      question: "Do I need to be in Toronto or Ottawa to work with you?",
      answer:
        "No. We work remotely with businesses across Ontario. Whether you are in the GTA, Ottawa, Hamilton, London, or a smaller market, the delivery model is the same: video calls, email, screen share, and fixed-scope implementation.",
    },
    {
      question: "What size business is this for?",
      answer:
        "Most clients are small to mid-size businesses with 5 to 100 employees and enough recurring workflow volume that automation can remove real operational drag. If your team is buried in follow-up, booking, admin, or CRM cleanup, you are likely in the right zone.",
    },
    {
      question: "How long does a typical automation project take?",
      answer:
        "A focused workflow such as lead follow-up, booking, or CRM cleanup usually takes 1 to 3 weeks. A larger multi-step system with several integrations typically takes 3 to 6 weeks. We scope it before work starts so timing and scope stay clear.",
    },
    {
      question: "What tools and platforms do you work with?",
      answer:
        "We build primarily with n8n, Make, and custom API integrations. For AI components, we use tools such as OpenAI-compatible models and voice platforms like Vapi and Bland. For CRM work, we commonly work with GoHighLevel, HubSpot, and other systems already used by small service businesses.",
    },
    {
      question: "What if I am not sure what to automate first?",
      answer:
        "That is the point of the first call. We look at your workflow, identify the biggest leak, and recommend the smallest high-value build worth doing first instead of trying to automate everything at once.",
    },
  ],
  faqSubtitle:
    "Practical answers about working with an AI automation consultant in Ontario",
  ctaHeading: "Ready to automate the busywork?",
  ctaText:
    "Book a 30-minute call. We will look at your current operations, identify the highest-impact automation opportunities, and give you a clear picture of what it would take to build them.",
  ctaSubtext:
    "No obligation. No hard sell. Just a straightforward conversation about whether automation makes sense for your business.",
  relatedLinks: [
    { label: "AI automation consultant Toronto", href: "/ai-automation-consultant-toronto" },
    { label: "AI automation consultant Ottawa", href: "/ai-automation-consultant-ottawa" },
    { label: "AI automation consultant Canada", href: "/ai-automation-consultant-canada" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
