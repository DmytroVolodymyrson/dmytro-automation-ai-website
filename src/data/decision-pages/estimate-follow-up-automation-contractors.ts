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
  Wrench,
  Users,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "estimate-follow-up-automation-for-contractors",
  metaTitle:
    "Estimate Follow-Up Automation for Contractors — Recover More Open Quotes | Dmytro AI",
  metaDescription:
    "Estimate follow-up automation for contractors. Recover open quotes with timed reminders, objection-aware messaging, estimator handoff, and pipeline visibility without manual chasing.",
  badgeText: "Contractor Workflow",
  badgeIcon: ClipboardCheck,
  h1: "Estimate Follow-Up Automation for Contractors",
  heroIntro:
    "A homeowner asked for an estimate on Monday. Your estimator sent it Tuesday. By Friday, the quote is still sitting open because nobody followed up. In contracting, that usually means the job is drifting toward the company that stayed in touch, not necessarily the company with the best work. Estimate follow-up automation fixes that narrow stage. It starts when the estimate is sent, keeps the job moving with well-timed reminders, and flags high-intent replies before another open quote dies in the gap between the office and the field.",
  heroSubtext:
    "Below: what contractor estimate follow-up automation actually handles, how it differs from broader contractor CRM work and generic lead follow-up, what guardrails matter, and what adjacent proof supports the page without pretending there is already a published contractor estimate-recovery case study.",
  sections: [
    {
      type: "cards",
      title: "What contractor estimate follow-up automation actually handles",
      subtitle:
        "This page is specifically about opportunities that already reached the estimate stage but have not booked yet.",
      items: [
        {
          icon: Clock,
          title: "Stage-based reminders after the estimate goes out",
          body: "Once the quote is marked sent, the workflow can trigger follow-up at practical intervals like day 2, day 5, and day 10. That matters because the estimate stage is where a lot of contractor revenue quietly dies — not from a hard no, but from no structured next touch.",
        },
        {
          icon: MessageSquare,
          title: "Email and SMS without generic 'just checking in' copy",
          body: "Good estimate follow-up does not sound like spam. The first touch can recap scope and next steps. Later touches can ask whether timing changed, whether budget is the blocker, or whether the homeowner wants to review options. The point is to keep the quote active, not to nag.",
        },
        {
          icon: BadgeDollarSign,
          title: "Objection-aware messaging for price and timing hesitation",
          body: "A lot of open estimates stall for predictable reasons: price comparison, project timing, uncertainty about scope, or simple indecision. Automation can address those common friction points with approved messaging while still routing real negotiation to a human.",
        },
        {
          icon: ArrowUpRight,
          title: "Estimator or office handoff when the prospect shows intent",
          body: "If the customer replies, clicks to review, or asks a real question, the estimator or office manager gets the conversation with the estimate context attached. That keeps the human focused on warm jobs instead of manually chasing every sent quote from scratch.",
        },
        {
          icon: FileText,
          title: "Open-estimate visibility and stale-quote reporting",
          body: "Owners can finally see how many estimates are sitting open, how old they are, which channels reply best, and whether quotes are dying because they were never followed up. That is often more valuable than the messages themselves.",
        },
        {
          icon: Wrench,
          title: "Practical urgency tied to real scheduling windows",
          body: "Contractors often have legitimate urgency: a crew opening, a seasonal window, or material pricing that may change. Follow-up can reflect those realities without fake countdown tactics. The goal is to help the client decide while the estimate is still commercially useful.",
        },
      ],
    },
    {
      type: "table",
      title: "Estimate follow-up automation vs. contractor CRM vs. generic quote follow-up",
      subtitle:
        "These pages can coexist when the workflow stage is clearly different:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "Contractor CRM automation",
          values: [
            "Owners cleaning up the full lead-to-job pipeline",
            "Covers the bigger system: lead capture, tagging, estimate stages, dispatch handoff, post-job follow-up, and reporting across office + field workflows",
          ],
        },
        {
          label: "Estimate follow-up automation for contractors",
          values: [
            "Companies that already send estimates consistently but let too many of them sit open",
            "Focuses narrowly on recovering sent estimates with reminders, objection handling, response routing, and open-quote visibility",
          ],
        },
        {
          label: "Generic quote follow-up automation",
          values: [
            "Service businesses that want the broad estimate-recovery pattern without contractor-specific nuance",
            "Explains the core sequence logic at a category level, without contractor-specific office/estimator handoff and job-stage framing",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your company?",
      subtitle:
        "Best fit when estimates go out reliably but too many of them die in silence.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You send estimates every week and a meaningful share of them go cold",
            "Your estimator or office manager is too busy to follow up consistently",
            "You suspect competitors are winning because they stay in front of the customer longer",
            "Your average job value is high enough that one recovered quote matters",
            "You already have a workable CRM, spreadsheet, or job-management process with a clear 'estimate sent' stage",
            "You want a narrower build before tackling a broader contractor CRM overhaul",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your main problem is still slow first response before the estimate is even created",
            "You close most estimates already with disciplined manual follow-up",
            "You send very few estimates each month",
            "Your quoting process is too inconsistent to tell when an estimate was actually sent",
            "You want automation to negotiate custom scope changes without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for contractor estimate-recovery workflows",
      subtitle:
        "The system should create cleaner follow-up, not more noise or more admin confusion.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate before the stage definition is real",
          body: "If one estimator says 'quote sent,' another says 'proposal delivered,' and a third only emails PDFs manually with no status update, the workflow has nothing stable to trigger from. Tighten the estimate stage first, then automate.",
        },
        {
          icon: FileText,
          title: "Every touch needs one clear next step",
          body: "The best follow-up tells the prospect what to do next: reply with a question, book a review call, approve the estimate, or confirm timing. Extra paragraphs and vague check-ins do not close jobs.",
        },
        {
          icon: Users,
          title: "Know when the office should take over",
          body: "The automation should escalate when the prospect asks for revisions, financing details, scheduling specifics, or serious scope clarification. It is there to create disciplined follow-up, not to replace the estimator in high-context sales conversations.",
        },
        {
          icon: Wrench,
          title: "Tie urgency to real operational context",
          body: "Contractors can use real constraints like crew availability, seasonality, or expiring supplier pricing. But the system should not invent fake scarcity. Honest urgency converts better and creates fewer awkward conversations later.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical contractor estimate-recovery system usually works",
      subtitle:
        "The strongest version is simple: trigger from the estimate stage, follow up fast, and route humans when the job becomes active again.",
      blocks: [
        {
          heading: "The estimate is marked sent",
          body: "That event becomes the workflow trigger. Whether the estimate lives in Jobber, Housecall Pro, GoHighLevel, a custom CRM, or even a cleaned-up spreadsheet workflow, the key is having a reliable point where the system knows the quote is out and waiting on the customer.",
        },
        {
          heading: "The first follow-up lands while the quote is still warm",
          body: "A short, professional touch goes out early — before the customer forgets who sent what. This is often where contractors get the biggest lift, because manual follow-up usually happens too late or not at all.",
        },
        {
          heading: "Later messages handle predictable hesitation",
          body: "If there is still no reply, the next touches can handle familiar blockers: price comparison, uncertain timing, needing spouse approval, or wanting to review scope details. Each message should reduce decision friction instead of repeating the same ask.",
        },
        {
          heading: "High-intent replies go to the right human quickly",
          body: "Once the prospect engages, the estimator or office manager sees the conversation with the estimate context attached. That means the human can step in at the moment the opportunity becomes live again instead of wasting time chasing every dead-looking quote manually.",
        },
        {
          heading: "Owners get visibility into why estimates stall",
          body: "Over time, you can see whether open estimates are dying because follow-up is too slow, the reminders stop too early, certain lead sources are weaker, or estimators are simply overloaded. That makes this workflow both a revenue-recovery system and an operational diagnosis tool.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is not a published contractor estimate-recovery case study yet. The honest proof frame is the contractor CRM page plus trade pages that already show the same estimate-stage problem.",
      studies: [
        {
          industry: "Contractor CRM",
          headline: "The contractor CRM page already identifies estimate follow-up as one of the highest-leverage handoffs",
          body: "The broader contractor CRM guide explains why estimates fall through the cracks between the office and the field. This child page narrows that down to one workflow stage: recovering sent estimates before they quietly die.",
          link: "/crm-automation-for-contractors",
        },
        {
          industry: "Trades adjacency",
          headline: "Roofing, painting, landscaping, and plumbing pages all show how estimate-stage revenue gets lost",
          body: "Those trade pages already frame the real problem clearly: crews are on-site, quotes are sent, homeowners compare options, and nobody follows up consistently. This page focuses on the estimate-recovery system itself rather than broad contractor automation claims.",
          link: "/ai-automation-for-roofing-companies",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "Published CRM automation proof shows the reminder discipline and stale-record visibility this workflow depends on",
          body: "The e-commerce CRM case study demonstrates the same operational mechanics: stage tracking, automated reminders, visibility into untouched opportunities, and cleaner human handoff. The contractor context is different, but the workflow logic is directly relevant.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "CRM automation for contractors", href: "/crm-automation-for-contractors" },
        { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
        { label: "AI automation for painting contractors", href: "/ai-automation-for-painting-contractors" },
        { label: "AI automation for landscaping companies", href: "/ai-automation-for-landscaping-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the contractor CRM page?",
      answer:
        "The contractor CRM page is broader and looks at the whole lead-to-job system. This page is narrower. It focuses specifically on one stage: what happens after the estimate is sent and before the job is booked.",
    },
    {
      question: "How is this different from the generic quote follow-up page?",
      answer:
        "The generic quote follow-up guide explains the overall pattern for service businesses. This contractor page adds the realities that matter in the trades: estimators on job sites, office-to-field handoff, project timing windows, and the need to recover open estimates without creating more admin mess.",
    },
    {
      question: "What does a focused contractor estimate-follow-up build usually cost?",
      answer:
        "A focused estimate-recovery workflow usually lands around $1.5K-$3K depending on your current systems, channel mix, escalation rules, and whether the trigger comes from an existing CRM or needs cleanup work first. Broader contractor CRM builds cost more when they also cover intake, dispatch handoff, and reporting.",
    },
    {
      question: "Can this work with my current contractor software?",
      answer:
        "Usually yes, as long as there is a reliable way to detect when an estimate was sent and who should own the follow-up. Jobber, Housecall Pro, ServiceTitan, GoHighLevel, and custom CRM stacks can often support this directly or through a practical integration layer.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is recovering estimates that would otherwise fade out because nobody followed up in time. When your average job value is meaningful, one additional booked job per month can cover the build quickly. The secondary win is giving estimators and office staff back time by removing repetitive chase work.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating contractor estimate follow-up",
  ctaHeading: "Want fewer open estimates dying in silence?",
  ctaText:
    "Book a 30-minute call. We will look at how your company handles sent estimates today, where open quotes go cold, and whether a focused estimate-recovery workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No fake close-rate promises. Just a practical recommendation based on your quoting process and current pipeline discipline.",
  relatedLinks: [
    { label: "CRM automation for contractors", href: "/crm-automation-for-contractors" },
    { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
    { label: "AI automation for roofing companies", href: "/ai-automation-for-roofing-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
