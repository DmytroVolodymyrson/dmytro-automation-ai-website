import {
  Scale,
  Home,
  Bot,
  Voicemail,
  MessageSquare,
  Sun,
  Clock3,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Phone,
  ClipboardCheck,
  ArrowRightLeft,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-phone-answering-vs-voicemail-for-solar-companies",
  metaTitle:
    "AI Phone Answering vs. Voicemail for Solar Companies | Dmytro AI",
  metaDescription:
    "Should a solar company keep relying on voicemail or answer live with AI? Practical comparison of qualification-call recovery, after-hours demand, office workload, consultation protection, and when a lighter callback flow is still enough.",
  badgeText: "Solar Comparison",
  badgeIcon: Scale,
  h1: "AI Phone Answering vs. Voicemail for Solar Companies",
  heroIntro:
    "If your solar company still sends most unanswered calls to voicemail, the real question is not whether AI sounds impressive. It is whether delayed callbacks are quietly costing you qualified homeowner conversations, booked consultations, and after-hours demand. In solar, callers often want a useful answer now: Do you serve my area? What happens after I send my utility bill? Can I book a consultation? Will someone call me back tonight or tomorrow? AI phone answering changes that first moment by giving the caller a live path instead of a beep and a callback promise. Voicemail can still be fine when call volume is genuinely light and callback discipline is strong. But when the office is thin, setters are buried, or design reps are in the field, voicemail is rarely a neutral fallback. It is a delay that gives the homeowner time to call the next installer.",
  heroSubtext:
    "Below: when live AI phone answering is worth it for a solar company, when voicemail is still acceptable, where a lighter callback path is still enough, and what the existing solar plus phone-coverage proof honestly supports.",
  sections: [
    {
      type: "cards",
      title: "What this buyer decision is really about",
      subtitle:
        "Solar owners often frame this as a software choice. It is really a speed, labor, and trust choice:",
      items: [
        {
          icon: Bot,
          title: "AI phone answering protects live consultation intent",
          body: "The caller gets a real response during the call instead of deciding whether leaving a voicemail is worth it. That matters when a homeowner is still quote-shopping and wants to know whether the company is credible, responsive, and worth continuing with before calling the next installer.",
        },
        {
          icon: Voicemail,
          title: "Voicemail turns every missed answer into a callback gamble",
          body: "Voicemail only works if the homeowner leaves useful details, someone checks the message quickly, and the callback happens before the lead cools off. In solar, that chain breaks fast when the office is juggling design visits, install questions, and rep coordination.",
        },
        {
          icon: MessageSquare,
          title: "A lighter callback workflow is still a real middle path",
          body: "Not every solar company needs live AI answering first. Some teams only need faster callback discipline or a simpler missed-call recovery layer. This page exists to separate that lighter fallback from the heavier live-answering decision.",
        },
        {
          icon: Home,
          title: "Solar calls are usually timing-sensitive and trust-sensitive",
          body: "Callers may be asking whether you service their area, what to expect before a consultation, whether they need a utility bill ready, or how fast a rep can follow up. That makes callback lag more expensive than many teams assume.",
        },
      ],
    },
    {
      type: "table",
      title: "AI phone answering vs. voicemail for solar companies",
      subtitle:
        "This is the practical solar version of the decision — not a generic phone-software comparison:",
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
            "Solar companies with meaningful missed-call cost, thin office coverage, or valuable after-hours qualification-call demand",
            "Solar companies with honestly light inbound call volume and disciplined same-day callback behavior",
          ],
        },
        {
          label: "Caller experience",
          values: [
            "Feels reachable when the office is tied up or the reps are in consultations",
            "Feels like the homeowner has to do extra work and hope the callback happens in time",
          ],
        },
        {
          label: "Office workload",
          values: [
            "Takes more routine qualification and next-step pressure off the office before it becomes another interruption",
            "Creates a callback queue and another pile of half-clear urgency to sort manually",
          ],
        },
        {
          label: "Cost profile",
          values: [
            "Higher direct setup and usage cost, lower lost-demand cost when live calls matter",
            "Lower direct software cost, higher hidden cost from leaked consultations and delayed callbacks",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When the workflow tries to fake savings math, financing certainty, or project-fit judgment that should stay human",
            "When callers need useful answers now and the company keeps treating callback delay like a harmless default",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Choose the smallest phone layer that actually protects solar demand and office capacity:",
      options: [
        {
          icon: Bot,
          heading: "Choose AI phone answering when...",
          highlighted: true,
          items: [
            "Callers often need live answers about service area, consultation process, utility-bill readiness, or the next step before they will commit",
            "The office is overloaded enough that voicemail cleanup and callback lists are hurting response quality",
            "After-hours or during-consultation calls matter and waiting until later creates real leakage",
            "Routine intake can be handled live while higher-context financing, roof-fit, or proposal questions still route to a human",
            "Simple callback promises already feel too light for the phone pattern you actually have",
          ],
        },
        {
          icon: Voicemail,
          heading: "Keep voicemail when...",
          highlighted: false,
          items: [
            "Inbound call volume is honestly low and commercially minor",
            "A real person reliably returns messages fast enough to prevent consultation loss",
            "Most callers do not need immediate answers to move forward",
            "The bigger issue is not phone handling at all — it is weak demand or poor follow-through later in the sales process",
            "The company is not ready to support another phone workflow yet",
          ],
        },
        {
          icon: MessageSquare,
          heading: "Use a lighter callback layer when...",
          highlighted: false,
          items: [
            "The company needs something better than voicemail but is not ready for full live AI phone coverage",
            "A meaningful share of callers can still be recovered by a fast text or immediate callback prompt",
            "Budget is tighter and you want to prove the phone-recovery layer first",
            "The office can close the loop once the basics are captured",
            "The phone problem is real but not severe enough to justify live answering on every call",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit and bad fit signals",
      subtitle:
        "This page only makes sense if voicemail is creating a real leak in the solar workflow:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit for live AI phone answering",
          variant: "green",
          items: [
            "The company regularly loses callers because nobody answers live during busy periods or after hours",
            "One recovered homeowner consultation covers the workflow cost quickly enough to matter",
            "Callers often need a useful answer now rather than a generic callback later",
            "Management wants office relief without adding another full-time phone seat first",
            "The business already knows voicemail is not protecting enough serious demand",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The company mainly needs a simpler missed-call recovery or callback-discipline layer, not live call coverage",
            "Most callers immediately need detailed financing guidance, roof viability judgment, or commercial project scoping that should stay with a human",
            "The real issue is inconsistent office ownership, weak callback discipline, or general operational chaos",
            "Management expects AI to replace the closer or design consultant end to end",
            "Voicemail volume is too light to justify another layer",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The mistakes that make this choice expensive",
      subtitle:
        "Solar companies usually get this wrong in one of four ways:",
      items: [
        {
          icon: AlertTriangle,
          title: "Treating voicemail like a harmless default",
          body: "Voicemail feels cheap because the direct line item is almost zero. But when homeowners are still deciding who to trust, the real cost is the consultation opportunity that disappears before the callback ever happens.",
        },
        {
          icon: Phone,
          title: "Buying live AI before proving the phone problem is real",
          body: "If the company only misses a manageable number of calls and those callers recover fine by fast callback, a lighter workflow may still be the smarter first move than jumping straight to live AI answering.",
        },
        {
          icon: ClipboardCheck,
          title: "Letting the system pretend it can judge every solar conversation",
          body: "A strong workflow can capture address, project type, bill readiness, and route intelligently. It should not confidently promise savings, financing outcomes, or proposal certainty the company has not approved.",
        },
        {
          icon: DollarSign,
          title: "Comparing software cost instead of consultation economics",
          body: "The right question is not whether AI costs more than voicemail. It is whether the gap between live answered calls and delayed callbacks is expensive enough that paying for better coverage makes sense.",
        },
      ],
    },
    {
      type: "prose",
      title: "How to decide quickly",
      subtitle:
        "Most solar owners can make this decision with three simple questions:",
      blocks: [
        {
          heading: "Do callers need answers during the first call?",
          body: "If homeowners regularly want to know whether you serve their area, what the next step is, whether they should have a utility bill ready, or when a real person will call, live AI phone answering has the stronger case.",
        },
        {
          heading: "What is one recovered phone lead actually worth?",
          body: "If one recovered qualified consultation covers the workflow cost quickly, the economics start to favor live answering over delayed callback.",
        },
        {
          heading: "Is a lighter fallback enough right now?",
          body: "If the phone leak is real but not severe, a faster callback or simpler missed-call recovery may still be the smarter first step. This page exists to separate that middle option from the harder AI-vs-voicemail decision instead of pretending every solar company needs the same answer.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "The proof here comes from the live solar cluster, the generic phone pages, and the published call-handling case study already on the site:",
      studies: [
        {
          industry: "Solar cluster proof",
          headline: "The live solar pages already show that phone handling is one of the clearest response leaks in the solar workflow",
          body: "The parent solar page plus the lead-follow-up, booked-consult, and live-answering children already define the operating system. This page isolates the narrower buyer decision: keep relying on voicemail, move to live AI answering, or stop earlier at a lighter callback layer.",
          link: "/ai-automation-for-solar-companies",
        },
        {
          industry: "Generic phone-answering proof",
          headline: "The broader AI phone-answering guide proves the live call-coverage pattern",
          body: "That page already shows where live answered coverage wins across service businesses: immediate response, routine intake, cleaner qualification, and human handoff when nuance appears. This comparison grounds that same logic in solar-company realities.",
          link: "/ai-phone-answering-for-service-businesses",
        },
        {
          industry: "Published call-handling proof",
          headline: "Paris Cafe proves the business value of not letting inbound demand die in voicemail",
          body: "The restaurant case study is not a solar deployment, but it does prove the economics of replacing missed-call dead ends with real live coverage when phone demand matters. This page applies that same response-speed logic to solar companies without pretending there is already a solar-specific voicemail comparison case study.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
        { label: "AI phone answering for solar companies", href: "/ai-phone-answering-for-solar-companies" },
        { label: "Appointment scheduling and reminder automation for solar companies", href: "/appointment-scheduling-and-reminder-automation-for-solar-companies" },
        { label: "AI voice agent vs. voicemail", href: "/ai-voice-agent-vs-voicemail" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the generic AI voice-agent-vs-voicemail page?",
      answer:
        "The generic page explains the broader service-business decision. This page narrows it to solar realities: consultation demand, office overload, after-hours qualification calls, homeowner trust, and the line between delayed callback and live AI coverage.",
    },
    {
      question: "When should a solar company move from voicemail to live AI phone answering?",
      answer:
        "Usually when missed calls or delayed callbacks are clearly costing consultations, callers often need answers during the first call, or after-hours phone demand matters enough that waiting until later creates real leakage. If a fast callback workflow already recovers most demand, a lighter solution may still be enough.",
    },
    {
      question: "Is a lighter callback workflow still a better first step for some solar companies?",
      answer:
        "Yes. If the main problem is a manageable number of missed calls and many callers can be recovered by a fast callback or simple intake prompt, a lighter workflow is often the smarter first move. Live AI phone answering makes more sense when callers regularly need a real answer now.",
    },
    {
      question: "What does a focused AI phone-answering workflow usually cost for a solar company?",
      answer:
        "A focused live-answering workflow usually lands around $2K-$5K depending on the voice stack, call-flow depth, after-hours behavior, qualification logic, and whether it needs direct integration with your current systems. It costs more than voicemail because it is doing real response work in the moment.",
    },
    {
      question: "Can this work with my current phone system or CRM?",
      answer:
        "Often yes, especially when the workflow starts at the phone and intake layer first. Direct integrations are ideal, but practical builds can also pass captured call context, callback requests, utility-bill readiness, and consultation intent into the tools your team already uses. Compatibility should be verified during scoping.",
    },
  ],
  faqSubtitle:
    "Straight answers for solar companies deciding whether voicemail is still good enough",
  ctaHeading: 'Need a clearer answer than "just let it go to voicemail"?',
  ctaText:
    "Book a 30-minute call. We will look at your call pattern, callback discipline, after-hours demand, and whether your company needs live AI phone answering, a lighter callback workflow, or no new phone layer at all.",
  ctaSubtext:
    "The goal is not to sell the heaviest stack. It is to match the phone workflow to the actual leak.",
  relatedLinks: [
    { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
    { label: "What to automate first for solar companies", href: "/what-to-automate-first-for-solar-companies" },
    { label: "AI lead follow-up for solar companies", href: "/ai-lead-follow-up-for-solar-companies" },
    { label: "Appointment scheduling and reminder automation for solar companies", href: "/appointment-scheduling-and-reminder-automation-for-solar-companies" },
    { label: "AI phone answering for solar companies", href: "/ai-phone-answering-for-solar-companies" },
    { label: "Best AI automation for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "Case studies", href: "/case-studies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
