import {
  UtensilsCrossed,
  Moon,
  Phone,
  Bot,
  MessageSquare,
  CalendarCheck,
  CheckCircle2,
  XCircle,
  Clock,
  Users,
  AlertTriangle,
  ArrowRightLeft,
  BellRing,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "after-hours-phone-answering-for-restaurants",
  metaTitle:
    "After-Hours Phone Answering for Restaurants — Stop Losing Reservation Calls After Close | Dmytro AI",
  metaDescription:
    "How restaurants handle after-hours calls without losing reservation demand. Practical guide to AI phone answering, text-back fallback, voicemail limits, and when live coverage actually pays off.",
  badgeText: "Restaurant Workflow",
  badgeIcon: UtensilsCrossed,
  h1: "After-Hours Phone Answering for Restaurants",
  heroIntro:
    "If your restaurant gets reservation calls after close, the real question is not whether you need more generic 'AI.' The question is whether after-hours demand is valuable enough to answer in the moment instead of pushing callers to voicemail and hoping they call back tomorrow. After-hours phone answering for restaurants usually means one of two practical systems: a live AI voice agent that can answer and capture bookings right away, or a lighter missed-call recovery flow that at least keeps the guest conversation alive. The wrong setup is pretending voicemail is neutral. It is usually where reservation intent dies.",
  heroSubtext:
    "Below: what after-hours restaurant phone coverage should actually do, where a live AI answerer beats text-back, where text-back is enough, what the Paris Cafe case study proves directly, and when this problem is not worth solving yet.",
  sections: [
    {
      type: "cards",
      title: "What a focused after-hours phone workflow should actually handle",
      subtitle:
        "This page is intentionally narrower than the broader restaurant AI phone guide. It is about what happens when the restaurant is closed and a guest still calls.",
      items: [
        {
          icon: Moon,
          title: "Acknowledge the caller immediately after close",
          body: "The caller should get an answer path right away instead of hitting dead voicemail and moving on to another restaurant. Speed matters most when the guest is deciding where to book tonight or tomorrow.",
        },
        {
          icon: Phone,
          title: "Capture reservation intent while it is fresh",
          body: "A practical after-hours system should collect the basics — party size, date, preferred time, and callback details — or confirm the booking directly if the setup supports that. The goal is not a clever conversation. It is keeping the booking opportunity alive.",
        },
        {
          icon: MessageSquare,
          title: "Handle the simple questions that block booking",
          body: "Hours, reservation policy, whether late bookings are accepted, parking, private-event contact details, or whether a human will follow up in the morning. If the caller only needs one quick answer, the system should give it cleanly.",
        },
        {
          icon: BellRing,
          title: "Route sensitive or high-value cases to a human",
          body: "Private dining, large-party requests, complaints, VIP situations, and anything nuanced should move to a manager path instead of being forced through a generic overnight script.",
        },
        {
          icon: CalendarCheck,
          title: "Hand off cleanly into the next-day workflow",
          body: "If the booking cannot be completed on the call, the system should leave a clear record for the team: who called, what they wanted, what was promised, and what needs to happen next. Otherwise you only move the chaos from voicemail to another inbox.",
        },
        {
          icon: Users,
          title: "Protect staff time without dropping demand",
          body: "The overnight workflow should reduce manual morning cleanup and stop managers from reconstructing missed-call context before service starts. That is the operational payoff, not the novelty of an AI voice.",
        },
      ],
    },
    {
      type: "table",
      title: "After-hours AI phone answering vs. text-back vs. voicemail",
      subtitle:
        "Most restaurants are deciding between three real options, not between AI and some perfect human host who is magically on the clock all night:",
      headers: ["AI voice answerer", "Missed-call text-back", "Voicemail"],
      rows: [
        {
          label: "First response",
          values: [
            "Answers live on the call",
            "Text within seconds after the missed call",
            "No reply unless the guest leaves a message",
          ],
        },
        {
          label: "Best use",
          values: [
            "Restaurants where after-hours calls often need immediate answers or booking capture",
            "Restaurants that mainly need a lighter fallback for missed calls and simple reservation recovery",
            "Only acceptable when after-hours call value is genuinely low",
          ],
        },
        {
          label: "Reservation capture",
          values: [
            "Strongest — can qualify and book in the same interaction",
            "Good for reply-based recovery or next-step booking links",
            "Weak — delayed callback usually loses some callers",
          ],
        },
        {
          label: "Implementation cost",
          values: [
            "Higher — voice stack, routing, testing, escalation logic",
            "Lower — SMS-first recovery workflow",
            "Low cash cost, highest lost-demand cost",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When the restaurant expects AI to handle high-touch hospitality with no guardrails",
            "When callers need live answers right away or the team ignores text replies",
            "When after-hours demand matters and guests do not wait until morning",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each after-hours setup makes sense",
      subtitle:
        "Use the smallest system that protects real reservation demand. That is the right frame.",
      options: [
        {
          icon: Bot,
          heading: "Choose live AI phone answering when...",
          highlighted: true,
          items: [
            "Guests often call after hours expecting an immediate answer",
            "A large share of overnight calls are straightforward reservation requests that should be handled on the spot",
            "The restaurant loses meaningful revenue when bookings wait until morning",
            "Routine phone questions after close still need fast answers",
            "Management wants real after-hours coverage without staffing another phone shift",
          ],
        },
        {
          icon: MessageSquare,
          heading: "Choose missed-call text-back when...",
          highlighted: false,
          items: [
            "The main problem is missed calls, not long live conversations",
            "Guests are likely to continue by text or simple follow-up",
            "Budget is tighter and the restaurant wants a narrower first step",
            "A fast acknowledgment is good enough for many overnight callers",
            "The team can actually close the reply thread cleanly in the morning",
          ],
        },
        {
          icon: Clock,
          heading: "Keep voicemail only when...",
          highlighted: false,
          items: [
            "After-hours call volume is genuinely low",
            "Reservations are not a meaningful revenue driver",
            "Callers are likely to use online booking instead",
            "Someone really does return the messages fast enough to avoid lost demand",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit and bad fit signals",
      subtitle:
        "This page only makes sense if after-hours calls create a real commercial problem. Here is the honest filter:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "The restaurant misses a meaningful number of reservation calls after close",
            "One more recovered table or event inquiry often covers the workflow cost quickly",
            "The team starts each morning with voicemail cleanup and unclear follow-up ownership",
            "Guests call because they still want a human-like answer path even when the dining room is closed",
            "The concept has enough phone-driven booking behavior that delayed callback hurts conversion",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Most bookings already come through online reservation software and overnight call demand is minimal",
            "The concept is mostly walk-in and phone capture does not matter much",
            "The restaurant needs highly customized concierge-style phone handling for most callers",
            "The team wants automation to replace every human judgment call around guests",
            "The bigger problem is weak demand overall, not after-hours response gaps",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The guardrails that matter most",
      subtitle:
        "After-hours restaurant phone coverage works when the workflow is disciplined. It fails when it tries to fake hospitality or promise too much.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not blur live-answering and fallback logic",
          body: "Know which calls should be answered live, which can go into a text-back path, and which should route to a manager. Mixing those together usually creates a worse guest experience than choosing one lane clearly.",
        },
        {
          icon: ArrowRightLeft,
          title: "Make the morning handoff visible",
          body: "Managers should see exactly what happened overnight: who called, what was captured, which bookings still need review, and whether any guest was promised a callback. If that visibility is missing, the system only hides the problem temporarily.",
        },
        {
          icon: Users,
          title: "Keep high-touch requests human",
          body: "Large groups, private events, guest complaints, and anything sensitive should route cleanly to a person instead of being forced through generic automation just because it is after hours.",
        },
        {
          icon: Clock,
          title: "Measure recovered demand, not only answered calls",
          body: "The win is not simply that the phone was picked up. The real metric is whether more callers become reservations, event inquiries, or clean next-step conversations instead of dropping off overnight.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is direct restaurant proof for the after-hours phone problem plus adjacent proof for the lighter fallback options already live on the site.",
      studies: [
        {
          industry: "Restaurant proof",
          headline: "Paris Cafe proves after-hours restaurant call coverage has real value",
          body: "The Paris Cafe voice-agent deployment moved after-hours call coverage from 0% to 100%, cut web lead response time to under 60 seconds, and gave management back about 15 hours a week. That is direct proof that after-hours restaurant phone demand is commercially worth capturing instead of leaving to voicemail.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Adjacent workflow proof",
          headline: "The existing restaurant phone pages already prove the lighter recovery paths",
          body: "The live restaurant voice-agent guide, the restaurant missed-call text-back page, and the comparison between them already establish the practical choices. This page isolates the narrower after-hours buyer decision instead of leaving it buried inside the broader restaurant automation cluster.",
          link: "/ai-voice-agent-for-restaurants",
        },
      ],
      links: [
        { label: "Paris Cafe case study", href: "/case-studies/paris-cafe-voice-agent" },
        { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
        { label: "Missed call text-back for restaurants", href: "/missed-call-text-back-for-restaurants" },
        { label: "Missed call text-back vs. AI voice agent for restaurants", href: "/missed-call-text-back-vs-ai-voice-agent-for-restaurants" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is after-hours phone answering different from the broader AI voice agent for restaurants page?",
      answer:
        "Yes. The broader voice-agent page explains the full restaurant phone-answering use case. This page is narrower. It focuses specifically on what happens after the restaurant is closed, whether live AI answering is worth it overnight, and when a lighter text-back fallback is enough instead.",
    },
    {
      question: "When is a live AI answerer better than missed-call text-back after hours?",
      answer:
        "When callers need answers right away, reservations should be captured in the same interaction, or after-hours demand is valuable enough that waiting for a text reply or morning callback costs too many bookings. If the restaurant wins by answering now, live voice coverage usually has the stronger case.",
    },
    {
      question: "Can this work with OpenTable, Resy, SevenRooms, or a simpler reservation setup?",
      answer:
        "Usually yes, as long as the workflow knows what to do when a guest wants to book, confirm details, or leave a request for follow-up. Some restaurants route the caller into a live booking flow. Others use a lighter capture-and-callback path. The exact setup depends on the reservation stack and how strict the booking rules are.",
    },
    {
      question: "What does a focused after-hours restaurant phone workflow usually cost?",
      answer:
        "A lighter missed-call recovery workflow is usually the cheaper path. A live AI phone-answering setup costs more because it needs voice handling, routing, and testing. In both cases, the real comparison is against lost reservation demand and morning cleanup burden, not just the software line item.",
    },
    {
      question: "When should a restaurant ignore this entirely?",
      answer:
        "If after-hours calls are rare, reservations are not commercially important, or online booking already handles the demand cleanly, this may not need its own system. The page is for restaurants where overnight phone gaps are a real operations and revenue leak.",
    },
  ],
  faqSubtitle:
    "Straight answers for restaurant owners deciding how much after-hours phone coverage they actually need",
  ctaHeading: "Losing reservation calls after close?",
  ctaText:
    "Book a 30-minute call. We will look at how much overnight phone demand your restaurant actually gets, whether live AI answering or a lighter fallback makes more sense, and what the narrowest useful after-hours phone workflow would look like for your setup.",
  ctaSubtext:
    "No restaurant-tech hype. Just a practical look at missed reservation demand, staffing reality, and what should stay human.",
  relatedLinks: [
    { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
    { label: "Missed call text-back for restaurants", href: "/missed-call-text-back-for-restaurants" },
    { label: "Missed call text-back vs. AI voice agent for restaurants", href: "/missed-call-text-back-vs-ai-voice-agent-for-restaurants" },
    { label: "AI automation for restaurants", href: "/ai-automation-for-restaurants" },
  ],
};

export default data;
