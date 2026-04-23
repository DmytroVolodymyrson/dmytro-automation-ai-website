import {
  Scale,
  Home,
  MessageSquare,
  Phone,
  Voicemail,
  CloudRain,
  Clock3,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ClipboardCheck,
  Route,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-vs-ai-phone-answering-for-roofing-companies",
  metaTitle:
    "Missed Call Text-Back vs. AI Phone Answering for Roofing Companies | Dmytro AI",
  metaDescription:
    "Should a roofing company use missed-call text-back or AI phone answering? Practical comparison of storm-season demand recovery, caller expectations, estimator workload, after-hours coverage, and cost.",
  badgeText: "Roofing Comparison",
  badgeIcon: Scale,
  h1: "Missed Call Text-Back vs. AI Phone Answering for Roofing Companies",
  heroIntro:
    "If your roofing company is losing calls, the real decision is not whether automation sounds impressive. It is whether a lighter missed-call text-back workflow is enough or whether you need live AI phone answering. Text-back is the narrower fallback: the call is missed, a useful SMS goes out immediately, and easier inspection or callback intent gets recovered before the homeowner calls the next roofer. AI phone answering is the heavier option: the call gets answered live, routine next-step questions get handled on the spot, and straightforward inspection or callback intake can start right away instead of waiting for a text thread later. The right choice depends on storm-driven call spikes, after-hours demand, office and estimator workload, and how often callers actually need a real answer now instead of a fast acknowledgement.",
  heroSubtext:
    "Below: where each option fits for roofing companies, where roofers overbuild, where they underbuild, and what the existing roofing plus phone-recovery proof honestly supports.",
  sections: [
    {
      type: "cards",
      title: "What each option is really trying to solve",
      subtitle:
        "These are different answers to different roofing phone problems:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call text-back",
          body: "Best when the main problem is unanswered calls and a meaningful share of those callers only need a fast next step, an inspection callback, or a simple path to keep the conversation alive while the office catches up.",
        },
        {
          icon: Phone,
          title: "AI phone answering",
          body: "Best when callers need real answers right away, routine intake should happen live, or after-hours and storm-spike phone demand is too valuable to leave to voicemail and callbacks.",
        },
        {
          icon: Voicemail,
          title: "Voicemail and manual callback",
          body: "Still common in roofing, but usually the weakest option when urgency is high. Response slows down, homeowners call the next contractor, and callback lists turn into lost inspections and lost revenue.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison for roofing companies",
      subtitle:
        "The choice usually comes down to urgency, call complexity, and how much live phone coverage the company actually needs:",
      headers: ["Missed-Call Text-Back", "AI Phone Answering", "Voicemail"],
      rows: [
        {
          label: "First response",
          values: [
            "SMS within seconds after the missed call",
            "Answers live on the call",
            "No response unless the caller leaves a message",
          ],
        },
        {
          label: "Best for",
          values: [
            "Simple callback recovery, inspection intent, after-hours demand protection",
            "Live call handling, routine intake, and higher-value after-hours coverage",
            "Very low call volume only",
          ],
        },
        {
          label: "Caller experience",
          values: [
            "Fast and practical when a text is enough to keep the job alive",
            "Strongest when the homeowner expects a real answer immediately",
            "Usually the most frustrating option when a leak or storm issue feels urgent",
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
            "Higher — voice stack, live-call logic, escalation rules, testing",
            "Cheap to keep, expensive in missed jobs",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When callers need live answers or the team ignores SMS replies",
            "When the company expects AI to handle complex insurance or scope conversations end to end",
            "When missed calls are frequent and callbacks are slow",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Use the smallest phone-recovery layer that actually protects roofing demand:",
      options: [
        {
          icon: MessageSquare,
          heading: "Choose missed-call text-back when...",
          highlighted: true,
          items: [
            "The core problem is missed calls, not constant complex live phone volume",
            "A meaningful share of callers mainly need acknowledgement, a callback, or a simple next step toward an inspection",
            "You want a cheaper first fix before committing to live AI answering",
            "The office or estimator can step in once the workflow captures the basics",
            "After-hours demand matters, but not every caller needs a live conversation immediately",
          ],
        },
        {
          icon: Phone,
          heading: "Choose AI phone answering when...",
          highlighted: false,
          items: [
            "Routine callers need live answers about inspections, timing, service area, or next steps right away",
            "You want straightforward intake to happen during the call itself",
            "Storm-driven or after-hours call volume is high enough that a fallback text is not enough anymore",
            "The company loses too much from calls dying before morning",
            "You need to reduce office phone pressure without adding another full shift of payroll",
          ],
        },
        {
          icon: Voicemail,
          heading: "Keep voicemail only when...",
          highlighted: false,
          items: [
            "Call volume is genuinely light",
            "Someone consistently returns missed calls fast",
            "Homeowners usually tolerate waiting for a callback",
            "Phone handling is not materially affecting inspection bookings or close rate",
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
            "Many callers are inspection requests, leak concerns, scheduling questions, or callback requests rather than long live conversations",
            "Budget is tighter and you want to prove the phone-recovery layer before expanding it",
            "The team can reliably close message threads once the workflow captures the basics",
            "You want to stop losing easy wins without rebuilding the whole phone operation",
          ],
        },
        {
          icon: XCircle,
          heading: "Text-back is the wrong answer if...",
          variant: "neutral",
          items: [
            "Callers regularly need live answers before they will trust the next step",
            "The office is already overloaded enough that SMS replies will still pile up",
            "The company really needs after-hours call handling more than simple missed-call recovery",
            "Management expects an SMS workflow to replace estimators or office coordinators end to end",
            "You already know live phone coverage is the bottleneck, not missed-call acknowledgement",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The mistakes roofing companies make when choosing",
      subtitle:
        "Most bad outcomes come from choosing the wrong level of automation for the real phone problem:",
      items: [
        {
          icon: DollarSign,
          title: "Overbuilding too early",
          body: "If the real issue is a manageable number of missed calls and simple inspection recovery, a focused text-back workflow may be the better first step than jumping straight into live AI answering.",
        },
        {
          icon: AlertTriangle,
          title: "Underbuilding when urgency is high",
          body: "If callers regularly need live answers about active leaks, storm timing, or next steps right away, text-back may just delay the loss instead of preventing it. That is where AI phone answering starts to earn its keep.",
        },
        {
          icon: ClipboardCheck,
          title: "Ignoring office and estimator ownership",
          body: "Neither option works if nobody owns the follow-through. Text-back needs someone closing SMS threads. AI phone answering needs clear escalation rules and a clean place for call context to land.",
        },
        {
          icon: Clock3,
          title: "Forgetting storm-season economics",
          body: "If the company gets meaningful call spikes after storms or during busy weather windows, the decision tilts toward stronger live coverage faster. The more valuable those callers are, the less margin you have for delayed recovery.",
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose without overcomplicating it",
      subtitle:
        "Ask what the homeowner actually needs in that first interaction.",
      blocks: [
        {
          heading: "If a fast acknowledgement is enough, start with text-back",
          body: "When the missed call can be recovered by an immediate SMS, a callback prompt, or a simple inspection path, text-back is often the narrowest useful fix. It keeps roofing demand alive without forcing the company into a bigger phone build too early.",
        },
        {
          heading: "If the caller expects help now, move toward live answering",
          body: "When the company wins by answering during the call — handling common questions, clarifying next steps, logging basic intake, or protecting after-hours demand — AI phone answering becomes the stronger commercial answer.",
        },
        {
          heading: "Use the smallest system that protects booked inspections and revenue",
          body: "The right choice is rarely the most impressive stack. It is the one that matches your call pattern, office workload, and homeowner expectations without creating a second inbox mess.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this comparison",
      subtitle:
        "There is no published roofing-only comparison case study yet. The honest proof frame is the existing roofing cluster plus the broader phone-answering guide and the live restaurant phone case study already on the site:",
      studies: [
        {
          industry: "Roofing workflow proof",
          headline: "The live roofing parent and missed-call child already define the SMS-first side of the decision",
          body: "Those pages already show where roofers lose calls, how missed-call text-back fits, and why a lighter recovery layer can be enough when the main problem is unanswered demand rather than total lack of phone coverage.",
          link: "/missed-call-text-back-for-roofing-companies",
        },
        {
          industry: "Live phone coverage proof",
          headline: "The generic AI phone-answering guide shows when live answered coverage is the stronger fit",
          body: "That page explains where live AI call handling wins: immediate answer, routine next-step handling, call qualification, booking support, and coverage when a team cannot keep up with the line. This page narrows that broader decision to roofing realities.",
          link: "/ai-phone-answering-for-service-businesses",
        },
        {
          industry: "Adjacent case-study proof",
          headline: "Paris Cafe proves the value of not letting after-hours inbound demand die",
          body: "The restaurant case study is not a roofing deployment, but it does prove the economics of live phone coverage when missed calls matter. This comparison applies the same operating choice to roofing companies: lighter SMS fallback versus live call handling.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "Missed call text-back for roofing companies", href: "/missed-call-text-back-for-roofing-companies" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "AI automation for roofing companies", href: "/ai-automation-for-roofing-companies" },
        { label: "Estimate follow-up automation for roofing companies", href: "/estimate-follow-up-automation-for-roofing-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is missed-call text-back cheaper than AI phone answering for a roofing company?",
      answer:
        "Yes. A focused text-back workflow is usually the cheaper first layer because it mainly needs missed-call detection, SMS, routing, and handoff logic. AI phone answering adds live voice handling, testing, escalation rules, and more operational setup. The real question is whether the cheaper option protects enough roofing demand.",
    },
    {
      question: "When should a roofing company skip text-back and go straight to AI phone answering?",
      answer:
        "When callers regularly need live answers, storm-driven or after-hours call volume is high, callback delays are clearly costing the company too much, or the office needs more real-time coverage than an SMS fallback can provide. If the business wins by answering now, live AI phone coverage usually has the stronger case.",
    },
    {
      question: "Will homeowners actually reply to a missed-call text from a roofing company?",
      answer:
        "Often yes for inspection requests, callback requests, simple leak concerns, and basic scheduling intent. But if your callers usually need a live conversation before they trust the next step, that is a sign the company may need live answering instead of SMS-first recovery.",
    },
    {
      question: "Does AI phone answering replace the estimator or office coordinator?",
      answer:
        "No. It should remove repetitive phone pressure, handle routine questions, and capture straightforward intake. Insurance confusion, complex scope discussions, upset homeowners, and high-context sales conversations still belong with a human.",
    },
    {
      question: "What is the safest way to choose between them?",
      answer:
        "Look at actual missed-call volume, how many callers could be recovered by text, how often callers need live answers, and what one saved roofing job is worth. If simple SMS recovery covers most cases, start there. If live phone handling is the real bottleneck, invest in AI phone answering.",
    },
  ],
  faqSubtitle:
    "Straight answers for roofers deciding between SMS-first recovery and live AI phone coverage",
  ctaHeading: "Need help choosing the right phone-recovery layer for your roofing company?",
  ctaText:
    "Book a 30-minute call. We will look at your missed-call pattern, where roofing demand is leaking, and whether a focused text-back workflow or live AI phone answering is the better first move for your company.",
  ctaSubtext:
    "No roofing tech theater. Just a practical recommendation based on storm-season demand, office workload, and what your callers actually need.",
  relatedLinks: [
    { label: "Missed call text-back for roofing companies", href: "/missed-call-text-back-for-roofing-companies" },
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "AI automation for roofing companies", href: "/ai-automation-for-roofing-companies" },
    { label: "Estimate follow-up automation for roofing companies", href: "/estimate-follow-up-automation-for-roofing-companies" },
  ],
};

export default data;
