import {
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Search,
  Target,
  Users,
  Clock,
  BarChart3,
  FileCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-audit-checklist",
  metaTitle:
    "AI Automation Audit Checklist for Small Business — Readiness Assessment | Dmytro AI",
  metaDescription:
    "Free AI automation audit checklist for small businesses. Assess your workflows, tools, and readiness before investing in automation. 20-point evaluation you can run yourself.",
  badgeText: "Audit Checklist",
  badgeIcon: ClipboardCheck,
  h1: "AI Automation Audit Checklist for Small Business",
  heroIntro:
    "Before spending money on automation, you need to know where it will actually help. Most businesses jump straight to buying tools without understanding their own workflows first. This checklist walks you through a structured audit of your current operations — so you can identify what to automate, what to fix manually, and what to leave alone.",
  heroSubtext:
    "Below: a 20-point checklist organized by business area, a scoring guide to prioritize your automation opportunities, and common mistakes to avoid during the audit process.",
  sections: [
    {
      type: "cards",
      title: "Lead response and follow-up audit",
      subtitle:
        "Start here — this is where most small businesses lose the most money:",
      items: [
        {
          icon: Clock,
          title: "1. Measure your average response time",
          body: "How long does it take to respond to a new lead — from the moment they submit a form, call, or send a message? If you do not know the exact number, it is probably slower than you think. Under 5 minutes is competitive. Over 30 minutes means you are losing leads to faster competitors.",
        },
        {
          icon: Search,
          title: "2. Track missed calls and unanswered inquiries",
          body: "Check your phone system for missed calls in the last 30 days. Check your email and form submissions for inquiries that never got a response. Every unanswered inquiry is revenue left on the table. If you are missing more than 10% of inbound contacts, this is your highest-priority automation target.",
        },
        {
          icon: Target,
          title: "3. Map your follow-up process",
          body: "Write down exactly what happens after a lead comes in. Who responds? How? When? Is there a second follow-up? A third? If your follow-up process depends on someone remembering to do it, it is not a process — it is a hope. Automation replaces hope with consistency.",
        },
        {
          icon: Users,
          title: "4. Count leads that went cold",
          body: "Look at your CRM or inbox for leads from the last 90 days that never converted. How many got a follow-up beyond the first response? If fewer than half got a second touch, you have a follow-up gap that automation can close.",
        },
      ],
    },
    {
      type: "cards",
      title: "Operations and internal workflow audit",
      subtitle:
        "The second biggest opportunity — hours your team spends on tasks that do not require judgment:",
      items: [
        {
          icon: FileCheck,
          title: "5. List every manual, repetitive task",
          body: "Ask each team member to write down tasks they do every day or week that follow the same pattern. Scheduling, data entry, status updates, sending reminders, copying information between systems. If it follows a rule (if X happens, do Y), it is automatable.",
        },
        {
          icon: Clock,
          title: "6. Estimate hours spent on each task",
          body: "For each repetitive task, estimate the weekly time cost. Be specific — not just 'scheduling takes a while' but '3 hours per week on scheduling and confirmations.' The total across your team is usually 15-25 hours per week for a 5-person business. That is a part-time salary.",
        },
        {
          icon: BarChart3,
          title: "7. Identify handoff points and bottlenecks",
          body: "Where does work stall waiting for someone? Where do tasks get dropped because they depend on one person? Common bottlenecks: waiting for approvals, manual data transfer between systems, scheduling conflicts. Each bottleneck is a potential automation trigger.",
        },
        {
          icon: AlertTriangle,
          title: "8. Check for inconsistency in your processes",
          body: "Does every client get the same onboarding experience? Does every lead get the same follow-up sequence? If the answer is no, the problem is not laziness — it is relying on humans to remember 50 steps every time. Automation makes the process identical every time.",
        },
      ],
    },
    {
      type: "cards",
      title: "Technology and tool stack audit",
      subtitle:
        "Your existing tools determine what is easy to automate and what requires more work:",
      items: [
        {
          icon: Search,
          title: "9. Inventory your current tools",
          body: "List every tool your business uses: CRM, email platform, calendar, phone system, invoicing, project management, messaging. For each tool, note whether it has an API or integrates with automation platforms like Zapier or n8n. Tools without APIs limit your automation options.",
        },
        {
          icon: Target,
          title: "10. Identify data silos",
          body: "Where does information live in separate systems that should be connected? Customer data in one place, appointments in another, invoices in a third. Every silo means manual copying and increased error risk. Automation bridges these gaps.",
        },
        {
          icon: FileCheck,
          title: "11. Assess your CRM readiness",
          body: "Do you have a CRM? Is it actually used, or is it a graveyard of outdated contacts? Is contact data clean and current? A CRM with 500 well-maintained contacts is more valuable than one with 5,000 stale records. Automation built on bad data produces bad results.",
        },
        {
          icon: Users,
          title: "12. Evaluate team technical comfort",
          body: "Rate your team's comfort with technology on a 1-5 scale. You do not need developers, but you do need people who can use a CRM, follow a documented workflow, and communicate issues. If your team resists new tools entirely, fix adoption before adding automation.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Score your automation readiness",
      subtitle:
        "Based on the audit above, where does your business fall?",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Ready to automate (score 8+)",
          variant: "green",
          items: [
            "You have a CRM with current contact data",
            "You can identify 2+ specific workflows that follow repeatable patterns",
            "Your team spends 10+ hours per week on tasks that could be automated",
            "You are losing leads to slow response times or missed follow-ups",
            "You have tools that integrate with automation platforms",
            "Your team is willing to learn new workflows",
          ],
        },
        {
          icon: XCircle,
          heading: "Fix these first (score under 5)",
          variant: "neutral",
          items: [
            "No CRM or contact data is scattered across spreadsheets",
            "Processes change every week — nothing is standardized yet",
            "Team actively resists new tools and workflows",
            "Fewer than 10 leads per month — volume does not justify automation",
            "No budget for both the build and ongoing running costs",
            "Business model is still being figured out",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Common audit mistakes",
      subtitle:
        "Avoid these when evaluating your automation readiness:",
      items: [
        {
          icon: AlertTriangle,
          title: "Skipping the measurement step",
          body: "If you cannot quantify the problem (how many leads you miss, how many hours you spend, how long follow-up takes), you cannot evaluate whether automation is worth the investment. Spend one week tracking these numbers before making any decisions.",
        },
        {
          icon: Target,
          title: "Auditing in isolation",
          body: "The business owner sees the strategy. The team sees the daily pain. Both perspectives matter. Run the audit with input from the people who actually do the repetitive work. They know where time is wasted better than anyone.",
        },
        {
          icon: Clock,
          title: "Confusing 'could automate' with 'should automate'",
          body: "Not everything that can be automated should be. If a task takes 5 minutes per week and requires nuanced judgment, automating it costs more than it saves. Focus on high-volume, rule-based tasks where automation has a clear ROI.",
        },
        {
          icon: BarChart3,
          title: "Ignoring the human side",
          body: "Automation changes how your team works. If people feel replaced or confused, adoption fails. Frame automation as removing the boring parts of their job, not replacing them. Include team members in the audit and let them identify what they want automated.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "How long does an automation audit take?",
      answer:
        "A self-service audit using this checklist takes 2-3 hours. A consultant-led audit with interviews, tool evaluation, and a recommendation report takes 1-2 days. The self-service version is good enough for most small businesses to identify their top 2-3 automation priorities.",
    },
    {
      question: "Do I need a consultant to do the audit?",
      answer:
        "No. This checklist covers the same ground a consultant would in an initial assessment. Where a consultant adds value is in identifying non-obvious connections between workflows, evaluating tool compatibility, and recommending specific automation architectures. Start with the self-audit. Bring in a consultant when you are ready to build.",
    },
    {
      question: "What if my audit reveals I am not ready for automation?",
      answer:
        "That is a valuable finding. Common readiness blockers — no CRM, unstable processes, low lead volume — are all fixable. Get a CRM set up and used consistently for 30 days. Standardize your top 3 processes. Once the foundations are in place, automation multiplies their effect.",
    },
    {
      question: "How often should I re-run this audit?",
      answer:
        "Every 6 months, or whenever your business goes through a significant change — new service offering, team growth, new tools, or a shift in lead volume. Automation needs evolve as your business evolves. A quarterly review of your top automations is also good practice.",
    },
    {
      question: "What is the first thing most businesses should automate after the audit?",
      answer:
        "Speed-to-lead. Responding to new inquiries faster than your competitors is the automation with the clearest, most direct revenue impact. If your audit reveals slow response times or missed follow-ups, start there. Everything else can wait.",
    },
  ],
  faqSubtitle:
    "Practical answers about automation audits for small businesses",
  ctaHeading: "Want help running your automation audit?",
  ctaText:
    "Book a 30-minute call. We will walk through your workflows together, identify the highest-impact automation opportunities, and give you a clear prioritized list.",
  ctaSubtext:
    "No obligation. If you are not ready for automation, we will tell you what to fix first.",
  relatedLinks: [
    { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
    { label: "AI automation cost guide", href: "/ai-automation-cost-small-business" },
    { label: "Implementation roadmap", href: "/ai-automation-implementation-roadmap" },
    { label: "Automation without a tech team", href: "/ai-automation-for-businesses-without-a-tech-team" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
