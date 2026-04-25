import {
  Scale,
  MessageSquare,
  Timer,
  ClipboardCheck,
  ArrowUpRight,
  CalendarCheck,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Bot,
  Clock3,
  Phone,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-for-law-firms",
  metaTitle:
    "AI Lead Follow-Up for Law Firms — Faster Inquiry Response Before the Consultation | Dmytro AI",
  metaDescription:
    "AI lead follow-up for law firms. Faster inquiry response, short nurture before the consultation is booked, cleaner intake handoff, and less revenue lost to slow replies or weak first-contact follow-through.",
  badgeText: "Legal Workflow",
  badgeIcon: Scale,
  h1: "AI Lead Follow-Up for Law Firms",
  heroIntro:
    "Many law firms do not lose potential matters because nobody ever calls. They lose them because the inquiry arrives, waits too long, gets one weak reply, or disappears between web forms, directory leads, texts, missed calls, and a busy intake desk. When someone needs a family lawyer, immigration consult, PI intake, or criminal-defense callback, the firm that responds first and follows through usually gets the consultation. AI lead follow-up for law firms fixes that narrower early-funnel workflow. It answers fast, keeps the conversation moving while urgency is still real, captures the next useful intake detail, and hands serious intent back to a human before another matter goes to the office that replied faster.",
  heroSubtext:
    "Below: what this law-firm workflow actually covers, how it stays distinct from the broader legal page plus the intake / scheduling / post-consult / phone pages already live, what guardrails matter, and what proof honestly supports it.",
  sections: [
    {
      type: "cards",
      title: "What law-firm lead follow-up should actually handle",
      subtitle:
        "This page is about the stage after a new inquiry arrives but before the consultation is booked. It is earlier than consultation reminders and lighter than full intake prep or live phone-answering coverage.",
      items: [
        {
          icon: Timer,
          title: "Immediate first response",
          body: "The first reply should go out while the prospective client is still comparing firms, not the next business day when intake finally catches up. That matters for forms, texts, chat, directory leads, and missed-call callbacks alike.",
        },
        {
          icon: MessageSquare,
          title: "Short nurture before the consultation is booked",
          body: "One email or one text is rarely enough. Strong lead follow-up keeps the matter warm over the next few hours and days with useful next steps instead of depending on whoever remembers to reply later.",
        },
        {
          icon: ClipboardCheck,
          title: "Light qualification without pretending to do legal intake",
          body: "The workflow can capture matter type, urgency, callback preference, and whether the person wants a consultation now or simply needs the next step. That gives staff cleaner context without forcing a long scripted intake too early.",
        },
        {
          icon: ArrowUpRight,
          title: "Fast routing back to the right human",
          body: "When someone shows real intent, asks to schedule, or sounds urgent, the right staff member gets the conversation with context attached instead of reconstructing it from scattered messages and callbacks.",
        },
        {
          icon: CalendarCheck,
          title: "Clear handoff into consultation scheduling",
          body: "Lead follow-up should move naturally into the scheduling workflow once intent is real. The goal is not endless messaging. It is getting the right matters to a real consultation faster.",
        },
        {
          icon: BarChart3,
          title: "Visibility into where legal intake is leaking",
          body: "Owners can finally see whether the loss is coming from slow response, weak follow-through, poor channel ownership, or too much intake work sitting on one overloaded receptionist or assistant.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the law-firm cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for law firms",
          values: [
            "Owners evaluating the broader legal operating system across inquiry response, intake prep, consultation scheduling, post-consult follow-up, case updates, and after-hours handling",
            "Explains the whole legal intake-and-operations layer instead of isolating the early-funnel response and nurture workflow",
          ],
        },
        {
          label: "What to automate first for law firms",
          values: [
            "Owners deciding which single workflow deserves to be the first automation project",
            "Helps choose between inquiry response, intake prep, consultation scheduling, post-consult follow-up, and after-hours call handling before a broader rollout",
          ],
        },
        {
          label: "AI lead follow-up for law firms",
          values: [
            "Firms that already know the earliest leak is slow first response or weak follow-through before the consultation exists",
            "Focuses on immediate reply timing, short nurture, light qualification, and intake handoff before the consult is booked",
          ],
        },
        {
          label: "Intake and conflict-check automation for law firms",
          values: [
            "Firms where the consultation is already getting booked but pre-consult detail collection is still messy",
            "Focuses on information gathering, missing-detail reminders, and conflict-check readiness after the prospect is already moving toward the consult",
          ],
        },
        {
          label: "Consultation scheduling and reminder automation for law firms",
          values: [
            "Firms where the bigger leak is still scheduling friction once serious intent already exists",
            "Focuses on confirmations, reminders, reschedules, and no-show protection after contact has already become a real booking conversation",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your law firm?",
      subtitle:
        "Best fit when inquiry volume exists, consultation value is meaningful, and the first few hours after contact still decide who gets the meeting.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are spending on referrals, SEO, ads, directories, or content, but first response is still measured in hours instead of minutes",
            "New inquiries land across forms, calls, texts, and intake inboxes, and ownership gets fuzzy fast",
            "The firm wins more by replying first than by polishing later-stage systems first",
            "Your receptionist, assistant, or intake coordinator is too busy to follow up consistently",
            "A single saved consultation each week could justify the build quickly",
            "You want one bounded workflow that proves value before funding a broader legal-operations layer",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your firm already responds to every inquiry within a few minutes consistently",
            "The bigger leak is no-shows, intake-prep chaos, post-consult conversion, or after-hours call coverage after the contact already exists",
            "Inquiry volume is still too low for a dedicated lead-follow-up workflow to matter yet",
            "Nobody agrees on who owns new inquiries at all, so there is no stable trigger to automate",
            "You want automation giving legal advice or handling nuanced fee and case judgments without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep law-firm lead follow-up trustworthy",
      subtitle:
        "The goal is disciplined speed-to-lead and cleaner intake handoff — not robotic chasing or fake legal certainty.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate on top of chaotic intake ownership",
          body: "If forms, calls, texts, and referrals all land in different places with no clear owner, the workflow cannot rescue everything by itself. The firm still needs one reliable place where a new inquiry becomes real.",
        },
        {
          icon: Bot,
          title: "Keep qualification light",
          body: "The workflow should capture the next useful detail and move the person toward the right human next step. It should not trap a legal prospect inside a long pseudo-intake that feels like advice or a retained-client questionnaire.",
        },
        {
          icon: Phone,
          title: "Escalate real intent quickly",
          body: "If someone wants to schedule now, sounds urgent, or needs a callback from the right person, the conversation should route back to staff fast. Speed matters more than squeezing every exchange through automation.",
        },
        {
          icon: Clock3,
          title: "Separate fresh-lead follow-up from later legal workflows",
          body: "A new inquiry should not get the same cadence as consultation reminders, intake-prep reminders, or post-consult conversion follow-up. Strong systems keep those stages separate so the message still fits the moment.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical law-firm lead-follow-up workflow usually works",
      subtitle:
        "The strongest version is simple: respond fast, keep the matter warm, and hand the conversation off at the right point.",
      blocks: [
        {
          heading: "A new inquiry arrives from any real channel",
          body: "The prospective client fills out a form, replies to an ad, texts the office, calls and misses the receptionist, or comes through a directory lead source. The workflow catches that demand right away instead of waiting for whoever notices first.",
        },
        {
          heading: "The first reply goes out while urgency still feels real",
          body: "That first message acknowledges the request and gives one clear next step: reply with the matter type, request a callback, or move toward scheduling. In legal services, the timing window is short because the person is often contacting multiple firms during the same stressful moment.",
        },
        {
          heading: "Non-responders enter a short follow-up sequence",
          body: "If there is no reply, the system follows up over the next few hours and days with useful reminders instead of disappearing after one touch. This is usually where manual legal intake breaks because live work and urgent calls take over.",
        },
        {
          heading: "Serious replies route back to staff with context attached",
          body: "When the person responds, asks to speak, or wants to schedule, staff inherits the conversation with source, notes, and prior messages attached. That creates a faster live handoff than starting from zero on a callback.",
        },
        {
          heading: "The next workflow takes over once the matter is moving",
          body: "Lead follow-up should end where intake-prep or scheduling logistics begin. Once the firm is collecting conflict-check details or coordinating a consultation, the job has moved into the next workflow stage and should be treated that way.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published law-firm-specific lead-follow-up case study on the site yet. The support comes from the live law-firm cluster, the generic lead-follow-up guide already on the site, and published CRM follow-up proof.",
      studies: [
        {
          industry: "Law-firm parent cluster",
          headline: "The broader law-firm guide already isolates inquiry response as one of the clearest workflow families in the cluster",
          body: "That parent page explicitly frames inquiry response, intake prep, consultation scheduling, post-consult follow-up, case updates, and after-hours handling as separate parts of the legal operating system. This child narrows only the earliest response layer.",
          link: "/ai-automation-for-law-firms",
        },
        {
          industry: "First-project scoping proof",
          headline: "The law-firm first-project page already treats inquiry response as a distinct first automation decision beside intake prep, scheduling, post-consult follow-up, and after-hours calls",
          body: "That makes this child defensible. It is not reopening the whole cluster. It is isolating the early-funnel response and nurture workflow for firms that already know the first leak starts before the consultation exists.",
          link: "/what-to-automate-first-for-law-firms",
        },
        {
          industry: "Generic lead-follow-up proof",
          headline: "The live service-business lead-follow-up guide already proves the broader speed-to-lead and nurture pattern",
          body: "That page explains immediate response, structured follow-up, and clean human handoff across service businesses. This law-firm child keeps those mechanics but grounds them in legal inquiry urgency, intake ownership, and consultation demand.",
          link: "/ai-lead-follow-up-for-service-businesses",
        },
        {
          industry: "Published CRM proof",
          headline: "The e-commerce CRM case study proves why neglected leads and weak ownership quietly destroy recoverable revenue",
          body: "That project is not a law-firm deployment, but it is direct proof that consistent follow-up, routing, and visibility matter once inquiries start piling up. The same operating logic supports legal inquiry response before the consultation is booked.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for law firms", href: "/ai-automation-for-law-firms" },
        { label: "What to automate first for law firms", href: "/what-to-automate-first-for-law-firms" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "Consultation scheduling and reminder automation for law firms", href: "/consultation-scheduling-and-reminder-automation-for-law-firms" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from intake and conflict-check automation for law firms?",
      answer:
        "Lead follow-up covers the stage before the consultation is booked. It focuses on first response, short nurture, light qualification, and routing the right matters back to staff. Intake and conflict-check automation starts later, once the prospect is already moving toward a consultation and the firm needs the right details before that meeting happens.",
    },
    {
      question: "How is this different from consultation scheduling automation for law firms?",
      answer:
        "Lead follow-up is about getting the conversation moving while the inquiry is still fresh. Consultation scheduling automation takes over once the person is already engaged and the main friction is time-slot coordination, confirmations, reminders, and reschedules.",
    },
    {
      question: "What does a focused law-firm lead-follow-up build usually cost?",
      answer:
        "A focused inquiry-response and nurture workflow usually runs about $2K to $4K depending on channel count, routing rules, CRM handoff, and whether forms, calls, texts, and directory leads all need to feed the same intake process.",
    },
    {
      question: "Can AI handle the first response without sounding robotic or risky?",
      answer:
        "Yes, if the workflow stays disciplined. The system should acknowledge the inquiry, capture the next useful detail, and move serious intent to a human quickly. It should not pretend to give legal advice, quote fees, or conduct a full legal intake without staff review.",
    },
    {
      question: "When should a firm start with after-hours phone coverage instead?",
      answer:
        "If the biggest leak is still callers hitting voicemail during court, lunch, or after hours, then live phone coverage may come first. This page is the better fit when the firm mainly loses matters because form, text, and mixed-channel inquiry follow-up is too slow or too inconsistent before the consultation exists.",
    },
  ],
  faqSubtitle:
    "Practical questions about AI lead follow-up for law firms",
  ctaHeading: "Need faster inquiry response before more legal matters go cold?",
  ctaText:
    "Book a 30-minute call. We will look at how your firm handles new inquiries today, where response speed and ownership are breaking down, and whether a focused lead-follow-up workflow is the right next build or whether another legal workflow should come first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about where your legal intake process is leaking now.",
  relatedLinks: [
    { label: "AI automation for law firms", href: "/ai-automation-for-law-firms" },
    { label: "What to automate first for law firms", href: "/what-to-automate-first-for-law-firms" },
    { label: "Intake and conflict-check automation for law firms", href: "/intake-and-conflict-check-automation-for-law-firms" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
