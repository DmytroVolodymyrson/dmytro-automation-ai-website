import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileCheck,
  Mail,
  Route,
  ShieldCheck,
  Users,
  Workflow,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "client-onboarding-launch-checklist-small-business",
  metaTitle:
    "Client Onboarding Launch Checklist for Small Business — What to Verify Before Go-Live | Dmytro AI",
  metaDescription:
    "Pre-launch checklist for client onboarding automation. What to verify before go-live: trigger reliability, sequence timing, intake completion gates, kickoff scheduling order, credential delivery, task routing, duplicate-message prevention, stall detection, and owner handoff.",
  badgeText: "Launch Checklist",
  badgeIcon: ClipboardList,
  h1: "Client Onboarding Launch Checklist for Small Business",
  heroIntro:
    "An onboarding workflow should not go live just because it works on test data. Before launch, a small business needs to verify the real operating layer: does the deal-won trigger fire reliably, does the sequence respect timing and completion gates, does the kickoff booking link go out only when intake is actually done, do credentials land correctly, are internal tasks routed to the right person, and what happens when a client stalls or gets a duplicate message? If those checks are vague, the first real clients through the system usually expose them the hard way.",
  heroSubtext:
    "Below: the pre-launch checks that matter most for onboarding automation, what to test before you send the first real client through, when this checklist is useful, and how this page stays distinct from the broader onboarding parent, setup, cost, ROI, DIY, and intake pages already live on the site.",
  sections: [
    {
      type: "cards",
      title: "What to verify before client onboarding automation goes live",
      subtitle:
        "This is the short list that decides whether the first real clients get a clean experience or a confusing one:",
      items: [
        {
          icon: Workflow,
          title: "The deal-won trigger fires reliably and only once",
          body: "Know exactly what event starts the onboarding sequence — CRM stage change, contract signature, payment confirmation, or manual toggle. If the trigger is ambiguous, fires twice, or can be skipped, the entire downstream sequence starts on shaky ground.",
        },
        {
          icon: Clock,
          title: "Sequence timing and completion gates are enforced",
          body: "The welcome email, intake form, document reminders, and kickoff booking link should go out in the right order and at the right intervals. If the kickoff link fires before intake is complete, or document reminders stack up after the client already submitted, the workflow feels broken even when it is technically running.",
        },
        {
          icon: FileCheck,
          title: "Intake completion gates actually block downstream steps",
          body: "The scheduling link, account setup, and internal task assignments should not fire until the intake form and required documents are confirmed received. A gate that only checks form submission but ignores missing files is not a real gate.",
        },
        {
          icon: Route,
          title: "Internal task routing lands on the right person",
          body: "Account setup, folder creation, team assignment, and kickoff prep need to route to whoever actually owns each step. If everything lands in a shared inbox or on the wrong person, the workflow creates noise instead of removing it.",
        },
      ],
    },
    {
      type: "table",
      title: "The pre-launch checks that matter most",
      subtitle:
        "If you only test the happy path with perfect data, you miss the things that usually break trust in the first week:",
      headers: ["Checklist item", "What to verify", "Why it matters"],
      rows: [
        {
          label: "Trigger reliability",
          values: [
            "The deal-won event fires exactly once per new client, works from every entry point (CRM, form, manual), and does not double-fire on status re-saves or deal edits",
            "A trigger that fires twice sends duplicate welcome emails and creates duplicate tasks — the fastest way to erode team trust in the system",
          ],
        },
        {
          label: "Sequence timing",
          values: [
            "Welcome email sends within minutes, intake reminders respect 24h and 72h delays, kickoff link waits for intake completion, and no two messages arrive within the same hour",
            "Bad timing creates inbox clutter and makes the onboarding feel automated in the worst sense — impersonal and rigid instead of reliable and professional",
          ],
        },
        {
          label: "Credential delivery",
          values: [
            "Portal logins, shared-folder invites, and tool access go out at the right point in the sequence — after intake, before kickoff — and arrive in a format the client can actually use",
            "Credentials that arrive too early get lost; credentials that arrive too late delay the kickoff the system was supposed to accelerate",
          ],
        },
        {
          label: "Duplicate-message prevention",
          values: [
            "A client who submits intake early, resubmits a corrected form, or gets manually moved between stages does not receive duplicate welcome emails, extra reminders, or repeated booking links",
            "Duplicate messages are the single most common early complaint about onboarding automation — they make the system look careless",
          ],
        },
        {
          label: "Stall detection",
          values: [
            "If a client does not complete intake within the expected window, someone is notified and a follow-up sequence begins — instead of the onboarding silently dying in the pipeline",
            "A stalled onboarding that nobody notices is worse than no automation at all, because the business assumes the system is handling it",
          ],
        },
        {
          label: "Owner handoff after go-live",
          values: [
            "Someone owns prompt changes, sequence edits, trigger fixes, CRM field updates, and escalation rules after the build is done — not just during initial setup",
            "An onboarding system without clear ownership after launch usually decays into a fragile workflow nobody wants to touch when something breaks",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is useful — and when it is not",
      subtitle:
        "This checklist is useful for businesses that already have an onboarding workflow built or nearly built and want to reduce avoidable rollout risk:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You have an onboarding automation built or nearly finished and want to verify it is actually ready for real clients",
            "The workflow touches real revenue — faster kickoff, cleaner handoff, or reduced churn from botched first impressions",
            "You want a tighter, safer first release instead of a broader onboarding system that looks complete but breaks on edge cases",
            "Your team has already been burned by duplicate messages, missed intake steps, or stalled onboardings falling through the cracks",
            "One or two bad onboarding experiences would be enough to make the team stop trusting the automation",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether onboarding automation is worth building at all",
            "Your main question is cost, ROI, setup scope, or DIY feasibility rather than go-live readiness",
            "You do not yet have a clear definition of what 'onboarding complete' means for your business",
            "Every client requires a fully custom process with almost no repeatable steps",
            "You are looking for a generic checklist that avoids making a real scope decision about the first live workflow",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to use a launch checklist without turning it into busywork",
      subtitle:
        "The point is not to create another document. The point is to make the first live onboarding workflow safer and more trustworthy:",
      items: [
        {
          icon: ShieldCheck,
          title: "Test with a real client scenario, not just clean test data",
          body: "Run a real-looking new client through the system — with a delay on intake, a missing document, a form resubmission, and a scheduling conflict. If the workflow only passes with perfect inputs, it is not ready for the first real week.",
        },
        {
          icon: Mail,
          title: "Check every outbound message for timing, tone, and duplication",
          body: "Read every email, SMS, and notification the client and the team will receive. Check the order, spacing, and what happens when a client acts faster or slower than expected. Duplicate or out-of-order messages are the most common early trust killer.",
        },
        {
          icon: AlertTriangle,
          title: "Define what the system should never do",
          body: "Sending credentials before intake, booking kickoff before documents are confirmed, routing internal tasks to the wrong person, or silently dropping a stalled client — those need hard boundaries before launch, not after the first complaint.",
        },
        {
          icon: Users,
          title: "Assign post-launch ownership before go-live",
          body: "Someone needs to own trigger fixes, sequence edits, CRM field changes, and escalation rules after the initial build is done. If ownership is unclear at launch, the first real bug will sit unresolved until someone volunteers or gets frustrated enough to fix it.",
        },
      ],
    },
    {
      type: "prose",
      title: "How this page stays distinct from the other onboarding pages",
      subtitle:
        "The live cluster already covers the parent overview, setup help, cost, ROI, setup vs. DIY, and intake forms. This page sits one step later in the decision chain:",
      blocks: [
        {
          heading: "This page is about go-live readiness, not what onboarding automation includes",
          body: "The parent page explains what you can automate in client onboarding. The setup page explains what a solid implementation should include. This launch-checklist page assumes the build is already done or nearly done, and asks whether the workflow is actually safe to run with real clients.",
        },
        {
          heading: "This page is narrower than the setup or cost pages",
          body: "The setup and cost pages help you decide scope and budget before you build. This page turns the result of that build into a release gate: what to verify, what to test, and what should be true before the first real client enters the system.",
        },
        {
          heading: "A checklist is only useful if it changes launch behavior",
          body: "If the page does not lead to a narrower first release, better testing, cleaner handoff, or a delayed launch until the workflow is safer, it is just content clutter. The real output should be a more trustworthy first onboarding experience, not more process theatre.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no standalone client-onboarding launch-checklist case study. The support comes from the live onboarding cluster plus adjacent trigger-and-routing proof already published on the site:",
      studies: [
        {
          industry: "Live onboarding cluster",
          headline: "The existing onboarding pages already define the workflow this checklist page is verifying",
          body: "The client onboarding automation page, setup page, cost page, ROI page, setup-vs-DIY page, and intake forms child already explain the surrounding buyer decisions clearly. This page isolates the remaining release-readiness layer without rehashing scope, pricing, or payback.",
          link: "/client-onboarding-automation",
        },
        {
          industry: "Accounting-firm onboarding",
          headline: "The accounting-firm onboarding page proves the same intake-to-kickoff sequence pattern in a vertical context",
          body: "Engagement-letter delivery, intake collection, portal setup, kickoff scheduling, and first-step follow-up for accounting firms. The mechanics are the same ones this checklist verifies at the cross-industry level: trigger reliability, completion gates, credential timing, and task routing.",
          link: "/client-onboarding-automation-for-accounting-firms",
        },
        {
          industry: "CRM handoff proof",
          headline: "The WheelsFeels CRM case study shows why captured contacts still need clean state truth and next-step ownership behind them",
          body: "That project is adjacent proof for the back half of the release checklist: routing accuracy, duplicate prevention, stall detection, and why a workflow is not truly live if the downstream team still has to reconstruct what happened manually.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Client onboarding automation", href: "/client-onboarding-automation" },
        { label: "Client onboarding setup for service businesses", href: "/client-onboarding-setup-for-service-businesses" },
        { label: "Client onboarding setup mistakes for small business", href: "/client-onboarding-setup-mistakes-small-business" },
        { label: "Intake forms + document collection", href: "/intake-forms-and-document-collection-automation-for-service-businesses" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should I verify before launching client onboarding automation?",
      answer:
        "At minimum: trigger reliability (fires once, from every entry point), sequence timing (correct order and spacing), intake completion gates (downstream steps actually wait), credential delivery timing, internal task routing accuracy, duplicate-message prevention, stall detection, and clear post-launch ownership. If those pieces are vague, the first real clients will expose them.",
    },
    {
      question: "What is the most common problem in the first week after launching onboarding automation?",
      answer:
        "Duplicate messages. A client who resubmits a form, gets manually moved between CRM stages, or triggers the workflow from an unexpected entry point often receives repeated welcome emails or extra reminders. That single issue erodes trust faster than almost anything else.",
    },
    {
      question: "How is this different from the client onboarding setup page?",
      answer:
        "The setup page explains what a good onboarding implementation should include and when expert help is worth paying for. This page is narrower: the go-live checklist that helps you decide whether the built workflow is actually safe enough to send real clients through.",
    },
    {
      question: "How is this different from the client onboarding cost or ROI page?",
      answer:
        "The cost page helps you budget before building. The ROI page helps you decide whether onboarding automation is worth funding. This page assumes the build is done and focuses on whether the result is actually ready to launch.",
    },
    {
      question: "When should I delay launch instead of pushing onboarding automation live?",
      answer:
        "Delay when the deal-won trigger is still unreliable, intake gates are not enforced, credential delivery timing is untested, nobody owns post-launch fixes, or a stalled client would go unnoticed. A slightly later clean launch is cheaper than a fast launch that sends duplicate messages or drops a new client's onboarding silently.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners who already have onboarding automation built and want a safer release instead of an avoidable cleanup project in the first week",
  ctaHeading: "Need a second opinion before you send real clients through a new onboarding workflow?",
  ctaText:
    "Book a 30-minute call. We will review the trigger logic, sequence timing, intake gates, credential delivery, task routing, and stall detection so you can decide whether the workflow is ready now, needs a narrower first release, or should wait until the release risk is lower.",
  ctaSubtext:
    "Useful if you already have onboarding automation built and want to reduce the chance that the first real clients expose avoidable gaps.",
  relatedLinks: [
    { label: "Client onboarding automation", href: "/client-onboarding-automation" },
    { label: "Client onboarding setup for service businesses", href: "/client-onboarding-setup-for-service-businesses" },
    { label: "Client onboarding setup mistakes for small business", href: "/client-onboarding-setup-mistakes-small-business" },
    { label: "Client onboarding cost for small business", href: "/client-onboarding-cost-small-business" },
    { label: "Client onboarding ROI for small business", href: "/client-onboarding-roi-small-business" },
    { label: "Client onboarding setup vs. DIY", href: "/client-onboarding-setup-vs-diy-small-business" },
    { label: "Intake forms + document collection", href: "/intake-forms-and-document-collection-automation-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
