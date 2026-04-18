import {
  DollarSign,
  Calculator,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Layers,
  Wrench,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-cost-small-business",
  metaTitle:
    "AI Automation Cost for Small Business — Real Pricing Breakdown | Dmytro AI",
  metaDescription:
    "What does AI automation actually cost for a small business? Honest breakdown of build costs, monthly fees, hidden expenses, and how to budget your first project.",
  badgeText: "Cost Guide",
  badgeIcon: DollarSign,
  h1: "AI Automation Cost for Small Business",
  heroIntro:
    "Most small business owners search for automation pricing and find vague ranges or enterprise quotes that start at $50K. That is not useful. This page gives you real numbers for the automations small service businesses actually buy — lead follow-up, CRM workflows, voice agents, onboarding systems — with honest breakdowns of what drives cost up and what keeps it manageable.",
  heroSubtext:
    "Below: what you will actually pay, what affects the price, common budget mistakes, and how to get the most value from your first automation investment.",
  sections: [
    {
      type: "table",
      title: "What AI automation costs by project type",
      subtitle:
        "Real pricing ranges based on projects we build for small service businesses. These are typical, not aspirational:",
      headers: ["Build Cost", "Monthly Running Cost", "Typical Timeline"],
      rows: [
        {
          label: "Missed call text-back",
          values: ["$1K–$2K", "$20–$50", "3–5 days"],
        },
        {
          label: "Lead follow-up sequence (multi-step)",
          values: ["$2K–$4K", "$30–$80", "1–2 weeks"],
        },
        {
          label: "CRM setup + basic automation",
          values: ["$1.5K–$3K", "$50–$200 (CRM fee)", "1–2 weeks"],
        },
        {
          label: "Client onboarding automation",
          values: ["$2K–$5K", "$30–$100", "2–3 weeks"],
        },
        {
          label: "Email sequence automation",
          values: ["$1.5K–$3K", "$20–$80", "1–2 weeks"],
        },
        {
          label: "AI voice agent (phone answering)",
          values: ["$3K–$6K", "$50–$200 (AI usage)", "2–4 weeks"],
        },
        {
          label: "Full multi-workflow system",
          values: ["$5K–$12K", "$100–$300", "4–8 weeks"],
        },
      ],
    },
    {
      type: "prose",
      title: "What drives the cost up — and what keeps it down",
      subtitle:
        "Understanding these factors helps you budget accurately and avoid overspending:",
      blocks: [
        {
          heading: "Number of integrations",
          body: "Every system your automation touches adds complexity. Connecting a CRM, email platform, and calendar is straightforward. Adding a phone system, payment processor, and custom database raises the build cost. A two-integration workflow costs half what a six-integration system costs.",
        },
        {
          heading: "AI component complexity",
          body: "Simple rule-based automation (if this, then that) is cheaper than AI-powered automation. A missed call text-back is rule-based — $1K-$2K. An AI voice agent that qualifies callers and books appointments requires prompt engineering, testing, and ongoing tuning — $3K-$6K. The AI piece adds value but also adds cost.",
        },
        {
          heading: "Custom vs. templated workflows",
          body: "If your process matches a common pattern (lead follow-up, appointment reminders, review requests), the build is faster and cheaper because the workflow architecture already exists. Truly unique processes — like a multi-step approval chain with conditional routing — take longer to design and test.",
        },
        {
          heading: "Ongoing maintenance expectations",
          body: "A well-built automation runs with minimal intervention. Budget $50-$200/month for a maintenance retainer if you want someone to monitor, update, and optimize. Without maintenance, systems degrade within 6-12 months as APIs change and edge cases surface.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is your budget realistic?",
      subtitle:
        "Quick check based on what most small businesses spend:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Realistic budget",
          variant: "green",
          items: [
            "$1.5K–$3K for a single focused automation",
            "$3K–$6K for a multi-workflow system",
            "$50–$200/month for running costs and maintenance",
            "Starting with one workflow and expanding based on results",
            "Budget for 2-4 weeks of tuning after launch",
          ],
        },
        {
          icon: XCircle,
          heading: "Common budget traps",
          variant: "neutral",
          items: [
            "Expecting a full AI system for under $1K",
            "Budgeting the build cost but ignoring monthly fees",
            "Trying to automate everything at once instead of starting small",
            "Comparing custom automation pricing to SaaS subscription pricing",
            "Skipping the maintenance budget entirely",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Hidden costs most businesses miss",
      subtitle:
        "The build price is not the full picture. Factor these in:",
      items: [
        {
          icon: AlertTriangle,
          title: "Platform and tool subscriptions",
          body: "Your automation needs tools to run on. CRM platforms ($50-$300/month), automation engines ($0-$50/month self-hosted, $20-$100/month cloud), email senders ($20-$80/month), and AI API usage ($10-$100/month depending on volume). These are separate from the build cost and most consultants will tell you about them upfront.",
        },
        {
          icon: Clock,
          title: "Your time during setup",
          body: "Even with a consultant handling the build, you will spend 3-5 hours providing information, reviewing workflows, and testing. This is not a set-it-and-forget-it process. The businesses that get the best results are the ones that stay involved during the first two weeks.",
        },
        {
          icon: Layers,
          title: "Training and documentation",
          body: "Someone on your team needs to understand how the system works. Good consultants include a walkthrough and documentation. If they do not, budget $200-$500 for a training session. A system nobody understands is a system nobody trusts.",
        },
        {
          icon: Wrench,
          title: "Iteration and refinement costs",
          body: "The first version of any automation captures 80% of the value. Getting to 95% requires 2-4 weeks of refinement — adjusting timing, rewording messages, adding edge case handling. Some consultants include this in the build price. Others charge it separately. Ask before you start.",
        },
      ],
    },
    {
      type: "cards",
      title: "How to get the most value from your budget",
      subtitle:
        "Strategies that consistently help small businesses maximize their automation investment:",
      items: [
        {
          icon: Calculator,
          title: "Start with the highest-ROI automation",
          body: "Pick the one automation that has the most direct revenue impact — usually speed-to-lead (responding to inquiries faster). A $2K build that recovers $1K-$3K per month in lost leads pays for itself fast and funds the next build.",
        },
        {
          icon: TrendingUp,
          title: "Build in phases, not all at once",
          body: "A $2K automation that works in 2 weeks beats a $10K system that takes 3 months. Phase your investment: start with lead follow-up, add onboarding next, then layer in review requests and reactivation campaigns. Each phase builds on the last.",
        },
        {
          icon: BarChart3,
          title: "Compare against the cost of not automating",
          body: "If your team spends 10 hours per week on tasks a $3K automation would handle, and your effective labor cost is $25/hour, you are spending $1,000/month on manual work. The automation pays for itself in 3 months.",
        },
        {
          icon: DollarSign,
          title: "Get fixed pricing, not hourly",
          body: "Hourly billing creates misaligned incentives — the longer it takes, the more the consultant earns. Fixed-price projects with clear scope protect you from cost overruns and force both sides to agree on exactly what is being built.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "How much should I budget for my first AI automation?",
      answer:
        "For a single workflow — like missed call text-back, lead follow-up, or appointment reminders — budget $1.5K-$3K for the build and $50-$100/month in running costs. For a multi-workflow system with CRM integration, budget $3K-$6K with $100-$200/month ongoing. Start small, prove ROI, then expand.",
    },
    {
      question: "Why does custom automation cost more than a SaaS subscription?",
      answer:
        "SaaS tools spread development costs across thousands of users. Custom automation is built specifically for your workflow. The tradeoff: SaaS gives you 70% of what you need by tomorrow. Custom gives you 100% of what you need in 2-4 weeks. If a $97/month SaaS tool solves your problem, use it. Custom makes sense when it does not.",
    },
    {
      question: "What are the ongoing monthly costs after the build?",
      answer:
        "Typical monthly costs: CRM platform ($50-$300), automation hosting ($0-$50 self-hosted, $20-$100 cloud), AI API usage ($10-$100 depending on call/message volume), email/SMS sending ($20-$80). Most small businesses spend $100-$300/month total on their automation stack. Maintenance retainers add $100-$300/month if you want hands-off operation.",
    },
    {
      question: "Can I build automations myself to save money?",
      answer:
        "Simple automations, yes. If you are comfortable with tools like Zapier or n8n, you can build basic workflows yourself. The challenge is knowing what to build, handling edge cases, and connecting multiple systems reliably. Most DIY automations break within the first month because they do not account for real-world messiness. A consultant build saves you 20-40 hours of trial and error.",
    },
    {
      question: "How do I know if I am being overcharged?",
      answer:
        "Get quotes from 2-3 consultants for the same scope. If quotes vary wildly, the scope is probably unclear. Ask for a fixed price with a written scope document. Red flags: vague timelines, hourly-only billing, no written scope, and promises that sound too good. Fair consultants explain exactly what you are paying for.",
    },
  ],
  faqSubtitle:
    "Honest answers about AI automation pricing for small businesses",
  ctaHeading: "Get a clear cost estimate for your automation project",
  ctaText:
    "Book a 30-minute call. We will walk through your specific workflow, identify the right automation, and give you a fixed-price quote with no surprises.",
  ctaSubtext:
    "No obligation. If the math does not make sense, we will tell you that too.",
  relatedLinks: [
    { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
    { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
    { label: "Build vs. buy AI automation", href: "/build-vs-buy-ai-automation" },
    { label: "Implementation roadmap", href: "/ai-automation-implementation-roadmap" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
