import {
  DollarSign,
  Clock,
  MessageSquare,
  Workflow,
  Bot,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  Calculator,
  Users,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-cost-small-business",
  metaTitle:
    "AI Lead Follow-Up Cost for Small Business — Real Pricing Guide | Dmytro AI",
  metaDescription:
    "What does AI lead follow-up cost for a small business? Practical pricing ranges for instant response, multi-step follow-up, CRM integration, and when the investment actually pays off.",
  badgeText: "Lead Follow-Up Pricing",
  badgeIcon: DollarSign,
  h1: "AI Lead Follow-Up Cost for Small Business",
  heroIntro:
    "If you are looking up lead follow-up pricing, the useful question is not 'how cheap can I get automation?' It is 'what level of follow-up problem am I actually solving?' A small business that only needs instant response to web leads should not buy the same system as a business that needs multi-channel nurture, missed-call recovery, CRM routing, and owner alerts. This page breaks down realistic cost ranges for lead follow-up automation specifically — not broad AI transformation pricing, and not voice-agent ROI alone — so you can budget the right first build instead of overbuying or underbuilding.",
  heroSubtext:
    "Below: what different lead follow-up builds usually cost, what drives the price up, where small businesses overspend, and when the math makes sense versus when a simpler workflow is enough.",
  sections: [
    {
      type: "table",
      title: "What lead follow-up automation usually costs",
      subtitle:
        "These are realistic small-business ranges for the most common lead-response and follow-up builds:",
      headers: ["Build Cost", "Monthly Running Cost", "Typical Timeline"],
      rows: [
        {
          label: "Instant response only",
          values: ["$800–$1.5K", "$20–$60", "3–5 days"],
        },
        {
          label: "Form lead follow-up workflow",
          values: ["$1.2K–$2.5K", "$20–$80", "4–7 days"],
        },
        {
          label: "Multi-step email + SMS lead follow-up",
          values: ["$1.8K–$3.5K", "$30–$120", "1–2 weeks"],
        },
        {
          label: "Lead follow-up with CRM routing and owner alerts",
          values: ["$2.5K–$4.5K", "$50–$150", "1–3 weeks"],
        },
        {
          label: "Missed-call recovery + lead follow-up stack",
          values: ["$2K–$4K", "$30–$120", "1–2 weeks"],
        },
        {
          label: "Advanced follow-up with AI qualification layer",
          values: ["$3.5K–$6K+", "$75–$250", "2–4 weeks"],
        },
      ],
    },
    {
      type: "cards",
      title: "What makes the price go up",
      subtitle:
        "Lead follow-up pricing is mostly driven by workflow complexity, not by the word AI in the proposal:",
      items: [
        {
          icon: MessageSquare,
          title: "How many channels are involved",
          body: "One email sequence is cheaper than email plus SMS plus missed-call recovery. Every additional channel adds message logic, suppression rules, and more edge cases to test.",
        },
        {
          icon: Workflow,
          title: "Whether the workflow only responds or also routes",
          body: "A simple 'thanks, we got your inquiry' sequence is inexpensive. A system that tags lead source, assigns owner, updates pipeline stage, triggers tasks, and stops when a human replies costs more because it actually manages the handoff.",
        },
        {
          icon: Bot,
          title: "How much AI is really needed",
          body: "Rule-based follow-up is often enough. AI classification, reply drafting, or qualification logic can add value, but it also adds testing, prompt work, and failure handling. If deterministic rules solve the problem, keep it simple.",
        },
        {
          icon: Users,
          title: "How messy the human process is",
          body: "If your team does not agree on who owns new leads, what counts as qualified, or when follow-up should stop, the project gets more expensive because the real work is workflow design before any automation is built.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this is worth paying for — and when it is overkill",
      subtitle:
        "This page is for businesses with a real speed-to-lead problem, not businesses shopping for automation because it sounds modern:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth the investment",
          variant: "green",
          items: [
            "You regularly lose inquiries because response is slow or inconsistent",
            "One recovered job, consult, or estimate is worth enough to matter financially",
            "Lead volume is high enough that manual follow-up keeps slipping",
            "Your team already knows the offer and handoff logic — the problem is execution discipline",
            "You want one narrow workflow that pays back quickly before expanding",
          ],
        },
        {
          icon: XCircle,
          heading: "Probably overkill for now",
          variant: "neutral",
          items: [
            "Lead volume is low enough that same-day manual follow-up is still easy",
            "The main problem is weak offer positioning, not lead response",
            "No one owns the pipeline yet and the process changes every week",
            "You want a fully custom AI stack before proving the simpler workflow",
            "You are comparing custom follow-up pricing to a generic SaaS subscription and expecting them to match",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to budget this without wasting money",
      subtitle:
        "The easiest way to overspend is to buy too much system before proving the bottleneck:",
      items: [
        {
          icon: Calculator,
          title: "Start with the smallest workflow that protects revenue",
          body: "If the main leak is slow first response, buy instant response and short follow-up first. Do not jump straight to full AI qualification unless the simpler workflow clearly leaves money on the table.",
        },
        {
          icon: AlertTriangle,
          title: "Do not ignore monthly tool costs",
          body: "Most follow-up systems also need CRM seats, email/SMS sending, hosting, and sometimes AI usage. The monthly stack is usually manageable, but it should be budgeted up front instead of treated like a surprise after launch.",
        },
        {
          icon: Clock,
          title: "Plan for tuning after launch",
          body: "Good follow-up gets sharper over the first two to four weeks. Timing, copy, escalation rules, and stop conditions almost always need refinement after the workflow starts touching real leads.",
        },
        {
          icon: TrendingUp,
          title: "Compare cost to one recovered opportunity per month",
          body: "For most service businesses, that is the right sanity check. If one extra job or booked consultation per month would cover a meaningful share of the build cost, the project is usually economically credible.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "This page uses direct and adjacent proof already published on the site. The exact vertical may differ, but the speed-to-lead and follow-up economics are the same:",
      studies: [
        {
          industry: "Restaurant / instant response",
          headline: "Paris Café proves the value of faster inquiry handling",
          body: "The Paris Café case study shows response time on web leads dropping from hours to under 60 seconds once the workflow was automated. That is the core economic logic behind lead follow-up pricing: response speed changes outcomes.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce / high-volume follow-up",
          headline: "WheelsFeels shows what follow-up workflow complexity looks like",
          body: "The e-commerce CRM case study is adjacent proof for the higher end of pricing. Once follow-up touches thousands of leads, routing, status tracking, alerts, and clean CRM ownership matter more than the messages alone.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Workflow cluster / narrow fit",
          headline: "Existing lead-response pages define the operational scope",
          body: "The broader AI lead follow-up, instant response, and contact-form pages already explain where these systems fit. This page stays narrow by focusing specifically on price, scope, and budgeting decisions for small businesses.",
          link: "/ai-lead-follow-up-for-service-businesses",
        },
      ],
      links: [
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
        { label: "Contact form lead follow-up automation", href: "/contact-form-lead-follow-up-automation" },
        { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
      ],
    },
    {
      type: "prose",
      title: "What small businesses usually get wrong about lead follow-up pricing",
      subtitle:
        "These are the assumptions that create bad buying decisions:",
      blocks: [
        {
          heading: "Mistaking cheap software for a finished system",
          body: "A $49/month tool is not the same thing as a working lead follow-up process. The real value comes from mapping triggers, writing sequences, connecting the CRM, assigning ownership, and testing stop conditions so leads do not get spammed after a human replies.",
        },
        {
          heading: "Buying enterprise complexity for a simple bottleneck",
          body: "If your business mainly needs one fast response plus two follow-up touches, do that first. Many owners overbuy because proposals bundle every possible automation instead of solving the first leak cleanly.",
        },
        {
          heading: "Ignoring the cost of missed leads",
          body: "Owners often treat manual follow-up as free because no one writes a check for it. It is not free. Slow callbacks, dropped web leads, and inconsistent follow-up are already costing revenue. The question is whether the automation costs less than the leak it fixes.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does AI lead follow-up cost for a small business?",
      answer:
        "For most small businesses, a focused lead follow-up build lands between $1.2K and $4.5K depending on channels, CRM integration, and routing logic. Monthly running costs are often in the $20-$150 range before any optional support or heavier AI usage.",
    },
    {
      question: "Why is this different from the general AI automation cost page?",
      answer:
        "The general cost page covers multiple automation categories across a business. This page stays focused on one workflow family: instant lead response, short follow-up sequences, CRM routing, and what small businesses should budget specifically for that problem.",
    },
    {
      question: "Can I start with a cheap lead-response workflow and expand later?",
      answer:
        "Yes. That is usually the right approach. Start with the narrowest workflow that fixes the revenue leak — often instant response plus a short follow-up sequence — then expand into richer routing, qualification, or missed-call recovery once the first phase proves ROI.",
    },
    {
      question: "What usually makes lead follow-up automation expensive?",
      answer:
        "Multi-channel logic, CRM integration, unclear ownership rules, AI-based classification, and messy human processes. The more systems and edge cases the workflow has to manage, the more build time and testing it needs.",
    },
    {
      question: "How do I know if the price is worth it?",
      answer:
        "Look at how many good leads you currently lose to slow response or weak follow-up, then compare the automation cost to one recovered job or booked consultation per month. If a small lift in saved opportunities covers a large share of the project, the economics are usually reasonable.",
    },
  ],
  faqSubtitle:
    "Practical answers about budgeting lead follow-up automation for a small business",
  ctaHeading: "Want a realistic quote for your lead follow-up workflow?",
  ctaText:
    "Book a 30-minute call. We will look at where leads are dropping, decide how much workflow you actually need, and give you a fixed-price range for the narrowest build worth doing first.",
  ctaSubtext:
    "No padded enterprise proposal. Just a practical scope and cost discussion.",
  relatedLinks: [
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "Lead follow-up automation examples", href: "/lead-follow-up-automation-examples" },
    { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
