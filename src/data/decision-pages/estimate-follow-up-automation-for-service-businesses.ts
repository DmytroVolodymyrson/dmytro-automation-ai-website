import {
  ClipboardCheck,
  Clock,
  MessageSquare,
  BadgeDollarSign,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileText,
  Users,
  Eye,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "estimate-follow-up-automation-for-service-businesses",
  metaTitle:
    "Estimate Follow-Up Automation for Service Businesses — Recover Open Estimates After the Site Visit | Dmytro AI",
  metaDescription:
    "Estimate follow-up automation for service businesses. Recover open estimates after inspections and site visits with stage-based reminders, estimator handoff, objection-aware messaging, and open-estimate visibility.",
  badgeText: "Workflow Automation",
  badgeIcon: ClipboardCheck,
  h1: "Estimate Follow-Up Automation for Service Businesses",
  heroIntro:
    "Your tech goes to the site, scopes the job, and the office sends the estimate. Then nobody follows up. The homeowner is comparing three other bids, your estimator is already on the next call, and the office assumes someone else is handling it. Two weeks later the job went to a company that simply stayed in touch. This pattern repeats across roofing, plumbing, electrical, painting, landscaping, HVAC, auto repair, and every other field-service trade that sends estimates after an inspection or site visit. Estimate follow-up automation closes that gap — not by replacing the estimator, but by making sure every sent estimate gets structured follow-up, timely handoff, and visibility before it quietly dies.",
  heroSubtext:
    "Below: what estimate follow-up automation actually handles for service businesses, how it differs from the broader quote follow-up page on this site, what makes the estimator-to-office handoff work, what guardrails matter, and what adjacent proof from live vertical pages honestly supports the pattern.",
  sections: [
    {
      type: "cards",
      title: "What estimate follow-up automation handles after the site visit",
      subtitle:
        "This page focuses on the stage between 'estimate sent' and 'job booked or lost.' That narrow window is where most field-service revenue quietly disappears.",
      items: [
        {
          icon: Clock,
          title: "Stage-based reminders triggered by the estimate event",
          body: "Once the estimate is marked sent in your CRM, job-management tool, or even a cleaned-up spreadsheet, the workflow fires. Follow-up at day 2, day 5, and day 10 is common. The key is that the trigger is the estimate stage — not a calendar reminder someone has to remember to set.",
        },
        {
          icon: MessageSquare,
          title: "Messaging that reflects what actually happened on-site",
          body: "Good estimate follow-up references the scope, the visit, and the next step — not a generic 'just checking in.' When the homeowner remembers your tech on their roof or under their sink, a follow-up that connects to that visit converts better than boilerplate.",
        },
        {
          icon: BadgeDollarSign,
          title: "Objection-aware sequences for price, timing, and scope hesitation",
          body: "Most open estimates stall for predictable reasons: comparing bids, waiting on a spouse, uncertain timing, or budget concerns. Automation can address those blockers with approved messaging while routing real negotiation or scope questions to a human.",
        },
        {
          icon: ArrowUpRight,
          title: "Estimator or office handoff when the prospect re-engages",
          body: "When the customer replies, clicks to review the estimate, or asks a question, the right person gets notified with the estimate context attached. The estimator who visited the site can pick up the conversation without starting from scratch.",
        },
        {
          icon: Eye,
          title: "Open-estimate visibility across the whole pipeline",
          body: "Owners and office managers can finally see how many estimates are sitting open, how old they are, which estimators have the most stale quotes, and whether jobs are dying because nobody followed up. That visibility is often more valuable than the automated messages themselves.",
        },
        {
          icon: Users,
          title: "Field-to-office coordination instead of finger-pointing",
          body: "In most service businesses, the estimator blames the office for not following up and the office assumes the estimator is handling it. Automation removes that ambiguity: the system follows up, the human steps in when the job becomes active again, and everybody can see the status.",
        },
      ],
    },
    {
      type: "table",
      title: "Estimate follow-up vs. quote follow-up vs. vertical estimate pages",
      subtitle:
        "These pages coexist because the workflow stage and audience are different:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "Quote follow-up automation (generic)",
          values: [
            "Any service business that sends quotes and wants the broad reminder-sequence pattern",
            "Explains the core sequence logic, objection handling, and timing at a category level without trade-specific nuance",
          ],
        },
        {
          label: "Estimate follow-up for service businesses (this page)",
          values: [
            "Field-service and trades businesses where estimates follow an on-site inspection, visit, or scope review",
            "Adds estimator-to-office handoff, open-estimate pipeline visibility, site-visit context in messaging, and the coordination problem between field and office teams",
          ],
        },
        {
          label: "Vertical estimate pages (roofing, plumbing, etc.)",
          values: [
            "A specific trade that wants estimate-recovery framed in their exact language and job types",
            "Trade-specific framing — roof replacement quotes, drain repair estimates, panel-upgrade bids — with industry-specific urgency and objection patterns",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your service business?",
      subtitle:
        "Best fit when estimates go out after site visits but too many of them die in the gap between the field and the office.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your team sends estimates after inspections or site visits and a meaningful share go cold",
            "Estimators or techs are too busy on the next job to follow up consistently",
            "Your office staff does not have a reliable system for tracking which estimates need attention",
            "You suspect competitors win because they stay in front of the customer longer after the visit",
            "Your average job value is high enough that one recovered estimate per month matters",
            "You already have a CRM or job-management tool with a clear 'estimate sent' stage you can trigger from",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your main problem is lead response speed before the estimate stage",
            "You close most estimates already with disciplined manual follow-up",
            "Your estimates are simple enough that decisions happen on the spot",
            "You send very few estimates per month and the volume does not justify automation",
            "Your quoting process is too inconsistent to reliably detect when an estimate was sent",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails for field-service estimate-recovery workflows",
      subtitle:
        "The goal is cleaner follow-up and better visibility — not more noise or more admin confusion.",
      items: [
        {
          icon: AlertTriangle,
          title: "The estimate stage must be real before you automate it",
          body: "If estimators mark jobs differently, some skip the CRM entirely, or the office only finds out about sent estimates through hallway conversations, the trigger has nothing stable to fire from. Clean up the stage definition first.",
        },
        {
          icon: FileText,
          title: "Reference the site visit in early follow-up",
          body: "The strongest estimate follow-up for field-service businesses connects back to what the tech saw on-site. That creates continuity the customer recognizes and separates your follow-up from the generic reminders every other bidder is sending.",
        },
        {
          icon: Users,
          title: "Route scope changes and real negotiation to a human",
          body: "The automation should escalate when the prospect asks for revisions, alternate options, financing details, or scheduling specifics. It is there to create disciplined follow-up, not to replace the estimator in high-context conversations.",
        },
        {
          icon: Clock,
          title: "Use honest urgency tied to real operational constraints",
          body: "Crew availability, seasonal demand, material pricing, or permit timelines are real. Use them. But do not invent fake scarcity or countdown pressure — it creates awkward conversations later and erodes trust in the follow-up system.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical estimate-recovery system works for service businesses",
      subtitle:
        "The pattern is the same across trades: trigger from the estimate stage, follow up while the visit is still fresh, and route the human back in when the job becomes active again.",
      blocks: [
        {
          heading: "The estimate is marked sent",
          body: "That event is the workflow trigger. Whether your estimates live in Jobber, Housecall Pro, ServiceTitan, GoHighLevel, or a custom CRM, the key is having a reliable signal that the quote is out and waiting on the customer. If your estimators already update a status field, you are ready. If they do not, that is the first thing to fix.",
        },
        {
          heading: "The first follow-up lands while the visit is still fresh",
          body: "A short, professional touch goes out within a day or two — while the customer still remembers your tech on their property. This early window is where most service businesses get the biggest lift, because manual follow-up usually happens too late or not at all.",
        },
        {
          heading: "Later messages address predictable hesitation",
          body: "If there is still no reply, subsequent touches handle familiar blockers: price comparison, uncertain timing, needing to consult a spouse, or wanting to revisit scope details. Each message should reduce decision friction instead of repeating the same check-in.",
        },
        {
          heading: "High-intent replies route to the right person with context",
          body: "When the prospect re-engages, the estimator or office manager sees the conversation with the estimate details, job scope, and site-visit context attached. The human steps in at the moment the opportunity becomes live again — not after manually reviewing every stale quote.",
        },
        {
          heading: "Owners get visibility into where estimates stall and why",
          body: "Over time, the system reveals whether open estimates die because follow-up is too slow, reminders stop too early, certain estimators let more jobs slip, or specific lead sources produce lower-intent prospects. That diagnostic value compounds alongside the direct revenue recovery.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is not a published cross-industry estimate-recovery case study yet. The honest proof frame is the live vertical estimate pages plus the broader quote follow-up guide and CRM case study.",
      studies: [
        {
          industry: "Vertical estimate pages",
          headline: "Seven trade-specific estimate follow-up pages are already live on this site",
          body: "Roofing, plumbing, electrical, auto repair, painting, landscaping, and contractors each have their own estimate follow-up page. This horizontal parent captures the shared workflow pattern — stage-based triggers, estimator handoff, open-estimate visibility — that runs across all of them.",
          link: "/estimate-follow-up-automation-for-contractors",
        },
        {
          industry: "Quote follow-up baseline",
          headline: "The broader quote follow-up page establishes the core sequence logic this page builds on",
          body: "The generic quote follow-up guide explains timed reminders, objection-aware messaging, and smart exit conditions. This page narrows that to field-service businesses where estimates follow site visits and the estimator-to-office handoff is the critical coordination gap.",
          link: "/quote-follow-up-automation",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "Published CRM case study demonstrates the stage tracking and reminder discipline this workflow depends on",
          body: "The e-commerce CRM case study shows the same operational mechanics: pipeline stage tracking, automated reminders, visibility into untouched opportunities, and cleaner human handoff. The field-service context is different, but the workflow logic is directly relevant.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Estimate follow-up cost for small business", href: "/estimate-follow-up-cost-small-business" },
        { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
        { label: "Estimate follow-up vs. quote follow-up for service businesses", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
        { label: "Estimate follow-up for contractors", href: "/estimate-follow-up-automation-for-contractors" },
        { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
        { label: "Estimate follow-up for roofing companies", href: "/estimate-follow-up-automation-for-roofing-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the quote follow-up automation page?",
      answer:
        "The quote follow-up page explains the broad reminder-sequence pattern for any service business. This page is narrower: it focuses on field-service businesses where estimates follow an on-site inspection or visit, and the main coordination gap is between the estimator in the field and the office managing the pipeline. It adds estimator handoff, open-estimate visibility, and site-visit context that the generic page does not cover.",
    },
    {
      question: "How is this different from the trade-specific estimate pages like roofing or plumbing?",
      answer:
        "Those vertical pages frame estimate recovery in trade-specific language — roof replacement quotes, drain repair estimates, panel-upgrade bids. This page captures the shared horizontal pattern that runs across all field-service trades: trigger from the estimate stage, follow up with site-visit context, route the estimator back in, and give the owner visibility into the whole pipeline.",
    },
    {
      question: "What does a focused estimate follow-up build usually cost?",
      answer:
        "A focused estimate-recovery workflow typically lands around $1.5K–$3K depending on your current systems, number of channels, escalation rules, and whether the estimate-sent trigger is already clean in your CRM or needs setup work first. Broader CRM overhauls that also cover intake, dispatch, and reporting cost more.",
    },
    {
      question: "Can this work with my current field-service software?",
      answer:
        "Usually yes, as long as there is a reliable way to detect when an estimate was sent and who should own the follow-up. Jobber, Housecall Pro, ServiceTitan, GoHighLevel, and custom CRM setups can often support this directly or through a practical integration layer.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The primary win is recovering estimates that would otherwise fade out because nobody followed up after the site visit. When your average job value is meaningful, one additional booked job per month can cover the build quickly. The secondary win is giving estimators and office staff back time by removing repetitive chase work and the finger-pointing about who was supposed to follow up.",
    },
  ],
  faqSubtitle:
    "Common questions about estimate follow-up automation for service businesses",
  ctaHeading: "Tired of watching sent estimates go cold?",
  ctaText:
    "Book a 30-minute call. We will look at how your team handles sent estimates today, where open quotes die in the gap between the field and the office, and whether a focused estimate-recovery workflow is the right automation to build next.",
  ctaSubtext:
    "No inflated close-rate promises. Just a practical recommendation based on your estimating process, current pipeline, and the handoff between your field team and your office.",
  relatedLinks: [
    { label: "Estimate follow-up cost for small business", href: "/estimate-follow-up-cost-small-business" },
    { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
    { label: "Estimate follow-up vs. quote follow-up for service businesses", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
    { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
    { label: "Estimate follow-up for contractors", href: "/estimate-follow-up-automation-for-contractors" },
    { label: "CRM automation for contractors", href: "/crm-automation-for-contractors" },
  ],
};

export default data;
