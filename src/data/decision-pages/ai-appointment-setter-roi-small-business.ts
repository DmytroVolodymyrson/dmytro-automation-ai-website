import {
  Calculator,
  TrendingUp,
  Clock,
  CalendarCheck,
  CheckCircle2,
  XCircle,
  Bot,
  Phone,
  ArrowUpRight,
  BarChart3,
  Users,
  AlertTriangle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-appointment-setter-roi-small-business",
  metaTitle:
    "AI Appointment Setter ROI for Small Business — Payback, Cost, and When It Is Worth It | Dmytro AI",
  metaDescription:
    "How to evaluate AI appointment setter ROI for a small business. Practical payback math, setup and monthly cost ranges, where appointment-setting automation creates real value, and when it is overkill.",
  badgeText: "Appointment Setter ROI",
  badgeIcon: Calculator,
  h1: "AI Appointment Setter ROI for Small Business",
  heroIntro:
    "If your business loses good inquiries because booking happens too slowly, callbacks drift into tomorrow, or after-hours leads sit until someone is free, an AI appointment setter can have very short payback. The ROI is usually not about eliminating every admin task. It comes from recovering bookings that would have gone cold, shortening the gap between inquiry and scheduled next step, and removing repetitive first-response work that keeps piling up on the owner or front desk. The wrong business will overbuy. The right one can justify the build with only a modest lift in booked calls, estimates, or consultations.",
  heroSubtext:
    "Below: where the ROI usually comes from, how to model it conservatively, what makes payback happen faster, and when a simpler workflow is the better first investment.",
  sections: [
    {
      type: "table",
      title: "Where the ROI usually comes from",
      subtitle:
        "Appointment-setter economics are usually a mix of recovered bookings and reduced admin drag. These are the main levers:",
      headers: ["Operational change", "Why it matters financially"],
      rows: [
        {
          label: "Faster first response",
          values: [
            "Web leads, SMS inquiries, or inbound callers get a next step immediately instead of sitting until someone has time to reply",
            "More ready-to-buy prospects stay engaged long enough to book, which is often the highest-value gain",
          ],
        },
        {
          label: "After-hours booking coverage",
          values: [
            "Evenings, weekends, and overflow periods still get a booking path instead of a dead-end voicemail or delayed manual follow-up",
            "One extra qualified booking per month can justify a meaningful share of the monthly cost in many service businesses",
          ],
        },
        {
          label: "Cleaner qualification before the calendar fills",
          values: [
            "Routine inquiries are screened before they land on the schedule, so the team spends less time on bad-fit appointments",
            "Higher booking quality means the value is not just more meetings but better meetings",
          ],
        },
        {
          label: "Reduced callback and scheduling admin",
          values: [
            "The office stops spending hours every week chasing routine first-touch replies, reminders, and basic scheduling questions",
            "That time can move into sales, dispatch, or delivery instead of repetitive intake work",
          ],
        },
        {
          label: "Stronger CRM handoff",
          values: [
            "Every booking request lands with consistent notes, qualification answers, and the correct next action",
            "Less cleanup work means fewer dropped leads hiding inside messy inbox or calendar workflows",
          ],
        },
      ],
    },
    {
      type: "cards",
      title: "A conservative ROI model",
      subtitle:
        "You do not need inflated conversion claims. Use simple, bounded math:",
      items: [
        {
          icon: TrendingUp,
          title: "1. Start with the real leak",
          body: "Look at how many inquiries currently wait too long for a response, arrive after hours, or never get booked cleanly because the team is busy. That is the opportunity pool. Do not model ROI on total lead volume if only a slice of that volume is actually recoverable.",
        },
        {
          icon: CalendarCheck,
          title: "2. Count booked outcomes, not generic engagement",
          body: "The meaningful metric is not whether someone replied to an AI. It is whether a qualified consult, estimate, appointment, or next-step call got booked that probably would have been delayed or missed otherwise.",
        },
        {
          icon: Clock,
          title: "3. Add back saved admin time separately",
          body: "If staff or the owner currently spend 5–10 hours per week on repetitive booking replies, reminder follow-up, reschedules, and manual CRM updates, that time has value too. ROI is not only new revenue; it is avoided operational drag.",
        },
        {
          icon: BarChart3,
          title: "4. Keep the payback test modest",
          body: "A cautious model is enough: one or two additional qualified bookings per month plus a few hours of recovered admin time. If that conservative case already covers a meaningful chunk of the monthly spend or pays back setup quickly, the project is probably worth deeper review.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What usually makes payback happen faster",
      subtitle:
        "Appointment setters are not equally valuable in every business. ROI comes faster when these conditions are true:",
      items: [
        {
          icon: Phone,
          title: "The inquiry already arrives warm",
          body: "If someone already called, filled out a form, or asked for availability, the intent is real. Appointment-setting automation performs best when it protects demand that already exists instead of trying to create demand from cold outreach.",
        },
        {
          icon: Users,
          title: "Your team is bottlenecked on speed, not persuasion",
          body: "If the main failure point is slow response, missed timing, or routine scheduling friction, automation can move the needle fast. If every inquiry needs a senior closer immediately, the ROI case gets weaker.",
        },
        {
          icon: Bot,
          title: "The workflow has clear rules",
          body: "The best ROI pages are not the fanciest. They are the ones where qualification criteria, calendar rules, service areas, and escalation paths are clear enough that routine conversations can be automated safely.",
        },
        {
          icon: ArrowUpRight,
          title: "You start with one booking path",
          body: "A focused rollout usually pays back faster than an all-in-one AI receptionist build. If one narrow workflow fixes most of the leak, start there, prove the economics, then expand later.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When the ROI case is strong vs. weak",
      subtitle:
        "Use this to decide whether appointment-setting automation belongs near the top of your priority list:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Strong ROI case",
          variant: "green",
          items: [
            "Leads regularly wait too long for a booking response or arrive after hours",
            "One additional booked consultation, estimate, or service job per month would matter financially",
            "Your qualification rules are clear enough that obvious bad fits do not need to clog the calendar",
            "The owner or office spends meaningful time on repetitive first-touch booking work",
            "You want a production workflow tied to calendar, reminders, and CRM handoff — not a disconnected demo",
          ],
        },
        {
          icon: XCircle,
          heading: "Weak ROI case",
          variant: "neutral",
          items: [
            "Lead volume is low enough that same-day manual booking is still easy",
            "Nearly every inquiry needs a long consultative conversation before any next step can be offered",
            "The team has not agreed on qualification, service-area, or escalation rules",
            "You mostly want AI because the category sounds modern, not because there is a real booking-speed problem",
            "You are comparing a finished workflow against a bare software subscription and expecting the same economics",
          ],
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "This page is grounded in direct and adjacent proof already on the site. The exact workflows differ, but the economics are the same: faster first response, cleaner qualification, and more reliable handoff create the value.",
      studies: [
        {
          industry: "Restaurant / inbound phone coverage",
          headline: "Paris Café proves the value of handling booking intent immediately",
          body: "The Paris Café case study shows the front-end ROI logic clearly: after-hours calls stopped dying in voicemail, callers got a live answer in under 60 seconds, and management got back roughly 15 hours per week. Different vertical, same appointment-speed math.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Appointment-setting economics",
          headline: "The pricing guide already shows what the ROI model is buying",
          body: "The appointment-setter cost page breaks down where money actually goes: calendar rules, qualification logic, CRM handoff, voice vs. text complexity, and post-launch tuning. This ROI page focuses on when that spend pays back.",
          link: "/ai-appointment-setter-cost-small-business",
        },
        {
          industry: "Implementation scope",
          headline: "The setup-help page explains why narrow scope wins first",
          body: "The setup guide is adjacent proof for the ROI decision because many small businesses do not need a huge system. They need one booking workflow that works reliably inside real operating rules. That scope discipline is often what makes the economics attractive.",
          link: "/ai-appointment-setter-setup",
        },
      ],
      links: [
        { label: "AI appointment setter", href: "/ai-appointment-setter" },
        { label: "AI appointment setter cost for small business", href: "/ai-appointment-setter-cost-small-business" },
        { label: "AI appointment setter setup help", href: "/ai-appointment-setter-setup" },
        { label: "AI appointment setter for home service businesses", href: "/ai-appointment-setter-for-home-service-businesses" },
      ],
    },
    {
      type: "prose",
      title: "What small businesses usually get wrong about appointment-setter ROI",
      subtitle:
        "These mistakes make the economics look worse or better than they really are:",
      blocks: [
        {
          heading: "Confusing activity with booked outcomes",
          body: "A workflow can send messages, answer questions, and look busy without generating more qualified bookings. The right ROI question is simple: did the system create or protect real next steps that were previously getting delayed or dropped?",
        },
        {
          heading: "Overbuying before the first leak is fixed",
          body: "Many small businesses do not need an all-channel AI front desk on day one. If the main leak is after-hours booking or slow response on routine inquiries, a smaller appointment-setting workflow often pays back faster and creates cleaner learning for the next phase.",
        },
        {
          heading: "Ignoring the cost of manual delay because it feels invisible",
          body: "Callback lag and admin follow-up often feel free because they do not arrive as a line item on an invoice. They are not free. Missed timing, messy handoff, and repetitive scheduling work already cost money. The build only has to cost less than that leak to be worth serious consideration.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "How do I estimate ROI on an AI appointment setter?",
      answer:
        "Start with the inquiries you currently answer too slowly, miss after hours, or fail to turn into booked next steps. Estimate only a modest recovery rate, multiply by the normal value of a booked consult, estimate, or service job, and then add back any admin time your team would save on repetitive booking work. Keep the assumptions conservative.",
    },
    {
      question: "How quickly can appointment-setting automation pay for itself?",
      answer:
        "For businesses where one additional booked job, estimate, or consultation has meaningful value, payback can be short. For lower-volume businesses or flows that require heavy human persuasion before any booking, the timeline stretches out and a simpler workflow may be smarter first.",
    },
    {
      question: "Is this page different from the AI appointment setter cost page?",
      answer:
        "Yes. The cost page stays focused on pricing ranges and what makes builds expensive. This page is about the economics after that: how to think about recovered bookings, saved admin time, payback speed, and whether the project is actually worth doing now.",
    },
    {
      question: "When is a simpler workflow a better move than a full AI appointment setter?",
      answer:
        "If your main issue is only after-hours form response or missed-call recovery, a narrower workflow can be the better first step. It costs less, launches faster, and still lets you prove whether faster first response creates real business value before you add more complexity.",
    },
    {
      question: "What usually kills ROI on appointment-setting automation?",
      answer:
        "Low lead volume, unclear qualification rules, messy calendar logic, and buying a bigger system than the workflow actually needs. ROI is strongest when the business has a real speed-to-lead problem and a repeatable path from inquiry to scheduled next step.",
    },
  ],
  faqSubtitle:
    "Practical questions from business owners trying to decide whether appointment-setting automation is financially worth implementing",
  ctaHeading: "Want to see whether an appointment setter would actually pay back in your business?",
  ctaText:
    "Book a 30-minute call. We will look at your current response speed, booking leak points, after-hours demand, and average appointment value, then estimate whether an appointment-setter workflow has real payback or whether a simpler build should come first.",
  ctaSubtext:
    "No padded ROI model. Just a practical fit check based on your real workflow.",
  relatedLinks: [
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "AI appointment setter cost for small business", href: "/ai-appointment-setter-cost-small-business" },
    { label: "AI appointment setter setup help", href: "/ai-appointment-setter-setup" },
    { label: "AI appointment setter vs. receptionist", href: "/ai-appointment-setter-vs-receptionist" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
