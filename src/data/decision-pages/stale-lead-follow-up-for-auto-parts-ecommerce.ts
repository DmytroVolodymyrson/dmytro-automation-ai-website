import {
  AlertTriangle,
  BarChart3,
  Bot,
  Car,
  CheckCircle2,
  Clock,
  Database,
  FileSearch,
  Mail,
  RefreshCcw,
  Slack,
  Users,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "stale-lead-follow-up-for-auto-parts-ecommerce",
  metaTitle:
    "Stale Lead Follow-Up for Auto Parts E-Commerce — Recover Old Quote & Inquiry Leads | Dmytro AI",
  metaDescription:
    "How auto parts brands automate stale-lead follow-up without mixing old quote requests, fitment leads, and support traffic together. Recover old revenue, route live replies fast, and keep reactivation disciplined.",
  badgeText: "Auto Parts Workflow",
  badgeIcon: Car,
  h1: "Stale Lead Follow-Up for Auto Parts E-Commerce",
  heroIntro:
    "Auto parts brands rarely lose money only because new inquiries stop coming in. They also lose money because old quote requests, fitment conversations, wholesale inquiries, and high-intent product questions go quiet — then stay buried forever in an inbox, spreadsheet, or half-used CRM. A stale-lead follow-up workflow fixes that narrower recovery layer. It brings old opportunities back into a controlled sequence, separates real sales reactivation from routine support noise, and routes live replies to the team before a winnable order dies for good.",
  heroSubtext:
    "Below: what stale-lead follow-up should actually handle for auto parts brands, how it differs from fitment routing, mixed inquiry handling, and repeat-purchase reactivation, what proof supports it directly, and where human judgment still matters.",
  sections: [
    {
      type: "cards",
      title: "What stale-lead follow-up should actually handle",
      subtitle:
        "This page is specifically about pre-sale or quote-stage contacts that already showed intent, then went cold.",
      items: [
        {
          icon: Database,
          title: "Pull old opportunities into one recoverable list",
          body: "Stale fitment requests, quote-stage conversations, wholesale inquiries, and high-ticket product questions should stop living across scattered inboxes and exports. The first job is turning them into one trackable recovery segment.",
        },
        {
          icon: RefreshCcw,
          title: "Segment by why the lead went stale",
          body: "A fitment question that never got a full answer is different from a quote request that stalled on budget, or a wholesale inquiry that died after first contact. Better follow-up starts by separating those reasons instead of blasting one generic win-back message.",
        },
        {
          icon: Mail,
          title: "Restart the conversation with a practical next step",
          body: "Good stale-lead follow-up does not sound like desperate check-in spam. It gives the buyer one clear way back in: confirm vehicle details, reopen the quote, ask the product question again, or talk to the right human about the original request.",
        },
        {
          icon: Slack,
          title: "Surface re-engaged buyers immediately",
          body: "When an old lead replies after weeks or months of silence, the team should know fast. High-intent reactivation only creates value if the human response happens while the buyer is paying attention again.",
        },
        {
          icon: FileSearch,
          title: "Keep support traffic out of the recovery lane",
          body: "Old pre-sale leads should not get mixed with order-status questions, warranty issues, or routine support messages. Recovery works best when the workflow protects the commercial queue from unrelated service noise.",
        },
        {
          icon: BarChart3,
          title: "Show which old lead types are still worth working",
          body: "Over time, the workflow should reveal whether old fitment leads, quote requests, or wholesale conversations still reopen profitably — and which stale segments are mostly noise and should be suppressed.",
        },
      ],
    },
    {
      type: "table",
      title: "Stale-lead follow-up vs. other live auto-parts pages",
      subtitle:
        "These pages can coexist when the workflow stage stays disciplined:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for auto parts e-commerce",
          values: [
            "Operators evaluating the broader automation stack across sales, support, CRM, and lifecycle workflows",
            "Covers the full operating layer: fitment intake, inquiry routing, stale-lead recovery, support triage, reactivation, and alerts",
          ],
        },
        {
          label: "Customer inquiry automation",
          values: [
            "Mixed inbound queues where fitment, product, quote, and support messages all arrive together",
            "Classifies and routes live inbound messages so high-intent buyers stop getting buried in one shared queue",
          ],
        },
        {
          label: "Stale lead follow-up",
          values: [
            "Old quote requests, fitment conversations, and inquiry-stage contacts that already went quiet",
            "Reopens dormant pre-sale opportunities with segmented follow-up, reply alerting, and clear ownership",
          ],
        },
        {
          label: "Repeat-purchase & reactivation automation",
          values: [
            "Past buyers and lifecycle follow-up after purchase",
            "Drives reorder timing, dormant-customer reactivation, and post-purchase revenue recovery",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your brand?",
      subtitle:
        "Best for auto parts teams that already know old inquiries are leaking money but have no disciplined recovery motion.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You have old fitment, quote, or wholesale leads sitting untouched in a CRM, inbox, or spreadsheet",
            "Your products involve enough consideration that buyers often need multiple touches before ordering",
            "The team already knows some old leads are still valuable but nobody owns the recovery process",
            "A reopened quote or revived high-ticket inquiry would easily justify a focused workflow build",
            "You can distinguish stale pre-sale opportunities from routine support or already-closed conversations",
            "You have humans ready to take over once an old lead re-engages",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your store barely has any inquiry backlog worth working",
            "Your real problem is still first-response speed on fresh leads, not old leads going cold",
            "You want to blast every old contact with the same generic discount email",
            "Your product-data quality or ownership rules are too messy to know what the stale lead originally wanted",
            "You are hoping AI will fully close old opportunities without human sales follow-up when interest returns",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What has to stay disciplined",
      subtitle:
        "Stale-lead recovery only works if the workflow stays commercially honest.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not confuse old leads with past customers",
          body: "A stale quote request is not the same as a dormant repeat buyer. Pre-sale recovery messaging should reference the original buying conversation, not act like a lifecycle retention campaign.",
        },
        {
          icon: Bot,
          title: "Automate the restart, not the whole sale",
          body: "The system should reopen the conversation, capture context, and route replies. It should not pretend every revived lead can be sold automatically without human product or fitment judgment.",
        },
        {
          icon: Users,
          title: "Keep ownership explicit after reply",
          body: "The biggest failure mode is getting the reply and then losing momentum again. Once an old lead re-engages, the workflow should make ownership and next-step timing obvious to the team.",
        },
        {
          icon: Clock,
          title: "Start with the segments closest to revenue",
          body: "Do not begin by reactivating every old contact equally. Start with stale leads tied to high-ticket parts, quote-stage conversations, fitment questions with clear buying intent, or wholesale opportunities that can realistically reopen.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical stale-lead recovery workflow usually works",
      subtitle:
        "The strongest version is simple: clean the list, restart the right conversations, and route humans when intent returns.",
      blocks: [
        {
          heading: "Pull old inquiries into a structured segment",
          body: "The workflow starts by centralizing stale pre-sale contacts: old fitment requests, quote threads, wholesale forms, and other inquiry-stage leads that never properly closed. That matters because most brands cannot recover what they cannot see clearly.",
        },
        {
          heading: "Tag the lead by original context and likely next step",
          body: "A stale fitment conversation should not restart the same way as a pricing request or a wholesale inquiry. Good systems preserve the original context so the follow-up can ask the right next question instead of starting from zero.",
        },
        {
          heading: "Send a restart sequence with one clear path back in",
          body: "The first recovery touch should make it easy to respond now: confirm the vehicle details, reopen the quote, request the updated need, or talk to the team member who can actually move the order forward.",
        },
        {
          heading: "Trigger alerts when an old buyer wakes back up",
          body: "When a dormant lead replies, clicks, or reopens the conversation, Slack or CRM alerts should fire immediately. Recovery creates value only if the human response happens before the lead goes cold for a second time.",
        },
        {
          heading: "Use results to decide which stale segments deserve ongoing recovery",
          body: "Over time, the workflow shows which old lead categories still convert and which ones mostly create noise. That lets the brand focus recovery energy where the revenue is real instead of guessing.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "This page is grounded in direct auto-parts CRM proof plus the already-live auto-parts and e-commerce workflow cluster.",
      studies: [
        {
          industry: "Auto Parts E-Commerce",
          headline: "5,600+ contacts organized with automated follow-up, segmentation, and reply visibility",
          body: "The published WheelsFeels CRM case study is direct proof for the vertical and for the mechanics behind this page: centralizing old records, segmenting leads, running automated follow-up, and surfacing real replies fast instead of relying on manual chasing.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Auto-parts workflow cluster",
          headline: "The live auto-parts pages already separate fitment routing, inquiry handling, and broader CRM automation",
          body: "That cluster makes this child page more credible, not less. The broader auto-parts guide and the inquiry pages already define the live inbound layer; this page narrows in on what happens after old opportunities have already gone stale.",
          link: "/ai-automation-for-auto-parts-ecommerce",
        },
      ],
      links: [
        { label: "Auto parts e-commerce case study", href: "/case-studies/ecommerce-crm-automation" },
        { label: "AI automation for auto parts e-commerce", href: "/ai-automation-for-auto-parts-ecommerce" },
        { label: "Customer inquiry automation for auto parts e-commerce", href: "/customer-inquiry-automation-for-auto-parts-ecommerce" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the customer inquiry page?",
      answer:
        "Customer inquiry automation is about live inbound routing when new messages arrive. This page is about old pre-sale leads that already went quiet and now need a disciplined recovery workflow.",
    },
    {
      question: "How is this different from repeat-purchase and reactivation automation?",
      answer:
        "Repeat-purchase and reactivation is mostly about past buyers and lifecycle revenue. This page is narrower and earlier-stage. It focuses on dormant inquiry, quote, fitment, and wholesale leads that never properly converted in the first place.",
    },
    {
      question: "What does a focused stale-lead follow-up build usually cost?",
      answer:
        "A narrower stale-lead recovery workflow often starts around $2K-$4K when the main job is segmentation, restart sequences, CRM cleanup, and reply alerting. If the project also needs deeper CRM restructuring, multi-channel logic, or multiple stale segments with different handoff rules, scope usually moves into the $4K-$8K range.",
    },
    {
      question: "What old leads should an auto parts brand work first?",
      answer:
        "Usually the segments closest to recoverable revenue: high-ticket fitment conversations, quote-stage contacts, wholesale inquiries, and buyers who previously asked a technical product question but never got all the way to order. Do not start by blasting every old record equally.",
    },
    {
      question: "Can AI fully revive and close stale leads by itself?",
      answer:
        "Not safely. AI is strongest at segmentation, restart messaging, reminders, and reply routing. Human follow-up still matters when the buyer needs technical clarification, quote revision, or a real sales conversation to move forward.",
    },
  ],
  faqSubtitle:
    "Practical questions from auto parts operators considering stale-lead recovery automation",
  ctaHeading: "Want old auto-parts leads to stop dying quietly in the CRM?",
  ctaText:
    "Book a 30-minute call. We will look at what kinds of stale leads you are sitting on, which ones still look commercially recoverable, and whether a focused recovery workflow is worth building before broader lifecycle automation.",
  ctaSubtext:
    "No fake win-back promises. Just a practical recommendation based on your inquiry backlog, data quality, and sales process.",
  relatedLinks: [
    { label: "AI automation for auto parts e-commerce", href: "/ai-automation-for-auto-parts-ecommerce" },
    { label: "Customer inquiry automation for auto parts e-commerce", href: "/customer-inquiry-automation-for-auto-parts-ecommerce" },
    { label: "E-commerce CRM automation with AI follow-up", href: "/ecommerce-crm-automation-with-ai-follow-up" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
