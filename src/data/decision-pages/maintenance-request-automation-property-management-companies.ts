import {
  Building2,
  Wrench,
  TriangleAlert,
  BellRing,
  Send,
  Users,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  FileText,
  Clock,
  Activity,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "maintenance-request-automation-for-property-management-companies",
  metaTitle:
    "Maintenance Request Automation for Property Management Companies — Faster Triage, Better Tenant Communication | Dmytro AI",
  metaDescription:
    "How property management companies automate maintenance request intake, urgency triage, vendor routing, tenant updates, and manager handoff without turning the process into chaos.",
  badgeText: "Property Management Workflow",
  badgeIcon: Building2,
  h1: "Maintenance Request Automation for Property Management Companies",
  heroIntro:
    "Property management teams do not get buried in maintenance only because things break. They get buried because requests come in through five different channels, after-hours issues are hard to triage, tenants do not know what happens next, and routine work sits beside real emergencies with no clean handoff. Maintenance request automation fixes that narrow operating workflow. It captures the issue, sorts urgency, routes the next step, keeps the resident updated, and escalates the exceptions to a human before the process turns into tenant frustration and internal fire drills.",
  heroSubtext:
    "Below: what maintenance request automation actually handles, how it differs from broader property-management automation and the renewal or showing child pages, what guardrails matter, and what adjacent proof honestly supports this page.",
  sections: [
    {
      type: "cards",
      title: "What maintenance request automation actually handles",
      subtitle:
        "This page is intentionally narrow. It is about request intake, triage, routing, and resident communication — not the full property-management operating stack.",
      items: [
        {
          icon: Wrench,
          title: "One intake path across text, form, email, and phone",
          body: "The first win is operational hygiene. Instead of requests landing in scattered inboxes, voicemails, and team texts, the workflow pulls them into one controlled path so nothing gets lost because it arrived through the wrong channel.",
        },
        {
          icon: TriangleAlert,
          title: "Emergency vs. routine triage with explicit rules",
          body: "The system can flag likely emergencies like leaks, lockouts, loss of heat, or electrical hazards and route them differently from routine maintenance. The key is explicit operating rules, not improvisation.",
        },
        {
          icon: FileText,
          title: "Structured issue details before dispatch",
          body: "Good automation collects the basics early: unit, issue type, urgency clues, photos if applicable, access notes, and resident contact details. That means vendors and managers do not start every job by reconstructing what the problem even is.",
        },
        {
          icon: Send,
          title: "Automatic tenant confirmation and status updates",
          body: "Residents should know their request was received, what happens next, and when to expect a response. Automated confirmations and stage-based updates reduce follow-up calls that only exist because nobody acknowledged the issue clearly.",
        },
        {
          icon: Users,
          title: "Vendor or manager handoff with context attached",
          body: "When the request needs a human, the workflow routes it with the relevant details attached instead of forwarding a vague message. That keeps handoff clean for internal staff, maintenance coordinators, and outside vendors.",
        },
        {
          icon: Activity,
          title: "Visibility into backlog and response bottlenecks",
          body: "The team can see which requests are new, which are waiting on triage, which were dispatched, and where communication stalled. That visibility matters more than simply firing off automated replies.",
        },
      ],
    },
    {
      type: "table",
      title: "Maintenance request automation vs. broader property-management workflows",
      subtitle:
        "Related pages can coexist when the workflow stage and operating problem are clearly different:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for property management",
          values: [
            "Operators evaluating the whole automation opportunity across tenant communication, maintenance, renewals, showings, and owner reporting",
            "Covers the broader portfolio operating picture and where automation fits overall",
          ],
        },
        {
          label: "Maintenance request automation",
          values: [
            "Teams where intake, urgency triage, routing, and resident updates are inconsistent or too manual",
            "Creates a cleaner request-handling system from first report through handoff and status visibility",
          ],
        },
        {
          label: "Showing coordination automation",
          values: [
            "Teams focused on vacancy leasing speed",
            "Solves inquiry-to-showing execution for prospects, not tenant maintenance operations",
          ],
        },
        {
          label: "Lease renewal automation",
          values: [
            "Teams focused on retention and earlier renewal visibility",
            "Solves a different resident-lifecycle stage; useful, but not the same service-ops problem",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your portfolio?",
      subtitle:
        "Best for operators where maintenance communication volume is high enough that the process breaks down without structure.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Maintenance requests arrive through multiple channels and create duplicate work",
            "After-hours issues still depend on whoever notices the message first",
            "Residents regularly ask for status because the first acknowledgement is slow or inconsistent",
            "Vendors or internal techs waste time because work orders lack the right details",
            "You manage enough units that maintenance coordination is a real operational bottleneck",
            "You want managers handling exceptions and approvals, not repetitive intake administration",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your portfolio is small enough that maintenance requests are handled personally and on time already",
            "Your PM software already runs a reliable intake, dispatch, and tenant-update workflow that your team actually uses",
            "Your contact data, vendor rules, or property ownership data are too messy to trust the routing",
            "You want automation making unsupervised maintenance-approval decisions without human review",
            "Your bigger problem is leasing demand or renewals, not maintenance operations",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for maintenance request workflows",
      subtitle:
        "The workflow should reduce chaos, not create false confidence or dangerous routing mistakes.",
      items: [
        {
          icon: ShieldCheck,
          title: "Do not let the system invent emergency logic",
          body: "Emergency handling should follow explicit portfolio rules: what counts as urgent, who gets contacted, what escalation happens after hours, and when a manager must be looped in immediately. This is operations logic, not guesswork.",
        },
        {
          icon: FileText,
          title: "Collect the minimum useful detail before dispatch",
          body: "A maintenance workflow is only as good as the information it gathers. If the request reaches the vendor without unit details, symptom description, contact info, or access notes, the automation only sped up confusion.",
        },
        {
          icon: BellRing,
          title: "Only send status updates from trustworthy workflow stages",
          body: "Automated tenant updates are valuable, but only if the stage data is reliable. Do not promise that work is scheduled or complete unless the source system actually reflects that status cleanly.",
        },
        {
          icon: Clock,
          title: "Track response time and handoff failure points",
          body: "The real ROI is not just faster confirmations. It is seeing where requests are stalling: intake, triage, vendor assignment, resident access, or close-out. That is what lets the team improve the operating system instead of masking the bottleneck.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical maintenance request system usually works",
      subtitle:
        "The strongest version is boring in a good way: every request lands in one place, gets classified clearly, and moves forward visibly.",
      blocks: [
        {
          heading: "The request enters one controlled intake path",
          body: "Calls, texts, forms, and emails should all feed the same workflow or at least the same source of truth. That alone removes a large part of the operational chaos in maintenance-heavy portfolios.",
        },
        {
          heading: "The workflow sorts urgency and collects structured context",
          body: "Before anyone is dispatched, the system captures what happened, where it happened, who reported it, and whether the issue matches an emergency rule. The goal is a cleaner first handoff, not just a quicker one.",
        },
        {
          heading: "The right next step gets routed automatically",
          body: "Routine issues can move into the normal service queue. Likely emergencies can alert on-call staff or managers. Resident questions that stop being routine can route to a human with the thread already attached.",
        },
        {
          heading: "The resident gets clear acknowledgement and next-step communication",
          body: "Most frustration comes from uncertainty, not only repair time. A solid workflow tells the resident their request was received and gives the next expected step without forcing the office to send every update manually.",
        },
        {
          heading: "Operators can finally see where maintenance operations leak",
          body: "Instead of guessing why residents keep calling back, the team can see whether the issue is slow triage, weak vendor handoff, missing details, or poor follow-up after dispatch. That visibility is the real long-term payoff.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no published maintenance-specific case study yet. The honest proof frame is the already-live property-management parent page plus adjacent after-hours triage and communication automation proof.",
      studies: [
        {
          industry: "Property management parent page",
          headline: "The broader property-management guide already establishes maintenance routing as a core workflow",
          body: "The parent page explicitly includes maintenance request intake and routing as one of the highest-value automation wins in the portfolio. This child page narrows that broader idea to the request-handling stage where intake discipline, urgency rules, and tenant updates matter most.",
          link: "/ai-automation-for-property-management",
        },
        {
          industry: "Adjacent after-hours triage proof",
          headline: "Published voice-agent work shows the same fast-response and routing discipline this workflow depends on",
          body: "The Paris Cafe voice-agent case study proves 24/7 inbound handling, immediate acknowledgement, and next-step routing. Maintenance requests use different language, but the operating pattern is similar: capture the issue quickly, route by urgency, and only escalate the exceptions to a human.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for property management", href: "/ai-automation-for-property-management" },
        { label: "Lease renewal automation for property management companies", href: "/lease-renewal-automation-for-property-management-companies" },
        { label: "Showing coordination automation for property management companies", href: "/showing-coordination-automation-for-property-management-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the main property-management automation page?",
      answer:
        "The main property-management page is broader and covers multiple workflows. This page is narrower. It focuses specifically on maintenance request intake, urgency triage, vendor or manager routing, resident updates, and visibility into where requests are stalling.",
    },
    {
      question: "Can this work with AppFolio, Buildium, Rent Manager, Yardi, or another PM system?",
      answer:
        "Usually yes, as long as there is a reliable way to capture requests, property or unit context, resident contact data, and status changes. Direct integrations are ideal, but practical workflows can also be driven from forms, inboxes, exports, webhooks, or communication-layer tooling.",
    },
    {
      question: "What does a focused maintenance request automation build usually cost?",
      answer:
        "A focused maintenance-intake and routing workflow usually lands around $2K-$4K depending on channels, urgency logic, PM software integration, vendor handoff complexity, and status-update rules. Broader portfolio automation raises the total scope.",
    },
    {
      question: "Will this replace the property manager or maintenance coordinator?",
      answer:
        "No. It removes repetitive intake, acknowledgement, and routing work. Humans still handle approvals, exceptions, sensitive resident conversations, vendor judgment, and any emergency decision the workflow should not make on its own.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is cleaner maintenance operations: faster acknowledgement, fewer lost requests, less manual back-and-forth, and better visibility into where service work is getting stuck. The secondary win is recovered staff time because your team stops acting like a human message router for every routine request.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating maintenance request handling",
  ctaHeading: "Want maintenance intake to stop feeling like controlled chaos?",
  ctaText:
    "Book a 30-minute call. We will look at how requests enter the business today, where triage and communication are breaking down, and whether a focused maintenance-request workflow is the highest-leverage automation to build before anything broader.",
  ctaSubtext:
    "No fake property-tech claims. Just a practical recommendation based on your request volume, after-hours reality, and current handoff process.",
  relatedLinks: [
    { label: "AI automation for property management", href: "/ai-automation-for-property-management" },
    { label: "Showing coordination automation for property management companies", href: "/showing-coordination-automation-for-property-management-companies" },
    { label: "Lease renewal automation for property management companies", href: "/lease-renewal-automation-for-property-management-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
