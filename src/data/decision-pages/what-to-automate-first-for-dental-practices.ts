import {
  Workflow,
  MessageSquare,
  CalendarCheck,
  Repeat,
  Clock,
  Phone,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Clock3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-dental-practices",
  metaTitle:
    "What to Automate First for Dental Practices — Choose the Highest-ROI Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in a dental practice? Practical guide to choosing between new-patient follow-up, booking and reminders, recall campaigns, no-show reduction, and after-hours call handling before a broader automation build.",
  badgeText: "Dental Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Dental Practices",
  heroIntro:
    "If your dental practice knows it needs better automation, the safest first move usually is not a giant all-in-one front-desk rebuild. It is one bounded workflow that fixes the leak already costing you bookings, chair utilization, or repeat-patient revenue. For most dental practices, that first workflow is one of five things: new-patient follow-up, appointment booking and reminders, recall and reactivation, no-show reduction, or after-hours call handling. The right choice depends on where the practice is already losing momentum today — right after the inquiry, during scheduling, on the day of the appointment, months after a patient should have come back, or after hours when nobody can answer the phone.",
  heroSubtext:
    "Below: how to choose the first dental workflow to automate, how this page stays distinct from the broader dental page and the generic workflow guides already live, what adjacent proof honestly supports the recommendation, and when you should keep the first project smaller instead of forcing a broader patient-communication build too early.",
  sections: [
    {
      type: "cards",
      title: "The first dental workflows usually worth automating",
      subtitle:
        "Most practices do not need to automate everything at once. They need to start where the leak is already expensive:",
      items: [
        {
          icon: MessageSquare,
          title: "New-patient follow-up",
          body: "Start here when web forms, missed calls, and Google inquiries sit too long before someone replies. This is usually the best first project when speed-to-lead is the main reason a patient books with the office down the street instead.",
        },
        {
          icon: CalendarCheck,
          title: "Booking and reminders",
          body: "Start here when the practice is getting interest, but the front desk still loses momentum in the back-and-forth of booking, confirming, and rescheduling appointments. This is the better first build when the leak sits between inquiry and a confirmed chair-time slot.",
        },
        {
          icon: Repeat,
          title: "Recall and reactivation",
          body: "Start here when the bigger leak is overdue hygiene, exam, or unscheduled-treatment patients who quietly disappear because nobody follows up consistently. This is often the highest-payoff first move when the practice already has a real patient base but weak recall discipline.",
        },
        {
          icon: Clock,
          title: "No-show reduction",
          body: "Start here when patients are already on the calendar but empty chair time keeps hurting production. This is the better first project when reminder timing, confirmation ownership, and easy rescheduling are the obvious operational problems.",
        },
        {
          icon: Phone,
          title: "After-hours call handling",
          body: "Start here when evenings, weekends, and lunch breaks matter, but voicemail and next-day callbacks clearly are not enough. This is the right first workflow when demand is already there and the practice simply has no good coverage when the front desk is busy or gone.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which dental workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact point where delay, weak ownership, or inconsistency is already hurting booked appointments or repeat-patient revenue:",
      options: [
        {
          icon: MessageSquare,
          heading: "Start with new-patient follow-up",
          highlighted: true,
          items: [
            "New patient inquiries are arriving, but first response still takes hours instead of minutes",
            "You are spending on SEO, referrals, or ads that are not getting disciplined first-contact follow-up",
            "The practice wins more by replying first than by polishing later-stage systems first",
            "Closest next page: /ai-lead-follow-up-for-service-businesses",
          ],
        },
        {
          icon: CalendarCheck,
          heading: "Start with booking and reminders",
          items: [
            "Interest is coming in, but too much friction still exists between inquiry and a confirmed appointment",
            "The front desk is losing momentum during time-slot coordination, confirmations, or reschedules",
            "You need a cleaner scheduling layer before you need a broader patient-communication system",
            "Closest next page: /booking-confirmation-and-reminder-automation",
          ],
        },
        {
          icon: Repeat,
          heading: "Start with recall and reactivation",
          items: [
            "The bigger leak is overdue hygiene, exam, or unscheduled-treatment patients who never get pulled back in",
            "The practice already has enough patient history to justify a retention-first workflow",
            "You want the highest-payoff first project from the patients you already know instead of more top-of-funnel demand",
            "Closest next page: /client-reactivation-automation",
          ],
        },
        {
          icon: Clock,
          heading: "Start with no-show reduction",
          items: [
            "Patients already get booked, but empty chair time and late cancellations still hurt production",
            "Reminder timing is inconsistent and confirmation discipline depends too much on memory",
            "One saved appointment block per week would justify the build quickly",
            "Closest next page: /no-show-reduction-automation",
          ],
        },
        {
          icon: Phone,
          heading: "Start with after-hours call handling",
          items: [
            "Prospective patients call when the front desk is busy, at lunch, or after hours and nobody answers live",
            "Voicemail is not enough because new-patient demand keeps shopping while it waits for a callback",
            "You already know missed-call recovery matters more than another daytime nurture sequence",
            "Closest next page: /ai-phone-answering-for-service-businesses",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the dental cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for dental practices",
          values: [
            "Owners deciding which single workflow deserves the first automation project",
            "Helps choose between new-patient follow-up, booking and reminders, recall/reactivation, no-show reduction, and after-hours call handling before a broader rollout",
          ],
        },
        {
          label: "AI automation for dental practices",
          values: [
            "Owners evaluating the broader patient-communication and front-desk system",
            "Explains the whole dental operating layer across inquiries, booking, reminders, recall, reviews, and after-hours coverage",
          ],
        },
        {
          label: "Booking confirmation and reminder automation",
          values: [
            "Practices that already know the main leak is confirmations, reminders, and reschedules",
            "Focuses narrowly on booked-appointment attendance protection after the appointment is already real",
          ],
        },
        {
          label: "AI lead follow-up for service businesses",
          values: [
            "Practices that already know the earliest leak is slow first response",
            "Focuses narrowly on inquiry capture, response speed, message sequencing, and human handoff after the lead arrives",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your dental practice?",
      subtitle:
        "This page is useful when you know the practice needs better automation, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already see one obvious leak: slow inquiry response, booking friction, weak recall discipline, empty chair time, or missed after-hours calls",
            "You want one bounded workflow that proves value before funding a broader automation layer",
            "Your front desk is overloaded and manual follow-up only happens when someone remembers",
            "You care more about recovered appointments and cleaner operations than about flashy tooling",
            "You want a practical recommendation instead of another vague software-stack pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Lead volume is still very low and there is not enough workflow pressure yet",
            "The real problem is provider capacity, patient experience, or clinical operations — not communication follow-through",
            "Nobody agrees on who owns inquiries, scheduling, reminders, and recall at all",
            "You are looking for a giant all-in-one rebuild before proving one narrower workflow first",
            "Manual discipline is already strong and there is no visible leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first dental automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost appointments or repeated front-desk drag.",
      blocks: [
        {
          heading: "Start where delay already costs bookings or repeat-patient revenue",
          body: "If new patient inquiries arrive and nobody replies quickly, lead follow-up usually comes first. If people show intent but the practice loses momentum during scheduling, booking flow comes first. If patients are already booking but empty chair time keeps showing up, no-show reduction comes first. If the bigger leak is overdue recall patients, reactivation may come first. The first project should follow the leak, not whichever automation sounds the most advanced.",
        },
        {
          heading: "Do not jump to a broad front-desk rebuild too early",
          body: "A narrower first build gives you faster time to value and fewer places for process problems to hide. Most dental practices learn more from one disciplined workflow than from a half-finished all-in-one rollout that tries to touch every inquiry, reminder, review request, and recall sequence at once.",
        },
        {
          heading: "Fix the earliest expensive leak before you widen the system",
          body: "Recall campaigns can be a strong first project, but not if new patient inquiries are still waiting until the next morning or booking still feels messy. Likewise, after-hours call handling matters, but not if the bigger leak is simply weak reminder discipline during normal hours. Start with the stage already losing the most recoverable value.",
        },
        {
          heading: "Let the first workflow shape the next build",
          body: "Once one workflow is running cleanly, you learn where the real handoffs, message failures, and ownership gaps actually live. That makes the broader dental automation layer safer because it is grounded in operating evidence instead of assumptions.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first dental automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest project instead of the clearest leak",
          body: "Many practices jump straight to a full front-desk automation stack when the real issue is still one stage: first response, booking friction, recall discipline, no-show reduction, or after-hours coverage. Bigger scope feels strategic, but it usually delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring front-desk time as a real cost",
          body: "DIY work is not free when the office manager or owner spends evenings patching reminder logic, recall lists, and callback rules together after a full day. The first workflow should be scoped against both cash cost and the time drag of getting it wrong.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: unanswered new-patient inquiries, unconfirmed appointments, overdue recall patients, or after-hours calls that die overnight. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published dental first-project case study on the site yet, so the page stays grounded in the live dental parent page plus published phone-handling and CRM/follow-up proof.",
      studies: [
        {
          industry: "Dental cluster",
          headline: "The live dental page already isolates the exact workflow families this page is comparing",
          body: "The broader dental page already breaks the operating layer into real workflow families: new-patient inquiry response, booking and confirmations, recall/reactivation, no-show follow-up, review requests, and after-hours handling. This page sits one level earlier and helps an owner choose which bounded workflow should come first.",
          link: "/ai-automation-for-dental-practices",
        },
        {
          industry: "Published phone-handling proof",
          headline: "The restaurant voice-agent case study proves why immediate response matters when nobody can answer after hours",
          body: "That project is not a dental deployment, but it is direct proof that after-hours and unanswered-call coverage change what happens before demand disappears. The same operating principle applies when a prospective patient calls while the front desk is busy or already gone for the day.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ lead CRM case study proves why structured follow-up and reactivation matter once contacts start piling up",
          body: "That e-commerce case study is not a dental build, but it is direct proof that weak ownership and inconsistent follow-up destroy recoverable value. The same logic supports dental recall, first response, and no-show recovery.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for dental practices", href: "/ai-automation-for-dental-practices" },
        { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
        { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should a dental practice automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: new-patient follow-up if inquiries sit too long before a reply, booking and reminders if scheduling friction is killing momentum, recall/reactivation if overdue patients keep slipping away, no-show reduction if empty chair time is the main problem, or after-hours call handling if demand arrives when nobody can answer.",
    },
    {
      question: "How is this different from the broader dental automation page?",
      answer:
        "The broader dental page explains the whole operating layer across inquiries, booking, reminders, recall, reviews, and after-hours handling. This page sits one step earlier and helps you decide which single workflow should be the first bounded project before you pay for anything broader.",
    },
    {
      question: "Should a dental practice start with recall or new-patient follow-up?",
      answer:
        "Start with new-patient follow-up if fresh inquiries are arriving but speed-to-lead is weak enough that patients book elsewhere before your team replies. Start with recall if new demand is already handled reasonably well and the bigger leak is overdue hygiene, exam, or unscheduled-treatment patients who never come back because nobody follows up consistently.",
    },
    {
      question: "When should no-show reduction come before booking improvements?",
      answer:
        "Only when the practice already gets patients onto the calendar reliably and the bigger problem is empty chair time after the booking exists. If the main friction is still back-and-forth scheduling and confirmation ownership, start with booking and reminders before you widen into a more attendance-specific workflow.",
    },
    {
      question: "Why does the first workflow choice matter so much for ROI?",
      answer:
        "Because the first workflow shapes how fast you see a measurable result. A bounded project tied to the clearest leak — lost new-patient inquiries, weak booking momentum, overdue recall patients, empty chair time, or missed after-hours demand — pays back faster and teaches you more than a broader system built before the practice knows where the real friction lives.",
    },
  ],
  faqSubtitle:
    "Practical questions about choosing the first dental automation",
  ctaHeading: "Need help choosing the first dental workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your practice is leaking new-patient inquiries, booking momentum, recall revenue, chair-time utilization, or after-hours demand now, then recommend whether the first move should be follow-up, reminders, recall, no-show protection, or phone coverage before anything broader gets built.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical recommendation based on where the practice is already losing momentum.",
  relatedLinks: [
    { label: "AI automation for dental practices", href: "/ai-automation-for-dental-practices" },
    { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
    { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
