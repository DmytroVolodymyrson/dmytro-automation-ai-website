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
  slug: "missed-call-text-back-vs-ai-phone-answering-for-med-spas",
  metaTitle:
    "Missed Call Text-Back vs. AI Phone Answering for Med Spas | Dmytro AI",
  metaDescription:
    "Should a med spa use missed-call text-back or live AI phone answering? Practical comparison of consultation-call recovery, front-desk overload, after-hours demand, and when the heavier phone layer is actually worth it.",
  badgeText: "Med Spa Comparison",
  badgeIcon: Scale,
  h1: "Missed Call Text-Back vs. AI Phone Answering for Med Spas",
  heroIntro:
    "If your med spa keeps missing consultation calls, the real decision is not whether automation sounds impressive. It is whether a lighter missed-call text-back workflow is enough or whether you need live AI phone answering. Text-back is the narrower fallback: the call is missed, an immediate SMS goes out, and simpler consultation intent gets recovered before the prospective patient calls another clinic. AI phone answering is the heavier option: the call gets answered live, routine booking and next-step questions get handled on the spot, and straightforward intake starts during the call instead of waiting for a text thread later. The right choice depends on how often callers truly need a real answer now, how much consultation demand dies during treatment blocks or after hours, how overloaded the front desk already is, and whether the team can reliably close the loop once a message conversation starts.",
  heroSubtext:
    "Below: where each option fits for med spas, where owners overbuild, where they underbuild, and what the existing med spa plus call-handling proof honestly supports.",
  sections: [
    {
      type: "cards",
      title: "What each option is actually solving",
      subtitle:
        "These are different answers to different phone problems inside a med spa:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call text-back",
          body: "Best when the main leak is unanswered consultation demand and a fast SMS, callback path, or simple next-step message is enough to keep the prospective patient engaged until the clinic is free.",
        },
        {
          icon: Phone,
          title: "AI phone answering",
          body: "Best when callers need a real answer right away about consultation flow, availability, treatment categories, or basic next steps before they will trust the clinic enough to continue.",
        },
        {
          icon: Voicemail,
          title: "Voicemail and manual callback",
          body: "Still common, but usually the weakest option once consultation demand matters. Prospective patients often contact multiple clinics quickly, and callback lag turns into lost consults, lost trust, and lost after-hours opportunity.",
        },
        {
          icon: Sparkles,
          title: "Med spa phone demand is timing-sensitive and trust-sensitive",
          body: "Calls often land during treatment blocks, lunch gaps, evenings, or weekends — exactly when voicemail performs worst and when the wrong fallback can quietly drain booked consultations.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison for med spas",
      subtitle:
        "The choice usually comes down to caller expectations, call complexity, and how much live phone coverage the clinic actually needs:",
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
            "Simple consultation recovery, callback triage, and a lighter first fix while the desk is busy or the clinic is closed",
            "Routine live intake, common booking questions, and stronger during-treatment or after-hours coverage",
            "Very low call volume only",
          ],
        },
        {
          label: "Caller experience",
          values: [
            "Strong when a quick text and clear next step are enough",
            "Strongest when the caller expects a real answer now",
            "Usually the weakest when the caller is still choosing a clinic actively",
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
            "Higher — voice stack, call logic, testing, booking rules, escalation paths",
            "Cheap to keep, expensive in lost consultations",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When callers need live answers or the team ignores SMS replies",
            "When the workflow is asked to replace clinical judgment, pricing nuance, or every front-desk conversation end to end",
            "When missed calls are frequent and callbacks are slow",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Use the smallest phone layer that still protects consultation demand and caller trust:",
      options: [
        {
          icon: MessageSquare,
          heading: "Choose missed-call text-back when...",
          highlighted: true,
          items: [
            "The core problem is missed calls, not constant demand for live conversations",
            "A meaningful share of callers only need a fast acknowledgement, callback setup, or simple consultation next step",
            "You want a lower-cost first fix before building heavier live AI answering",
            "Texting is acceptable for the kinds of calls your clinic usually misses",
            "Someone can reliably close the loop once the SMS thread starts",
          ],
        },
        {
          icon: Bot,
          heading: "Choose AI phone answering when...",
          highlighted: false,
          items: [
            "Callers regularly need real answers about consultation flow, availability, treatment categories, or next steps before they will commit",
            "You want straightforward booking or callback intake to happen during the call itself",
            "Missed-call volume is high enough that an SMS fallback is no longer enough",
            "After-hours consultation demand is too valuable to leave to delayed callback",
            "You need more real phone coverage without adding another full front-desk seat immediately",
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
            "Phone handling is not materially affecting consultations or new-patient trust",
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
            "The clinic mainly needs faster acknowledgement after a missed consultation call",
            "Many callers are asking about callback timing, booking, or the first next step rather than needing a long live conversation",
            "Budget is tighter and management wants proof before expanding to live answering",
            "The team can reliably follow through once the basics are captured",
            "You want to stop losing easier consultation wins without rebuilding the whole phone layer",
          ],
        },
        {
          icon: XCircle,
          heading: "Text-back is the wrong answer if...",
          variant: "neutral",
          items: [
            "Callers regularly need live answers before they will trust the next step",
            "The front desk is already overloaded enough that SMS replies would still sit too long",
            "The business needs after-hours call handling more than simple missed-call recovery",
            "Management expects an SMS workflow to replace pricing, treatment nuance, or every intake conversation end to end",
            "The real bottleneck is live phone coverage, not acknowledgement after the miss",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The mistakes med spas make when choosing",
      subtitle:
        "Most bad outcomes come from choosing the wrong level of automation for the real phone problem:",
      items: [
        {
          icon: DollarSign,
          title: "Overbuilding too early",
          body: "If the real issue is a manageable number of missed consultation calls and many of those can be recovered with an immediate text plus a clear callback path, a focused SMS-first workflow may be the smarter first step than jumping straight into live AI answering.",
        },
        {
          icon: AlertTriangle,
          title: "Underbuilding when live answers really matter",
          body: "If callers need quick answers about consultation flow, treatment categories, or next steps and the clinic still pushes them into voicemail or delayed SMS threads, text-back may only delay the loss instead of preventing it. That is where live AI answering starts to earn its keep.",
        },
        {
          icon: ClipboardCheck,
          title: "Ignoring ownership after the first response",
          body: "Neither option works if nobody owns the follow-through. Text-back needs someone closing message threads. AI phone answering needs clear escalation rules, callback ownership, and a clean place for call context to land.",
        },
        {
          icon: Clock3,
          title: "Forgetting how quickly cosmetic shoppers move",
          body: "Med spa prospects often contact multiple clinics quickly when they are exploring a consultation, a package, or a next available time. The tighter the demand window, the less tolerance there is for voicemail, slow callback, or a text thread that still sits too long.",
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
          body: "When the missed call can be recovered by an immediate SMS, a callback prompt, or a simple consultation path, text-back is often the narrowest useful fix. It keeps the prospective patient from disappearing without forcing the clinic into a bigger phone build too early.",
        },
        {
          heading: "If the caller expects help now, move toward live answering",
          body: "When the clinic wins by answering during the call — handling common booking questions, collecting routine intake, or protecting after-hours demand while staff are still busy — AI phone answering becomes the stronger commercial answer.",
        },
        {
          heading: "Use the smallest system that protects consultations and trust",
          body: "The right choice is rarely the most impressive stack. It is the one that matches your call pattern, caller expectations, and front-desk reality without creating a second inbox mess for the team.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this comparison",
      subtitle:
        "There is no published med-spa-only comparison case study yet. The honest proof frame is the live med spa cluster plus the broader phone-answering guide and the published call-handling case study already on the site:",
      studies: [
        {
          industry: "Med spa workflow proof",
          headline: "The live missed-call and live-answering med spa pages already define both sides of the decision",
          body: "Those pages already show where med spas lose consultation calls, how SMS-first recovery fits, and when live answered coverage becomes the heavier but more appropriate layer. This page isolates the buyer decision between them.",
          link: "/missed-call-text-back-for-med-spas",
        },
        {
          industry: "Live phone coverage proof",
          headline: "The generic AI phone-answering guide shows when live answered coverage is the stronger fit",
          body: "That page explains where live AI call handling wins: immediate answer, routine next-step handling, basic intake, and cleaner handoff when a team cannot keep up with the line. This page narrows that broader decision to med spa realities.",
          link: "/ai-phone-answering-for-service-businesses",
        },
        {
          industry: "Published call-handling proof",
          headline: "Paris Cafe proves the value of not letting inbound calls die when nobody can answer live",
          body: "The restaurant case study is not a med spa deployment, but it does prove the economics of protecting inbound call demand when missed calls matter. This comparison applies that same operating choice to med spas: lighter SMS fallback versus live call handling.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
        { label: "Missed call text-back for med spas", href: "/missed-call-text-back-for-med-spas" },
        { label: "AI phone answering for med spas", href: "/ai-phone-answering-for-med-spas" },
        { label: "Paris Cafe voice agent case study", href: "/case-studies/paris-cafe-voice-agent" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from missed-call text-back for med spas?",
      answer:
        "Missed-call text-back starts after the call is already missed and works best when a quick SMS or callback path is enough. This page is about the buyer decision between that lighter fallback and live AI phone answering, which is the heavier layer that answers the call in real time, handles more routine questions immediately, and protects more demand when callers expect a real answer now.",
    },
    {
      question: "When should a med spa choose AI phone answering instead of text-back?",
      answer:
        "Usually when the clinic is losing too much because callers need live answers about consultation flow, timing, treatment categories, or next steps and those conversations keep landing in voicemail or delayed callback. If text-back still leaves too many high-intent prospects waiting, live answering becomes the stronger fit.",
    },
    {
      question: "What does a focused text-back workflow usually cost compared with AI phone answering?",
      answer:
        "A focused missed-call text-back workflow is usually the cheaper starting point because it mainly handles SMS, routing, and callback capture. Live AI phone answering usually costs more because it adds voice infrastructure, live call logic, escalation paths, booking handling, and more testing. The exact budget depends on how much intake and after-hours behavior the clinic wants automated.",
    },
    {
      question: "Can text-back and live AI phone answering coexist?",
      answer:
        "Yes. Some med spas use text-back as the lighter fallback for lower-priority moments and live answering for higher-value or after-hours coverage. The main rule is to keep the boundary clear so the team knows which calls should be answered live, which should fall to SMS recovery, and who owns the next step.",
    },
    {
      question: "What should stay human even if a med spa uses AI phone answering?",
      answer:
        "Clinical judgment, treatment-fit nuance, pricing edge cases, financing conversations, upset callers, and anything that needs real front-desk or provider judgment should stay human. The automation layer should handle routine next steps and clean handoff, not pretend to replace the clinic team.",
    },
  ],
  faqSubtitle:
    "Straight answers for med spa owners deciding between SMS-first recovery and live phone coverage",
  ctaHeading: "Need to choose between SMS-first recovery and live phone coverage for your med spa?",
  ctaText:
    "Book a 30-minute call. We will look at where your current phone workflow is leaking consultation demand, whether missed-call text-back is enough, when live AI phone answering starts making sense, and what the narrowest useful phone layer would look like for your clinic.",
  ctaSubtext:
    "The goal is not to sell the heaviest stack. It is to match the phone workflow to the actual leak.",
  relatedLinks: [
    { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
    { label: "Missed call text-back for med spas", href: "/missed-call-text-back-for-med-spas" },
    { label: "AI phone answering for med spas", href: "/ai-phone-answering-for-med-spas" },
    { label: "AI phone answering vs. voicemail for med spas", href: "/ai-phone-answering-vs-voicemail-for-med-spas" },
  ],
};

export default data;
