import {
  Sun,
  PhoneMissed,
  MessageSquare,
  Clock3,
  CheckCircle2,
  XCircle,
  PhoneCall,
  ArrowRightLeft,
  ClipboardCheck,
  Home,
  Bot,
  AlertTriangle,
  CalendarCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-for-solar-companies",
  metaTitle:
    "Missed Call Text-Back for Solar Companies — Recover Qualification Calls Before They Go Cold | Dmytro AI",
  metaDescription:
    "How solar companies use missed-call text-back to recover homeowner qualification calls, beat voicemail lag, protect after-hours demand, and decide when SMS-first recovery is enough before moving to heavier live AI phone answering.",
  badgeText: "Solar Workflow",
  badgeIcon: Sun,
  h1: "Missed Call Text-Back for Solar Companies",
  heroIntro:
    "Some solar companies do not need full live AI phone answering as the first fix. They need a better fallback than voicemail when a homeowner calls and nobody can pick up fast enough. The office is buried in design-visit coordination, setters are chasing follow-up, or reps are out on consultations, and the caller still wants a useful next step right now: do you serve my area, should I have my utility bill ready, can someone call me tonight, or how soon can I book a consultation? In that moment, voicemail is weak. Missed-call text-back for solar companies is the lighter phone-recovery layer between voicemail and heavier live AI answering. The call is missed, a useful text goes out immediately, the homeowner gets a clear next step, and the opportunity stays alive long enough for a setter or coordinator to step back in. Done well, it protects phone demand without pretending every solar conversation should become a fully automated live call.",
  heroSubtext:
    "Below: what solar missed-call text-back should actually handle, how it stays distinct from the other live solar pages, where it works best, and what proof honestly supports it without inventing a solar-only case study.",
  sections: [
    {
      type: "cards",
      title: "What solar missed-call text-back should actually do",
      subtitle:
        "This page only earns its place if it stays tightly on the first-response recovery layer after the call is missed:",
      items: [
        {
          icon: PhoneMissed,
          title: "Detect the missed call immediately",
          body: "The workflow should know the solar inquiry was missed right away instead of waiting for someone to check voicemail later. That speed matters because homeowners who are still comparing installers will often call the next company within minutes if nobody responds.",
        },
        {
          icon: MessageSquare,
          title: "Send a short text that sounds like a real solar company",
          body: "The first message should acknowledge the missed call, identify the company, and give one clear next step. It should feel like operational follow-through from a real solar team, not a generic lead-gen autoresponder.",
        },
        {
          icon: ClipboardCheck,
          title: "Capture just enough intake context for a smarter callback",
          body: "A strong workflow can collect the basics — service area, homeowner status, utility-bill readiness, preferred callback timing, and whether the caller wants a consultation or has a quick qualification question. That gives the office context instead of another blind callback.",
        },
        {
          icon: CalendarCheck,
          title: "Protect booked-consult demand before it disappears",
          body: "Some callers only need acknowledgement, a callback path, or a quick next step before they will stay engaged. A fast text-back keeps those consultation opportunities alive while your setters or coordinators catch up.",
        },
        {
          icon: ArrowRightLeft,
          title: "Route real conversations back to a human quickly",
          body: "Financing questions, roof-condition nuance, battery-storage complexity, commercial projects, and anything that needs actual proposal judgment should move back to a human fast. The workflow should protect the opportunity, not trap it inside a long text thread.",
        },
        {
          icon: Clock3,
          title: "Cover after-hours and overflow without overpromising",
          body: "A text-back is often enough to stop an evening or weekend caller from disappearing before morning. That is different from promising full live phone coverage around the clock.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct from the other solar and phone-handling pages",
      subtitle:
        "The page only works if the buyer decision and workflow boundary are obvious:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for solar companies",
          values: [
            "Solar owners evaluating the full operating system across utility-bill collection, lead follow-up, consultation scheduling, phone coverage, and project communication",
            "Explains the broader solar automation stack instead of isolating the narrow phone-only recovery layer after a missed call",
          ],
        },
        {
          label: "Missed call text-back for solar companies",
          values: [
            "Solar teams that mainly need a fast fallback when qualification or consultation-intent calls are missed and are comfortable recovering easier cases by text or callback before a human takes over",
            "Sends an immediate text next step after the miss, captures lightweight intake context, and routes the real conversation back to a setter or coordinator quickly",
          ],
        },
        {
          label: "AI lead follow-up for solar companies",
          values: [
            "Solar companies solving speed-to-lead after a form, ad lead, or captured inquiry already exists in the CRM",
            "Starts after the lead is already in a follow-up system, not at the exact moment a phone call was missed",
          ],
        },
        {
          label: "AI phone answering for solar companies",
          values: [
            "Solar teams where callers often need live answers now and voicemail or delayed callback is no longer enough",
            "Covers the heavier live-call layer instead of the lighter SMS-first recovery layer that buys time until a human steps in",
          ],
        },
        {
          label: "AI phone answering vs. voicemail for solar companies",
          values: [
            "Buyers deciding whether they have outgrown voicemail and need live AI call coverage",
            "Explains the heavier live-answering-vs-voicemail decision, while this page isolates the lighter middle layer between those two options",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this is a good fit and when it is not",
      subtitle:
        "Missed-call text-back is strongest when the problem is lost qualification demand during busy office periods, not the total absence of phone coverage:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You regularly miss calls because setters, coordinators, or reps are already tied up",
            "A meaningful share of missed calls are straightforward consultation-intent or qualification calls where a fast text and callback path would outperform voicemail",
            "You want a simpler first fix than full live AI phone answering",
            "Your team can step back into the conversation once the workflow captures the basics",
            "You lose homeowners because slow callback makes the company feel unavailable",
            "You want after-hours demand protection without pretending the entire front desk is automated live",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Most callers need a live conversation immediately because the questions are too nuanced or too sales-critical for an SMS-first fallback",
            "Your inbound phone volume is high enough that full live AI answering is clearly the better answer",
            "The business cannot manage SMS replies or callback ownership once texts start coming back",
            "Your bigger issue is weak lead flow or poor close rate later in the sales process, not missed calls",
            "Management expects a text-back workflow to replace proposal judgment, financing conversations, or real setter follow-through",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep solar missed-call recovery useful",
      subtitle:
        "This workflow works when it is narrow and operationally honest. It fails when it tries to fake a full live qualification call.",
      items: [
        {
          icon: AlertTriangle,
          title: "Keep the first text short and useful",
          body: "The strongest opener acknowledges the missed call and offers one clear next step. A homeowner thinking about solar does not want a long marketing paragraph when they were expecting a quick response.",
        },
        {
          icon: Home,
          title: "Know which conversations need human takeover fast",
          body: "Detailed financing questions, roof-condition concerns, HOA or permitting issues, commercial project nuance, and anything that moves beyond lightweight qualification should route back to a real person quickly.",
        },
        {
          icon: Bot,
          title: "Use automation for structure, not fake proposal advice",
          body: "Automation can acknowledge the missed call, collect a few basics, and route the next step. It should not pretend to estimate savings, approve project fit, or answer every technical question over text.",
        },
        {
          icon: PhoneCall,
          title: "Treat text-back as the middle layer, not the final layer",
          body: "For many solar companies, text-back is the practical step between passive voicemail and heavier live AI answering. If the company keeps outgrowing it, that is a useful operating signal — not a failure.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical solar missed-call text-back workflow usually works",
      subtitle:
        "The clean version is simple: detect the miss, send the text, capture the next useful detail, and move the real solar conversation back to a human when context exists.",
      blocks: [
        {
          heading: "The missed call triggers an immediate response",
          body: "That instant acknowledgement is what keeps the homeowner from assuming the company is unavailable and calling the next installer on the list. Speed matters more than polish at this stage.",
        },
        {
          heading: "The homeowner gets one solar-specific next step",
          body: "Depending on the setup, that could mean replying with their address, confirming whether they have a utility bill ready, requesting a callback, or asking for the best consultation window. The point is clarity, not an elaborate SMS funnel.",
        },
        {
          heading: "The office gets context instead of another mystery callback",
          body: "When the workflow captures service area, homeowner status, bill-readiness, and callback timing first, the return call is faster and more confident. That makes the business feel responsive even though nobody answered live.",
        },
        {
          heading: "Over time you learn whether text-back is still enough",
          body: "If the workflow protects most missed opportunities, great. If callers keep needing live answers immediately, the same data helps you decide whether the next step should be live AI phone coverage instead of another guess.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published solar-only missed-call text-back case study yet. The honest proof frame is the live solar cluster plus direct adjacent phone-handling proof that already shows why voicemail and slow callback leak demand.",
      studies: [
        {
          industry: "Solar cluster proof",
          headline: "The live solar parent and child pages already show that phone responsiveness is one of the clearest leaks in the solar workflow",
          body: "The broader solar guide plus the lead-follow-up, booked-consult, live-answering, and voicemail-comparison children already define the operating system. This page isolates the lighter SMS-first recovery layer that sits before the heavier live-answering decision.",
          link: "/ai-automation-for-solar-companies",
        },
        {
          industry: "Published call-handling proof",
          headline: "Paris Cafe already proves the business value of not letting inbound calls die when the team is unavailable",
          body: "A restaurant is not a solar installer, but the phone lesson is directly relevant: when nobody responds, the opportunity goes elsewhere. This page applies that same response-speed logic to solar qualification calls without pretending there is already a solar-specific missed-call case study.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Adjacent home-service phone-recovery proof",
          headline: "The roofing and pest-control missed-call pages already prove how a narrow SMS-first fallback can stay distinct from both a broader parent page and a heavier live-answering layer",
          body: "Those sibling pages use the same commercial structure this solar child needs: a lighter text-back layer between voicemail and live AI answering. Solar has different qualification questions, but the buyer decision and workflow boundary are directly relevant.",
          link: "/missed-call-text-back-for-roofing-companies",
        },
      ],
      links: [
        { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
        { label: "What to automate first for solar companies", href: "/what-to-automate-first-for-solar-companies" },
        { label: "AI phone answering for solar companies", href: "/ai-phone-answering-for-solar-companies" },
        { label: "AI phone answering vs. voicemail for solar companies", href: "/ai-phone-answering-vs-voicemail-for-solar-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is missed-call text-back enough for most solar companies?",
      answer:
        "Sometimes. It is often the right first step when the main problem is missed qualification or consultation-intent calls and many callers only need acknowledgement, a callback path, or a quick intake step before a human takes over. If callers regularly need real answers immediately or missed-call volume is very high, heavier live AI phone answering may be the better fit.",
    },
    {
      question: "What should the first solar text actually say?",
      answer:
        "Usually something short and direct: acknowledge the missed call, identify the company, and offer one clear next step such as replying with their address, confirming utility-bill readiness, or requesting a callback. The strongest first text feels like fast professional follow-through, not a marketing sequence.",
    },
    {
      question: "How is this different from AI lead follow-up for solar companies?",
      answer:
        "AI lead follow-up usually starts after the inquiry is already captured in a form, ad lead, or CRM workflow. This page is narrower. It focuses on the exact phone moment when a homeowner called and nobody answered, and how to keep that opportunity alive before the callback happens.",
    },
    {
      question: "What does a focused solar missed-call text-back build usually cost?",
      answer:
        "A focused workflow usually lands around $1K-$2.5K depending on the phone setup, where replies need to route, whether CRM logging or callback triage is included, and how much cleanup is needed first. Broader solar automation or live-answering systems cost more.",
    },
    {
      question: "When should a solar company skip text-back and go straight to live AI phone answering?",
      answer:
        "If the company misses a lot of calls, callers need live answers more often, after-hours phone demand matters, or callback delays are already costing too much, live AI phone answering may be the better next step. Text-back is strongest as the lighter middle layer, not the forever answer for every phone problem.",
    },
  ],
  faqSubtitle:
    "Straight answers for solar companies deciding whether SMS-first missed-call recovery is enough",
  ctaHeading: "Need a practical answer on missed-call recovery for your solar company?",
  ctaText:
    "Book a 30-minute call. We will look at your missed-call pattern, whether voicemail is quietly costing qualified consultations, and whether your next step should be a focused text-back workflow, heavier live answering, or no new phone layer at all right now.",
  ctaSubtext:
    "No generic solar pitch. Just a practical conversation about how your team actually handles qualification calls today.",
  relatedLinks: [
    { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
    { label: "AI lead follow-up for solar companies", href: "/ai-lead-follow-up-for-solar-companies" },
    { label: "Appointment scheduling and reminder automation for solar companies", href: "/appointment-scheduling-and-reminder-automation-for-solar-companies" },
    { label: "AI phone answering for solar companies", href: "/ai-phone-answering-for-solar-companies" },
    { label: "AI phone answering vs. voicemail for solar companies", href: "/ai-phone-answering-vs-voicemail-for-solar-companies" },
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
