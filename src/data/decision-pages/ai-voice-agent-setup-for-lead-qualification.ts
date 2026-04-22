import {
  Wrench,
  Phone,
  Bot,
  CalendarCheck,
  Workflow,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  DollarSign,
  Clock,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-voice-agent-setup-for-lead-qualification",
  metaTitle:
    "AI Voice Agent Setup for Lead Qualification — When Expert Setup Is Worth It | Dmytro AI",
  metaDescription:
    "Need help setting up an AI voice agent for lead qualification? Practical guide for small businesses on call flows, qualification logic, transfer rules, CRM integration, pricing, and when expert setup is worth it.",
  badgeText: "Setup Help",
  badgeIcon: Wrench,
  h1: "AI Voice Agent Setup for Lead Qualification",
  heroIntro:
    "If you already know a voice agent could help with lead qualification, the real question is not whether the software exists. The real question is whether the setup will match your call flow, qualification rules, transfer logic, calendar rules, and CRM handoff without creating a worse caller experience. That is where most small businesses get burned. The demo sounds good, but the live workflow fails because the agent does not know what to ask, when to book, when to escalate, or what should never be handled without a human.",
  heroSubtext:
    "Below: what good voice-agent setup help should include, when DIY is fine, what setup usually costs, and the failure points that matter before you pay for another platform or contractor.",
  sections: [
    {
      type: "cards",
      title: "What good voice-agent setup should actually include",
      subtitle:
        "A real setup project is not just picking a voice and pasting in a prompt. The operational details decide whether the system works:",
      items: [
        {
          icon: Phone,
          title: "Inbound call-flow design",
          body: "The agent needs clear rules for how it answers, what the first 20 seconds sound like, which questions it asks in which order, and what happens when the caller interrupts, asks something unexpected, or needs a human. That is workflow design, not just AI copywriting.",
        },
        {
          icon: Bot,
          title: "Qualification logic and transfer boundaries",
          body: "A useful voice agent knows which leads are a fit, what counts as urgent, when to book, when to trigger a callback, and when to transfer immediately. Setup help matters because edge cases are what separate a production workflow from a nice demo.",
        },
        {
          icon: CalendarCheck,
          title: "Calendar, CRM, and disposition mapping",
          body: "If the agent books, routes, or tags leads incorrectly, your team still has cleanup work. Good setup includes contact creation, transcript or summary logging, disposition tags, follow-up triggers, and a clean path into the systems your team already uses.",
        },
        {
          icon: Workflow,
          title: "Testing, ownership, and launch controls",
          body: "Before launch, the workflow should be tested against no-answer cases, bad-fit callers, transfer failures, reschedule requests, and noisy real-world conversations. You should also keep ownership of the number, platform accounts, integrations, and documentation instead of renting access through somebody else's stack.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When voice-agent setup help is a good fit — and when it is not",
      subtitle:
        "This kind of implementation help matters most when phone response speed is tied directly to revenue:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You lose leads to missed calls, after-hours calls, or slow manual callbacks",
            "Most inbound calls follow a repeatable qualification pattern before someone books or gets routed",
            "Your team already has a rough definition of what counts as booked, qualified, escalated, or disqualified",
            "One or two extra booked consultations, jobs, or estimates per week would easily justify the project",
            "You want the system tied into your real CRM and follow-up workflow instead of living as a disconnected phone demo",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You already answer nearly every call live and response speed is not the bottleneck",
            "Every call requires deep technical diagnosis or custom quoting from the first minute",
            "Your team has not agreed on qualification rules, transfer ownership, service areas, or booking windows",
            "You want AI to replace dispatch, support, sales, and complaints all at once",
            "You are mostly shopping for the cheapest voice tool, not for a real implementation tied to revenue",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "DIY voice-agent setup vs. expert setup help",
      subtitle:
        "The usual tradeoff is lower cash cost versus faster rollout and fewer expensive mistakes:",
      headers: ["DIY setup", "Expert setup help"],
      rows: [
        {
          label: "Time to a reliable launch",
          values: ["Often 1-4 weeks of owner or staff time", "Usually 5-15 business days for one focused call workflow"],
        },
        {
          label: "Best for",
          values: ["Simple routing experiments, low call volume, owner-led testing", "Revenue-critical first response, qualification, booking, CRM logging, and transfer logic"],
        },
        {
          label: "Typical cost",
          values: ["Lower cash cost, higher time cost", "$2K-$6K depending on platform choice, integrations, testing scope, and call complexity"],
        },
        {
          label: "Biggest risk",
          values: ["The agent sounds impressive but breaks on real calls or routes leads badly", "Paying for complexity you do not actually need yet"],
        },
        {
          label: "What success should look like",
          values: ["A working prototype you understand because you built it", "A production-ready workflow with tested transfer rules, CRM logging, and clear ownership after launch"],
        },
      ],
    },
    {
      type: "prose",
      title: "What usually breaks when voice-agent setup is rushed",
      subtitle:
        "These are the failures that actually hurt revenue, caller trust, and team adoption:",
      blocks: [
        {
          heading: "The voice sounds fine but the decision tree is wrong",
          body: "This is the most common failure. The agent sounds polished, but it asks the wrong questions, misses a disqualifier, books the wrong thing, or keeps talking when it should transfer. That creates cleanup work and makes the team stop trusting the workflow fast.",
        },
        {
          heading: "Transfer and fallback logic are vague",
          body: "A real call workflow needs rules for when to transfer live, when to create a priority callback, when to offer a booking, and when to stop. If the handoff logic is vague, your team ends up rescuing confused callers manually after the AI has already damaged confidence.",
        },
        {
          heading: "CRM logging is incomplete or useless",
          body: "If the system does not log disposition, summary, transcript context, and next action cleanly, the downstream team still works blind. A call that never lands in the CRM properly is not a real win, even if the voice interaction itself sounded good.",
        },
        {
          heading: "Nobody owns the live system after launch",
          body: "Voice agents change over time. Hours change, service areas change, prompts need tightening, and transfer numbers break. If ownership after launch is fuzzy, the system decays quietly until it is just another number your team does not trust.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What to check before paying for voice-agent setup help",
      subtitle:
        "You do not need a giant agency. You do need a practical scope tied to a real payoff:",
      items: [
        {
          icon: AlertTriangle,
          title: "Start with one narrow call workflow",
          body: "The safest launch is one lead type, one qualification path, one transfer path, and one CRM destination. If the proposal tries to automate every possible caller scenario on day one, that is usually a warning sign.",
        },
        {
          icon: ShieldCheck,
          title: "Set hard boundaries on what the agent should never do",
          body: "A good setup defines what the voice agent should not improvise around: pricing promises, complaints, technical diagnosis, complicated reschedules, or anything that should go straight to a human. Those limits protect both caller experience and team trust.",
        },
        {
          icon: DollarSign,
          title: "Tie the project to recovered demand",
          body: "If one extra booked job, estimate, or consultation per week would cover the monthly platform costs and the setup fee, the business case is usually reasonable. If the ROI still feels fuzzy, narrow the scope before building.",
        },
        {
          icon: Clock,
          title: "Ask what happens after launch",
          body: "You should know who owns prompt updates, transfer rules, number admin, calendar changes, call summaries, and integration fixes once the agent is live. Setup help is valuable. Ongoing confusion is not.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is supported by direct proof around AI phone handling plus adjacent proof around qualification logic and downstream automation:",
      studies: [
        {
          industry: "Restaurant / inbound calls",
          headline: "After-hours calls answered instead of lost",
          body: "The Paris Cafe voice-agent case study is direct proof that a live AI phone workflow can answer real after-hours calls, handle the first interaction, and route demand instead of letting it fall into voicemail.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Lead qualification logic",
          headline: "Qualification criteria can be systemized before a human ever joins",
          body: "The published lead-generation case study is adjacent proof for the logic layer: define what a qualified lead looks like, collect the right information, and route only the right opportunities forward instead of treating every inquiry the same.",
          link: "/case-studies/instagram-lead-generation",
        },
        {
          industry: "CRM follow-up and handoff",
          headline: "Captured leads still need clean downstream automation",
          body: "The WheelsFeels CRM build is adjacent proof for the back half of the workflow. Once the call is captured, the value comes from clean CRM logging, alerts, segmentation, and follow-up instead of leaving the conversation stranded in a disconnected inbox.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI voice agent for lead qualification", href: "/ai-voice-agent-lead-qualification" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "Retell vs. Bland AI", href: "/retell-vs-bland-small-business" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does AI voice-agent setup help usually include?",
      answer:
        "Usually call-flow scoping, prompt and conversation design, qualification logic, transfer rules, booking logic if needed, CRM mapping, disposition tagging, testing, and launch cleanup. The best setup help also defines what the agent should never try to handle on its own.",
    },
    {
      question: "How much does AI voice-agent setup usually cost?",
      answer:
        "A focused setup for one clear qualification workflow often lands around $2K-$4K. Broader builds with booking logic, CRM integration, transfer paths, summaries, and heavier testing are more often $4K-$6K. If the quote is much lower, expect a thin template install. If it is much higher, make sure the recovered-demand upside is real.",
    },
    {
      question: "How long does setup usually take?",
      answer:
        "A narrow voice qualification workflow can often be live in 1-2 weeks. More complex setups with calendar booking, CRM sync, transfer rules, and broader testing usually take 2-3 weeks because the edge cases need to be validated on real calls.",
    },
    {
      question: "Can a voice agent integrate with my CRM and calendar?",
      answer:
        "Usually yes. Most builds can connect to tools like GoHighLevel, HubSpot, Calendly, Google Calendar, and custom CRM workflows through APIs or automation layers like n8n. The important part is not just the connection. It is making sure the right data lands in the right place with the right next-step logic behind it.",
    },
    {
      question: "When should I skip building an AI voice agent entirely?",
      answer:
        "Skip it when response speed is not actually the bottleneck, when almost every call requires deep expertise or delicate relationship handling from the first minute, or when your team has not yet agreed on qualification rules and transfer ownership. In those cases, cleaning up process usually creates more value than forcing a voice layer too early.",
    },
  ],
  faqSubtitle:
    "Practical questions from businesses that are past the curiosity stage and trying to decide whether voice-agent implementation help is worth paying for",
  ctaHeading: "Need help setting up a voice agent that actually qualifies leads cleanly?",
  ctaText:
    "Book a 30-minute call. We will look at how your calls come in, what makes someone qualified in your business, where transfer rules break down today, and whether a focused voice workflow would create fast enough ROI to build now.",
  ctaSubtext:
    "No generic AI pitch. Just a practical fit check on whether expert setup help, a smaller workflow, or no build at all makes the most sense.",
  relatedLinks: [
    { label: "AI voice agent for lead qualification", href: "/ai-voice-agent-lead-qualification" },
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "AI appointment setter setup help", href: "/ai-appointment-setter-setup" },
    { label: "n8n automation consultant", href: "/n8n-automation-consultant" },
  ],
};

export default data;
