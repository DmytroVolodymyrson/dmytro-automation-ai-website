import {
  Workflow,
  Wrench,
  CalendarCheck,
  MessageSquare,
  MoonStar,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Clock3,
  Building2,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-property-management-companies",
  metaTitle:
    "What to Automate First for Property Management Companies — Choose the Highest-ROI Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in your property management company? Practical guide to choosing between maintenance intake, lease renewals, showing coordination, and after-hours tenant communication before a broader automation rollout.",
  badgeText: "Property Management Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Property Management Companies",
  heroIntro:
    "If your property management company knows it needs better automation, the safest first move is usually not a giant all-in-one platform rebuild. It is one bounded workflow that fixes an expensive communication leak first. For most property management teams, that first workflow is one of four things: maintenance request intake and routing, lease renewal follow-up, showing coordination for vacancies, or after-hours tenant communication and escalation. The right choice depends on where time, occupancy, and resident trust are already slipping today — when maintenance requests arrive through five channels with no clear triage, when renewals go quiet until vacancy risk is already close, when leasing staff lose prospects to slow showing coordination, or when nights and weekends keep turning routine tenant messages into on-call chaos.",
  heroSubtext:
    "Below: how to choose the first property-management workflow to automate, how this page stays distinct from the broader parent page and the already-live child pages, what adjacent proof supports the recommendation, and when you should keep the first project smaller instead of forcing a bigger operations rebuild.",
  sections: [
    {
      type: "cards",
      title: "The first property-management workflows usually worth automating",
      subtitle:
        "Most property managers do not need to automate everything at once. They need to start where communication drag or missed follow-through is already costing real money:",
      items: [
        {
          icon: Wrench,
          title: "Maintenance request intake and routing",
          body: "Start here when resident maintenance requests come through text, phone, portal, and email with weak urgency sorting and inconsistent vendor or manager handoff. This is usually the best first project when the leak starts with intake clarity itself.",
        },
        {
          icon: CalendarCheck,
          title: "Lease renewal follow-up",
          body: "Start here when renewals are tracked loosely, reminders are inconsistent, and managers learn too late which residents are likely to renew or leave. This is the right first workflow when vacancy risk comes from timing and follow-through, not from lead generation.",
        },
        {
          icon: Building2,
          title: "Showing coordination for vacancies",
          body: "Start here when leasing demand exists, but inquiry routing, scheduling, reminders, and no-show follow-up are still slow enough to stretch vacancy time. This is the safest first move when the leak is before a unit gets filled.",
        },
        {
          icon: MoonStar,
          title: "After-hours tenant communication and escalation",
          body: "Start here when nights and weekends keep creating noisy on-call burden, routine tenant questions arrive like emergencies, or nobody trusts the overnight triage layer. This is the heavier communication workflow for teams that need cleaner acknowledgment, escalation, and morning handoff after hours.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which property-management workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact point where speed, ownership, or communication discipline breaks down:",
      options: [
        {
          icon: Wrench,
          heading: "Start with maintenance intake and routing",
          highlighted: true,
          items: [
            "Maintenance requests arrive through too many channels and nobody trusts the urgency sorting",
            "Routine repairs still create avoidable overnight noise because triage rules are weak",
            "Vendors, residents, and managers lose time to intake confusion more than to leasing or renewals",
            "Closest next page: /maintenance-request-automation-for-property-management-companies",
          ],
        },
        {
          icon: CalendarCheck,
          heading: "Start with lease renewal follow-up",
          items: [
            "You already manage occupied units well, but renewal timing and resident follow-through are inconsistent",
            "Vacancy surprises are coming from late outreach instead of weak leasing demand",
            "One saved renewal per month would easily justify the build",
            "Closest next page: /lease-renewal-automation-for-property-management-companies",
          ],
        },
        {
          icon: Building2,
          heading: "Start with showing coordination",
          items: [
            "Vacant units sit too long because inquiry routing and showing booking are slow or messy",
            "Prospects fall off between first inquiry, confirmation, and reminder follow-through",
            "The workflow problem starts before the lease is signed, not after move-in",
            "Closest next page: /showing-coordination-automation-for-property-management-companies",
          ],
        },
        {
          icon: MoonStar,
          heading: "Start with after-hours tenant communication",
          items: [
            "On-call burden is high because routine resident messages are mixed with real overnight emergencies",
            "You need consistent acknowledgment and escalation after hours, not another vague voicemail queue",
            "The team already knows the overnight communication layer is the first bottleneck",
            "Closest next page: /after-hours-tenant-communication-for-property-management-companies",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the property-management cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for property management companies",
          values: [
            "Operators deciding which single workflow deserves to be the first property-management automation project",
            "Helps choose between maintenance intake, lease renewals, showing coordination, and after-hours tenant communication before anything broader gets built",
          ],
        },
        {
          label: "AI automation for property management",
          values: [
            "Operators evaluating the whole property-management communication layer",
            "Explains the broader system across tenant messages, maintenance, renewals, showings, onboarding, reporting, and where automation helps overall",
          ],
        },
        {
          label: "Maintenance request automation for property management companies",
          values: [
            "Teams that already know maintenance intake is the first leak to fix",
            "Focuses narrowly on intake capture, urgency triage, routing, tenant updates, and manager handoff",
          ],
        },
        {
          label: "After-hours tenant communication for property management companies",
          values: [
            "Teams that already know the overnight communication layer is the first problem",
            "Focuses narrowly on acknowledgement, emergency-vs-routine triage, on-call escalation, and cleaner next-morning handoff",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your company?",
      subtitle:
        "This page is useful when you know the operation needs better follow-through, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already see one obvious leak: messy maintenance intake, weak renewal discipline, slow showing coordination, or noisy after-hours resident communication",
            "You want one bounded workflow that proves value before funding a broader property-management automation layer",
            "Managers and coordinators are spending too much time on repeat communication rather than property operations",
            "You want a practical recommendation instead of another generic prop-tech pitch",
            "You care more about occupancy, resident experience, and staff relief than about shiny AI features",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Communication volume is light and the current team already handles renewals, maintenance, and leasing cleanly",
            "The real problem is weak demand, bad unit pricing, or staffing gaps — not follow-through or triage",
            "Nobody agrees on maintenance ownership, renewal policy, or on-call escalation rules at all",
            "You are looking for a giant end-to-end rebuild before proving one narrower workflow first",
            "Manual discipline is already strong and there is no visible leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first property-management automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to vacancy risk, resident frustration, or repeated coordinator drag.",
      blocks: [
        {
          heading: "Start where communication already creates operational loss",
          body: "If maintenance requests are messy before anyone can even tell whether the issue is urgent, intake and routing usually come first. If occupied units are fine but renewals slip too late, renewal follow-up comes first. If vacant units are sitting because prospects are not getting scheduled fast enough, showing coordination comes first. If the real pain is nights and weekends, after-hours tenant communication comes first. The decision should follow the leak, not whichever automation sounds most advanced.",
        },
        {
          heading: "Keep the first workflow small enough to run cleanly",
          body: "A narrower first build gives you faster time to value and fewer places to hide a broken process. Most property-management teams learn more from one disciplined workflow than from a half-finished operations stack that touches every resident message before the team is ready.",
        },
        {
          heading: "Treat after-hours triage as a distinct problem from daytime communication",
          body: "Many teams should start with cleaner maintenance intake or lease-renewal follow-up before they jump into full overnight communication coverage. But if on-call chaos is already the cost center, the after-hours workflow deserves to come first. It should be chosen because the overnight burden is real, not because voice or text automation sounds impressive.",
        },
        {
          heading: "Let the first workflow teach you what the broader system should include",
          body: "Once one narrow property-management workflow is working, you learn where response timing, escalation rules, and ownership actually fail. That makes the bigger automation roadmap safer because it is grounded in real operations instead of assumptions about every resident conversation at once.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first property-management automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest rebuild instead of the clearest leak",
          body: "Many property-management teams jump straight to a full communications overhaul when the real issue is still one stage: intake, renewals, showings, or overnight triage. Bigger scope feels strategic, but it usually delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring coordinator and manager time as a real cost",
          body: "DIY work is not free when managers spend weeks patching reminder rules, escalation paths, and routing logic between resident issues. The first workflow should be scoped against both cash cost and staff time drag.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: unresolved intake confusion, renewal surprises, vacant days, or overnight noise. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published property-management first-project case study on the site yet, so this page stays grounded in the live property-management cluster plus published communication and CRM proof.",
      studies: [
        {
          industry: "Property-management cluster",
          headline: "The live property-management pages already isolate the exact first-project options this page is comparing",
          body: "The broader property-management parent plus the lease-renewal, showing, maintenance, tenant-communication, and after-hours children already break the cluster into real workflow stages. This page sits one level earlier and helps an operator choose which of those narrower workflows should come first.",
          link: "/ai-automation-for-property-management",
        },
        {
          industry: "Published call-handling proof",
          headline: "The Paris Cafe case study proves the value of structured after-hours acknowledgement and response when nobody can answer live",
          body: "That project is not a property-management deployment, but it is direct proof that clear after-hours triage and live response handling change outcomes when demand arrives outside staffed hours. The same operating logic applies to resident communication and on-call escalation.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ lead CRM case study proves why structured routing, follow-up ownership, and system visibility matter before records quietly decay",
          body: "That e-commerce build is not a property-management project, but it is direct proof that fragmented communication and weak ownership destroy recoverable value. The same logic supports maintenance-routing visibility, renewal follow-up, and showing coordination in property management.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for property management", href: "/ai-automation-for-property-management" },
        { label: "Maintenance request automation for property management companies", href: "/maintenance-request-automation-for-property-management-companies" },
        { label: "Lease renewal automation for property management companies", href: "/lease-renewal-automation-for-property-management-companies" },
        { label: "After-hours tenant communication for property management companies", href: "/after-hours-tenant-communication-for-property-management-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should a property management company automate first?",
      answer:
        "Usually start where the most expensive communication leak is already obvious: maintenance intake if requests arrive through too many channels with weak triage, lease renewals if vacancy risk comes from late outreach, showing coordination if vacant units sit because scheduling is slow, or after-hours tenant communication if nights and weekends keep creating on-call chaos.",
    },
    {
      question: "How is this different from the broader AI automation for property management page?",
      answer:
        "The broader parent page explains the full property-management automation layer. This page stays one level earlier in the decision chain. It helps you choose which single workflow should come first before you fund a broader rollout.",
    },
    {
      question: "When should maintenance intake come before lease renewal automation?",
      answer:
        "Choose maintenance intake first when resident requests are messy, urgency sorting is weak, or vendor and manager handoff are already creating avoidable operational drag. Choose lease renewals first when occupancy risk is coming from late outreach and weak follow-through with existing residents.",
    },
    {
      question: "When should after-hours tenant communication come first?",
      answer:
        "It should come first when overnight and weekend communication is the main burden already — routine issues wake up on-call staff, emergencies are not separated cleanly, or nobody trusts what happens after office hours. If daytime intake or renewals are clearly the bigger leak, start there instead.",
    },
    {
      question: "Can one first workflow really justify a broader property-management automation project later?",
      answer:
        "Yes, if the first workflow fixes a real leak and gives the team operational clarity. A clean first build shows where response timing, escalation rules, and ownership actually break. That makes the broader roadmap safer and easier to scope from real evidence instead of assumptions.",
    },
  ],
  faqSubtitle:
    "Practical questions about choosing the first property-management automation",
  ctaHeading:
    "Need help choosing the first property-management workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your property-management operation is leaking through maintenance intake, lease renewals, showing coordination, or after-hours tenant communication now, then recommend the narrowest first workflow worth building before anything broader gets funded.",
  ctaSubtext:
    "No generic prop-tech pitch. Just a practical conversation about where automation should start — and where it should wait.",
  relatedLinks: [
    { label: "AI automation for property management", href: "/ai-automation-for-property-management" },
    { label: "Maintenance request automation for property management companies", href: "/maintenance-request-automation-for-property-management-companies" },
    { label: "Lease renewal automation for property management companies", href: "/lease-renewal-automation-for-property-management-companies" },
    { label: "Showing coordination automation for property management companies", href: "/showing-coordination-automation-for-property-management-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
