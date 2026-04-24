import {
  Home,
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
  CloudRain,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-for-roofing-companies",
  metaTitle:
    "AI Lead Follow-Up for Roofing Companies — Faster Inspection Response | Dmytro AI",
  metaDescription:
    "AI lead follow-up for roofing companies. Faster first response, short nurture before the inspection is booked, storm-season triage, lighter qualification, and cleaner office handoff while crews are still on roofs.",
  badgeText: "Roofing Workflow",
  badgeIcon: Home,
  h1: "AI Lead Follow-Up for Roofing Companies",
  heroIntro:
    "Many roofing companies do not mainly lose work because their estimates are weak. They lose it before the estimate stage even starts. A homeowner finds a leak, notices hail damage, or fills out a quote form while your crews are already on roofs and your office is juggling callbacks. By the time someone replies, that homeowner has already heard back from two faster roofers and scheduled an inspection with one of them. AI lead follow-up for roofing companies fixes that earlier speed-to-lead workflow. It responds quickly, keeps the conversation alive over the next few hours or days, captures the next useful project detail, and routes real inspection intent back to a human before the opportunity goes cold.",
  heroSubtext:
    "Below: what this roofing-company workflow should actually handle, how it stays distinct from the broader roofing page and the estimate / phone pages already live, what guardrails matter, and what proof honestly supports it without pretending there is already a roofing-only lead-response case study.",
  sections: [
    {
      type: "cards",
      title: "What roofing-company lead follow-up should actually handle",
      subtitle:
        "This page is about the stage after a new inquiry arrives but before the inspection is booked or the estimate is sent. It is earlier than estimate follow-up and broader than missed-call recovery.",
      items: [
        {
          icon: Timer,
          title: "Immediate first response on inspection and storm-damage requests",
          body: "The first reply should go out while the homeowner still feels the urgency. In roofing, speed matters because prospects often contact several contractors the same day and whoever responds first often wins the inspection visit.",
        },
        {
          icon: MessageSquare,
          title: "Short multi-step nurture before the inquiry dies",
          body: "One acknowledgement is rarely enough. A stronger workflow follows up over the next few hours and days with one practical next step instead of hoping the office remembers every form fill or message after a full day of storm calls and active jobs.",
        },
        {
          icon: ClipboardList,
          title: "Light qualification that makes the callback easier",
          body: "The workflow can capture basics like leak versus hail damage, address, insurance status, preferred callback window, and whether the homeowner wants an inspection now or is still comparing options. That gives the office context without forcing a long robotic intake.",
        },
        {
          icon: ArrowUpRight,
          title: "Fast handoff when inspection intent is real",
          body: "If the homeowner replies, asks about timing, or wants to schedule an inspection, the conversation should route back to the right human with context attached instead of starting from zero after another delayed callback.",
        },
        {
          icon: Phone,
          title: "Clear boundary between lead follow-up and phone recovery",
          body: "This workflow can catch form fills, ad leads, website messages, and text replies. It is not just a missed-call text-back. The roofing phone pages already cover the narrower moment when the call itself gets missed.",
        },
        {
          icon: BarChart3,
          title: "Visibility into where roofing demand leaks first",
          body: "Owners can finally see whether good inspection opportunities are being lost because response is too slow, follow-up ends too early, storm demand gets buried, or nobody clearly owns fresh leads while crews are still in the field.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the roofing cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for roofing companies",
          values: [
            "Owners evaluating the broader operating system across lead follow-up, estimate follow-up, scheduling, insurance-claim coordination, maintenance outreach, and reviews",
            "Explains the full roofing-company automation layer instead of isolating the earliest inquiry-response stage",
          ],
        },
        {
          label: "What to automate first for roofing companies",
          values: [
            "Owners deciding which single workflow should be the first roofing automation project",
            "Helps choose between front-end lead response, missed-call recovery, estimate follow-up, booked-job scheduling, and heavier phone coverage before a broader rollout",
          ],
        },
        {
          label: "AI lead follow-up for roofing companies",
          values: [
            "Teams that already know the earliest leak is slow first response to fresh inspection or storm-damage requests",
            "Focuses on immediate response, short nurture, light qualification, and office handoff before the inspection or estimate stage starts",
          ],
        },
        {
          label: "Estimate follow-up automation for roofing companies",
          values: [
            "Companies that already inspect roofs and send estimates reliably but let too many quotes die afterward",
            "Starts after pricing or scope already exists and focuses on reminder timing, insurance-delay check-ins, and stale-estimate recovery",
          ],
        },
        {
          label: "Missed call text-back for roofing companies",
          values: [
            "Companies mainly losing demand at the exact moment a call is missed",
            "Handles the SMS-first phone fallback layer, not the broader web-form and multi-channel inquiry-response workflow that follows",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your roofing company?",
      subtitle:
        "Best fit when demand exists, inspections matter, and the first few hours after inquiry still decide who gets on the roof.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are paying for Google Ads, Local Service Ads, SEO, referrals, or storm-season demand, but first response is still measured in hours instead of minutes",
            "Fresh quote requests and inspection leads land in too many places and ownership gets fuzzy fast",
            "Your company wins more by replying first than by endlessly polishing the estimate template",
            "Crews are on roofs too often for the office or owner to follow up on every new lead consistently",
            "One tighter early-funnel workflow would pay off faster than trying to automate the whole roofing office at once",
            "One saved roof inspection that turns into a real job could justify the build quickly",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your company already responds to every inquiry within a few minutes consistently",
            "The bigger leak is stale estimates, booked-job confusion, or maintenance follow-up after the inspection is already done",
            "Inquiry volume is too low for a dedicated lead-follow-up workflow to matter yet",
            "Nobody agrees on who owns new inquiries, so there is no stable trigger to automate",
            "You want automation making custom pricing, coverage, or insurance decisions without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep roofing-company lead follow-up useful",
      subtitle:
        "The goal is disciplined speed-to-lead and cleaner handoff — not robotic chasing.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate on top of chaotic lead ownership",
          body: "If website forms, Google messages, missed calls, and referral texts all land in different places with no clear owner, the workflow cannot rescue everything by itself. The business still needs one reliable point where a new inquiry becomes real.",
        },
        {
          icon: MessageSquare,
          title: "Keep the first reply short and practical",
          body: "A homeowner asking for roof help does not need a long automated brochure. They need proof that someone saw the request, one clear next step, and a sense that the company is responsive.",
        },
        {
          icon: CloudRain,
          title: "Escalate storm or active-leak urgency quickly",
          body: "If the prospect says there is active water intrusion, recent storm damage, or immediate scheduling urgency, the conversation should route back to a human fast. Speed matters more than squeezing every message through automation.",
        },
        {
          icon: Clock3,
          title: "Separate fresh-lead nurture from estimate reminders and maintenance campaigns",
          body: "A brand-new roofing inquiry should not get the same cadence as a sent estimate or a past-client inspection reminder. Strong systems keep those stages separate so the message still fits the moment.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical roofing-company lead-follow-up workflow usually works",
      subtitle:
        "The strongest version is simple: answer quickly, keep the homeowner warm, and hand the conversation off at the right point.",
      blocks: [
        {
          heading: "A new inspection request arrives from a real channel",
          body: "The homeowner fills out a web form, responds to an ad, sends a message, or reaches out after a storm while comparing multiple roofers. The workflow catches that fresh demand right away instead of waiting for whoever notices first after crews get down from the roof.",
        },
        {
          heading: "The first reply lands while the damage still feels urgent",
          body: "That first message acknowledges the request and gives one clear next step: reply with the issue, confirm the address, request a callback, or move toward inspection scheduling. In roofing, that timing window is short because prospects often contact several contractors in parallel after weather events.",
        },
        {
          heading: "Non-responders enter a short follow-up sequence",
          body: "If there is no reply, the system follows up over the next few hours and days with useful reminders instead of disappearing after one touch. This is usually where manual follow-up breaks because active jobs, weather chaos, and inbound volume take over.",
        },
        {
          heading: "High-intent replies route back to the right human with context attached",
          body: "Once the homeowner replies, asks about timing, or wants to schedule an inspection, the office or estimator inherits the conversation with source, notes, and prior messages attached. That creates a faster handoff than reconstructing the lead from a late callback.",
        },
        {
          heading: "The next workflow takes over once the inspection or estimate process starts",
          body: "Lead follow-up should end where inspection scheduling, estimate delivery, or the phone-recovery workflow begins. Once the company is actively quoting, the estimate-follow-up page should own that stage instead of stretching this workflow too far.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published roofing-company-specific lead-follow-up case study on the site yet. The honest support comes from the live roofing cluster plus published lead-response and structured-follow-up proof already live.",
      studies: [
        {
          industry: "Roofing parent page",
          headline: "The broader roofing guide already isolates lead follow-up as one of the clearest workflow families",
          body: "That parent page explicitly frames lead follow-up, estimate follow-up, insurance-claim coordination, client reactivation, and phone recovery as separate operating layers. This child page narrows the earliest inquiry-response stage instead of re-explaining the whole stack.",
          link: "/ai-automation-for-roofing-companies",
        },
        {
          industry: "Lead-response proof",
          headline: "The service-business lead-follow-up guide already proves the same speed-to-lead and handoff pattern this workflow depends on",
          body: "That page covers instant response, structured follow-up, and clean human handoff in a broader service-business context. This roofing child keeps those mechanics but grounds them in inspection requests, storm damage, and field-crew response delays.",
          link: "/ai-lead-follow-up-for-service-businesses",
        },
        {
          industry: "Published inquiry-response proof",
          headline: "The Instagram lead-generation case study proves why fast, structured outreach matters once leads start arriving",
          body: "That project is not a roofing-company build, but it is direct proof that speed, ownership, and disciplined follow-up change what happens after a lead enters the system. The same operating logic supports roofing-company inquiry response before the estimate is even sent.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "AI automation for roofing companies", href: "/ai-automation-for-roofing-companies" },
        { label: "What to automate first for roofing companies", href: "/what-to-automate-first-for-roofing-companies" },
        { label: "Estimate follow-up automation for roofing companies", href: "/estimate-follow-up-automation-for-roofing-companies" },
        { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from estimate follow-up automation for roofing companies?",
      answer:
        "Lead follow-up covers the stage before the estimate is sent. It focuses on first response, short nurture, light qualification, and routing fresh inspection intent back to a human. Estimate follow-up starts later, after pricing or scope already exists and the homeowner has gone quiet.",
    },
    {
      question: "What does a focused roofing-company lead-follow-up build usually cost?",
      answer:
        "A focused lead-follow-up workflow usually lands around $1.5K-$3.5K depending on how many channels are involved, how much qualification logic is needed, and whether it needs to connect into an existing CRM, inbox, or inspection-booking process. Broader roofing-company systems cost more when they also include estimate reminders, maintenance outreach, and phone-answering layers.",
    },
    {
      question: "Can this work with my current CRM, inbox, or roofing software?",
      answer:
        "Usually yes, as long as there is a reliable way to catch new inquiries and hand them into your current communication or scheduling layer. API access helps, but practical workflows can also work through forms, webhooks, synced inboxes, or other stable trigger points around the inquiry-response stage.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main ROI is fewer fresh inspection requests dying in the first hour, more live estimate or inspection conversations created from the same ad and referral volume, and less office time wasted manually chasing homeowners after the moment that mattered already passed.",
    },
    {
      question: "Will this replace the owner or office manager?",
      answer:
        "No. It removes repetitive first-touch and reminder work. Humans still handle unusual scope questions, insurance nuance, pricing, scheduling judgment, trust-sensitive conversations, and the moments where a real person closes the job.",
    },
  ],
  faqSubtitle:
    "Practical questions from roofing companies that know fresh inspection requests are leaking somewhere after the first inquiry",
  ctaHeading: "Want faster follow-up on new roofing leads before the inspection request goes cold?",
  ctaText:
    "Book a 30-minute call. We will look at your current inquiry flow, response timing, office handoff, and where fresh roofing leads are actually stalling, then map the smallest workflow that would fix the leak without overbuilding it.",
  ctaSubtext:
    "No inflated close-rate promises. Just a practical recommendation based on your lead flow, storm-season reality, and current follow-up discipline.",
  relatedLinks: [
    { label: "AI automation for roofing companies", href: "/ai-automation-for-roofing-companies" },
    { label: "What to automate first for roofing companies", href: "/what-to-automate-first-for-roofing-companies" },
    { label: "Estimate follow-up automation for roofing companies", href: "/estimate-follow-up-automation-for-roofing-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
