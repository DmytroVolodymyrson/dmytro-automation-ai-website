import {
  LifeBuoy,
  ShieldCheck,
  Wrench,
  BellRing,
  Clock,
  CheckCircle2,
  XCircle,
  TriangleAlert,
  FileText,
  Workflow,
  Search,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-maintenance-and-support-small-business",
  metaTitle:
    "AI Automation Maintenance and Support for Small Business | Dmytro AI",
  metaDescription:
    "Do you need ongoing maintenance and support after an AI automation build? Practical guide to monitoring, fixes, ownership, support models, monthly retainers, and when ongoing help is worth paying for.",
  badgeText: "Support Guide",
  badgeIcon: LifeBuoy,
  h1: "AI Automation Maintenance and Support for Small Business",
  heroIntro:
    "Small-business owners do not usually need a big monthly support contract forever. They do need a clear answer to what happens after launch if a workflow breaks, a lead stops routing correctly, a calendar handoff goes wrong, or the business changes the process six weeks later. Good automation support is not mystery retainer padding. It is a defined layer of monitoring, small fixes, change control, and ownership that keeps a live workflow dependable once real customers and staff are using it every day.",
  heroSubtext:
    "Below: when support is worth paying for, when a short stabilization period is enough, what a monthly retainer should actually include, and how to avoid getting trapped in a vague maintenance arrangement you do not need.",
  sections: [
    {
      type: "prose",
      title: "Short answer: what maintenance and support really means",
      subtitle:
        "If you only need the direct answer, start here:",
      blocks: [
        {
          heading: "What support should cover",
          body: "At minimum: monitoring whether the workflow is still firing correctly, checking alerts, fixing breakages caused by changed fields or disconnected integrations, adjusting message timing or routing logic when real usage exposes edge cases, and keeping ownership clear when the business wants updates.",
        },
        {
          heading: "When support is usually worth it",
          body: "Ongoing support makes sense when the automation is revenue-critical, customer-facing, self-hosted, connected to several systems, or likely to change often. That includes lead follow-up, call handling, booking, CRM routing, and any workflow where silent failure would cost trust or missed revenue.",
        },
        {
          heading: "When you probably do not need a standing retainer",
          body: "If the workflow is narrow, stable, lightly used, and well documented, a short post-launch stabilization window plus as-needed help is often enough. Many small businesses only need a clean handoff, a 2-6 week support period, and the option to request changes later rather than permanent monthly support.",
        },
      ],
    },
    {
      type: "cards",
      title: "What good automation support actually includes",
      subtitle:
        "These are the practical tasks that matter after launch:",
      items: [
        {
          icon: BellRing,
          title: "Monitoring and alert review",
          body: "Someone checks whether triggers are firing, messages are sending, leads are landing in the CRM correctly, and handoff alerts still reach the right person. Support should prevent silent failure, not wait for a customer to discover it first.",
          links: [
            { label: "Implementation roadmap", href: "/ai-automation-implementation-roadmap" },
            { label: "AI automation audit checklist", href: "/ai-automation-audit-checklist" },
          ],
        },
        {
          icon: Wrench,
          title: "Small fixes after tools or processes change",
          body: "Most breakages happen because a form changes, a CRM field moves, a calendar setup changes, or staff start using the workflow differently than expected. Real support includes these bounded fixes, not just a generic promise to 'be available.'",
          links: [
            { label: "AI automation consultant guide", href: "/ai-automation-consultant-small-business" },
          ],
        },
        {
          icon: Workflow,
          title: "Change requests with clear scope",
          body: "Support is not the same as an unlimited rebuild. Good support distinguishes between a small update, a medium workflow adjustment, and a new project. That keeps pricing honest and prevents a maintenance agreement from turning into a hidden open-ended build.",
          links: [
            { label: "AI automation cost guide", href: "/ai-automation-cost-small-business" },
          ],
        },
      ],
    },
    {
      type: "table",
      title: "Common support models for small businesses",
      subtitle:
        "The right support structure depends on workflow risk, frequency of change, and how much internal ownership the team wants:",
      headers: ["What it usually looks like", "Best fit"],
      rows: [
        {
          label: "No ongoing support",
          values: [
            "Clean handoff, documentation, and owner training only",
            "A simple, stable workflow with low downside if it pauses for a day or two",
          ],
        },
        {
          label: "Short stabilization period",
          values: [
            "2-6 weeks of monitoring, bug fixes, and light tuning after launch",
            "The best default for many first projects: enough support to catch edge cases without paying forever",
          ],
        },
        {
          label: "Monthly maintenance retainer",
          values: [
            "Ongoing monitoring, bounded fixes, minor updates, and support response expectations",
            "Customer-facing or revenue-critical automations that need reliability more than experimentation",
          ],
        },
        {
          label: "As-needed support",
          values: [
            "No standing monthly fee; request fixes or updates when needed",
            "Businesses with stable workflows, internal ownership, and only occasional process changes",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When ongoing support is a good fit — and when it is not",
      subtitle:
        "Do not default to a retainer just because the workflow uses AI. Support should match actual operational risk:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit for ongoing support",
          variant: "green",
          items: [
            "The workflow touches inbound leads, live bookings, customer messaging, or after-hours phone handling",
            "Several systems are connected and a failure would hide until revenue or service quality drops",
            "Your team needs someone else to watch alerts, fix breakages, and manage bounded changes",
            "The process changes often enough that monthly tuning is predictable",
            "You want reliability and response expectations more than pure DIY ownership",
          ],
        },
        {
          icon: XCircle,
          heading: "Probably not worth a monthly retainer yet",
          variant: "neutral",
          items: [
            "The workflow is simple, internal, and rarely changes",
            "The business can tolerate a short pause if a trigger fails",
            "You already have a responsible internal owner and good documentation",
            "You mainly need one more round of cleanup after launch, not active monitoring every month",
            "You are using 'support' as a substitute for unclear scope or weak handoff",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What usually breaks after launch",
      subtitle:
        "The point of support is not theory. It is catching these predictable failure modes before they compound:",
      items: [
        {
          icon: TriangleAlert,
          title: "Field or integration drift",
          body: "A CRM field is renamed, a webhook destination changes, a calendar event type is replaced, or a third-party tool updates its schema. The workflow stops behaving the way it did during launch even though nobody intentionally changed the automation logic.",
        },
        {
          icon: Search,
          title: "Edge cases that only appear with real traffic",
          body: "Duplicate contacts, incomplete lead data, wrong timezone assumptions, mid-sequence replies, or internal handoff confusion often do not appear during testing. Support catches and resolves those once real customers start interacting with the system.",
        },
        {
          icon: FileText,
          title: "Ownership gets fuzzy",
          body: "Nobody knows who should respond to an alert, approve a change, or decide whether a workflow is still performing well. Support can help, but only if ownership is explicit. Otherwise the problem is operational, not technical.",
        },
        {
          icon: BarChart3,
          title: "The workflow still runs but underperforms",
          body: "This is a subtle but expensive category: responses send, but the timing is wrong, booking follow-through is weak, or message copy underperforms. Strong support includes practical tuning, not only bug fixing.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Direct proof and adjacent proof",
      subtitle:
        "There is no hype-only promise here. These live assets show why post-launch support and ownership matter in real workflows:",
      studies: [
        {
          industry: "Restaurant / live voice handling",
          headline: "Paris Cafe shows why customer-facing automation needs real monitoring and fallback discipline after launch",
          body: "The public voice-agent case study proves that after-hours handling, booking flow, and caller experience are not 'set it and forget it' systems. Once real guests interact with the workflow, monitoring and bounded updates matter because silent failure damages trust immediately.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce / CRM operations",
          headline: "The vehicle accessories case study shows the operations side of support: routing, ownership, and follow-up discipline after the build is live",
          body: "That project is adjacent proof for why support is often less about rewriting automation from scratch and more about keeping routing, reply handling, and stage ownership dependable once thousands of real contacts and messages move through the system.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Implementation planning",
          headline: "The implementation roadmap already establishes that launch is not the finish line",
          body: "That roadmap breaks the project into audit, build, test, launch, and optimization for a reason. This page sits one step later in the same decision chain: once something is live, what level of support keeps it trustworthy without overbuying monthly help?",
          link: "/ai-automation-implementation-roadmap",
        },
      ],
      links: [
        { label: "AI automation implementation roadmap", href: "/ai-automation-implementation-roadmap" },
        { label: "AI automation consultant for small business", href: "/ai-automation-consultant-small-business" },
        { label: "What does an AI automation consultant actually do?", href: "/what-does-an-ai-automation-consultant-do" },
        { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Do I need ongoing support after an AI automation build?",
      answer:
        "Not always. Many small businesses only need a short stabilization period after launch plus the option to request changes later. Ongoing support is most valuable when the workflow is customer-facing, revenue-critical, self-hosted, connected to multiple tools, or likely to change often.",
    },
    {
      question: "What should an automation maintenance retainer include?",
      answer:
        "Monitoring, alert review, bounded bug fixes, small updates caused by tool or process changes, and clear response expectations. It should also define what is not included so a support plan does not quietly become an unlimited rebuild contract.",
    },
    {
      question: "Who should own the workflow if I do not want a monthly retainer?",
      answer:
        "One person on your team should own operational visibility: checking alerts, noticing failures, and approving changes. They do not need to write code. They need documented access, a clear escalation path, and enough understanding to notice when the workflow is drifting.",
    },
    {
      question: "What usually causes automations to break after launch?",
      answer:
        "Most failures come from changed forms, moved CRM fields, new calendar setups, edge-case replies, or process drift inside the business itself. The automation logic may be fine, but the surrounding systems and team habits change. That is why support is often about alignment and monitoring, not just technical repair.",
    },
    {
      question: "Is monthly support better than as-needed help?",
      answer:
        "Only when the workflow risk justifies it. If the automation is central to lead flow, booking, customer communication, or after-hours coverage, monthly support can be worth it. If it is a simple stable workflow with low downside, a short post-launch support window or as-needed help is usually the smarter buy.",
    },
  ],
  faqSubtitle:
    "Straight answers about post-launch ownership, monitoring, and support cost",
  ctaHeading: "Want to know what support level your workflow actually needs?",
  ctaText:
    "Book a 30-minute call. We will look at the workflow you want to launch or stabilize, decide whether you need only a short post-launch support window or a real maintenance plan, and outline what the right ownership model should look like.",
  ctaSubtext:
    "Useful whether you are planning a first build or cleaning up a workflow that already exists.",
  relatedLinks: [
    { label: "AI automation implementation roadmap", href: "/ai-automation-implementation-roadmap" },
    { label: "What does an AI automation consultant do?", href: "/what-does-an-ai-automation-consultant-do" },
    { label: "AI automation consultant for small business", href: "/ai-automation-consultant-small-business" },
    { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
  ],
};

export default data;
