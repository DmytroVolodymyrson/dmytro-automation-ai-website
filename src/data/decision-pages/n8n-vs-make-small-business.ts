import {
  Scale,
  Workflow,
  Blocks,
  DollarSign,
  Clock,
  AlertTriangle,
  Zap,
  Lock,
  Users,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "n8n-vs-make-small-business",
  metaTitle:
    "n8n vs Make (Integromat) for Small Business — Honest Comparison | Dmytro AI",
  metaDescription:
    "Comparing n8n and Make for small business automation. Pricing, self-hosting, AI integration, learning curve, and which platform fits your situation.",
  badgeText: "Comparison",
  badgeIcon: Scale,
  h1: "n8n vs Make for Small Business Automation",
  heroIntro:
    "Both n8n and Make are visual workflow automation platforms. Both connect your apps, move data, and eliminate manual tasks. But they differ in pricing model, hosting flexibility, and how well they handle AI workloads. This comparison is for business owners who need to pick one and move on.",
  heroSubtext:
    "Below: what each platform does well, where each falls short, real cost differences at scale, and how to decide.",
  sections: [
    {
      type: "cards",
      title: "Two powerful automation platforms",
      subtitle:
        "Both can automate your business. They take different approaches to get there:",
      items: [
        {
          icon: Blocks,
          title: "Make (formerly Integromat)",
          body: "Cloud-hosted visual automation with a polished drag-and-drop builder. Generous free tier and predictable per-operation pricing. Strong app marketplace with 1,700+ integrations. Easiest on-ramp for non-technical users. Best when you want to build quickly without touching code or managing infrastructure.",
        },
        {
          icon: Workflow,
          title: "n8n",
          body: "Open-source workflow automation you can self-host or run on n8n Cloud. Code-optional — use the visual builder or drop into JavaScript/Python when needed. Native AI nodes for LLM chains, vector stores, and agent workflows. Best when you need flexibility, own your data, or plan to build AI-powered automations.",
        },
        {
          icon: Zap,
          title: "When either works fine",
          body: "For simple workflows — form submissions to CRM, new lead notifications, invoice reminders — both platforms handle the job well. If your automations are straightforward and you have fewer than 10 workflows, the platform matters less than just getting started. Pick whichever feels more intuitive after 30 minutes.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "How n8n and Make compare on the factors that matter for small businesses:",
      headers: ["Make", "n8n"],
      rows: [
        {
          label: "Pricing model",
          values: [
            "Per-operation pricing, starts free (1,000 ops/month)",
            "Self-host free, or n8n Cloud from $24/month (unlimited executions on most plans)",
          ],
        },
        {
          label: "Self-hosting",
          values: [
            "Not available — cloud only",
            "Full self-hosting on your own server, Docker, or Railway",
          ],
        },
        {
          label: "AI integration",
          values: [
            "Basic HTTP/API modules for calling AI services",
            "Native AI nodes: LLM chains, agents, vector stores, embeddings, tools",
          ],
        },
        {
          label: "Complexity handling",
          values: [
            "Good for linear and branching workflows",
            "Handles complex logic, sub-workflows, loops, and error branching natively",
          ],
        },
        {
          label: "Learning curve",
          values: [
            "Lower — polished UI, strong templates, visual-first design",
            "Moderate — more powerful but takes longer to learn the full feature set",
          ],
        },
        {
          label: "Integrations",
          values: [
            "1,700+ native integrations",
            "400+ native nodes, plus HTTP requests and custom code for anything else",
          ],
        },
        {
          label: "Data ownership",
          values: [
            "Data passes through Make's cloud servers",
            "Self-hosted: data never leaves your infrastructure",
          ],
        },
        {
          label: "Best for",
          values: [
            "Non-technical users who want fast, simple automations",
            "Businesses building AI workflows or needing full data control",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each platform wins",
      subtitle:
        "The right choice depends on what you are automating and how technical your team is:",
      options: [
        {
          icon: Blocks,
          heading: "Make is the better choice when...",
          highlighted: false,
          items: [
            "You want the fastest setup with the least technical friction",
            "Your workflows are mostly app-to-app data syncing (CRM, email, sheets)",
            "You need a specific integration that Make supports natively but n8n does not",
            "Nobody on your team writes code and nobody wants to learn",
            "Your volume is low enough that per-operation pricing stays cheap",
          ],
        },
        {
          icon: Workflow,
          heading: "n8n wins when...",
          highlighted: true,
          items: [
            "You are building AI-powered automations (chatbots, voice agents, lead scoring)",
            "You want to self-host for data privacy, compliance, or cost control",
            "Your workflows involve complex logic, custom code, or sub-workflows",
            "You are scaling past 10,000 operations per month and want predictable costs",
            "You need to own your automation infrastructure without vendor dependency",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What actually matters beyond features",
      subtitle:
        "Feature lists are easy to compare. These factors are harder to see but usually drive the real outcome:",
      items: [
        {
          icon: DollarSign,
          title: "Cost at scale is where the gap shows",
          body: "Make charges per operation. At low volume, it is cheap or free. At 50,000+ operations per month, you are paying $83–$166/month and climbing. n8n self-hosted costs $5–$20/month for a server regardless of volume. n8n Cloud starts at $24/month with generous limits. For high-volume businesses, n8n is significantly cheaper long-term.",
        },
        {
          icon: Lock,
          title: "Vendor lock-in is real with both, but worse with Make",
          body: "Make workflows live on Make's servers. If Make changes pricing, deprecates features, or goes down, your automations go with it. n8n workflows are JSON files you can export, version-control, and move between instances. Self-hosting means you control the upgrade timeline and the infrastructure.",
        },
        {
          icon: Users,
          title: "Community and support differ in kind",
          body: "Make has polished documentation and a support team. n8n has an active open-source community, a public forum with thousands of workflow examples, and contributors building custom nodes. If you hit an edge case, n8n's community often has a workaround faster than Make's support ticket queue.",
        },
        {
          icon: Zap,
          title: "AI-native capabilities are not even close",
          body: "n8n has built-in nodes for OpenAI, Anthropic, vector databases, document loaders, and full AI agent chains. You can build an AI workflow visually without writing API calls. Make requires HTTP modules and manual JSON handling for the same tasks. If AI automation is on your roadmap, n8n is the clear choice.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What this looks like in practice",
      subtitle:
        "Real automations built with these types of platforms:",
      studies: [
        {
          industry: "Restaurant",
          headline: "Voice agent handling every after-hours call",
          body: "An n8n backend powers a VAPI voice agent for a NYC restaurant. Handles reservations, answers menu questions, and routes urgent calls. The workflow orchestration runs on n8n with full control over call routing logic and CRM updates.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce",
          headline: "5,600+ leads managed automatically",
          body: "Automated CRM workflows handle lead capture, SMS and email follow-up sequences, and lead scoring for an e-commerce brand. The automation layer connects multiple data sources and triggers actions based on engagement signals.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Info Business",
          headline: "Instagram lead gen at $0.29 per qualified lead",
          body: "A fully automated pipeline captures Instagram leads, qualifies them through DM sequences, and delivers qualified contacts to the sales team. Zero manual work from capture to handoff.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
        {
          label: "n8n automation examples",
          href: "/n8n-automation-examples-small-business",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is Make cheaper than n8n?",
      answer:
        "At low volume, yes. Make's free tier gives you 1,000 operations per month at zero cost. But pricing scales with usage. Once you pass 10,000 operations per month, n8n self-hosted (which costs $5–$20/month for a server) is cheaper. n8n Cloud at $24/month is comparable to Make's paid plans but without per-operation limits on most tiers. Calculate your monthly operation count before deciding.",
    },
    {
      question: "Which platform is easier to learn?",
      answer:
        "Make has a lower barrier to entry. The interface is cleaner, the templates are more polished, and you can build basic automations in minutes without any technical background. n8n is more powerful but takes a few hours to get comfortable with. If you have any coding experience, n8n's learning curve flattens quickly. If you have never used automation tools before, Make will feel friendlier on day one.",
    },
    {
      question: "Can I migrate my workflows from Make to n8n or vice versa?",
      answer:
        "There is no automatic migration tool. Workflows need to be rebuilt manually on the new platform. Simple workflows (5–10 steps) take 30–60 minutes to recreate. Complex workflows with branching, error handling, and custom logic take longer. If you think you might switch later, document your workflows clearly and keep them modular.",
    },
    {
      question: "Which platform handles AI workflows better?",
      answer:
        "n8n, and it is not close. n8n has native nodes for LLM chains, AI agents, vector stores, document loaders, and tool-calling. You can build a full AI agent workflow visually. Make requires HTTP request modules with manual JSON payloads for any AI integration. If AI automation is part of your plan, n8n saves significant development time.",
    },
    {
      question: "What should I know about self-hosting n8n?",
      answer:
        "Self-hosting gives you full data control and eliminates per-operation costs. You need a basic server ($5–$20/month on Railway, Render, or a VPS) and comfort with Docker or one-click deploy scripts. Maintenance is minimal — updates are straightforward and the community is helpful. If managing a server feels intimidating, n8n Cloud gives you most of the same benefits without the infrastructure work.",
    },
  ],
  faqSubtitle:
    "Practical answers about choosing between n8n and Make",
  ctaHeading: "Not sure which platform fits your automation needs?",
  ctaText:
    "Book a 30-minute call. We will look at what you need to automate, assess your technical comfort level, and recommend the platform that makes the most sense for your specific situation.",
  ctaSubtext:
    "No sales pitch. Just an honest recommendation based on your workflow.",
  relatedLinks: [
    { label: "n8n vs Zapier comparison", href: "/n8n-vs-zapier-small-business" },
    {
      label: "n8n automation examples",
      href: "/n8n-automation-examples-small-business",
    },
    {
      label: "AI automation consultant guide",
      href: "/ai-automation-consultant-small-business",
    },
    {
      label: "GoHighLevel vs custom CRM",
      href: "/gohighlevel-vs-custom-crm-small-business",
    },
  ],
};

export default data;
