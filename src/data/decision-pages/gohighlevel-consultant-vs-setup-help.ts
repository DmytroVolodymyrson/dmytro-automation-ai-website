import {
  Workflow,
  Wrench,
  GitCompareArrows,
  LayoutDashboard,
  CalendarCheck,
  PlugZap,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Users,
  DollarSign,
  AlertTriangle,
  Clock,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "gohighlevel-consultant-vs-setup-help",
  metaTitle:
    "GoHighLevel Consultant vs. Setup Help — What Small Businesses Actually Need | Dmytro AI",
  metaDescription:
    "Practical guide to GoHighLevel consultant help vs setup-only implementation. Learn when a small business needs workflow judgment, when setup help is enough, what each scope should include, and how costs differ.",
  badgeText: "GHL Scope Decision",
  badgeIcon: GitCompareArrows,
  h1: "GoHighLevel Consultant vs. Setup Help",
  heroIntro:
    "A lot of small businesses know they need help with GoHighLevel, but they ask for the wrong kind of help. They hire setup-only implementation when the real problem is messy lead routing, unclear ownership, broken stage logic, or a CRM workflow nobody trusts. Or they pay for broad consultant help when they really just need one focused build inside an otherwise straightforward account. GoHighLevel consultant vs. setup help is not a features question. It is a scope question: do you need somebody to think through the workflow and operating logic, or do you already know the workflow and just need it configured cleanly?",
  heroSubtext:
    "Below: what setup help should cover, what consultant-level GoHighLevel work adds on top, how to tell which scope fits your account, what each path usually costs, and what proof honestly supports this page without pretending every business needs the heavier option.",
  sections: [
    {
      type: "cards",
      title: "What setup help handles well — and what it usually does not",
      subtitle:
        "Setup help is useful when the workflow is already mostly obvious and the real need is getting the account live without sloppy implementation:",
      items: [
        {
          icon: Wrench,
          title: "Build the core account correctly",
          body: "Setup help is the right fit when you need pipelines, calendars, forms, tags, reminders, and follow-up automations configured around a workflow that is already reasonably clear to the owner or team.",
        },
        {
          icon: CalendarCheck,
          title: "Connect the obvious booking and follow-up steps",
          body: "If the business already knows what should happen after a form submit, missed call, booked consult, or no-show, setup help can usually wire those states together without needing deeper consultant judgment first.",
        },
        {
          icon: LayoutDashboard,
          title: "Clean up a narrow slice of account friction",
          body: "A focused setup engagement can fix one bounded workflow, simplify a few triggers, or get reporting and attribution clean enough for day-to-day use when the account is not fundamentally broken.",
        },
        {
          icon: ShieldCheck,
          title: "Leave the team with a narrower working system",
          body: "Good setup help should still leave cleaner naming, clearer admin ownership, and less template clutter. But it usually assumes the bigger workflow decisions were already made before the build started.",
        },
      ],
    },
    {
      type: "cards",
      title: "What consultant-level GoHighLevel help adds",
      subtitle:
        "Consultant help is different because the work starts before the implementation. The value is judgment, not just configuration speed:",
      items: [
        {
          icon: Workflow,
          title: "Map the business logic before building",
          body: "A GoHighLevel consultant should decide what counts as qualified, what enters or exits follow-up, how ownership changes after replies or bookings, and where no-shows, duplicates, or edge cases break trust if they are ignored.",
        },
        {
          icon: PlugZap,
          title: "Decide what belongs inside GHL and what does not",
          body: "Consultant work matters when the account touches other tools, voice agents, reporting layers, or messy inherited automations. The right answer is sometimes to keep part of the workflow outside GoHighLevel instead of forcing everything into one stack.",
        },
        {
          icon: Users,
          title: "Resolve ownership and handoff problems",
          body: "If leads go cold because nobody owns replies, calendar movement, no-show recovery, or source cleanup, a consultant should fix the operating model before more automations are layered on top.",
        },
        {
          icon: BarChart3,
          title: "Shrink the scope to the smallest trustworthy system",
          body: "Useful consultant help is not feature sprawl. It is deciding what should be live first, what should wait, and how to get to a narrower system your team can actually believe in after launch.",
        },
      ],
    },
    {
      type: "table",
      title: "GoHighLevel setup help vs. GoHighLevel consultant help",
      subtitle:
        "The difference is not whether somebody knows the buttons in GHL. It is whether they are solving a configuration task or a workflow-design problem:",
      headers: ["Setup help", "Consultant help"],
      rows: [
        {
          label: "Best for",
          values: [
            "Accounts where the workflow is already mostly clear and implementation is the bottleneck",
            "Accounts where lead handling, booking logic, cleanup, ownership, or stack boundaries still need judgment"
          ],
        },
        {
          label: "Typical scope",
          values: [
            "Pipelines, forms, calendars, tags, reminders, campaigns, and one or two bounded workflows",
            "Workflow mapping, cleanup decisions, handoff design, stack choices, implementation sequencing, and revenue-critical system design"
          ],
        },
        {
          label: "Main risk if you choose wrong",
          values: [
            "The account technically works but still does not reflect how the business actually operates",
            "You pay for more scope than you need if the workflow is already simple and the account is not messy"
          ],
        },
        {
          label: "Typical cost",
          values: [
            "Often about $1.5K-$3K for a focused build",
            "Often about $2K-$6K depending on cleanup depth, integrations, and workflow complexity"
          ],
        },
        {
          label: "What you should expect at the end",
          values: [
            "A configured account with the requested workflow live",
            "A narrower, better-scoped operating system with cleaner ownership and fewer hidden workflow failures"
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When setup help is enough — and when consultant help is the safer choice",
      subtitle:
        "This page is for owners who already think GoHighLevel may be the right platform and need to choose the right level of help:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Setup help is usually enough when…",
          variant: "green",
          items: [
            "You already know the pipeline stages and follow-up rules you want",
            "The account is new or fairly clean rather than inherited and messy",
            "You need one bounded workflow such as booking reminders, missed-call response, or basic nurture live this month",
            "There are few integrations and the team ownership is already obvious",
            "The main goal is implementation speed, not deeper workflow redesign",
          ],
        },
        {
          icon: XCircle,
          heading: "Consultant help is safer when…",
          variant: "neutral",
          items: [
            "The account already leaks leads because stages, ownership, or automations are unreliable",
            "Multiple channels or tools need to work together cleanly",
            "Nobody can clearly explain what should happen after replies, bookings, no-shows, or source changes",
            "You inherited a messy GHL account and do not know whether to clean it, rebuild it, or simplify it",
            "The workflow is revenue-critical enough that trial-and-error setup will probably cost more than scoping it properly first",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "A simple way to make the decision",
      subtitle:
        "Ask these practical questions before you pay for the wrong scope:",
      blocks: [
        {
          heading: "Do you already know the operating rules?",
          body: "If you can clearly define stages, ownership, follow-up stops, no-show handling, and handoff points, setup help is often enough. If those answers are fuzzy, you probably need consultant-level workflow design before implementation starts.",
        },
        {
          heading: "Is the account clean enough to trust?",
          body: "A mostly empty or newly created GoHighLevel account usually leans toward setup help. An inherited account full of duplicate contacts, overlapping campaigns, unclear source tracking, or zombie automations usually leans toward consultant help or cleanup first.",
        },
        {
          heading: "How expensive is a mistake here?",
          body: "If one missed lead, unbooked consult, or broken reminder chain is expensive, the safer path is often consultant help. When the workflow is lighter and a rough first version is acceptable, setup help may be enough.",
        },
        {
          heading: "Will somebody still own the system after launch?",
          body: "The more the business depends on internal admin ownership, reporting trust, and process clarity, the more consultant help tends to pay off. Setup help is strongest when the day-to-day operating model is already stable and ownership is obvious.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What to watch before you buy either option",
      subtitle:
        "Whether you hire setup help or consultant help, these guardrails matter more than generic agency promises:",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not buy feature sprawl",
          body: "If the proposal tries to fix every pipeline, every campaign, and every reporting problem at once, push back. The right first scope is usually one bounded workflow that protects revenue or restores trust quickly.",
        },
        {
          icon: DollarSign,
          title: "Match the price to the real workflow risk",
          body: "Paying more for consultant help is reasonable if it prevents expensive mistakes in lead routing, booking, cleanup, or ownership. If the workflow is simple and the risk is low, keep the scope closer to setup help.",
        },
        {
          icon: Clock,
          title: "Keep ownership inside the business",
          body: "Admin access, phone numbers, workflow documentation, and reporting should remain yours. The value is expert help, not dependence on somebody else's account structure forever.",
        },
        {
          icon: ShieldCheck,
          title: "Expect a recommendation against unnecessary complexity",
          body: "A good consultant or setup specialist should be willing to say when a lighter scope is enough, when cleanup should come first, or when GoHighLevel is the wrong stack for the workflow entirely.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is no fake standalone case study about this exact consultant-vs-setup-help decision. The support comes from the live GoHighLevel cluster plus adjacent CRM and routing proof already published on the site:",
      studies: [
        {
          industry: "Live GoHighLevel cluster",
          headline: "The site already separates setup, consultant, cost, DIY, cleanup, rebuild, and audit decisions inside the GHL cluster",
          body: "That existing cluster is what makes this child page viable. The missing buyer question was the narrower choice between setup-only implementation and consultant-level workflow judgment once a business already believes GoHighLevel might fit.",
          link: "/gohighlevel-automation-consultant",
        },
        {
          industry: "CRM workflow design",
          headline: "The WheelsFeels CRM case study shows why workflow logic and handoff design matter more than tool cosmetics",
          body: "WheelsFeels is adjacent proof that the real value is not a prettier dashboard. It is mapping lead states, follow-up timing, and ownership clearly enough that the system becomes operationally trustworthy.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Fast capture and routing",
          headline: "Paris Cafe shows the payoff of getting inquiry capture and next-step routing right",
          body: "Paris Cafe is not a GoHighLevel-only project, but it is strong adjacent proof for the underlying decision here: when immediate capture and handoff matter, workflow judgment usually matters as much as the technical build itself.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "GoHighLevel automation setup help", href: "/gohighlevel-automation-setup" },
        { label: "GoHighLevel automation consultant", href: "/gohighlevel-automation-consultant" },
        { label: "GoHighLevel consultant cost", href: "/gohighlevel-automation-consultant-cost-small-business" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is the difference between GoHighLevel setup help and consultant help?",
      answer:
        "Setup help is usually implementation-focused: configuring pipelines, forms, calendars, reminders, and follow-up inside an already understood workflow. Consultant help adds workflow judgment first: mapping ownership, state changes, cleanup decisions, stack boundaries, and what should actually be built before configuration starts.",
    },
    {
      question: "When is setup help enough for a small business using GoHighLevel?",
      answer:
        "Usually when the workflow is already mostly clear, the account is not badly messy, and the main need is getting one or two bounded automations or booking flows live without wasting owner time on implementation details.",
    },
    {
      question: "When should I pay for GoHighLevel consultant help instead?",
      answer:
        "Pay for consultant help when the account already leaks leads, touches multiple channels or tools, depends on clear ownership and handoff logic, or is messy enough that setup-only implementation would just automate confusion faster.",
    },
    {
      question: "How much more does consultant help usually cost than setup help?",
      answer:
        "Focused setup help often lands around $1.5K-$3K. Consultant-level GoHighLevel work is more often around $2K-$6K because the scope includes workflow mapping, cleanup judgment, stack decisions, and revenue-critical system design in addition to implementation.",
    },
    {
      question: "Can the right answer be cleanup first instead of either option?",
      answer:
        "Yes. If the existing account is unreliable enough that nobody trusts the data, stages, or automations, cleanup or rebuild triage may be the smarter first move before you choose between narrower setup help and broader consultant support.",
    },
  ],
  faqSubtitle:
    "Practical questions from small businesses deciding what level of GoHighLevel help they actually need",
  ctaHeading: "Need a realistic second opinion on your GoHighLevel scope?",
  ctaText:
    "Book a 30-minute call. We will look at your current account or planned workflow, decide whether you need focused setup help, deeper consultant judgment, cleanup first, or a different stack entirely, and map the smallest next step worth paying for.",
  ctaSubtext:
    "No vague agency pitch. Just a practical review of the workflow, account state, ownership risk, and likely payoff.",
  relatedLinks: [
    { label: "GoHighLevel automation setup help", href: "/gohighlevel-automation-setup" },
    { label: "GoHighLevel automation consultant", href: "/gohighlevel-automation-consultant" },
    { label: "GoHighLevel consultant cost for small business", href: "/gohighlevel-automation-consultant-cost-small-business" },
    { label: "GoHighLevel setup vs. DIY for small business", href: "/gohighlevel-setup-vs-diy-small-business" },
    { label: "GoHighLevel account cleanup service", href: "/gohighlevel-account-cleanup-service" },
    { label: "GoHighLevel account audit checklist", href: "/gohighlevel-account-audit-checklist" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
