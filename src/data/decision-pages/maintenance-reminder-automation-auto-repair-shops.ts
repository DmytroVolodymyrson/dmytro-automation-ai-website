import {
  Wrench,
  CalendarClock,
  BellRing,
  MessageSquare,
  Car,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Users,
  RefreshCcw,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "maintenance-reminder-automation-for-auto-repair-shops",
  metaTitle:
    "Maintenance Reminder Automation for Auto Repair Shops — Bring More Cars Back on Time | Dmytro AI",
  metaDescription:
    "Maintenance reminder automation for auto repair shops. Oil change reminders, inspection reminders, deferred-service follow-up, declined-work recall, and advisor handoff without sounding spammy.",
  badgeText: "Auto Repair Workflow",
  badgeIcon: Wrench,
  h1: "Maintenance Reminder Automation for Auto Repair Shops",
  heroIntro:
    "Most auto repair shops already paid to acquire the customer once. Then the car disappears for six months, twelve months, or until something breaks. Not because the driver chose a competitor on purpose, but because nobody reminded them when the oil change was due, the inspection was expiring, or that declined brake job still needed attention. Maintenance reminder automation fixes that narrow retention workflow. It keeps routine service, deferred work, and seasonal check-ins in front of the customer at the right time, without forcing your service advisor to remember every last-service date by hand.",
  heroSubtext:
    "Below: what auto repair maintenance reminder automation actually handles, how it stays distinct from the broader auto-repair automation page, what guardrails matter, and what adjacent proof supports the page honestly.",
  sections: [
    {
      type: "cards",
      title: "What maintenance reminder automation actually handles",
      subtitle:
        "This page is specifically about recurring-service retention and deferred-work recall, not general front-desk automation.",
      items: [
        {
          icon: CalendarClock,
          title: "Service-due reminders based on real intervals",
          body: "Once a visit is completed, the workflow can schedule future reminders for oil changes, tire rotations, inspections, fluid service, or manufacturer-recommended intervals. The customer hears from you before they drift to the quick-lube down the street.",
        },
        {
          icon: BellRing,
          title: "Inspection and registration timing",
          body: "Reminder cadence can match expiring inspections, seasonal tire changes, battery checks before winter, or AC checks before summer. The timing matters because auto repair retention is often about relevance, not just frequency.",
        },
        {
          icon: MessageSquare,
          title: "Deferred-work and declined-estimate follow-up",
          body: "If a customer declined brakes, tires, suspension work, or another non-urgent repair, the system can bring that recommendation back later with a simple reminder instead of letting the estimate disappear forever.",
        },
        {
          icon: Car,
          title: "Vehicle-specific recall sequences",
          body: "The strongest workflows reference the vehicle, prior visit, or service type when the data is available. That keeps the message grounded in an actual customer history rather than sounding like a generic blast sent to everyone in the database.",
        },
        {
          icon: ArrowUpRight,
          title: "Advisor handoff when the customer re-engages",
          body: "When a customer replies, asks for pricing, or wants to book, the service advisor gets the conversation with enough context to move fast. Automation keeps the reminder discipline; the advisor still owns the real scheduling conversation.",
        },
        {
          icon: RefreshCcw,
          title: "Dormant-customer reactivation",
          body: "Shops usually have a long tail of past customers who have not been back in 9 to 18 months. Reminder automation can segment and reawaken that list with seasonal service prompts, inspection timing, or simple 'still driving the same vehicle?' check-ins.",
        },
      ],
    },
    {
      type: "table",
      title: "Maintenance reminder automation vs. broader auto-repair automation",
      subtitle:
        "Related pages can coexist when the workflow job stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for auto repair shops",
          values: [
            "Shop owners evaluating the whole operating picture",
            "Covers missed calls, appointment scheduling, estimate follow-up, maintenance reminders, client reactivation, and review workflows across the business",
          ],
        },
        {
          label: "Maintenance reminder automation for auto repair shops",
          values: [
            "Shops that already see repeat customers but know routine service and deferred-work recall are inconsistent",
            "Focuses on service-due timing, declined-work reminders, dormant-customer reactivation, and advisor handoff when customers are ready to book",
          ],
        },
        {
          label: "Quote or estimate follow-up automation",
          values: [
            "Shops mainly losing one-time repair opportunities after a quote is sent",
            "Different stage and different messaging: recovering open repair estimates instead of retaining customers around future maintenance and recurring service",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your auto repair shop?",
      subtitle:
        "Best fit when your shop already sees enough customers that retention discipline matters more than another generic promo blast.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You already have a decent base of repeat customers but no reliable reminder system",
            "Oil changes, inspections, and routine service are being left to memory or a front-desk to-do list",
            "You know declined work and deferred maintenance should be followed up, but it rarely happens consistently",
            "You want a narrower retention workflow before rebuilding your entire shop CRM",
            "Your average customer lifetime value is meaningful enough that more repeat visits matter",
            "You can capture at least basic visit data, service dates, and contact information",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger problem is still inbound missed calls or slow first response before a visit exists",
            "You already run a disciplined reminder system through your shop software and it is performing well",
            "Your customer data is too messy to trust service dates or contact details",
            "You want fully autonomous quoting or repair advice without human review",
            "Your shop relies almost entirely on emergency one-off jobs and barely has a repeat-service base",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for auto-repair reminder workflows",
      subtitle:
        "The system should feel useful and timely, not like spam from a dealership you barely remember.",
      items: [
        {
          icon: ShieldCheck,
          title: "Trigger from real service history, not guesswork",
          body: "The workflow is only as good as the data behind it. If the shop cannot reliably tell when a visit happened, what service was completed, or whether the customer still owns the vehicle, fix that first. Bad timing destroys trust fast.",
        },
        {
          icon: AlertTriangle,
          title: "Do not hammer every customer with the same cadence",
          body: "An oil change reminder, a declined brake-job follow-up, and a seasonal tire reminder are not the same message. Good automation respects service context, spacing, and whether the customer already replied or booked elsewhere.",
        },
        {
          icon: Users,
          title: "Escalate when the customer needs a real advisor",
          body: "If the customer asks for pricing, wants to book multiple services, or has a concern about the recommendation, the conversation should move to your advisor quickly. Automation keeps the process alive; it should not trap the customer in a dead-end text thread.",
        },
        {
          icon: BarChart3,
          title: "Track repeat-visit recovery, not just message sends",
          body: "The real KPI is not how many reminders went out. It is how many customers came back for service, how many declined jobs were recovered, and whether reminders made service bays busier during normally soft weeks.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical maintenance reminder system usually works",
      subtitle:
        "The clean version is simple: log the visit, start the right reminder clock, and surface re-engagement when the customer is ready.",
      blocks: [
        {
          heading: "A completed visit or declined job starts the workflow",
          body: "Once an oil change, inspection, tire service, or repair recommendation is marked complete or declined, the next reminder timing gets set. That event is the difference between a real workflow and a random marketing list.",
        },
        {
          heading: "The first reminder shows up when it is actually useful",
          body: "The customer gets a message near the point when service is due, not every few weeks forever. That keeps the outreach relevant and makes it easier for the advisor to convert the reply into a real appointment.",
        },
        {
          heading: "Later touches recover deferred maintenance without manual chasing",
          body: "If the customer ignores the first reminder, the workflow can follow up again with a small amount of context: the last visit, the service type, or the fact that a recommendation is still open. This is where most shops currently lose easy repeat work because nobody follows through consistently.",
        },
        {
          heading: "Live intent routes back to the advisor fast",
          body: "When the customer replies, clicks to book, or asks a question, the advisor gets the handoff with enough context to move quickly. That protects the customer experience and keeps automation from becoming a wall between the shop and the vehicle owner.",
        },
        {
          heading: "Owners finally see where retention is leaking",
          body: "Over time you can see which reminders bring people back, what deferred work gets recovered, and whether service volume is dropping because reminders are late, the messages are weak, or the data is messy. That turns the workflow into both a retention engine and an operations diagnostic.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no published auto-repair maintenance-reminder case study yet. The honest proof frame is the broader auto-repair page, the HVAC reactivation work, and the published CRM case study that proves the same reminder and handoff discipline.",
      studies: [
        {
          industry: "Auto-repair parent page",
          headline: "The broader auto-repair guide already identifies maintenance reminders as one of the highest-value retention workflows",
          body: "The parent page covers the full operating picture for repair shops. This child page narrows that broader opportunity to one commercially real workflow: bringing existing customers back before routine service and deferred work disappear from memory.",
          link: "/ai-automation-for-auto-repair-shops",
        },
        {
          industry: "HVAC reactivation proof",
          headline: "Published HVAC reactivation work shows how reminder-driven follow-up can wake up dormant service revenue",
          body: "The HVAC database reactivation page demonstrates the same operational pattern this workflow depends on: timely check-ins, lifecycle-based outreach, and messages that feel helpful instead of pushy. The trade is different, but the retention mechanics are directly relevant.",
          link: "/hvac-database-reactivation",
        },
        {
          industry: "CRM lifecycle automation",
          headline: "The CRM case study proves the stage visibility and follow-up discipline behind reminder systems",
          body: "The e-commerce CRM case study shows what happens when follow-up, segmentation, and human handoff stop depending on memory. Auto repair reminder messaging is different, but the core system logic is the same.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for auto repair shops", href: "/ai-automation-for-auto-repair-shops" },
        { label: "HVAC database reactivation", href: "/hvac-database-reactivation" },
        { label: "Client reactivation automation", href: "/client-reactivation-automation" },
        { label: "All guides", href: "/guides" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the main auto-repair automation page?",
      answer:
        "The main auto-repair page is broader. It covers missed calls, appointment scheduling, estimate follow-up, maintenance reminders, client reactivation, and review workflows. This page is narrower. It stays focused on recurring-service retention and deferred-work recall after the customer has already visited your shop.",
    },
    {
      question: "Can this work with my shop management software?",
      answer:
        "Usually yes, as long as your system can expose the last visit date, service type, declined work, or another stable trigger. API access is ideal, but practical reminder workflows can also work through exports, webhooks, or middleware if the data is reliable enough.",
    },
    {
      question: "What does a focused maintenance reminder build usually cost?",
      answer:
        "A focused maintenance-reminder workflow usually lands around $1.5K-$3K depending on data cleanliness, channels, segmentation, and advisor handoff rules. Broader auto-repair automation projects cost more when they also include missed calls, estimate follow-up, scheduling, and review requests.",
    },
    {
      question: "Will this annoy customers if I remind them too often?",
      answer:
        "It can if the timing is sloppy. Good reminder automation is built around actual service intervals, deferred-work context, and clean stop conditions after someone books or replies. The goal is timely relevance, not more noise.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The biggest win is repeat-visit recovery. Shops stop losing easy revenue simply because routine service, declined work, and dormant customers were left to memory. The secondary win is freeing service advisors from repetitive reminder chasing so they can focus on live customers and real booking conversations.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating maintenance reminders in an auto repair shop",
  ctaHeading: "Want more repeat service without turning reminders into a manual chore?",
  ctaText:
    "Book a 30-minute call. We will look at how your shop handles repeat-service reminders today, where deferred work and dormant customers are slipping away, and whether a focused reminder workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No fake retention claims. Just a practical recommendation based on your shop data, service mix, and current follow-up discipline.",
  relatedLinks: [
    { label: "AI automation for auto repair shops", href: "/ai-automation-for-auto-repair-shops" },
    { label: "HVAC database reactivation", href: "/hvac-database-reactivation" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
