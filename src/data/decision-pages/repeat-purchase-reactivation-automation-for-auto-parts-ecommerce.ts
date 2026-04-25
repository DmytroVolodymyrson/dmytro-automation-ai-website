import {
  AlertTriangle,
  BarChart3,
  Bot,
  Car,
  CheckCircle2,
  Clock,
  Database,
  Mail,
  Package,
  RefreshCcw,
  Slack,
  ShoppingCart,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "repeat-purchase-reactivation-automation-for-auto-parts-ecommerce",
  metaTitle:
    "Repeat-Purchase & Reactivation Automation for Auto Parts E-Commerce | Dmytro AI",
  metaDescription:
    "How auto parts brands automate reorder reminders, dormant-customer reactivation, and post-purchase follow-up without mixing lifecycle revenue work into support noise. What to build, where ROI shows up, and when it is a real fit.",
  badgeText: "Auto Parts Lifecycle",
  badgeIcon: Car,
  h1: "Repeat-Purchase & Reactivation Automation for Auto Parts E-Commerce",
  heroIntro:
    "Auto parts brands do not just leak money at the inquiry stage. They also leak revenue after the first sale, when past buyers disappear, replenishment timing depends on memory, and dormant customers sit untouched until the next broad promo blast. A repeat-purchase and reactivation workflow fixes that narrower post-purchase layer. It segments customers by what they bought, how long they have been quiet, and what kind of follow-up actually fits the buying cycle — then triggers the right reminder, win-back sequence, or human handoff before another easy reorder gets lost.",
  heroSubtext:
    "Below: what repeat-purchase and reactivation automation should actually handle for auto parts brands, how it stays distinct from stale-lead recovery and mixed inquiry routing, what proof supports it directly, and where human judgment still matters.",
  sections: [
    {
      type: "cards",
      title: "What this workflow should actually handle",
      subtitle:
        "This page is specifically about post-purchase lifecycle revenue for auto parts brands, not live support queues or stale pre-sale leads.",
      items: [
        {
          icon: Database,
          title: "Segment buyers by product cycle and ownership context",
          body: "A customer who bought brake pads six months ago should not get the same follow-up as someone who ordered a one-time high-ticket part, asked for installation guidance, or previously bought wholesale. Good lifecycle automation starts by separating those contexts instead of treating every past buyer the same.",
        },
        {
          icon: RefreshCcw,
          title: "Trigger replenishment and reorder reminders at believable intervals",
          body: "If a product has a natural replacement, maintenance, or restock window, the system should use that timing automatically. That creates more repeat revenue than relying on one-off seasonal promos or whoever happens to remember to send a campaign.",
        },
        {
          icon: Mail,
          title: "Restart dormant-customer conversations with a practical next step",
          body: "A real reactivation sequence gives the buyer one easy path back in: reorder the same product, confirm current vehicle details, ask a product question, or talk to the right human about an upgraded or related part. It should not feel like generic list spam.",
        },
        {
          icon: Wrench,
          title: "Use post-purchase signals without burying the team in support noise",
          body: "Install questions, warranty conversations, review requests, and reorder nudges often happen in the same window. Good automation keeps those signals organized so support issues, lifecycle revenue, and product questions do not all collide in one queue.",
        },
        {
          icon: Slack,
          title: "Alert humans when a dormant customer turns active again",
          body: "When a past buyer replies with fitment details, pricing interest, or a new order signal, the team should know immediately. Repeat-purchase automation only creates value if the human handoff is fast once intent comes back.",
        },
        {
          icon: Package,
          title: "Turn post-purchase follow-up into a repeatable operating layer",
          body: "The win is not one clever campaign. The win is a system that keeps reorder timing, dormant-customer recovery, and customer ownership visible week after week without manual spreadsheet work.",
        },
      ],
    },
    {
      type: "table",
      title: "Repeat-purchase reactivation vs. adjacent auto-parts pages",
      subtitle:
        "These pages can coexist when the workflow stage stays disciplined:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for auto parts e-commerce",
          values: [
            "Operators evaluating the full operating stack across sales, support, CRM, and lifecycle workflows",
            "Covers the broader system: fitment intake, inquiry routing, stale-lead recovery, support triage, post-purchase flows, and alerts",
          ],
        },
        {
          label: "Stale lead follow-up",
          values: [
            "Dormant pre-sale quote requests, fitment conversations, and inquiry-stage opportunities",
            "Reopens old pre-purchase conversations that never converted in the first place",
          ],
        },
        {
          label: "Repeat-purchase & reactivation for auto parts",
          values: [
            "Past buyers, reorder timing, dormant customers, and post-purchase revenue recovery",
            "Drives replenishment reminders, win-back sequences, and human follow-up when a previous buyer becomes active again",
          ],
        },
        {
          label: "Customer inquiry automation",
          values: [
            "Mixed inbound queues where fitment, product, quote, and support questions all arrive together",
            "Classifies and routes live inbound questions so high-intent buyers stop getting buried in one support inbox",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your brand?",
      subtitle:
        "Best for auto parts teams that already know the customer base has latent repeat revenue but no disciplined lifecycle system.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You have repeat buyers, service-cycle products, or dormant customer cohorts sitting untouched in Shopify, Klaviyo, GoHighLevel, a CRM, or exports",
            "Your products have believable reorder, replenishment, refresh, or add-on timing rather than only one-time purchase behavior",
            "The team already loses easy follow-up because lifecycle outreach only happens during manual promo pushes",
            "A single recovered buyer cohort would clearly justify a focused workflow build",
            "You need better visibility when a past customer replies or shows renewed purchase intent",
            "You can distinguish post-purchase lifecycle revenue from live support traffic and stale pre-sale leads",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your store is still too early and the past-customer base is very small",
            "There is no believable reorder or revisit pattern in what you sell",
            "Your bigger problem is still first-response speed on fresh inquiries, not repeat-purchase leakage",
            "You want one generic discount blast instead of a structured lifecycle system",
            "Nobody on the team owns the follow-up once a dormant customer replies or asks a product question again",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Where the payoff usually shows up first",
      subtitle:
        "The ROI usually comes from a few simple operating wins, not clever AI copy.",
      items: [
        {
          icon: BarChart3,
          title: "Revenue from customers you already paid to acquire",
          body: "The biggest win is often obvious in hindsight: the customer already bought once, but nobody followed up at the right time with the right next step. Automation turns that quiet revenue leak into a repeatable system.",
        },
        {
          icon: Clock,
          title: "Better timing around reorder windows",
          body: "When buyers return at predictable intervals, timing matters more than campaign creativity. Automated reminders cut the lag between when the next purchase becomes relevant and when outreach actually happens.",
        },
        {
          icon: Bot,
          title: "More lifecycle coverage without another coordinator",
          body: "Teams can run reorder reminders, dormant-customer recovery, review timing, and human alerts at the same time without manually building every campaign or export from scratch.",
        },
        {
          icon: AlertTriangle,
          title: "Fewer re-engaged buyers lost after they finally reply",
          body: "A dormant customer who comes back with a fitment or pricing question should not disappear into the same support clutter that caused the leak in the first place. Ownership, tagging, and alerts are what turn reactivation into real revenue.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "This page is grounded in direct auto-parts CRM proof plus the already-live auto-parts and e-commerce lifecycle cluster.",
      studies: [
        {
          industry: "Auto Parts E-Commerce",
          headline: "5,600+ contacts organized into automated follow-up with reply visibility",
          body: "The published WheelsFeels CRM case study is direct proof for the vertical and for the mechanics behind this page: organizing a large contact base, segmenting customers by context, triggering personalized follow-up, and surfacing replies fast when buying intent returns.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Lifecycle workflow cluster",
          headline: "The live auto-parts and e-commerce pages already separate stale-lead recovery, inquiry routing, and broader lifecycle follow-up",
          body: "That makes this child page more credible, not less. The broader auto-parts page already exposes post-purchase and replenishment as its own workflow family, while the generic repeat-purchase guide proves the commercial pattern at the broader e-commerce level.",
          link: "/ai-automation-for-auto-parts-ecommerce",
        },
      ],
      links: [
        { label: "Auto parts e-commerce case study", href: "/case-studies/ecommerce-crm-automation" },
        { label: "AI automation for auto parts e-commerce", href: "/ai-automation-for-auto-parts-ecommerce" },
        { label: "Repeat-purchase & reactivation for e-commerce brands", href: "/repeat-purchase-reactivation-automation-for-ecommerce-brands" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from stale-lead follow-up for auto parts e-commerce?",
      answer:
        "Stale-lead follow-up is mostly about dormant pre-sale opportunities: old quote requests, fitment conversations, and inquiry-stage leads that never converted. This page is later in the lifecycle. It focuses on past buyers, reorder timing, dormant customers, and post-purchase revenue recovery.",
    },
    {
      question: "How is this different from the broader repeat-purchase page for e-commerce brands?",
      answer:
        "The broader e-commerce page explains the general lifecycle pattern across online stores. This page narrows that logic to auto parts realities: product-cycle timing, fitment context, install and support overlap, and the handoff rules that matter when a past buyer comes back with a specific vehicle or product question.",
    },
    {
      question: "What should an auto parts brand automate first in this lifecycle layer?",
      answer:
        "Usually the segment with the clearest money behind it: buyers with believable reorder timing, dormant high-value customers, or post-purchase cohorts where a single recovered batch would obviously pay for the build. Do not start by messaging every old customer equally.",
    },
    {
      question: "What does repeat-purchase and reactivation automation usually cost for an auto parts store?",
      answer:
        "A focused lifecycle build with segmentation, one or two sequences, and alerts often starts around $2K-$4K. If the project also needs deeper CRM cleanup, product-cycle logic across multiple cohorts, support-vs-sales routing, or broader reporting, scope usually lands closer to $4K-$8K.",
    },
    {
      question: "Does every auto parts brand need this before customer-service automation or inquiry routing?",
      answer:
        "No. If your store still buries fresh fitment and quote inquiries, fix the live inbound layer first. This workflow becomes stronger once you already have enough past buyers, enough list value, and enough process stability that lifecycle timing is now the bigger leak.",
    },
  ],
  faqSubtitle:
    "Practical questions from auto parts operators considering repeat-purchase and reactivation automation",
  ctaHeading: "Want more repeat revenue from your existing auto-parts customer base?",
  ctaText:
    "Book a 30-minute call. We will look at where repeat purchases and dormant-customer recovery are leaking today, which buyer cohorts are worth automating first, and whether this lifecycle workflow should come before broader support or CRM work.",
  ctaSubtext:
    "No fake retention promises. Just a practical recommendation based on your customer cycle, data quality, and current stack.",
  relatedLinks: [
    { label: "AI automation for auto parts e-commerce", href: "/ai-automation-for-auto-parts-ecommerce" },
    { label: "Stale lead follow-up for auto parts e-commerce", href: "/stale-lead-follow-up-for-auto-parts-ecommerce" },
    { label: "Repeat-purchase & reactivation for e-commerce brands", href: "/repeat-purchase-reactivation-automation-for-ecommerce-brands" },
    { label: "Auto parts e-commerce case study", href: "/case-studies/ecommerce-crm-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
