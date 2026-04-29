import {
  Users,
  HeartHandshake,
  MessageSquare,
  ClipboardCheck,
  ArrowRightLeft,
  CalendarRange,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Star,
  Shield,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "referral-request-automation-for-chiropractors",
  metaTitle:
    "Referral Request Automation for Chiropractors — Turn Happy Patients into Better Referral Flow | Dmytro AI",
  metaDescription:
    "Referral request automation for chiropractors. Ask at the right point after a strong adjustment, re-eval, or care-plan milestone, keep referral asks separate from review asks, and route warm introductions back to the front desk fast.",
  badgeText: "Chiropractic Workflow",
  badgeIcon: Users,
  h1: "Referral Request Automation for Chiropractors",
  heroIntro:
    "A lot of chiropractic practices say referrals are their best patients, then leave referrals to chance. A patient finishes a strong first phase of care, has a good re-eval, or leaves an adjustment feeling better — and then nobody follows up with a clean referral ask while trust is still warm. Or the office bundles a review ask, a care-plan reminder, and a referral ask into one awkward message that feels more like admin spillover than a real patient follow-up. Referral request automation for chiropractors fixes that narrower post-visit advocacy workflow. It gives the office a practical way to ask for referrals at a believable moment, keep referral asks separate from review asks, route warm replies back to the front desk quickly, and turn positive patient experiences into more introductions instead of letting that goodwill disappear once the visit is over.",
  heroSubtext:
    "Below: what a practical chiropractic referral workflow should actually handle, how it stays distinct from review requests and broader recall or front-desk workflows, what guardrails matter most, and what proof honestly supports this page without pretending there is already a dedicated chiropractic referral-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What chiropractic referral-request automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the advocacy layer after a strong patient experience — not first-response speed, not first-visit intake, and not longer-term care-plan recall months later.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A real post-visit or progress trigger",
          body: "The workflow should start from a believable signal: a new patient visit that landed well, a re-eval with visible progress, a care-plan milestone, or a patient who is clearly satisfied enough to recommend the office. If the trigger is sloppy, the referral ask lands too early and feels forced.",
        },
        {
          icon: Star,
          title: "A separate referral path from the review path",
          body: "A patient can be happy enough for a Google review but not ready to introduce a spouse, coworker, or friend immediately, and some referrals happen privately without any need for a public review ask first. Strong automation keeps those asks separate so the office does not pile everything into one generic message.",
        },
        {
          icon: HeartHandshake,
          title: "A natural ask tied to real patient trust",
          body: "The workflow should sound like a chiropractic office following up after a genuinely good experience, not like a generic marketing blast. In this context the strongest asks are usually simple: someone the patient already mentioned, a family member with similar issues, or a friend who keeps putting off getting checked.",
        },
        {
          icon: MessageSquare,
          title: "Clear routing when a patient names someone or asks about another service",
          body: "If a patient replies with a referral, asks whether a spouse can book, or mentions another issue they want checked, the front desk should inherit that context immediately instead of letting it get buried in a generic inbox.",
        },
        {
          icon: ArrowRightLeft,
          title: "Fast handoff back to a human",
          body: "Referral automation should not try to carry the whole conversation. Once a patient shows intent, names someone, or asks a real scheduling question, the handoff back to staff should happen quickly with visit context attached.",
        },
        {
          icon: CalendarRange,
          title: "Timing that matches the kind of visit",
          body: "A first visit, a progress re-eval, a maintenance adjustment, and a longer corrective-care milestone do not all become referral-ready on the same timeline. Strong automation respects the visit type instead of forcing one rigid send rule.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the chiropractic cluster",
      subtitle:
        "These pages can coexist when each one owns a different workflow stage:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for chiropractors",
          values: [
            "Owners evaluating the broader patient-communication and front-desk layer across intake, scheduling, recall, no-shows, reviews, advocacy, and after-hours call handling",
            "Explains the whole chiropractic system instead of isolating the narrower referral layer after a strong patient outcome or progress checkpoint",
          ],
        },
        {
          label: "What to automate first for chiropractors",
          values: [
            "Practice owners deciding whether missed-call recovery, intake, recall, no-show reduction, review follow-through, referrals, or phone coverage deserves the first project",
            "Helps choose the first bounded workflow before a broader rollout, instead of focusing only on the post-visit advocacy layer",
          ],
        },
        {
          label: "Care plan recall automation for chiropractors",
          values: [
            "Practices trying to bring overdue maintenance or treatment-plan patients back on schedule",
            "Focuses on retention and return timing later in the lifecycle, not on asking happy patients to introduce someone else while the recent visit still feels current",
          ],
        },
        {
          label: "Review request automation for chiropractors",
          values: [
            "Practices tightening the post-visit reputation layer",
            "Focuses on public social proof, unhappy-reply routing, and review timing rather than private introductions and warm referral handoff",
          ],
        },
        {
          label: "Referral request automation for chiropractors",
          values: [
            "Practices that already create good patient experiences but still rely on luck for family, friend, and word-of-mouth introductions",
            "Focuses tightly on post-visit referral timing, separate review-vs-referral asks, and routing warm introductions back to the office quickly",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your chiropractic practice?",
      subtitle:
        "Best fit when the practice already creates enough positive patient experiences that stronger advocacy follow-through would materially affect growth.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You already hear patients say they send family or friends, but there is no clean workflow that asks consistently or routes those introductions well",
            "Adjustments, re-evals, or care-plan milestones often end positively, but referral follow-up still depends on memory",
            "The front desk can follow up quickly once a patient names a referral or asks whether someone else can book",
            "Word of mouth already matters in how new patients choose a chiropractor in your market",
            "You want a narrow advocacy workflow before forcing a bigger marketing or CRM rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still missed calls, weak first response, or first-visit scheduling friction before the appointment happens",
            "The practice does too little completed-visit volume for referral discipline to matter yet",
            "Patient experience, follow-up, or care-plan ownership is too inconsistent to justify more post-visit asks",
            "Nobody can follow up quickly when a patient actually names a referral",
            "You want one stacked message that asks for reviews, referrals, and recall all at once",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep chiropractic referral automation useful instead of awkward",
      subtitle:
        "The goal is cleaner advocacy follow-through — not more noise after the visit is done.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not stack every ask into one message",
          body: "A patient does not need a review ask, a referral ask, a rebooking prompt, and a care-plan reminder all at once. Stronger workflows separate those touches so the office only asks for the next most natural thing.",
        },
        {
          icon: Shield,
          title: "Protect service recovery before asking for introductions",
          body: "If the patient still has a soreness concern, a billing question, or confusion about the next step in care, the workflow should route that back inside first. Referral automation only helps when the experience actually feels settled.",
        },
        {
          icon: Users,
          title: "Keep the front-desk handoff simple",
          body: "If a patient mentions a spouse, child, coworker, or another issue they want checked, the office should receive enough context to continue the conversation naturally. That handoff is where the value comes from.",
        },
        {
          icon: BarChart3,
          title: "Measure introductions and booked visits, not just send volume",
          body: "The KPI is not how many referral asks went out. It is how many useful introductions, booked evaluations, or secondary conversations came back because the practice finally followed up after positive visits consistently.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical chiropractic referral workflow usually works",
      subtitle:
        "The clean version is simple: identify a real positive outcome, make a believable advocacy ask, and hand warm replies back to a human fast.",
      blocks: [
        {
          heading: "A positive visit or progress checkpoint creates a trustworthy signal",
          body: "The workflow should start only after the office has a reason to believe the experience landed well. That could be a first visit with clear momentum, a re-eval showing improvement, or a maintenance patient who is obviously engaged with care. Without that signal, the referral ask feels premature.",
        },
        {
          heading: "The first outreach checks whether the patient is in a good position to advocate",
          body: "Some practices can ask more directly. Others should use a softer check-in first so there is room for a question or concern before the referral prompt appears. Referral timing should protect the relationship before it tries to leverage it.",
        },
        {
          heading: "The referral ask stays simple and human",
          body: "The strongest asks usually point somewhere practical: a friend with similar back pain, a family member who keeps putting off care, or someone the patient already mentioned. The message should make it easy to reply with a name, an intro, or a request for staff to follow up.",
        },
        {
          heading: "Warm replies route back to staff with context attached",
          body: "If a patient names someone, asks whether a spouse can book, or opens a wider conversation about another issue they want checked, the front desk should inherit that context quickly. That is the real value of the workflow — not the outbound message alone, but the speed and clarity of the handoff once it works.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published chiropractic-specific referral-automation case study on the site yet. The honest support comes from the live chiropractic cluster, the existing review and care-plan child pages, the generic referral-request page that already defines this advocacy layer, and the published CRM case study that proves stage visibility plus handoff discipline matter.",
      studies: [
        {
          industry: "Chiropractic parent page",
          headline: "The live chiropractor parent already treats referrals as a real workflow family inside the broader operating layer",
          body: "The broader chiropractor page already frames intake, scheduling, recall, no-shows, reviews, advocacy, and after-hours follow-through as distinct operating problems. This child narrows the referral layer instead of rewriting the whole chiropractic stack.",
          link: "/ai-automation-for-chiropractors",
        },
        {
          industry: "Adjacent chiropractic closeout workflows",
          headline: "The live review-request and care-plan-recall children prove the chiropractic cluster already supports distinct post-visit and later-lifecycle pages",
          body: "Those pages cover public reputation timing and longer-term patient return timing. This page sits between them: not public review timing and not interval-based recall, but private referral advocacy while goodwill from the recent visit is still warm.",
          link: "/review-request-automation-for-chiropractors",
        },
        {
          industry: "CRM follow-through proof",
          headline: "The e-commerce CRM case study proves why milestone-based follow-up and human handoff matter once a relationship changes state",
          body: "That project is not a chiropractic build, but it proves the same operating principle: once a meaningful stage changes, the next action needs ownership, timing, and visibility instead of depending on memory. This page applies that principle to post-visit referral follow-up.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for chiropractors", href: "/ai-automation-for-chiropractors" },
        { label: "What to automate first for chiropractors", href: "/what-to-automate-first-for-chiropractors" },
        { label: "Review request automation for chiropractors", href: "/review-request-automation-for-chiropractors" },
        { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from review request automation for chiropractors?",
      answer:
        "Review-request automation is about public social proof and routing unhappy replies before a public ask. Referral-request automation is about private introductions. The best practices keep those workflows separate so neither ask feels stacked or pushy.",
    },
    {
      question: "How is this different from care-plan recall automation for chiropractors?",
      answer:
        "Care-plan recall is about bringing existing patients back for the next visit at the right interval. Referral-request automation is earlier and narrower. It asks happy patients to introduce someone else or open another conversation while the recent visit still feels fresh.",
    },
    {
      question: "When should a chiropractor ask for referrals?",
      answer:
        "Usually after the office has a believable signal that the experience landed well: a strong first visit, a progress re-eval, or a maintenance touchpoint where the patient is clearly positive. The right timing depends on visit type and whether the patient still has any unresolved questions.",
    },
    {
      question: "What does a focused chiropractic referral workflow usually cost?",
      answer:
        "A narrow referral workflow is usually a smaller build than a full chiropractic communication stack. In practice it often fits the same rough range as other bounded single-workflow projects on the site, but the real price depends on how clean the trigger, messaging rules, and front-desk handoff already are.",
    },
    {
      question: "Where does the ROI usually come from?",
      answer:
        "Usually from more warm introductions, more booked evaluations from people who already trust the person referring them, faster follow-up on those opportunities, and less reliance on luck after good patient experiences. If word of mouth already matters in your market, even a modest lift can justify the build.",
    },
  ],
  faqSubtitle:
    "Practical answers for chiropractors considering a cleaner post-visit referral workflow",
  ctaHeading: "Want better referral flow after a strong patient experience?",
  ctaText:
    "Book a 30-minute call. We will look at how your practice follows up after positive visits today, where referral opportunities are being missed, and whether a focused referral workflow, a review-timing fix, or an earlier front-desk workflow is the smarter next move.",
  ctaSubtext:
    "No fake chiropractic case-study claims. Just a practical recommendation based on your patient flow, front-desk handoff, and where advocacy is already getting lost.",
  relatedLinks: [
    { label: "AI automation for chiropractors", href: "/ai-automation-for-chiropractors" },
    { label: "What to automate first for chiropractors", href: "/what-to-automate-first-for-chiropractors" },
    { label: "Review request automation for chiropractors", href: "/review-request-automation-for-chiropractors" },
    { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
