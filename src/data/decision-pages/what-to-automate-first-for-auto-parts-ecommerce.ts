import {
  Workflow,
  MessageSquare,
  FileSearch,
  ClipboardCheck,
  RefreshCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Clock3,
  Car,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-auto-parts-ecommerce",
  metaTitle:
    "What to Automate First for Auto Parts E-Commerce — Choose the Highest-ROI Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in your auto parts e-commerce brand? Practical guide to choosing between mixed inquiry routing, fitment intake, quote follow-up, and stale-lead recovery before a bigger CRM build.",
  badgeText: "Auto Parts Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Auto Parts E-Commerce",
  heroIntro:
    "If your auto parts brand knows it needs better automation, the safest first move is usually not a giant all-in-one CRM rebuild. It is one bounded workflow that fixes an expensive leak first. For most auto parts stores, that first workflow is one of four things: mixed customer-inquiry routing, fitment inquiry intake and follow-up, quote follow-up, or stale-lead recovery. The right choice depends on where revenue is already slipping today — when new questions land in one messy queue, when compatibility questions stall because context is missing, when pricing conversations go quiet after the quote goes out, or when old fitment and quote leads sit untouched even though they are still recoverable.",
  heroSubtext:
    "Below: how to choose the first auto-parts workflow to automate, how this page stays distinct from the broader auto-parts parent and the already-live child pages, what direct and adjacent proof supports the recommendation, and when you should keep the first project smaller instead of forcing a bigger auto-parts automation rollout.",
  sections: [
    {
      type: "cards",
      title: "The first auto-parts workflows usually worth automating",
      subtitle:
        "Most auto parts brands do not need to automate everything at once. They need to start where the leak is already costing real revenue or operator time:",
      items: [
        {
          icon: MessageSquare,
          title: "Mixed customer-inquiry routing",
          body: "Start here when fitment questions, product-detail requests, quote-stage conversations, and support traffic all land in one queue. This is usually the best first project when the problem starts before the team can even tell what the message is or who should answer it.",
        },
        {
          icon: FileSearch,
          title: "Fitment inquiry intake and follow-up",
          body: "Start here when compatibility questions are the main commercial bottleneck. If vehicle details arrive incomplete, high-intent buyers have to repeat themselves, or fitment conversations stall because nobody owns the next step, this narrower workflow often deserves to come first.",
        },
        {
          icon: ClipboardCheck,
          title: "Quote follow-up",
          body: "Start here when the store already gets pricing requests, custom-order conversations, or wholesale inquiries, but too many of those quote-stage opportunities die in silence after the quote goes out. This is the right first workflow when the leak begins after the commercial conversation is already real.",
        },
        {
          icon: RefreshCcw,
          title: "Stale-lead recovery",
          body: "Start here when the bigger leak is not fresh inquiry handling but old quote requests, fitment conversations, and inquiry-stage leads that already went quiet and never got a structured second touch. This is usually the best first move when the business already has a backlog of neglected pre-sale demand.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which auto-parts workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact point where context, ownership, or follow-through breaks down:",
      options: [
        {
          icon: MessageSquare,
          heading: "Start with mixed customer-inquiry routing",
          highlighted: true,
          items: [
            "High-intent buyers are getting buried with routine support because everything lands in one inbox or queue",
            "The team loses time figuring out whether the message is fitment, product, quote, wholesale, or post-sale support",
            "You want the lightest first fix that improves speed and ownership without redesigning the whole stack",
            "Closest next page: /customer-inquiry-automation-for-auto-parts-ecommerce",
          ],
        },
        {
          icon: FileSearch,
          heading: "Start with fitment intake and follow-up",
          items: [
            "Vehicle-compatibility questions are the main place where high-intent buyers stall or disappear",
            "Messages arrive with missing vehicle context and nobody owns the next step clearly",
            "Your commercial leak is specifically around fitment friction, not general support routing",
            "Closest next page: /fitment-inquiry-automation-for-auto-parts-ecommerce",
          ],
        },
        {
          icon: ClipboardCheck,
          heading: "Start with quote follow-up",
          items: [
            "The store already sends pricing or quote answers, but too many buyers go quiet after that",
            "Quote-stage demand sits with no disciplined reminder logic or clear human handoff",
            "One recovered higher-ticket order or wholesale quote per month would justify the build",
            "Closest next page: /quote-follow-up-automation-for-auto-parts-ecommerce",
          ],
        },
        {
          icon: RefreshCcw,
          heading: "Start with stale-lead recovery",
          items: [
            "The business already has a real backlog of old fitment, quote, or inquiry-stage leads that never got a second touch",
            "Fresh inquiry handling is reasonably stable, but old demand is still rotting in the CRM or inbox",
            "You want to recover already-paid-for opportunities before funding a broader system",
            "Closest next page: /stale-lead-follow-up-for-auto-parts-ecommerce",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the auto-parts cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for auto parts e-commerce",
          values: [
            "Operators deciding which single workflow deserves to be the first auto-parts automation project",
            "Helps choose between inquiry routing, fitment intake, quote follow-up, and stale-lead recovery before anything broader gets built",
          ],
        },
        {
          label: "AI automation for auto parts e-commerce",
          values: [
            "Operators evaluating the whole operating layer",
            "Explains the broader system across fitment, mixed inquiries, quote recovery, support routing, CRM organization, and lifecycle follow-up overall",
          ],
        },
        {
          label: "Customer inquiry automation for auto parts e-commerce",
          values: [
            "Stores that already know the mixed-inbox routing problem is the first leak to fix",
            "Focuses narrowly on classification, ownership, acknowledgements, and routing high-intent buyers faster",
          ],
        },
        {
          label: "Quote follow-up automation for auto parts e-commerce",
          values: [
            "Stores that already know quote-stage opportunities are dying after pricing is sent",
            "Focuses narrowly on reminder timing, quote-context follow-up, and handoff when buying intent returns",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your brand?",
      subtitle:
        "This page is useful when you know the business needs better follow-through, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already see one obvious leak: mixed inquiry chaos, fitment friction, quote-stage silence, or a stale-lead backlog",
            "You want a bounded workflow that proves value before funding a broader CRM or automation build",
            "Your team is losing real time to manual inbox triage, missing context, or inconsistent follow-up",
            "You want a practical recommendation instead of another generic e-commerce automation pitch",
            "You care more about recovered orders and cleaner ownership than about flashy tooling",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The store still has very low inquiry volume and manual handling is easy",
            "The real problem is product, catalog, supplier, or margin instability — not workflow execution",
            "Nobody agrees on who owns inquiries, quotes, or CRM hygiene at all",
            "You are looking for a giant all-in-one rebuild before proving one narrower workflow first",
            "Manual discipline is already strong and there is no visible leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first auto-parts automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost revenue or repeated operator drag.",
      blocks: [
        {
          heading: "Start where missing context already costs you sales",
          body: "If the team cannot quickly tell whether a message is a fitment question, a quote request, or routine support, customer-inquiry routing usually comes first. If vehicle-compatibility conversations are the main source of drop-off, fitment intake comes first. If quotes are already going out but buyers vanish afterward, quote follow-up comes first. The decision should follow the leak, not whichever automation sounds the most sophisticated.",
        },
        {
          heading: "Keep the first workflow small enough to run cleanly",
          body: "A narrower first build gives you faster time to value and fewer places to hide a broken process. Most auto parts operators learn more from one disciplined workflow than from a half-finished CRM rebuild that tries to touch every channel, every support path, and every customer state before the team is ready.",
        },
        {
          heading: "Do not jump to stale-lead recovery if fresh demand handling is still broken",
          body: "Stale-lead recovery can be a strong first project, but only when the business already handles fresh inquiry and quote-stage momentum reasonably well. If new buyers are still getting buried in a mixed queue or quotes are still dying because nobody follows up, fix those leaks first before you optimize the backlog.",
        },
        {
          heading: "Let the first workflow shape the next build",
          body: "Once one narrow workflow is working, you learn where the real handoffs, message gaps, and status failures actually live. That makes the broader auto-parts CRM layer safer because it is now grounded in operating evidence instead of assumptions about how the store should work.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first auto-parts project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest build instead of the clearest leak",
          body: "Many brands jump straight to a giant CRM overhaul when the real issue is still one stage: routing, fitment intake, quote follow-up, or stale-lead recovery. Bigger scope feels strategic, but it often delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring operator time as a real cost",
          body: "DIY work is not free when someone spends weeks sorting inquiry logic, patching follow-up rules, and rebuilding quote ownership manually. The first workflow should be scoped against both cash cost and the time drag of getting it wrong.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: buried high-intent inquiries, unanswered fitment questions, cold quotes, or untouched old leads. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published auto-parts first-project prioritization case study on the site yet, so the page stays grounded in the live auto-parts cluster plus direct WheelsFeels CRM proof.",
      studies: [
        {
          industry: "Auto-parts cluster",
          headline: "The live auto-parts pages already isolate the exact first-project options this page is comparing",
          body: "The parent auto-parts page plus the inquiry, fitment, quote-follow-up, and stale-lead children already break the cluster into real workflow stages. This page sits one level earlier and helps an operator decide which of those narrower workflows should come first.",
          link: "/ai-automation-for-auto-parts-ecommerce",
        },
        {
          industry: "Published vertical proof",
          headline: "The 5,600+ lead WheelsFeels CRM case study proves why centralized records, ownership, and automated follow-up matter in this exact vertical",
          body: "That project is direct proof for auto parts e-commerce: thousands of contacts organized, automated follow-up running, and Slack visibility when high-intent replies return. It supports the business case for choosing the first workflow based on the clearest leak instead of forcing a vague all-in-one rebuild.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Adjacent workflow proof",
          headline: "The live auto-parts workflow pages show how the broader parent can be split into smaller, buyer-specific projects",
          body: "Those child pages make the prioritization page more credible, not less. They already define the surrounding workflow boundaries. This page exists to help the operator choose the first one based on where the leak begins today.",
          link: "/customer-inquiry-automation-for-auto-parts-ecommerce",
        },
      ],
      links: [
        { label: "AI automation for auto parts e-commerce", href: "/ai-automation-for-auto-parts-ecommerce" },
        { label: "Customer inquiry automation for auto parts e-commerce", href: "/customer-inquiry-automation-for-auto-parts-ecommerce" },
        { label: "Quote follow-up automation for auto parts e-commerce", href: "/quote-follow-up-automation-for-auto-parts-ecommerce" },
        { label: "Auto parts CRM case study", href: "/case-studies/ecommerce-crm-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should an auto parts e-commerce brand automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: mixed customer-inquiry routing if high-intent buyers are getting buried in one queue, fitment intake if compatibility questions are the main bottleneck, quote follow-up if pricing conversations keep going cold, or stale-lead recovery if the business already has a neglected backlog of old pre-sale demand.",
    },
    {
      question: "How is this different from the broader auto-parts automation page?",
      answer:
        "The broader auto-parts page explains the whole operating layer across fitment, support, CRM organization, and follow-up. This page is narrower. It helps you choose which single workflow deserves to be the first project before you scope anything broader.",
    },
    {
      question: "Should an auto parts store start with inquiry routing or quote follow-up?",
      answer:
        "Start with inquiry routing if the team still cannot quickly classify and own incoming conversations. Start with quote follow-up if the quote stage is already real but buyers disappear after pricing is sent. The earlier leak usually comes first.",
    },
    {
      question: "Can stale-lead recovery come before a bigger CRM rebuild?",
      answer:
        "Yes, but only when fresh inquiry and quote handling are already reasonably stable. If new demand is still being lost in a mixed queue or quotes are still dying in silence, fix those first. Otherwise stale-lead recovery can be a strong first project because it reopens already-paid-for opportunities fast.",
    },
    {
      question: "What is the main ROI of choosing the first workflow correctly?",
      answer:
        "The main ROI is that you stop funding the wrong first project. Recovering even a handful of buried buyers, cold quotes, or stale auto-parts leads can justify a focused build. The bigger win is that the first workflow creates a cleaner foundation for the broader CRM layer instead of locking the store into a bloated rollout that solves the wrong problem first.",
    },
  ],
  faqSubtitle:
    "Practical questions about choosing the first auto-parts automation",
  ctaHeading: "Need help choosing the first auto-parts workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your store is leaking mixed inquiries, fitment conversations, quote-stage demand, or stale leads now, then recommend whether the first move should be routing, fitment intake, quote follow-up, or backlog recovery before anything broader gets built.",
  ctaSubtext:
    "No generic e-commerce AI pitch. Just a practical first-project recommendation tied to how your inquiry flow and CRM actually work today.",
  relatedLinks: [
    { label: "AI automation for auto parts e-commerce", href: "/ai-automation-for-auto-parts-ecommerce" },
    { label: "Customer inquiry automation for auto parts e-commerce", href: "/customer-inquiry-automation-for-auto-parts-ecommerce" },
    { label: "Quote follow-up automation for auto parts e-commerce", href: "/quote-follow-up-automation-for-auto-parts-ecommerce" },
    { label: "Stale lead follow-up for auto parts e-commerce", href: "/stale-lead-follow-up-for-auto-parts-ecommerce" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
