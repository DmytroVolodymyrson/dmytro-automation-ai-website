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
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "review-request-automation-for-med-spas",
  metaTitle:
    "Review Request Automation for Med Spas — Better Post-Visit Reputation Follow-Up | Dmytro AI",
  metaDescription:
    "Review request automation for med spas. Ask for reviews after the right visit, route unhappy replies before a public ask, and turn completed treatments into cleaner local-trust follow-up.",
  badgeText: "Med Spa Workflow",
  badgeIcon: Star,
  h1: "Review Request Automation for Med Spas",
  heroIntro:
    "Med spas do not only lose revenue when a consultation request goes cold or when a patient no-shows. They also lose momentum after the visit is already done. The treatment went well, the patient looked happy enough, and then no review ask ever went out while the result still felt fresh. Or the request went out too early, before the patient had seen swelling settle, before a small billing or scheduling question came back to the front desk, or before the team knew whether the experience actually felt complete. Review request automation for med spas fixes that narrower post-visit workflow. It gives completed consultations and treatment visits a cleaner closeout path, helps the clinic ask for reviews at a believable moment, and protects reputation by routing uncertain replies back to a human before the business pushes for a public rating.",
  heroSubtext:
    "Below: what a practical med spa review-request workflow should actually handle, how it stays distinct from the other live med spa pages, which guardrails matter most, and what proof honestly supports the page without pretending there is already a dedicated med-spa review-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What med spa review-request automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the stage after the consultation or treatment visit is effectively complete — not first-response speed, not booking friction, and not longer-term recall months later.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A real post-visit completion trigger",
          body: "The workflow should start from a believable closeout signal: consult marked complete, treatment visit finished, front desk follow-up done, or invoice/checkout recorded. If that trigger is sloppy, review asks go out before the experience actually feels settled.",
        },
        {
          icon: CalendarCheck,
          title: "Timing that matches the kind of visit",
          body: "A filler visit, Botox touchpoint, laser treatment, skincare consult, and package follow-up do not all feel review-ready on the same timeline. Strong review timing respects the visit type instead of blasting every patient the minute they leave.",
        },
        {
          icon: MessageSquare,
          title: "Different paths for happy patients and uncertain replies",
          body: "If a patient replies with swelling concerns, a billing question, a booking issue, a product follow-up, or disappointment about the visit, the workflow should route that back to the front desk fast instead of pushing harder for a Google review. Reputation automation only helps if service recovery comes first.",
        },
        {
          icon: Users,
          title: "Provider-to-front-desk context handoff",
          body: "The front desk should know what service happened, whether the patient seemed pleased, and whether any follow-up note was flagged before a review ask goes out. That internal visibility matters more than clever SMS wording.",
        },
        {
          icon: ArrowRightLeft,
          title: "Clean routing when the reply turns into another booking opportunity",
          body: "A post-visit touchpoint can uncover the next consultation, package question, membership discussion, or product upsell. The workflow should route that response with context attached instead of burying it in a generic inbox.",
        },
        {
          icon: TrendingUp,
          title: "Visibility into which visits actually generate strong review asks",
          body: "Owners should be able to see which visit types create reviews, where review requests get ignored, and where unresolved questions or timing problems keep blocking the ask. That turns review follow-up into an operating signal instead of another forgotten admin step.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the med spa cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays obvious:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for med spas",
          values: [
            "Owners evaluating the broader operating layer across lead follow-up, booking, no-show reduction, recall, phone coverage, and review automation",
            "Explains the full med spa system instead of isolating the narrower post-visit reputation layer after the patient interaction is already complete",
          ],
        },
        {
          label: "Consultation booking and reminder automation for med spas",
          values: [
            "Clinics still losing consultations before the visit happens because scheduling drags out or reminders stay inconsistent",
            "Focuses on getting the appointment attended in the first place, not on post-visit reputation follow-through after the appointment is over",
          ],
        },
        {
          label: "No-show reduction automation for med spas",
          values: [
            "Clinics trying to protect booked consult and treatment slots before they turn into empty chair time",
            "Focuses on confirmation discipline and reminder cadence before the visit, not on review timing after the visit is completed",
          ],
        },
        {
          label: "Treatment recall automation for med spas",
          values: [
            "Clinics trying to bring existing patients back for the next interval-based treatment or package touchpoint",
            "Focuses on repeat-visit revenue later in the lifecycle, not on asking for reviews while the most recent visit is still fresh",
          ],
        },
        {
          label: "Review request automation for med spas",
          values: [
            "Clinics that already deliver strong patient experiences but ask for reviews inconsistently, too early, or with no unhappy-reply routing guardrail",
            "Focuses tightly on post-visit timing, reputation follow-through, front-desk handoff, and turning completed consultations and treatment visits into cleaner local-trust signals",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your med spa?",
      subtitle:
        "Best fit when the clinic already completes enough consultations or treatment visits that review discipline materially affects local trust and conversion — but post-visit follow-through still depends on memory.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You complete enough consultations or treatment visits that Google reviews materially affect trust and local conversion",
            "Review asks happen irregularly, too early, or only when someone at the front desk remembers",
            "Patients often seem happy, but nobody follows up while the experience is still fresh",
            "You want unhappy replies routed back inside before anyone is pushed toward a public review",
            "A few more strong reviews per month would likely justify the build because reputation already matters in your market",
            "You want a narrow post-visit workflow before forcing a bigger front-desk or CRM rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still slow consultation response, weak booking, or preventable no-shows before the visit happens",
            "The clinic does too little completed-visit volume for review consistency to matter yet",
            "Service quality, front-desk coordination, or patient follow-up is unstable enough that automating review asks would only amplify the problem",
            "You already run a disciplined review process with very little manual drift",
            "You want automation deciding whether a patient concern is resolved without human judgment",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep med spa review-request automation useful",
      subtitle:
        "The goal is safer reputation follow-through and better local trust — not just more outbound texts.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate around unresolved patient concerns",
          body: "If the patient still has a healing concern, a billing issue, a scheduling complaint, or a product question, more review requests will only expose the weakness faster. Fix the recovery path first.",
        },
        {
          icon: Sparkles,
          title: "Respect the difference between consults, treatment visits, and package touchpoints",
          body: "The right review timing after a consultation is not always the same as the timing after a Botox appointment, filler visit, laser session, or follow-up touchpoint. Strong automation adapts to the visit type instead of forcing one rigid rule.",
        },
        {
          icon: Users,
          title: "Keep the provider-to-front-desk signal clean",
          body: "If the front desk does not know which visits ended smoothly, which patients sounded pleased, or which issues were flagged in the room, the review workflow stays blind. That handoff is part of the build, not a separate cleanup task.",
        },
        {
          icon: Shield,
          title: "Measure review quality, not just request volume",
          body: "The KPI is not only how many asks were sent. It is whether completed visits create more positive reviews, fewer unhappy patients get pushed public too early, and the front desk spends less time manually chasing post-visit follow-through.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical med spa review-request workflow usually works",
      subtitle:
        "The clean version is simple: finish the visit, wait until the experience actually feels settled, route live replies fast, and ask for the review when the signal says it is safe.",
      blocks: [
        {
          heading: "A completed visit starts the closeout stage",
          body: "The strongest trigger is a real completion moment from the provider or front-desk side, not a vague guess that the appointment is probably done. Once that signal is trustworthy, the reputation workflow finally has something reliable to act on.",
        },
        {
          heading: "The first touch checks whether the experience feels complete",
          body: "For many visits, a soft post-visit check-in makes more sense before the public review ask. That gives the patient room to raise a concern, ask a question, or confirm the experience felt right — and gives your team a safer read on whether the visit is actually ready for a review request.",
        },
        {
          heading: "Satisfied replies move toward the review ask; uncertain replies come back inside",
          body: "A strong workflow does not pretend every patient belongs on the same path. If the reply is clearly positive, the ask can move forward with a direct review link. If there is hesitation, confusion, or a complaint, the front desk should inherit the conversation fast.",
        },
        {
          heading: "The front desk gets the context needed to recover the moment or route the next opportunity",
          body: "When someone replies, the handoff should include what visit happened, when it happened, and why the follow-up fired. That makes it easier to resolve the issue, ask for the review later, or notice the next booking or package opportunity without losing context.",
        },
        {
          heading: "Owners can finally see where post-visit reputation follow-through breaks",
          body: "Over time the workflow shows which visit types create the cleanest review asks, which ones produce more hesitation or silence, and where the bigger issue is timing, front-desk discipline, or a patient-experience problem that should be fixed before any automation expands.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published med-spa-specific review-automation case study on the site yet. The honest support comes from the live med spa parent page that already names review automation as part of the operating layer, the broader med spa child cluster that already isolates booking, no-show, recall, and phone workflows, the adjacent cleaning review-request page that proves the same post-service reputation layer can stand on its own in a nearby service vertical, and the published CRM case study that proves stage visibility plus human handoff matter after an operational milestone.",
      studies: [
        {
          industry: "Med spa parent page",
          headline: "The live med spa parent already isolates review requests as a real workflow family",
          body: "The med spa parent explicitly names review request automation alongside lead follow-up, consultation booking, no-show reduction, recall, and after-hours handling. This child narrows that broader reputation layer instead of re-explaining the whole med spa stack.",
          link: "/ai-automation-for-med-spas",
        },
        {
          industry: "Adjacent review-closeout workflow",
          headline: "The cleaning review-request page proves the same completed-service reputation layer can stay distinct from earlier lead, booking, retention, and phone stages",
          body: "Cleaning and med spas are different businesses, but the workflow logic is close: the service experience is complete, the client or patient may still have a question or concern, and review timing only works when replies route back inside first.",
          link: "/review-request-automation-for-cleaning-companies",
        },
        {
          industry: "CRM follow-up proof",
          headline: "The e-commerce CRM case study shows why stage visibility and fast human handoff matter once an important customer state changes",
          body: "That case study is not about med spas, but it proves the same operating principle: once a meaningful stage changes, the next action needs to route cleanly with context instead of depending on memory. This page applies that principle to post-visit reputation follow-up.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
        { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
        { label: "Review request automation for cleaning companies", href: "/review-request-automation-for-cleaning-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader med spa automation page?",
      answer:
        "The broader med spa page explains the full operating layer: lead follow-up, consultation booking, no-show reduction, recall, phone coverage, and review automation. This page isolates the narrower post-visit reputation layer after the patient interaction is already complete.",
    },
    {
      question: "Why should a med spa avoid sending every review request immediately after the appointment ends?",
      answer:
        "Because not every visit feels fully settled the minute the patient checks out. Some people need time to process the visit, ask a follow-up question, raise a billing concern, or confirm they are happy with the experience. A strong workflow protects service recovery before it pushes for a public review.",
    },
    {
      question: "What does a focused med spa review-request workflow usually cost?",
      answer:
        "A narrow post-visit review workflow is usually a smaller build than a full med spa automation stack. In practice it often fits in the same rough range as other bounded single-workflow projects on the site, but the real price depends on how clean the completion trigger, visit segmentation, and unhappy-reply routing already are.",
    },
    {
      question: "Can this work for both consultations and treatment visits?",
      answer:
        "Yes, but the timing and logic should differ by visit type. Consultation reviews, injectable visits, laser treatments, and package follow-ups do not all feel review-ready on the same timeline. The workflow should respect those differences instead of treating every visit the same.",
    },
    {
      question: "Where does the ROI usually come from?",
      answer:
        "Usually from stronger local trust, more consistent review volume, cleaner unhappy-patient routing, and less front-desk time spent manually chasing post-visit follow-up. If reviews materially affect your consultation flow, even a modest lift can justify the build.",
    },
  ],
  faqSubtitle:
    "Practical answers for med spas considering a cleaner post-visit review workflow",
  ctaHeading: "Need cleaner reputation follow-up after the visit is done?",
  ctaText:
    "Book a 30-minute call. We will look at how completed visits get handed off today, where review asks are being missed or mistimed, and whether a focused post-visit workflow, an earlier booking or no-show fix, or no new build is the smarter next move.",
  ctaSubtext:
    "No generic med-spa funnel pitch. Just a practical look at the post-visit layer.",
  relatedLinks: [
    { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
    { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
    { label: "Consultation booking and reminder automation for med spas", href: "/consultation-booking-and-reminder-automation-for-med-spas" },
    { label: "No-show reduction automation for med spas", href: "/no-show-reduction-automation-for-med-spas" },
    { label: "Treatment recall automation for med spas", href: "/treatment-recall-automation-for-med-spas" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
