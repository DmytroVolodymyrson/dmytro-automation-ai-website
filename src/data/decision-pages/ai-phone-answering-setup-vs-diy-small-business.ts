import {
  AlertTriangle,
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
  slug: "ai-phone-answering-setup-vs-diy-small-business",
  metaTitle:
    "AI Phone Answering Setup vs. DIY for Small Business — When to Hire Help | Dmytro AI",
  metaDescription:
    "Should you set up AI phone answering yourself or hire expert help? Practical small-business guide covering call coverage, transfer logic, booking rules, CRM handoff, and when setup help is cheaper than DIY delay.",
  badgeText: "Phone Answering Buy-vs-Build",
  badgeIcon: Scale,
  h1: "AI Phone Answering Setup: Hire Help or DIY?",
  heroIntro:
    "If your phone workflow is simple — one line, one greeting, one next step — DIY can work fine. If the setup touches after-hours coverage, transfer logic, booking rules, caller routing, or CRM handoff, hiring help is usually the cheaper move once you count owner time, rework, and the calls that keep dropping while the system is half-configured. The real question is not whether you can build it yourself. It is whether this phone workflow matters enough that you want it answering real calls reliably without spending nights debugging greetings, transfer conditions, booking windows, voicemail fallback, and edge cases.",
  heroSubtext:
    "Below: when DIY phone-answering setup is still a smart move, when expert help pays for itself, what each path really costs, and how to tell whether you need a tutorial, a bounded implementation engagement, or a simpler missed-call workflow first.",
  sections: [
    {
      type: "cards",
      title: "What this decision is really about",
      subtitle:
        "Most owners are not choosing between free and expensive. They are choosing which kind of cost and risk they want to absorb:",
      items: [
        {
          icon: DollarSign,
          title: "DIY usually lowers the invoice, not the total cost",
          body: "Building the phone-answering workflow yourself can reduce cash spend, but it pushes the cost into owner or staff time: mapping the call flow, writing greeting and qualification logic, setting up transfers, testing after-hours behavior, reviewing missed-call logs, and cleaning up the CRM when the system routes incorrectly.",
        },
        {
          icon: Workflow,
          title: "Phone-answering setup is call-flow design, not just turning on a bot",
          body: "The hard part is not activating the AI. The hard part is deciding which calls should transfer live, which should book, how after-hours coverage works, what the fallback path should be when the caller goes off-script, and what should never stay with AI once the conversation gets complicated.",
        },
        {
          icon: Wrench,
          title: "Hiring help makes sense when missed calls are already costing you",
          body: "If calls are going to voicemail, after-hours coverage is nonexistent, or booking and transfer logic is unreliable, setup help is often worth paying for because it fixes a live revenue leak instead of becoming another side project that never quite gets production-ready.",
        },
      ],
    },
    {
      type: "table",
      title: "DIY phone-answering setup vs. hiring expert help",
      subtitle:
        "This is the practical trade-off for a small business that already thinks AI phone answering could help:",
      headers: ["DIY setup", "Hire setup help"],
      rows: [
        {
          label: "Best for",
          values: [
            "Simple after-hours greeting, one call path, low call volume, owner-led learning, or a low-stakes prototype",
            "Revenue-critical call coverage, transfer logic, booking windows, after-hours routing, CRM handoff, or messy multi-line phone setup",
          ],
        },
        {
          label: "Typical cash cost",
          values: [
            "Lower upfront spend, plus your own time and platform cost",
            "Often $1.5K–$5K for one bounded phone-answering workflow depending on transfer paths, booking logic, and testing depth",
          ],
        },
        {
          label: "Time to trustworthy coverage",
          values: [
            "Several evenings to several weeks depending on call routing complexity and edge cases",
            "Often 5–12 business days for a focused workflow with testing and clean handoff",
          ],
        },
        {
          label: "Biggest risk",
          values: [
            "A system that sounds polished but routes callers wrong, misses transfer conditions, or drops after-hours calls into dead air",
            "Paying for complexity your phone workflow does not need yet",
          ],
        },
        {
          label: "What success should look like",
          values: [
            "A phone workflow you understand because you built it and are willing to maintain",
            "A production-ready answering system the team trusts to cover calls, transfer correctly, book reliably, and log cleanly",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When DIY is a strong fit — and when hiring help is smarter",
      subtitle:
        "DIY can be completely reasonable for the right scope. It gets expensive when the phone workflow matters more than the learning experience:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "DIY can be a good fit",
          variant: "green",
          items: [
            "You are setting up one simple call path with a clear greeting and one obvious next step",
            "Call volume is low enough that a temporary mistake will not cost meaningful revenue",
            "You genuinely want to learn the platform and can spend time testing call flows",
            "The AI only needs to collect basic details and offer to book or take a message",
            "You are comfortable owning call routing, voicemail fallback, and greeting updates after launch",
          ],
        },
        {
          icon: XCircle,
          heading: "Hiring help is usually smarter",
          variant: "neutral",
          items: [
            "Calls are already going to voicemail or getting dropped because no one can answer consistently",
            "The workflow touches live transfers, booking rules, after-hours coverage, or multi-location routing",
            "The AI needs to log calls to the CRM and trigger the right follow-up for each call type",
            "No one on the team wants to own call-flow debugging, transfer testing, and ongoing phone-system maintenance",
            "A few recovered calls or bookings per month would justify paying to get it right now",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where small-business DIY phone-answering projects usually break down",
      subtitle:
        "The issue is rarely the first greeting. The issue is everything that happens once real callers, real transfers, and real after-hours coverage show up:",
      blocks: [
        {
          heading: "The greeting sounds fine, but the call routing is wrong",
          body: "A lot of DIY builds spend too much time on the welcome message and not enough on what happens next. The system may sound professional while still routing new leads to voicemail, transferring to the wrong person, or trying to book when it should escalate.",
        },
        {
          heading: "Transfer rules and after-hours fallback stay fuzzy",
          body: "A real phone-answering workflow needs clear rules for when to transfer live, when to take a message, when to book, and what happens after hours. If those boundaries are vague, your staff ends up rescuing confused callers manually after the AI has already weakened their confidence.",
        },
        {
          heading: "Booking logic and CRM logging stay disconnected",
          body: "A call that never lands in the CRM properly is not a real win. DIY gets expensive when the AI answers the phone but appointment details, caller notes, tags, or follow-up steps never connect cleanly to the rest of the system.",
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
          body: "If your time is worth $100–$200 an hour and the setup will realistically take 10–25 hours to scope, build, test, and clean up, DIY is not automatically cheap. It may still be worth it for learning, but not because it is free.",
        },
        {
          icon: Phone,
          title: "Start with one phone workflow, not every call scenario",
          body: "The safest rollout is one bounded use case: one call type, one greeting path, one transfer rule, one booking option. If you are trying to automate every inbound call, support question, reschedule, and complaint at once, the scope is already too wide for a clean DIY first pass.",
        },
        {
          icon: AlertTriangle,
          title: "Separate prototype value from production value",
          body: "DIY is great for proving that AI phone answering could help. Hiring help is usually better once you know the workflow should exist and now need it answering real calls reliably with proper transfers, booking, and CRM ownership.",
        },
        {
          icon: ShieldCheck,
          title: "Keep ownership either way",
          body: "Whether you build it yourself or hire it out, your business should own the phone numbers, platform accounts, CRM access, documentation, and call-flow logic. Good setup help reduces risk. It should not trap the phone workflow inside somebody else's stack.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is grounded in the live phone-answering cluster plus published adjacent proof around call coverage, booking, and downstream CRM automation:",
      studies: [
        {
          industry: "Phone-answering implementation",
          headline: "The existing setup page explains what expert phone-answering setup should include",
          body: "That page covers implementation scope: call-flow design, greeting logic, transfer rules, booking configuration, CRM handoff, and testing. This page answers the narrower buyer decision that comes one step earlier: keep DIYing, or pay for setup help now?",
          link: "/ai-phone-answering-setup-small-business",
        },
        {
          industry: "Inbound call handling",
          headline: "Paris Cafe proves what immediate phone coverage is worth when staff cannot answer",
          body: "The Paris Cafe voice-agent case study is direct adjacent proof that live AI phone coverage can answer real after-hours calls, handle the first interaction, and protect demand instead of letting it fall into voicemail or next-day callbacks.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Cost and ROI context",
          headline: "The cost and ROI pages show realistic budget ranges and payback math",
          body: "The AI phone answering cost page covers what to budget for setup and monthly usage. The ROI page provides conservative payback math. Together they frame what each path costs so the DIY-vs-hire decision lands on real numbers, not guesses.",
          link: "/ai-phone-answering-cost-small-business",
        },
      ],
      links: [
        { label: "AI phone answering setup", href: "/ai-phone-answering-setup-small-business" },
        { label: "AI phone answering cost", href: "/ai-phone-answering-cost-small-business" },
        { label: "AI phone answering ROI", href: "/ai-phone-answering-roi-small-business" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "When is DIY AI phone answering setup actually the right move?",
      answer:
        "Usually when the phone workflow is simple, the call volume is low, and you genuinely want to learn the platform. DIY is strongest when you mainly need one greeting path, one obvious next step, and enough internal bandwidth that a temporary routing mistake will not cost meaningful revenue or damage caller trust.",
    },
    {
      question: "When should I hire someone to set up AI phone answering instead of doing it myself?",
      answer:
        "Hire help when the phone workflow already affects real call coverage, after-hours answering, transfer accuracy, booking rules, or CRM handoff. At that point the cost of delay, bad routing, and ongoing cleanup usually outweighs the setup invoice.",
    },
    {
      question: "How is this different from the existing AI phone answering setup page?",
      answer:
        "The setup page explains what good implementation should include: call-flow design, transfer logic, booking configuration, CRM handoff, and testing. This page sits one step earlier in the buying journey and answers the decision itself: keep DIYing, or pay for setup help now?",
    },
    {
      question: "How much does it usually cost to hire help for AI phone answering setup?",
      answer:
        "A focused small-business phone-answering setup often lands around $1.5K–$3K. More complex builds with multiple transfer paths, booking rules, after-hours logic, CRM integration, or multi-location routing often land around $3K–$5K. The real driver is call-flow depth and edge-case complexity, not the phone-answering label by itself.",
    },
    {
      question: "Can I prototype the phone workflow myself and then hire someone later?",
      answer:
        "Yes. That is often the smartest path. DIY can prove the phone workflow is worth building. Then setup help can harden the call routing, clean up the edge cases, connect the booking and CRM properly, and leave you with something safer to run in production.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners deciding whether to keep building their phone-answering workflow alone or bring in expert setup help",
  ctaHeading: "Want a clear answer on whether this phone workflow is worth DIYing?",
  ctaText:
    "Book a 30-minute call. We will look at your call flow, transfer logic, booking rules, after-hours coverage, and CRM handoff so you can decide whether the smartest next step is DIY, a bounded setup engagement, or a simpler missed-call workflow first.",
  ctaSubtext:
    "Useful if you already think AI phone answering could help and the real question is whether to keep pushing through setup alone.",
  relatedLinks: [
    { label: "AI phone answering setup", href: "/ai-phone-answering-setup-small-business" },
    { label: "AI phone answering launch checklist", href: "/ai-phone-answering-launch-checklist-small-business" },
    { label: "AI phone answering cost", href: "/ai-phone-answering-cost-small-business" },
    { label: "AI phone answering ROI", href: "/ai-phone-answering-roi-small-business" },
    { label: "AI voice agent setup vs. DIY", href: "/ai-voice-agent-setup-vs-diy-small-business" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
