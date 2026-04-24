import {
  Sparkles,
  PhoneMissed,
  MessageSquare,
  Clock3,
  CalendarCheck,
  ClipboardList,
  ArrowRightLeft,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Bot,
  PhoneCall,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-for-med-spas",
  metaTitle:
    "Missed Call Text-Back for Med Spas — Recover Consultation Demand Before It Goes Cold | Dmytro AI",
  metaDescription:
    "How med spas use missed-call text-back to recover consultation demand faster, beat voicemail lag, capture enough context for a real callback, and decide when SMS-first recovery is enough before moving to heavier live AI phone answering.",
  badgeText: "Med Spa Workflow",
  badgeIcon: Sparkles,
  h1: "Missed Call Text-Back for Med Spas",
  heroIntro:
    "Many med spa calls do not need a full live AI conversation. They need a fast, credible response before the prospective patient moves on. A consultation lead calls after work, during a busy treatment block, or while the front desk is juggling check-ins and nobody answers. Voicemail is usually too passive for that moment. Missed-call text-back is the lighter fallback layer between doing nothing and deploying full live AI phone coverage. The call is missed, a useful text goes out immediately, the patient gets a clear next step, and your team gets enough context to call back or book follow-up before the consultation request goes cold.",
  heroSubtext:
    "Below: what med spa missed-call text-back should actually handle, how it stays distinct from the broader med spa pages and the heavier live-answering page, what proof honestly supports it, and when the clinic has already outgrown SMS-first recovery into live phone coverage.",
  sections: [
    {
      type: "cards",
      title: "What med spa missed-call text-back should actually do",
      subtitle:
        "This page only earns its place if it stays tightly on the first-response recovery layer after the consultation call is missed:",
      items: [
        {
          icon: PhoneMissed,
          title: "Detect the missed consultation call immediately",
          body: "The whole point is speed. If the front desk misses a call during treatments, lunch, or after hours, the workflow should react right away instead of waiting for someone to work through voicemail later.",
        },
        {
          icon: MessageSquare,
          title: "Send a short text that sounds like a real clinic",
          body: "The first text should acknowledge the missed call, identify the med spa, and offer one clear next step. It should feel like fast front-desk follow-through, not a generic nurture sequence pasted onto a cosmetic clinic.",
        },
        {
          icon: ClipboardList,
          title: "Capture just enough intake context for a better callback",
          body: "A strong workflow can gather the basics that make the return call easier: treatment interest, whether the person is a new or existing patient, urgency, and the best callback window. That gives the front desk context instead of another blind callback.",
        },
        {
          icon: CalendarCheck,
          title: "Keep consultation intent alive while staff are busy",
          body: "Many callers mainly need proof that the clinic saw the request and will respond. A fast text keeps the consult opportunity warm while the team finishes treatments or catches up the next morning.",
        },
        {
          icon: ArrowRightLeft,
          title: "Route real buying intent back to a human quickly",
          body: "If the person wants pricing detail, has treatment-fit questions, or is ready to schedule, the conversation should move to a human quickly. The workflow should protect the opportunity, not trap a real consultation inside SMS automation.",
        },
        {
          icon: Clock3,
          title: "Protect after-hours demand without pretending the clinic has live phone coverage",
          body: "Text-back can be enough to stop a warm inquiry from disappearing overnight. That is different from claiming the clinic now offers full live answering or should automate every patient conversation end to end.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct from the rest of the med spa cluster",
      subtitle:
        "The workflow boundary has to stay obvious or the page collapses into the nearby med spa pages already live:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for med spas",
          values: [
            "Owners evaluating the whole med spa operating layer across lead follow-up, consultation booking, no-show reduction, treatment recall, and after-hours handling",
            "Explains the broader system instead of isolating the narrow phone-recovery layer that starts after one missed consultation call",
          ],
        },
        {
          label: "What to automate first for med spas",
          values: [
            "Owners deciding whether the first med spa workflow should be lead follow-up, booking flow, no-show reduction, treatment recall, or after-hours handling",
            "Helps choose the first workflow instead of explaining one specific missed-call recovery layer in detail",
          ],
        },
        {
          label: "Missed call text-back for med spas",
          values: [
            "Clinics that mainly need a fast fallback when consultation calls are missed and a simple text plus callback path would outperform voicemail",
            "Sends an immediate next-step text after the miss, captures lightweight intake context, and hands real conversations back to the front desk quickly",
          ],
        },
        {
          label: "AI phone answering for med spas",
          values: [
            "Clinics that already need live answers on the call because voicemail, callbacks, and lighter recovery workflows are no longer enough",
            "Covers the heavier live-answering layer rather than the lighter SMS-first fallback that buys time until staff can step in",
          ],
        },
        {
          label: "Consultation booking and reminder automation for med spas",
          values: [
            "Clinics where the bigger leak is friction after interest already exists and the consult needs to get confirmed and kept on the calendar",
            "Focuses on scheduling, confirmations, reminders, and reschedules after the patient is already in motion — not the first-response recovery step after the call was missed",
          ],
        },
        {
          label: "Missed call follow-up automation",
          values: [
            "Businesses comparing the generic text-back pattern across service industries",
            "Explains the broad missed-call recovery workflow without med-spa-specific realities like consultation shoppers, front-desk treatment blocks, and after-hours cosmetic inquiry behavior",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this is a good fit — and when it is not",
      subtitle:
        "Missed-call text-back is strongest when the clinic needs a lighter recovery layer instead of full live phone coverage:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "The clinic misses consultation calls because staff are tied up in treatments, check-ins, or after-hours gaps",
            "A meaningful share of missed calls only need fast acknowledgement plus a callback path to keep the consultation alive",
            "You want a simpler first fix than live AI phone answering",
            "The front desk can step back in once the workflow captures the basics",
            "Voicemail is quietly costing consults because prospective patients keep shopping while they wait",
            "After-hours demand matters, but you are not ready for a heavier live-answering build yet",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Most callers immediately need a live answer because they ask nuanced treatment, financing, or fit questions on the spot",
            "Your clinic already answers and routes calls reliably during the hours that matter",
            "Missed-call volume is high enough that full live phone coverage is clearly the better answer",
            "Nobody owns SMS replies or callbacks once prospects start texting back",
            "The bigger problem is weak demand generation, not missed calls or slow response",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep med spa missed-call recovery useful",
      subtitle:
        "This workflow works when it stays narrow, credible, and operationally honest.",
      items: [
        {
          icon: AlertTriangle,
          title: "Keep the first text short and useful",
          body: "A prospective patient asking about a consultation does not want a long script. The strongest opener acknowledges the missed call and offers one simple next step.",
        },
        {
          icon: Bot,
          title: "Do not fake treatment guidance over SMS",
          body: "Automation can acknowledge the missed call, capture a few basics, and route the next step. It should not pretend to settle treatment-fit, contraindication, financing, or pricing nuance without a human.",
        },
        {
          icon: ArrowRightLeft,
          title: "Put replies where the front desk already works",
          body: "Missed calls, text replies, and callback ownership need to land in the systems the clinic actually checks. Otherwise voicemail chaos just turns into texting chaos.",
        },
        {
          icon: PhoneCall,
          title: "Treat text-back as the middle layer, not the final layer",
          body: "For some med spas, text-back is the practical middle step between passive voicemail and heavier live AI phone answering. If the clinic keeps outgrowing it, that is a useful signal — not a failure.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical med spa missed-call text-back workflow usually works",
      subtitle:
        "The clean version is simple: detect the miss, send the text, capture the next useful detail, and move real consultation conversations back to a human fast.",
      blocks: [
        {
          heading: "The missed call triggers an immediate text",
          body: "That instant acknowledgement is what keeps the prospective patient from assuming the clinic is unavailable and calling the next med spa on the list.",
        },
        {
          heading: "The person gets one clear med-spa-specific next step",
          body: "Depending on the setup, that might mean replying with treatment interest, asking for a callback, or confirming the best consultation window. The goal is clarity, not a long automated intake interview over SMS.",
        },
        {
          heading: "The front desk gets context instead of a mystery callback",
          body: "When the workflow captures treatment interest, urgency, and callback preference first, the return call is faster and more useful. That makes the clinic feel responsive even though nobody answered live in the moment.",
        },
        {
          heading: "Over time the clinic learns whether text-back is still enough",
          body: "If the workflow protects most missed opportunities, great. If prospects still need a live answer more often, the same pattern helps you decide when to step up to live AI phone answering instead of guessing.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published med-spa-only missed-call text-back case study yet. The honest proof frame is the live med spa cluster plus direct adjacent phone-handling proof and the already-live heavier med spa phone page that proves this lighter layer is materially different.",
      studies: [
        {
          industry: "Med spa parent + scoping pages",
          headline: "The live med spa cluster already exposes after-hours inquiry handling as one of the clearest bounded workflow families in the vertical",
          body: "The broader parent page and the first-project page already isolate after-hours inquiry handling beside booking, no-shows, and treatment recall. This child narrows that existing logic to one lighter phone-recovery workflow instead of inventing a new unsupported angle.",
          link: "/what-to-automate-first-for-med-spas",
        },
        {
          industry: "Heavier med spa sibling proof",
          headline: "The live AI phone-answering page for med spas already proves the heavier phone layer exists and answers a different buyer question",
          body: "That page explains when the clinic has already outgrown voicemail, callbacks, and lighter fallback workflows. This page stays one layer earlier: what to do when the miss happens and a fast text plus callback path is still enough.",
          link: "/ai-phone-answering-for-med-spas",
        },
        {
          industry: "Generic missed-call proof",
          headline: "The generic missed-call guide already proves the broad SMS-first recovery pattern",
          body: "That page explains how immediate text-back works across service businesses. This med spa child grounds the same pattern in consultation intent, treatment-interest triage, and front-desk constraints unique to a clinic setting.",
          link: "/missed-call-follow-up-automation",
        },
        {
          industry: "Published call-handling proof",
          headline: "The Paris Cafe case study proves the business value of not letting inbound demand die when nobody answers live",
          body: "A restaurant is not a med spa, but the core lesson is directly relevant: when calls go unanswered, demand leaks. This page applies that same response-speed logic to consultation calls where voicemail and slow callbacks quietly lose booked consults.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
        { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
        { label: "AI phone answering for med spas", href: "/ai-phone-answering-for-med-spas" },
        { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is missed-call text-back enough for most med spas?",
      answer:
        "Sometimes. It is often the right first step when the main problem is missed consultation calls during treatments, front-desk overload, or after-hours inquiry windows and many callers mainly need acknowledgement plus a callback path before a human takes over. If callers regularly need live answers immediately or missed-call volume is very high, live AI phone answering may be the better fit.",
    },
    {
      question: "What should the first med spa text actually say?",
      answer:
        "Usually something short and direct: acknowledge the missed call, identify the clinic, and offer one clear next step such as replying with treatment interest or the best callback time. The strongest first text feels like fast professional follow-through, not marketing copy.",
    },
    {
      question: "How is this different from AI phone answering for med spas?",
      answer:
        "This page is about the lighter fallback after the call is already missed. The AI phone-answering page is about the heavier live-answering layer that handles the call in real time. Text-back buys time and protects intent. Live answering handles more of the conversation immediately.",
    },
    {
      question: "What does a focused med spa missed-call text-back build usually cost?",
      answer:
        "A focused workflow usually lands around $1K-$2.5K depending on the phone setup, where replies need to route, whether CRM logging or callback triage is included, and how much cleanup is needed first. Broader clinic automation or live-answering systems cost more.",
    },
    {
      question: "When should a med spa skip text-back and go straight to live answering?",
      answer:
        "If missed-call volume is high, callers need live answers more often, after-hours consultation demand matters a lot, or callback delays are already costing too much, live AI phone answering is usually the better next step. Text-back is strongest as a lighter first fix, not a forever answer for every phone problem.",
    },
  ],
  faqSubtitle:
    "Straight answers for med spa owners deciding whether SMS-first missed-call recovery is enough",
  ctaHeading: "Need a practical answer on missed-call recovery for your med spa?",
  ctaText:
    "Book a 30-minute call. We will look at your missed-call pattern, whether voicemail is quietly costing consult requests, and whether the next step should be a focused text-back workflow, heavier live answering, or no phone automation at all right now.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about how your clinic actually handles consultation calls today.",
  relatedLinks: [
    { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
    { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
    { label: "AI phone answering for med spas", href: "/ai-phone-answering-for-med-spas" },
    { label: "Consultation booking and reminder automation for med spas", href: "/consultation-booking-and-reminder-automation-for-med-spas" },
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
