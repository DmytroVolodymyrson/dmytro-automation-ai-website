import {
  Sparkles,
  Users,
  ArrowRightLeft,
  MessageSquare,
  CalendarRange,
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Star,
  HeartHandshake,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "referral-request-automation-for-med-spas",
  metaTitle:
    "Referral Request Automation for Med Spas — Turn Happy Patients into Better Referral Flow | Dmytro AI",
  metaDescription:
    "Referral request automation for med spas. Ask at the right point after a completed consultation or treatment, separate referral asks from review asks, route warm introductions fast, and turn happy patient outcomes into cleaner advocacy follow-up.",
  badgeText: "Med Spa Workflow",
  badgeIcon: Users,
  h1: "Referral Request Automation for Med Spas",
  heroIntro:
    "A lot of med spas say referrals are their best patients, then leave referrals to luck. A patient has a strong consultation, gets a good treatment result, or comes back happy for another visit — and then nobody follows up with a clean referral ask while trust is still warm. Or the clinic stacks a review ask, a package reminder, and a referral ask into one awkward message that makes the whole thing feel transactional. Referral request automation for med spas fixes that narrower post-visit advocacy workflow. It gives the clinic a practical way to ask for referrals at a believable moment, keep referral asks separate from review asks, route warm replies back to the front desk quickly, and turn positive patient experiences into more introductions instead of letting that goodwill disappear the minute the visit is done.",
  heroSubtext:
    "Below: what a practical med spa referral workflow should actually handle, how it stays distinct from review requests and broader recall or lead-follow-up workflows, what guardrails matter most, and what proof honestly supports this page without pretending there is already a dedicated med-spa referral-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What med spa referral-request automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the advocacy layer after a strong patient experience — not first-response speed, not consultation booking, and not longer-term treatment recall months later.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A real post-visit or post-outcome trigger",
          body: "The workflow should start from a believable signal: a consultation that ended well, a treatment visit that feels settled, a follow-up where the patient is clearly happy, or a package milestone where goodwill is obvious. If that trigger is sloppy, the referral ask lands too early and feels forced.",
        },
        {
          icon: Star,
          title: "A separate referral path from the review path",
          body: "A patient can be happy enough for a review but not ready to refer a friend immediately, and some referral-worthy conversations happen privately without any need for a public review ask first. Strong automation keeps those asks separate so the clinic does not pile everything into one generic message.",
        },
        {
          icon: HeartHandshake,
          title: "A natural ask tied to real patient advocacy",
          body: "The workflow should sound like a clinic following up after a genuinely good experience, not like a marketing blast. In med spas, that usually means a simple ask around friends, family, or someone already asking where the patient went — not a pushy copy-and-paste campaign.",
        },
        {
          icon: MessageSquare,
          title: "Clear routing when a patient names someone or asks about another service",
          body: "If a patient replies with a referral, asks whether a friend can book, or mentions interest in another consultation or package, the front desk should inherit that context immediately instead of letting it get buried in a generic inbox.",
        },
        {
          icon: ArrowRightLeft,
          title: "Fast handoff back to a human",
          body: "Referral automation should not try to carry the whole conversation. Once a patient shows intent, introduces someone, or asks a real booking question, the handoff back to staff should happen quickly with visit context attached.",
        },
        {
          icon: CalendarRange,
          title: "Timing that matches the type of visit",
          body: "A consultation, injectable visit, laser treatment, skincare program, or package milestone do not all become referral-ready on the same timeline. Strong automation respects the visit type and patient experience instead of forcing one rigid send rule.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the med spa cluster",
      subtitle:
        "These pages can coexist when each one owns a different workflow stage:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for med spas",
          values: [
            "Owners evaluating the broader clinic operating layer across lead follow-up, booking, no-show reduction, recall, review requests, and phone coverage",
            "Explains the whole med spa system instead of isolating the narrower advocacy layer after a strong consultation or treatment experience",
          ],
        },
        {
          label: "Treatment recall automation for med spas",
          values: [
            "Clinics trying to bring existing patients back for the next interval-based treatment or package touchpoint",
            "Focuses on retention and return timing later in the lifecycle, not on asking happy patients to introduce someone else while the recent visit is still fresh",
          ],
        },
        {
          label: "Review request automation for med spas",
          values: [
            "Clinics tightening the post-visit reputation layer",
            "Focuses on public social proof, unhappy-reply routing, and review timing rather than private introductions and fast referral handoff",
          ],
        },
        {
          label: "Referral request automation for med spas",
          values: [
            "Clinics that already create happy patient outcomes but still rely on luck for friend, family, and word-of-mouth introductions",
            "Focuses tightly on post-visit referral timing, separate review-vs-referral asks, and routing warm introductions back to the clinic quickly",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your med spa?",
      subtitle:
        "Best fit when the clinic already creates enough positive patient experiences that stronger advocacy follow-through would materially change growth.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You already hear patients say they refer friends, but there is no clean workflow that asks consistently or routes those introductions well",
            "Consultations and treatment visits often end positively, but referral follow-up still depends on memory",
            "The front desk can follow up quickly once a patient names a friend, family member, or another service they want",
            "Word of mouth already matters in how people choose your clinic",
            "You want a narrow advocacy workflow before forcing a bigger marketing or CRM rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still slow consultation response, weak booking, or preventable no-shows before the visit happens",
            "The clinic does too little completed-visit volume for referral discipline to matter yet",
            "Service quality, follow-up, or patient experience is too inconsistent to justify more post-visit asks",
            "Nobody can follow up quickly when a patient names a referral or asks about another service",
            "You want one stacked message that tries to ask for reviews, referrals, package sales, and rebooking all at once",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep med spa referral automation useful instead of awkward",
      subtitle:
        "The goal is cleaner advocacy follow-through — not more noise after the visit is done.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not stack every ask into one message",
          body: "A patient does not need a review ask, a referral ask, a package reminder, and a rebooking prompt at the same moment. Stronger workflows separate those touches so the clinic only asks for the next most natural thing.",
        },
        {
          icon: Sparkles,
          title: "Respect the difference between a good outcome and a ready advocacy moment",
          body: "Some patients are happy but still need time to see results settle or to decide whether they would recommend the clinic. Good automation makes room for that instead of assuming every positive visit immediately deserves a referral ask.",
        },
        {
          icon: Users,
          title: "Keep the front-desk handoff simple",
          body: "If a patient mentions a friend, partner, family member, or another service they are interested in, the clinic should receive enough context to continue the conversation naturally. That handoff is where the value comes from.",
        },
        {
          icon: BarChart3,
          title: "Measure introductions and booked consults, not just send volume",
          body: "The KPI is not how many referral asks went out. It is how many useful introductions, secondary consultations, and booked conversations came back because the clinic finally followed up after positive patient experiences consistently.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical med spa referral workflow usually works",
      subtitle:
        "The clean version is simple: identify a real positive outcome, make a believable advocacy ask, and hand warm replies back to a human fast.",
      blocks: [
        {
          heading: "A positive visit or follow-up creates a trustworthy signal",
          body: "The workflow should start only after the clinic has a reason to believe the experience landed well. That could be a strong consultation, a settled treatment follow-up, or a happy package or maintenance touchpoint. Without that signal, the referral ask feels premature.",
        },
        {
          heading: "The first outreach checks whether the patient is in a good position to advocate",
          body: "Some clinics can ask more directly. Others should use a softer check-in first so there is room for a question, concern, or clarification before the referral prompt appears. Referral timing should protect the relationship before it tries to leverage it.",
        },
        {
          heading: "The referral ask stays simple and human",
          body: "The strongest asks usually point somewhere practical: a friend asking about injectables, a family member considering a consultation, or someone the patient already told about the clinic. The message should make it easy to reply with an intro, a name, or a request for staff to follow up.",
        },
        {
          heading: "Warm replies route back to staff with context attached",
          body: "If a patient names someone, asks whether a friend can book, or opens a broader conversation about another service, the front desk should inherit that context quickly. That is the real value of the workflow — not the outbound message alone, but the speed and clarity of the handoff once it works.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published med-spa-specific referral-automation case study on the site yet. The honest support comes from the live med spa cluster, the existing review-request and treatment-recall children, the generic referral-request page that already defines this advocacy layer, and the published CRM case study that proves stage visibility plus handoff discipline create recoverable value.",
      studies: [
        {
          industry: "Med spa parent page",
          headline: "The live med spa parent already treats referrals as a real workflow family inside the broader operating layer",
          body: "The broader med spa page already frames lead follow-up, consultation booking, no-show reduction, review requests, treatment recall, and advocacy-style follow-through as distinct operating problems. This child narrows the referral layer instead of rewriting the whole med spa stack.",
          link: "/ai-automation-for-med-spas",
        },
        {
          industry: "Adjacent med spa closeout workflows",
          headline: "The live review-request and treatment-recall children prove the med spa cluster already supports distinct post-visit and later-lifecycle pages",
          body: "Those pages cover public reputation timing and repeat-treatment return timing. This page sits between them: not public review timing and not interval-based return recall, but private referral advocacy while goodwill from the recent visit is still warm.",
          link: "/review-request-automation-for-med-spas",
        },
        {
          industry: "CRM follow-through proof",
          headline: "The e-commerce CRM case study proves why milestone-based follow-up and human handoff matter once a customer relationship crosses an important stage",
          body: "That project is not a med spa build, but it proves the same operating principle: once a meaningful stage changes, the next action needs ownership, timing, and visibility instead of depending on memory. This page applies that principle to post-visit referral follow-up.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
        { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
        { label: "Review request automation for med spas", href: "/review-request-automation-for-med-spas" },
        { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from review request automation for med spas?",
      answer:
        "Review request automation is about public social proof and routing unhappy replies before a public ask. Referral request automation is about private advocacy and introductions. The best clinics keep those workflows separate so neither ask feels stacked or pushy.",
    },
    {
      question: "How is this different from treatment recall automation for med spas?",
      answer:
        "Treatment recall is about bringing existing patients back for the next service at the right interval. Referral request automation is earlier and narrower. It asks happy patients to introduce someone else or open another conversation while the recent visit still feels fresh.",
    },
    {
      question: "When should a med spa ask for referrals?",
      answer:
        "Usually after the clinic has a believable signal that the experience landed well: a strong consultation, a settled treatment follow-up, or a positive outcome check-in. The right timing depends on the visit type and whether the patient still has any unresolved questions.",
    },
    {
      question: "What does a focused med spa referral workflow usually cost?",
      answer:
        "A narrow referral workflow is usually a smaller build than a full med spa communication stack. In practice it often fits in the same rough range as other bounded single-workflow projects on the site, but the real price depends on how clean the trigger, messaging rules, and front-desk handoff already are.",
    },
    {
      question: "Where does the ROI usually come from?",
      answer:
        "Usually from more warm introductions, more secondary consultations or package conversations, faster follow-up on those opportunities, and less reliance on luck after strong patient experiences. If referrals already matter in your market, even a modest lift can justify the build.",
    },
  ],
  faqSubtitle:
    "Practical answers for med spas considering a cleaner post-visit referral workflow",
  ctaHeading: "Want better referral flow after a strong patient experience?",
  ctaText:
    "Book a 30-minute call. We will look at how your clinic follows up after positive visits today, where referral opportunities are being missed, and whether a focused referral workflow, a review-timing fix, or an earlier front-desk workflow is the smarter next move.",
  ctaSubtext:
    "No fake med-spa case-study claims. Just a practical recommendation based on your patient flow, front-desk handoff, and where advocacy is already getting lost.",
  relatedLinks: [
    { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
    { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
    { label: "Review request automation for med spas", href: "/review-request-automation-for-med-spas" },
    { label: "Treatment recall automation for med spas", href: "/treatment-recall-automation-for-med-spas" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
