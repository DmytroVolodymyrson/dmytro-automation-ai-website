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
    "Below: what you will actually pay, what affects the price, where small-business budgets usually break down, and a practical routing layer so you can jump to the right next page before you spend money on the wrong build.",
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
      title: "What each budget band should actually buy first",
      subtitle:
        "The table above shows price ranges. This section tells you what scope is realistic at each level — so you can match your cash to the right first project instead of overspending on a broader system you do not need yet:",
      blocks: [
        {
          heading: "$1K–$2.5K — One bounded workflow",
          body: "At this level you are buying a single trigger-to-action sequence: missed-call text-back, an instant lead-response SMS/email, or a timed reminder workflow. The scope is narrow on purpose. You get one integration, one automation engine, and a short stabilization window. This is the safest starting point for owners who want to prove the concept before spending more. If you are not sure which single workflow to start with, the first-project decision guide walks through seven candidates ranked by speed-to-ROI.",
          links: [
            { label: "What to automate first", href: "/what-to-automate-first-for-service-businesses" },
            { label: "Affordable AI automation", href: "/affordable-ai-automation-small-business" },
          ],
        },
        {
          heading: "$2.5K–$5K — One workflow plus connected routing",
          body: "This band buys a multi-step sequence with CRM tagging, conditional branching, or a second integration. Examples: a lead-follow-up sequence that also qualifies and routes hot leads to your calendar, or a client-onboarding flow that collects documents and triggers the first welcome message. You are still in single-problem territory, but the system is smart enough to sort and hand off instead of just firing messages. A consultant scopes this as a fixed-price project with a written deliverable list.",
          links: [
            { label: "Consultant pricing breakdown", href: "/ai-automation-consultant-pricing-small-business" },
            { label: "AI lead follow-up cost", href: "/ai-lead-follow-up-cost-small-business" },
          ],
        },
        {
          heading: "$5K–$12K — Multi-workflow system or AI-powered build",
          body: "At this budget you are either connecting multiple workflows into a coordinated operating system (lead capture + follow-up + booking + post-appointment review request) or building one higher-complexity AI component like a voice agent. Do not jump here unless the contained first build already proved ROI or your revenue leak is large enough to justify the bigger scope upfront. The vehicle accessories CRM build and the Paris Cafe voice-agent deployment are both examples of this tier in production.",
          links: [
            { label: "AI voice agent setup cost", href: "/ai-voice-agent-setup-cost-small-business" },
            { label: "Case studies", href: "/case-studies" },
          ],
        },
      ],
    },
    {
      type: "cards",
      title: "Budget shortcut: where to go next based on what you are really pricing",
      subtitle:
        "Most owners are not just asking for a number. They are trying to decide what kind of build they can afford, whether the savings are worth it, and what should happen after launch. Use the route below that matches the real question behind the price search:",
      items: [
        {
          icon: DollarSign,
          title: "You need a realistic first-project budget",
          body: "If your real question is whether you should spend on consultant-led setup, a smaller first workflow, or a broader stack, start with the pages that frame price against project scope instead of abstract software cost.",
          links: [
            { label: "What to automate first for service businesses", href: "/what-to-automate-first-for-service-businesses" },
            { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
            { label: "Affordable AI automation under a small-business budget", href: "/affordable-ai-automation-small-business" },
          ],
        },
        {
          icon: TrendingUp,
          title: "You are comparing cost against ROI or time saved",
          body: "Price alone is the wrong lens if the workflow protects revenue, removes admin drag, or prevents the next hire. These guides help you compare the quote against payback and reclaimed team capacity.",
          links: [
            { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
            { label: "AI automation time savings", href: "/ai-automation-time-savings-small-business" },
            { label: "AI lead follow-up cost", href: "/ai-lead-follow-up-cost-small-business" },
          ],
        },
        {
          icon: Wrench,
          title: "You are worried the build price is only the beginning",
          body: "That concern is valid. A good quote should separate implementation scope, platform fees, and the level of post-launch support you actually need instead of hiding everything inside one vague monthly number.",
          links: [
            { label: "AI automation maintenance and support", href: "/ai-automation-maintenance-and-support-small-business" },
            { label: "All case studies", href: "/case-studies" },
            { label: "All automation guides", href: "/guides" },
          ],
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
      type: "case-studies",
      title: "What those budgets usually buy first",
      subtitle:
        "These proof assets help you map price ranges to the kind of problem you are actually solving, instead of buying a generic 'AI package':",
      studies: [
        {
          industry: "Phone coverage & booking ($3K–$6K band)",
          headline: "Paris Café: 0% to 100% after-hours coverage, under-60-second response",
          body: "Use this as the reference point when you are pricing after-hours call coverage, FAQ handling, or AI-assisted booking. The voice workflow landed in the $3K–$6K band because it involved prompt engineering, calendar integration, and production tuning. The higher-ticket voice build makes sense only when missed calls and booking friction are already costing real revenue — not as the first project.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "CRM + multi-step follow-up ($5K–$12K band)",
          headline: "A vehicle accessories e-commerce brand: 5,600+ contacts activated, SMS/email follow-up running hands-free",
          body: "This is the closest site proof for owners budgeting multi-step segmentation, routing, reactivation, and CRM cleanup work. It supports why a lead-follow-up or full-system quote costs more than a single trigger: the value comes from the operating system around the messages, not the message alone. If you are considering the upper budget band, this shows what that scope actually delivers.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Pipeline qualification ($2K–$4K band)",
          headline: "Instagram lead gen: 50+ qualified leads/day at $0.29/lead, zero manual work",
          body: "If your real question is whether to spend first on faster response, qualification, or pipeline routing, start here. This build landed in the mid budget band because it focused on one narrow pipeline problem. It is a better model for a contained first build than jumping straight to a full CRM overhaul before the basic intake path is working.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
        { label: "What to automate first for service businesses", href: "/what-to-automate-first-for-service-businesses" },
        { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
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
      question: "What can a small business realistically automate on a tighter budget?",
      answer:
        "If the real limit is cash, start with one contained workflow instead of a broad system: missed-call text-back, a basic lead-response sequence, reminders, or a small CRM routing fix. Those are the projects most likely to fit a modest build budget and low monthly running cost. The mistake is trying to buy a full voice agent, CRM rebuild, and multi-channel nurture system in the same first phase.",
    },
    {
      question: "How should I think about support cost versus build cost?",
      answer:
        "Separate them. The build price covers implementation. Support covers monitoring, small fixes, and bounded updates after launch. Some workflows only need a short stabilization period, while customer-facing or revenue-critical systems justify a true monthly support plan. If a quote bundles everything together without saying what happens after launch, ask for the split before you sign.",
    },
    {
      question: "How do I choose between one bounded workflow and a broader system?",
      answer:
        "Start with one workflow if you have not automated anything yet, your budget is under $3K, or you are not sure where the biggest leak is. Move to a broader system only after the first build has proven ROI and you can clearly identify the next bottleneck it should connect to. Most businesses that jump to a $5K-$12K system before validating the first workflow either overspend or end up rebuilding the foundation anyway. The first-project decision guide helps you identify the right contained starting point.",
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
    { label: "What to automate first for service businesses", href: "/what-to-automate-first-for-service-businesses" },
    { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
    { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
    { label: "AI automation time savings", href: "/ai-automation-time-savings-small-business" },
    { label: "AI automation maintenance and support", href: "/ai-automation-maintenance-and-support-small-business" },
    { label: "Affordable AI automation for small business", href: "/affordable-ai-automation-small-business" },
    { label: "Hire a consultant or do it yourself", href: "/hire-ai-automation-consultant-vs-diy" },
    { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "AI lead follow-up cost", href: "/ai-lead-follow-up-cost-small-business" },
    { label: "AI voice agent setup cost", href: "/ai-voice-agent-setup-cost-small-business" },
    { label: "Build vs. buy AI automation", href: "/build-vs-buy-ai-automation" },
    { label: "Case studies", href: "/case-studies" },
    { label: "All guides", href: "/guides" },
    { label: "Implementation roadmap", href: "/ai-automation-implementation-roadmap" },
  ],
};

export default data;
