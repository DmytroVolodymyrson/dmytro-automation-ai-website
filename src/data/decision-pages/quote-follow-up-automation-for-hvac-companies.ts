import {
  ClipboardCheck,
  ThermometerSun,
  MessageSquare,
  BadgeDollarSign,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileText,
  Clock3,
  Users,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "quote-follow-up-automation-for-hvac-companies",
  metaTitle:
    "Quote Follow-Up Automation for HVAC Companies — Recover More Open HVAC Quotes | Dmytro AI",
  metaDescription:
    "Quote follow-up automation for HVAC companies. Recover open repair, replacement, and maintenance quotes with timed reminders, objection-aware messaging, office handoff, and clear quote-stage visibility.",
  badgeText: "HVAC Workflow",
  badgeIcon: ClipboardCheck,
  h1: "Quote Follow-Up Automation for HVAC Companies",
  heroIntro:
    "A lot of HVAC jobs are not lost on the first call. They are lost after the estimate is already out. The tech did the visit. The office sent pricing for a repair, replacement, or maintenance option. Then the quote sits there while the homeowner compares bids, waits on timing, or simply moves on with the company that followed up first. Quote follow-up automation fixes that narrower stage. It starts after the quote is sent, keeps the opportunity alive with practical reminders and low-friction next steps, and routes real buying intent back to the office before another winnable HVAC job dies quietly after pricing is already on the table.",
  heroSubtext:
    "Below: what HVAC quote follow-up automation should actually handle, how it stays distinct from the broader HVAC page plus the lead-response, scheduling, maintenance-reminder, and phone-layer pages already live, what guardrails matter, and what proof honestly supports the page without pretending there is already a published HVAC quote-recovery case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What HVAC quote follow-up automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on sent quotes that have not booked yet — not the earlier lead-response layer or the later retention layer.",
      items: [
        {
          icon: Clock3,
          title: "Timed follow-up after the HVAC quote goes out",
          body: "Once the estimate is marked sent, the workflow can trigger touches at practical intervals like day 1, day 3, and day 7. That matters because a lot of HVAC quotes do not die from a clear no. They die from delay while the homeowner compares bids, gets distracted, or waits too long to decide.",
        },
        {
          icon: MessageSquare,
          title: "Messages that match how HVAC buyers actually stall",
          body: "Good follow-up is not a generic 'just checking in.' It can ask whether the homeowner has questions about timing, scope, financing, repair vs replacement, or whether they still want to move forward this week. The goal is to reduce friction, not to nag.",
        },
        {
          icon: BadgeDollarSign,
          title: "Objection-aware nudges around price, urgency, and timing",
          body: "HVAC quotes often stall for predictable reasons: comparing bids, waiting on another household decision-maker, stretching the repair a little longer, or trying to decide whether to repair now or replace later. Automation can handle those common hesitation points with approved messaging while still routing real negotiation to a human.",
        },
        {
          icon: ArrowUpRight,
          title: "Office handoff when the buyer re-engages",
          body: "If the homeowner replies, asks for a callback, wants to book, or raises a real objection, the office gets the conversation with quote context attached. That keeps humans focused on live revenue instead of manually restarting every quiet estimate from scratch.",
        },
        {
          icon: FileText,
          title: "Open-quote visibility and stale-estimate reporting",
          body: "Owners can see how many HVAC quotes are sitting open, how old they are, which service types recover best, and whether jobs are dying because nobody followed up consistently once pricing was already sent.",
        },
        {
          icon: ThermometerSun,
          title: "Honest urgency tied to real HVAC timing",
          body: "The strongest quote follow-up reflects real conditions: shoulder-season scheduling windows, no-cool or no-heat urgency, replacement timing, and the fact that delayed decisions can turn into emergency calls later. It should not rely on fake countdown pressure.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the HVAC cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays obvious:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for HVAC companies",
          values: [
            "Owners evaluating the full operating system across leads, quotes, scheduling, phone coverage, reviews, and seasonal retention",
            "Explains the whole HVAC automation picture instead of isolating the sent-quote recovery stage",
          ],
        },
        {
          label: "HVAC lead follow-up automation",
          values: [
            "Companies still losing inbound opportunities before a quote exists",
            "Focuses on first response, early nurture, and speed-to-lead for fresh inquiries rather than sent estimates that went quiet later",
          ],
        },
        {
          label: "HVAC scheduling and follow-up automation",
          values: [
            "Companies that already booked the job but need cleaner confirmations, reminders, reschedules, and office-to-field continuity",
            "Focuses on the booked-job communication layer after the customer has already said yes",
          ],
        },
        {
          label: "Quote follow-up automation for HVAC companies",
          values: [
            "Companies that already send plenty of quotes but lose too many opportunities after pricing is out",
            "Focuses tightly on sent-quote recovery: reminder timing, objection-aware messaging, office handoff, and stale-quote visibility once the estimate is already on the table",
          ],
        },
        {
          label: "Maintenance reminder automation for HVAC companies",
          values: [
            "Companies working existing-customer seasonal retention and service-due recall",
            "A later lifecycle stage built around repeat-service timing and dormant-customer reactivation, not quote recovery before the first job is won",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your HVAC company?",
      subtitle:
        "Best fit when your team already quotes consistently, but too many jobs still die quietly after pricing is sent.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You send enough repair, replacement, or maintenance quotes each month that manual follow-up is inconsistent",
            "Your office gets buried in live calls and booked work, so quote-stage opportunities get less attention than they should",
            "One recovered replacement or repair job per month would likely justify the build",
            "You have a real 'quote sent' stage in your CRM, field-service software, or office workflow",
            "You want a narrower quote-recovery workflow before rebuilding the whole HVAC operating stack",
            "You can respond quickly when a homeowner re-engages and is ready to move forward",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still missed calls or slow first response before the quote exists",
            "You send very few quotes each month, so a dedicated quote workflow will not move much yet",
            "Your team already follows up on quotes consistently and close rates are strong",
            "There is no clean way to tell when an HVAC quote was actually sent or who owns the next step",
            "You want automation negotiating custom scope, diagnosing systems, or closing every replacement conversation without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep HVAC quote follow-up useful",
      subtitle:
        "The goal is disciplined quote recovery, not more noise or fake urgency.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate before the quote stage is real",
          body: "If one person emails pricing, another texts rough numbers, and nobody updates the system when the estimate is actually out, the workflow has nothing reliable to trigger from. Tighten the quote stage first, then automate it.",
        },
        {
          icon: FileText,
          title: "Every touch needs one clear next step",
          body: "The strongest follow-up tells the homeowner exactly what to do next: reply with a question, confirm they want to move ahead, request a callback, or schedule the work. Long generic check-ins do not recover many HVAC jobs.",
        },
        {
          icon: Users,
          title: "Know when the office needs to take over",
          body: "If the buyer wants to revise scope, compare options, discuss financing, or talk through repair-versus-replace questions, the office should step in fast. Automation keeps the quote active. It should not pretend to close every job alone.",
        },
        {
          icon: BarChart3,
          title: "Measure recovered quotes, not just sent reminders",
          body: "The KPI is not how many follow-up messages went out. It is how many quotes re-engaged, how many jobs booked, how old open quotes are getting, and whether the office finally has visibility into where quote-stage revenue is leaking.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical HVAC quote-recovery workflow usually works",
      subtitle:
        "The strongest version is simple: trigger from the sent-quote stage, follow up while the job is still warm, and route humans when intent comes back.",
      blocks: [
        {
          heading: "The HVAC quote is marked sent",
          body: "That event becomes the workflow trigger. Whether the estimate lives in ServiceTitan, Housecall Pro, Jobber, GoHighLevel, a spreadsheet, or a cleaned-up office process, the key is having one reliable moment where the system knows pricing is out and the next move belongs to the homeowner.",
        },
        {
          heading: "The first follow-up lands while the visit is still fresh",
          body: "A short useful touch goes out before the homeowner forgets the walkthrough, estimate, or conversation with the tech. That is usually where HVAC companies get the biggest lift because manual follow-up often happens after the best opportunities already cooled off.",
        },
        {
          heading: "Later touches handle predictable hesitation",
          body: "If there is still no response, later messages can address familiar stall points: comparing bids, waiting on timing, uncertainty about repair versus replacement, or wanting one more question answered before booking. Each message should reduce decision friction instead of repeating the same ask.",
        },
        {
          heading: "High-intent replies go back to the office with context attached",
          body: "When the prospect re-engages, the right person gets the conversation plus the quote context. That makes follow-up feel fast and human instead of forcing the office to reconstruct the entire job from inbox fragments, notes, and callbacks.",
        },
        {
          heading: "Owners finally see where quote-stage revenue is leaking",
          body: "Over time the workflow shows whether quotes are dying because follow-up starts too late, stops too early, certain job types need different timing, or the office is too overloaded to work open estimates with any discipline once same-day calls take over.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published HVAC quote-follow-up-only case study on the site yet. The honest support comes from the broader HVAC parent page, the dedicated HVAC database-reactivation page, and the published CRM case study that proves the same follow-up discipline and stale-opportunity visibility.",
      studies: [
        {
          industry: "HVAC parent page",
          headline: "The broader HVAC guide already names quote follow-up as one of the clearest revenue-recovery workflows",
          body: "That parent page explicitly frames quote follow-up alongside missed-call recovery, lead response, scheduling, review requests, and seasonal reminders. This child narrows that sent-estimate layer instead of re-explaining the whole HVAC stack.",
          link: "/ai-automation-for-hvac-companies",
        },
        {
          industry: "HVAC database reactivation proof",
          headline: "The published HVAC reactivation page proves the same operating discipline: structured follow-up on contacts the business already paid to acquire",
          body: "That page is not quote-stage-only, but it is the closest direct HVAC proof on the site for timed outreach, segmentation, and bringing stale opportunities back into a live conversation instead of letting the database sit idle.",
          link: "/hvac-database-reactivation",
        },
        {
          industry: "Published CRM lifecycle proof",
          headline: "The e-commerce CRM case study proves the stage tracking, reminder discipline, and human handoff this workflow depends on",
          body: "That case study is not an HVAC build, but it is direct proof of the operating mechanics: stage visibility, automated reminders, stale-opportunity reporting, and routing live replies to humans quickly. The workflow logic is directly relevant here.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for HVAC companies", href: "/ai-automation-for-hvac-companies" },
        { label: "HVAC lead follow-up automation", href: "/hvac-lead-follow-up-automation" },
        { label: "HVAC scheduling and follow-up automation", href: "/hvac-scheduling-and-follow-up-automation" },
        { label: "HVAC database reactivation", href: "/hvac-database-reactivation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from HVAC lead follow-up automation?",
      answer:
        "HVAC lead follow-up automation is about the stage before a quote exists: fast response to new inquiries, missed calls, and early nurture. This page is narrower. It focuses on what happens after the estimate is already sent and before the customer says yes or disappears.",
    },
    {
      question: "How is this different from HVAC database reactivation?",
      answer:
        "Database reactivation works older lists of past customers or stale opportunities at a broader lifecycle level. Quote follow-up automation is much tighter. It is for active quotes that should still be winnable right now if the office follows up with discipline.",
    },
    {
      question: "What does a focused HVAC quote-follow-up build usually cost?",
      answer:
        "A focused quote-recovery workflow usually lands around $1.5K-$3K depending on your current systems, channel mix, escalation rules, and whether the quote-stage trigger is already clean. Broader HVAC automation builds cost more when they also include lead response, scheduling, maintenance reminders, reviews, or phone-answering layers.",
    },
    {
      question: "Can this work with my current HVAC CRM or field-service stack?",
      answer:
        "Usually yes, as long as there is a reliable way to detect when a quote was sent and who should own the next step. ServiceTitan, Housecall Pro, Jobber, GoHighLevel, spreadsheets, and custom CRM stacks can often support this directly or through a practical integration layer.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is recovering HVAC quotes that would otherwise die in silence after pricing goes out. When your average repair or replacement job value is meaningful, one additional booked job per month can cover the build quickly. The secondary win is giving the office cleaner visibility into which quotes are still alive so the team stops chasing blindly.",
    },
  ],
  faqSubtitle:
    "Practical questions from HVAC operators considering quote follow-up automation",
  ctaHeading: "Want fewer HVAC quotes dying in silence?",
  ctaText:
    "Book a 30-minute call. We will look at how your team handles sent quotes today, where estimate-stage revenue is leaking, and whether a focused quote-recovery workflow is the cleanest automation to build before a broader CRM overhaul.",
  ctaSubtext:
    "No fake close-rate promises. Just a practical recommendation based on your current quoting process, response discipline, and office workload.",
};

export default data;
