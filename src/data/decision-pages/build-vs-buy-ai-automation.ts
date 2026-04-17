import {
  Scale,
  Wrench,
  ShoppingCart,
  Layers,
  DollarSign,
  Clock,
  AlertTriangle,
  Zap,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "build-vs-buy-ai-automation",
  metaTitle:
    "Build vs Buy AI Automation for Small Business — Decision Guide | Dmytro AI",
  metaDescription:
    "Should you build custom AI automation or buy off-the-shelf SaaS? Compare costs, timelines, flexibility, and long-term ownership for small businesses.",
  badgeText: "Decision Guide",
  badgeIcon: Scale,
  h1: "Build vs Buy AI Automation for Small Business",
  heroIntro:
    "You can subscribe to a SaaS tool that does 70% of what you need by tomorrow. Or you can hire someone to build a system that does exactly what you need in 3-6 weeks. Or you can mix both. Each path has real tradeoffs in cost, speed, and flexibility. This guide lays them out honestly.",
  heroSubtext:
    "Below: the three paths, real cost comparisons, when each makes sense, and the mistakes most businesses make.",
  sections: [
    {
      type: "cards",
      title: "Three paths to AI automation",
      subtitle:
        "Each approach trades off differently on speed, cost, and control:",
      items: [
        {
          icon: Wrench,
          title: "Build custom with a consultant",
          body: "A consultant diagnoses your workflow, designs a system around it, and builds it using tools like n8n, VAPI, and custom APIs. You get exactly what your business needs. Setup takes 2-6 weeks and costs $2K-$8K upfront, but monthly costs stay low ($20-$100) and you own everything. Best when your workflow does not fit neatly into any existing product.",
        },
        {
          icon: ShoppingCart,
          title: "Buy off-the-shelf SaaS",
          body: "Subscribe to a platform like GoHighLevel, HubSpot, or Calendly and configure it to fit your process. Working within hours, not weeks. Monthly cost is predictable ($50-$500/month). You get updates and support included. Best when a proven product already solves your exact problem and you do not need deep customization.",
        },
        {
          icon: Layers,
          title: "Hybrid approach",
          body: "Use SaaS tools where they fit (CRM, booking, email) and build custom automation to fill the gaps (AI lead scoring, voice agents, custom integrations). Most mature small businesses end up here. You get speed from SaaS and precision from custom builds. Costs more to set up but avoids the worst tradeoffs of either pure approach.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "How the three approaches compare across the factors that drive most decisions:",
      headers: ["Build Custom", "Buy SaaS", "Hybrid"],
      rows: [
        {
          label: "Upfront cost",
          values: [
            "$2K–$8K",
            "$0–$500 (setup + first month)",
            "$2K–$5K (custom pieces)",
          ],
        },
        {
          label: "Ongoing cost",
          values: [
            "$20–$100/month (hosting, APIs)",
            "$50–$500/month (subscription)",
            "$100–$400/month (combined)",
          ],
        },
        {
          label: "Customization",
          values: [
            "Unlimited — built to your spec",
            "Within platform limits",
            "High — SaaS where it fits, custom where it doesn't",
          ],
        },
        {
          label: "Time to value",
          values: [
            "2–6 weeks",
            "Hours to days",
            "1–4 weeks for initial setup",
          ],
        },
        {
          label: "Ownership",
          values: [
            "You own everything",
            "Vendor owns the platform and your data lives there",
            "Mixed — you own custom pieces, vendor owns SaaS",
          ],
        },
        {
          label: "Integration depth",
          values: [
            "Deep — connects to anything with an API",
            "Limited to native integrations and Zapier-style bridges",
            "Deep where custom, standard where SaaS",
          ],
        },
        {
          label: "Maintenance",
          values: [
            "You or your consultant maintain it",
            "Vendor handles updates and bugs",
            "Split — vendor updates SaaS, you maintain custom",
          ],
        },
        {
          label: "Best for",
          values: [
            "Unique workflows, AI-heavy use cases",
            "Standard processes, fast deployment",
            "Businesses that outgrow pure SaaS but want proven foundations",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each approach makes sense",
      subtitle:
        "The right path depends on your workflow, timeline, and how standard your needs are:",
      options: [
        {
          icon: Wrench,
          heading: "Build custom when...",
          highlighted: true,
          items: [
            "No existing SaaS product does what you need without workarounds",
            "You need AI capabilities like voice agents, custom lead scoring, or intelligent routing",
            "You want full data ownership and no vendor lock-in",
            "Your volume is high enough that per-seat or per-operation SaaS pricing gets expensive",
            "Your competitive advantage depends on a workflow that off-the-shelf tools cannot replicate",
          ],
        },
        {
          icon: ShoppingCart,
          heading: "Buy off-the-shelf when...",
          highlighted: false,
          items: [
            "Your need is standard — CRM, email marketing, booking, invoicing",
            "You need something working this week, not next month",
            "You do not have budget for a custom build right now",
            "A proven product already has the features you need and your team can configure it",
            "You are early-stage and your processes are still changing frequently",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What most businesses get wrong",
      subtitle:
        "These mistakes cost more than choosing the wrong platform:",
      items: [
        {
          icon: AlertTriangle,
          title: "Over-building when SaaS would have worked",
          body: "Some businesses spend $5K building a custom CRM when GoHighLevel at $97/month would have solved 90% of their needs. Custom builds make sense when your workflow is genuinely unique. If your process is standard lead capture, follow-up, and booking, a SaaS tool gets you there faster and cheaper in year one.",
        },
        {
          icon: DollarSign,
          title: "Under-buying when custom is clearly needed",
          body: "The opposite mistake: forcing your workflow into a SaaS tool that does not fit. You end up with manual workarounds, duct-taped integrations, and staff spending hours on tasks the tool was supposed to automate. If you are paying $300/month for SaaS and still doing significant manual work, the tool is not solving your problem.",
        },
        {
          icon: Clock,
          title: "Ignoring the maintenance burden of custom builds",
          body: "Custom systems need someone to maintain them. APIs change, edge cases surface, and workflows need updating as your business evolves. Budget $50-$200/month for ongoing maintenance or have a consultant on retainer. A custom build with no maintenance plan degrades within 6-12 months.",
        },
        {
          icon: Zap,
          title: "Underestimating SaaS vendor lock-in",
          body: "When your contacts, workflows, and automations live inside a vendor's platform, switching costs compound over time. After 18 months on a platform, migration is painful regardless of how frustrated you are. If long-term flexibility matters, factor in data portability and export capabilities before signing up.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "How real businesses approached this decision",
      subtitle:
        "Different situations call for different approaches:",
      studies: [
        {
          industry: "Restaurant",
          headline: "Custom voice agent for a problem SaaS could not solve",
          body: "A NYC restaurant needed an AI phone agent that handles reservations, answers menu questions, and routes urgent calls — in a specific conversational style. No off-the-shelf tool could do this. Custom build with VAPI and n8n handles 100% of after-hours calls with zero manual intervention.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce",
          headline: "Hybrid approach: SaaS CRM with custom automation layer",
          body: "An e-commerce brand used their existing CRM for contact management but built custom automation for lead scoring, follow-up sequencing, and engagement tracking across 5,600+ leads. The SaaS handled storage; custom automation handled the intelligence.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Info Business",
          headline: "Fully custom pipeline replacing manual lead qualification",
          body: "An info business replaced their manual Instagram lead process with a fully automated pipeline. Custom-built DM sequences qualify leads at $0.29 each with zero human involvement. No SaaS tool offered this level of platform-specific automation.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
        {
          label: "AI automation ROI guide",
          href: "/ai-automation-roi-guide",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "When is building cheaper than buying long-term?",
      answer:
        "Typically when your SaaS costs exceed $200/month and you are still working around the tool's limitations. A $4K custom build with $50/month in hosting costs breaks even with a $200/month SaaS in about 22 months. After that, the custom build is dramatically cheaper every month. If your SaaS costs less than $100/month and does the job well, building custom rarely makes financial sense.",
    },
    {
      question: "How long does a custom AI automation build take?",
      answer:
        "For a single workflow — like a voice agent, lead follow-up sequence, or custom integration — expect 1-3 weeks from scoping to launch. For a multi-workflow system with CRM integration, AI components, and multiple triggers, plan for 3-6 weeks. Complexity drives timeline more than features. A simple system with three tight automations launches faster than a complex system with one.",
    },
    {
      question: "Can I start with SaaS and switch to custom later?",
      answer:
        "Yes, and many businesses do this successfully. The key is documenting your processes and keeping your data exportable from day one. When you outgrow the SaaS, a consultant can build custom replacements for the pieces that do not fit while keeping the SaaS tools that still work. Expect 2-4 weeks for migration of core workflows.",
    },
    {
      question: "Who maintains a custom build after it launches?",
      answer:
        "Either your consultant on a maintenance retainer ($100-$300/month typical) or an in-house team member with basic technical skills. Well-built custom automations using tools like n8n require minimal ongoing maintenance — mostly monitoring, occasional updates when APIs change, and workflow adjustments as your business evolves. The key is building simple, documented systems from the start.",
    },
    {
      question: "What if my business needs change after I build?",
      answer:
        "Custom builds are generally easier to modify than SaaS workarounds. Adding a new workflow, changing routing logic, or connecting a new tool is straightforward when you own the system. With SaaS, changes are limited to what the platform allows. The tradeoff is that custom changes require technical work, while SaaS changes are often just configuration. A hybrid approach gives you the most flexibility for evolving needs.",
    },
  ],
  faqSubtitle:
    "Honest answers about building vs buying AI automation",
  ctaHeading: "Need help deciding what to build and what to buy?",
  ctaText:
    "Book a 30-minute call. We will walk through your current tools and workflows, identify where SaaS is enough and where custom makes sense, and give you a clear plan with realistic costs and timelines.",
  ctaSubtext:
    "No pressure to build anything. Sometimes the answer is a better SaaS tool.",
  relatedLinks: [
    {
      label: "AI automation consultant guide",
      href: "/ai-automation-consultant-small-business",
    },
    {
      label: "Consultant vs agency comparison",
      href: "/hire-ai-automation-consultant-vs-agency",
    },
    { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
    {
      label: "Consultant pricing guide",
      href: "/ai-automation-consultant-pricing-small-business",
    },
    {
      label: "Automation without a tech team",
      href: "/ai-automation-for-businesses-without-a-tech-team",
    },
  ],
};

export default data;
