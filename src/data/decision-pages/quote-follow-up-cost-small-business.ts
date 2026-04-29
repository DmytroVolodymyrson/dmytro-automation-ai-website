import {
  DollarSign,
  Clock,
  MessageSquare,
  Workflow,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Calculator,
  Users,
  FileText,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "quote-follow-up-cost-small-business",
  metaTitle:
    "Quote Follow-Up Cost for Small Business — Realistic Pricing Guide | Dmytro AI",
  metaDescription:
    "What does quote follow-up automation cost for a small business? Practical pricing for quote-sent triggers, reminder sequences, CRM ownership rules, reply routing, stale-quote escalation, and human handoff after pricing goes out.",
  badgeText: "Quote Follow-Up Pricing",
  badgeIcon: DollarSign,
  h1: "Quote Follow-Up Cost for Small Business",
  heroIntro:
    "Most small service businesses should expect a focused quote-follow-up build to land between $1K and $4K, with monthly running costs usually in the $20-$120 range depending on CRM quality, channel mix, and how much human-handoff logic the quote stage needs. The useful question is not just 'what does quote follow-up cost?' It is 'what part of the quote stage am I actually trying to fix?' A business that only needs one clean reminder after pricing goes out should not buy the same system as a business that needs multi-touch sequencing, stale-quote thresholds, reply routing, ownership rules, and visibility into which sent quotes are quietly dying. This page breaks down realistic quote-follow-up pricing specifically — not broader lead-follow-up pricing, and not a full CRM rebuild — so a small business can budget the narrowest build that protects revenue after pricing is already out.",
  heroSubtext:
    "Below: what different quote-follow-up builds actually cost, what those budget bands buy, what makes the price go up, where small businesses overspend, and when the economics make sense versus when a simple reminder or manual follow-up is still enough.",
  sections: [
    {
      type: "table",
      title: "What quote follow-up automation usually costs",
      subtitle:
        "These are realistic ranges for the most common quote-recovery builds in a small business. Pricing reflects the quote stage specifically — after pricing is sent, before the deal is won or clearly lost:",
      headers: ["Build Cost", "Monthly Running Cost", "Typical Timeline"],
      rows: [
        {
          label: "Basic reminder sequence after the quote is sent",
          values: ["$800-$1.5K", "$20-$40", "3-5 days"],
        },
        {
          label: "Quote-stage follow-up with email/SMS mix and reply routing",
          values: ["$1.5K-$2.8K", "$25-$80", "5-10 days"],
        },
        {
          label: "CRM ownership rules with human handoff when intent returns",
          values: ["$2.2K-$3.5K", "$35-$100", "1-2 weeks"],
        },
        {
          label: "Stale-quote escalation and open-quote visibility",
          values: ["$3K-$4.5K", "$50-$120", "1-3 weeks"],
        },
        {
          label: "Full quote-recovery workflow (all of the above)",
          values: ["$3.5K-$5.5K", "$60-$150", "2-4 weeks"],
        },
      ],
    },
    {
      type: "prose",
      title: "What those budget bands actually buy",
      subtitle:
        "The price only becomes useful when it is tied to the exact quote-stage leak you are trying to fix:",
      blocks: [
        {
          heading: "$800-$1.5K range: one disciplined reminder layer after pricing goes out",
          body: "This is the right band when the business mainly needs a reliable follow-up touch after the quote is sent and the main problem is simply that nobody follows up consistently. The workflow triggers from the sent stage, sends one or two basic reminders, and stops when the buyer replies or the quote is manually updated.",
        },
        {
          heading: "$1.5K-$3K range: a real quote-stage workflow with channel mix and routing",
          body: "This is where the system becomes more useful than a calendar reminder. The workflow may include email plus SMS, approved message variants for predictable hesitation, a clear next step in each touch, and routing back to the right human when the buyer replies. This is the range most small service businesses should benchmark against when the quote stage matters enough to protect properly.",
        },
        {
          heading: "$3K-$5.5K range: visibility, escalation, and cleaner ownership across sent quotes",
          body: "Once the build includes stale-quote thresholds, stage-based escalation, owner or salesperson assignment logic, and visibility into which sent quotes are aging out, you are paying for system design and testing beyond the messages themselves. This band is appropriate when quote recovery is already a meaningful operational leak rather than an occasional annoyance.",
        },
      ],
    },
    {
      type: "cards",
      title: "What makes the price go up",
      subtitle:
        "Quote-follow-up pricing is driven by workflow complexity and process cleanliness, not just by how many reminder messages get sent:",
      items: [
        {
          icon: Workflow,
          title: "How many quote states the workflow has to understand",
          body: "A simple sent-or-not trigger is cheap. A system that tracks sent, viewed, replied, needs revision, stale, won, lost, and do-not-follow-up states costs more because each stage needs rules, stop conditions, and testing.",
        },
        {
          icon: FileText,
          title: "Whether the quote stage is already clean in your CRM or pipeline",
          body: "If there is one reliable quote-sent event and one clear owner, the build is straightforward. If pricing goes out from multiple tools, team members skip pipeline updates, or sent quotes live in inbox threads, extra work is needed just to create a trustworthy trigger.",
        },
        {
          icon: MessageSquare,
          title: "How many channels and message variants are involved",
          body: "Email-only is simpler than email plus SMS. Adding objection-aware branching, financing questions, revision requests, or different follow-up logic by offer type increases copy work, routing logic, and test cases.",
        },
        {
          icon: Users,
          title: "Whether multiple humans share quote-stage ownership",
          body: "If replies sometimes belong to the owner, sometimes to office staff, and sometimes to the salesperson who prepared the quote, the system needs handoff logic and fallback routing. That cross-owner layer adds real build time.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When quote follow-up is worth paying for — and when it is not",
      subtitle:
        "This page is for businesses with a real quote-stage revenue leak, not for owners trying to automate every possible step at once:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth the investment",
          variant: "green",
          items: [
            "You send enough quotes each month that manual follow-up keeps slipping",
            "One recovered quote would cover a meaningful share of the build cost",
            "Your team already gets leads and sends pricing, but too many opportunities fade after that point",
            "The owner or office cannot see which sent quotes are still alive without digging through threads",
            "You want a narrower quote-stage workflow before buying broader CRM or front-office automation",
          ],
        },
        {
          icon: XCircle,
          heading: "A simpler approach is probably enough",
          variant: "neutral",
          items: [
            "You send very few quotes per month",
            "Your real problem is still first response before the quote exists",
            "The team already follows up consistently and the bigger issue is pricing, close rate, or offer quality",
            "You do not have any stable way to tell when a quote was actually sent",
            "A simple manual reminder process would realistically solve the leak for now",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to budget this without overspending",
      subtitle:
        "The most common mistake is buying a broader sales system when the actual leak is just weak quote-stage discipline:",
      items: [
        {
          icon: Calculator,
          title: "Start with the narrowest quote-stage workflow that protects revenue",
          body: "If the problem is simply that nobody sends a reminder after pricing goes out, start with that. Do not jump straight to complex dashboards and escalation logic until the simpler quote-stage workflow proves the leak is deeper than missing follow-up.",
        },
        {
          icon: AlertTriangle,
          title: "Separate build cost from monthly tool cost",
          body: "SMS spend, CRM seats, and hosting are usually ongoing but modest compared with the initial setup. The monthly cost should still be planned up front, especially if follow-up volume is high or the workflow uses multiple channels.",
        },
        {
          icon: Clock,
          title: "Expect tuning after launch",
          body: "Timing, stop rules, stale-quote thresholds, and reply routing almost always need adjustment after the workflow sees real sent quotes. The first version is a disciplined starting point, not a finished permanent setup.",
        },
        {
          icon: TrendingUp,
          title: "Compare the build to one or two recovered deals per month",
          body: "For most small service businesses, that is the right economics test. If one or two recovered quotes per month would cover a meaningful share of the cost, the workflow is usually worth evaluating seriously.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "There is no dedicated published quote-follow-up cost case study on the site yet. The honest proof frame is the live quote-follow-up cluster, the estimate cost child, and the published CRM lifecycle case study:",
      studies: [
        {
          industry: "Live quote-follow-up cluster",
          headline: "The service-business parent plus multiple vertical quote pages already define the real workflow scope this pricing page is costing",
          body: "Insurance, cleaning, solar, pool service, pest control, and auto parts e-commerce all now have dedicated quote-follow-up pages live. This cost page stays narrow by explaining what quote-stage recovery should cost across those contexts without pretending every vertical has the same economics.",
          link: "/quote-follow-up-automation-for-service-businesses",
        },
        {
          industry: "Estimate-recovery sibling cost page",
          headline: "The estimate-follow-up cost child already proves the post-pricing pricing model can stay narrow and commercially useful",
          body: "That page prices the field-service estimate stage after a site visit. This quote-follow-up cost page stays broader by pricing cross-industry quote recovery when the sent quote is the central stage, even if there was no site visit at all.",
          link: "/estimate-follow-up-cost-small-business",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "The WheelsFeels CRM case study proves why stage tracking, ownership clarity, and stale-opportunity visibility have real economic value",
          body: "That project is not a quote-follow-up system, but it is real published proof that recoverable opportunities get lost when stage ownership is messy and follow-up is inconsistent. Those mechanics are exactly what drive quote-follow-up build cost up or down.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
        { label: "Quote follow-up setup for service businesses", href: "/quote-follow-up-setup-for-service-businesses" },
        { label: "Quote follow-up setup vs. DIY for small business", href: "/quote-follow-up-setup-vs-diy-small-business" },
        { label: "Estimate follow-up cost for small business", href: "/estimate-follow-up-cost-small-business" },
        { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
        { label: "AI lead follow-up cost for small business", href: "/ai-lead-follow-up-cost-small-business" },
        { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
    {
      type: "prose",
      title: "What small businesses usually get wrong about quote-follow-up pricing",
      subtitle:
        "These assumptions usually lead to bad buying decisions:",
      blocks: [
        {
          heading: "Treating quote follow-up as the same project as lead follow-up",
          body: "Lead follow-up handles fresh inquiries before pricing exists. Quote follow-up handles the stage after pricing is already out. The trigger, the messaging, the owner, and the economics are different. Pricing one as if it were the other leads to scope creep or a workflow that solves the wrong problem.",
        },
        {
          heading: "Assuming every quote-stage problem needs a full CRM rebuild",
          body: "Sometimes the real leak is simply that sent quotes are not followed up in a disciplined way. In that case, a lighter quote-stage workflow is enough. Broader CRM cleanup or ownership redesign should be added only if the narrower build proves the quote stage itself is still too messy.",
        },
        {
          heading: "Underestimating the cost of stale quotes",
          body: "Owners often normalize sent quotes that quietly die. But if the business sends meaningful pricing every week, those stale opportunities are not just noise. They are recoverable revenue. The right question is whether quote-stage follow-up costs less than the leak it plugs — and for many service businesses, it does.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does quote follow-up automation cost for a small business?",
      answer:
        "For most small service businesses, a focused quote-follow-up build lands between roughly $1K and $4K depending on how clean the quote stage already is, whether the workflow uses email plus SMS, how many ownership or routing rules are needed, and whether stale-quote escalation is part of the scope. Monthly running costs are usually about $20-$120.",
    },
    {
      question: "How is this different from estimate follow-up cost?",
      answer:
        "Estimate follow-up cost is narrower and more field-service specific. It prices the workflow after a site visit or inspection, where estimator handoff and open-estimate visibility matter. Quote follow-up cost is broader: it prices quote-stage recovery across service-business contexts, even when there was no site visit at all.",
    },
    {
      question: "Can I start with a basic reminder and add more logic later?",
      answer:
        "Yes. That is usually the right approach. Start with the narrowest quote-stage reminder workflow that protects revenue, then add stale-quote escalation, reply routing, or ownership logic once the simpler version proves the leak is deeper than missing follow-up.",
    },
    {
      question: "What makes quote follow-up automation expensive?",
      answer:
        "The biggest cost drivers are messy quote-stage triggers, multiple owners at the quote stage, channel mix across email and SMS, objection-aware branching, and whether the workflow has to track stale quotes and route live replies with context back to the right human.",
    },
    {
      question: "How do I know if quote follow-up automation is worth the cost?",
      answer:
        "Look at how many sent quotes go cold each month and what one recovered deal is worth. If one or two recovered quotes per month would cover a meaningful share of the build, the economics usually justify at least a narrower first version.",
    },
  ],
  faqSubtitle:
    "Practical answers about budgeting quote follow-up automation for a small business",
  ctaHeading: "Want a realistic quote for your quote-follow-up workflow?",
  ctaText:
    "Book a 30-minute call. We will look at how your business handles sent quotes now, where opportunities are going cold after pricing, and scope the narrowest build that protects revenue without overbuilding the rest of your front office.",
  ctaSubtext:
    "No padded proposal. Just a practical scope and pricing discussion tied to your quote stage, your current tools, and your actual follow-through problem.",
  relatedLinks: [
    { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
    { label: "Quote follow-up setup for service businesses", href: "/quote-follow-up-setup-for-service-businesses" },
    { label: "Quote follow-up setup vs. DIY for small business", href: "/quote-follow-up-setup-vs-diy-small-business" },
    { label: "Quote follow-up ROI for small business", href: "/quote-follow-up-roi-small-business" },
    { label: "Estimate follow-up cost for small business", href: "/estimate-follow-up-cost-small-business" },
    { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
    { label: "AI lead follow-up cost for small business", href: "/ai-lead-follow-up-cost-small-business" },
    { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
    { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
    { label: "Case studies", href: "/case-studies" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
