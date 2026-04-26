import {
  CalendarClock,
  Clock3,
  ArrowRightLeft,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  CalendarSync,
  Sun,
  PhoneCall,
  Route,
  ClipboardCheck,
  MessageSquare,
  UserX,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "appointment-scheduling-and-reminder-automation-for-solar-companies",
  metaTitle:
    "Appointment Scheduling and Reminder Automation for Solar Companies — Fewer Consultation No-Shows | Dmytro AI",
  metaDescription:
    "Appointment scheduling and reminder automation for solar companies. Consultation confirmations, reminder timing, reschedule routing, and design-visit handoff without endless phone tag.",
  badgeText: "Solar Workflow",
  badgeIcon: CalendarClock,
  h1: "Appointment Scheduling and Reminder Automation for Solar Companies",
  heroIntro:
    "Solar consultations are the biggest bottleneck after a lead is qualified. When a designer or sales rep drives an hour for a 'no-show,' or a homeowner misses the visit because the reminder came too late, it's a massive waste of high-value time. Appointment scheduling and reminder automation for solar companies fixes that narrow workflow. It keeps design consultations, site audits, and install visits moving with confirmations, reminders, easy reschedule paths, and cleaner office-to-rep handoff so the calendar doesn't turn into preventable callback chaos and missed opportunities.",
  heroSubtext:
    "Below: what solar scheduling and reminder automation actually covers, how it stays distinct from the broader solar page and the other solar child pages already live, what guardrails matter, and what proof honestly supports it without pretending there is already a solar-only scheduling case study.",
  sections: [
    {
      type: "cards",
      title: "What solar scheduling and reminder automation actually handles",
      subtitle:
        "This page is about the stage after the lead is qualified but before the site visit — where confirmations, reminders, reschedules, and rep context either stay clean or quietly create wasted time.",
      items: [
        {
          icon: CalendarSync,
          title: "Consultation confirmations tied to the real design window",
          body: "Once the design visit or site audit is on the calendar, the workflow can confirm the date, arrival window, and the next useful instruction (like having a utility bill ready). That matters because a lot of solar confusion starts with half-confirmed visits and verbal promises that never make it into a message.",
        },
        {
          icon: Clock3,
          title: "Reminder timing that reduces preventable no-shows",
          body: "The system can send reminders 24 hours before and the morning of the design consultation. Good reminders do more than reduce no-shows. They also cut down on 'when are you coming?' calls and ensure the homeowner is actually home and ready to talk solar economics.",
        },
        {
          icon: ArrowRightLeft,
          title: "Easy reschedule routing before the rep hits the road",
          body: "If the homeowner needs another time, is running late, or has a new conflict, the workflow gives them a clean path to reply and routes that update back to the rep with context attached. That is far better than the rep learning the schedule changed only after they've already arrived at the property.",
        },
        {
          icon: ClipboardCheck,
          title: "Office-to-rep handoff with the visit context attached",
          body: "The office can pass through property notes, roof concerns, and customer replies in one place instead of the rep rebuilding the situation from various CRM fields and text threads. This is critical for high-ticket solar sales where first impressions on-site matter.",
        },
        {
          icon: Route,
          title: "Utility bill readiness nudges",
          body: "A solar design visit is useless without a recent utility bill. Automation can remind the homeowner to have their usage history ready or even provide a secure upload link before the rep arrives, ensuring the consultation actually leads to a proposal.",
        },
        {
          icon: UserX,
          title: "Missed-visit recovery and schedule protection",
          body: "If someone still misses the consultation, the workflow can trigger a fast rebook path or flag the lead for immediate office follow-up. That turns the system into more than reminders alone. It becomes schedule protection for the high-value design time you already invested.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the solar cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for solar companies",
          values: [
            "Owners evaluating the broader solar operating system",
            "Covers the full picture across missed calls, lead follow-up, utility bill processing, and scheduling instead of isolating the visit layer",
          ],
        },
        {
          label: "AI lead follow-up for solar companies",
          values: [
            "Solar teams whose biggest leak is still slow response to fresh inquiries before the consultation exists",
            "Focuses on immediate response, short nurture, light qualification, and office handoff before a design visit is actually booked",
          ],
        },
        {
          label: "Appointment scheduling and reminder automation for solar companies",
          values: [
            "Solar companies that already book consultations but still lose time to no-shows, vague confirmations, and rep-handoff confusion",
            "Focuses narrowly on visit confirmations, reminder timing, reschedule routing, and utility-bill readiness before the rep travels",
          ],
        },
        {
          label: "Utility bill collection for solar",
          values: [
            "Teams whose main bottleneck is the administrative friction of processing usage data",
            "Handles the document extraction and usage-analysis stage rather than the later on-site design scheduling",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your solar company?",
      subtitle:
        "Best fit when consultations are getting booked, but the follow-through after booking is still too manual, too vague, or too easy to drop.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your sales reps drive long distances for consultations and no-shows are a major cost",
            "Consultations happen inconsistently because the reminder process is manual or weak",
            "Reps often arrive at a home only to find the homeowner doesn't have a utility bill ready",
            "Reschedules and access notes get lost between the office calendar and the field reps",
            "The office is too busy with new lead follow-up to manually babysit every scheduled design visit",
            "You want a narrower booked-visit workflow before rebuilding your entire solar CRM stack",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger problem is still missed calls or slow first response before any consultation is booked",
            "You already run a very disciplined confirmation and reminder process with negligible no-show rates",
            "Most of your sales happen 100% remotely/virtually with no travel time at risk",
            "Your design scheduling rules are too inconsistent to automate cleanly yet",
            "You want automation to perform the actual roof design or price the system without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep solar scheduling workflows useful",
      subtitle:
        "The goal is cleaner consultation follow-through, not more customer messages or a messier rep schedule.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate vague visit windows",
          body: "If the office tells one customer 'tomorrow afternoon' and another 'between 1 and 3' while the internal calendar says something else, automation will only spread the confusion. Tighten your real consultation-window rules first.",
        },
        {
          icon: PhoneCall,
          title: "Know when a rep needs to pick up the phone",
          body: "A simple reschedule reply can stay automated. A complex access issue, technical roof question, or a request to change the project scope should route to the rep fast. Automation should protect the rep's time, not trap buyers in a dead-end loop.",
        },
        {
          icon: Sun,
          title: "Keep the reminder grounded in the visit purpose",
          body: "A site audit, a design consultation, and a post-sale install visit don't all need the same message. The strongest workflows reflect the real appointment type and exactly what the homeowner needs to have ready.",
        },
        {
          icon: MessageSquare,
          title: "Measure fewer no-shows, not just more sent texts",
          body: "Success is not how many reminders went out. It is whether fewer reps drive to empty houses, fewer consultations are wasted without bills, and the office spends less time manually confirming visits.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical solar scheduling and reminder workflow usually works",
      subtitle:
        "The clean version is simple: confirm the booked visit, reinforce the schedule, ensure readiness, and route exceptions early.",
      blocks: [
        {
          heading: "The consultation is marked booked",
          body: "The workflow starts when a design consultation or site audit is actually on the calendar. That booked-event becomes the stable trigger for confirmations, reminder timing, and any rep-aware follow-up.",
        },
        {
          heading: "The homeowner gets a real confirmation with utility-bill instructions",
          body: "The first message confirms the date, window, and service type. Crucially, it reminds the homeowner to have their utility usage history ready or provides a way to share it ahead of time so the visit isn't wasted.",
        },
        {
          heading: "Reminder timing keeps the appointment active",
          body: "As the visit approaches, reminders go out at intervals that make sense (usually 24h and 2h before). This cuts preventable no-shows materially, as many solar misses are just forgotten visits or homeowners who lost the rep's contact info.",
        },
        {
          heading: "Exceptions route back to the sales rep with context",
          body: "If the customer needs to reschedule or has a practical update about the property, the rep gets that message with the consultation context already attached. This protects the rep's travel time and ensures they don't hit the road for a dead visit.",
        },
        {
          heading: "Owners finally see where the sales pipeline is leaking",
          body: "Over time you can see whether the problem is weak confirmations, late reminders, or a specific stage where homeowners drop off. That turns the workflow into both schedule protection and a sales-operations diagnosis tool.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is not a published solar scheduling-specific case study yet. The honest support comes from the live solar parent, the generic booking/reminder guide, and the Paris Cafe voice agent case study that proves the appointment-setting mechanics.",
      studies: [
        {
          industry: "Solar parent page",
          headline: "The broader solar guide already identifies appointment scheduling and reminders as a core workflow family",
          body: "The parent page explains why missed calls, lead response, scheduling, and utility-bill collection all matter together. This child narrows that broader opportunity to one stage: the design visit follow-through.",
          link: "/ai-automation-for-solar-companies",
        },
        {
          industry: "Booking and reminder mechanics",
          headline: "The generic booking-confirmation guide already proves the confirmation, reminder, and attendance-protection mechanics",
          body: "That page covers the broader playbook: confirmations, reminder timing, easy rescheduling, and fewer no-shows. This solar child grounds those mechanics in consultation windows and utility-bill readiness.",
          link: "/booking-confirmation-and-reminder-automation",
        },
        {
          industry: "Appointment Setting Case Study",
          headline: "The Paris Cafe project proved the ability to handle high-volume appointment setting and reminders with zero human oversight",
          body: "While that project was for restaurant reservations, the underlying logic of capturing a time slot, confirming it, and protecting that slot with reminders is identical to what solar companies need for design visits.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
        { label: "What to automate first for solar companies", href: "/what-to-automate-first-for-solar-companies" },
        { label: "Utility bill collection for solar", href: "/utility-bill-collection-automation-for-solar-companies" },
        { label: "Solar lead follow-up automation", href: "/ai-lead-follow-up-for-solar-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from AI lead follow-up for solar companies?",
      answer:
        "Lead follow-up covers the earlier stage: immediate response to new inquiries, short nurture, and light qualification before the consultation is booked. This page focuses on what happens after the visit is on the calendar: confirmations, reminders, reschedules, and rep handoff.",
    },
    {
      question: "How is this different from the broader solar automation page?",
      answer:
        "The broader solar page covers the full system: missed calls, lead follow-up, utility bill processing, and scheduling. This child page isolates one high-stakes stage — consultation scheduling and reminder flow — so the buyer can evaluate that narrower problem clearly.",
    },
    {
      question: "What does a focused solar scheduling workflow usually cost?",
      answer:
        "A focused booked-visit workflow usually lands around $1.5K-$3K depending on your CRM triggers, whether utility-bill collection is part of the reminder flow, and how many reps need to stay in sync. It pays for itself by preventing just 1 or 2 high-ticket no-shows.",
    },
    {
      question: "Can this work with our current solar CRM like GoHighLevel or Aurora?",
      answer:
        "Usually yes. Most solar CRMs provide reliable booked-job triggers. Automation improves the communication layer around those triggers, ensuring messages are sent, replies are routed, and bills are requested without the office staff touching it.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The biggest win is protecting the design rep's travel time and the office's marketing spend. Fewer no-shows mean more proposals delivered. The secondary win is ensuring utility bills are ready for the visit, which increases the consultation-to-contract conversion rate.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating solar consultation scheduling and reminders",
  ctaHeading: "Want fewer solar consultations slipping through preventable reminder gaps?",
  ctaText:
    "Book a 30-minute call. We will look at how your company handles visit confirmations, reminders, and utility-bill requests today, then tell you whether a focused scheduling-and-reminder workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No fake fully autonomous sales pitch. Just a practical recommendation based on your consult volume, rep travel time, and current no-show pain.",
  relatedLinks: [
    { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
    { label: "What to automate first for solar companies", href: "/what-to-automate-first-for-solar-companies" },
    { label: "Utility bill collection for solar", href: "/utility-bill-collection-automation-for-solar-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
