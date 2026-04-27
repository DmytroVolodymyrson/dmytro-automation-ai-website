import {
  Scale,
  LayoutDashboard,
  Building2,
  DollarSign,
  Clock,
  AlertTriangle,
  Zap,
  Users,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "gohighlevel-vs-hubspot-small-business",
  metaTitle:
    "GoHighLevel vs HubSpot for Small Business | Dmytro AI",
  metaDescription:
    "Practical comparison of GoHighLevel and HubSpot for small service businesses. Pricing, marketing automation, sales pipeline, onboarding complexity, and when each platform actually fits.",
  badgeText: "Platform Comparison",
  badgeIcon: Scale,
  h1: "GoHighLevel vs HubSpot for Small Business",
  heroIntro:
    "GoHighLevel is an all-in-one marketing CRM built for agencies and service businesses — SMS, email, funnels, booking, and reputation in one platform for $97–$497/month. HubSpot is a deeper CRM and reporting ecosystem with a generous free tier that scales into expensive paid hubs. For small service businesses, the right choice depends on what you actually need running today, not what looks better on a feature list.",
  heroSubtext:
    "Below: real pricing math, feature comparison, onboarding complexity, and when each platform wins for small businesses.",
  sections: [
    {
      type: "cards",
      title: "Two different philosophies for running your business",
      subtitle:
        "Both platforms call themselves CRMs, but they solve different problems:",
      items: [
        {
          icon: LayoutDashboard,
          title: "GoHighLevel (GHL)",
          body: "All-in-one marketing and sales platform: CRM, SMS/email marketing, funnels, appointment booking, reputation management, and pipeline tracking in a single tool. Built for agencies and service businesses that want everything in one login. You get breadth, not depth.",
        },
        {
          icon: Building2,
          title: "HubSpot",
          body: "CRM-first platform with separate hubs for marketing, sales, service, and operations. Free CRM tier is genuinely useful. Paid hubs unlock marketing automation, advanced reporting, and custom objects. You get depth and ecosystem, but complexity and cost scale fast.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "How GoHighLevel and HubSpot compare across the factors that matter for small service businesses:",
      headers: ["GoHighLevel", "HubSpot"],
      rows: [
        {
          label: "Starting price",
          values: ["$97/month (Starter)", "Free CRM; $20/month (Starter)"],
        },
        {
          label: "Full marketing automation",
          values: ["Included in all plans", "$890/month (Marketing Hub Pro)"],
        },
        {
          label: "SMS + calling built in",
          values: [
            "Yes — pay per message/minute",
            "No native SMS; calling in paid Sales Hub",
          ],
        },
        {
          label: "Funnel / landing page builder",
          values: ["Built in", "Paid Marketing Hub only"],
        },
        {
          label: "Appointment booking",
          values: [
            "Built in with round-robin",
            "Built in (limited free; full in paid)",
          ],
        },
        {
          label: "Reputation management",
          values: [
            "Built in — review requests + monitoring",
            "Not native; requires integrations",
          ],
        },
        {
          label: "Reporting depth",
          values: [
            "Basic — pipeline, source, conversion",
            "Deep — custom reports, attribution, dashboards",
          ],
        },
        {
          label: "CRM customization",
          values: [
            "Custom fields, limited objects",
            "Custom objects, properties, calculated fields",
          ],
        },
        {
          label: "Onboarding complexity",
          values: [
            "Moderate — many features, fewer guard rails",
            "Low for free CRM; high for paid hubs",
          ],
        },
        {
          label: "Ecosystem / integrations",
          values: [
            "Growing — API + Zapier/n8n",
            "Large — 1,500+ native integrations",
          ],
        },
        {
          label: "Best for",
          values: [
            "Service businesses that need marketing + CRM in one tool",
            "Businesses that need deep CRM, reporting, or complex sales processes",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each platform makes sense",
      subtitle:
        "The right choice depends on what your business actually needs running, not which platform has more features:",
      options: [
        {
          icon: LayoutDashboard,
          heading: "GoHighLevel fits when…",
          highlighted: false,
          items: [
            "You need SMS, email, booking, funnels, and reputation management in one platform",
            "You run a service business and want marketing automation without paying $890+/month",
            "Your sales process is straightforward: lead comes in, qualify, book, close",
            "You want to send review requests and manage your Google reputation from the same tool",
            "You are an agency managing multiple client accounts under one roof",
          ],
        },
        {
          icon: Building2,
          heading: "HubSpot fits when…",
          highlighted: false,
          items: [
            "You need a deep CRM with custom objects, properties, and advanced reporting",
            "You have a longer or more complex sales cycle with multiple touchpoints",
            "Your team already uses HubSpot's free CRM and needs to scale",
            "You need attribution reporting to understand which channels drive revenue",
            "You rely heavily on third-party integrations that have native HubSpot connectors",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "The real pricing math",
      subtitle:
        "Sticker price is misleading for both platforms. Here is what small businesses actually pay:",
      blocks: [
        {
          heading: "GoHighLevel: $97/month sounds cheap — what it actually costs",
          body: "The Starter plan is $97/month ($1,164/year). The Unlimited plan is $297/month. Agency Pro is $497/month. On top of that, SMS costs $0.0079/segment, calls $0.013/minute, and WhatsApp messages extra. A typical small service business running active follow-up sequences spends $150–$300/month all-in. But you get SMS, email, funnels, booking, and reputation in that price — features that would cost $500–$1,000+/month on HubSpot's paid hubs.",
        },
        {
          heading: "HubSpot: free tier is real, but paid hubs add up fast",
          body: "HubSpot's free CRM is genuinely useful: contacts, deals, tasks, email tracking, and basic reporting at no cost. But the moment you need marketing automation (workflows, sequences, lead scoring), you are looking at Marketing Hub Professional at $890/month. Sales Hub Professional is $100/user/month. A small business running both hubs with 3 users could easily pay $1,200–$1,500/month. That is 5–10x what GoHighLevel costs for similar marketing automation.",
        },
        {
          heading: "The hidden cost: what you pay in time",
          body: "GoHighLevel's setup is straightforward but wide — there are many features and the platform does not guide you through configuration in a structured way. HubSpot's free tier is easy to start, but paid hubs require serious onboarding to use well. Both platforms have a learning curve. The question is whether you are paying that cost in money (HubSpot) or in time navigating a less polished interface (GoHighLevel).",
        },
      ],
    },
    {
      type: "considerations",
      title: "What to watch out for",
      subtitle:
        "Common traps that catch small businesses choosing between these platforms:",
      items: [
        {
          icon: DollarSign,
          title: "Do not buy HubSpot hubs you will not use",
          body: "HubSpot's free CRM is excellent. But many small businesses buy Marketing Hub Professional thinking they need it, then use 10% of the features. If your main need is email sequences and basic automation, GoHighLevel or even HubSpot's Starter tier may be enough. Do not pay $890/month for a feature list you will not touch.",
        },
        {
          icon: AlertTriangle,
          title: "Do not assume GoHighLevel replaces a proper CRM",
          body: "GoHighLevel is strong on marketing and lead follow-up, but its CRM is simpler than HubSpot's. If your business needs custom objects, complex deal pipelines with multiple stages and dependencies, or deep reporting, GoHighLevel will feel limiting. Know which problem you are solving.",
        },
        {
          icon: Clock,
          title: "Factor in migration pain",
          body: "Moving between GoHighLevel and HubSpot is not trivial. Contact exports work, but workflows, sequences, funnels, and automations do not transfer. Budget 2–4 weeks for a real migration. Pick a platform you can commit to for at least 12–18 months.",
        },
        {
          icon: Zap,
          title: "The platform matters less than the automation",
          body: "A well-configured GoHighLevel account with tight follow-up sequences will outperform a sprawling HubSpot setup where nobody built the workflows. The tool is just the container — what matters is lead response speed, sequence quality, and whether the automations actually run reliably.",
        },
      ],
    },
    {
      type: "prose",
      title: "When neither platform is the right answer",
      subtitle:
        "Sometimes the honest recommendation is not GoHighLevel or HubSpot:",
      blocks: [
        {
          heading: "When a custom or hybrid approach wins",
          body: "If your workflow is genuinely unique — industry-specific dispatch logic, custom qualification routing, or operational CRM needs that neither platform handles well — a purpose-built system using tools like n8n, Supabase, or a custom stack may be the better investment. Some businesses use GoHighLevel for marketing (SMS, email, reputation) and a separate tool for operational CRM. That hybrid approach costs more upfront but avoids forcing your workflow into a platform that was not designed for it.",
        },
        {
          heading: "Adjacent proof: CRM automation done right",
          body: "We built a custom CRM and follow-up automation system for an auto parts e-commerce business (WheelsFeels) that reduced response time from hours to minutes and systematized follow-up that previously depended on individual reps remembering to check a spreadsheet. The tool choice mattered less than the automation design — getting the right message to the right lead at the right time, reliably, without manual intervention. That principle applies whether you are on GoHighLevel, HubSpot, or a custom build.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "Can I start with HubSpot free and switch to GoHighLevel later?",
      answer:
        "Yes. HubSpot's free CRM is a reasonable starting point. Export your contacts and deal data before switching. The main friction is rebuilding automations, sequences, and any funnels — those do not transfer. Plan 2–4 weeks for migration if you have active workflows.",
    },
    {
      question: "Is GoHighLevel good enough for a service business that just needs follow-up and booking?",
      answer:
        "For most small service businesses, yes. GoHighLevel handles lead capture, SMS/email follow-up sequences, appointment booking, and review requests well. If your sales process is lead → qualify → book → close, GoHighLevel covers it at a fraction of HubSpot's paid hub cost. Where it falls short is advanced reporting and complex multi-stage pipelines.",
    },
    {
      question: "Does HubSpot have SMS marketing?",
      answer:
        "Not natively the way GoHighLevel does. HubSpot has added some SMS capabilities through integrations and beta features, but it is not a built-in, first-class feature like in GoHighLevel. If SMS follow-up is core to your business, GoHighLevel is significantly stronger here.",
    },
    {
      question: "Which platform is easier to set up?",
      answer:
        "HubSpot's free CRM is easier to get started with — the interface is more polished and the onboarding is better structured. GoHighLevel gives you more features out of the box but less guidance on how to configure them. Both platforms benefit from expert setup if you want automations running properly from day one.",
    },
    {
      question: "What if I need features from both platforms?",
      answer:
        "That is common. Some businesses use GoHighLevel for marketing automation (SMS, email sequences, funnels, reputation) and HubSpot's free CRM for contact management and reporting. The two can sync via Zapier or n8n. A custom integration layer adds cost but gives you the best of both worlds without paying for HubSpot's expensive paid hubs.",
    },
  ],
  faqSubtitle:
    "Practical answers about choosing between GoHighLevel and HubSpot for small businesses",
  ctaHeading: "Not sure which platform fits your business?",
  ctaText:
    "Book a 30-minute call. We will look at your current workflow, compare what each platform would actually cost for your situation, and figure out whether GoHighLevel, HubSpot, a hybrid, or something else entirely is the smarter move.",
  ctaSubtext: "No pressure. Just clarity on your options.",
  relatedLinks: [
    {
      label: "GoHighLevel vs. custom CRM",
      href: "/gohighlevel-vs-custom-crm-small-business",
    },
    {
      label: "GoHighLevel automation setup help",
      href: "/gohighlevel-automation-setup",
    },
    {
      label: "GoHighLevel setup cost for small business",
      href: "/gohighlevel-setup-cost-small-business",
    },
    {
      label: "E-commerce CRM case study (WheelsFeels)",
      href: "/case-studies/ecommerce-crm-automation",
    },
    {
      label: "All guides",
      href: "/guides",
    },
  ],
};

export default data;
