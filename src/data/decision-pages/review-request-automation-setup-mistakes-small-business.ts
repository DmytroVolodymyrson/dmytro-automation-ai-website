import {
  AlertTriangle,
  CheckCircle2,
  ClipboardX,
  Clock,
  MessageSquare,
  Route,
  ShieldCheck,
  Star,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "review-request-automation-setup-mistakes-small-business",
  metaTitle:
    "Review Request Setup Mistakes for Small Business — What Usually Breaks Before Launch | Dmytro AI",
  metaDescription:
    "Common review-request setup mistakes that create early asks, weak completed-job triggers, unresolved-issue suppression failures, review-vs-referral overlap, and messy complaint routing. Practical pre-launch guide for small businesses.",
  badgeText: "Setup Mistakes",
  badgeIcon: ClipboardX,
  h1: "Review Request Setup Mistakes for Small Business",
  heroIntro:
    "Review-request automation usually feels awkward before the business ever sees the first useful public proof from it. The problem is rarely the review link itself. It is the setup around it: the workflow fires before the job is truly complete, every service gets the same timing rule, unhappy replies stay inside the public-ask path instead of stopping it, or the office cannot clearly see who owns the next move once a customer answers. Small businesses often add automated review follow-through because the team already knows manual asking is inconsistent. That is exactly why the setup mistakes matter. If the first launch teaches the business that review asks go out too early, hit the wrong customer, or ignore open issues, the workflow loses trust before it ever has a chance to strengthen local proof.",
  heroSubtext:
    "Below: the review-request setup mistakes that usually create the biggest cleanup later, when this page is the right one versus setup-help / cost / ROI / DIY pages, and how to keep post-job reputation follow-through from becoming another office headache before launch.",
  sections: [
    {
      type: "cards",
      title: "The setup mistakes that usually create the biggest cleanup later",
      subtitle:
        "These are the pre-launch misses that make review-request automation feel robotic, tone-deaf, or operationally sloppy fast:",
      items: [
        {
          icon: Workflow,
          title: "Launching before the completed-job trigger is trustworthy",
          body: "If the field team, office, or CRM do not agree on what “done” actually means, the review ask fires too early, too late, or not at all. That one trigger mistake poisons every message downstream even if the copy itself sounds fine.",
        },
        {
          icon: Clock,
          title: "Using one generic timing rule for every service type",
          body: "A same-day repair, recurring cleaning visit, larger install, and project closeout do not all create review readiness on the same timeline. One canned delay often means asking while the customer still has friction or waiting until the happy moment has already cooled off.",
        },
        {
          icon: ShieldCheck,
          title: "Not stopping the workflow when an issue is still open",
          body: "Customers with callbacks pending, billing questions, warranty concerns, or unresolved cleanup should not get a public review ask just because a stage changed. Weak stop rules turn review automation into trust damage.",
        },
        {
          icon: MessageSquare,
          title: "Routing complaints and review asks through the same path",
          body: "If a confused or unhappy reply lands in the same automation lane as a happy customer, the workflow keeps pushing public-proof logic when the business should still be in service-recovery mode.",
        },
        {
          icon: Star,
          title: "Bundling review and referral asks into one crowded follow-up",
          body: "Public reviews and private referrals are not the same next step. When both asks get stacked together, the customer sees one noisy message instead of one clear action and the business loses visibility into what actually mattered.",
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
            "The workflow asks for a review before the customer experiences the work as truly finished, or misses the clean moment entirely",
            "The team stops trusting the automation because the core reputation moment is wrong from the start",
          ],
        },
        {
          label: "Generic timing for every service type",
          values: [
            "The ask lands while friction is still fresh or so late that the strongest satisfaction moment has already faded",
            "Bad timing makes the business sound scripted instead of thoughtful, which weakens response quality",
          ],
        },
        {
          label: "No suppression for unresolved issues",
          values: [
            "Customers with open problems still get pushed toward a public review ask that should have been stopped",
            "The workflow damages trust at the exact moment the business should have stayed human-first",
          ],
        },
        {
          label: "Complaint replies sharing the public-ask lane",
          values: [
            "A customer trying to raise a concern gets treated like a review target instead of a service-recovery case",
            "The team now has to unwind awkward public-proof follow-through manually after the automation already made things worse",
          ],
        },
        {
          label: "Review and referral asks bundled together",
          values: [
            "Customers get one crowded post-job message and the business loses clarity on whether it is asking for public proof or private advocacy",
            "Both workflows perform worse because the next action is no longer obvious or easy to route",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is useful — and when it is not",
      subtitle:
        "This page is for owners trying to avoid the narrow pre-launch failures that make review-request automation feel untrustworthy:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You already believe review-request automation should exist and now want to avoid a messy first rollout",
            "Your business finishes enough jobs that bad timing, weak suppression, or lost complaint routing would create real office friction quickly",
            "You need a mistakes page, not a broader explanation of setup scope, pricing, ROI, or DIY-vs-hiring help",
            "Review and referral asks both matter, so overlap between them would create confusion or weak measurement",
            "You would rather launch one narrow trustworthy reputation workflow than a broader system nobody trusts after week one",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether review-request automation is the right workflow at all",
            "Your main question is setup scope, cost, ROI, or DIY-vs-help rather than common pre-launch mistakes specifically",
            "Your real leak is still missed calls, lead response, scheduling, or quote follow-up before the work even happens",
            "Completed-job volume is too low for a dedicated review workflow to matter yet",
            "The bigger issue is service quality or closeout discipline itself, not post-job reputation follow-through",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to avoid turning setup into future cleanup",
      subtitle:
        "Most businesses do not need a more complicated review workflow. They need a more disciplined one:",
      items: [
        {
          icon: Wrench,
          title: "Define the completion moment in one operational sentence",
          body: "Before polishing messages, write down exactly what event means the work is complete enough to earn a review ask. If three people would answer that differently, the trigger is not ready yet.",
        },
        {
          icon: Route,
          title: "Map who owns each kind of reply before launch",
          body: "A happy thank-you, a complaint, a billing question, and a referral mention should not all route to the same place. Decide which replies stop automation, which go to the office, and which should reach the owner or service lead directly.",
        },
        {
          icon: AlertTriangle,
          title: "Write the stop rules before polishing the sequence",
          body: "The expensive setup failures are boundary failures, not wording failures. Decide what stops the workflow when there is an open issue, callback pending, invoice confusion, or a live human conversation already in progress.",
        },
        {
          icon: Users,
          title: "Make CRM visibility part of the build, not a later cleanup project",
          body: "If the team cannot see what fired, what the customer replied, and who owns the next move now, the workflow is only half built. A good launch creates usable state, not just automated asks.",
        },
      ],
    },
    {
      type: "prose",
      title: "The five review-request setup mistakes owners regret most",
      subtitle:
        "These are the patterns that show up when a new review workflow already feels fragile:",
      blocks: [
        {
          heading: "Mistake 1: guessing when the job is “done enough” instead of defining it",
          body: "If the trigger depends on inconsistent field updates, invoice timing, or an office step nobody reliably completes, the workflow never had a clean foundation. The first fix is usually closeout hygiene, not a nicer review message.",
        },
        {
          heading: "Mistake 2: copying one delay onto every service type",
          body: "Different jobs create different readiness moments. A generic day-1 or day-2 follow-up ignores whether the customer still has a loose end, whether the work was large enough to need a softer check-in first, or whether a recurring customer needs a different tone entirely.",
        },
        {
          heading: "Mistake 3: asking for a review while the business still owes the customer something",
          body: "Nothing feels more tone-deaf than asking for public proof while the customer is still waiting on cleanup, an answer, or a fix. If the workflow cannot detect those states and stop itself, trust drops immediately.",
        },
        {
          heading: "Mistake 4: treating complaint replies as just another branch inside the same review path",
          body: "A customer who replies with frustration should move into service recovery, not remain inside a public-proof workflow. When that distinction is weak, the business teaches the team that automation is dangerous instead of helpful.",
        },
        {
          heading: "Mistake 5: stacking review and referral asks together because it looks efficient",
          body: "What looks simpler inside the automation tool often sounds messier to the customer. If the same message asks for a public review and a personal referral, the business learns less, routes less clearly, and often gets weaker engagement on both asks.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone review-request setup-mistakes case study here. The support comes from the live review-request cluster, the review-vs-referral comparison, and the published CRM case study already on the site:",
      studies: [
        {
          industry: "Existing review-request cluster",
          headline: "The live parent, setup-help, cost, ROI, and DIY pages already define the surrounding review decision clearly",
          body: "That cluster makes the remaining exact buyer-intent page viable: the pre-launch mistakes layer that causes early asks, weak suppression, complaint-routing failures, and review-vs-referral overlap. This page isolates failure modes instead of rehashing scope, pricing, payback, or buy-vs-build framing.",
          link: "/review-request-automation-for-service-businesses",
        },
        {
          industry: "Post-job decision proof",
          headline: "The review-vs-referral comparison already proves why public-proof asks and private advocacy asks need separate timing and ownership",
          body: "That page is not about mistakes specifically, but it is the honest adjacent proof for one of the biggest launch failures here: collapsing review and referral asks into one workflow because it looked convenient.",
          link: "/review-request-vs-referral-request-for-service-businesses",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "The WheelsFeels CRM case study proves why state, routing, and next-step ownership matter after a customer milestone changes",
          body: "Different exact workflow, same operational lesson. The published CRM case study shows that valuable follow-through only becomes useful when the business can trust stage ownership, reply visibility, and human handoff after a contact re-engages.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Review request automation for service businesses", href: "/review-request-automation-for-service-businesses" },
        { label: "Review request setup help", href: "/review-request-automation-setup-for-service-businesses" },
        { label: "Review request setup vs. DIY", href: "/review-request-automation-setup-vs-diy-small-business" },
        { label: "Review request automation cost", href: "/review-request-automation-cost-small-business" },
        { label: "Review request automation ROI", href: "/review-request-automation-roi-small-business" },
        { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
        { label: "Referral request setup mistakes", href: "/referral-request-setup-mistakes-small-business" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What are the most common review-request setup mistakes for a small business?",
      answer:
        "The biggest ones are unreliable completed-job triggers, generic timing for every service type, weak suppression for unresolved issues, complaint replies sharing the public-ask lane, and bundling review asks with referral asks in the same post-job workflow.",
    },
    {
      question: "How do I avoid a messy review-request launch?",
      answer:
        "Start by defining one trustworthy completion trigger, map ownership for each kind of reply, separate review asks from referral asks, write suppression rules before polishing the message sequence, and make sure the CRM or inbox clearly shows the current owner and last customer state before the workflow goes live.",
    },
    {
      question: "How is this different from the review-request setup-help page?",
      answer:
        "The setup-help page explains what a proper implementation should include and when setup help is worth paying for. This mistakes page stays narrower: the exact pre-launch failures that usually make review automation feel awkward or untrustworthy from the start.",
    },
    {
      question: "How is this different from the cost or ROI pages?",
      answer:
        "The cost and ROI pages are about budget and payback. This mistakes page sits earlier in the decision chain and focuses on the design failures that create early asks, weak suppression, messy complaint routing, and avoidable cleanup before the economics matter.",
    },
    {
      question: "Should I fix review-request setup mistakes myself or hire help before launch?",
      answer:
        "DIY can be fine when the workflow is narrow, completed-job volume is modest, and you are comfortable testing triggers, suppression, and routing yourself. If wrong timing or bad complaint handling would damage trust quickly, expert help usually costs less than a weak first launch.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners trying to avoid the setup mistakes that quietly turn review follow-through into another office headache",
  ctaHeading:
    "Want a cleaner review-request launch before setup mistakes start creating awkward post-job follow-through?",
  ctaText:
    "Book a 30-minute call. We will look at your completed-job trigger, timing rules, complaint-routing boundaries, review-vs-referral separation, and CRM visibility, then help you scope the narrowest trustworthy rollout first.",
  ctaSubtext:
    "Useful if you are still in setup mode and want review automation to feel credible from week one instead of becoming cleanup work later.",
  relatedLinks: [
    { label: "Review request automation for service businesses", href: "/review-request-automation-for-service-businesses" },
    { label: "Review request setup help", href: "/review-request-automation-setup-for-service-businesses" },
    { label: "Review request setup vs. DIY", href: "/review-request-automation-setup-vs-diy-small-business" },
    { label: "Review request automation cost", href: "/review-request-automation-cost-small-business" },
    { label: "Review request automation ROI", href: "/review-request-automation-roi-small-business" },
    { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
    { label: "Referral request setup mistakes", href: "/referral-request-setup-mistakes-small-business" },
    { label: "Estimate follow-up setup help", href: "/estimate-follow-up-setup-for-service-businesses" },
    { label: "Client reactivation setup help", href: "/client-reactivation-setup-for-service-businesses" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
