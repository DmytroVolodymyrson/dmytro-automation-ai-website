import {
  Scale,
  Sparkles,
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
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-vs-ai-phone-answering-for-law-firms",
  metaTitle:
    "Missed Call Text-Back vs. AI Phone Answering for Law Firms | Dmytro AI",
  metaDescription:
    "Should a law firm use missed-call text-back or live AI phone answering? Practical comparison of intake-call recovery, court-block coverage, after-hours demand, and when the heavier phone layer is actually worth it.",
  badgeText: "Legal Comparison",
  badgeIcon: Scale,
  h1: "Missed Call Text-Back vs. AI Phone Answering for Law Firms",
  heroIntro:
    "If your law firm keeps losing intake calls while attorneys are in court or the receptionist is tied up, the real decision is not whether automation sounds impressive. It is whether a lighter missed-call text-back workflow is enough or whether you need live AI phone answering. Text-back is the narrower fallback: the call is missed, an immediate SMS goes out, and simpler intake intent gets recovered before the prospective client calls the next firm on their list. AI phone answering is the heavier option: the call gets answered live, routine intake and next-step questions get handled on the spot, and basic consultation scheduling starts during the call instead of waiting for a text thread later. The right choice depends on how often callers truly need a real answer now, how much intake demand dies during court blocks or after hours, how overloaded the front desk already is, and whether the team can reliably close the loop once a message conversation starts.",
  heroSubtext:
    "Below: where each option fits for law firms, where firms overbuild, where they underbuild, and what the existing law-firm plus call-handling proof honestly supports.",
  sections: [
    {
      type: "cards",
      title: "What each option is actually solving",
      subtitle:
        "These are different answers to different phone problems inside a law firm:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call text-back",
          body: "Best when the main leak is unanswered intake calls and a fast SMS, callback path, or simple next-step message is enough to keep the prospective client engaged until someone at the firm is free.",
        },
        {
          icon: Phone,
          title: "AI phone answering",
          body: "Best when callers need a real answer right away about whether the firm handles their matter type, consultation availability, or basic next steps before they will trust the firm enough to wait.",
        },
        {
          icon: Voicemail,
          title: "Voicemail and manual callback",
          body: "Still common, but usually the weakest option once intake demand matters. Legal prospects often contact multiple firms quickly, and callback lag turns into lost consultations, lost trust, and lost retained matters.",
        },
        {
          icon: Sparkles,
          title: "Law-firm phone demand is timing-sensitive and trust-sensitive",
          body: "Calls often land during court hearings, depositions, lunch gaps, evenings, or weekends — exactly when voicemail performs worst and when the wrong fallback can quietly drain intake opportunities.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison for law firms",
      subtitle:
        "The choice usually comes down to caller expectations, intake complexity, and how much live phone coverage the firm actually needs:",
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
            "Simple intake recovery, callback triage, and a lighter first fix while the attorney is in court or the office is closed",
            "Routine live intake, common consultation questions, and stronger during-court or after-hours coverage",
            "Very low call volume only",
          ],
        },
        {
          label: "Caller experience",
          values: [
            "Strong when a quick text and clear next step are enough",
            "Strongest when the caller expects a real answer now",
            "Usually the weakest when the caller is actively comparing firms",
          ],
        },
        {
          label: "Front-desk workload",
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
            "Higher — voice stack, call logic, testing, intake rules, escalation paths",
            "Cheap to keep, expensive in lost consultations",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When callers need live answers or the team ignores SMS replies",
            "When the workflow is asked to replace legal judgment, fee discussions, or every intake conversation end to end",
            "When missed calls are frequent and callbacks are slow",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Use the smallest phone layer that still protects intake demand and caller trust:",
      options: [
        {
          icon: MessageSquare,
          heading: "Choose missed-call text-back when...",
          highlighted: true,
          items: [
            "The core problem is missed calls during court blocks or lunch gaps, not constant demand for live conversations",
            "A meaningful share of callers only need a fast acknowledgement, callback setup, or simple intake next step",
            "You want a lower-cost first fix before building heavier live AI answering",
            "Texting is acceptable for the kinds of intake calls your firm usually misses",
            "Someone can reliably close the loop once the SMS thread starts",
          ],
        },
        {
          icon: Bot,
          heading: "Choose AI phone answering when...",
          highlighted: false,
          items: [
            "Callers regularly need real answers about matter-type fit, consultation availability, or next steps before they will commit",
            "You want straightforward intake or callback scheduling to happen during the call itself",
            "Missed-call volume is high enough that an SMS fallback is no longer enough",
            "After-hours intake demand is too valuable to leave to delayed callback",
            "You need more real phone coverage without adding another full receptionist seat immediately",
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
            "Phone handling is not materially affecting intake or new-client trust",
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
            "The firm mainly needs faster acknowledgement after a missed intake call during court or lunch",
            "Many callers are asking about callback timing, matter-type fit, or the first consultation step rather than needing a long live conversation",
            "Budget is tighter and the managing partner wants proof before expanding to live answering",
            "The team can reliably follow through once the basics are captured",
            "You want to stop losing easier intake wins without rebuilding the whole phone layer",
          ],
        },
        {
          icon: XCircle,
          heading: "Text-back is the wrong answer if...",
          variant: "neutral",
          items: [
            "Callers regularly need live answers before they will trust the next step",
            "The front desk is already overloaded enough that SMS replies would still sit too long",
            "The firm needs after-hours call handling more than simple missed-call recovery",
            "Management expects an SMS workflow to replace fee discussions, legal intake nuance, or every receptionist conversation end to end",
            "The real bottleneck is live phone coverage, not acknowledgement after the miss",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The mistakes law firms make when choosing",
      subtitle:
        "Most bad outcomes come from choosing the wrong level of automation for the real phone problem:",
      items: [
        {
          icon: DollarSign,
          title: "Overbuilding too early",
          body: "If the real issue is a manageable number of missed intake calls during court blocks and many of those can be recovered with an immediate text plus a clear callback path, a focused SMS-first workflow may be the smarter first step than jumping straight into live AI answering.",
        },
        {
          icon: AlertTriangle,
          title: "Underbuilding when live answers really matter",
          body: "If callers need quick answers about matter-type fit, consultation availability, or next steps and the firm still pushes them into voicemail or delayed SMS threads, text-back may only delay the loss instead of preventing it. That is where live AI answering starts to earn its keep.",
        },
        {
          icon: ClipboardCheck,
          title: "Ignoring ownership after the first response",
          body: "Neither option works if nobody owns the follow-through. Text-back needs someone closing message threads between hearings. AI phone answering needs clear escalation rules, callback ownership, and a clean place for call context to land in the practice-management system.",
        },
        {
          icon: Clock3,
          title: "Forgetting how quickly legal prospects move",
          body: "Someone facing a legal issue often contacts multiple firms quickly when they are evaluating a consultation, checking availability, or deciding who can help them fastest. The tighter the urgency, the less tolerance there is for voicemail, slow callback, or a text thread that still sits too long.",
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
          body: "When the missed call can be recovered by an immediate SMS, a callback prompt, or a simple intake path, text-back is often the narrowest useful fix. It keeps the prospective client from disappearing without forcing the firm into a bigger phone build too early.",
        },
        {
          heading: "If the caller expects help now, move toward live answering",
          body: "When the firm wins by answering during the call — handling common consultation questions, collecting routine intake details, or protecting after-hours demand while attorneys are in court — AI phone answering becomes the stronger commercial answer.",
        },
        {
          heading: "Use the smallest system that protects intake and trust",
          body: "The right choice is rarely the most impressive stack. It is the one that matches your call pattern, caller expectations, and front-desk reality without creating a second inbox mess for the intake team.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this comparison",
      subtitle:
        "There is no published law-firm-only comparison case study yet. The honest proof frame is the live law-firm pages that already define both sides of the decision, plus the broader phone-answering guide and the published call-handling case study already on the site:",
      studies: [
        {
          industry: "Law-firm workflow proof",
          headline: "The live missed-call and live-answering law-firm pages already define both sides of the decision",
          body: "Those pages already show where law firms lose intake calls, how SMS-first recovery fits, and when live answered coverage becomes the heavier but more appropriate layer. This page isolates the buyer decision between them.",
          link: "/missed-call-text-back-for-law-firms",
        },
        {
          industry: "Live phone coverage proof",
          headline: "The AI phone-answering guide for law firms shows when live answered coverage is the stronger fit",
          body: "That page explains where live AI call handling wins in a legal context: immediate answer, routine intake handling, basic consultation scheduling, and cleaner handoff when a receptionist cannot keep up. This page narrows that broader decision to the direct comparison with the lighter text-back layer.",
          link: "/ai-phone-answering-for-law-firms",
        },
        {
          industry: "Published call-handling proof",
          headline: "Paris Cafe proves the value of not letting inbound calls die when nobody can answer live",
          body: "The restaurant case study is not a law-firm deployment, but it does prove the economics of protecting inbound call demand when missed calls matter. This comparison applies that same operating choice to law firms: lighter SMS fallback versus live call handling.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for law firms", href: "/ai-automation-for-law-firms" },
        { label: "Missed call text-back for law firms", href: "/missed-call-text-back-for-law-firms" },
        { label: "AI phone answering for law firms", href: "/ai-phone-answering-for-law-firms" },
        { label: "Paris Cafe voice agent case study", href: "/case-studies/paris-cafe-voice-agent" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from missed-call text-back for law firms?",
      answer:
        "Missed-call text-back starts after the call is already missed and works best when a quick SMS or callback path is enough. This page is about the buyer decision between that lighter fallback and live AI phone answering, which is the heavier layer that answers the call in real time, handles more routine intake questions immediately, and protects more demand when callers expect a real answer now.",
    },
    {
      question: "When should a law firm choose AI phone answering instead of text-back?",
      answer:
        "Usually when the firm is losing too much because callers need live answers about matter-type fit, consultation availability, or next steps and those conversations keep landing in voicemail or delayed callback. If text-back still leaves too many high-intent prospects waiting, live answering becomes the stronger fit.",
    },
    {
      question: "What does a focused text-back workflow usually cost compared with AI phone answering?",
      answer:
        "A focused missed-call text-back workflow is usually the cheaper starting point because it mainly handles SMS, routing, and callback capture. Live AI phone answering usually costs more because it adds voice infrastructure, live call logic, escalation paths, intake handling, and more testing. The exact budget depends on how much intake and after-hours behavior the firm wants automated.",
    },
    {
      question: "Can text-back and live AI phone answering coexist?",
      answer:
        "Yes. Some firms use text-back as the lighter fallback for lower-priority moments and live answering for higher-value or after-hours coverage. The main rule is to keep the boundary clear so the team knows which calls should be answered live, which should fall to SMS recovery, and who owns the next step.",
    },
    {
      question: "What should stay human even if a law firm uses AI phone answering?",
      answer:
        "Legal judgment, case-specific advice, fee negotiations, conflict-of-interest checks, opposing-party details, upset callers, emergency situations, and anything that requires attorney or intake-team judgment should stay human. The automation layer should handle routine next steps and clean handoff, not pretend to replace the firm's intake team.",
    },
    {
      question: "Does using AI phone answering create attorney-client privilege or legal-advice risks?",
      answer:
        "Not if the workflow stays in a bounded intake role. It should collect details, explain next steps, and route the caller to a human when judgment is required. It should never sound like the attorney already evaluated the matter or provide substantive legal advice on the call.",
    },
  ],
  faqSubtitle:
    "Straight answers for law firms deciding between SMS-first recovery and live phone coverage",
  ctaHeading: "Need to choose between SMS-first recovery and live phone coverage for your law firm?",
  ctaText:
    "Book a 30-minute call. We will look at where your current phone workflow is leaking intake demand, whether missed-call text-back is enough, when live AI phone answering starts making sense, and what the narrowest useful phone layer would look like for your firm.",
  ctaSubtext:
    "The goal is not to sell the heaviest stack. It is to match the phone workflow to the actual leak.",
  relatedLinks: [
    { label: "AI automation for law firms", href: "/ai-automation-for-law-firms" },
    { label: "Missed call text-back for law firms", href: "/missed-call-text-back-for-law-firms" },
    { label: "AI phone answering for law firms", href: "/ai-phone-answering-for-law-firms" },
    { label: "AI phone answering vs. voicemail for law firms", href: "/ai-phone-answering-vs-voicemail-for-law-firms" },
    { label: "What to automate first for law firms", href: "/what-to-automate-first-for-law-firms" },
  ],
};

export default data;
