import {
  AlertTriangle,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock3,
  Database,
  Scale,
  Slack,
  Users,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ecommerce-crm-automation-vs-manual-follow-up",
  metaTitle:
    "E-Commerce CRM Automation vs Manual Follow-Up — Decision Guide | Dmytro AI",
  metaDescription:
    "Should an online store keep doing CRM follow-up manually or build custom automation? Compare cost, speed, team capacity, and the first workflow worth automating.",
  badgeText: "E-Commerce Decision Guide",
  badgeIcon: Scale,
  h1: "E-Commerce CRM Automation vs Manual Follow-Up",
  heroIntro:
    "Manual follow-up is fine when inquiry volume is low, the buying process is simple, and one person still remembers every lead, quote request, wholesale conversation, and support-to-sales handoff. It stops working when leads sit in inboxes, stale lists never get touched, replies depend on whoever happens to be online, and nobody can tell which contacts are still worth chasing. For an e-commerce brand with real inquiry volume, the decision is usually not 'CRM or no CRM.' It is whether manual follow-up is still good enough or whether a custom automation layer is now cheaper than continuing to leak conversations and owner attention.",
  heroSubtext:
    "Below: when manual follow-up is still acceptable, when automation becomes the safer move, what the first build should handle, and what direct proof supports this without pretending every store needs a giant custom system.",
  sections: [
    {
      type: "cards",
      title: "What manual follow-up usually looks like once a store starts feeling the strain",
      subtitle:
        "The pain is rarely one dramatic failure. It is the accumulation of slow replies, buried messages, and invisible dropped handoffs.",
      items: [
        {
          icon: Users,
          title: "Replies depend on memory and whoever is available",
          body: "A sales inquiry, fitment question, wholesale lead, or support message gets answered when someone notices it. Good operators can keep this together for a while, but it breaks once volume or channel complexity rises.",
        },
        {
          icon: Database,
          title: "Contact history lives in too many places",
          body: "Some conversations live in Shopify, some in Gmail, some in forms, some in spreadsheets, some in Slack. Manual follow-up usually means the team never sees one clean view of who asked what and what should happen next.",
        },
        {
          icon: Clock3,
          title: "Old leads and past buyers rarely get worked consistently",
          body: "The quiet cost of manual follow-up is not just slow first response. It is the database you already paid to build and never reactivated because nobody had time to segment, time sequences, and monitor replies properly.",
        },
        {
          icon: Slack,
          title: "High-intent moments get buried with routine support noise",
          body: "Without automation, an order-status question, a fitment inquiry, and a wholesale pricing request can land in the same queue. Valuable conversations get delayed because the team is doing manual triage all day.",
        },
      ],
    },
    {
      type: "table",
      title: "Manual follow-up vs. a custom automation layer",
      subtitle:
        "This is the real decision for inquiry-driven or higher-consideration e-commerce brands:",
      headers: ["Manual follow-up", "Custom CRM automation layer", "What changes first"],
      rows: [
        {
          label: "Speed to first response",
          values: [
            "Depends on who is online and how disciplined the team is",
            "Triggers immediately when a contact hits the system",
            "New inquiries stop waiting for inbox cleanup",
          ],
        },
        {
          label: "Old lead / past-buyer reactivation",
          values: [
            "Usually a one-off project that keeps slipping",
            "Runs off segments, rules, and timing automatically",
            "Dormant contacts become a real revenue lever",
          ],
        },
        {
          label: "Team visibility",
          values: [
            "Scattered across inboxes, notes, spreadsheets, and memory",
            "Contacts, status, replies, and ownership are centralized",
            "Less guesswork about who owns the next step",
          ],
        },
        {
          label: "Sales vs. support routing",
          values: [
            "Handled manually, often inconsistently",
            "Tagged and routed based on intent or trigger rules",
            "High-value conversations surface faster",
          ],
        },
        {
          label: "Cost profile",
          values: [
            "Looks cheap because owner or team time is hidden",
            "Requires upfront setup but removes recurring manual drag",
            "You can finally compare build cost vs. the leak it fixes",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When manual follow-up is still fine — and when it is not",
      subtitle:
        "This is where most brands overbuild or wait too long. The honest answer depends on inquiry volume, deal complexity, and how expensive missed follow-up really is.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Manual is still fine if...",
          variant: "green",
          items: [
            "Your store gets relatively few pre-sale or CRM-worthy inquiries each week",
            "One person can still respond same-day without messages piling up",
            "Most purchases are simple enough that very little follow-up is needed before conversion",
            "You do not yet have a stale database worth reactivating in a structured way",
            "Your bigger bottleneck is offer quality, traffic quality, or fulfillment rather than response discipline",
          ],
        },
        {
          icon: XCircle,
          heading: "Automation becomes the safer move when...",
          variant: "neutral",
          items: [
            "Leads, quote requests, or support-to-sales conversations are arriving through multiple channels",
            "You have old leads or past buyers that should be worked but never are",
            "Important replies depend too much on owner memory or team discipline",
            "The same contacts need tagging, routing, reminders, or escalation every time",
            "One recovered inquiry stream or reactivation flow would more than justify a focused build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Where a focused automation layer usually wins first",
      subtitle:
        "The answer is almost never 'automate everything.' It is to automate the smallest revenue leak that is already costing you the most.",
      items: [
        {
          icon: Bot,
          title: "Immediate response on new inquiries",
          body: "If high-intent contacts are currently waiting for a manual reply, first-response automation usually creates the clearest payoff. The goal is not to sound robotic. It is to make sure a real next step happens immediately and the right human sees the signal.",
        },
        {
          icon: Database,
          title: "Centralized CRM ownership",
          body: "Many brands do not need a whole new stack. They need one layer that captures contacts cleanly, tags them, logs their status, and makes the next action happen automatically instead of relying on scattered spreadsheets and inboxes.",
        },
        {
          icon: BarChart3,
          title: "Reactivation of stale leads and past buyers",
          body: "This is where manual follow-up usually collapses first. Old lists almost never get worked consistently by hand, but they can produce real revenue once segmentation, timing, and reply alerting are handled systematically.",
        },
        {
          icon: Wrench,
          title: "Support-vs-sales routing before the team gets buried",
          body: "A focused build can separate order-status noise from revenue conversations, route fitment or wholesale messages properly, and push only the right alerts into Slack or the CRM. That is often more valuable than adding another general-purpose dashboard.",
        },
        {
          icon: AlertTriangle,
          title: "Avoiding the false economy of 'free' manual work",
          body: "Owner time, delayed replies, and invisible dropped handoffs are not free just because they do not appear as software spend. The decision should be based on the cost of the leak, not just on whether manual follow-up feels cheaper on paper.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "This decision page is grounded in a direct published e-commerce CRM case study plus adjacent live guides on the same workflow family.",
      studies: [
        {
          industry: "E-Commerce / Auto Parts",
          headline: "5,600+ contacts organized and followed up without manual chasing",
          body: "The WheelsFeels case study is the clearest direct proof. A custom CRM and automation layer centralized thousands of contacts, automated follow-up, pushed alerts into Slack, and gave the team a way to work far more conversations without relying on scattered manual habits.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "E-Commerce buyer guide",
          headline: "The live e-commerce CRM guide already covers what the system should include",
          body: "The broader CRM automation page explains the build itself. This page narrows the buyer decision one step earlier: whether manual follow-up is still acceptable or whether that broader automation layer now makes financial and operational sense.",
          link: "/ecommerce-crm-automation-with-ai-follow-up",
        },
      ],
      links: [
        { label: "E-commerce CRM case study", href: "/case-studies/ecommerce-crm-automation" },
        { label: "E-commerce CRM automation guide", href: "/ecommerce-crm-automation-with-ai-follow-up" },
        { label: "Build vs. buy AI automation", href: "/build-vs-buy-ai-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the existing e-commerce CRM automation page?",
      answer:
        "That page explains what a good e-commerce CRM + AI follow-up system should do once you decide to build it. This page sits one step earlier in the decision chain: keep doing manual follow-up, or build that automation layer now?",
    },
    {
      question: "What is the clearest sign manual follow-up has stopped being good enough?",
      answer:
        "Usually it is a mix of slow replies, stale leads that never get worked, and too many important conversations depending on owner memory. If you cannot reliably say who owns the next step for every meaningful inquiry, manual follow-up is already straining.",
    },
    {
      question: "Do I need a custom CRM from scratch to stop doing follow-up manually?",
      answer:
        "Not always. Some brands can keep Shopify, GoHighLevel, HubSpot, Klaviyo, or another existing system and add a custom automation layer around capture, tagging, routing, and alerts. The decision is less about replacing everything and more about removing the manual bottleneck cleanly.",
    },
    {
      question: "What does a focused e-commerce CRM automation layer usually cost?",
      answer:
        "A bounded build that centralizes contacts and automates one or two high-value follow-up workflows often starts around $2K-$4K. Broader systems with multiple sequences, lifecycle logic, Slack alerts, and support-vs-sales routing typically land in the $4K-$8K range depending on stack complexity.",
    },
    {
      question: "When should I keep manual follow-up a little longer?",
      answer:
        "If inquiry volume is still low, most purchases are simple, and one person can answer everything same-day without the process slipping, manual is still fine. Automation starts making sense when the leak is real enough that disciplined manual work is no longer happening consistently.",
    },
  ],
  faqSubtitle:
    "Practical questions from operators deciding whether manual follow-up is still good enough",
  ctaHeading: "Want to know if your store should keep manual follow-up or automate it now?",
  ctaText:
    "Book a 30-minute call. We will look at how your inquiries move today, where follow-up is slipping, and whether the right next move is a focused automation layer, better process discipline, or no build yet.",
  ctaSubtext:
    "No giant-system sales pitch. Just a clear recommendation based on your actual inquiry flow, team capacity, and current stack.",
  relatedLinks: [
    { label: "E-commerce CRM case study", href: "/case-studies/ecommerce-crm-automation" },
    { label: "E-commerce CRM automation guide", href: "/ecommerce-crm-automation-with-ai-follow-up" },
    { label: "AI automation for e-commerce brands", href: "/ai-automation-ecommerce" },
    { label: "Build vs. buy AI automation", href: "/build-vs-buy-ai-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
