import {
  Scale,
  Wrench,
  Bot,
  Voicemail,
  MessageSquare,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Phone,
  ClipboardCheck,
  Droplets,
  ArrowRightLeft,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-phone-answering-vs-voicemail-for-plumbing-companies",
  metaTitle:
    "AI Phone Answering vs. Voicemail for Plumbing Companies | Dmytro AI",
  metaDescription:
    "Should a plumbing company keep sending callers to voicemail or answer live with AI? Practical comparison of emergency-call urgency, office workload, after-hours plumbing demand, and when missed-call text-back is the smarter middle step.",
  badgeText: "Plumbing Comparison",
  badgeIcon: Scale,
  h1: "AI Phone Answering vs. Voicemail for Plumbing Companies",
  heroIntro:
    "If your plumbing company still sends a meaningful share of callers to voicemail, the real decision is not whether AI sounds advanced. It is whether delayed callbacks are quietly costing same-day service calls, water-heater jobs, leak-response work, and after-hours demand before the office can get back to people. Voicemail can still be fine when call volume is truly light and callback discipline is strong. But in plumbing, callers often want something useful now: Do you service my area? Does this sound urgent? What happens next? Can someone call me back fast? When the office is buried, the dispatcher is juggling the board, or the call hits after hours, voicemail is rarely a neutral fallback. It is a delay layer that gives the homeowner time to call the next plumber. Live AI phone answering changes that first moment by creating an actual answer path instead of a beep and a promise.",
  heroSubtext:
    "Below: when live AI phone answering is worth it for a plumbing company, when voicemail is still acceptable, where missed-call text-back is the smarter middle step, and what the existing plumbing plus broader phone-handling proof honestly supports.",
  sections: [
    {
      type: "cards",
      title: "What this buyer decision is really about",
      subtitle:
        "Plumbing owners usually frame this as a tech question. It is really a speed, labor, and demand-protection question:",
      items: [
        {
          icon: Bot,
          title: "AI phone answering protects live service intent",
          body: "The caller gets an answer during the call instead of deciding whether leaving a voicemail is worth it. That matters when they want service now, need a next step for a leak or drain problem, or are choosing between your company and the next plumber they can reach.",
        },
        {
          icon: Voicemail,
          title: "Voicemail turns every missed answer into a callback gamble",
          body: "Voicemail only works if the caller leaves enough detail, the office hears it quickly, and someone follows up before the job goes elsewhere. In plumbing, that chain breaks fastest during same-day demand, after-hours calls, and overloaded office stretches.",
        },
        {
          icon: MessageSquare,
          title: "Text-back is a real middle path",
          body: "Not every plumbing company needs live AI answering first. A missed-call text-back workflow can still be the smarter first move when the problem is lighter phone recovery, not full live call coverage.",
        },
        {
          icon: Wrench,
          title: "Plumbing callers are often urgency-sensitive and trust-sensitive",
          body: "Callers may be dealing with an active leak, a backed-up drain, no hot water, or a problem they think cannot wait. That makes callback delay more expensive than many owners assume, even when the issue does not become a true emergency.",
        },
      ],
    },
    {
      type: "table",
      title: "AI phone answering vs. voicemail for plumbing companies",
      subtitle:
        "This is the practical plumbing version of the decision — not a generic call-center comparison:",
      headers: ["AI phone answering", "Voicemail + callback"],
      rows: [
        {
          label: "First response",
          values: [
            "Answers live on the call and can handle routine next steps immediately",
            "No real response unless the caller leaves a message and waits for follow-up",
          ],
        },
        {
          label: "Best fit",
          values: [
            "Plumbing companies with meaningful missed-call cost, overloaded office coverage, or valuable after-hours demand",
            "Plumbing companies with genuinely light call volume and disciplined same-day callback behavior",
          ],
        },
        {
          label: "Caller experience",
          values: [
            "Feels reachable when the office is tied up or closed",
            "Feels like the caller has to do extra work and hope the callback happens in time",
          ],
        },
        {
          label: "Office workload",
          values: [
            "Takes more routine intake off the office before it turns into another interruption",
            "Creates a callback queue and another pile of unclear urgency to sort manually",
          ],
        },
        {
          label: "Cost profile",
          values: [
            "Higher direct setup and usage cost, lower lost-demand cost when calls matter",
            "Lower direct software cost, higher hidden cost from missed service work and wasted marketing spend",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When the workflow tries to fake diagnosis, dispatch promises, or pricing judgment that should stay human",
            "When callers need answers now and the company keeps treating callback delay like a harmless default",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Choose the smallest phone layer that actually protects plumbing demand and office capacity:",
      options: [
        {
          icon: Bot,
          heading: "Choose AI phone answering when...",
          highlighted: true,
          items: [
            "Callers often need live answers about service timing, service area, urgency, or the next step before they will commit",
            "The office is overloaded enough that callback lists and voicemail cleanup are hurting response quality",
            "After-hours calls matter and waiting until the next business window creates real leakage",
            "Routine intake can be handled live while higher-context dispatch, pricing, insurance, and emergency judgment still route to a human",
            "Missed-call text-back already feels too light for your actual phone pattern",
          ],
        },
        {
          icon: Voicemail,
          heading: "Keep voicemail when...",
          highlighted: false,
          items: [
            "Call volume is honestly low and commercially minor",
            "A real person reliably returns messages fast enough to prevent job loss",
            "Most callers do not need immediate answers to move forward",
            "The bigger issue is not phone handling at all — it is weak demand or poor operational follow-through elsewhere",
            "The company is not ready to support another phone workflow yet",
          ],
        },
        {
          icon: MessageSquare,
          heading: "Use text-back as the middle step when...",
          highlighted: false,
          items: [
            "The company needs something better than voicemail but is not ready for full live AI phone coverage",
            "A meaningful share of callers can be recovered with a fast SMS, callback prompt, or simple next step",
            "Budget is tighter and you want to prove the phone-recovery layer first",
            "The office can close message threads once the basics are captured",
            "The phone problem is real but not severe enough to justify live answering on every call",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit and bad fit signals",
      subtitle:
        "This page only makes sense if voicemail is creating a real leak in the plumbing workflow:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit for live AI phone answering",
          variant: "green",
          items: [
            "The company regularly loses callers because nobody answers live during busy periods or after-hours windows",
            "A recovered service call, water-heater job, leak response, or drain-clearing opportunity covers the workflow cost quickly",
            "Callers often need a useful answer now rather than a generic callback later",
            "Management wants office relief without adding another full-time phone shift",
            "The business already knows voicemail is not protecting enough service demand",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The company mainly needs a simpler missed-call recovery layer, not live call coverage",
            "Most callers immediately need high-context dispatch or pricing judgment from a human",
            "The real issue is inconsistent office ownership, weak callback discipline, or general operational chaos",
            "Management expects AI to replace all dispatcher or office judgment end to end",
            "Voicemail volume is too light to justify another layer",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The mistakes that make this choice expensive",
      subtitle:
        "Plumbing companies usually get this wrong in one of four ways:",
      items: [
        {
          icon: AlertTriangle,
          title: "Treating voicemail like a harmless default",
          body: "Voicemail feels cheap because the line item is almost zero. But when callers are still deciding who to trust with a same-day plumbing issue, the real cost is the service work that disappears before the callback ever happens.",
        },
        {
          icon: Phone,
          title: "Buying live AI before proving the phone problem is real",
          body: "If the company only misses a manageable number of calls and those callers recover fine by text or fast callback, a narrower text-back workflow may be the smarter first move than jumping straight to live AI answering.",
        },
        {
          icon: ClipboardCheck,
          title: "Letting the system pretend it can diagnose every plumbing conversation",
          body: "A strong workflow can capture issue type, urgency, service area, and route intelligently. It should not confidently diagnose the plumbing problem, promise arrival times the office cannot deliver, or quote work the company has not approved.",
        },
        {
          icon: DollarSign,
          title: "Comparing software cost instead of booked-job economics",
          body: "The right question is not whether AI costs more than voicemail. It is whether the gap between live answered calls and delayed callbacks is expensive enough that paying for better coverage makes sense.",
        },
      ],
    },
    {
      type: "prose",
      title: "How to decide quickly",
      subtitle:
        "Most plumbing owners can make this decision with three simple questions:",
      blocks: [
        {
          heading: "Do callers need answers during the first call?",
          body: "If homeowners regularly want to know whether you serve their area, how soon someone can come out, whether the issue sounds urgent, or what the next step is, live AI phone answering has the stronger case.",
        },
        {
          heading: "What is one recovered phone lead actually worth?",
          body: "If one recovered service call, water-heater replacement, or high-value drain or sewer opportunity covers the workflow cost quickly, the economics start to favor live answering over delayed callback.",
        },
        {
          heading: "Is a lighter fallback enough right now?",
          body: "If the phone leak is real but not severe, missed-call text-back may still be the smarter first step. This page exists to separate that middle option from the harder AI-vs-voicemail decision instead of pretending every plumbing company needs the same answer.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "The proof here comes from the live plumbing cluster, the generic AI phone-answering guide, and the existing phone-handling case study already on the site:",
      studies: [
        {
          industry: "Plumbing cluster proof",
          headline: "The live plumbing pages already show that phone handling is one of the clearest revenue leaks in the plumbing office",
          body: "The parent plumbing page plus the missed-call, scheduling, lead-follow-up, estimate, and live-answering children already define the operating system. This page isolates the narrower buyer decision: keep relying on voicemail, move to live AI answering, or stop earlier at a lighter text-back layer.",
          link: "/ai-automation-for-plumbing-companies",
        },
        {
          industry: "Generic phone-answering proof",
          headline: "The broader AI phone-answering guide proves the call-coverage pattern",
          body: "That page already shows where live answered coverage wins across service businesses: immediate response, routine call handling, cleaner intake, and human handoff when nuance appears. This comparison grounds that same logic in plumbing realities.",
          link: "/ai-phone-answering-for-service-businesses",
        },
        {
          industry: "Published call-handling proof",
          headline: "Paris Cafe proves the business value of not letting inbound demand die in voicemail",
          body: "The restaurant case study is not a plumbing deployment, but it does prove the economics of replacing missed-call dead ends with real live coverage when phone demand matters. This page applies that same response-speed logic to plumbing companies without pretending there is already a published plumbing-specific voicemail comparison case study.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
        { label: "AI phone answering for plumbing companies", href: "/ai-phone-answering-for-plumbing-companies" },
        { label: "Missed call text-back for plumbing companies", href: "/missed-call-text-back-for-plumbing-companies" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the generic AI voice-agent-vs-voicemail page?",
      answer:
        "The generic page explains the broader service-business decision. This page narrows it to plumbing realities: office overload, leak and drain urgency, after-hours demand, office workload, and where missed-call text-back is still the better middle step before a company jumps into live AI answering.",
    },
    {
      question: "When should a plumbing company move from voicemail to live AI phone answering?",
      answer:
        "Usually when missed calls or delayed callbacks are clearly costing booked work, callers often need answers during the first call, or after-hours demand matters enough that waiting until morning creates real leakage. If a fast SMS or callback workflow already recovers most demand, a lighter solution may still be enough.",
    },
    {
      question: "Is missed-call text-back still a better first step for some plumbing companies?",
      answer:
        "Yes. If the main problem is a manageable number of missed calls and many callers can be recovered by text, callback prompts, or simple next-step paths, text-back is often the smarter first move. Live AI phone answering makes more sense when callers regularly need a real answer now.",
    },
    {
      question: "What does a focused AI phone-answering workflow usually cost for a plumbing company?",
      answer:
        "A focused live-answering workflow usually lands around $2K-$5K depending on the voice stack, call-flow depth, after-hours rules, service-area logic, and whether it needs direct integration with your current systems. It costs more than voicemail because it is doing real response work in the moment.",
    },
    {
      question: "Can this work with ServiceTitan, Housecall Pro, Jobber, or my current phone system?",
      answer:
        "Often yes, especially when the workflow starts at the phone and intake layer first. Direct integrations are ideal, but practical builds can also pass captured call context, callback requests, service intent, and summaries into the tools your team already uses. Compatibility should be verified during scoping.",
    },
  ],
  faqSubtitle:
    "Straight answers for plumbing owners deciding whether voicemail is still good enough",
  ctaHeading: 'Need a clearer answer than "just let it go to voicemail"?',
  ctaText:
    "Book a 30-minute call. We will look at your call pattern, callback discipline, after-hours demand, and whether your company needs live AI phone answering, a lighter text-back workflow, or no new phone layer at all.",
  ctaSubtext:
    "The goal is not to sell the heaviest stack. It is to match the phone workflow to the actual leak.",
  relatedLinks: [
    { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
    { label: "AI phone answering for plumbing companies", href: "/ai-phone-answering-for-plumbing-companies" },
    { label: "Missed call text-back for plumbing companies", href: "/missed-call-text-back-for-plumbing-companies" },
    { label: "AI voice agent vs. voicemail", href: "/ai-voice-agent-vs-voicemail" },
  ],
};

export default data;
