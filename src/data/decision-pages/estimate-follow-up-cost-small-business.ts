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
  slug: "estimate-follow-up-cost-small-business",
  metaTitle:
    "Estimate Follow-Up Cost for Small Business — Realistic Pricing Guide | Dmytro AI",
  metaDescription:
    "What does estimate follow-up automation cost for a small business? Practical pricing for stage-based reminders, CRM routing, stale-estimate escalation, and estimator handoff after the site visit.",
  badgeText: "Estimate Follow-Up Pricing",
  badgeIcon: DollarSign,
  h1: "Estimate Follow-Up Cost for Small Business",
  heroIntro:
    "Most small service businesses should expect a focused estimate-follow-up build to land between $1.5K and $4.5K, with monthly running costs in the $25-$120 range depending on CRM, messaging volume, and whether escalation logic routes to an estimator or the office. The useful question is not 'how cheap can estimate follow-up get?' It is 'what stage of the estimate lifecycle am I actually automating?' A business that only needs a reminder two days after the estimate was sent should not buy the same system as a business that needs stage-based sequencing, stale-estimate escalation, estimator-to-office handoff, and open-estimate visibility across the whole pipeline. This page breaks down realistic cost ranges for estimate follow-up automation specifically — not broader lead-follow-up pricing, and not general AI automation cost — so you can budget the right first build for the gap between 'estimate sent' and 'job booked or lost.'",
  heroSubtext:
    "Below: what different estimate-follow-up builds actually cost, what those budget bands buy, what drives the price up, where small businesses overspend, and when the math makes sense versus when a simpler reminder handles the real need.",
  sections: [
    {
      type: "table",
      title: "What estimate follow-up automation usually costs",
      subtitle:
        "These are realistic small-business ranges for the most common estimate-recovery builds. Pricing reflects the narrow estimate-stage workflow, not broader lead follow-up or full CRM automation:",
      headers: ["Build Cost", "Monthly Running Cost", "Typical Timeline"],
      rows: [
        {
          label: "Basic reminder sequence (estimate sent trigger)",
          values: ["$800-$1.5K", "$20-$50", "3-5 days"],
        },
        {
          label: "Stage-based follow-up with objection-aware messaging",
          values: ["$1.5K-$2.8K", "$25-$80", "5-10 days"],
        },
        {
          label: "CRM/job-management routing with estimator handoff",
          values: ["$2.5K-$4K", "$40-$120", "1-2 weeks"],
        },
        {
          label: "Stale-estimate escalation and open-estimate dashboard",
          values: ["$3K-$4.5K", "$50-$120", "1-3 weeks"],
        },
        {
          label: "Full estimate-lifecycle workflow (all of the above)",
          values: ["$3.5K-$5.5K", "$60-$150", "2-4 weeks"],
        },
      ],
    },
    {
      type: "prose",
      title: "What those budget bands actually buy",
      subtitle:
        "The number only becomes useful when you tie it to the specific estimate-stage problem you are solving:",
      blocks: [
        {
          heading: "$800-$1.5K range: simple reminder after the estimate is sent",
          body: "This is the band for businesses that mainly need a structured nudge at day 2, day 5, and maybe day 10 after the estimate leaves the office. No CRM routing, no escalation, no estimator handoff — just a reliable reminder sequence triggered by the estimate-sent stage in your pipeline or job-management tool. It is the right first project when the core leak is simply that nobody follows up at all.",
        },
        {
          heading: "$1.5K-$3K range: objection-aware messaging and basic routing",
          body: "This is where the system starts addressing why estimates stall — price comparison, timing hesitation, spouse decision, scope uncertainty — with approved messaging instead of generic check-ins. It usually includes basic CRM or job-management integration so the estimate stage updates when the homeowner re-engages, and a notification to the estimator or office when a reply comes in. This is the range most field-service businesses should benchmark against when they want a real workflow instead of a calendar reminder.",
        },
        {
          heading: "$3K-$5.5K range: full estimate-lifecycle visibility and escalation",
          body: "Once the build includes stale-estimate escalation (flagging estimates that have sat open past a threshold), open-estimate dashboards, estimator-to-office handoff rules, and stop conditions for when the job is won, lost, or rescheduled, you are paying for system design and testing beyond the messages themselves. This band is appropriate when the owner or office manager needs to see how many estimates are sitting open, which estimators have the most stale quotes, and whether jobs are dying quietly.",
        },
      ],
    },
    {
      type: "cards",
      title: "What makes the price go up",
      subtitle:
        "Estimate follow-up pricing is driven by workflow complexity and CRM state, not by the word 'automation' in the proposal:",
      items: [
        {
          icon: Workflow,
          title: "How many estimate stages the workflow has to track",
          body: "A simple sent-or-not trigger is cheap. A system that tracks sent, viewed, follow-up-1, follow-up-2, re-engaged, stale, won, and lost stages costs more because each transition needs rules, stop conditions, and tested handoff logic.",
        },
        {
          icon: FileText,
          title: "Whether the CRM or job tool supports clean estimate events",
          body: "If your CRM, Jobber, ServiceTitan, Housecall Pro, or whatever tool you use already fires a clean event when the estimate is sent, the trigger is straightforward. If the estimate lives in a spreadsheet or the tool has no API, custom work is needed to create the trigger.",
        },
        {
          icon: MessageSquare,
          title: "How many channels and message variants are involved",
          body: "Email-only is cheaper than email plus SMS. Adding objection-specific branching, financing mentions, or seasonal urgency language increases copy work and testing. Each variant needs its own stop condition so the homeowner does not get conflicting messages.",
        },
        {
          icon: Users,
          title: "Whether estimator-to-office handoff is part of the build",
          body: "If the estimator who visited the site needs to be notified when the homeowner replies, the system needs assignment logic, context passing, and fallback routing for when the estimator is unavailable. That handoff layer adds real build time.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this is worth paying for — and when a simpler reminder is enough",
      subtitle:
        "This page is for businesses with a real estimate-recovery problem, not businesses automating for the sake of it:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth the investment",
          variant: "green",
          items: [
            "Your team sends enough estimates that manual follow-up keeps slipping through the cracks",
            "One recovered job from a stale estimate would cover a meaningful share of the build cost",
            "You have a CRM or job-management tool that tracks estimate stages (even roughly)",
            "Your estimators are already busy with new site visits and cannot reliably circle back on open quotes",
            "You want visibility into how many estimates are sitting open and where they stall",
          ],
        },
        {
          icon: XCircle,
          heading: "A simpler approach is probably enough",
          variant: "neutral",
          items: [
            "Estimate volume is low enough that a manual calendar reminder per quote is still realistic",
            "The main problem is pricing or scope positioning, not follow-up discipline",
            "You do not have a CRM or job tool — estimates live in email or paper and there is no reliable trigger",
            "Your close rate is already strong and estimates rarely go cold",
            "You want full pipeline automation before proving the narrower estimate-recovery workflow",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to budget this without overspending",
      subtitle:
        "The most common mistake is buying more estimate-lifecycle system than the bottleneck requires:",
      items: [
        {
          icon: Calculator,
          title: "Start with the narrowest workflow that recovers revenue",
          body: "If estimates mainly die because nobody follows up at all, a basic reminder sequence is the right first build. Do not jump to full escalation dashboards and estimator handoff until the simpler version proves the leak is deeper than missing reminders.",
        },
        {
          icon: AlertTriangle,
          title: "Budget for monthly tool costs separately",
          body: "CRM seats, SMS sending, and hosting are ongoing costs. For most small businesses using an existing CRM or job-management tool, the incremental monthly cost for estimate follow-up is modest — but it should be planned, not discovered after launch.",
        },
        {
          icon: Clock,
          title: "Expect two to four weeks of tuning after launch",
          body: "Reminder timing, message copy, escalation thresholds, and stop conditions almost always need adjustment once the workflow touches real estimates. The first version is a starting point, not a finished product.",
        },
        {
          icon: TrendingUp,
          title: "Compare cost to one recovered estimate per month",
          body: "For most contractors, roofers, plumbers, painters, and other field-service businesses, one job recovered from a stale estimate per month is the right sanity check. If that value covers a meaningful share of the build, the economics are usually reasonable.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "This page uses direct cluster proof and adjacent case-study proof already published on the site. The exact vertical may differ, but the estimate-recovery economics are the same:",
      studies: [
        {
          industry: "E-commerce / CRM workflow complexity",
          headline: "The vehicle accessories case study shows what pipeline-stage automation looks like at scale",
          body: "The e-commerce CRM case study is adjacent proof for the higher end of estimate-follow-up pricing. Once the workflow tracks multiple pipeline stages, routes to different owners, and needs stop conditions across channels, the build cost reflects system design — not just message sending.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Field service / estimate cluster",
          headline: "Live estimate-follow-up pages define the operational scope",
          body: "The estimate follow-up parent page and vertical children for contractors, roofers, plumbers, painters, landscapers, electricians, and auto repair shops already explain what the workflow handles operationally. This cost page stays narrow by focusing specifically on what those builds should cost for a small business.",
          link: "/estimate-follow-up-automation-for-service-businesses",
        },
        {
          industry: "HVAC / contractor CRM",
          headline: "Contractor CRM pages show the integration layer that drives cost",
          body: "The CRM automation pages for contractors cover the integration and stage-tracking work that often determines whether an estimate-follow-up build lands at $1.5K or $4K. When the CRM is already clean, the estimate trigger is cheaper. When it needs cleanup, the project scope grows.",
          link: "/crm-automation-for-contractors",
        },
      ],
      links: [
        { label: "Estimate follow-up automation for service businesses", href: "/estimate-follow-up-automation-for-service-businesses" },
        { label: "Estimate follow-up setup for service businesses", href: "/estimate-follow-up-setup-for-service-businesses" },
        { label: "Estimate follow-up setup mistakes for small business", href: "/estimate-follow-up-setup-mistakes-small-business" },
        { label: "Estimate follow-up ROI for small business", href: "/estimate-follow-up-roi-small-business" },
        { label: "Estimate follow-up setup vs. DIY for small business", href: "/estimate-follow-up-setup-vs-diy-small-business" },
        { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
        { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
        { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
        { label: "AI lead follow-up cost for small business", href: "/ai-lead-follow-up-cost-small-business" },
        { label: "CRM automation setup cost for contractors", href: "/crm-automation-setup-cost-for-contractors" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
    {
      type: "prose",
      title: "What small businesses usually get wrong about estimate follow-up pricing",
      subtitle:
        "These are the assumptions that create bad buying decisions:",
      blocks: [
        {
          heading: "Treating estimate follow-up as the same project as lead follow-up",
          body: "Lead follow-up handles incoming inquiries before the estimate. Estimate follow-up handles the stage after the site visit and estimate delivery. The triggers, messaging, handoff logic, and CRM stages are different. Pricing one as if it were the other leads to scoping problems.",
        },
        {
          heading: "Buying full pipeline automation when the leak is just missing reminders",
          body: "If estimates go cold because nobody sends a follow-up text at day 3, a $1K reminder sequence fixes the problem. Jumping to a $5K pipeline system for what is fundamentally a reminder gap wastes money and delays the payback.",
        },
        {
          heading: "Ignoring the cost of stale estimates",
          body: "Owners often treat lost estimates as normal business friction. It is not normal — it is revenue that walked away because the follow-up was not there. The question is whether the automation costs less than the leak it plugs, and for most field-service businesses sending more than a few estimates per week, it does.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does estimate follow-up automation cost for a small business?",
      answer:
        "For most small service businesses, a focused estimate-follow-up build lands between $1.5K and $4.5K depending on how many estimate stages the workflow tracks, whether it includes CRM or job-management routing, and whether estimator handoff and stale-estimate escalation are part of the scope. Monthly running costs are usually $25-$120.",
    },
    {
      question: "How is this different from lead follow-up cost?",
      answer:
        "Lead follow-up covers the stage before the estimate — responding to inquiries, qualifying interest, and booking the site visit. Estimate follow-up covers the stage after the estimate is sent — reminders, objection handling, estimator handoff, and stale-estimate visibility. The triggers, messaging, and CRM integration points are different, so the pricing reflects a different workflow.",
    },
    {
      question: "Can I start with a basic reminder and add escalation later?",
      answer:
        "Yes. That is usually the right approach. Start with a structured reminder sequence triggered by the estimate-sent stage, then add stale-estimate escalation, estimator handoff, or open-estimate dashboards once the simpler version proves the leak is deeper than missing follow-up.",
    },
    {
      question: "What CRM or job tool do I need for this to work?",
      answer:
        "Any tool that can mark when an estimate is sent — GoHighLevel, Jobber, ServiceTitan, Housecall Pro, or even a clean spreadsheet with a webhook. The more cleanly your tool tracks estimate stages, the cheaper and faster the build. If estimates live only in email or paper, custom work is needed to create the trigger.",
    },
    {
      question: "How do I know if estimate follow-up automation is worth the cost?",
      answer:
        "Look at how many estimates go cold each month and what one recovered job is worth. For most field-service businesses, one extra booked job per month from a stale estimate covers a meaningful share of the build cost within the first few months.",
    },
  ],
  faqSubtitle:
    "Practical answers about budgeting estimate follow-up automation for a small business",
  ctaHeading: "Want a realistic quote for your estimate follow-up workflow?",
  ctaText:
    "Book a 30-minute call. We will look at where estimates are going cold, how your CRM or job tool tracks estimate stages, and scope the narrowest build that recovers revenue from stale quotes.",
  ctaSubtext:
    "No padded proposal. Just a practical scope and cost discussion for the estimate-recovery gap.",
  relatedLinks: [
    { label: "Estimate follow-up automation for service businesses", href: "/estimate-follow-up-automation-for-service-businesses" },
    { label: "Estimate follow-up setup for service businesses", href: "/estimate-follow-up-setup-for-service-businesses" },
    { label: "Estimate follow-up launch checklist for small business", href: "/estimate-follow-up-launch-checklist-small-business" },
    { label: "Estimate follow-up ROI for small business", href: "/estimate-follow-up-roi-small-business" },
    { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
    { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
    { label: "AI lead follow-up cost for small business", href: "/ai-lead-follow-up-cost-small-business" },
    { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
    { label: "CRM automation setup cost for contractors", href: "/crm-automation-setup-cost-for-contractors" },
    { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
    { label: "Case studies", href: "/case-studies" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
