import {
  AlertTriangle,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  DollarSign,
  MessageSquare,
  Scale,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "no-show-reduction-setup-vs-diy-small-business",
  metaTitle:
    "No-Show Reduction Setup vs. DIY for Small Business — When to Hire Help | Dmytro AI",
  metaDescription:
    "Should a small business DIY no-show reduction setup or hire expert help? Practical guide to owner time, reminder timing, reschedule routing, deposit rules, CRM visibility, and when setup help is cheaper than more DIY drift.",
  badgeText: "Setup Buy-vs-Build",
  badgeIcon: Scale,
  h1: "No-Show Reduction Setup: Hire Help or DIY?",
  heroIntro:
    "DIY can make sense when your attendance workflow is still narrow: one booking type, one clean confirmed-booking trigger, low appointment volume, and someone inside the business willing to test reminder timing, watch reschedule replies, and clean up edge cases after launch. Hiring help is usually the smarter move once the workflow touches different appointment types, deposit rules, reschedule routing that has to stop the old sequence cleanly, or front-desk visibility the team will actually trust. The real decision is not whether you could set this up yourself. It is whether the cost of more owner-side trial and error is already higher than the price of getting a trustworthy attendance workflow live now.",
  heroSubtext:
    "Below: when DIY no-show reduction setup is still a smart move, when expert help usually pays for itself, what each path really costs, and how to tell whether you need a simple manual attendance checklist, a prototype, or a bounded setup engagement.",
  sections: [
    {
      type: "cards",
      title: "What this decision is really about",
      subtitle:
        "Most owners are not choosing between free and expensive. They are choosing which kind of cost, delay, and operational risk they want to own:",
      items: [
        {
          icon: DollarSign,
          title: "DIY lowers invoice cost, not always total cost",
          body: "Doing the setup yourself may reduce cash spend, but it shifts the cost into owner or office time: cleaning the booking-confirmed trigger, deciding reminder timing, testing reschedule logic, separating passive reminders from active confirmations, and fixing the first ugly edge cases after the workflow goes live.",
        },
        {
          icon: Workflow,
          title: "Attendance setup is workflow design, not just reminder copy",
          body: "The hard part is rarely the text of the reminder. The hard part is deciding which appointments qualify, which timing rules change by appointment type, what should happen when someone asks to reschedule, when deposits should apply, and who owns the next move when a reply signals a real issue instead of a simple confirmation.",
        },
        {
          icon: Wrench,
          title: "Hiring help makes sense when delay is already costing booked revenue",
          body: "If no-shows or late cancels are already burning meaningful appointment capacity, setup help is often cheaper than another month of manual follow-up, half-built automations, and staff cleanup. You are not paying for text-message buttons. You are paying to make booked visits more likely to happen.",
        },
      ],
    },
    {
      type: "table",
      title: "DIY no-show setup vs. hiring expert help",
      subtitle:
        "This is the practical trade-off for a small business that already believes attendance protection matters:",
      headers: ["DIY setup", "Hire setup help"],
      rows: [
        {
          label: "Best for",
          values: [
            "One clean appointment type, reliable booking-confirmed signal, lower booking volume, and an owner or office manager willing to test and maintain the workflow personally",
            "Revenue-critical attendance protection, multiple appointment types, reschedules that currently break the workflow, deposit rules, or CRM visibility the team needs to trust on day one",
          ],
        },
        {
          label: "Typical cash cost",
          values: [
            "Lower upfront spend plus your own time, tool cost, and launch cleanup",
            "Often $1K-$2.5K for a bounded small-business setup depending on trigger hygiene, reminder variation, reschedule routing, deposit logic, and CRM logging depth",
          ],
        },
        {
          label: "Time to a trustworthy launch",
          values: [
            "Several evenings to several weeks depending on how clean the booking process already is",
            "Often 4-10 business days for a focused build with tested timing, stop rules, and reply routing",
          ],
        },
        {
          label: "Biggest risk",
          values: [
            "Reminders firing off the wrong trigger, reschedules not stopping the old sequence, or deposits adding friction where they should not exist",
            "Paying for a broader scheduling rebuild when the real problem is a narrower attendance workflow",
          ],
        },
        {
          label: "What success should look like",
          values: [
            "A workflow you understand because you built it and are willing to tune after real appointment behavior exposes edge cases",
            "A production-ready no-show reduction workflow the team trusts to confirm, remind, reschedule, log, and recover missed visits without constant owner babysitting",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When DIY is a strong fit — and when hiring help is smarter",
      subtitle:
        "DIY can be the right move for the right scope. It becomes expensive when the attendance workflow matters more than the learning exercise:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "DIY can be a good fit",
          variant: "green",
          items: [
            "You have one clear definition of what counts as a genuinely booked appointment",
            "Appointment volume is low enough that a setup mistake will not burn meaningful revenue or schedule utilization",
            "You mainly need a clean confirmations-and-reminders workflow, not layered deposit rules or complex reply routing",
            "You are comfortable owning CRM logging, reminder timing tweaks, and post-launch cleanup internally",
            "You want to prototype the workflow first so you can prove the attendance problem is worth fixing before hardening it",
          ],
        },
        {
          icon: XCircle,
          heading: "Hiring help is usually smarter",
          variant: "neutral",
          items: [
            "Different appointment types need different reminder timing, confirmation rules, or deposit thresholds",
            "Reschedules currently create duplicate reminders or force staff to clean up the workflow manually",
            "The owner already knows no-show reduction matters but keeps losing evenings to setup drift instead of launching it cleanly",
            "Staff need clear CRM visibility into who confirmed, who asked to reschedule, and who no-showed",
            "A handful of recovered visits per month would already justify paying to stop overthinking and get the workflow live",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where small-business DIY no-show projects usually start breaking down",
      subtitle:
        "The issue is rarely the first reminder draft. It is everything around it once real appointment behavior shows up:",
      blocks: [
        {
          heading: "The workflow has no trustworthy booking-confirmed trigger",
          body: "A tentative slot, an intake form submission, a calendar hold, and a fully confirmed appointment are not the same thing. DIY starts getting expensive when the automation cannot tell the difference and reminders fire too early or for visits that were never truly committed.",
        },
        {
          heading: "The same timing rule gets forced onto every appointment type",
          body: "A same-day follow-up, a two-day-out consultation, and a higher-value service with a deposit policy do not all need the same cadence. The cheaper-looking DIY build often flattens everything into one sequence because that is easier to configure, not because it is operationally safer.",
        },
        {
          heading: "Reschedule replies do not actually stop the old sequence",
          body: "This is the fastest way to lose trust. The customer moves from Tuesday to Thursday, but the Tuesday reminders still fire. Setup help pays for itself quickly when the business is already tired of contradictory reminders and staff cleanup that should have been designed out before launch.",
        },
      ],
    },
    {
      type: "considerations",
      title: "How to make the right call before you burn a month on setup",
      subtitle:
        "A few practical checks usually make the answer obvious:",
      items: [
        {
          icon: Clock,
          title: "Put a real value on owner or office time",
          body: "If your time is worth $75-$200 an hour and the workflow will realistically take 10-20 hours to map triggers, test reminder timing, fix reschedules, and validate CRM visibility, DIY is not automatically cheap. It may still be worth it — but not because it is free.",
        },
        {
          icon: ClipboardList,
          title: "Start with one bounded attendance workflow, not every scheduling rule at once",
          body: "The safest DIY version is one clear use case: one appointment type, one confirmation path, one reschedule rule set, and one reply owner. If you are also trying to solve deposits, waitlist backfill, multi-location variations, and broader scheduling redesign in the same pass, the scope is probably already too wide.",
        },
        {
          icon: AlertTriangle,
          title: "Separate prototype value from production value",
          body: "DIY is great for proving the attendance leak is real. Hiring help is usually better once you already know the workflow should exist and now need it to run reliably with real appointment volume, real reschedules, and staff who do not want to babysit it.",
        },
        {
          icon: ShieldCheck,
          title: "Keep ownership either way",
          body: "Whether you build it yourself or hire setup help, your business should own the CRM access, calendar logic, sending numbers, workflow docs, and deposit-policy decisions. Good setup help reduces risk. It should not trap your attendance workflow inside somebody else’s accounts.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is grounded in the live no-show cluster plus published adjacent proof around booked-appointment follow-through and operational routing:",
      studies: [
        {
          industry: "No-show setup scope",
          headline: "The setup page already defines what expert implementation should actually include before launch",
          body: "That page stays on implementation scope: booking-confirmed triggers, reminder timing, reschedule routing, deposit rules, and CRM visibility. This page answers the narrower buyer decision that comes one step earlier: keep DIYing, or pay for setup help now?",
          link: "/no-show-reduction-setup-for-service-businesses",
        },
        {
          industry: "No-show cost + attendance economics",
          headline: "The cost sibling proves there is already a real budgeting layer around this workflow",
          body: "The pricing page covers what focused no-show reduction usually costs and what those budget bands buy. This page stays distinct by answering the buy-vs-build call before the owner commits either more internal time or a bounded setup engagement.",
          link: "/no-show-reduction-cost-small-business",
        },
        {
          industry: "Published booking proof",
          headline: "Paris Cafe proves why confirmation mechanics and clean follow-through matter once a slot is booked",
          body: "That project is restaurant-specific, not a cross-industry attendance build, so the proof framing stays adjacent. But it shows the same operational truth: booked demand gets protected when confirmations, follow-through, and staff handoff are handled cleanly instead of manually and inconsistently.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
        { label: "No-show reduction setup help", href: "/no-show-reduction-setup-for-service-businesses" },
        { label: "No-show reduction cost", href: "/no-show-reduction-cost-small-business" },
        { label: "Booking confirmation and reminder automation", href: "/booking-confirmation-and-reminder-automation" },
        { label: "Appointment scheduling and reminder automation", href: "/appointment-scheduling-and-reminder-automation-for-service-businesses" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "When is DIY no-show reduction setup actually the right move?",
      answer:
        "Usually when the business has one clean booking-confirmed trigger, one straightforward reminder path, lower appointment volume, and someone internal willing to test timing, watch replies, and maintain the workflow after launch. DIY works best when the main value is learning and proving the attendance gap, not when the business needs a production-safe workflow immediately.",
    },
    {
      question: "When should I hire someone to set up no-show reduction automation instead of doing it myself?",
      answer:
        "Hire help when reminder timing varies by appointment type, reschedules keep breaking the workflow, deposit rules matter, or the owner already knows no-shows are costing real money and does not want another month of half-built automation and staff cleanup. If a few recovered visits per month would cover the spend, setup help is usually the safer move.",
    },
    {
      question: "How is this different from the existing no-show setup page?",
      answer:
        "The setup page explains what a clean no-show reduction implementation should include before launch. This page sits one step earlier in the buying journey and answers the decision itself: keep DIYing, or pay for setup help now?",
    },
    {
      question: "How much does it usually cost to hire help for no-show reduction setup?",
      answer:
        "A focused small-business setup often lands around $1K-$2K when the booking signal is already clean and the workflow is narrow. More complex builds with appointment-type timing, reschedule branching, deposit rules, CRM visibility, and clearer team ownership often land around $2K-$2.5K. The real driver is process cleanliness and routing complexity, not the label alone.",
    },
    {
      question: "Can I prototype no-show reduction myself and hire someone later?",
      answer:
        "Yes. That is often the smartest path. DIY can prove the attendance leak is real. Then setup help can harden the trigger logic, stop rules, timing, and CRM visibility so the workflow is safe to run consistently in production.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners deciding whether to keep building their attendance workflow alone or bring in expert setup help",
  ctaHeading: "Want a clear answer on whether this no-show workflow is worth DIYing?",
  ctaText:
    "Book a 30-minute call. We will look at how bookings get confirmed today, where reminder timing or reschedules break, how much owner or office cleanup the current process creates, and whether the smartest next step is DIY, a bounded setup engagement, or a lighter manual attendance checklist first.",
  ctaSubtext:
    "No generic scheduling-tech pitch. Just a practical conversation about whether this attendance workflow should stay in-house or get implemented properly now.",
  relatedLinks: [
    { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
    { label: "No-show reduction setup help", href: "/no-show-reduction-setup-for-service-businesses" },
    { label: "No-show reduction setup mistakes", href: "/no-show-reduction-setup-mistakes-small-business" },
    { label: "No-show reduction cost", href: "/no-show-reduction-cost-small-business" },
    { label: "Booking confirmation and reminder automation", href: "/booking-confirmation-and-reminder-automation" },
    { label: "Appointment scheduling and reminder automation", href: "/appointment-scheduling-and-reminder-automation-for-service-businesses" },
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "Client reactivation setup vs. DIY", href: "/client-reactivation-setup-vs-diy-small-business" },
    { label: "Review request setup vs. DIY", href: "/review-request-automation-setup-vs-diy-small-business" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
