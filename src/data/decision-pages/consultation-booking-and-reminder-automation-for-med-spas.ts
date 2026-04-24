import {
  CalendarClock,
  Clock3,
  ArrowRightLeft,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  CalendarSync,
  PhoneCall,
  MessageSquare,
  Sparkles,
  UserRoundCheck,
  Repeat,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "consultation-booking-and-reminder-automation-for-med-spas",
  metaTitle:
    "Consultation Booking and Reminder Automation for Med Spas — Fewer No-Shows, Faster Scheduling | Dmytro AI",
  metaDescription:
    "Consultation booking and reminder automation for med spas. Faster scheduling, cleaner confirmations, reminder timing, reschedule routing, and fewer lost consults without more front-desk chaos.",
  badgeText: "Med Spa Workflow",
  badgeIcon: CalendarClock,
  h1: "Consultation Booking and Reminder Automation for Med Spas",
  heroIntro:
    "A lot of med spas do not only lose money because leads come in slowly. They lose it after the prospect already showed intent: the consultation request got a reply, but scheduling dragged out over text and voicemail, the front desk never closed the loop cleanly, the reminder sequence was inconsistent, or the patient no-showed because nobody confirmed the appointment in time. Consultation booking and reminder automation for med spas fixes that narrower workflow. It keeps new consults moving from inquiry to confirmed appointment, handles reminder timing before the calendar quietly falls apart, gives patients a clean path to reschedule, and protects provider time without forcing the front desk to babysit every slot manually.",
  heroSubtext:
    "Below: what this med spa workflow should actually handle, how it stays distinct from the broader med spa page and the first-project scoping page, what proof honestly supports it, and when booking flow is or is not the right next automation to build.",
  sections: [
    {
      type: "cards",
      title: "What consultation booking and reminder automation should actually handle",
      subtitle:
        "This page is about the stage after interest exists but before the patient reliably shows up for the consult — where scheduling friction, weak confirmation discipline, and dropped reschedules quietly kill revenue.",
      items: [
        {
          icon: CalendarSync,
          title: "Fast consultation scheduling without endless back-and-forth",
          body: "When a prospect asks about Botox, filler, laser, or another treatment, the workflow can move them toward a real consultation slot quickly instead of forcing the front desk into repetitive phone tag and one-off text threads.",
        },
        {
          icon: MessageSquare,
          title: "Clear confirmations with the next step attached",
          body: "Good booking automation does not just say 'you are booked.' It confirms the consult time, provider context, and any prep or arrival details so the patient knows what happens next instead of calling back confused later.",
        },
        {
          icon: Clock3,
          title: "Reminder timing that reduces preventable no-shows",
          body: "The system can send confirmation requests, reminder messages, and day-of check-ins at the cadence that actually protects consult slots. That matters because a med spa no-show is not just an empty slot. It is lost provider time and lost downstream treatment revenue.",
        },
        {
          icon: ArrowRightLeft,
          title: "Reschedule routing before intent disappears",
          body: "If the patient needs a different time or asks to push the consult, the workflow gives them a clean reply path and routes the update with context instead of letting the opportunity die in a voicemail box or front-desk inbox.",
        },
        {
          icon: PhoneCall,
          title: "After-hours consult demand protected until morning handoff",
          body: "Not every med spa needs full live phone coverage first. But many still need a clean way to capture after-hours consult intent, send the first acknowledgment, and tee up the next booking step before the prospect keeps shopping.",
        },
        {
          icon: UserRoundCheck,
          title: "Front-desk handoff with the conversation attached",
          body: "The strongest setup keeps the consult request, chosen slot, reminder state, and patient replies in one flow so staff are not reconstructing the situation from scattered texts, missed calls, and sticky-note memory.",
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
          label: "AI automation for med spas",
          values: [
            "Owners evaluating the whole patient-communication and booking layer",
            "Covers the broader system: lead follow-up, consultation booking, reminders, no-show reduction, reviews, recall campaigns, and after-hours handling",
          ],
        },
        {
          label: "What to automate first for med spas",
          values: [
            "Owners deciding which single workflow deserves to be the first build",
            "Helps choose between lead follow-up, consultation booking, no-show reduction, treatment recall, and after-hours coverage before a broader rollout",
          ],
        },
        {
          label: "Consultation booking and reminder automation for med spas",
          values: [
            "Clinics that already see patient interest but keep losing momentum between inquiry, confirmed consult, reminder timing, and actual attendance",
            "Focuses narrowly on consult scheduling flow, confirmations, reminders, reschedules, and front-desk handoff before the visit happens",
          ],
        },
        {
          label: "No-show reduction automation",
          values: [
            "Clinics that already know empty slots and weak reminder discipline are the main problem",
            "Covers the broader cross-industry toolkit: confirmation requests, reminder cadence, easy reschedules, deposits, and waitlist logic rather than the med-spa-specific consult booking flow",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your med spa?",
      subtitle:
        "Best fit when interest is coming in, but the handoff into a confirmed and attended consult is still too manual, too slow, or too easy to drop.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Consultation requests are arriving, but too many prospects fade during scheduling",
            "The front desk is overloaded and reminders happen inconsistently",
            "No-shows or late reschedules are costing real provider time",
            "You want a narrower booking workflow before funding a broader full-clinic automation layer",
            "One extra saved consult per week would likely justify the build",
            "You care about cleaner handoff and fewer dropped opportunities more than flashy tooling",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger problem is still slow first response before scheduling even starts",
            "The clinic already runs disciplined confirmations and reminders with very low no-show rates",
            "Your appointment rules and provider availability are still too chaotic to automate cleanly",
            "You mostly need recurring treatment recall rather than better consult booking flow",
            "You want automation to make treatment decisions or handle clinical judgment without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for med spa consultation-booking workflows",
      subtitle:
        "The goal is a cleaner path to attended consults, not more messages and more front-desk confusion.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate vague availability promises",
          body: "If staff are still giving loose time windows or changing provider availability ad hoc, automation will spread that confusion faster. Tighten the booking rules first so confirmations and reminders reflect reality.",
        },
        {
          icon: Sparkles,
          title: "Keep the workflow focused on consult conversion, not full patient lifecycle on day one",
          body: "A lot of med spas try to combine lead response, booking, reminders, review requests, and treatment recall into one giant first build. Consultation booking works better when it stays tightly on getting qualified interest onto the calendar and keeping that slot alive.",
        },
        {
          icon: PhoneCall,
          title: "Know when a human needs to step in",
          body: "Simple scheduling and reminder replies can stay automated. Treatment-fit questions, financing concerns, contraindication questions, or a patient who needs reassurance should route to a real person fast. Automation should protect consult volume, not trap patients in dead-end messaging.",
        },
        {
          icon: Repeat,
          title: "Measure saved consults, not just messages sent",
          body: "Success is not how many reminders went out. It is whether more consultations actually got confirmed, fewer no-showed, and fewer interested prospects disappeared during scheduling.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical med spa consultation-booking workflow usually works",
      subtitle:
        "The clean version is simple: acknowledge intent fast, lock the consult in clearly, reinforce attendance, and route exceptions with context attached.",
      blocks: [
        {
          heading: "The prospect shows consult intent",
          body: "The workflow starts when someone fills out a form, replies to an ad, texts the clinic, or otherwise shows clear consult interest. That intent should move quickly into a structured scheduling step instead of sitting in a shared inbox until the front desk has time.",
        },
        {
          heading: "The clinic confirms a real consultation slot",
          body: "Once a slot is chosen, the patient gets a clean confirmation with the date, time, location or provider context, and any prep expectations. That clarity matters because weak confirmations are one of the easiest ways to create avoidable no-shows later.",
        },
        {
          heading: "Reminder timing protects the slot before it quietly dies",
          body: "As the consult approaches, reminder messages go out at the intervals that make sense for the clinic. The strongest workflows make it easy to confirm, ask a quick question, or request a reschedule before the patient simply disappears.",
        },
        {
          heading: "Exceptions route back to staff with the thread attached",
          body: "If the patient asks to move the consult, is running late, or needs a real person, the handoff should arrive with context already attached. That is the difference between schedule protection and another messy inbox problem.",
        },
        {
          heading: "The clinic learns where consult leakage is actually happening",
          body: "Over time you can see whether the real leak is slow acknowledgment, weak reminder timing, dropped reschedules, or front-desk overload. That helps decide whether the next build should be no-show reduction, after-hours handling, or a broader med spa operating layer.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is not a published med-spa consultation-booking case study on the site yet. The honest support is the live med spa cluster plus published booking, reminder, phone-handling, and follow-up proof from adjacent workflows.",
      studies: [
        {
          industry: "Med spa parent page",
          headline: "The broader med spa guide already identifies consultation booking and no-show reduction as one of the clearest workflow layers in the clinic",
          body: "The parent page explains why lead follow-up, booking, no-shows, reviews, recall, and after-hours handling all matter together. This child narrows that broader opportunity to one stage: getting consult intent booked cleanly and keeping the appointment alive.",
          link: "/ai-automation-for-med-spas",
        },
        {
          industry: "Published booking and reminder proof",
          headline: "The generic booking and no-show guides already cover the confirmation, reminder, and reschedule mechanics this workflow depends on",
          body: "Those pages are not med-spa-specific, but they prove the broader operating pattern: fast confirmations, reminder timing, easy rescheduling, and attendance recovery. This page applies that same logic to consultation-driven med spa scheduling.",
          link: "/booking-confirmation-and-reminder-automation",
        },
        {
          industry: "Published immediate-response proof",
          headline: "The restaurant voice-agent case study shows why fast acknowledgment matters when patient intent arrives outside live front-desk coverage",
          body: "That project is not a med spa build, but it is direct proof that immediate response and clean handoff materially change what happens before a prospect disappears. The same operating principle supports after-hours consult booking and next-morning scheduling follow-through.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
        { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
        { label: "Booking confirmation and reminder automation", href: "/booking-confirmation-and-reminder-automation" },
        { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader med spa automation page?",
      answer:
        "The broader med spa page covers the full system: lead follow-up, consultation booking, reminders, no-show reduction, reviews, recall campaigns, and after-hours communication. This page is narrower. It focuses on the path from consult interest to a confirmed and attended appointment.",
    },
    {
      question: "How is this different from the first-project page for med spas?",
      answer:
        "The first-project page helps an owner choose which workflow deserves to be built first. This page assumes consultation booking and reminders are already the main leak, then goes deeper on what that workflow should actually include and when it is worth building before other med spa automations.",
    },
    {
      question: "What does a focused med spa consultation-booking workflow usually cost?",
      answer:
        "A focused booking-and-reminder workflow usually lands around $1.5K-$3K depending on how clean provider calendars are, whether reschedule routing needs cleanup first, and how many systems need to stay in sync. Broader med spa automation costs more when it also includes lead follow-up, reviews, recall, and after-hours handling.",
    },
    {
      question: "Can this work with my current booking software?",
      answer:
        "Usually yes, as long as there is a reliable trigger for booked consultations and a practical place for confirmations, reminders, and staff notes to live. In many clinics, the existing booking platform stays in place and automation improves the communication layer around it.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The biggest win is protecting consult volume you already worked to generate. Fewer dropped scheduling conversations, fewer no-shows, and fewer last-minute failures usually matter quickly. The secondary win is that the front desk spends less time chasing confirmations manually.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating med spa consultation booking and reminders",
  ctaHeading: "Want more consultation requests turning into attended appointments?",
  ctaText:
    "Book a 30-minute call. We will look at how your clinic handles consult scheduling, confirmations, reminders, and reschedules today, then tell you whether a focused booking workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No generic med-spa growth pitch. Just a practical recommendation based on your front-desk load, no-show pattern, and current scheduling friction.",
  relatedLinks: [
    { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
    { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
    { label: "Booking confirmation and reminder automation", href: "/booking-confirmation-and-reminder-automation" },
    { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
