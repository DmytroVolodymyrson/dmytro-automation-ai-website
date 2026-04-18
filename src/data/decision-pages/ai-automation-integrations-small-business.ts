import {
  Plug,
  Phone,
  Mail,
  Calendar,
  Database,
  MessageSquare,
  CreditCard,
  Workflow,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Zap,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-integrations-small-business",
  metaTitle:
    "AI Automation Integrations for Small Business — What Connects to What | Dmytro AI",
  metaDescription:
    "Guide to AI automation integrations for small businesses. Which tools connect, what works together, common integration patterns, and how to build a connected automation stack.",
  badgeText: "Integrations Guide",
  badgeIcon: Plug,
  h1: "AI Automation Integrations for Small Business",
  heroIntro:
    "The power of automation is not in any single tool — it is in how your tools work together. A CRM that talks to your phone system, an email platform that syncs with your calendar, a lead form that triggers a text, a call, and a task simultaneously. This page maps the most common and most valuable integrations for small service businesses, with honest guidance on what connects easily and what requires custom work.",
  heroSubtext:
    "Below: the integration categories that matter most, common tool combinations, what connects natively vs. what needs middleware, and how to avoid integration headaches.",
  sections: [
    {
      type: "cards",
      title: "Core integration categories",
      subtitle:
        "These are the integration points where most small business automation value lives:",
      items: [
        {
          icon: Database,
          title: "CRM as the central hub",
          body: "Your CRM should be the single source of truth for customer data. Every other tool feeds into or reads from it. Lead forms create CRM contacts. Phone calls log to CRM. Appointments sync to CRM. Invoices link to CRM records. Without a central hub, data lives in silos and automation becomes fragile.",
        },
        {
          icon: Phone,
          title: "Phone system integration",
          body: "Connect your business phone to your CRM and automation engine. Inbound calls create contacts, missed calls trigger text-backs, call recordings attach to CRM records, and call outcomes update pipeline stages. Tools like VAPI, Twilio, and RingCentral all integrate with modern CRMs and automation platforms.",
        },
        {
          icon: Mail,
          title: "Email and SMS platforms",
          body: "Your email and text messaging tools need to send from your automation engine and log responses back to the CRM. GoHighLevel includes this natively. For standalone CRMs, integrate with SendGrid, Mailgun, or Twilio for SMS. Every outgoing message and every response should be logged automatically.",
        },
        {
          icon: Calendar,
          title: "Scheduling and calendar sync",
          body: "Booking tools (Calendly, Acuity, Cal.com) should sync with your CRM and notification system. When a client books, the CRM updates, confirmations fire, reminders get scheduled, and your team gets notified. Two-way calendar sync prevents double-booking and keeps availability current.",
        },
      ],
    },
    {
      type: "table",
      title: "Common integration patterns",
      subtitle:
        "How typical small business tools connect — and what layer makes it work:",
      headers: ["Native", "Via Zapier", "Via n8n / Custom"],
      rows: [
        {
          label: "CRM → Email platform",
          values: ["Most CRMs", "Yes", "Yes, with more control"],
        },
        {
          label: "Form → CRM",
          values: ["Limited (same vendor)", "Yes", "Yes"],
        },
        {
          label: "Phone → CRM",
          values: ["GoHighLevel, HubSpot", "Some providers", "Any system with API"],
        },
        {
          label: "Calendar → CRM",
          values: ["Limited", "Yes", "Yes, with two-way sync"],
        },
        {
          label: "CRM → Slack/Teams",
          values: ["Some CRMs", "Yes", "Yes, with custom formatting"],
        },
        {
          label: "Payment → CRM",
          values: ["Rare", "Stripe, Square", "Any payment processor"],
        },
        {
          label: "AI voice agent → CRM",
          values: ["No", "Limited", "Yes (VAPI, Retell + n8n)"],
        },
        {
          label: "Multi-system orchestration",
          values: ["No", "Basic chains", "Complex logic, branching, AI"],
        },
      ],
    },
    {
      type: "cards",
      title: "Integration middleware: Zapier vs. n8n vs. native",
      subtitle:
        "How you connect your tools determines cost, flexibility, and reliability:",
      items: [
        {
          icon: Zap,
          title: "Native integrations",
          body: "Connections built into the tools themselves. GoHighLevel includes phone, SMS, email, calendar, and forms in one platform. HubSpot connects natively to Gmail, Outlook, and Slack. Native integrations are the simplest and most reliable option — use them when available. Limitation: you are locked into one vendor's ecosystem.",
        },
        {
          icon: Workflow,
          title: "Zapier (simple connections)",
          body: "Best for straightforward A-to-B connections: form submission creates CRM contact, new appointment sends Slack message, payment received triggers email. Easy setup, no code required. Gets expensive at volume ($20-$100+/month) and struggles with complex logic, branching, or multi-step workflows.",
        },
        {
          icon: Plug,
          title: "n8n (complex orchestration)",
          body: "Best for multi-system workflows with conditional logic, AI, and data transformation. Connect 400+ tools, self-host for flat-cost pricing, and build workflows that Zapier cannot handle. Ideal for: AI-powered lead routing, multi-step onboarding pipelines, and systems that need custom API calls. Requires more technical setup but costs less at scale.",
        },
        {
          icon: MessageSquare,
          title: "Custom API integrations",
          body: "When no middleware supports the connection you need, a custom API integration fills the gap. This is code-level work, typically handled by a developer or consultant. Common for niche industry tools, custom databases, or proprietary systems. Budget $500-$2K per custom integration.",
        },
      ],
    },
    {
      type: "cards",
      title: "High-value integration combinations",
      subtitle:
        "The specific tool stacks that deliver the most value for small service businesses:",
      items: [
        {
          icon: Phone,
          title: "Lead capture stack",
          body: "Web form + phone system + CRM + SMS. Every inquiry — web, phone, or message — creates a CRM contact, triggers an instant response, assigns a team member, and starts a follow-up sequence. Total cost: $100-$300/month in tools. This stack alone recovers thousands in lost leads per month for most businesses.",
        },
        {
          icon: Calendar,
          title: "Scheduling and reminders stack",
          body: "Booking tool + CRM + SMS + email + calendar. Client books online, CRM updates, confirmations send immediately, reminders fire at 24h and 1h, no-shows trigger a rebooking sequence. Reduces no-shows by 30-50% and eliminates scheduling phone tag.",
        },
        {
          icon: CreditCard,
          title: "Service delivery stack",
          body: "CRM + project management + invoicing + review platform. Job starts: tasks create automatically. Job completes: invoice sends, review request fires at 2 hours, referral ask goes out at day 7. The entire post-sale experience runs on autopilot.",
        },
        {
          icon: Database,
          title: "Reactivation and retention stack",
          body: "CRM + email + SMS + AI. Identify dormant contacts (90+ days inactive), segment by service history, run personalized re-engagement campaigns with AI-generated messaging. Turns your existing contact database into a revenue channel without spending on new leads.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Integration pitfalls to avoid",
      subtitle:
        "These cause more automation failures than bad technology:",
      items: [
        {
          icon: AlertTriangle,
          title: "Too many tools, not enough connections",
          body: "Adding a new tool for every need creates fragmentation. Before adding tool number seven, check whether your existing tools can handle the job with better configuration or a simple integration. Five well-connected tools outperform ten disconnected ones every time.",
        },
        {
          icon: Clock,
          title: "One-way integrations that should be two-way",
          body: "A lead form that creates a CRM contact (one-way) is useful. But if CRM updates do not flow back to your scheduling tool, your team works with stale data. Map the data flow in both directions for every integration. Where does data originate? Where does it need to go? What happens when it changes?",
        },
        {
          icon: CheckCircle2,
          title: "No error handling",
          body: "Integrations fail — APIs go down, rate limits hit, data formats change. Good automation includes error detection, retry logic, and failure notifications. Without these, a broken integration silently stops working and you only notice when a client complains.",
        },
        {
          icon: Database,
          title: "Duplicate data across systems",
          body: "When the same contact exists in your CRM, email tool, and booking platform with different information, automations send conflicting messages. Establish one system as the source of truth (usually the CRM) and make all other tools sync from it.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is the minimum integration I need to start?",
      answer:
        "CRM + one lead source + one communication channel. That means: a CRM that captures leads from your web form and sends automated text or email responses. This single integration covers speed-to-lead, the highest-ROI automation for most businesses. Everything else builds on top of this foundation.",
    },
    {
      question: "Should I use an all-in-one platform or best-of-breed tools?",
      answer:
        "All-in-one (like GoHighLevel) is faster to set up and has fewer integration headaches. Best-of-breed (choosing the best CRM, best email tool, best phone system separately) gives you more flexibility but requires integration work. For businesses under 10 employees, all-in-one usually wins on simplicity. For businesses with specific tool requirements, best-of-breed with n8n as the glue layer works well.",
    },
    {
      question: "How do I know if my tools can integrate with each other?",
      answer:
        "Check three things: (1) Does the tool have an API? (2) Is it listed on Zapier or n8n? (3) Does it have native integrations with your other tools? If the answer to all three is no, the tool is an integration dead-end and you should consider alternatives. Most modern SaaS tools have APIs and Zapier support at minimum.",
    },
    {
      question: "What does integration setup cost?",
      answer:
        "Native integrations: free (included in tool subscription). Zapier connections: $20-$100/month depending on volume. n8n self-hosted: $10-$30/month for hosting. Professional integration setup (connecting 3-5 tools with custom workflows): $2K-$5K. Ongoing maintenance: $50-$200/month.",
    },
    {
      question: "What happens when an integration breaks?",
      answer:
        "Well-built integrations include monitoring and alerts. When a connection fails, you get notified and the system retries automatically. Without monitoring, a broken integration fails silently — messages stop sending, contacts stop syncing, and you only discover the problem when revenue dips. Always include error notification in your integration setup.",
    },
  ],
  faqSubtitle:
    "Practical answers about AI automation integrations",
  ctaHeading: "Need help connecting your tools?",
  ctaText:
    "Book a 30-minute call. We will review your current tool stack, identify the most valuable integrations, and show you how to build a connected automation system for your business.",
  ctaSubtext:
    "No obligation. If your tools already work well together, we will tell you.",
  relatedLinks: [
    { label: "n8n automation examples", href: "/n8n-automation-examples-small-business" },
    { label: "n8n vs. Zapier", href: "/n8n-vs-zapier-small-business" },
    { label: "Build vs. buy AI automation", href: "/build-vs-buy-ai-automation" },
    { label: "CRM automation examples", href: "/crm-automation-examples-small-business" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
