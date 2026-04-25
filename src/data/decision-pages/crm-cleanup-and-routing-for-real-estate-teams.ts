import {
  Database,
  Route,
  Users,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Home,
  ArrowRightLeft,
  Workflow,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "crm-cleanup-and-routing-for-real-estate-teams",
  metaTitle:
    "CRM Cleanup and Routing for Real Estate Teams — Before You Add More Automation | Dmytro AI",
  metaDescription:
    "Need cleaner CRM stages, routing, and ownership in a real estate business? Practical guide to CRM cleanup for agents and teams before heavier automation: lead routing, stage discipline, duplicate cleanup, task ownership, and where messy pipelines quietly kill follow-up.",
  badgeText: "Real Estate CRM Cleanup",
  badgeIcon: Database,
  h1: "CRM Cleanup and Routing for Real Estate Teams",
  heroIntro:
    "A lot of real-estate teams think they need more automation when the real problem is that the CRM itself cannot be trusted. New leads land in the wrong stage, showing-intent contacts sit beside cold inquiries, duplicate records keep multiple agents from knowing who owns the next step, and nobody can tell whether the pipeline reflects reality or just wishful admin cleanup. In that situation, more automation usually makes the mess louder. Real-estate CRM cleanup means getting the routing, stage discipline, ownership rules, and follow-up visibility clean enough that lead response, showing coordination, and database nurture can actually run on something stable.",
  heroSubtext:
    "Below: what real-estate CRM cleanup and routing usually includes, how this page stays distinct from the broader real-estate parent and the already-live lead-response and showing pages, where pipeline mess quietly kills follow-up, and what honest adjacent proof supports this page without pretending there is already a published real-estate CRM-cleanup case study.",
  sections: [
    {
      type: "cards",
      title: "What real-estate CRM cleanup and routing usually includes",
      subtitle:
        "The exact tools vary, but most teams need the same cleanup foundations before heavier automation is worth trusting:",
      items: [
        {
          icon: Route,
          title: "Lead-source routing that reflects reality",
          body: "Portal leads, sign calls, website forms, referrals, seller inquiries, and sphere replies should not all land in one vague bucket. Real routing means each source and intent type lands in the right next-owner path instead of waiting for someone to notice it later.",
        },
        {
          icon: Workflow,
          title: "Stage discipline the team actually uses",
          body: "A stage should mean something concrete changed: new lead, contacted, qualifying, showing requested, active nurture, closed, or reactivation pool. If admins, ISAs, and agents all use different definitions, the CRM cannot support reliable automation or reporting.",
        },
        {
          icon: Users,
          title: "Clear ownership and task visibility",
          body: "Every active contact needs a next owner. If the handoff between ISA, admin, and agent is fuzzy, fast response dies in the cracks. Cleanup work should make the next action obvious instead of depending on memory or Slack messages.",
        },
        {
          icon: BarChart3,
          title: "Duplicate cleanup and pipeline truth",
          body: "Messy CRMs often hide the same person under several records, leave stale tasks open forever, or keep old conversations in active stages. Cleanup means getting the reporting honest enough that the team can tell what still needs follow-up and what is already dead.",
        },
      ],
    },
    {
      type: "table",
      title: "CRM cleanup vs. the rest of the real-estate cluster",
      subtitle:
        "These pages can coexist when each one answers a different operational question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "CRM cleanup and routing for real estate teams",
          values: [
            "Teams whose lead flow exists already but the CRM has become too messy to trust",
            "Focuses on stage clarity, routing logic, duplicate cleanup, ownership rules, and pipeline truth before heavier follow-up or scheduling automations are layered on top",
          ],
        },
        {
          label: "AI automation for real estate",
          values: [
            "Owners deciding what the broader operating layer could automate across the business",
            "Covers the whole real-estate systems picture: lead response, showing coordination, CRM workflows, and nurture opportunities rather than isolating the CRM cleanup problem itself",
          ],
        },
        {
          label: "Real-estate lead response and follow-up automation",
          values: [
            "Teams whose biggest leak is speed-to-lead and early inquiry discipline",
            "Focuses on first response, nurture timing, qualification, and handoff before the contact is fully in the right pipeline state",
          ],
        },
        {
          label: "Showing coordination automation for real estate teams",
          values: [
            "Teams already getting replies but losing momentum between interest and the actual showing",
            "Focuses on scheduling, confirmations, reminders, and agent handoff after a lead has already shown real intent",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this the right next page for your business?",
      subtitle:
        "This page matters most when the team already has lead flow, but the CRM itself has become the bottleneck.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your team argues about what stages actually mean inside the CRM",
            "Leads are being duplicated, orphaned, or left in vague buckets with no clear next owner",
            "You already have inbound volume, but nobody trusts the pipeline enough to automate follow-up aggressively",
            "Admins, ISAs, and agents each keep side systems because the core CRM does not reflect reality",
            "You want a smaller cleanup-and-routing project before funding bigger nurture or scheduling builds",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You barely have lead volume yet and the real problem is demand, not CRM structure",
            "The CRM is already clean and the bigger leak is simply slow first response",
            "Your main issue starts after contacts ask for showings or consultations, not inside the pipeline itself",
            "You want a full platform migration before agreeing what your existing stages and ownership rules should be",
            "The team already has trustworthy reporting and clear ownership, but lacks one specific downstream workflow",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where real-estate CRM cleanup usually breaks down",
      subtitle:
        "These failures matter because they quietly make every follow-up workflow look worse than it really is.",
      blocks: [
        {
          heading: "New leads and showing-intent leads live in the same foggy stage",
          body: "If a cold portal inquiry, a ready-to-tour buyer, and a seller asking for a valuation all live in one generic bucket, nobody can tell who needs a fast text, who needs a calendar handoff, and who belongs in longer nurture. The CRM stops protecting urgency because it no longer distinguishes intent clearly enough.",
        },
        {
          heading: "Ownership changes happen in chat messages instead of in the system",
          body: "A lot of teams say they have routing, but what they really have is someone mentioning the right agent in a side conversation. That means tasks do not follow the contact, visibility disappears when somebody is away, and no one can audit whether the handoff actually happened.",
        },
        {
          heading: "Duplicates and stale records make the reporting feel better than reality",
          body: "When the same lead exists in several records, or closed conversations remain in active stages, the team gets fake pipeline volume and weak follow-up lists. Cleanup work is not just cosmetic. It is what turns the CRM back into a usable control system.",
        },
        {
          heading: "Automation gets added on top of bad stage logic",
          body: "This is where automated reminders, task creation, and nurture steps start firing at the wrong time. The team then blames automation itself, when the real issue was that nobody cleaned up the stage definitions and routing rules first.",
        },
      ],
    },
    {
      type: "considerations",
      title: "How to clean up a real-estate CRM before you automate it harder",
      subtitle:
        "The goal is not a prettier dashboard. The goal is a pipeline your team will actually trust.",
      items: [
        {
          icon: AlertTriangle,
          title: "Define stages by real workflow state",
          body: "A stage should mean the contact is in a different operational state, not just that somebody touched the record. New inquiry, contacted, showing requested, active nurture, closed, and reactivation pool all mean something specific. If the team cannot explain the stage meaning in one sentence, it is too vague.",
        },
        {
          icon: ArrowRightLeft,
          title: "Make routing rules explicit before you rebuild automations",
          body: "Decide how portal leads, referral leads, seller inquiries, and showing-ready contacts should route before you add more triggers. Otherwise you will keep automating confusion instead of reducing it.",
        },
        {
          icon: Clock,
          title: "Clean the records that affect speed and ownership first",
          body: "You do not need a museum-grade database before you improve operations. Start with the active pipeline: duplicates, ambiguous stages, missing owners, and overdue next steps that are currently costing you the fastest response and the clearest handoff.",
        },
        {
          icon: Home,
          title: "Keep reactivation separate from active deal flow",
          body: "Past-client nurture and sphere reactivation matter, but they should not live in the same active pipeline stages as fresh buyer and seller opportunities. A cleaner CRM makes that separation visible so your active pipeline stays honest.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is no published real-estate-specific CRM cleanup case study on the site yet, so the proof framing stays explicit and adjacent:",
      studies: [
        {
          industry: "Live real-estate cluster",
          headline: "The real-estate first-project page already identifies CRM cleanup as one of the four bounded workflow leaks worth isolating",
          body: "The live real-estate scoping page already tells owners that CRM cleanup can be the first project when stages, ownership, and task visibility are too messy to trust. This child page extracts that exact problem instead of leaving it buried inside the broader first-project explainer.",
          link: "/what-to-automate-first-for-real-estate",
        },
        {
          industry: "Real-estate parent page",
          headline: "The broader real-estate page already frames CRM workflows and follow-up discipline as a core operational layer",
          body: "The parent real-estate page already covers CRM workflows, lead follow-up, and pipeline discipline as part of the operating system. This child page sits one step narrower: how to clean routing and stage truth up before the heavier workflows become trustworthy.",
          link: "/ai-automation-for-real-estate",
        },
        {
          industry: "Published CRM case study",
          headline: "The 5,600+ lead CRM build proves the value of stage clarity, ownership, and visible next actions before automation scales",
          body: "The WheelsFeels CRM case study is not a real-estate deployment, but it does show the same operating principle: if records, stages, and next-action ownership are not clean, follow-up automation and reporting become noisy instead of useful.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for real estate", href: "/ai-automation-for-real-estate" },
        { label: "What to automate first for real estate teams", href: "/what-to-automate-first-for-real-estate" },
        { label: "Real-estate lead response and follow-up automation", href: "/real-estate-lead-response-and-follow-up-automation" },
        { label: "Showing coordination automation for real estate teams", href: "/showing-coordination-automation-for-real-estate-teams" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does CRM cleanup for a real-estate team usually include?",
      answer:
        "Usually it means cleaning stage definitions, fixing routing rules, clarifying who owns the next action, removing or merging obvious duplicates, separating active opportunities from stale nurture records, and making overdue follow-up visible enough that the team trusts the system again.",
    },
    {
      question: "How is this different from the broader real-estate automation page?",
      answer:
        "The broader real-estate page covers the full operating layer across lead response, showing coordination, CRM workflows, and nurture. This page is narrower. It focuses specifically on the cleanup problem inside the CRM itself: routing, stage discipline, duplicates, ownership, and pipeline truth before bigger automations are added.",
    },
    {
      question: "How is this different from real-estate lead follow-up automation?",
      answer:
        "Lead follow-up automation focuses on speed-to-lead, first response, nurture timing, and qualification. This page sits one layer underneath that. It is about making sure the CRM stages and owners are clean enough that those follow-up automations can fire at the right time and land with the right person.",
    },
    {
      question: "Should a team fix CRM cleanup before automating showing coordination?",
      answer:
        "If the biggest problem is that no one trusts the stages, owners, or task visibility in the CRM, yes. Showing coordination works best when the system can already distinguish fresh inquiries from serious showing-intent contacts and assign the next action clearly. If that distinction is still messy, cleanup usually comes first.",
    },
    {
      question: "Do we need a full CRM migration before doing this?",
      answer:
        "Not always. Sometimes the highest-ROI move is a bounded cleanup inside the existing system: cleaner stages, better routing, duplicate repair, and real ownership rules. A migration only becomes necessary when the current tool cannot support the workflow even after the team has clarified what the workflow should be.",
    },
  ],
  faqHeading: "Frequently asked questions",
  faqSubheading:
    "Practical questions about real-estate CRM cleanup, routing, and when this should come before heavier automation work.",
  ctaHeading: "Need help cleaning up a messy real-estate CRM before you automate it harder?",
  ctaText:
    "Book a 30-minute call. We will look at where your real-estate pipeline is actually breaking — routing, stage clarity, duplicate records, or owner handoff — and tell you whether a bounded cleanup project would fix the leak before you invest in heavier lead-response or scheduling automation.",
  ctaSubtext:
    "No generic proptech pitch. Just a practical review of the pipeline logic your team would actually need to trust.",
  relatedLinks: [
    { label: "AI automation for real estate", href: "/ai-automation-for-real-estate" },
    { label: "What to automate first for real estate teams", href: "/what-to-automate-first-for-real-estate" },
    {
      label: "Real-estate lead response and follow-up automation",
      href: "/real-estate-lead-response-and-follow-up-automation",
    },
    {
      label: "Showing coordination automation for real estate teams",
      href: "/showing-coordination-automation-for-real-estate-teams",
    },
    { label: "E-commerce CRM automation case study", href: "/case-studies/ecommerce-crm-automation" },
  ],
};

export default data;
