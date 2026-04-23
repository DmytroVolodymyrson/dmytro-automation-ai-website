import {
  Bot,
  Car,
  CheckCircle2,
  Clock,
  FileSearch,
  Mail,
  MessageSquare,
  Package,
  ShieldCheck,
  Slack,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "customer-inquiry-automation-for-auto-parts-ecommerce",
  metaTitle:
    "Customer Inquiry Automation for Auto Parts E-Commerce — Faster Routing, Better Follow-Up | Dmytro AI",
  metaDescription:
    "Automate customer inquiries for auto parts e-commerce. Route fitment questions, product inquiries, quote requests, and support conversations faster without burying high-intent buyers in inbox chaos.",
  badgeText: "Auto Parts Workflow",
  badgeIcon: Car,
  h1: "Customer Inquiry Automation for Auto Parts E-Commerce",
  heroIntro:
    "Auto parts customer inquiries are rarely one clean support category. A single store can get fitment questions, product-detail clarifications, wholesale requests, order issues, quote follow-up, and pre-sale buying signals through the same inbox, form, chat widget, or phone transcript. When those all land in one queue, the team spends too much time figuring out what the message actually is, who owns it, and whether it needs a fast commercial response or a slower support answer. A focused customer-inquiry workflow fixes that operating problem. It does not try to automate away technical judgment. It captures the right context, routes the conversation correctly, alerts the team when revenue is on the line, and keeps buyers from disappearing because nobody answered in time.",
  heroSubtext:
    "Below: what this workflow should actually handle, how it differs from the broader auto-parts and generic e-commerce support pages, what proof honestly supports it, and where the human handoff still matters.",
  sections: [
    {
      type: "cards",
      title: "What customer inquiry automation should actually handle",
      subtitle:
        "For auto parts brands, the highest-value version is a routing and follow-up layer around mixed inbound demand:",
      items: [
        {
          icon: FileSearch,
          title: "Capture the right context on intake",
          body: "Vehicle details, SKU or product family, order number, inquiry type, and channel source should be attached to the conversation immediately. That stops vague messages from entering the queue with no usable context.",
        },
        {
          icon: Mail,
          title: "Separate pre-sale questions from post-sale support",
          body: "A buyer asking whether a part will fit or whether a kit solves their problem should not get buried beside shipping-status requests and routine support messages. Automation should classify the intent first.",
        },
        {
          icon: MessageSquare,
          title: "Trigger the right acknowledgement fast",
          body: "Every inquiry should get an immediate next-step response. That might be a vehicle-details request, a support receipt confirmation, or a promise of follow-up from the right team member. Silence is where the leak starts.",
        },
        {
          icon: Slack,
          title: "Escalate high-intent buyers quickly",
          body: "Some customer inquiries are really purchase signals: fitment questions on expensive parts, wholesale requests, product comparisons, or repeat-buyer questions. Those should create alerts instead of waiting in the same line as low-value noise.",
        },
        {
          icon: Package,
          title: "Create CRM ownership and status tracking",
          body: "The inquiry should become a trackable record with owner, status, source, and notes so nobody has to reconstruct the thread from memory across inboxes, chat, and order systems.",
        },
        {
          icon: Clock,
          title: "Handle reminders and handoff automatically",
          body: "If the customer goes quiet, or if the team owes the next answer, the workflow should trigger reminders and escalation rules automatically. Manual effort should be spent on the judgment-heavy part of the conversation, not on remembering to follow up.",
        },
      ],
    },
    {
      type: "table",
      title: "One mixed inbox vs. a structured inquiry workflow",
      subtitle:
        "This is the difference most auto parts teams feel immediately:",
      headers: ["Structured workflow", "Mixed manual queue"],
      rows: [
        {
          label: "Inquiry intake",
          values: [
            "Messages arrive with context, category, and owner from the start",
            "Questions arrive as free-form messages and get decoded later",
          ],
        },
        {
          label: "Buyer acknowledgement",
          values: [
            "Every inquiry gets an immediate next-step response",
            "Response speed depends on who sees the message first",
          ],
        },
        {
          label: "Revenue visibility",
          values: [
            "High-intent buying signals get surfaced fast in Slack or CRM",
            "Pre-sale questions compete with routine support noise",
          ],
        },
        {
          label: "Support routing",
          values: [
            "Fitment, product, order, and quote paths split automatically",
            "Someone has to sort every message manually",
          ],
        },
        {
          label: "Follow-up consistency",
          values: [
            "Stalled conversations trigger reminders and statuses automatically",
            "Follow-up happens only when the team remembers",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your store?",
      subtitle:
        "This page is most useful when mixed inquiry handling is already causing operational drag or lost revenue:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your team gets a steady mix of fitment questions, product questions, quote requests, and support messages every week",
            "High-intent buyers are waiting too long because every message lands in the same queue",
            "The same customer can contact you through forms, email, chat, and phone with no clean ownership trail",
            "You want faster routing without pretending AI should make final technical decisions",
            "One recovered order or faster close rate would justify a focused workflow build",
            "You already have humans who should receive the judgment-heavy conversations faster",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Inquiry volume is still tiny and manual handling is easy",
            "Your bigger problem is product-data quality or catalog accuracy rather than inquiry execution",
            "You want AI to make final compatibility, warranty, or exception decisions with no human review",
            "Nobody on the team owns inquiries even after they are routed",
            "You need a full replatform or ERP cleanup before workflow automation will help much",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What has to stay disciplined",
      subtitle:
        "This page works only if the workflow stays operationally honest:",
      items: [
        {
          icon: ShieldCheck,
          title: "Automate the queue, not the liability",
          body: "The system should capture, tag, route, remind, and escalate. Final technical judgment on tricky compatibility or warranty situations should stay with a human specialist when the stakes are real.",
        },
        {
          icon: Wrench,
          title: "Use approved answer paths",
          body: "If the store has fitment rules, product trees, brand-specific notes, or support policies, the workflow should support those. It should not improvise answers because they sound plausible.",
        },
        {
          icon: Bot,
          title: "Prioritize buyer-intent visibility",
          body: "The commercial win here is not just faster support. It is making sure pre-sale and quote-stage conversations stop getting buried under generic service noise.",
        },
        {
          icon: Slack,
          title: "Make ownership explicit",
          body: "An alert without clear ownership just creates another notification. The workflow should define who owns fitment, who owns product questions, who owns support exceptions, and when the conversation changes hands.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical customer inquiry workflow usually works",
      subtitle:
        "The best version is not complicated. It is just consistent end-to-end:",
      blocks: [
        {
          heading: "The inquiry enters through a controlled intake path",
          body: "Whether the message starts on a contact form, inbox, chat widget, or phone transcript, the system normalizes the request into the same structure: who is asking, what they need, how urgent it looks, and what context is missing.",
        },
        {
          heading: "The workflow classifies the intent before routing",
          body: "Fitment questions, product-detail questions, order issues, quote requests, and wholesale inquiries should not be treated as the same task. Classification is what stops the queue from becoming generic inbox chaos.",
        },
        {
          heading: "The customer gets an immediate next-step message",
          body: "Even when a human still needs to answer, the buyer should know the inquiry was received and what happens next. That single step reduces the drop-off created by silence and uncertainty.",
        },
        {
          heading: "High-intent or high-risk conversations get surfaced fast",
          body: "If the inquiry looks like a live buying signal, a valuable repeat customer, or a risky exception, the right person gets notified immediately so the human response happens where speed matters most.",
        },
        {
          heading: "The CRM records what happened next",
          body: "Statuses, owner changes, notes, and reminders stay attached to the record. Over time, that creates visibility into which inquiries create the most revenue, friction, or wasted time.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no published customer-inquiry-only case study yet, so the honest proof framing is adjacent but strong: direct auto-parts CRM proof plus nearby workflow pages already grounded in the same vertical.",
      studies: [
        {
          industry: "Auto Parts E-Commerce",
          headline: "5,600+ contacts organized with automated follow-up, segmentation, and Slack visibility",
          body: "The WheelsFeels case study is direct proof for the vertical and for the operating logic behind this page: centralized inquiry handling, segmented records, automated follow-up, and instant alerts when a real buyer or important reply appears.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Auto parts workflow cluster",
          headline: "The live auto-parts pages already isolate adjacent inquiry-handling layers",
          body: "The broader auto-parts page and the fitment-specific child page already show the same pattern from two angles: capture context, classify the conversation, route it correctly, and keep high-intent buyers from getting buried in generic support work.",
          link: "/fitment-inquiry-automation-for-auto-parts-ecommerce",
        },
      ],
      links: [
        { label: "Auto parts e-commerce case study", href: "/case-studies/ecommerce-crm-automation" },
        { label: "AI automation for auto parts e-commerce", href: "/ai-automation-for-auto-parts-ecommerce" },
        { label: "Fitment inquiry automation for auto parts e-commerce", href: "/fitment-inquiry-automation-for-auto-parts-ecommerce" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the fitment inquiry page?",
      answer:
        "The fitment page is narrower. It focuses specifically on compatibility-question intake, routing, and follow-up. This page is broader. It covers the mixed customer-inquiry layer around fitment, product questions, quote-stage messages, and support-vs-sales routing inside an auto parts store.",
    },
    {
      question: "How is this different from the generic e-commerce customer service page?",
      answer:
        "The generic e-commerce page is broader across online stores. This page is vertical-specific. It focuses on auto-parts realities like vehicle context, fitment-adjacent questions, product-detail clarification, and quote-stage buying signals where one mixed queue creates both support drag and revenue leakage.",
    },
    {
      question: "Can automation answer all product and fitment questions by itself?",
      answer:
        "Not safely. Automation is strongest at intake, classification, routing, reminders, and alerts. Final technical judgment should stay with a human when the answer depends on nuanced compatibility or policy review.",
    },
    {
      question: "What does a focused customer inquiry workflow usually cost?",
      answer:
        "A narrower build for intake, classification, acknowledgements, CRM logging, and alerts often starts around $2K-$4K. A broader system that also covers multiple channels, support paths, and deeper integrations usually lands in the $4K-$8K range depending on stack complexity.",
    },
    {
      question: "What is the best first workflow to automate?",
      answer:
        "Usually the inquiry path closest to lost revenue: mixed inbox triage, fitment-plus-product-question routing, or quote-stage follow-up. Start with the queue that creates the most repeated confusion every week and build that path end to end before expanding.",
    },
  ],
  faqSubtitle:
    "Practical questions from auto parts operators considering customer inquiry automation",
  ctaHeading: "Want customer inquiries to stop turning into inbox archaeology?",
  ctaText:
    "Book a 30-minute call. We will look at how customer inquiries reach your team today, where pre-sale and support messages get mixed together, and whether a focused routing + follow-up workflow would recover enough speed and revenue to justify building first.",
  ctaSubtext:
    "No inflated AI support claims. Just a practical recommendation based on your inquiry mix, current stack, and where buyers are actually slipping through.",
  relatedLinks: [
    { label: "AI automation for auto parts e-commerce", href: "/ai-automation-for-auto-parts-ecommerce" },
    { label: "Fitment inquiry automation for auto parts e-commerce", href: "/fitment-inquiry-automation-for-auto-parts-ecommerce" },
    { label: "Customer service automation for e-commerce brands", href: "/customer-service-automation-for-ecommerce-brands" },
    { label: "E-commerce CRM case study", href: "/case-studies/ecommerce-crm-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
