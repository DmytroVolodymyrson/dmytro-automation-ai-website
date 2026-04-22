import {
  DollarSign,
  CalendarCheck,
  Phone,
  Bot,
  Workflow,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Calculator,
  Users,
  ArrowUpRight,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-appointment-setter-cost-small-business",
  metaTitle:
    "AI Appointment Setter Cost for Small Business — Real Pricing Guide | Dmytro AI",
  metaDescription:
    "What does an AI appointment setter cost for a small business? Practical pricing ranges for chat, voice, calendar booking, CRM handoff, and when the extra complexity is actually worth paying for.",
  badgeText: "Appointment Setter Pricing",
  badgeIcon: DollarSign,
  h1: "AI Appointment Setter Cost for Small Business",
  heroIntro:
    "If you are pricing AI appointment setters, the useful question is not 'what is the cheapest monthly tool?' It is 'what kind of booking workflow am I actually trying to automate?' A small business that only needs fast web-lead scheduling should not buy the same stack as a business that needs voice intake, qualification, calendar rules, reminders, CRM routing, and human fallback for edge cases. This page breaks down realistic appointment-setter pricing specifically — not broad AI automation budgets, and not generic software listicles — so you can budget the narrowest build that actually protects revenue.",
  heroSubtext:
    "Below: what different appointment-setter builds usually cost, what pushes the price up, when a simpler setup is enough, and how to sanity-check the ROI before you overbuy.",
  sections: [
    {
      type: "table",
      title: "What appointment-setter automation usually costs",
      subtitle:
        "These are realistic small-business ranges for the most common appointment-setting builds:",
      headers: ["Build Cost", "Monthly Running Cost", "Typical Timeline"],
      rows: [
        {
          label: "Basic web-form or SMS booking workflow",
          values: ["$1.2K–$2.2K", "$20–$80", "4–7 days"],
        },
        {
          label: "Calendar-linked appointment setter with reminders",
          values: ["$1.8K–$3.2K", "$30–$120", "1–2 weeks"],
        },
        {
          label: "Appointment setter with qualification and CRM handoff",
          values: ["$2.5K–$4.5K", "$50–$150", "1–3 weeks"],
        },
        {
          label: "Voice-based appointment setter for inbound calls",
          values: ["$3K–$5.5K", "$75–$250", "2–3 weeks"],
        },
        {
          label: "After-hours booking plus missed-call recovery stack",
          values: ["$2.5K–$4.8K", "$40–$160", "1–2 weeks"],
        },
        {
          label: "Higher-complexity multi-location or dispatch-aware booking",
          values: ["$4.5K–$7K+", "$100–$300+", "2–4 weeks"],
        },
      ],
    },
    {
      type: "cards",
      title: "What makes the price go up",
      subtitle:
        "Appointment-setter pricing is mostly about workflow complexity, not the AI label itself:",
      items: [
        {
          icon: Phone,
          title: "Whether it handles voice, not just forms or text",
          body: "A simple scheduling workflow for web leads is cheaper than a voice system that has to answer calls in real time, steer the conversation, and recover gracefully when the caller goes off script.",
        },
        {
          icon: CalendarCheck,
          title: "How strict the calendar and booking rules are",
          body: "The more the system has to manage service areas, buffers, appointment types, working hours, reschedules, and fallback rules, the more setup and testing it needs before you can trust it live.",
        },
        {
          icon: Workflow,
          title: "Whether it only books or also routes and follows up",
          body: "The cheap version is 'offer a slot and confirm it.' The more valuable version also creates or updates the contact, logs the interaction, triggers reminders, notifies the owner, and hands off correctly when a human needs to step in.",
        },
        {
          icon: Bot,
          title: "How much qualification logic is included",
          body: "If the AI needs to screen out bad-fit inquiries, decide who gets booked, and route everything else to the right next step, the project gets more valuable and more expensive because the logic matters more than the script.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this is worth paying for — and when it is not",
      subtitle:
        "This page is for businesses with a real booking-speed problem, not businesses shopping for AI because it sounds impressive:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth the investment",
          variant: "green",
          items: [
            "Leads or callers regularly wait too long for a booking response",
            "One extra booked consult, estimate, or job per week would matter financially",
            "Your booking rules are clear enough that routine inquiries can be automated safely",
            "You want after-hours coverage without adding full-time front-desk cost",
            "You need the system to work inside your CRM and reminder flow, not as a disconnected demo",
          ],
        },
        {
          icon: XCircle,
          heading: "Probably overkill for now",
          variant: "neutral",
          items: [
            "Lead volume is low enough that same-day manual booking is still easy",
            "Every inquiry needs a long consultative sales conversation before any next step",
            "Your team has not agreed on service areas, qualification rules, or escalation paths",
            "You are mostly trying to replace process clarity with software",
            "You are comparing a custom production workflow to a bare SaaS subscription and expecting them to cost the same",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to budget this without wasting money",
      subtitle:
        "The safest buying move is to pay for the smallest workflow that protects revenue first:",
      items: [
        {
          icon: Calculator,
          title: "Start with one booking path, not every edge case",
          body: "If your main leak is slow response to straightforward inquiries, automate that first. You do not need a universal AI receptionist on day one if one clear booking workflow would fix most of the problem.",
        },
        {
          icon: AlertTriangle,
          title: "Do not ignore monthly stack costs",
          body: "Calendar tools, CRM seats, SMS or calling usage, hosting, and optional AI usage all add to the monthly number. Those costs are usually manageable, but they should be budgeted up front instead of treated like a surprise after launch.",
        },
        {
          icon: Clock,
          title: "Leave room for post-launch tuning",
          body: "Good appointment setters almost always need a short tuning window after launch. Time slots, qualification thresholds, reminder timing, and human-handoff rules get sharper once the workflow starts touching real callers and live leads.",
        },
        {
          icon: ArrowUpRight,
          title: "Compare the price to one recovered booking path per month",
          body: "That is the most useful sanity check. If one extra booked consult, estimate, or service job per month would cover a meaningful chunk of the build and running cost, the economics are usually defensible.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "This page uses direct and adjacent proof already published on the site. The exact workflow varies, but the economics are the same: faster answer, cleaner qualification, and reliable handoff create the value.",
      studies: [
        {
          industry: "Restaurant / inbound calls",
          headline: "Paris Café proves the value of answering and routing after hours",
          body: "The Paris Café case study shows why owners pay for this kind of workflow at all: inbound calls stop dying in voicemail, the response happens immediately, and routine booking-style interactions get handled while staff are busy or offline.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Lead qualification / workflow design",
          headline: "The lead-qualification guide maps the logic that pricing depends on",
          body: "The AI voice-agent lead-qualification page already breaks down the costly part of the work: deciding what to ask, what counts as qualified, what should be booked, and when a manual callback still wins. That decision logic is what separates a cheap tool from a real appointment-setter system.",
          link: "/ai-voice-agent-lead-qualification",
        },
        {
          industry: "Implementation / setup",
          headline: "The setup-help page shows where small businesses overspend",
          body: "The appointment-setter setup guide is adjacent proof for the buying decision on this page. Many businesses do not need a giant custom build. They need one narrow booking workflow with clear calendar rules, CRM handoff, and testing — and that scope discipline is what keeps costs reasonable.",
          link: "/ai-appointment-setter-setup",
        },
      ],
      links: [
        { label: "AI appointment setter", href: "/ai-appointment-setter" },
        { label: "AI appointment setter setup help", href: "/ai-appointment-setter-setup" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "AI appointment setter for home service businesses", href: "/ai-appointment-setter-for-home-service-businesses" },
      ],
    },
    {
      type: "prose",
      title: "What small businesses usually get wrong about appointment-setter pricing",
      subtitle:
        "These assumptions create bad buying decisions and disappointing rollouts:",
      blocks: [
        {
          heading: "Confusing software price with finished workflow price",
          body: "A low monthly subscription is not the same thing as a production-ready appointment setter. The real value comes from designing qualification logic, connecting calendars and CRM, deciding human-handoff rules, and testing the flow so bad bookings do not create cleanup work for your team.",
        },
        {
          heading: "Paying for a full AI receptionist when one booking path would do",
          body: "Many owners overbuy because proposals bundle every use case at once. If your main problem is after-hours booking or fast first response on routine inquiries, start there. Prove the ROI before adding more complexity.",
        },
        {
          heading: "Ignoring the cost of slow response because it feels invisible",
          body: "Manual booking delays often look free because no invoice shows up for them. They are not free. Missed calls, slow callbacks, and dropped estimate requests already have a cost. The question is whether the appointment-setter build costs less than the leak it fixes.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does an AI appointment setter cost for a small business?",
      answer:
        "For most small businesses, a focused appointment-setter workflow usually lands somewhere between $1.8K and $4.5K depending on voice, qualification logic, calendar rules, and CRM integration. Monthly running costs often sit in the $30-$150 range before heavier calling volume or more advanced AI usage.",
    },
    {
      question: "Why is this different from the general AI appointment setter page?",
      answer:
        "The general appointment-setter page explains what the workflow is and when it fits. This page stays narrow on the budgeting decision: realistic pricing ranges, what pushes the cost up, and how to avoid paying for complexity you do not need yet.",
    },
    {
      question: "What usually makes appointment-setter automation expensive?",
      answer:
        "Voice handling, complex qualification rules, multiple appointment types, CRM handoff, service-area logic, reminders, missed-call recovery, and unclear human ownership rules. The more systems and edge cases the workflow has to manage, the more setup and testing it needs.",
    },
    {
      question: "Can I start with a smaller appointment-setter workflow and expand later?",
      answer:
        "Yes. That is usually the smartest move. Start with one booking path or one after-hours response problem, prove that it recovers real appointments, then expand into richer qualification, reminders, routing, or additional channels once the first phase is working.",
    },
    {
      question: "How do I know if the price is worth it?",
      answer:
        "Look at how many good inquiries currently wait too long for a response, die after hours, or never get booked cleanly. Then compare the project cost to one recovered job, estimate, or consultation per month. If a modest lift in booked opportunities covers a meaningful share of the spend, the economics are usually credible.",
    },
  ],
  faqSubtitle:
    "Practical answers for small businesses budgeting appointment-setting automation",
  ctaHeading: "Want a realistic quote for an appointment-setter workflow?",
  ctaText:
    "Book a 30-minute call. We will look at your lead flow, booking rules, calendar constraints, and where the real bottleneck is, then give you a fixed-price range for the narrowest appointment-setting build worth doing first.",
  ctaSubtext:
    "No giant AI proposal. Just a practical scope and cost conversation.",
  relatedLinks: [
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "AI appointment setter setup help", href: "/ai-appointment-setter-setup" },
    { label: "AI appointment setter for home service businesses", href: "/ai-appointment-setter-for-home-service-businesses" },
    { label: "AI appointment setter vs. receptionist", href: "/ai-appointment-setter-vs-receptionist" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
