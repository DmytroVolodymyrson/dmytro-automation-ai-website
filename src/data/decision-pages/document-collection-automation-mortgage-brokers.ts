import {
  Landmark,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Users,
  CalendarCheck,
  BarChart3,
  MessageSquare,
  Bot,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "document-collection-automation-for-mortgage-brokers",
  metaTitle:
    "Document Collection Automation for Mortgage Brokers — Faster Files, Fewer Chasing Tasks | Dmytro AI",
  metaDescription:
    "Automate document collection for mortgage brokers. Send reminders for missing pay stubs, IDs, tax returns, and bank statements, track incomplete files, and keep applications moving without manual chasing.",
  badgeText: "Mortgage Workflow",
  badgeIcon: Landmark,
  h1: "Document Collection Automation for Mortgage Brokers",
  heroIntro:
    "Mortgage files do not stall because borrowers hate you. They stall because document chasing is repetitive, easy to delay, and usually handled between other urgent tasks. Pay stubs are missing, bank statements are outdated, IDs are unreadable, and nobody on the team wants to spend prime selling hours sending the third reminder for the same checklist item. Document collection automation fixes that specific operational bottleneck. The right system tracks what is still missing, sends the next reminder automatically, and keeps the broker focused on live conversations instead of administrative follow-up.",
  heroSubtext:
    "Below: where document automation helps a brokerage most, what should stay human, how to handle compliance carefully, and what kind of proof is fair to claim when your published case studies are adjacent rather than mortgage-specific.",
  sections: [
    {
      type: "cards",
      title: "What document collection automation actually handles",
      subtitle:
        "The highest-value win is not fancy AI copy. It is consistent next-step execution on every incomplete file:",
      items: [
        {
          icon: FileText,
          title: "Missing document reminders",
          body: "Borrowers automatically get reminders for the exact items still outstanding — pay stubs, bank statements, ID, tax returns, or supporting forms — instead of a generic 'just checking in' email.",
        },
        {
          icon: Clock,
          title: "Follow-up cadence without manual babysitting",
          body: "The system sends the first reminder, follow-up nudges, and final escalation prompts on schedule. Files do not depend on who remembered to open the CRM that day.",
        },
        {
          icon: CalendarCheck,
          title: "Clear next-step prompts",
          body: "Each message points to one action: upload a document, reply with a question, or book a call. That reduces back-and-forth and keeps the application moving forward.",
        },
        {
          icon: BarChart3,
          title: "Incomplete-file visibility",
          body: "The brokerage can see which files are waiting on which documents, which borrowers are responsive, and where applications are slowing down instead of guessing from scattered notes.",
        },
        {
          icon: MessageSquare,
          title: "Borrower-friendly communication",
          body: "Messages can be tailored by stage, urgency, and borrower type so reminders stay useful instead of sounding like spam. The system handles consistency; your team still controls the approved wording.",
        },
        {
          icon: Users,
          title: "Broker handoff when judgment is needed",
          body: "If a borrower replies with a question, objection, or unusual situation, the automation routes the conversation back to a human. It handles reminders, not advice.",
        },
      ],
    },
    {
      type: "table",
      title: "Manual document chasing vs. automated document chasing",
      subtitle:
        "This is usually where brokerages feel the friction most clearly:",
      headers: ["Automated", "Manual"],
      rows: [
        {
          label: "Reminder consistency",
          values: [
            "Every incomplete file gets the same sequence",
            "Depends on each broker's available time",
          ],
        },
        {
          label: "Message specificity",
          values: [
            "Reminders reference the exact missing items",
            "Generic follow-up that creates extra replies",
          ],
        },
        {
          label: "File visibility",
          values: [
            "Outstanding items are tracked centrally",
            "Status lives across inboxes, notes, and memory",
          ],
        },
        {
          label: "Broker workload",
          values: [
            "Humans step in only when a conversation needs judgment",
            "Humans spend hours on repetitive nudges",
          ],
        },
        {
          label: "Pipeline speed",
          values: [
            "Files keep moving even during busy periods",
            "Applications stall when the team gets buried",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your brokerage?",
      subtitle:
        "Document automation is strongest when incomplete files are already costing you time and speed-to-close:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your team spends hours every week chasing missing borrower documents",
            "Applications regularly stall because nobody follows up consistently",
            "You already have enough file volume that manual reminders are unreliable",
            "You want faster turnaround without hiring another coordinator yet",
            "You already know the standard documents borrowers usually owe at each stage",
            "You want clearer pipeline visibility on incomplete files",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your file volume is low enough that manual follow-up is still easy",
            "Your bigger problem is lead generation, not application completion",
            "You want automation to handle compliance-sensitive explanations by itself",
            "Your process is still changing every week and there is no stable checklist yet",
            "Your CRM and file ownership are too messy to support any consistent workflow",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for mortgage document automation",
      subtitle:
        "This workflow can save real time, but it has to be built with the right limits:",
      items: [
        {
          icon: ShieldCheck,
          title: "Compliance-reviewed messaging",
          body: "Borrower-facing reminders should use approved language, timing, and consent rules. The workflow gets automated around your process; it should not improvise regulated messaging.",
        },
        {
          icon: FileText,
          title: "Secure upload paths",
          body: "The reminder system should push borrowers toward the right secure submission method instead of encouraging ad-hoc document handling over random channels.",
        },
        {
          icon: Bot,
          title: "Automation handles reminders, not underwriting advice",
          body: "The system can ask for a document and surface the next action. It should not answer nuanced product, rate, or underwriting questions that belong with a broker or ops lead.",
        },
        {
          icon: Users,
          title: "Human escalation on stalled or confused files",
          body: "When a borrower is confused, frustrated, or repeatedly incomplete, the right move is a human call — not another blind reminder. Good automation makes that handoff obvious.",
        },
      ],
    },
    {
      type: "prose",
      title: "How the workflow usually works in practice",
      subtitle:
        "A focused mortgage document-collection system is usually straightforward. The value comes from doing the basics consistently every time:",
      blocks: [
        {
          heading: "The file enters a tracked stage",
          body: "Once a borrower reaches a stage where documents are required, the CRM or LOS flags the file and creates the document checklist tied to that application. That creates a reliable starting point instead of asking staff to remember each borrower manually.",
        },
        {
          heading: "The borrower gets the first specific reminder",
          body: "The system sends a reminder listing the exact missing items and the next step to complete them. This is more effective than vague nudges because the borrower immediately knows what is still blocking progress.",
        },
        {
          heading: "Non-completed files keep moving automatically",
          body: "If the borrower does not upload or reply, the system sends the next reminder after a defined interval. Different stages can use different timing so urgent files move faster than lower-priority ones.",
        },
        {
          heading: "Replies trigger human review when needed",
          body: "If the borrower replies with confusion, an exception, or a more complex question, the broker or coordinator gets the handoff with context. The system keeps the file warm without pretending everything should stay automated forever.",
        },
        {
          heading: "Management gets visibility on where files are slowing down",
          body: "Because reminders and statuses are tracked centrally, the brokerage can see whether the real bottleneck is borrower responsiveness, internal review speed, or weak source quality. That is hard to see when the process lives inside individual inboxes.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no published mortgage-specific document automation case study yet, so the right proof framing is adjacent operational proof — the same workflow pattern applied to documented production systems:",
      studies: [
        {
          industry: "E-commerce / CRM automation",
          headline: "5,600+ contacts organized with stage-based follow-up",
          body: "A large auto-parts CRM project shows the core system pattern this page depends on: segmented records, automated reminders, clear statuses, and instant visibility instead of manual chasing. Mortgage files use different messaging, but the workflow discipline is the same.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Workflow design",
          headline: "Client onboarding automation uses the same intake-and-reminder logic",
          body: "The published onboarding guide covers document collection, intake sequencing, and status tracking for service businesses. That is closely related operational proof for a mortgage document workflow, even though the compliance rules differ.",
          link: "/client-onboarding-automation",
        },
      ],
      links: [
        { label: "Mortgage automation overview", href: "/ai-automation-for-mortgage-brokers" },
        { label: "Mortgage lead follow-up guide", href: "/ai-lead-follow-up-for-mortgage-brokers" },
        { label: "Mortgage-adjacent CRM proof", href: "/case-studies/ecommerce-crm-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Can this work with my current LOS or CRM?",
      answer:
        "Usually yes, if the system supports APIs, webhooks, or a practical export/import workflow. The key is tracking document status and triggering reminders from a stable stage, not replacing your entire stack.",
    },
    {
      question: "Will this send secure borrower documents automatically?",
      answer:
        "The automation should handle reminders and routing, not insecure document handling. The safest approach is to direct borrowers to your approved secure upload path or portal and track completion from there.",
    },
    {
      question: "Is this compliant for mortgage communication?",
      answer:
        "It can be, if the workflow uses approved messaging, consent rules, and clear human escalation points. The system should automate the timing and tracking; your team still owns compliant borrower-facing language.",
    },
    {
      question: "What does a focused build usually cost?",
      answer:
        "A narrow document-reminder workflow often lands around $2K-$4K depending on your CRM, stage logic, and handoff requirements. If it also includes broader lead follow-up, booking, and pipeline automation, the scope usually moves higher.",
    },
    {
      question: "How is this different from the mortgage lead follow-up page?",
      answer:
        "Lead follow-up focuses on first response, nurture, and getting prospects into real conversations fast. This page is narrower: it focuses on incomplete applications and missing-document reminders after the borrower is already in process.",
    },
  ],
  faqSubtitle:
    "Practical questions from brokerages considering document reminder automation",
  ctaHeading: "Want incomplete mortgage files to stop sitting in limbo?",
  ctaText:
    "Book a 30-minute call. We will look at where your files usually stall, how document status gets tracked today, and whether a focused reminder workflow would recover enough broker time and application speed to justify building first.",
  ctaSubtext:
    "No hype. No fake funded-loan promises. Just a practical recommendation based on your real pipeline friction.",
  relatedLinks: [
    { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
    { label: "AI lead follow-up for mortgage brokers", href: "/ai-lead-follow-up-for-mortgage-brokers" },
    { label: "Client onboarding automation", href: "/client-onboarding-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
