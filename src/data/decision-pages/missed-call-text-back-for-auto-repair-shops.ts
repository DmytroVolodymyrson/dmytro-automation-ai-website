import {
  Wrench,
  PhoneMissed,
  MessageSquare,
  Clock3,
  CheckCircle2,
  XCircle,
  PhoneCall,
  CalendarCheck,
  ArrowRightLeft,
  ClipboardCheck,
  Route,
  Bot,
  AlertTriangle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-for-auto-repair-shops",
  metaTitle:
    "Missed Call Text-Back for Auto Repair Shops — Recover Missed Repair Demand Before It Dies | Dmytro AI",
  metaDescription:
    "How auto repair shops use missed call text-back to recover missed repair demand, send a fast next step, and stop losing calls to voicemail, late callbacks, or overloaded service advisors.",
  badgeText: "Auto Repair Workflow",
  badgeIcon: Wrench,
  h1: "Missed Call Text-Back for Auto Repair Shops",
  heroIntro:
    "A lot of repair shops do not need a full AI phone conversation on every inbound call. They need a tighter fallback when the line rings out because the service advisor is with a customer, the bays are loud, lunch coverage is thin, or the call came after hours. Missed call text-back for auto repair shops is that narrow layer. The call is missed, a useful text goes out immediately, the customer gets a clear next step, and repair demand stays alive long enough to be recovered instead of slipping to the next shop on Google. It sits between voicemail and full AI phone answering. Done well, it protects easy wins without pretending SMS should replace every service conversation.",
  heroSubtext:
    "Below: what a repair-shop missed-call text-back workflow should actually do, how it differs from broader auto-repair and phone-answering pages, where it works best, and what adjacent proof honestly supports it.",
  sections: [
    {
      type: "cards",
      title: "What auto-repair missed-call text-back should actually handle",
      subtitle:
        "This page only makes sense if it stays tightly focused on the first-response recovery problem after a missed call:",
      items: [
        {
          icon: PhoneMissed,
          title: "Detect the missed call immediately",
          body: "The workflow should know the call was missed right away instead of waiting for someone to check voicemail later. Speed matters because an urgent caller will often try the next shop within minutes.",
        },
        {
          icon: MessageSquare,
          title: "Send a clear, human-sounding text",
          body: "The first text should acknowledge the missed call, sound like a real shop, and give the customer a simple next step. It should not read like generic marketing automation.",
        },
        {
          icon: CalendarCheck,
          title: "Recover straightforward appointment intent",
          body: "If the caller wanted to book an oil change, ask about availability, confirm a drop-off window, or check whether the shop can look at a common issue, the text flow should move them toward the next useful step while the intent is still fresh.",
        },
        {
          icon: ClipboardCheck,
          title: "Collect just enough context for advisor follow-up",
          body: "A good workflow can grab the basics — service needed, urgency, preferred time, vehicle context — so the service advisor is not calling back blind later.",
        },
        {
          icon: ArrowRightLeft,
          title: "Route real repair conversations back to a human",
          body: "Diagnostic uncertainty, towing situations, warranty questions, angry customers, and anything with nuance should route back to the advisor quickly instead of forcing every repair conversation into SMS.",
        },
        {
          icon: Clock3,
          title: "Protect after-hours demand without promising too much",
          body: "When a customer calls after close, a fast text is often enough to keep them engaged until the shop opens. That is different from promising full live phone coverage around the clock.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct from the other auto-repair and phone pages",
      subtitle:
        "The workflow stays commercially useful only if the job boundary is clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for auto repair shops",
          values: [
            "Owners evaluating the full operating system across calls, estimates, reminders, reactivation, and reviews",
            "Explains the broader automation stack for the whole shop rather than the narrow missed-call recovery layer",
          ],
        },
        {
          label: "Missed call text-back for auto repair shops",
          values: [
            "Repair shops that mainly need a fast fallback when calls are missed and are comfortable recovering easier inquiries by text or advisor callback",
            "Sends an immediate text next step after the missed call, keeps repair demand alive, and routes exceptions back to the service advisor",
          ],
        },
        {
          label: "Missed call follow-up automation",
          values: [
            "Businesses comparing the general missed-call recovery pattern across industries",
            "Explains generic text-back mechanics without repair-shop specifics like service-advisor workload, diagnostic ambiguity, and drop-off scheduling",
          ],
        },
        {
          label: "AI phone answering for service businesses",
          values: [
            "Businesses that need calls handled live more often, not just recovered after they are missed",
            "Covers live AI answering, call routing, and broader phone coverage instead of SMS-first fallback",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this is a good fit and when it is not",
      subtitle:
        "Missed-call text-back is strongest when the real problem is lost first-response demand, not the total absence of phone coverage:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "The shop misses meaningful call volume during busy service periods or after hours",
            "A large share of missed calls are straightforward booking, availability, or basic service-intake questions",
            "The service advisor can pick up the thread once the workflow has captured the basics",
            "You want a simpler and cheaper first fix than full live AI phone answering",
            "A fast text-back would materially outperform voicemail and manual callback lists",
            "You want to reduce lost calls without over-automating the whole front desk",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Most callers need complex live troubleshooting before they will book",
            "Your missed-call volume is high enough that live phone answering is clearly the better answer",
            "The team cannot manage SMS follow-up or callback routing reliably once replies come in",
            "Your biggest issue is weak demand, not missed calls",
            "You expect a text-back workflow to replace service advisors or handle every repair conversation end to end",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for repair-shop missed-call recovery",
      subtitle:
        "This workflow works when it is narrow and operationally honest. It fails when it pretends a text thread can replace a real advisor.",
      items: [
        {
          icon: AlertTriangle,
          title: "Keep the first text short and useful",
          body: "The message should acknowledge the missed call and offer one clear next step. Repair customers who just called do not want a long autoresponder about your brand story.",
        },
        {
          icon: PhoneCall,
          title: "Know when the advisor needs to step in fast",
          body: "Breakdown calls, tow situations, complex diagnostics, complaints, and price-sensitive repair conversations often need a human sooner rather than later. The workflow should surface those cases quickly instead of trapping them in SMS limbo.",
        },
        {
          icon: Route,
          title: "Give the team visibility instead of another inbox mess",
          body: "Missed calls, customer replies, callback status, and unresolved threads should land somewhere the advisor actually uses. Otherwise you just trade voicemail chaos for text-message chaos.",
        },
        {
          icon: Bot,
          title: "Use automation for structure, not fake diagnosis",
          body: "Automation can acknowledge the missed call, collect simple intake context, and route the next step. It should not pretend to diagnose a noisy engine or estimate repair scope from one text message.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical auto-repair missed-call text-back workflow usually works",
      subtitle:
        "The clean version is simple: detect the miss, send the text, collect the next useful detail, and move the real repair conversation back to a human when needed.",
      blocks: [
        {
          heading: "The call is missed and the text goes out right away",
          body: "The customer should hear from the shop within seconds, not later that afternoon after somebody notices a voicemail. That is what keeps repair intent alive before the caller moves on.",
        },
        {
          heading: "The customer gets a repair-oriented next step",
          body: "Depending on the setup, that might be a prompt to reply with the needed service, request a callback, choose a booking link, or confirm a preferred drop-off window. The point is clarity, not complexity.",
        },
        {
          heading: "The advisor gets context instead of a mystery callback",
          body: "If the workflow captures the basic issue, timing, and urgency first, the service advisor can step in with a better callback or text response instead of starting from zero.",
        },
        {
          heading: "The shop sees where calls are still leaking",
          body: "Over time you can tell whether the real problem is after-hours demand, lunchtime coverage gaps, overloaded advisors, or callers who really need live answering. That makes the workflow useful as both a recovery layer and an operating diagnosis tool.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published auto-repair-only missed-call text-back case study yet. The honest proof frame is adjacent: the live auto-repair parent page, the broader missed-call recovery guide, and the restaurant phone-demand case study that proves the commercial value of recovering missed inbound calls quickly.",
      studies: [
        {
          industry: "Auto-repair parent page",
          headline: "The broader auto-repair guide already treats missed calls as one of the clearest revenue-leak points in the shop",
          body: "That page explains why repair shops lose money across calls, estimates, reminders, and reactivation. This child page narrows the opening problem to one layer: what happens when the shop simply does not answer fast enough.",
          link: "/ai-automation-for-auto-repair-shops",
        },
        {
          industry: "Workflow adjacency",
          headline: "The generic missed-call guide already proves the text-back pattern",
          body: "The site already explains the missed-call text-back workflow for service businesses broadly. This auto-repair child grounds that same pattern in service-advisor workload, repair intake, and the difference between a useful fallback and live phone coverage.",
          link: "/missed-call-follow-up-automation",
        },
        {
          industry: "Phone-demand proof",
          headline: "Paris Cafe proves the value of recovering missed inbound demand quickly",
          body: "The restaurant case study is not an auto-repair example, but it does prove the business value of not letting missed inbound calls die. This page narrows that same operating reality to repair shops where missed calls often mean lost diagnostics, service appointments, and estimate opportunities.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for auto repair shops", href: "/ai-automation-for-auto-repair-shops" },
        { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "View case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is missed call text-back enough for most auto repair shops?",
      answer:
        "Sometimes. It is often the right first step when the main problem is unanswered calls and a lot of those callers only need a simple next step, callback, or booking path. If callers regularly need live troubleshooting or your missed-call volume is very high, live AI phone answering or stronger front-desk coverage may be the better fit.",
    },
    {
      question: "What should the first repair-shop text actually say?",
      answer:
        "Usually something short and direct, like an acknowledgement that the shop missed the call plus a prompt to reply with the service needed or request a callback. The strongest first text feels like a helpful fallback, not a marketing campaign.",
    },
    {
      question: "How is this different from the broader missed-call page?",
      answer:
        "The broader missed-call page is a cross-industry workflow guide. This auto-repair page stays specific to repair-shop realities: busy service advisors, diagnostic ambiguity, drop-off scheduling, and when the text thread should stop and hand the conversation back to a human.",
    },
    {
      question: "What does a focused auto-repair missed-call text-back build usually cost?",
      answer:
        "A focused workflow usually lands around $1K-$2.5K depending on the phone setup, where replies need to route, whether callback triage is included, and how much CRM or scheduling cleanup is needed first. Broader phone-answering or shop-wide automation costs more.",
    },
    {
      question: "When should a repair shop skip text-back and go straight to live AI phone answering?",
      answer:
        "If the shop misses a lot of calls, callers need live answers more often, the team wants after-hours call handling rather than simple demand recovery, or the business is already losing too much from callback delays, live AI phone answering may be the better next step.",
    },
  ],
  faqSubtitle:
    "Straight answers for shop owners deciding whether SMS-first missed-call recovery is enough",
  ctaHeading: "Want to stop losing repair jobs to missed calls?",
  ctaText:
    "Book a 30-minute call. We will look at where your shop is missing calls, whether missed-call text-back is enough or live AI phone answering makes more sense, and what the narrowest useful recovery workflow would look like for your setup.",
  ctaSubtext:
    "No fake fully autonomous shop pitch. Just a practical recommendation based on missed demand, advisor workload, and how your current calls really get handled.",
  relatedLinks: [
    { label: "AI automation for auto repair shops", href: "/ai-automation-for-auto-repair-shops" },
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "Appointment scheduling and reminder automation for auto repair shops", href: "/appointment-scheduling-and-reminder-automation-for-auto-repair-shops" },
  ],
};

export default data;
