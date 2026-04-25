import {
  Scale,
  FileText,
  ShieldCheck,
  UserRoundCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ClipboardList,
  Clock3,
  BarChart3,
  MessageSquare,
  CalendarCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "intake-and-conflict-check-automation-for-law-firms",
  metaTitle:
    "Intake and Conflict-Check Automation for Law Firms — Cleaner Pre-Consult Prep | Dmytro AI",
  metaDescription:
    "Automate intake and conflict-check prep for law firms. Capture the right case details, collect party names and documents sooner, route secure next steps, and stop slowing consultations with manual pre-consult chasing.",
  badgeText: "Law-Firm Workflow",
  badgeIcon: Scale,
  h1: "Intake and Conflict-Check Automation for Law Firms",
  heroIntro:
    "A lot of law firms do not lose momentum because the consultation itself is weak. They lose it before the consultation is actually ready to happen. The prospect said yes to the call, but nobody collected the right party names yet. The intake form came back half-finished. A receptionist or paralegal is still chasing the same background details over email. Conflict-check prep is sitting in three different places, and the attorney walks into the consult without the basics organized. Intake and conflict-check automation for law firms fixes that narrower pre-consult workflow. It gives the firm a cleaner way to gather the right facts earlier, surface missing information quickly, route secure next steps, and make sure consultations start with less admin drag and fewer avoidable surprises.",
  heroSubtext:
    "Below: what this legal intake workflow should actually handle, how it stays distinct from the broader law-firm page and the first-project scoping page, what proof honestly supports it, and when intake prep is or is not the right next automation to build before scheduling, lead follow-up, or after-hours phone coverage.",
  sections: [
    {
      type: "cards",
      title: "What intake and conflict-check automation should actually handle",
      subtitle:
        "The goal is not legal advice. It is cleaner pre-consult readiness so the team stops rebuilding the same context manually before every serious conversation:",
      items: [
        {
          icon: FileText,
          title: "Structured pre-consult intake capture",
          body: "The workflow should collect the basic facts the firm already needs before a real consultation: contact details, matter type, the short issue summary, opposing-party or involved-party names, deadline context, and any obvious routing notes. That is more useful than vague back-and-forth asking prospects to 'send a few details.'",
        },
        {
          icon: ShieldCheck,
          title: "Conflict-check prep without scattered email chains",
          body: "If the firm needs party names, business names, or related entities for a conflict screen, the workflow can request them early and make missing items visible before the attorney or intake team has to chase them manually at the last minute.",
        },
        {
          icon: ClipboardList,
          title: "Missing-information reminders",
          body: "When a form is incomplete or a required detail is missing, the system can send the next reminder automatically instead of depending on whoever remembered to follow up that day. That is especially valuable when multiple consultations are moving at once.",
        },
        {
          icon: CalendarCheck,
          title: "Consult-readiness visibility",
          body: "The team can see which consultations are ready, which are still missing conflict-check details, and which prospects need a human call before the meeting should be confirmed. That visibility is hard to keep when everything lives across inboxes, notes, and calendar comments.",
        },
        {
          icon: UserRoundCheck,
          title: "Cleaner handoff to the attorney or intake owner",
          body: "The strongest setup hands the consultation over with the useful context already attached: completed intake, missing fields, routing notes, and whether the conflict-check prep is actually done. That protects attorney time and reduces awkward first-call restarts.",
        },
        {
          icon: MessageSquare,
          title: "Secure next-step guidance",
          body: "The workflow can send the next action clearly — complete the intake form, upload the requested file through the approved path, or reply with the missing detail. That keeps the process moving without pretending sensitive legal information should bounce around random channels.",
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the law-firm cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for law firms",
          values: [
            "Owners evaluating the full legal intake-and-operations layer",
            "Covers the broader system across inquiry response, intake prep, consultation scheduling, consult follow-up, case updates, and after-hours handling",
          ],
        },
        {
          label: "What to automate first for law firms",
          values: [
            "Owners deciding which single workflow deserves the first build",
            "Helps choose between inquiry response, intake prep, consultation scheduling, post-consult follow-up, and after-hours call handling before a broader rollout",
          ],
        },
        {
          label: "Intake and conflict-check automation for law firms",
          values: [
            "Firms that already know the consult is happening but the prep before it is messy, late, or incomplete",
            "Focuses narrowly on intake details, conflict-check prep, missing-information reminders, secure next steps, and attorney handoff before the consultation starts",
          ],
        },
        {
          label: "AI lead follow-up for service businesses",
          values: [
            "Firms whose earliest leak is still slow response after the inquiry arrives",
            "Focuses on first response, short nurture, and early handoff while the lead is still deciding whether to talk to you at all",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your law firm?",
      subtitle:
        "Best fit when the consultation is real, but the preparation around it is still too manual, too inconsistent, or too slow.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Consultations are already being booked, but the team still chases the same intake details manually",
            "Conflict-check prep depends too much on memory, inbox searches, or last-minute receptionist follow-up",
            "Attorneys or intake staff routinely start consultations without the basics organized",
            "The firm has stable enough intake questions that a consistent pre-consult sequence is realistic",
            "You want a narrower pre-consult workflow before funding a broader law-firm automation rollout",
            "One cleaner, better-prepared consult per week would likely justify the build",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The bigger leak is still slow first response to new inquiries before a consultation is even discussed",
            "The firm has not agreed on the minimum intake fields or who owns the conflict-check step",
            "Consult volume is still so low that manual prep is easy",
            "You want automation handling legal judgment or conflict decisions instead of information gathering and routing",
            "Your approved secure intake path is still unclear or constantly changing",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for legal intake and conflict-check workflows",
      subtitle:
        "This workflow is valuable when it stays tightly on preparation, routing, and visibility — not legal advice.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not let automation drift into substantive legal judgment",
          body: "The workflow can gather facts, request missing information, and route the matter to the right person. It should not improvise legal advice, decide the actual conflict outcome, or pretend intake scoring replaces attorney judgment.",
        },
        {
          icon: ShieldCheck,
          title: "Keep secure intake paths explicit",
          body: "If the firm wants documents or sensitive details collected in a specific portal or intake path, the workflow should reinforce that path clearly. Convenience is not a good reason to create a messier or riskier information trail.",
        },
        {
          icon: Clock3,
          title: "Separate pre-consult prep from later-stage workflows",
          body: "This page should stay on the stage before the consultation. If the real leak is still first response, booking friction, or weak post-consult follow-up, those belong on adjacent pages instead of bloating this one into a giant all-purpose intake explainer.",
        },
        {
          icon: BarChart3,
          title: "Measure consult readiness, not just forms submitted",
          body: "The useful KPI is not how many intake messages were sent. It is whether consultations start with the right facts collected, fewer missing details, and less manual scrambling from the staff and attorney side.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical law-firm intake-prep workflow usually works",
      subtitle:
        "The clean version is simple: gather the right facts early, expose what is still missing, and hand the consultation over with context attached.",
      blocks: [
        {
          heading: "The prospect reaches a real pre-consult stage",
          body: "Once the firm decides a consultation is worth pursuing, the workflow sends the right intake step instead of relying on a custom manual email. That could be a form, a secure request for party names, or the first checklist for the matter type involved.",
        },
        {
          heading: "Required details are collected before the calendar becomes the bottleneck",
          body: "The prospect can submit the basic facts, related parties, and supporting context that the team already knows it needs. If key information is missing, the system marks the consult as not yet ready instead of quietly assuming the team will sort it out later.",
        },
        {
          heading: "Missing items trigger the next follow-up automatically",
          body: "If party names, matter details, or forms are incomplete, the workflow sends the next reminder on schedule. That keeps the pre-consult stage moving without forcing intake staff to remember every open thread manually.",
        },
        {
          heading: "The attorney or intake owner gets the consult with the thread attached",
          body: "Once the basics are complete, the handoff includes the intake summary, what was submitted, what still needs attention, and whether the conflict-check prep is complete. That reduces awkward restarts and protects the first live conversation.",
        },
        {
          heading: "The firm learns where the real prep drag sits",
          body: "Over time, the workflow shows whether the main problem is incomplete forms, bad handoff rules, weak ownership, or simply asking for the wrong things too late. That makes later scheduling or broader legal-intake automation safer because the first bottleneck is now visible.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is not a published law-firm intake-prep case study on the site yet, so the proof framing has to stay adjacent and honest.",
      studies: [
        {
          industry: "Law-firm cluster",
          headline: "The live law-firm parent and first-project guide already isolate intake and conflict-check prep as one of the clearest legal workflow families",
          body: "The broader law-firm page explicitly names intake automation as part of the operating layer, and the first-project page already treats intake and conflict-check prep as one of the main bounded choices. This child goes one level narrower and stays only on pre-consult readiness.",
          link: "/ai-automation-for-law-firms",
        },
        {
          industry: "Published onboarding proof",
          headline: "The client-onboarding guide already proves the checklist, reminder, and handoff pattern this page depends on",
          body: "That guide is not a legal deployment, but it is direct adjacent proof that intake forms, required next steps, and human handoff work better when the workflow is standardized instead of managed from memory.",
          link: "/client-onboarding-automation",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ lead CRM case study supports the value of stage visibility, follow-up discipline, and cleaner ownership once work outgrows memory",
          body: "That project is not a law-firm build, but it is direct proof that open records, incomplete next steps, and unclear ownership create avoidable revenue drag. The same operating logic supports legal intake-prep follow-through before a consult happens.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for law firms", href: "/ai-automation-for-law-firms" },
        { label: "What to automate first for law firms", href: "/what-to-automate-first-for-law-firms" },
        { label: "Client onboarding automation", href: "/client-onboarding-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader law-firm automation page?",
      answer:
        "The broader law-firm page covers the full intake-and-operations layer. This page is narrower. It focuses only on the stage before the consultation: intake details, conflict-check prep, missing-information follow-up, secure next steps, and handoff into the actual meeting.",
    },
    {
      question: "When should this come before faster inquiry response?",
      answer:
        "Choose intake and conflict-check prep first when the firm is already getting consultations, but the prep before them is messy and manual. If new inquiries still wait too long for the first reply, faster inquiry response usually comes first.",
    },
    {
      question: "Can this help without replacing my current legal software?",
      answer:
        "Usually yes, if there is a reliable handoff point for the consultation stage and a practical place for intake status, reminders, and attorney notes to live. In many firms the current system stays in place and automation improves the communication and handoff layer around it.",
    },
    {
      question: "What does a focused build usually cost?",
      answer:
        "A narrow intake-and-conflict-check workflow often lands around $2K-$4K depending on the intake fields, reminder cadence, conflict-prep requirements, secure upload path, and handoff rules. Broader law-firm automation costs more when it also includes lead response, scheduling, post-consult follow-up, and phone handling.",
    },
    {
      question: "Does this automate legal advice or conflict decisions?",
      answer:
        "No. The safe use case is gathering information, chasing missing items, and routing the matter cleanly so the right human can make the real legal judgment. Automation should support the intake process, not replace attorney responsibility.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating law-firm intake and conflict-check prep",
  ctaHeading: "Need cleaner legal intake before the consultation starts?",
  ctaText:
    "Book a 30-minute call. We will look at how your firm currently handles intake details, conflict-check prep, missing-information follow-up, and attorney handoff, then tell you whether a focused pre-consult workflow is the cleanest thing to build next.",
  ctaSubtext:
    "No obligation. No legal-tech buzzword dump. Just a practical conversation about where pre-consult prep is slowing your firm down.",
  relatedLinks: [
    { label: "AI automation for law firms", href: "/ai-automation-for-law-firms" },
    { label: "What to automate first for law firms", href: "/what-to-automate-first-for-law-firms" },
    { label: "Client onboarding automation", href: "/client-onboarding-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
