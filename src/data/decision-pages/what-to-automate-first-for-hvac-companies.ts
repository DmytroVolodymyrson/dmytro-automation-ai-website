import {
  Workflow,
  MessageSquare,
  Zap,
  CalendarClock,
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
  slug: "what-to-automate-first-for-hvac-companies",
  metaTitle:
    "What to Automate First for HVAC Companies — Choose the Highest-ROI HVAC Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in your HVAC company? Practical guide to choosing between missed-call recovery, lead follow-up, booked-job scheduling, and live AI phone coverage before a bigger rollout.",
  badgeText: "HVAC Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for HVAC Companies",
  heroIntro:
    "If your HVAC company knows it needs better automation, the safest first move is usually not a giant all-in-one system. It is one bounded workflow that fixes an expensive leak first. For most HVAC companies, that first workflow is one of four things: missed-call recovery when no-cool and no-heat callers still hit voicemail, lead follow-up when web forms and incoming inquiries sit too long before anyone responds, booked-job scheduling and follow-through when the office keeps losing time to confirmations, reminders, and reschedule chaos, or live AI phone answering when the call load is too heavy for lighter callback workflows to protect demand reliably. The right choice depends on where jobs are already slipping today — before the first conversation, after the inquiry arrives, after the visit is already on the calendar, or when the office simply cannot answer enough live calls to keep up.",
  heroSubtext:
    "Below: how to choose the first HVAC workflow to automate, how this page stays distinct from the broader HVAC parent page and the narrower child pages already live, what direct and adjacent proof supports the recommendation, and when you should keep the first project smaller instead of forcing a bigger HVAC automation rollout too early.",
  sections: [
    {
      type: "cards",
      title: "The first HVAC workflows usually worth automating",
      subtitle:
        "Most HVAC companies do not need to automate everything at once. They need to start where the leak is already costing booked jobs or office time:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call recovery",
          body: "Start here when service calls are still hitting voicemail because the office is overloaded, the team is in the field, or after-hours demand keeps arriving when nobody can answer. This is usually the best first project when the leak starts before a dispatcher or CSR ever gets the chance to respond.",
        },
        {
          icon: Zap,
          title: "Lead follow-up",
          body: "Start here when HVAC inquiries come in through forms, LSAs, referrals, or callbacks but the response is still too slow or inconsistent. This is the best first workflow when the company is losing jobs because another shop answers first.",
        },
        {
          icon: CalendarClock,
          title: "Booked-job scheduling and follow-through",
          body: "Start here when calls and leads are already turning into appointments, but confirmations, reminders, reschedules, and office-to-tech handoff are creating avoidable callback traffic and missed details. This is the safest first move when the leak is after the job is already booked.",
        },
        {
          icon: Phone,
          title: "Live AI phone answering",
          body: "Start here when missed-call text-back is too light for the real call load, callers need a live answer, or after-hours and overflow coverage matter enough that voicemail and callbacks are costing real demand. This is the heavier phone layer for HVAC companies that have already proven they need more than a lighter recovery workflow.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which HVAC workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact point where speed, ownership, or follow-through breaks down:",
      options: [
        {
          icon: MessageSquare,
          heading: "Start with missed-call recovery",
          highlighted: true,
          items: [
            "Good service or replacement calls still disappear before anyone responds",
            "After-hours demand or field workload makes voicemail clearly too slow",
            "You want the lightest first fix that still protects new demand",
            "Closest next page: /hvac-missed-call-text-back",
          ],
        },
        {
          icon: Zap,
          heading: "Start with lead follow-up",
          items: [
            "The company gets enough new inquiries, but web forms, callbacks, and quote requests sit too long before anyone follows up",
            "Speed-to-lead matters more right now than heavier phone coverage or booked-job coordination",
            "One recovered install or service job per month would easily justify the build",
            "Closest next page: /hvac-lead-follow-up-automation",
          ],
        },
        {
          icon: CalendarClock,
          heading: "Start with booked-job scheduling and follow-through",
          items: [
            "Calls and leads are already booking, but confirmations, reminders, or dispatch continuity are messy",
            "The workflow problem starts after the calendar slot already exists",
            "You are losing office time to reschedule confusion, callback traffic, and weak technician context",
            "Closest next page: /hvac-scheduling-and-follow-up-automation",
          ],
        },
        {
          icon: Phone,
          heading: "Start with live AI phone answering",
          items: [
            "The office cannot keep up with live no-cool, no-heat, maintenance, or replacement calls even after trying lighter callback workflows",
            "Call urgency and caller expectations are high enough that a text-back alone is not enough",
            "You already know the phone layer is the first bottleneck and the lighter fix is no longer protecting demand",
            "Closest next page: /ai-phone-answering-for-hvac-companies",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the HVAC cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for HVAC companies",
          values: [
            "Owners deciding which single HVAC workflow deserves to be the first project",
            "Helps choose between missed-call recovery, lead follow-up, booked-job scheduling, and heavier live phone coverage before a broader rollout",
          ],
        },
        {
          label: "AI automation for HVAC companies",
          values: [
            "Owners evaluating the whole HVAC operating layer",
            "Explains the broader system across calls, lead response, booked-job coordination, seasonal outreach, review requests, and where automation helps overall",
          ],
        },
        {
          label: "HVAC lead follow-up automation",
          values: [
            "HVAC companies that already know the early-response leak is the first thing to fix",
            "Focuses narrowly on speed-to-lead, first-touch sequences, estimate request response, and the handoff before scheduling takes over",
          ],
        },
        {
          label: "HVAC scheduling and follow-up automation",
          values: [
            "HVAC companies that already know the post-booking workflow is the main leak",
            "Focuses narrowly on confirmations, reminders, reschedules, dispatch continuity, and cleaner office-to-field context after the visit is booked",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your HVAC company?",
      subtitle:
        "This page is useful when you know the business needs better follow-through, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already point to one obvious leak: missed calls, slow inquiry response, booked-job confusion, or overloaded live phone coverage",
            "You want a bounded workflow that proves value before funding a broader HVAC automation layer",
            "The office is losing time to repetitive follow-up and communication work instead of dispatch or customer support",
            "Seasonal peaks and urgent call windows make response discipline matter commercially",
            "You want a practical recommendation instead of another generic HVAC software pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The company still has very little inbound volume and no clear workflow pressure yet",
            "The real problem is weak demand, bad pricing, or technician capacity — not follow-through",
            "Nobody agrees on who owns calls, callbacks, booked-job updates, or customer records at all",
            "You are trying to automate everything at once before proving one narrower workflow first",
            "Manual discipline is already strong and there is no visible operational leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first HVAC automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost jobs or repeated office drag.",
      blocks: [
        {
          heading: "Start where delay already costs you revenue",
          body: "If service calls are still being lost before anyone responds, missed-call recovery usually comes first. If web forms, quote requests, and callbacks sit too long after the inquiry lands, lead follow-up comes first. If the company already books plenty of jobs but the office keeps fighting reminder, reschedule, and handoff chaos, the booked-job workflow comes first. The decision should follow the leak, not whichever automation sounds the most advanced.",
        },
        {
          heading: "Keep the first workflow small enough to run cleanly",
          body: "A narrower first build gives you faster time to value and fewer places to hide a broken process. Most HVAC companies learn more from one disciplined workflow than from a half-finished all-in-one rollout that touches every phone path, every reminder, and every CRM trigger before the team is ready.",
        },
        {
          heading: "Use live AI phone coverage only when the lighter fix stops being enough",
          body: "Many HVAC companies should start with missed-call recovery or lead follow-up before they jump into full live AI phone answering. Those lighter layers are often enough to protect demand quickly. If call urgency, after-hours volume, or caller expectations prove that the lighter fix is not enough, then it becomes easier to justify the heavier phone layer from real operating evidence.",
        },
        {
          heading: "Let the first workflow shape the broader system later",
          body: "Once one narrow HVAC workflow is working, you learn where the real bottlenecks and message failures actually live. That makes the broader rollout safer because it is now grounded in real call patterns, booking behavior, and office workload instead of assumptions.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first HVAC automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest project instead of the clearest leak",
          body: "Many HVAC companies jump toward a full automation stack when the real issue is still one stage: calls, first response, scheduling continuity, or after-hours coverage. Bigger scope feels strategic, but it often delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring office time as a real cost",
          body: "DIY work is not free when the owner, dispatcher, or CSR spends weeks patching reminders, follow-up rules, and routing logic. The first workflow should be scoped against both cash cost and the time drag of getting it wrong.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: missed calls, cold inquiries, callback-heavy schedule changes, or after-hours demand nobody is covering. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
        {
          icon: ShieldCheck,
          title: "Trying to automate judgment-heavy dispatch decisions too early",
          body: "The first HVAC workflow should improve timing, consistency, and visibility — not improvise technician assignment logic, pricing exceptions, or nuanced service judgment without clear guardrails. Use automation to support dispatch and office staff, not to fake operational judgment before the inputs are reliable.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "Unlike some newer clusters, the HVAC cluster already has direct operational proof plus several live child pages. That makes a first-project scoping page a clean next layer instead of filler.",
      studies: [
        {
          industry: "HVAC cluster",
          headline: "The live HVAC pages already isolate the exact first-project options this page is comparing",
          body: "The HVAC parent page plus the lead-follow-up, missed-call, scheduling, and live-phone children already break the cluster into real workflow stages. This page sits one level earlier and helps an HVAC owner decide which of those narrower workflows should come first.",
          link: "/ai-automation-for-hvac-companies",
        },
        {
          industry: "Direct HVAC proof",
          headline: "The HVAC database reactivation page already shows there is real HVAC-specific proof behind using bounded workflow automation before a bigger rebuild",
          body: "That page is not itself a first-project guide, but it is direct HVAC evidence that structured outreach, segmentation, and follow-through can recover booked work from contacts the business already owns. It reinforces the principle that a smaller, clearly scoped workflow often pays off before a broader system does.",
          link: "/hvac-database-reactivation",
        },
        {
          industry: "Published phone and CRM proof",
          headline: "Published phone-answering and CRM case studies support the same operating logic this page uses",
          body: "The Paris Cafe voice-agent case study proves the value of immediate call coverage when nobody can answer live, and the e-commerce CRM case study proves why structured statuses and follow-up ownership matter before opportunity quietly rots. Those mechanics transfer directly to HVAC call handling and office workflow design.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for HVAC companies", href: "/ai-automation-for-hvac-companies" },
        { label: "HVAC lead follow-up automation", href: "/hvac-lead-follow-up-automation" },
        { label: "HVAC scheduling and follow-up automation", href: "/hvac-scheduling-and-follow-up-automation" },
        { label: "AI phone answering for HVAC companies", href: "/ai-phone-answering-for-hvac-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should an HVAC company automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: missed-call recovery if service calls are still being lost before anyone responds, lead follow-up if new inquiries sit too long after they arrive, booked-job scheduling and follow-through if the office keeps fighting reminder and reschedule chaos, or live AI phone answering if the lighter callback layer is clearly no longer enough for the real call load.",
    },
    {
      question: "How is this different from the broader HVAC automation page?",
      answer:
        "The broader HVAC page explains the whole operating picture: calls, follow-up, booked-job communication, seasonal outreach, and where AI helps overall. This page stays one step earlier and helps you choose which single workflow should come first before you try to automate more of the HVAC operation.",
    },
    {
      question: "When should lead follow-up come before missed-call recovery?",
      answer:
        "Choose lead follow-up first when the bigger leak is not unanswered calls but slow response to web forms, quote requests, and inbound inquiries that are already entering your systems. Choose missed-call recovery first when the business is still losing service calls before anyone ever gets the chance to respond.",
    },
    {
      question: "When should booked-job scheduling come before live AI phone answering?",
      answer:
        "Choose booked-job scheduling first when demand is already getting booked and the real pain is confirmations, reminders, reschedules, or office-to-tech handoff. Choose live AI phone answering first when the front-end phone volume is still the bottleneck and callers need a real answer before the job even exists on the calendar.",
    },
    {
      question: "Do most HVAC companies need a big all-in-one automation build right away?",
      answer:
        "Usually no. Most small and mid-sized HVAC companies get better ROI by fixing one bounded workflow first, proving it works, and then expanding. The first project should be small enough to run cleanly and measurable enough to justify the next layer.",
    },
  ],
  relatedPages: [
    {
      title: "AI Automation for HVAC Companies",
      description:
        "Broad HVAC automation overview covering calls, lead response, scheduling, seasonal outreach, and where AI actually helps.",
      href: "/ai-automation-for-hvac-companies",
    },
    {
      title: "HVAC Lead Follow-Up Automation",
      description:
        "Early-funnel HVAC workflow focused on speed-to-lead, inquiry response, and short nurture before scheduling takes over.",
      href: "/hvac-lead-follow-up-automation",
    },
    {
      title: "HVAC Scheduling and Follow-Up Automation",
      description:
        "Booked-job HVAC workflow focused on confirmations, reminders, reschedules, dispatch continuity, and office-to-field handoff.",
      href: "/hvac-scheduling-and-follow-up-automation",
    },
    {
      title: "AI Phone Answering for HVAC Companies",
      description:
        "Heavier HVAC phone-coverage guide for live call handling, after-hours coverage, and CSR relief when lighter fixes are not enough.",
      href: "/ai-phone-answering-for-hvac-companies",
    },
  ],
  bottomCta: {
    heading: "Need help choosing the first HVAC workflow to automate?",
    body: "Book a 30-minute call. We will look at where your HVAC company is actually leaking jobs or office time today, tell you which workflow should come first, and show you what a smaller first build would need to include before you fund a broader rollout.",
  },
};

export default data;
