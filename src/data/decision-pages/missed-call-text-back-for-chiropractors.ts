import {
  Heart,
  PhoneMissed,
  MessageSquare,
  ClipboardCheck,
  CalendarCheck,
  ArrowRightLeft,
  Clock3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Phone,
  Bot,
  FileText,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-for-chiropractors",
  metaTitle:
    "Missed Call Text-Back for Chiropractors — Recover New Patient Calls Before They Go Cold | Dmytro AI",
  metaDescription:
    "Missed call text-back for chiropractors. Fast SMS-first recovery for unanswered new-patient calls, lighter than live AI phone answering, and better than passive voicemail when front-desk overload or after-hours demand is costing bookings.",
  badgeText: "Chiropractic Workflow",
  badgeIcon: Heart,
  h1: "Missed Call Text-Back for Chiropractors",
  heroIntro:
    "Some chiropractic practices do not need full live phone answering yet. They need a lighter recovery layer for the calls that still get missed during lunch, while the front desk is checking someone out, when the doctor is with a patient, or after the office closes. That is what missed-call text-back is for. The call is missed, a useful text goes out immediately, the prospective patient gets a clear next step, and the office gets enough context to call back fast before the person books somewhere else. For many chiropractors, this is the middle layer between passive voicemail and heavier live AI phone coverage: faster than next-day callbacks, simpler than answering every call live, and often enough to stop the practice from leaking warm new-patient demand during the busiest parts of the day.",
  heroSubtext:
    "Below: what a practical chiropractic missed-call text-back workflow should actually do, how it stays distinct from the broader chiropractor page and the new live-answering child, what proof honestly supports it, and when SMS-first recovery is enough versus when the practice has already outgrown it.",
  sections: [
    {
      type: "cards",
      title: "What chiropractic missed-call text-back should actually handle",
      subtitle:
        "This page only works if it stays tightly on the first-response recovery layer after the call is missed:",
      items: [
        {
          icon: PhoneMissed,
          title: "Detect the missed call immediately",
          body: "A chiropractic prospect who calls about a first visit, pain flare-up, or insurance question usually is not waiting around forever. The workflow should react right away instead of depending on someone to notice a missed call later between patients.",
        },
        {
          icon: MessageSquare,
          title: "Send a short text that sounds like a real office",
          body: "The first message should identify the practice, acknowledge the missed call, and offer one practical next step. It should feel like quick follow-through from a busy front desk, not a generic marketing autoresponder.",
        },
        {
          icon: ClipboardCheck,
          title: "Capture just enough intake context for a better callback",
          body: "A strong workflow can gather the basics that actually help the office call back well: new versus returning patient, reason for the visit, callback timing, and whether the question is about scheduling, first-visit logistics, or something that should route elsewhere.",
        },
        {
          icon: CalendarCheck,
          title: "Keep first-visit interest warm while staff are tied up",
          body: "Many chiropractic callers mainly need proof that the office saw the call and will respond fast. A useful text keeps the conversation alive while the front desk is busy instead of letting the lead assume nobody is available.",
        },
        {
          icon: ArrowRightLeft,
          title: "Route real booking intent back to a human quickly",
          body: "If the patient is ready to book, needs a callback, or has a scheduling question that should not sit in SMS for long, the workflow should move the conversation back to staff quickly. The job is to protect demand, not trap a real booking inside automation.",
        },
        {
          icon: Clock3,
          title: "Protect after-hours demand without pretending to answer live",
          body: "Text-back can stop an after-hours inquiry from disappearing overnight. That is different from claiming the office now has full live phone coverage at all times. This page is about the lighter fallback layer, not the heavier live-answering layer.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct from the rest of the chiropractic cluster",
      subtitle:
        "The page only earns its place if the workflow boundary is obvious:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for chiropractors",
          values: [
            "Practice owners evaluating the full chiropractic operating layer across intake, scheduling, recall, no-shows, reviews, and phone handling",
            "Explains the broader automation system instead of isolating the narrow phone-recovery layer that begins only after a call is missed",
          ],
        },
        {
          label: "What to automate first for chiropractors",
          values: [
            "Owners deciding whether the first project should be missed-call recovery, intake and scheduling, recall, no-show reduction, or after-hours call handling",
            "Helps choose the first workflow rather than showing how one specific missed-call workflow should actually operate",
          ],
        },
        {
          label: "Missed call text-back for chiropractors",
          values: [
            "Practices that mainly need a fast fallback when new-patient or scheduling calls are missed and a useful text plus callback path would outperform voicemail",
            "Sends an immediate text next step after the miss, captures lightweight intake context, and routes real booking conversations back to staff fast",
          ],
        },
        {
          label: "AI phone answering for chiropractors",
          values: [
            "Practices that have already outgrown voicemail and simple text-back because callers often need a real answer live",
            "Covers the heavier live phone layer instead of the lighter SMS-first recovery layer that buys time until staff can step back in",
          ],
        },
        {
          label: "Missed call follow-up automation",
          values: [
            "Businesses comparing the generic missed-call recovery pattern across industries",
            "Explains the broad SMS-first recovery pattern without chiropractic-specific realities like new-patient booking urgency, front-desk overload, and after-hours first-visit demand",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When chiropractic missed-call text-back is a good fit — and when it is not",
      subtitle:
        "This is strongest when the main leak is unanswered inbound demand, not the total absence of live phone coverage:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "The office regularly misses new-patient calls because staff are with patients or working through checkout and scheduling",
            "A meaningful share of missed calls are straightforward enough that acknowledgement plus a callback path is better than passive voicemail",
            "You want a simpler first fix than full live AI phone answering",
            "The practice can call back quickly once the workflow captures the basics",
            "You lose bookings because slow first response makes the office look unavailable or disorganized",
            "After-hours demand matters, but you are not ready for the heavier live-answering layer yet",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Most callers need an answer live because the office already knows voicemail and text-back are too slow",
            "The front desk already returns missed calls quickly and consistently during operating hours",
            "Missed-call volume is high enough that full live phone coverage is clearly the better next step",
            "Nobody owns reply routing or callbacks once prospective patients text back",
            "The bigger leak is still intake friction after contact or weak care-plan recall later in the patient lifecycle",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep chiropractic missed-call recovery useful",
      subtitle:
        "This workflow works when it stays narrow and operationally honest. It fails when it tries to become fake front-desk theater.",
      items: [
        {
          icon: AlertTriangle,
          title: "Keep the first text short and useful",
          body: "The best opener acknowledges the missed call and gives one clear next step. A prospective patient in pain or someone trying to schedule a first visit does not want a long scripted funnel before they know a real office saw the call.",
        },
        {
          icon: FileText,
          title: "Only collect details that make the callback better",
          body: "Name, new-versus-returning status, callback window, and a simple reason for the visit are usually enough. The workflow should not force a full intake packet over text before anyone at the office has stepped in.",
        },
        {
          icon: ArrowRightLeft,
          title: "Put replies where staff already work",
          body: "Missed calls, text replies, callback ownership, and unresolved threads need to land in the scheduling or communication systems the office already checks. Otherwise you just swap voicemail blindness for another ignored inbox.",
        },
        {
          icon: Bot,
          title: "Use automation for structure, not fake clinical certainty",
          body: "Automation can acknowledge the missed call, collect a few basics, and move the patient to the next step. It should not pretend to answer clinical, billing, or insurance edge cases it should be routing back to staff.",
        },
        {
          icon: Phone,
          title: "Treat text-back as the middle layer, not the final layer",
          body: "For many chiropractors, missed-call text-back is the practical middle step between passive voicemail and heavier live AI answering. If the practice keeps outgrowing it, that is useful operating evidence — not failure.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical chiropractic missed-call text-back workflow usually works",
      subtitle:
        "The clean version is simple: detect the miss, send the text, capture the next useful detail, and move the real booking conversation back to a human when context exists.",
      blocks: [
        {
          heading: "The missed call triggers an immediate office-branded text",
          body: "That fast acknowledgement is what keeps the caller from assuming the practice is unavailable and moving on. In chiropractic, speed matters because people often call a few clinics in a row and go with the first office that feels responsive.",
        },
        {
          heading: "The patient gets one chiropractic-specific next step",
          body: "Depending on the setup, that may mean replying whether they are a new or returning patient, sharing the best callback time, or confirming they want help booking a first visit. The point is clarity, not a complicated SMS script.",
        },
        {
          heading: "The front desk gets context instead of another vague callback list",
          body: "When the workflow captures the basics first, staff inherit a callback with enough context to respond confidently. That makes the office feel organized even though nobody answered live in the moment.",
        },
        {
          heading: "Over time the office learns whether text-back is still enough",
          body: "If this lighter layer protects most missed opportunities, great. If too many callers still need a real answer immediately, the same call pattern helps you justify whether the next step should be live AI phone answering instead of guessing.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake chiropractor-only missed-call text-back case study here. The support comes from the live chiropractor cluster, the generic missed-call guide, the new live-answering child that now defines the heavier phone layer, and the published call-handling case study.",
      studies: [
        {
          industry: "Chiropractic parent + scoping pages",
          headline: "The live chiropractor cluster already identifies missed-call recovery as one of the clearest first workflow leaks in the practice",
          body: "The broader chiropractor guide names missed-call text-back directly, and the first-project page already compares missed-call recovery against intake, recall, no-show reduction, and after-hours handling. This child narrows that existing logic to one bounded phone workflow instead of inventing a new unsupported angle.",
          link: "/what-to-automate-first-for-chiropractors",
        },
        {
          industry: "Published call-handling proof",
          headline: "Paris Cafe proves the core business lesson: when nobody responds, the opportunity goes somewhere else",
          body: "A restaurant and a chiropractic office are different, but the phone lesson is the same. Unanswered inbound demand leaks fast. For chiropractors, the same leak shows up when prospective patients call during lunch, while staff are busy, or after hours.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Adjacent phone-layer proof",
          headline: "The live phone-answering child now cleanly defines the heavier layer this page does not try to replace",
          body: "The new chiropractic live-answering page makes this child safer, not weaker. It gives the cluster a clear heavier phone layer so this page can stay honest about being the lighter SMS-first recovery layer between voicemail and live answering.",
          link: "/ai-phone-answering-for-chiropractors",
        },
      ],
      links: [
        {
          label: "AI automation for chiropractors",
          href: "/ai-automation-for-chiropractors",
        },
        {
          label: "What to automate first for chiropractors",
          href: "/what-to-automate-first-for-chiropractors",
        },
        {
          label: "Missed call follow-up automation",
          href: "/missed-call-follow-up-automation",
        },
        {
          label: "AI phone answering for chiropractors",
          href: "/ai-phone-answering-for-chiropractors",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from AI phone answering for chiropractors?",
      answer:
        "Missed-call text-back is the lighter layer. The office already missed the call, then automation responds fast by text and helps staff call back with context. AI phone answering is the heavier layer that answers live in the moment and handles more routine conversations before handoff.",
    },
    {
      question: "What should the first chiropractic text actually say?",
      answer:
        "Usually something short and direct: acknowledge the missed call, identify the practice, and offer one clear next step such as replying whether they are a new patient and the best callback time. The best text feels like quick front-desk follow-through, not marketing copy.",
    },
    {
      question: "Is this enough for most chiropractic practices?",
      answer:
        "Sometimes. It is often the right first step when the main leak is missed calls during busy hours or after close and many callers only need quick acknowledgement plus a callback path before a human takes over. If callers regularly need a live answer immediately, the practice may already need the heavier live-answering layer.",
    },
    {
      question: "What does a focused chiropractic missed-call text-back build usually cost?",
      answer:
        "A focused workflow usually lands around $1K-$2K depending on the phone setup, where replies need to route, whether CRM logging or callback triage is included, and how much cleanup is needed first. Broader chiropractic automation or live-answering systems cost more.",
    },
    {
      question: "When should a chiropractor skip text-back and go straight to live answering?",
      answer:
        "Go straight to live answering when voicemail and SMS are obviously too slow, when new-patient callers frequently need real-time help before they will stay engaged, or when call volume is high enough that the office keeps losing good opportunities even after adding a text-back layer.",
    },
  ],
  faqSubtitle:
    "Practical questions about missed-call text-back for chiropractors",
  ctaHeading: "Need a lighter phone-recovery layer before you add full live answering?",
  ctaText:
    "Book a 30-minute call. We will look at how your practice handles missed calls today, where new-patient demand is leaking, and whether a focused text-back workflow is enough or whether you have already outgrown it into live AI phone coverage.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about protecting more inbound patient demand.",
  relatedLinks: [
    {
      label: "AI automation for chiropractors",
      href: "/ai-automation-for-chiropractors",
    },
    {
      label: "What to automate first for chiropractors",
      href: "/what-to-automate-first-for-chiropractors",
    },
    {
      label: "AI phone answering for chiropractors",
      href: "/ai-phone-answering-for-chiropractors",
    },
    {
      label: "Missed call follow-up automation",
      href: "/missed-call-follow-up-automation",
    },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
