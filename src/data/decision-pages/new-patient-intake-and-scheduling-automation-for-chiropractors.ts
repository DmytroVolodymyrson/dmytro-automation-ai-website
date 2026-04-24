import {
  CalendarCheck,
  ClipboardList,
  ShieldCheck,
  ArrowRightLeft,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  PhoneCall,
  Clock3,
  MessageSquare,
  UserRoundPlus,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "new-patient-intake-and-scheduling-automation-for-chiropractors",
  metaTitle:
    "New Patient Intake and Scheduling Automation for Chiropractors — Faster First Visits, Less Front-Desk Friction | Dmytro AI",
  metaDescription:
    "New patient intake and scheduling automation for chiropractors. Reduce booking friction, insurance-check chaos, form delays, reschedule drift, and first-visit drop-off without promising fake fully autonomous front-desk magic.",
  badgeText: "Chiropractic Workflow",
  badgeIcon: CalendarCheck,
  h1: "New Patient Intake and Scheduling Automation for Chiropractors",
  heroIntro:
    "A lot of chiropractic practices do not lose new patients because nobody is interested. They lose them in the awkward middle: the call was answered or the form came in, but the first visit never got booked cleanly. Intake paperwork was slow, insurance questions stalled the conversation, the front desk had to call back later, the patient asked to reschedule and the thread went cold, or nobody owned the handoff between initial interest and a confirmed appointment. New patient intake and scheduling automation for chiropractors fixes that narrower first-visit workflow. It keeps new-patient momentum moving from inquiry to booked visit with cleaner intake steps, clearer next actions, practical insurance and paperwork routing, and front-desk handoff that does not depend on memory.",
  heroSubtext:
    "Below: what this chiropractic workflow should actually handle, how it stays distinct from the broader chiropractor page and the first-project scoping page, what proof honestly supports it, and when intake friction is or is not the right next automation to build.",
  sections: [
    {
      type: "cards",
      title: "What new-patient intake and scheduling automation should actually handle",
      subtitle:
        "This page is about the stage after a new patient raises a hand but before the first visit is firmly on the calendar — where form friction, insurance questions, scheduling drift, and weak follow-through quietly kill first-visit conversion.",
      items: [
        {
          icon: UserRoundPlus,
          title: "Fast acknowledgment of real new-patient intent",
          body: "Once a call, web form, or text comes in, the workflow should acknowledge the inquiry quickly and make the next step obvious. That alone matters because many practices still lose first visits simply by letting the conversation stall between initial contact and a real scheduling path.",
        },
        {
          icon: ClipboardList,
          title: "Intake forms and paperwork without front-desk chase work",
          body: "Good intake automation helps the practice collect the basic information needed for a first visit without forcing staff to manually resend forms, repeat the same instructions, or wonder which new patient has still not completed the paperwork.",
        },
        {
          icon: ShieldCheck,
          title: "Insurance and eligibility questions routed cleanly",
          body: "Not every practice handles insurance the same way, but many still lose momentum when a new patient has a basic coverage question and nobody owns the reply fast enough. The workflow should route those questions with context instead of leaving them as another inbox problem.",
        },
        {
          icon: CalendarCheck,
          title: "Scheduling flow that actually gets the first visit booked",
          body: "The real job is not sending more reminders. It is getting the prospective patient from interest to a confirmed appointment with fewer dead ends, less back-and-forth, and less dependence on whoever happened to answer the phone that day.",
        },
        {
          icon: ArrowRightLeft,
          title: "Reschedule handling before first-visit intent disappears",
          body: "If a prospective patient needs a different time, asks a follow-up question, or falls out of the booking thread, the workflow should give staff a clean handoff instead of letting that first-visit opportunity quietly die between voicemails and sticky notes.",
        },
        {
          icon: MessageSquare,
          title: "Context kept attached for the front desk",
          body: "The strongest setup keeps the original inquiry, intake status, booking state, and patient replies together. That saves the front desk from reconstructing the story every time someone calls back asking, 'I filled this out yesterday — what happens next?'",
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
          label: "AI automation for chiropractors",
          values: [
            "Owners evaluating the full patient-communication and front-desk support layer",
            "Explains the broader system across intake, scheduling, recall, reminders, reviews, and after-hours coverage",
          ],
        },
        {
          label: "What to automate first for chiropractors",
          values: [
            "Owners choosing which single workflow deserves to be built first",
            "Compares missed-call recovery, intake and scheduling, care-plan recall, no-show reduction, and after-hours call handling before a broader rollout",
          ],
        },
        {
          label: "New patient intake and scheduling automation for chiropractors",
          values: [
            "Practices where interest exists but too much friction still sits between first contact and a confirmed first visit",
            "Stays tightly on intake flow, paperwork, insurance-question routing, first-visit scheduling, reschedules, and front-desk handoff before the patient relationship is established",
          ],
        },
        {
          label: "Care plan recall automation for chiropractors",
          values: [
            "Practices where the bigger leak is existing patients who quietly fall out of treatment plans or maintenance cadence",
            "Focuses on overdue-patient recovery after the relationship already exists",
          ],
        },
        {
          label: "No-show reduction automation",
          values: [
            "Practices that already book visits reliably but still lose money to empty slots and weak reminder discipline",
            "Focuses on attendance protection after the appointment already exists, not on getting the first visit booked cleanly",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your chiropractic practice?",
      subtitle:
        "Best fit when demand is coming in, but the path from inquiry to first visit is still too manual, too slow, or too easy to drop.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "New-patient calls, forms, or texts are already arriving, but too many prospects fade before the first appointment is confirmed",
            "The front desk keeps losing momentum during intake forms, insurance questions, scheduling back-and-forth, or reschedules",
            "You can feel first-visit leakage even when top-of-funnel demand itself is not the main problem",
            "One or two extra booked first visits per week would likely justify the build",
            "You want a narrower first-visit workflow before paying for a broader full-practice automation layer",
            "You care more about cleaner conversion and cleaner front-desk ownership than about flashy AI claims",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The earliest expensive leak is still unanswered calls before your team ever gets a real conversation",
            "Your practice already gets new patients booked cleanly and the bigger problem is later retention or reminder discipline",
            "You do not yet have a stable intake process, booking rules, or scheduling ownership to automate around",
            "You mostly need no-show protection on already-booked visits, not better first-visit conversion",
            "You want automation making insurance or clinical judgment calls without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that make chiropractic intake workflows actually work",
      subtitle:
        "The goal is not more messages. It is more booked first visits with less front-desk drag.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate a messy intake process without tightening ownership first",
          body: "If nobody knows who owns callbacks, insurance clarification, paperwork review, and schedule changes, automation will just move the confusion faster. Tighten the handoff rules first so the workflow has something stable to support.",
        },
        {
          icon: PhoneCall,
          title: "Know when a real person needs to step in",
          body: "Simple intake and booking steps can be automated. Nuanced insurance questions, anxious new-patient concerns, or cases where someone needs reassurance should route to a real person quickly. Automation should protect booking momentum, not trap prospects in a dead-end flow.",
        },
        {
          icon: Clock3,
          title: "Measure booked first visits, not just form completions",
          body: "The KPI is not how many intake messages were sent. It is whether more prospects actually became confirmed first visits and whether the front desk spent less time manually rescuing threads that should have been easy to close.",
        },
        {
          icon: BarChart3,
          title: "Use the workflow to see where first-visit leakage really happens",
          body: "Once the process is visible, owners can see whether the biggest drag is slow acknowledgment, paperwork delays, insurance confusion, weak reschedule follow-through, or overloaded staff. That turns the workflow into both a conversion layer and an operations diagnostic.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical chiropractic intake and scheduling workflow usually works",
      subtitle:
        "The clean version is simple: acknowledge the inquiry, move the patient through the missing intake steps, confirm the first visit, and route exceptions with context attached.",
      blocks: [
        {
          heading: "A new patient raises a hand",
          body: "The workflow starts when someone calls, texts, or fills out a form asking about becoming a patient. That intent should move quickly into a structured next step instead of sitting in a general inbox until the front desk can get back to it.",
        },
        {
          heading: "The right intake step gets sent immediately",
          body: "If the patient needs forms, basic information, or a practical explanation of what happens next, that step should happen right away. This is where many practices lose momentum: the patient was interested, but the first useful next step arrived too late or not at all.",
        },
        {
          heading: "Scheduling stays tied to the intake state",
          body: "Once the needed intake pieces are in motion, the patient gets pushed toward a real first-visit time instead of a vague promise that someone will call later. That keeps the workflow grounded in one outcome: a confirmed first appointment.",
        },
        {
          heading: "Questions and reschedules route back to staff with context attached",
          body: "If the patient asks about insurance, needs a different time, or pauses during the process, the front desk should see the full thread and intake state without rebuilding the story manually. That keeps first-visit momentum alive instead of forcing another cold restart.",
        },
        {
          heading: "Owners can finally see where first-visit conversion is leaking",
          body: "Over time the practice can tell whether the real bottleneck is slow first response, form completion, insurance clarification, or scheduling follow-through. That gives the clinic a clearer next build decision instead of more guesswork.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is not a published chiropractic intake-specific case study on the site yet. The honest support is the live chiropractor cluster plus adjacent published booking, first-response, and structured follow-up proof that shows the same handoff mechanics.",
      studies: [
        {
          industry: "Chiropractic cluster",
          headline: "The live chiropractor parent and first-project page already isolate intake and scheduling as one of the clearest workflow leaks in the practice",
          body: "The broader chiropractor guide and the first-project scoping page both name intake and scheduling as a distinct first build beside missed calls, recall, no-shows, and after-hours handling. This child page narrows that exact first-visit workflow instead of re-explaining the whole practice system.",
          link: "/ai-automation-for-chiropractors",
        },
        {
          industry: "Published booking and reminder proof",
          headline: "The generic booking guide already covers the confirmation and scheduling mechanics this workflow depends on",
          body: "That page is not chiropractic-specific, but it proves the operating pattern: acknowledge intent fast, move the contact to a booked slot, and keep the next step clear. This page applies that same logic to first-visit intake, forms, insurance routing, and front-desk handoff.",
          link: "/booking-confirmation-and-reminder-automation",
        },
        {
          industry: "Published immediate-response proof",
          headline: "The Paris Cafe voice-agent case study proves why fast acknowledgment and clean handoff matter when intent arrives outside perfect staff coverage",
          body: "That project is not a chiropractic build, but it is direct proof that immediate response plus a clear next step materially changes whether interested people keep moving or disappear. The same principle supports first-visit intake and scheduling for a chiropractic practice.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for chiropractors", href: "/ai-automation-for-chiropractors" },
        { label: "What to automate first for chiropractors", href: "/what-to-automate-first-for-chiropractors" },
        { label: "Booking confirmation and reminder automation", href: "/booking-confirmation-and-reminder-automation" },
        { label: "Care plan recall automation for chiropractors", href: "/care-plan-recall-automation-for-chiropractors" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader chiropractor automation page?",
      answer:
        "The broader chiropractor page covers the full operating layer across intake, scheduling, recall, reminders, reviews, and after-hours coverage. This page is narrower. It focuses only on the path from initial new-patient interest to a confirmed first visit.",
    },
    {
      question: "How is this different from the first-project page for chiropractors?",
      answer:
        "The first-project page helps a practice decide which workflow deserves to be built first. This page assumes intake and scheduling are already the main leak, then goes deeper on what that workflow should actually include and when it is worth building before other chiropractic automations.",
    },
    {
      question: "What does a focused chiropractic intake and scheduling workflow usually cost?",
      answer:
        "A focused intake-and-scheduling workflow usually lands around $1.5K-$3K depending on intake complexity, insurance-question routing, form cleanup, reschedule handling, and how many systems need to stay in sync. Broader chiropractic automation costs more when it also includes missed-call recovery, recall, no-show reduction, reviews, and after-hours handling.",
    },
    {
      question: "Can this work with my current practice software?",
      answer:
        "Usually yes, as long as there is a practical way to trigger intake steps, track scheduling state, and route human follow-up when needed. In many clinics, the existing software stays in place and automation improves the communication and handoff layer around it.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is protecting first-visit revenue you are already paying to generate. More new-patient inquiries turn into real appointments, fewer booking threads die in the middle, and the front desk spends less time manually rescuing incomplete intake and scheduling conversations.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating new-patient intake and scheduling for chiropractors",
  ctaHeading: "Need more new-patient interest turning into real booked first visits?",
  ctaText:
    "Book a 30-minute call. We will look at how your practice handles first response, intake forms, insurance questions, scheduling, and reschedules today, then tell you whether a focused intake-and-scheduling workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No fake fully autonomous front-desk pitch. Just a practical recommendation based on your first-visit workflow, staff load, and current booking friction.",
  relatedLinks: [
    { label: "AI automation for chiropractors", href: "/ai-automation-for-chiropractors" },
    { label: "What to automate first for chiropractors", href: "/what-to-automate-first-for-chiropractors" },
    { label: "Booking confirmation and reminder automation", href: "/booking-confirmation-and-reminder-automation" },
    { label: "Care plan recall automation for chiropractors", href: "/care-plan-recall-automation-for-chiropractors" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
