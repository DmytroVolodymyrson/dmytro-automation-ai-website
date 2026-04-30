import {
  AlertTriangle,
  Bot,
  CalendarCheck,
  CheckCircle2,
  ClipboardX,
  Clock,
  Database,
  Phone,
  Route,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-appointment-setter-setup-mistakes-small-business",
  metaTitle:
    "AI Appointment Setter Setup Mistakes for Small Business — What Usually Goes Wrong Before Launch | Dmytro AI",
  metaDescription:
    "Common AI appointment-setter setup mistakes that create bad qualification, broken booking logic, weak CRM handoff, and expensive cleanup later. Practical guide for small businesses before launch.",
  badgeText: "Setup Mistakes",
  badgeIcon: ClipboardX,
  h1: "AI Appointment Setter Setup Mistakes for Small Business",
  heroIntro:
    "Most appointment-setter failures do not start with the voice sounding robotic. They start with a weak setup. A small business goes live without clear qualification rules, without tested booking boundaries, without a clean fallback when the AI should stop and hand off, and without trustworthy CRM logging after the interaction ends. Then the system books the wrong people, routes edge cases badly, or creates extra cleanup for the office — and a few ugly moments are enough for the team to stop trusting it. If you are setting up an AI appointment setter now, the highest-leverage move is catching the expensive mistakes before they become rescue work.",
  heroSubtext:
    "Below: the most common appointment-setter setup mistakes, which ones usually create the biggest downstream mess, when DIY is still fine, and how this page stays separate from the broader setup-help, cost, ROI, and DIY pages already live on the site.",
  sections: [
    {
      type: "cards",
      title: "The setup mistakes that usually create the biggest cleanup later",
      subtitle:
        "These are the pre-launch decisions that quietly turn a promising appointment-setting workflow into an unreliable one:",
      items: [
        {
          icon: Bot,
          title: "Treating every inquiry like the same booking conversation",
          body: "A new lead, an existing customer, a reschedule request, a bad-fit inquiry, and a high-value consultation call should not all hit the same logic path. One of the most common setup mistakes is using a generic appointment script instead of mapping the real inquiry types your business actually gets.",
        },
        {
          icon: Route,
          title: "Leaving qualification and fallback rules vague",
          body: "If nobody defined exactly who should be booked, who needs a callback, who should be disqualified, and when the AI should stop trying to handle the conversation alone, the workflow keeps people in the wrong lane too long. That is how a booking system creates extra confusion instead of reducing admin work.",
        },
        {
          icon: CalendarCheck,
          title: "Connecting booking before the real calendar rules are stable",
          body: "A workflow that can offer time slots without knowing service areas, appointment types, buffers, no-go times, or who owns the next step creates more cleanup than value. Bad booking logic is one of the fastest ways to lose team trust after launch.",
        },
        {
          icon: Database,
          title: "Treating CRM handoff like an afterthought",
          body: "If the right person cannot see the inquiry source, qualification answers, booked status, summary, and next-step owner clearly after the interaction ends, the office still has to reconstruct what happened manually. A booked lead that lands in messy CRM state is only half captured.",
        },
      ],
    },
    {
      type: "table",
      title: "What each setup mistake usually breaks downstream",
      subtitle:
        "The early mistake matters because it creates a specific operational problem later:",
      headers: ["Setup mistake", "What it usually breaks", "Why it gets expensive"],
      rows: [
        {
          label: "One-size-fits-all inquiry logic",
          values: [
            "Good-fit leads, bad-fit leads, reschedules, and routine questions all get pushed toward the same next step",
            "The team still has to sort out the real intent later, which cancels much of the time-saving value",
          ],
        },
        {
          label: "Weak qualification and fallback rules",
          values: [
            "The AI tries to book people it should route, keeps talking when a human should step in, or fails to recover gracefully when the inquiry goes off script",
            "A few visibly wrong handoff moments are enough for the team to stop trusting the workflow on real demand",
          ],
        },
        {
          label: "Loose booking and availability mapping",
          values: [
            "The system offers the wrong appointment type, ignores service boundaries, or creates calendar friction the office has to clean up later",
            "What should feel like faster first response turns into a second scheduling mess behind the scenes",
          ],
        },
        {
          label: "No trustworthy CRM or ownership handoff",
          values: [
            "Booked outcomes land with weak summaries, wrong tags, missing owners, or no clean follow-up trigger",
            "The office still has to re-check conversations manually, which kills confidence in the automation",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is useful — and when it is not",
      subtitle:
        "This page is for owners trying to avoid common appointment-setter rollout mistakes before they create rework:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are setting up appointment-setting automation now or cleaning up a workflow that just launched",
            "The system touches real lead response, consultation booking, estimate intake, or after-hours first contact",
            "You want to catch the mistakes that usually create bad qualification, weak routing, or messy CRM state",
            "You already think automation belongs here, but you do not want a fragile first rollout",
            "You would rather launch one narrow trustworthy booking workflow than a bigger system nobody trusts",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether appointment-setting automation is the right workflow at all",
            "Your main question is setup scope, cost, ROI, or DIY-vs-hiring help rather than mistakes specifically",
            "Almost every inbound inquiry still needs a long human sales conversation before any next step can be offered",
            "Your bigger problem starts after the booking, not during the intake and qualification layer",
            "You still have not agreed internally on who counts as a fit lead and what should happen when the AI cannot book safely",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to avoid turning setup into future cleanup",
      subtitle:
        "Most small businesses do not need a fancier appointment setter. They need a more disciplined one:",
      items: [
        {
          icon: Wrench,
          title: "Start with one narrow booking objective",
          body: "Pick one exact job first: respond to new inbound leads, book one appointment type, qualify before offering a slot, or cover after-hours inquiries. A narrower first launch is easier to trust and easier to test than a broad workflow trying to handle every conversation perfectly.",
        },
        {
          icon: AlertTriangle,
          title: "Write the stop rules before polishing the script",
          body: "Most expensive mistakes come from workflow boundaries, not greeting tone. Decide exactly what should happen when someone is a bad fit, asks for pricing too early, needs a callback, wants to reschedule, or should be escalated to a human immediately.",
        },
        {
          icon: Clock,
          title: "Test ugly real-world interactions on purpose",
          body: "Interruptions, vague requests, low-intent shoppers, duplicate forms, calendar collisions, and after-hours replies are not edge cases. They are the real test. If those scenarios are not handled intentionally before launch, the workflow will feel shaky in production.",
        },
        {
          icon: Users,
          title: "Decide who owns the live workflow after go-live",
          body: "Someone should own qualification changes, booking windows, CRM mapping, fallback rules, and message updates after launch. An appointment setter without clear ownership quietly degrades until the office decides the automation is more trouble than help.",
        },
      ],
    },
    {
      type: "prose",
      title: "The five appointment-setter setup mistakes owners regret most",
      subtitle:
        "These are the patterns that show up when a new booking workflow already feels fragile:",
      blocks: [
        {
          heading: "Mistake 1: launching the script before defining the workflow",
          body: "A lot of weak launches happen because the business polishes the first prompt or greeting before deciding which inquiries should book, route, escalate, or stop. The AI can sound polished while the workflow logic underneath it is still missing.",
        },
        {
          heading: "Mistake 2: assuming qualification is obvious without writing it down",
          body: "If service area, job type, buyer fit, urgency, and budget boundaries only live in someone's head, the AI will guess badly. Qualification rules need to be explicit before the system touches live demand.",
        },
        {
          heading: "Mistake 3: treating booking like a simple add-on",
          body: "Booking is not just a button. It depends on appointment types, availability rules, ownership, reschedule paths, and what should happen when the calendar cannot take the request. Bad booking logic creates office cleanup faster than almost anything else in appointment automation.",
        },
        {
          heading: "Mistake 4: assuming a captured lead is automatically a completed handoff",
          body: "An interaction only creates leverage if the next person sees what happened and what should happen next. If the CRM record is incomplete, the summary is weak, or the owner is unclear, the office still works blind after the AI step ends.",
        },
        {
          heading: "Mistake 5: no one owns the workflow once it is live",
          body: "Booking rules change. Service areas change. Calendar windows change. Offer positioning changes. Without clear post-launch ownership, a decent first build quietly turns into a fragile one and the team concludes the AI is the problem.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone appointment-setter setup-mistakes case study here. The support comes from the live appointment-setter cluster plus adjacent call-handling, qualification, and CRM proof already published on the site:",
      studies: [
        {
          industry: "Existing appointment-setter cluster",
          headline: "The live setup, setup-vs-DIY, cost, and ROI pages already define the surrounding buyer decisions clearly",
          body: "That cluster makes the remaining exact buyer-intent page viable: the common setup mistakes that usually make a first appointment-setter rollout fragile and expensive later. This page isolates the pre-launch mistake layer instead of rehashing setup-help, pricing, ROI, or buy-vs-build framing.",
          link: "/ai-appointment-setter-setup",
        },
        {
          industry: "Phone workflow proof",
          headline: "Paris Cafe shows why disciplined first-response and booking logic matter before live demand is handed to AI",
          body: "Different exact use case, same operational lesson. The published restaurant voice-agent case study worked because the call flow, fallback behavior, and handoff path were strong enough to protect after-hours demand instead of sending callers into dead ends or next-day delay.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Qualification and CRM handoff proof",
          headline: "The lead-qualification guide plus the WheelsFeels CRM case study show why the middle and back half matter",
          body: "A working appointment setter is not just about answering first. It has to qualify cleanly, log correctly, and hand off reliably so the team does not inherit a new cleanup problem after the conversation ends.",
          link: "/ai-voice-agent-lead-qualification",
        },
      ],
      links: [
        { label: "AI appointment setter", href: "/ai-appointment-setter" },
        { label: "AI appointment setter setup help", href: "/ai-appointment-setter-setup" },
        { label: "AI appointment setter setup vs. DIY", href: "/ai-appointment-setter-setup-vs-diy-small-business" },
        { label: "AI appointment setter cost", href: "/ai-appointment-setter-cost-small-business" },
        { label: "AI appointment setter ROI", href: "/ai-appointment-setter-roi-small-business" },
        { label: "AI voice agent for lead qualification", href: "/ai-voice-agent-lead-qualification" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What are the most common AI appointment-setter setup mistakes before launch?",
      answer:
        "The biggest ones are treating every inquiry the same, leaving qualification and fallback rules vague, enabling booking before calendar logic is trustworthy, skipping ugly real-world testing, and failing to make CRM handoff and ownership clear after the interaction ends.",
    },
    {
      question: "How do I avoid a messy AI appointment-setter launch?",
      answer:
        "Start with one narrow booking objective, define what the AI should and should not handle before polishing the script, map qualification and fallback rules explicitly, test ugly real-world interactions on purpose, and make sure summaries, booking outcomes, and next-step ownership land cleanly in the systems your team actually uses.",
    },
    {
      question: "How is this different from the AI appointment-setter setup-help page?",
      answer:
        "The setup-help page explains what a solid implementation project should include and when expert help is worth paying for. This page stays narrower: the specific pre-launch mistakes that usually make a first appointment-setter rollout fragile and expensive later.",
    },
    {
      question: "When do appointment-setter setup mistakes turn into a cleanup problem?",
      answer:
        "Usually when the system books the wrong people, routes edge cases badly, creates calendar cleanup, or leaves the CRM in a state the office cannot trust. At that point the issue is no longer just setup quality — it is operational rescue work.",
    },
    {
      question: "Should I fix appointment-setter setup mistakes myself or hire help before launch?",
      answer:
        "DIY can be fine when the workflow is narrow, the stakes are low, and you are comfortable testing qualification, booking, and CRM logic yourself. If the rollout touches real revenue, after-hours demand, live booking, or customer experience, expert help usually costs less than a weak first launch that damages team trust.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners trying to avoid the setup mistakes that quietly turn a promising appointment-setting workflow into one the office stops trusting",
  ctaHeading:
    "Want a cleaner appointment-setter launch before small setup mistakes get expensive?",
  ctaText:
    "Book a 30-minute call. We will look at your inquiry types, qualification logic, booking rules, fallback behavior, and CRM handoff, identify the setup mistakes most likely to create confusion or office cleanup, and help you scope the narrowest trustworthy rollout first.",
  ctaSubtext:
    "Useful if you are still in setup mode and want to avoid paying for rescue work a month from now.",
  relatedLinks: [
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "AI appointment setter setup help", href: "/ai-appointment-setter-setup" },
    { label: "AI appointment setter setup vs. DIY", href: "/ai-appointment-setter-setup-vs-diy-small-business" },
    { label: "AI appointment setter cost", href: "/ai-appointment-setter-cost-small-business" },
    { label: "AI appointment setter ROI", href: "/ai-appointment-setter-roi-small-business" },
    { label: "AI appointment setter for home service businesses", href: "/ai-appointment-setter-for-home-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
