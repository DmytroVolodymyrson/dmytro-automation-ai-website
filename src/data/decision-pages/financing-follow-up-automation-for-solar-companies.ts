import {
  BadgeDollarSign,
  Sun,
  MessageSquare,
  FileText,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock3,
  Users,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "financing-follow-up-automation-for-solar-companies",
  metaTitle:
    "Financing Follow-Up Automation for Solar Companies — Recover Stalled Solar Deals | Dmytro AI",
  metaDescription:
    "Financing follow-up automation for solar companies. Recover stalled solar deals with missing-document reminders, approval-status nudges, objection-aware follow-up, and fast sales-rep handoff when financing questions block signature.",
  badgeText: "Solar Workflow",
  badgeIcon: BadgeDollarSign,
  h1: "Financing Follow-Up Automation for Solar Companies",
  heroIntro:
    "A lot of solar deals do not die at first contact. They die after the homeowner likes the proposal but gets stuck on the financing step. Maybe they still need to upload a document. Maybe they do not understand the payment math. Maybe they are waiting on a spouse, a tax question, or approval detail nobody has clarified yet. In most solar shops, that stage becomes a quiet pile of half-warm opportunities that reps mean to revisit later. Financing follow-up automation keeps that narrow post-proposal, pre-signature stage moving with useful reminders, missing-document nudges, and fast human handoff when a real financing objection needs a person instead of another generic check-in.",
  heroSubtext:
    "Below: what financing-stage automation should actually handle, how it stays distinct from the broader solar page and the live quote-follow-up child, and where the proof comes from without pretending there is a solar-financing case study that does not exist.",
  sections: [
    {
      type: "cards",
      title: "What solar financing follow-up automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on signed-intent-but-not-yet-financed deals — not fresh leads, not utility-bill collection before the quote, and not post-sale project updates.",
      items: [
        {
          icon: FileText,
          title: "Missing-document reminders",
          body: "If the homeowner still owes a pay stub, bank statement, ID, e-sign form, or lender-specific document, the workflow should request that exact item with a clear next step. Solar financing usually stalls because nobody owns the document chase with discipline.",
        },
        {
          icon: MessageSquare,
          title: "Objection-aware financing nudges",
          body: "Good follow-up should address real friction: monthly payment confusion, loan-versus-lease hesitation, waiting on a co-decision-maker, tax-credit timing, or concern about approval. This is narrower than general quote follow-up because the proposal itself is already understood — financing is the remaining blocker.",
        },
        {
          icon: Clock3,
          title: "Approval-status and next-step visibility",
          body: "The workflow can remind the homeowner what stage they are in: document review, lender decision, missing signature, or final confirmation before contract. The goal is to remove silence and ambiguity while the deal is still recoverable.",
        },
        {
          icon: ArrowUpRight,
          title: "Fast sales or financing-team handoff",
          body: "If the homeowner replies with a real question about payment structure, approval odds, system sizing trade-offs, or whether to move forward now, the right rep gets the conversation quickly with context attached. Automation should protect momentum, not impersonate a financing specialist.",
        },
        {
          icon: BarChart3,
          title: "Financing-stage pipeline visibility",
          body: "Owners should be able to see how many solar deals are waiting on financing, how old they are, which document steps are most often missing, and whether the team is losing contracts in the same narrow stage again and again.",
        },
        {
          icon: Sun,
          title: "Urgency tied to real solar timing",
          body: "Solar financing urgency should come from real conditions: available lender terms, tax-credit windows, expiring quotes, or install backlog timing. The workflow can surface those realities without inventing fake countdown pressure.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the solar cluster",
      subtitle:
        "The workflow stage has to stay obvious or the page turns into a rewrite of the broader solar or quote-follow-up pages.",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for solar companies",
          values: [
            "Owners evaluating the full solar operating system across leads, docs, scheduling, phone coverage, financing, and project updates",
            "Explains the whole solar automation picture instead of isolating one narrow deal stage",
          ],
        },
        {
          label: "Utility bill collection for solar",
          values: [
            "Teams still stuck before the quote because homeowners have not sent usage data yet",
            "Handles document capture before proposal creation, not the post-proposal financing bottleneck",
          ],
        },
        {
          label: "Quote follow-up automation for solar companies",
          values: [
            "Solar teams losing sent proposals for many reasons: silence, comparison shopping, timing, spouse approval, or generic uncertainty",
            "Covers the whole post-proposal recovery stage broadly, with financing as one stall reason among several",
          ],
        },
        {
          label: "Financing follow-up automation for solar companies",
          values: [
            "Solar companies that already know a meaningful share of deals stall specifically at financing, approval, or missing-document steps",
            "Focuses tightly on financing-stage recovery: document nudges, approval-status visibility, objection-aware follow-up, and human handoff when financing is the real blocker",
          ],
        },
        {
          label: "Project status update automation for solar companies",
          values: [
            "Teams whose leak starts after the homeowner already said yes and the install is moving",
            "Handles post-sale milestone communication, not pre-signature financing recovery",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your solar company?",
      subtitle:
        "Best fit when proposal volume is already real and financing-stage stalls are now the clearest revenue leak.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "A meaningful share of your proposals reach financing but stall before signature",
            "Reps lose time chasing lender docs, missing signatures, and homeowner financing questions manually",
            "Your CRM or sales process can reliably mark when a deal enters the financing stage",
            "One recovered solar project per month would easily justify the build",
            "You want a narrower financing-stage workflow before rebuilding the whole solar CRM process",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still first-response speed or getting utility bills before the quote exists",
            "Very few solar deals reach financing, so this is not yet the bottleneck",
            "Nobody can tell which deals are actually in financing versus generic post-proposal limbo",
            "You expect automation to explain lender policy, tax consequences, or approval certainty without human review",
            "Your main post-sale problem is customer status updates after contract, not financing-stage recovery before signature",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep financing follow-up useful",
      subtitle:
        "The goal is to keep winnable solar deals moving, not to automate financial advice or create fake urgency.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not fake lending judgment",
          body: "The workflow can clarify next steps, request documents, and route questions. It should not promise approval, improvise payment advice, or speak like a licensed financial advisor.",
        },
        {
          icon: Users,
          title: "Give every reminder one clear owner and next step",
          body: "If the homeowner still owes a document, ask for that document. If a rep needs to call, route it to that rep. If financing is waiting on approval, say that plainly. Ambiguous check-ins usually make solar financing stages slower, not faster.",
        },
        {
          icon: FileText,
          title: "Track the exact missing item",
          body: "The strongest solar financing workflows know what is missing and stop the sequence once it arrives. Generic reminders create duplicate work and frustrate homeowners who already submitted what was asked for.",
        },
        {
          icon: BarChart3,
          title: "Measure recovered deals, not reminder volume",
          body: "The KPI is recovered signatures and reduced stage age — not how many nudges went out. If the workflow produces more noise without faster financing-stage movement, it needs to be simplified.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the solar quote follow-up page?",
      answer:
        "Quote follow-up is broader. It covers the whole post-proposal recovery stage when a homeowner goes quiet for any reason. This page is narrower. It isolates the financing bottleneck specifically: missing documents, approval-status uncertainty, financing objections, and the handoff needed when payment questions are the real blocker.",
    },
    {
      question: "How is this different from utility bill collection?",
      answer:
        "Utility bill collection happens before the quote so the system can be sized and priced. Financing follow-up happens later, after the homeowner has seen the proposal and the deal is trying to move through approval or payment-stage questions toward signature.",
    },
    {
      question: "What does a focused financing follow-up build usually cost?",
      answer:
        "A focused financing-stage workflow usually lands around $1.5K-$3K depending on CRM cleanliness, how many lender/document states need tracking, and how many human escalation paths are required. Broader solar builds cost more when they also include lead response, utility-bill collection, scheduling, or post-sale project updates.",
    },
    {
      question: "Can the workflow handle tax-credit questions automatically?",
      answer:
        "It can acknowledge the question, share approved educational context, and route the conversation to a human when advice or deal-specific interpretation is needed. It should not pretend to give tax or lending advice automatically.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is recovering solar deals that already made it far enough to get quoted but stall at financing. When project value is high, rescuing even one otherwise-lost contract per month can cover the build quickly. The secondary win is visibility: the team can finally see whether financing is a repeatable bottleneck instead of treating every stalled deal like a mystery.",
    },
  ],
  faqSubtitle:
    "Practical questions from solar companies considering a financing-stage recovery workflow",
  ctaHeading: "Want fewer solar deals stalling at financing?",
  ctaText:
    "Book a 30-minute call. We will look at where your solar pipeline slows down after the proposal is sent, how often financing becomes the real blocker, and whether a focused financing follow-up workflow is the cleanest next build.",
  ctaSubtext:
    "No fake approval promises. Just a practical recommendation based on your proposal volume, financing-stage leak, and current handoff process.",
  relatedLinks: [
    { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
    { label: "What to automate first for solar companies", href: "/what-to-automate-first-for-solar-companies" },
    { label: "Utility bill collection automation for solar companies", href: "/utility-bill-collection-automation-for-solar-companies" },
    { label: "Quote follow-up automation for solar companies", href: "/quote-follow-up-automation-for-solar-companies" },
    { label: "Project status update automation for solar companies", href: "/project-status-update-automation-for-solar-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
