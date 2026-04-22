import {
  Wallet,
  PiggyBank,
  MessageSquare,
  Phone,
  CalendarCheck,
  Wrench,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Layers,
  TrendingUp,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "affordable-ai-automation-small-business",
  metaTitle:
    "Affordable AI Automation for Small Business — What Fits Under $500/Month | Dmytro AI",
  metaDescription:
    "Can a small business get useful AI automation for under $500/month? Yes, if the scope stays narrow. Honest guide to starter workflows, setup costs, ongoing fees, and where this budget stops working.",
  badgeText: "Budget Guide",
  badgeIcon: Wallet,
  h1: "Affordable AI Automation for Small Business",
  heroIntro:
    "Yes, some useful automation can fit inside a $500/month budget. But only if you stay narrow. Under $500/month is starter-workflow territory: missed-call recovery, instant lead response, reminders, simple follow-up, or one focused CRM workflow. It is not full custom-software territory, and it is usually not a fully managed done-for-you system with zero setup cost. The mistake most owners make is treating a $500/month budget like it should buy a complete AI operations layer. It will not. What it can buy is one focused automation that saves time or recovers revenue fast enough to justify the next build.",
  heroSubtext:
    "Below: what usually fits inside that budget, what usually does not, how to phase your investment honestly, and when waiting is smarter than forcing a cheap build that breaks.",
  sections: [
    {
      type: "cards",
      title: "What can actually fit under a $500/month automation budget",
      subtitle:
        "This budget works best when you already have a clear bottleneck and you solve one thing well first:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call text-back or instant lead response",
          body: "If your problem is unanswered calls or slow web-form response, a simple text-back and follow-up workflow can often run well under $500/month in ongoing costs. This is one of the best starter automations because the ROI is easy to understand: recover demand you already paid to generate.",
        },
        {
          icon: CalendarCheck,
          title: "Confirmation, reminder, and no-show prevention workflows",
          body: "Booking reminders, confirmation requests, reschedule prompts, and basic no-show reduction sequences are usually affordable because the logic is predictable. They create value without needing a huge custom system behind them.",
        },
        {
          icon: Phone,
          title: "Basic AI phone coverage in a narrow use case",
          body: "A very focused phone workflow can sometimes fit if the call flow is simple and the volume is manageable. But this only works when you keep the scope tight. Once you add complex qualification, multiple transfer paths, or deep CRM logic, costs move up fast.",
        },
        {
          icon: Wrench,
          title: "One repeatable CRM or follow-up workflow",
          body: "If your team already lives in one CRM, a single workflow — lead tagging, stage changes, task creation, reply alerts, or a short nurture sequence — can be realistic at this budget. The key is using your existing stack instead of rebuilding everything at once.",
        },
      ],
    },
    {
      type: "table",
      title: "What this budget usually looks like in practice",
      subtitle:
        "The important distinction: monthly budget and build cost are not the same thing. Affordable does not mean zero setup:",
      headers: ["Typical one-time setup", "Typical ongoing monthly cost"],
      rows: [
        {
          label: "Missed-call text-back or instant lead response",
          values: ["$1K–$2.5K", "$50–$250"],
        },
        {
          label: "Reminder / no-show reduction workflow",
          values: ["$1K–$2K", "$30–$150"],
        },
        {
          label: "One focused CRM follow-up workflow",
          values: ["$1.5K–$3K", "$100–$300"],
        },
        {
          label: "Simple database reactivation campaign",
          values: ["$1.5K–$3K", "$100–$300"],
        },
        {
          label: "Full custom CRM + multi-channel AI system",
          values: ["Usually $5K+", "Usually above this budget"],
        },
        {
          label: "Broad AI voice agent with booking, transfers, and deeper logic",
          values: ["Usually $3K–$6K+", "Can exceed budget quickly"],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When a $500/month budget is realistic — and when it is not",
      subtitle:
        "This budget can work well, but only for the right stage and the right scope:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Realistic",
          variant: "green",
          items: [
            "You want one narrow workflow, not a whole operating system",
            "You already know where money is leaking: missed calls, slow lead response, no-shows, or a neglected contact list",
            "You are willing to use your current CRM or scheduling stack instead of replacing everything",
            "One recovered job, consultation, or sale per month would already justify the spend",
            "You are okay phasing the build instead of demanding every feature on day one",
          ],
        },
        {
          icon: XCircle,
          heading: "Not realistic",
          variant: "neutral",
          items: [
            "You want custom CRM replacement, AI phone coverage, nurture, analytics, and support routing all at once",
            "You expect a consultant to fully build, host, monitor, and optimize a complex system for $500/month with no setup fee",
            "Your process is still messy and undefined, so the project keeps changing week to week",
            "You need deep custom integrations or enterprise software complexity",
            "You are shopping only on price and not on whether the workflow actually solves a revenue problem",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to make a small automation budget go further",
      subtitle:
        "The businesses that get real value from a smaller budget usually make the same few decisions early:",
      blocks: [
        {
          heading: "Buy speed-to-lead first",
          body: "The best place to start is usually the workflow closest to revenue. If you miss calls, respond slowly to forms, or let estimates sit too long, fixing that one thing often creates enough return to justify the next automation. Starting with back-office convenience instead of front-end revenue usually delays ROI.",
        },
        {
          heading: "Use your existing stack where possible",
          body: "Affordable automation usually means building on top of tools you already pay for: a CRM, calendar, phone platform, or email sender. The more you try to swap platforms and redesign process at the same time, the faster the budget stops being affordable.",
        },
        {
          heading: "Separate setup from operating cost",
          body: "A lot of small-business owners search for 'under $500/month' but actually need help thinking in two numbers: one-time setup and monthly running cost. A focused workflow might need a $1.5K setup plus less than $200/month to operate. That is still affordable if the workflow recovers enough demand quickly.",
        },
        {
          heading: "Treat cheap-and-broken as expensive",
          body: "The wrong affordable build creates silent costs: missed leads, bad routing, confused customers, and a team that stops trusting the system. A narrow workflow that works is cheaper than a broad bargain build that needs to be replaced in six weeks.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Budget traps to avoid",
      subtitle:
        "These are the mistakes that make an affordable automation budget feel like it vanished without results:",
      items: [
        {
          icon: AlertTriangle,
          title: "Confusing software subscription price with implementation price",
          body: "A platform can cost $97/month and still require real setup work. The subscription gets you the tool. It does not automatically produce the workflow, integrations, message logic, and testing that make the tool useful.",
        },
        {
          icon: PiggyBank,
          title: "Trying to solve three problems with one starter budget",
          body: "A tight budget should buy one clear result: more leads reached, fewer no-shows, better reminder coverage, cleaner follow-up. If you spread it across too many goals, you end up with partial fixes everywhere and a real win nowhere.",
        },
        {
          icon: Layers,
          title: "Buying complexity before you have volume",
          body: "If you do not yet have consistent inbound leads, call volume, bookings, or repeat customers, the smartest move might be process cleanup first. Automation amplifies an existing flow. It does not create demand by itself.",
        },
        {
          icon: TrendingUp,
          title: "Ignoring what a single recovered customer is worth",
          body: "A $300/month workflow that reliably saves one good lead or one reactivated customer can be a better investment than a much bigger project you cannot yet justify. Small-budget automation works when the ROI math is tight and practical, not theoretical.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is grounded in the kinds of narrow, revenue-linked workflows that usually make a smaller automation budget viable:",
      studies: [
        {
          industry: "Restaurant / inbound demand",
          headline: "After-hours call handling created clear operational value",
          body: "The Paris Cafe project is direct proof that recovering missed after-hours demand can be worth automating. The broader lesson applies even when the exact final system is larger than a starter budget: beginning with the lost-demand bottleneck is usually the right move.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Lead qualification / routing",
          headline: "Focused workflows outperform vague automation ideas",
          body: "The Instagram lead-generation case study is adjacent proof that a repeatable lead pipeline creates leverage when the logic is narrow and the qualification rules are clear. Affordable automation works the same way: one disciplined workflow first.",
          link: "/case-studies/instagram-lead-generation",
        },
        {
          industry: "CRM and follow-up systems",
          headline: "Full custom systems exist — but they are not a starter-budget project",
          body: "The WheelsFeels CRM build is useful adjacent proof in the other direction. It shows what a bigger custom system can do once the business case is clear, and why a small-business owner should not expect that full scope inside a $500/month budget.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
        { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
        { label: "After-hours lead capture", href: "/after-hours-lead-capture-for-service-businesses" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Can I get useful AI automation for under $500/month?",
      answer:
        "Yes, if the workflow is narrow and the business problem is clear. Under $500/month usually works for starter automations like missed-call text-back, instant lead response, reminders, simple nurture, or one focused CRM workflow. It usually does not cover a broad custom system with many integrations and ongoing white-glove management.",
    },
    {
      question: "Does under $500/month usually include setup?",
      answer:
        "Usually no. Most useful automations still need one-time setup work, often in the $1K-$3K range for a narrow workflow. The monthly budget covers software, usage, and possibly light maintenance. If someone promises a full custom setup with no upfront fee and a very low monthly price, ask exactly what is and is not included.",
    },
    {
      question: "What is the best first automation for a small budget?",
      answer:
        "Usually the workflow closest to revenue loss: missed calls, slow form-response speed, stale quotes, no-show reduction, or a small reactivation campaign. The right answer depends on what one recovered customer or booked appointment is worth to you. Start where the ROI is easiest to prove.",
    },
    {
      question: "Can an AI voice agent fit under this budget?",
      answer:
        "Sometimes, but only in a narrow form. Simple phone coverage with low complexity and modest call volume can be realistic. More advanced voice workflows with booking, branching qualification, transfer logic, CRM logging, and prompt tuning usually move beyond a small-budget range quickly.",
    },
    {
      question: "When should I wait instead of forcing a cheap automation build?",
      answer:
        "Wait when your workflow is not standardized, when you still are not sure where the real bottleneck is, or when you need to replace half your stack before automation will even make sense. In those cases, a quick process cleanup or a narrower manual fix often creates better value than buying the cheapest possible automation just because it sounds affordable.",
    },
  ],
  faqSubtitle:
    "Practical questions from small-business owners trying to keep the budget disciplined without buying something too cheap to be useful",
  ctaHeading: "Want to see what a realistic starter automation budget could actually buy?",
  ctaText:
    "Book a 30-minute call. We will look at your current bottleneck, what one recovered customer or booked appointment is worth, and whether a narrow workflow can realistically create ROI inside your budget instead of pretending every problem needs a giant system on day one.",
  ctaSubtext:
    "If the budget is too tight for the outcome you want, I will say that directly.",
  relatedLinks: [
    { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
    { label: "AI automation for businesses without a tech team", href: "/ai-automation-for-businesses-without-a-tech-team" },
    { label: "Build vs. buy AI automation", href: "/build-vs-buy-ai-automation" },
    { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
  ],
};

export default data;
