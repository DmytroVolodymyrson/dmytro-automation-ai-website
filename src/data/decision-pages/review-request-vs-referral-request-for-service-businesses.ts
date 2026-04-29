import {
  Scale,
  Star,
  Users,
  Clock3,
  MessageSquare,
  ArrowRightLeft,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Workflow,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "review-request-vs-referral-request-for-service-businesses",
  metaTitle:
    "Review Request vs. Referral Request for Service Businesses | Dmytro AI",
  metaDescription:
    "Should a service business automate review requests or referral requests first? Practical comparison of timing, trust signals, workflow ownership, ROI, and when each post-job follow-up layer actually fits.",
  badgeText: "Workflow Comparison",
  badgeIcon: Scale,
  h1: "Review Request vs. Referral Request for Service Businesses",
  heroIntro:
    "A lot of service businesses know they should do more after a job is finished, but they lump two different asks into one messy follow-up. A review request is about public proof. A referral request is about private introductions. Both matter, but they do different jobs, land at different moments, and break for different reasons. Review-request automation helps the business turn completed work into cleaner reputation signals without pushing unhappy customers toward a public review too early. Referral-request automation helps the business turn good completed work into neighbor, friend, colleague, or repeat-project introductions while trust is still warm. If you try to force both asks into one generic message, you usually weaken both.",
  heroSubtext:
    "Below: where each workflow fits, when one should come before the other, how to keep the asks separate without losing momentum, what proof honestly supports the comparison, and which post-job layer is the cleaner first build for most service businesses.",
  sections: [
    {
      type: "cards",
      title: "What each workflow is actually trying to fix",
      subtitle:
        "Both pages sit after the work is done, but they solve different operating problems:",
      items: [
        {
          icon: Star,
          title: "Review-request automation",
          body: "Best for businesses that complete good work but ask for reviews inconsistently, too early, or with no unhappy-reply routing. The goal is public reputation follow-through and cleaner local-trust signals.",
        },
        {
          icon: Users,
          title: "Referral-request automation",
          body: "Best for businesses that already do work customers would recommend, but still rely on luck for introductions. The goal is turning completed jobs into private word-of-mouth opportunities and repeat-project conversations.",
        },
        {
          icon: Workflow,
          title: "The shared core",
          body: "Both need a real completed-job trigger, timing that fits the service type, and a fast human handoff when a live reply appears. The difference is what the ask is trying to produce: a public review or a personal introduction.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "Use the workflow that matches the real post-job outcome you need first:",
      headers: ["Review Request", "Referral Request"],
      rows: [
        {
          label: "Main outcome",
          values: [
            "Public social proof and stronger local trust",
            "Private introductions, warm leads, and repeat-project conversations",
          ],
        },
        {
          label: "Best trigger",
          values: [
            "Job completed and the experience feels settled enough for a public ask",
            "Job completed and the customer is satisfied enough to comfortably recommend you to someone else",
          ],
        },
        {
          label: "Main risk",
          values: [
            "Pushing unhappy customers toward a public review before recovery happens",
            "Sending generic advocacy asks that feel premature, awkward, or disconnected from how referrals actually happen",
          ],
        },
        {
          label: "Reply routing",
          values: [
            "Complaints, confusion, or billing issues route back inside before the public ask moves forward",
            "Referral replies, neighbor mentions, and repeat-project signals route fast to the owner or team for follow-up",
          ],
        },
        {
          label: "Best first when",
          values: [
            "The business finishes enough jobs that stronger review consistency would immediately help trust and map-pack visibility",
            "Word of mouth is already important, but there is no repeatable system for asking at the right moment",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When service recovery is still weak or timing is too aggressive",
            "When the business has no one ready to act quickly once a customer names a real opportunity",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each one should come first",
      subtitle:
        "Choose the smallest post-job workflow that fixes the real growth leak:",
      options: [
        {
          icon: Star,
          heading: "Start with review requests when...",
          highlighted: true,
          items: [
            "Completed-job volume is healthy, but review follow-through depends on office memory",
            "A handful of additional strong reviews each month would materially improve local trust or conversion",
            "The business already handles referrals informally, but public proof is the more obvious operating gap",
            "You need complaint routing and timing discipline before asking publicly",
            "Your bigger problem is weak reputation follow-through, not a lack of word-of-mouth opportunities",
          ],
        },
        {
          icon: Users,
          heading: "Start with referral requests when...",
          highlighted: false,
          items: [
            "Referrals should already be a meaningful lead source, but nobody asks consistently",
            "The business depends on neighbors, friends, property managers, repeat projects, or local trust networks",
            "One or two additional referred jobs per month would justify the build quickly",
            "The team can act fast when a customer names a real opportunity",
            "Public reviews matter, but the higher-value leak is missed introductions after good work is finished",
          ],
        },
        {
          icon: ArrowRightLeft,
          heading: "Use both when...",
          highlighted: false,
          items: [
            "The business has enough completed-job volume that both public trust and private introductions deserve their own workflow",
            "You want the review page as the reputation layer and the referral page as the advocacy layer beside it",
            "The team can separate public-review timing from private-introduction timing without stacking every ask into one message",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit / bad fit signals",
      subtitle:
        "This comparison is useful when the business already knows post-job follow-up matters but is not sure which ask should come first:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You already complete enough work that better post-job follow-through could change growth materially",
            "Customers often seem happy, but there is no structured decision about whether the next ask should be a review or a referral",
            "The team wants a practical workflow decision, not generic reputation-marketing advice",
            "You can route unhappy replies and warm referral replies back to a real person quickly",
            "You want to avoid the common mistake of forcing both asks into one generic post-job message",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right comparison",
          variant: "neutral",
          items: [
            "The bigger leak is still missed calls, slow lead response, or quote follow-up before the job is won",
            "Completed-job volume is too low for either post-job workflow to matter yet",
            "Service quality or complaint handling is still unstable enough that more post-job asks would amplify the wrong problem",
            "Nobody has time to act when a complaint or referral reply appears",
            "You are really looking for one giant all-purpose nurture sequence instead of a bounded post-job workflow",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How businesses get this wrong",
      subtitle:
        "Most bad post-job builds happen because the asks sound related, so everything gets collapsed into one message:",
      items: [
        {
          icon: AlertTriangle,
          title: "Stacking the review ask and referral ask together",
          body: "A customer who might happily leave a review is not always ready for a referral ask in the same moment. A customer willing to make an introduction may not want a public-review prompt shoved into the same thread. Separate the asks so each one still feels natural.",
        },
        {
          icon: Clock3,
          title: "Using the same timing rule for every service type",
          body: "A same-day repair, a recurring visit, and a multi-day project do not feel complete at the same moment. Good timing matters for both workflows, but especially for deciding whether the next step should be a public review or a private introduction.",
        },
        {
          icon: MessageSquare,
          title: "Ignoring the reply path",
          body: "Review workflows need complaint routing. Referral workflows need warm-opportunity routing. If neither route is clean, the outgoing message might be automated but the business still fumbles the part that matters.",
        },
        {
          icon: BarChart3,
          title: "Measuring sends instead of useful outcomes",
          body: "The KPI is not how many texts went out. It is whether you got more usable reviews, more real introductions, fewer unhappy customers pushed publicly too early, and less office guesswork after completed jobs.",
        },
      ],
    },
    {
      type: "prose",
      title: "A simple way to decide",
      subtitle:
        "Ask what the business needs more urgently after a completed job: public trust or private introductions.",
      blocks: [
        {
          heading: "If the business keeps finishing good work but still looks under-proven online",
          body: "That leans toward review-request automation first. The immediate gain comes from more consistent public proof, better timing, and keeping unhappy replies inside the business instead of letting them spill into public channels.",
        },
        {
          heading: "If the business already wins on word of mouth but still treats referrals like luck",
          body: "That leans toward referral-request automation first. The gain comes from finally asking at the right moment, making the referral type obvious, and routing warm replies back to the business before the moment disappears.",
        },
        {
          heading: "If both are true, separate the workflow stages instead of combining the asks",
          body: "That is the clean cluster logic on this site already: the review page owns post-job reputation timing, and the referral page owns post-job advocacy timing. This comparison page exists so a buyer can choose which one deserves to come first.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this comparison",
      subtitle:
        "There is no single published case study for this exact buyer choice yet. The honest proof frame is the two live horizontal parent pages, the vertical review/referral pages, and the published CRM lifecycle case study:",
      studies: [
        {
          industry: "Review-side proof",
          headline: "The service-business review page already shows the reputation timing and unhappy-reply routing pattern",
          body: "That page covers completed-job triggers, public-review timing, complaint routing, and why post-service reputation follow-through should stay separate from earlier lead or phone workflows.",
          link: "/review-request-automation-for-service-businesses",
        },
        {
          industry: "Referral-side proof",
          headline: "The service-business referral page already shows the advocacy timing and warm-introduction routing pattern",
          body: "That page explains how completed jobs can produce neighbor referrals, repeat-project conversations, and other real introductions when the ask is clear and the business can react quickly.",
          link: "/referral-request-automation-for-service-businesses",
        },
        {
          industry: "Adjacent workflow proof",
          headline: "The e-commerce CRM case study proves why milestone-based routing and fast human handoff matter after a relationship changes state",
          body: "That case study is not a post-job reputation page, but it proves the discipline this comparison depends on: detect the milestone, route the next action, and give a human the context needed to respond quickly when the contact re-engages.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Review request automation for service businesses", href: "/review-request-automation-for-service-businesses" },
        { label: "Review request automation setup", href: "/review-request-automation-setup-for-service-businesses" },
        { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
        { label: "Referral request setup for service businesses", href: "/referral-request-automation-setup-for-service-businesses" },
        { label: "Referral automation for painting contractors", href: "/referral-request-automation-for-painting-contractors" },
        { label: "Review automation for restaurants", href: "/review-request-automation-for-restaurants" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is the real difference between a review request and a referral request workflow?",
      answer:
        "A review-request workflow is designed to turn completed jobs into public social proof without pushing unhappy customers toward a public review too early. A referral-request workflow is designed to turn completed jobs into private introductions, repeat-project conversations, or warm leads from people the customer already knows. They share post-job timing logic, but the asks and routing paths are different.",
    },
    {
      question: "Which one should most service businesses build first?",
      answer:
        "Usually whichever fixes the more urgent growth leak. If the business finishes good work but still looks under-proven online, review requests often come first. If referrals should already be a meaningful lead source and nobody asks consistently, referral requests may be the higher-leverage first build. The cleaner answer comes from where trust is leaking after completed jobs.",
    },
    {
      question: "Can both workflows coexist without duplicating each other?",
      answer:
        "Yes. The review workflow can own public-proof timing and unhappy-reply routing. The referral workflow can own advocacy timing and warm-introduction routing. They only get muddy when both asks are forced into one generic follow-up.",
    },
    {
      question: "What does a focused post-job review or referral workflow usually cost?",
      answer:
        "A focused build for either layer usually lands around $1.5K-$3K depending on how cleanly completion can be detected, how much timing logic is needed, and whether the system must route complaint replies, referral replies, or CRM handoff. Broader workflows that also include earlier lead, scheduling, or phone stages cost more.",
    },
    {
      question: "What should I fix before building either one?",
      answer:
        "Make sure the business can reliably tell when work is truly complete, who owns the next move, and where replies should route. If the team cannot tell whether a job finished cleanly or who should respond when a customer replies, the automation will only move confusion faster.",
    },
  ],
  faqSubtitle:
    "Practical questions about review requests vs. referral requests for service businesses",
  ctaHeading: "Need help choosing the right post-job ask first?",
  ctaText:
    "Book a 30-minute call. We will look at how your business closes jobs today, where trust or advocacy is leaking afterward, whether public reviews or private introductions deserve to come first, and what the smallest useful workflow would actually include.",
  ctaSubtext:
    "No generic reputation-marketing pitch and no pressure to overbuild. Just a practical recommendation based on your current post-job handoff, service mix, and growth goals.",
  relatedLinks: [
    { label: "Review request automation for service businesses", href: "/review-request-automation-for-service-businesses" },
    { label: "Review request automation cost", href: "/review-request-automation-cost-small-business" },
    { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
    { label: "Referral request setup for service businesses", href: "/referral-request-automation-setup-for-service-businesses" },
    { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
