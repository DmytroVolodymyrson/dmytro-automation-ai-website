import {
  DollarSign,
  Phone,
  Bot,
  Workflow,
  CalendarCheck,
  CheckCircle2,
  XCircle,
  Calculator,
  AlertTriangle,
  Clock,
  ArrowUpRight,
  BadgeDollarSign,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-voice-agent-cost-small-business",
  metaTitle:
    "AI Voice Agent Cost for Small Business — Real Pricing Guide | Dmytro AI",
  metaDescription:
    "What does an AI voice agent cost for a small business? Practical pricing ranges for phone answering, lead qualification, booking, CRM handoff, and the narrowest voice workflow worth paying for first.",
  badgeText: "Voice Agent Pricing",
  badgeIcon: DollarSign,
  h1: "AI Voice Agent Cost for Small Business",
  heroIntro:
    "If you are pricing AI voice agents, the first mistake is treating every phone workflow like the same product. A small business that only needs missed-call recovery or basic after-hours phone coverage should not buy the same build as a business that wants live lead qualification, appointment booking, CRM updates, transfer logic, and human fallback for edge cases. Voice-agent pricing is mostly a scope question. This page breaks down realistic small-business pricing for the most common voice-agent setups so you can budget the narrowest workflow that actually protects revenue instead of paying for a bloated AI receptionist fantasy.",
  heroSubtext:
    "Below: what different voice-agent builds usually cost, what pushes the price up, when a simpler phone workflow is enough, and how to budget without overbuying.",
  sections: [
    {
      type: "table",
      title: "What an AI voice agent usually costs",
      subtitle:
        "These are realistic small-business ranges for the most common voice-agent builds:",
      headers: ["Build Cost", "Monthly Running Cost", "Typical Timeline"],
      rows: [
        {
          label: "Missed-call recovery or simple after-hours voice workflow",
          values: ["$1.8K–$3K", "$40–$120", "4–7 days"],
        },
        {
          label: "Basic AI phone answering with CRM logging",
          values: ["$2.5K–$4K", "$60–$180", "1–2 weeks"],
        },
        {
          label: "Lead qualification and routing voice agent",
          values: ["$3K–$5K", "$75–$220", "1–3 weeks"],
        },
        {
          label: "Voice agent that qualifies and books routine calls",
          values: ["$3.5K–$5.8K", "$90–$260", "2–3 weeks"],
        },
        {
          label: "Dispatch-aware or multi-location voice workflow",
          values: ["$4.5K–$7K+", "$120–$320+", "2–4 weeks"],
        },
      ],
    },
    {
      type: "cards",
      title: "What makes the price go up",
      subtitle:
        "The expensive part is usually not 'AI' in the abstract. It is workflow complexity:",
      items: [
        {
          icon: Phone,
          title: "How much the agent must handle on the call",
          body: "A voice agent that just answers, confirms basic details, and sends the caller to the right next step is cheaper than one that must qualify, book, transfer, summarize, and recover smoothly when callers go off script.",
        },
        {
          icon: Workflow,
          title: "How much routing logic and fallback logic is involved",
          body: "The more the system has to decide who gets booked, what counts as a good lead, which calls should transfer to a human, and what happens when the caller is unclear, the more time it takes to build and test safely.",
        },
        {
          icon: Bot,
          title: "How tightly it must connect to your systems",
          body: "CRM creation, transcript logging, call summaries, booking confirmations, dispatcher alerts, calendar rules, and follow-up triggers all add value. They also add setup time because the workflow has to behave predictably inside your existing stack.",
        },
        {
          icon: CalendarCheck,
          title: "Whether it only answers or also books",
          body: "Phone answering is one layer. Booking adds another. Once the voice agent needs appointment types, buffers, service-area logic, reschedules, and no-show prevention rules, the build becomes more valuable and more expensive.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this spend makes sense — and when it does not",
      subtitle:
        "This page is for businesses with a real phone-intake problem, not owners shopping for an AI novelty project:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth paying for",
          variant: "green",
          items: [
            "Phone calls are a meaningful lead source, not just support noise",
            "You regularly miss calls after hours, during jobs, or when the front desk is overloaded",
            "One extra booked job, consult, or estimate per week would matter financially",
            "Your intake flow is repeatable enough to automate routine first-touch calls safely",
            "You want the call outcome logged and routed properly instead of disappearing into voicemail",
          ],
        },
        {
          icon: XCircle,
          heading: "Probably overkill for now",
          variant: "neutral",
          items: [
            "Call volume is low and your team already returns everything quickly",
            "Most calls need senior human judgment from the first minute",
            "Your team has not agreed on qualification, transfer, or booking rules",
            "You mainly need a better missed-call text-back or callback process, not a full conversational workflow",
            "You are comparing a production voice workflow to a bare SaaS subscription and expecting them to cost the same",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to budget this without wasting money",
      subtitle:
        "The safest buying move is to pay for the smallest phone workflow that fixes the leak first:",
      items: [
        {
          icon: Calculator,
          title: "Start with one call path, not every scenario",
          body: "If your main leak is missed after-hours leads or repetitive inbound qualification, start there. You do not need a giant do-everything AI receptionist if one focused phone workflow would solve most of the problem.",
        },
        {
          icon: BadgeDollarSign,
          title: "Budget monthly software and usage honestly",
          body: "Telephony, voice platform, transcription, LLM usage, hosting, and optional CRM or SMS triggers all contribute to the monthly number. Those costs are usually manageable for a small business, but they should be visible before launch instead of treated like surprise add-ons.",
        },
        {
          icon: Clock,
          title: "Leave room for testing and tuning",
          body: "Good voice agents nearly always need live tuning once real callers start using them. Prompt wording, transfer conditions, booking thresholds, and transcript summaries usually sharpen after launch rather than before it.",
        },
        {
          icon: ArrowUpRight,
          title: "Compare the price to recovered call value, not to zero",
          body: "The most useful sanity check is simple: if one or two recovered qualified calls per month would cover a meaningful share of the cost, the economics are credible. Compare the system against missed opportunities and callback labor, not against the illusion that current leakage is free.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "This page stays grounded in published proof already on the site. The exact workflow differs, but the economics are the same: faster answer, cleaner intake, and reliable handoff create the value.",
      studies: [
        {
          industry: "Restaurant / inbound phone coverage",
          headline: "Paris Café proves why owners pay for voice coverage in the first place",
          body: "The Paris Café case study shows the core value behind voice-agent pricing: after-hours calls stopped dying, response speed improved, and management recovered roughly 15 hours per week. Different vertical, same commercial logic for inbound phone coverage.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Lead qualification / call workflow",
          headline: "The voice-qualification guide maps the logic your budget really pays for",
          body: "The lead-qualification page already explains the costly part of the work: what the agent asks, what counts as a qualified call, what gets booked, and where a manual callback still wins. That workflow design is what separates a cheap phone demo from a real business system.",
          link: "/ai-voice-agent-lead-qualification",
        },
        {
          industry: "ROI / economics",
          headline: "The ROI page shows how to pressure-test the spend",
          body: "The voice-agent ROI guide frames the economic decision correctly: compare setup and monthly cost against recovered calls, callback labor, and faster booking. This pricing page stays narrower on budgeting and scope instead of payback math.",
          link: "/ai-voice-agent-roi-for-lead-follow-up",
        },
      ],
      links: [
        { label: "AI voice agent for lead qualification", href: "/ai-voice-agent-lead-qualification" },
        { label: "AI voice agent setup for lead qualification", href: "/ai-voice-agent-setup-for-lead-qualification" },
        { label: "AI voice agent ROI for lead follow-up", href: "/ai-voice-agent-roi-for-lead-follow-up" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
      ],
    },
    {
      type: "prose",
      title: "What small businesses usually get wrong about voice-agent pricing",
      subtitle:
        "These assumptions create bad buying decisions and disappointing launches:",
      blocks: [
        {
          heading: "Confusing platform price with finished workflow price",
          body: "A low per-minute or monthly platform price is not the same thing as a production-ready voice workflow. The real work is in call design, routing logic, CRM integration, booking rules, fallback behavior, and testing what happens when callers are messy or unclear.",
        },
        {
          heading: "Buying a full AI receptionist when a narrower phone workflow would do",
          body: "Many owners overspend by trying to automate every inbound call type on day one. If your biggest leak is after-hours lead capture or routine qualification, start there. Prove that first layer before adding broader front-desk scope.",
        },
        {
          heading: "Ignoring the cost of slow callbacks because it feels invisible",
          body: "Manual callback delay rarely shows up as a clean invoice, so owners treat it like free. It is not free. Missed calls, low contact rates, and staff time spent chasing voicemails already have a cost. The useful question is whether the voice workflow costs less than the leak it fixes.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does an AI voice agent cost for a small business?",
      answer:
        "For most small businesses, a focused voice-agent build usually lands somewhere between $2.5K and $5K depending on call complexity, routing logic, booking rules, and CRM integration. Monthly running costs often sit in the $60-$220 range before heavier call volume or broader workflow scope pushes the number higher.",
    },
    {
      question: "Why is this different from the AI voice agent ROI page?",
      answer:
        "The ROI page is about payback math: recovered calls, callback labor, and conservative economic modeling. This page stays narrow on the budgeting decision: realistic price ranges, what pushes the cost up, and how to avoid paying for voice complexity you do not need yet.",
    },
    {
      question: "What usually makes a voice-agent project expensive?",
      answer:
        "Booking logic, transfer logic, CRM integration, multiple call paths, qualification rules, dispatch or service-area constraints, after-hours escalation, and weak internal process clarity. The more decisions the system must make live on the call, the more setup and testing it needs.",
    },
    {
      question: "Can I start with a smaller voice workflow and expand later?",
      answer:
        "Yes. That is usually the smartest move. Start with one bounded phone problem such as after-hours capture, routine qualification, or missed-call recovery. Once the first workflow is working and producing value, expand into booking, richer routing, or broader phone coverage.",
    },
    {
      question: "How do I know whether the price is worth it?",
      answer:
        "Look at how many good inbound calls currently hit voicemail, wait too long for a callback, or get handled inconsistently. Then compare the project cost against one or two recovered qualified opportunities per month plus any staff time saved on callbacks and note cleanup. If that modest lift covers a meaningful share of the spend, the economics are usually credible.",
    },
  ],
  faqSubtitle:
    "Practical answers for small businesses budgeting AI voice-agent implementation",
  ctaHeading: "Want a realistic quote for a voice-agent workflow?",
  ctaText:
    "Book a 30-minute call. We will look at your call volume, missed-call patterns, booking or routing rules, and where phone demand is leaking now, then give you a fixed-price range for the narrowest voice workflow worth doing first.",
  ctaSubtext:
    "No inflated AI package. Just a practical scope and cost conversation.",
  relatedLinks: [
    { label: "AI voice agent for lead qualification", href: "/ai-voice-agent-lead-qualification" },
    { label: "AI voice agent setup for lead qualification", href: "/ai-voice-agent-setup-for-lead-qualification" },
    { label: "AI voice agent ROI for lead follow-up", href: "/ai-voice-agent-roi-for-lead-follow-up" },
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
