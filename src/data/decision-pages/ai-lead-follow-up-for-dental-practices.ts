import {
  Heart,
  MessageSquare,
  Timer,
  ClipboardCheck,
  ArrowUpRight,
  CalendarCheck,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Bot,
  Clock3,
  Phone,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-for-dental-practices",
  metaTitle:
    "AI Lead Follow-Up for Dental Practices — Faster New-Patient Response Before Booking | Dmytro AI",
  metaDescription:
    "AI lead follow-up for dental practices. Faster new-patient response, short nurture before the appointment is booked, cleaner front-desk handoff, and less revenue lost to slow replies or missed inquiry follow-through.",
  badgeText: "Dental Workflow",
  badgeIcon: Heart,
  h1: "AI Lead Follow-Up for Dental Practices",
  heroIntro:
    "Dental practices do not only lose revenue when recall breaks down months later or when a booked visit no-shows. They lose it much earlier, right after a new patient inquiry arrives. The web form sat too long. The missed call never got a clean reply. The Google inquiry got one weak message and then died while the front desk was juggling patients, phones, insurance questions, and the next person at the desk. AI lead follow-up for dental practices fixes that narrower early-funnel workflow. It responds fast, keeps the conversation moving while intent is still fresh, captures the next useful detail, and hands serious booking intent back to a human before the patient calls the office across town that replied first.",
  heroSubtext:
    "Below: what this workflow should actually handle, how it stays distinct from the broader dental page plus the booking / recall / no-show pages already live, what guardrails matter, and what proof honestly supports the page without pretending there is already a dental-specific lead-follow-up case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What dental lead follow-up should actually handle",
      subtitle:
        "This page is about the stage after a new patient inquiry arrives but before the appointment is booked. It is earlier than scheduling reminders and lighter than a full intake or after-hours phone system.",
      items: [
        {
          icon: Timer,
          title: "Immediate first response",
          body: "The first reply should go out while the prospective patient is still comparing offices, not the next morning after someone finally catches up. That matters for forms, Google Business Profile messages, texts, missed calls, and website chat alike.",
        },
        {
          icon: MessageSquare,
          title: "Short nurture before the appointment exists",
          body: "One text or one email is rarely enough. Strong lead follow-up keeps the inquiry warm over the next few hours and days with a clear next step instead of depending on whoever remembers to respond later.",
        },
        {
          icon: ClipboardCheck,
          title: "Light qualification without forcing a full intake too early",
          body: "The workflow can capture the visit type, urgency, callback preference, and whether the person wants to book now or needs the next step. That gives the front desk cleaner context without turning the first contact into a long form.",
        },
        {
          icon: ArrowUpRight,
          title: "Fast routing back to the front desk",
          body: "When someone shows real booking intent, asks to schedule, or needs a human answer, the right staff member gets the conversation with context attached instead of rebuilding the story from scattered texts, forms, and voicemails.",
        },
        {
          icon: CalendarCheck,
          title: "Clean handoff into booking",
          body: "Lead follow-up should naturally hand off to the booking workflow once the patient is ready. The goal is not endless messaging. It is getting serious intent onto the schedule faster.",
        },
        {
          icon: BarChart3,
          title: "Visibility into where new-patient demand is leaking",
          body: "Practice owners can finally see whether the loss is caused by slow response, weak follow-through, mixed channel ownership, or too much new-patient work sitting on one overloaded front-desk team.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the dental cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for dental practices",
          values: [
            "Owners evaluating the broader patient-communication and front-desk operating layer across inquiries, booking, reminders, recall, no-show recovery, reviews, and after-hours handling",
            "Explains the whole dental operating system instead of isolating the earliest inquiry-response and nurture workflow",
          ],
        },
        {
          label: "What to automate first for dental practices",
          values: [
            "Owners deciding which single dental workflow deserves the first automation project",
            "Helps choose between new-patient follow-up, booking and reminders, recall/reactivation, no-show reduction, and after-hours handling before a broader rollout",
          ],
        },
        {
          label: "AI lead follow-up for dental practices",
          values: [
            "Practices that already know the earliest leak is slow first response or weak follow-through before the appointment exists",
            "Focuses on immediate reply timing, short nurture, light qualification, and front-desk handoff before the booking is real",
          ],
        },
        {
          label: "Appointment scheduling and reminder automation for dental practices",
          values: [
            "Practices where the bigger leak is still scheduling friction after the patient is already engaged",
            "Focuses on confirmations, reminders, reschedules, and attendance protection after the patient is already moving toward a booked visit",
          ],
        },
        {
          label: "Recall and reactivation automation for dental practices",
          values: [
            "Practices where the bigger leak is still overdue hygiene, exam, or unscheduled-treatment patients months after the first visit",
            "Focuses on bringing existing patients back instead of protecting fresh inquiry momentum before the first appointment is ever set",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your dental practice?",
      subtitle:
        "Best fit when new-patient demand already exists, front-desk bandwidth is tight, and the first few hours after contact still decide who gets the booking.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are paying for SEO, referrals, ads, directories, or Google Business demand, but first response still takes hours instead of minutes",
            "New patient inquiries arrive across forms, missed calls, texts, and Google messages, and ownership gets fuzzy fast",
            "The practice wins more by replying first than by improving later-stage workflows first",
            "The front desk is too busy to follow up consistently between patients, phones, and insurance questions",
            "One recovered new-patient booking each week could justify the build quickly",
            "You want one bounded workflow that proves value before funding a broader front-desk automation layer",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your practice already responds to every new inquiry within a few minutes consistently",
            "The bigger leak is no-shows, recall discipline, scheduling friction, or after-hours phone coverage after the inquiry already exists",
            "New-patient inquiry volume is too low for a dedicated follow-up workflow to matter yet",
            "Nobody agrees on who owns new inquiries at all, so there is no stable trigger to automate",
            "You want automation diagnosing treatment needs, quoting clinical decisions, or replacing human judgment during booking conversations",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep dental lead follow-up trustworthy",
      subtitle:
        "The goal is disciplined speed-to-lead and cleaner booking handoff — not robotic chasing or a fake front desk.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate on top of chaotic inquiry ownership",
          body: "If website forms, Google messages, texts, and missed calls all land in different places with no clear owner, the workflow cannot rescue everything by itself. The practice still needs one reliable place where a new patient inquiry becomes real.",
        },
        {
          icon: Bot,
          title: "Keep qualification light",
          body: "The workflow should capture the next useful detail and move the person toward a human booking step fast. It should not force a long pseudo-intake before the patient is even sure they want the appointment.",
        },
        {
          icon: Phone,
          title: "Escalate real booking intent quickly",
          body: "If the patient wants to schedule now, has an urgent question, or needs the front desk, the conversation should route back to staff fast. Speed matters more than squeezing every exchange through automation.",
        },
        {
          icon: Clock3,
          title: "Separate fresh-inquiry follow-up from later dental workflows",
          body: "A new patient should not get the same cadence as appointment reminders, no-show recovery, or overdue recall messaging. Strong systems keep those stages separate so each message still fits the moment.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical dental lead-follow-up workflow usually works",
      subtitle:
        "The strongest version is simple: respond fast, keep the inquiry warm, and hand the conversation off at the right point.",
      blocks: [
        {
          heading: "A new patient inquiry arrives from any real channel",
          body: "The person fills out a form, calls and misses the front desk, replies to a Google listing, or sends a text asking about a cleaning, exam, cosmetic consult, or next available appointment. The workflow catches that demand right away instead of waiting for whoever notices first.",
        },
        {
          heading: "The first reply goes out while booking intent still feels real",
          body: "That first message acknowledges the request and gives one clear next step: reply with the visit type, request a callback, or move toward scheduling. In dental, the timing window matters because patients often contact multiple offices during the same search.",
        },
        {
          heading: "Non-responders enter a short follow-up sequence",
          body: "If there is no reply, the system follows up over the next few hours and days with useful reminders instead of disappearing after one touch. This is often where manual front-desk follow-up breaks because live patients and ringing phones take over.",
        },
        {
          heading: "Serious replies route back to staff with context attached",
          body: "When the patient responds, wants to schedule, or asks to speak with someone, staff inherits the conversation with source, notes, and prior messages attached. That creates a faster live handoff than starting from zero on a callback.",
        },
        {
          heading: "The booking workflow takes over once the patient is moving",
          body: "Lead follow-up should end where scheduling logistics begin. Once the patient is choosing a time slot, confirming details, or moving into reminder logic, the job has shifted into the booking workflow and should be treated that way.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published dental-specific lead-follow-up case study on the site yet. The support comes from the live dental cluster, the generic lead-follow-up guide already on the site, and published CRM follow-up proof.",
      studies: [
        {
          industry: "Dental parent cluster",
          headline: "The broader dental guide already isolates new-patient inquiry response as one of the clearest workflow families in the practice",
          body: "That parent page explicitly frames new-patient response, booking, recall, no-show follow-up, review requests, and after-hours handling as separate parts of the dental operating layer. This child narrows only the earliest response stage.",
          link: "/ai-automation-for-dental-practices",
        },
        {
          industry: "First-project scoping proof",
          headline: "The dental first-project page already treats new-patient follow-up as a distinct first automation decision beside booking, recall, no-show reduction, and after-hours coverage",
          body: "That makes this child defensible. It is not reopening the whole dental cluster. It is isolating the earliest inquiry-response and nurture workflow for practices that already know the first leak starts before the booking exists.",
          link: "/what-to-automate-first-for-dental-practices",
        },
        {
          industry: "Generic lead-follow-up proof",
          headline: "The live service-business lead-follow-up guide already proves the broader speed-to-lead and nurture pattern",
          body: "That page explains immediate response, short follow-up sequences, and clean human handoff across service businesses. This dental child keeps those mechanics but grounds them in front-desk workload, new-patient demand, and appointment-setting urgency.",
          link: "/ai-lead-follow-up-for-service-businesses",
        },
        {
          industry: "Published CRM proof",
          headline: "The e-commerce CRM case study proves why neglected leads and weak ownership quietly destroy recoverable revenue",
          body: "That project is not a dental deployment, but it is direct proof that consistent follow-up, routing, and visibility matter once inquiries start piling up. The same operating logic supports dental new-patient response before the first appointment is booked.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for dental practices", href: "/ai-automation-for-dental-practices" },
        { label: "What to automate first for dental practices", href: "/what-to-automate-first-for-dental-practices" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "Appointment scheduling and reminder automation for dental practices", href: "/appointment-scheduling-and-reminder-automation-for-dental-practices" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from appointment scheduling and reminder automation for dental practices?",
      answer:
        "Lead follow-up covers the stage before the appointment is booked. It focuses on first response, short nurture, light qualification, and routing new-patient intent back to staff. Scheduling and reminder automation starts later, once the patient is already engaged and the main friction is time-slot coordination, confirmations, reminders, and reschedules.",
    },
    {
      question: "How is this different from recall and reactivation automation for dental practices?",
      answer:
        "Lead follow-up is about fresh new-patient demand before the first appointment exists. Recall and reactivation automation is about bringing existing patients back months later when hygiene, exam, or treatment follow-up has gone quiet.",
    },
    {
      question: "What does a focused dental lead-follow-up build usually cost?",
      answer:
        "A focused new-patient response and nurture workflow usually runs about $2K to $4K depending on channel count, routing rules, booking handoff, and whether forms, missed calls, texts, and Google inquiries all need to feed the same front-desk process.",
    },
    {
      question: "Can AI handle the first response without sounding robotic?",
      answer:
        "Yes, if the workflow stays disciplined. The system should acknowledge the inquiry, capture the next useful detail, and move serious booking intent back to a human quickly. It should not try to replace every front-desk conversation or fake clinical judgment.",
    },
    {
      question: "When should a dental practice start with after-hours phone coverage instead?",
      answer:
        "If the biggest leak is still callers hitting voicemail at lunch, after hours, or while the front desk is overloaded, then live phone coverage may come first. This page is the better fit when the practice mainly loses bookings because form, text, and mixed-channel inquiry follow-up is too slow or too inconsistent before the appointment exists.",
    },
  ],
  faqSubtitle:
    "Practical questions about AI lead follow-up for dental practices",
  ctaHeading: "Need faster new-patient response before more dental inquiries go cold?",
  ctaText:
    "Book a 30-minute call. We will look at how your practice handles new-patient inquiries today, where response speed and ownership are breaking down, and whether a focused lead-follow-up workflow is the right next build or whether another dental workflow should come first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about where new-patient demand is leaking now.",
  relatedLinks: [
    { label: "AI automation for dental practices", href: "/ai-automation-for-dental-practices" },
    { label: "What to automate first for dental practices", href: "/what-to-automate-first-for-dental-practices" },
    { label: "Appointment scheduling and reminder automation for dental practices", href: "/appointment-scheduling-and-reminder-automation-for-dental-practices" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
