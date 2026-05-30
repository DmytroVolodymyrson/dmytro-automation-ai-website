import {
  BarChart3,
  Bot,
  Car,
  CheckCircle2,
  Clock,
  FileSearch,
  Mail,
  MessageSquare,
  Package,
  RefreshCcw,
  ShoppingCart,
  Slack,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-for-auto-parts-ecommerce",
  metaTitle:
    "AI Automation for Auto Parts E-Commerce — CRM, Fitment, Follow-Up | Dmytro AI",
  metaDescription:
    "AI automation for auto parts e-commerce brands. Organize 5,600+ leads, automate fitment follow-up, run reactivation campaigns, and keep customer questions moving without manual chaos.",
  badgeText: "Auto Parts E-Commerce",
  badgeIcon: Car,
  h1: "AI Automation for Auto Parts E-Commerce",
  heroIntro:
    "AI automation is usually worth it for an auto parts brand when one of four leaks is already expensive: mixed customer inquiries buried in one queue, fitment questions losing momentum because context is missing, quote conversations dying after pricing goes out, or old inquiry-stage leads sitting untouched in the CRM. A vehicle accessories e-commerce brand is the clearest proof on this site. Dmytro built a CRM and follow-up system for a vehicle accessories e-commerce brand that organized 5,600+ contacts, triggered automated email follow-up, and pushed high-intent replies into Slack so the team could act faster. The practical lesson is not that every store needs a giant rebuild. It is that auto parts operations usually improve fastest when one of those revenue-critical workflows gets cleaned up end-to-end first.",
  heroSubtext:
    "Below: the auto-parts workflows that are actually worth automating, how to decide between mixed inquiry routing, fitment intake, quote follow-up, and stale-lead recovery, and which related guides to read next before you force a broader CRM rollout.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in an auto parts brand",
      subtitle:
        "These are the operational layers that usually create the clearest payoff for auto parts stores and distributors:",
      items: [
        {
          icon: FileSearch,
          title: "Fitment and product inquiry intake",
          body: "When a shopper asks whether a part fits their vehicle, that question should be logged, tagged, and routed immediately. Automation captures the request, stores the context, and triggers the right follow-up instead of leaving it buried in a shared inbox.",
        },
        {
          icon: Mail,
          title: "Lead and quote follow-up",
          body: "Wholesale requests, custom orders, high-ticket cart questions, and abandoned quote conversations need structured follow-up. Automated sequences keep those opportunities moving without relying on someone to remember every callback manually.",
        },
        {
          icon: MessageSquare,
          title: "Support triage and escalation",
          body: "Order issues, shipping questions, warranty requests, and product support should not all hit the same queue. Automation sorts the message type, applies tags, and routes the right conversations to the right human faster.",
        },
        {
          icon: RefreshCcw,
          title: "Database reactivation",
          body: "Most stores sit on years of old leads and customers who never got a real second touch. Reactivation campaigns turn that stale contact list into a revenue source instead of dead weight in a spreadsheet or CRM.",
        },
        {
          icon: Package,
          title: "Post-purchase and replenishment flows",
          body: "Confirmation is only the beginning. You can automate shipping updates, install resources, review requests, replenishment reminders, and repeat-purchase prompts based on what the customer actually bought.",
        },
        {
          icon: Slack,
          title: "Internal alerts for high-intent activity",
          body: "When a big order inquiry lands or a dormant high-value lead replies, the team should know instantly. Slack or CRM alerts let operators jump on the right conversations without watching dashboards all day.",
        },
      ],
    },
    {
      type: "table",
      title: "Manual vs. automated auto parts operations",
      subtitle:
        "This is where most parts brands feel the difference in day-to-day execution:",
      headers: ["Automated", "Manual"],
      rows: [
        {
          label: "New inquiry handling",
          values: [
            "Inquiry is tagged, assigned, and followed up instantly",
            "Someone checks inboxes when they get time",
          ],
        },
        {
          label: "Old lead follow-up",
          values: [
            "Dormant contacts enter structured reactivation campaigns",
            "Old leads stay untouched in spreadsheets or CRM lists",
          ],
        },
        {
          label: "Support routing",
          values: [
            "Warranty, shipping, fitment, and sales questions split automatically",
            "Everything lands in one queue and gets sorted by hand",
          ],
        },
        {
          label: "Team visibility",
          values: [
            "Important replies and opportunities trigger alerts automatically",
            "People discover updates late or miss them entirely",
          ],
        },
        {
          label: "Repeat-purchase follow-up",
          values: [
            "Timed reminders and lifecycle messages run consistently",
            "Repeat outreach happens only when someone remembers",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your brand?",
      subtitle:
        "Some auto parts businesses should automate now. Others should clean up fundamentals first:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You handle a meaningful volume of inquiries, leads, or support conversations every week",
            "You sell parts that require explanation, compatibility checks, or repeat follow-up",
            "Your store has old leads or customers sitting untouched in a spreadsheet, CRM, or inbox",
            "Your team is already juggling Shopify, email, Slack, forms, or a CRM manually",
            "You want better response speed without hiring another coordinator",
            "One extra recovered order or better close rate would easily justify a focused build",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still validating the store and have very little inquiry volume",
            "Your main problem is product, supplier, or margin instability rather than operations",
            "You do not yet have a stable source of product data, fitment info, or customer ownership",
            "You really need a full replatform or ERP project, not workflow automation",
            "You are not ready to maintain basic CRM hygiene like statuses, tags, and ownership",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Where the ROI usually comes from first",
      subtitle:
        "For auto parts brands, the first wins usually come from a short list of operational leaks:",
      items: [
        {
          icon: Clock,
          title: "Faster response on high-intent inquiries",
          body: "If a shopper or buyer has a compatibility or pricing question, waiting hours usually means losing them. Instant triage and follow-up often pays back before any broader automation rollout does.",
        },
        {
          icon: BarChart3,
          title: "Better use of the lead database you already own",
          body: "Many brands keep buying traffic while thousands of old contacts sit untouched. Reactivation flows let you create revenue from leads and customers you already paid to acquire.",
        },
        {
          icon: ShoppingCart,
          title: "Higher repeat-purchase consistency",
          body: "Customers rarely reorder because the team remembered at exactly the right time. They reorder when reminders, education, and offers land consistently. Automation makes that repeatable.",
        },
        {
          icon: Bot,
          title: "Less operator time spent on repetitive admin",
          body: "Manual inbox sorting, CRM updates, and follow-up reminders steal hours every week. Automation gives that time back so humans can focus on the conversations that actually need judgment.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof",
      subtitle:
        "This page is supported by direct proof from an auto parts e-commerce build plus adjacent follow-up automation work:",
      studies: [
        {
          industry: "Auto Parts E-Commerce",
          headline: "5,600+ leads organized and enrolled into automated follow-up",
          body: "For a vehicle accessories e-commerce brand, Dmytro built a CRM and follow-up system that segmented thousands of contacts, triggered personalized email sequences, and gave the team instant Slack visibility on replies. That is direct proof for this exact vertical.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Workflow Automation",
          headline: "AI email and nurture systems built around real buying signals",
          body: "Dmytro's broader lead follow-up and email automation pages show the same pattern used here: immediate response, structured nurture, and clear handoff rules instead of one-off manual chasing.",
          link: "/ai-email-sequence-automation",
        },
      ],
      links: [
        { label: "Auto parts e-commerce case study", href: "/case-studies/ecommerce-crm-automation" },
        { label: "What to automate first for auto parts e-commerce", href: "/what-to-automate-first-for-auto-parts-ecommerce" },
        { label: "Customer inquiry automation for auto parts e-commerce", href: "/customer-inquiry-automation-for-auto-parts-ecommerce" },
        { label: "Fitment inquiry automation for auto parts e-commerce", href: "/fitment-inquiry-automation-for-auto-parts-ecommerce" },
        { label: "Quote follow-up automation for auto parts e-commerce", href: "/quote-follow-up-automation-for-auto-parts-ecommerce" },
        { label: "Stale lead follow-up for auto parts e-commerce", href: "/stale-lead-follow-up-for-auto-parts-ecommerce" },
        { label: "Repeat-purchase reactivation for auto parts e-commerce", href: "/repeat-purchase-reactivation-automation-for-auto-parts-ecommerce" },
        { label: "AI automation for e-commerce brands", href: "/ai-automation-ecommerce" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is this page only for large auto parts brands?",
      answer:
        "No. It is a fit for smaller operators too, as long as there is enough inquiry volume or enough operational repetition to justify automation. A smaller specialty parts store can still benefit if leads, support questions, or old customer lists are already slipping through the cracks.",
    },
    {
      question: "Can automation help with fitment questions?",
      answer:
        "Yes, up to a point. Automation is strong at intake, tagging, routing, reminders, and follow-up. It can capture the vehicle details, log the request, and make sure the right person responds quickly. Complex technical judgment should still stay with a human expert.",
    },
    {
      question: "What is the best first workflow to automate?",
      answer:
        "Usually the workflow closest to lost revenue: quote and inquiry follow-up, stale lead reactivation, or support routing. The first build should solve one painful system end-to-end before expanding into everything else.",
    },
    {
      question: "What does this kind of build usually cost?",
      answer:
        "A focused workflow like CRM cleanup plus one follow-up system often starts around $2K-$4K. A broader setup with segmentation, Slack alerts, multiple sequences, and support routing usually lands in the $4K-$8K range. Scope depends on how fragmented the current stack is.",
    },
    {
      question: "Do I need to replace Shopify or my current tools?",
      answer:
        "Usually no. The automation layer can sit on top of Shopify, GoHighLevel, HubSpot, Supabase, Slack, Google Sheets, and other existing tools. The right move is normally connecting the current stack better before talking about a full replatform.",
    },
  ],
  faqSubtitle:
    "Practical questions from auto parts operators considering automation",
  ctaHeading: "Want your auto parts ops to stop depending on memory and inbox chaos?",
  ctaText:
    "Book a 30-minute call. We will look at your inquiry flow, CRM, and follow-up process, then map out the one automation system that would create the clearest payoff first.",
  ctaSubtext:
    "No generic AI pitch. No inflated promises. Just a practical recommendation based on how your store actually operates today.",
  relatedLinks: [
    { label: "What to automate first for auto parts e-commerce", href: "/what-to-automate-first-for-auto-parts-ecommerce" },
    { label: "Customer inquiry automation for auto parts e-commerce", href: "/customer-inquiry-automation-for-auto-parts-ecommerce" },
    { label: "Fitment inquiry automation for auto parts e-commerce", href: "/fitment-inquiry-automation-for-auto-parts-ecommerce" },
    { label: "Quote follow-up automation for auto parts e-commerce", href: "/quote-follow-up-automation-for-auto-parts-ecommerce" },
    { label: "Stale lead follow-up for auto parts e-commerce", href: "/stale-lead-follow-up-for-auto-parts-ecommerce" },
    { label: "Repeat-purchase reactivation for auto parts e-commerce", href: "/repeat-purchase-reactivation-automation-for-auto-parts-ecommerce" },
    { label: "Auto parts e-commerce case study", href: "/case-studies/ecommerce-crm-automation" },
    { label: "AI automation for e-commerce brands", href: "/ai-automation-ecommerce" },
    { label: "Best AI automation for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
