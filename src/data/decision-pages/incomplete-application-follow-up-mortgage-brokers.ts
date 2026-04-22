import {
  Landmark,
  Timer,
  MessageSquare,
  FileCheck,
  CalendarCheck,
  Users,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  BarChart3,
  Bot,
  FileText,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "incomplete-application-follow-up-for-mortgage-brokers",
  metaTitle:
    "Incomplete Application Follow-Up for Mortgage Brokers — Recover More Borrowers | Dmytro AI",
  metaDescription:
    "How mortgage brokers automate incomplete application follow-up. Recover stalled borrowers, send the right next-step reminders, and move more files forward without manual chasing.",
  badgeText: "Mortgage Workflow",
  badgeIcon: Landmark,
  h1: "Incomplete Application Follow-Up for Mortgage Brokers",
  heroIntro:
    "A mortgage lead does not disappear only because the rate was bad. Plenty of them disappear because the borrower started the process, got busy, felt overwhelmed, or never got a clear next step. They filled the form, maybe replied once, maybe even started an application — then the file stalled. Incomplete application follow-up automation fixes that specific gap between first inquiry and full document collection. It keeps borrowers moving with the right reminder, booking prompt, and human handoff before the file quietly dies in your CRM.",
  heroSubtext:
    "Below: what incomplete-application follow-up actually handles, where it differs from first-response automation and document chasing, how to keep the workflow compliant and useful, and what adjacent proof fairly supports this page even without a published mortgage-specific case study.",
  sections: [
    {
      type: "cards",
      title: "What incomplete-application follow-up automation actually handles",
      subtitle:
        "This page is about the messy middle: borrowers who showed intent but did not finish the next step on their own.",
      items: [
        {
          icon: Timer,
          title: "Fast re-engagement after the borrower stalls",
          body: "When a prospect starts an application or replies to an initial message but then goes quiet, the system follows up quickly instead of leaving the file untouched until someone remembers it later.",
        },
        {
          icon: MessageSquare,
          title: "Stage-based reminder sequences",
          body: "A borrower who never booked a pre-approval call needs different messaging than someone who booked but did not complete the intake form. The workflow changes by stage, not just by time delay.",
        },
        {
          icon: CalendarCheck,
          title: "Clear next-step prompts",
          body: "Every follow-up points toward one practical action: book the call, finish the intake, answer the qualifying question, or upload the first required item. That keeps the file moving instead of creating more confusion.",
        },
        {
          icon: FileCheck,
          title: "Application-progress visibility",
          body: "Your team can see who is still half-in, which stage they stalled at, and what outreach already happened. That is much easier than piecing it together from inboxes and partial CRM notes.",
        },
        {
          icon: Users,
          title: "Broker handoff on warm replies",
          body: "Once the borrower re-engages with real intent, the automation routes the conversation to the broker with context attached. Humans step in at the point where judgment matters most.",
        },
        {
          icon: BarChart3,
          title: "Recovery reporting instead of guesswork",
          body: "You can track how many stalled applications re-engage, book, or progress after follow-up instead of assuming those files were lost forever.",
        },
      ],
    },
    {
      type: "table",
      title: "Incomplete application follow-up vs. document collection vs. first-response automation",
      subtitle:
        "These workflows are related, but they solve different bottlenecks in the mortgage funnel:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "First-response automation",
          values: [
            "Brand-new inquiries from ads, portals, referrals, or the website",
            "Respond immediately and turn cold inquiries into real conversations before the lead goes elsewhere",
          ],
        },
        {
          label: "Incomplete application follow-up",
          values: [
            "Borrowers who started but did not finish the next required step",
            "Re-engage stalled files with the right reminder, booking prompt, and broker handoff before they go cold",
          ],
        },
        {
          label: "Document collection automation",
          values: [
            "Borrowers already in process who still owe specific documents",
            "Track missing items and send precise reminders so files keep moving toward completion",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your brokerage?",
      subtitle:
        "This is most useful when your pipeline loses momentum after initial contact, not just at the very top or very bottom.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You get regular inbound leads but too many applications stall after the first touch",
            "Your team manually checks who booked, who replied, and who disappeared",
            "Borrowers often mean to continue but need clearer nudges and easier next steps",
            "You want brokers focused on serious conversations, not repetitive chasing",
            "You already have a basic CRM or LOS stage structure to trigger the workflow from",
            "You want to recover more of the leads you already paid to acquire",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your main problem is still top-of-funnel lead generation, not stalled applications",
            "You only get a small number of inquiries and can personally follow every file",
            "Your process is so inconsistent that there is no stable 'next step' to automate yet",
            "You expect AI to give mortgage advice or handle compliance-sensitive borrower questions on its own",
            "Your CRM stages are too unreliable to tell whether the borrower stalled before or after document collection",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for mortgage application-nurture workflows",
      subtitle:
        "The workflow needs to be practical, compliant, and respectful — otherwise it becomes noise.",
      items: [
        {
          icon: ShieldCheck,
          title: "Use approved borrower-facing language",
          body: "Application-nurture sequences should be reviewed for tone, consent, and compliance. The system should automate timing and consistency, not improvise regulated messaging.",
        },
        {
          icon: Bot,
          title: "Do not automate broker advice",
          body: "The automation can remind, clarify the next administrative step, and route the conversation. Rate guidance, underwriting nuance, and sensitive borrower questions still belong with a human broker.",
        },
        {
          icon: MessageSquare,
          title: "Different stages need different copy",
          body: "Someone who abandoned before booking a call should not get the same follow-up as someone who booked but never completed intake. The strongest systems separate those paths clearly.",
        },
        {
          icon: FileText,
          title: "Know when to escalate or stop",
          body: "Some files need a broker callback. Others should be marked unresponsive after a defined sequence. Good automation avoids endless follow-up loops with no decision point.",
        },
      ],
    },
    {
      type: "prose",
      title: "How incomplete-application follow-up usually works in practice",
      subtitle:
        "This workflow lives between first response and full document chasing. A practical setup usually looks like this:",
      blocks: [
        {
          heading: "A borrower shows intent but does not complete the next step",
          body: "They click the ad, fill the form, reply once, or start the intake — but they do not book the call, finish the questionnaire, or move into the next stage. That creates a file that is not dead, but not active either.",
        },
        {
          heading: "The system triggers the right follow-up path",
          body: "Based on source and stage, the workflow sends a reminder with one clear next step: finish the intake, book the consultation, answer the pre-qualification question, or confirm whether they still want help. The messaging stays simple and useful.",
        },
        {
          heading: "Non-responders keep getting structured nudges",
          body: "If the borrower does not act, they move through a short sequence over the next 24 to 72 hours or longer, depending on the stage. The goal is not to nag forever. It is to recover the files that still have real intent while it is still commercially relevant.",
        },
        {
          heading: "Warm replies pull in the broker with context",
          body: "When the borrower responds, books, or asks a meaningful question, the broker gets the conversation history and stage context immediately. That makes the human follow-up faster and more relevant.",
        },
        {
          heading: "The workflow hands off to document collection when the file advances",
          body: "Once the borrower crosses into the stage where specific documents are owed, the process should shift to the narrower document-reminder workflow. That is how you keep this page distinct from the mortgage document-collection page instead of blending them together.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no published mortgage-specific application-nurture case study yet. The honest proof frame is adjacent workflow proof plus the already-live mortgage pages that define the funnel clearly.",
      studies: [
        {
          industry: "Mortgage workflow cluster",
          headline: "Existing mortgage lead-follow-up page proves the speed-to-lead and nurture pattern",
          body: "The published mortgage lead-follow-up guide already covers immediate response, multi-touch nurture, broker handoff, and incomplete-application recovery. This page narrows that same pattern to the exact middle-of-funnel stall point.",
          link: "/ai-lead-follow-up-for-mortgage-brokers",
        },
        {
          industry: "CRM / workflow operations",
          headline: "Large CRM automation case study shows the stage-tracking and reminder discipline",
          body: "The WheelsFeels CRM case study demonstrates the workflow discipline this page depends on: stage-based statuses, automated follow-up, visibility into stuck records, and less manual chasing. Mortgage messaging differs, but the operational pattern is the same.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Mortgage automation overview", href: "/ai-automation-for-mortgage-brokers" },
        { label: "Mortgage lead follow-up guide", href: "/ai-lead-follow-up-for-mortgage-brokers" },
        { label: "Mortgage document collection guide", href: "/document-collection-automation-for-mortgage-brokers" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from mortgage lead follow-up automation?",
      answer:
        "Lead follow-up is broader and starts at first response. This page is narrower: it focuses on borrowers who already showed interest but stalled before completing the next required step.",
    },
    {
      question: "How is this different from document collection automation?",
      answer:
        "Document collection starts once the file reaches the stage where specific borrower documents are owed. Incomplete-application follow-up comes earlier in the funnel and focuses on getting the borrower back into motion before that handoff.",
    },
    {
      question: "What does a focused build usually cost?",
      answer:
        "A focused stalled-application follow-up workflow often lands around $2K-$4K depending on your CRM, stage logic, source segmentation, and broker handoff rules. If it also includes broader lead response and document workflows, the scope usually moves higher.",
    },
    {
      question: "Can this work with my current CRM or LOS?",
      answer:
        "Usually yes, if the system has stable stages and a practical way to trigger reminders through APIs, webhooks, or reliable exports. The workflow depends more on clean stage logic than on a specific brand of CRM.",
    },
    {
      question: "Will this replace my broker or ops coordinator?",
      answer:
        "No. It removes repetitive chasing and keeps stalled files moving. Brokers still handle advice, nuanced borrower conversations, and exceptions that need judgment.",
    },
  ],
  faqSubtitle:
    "Practical questions about recovering stalled mortgage applications",
  ctaHeading: "Want more half-finished mortgage applications to turn back into real conversations?",
  ctaText:
    "Book a 30-minute call. We will look at where your borrowers usually stall, how your stages are tracked today, and whether a focused incomplete-application follow-up workflow is the cleanest next build before you add anything broader.",
  ctaSubtext:
    "No fake funded-loan claims. Just a practical recommendation based on where your pipeline currently leaks momentum.",
  relatedLinks: [
    { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
    { label: "AI lead follow-up for mortgage brokers", href: "/ai-lead-follow-up-for-mortgage-brokers" },
    { label: "Document collection automation for mortgage brokers", href: "/document-collection-automation-for-mortgage-brokers" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
