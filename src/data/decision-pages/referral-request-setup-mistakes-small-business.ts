import {
  AlertTriangle,
  CheckCircle2,
  ClipboardX,
  Clock,
  MessageSquare,
  Route,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "referral-request-setup-mistakes-small-business",
  metaTitle:
    "Referral Request Setup Mistakes for Small Business — What Usually Breaks Before Launch | Dmytro AI",
  metaDescription:
    "Common referral-request setup mistakes that cause early asks, review-vs-referral overlap, unresolved-issue follow-up, weak warm-intro routing, and CRM cleanup later. Practical pre-launch guide for small businesses.",
  badgeText: "Setup Mistakes",
  badgeIcon: ClipboardX,
  h1: "Referral Request Setup Mistakes for Small Business",
  heroIntro:
    "Referral automation usually starts feeling awkward before the first useful introduction ever comes in. The core mistake is rarely the wording of the ask itself. It is the setup around it: the workflow fires before the job is truly complete, review and referral asks get bundled into one crowded message, unresolved service issues stay inside the automation path instead of stopping it, or a customer names a real person and nobody can clearly see who owns the next move. Small businesses often build referral follow-through because word-of-mouth already matters and nobody wants to keep relying on memory. That is exactly why the setup mistakes matter. If the first launch teaches the team that referral automation sends too early, sounds tone-deaf, or hides warm replies in the wrong inbox, the workflow loses trust before it ever has a chance to pay back.",
  heroSubtext:
    "Below: the referral-request setup mistakes that usually create the biggest cleanup later, when this page is the right one versus setup-help / cost / ROI / DIY pages, and how to keep post-job advocacy from becoming another office mess before launch.",
  sections: [
    {
      type: "cards",
      title: "The setup mistakes that usually create the biggest cleanup later",
      subtitle:
        "These are the pre-launch misses that make referral-request automation feel forced, low-trust, or operationally sloppy fast:",
      items: [
        {
          icon: Workflow,
          title: "Launching before the completed-job trigger is trustworthy",
          body: "If the field team, office, or CRM do not agree on when a job is actually done, the referral ask fires too early, too late, or not at all. That one trigger mistake makes every downstream touch feel wrong even if the message copy itself is reasonable.",
        },
        {
          icon: Clock,
          title: "Using one generic timing rule for every finished job",
          body: "A quick same-day visit, a recurring service stop, and a bigger install do not all create referral readiness on the same timeline. One canned delay often means asking before the customer feels settled or waiting so long that the happy moment has already cooled off.",
        },
        {
          icon: MessageSquare,
          title: "Bundling the referral ask into the review ask",
          body: "Public social proof and private introductions are not the same job. When both asks get stacked into one message or one sequence, the customer sees a crowded request instead of one clear next action, and the business loses visibility into which path actually mattered.",
        },
        {
          icon: ShieldCheck,
          title: "Not stopping the workflow when an issue is still open",
          body: "Customers with billing confusion, callbacks, warranty questions, or unresolved cleanup should not get a referral ask just because a stage changed. If stop rules are weak, automation keeps pushing while the business should still be repairing trust.",
        },
        {
          icon: Users,
          title: "Leaving warm-intro routing and ownership fuzzy",
          body: "If a customer names a friend, another property, or another project and that reply lands with no clear owner, the warm moment goes cold fast. Referral automation breaks when the introduction is technically captured but operationally abandoned.",
        },
      ],
    },
    {
      type: "table",
      title: "What each setup mistake usually breaks downstream",
      subtitle:
        "The early implementation miss matters because it creates a specific operational problem later:",
      headers: ["Setup mistake", "What it usually breaks", "Why it gets expensive"],
      rows: [
        {
          label: "Unreliable completed-job trigger",
          values: [
            "The workflow asks for introductions before the customer experiences the work as truly finished, or misses good moments entirely",
            "The team stops trusting the automation because the core referral moment is wrong from the start",
          ],
        },
        {
          label: "Generic referral timing",
          values: [
            "The ask lands before the customer is settled or so late that the goodwill window has already closed",
            "Bad timing makes the business sound robotic instead of thoughtful, which weakens response quality",
          ],
        },
        {
          label: "Review and referral asks sharing one path",
          values: [
            "Customers get one crowded post-job message and the business loses clarity on whether it is asking for public proof or private introductions",
            "Both workflows perform worse because the next action is no longer obvious or easy to route",
          ],
        },
        {
          label: "No stop rule for unresolved issues",
          values: [
            "Customers with loose ends still receive an advocacy ask that should have been suppressed",
            "The workflow damages trust at the exact moment the business should have stayed human-first",
          ],
        },
        {
          label: "Weak warm-reply ownership and CRM visibility",
          values: [
            "Replies naming real opportunities disappear into a generic inbox or get detached from the original customer context",
            "Recovered introductions still require manual reconstruction, which wipes out much of the leverage the workflow was supposed to create",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is useful — and when it is not",
      subtitle:
        "This page is for owners trying to avoid the narrow pre-launch failures that make referral automation feel sloppy:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You already believe referral-request automation should exist and now want to avoid a messy first rollout",
            "Your business finishes enough jobs that bad timing, weak suppression, or lost warm replies would create real office friction quickly",
            "You need a mistakes page, not a broader explanation of setup scope, pricing, ROI, or DIY-vs-hiring help",
            "Referral and review asks both matter, so overlap between them would create confusion or poor measurement",
            "You would rather launch one narrow trustworthy post-job advocacy path than a broader workflow nobody trusts after week one",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether referral-request automation is the right workflow at all",
            "Your main question is setup scope, cost, ROI, or DIY-vs-help rather than common pre-launch mistakes specifically",
            "Your real leak is still missed calls, lead response, scheduling, or quote follow-up before the work even happens",
            "Completed-job volume is too low for a dedicated referral workflow to matter yet",
            "The bigger issue is service quality or closeout discipline itself, not post-job advocacy follow-through",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to avoid turning setup into future cleanup",
      subtitle:
        "Most businesses do not need a more complex referral workflow. They need a more disciplined one:",
      items: [
        {
          icon: Wrench,
          title: "Define the completion moment in one operational sentence",
          body: "Before polishing messages, write down exactly what event means the work is complete enough to earn a referral ask. If three people would answer that question differently, the trigger is not ready yet.",
        },
        {
          icon: Route,
          title: "Map who owns each kind of reply",
          body: "A happy thumbs-up, a named referral, a request for another quote, and a complaint should not all route to the same place. Decide which replies stop automation, which go to the office, and which should reach the owner or salesperson directly.",
        },
        {
          icon: AlertTriangle,
          title: "Write the stop rules before polishing the sequence",
          body: "The expensive setup failures are boundary failures, not wording failures. Decide what stops the workflow when there is an open issue, a callback still pending, a billing question, or a live human conversation already in progress.",
        },
        {
          icon: Users,
          title: "Make visibility part of the build, not a later cleanup project",
          body: "If the team cannot see what fired, what the customer replied, and who owns the next move now, the workflow is only half built. A good launch creates usable state, not just automated asks.",
        },
      ],
    },
    {
      type: "prose",
      title: "The five referral-request setup mistakes owners regret most",
      subtitle:
        "These are the patterns that show up when a new referral workflow already feels fragile:",
      blocks: [
        {
          heading: "Mistake 1: guessing when the job is “done enough” instead of defining it",
          body: "If the trigger depends on inconsistent field updates, invoice timing, or an office step nobody reliably completes, the workflow never had a clean foundation. The first fix is usually closeout hygiene, not a nicer referral message.",
        },
        {
          heading: "Mistake 2: copying one delay onto every service type",
          body: "Different jobs create different advocacy moments. A generic day-2 follow-up ignores whether the customer still has a loose end, whether the project was large enough to need a softer check-in first, or whether a recurring customer needs a different tone entirely.",
        },
        {
          heading: "Mistake 3: asking for a referral while the business still owes the customer something",
          body: "Nothing feels more tone-deaf than asking for an introduction while the customer is still waiting on cleanup, an answer, or a fix. If the workflow cannot detect those states and stop itself, trust drops immediately.",
        },
        {
          heading: "Mistake 4: mixing review and referral workflows because it looks efficient",
          body: "What looks simpler in the automation tool often sounds messier to the customer. If the page asks for a public review and a personal referral in the same breath, the business learns less, routes less clearly, and often gets weaker engagement on both asks.",
        },
        {
          heading: "Mistake 5: no one owns the introduction after it arrives",
          body: "Even when the automation works, the value disappears if the named opportunity sits without fast follow-through. Referral automation should not end at sending. It should make the next human action easier, faster, and more obvious.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone referral-request setup-mistakes case study here. The support comes from the live referral-request cluster, the setup/cost/DIY siblings, and the published CRM case study already on the site:",
      studies: [
        {
          industry: "Existing referral-request cluster",
          headline: "The live parent, setup-help, cost, ROI, and DIY pages already define the surrounding referral decision clearly",
          body: "That cluster makes the remaining exact buyer-intent page viable: the pre-launch mistakes layer that causes early asks, weak suppression, bundled advocacy asks, and lost warm replies. This page isolates failure modes instead of rehashing scope, pricing, payback, or buy-vs-build framing.",
          link: "/referral-request-automation-for-service-businesses",
        },
        {
          industry: "Post-job decision proof",
          headline: "The review-vs-referral comparison already proves why those two asks need separate timing and ownership",
          body: "That page is not about mistakes specifically, but it is the honest adjacent proof for one of the biggest launch failures here: collapsing public-proof and private-advocacy asks into one workflow because it looked convenient.",
          link: "/review-request-vs-referral-request-for-service-businesses",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "The WheelsFeels CRM case study proves why state, routing, and next-step ownership matter after a customer milestone changes",
          body: "Different exact workflow, same operational lesson. The published CRM case study shows that valuable follow-through only becomes revenue when the business can trust stage ownership, reply visibility, and handoff after a contact re-engages.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
        { label: "Referral request setup help", href: "/referral-request-automation-setup-for-service-businesses" },
        { label: "Referral request setup vs. DIY", href: "/referral-request-automation-setup-vs-diy-small-business" },
        { label: "Referral request launch checklist", href: "/referral-request-automation-launch-checklist-small-business" },
        { label: "Referral request automation cost", href: "/referral-request-automation-cost-small-business" },
        { label: "Referral request automation ROI", href: "/referral-request-automation-roi-small-business" },
        { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
        { label: "Review request automation setup", href: "/review-request-automation-setup-for-service-businesses" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What are the most common referral-request setup mistakes for a small business?",
      answer:
        "The biggest ones are unreliable completed-job triggers, generic timing for every service type, bundling referral and review asks into one path, weak stop rules for unresolved issues, and fuzzy routing or ownership when a customer actually names a real opportunity.",
    },
    {
      question: "How do I avoid a messy referral-request launch?",
      answer:
        "Start by defining one trustworthy completion trigger, map ownership for each kind of reply, separate referral asks from review asks, write suppression rules before polishing the message sequence, and make sure the CRM or inbox clearly shows the current owner and last customer state before the workflow goes live.",
    },
    {
      question: "How is this different from the referral-request setup-help page?",
      answer:
        "The setup-help page explains what a proper implementation should include and when setup help is worth paying for. This mistakes page stays narrower: the exact pre-launch failures that usually make referral automation feel awkward or untrustworthy from the start.",
    },
    {
      question: "How is this different from the cost or ROI pages?",
      answer:
        "The cost and ROI pages are about budget and payback. This mistakes page sits earlier in the decision chain and focuses on the design failures that create early asks, weak suppression, messy ownership, and avoidable cleanup before the economics matter.",
    },
    {
      question: "Should I fix referral-request setup mistakes myself or hire help before launch?",
      answer:
        "DIY can be fine when the workflow is narrow, completed-job volume is modest, and you are comfortable testing triggers, suppression, and routing yourself. If wrong timing or lost warm replies would damage trust quickly, expert help usually costs less than a weak first launch.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners trying to avoid the setup mistakes that quietly turn referral follow-through into another office headache",
  ctaHeading:
    "Want a cleaner referral-request launch before setup mistakes start creating awkward post-job follow-up?",
  ctaText:
    "Book a 30-minute call. We will look at your completed-job trigger, timing rules, review-vs-referral separation, unresolved-issue suppression, warm-intro reply routing, and CRM visibility, then help you scope the narrowest trustworthy rollout first.",
  ctaSubtext:
    "Useful if you are still in setup mode and want referral automation to feel credible from week one instead of becoming cleanup work later.",
  relatedLinks: [
    { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
    { label: "Referral request setup help", href: "/referral-request-automation-setup-for-service-businesses" },
    { label: "Referral request setup vs. DIY", href: "/referral-request-automation-setup-vs-diy-small-business" },
    { label: "Referral request automation cost", href: "/referral-request-automation-cost-small-business" },
    { label: "Referral request automation ROI", href: "/referral-request-automation-roi-small-business" },
    { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
    { label: "Review request automation setup", href: "/review-request-automation-setup-for-service-businesses" },
    { label: "Estimate follow-up setup help", href: "/estimate-follow-up-setup-for-service-businesses" },
    { label: "Client reactivation setup help", href: "/client-reactivation-setup-for-service-businesses" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
