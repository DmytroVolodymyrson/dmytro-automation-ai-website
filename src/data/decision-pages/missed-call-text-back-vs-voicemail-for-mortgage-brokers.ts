import {
  Landmark,
  MessageSquare,
  Voicemail,
  Bot,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock3,
  ClipboardCheck,
  PhoneCall,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-vs-voicemail-for-mortgage-brokers",
  metaTitle:
    "Missed Call Text-Back vs. Voicemail for Mortgage Brokers | Dmytro AI",
  metaDescription:
    "Should a mortgage broker use missed-call text-back or keep relying on voicemail? Practical comparison of speed-to-lead, callback lag, borrower intent, compliance guardrails, and when live AI phone answering is the better next step.",
  badgeText: "Mortgage Comparison",
  badgeIcon: Landmark,
  h1: "Missed-Call Text-Back vs. Voicemail for Mortgage Brokers",
  heroIntro:
    "If your mortgage brokerage misses inbound borrower calls while you are on another call, in a consultation, reviewing a file, or driving between appointments, missed-call text-back is usually a better fallback than voicemail. Voicemail asks the borrower to leave details, wait for a callback, and trust that your team will respond before they call the next broker on their list. Missed-call text-back does one thing voicemail does not: it answers the miss immediately with an SMS and gives the borrower a live next step while their rate-shopping or pre-approval intent is still warm. The real decision is not whether texting feels newer. It is whether your brokerage needs a lighter recovery layer for missed borrower calls or whether voicemail and delayed callbacks are already quietly costing consultations, applications, and referral trust.",
  heroSubtext:
    "Below: when missed-call text-back is the smarter first move for a mortgage brokerage, when voicemail is still acceptable, when the phone problem has already grown past both and needs live AI phone answering, and what the existing mortgage cluster plus adjacent call-handling proof honestly supports.",
  sections: [
    {
      type: "cards",
      title: "What this comparison is actually deciding",
      subtitle:
        "This is a narrow buyer decision about the fallback after a missed inbound borrower call inside a mortgage workflow, not a generic AI phone article:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call text-back gives the borrower a live next step",
          body: "The call still gets missed, but the borrower does not hit a dead end. They get an immediate text that acknowledges the miss, offers a callback path, and can capture just enough context before they contact another broker.",
        },
        {
          icon: Voicemail,
          title: "Voicemail turns recovery into a delayed callback gamble",
          body: "Voicemail only works if the caller leaves details, someone at the brokerage hears the message quickly, and somebody calls back before the borrower compares another lender or broker. In busy shops, that chain breaks constantly during consultation blocks, file-review windows, and after hours.",
        },
        {
          icon: Landmark,
          title: "This matters most when borrower intent is time-sensitive",
          body: "Purchase and refinance borrowers who are actively comparing options do not wait long. When a missed call happens during a rate-sensitive or deadline-sensitive moment, voicemail performs worst because callback lag stretches out the longest.",
        },
        {
          icon: Bot,
          title: "Text-back is the lighter step, not the final answer for every brokerage",
          body: "Some mortgage brokerages will outgrow SMS-first recovery and need live AI phone answering instead. This page exists to separate the lighter missed-call fix from the heavier live-answering workflow instead of pretending they are the same thing.",
        },
      ],
    },
    {
      type: "table",
      title: "Missed-call text-back vs. voicemail",
      subtitle:
        "Most broker-owners care about one thing: which fallback keeps more borrower demand alive without creating more callback chaos?",
      headers: ["Missed-call text-back", "Voicemail + callback"],
      rows: [
        {
          label: "First response",
          values: [
            "SMS within seconds after the missed call",
            "No response unless the caller leaves a message",
          ],
        },
        {
          label: "Borrower recovery",
          values: [
            "Better for quick acknowledgement, callback setup, and simple pre-approval or consultation intent",
            "Depends on the borrower leaving details and waiting for a callback",
          ],
        },
        {
          label: "Caller effort",
          values: [
            "Lower — the brokerage reaches back first",
            "Higher — the borrower has to leave details and hope the callback happens in time",
          ],
        },
        {
          label: "Best fit",
          values: [
            "Brokerages with missed calls during consultations, file reviews, or after hours that need a lighter first fix",
            "Brokerages where missed calls are rare and callback discipline is genuinely strong",
          ],
        },
        {
          label: "Operational burden",
          values: [
            "Needs clear SMS ownership and fast broker/admin follow-through",
            "Needs voicemail cleanup, callback discipline, and more guessing about urgency",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When callers need live answers immediately or the team ignores text replies",
            "When missed calls are frequent and callback lag is already costing real opportunities",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Use the smallest fallback layer that still protects real borrower demand:",
      options: [
        {
          icon: MessageSquare,
          heading: "Choose missed-call text-back when...",
          highlighted: true,
          items: [
            "The main problem is unanswered borrower calls during consultations, file-review blocks, or after hours — not constant demand for live conversations",
            "Most missed callers only need a callback, consultation-booking path, or quick acknowledgement to stay engaged",
            "You want a cheaper, narrower first step before investing in live AI phone coverage",
            "Texting feels acceptable for the kinds of routine borrower or referral calls you usually miss",
            "Someone on the team can actually close the loop once the message thread starts",
          ],
        },
        {
          icon: Voicemail,
          heading: "Keep voicemail only when...",
          highlighted: false,
          items: [
            "Missed calls are genuinely rare",
            "A real person returns messages fast enough that borrower demand is not leaking",
            "Most callers do not need an immediate answer to move forward",
            "Your brokerage is not yet ready to support another workflow layer",
            "Phone handling is not actually a material bottleneck right now",
          ],
        },
        {
          icon: Bot,
          heading: "Move beyond both and use live AI phone answering when...",
          highlighted: false,
          items: [
            "Callers regularly need live answers about consultation availability, service fit, or next steps before they will commit",
            "After-hours and during-consultation demand is valuable enough that SMS recovery is still too slow",
            "Routine inbound calls are stealing too much broker or admin time during business hours",
            "Missed-call text-back is no longer enough for the call pattern you actually have",
            "The brokerage wins by answering now, not by acknowledging later",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit and bad fit signals",
      subtitle:
        "Missed-call text-back is not the answer for every mortgage brokerage. It is the answer when the phone leak is real but still light enough for a fallback layer:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit for missed-call text-back",
          variant: "green",
          items: [
            "The brokerage misses inbound borrower calls during consultations, processor reviews, or after-hours gaps and needs a faster fallback than voicemail",
            "Many callers only need a callback, consultation-booking path, or short next-step answer",
            "Budget is tighter and the owner wants proof before expanding to live AI phone coverage",
            "The team can reliably respond to or close SMS threads once they start",
            "One recovered borrower consultation or application can justify a focused missed-call workflow quickly",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Callers usually need live answers about rates, timelines, or scenario fit before they will commit",
            "Nobody owns follow-through, so text replies would sit just like voicemail",
            "The brokerage already knows delayed callbacks are the real conversion problem",
            "The workflow would be asked to replace every broker conversation",
            "Missed-call volume is too low to justify any new layer at all",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The mistakes that make this decision expensive",
      subtitle:
        "Mortgage brokerages usually get this wrong in one of four ways:",
      items: [
        {
          icon: AlertTriangle,
          title: "Treating voicemail like a harmless default",
          body: "Voicemail feels free because the software line item is tiny. The real cost is borrower demand that dies while nobody hears the message or returns the call in time. Prospects comparing rates or pre-approval help are especially callback-sensitive.",
        },
        {
          icon: ClipboardCheck,
          title: "Installing text-back with no ownership",
          body: "Text-back only works if someone sees the thread, closes the loop, and knows which replies should become a callback, a consultation booking, or a handoff to a broker. Otherwise it becomes voicemail with a different interface.",
        },
        {
          icon: DollarSign,
          title: "Jumping to live AI before proving the lighter fix",
          body: "Some brokerages really do need live AI phone answering. But if the main problem is missed calls during consultation blocks and simple callback recovery, a narrow SMS-first layer can be the smarter first move before a bigger phone build.",
        },
        {
          icon: Clock3,
          title: "Ignoring how fast mortgage prospects move on",
          body: "If the caller is actively comparing brokers, watching rates, or trying to line up a pre-approval quickly, every delay matters. The more time-sensitive the need, the faster voicemail stops being defensible and the more carefully text-back has to be judged.",
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose quickly",
      subtitle:
        "Most broker-owners can make this call with three questions:",
      blocks: [
        {
          heading: "Would a fast text recover most of these missed borrower calls?",
          body: "If the answer is yes, missed-call text-back is often the right first step. The borrower gets acknowledgement immediately and the brokerage stops relying on a voicemail queue that always feels one step behind consultation schedules and staff availability.",
        },
        {
          heading: "What is one delayed callback actually costing?",
          body: "If one more recovered consultation, application start, or funded deal can cover the workflow cost quickly, voicemail starts to look much more expensive than it seems on paper. Borrowers comparing options are particularly callback-sensitive.",
        },
        {
          heading: "Do callers need a live answer instead of a fallback?",
          body: "If borrowers regularly need live answers about scenario fit, urgency, or next steps before they will commit, this page may point you past both voicemail and simple text-back toward live AI phone answering instead. That is still a useful decision because it keeps the brokerage from forcing the wrong layer onto the wrong problem.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published mortgage-specific text-back-vs-voicemail case study yet. The honest proof frame is the existing mortgage parent and phone pages plus the broader call-handling proof already on the site:",
      studies: [
        {
          industry: "Mortgage workflow proof",
          headline: "The live missed-call page already defines the lighter option this comparison is evaluating",
          body: "That page already shows where mortgage brokerages lose inbound calls during consultations and after hours, how missed-call text-back fits, and why a fast fallback matters when the broker is unavailable. This comparison isolates the missing lighter buyer choice: stay with voicemail or move to SMS-first recovery first.",
          link: "/missed-call-text-back-for-mortgage-brokers",
        },
        {
          industry: "Mortgage phone-layer proof",
          headline: "The live AI phone-answering page already proves the heavier phone layer exists and answers a different buyer question",
          body: "That page explains when the brokerage has already outgrown voicemail, callbacks, and lighter fallback workflows. This page stays one layer earlier: what to do when the miss happens and a fast text plus callback path is still enough.",
          link: "/ai-phone-answering-for-mortgage-brokers",
        },
        {
          industry: "Published call-handling proof",
          headline: "Paris Cafe proves the business value of replacing dead-end call handling with an active response",
          body: "The restaurant case study is not a mortgage deployment, but it does prove the economics of not letting inbound phone demand die after hours. This page applies that same response-speed logic to mortgage brokerages without pretending there is already a mortgage-specific comparison case study.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Adjacent workflow proof",
          headline: "Sibling pages in other verticals already prove the lighter fallback buyer decision can stand on its own",
          body: "Those pages separate voicemail, SMS-first recovery, and heavier live answering into distinct buyer choices. Mortgage brokerages have different compliance and borrower-intent context, but the workflow boundary and decision logic are directly relevant.",
          link: "/missed-call-text-back-vs-voicemail-for-insurance-agencies",
        },
      ],
      links: [
        { label: "Missed-call text-back for mortgage brokers", href: "/missed-call-text-back-for-mortgage-brokers" },
        { label: "AI phone answering for mortgage brokers", href: "/ai-phone-answering-for-mortgage-brokers" },
        { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
        { label: "Paris Cafe voice agent case study", href: "/case-studies/paris-cafe-voice-agent" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is missed-call text-back usually better than voicemail for a mortgage brokerage?",
      answer:
        "Usually yes when the main problem is missed borrower calls during consultations, file reviews, or after hours and a quick SMS can keep the borrower engaged. Text-back is not the final answer for every brokerage, but it is a more active fallback than voicemail because the brokerage reaches back first instead of waiting for the caller to leave details and hope for a callback.",
    },
    {
      question: "When is voicemail still fine?",
      answer:
        "When missed calls are rare, callback discipline is genuinely strong, and most callers do not need an immediate answer to move forward. This page is not arguing that every mortgage brokerage must replace voicemail. It is pointing out that many keep it by habit even when it is quietly hurting response speed.",
    },
    {
      question: "When should a mortgage brokerage skip text-back and move to live AI phone answering?",
      answer:
        "When callers regularly need live answers about urgency, scenario fit, or next steps, and callback lag is clearly costing the brokerage too much. That is when the brokerage should look beyond fallback text-back and into live AI phone coverage.",
    },
    {
      question: "Will borrowers actually reply to a missed-call text from a mortgage broker?",
      answer:
        "Often yes for callback requests, simple consultation intent, and basic next-step questions. But if your callers usually need live answers about rates, timelines, or whether the brokerage can help them, that is a sign you may need live phone answering instead of SMS-first recovery.",
    },
    {
      question: "How is this different from the other mortgage phone pages?",
      answer:
        "This page stays tightly on the lighter fallback decision: missed-call text-back versus voicemail. The other mortgage phone pages cover the missed-call text-back workflow itself, the heavier live AI phone-answering layer, and the broader mortgage automation stack. That separation keeps each page focused on one real buyer choice instead of blending them together.",
    },
  ],
  faqSubtitle:
    "Straight answers for mortgage brokerages deciding whether voicemail is still good enough after missed borrower calls",
  ctaHeading: "Need a practical answer on missed-call recovery for your mortgage brokerage?",
  ctaText:
    "Book a 30-minute call. We will look at your missed-call pattern, whether voicemail is quietly costing consultations or applications, and whether your brokerage should use missed-call text-back, move to live AI phone answering, or leave the phone stack alone for now.",
  ctaSubtext:
    "No mortgage-tech theater. Just a practical call-flow decision based on callback speed, staff capacity, and what your borrowers actually need.",
  relatedLinks: [
    { label: "Missed-call text-back for mortgage brokers", href: "/missed-call-text-back-for-mortgage-brokers" },
    { label: "AI phone answering for mortgage brokers", href: "/ai-phone-answering-for-mortgage-brokers" },
    { label: "AI phone answering vs. voicemail for mortgage brokers", href: "/ai-phone-answering-vs-voicemail-for-mortgage-brokers" },
    { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
    { label: "What to automate first for mortgage brokers", href: "/what-to-automate-first-for-mortgage-brokers" },
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
    { label: "Case studies", href: "/case-studies" },
    { label: "Best AI automation for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "Guides", href: "/guides" },
  ],
};

export default data;
