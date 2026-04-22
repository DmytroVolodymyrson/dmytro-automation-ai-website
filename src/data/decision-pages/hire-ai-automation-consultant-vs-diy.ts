import {
  Scale,
  Laptop,
  Users,
  DollarSign,
  Clock,
  AlertTriangle,
  Workflow,
  CheckCircle2,
  XCircle,
  ShieldCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "hire-ai-automation-consultant-vs-diy",
  metaTitle:
    "Hire an AI Automation Consultant or Do It Yourself? Small Business Guide | Dmytro AI",
  metaDescription:
    "Should you hire an AI automation consultant or build it yourself? Honest small-business guide to cost, time, reliability, and when DIY is enough versus when expert help saves money.",
  badgeText: "Buyer's Guide",
  badgeIcon: Scale,
  h1: "Hire an AI Automation Consultant or Do It Yourself?",
  heroIntro:
    "If your automation need is simple, low-risk, and you genuinely want to learn the tools, doing it yourself can make sense. If the workflow touches real revenue, multiple systems, or customer experience, hiring an AI automation consultant is usually the cheaper decision once you count debugging time, missed leads, and cleanup. The important question is not whether DIY is possible. It is whether this is the kind of workflow you want to trust to nights, weekends, trial-and-error, and whatever breaks after launch.",
  heroSubtext:
    "Below: when DIY is fine, when consultant help pays for itself, what each path really costs, and how to tell whether you need a tutorial, a narrow implementation partner, or a consultant who can scope the whole workflow honestly.",
  sections: [
    {
      type: "cards",
      title: "What this decision is really about",
      subtitle:
        "Most owners do not choose between 'free' and 'expensive.' They choose between two different kinds of cost:",
      items: [
        {
          icon: Laptop,
          title: "DIY cost = lower cash, higher owner time",
          body: "Doing it yourself can keep the upfront bill low. But it usually means learning the platform, mapping the workflow, testing edge cases, reconnecting broken integrations, and owning every future fix. That is fine for a narrow internal automation. It is a bad trade when speed-to-lead, booking flow, or CRM integrity affects revenue directly.",
        },
        {
          icon: Users,
          title: "Consultant cost = higher cash, lower time-to-value",
          body: "Hiring a consultant makes sense when you want someone to diagnose the workflow, build the system, and leave it working. You pay more upfront, but you avoid weeks of trial-and-error and reduce the odds of shipping something that looks fine in a demo and fails under real conditions.",
        },
        {
          icon: Workflow,
          title: "The real question = how expensive failure would be",
          body: "If a broken automation would only annoy your team internally, DIY is often reasonable. If a broken automation would drop leads, create bad appointments, misroute customers, or corrupt CRM data, the safer move is usually expert help tied to a narrow, high-ROI workflow.",
        },
      ],
    },
    {
      type: "table",
      title: "DIY vs. hiring a consultant",
      subtitle:
        "The practical tradeoff is not technical possibility. It is time, reliability, and business risk:",
      headers: ["DIY", "Hire a consultant"],
      rows: [
        {
          label: "Best for",
          values: [
            "Simple internal automations, owner-led experimentation, non-critical workflows",
            "Revenue-critical lead follow-up, booking, CRM routing, multi-tool automation, AI-assisted workflows",
          ],
        },
        {
          label: "Typical upfront cost",
          values: [
            "Lower cash cost, but still tool costs plus your time",
            "$1.5K-$6K depending on scope, integrations, and testing depth",
          ],
        },
        {
          label: "Time to a reliable launch",
          values: [
            "Several evenings to several weeks depending on complexity",
            "Often 5-15 business days for one focused workflow",
          ],
        },
        {
          label: "Biggest risk",
          values: [
            "You build the wrong thing or the right thing badly",
            "You pay for complexity you do not actually need",
          ],
        },
        {
          label: "What success should look like",
          values: [
            "A workflow you understand because you built and maintain it",
            "A documented workflow that works in production and fits your operations",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When DIY is a strong fit — and when it is not",
      subtitle:
        "DIY is not dumb. It is just more sensitive to workflow complexity and failure cost than most owners expect:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "DIY can be a good fit",
          variant: "green",
          items: [
            "You are automating one narrow workflow with clear triggers and obvious success criteria",
            "You already enjoy learning tools like Zapier, Make, or n8n and can dedicate time to testing",
            "The workflow is internal or low-risk enough that temporary failure will not burn leads or customers",
            "You want a prototype first before paying for production-hardening and deeper integrations",
            "Your real goal is learning the stack, not just getting the fastest launch",
          ],
        },
        {
          icon: XCircle,
          heading: "DIY is usually the wrong fit",
          variant: "neutral",
          items: [
            "Leads are already going cold because response is too slow",
            "The automation touches multiple systems and needs clean CRM updates, alerts, and fallback logic",
            "You need AI call handling, qualification, or nuanced routing instead of one simple trigger",
            "No one on the team actually wants to own debugging, maintenance, and edge-case cleanup",
            "A bad launch would create customer-facing errors, duplicate outreach, or missed appointments",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "What usually makes owners abandon the DIY route",
      subtitle:
        "The common problem is not that the tools are bad. It is that business workflows are messier than the tutorial examples:",
      blocks: [
        {
          heading: "The happy path works. The real-world path does not.",
          body: "A form submission can fire an email in ten minutes. But then a lead replies from a different inbox, submits twice, books through another channel, or needs different routing because they are outside your service area. This is the point where DIY projects start collecting patches instead of becoming reliable systems.",
        },
        {
          heading: "The hidden cost is context switching, not just build time.",
          body: "Most owners do not lose because the workflow takes 12 hours. They lose because it takes 12 hours spread across evenings, interrupted by client work, with research, retries, and rework every time a credential breaks or the logic needs one more branch. That context switching is expensive even if no invoice arrives.",
        },
        {
          heading: "Production reliability is a different job from prototyping.",
          body: "A consultant should not just connect tools. They should decide what happens on failure, what gets logged, who gets notified, what stays human, and what you own after launch. If that production layer matters, consultant help becomes a business decision more than a technical one.",
        },
      ],
    },
    {
      type: "considerations",
      title: "How to make the right call before spending money or time",
      subtitle:
        "A few practical checks usually make the decision obvious:",
      items: [
        {
          icon: DollarSign,
          title: "Put a number on owner time",
          body: "If your effective hour is worth $100-$200 and you are realistically going to spend 20-40 hours learning, building, testing, and maintaining the workflow, DIY is not actually free. It may still be worth it for learning. But it is not a zero-cost option.",
        },
        {
          icon: Clock,
          title: "Ask how long the business can tolerate slow rollout",
          body: "If every extra week means more missed leads, delayed follow-up, or continued manual admin drag, speed matters. Consultant help often wins simply because it gets the workflow live while the problem is still worth fixing.",
        },
        {
          icon: AlertTriangle,
          title: "Separate prototype value from production value",
          body: "DIY is often great for proving the idea. Consultant help is usually better for hardening the workflow once you know the automation should exist. You do not have to pick one forever. But you should know which stage you are actually in.",
        },
        {
          icon: ShieldCheck,
          title: "Keep ownership either way",
          body: "Whether you build it or hire it out, you should own the accounts, credentials, documentation, and workflow logic. Consultant help should reduce risk, not create dependency.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is grounded in published work where production reliability matters more than hobby-tool experimentation:",
      studies: [
        {
          industry: "Restaurant / voice handling",
          headline: "After-hours calls answered in production, not just in a demo",
          body: "The Paris Cafe voice-agent case study shows the kind of workflow where DIY trial-and-error gets expensive fast: live inbound calls, after-hours coverage, and a real guest-facing experience that cannot afford sloppy routing or a broken handoff.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce / CRM operations",
          headline: "Captured leads still need clean downstream automation",
          body: "The WheelsFeels CRM case study is adjacent proof for why production-hardening matters. Capturing a lead is not enough. The follow-up, tagging, alerts, and ownership rules behind that lead are what make the system commercially useful.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "n8n implementation",
          headline: "There is already a separate guide for owners who know the platform and need build help",
          body: "The n8n automation consultant page exists for a narrower version of this decision: when the owner already knows the tool choice and is deciding whether to keep DIYing in n8n or hire an expert to ship a reliable workflow faster.",
          link: "/n8n-automation-consultant",
        },
      ],
      links: [
        { label: "Consultant vs agency", href: "/hire-ai-automation-consultant-vs-agency" },
        { label: "Build vs buy AI automation", href: "/build-vs-buy-ai-automation" },
        { label: "n8n automation consultant", href: "/n8n-automation-consultant" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "When is doing AI automation yourself actually worth it?",
      answer:
        "Usually when the workflow is narrow, the stakes are low, and you genuinely want to learn the tools. DIY makes the most sense for prototypes, simple internal automations, or non-critical workflows where a temporary failure will not cost real revenue or hurt customer experience.",
    },
    {
      question: "How much does it usually cost to hire an AI automation consultant?",
      answer:
        "For one focused workflow, a realistic range is often $1.5K-$4K. More complex builds with multiple integrations, AI routing, customer-facing logic, or broader testing often land around $4K-$6K or more. The important question is whether the workflow is valuable enough that speed and reliability justify that investment.",
    },
    {
      question: "What is the hidden cost of DIY automation?",
      answer:
        "Usually owner time, delayed rollout, and cleanup after a partial build. The common pattern is not 'DIY is impossible.' It is 'DIY took much longer than expected and still needed expert help once edge cases and production reliability started to matter.'",
    },
    {
      question: "Can I prototype it myself and then hire a consultant later?",
      answer:
        "Yes, and that is often a smart path. A DIY prototype can clarify the workflow and prove the idea. Then a consultant can harden the logic, connect the full stack properly, add failure handling, and leave you with a system that is safe to run in production.",
    },
    {
      question: "How do I know if I need a consultant or just a tutorial?",
      answer:
        "If you mainly need to learn a tool and the workflow is simple, a tutorial may be enough. If you are thinking in terms of business outcomes — missed leads, delayed booking, messy CRM handoff, inconsistent follow-up — you usually need someone who can scope the workflow itself, not just show you where to click.",
    },
  ],
  faqSubtitle:
    "Straight answers for owners deciding whether to keep building themselves or bring in expert help",
  ctaHeading: "Want a clear answer on whether this workflow is worth DIYing?",
  ctaText:
    "Book a 30-minute call. We will look at the workflow you want to automate, the real cost of delay and debugging, and whether the smartest next step is a DIY prototype, a narrow consultant-led build, or no automation at all yet.",
  ctaSubtext:
    "No generic AI pitch. Just an honest call on the workflow, the payoff, and the safest path forward.",
  relatedLinks: [
    { label: "AI automation consultant for small business", href: "/ai-automation-consultant-small-business" },
    { label: "Consultant vs agency", href: "/hire-ai-automation-consultant-vs-agency" },
    { label: "Build vs buy AI automation", href: "/build-vs-buy-ai-automation" },
    { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
  ],
};

export default data;
