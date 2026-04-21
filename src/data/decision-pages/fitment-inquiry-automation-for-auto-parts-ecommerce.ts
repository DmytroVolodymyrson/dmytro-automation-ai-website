import {
  Bot,
  Car,
  CheckCircle2,
  Clock,
  Database,
  FileSearch,
  MessageSquare,
  Route,
  ShieldCheck,
  Slack,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "fitment-inquiry-automation-for-auto-parts-ecommerce",
  metaTitle:
    "Fitment Inquiry Automation for Auto Parts E-Commerce — Faster Routing, Fewer Lost Buyers | Dmytro AI",
  metaDescription:
    "Automate fitment inquiry intake for auto parts e-commerce. Capture vehicle details, route compatibility questions fast, alert the team on high-intent buyers, and stop losing revenue to inbox chaos.",
  badgeText: "Auto Parts Workflow",
  badgeIcon: Car,
  h1: "Fitment Inquiry Automation for Auto Parts E-Commerce",
  heroIntro:
    "If your auto parts store gets compatibility questions by email, form, chat, or phone, fitment handling is usually one of the first places automation pays for itself. The problem is not just reply speed. It is intake quality, routing, visibility, and follow-up. Vehicle details arrive incomplete, the same customer asks in multiple places, urgent buyers sit beside low-priority support tickets, and the team loses time figuring out what needs a human answer now versus what should trigger the next step automatically. A focused fitment inquiry workflow fixes that operational gap without pretending technical judgment should be automated away.",
  heroSubtext:
    "Below: what a fitment automation system should actually do, where the ROI shows up first, what must stay human, and how to use adjacent proof honestly when your published case study is an auto-parts CRM build rather than a dedicated fitment-only project.",
  sections: [
    {
      type: "cards",
      title: "What fitment inquiry automation should handle",
      subtitle:
        "The best workflow does more than send an auto-reply. It creates structure around every compatibility question:",
      items: [
        {
          icon: FileSearch,
          title: "Structured intake",
          body: "Collect the basics up front: vehicle year, make, model, trim, engine, SKU or product family, and the buyer's actual question. The goal is to stop vague 'will this fit?' messages from landing in the queue with no usable context.",
        },
        {
          icon: Route,
          title: "Routing by product line or complexity",
          body: "Not every inquiry belongs with the same rep. Automation can tag wheel, suspension, exhaust, wholesale, and support questions differently so the right person gets the right conversation first.",
        },
        {
          icon: Clock,
          title: "Fast acknowledgement and next-step follow-up",
          body: "Buyers should get an immediate confirmation that the request was received, plus the next expected step. If the answer is not instant, the system should still keep the lead warm instead of leaving them in silence.",
        },
        {
          icon: Slack,
          title: "High-intent team alerts",
          body: "Some fitment questions are really buying signals for expensive or urgent orders. The system should surface those fast in Slack or the CRM instead of making the team watch inboxes all day.",
        },
        {
          icon: Database,
          title: "CRM logging and deduplication",
          body: "The inquiry should become a tracked record tied to the buyer, vehicle context, source, and status. That prevents the same customer from getting lost across email threads, forms, and chat logs.",
        },
        {
          icon: MessageSquare,
          title: "Reminder and handoff logic",
          body: "If a customer does not reply, or if the team owes an answer, the system should trigger the next reminder or escalation automatically. Manual follow-up should be reserved for the judgment-heavy part of the conversation.",
        },
      ],
    },
    {
      type: "table",
      title: "Manual fitment handling vs. automated fitment handling",
      subtitle:
        "This is where auto parts operators usually feel the difference immediately:",
      headers: ["Automated", "Manual"],
      rows: [
        {
          label: "Inquiry intake",
          values: [
            "Vehicle details and product context are captured in a consistent format",
            "Questions arrive as free-form messages with missing context",
          ],
        },
        {
          label: "Routing speed",
          values: [
            "Requests get tagged and assigned by product line or urgency",
            "Someone reads each message and decides where it belongs",
          ],
        },
        {
          label: "Buyer acknowledgement",
          values: [
            "Every serious inquiry gets an instant next-step message",
            "Response time depends on who notices the inbox first",
          ],
        },
        {
          label: "Lead visibility",
          values: [
            "Questions live in CRM with statuses, notes, and alerts",
            "Context is scattered across inboxes, chat, and memory",
          ],
        },
        {
          label: "Follow-up consistency",
          values: [
            "Unanswered or stalled inquiries trigger reminders automatically",
            "Follow-up happens only when the team remembers",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your store?",
      subtitle:
        "Fitment automation is strongest when compatibility questions are already creating revenue leaks or operational drag:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your team handles recurring compatibility questions every week",
            "High-intent buyers are waiting too long for answers or quotes",
            "The same inquiry can arrive through forms, email, chat, or phone and nobody owns the full trail",
            "Vehicle and SKU context is often incomplete, forcing extra back-and-forth",
            "One saved order or faster close rate would easily justify a focused workflow build",
            "You already have a real human expert who should receive the judgment-heavy questions faster",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You barely receive any fitment questions yet",
            "Your bigger problem is product data quality or catalog accuracy, not inquiry handling",
            "You want AI to make final compatibility claims with no human oversight",
            "Your team still has no stable process for who owns inquiries once they come in",
            "You need a full ERP or catalog overhaul before workflow automation will help much",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for fitment workflows",
      subtitle:
        "This is where disciplined workflow design matters more than flashy AI copy:",
      items: [
        {
          icon: ShieldCheck,
          title: "Do not automate final technical judgment blindly",
          body: "Automation should capture, tag, route, and remind. If fitment accuracy depends on nuanced technical review, that last step should stay with a human specialist.",
        },
        {
          icon: Wrench,
          title: "Use approved answer paths",
          body: "If the store has known compatibility rules, lookup tools, or brand-specific decision trees, the workflow should support those. It should not invent answers because it 'sounds right.'",
        },
        {
          icon: Bot,
          title: "Automate the queue, not the liability",
          body: "The safest win is operational: faster intake, cleaner routing, clearer statuses, and better follow-up. That is usually enough to create ROI without overreaching into risky automation behavior.",
        },
        {
          icon: Slack,
          title: "Escalate buying signals immediately",
          body: "When a fitment question looks like an active purchase decision, the human team should know right away. That is where Slack alerts and CRM ownership rules matter most.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a fitment inquiry workflow usually works",
      subtitle:
        "A focused system is usually simple. The value comes from executing the same basics every time:",
      blocks: [
        {
          heading: "The question enters through a controlled intake path",
          body: "Whether the inquiry starts on a product page, contact form, support inbox, or phone transcript, the system captures the request and normalizes the key details so the team is not decoding every message from scratch.",
        },
        {
          heading: "The workflow tags the inquiry and creates the owner",
          body: "Vehicle context, product line, source, and urgency determine where the request goes next. That makes routing explicit instead of relying on whoever happens to be checking messages.",
        },
        {
          heading: "The buyer gets an immediate next-step response",
          body: "Even when a specialist still needs to review the fitment question, the customer should know the request is received and moving. That alone reduces drop-off from buyers who assume nobody is going to answer.",
        },
        {
          heading: "High-intent conversations trigger alerts",
          body: "If the request looks like a live purchase decision, quote request, or repeat-buyer opportunity, the team gets notified right away so the human response happens where speed matters most.",
        },
        {
          heading: "The CRM tracks what happened next",
          body: "Statuses, reminders, and reply visibility stay attached to the contact record. Over time, that gives the store real insight into inquiry volume, bottlenecks, and which product questions are consuming the most team time.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no published fitment-only case study yet, so the honest proof framing is adjacent but direct enough: a real auto-parts CRM and follow-up build handling thousands of inquiries plus nearby workflow pages that use the same operational pattern.",
      studies: [
        {
          industry: "Auto Parts E-Commerce",
          headline: "5,600+ leads organized with segmentation, automated follow-up, and Slack visibility",
          body: "The WheelsFeels case study is direct proof for the vertical and for the system design logic behind this page: structured intake, segmented records, automated follow-up, and instant alerts for high-intent replies instead of inbox chaos.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Auto Parts workflow cluster",
          headline: "The broader auto-parts page already frames fitment routing as an operational bottleneck",
          body: "The live auto-parts industry page shows why fitment handling matters inside this vertical specifically: product compatibility questions, quote requests, support routing, and stale-lead follow-up all compound when there is no structured system behind them.",
          link: "/ai-automation-for-auto-parts-ecommerce",
        },
      ],
      links: [
        { label: "Auto parts e-commerce case study", href: "/case-studies/ecommerce-crm-automation" },
        { label: "AI automation for auto parts e-commerce", href: "/ai-automation-for-auto-parts-ecommerce" },
        { label: "CRM automation examples for small business", href: "/crm-automation-examples-small-business" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Can automation answer fitment questions by itself?",
      answer:
        "Sometimes it can handle the intake and route simple known cases, but final compatibility judgment should stay with a human when the answer depends on nuanced technical review. The safest ROI usually comes from automating the queue, not pretending every question should be answered automatically.",
    },
    {
      question: "What is the best first step to automate?",
      answer:
        "Usually the first win is structured intake plus routing: capture the vehicle details, create a CRM record, send an immediate acknowledgement, and alert the right person when the inquiry looks high intent. That alone fixes a lot of lost-opportunity leakage before you automate anything more advanced.",
    },
    {
      question: "Does this need a custom CRM?",
      answer:
        "Not always. A focused workflow can sit on top of your current stack if you have workable forms, inboxes, and a system that can store statuses or notes. But if inquiry data is scattered everywhere, a cleaner CRM layer often becomes part of the solution.",
    },
    {
      question: "What does a focused fitment workflow usually cost?",
      answer:
        "A narrower build for intake, tagging, alerts, and follow-up often starts around $2K-$4K. If the project also includes CRM cleanup, multiple inquiry sources, product-line routing, and deeper lifecycle automation, the scope usually moves into the $4K-$8K range.",
    },
    {
      question: "How is this different from the broader auto parts automation page?",
      answer:
        "The broader page covers the whole operating system for an auto parts brand: CRM cleanup, support routing, reactivation, repeat-purchase flows, and alerts. This page is narrower. It focuses specifically on fitment inquiry intake, routing, and follow-up where compatibility questions are the bottleneck.",
    },
  ],
  faqSubtitle:
    "Practical questions from auto parts operators considering fitment workflow automation",
  ctaHeading: "Want fitment questions to stop getting buried in inbox noise?",
  ctaText:
    "Book a 30-minute call. We will look at how compatibility questions arrive today, where context gets lost, and whether a focused routing + follow-up workflow would recover enough speed and revenue to justify building first.",
  ctaSubtext:
    "No fake claims about fully automated fitment advice. Just a practical recommendation based on your current inquiry flow.",
  relatedLinks: [
    { label: "AI automation for auto parts e-commerce", href: "/ai-automation-for-auto-parts-ecommerce" },
    { label: "Auto parts e-commerce case study", href: "/case-studies/ecommerce-crm-automation" },
    { label: "AI automation for e-commerce brands", href: "/ai-automation-ecommerce" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
