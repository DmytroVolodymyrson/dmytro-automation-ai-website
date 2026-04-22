import {
  Wrench,
  Phone,
  Bot,
  CalendarCheck,
  Workflow,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  DollarSign,
  Clock,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-appointment-setter-setup",
  metaTitle:
    "AI Appointment Setter Setup Help for Small Business — When Expert Setup Is Worth It | Dmytro AI",
  metaDescription:
    "Need help setting up an AI appointment setter? Practical guide for small businesses on call flows, qualification logic, booking rules, CRM integration, pricing, and when expert setup is worth it.",
  badgeText: "Setup Help",
  badgeIcon: Wrench,
  h1: "AI Appointment Setter Setup Help for Small Business",
  heroIntro:
    "If you already believe an AI appointment setter could help your business, the real question is not whether the software exists. The real question is whether the setup will actually match your call flow, booking rules, qualification logic, and CRM handoff. That is where most businesses get stuck. The technology is not the hard part. The hard part is deciding what the AI should handle, what should stay human, and how to make sure every lead lands in the right place instead of creating a bigger mess.",
  heroSubtext:
    "Below: what good appointment-setter setup help should include, when DIY is fine, what setup usually costs, and the failure points that matter before you pay for another tool or contractor.",
  sections: [
    {
      type: "cards",
      title: "What good AI appointment setter setup should actually include",
      subtitle:
        "A serious setup project is not just writing a prompt and connecting a calendar. The high-value work is in the operational details:",
      items: [
        {
          icon: Phone,
          title: "Inbound call and message flow design",
          body: "The system needs clear rules for what happens when a lead calls, texts, fills a form, or replies after hours. That means deciding what the AI says first, what information it collects, and when it should stop trying to be clever and route to a human.",
        },
        {
          icon: Bot,
          title: "Qualification logic and escalation paths",
          body: "A useful appointment setter knows which leads are a fit, which ones should be booked, which ones need a callback, and which ones should be disqualified. Setup help matters because these edge cases are what determine whether the system feels helpful or frustrating.",
        },
        {
          icon: CalendarCheck,
          title: "Calendar, CRM, and follow-up integration",
          body: "Booking is only one step. The setup should also create or update the contact, log the interaction, trigger confirmations and reminders, and hand off properly when a live person needs to step in. If those systems are disconnected, the AI becomes another inbox your team has to babysit.",
        },
        {
          icon: Workflow,
          title: "Ownership, testing, and human handoff",
          body: "Before launch, the system should be tested against real objections, reschedule requests, no-answer situations, and bad-fit leads. You should also keep ownership of the phone numbers, calendars, CRM access, and workflow documentation instead of being trapped in somebody else's setup.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When appointment-setter setup help is a good fit — and when it is not",
      subtitle:
        "This kind of implementation help is most valuable when there is already a real booking or first-response problem to solve:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your team loses leads because response is too slow, especially after hours or during busy periods",
            "You already know roughly what should count as booked, qualified, escalated, or disqualified",
            "One or two extra booked calls, jobs, or consultations per week would easily justify the project",
            "You need the AI to work inside your actual CRM and calendar instead of as a disconnected demo",
            "You want someone to scope the workflow honestly before building it",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You have very little inbound volume and manual follow-up is already under control",
            "Every incoming lead requires a highly nuanced consultative conversation before any next step can be offered",
            "Your team has not agreed on service areas, qualification rules, booking windows, or escalation logic",
            "You want AI to replace dispatch, sales, and customer support all at once",
            "You are mainly looking for a cheap software subscription, not implementation help tied to a real workflow",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "DIY appointment-setter setup vs. expert help",
      subtitle:
        "The tradeoff is usually lower cash cost versus faster rollout and fewer expensive mistakes:",
      headers: ["DIY setup", "Expert setup help"],
      rows: [
        {
          label: "Time to a reliable launch",
          values: ["Often 1-4 weeks of owner or staff time", "Usually 5-15 business days for a focused workflow"],
        },
        {
          label: "Best for",
          values: ["Simple booking flows, owner-led experimentation, low lead volume", "Revenue-critical first response, qualification, booking, and CRM handoff"],
        },
        {
          label: "Typical cost",
          values: ["Lower cash cost, higher time cost", "$1.5K-$5K depending on integrations, logic, and testing scope"],
        },
        {
          label: "Biggest risk",
          values: ["The system sounds good in demos but breaks on real calls or routes leads badly", "Paying for complexity you do not actually need"],
        },
        {
          label: "What success should look like",
          values: ["A working prototype you understand because you built it", "A production-ready workflow with tested handoff, CRM logging, and clear ownership"],
        },
      ],
    },
    {
      type: "prose",
      title: "What usually breaks when appointment-setter setup is rushed",
      subtitle:
        "These are the failures that matter because they affect lead quality, caller trust, and whether your team keeps using the system:",
      blocks: [
        {
          heading: "The conversation sounds decent but the logic is wrong",
          body: "A lot of setups focus on the voice or prompt and ignore the decision tree underneath. The AI might sound polished while still offering the wrong next step, missing a disqualification signal, or booking something that should have been escalated. That creates cleanup work for your team and kills trust fast.",
        },
        {
          heading: "Calendar and service-area rules are too loose",
          body: "If the system does not know which appointment types are valid, which areas you serve, how buffers work, or when a callback is safer than a live booking, it will create bad appointments. Good setup help is mostly about defining these boring operational rules before the AI touches a live lead.",
        },
        {
          heading: "The human handoff is unclear",
          body: "An appointment setter should not pretend to solve everything. It needs a clean way to route edge cases, special requests, complaints, reschedules, and high-value leads to a human. If that handoff is vague, your team ends up fixing the system manually in Slack, email, and callbacks.",
        },
        {
          heading: "Nothing important gets logged cleanly",
          body: "A booking that never hits the CRM properly is not a real win. Setup should include transcripts or summaries, disposition tags, appointment status, next-step rules, and suppression logic so the same lead does not get hit by conflicting automations after the conversation ends.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What to check before paying for setup help",
      subtitle:
        "You do not need a giant agency. You do need a practical implementation scope tied to revenue:",
      items: [
        {
          icon: AlertTriangle,
          title: "Start with one booking workflow, not ten vague use cases",
          body: "The safest rollout is narrow: one inbound lead type, one booking path, one fallback path, and one CRM destination. If the proposal tries to automate every caller journey at once, that is usually a warning sign.",
        },
        {
          icon: ShieldCheck,
          title: "Make sure the AI has clear boundaries",
          body: "A good setup defines what the system should never do on its own: promise pricing, handle complaints, answer technical edge cases, or override dispatch logic. That boundary work is what keeps caller experience and team trust intact.",
        },
        {
          icon: DollarSign,
          title: "Tie the project to a real payoff",
          body: "If one extra booked consultation, job, or estimate per week would cover the monthly software plus the implementation cost, the business case is usually reasonable. If the ROI is fuzzy, reduce the scope before you build anything.",
        },
        {
          icon: Clock,
          title: "Ask what happens after launch",
          body: "You should know who owns prompt updates, calendar changes, CRM mapping, error handling, and phone number admin after the system goes live. Setup help is valuable. Ongoing confusion is not.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is supported by live proof around call handling, qualification, and CRM follow-up — not by made-up claims about a perfect universal appointment-setter template:",
      studies: [
        {
          industry: "Restaurant / inbound calls",
          headline: "After-hours calls answered and routed instead of lost",
          body: "The Paris Cafe voice-agent case study proves the front-end reality: inbound calls can be answered immediately, after hours, with a clear next step instead of falling into voicemail and waiting for staff the next day.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Lead qualification",
          headline: "Voice-agent qualification logic already mapped on a live guide",
          body: "The AI voice-agent lead-qualification page shows the exact middle layer this setup depends on: deciding what to ask, what to route, when to book, and when a manual callback is still the better move.",
          link: "/ai-voice-agent-lead-qualification",
        },
        {
          industry: "CRM follow-up",
          headline: "Captured leads still need clean downstream automation",
          body: "The WheelsFeels CRM case study is adjacent proof for the back half of the workflow: once a lead is captured, the real value comes from clean CRM logging, alerts, follow-up, and handoff instead of letting the conversation die in a disconnected inbox.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI appointment setter guide", href: "/ai-appointment-setter" },
        { label: "AI appointment setter for home service businesses", href: "/ai-appointment-setter-for-home-service-businesses" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does AI appointment setter setup help usually include?",
      answer:
        "Usually workflow scoping, prompt and call-flow design, qualification logic, calendar integration, CRM mapping, confirmations and reminder triggers, escalation paths, testing, and launch cleanup. The best setup help also defines what the AI should not do on its own.",
    },
    {
      question: "How much does AI appointment setter setup cost?",
      answer:
        "A focused setup for one clear booking workflow often lands around $1.5K-$3K. More complex builds with multi-step qualification, CRM integration, reminders, fallback logic, and testing are more often $3K-$5K. If the quote is much lower, expect a thin template. If it is much higher, make sure the ROI is real.",
    },
    {
      question: "How long does setup usually take?",
      answer:
        "A narrow implementation can often be live in 1-2 weeks. More complex setups with custom qualification logic, calendar rules, CRM handoff, and broader testing usually take 2-3 weeks. The biggest variable is usually how clearly the business has defined its booking and escalation rules.",
    },
    {
      question: "Can an appointment setter integrate with my current CRM and calendar?",
      answer:
        "Usually yes. Most setups can connect to tools like GoHighLevel, Calendly, Google Calendar, and custom CRM workflows through APIs or automation layers like n8n. The important part is not just the connection. It is making sure the right data lands in the right place with the right next-step automation behind it.",
    },
    {
      question: "When should I skip building an AI appointment setter entirely?",
      answer:
        "Skip it when response speed is not actually the bottleneck, when every lead needs a long human sales conversation before any next step, or when your internal booking rules are still too messy to automate. In those cases, fixing process clarity usually creates more value than forcing an AI layer too early.",
    },
  ],
  faqSubtitle:
    "Practical questions from small businesses that are past the curiosity stage and trying to decide whether implementation help is worth paying for",
  ctaHeading: "Need help setting up an AI appointment setter properly?",
  ctaText:
    "Book a 30-minute call. We will look at your lead flow, booking rules, calendar constraints, CRM handoff, and where the setup could create real ROI instead of just another tool your team has to manage.",
  ctaSubtext:
    "No generic AI pitch. Just a practical fit check on whether setup help, a smaller workflow, or no build at all makes the most sense.",
  relatedLinks: [
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "AI appointment setter for home service businesses", href: "/ai-appointment-setter-for-home-service-businesses" },
    { label: "GoHighLevel automation setup", href: "/gohighlevel-automation-setup" },
    { label: "n8n automation consultant", href: "/n8n-automation-consultant" },
  ],
};

export default data;
