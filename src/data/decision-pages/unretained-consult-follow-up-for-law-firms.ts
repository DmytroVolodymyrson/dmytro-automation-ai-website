import {
  Scale,
  Clock,
  ArrowRightLeft,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  MessageSquare,
  BarChart3,
  UserRoundCheck,
  CalendarCheck,
  ShieldCheck,
  FileText,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "unretained-consult-follow-up-for-law-firms",
  metaTitle:
    "Unretained-Consult Follow-Up for Law Firms — Recover More Retained Matters Without More Manual Chasing | Dmytro AI",
  metaDescription:
    "Unretained-consult follow-up for law firms. Practical post-consult nurture workflow for firms that lose prospects after the meeting because nobody owns the next touch, reminder cadence, or attorney handoff.",
  badgeText: "Law-Firm Workflow",
  badgeIcon: Scale,
  h1: "Unretained-Consult Follow-Up for Law Firms",
  heroIntro:
    "A law firm can do a lot right before the consultation and still lose the matter afterward. The consult happens, the prospect says they need to think about it, asks to review the fee agreement, wants to talk to a spouse or business partner, or simply goes quiet. Then nobody owns the follow-up. A receptionist assumes the attorney will handle it. The attorney assumes intake will send something. A sticky note or CRM task gets missed. By the time someone remembers, the prospect has already hired another firm or gone cold. Unretained-consult follow-up automation for law firms fixes that narrower post-consult conversion workflow. It gives the firm a consistent, professional way to follow up after the consultation, protect momentum while the matter is still active, route replies back to the right human, and recover retained matters that should not depend on memory alone.",
  heroSubtext:
    "Below: what this legal post-consult workflow should actually include, how it stays distinct from the broader law-firm page, the first-project page, and the consultation-scheduling child, what adjacent proof honestly supports it, and when post-consult follow-up is or is not the right workflow to build before faster inquiry response, intake prep, or after-hours call handling.",
  sections: [
    {
      type: "cards",
      title: "What unretained-consult follow-up should actually handle",
      subtitle:
        "This page starts after the consultation already happened. The goal is not more generic lead nurture. It is disciplined follow-through on real consults that should still have a chance to turn into retained matters.",
      items: [
        {
          icon: MessageSquare,
          title: "Immediate post-consult acknowledgment",
          body: "The workflow should confirm that the consultation happened, recap the next step in plain language, and make it obvious how the prospect should reply if they are ready, unsure, or missing something needed to move forward.",
        },
        {
          icon: Clock,
          title: "Follow-up cadence that does not rely on memory",
          body: "A useful sequence gives the firm a defined timeline for the first follow-up, the reminder after silence, and the final nudge before the opportunity goes stale. That protects momentum without turning every attorney into a manual sales coordinator.",
        },
        {
          icon: FileText,
          title: "Fee-agreement and next-step reminders",
          body: "Many unretained consults stall because the prospect still needs to review paperwork, gather a document, or understand the next administrative step. The workflow should keep that practical follow-through moving instead of assuming interest disappeared.",
        },
        {
          icon: ArrowRightLeft,
          title: "Reply routing back to the right human",
          body: "If the prospect replies with a fee question, asks for another call, wants clarification, or says timing changed, the handoff should route back to the attorney or intake owner with context attached instead of dying in a shared inbox.",
        },
        {
          icon: CalendarCheck,
          title: "Re-booking when the first consult did not close the loop",
          body: "Sometimes the right next step is not another generic check-in. It is a clean way to schedule a follow-up call, move the matter review forward, or reconnect after a specific delay without forcing staff to chase the thread manually.",
        },
        {
          icon: UserRoundCheck,
          title: "Clear ownership across intake and attorney handoff",
          body: "The strongest setup makes it obvious who owns the next touch, what was already sent, what the prospect said in the consult, and when the matter should be treated as lost, paused, or still active.",
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
            "Covers the broader system across inquiry response, intake prep, consultation scheduling, post-consult follow-up, case updates, and after-hours handling",
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
          label: "Consultation scheduling and reminder automation for law firms",
          values: [
            "Firms losing momentum before the consultation actually happens",
            "Focuses on booking, confirmations, reminders, reschedules, and handoff before the consult takes place",
          ],
        },
        {
          label: "Unretained-consult follow-up for law firms",
          values: [
            "Firms that already get consultations but lose too many matters afterward because follow-up ownership is weak",
            "Stays tightly on post-consult nurture, next-step reminders, reply routing, and disciplined conversion follow-through after the meeting already happened",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your law firm?",
      subtitle:
        "Best fit when the firm already generates consultations, but the post-consult conversion layer still depends on whoever happens to remember the next touch.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your firm already gets a meaningful number of consultations each month",
            "Prospects often leave the consultation saying they need time, paperwork, approval, or another touch before deciding",
            "Follow-up after the consult is inconsistent across attorneys, intake staff, or practice areas",
            "You want the highest-payoff next build from opportunities already in the pipeline",
            "One extra retained matter per month would likely justify the workflow",
            "You need post-consult discipline more than another broad legal-tech platform pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The bigger leak is still slow first response before consultations are happening at all",
            "The firm rarely does consultations or closes almost every consult immediately",
            "Nobody has defined who should own consult notes, next steps, or fee-agreement follow-up",
            "You really need cleaner consultation booking and reminder handling before the consult happens",
            "You want automation handling substantive legal objections or giving legal advice instead of routing administrative follow-through",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for legal post-consult follow-up",
      subtitle:
        "The goal is more retained matters with cleaner ownership — not a spammy sequence that weakens trust after the consultation.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not treat every unretained consult the same",
          body: "Some prospects are price-shopping, some are waiting on paperwork, and some are simply not a fit. The workflow should reflect real outcome states instead of blasting every consult with the same generic reminder sequence.",
        },
        {
          icon: ShieldCheck,
          title: "Keep substantive legal work out of the automation",
          body: "This workflow should handle reminders, next-step clarity, routing, and administrative follow-through. Legal advice, strategy conversations, and sensitive matter analysis still belong to the attorney.",
        },
        {
          icon: CalendarCheck,
          title: "Separate post-consult nurture from pre-consult scheduling",
          body: "This page begins after the consultation occurred. If the bigger problem is still booking friction, reminder timing, or preventable no-shows before the consult, that belongs on the consultation-scheduling child page instead of bloating this one.",
        },
        {
          icon: BarChart3,
          title: "Track why consults stall",
          body: "The sequence becomes much more useful when the firm can see whether matters are dying because of timing, fee hesitation, missing documents, partner approval, or unclear ownership. That makes the next operational fix easier to scope.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical law-firm post-consult follow-up workflow usually works",
      subtitle:
        "The clean version is simple: mark the consultation outcome, send the right next-step follow-up fast, route replies with context, and stop letting retained-matter opportunities depend on memory.",
      blocks: [
        {
          heading: "The consultation gets an outcome, not just a calendar note",
          body: "As soon as the consultation ends, the workflow should know whether the matter looks active, pending, paused, not a fit, or needs another touch before a decision. Without that state, every later follow-up becomes guesswork.",
        },
        {
          heading: "The prospect gets the right next-step message quickly",
          body: "That might be a thank-you with a clear administrative next step, a reminder to review and sign an agreement, a prompt to send missing information, or a nudge to schedule a short follow-up conversation. The key is speed and clarity while the consult is still fresh.",
        },
        {
          heading: "Silence triggers the next touch on a defined cadence",
          body: "If nothing happens after the first message, the workflow sends the next reminder on purpose instead of depending on whoever had the consult to remember three days later. That protects momentum without creating an endless drip campaign.",
        },
        {
          heading: "Replies route back to the right owner with the thread attached",
          body: "When the prospect responds, the attorney or intake owner should see what was sent, what the prospect already said, and what the next decision should be. That keeps post-consult conversion from turning into another fragmented inbox problem.",
        },
        {
          heading: "The firm learns whether the real issue is follow-up discipline or something earlier",
          body: "Over time, the workflow shows whether matters are actually being lost after the consult or whether the bigger problem still sits earlier in the funnel — first response, intake readiness, booking friction, or after-hours coverage. That makes the next build a real operating decision instead of a guess.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is not a published law-firm post-consult case study on the site yet. The honest proof frame is the live legal cluster plus published CRM and follow-up proof already on the site.",
      studies: [
        {
          industry: "Law-firm cluster",
          headline: "The live law-firm parent and first-project page already isolate post-consult follow-up as one of the clearest workflow families in the legal intake layer",
          body: "The broader law-firm page already names lead nurture for prospects who consulted but did not retain, and the first-project guide explicitly treats unretained-consult follow-up as a bounded workflow alongside inquiry response, intake prep, scheduling, and after-hours handling. This child simply goes one level narrower and stays on the post-consult conversion layer.",
          link: "/ai-automation-for-law-firms",
        },
        {
          industry: "Published CRM proof",
          headline: "The e-commerce CRM case study proves why structured follow-up and clear ownership recover value from opportunities already sitting in the pipeline",
          body: "That project is not a legal deployment, but it is direct proof that automation can organize large volumes of opportunities, remove memory-based follow-up, and create a disciplined next-step system where manual ownership was previously weak.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Published follow-up mechanics",
          headline: "The generic lead-follow-up guide already proves the response-speed and ownership patterns this workflow depends on",
          body: "That guide is not law-firm-specific, but it directly supports the mechanics here: defined sequences, cleaner human handoff, faster next-touch timing, and follow-up that does not sound robotic even when the system is doing the triggering.",
          link: "/ai-lead-follow-up-for-service-businesses",
        },
      ],
      links: [
        { label: "AI automation for law firms", href: "/ai-automation-for-law-firms" },
        { label: "What to automate first for law firms", href: "/what-to-automate-first-for-law-firms" },
        { label: "Consultation scheduling and reminder automation for law firms", href: "/consultation-scheduling-and-reminder-automation-for-law-firms" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader law-firm automation page?",
      answer:
        "The broader law-firm page covers the full legal intake-and-operations layer. This page is narrower. It focuses only on what happens after the consultation already occurred: post-consult follow-up, next-step reminders, reply routing, and disciplined ownership until the matter is retained or clearly closed out.",
    },
    {
      question: "How is this different from consultation scheduling and reminder automation for law firms?",
      answer:
        "The consultation-scheduling page focuses on getting the consult booked and attended. This page starts after the meeting happened. It assumes the consult already occurred and goes deeper on what the firm should do when the prospect has not retained yet.",
    },
    {
      question: "What does a focused unretained-consult follow-up workflow usually cost?",
      answer:
        "A focused post-consult follow-up workflow often lands around $1.5K-$3.5K depending on consult-outcome states, message branching, agreement or document reminders, reply routing, and whether re-booking logic also needs to be included. Broader law-firm automation costs more when it also includes first response, intake prep, scheduling, and after-hours handling.",
    },
    {
      question: "When should post-consult follow-up come before faster inquiry response?",
      answer:
        "Choose post-consult follow-up first when the firm already gets enough consultations, but too many prospects disappear afterward because no one owns the next touch. If the bigger leak is still slow response before the consultation even happens, faster inquiry response usually comes first.",
    },
    {
      question: "Can this work with my current CRM or legal practice software?",
      answer:
        "Usually yes, as long as there is a practical place to record consult outcomes, trigger the right next-step message, and route replies back to the correct owner. In many firms, the existing calendar, CRM, or legal software stays in place and automation strengthens the post-consult communication layer around it.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating law-firm follow-up after consultations",
  ctaHeading: "Want fewer legal consultations going cold after the meeting?",
  ctaText:
    "Book a 30-minute call. We will look at how your firm currently handles consult outcomes, post-consult follow-up, fee-agreement reminders, and reply routing, then tell you whether this is the cleanest workflow to build next.",
  ctaSubtext:
    "No generic legal-tech pitch. Just a practical recommendation based on where your consult-to-retainer process is actually breaking down.",
  relatedLinks: [
    { label: "AI automation for law firms", href: "/ai-automation-for-law-firms" },
    { label: "What to automate first for law firms", href: "/what-to-automate-first-for-law-firms" },
    { label: "Consultation scheduling and reminder automation for law firms", href: "/consultation-scheduling-and-reminder-automation-for-law-firms" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
