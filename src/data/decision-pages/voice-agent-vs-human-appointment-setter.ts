import {
  Scale,
  Bot,
  Phone,
  DollarSign,
  Clock,
  CalendarCheck,
  Zap,
  Users,
  Handshake,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-voice-agent-vs-human-appointment-setter",
  metaTitle:
    "AI Voice Agent vs. Human Appointment Setter — Which One Wins on Speed, Cost, and Conversion? | Dmytro AI",
  metaDescription:
    "Compare AI voice agents and human appointment setters for small service businesses. Honest breakdown of speed-to-lead, cost, booking quality, objection handling, and when a hybrid model works best.",
  badgeText: "Decision Guide",
  badgeIcon: Scale,
  h1: "AI Voice Agent vs. Human Appointment Setter",
  heroIntro:
    "If your business loses leads because callbacks happen too late, an AI voice agent is usually the faster and cheaper fix. If your first call requires real consultative selling, negotiation, or relationship building, a human appointment setter still wins. This page compares both options directly so you can decide based on your sales process instead of hype.",
  heroSubtext:
    "Below: where AI wins on speed and coverage, where humans still close better, what each option costs, and when the smartest move is to combine both.",
  sections: [
    {
      type: "cards",
      title: "Two ways to book the next conversation",
      subtitle:
        "Both options exist to move a lead from inquiry to qualified appointment. The difference is how they handle timing, consistency, and complexity:",
      items: [
        {
          icon: Bot,
          title: "AI voice agent",
          body: "An AI phone agent answers or calls back instantly, qualifies the lead with scripted questions, books into your calendar, and logs the result in your CRM. It works 24/7 and never leaves a lead sitting overnight. Best for inbound-heavy businesses where speed matters more than persuasion on the first call.",
        },
        {
          icon: Phone,
          title: "Human appointment setter",
          body: "A person calls the lead, handles objections, adapts to nuance, and tries to book the appointment manually. Stronger for high-ticket or relationship-driven sales where the first conversation needs trust, judgment, and improvisation. But response time depends on staffing and process discipline.",
        },
        {
          icon: Zap,
          title: "Hybrid model",
          body: "AI handles first response, after-hours calls, and initial qualification. Human setters take over warm leads, complex objections, and high-value conversations. This is often the best fit for service businesses that need speed-to-lead without giving up human closing skill where it matters.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "The decision usually comes down to these practical tradeoffs:",
      headers: ["AI Voice Agent", "Human Appointment Setter"],
      rows: [
        {
          label: "Speed to first contact",
          values: [
            "Instant or under 60 seconds, 24/7",
            "Minutes to hours during business hours, often slower after hours",
          ],
        },
        {
          label: "Monthly operating cost",
          values: [
            "$100-$500/month plus setup and usage",
            "$3,000-$6,000+/month salary, contractor fees, or agency markup",
          ],
        },
        {
          label: "Consistency",
          values: [
            "Same script, same qualification logic, every call",
            "Varies by rep skill, mood, training, and turnover",
          ],
        },
        {
          label: "Objection handling",
          values: [
            "Good for common scripted objections, escalates edge cases",
            "Better at custom objections, nuance, and consultative selling",
          ],
        },
        {
          label: "After-hours coverage",
          values: [
            "Always on — nights, weekends, holidays",
            "Requires separate staffing or next-day callback",
          ],
        },
        {
          label: "Calendar + CRM integration",
          values: [
            "Direct booking and automatic logging during the call",
            "Often manual notes, manual booking, manual CRM updates",
          ],
        },
        {
          label: "Scaling call volume",
          values: [
            "Handles unlimited concurrent calls",
            "Need to hire or queue leads as volume grows",
          ],
        },
        {
          label: "Best fit",
          values: [
            "Home services, missed-call recovery, first-response qualification, routine booking",
            "High-ticket consultative sales, complex qualification, relationship-driven deals",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option wins",
      subtitle:
        "The strongest choice depends less on industry labels and more on what the first call is actually doing in your funnel:",
      options: [
        {
          icon: Bot,
          heading: "AI voice agent wins when...",
          highlighted: true,
          items: [
            "Your biggest problem is speed-to-lead — new inquiries wait too long for a callback",
            "The first call is mostly screening, booking, routing, or answering repeat questions",
            "You lose leads after hours, on weekends, or during busy periods when nobody can answer",
            "You want every call transcribed, logged, and pushed into your CRM automatically",
            "Your team is good at closing but bad at consistently making first contact fast enough",
          ],
        },
        {
          icon: Users,
          heading: "Human appointment setter wins when...",
          highlighted: false,
          items: [
            "The first call is also the sales call — trust, persuasion, and live discovery happen immediately",
            "Leads need custom quoting, nuanced education, or multi-step qualification before booking",
            "Your average deal value is high enough that one extra closed deal easily pays for payroll",
            "Your buyers expect a premium white-glove experience from the first interaction",
            "You already have enough lead volume to keep a trained setter productively busy every day",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What most businesses miss in this comparison",
      subtitle:
        "The obvious debate is AI versus human. The real decision is about where delay, admin friction, and inconsistency are costing you money:",
      items: [
        {
          icon: Clock,
          title: "Speed often matters more than perfect salesmanship",
          body: "For many service businesses, the first company to respond gets the appointment. If your human setter calls back three hours later, their sales skill may not matter because the lead is already gone. AI does not win because it sounds magical. It wins because it can respond immediately, every single time.",
        },
        {
          icon: CalendarCheck,
          title: "Booking during the call changes conversion economics",
          body: "An AI voice agent that qualifies and books in one step removes handoff friction. A human setter often still has to coordinate calendars, leave notes, or chase confirmation manually. If a lead must wait for a second step, some percentage will drop. The tool that closes the loop fastest usually creates the better pipeline outcome.",
        },
        {
          icon: Handshake,
          title: "Humans still matter when the first call is high-stakes",
          body: "If the first call needs empathy, negotiation, or deep trust-building, AI should not pretend to be a closer. That is where a human setter still earns the premium. The cleanest setup is often AI for immediate contact and qualification, then a human for warm-transfer or scheduled consult calls.",
        },
        {
          icon: DollarSign,
          title: "A part-time setter is not automatically the cheaper 'human' option",
          body: "Business owners often compare AI software cost against a hypothetical low-cost contractor. In reality, the human option includes management time, training, QA, turnover, missed after-hours leads, and manual CRM work. Once you price the whole system instead of the hourly rate, AI is usually cheaper for first-response booking coverage.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof that supports this decision",
      subtitle:
        "Dmytro's strongest proof sits on the AI side of the comparison: fast call handling, instant routing, and automated follow-up instead of manual lag.",
      studies: [
        {
          industry: "Restaurant",
          headline: "0% to 100% after-hours calls answered with AI",
          body: "For The Paris Café, an AI voice receptionist moved after-hours phone coverage from zero answered calls to full coverage. It also pushed web lead response time down to under 60 seconds and freed about 15 hours a week of management time. That is the clearest example of where immediate AI response beats waiting for a human callback.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce / CRM automation",
          headline: "5,600+ leads handled without manual follow-up bottlenecks",
          body: "A custom CRM and automation system for an auto parts brand organized and followed up with thousands of leads automatically, increasing team capacity 3x. It is not a phone-setter case study, but it supports the same operational point: when first-touch and follow-up are systematized, manual chasing stops being the bottleneck.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI appointment setter guide", href: "/ai-appointment-setter" },
        { label: "AI voice agent for lead qualification", href: "/ai-voice-agent-lead-qualification" },
        { label: "AI voice agent vs. call center", href: "/ai-voice-agent-vs-call-center" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Is an AI voice agent the same thing as an AI appointment setter?",
      answer:
        "Often, yes. The difference is emphasis. 'AI voice agent' describes the channel and technology. 'AI appointment setter' describes the job it performs. If the system answers calls, qualifies the lead, and books into your calendar, it is functioning as an AI appointment setter even if the underlying tool is a voice agent platform.",
    },
    {
      question: "When does a human appointment setter clearly beat AI?",
      answer:
        "A human wins when the first call is complex enough that persuasion and judgment matter more than speed. Think consultative B2B sales, custom quoting with many variables, or premium services where buyers expect a high-touch experience from minute one. In those cases, AI should support the funnel, not replace the closer.",
    },
    {
      question: "Can AI handle objection handling well enough to book appointments?",
      answer:
        "For common objections, yes. AI can answer scripted questions about price range, availability, service area, process, or next steps consistently. Where it struggles is unusual objections, emotional callers, or conversations that require flexible human judgment. That is why the strongest deployments use clear escalation rules instead of forcing AI to do everything.",
    },
    {
      question: "What does the hybrid model usually look like?",
      answer:
        "AI handles immediate first contact, after-hours calls, missed-call recovery, and routine qualification. It books straightforward appointments directly. High-value leads or complex situations get routed to a human setter or owner with context already captured. That gives you speed without asking AI to carry the whole sales process.",
    },
    {
      question: "How should I decide between AI, human, or hybrid for my business?",
      answer:
        "Map what your first call is actually supposed to achieve. If it is mostly speed, screening, and booking, AI is usually the better first move. If it is persuasion and consultative selling, keep humans in the loop. If you need both, use AI to remove the response-time bottleneck and let humans focus only on the conversations where they create real conversion lift.",
    },
  ],
  faqSubtitle:
    "Practical answers for service businesses choosing between AI response speed and human sales nuance",
  ctaHeading: "Not sure whether AI or a human setter fits your funnel?",
  ctaText:
    "Book a 30-minute call. We will map your lead flow, call patterns, and booking process, then recommend whether you should use AI, a human setter, or a hybrid handoff model.",
  ctaSubtext:
    "Useful if you already know slow first contact is costing you deals but are not sure where AI should stop and humans should take over.",
  relatedLinks: [
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "AI appointment setter vs. virtual assistant", href: "/ai-appointment-setter-vs-virtual-assistant" },
    { label: "AI voice agent for lead qualification", href: "/ai-voice-agent-lead-qualification" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
  ],
};

export default data;
