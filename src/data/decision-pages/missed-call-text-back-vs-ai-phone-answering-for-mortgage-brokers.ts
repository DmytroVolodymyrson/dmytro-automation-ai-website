import {
  Landmark,
  MessageSquare,
  Bot,
  Phone,
  Voicemail,
  Clock3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ClipboardCheck,
  DollarSign,
  ArrowRightLeft,
  Scale,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-vs-ai-phone-answering-for-mortgage-brokers",
  metaTitle:
    "Missed-Call Text-Back vs. AI Phone Answering for Mortgage Brokers | Dmytro AI",
  metaDescription:
    "Should a mortgage brokerage use missed-call text-back or live AI phone answering? Practical comparison of borrower urgency, consultation blocks, after-hours demand, and when the heavier phone layer is actually worth it.",
  badgeText: "Mortgage Comparison",
  badgeIcon: Scale,
  h1: "Missed-Call Text-Back vs. AI Phone Answering for Mortgage Brokers",
  heroIntro:
    "If your mortgage brokerage keeps missing inbound calls while the broker is in a consultation, on another borrower call, reviewing a file, or driving between appointments, the real decision is not whether automation sounds impressive. It is whether a lighter missed-call text-back workflow is enough or whether you need live AI phone answering. Text-back is the narrower fallback: the call is missed, an immediate SMS goes out, and simpler borrower intent gets recovered before that person calls the next broker. AI phone answering is the heavier option: the call gets answered live, routine intake and next-step questions get handled on the spot, and consultation-booking or callback setup starts during the call instead of waiting for a text thread later. The right choice depends on how often callers truly need a live answer now, how much rate-sensitive demand dies during consultation blocks or after hours, how overloaded the office already is, and whether the team can reliably close the loop once a text conversation starts.",
  heroSubtext:
    "Below: where each option fits for mortgage brokers, where brokerages overbuild, where they underbuild, and what the existing mortgage plus call-handling proof honestly supports.",
  sections: [
    {
      type: "cards",
      title: "What each option is actually solving",
      subtitle:
        "These are different answers to different phone problems inside a mortgage brokerage:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call text-back",
          body: "Best when the main leak is unanswered borrower or referral calls and a fast SMS, callback path, or simple next-step message is enough to keep the opportunity warm until someone at the brokerage is free.",
        },
        {
          icon: Phone,
          title: "AI phone answering",
          body: "Best when callers need a real answer right away about whether the brokerage handles their scenario, what the next consultation step looks like, or how quickly someone can speak with them before they trust waiting.",
        },
        {
          icon: Voicemail,
          title: "Voicemail and manual callback",
          body: "Still common, but usually the weakest option once inbound phone demand matters. Borrowers comparing brokers move quickly, and callback lag turns into lost consultations, lost trust, and lost funded opportunities.",
        },
        {
          icon: Landmark,
          title: "Mortgage phone demand is timing-sensitive and trust-sensitive",
          body: "Calls often land during consults, lunch gaps, evenings, weekends, or while the broker is already on another borrower call — exactly when voicemail performs worst and when the wrong fallback quietly drains high-intent demand.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison for mortgage brokers",
      subtitle:
        "The choice usually comes down to borrower expectations, intake complexity, and how much live phone coverage the brokerage actually needs:",
      headers: ["Missed-Call Text-Back", "AI Phone Answering", "Voicemail"],
      rows: [
        {
          label: "First response",
          values: [
            "Immediate SMS after the missed call",
            "Live answer on the call",
            "No response unless the caller leaves a message",
          ],
        },
        {
          label: "Best for",
          values: [
            "Simple borrower or referral-call recovery, callback triage, and a lighter first fix while the broker is in consults or the office is closed",
            "Routine live intake, common next-step questions, and stronger during-consultation or after-hours coverage",
            "Very low call volume only",
          ],
        },
        {
          label: "Caller experience",
          values: [
            "Strong when a quick text and clear next step are enough",
            "Strongest when the caller expects a real answer now",
            "Usually the weakest when the borrower is actively comparing brokers",
          ],
        },
        {
          label: "Office workload",
          values: [
            "Cuts callback lag but still needs someone closing SMS threads",
            "Removes more live phone pressure by handling routine calls up front",
            "Creates the heaviest callback and voicemail cleanup burden",
          ],
        },
        {
          label: "Implementation cost",
          values: [
            "Lower — focused SMS and routing workflow",
            "Higher — voice stack, call logic, testing, routing rules, escalation paths",
            "Cheap to keep, expensive in lost borrower opportunities",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When callers need live answers or the team ignores SMS replies",
            "When the workflow is asked to replace mortgage judgment, rate discussion, or every borrower conversation end to end",
            "When missed calls are frequent and callbacks are slow",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Use the smallest phone layer that still protects borrower demand and trust:",
      options: [
        {
          icon: MessageSquare,
          heading: "Choose missed-call text-back when...",
          highlighted: true,
          items: [
            "The core problem is missed calls during consultations, lunch gaps, or after hours — not constant demand for live phone conversations",
            "A meaningful share of callers only need a fast acknowledgement, callback setup, or simple next step before staying engaged",
            "You want a lower-cost first fix before building heavier live AI answering",
            "Texting is acceptable for the kinds of borrower and referral calls your brokerage usually misses",
            "Someone can reliably close the loop once the SMS thread starts",
          ],
        },
        {
          icon: Bot,
          heading: "Choose AI phone answering when...",
          highlighted: false,
          items: [
            "Callers regularly need real answers about consultation availability, service fit, or next steps before they will wait",
            "You want straightforward consultation-booking or callback intake to happen during the call itself",
            "Missed-call volume is high enough that an SMS fallback is no longer enough",
            "After-hours borrower demand or referral-partner demand is too valuable to leave to delayed callback",
            "You need more real phone coverage without adding another full admin or receptionist seat immediately",
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
            "Phone handling is not materially affecting lead quality, consultation volume, or borrower trust",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit and bad fit signals",
      subtitle:
        "The safest choice comes from the actual call pattern, not whichever system sounds more sophisticated:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Text-back is often the better first move",
          variant: "green",
          items: [
            "The brokerage mainly needs faster acknowledgement after a missed borrower call while the broker is busy",
            "Many callers are asking about callback timing, consult availability, or the next step rather than needing a long live conversation",
            "Budget is tighter and the owner wants proof before expanding to live answering",
            "The team can reliably follow through once the basics are captured",
            "You want to stop losing easier borrower opportunities without rebuilding the whole phone layer",
          ],
        },
        {
          icon: XCircle,
          heading: "Text-back is the wrong answer if...",
          variant: "neutral",
          items: [
            "Callers regularly need live reassurance or real answers before they will trust the next step",
            "The office is already overloaded enough that SMS replies would still sit too long",
            "The brokerage needs after-hours call handling more than simple missed-call recovery",
            "Management expects an SMS workflow to replace nuanced mortgage conversations, rate talk, or every receptionist interaction",
            "The real bottleneck is live phone coverage, not acknowledgement after the miss",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The mistakes mortgage brokerages make when choosing",
      subtitle:
        "Most bad outcomes come from choosing the wrong level of automation for the real phone problem:",
      items: [
        {
          icon: DollarSign,
          title: "Overbuilding too early",
          body: "If the real issue is a manageable number of missed calls during consultation blocks and many of those can be recovered with an immediate text plus a clear callback path, a focused SMS-first workflow may be the smarter first step than jumping straight into live AI answering.",
        },
        {
          icon: AlertTriangle,
          title: "Underbuilding when live answers really matter",
          body: "If borrowers need quick answers about consultation timing, service fit, or what happens next and the brokerage still pushes them into voicemail or delayed SMS threads, text-back may only delay the loss instead of preventing it. That is where live AI answering starts to earn its keep.",
        },
        {
          icon: ClipboardCheck,
          title: "Ignoring ownership after the first response",
          body: "Neither option works if nobody owns the follow-through. Text-back needs someone closing message threads between consults. AI phone answering needs clear escalation rules, callback ownership, and a clean place for call context to land in the CRM or LOS.",
        },
        {
          icon: Clock3,
          title: "Forgetting how quickly borrowers compare options",
          body: "Someone seeking a pre-approval, refinance conversation, or timeline answer often contacts multiple brokers quickly. The tighter the urgency, the less tolerance there is for voicemail, slow callback, or a text thread that still sits too long.",
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose without making the phone system heavier than it needs to be",
      subtitle:
        "Ask what the caller actually needs in that first interaction.",
      blocks: [
        {
          heading: "If a fast acknowledgement is enough, start with text-back",
          body: "When the missed call can be recovered by an immediate SMS, a callback prompt, or a simple intake path, text-back is often the narrowest useful fix. It keeps the borrower from disappearing without forcing the brokerage into a bigger phone build too early.",
        },
        {
          heading: "If the caller expects help now, move toward live answering",
          body: "When the brokerage wins by answering during the call — handling common next-step questions, capturing routine intake details, or protecting after-hours demand while the broker is unavailable — AI phone answering becomes the stronger commercial answer.",
        },
        {
          heading: "Use the smallest system that protects demand and trust",
          body: "The right choice is rarely the most impressive stack. It is the one that matches your call pattern, caller expectations, and office reality without creating a second inbox mess for the team.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this comparison",
      subtitle:
        "There is no published mortgage-only comparison case study yet. The honest proof frame is the live mortgage pages that already define both sides of the decision, plus the broader phone-answering guide and the published call-handling case study already on the site:",
      studies: [
        {
          industry: "Mortgage workflow proof",
          headline: "The live missed-call and live-answering mortgage pages already define both sides of the decision",
          body: "Those pages already show where mortgage brokerages lose calls, how SMS-first recovery fits, and when live answered coverage becomes the heavier but more appropriate layer. This page isolates the buyer decision between them.",
          link: "/missed-call-text-back-for-mortgage-brokers",
        },
        {
          industry: "Live phone coverage proof",
          headline: "The mortgage AI phone-answering guide shows when live answered coverage is the stronger fit",
          body: "That page explains where live AI call handling wins in a brokerage context: immediate answer, routine intake handling, basic consultation scheduling, and cleaner handoff when the office cannot keep up. This page narrows that broader decision to the direct comparison with the lighter text-back layer.",
          link: "/ai-phone-answering-for-mortgage-brokers",
        },
        {
          industry: "Published call-handling proof",
          headline: "Paris Cafe proves the value of not letting inbound calls die when nobody can answer live",
          body: "The restaurant case study is not a mortgage deployment, but it does prove the economics of protecting inbound call demand when missed calls matter. This comparison applies that same operating choice to mortgage brokerages: lighter SMS fallback versus live call handling.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
        { label: "Missed-call text-back for mortgage brokers", href: "/missed-call-text-back-for-mortgage-brokers" },
        { label: "AI phone answering for mortgage brokers", href: "/ai-phone-answering-for-mortgage-brokers" },
        { label: "Paris Cafe voice agent case study", href: "/case-studies/paris-cafe-voice-agent" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from missed-call text-back for mortgage brokers?",
      answer:
        "Missed-call text-back starts after the call is already missed and works best when a quick SMS or callback path is enough. This page is about the buyer decision between that lighter fallback and live AI phone answering, which is the heavier layer that answers the call in real time, handles more routine intake questions immediately, and protects more demand when borrowers expect a real answer now.",
    },
    {
      question: "When should a mortgage brokerage choose AI phone answering instead of text-back?",
      answer:
        "Usually when the brokerage is losing too much because callers need live answers about availability, service fit, or next steps and those conversations keep landing in voicemail or delayed callback. If text-back still leaves too many high-intent borrowers waiting, live answering becomes the stronger fit.",
    },
    {
      question: "What does a focused text-back workflow usually cost compared with AI phone answering?",
      answer:
        "A focused missed-call text-back workflow is usually the cheaper starting point because it mainly handles SMS, routing, and callback capture. Live AI phone answering usually costs more because it adds voice infrastructure, live call logic, escalation paths, intake handling, and more testing. The exact budget depends on how much intake and after-hours behavior the brokerage wants automated.",
    },
    {
      question: "Can text-back and live AI phone answering coexist?",
      answer:
        "Yes. Some brokerages use text-back as the lighter fallback for lower-priority moments and live answering for higher-value or after-hours coverage. The main rule is to keep the boundary clear so the team knows which calls should be answered live, which should fall to SMS recovery, and who owns the next step.",
    },
    {
      question: "What should stay human even if a mortgage brokerage uses AI phone answering?",
      answer:
        "Rate conversations, loan-term guidance, financial advice, unusual borrower scenarios, upset callers, referral-partner escalations, and anything that requires licensed judgment should stay human. The automation layer should handle routine next steps and clean handoff, not pretend to replace the broker.",
    },
    {
      question: "Does using AI phone answering create compliance risk for mortgage brokers?",
      answer:
        "It can if the workflow drifts into quoting rates, discussing loan terms, estimating payments, or sounding like a lending commitment. The safer pattern is bounded intake, next-step guidance, and fast escalation to a human whenever financial judgment is required.",
    },
  ],
  faqSubtitle:
    "Straight answers for mortgage brokerages deciding between SMS-first recovery and live phone coverage",
  ctaHeading:
    "Need to choose between SMS-first recovery and live phone coverage for your mortgage brokerage?",
  ctaText:
    "Book a 30-minute call. We will look at where your current phone workflow is leaking borrower demand, whether missed-call text-back is enough, when live AI phone answering starts making sense, and what the narrowest useful phone layer would look like for your brokerage.",
  ctaSubtext:
    "The goal is not to sell the heaviest stack. It is to match the phone workflow to the actual leak.",
  relatedLinks: [
    { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
    { label: "Missed-call text-back for mortgage brokers", href: "/missed-call-text-back-for-mortgage-brokers" },
    { label: "AI phone answering for mortgage brokers", href: "/ai-phone-answering-for-mortgage-brokers" },
    { label: "AI phone answering vs. voicemail for mortgage brokers", href: "/ai-phone-answering-vs-voicemail-for-mortgage-brokers" },
    {
      label: "Missed-call text-back vs. voicemail for mortgage brokers",
      href: "/missed-call-text-back-vs-voicemail-for-mortgage-brokers",
    },
    { label: "What to automate first for mortgage brokers", href: "/what-to-automate-first-for-mortgage-brokers" },
    { label: "Appointment scheduling and reminder automation for mortgage brokers", href: "/appointment-scheduling-and-reminder-automation-for-mortgage-brokers" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
