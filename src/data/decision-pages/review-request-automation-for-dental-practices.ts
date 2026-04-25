import {
  Star,
  Sparkles,
  MessageSquare,
  ClipboardCheck,
  CalendarCheck,
  ArrowRightLeft,
  Users,
  Clock3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Shield,
  TrendingUp,
  Heart,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "review-request-automation-for-dental-practices",
  metaTitle:
    "Review Request Automation for Dental Practices — Better Post-Visit Reputation Follow-Up | Dmytro AI",
  metaDescription:
    "Review request automation for dental practices. Ask for reviews after the right appointment, route unhappy replies before a public ask, and turn completed visits into cleaner local-trust follow-up.",
  badgeText: "Dental Workflow",
  badgeIcon: Star,
  h1: "Review Request Automation for Dental Practices",
  heroIntro:
    "Dental practices do not only lose revenue when a new-patient inquiry goes cold or when a scheduled visit turns into a no-show. They also lose momentum after the appointment is already done. A patient finishes a hygiene visit, exam, consult, or treatment, seems satisfied enough, and then nobody asks for a review while the experience still feels fresh. Or the request goes out too early, before a post-visit question is answered, before a billing issue is resolved, or before the office knows whether the patient actually felt taken care of. Review request automation for dental practices fixes that narrower post-visit workflow. It helps the practice ask at a believable moment, keeps provider-to-front-desk context attached, and protects reputation by routing uncertain replies back to a human before the system pushes for a public rating.",
  heroSubtext:
    "Below: what a practical dental review-request workflow should actually handle, how it stays distinct from the rest of the live dental cluster, what guardrails matter most, and what proof honestly supports the page without pretending there is already a dental-only review-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What dental review-request automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the stage after the hygiene, exam, consult, or treatment visit is effectively complete — not first-response speed, not booking friction, and not longer-term recall months later.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A real completed-visit trigger",
          body: "The workflow should start from a believable closeout signal: appointment completed, checkout finished, provider notes finalized, or front-desk follow-through marked done. If that trigger is sloppy, review asks go out before the patient experience actually feels settled.",
        },
        {
          icon: CalendarCheck,
          title: "Timing that fits the kind of dental appointment",
          body: "A hygiene visit, new-patient exam, treatment consult, restorative appointment, and follow-up check do not all feel review-ready on the same timeline. Strong automation respects visit type instead of blasting every patient the moment they leave.",
        },
        {
          icon: MessageSquare,
          title: "Different paths for happy patients and uncertain replies",
          body: "If a patient replies with a billing question, discomfort concern, insurance frustration, reschedule request, or confusion about next steps, the workflow should route that back to the office quickly instead of pushing harder for a Google review. Reputation automation only helps if service recovery comes first.",
        },
        {
          icon: Users,
          title: "Provider-to-front-desk context handoff",
          body: "The front desk should know what appointment happened, whether the patient seemed satisfied, and whether any follow-up issue was flagged before a review ask goes out. That internal visibility matters more than clever SMS wording.",
        },
        {
          icon: ArrowRightLeft,
          title: "Clean routing when the reply becomes another booking or treatment conversation",
          body: "A post-visit touchpoint can uncover another hygiene booking, treatment acceptance conversation, payment question, or front-desk recovery moment. The workflow should route that with context attached instead of burying it in a generic inbox.",
        },
        {
          icon: TrendingUp,
          title: "Visibility into which appointments actually create strong review asks",
          body: "Owners should be able to see which visit types create reviews, where review requests get ignored, and where unresolved concerns or timing problems keep blocking the ask. That turns review follow-through into an operating signal instead of one more forgotten admin step.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the dental cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays obvious:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for dental practices",
          values: [
            "Owners evaluating the broader operating layer across patient follow-up, booking, recalls, no-show reduction, review follow-through, and phone coverage",
            "Explains the full dental system instead of isolating the narrower post-visit reputation layer after the appointment is already complete",
          ],
        },
        {
          label: "Appointment scheduling and reminder automation for dental practices",
          values: [
            "Practices still losing visits before they happen because booking, confirmations, or reminder timing stay messy",
            "Focuses on getting the appointment attended in the first place, not on reputation follow-through after the appointment is over",
          ],
        },
        {
          label: "No-show reduction automation for dental practices",
          values: [
            "Practices trying to protect booked chair time before it turns into empty production",
            "Focuses on confirmation discipline and late-cancel recovery before the visit, not on review timing after the appointment is completed",
          ],
        },
        {
          label: "Recall and reactivation automation for dental practices",
          values: [
            "Practices trying to bring overdue hygiene, exam, and unscheduled-treatment patients back later in the lifecycle",
            "Focuses on repeat-visit revenue and overdue patients, not on asking for reviews while the most recent appointment is still fresh",
          ],
        },
        {
          label: "Review request automation for dental practices",
          values: [
            "Practices that already deliver strong patient experiences but ask for reviews inconsistently, too early, or with no unhappy-reply routing guardrail",
            "Focuses tightly on post-visit timing, reputation follow-through, provider-to-front-desk handoff, and turning completed appointments into cleaner local-trust signals",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your dental practice?",
      subtitle:
        "Best fit when the office already completes enough appointments that review discipline materially affects local trust and conversion — but post-visit follow-through still depends on memory.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You complete enough hygiene, exam, consult, or treatment visits that Google reviews materially affect trust and local conversion",
            "Review asks happen irregularly, too early, or only when someone at the front desk remembers",
            "Patients often seem happy, but nobody follows up while the experience is still fresh",
            "You want unhappy replies routed back inside before anyone is pushed toward a public review",
            "A few more strong reviews per month would likely justify the build because reputation already matters in your market",
            "You want a narrow post-visit workflow before forcing a bigger patient-communication or CRM rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still slow new-patient response, weak booking, or preventable no-shows before the appointment happens",
            "The practice does too little completed-visit volume for review consistency to matter yet",
            "Service quality, billing recovery, or front-desk coordination is unstable enough that automating review asks would only amplify the problem",
            "You already run a disciplined review process with very little manual drift",
            "You want automation deciding whether a patient concern is resolved without human judgment",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep dental review-request automation useful",
      subtitle:
        "The goal is safer reputation follow-through and stronger local trust — not just more outbound texts.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate around unresolved patient concerns",
          body: "If the patient still has discomfort, a billing issue, an insurance question, or uncertainty about next steps, more review requests will only expose the weakness faster. Fix the recovery path first.",
        },
        {
          icon: Sparkles,
          title: "Respect the difference between hygiene, exam, consult, and treatment visits",
          body: "The right review timing after a routine hygiene appointment is not always the same as the timing after a restorative procedure, treatment consult, or follow-up check. Strong automation adapts to the appointment type instead of forcing one rigid rule.",
        },
        {
          icon: Heart,
          title: "Keep the provider-to-front-desk signal clean",
          body: "If the front desk does not know which appointments ended smoothly, which patients sounded pleased, or which issues were flagged chairside, the review workflow stays blind. That handoff is part of the build, not a separate cleanup task.",
        },
        {
          icon: Shield,
          title: "Measure review quality, not just request volume",
          body: "The KPI is not only how many asks were sent. It is whether completed appointments create more positive reviews, fewer unhappy patients get pushed public too early, and the front desk spends less time manually remembering one more post-visit step.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical dental review-request workflow usually works",
      subtitle:
        "The clean version is simple: finish the appointment, wait until the experience actually feels settled, route live replies fast, and ask for the review when the signal says it is safe.",
      blocks: [
        {
          heading: "A completed appointment starts the closeout stage",
          body: "The strongest trigger is a real completion moment from the clinical or front-desk side, not a vague guess that the patient probably left already. Once that signal is trustworthy, the reputation workflow finally has something reliable to act on.",
        },
        {
          heading: "The first touch checks whether the experience feels complete",
          body: "For many appointments, a softer post-visit check-in makes more sense before the public review ask. That gives the patient room to raise a question, confirm the experience felt right, or surface a small issue while the office still has a chance to recover the moment cleanly.",
        },
        {
          heading: "Satisfied replies move toward the review ask; uncertain replies come back inside",
          body: "A strong workflow does not pretend every patient belongs on the same path. If the reply is clearly positive, the ask can move forward with a direct review link. If there is hesitation, confusion, or a complaint, the office should inherit the conversation fast.",
        },
        {
          heading: "The front desk gets the context needed to recover the moment or route the next opportunity",
          body: "When someone replies, the handoff should include what visit happened, when it happened, and why the follow-up fired. That makes it easier to resolve the issue, ask for the review later, or notice the next booking or treatment opportunity without losing context.",
        },
        {
          heading: "Owners can finally see where post-visit reputation follow-through breaks",
          body: "Over time the workflow shows which appointment types create the cleanest review asks, which ones produce more hesitation or silence, and where the bigger issue is timing, front-desk discipline, or a patient-experience problem that should be fixed before any automation expands.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published dental-specific review-automation case study on the site yet. The honest support comes from the live dental parent that already names review automation as part of the operating layer, the broader dental child cluster that already isolates booking, recall, no-show, and phone workflows, the adjacent chiropractic review-request page that proves the same post-visit reputation layer can stand on its own in another appointment-driven healthcare cluster, and the published CRM case study that proves stage visibility plus human handoff matter after an operational milestone.",
      studies: [
        {
          industry: "Dental parent page",
          headline: "The live dental parent already isolates review automation as a real workflow family",
          body: "The dental parent explicitly names review request automation alongside new-patient response, booking, recalls, no-show follow-up, and after-hours call handling. This child narrows that broader reputation layer instead of re-explaining the whole dental stack.",
          link: "/ai-automation-for-dental-practices",
        },
        {
          industry: "Dental workflow cluster",
          headline: "The live dental child set already proves this cluster can support narrower lifecycle pages without collapsing into one generic front-desk explainer",
          body: "Booking/reminder, recall/reactivation, no-show reduction, and live phone-answering pages are already live. This new child stays on the completed-appointment reputation step after those earlier operational stages are already handled.",
          link: "/what-to-automate-first-for-dental-practices",
        },
        {
          industry: "Adjacent healthcare review-closeout workflow",
          headline: "The chiropractic review-request page proves the same completed-visit reputation layer can stand on its own in another mature appointment-driven healthcare cluster",
          body: "Chiropractic and dental operations are different, but the workflow logic is close: the visit is complete, the patient may still have a question, and review timing only works when uncertain replies route back inside first.",
          link: "/review-request-automation-for-chiropractors",
        },
      ],
      links: [
        { label: "AI automation for dental practices", href: "/ai-automation-for-dental-practices" },
        { label: "What to automate first for dental practices", href: "/what-to-automate-first-for-dental-practices" },
        { label: "Review request automation for chiropractors", href: "/review-request-automation-for-chiropractors" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader dental automation page?",
      answer:
        "The broader dental page explains the full operating layer: new-patient response, booking, recalls, no-shows, reviews, and phone coverage. This page isolates the narrower reputation step after a visit is already complete and the office is deciding whether the experience is actually ready for a review ask.",
    },
    {
      question: "Why should a dental practice avoid sending every review request immediately after the appointment ends?",
      answer:
        "Because not every appointment feels fully settled the minute the patient checks out. Some people still need to ask a billing question, raise a discomfort concern, or clarify next steps. A strong workflow protects service recovery before it pushes for a public review.",
    },
    {
      question: "What does a focused dental review-request workflow usually cost?",
      answer:
        "A narrow post-visit review workflow is usually a smaller build than a full front-desk automation stack. In practice it often fits into the same rough range as other bounded single-workflow projects on the site, but the real price depends on how clean the completed-visit trigger, appointment segmentation, and unhappy-reply routing already are.",
    },
    {
      question: "Should every dental appointment get a review request?",
      answer:
        "Not necessarily. The workflow should respect appointment type and whether the experience actually feels complete. Some visits are review-ready quickly. Others need a softer check-in first so the office can catch a concern or question before sending a public review ask.",
    },
    {
      question: "Where does the ROI usually come from?",
      answer:
        "Usually from stronger local trust, more consistent review volume, cleaner handling of unhappy or uncertain replies before they become public problems, and less front-desk time spent manually remembering one more post-visit step after the appointment is already done.",
    },
  ],
  faqSubtitle:
    "Practical answers for dental practices considering a cleaner post-visit review workflow",
  ctaHeading: "Need cleaner reputation follow-up after the appointment is over?",
  ctaText:
    "Book a 30-minute call. We will look at how post-visit follow-through works today, where review asks are getting missed or mistimed, and whether a focused review-request workflow, an earlier front-desk fix, or no new build is the smarter next move.",
  ctaSubtext:
    "No obligation. No generic funnel. Just a practical conversation about where your practice is leaking trust after the appointment is already done.",
  relatedLinks: [
    {
      label: "AI automation for dental practices",
      href: "/ai-automation-for-dental-practices",
    },
    {
      label: "What to automate first for dental practices",
      href: "/what-to-automate-first-for-dental-practices",
    },
    {
      label: "Recall and Reactivation Automation for Dental Practices",
      href: "/recall-and-reactivation-automation-for-dental-practices",
    },
    {
      label: "Review Request Automation for Chiropractors",
      href: "/review-request-automation-for-chiropractors",
    },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
