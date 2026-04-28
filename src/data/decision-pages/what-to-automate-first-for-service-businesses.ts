import {
  Workflow,
  Phone,
  MessageSquare,
  CalendarCheck,
  UserCheck,
  MailCheck,
  PhoneCall,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Target,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-service-businesses",
  metaTitle:
    "What to Automate First for Service Businesses — Choose Your Safest First Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in your service business? A practical guide to choosing between lead response, missed-call recovery, follow-up sequences, scheduling, onboarding, reactivation, and phone coverage — with cost ranges and honest fit framing.",
  badgeText: "First-Project Guide",
  badgeIcon: Workflow,
  h1: "What to Automate First for Service Businesses",
  heroIntro:
    "The safest first automation for most service businesses is instant lead response — an automatic SMS and email reply sent within 60 seconds of every form submission or missed call. It costs $1K–$2K to deploy, typically pays for itself in the first week, and produces measurable data that tells you exactly what to build next. Below is a practical decision framework for choosing between seven common first-project candidates: lead response, missed-call recovery, follow-up sequences, scheduling and reminders, client onboarding, database reactivation, and after-hours phone coverage. The right choice depends on where your business is actually losing revenue today — not which automation sounds most impressive.",
  heroSubtext:
    "Below: the seven workflows worth considering as a first project, how to choose the right one based on your specific bottleneck, honest fit and not-fit criteria, adjacent proof from published case studies, and what to skip until the basics are working.",
  sections: [
    {
      type: "table",
      title: "Seven first-project candidates for service businesses",
      subtitle:
        "Each of these workflows has produced measurable results for service businesses. They are ordered by typical speed-to-ROI:",
      headers: ["Setup cost", "Time to ROI", "Best when"],
      rows: [
        {
          label: "Lead response (instant SMS + email)",
          values: [
            "$1K–$2K",
            "Same week",
            "Leads wait hours for a reply or get no response at all",
          ],
        },
        {
          label: "Missed-call recovery (text-back)",
          values: [
            "$500–$1.5K",
            "Same week",
            "Unanswered calls go to voicemail and callers never try again",
          ],
        },
        {
          label: "Follow-up sequences (SMS + email nurture)",
          values: [
            "$1.5K–$3K",
            "2–4 weeks",
            "Good leads go cold because nobody follows up consistently after the first touch",
          ],
        },
        {
          label: "Scheduling and reminders",
          values: [
            "$2K–$5K",
            "1–2 weeks",
            "Phone tag, no-shows, and manual reminder work are costing real hours and slots",
          ],
        },
        {
          label: "Client onboarding",
          values: [
            "$2K–$4K",
            "2–4 weeks",
            "Sold work stalls because intake forms, welcome steps, or handoff checklists are scattered",
          ],
        },
        {
          label: "Database reactivation",
          values: [
            "$1.5K–$3K",
            "1–2 weeks",
            "You have 500+ past customers or old leads that nobody is working",
          ],
        },
        {
          label: "After-hours phone coverage (AI voice agent)",
          values: [
            "$2K–$5K",
            "1–2 weeks",
            "Calls after 5 PM or on weekends go to voicemail and represent real lost bookings",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which workflow should you automate first?",
      subtitle:
        "Choose the first build based on where your business is actually losing money — not which automation demo looked best:",
      options: [
        {
          icon: Phone,
          heading: "Start with lead response",
          highlighted: true,
          items: [
            "Leads submit a form or call and wait hours before anyone replies",
            "Your competitors are booking the same leads while your team is on a job site or with another customer",
            "You know leads are arriving but your conversion rate stays low",
            "This is the default first project for most service businesses because it produces measurable results fastest and the data from it tells you exactly where the next bottleneck is",
          ],
        },
        {
          icon: PhoneCall,
          heading: "Start with missed-call recovery",
          items: [
            "You miss 20–40% of inbound calls during busy hours or after hours",
            "Most callers who hit voicemail never call back or leave a message",
            "The cheapest automation on this list and often the simplest to deploy",
            "Best next pages: /missed-call-text-back-for-service-businesses, /missed-call-text-back-cost-small-business",
          ],
        },
        {
          icon: MessageSquare,
          heading: "Start with follow-up sequences",
          items: [
            "Leads respond to the first message but nobody follows up consistently after that",
            "Open quotes and estimates sit without visibility",
            "One or two recovered leads per month would easily justify the build cost",
            "Best next pages: /ai-lead-follow-up-for-service-businesses, /lead-follow-up-automation-examples",
          ],
        },
        {
          icon: CalendarCheck,
          heading: "Start with scheduling and reminders",
          items: [
            "Phone tag and manual booking eat hours of admin time every week",
            "No-shows and last-minute cancellations are hurting utilization",
            "Leads are interested but the booking handoff is messy or slow",
            "Best next pages: /ai-appointment-setter, /no-show-reduction-automation",
          ],
        },
      ],
    },
    {
      type: "cards",
      title: "Three more workflows that make strong first projects in the right situation",
      subtitle:
        "These are less common as a first build but can be the right starting point when the conditions match:",
      items: [
        {
          icon: UserCheck,
          title: "Client onboarding",
          body: "Start here when sales are already happening but delivery stalls because intake forms, document collection, welcome steps, or internal task creation are still manual and inconsistent. The best fit is a business where onboarding friction creates real delays or client complaints.",
          links: [
            { label: "Client onboarding automation", href: "/client-onboarding-automation" },
            { label: "Intake forms and document collection", href: "/intake-forms-and-document-collection-automation-for-service-businesses" },
          ],
        },
        {
          icon: MailCheck,
          title: "Database reactivation",
          body: "Start here when you already have 500+ past customers or quoted leads sitting idle in a CRM or spreadsheet. A targeted reactivation campaign generates revenue from contacts who already know your business — often faster than chasing net-new leads.",
          links: [
            { label: "Client reactivation workflow", href: "/client-reactivation-automation" },
            { label: "HVAC database reactivation example", href: "/hvac-database-reactivation" },
          ],
        },
        {
          icon: PhoneCall,
          title: "After-hours phone coverage",
          body: "Start here when a meaningful share of your calls come after business hours and callers expect to reach someone, not voicemail. An AI voice agent handles FAQs, books appointments, and captures details so the team can follow up in the morning.",
          links: [
            { label: "AI phone answering setup", href: "/ai-phone-answering-setup-small-business" },
            { label: "Paris Cafe voice agent case study", href: "/case-studies/paris-cafe-voice-agent" },
          ],
        },
      ],
    },
    {
      type: "cards",
      title: "Match the first workflow to the best next page and proof asset",
      subtitle:
        "Once the bottleneck is obvious, go one level deeper into the page that answers the next implementation question — and pair it with the strongest proof asset instead of staying on a generic strategy page:",
      items: [
        {
          icon: Phone,
          title: "Lead response or missed calls are the leak",
          body: "If slow speed-to-lead is the problem, keep the next step simple: tighten the instant reply, add missed-call recovery, and compare it with the Paris Cafe proof before you think about more advanced AI layers.",
          links: [
            { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
            { label: "Missed-call text-back for service businesses", href: "/missed-call-text-back-for-service-businesses" },
            { label: "Paris Cafe voice agent case study", href: "/case-studies/paris-cafe-voice-agent" },
          ],
        },
        {
          icon: MessageSquare,
          title: "Leads reply once, then go cold",
          body: "If the first response is already happening but nobody works the lead after that, move into the follow-up cluster. That is where you can compare examples, cost, and the WheelsFeels proof before deciding how much automation depth you actually need.",
          links: [
            { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
            { label: "Lead follow-up automation examples", href: "/lead-follow-up-automation-examples" },
            { label: "WheelsFeels CRM case study", href: "/case-studies/ecommerce-crm-automation" },
          ],
        },
        {
          icon: CalendarCheck,
          title: "Booking, reminders, or after-hours coverage break down",
          body: "If the leak is later in the funnel, compare scheduling, no-show prevention, and phone coverage together. These pages help you decide whether you need appointment-setting, a simpler reminder workflow, or a voice layer that covers nights and weekends.",
          links: [
            { label: "AI appointment setter", href: "/ai-appointment-setter" },
            { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
            { label: "AI phone answering setup", href: "/ai-phone-answering-setup-small-business" },
          ],
        },
        {
          icon: Workflow,
          title: "You still need help choosing the smallest good project",
          body: "If the business has multiple leaks and you are still deciding where to start, compare the broader service-business decision pages with the consultant and pricing guides so the first project stays bounded instead of turning into a giant platform rebuild.",
          links: [
            { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
            { label: "AI automation consultant for small business", href: "/ai-automation-consultant-small-business" },
            { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
          ],
        },
      ],
    },
    {
      type: "cards",
      title: "This page vs. adjacent service-business guides",
      subtitle:
        "This page is narrower than the broad decision pages. Each one answers a different question:",
      items: [
        {
          icon: Target,
          title: "What to automate first (this page)",
          body: "Helps you choose which single bounded workflow to build first. Compares lead response, missed-call recovery, follow-up, scheduling, onboarding, reactivation, and phone coverage by cost, speed-to-ROI, and fit criteria.",
        },
        {
          icon: Workflow,
          title: "What processes can AI automate in my business?",
          body: "Broader than this page. Covers the full range of automatable processes and how to evaluate whether a workflow is ready for automation. Start there if you are still in the research phase.",
          links: [
            { label: "Process selection guide", href: "/what-processes-can-ai-automate-in-my-business" },
          ],
        },
        {
          icon: BarChart3,
          title: "Best AI automations for service businesses",
          body: "Broader than this page. Covers the top five automations ranked by impact, with budget tiers and industry-specific routing. Start there if you want the full decision framework across multiple verticals.",
          links: [
            { label: "Best AI automations decision guide", href: "/best-ai-automation-for-service-businesses" },
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is your service business ready for a first automation project?",
      subtitle:
        "Automation is an investment. These conditions separate businesses that see fast returns from those that should wait:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit — start now",
          variant: "green",
          items: [
            "You receive 15+ inbound inquiries per week from forms, calls, or messages",
            "You know leads are coming in but your conversion rate is lower than it should be",
            "You have a repeatable sales or booking process with clear next steps",
            "Response time is measured in hours, not minutes",
            "You or your team spend time on manual follow-up, reminders, or scheduling that could follow a pattern",
          ],
        },
        {
          icon: XCircle,
          heading: "Wait or address first",
          variant: "neutral",
          items: [
            "Total lead volume is under 5 inquiries per month — automation amplifies volume, it does not create it",
            "Every project is custom with no repeatable steps, pricing, or booking workflow",
            "You do not have a CRM, spreadsheet, or centralized place to store contact data yet",
            "The team has no agreement on who owns a lead from inquiry to booking",
            "Manual follow-up is already disciplined and response time is consistently under 5 minutes",
          ],
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof from real service-business deployments",
      subtitle:
        "These case studies demonstrate the first-project workflows this page recommends:",
      studies: [
        {
          industry: "Restaurant / lead response and phone coverage",
          headline: "Paris Cafe: instant lead response + 24/7 phone coverage",
          body: "A NYC restaurant deployed an AI voice agent and instant web lead response. After-hours call coverage went from 0% to 100%, web lead response time dropped from hours to under 60 seconds, and management freed up ~15 hours per week. This proves what speed-to-lead and missed-call recovery look like as a first project.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce / CRM and follow-up sequences",
          headline: "WheelsFeels: structured follow-up for 5,600+ leads",
          body: "An auto parts brand automated CRM follow-up sequences for 5,600+ leads. Conversion rate increased by 185% through segmented, timed outreach. This is direct proof that follow-up sequences recover revenue that manual processes leave on the table.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "All case studies", href: "/case-studies" },
        { label: "AI automation cost guide", href: "/ai-automation-cost-small-business" },
        { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
      ],
    },
    {
      type: "prose",
      title: "How to choose the right first workflow without overbuilding",
      subtitle:
        "The decision is simpler than it looks. Follow the revenue leak.",
      blocks: [
        {
          heading: "Start where leads die",
          body: "If inquiries arrive and nobody responds for hours, lead response comes first. If calls go to voicemail and callers never try again, missed-call recovery comes first. If leads respond once but drop off because follow-up is inconsistent, a nurture sequence comes first. The common thread: fix the leak closest to revenue before investing in anything further downstream.",
        },
        {
          heading: "Choose the smallest workflow with a clear payoff",
          body: "A missed-call text-back or instant form reply is a smaller project than an AI booking agent. A smaller first project launches faster, costs less, creates measurable data, and gives you evidence for the next decision. The first automation does not need to be impressive. It needs to work.",
        },
        {
          heading: "Let the first project teach you what to build next",
          body: "Once speed-to-lead is working, you will see exactly where leads stall next — after the first reply, during booking, or after the appointment. That data makes the second project obvious. Most service businesses that skip this step end up building the wrong second automation because they never measured what the first one revealed.",
        },
        {
          heading: "Keep the human handoff clear",
          body: "The best first automation makes the team faster without pretending humans are unnecessary. It handles the repeatable front half — the instant reply, the reminder, the follow-up message — and surfaces the lead to a person at the right moment. If the handoff is not obvious, the workflow will create confusion instead of saving time.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Common mistakes when choosing a first automation",
      subtitle:
        "These mistakes are why service-business owners end up with expensive automation that does not move the needle:",
      items: [
        {
          icon: AlertTriangle,
          title: "Starting with a complex AI chatbot before the basics work",
          body: "A 50-path conversational AI chatbot is not a first project. If your business does not reply to form submissions for 6 hours, the problem is speed-to-lead, not chatbot sophistication. Fix the fundamentals before adding complexity.",
        },
        {
          icon: Clock,
          title: "Automating a process that is not repeatable yet",
          body: "If every lead gets a different workflow, the process is not ready for automation. The team needs to agree on the trigger, the first action, and the handoff before any tool can run it reliably.",
        },
        {
          icon: BarChart3,
          title: "Skipping baseline measurement",
          body: "If you do not know your current response time, follow-up rate, or no-show rate, you will not be able to prove the automation worked. Measure first. Even rough numbers are better than nothing.",
        },
        {
          icon: Target,
          title: "Building the automation that sounded best in a demo instead of the one tied to your biggest leak",
          body: "Demo energy fades. The automation that matters is the one plugged into the place where real revenue is leaking today. That is usually less exciting than AI-powered anything, and it works faster.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should a service business automate first?",
      answer:
        "Usually instant lead response — an automatic SMS and email reply within 60 seconds of every form submission and missed call. It costs $1K–$2K, delivers measurable results in the first week, and the data it produces tells you exactly where leads stall next. If your response time is already under 5 minutes, the next strongest candidates are missed-call recovery, follow-up sequences, or scheduling automation depending on which bottleneck is most expensive.",
    },
    {
      question: "How much should a first automation project cost for a service business?",
      answer:
        "A focused first project typically costs $500–$3K depending on scope. Missed-call text-back is the cheapest at $500–$1.5K. Instant lead response runs $1K–$2K. A follow-up sequence or scheduling automation runs $1.5K–$5K. These are bounded first projects — not ongoing platform subscriptions. See measurable results before spending more.",
    },
    {
      question: "Should I automate lead response or follow-up first?",
      answer:
        "Lead response almost always comes first. If leads wait hours for a reply, a nurture sequence will not save them — they are already gone. Fix speed-to-lead, then add follow-up sequences for leads who respond but do not book right away. The two work best together but response speed is the foundation.",
    },
    {
      question: "What if I am not sure where my business is losing leads?",
      answer:
        "Start with lead response anyway. The data from it — how many leads arrive, how fast you respond, how many convert after instant reply — reveals where the next leak is. Most service businesses that are unsure discover that response time was the biggest problem all along.",
    },
    {
      question: "Is this the same as the best AI automations page?",
      answer:
        "No. The best AI automations page covers the top five automations across all service business types with industry routing and budget tiers. This page is narrower — it focuses specifically on choosing which single workflow should be your first project and gives practical criteria for making that decision.",
    },
    {
      question: "Can I build the first automation myself with Zapier or Make?",
      answer:
        "Simple speed-to-lead responses and missed-call text-back, yes — if you are comfortable with the tools. Multi-step follow-up sequences with branching logic, CRM integration, and error handling usually take more time to build reliably than most owners expect. If a broken automation means lost revenue, having someone build it properly is usually worth the cost.",
    },
  ],
  faqSubtitle:
    "Practical answers for service-business owners choosing their first automation project",
  ctaHeading: "Need help choosing the right first workflow?",
  ctaText:
    "Book a 30-minute call. We will look at where your service business is losing leads, time, or bookings right now and recommend the smallest workflow that would produce a clear, measurable win.",
  ctaSubtext:
    "No giant platform pitch. Just a practical first-project recommendation based on your actual numbers.",
  relatedLinks: [
    { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "What processes can AI automate?", href: "/what-processes-can-ai-automate-in-my-business" },
    { label: "AI automation audit checklist", href: "/ai-automation-audit-checklist" },
    { label: "AI automation implementation roadmap", href: "/ai-automation-implementation-roadmap" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "Missed-call text-back for service businesses", href: "/missed-call-text-back-for-service-businesses" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "Client reactivation workflow", href: "/client-reactivation-automation" },
    { label: "AI phone answering setup", href: "/ai-phone-answering-setup-small-business" },
    { label: "AI automation cost guide", href: "/ai-automation-cost-small-business" },
    { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
    { label: "All automation guides", href: "/guides" },
  ],
};

export default data;
