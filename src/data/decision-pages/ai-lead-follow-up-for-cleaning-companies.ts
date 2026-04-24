import {
  Home,
  Timer,
  MessageSquare,
  ArrowUpRight,
  FileText,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Phone,
  Clock3,
  Workflow,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-for-cleaning-companies",
  metaTitle:
    "AI Lead Follow-Up for Cleaning Companies — Faster Quote Response | Dmytro AI",
  metaDescription:
    "AI lead follow-up for cleaning companies. Faster web-lead response, short nurture before the quote goes cold, cleaner owner handoff, and less revenue lost to slow first replies.",
  badgeText: "Cleaning Workflow",
  badgeIcon: Home,
  h1: "AI Lead Follow-Up for Cleaning Companies",
  heroIntro:
    "Cleaning companies often lose good jobs before the quote stage even starts. The lead comes in through a website form, Local Service Ads, Google Ads, referral traffic, or a social message, then sits while the owner is on jobs or the office is juggling schedule changes and callbacks. By the time someone replies, the homeowner has already talked to a faster competitor. AI lead follow-up for cleaning companies fixes that narrower early-funnel stage. It answers new inquiries quickly, keeps the conversation alive for the next few hours or days, captures the next useful detail, and routes real buying intent back to a human before the request goes cold.",
  heroSubtext:
    "Below: what this cleaning-company workflow actually covers, how it stays distinct from the broader cleaning page and the quote / phone / reactivation pages already live, what guardrails matter, and what adjacent proof honestly supports it.",
  sections: [
    {
      type: "cards",
      title: "What cleaning-company lead follow-up should actually handle",
      subtitle:
        "This page is about the stage after a new inquiry arrives but before the estimate is sent or the job is booked. It is earlier than quote follow-up and broader than missed-call recovery.",
      items: [
        {
          icon: Timer,
          title: "Immediate first response on web leads and inbound requests",
          body: "The first reply should go out while the prospect still remembers filling out the form or clicking the ad. In cleaning, speed matters because homeowners often contact multiple companies at once for the same job.",
        },
        {
          icon: MessageSquare,
          title: "Short multi-step nurture before the quote request dies",
          body: "One acknowledgement is rarely enough. A strong workflow follows up over the next few hours and days with useful next steps instead of relying on the owner or office manager to remember every inquiry manually.",
        },
        {
          icon: FileText,
          title: "Light qualification that makes the next human call easier",
          body: "The workflow can gather basics like home vs office, one-time vs recurring, rough timing, postal code, and the best callback window. That gives the team context without forcing a long robotic intake.",
        },
        {
          icon: ArrowUpRight,
          title: "Fast handoff when buying intent is real",
          body: "If the prospect wants a quote, asks for availability, or is ready to book an estimate visit, the right person gets the conversation with context attached instead of starting from zero on a callback.",
        },
        {
          icon: Phone,
          title: "Clear boundary between lead follow-up and phone recovery",
          body: "This workflow can catch website leads, ad leads, referral forms, and text replies. It is not just a missed-call text-back. The phone-recovery layer is a sibling page for the exact moment a call is missed.",
        },
        {
          icon: BarChart3,
          title: "Visibility into where cleaning demand leaks first",
          body: "Owners can finally see whether jobs are being lost because response is too slow, follow-up ends too early, leads are poorly routed, or the office is too overloaded to keep up during busy weeks.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the cleaning-company cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for cleaning companies",
          values: [
            "Owners evaluating the broader operating system across lead follow-up, missed calls, quote nurture, recurring schedules, reactivation, and reviews",
            "Explains the whole cleaning-company automation layer instead of isolating the earliest inquiry-response stage",
          ],
        },
        {
          label: "What to automate first for cleaning companies",
          values: [
            "Owners deciding which single workflow should be the first automation project",
            "Helps choose between lead follow-up, missed-call recovery, quote follow-up, and recurring-client reactivation before a broader rollout",
          ],
        },
        {
          label: "AI lead follow-up for cleaning companies",
          values: [
            "Teams that already know the first leak is slow response to web leads, ad leads, or new quote requests",
            "Focuses on immediate response, short nurture, light qualification, and owner handoff before the estimate stage starts",
          ],
        },
        {
          label: "Quote follow-up automation for cleaning companies",
          values: [
            "Companies that already respond and send quotes reliably but let too many estimates die afterward",
            "Starts after pricing is already sent and focuses on reminder timing, objection-aware messaging, and stale-quote recovery",
          ],
        },
        {
          label: "Missed call text-back for cleaning companies",
          values: [
            "Teams mainly losing demand at the exact moment a call is missed",
            "Handles the SMS-first phone fallback layer, not the broader web-form and multi-channel inquiry-response workflow",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your cleaning company?",
      subtitle:
        "Best fit when demand exists, quote requests matter, and the first few hours after inquiry still decide who gets the job.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are paying for Google Ads, Local Service Ads, SEO, or referrals, but first response is still measured in hours instead of minutes",
            "New quote requests land in too many places and ownership gets fuzzy fast",
            "The company wins more when it responds first than when it keeps polishing its quote template",
            "The owner is on jobs or the office is too busy to follow up consistently on fresh inquiries",
            "One tighter early-funnel workflow would pay off faster than automating the whole office at once",
            "One saved recurring client or a few recovered deep-clean jobs each month could justify the build quickly",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your company already responds to every inquiry within a few minutes consistently",
            "The bigger leak is no-shows, stale quotes, or dormant past clients after the estimate or booking exists",
            "Inquiry volume is too low for a dedicated lead-follow-up workflow to matter yet",
            "Nobody agrees on who owns new inquiries, so there is no stable trigger to automate",
            "You want automation making custom pricing or job-scope decisions without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep cleaning-company lead follow-up useful",
      subtitle:
        "The goal is disciplined speed-to-lead and cleaner handoff — not robotic chasing.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate on top of chaotic ownership",
          body: "If web forms, ad leads, text replies, and referral inquiries all land in different places with no clear owner, the workflow cannot rescue everything by itself. The business still needs one reliable point where a new inquiry becomes real.",
        },
        {
          icon: MessageSquare,
          title: "Keep the first reply short and practical",
          body: "A homeowner who wants a cleaning quote does not need a long automated brochure. They need proof that someone saw the request, one clear next step, and a sense that the company is responsive.",
        },
        {
          icon: ArrowUpRight,
          title: "Escalate real buying intent quickly",
          body: "If the prospect wants pricing, asks for availability, or sounds ready to move forward, the conversation should route back to a human fast. Speed matters more than squeezing every response through automation.",
        },
        {
          icon: Clock3,
          title: "Separate fresh-lead nurture from quote reminders and reactivation",
          body: "A brand-new inquiry should not get the same cadence as a sent estimate or a dormant past client. Strong systems keep those stages separate so the message still matches the moment.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical cleaning-company lead-follow-up workflow usually works",
      subtitle:
        "The strongest version is simple: answer quickly, keep the prospect warm, and hand the conversation off at the right point.",
      blocks: [
        {
          heading: "A new quote request arrives from a real channel",
          body: "The homeowner fills out a website form, comes through an ad, replies to a referral message, or texts asking about availability. The workflow catches that new demand right away instead of waiting for whoever notices first.",
        },
        {
          heading: "The first reply goes out while intent is still hot",
          body: "That first message acknowledges the request and offers one clear next step: reply with service details, confirm the type of clean, request a callback, or move toward an estimate. In local cleaning, that timing window is short because the buyer is often comparing multiple providers in parallel.",
        },
        {
          heading: "Non-responders enter a short follow-up sequence",
          body: "If there is no reply, the system follows up over the next few hours and days with useful reminders instead of disappearing after one touch. This is usually where manual follow-up breaks because the company gets busy and live work takes over.",
        },
        {
          heading: "High-intent replies route back to the right human with context attached",
          body: "Once the prospect replies, asks about timing, or wants a quote, the owner or office manager inherits the conversation with source, notes, and prior messages attached. That creates a faster live handoff than starting from zero on a callback.",
        },
        {
          heading: "The next workflow takes over once the estimate stage starts",
          body: "Lead follow-up should end where quote delivery, booking coordination, or the phone-recovery workflow begins. Once the company is actively quoting or booking, the next page in the cluster should own that stage instead of stretching this workflow too far.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published cleaning-company-specific lead-follow-up case study on the site yet. The honest support comes from the live cleaning cluster plus published speed-to-lead and structured-follow-up proof already live.",
      studies: [
        {
          industry: "Cleaning parent page",
          headline: "The broader cleaning-company guide already isolates lead follow-up as one of the clearest workflow families",
          body: "That parent page explicitly frames lead follow-up, missed calls, quote nurture, recurring schedules, reactivation, and reviews as separate parts of the operating system. This child page narrows the earliest inquiry-response layer instead of re-explaining the whole stack.",
          link: "/ai-automation-for-cleaning-companies",
        },
        {
          industry: "Lead-response proof",
          headline: "The service-business lead-follow-up guide already proves the same speed-to-lead and handoff pattern this workflow depends on",
          body: "That page covers instant response, structured follow-up, and clean human handoff in a broader service-business context. This cleaning child keeps those mechanics but grounds them in local quote requests, owner-in-the-field delays, and recurring-vs-one-time buying behavior.",
          link: "/ai-lead-follow-up-for-service-businesses",
        },
        {
          industry: "Published inquiry-response proof",
          headline: "The Instagram lead-generation case study proves why fast, structured outreach matters once leads start arriving",
          body: "That project is not a cleaning-company build, but it is direct proof that speed, ownership, and disciplined follow-up change what happens after a lead enters the system. The same operating logic supports cleaning-company inquiry response before the estimate is even sent.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "AI automation for cleaning companies", href: "/ai-automation-for-cleaning-companies" },
        { label: "What to automate first for cleaning companies", href: "/what-to-automate-first-for-cleaning-companies" },
        { label: "Quote follow-up automation for cleaning companies", href: "/quote-follow-up-automation-for-cleaning-companies" },
        { label: "Contact form lead follow-up automation", href: "/contact-form-lead-follow-up-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from quote follow-up automation for cleaning companies?",
      answer:
        "Lead follow-up covers the stage before the quote is sent. It focuses on first response, short nurture, light qualification, and routing new inquiry intent back to a human. Quote follow-up starts later, after pricing already exists and the prospect has gone quiet.",
    },
    {
      question: "What does a focused cleaning-company lead-follow-up build usually cost?",
      answer:
        "A focused lead-follow-up workflow usually lands around $1.5K-$3.5K depending on how many channels are involved, how much qualification logic is needed, and whether it needs to connect into an existing CRM, inbox, or quoting process. Broader cleaning-company systems cost more when they also include quote reminders, reactivation, and phone-answering layers.",
    },
    {
      question: "Can this work with my current CRM, quoting tool, or inbox stack?",
      answer:
        "Usually yes, as long as there is a reliable way to catch new inquiries and hand them into your current communication or quoting layer. API access helps, but practical workflows can also work through forms, webhooks, synced inboxes, or other stable trigger points around the inquiry-response layer.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main ROI is fewer new quote requests dying in the first hour, more live estimate conversations created from the same ad or referral volume, and less owner or office time wasted manually chasing leads after the moment that mattered already passed.",
    },
    {
      question: "Will this replace the owner or office manager?",
      answer:
        "No. It removes repetitive first-touch and reminder work. Humans still handle unusual job details, pricing nuance, schedule judgment, trust-sensitive conversations, and the moments where a real person closes the work.",
    },
  ],
  faqSubtitle:
    "Practical questions from cleaning companies that know fresh quote requests are leaking somewhere after the first inquiry",
  ctaHeading: "Want faster follow-up on new cleaning leads before the quote request goes cold?",
  ctaText:
    "Book a 30-minute call. We will look at your current inquiry flow, response timing, owner handoff, and where fresh cleaning leads are actually stalling, then map the smallest workflow that would fix the leak without overbuilding it.",
  ctaSubtext:
    "No hype and no fake conversion promises. Just a practical diagnosis of where your cleaning-company lead response is actually breaking down.",
  relatedLinks: [
    {
      label: "AI automation for cleaning companies",
      href: "/ai-automation-for-cleaning-companies",
    },
    {
      label: "What to automate first for cleaning companies",
      href: "/what-to-automate-first-for-cleaning-companies",
    },
    {
      label: "Quote follow-up automation for cleaning companies",
      href: "/quote-follow-up-automation-for-cleaning-companies",
    },
    {
      label: "AI lead follow-up for service businesses",
      href: "/ai-lead-follow-up-for-service-businesses",
    },
  ],
};

export default data;
