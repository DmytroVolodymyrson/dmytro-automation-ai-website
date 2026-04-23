import {
  Scale,
  LayoutDashboard,
  Code2,
  Wrench,
  CalendarCheck,
  Zap,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "gohighlevel-vs-custom-crm-for-contractors",
  metaTitle:
    "GoHighLevel vs. Custom CRM for Contractors | Dmytro AI",
  metaDescription:
    "Should a contractor use GoHighLevel or a custom CRM? Compare speed to launch, estimate follow-up, dispatch handoff, field context, and the cost tradeoffs for contractor workflows.",
  badgeText: "Contractor CRM Decision",
  badgeIcon: Scale,
  h1: "GoHighLevel vs. Custom CRM for Contractors",
  heroIntro:
    "If you run a contracting business, this decision is not really about software features. It is about where your operation actually breaks. If the main problem is lead capture, basic follow-up, and calendar booking, GoHighLevel can be enough. If jobs are getting lost between intake, estimate follow-up, scheduling, dispatch, and field handoff, a generic marketing-first CRM usually needs help. The right answer depends on whether you need a fast off-the-shelf pipeline or a system built around contractor operations.",
  heroSubtext:
    "Below: when GoHighLevel is enough for a contractor, when a custom or hybrid CRM stack is worth it, and what the cost math looks like once estimate follow-up and office-to-field handoff matter.",
  sections: [
    {
      type: "cards",
      title: "What this decision really changes for contractors",
      subtitle:
        "The best option depends on which part of the workflow carries the most revenue risk:",
      items: [
        {
          icon: LayoutDashboard,
          title: "Lead capture and basic nurture",
          body: "If your office mainly needs forms, missed-call follow-up, simple pipeline stages, appointment booking, and basic text/email sequences, GoHighLevel can cover a lot quickly. It is strongest when your workflow still looks like a standard lead-to-booking funnel.",
        },
        {
          icon: Wrench,
          title: "Estimate-stage control",
          body: "Contractors usually start to outgrow generic CRM setups when the estimate stage gets messy. Different service types, job sizes, territories, estimator ownership, and objection-aware follow-up often need tighter logic than a stock pipeline template gives you.",
        },
        {
          icon: CalendarCheck,
          title: "Dispatch and office-to-field handoff",
          body: "Once booked work needs cleaner notes, technician context, scheduling rules, exception routing, or sync with field-service tools, the CRM choice becomes an operations decision. This is where custom or hybrid setups usually beat a one-tool-first approach.",
        },
        {
          icon: Zap,
          title: "Reporting and ownership",
          body: "The real question is whether the system shows who owns the lead, what stage it is in, what should happen next, and where revenue is leaking. A simpler tool with disciplined automation is better than a giant platform nobody trusts or updates consistently.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side for contractor workflows",
      subtitle:
        "Generic small-business advice misses the field-service realities. This version is specific to contractors:",
      headers: ["GoHighLevel", "Custom or hybrid CRM"],
      rows: [
        {
          label: "Fastest path to launch",
          values: ["Best when you need something live this week", "Slower upfront, but shaped around your actual workflow"],
        },
        {
          label: "Estimate follow-up",
          values: ["Works for simple sequences and reminders", "Better for stage-specific logic, routing, and estimator ownership"],
        },
        {
          label: "Dispatch / field handoff",
          values: ["Possible, but usually awkward once it gets detailed", "Much stronger when office-to-field context really matters"],
        },
        {
          label: "Contractor stack fit",
          values: ["Good if GHL stays the main operating hub", "Better if you need to sit around Jobber, Housecall Pro, ServiceTitan, spreadsheets, or a mixed stack"],
        },
        {
          label: "Upfront cost",
          values: ["Low to moderate", "Higher build cost upfront"],
        },
        {
          label: "Long-term ownership",
          values: ["Vendor lock-in is higher", "You keep more control over process and data"],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option is the better fit",
      subtitle:
        "For contractors, the cleanest answer is usually one of these two lanes:",
      options: [
        {
          icon: LayoutDashboard,
          heading: "Use GoHighLevel when…",
          highlighted: false,
          items: [
            "You need lead capture, missed-call follow-up, booking, and basic nurture live quickly",
            "Your office process is still fairly simple and one team handles most of the customer communication",
            "You do not yet need deep dispatch or estimator-routing logic",
            "You want a pre-built platform and are okay adapting some workflow details to the tool",
            "You would rather prove the process first, then decide later whether deeper customization is worth it",
          ],
        },
        {
          icon: Code2,
          heading: "Use custom or hybrid when…",
          highlighted: true,
          items: [
            "You already know your intake, estimate, and dispatch handoffs are where jobs get lost",
            "Different service types or crews need different routing and follow-up rules",
            "Your field-service software and CRM responsibilities are split across multiple tools",
            "You are tired of forcing contractor operations into a marketing-first platform",
            "You want the CRM layer to match your workflow instead of training your team around platform limits",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "The cost tradeoff is not just the monthly subscription",
      subtitle:
        "Contractors usually misprice this decision in two ways:",
      blocks: [
        {
          heading: "GoHighLevel looks cheap until operations complexity shows up",
          body: "The software fee is not the whole cost. You also pay in setup time, workaround logic, admin friction, and the cost of office staff babysitting stages the system never really understood. If GHL handles your contractor workflow cleanly, great. If your team keeps breaking process outside the CRM, the cheap monthly fee is hiding a more expensive operational leak.",
        },
        {
          heading: "Custom sounds expensive until you isolate the real workflow",
          body: "A contractor does not need a giant bespoke platform on day one. Sometimes the right custom layer is narrow: estimate follow-up, intake routing, or dispatch handoff. A focused build can cost more upfront than a GHL setup, but if it fixes the exact stage where quotes die or job context gets lost, it can pay back faster than another year of workarounds.",
        },
        {
          heading: "Hybrid is often the practical answer",
          body: "A lot of contractors do not need an all-or-nothing decision. GHL can still handle parts of lead communication while a custom workflow handles routing, quote-stage logic, or office-to-field handoff. That hybrid approach only works if the ownership boundaries are clear. Otherwise you just create two messy systems instead of one.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit / not-fit framing",
      subtitle:
        "This page is useful if you are making a real contractor CRM decision — not just browsing software features:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You send a meaningful number of estimates and need more disciplined follow-up",
            "More than one person touches intake, scheduling, or dispatch",
            "Your current stack already feels split between marketing, sales, and operations",
            "You need to decide whether to keep building on GHL or stop forcing the fit",
            "You want to automate the narrowest high-payoff workflow first instead of rebuilding everything at once",
          ],
        },
        {
          icon: XCircle,
          heading: "Probably not the right fit yet",
          variant: "neutral",
          items: [
            "You are still a solo operator with a tiny referral-driven pipeline",
            "You have not agreed on your actual stages, owners, or handoffs yet",
            "You want a giant custom system before proving one high-friction workflow",
            "Your process is simple enough that a basic CRM plus manual follow-up still works fine",
            "You are really choosing between staff discipline problems, not software problems",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Where contractor CRM choices usually go wrong",
      subtitle:
        "The trap is usually trying to solve a workflow problem with a tool debate alone:",
      items: [
        {
          icon: AlertTriangle,
          title: "Buying GHL before defining the contractor workflow",
          body: "If you have not clarified intake ownership, estimate stages, dispatch handoff, and close-lost reasons, GHL will not magically give you those decisions. It will just hold the confusion in a prettier interface.",
        },
        {
          icon: Clock,
          title: "Overbuilding custom before the narrow problem is proven",
          body: "Going custom does not mean rebuilding your whole business. The safe move is usually to fix one expensive leak first: estimate follow-up, intake routing, or office-to-field handoff. Then expand only if the workflow proves itself.",
        },
        {
          icon: Zap,
          title: "Ignoring the people who actually use the system",
          body: "A CRM choice fails fast when estimators, office staff, and dispatchers all work around it differently. The better system is the one your team will actually trust, update, and use under pressure on a busy day.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof for this decision",
      subtitle:
        "There is no published contractor-specific GoHighLevel case study on the site, so the proof stays adjacent and honest:",
      studies: [
        {
          industry: "Contractor cluster",
          headline: "The live contractor pages already isolate the exact stages where platform fit starts to matter",
          body: "The contractor CRM, estimate follow-up, dispatch handoff, and intake-routing pages all point to the same operational truth: the more your process depends on clean office-to-field handoffs, the more important workflow fit becomes. This page sits at the decision layer above those narrower guides.",
          link: "/crm-automation-for-contractors",
        },
        {
          industry: "CRM adjacency",
          headline: "The published 5,600+ lead CRM case study proves the discipline side of the problem",
          body: "The WheelsFeels build shows what happens when contact organization, tagging, follow-up, and internal visibility are handled well. Contractor workflows are different, but the underlying CRM discipline problem is the same: if ownership and stage logic are weak, revenue leaks quietly.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "CRM automation for contractors", href: "/crm-automation-for-contractors" },
        { label: "Estimate follow-up automation for contractors", href: "/estimate-follow-up-automation-for-contractors" },
        { label: "Dispatch handoff automation for contractors", href: "/dispatch-handoff-automation-for-contractors" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Should most contractors start with GoHighLevel or custom?",
      answer:
        "Most should start by clarifying the narrow workflow they need to fix first. If the problem is basic lead capture and follow-up, GoHighLevel can be enough. If the real pain is estimate-stage leakage, routing complexity, or office-to-field handoff, a custom or hybrid setup is often the better long-term fit.",
    },
    {
      question: "Can GoHighLevel work for contractors using Jobber, Housecall Pro, or ServiceTitan?",
      answer:
        "Sometimes, yes. But it usually works best as a communication and pipeline layer, not as the full operating system for contractor operations. The more your workflow depends on dispatch details, technician readiness, service-type routing, and post-estimate ownership, the more carefully the integration boundaries need to be designed.",
    },
    {
      question: "What does a contractor-focused custom CRM build usually cost?",
      answer:
        "A narrow contractor workflow build can land around $1.5K-$3K if it is focused on one stage like estimate follow-up or intake routing. A broader contractor CRM layer that covers routing, handoff logic, reminders, reporting, and integration work is more often a $3K-$8K conversation depending on complexity and how custom the stack needs to be.",
    },
    {
      question: "Is a hybrid setup realistic, or does it just create more mess?",
      answer:
        "Hybrid can work well if each system has a clear job. For example, GoHighLevel might handle forms, missed-call text-back, and basic nurture while a custom workflow handles intake rules, estimate-stage logic, or dispatch handoff. It becomes messy only when nobody defines which system owns what.",
    },
    {
      question: "What should a contractor automate first before choosing the whole stack?",
      answer:
        "Usually the first expensive leak is either estimate follow-up or intake ownership. If the business responds slowly, loses track of incoming requests, or lets sent quotes die quietly, start there. Fixing one high-friction stage tells you much more about the right CRM path than debating features in the abstract.",
    },
  ],
  faqSubtitle: "Practical questions about GoHighLevel vs. custom CRM for contractors",
  ctaHeading: "Need to decide whether contractor operations should stay in GHL?",
  ctaText:
    "Book a 30-minute call. We will look at how your contractor workflow actually runs today, where the friction lives, and whether GoHighLevel, a custom layer, or a hybrid setup makes the most sense for the next build.",
  ctaSubtext:
    "No software hype. Just a practical decision based on your actual pipeline and handoffs.",
  relatedLinks: [
    { label: "CRM automation for contractors", href: "/crm-automation-for-contractors" },
    { label: "Estimate follow-up automation for contractors", href: "/estimate-follow-up-automation-for-contractors" },
    { label: "Dispatch handoff automation for contractors", href: "/dispatch-handoff-automation-for-contractors" },
    { label: "Job intake routing automation for contractors", href: "/job-intake-routing-automation-for-contractors" },
    { label: "GoHighLevel vs. custom CRM for small business", href: "/gohighlevel-vs-custom-crm-small-business" },
  ],
};

export default data;
