import {
  ClipboardList,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Users,
  Bot,
  BarChart3,
  CalendarCheck,
  MessageSquare,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "intake-forms-and-document-collection-automation-for-service-businesses",
  metaTitle:
    "Intake Forms and Document Collection Automation for Service Businesses | Dmytro AI",
  metaDescription:
    "Automate intake forms and document collection for service businesses. Standardize client intake, reminders for missing files, secure upload next steps, and handoff before onboarding stalls.",
  badgeText: "Workflow Automation",
  badgeIcon: ClipboardList,
  h1: "Intake Forms and Document Collection Automation for Service Businesses",
  heroIntro:
    "A lot of onboarding does not break because the client said no. It breaks because nobody cleanly owns the first paperwork and information handoff after the client says yes. Intake forms are incomplete. Required files never arrive. Someone sends a welcome email but forgets the upload instructions. A client asks what is still missing and your team has to reconstruct the answer from inbox threads. Intake forms and document collection automation fixes that narrow stage. It standardizes the first information request, tracks what is still missing, sends the next reminder on time, and hands the client to a human only when judgment is actually needed.",
  heroSubtext:
    "Below: what this workflow should actually cover, how it stays distinct from the broader onboarding page, what guardrails matter, and what adjacent proof is fair to cite without pretending every service business has the same compliance needs.",
  sections: [
    {
      type: "cards",
      title: "What this workflow actually handles",
      subtitle:
        "This page is not about the whole onboarding system. It is about the early intake-and-files stage that usually creates the first real slowdown:",
      items: [
        {
          icon: FileText,
          title: "Structured intake collection",
          body: "The moment a client is marked won, the right intake form goes out with the right first questions instead of relying on a staff member to remember the opening email every time.",
        },
        {
          icon: ClipboardList,
          title: "Checklist-based document requests",
          body: "Clients get a clear list of what to submit next, not a vague email asking for 'whatever is still missing.' That reduces confusion and cuts back the reply loop.",
        },
        {
          icon: Clock,
          title: "Reminder cadence without babysitting",
          body: "If a form is incomplete or a file has not been uploaded yet, the next follow-up goes out automatically on a defined schedule instead of depending on memory.",
        },
        {
          icon: ShieldCheck,
          title: "Secure upload routing",
          body: "Automation points people to the approved upload path, portal, or intake destination so staff are not collecting sensitive material through random email chains.",
        },
        {
          icon: BarChart3,
          title: "Visibility on what is still missing",
          body: "Your team can see which clients are complete, which are partially complete, and which are stuck before the rest of onboarding even starts.",
        },
        {
          icon: Users,
          title: "Human handoff when nuance matters",
          body: "If the client is confused, blocked, or asking a judgment-heavy question, the workflow escalates quickly instead of pretending another reminder will solve it.",
        },
      ],
    },
    {
      type: "table",
      title: "How this differs from the broader onboarding page",
      subtitle:
        "This child page is narrower on purpose. It isolates the intake-and-files bottleneck instead of re-explaining the whole onboarding journey:",
      headers: ["This page", "Broader onboarding page"],
      rows: [
        {
          label: "Primary focus",
          values: [
            "Getting the right forms and documents back cleanly and on time",
            "The full post-sale sequence including welcome steps, scheduling, CRM stages, and status updates",
          ],
        },
        {
          label: "Best use case",
          values: [
            "The biggest slowdown is incomplete intake, missing files, or unclear next-step requests",
            "The whole onboarding handoff is inconsistent from yes to active work",
          ],
        },
        {
          label: "Human role",
          values: [
            "Humans step in for exceptions, confusion, and sensitive questions",
            "Humans still own the broader relationship and later-stage handoff decisions",
          ],
        },
        {
          label: "Workflow stage",
          values: [
            "Earliest information-gathering layer after the client says yes",
            "Multi-stage onboarding from signed deal to active delivery",
          ],
        },
        {
          label: "Typical expansion path",
          values: [
            "Often the first child workflow to tighten before adding broader onboarding automation",
            "Often the parent system that eventually connects intake, scheduling, status updates, and delivery handoff",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your business?",
      subtitle:
        "This page is strongest when the leak is specific and repeatable, not when the whole client process is undefined:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Clients regularly submit incomplete intake forms or forget the first required files",
            "Your team spends too much time chasing missing documents after the deal is already closed",
            "The first onboarding delay usually happens before kickoff or delivery even begins",
            "You already know the common form fields, upload paths, and checklist items most clients need",
            "You want a smaller workflow build before investing in full onboarding automation",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger problem is still fresh lead response, not post-sale intake",
            "Every client needs a completely different intake path with no repeatable checklist",
            "You want automation to answer complex client questions by itself",
            "Your secure-upload or intake process is still changing every week",
            "You really need the entire onboarding system redesigned, not just the files stage",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that matter",
      subtitle:
        "The workflow is simple, but the boundaries matter a lot:",
      items: [
        {
          icon: ShieldCheck,
          title: "Keep approved intake and upload paths explicit",
          body: "The automation should route people into your approved form, portal, or secure upload path. It should not create a sloppier process just because reminders are easy to automate.",
        },
        {
          icon: Bot,
          title: "Automate the sequence, not the judgment",
          body: "Automation should request, remind, confirm, and route. It should not improvise legal, financial, operational, or compliance-sensitive answers that belong with your team.",
        },
        {
          icon: MessageSquare,
          title: "Use precise next-step language",
          body: "The most effective reminder is specific: what is missing, where to upload it, and what happens next. Generic 'just checking in' messages create more back-and-forth instead of less.",
        },
        {
          icon: CalendarCheck,
          title: "Do not trigger scheduling too early",
          body: "For many businesses, kickoff or delivery scheduling should happen only after the right intake steps are complete. Otherwise you create calendar noise before the client is actually ready.",
        },
      ],
    },
    {
      type: "prose",
      title: "How the workflow usually works in practice",
      subtitle:
        "A practical build is usually simple. The real value is consistency:",
      blocks: [
        {
          heading: "The client is marked won",
          body: "A CRM stage change, signed agreement, or manual trigger starts the intake workflow immediately. That keeps the first request from waiting on whoever closed the deal.",
        },
        {
          heading: "The first intake package goes out cleanly",
          body: "The client gets the right intake form, the right checklist, and the right upload path in the right order. That performs better than one overloaded welcome email with five unrelated asks.",
        },
        {
          heading: "Missing pieces trigger the next reminder",
          body: "If the intake form is incomplete or the file is still missing, the next follow-up happens on schedule. Staff do not have to remember whether today is the day to send the second nudge.",
        },
        {
          heading: "Exceptions get escalated with context",
          body: "If the client replies with confusion or a blocker, the workflow hands the case to the right human with the current status attached instead of forcing the client to repeat themselves.",
        },
        {
          heading: "The rest of onboarding starts from a cleaner state",
          body: "Once the intake-and-files layer is complete, scheduling, welcome steps, and delivery handoff can start with fewer surprises. That is why this page works well as a distinct child workflow under the broader onboarding parent.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no single published case study for this exact child workflow, so the proof has to stay adjacent and honest:",
      studies: [
        {
          industry: "Published parent page",
          headline: "The live onboarding guide already proves the intake, reminder, scheduling, and CRM-stage pattern",
          body: "The broader client-onboarding page already covers intake forms, document collection, scheduling, and workflow visibility. This new page simply isolates the early intake-and-files stage instead of re-explaining the whole onboarding system.",
          link: "/client-onboarding-automation",
        },
        {
          industry: "Vertical proof",
          headline: "Accounting and mortgage child pages already show that intake/document friction is commercially real in narrower clusters",
          body: "The accounting onboarding page and the mortgage document-collection page both isolate the same operational pattern: missing information, repeated reminders, clean upload paths, and clearer handoff before work can move.",
          link: "/client-onboarding-automation-for-accounting-firms",
        },
        {
          industry: "Published CRM proof",
          headline: "The e-commerce CRM case study supports the value of tracked stages, reminder discipline, and clear ownership",
          body: "That case study is not an onboarding build, but it is direct proof that structured stages, automated follow-up, and visible status recover time and reduce chaos once work outgrows memory.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Client onboarding automation", href: "/client-onboarding-automation" },
        { label: "Accounting onboarding child", href: "/client-onboarding-automation-for-accounting-firms" },
        { label: "Mortgage document-collection child", href: "/document-collection-automation-for-mortgage-brokers" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader onboarding page?",
      answer:
        "The broader onboarding page covers the whole post-sale journey: welcome steps, scheduling, CRM stages, and status updates. This page is narrower. It stays on intake forms, missing files, reminder cadence, secure upload routing, and the earliest information-gathering bottleneck.",
    },
    {
      question: "Can this work with my current CRM or intake stack?",
      answer:
        "Usually yes, if the system supports forms, webhooks, APIs, or a stable trigger when a client is won. The important part is not replacing your whole stack. It is reliably knowing what has been submitted, what is still missing, and when the next action should fire.",
    },
    {
      question: "What does a focused build usually cost?",
      answer:
        "A narrow intake-and-document workflow often lands around $1.5K-$3.5K depending on form logic, reminder paths, secure upload rules, and the number of internal handoff steps. If you also want broader onboarding, scheduling, or portal provisioning, the scope usually moves higher.",
    },
    {
      question: "Should this come before full onboarding automation?",
      answer:
        "Yes, when the biggest drag is the earliest paperwork and information handoff. If your entire post-sale journey is inconsistent, the broader onboarding page may be the better first build. If the rest of onboarding is mostly fine but intake and files keep stalling, this narrower child page is a better fit.",
    },
    {
      question: "Does this replace staff?",
      answer:
        "No. It removes repetitive chasing and makes status visible. Staff still handle nuance, relationship-sensitive conversations, and the exceptions that should not be automated blindly.",
    },
  ],
  faqSubtitle:
    "Practical questions about intake-form and document-collection automation",
  ctaHeading: "Need the first onboarding handoff to stop stalling?",
  ctaText:
    "Book a 30-minute call. We will look at where clients usually get stuck after the deal is closed, whether the intake-and-files stage is the real bottleneck, and whether this narrower workflow should come before a broader onboarding build.",
  ctaSubtext:
    "No generic pitch. Just a practical recommendation based on your actual client handoff process.",
  relatedLinks: [
    { label: "Client onboarding automation", href: "/client-onboarding-automation" },
    { label: "Client onboarding cost for small business", href: "/client-onboarding-cost-small-business" },
    { label: "Client onboarding launch checklist for small business", href: "/client-onboarding-launch-checklist-small-business" },
    { label: "Client onboarding automation for accounting firms", href: "/client-onboarding-automation-for-accounting-firms" },
    { label: "Document collection automation for mortgage brokers", href: "/document-collection-automation-for-mortgage-brokers" },
    { label: "Intake and conflict-check automation for law firms", href: "/intake-and-conflict-check-automation-for-law-firms" },
    { label: "Intake forms and document collection automation for medical clinics", href: "/intake-forms-and-document-collection-automation-for-medical-clinics" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
