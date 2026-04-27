import {
  UtensilsCrossed,
  MessageSquare,
  BellRing,
  CalendarCheck,
  Users,
  CheckCircle2,
  XCircle,
  Clock,
  FileText,
  ArrowUpRight,
  Send,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "private-event-inquiry-follow-up-for-restaurants",
  metaTitle:
    "Private Event Inquiry Follow-Up for Restaurants — Faster Response, Better Event Conversion | Dmytro AI",
  metaDescription:
    "A practical 5-step intake-to-handoff workflow for restaurants that host private events. Capture inquiry details from any channel, acknowledge in under 60 seconds, route to the right person with context, and keep the lead alive until a human closes the sale.",
  badgeText: "Restaurant Workflow",
  badgeIcon: UtensilsCrossed,
  h1: "Private Event Inquiry Follow-Up for Restaurants",
  heroIntro:
    "If your restaurant hosts buyouts, private dining, group bookings, or catering requests, the first operational risk is usually not demand — it is response speed. Event leads arrive through forms, voicemails, DMs, and rushed phone calls, then sit unanswered while service is happening. By the time your events lead sees the inquiry, the prospect has already reached out to another venue. Private-event inquiry follow-up automation fixes that narrow gap: it captures the key details, confirms the inquiry in under a minute, alerts the right person with a usable summary, and keeps the thread moving until a human takes over the actual sales conversation.",
  heroSubtext:
    "Below: the concrete 5-step intake-to-handoff workflow, what this automates vs. what stays human, how it connects to your broader restaurant automation stack, and the honest proof frame behind the page.",
  sections: [
    {
      type: "cards",
      title: "What private-event inquiry automation should actually do",
      subtitle:
        "The goal is not to automate event sales end to end. The goal is to stop good inquiries from going cold before your team even responds:",
      items: [
        {
          icon: MessageSquare,
          title: "Capture inquiries from every channel",
          body: "Phone calls, website forms, email, Instagram, and contact-page submissions should all land in one intake path with the core details attached instead of disappearing across separate inboxes.",
          links: [
            { label: "After-hours phone answering", href: "/after-hours-phone-answering-for-restaurants" },
            { label: "Missed-call text-back", href: "/missed-call-text-back-for-restaurants" },
          ],
        },
        {
          icon: BellRing,
          title: "Send an immediate acknowledgement",
          body: "A fast first response matters. Automation can confirm that the inquiry was received, set expectation on next steps, and stop the lead from assuming nobody is going to reply. Paris Cafe cut web-lead response to under 60 seconds with this same pattern applied to reservations and general inquiries.",
          links: [
            { label: "Paris Cafe proof", href: "/case-studies/paris-cafe-voice-agent" },
          ],
        },
        {
          icon: FileText,
          title: "Collect the details your events lead actually needs",
          body: "Date, headcount, occasion, preferred time, budget signals, and contact information should be captured up front so your manager is not starting every conversation from zero.",
        },
        {
          icon: Users,
          title: "Route the inquiry to the right human with context",
          body: "The owner, GM, or events lead should get a clean summary and task, not a vague forwarded message. Good automation shortens handoff time without pretending to replace the relationship side of selling an event.",
        },
        {
          icon: CalendarCheck,
          title: "Trigger reminder and follow-up tasks if the thread stalls",
          body: "If the first outreach goes unanswered or the lead goes quiet, the workflow can prompt the next step instead of relying on memory. That is often the difference between consistent event follow-up and good intentions.",
          links: [
            { label: "Reservation reminder workflow", href: "/reservation-confirmation-and-reminder-automation-for-restaurants" },
          ],
        },
        {
          icon: Send,
          title: "Keep templated outreach narrow and useful",
          body: "Basic next-step messages, availability checks, and information requests can be templated. Custom pricing, negotiation, menu nuance, and relationship-building should stay human-led.",
        },
      ],
    },
    {
      type: "prose",
      title: "The 5-step intake-to-handoff workflow",
      subtitle:
        "Most restaurant event follow-up problems trace back to the same five gaps. Here is the concrete sequence automation should cover:",
      blocks: [
        {
          heading: "Step 1 — Funnel every channel into one intake record",
          body: "Whether the inquiry arrives as a phone call, website form, email, Instagram DM, or voicemail, the workflow normalizes it into a single structured record: contact name, date range, estimated headcount, occasion type, and contact method. If the inquiry came by phone and was handled by a voice agent or missed-call text-back, the transcript or text thread feeds the same record. One source of truth means nothing gets lost between hostess stand, email, and the GM's text messages.",
        },
        {
          heading: "Step 2 — Acknowledge the inquiry in under 60 seconds",
          body: "An automatic confirmation goes out immediately by the same channel the prospect used: text reply, email, or DM. The message is short and factual — it confirms the request was received, names the person who will follow up, and sets a realistic timeline (e.g., 'Our events manager will reach out within 2 business hours'). This one step alone prevents the single biggest conversion leak: the prospect assuming nobody saw their message and contacting another venue.",
        },
        {
          heading: "Step 3 — Alert the events lead with a usable summary",
          body: "Instead of a vague forwarded email, the events manager or GM gets a structured notification — Slack message, SMS, or CRM task — with every detail the prospect already provided. The summary includes the inquiry source, requested date, group size, occasion, and any notes. The owner starts the conversation with context instead of re-asking questions the prospect already answered.",
        },
        {
          heading: "Step 4 — Escalate or reassign if the first response window passes",
          body: "If the assigned person has not responded within the target window (usually 1–2 hours during business hours), the workflow escalates: a second notification goes to a backup owner or the GM. This internal nudge is invisible to the prospect but prevents inquiries from sitting overnight or through a busy weekend shift.",
        },
        {
          heading: "Step 5 — Follow up if the prospect goes quiet",
          body: "If the events lead sent the first outreach but the prospect has not replied within 24–48 hours, the workflow triggers a single polite follow-up message. After that, it creates a reminder task for the human to decide the next move. The automation stops short of multi-touch nurture sequences — private-event sales are relationship-driven, and over-automated follow-up reads as spam.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page differs from the broader restaurant pages",
      subtitle:
        "This workflow is distinct only if it stays tightly focused on event-lead response and human handoff:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for restaurants",
          values: [
            "Restaurant owners evaluating the whole automation opportunity across calls, reservations, inquiries, review requests, and guest communication",
            "Explains where automation helps overall and where it should stop",
          ],
        },
        {
          label: "AI voice agent for restaurants",
          values: [
            "Restaurants losing reservation calls or repetitive phone traffic during service and after hours",
            "Answers calls, handles routine questions, captures reservation demand, and routes obvious edge cases",
          ],
        },
        {
          label: "Private-event inquiry follow-up",
          values: [
            "Restaurants where buyouts, large parties, or catering leads matter and the issue is slow response or weak internal follow-through",
            "Captures inquiry details, acknowledges fast, routes cleanly, and keeps the lead alive until a human closes it",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this is a good fit and when it is not",
      subtitle:
        "Best for restaurants where event revenue matters enough that a delayed reply has real cost.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Private dining, large-party bookings, buyouts, or catering are meaningful revenue lines",
            "Event inquiries currently arrive in multiple places and follow-up depends on whoever notices them first",
            "The team is strong at selling events once the conversation starts, but weak at speed-to-first-response",
            "You want cleaner intake and reminders without turning the process into canned event spam",
            "You can define a clear owner for event leads and a simple first-response playbook",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Private events are rare and not commercially important to the business",
            "One person already responds quickly and consistently to every inquiry",
            "You want AI negotiating menus, pricing, and custom terms without human review",
            "Your event process changes constantly and there is no stable intake logic to automate",
            "Your bigger issue is empty demand, not follow-up discipline",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for restaurant event-lead workflows",
      subtitle:
        "The workflow should create speed and visibility, not robotic sales behavior.",
      items: [
        {
          icon: Clock,
          title: "Optimize for time-to-first-response first",
          body: "Most restaurants do not lose event inquiries because they lack a sophisticated nurture sequence. They lose them because the first useful reply comes too late. Fix that before adding anything more elaborate.",
        },
        {
          icon: FileText,
          title: "Capture only the details that move the next step forward",
          body: "Ask for the facts your event lead genuinely uses: date range, group size, occasion, contact info, and maybe budget or food-and-beverage expectations. Do not bury prospects in a giant intake form just because automation makes it possible.",
        },
        {
          icon: Users,
          title: "Keep pricing, negotiation, and exceptions human",
          body: "Automation can support the process, but event fit, menu nuance, custom terms, and relationship-building should stay with a person. The system should tee up the conversation, not impersonate your events manager.",
        },
        {
          icon: ArrowUpRight,
          title: "Track where event leads stall",
          body: "The real value is seeing whether delays happen at intake, first response, quote turnaround, follow-up after a site visit, or final confirmation. That visibility is what lets you improve event conversion instead of guessing why good leads disappear.",
        },
      ],
    },
    {
      type: "prose",
      title: "How this workflow connects to your broader restaurant automation stack",
      subtitle:
        "Private-event follow-up does not exist in isolation. It works best when it plugs into the other restaurant workflows that are already handling inbound demand.",
      blocks: [
        {
          heading: "Phone intake ties into after-hours coverage and missed-call recovery",
          body: "If event inquiries arrive by phone outside business hours, the same after-hours phone answering or missed-call text-back system that handles reservation calls can capture the event details and feed them into the intake record. You do not need a separate phone system for event leads — just a routing rule that flags the inquiry type.",
        },
        {
          heading: "Reminder logic mirrors reservation confirmation patterns",
          body: "The same reminder and follow-up logic that drives reservation confirmation and no-show reduction can power the internal nudges and prospect follow-ups in the event workflow. If you already automate reservation reminders, extending that to event-lead stall alerts is a small addition, not a separate project.",
        },
        {
          heading: "The parent restaurant guide covers where event follow-up fits in the priority stack",
          body: "If you are evaluating whether private-event follow-up should be your first automation or whether missed calls, reservations, or review requests deserve attention first, the restaurant automation parent guide and the what-to-automate-first decision page lay out that priority logic clearly.",
        },
        {
          heading: "Proof from adjacent restaurant workflows applies here",
          body: "The Paris Cafe deployment proves the operating principle behind this workflow: when a restaurant stops letting inbound demand sit unanswered and routes the next step quickly, response time drops to under 60 seconds and management recovers meaningful weekly hours. Private-event follow-up uses a higher-touch conversation, but the intake-acknowledge-route pattern is identical.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published private-event-specific case study yet. The honest proof frame is the live restaurant call-handling work plus the broader restaurant operations page that already identifies private-event inquiry follow-up as a high-value workflow.",
      studies: [
        {
          industry: "Restaurant parent page",
          headline: "The broader restaurant automation guide already establishes private-event follow-up as a strong sub-workflow",
          body: "The parent restaurant page explicitly calls out private-event and large-party inquiry follow-up as one of the narrow operational wins worth automating. This child page takes that specific workflow and turns it into a decision page instead of leaving it buried as one bullet inside the broader vertical guide.",
          link: "/ai-automation-for-restaurants",
        },
        {
          industry: "Adjacent restaurant proof",
          headline: "Paris Cafe proves the fast-response and routing pattern this workflow depends on",
          body: "The Paris Cafe voice-agent deployment shows what happens when a restaurant stops missing inbound demand and routes the next step quickly: after-hours call coverage moved from 0% to 100%, web lead response dropped to under 60 seconds, and management got back about 15 hours a week. Private-event follow-up uses a different conversation, but the operating principle is the same — respond fast, route cleanly, and escalate the nuanced conversations to a human.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for restaurants", href: "/ai-automation-for-restaurants" },
        { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
        { label: "Paris Cafe case study", href: "/case-studies/paris-cafe-voice-agent" },
        { label: "What to automate first for restaurants", href: "/what-to-automate-first-for-restaurants" },
        { label: "After-hours phone answering for restaurants", href: "/after-hours-phone-answering-for-restaurants" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is this just a restaurant chatbot for event leads?",
      answer:
        "Not necessarily. The highest-value version is usually workflow automation behind forms, email, phone intake, and internal notifications. A chatbot can help in some setups, but the real problem is usually response speed and follow-up discipline, not the lack of a chat widget.",
    },
    {
      question: "What should stay human in private-event follow-up?",
      answer:
        "Pricing, menu exceptions, negotiation, contract nuance, and relationship-building should stay human. Automation should handle capture, acknowledgement, reminders, and routing — the parts that protect speed and consistency.",
    },
    {
      question: "How much does a focused restaurant event follow-up workflow usually cost?",
      answer:
        "A focused build usually lands in the low-thousands depending on intake channels, CRM or inbox integration, reminder logic, and how many stages need automation. The right comparison is against lost event revenue and manager time, not software subscription cost by itself.",
    },
    {
      question: "Can this work if event inquiries come from Instagram or phone calls, not just forms?",
      answer:
        "Yes, as long as there is a reliable way to route those inquiries into one source of truth. The exact setup differs by channel, but the operating goal stays the same: one intake path, fast acknowledgement, and a clear human owner.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "Usually it is not labor savings first. It is fewer good inquiries going cold, faster first response, better internal follow-through, and more visibility into where private-event leads stall before they convert.",
    },
  ],
  faqSubtitle:
    "Straight answers for restaurant owners and managers considering event-lead automation",
  ctaHeading: "Want private-event leads handled faster without making the process robotic?",
  ctaText:
    "Book a 30-minute call. We will look at how event inquiries enter the business today, where they stall, and whether a focused follow-up workflow would create a real revenue win before you touch anything broader.",
  ctaSubtext:
    "No fake hospitality-tech hype. Just a practical look at event demand, response lag, and which parts of the process should stay fully human.",
  relatedLinks: [
    { label: "AI automation for restaurants", href: "/ai-automation-for-restaurants" },
    { label: "What to automate first for restaurants", href: "/what-to-automate-first-for-restaurants" },
    { label: "After-hours phone answering for restaurants", href: "/after-hours-phone-answering-for-restaurants" },
    { label: "Missed-call text-back for restaurants", href: "/missed-call-text-back-for-restaurants" },
    { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
    { label: "Reservation confirmation and reminder automation", href: "/reservation-confirmation-and-reminder-automation-for-restaurants" },
    { label: "Paris Cafe case study", href: "/case-studies/paris-cafe-voice-agent" },
  ],
};

export default data;
