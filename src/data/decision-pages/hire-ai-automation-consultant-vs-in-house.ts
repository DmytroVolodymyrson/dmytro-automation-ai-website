import {
  Scale,
  Users,
  UserPlus,
  DollarSign,
  Clock,
  AlertTriangle,
  TrendingUp,
  CheckCircle2,
  XCircle,
  ShieldCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "hire-ai-automation-consultant-vs-in-house",
  metaTitle:
    "AI Automation Consultant vs. In-House Hire — Which Path Fits Your Business? | Dmytro AI",
  metaDescription:
    "Should you hire a full-time automation person or bring in a consultant? Honest comparison of salary, ramp-up time, breadth of experience, and when each path pays off for small businesses.",
  badgeText: "Buyer's Guide",
  badgeIcon: Scale,
  h1: "AI Automation Consultant vs. In-House Hire",
  heroIntro:
    "Hiring someone full-time to own automation sounds like the safest long-term play. Sometimes it is. But for most small businesses, the volume of automation work does not justify a full-time salary, and the ramp-up period before that person is productive can cost more than a consultant engagement that ships results in weeks. The real question is not whether internal ownership matters — it does. It is whether you have enough ongoing automation work, enough budget, and enough patience for ramp-up to make a full-time hire the better investment right now.",
  heroSubtext:
    "Below: what each path actually costs, the hidden risks of each, when an in-house hire is genuinely worth it, and how to tell whether your business needs a full-time automation person or a consultant who can deliver results faster with less overhead.",
  sections: [
    {
      type: "cards",
      title: "Two very different hiring decisions",
      subtitle:
        "This is not a better-or-worse comparison. It is a fit question — and the answer depends on how much automation work you actually have:",
      items: [
        {
          icon: UserPlus,
          title: "In-house hire = ongoing presence, slow start",
          body: "A full-time automation or ops person gives you someone embedded in your business every day. They learn your systems deeply over time. But they need onboarding, they bring the experience of one or two previous employers, and the salary starts on day one — months before the first workflow is reliable in production.",
        },
        {
          icon: Users,
          title: "Consultant = fast deployment, pattern-matched experience",
          body: "A consultant brings experience across dozens of businesses and automation stacks. They diagnose your workflow, build the system, and hand it off. You pay for output, not hours on payroll. The tradeoff is that they are not in your Slack every day — they come in, ship, and leave you with a working system.",
        },
        {
          icon: TrendingUp,
          title: "The real variable = automation volume",
          body: "If you have one or two workflows to automate per quarter, a full-time hire is expensive idle capacity. If you are building an entire ops infrastructure with daily iteration, an internal person starts to make sense. Most small businesses are closer to the first scenario than the second.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "The practical differences that change the math for most small businesses:",
      headers: ["In-house hire", "Consultant"],
      rows: [
        {
          label: "Typical cost (year one)",
          values: [
            "$55K–$110K salary + benefits + tools + management time",
            "$3K–$12K per project, only when you need work done",
          ],
        },
        {
          label: "Time to first working system",
          values: [
            "2–4 months (recruiting + onboarding + learning your stack)",
            "1–3 weeks for one focused workflow",
          ],
        },
        {
          label: "Breadth of experience",
          values: [
            "Limited to their previous roles and self-study",
            "Pattern-matched across dozens of businesses and automation stacks",
          ],
        },
        {
          label: "Ongoing availability",
          values: [
            "Full-time, embedded in your daily operations",
            "Project-based or retainer, not daily presence",
          ],
        },
        {
          label: "Risk if it does not work out",
          values: [
            "Severance, re-hiring, months of lost momentum",
            "Project ends, you keep the system, try someone else",
          ],
        },
        {
          label: "Best for",
          values: [
            "Businesses with high automation volume and budget for a dedicated role",
            "Businesses that need specific workflows shipped reliably and fast",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When each path is the right call",
      subtitle:
        "Neither option is universally better. The fit depends on volume, budget, and urgency:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "An in-house hire makes sense when",
          variant: "green",
          items: [
            "You have a steady pipeline of new automation projects every month, not just a few per year",
            "Your budget can absorb $60K+ in salary and benefits while the new hire ramps up",
            "You need someone embedded in your team who can respond to daily ops issues and iterate fast",
            "You have internal systems complex enough that deep institutional knowledge is a real advantage",
            "You are building a technology or ops team and the automation role is part of a larger headcount plan",
          ],
        },
        {
          icon: XCircle,
          heading: "A consultant is usually the better fit when",
          variant: "neutral",
          items: [
            "You need one to three workflows shipped well, not a full-time automation program",
            "Speed matters — you cannot afford months of recruiting and ramp-up before the first system goes live",
            "Your budget is project-based, not payroll-based, and you want cost tied to output",
            "You want someone who has already solved your kind of problem at other businesses",
            "You are not ready to manage another full-time employee and the overhead that comes with it",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "The hidden costs of hiring in-house too early",
      subtitle:
        "The salary is only part of the expense. The less visible costs are often what make the decision painful:",
      blocks: [
        {
          heading: "Ramp-up is real and expensive.",
          body: "Even a strong hire needs one to three months to learn your systems, understand your operations, and start producing reliable automation. During that time, you are paying full salary for someone who is still learning — and the workflows you need are still not live. A consultant can often ship the first system before the in-house hire finishes onboarding.",
        },
        {
          heading: "One person's experience is narrow by definition.",
          body: "An in-house hire brings the experience of their previous one or two jobs. A consultant who has built automation across twenty or thirty businesses has seen more failure modes, more integration patterns, and more ways to scope a workflow so it actually holds up in production. That pattern-matching is hard to replicate with a single hire.",
        },
        {
          heading: "Idle capacity is expensive capacity.",
          body: "If your business needs three or four automation builds per year, a full-time person is idle most of the time. You end up paying $80K+ a year for sporadic project work. A consultant engagement for the same scope might cost $10K–$15K total — and you only pay when work happens.",
        },
      ],
    },
    {
      type: "considerations",
      title: "How to make the right call",
      subtitle:
        "A few practical questions that usually clarify the decision:",
      items: [
        {
          icon: DollarSign,
          title: "Calculate the real first-year cost of each path",
          body: "For an in-house hire, add salary, benefits, recruiting fees, tools, and management time. For a consultant, add up the specific projects you need done. If the consultant path is less than half the in-house cost and covers your actual needs, the headcount is premature.",
        },
        {
          icon: Clock,
          title: "Ask how urgently you need the first system live",
          body: "If speed to first working workflow matters — because leads are going cold, admin is dragging, or a process is visibly broken — a consultant delivers weeks faster than a new hire who is still learning your stack.",
        },
        {
          icon: AlertTriangle,
          title: "Be honest about automation volume",
          body: "If you can list more than six distinct automation projects you will need in the next twelve months, a full-time hire may earn its cost. If the list is shorter, you are hiring for a job that does not exist at full-time scale yet.",
        },
        {
          icon: ShieldCheck,
          title: "Consider a hybrid: consultant now, hire later",
          body: "Many businesses get the best outcome by using a consultant to build the first systems, learn what good automation looks like, and then hiring in-house once the volume and complexity justify it. The consultant work also gives you a clearer job description and a real benchmark for evaluating candidates.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof",
      subtitle:
        "These engagements show what consultant-speed delivery looks like compared to the months a new hire would need:",
      studies: [
        {
          industry: "Restaurant / voice handling",
          headline: "Full after-hours call system live in under two weeks",
          body: "The Paris Cafe voice-agent project shipped a production-grade AI call handling system faster than most businesses finish an ops hire's onboarding. The owner did not need a full-time automation person. They needed one system that works.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce / CRM operations",
          headline: "5,600+ contacts organized and automated by one consultant",
          body: "The WheelsFeels CRM build replaced what would have been months of in-house work with a focused consultant engagement. The full system — lead routing, follow-up sequences, tagging, alerts — was live before a new hire would have finished learning the CRM.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Info business / lead generation",
          headline: "50+ qualified leads per day without adding headcount",
          body: "The Instagram lead generation pipeline replaced a process that would have required a full-time person to run manually. Instead of hiring, the owner got an automated system that runs on its own.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "Consultant vs agency", href: "/hire-ai-automation-consultant-vs-agency" },
        { label: "Consultant vs DIY", href: "/hire-ai-automation-consultant-vs-diy" },
        { label: "Consultant vs freelancer", href: "/ai-automation-consultant-vs-freelancer" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "When does hiring a full-time automation person make more sense than a consultant?",
      answer:
        "When you have a steady volume of new automation work every month, the budget to absorb salary and benefits during ramp-up, and enough internal complexity that deep institutional knowledge is a genuine advantage. For most small businesses with three to five automation needs per year, a consultant is the more practical path.",
    },
    {
      question: "How much does an in-house automation hire actually cost?",
      answer:
        "A realistic first-year cost including salary, benefits, recruiting, tools, and management overhead is $65K–$120K depending on market and seniority. That does not include the two to four months of ramp-up before the first system is in production. A consultant engagement for one to three workflows typically runs $3K–$12K total.",
    },
    {
      question: "Can I start with a consultant and hire in-house later?",
      answer:
        "Yes, and this is often the smartest path. A consultant ships working systems fast, which lets you learn what good automation looks like in your business. When the volume justifies a full-time role, you have real systems to hand over, a clearer job description, and a benchmark for evaluating candidates.",
    },
    {
      question: "What if I already have someone on the team who could learn automation?",
      answer:
        "If the person is motivated and the workflows are not customer-facing or revenue-critical, upskilling can work. But be honest about opportunity cost — the hours they spend learning automation are hours they are not spending on their actual job. If the workflow matters commercially, a consultant gets it live faster and more reliably.",
    },
    {
      question: "Will a consultant just build something and disappear?",
      answer:
        "A good consultant hands off documentation, credentials, and a system you fully own. Many also offer maintenance retainers for ongoing support. The key is ownership: you should never be locked into a consultant relationship. If they leave, you keep everything and can hand it to anyone.",
    },
  ],
  faqSubtitle:
    "Straight answers for owners weighing a full-time hire against consultant help",
  ctaHeading: "Not sure whether to hire or bring in a consultant?",
  ctaText:
    "Book a 30-minute call. We will look at your automation needs, estimate whether the volume justifies a full-time role, and help you decide the most cost-effective path — whether that involves working together or not.",
  ctaSubtext:
    "No sales pitch. Just an honest conversation about headcount, budget, and what gets your workflows live fastest.",
  relatedLinks: [
    { label: "AI automation consultant for small business", href: "/ai-automation-consultant-small-business" },
    { label: "Consultant vs agency", href: "/hire-ai-automation-consultant-vs-agency" },
    { label: "Consultant vs DIY", href: "/hire-ai-automation-consultant-vs-diy" },
    { label: "Consultant vs freelancer", href: "/ai-automation-consultant-vs-freelancer" },
    { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
  ],
};

export default data;
