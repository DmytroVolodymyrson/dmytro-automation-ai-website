import {
  AlertTriangle,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Clock,
  DollarSign,
  Phone,
  Scale,
  ShieldCheck,
  Wrench,
  Workflow,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-appointment-setter-setup-vs-diy-small-business",
  metaTitle:
    "AI Appointment Setter Setup vs. DIY for Small Business — When to Hire Help | Dmytro AI",
  metaDescription:
    "Should you set up an AI appointment setter yourself or hire expert help? Practical small-business guide to owner time, workflow risk, call-flow complexity, CRM handoff, and when setup help is cheaper than DIY delay.",
  badgeText: "Setup Buy-vs-Build",
  badgeIcon: Scale,
  h1: "AI Appointment Setter Setup: Hire Help or DIY?",
  heroIntro:
    "If your appointment-setting workflow is simple, your call volume is low, and you mainly want to learn the tools, DIY can make sense. If the setup touches real inbound calls, qualification rules, booking windows, no-show handling, CRM ownership, or after-hours response, hiring help is usually the cheaper move once you count owner time, rework, and leads that keep leaking while the system is half-configured. The real decision is not whether DIY is possible. It is whether this specific appointment-setting workflow matters enough that you want it live, trusted, and revenue-safe without spending nights debugging prompts, calendars, handoff rules, and edge cases.",
  heroSubtext:
    "Below: when DIY appointment-setter setup is still a smart move, when expert help pays for itself, what each path really costs, and how to tell whether you need a tutorial, a bounded setup engagement, or no build yet.",
  sections: [
    {
      type: "cards",
      title: "What this decision is really about",
      subtitle:
        "Most owners are not choosing between free and expensive. They are choosing which kind of cost and risk they want to carry:",
      items: [
        {
          icon: DollarSign,
          title: "DIY usually lowers the invoice, not the total cost",
          body: "Doing the setup yourself can reduce cash spend, but it pushes the cost into owner or staff time: mapping call flows, writing qualification logic, testing booking rules, fixing bad edge cases, and cleaning up the CRM when the AI logs the wrong thing.",
        },
        {
          icon: Workflow,
          title: "Appointment-setter setup is workflow design, not just prompt writing",
          body: "The hard part is not turning on a bot. The hard part is deciding what should count as qualified, when the AI should book versus escalate, how reminders fire, and what happens when a caller asks for something outside the happy path.",
        },
        {
          icon: Wrench,
          title: "Hiring help makes sense when delay is already costing you bookings",
          body: "If missed calls, slow callbacks, weak handoff, or inconsistent booking rules are already hurting response speed, setup help is often worth paying for because it fixes a revenue leak instead of becoming another side project that never quite gets finished.",
        },
      ],
    },
    {
      type: "table",
      title: "DIY appointment-setter setup vs. hiring expert help",
      subtitle:
        "This is the practical trade-off for a small business that already believes appointment-setting automation might help:",
      headers: ["DIY setup", "Hire setup help"],
      rows: [
        {
          label: "Best for",
          values: [
            "Simple booking flow, low stakes, owner-led learning, or a prototype before rolling wider",
            "Revenue-critical first response, live call handling, qualification logic, calendar rules, CRM handoff, or messy cleanup",
          ],
        },
        {
          label: "Typical cash cost",
          values: [
            "Lower upfront spend, plus your own time and software cost",
            "Often $1.5K-$5K for one bounded workflow depending on integrations and testing depth",
          ],
        },
        {
          label: "Time to a trustworthy launch",
          values: [
            "Several evenings to several weeks depending on call-flow complexity and edge cases",
            "Often 5-15 business days for a focused workflow with testing and handoff",
          ],
        },
        {
          label: "Biggest risk",
          values: [
            "A bot that sounds decent in demos but books the wrong things, routes poorly, or creates CRM cleanup",
            "Paying for complexity your business does not need yet",
          ],
        },
        {
          label: "What success should look like",
          values: [
            "A workflow you understand because you built it and are willing to maintain",
            "A production-ready appointment-setting flow the team actually trusts to answer, qualify, book, and escalate correctly",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When DIY is a strong fit — and when hiring help is smarter",
      subtitle:
        "DIY can be completely reasonable for the right scope. It becomes expensive when the workflow matters more than the learning experience:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "DIY can be a good fit",
          variant: "green",
          items: [
            "You are setting up one narrow booking workflow with clear success criteria",
            "The call or form volume is low enough that a temporary mistake will not cost meaningful revenue",
            "You genuinely want to learn the stack and can spend the time on testing and cleanup",
            "The AI only needs to collect basic details and offer one obvious next step",
            "You are comfortable owning the calendar, CRM mapping, and prompt changes after launch",
          ],
        },
        {
          icon: XCircle,
          heading: "Hiring help is usually smarter",
          variant: "neutral",
          items: [
            "Leads already go cold because first response or booking follow-through is messy",
            "The workflow touches live calls, qualification logic, reschedules, reminders, or after-hours routing",
            "The AI needs to log cleanly to the CRM and trigger the right downstream follow-up",
            "No one on the team wants to own debugging, call review, and ongoing workflow cleanup",
            "A few recovered appointments or estimates per month would justify paying to get this right now",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where small-business DIY appointment-setter projects usually start breaking down",
      subtitle:
        "The issue is rarely the demo. The issue is everything that happens once real callers, real calendars, and real staff handoff show up:",
      blocks: [
        {
          heading: "The AI sounds fine, but the booking logic is wrong",
          body: "A lot of DIY builds spend too much time on the greeting and not enough on the decision tree. The system may sound polished while still offering the wrong appointment type, ignoring a service-area rule, or booking something that should have been escalated to a human. That is where owner trust disappears fast.",
        },
        {
          heading: "Calendar rules and CRM updates drift out of sync",
          body: "A booking is only valuable if it lands in the right place with the right status, reminders, and ownership. DIY starts getting expensive when the AI books a slot correctly but the CRM does not update, reminders misfire, or the team still has to clean everything up by hand afterward.",
        },
        {
          heading: "Human handoff stays fuzzy",
          body: "Appointment setters should not pretend to solve every edge case. Callers ask off-script questions, want exceptions, need reschedules, or qualify for a higher-touch next step. If the handoff is vague, your team ends up manually rescuing the workflow in inboxes and callbacks instead of trusting the system.",
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
          title: "Put a real value on owner time",
          body: "If your time is worth $100-$200 an hour and the setup will realistically take 15-30 hours to scope, build, test, and clean up, DIY is not automatically cheap. It may still be worth it for learning, but not because it is free.",
        },
        {
          icon: Phone,
          title: "Start with one booking workflow, not every caller journey",
          body: "The safest rollout is one bounded use case: one lead type, one booking path, one escalation path, one calendar destination. If you are trying to automate every inbound call, message, reminder, and objection at once, the scope is probably already too wide for a clean DIY first pass.",
        },
        {
          icon: AlertTriangle,
          title: "Separate prototype value from production value",
          body: "DIY is great for proving that appointment-setting automation could help. Hiring help is usually better once you know the workflow should exist and now need it to run reliably with real callers, real booking windows, and real staff handoff.",
        },
        {
          icon: ShieldCheck,
          title: "Keep ownership either way",
          body: "Whether you build it yourself or hire it out, your business should own the phone numbers, calendars, CRM access, workflow documentation, and prompt logic. Good setup help reduces risk. It should not trap the workflow inside somebody else's account.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is grounded in the live appointment-setter and voice-routing cluster plus published adjacent proof around call handling, qualification, and CRM follow-up:",
      studies: [
        {
          industry: "Appointment-setter implementation",
          headline: "The existing setup page explains what expert help should actually include",
          body: "That page stays on implementation scope: qualification logic, calendar rules, CRM handoff, testing, and where setup help is worth paying for. This page answers the narrower buyer decision that comes one step earlier: keep DIYing, or hire setup help now?",
          link: "/ai-appointment-setter-setup",
        },
        {
          industry: "Inbound call handling",
          headline: "Paris Cafe proves what immediate phone coverage is worth when staff cannot answer",
          body: "The Paris Cafe voice-agent case study is direct adjacent proof that leads and guest inquiries can be answered immediately instead of leaking into voicemail or next-day callbacks. That is the front-end commercial logic behind paying for setup help when missed response speed already hurts bookings.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Qualification and downstream handoff",
          headline: "The lead-qualification and CRM pages show why the middle and back half matter",
          body: "The AI voice-agent lead-qualification guide plus the WheelsFeels CRM case study reinforce the same point: a working appointment setter is not just about answering first. It has to qualify cleanly, log correctly, and hand off reliably so the team does not inherit a new cleanup problem.",
          link: "/ai-voice-agent-lead-qualification",
        },
      ],
      links: [
        { label: "AI appointment setter setup help", href: "/ai-appointment-setter-setup" },
        { label: "AI appointment setter cost", href: "/ai-appointment-setter-cost-small-business" },
        { label: "AI appointment setter ROI", href: "/ai-appointment-setter-roi-small-business" },
        { label: "AI voice agent vs. manual callback", href: "/ai-voice-agent-vs-manual-callback-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "When is DIY AI appointment setter setup actually the right move?",
      answer:
        "Usually when the workflow is narrow, the stakes are low, and you genuinely want to learn the tools. DIY is strongest when you mainly need one clear booking path, low call volume, and enough internal discipline that a temporary mistake will not cost meaningful revenue or damage customer experience.",
    },
    {
      question: "When should I hire someone to set up an AI appointment setter instead of doing it myself?",
      answer:
        "Hire help when the workflow already affects real response speed, live calls, qualification, booking accuracy, reminders, or CRM handoff. At that point the cost of delay, bad routing, and ongoing cleanup usually outweighs the consultant invoice.",
    },
    {
      question: "How is this different from the existing AI appointment setter setup page?",
      answer:
        "The setup page explains what good implementation should include and when expert help is worth considering. This page sits one step earlier in the buying journey and answers the decision itself: keep DIYing, or pay for setup help now?",
    },
    {
      question: "How much does it usually cost to hire help for appointment-setter setup?",
      answer:
        "A focused small-business setup often lands around $1.5K-$3K. More complex builds with deeper qualification logic, multiple handoff paths, CRM integration, reminder workflows, or broader testing often land around $3K-$5K. The real driver is workflow depth and edge-case complexity, not the label alone.",
    },
    {
      question: "Can I prototype the workflow myself and then hire someone later?",
      answer:
        "Yes. That is often the smartest path. DIY can prove the workflow is worth building. Then setup help can harden the logic, clean up the edge cases, connect the full stack properly, and leave you with something safe to run in production.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners deciding whether to keep building their appointment-setting workflow alone or bring in expert setup help",
  ctaHeading: "Want a clear answer on whether this appointment setter is worth DIYing?",
  ctaText:
    "Book a 30-minute call. We will look at your lead flow, booking rules, qualification logic, CRM handoff, and the real cost of delay so you can decide whether the smartest next step is DIY, a bounded setup engagement, or a smaller workflow first.",
  ctaSubtext:
    "Useful if you already think appointment-setting automation could help and the real question is whether to keep pushing through setup alone.",
  relatedLinks: [
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "AI appointment setter setup help", href: "/ai-appointment-setter-setup" },
    { label: "AI appointment setter cost", href: "/ai-appointment-setter-cost-small-business" },
    { label: "AI appointment setter ROI", href: "/ai-appointment-setter-roi-small-business" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
