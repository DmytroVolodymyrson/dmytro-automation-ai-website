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
  slug: "ai-voice-agent-setup-vs-diy-small-business",
  metaTitle:
    "AI Voice Agent Setup vs. DIY for Small Business — When to Hire Help | Dmytro AI",
  metaDescription:
    "Should you set up an AI voice agent yourself or hire expert help? Practical small-business guide to owner time, workflow risk, live-call complexity, CRM handoff, and when setup help is cheaper than DIY delay.",
  badgeText: "Voice Setup Buy-vs-Build",
  badgeIcon: Scale,
  h1: "AI Voice Agent Setup: Hire Help or DIY?",
  heroIntro:
    "If your voice workflow is narrow, the call stakes are low, and you mainly want to learn the tools, DIY can make sense. If the setup touches real inbound calls, qualification rules, transfer logic, booking windows, CRM ownership, or after-hours coverage, hiring help is usually the cheaper move once you count owner time, rework, and leads that keep leaking while the system is half-configured. The real decision is not whether DIY is possible. It is whether this specific voice workflow matters enough that you want it live, trusted, and revenue-safe without spending nights debugging prompts, telephony, transfer rules, call summaries, and edge cases.",
  heroSubtext:
    "Below: when DIY voice-agent setup is still a smart move, when expert help pays for itself, what each path really costs, and how to tell whether you need a tutorial, a bounded implementation engagement, or a smaller phone workflow first.",
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
          body: "Doing the setup yourself can reduce cash spend, but it pushes the cost into owner or staff time: mapping the call flow, writing qualification logic, testing transfers, tuning prompts, reviewing call failures, and cleaning up the CRM when the AI logs the wrong thing.",
        },
        {
          icon: Workflow,
          title: "Voice-agent setup is workflow design, not just prompt writing",
          body: "The hard part is not turning on a voice bot. The hard part is deciding what should count as qualified, when the AI should transfer versus book, how fallback should work, and what should never stay with AI once the caller goes off the happy path.",
        },
        {
          icon: Wrench,
          title: "Hiring help makes sense when delay is already costing you calls",
          body: "If missed calls, weak callbacks, fuzzy handoff, or after-hours gaps are already hurting response speed, setup help is often worth paying for because it fixes a live revenue leak instead of becoming another side project that never quite gets hardened for production.",
        },
      ],
    },
    {
      type: "table",
      title: "DIY voice-agent setup vs. hiring expert help",
      subtitle:
        "This is the practical trade-off for a small business that already thinks a voice workflow could help:",
      headers: ["DIY setup", "Hire setup help"],
      rows: [
        {
          label: "Best for",
          values: [
            "Simple after-hours experiments, one narrow call path, owner-led learning, or a low-stakes prototype",
            "Revenue-critical first response, qualification logic, live transfer rules, CRM handoff, or messy call-routing cleanup",
          ],
        },
        {
          label: "Typical cash cost",
          values: [
            "Lower upfront spend, plus your own time and software cost",
            "Often $2K-$6K for one bounded workflow depending on integrations, booking logic, and testing depth",
          ],
        },
        {
          label: "Time to a trustworthy launch",
          values: [
            "Several evenings to several weeks depending on call complexity and edge cases",
            "Often 5-15 business days for a focused workflow with testing and clean handoff",
          ],
        },
        {
          label: "Biggest risk",
          values: [
            "A bot that sounds polished in demos but routes callers badly, misses transfer conditions, or creates CRM cleanup",
            "Paying for complexity your business does not need yet",
          ],
        },
        {
          label: "What success should look like",
          values: [
            "A workflow you understand because you built it and are willing to maintain",
            "A production-ready voice workflow the team actually trusts to answer, qualify, transfer, and log cleanly",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When DIY is a strong fit — and when hiring help is smarter",
      subtitle:
        "DIY can be completely reasonable for the right scope. It gets expensive when the workflow matters more than the learning experience:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "DIY can be a good fit",
          variant: "green",
          items: [
            "You are setting up one narrow call workflow with clear success criteria",
            "Call volume is low enough that a temporary mistake will not cost meaningful revenue",
            "You genuinely want to learn the stack and can spend time on call testing and cleanup",
            "The AI only needs to collect basic details, qualify lightly, and offer one obvious next step",
            "You are comfortable owning telephony, CRM mapping, and prompt changes after launch",
          ],
        },
        {
          icon: XCircle,
          heading: "Hiring help is usually smarter",
          variant: "neutral",
          items: [
            "Leads already go cold because first response, qualification, or call routing is messy",
            "The workflow touches live calls, transfer logic, booking rules, after-hours coverage, or compliance boundaries",
            "The AI needs to log cleanly to the CRM and trigger the right downstream follow-up",
            "No one on the team wants to own debugging, call review, and ongoing workflow cleanup",
            "A few recovered calls, bookings, or estimates per month would justify paying to get it right now",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where small-business DIY voice-agent projects usually start breaking down",
      subtitle:
        "The issue is rarely the first demo. The issue is everything that happens once real callers, real transfers, and real staff handoff show up:",
      blocks: [
        {
          heading: "The voice sounds fine, but the call decision tree is wrong",
          body: "A lot of DIY builds spend too much time on the greeting and not enough on the logic. The system may sound polished while still asking the wrong questions, missing a disqualifier, booking the wrong thing, or trying to keep talking when it should escalate to a human.",
        },
        {
          heading: "Transfer rules and fallback behavior stay fuzzy",
          body: "A real voice workflow needs rules for when to transfer live, when to create a callback, when to book, and when to stop. If those boundaries are vague, your team ends up rescuing confused callers manually after the AI has already weakened confidence.",
        },
        {
          heading: "CRM logging and follow-up stay disconnected",
          body: "A call that never lands in the CRM properly is not a real win. DIY gets expensive when the AI answers the call but dispositions, summaries, tags, or next steps never connect cleanly to the rest of the system.",
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
          title: "Start with one call workflow, not every phone scenario",
          body: "The safest rollout is one bounded use case: one lead type, one qualification path, one transfer path, one CRM destination. If you are trying to automate every inbound call, support question, reschedule, and complaint at once, the scope is already too wide for a clean DIY first pass.",
        },
        {
          icon: AlertTriangle,
          title: "Separate prototype value from production value",
          body: "DIY is great for proving that a voice workflow could help. Hiring help is usually better once you know the workflow should exist and now need it to run reliably with real callers, real transfers, and real CRM ownership.",
        },
        {
          icon: ShieldCheck,
          title: "Keep ownership either way",
          body: "Whether you build it yourself or hire it out, your business should own the phone numbers, platform accounts, CRM access, documentation, and prompt logic. Good setup help reduces risk. It should not trap the workflow inside somebody else's stack.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is grounded in the live voice-agent cluster plus published adjacent proof around phone handling, qualification, and downstream CRM automation:",
      studies: [
        {
          industry: "Voice-agent implementation",
          headline: "The existing setup page explains what expert setup should actually include",
          body: "That page stays on implementation scope: call-flow design, qualification logic, transfer rules, CRM handoff, testing, and launch ownership. This page answers the narrower buyer decision that comes one step earlier: keep DIYing, or pay for setup help now?",
          link: "/ai-voice-agent-setup-for-lead-qualification",
        },
        {
          industry: "Inbound call handling",
          headline: "Paris Cafe proves what immediate phone coverage is worth when staff cannot answer",
          body: "The Paris Cafe voice-agent case study is direct adjacent proof that a live AI phone workflow can answer real after-hours calls, handle the first interaction, and protect demand instead of letting it fall into voicemail or next-day callbacks.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Qualification and CRM handoff",
          headline: "The voice-qualification and CRM pages show why the middle and back half matter",
          body: "The AI voice-agent lead-qualification guide plus the WheelsFeels CRM case study reinforce the same point: a working voice agent is not just about answering first. It has to qualify cleanly, log correctly, and hand off reliably so the team does not inherit a new cleanup problem.",
          link: "/ai-voice-agent-lead-qualification",
        },
      ],
      links: [
        { label: "AI voice agent setup for lead qualification", href: "/ai-voice-agent-setup-for-lead-qualification" },
        { label: "AI voice agent cost", href: "/ai-voice-agent-cost-small-business" },
        { label: "AI voice agent ROI", href: "/ai-voice-agent-roi-for-lead-follow-up" },
        { label: "AI voice agent vs. manual callback", href: "/ai-voice-agent-vs-manual-callback-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "When is DIY AI voice-agent setup actually the right move?",
      answer:
        "Usually when the workflow is narrow, the stakes are low, and you genuinely want to learn the tools. DIY is strongest when you mainly need one clear call path, low call volume, and enough internal discipline that a temporary mistake will not cost meaningful revenue or damage caller trust.",
    },
    {
      question: "When should I hire someone to set up an AI voice agent instead of doing it myself?",
      answer:
        "Hire help when the workflow already affects real response speed, live call handling, qualification, transfer accuracy, booking rules, or CRM handoff. At that point the cost of delay, bad routing, and ongoing cleanup usually outweighs the consultant invoice.",
    },
    {
      question: "How is this different from the existing AI voice agent setup page?",
      answer:
        "The setup page explains what good implementation should include and when expert setup help is worth considering. This page sits one step earlier in the buying journey and answers the decision itself: keep DIYing, or pay for setup help now?",
    },
    {
      question: "How much does it usually cost to hire help for voice-agent setup?",
      answer:
        "A focused small-business setup often lands around $2K-$4K. More complex builds with deeper qualification logic, multiple transfer paths, CRM integration, booking logic, or broader testing often land around $4K-$6K. The real driver is workflow depth and edge-case complexity, not the voice-agent label by itself.",
    },
    {
      question: "Can I prototype the voice workflow myself and then hire someone later?",
      answer:
        "Yes. That is often the smartest path. DIY can prove the workflow is worth building. Then setup help can harden the call logic, clean up the edge cases, connect the stack properly, and leave you with something safer to run in production.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners deciding whether to keep building their voice workflow alone or bring in expert setup help",
  ctaHeading: "Want a clear answer on whether this voice agent is worth DIYing?",
  ctaText:
    "Book a 30-minute call. We will look at your call flow, qualification logic, transfer rules, CRM handoff, and the real cost of delay so you can decide whether the smartest next step is DIY, a bounded setup engagement, or a smaller phone workflow first.",
  ctaSubtext:
    "Useful if you already think a voice agent could help and the real question is whether to keep pushing through setup alone.",
  relatedLinks: [
    { label: "AI voice agent for lead qualification", href: "/ai-voice-agent-lead-qualification" },
    { label: "AI voice agent setup help", href: "/ai-voice-agent-setup-for-lead-qualification" },
    { label: "AI voice agent cost", href: "/ai-voice-agent-cost-small-business" },
    { label: "AI voice agent ROI", href: "/ai-voice-agent-roi-for-lead-follow-up" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
