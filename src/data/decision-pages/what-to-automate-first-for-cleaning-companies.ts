import {
  Workflow,
  MessageSquare,
  Phone,
  FileText,
  Repeat,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Clock3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-cleaning-companies",
  metaTitle:
    "What to Automate First for Cleaning Companies — Choose the Highest-ROI Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in a cleaning company? Practical guide to choosing between instant lead follow-up, missed-call recovery, quote follow-up, and recurring-client reactivation before a bigger automation build.",
  badgeText: "Cleaning Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Cleaning Companies",
  heroIntro:
    "If your cleaning company knows it needs better automation, the safest first move is usually not a giant all-in-one system. It is one bounded workflow that fixes an expensive leak fast. For most cleaning companies, that first workflow is one of four things: instant lead follow-up, missed-call recovery, quote follow-up, or recurring-client reactivation. The right choice depends on where revenue is already slipping today — right after the inquiry, after a missed call, after the quote is sent, or months after a client quietly stopped booking.",
  heroSubtext:
    "Below: how to choose the first cleaning-company workflow to automate, how this page stays distinct from the broader cleaning-company page and the generic workflow guides already live, what adjacent proof honestly supports the recommendation, and when you should keep the first project smaller instead of forcing a bigger office-system rollout.",
  sections: [
    {
      type: "cards",
      title: "The first cleaning-company workflows usually worth automating",
      subtitle:
        "Most cleaning companies do not need to automate everything at once. They need to start where the leak is already costing real money:",
      items: [
        {
          icon: MessageSquare,
          title: "Instant lead follow-up",
          body: "Start here when new web-form leads and ad leads sit too long before anyone replies. This is usually the highest-payoff first build when speed-to-lead is the main reason you lose quote requests before a real conversation even starts.",
        },
        {
          icon: Phone,
          title: "Missed-call recovery",
          body: "Start here when good callers keep hitting voicemail because the office is small, the team is in the field, or after-hours demand matters. This is the right first workflow when the leak starts before a quote request is fully captured.",
        },
        {
          icon: FileText,
          title: "Quote follow-up",
          body: "Start here when the business already responds and sends estimates reliably, but too many quotes die in silence. This is the best first project when the real problem is weak follow-through after pricing has already been delivered.",
        },
        {
          icon: Repeat,
          title: "Recurring-client reactivation",
          body: "Start here when the bigger issue is not raw lead volume but weak retention. If one-time customers disappear, deep-clean buyers never come back, or recurring clients lapse quietly, reactivation can be a better first build than another acquisition workflow.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which cleaning-company workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact place where delay, weak ownership, or inconsistency is already hurting revenue:",
      options: [
        {
          icon: MessageSquare,
          heading: "Start with instant lead follow-up",
          highlighted: true,
          items: [
            "New quote requests are arriving, but response time is measured in hours instead of minutes",
            "You are paying for Google Ads, Local Service Ads, SEO, or referral traffic that is not getting a disciplined first reply",
            "The business wins more when it is first to respond than when it keeps polishing the quote template",
            "Closest next page: /ai-lead-follow-up-for-service-businesses",
          ],
        },
        {
          icon: Phone,
          heading: "Start with missed-call recovery",
          items: [
            "Good callers are still being lost before the office can answer",
            "The owner or team is on jobs and cannot catch every inbound call live",
            "After-hours missed calls matter and voicemail is clearly not enough",
            "Closest next page: /missed-call-follow-up-automation",
          ],
        },
        {
          icon: FileText,
          heading: "Start with quote follow-up",
          items: [
            "The company already replies and sends estimates, but too many prospects go quiet after the quote arrives",
            "You have sent quotes sitting with no reminder cadence and no clear owner",
            "Recovering even a small number of cold quotes per month would justify the build",
            "Closest next page: /quote-follow-up-automation",
          ],
        },
        {
          icon: Repeat,
          heading: "Start with recurring-client reactivation",
          items: [
            "The bigger leak is weak repeat business, not a shortage of new inquiries",
            "Seasonal, deep-clean, or past recurring clients disappear without any outreach system",
            "You have enough past client volume for retention work to beat another acquisition-first workflow",
            "Closest next page: /client-reactivation-automation",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the cleaning-company cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for cleaning companies",
          values: [
            "Owners deciding which single workflow deserves to be the first project",
            "Helps choose between instant lead follow-up, missed-call recovery, quote follow-up, and recurring-client reactivation",
          ],
        },
        {
          label: "AI automation for cleaning companies",
          values: [
            "Owners evaluating the broader operating layer",
            "Explains the whole cleaning-company system across leads, missed calls, quotes, recurring schedules, reactivation, and reviews",
          ],
        },
        {
          label: "AI lead follow-up for service businesses",
          values: [
            "Businesses that already know the first leak is slow lead response",
            "Focuses narrowly on inquiry capture, response speed, message sequencing, and human handoff after the lead arrives",
          ],
        },
        {
          label: "Quote follow-up automation",
          values: [
            "Businesses that already know the biggest problem starts after the estimate is sent",
            "Focuses narrowly on quote reminders, objection recovery, and re-engagement after pricing exists",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your cleaning company?",
      subtitle:
        "This page is useful when you know the business needs better follow-through, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already see one obvious leak: slow lead response, missed calls, stale quotes, or weak repeat booking",
            "You want one bounded workflow that proves value before funding a broader automation layer",
            "The office is overloaded and manual follow-up happens only when someone remembers",
            "You want a practical recommendation instead of another generic software stack pitch",
            "You care more about recovered jobs and cleaner operations than about flashy tooling",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The business still has very little lead flow and no clear workflow pressure yet",
            "The real issue is pricing, hiring, fulfillment quality, or retention from poor service — not follow-through",
            "Nobody agrees on who owns inquiries, quotes, and recurring-client outreach at all",
            "You are looking for a giant all-in-one rebuild before proving one narrower workflow first",
            "Manual discipline is already strong and there is no visible leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first cleaning-company automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost revenue or repeated office drag.",
      blocks: [
        {
          heading: "Start where delay already costs jobs",
          body: "If quote requests arrive and nobody responds quickly, instant lead follow-up usually comes first. If callers disappear before the office can answer, missed-call recovery comes first. If the company is already sending quotes but not recovering enough of them, quote follow-up comes first. The decision should follow the leak, not whichever automation sounds the most sophisticated.",
        },
        {
          heading: "Keep the first workflow small enough to run cleanly",
          body: "A narrower first build gives you faster time to value and fewer places to hide a broken process. Most cleaning companies learn more from one disciplined workflow than from a half-finished all-in-one rollout that touches every inquiry, quote, schedule, and client message before the team is ready.",
        },
        {
          heading: "Do not confuse retention work with lead-response problems",
          body: "Client reactivation can be a great first project, but only when new demand is already being handled reasonably well. If quote requests are still being answered late or good callers are being lost to voicemail, fix that front-end leak before you optimize the back half of the client lifecycle.",
        },
        {
          heading: "Move to a broader cleaning-company system only after one workflow proves value",
          body: "Once one workflow is running cleanly, it becomes much easier to add the next layer — for example lead follow-up first, then quote follow-up, then reactivation. Proving one leak first keeps the rollout grounded in operating evidence instead of wishful scope.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first cleaning-company automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest project instead of the clearest leak",
          body: "Many owners jump straight to a full office automation stack when the real issue is still one stage: first response, missed calls, stale quotes, or repeat bookings. Bigger scope feels strategic, but it usually delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring office time as a real cost",
          body: "DIY work is not free when the owner or office manager spends weeks patching message rules, quote reminders, and reschedule logic together. The first workflow should be scoped against both cash cost and the time drag of getting it wrong.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: unanswered quote requests, missed calls, unaccepted estimates, or dormant clients. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published cleaning-company first-project case study on the site yet, so the page stays grounded in the live cleaning-company parent page plus published phone-handling and CRM/follow-up proof.",
      studies: [
        {
          industry: "Cleaning-company cluster",
          headline: "The live cleaning-company page already isolates the exact first-project options this page is comparing",
          body: "The parent cleaning-company page already breaks the operating layer into real workflow families: instant lead response, missed-call recovery, quote follow-up, recurring schedule management, reactivation, and review automation. This page sits one level earlier and helps an owner choose which bounded workflow should come first.",
          link: "/ai-automation-for-cleaning-companies",
        },
        {
          industry: "Published phone-handling proof",
          headline: "The restaurant voice-agent case study proves why immediate response matters when nobody can answer live",
          body: "That project is not a cleaning-company build, but it is direct proof that after-hours and missed-call coverage change what happens before the lead disappears. The same operating principle applies when a homeowner calls for a quote and reaches nobody.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ lead CRM case study proves why structured follow-up and reactivation matter once leads and past clients start piling up",
          body: "That e-commerce case study is not a cleaning-business project, but it is direct proof that neglected records, weak ownership, and inconsistent follow-up destroy recoverable value. The same logic supports quote recovery and recurring-client reactivation for a cleaning company.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for cleaning companies", href: "/ai-automation-for-cleaning-companies" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
        { label: "Client reactivation automation", href: "/client-reactivation-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should a cleaning company automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: instant lead follow-up if quote requests are sitting too long before a reply, missed-call recovery if good callers keep reaching voicemail, quote follow-up if sent estimates keep going cold, or recurring-client reactivation if the bigger issue is weak repeat business.",
    },
    {
      question: "How is this different from the broader cleaning-company automation page?",
      answer:
        "The broader cleaning-company page explains the whole operating layer. This page sits one step earlier and helps you decide which single workflow should be the first project before you expand into a larger system.",
    },
    {
      question: "Should a cleaning company start with missed-call text-back or lead follow-up?",
      answer:
        "Start with lead follow-up if the main problem is slow response to web forms and ad leads. Start with missed-call recovery if good callers are still being lost before the office can answer. Many companies eventually need both, but the first project should match the leak you can already see.",
    },
    {
      question: "When should client reactivation come before quote or lead workflows?",
      answer:
        "Only when the business is already handling new inquiries reasonably well and the bigger leak is weak repeat booking. If fresh leads are still being answered late or good callers are still getting lost, fix the front-end leak first.",
    },
    {
      question: "Does choosing the right first workflow really affect ROI that much?",
      answer:
        "Yes. The wrong first project creates scope, cost, and team drag before you have proof that the build solves a real leak. The right first workflow usually pays back faster because it fixes one visible revenue problem cleanly instead of trying to improve everything at once.",
    },
  ],
  faqSubtitle:
    "Practical questions about choosing the first cleaning-company automation",
  ctaHeading: "Need help choosing the first cleaning-company workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your business is leaking quote requests, missed calls, sent estimates, or repeat bookings now, then recommend whether the first move should be lead follow-up, missed-call recovery, quote nurture, or client reactivation before anything broader gets built.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical recommendation based on where your cleaning company is already losing revenue.",
  relatedLinks: [
    { label: "AI automation for cleaning companies", href: "/ai-automation-for-cleaning-companies" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
    { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
