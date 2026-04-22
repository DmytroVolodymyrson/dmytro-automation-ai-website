import {
  Calculator,
  DollarSign,
  Phone,
  Clock,
  TrendingUp,
  CheckCircle2,
  XCircle,
  BarChart3,
  AlertTriangle,
  ArrowUpRight,
  Bot,
  CalendarCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-voice-agent-roi-for-lead-follow-up",
  metaTitle:
    "AI Voice Agent ROI for Lead Follow-Up — Cost, Payback, and When It Is Worth It | Dmytro AI",
  metaDescription:
    "How to evaluate AI voice agent ROI for lead follow-up. Practical payback math, setup and monthly cost ranges, where voice AI creates real revenue lift, and when it is not worth building.",
  badgeText: "Voice ROI Guide",
  badgeIcon: Calculator,
  h1: "AI Voice Agent ROI for Lead Follow-Up",
  heroIntro:
    "If your business loses leads because calls go unanswered, callbacks happen too late, or inbound phone inquiries sit until someone has time to chase them, an AI voice agent can have very short payback. The ROI is usually not about replacing a whole team. It comes from recovering leads that would have gone cold, booking more first calls while buyer intent is still high, and cutting the manual callback burden that drags on your staff every week. The wrong use case will not pencil out. The right one often does with only a small lift in recovered jobs or consultations.",
  heroSubtext:
    "Below: the actual cost structure, how to model payback conservatively, what usually drives ROI fastest, and where a voice agent is the wrong investment.",
  sections: [
    {
      type: "table",
      title: "Where the ROI usually comes from",
      subtitle:
        "Voice-agent ROI is normally a mix of recovered revenue and labor savings. These are the biggest levers:",
      headers: ["What improves", "Why it matters financially"],
      rows: [
        {
          label: "Faster first response",
          values: [
            "Calls are answered immediately instead of routed to voicemail or next-day callbacks",
            "More qualified leads stay engaged long enough to book, which is often the highest-value gain",
          ],
        },
        {
          label: "After-hours capture",
          values: [
            "Evenings, weekends, and overflow periods still get live intake instead of dead air",
            "A single recovered high-value inquiry per month can justify a meaningful share of the system cost",
          ],
        },
        {
          label: "Booking during the first conversation",
          values: [
            "Qualified callers can be booked or routed immediately when the workflow is clear",
            "Fewer leads disappear during callback lag or phone tag",
          ],
        },
        {
          label: "Cleaner qualification and CRM logging",
          values: [
            "Every call follows the same intake logic and lands in the CRM with transcript and summary",
            "Staff spend less time reconstructing context and chasing incomplete notes",
          ],
        },
        {
          label: "Lower manual callback burden",
          values: [
            "Your team stops spending hours on repetitive first-touch phone work",
            "That time can be redirected into closing, dispatching, or higher-value conversations instead of basic intake",
          ],
        },
      ],
    },
    {
      type: "cards",
      title: "A conservative ROI model",
      subtitle:
        "You do not need magical conversion claims for this to work. Use simple, bounded math:",
      items: [
        {
          icon: DollarSign,
          title: "1. Start with real cost",
          body: "A focused voice-agent build usually lands somewhere around $2.5K-$5K to set up, depending on call logic, routing, calendar rules, and CRM integration. Monthly software and usage costs are often in the low hundreds, not full-time salary territory.",
        },
        {
          icon: Phone,
          title: "2. Count recoverable calls, not total calls",
          body: "Do not assume every inbound call becomes revenue. Look at the calls you currently miss, delay, or bounce to voicemail. If even a small share of those are good-fit leads, that is the pool the voice agent is working on.",
        },
        {
          icon: TrendingUp,
          title: "3. Estimate only modest lift",
          body: "Use a cautious scenario: one or two extra booked consultations, estimates, or service calls per month. For businesses with meaningful deal value, that alone can cover a large part of the monthly cost or pay back the setup quickly.",
        },
        {
          icon: Clock,
          title: "4. Add reclaimed staff time separately",
          body: "If the office currently spends 5-10 hours per week returning missed calls, qualifying obvious non-fits, and logging conversations manually, that labor cost matters too. ROI is not only new revenue — it is avoided admin drag.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Typical payback patterns",
      subtitle:
        "These are practical ranges, not guarantees. The point is to show when the math becomes believable:",
      items: [
        {
          icon: BarChart3,
          title: "Shortest payback: high-intent phone businesses",
          body: "If phone calls are a primary lead channel and a booked call, estimate, or consult is worth real money, payback can be fast. In these cases the voice agent is protecting demand that already exists, not trying to manufacture demand from scratch.",
        },
        {
          icon: CalendarCheck,
          title: "Best-fit rollouts combine qualification with booking or routing",
          body: "The economics are strongest when the agent does more than answer a FAQ. It should qualify, decide the next step, and either book or route with clear business logic. That shortens the path from inquiry to real pipeline value.",
        },
        {
          icon: Bot,
          title: "Weak payback: low volume or highly consultative calls",
          body: "If you rarely miss calls, inbound phone volume is low, or nearly every conversation needs senior human judgment from the first minute, the ROI gets weaker fast. In those cases, simpler missed-call recovery or human callback discipline may be smarter.",
        },
        {
          icon: AlertTriangle,
          title: "Do not confuse demo quality with business ROI",
          body: "A voice demo can sound impressive while still failing the economics. The real questions are: how many qualified calls are you missing now, how quickly do they cool off, and what is one recovered opportunity actually worth?"
        },
      ],
    },
    {
      type: "evaluation",
      title: "When the ROI case is strong vs. weak",
      subtitle:
        "Use this to decide whether a voice-agent build should be near the top of your list or not:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Strong ROI case",
          variant: "green",
          items: [
            "Phone is a meaningful inbound lead channel, not just support noise",
            "You miss calls during jobs, after hours, or when staff are busy",
            "One booked consultation, estimate, or service call is worth enough to matter financially",
            "Your intake flow is repeatable enough for structured qualification and routing",
            "Your team currently spends real time on callbacks, qualification, and CRM note cleanup",
          ],
        },
        {
          icon: XCircle,
          heading: "Weak ROI case",
          variant: "neutral",
          items: [
            "Most calls are low-value or non-sales-related",
            "Your team already answers almost everything live and quickly",
            "Call volume is too low to justify setup and tuning",
            "Every caller needs deep, nuanced human advice immediately",
            "You want AI to substitute for broken process instead of a clear intake workflow",
          ],
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "This page is grounded in direct published proof from the site's voice-agent case study and adjacent workflow pages that explain the same speed-to-lead economics from different angles:",
      studies: [
        {
          industry: "Restaurant / voice handling",
          headline: "Paris Café proves the front-end ROI logic",
          body: "The Paris Café case study shows the core economic pattern clearly: after-hours calls went from lost to answered, response time dropped to under 60 seconds, and management got back roughly 15 hours per week. Different vertical, same lead-capture math.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Voice workflow decision",
          headline: "Existing lead-qualification guide covers the workflow fit",
          body: "The lead-qualification page explains where voice AI works operationally: repeatable intake, strong phone intent, calendar or routing logic, and human escalation when nuance matters. This ROI page focuses on the economics of that same setup.",
          link: "/ai-voice-agent-lead-qualification",
        },
        {
          industry: "Service-business phone coverage",
          headline: "Phone-answering guide frames the cost comparison correctly",
          body: "The AI phone answering page already compares voice AI against answering services, voicemail, and manual handling. That gives the right baseline for ROI: software and setup cost versus missed opportunities and ongoing labor cost.",
          link: "/ai-phone-answering-for-service-businesses",
        },
      ],
      links: [
        { label: "Paris Café voice-agent case study", href: "/case-studies/paris-cafe-voice-agent" },
        { label: "AI voice agent for lead qualification", href: "/ai-voice-agent-lead-qualification" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is the simplest way to estimate voice-agent ROI?",
      answer:
        "Take the calls you currently miss or delay each month, estimate how many are good-fit leads, multiply by your normal close rate and average job or consultation value, then compare that against setup plus monthly running cost. Add back any staff time you would save on manual callbacks and note-taking. Keep the assumptions conservative.",
    },
    {
      question: "How quickly can an AI voice agent pay for itself?",
      answer:
        "For high-intent phone-driven businesses, payback can be short if even one or two additional qualified opportunities are recovered each month. For lower-volume or lower-value call flows, the timeline stretches out and simpler automations may be better first investments.",
    },
    {
      question: "Is this page the same as the general AI automation ROI guide?",
      answer:
        "No. The general ROI guide compares multiple workflow types across a business. This page is specifically about the economics of voice handling for lead follow-up: call capture, qualification, booking, routing, and how those pieces affect revenue and labor cost.",
    },
    {
      question: "When is a missed-call text-back system a better ROI move than a full voice agent?",
      answer:
        "If your main problem is unanswered calls but your intake logic is too messy for automated phone qualification, a missed-call text-back workflow is often the better first move. It costs less, launches faster, and still protects demand while you tighten the rest of the process.",
    },
    {
      question: "What usually kills ROI on a voice-agent project?",
      answer:
        "Low phone volume, unclear qualification rules, weak handoff logic, or trying to automate conversations that really need senior human judgment from the start. The system works best when the call flow is commercially meaningful and repeatable enough to design well.",
    },
  ],
  faqSubtitle:
    "Practical questions from business owners trying to decide whether voice AI is financially worth implementing",
  ctaHeading: "Want to see whether the math works for your call flow?",
  ctaText:
    "Book a 30-minute call. We will look at your missed-call volume, average job value, callback lag, and existing intake process, then estimate whether a voice-agent build would have real payback or whether a simpler workflow should come first.",
  ctaSubtext:
    "No hype and no padded ROI model. Just a practical fit check based on your real numbers.",
  relatedLinks: [
    { label: "AI voice agent for lead qualification", href: "/ai-voice-agent-lead-qualification" },
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
