import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  DollarSign,
  Laptop,
  Scale,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "n8n-consultant-vs-diy-small-business",
  metaTitle:
    "n8n Consultant vs. DIY for Small Business — When to Hire Help | Dmytro AI",
  metaDescription:
    "Should you hire an n8n consultant or build it yourself? Honest small-business guide to time, risk, cost, workflow complexity, and when DIY is enough versus when expert help is cheaper.",
  badgeText: "n8n Buy-vs-Build",
  badgeIcon: Scale,
  h1: "Hire an n8n Consultant or Build It Yourself?",
  heroIntro:
    "If the workflow is simple, low-risk, and you actually want to learn n8n, doing it yourself can make sense. If the automation touches real leads, appointments, CRM ownership, or customer handoff, hiring an n8n consultant is usually the cheaper decision once you count debugging time, silent failures, and rollout delay. The real question is not whether DIY is possible. It is whether this specific workflow is important enough that you want it live, stable, and trusted without spending nights learning hosting, retries, branching logic, and edge-case cleanup.",
  heroSubtext:
    "Below: where DIY in n8n is still a smart move, where expert help pays for itself, what each path really costs, and how to tell whether you need a tutorial, a narrow consultant build, or no automation yet.",
  sections: [
    {
      type: "cards",
      title: "What this decision is really about",
      subtitle:
        "Most owners are not choosing between free and expensive. They are choosing which kind of cost they want to absorb:",
      items: [
        {
          icon: Laptop,
          title: "DIY keeps cash cost lower",
          body: "DIY in n8n usually lowers the invoice, but it shifts the cost into owner time: mapping the workflow, learning nodes, debugging APIs, handling credentials, and fixing the things that break after launch.",
        },
        {
          icon: Wrench,
          title: "Consultant help reduces time-to-value",
          body: "Hiring an n8n consultant makes sense when you want someone to scope one bounded workflow, build it properly, test failure paths, and leave it usable instead of turning your evenings into integration support.",
        },
        {
          icon: Workflow,
          title: "Failure cost matters more than tool difficulty",
          body: "n8n is not the hard part. The hard part is getting the business logic right when a lead replies twice, a webhook is incomplete, the CRM already has the record, or a human steps in mid-sequence.",
        },
      ],
    },
    {
      type: "table",
      title: "DIY in n8n vs. hiring an n8n consultant",
      subtitle:
        "This is the practical trade-off for a small business choosing whether to build or buy implementation help:",
      headers: ["DIY in n8n", "Hire an n8n consultant"],
      rows: [
        {
          label: "Best for",
          values: [
            "Simple internal automations, learning projects, low-risk prototypes",
            "Revenue-critical workflows, CRM routing, AI-assisted logic, self-hosted setups, or messy cleanup work",
          ],
        },
        {
          label: "Typical cash cost",
          values: [
            "Lower upfront spend, but still tool and hosting cost plus your own time",
            "Often $1K-$6K depending on workflow scope, integrations, cleanup, and support",
          ],
        },
        {
          label: "Time to a reliable launch",
          values: [
            "Several evenings to several weeks depending on API and workflow complexity",
            "Often a few business days to two weeks for one focused workflow",
          ],
        },
        {
          label: "Biggest risk",
          values: [
            "Shipping a workflow that works on the happy path but fails in production",
            "Paying for complexity you do not actually need",
          ],
        },
        {
          label: "What success should look like",
          values: [
            "A workflow you understand because you built it and are willing to maintain it",
            "A workflow that is documented, monitored, and stable enough for the team to trust",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When DIY is a strong fit — and when it is not",
      subtitle:
        "DIY in n8n is often a good idea for the right scope. It becomes expensive when the workflow matters more than the learning experience:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "DIY can be a good fit",
          variant: "green",
          items: [
            "You are automating one narrow workflow with clear triggers and obvious success criteria",
            "The workflow is internal or low-risk enough that temporary failure will not cost real revenue",
            "You want to learn n8n and can realistically spend the time on testing and cleanup",
            "You are building a prototype before deciding whether the workflow deserves production hardening",
            "The stack is simple and you are not juggling multiple systems, channels, or human handoff rules",
          ],
        },
        {
          icon: XCircle,
          heading: "Hiring help is usually smarter",
          variant: "neutral",
          items: [
            "The workflow touches leads, bookings, CRM ownership, or customer communication",
            "Multiple tools need to stay in sync without duplicating data or missing updates",
            "No one on the team wants to own hosting, credentials, retries, and post-launch debugging",
            "You already know delay is costing you leads, admin time, or trust in the process",
            "You need a workflow that the team can use confidently, not just a solo prototype",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where small-business n8n DIY usually starts breaking down",
      subtitle:
        "The problem is rarely that n8n cannot do it. The problem is that business workflows are messier than the tutorial version:",
      blocks: [
        {
          heading: "The happy path is easy. The edge cases are the project.",
          body: "A form submits, an email goes out, and the demo looks fine. Then a contact already exists, the lead answers from another channel, the webhook payload is incomplete, or the sequence should stop because a human already handled the inquiry. That is where a simple workflow turns into a real implementation problem.",
        },
        {
          heading: "Self-hosting and credentials are a separate ownership layer",
          body: "Many businesses choose n8n because they want more flexibility and lower long-term cost. That is valid. It also means someone needs to own hosting, secrets, logs, updates, and failure alerts. A lot of DIY frustration comes from that infrastructure layer, not from drag-and-drop logic itself.",
        },
        {
          heading: "Context switching is often the hidden cost",
          body: "Owners do not usually lose because the build takes ten hours. They lose because it takes ten hours spread across interrupted evenings, client work, research, retries, and rework every time one more branch appears. That lost momentum is often more expensive than the consultant invoice they were trying to avoid.",
        },
      ],
    },
    {
      type: "considerations",
      title: "How to decide before you spend money or burn a week",
      subtitle:
        "A few practical checks usually make the right path obvious:",
      items: [
        {
          icon: DollarSign,
          title: "Put a real value on owner time",
          body: "If your time is worth $100-$200 an hour and the workflow will realistically take 15-30 hours to learn, build, test, and stabilize, DIY is not actually cheap. It may still be worth it for learning, but not because it is free.",
        },
        {
          icon: Clock,
          title: "Ask how expensive delay is",
          body: "If every extra week means more missed leads, slower routing, or more manual admin drag, speed matters. Consultant help often wins because the business gets the workflow while the problem is still worth solving.",
        },
        {
          icon: AlertTriangle,
          title: "Separate prototype value from production value",
          body: "DIY is great for proving the idea. Consultant help is usually better for hardening a workflow once you know it should exist. You do not have to choose one forever, but you should know which stage you are actually in.",
        },
        {
          icon: ShieldCheck,
          title: "Keep ownership either way",
          body: "Whether you build it or hire it out, you should own the n8n instance, credentials, documentation, and core workflow logic. Expert help should reduce risk, not create lock-in.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is grounded in published n8n work plus adjacent production proof where workflow reliability matters more than cheap experimentation:",
      studies: [
        {
          industry: "n8n implementation",
          headline: "The existing n8n consultant guide covers what expert help should actually include",
          body: "That page stays focused on what an n8n consultant does, what projects cost, and what good implementation ownership looks like. This page answers the narrower decision itself: keep building alone, or hire help now?",
          link: "/n8n-automation-consultant",
        },
        {
          industry: "Lead generation / n8n workflow delivery",
          headline: "The Instagram lead-generation build shows where specialist implementation is worth it",
          body: "That case study is direct proof of n8n handling scraping, enrichment, qualification, and delivery at meaningful volume. It is a strong example of the kind of workflow where production reliability matters more than hobby-tool experimentation.",
          link: "/case-studies/instagram-lead-generation",
        },
        {
          industry: "CRM operations / adjacent proof",
          headline: "The e-commerce CRM case study shows why downstream workflow integrity matters",
          body: "That project is adjacent proof for the business risk side of this decision. Once automation starts touching follow-up, tagging, alerts, and operational ownership, broken logic is not just annoying. It becomes commercial leakage.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "n8n automation consultant", href: "/n8n-automation-consultant" },
        { label: "n8n automation examples", href: "/n8n-automation-examples-small-business" },
        { label: "n8n vs. Zapier for small business", href: "/n8n-vs-zapier-small-business" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "When is building in n8n yourself actually the right move?",
      answer:
        "Usually when the workflow is narrow, the stakes are low, and you genuinely want to learn the platform. DIY is strongest for internal automations, prototypes, and low-risk workflows where a temporary failure will not cost real revenue or damage customer experience.",
    },
    {
      question: "When should I hire an n8n consultant instead of doing it myself?",
      answer:
        "Hire when the workflow matters enough that slow rollout, silent failures, or messy data will cost you money. That usually means lead follow-up, CRM routing, booking flow, AI-assisted classification, self-hosted setups, or cleanup of a workflow that already became messy.",
    },
    {
      question: "How much does it cost to hire an n8n consultant for a small business?",
      answer:
        "Simple builds can land around $1K-$2K. More serious multi-step workflows often land around $2K-$4K. Self-hosted, AI-assisted, or rescue-and-rebuild projects can go higher depending on stack complexity, documentation, and support needs.",
    },
    {
      question: "How is this different from the existing n8n automation consultant page?",
      answer:
        "The consultant page is a hiring guide focused on what an n8n expert should actually do, what good implementation help looks like, and how projects are scoped. This page sits one step earlier in the buyer journey and answers the decision itself: keep DIYing, or bring in expert help now?",
    },
    {
      question: "Can I prototype the workflow myself and then hire a consultant later?",
      answer:
        "Yes. That is often the smartest path. DIY can prove the workflow is worth building. Then a consultant can harden the logic, clean up the edge cases, connect the full stack properly, and leave you with something safe to run in production.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners deciding whether to keep building in n8n themselves or bring in expert help",
  ctaHeading: "Want a clear answer on whether this workflow is worth DIYing?",
  ctaText:
    "Book a 30-minute call. We will look at the workflow you want to automate, the real cost of delay and debugging, and whether the smartest next step is a DIY prototype, a bounded consultant-led build, or no automation yet.",
  ctaSubtext:
    "Useful if you already know n8n is likely the right platform and the real question is whether you should keep building alone.",
  relatedLinks: [
    { label: "n8n automation consultant", href: "/n8n-automation-consultant" },
    { label: "n8n automation examples", href: "/n8n-automation-examples-small-business" },
    { label: "n8n vs. Zapier for small business", href: "/n8n-vs-zapier-small-business" },
    { label: "Build vs. buy AI automation", href: "/build-vs-buy-ai-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
