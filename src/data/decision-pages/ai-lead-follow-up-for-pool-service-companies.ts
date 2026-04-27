import {
  Waves,
  Timer,
  MessageSquare,
  ClipboardList,
  ArrowUpRight,
  Phone,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock3,
  Route,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-for-pool-service-companies",
  metaTitle:
    "AI Lead Follow-Up for Pool Service Companies — Faster Response on Every New Inquiry | Dmytro AI",
  metaDescription:
    "AI lead follow-up for pool service companies. Faster first response on web forms, quote requests, missed-call recoveries, and referral inquiries. Light qualification, short nurture, urgency routing, and office handoff before the first service visit is booked.",
  badgeText: "Pool Service Workflow",
  badgeIcon: Waves,
  h1: "AI Lead Follow-Up for Pool Service Companies",
  heroIntro:
    "Most pool service companies do not lose the majority of their jobs because the cleaning route is weak or the water chemistry is wrong. They lose them before the first real conversation ever happens. A homeowner fills out a web form about a green pool after vacation, sends a quote request for a repair, calls about opening-season service while your techs are already in backyards, or gets referred by a neighbor and never hears back. By the time someone at the office follows up, that homeowner has already booked with whoever replied first. AI lead follow-up for pool service companies fixes that broader early-funnel workflow. It covers every fresh inquiry channel — web forms, quote requests, missed-call recoveries, referral messages, and light inbound from ads — responds quickly, keeps the conversation alive over the next few hours or days, captures the next useful detail, routes by urgency, and hands real service intent back to a human before the opportunity goes cold.",
  heroSubtext:
    "Below: what this pool-service lead-follow-up workflow should actually handle across the full fresh-lead stage, how it stays distinct from the broader pool-service parent and the first-project scoping page already live, what guardrails matter, and what proof honestly supports it without inventing a pool-service-specific case study.",
  sections: [
    {
      type: "cards",
      title: "What pool-service lead follow-up should actually handle",
      subtitle:
        "This page covers the full fresh-lead stage before the first service visit or repair job is booked. It is broader than missed-call recovery and earlier than quote follow-up or recurring-route retention.",
      items: [
        {
          icon: Timer,
          title: "Immediate first response on every new inquiry channel",
          body: "The first reply should go out while the homeowner still remembers submitting the form, leaving the message, or getting the referral. That applies to web forms, Google ad leads, quote requests for green-to-clean work, referral texts, and missed-call recoveries alike — not just the urgent callers during opening season.",
        },
        {
          icon: MessageSquare,
          title: "Short multi-step nurture before the inquiry dies",
          body: "One acknowledgement is rarely enough. A stronger workflow follows up over the next few hours and days with one practical next step instead of hoping the office remembers every form fill, referral, and repair inquiry after a full day of route work and dispatch.",
        },
        {
          icon: ClipboardList,
          title: "Light qualification that makes the callback easier",
          body: "The workflow can capture basics like service type (recurring weekly, green-to-clean, equipment repair, one-time cleanup), property details, preferred callback window, and whether the homeowner wants same-day help or is still comparing options. That gives the office context without forcing a long robotic intake.",
        },
        {
          icon: Route,
          title: "Routing by urgency so same-day intent escalates fast",
          body: "Not every fresh lead is an emergency. The workflow should separate homeowners who need help now — a pump failure, a green pool before a party, an equipment leak — from quote shoppers, opening-season comparisons, and referrals that can follow a normal nurture path. Urgent signals route to the office immediately; everything else gets appropriate follow-through.",
        },
        {
          icon: ArrowUpRight,
          title: "Clean office handoff with context attached",
          body: "When a homeowner replies, asks about availability, or wants to schedule a visit, the office inherits the conversation with source, service type, urgency notes, and prior messages attached instead of reconstructing the lead from a late callback after route hours.",
        },
        {
          icon: BarChart3,
          title: "Visibility into where fresh pool-service demand leaks first",
          body: "Owners can finally see whether good service opportunities are being lost because first response is too slow, follow-up ends too early, referral inquiries get buried, quote requests sit unowned, or nobody clearly owns fresh leads while techs are in backyards all day.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the pool-service cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for pool service companies",
          values: [
            "Owners evaluating the broader operating system across lead follow-up, recurring-route reminders, seasonal campaigns, quote nurture, reviews, and phone handling",
            "Explains the full pool-service automation stack instead of isolating the early-funnel inquiry-response stage",
          ],
        },
        {
          label: "What to automate first for pool service companies",
          values: [
            "Owners deciding which single workflow should be the first pool-service automation project",
            "Helps choose between missed-call recovery, repair quote follow-up, recurring-route retention, seasonal outreach, and heavier live phone coverage before a broader rollout",
          ],
        },
        {
          label: "AI lead follow-up for pool service companies",
          values: [
            "Companies that know fresh inquiries across all channels are leaking before anyone turns them into booked visits or scheduled repairs",
            "Covers the full fresh-lead stage: web forms, quote requests, missed-call recoveries, referral inquiries, light qualification, short nurture, urgency routing, and office handoff before the first visit exists",
          ],
        },
        {
          label: "Quote follow-up automation for pool service companies",
          values: [
            "Companies that already quote consistently but let too many sent green-to-clean or repair quotes die afterward",
            "Starts after pricing or scope already exists and focuses on reminder timing, seasonal urgency, and stale-quote recovery",
          ],
        },
        {
          label: "Recurring-route retention for pool service companies",
          values: [
            "Companies losing existing weekly or biweekly accounts between visits or at renewal time",
            "Handles retention reminders, lapse recovery, and renewal sequences for established service plans, not fresh-lead inquiry response",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your pool service company?",
      subtitle:
        "Best fit when fresh demand comes from multiple channels, the office cannot keep up during route hours or opening season, and the gap between inquiry and first real conversation is where jobs are quietly dying.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are paying for Google ads, LSAs, SEO, or referrals, but first response is still measured in hours instead of minutes across most channels",
            "Fresh inquiries land in too many places — web forms, texts, missed-call logs, referral messages, ad leads — and ownership gets fuzzy fast once techs are on route",
            "Your company loses more jobs to slow follow-up than to bad water chemistry or weak repair estimates",
            "Opening season creates a surge of new inquiries that the office cannot absorb while also managing the existing route schedule",
            "You need urgency routing so emergency repairs and green-to-clean rushes escalate fast while quote shoppers and referrals get appropriate nurture",
            "One tighter early-funnel workflow would pay off faster than trying to automate the whole pool-service operation at once",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your company already responds to every inquiry within a few minutes consistently across all channels",
            "The bigger leak is lapsed recurring accounts, stale repair quotes, seasonal campaign timing, or review generation rather than first response",
            "Inquiry volume is too low for a dedicated lead-follow-up workflow to matter yet",
            "Nobody agrees on who owns new inquiries, so there is no stable trigger to automate",
            "You want automation making water-chemistry recommendations, custom pricing, or dispatch routing without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep pool-service lead follow-up useful",
      subtitle:
        "The goal is disciplined speed-to-lead, clean urgency routing, and cleaner handoff — not robotic chasing.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate on top of chaotic lead ownership",
          body: "If web forms, Google leads, referral texts, missed-call logs, and ad leads all land in different places with no clear owner, the workflow cannot rescue everything by itself. The business still needs one reliable point where a new inquiry becomes real — especially when the office is already juggling route admin and recurring-service coordination.",
        },
        {
          icon: MessageSquare,
          title: "Keep the first reply short and practical",
          body: "A homeowner with a green pool or a broken pump does not need a long automated brochure. They need proof that someone saw the request, one clear next step, and a sense that the company is responsive even during peak season.",
        },
        {
          icon: Phone,
          title: "Route urgency signals to a human fast",
          body: "If the prospect says there is active equipment failure, a green pool before a scheduled event, or a safety concern near the pool area, the conversation should route back to the office immediately. The broader workflow should identify and escalate urgent intent, not try to own the resolution end to end.",
        },
        {
          icon: Clock3,
          title: "Separate fresh-lead nurture from quote reminders and recurring-route retention",
          body: "A brand-new pool-service inquiry should not get the same cadence as a sent repair quote or a recurring-service renewal reminder. Strong systems keep those stages separate so the message still fits the moment — especially when seasonal timing creates different urgency levels across different lead types.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical pool-service lead-follow-up workflow usually works",
      subtitle:
        "The strongest version is simple: catch every fresh inquiry, respond quickly, keep the homeowner warm, route by urgency, and hand the conversation off at the right point.",
      blocks: [
        {
          heading: "A new inquiry arrives from any real channel",
          body: "The homeowner fills out a web form, submits a quote request for a green-to-clean or repair job, gets referred by a neighbor, comes through a Google ad, or has a missed call recovered by the text-back layer. The workflow catches that fresh demand right away instead of waiting for whoever notices first after route hours settle down.",
        },
        {
          heading: "The first reply lands while the homeowner still remembers reaching out",
          body: "That first message acknowledges the request and gives one clear next step: reply with the service issue, confirm the address, request a callback, or move toward scheduling. For urgent signals — an equipment failure, a green pool before guests arrive — the reply should also confirm that someone is on it now.",
        },
        {
          heading: "The workflow routes by urgency",
          body: "Same-day emergencies — pump failures, active leaks, safety issues near the pool — route to the office or on-call tech immediately. Quote shoppers, opening-season comparisons, and referrals enter the normal short nurture path. This keeps the urgent escalation pathway intact while making sure every other fresh lead also gets follow-through.",
        },
        {
          heading: "Non-responders enter a short follow-up sequence",
          body: "If there is no reply, the system follows up over the next few hours and days with useful reminders instead of disappearing after one touch. This is usually where manual follow-up breaks because route-day fieldwork, recurring-service admin, and opening-season dispatch take over the office.",
        },
        {
          heading: "High-intent replies route back to the office with context attached",
          body: "Once the homeowner replies, asks about timing, or wants to schedule a visit, the office inherits the conversation with source, service type, urgency level, and prior messages attached. That creates a faster handoff than reconstructing the lead from a late callback after the techs come in from the field.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published pool-service-specific lead-follow-up case study on the site yet. The honest support comes from the live pool-service cluster plus published lead-response and structured-follow-up proof already live.",
      studies: [
        {
          industry: "Pool-service parent page",
          headline: "The broader pool-service guide already isolates lead follow-up as one of the clearest workflow families",
          body: "That parent page explicitly frames missed-call recovery, new-lead follow-up, repair quote nurture, recurring-route reminders, seasonal outreach, and review automation as separate parts of the operating system. This child page narrows the full fresh-lead inquiry-response stage instead of re-explaining the whole stack.",
          link: "/ai-automation-for-pool-service-companies",
        },
        {
          industry: "Lead-response proof",
          headline: "The service-business lead-follow-up guide already proves the same speed-to-lead and handoff pattern this workflow depends on",
          body: "That page covers instant response, structured follow-up, and clean human handoff in a broader service-business context. This pool-service child keeps those mechanics but grounds them in route-day field realities, opening-season surges, and the mix of recurring versus one-time inquiry types that define pool-service demand.",
          link: "/ai-lead-follow-up-for-service-businesses",
        },
        {
          industry: "Published CRM proof",
          headline: "The e-commerce CRM case study proves why neglected leads and weak follow-up quietly destroy recoverable revenue",
          body: "That project is not a pool-service build, but it is direct proof that structured follow-up, ownership, and reactivation matter once inquiries start piling up. The same operating logic supports pool-service inquiry response before the first visit or repair job is booked.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for pool service companies", href: "/ai-automation-for-pool-service-companies" },
        { label: "What to automate first for pool service companies", href: "/what-to-automate-first-for-pool-service-companies" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "All guides", href: "/guides" },
        { label: "All case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader AI automation page for pool service companies?",
      answer:
        "The parent page covers the full pool-service automation stack: missed-call recovery, lead follow-up, repair quote nurture, recurring-route reminders, seasonal campaigns, and review automation. This page narrows to the fresh-lead stage only — the workflow that catches every new inquiry, responds fast, qualifies lightly, routes by urgency, and hands the conversation to the office before the first visit or repair job is booked.",
    },
    {
      question: "What does a focused pool-service lead-follow-up build usually cost?",
      answer:
        "A focused lead-follow-up workflow usually lands around $1.5K-$3.5K depending on how many channels are involved, how much qualification and urgency-routing logic is needed, and whether it needs to connect into an existing CRM, scheduling tool, or dispatch process. Broader pool-service systems cost more when they also include recurring-route reminders, seasonal campaigns, quote follow-up, and phone-answering layers.",
    },
    {
      question: "Can this work with my current pool-service software or CRM?",
      answer:
        "Usually yes, as long as there is a reliable way to catch new inquiries from each channel and hand them into your current communication or scheduling layer. API access helps, but practical workflows can also work through forms, webhooks, synced inboxes, or other stable trigger points around the inquiry-response stage.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main ROI is fewer fresh inquiries dying before anyone follows up properly, more real booking or service conversations created from the same ad, referral, and organic volume, and less office time wasted manually chasing homeowners after the moment that mattered already passed — especially during opening-season surges when volume spikes and the office is already overloaded.",
    },
    {
      question: "Will this replace my office staff?",
      answer:
        "No. It removes repetitive first-touch and reminder work across all inquiry channels. Humans still handle unusual service situations, pricing nuance, dispatch judgment, trust-sensitive conversations, and the moments where a real person closes or schedules the work.",
    },
  ],
  faqSubtitle:
    "Practical questions from pool service companies that know fresh leads are leaking somewhere between the first inquiry and the first booked visit",
  ctaHeading:
    "Want faster follow-up on every new pool-service inquiry before it goes cold?",
  ctaText:
    "Book a 30-minute call. We will look at your current inquiry flow across web forms, quote requests, missed calls, referrals, and ads, where fresh pool-service leads are actually stalling, and map the smallest workflow that would fix the leak without overbuilding it.",
  ctaSubtext:
    "No inflated close-rate promises. Just a practical recommendation based on your route schedule, seasonal demand, and current follow-up discipline.",
  relatedLinks: [
    { label: "AI automation for pool service companies", href: "/ai-automation-for-pool-service-companies" },
    { label: "What to automate first for pool service companies", href: "/what-to-automate-first-for-pool-service-companies" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "Best AI automation for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
