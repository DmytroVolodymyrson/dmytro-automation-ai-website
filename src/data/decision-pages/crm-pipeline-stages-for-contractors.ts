import {
  Database,
  LayoutDashboard,
  Workflow,
  ArrowRightLeft,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Users,
  Wrench,
  Route,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "crm-pipeline-stages-for-contractors",
  metaTitle:
    "CRM Pipeline Stages for Contractors — Before You Add Automation | Dmytro AI",
  metaDescription:
    "Need cleaner CRM pipeline stages for your contracting business? Practical guide to stage design before automation: intake ownership, estimate flow, booked-job handoff, completed-job follow-up, and where messy stages quietly break revenue.",
  badgeText: "Contractor Pipeline Design",
  badgeIcon: Database,
  h1: "CRM Pipeline Stages for Contractors",
  heroIntro:
    "Before a contractor adds more CRM automation, the pipeline itself has to make sense. If one person marks a lead as quoted, another calls it pending, and dispatch only hears about the job after the customer is already frustrated, the problem is not missing software. The problem is stage design. Good contractor pipeline stages make ownership obvious from the first request through the estimate, booked job, completed work, and reactivation layer. That clarity is what gives automation something reliable to act on.",
  heroSubtext:
    "Below: the contractor pipeline stages that usually matter, how this page stays distinct from broader contractor CRM setup help, where stage design usually breaks estimate follow-up and dispatch handoff, and what honest adjacent proof supports the page without pretending there is already a published contractor pipeline case study.",
  sections: [
    {
      type: "cards",
      title: "What good contractor CRM pipeline stages usually include",
      subtitle:
        "The exact names vary by trade, but most healthy contractor pipelines need clear ownership across these moments:",
      items: [
        {
          icon: Route,
          title: "New lead / intake owned",
          body: "This first stage is not just 'lead received.' It should mean the request was captured, tagged, assigned to the right office owner, and clarified enough that nobody is still wondering who touches it first.",
        },
        {
          icon: Workflow,
          title: "Contacted / qualified",
          body: "This stage should mean real qualification happened: service type, location, urgency, budget fit, and whether the lead is moving toward an estimate or consultation. If every early conversation is thrown into one vague bucket, automation will fire at the wrong time.",
        },
        {
          icon: LayoutDashboard,
          title: "Estimate scheduled / estimate sent",
          body: "Many contractor pipelines fail because they jump from 'talked to' straight to 'won' or 'lost.' Estimates need their own stages so you can see what was scheduled, what was delivered, and which jobs are now waiting on follow-up instead of disappearing into memory.",
        },
        {
          icon: ArrowRightLeft,
          title: "Booked job / handoff to operations",
          body: "Once the customer says yes, the pipeline should show that the job is sold and that scheduling or dispatch now owns the next action. This is where office-to-field context, technician notes, and appointment windows need to travel cleanly instead of living in scattered messages.",
        },
        {
          icon: BarChart3,
          title: "Completed / review / reactivation",
          body: "The pipeline should not end when the truck rolls away. Completed work often needs review requests, warranty reminders, maintenance follow-up, or seasonal reactivation logic. A contractor CRM gets more valuable when the final stage sets up the next opportunity.",
        },
      ],
    },
    {
      type: "table",
      title: "Pipeline-stage design vs. contractor CRM setup vs. estimate follow-up vs. dispatch handoff",
      subtitle:
        "These pages can coexist when the job of each page stays clearly bounded:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "CRM pipeline stages for contractors",
          values: [
            "Owners who need a clear stage map before they add more automation",
            "Defines the states of the workflow itself: intake, qualification, estimate, booked work, completion, and where ownership changes across the pipeline",
          ],
        },
        {
          label: "CRM automation setup for contractors",
          values: [
            "Owners already ready to configure a CRM or automation layer",
            "Covers rollout scope, integrations, stage ownership, estimate logic, dispatch handoff, pricing, and implementation guardrails around the chosen system",
          ],
        },
        {
          label: "Estimate follow-up automation for contractors",
          values: [
            "Companies whose biggest leak starts after quotes go out",
            "Focuses on reminder timing, objection-aware messaging, estimator handoff, and open-quote recovery once the estimate stage already exists",
          ],
        },
        {
          label: "Dispatch handoff automation for contractors",
          values: [
            "Companies losing context after work is booked",
            "Focuses on office-to-field transfer after the sale, not on how the CRM stages should be named before the job is won",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your company?",
      subtitle:
        "This page matters most when stage confusion is already creating missed jobs, weak follow-up, or office-to-field friction.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your office, estimators, and dispatch team use different language for the same pipeline moments",
            "Leads, estimates, and booked work all exist in the CRM, but nobody trusts the stage labels enough to automate around them",
            "Estimate follow-up is inconsistent because sent quotes are not separated clearly from early conversations",
            "Booked jobs keep losing notes or ownership as they move toward scheduling and field execution",
            "You want a clean contractor workflow map before paying for broader CRM setup or more custom automations",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still a solo operator with a tiny referral pipeline and no real need for stage discipline yet",
            "Your team already agrees on stage names, ownership, and next actions at each handoff",
            "The bigger issue is not stage design but weak lead volume, bad pricing, or poor service delivery",
            "You want a giant software rebuild before agreeing what the workflow states actually are",
            "Your current contractor software already gives you reliable stage visibility and the team follows it consistently",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where contractor pipeline-stage design usually breaks",
      subtitle:
        "These failures matter because they quietly ruin follow-up, reporting, and team trust even when the CRM looks busy.",
      blocks: [
        {
          heading: "Everything before the sale is thrown into one vague stage",
          body: "If new leads, qualified opportunities, and sent estimates all sit in one generic bucket, the team cannot tell who needs a fast first response, who needs an estimate scheduled, and who now needs quote recovery. That makes automation noisy and reporting almost useless.",
        },
        {
          heading: "The estimate stage is not separated from the booking stage",
          body: "A lot of contractors can tell you how many jobs were sold, but not how many estimates are sitting open or how long they have been waiting. Without a clear estimate-sent stage, nobody owns follow-up and the CRM cannot show where revenue is leaking.",
        },
        {
          heading: "Booked work never becomes an operations-owned stage",
          body: "The job is technically won, but dispatch does not have a clean stage that means the office-to-field handoff is now real. That gap creates missing notes, weak scheduling visibility, and technicians walking into jobs without the context the estimator already had.",
        },
        {
          heading: "Completed jobs disappear instead of feeding the next workflow",
          body: "If completion is the end of the record, you lose the easiest next wins: review requests, warranty reminders, recurring service nudges, and reactivation timing. A strong pipeline uses the completed stage as the start of retention, not the end of visibility.",
        },
      ],
    },
    {
      type: "considerations",
      title: "How to define contractor pipeline stages before you automate them",
      subtitle:
        "The goal is not more columns. The goal is cleaner ownership and fewer ambiguous next steps.",
      items: [
        {
          icon: AlertTriangle,
          title: "Name stages by real workflow state, not by wishful activity",
          body: "A stage should mean something concrete changed: the lead was contacted, the estimate was sent, the job was booked, or the work was completed. If stages mean different things to different people, the automations built on top of them will never be trustworthy.",
        },
        {
          icon: Users,
          title: "Make ownership explicit at every handoff",
          body: "Each stage should answer one simple question: who owns the next action now? Office intake, estimator, dispatcher, technician, or follow-up coordinator. If ownership stays fuzzy, the CRM becomes a record of confusion instead of a control system.",
        },
        {
          icon: Clock,
          title: "Separate the stages where delay costs real money",
          body: "For most contractors, that means intake, estimate sent, and booked-job handoff. Those are the moments where a slow next step creates the most visible revenue loss or office drag, so they need their own stage logic before you automate reminders or alerts.",
        },
        {
          icon: Wrench,
          title: "Map the stage design to the software after the workflow is clear",
          body: "Jobber, Housecall Pro, ServiceTitan, GoHighLevel, Airtable, or a hybrid stack can all support a contractor pipeline. The important part is deciding the stage logic first, then making sure the tool or integration layer reflects the workflow instead of forcing the workflow to fit a random template.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is no published contractor-specific pipeline-stage case study on the site yet, so the proof stays explicit and adjacent:",
      studies: [
        {
          industry: "Contractor CRM cluster",
          headline: "The live contractor CRM page already identifies unclear stages as one of the main reasons automation fails",
          body: "The broader contractor CRM guide explicitly calls out the stage problem: if one person says quoted, another says pending, and a third leaves notes in email, automation has nothing stable to act on. This child page isolates that workflow-design issue directly.",
          link: "/crm-automation-for-contractors",
        },
        {
          industry: "Contractor setup-help adjacency",
          headline: "The live setup-help page proves the next implementation question depends on clean stage design first",
          body: "The contractor setup page already covers rollout scope, estimate logic, dispatch handoff, and integrations. This page sits one step earlier: what the pipeline should look like before that setup work becomes reliable.",
          link: "/crm-automation-setup-for-contractors",
        },
        {
          industry: "Published CRM case study",
          headline: "The 5,600+ lead CRM build shows why stage clarity, tagging, and ownership matter before automation scales",
          body: "The WheelsFeels CRM case study is not a contractor build, but it proves the same operational principle: clear stage logic, clean internal visibility, and explicit next actions are what make follow-up automation useful instead of chaotic.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "CRM automation for contractors", href: "/crm-automation-for-contractors" },
        { label: "CRM automation setup for contractors", href: "/crm-automation-setup-for-contractors" },
        { label: "Estimate follow-up automation for contractors", href: "/estimate-follow-up-automation-for-contractors" },
        { label: "Dispatch handoff automation for contractors", href: "/dispatch-handoff-automation-for-contractors" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What pipeline stages do most contractors actually need?",
      answer:
        "Most healthy contractor pipelines need at least a clear intake/new-lead stage, a contacted or qualified stage, an estimate scheduled or estimate sent stage, a booked-job or sold stage, and a completed-work stage that can feed review, warranty, or reactivation follow-up. The exact names matter less than the fact that the team uses them consistently.",
    },
    {
      question: "How is this different from the broader contractor CRM page?",
      answer:
        "The broader contractor CRM page covers the whole operating system. This page is narrower. It focuses specifically on stage design before automation: how to name the states of the workflow so estimate follow-up, dispatch handoff, and reporting can run on something trustworthy.",
    },
    {
      question: "How is this different from contractor CRM setup help?",
      answer:
        "Setup help is the implementation layer. It covers integrations, rollout scope, pricing, testing, and ownership. This page sits one step earlier and answers the workflow-design question first: what should the stages actually be before anyone configures a CRM around them?",
    },
    {
      question: "Can this work with Jobber, Housecall Pro, ServiceTitan, GoHighLevel, or a custom stack?",
      answer:
        "Usually yes. The stage logic should exist no matter which system you use. In some businesses the field-service platform owns part of the pipeline and the CRM owns the follow-up and reporting layer. In others a hybrid setup is cleaner. The point is to make sure the tools reflect the workflow instead of forcing the team into unclear stage names.",
    },
    {
      question: "What is the main ROI of cleaning up pipeline stages first?",
      answer:
        "Cleaner ownership, more reliable estimate follow-up, better booked-job handoff, and reporting you can actually trust. In practice that often means fewer stalled estimates, fewer internal callbacks to figure out job context, and a faster path to automating the parts of the contractor workflow that are really worth automating.",
    },
  ],
  faqSubtitle: "Practical questions about contractor CRM pipeline design",
  ctaHeading: "Need cleaner contractor pipeline stages before you add more automation?",
  ctaText:
    "Book a 30-minute call. We will map the stages your team is actually using now, find where estimate follow-up and dispatch handoff are breaking, and show you whether the next step is lighter workflow cleanup or a broader CRM setup project.",
  ctaSubtext:
    "No generic software pitch. Just a practical workflow map you can actually use.",
  relatedLinks: [
    { label: "CRM automation for contractors", href: "/crm-automation-for-contractors" },
    { label: "CRM automation setup for contractors", href: "/crm-automation-setup-for-contractors" },
    { label: "Estimate follow-up automation for contractors", href: "/estimate-follow-up-automation-for-contractors" },
    { label: "Dispatch handoff automation for contractors", href: "/dispatch-handoff-automation-for-contractors" },
    { label: "Job intake routing automation for contractors", href: "/job-intake-routing-automation-for-contractors" },
  ],
};

export default data;
