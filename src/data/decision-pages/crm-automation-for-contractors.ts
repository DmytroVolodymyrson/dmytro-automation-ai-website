import {
  Database,
  Phone,
  CalendarCheck,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Users,
  LayoutDashboard,
  Code2,
  Zap,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "crm-automation-for-contractors",
  metaTitle:
    "CRM Automation for Contractors — Pipeline, Estimate Follow-Up, Dispatch Handoff | Dmytro AI",
  metaDescription:
    "CRM automation for contractors. Structure your pipeline, automate estimate follow-up, tighten dispatch handoff, and stop losing jobs to inbox chaos and slow callbacks.",
  badgeText: "Contractor CRM",
  badgeIcon: Database,
  h1: "CRM Automation for Contractors",
  heroIntro:
    "If your company is still juggling new leads, estimates, callbacks, and dispatch notes across inboxes, phones, and sticky notes, you do not have a lead problem — you have a pipeline problem. For most contractors, the real value of CRM automation is not 'having a CRM.' It is making sure every lead is tagged, every estimate gets followed up, every booked job reaches the field team with context, and every completed job creates the next opportunity.",
  heroSubtext:
    "Below: what contractor CRM automation actually handles, when an off-the-shelf system is enough, and when a custom setup is worth it.",
  sections: [
    {
      type: "cards",
      title: "What contractor CRM automation actually handles",
      subtitle:
        "The biggest wins usually happen in the handoffs between office work and field work:",
      items: [
        {
          icon: Phone,
          title: "Lead capture and source tagging",
          body: "Every form fill, call, and referral gets logged with source, service type, urgency, and territory. Instead of a generic 'new lead' bucket, your team sees what came in, what it is worth, and who should own it first.",
        },
        {
          icon: Zap,
          title: "Estimate follow-up without manual chasing",
          body: "When a quote is sent, the CRM starts the follow-up sequence automatically. Day-2 reminder, day-5 check-in, day-14 reactivation, and task creation if a high-value estimate sits untouched. The goal is simple: fewer open quotes dying because nobody followed up.",
        },
        {
          icon: CalendarCheck,
          title: "Scheduling and dispatch handoff",
          body: "Booked work moves cleanly from sales to operations. Customer notes, service type, appointment window, and special instructions route into the dispatch workflow so the field team is not walking in blind or calling the office for missing details.",
        },
        {
          icon: BarChart3,
          title: "Post-job follow-up and pipeline visibility",
          body: "Completed jobs can trigger review requests, warranty reminders, reactivation campaigns, or maintenance follow-up. At the same time, owners get a live view of where jobs are getting stuck: first response, quote stage, booking, or after the work is complete.",
        },
      ],
    },
    {
      type: "table",
      title: "Three ways contractors usually run their pipeline",
      subtitle:
        "Most companies are somewhere on this progression:",
      headers: ["Spreadsheet + inbox", "Basic contractor CRM", "Automated CRM stack"],
      rows: [
        {
          label: "First response",
          values: ["Manual callback when someone notices", "Basic notification to the office", "Instant routing, tagging, and follow-up sequence"],
        },
        {
          label: "Estimate follow-up",
          values: ["Whoever remembers calls back", "Manual task reminders", "Stage-based reminders, nudges, and escalation rules"],
        },
        {
          label: "Dispatch context",
          values: ["Notes in text threads or memory", "Customer details stored in one system", "Sales notes, job context, and scheduling rules passed automatically"],
        },
        {
          label: "Reporting",
          values: ["No clear visibility", "Basic pipeline counts", "Source-to-close visibility by lead type, stage, and team"],
        },
        {
          label: "Ongoing cost",
          values: ["Cheap upfront, expensive in missed jobs", "$50-$300/month plus setup", "$10-$300/month tools after build, depending on stack"],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your company?",
      subtitle:
        "CRM automation pays off fastest when the pipeline is active enough to justify structure:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You run multiple crews or service technicians and the office is constantly triaging calls",
            "You send estimates every week but do not have a consistent quote follow-up process",
            "Leads come from more than one channel and get messy fast",
            "Sales, scheduling, and field delivery are handled by different people",
            "You already spend on ads, LSAs, or lead sources and need better conversion discipline",
            "You want clearer visibility into where jobs are actually being lost",
          ],
        },
        {
          icon: XCircle,
          heading: "Probably not the right fit yet",
          variant: "neutral",
          items: [
            "You are a solo operator handling a small number of direct-referral jobs",
            "You rarely send estimates or your jobs close on the first call",
            "Your current office process is already tight and response times are consistently fast",
            "You want a giant all-in-one system before you have agreed pipeline stages",
            "You are not ready to invest time in cleanup, ownership, and team adoption",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Where contractor CRM rollouts usually go wrong",
      subtitle:
        "The failure points are operational, not technical:",
      items: [
        {
          icon: AlertTriangle,
          title: "No one agreed on the stages first",
          body: "If one person says 'quoted,' another says 'pending,' and a third just leaves notes in email, automation has nothing stable to act on. Define the actual stages first: new lead, contacted, estimate scheduled, estimate sent, booked, completed, reactivation. Then automate.",
        },
        {
          icon: Clock,
          title: "Estimate follow-up is still optional",
          body: "Many contractors install a CRM and still treat quote follow-up like a personal habit instead of a process. The whole point is that the system should keep the work moving even when the estimator is on site all day.",
        },
        {
          icon: Users,
          title: "Office and field teams do not share the same context",
          body: "A CRM is not useful if the dispatcher, estimator, and tech all see different pieces of the job. Good setups pass notes, contact details, service type, and appointment context through the whole workflow instead of trapping them in one person's inbox.",
        },
        {
          icon: LayoutDashboard,
          title: "You buy software before choosing the workflow",
          body: "Jobber, Housecall Pro, ServiceTitan, GoHighLevel, Airtable, and custom dashboards can all work. The right tool depends on the workflow you need to enforce. Pick the handoffs that matter first, then choose the stack that supports them.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof for this kind of system",
      subtitle:
        "There is no published contractor-specific CRM case study on the site yet, so the proof here stays honest and adjacent:",
      studies: [
        {
          industry: "E-commerce CRM",
          headline: "5,600+ leads organized with automated follow-up and Slack visibility",
          body: "The WheelsFeels build shows the CRM side of the problem clearly: contact organization, tagging, follow-up logic, and internal visibility. Contractors need the same discipline even if the pipeline stages are different.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Trades adjacency",
          headline: "Trade-service pages already show where contractor operations break",
          body: "The electrical and plumbing pages focus on missed calls, estimate follow-up, scheduling, and reviews. This contractor CRM page sits one level higher: it is about the system that ties those moving parts together.",
          link: "/ai-automation-for-electrical-contractors",
        },
      ],
      links: [
        { label: "GoHighLevel vs. custom CRM", href: "/gohighlevel-vs-custom-crm-small-business" },
        { label: "CRM automation examples", href: "/crm-automation-examples-small-business" },
        { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What kind of contractor benefits most from CRM automation?",
      answer:
        "Usually trades businesses with an active estimate pipeline and more than one person involved in sales or scheduling: plumbing, electrical, HVAC, roofing, cleaning, landscaping, painting, and similar service companies. If jobs can be lost because the office is busy, callbacks are slow, or quote follow-up is inconsistent, CRM automation usually has a clear payoff.",
    },
    {
      question: "Do I need to replace my existing contractor software?",
      answer:
        "Not always. Many contractor CRM automations sit on top of what you already use. The goal is often to improve routing, tagging, follow-up, reminders, and reporting while keeping your field-service or dispatch platform in place. We verify what can stay, what needs cleanup, and where a custom layer makes sense before recommending a rebuild.",
    },
    {
      question: "Can this work with Jobber, Housecall Pro, or ServiceTitan?",
      answer:
        "In many cases, yes. Those systems usually remain the operational home for scheduling and job records, while automation handles notifications, follow-up, qualification, reminders, and visibility around them. The exact approach depends on the APIs and workflow gaps, but integration is usually possible at the communication and pipeline layer.",
    },
    {
      question: "What does a contractor CRM automation build usually cost?",
      answer:
        "A narrow build like estimate follow-up or lead-routing cleanup can land around $1.5K-$3K. A broader contractor CRM automation setup that covers intake, tagging, quote follow-up, scheduling handoff, and reporting is more often in the $3K-$8K range depending on how much custom logic and integration work is involved.",
    },
    {
      question: "What should I automate first if my process is messy?",
      answer:
        "Start where jobs are easiest to lose: first response and quote follow-up. If every lead gets tagged fast and every estimate gets a consistent sequence, the rest becomes easier to clean up. Trying to automate every back-office step at once usually creates more chaos, not less.",
    },
  ],
  faqSubtitle: "Practical answers about CRM systems for contractors",
  ctaHeading: "Want a contractor pipeline that does not depend on memory?",
  ctaText:
    "Book a 30-minute call. We will map your current lead-to-job workflow, find the handoffs where revenue is leaking, and show you what should be automated first.",
  ctaSubtext:
    "No generic software pitch. Just a practical look at your actual workflow.",
  relatedLinks: [
    { label: "GoHighLevel vs. custom CRM", href: "/gohighlevel-vs-custom-crm-small-business" },
    { label: "CRM automation examples", href: "/crm-automation-examples-small-business" },
    { label: "AI automation for electrical contractors", href: "/ai-automation-for-electrical-contractors" },
    { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
