import {
  Scale,
  Sun,
  MessageSquare,
  Voicemail,
  Bot,
  Clock3,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Phone,
  ClipboardCheck,
  BellRing,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-vs-voicemail-for-solar-companies",
  metaTitle:
    "Missed Call Text-Back vs. Voicemail for Solar Companies | Dmytro AI",
  metaDescription:
    "Should a solar company use missed-call text-back or keep relying on voicemail? Practical comparison of qualification-call recovery, after-hours demand, office workload, and when live AI phone answering is the next step.",
  badgeText: "Solar Comparison",
  badgeIcon: Scale,
  h1: "Missed Call Text-Back vs. Voicemail for Solar Companies",
  heroIntro:
    "If your solar company misses calls, missed-call text-back is usually a better fallback than voicemail when the real problem is simple call recovery. Voicemail asks the homeowner to leave details, wait for a callback, and trust that someone will follow through before they call the next installer. Missed-call text-back is not magic, but it does one important thing voicemail does not: it answers the miss immediately and gives the caller a live next step while the consultation interest is still active. The real decision is not whether texting sounds more modern. It is whether your solar company needs a lighter recovery layer for missed calls or whether voicemail and callbacks are already quietly costing booked consultations and qualification demand.",
  heroSubtext:
    "Below: when missed-call text-back is the smarter first move for a solar company, when voicemail is still acceptable, when the phone problem has already grown past both and needs live AI phone answering, and what the existing solar plus phone-recovery proof honestly supports.",
  sections: [
    {
      type: "cards",
      title: "What this comparison is really deciding",
      subtitle:
        "This is a narrow solar buyer decision about the fallback after a missed call, not a generic AI phone article:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call text-back gives the homeowner a live next step",
          body: "The call still gets missed, but the homeowner does not hit a dead end. They get an immediate text that can acknowledge the miss, offer a callback path, or move simple qualification intent forward before they call another installer.",
        },
        {
          icon: Voicemail,
          title: "Voicemail turns recovery into a delayed callback gamble",
          body: "Voicemail only works if the homeowner leaves details, the office hears them quickly, and someone calls back before the consultation goes elsewhere. During busy days and when reps are out on site visits, that chain breaks constantly.",
        },
        {
          icon: Sun,
          title: "This matters most during high-demand periods and after hours",
          body: "Solar call patterns spike when ad campaigns run, during seasonal demand, when setters are booked, and when the office is buried in design-visit coordination. Those are exactly the moments when voicemail performs worst because response gets delayed the longest.",
        },
        {
          icon: Bot,
          title: "Text-back is the lighter step, not the final answer for every solar company",
          body: "Some solar companies will outgrow SMS-first recovery and need live AI phone answering instead. This page exists to separate the lighter missed-call fix from the heavier live-answering workflow instead of pretending they are the same thing.",
        },
      ],
    },
    {
      type: "table",
      title: "Missed-call text-back vs. voicemail",
      subtitle:
        "Most solar owners care about one thing: which fallback keeps more consultation demand alive without creating more callback chaos?",
      headers: ["Missed-Call Text-Back", "Voicemail + callback"],
      rows: [
        {
          label: "First response",
          values: [
            "SMS within seconds after the missed call",
            "No response unless the caller leaves a message",
          ],
        },
        {
          label: "Consultation recovery",
          values: [
            "Better for fast acknowledgement, callback setup, and simple qualification intent",
            "Depends on the caller leaving details and waiting for a callback",
          ],
        },
        {
          label: "Caller effort",
          values: [
            "Lower — the solar company reaches back first",
            "Higher — the caller has to leave details and hope the callback happens in time",
          ],
        },
        {
          label: "Best fit",
          values: [
            "Solar teams with missed calls, qualification demand, and a need for a lighter first fix",
            "Solar teams where missed calls are rare and callback discipline is genuinely strong",
          ],
        },
        {
          label: "Operational burden",
          values: [
            "Needs clear SMS ownership and office follow-through",
            "Needs voicemail cleanup, callback discipline, and more guessing about caller urgency",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When callers need live answers right now or the team ignores text replies",
            "When missed calls are frequent and callback lag is already costing consultations",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Use the smallest fallback layer that still protects real solar demand:",
      options: [
        {
          icon: MessageSquare,
          heading: "Choose missed-call text-back when...",
          highlighted: true,
          items: [
            "The main problem is unanswered calls, not long live phone conversations",
            "Most missed callers only need a callback, qualification path, or quick acknowledgement to stay alive",
            "You want a cheaper, narrower first step before investing in live AI phone coverage",
            "Texting feels acceptable for the kinds of calls your company usually misses",
            "Someone on the team can actually close the loop once the message thread starts",
          ],
        },
        {
          icon: Voicemail,
          heading: "Keep voicemail only when...",
          highlighted: false,
          items: [
            "Missed calls are genuinely rare",
            "A real person returns messages fast enough that consultation demand is not leaking",
            "Most callers do not need an immediate answer to move forward",
            "Your solar company is not yet ready to support another workflow layer",
            "Phone handling is not actually a material bottleneck right now",
          ],
        },
        {
          icon: Phone,
          heading: "Move beyond both and use live AI phone answering when...",
          highlighted: false,
          items: [
            "Callers regularly need live answers about service area, financing, roof suitability, or next steps before they will commit",
            "After-hours or high-demand-period calls are valuable enough that SMS recovery is still too slow",
            "Routine phone questions are stealing too much office time during the day",
            "Missed-call text-back is no longer enough for the call pattern you actually have",
            "The business wins by answering now, not by acknowledging later",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit and bad fit signals",
      subtitle:
        "Missed-call text-back is not the answer for every solar company. It is the answer when the phone leak is real but still light enough for a fallback layer:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit for missed-call text-back",
          variant: "green",
          items: [
            "The office misses calls during busy periods and the company needs a faster fallback than voicemail",
            "Many callers only need a qualification path, callback, utility-bill prep prompt, or a short next-step answer",
            "Budget is tighter and management wants proof before expanding to live AI phone coverage",
            "The team can reliably respond to or close SMS threads",
            "One recovered consultation or qualified homeowner can justify a focused missed-call workflow quickly",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Callers usually need live answers before they will trust the next step",
            "Nobody owns follow-through, so text replies would sit just like voicemail",
            "The company already knows delayed callbacks are the real conversion problem",
            "The workflow would be asked to replace every financing or roof-assessment conversation",
            "Missed-call volume is too low to justify any new layer at all",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The mistakes that make this decision expensive",
      subtitle:
        "Solar companies usually get this wrong in one of four ways:",
      items: [
        {
          icon: AlertTriangle,
          title: "Treating voicemail like a harmless default",
          body: "Voicemail feels free because the software line item is tiny. The real cost is the qualification intent that dies while nobody hears the message or returns the call in time.",
        },
        {
          icon: BellRing,
          title: "Installing text-back with no ownership",
          body: "Text-back only works if someone sees the thread, closes the loop, and knows which messages should become a consultation, a callback, or a setter handoff. Otherwise it becomes voicemail with a different interface.",
        },
        {
          icon: DollarSign,
          title: "Jumping to live AI before proving the lighter fix",
          body: "Some solar companies really do need live AI phone answering. But if the main problem is missed calls and simple qualification recovery, a narrow SMS-first layer can be the smarter first move.",
        },
        {
          icon: Clock3,
          title: "Ignoring how time-sensitive solar calls are",
          body: "If the caller is still deciding who to trust with their installation, every delay matters. The more urgent those calls are, the faster voicemail stops being defensible and the more carefully text-back has to be judged.",
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose quickly",
      subtitle:
        "Most solar owners can make this call with three questions:",
      blocks: [
        {
          heading: "Would a fast text recover most of these missed calls?",
          body: "If the answer is yes, missed-call text-back is often the right first step. The homeowner gets acknowledgement immediately and the company stops relying on a voicemail queue that always feels one step behind.",
        },
        {
          heading: "What is one delayed callback actually costing?",
          body: "If one more recovered consultation, qualified homeowner, or utility-bill collection can cover the workflow cost quickly, voicemail starts to look much more expensive than it seems on paper.",
        },
        {
          heading: "Do callers need a live answer instead of a fallback?",
          body: "If homeowners regularly need answers during the first call about financing, service area, or roof suitability, this page may point you past both voicemail and simple text-back toward live AI phone answering instead. That is still a useful decision because it keeps the company from forcing the wrong layer onto the wrong problem.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published solar-only text-back-vs-voicemail case study yet. The honest proof frame is the existing solar phone cluster plus the broader call-handling proof already on the site:",
      studies: [
        {
          industry: "Solar workflow proof",
          headline: "The live solar missed-call and live-answering pages already define the lighter and heavier options",
          body: "Those pages already show where solar teams lose calls, how missed-call text-back fits, and when live AI phone answering becomes the stronger answer. This comparison isolates the missing lighter buyer choice: stay with voicemail or move to SMS-first recovery first.",
          link: "/missed-call-text-back-for-solar-companies",
        },
        {
          industry: "Published call-handling proof",
          headline: "Paris Cafe proves the business value of replacing dead-end call handling with an active response",
          body: "The restaurant case study is not a solar deployment, but it does prove the economics of not letting inbound phone demand die after hours. This page applies that same response-speed logic to solar companies without pretending there is already a solar-specific voicemail comparison case study.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Adjacent workflow proof",
          headline: "The broader AI phone-answering guide still matters here",
          body: "The generic AI phone-answering page explains when live call coverage wins: immediate answers, cleaner intake, and fewer callback bottlenecks. This comparison uses that as the upper bound while staying tightly on the lighter text-back-vs-voicemail decision.",
          link: "/ai-phone-answering-for-service-businesses",
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
      question: "Is missed-call text-back usually better than voicemail for a solar company?",
      answer:
        "Usually yes when the main problem is missed qualification and consultation intent and a quick SMS can keep the conversation alive. Text-back is not the final answer for every solar team, but it is a more active fallback than voicemail because the company reaches back first instead of waiting for the homeowner to leave details and hope for a callback.",
    },
    {
      question: "When is voicemail still fine?",
      answer:
        "When missed calls are rare, callback discipline is genuinely strong, and most callers do not need an immediate answer to move forward. This page is not arguing that every solar company must replace voicemail — only that many keep it by habit even when it is hurting response speed.",
    },
    {
      question: "When should a solar company skip text-back and move to live AI phone answering?",
      answer:
        "When callers regularly need live answers, after-hours or high-demand-period calls are valuable enough that SMS recovery is still too slow, or callback lag is clearly costing the company too much. That is when the business should look beyond fallback text-back and into live AI phone coverage.",
    },
    {
      question: "Will homeowners actually reply to a missed-call text from a solar company?",
      answer:
        "Often yes for callback requests, simple qualification intent, and basic next-step questions like service area or utility-bill prep. But if your callers usually need live troubleshooting or want to talk through financing before they will book, that is a sign the company may need live phone answering instead of SMS-first recovery.",
    },
    {
      question: "How is this different from the other solar phone pages?",
      answer:
        "This page stays tightly on the lighter fallback decision: missed-call text-back versus voicemail. The other solar phone pages cover the broader live phone-answering workflow and the heavier choice between SMS-first recovery and live AI phone answering. That separation keeps each page focused on one real buyer choice instead of blending them together.",
    },
  ],
  faqSubtitle:
    "Straight answers for solar owners deciding whether voicemail is still good enough after missed calls",
  ctaHeading: "Need a practical answer on missed-call recovery for your solar company?",
  ctaText:
    "Book a 30-minute call. We will look at your missed-call pattern, whether voicemail is quietly costing booked consultations, and whether your company should use missed-call text-back, move to live AI phone answering, or leave the phone stack alone for now.",
  ctaSubtext:
    "No solar tech theater. Just a practical call-flow decision based on callback speed, office capacity, and what your callers actually need.",
  relatedLinks: [
    { label: "Missed call text-back for solar companies", href: "/missed-call-text-back-for-solar-companies" },
    { label: "AI phone answering for solar companies", href: "/ai-phone-answering-for-solar-companies" },
    { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
