import {
  Workflow,
  MessageSquare,
  CalendarCheck,
  Repeat,
  Clock,
  Phone,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Clock3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-chiropractors",
  metaTitle:
    "What to Automate First for Chiropractors — Choose the Highest-ROI Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in a chiropractic practice? Practical guide to choosing between missed-call recovery, new-patient intake and scheduling, care-plan recall, no-show reduction, and after-hours call handling before a bigger automation build.",
  badgeText: "Chiropractic Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Chiropractors",
  heroIntro:
    "If your chiropractic practice knows it needs better automation, the safest first move is usually not a giant all-in-one front-desk rebuild. It is one bounded workflow that fixes an expensive leak fast. For most chiropractors, that first workflow is one of five things: missed-call recovery, new-patient intake and scheduling, care-plan recall, no-show reduction, or after-hours call handling. The right choice depends on where revenue is already slipping today — at the first unanswered phone call, during booking friction, after a patient drops off their care plan, on the day of an appointment, or after hours when the office is closed and new-patient intent goes cold.",
  heroSubtext:
    "Below: how to choose the first chiropractic workflow to automate, how this page stays distinct from the broader chiropractor page and the generic workflow guides already live, what adjacent proof honestly supports the recommendation, and when to keep the first project smaller instead of forcing a broader patient-communication system too early.",
  sections: [
    {
      type: "cards",
      title: "The first chiropractic workflows usually worth automating",
      subtitle:
        "Most practices do not need to automate everything at once. They need to start where the leak is already costing real money:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call recovery",
          body: "Start here when new-patient calls are still hitting voicemail because the front desk is helping someone in person. This is usually the best first project when the earliest leak is losing a motivated caller before your team ever gets a real conversation.",
        },
        {
          icon: CalendarCheck,
          title: "New-patient intake and scheduling",
          body: "Start here when inquiries are coming in but momentum dies during intake forms, insurance questions, scheduling back-and-forth, or reschedules. This is the right first build when the real leak sits between initial interest and a confirmed first visit.",
        },
        {
          icon: Repeat,
          title: "Care-plan recall",
          body: "Start here when the bigger leak is existing patients who should still be coming in but quietly disappear. If maintenance visits, treatment plans, or reactivation conversations rely on memory and sticky notes, recall can be a better first project than another top-of-funnel workflow.",
        },
        {
          icon: Clock,
          title: "No-show reduction",
          body: "Start here when the calendar is already getting filled but empty slots and late cancellations keep hurting utilization. This is the best first move when reminder timing, confirmations, and easy rescheduling are the obvious revenue drain.",
        },
        {
          icon: Phone,
          title: "After-hours call handling",
          body: "Start here when evenings and weekends matter, prospective patients still call after the office closes, and voicemail or next-day callbacks are clearly not enough. This is the right first workflow when demand already exists but nobody is covering the hours when interest still shows up.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which chiropractic workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact point where delay, weak ownership, or inconsistency is already hurting patient acquisition or retention:",
      options: [
        {
          icon: MessageSquare,
          heading: "Start with missed-call recovery",
          highlighted: true,
          items: [
            "New-patient calls still hit voicemail during lunch, adjustments, or checkout rushes",
            "You know speed-to-response matters more than another reminder sequence later in the funnel",
            "One or two recovered new-patient calls per month would justify the first build quickly",
            "Closest next page: /missed-call-follow-up-automation",
          ],
        },
        {
          icon: CalendarCheck,
          heading: "Start with intake and scheduling",
          items: [
            "Interest is coming in, but too much friction still exists between first contact and booked first visit",
            "The front desk is losing momentum during intake forms, insurance checks, reminders, or reschedules",
            "You need cleaner booking flow before you need broader lifecycle automation",
            "Closest next page: /booking-confirmation-and-reminder-automation",
          ],
        },
        {
          icon: Repeat,
          heading: "Start with care-plan recall",
          items: [
            "The bigger leak is overdue patients who should still be coming back but are no longer getting disciplined outreach",
            "Your practice has strong patient history but weak recall ownership by treatment timing or maintenance schedule",
            "You want the highest-payoff first project from existing patient relationships rather than more net-new lead volume",
            "Closest next page: /client-reactivation-automation",
          ],
        },
        {
          icon: Clock,
          heading: "Start with no-show reduction",
          items: [
            "The practice already books visits, but empty slots and late cancellations are still hurting provider utilization",
            "Reminder timing is inconsistent and nobody owns confirmations tightly enough",
            "One saved visit block per week would justify the build quickly",
            "Closest next page: /no-show-reduction-automation",
          ],
        },
        {
          icon: Phone,
          heading: "Start with after-hours call handling",
          items: [
            "Prospective patients still call after the office closes and nobody responds until the next day",
            "Voicemail is not enough because callers keep shopping while they wait",
            "You already know after-hours demand matters more than one more daytime nurture sequence",
            "Closest next page: /ai-phone-answering-for-service-businesses",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the chiropractic cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for chiropractors",
          values: [
            "Practice owners deciding which single workflow deserves to be the first automation project",
            "Helps choose between missed-call recovery, intake and scheduling, care-plan recall, no-show reduction, and after-hours call handling before a broader rollout",
          ],
        },
        {
          label: "AI automation for chiropractors",
          values: [
            "Owners evaluating the broader patient-communication and front-desk support layer",
            "Explains the whole chiropractic system across intake, scheduling, recall, reminders, reviews, and after-hours coverage",
          ],
        },
        {
          label: "No-show reduction automation",
          values: [
            "Practices that already know the biggest leak is empty slots and weak reminder discipline",
            "Focuses narrowly on confirmations, reminder timing, easy reschedules, and attendance recovery after the booking already exists",
          ],
        },
        {
          label: "Client reactivation automation",
          values: [
            "Businesses that already know their biggest problem is lapsed customers or patients",
            "Focuses narrowly on re-engaging overdue contacts with timing, sequencing, and handoff logic after the relationship already exists",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your chiropractic practice?",
      subtitle:
        "This page is useful when you know the practice needs better automation, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already see one obvious leak: missed calls, booking friction, lapsed care plans, empty slots, or uncovered after-hours demand",
            "You want one bounded workflow that proves value before paying for a broader automation layer",
            "The front desk is overloaded and manual follow-up only happens when someone remembers",
            "You care more about recovered visits and cleaner operations than about flashy tooling",
            "You want a practical recommendation instead of another vague software-stack pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The practice still has very low new-patient demand and no visible workflow pressure yet",
            "The real problem is offer positioning, provider capacity, or patient experience — not communication follow-through",
            "Nobody agrees on who owns calls, scheduling, reminders, and recall at all",
            "You are looking for a giant all-in-one rebuild before proving one narrower workflow first",
            "Manual discipline is already strong and there is no obvious leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first chiropractic automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost visits or repeated front-desk drag.",
      blocks: [
        {
          heading: "Start where delay already costs new-patient bookings or retention revenue",
          body: "If new-patient calls are being missed, missed-call recovery usually comes first. If people show intent but the office loses momentum during intake or scheduling, that workflow comes first. If appointments already exist but empty slots keep showing up, no-show reduction comes first. If the bigger hidden leak is patients who quietly disappear from care plans, recall comes first. The decision should follow the leak, not whichever automation sounds the most sophisticated.",
        },
        {
          heading: "Keep the first workflow small enough to run cleanly",
          body: "A narrower first build gives you faster time to value and fewer places to hide a broken process. Most practices learn more from one disciplined workflow than from a half-finished all-in-one rollout that touches every reminder, every review request, every after-hours call, and every reactivation campaign before the team is ready.",
        },
        {
          heading: "Do not jump to recall if the front end is still broken",
          body: "Care-plan recall can be a strong first project, but not if new-patient calls are still rolling to voicemail or intake friction is still costing first visits. Fix the earliest expensive leak first. Only then should you widen the system into broader lifecycle communication.",
        },
        {
          heading: "Let the first workflow shape the next build",
          body: "Once one workflow is running cleanly, you learn where the real handoffs, delays, and message failures actually live. That makes the broader chiropractic automation layer safer because it is now grounded in operating evidence instead of assumptions.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first chiropractic automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest project instead of the clearest leak",
          body: "Many practices jump straight to a full front-desk automation stack when the real issue is still one stage: missed calls, intake, recall, reminders, or after-hours coverage. Bigger scope feels strategic, but it usually delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring front-desk time as a real cost",
          body: "DIY work is not free when the owner or office manager spends evenings patching reminders, scheduling logic, and patient follow-up rules together after a full clinic day. The first workflow should be scoped against both cash cost and the time drag of getting it wrong.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: unanswered calls, unfinished intake, overdue care plans, empty slots, or after-hours inquiries that die overnight. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published chiropractic first-project case study on the site yet, so the page stays grounded in the live chiropractor parent page plus published phone-handling and CRM/follow-up proof.",
      studies: [
        {
          industry: "Chiropractic cluster",
          headline: "The live chiropractor page already isolates the exact workflow options this page is comparing",
          body: "The parent chiropractic page already breaks the operating layer into real workflow families: missed-call recovery, intake and scheduling, care-plan recall, no-show reduction, review automation, and after-hours call handling. This page sits one level earlier and helps an owner choose which bounded workflow should come first.",
          link: "/ai-automation-for-chiropractors",
        },
        {
          industry: "Published phone-handling proof",
          headline: "The restaurant voice-agent case study proves why immediate response matters when nobody can answer after hours",
          body: "That project is not a chiropractic build, but it is direct proof that after-hours and missed-call coverage change what happens before a lead disappears. The same operating principle applies when a prospective patient calls after the office closes or while the front desk is tied up.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ lead CRM case study proves why structured follow-up and reactivation matter once inquiries and past contacts start piling up",
          body: "That e-commerce case study is not a chiropractic build, but it is direct proof that neglected records, weak ownership, and inconsistent follow-up destroy recoverable value. The same logic supports missed-call recovery, intake follow-up, and care-plan recall in a chiropractic practice.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for chiropractors", href: "/ai-automation-for-chiropractors" },
        { label: "Client reactivation automation", href: "/client-reactivation-automation" },
        { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should a chiropractor automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: missed-call recovery if new-patient calls are hitting voicemail, intake and scheduling if booking friction is killing momentum, care-plan recall if overdue patients are quietly disappearing, no-show reduction if empty slots are hurting revenue, or after-hours call handling if demand arrives when the office is closed.",
    },
    {
      question: "How is this different from the broader chiropractor page?",
      answer:
        "The broader chiropractor page explains the whole operating layer across intake, scheduling, recall, reminders, reviews, and after-hours handling. This page sits one step earlier and helps you decide which one of those workflows should be the first bounded project before you pay for anything broader.",
    },
    {
      question: "Should a chiropractic practice start with missed-call recovery or care-plan recall?",
      answer:
        "Start with missed-call recovery if new-patient demand is still leaking at the very first phone interaction. Start with care-plan recall if the front end is reasonably healthy but the bigger hidden leak is patients who should still be coming back and are simply overdue with no consistent outreach rhythm.",
    },
    {
      question: "When should no-show reduction come before intake and scheduling automation?",
      answer:
        "Choose no-show reduction first when the calendar already fills reasonably well but the practice still loses too many visits to weak confirmations, reminder timing, or messy rescheduling. Choose intake and scheduling first when the real leak is still between inquiry and booked first visit.",
    },
    {
      question: "Why does the first workflow choice matter so much for ROI?",
      answer:
        "Because the first workflow shapes how fast you see a measurable result. A bounded project tied to the clearest leak — lost new-patient calls, booking friction, empty slots, overdue care plans, or after-hours demand — pays back faster and teaches you more than a bigger system built before the practice knows where the real friction lives.",
    },
  ],
  faqSubtitle:
    "Practical questions about choosing the first chiropractic automation",
  ctaHeading: "Need help choosing the first chiropractic workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your practice is leaking new-patient calls, booking momentum, filled visit slots, care-plan revenue, or after-hours demand now, then recommend whether the first move should be missed-call recovery, intake flow, reminders, recall, or after-hours coverage before anything broader gets built.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about what your practice should automate first.",
  relatedLinks: [
    { label: "AI automation for chiropractors", href: "/ai-automation-for-chiropractors" },
    { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
    { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
