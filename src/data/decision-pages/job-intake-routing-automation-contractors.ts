import {
  ClipboardList,
  Route,
  AlertTriangle,
  Phone,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Users,
  Clock,
  LayoutDashboard,
  ArrowRightLeft,
  MessageSquare,
  FileText,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "job-intake-routing-automation-for-contractors",
  metaTitle:
    "Job Intake Routing Automation for Contractors — Cleaner Triage Before the Estimate | Dmytro AI",
  metaDescription:
    "Job intake routing automation for contractors. Capture requests cleanly, tag urgency, route the right service type, and assign leads to the right estimator or dispatcher before good jobs go sideways.",
  badgeText: "Contractor Workflow",
  badgeIcon: ClipboardList,
  h1: "Job Intake Routing Automation for Contractors",
  heroIntro:
    "A lot of contractor chaos starts before the estimate exists. New requests come in through calls, forms, texts, LSAs, referrals, and website chats. Nobody tags service type the same way. Urgent jobs sit beside routine work. The wrong estimator gets the lead, or nobody owns it at all until the customer calls back annoyed. Job intake routing automation fixes that narrow stage. It captures the request, adds the minimum useful context, applies routing rules, and gets the lead to the right person before office confusion turns into slow response, bad triage, or wasted field time.",
  heroSubtext:
    "Below: what contractor job intake routing automation actually handles, how it stays distinct from broader contractor CRM work, instant lead response, and dispatch handoff, what guardrails matter, and what adjacent proof honestly supports the page without pretending there is already a published contractor intake case study.",
  sections: [
    {
      type: "cards",
      title: "What contractor job intake routing automation actually handles",
      subtitle:
        "This page is intentionally about the pre-estimate stage: first capture, triage, ownership, and clean handoff into the quoting process.",
      items: [
        {
          icon: Phone,
          title: "One intake path across calls, forms, texts, and referrals",
          body: "The first win is operational hygiene. Instead of new requests living in scattered inboxes, voicemail threads, spreadsheets, and team chats, the workflow pulls them into one controlled intake path so the office is not reconstructing the lead from three channels before anyone can act.",
        },
        {
          icon: Route,
          title: "Service-type routing before the wrong person grabs the lead",
          body: "A plumbing emergency, a roofing estimate request, and a routine maintenance inquiry should not land in the same generic bucket. Good intake routing applies practical rules for service type, territory, urgency, or job class so the lead reaches the right estimator, dispatcher, or office queue first.",
        },
        {
          icon: AlertTriangle,
          title: "Urgency tagging without treating everything like a fire drill",
          body: "Not every inbound request deserves the same speed or escalation path. The system can separate emergency-style requests, same-day opportunities, and normal estimate inquiries so the office knows what needs immediate action and what can follow the standard process without guessing.",
        },
        {
          icon: FileText,
          title: "Structured context before the estimate is scheduled",
          body: "Good routing does not just assign an owner. It captures the basics that matter early: service category, address, contact details, photos if available, source, urgency clues, and any notes that help the next person avoid a redundant discovery call.",
        },
        {
          icon: ArrowRightLeft,
          title: "Lead-to-estimator or office handoff with the right context attached",
          body: "Once the request is classified, the workflow can route the lead to the right estimator, CSR, or dispatcher with the intake details attached. That cuts down on retyping, prevents duplicate outreach, and makes the first real response feel coordinated instead of improvised.",
        },
        {
          icon: LayoutDashboard,
          title: "Visibility into where intake discipline is breaking",
          body: "Owners can finally see whether leads are missing tags, whether certain sources create messy requests, whether emergency triage rules are being bypassed, and whether assignment delays are happening before the estimate stage even begins. That visibility is often the biggest operational win.",
        },
      ],
    },
    {
      type: "table",
      title: "Job intake routing vs. contractor CRM vs. instant lead response vs. dispatch handoff",
      subtitle:
        "These pages can coexist when the workflow stage is clearly different:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "Contractor CRM automation",
          values: [
            "Owners cleaning up the full lead-to-job pipeline",
            "Covers the bigger operating system: intake, tagging, estimate stages, dispatch handoff, post-job follow-up, and reporting across the whole contractor workflow",
          ],
        },
        {
          label: "Instant lead response automation",
          values: [
            "Service businesses that mainly need faster first contact",
            "Focuses on rapid reply timing and basic response speed, not contractor-specific routing logic, estimator ownership, or intake discipline",
          ],
        },
        {
          label: "Job intake routing automation for contractors",
          values: [
            "Companies where new requests get messy before the estimate exists",
            "Focuses on request capture, service-type routing, urgency tagging, lead ownership, and clean pre-estimate handoff into the quoting process",
          ],
        },
        {
          label: "Dispatch handoff automation for contractors",
          values: [
            "Companies that already book work but still lose context between office and field",
            "Focuses on office-to-field transfer after the work is booked, not on who should own the lead at intake",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your company?",
      subtitle:
        "Best fit when inbound requests are active enough that intake mistakes create real revenue loss or office drag.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "New requests come in from multiple channels and the office still copies details manually",
            "Different service types should route to different people, but ownership is inconsistent",
            "Your team loses time figuring out whether a request is urgent, routine, or even in the right territory",
            "Estimators or dispatchers keep receiving leads with missing context or duplicate notes",
            "You want a narrower pre-estimate workflow before attempting a full CRM overhaul",
            "Slow or messy intake is creating callbacks, internal confusion, or lost estimate opportunities",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a solo operator handling low lead volume with a simple process that already works",
            "Your bigger problem is still after the estimate is sent or after the job is booked",
            "Every inbound lead already lands in one clean system with reliable routing rules and clear ownership",
            "Your office has not agreed on service categories, territory rules, or what counts as urgent",
            "You want automation making judgment calls on unusual jobs without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for contractor intake-routing workflows",
      subtitle:
        "The workflow should reduce front-end chaos, not create false confidence or generic speed metrics.",
      items: [
        {
          icon: ShieldCheck,
          title: "Define the routing rules before you automate them",
          body: "If one office rep tags a lead as install, another calls it service, and a third forwards everything to the same estimator, the automation will only make the inconsistency faster. Agree on service types, urgency rules, territories, and ownership first.",
        },
        {
          icon: Users,
          title: "Assignment logic should support people, not replace judgment",
          body: "Some requests are obvious. Some need a manager, senior estimator, or dispatcher to make the call. Good automation handles the standard routing path quickly and escalates the ambiguous cases instead of pretending every lead can be classified perfectly.",
        },
        {
          icon: Clock,
          title: "Measure clean handoff, not just fast acknowledgement",
          body: "A fast auto-reply is not the same thing as a clean intake system. The real question is whether the right person got the lead with enough context to move it forward without another admin scramble.",
        },
        {
          icon: MessageSquare,
          title: "Customer communication should match the real next step",
          body: "Do not promise same-day help or estimator outreach unless the routing rules can actually support that. Intake automation works best when internal ownership and customer-facing expectations stay aligned.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical contractor intake-routing system usually works",
      subtitle:
        "The strongest version is simple: capture the request once, classify it clearly, route it to the right owner, and surface the exceptions early.",
      blocks: [
        {
          heading: "The request enters one controlled path",
          body: "Calls, forms, texts, ads, and referral leads should all end up in the same intake workflow or at least the same source of truth. That removes the constant office-side work of piecing together what came in and who is supposed to touch it first.",
        },
        {
          heading: "The workflow applies service-type and urgency rules",
          body: "Before anyone schedules an estimate, the system sorts the request based on the rules that matter operationally: service category, emergency vs. routine, territory, commercial vs. residential, and whether the lead should go to an estimator, dispatcher, or general office queue.",
        },
        {
          heading: "The owner gets the lead with useful context attached",
          body: "Instead of a vague notification, the assigned person sees the intake details that actually matter: contact, location, source, issue summary, photos if available, urgency clues, and what the requester asked for. That makes the first real response cleaner and faster without relying on memory.",
        },
        {
          heading: "Exceptions are surfaced before they create office chaos",
          body: "If the lead is outside the service area, missing critical details, likely urgent, or clearly misrouted, the system can flag the exception and route it to a human for review before the wrong team loses time chasing it.",
        },
        {
          heading: "Owners learn where the pre-estimate stage is leaking",
          body: "Over time, you can see whether the real problem is bad tagging, poor source data, assignment lag, too many ambiguous requests, or weak intake discipline from one channel or team member. That turns the workflow into an operating diagnosis tool, not just a faster inbox.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is not a published contractor intake-routing case study yet. The honest proof frame is the broader contractor CRM page, the home-service scheduling/triage pages, and the published CRM case study that proves the same intake-and-routing mechanics.",
      studies: [
        {
          industry: "Contractor CRM",
          headline: "The contractor CRM page already identifies front-end routing and ownership as one of the biggest operating gaps",
          body: "The broader contractor CRM guide explains why leads and job context get messy between the office and the field. This child page narrows that down to the first workflow stage: getting a new request into the right hands before the estimate process starts.",
          link: "/crm-automation-for-contractors",
        },
        {
          industry: "Home-service intake adjacency",
          headline: "The HVAC and home-service scheduling pages already map urgency, service-type, and dispatch-aware routing realities",
          body: "Those pages cover the practical rules that matter at intake: emergency vs. routine requests, service windows, territory, and who should act first. This page focuses specifically on the intake-routing system that applies those rules before the estimate exists.",
          link: "/ai-appointment-setter-for-home-service-businesses",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "Published CRM automation work shows the same stage-change, tagging, and internal alert logic this workflow depends on",
          body: "The e-commerce CRM case study demonstrates the mechanics that matter here too: clean intake, segmentation, automation triggers, and routing the right signals to the right people instead of relying on inbox chaos. The contractor context is different, but the workflow logic is directly relevant.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "CRM automation for contractors", href: "/crm-automation-for-contractors" },
        { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
        { label: "AI appointment setter for home service businesses", href: "/ai-appointment-setter-for-home-service-businesses" },
        { label: "Dispatch handoff automation for contractors", href: "/dispatch-handoff-automation-for-contractors" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader contractor CRM page?",
      answer:
        "The contractor CRM page is broader and covers the full lead-to-job system. This page is narrower. It focuses specifically on what happens before the estimate exists: request capture, service-type routing, urgency tagging, lead ownership, and clean handoff into the quoting process.",
    },
    {
      question: "How is this different from instant lead response automation?",
      answer:
        "Instant lead response is mostly about speed. This contractor page is about routing discipline. It covers who should own the request, how to classify it, what context should be captured, and how to avoid misrouting or duplicate office work before the first real conversation happens.",
    },
    {
      question: "What does a focused contractor intake-routing build usually cost?",
      answer:
        "A focused intake-routing workflow usually lands around $1.5K-$3K depending on channel count, routing rules, territory logic, urgency handling, and whether the intake data is already clean enough to automate. Broader contractor CRM builds cost more when they also include estimate follow-up, dispatch handoff, and deeper reporting layers.",
    },
    {
      question: "Can this work with Jobber, Housecall Pro, ServiceTitan, GoHighLevel, or a custom stack?",
      answer:
        "Usually yes, as long as there is a reliable way to capture new requests and a clear place where routing or assignment should happen. In many cases the existing field-service or CRM platform stays in place while automation improves intake, tagging, ownership, and alerts around it.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is cleaner ownership before good jobs get delayed or mishandled: fewer lost requests, fewer duplicate callbacks, fewer misrouted leads, and less office time wasted reconstructing what the customer actually needed. The secondary win is better conversion because the right person gets involved earlier with the right context.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating contractor job intake and routing",
  ctaHeading: "Want new requests routed cleanly before the estimate stage gets messy?",
  ctaText:
    "Book a 30-minute call. We will look at how new contractor requests enter your business today, where ownership gets fuzzy, and whether a focused intake-routing workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No fake speed-to-lead promises. Just a practical look at how your office handles new work before it reaches the quote stage.",
  relatedLinks: [
    { label: "CRM automation for contractors", href: "/crm-automation-for-contractors" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "Dispatch handoff automation for contractors", href: "/dispatch-handoff-automation-for-contractors" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
