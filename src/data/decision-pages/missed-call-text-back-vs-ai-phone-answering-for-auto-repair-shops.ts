import {
  Scale,
  Wrench,
  MessageSquare,
  Phone,
  Voicemail,
  Clock3,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Users,
  ArrowRightLeft,
  ClipboardCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-vs-ai-phone-answering-for-auto-repair-shops",
  metaTitle:
    "Missed Call Text-Back vs. AI Phone Answering for Auto Repair Shops | Dmytro AI",
  metaDescription:
    "Should an auto repair shop use missed call text-back or AI phone answering? Practical comparison of speed, service-advisor workload, booking recovery, caller expectations, and cost.",
  badgeText: "Auto Repair Comparison",
  badgeIcon: Scale,
  h1: "Missed Call Text-Back vs. AI Phone Answering for Auto Repair Shops",
  heroIntro:
    "If your shop is losing calls, the real decision is not whether automation sounds impressive. It is whether a lighter missed-call text-back workflow is enough or whether you need live AI phone answering. Text-back is the narrower fallback: the phone rings out, a useful SMS goes out immediately, and simpler repair intent gets recovered before the caller disappears. AI phone answering is the heavier option: the call gets answered live, routine questions get handled on the spot, and straightforward appointments or callbacks can start right there instead of waiting for a text thread later. The right choice depends on call pattern, service-advisor workload, after-hours demand, and how often callers actually need a live answer instead of a fast acknowledgement.",
  heroSubtext:
    "Below: where each option fits, where repair shops overbuild, where they underbuild, and what the existing auto-repair plus phone-recovery proof honestly supports.",
  sections: [
    {
      type: "cards",
      title: "What each option is really trying to solve",
      subtitle:
        "These are different answers to different phone problems inside a repair shop:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call text-back",
          body: "Best when the main problem is unanswered calls and a large share of those callers only need a fast next step, a callback, or a simple booking path. It protects demand after the miss without pretending every caller needs a live conversation.",
        },
        {
          icon: Phone,
          title: "AI phone answering",
          body: "Best when callers need real answers right away, routine service intake should happen live, or after-hours phone demand is too valuable to leave to voicemail and morning callbacks.",
        },
        {
          icon: Voicemail,
          title: "Voicemail and manual callback",
          body: "Still common in repair shops, but usually the weakest option when the advisor is overloaded. Response is slower, callers drift to the next shop, and the callback queue turns into lost repair demand.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison for auto repair shops",
      subtitle:
        "The choice usually comes down to speed, complexity of the call, and how much live intake your shop actually needs:",
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
            "Simple booking intent, callback recovery, after-hours demand protection",
            "Routine service intake, common questions, and live phone coverage during busy periods",
            "Very low call volume only",
          ],
        },
        {
          label: "Caller experience",
          values: [
            "Fast and practical when texting feels acceptable",
            "Strongest when callers expect help right now",
            "Usually the most frustrating option when urgency is high",
          ],
        },
        {
          label: "Advisor workload",
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
            "When callers need live answers or the team ignores SMS replies",
            "When the shop expects AI to handle every nuanced repair conversation end to end",
            "When missed calls are frequent and callbacks are slow",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Use the smallest phone-recovery layer that protects real repair demand:",
      options: [
        {
          icon: MessageSquare,
          heading: "Choose missed-call text-back when...",
          highlighted: true,
          items: [
            "The core problem is missed calls, not constant complex live phone volume",
            "A meaningful share of missed callers only need a quick text-back, callback, or simple booking path",
            "You want a cheaper first fix before committing to live AI answering",
            "The service advisor can step in once the workflow captures the basics",
            "After-hours demand matters, but not every caller needs a live conversation immediately",
          ],
        },
        {
          icon: Phone,
          heading: "Choose AI phone answering when...",
          highlighted: false,
          items: [
            "Routine callers need live answers about services, timing, or next steps right away",
            "You want straightforward appointment intake to happen during the call itself",
            "Missed-call volume is high enough that a fallback text is not enough anymore",
            "The shop loses too much from after-hours calls dying before morning",
            "You need to reduce front-desk phone pressure without adding another full shift of payroll",
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
            "The shop mainly needs faster acknowledgement after a missed call",
            "A lot of callers are asking about availability, drop-off timing, or a callback rather than needing deep live troubleshooting",
            "Budget is tighter and you want to prove the phone-recovery layer before expanding it",
            "The team can reliably close message threads once the basics are captured",
            "You want to stop losing easy wins without rebuilding the whole front desk",
          ],
        },
        {
          icon: XCircle,
          heading: "Text-back is the wrong answer if...",
          variant: "neutral",
          items: [
            "Callers regularly need live answers before they will book",
            "The service advisor is already overwhelmed enough that SMS replies will still pile up",
            "Your shop needs after-hours call handling more than simple missed-call recovery",
            "Management expects an SMS workflow to replace all service-intake conversations",
            "You already know live phone coverage is the bottleneck, not missed-call acknowledgement",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The mistakes repair shops make when choosing",
      subtitle:
        "Most bad outcomes come from choosing the wrong level of automation for the actual phone problem:",
      items: [
        {
          icon: DollarSign,
          title: "Overbuilding too early",
          body: "If the real issue is a manageable number of missed calls and simple booking recovery, a focused text-back workflow may be the better first step than jumping straight into live AI answering.",
        },
        {
          icon: AlertTriangle,
          title: "Underbuilding when live answers matter",
          body: "If callers frequently need live timing, service, or next-step answers, text-back may just delay the loss instead of preventing it. That is where AI phone answering starts to earn its keep.",
        },
        {
          icon: Users,
          title: "Ignoring service-advisor ownership",
          body: "Neither option works if nobody owns the follow-through. Text-back needs someone closing SMS threads. AI phone answering needs clear escalation rules and a clean place for call context to land.",
        },
        {
          icon: Clock3,
          title: "Forgetting after-hours economics",
          body: "If the shop gets meaningful evening or weekend demand, the decision tilts toward live answering faster. The more valuable those callers are, the less margin you have for delayed recovery.",
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
          body: "When the missed call can be recovered by an immediate SMS, a callback prompt, or a simple booking path, text-back is often the narrowest useful fix. It keeps repair demand alive without forcing the shop into a bigger phone build too early.",
        },
        {
          heading: "If the caller expects help now, move toward live answering",
          body: "When the shop wins by answering during the call — handling common questions, confirming next steps, logging basic intake, or protecting after-hours demand — AI phone answering becomes the stronger commercial answer.",
        },
        {
          heading: "Use the smallest system that protects booked work and revenue",
          body: "The right choice is rarely the most impressive stack. It is the one that matches your call pattern, advisor workload, and customer expectations without creating a second inbox mess.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this comparison",
      subtitle:
        "There is no published auto-repair-only comparison case study yet. The honest proof frame is the existing auto-repair cluster plus the broader phone-answering and missed-call guides already live on the site:",
      studies: [
        {
          industry: "Auto-repair workflow proof",
          headline: "The live auto-repair parent and missed-call child already define the SMS-first side of the decision",
          body: "Those pages already show where repair shops lose calls, how missed-call text-back fits, and why a lighter recovery layer can be enough when the main problem is unanswered demand rather than total lack of phone coverage.",
          link: "/missed-call-text-back-for-auto-repair-shops",
        },
        {
          industry: "Live phone coverage proof",
          headline: "The generic AI phone-answering guide shows when live answered coverage is the stronger fit",
          body: "That page explains where live AI call handling wins: routine questions, immediate response, call qualification, booking, and coverage when a team cannot keep up with the line. This page narrows that broader decision to repair-shop realities.",
          link: "/ai-phone-answering-for-service-businesses",
        },
        {
          industry: "Adjacent case-study proof",
          headline: "Paris Cafe proves the value of not letting after-hours inbound demand die",
          body: "The restaurant case study is not an auto-repair deployment, but it does prove the economics of live phone coverage when missed calls matter. This comparison applies the same operating choice to repair shops: lighter SMS fallback versus live call handling.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "Missed call text-back for auto repair shops", href: "/missed-call-text-back-for-auto-repair-shops" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "AI automation for auto repair shops", href: "/ai-automation-for-auto-repair-shops" },
        { label: "Paris Cafe voice agent case study", href: "/case-studies/paris-cafe-voice-agent" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is missed-call text-back cheaper than AI phone answering for an auto repair shop?",
      answer:
        "Yes. A focused text-back workflow is usually the cheaper first layer because it mainly needs missed-call detection, SMS, routing, and handoff logic. AI phone answering adds live voice handling, testing, prompt design, and escalation rules. The real question is whether the cheaper option protects enough repair demand.",
    },
    {
      question: "When should an auto repair shop skip text-back and go straight to AI phone answering?",
      answer:
        "When callers regularly need live answers, missed-call volume is high, after-hours demand matters, or callback delays are clearly costing the shop too much. If the business wins by answering now, live AI phone coverage usually has the stronger case.",
    },
    {
      question: "Will customers actually reply to a missed-call text from a repair shop?",
      answer:
        "Often yes for simple booking intent, callback requests, and basic service questions. But if your callers usually need live troubleshooting or want to talk through the issue before booking, that is a sign the shop may need live answering instead of SMS-first recovery.",
    },
    {
      question: "Does AI phone answering replace the service advisor?",
      answer:
        "No. It should remove repetitive phone pressure, answer routine questions, and capture straightforward intake. Complex diagnostics, angry customers, edge-case repairs, and sensitive pricing conversations still belong with a human.",
    },
    {
      question: "What is the safest way to choose between them?",
      answer:
        "Look at actual missed-call volume, how many callers could be recovered by text, how often callers need live answers, and what one recovered repair job is worth. If simple SMS recovery covers most cases, start there. If live phone handling is the real bottleneck, invest in AI phone answering.",
    },
  ],
  faqSubtitle:
    "Straight answers for shop owners deciding between SMS-first recovery and live AI phone coverage",
  ctaHeading: "Need help choosing the right phone-recovery layer for your auto repair shop?",
  ctaText:
    "Book a 30-minute call. We will look at your missed-call pattern, where repair demand is leaking, and whether a focused text-back workflow or live AI phone answering is the better first move for your shop.",
  ctaSubtext:
    "No auto-repair tech theater. Just a practical decision based on call flow, advisor workload, and what your callers actually need.",
  relatedLinks: [
    { label: "Missed call text-back for auto repair shops", href: "/missed-call-text-back-for-auto-repair-shops" },
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "AI automation for auto repair shops", href: "/ai-automation-for-auto-repair-shops" },
    { label: "Appointment scheduling and reminder automation for auto repair shops", href: "/appointment-scheduling-and-reminder-automation-for-auto-repair-shops" },
  ],
};

export default data;
