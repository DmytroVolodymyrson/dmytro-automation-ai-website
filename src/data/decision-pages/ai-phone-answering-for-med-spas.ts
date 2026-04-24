import {
  Sparkles,
  Phone,
  Clock3,
  CalendarCheck,
  ArrowRightLeft,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  MessageSquare,
  Users,
  Bot,
  ClipboardCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-phone-answering-for-med-spas",
  metaTitle:
    "AI Phone Answering for Med Spas — Live Consultation Call Coverage Without Another Front-Desk Hire | Dmytro AI",
  metaDescription:
    "AI phone answering for med spas. Live call handling, after-hours consultation coverage, routine treatment-question triage, booking support, and when it beats voicemail or next-day callbacks.",
  badgeText: "Med Spa Workflow",
  badgeIcon: Sparkles,
  h1: "AI Phone Answering for Med Spas",
  heroIntro:
    "Some med spas do not mainly have a reminder problem. They have a live phone-coverage problem. A prospective patient calls after work to ask about a consultation, pricing range, or availability. The front desk is gone, the treatment rooms are busy, or nobody wants another voicemail sitting overnight while the lead keeps shopping. AI phone answering for med spas is the heavier phone layer that sits beyond voicemail, delayed callbacks, or a simple confirmation text after the fact. It answers live, handles routine consultation and scheduling questions, captures the next useful detail, and routes higher-context conversations back to a human before after-hours demand turns into another missed opportunity.",
  heroSubtext:
    "Below: what a practical med spa live-answering workflow should actually handle, how it stays distinct from the broader med spa page and the first-project page, what proof honestly supports it, and when live AI phone answering is or is not the right next build.",
  sections: [
    {
      type: "cards",
      title: "What AI phone answering should actually handle in a med spa",
      subtitle:
        "This page only makes sense if it stays focused on live phone coverage — not generic med spa automation and not fake autonomous patient care.",
      items: [
        {
          icon: Phone,
          title: "Answer consultation and treatment-interest calls live when staff cannot",
          body: "The first job is simple: answer the call while the front desk is checking patients in, staff are with clients, or the clinic is closed. That matters because many prospective cosmetic patients are comparing two or three clinics and the first useful answer often wins the consultation.",
        },
        {
          icon: CalendarCheck,
          title: "Handle straightforward consultation and booking questions on the call",
          body: "Hours, treatment categories, whether the clinic is taking new consultations, routine scheduling questions, and simple reschedule requests can often be handled immediately instead of turning into another round of voicemail and delayed callback.",
        },
        {
          icon: ClipboardCheck,
          title: "Capture the next useful patient detail before handoff",
          body: "A strong workflow can collect the caller name, callback number, treatment interest, whether the person is a new or returning patient, basic timing urgency, and preferred consultation window so staff inherit context instead of another vague message.",
        },
        {
          icon: ArrowRightLeft,
          title: "Route higher-context conversations back to a human quickly",
          body: "Financing questions, treatment-fit concerns, contraindication questions, upset callers, package disputes, or anything needing real clinical or commercial judgment should route back to staff fast with the context attached.",
        },
        {
          icon: Clock3,
          title: "Protect after-hours demand without making patients wait until morning",
          body: "If evenings and weekends matter, live AI answering can acknowledge consultation intent, explain the next step, and preserve the opportunity better than a voicemail box that gets checked the next day.",
        },
        {
          icon: Users,
          title: "Reduce front-desk phone pressure while keeping trust intact",
          body: "The real win is responsiveness plus cleaner handoff. Routine calls get handled, easier consultations stay warm, and the front desk only steps in where the conversation actually needs a person.",
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the med spa cluster",
      subtitle:
        "The job boundary has to stay clear or the page collapses into nearby pages already live:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for med spas",
          values: [
            "Owners evaluating the broader patient-communication and booking layer across follow-up, consultation booking, reminders, recall, reviews, and after-hours coverage",
            "Explains the full med spa operating system rather than the narrower live phone-coverage layer",
          ],
        },
        {
          label: "What to automate first for med spas",
          values: [
            "Owners deciding whether the first workflow should be lead follow-up, consultation booking, no-show reduction, treatment recall, or after-hours inquiry handling",
            "Helps choose the first bounded workflow instead of explaining what the heavier live-answering layer should include once the clinic has outgrown voicemail or next-day callbacks",
          ],
        },
        {
          label: "Consultation booking and reminder automation for med spas",
          values: [
            "Clinics where the bigger leak is friction between inquiry and a confirmed consult",
            "Focuses on scheduling, confirmations, reminders, reschedules, and attendance after interest already exists — not on answering the phone live in the first place",
          ],
        },
        {
          label: "AI phone answering for service businesses",
          values: [
            "Businesses comparing the generic live-answering pattern across industries",
            "Explains the broad phone-coverage model without med-spa-specific context like consultation demand, front-desk overload, treatment questions, and after-hours patient shopping behavior",
          ],
        },
        {
          label: "AI phone answering for med spas",
          values: [
            "Clinics where callers often need a real answer now and voicemail or callbacks are no longer enough",
            "Covers live call handling, routine consultation-question handling, after-hours call coverage, and context-rich front-desk handoff inside a med spa workflow",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When live AI phone answering is a good fit — and when it is not",
      subtitle:
        "This is the heavier phone layer. It only makes sense when live answers change outcomes materially.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "The clinic loses meaningful consultation demand because callers still hit voicemail or delayed callbacks during treatment blocks, lunch gaps, or after hours",
            "Many inbound calls are routine enough to handle live without needing clinical judgment immediately",
            "After-hours inquiry volume matters and next-day callback feels too slow for the way patients actually choose a clinic",
            "The front desk is overloaded and needs fewer routine calls landing live at once",
            "You want a bounded phone layer before paying for another full front-desk hire",
            "The team can define clearly what AI should handle versus what must route to a human",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Missed-call volume is modest and a lighter text-back or callback workflow would solve most of the leak",
            "Most calls immediately require nuanced clinical, financing, or package conversations that should stay human",
            "Your bigger problem is still slow first response before scheduling starts or weak recall later in the lifecycle",
            "Nobody has clear rules for who owns scheduling, callbacks, and escalation when something gets messy",
            "Management expects AI to replace practitioners or the front desk end to end",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that make med spa AI phone answering trustworthy",
      subtitle:
        "The strongest live phone workflows are disciplined. The risky ones pretend the system understands more than it should.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not let the system fake clinical certainty",
          body: "It can explain the next step, collect consultation context, and route intelligently. It should not confidently answer treatment-fit, contraindication, medical, or financing questions it is not qualified to settle.",
        },
        {
          icon: MessageSquare,
          title: "Keep the script grounded in how med spa patients actually book",
          body: "Most callers mainly need reassurance that the clinic is responsive and that someone can help them get to the next step. The workflow should move them toward a consult or callback quickly instead of sounding like a generic chatbot trying to do too much.",
        },
        {
          icon: ArrowRightLeft,
          title: "Make escalation rules explicit",
          body: "Treatment suitability, membership disputes, financing objections, upset patients, or anything requiring real staff judgment should route to a human fast. The workflow should know when to transfer, schedule a callback, or stop the automation layer early.",
        },
        {
          icon: Bot,
          title: "Use automation for structure, not fake front-desk theater",
          body: "Automation can answer live, collect the basics, and protect the opportunity. It should not pretend to replace every front-desk conversation or handle every patient edge case without supervision.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical med spa AI phone-answering workflow usually works",
      subtitle:
        "The clean version is straightforward: answer live, handle the routine path cleanly, and move higher-context calls to a human with context attached.",
      blocks: [
        {
          heading: "The caller reaches a live front layer instead of voicemail",
          body: "When the front desk is tied up or the clinic is closed, the call still gets answered. That alone protects consultation demand because the caller does not have to decide whether leaving a voicemail is worth it.",
        },
        {
          heading: "Routine next-step questions get handled during the call",
          body: "Basic consultation questions, availability, whether the clinic takes new patients, and routine scheduling or reschedule requests can often be handled immediately. That is where live answering outperforms both voicemail and a slower next-day callback habit.",
        },
        {
          heading: "The workflow captures context before the human handoff",
          body: "If the call needs staff, the system should pass along the treatment interest, timing, new-versus-returning status, and callback expectations. The front desk inherits a conversation with context instead of another mystery message.",
        },
        {
          heading: "After-hours demand gets contained without overpromising",
          body: "Live AI answering can acknowledge the request, set expectations, and protect the consultation opportunity without pretending a full patient conversation should stay inside automation. That balance is what keeps the workflow credible.",
        },
        {
          heading: "The clinic learns whether live answering is the right long-term phone layer",
          body: "Over time the call pattern shows how many opportunities really needed live answers, where the exceptions cluster, and whether the med spa truly needed live answering or could step back to a lighter phone-recovery layer. That makes the workflow an operations diagnosis tool as well as a phone layer.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake med-spa-only AI phone-answering case study here. The support comes from the live med spa cluster, the generic phone-answering guide, and the published call-handling case study already on the site.",
      studies: [
        {
          industry: "Med spa parent cluster",
          headline: "The broader med spa guide already establishes that after-hours inquiry handling is a real operating leak beside booking, no-shows, and recall",
          body: "That page frames lead follow-up, consultation booking, reminders, recall, reviews, and after-hours handling as one system. This child isolates the heavier live-answering layer for clinics where the phone problem is no longer just a generic callback problem.",
          link: "/ai-automation-for-med-spas",
        },
        {
          industry: "First-project scoping proof",
          headline: "The med spa first-project page already isolates after-hours inquiry handling as a distinct workflow choice beside booking, no-show reduction, and treatment recall",
          body: "That makes this page defensible as a narrower child. It is not reopening the whole cluster. It is isolating the live-phone-coverage layer for clinics that already know after-hours demand and live-answering coverage matter most.",
          link: "/what-to-automate-first-for-med-spas",
        },
        {
          industry: "Generic phone-answering proof",
          headline: "The live AI phone-answering guide already proves the broader call-handling pattern",
          body: "That page explains how live AI call coverage works across service businesses: immediate answer, routine intake, booking support, qualification, and clean human handoff. This med spa page grounds that same pattern in consultation demand, front-desk overload, and after-hours patient shopping behavior.",
          link: "/ai-phone-answering-for-service-businesses",
        },
        {
          industry: "Published call-handling case study",
          headline: "Paris Cafe proves the business value of not letting inbound calls die when nobody can answer live",
          body: "The restaurant case study is not a med spa deployment, but it does prove the commercial value of live call coverage when missed calls matter. This page applies that same inbound-response logic to clinics where unanswered consultation calls often mean lost bookings and wasted marketing spend.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
        { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
        { label: "Consultation booking and reminder automation for med spas", href: "/consultation-booking-and-reminder-automation-for-med-spas" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from a simpler missed-call workflow?",
      answer:
        "A lighter missed-call workflow starts after the clinic already missed the call and usually works best when a fast text or callback is enough. AI phone answering is the heavier layer that answers live on the call, handles more routine questions immediately, and protects more consultation demand when callers expect a real answer now.",
    },
    {
      question: "How is this different from the med spa consultation-booking page?",
      answer:
        "The consultation-booking page focuses on friction after interest already exists: confirmations, reminders, reschedules, and keeping the appointment alive. This page focuses on the live call itself — answering, handling routine questions, and preserving after-hours consultation demand before the booking flow even starts.",
    },
    {
      question: "What does a focused AI phone-answering build usually cost for a med spa?",
      answer:
        "A focused live-answering workflow usually lands around $2K-$5K depending on the voice stack, call-flow depth, booking logic, after-hours rules, and integration needs. It costs more than a lighter text-back workflow because it does more in real time.",
    },
    {
      question: "Can AI phone answering actually book consultations for a med spa?",
      answer:
        "Usually yes for straightforward consultation requests, callback requests, and basic scheduling paths, as long as the booking rules are clean and the clinic knows what can be scheduled automatically versus what should stay staff-led. The stronger pattern is routine consultation capture plus clear human escalation for nuanced cases.",
    },
    {
      question: "Does AI phone answering replace the front desk?",
      answer:
        "No. It reduces routine phone pressure and handles simpler intake. The front desk still owns complex treatment, financing, scheduling, and patient-trust conversations that should not stay inside an automated call path.",
    },
  ],
  faqSubtitle:
    "Straight answers for med spa owners considering live AI phone coverage",
  ctaHeading: "Need to know if your med spa needs live AI phone answering or a lighter fallback?",
  ctaText:
    "Book a 30-minute call. We will look at your current call pattern, how much consultation demand dies in voicemail or callbacks, and whether live AI phone answering is the right next step for your clinic or whether a narrower phone-recovery workflow would be smarter first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about where your phone workflow is leaking consult demand.",
  relatedLinks: [
    { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
    { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
    { label: "Consultation booking and reminder automation for med spas", href: "/consultation-booking-and-reminder-automation-for-med-spas" },
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
