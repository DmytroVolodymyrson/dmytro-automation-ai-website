import {
  Home,
  Workflow,
  Timer,
  CalendarCheck,
  BarChart3,
  RefreshCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Users,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-real-estate",
  metaTitle:
    "What to Automate First for Real Estate Teams — Choose the Highest-ROI Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in a real estate business? Practical guide to choosing between lead response, showing coordination, CRM cleanup, and past-client reactivation before a broader rollout.",
  badgeText: "Real Estate Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Real Estate Teams",
  heroIntro:
    "If your real estate business knows it needs better automation, the first move usually should not be a giant all-in-one CRM rebuild. It should be one bounded workflow that fixes the leak already costing you conversations, showings, or follow-up discipline. For most agents and teams, that first project is one of four things: lead response while new inquiries are still deciding who answers first, showing coordination once a prospect wants the next step, CRM cleanup and pipeline automation when leads are getting lost between stages, or past-client reactivation when the database is full of people who already know you but never hear from you consistently. The right first build depends on where momentum is breaking today — before the first conversation, between inquiry and booked showing, inside the CRM itself, or after the deal closes when referral and repeat-opportunity follow-up quietly stops.",
  heroSubtext:
    "Below: how to choose the first real-estate workflow to automate, how this page stays distinct from the broader real-estate parent and the narrower lead-response and showing-coordination pages already live, what honest adjacent proof supports the recommendation, and when you should keep the first build smaller instead of forcing a broader ops overhaul too early.",
  sections: [
    {
      type: "cards",
      title: "The first real-estate workflows usually worth automating",
      subtitle:
        "Most real-estate teams do not need every communication layer automated at once. They need to start where the operational leak is already easiest to see:",
      items: [
        {
          icon: Timer,
          title: "Lead response before the next agent answers first",
          body: "Start here when portal, ad, website, sign-call, or referral leads still wait too long for the first response. This is usually the best first build when the main leak is speed-to-lead and early follow-up discipline.",
        },
        {
          icon: CalendarCheck,
          title: "Showing coordination once intent is real",
          body: "Start here when prospects are already raising their hands but too much momentum is lost to phone tag, calendar friction, weak reminders, or confused agent assignment before the showing happens.",
        },
        {
          icon: BarChart3,
          title: "CRM cleanup and pipeline routing",
          body: "Start here when leads are already coming in, but the real problem is messy stages, weak ownership, duplicate records, or no visibility into which sources and statuses actually deserve follow-up next.",
        },
        {
          icon: RefreshCcw,
          title: "Past-client reactivation and sphere nurture",
          body: "Start here when the real missed opportunity is sitting in your existing database: anniversary touches, market-update follow-up, referral check-ins, and stale contacts who already know you but are not hearing from you consistently.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which real-estate workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact stage where speed, discipline, or ownership already breaks down:",
      options: [
        {
          icon: Timer,
          heading: "Start with lead response",
          highlighted: true,
          items: [
            "Paid and organic inbound leads still sit too long before anyone responds",
            "Your team knows speed-to-lead matters more right now than downstream CRM cleanup",
            "Too many buyer or seller inquiries disappear before a real conversation happens",
            "Closest next page: /real-estate-lead-response-and-follow-up-automation",
          ],
        },
        {
          icon: CalendarCheck,
          heading: "Start with showing coordination",
          items: [
            "Leads are replying, but prospects who want a showing or consultation still get stuck in scheduling friction",
            "The biggest drag is phone tag, weak reminders, or confused handoff between admin, ISA, and agent",
            "The team needs cleaner inquiry-to-showing execution before broader nurture work matters",
            "Closest next page: /showing-coordination-automation-for-real-estate-teams",
          ],
        },
        {
          icon: BarChart3,
          heading: "Start with CRM cleanup and routing",
          items: [
            "The team cannot trust stages, ownership, or task visibility inside the CRM today",
            "Leads are being duplicated, orphaned, or left in vague buckets that make automation impossible to trust",
            "You need pipeline truth before layering on heavier nurture, scheduling, or reactivation workflows",
            "Closest broader page: /ai-automation-for-real-estate",
          ],
        },
        {
          icon: RefreshCcw,
          heading: "Start with database reactivation",
          items: [
            "The business already has a meaningful sphere, past-client list, or old lead database that never gets touched consistently",
            "Your biggest missed opportunity is referral and repeat conversation volume, not just faster first response",
            "You want a bounded follow-up system that reuses contacts you already paid to acquire",
            "Closest broader page: /ai-automation-for-real-estate",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the real-estate cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for real estate teams",
          values: [
            "Owners and team leads deciding which single workflow deserves the first project",
            "Helps choose between lead response, showing coordination, CRM cleanup, and past-client reactivation before a broader rollout",
          ],
        },
        {
          label: "AI automation for real estate",
          values: [
            "Agents and teams evaluating the broader operating layer",
            "Explains the full real-estate automation picture across response speed, qualification, scheduling, CRM workflow visibility, and database nurture",
          ],
        },
        {
          label: "Real estate lead response and follow-up automation",
          values: [
            "Teams that already know the leak starts before the first real conversation happens",
            "Focuses narrowly on first-response speed, early nurture, showing-intent routing, and human handoff while the lead is still warm",
          ],
        },
        {
          label: "Showing coordination automation for real estate teams",
          values: [
            "Teams that already know the bigger leak is between raised hand and booked or attended showing",
            "Focuses narrowly on scheduling rules, confirmations, reminders, no-show recovery, and agent handoff after intent is already clear",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your real-estate business?",
      subtitle:
        "This page is useful when you already believe automation should play a bigger role, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already point to one obvious leak: slow first response, messy showing handoff, unreliable CRM ownership, or a dormant database",
            "You want one bounded workflow that proves value before funding a broader automation layer",
            "The team is losing time to repetitive admin follow-up instead of high-value conversations and appointments",
            "Your CRM, lead sources, or calendar stack are stable enough to identify the stage, owner, or trigger behind the first build",
            "You want a practical recommendation instead of another vague real-estate tech pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Lead volume is still too low to justify workflow automation at all",
            "The main problem is weak lead generation, not follow-through or operational drag",
            "Records, pipeline stages, or ownership rules are too messy to trust any trigger yet",
            "Nobody agrees on who owns the stage you want to automate",
            "You are trying to automate nuanced negotiation, pricing, or advisory conversations instead of timing, routing, reminders, and handoff",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first real-estate automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost lead momentum or repeated team drag.",
      blocks: [
        {
          heading: "Start where the team already loses conversations every week",
          body: "If portal or website leads sit too long before a first response, lead response comes first. If prospects are replying but showings keep slipping because scheduling is chaotic, showing coordination comes first. If the whole team is working out of a messy pipeline nobody trusts, CRM cleanup comes first. If the database is already large and idle, reactivation can be the fastest way to create leverage without buying more leads.",
        },
        {
          heading: "Do not confuse the broader parent page with the first project itself",
          body: "The broader real-estate page is useful because it frames the whole operating picture. But most teams should still begin with one bounded workflow that can be measured clearly. A narrower first build usually produces faster ROI and teaches the team more than a half-finished system touching every stage at once.",
        },
        {
          heading: "Use speed, handoff quality, and pipeline truth as part of the decision",
          body: "A faster first response can reclaim expensive portal and ad leads quickly. A showing workflow can protect already-warm intent from cooling off in phone tag. CRM cleanup can stop good leads from disappearing into bad stages. Reactivation can produce conversations from contacts you already own. The first build should follow operational economics, not whichever automation sounds smartest in a planning deck.",
        },
        {
          heading: "Expand only after the first workflow is genuinely working",
          body: "Once one stage is running cleanly, the next stage becomes easier to justify and easier to design. A team might start with lead response, then add showing coordination, then tighten CRM routing and database nurture later. Or it might start with CRM cleanup first if nobody trusts the current pipeline. The sequence should come from evidence, not from trying to automate the entire real-estate operating system in one step.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first real-estate automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest rebuild instead of the clearest leak",
          body: "Many teams jump toward a full CRM or communication overhaul when the real problem is still one stage: first response, showing coordination, pipeline truth, or database reactivation discipline. Bigger scope feels strategic, but it usually delays the first measurable win.",
        },
        {
          icon: Users,
          title: "Ignoring ownership and handoff rules",
          body: "Automation is only as good as the person or stage behind it. If nobody knows who owns a hot portal lead, a showing-intent reply, or a reactivated past client, fix that first or keep the first workflow narrower so the team can trust the output.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: slow response, missed showings, orphaned CRM leads, or a dormant sphere. Without that baseline, it is hard to choose the right first workflow or prove the first build paid off.",
        },
        {
          icon: ShieldCheck,
          title: "Trying to automate nuanced advisory work",
          body: "The first real-estate workflow should improve timing, consistency, and visibility — not improvise pricing advice, property interpretation, contract guidance, or negotiation. Messaging, escalation, and stop rules should be clear before anything goes live.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published real-estate first-project case study on the site yet, so this page stays grounded in the live real-estate cluster plus published CRM, response, and scheduling proof.",
      studies: [
        {
          industry: "Real-estate cluster",
          headline: "The live real-estate pages already isolate the exact workflow families this page is comparing",
          body: "The broader real-estate parent plus the lead-response and showing-coordination children already break the cluster into real workflow stages. This page sits one level earlier and helps a team decide which one should come first while keeping CRM cleanup and reactivation framed honestly as broader parent-level workflows until they are isolated further.",
          link: "/ai-automation-for-real-estate",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ lead CRM case study proves why pipeline truth and structured follow-up matter before records quietly decay",
          body: "That e-commerce build is not a real-estate deployment, but it is direct proof that disciplined routing, statuses, and owner visibility recover value from a contact base too large to manage from memory. The same mechanics support real-estate CRM cleanup, lead-response routing, and database reactivation.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Adjacent response and scheduling proof",
          headline: "Published voice and booking workflows reinforce why response speed and next-step discipline should shape the first build",
          body: "The Paris Cafe voice-agent case study and the broader appointment-setter and lead-follow-up guides prove the same operating logic this page uses: respond fast, route intelligently, confirm the next step, and escalate the human conversations that matter.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for real estate", href: "/ai-automation-for-real-estate" },
        { label: "Real estate lead response and follow-up automation", href: "/real-estate-lead-response-and-follow-up-automation" },
        { label: "Showing coordination automation for real estate teams", href: "/showing-coordination-automation-for-real-estate-teams" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should a real-estate team automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: lead response if new inquiries wait too long for a first reply, showing coordination if prospects are getting stuck before the appointment happens, CRM cleanup if stages and ownership are too messy to trust, or database reactivation if the biggest missed opportunity is inside past clients and old leads you already own.",
    },
    {
      question: "How is this different from the main real-estate automation page?",
      answer:
        "The main real-estate page is broader and covers the whole operating picture. This page is narrower: it helps an owner or team lead choose which single workflow should come first before a broader automation rollout.",
    },
    {
      question: "What is the safest first project for most real-estate teams?",
      answer:
        "For many teams, lead response is the safest first project because speed-to-lead drives obvious early outcomes quickly. But teams with solid response speed and messy showing execution may get faster ROI from showing coordination first, while teams with chaotic CRM stages may need pipeline cleanup before anything else pays off.",
    },
    {
      question: "Should CRM cleanup come before a lead-response workflow?",
      answer:
        "Choose CRM cleanup first if nobody trusts the stages, records, or ownership rules enough to power reliable automation. Choose lead response first if the trigger and owner are already clear and the bigger leak is that new inquiries still sit too long before a human conversation starts.",
    },
    {
      question: "Can a team start with past-client reactivation instead?",
      answer:
        "Yes, if the database is already meaningful and the bigger missed opportunity is referral and repeat-conversation volume rather than top-of-funnel response speed. Reactivation is often the smarter first build when you already have plenty of dormant contacts but are not touching them consistently.",
    },
  ],
  faqSubtitle:
    "Practical questions about choosing the first real-estate automation project",
  ctaHeading: "Need help choosing the first real-estate workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your real-estate business is actually leaking lead momentum or team time today, tell you which workflow should come first, and show you what a smaller first build would need to include before you fund a broader automation rollout.",
  ctaSubtext:
    "No generic proptech pitch. Just a practical scoping conversation about your pipeline, scheduling layer, and follow-up reality.",
  relatedLinks: [
    { label: "AI automation for real estate", href: "/ai-automation-for-real-estate" },
    { label: "Real estate lead response and follow-up automation", href: "/real-estate-lead-response-and-follow-up-automation" },
    { label: "Showing coordination automation for real estate teams", href: "/showing-coordination-automation-for-real-estate-teams" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
