import {
  Workflow,
  MessageSquare,
  CalendarCheck,
  Clock,
  Repeat,
  Phone,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Clock3,
  Sparkles,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-med-spas",
  metaTitle:
    "What to Automate First for Med Spas — Choose the Highest-ROI Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in a med spa? Practical guide to choosing between lead follow-up, consultation booking, no-show reduction, treatment recall, and after-hours inquiry handling before a bigger automation build.",
  badgeText: "Med Spa Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Med Spas",
  heroIntro:
    "If your med spa knows it needs better automation, the safest first move is usually not a giant all-in-one front-desk rebuild. It is one bounded workflow that fixes an expensive leak fast. For most med spas, that first workflow is one of five things: lead follow-up, consultation booking, no-show reduction, treatment recall, or after-hours inquiry handling. The right choice depends on where revenue is already slipping today — right after the inquiry, during scheduling, on the day of the appointment, months after a patient should have come back, or after hours when the front desk is gone and interest goes cold.",
  heroSubtext:
    "Below: how to choose the first med spa workflow to automate, how this page stays distinct from the broader med spa page and the generic workflow guides already live, what adjacent proof honestly supports the recommendation, and when you should keep the first project smaller instead of forcing a broader patient-communication system too early.",
  sections: [
    {
      type: "cards",
      title: "The first med spa workflows usually worth automating",
      subtitle:
        "Most med spas do not need to automate everything at once. They need to start where the leak is already costing real money:",
      items: [
        {
          icon: MessageSquare,
          title: "Lead follow-up",
          body: "Start here when consultation requests from forms, ads, or Instagram are sitting too long before anyone replies. This is usually the best first project when speed-to-lead is the main reason prospects book with another clinic before a real conversation even starts.",
        },
        {
          icon: CalendarCheck,
          title: "Consultation booking",
          body: "Start here when interest is coming in, but the front desk is still losing momentum during the back-and-forth of finding a time, confirming details, and handling reschedules. This is the right first build when the real leak sits between inquiry and confirmed consultation.",
        },
        {
          icon: Clock,
          title: "No-show reduction",
          body: "Start here when the clinic is already getting appointments on the books, but empty consults and treatment slots keep hurting utilization. This is the best first move when patient forgetfulness, weak confirmation discipline, and late reschedules are the obvious revenue drain.",
        },
        {
          icon: Repeat,
          title: "Treatment recall",
          body: "Start here when the bigger leak is weak repeat revenue. If Botox, filler, laser, or skincare patients quietly lapse because nobody follows up at the right interval, recall can be a better first project than another top-of-funnel workflow.",
        },
        {
          icon: Phone,
          title: "After-hours inquiry handling",
          body: "Start here when evenings and weekends matter, prospective patients reach out after the front desk leaves, and voicemail or delayed replies clearly are not enough. This is the right first workflow when demand is already there but nobody is covering the hours when interest still shows up.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which med spa workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact point where delay, weak ownership, or inconsistency is already hurting booked consultations and repeat treatments:",
      options: [
        {
          icon: MessageSquare,
          heading: "Start with lead follow-up",
          highlighted: true,
          items: [
            "Consultation requests arrive, but first response is measured in hours instead of minutes",
            "You are spending on ads, SEO, or social traffic that is not getting disciplined first-contact follow-up",
            "You know the clinic wins more when it replies first than when it keeps polishing scripts later in the funnel",
            "Closest next page: /ai-lead-follow-up-for-service-businesses",
          ],
        },
        {
          icon: CalendarCheck,
          heading: "Start with consultation booking",
          items: [
            "Interest is coming in, but too much friction still exists between inquiry and confirmed appointment",
            "The front desk is losing momentum during time-slot coordination, reminders, or reschedules",
            "You need cleaner booking flow before you need broader lifecycle automation",
            "Closest next page: /booking-confirmation-and-reminder-automation",
          ],
        },
        {
          icon: Clock,
          heading: "Start with no-show reduction",
          items: [
            "The clinic already books consults or treatments, but empty slots are still hurting revenue and provider utilization",
            "Reminder timing is inconsistent and confirmation ownership is weak",
            "One saved consult or treatment block per week would justify the build quickly",
            "Closest next page: /no-show-reduction-automation",
          ],
        },
        {
          icon: Repeat,
          heading: "Start with treatment recall",
          items: [
            "The bigger leak is patients who should be coming back but quietly disappear",
            "Your team has strong demand history but almost no recall discipline by treatment interval",
            "You want the highest-payoff first project from existing patient relationships rather than more net-new lead volume",
            "Closest next page: /client-reactivation-automation",
          ],
        },
        {
          icon: Phone,
          heading: "Start with after-hours inquiry handling",
          items: [
            "Prospective patients message or call after the front desk is gone and nobody responds until the next day",
            "Voicemail is not enough because prospective cosmetic patients keep shopping while they wait",
            "You already know after-hours demand matters more than one more daytime nurture sequence",
            "Closest next page: /ai-phone-answering-for-service-businesses",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the med spa cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for med spas",
          values: [
            "Owners deciding which single workflow deserves to be the first automation project",
            "Helps choose between lead follow-up, consultation booking, no-show reduction, treatment recall, and after-hours inquiry handling before a broader rollout",
          ],
        },
        {
          label: "AI automation for med spas",
          values: [
            "Owners evaluating the broader patient-communication and booking layer",
            "Explains the whole med spa system across inquiries, booking, reminders, recall, reviews, and after-hours coverage",
          ],
        },
        {
          label: "No-show reduction automation",
          values: [
            "Clinics that already know the biggest leak is empty slots and weak reminder discipline",
            "Focuses narrowly on confirmations, reminder timing, easy reschedules, and attendance recovery after the booking already exists",
          ],
        },
        {
          label: "AI lead follow-up for service businesses",
          values: [
            "Businesses that already know the earliest leak is slow first response",
            "Focuses narrowly on inquiry capture, response speed, message sequencing, and human handoff after the lead arrives",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your med spa?",
      subtitle:
        "This page is useful when you know the clinic needs better automation, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already see one obvious leak: slow lead response, booking friction, empty slots, weak recall, or missed after-hours demand",
            "You want one bounded workflow that proves value before funding a broader automation layer",
            "The front desk is overloaded and manual follow-up only happens when someone remembers",
            "You care more about recovered consults and cleaner operations than about flashy tooling",
            "You want a practical recommendation instead of another vague software-stack pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The clinic still has very low lead volume and no clear workflow pressure yet",
            "The real problem is offer positioning, provider capacity, or service quality — not communication follow-through",
            "Nobody agrees on who owns inquiries, scheduling, reminders, and recall at all",
            "You are looking for a giant all-in-one rebuild before proving one narrower workflow first",
            "Manual discipline is already strong and there is no visible leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first med spa automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost revenue or repeated front-desk drag.",
      blocks: [
        {
          heading: "Start where delay already costs consults or treatment revenue",
          body: "If inquiries are arriving and nobody replies fast enough, lead follow-up usually comes first. If people show intent but the clinic loses momentum during scheduling, booking flow comes first. If appointments already exist but empty slots keep showing up, no-show reduction comes first. If the bigger hidden leak is repeat treatment revenue, treatment recall comes first. The decision should follow the leak, not whichever automation sounds the most advanced.",
        },
        {
          heading: "Keep the first workflow small enough to run cleanly",
          body: "A narrower first build gives you faster time to value and fewer places to hide a broken process. Most med spas learn more from one disciplined workflow than from a half-finished all-in-one rollout that touches every inquiry, every reminder, every review request, and every recall sequence before the team is ready.",
        },
        {
          heading: "Do not jump to retention if the front end is still broken",
          body: "Treatment recall can be a strong first project, but not if consultation requests are still waiting until morning or booking flow is still messy enough to lose intent before the first visit. Fix the earliest expensive leak first. Only then should you widen the system into bigger lifecycle communication.",
        },
        {
          heading: "Let the first workflow shape the next build",
          body: "Once one workflow is running cleanly, you learn where the real handoffs, delays, and message failures actually live. That makes the broader med spa automation layer safer because it is now grounded in operating evidence instead of assumptions.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first med spa automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest project instead of the clearest leak",
          body: "Many med spas jump straight to a full front-desk automation stack when the real issue is still one stage: first response, booking, reminders, recall, or after-hours coverage. Bigger scope feels strategic, but it usually delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring front-desk time as a real cost",
          body: "DIY work is not free when the owner or office manager spends evenings patching reminders, booking logic, and patient follow-up rules together after a full clinic day. The first workflow should be scoped against both cash cost and the time drag of getting it wrong.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: unanswered consultations, unconfirmed appointments, empty treatment slots, overdue recall patients, or after-hours inquiries that die overnight. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published med spa first-project case study on the site yet, so the page stays grounded in the live med spa parent page plus published phone-handling and CRM/follow-up proof.",
      studies: [
        {
          industry: "Med spa cluster",
          headline: "The live med spa page already isolates the exact workflow options this page is comparing",
          body: "The parent med spa page already breaks the operating layer into real workflow families: lead follow-up, consultation booking, no-show reduction, review requests, treatment recall, and after-hours inquiry handling. This page sits one level earlier and helps an owner choose which bounded workflow should come first.",
          link: "/ai-automation-for-med-spas",
        },
        {
          industry: "Published phone-handling proof",
          headline: "The restaurant voice-agent case study proves why immediate response matters when nobody can answer after hours",
          body: "That project is not a med spa build, but it is direct proof that after-hours and missed-call coverage change what happens before the lead disappears. The same operating principle applies when a prospective patient asks about a consult after the front desk leaves.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ lead CRM case study proves why structured follow-up and reactivation matter once inquiries and past customers start piling up",
          body: "That e-commerce case study is not a med spa build, but it is direct proof that neglected records, weak ownership, and inconsistent follow-up destroy recoverable value. The same logic supports med spa lead response, booking discipline, and treatment recall.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
        { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should a med spa automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: lead follow-up if consultation requests are sitting too long before a reply, consultation booking if scheduling friction is killing momentum, no-show reduction if empty slots are hurting revenue, treatment recall if repeat revenue is leaking, or after-hours inquiry handling if demand arrives when the front desk is gone.",
    },
    {
      question: "How is this different from the broader med spa page?",
      answer:
        "The broader med spa page explains the whole operating layer across inquiries, booking, reminders, recall, reviews, and after-hours handling. This page sits one step earlier and helps you decide which one of those workflows should be the first bounded project before you pay for anything broader.",
    },
    {
      question: "Should a med spa start with no-show reduction or lead follow-up?",
      answer:
        "Start with lead follow-up if consultation requests are arriving but speed-to-lead is weak enough that prospects keep booking somewhere else before your team replies. Start with no-show reduction if the clinic already fills the calendar reasonably well but empty slots are still creating expensive lost time and revenue.",
    },
    {
      question: "When should treatment recall come before a top-of-funnel workflow?",
      answer:
        "Treatment recall can come first when new demand is already handled reasonably well and the bigger leak is repeat treatment revenue. If Botox, filler, laser, or skincare patients are simply overdue with no consistent outreach rhythm, recall may beat another acquisition-first build.",
    },
    {
      question: "Why does the first workflow choice matter so much for ROI?",
      answer:
        "Because the first workflow shapes how fast you see a measurable result. A bounded project tied to the clearest leak — lost consults, empty slots, overdue patients, or overnight demand — pays back faster and teaches you more than a bigger system built before the clinic knows where the real friction lives.",
    },
  ],
  faqSubtitle:
    "Practical questions about choosing the first med spa automation",
  ctaHeading: "Need help choosing the first med spa workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your clinic is leaking consultation requests, booking momentum, filled slots, treatment recall revenue, or after-hours demand now, then recommend whether the first move should be lead follow-up, booking flow, reminders, recall, or after-hours coverage before anything broader gets built.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about what the clinic should automate first.",
  relatedLinks: [
    { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
    { label: "AI automation for chiropractors", href: "/ai-automation-for-chiropractors" },
    { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
