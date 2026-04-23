import {
  Scale,
  UtensilsCrossed,
  Bot,
  Voicemail,
  MessageSquare,
  CalendarCheck,
  DollarSign,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Phone,
  Moon,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "after-hours-ai-phone-answering-vs-voicemail-for-restaurants",
  metaTitle:
    "After-Hours AI Phone Answering vs. Voicemail for Restaurants | Dmytro AI",
  metaDescription:
    "Should a restaurant keep sending after-hours callers to voicemail or answer with AI? Practical comparison of booking recovery, guest experience, staffing reality, and when lighter fallback options are enough.",
  badgeText: "Restaurant Comparison",
  badgeIcon: Scale,
  h1: "After-Hours AI Phone Answering vs. Voicemail for Restaurants",
  heroIntro:
    "If your restaurant gets meaningful reservation calls after close, voicemail is usually not a neutral fallback. It is a delayed-response bet: the guest has to leave a message, your team has to call back in time, and the booking opportunity has to survive until morning. After-hours AI phone answering changes that by giving the caller a live path immediately. The real decision is not whether AI sounds interesting. It is whether your after-hours demand is valuable enough that answering now beats asking the caller to wait.",
  heroSubtext:
    "Below: when overnight restaurant calls justify live AI phone coverage, when voicemail is still acceptable, how missed-call text-back fits as a lighter middle path, and what the Paris Cafe case study proves directly without pretending every restaurant needs the same stack.",
  sections: [
    {
      type: "cards",
      title: "What this decision is really about",
      subtitle:
        "Restaurant owners usually frame this as a tech choice. It is really an operations and conversion choice:",
      items: [
        {
          icon: Bot,
          title: "AI phone answering protects live booking intent",
          body: "The caller gets an answer immediately after close instead of a beep. That matters when the guest wants to book now, confirm a simple detail, or decide between your restaurant and another one before the moment passes.",
        },
        {
          icon: Voicemail,
          title: "Voicemail delays the whole decision",
          body: "Voicemail only works if the caller leaves a message and your team gets back fast enough the next day. For restaurants, that is often where reservation intent quietly dies, especially when the guest is still shopping around.",
        },
        {
          icon: MessageSquare,
          title: "Text-back is a real middle option",
          body: "Some restaurants do not need full live voice coverage. A missed-call text-back flow can still be the right first step when the problem is lighter overnight recovery rather than immediate on-call booking. That is why the comparison is not just AI vs. nothing.",
        },
        {
          icon: Moon,
          title: "After-hours demand has different economics",
          body: "Calls after close are not the same as daytime overflow. If your restaurant routinely gets reservation or event calls in the evening, the cost of waiting until morning is higher than most teams realize.",
        },
      ],
    },
    {
      type: "table",
      title: "After-hours AI phone answering vs. voicemail",
      subtitle:
        "This is the practical restaurant version of the decision — not a generic software comparison:",
      headers: ["After-hours AI phone answering", "Voicemail"],
      rows: [
        {
          label: "First response",
          values: [
            "Answers the caller live on the spot",
            "No response unless the guest leaves a message",
          ],
        },
        {
          label: "Reservation capture",
          values: [
            "Can handle straightforward bookings or capture clean next steps immediately",
            "Depends on callback the next day",
          ],
        },
        {
          label: "Guest experience",
          values: [
            "Feels like the restaurant is still reachable after close",
            "Feels like the caller has to do extra work and hope someone responds",
          ],
        },
        {
          label: "Best fit",
          values: [
            "Restaurants with meaningful after-hours call value and repeatable phone requests",
            "Restaurants where overnight call volume is genuinely low or online booking already handles demand",
          ],
        },
        {
          label: "Cost profile",
          values: [
            "Higher setup and operating cost, lower lost-demand cost",
            "Lower direct cost, higher risk of lost bookings",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When the restaurant expects AI to replace nuanced hospitality with no guardrails",
            "When after-hours callers expect answers now and competitors are easier to reach",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "The safest move is choosing the smallest overnight phone layer that actually protects demand:",
      options: [
        {
          icon: Bot,
          heading: "Choose after-hours AI phone answering when...",
          highlighted: true,
          items: [
            "A meaningful share of reservation or event calls happens after close",
            "Guests often need a live answer or immediate booking path instead of a callback tomorrow",
            "The restaurant loses real revenue when the first response is delayed",
            "Managers are tired of starting the morning with voicemail cleanup and unclear caller intent",
            "A lighter text-back fallback is no longer enough for the type of calls coming in",
          ],
        },
        {
          icon: Voicemail,
          heading: "Keep voicemail when...",
          highlighted: false,
          items: [
            "After-hours calls are rare and commercially minor",
            "Most bookings already come through online reservation software",
            "The concept is mostly walk-in and phone capture matters less",
            "Someone really does return overnight messages fast enough to avoid leakage",
            "The restaurant does not need another workflow layer yet",
          ],
        },
        {
          icon: MessageSquare,
          heading: "Use text-back as the middle path when...",
          highlighted: false,
          items: [
            "The restaurant needs something better than voicemail but is not ready for live AI coverage",
            "Many missed calls can be recovered with a fast SMS and clear next step",
            "Budget is tighter and the team wants a narrower first step",
            "Guests are likely to continue by text for simple reservation recovery",
            "The morning handoff process is disciplined enough to close the loop",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit and bad fit signals",
      subtitle:
        "This page only makes sense if voicemail is creating a real commercial leak after close:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit for live AI after hours",
          variant: "green",
          items: [
            "The restaurant regularly misses reservation calls after the dining room is closed",
            "One recovered table, event lead, or catering inquiry can cover the workflow cost quickly",
            "Callers need quick answers about hours, availability, reservations, or private events",
            "Management wants real after-hours coverage without paying for a full extra phone shift",
            "The restaurant already knows voicemail is not converting enough overnight demand",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Overnight phone demand is too low to justify another layer",
            "The bigger problem is weak demand overall, not missed after-hours response",
            "Most after-hours callers would be better served by online booking anyway",
            "The concept needs highly customized concierge-style handling for almost every caller",
            "The team expects AI to replace all hospitality judgment instead of handling the repeatable part cleanly",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The mistakes that make this decision expensive",
      subtitle:
        "Restaurants usually get this wrong in one of three ways:",
      items: [
        {
          icon: AlertTriangle,
          title: "Treating voicemail like a harmless default",
          body: "Voicemail feels cheap because the software line item is zero. But if after-hours callers are still trying to decide where to book, the real cost is the reservation demand that never survives the delay.",
        },
        {
          icon: Phone,
          title: "Buying live AI before proving the phone problem is real",
          body: "If after-hours volume is light, the smarter move may be staying with voicemail or using a narrower text-back fallback first. Not every restaurant needs full live AI coverage.",
        },
        {
          icon: CalendarCheck,
          title: "Ignoring the handoff after the call",
          body: "Live answering only helps if bookings are captured cleanly, event inquiries route to the right person, and the morning team sees exactly what happened overnight. Otherwise the chaos just moves to a different place.",
        },
        {
          icon: DollarSign,
          title: "Comparing software cost instead of booking economics",
          body: "The right question is not whether AI costs more than voicemail. It is whether the gap between live answered calls and next-day callbacks is expensive enough that paying for overnight coverage makes sense.",
        },
      ],
    },
    {
      type: "prose",
      title: "How to decide quickly",
      subtitle:
        "A practical restaurant owner can usually make this decision with three questions:",
      blocks: [
        {
          heading: "Do after-hours callers need answers now?",
          body: "If the guest mostly wants to know whether they can still book, whether private-event help is available, or whether a table request can move forward right away, live AI phone coverage has the stronger case.",
        },
        {
          heading: "What is one recovered booking actually worth?",
          body: "If one extra recovered table, event inquiry, or catering lead can cover the workflow cost quickly, the comparison starts to favor live answering instead of delayed callback.",
        },
        {
          heading: "Is a lighter fallback enough for now?",
          body: "If the phone problem is real but not severe, missed-call text-back may be the smarter first move. This page exists to separate that middle option from the harder AI-vs-voicemail decision instead of pretending every restaurant needs the same answer.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "The proof here comes from direct restaurant phone coverage results plus already-live adjacent guides in the same cluster:",
      studies: [
        {
          industry: "Restaurant proof",
          headline: "Paris Cafe proves that after-hours restaurant calls are worth answering",
          body: "The Paris Cafe deployment moved after-hours call coverage from 0% to 100%, reduced web lead response to under 60 seconds, and gave management back around 15 hours a week. That is direct proof that the after-hours phone problem is commercially real for a restaurant when demand exists.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Adjacent workflow proof",
          headline: "The live restaurant phone pages already define the fallback options",
          body: "The broader after-hours restaurant phone guide, the restaurant voice-agent page, and the restaurant missed-call text-back page already show the workflow choices. This comparison page isolates the narrower buyer decision: keep relying on voicemail, move to live AI answering, or use text-back as the lighter middle path.",
          link: "/after-hours-phone-answering-for-restaurants",
        },
      ],
      links: [
        { label: "Paris Cafe case study", href: "/case-studies/paris-cafe-voice-agent" },
        { label: "After-hours phone answering for restaurants", href: "/after-hours-phone-answering-for-restaurants" },
        { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
        { label: "Missed call text-back for restaurants", href: "/missed-call-text-back-for-restaurants" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the generic AI voice agent vs. voicemail page?",
      answer:
        "The generic page explains the broad service-business decision. This page is narrower. It focuses on the restaurant version of the problem: after-hours reservation demand, guest expectations after close, and whether voicemail is still acceptable when booking decisions are time-sensitive.",
    },
    {
      question: "When should a restaurant move from voicemail to live AI answering after hours?",
      answer:
        "When overnight callers still represent real reservation or event demand, when delayed callbacks are costing bookings, or when callers need live answers instead of a message box. If answering now changes whether the restaurant wins the booking, live AI starts to make sense.",
    },
    {
      question: "Is missed-call text-back a better first step than full AI phone answering?",
      answer:
        "Sometimes yes. If the phone problem is lighter and many missed calls can be recovered with a quick text, SMS-first recovery can be the better first move. This page is intentionally honest that the choice is not always live AI or nothing.",
    },
    {
      question: "Can this work with OpenTable, Resy, SevenRooms, or a simpler reservation process?",
      answer:
        "Usually yes, as long as the workflow knows whether to capture a request, complete a straightforward booking, or route the caller into a clear next step. The exact implementation depends on your reservation rules and how much the restaurant wants handled live after close.",
    },
    {
      question: "When should a restaurant ignore this entirely?",
      answer:
        "If after-hours calls are rare, online booking already handles demand well, or the concept does not depend on phone-based reservation capture, this may not deserve its own system yet. The page is for restaurants where voicemail is creating a real leak, not for forcing automation everywhere.",
    },
  ],
  faqSubtitle:
    "Straight answers for restaurant owners deciding whether voicemail is still good enough after close",
  ctaHeading: "Need a clearer answer than 'just use voicemail'?",
  ctaText:
    "Book a 30-minute call. We will look at your after-hours call pattern, what reservation demand is actually worth, and whether your restaurant needs live AI phone answering, a lighter text-back fallback, or no new layer at all.",
  ctaSubtext:
    "Practical guidance only. No restaurant-tech theater and no push toward a heavier system than you need.",
  relatedLinks: [
    { label: "After-hours phone answering for restaurants", href: "/after-hours-phone-answering-for-restaurants" },
    { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
    { label: "Missed call text-back for restaurants", href: "/missed-call-text-back-for-restaurants" },
    { label: "AI voice agent vs. voicemail", href: "/ai-voice-agent-vs-voicemail" },
  ],
};

export default data;
