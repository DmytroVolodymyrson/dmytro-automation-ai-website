import {
  Scale,
  MessageSquare,
  Phone,
  Sun,
  Clock3,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Users,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-vs-ai-phone-answering-for-solar-companies",
  metaTitle:
    "Missed Call Text-Back vs. AI Phone Answering for Solar Companies | Dmytro AI",
  metaDescription:
    "Should a solar company use missed-call text-back or live AI phone answering? Practical comparison of after-hours demand, office workload, caller expectations, qualification speed, and cost for solar installers.",
  badgeText: "Solar Comparison",
  badgeIcon: Scale,
  h1: "Missed Call Text-Back vs. AI Phone Answering for Solar Companies",
  heroIntro:
    "If your solar company is losing calls, the real decision is not whether automation sounds advanced. It is whether a lighter missed-call text-back workflow is enough or whether you need live AI phone answering. Text-back is the narrower fallback: the call is missed, an SMS goes out immediately, and simpler consultation demand gets recovered before the homeowner calls the next installer. AI phone answering is the heavier option: the call gets answered live, routine qualification questions get handled on the spot, and straightforward booking or callback intake can start right there instead of waiting for a text thread later. The right choice depends on call pattern, office workload, after-hours demand, and how often callers actually need a real answer now instead of a fast acknowledgement.",
  heroSubtext:
    "Below: where each option fits for a solar company, where solar teams overbuild, where they underbuild, and what the existing solar plus phone-coverage proof honestly supports.",
  sections: [
    {
      type: "cards",
      title: "What each option is really trying to solve",
      subtitle:
        "These are different answers to different phone problems inside a solar office:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call text-back",
          body: "Best when the main problem is unanswered calls and a large share of those callers only need a fast callback path, a basic qualification reply, or a simple next step. It protects consultation demand after the miss without pretending every caller needs a live conversation.",
        },
        {
          icon: Phone,
          title: "AI phone answering",
          body: "Best when callers need real answers right away, routine qualification intake should happen live, or after-hours and high-demand-period calls are too valuable to leave to voicemail and morning callbacks.",
        },
        {
          icon: Sun,
          title: "Solar calls are timing-sensitive and trust-sensitive",
          body: "Callers may be asking whether you service their area, what to expect before a consultation, whether they need a utility bill ready, or how fast a rep can follow up. That makes callback lag more expensive than many solar teams assume.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison for solar companies",
      subtitle:
        "The choice usually comes down to speed, urgency, and how much live phone coverage your solar office actually needs:",
      headers: ["Missed-Call Text-Back", "AI Phone Answering"],
      rows: [
        {
          label: "First response",
          values: [
            "SMS within seconds after the miss",
            "Answers live on the call",
          ],
        },
        {
          label: "Best for",
          values: [
            "Simple callback recovery, basic qualification intent, after-hours demand protection",
            "Routine qualification intake, common homeowner questions, and live phone coverage during busy office windows",
          ],
        },
        {
          label: "Caller experience",
          values: [
            "Fast and practical when a text reply feels acceptable",
            "Strongest when callers expect a real answer immediately about service area, utility-bill readiness, or next steps",
          ],
        },
        {
          label: "Office workload",
          values: [
            "Cuts voicemail lag but still needs someone closing the loop on text threads",
            "Removes more live phone pressure by handling routine calls up front before they become another interruption",
          ],
        },
        {
          label: "Implementation cost",
          values: [
            "Lower — focused SMS and routing workflow",
            "Higher — voice stack, call logic, testing, escalation rules",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When callers need live answers or the team ignores message replies",
            "When the company expects AI to handle every financing, roof-fit, or proposal conversation end to end",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Use the smallest phone-recovery layer that protects real solar demand:",
      options: [
        {
          icon: MessageSquare,
          heading: "Choose missed-call text-back when...",
          highlighted: true,
          items: [
            "The core problem is missed calls, not constant complex live phone volume",
            "A meaningful share of missed callers only need a quick callback, qualification path, or simple next step",
            "You want a cheaper first fix before committing to live AI answering",
            "The office can reliably pick up message threads once the basics are captured",
            "After-hours demand matters, but not every caller needs a live conversation immediately",
          ],
        },
        {
          icon: Phone,
          heading: "Choose AI phone answering when...",
          highlighted: false,
          items: [
            "Routine callers need live answers about service area, consultation process, utility-bill readiness, or callback windows right away",
            "You want straightforward qualification intake to happen during the call itself",
            "Missed-call volume is high enough that a fallback text is not enough anymore",
            "After-hours or high-demand-period calls die too often before the office can call back",
            "You need to reduce office phone pressure without adding another full-time seat",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit and bad fit signals",
      subtitle:
        "The safest choice comes from the actual call pattern, not from whichever demo sounds more sophisticated:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Text-back is often the better first move",
          variant: "green",
          items: [
            "The company mainly needs faster acknowledgement after a missed call",
            "A lot of callers are asking about consultation availability, callback timing, or a simple next step rather than needing deep live answers",
            "Budget is tighter and you want to prove the phone-recovery layer before expanding it",
            "The team can reliably close message threads once the basics are captured",
            "One recovered consultation or qualified homeowner can justify a focused missed-call workflow quickly",
          ],
        },
        {
          icon: XCircle,
          heading: "Text-back is the wrong answer if...",
          variant: "neutral",
          items: [
            "Callers regularly need live answers before they will book a consultation",
            "The office is already overloaded enough that SMS replies will still pile up",
            "Your company needs after-hours call handling more than simple missed-call recovery",
            "Management expects an SMS workflow to replace all qualification and financing conversations",
            "You already know live phone coverage is the bottleneck, not missed-call acknowledgement",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The mistakes solar companies make when choosing",
      subtitle:
        "Most bad outcomes come from choosing the wrong level of automation for the actual phone problem:",
      items: [
        {
          icon: DollarSign,
          title: "Overbuilding too early",
          body: "If the real issue is a manageable number of missed calls and simple consultation recovery, a focused text-back workflow may be the better first step than jumping straight into live AI answering.",
        },
        {
          icon: AlertTriangle,
          title: "Underbuilding when live answers matter",
          body: "If callers frequently need live answers about service area, financing paths, utility-bill readiness, or the next step, text-back may just delay the loss instead of preventing it. That is where AI phone answering starts to earn its keep.",
        },
        {
          icon: Users,
          title: "Ignoring office ownership",
          body: "Neither option works if nobody owns the follow-through. Text-back needs someone closing message threads. AI phone answering needs clear escalation rules and a clean place for call context to land.",
        },
        {
          icon: Clock3,
          title: "Forgetting after-hours and seasonal economics",
          body: "If the company gets meaningful evening, weekend, or campaign-spike demand, the decision tilts toward live answering faster. The more valuable those callers are, the less margin you have for delayed recovery.",
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
          body: "When the missed call can be recovered by an immediate SMS, a callback prompt, or a simple qualification path, text-back is often the narrowest useful fix. It keeps solar consultation demand alive without forcing the office into a bigger phone build too early.",
        },
        {
          heading: "If the caller expects help now, move toward live answering",
          body: "When the company wins by answering during the call — handling common questions, confirming next steps, logging basic qualification intent, or protecting after-hours demand — AI phone answering becomes the stronger commercial answer.",
        },
        {
          heading: "Use the smallest system that protects booked consultations and revenue",
          body: "The right choice is rarely the most impressive stack. It is the one that matches your call pattern, office workload, and homeowner expectations without creating a second inbox mess.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this comparison",
      subtitle:
        "There is no published solar-only text-back-vs-AI-phone case study yet. The honest proof frame is the existing solar cluster plus the broader phone-answering and missed-call guides already live on the site:",
      studies: [
        {
          industry: "Solar workflow proof",
          headline: "The live solar parent and missed-call child already define the SMS-first side of the decision",
          body: "Those pages already show where solar companies lose calls, how missed-call text-back fits, and why a lighter recovery layer can be enough when the main problem is unanswered demand rather than total lack of phone coverage.",
          link: "/missed-call-text-back-for-solar-companies",
        },
        {
          industry: "Live phone coverage proof",
          headline: "The solar phone-answering page explains when live answered coverage is the stronger fit",
          body: "That page shows where live AI call coverage wins for solar teams: immediate answer, routine intake, after-hours handling, and cleaner office relief. This comparison narrows that broader phone-coverage decision to one buyer choice: stick with SMS-first recovery or upgrade to live answering.",
          link: "/ai-phone-answering-for-solar-companies",
        },
        {
          industry: "Adjacent case-study proof",
          headline: "Paris Cafe proves the value of not letting after-hours inbound demand die",
          body: "The restaurant case study is not a solar deployment, but it does prove the economics of live phone coverage when missed calls matter. This comparison applies the same operating choice to solar companies: lighter SMS fallback versus live call handling.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "Missed call text-back for solar companies", href: "/missed-call-text-back-for-solar-companies" },
        { label: "AI phone answering for solar companies", href: "/ai-phone-answering-for-solar-companies" },
        { label: "AI phone answering vs. voicemail for solar companies", href: "/ai-phone-answering-vs-voicemail-for-solar-companies" },
        { label: "Paris Cafe voice agent case study", href: "/case-studies/paris-cafe-voice-agent" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is missed-call text-back cheaper than AI phone answering for a solar company?",
      answer:
        "Yes. A focused text-back workflow is usually the cheaper first layer because it mainly needs missed-call detection, SMS, routing, and handoff logic. AI phone answering adds live voice handling, testing, escalation rules, and more real-time call design. The real question is whether the cheaper option protects enough solar consultation demand.",
    },
    {
      question: "When should a solar company skip text-back and go straight to AI phone answering?",
      answer:
        "When callers regularly need live answers, missed-call volume is high, after-hours demand matters, or callback delays are clearly costing the company too many consultations. If the business wins by answering now, live AI phone coverage usually has the stronger case.",
    },
    {
      question: "Will homeowners actually reply to a missed-call text from a solar company?",
      answer:
        "Often yes for simple callback requests, qualification intent, and basic next-step questions like service area or utility-bill readiness. But if your callers usually need live troubleshooting or want to talk through financing before they will book, that is a sign the company may need live answering instead of SMS-first recovery.",
    },
    {
      question: "Does AI phone answering replace the office or sales team?",
      answer:
        "No. It should remove repetitive phone pressure, answer routine questions, and capture straightforward qualification intake. Complex financing conversations, roof-fit judgment, proposal walkthroughs, and anything operationally sensitive should still move to a human.",
    },
    {
      question: "What is the safest way to choose between them?",
      answer:
        "Look at actual missed-call volume, how many callers could be recovered by text, how often callers need live answers, and what one recovered consultation is worth. If simple SMS recovery covers most cases, start there. If live phone handling is the real bottleneck, invest in AI phone answering.",
    },
  ],
  faqSubtitle:
    "Straight answers for solar owners deciding between SMS-first recovery and live AI phone coverage",
  ctaHeading: "Need help choosing the right phone-recovery layer for your solar company?",
  ctaText:
    "Book a 30-minute call. We will look at your missed-call pattern, where consultation demand is leaking, and whether a focused text-back workflow or live AI phone answering is the better first move for your company.",
  ctaSubtext:
    "No solar AI theater. Just a practical decision based on call flow, office workload, and what your callers actually need.",
  relatedLinks: [
    { label: "Missed call text-back for solar companies", href: "/missed-call-text-back-for-solar-companies" },
    { label: "AI phone answering for solar companies", href: "/ai-phone-answering-for-solar-companies" },
    { label: "Missed call text-back vs. voicemail for solar companies", href: "/missed-call-text-back-vs-voicemail-for-solar-companies" },
    { label: "AI phone answering vs. voicemail for solar companies", href: "/ai-phone-answering-vs-voicemail-for-solar-companies" },
    { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
