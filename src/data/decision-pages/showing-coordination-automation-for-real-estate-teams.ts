import {
  Home,
  CalendarCheck,
  BellRing,
  MessageSquare,
  Users,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Timer,
  ArrowUpRight,
  Phone,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "showing-coordination-automation-for-real-estate-teams",
  metaTitle:
    "Showing Coordination Automation for Real Estate Teams — More Showings, Less Phone Tag | Dmytro AI",
  metaDescription:
    "How real estate teams automate showing coordination without losing control of routing, scheduling rules, reminders, or live-agent handoff.",
  badgeText: "Real Estate Workflow",
  badgeIcon: Home,
  h1: "Showing Coordination Automation for Real Estate Teams",
  heroIntro:
    "A real estate team does not lose momentum only because leads arrive slowly. It also loses momentum because a prospect wants to see a property, nobody answers fast enough, scheduling turns into phone tag, reminders are inconsistent, and the assigned agent gets pulled in too early or too late. Showing coordination automation fixes that narrow workflow. It responds fast, offers the right next scheduling path, keeps confirmations and reminders moving, and hands serious prospects to the right agent with context before the opportunity cools off.",
  heroSubtext:
    "Below: what showing coordination automation actually handles, how it differs from broader real-estate automation and the lead-response child page, what guardrails matter, and what adjacent proof supports this page honestly.",
  sections: [
    {
      type: "cards",
      title: "What showing coordination automation actually handles",
      subtitle:
        "This page is intentionally narrow. It is about the inquiry-to-showing workflow after a lead wants a next step, not the whole CRM or nurture stack.",
      items: [
        {
          icon: Timer,
          title: "Fast reply to showing-intent inquiries",
          body: "When a prospect asks to see a property, the system responds in seconds instead of after the next appointment, open house, or drive back across town.",
        },
        {
          icon: CalendarCheck,
          title: "Rule-based scheduling",
          body: "The workflow can offer approved showing windows, respect assigned-agent or team rules, and keep self-scheduling inside the actual calendar reality of the business.",
        },
        {
          icon: BellRing,
          title: "Confirmation, reminders, and no-show recovery",
          body: "Booked prospects get the right confirmation details, reminders before the appointment, and a clean follow-up path if they miss or need to reschedule.",
        },
        {
          icon: MessageSquare,
          title: "Property-specific instructions and pre-show qualification",
          body: "Before the showing, the workflow can share parking, gate, open-house, or appointment details and collect the few basics the team needs before investing agent time.",
        },
        {
          icon: Users,
          title: "Agent handoff with context",
          body: "When the prospect becomes high-intent, the assigned agent gets the source, property, preferred time, and conversation history instead of picking up blind.",
        },
        {
          icon: BarChart3,
          title: "Visibility into where showings are getting lost",
          body: "The team can finally see inquiry response speed, booked showings, confirmations, attendance, and where prospects disappear before a conversation turns into a real opportunity.",
        },
      ],
    },
    {
      type: "table",
      title: "Showing coordination vs. broader real-estate workflows",
      subtitle:
        "Related pages can coexist when the workflow stage and buyer intent are clearly different:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for real estate",
          values: [
            "Agents and teams evaluating the full automation opportunity across response speed, CRM workflows, nurture, qualification, and scheduling",
            "Broad real-estate overview of where automation fits and what a full system can include",
          ],
        },
        {
          label: "Real estate lead response and follow-up automation",
          values: [
            "Teams whose main leak is first-response speed and early nurture discipline",
            "Fixes the immediate reply and follow-up layer before the lead becomes a booked next step",
          ],
        },
        {
          label: "Showing coordination automation for real estate teams",
          values: [
            "Teams already generating interest but losing momentum between raised hand and attended showing",
            "Gets qualified, showing-intent prospects scheduled, reminded, and handed off cleanly to the right agent",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your team?",
      subtitle:
        "Best for teams where demand exists, but the inquiry-to-showing execution is messier than it should be.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You get enough inbound buyer or seller leads that showing requests create real coordination work",
            "Prospects wait too long for a callback or scheduling answer",
            "Your team handles scheduling across multiple agents, listing types, or calendars",
            "No-shows and reschedules waste agent time every week",
            "You want automation to handle the routine scheduling layer without pretending it should run the whole sales conversation",
            "You need cleaner visibility into which inquiries actually become attended showings",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You only get a small handful of showing requests each month and can coordinate them personally every time",
            "One dedicated ISA or admin already handles every scheduling step well within minutes",
            "Your bigger problem is weak lead volume, not handoff or scheduling friction",
            "Your calendars, listings, or assignment rules are too messy to automate against yet",
            "You want AI to handle nuanced pricing, offer, or negotiation conversations without a human stepping in",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for real-estate showing workflows",
      subtitle:
        "The workflow should reduce coordination drag without creating new client-service or compliance problems.",
      items: [
        {
          icon: ShieldCheck,
          title: "Only offer real times and approved paths",
          body: "Scheduling logic has to respect actual listing status, access method, assigned-agent rules, open-house exceptions, and any brokerage-level guardrails. Fast automation is only useful if the options are real.",
        },
        {
          icon: ArrowUpRight,
          title: "Separate inquiry types early",
          body: "A new buyer lead asking to tour today, a seller consultation request, and a casual long-term browser should not all get routed through the same showing workflow. Better routing beats generic automation.",
        },
        {
          icon: Phone,
          title: "Escalate serious or sensitive cases quickly",
          body: "Questions about offer timing, dual agency, pricing strategy, property condition, or unusual access constraints should move to a human fast with context attached.",
        },
        {
          icon: BarChart3,
          title: "Track attendance and handoff quality, not just booked slots",
          body: "The real scorecard is not calendar volume. It is response speed, confirmed showings, attendance, agent handoff quality, and whether the scheduling layer is actually converting more intent into real conversations.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical showing coordination system usually works",
      subtitle:
        "The strongest version is fast, structured, and easy for a human to override.",
      blocks: [
        {
          heading: "The lead enters one controlled scheduling workflow",
          body: "Website forms, portal leads, missed calls, and text inquiries all flow into one response layer so the team is not juggling separate habits by channel.",
        },
        {
          heading: "The prospect gets a quick next step instead of a vague callback promise",
          body: "The workflow responds right away, confirms the inquiry, and moves the person toward an approved showing option, a callback, or one missing piece of information.",
        },
        {
          heading: "The system keeps confirmations and reminders moving automatically",
          body: "Showing details, reminders, and reschedule prompts happen without relying on whichever agent remembered to send them that day. That consistency is the operational win.",
        },
        {
          heading: "The assigned agent only steps in when the conversation becomes high-value",
          body: "Once the prospect is serious or the request stops being routine, the right agent gets the property, preferred timing, and message history attached so the live handoff feels informed instead of chaotic.",
        },
        {
          heading: "Team leaders can see where the workflow is leaking",
          body: "Instead of guessing why a lead did not turn into a showing, the team can see whether the problem was slow first response, weak scheduling availability, poor reminder discipline, or no-show fallout.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no published real-estate-specific showing case study yet. The honest proof frame is the already-live real-estate cluster plus adjacent scheduling and response automation proof.",
      studies: [
        {
          industry: "Real-estate parent page",
          headline: "The broader real-estate guide already establishes showing coordination as a core workflow",
          body: "The parent page covers lead follow-up, qualification, CRM automation, and showing scheduling. This child page narrows that broader theme to the inquiry-to-showing coordination layer where calendar rules, reminders, and handoff discipline matter most.",
          link: "/ai-automation-for-real-estate",
        },
        {
          industry: "Real-estate workflow sibling",
          headline: "The lead-response page already proves there is a distinct real-estate child-page cluster around speed, routing, and human handoff",
          body: "The lead-response page focuses on first response and early nurture. This page picks up at the next stage: turning showing intent into a booked, attended appointment with less phone tag and cleaner agent timing.",
          link: "/real-estate-lead-response-and-follow-up-automation",
        },
        {
          industry: "Adjacent booking and reminder proof",
          headline: "Published voice and CRM automation work shows the same fast-response and appointment-discipline this workflow depends on",
          body: "The Paris Cafe case study proves immediate inquiry handling and routed next steps. The broader appointment-setter and reminder pages prove the same scheduling mechanics this real-estate workflow uses: respond fast, offer the next action, confirm it, and escalate the exceptions to a human.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for real estate", href: "/ai-automation-for-real-estate" },
        { label: "Real estate lead response and follow-up automation", href: "/real-estate-lead-response-and-follow-up-automation" },
        { label: "What to automate first for real estate teams", href: "/what-to-automate-first-for-real-estate" },
        { label: "CRM cleanup and routing for real estate teams", href: "/crm-cleanup-and-routing-for-real-estate-teams" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the real-estate lead-response page?",
      answer:
        "The lead-response page is about first reply speed and early nurture. This page is narrower. It focuses on what happens once a lead wants to see a property or book the next step: scheduling, reminders, no-show handling, and agent handoff.",
    },
    {
      question: "Can this work with Follow Up Boss, kvCORE, Sierra Interactive, BoomTown, or other real-estate systems?",
      answer:
        "Usually yes, as long as there is a reliable inquiry trigger, a way to access calendar or assignment rules, and a messaging layer the workflow can connect to. The exact setup depends on your stack, but this kind of showing workflow is practical with most mainstream real-estate systems.",
    },
    {
      question: "What does a focused real-estate showing coordination build usually cost?",
      answer:
        "A focused showing-coordination workflow usually lands around $2K-$4K depending on lead sources, assignment rules, calendar complexity, reminder logic, and whether CRM or voice handling is included. Broader real-estate automation pushes the scope higher.",
    },
    {
      question: "Can automation route leads to specific agents or listing owners?",
      answer:
        "Yes, if the assignment rules are clear. The system can route by listing, geography, team rotation, availability, or source. The important part is defining those rules before automation goes live instead of letting edge cases pile up later.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is operational: faster scheduling, fewer lost showing-intent leads, fewer no-shows caused by weak reminders, and less agent time spent doing routine coordination. The second win is better visibility into which leads actually turn into attended showings and real conversations.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating real-estate showing coordination",
  ctaHeading: "Want more showing-intent leads to turn into actual appointments?",
  ctaText:
    "Book a 30-minute call. We will look at how your team handles inquiry-to-showing coordination today, where prospects are getting stuck, and whether a focused showing workflow is the highest-leverage automation to build before anything broader.",
  ctaSubtext:
    "No fake close-rate promises. Just a practical recommendation based on your lead flow, calendars, and current handoff process.",
  relatedLinks: [
    { label: "AI automation for real estate", href: "/ai-automation-for-real-estate" },
    { label: "Real estate lead response and follow-up automation", href: "/real-estate-lead-response-and-follow-up-automation" },
    { label: "What to automate first for real estate teams", href: "/what-to-automate-first-for-real-estate" },
    { label: "CRM cleanup and routing for real estate teams", href: "/crm-cleanup-and-routing-for-real-estate-teams" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
