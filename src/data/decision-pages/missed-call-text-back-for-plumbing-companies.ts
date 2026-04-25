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
  slug: "missed-call-text-back-for-plumbing-companies",
  metaTitle:
    "Missed Call Text-Back for Plumbing Companies — Recover Missed Plumbing Calls Before They Leak Away | Dmytro AI",
  metaDescription:
    "How plumbing companies use missed call text-back to recover missed service calls, protect after-hours demand, and stop losing plumbing jobs to voicemail, delayed callbacks, or overloaded dispatch.",
  badgeText: "Plumbing Workflow",
  badgeIcon: Wrench,
  h1: "Missed Call Text-Back for Plumbing Companies",
  heroIntro:
    "A lot of plumbing companies do not need a full live AI phone conversation on every inbound call. They need a tighter fallback when the line rings out because the dispatcher is juggling techs, the office is buried in callbacks, a plumber is under a sink instead of answering, or the call came after hours. Missed call text-back for plumbing companies is that narrow layer. The call is missed, a useful text goes out immediately, the homeowner gets a clear next step, and the job stays alive long enough to be recovered instead of leaking to the next plumber on Google. It sits between voicemail and full AI phone answering. Done well, it protects easy wins without pretending a text thread should replace every plumbing conversation.",
  heroSubtext:
    "Below: what a plumbing missed-call text-back workflow should actually do, how it stays distinct from the broader plumbing pages already live, where it works best, and what adjacent proof honestly supports it.",
  sections: [
    {
      type: "cards",
      title: "What plumbing missed-call text-back should actually handle",
      subtitle:
        "This page only makes sense if it stays tightly focused on the first-response recovery problem after a missed plumbing call:",
      items: [
        {
          icon: PhoneMissed,
          title: "Detect the missed call immediately",
          body: "The workflow should know the call was missed right away instead of waiting for someone to check voicemail later. Speed matters because a homeowner with an active leak or no hot water will often call the next plumber within minutes.",
        },
        {
          icon: MessageSquare,
          title: "Send a short, useful text",
          body: "The first text should acknowledge the missed call, sound like a real plumbing company, and offer one simple next step. It should not read like generic marketing automation or a long chatbot script.",
        },
        {
          icon: ClipboardCheck,
          title: "Capture just enough service context",
          body: "A good workflow can collect the basics — issue type, urgency, address context, preferred callback window, and whether the caller is dealing with a leak, drain issue, water heater problem, or scheduled service request — so the office is not calling back blind.",
        },
        {
          icon: CalendarCheck,
          title: "Recover straightforward booking intent",
          body: "If the caller just needs a callback, a service window, or a basic next step for a common plumbing request, the text flow should move them toward that next action while intent is still fresh.",
        },
        {
          icon: ArrowRightLeft,
          title: "Route real emergency or estimate conversations to a human",
          body: "Burst pipes, sewage backups, active flooding, price-sensitive repipe conversations, and anything requiring judgment should route back to a dispatcher or owner quickly instead of forcing every plumbing conversation into SMS.",
        },
        {
          icon: Clock3,
          title: "Protect after-hours demand without overpromising",
          body: "When a call comes in after close, a fast text is often enough to keep the lead warm until the office opens. That is different from promising full live phone coverage around the clock.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct from the other plumbing and phone pages",
      subtitle:
        "The workflow stays commercially useful only if the job boundary is clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for plumbing companies",
          values: [
            "Owners evaluating the full operating system across calls, lead follow-up, scheduling, estimate nurture, and reviews",
            "Explains the broader plumbing automation stack instead of the narrow missed-call recovery layer",
          ],
        },
        {
          label: "What to automate first for plumbing companies",
          values: [
            "Owners deciding which one plumbing workflow deserves to be the first build",
            "Compares missed-call recovery against lead follow-up, scheduling, estimate follow-up, and heavier phone coverage before a broader rollout",
          ],
        },
        {
          label: "Missed call text-back for plumbing companies",
          values: [
            "Plumbing companies that mainly need a fast fallback when calls are missed and are comfortable recovering easier inquiries by text or callback",
            "Sends an immediate text next step after the missed call, keeps plumbing demand alive, and routes exceptions back to the office or owner",
          ],
        },
        {
          label: "AI phone answering for service businesses",
          values: [
            "Businesses that need calls handled live more often, not just recovered after they are missed",
            "Covers live AI answering, transfer logic, and broader phone coverage instead of SMS-first fallback",
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
            "The company misses meaningful call volume during field work, dispatch spikes, or after hours",
            "A large share of missed calls are straightforward service requests, availability checks, or callback requests",
            "The office or owner can pick up the thread once the workflow has captured the basics",
            "You want a simpler and cheaper first fix than full live AI phone answering",
            "A fast text-back would materially outperform voicemail and callback lists",
            "You want to stop losing plumbing jobs without over-automating the whole office",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Most callers need immediate live triage because the call mix is heavily emergency-driven",
            "Your missed-call volume is high enough that live phone answering is clearly the better answer",
            "Nobody can reliably manage SMS replies or callback routing once responses come in",
            "Your biggest issue is weak demand, not missed calls",
            "You expect a text-back workflow to replace dispatch, field judgment, or every plumbing conversation end to end",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for plumbing missed-call recovery",
      subtitle:
        "This workflow works when it is narrow and operationally honest. It fails when it pretends a text thread can replace dispatch judgment.",
      items: [
        {
          icon: AlertTriangle,
          title: "Keep the first text short and useful",
          body: "The message should acknowledge the missed call and offer one clear next step. Homeowners who just called about a plumbing issue do not want a long autoresponder about your brand story.",
        },
        {
          icon: PhoneCall,
          title: "Know when a human needs to step in fast",
          body: "Active leaks, sewage issues, no-heat/no-hot-water urgency, commercial-service complexity, and price-sensitive estimate conversations often need a dispatcher or owner sooner rather than later. The workflow should surface those cases quickly instead of trapping them in SMS limbo.",
        },
        {
          icon: Route,
          title: "Give the office visibility instead of another inbox mess",
          body: "Missed calls, replies, callback status, and unresolved threads should land somewhere the team already works. Otherwise you just trade voicemail chaos for text-message chaos.",
        },
        {
          icon: Bot,
          title: "Use automation for structure, not fake diagnosis",
          body: "Automation can acknowledge the missed call, collect simple intake context, and route the next step. It should not pretend to diagnose a sewer issue or quote a repipe from one text thread.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical plumbing missed-call text-back workflow usually works",
      subtitle:
        "The clean version is simple: detect the miss, send the text, collect the next useful detail, and move real plumbing conversations back to a human when needed.",
      blocks: [
        {
          heading: "The call is missed and the text goes out right away",
          body: "The homeowner should hear from the company within seconds, not later that afternoon after somebody notices a voicemail. That is what keeps plumbing intent alive before the caller moves on.",
        },
        {
          heading: "The caller gets a plumbing-specific next step",
          body: "Depending on the setup, that might be a prompt to reply with the issue, request a callback, share urgency, or confirm a preferred time window. The point is clarity, not complexity.",
        },
        {
          heading: "The office gets context instead of a mystery callback",
          body: "If the workflow captures the issue type, urgency, and timing first, the dispatcher or owner can step in with a better callback or text response instead of starting from zero.",
        },
        {
          heading: "The company sees where calls are still leaking",
          body: "Over time you can tell whether the real problem is after-hours demand, overloaded dispatch, field-tech coverage gaps, or callers who really need live answering. That makes the workflow useful as both a recovery layer and an operating diagnosis tool.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published plumbing-only missed-call text-back case study yet. The honest proof frame is adjacent: the live plumbing parent page, the plumbing first-project page, the broader missed-call recovery guide, and the restaurant phone-demand case study that proves the value of recovering missed inbound calls quickly.",
      studies: [
        {
          industry: "Plumbing parent page",
          headline: "The broader plumbing guide already treats missed calls as one of the clearest revenue-leak points in the business",
          body: "That page explains why plumbing companies lose work across calls, first response, scheduling, estimates, and reviews. This child page narrows the opening problem to one layer: what happens when the company simply does not answer fast enough.",
          link: "/ai-automation-for-plumbing-companies",
        },
        {
          industry: "First-project scoping proof",
          headline: "The plumbing first-project page already isolates missed-call recovery as a clean first automation candidate",
          body: "That scoping page compares missed-call recovery against lead follow-up, scheduling, estimate follow-up, and heavier after-hours phone coverage. This child page goes one level deeper on the lighter phone-recovery workflow itself.",
          link: "/what-to-automate-first-for-plumbing-companies",
        },
        {
          industry: "Phone-demand proof",
          headline: "Paris Cafe proves the business value of not letting missed inbound demand die",
          body: "The restaurant case study is not a plumbing example, but it does prove the commercial value of recovering missed inbound calls quickly. This page narrows that same operating reality to plumbing companies where missed calls often mean lost same-day service, estimate opportunities, and after-hours demand.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
        { label: "What to automate first for plumbing companies", href: "/what-to-automate-first-for-plumbing-companies" },
        { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is missed call text-back enough for most plumbing companies?",
      answer:
        "Sometimes. It is often the right first step when the main problem is unanswered calls and a lot of those callers only need a quick reply, callback, or simple next step. If callers regularly need immediate live triage or your missed-call volume is very high, live AI phone answering may be the better fit.",
    },
    {
      question: "What should the first plumbing text actually say?",
      answer:
        "Usually something short and direct, like an acknowledgement that the company missed the call plus a prompt to reply with the issue or request a callback. The strongest first text feels like a useful fallback, not a marketing campaign.",
    },
    {
      question: "How is this different from the broader plumbing automation page?",
      answer:
        "The broader plumbing page explains the full operating layer across calls, lead follow-up, scheduling, estimate nurture, and reviews. This page stays specific to one workflow: what happens right after a plumbing call is missed and how to recover that demand quickly.",
    },
    {
      question: "What does a focused plumbing missed-call text-back build usually cost?",
      answer:
        "A focused workflow usually lands around $1K-$2.5K depending on the phone setup, where replies need to route, whether callback triage is included, and how much CRM or scheduling cleanup is needed first. Broader live phone coverage or shop-wide automation costs more.",
    },
    {
      question: "When should a plumbing company skip text-back and go straight to live AI phone answering?",
      answer:
        "If the company misses a lot of calls, callers need live answers more often, after-hours urgency is high, or callback delays are still costing too much even with SMS-first recovery, live AI phone answering may be the better next step.",
    },
  ],
  faqSubtitle:
    "Straight answers for plumbing owners deciding whether SMS-first missed-call recovery is enough",
  ctaHeading: "Want to stop losing plumbing jobs to missed calls?",
  ctaText:
    "Book a 30-minute call. We will look at where your company is missing calls, whether missed-call text-back is enough or live AI phone answering makes more sense, and what the narrowest useful recovery workflow would look like for your setup.",
  ctaSubtext:
    "No fake fully autonomous plumbing-office pitch. Just a practical recommendation based on missed demand, dispatch workload, and how your current calls really get handled.",
  relatedLinks: [
    { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
    { label: "What to automate first for plumbing companies", href: "/what-to-automate-first-for-plumbing-companies" },
    { label: "Estimate follow-up automation for plumbing companies", href: "/estimate-follow-up-automation-for-plumbing-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
