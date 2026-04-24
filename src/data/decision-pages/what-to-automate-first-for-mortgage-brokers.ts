import {
  Workflow,
  MessageSquare,
  FileText,
  CalendarCheck,
  Users,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Clock3,
  Shield,
  Landmark,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-mortgage-brokers",
  metaTitle:
    "What to Automate First for Mortgage Brokers — Choose the Highest-ROI Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in a mortgage brokerage? Practical guide to choosing between lead follow-up, document collection, and incomplete-application recovery before a broader automation rollout.",
  badgeText: "Mortgage Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Mortgage Brokers",
  heroIntro:
    "If your mortgage brokerage knows it needs better automation, the first move usually should not be a giant CRM rebuild. It should be one bounded workflow that fixes the leak already costing you funded opportunities, borrower momentum, or broker time. For most brokerages, that first workflow is one of three things: lead follow-up before the application really starts, document collection once the borrower owes the next file item, or incomplete-application recovery when someone showed intent but stalled before the file became workable. The right first project depends on where momentum breaks today — before the broker gets a real conversation, after the borrower owes documents, or in the messy middle where half-finished applications quietly decay in the pipeline.",
  heroSubtext:
    "Below: how to choose the first mortgage workflow to automate, how this page stays distinct from the broader mortgage parent and the three narrower mortgage child pages already live, what honest adjacent proof supports the recommendation, and when you should keep the first build smaller instead of forcing a broader brokerage-ops overhaul too early.",
  sections: [
    {
      type: "cards",
      title: "The first mortgage-broker workflows usually worth automating",
      subtitle:
        "Most brokerages do not need every borrower communication layer automated at once. They need to start where the operational leak is already easiest to see:",
      items: [
        {
          icon: MessageSquare,
          title: "Lead follow-up before the application starts",
          body: "Start here when inbound leads, pre-approval inquiries, and referral traffic sit too long before anyone responds. This is usually the best first build when speed-to-lead is the main reason expensive opportunities are being lost before a clean application even exists.",
        },
        {
          icon: FileText,
          title: "Document collection once the file is active",
          body: "Start here when brokers already get real conversations and applications started, but too many files stall because nobody follows up on missing pay stubs, statements, IDs, or supporting documents consistently.",
        },
        {
          icon: CalendarCheck,
          title: "Incomplete-application recovery in the middle of the pipeline",
          body: "Start here when prospects show intent, begin the process, then disappear before the application becomes actionable. This is the better first project when the leak sits between inquiry and clean file completion, not just at the top or bottom of the funnel.",
        },
        {
          icon: Users,
          title: "Broker handoff and workflow visibility",
          body: "Each of these first builds should create clearer ownership. The point is not to keep borrowers inside automation forever. The point is to route warm replies, missing-file exceptions, and stalled applications back to a human with context attached.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which mortgage workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact stage where speed, discipline, or ownership already breaks down:",
      options: [
        {
          icon: MessageSquare,
          heading: "Start with lead follow-up",
          highlighted: true,
          items: [
            "Website, ad, realtor-referral, and portal leads still wait too long for a first response",
            "The brokerage knows speed-to-lead matters more right now than downstream file completion",
            "Too many expensive leads disappear before the broker gets a real first conversation",
            "Closest next page: /ai-lead-follow-up-for-mortgage-brokers",
          ],
        },
        {
          icon: FileText,
          heading: "Start with document collection",
          items: [
            "Borrowers are already talking to the brokerage, but missing documents keep stalling otherwise viable files",
            "Admins or brokers are wasting too much time on repetitive reminder work instead of live borrower conversations",
            "The real leak is incomplete file discipline, not top-of-funnel response speed",
            "Closest next page: /document-collection-automation-for-mortgage-brokers",
          ],
        },
        {
          icon: CalendarCheck,
          heading: "Start with incomplete-application follow-up",
          items: [
            "Prospects begin the process but disappear before they become clean active files",
            "The brokerage needs a middle-layer nurture and next-step workflow before document reminders alone will help",
            "The bigger opportunity is recovering stalled applications, not just acknowledging new leads faster",
            "Closest next page: /incomplete-application-follow-up-for-mortgage-brokers",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the mortgage cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for mortgage brokers",
          values: [
            "Brokerage owners deciding which single workflow deserves the first project",
            "Helps choose between lead follow-up, document collection, and incomplete-application recovery before a broader rollout",
          ],
        },
        {
          label: "AI automation for mortgage brokers",
          values: [
            "Brokers evaluating the broader operating layer",
            "Explains the full mortgage automation picture across lead response, application nurture, document collection, booking, and CRM workflow visibility",
          ],
        },
        {
          label: "AI lead follow-up for mortgage brokers",
          values: [
            "Brokerages that already know the leak starts before the application really begins",
            "Focuses narrowly on first-response speed, nurture, and broker handoff while the lead is still warm",
          ],
        },
        {
          label: "Document collection automation for mortgage brokers",
          values: [
            "Brokerages that already know incomplete files are the main drag",
            "Focuses narrowly on missing-document reminders, secure next steps, and cleaner handoff on active files",
          ],
        },
        {
          label: "Incomplete application follow-up for mortgage brokers",
          values: [
            "Brokerages that already know prospects are stalling before file completion",
            "Focuses narrowly on recovering half-finished applications before they quietly die in the CRM",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your brokerage?",
      subtitle:
        "This page is useful when you know the brokerage needs better automation, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already see one obvious leak: slow first response, missing-document chasing, or half-finished applications fading out",
            "You want one bounded workflow that proves value before funding a broader brokerage automation layer",
            "Broker or admin time is being burned on repetitive reminders instead of funded-file work",
            "Your CRM or LOS is good enough to identify the workflow stage, owner, and basic borrower status needed to trigger automation",
            "You want a practical recommendation instead of another vague mortgage-tech pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Lead volume is still too low to justify workflow automation at all",
            "The main problem is poor lead quality or weak referral flow, not follow-through",
            "Borrower records, stage definitions, or ownership rules are too messy to trust any trigger yet",
            "Nobody agrees on who owns the stage you want to automate",
            "You are trying to automate nuanced mortgage advice instead of timing, reminders, routing, and handoff",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first mortgage-broker automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost borrower momentum or repeated broker drag.",
      blocks: [
        {
          heading: "Start where the brokerage already loses speed or file momentum every week",
          body: "If inbound leads sit too long before a first response, lead follow-up comes first. If conversations happen but files stall on missing items, document collection comes first. If prospects begin the process but never become workable applications, incomplete-application recovery comes first. The decision should follow the leak, not whichever workflow sounds smartest in a planning deck.",
        },
        {
          heading: "Do not treat the broader mortgage page as the first project itself",
          body: "The broader mortgage page is useful because it frames the whole operating picture. But most brokerages should still begin with one workflow that can be measured clearly. A narrower first build usually produces faster ROI and teaches the team more than a half-finished system touching every borrower stage at once.",
        },
        {
          heading: "Use borrower momentum and broker time as part of the decision",
          body: "A faster first response can reclaim expensive leads quickly. A document workflow can recover hours of admin drag every week. An incomplete-application workflow can pull stalled pre-approvals and consultations back into motion without adding more manual chasing. The first build should be chosen by operational economics, not by generic AI hype.",
        },
        {
          heading: "Expand only after the first workflow is genuinely working",
          body: "Once one stage is running cleanly, the next stage becomes easier to justify and easier to design. A brokerage might start with lead follow-up, then add incomplete-application recovery, then narrow into document reminders. Or it might start with document collection if active-file drag is already the biggest pain. The sequence should come from evidence, not from trying to automate the whole borrower journey at the same time.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first mortgage-broker automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest rebuild instead of the clearest leak",
          body: "Many brokerages jump toward a full CRM or communication overhaul when the real problem is still one stage: first response, application recovery, or missing-document discipline. Bigger scope feels strategic, but it usually delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring data cleanliness and ownership rules",
          body: "Automation is only as good as the trigger and owner behind it. If borrower stages, document status, or assignment rules are unclear, fix that first or keep the initial workflow narrower so the team can trust the output.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: slow first response, stalled applications, or endless document chasing. Without that baseline, it is hard to choose the right first workflow or prove the first build paid off.",
        },
        {
          icon: Shield,
          title: "Forgetting that compliance and human judgment still matter",
          body: "The first mortgage workflow should improve timing, consistency, and visibility — not improvise regulated advice. Messaging, escalation, and stop rules should be clear before anything goes live.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published mortgage-broker first-project case study on the site yet, so this page stays grounded in the live mortgage cluster plus published CRM and follow-up proof.",
      studies: [
        {
          industry: "Mortgage cluster",
          headline: "The live mortgage pages already isolate the exact workflow families this page is comparing",
          body: "The broader mortgage parent plus the lead-follow-up, document-collection, and incomplete-application children already break the cluster into real workflow stages. This page sits one level earlier and helps a brokerage owner choose which one should come first.",
          link: "/ai-automation-for-mortgage-brokers",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ lead CRM case study proves why structured status tracking and follow-up discipline matter before records quietly decay",
          body: "That e-commerce build is not a mortgage deployment, but it is direct proof that disciplined routing, reminder timing, and owner visibility recover value from a contact base too large to manage from memory. The same mechanics support mortgage lead response, file recovery, and document collection.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Adjacent workflow proof",
          headline: "The broader lead-follow-up and onboarding guides support the same first-project logic",
          body: "The site already has published workflow guidance for fast first response, structured intake, and document-driven next steps. This page uses that same operating logic, but narrows the decision to one mortgage-specific workflow instead of the whole brokerage system.",
          link: "/client-onboarding-automation",
        },
      ],
      links: [
        { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
        { label: "AI lead follow-up for mortgage brokers", href: "/ai-lead-follow-up-for-mortgage-brokers" },
        { label: "Document collection automation for mortgage brokers", href: "/document-collection-automation-for-mortgage-brokers" },
        { label: "Incomplete application follow-up for mortgage brokers", href: "/incomplete-application-follow-up-for-mortgage-brokers" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should a mortgage brokerage automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: lead follow-up if new inquiries sit too long before a response, document collection if active files stall on missing items, or incomplete-application recovery if prospects begin the process but never become clean workable files.",
    },
    {
      question: "How is this different from the main mortgage automation page?",
      answer:
        "The main mortgage page is broader and covers the whole operating picture. This page is narrower: it helps a brokerage owner choose which single workflow should come first before a broader automation rollout.",
    },
    {
      question: "What is the safest first project for most mortgage brokers?",
      answer:
        "For many brokerages, lead follow-up is the safest first project because speed-to-lead drives obvious early outcomes quickly. But brokerages with strong intake speed and weak file discipline may get faster ROI from document collection or incomplete-application recovery first. The right answer depends on where the leak already is.",
    },
    {
      question: "Should document collection come before incomplete-application follow-up?",
      answer:
        "Choose document collection first if borrowers are already active in the file but missing-item chasing is the biggest drag. Choose incomplete-application follow-up first if prospects are stalling before they even become clean active files and need a middle-layer nurture workflow to get back into motion.",
    },
    {
      question: "Can a brokerage start with a broader CRM rebuild instead?",
      answer:
        "It can, but most smaller brokerages get a cleaner win from one bounded workflow first. A smaller first build is easier to launch, easier to measure, and gives the team a clearer read on what the next stage should be before funding a broader rebuild.",
    },
  ],
  faqSubtitle:
    "Practical questions about choosing the first mortgage-broker automation project",
  ctaHeading: "Need help choosing the first mortgage workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your brokerage is actually leaking borrower momentum or broker time today, tell you which workflow should come first, and show you what a smaller first build would need to include before you fund a broader automation rollout.",
  ctaSubtext:
    "No generic mortgage-tech pitch. Just a practical scoping conversation about your pipeline.",
  relatedLinks: [
    { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
    { label: "AI lead follow-up for mortgage brokers", href: "/ai-lead-follow-up-for-mortgage-brokers" },
    { label: "Document collection automation for mortgage brokers", href: "/document-collection-automation-for-mortgage-brokers" },
    { label: "Incomplete application follow-up for mortgage brokers", href: "/incomplete-application-follow-up-for-mortgage-brokers" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
