import {
  DollarSign,
  Phone,
  Bot,
  CalendarCheck,
  Clock,
  CheckCircle2,
  XCircle,
  Calculator,
  AlertTriangle,
  BadgeDollarSign,
  ArrowUpRight,
  Workflow,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-phone-answering-cost-small-business",
  metaTitle:
    "AI Phone Answering Cost for Small Business — Real Pricing Guide | Dmytro AI",
  metaDescription:
    "What does AI phone answering cost for a small business? Practical pricing ranges for live call coverage, after-hours answering, booking, CRM handoff, and when a lighter fallback is cheaper than a full phone workflow.",
  badgeText: "Phone Answering Pricing",
  badgeIcon: DollarSign,
  h1: "AI Phone Answering Cost for Small Business",
  heroIntro:
    "If you are pricing AI phone answering, the useful question is not just \"What is the software fee?\" It is \"What phone problem am I actually solving?\" A small business that only needs after-hours coverage or routine intake capture should not budget like a business that wants live booking, qualification, transfer logic, CRM logging, and multi-location routing. AI phone answering cost is mostly driven by workflow scope, handoff complexity, and whether the system only answers or actually completes useful next steps on the call. This page breaks down realistic small-business pricing so you can budget the narrowest phone-answering build that protects revenue without overbuying a full AI receptionist project.",
  heroSubtext:
    "Below: realistic setup and monthly cost ranges, what pushes price up, when a lighter missed-call workflow is enough, and how to budget for live phone coverage without pretending every call needs the same automation layer.",
  sections: [
    {
      type: "table",
      title: "What AI phone answering usually costs",
      subtitle:
        "These are practical small-business ranges for the most common phone-answering builds:",
      headers: ["Build Cost", "Monthly Running Cost", "Typical Timeline"],
      rows: [
        {
          label: "Basic after-hours answering or overflow call coverage",
          values: ["$2K–$3.2K", "$50–$140", "4–7 days"],
        },
        {
          label: "Routine inbound answering with CRM logging",
          values: ["$2.5K–$4K", "$60–$180", "1–2 weeks"],
        },
        {
          label: "AI phone answering with appointment booking",
          values: ["$3K–$4.8K", "$80–$220", "1–3 weeks"],
        },
        {
          label: "Answering + qualification + human transfer rules",
          values: ["$3.5K–$5.5K", "$90–$260", "2–3 weeks"],
        },
        {
          label: "Multi-location or dispatch-aware phone workflow",
          values: ["$4.5K–$7K+", "$120–$320+", "2–4 weeks"],
        },
      ],
    },
    {
      type: "cards",
      title: "What makes the price go up",
      subtitle:
        "The monthly subscription is only one piece. The real cost is determined by workflow complexity:",
      items: [
        {
          icon: Phone,
          title: "How much the agent must do live on the call",
          body: "A system that only answers routine questions and captures a callback is cheaper than one that must book appointments, qualify urgency, route to the right person, and keep the handoff clean when the caller is messy or emotional.",
        },
        {
          icon: CalendarCheck,
          title: "Whether it only answers or also books",
          body: "Booking adds real complexity: appointment types, buffers, service areas, reschedules, confirmation messages, and no-show prevention rules. That extra value usually deserves a higher setup range than simple answering alone.",
        },
        {
          icon: Workflow,
          title: "How much routing and fallback logic is involved",
          body: "Emergency calls, VIP routing, after-hours escalation, office-hours branching, and human transfer rules all add setup time because the workflow has to fail safely, not just sound impressive in a demo.",
        },
        {
          icon: Bot,
          title: "How tightly the call outcome must connect to your stack",
          body: "CRM creation, transcript logging, summaries, SMS follow-up triggers, calendar updates, dispatcher alerts, and pipeline routing all add useful depth. They also add real implementation scope.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this spend makes sense — and when it does not",
      subtitle:
        "AI phone answering is a strong fit when missed calls are already expensive. It is weak when the phone is not the bottleneck:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth paying for",
          variant: "green",
          items: [
            "Inbound calls are a real lead or booking source, not just low-value support noise",
            "Calls get missed during jobs, after hours, lunch gaps, or front-desk overload",
            "Routine questions or routine intake make up a meaningful share of call volume",
            "One or two saved opportunities per month would cover a meaningful slice of the cost",
            "You want every call logged, summarized, and routed instead of disappearing into voicemail",
          ],
        },
        {
          icon: XCircle,
          heading: "Probably overkill for now",
          variant: "neutral",
          items: [
            "Call volume is low and callbacks already happen quickly",
            "Most callers need senior human judgment from the first minute",
            "Your team has not agreed on booking, transfer, or escalation rules",
            "A lighter missed-call text-back or manual callback process would fix most of the leak first",
            "You are comparing a finished phone workflow against a bare SaaS plan and expecting the numbers to match",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to budget AI phone answering without wasting money",
      subtitle:
        "The safest buying move is to pay for the smallest live-phone layer that fixes the leak first:",
      items: [
        {
          icon: Calculator,
          title: "Start with one call path, not every scenario",
          body: "If your biggest leak is after-hours intake or routine inbound booking, start there. You do not need a full do-everything receptionist build on day one if one narrower answering layer already protects most of the missed demand.",
        },
        {
          icon: BadgeDollarSign,
          title: "Budget monthly software, usage, and maintenance honestly",
          body: "Phone numbers, telephony, voice platform usage, LLM calls, hosting, CRM actions, and optional SMS follow-up all contribute to the monthly number. None of that is unusual, but it should be visible before launch.",
        },
        {
          icon: Clock,
          title: "Leave room for live tuning after launch",
          body: "Good phone workflows nearly always need real-call tuning after launch. Transfer thresholds, booking language, after-hours phrasing, and summary formats get sharper after live callers expose the rough edges.",
        },
        {
          icon: ArrowUpRight,
          title: "Compare the spend to recovered call value, not to zero",
          body: "The right benchmark is not \"could I keep voicemail for free?\" It is \"what is it already costing me when good calls hit voicemail, wait too long for a callback, or never make it into the CRM correctly?\" That hidden leakage is the real comparison point.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "This page stays grounded in published proof already on the site. The exact buyer question is pricing, but the value logic comes from real phone-demand recovery and workflow economics.",
      studies: [
        {
          industry: "Restaurant / inbound phone coverage",
          headline: "Paris Cafe shows why owners pay for live phone coverage at all",
          body: "The Paris Cafe case study proves the economic core behind this pricing page: after-hours coverage jumped from 0% to 100% and management recovered roughly 15 hours per week. Different vertical, same reason small businesses pay for live phone answering instead of passive voicemail.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Phone workflow fit",
          headline: "The service-business phone-answering page maps the layer you are actually budgeting for",
          body: "The broader phone-answering guide explains where live answering beats voicemail or an answering service, what callers expect, and when the business has enough routine call volume to justify a heavier phone layer. This pricing page stays narrower on budget and scope.",
          link: "/ai-phone-answering-for-service-businesses",
        },
        {
          industry: "Broader voice economics",
          headline: "The voice-agent cost page covers the heavier builds this page should not be confused with",
          body: "The AI voice-agent cost guide is useful when the workflow expands into qualification, richer conversational logic, and more involved booking/routing behavior. This page is narrower on live answering specifically, so small businesses do not over-budget for a category they may not need yet.",
          link: "/ai-voice-agent-cost-small-business",
        },
      ],
      links: [
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "AI phone answering setup for small business", href: "/ai-phone-answering-setup-small-business" },
        { label: "AI phone answering ROI for small business", href: "/ai-phone-answering-roi-small-business" },
        { label: "AI voice agent cost for small business", href: "/ai-voice-agent-cost-small-business" },
        { label: "Missed call text-back cost for small business", href: "/missed-call-text-back-cost-small-business" },
        { label: "AI voice agent vs answering service for small business", href: "/ai-voice-agent-vs-answering-service-for-small-business" },
      ],
    },
    {
      type: "prose",
      title: "What owners usually misunderstand about AI phone answering cost",
      subtitle:
        "These assumptions create bad budgeting decisions and bloated builds:",
      blocks: [
        {
          heading: "Confusing platform fees with a finished phone workflow",
          body: "A low monthly platform number is not the same thing as a production-ready phone workflow. The real work is call design, transfer logic, booking rules, CRM logging, escalation paths, and testing how the system behaves when callers are unclear or upset.",
        },
        {
          heading: "Buying a heavier voice agent when routine phone coverage is the real need",
          body: "Many small businesses price a broad AI voice agent when their real leak is narrower: missed routine calls, after-hours intake, or simple appointment capture. If that is the case, phone answering can be the cheaper and cleaner first layer.",
        },
        {
          heading: "Ignoring the cost of delayed callbacks because it feels invisible",
          body: "Voicemail looks free because there is no invoice attached to missed demand. But callback lag, poor note quality, dropped opportunities, and staff time spent chasing old voicemails already have a cost. Useful budgeting compares the phone workflow against that leak, not against zero.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does AI phone answering cost for a small business?",
      answer:
        "A focused AI phone-answering setup for a small business often lands around $2.5K-$4K for implementation, with monthly running cost commonly in the $60-$180 range before heavier call volume, booking complexity, or richer routing logic pushes it higher.",
    },
    {
      question: "How is this different from the AI voice agent cost page?",
      answer:
        "This page stays narrower on live phone answering: answering routine inbound calls, covering after-hours demand, logging outcomes, and optionally booking simple calls. The broader AI voice-agent cost page includes heavier conversational workflows like richer lead qualification and more involved routing logic.",
    },
    {
      question: "What usually makes AI phone answering expensive?",
      answer:
        "Booking rules, human transfer conditions, CRM integration, multi-location routing, dispatcher logic, after-hours escalation, and unclear internal process rules. The more the system has to decide live on the call, the more implementation and testing it needs.",
    },
    {
      question: "Can I start with a smaller phone-answering workflow and expand later?",
      answer:
        "Yes. That is usually the best approach. Start with one bounded use case such as after-hours answering, routine booking intake, or overflow call handling. Once that layer is working, expand into richer qualification, more call paths, or deeper CRM and scheduling logic.",
    },
    {
      question: "How do I know if the price is worth it?",
      answer:
        "Look at how many inbound calls are currently missed, delayed, or handled inconsistently, then compare that leak against one or two recovered opportunities per month plus any front-desk or callback labor saved. If that modest lift covers a meaningful part of the spend, the economics are usually credible.",
    },
  ],
  faqSubtitle:
    "Practical budgeting answers for owners comparing live phone coverage against voicemail, callbacks, and heavier voice-agent builds",
  ctaHeading: "Want a realistic quote for AI phone answering?",
  ctaText:
    "Book a 30-minute call. We will look at your inbound call pattern, after-hours gaps, booking needs, and handoff rules, then give you a fixed-price range for the narrowest phone-answering workflow worth implementing first.",
  ctaSubtext:
    "No bloated AI receptionist pitch. Just a practical scope and pricing conversation.",
  relatedLinks: [
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "AI phone answering setup for small business", href: "/ai-phone-answering-setup-small-business" },
    { label: "AI phone answering ROI for small business", href: "/ai-phone-answering-roi-small-business" },
    { label: "AI phone answering setup vs. DIY for small business", href: "/ai-phone-answering-setup-vs-diy-small-business" },
    { label: "AI voice agent cost for small business", href: "/ai-voice-agent-cost-small-business" },
    { label: "Missed call text-back cost for small business", href: "/missed-call-text-back-cost-small-business" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
