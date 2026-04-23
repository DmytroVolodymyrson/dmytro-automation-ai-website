import {
  Building2,
  TriangleAlert,
  Wrench,
  Moon,
  ClipboardList,
  BellRing,
  ArrowRightLeft,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Clock,
  Siren,
  FileText,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "emergency-vs-routine-maintenance-intake-for-property-management-companies",
  metaTitle:
    "Emergency vs. Routine Maintenance Intake for Property Management Companies — How to Separate Them Cleanly | Dmytro AI",
  metaDescription:
    "How property management companies should separate emergency vs. routine maintenance intake so residents get a fast answer, on-call staff only get the right issues, and routine work stops turning into overnight chaos.",
  badgeText: "Property Management Decision",
  badgeIcon: Building2,
  h1: "Emergency vs. Routine Maintenance Intake for Property Management Companies",
  heroIntro:
    "Property management teams usually do not need more ways for residents to report maintenance issues. They need a cleaner decision layer for what happens next. The real operational problem is not intake by itself. It is what happens when leaks, lockouts, no-heat complaints, appliance issues, parking-gate problems, and vague overnight messages all land in the same channel with no clear line between emergency and routine work. A focused emergency-vs-routine maintenance intake workflow solves that decision problem: acknowledge the issue fast, gather the minimum useful detail, separate true emergencies from next-day repairs using explicit rules, and route the right situations to the right human without waking up the whole team for routine noise.",
  heroSubtext:
    "Below: when this deserves its own workflow instead of living as one section on the broader maintenance page, how it differs from the after-hours maintenance triage page, what guardrails matter, and what adjacent proof honestly supports it.",
  sections: [
    {
      type: "cards",
      title: "What this decision page is actually about",
      subtitle:
        "This page is not another generic maintenance-automation explainer. It is about the buyer decision inside maintenance operations: how to separate emergency intake from routine repair intake without creating false confidence.",
      items: [
        {
          icon: TriangleAlert,
          title: "A real emergency lane with explicit rules",
          body: "Leaks, no heat, electrical hazards, access failures, flooding, and other safety-sensitive issues should move through an emergency path with clear escalation rules. The point is not to let AI guess. The point is to codify what your team already believes should trigger an immediate human response.",
        },
        {
          icon: Wrench,
          title: "A routine repair lane that stays acknowledged but contained",
          body: "Routine issues still need a fast acknowledgement, but they do not need to explode into after-hours chaos. A good workflow keeps these requests organized for the daytime queue while giving residents a credible next step instead of silence.",
        },
        {
          icon: ClipboardList,
          title: "Minimum useful detail before anyone is dispatched",
          body: "Good intake separates issue type, urgency clues, unit, photos, contact details, access notes, and any safety context before the request hits the next owner. That helps the team act faster and cuts down on back-and-forth that only exists because intake was vague.",
        },
        {
          icon: Moon,
          title: "Cleaner overnight decisions without treating every request like a midnight emergency",
          body: "This matters most after hours, but the rule system should still hold during the day. The workflow creates a consistent standard so the team does not depend on whoever noticed the message first or whoever is the most risk-averse that night.",
        },
        {
          icon: BellRing,
          title: "Residents get a fast answer without fake certainty",
          body: "The resident should know the issue was received, whether it is being reviewed now or queued for business hours, and when a human path takes over. Good automation communicates the next step clearly without pretending every problem is already resolved.",
        },
        {
          icon: ArrowRightLeft,
          title: "The right owner gets the right issue",
          body: "On-call staff should get the emergencies. Routine repairs should enter the normal maintenance queue. Managers should only be looped in when the rule set says they need to be. That operating split is the actual outcome buyers care about.",
        },
      ],
    },
    {
      type: "table",
      title: "How this differs from adjacent property-management pages",
      subtitle:
        "This page is only worth existing if the decision frame stays tighter than the neighboring maintenance and after-hours guides:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "Maintenance request automation",
          values: [
            "Teams improving the broader maintenance workflow across intake, routing, status updates, vendor handoff, and backlog visibility",
            "Builds the full maintenance operating system from first report through handoff and follow-through",
          ],
        },
        {
          label: "Emergency vs. routine maintenance intake",
          values: [
            "Teams whose core problem is the decision layer itself: what deserves immediate escalation and what belongs in the normal queue",
            "Creates a cleaner intake split so urgent and non-urgent maintenance requests stop competing for the same overnight attention",
          ],
        },
        {
          label: "After-hours maintenance triage",
          values: [
            "Teams where nights and weekends are the main failure state",
            "Focuses on the overnight operating window — acknowledgement, urgency sorting, on-call escalation, and cleaner morning handoff",
          ],
        },
        {
          label: "After-hours tenant communication",
          values: [
            "Teams handling a broader mix of overnight resident issues beyond maintenance alone",
            "Covers the wider communication layer, not only maintenance-intake classification and repair escalation logic",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your portfolio?",
      subtitle:
        "Best for operators where the classification problem is big enough that the team keeps over-escalating routine work or under-reacting to real emergencies.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Residents report maintenance issues through multiple channels and the urgency decision changes depending on who reads the message",
            "On-call staff get interrupted too often by routine repairs that should have waited until business hours",
            "Managers worry true emergencies could be missed because every issue lands in the same intake lane",
            "The team needs a repeatable rule set for heat loss, flooding, lockouts, electrical risk, access issues, or building-critical failures",
            "You want residents acknowledged fast without promising a technician response for problems that are not urgent",
            "Your portfolio is large enough that maintenance classification errors create real labor cost and resident-frustration risk",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your portfolio is small enough that the maintenance lead can still personally assess every issue quickly and reliably",
            "Your PM stack already runs a trusted emergency-vs-routine rule system that staff actually follow",
            "The bigger problem is vendor coordination or maintenance backlog, not the intake decision itself",
            "You want automation making approval, safety, or habitability decisions without a human review path",
            "Your on-call roster, escalation rules, or resident data are too messy to trust routing yet",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails matter more than cleverness here",
      subtitle:
        "If the rule system is sloppy, the workflow will either wake the wrong people up or give residents false reassurance about real emergencies.",
      items: [
        {
          icon: ShieldCheck,
          title: "Do not let the system improvise what counts as an emergency",
          body: "Emergency handling should come from explicit portfolio rules: what qualifies, who gets alerted, what the resident is told, and when a manager must be looped in immediately. This is operations logic, not generative creativity.",
        },
        {
          icon: Siren,
          title: "Escalate when the risk is unclear",
          body: "If the report is vague but could involve water, heat, electricity, access, safety, or vulnerable residents, push it to a human path. Good automation reduces avoidable overnight noise. It does not try to win a classification contest at the expense of safety.",
        },
        {
          icon: FileText,
          title: "Collect only the intake detail that actually improves the decision",
          body: "Do not turn intake into a 20-question form. Ask for the unit, issue type, what is happening now, whether there is active damage or safety risk, how to reach the resident, and any access notes. The rule system only works if the required detail is clear and short enough to collect consistently.",
        },
        {
          icon: Clock,
          title: "Review false positives, missed escalations, and next-day queue quality",
          body: "The workflow is only useful if the team audits what happened. Which issues got escalated that should not have? Which ones should have escalated faster? Did the morning team inherit a clean routine queue or another pile of fragmented messages?",
        },
      ],
    },
    {
      type: "prose",
      title: "A practical decision framework for emergency vs. routine intake",
      subtitle:
        "The best version is boring in a good way: clear questions, explicit routing rules, and no guessing about who owns the next step.",
      blocks: [
        {
          heading: "Start with the smallest number of categories you can trust",
          body: "Most portfolios do not need 15 maintenance urgency levels. They need a small set the team will actually use consistently: emergency now, urgent human review, and routine next-day queue. Complexity only helps if it improves action quality.",
        },
        {
          heading: "Anchor the emergency lane to conditions, not resident emotion alone",
          body: "Residents may understandably describe many issues as urgent. The workflow should still route around explicit conditions: active leak, no heat in winter, electrical hazard, lockout, security or access failure, sewer backup, or anything else your portfolio defines as immediate-response territory.",
        },
        {
          heading: "Let routine repairs stay acknowledged without pretending they are resolved",
          body: "A clogged sink, appliance issue, minor cosmetic damage, or non-critical noise complaint may still deserve a prompt answer. But the answer should be honest: received, categorized, and queued for normal follow-up — not a fake promise that a technician is already on the way.",
        },
        {
          heading: "Make the on-call path context-rich and the daytime path clean",
          body: "The emergency lane should carry the right details to the on-call human immediately. The routine lane should open the next business day with structured context instead of another pile of voicemail, email, and text fragments. Both sides of the split matter.",
        },
        {
          heading: "Treat this as an operating-rule page, not just a software page",
          body: "The buyer decision is really about operations discipline: which problems deserve interruption now, which ones should not, and how to communicate that clearly. Software only helps if the business already knows what a good decision should look like.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no published property-management maintenance case study yet. The honest proof frame is the exact tracked query that was living inside the live maintenance-request cluster plus the adjacent overnight-maintenance and communication pages already on the site.",
      studies: [
        {
          industry: "Tracked maintenance-intake intent",
          headline: "The live maintenance-request page already contained this exact emergency-vs-routine intake question",
          body: "This page is not invented from scratch. The broader maintenance-request guide already tracked the explicit query about how a property management company should automate emergency-vs-routine maintenance intake. This child page isolates that buyer decision instead of hiding it in one paragraph on a broader workflow page.",
          link: "/maintenance-request-automation-for-property-management-companies",
        },
        {
          industry: "Adjacent overnight routing proof",
          headline: "The live after-hours maintenance triage and tenant-communication pages already prove the same routing pattern",
          body: "Those pages already establish the overnight maintenance and escalation frame. This page narrows that broader pattern to the classification decision itself: what should route now, what should wait, and how residents should be acknowledged without over-escalating routine repair noise.",
          link: "/after-hours-maintenance-triage-for-property-management-companies",
        },
      ],
      links: [
        { label: "Maintenance request automation for property management companies", href: "/maintenance-request-automation-for-property-management-companies" },
        { label: "After-hours maintenance triage for property management companies", href: "/after-hours-maintenance-triage-for-property-management-companies" },
        { label: "After-hours tenant communication for property management companies", href: "/after-hours-tenant-communication-for-property-management-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader maintenance-request automation page?",
      answer:
        "The broader maintenance-request page covers intake, routing, status updates, vendor handoff, and maintenance visibility across the whole workflow. This page is narrower. It focuses specifically on the decision layer of emergency vs. routine maintenance intake and the rules for what deserves immediate escalation versus a normal queue.",
    },
    {
      question: "How is this different from the after-hours maintenance triage page?",
      answer:
        "The after-hours maintenance triage page is about the overnight operating window. This page is about the classification decision itself. It matters most after hours, but the same emergency-vs-routine split should still govern daytime intake too when multiple requests are competing for attention.",
    },
    {
      question: "Can this work with AppFolio, Buildium, Rent Manager, Yardi, or another PM system?",
      answer:
        "Usually yes, as long as there is a reliable way to capture requests, resident and unit context, and the outcome of the routing decision. Direct integrations are ideal, but practical workflows can also sit around inboxes, portals, phone systems, forms, or messaging tools already used by the portfolio.",
    },
    {
      question: "What does a focused emergency-vs-routine intake workflow usually cost?",
      answer:
        "A focused maintenance-intake decision layer usually lands around $1.5K-$3K depending on channels, rule complexity, escalation logic, PM-software integration, approved message templates, and whether voice handling is included. Broader maintenance automation raises the total scope.",
    },
    {
      question: "Will a human still review true emergencies?",
      answer:
        "Yes. That is the point. Automation acknowledges the issue, gathers the first details, and routes likely emergencies faster. Safety-sensitive situations, approvals, habitability concerns, and ambiguous reports should always have a human escalation path.",
    },
  ],
  faqSubtitle:
    "Practical questions about separating emergency and routine maintenance intake",
  ctaHeading: "Need maintenance intake to stop turning every issue into a fire drill?",
  ctaText:
    "Book a 30-minute call. We will look at how maintenance issues reach your team today, where the emergency-vs-routine line keeps breaking down, and whether a focused intake-decision workflow is the highest-leverage fix before broader maintenance automation work.",
  ctaSubtext:
    "No fake proptech positioning. Just a practical recommendation based on your request volume, on-call reality, and escalation risk.",
  relatedLinks: [
    { label: "Maintenance request automation for property management companies", href: "/maintenance-request-automation-for-property-management-companies" },
    { label: "After-hours maintenance triage for property management companies", href: "/after-hours-maintenance-triage-for-property-management-companies" },
    { label: "After-hours tenant communication for property management companies", href: "/after-hours-tenant-communication-for-property-management-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
