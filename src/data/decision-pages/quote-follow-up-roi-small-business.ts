import {
  Calculator,
  TrendingUp,
  Clock,
  MessageSquare,
  Workflow,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  DollarSign,
  FileText,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "quote-follow-up-roi-small-business",
  metaTitle:
    "Quote Follow-Up ROI for Small Business — When Quote Recovery Pays for Itself | Dmytro AI",
  metaDescription:
    "How to evaluate quote follow-up ROI for a small business. Conservative payback math for recovered deals after pricing goes out, saved admin time, stale-quote visibility, and when quote-stage automation is worth building versus when manual follow-up is still enough.",
  badgeText: "Quote Follow-Up ROI",
  badgeIcon: Calculator,
  h1: "Quote Follow-Up ROI for Small Business",
  heroIntro:
    "Quote follow-up automation usually pays for itself when your business already gets to the pricing stage, but too many sent quotes quietly die because nobody follows up with enough speed or consistency. The ROI is not abstract. You already paid to answer the lead, scope the work, prepare the quote, and keep the opportunity alive long enough to send pricing. When that quote goes cold, the leak is measurable. A conservative ROI model asks a simpler question: if better quote-stage discipline recovered one or two extra deals per month and saved some owner or office follow-up time, would the build pay back quickly? For many small businesses, the answer is yes — but only if the quote-stage problem is real and the workflow stays narrower than a full front-office rebuild.",
  heroSubtext:
    "Below: where quote-follow-up ROI usually comes from, how to model it conservatively, what makes payback happen faster, where owners overestimate the upside, and when quote recovery is the right first workflow versus when a simpler manual process is still enough.",
  sections: [
    {
      type: "table",
      title: "Where quote-follow-up ROI usually comes from",
      subtitle:
        "The economic case is usually a mix of recovered revenue and less wasted follow-up effort after pricing is already out:",
      headers: ["Operational change", "Why it matters financially"],
      rows: [
        {
          label: "Recovered deals from sent quotes that would have gone quiet",
          values: [
            "The workflow keeps warm opportunities visible with disciplined follow-up after pricing instead of relying on someone to remember three days later.",
            "Even one or two recovered quotes per month can cover a meaningful share of the build when average deal value is not trivial.",
          ],
        },
        {
          label: "Less owner or office time spent manually chasing stale quotes",
          values: [
            "Someone stops checking inboxes, spreadsheets, and pipeline views just to remember who still needs a follow-up touch.",
            "That recovered time has value whether you count it as labor savings or capacity freed for live work and active buyers.",
          ],
        },
        {
          label: "Better stale-quote visibility",
          values: [
            "The business can see which quotes are still open, how long they have been idle, and when human escalation should happen.",
            "That visibility prevents the quiet leak where sent quotes die without anyone noticing until revenue is already missed.",
          ],
        },
        {
          label: "Faster human handoff when intent returns",
          values: [
            "Replies and re-engagement get routed back to the right owner with quote context attached instead of sitting in a shared inbox.",
            "Faster handoff means the buyer hears back while the deal is still alive, which lifts conversion without pretending automation closes everything by itself.",
          ],
        },
      ],
    },
    {
      type: "cards",
      title: "A conservative ROI model for quote follow-up",
      subtitle:
        "You do not need inflated conversion claims for the math to work. Use bounded assumptions tied to the quote stage you already have:",
      items: [
        {
          icon: FileText,
          title: "1. Count how many sent quotes go cold each month",
          body: "Look at quotes sent versus closed work over the last few months. You are not trying to count every lost deal as recoverable. You are trying to estimate the share that likely died because follow-up was too slow, too inconsistent, or not owned clearly enough.",
          links: [
            { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
            { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
          ],
        },
        {
          icon: DollarSign,
          title: "2. Estimate the value of one recovered quote-stage win",
          body: "Use your real average deal value from this stage. A business recovering one $2K job per month has a different payback profile than one recovering one $12K project, but both can justify the workflow if the quote-stage leak is real and recurring.",
          links: [
            { label: "Quote follow-up cost for small business", href: "/quote-follow-up-cost-small-business" },
            { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
          ],
        },
        {
          icon: Clock,
          title: "3. Add back saved owner and admin time",
          body: "If the owner, office manager, or salesperson currently spends hours each week checking open quotes, writing reminder texts, and figuring out who should reply next, that time matters. It is part of the return even before any extra deal closes.",
          links: [
            { label: "AI automation time savings", href: "/ai-automation-time-savings-small-business" },
          ],
        },
        {
          icon: BarChart3,
          title: "4. Keep the payback test modest",
          body: "Start with conservative math: one recovered quote per month, some saved admin time, and cleaner stale-quote visibility. If the workflow still looks worthwhile under that model, the real-world case is usually strong enough to test seriously.",
          links: [
            { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
            { label: "AI automation ROI calculator", href: "/ai-automation-roi-calculator" },
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What makes quote-follow-up payback happen faster",
      subtitle:
        "Quote recovery does not pay back equally fast in every business. The economics improve when these conditions are true:",
      items: [
        {
          icon: TrendingUp,
          title: "You send enough quotes that manual discipline keeps slipping",
          body: "If the business sends more quotes than one person can track reliably, automation usually pays back faster. The bigger the backlog of sent quotes, the easier it is for silent losses to pile up.",
        },
        {
          icon: DollarSign,
          title: "One recovered quote has real value",
          body: "The higher the average deal value, the fewer extra wins you need to justify the workflow. This is why quote-stage ROI often becomes obvious faster than broader front-office ROI.",
        },
        {
          icon: Workflow,
          title: "The main leak is follow-up discipline, not pricing strategy",
          body: "If quotes are dying because nobody follows up, automation can help directly. If the problem is uncompetitive pricing, weak offers, or bad scope communication, the workflow will not fix the real issue by itself.",
        },
        {
          icon: MessageSquare,
          title: "You start with the narrowest quote-stage workflow first",
          body: "A reminder and routing layer usually pays back faster than a big escalation dashboard. Start with the smaller build that protects sent quotes, then expand only if the quote-stage leak proves deeper than missing follow-up.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When quote-follow-up ROI is strong vs. weak",
      subtitle:
        "Use this to decide whether quote recovery belongs near the top of your automation list or further down:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Strong ROI case",
          variant: "green",
          items: [
            "Sent quotes regularly go cold because nobody follows up at the right time",
            "One recovered quote per month would cover a meaningful share of the build cost",
            "The business can already tell when a quote is sent and who owns it next",
            "Manual follow-up is inconsistent because the owner, office, or salesperson is already busy with live work",
            "You want a narrower post-pricing workflow before buying broader CRM or phone automation",
          ],
        },
        {
          icon: XCircle,
          heading: "Weak ROI case",
          variant: "neutral",
          items: [
            "Quote volume is low enough that a manual reminder is still realistic",
            "The real problem is still first response before pricing, not quote-stage recovery",
            "The quote process is too messy to define a reliable sent stage yet",
            "Your close rate is already strong and few sent quotes genuinely go stale",
            "You are trying to justify a broader automation project through a quote-follow-up page that should stay narrower",
          ],
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "There is no dedicated published quote-follow-up ROI case study on the site yet. The honest proof frame comes from the live quote-follow-up cluster, the pricing/setup children, and the published CRM lifecycle case study:",
      studies: [
        {
          industry: "Live quote-follow-up cluster",
          headline: "The service-business parent plus the setup and cost children already define the operational scope this ROI page is evaluating",
          body: "The parent page explains how quote-stage recovery works across service businesses, the setup child isolates implementation scope, and the cost child prices the build. This ROI page answers the next buyer question: when that quote-stage workflow actually pays back.",
          link: "/quote-follow-up-automation-for-service-businesses",
        },
        {
          industry: "Estimate-recovery ROI sibling",
          headline: "The estimate-follow-up ROI page already proves the same economics logic can stay narrow at the post-pricing stage",
          body: "That sibling page models payback after field estimates. This page stays broader by pricing the quote stage across service-business contexts where there may be no site visit at all, but the same disciplined payback logic still applies.",
          link: "/estimate-follow-up-roi-small-business",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "The WheelsFeels CRM case study proves the value of cleaner stage tracking, follow-up discipline, and stale-opportunity visibility",
          body: "That project is not a quote-follow-up ROI build, but it is real published proof that recoverable opportunities get lost when stage ownership is messy and structured follow-up is weak. Those are the mechanics this ROI page is evaluating financially.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
        { label: "Quote follow-up setup for service businesses", href: "/quote-follow-up-setup-for-service-businesses" },
        { label: "Quote follow-up setup vs. DIY for small business", href: "/quote-follow-up-setup-vs-diy-small-business" },
        { label: "Quote follow-up cost for small business", href: "/quote-follow-up-cost-small-business" },
        { label: "Estimate follow-up ROI for small business", href: "/estimate-follow-up-roi-small-business" },
        { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
        { label: "AI lead follow-up ROI for small business", href: "/ai-lead-follow-up-roi-small-business" },
        { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
      ],
    },
    {
      type: "prose",
      title: "What small businesses usually get wrong about quote-follow-up ROI",
      subtitle:
        "These mistakes make the economics look better or worse than they really are:",
      blocks: [
        {
          heading: "Counting every lost quote as recoverable",
          body: "Some quotes were never serious, some lost on price or fit, and some would not have closed no matter how disciplined the follow-up was. Model ROI on the recoverable share of the leak, not on every lost quote in your pipeline.",
        },
        {
          heading: "Ignoring the value of owner and office time",
          body: "ROI is not only about extra closed deals. If the owner or office team stops manually chasing stale quotes and can focus on live work, that capacity matters too. For many small businesses, the time recovered is part of why the workflow pays back quickly.",
        },
        {
          heading: "Buying a broad sales-system rebuild before proving the quote-stage layer",
          body: "If your real leak is simply weak follow-up after pricing goes out, a focused quote-stage workflow is usually the smarter first build. Broader CRM, phone, or front-office automation should come later unless the narrower workflow proves the quote stage is not the only bottleneck.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "How do I estimate ROI on quote follow-up automation?",
      answer:
        "Start with how many sent quotes go stale each month and what one recovered deal is worth. Use conservative math — one extra recovered quote per month and some saved owner or office time — then compare that to the build cost. If the workflow still looks worthwhile under those assumptions, the real-world case is usually strong enough to test seriously.",
    },
    {
      question: "How quickly can quote-follow-up automation pay for itself?",
      answer:
        "For businesses where one recovered quote has meaningful value, payback can happen within the first one to three months. For lower-value work or low quote volume, the timeline stretches out and a manual reminder process may be the better first move.",
    },
    {
      question: "How is this different from the quote follow-up cost page?",
      answer:
        "The cost page answers what the workflow costs to build and run. This page answers the next question: given that cost, how should a small business think about recovered deals, saved follow-up time, and how many quote-stage wins it takes for the build to pay back?",
    },
    {
      question: "How is this different from estimate follow-up ROI?",
      answer:
        "Estimate follow-up ROI is narrower and more field-service specific because it models the stage after a site visit or inspection. Quote follow-up ROI is broader. It models sent-quote recovery across service-business contexts, including businesses where there was no on-site estimate at all.",
    },
    {
      question: "When is a manual reminder better than automated quote follow-up?",
      answer:
        "If quote volume is low enough that someone can still follow up consistently with a calendar reminder and the real bottleneck is not quote-stage discipline, manual may be enough for now. Automation becomes more valuable once the number of sent quotes is high enough that manual follow-through keeps slipping.",
    },
  ],
  faqSubtitle:
    "Practical questions about payback, timing, and fit for quote-stage recovery",
  ctaHeading: "Want to know if quote follow-up would actually pay back in your business?",
  ctaText:
    "Book a 30-minute call. We will look at your sent-quote volume, where opportunities usually go cold after pricing, and whether a focused quote-follow-up workflow is the right first automation or whether a simpler process would be enough for now.",
  ctaSubtext:
    "No inflated ROI promise. Just a practical estimate based on your quote stage, your current tools, and the economics of one recovered deal in your business.",
  relatedLinks: [
    { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
    { label: "Quote follow-up setup for service businesses", href: "/quote-follow-up-setup-for-service-businesses" },
    { label: "Quote follow-up setup mistakes for small business", href: "/quote-follow-up-setup-mistakes-small-business" },
    { label: "Quote follow-up setup vs. DIY for small business", href: "/quote-follow-up-setup-vs-diy-small-business" },
    { label: "Quote follow-up cost for small business", href: "/quote-follow-up-cost-small-business" },
    { label: "Estimate follow-up ROI for small business", href: "/estimate-follow-up-roi-small-business" },
    { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
    { label: "AI lead follow-up ROI for small business", href: "/ai-lead-follow-up-roi-small-business" },
    { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
    { label: "AI automation time savings", href: "/ai-automation-time-savings-small-business" },
    { label: "Case studies", href: "/case-studies" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
