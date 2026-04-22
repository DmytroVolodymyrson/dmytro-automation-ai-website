import {
  UtensilsCrossed,
  PhoneMissed,
  MessageSquare,
  Clock,
  CalendarCheck,
  CheckCircle2,
  XCircle,
  Users,
  Bot,
  ArrowUpRight,
  BellRing,
  Phone,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-for-restaurants",
  metaTitle:
    "Missed Call Text-Back for Restaurants — Recover Reservation Demand Before It Dies | Dmytro AI",
  metaDescription:
    "How restaurants use missed call text-back to recover reservation demand, send a clean SMS next step, and stop losing callers to voicemail or slow callbacks.",
  badgeText: "Restaurant Workflow",
  badgeIcon: UtensilsCrossed,
  h1: "Missed Call Text-Back for Restaurants",
  heroIntro:
    "If your restaurant misses calls during service, after close, or when the host stand is overloaded, not every caller needs a full AI phone conversation. Sometimes the fastest fix is simpler: the call is missed, an immediate text goes out, the guest gets a clear next step, and reservation demand stays alive long enough for the team or booking flow to recover it. Restaurant missed call text-back sits between voicemail and a full voice agent. It is narrow, practical, and often easier to launch when the real problem is unanswered calls rather than full phone automation.",
  heroSubtext:
    "Below: what restaurant missed call text-back should actually do, how it differs from a restaurant voice-agent setup and a generic missed-call page, what proof honestly supports it, and where SMS-first recovery works better than forcing every missed call into a live AI conversation.",
  sections: [
    {
      type: "cards",
      title: "What restaurant missed call text-back should actually do",
      subtitle:
        "This is a narrow workflow for restaurants that miss reservation and guest-service calls but do not necessarily need a full voice agent on every line:",
      items: [
        {
          icon: PhoneMissed,
          title: "Detect the missed call instantly",
          body: "As soon as nobody answers, the workflow should know the call was missed and start the recovery sequence without someone checking voicemail later.",
        },
        {
          icon: MessageSquare,
          title: "Send a fast, human-sounding text",
          body: "The first message should acknowledge the missed call, sound like the restaurant, and invite a simple reply instead of dropping the guest into canned marketing language.",
        },
        {
          icon: CalendarCheck,
          title: "Recover reservation intent quickly",
          body: "If the caller wanted to book, confirm a reservation request, or ask a simple availability question, the text flow should move them toward the next useful step while the intent is still fresh.",
        },
        {
          icon: BellRing,
          title: "Route urgent or high-value cases to a human",
          body: "Large-party requests, VIP situations, complaints, and anything sensitive should escalate quickly to the right manager instead of pretending SMS can handle every guest interaction.",
        },
        {
          icon: Clock,
          title: "Protect after-hours demand",
          body: "A guest calling after close should still get a response path. Even a simple text-back is better than forcing them to leave voicemail and hope someone remembers to call tomorrow.",
        },
        {
          icon: Users,
          title: "Reduce host-stand interruption",
          body: "During service, the host team should not have to bounce between in-person guests, ringing phones, and manual callback lists. A text-back layer protects demand without adding one more live task in the moment.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct from the other restaurant guides",
      subtitle:
        "This page only makes sense if it stays focused on SMS-first recovery after a call is missed:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI voice agent for restaurants",
          values: [
            "Restaurants that want calls answered live, routine questions handled immediately, and reservation demand captured in the same conversation",
            "Runs the live phone interaction itself and routes edge cases",
          ],
        },
        {
          label: "Missed call text-back for restaurants",
          values: [
            "Restaurants that mainly need a fast fallback when calls are missed and are comfortable recovering demand by text or simple follow-up instead of a live AI call",
            "Sends an immediate SMS next step after the missed call and keeps reservation intent alive",
          ],
        },
        {
          label: "Missed call follow-up automation",
          values: [
            "Broad service-business page covering generic text-back mechanics across trades and appointment businesses",
            "Explains the pattern in general rather than restaurant-specific guest expectations, reservation flow, and hospitality constraints",
          ],
        },
        {
          label: "Reservation confirmation and reminder automation",
          values: [
            "Restaurants that already have the reservation and need stronger post-booking communication",
            "Starts after the booking exists, not after a call is missed",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this is a good fit and when it is not",
      subtitle:
        "Missed call text-back is strongest when the restaurant needs a lighter-weight recovery layer instead of a full voice stack:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "The restaurant misses meaningful call volume during rushes or after hours",
            "A large share of missed calls are simple reservation or availability requests",
            "The team can continue the thread by text or route it into a booking workflow cleanly",
            "You want a faster, cheaper starting point than full live AI phone answering",
            "A guest getting an immediate text is materially better than waiting on voicemail callbacks",
            "You want to protect demand without over-automating hospitality",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The concept depends on live phone conversation for most bookings or high-touch guest handling",
            "Your call volume is high enough that a live voice agent or dedicated phone coverage is the better answer",
            "Guests in your concept rarely text back or the team cannot manage SMS follow-up reliably",
            "Your main problem is weak demand, not missed calls",
            "You expect a text-back workflow to replace all front-of-house communication",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for restaurant SMS-first recovery",
      subtitle:
        "This workflow works when it feels practical and guest-friendly. It fails when it feels like marketing automation welded onto hospitality.",
      items: [
        {
          icon: MessageSquare,
          title: "Keep the first text short and useful",
          body: "The message should sound like a missed-call recovery, not a sales funnel. Something simple and direct usually works best because the guest just wants the next step.",
        },
        {
          icon: Phone,
          title: "Know when text-back is not enough",
          body: "If the restaurant really needs live phone coverage for reservation capture, private events, or constant guest questions, a voice agent or human phone answerer may be the better fit than stretching text-back too far.",
        },
        {
          icon: Bot,
          title: "Use automation for structure, not fake hospitality",
          body: "Automation can acknowledge, route, and collect basics. Complaints, nuanced requests, and guest-recovery moments should still move to a human quickly.",
        },
        {
          icon: ArrowUpRight,
          title: "Measure whether the workflow actually recovers bookings",
          body: "The point is not just fast texting. It is whether missed calls turn into replies, reservations, and cleaner follow-up instead of silent drop-off and lost demand.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical restaurant missed-call text-back workflow usually works",
      subtitle:
        "The strongest version is simple: detect the miss fast, text fast, give one clear next step, and route anything nuanced to a person.",
      blocks: [
        {
          heading: "The call is missed and the text goes out right away",
          body: "The guest should hear from the restaurant within seconds, not hours later after service ends. That keeps the intent alive before they call the next place on their list.",
        },
        {
          heading: "The guest gets a reservation-oriented next step",
          body: "Depending on the setup, that might be a quick text exchange, a reservation link, a prompt to send preferred time and party size, or a routed callback request. The point is clarity, not complexity.",
        },
        {
          heading: "The team only steps in where human judgment matters",
          body: "Large parties, private events, special accommodations, complaints, and VIP cases should surface with enough context that a manager can take over quickly instead of reconstructing the whole situation from scratch.",
        },
        {
          heading: "The workflow creates visibility instead of more chaos",
          body: "Missed calls, guest replies, and unresolved threads should be visible somewhere the team actually uses. Otherwise the restaurant just trades voicemail chaos for texting chaos.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published restaurant-only missed-call text-back case study yet. The honest proof frame is adjacent: a live restaurant phone-demand case study plus the broader missed-call recovery pattern already published on-site.",
      studies: [
        {
          industry: "Restaurant proof",
          headline: "Paris Cafe proves the commercial value of recovering missed restaurant phone demand",
          body: "The Paris Cafe deployment shows the restaurant phone problem clearly: after-hours call coverage moved from 0% to 100%, web lead response dropped to under 60 seconds, and management got back about 15 hours a week. That is direct proof that missed restaurant demand is worth recovering. This page narrows the angle to SMS-first recovery when a live answered call is not required on every interaction.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Workflow adjacency",
          headline: "The generic missed-call page already proves the text-back pattern",
          body: "The site already explains how missed call text-back works across service businesses. This restaurant child page makes that pattern specific to reservation intent, guest expectations, and the practical line between a helpful text and a workflow that should really be a voice agent instead.",
          link: "/missed-call-follow-up-automation",
        },
      ],
      links: [
        { label: "Paris Cafe case study", href: "/case-studies/paris-cafe-voice-agent" },
        { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
        { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
        { label: "AI automation for restaurants", href: "/ai-automation-for-restaurants" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is missed call text-back better than a restaurant voice agent?",
      answer:
        "Not universally. Text-back is a lighter-weight fallback. It can be a smart first step when the real issue is missed calls and simple reservation recovery. A voice agent is stronger when you need live phone coverage, routine questions answered immediately, or real-time reservation capture on the call itself.",
    },
    {
      question: "What should the first restaurant text actually say?",
      answer:
        "Usually something short, direct, and useful — for example: 'Sorry we missed your call. How can we help?' or a reservation-specific variant. The goal is to continue the interaction naturally, not drop the guest into an obviously automated promo flow.",
    },
    {
      question: "Will guests actually text back about reservations?",
      answer:
        "Many do, especially for simple questions and straightforward booking intent. But this depends on the concept and the audience. If your guests strongly prefer live phone handling, a voice agent or human coverage may outperform text-back.",
    },
    {
      question: "How much does restaurant missed call text-back usually cost?",
      answer:
        "A focused workflow usually lands in the low-thousands depending on the phone system, SMS setup, routing logic, and whether booking links or CRM logging are included. The key comparison is against lost reservation demand and staff interruption cost, not message cost alone.",
    },
    {
      question: "When should a restaurant skip text-back and go straight to a voice agent?",
      answer:
        "If missed calls are constant, callers need live answers, reservation capture has to happen immediately on the phone, or the team wants true after-hours phone coverage instead of SMS-first recovery, a restaurant voice agent is usually the better fit.",
    },
  ],
  faqSubtitle:
    "Straight answers for restaurant owners deciding whether SMS-first missed-call recovery is enough",
  ctaHeading: "Want to stop losing reservation demand to missed calls?",
  ctaText:
    "Book a 30-minute call. We will look at where calls are being missed, whether text-back or a voice agent is the better fit, and what the narrowest useful restaurant phone-recovery workflow would look like for your setup.",
  ctaSubtext:
    "No restaurant-tech hype. Just a practical look at missed demand, guest communication, and the simplest system that would actually help.",
  relatedLinks: [
    { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
    { label: "AI automation for restaurants", href: "/ai-automation-for-restaurants" },
    { label: "Reservation confirmation and reminder automation", href: "/reservation-confirmation-and-reminder-automation-for-restaurants" },
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
  ],
};

export default data;
