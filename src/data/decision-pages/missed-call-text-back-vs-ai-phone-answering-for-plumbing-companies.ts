import {
  Scale,
  MessageSquare,
  Phone,
  Voicemail,
  Clock3,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Users,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-vs-ai-phone-answering-for-plumbing-companies",
  metaTitle:
    "Missed Call Text-Back vs. AI Phone Answering for Plumbing Companies | Dmytro AI",
  metaDescription:
    "Should a plumbing company use missed-call text-back or live AI phone answering? Practical comparison of caller urgency, after-hours plumbing demand, office workload, and when the heavier live-answering build is worth it.",
  badgeText: "Plumbing Comparison",
  badgeIcon: Scale,
  h1: "Missed Call Text-Back vs. AI Phone Answering for Plumbing Companies",
  heroIntro:
    "If your plumbing company is losing inbound calls, the real decision is not whether automation sounds advanced. It is whether a lighter missed-call text-back workflow is enough or whether you need live AI phone answering. Missed-call text-back is the narrower layer: the call is missed, a useful SMS goes out immediately, and simpler service intent gets recovered before the homeowner calls the next plumber. AI phone answering is the heavier layer: the call gets answered live, routine plumbing-call intake can happen in the moment, and straightforward next steps get handled before the dispatcher or office has to chase the callback later. The right choice depends on urgency, after-hours demand, office capacity, how often callers really need a live answer now, and whether the company can safely hand higher-judgment plumbing conversations back to a human.",
  heroSubtext:
    "Below: where each option fits, where plumbing companies overbuild, where they underbuild, and what the live plumbing cluster plus adjacent phone-handling proof honestly supports.",
  sections: [
    {
      type: "cards",
      title: "What each option is really trying to solve",
      subtitle:
        "These are different answers to different phone problems inside a plumbing company:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call text-back",
          body: "Best when the main problem is unanswered calls and a meaningful share of those callers only need a fast acknowledgement, a callback, or a simple next step. It protects plumbing demand after the miss without pretending every caller needs a live conversation.",
        },
        {
          icon: Phone,
          title: "AI phone answering",
          body: "Best when callers need real answers right away, routine service-call intake should happen live, or after-hours plumbing demand is too valuable to leave to voicemail and next-day callbacks.",
        },
        {
          icon: Voicemail,
          title: "Voicemail and manual callback",
          body: "Still common, but usually the weakest option when the office is overloaded. Response is slower, callers keep shopping, and the callback queue quietly turns into lost same-day plumbing work.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison for plumbing companies",
      subtitle:
        "The choice usually comes down to urgency, call complexity, and how much live intake your office actually needs:",
      headers: ["Missed-Call Text-Back", "AI Phone Answering", "Voicemail"],
      rows: [
        {
          label: "First response",
          values: [
            "SMS within seconds after the miss",
            "Answers live on the call",
            "No response unless the caller leaves a message",
          ],
        },
        {
          label: "Best for",
          values: [
            "Simple callback recovery, lighter after-hours demand protection, and straightforward service intent",
            "Routine plumbing-call intake, common questions, and live phone coverage during busy periods or after hours",
            "Very low call volume only",
          ],
        },
        {
          label: "Caller experience",
          values: [
            "Fast and practical when texting feels acceptable",
            "Strongest when callers expect a live answer now",
            "Usually the most frustrating option when urgency is high",
          ],
        },
        {
          label: "Office workload",
          values: [
            "Cuts voicemail lag but still needs someone to close the loop",
            "Removes more live phone pressure by handling routine calls up front",
            "Creates the heaviest callback burden",
          ],
        },
        {
          label: "Implementation cost",
          values: [
            "Lower — focused SMS and routing workflow",
            "Higher — voice stack, call logic, testing, escalation rules",
            "Cheap to keep, expensive in missed jobs",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When callers need live answers, urgent triage, or the team ignores SMS replies",
            "When the company expects AI to handle every nuanced plumbing conversation end to end",
            "When missed calls are frequent and callbacks are slow",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Use the smallest phone-recovery layer that protects real plumbing demand:",
      options: [
        {
          icon: MessageSquare,
          heading: "Choose missed-call text-back when...",
          highlighted: true,
          items: [
            "The core problem is missed calls, not constant complex live phone volume",
            "A meaningful share of missed callers mainly need a quick reply, callback, or simple next step",
            "You want a cheaper first fix before committing to live AI answering",
            "The office can step in once the workflow captures the basics",
            "After-hours demand matters, but not every caller needs a live conversation immediately",
          ],
        },
        {
          icon: Phone,
          heading: "Choose AI phone answering when...",
          highlighted: false,
          items: [
            "Routine callers need live answers about service timing, next steps, or common plumbing issues right away",
            "You want straightforward intake to happen during the call itself",
            "Missed-call volume is high enough that a fallback text is not enough anymore",
            "The company loses too much from after-hours calls dying before morning",
            "You need to reduce office phone pressure without adding another full office shift",
          ],
        },
        {
          icon: Voicemail,
          heading: "Keep voicemail only when...",
          highlighted: false,
          items: [
            "Call volume is genuinely light",
            "A real person consistently returns missed calls fast",
            "Your callers usually tolerate waiting for a callback",
            "Phone handling is not materially affecting booked work or lost estimates",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit and bad fit signals",
      subtitle:
        "The safest choice comes from the actual call pattern, not from whichever demo sounds more advanced:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Text-back is often the better first move",
          variant: "green",
          items: [
            "The company mainly needs faster acknowledgement after a missed call",
            "A lot of callers are asking about availability, callback timing, or a straightforward service next step rather than needing deep live troubleshooting",
            "Budget is tighter and you want to prove the phone-recovery layer before expanding it",
            "The team can reliably close message threads once the basics are captured",
            "You want to stop losing easier wins without rebuilding the whole phone layer",
          ],
        },
        {
          icon: XCircle,
          heading: "Text-back is the wrong answer if...",
          variant: "neutral",
          items: [
            "Callers regularly need live answers before they will book or trust the next step",
            "The office is already overloaded enough that SMS replies will still pile up",
            "Your company needs after-hours call handling more than simple missed-call recovery",
            "Management expects an SMS workflow to replace all plumbing intake conversations",
            "You already know live phone coverage is the bottleneck, not missed-call acknowledgement",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The mistakes plumbing companies make when choosing",
      subtitle:
        "Most bad outcomes come from choosing the wrong level of automation for the real phone problem:",
      items: [
        {
          icon: DollarSign,
          title: "Overbuilding too early",
          body: "If the real issue is a manageable number of missed calls and simpler callback recovery, a focused text-back workflow is often the better first step than jumping straight into live AI answering.",
        },
        {
          icon: AlertTriangle,
          title: "Underbuilding when live answers matter",
          body: "If callers frequently need live timing, service, or next-step answers, text-back may just delay the loss instead of preventing it. That is where AI phone answering starts to earn its keep.",
        },
        {
          icon: Users,
          title: "Ignoring office ownership",
          body: "Neither option works if nobody owns the follow-through. Text-back needs someone closing SMS threads. AI phone answering needs clear escalation rules and a clean place for call context to land.",
        },
        {
          icon: Clock3,
          title: "Forgetting after-hours economics",
          body: "If the company gets meaningful evening or weekend demand, the decision tilts toward live answering faster. The more valuable those callers are, the less room you have for delayed recovery.",
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose without overcomplicating it",
      subtitle:
        "Ask what the caller actually needs in that first interaction.",
      blocks: [
        {
          heading: "If a fast acknowledgement is enough, start with text-back",
          body: "When the missed call can be recovered by an immediate SMS, a callback prompt, or a simple next step, text-back is often the narrowest useful fix. It keeps plumbing demand alive without forcing the office into a bigger phone build too early.",
        },
        {
          heading: "If the caller expects help now, move toward live answering",
          body: "When the company wins by answering during the call — handling common service questions, confirming next steps, logging basic intake, or protecting after-hours demand — AI phone answering becomes the stronger commercial answer.",
        },
        {
          heading: "Use the smallest system that protects booked work and revenue",
          body: "The right choice is rarely the most impressive stack. It is the one that matches your call pattern, office workload, and customer expectations without creating a second inbox mess.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this comparison",
      subtitle:
        "There is no published plumbing-only comparison case study yet. The honest proof frame is the live plumbing cluster plus the broader phone-answering guide and adjacent call-handling proof already live on the site:",
      studies: [
        {
          industry: "Plumbing workflow proof",
          headline: "The live plumbing missed-call page already defines where the SMS-first side of the decision works",
          body: "That page shows where plumbing companies lose calls, how missed-call text-back fits, and why a lighter recovery layer can be enough when the main problem is unanswered demand rather than total lack of phone coverage.",
          link: "/missed-call-text-back-for-plumbing-companies",
        },
        {
          industry: "Live phone coverage proof",
          headline: "The plumbing AI phone-answering page already isolates when live answered coverage becomes the stronger fit",
          body: "That page explains where live AI call handling wins for plumbing companies: routine intake, immediate answers, overflow protection, and after-hours coverage when the office cannot keep up with the line.",
          link: "/ai-phone-answering-for-plumbing-companies",
        },
        {
          industry: "Adjacent case-study proof",
          headline: "Paris Cafe proves the value of not letting after-hours inbound demand die when no one answers live",
          body: "The restaurant case study is not a plumbing deployment, but it does prove the economics of live phone coverage when missed calls matter. This comparison applies the same operating choice to plumbing companies: lighter SMS fallback versus live call handling.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "Missed call text-back for plumbing companies", href: "/missed-call-text-back-for-plumbing-companies" },
        { label: "AI phone answering for plumbing companies", href: "/ai-phone-answering-for-plumbing-companies" },
        { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is missed-call text-back cheaper than AI phone answering for a plumbing company?",
      answer:
        "Yes. A focused text-back workflow is usually the cheaper first layer because it mainly needs missed-call detection, SMS, routing, and handoff logic. AI phone answering adds live voice handling, testing, prompt design, and escalation rules. The real question is whether the cheaper option protects enough plumbing demand.",
    },
    {
      question: "When should a plumbing company skip text-back and go straight to AI phone answering?",
      answer:
        "When callers regularly need live answers, missed-call volume is high, after-hours demand matters, or callback delays are clearly costing the company too much. If the business wins by answering now, live AI phone coverage usually has the stronger case.",
    },
    {
      question: "Will homeowners actually reply to a missed-call text from a plumbing company?",
      answer:
        "Often yes for callback requests, straightforward service intent, and basic next-step questions. But if your callers usually need live triage, emergency reassurance, or a more immediate answer before they trust the next step, that is a sign the company may need live answering instead of SMS-first recovery.",
    },
    {
      question: "Does AI phone answering replace the dispatcher or office manager?",
      answer:
        "No. It should remove repetitive phone pressure, answer routine questions, and capture straightforward intake. Emergency judgment, complex dispatch, upset callers, and sensitive pricing conversations still belong with a human.",
    },
    {
      question: "What is the safest way to choose between them?",
      answer:
        "Look at actual missed-call volume, how many callers could be recovered by text, how often callers need live answers, and what one recovered plumbing job is worth. If simple SMS recovery covers most cases, start there. If live phone handling is the real bottleneck, invest in AI phone answering.",
    },
  ],
  faqSubtitle:
    "Straight answers for plumbing owners deciding between SMS-first recovery and live AI phone coverage",
  ctaHeading: "Need help choosing the right phone-recovery layer for your plumbing company?",
  ctaText:
    "Book a 30-minute call. We will look at your missed-call pattern, where plumbing demand is leaking, and whether a focused text-back workflow or live AI phone answering is the better first move for your company.",
  ctaSubtext:
    "No plumbing tech theater. Just a practical decision based on call flow, office workload, and what your callers actually need.",
  relatedLinks: [
    { label: "Missed call text-back for plumbing companies", href: "/missed-call-text-back-for-plumbing-companies" },
    { label: "AI phone answering for plumbing companies", href: "/ai-phone-answering-for-plumbing-companies" },
    { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
    { label: "Appointment scheduling and reminder automation for plumbing companies", href: "/appointment-scheduling-and-reminder-automation-for-plumbing-companies" },
  ],
};

export default data;
