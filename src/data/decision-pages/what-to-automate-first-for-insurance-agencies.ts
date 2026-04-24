import {
  Workflow,
  MessageSquare,
  Mail,
  CalendarCheck,
  Users,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Clock3,
  Shield,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-insurance-agencies",
  metaTitle:
    "What to Automate First for Insurance Agencies — Choose the Highest-ROI Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in an insurance agency? Practical guide to choosing between lead follow-up, quote follow-up, renewal reminders, and cross-sell before a broader automation rollout.",
  badgeText: "Insurance Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Insurance Agencies",
  heroIntro:
    "If your insurance agency knows it needs better automation, the first move usually should not be a giant all-in-one rebuild. It should be one bounded workflow that fixes the leak already costing you policies, retention, or producer time. For most independent insurance agencies, that first workflow is one of four things: lead follow-up before a quote is even built, quote follow-up after the proposal goes out, renewal reminders before existing clients drift, or cross-sell outreach inside the current book. The right choice depends on where the agency is already losing momentum today — before the quote exists, after the quote is sent, before the policy renews, or after trust is already in the book but expansion never gets consistent follow-through.",
  heroSubtext:
    "Below: how to choose the first insurance-agency workflow to automate, how this page stays distinct from the broader parent and the narrower insurance child pages already live, what honest adjacent proof supports the recommendation, and when you should keep the first project smaller instead of forcing a broader agency-ops rebuild too early.",
  sections: [
    {
      type: "cards",
      title: "The first insurance-agency workflows usually worth automating",
      subtitle:
        "Most agencies do not need every communication layer automated at once. They need to start where the operating leak is already easiest to see:",
      items: [
        {
          icon: MessageSquare,
          title: "Lead follow-up before the quote",
          body: "Start here when inbound quote requests, referrals, and web leads sit too long before anyone responds. This is usually the best first build when speed-to-quote is the main reason new policies are being lost before the producer even gets a clean shot.",
        },
        {
          icon: Mail,
          title: "Quote follow-up after the proposal is sent",
          body: "Start here when producers already get quotes out, but too many prospects go quiet after that. This is the better first project when the leak starts after the quote leaves the agency, not before.",
        },
        {
          icon: CalendarCheck,
          title: "Renewal reminders and retention follow-through",
          body: "Start here when the bigger leak is retention. If reminders happen late, nobody sees at-risk accounts early enough, or renewals still rely on memory and month-end scramble lists, this can be the highest-payoff first workflow.",
        },
        {
          icon: Users,
          title: "Cross-sell outreach inside the book",
          body: "Start here when the agency already has decent new-business and renewal discipline, but revenue per account is still being left on the table because nobody segments believable coverage gaps and follows up consistently.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which insurance-agency workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact stage where speed, discipline, or ownership already breaks down:",
      options: [
        {
          icon: MessageSquare,
          heading: "Start with lead follow-up",
          highlighted: true,
          items: [
            "Inbound quote requests and referrals arrive, but response time is still measured in hours instead of minutes",
            "The agency knows new-business speed matters more right now than downstream retention or book-expansion work",
            "Producers lose opportunities before the quote process even starts because nobody owns the first response cleanly",
            "Closest next page: /ai-lead-follow-up-for-insurance-agencies",
          ],
        },
        {
          icon: Mail,
          heading: "Start with quote follow-up",
          items: [
            "The team usually responds fast enough and gets quotes out, but too many prospects stall after the proposal is sent",
            "Producer time is being wasted on repetitive quote-chasing instead of higher-value conversations",
            "The real leak is quote-to-bind movement, not speed-to-first-response",
            "Closest next page: /quote-follow-up-automation-for-insurance-agencies",
          ],
        },
        {
          icon: CalendarCheck,
          heading: "Start with renewal reminders",
          items: [
            "Retention is more painful than lead volume because reminders happen late or inconsistently",
            "Policy expirations, account tiers, and ownership rules already exist, but follow-through is weak",
            "One saved renewal per month would justify the build faster than another top-of-funnel workflow",
            "Closest next page: /renewal-reminder-automation-for-insurance-agencies",
          ],
        },
        {
          icon: Users,
          heading: "Start with cross-sell outreach",
          items: [
            "New-business and renewal discipline are reasonably healthy, but the book still has obvious untapped coverage gaps",
            "Producers want higher-quality expansion opportunities surfaced with context instead of building lists manually",
            "The bigger financial upside now is revenue per account, not response speed alone",
            "Closest next page: /cross-sell-automation-for-insurance-agencies",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the insurance cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for insurance agencies",
          values: [
            "Agency owners deciding which single workflow deserves the first project",
            "Helps choose between lead follow-up, quote follow-up, renewal reminders, and cross-sell before a broader rollout",
          ],
        },
        {
          label: "AI automation for insurance agencies",
          values: [
            "Agency owners evaluating the broader operating layer",
            "Explains the full insurance automation picture across lead response, quote nurture, renewals, cross-sell, reviews, and after-hours communication",
          ],
        },
        {
          label: "AI lead follow-up for insurance agencies",
          values: [
            "Agencies that already know the leak starts before the quote exists",
            "Focuses narrowly on first-response speed, intake qualification, and producer handoff before the quote is built",
          ],
        },
        {
          label: "Renewal reminder automation for insurance agencies",
          values: [
            "Agencies that already know retention timing is the first problem",
            "Focuses narrowly on policy reminders, account-tier escalation, and producer handoff before renewals drift",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your agency?",
      subtitle:
        "This page is useful when you know the agency needs better automation, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already see one obvious leak: slow first response, weak quote follow-up, late renewal outreach, or unused cross-sell potential",
            "You want one bounded workflow that proves value before funding a broader agency-automation layer",
            "Producer or CSR time is being burned on repetitive communication instead of selling or service judgment",
            "Your AMS or CRM is good enough to identify the workflow stage, owner, and basic client data needed to trigger automation",
            "You want a practical recommendation instead of another vague insuretech pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Volume is still too low to justify workflow automation at all",
            "The main problem is weak offer-market fit, carrier appetite, or pricing — not follow-through",
            "Client records, policy dates, or ownership rules are too messy to trust any trigger",
            "Nobody agrees on which producer or CSR actually owns the stage you want to automate",
            "You are trying to automate regulated advice instead of timing, reminders, routing, and handoff",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first insurance-agency automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost policy revenue or repeated producer drag.",
      blocks: [
        {
          heading: "Start where the agency already loses money or time every week",
          body: "If inbound quote requests sit too long before a real response, lead follow-up comes first. If quotes go out but too many prospects disappear after that, quote follow-up comes first. If the book is healthy but retention discipline is late and noisy, renewal reminders come first. If new business and renewals are already decent but book expansion is neglected, cross-sell comes first. The decision should follow the leak, not whichever automation sounds smartest on paper.",
        },
        {
          heading: "Do not treat the broader insurance page as the first project itself",
          body: "The broader insurance page is useful because it frames the whole operating system. But most agencies should still begin with one workflow that can be measured clearly. A narrower first build usually produces faster ROI and teaches the team more than a half-finished system touching every client journey at once.",
        },
        {
          heading: "Use retention economics and producer time as part of the decision",
          body: "A saved renewal can be worth more than a handful of weak new leads. A disciplined quote-follow-up system can reclaim producer time even before close rates improve. A cross-sell workflow can outperform more top-of-funnel spend if the book already has clear coverage gaps. The first build should be chosen by operational economics, not by generic AI hype.",
        },
        {
          heading: "Expand only after the first workflow is genuinely working",
          body: "Once one stage is running cleanly, the next stage becomes easier to justify and easier to design. For example, an agency might start with lead follow-up, then quote follow-up, then renewal retention. Or it might start with renewals first if the book is already the real profit center. The sequence should come from evidence, not from trying to automate every policy motion at the same time.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first insurance-agency automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest rebuild instead of the clearest leak",
          body: "Many agencies jump toward a full communication overhaul when the real problem is still one stage: first response, quote-stage follow-up, retention timing, or cross-sell discipline. Bigger scope feels strategic, but it usually delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring data cleanliness and ownership rules",
          body: "Automation is only as good as the trigger and owner behind it. If policy dates, quote stages, or account ownership are unclear, fix that first or keep the initial workflow narrower so the team can trust the output.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: slow responses, quoted prospects going cold, renewal slippage, or neglected coverage-gap opportunities. Without that baseline, it is hard to choose the right first workflow or prove the first build paid off.",
        },
        {
          icon: Shield,
          title: "Forgetting that compliance and human judgment still matter",
          body: "The first insurance workflow should improve timing, consistency, and visibility — not improvise regulated advice. Messaging, escalation, and stop rules should be clear before anything goes live.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published insurance-agency first-project case study on the site yet, so this page stays grounded in the live insurance cluster plus published CRM and follow-up proof.",
      studies: [
        {
          industry: "Insurance cluster",
          headline: "The live insurance pages already isolate the exact workflow families this page is comparing",
          body: "The broader insurance parent plus the lead-follow-up, quote-follow-up, renewal, and cross-sell children already break the cluster into real workflow stages. This page sits one level earlier and helps an agency owner choose which one should come first.",
          link: "/ai-automation-for-insurance-agencies",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ lead CRM case study proves why structured routing, follow-up timing, and owner visibility matter before records quietly decay",
          body: "That e-commerce build is not an insurance deployment, but it is direct proof that disciplined status tracking and automated follow-up recover value from a contact base too large to manage from memory. The same mechanics support insurance lead response, quote nurture, renewals, and cross-sell.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Adjacent workflow proof",
          headline: "The broader lead-follow-up and email-sequence guides support the same first-project logic",
          body: "The site already has published workflow guidance for fast first response and sequence-based follow-up. This page uses that same operating logic, but narrows the decision to one insurance-specific workflow instead of the whole agency system.",
          link: "/ai-lead-follow-up-for-service-businesses",
        },
      ],
      links: [
        { label: "AI automation for insurance agencies", href: "/ai-automation-for-insurance-agencies" },
        { label: "AI lead follow-up for insurance agencies", href: "/ai-lead-follow-up-for-insurance-agencies" },
        { label: "Renewal reminder automation for insurance agencies", href: "/renewal-reminder-automation-for-insurance-agencies" },
        { label: "Quote follow-up automation for insurance agencies", href: "/quote-follow-up-automation-for-insurance-agencies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should an insurance agency automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: lead follow-up if quote requests sit too long before a response, quote follow-up if proposals go out but prospects disappear after that, renewal reminders if retention outreach happens too late, or cross-sell if the book has clear coverage gaps but no disciplined expansion workflow.",
    },
    {
      question: "How is this different from the main insurance automation page?",
      answer:
        "The main insurance page is broader and covers the whole operating picture. This page is narrower: it helps an agency owner choose which single workflow should come first before a broader automation rollout.",
    },
    {
      question: "What is the safest first project for most independent agencies?",
      answer:
        "For many agencies, lead follow-up is the safest first project because speed-to-quote drives obvious new-business outcomes quickly. But agencies with a strong existing book and weaker retention discipline may get faster ROI from renewal reminders first. The right answer depends on where the leak already is.",
    },
    {
      question: "Should an agency automate renewals before quote follow-up?",
      answer:
        "Choose renewals first if retention economics matter more right now and the real pain is late, inconsistent outreach before expiration. Choose quote follow-up first if the agency already gets quotes out but too many prospects go cold before binding.",
    },
    {
      question: "Can cross-sell really be the first workflow?",
      answer:
        "Yes, but usually only when lead response, quote follow-up, and renewals are already reasonably healthy. Cross-sell is a strong first build when the main upside is revenue per account and the agency already has enough clean policy data to segment believable coverage gaps.",
    },
  ],
  faqSubtitle:
    "Practical questions about choosing the first insurance-agency automation project",
  ctaHeading: "Need help choosing the first insurance workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your agency is actually leaking policies or producer time today, tell you which workflow should come first, and show you what a smaller first build would need to include before you fund a broader automation rollout.",
  ctaSubtext:
    "No generic insuretech pitch. Just a practical scoping conversation about your agency.",
  relatedLinks: [
    { label: "AI automation for insurance agencies", href: "/ai-automation-for-insurance-agencies" },
    { label: "AI lead follow-up for insurance agencies", href: "/ai-lead-follow-up-for-insurance-agencies" },
    { label: "Quote follow-up automation for insurance agencies", href: "/quote-follow-up-automation-for-insurance-agencies" },
    { label: "Renewal reminder automation for insurance agencies", href: "/renewal-reminder-automation-for-insurance-agencies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
