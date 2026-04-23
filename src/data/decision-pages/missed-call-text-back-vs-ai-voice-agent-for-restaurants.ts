import {
  Scale,
  UtensilsCrossed,
  MessageSquare,
  Bot,
  Phone,
  CalendarCheck,
  DollarSign,
  Users,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-vs-ai-voice-agent-for-restaurants",
  metaTitle:
    "Missed Call Text-Back vs. AI Voice Agent for Restaurants | Dmytro AI",
  metaDescription:
    "Should a restaurant use missed call text-back or an AI voice agent? Practical comparison of speed, booking recovery, guest experience, cost, and where each approach fits.",
  badgeText: "Restaurant Comparison",
  badgeIcon: Scale,
  h1: "Missed Call Text-Back vs. AI Voice Agent for Restaurants",
  heroIntro:
    "If your restaurant is missing calls, the real decision is not 'Should we use AI?' It is whether a simple missed-call text-back is enough or whether you need a live AI voice agent answering the phone. Text-back is the lighter, cheaper fallback when the main problem is unanswered calls and simple reservation recovery. A voice agent is the stronger option when guests need answers right away, booking should happen in the same interaction, or after-hours phone demand is too valuable to leave to SMS threads and morning callbacks.",
  heroSubtext:
    "Below: where each option wins, where restaurants overbuild, where they underbuild, and what the Paris Cafe restaurant proof plus the existing phone-recovery pages actually support.",
  sections: [
    {
      type: "cards",
      title: "What each option is actually trying to solve",
      subtitle:
        "These are not interchangeable tools. They solve different versions of the restaurant phone problem:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call text-back",
          body: "Best when the restaurant mainly needs a fast fallback after a missed call. The caller gets an immediate text, reservation intent stays alive, and the team or booking workflow can pick up the thread without voicemail lag.",
        },
        {
          icon: Bot,
          title: "AI voice agent",
          body: "Best when the restaurant wants live phone coverage: answering routine questions, handling straightforward bookings in the same interaction, and protecting after-hours demand without relying on a text reply later.",
        },
        {
          icon: Phone,
          title: "Manual voicemail and callbacks",
          body: "This is still the default in many restaurants, but it usually means slower response, weaker guest experience, and lost reservation demand whenever the host stand is busy or the line rings after close.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "The restaurant choice usually comes down to speed, booking flow, guest expectations, and staffing reality:",
      headers: ["Missed-Call Text-Back", "AI Voice Agent", "Voicemail"],
      rows: [
        {
          label: "First response",
          values: [
            "SMS within seconds after a missed call",
            "Answers live on the call",
            "No response unless the guest leaves a message",
          ],
        },
        {
          label: "Reservation capture",
          values: [
            "Good for simple follow-up and callback recovery",
            "Best for immediate booking in the same interaction",
            "Weak — booking waits for a later callback",
          ],
        },
        {
          label: "Guest experience",
          values: [
            "Fast and practical when texting feels natural",
            "Strongest when callers expect a real answer right now",
            "Often frustrating unless call volume is truly low",
          ],
        },
        {
          label: "Best operating context",
          values: [
            "Rushes, after-close callbacks, lighter phone demand",
            "Meaningful reservation volume and routine phone traffic all day",
            "Very low phone volume or true backup only",
          ],
        },
        {
          label: "Implementation cost",
          values: [
            "Lower — focused SMS and routing workflow",
            "Higher — call logic, testing, routing, and voice stack",
            "Cheap to run, expensive in lost demand",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When guests need live answers or the team ignores SMS threads",
            "When the restaurant expects AI to handle nuanced hospitality alone",
            "When missed calls happen often and competitors answer faster",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "A restaurant does not need the biggest phone stack. It needs the smallest system that actually protects booking demand:",
      options: [
        {
          icon: MessageSquare,
          heading: "Choose missed-call text-back when...",
          highlighted: true,
          items: [
            "The core problem is missed calls, not constant live phone volume",
            "A large share of missed calls are simple reservation or availability requests",
            "Guests are likely to continue the interaction by text",
            "You want a cheaper, faster first step before a bigger voice workflow",
            "The team can reliably monitor and close the SMS thread or route it into booking",
          ],
        },
        {
          icon: Bot,
          heading: "Choose an AI voice agent when...",
          highlighted: false,
          items: [
            "Guests need real answers right away instead of a text exchange later",
            "Straightforward bookings should happen on the call itself",
            "After-hours reservation demand is meaningful and recurring",
            "Routine phone questions are stealing too much host or manager time",
            "The restaurant wants live coverage without adding another full shift of payroll",
          ],
        },
        {
          icon: Phone,
          heading: "Keep voicemail only when...",
          highlighted: false,
          items: [
            "Phone demand is genuinely low",
            "Most callers are known regulars who will wait for a callback",
            "Reservations barely matter to the concept",
            "Someone really does return messages quickly and consistently",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit and bad fit signals",
      subtitle:
        "The safest choice comes from the actual phone pattern, not from whichever restaurant-tech demo sounds more impressive:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Text-back is usually the better first move",
          variant: "green",
          items: [
            "Rush periods create missed calls but not endless long conversations",
            "The fastest win is acknowledging guests quickly and keeping reservation intent alive",
            "The team wants a narrow recovery layer instead of a full phone rebuild",
            "Budget is tighter and the restaurant wants proof before expanding automation",
            "A live call is nice to have, but not required for most inquiries",
          ],
        },
        {
          icon: XCircle,
          heading: "Text-back is the wrong answer if...",
          variant: "neutral",
          items: [
            "Guests regularly need live answers about reservations, policies, or edge cases",
            "The concept loses too much value when booking does not happen immediately",
            "The team is already bad at closing message threads or callbacks",
            "Management expects SMS to replace all front-of-house communication",
            "Phone demand is high enough that a fallback layer is not enough anymore",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The mistakes restaurants make when choosing",
      subtitle:
        "Most bad outcomes come from choosing the wrong level of automation for the actual phone problem:",
      items: [
        {
          icon: DollarSign,
          title: "Overbuilding too early",
          body: "If the real issue is a manageable number of missed calls and simple reservation recovery, text-back can be the smarter first layer than jumping straight into a full voice system.",
        },
        {
          icon: AlertTriangle,
          title: "Underbuilding when speed matters",
          body: "If callers need answers now and your restaurant depends on live reservation capture, text-back may just delay the loss instead of preventing it. That is where a voice agent starts to earn its keep.",
        },
        {
          icon: Users,
          title: "Ignoring the host-stand workflow",
          body: "Neither option helps if nobody owns the follow-through. Text-back needs clear message handling. Voice agents need clear escalation rules. The handoff matters as much as the first response.",
        },
        {
          icon: Clock,
          title: "Forgetting after-hours economics",
          body: "A restaurant that gets meaningful evening or overnight booking demand usually has less margin for callback delays. The more valuable those calls are, the more the comparison shifts toward live answered coverage.",
        },
      ],
    },
    {
      type: "prose",
      title: "How to decide without overthinking it",
      subtitle:
        "A practical way to choose is to ask what the caller needs in that first interaction.",
      blocks: [
        {
          heading: "If a fast acknowledgement is enough, start with text-back",
          body: "When the missed call can be recovered by a quick SMS, a reservation link, or a short thread that the team can close cleanly, text-back is often the narrowest useful fix.",
        },
        {
          heading: "If the caller expects an answer now, move toward voice",
          body: "When the restaurant wins by answering on the spot — booking the table, handling common questions, confirming availability, or keeping after-hours callers from dropping off — the voice agent becomes the stronger commercial answer.",
        },
        {
          heading: "Use the smallest system that protects real demand",
          body: "The right decision is rarely the most sophisticated stack. It is the one that fits your call pattern, staffing reality, and booking economics without creating new operational chaos.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports the choice",
      subtitle:
        "The cleanest proof is a combination of the live restaurant case study plus the existing restaurant phone-recovery pages already on the site:",
      studies: [
        {
          industry: "Restaurant proof",
          headline: "Paris Cafe proves the value of live restaurant phone coverage",
          body: "The Paris Cafe deployment shows what happens when a restaurant stops sending after-hours callers into a dead end: after-hours call coverage moved from 0% to 100%, web lead response dropped to under 60 seconds, and management got back about 15 hours a week. That is the strongest proof for the voice-agent side of the decision.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Workflow adjacency",
          headline: "The existing restaurant text-back guide already proves the lighter-weight option",
          body: "The site already explains where missed-call text-back fits for restaurant reservation recovery. This comparison page exists to make the decision explicit: when that SMS-first layer is enough and when the restaurant should move up to live answered coverage instead.",
          link: "/missed-call-text-back-for-restaurants",
        },
      ],
      links: [
        { label: "Paris Cafe case study", href: "/case-studies/paris-cafe-voice-agent" },
        { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
        { label: "Missed call text-back for restaurants", href: "/missed-call-text-back-for-restaurants" },
        { label: "AI voice agent vs. voicemail", href: "/ai-voice-agent-vs-voicemail" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is missed-call text-back cheaper than a restaurant voice agent?",
      answer:
        "Yes. A focused restaurant text-back workflow is usually the cheaper first layer because it only needs missed-call detection, SMS, routing, and handoff logic. A voice agent adds live call handling, testing, prompt design, transfer rules, and more edge-case work. The right question is not just price. It is whether the cheaper option still protects enough reservation demand.",
    },
    {
      question: "When should a restaurant skip text-back and go straight to a voice agent?",
      answer:
        "When callers need live answers, bookings should happen during the same interaction, after-hours demand matters, or missed calls happen frequently enough that a fallback text is no longer enough. If the restaurant wins by answering now, the voice agent usually has the stronger economic case.",
    },
    {
      question: "Will guests actually respond to a missed-call text?",
      answer:
        "Often yes for simple reservation intent, quick availability questions, and straightforward follow-up. But response behavior depends on the concept and the audience. If your guests strongly prefer real-time phone handling, that is a sign the restaurant may need live voice coverage instead of SMS-first recovery.",
    },
    {
      question: "Does a voice agent replace the host stand?",
      answer:
        "No. It should remove repetitive phone pressure, answer routine questions, and capture straightforward bookings. High-touch hospitality, nuanced guest recovery, VIP handling, and sensitive situations still belong with a human.",
    },
    {
      question: "What is the safest way to choose between them?",
      answer:
        "Look at actual missed-call volume, how many callers could be recovered by text, how often guests need live answers, and what one recovered table or private-event lead is worth. If simple SMS recovery covers most cases, start there. If live phone handling is the bottleneck, invest in the voice agent.",
    },
  ],
  faqSubtitle:
    "Straight answers for restaurant owners deciding between SMS-first recovery and live AI phone coverage",
  ctaHeading: "Need help choosing the right restaurant phone-recovery layer?",
  ctaText:
    "Book a 30-minute call. We will look at your missed-call pattern, where reservation demand is leaking, and whether a focused text-back workflow or a live AI voice agent is the better first move for your restaurant.",
  ctaSubtext:
    "No restaurant-tech theater. Just a practical decision based on call flow, guest expectations, and booking economics.",
  relatedLinks: [
    { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
    { label: "Missed call text-back for restaurants", href: "/missed-call-text-back-for-restaurants" },
    { label: "AI automation for restaurants", href: "/ai-automation-for-restaurants" },
    { label: "Paris Cafe voice agent case study", href: "/case-studies/paris-cafe-voice-agent" },
  ],
};

export default data;
