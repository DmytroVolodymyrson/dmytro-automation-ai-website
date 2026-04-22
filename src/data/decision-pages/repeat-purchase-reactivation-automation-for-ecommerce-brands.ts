import {
  AlertTriangle,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock,
  Database,
  Mail,
  MessageSquare,
  RefreshCcw,
  ShoppingCart,
  Slack,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "repeat-purchase-reactivation-automation-for-ecommerce-brands",
  metaTitle:
    "Repeat-Purchase & Reactivation Automation for E-Commerce Brands | Dmytro AI",
  metaDescription:
    "How e-commerce brands automate repeat-purchase reminders and dormant-customer reactivation without spamming the list. What to build, where ROI shows up, and when it is a real fit.",
  badgeText: "E-Commerce Lifecycle",
  badgeIcon: RefreshCcw,
  h1: "Repeat-Purchase & Reactivation Automation for E-Commerce Brands",
  heroIntro:
    "If your e-commerce brand keeps spending to acquire new customers while past buyers and old leads sit untouched, repeat-purchase and reactivation automation is usually one of the clearest places to build. This is not about blasting your whole list with generic win-back emails. It is about segmenting customers by recency, product cycle, inquiry history, and buying signals, then triggering the right reminder, offer, or human handoff at the right time. For brands with repeatable reorder patterns, higher-consideration products, or a backlog of stale contacts, that can recover meaningful revenue without adding more manual campaign work.",
  heroSubtext:
    "Below: what this workflow should actually handle, where the payoff usually appears first, and how to tell whether you need a focused lifecycle system or just better campaign discipline.",
  sections: [
    {
      type: "cards",
      title: "What this workflow should actually do",
      subtitle:
        "The goal is not to send more emails. The goal is to make the next relevant lifecycle step happen automatically when a customer or old lead hits the right condition.",
      items: [
        {
          icon: Database,
          title: "Segment customers by real lifecycle state",
          body: "Recent buyers, dormant customers, stale quote requests, and old leads should not live in one generic bucket. Good reactivation starts with clear separation by recency, product type, source, and last meaningful action.",
        },
        {
          icon: RefreshCcw,
          title: "Trigger replenishment and reorder reminders",
          body: "If a product has a natural repurchase window, the system should use that timing automatically instead of hoping the team remembers to run a manual campaign at the right moment.",
        },
        {
          icon: Mail,
          title: "Restart stalled conversations",
          body: "Old inquiries, abandoned quote requests, and inactive customers should get a structured reactivation sequence with a clear reason to respond, not a vague 'just checking in' blast.",
        },
        {
          icon: ShoppingCart,
          title: "Match the message to the buying context",
          body: "A past wholesale lead should not get the same follow-up as a recent retail buyer. The workflow should adapt messaging based on what the contact originally wanted and where they dropped off.",
        },
        {
          icon: Slack,
          title: "Alert the team when reactivation turns hot",
          body: "When a dormant contact replies, asks about pricing, or shows renewed purchase intent, the human team should know immediately. That keeps high-intent reactivation from dying in an inbox again.",
        },
        {
          icon: MessageSquare,
          title: "Keep support and sales from colliding",
          body: "Lifecycle follow-up should not create noise for support queues. Good automation tags and routes replies so customer-service issues and revenue conversations do not get mixed together.",
        },
      ],
    },
    {
      type: "table",
      title: "Manual reactivation vs. automated reactivation",
      subtitle:
        "This is the operational difference most brands feel first:",
      headers: ["Manual campaigns", "Automated lifecycle system"],
      rows: [
        {
          label: "Timing",
          values: [
            "Campaigns run whenever someone has time or remembers",
            "Reorder and win-back messages trigger from recency and behavior rules",
          ],
        },
        {
          label: "Segmentation",
          values: [
            "Broad list pulls with weak context",
            "Contacts are grouped by source, product cycle, engagement, and lifecycle stage",
          ],
        },
        {
          label: "High-intent replies",
          values: [
            "Replies sit in inboxes until someone notices",
            "Replies generate immediate CRM or Slack visibility for the team",
          ],
        },
        {
          label: "Repeat-purchase consistency",
          values: [
            "The brand depends on one-off promos or memory",
            "Repeat-purchase nudges happen on a repeatable schedule with clear suppression rules",
          ],
        },
        {
          label: "List value",
          values: [
            "Old leads and dormant customers quietly decay",
            "Existing contacts keep producing revenue through structured reactivation and handoff logic",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your brand?",
      subtitle:
        "Repeat-purchase and reactivation automation is strongest when the list already has real latent value:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You have past buyers or old leads sitting unused in a CRM, spreadsheet, Shopify export, or inbox history",
            "Your products have a believable reorder, replenishment, or revisit cycle",
            "You already lose sales because outreach happens late, inconsistently, or only during manual promo pushes",
            "A single recovered customer cohort would easily justify a focused build",
            "Your team needs better visibility when a dormant contact becomes active again",
            "You want repeat-purchase lift without hiring another coordinator just to run lifecycle campaigns",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your store is too early and the customer base is still very small",
            "You do not have any real repeat-purchase pattern or dormant-list value yet",
            "Your bigger issue is offer quality, fulfillment, or customer retention fundamentals rather than follow-up execution",
            "You are looking for a full retention strategy overhaul rather than one workflow build",
            "Nobody on the team owns the downstream sales or support handoff once a reactivated contact replies",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Where the ROI usually shows up first",
      subtitle:
        "The payoff usually comes from a few simple operational wins, not from 'AI magic':",
      items: [
        {
          icon: BarChart3,
          title: "Revenue from contacts you already paid to acquire",
          body: "The biggest win is usually obvious in hindsight: old leads and prior buyers already exist, but nobody is working them consistently. Automation turns that dead list into an active revenue asset.",
        },
        {
          icon: Clock,
          title: "Faster recovery of warm but dormant intent",
          body: "When a lead or customer is still somewhat familiar with the brand, timing matters. Automated reactivation cuts the lag between the moment a contact becomes relevant again and the moment outreach happens.",
        },
        {
          icon: Bot,
          title: "More lifecycle coverage with the same team",
          body: "Teams can finally run repeat-purchase, win-back, and stale-inquiry follow-up at the same time without manually building every campaign from scratch each week.",
        },
        {
          icon: AlertTriangle,
          title: "Fewer high-intent replies lost in the noise",
          body: "A reactivated lead that finally responds should not disappear back into the same fragmented stack that lost them before. Alerts and CRM ownership are what turn reactivation into actual revenue.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof",
      subtitle:
        "This page is grounded in direct published e-commerce proof plus adjacent lifecycle pages already live on the site.",
      studies: [
        {
          industry: "E-Commerce / Auto Parts",
          headline: "5,600+ contacts segmented and enrolled into automated follow-up",
          body: "The published WheelsFeels case study is direct proof for the underlying commercial pattern here: a large backlog of leads organized into structured pools, personalized sequences triggered automatically, and Slack alerts when replies show real buying intent.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Lifecycle follow-up",
          headline: "Adjacent guidance already exists on the broader site",
          body: "The broader e-commerce automation page and the client-reactivation guide already explain the same operational logic from neighboring angles. This page is the narrower buyer guide specifically for repeat-purchase and reactivation inside an e-commerce lifecycle system.",
          link: "/client-reactivation-automation",
        },
      ],
      links: [
        { label: "E-commerce CRM case study", href: "/case-studies/ecommerce-crm-automation" },
        { label: "AI automation for e-commerce brands", href: "/ai-automation-ecommerce" },
        { label: "Client reactivation automation", href: "/client-reactivation-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader e-commerce automation page?",
      answer:
        "The broader page covers the whole operating layer: CRM cleanup, customer-service routing, follow-up systems, and repeat-purchase workflows. This page is narrower. It is specifically about lifecycle automation for repeat purchases, dormant customers, and stale inquiries where the list already has untapped value.",
    },
    {
      question: "Is this the same thing as a generic win-back campaign?",
      answer:
        "Not if it is built properly. A real system uses segmentation, timing windows, suppression rules, and handoff logic. A generic win-back blast treats every old contact the same and usually trains the team to ignore the list until the next promo.",
    },
    {
      question: "What should be automated first?",
      answer:
        "Usually the first workflow is the segment with the clearest money behind it: recent buyers with a reorder window, dormant high-intent leads, or old quote requests that never got consistent follow-up. Start where one recovered cohort would most clearly pay for the build.",
    },
    {
      question: "What does repeat-purchase and reactivation automation usually cost?",
      answer:
        "A focused lifecycle build with segmentation, one or two sequences, and alerting often starts around $2K-$4K. A broader system with multiple segments, channel logic, CRM cleanup, and support-vs-sales routing usually lands in the $4K-$8K range depending on how messy the current stack is.",
    },
    {
      question: "Do I need a custom CRM to do this well?",
      answer:
        "Not always. Some brands can keep Shopify, Klaviyo, GoHighLevel, HubSpot, or another existing tool and add better automation around it. Others need a cleaner CRM layer because contact ownership, segmentation, or reporting is too fragmented. The right answer depends on the state of your current stack.",
    },
  ],
  faqSubtitle:
    "Practical questions from operators considering repeat-purchase and reactivation automation",
  ctaHeading: "Want more revenue from the list you already built?",
  ctaText:
    "Book a 30-minute call. We will look at where your repeat-purchase and reactivation opportunities are leaking today, then map the one lifecycle workflow that would create the clearest payoff first.",
  ctaSubtext:
    "No vague retention talk. Just a practical recommendation based on your customer cycle, list quality, and current tooling.",
  relatedLinks: [
    { label: "AI automation for e-commerce brands", href: "/ai-automation-ecommerce" },
    { label: "E-commerce CRM automation with AI follow-up", href: "/ecommerce-crm-automation-with-ai-follow-up" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "E-commerce CRM case study", href: "/case-studies/ecommerce-crm-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
