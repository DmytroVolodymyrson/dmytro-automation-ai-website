import {
  DollarSign,
  Scale,
  TrendingUp,
  Clock,
  AlertTriangle,
  Zap,
  CheckCircle2,
  XCircle,
  Calculator,
  Layers,
  Target,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-consultant-pricing-small-business",
  metaTitle:
    "AI Automation Consultant Pricing for Small Business — What to Expect | Dmytro AI",
  metaDescription:
    "What does an AI automation consultant actually cost? Honest pricing breakdown for small businesses — project fees, retainers, hourly rates, and what drives the price up or down.",
  badgeText: "Pricing Guide",
  badgeIcon: DollarSign,
  h1: "AI Automation Consultant Pricing for Small Business",
  heroIntro:
    "You've decided AI automation makes sense for your business. Now you need to know what it costs. This is an honest breakdown — not a sales page — of what small businesses actually pay for automation consulting, what drives the price, and how to get the most value from your budget.",
  heroSubtext:
    "Below: real pricing ranges, what you get at each level, and how to evaluate whether a quote is fair.",
  sections: [
    {
      type: "cards",
      title: "Three common pricing models",
      subtitle:
        "Most automation consultants price their work one of these ways. Each has tradeoffs:",
      items: [
        {
          icon: Target,
          title: "Fixed project fee",
          body: "One price for a defined scope of work. You know the cost upfront. The consultant absorbs the risk of scope creep. Most common for small business automation. Typical range: $1,500–$8,000 per project.",
        },
        {
          icon: Clock,
          title: "Hourly rate",
          body: "Pay for time spent. Gives you flexibility but no cost certainty. Common with freelancers and agencies. Risk: projects that run longer cost more. Typical range: $50–$200/hour depending on experience.",
        },
        {
          icon: Layers,
          title: "Monthly retainer",
          body: "Ongoing relationship with a set monthly fee. Includes maintenance, updates, and a defined number of hours for new work. Best for businesses that need continuous optimization. Typical range: $500–$3,000/month.",
        },
      ],
    },
    {
      type: "table",
      title: "What you get at each price point",
      subtitle:
        "Here's what small businesses typically get at common project fee levels:",
      headers: ["$1.5K–$3K", "$3K–$6K", "$6K–$10K+"],
      rows: [
        {
          label: "Scope",
          values: [
            "Single workflow automation",
            "Multi-step system with integrations",
            "Full automation overhaul or complex AI system",
          ],
        },
        {
          label: "Example",
          values: [
            "Lead follow-up SMS/email sequence",
            "CRM + voice agent + booking automation",
            "Custom AI pipeline + dashboard + multi-channel follow-up",
          ],
        },
        {
          label: "Timeline",
          values: ["5–7 days", "2–3 weeks", "3–6 weeks"],
        },
        {
          label: "Integrations",
          values: ["1–2 tools", "3–5 tools", "5+ tools"],
        },
        {
          label: "Includes",
          values: [
            "Build + documentation",
            "Build + documentation + training",
            "Build + documentation + training + optimization period",
          ],
        },
        {
          label: "Best for",
          values: [
            "Solving one specific bottleneck",
            "Automating a core business process",
            "Transforming how your operations run",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What actually drives the price",
      subtitle:
        "Two automation projects can look similar but cost very differently. Here's what moves the number:",
      items: [
        {
          icon: Layers,
          title: "Number of integrations",
          body: "Every tool that needs to connect (CRM, email, phone, calendar, payment) adds complexity. A single-tool automation is straightforward. A five-tool integration with error handling, retry logic, and data sync takes significantly more work.",
        },
        {
          icon: AlertTriangle,
          title: "Edge case handling",
          body: "The difference between a $2K build and a $5K build is often edge cases. What happens when a lead doesn't answer? When a booking conflicts? When a payment fails? Handling the happy path is easy. Handling everything that can go wrong is where the real work lives.",
        },
        {
          icon: Zap,
          title: "AI complexity",
          body: "Simple rule-based automation (if this, then that) costs less than AI-powered systems (natural language processing, voice agents, intelligent routing). AI voice agents in particular require more development time because phone conversations have more variables than text flows.",
        },
        {
          icon: TrendingUp,
          title: "Volume and reliability requirements",
          body: "A system that handles 10 leads a day is different from one that handles 500. Higher volume means more attention to reliability, monitoring, error recovery, and performance. Enterprise-grade reliability costs more because the cost of failure is higher.",
        },
      ],
    },
    {
      type: "prose",
      title: "How to evaluate whether a quote is fair",
      subtitle:
        "You've gotten a proposal. Here's how to tell if the pricing makes sense:",
      blocks: [
        {
          heading: "Compare the ROI, not just the price tag",
          body: "A $4,000 automation that saves you 15 hours per week pays for itself in under 2 months (at $35/hour of employee time). A $1,500 automation that saves 2 hours per week takes 5 months to break even. The cheaper option isn't always the better investment. Ask: what's the monthly value of the time or revenue this automation creates?",
        },
        {
          heading: "Check what's included beyond the build",
          body: "Does the quote include documentation? Training? A period of post-launch support? Bug fixes? Some consultants bake these in; others charge extra. A lower quote that doesn't include support can end up costing more when things need adjusting after launch.",
        },
        {
          heading: "Ask about ownership",
          body: "You should own everything that gets built: the workflows, the data, the credentials, the documentation. If the consultant builds on their own accounts or uses proprietary tools that require ongoing payment to them, the real cost is much higher than the project fee. Ownership should be non-negotiable.",
        },
        {
          heading: "Beware the 'too cheap' signal",
          body: "If a quote is dramatically lower than others, ask why. Common reasons: the consultant plans to use generic templates without customization, they'll bill hourly for 'extras' later, or they're junior and will learn on your project. A fair price reflects real expertise and real time spent understanding your business.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Pricing signals to watch for",
      subtitle:
        "These patterns help you separate fair pricing from red flags:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Fair pricing looks like…",
          variant: "green",
          items: [
            "Clear scope document before any quote is given",
            "Fixed fee that covers the defined scope including revisions",
            "Itemized breakdown so you see what you're paying for",
            "Post-launch support period included (2–4 weeks typical)",
            "Transparent about what would cost extra if scope changes",
          ],
        },
        {
          icon: XCircle,
          heading: "Red flags in pricing…",
          variant: "neutral",
          items: [
            "Quote given before understanding your workflow",
            "Hourly billing with no estimate or cap",
            "Significant 'phase 2' costs that aren't defined upfront",
            "Setup fees plus high monthly fees plus per-usage fees",
            "No documentation or training included — charged separately",
          ],
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "Why is there such a wide price range for automation consulting?",
      answer:
        "Because 'automation' covers everything from a simple Zapier connection ($500) to a full AI-powered operations system ($10,000+). The price reflects complexity, number of integrations, AI involvement, and how much diagnosis work is needed. A consultant who charges $4,000 for a multi-step system with voice AI is not overcharging — they're pricing for the actual work involved.",
    },
    {
      question: "Should I go with the cheapest option?",
      answer:
        "Not necessarily. The cheapest option often means generic templates, minimal customization, and no post-launch support. If the automation breaks or doesn't fit your workflow, you'll pay someone else to fix or rebuild it. Price should reflect value delivered, not just hours spent. Compare total cost of ownership over 12 months, not just the initial quote.",
    },
    {
      question: "Is a retainer worth it for a small business?",
      answer:
        "It depends on how much your automation needs change. If you have a stable system that just needs monitoring, a retainer might be overkill — occasional hourly support is cheaper. If your business is growing and you're adding new automations, channels, or integrations regularly, a retainer gives you priority access and predictable costs.",
    },
    {
      question: "How do I budget for AI automation if I've never done it before?",
      answer:
        "Start with a single project in the $2K–$4K range. Pick your biggest bottleneck — usually lead follow-up speed or missed calls — and automate that first. See the ROI before committing more budget. Most businesses that start with one project come back for more because the payback is clear and fast.",
    },
  ],
  faqSubtitle:
    "Honest answers about AI automation pricing for small businesses",
  ctaHeading: "Want to know what your specific project would cost?",
  ctaText:
    "Book a 30-minute call. We'll look at what you need automated, scope it out, and give you a clear estimate — no surprises, no hidden fees.",
  ctaSubtext:
    "The call is free. You'll leave with a clear picture of cost, timeline, and expected ROI.",
  relatedLinks: [
    {
      label: "Consultant vs. agency comparison",
      href: "/hire-ai-automation-consultant-vs-agency",
    },
    {
      label: "Consultant vs. freelancer",
      href: "/ai-automation-consultant-vs-freelancer",
    },
    {
      label: "AI automation for small business",
      href: "/ai-automation-consultant-small-business",
    },
  ],
};

export default data;
