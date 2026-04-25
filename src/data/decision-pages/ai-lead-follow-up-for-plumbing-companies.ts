import {
  Wrench,
  Timer,
  MessageSquare,
  ArrowUpRight,
  ClipboardList,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Phone,
  Clock3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-for-plumbing-companies",
  metaTitle:
    "AI Lead Follow-Up for Plumbing Companies — Faster Service Response | Dmytro AI",
  metaDescription:
    "AI lead follow-up for plumbing companies. Faster first response on service and quote requests, short nurture before the lead goes cold, cleaner office handoff, and fewer jobs lost to slower plumbers.",
  badgeText: "Plumbing Workflow",
  badgeIcon: Wrench,
  h1: "AI Lead Follow-Up for Plumbing Companies",
  heroIntro:
    "Many plumbing companies do not mainly lose jobs because the estimate is weak. They lose them before the first real conversation ever happens. A homeowner fills out a form for a water-heater replacement, messages about a drain issue, or calls about a leak while your techs are on jobs and the office is juggling dispatch, callbacks, and same-day service windows. By the time someone replies, that homeowner has already heard back from a faster plumber and moved on. AI lead follow-up for plumbing companies fixes that earlier speed-to-lead workflow. It responds quickly, keeps the conversation alive over the next few hours or days, captures the next useful detail, and routes real service intent back to a human before the opportunity goes cold.",
  heroSubtext:
    "Below: what this plumbing-company workflow should actually handle, how it stays distinct from the broader plumbing page and the estimate / phone pages already live, what guardrails matter, and what proof honestly supports it without pretending there is already a plumbing-only lead-response case study.",
  sections: [
    {
      type: "cards",
      title: "What plumbing-company lead follow-up should actually handle",
      subtitle:
        "This page is about the stage after a new inquiry arrives but before the job is booked or the estimate is sent. It is earlier than estimate follow-up and broader than missed-call recovery.",
      items: [
        {
          icon: Timer,
          title: "Immediate first response on new service and quote requests",
          body: "The first reply should go out while the homeowner still feels the urgency. In plumbing, speed matters because the same prospect often contacts several plumbers at once for a leak, clog, water-heater issue, or urgent service question.",
        },
        {
          icon: MessageSquare,
          title: "Short multi-step nurture before the inquiry dies",
          body: "One acknowledgement is rarely enough. A stronger workflow follows up over the next few hours and days with one practical next step instead of hoping the office remembers every form fill, message, or Google lead after a busy service day.",
        },
        {
          icon: ClipboardList,
          title: "Light qualification that makes the callback easier",
          body: "The workflow can capture basics like issue type, postal code, urgency, preferred callback window, and whether the homeowner wants service now or is still comparing options. That gives the office context without forcing a long robotic intake.",
        },
        {
          icon: ArrowUpRight,
          title: "Fast handoff when service intent is real",
          body: "If the homeowner replies, asks about timing, or wants to get on the schedule, the conversation should route back to the right human with context attached instead of starting from zero after another delayed callback.",
        },
        {
          icon: Phone,
          title: "Clear boundary between lead follow-up and phone recovery",
          body: "This workflow can catch web forms, Google leads, referral inquiries, and text replies. It is not just a missed-call text-back. The plumbing phone pages already cover the narrower moment when the call itself gets missed or needs live answering.",
        },
        {
          icon: BarChart3,
          title: "Visibility into where plumbing demand leaks first",
          body: "Owners can finally see whether good service opportunities are being lost because response is too slow, follow-up ends too early, urgent jobs get buried, or nobody clearly owns fresh leads while dispatch is busy.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the plumbing cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for plumbing companies",
          values: [
            "Owners evaluating the broader operating system across lead follow-up, estimate follow-up, scheduling, review requests, missed calls, and after-hours phone coverage",
            "Explains the full plumbing-company automation layer instead of isolating the earliest inquiry-response stage",
          ],
        },
        {
          label: "What to automate first for plumbing companies",
          values: [
            "Owners deciding which single workflow should be the first plumbing automation project",
            "Helps choose between missed-call recovery, lead follow-up, booked-job scheduling, estimate follow-up, and heavier after-hours phone coverage before a broader rollout",
          ],
        },
        {
          label: "AI lead follow-up for plumbing companies",
          values: [
            "Teams that already know the earliest leak is slow response to fresh service requests, quote requests, or inbound web leads",
            "Focuses on immediate response, short nurture, light qualification, and office handoff before the booked-job or estimate stage starts",
          ],
        },
        {
          label: "Estimate follow-up automation for plumbing companies",
          values: [
            "Companies that already quote consistently but let too many sent estimates die afterward",
            "Starts after pricing or scope already exists and focuses on reminder timing, objection-aware messaging, and stale-estimate recovery",
          ],
        },
        {
          label: "Missed call text-back for plumbing companies",
          values: [
            "Companies mainly losing demand at the exact moment a call is missed",
            "Handles the SMS-first phone fallback layer, not the broader web-form and multi-channel inquiry-response workflow that follows",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your plumbing company?",
      subtitle:
        "Best fit when demand exists, urgency matters, and the first few hours after inquiry still decide who gets the job.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are paying for Google LSAs, ads, SEO, or referrals, but first response is still measured in hours instead of minutes",
            "Fresh service requests and quote inquiries land in too many places and ownership gets fuzzy fast",
            "Your company wins more by replying first than by endlessly polishing the estimate process",
            "Techs are on jobs too often for the office or owner to follow up on every new lead consistently",
            "One tighter early-funnel workflow would pay off faster than trying to automate the whole plumbing office at once",
            "One recovered drain, water-heater, or emergency service job could justify the build quickly",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your company already responds to every inquiry within a few minutes consistently",
            "The bigger leak is stale estimates, booked-job scheduling confusion, or missed-call handling rather than first response",
            "Inquiry volume is too low for a dedicated lead-follow-up workflow to matter yet",
            "Nobody agrees on who owns new inquiries, so there is no stable trigger to automate",
            "You want automation making custom pricing, dispatch, or job-scope decisions without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep plumbing-company lead follow-up useful",
      subtitle:
        "The goal is disciplined speed-to-lead and cleaner handoff — not robotic chasing.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate on top of chaotic lead ownership",
          body: "If web forms, Google leads, referral texts, and call-derived inquiries all land in different places with no clear owner, the workflow cannot rescue everything by itself. The business still needs one reliable point where a new inquiry becomes real.",
        },
        {
          icon: MessageSquare,
          title: "Keep the first reply short and practical",
          body: "A homeowner with a plumbing problem does not need a long automated brochure. They need proof that someone saw the request, one clear next step, and a sense that the company is responsive.",
        },
        {
          icon: Phone,
          title: "Escalate urgent service intent quickly",
          body: "If the prospect says there is active water damage, no hot water, sewage backup, or same-day urgency, the conversation should route back to a human fast. Speed matters more than squeezing every response through automation.",
        },
        {
          icon: Clock3,
          title: "Separate fresh-lead nurture from estimate reminders and booked-job coordination",
          body: "A brand-new plumbing inquiry should not get the same cadence as a sent estimate or a booked appointment reminder. Strong systems keep those stages separate so the message still fits the moment.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical plumbing-company lead-follow-up workflow usually works",
      subtitle:
        "The strongest version is simple: answer quickly, keep the homeowner warm, and hand the conversation off at the right point.",
      blocks: [
        {
          heading: "A new service request arrives from a real channel",
          body: "The homeowner fills out a web form, comes through Google LSAs, replies to a referral message, or asks for service while comparing multiple plumbers. The workflow catches that fresh demand right away instead of waiting for whoever notices first after dispatch settles down.",
        },
        {
          heading: "The first reply lands while the problem still feels urgent",
          body: "That first message acknowledges the request and gives one clear next step: reply with the issue, confirm the postal code, request a callback, or move toward scheduling. In plumbing, that timing window is short because buyers often contact several companies in parallel when something is broken now.",
        },
        {
          heading: "Non-responders enter a short follow-up sequence",
          body: "If there is no reply, the system follows up over the next few hours and days with useful reminders instead of disappearing after one touch. This is usually where manual follow-up breaks because live jobs, emergency calls, and dispatch work take over.",
        },
        {
          heading: "High-intent replies route back to the right human with context attached",
          body: "Once the homeowner replies, asks about timing, or wants to book service, the office or dispatcher inherits the conversation with source, notes, and prior messages attached. That creates a faster handoff than reconstructing the lead from a late callback.",
        },
        {
          heading: "The next workflow takes over once scheduling or estimating starts",
          body: "Lead follow-up should end where booked-job scheduling, estimate delivery, or the phone-recovery workflow begins. Once the company is actively scheduling or quoting, the next page in the plumbing cluster should own that stage instead of stretching this workflow too far.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published plumbing-company-specific lead-follow-up case study on the site yet. The honest support comes from the live plumbing cluster plus published lead-response and structured-follow-up proof already live.",
      studies: [
        {
          industry: "Plumbing parent page",
          headline: "The broader plumbing guide already isolates lead follow-up as one of the clearest workflow families",
          body: "That parent page explicitly frames lead follow-up, estimate follow-up, scheduling, review automation, and phone recovery as separate operating layers. This child page narrows the earliest inquiry-response stage instead of re-explaining the whole stack.",
          link: "/ai-automation-for-plumbing-companies",
        },
        {
          industry: "Lead-response proof",
          headline: "The service-business lead-follow-up guide already proves the same speed-to-lead and handoff pattern this workflow depends on",
          body: "That page covers instant response, structured follow-up, and clean human handoff in a broader service-business context. This plumbing child keeps those mechanics but grounds them in urgent service requests, owner-in-the-field delays, and dispatcher-friendly handoff.",
          link: "/ai-lead-follow-up-for-service-businesses",
        },
        {
          industry: "Published inquiry-response proof",
          headline: "The Instagram lead-generation case study proves why fast, structured outreach matters once leads start arriving",
          body: "That project is not a plumbing-company build, but it is direct proof that speed, ownership, and disciplined follow-up change what happens after a lead enters the system. The same operating logic supports plumbing-company inquiry response before the estimate is even sent.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
        { label: "What to automate first for plumbing companies", href: "/what-to-automate-first-for-plumbing-companies" },
        { label: "Estimate follow-up automation for plumbing companies", href: "/estimate-follow-up-automation-for-plumbing-companies" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from estimate follow-up automation for plumbing companies?",
      answer:
        "Lead follow-up covers the stage before the estimate is sent. It focuses on first response, short nurture, light qualification, and routing fresh service intent back to a human. Estimate follow-up starts later, after pricing or scope already exists and the homeowner has gone quiet.",
    },
    {
      question: "What does a focused plumbing-company lead-follow-up build usually cost?",
      answer:
        "A focused lead-follow-up workflow usually lands around $1.5K-$3.5K depending on how many channels are involved, how much qualification logic is needed, and whether it needs to connect into an existing CRM, inbox, or scheduling process. Broader plumbing systems cost more when they also include estimate reminders, booked-job coordination, and phone-answering layers.",
    },
    {
      question: "Can this work with my current CRM, inbox, or plumbing software?",
      answer:
        "Usually yes, as long as there is a reliable way to catch new inquiries and hand them into your current communication or scheduling layer. API access helps, but practical workflows can also work through forms, webhooks, synced inboxes, or other stable trigger points around the inquiry-response stage.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main ROI is fewer fresh service requests dying in the first hour, more real booking or estimate conversations created from the same ad and referral volume, and less office time wasted manually chasing homeowners after the moment that mattered already passed.",
    },
    {
      question: "Will this replace the office manager or dispatcher?",
      answer:
        "No. It removes repetitive first-touch and reminder work. Humans still handle unusual job details, pricing nuance, dispatch judgment, trust-sensitive conversations, and the moments where a real person closes or schedules the work.",
    },
  ],
  faqSubtitle:
    "Practical questions from plumbing companies that know fresh service requests are leaking somewhere after the first inquiry",
  ctaHeading:
    "Want faster follow-up on new plumbing leads before the service request goes cold?",
  ctaText:
    "Book a 30-minute call. We will look at your current inquiry flow, response timing, office handoff, and where fresh plumbing leads are actually stalling, then map the smallest workflow that would fix the leak without overbuilding it.",
  ctaSubtext:
    "No inflated close-rate promises. Just a practical recommendation based on your call flow, dispatch reality, and current follow-up discipline.",
  relatedLinks: [
    { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
    { label: "What to automate first for plumbing companies", href: "/what-to-automate-first-for-plumbing-companies" },
    { label: "Estimate follow-up automation for plumbing companies", href: "/estimate-follow-up-automation-for-plumbing-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
