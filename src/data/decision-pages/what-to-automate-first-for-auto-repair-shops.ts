import {
  Workflow,
  Phone,
  ClipboardCheck,
  CalendarClock,
  Wrench,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Clock3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-auto-repair-shops",
  metaTitle:
    "What to Automate First for Auto Repair Shops — Choose the Highest-ROI Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in your auto repair shop? Practical guide to choosing between missed-call recovery, estimate follow-up, appointment reminders, and maintenance reactivation before a bigger automation build.",
  badgeText: "Auto Repair Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Auto Repair Shops",
  heroIntro:
    "If your shop knows it needs better automation, the safest first move is usually not a giant all-in-one system. It is one bounded workflow that fixes an expensive leak. For most auto repair shops, that first workflow is one of four things: missed-call recovery, estimate follow-up, appointment confirmations and reminders, or maintenance reminder and reactivation campaigns. The right choice depends on where work is already slipping today — before the booking, after the estimate, after the visit is booked, or months after the customer disappeared.",
  heroSubtext:
    "Below: how to choose the first auto-repair workflow to automate, how this page stays distinct from the broader auto-repair page and the narrower child pages, what adjacent proof supports the recommendation, and when you should keep the first project smaller instead of forcing a bigger shop-automation rollout.",
  sections: [
    {
      type: "cards",
      title: "The first auto-repair workflows usually worth automating",
      subtitle:
        "Most shops do not need to automate everything at once. They need to start where the leak is already costing real money:",
      items: [
        {
          icon: Phone,
          title: "Missed-call recovery",
          body: "Start here when good callers keep hitting voicemail because the advisor is tied up, the bay is loud, or the shop cannot answer after hours. This is usually the highest-payoff first build when the problem starts before a quote or appointment even exists.",
        },
        {
          icon: ClipboardCheck,
          title: "Estimate follow-up",
          body: "Start here when the shop already inspects vehicles and sends estimates reliably, but too many repair recommendations die in silence. This is the right first workflow when quoted work is leaking because nobody owns the follow-up consistently.",
        },
        {
          icon: CalendarClock,
          title: "Booked-visit confirmations and reminders",
          body: "Start here when appointments are getting booked, but confirmations are vague, reminders are inconsistent, reschedules get lost, or no-shows create empty bay time. This is the safest first move when the leak is after the customer already agreed to come in.",
        },
        {
          icon: Wrench,
          title: "Maintenance reminders and reactivation",
          body: "Start here when the bigger issue is not new demand but weak retention. If customers disappear after one oil change, inspection, or deferred repair, maintenance and reactivation workflows can be the best first project instead of another acquisition-oriented automation.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which auto-repair workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact point where speed, ownership, or follow-through breaks down:",
      options: [
        {
          icon: Phone,
          heading: "Start with missed-call recovery",
          highlighted: true,
          items: [
            "Good callers are still being lost before the advisor can respond",
            "The front desk cannot keep up with live calls during busy periods",
            "After-hours demand matters and voicemail is clearly not enough",
            "Closest next page: /missed-call-text-back-for-auto-repair-shops",
          ],
        },
        {
          icon: ClipboardCheck,
          heading: "Start with estimate follow-up",
          items: [
            "The shop already wins inspection and diagnostic opportunities, but too many approved jobs never get worked because the quote went cold",
            "You have open estimates sitting with no consistent reminder logic",
            "One or two recovered repair jobs per month would justify the build",
            "Closest next page: /estimate-follow-up-automation-for-auto-repair-shops",
          ],
        },
        {
          icon: CalendarClock,
          heading: "Start with confirmations and reminders",
          items: [
            "Customers are booking visits, but reminders, reschedules, or day-of updates are messy",
            "No-shows or late changes are wasting service-advisor time and bay capacity",
            "The workflow problem starts after the job is already booked",
            "Closest next page: /appointment-scheduling-and-reminder-automation-for-auto-repair-shops",
          ],
        },
        {
          icon: Wrench,
          heading: "Start with maintenance reminders and reactivation",
          items: [
            "Past customers are not coming back for routine service or deferred work",
            "The shop has enough historical customer volume to justify a retention-first project",
            "Your biggest leak is repeat business, not raw lead flow",
            "Closest next page: /maintenance-reminder-automation-for-auto-repair-shops",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the auto-repair cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for auto repair shops",
          values: [
            "Owners deciding which single workflow deserves to be the first project",
            "Helps choose between missed-call recovery, estimate follow-up, booked-visit reminders, and retention/reactivation",
          ],
        },
        {
          label: "AI automation for auto repair shops",
          values: [
            "Owners evaluating the whole operating layer",
            "Explains the broader system across calls, estimates, reminders, maintenance outreach, reactivation, and review automation",
          ],
        },
        {
          label: "Missed call text-back for auto repair shops",
          values: [
            "Shops that already know the phone leak is the first thing to fix",
            "Focuses narrowly on SMS-first recovery after missed calls, callback triage, and when a live AI phone layer becomes the better fit",
          ],
        },
        {
          label: "Estimate follow-up automation for auto repair shops",
          values: [
            "Shops that already know sent quotes are the main leak",
            "Focuses narrowly on open-estimate reminders, deferred-work follow-up, and advisor handoff after the estimate exists",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your shop?",
      subtitle:
        "This page is useful when you know the business needs better follow-through, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already see one obvious leak: missed calls, cold estimates, weak reminders, or poor retention",
            "You want a bounded workflow that proves value before funding a broader automation layer",
            "The service advisor is overloaded and manual follow-up is inconsistent",
            "You want a practical recommendation instead of another generic shop-software pitch",
            "You care more about recovered revenue and cleaner operations than about flashy tooling",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The shop still has very little inbound volume and no clear workflow pressure yet",
            "The real problem is weak demand, poor pricing, or technician capacity — not follow-through",
            "Nobody agrees on who owns calls, estimates, reminders, or customer records at all",
            "You are looking for a giant rebuild before proving one narrower workflow first",
            "Manual discipline is already strong and there is no visible leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first auto-repair automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost revenue or repeated front-desk drag.",
      blocks: [
        {
          heading: "Start where delay already costs money",
          body: "If the shop loses callers before anyone responds, missed-call recovery usually comes first. If the shop inspects vehicles and sends quotes but fails to convert enough of them, estimate follow-up comes first. If the schedule itself is leaking through weak confirmations and reminders, the booked-visit workflow comes first. The decision should follow the leak, not whichever automation sounds the most advanced.",
        },
        {
          heading: "Keep the first workflow small enough to run cleanly",
          body: "A narrower first build gives you faster time to value and fewer places to hide a broken process. Most shops learn more from one disciplined workflow than from a half-finished all-in-one rollout that touches every message and every system before the team is ready.",
        },
        {
          heading: "Do not confuse retention work with phone or estimate problems",
          body: "Maintenance reminders and reactivation can be a great first project, but only when the shop already handles new demand reasonably well and the real leak is repeat business. If you are still missing fresh callers or losing open estimates, fix those first before you optimize the back half of the customer lifecycle.",
        },
        {
          heading: "Move to heavier phone coverage only when the lighter fix stops being enough",
          body: "Many shops should start with missed-call text-back before they jump into full live AI phone answering. That lighter layer is often enough to recover value quickly. If the call volume, caller expectations, or after-hours demand prove that SMS-first recovery is not enough, then it is easier to justify the next phone layer from real operating evidence.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first shop-automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest project instead of the clearest leak",
          body: "Many shops jump straight to a full automation stack when the real issue is still one stage: calls, estimates, reminders, or retention. Bigger scope feels strategic, but it often delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring advisor time as a real cost",
          body: "DIY work is not free when the advisor or owner spends weeks patching reminders, follow-up rules, and message routing. The first workflow should be scoped against both cash cost and the time drag of getting it wrong.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: missed calls, unworked estimates, no-shows, or dormant customers. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published auto-repair first-project case study on the site yet, so the page stays grounded in the live auto-repair cluster plus published call-handling and CRM proof.",
      studies: [
        {
          industry: "Auto-repair cluster",
          headline: "The live auto-repair pages already isolate the exact first-project options this page is comparing",
          body: "The parent auto-repair page plus the missed-call, estimate, scheduling, maintenance, and phone-answering children already break the cluster into real workflow stages. This page sits one level earlier and helps a shop decide which of those narrower workflows should come first.",
          link: "/ai-automation-for-auto-repair-shops",
        },
        {
          industry: "Published call-handling proof",
          headline: "The restaurant voice-agent case study proves the value of fixing missed-call and after-hours response before the lead disappears",
          body: "That project is not an auto-repair build, but it is direct proof that immediate phone coverage changes what happens when nobody can answer live. The same operating principle applies to a repair shop that keeps losing callers while the advisor is tied up.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ lead CRM case study proves why structured follow-up and lifecycle ownership matter before the backlog quietly rots",
          body: "That e-commerce case study is not a mechanic shop, but it is direct proof that neglected records, weak ownership, and inconsistent follow-up destroy recoverable value. The same logic supports estimate recovery and maintenance/reactivation workflows in an auto-repair shop.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for auto repair shops", href: "/ai-automation-for-auto-repair-shops" },
        { label: "Missed call text-back for auto repair shops", href: "/missed-call-text-back-for-auto-repair-shops" },
        { label: "Estimate follow-up automation for auto repair shops", href: "/estimate-follow-up-automation-for-auto-repair-shops" },
        { label: "Appointment scheduling and reminder automation for auto repair shops", href: "/appointment-scheduling-and-reminder-automation-for-auto-repair-shops" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should an auto repair shop automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: missed-call recovery if good callers are getting lost before anyone responds, estimate follow-up if quoted work keeps going cold, booked-visit reminders if no-shows and reschedules are wasting bay time, or maintenance reminders if the bigger issue is weak repeat business.",
    },
    {
      question: "How is this different from the broader auto-repair automation page?",
      answer:
        "The broader auto-repair page covers the whole operating layer. This page is narrower. It helps you choose which single workflow deserves to be the first project before you fund or scope a larger shop-automation build.",
    },
    {
      question: "Can a shop start with one workflow instead of a full system rebuild?",
      answer:
        "Usually yes. That is often the safer path. A bounded workflow like missed-call recovery, estimate follow-up, or appointment reminders proves value faster and shows you where the real ownership and routing gaps are before you add more complexity.",
    },
    {
      question: "When should maintenance reminders come first instead of phone or estimate workflows?",
      answer:
        "Only when new demand is already being handled reasonably well and the bigger leak is retention. If the shop is still missing fresh callers or failing to work open estimates consistently, fix those first before you prioritize maintenance and reactivation campaigns.",
    },
    {
      question: "What is the main ROI of choosing the first workflow correctly?",
      answer:
        "You get cleaner time to value, lower implementation risk, and a faster path to measurable wins. In practice that means more recovered repair jobs, fewer lost callers, fewer no-shows, or more returning customers — without paying for a bloated rollout before the shop has earned it.",
    },
  ],
  faqSubtitle: "Practical questions about choosing the first auto-repair automation",
  ctaHeading: "Need help choosing the first auto-repair workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your shop is leaking calls, estimates, booked visits, or repeat business now, then recommend whether the first move should be missed-call recovery, estimate follow-up, appointment reminders, or a retention workflow before anything broader gets built.",
  ctaSubtext:
    "No bloated all-in-one platform pitch. Just a practical first-project recommendation tied to the way your advisors, bays, and customer flow actually work.",
  relatedLinks: [
    { label: "AI automation for auto repair shops", href: "/ai-automation-for-auto-repair-shops" },
    { label: "Missed call text-back for auto repair shops", href: "/missed-call-text-back-for-auto-repair-shops" },
    { label: "Estimate follow-up automation for auto repair shops", href: "/estimate-follow-up-automation-for-auto-repair-shops" },
    { label: "Appointment scheduling and reminder automation for auto repair shops", href: "/appointment-scheduling-and-reminder-automation-for-auto-repair-shops" },
    { label: "Maintenance reminder automation for auto repair shops", href: "/maintenance-reminder-automation-for-auto-repair-shops" },
  ],
};

export default data;
