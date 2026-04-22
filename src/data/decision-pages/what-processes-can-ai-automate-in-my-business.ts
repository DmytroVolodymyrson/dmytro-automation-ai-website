import {
  Workflow,
  Phone,
  MessageSquare,
  CalendarCheck,
  FileCheck,
  BarChart3,
  Search,
  Target,
  Users,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Wrench,
  Clock,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-processes-can-ai-automate-in-my-business",
  metaTitle:
    "What Processes Can AI Automate in My Business? — Start With the Right Workflow | Dmytro AI",
  metaDescription:
    "A practical guide to what processes AI can automate in a small business — and which workflow to start with first. Covers lead response, follow-up, scheduling, onboarding, reactivation, and where automation should stop.",
  badgeText: "Process Selection Guide",
  badgeIcon: Workflow,
  h1: "What Processes Can AI Automate in My Business?",
  heroIntro:
    "AI can automate more business processes than most owners should actually touch in the first project. The useful question is not 'what is possible?' but 'which workflow is repetitive enough, painful enough, and close enough to revenue that automation will pay for itself quickly?' For most small businesses, the best first targets are not abstract AI projects. They are operational leaks: slow lead response, inconsistent follow-up, missed calls, booking friction, onboarding delays, and old contacts nobody ever works. This page helps you separate high-ROI candidates from workflows that are still better handled manually.",
  heroSubtext:
    "Below: the processes AI can automate well, how to choose the right first workflow, where adjacent proof already exists on this site, and when a process should stay human-led for now.",
  sections: [
    {
      type: "table",
      title: "The business processes AI can automate best",
      subtitle:
        "These are the repeatable workflows where automation usually creates the fastest payoff for a small business:",
      headers: ["What AI helps with", "Best fit when"],
      rows: [
        {
          label: "Lead response",
          values: [
            "Instant first reply, routing, qualification, and CRM logging after a form, call, or message",
            "You are losing inquiries because response time is measured in hours instead of minutes",
          ],
        },
        {
          label: "Follow-up sequences",
          values: [
            "Timed SMS and email touches, reminders, and stop logic when a lead replies or books",
            "Good leads keep going cold because nobody follows up consistently after the first touch",
          ],
        },
        {
          label: "Scheduling and reminders",
          values: [
            "Booking links, confirmations, reminder flows, reschedule handling, and calendar updates",
            "Phone tag, no-shows, and manual reminder work are slowing the team down",
          ],
        },
        {
          label: "Client onboarding",
          values: [
            "Intake forms, document collection, welcome steps, internal task creation, and status updates",
            "The sale is closed but delivery still starts with scattered emails, PDFs, and manual checklists",
          ],
        },
        {
          label: "Reactivation and retention",
          values: [
            "Dormant lead campaigns, repeat-purchase prompts, renewal reminders, and win-back messaging",
            "You already have a database full of past customers or quoted leads that nobody is working",
          ],
        },
        {
          label: "Support and routine communication",
          values: [
            "Triage, tagging, routing, FAQ handling, and after-hours message collection before human escalation",
            "The same predictable questions hit the team all day and delay higher-value conversations",
          ],
        },
      ],
    },
    {
      type: "cards",
      title: "How to pick the right first process",
      subtitle:
        "The best first automation sits at the intersection of pain, volume, and clear economics:",
      items: [
        {
          icon: Target,
          title: "Start where revenue leaks first",
          body: "If inquiries go cold, fix speed-to-lead and follow-up before touching back-office admin. A process tied directly to booked calls, appointments, or recovered leads usually pays back faster than an internal convenience workflow.",
        },
        {
          icon: Search,
          title: "Choose a workflow with repeatable rules",
          body: "AI works best when the first step follows a pattern: if a form is submitted, send this; if a quote is opened but not accepted, follow up then escalate; if a document is missing, send the next reminder. If every case is unique, the workflow is not ready yet.",
        },
        {
          icon: BarChart3,
          title: "Pick something you can measure in 30 days",
          body: "Response time, booking rate, no-show rate, time to onboard, reactivated customers, and admin hours saved are all measurable. If you cannot tell whether the workflow improved, it is a weak first project.",
        },
        {
          icon: Users,
          title: "Keep the human handoff obvious",
          body: "A good first automation makes the team faster. It does not try to replace judgment-heavy work. The workflow should clearly show when AI responds, when a person takes over, and who owns the next step.",
        },
        {
          icon: Clock,
          title: "Bias toward the smallest workflow with real payoff",
          body: "A missed-call recovery sequence or contact-form response workflow often beats a giant multi-department project. Smaller systems launch faster, prove value sooner, and give you cleaner data for the next build.",
        },
        {
          icon: Wrench,
          title: "Use your current stack when possible",
          body: "The first win should usually sit on top of your current CRM, calendar, email, or phone tools. Re-platforming everything at once is usually a slower, riskier project than automating one painful process inside the tools you already use.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which process should you automate first?",
      subtitle:
        "Use the bottleneck — not the hype — to choose your starting point:",
      options: [
        {
          icon: Phone,
          heading: "Start with lead response",
          highlighted: true,
          items: [
            "You miss calls or web inquiries after hours or while the team is busy",
            "Most new leads wait too long for the first useful response",
            "The biggest financial pain is not converting the leads you already paid for",
            "Best first pages nearby: /instant-lead-response-automation, /contact-form-lead-follow-up-automation, /missed-call-follow-up-automation",
          ],
        },
        {
          icon: CalendarCheck,
          heading: "Start with scheduling or reminders",
          items: [
            "The team wastes hours on confirmations, reschedules, and booking phone tag",
            "No-shows and weak reminder discipline are hurting utilization",
            "Leads are interested, but the calendar handoff is messy",
            "Best first pages nearby: /booking-confirmation-and-reminder-automation, /ai-appointment-setter, /no-show-reduction-automation",
          ],
        },
        {
          icon: FileCheck,
          heading: "Start with onboarding or retention",
          items: [
            "Sales are already happening, but delivery or retention workflows are manual and inconsistent",
            "Documents, welcome steps, or renewal-style follow-up create admin drag",
            "You already own a customer database with obvious dormant revenue sitting inside it",
            "Best first pages nearby: /client-onboarding-automation, /client-reactivation-automation, /ai-email-sequence-automation",
          ],
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof for the process-selection question",
      subtitle:
        "This page is not claiming every workflow has a direct published case study. It is grounded in real proof for the process types that repeatedly show up as strong first projects:",
      studies: [
        {
          industry: "Restaurant / lead response and operations",
          headline: "Paris Café proves what a fast first-response workflow changes",
          body: "The Paris Café case study shows web lead response time dropping from hours to under 60 seconds while after-hours calls moved to full coverage. That makes lead response a strong first-process candidate because the payoff is immediate and visible.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce / CRM and follow-up",
          headline: "WheelsFeels shows the value of cleaning up follow-up and routing before adding more volume",
          body: "The published e-commerce CRM case study is direct proof that centralized contact data, structured follow-up, and cleaner ownership can unlock real operational value. For many businesses, follow-up and CRM hygiene are the right early-stage automation targets for that reason.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "HVAC / reactivation and nurture",
          headline: "HVAC reactivation shows that old contacts can be a better first project than chasing new tooling",
          body: "The HVAC reactivation page is adjacent proof that existing dormant contacts often hide faster ROI than a flashy net-new AI build. If your database is neglected, retention or reactivation may be the right first process instead of another acquisition workflow.",
          link: "/hvac-database-reactivation",
        },
      ],
      links: [
        { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
        { label: "Client onboarding automation", href: "/client-onboarding-automation" },
        { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
        { label: "Paris Café case study", href: "/case-studies/paris-cafe-voice-agent" },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is useful — and when another page is the better fit",
      subtitle:
        "This page is for process selection. The pages below are better when you already know the workflow stage you want:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit for this page",
          variant: "green",
          items: [
            "You want to know what AI can automate before choosing a vendor or tool",
            "You have several possible workflows in mind and need to choose the highest-ROI first project",
            "You are trying to avoid overbuilding and want a smaller, measurable starting point",
            "You are not sure whether the biggest issue is lead handling, scheduling, onboarding, or retention",
          ],
        },
        {
          icon: XCircle,
          heading: "Better fit elsewhere",
          variant: "neutral",
          items: [
            "If you need a readiness score, go to /ai-automation-audit-checklist",
            "If you already chose the workflow and need build sequencing, go to /ai-automation-implementation-roadmap",
            "If you want examples by category, go to /lead-follow-up-automation-examples or /crm-automation-examples-small-business",
            "If you only need budgeting math, go to /ai-automation-roi-guide or /ai-automation-cost-small-business",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Common mistakes when choosing a process to automate",
      subtitle:
        "These mistakes are why owners end up with impressive demos and weak business results:",
      items: [
        {
          icon: AlertTriangle,
          title: "Automating the loudest process instead of the most expensive leak",
          body: "Teams often choose the workflow that feels annoying instead of the one tied most directly to revenue loss. A noisy internal task may be worth fixing later, but slow lead response or quote follow-up usually has much clearer economics.",
        },
        {
          icon: Search,
          title: "Skipping baseline measurement",
          body: "If you do not know current response time, no-show rate, follow-up rate, or hours spent, you will struggle to prove the project worked. Measure first. Even rough baseline numbers are better than none.",
        },
        {
          icon: Users,
          title: "Trying to remove humans from judgment-heavy work",
          body: "AI should handle the repeatable front half. Nuanced exceptions, pricing judgment, edge-case negotiation, and sensitive conversations still need human ownership. The best early workflows make handoff cleaner instead of pretending handoff is unnecessary.",
        },
        {
          icon: Workflow,
          title: "Starting with a giant multi-step system",
          body: "When a first automation touches every department, it usually launches slowly and becomes hard to debug. A smaller workflow that protects one bottleneck creates trust, data, and momentum for the next phase.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What business processes can AI automate well in a small business?",
      answer:
        "The strongest candidates are repetitive workflows with clear triggers and clear outcomes: lead response, follow-up, scheduling, reminders, onboarding steps, database reactivation, and routine support triage. These processes follow rules, happen often, and have measurable business impact.",
    },
    {
      question: "What process should most businesses automate first?",
      answer:
        "Usually lead response or follow-up. If a new inquiry waits too long, the business loses revenue before the sales process even starts. That is why speed-to-lead, missed-call recovery, and basic follow-up sequences are often the first high-ROI workflows to automate.",
    },
    {
      question: "How do I know if a process is ready for automation?",
      answer:
        "The process should happen often, follow repeatable rules, have obvious handoff points, and be measurable. If every case is different, ownership is unclear, or the team has never documented the workflow, clean that up first before trying to automate it.",
    },
    {
      question: "Is this the same as an automation audit?",
      answer:
        "Not exactly. This page helps you choose which process is worth automating first. The audit checklist is more about readiness assessment and scoring. If you want a structured self-audit, use /ai-automation-audit-checklist next.",
    },
    {
      question: "Should I automate internal admin work before customer-facing workflows?",
      answer:
        "Usually no. Customer-facing leaks such as slow lead response, weak follow-up, and missed reminders tend to have faster payback because they affect conversion directly. Internal admin automation becomes more valuable once the obvious revenue leaks are already controlled.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners trying to pick the right first AI workflow instead of chasing hype",
  ctaHeading: "Need help choosing the first process to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where leads, time, or handoffs are leaking in your business and map the smallest workflow that would create a clear win first.",
  ctaSubtext:
    "The goal is not to automate everything. It is to choose the one process that pays for the second one.",
  relatedLinks: [
    { label: "AI automation audit checklist", href: "/ai-automation-audit-checklist" },
    { label: "AI automation implementation roadmap", href: "/ai-automation-implementation-roadmap" },
    { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
