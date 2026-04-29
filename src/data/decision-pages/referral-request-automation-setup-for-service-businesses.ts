import {
  Settings,
  Workflow,
  CheckCircle2,
  XCircle,
  ClipboardList,
  Clock,
  Route,
  ShieldCheck,
  Wrench,
  MessageSquare,
  AlertTriangle,
  Users,
  ArrowRightLeft,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "referral-request-automation-setup-for-service-businesses",
  metaTitle:
    "Referral Request Automation Setup for Service Businesses — What a Clean First Build Should Include | Dmytro AI",
  metaDescription:
    "What goes into referral request automation setup for a service business? Completed-job triggers, timing rules, intro routing, CRM visibility, ownership, separation from review asks, and when setup help is worth paying for.",
  badgeText: "Referral Workflow Setup",
  badgeIcon: Settings,
  h1: "Referral Request Automation Setup for Service Businesses",
  heroIntro:
    "Referral request automation sounds simple until the first ask goes out before the job actually feels finished, a customer with an unresolved issue gets asked to introduce a friend, or a warm referral reply lands with no owner and no next-step context. That is why the real work is not the message itself. It is the setup. A good referral-request build needs a trustworthy completed-job trigger, timing that matches the service type, clear rules for who should get a referral ask versus who should get a softer check-in first, a clean way to keep referral asks separate from review asks, and fast routing when somebody names a real person or another project. This page is about that implementation layer. It is not the broader case for referral automation, and it is not the review-versus-referral decision page. It is the narrower question a service business asks after deciding the workflow matters: what should a clean first build actually include, and when is setup help worth paying for?",
  heroSubtext:
    "Below: what referral-request setup actually covers, the timing and routing decisions that matter most, the launch mistakes that usually create awkward post-job follow-through, and how to tell whether your business needs focused setup help or a lighter manual path first.",
  sections: [
    {
      type: "cards",
      title: "What referral-request setup actually covers",
      subtitle:
        "A useful build is not just “send a text after the job.” These are the setup layers that decide whether referral follow-through feels natural or forced:",
      items: [
        {
          icon: Workflow,
          title: "A trustworthy completed-job trigger",
          body: "The workflow needs a stable signal that the work is actually done: job closed, invoice settled, service confirmed complete, or another reliable closeout event. If that trigger is messy, the referral ask lands before the customer feels finished.",
        },
        {
          icon: Clock,
          title: "Timing rules that match how the service lands",
          body: "A quick repair, a recurring visit, and a larger install do not all create referral readiness on the same timeline. Setup decides whether the ask should happen immediately, after a short check-in, or only after the office confirms the experience settled cleanly.",
        },
        {
          icon: MessageSquare,
          title: "A referral path that stays separate from the review path",
          body: "Referral requests and review requests should not share one generic post-job message. Setup defines when the public-proof ask belongs on the review path and when a personal-introduction ask belongs on the referral path so the business is not stacking both into one awkward follow-up.",
        },
        {
          icon: Users,
          title: "Referral-ready message framing",
          body: "A good build reflects how introductions actually happen in service businesses: neighbors, friends, family, a second property, another location, or a project the customer already mentioned. Setup should shape the ask around believable referral types instead of generic “send us referrals” copy.",
        },
        {
          icon: ArrowRightLeft,
          title: "Warm-reply routing and human ownership",
          body: "If a customer names a friend, asks for another quote, or offers to connect someone directly, the owner or team should inherit that context quickly. Setup decides where that reply lands, what metadata gets passed through, and who owns the next move.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What should be configured before launch",
      subtitle:
        "These are the decisions that prevent the common first-week failures in post-job referral workflows:",
      items: [
        {
          icon: ClipboardList,
          title: "Trigger filters and exclusions",
          body: "Define which completed jobs should not go straight into a referral ask: unresolved callbacks, open billing questions, warranty issues, repeat visits for the same problem, or customers already inside a service-recovery conversation. Exclusions matter more than the message copy.",
        },
        {
          icon: ShieldCheck,
          title: "Issue-detection and stop rules",
          body: "If the customer replies with a complaint, confusion, or a loose end, the workflow should stop asking for introductions and route the conversation back to a human immediately. Setup should make that rule explicit before launch instead of improvising after the first awkward reply.",
        },
        {
          icon: Wrench,
          title: "CRM fields, contact history, and duplicate handling",
          body: "The system should log when the referral ask went out, whether the customer replied, whether they named another person or project, and whether the opportunity turned into an estimate or booked job. Without that visibility, owners cannot tell which completed work is producing advocacy and which is not.",
        },
        {
          icon: Route,
          title: "Human handoff rules once somebody shows intent",
          body: "Referral automation should not try to automate the whole relationship. Setup should define exactly when a warm reply moves to the office, the owner, or a sales/admin teammate, and what context that person needs so the introduction does not go stale.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When setup help is worth paying for — and when it is not",
      subtitle:
        "Professional setup makes sense when the operational risk of getting the workflow wrong is higher than the cost of the build:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth paying for setup help",
          variant: "green",
          items: [
            "Completed-job handoff is messy enough that nobody fully trusts when a referral ask should fire",
            "Different service types need different timing windows, suppression rules, or ownership after the ask",
            "You want review requests and referral requests kept cleanly separate instead of bundled together",
            "Warm referral replies need CRM logging, estimate routing, or office follow-through instead of landing in a generic inbox",
            "The business already gets some word-of-mouth, but there is no disciplined system turning finished jobs into deliberate introductions",
          ],
        },
        {
          icon: XCircle,
          heading: "A lighter path is probably enough",
          variant: "neutral",
          items: [
            "Completed-job volume is still low enough that manual referral asks happen consistently without much effort",
            "The bigger leak is still missed calls, lead response, scheduling, or quote follow-up before the work even happens",
            "Nobody can reliably tell when a job is actually complete, so the real problem is process discipline rather than referral automation",
            "There is no clear owner who could follow up quickly when a customer names a real opportunity",
            "Service quality or closeout consistency is still shaky enough that more post-job asks would amplify the wrong problem first",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Common setup mistakes that break referral-request workflows",
      subtitle:
        "These are the practical errors that make referral automation feel robotic, awkward, or low-trust:",
      blocks: [
        {
          heading: "Launching without a believable closeout signal",
          body: "If technicians, office staff, or project managers all mark “done” differently, the workflow asks for referrals before the customer sees the experience as complete. The first setup job is often cleaning up the closeout event, not polishing the ask text.",
        },
        {
          heading: "Treating every completed service the same",
          body: "A small same-day visit, a recurring service stop, and a larger project do not all create the same referral moment. Setup should match the real service experience instead of forcing one timing rule because the automation tool made it convenient.",
        },
        {
          heading: "Asking for a referral before unresolved issues are cleared",
          body: "Nothing makes a business sound more tone-deaf than asking for an introduction while the customer still has a complaint or unanswered question. Referral automation should assume edge cases exist and route them back inside instead of pushing straight ahead.",
        },
        {
          heading: "Bundling review and referral asks into one message",
          body: "A customer who just finished a job should not get a crowded message asking for a public review, a personal referral, and another marketing action all at once. Setup should keep the path narrow so the next action is obvious and the reply is easier to route.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "There is no dedicated published setup case study for this exact workflow. The honest support comes from the live referral/review cluster pages and the published case studies that prove milestone-based routing and human ownership matter once the relationship changes state.",
      studies: [
        {
          industry: "Referral-request parent page",
          headline: "The service-business referral page already defines the operational workflow this setup page narrows",
          body: "That page explains what the referral workflow should accomplish after the job is done: a believable ask, clean separation from review requests, and fast routing of warm replies. This setup page stays narrower by focusing on implementation scope before launch.",
          link: "/referral-request-automation-for-service-businesses",
        },
        {
          industry: "Post-job decision proof",
          headline: "The review-vs-referral comparison already proves why public-proof asks and private-advocacy asks need separate workflow ownership",
          body: "That comparison is not a setup page, but it clearly shows why review timing, referral timing, and reply routing should not be collapsed into one generic post-job automation. Setup quality is what keeps those paths clean in production.",
          link: "/review-request-vs-referral-request-for-service-businesses",
        },
        {
          industry: "Published operational proof",
          headline: "The e-commerce CRM case study proves the system discipline this page depends on: detect the milestone, route the reply, and give a human the context needed to act fast",
          body: "That case study is not referral-specific, but it is direct proof that valuable follow-through gets lost when ownership after a status change is weak. Referral-request setup depends on the same mechanics: clean stage detection, fast routing, and human context when the contact re-engages.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
        { label: "Referral request automation cost for small business", href: "/referral-request-automation-cost-small-business" },
    { label: "Referral request automation ROI for small business", href: "/referral-request-automation-roi-small-business" },
        { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
        { label: "Review request automation setup", href: "/review-request-automation-setup-for-service-businesses" },
        { label: "Referral automation for painting contractors", href: "/referral-request-automation-for-painting-contractors" },
        { label: "Referral automation for insurance agencies", href: "/referral-request-automation-for-insurance-agencies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does referral-request automation setup involve for a service business?",
      answer:
        "It usually includes defining a trustworthy completed-job trigger, deciding which service types need different timing, separating referral asks from review asks, setting stop rules for open issues, routing warm replies to a human fast, and logging the workflow cleanly in the CRM.",
    },
    {
      question: "How is this different from the referral-request parent page?",
      answer:
        "The parent page explains what referral-request automation does and when it fits. This page is specifically about implementation scope: what has to be configured before launch, what usually breaks, and when setup help is worth paying for versus keeping the process manual.",
    },
    {
      question: "How is this different from the review-vs-referral comparison page?",
      answer:
        "The comparison page helps a business decide which post-job workflow should come first. This page assumes the referral workflow is already the chosen direction and focuses on what needs to be set up so the build runs cleanly in production.",
    },
    {
      question: "When is setup help worth paying for?",
      answer:
        "Usually when completion signals are messy, service types need different timing, review and referral asks should stay separate, warm referral replies need routing/CRM ownership, or nobody internal has time to define the stop rules and handoff logic before launch.",
    },
    {
      question: "What is the most common setup mistake?",
      answer:
        "Sending referral asks from an unreliable completion trigger. If the system cannot confidently tell when the work is truly done — and whether any issue is still open — the workflow asks too early and creates awkward follow-through the team then has to clean up manually.",
    },
  ],
  faqSubtitle:
    "Practical questions from service business owners evaluating referral-request implementation",
  ctaHeading: "Want referral-request automation set up cleanly the first time?",
  ctaText:
    "Book a 30-minute call. We will look at how completed jobs get marked done today, where referral timing breaks, how warm replies should route, and scope the narrowest build that improves post-job advocacy without stacking extra asks into the same message.",
  ctaSubtext:
    "No generic word-of-mouth growth pitch. Just a practical setup conversation about your completed-job handoff, timing, routing, and workflow ownership.",
  relatedLinks: [
    { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
    { label: "Referral request setup vs. DIY", href: "/referral-request-automation-setup-vs-diy-small-business" },
    { label: "Referral request automation cost for small business", href: "/referral-request-automation-cost-small-business" },
    { label: "Referral request automation ROI for small business", href: "/referral-request-automation-roi-small-business" },
    { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
    { label: "Review request automation setup", href: "/review-request-automation-setup-for-service-businesses" },
    { label: "Client reactivation setup for service businesses", href: "/client-reactivation-setup-for-service-businesses" },
    { label: "Estimate follow-up setup for service businesses", href: "/estimate-follow-up-setup-for-service-businesses" },
    { label: "Missed call text-back setup for service businesses", href: "/missed-call-text-back-setup-for-service-businesses" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
