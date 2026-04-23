import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Database,
  GitBranch,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "n8n-workflow-audit-checklist",
  metaTitle:
    "n8n Workflow Audit Checklist — What to Check Before You Pay for Cleanup | Dmytro AI",
  metaDescription:
    "Use this n8n workflow audit checklist before you pay for cleanup. Practical guide to branch sprawl, broken credentials, bad data mapping, workflow trust, and whether the smarter next step is cleanup, rebuild, or narrowing the scope.",
  badgeText: "n8n Audit",
  badgeIcon: ClipboardList,
  h1: "n8n Workflow Audit Checklist",
  heroIntro:
    "If your n8n workflow feels messy, do not pay for cleanup blindly. Audit the workflow first. The real job is not to generate another giant checklist nobody uses. The job is to answer three practical questions quickly: what is actually broken, whether the core workflow is still worth saving, and whether the smartest next move is bounded cleanup, a rebuild, or a smaller workflow scope entirely. A useful n8n audit starts with the live business path — trigger, branch logic, downstream writes, human handoff, and failure handling — before anybody sells more implementation hours.",
  heroSubtext:
    "Below: what to inspect before you pay for cleanup, which red flags usually point to cleanup, which ones usually point to rebuild, and how this page stays distinct from the broader n8n cleanup-service and cleanup-vs-rebuild guides already live on the site.",
  sections: [
    {
      type: "cards",
      title: "What to audit first in a messy n8n workflow",
      subtitle:
        "Do not start with node colors or cosmetic layout. Start with the parts of the workflow that decide whether the business can trust it:",
      items: [
        {
          icon: Workflow,
          title: "Trigger and branch truth",
          body: "Can someone explain exactly what should start the workflow, what branches it into different paths, what should stop it, and what the workflow should do after a reply, booking, or downstream state change? If the answer is no, the stack needs simplification before more automation gets added.",
        },
        {
          icon: Database,
          title: "Downstream data quality",
          body: "Check whether the workflow writes cleanly into the CRM, database, inbox, or Slack alert layer. Duplicate records, stale stages, repeated notifications, and conflicting tags usually mean the workflow can look 'successful' in n8n while still damaging the business process.",
        },
        {
          icon: RefreshCcw,
          title: "Credential, webhook, and mapping drift",
          body: "Inherited n8n stacks often survive on fragile auth, outdated payload assumptions, and patchy field mapping. Audit whether credentials are current, webhook inputs still match reality, and transformed data lands in the shape the business actually needs now.",
        },
        {
          icon: ShieldCheck,
          title: "Ownership and handoff rules",
          body: "Who owns the record when the workflow succeeds, fails, gets a reply, or needs manual intervention? If staff still manage that from memory, screenshots, or inbox checking, the workflow may run technically but it is not operationally trustworthy.",
        },
      ],
    },
    {
      type: "table",
      title: "What the audit usually points to",
      subtitle:
        "A useful audit should lead to one of three honest outcomes instead of vague 'we can fix anything' language:",
      headers: ["Bounded cleanup", "Rebuild inside n8n", "Narrow scope / stop forcing the current workflow"],
      rows: [
        {
          label: "Usually the right answer when...",
          values: [
            "One or two important workflows are still structurally sound and the main problem is clutter, auth drift, or bad mapping",
            "Triggers, branches, notes, and downstream writes are too tangled to trust, but n8n is still clearly the right platform",
            "The current workflow tries to do too much at once and keeps creating edge cases the team cannot realistically own",
          ],
        },
        {
          label: "Audit signs",
          values: [
            "Duplicate branches, dead copies, silent failures, or wrong writes — but a clear business path still exists underneath",
            "Nobody can explain the branch logic cleanly and every 'fix' creates another surprise downstream",
            "The business needs a smaller, more bounded automation layer before it needs more rescue work on the current sprawl",
          ],
        },
        {
          label: "Goal",
          values: [
            "Stabilize the smallest trustworthy workflow fast",
            "Reset the implementation with cleaner naming, ownership, stop conditions, and branch logic",
            "Reduce operational chaos by simplifying what the workflow is even trying to own",
          ],
        },
        {
          label: "Big mistake",
          values: [
            "Trying to preserve every old branch just because it already exists",
            "Paying for a bigger rebuild than the business actually needs first",
            "Pretending the workflow should keep owning everything when the smarter answer is to narrow scope",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this checklist is useful — and when it is not",
      subtitle:
        "This page is for owners with live n8n automations who need a clearer diagnosis before paying for rescue work:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your n8n workflow already exists and the team no longer fully trusts it in production",
            "You inherited the automation from a freelancer, agency, contractor, or your own fast-moving experiments",
            "You want to know whether cleanup is enough before paying for a rescue project",
            "The workflow touches leads, CRM records, inbound routing, or another path where one silent error is already expensive",
            "You are willing to hear that the right answer may be cleanup, rebuild, or narrowing the workflow scope entirely",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still choosing an automation platform and do not even know if n8n should be in the stack yet",
            "The real job is first-time workflow implementation, not recovery-stage diagnosis",
            "The workflow is basically healthy and you mainly need one new branch or integration added",
            "You want a checklist that avoids making an actual cleanup-vs-rebuild decision",
            "Nobody on the team can own the workflow even after the audit identifies what is wrong",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "The five red flags that should change your decision quickly",
      subtitle:
        "These usually matter more than whether the canvas still 'looks organized':",
      items: [
        {
          icon: AlertTriangle,
          title: "People keep checking the workflow manually",
          body: "If someone still has to watch inboxes, compare CRM records by hand, or verify whether alerts fired correctly, the workflow has a trust problem that an audit should surface before another build goes live.",
        },
        {
          icon: Sparkles,
          title: "Automations keep running after the business state already changed",
          body: "If follow-up keeps firing after a reply, a booking, or a manual handoff, stop conditions or branch ownership are broken. That is one of the clearest signs the workflow needs diagnosis before anyone adds more logic.",
        },
        {
          icon: Wrench,
          title: "Nobody knows which old copies or branches are safe to delete",
          body: "When old test versions, copied workflows, and backup branches stay forever because everyone is afraid to touch them, cleanup scope is usually real and urgent.",
        },
        {
          icon: GitBranch,
          title: "The branch logic makes sense only to the original builder",
          body: "A production workflow should be explainable by the next operator. If only one person can decode why a lead went down one path instead of another, the workflow is already too brittle.",
        },
        {
          icon: Scale,
          title: "The invoice decision is smaller than the owner-time decision",
          body: "A cheap cleanup that keeps dragging the owner back into workflow triage is often more expensive than it looks. The audit should count checking time, manual repair time, and trust erosion — not just vendor hours.",
        },
      ],
    },
    {
      type: "prose",
      title: "How this page stays distinct from the other n8n recovery pages",
      subtitle:
        "The live cluster already covers consultant help, cost, cleanup service, cleanup vs. rebuild, and DIY. This page sits one step earlier:",
      blocks: [
        {
          heading: "This page is about diagnosis before purchase",
          body: "The cleanup-service page explains what rescue help includes. The cleanup-vs-rebuild page explains how to choose between two recovery paths. This audit checklist page exists to help an owner inspect the workflow first so either decision can be made with less guesswork.",
        },
        {
          heading: "A checklist is only useful if it leads to a decision",
          body: "The right output is not 'your workflow is messy.' The right output is: bounded cleanup now, rebuild now, or narrow the workflow scope before you spend more. If the checklist does not move you toward that decision, it is just content fluff.",
        },
        {
          heading: "This page should make rescue scope smaller, not larger",
          body: "A disciplined audit narrows the project to the workflow that leaks the most trust first. It should reduce vague implementation sprawl, not create another open-ended list of things someone might eventually fix.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone n8n audit case study here. The support comes from the live n8n cluster plus adjacent workflow-trust proof already published on the site:",
      studies: [
        {
          industry: "Existing n8n cluster",
          headline: "The consultant, cost, cleanup, rebuild, and DIY pages already define the surrounding buyer decisions clearly",
          body: "That cluster proves there is a real commercially distinct recovery stage inside the n8n category. This audit page extracts the pre-purchase diagnostic query inside that cluster: what should I inspect before I pay for cleanup help?",
          link: "/n8n-workflow-cleanup-service",
        },
        {
          industry: "Lead-generation workflow proof",
          headline: "The Instagram lead-generation case study shows why clear orchestration and sane branching matter",
          body: "That published n8n build is direct adjacent proof that high-volume automation works when branching, enrichment, and downstream routing are structured clearly instead of accumulated through quick fixes.",
          link: "/case-studies/instagram-lead-generation",
        },
        {
          industry: "CRM workflow proof",
          headline: "The WheelsFeels CRM case study shows the downstream cost of weak workflow trust",
          body: "Different stack shape, same operational lesson. When stage truth, alerting, and follow-up discipline drift, the team falls back to manual workarounds quickly. A real audit exists to catch that before more automation gets layered on top.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "n8n workflow cleanup service", href: "/n8n-workflow-cleanup-service" },
        { label: "n8n workflow cleanup vs. rebuild", href: "/n8n-workflow-cleanup-vs-rebuild" },
        { label: "n8n automation consultant", href: "/n8n-automation-consultant" },
        { label: "Instagram lead-generation case study", href: "/case-studies/instagram-lead-generation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How do I audit a messy n8n workflow before paying for cleanup?",
      answer:
        "Start with the live business path: trigger, branch logic, stop conditions, downstream writes, human handoff, and failure handling. If nobody can explain those cleanly, the workflow needs a real recovery decision before more automation gets added.",
    },
    {
      question: "What should I check first in an n8n workflow audit?",
      answer:
        "Check whether the trigger and branch logic still match reality, whether the workflow writes clean data downstream, whether credentials and webhook assumptions are still valid, and whether the team trusts the workflow enough to stop checking it manually.",
    },
    {
      question: "How do I know if n8n cleanup is enough or if I need a rebuild?",
      answer:
        "If one or two core workflows are salvageable and the main problem is clutter, auth drift, or mapping errors, cleanup is often enough. If nobody can explain the logic clearly, downstream state keeps drifting, and every fix creates another edge case, rebuild is usually safer.",
    },
    {
      question: "Can an audit show that I should narrow the workflow scope instead of rescuing everything?",
      answer:
        "Yes. Sometimes the smartest answer is not cleanup or rebuild of the whole stack. It is rescuing the one workflow that matters most and stopping the current implementation from trying to own too much at once.",
    },
    {
      question: "How is this different from the n8n cleanup-service page already on the site?",
      answer:
        "The cleanup-service page explains what rescue help includes. This page helps you inspect the workflow before buying that help. It is the diagnostic layer that should make cleanup, rebuild, or scope decisions more honest.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners trying to diagnose a messy n8n workflow before paying for more implementation work",
  ctaHeading: "Need a second opinion on what is actually broken in your n8n workflow?",
  ctaText:
    "Book a 30-minute call. We will look at the live workflow first, identify whether the stack needs bounded cleanup, a rebuild, or a narrower scope, and help you avoid paying for the wrong rescue project.",
  ctaSubtext:
    "Useful if n8n is already live and the real problem is diagnosis, workflow trust, and recovery scope — not generic first-time setup advice.",
  relatedLinks: [
    { label: "n8n workflow cleanup service", href: "/n8n-workflow-cleanup-service" },
    { label: "n8n workflow cleanup vs. rebuild", href: "/n8n-workflow-cleanup-vs-rebuild" },
    { label: "n8n automation consultant cost", href: "/n8n-automation-consultant-cost-small-business" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
