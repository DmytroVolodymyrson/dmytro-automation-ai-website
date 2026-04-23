import {
  ClipboardCheck,
  Wrench,
  MessageSquare,
  BadgeDollarSign,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileText,
  Clock,
  Car,
  Users,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "estimate-follow-up-automation-for-auto-repair-shops",
  metaTitle:
    "Estimate Follow-Up Automation for Auto Repair Shops — Recover More Approved Repairs | Dmytro AI",
  metaDescription:
    "Estimate follow-up automation for auto repair shops. Recover open repair quotes with timed reminders, deferred-work check-ins, financing-aware messaging, advisor handoff, and stale-estimate visibility.",
  badgeText: "Auto Repair Workflow",
  badgeIcon: ClipboardCheck,
  h1: "Estimate Follow-Up Automation for Auto Repair Shops",
  heroIntro:
    "The inspection is done. The customer has your quote for brakes, suspension work, tires, diagnostics, or a larger repair. Then nothing happens. In an auto repair shop, that silence is expensive because the customer is not always saying no. They might be waiting for payday, comparing one more shop, asking a spouse, delaying a non-urgent repair, or simply forgetting until the warning light gets worse. If nobody follows up clearly and consistently, the approved work often goes to the shop that stayed visible longer. Estimate follow-up automation fixes that narrow stage. It starts after the repair estimate is sent, keeps the job alive with practical reminders and next-step prompts, and routes real buying intent back to your service advisor before another repair approval dies in the gap.",
  heroSubtext:
    "Below: what auto-repair estimate follow-up automation actually handles, how it stays distinct from the broader auto-repair automation page and the maintenance-reminder child page, what guardrails matter, and what adjacent proof supports the page honestly.",
  sections: [
    {
      type: "cards",
      title: "What auto-repair estimate follow-up automation actually handles",
      subtitle:
        "This page is specifically about repair opportunities that already reached the estimate stage but have not been approved yet.",
      items: [
        {
          icon: Clock,
          title: "Timed follow-up after the repair estimate goes out",
          body: "Once the estimate is marked sent, the workflow can trigger touchpoints at practical intervals like day 2, day 5, and day 10. That matters because repair work often goes cold not from a hard rejection, but because nobody followed up while the customer was still deciding.",
        },
        {
          icon: MessageSquare,
          title: "Messages that match the real repair decision",
          body: "Good follow-up is not a generic 'just checking in.' It can reference the repair category, what happens if the work gets delayed, whether financing or scheduling is the blocker, and what the next step is if the customer wants to move ahead.",
        },
        {
          icon: BadgeDollarSign,
          title: "Deferred-work and price-hesitation nudges",
          body: "A lot of estimates stall for predictable reasons: waiting until next paycheck, deciding whether the repair can wait, comparing shops, or not understanding the urgency. Automation can handle those common hesitation points with approved messaging while still routing real scope or pricing conversations to a human.",
        },
        {
          icon: ArrowUpRight,
          title: "Advisor handoff when the customer re-engages",
          body: "If the customer replies, asks about timing, wants to book, or needs clarification, the service advisor gets the conversation with the estimate context attached. That keeps humans focused on active approvals instead of manually chasing every open repair quote from scratch.",
        },
        {
          icon: FileText,
          title: "Open-estimate visibility and stale-quote reporting",
          body: "Owners can see how many repair estimates are still open, how old they are, where replies are happening, and whether advisors are losing work because quotes go untouched too long. That visibility often matters as much as the messaging itself.",
        },
        {
          icon: Car,
          title: "Practical urgency tied to real vehicle decisions",
          body: "Auto repair has real urgency: safety issues, declining drivability, parts availability, and the fact that a small repair can turn into a bigger one if it waits. Follow-up can reflect those realities without fake countdowns or spammy pressure tactics.",
        },
      ],
    },
    {
      type: "table",
      title: "Auto-repair estimate follow-up vs. broader auto-repair automation vs. maintenance reminders",
      subtitle:
        "These pages can coexist when the workflow stage stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for auto repair shops",
          values: [
            "Shop owners evaluating the full operating picture",
            "Covers the broader system: missed calls, appointment scheduling, estimate follow-up, maintenance reminders, client reactivation, and review workflows across the business",
          ],
        },
        {
          label: "Estimate follow-up automation for auto repair shops",
          values: [
            "Shops that already inspect and quote consistently but let too many repair estimates go quiet",
            "Focuses narrowly on sent-estimate recovery: reminder timing, deferred-work nudges, financing or timing hesitation, advisor handoff, and stale-estimate visibility",
          ],
        },
        {
          label: "Maintenance reminder automation for auto repair shops",
          values: [
            "Shops trying to retain existing customers around future service intervals",
            "Different stage and different job: recurring-service reminders, declined-maintenance recall, and dormant-customer reactivation after a visit already happened",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your auto repair shop?",
      subtitle:
        "Best fit when inspections and estimates happen reliably, but too many approvals still die in silence.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You send repair estimates every week and a meaningful share of them go cold",
            "Your advisor is too busy with live customers and incoming calls to follow up consistently",
            "You lose work because customers get a quote, disappear, and nobody re-engages them",
            "Your average approved repair is valuable enough that one recovered estimate matters",
            "You can tell when an estimate was actually sent and who should own the next step",
            "You want a narrower quote-stage build before rebuilding your whole shop CRM",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger problem is still missed calls or slow first response before the estimate exists",
            "You already recover most estimates with disciplined manual follow-up",
            "You send very few estimates each month",
            "Your quoting process is too inconsistent to trigger reliable automation",
            "You want automation to approve safety-critical repairs or negotiate custom scope without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for auto-repair estimate-recovery workflows",
      subtitle:
        "The system should create cleaner follow-up, not more front-desk noise or awkward reminders.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate before the estimate stage is real",
          body: "If one advisor sends a quote by text, another prints it, and a third only mentions the price verbally at pickup, the workflow has nothing stable to trigger from. Tighten the estimate stage first, then automate.",
        },
        {
          icon: FileText,
          title: "Every touch should move the customer toward one real next step",
          body: "The best follow-up asks for something clear: reply with a question, review financing, approve the work, or pick a booking slot. Long vague check-ins do not recover repairs.",
        },
        {
          icon: Users,
          title: "Know when the advisor has to take over",
          body: "The workflow should escalate when the customer needs pricing clarification, wants to split urgent work from optional work, asks about warranties, or is ready to book. Automation keeps the estimate active; it should not replace the service advisor in high-context conversations.",
        },
        {
          icon: Wrench,
          title: "Use honest urgency tied to real repair context",
          body: "Brake issues, tire wear, drivability concerns, inspection deadlines, and parts timing are legitimate reasons to move. Follow-up should reflect those realities. Fake scarcity or exaggerated safety copy will just erode trust.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical auto-repair estimate-recovery system usually works",
      subtitle:
        "The strongest version is simple: trigger from the estimate stage, follow up while the repair quote is still warm, and route humans when approval intent returns.",
      blocks: [
        {
          heading: "The repair estimate is marked sent",
          body: "That event becomes the workflow trigger. Whether the estimate lives in Tekmetric, Shop-Ware, Mitchell, AutoFluent, GoHighLevel, a spreadsheet, or another system, the key is having one reliable point where the shop knows the quote is out and waiting on the customer.",
        },
        {
          heading: "The first follow-up arrives before the customer forgets the diagnosis",
          body: "A short professional touch lands while the inspection findings are still fresh. This is often where shops get the biggest lift, because manual follow-up usually happens too late or only after the customer has already moved on.",
        },
        {
          heading: "Later messages handle predictable hesitation",
          body: "If there is still no reply, later touches can address common blockers: waiting for payday, deciding what is urgent, comparing one more shop, or needing to coordinate schedules. Each message should reduce decision friction instead of repeating the same ask.",
        },
        {
          heading: "High-intent replies go back to the advisor fast",
          body: "Once the customer re-engages, the advisor sees the conversation with the estimate context attached. That means a human steps in when the opportunity becomes live again instead of spending the day manually chasing every cold-looking repair quote.",
        },
        {
          heading: "Owners finally see why approved work is leaking",
          body: "Over time, you can see whether estimates are dying because follow-up is too slow, the messages stop too early, advisors are overloaded, or customers are mostly stalling on the same categories of work. That turns the workflow into both a revenue-recovery system and an operations diagnosis tool.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is not a published auto-repair estimate-recovery case study yet. The honest proof frame is the broader auto-repair page, the generic quote-follow-up guide, and the published CRM case study that proves the same stage visibility and handoff discipline.",
      studies: [
        {
          industry: "Auto-repair parent page",
          headline: "The broader auto-repair guide already identifies estimate follow-up as one of the highest-value leaks in the shop",
          body: "The parent page explains why missed calls, open estimates, and weak maintenance recall quietly drain revenue from repair shops. This child page narrows that broader opportunity to one workflow stage: recovering sent repair estimates before they disappear.",
          link: "/ai-automation-for-auto-repair-shops",
        },
        {
          industry: "Quote-stage workflow",
          headline: "The generic quote follow-up guide proves the same estimate-recovery mechanics in a broader service-business context",
          body: "That page covers reminder timing, objection-aware messaging, exit conditions, and response routing. This auto-repair child keeps the same mechanics but adds repair-specific realities like deferred work, safety urgency, financing hesitation, and advisor handoff.",
          link: "/quote-follow-up-automation",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "Published CRM automation work shows the stage visibility, reminder discipline, and human handoff logic this workflow depends on",
          body: "The e-commerce CRM case study demonstrates the same operational mechanics: stage tracking, automated reminders, visibility into untouched opportunities, and routing high-intent replies to humans. The auto-repair context is different, but the system logic is directly relevant.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for auto repair shops", href: "/ai-automation-for-auto-repair-shops" },
        { label: "Maintenance reminder automation for auto repair shops", href: "/maintenance-reminder-automation-for-auto-repair-shops" },
        { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
        { label: "All guides", href: "/guides" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader auto-repair automation page?",
      answer:
        "The broader auto-repair page covers the whole system: missed calls, appointment scheduling, estimate follow-up, maintenance reminders, client reactivation, and review workflows. This page is narrower. It focuses specifically on what happens after the repair estimate is sent and before the work is approved or abandoned.",
    },
    {
      question: "How is this different from the maintenance-reminder page?",
      answer:
        "Maintenance reminders are about future recurring service after a visit already happened. Estimate follow-up is about recovering repair work that was already diagnosed and quoted but has not been approved yet. Different timing, different message, different business problem.",
    },
    {
      question: "What does a focused auto-repair estimate-follow-up build usually cost?",
      answer:
        "A focused estimate-recovery workflow usually lands around $1.5K-$3K depending on your current systems, message channels, escalation rules, and whether the estimate trigger is already clean. Broader shop automation builds cost more when they also include missed calls, scheduling, reminders, and reviews.",
    },
    {
      question: "Can this work with my current shop software?",
      answer:
        "Usually yes, as long as there is a reliable way to detect when the repair estimate was sent and who should own the follow-up. Many shops can support this through their shop software directly, an integration layer, or a cleaned-up CRM and messaging stack around the existing system.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is recovering approved repair work that would otherwise fade out because nobody stayed in touch at the right time. When the average approved job is meaningful, one additional booked repair per month can cover the build quickly. The secondary win is freeing service advisors from repetitive chase work.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating estimate follow-up in an auto repair shop",
  ctaHeading: "Want fewer repair estimates dying after the quote is sent?",
  ctaText:
    "Book a 30-minute call. We will look at how your shop handles sent estimates today, where repair work is going cold, and whether a focused estimate-recovery workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No inflated close-rate promises. Just a practical recommendation based on your shop workflow, estimate volume, and current follow-up discipline.",
  relatedLinks: [
    { label: "AI automation for auto repair shops", href: "/ai-automation-for-auto-repair-shops" },
    { label: "Maintenance reminder automation for auto repair shops", href: "/maintenance-reminder-automation-for-auto-repair-shops" },
    { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
