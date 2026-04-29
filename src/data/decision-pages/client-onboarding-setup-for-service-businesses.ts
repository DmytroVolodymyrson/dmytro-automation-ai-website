import {
  Settings,
  Workflow,
  CheckCircle2,
  XCircle,
  ClipboardList,
  Clock,
  ShieldCheck,
  Wrench,
  MessageSquare,
  AlertTriangle,
  Users,
  CalendarCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "client-onboarding-setup-for-service-businesses",
  metaTitle:
    "Client Onboarding Setup for Service Businesses — Welcome Sequences, Intake, Scheduling, CRM | Dmytro AI",
  metaDescription:
    "What goes into client onboarding setup for a service business? Welcome sequence triggers, intake and document collection handoff, kickoff scheduling, internal task ownership, CRM stage movement, and when setup help is worth paying for.",
  badgeText: "Onboarding Workflow Setup",
  badgeIcon: Settings,
  h1: "Client Onboarding Setup for Service Businesses",
  heroIntro:
    "You already know onboarding automation matters. The deal closes, the contract gets signed, and then the real question starts: what should the first automated build actually include? The answer is not 'everything on the parent page.' It is the narrower set of triggers, handoffs, and routing decisions that decide whether onboarding feels reliable or creates more confusion than it solves. A clean first build needs a trustworthy deal-won trigger, a welcome sequence that sets expectations without overwhelming, intake and document collection that chases without nagging, kickoff scheduling that fires at the right moment, internal task ownership so nothing falls through, and CRM stage movement that reflects reality instead of aspirational pipeline status. This page is about that implementation layer — not the broader case for onboarding automation, and not a pitch for a specific tool.",
  heroSubtext:
    "Below: what client onboarding setup actually covers, the trigger and handoff decisions that matter most, the launch mistakes that create inbox chaos or dropped clients, and how to tell whether your business needs focused setup help or a lighter manual path first.",
  sections: [
    {
      type: "cards",
      title: "What client onboarding setup actually covers",
      subtitle:
        "A useful build is not just 'send a welcome email when the deal closes.' These are the setup layers that decide whether onboarding feels professional or duct-taped:",
      items: [
        {
          icon: Workflow,
          title: "A reliable deal-won trigger",
          body: "The workflow needs a stable signal that a new client is real: contract signed, payment received, CRM stage changed, or proposal accepted. If that trigger is unreliable — fires on draft proposals, tentative pipeline moves, or manual status changes that happen days late — the welcome sequence goes out at the wrong time or not at all.",
        },
        {
          icon: MessageSquare,
          title: "Welcome sequence that sets expectations without overwhelming",
          body: "The first message should confirm the engagement, tell the client what happens next, and give a realistic timeline. The mistake is cramming login credentials, intake forms, scheduling links, and policy documents into a single email. Setup decides the drip cadence so each step lands when the client is ready for it.",
        },
        {
          icon: ClipboardList,
          title: "Intake and document collection handoff",
          body: "Intake forms go out after the welcome, not simultaneously. Automated reminders chase missing documents at sensible intervals — typically 1 day, 3 days, and 7 days. Setup defines what counts as 'complete' so the next step triggers only when the client has actually submitted what is needed.",
        },
        {
          icon: CalendarCheck,
          title: "Kickoff scheduling that fires at the right moment",
          body: "The kickoff booking link should go out after intake is complete, not the moment the deal closes. Sending it too early means the client books before your team has what they need. Setup decides the trigger condition and handles calendar integration, availability checks, and confirmation messages.",
        },
        {
          icon: Users,
          title: "Internal task ownership and team routing",
          body: "When a new client enters onboarding, internal tasks should be created and assigned automatically: account setup, folder creation, team introductions, tool provisioning. Setup defines who owns what, what notifications fire internally, and what happens when a task is not completed on time.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What should be configured before launch",
      subtitle:
        "These are the decisions that prevent the common first-week failures in onboarding workflows:",
      items: [
        {
          icon: Wrench,
          title: "CRM stage movement that reflects actual progress",
          body: "The client should move from 'won' to 'onboarding' to 'intake complete' to 'kickoff scheduled' to 'active' based on real events, not manual drag-and-drop. Setup maps each CRM transition to a concrete trigger so pipeline reporting is accurate and nobody has to remember to update the board.",
        },
        {
          icon: ShieldCheck,
          title: "Stall detection and re-engagement rules",
          body: "If a client goes silent after the welcome email — does not fill out intake, does not book the kickoff — the system should escalate after a defined window. Setup decides the timing of that escalation, whether it is an automated nudge or a human follow-up task, and when to stop chasing.",
        },
        {
          icon: Clock,
          title: "Timing rules that match your service delivery",
          body: "A three-day onboarding for a simple engagement is different from a two-week onboarding for a complex project. Setup should adjust drip timing, reminder frequency, and milestone checks based on the service tier or engagement type, not force one cadence on every new client.",
        },
        {
          icon: AlertTriangle,
          title: "Conditional paths for different client types",
          body: "Not every client needs the same onboarding. A returning client does not need the full welcome sequence. A high-value engagement may need a personal touch instead of a fully automated flow. Setup defines the branching logic so the right clients get the right experience.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When setup help is worth paying for — and when it is not",
      subtitle:
        "Professional setup makes sense when the operational risk of getting the workflow wrong is higher than the cost of the build:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth paying for setup help",
          variant: "green",
          items: [
            "You onboard 5+ new clients per month and consistency matters for retention",
            "Welcome sequences, intake forms, and kickoff scheduling need to fire in the right order with the right timing",
            "Internal task assignment currently depends on someone remembering to create tasks manually",
            "CRM pipeline stages do not reflect actual onboarding progress because nobody updates them",
            "Document collection follow-up is inconsistent — some clients get chased, others slip through",
            "You have tried building onboarding automation yourself and the trigger logic or sequencing broke",
          ],
        },
        {
          icon: XCircle,
          heading: "A lighter path is probably enough",
          variant: "neutral",
          items: [
            "Client volume is low enough that a checklist and manual emails still work reliably",
            "Onboarding is genuinely simple — one welcome email, one form, one call — and does not need multi-step sequencing",
            "The bigger leak is still lead response, follow-up, or closing before onboarding even starts",
            "Nobody internally can define what 'onboarding complete' means yet, so the real problem is process clarity rather than automation",
            "You do not have a CRM or project management tool in place to anchor the workflow",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Common setup mistakes that break onboarding workflows",
      subtitle:
        "These are the practical errors that make onboarding automation feel chaotic instead of professional:",
      blocks: [
        {
          heading: "Launching without a clean deal-won signal",
          body: "If the CRM marks deals as 'won' at different stages depending on who enters them — or if proposals, invoices, and contracts each trigger a different status change — the welcome sequence fires unpredictably. Some clients get onboarded before the contract is signed. Others wait days because nobody updated the pipeline. The first setup job is almost always cleaning up this trigger, not polishing the welcome email copy.",
        },
        {
          heading: "Sending everything on day one",
          body: "Welcome email, intake form, scheduling link, portal credentials, team introductions, and policy documents all in the first message. The client is overwhelmed, skips most of it, and then the business spends the next week re-sending individual items. A clean build drips these over 2-5 days so each step gets attention.",
        },
        {
          heading: "No completion gate between intake and kickoff",
          body: "The kickoff booking link goes out the moment the welcome sequence fires, not when the client has actually submitted their intake form and documents. The team shows up to the kickoff call without the information they need, wastes the meeting on admin, and the client's first real experience with the business is disorganized.",
        },
        {
          heading: "Internal tasks with no ownership or deadline",
          body: "The automation creates internal tasks — account setup, folder creation, tool provisioning — but does not assign them to a specific person or set a deadline. Tasks sit in a shared queue. Nobody knows who is responsible. The client waits while the team assumes someone else is handling it.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "There is no dedicated published setup case study for client onboarding. The honest support comes from the parent onboarding page, the accounting-firm onboarding child, and the published case studies that prove the workflow mechanics this page narrows.",
      studies: [
        {
          industry: "Client onboarding parent page",
          headline: "The service-business onboarding page already defines the operational workflow this setup page narrows",
          body: "That page explains intake forms, welcome sequences, kickoff scheduling, CRM pipeline automation, and status updates as a system. This setup page stays narrower by focusing on implementation scope before launch: what triggers to trust, what sequence timing to configure, what handoff gates to build, and when setup help is worth paying for.",
          link: "/client-onboarding-automation",
        },
        {
          industry: "Accounting firm onboarding",
          headline: "The accounting-firm onboarding page proves the same workflow pattern in a specific vertical",
          body: "Engagement-letter delivery, intake forms, portal setup, kickoff scheduling, and first-step follow-up for accounting firms. The workflow mechanics are the same ones this setup page covers at the cross-industry level: trigger reliability, sequencing, completion gates, and internal task routing.",
          link: "/client-onboarding-automation-for-accounting-firms",
        },
        {
          industry: "E-Commerce CRM automation",
          headline: "The ecommerce CRM case study proves trigger-based pipeline automation and multi-step follow-up sequencing",
          body: "Thousands of leads organized and followed up through automated CRM workflows with trigger-based actions and status tracking. The same pipeline automation pattern powers onboarding setup: deal-won triggers, stage movement, task creation, and sequenced outreach.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Client onboarding automation", href: "/client-onboarding-automation" },
        { label: "Client onboarding for accounting firms", href: "/client-onboarding-automation-for-accounting-firms" },
        { label: "Intake forms and document collection", href: "/intake-forms-and-document-collection-automation-for-service-businesses" },
        { label: "Ecommerce CRM automation case study", href: "/case-studies/ecommerce-crm-automation" },
        { label: "Paris Cafe voice agent case study", href: "/case-studies/paris-cafe-voice-agent" },
        { label: "AI automation for accounting firms", href: "/ai-automation-for-accounting-firms" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does client onboarding setup involve for a service business?",
      answer:
        "It usually includes defining a reliable deal-won trigger, configuring a welcome sequence with the right drip timing, setting up intake form delivery and document-collection reminders, building a kickoff scheduling step that fires after intake is complete, mapping internal task ownership and notifications, and wiring CRM stage transitions to reflect actual onboarding progress.",
    },
    {
      question: "How is this different from the client onboarding automation page?",
      answer:
        "The parent page explains what client onboarding automation does and when it fits. This page is specifically about implementation scope: what has to be configured before launch, what usually breaks, and when setup help is worth paying for versus keeping the process manual.",
    },
    {
      question: "How is this different from the intake forms and document collection page?",
      answer:
        "The intake forms page covers one slice of onboarding: collecting documents and forms. This page covers the full implementation scope of a first onboarding build — welcome sequences, intake handoff, kickoff scheduling, internal task routing, and CRM stage movement as a connected workflow.",
    },
    {
      question: "When is setup help worth paying for?",
      answer:
        "Usually when you onboard enough clients that inconsistency creates real retention risk, when the trigger logic or sequencing is complex enough that DIY attempts have already broken, when internal task routing depends on automation rather than memory, or when CRM pipeline stages need to reflect actual progress instead of manual updates.",
    },
    {
      question: "What is the most common setup mistake?",
      answer:
        "Sending everything on day one — welcome email, intake form, scheduling link, credentials, and policy documents in a single message. The client skips most of it, and the business spends the next week re-sending individual items. A clean build drips these steps over multiple days so each one gets attention.",
    },
  ],
  faqSubtitle:
    "Practical questions from service business owners evaluating onboarding implementation",
  ctaHeading: "Want client onboarding set up cleanly the first time?",
  ctaText:
    "Book a 30-minute call. We will look at how new clients enter your workflow today, where handoffs break, what sequencing should look like, and scope the narrowest build that makes onboarding consistent without over-engineering.",
  ctaSubtext:
    "No generic automation pitch. Just a practical setup conversation about your deal-won triggers, welcome sequence timing, intake handoff, and internal task routing.",
  relatedLinks: [
    { label: "Client onboarding automation", href: "/client-onboarding-automation" },
    { label: "Client onboarding cost for small business", href: "/client-onboarding-cost-small-business" },
    { label: "Client onboarding for accounting firms", href: "/client-onboarding-automation-for-accounting-firms" },
    { label: "Intake forms and document collection", href: "/intake-forms-and-document-collection-automation-for-service-businesses" },
    { label: "Ecommerce CRM automation case study", href: "/case-studies/ecommerce-crm-automation" },
    { label: "AI automation for accounting firms", href: "/ai-automation-for-accounting-firms" },
    { label: "Client reactivation setup for service businesses", href: "/client-reactivation-setup-for-service-businesses" },
    { label: "Review request automation setup", href: "/review-request-automation-setup-for-service-businesses" },
    { label: "No-show reduction setup", href: "/no-show-reduction-setup-for-service-businesses" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
