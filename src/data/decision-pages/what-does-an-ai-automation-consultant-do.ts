import {
  Briefcase,
  Search,
  Workflow,
  PlugZap,
  ShieldCheck,
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  Boxes,
  Wrench,
  MessagesSquare,
  FileText,
  Clock,
  TriangleAlert,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-does-an-ai-automation-consultant-do",
  metaTitle:
    "What Does an AI Automation Consultant Do? Practical Guide for Small Business | Dmytro AI",
  metaDescription:
    "What does an AI automation consultant actually do for a small business? Practical breakdown of diagnosis, workflow design, integrations, AI setup, testing, documentation, and where consultant help is worth paying for.",
  badgeText: "Role Guide",
  badgeIcon: Briefcase,
  h1: "What Does an AI Automation Consultant Actually Do?",
  heroIntro:
    "An AI automation consultant diagnoses the business process that is leaking time or revenue, decides what should be automated and what should stay human, builds the workflow across your real tools, and hands off a production system your team can trust. For a small business, that usually means lead response, CRM routing, missed-call recovery, booking flow, onboarding, follow-up, or customer-facing AI — built once, documented, and stabilized so it does not fail silently.",
  heroSubtext:
    "Below: what the job really includes, what the first engagement usually covers, what deliverables and ownership you should expect, where consultants add value beyond a generic freelancer or VA, and when paying for consultant help is smarter than stitching together tools yourself.",
  sections: [
    {
      type: "prose",
      title: "Short answer: what you get and what it costs",
      subtitle:
        "If you only read one section, this is the extractable summary:",
      blocks: [
        {
          heading: "What an AI automation consultant delivers",
          body: "A diagnosed bottleneck, a scoped workflow design, a production-ready implementation connecting your real tools (CRM, calendar, phone, forms), edge-case testing, documentation, and a short stabilization period after launch. The output is a working system you own — not a demo, not a strategy deck.",
        },
        {
          heading: "Typical scope and timeline",
          body: "Most small-business engagements focus on one high-ROI workflow first: missed-call text-back, lead follow-up, AI appointment setting, or after-hours voice handling. A lightweight workflow ships in days; a core business workflow with multiple integrations usually takes 1–3 weeks. Cost depends on how many systems are involved, how much human handoff logic is needed, and how much testing the workflow needs before it is safe to run live.",
        },
        {
          heading: "What the first engagement usually covers",
          body: "In practice, the first phase is usually diagnosis, workflow scoping, a simple system map, implementation of one bounded automation, a basic test pass, documentation, and a short stabilization window after launch. If you are only being sold prompts or software access without the operating workflow around it, that is usually not the full consultant job.",
        },
        {
          heading: "Proof from real builds",
          body: "The Paris Cafe AI voice agent project shows what consultant-level call-flow design looks like in production — after-hours handling, booking path, and fallback discipline with live guests. The WheelsFeels CRM automation project shows the operational side: reply routing, follow-up coordination, and CRM ownership that makes the workflow commercially usable once real customers start responding.",
        },
      ],
    },
    {
      type: "cards",
      title: "What the job actually includes",
      subtitle:
        "A strong consultant does more than tool setup. The work usually spans diagnosis, design, implementation, and stabilization:",
      items: [
        {
          icon: Search,
          title: "Find the real bottleneck",
          body: "The first step is not choosing software. It is figuring out where leads go cold, where staff time gets wasted, where handoff breaks, or where a customer experience falls apart after hours. A consultant should make the operational problem clearer before they recommend any stack.",
          links: [
            { label: "Consultant scope guide", href: "/ai-automation-consultant-small-business" },
            { label: "Best first workflows", href: "/best-ai-automation-for-service-businesses" },
          ],
        },
        {
          icon: Workflow,
          title: "Design the workflow and the human handoff",
          body: "Good consultants define the trigger, the sequence, the decision rules, the fallback paths, and the point where a human should step in. That is what turns 'we want AI' into a workflow that can run without damaging trust or creating more manual cleanup.",
          links: [
            { label: "Hire a consultant vs DIY", href: "/hire-ai-automation-consultant-vs-diy" },
            { label: "Consultant vs freelancer", href: "/ai-automation-consultant-vs-freelancer" },
          ],
        },
        {
          icon: PlugZap,
          title: "Connect the real systems",
          body: "This is where the boring but important work lives: forms, CRMs, calendars, phone systems, email platforms, Slack alerts, webhooks, and data mapping. If the systems are not connected cleanly, the automation may look impressive but still fail in day-to-day operations.",
          links: [
            { label: "Consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
            { label: "AI automation cost", href: "/ai-automation-cost-small-business" },
          ],
        },
        {
          icon: ShieldCheck,
          title: "Test, document, and make it reliable",
          body: "A consultant should account for duplicate submissions, bad contact data, mid-sequence replies, missed transfers, and after-hours edge cases. The deliverable is not a demo. It is a working system with ownership, documentation, and enough safeguards that the business can depend on it.",
          links: [
            { label: "Paris Cafe proof", href: "/case-studies/paris-cafe-voice-agent" },
            { label: "WheelsFeels CRM proof", href: "/case-studies/ecommerce-crm-automation" },
          ],
        },
      ],
    },
    {
      type: "table",
      title: "What you should expect as the deliverable",
      subtitle:
        "If you hire someone for AI automation, these are the outputs that usually matter more than the tool names:",
      headers: ["What you should get", "Why it matters"],
      rows: [
        {
          label: "Clear workflow scope",
          values: [
            "One bounded workflow with success criteria, edge cases, and an explicit first phase",
            "Prevents the project from turning into a vague 'automate everything' mess that never launches cleanly",
          ],
        },
        {
          label: "Integration map",
          values: [
            "Which tools connect, what data moves, what triggers actions, and what alerts fire when something breaks",
            "Makes the system understandable to the owner and easier to maintain later",
          ],
        },
        {
          label: "Production-ready implementation",
          values: [
            "The working automation itself, including suppression rules, routing logic, testing, and fallback behavior",
            "This is the difference between a clever experiment and a commercially usable workflow",
          ],
        },
        {
          label: "Ownership and documentation",
          values: [
            "Access to the accounts, credentials, workflow logic, notes, and a basic explanation of how the system runs",
            "Without this, you are renting dependency instead of buying operational leverage",
          ],
        },
        {
          label: "Post-launch stabilization",
          values: [
            "A short period to catch bad assumptions, reply patterns, calendar issues, or routing mistakes after launch",
            "Most useful workflows need a real-world adjustment pass before they are fully stable",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When consultant help is a good fit — and when it is not",
      subtitle:
        "The right answer is not always 'hire now.' Consultant work pays off when the workflow stakes are real:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "The workflow touches live leads, scheduling, CRM handoff, or customer-facing communication",
            "You already know the business problem and want to get a reliable system live faster",
            "Several tools need to work together and failure would cost revenue or team trust",
            "You need someone to define boundaries, edge cases, and human escalation instead of just wiring software",
            "Owner time is more expensive than paying for a clean first implementation",
          ],
        },
        {
          icon: XCircle,
          heading: "Not a good fit yet",
          variant: "neutral",
          items: [
            "You are still unclear on the process itself and want AI to compensate for a messy operation",
            "The task is so simple that a lightweight no-code operator or even a tutorial is enough",
            "You mainly want generic AI training, brainstorming, or marketing advice rather than workflow implementation",
            "The workflow is low-risk enough that a rough internal prototype is the smarter first move",
            "You are shopping for a magic transformation pitch instead of one narrow high-ROI system",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where consultant value shows up in practice",
      subtitle:
        "The consultant is most useful in the parts that are expensive to learn through failure:",
      blocks: [
        {
          heading: "Turning vague intent into a real operating workflow",
          body: "Most owners start with a broad goal like 'respond faster to leads' or 'automate booking.' A consultant's job is to reduce that to a specific operational flow: what triggers the response, what message goes first, who gets notified, when the sequence stops, and what happens if a lead replies with something unexpected.",
        },
        {
          heading: "Choosing where AI belongs — and where it does not",
          body: "Not every step should be AI-driven. Sometimes deterministic rules are better. Sometimes a human should take over earlier. A good consultant is useful because they can separate the parts that benefit from AI from the parts that should stay boring, explicit, and stable.",
        },
        {
          heading: "Protecting the business from silent workflow damage",
          body: "The costliest failures are often invisible at first: duplicate contacts, missed alerts, wrong tags, sloppy CRM ownership, or customer messages that fall through the cracks. Consultant value is often risk reduction as much as speed. That is especially true when the workflow touches revenue or a live caller experience.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Questions that reveal whether a consultant is the real thing",
      subtitle:
        "These questions usually expose whether someone understands operations or just knows how to sell AI buzzwords:",
      items: [
        {
          icon: ClipboardCheck,
          title: "What workflow would you scope first — and why?",
          body: "A strong answer narrows the project to one workflow with clear business payoff. A weak answer balloons into an all-purpose AI transformation pitch.",
        },
        {
          icon: MessagesSquare,
          title: "What should stay human in this system?",
          body: "This is one of the fastest quality filters. Strong consultants can name where approval, escalation, objection handling, or exception review should remain with a person.",
        },
        {
          icon: Wrench,
          title: "What usually breaks after launch?",
          body: "Anyone who has shipped real systems can name the failure modes quickly: bad routing, edge-case replies, stale CRM data, calendar conflicts, or alert fatigue. If they cannot, they probably have not carried responsibility for production workflows.",
        },
        {
          icon: FileText,
          title: "What do I own when the project is done?",
          body: "The right answer is your accounts, your credentials, your workflow logic, and enough documentation that you are not trapped in someone else's stack forever.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "These published projects show what consultant work looks like when the workflow has to function in the real world:",
      studies: [
        {
          industry: "Restaurant / voice handling",
          headline: "Customer-facing AI needs real call flow and fallback discipline",
          body: "The Paris Cafe build is direct proof that consultant work is not only about software selection. It is about shaping the call experience, after-hours behavior, booking path, and downstream automation so the system works with live guests instead of just passing a demo.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce / CRM operations",
          headline: "Operations work often lives in the handoff, not the headline feature",
          body: "The WheelsFeels CRM project is adjacent proof for what a consultant actually does behind the scenes: route replies, coordinate follow-up, keep ownership clean, and make the automation commercially usable once leads or customers start responding.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "n8n / implementation help",
          headline: "Some consultant work gets narrower once the stack is already chosen",
          body: "If you already know you want n8n or another specific platform, a narrower implementation-help page may be the better fit. This page sits earlier in the decision: understanding the role before you decide who to hire and for what scope.",
          link: "/n8n-automation-consultant",
        },
      ],
      links: [
        { label: "AI automation consultant for small business", href: "/ai-automation-consultant-small-business" },
        { label: "How to hire an AI automation consultant", href: "/how-to-hire-ai-automation-consultant" },
        { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
        { label: "Hire a consultant vs. do it yourself", href: "/hire-ai-automation-consultant-vs-diy" },
        { label: "Consultant vs. in-house hire", href: "/hire-ai-automation-consultant-vs-in-house" },
        { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
    {
      type: "considerations",
      title: "How long this work usually takes",
      subtitle:
        "The timeline depends less on AI hype and more on workflow clarity, integrations, and testing depth:",
      items: [
        {
          icon: Clock,
          title: "Lightweight workflow: a few days",
          body: "Something narrow like a missed-call recovery flow or simple form-to-CRM routing can move fast when the systems are already clean and the business rules are obvious.",
        },
        {
          icon: Boxes,
          title: "Core business workflow: 1-3 weeks",
          body: "This is typical for small-business consultant work: lead routing, follow-up logic, booking automation, onboarding, or customer communication with several tools connected cleanly.",
        },
        {
          icon: TriangleAlert,
          title: "More time if the process itself is unclear",
          body: "Projects slow down when the workflow is still fuzzy, ownership is messy, or the business wants AI to solve several unrelated issues at once. The best consultants usually narrow scope instead of pretending all of that can launch cleanly at once.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does an AI automation consultant actually do for a small business?",
      answer:
        "Usually they diagnose the workflow problem, map the process, choose the right level of automation, connect the tools, build the logic, test edge cases, and hand off a system the business can use. The value is not only technical setup. It is making sure the workflow works in production and fits how the business actually operates.",
    },
    {
      question: "Is an AI automation consultant different from a freelancer or no-code operator?",
      answer:
        "Often yes. A freelancer may execute a defined task well, and a no-code operator may handle straightforward setup. A consultant is most useful when the workflow still needs diagnosis, scoping, risk management, and a clear decision on what should be automated versus what should stay human.",
    },
    {
      question: "Do AI automation consultants write code, or do they only use tools like Zapier and n8n?",
      answer:
        "It depends on the workflow. Many use no-code and low-code tools heavily because they are efficient, but the real job is choosing the right implementation path, including custom API work when needed, not forcing everything into one platform. Owners should care more about workflow outcomes and reliability than whether every step is hand-coded.",
    },
    {
      question: "What should I prepare before talking to an AI automation consultant?",
      answer:
        "Bring the current process, the tools involved, where leads or tasks currently fall through, and what success would look like. You do not need perfect documentation. You do need enough clarity to point at the bottleneck the automation should solve first.",
    },
    {
      question: "What should the first consultant engagement usually include?",
      answer:
        "Usually a workflow diagnosis, scope for one bounded first project, a simple systems map, implementation, testing, documentation, and a short stabilization period after launch. If you are only getting tool recommendations without ownership, edge-case handling, or a defined first workflow, the engagement is probably too vague.",
    },
    {
      question: "Do I need an ongoing retainer after the consultant builds the workflow?",
      answer:
        "Not always. Some businesses only need a focused first build plus a short stabilization period. Ongoing support makes more sense when the workflow is high-volume, customer-facing, self-hosted, or likely to change often. The main thing is to leave the project with clear ownership so support stays optional rather than forced.",
    },
  ],
  faqSubtitle:
    "Straight answers for owners trying to understand the role before they hire anyone",
  ctaHeading: "Need help deciding whether consultant work is even the right move?",
  ctaText:
    "Book a 30-minute call. We will look at the workflow you want to improve, decide whether consultant help actually makes sense, and map the narrowest high-ROI system worth building first.",
  ctaSubtext:
    "Useful even if you are still in research mode. The goal is clearer scope, not a pressure pitch.",
  relatedLinks: [
    { label: "AI automation consultant for small business", href: "/ai-automation-consultant-small-business" },
    { label: "How to hire an AI automation consultant", href: "/how-to-hire-ai-automation-consultant" },
    { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
    { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
    { label: "AI automation time savings", href: "/ai-automation-time-savings-small-business" },
    { label: "Consultant vs freelancer", href: "/ai-automation-consultant-vs-freelancer" },
    { label: "AI automation maintenance and support", href: "/ai-automation-maintenance-and-support-small-business" },
    { label: "Hire an AI automation consultant or do it yourself?", href: "/hire-ai-automation-consultant-vs-diy" },
    { label: "Case studies", href: "/case-studies" },
  ],
};

export default data;
