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
    "How restaurants automate private-event inquiry follow-up without making the sales conversation feel robotic. Capture details, route fast, send the first response, and keep human handoff where it matters.",
  badgeText: "Restaurant Workflow",
  badgeIcon: UtensilsCrossed,
  h1: "Private Event Inquiry Follow-Up for Restaurants",
  heroIntro:
    "If your restaurant hosts buyouts, private dining, group bookings, or catering requests, the first operational risk is usually not demand. It is response speed. Event leads come in through forms, voicemails, DMs, and rushed phone calls, then sit while service is happening. Private-event inquiry follow-up automation fixes that narrow gap. It captures the important details, confirms the inquiry fast, alerts the right person, and keeps the thread moving until a human takes over the actual sales conversation.",
  heroSubtext:
    "Below: what this workflow should automate, how it differs from broad restaurant automation or a restaurant voice-agent setup, what proof honestly supports it today, and where the human event lead should still stay fully human.",
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
        },
        {
          icon: BellRing,
          title: "Send an immediate acknowledgement",
          body: "A fast first response matters. Automation can confirm that the inquiry was received, set expectation on next steps, and stop the lead from assuming nobody is going to reply.",
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
        },
        {
          icon: Send,
          title: "Keep templated outreach narrow and useful",
          body: "Basic next-step messages, availability checks, and information requests can be templated. Custom pricing, negotiation, menu nuance, and relationship-building should stay human-led.",
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
      title: "How a practical restaurant event follow-up workflow usually works",
      subtitle:
        "The strongest version is simple: one intake path, one owner, fast acknowledgement, and clean human handoff.",
      blocks: [
        {
          heading: "The inquiry lands in one place with structure",
          body: "Whether the lead came from a form, voicemail, email, or social message, the workflow turns it into one clean record with the key event details attached.",
        },
        {
          heading: "The prospect gets an immediate next-step message",
          body: "A short acknowledgement confirms the request was received and sets a realistic expectation for human follow-up. This protects the lead from going cold in the first hour.",
        },
        {
          heading: "The right person gets notified with context",
          body: "Instead of a vague forwarded email, the events lead gets a usable summary and can respond from a better starting point. That is where automation saves time without flattening the sales conversation.",
        },
        {
          heading: "Reminder logic keeps the lead from disappearing",
          body: "If the lead is unassigned, unreplied, or waiting on the next step, the workflow can nudge the owner internally or trigger a narrow follow-up sequence. It should reinforce discipline, not replace it.",
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
    { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
    { label: "Paris Cafe case study", href: "/case-studies/paris-cafe-voice-agent" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
