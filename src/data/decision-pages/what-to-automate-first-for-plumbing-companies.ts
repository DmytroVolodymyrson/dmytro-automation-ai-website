import {
  Workflow,
  MessageSquare,
  Zap,
  CalendarClock,
  FileText,
  Phone,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Clock3,
  ShieldCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-plumbing-companies",
  metaTitle:
    "What to Automate First for Plumbing Companies — Choose the Highest-ROI Plumbing Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in your plumbing company? Practical guide to choosing between missed-call recovery, lead follow-up, scheduling, estimate follow-up, and heavier after-hours phone coverage before a bigger rollout.",
  badgeText: "Plumbing Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Plumbing Companies",
  heroIntro:
    "If your plumbing company knows it needs better automation, the safest first move is usually not a giant all-in-one system. It is one bounded workflow that fixes an expensive leak first. For most plumbing companies, that first workflow is one of five things: missed-call recovery when emergency or same-day callers still hit voicemail, lead follow-up when web forms and quote requests sit too long before anyone replies, booked-job scheduling and reminder flow when the office keeps losing time to confirmations and reschedules, estimate follow-up when sent pricing keeps dying quietly after the visit, or heavier after-hours phone coverage when the call load is too urgent for lighter callback workflows to protect demand reliably. The right choice depends on where revenue is leaking today — before the first conversation, right after the inquiry lands, after the job is already booked, after pricing is already out, or when the office simply cannot answer enough live calls to keep up.",
  heroSubtext:
    "Below: how to choose the first plumbing workflow to automate, how this page stays distinct from the broader plumbing parent page, what adjacent proof honestly supports the recommendation, and when you should keep the first project smaller instead of forcing a bigger automation rollout too early.",
  sections: [
    {
      type: "cards",
      title: "The first plumbing workflows usually worth automating",
      subtitle:
        "Most plumbing companies do not need to automate everything at once. They need to start where the leak is already costing jobs or office time:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call recovery",
          body: "Start here when good service calls are still hitting voicemail because techs are in the field, the office is overloaded, or after-hours demand keeps arriving when nobody can answer. This is usually the best first project when the leak starts before anyone even gets the chance to respond.",
        },
        {
          icon: Zap,
          title: "Lead follow-up",
          body: "Start here when quote requests, web forms, LSA leads, and referral inquiries arrive often enough, but response is still too slow or inconsistent. This is the best first workflow when the company is losing jobs because another plumber answers first.",
        },
        {
          icon: CalendarClock,
          title: "Booked-job scheduling and reminders",
          body: "Start here when calls and leads are already turning into appointments, but confirmations, reminders, and reschedule handling are creating avoidable callback traffic and admin drag. This is the safest first move when the leak is after the job is already booked.",
        },
        {
          icon: FileText,
          title: "Estimate follow-up",
          body: "Start here when estimates are getting sent reliably but too many homeowners disappear after pricing. This is the right first workflow when the business has enough quote volume and the leak is clearly after the visit or estimate stage instead of before it.",
        },
        {
          icon: Phone,
          title: "Heavier after-hours phone coverage",
          body: "Start here when a missed-call text-back is too light for the real call load, callers expect a live answer, or after-hours and overflow coverage matter enough that voicemail and callbacks are costing real demand. This is the heavier phone layer for plumbing companies that already know the lighter recovery fix is not enough.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which plumbing workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact point where speed, ownership, or follow-through breaks down:",
      options: [
        {
          icon: MessageSquare,
          heading: "Start with missed-call recovery",
          highlighted: true,
          items: [
            "Good service or emergency calls are still being lost before anyone responds",
            "After-hours demand or field workload makes voicemail clearly too slow",
            "You want the lightest first fix that still protects new demand",
            "Closest related live guide: /missed-call-follow-up-automation",
          ],
        },
        {
          icon: Zap,
          heading: "Start with lead follow-up",
          items: [
            "The company gets enough new inquiries, but web forms, quote requests, and callbacks still sit too long before anyone follows up",
            "Speed-to-lead matters more right now than heavier phone coverage or booked-job coordination",
            "One recovered service or install job per month would easily justify the build",
            "Closest related live guide: /ai-lead-follow-up-for-service-businesses",
          ],
        },
        {
          icon: CalendarClock,
          heading: "Start with scheduling and reminders",
          items: [
            "Calls and leads are already booking, but confirmations, reminders, or reschedules are messy",
            "The workflow problem starts after the calendar slot already exists",
            "The office is losing time to callback traffic and schedule confusion instead of dispatching work cleanly",
            "Closest related live guide: /booking-confirmation-and-reminder-automation",
          ],
        },
        {
          icon: FileText,
          heading: "Start with estimate follow-up",
          items: [
            "The company responds quickly and sends estimates, but open quotes still die quietly afterward",
            "The leak happens after pricing exists, not before the first response",
            "You want a tighter quote-recovery workflow before investing in broader phone or admin automation",
            "Closest related live guide: /quote-follow-up-automation",
          ],
        },
        {
          icon: Phone,
          heading: "Start with heavier after-hours phone coverage",
          items: [
            "The office cannot keep up with live calls even after trying lighter callback or text-back workflows",
            "Call urgency and caller expectations are high enough that a delayed response is still losing work",
            "You already know the phone layer is the first bottleneck and the lighter fix is no longer protecting demand",
            "Closest related live guide: /ai-phone-answering-for-service-businesses",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the plumbing guidance already live",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for plumbing companies",
          values: [
            "Owners deciding which single plumbing workflow deserves to be the first project",
            "Helps choose between missed-call recovery, lead follow-up, scheduling and reminders, estimate follow-up, and heavier live phone coverage before a broader rollout",
          ],
        },
        {
          label: "AI automation for plumbing companies",
          values: [
            "Owners evaluating the whole plumbing operating layer",
            "Explains the broader system across calls, first response, booked-job coordination, estimate nurture, review requests, and where automation helps overall",
          ],
        },
        {
          label: "AI lead follow-up for service businesses",
          values: [
            "Teams that already know the early-response leak is the first thing to fix",
            "Focuses narrowly on speed-to-lead, first-touch sequences, and the handoff before scheduling or quoting takes over",
          ],
        },
        {
          label: "Quote follow-up automation",
          values: [
            "Teams that already know the leak starts after pricing is sent",
            "Focuses on reminder timing, objection-aware follow-through, and recovering quotes that went quiet after the estimate stage",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your plumbing company?",
      subtitle:
        "This page is useful when you know the business needs better follow-through, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already point to one obvious leak: missed calls, slow inquiry response, booked-job confusion, stale quotes, or overloaded after-hours demand",
            "You want a bounded workflow that proves value before funding a broader plumbing automation layer",
            "The office is losing time to repetitive follow-up and communication work instead of dispatch or customer support",
            "Emergency and same-day call windows make response discipline commercially important",
            "You want a practical recommendation instead of another generic software pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The company still has very little inbound volume and no clear workflow pressure yet",
            "The real problem is weak demand, bad pricing, or technician capacity — not follow-through",
            "Nobody agrees on who owns calls, callbacks, estimates, or the schedule at all",
            "You are trying to automate everything at once before proving one narrower workflow first",
            "Manual discipline is already strong and there is no visible operational leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first plumbing automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost jobs or repeated office drag.",
      blocks: [
        {
          heading: "Start where delay already costs you revenue",
          body: "If service calls are still being lost before anyone responds, missed-call recovery usually comes first. If web forms, quote requests, and callbacks sit too long after the inquiry lands, lead follow-up comes first. If the company already books plenty of work but the office keeps fighting reminder, reschedule, and schedule-confirmation chaos, the booked-job workflow comes first. If estimates get sent but too many homeowners disappear afterward, estimate follow-up comes first. The decision should follow the leak, not whichever automation sounds the most advanced.",
        },
        {
          heading: "Keep the first workflow small enough to run cleanly",
          body: "A narrower first build gives you faster time to value and fewer places to hide a broken process. Most plumbing companies learn more from one disciplined workflow than from a half-finished all-in-one rollout that touches every call path, every reminder, and every CRM trigger before the team is ready.",
        },
        {
          heading: "Use heavier live phone coverage only when the lighter fix stops being enough",
          body: "Many plumbing companies should start with missed-call recovery or lead follow-up before they jump into full live AI phone answering. Those lighter layers are often enough to protect demand quickly. If call urgency, after-hours volume, or caller expectations prove that the lighter fix is not enough, then it becomes easier to justify the heavier phone layer from real operating evidence.",
        },
        {
          heading: "Let the first workflow shape the broader system later",
          body: "Once one narrow plumbing workflow is working, you learn where the real bottlenecks and message failures actually live. That makes the broader rollout safer because it is now grounded in real call patterns, booking behavior, and office workload instead of assumptions.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first plumbing automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest project instead of the clearest leak",
          body: "Many plumbing companies jump toward a full automation stack when the real issue is still one stage: calls, first response, scheduling continuity, quote recovery, or after-hours coverage. Bigger scope feels strategic, but it often delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring office time as a real cost",
          body: "DIY work is not free when the owner or dispatcher spends weeks patching reminders, follow-up rules, and routing logic. The first workflow should be scoped against both cash cost and the time drag of getting it wrong.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: missed calls, cold inquiries, callback-heavy reschedules, stale estimates, or after-hours demand nobody is covering. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
        {
          icon: ShieldCheck,
          title: "Trying to automate judgment-heavy dispatch decisions too early",
          body: "The first plumbing workflow should improve timing, consistency, and visibility — not improvise technician assignment logic, pricing exceptions, or job-scope judgment without clear guardrails. Use automation to support dispatch and office staff, not to fake operational judgment before the inputs are reliable.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not yet a dedicated plumbing-child workflow cluster live. The honest support comes from the broad plumbing page, published phone and CRM case studies, and nearby home-service guidance already on the site.",
      studies: [
        {
          industry: "Plumbing parent page",
          headline: "The live plumbing page already isolates the exact first-project options this page is comparing",
          body: "The broader plumbing page explicitly names missed-call recovery, lead follow-up, appointment scheduling, estimate follow-up, review automation, and after-hours call handling as separate workflow families. This page sits one level earlier and helps a plumbing owner decide which of those narrower workflows should come first.",
          link: "/ai-automation-for-plumbing-companies",
        },
        {
          industry: "Published phone and CRM proof",
          headline: "Published case studies already prove the same operating logic this page uses",
          body: "The Paris Cafe voice-agent case study proves the value of immediate call coverage when nobody can answer live, and the e-commerce CRM case study proves why structured statuses and disciplined follow-up matter before opportunities quietly rot. Those mechanics transfer directly to plumbing call handling and office workflow design.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Adjacent home-service guidance",
          headline: "Live home-service guides already show the same priority trade-offs plumbing owners face",
          body: "The home-service appointment-setter page, the generic lead-follow-up and quote-follow-up guides, and nearby HVAC guidance all reinforce the same principle: start with the single bounded workflow where response speed or follow-through is already costing work.",
          link: "/ai-appointment-setter-for-home-service-businesses",
        },
      ],
      links: [
        { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
        { label: "AI appointment setter for home service businesses", href: "/ai-appointment-setter-for-home-service-businesses" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is usually the best first automation for a plumbing company?",
      answer:
        "For many plumbing companies, the first automation is missed-call recovery or lead follow-up because the leak starts before the first live conversation happens. If the business already responds quickly and books well but the office keeps drowning in confirmations and reschedules, scheduling automation can come first. If estimates are what keep dying, estimate follow-up can come first instead.",
    },
    {
      question: "How is this different from the broader plumbing automation page?",
      answer:
        "The broader plumbing page explains the whole operating layer across calls, first response, scheduling, estimates, reviews, and after-hours coverage. This page sits one step earlier. Its only job is to help you choose which one of those workflows should be the first bounded project instead of trying to build everything at once.",
    },
    {
      question: "What does a focused first plumbing workflow usually cost?",
      answer:
        "A narrower first workflow often lands around $1K-$3.5K depending on what it covers, how many systems need to connect, and whether the communication layer is simple text-based follow-up or heavier live phone logic. Broader multi-workflow plumbing systems cost more because they touch more stages, more handoffs, and more exceptions.",
    },
    {
      question: "Should a plumbing company automate review requests first?",
      answer:
        "Usually not. Review automation matters, but it is rarely the first workflow to fix if missed calls, slow inquiry response, booked-job confusion, or stale estimates are still leaking revenue upstream. Reviews become a better first project only when the earlier stages are already disciplined and the next commercial leak is local-trust follow-through after completed jobs.",
    },
    {
      question: "What is the main ROI of choosing the right first project?",
      answer:
        "The ROI usually comes from fixing the leak closest to lost jobs or repeated office drag. That might mean more booked emergency calls, faster response to quote requests, fewer schedule-confirmation callbacks, or more estimates recovered after pricing is sent. The biggest win is often not the automation itself — it is choosing the right first stage instead of spending on the wrong one.",
    },
  ],
  faqSubtitle:
    "Practical answers for plumbing companies deciding where the first automation should go",
  ctaHeading: "Need help choosing the first plumbing workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at how calls, new inquiries, schedules, and estimates move today, identify where jobs are actually being lost, and tell you whether the right first move is missed-call recovery, faster lead follow-up, a scheduling workflow, estimate follow-up, or no new build yet.",
  ctaSubtext:
    "No obligation. No giant-scope pitch. Just a practical recommendation based on how your plumbing business actually runs.",
  relatedLinks: [
    { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
    { label: "AI appointment setter for home service businesses", href: "/ai-appointment-setter-for-home-service-businesses" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
