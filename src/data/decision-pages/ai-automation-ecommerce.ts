import {
  BarChart3,
  Bot,
  CheckCircle2,
  Clock,
  Mail,
  MessageSquare,
  Package,
  RefreshCcw,
  ShoppingCart,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-ecommerce",
  metaTitle:
    "AI Automation for E-Commerce Brands — Lead Follow-Up, CRM, Support | Dmytro AI",
  metaDescription:
    "AI automation for e-commerce brands. Lead follow-up, CRM automation, email sequences, customer service workflows, and repeat-purchase campaigns. What works, what it costs, and when to start.",
  badgeText: "E-Commerce Industry",
  badgeIcon: ShoppingCart,
  h1: "AI Automation for E-Commerce Brands",
  heroIntro:
    "AI automation makes the most sense for e-commerce brands when revenue is leaking through slow follow-up, scattered customer data, manual support handoffs, and inconsistent repeat-purchase campaigns. If your team is still moving leads between spreadsheets, chasing quote requests by hand, or manually triggering win-back emails, automation is usually worth building. The goal is not to replace your store platform. It is to make sure every lead, inquiry, and customer action triggers the right next step automatically.",
  heroSubtext:
    "Below: the e-commerce workflows that are actually worth automating, where the ROI usually comes from, and when a brand is too early for a custom build.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in an e-commerce business",
      subtitle:
        "These are the automation layers that usually create the fastest operational and revenue impact for online brands:",
      items: [
        {
          icon: Users,
          title: "Lead capture and CRM organization",
          body: "When a shopper asks for a quote, abandons a wholesale inquiry, or comes in through a marketplace or form, the lead should land in one CRM automatically. Tag by source, recency, and intent so follow-up is based on context instead of guesswork.",
        },
        {
          icon: Mail,
          title: "Email and SMS follow-up sequences",
          body: "New leads, abandoned inquiries, dormant customers, and post-purchase segments all need different follow-up. Automation handles the timing, channel, and message logic so every contact gets a sequence instead of a one-off manual email.",
        },
        {
          icon: MessageSquare,
          title: "Customer service routing",
          body: "Support requests can be classified, routed, and logged automatically before a human steps in. Order status questions, refund requests, product questions, and wholesale inquiries should not all hit the same inbox in the same way.",
        },
        {
          icon: RefreshCcw,
          title: "Win-back and reactivation campaigns",
          body: "Past customers and old leads are often the easiest revenue source. Automation can trigger replenishment reminders, reorder nudges, review requests, and segmented reactivation campaigns without the team having to remember who should be contacted and when.",
        },
        {
          icon: Package,
          title: "Post-purchase communication",
          body: "Order confirmation is not enough. Brands can automate delivery updates, product education, cross-sell offers, warranty follow-up, and review collection so the post-purchase experience drives repeat orders instead of silence.",
        },
        {
          icon: Bot,
          title: "Internal alerts and decision support",
          body: "High-intent events should create team alerts automatically — large quote request, repeat buyer with issue, wholesale account reply, or VIP churn risk. Slack or CRM notifications give the team a clear next action instead of making them hunt through tools.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is automation a good fit for your e-commerce brand?",
      subtitle:
        "Some brands should build now. Others should clean up basics first:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You have meaningful lead or customer volume and follow-up is inconsistent",
            "You already use tools like Shopify, GHL, Klaviyo, HubSpot, or spreadsheets but they are disconnected",
            "Your team keeps doing the same CRM, support, and campaign tasks manually every week",
            "You have dormant customers, old quote requests, or stale leads sitting untouched",
            "You want better response speed without hiring another coordinator",
            "You can justify a one-time build because even a small lift in repeat orders or conversions pays for it",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still validating the offer and have almost no lead or customer volume",
            "You have not decided on a core store / CRM stack yet",
            "Your biggest problem is product-market fit rather than operations",
            "You need a full e-commerce replatform, not workflow automation",
            "You are not ready to maintain basic data hygiene like tags, statuses, and customer ownership",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Where the ROI usually comes from",
      subtitle:
        "For e-commerce brands, automation usually pays back through a few repeatable levers:",
      items: [
        {
          icon: TrendingUp,
          title: "Faster lead response",
          body: "If wholesale, B2B, fitment, or quote inquiries sit for hours, conversion drops fast. Moving from delayed manual outreach to instant structured follow-up usually lifts response and close rates before you touch ad spend.",
        },
        {
          icon: BarChart3,
          title: "More revenue from the same contact base",
          body: "Brands often spend heavily to acquire traffic while ignoring thousands of existing contacts. Automated segmentation and reactivation let you monetize the database you already paid for.",
        },
        {
          icon: Clock,
          title: "Recovered team capacity",
          body: "Manual CRM upkeep, repetitive support handling, and ad hoc follow-up steal hours from operators every week. Automation gives that time back without adding another ops hire.",
        },
        {
          icon: ShoppingCart,
          title: "Higher repeat-purchase consistency",
          body: "Repeat orders do not happen just because the product is good. They happen when the right reminder, offer, or service message lands at the right time. Automation makes that repeatable.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof",
      subtitle:
        "This page is supported by direct e-commerce proof plus adjacent automation work:",
      studies: [
        {
          industry: "E-Commerce",
          headline: "5,600+ leads organized and followed up automatically",
          body: "For a US auto parts brand, Dmytro built a full CRM and follow-up system that segmented thousands of contacts, triggered personalized sequences, and increased team capacity 3x without adding headcount. That is direct proof for e-commerce CRM and lifecycle automation.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Lead Generation",
          headline: "Acquisition pipeline automation with zero manual work",
          body: "An automated lead-gen system turned manual prospecting into a repeatable pipeline that delivers qualified leads every day. Different market, same principle: remove repetitive ops work and keep high-intent opportunities moving automatically.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "E-commerce CRM case study", href: "/case-studies/ecommerce-crm-automation" },
        { label: "AI email sequence automation", href: "/ai-email-sequence-automation" },
        { label: "CRM automation examples", href: "/crm-automation-examples-small-business" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What kind of e-commerce brand is this best for?",
      answer:
        "Usually brands with enough lead or customer activity that manual follow-up is already breaking. That can mean wholesale inquiries, high-ticket products, complex support handoffs, stale CRM data, repeat-purchase campaigns, or multiple sales channels. If there is real operational repetition, automation is usually a fit.",
    },
    {
      question: "Do I need Shopify or a specific CRM?",
      answer:
        "No. The automation layer can sit on top of Shopify, WooCommerce, GoHighLevel, HubSpot, Klaviyo, Supabase, or even a messy spreadsheet-based process. The right stack depends on what you already use and whether you need a quick patch or a cleaner long-term system.",
    },
    {
      question: "What is the best first workflow to automate?",
      answer:
        "Usually the one closest to revenue leakage: lead follow-up, abandoned inquiry handling, database reactivation, or post-purchase lifecycle messaging. The first build should solve one painful workflow end-to-end before expanding into everything else.",
    },
    {
      question: "How much does e-commerce automation cost?",
      answer:
        "A focused workflow like CRM cleanup plus one follow-up sequence can start around $1.5K-$3K. A broader system with CRM structure, segmentation, alerts, and multiple lifecycle automations usually lands in the $4K-$8K range. Scope depends on stack complexity and how much logic needs to be custom.",
    },
    {
      question: "Will automation replace my support or sales team?",
      answer:
        "Usually no. The better use case is removing repetitive work so your team handles higher-value conversations. Automation should classify, route, remind, alert, and follow up — then hand off the right moments to humans.",
    },
  ],
  faqSubtitle:
    "Practical questions from e-commerce operators considering automation",
  ctaHeading: "Want to stop leaking revenue through manual ops?",
  ctaText:
    "Book a 30-minute call. We will look at your current store, CRM, and follow-up flow, then map out the one automation system that would create the clearest ROI first.",
  ctaSubtext:
    "No bloated audit. No generic AI pitch. Just a practical recommendation based on how your e-commerce operation actually works.",
  relatedLinks: [
    { label: "E-commerce CRM case study", href: "/case-studies/ecommerce-crm-automation" },
    { label: "AI email sequence automation", href: "/ai-email-sequence-automation" },
    { label: "CRM automation examples for small business", href: "/crm-automation-examples-small-business" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
