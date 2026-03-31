import {
  Scale,
  Users,
  Laptop,
  DollarSign,
  Clock,
  AlertTriangle,
  Zap,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-consultant-vs-freelancer",
  metaTitle:
    "AI Automation Consultant vs. Freelancer — Which One Should You Hire? | Dmytro AI",
  metaDescription:
    "Deciding between an AI automation consultant and a freelancer? Compare pricing, accountability, expertise depth, and project outcomes for small businesses.",
  badgeText: "Buyer's Guide",
  badgeIcon: Scale,
  h1: "AI Automation Consultant vs. Freelancer",
  heroIntro:
    "Both call themselves automation experts. Both work independently. But the way they approach your project, price their work, and stand behind the result is very different. Here's how to tell them apart — and which one fits your situation.",
  heroSubtext:
    "Below: what each path actually looks like, what to expect on cost and quality, and how to make the right call.",
  sections: [
    {
      type: "cards",
      title: "Two paths that look similar but aren't",
      subtitle:
        "From the outside, a consultant and a freelancer can look identical. The differences show up in how they scope, price, and deliver:",
      items: [
        {
          icon: Users,
          title: "Automation consultant",
          body: "Diagnoses your workflow first, then designs and builds a system around it. Fixed pricing with defined scope. Owns the outcome — if the system doesn't work, they fix it. Focuses on business results, not just technical output.",
        },
        {
          icon: Laptop,
          title: "Freelancer",
          body: "Takes a task list and executes. Hourly or per-task billing. Delivers what's specified, not necessarily what you need. Good for defined technical work when you already know exactly what to build.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "Here's how consultants and freelancers differ on the factors that matter most when hiring someone to build your automation:",
      headers: ["Consultant", "Freelancer"],
      rows: [
        {
          label: "Pricing model",
          values: ["Fixed project fee ($1.5K–$8K)", "Hourly ($25–$100/hr)"],
        },
        {
          label: "Scoping",
          values: [
            "Consultant maps your workflow and defines scope",
            "You define the task list upfront",
          ],
        },
        {
          label: "Accountability",
          values: [
            "Owns the outcome — fixes what doesn't work",
            "Delivers what was specified in the brief",
          ],
        },
        {
          label: "Diagnosis",
          values: [
            "Understands business context before building",
            "Starts building from the spec provided",
          ],
        },
        {
          label: "Communication",
          values: [
            "Proactive updates, strategic advice",
            "Responsive to messages when sent",
          ],
        },
        {
          label: "Ongoing support",
          values: [
            "Maintenance plans, direct access",
            "Typically ends when the task closes",
          ],
        },
        {
          label: "Best for",
          values: [
            "Business owners who need a system designed and built",
            "Teams with a technical lead who can specify exact requirements",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option is the right call",
      subtitle:
        "Neither is universally better. The right choice depends on your situation:",
      options: [
        {
          icon: Users,
          heading: "Hire a consultant when…",
          highlighted: true,
          items: [
            "You know you need automation but aren't sure exactly what to build",
            "You want someone to diagnose your workflow, not just execute a spec",
            "You need a system that works reliably, not a one-off task",
            "Fixed pricing matters more than lowest hourly rate",
            "You want direct access to the person who builds and maintains it",
          ],
        },
        {
          icon: Laptop,
          heading: "Hire a freelancer when…",
          highlighted: false,
          items: [
            "You have a clear technical spec and just need hands to build it",
            "Your team has a technical lead who can manage the freelancer's work",
            "The task is small, well-defined, and doesn't need strategic input",
            "Budget is tight and you're comfortable managing scope yourself",
            "You need a specific skill (e.g., a Zapier expert) for a narrow task",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The hidden costs of choosing wrong",
      subtitle:
        "Picking the wrong path doesn't just waste money — it costs you time and opportunity:",
      items: [
        {
          icon: DollarSign,
          title: "Hourly billing adds up fast",
          body: "A freelancer at $50/hr who takes 80 hours costs $4,000 — the same as a consultant who quotes $4K fixed. But the freelancer's scope can creep. If the project takes 120 hours, you're at $6K with no guarantee the system works end-to-end.",
        },
        {
          icon: Clock,
          title: "Rebuilds are expensive",
          body: "If a freelancer builds exactly what you asked for — but you asked for the wrong thing — you pay twice. A consultant catches misalignments during diagnosis, before code gets written.",
        },
        {
          icon: AlertTriangle,
          title: "No one owns the outcome",
          body: "Freelancers deliver tasks. If the overall system doesn't work, that's your problem. Consultants own the outcome: if the automation doesn't produce results, they fix it.",
        },
        {
          icon: Zap,
          title: "Maintenance gaps",
          body: "Freelancers typically move on after delivery. When your automation breaks at 2 AM or needs updating, you're searching for a new freelancer who has to learn the system from scratch.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "How to vet either option",
      subtitle:
        "Whether you go consultant or freelancer, use these signals to separate the good ones from the noise:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Green flags",
          variant: "green",
          items: [
            "They ask about your business before proposing a solution",
            "They can show you systems they've built, not just a portfolio of logos",
            "Clear pricing — fixed or hourly with a cap, not open-ended",
            "They explain what happens after handoff (documentation, support, ownership)",
            "They're honest about what's not a fit for them",
          ],
        },
        {
          icon: XCircle,
          heading: "Red flags",
          variant: "neutral",
          items: [
            "They promise results before understanding your workflow",
            "No case studies or demos — just buzzwords and certifications",
            "Vague scope with hourly billing and no estimate",
            "They want to lock you into proprietary tools they control",
            "They can't explain how they'll handle edge cases or errors",
          ],
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "Isn't a consultant just a more expensive freelancer?",
      answer:
        "Not really. The pricing difference reflects a difference in scope and accountability. A consultant diagnoses your workflow, designs the system, builds it, and owns the outcome. A freelancer executes tasks you define. If you already have a clear technical spec and someone to manage the project, a freelancer can be the right call. If you need someone to figure out what to build and make sure it works, that's consulting.",
    },
    {
      question: "Can a freelancer become my ongoing automation partner?",
      answer:
        "Sometimes. If you find a freelancer who understands your business deeply and is willing to take on maintenance and strategic input, the line between freelancer and consultant blurs. The risk is that most freelancers optimize for project volume, not long-term relationships. Ask upfront about their availability for ongoing work.",
    },
    {
      question: "How do I know if I need diagnosis or just execution?",
      answer:
        "If you can write a clear technical spec for exactly what needs to be built — what triggers, what actions, what error handling, what integrations — you might only need execution. If you're thinking in terms of business problems (we lose leads, follow-up is too slow, scheduling is manual), you need diagnosis first.",
    },
    {
      question:
        "What platforms do AI automation consultants typically work with?",
      answer:
        "Most work with n8n, Make, or Zapier for workflow automation, plus CRM platforms like GoHighLevel or HubSpot, and AI tools like OpenAI APIs and VAPI for voice agents. The platform matters less than whether the consultant understands your operations and can pick the right tool for your situation.",
    },
  ],
  faqSubtitle:
    "Straight answers about choosing between a consultant and a freelancer",
  ctaHeading: "Not sure which path fits your business?",
  ctaText:
    "Book a 30-minute call. We'll look at what you need automated, help you figure out whether a consultant or freelancer makes more sense, and give you a clear next step — whether that involves working together or not.",
  ctaSubtext: "No pitch. Just an honest conversation about your options.",
  relatedLinks: [
    {
      label: "Consultant vs. agency comparison",
      href: "/hire-ai-automation-consultant-vs-agency",
    },
    {
      label: "AI automation consultant guide",
      href: "/ai-automation-consultant-small-business",
    },
    { label: "View case studies", href: "/case-studies" },
  ],
};

export default data;
