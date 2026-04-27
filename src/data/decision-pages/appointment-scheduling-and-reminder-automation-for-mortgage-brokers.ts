import {
  CalendarClock,
  Clock3,
  ArrowRightLeft,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  CalendarSync,
  Landmark,
  PhoneCall,
  ClipboardCheck,
  MessageSquare,
  UserX,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "appointment-scheduling-and-reminder-automation-for-mortgage-brokers",
  metaTitle:
    "Appointment Scheduling and Reminder Automation for Mortgage Brokers — Fewer Consultation No-Shows | Dmytro AI",
  metaDescription:
    "Appointment scheduling and reminder automation for mortgage brokers. Consultation confirmations, reminder timing, reschedule routing, and cleaner borrower-to-broker handoff without endless calendar chasing.",
  badgeText: "Mortgage Workflow",
  badgeIcon: CalendarClock,
  h1: "Appointment Scheduling and Reminder Automation for Mortgage Brokers",
  heroIntro:
    "Mortgage brokerages lose momentum after a lead is warm too. A borrower says they want to book a pre-approval call, discovery call, or consultation, then the calendar handoff gets sloppy: reminders go out too late, reschedules happen by scattered text threads, and booked conversations quietly turn into avoidable no-shows. Appointment scheduling and reminder automation for mortgage brokers fixes that narrower stage. It keeps consultations moving with confirmations, reminder timing, easy reschedule paths, and cleaner borrower-to-broker handoff so expensive leads do not stall right after they finally showed intent.",
  heroSubtext:
    "Below: what mortgage scheduling automation actually covers, how it stays distinct from the broader mortgage parent and the other live mortgage child pages, what guardrails matter, and what proof honestly supports this page without pretending there is already a mortgage-only scheduling case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What mortgage scheduling and reminder automation actually handles",
      subtitle:
        "This page is about the stage after the borrower is warm enough to book, but before the consultation actually happens — where confirmations, reminders, reschedules, and next-step clarity either stay clean or quietly kill momentum.",
      items: [
        {
          icon: CalendarSync,
          title: "Consultation confirmations tied to the real appointment type",
          body: "Once a pre-approval call, refinance review, or discovery consultation is booked, the workflow confirms the date, time, broker, and next useful instruction. That matters because half-confirmed appointments often die in the gap between a warm lead and a real borrower conversation.",
        },
        {
          icon: Clock3,
          title: "Reminder timing that protects booked conversations",
          body: "The system can send reminders the day before and the day of the call so the borrower actually shows up prepared. Good reminders do more than reduce no-shows. They also reduce last-minute calendar confusion and keep the broker from manually babysitting every appointment.",
        },
        {
          icon: ArrowRightLeft,
          title: "Easy reschedule routing before momentum dies",
          body: "If the borrower needs another time, is missing a detail, or replies with a conflict, the workflow gives them a clean path to reschedule and routes the update back to the broker with context attached. That is much better than losing the deal because one calendar reply sat unread in a general inbox.",
        },
        {
          icon: ClipboardCheck,
          title: "Pre-call readiness prompts",
          body: "A mortgage consultation goes better when the borrower knows what to expect and what to have ready. Automation can remind them about income docs, current mortgage details, credit questions, or whatever the brokerage actually needs before the first serious conversation.",
        },
        {
          icon: MessageSquare,
          title: "Broker handoff with context instead of guesswork",
          body: "The broker gets the booked-event context, recent replies, and any stated constraints in one place instead of reconstructing the situation from scattered notes. This is especially valuable when appointment booking is handled by admins, intake forms, or mixed channels.",
        },
        {
          icon: UserX,
          title: "Missed-appointment recovery and calendar protection",
          body: "If someone still misses the consultation, the workflow can trigger a fast rebook path or route the contact back for immediate follow-up. That makes the system more than reminders alone. It becomes schedule protection for high-intent borrowers you already paid to attract.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the mortgage cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for mortgage brokers",
          values: [
            "Brokerages evaluating the broader operating layer",
            "Covers the full picture across lead response, application nurture, document collection, consultation booking, and CRM visibility instead of isolating the booked-appointment stage",
          ],
        },
        {
          label: "AI lead follow-up for mortgage brokers",
          values: [
            "Brokerages whose main leak is still speed-to-lead before a consultation exists",
            "Focuses on immediate response, short nurture, and broker handoff while the borrower is still an inquiry instead of a booked appointment",
          ],
        },
        {
          label: "Appointment scheduling and reminder automation for mortgage brokers",
          values: [
            "Brokerages that already get borrowers warm enough to book but still lose momentum to no-shows, weak confirmations, and manual calendar chasing",
            "Focuses narrowly on confirmations, reminder timing, reschedule routing, and pre-call readiness once the consultation is on the calendar",
          ],
        },
        {
          label: "Document collection automation for mortgage brokers",
          values: [
            "Brokerages whose biggest drag comes after the application or consultation moves into active-file work",
            "Handles missing-document reminders and secure next steps rather than the earlier consultation-booking layer",
          ],
        },
        {
          label: "Incomplete application follow-up for mortgage brokers",
          values: [
            "Brokerages where prospects begin the process but stall before becoming clean workable files",
            "Focuses on recovering half-finished applications rather than protecting already-booked consultations",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your brokerage?",
      subtitle:
        "Best fit when consultations are getting booked, but the follow-through after booking is still too manual, too vague, or too easy to drop.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Leads are warm enough to book consultations, but too many booked calls still no-show or reschedule chaotically",
            "Admins or brokers are wasting time manually confirming appointments and chasing calendar replies",
            "Borrowers often arrive to the call unprepared because expectations were never reinforced clearly",
            "You need cleaner borrower-to-broker handoff after the lead has already shown intent",
            "Your bigger leak is now booked-conversation follow-through, not just top-of-funnel first response",
            "You want a narrower booked-visit workflow before rebuilding the whole mortgage CRM stack",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger problem is still missed leads or slow first response before any consultation gets booked",
            "You already run a disciplined confirmation and reminder process with negligible no-show rates",
            "Borrowers are not stalling on booking — they are stalling later on missing docs or incomplete applications",
            "Your consultation types and calendar ownership rules are too inconsistent to automate cleanly yet",
            "You want automation to replace regulated mortgage advice instead of improving timing, reminders, and handoff",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep mortgage scheduling workflows useful",
      subtitle:
        "The goal is cleaner consultation follow-through, not more borrower messages or a messier broker calendar.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate vague scheduling rules",
          body: "If one borrower gets a Calendly link, another gets told to wait for a broker callback, and a third is booked manually in a separate system, automation will only spread the inconsistency. Tighten the real booking flow first.",
        },
        {
          icon: PhoneCall,
          title: "Know when the broker needs to step in",
          body: "A simple reschedule can stay automated. A borrower asking complex qualifying questions, changing loan goals, or signaling urgency should route to the broker quickly. Automation should protect the broker's time, not trap good leads in a dead-end loop.",
        },
        {
          icon: Landmark,
          title: "Keep reminders grounded in the appointment purpose",
          body: "A refinance review, first-time-buyer consult, and document-review call do not all need the same prep message. The strongest workflows reflect the actual call type and what the borrower should have ready.",
        },
        {
          icon: MessageSquare,
          title: "Measure attended consultations, not just sent reminders",
          body: "Success is not how many texts went out. It is whether more borrowers actually show up prepared, brokers spend less time manually confirming calls, and booked conversations stop leaking out of the calendar.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical mortgage scheduling and reminder workflow usually works",
      subtitle:
        "The clean version is simple: confirm the booked consultation, reinforce the schedule, prepare the borrower, and route exceptions early.",
      blocks: [
        {
          heading: "The consultation is marked booked",
          body: "The workflow starts when a real borrower conversation is actually on the calendar — a pre-approval call, refinance review, or discovery consultation. That booked event becomes the stable trigger for confirmations, reminder timing, and exception routing.",
        },
        {
          heading: "The borrower gets a real confirmation with next-step expectations",
          body: "The first message confirms the date, time, broker, and any preparation that matters. Depending on the consultation type, that could include basic borrower details, current mortgage information, or the documents the broker wants ready before the call.",
        },
        {
          heading: "Reminder timing keeps the appointment active",
          body: "As the consultation approaches, reminders go out at intervals that make sense — usually the day before and the day of. This cuts preventable no-shows materially because many missed mortgage calls are simple calendar drift, not lack of intent.",
        },
        {
          heading: "Exceptions route back to the broker with context",
          body: "If the borrower needs to reschedule, asks a readiness question, or signals a time conflict, the broker or assigned admin gets the reply with the appointment context already attached. That protects warm borrower momentum and prevents avoidable drop-off.",
        },
        {
          heading: "Owners finally see whether the booked-call stage is leaking",
          body: "Over time you can see whether the real problem is weak confirmations, late reminders, bad booking rules, or low borrower readiness. That turns the workflow into both calendar protection and an operational diagnosis tool for the brokerage.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is not a published mortgage-specific scheduling case study on the site yet. The honest support comes from the live mortgage cluster, the generic booking/reminder guide, and the Paris Cafe voice-agent case study that proves the appointment-setting mechanics.",
      studies: [
        {
          industry: "Mortgage parent page",
          headline: "The broader mortgage guide already identifies consultation scheduling as a core workflow family",
          body: "The parent page explains why lead response, application nurture, document collection, consultation scheduling, and CRM visibility all matter together. This child narrows that broader opportunity to one stage: booked-conversation follow-through.",
          link: "/ai-automation-for-mortgage-brokers",
        },
        {
          industry: "Booking and reminder mechanics",
          headline: "The generic booking-confirmation guide already proves the confirmation, reminder, and attendance-protection mechanics",
          body: "That page covers the broader playbook: confirmations, reminder timing, easy rescheduling, and fewer no-shows. This mortgage child grounds those mechanics in pre-approval calls, refinance reviews, and borrower readiness.",
          link: "/booking-confirmation-and-reminder-automation",
        },
        {
          industry: "Appointment setting proof",
          headline: "The Paris Cafe project proved the ability to handle high-volume appointment booking and reminders without human babysitting",
          body: "That project was for reservations, not mortgage consultations, but the underlying mechanics are the same: capture a slot, confirm it clearly, protect it with reminders, and route exceptions before the appointment is wasted.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
        { label: "What to automate first for mortgage brokers", href: "/what-to-automate-first-for-mortgage-brokers" },
        { label: "AI lead follow-up for mortgage brokers", href: "/ai-lead-follow-up-for-mortgage-brokers" },
        { label: "Document collection automation for mortgage brokers", href: "/document-collection-automation-for-mortgage-brokers" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from AI lead follow-up for mortgage brokers?",
      answer:
        "Lead follow-up covers the earlier stage: fast response to new inquiries, short nurture, and broker handoff before a consultation is booked. This page focuses on what happens after the call is already on the calendar: confirmations, reminders, reschedules, and readiness prompts.",
    },
    {
      question: "How is this different from the broader mortgage automation page?",
      answer:
        "The broader mortgage page covers the full system: lead response, application nurture, document collection, consultation booking, and CRM visibility. This child page isolates one high-stakes stage — booked-consultation follow-through — so the buyer can evaluate that narrower problem clearly.",
    },
    {
      question: "What does a focused mortgage scheduling workflow usually cost?",
      answer:
        "A focused booked-consultation workflow usually lands around $1.5K-$3K depending on how your CRM, calendar, intake form, and broker assignment rules are set up. It pays for itself by protecting even a small number of high-intent consultations that would otherwise no-show or drift.",
    },
    {
      question: "Can this work with our current mortgage CRM or LOS?",
      answer:
        "Usually yes. Most brokerages already have a calendar trigger, intake form, CRM stage, or booked-call event that can start the workflow. Automation improves the communication layer around those events so confirmations, reminders, and replies are handled consistently.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is protecting booked borrower conversations. More attended consultations means less wasted broker time and fewer expensive leads leaking right after they finally showed intent. The secondary win is cleaner borrower preparation and less admin time spent manually chasing calendar confirmations.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating mortgage consultation scheduling and reminders",
  ctaHeading:
    "Want fewer mortgage consultations slipping through preventable reminder gaps?",
  ctaText:
    "Book a 30-minute call. We will look at how your brokerage handles booked consultations, reminders, and reschedules today, then tell you whether a focused scheduling-and-reminder workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No generic mortgage-tech pitch. Just a practical recommendation based on your booked-call volume, broker time, and no-show pain.",
  relatedLinks: [
    { label: "Appointment scheduling and reminder automation for service businesses", href: "/appointment-scheduling-and-reminder-automation-for-service-businesses" },
    { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
    { label: "What to automate first for mortgage brokers", href: "/what-to-automate-first-for-mortgage-brokers" },
    { label: "AI lead follow-up for mortgage brokers", href: "/ai-lead-follow-up-for-mortgage-brokers" },
    { label: "Missed-call text-back for mortgage brokers", href: "/missed-call-text-back-for-mortgage-brokers" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
