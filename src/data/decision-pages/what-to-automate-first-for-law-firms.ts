import {
  Workflow,
  MessageSquare,
  CalendarCheck,
  FileText,
  Phone,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Clock3,
  Scale,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-law-firms",
  metaTitle:
    "What to Automate First for Law Firms — Choose the Highest-ROI Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in a law firm? Practical guide to choosing between inquiry response, intake prep, consultation scheduling, unretained-lead follow-up, and after-hours call handling before a broader automation build.",
  badgeText: "Legal Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Law Firms",
  heroIntro:
    "If your law firm knows it needs better automation, the first move usually should not be a giant all-in-one operations rebuild. It should be one bounded workflow that fixes the leak already costing you consults, retained matters, or intake capacity. For most small to mid-size firms, that first workflow is one of five things: inquiry response, intake and conflict-check prep, consultation scheduling, follow-up for prospects who consulted but did not retain, or after-hours call handling. The right choice depends on where the firm is losing momentum now — right after the inquiry, before the consult, during scheduling, after the consult, or when nobody can answer the phone.",
  heroSubtext:
    "Below: how to choose the first legal workflow to automate, how this page stays distinct from the broader law-firm automation page and the generic workflow guides already live, what adjacent proof honestly supports the recommendation, and when a smaller first project is safer than forcing a broader intake-and-operations build too early.",
  sections: [
    {
      type: "cards",
      title: "The first law-firm workflows usually worth automating",
      subtitle:
        "Most firms do not need to automate everything at once. They need to start where the intake leak is already expensive:",
      items: [
        {
          icon: MessageSquare,
          title: "Inquiry response",
          body: "Start here when website forms, directory leads, and missed calls still wait hours before anyone replies. This is usually the best first project when speed-to-lead determines whether a prospect books with your firm or the next one.",
        },
        {
          icon: FileText,
          title: "Intake and conflict-check prep",
          body: "Start here when the firm is already getting consults, but basic intake details and conflict-check information still arrive late, incomplete, or through scattered email chains. This is often the best first move when qualified consultations are being slowed by prep work.",
        },
        {
          icon: CalendarCheck,
          title: "Consultation scheduling",
          body: "Start here when prospects show intent but the firm keeps losing momentum during back-and-forth scheduling, reminders, and reschedules. This is the better first build when the leak sits between initial interest and a confirmed consultation.",
        },
        {
          icon: Clock,
          title: "Unretained-consult follow-up",
          body: "Start here when prospects take the consultation, say they will think about it, and then disappear because nobody owns the follow-up sequence. This is often the highest-payoff first move when the firm already has consultation volume but weak conversion discipline after the meeting.",
        },
        {
          icon: Phone,
          title: "After-hours call handling",
          body: "Start here when evenings, weekends, and court-time missed calls matter, but voicemail and next-day callbacks clearly are not enough. This is the right first workflow when demand is already there and the firm simply has no good coverage when staff cannot answer live.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which law-firm workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact point where delay, weak ownership, or inconsistency is already costing consultations or retained matters:",
      options: [
        {
          icon: MessageSquare,
          heading: "Start with inquiry response",
          highlighted: true,
          items: [
            "New inquiries are arriving, but first response still takes hours instead of minutes",
            "You are paying for SEO, referrals, or directory listings that are not getting disciplined first-contact follow-up",
            "The firm wins more by replying first than by polishing later-stage systems first",
            "Closest next page: /ai-lead-follow-up-for-service-businesses",
          ],
        },
        {
          icon: FileText,
          heading: "Start with intake and conflict-check prep",
          items: [
            "Consultations are happening, but missing case details, party names, or intake forms keep slowing the team down",
            "Staff spends too much time chasing the same pre-consult information manually",
            "The biggest gain is a cleaner pre-consult handoff, not more top-of-funnel demand",
            "This is usually the right first workflow when the consult is already scheduled but preparation is messy",
          ],
        },
        {
          icon: CalendarCheck,
          heading: "Start with consultation scheduling",
          items: [
            "Interest is coming in, but too much friction still exists between the inquiry and a confirmed consultation",
            "Back-and-forth scheduling, reminders, and reschedules are clogging paralegal or receptionist time",
            "You need a cleaner scheduling layer before you need a broader intake-and-follow-up system",
            "Closest next page: /booking-confirmation-and-reminder-automation",
          ],
        },
        {
          icon: Clock,
          heading: "Start with unretained-consult follow-up",
          items: [
            "The bigger leak is prospects who already consulted but never get a disciplined follow-up sequence afterward",
            "You already have consultation volume, but conversion depends too much on whether someone remembers to follow up",
            "You want the highest-payoff first project from opportunities already in the pipeline",
            "This is usually better than chasing new demand if consult-to-retainer drop-off is the visible problem",
          ],
        },
        {
          icon: Phone,
          heading: "Start with after-hours call handling",
          items: [
            "Prospective clients call while attorneys are in court, during lunch, or after hours and nobody answers live",
            "Voicemail is not enough because legal demand keeps shopping while it waits for a callback",
            "You already know missed-call recovery matters more than another daytime nurture sequence",
            "Closest next page: /ai-phone-answering-for-service-businesses",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the legal cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for law firms",
          values: [
            "Firm owners deciding which single workflow deserves the first automation project",
            "Helps choose between inquiry response, intake prep, consultation scheduling, post-consult follow-up, and after-hours call handling before a broader rollout",
          ],
        },
        {
          label: "AI automation for law firms",
          values: [
            "Owners evaluating the broader legal intake-and-operations layer",
            "Explains the whole law-firm operating layer across inquiry response, intake, scheduling, follow-up, case updates, and after-hours coverage",
          ],
        },
        {
          label: "AI lead follow-up for service businesses",
          values: [
            "Firms that already know the earliest leak is slow first response",
            "Focuses narrowly on inquiry capture, response speed, message sequencing, and human handoff after the lead arrives",
          ],
        },
        {
          label: "AI phone answering for service businesses",
          values: [
            "Firms that already know the biggest leak is unanswered calls and after-hours demand",
            "Focuses narrowly on live phone coverage, call qualification, routing, and when heavier phone handling beats voicemail and callbacks",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your law firm?",
      subtitle:
        "This page is useful when you know the firm needs better automation, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already see one obvious leak: slow inquiry response, messy intake prep, scheduling friction, weak consult follow-up, or missed after-hours calls",
            "You want one bounded workflow that proves value before funding a broader operations layer",
            "Your intake staff is overloaded and manual follow-up only happens when someone remembers",
            "You care more about faster consult capture and cleaner operations than about flashy AI claims",
            "You want a practical recommendation instead of another vague legal-tech stack pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Lead volume is still too low to create real workflow pressure",
            "The real problem is case strategy, staffing, or business development — not intake follow-through",
            "Nobody agrees on who owns inquiries, intake, scheduling, and follow-up at all",
            "You are trying to force a giant all-in-one rebuild before proving one narrower workflow first",
            "Manual discipline is already strong and there is no visible leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first legal automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost consultations or repeated intake drag.",
      blocks: [
        {
          heading: "Start where delay already costs consults or retained matters",
          body: "If inquiries arrive and nobody replies quickly, inquiry response usually comes first. If consults are booking but prep work is messy, intake automation usually comes first. If the firm loses momentum between interest and a confirmed consultation, scheduling comes first. If the biggest leak is prospects who already consulted but never hear from the firm again, post-consult follow-up may come first. The first project should follow the leak, not whichever workflow sounds the most advanced.",
        },
        {
          heading: "Do not jump to a broad intake rebuild too early",
          body: "A narrower first build gives you faster time to value and fewer places for process problems to hide. Most law firms learn more from one disciplined workflow than from a half-finished all-in-one rollout that tries to touch every inquiry, intake form, scheduling rule, and client update at once.",
        },
        {
          heading: "Fix the earliest expensive leak before you widen the system",
          body: "Post-consult nurture can be a strong first project, but not if new inquiries still wait until the next morning. After-hours coverage matters, but not if the firm is already losing prospects during normal-hours response because nobody owns intake. Start with the stage already losing the most recoverable value.",
        },
        {
          heading: "Let the first workflow shape the next build",
          body: "Once one workflow is running cleanly, you learn where the real handoffs, messaging failures, and ownership gaps actually live. That makes a broader legal-intake automation layer safer because it is grounded in operating evidence instead of assumptions.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first law-firm automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest project instead of the clearest leak",
          body: "Many firms jump straight to a full legal-intake stack when the real issue is still one stage: first response, intake prep, scheduling, consult follow-up, or after-hours coverage. Bigger scope feels strategic, but it usually delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring staff time as a real cost",
          body: "DIY work is not free when a receptionist, intake coordinator, or attorney is spending evenings patching forms, reminder rules, and call-routing logic together after a full day. The first workflow should be scoped against both cash cost and the time drag of getting it wrong.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: unanswered inquiries, incomplete intake forms, unbooked consultations, post-consult drop-off, or after-hours calls that die overnight. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
        {
          icon: Scale,
          title: "Letting automation drift into substantive legal work",
          body: "The first legal workflow should stay on intake, communication, scheduling, and routing — not legal advice or case analysis. That scope discipline keeps the first project safer and easier to evaluate.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published law-firm first-project case study on the site yet, so this page stays grounded in the live law-firm parent page plus published phone-handling and CRM/follow-up proof.",
      studies: [
        {
          industry: "Law-firm cluster",
          headline: "The live law-firm page already isolates the exact workflow families this page is comparing",
          body: "The broader law-firm page already breaks the operating layer into real workflow families: inquiry response, intake automation, consultation scheduling, unretained-lead follow-up, case updates, and after-hours handling. This page sits one level earlier and helps a firm choose which bounded workflow should come first.",
          link: "/ai-automation-for-law-firms",
        },
        {
          industry: "Published phone-handling proof",
          headline: "The restaurant voice-agent case study proves why immediate response matters when nobody can answer after hours",
          body: "That project is not a legal deployment, but it is direct proof that after-hours and unanswered-call coverage change what happens before demand disappears. The same operating principle applies when a prospective client calls while your team is unavailable.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ lead CRM case study proves why structured follow-up matters once opportunities start piling up",
          body: "That e-commerce case study is not a law-firm build, but it is direct proof that weak ownership and inconsistent follow-up destroy recoverable value. The same logic supports legal inquiry response, consult follow-up, and intake discipline.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for law firms", href: "/ai-automation-for-law-firms" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should a law firm usually automate first?",
      answer:
        "Usually the first legal workflow to automate is the one closest to lost consultations: slow inquiry response, messy intake prep, consultation scheduling friction, weak follow-up after the consult, or missed after-hours calls. The right answer depends on where your firm is already losing recoverable matters now.",
    },
    {
      question: "How is this different from the broader law-firm automation page?",
      answer:
        "The broader page explains the full legal intake-and-operations layer. This page sits one step earlier and helps you choose the smallest high-payoff first project before funding a broader build.",
    },
    {
      question: "Should intake prep come before faster lead response?",
      answer:
        "Only if response speed is already strong. If your firm still waits too long to answer new inquiries, faster lead response usually comes first. Intake prep becomes the better first project when consultations are already being booked but the team loses time collecting and organizing the same pre-consult information manually.",
    },
    {
      question: "When should after-hours call handling come first?",
      answer:
        "After-hours phone coverage should usually come first when voicemail and next-day callbacks are clearly not enough and a meaningful share of prospects call when nobody can answer live — evenings, weekends, or while attorneys are in court. If daytime response is already the bigger leak, fix that first.",
    },
    {
      question: "Why does the first workflow choice matter so much?",
      answer:
        "Because the first workflow sets the pace, scope, and ROI expectations for everything that follows. A tight first project proves value faster, exposes process gaps earlier, and makes the broader legal automation layer safer to build later.",
    },
  ],
  faqSubtitle:
    "Practical questions about choosing the first law-firm automation",
  ctaHeading: "Need help choosing the first legal workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your firm is leaking inquiry response, intake prep time, consultation momentum, post-consult follow-up, or after-hours demand now, then recommend the smallest workflow that should come first before anything broader gets built.",
  ctaSubtext:
    "No obligation. No legal-tech buzzword dump. Just a practical conversation about where your intake process is actually leaking revenue.",
  relatedLinks: [
    { label: "AI automation for law firms", href: "/ai-automation-for-law-firms" },
    { label: "AI automation for accounting firms", href: "/ai-automation-for-accounting-firms" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
