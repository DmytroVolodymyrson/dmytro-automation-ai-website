import {
  Workflow,
  Route,
  ClipboardCheck,
  ArrowRightLeft,
  LayoutDashboard,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Wrench,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-contractors",
  metaTitle:
    "What to Automate First for Contractors — Choose the First CRM Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in your contracting business? Practical guide to choosing between intake routing, estimate follow-up, dispatch handoff, and pipeline cleanup before a bigger CRM build.",
  badgeText: "Contractor Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Contractors",
  heroIntro:
    "If your contracting business knows it needs better CRM automation, the safest first move is usually not a full system rebuild. It is one bounded workflow that fixes an expensive leak. For most contractors, that first workflow is one of four things: cleaner intake routing, faster estimate follow-up, better booked-job handoff to dispatch, or pipeline cleanup before any heavier automation goes live. The right choice depends on where jobs are actually getting lost now — before the estimate, after the estimate, or between the office and the field.",
  heroSubtext:
    "Below: how to choose the first contractor workflow to automate, how this page stays distinct from the broader contractor CRM and setup-help pages, what adjacent proof supports the recommendation, and when you should slow down and clean up the pipeline before automating anything else.",
  sections: [
    {
      type: "cards",
      title: "The first contractor workflows usually worth automating",
      subtitle:
        "Most contractor teams do not need to automate everything at once. They need to start where the leak is clearest:",
      items: [
        {
          icon: Route,
          title: "Job intake routing",
          body: "Start here when new requests arrive from calls, forms, texts, and referral sources but nobody consistently owns the next step. Intake routing is the right first build when leads are getting buried before an estimator even sees them.",
        },
        {
          icon: ClipboardCheck,
          title: "Estimate follow-up",
          body: "Start here when estimates go out reliably but too many of them die in silence. This is usually the best first workflow when the business already generates opportunities but quote-stage discipline is weak.",
        },
        {
          icon: ArrowRightLeft,
          title: "Dispatch handoff",
          body: "Start here when booked jobs keep losing notes, scheduling details, or technician context between the office and the field. This is the best first move when sales are happening but operations are absorbing the pain.",
        },
        {
          icon: LayoutDashboard,
          title: "Pipeline cleanup before automation",
          body: "Start here when nobody agrees what the stages mean, who owns each state, or when a job becomes quoted, booked, or complete. In that case, the first project is not more triggers. It is making the pipeline trustworthy enough to automate around.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which contractor workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact point where speed, ownership, or visibility breaks down:",
      options: [
        {
          icon: Route,
          heading: "Start with intake routing",
          highlighted: true,
          items: [
            "You miss good leads before the estimate stage because office triage is inconsistent",
            "New requests from calls, forms, or texts are not getting assigned cleanly",
            "Speed-to-lead is still the biggest leak in the business",
            "Closest next page: /job-intake-routing-automation-for-contractors",
          ],
        },
        {
          icon: ClipboardCheck,
          heading: "Start with estimate follow-up",
          items: [
            "The estimator already sends quotes, but follow-up happens too late or not at all",
            "Open estimates sit without visibility and nobody knows which jobs are still warm",
            "One recovered job per month would easily justify a focused build",
            "Closest next page: /estimate-follow-up-automation-for-contractors",
          ],
        },
        {
          icon: ArrowRightLeft,
          heading: "Start with dispatch handoff",
          items: [
            "Jobs are being sold but context gets lost as work moves to scheduling or field execution",
            "Technicians arrive without the notes the office already had",
            "Operations friction is creating callbacks, reschedules, or unhappy customers",
            "Closest next page: /dispatch-handoff-automation-for-contractors",
          ],
        },
        {
          icon: LayoutDashboard,
          heading: "Start with pipeline cleanup first",
          items: [
            "The team does not trust the CRM stages enough to trigger anything from them",
            "Different people use different stage names for the same workflow moment",
            "Reporting is fiction because the pipeline states are unclear",
            "Closest next page: /crm-pipeline-stages-for-contractors",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the contractor CRM cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for contractors",
          values: [
            "Owners deciding which single contractor workflow to fix before funding a bigger CRM layer",
            "Helps choose the first bounded workflow: intake routing, estimate follow-up, dispatch handoff, or pipeline cleanup",
          ],
        },
        {
          label: "CRM automation for contractors",
          values: [
            "Owners evaluating the whole operating layer",
            "Explains the broader contractor CRM system across pipeline structure, follow-up, dispatch, and visibility",
          ],
        },
        {
          label: "CRM automation setup for contractors",
          values: [
            "Owners already ready to configure a contractor CRM or automation stack",
            "Covers rollout scope, integrations, ownership, testing, pricing, and what good implementation help should include",
          ],
        },
        {
          label: "CRM pipeline stages for contractors",
          values: [
            "Teams that need a trustworthy workflow map before adding more automation",
            "Defines the stage logic itself: intake, qualification, estimate, booked job, completion, and ownership changes",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your company?",
      subtitle:
        "This page is useful when you already know a broader contractor CRM build is possible, but you need to choose the safest first workflow.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You know the business needs more structure, but you want the smallest high-payoff first project",
            "Leads, estimates, or dispatch handoffs are leaking in a visible, measurable way",
            "You want a bounded workflow that proves value before a broader CRM rollout",
            "The office and field teams already feel the friction at one specific stage",
            "You want honest prioritization, not another all-in-one software pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You still do very little inbound volume and there is no meaningful workflow pressure yet",
            "The team has no agreement on who owns leads, estimates, or job handoff at all",
            "The main problem is weak lead quality or pricing, not process leakage",
            "You are looking for a giant rebuild before proving one narrower workflow first",
            "Manual follow-up is already disciplined and the business does not have a visible handoff problem",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first contractor automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost revenue or repeated admin drag.",
      blocks: [
        {
          heading: "Start where delay costs real money",
          body: "If good leads are waiting too long to reach an estimator, intake routing comes first. If quotes are getting sent but not worked, estimate follow-up comes first. If sold jobs are creating downstream confusion, dispatch handoff comes first. The decision should follow the leak, not whichever automation demo looked nicest last week.",
        },
        {
          heading: "Use one bounded workflow to prove the system",
          body: "A smaller build gives you cleaner implementation, clearer ROI, and fewer places to hide a bad process. Contractors often get more value from one disciplined workflow than from a half-finished bigger CRM layer that tries to own everything at once.",
        },
        {
          heading: "Clean up the pipeline before layering on triggers if the stages are unstable",
          body: "When the office cannot agree on what counts as quoted, booked, or completed, automations fire at the wrong times. That is the point where pipeline-stage cleanup is the real first project. Good contractor automation depends on stable workflow states.",
        },
        {
          heading: "Let the first workflow shape the next build",
          body: "Once one narrow workflow is working, you learn where the real handoffs, integration gaps, and ownership issues live. That makes the broader CRM project safer because it is now grounded in actual contractor workflow behavior instead of assumptions.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Common mistakes when picking the first contractor workflow",
      subtitle:
        "These are the mistakes that turn a useful contractor build into another messy software project:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest project instead of the highest-value leak",
          body: "Many contractor teams jump straight to a full CRM overhaul when the real issue is still one stage: intake routing, estimate recovery, or dispatch visibility. Bigger scope feels strategic, but it often slows the time to value.",
        },
        {
          icon: Clock,
          title: "Ignoring owner and office time as a real cost",
          body: "DIY work is not free when the owner or office manager spends weeks untangling stages, triggers, and follow-up rules. The first workflow should be scoped against both cash cost and the time drag of getting it wrong.",
        },
        {
          icon: Wrench,
          title: "Forcing automation before the workflow is repeatable",
          body: "If every job is handled with different notes, different naming, and different ownership, the workflow is not ready yet. The first step may still be automation, but only after the trigger state and human handoff are clearly defined.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "You should know what the current leak costs: response lag, open estimates, dispatch confusion, admin hours, or callbacks. Without that baseline, it is hard to choose the right first workflow or prove that the first build worked.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published contractor-first-project case study on the site yet, so the page stays grounded in the live contractor cluster plus published CRM proof.",
      studies: [
        {
          industry: "Contractor cluster",
          headline: "The live contractor pages already isolate the exact first-project choices this page is comparing",
          body: "The contractor CRM, pipeline, setup, intake, estimate, and dispatch guides already break the cluster into real workflow stages. This page sits one level earlier and helps a contractor choose which of those bounded workflows should come first.",
          link: "/crm-automation-for-contractors",
        },
        {
          industry: "Published CRM case study",
          headline: "The 5,600+ lead CRM case study proves the value of fixing ownership and follow-up before adding more complexity",
          body: "The WheelsFeels CRM case study is not a contractor build, but it is direct proof that stage clarity, structured follow-up, and visible next actions matter before automation can scale cleanly. The same operating principle applies to contractor workflows.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Trade-service adjacency",
          headline: "The roofing and HVAC clusters reinforce the same sequencing rule: start with the leak closest to revenue",
          body: "Those live trade pages show the narrower handoff problems clearly — missed calls, estimate follow-up, booking friction, and phone coverage. This contractor page applies the same practical sequencing logic to the broader contractor CRM cluster.",
          link: "/ai-automation-for-roofing-companies",
        },
      ],
      links: [
        { label: "CRM automation for contractors", href: "/crm-automation-for-contractors" },
        { label: "CRM pipeline stages for contractors", href: "/crm-pipeline-stages-for-contractors" },
        { label: "Job intake routing automation for contractors", href: "/job-intake-routing-automation-for-contractors" },
        { label: "Estimate follow-up automation for contractors", href: "/estimate-follow-up-automation-for-contractors" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What contractor workflow should I automate first before building a bigger CRM layer?",
      answer:
        "Usually start where the most expensive leak is already obvious: intake routing if good leads are getting buried before the estimate, estimate follow-up if sent quotes are dying in silence, dispatch handoff if sold jobs keep losing context, or pipeline cleanup if nobody trusts the stages enough to automate them.",
    },
    {
      question: "How is this different from the broader contractor CRM page?",
      answer:
        "The broader contractor CRM page covers the whole operating system. This page is narrower. It helps you choose which contractor workflow to automate first before you fund or scope a bigger CRM layer.",
    },
    {
      question: "How is this different from contractor CRM setup help?",
      answer:
        "Setup help is the implementation layer. It assumes you are ready to configure the system. This page comes one step earlier and answers the scoping question first: which workflow deserves to be the first contractor automation project at all?",
    },
    {
      question: "Can a contractor start with one workflow instead of a full CRM rebuild?",
      answer:
        "Usually yes. That is often the safer path. A bounded workflow like intake routing, estimate follow-up, or dispatch handoff proves value faster, teaches you where the real ownership gaps are, and reduces the risk of paying for a bloated rollout before the team is ready.",
    },
    {
      question: "What is the main ROI of choosing the first workflow correctly?",
      answer:
        "You get cleaner time-to-value, lower implementation risk, and a faster path to measurable wins. In practice that means recovered leads, more worked estimates, fewer office-to-field mistakes, or less admin drag — without forcing a bigger CRM build before the business has earned it.",
    },
  ],
  faqSubtitle: "Practical questions about choosing the first contractor automation",
  ctaHeading: "Need help choosing the first contractor workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your contracting business is leaking leads, estimates, or job context now, then recommend whether the first move should be intake routing, estimate follow-up, dispatch handoff, or pipeline cleanup before a bigger CRM project.",
  ctaSubtext:
    "No giant-software pitch. Just a practical first-project recommendation tied to the way your office and field teams actually work.",
  relatedLinks: [
    { label: "CRM automation for contractors", href: "/crm-automation-for-contractors" },
    { label: "CRM automation setup for contractors", href: "/crm-automation-setup-for-contractors" },
    { label: "CRM pipeline stages for contractors", href: "/crm-pipeline-stages-for-contractors" },
    { label: "Estimate follow-up automation for contractors", href: "/estimate-follow-up-automation-for-contractors" },
    { label: "Dispatch handoff automation for contractors", href: "/dispatch-handoff-automation-for-contractors" },
  ],
};

export default data;
