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
  Star,
  Users,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "review-request-automation-setup-for-service-businesses",
  metaTitle:
    "Review Request Automation Setup for Service Businesses — What a Clean First Build Should Include | Dmytro AI",
  metaDescription:
    "What goes into review-request automation setup for a service business? Completed-job triggers, timing rules, complaint routing, CRM mapping, team handoff, launch mistakes, and when setup help is worth paying for.",
  badgeText: "Review Workflow Setup",
  badgeIcon: Settings,
  h1: "Review Request Automation Setup for Service Businesses",
  heroIntro:
    "Review-request automation sounds easy until the first live message goes out too early, the wrong customer gets asked, or an unhappy reply lands in the same path as a happy review ask. That is why the real work is not the review link. It is the setup. A good review-request build needs a reliable completed-job trigger, timing that matches the service type, a clean way to route complaints or open issues back to a human, CRM visibility into which jobs have already been asked, and clear rules for who owns the next step when someone replies. This page is about that implementation layer. It is not the broader case for review automation, and it is not a comparison between reviews and referrals. It is the narrower question a service business asks after deciding the workflow matters: what should a clean first build actually include, and when is setup help worth paying for?",
  heroSubtext:
    "Below: what review-request setup actually covers, the routing and timing decisions that matter most, the launch mistakes that usually create bad follow-through, and how to tell whether your business needs focused setup help or a simpler manual path first.",
  sections: [
    {
      type: "cards",
      title: "What review-request setup actually covers",
      subtitle:
        "A useful build is not just “send a text after the job.” These are the setup layers that decide whether the workflow strengthens trust or creates noise:",
      items: [
        {
          icon: Workflow,
          title: "A real completed-job trigger",
          body: "The workflow needs a stable signal that the work is actually finished or the visit is truly complete. Depending on the business, that may be a job status update, invoice close, technician closeout, delivery confirmation, or office handoff. If the trigger is vague, review asks go out before the customer feels done.",
        },
        {
          icon: Clock,
          title: "Timing rules that match the service type",
          body: "A same-day repair, a recurring cleaning visit, and a larger project do not feel complete on the same timeline. Setup decides whether the ask should happen immediately, after a short check-in, or only after the team confirms there was no open issue.",
        },
        {
          icon: MessageSquare,
          title: "Reply routing before the public ask",
          body: "Some businesses need a soft satisfaction check before the review link. Others can go straight to the ask. Setup defines whether unhappy replies, billing questions, warranty concerns, or “please call me” messages should stop automation and route to a human immediately.",
        },
        {
          icon: Users,
          title: "Field-to-office handoff and ownership",
          body: "The office needs enough context to know what was done, whether the customer seemed satisfied, and whether anything was flagged on-site. Setup should make that handoff explicit so the review workflow is not guessing from a bare status change.",
        },
        {
          icon: Star,
          title: "Review platform and link strategy",
          body: "Businesses often need different review destinations or ask paths depending on service line, location, or channel. Setup decides where the customer should land, how the link is delivered, and how to avoid stacking public-review, referral, and support asks into one awkward message.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What should be configured before launch",
      subtitle:
        "These are the decisions that prevent the common first-week failures in post-job reputation workflows:",
      items: [
        {
          icon: ClipboardList,
          title: "Trigger filtering and exclusions",
          body: "Define which completed jobs should not immediately enter the review path: open callbacks, unresolved billing, warranty issues, repeat visits for the same problem, or customers already inside a recovery conversation. Exclusions matter more than clever copy.",
        },
        {
          icon: ShieldCheck,
          title: "Complaint and dissatisfaction stop rules",
          body: "If the customer replies with a complaint, confusion, or correction, the workflow should stop asking for a public review and route the conversation back to the team fast. Setup should make those stop rules explicit before launch instead of improvising after the first bad reply.",
        },
        {
          icon: Wrench,
          title: "CRM fields, contact history, and duplicate handling",
          body: "The system should log when the ask was sent, whether the customer replied, whether the review link was clicked or acknowledged, and whether a follow-up issue was opened. Without that visibility, owners cannot tell which completed jobs are producing trust signals and which are slipping away.",
        },
        {
          icon: Route,
          title: "Review-vs-referral separation",
          body: "If the business also wants referrals, setup should keep the workflows separate. The review path should not automatically tack on a second ask for introductions. Timing, routing, and ownership are cleaner when the public-proof ask and the private-advocacy ask are treated as different workflows.",
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
            "Completed-job handoff is messy enough that nobody fully trusts when a review ask should fire",
            "You need complaint routing, soft satisfaction checks, or multiple review destinations instead of one simple post-job text",
            "Different service types need different timing windows and suppression rules",
            "The business already has enough volume that inconsistent review timing materially affects local-trust growth",
            "No one internal has time to map the trigger logic, stop rules, CRM fields, and live-reply ownership before launch",
          ],
        },
        {
          icon: XCircle,
          heading: "A lighter path is probably enough",
          variant: "neutral",
          items: [
            "Completed-job volume is still low enough that a manual review ask happens consistently without much effort",
            "The bigger leak is still missed calls, lead response, or booking communication before the work even happens",
            "There is no stable completion signal yet, so the real problem is basic process discipline rather than automation setup",
            "The business does not need routing, CRM logging, or different timing by service type — just a simple manual closeout checklist",
            "Service recovery is inconsistent enough that more review asks would amplify the wrong problem first",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Common setup mistakes that break review-request workflows",
      subtitle:
        "These are the practical errors that make review automation feel robotic, awkward, or unsafe:",
      blocks: [
        {
          heading: "Launching without a trustworthy “done” signal",
          body: "If technicians, office staff, or project managers all mark completion differently, the workflow sends asks before the customer sees the job as finished. The first setup job is often standardizing the closeout event, not tweaking message copy.",
        },
        {
          heading: "Treating every completed service the same",
          body: "A quick handyman visit, a recurring cleaning appointment, and a larger install do not all deserve the same timing. Setup should match the actual service experience instead of forcing a one-size-fits-all review ask because the automation tool made that easier.",
        },
        {
          heading: "Pushing the review ask before unresolved issues are cleared",
          body: "Nothing burns trust faster than asking for a public review while the customer still has a complaint or unanswered question. Setup should assume unresolved replies exist and route them back inside without the customer needing to fight the workflow.",
        },
        {
          heading: "Bundling review and referral asks into one message",
          body: "A customer who just finished a job should not receive a crowded message asking for a public review, a referral, and a second service inquiry all at once. Setup should keep the path narrow so the next action is obvious and the reply is easier to route.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "There is no dedicated published setup case study for this exact workflow. The honest support comes from the live review-request cluster, the review-vs-referral decision page, and the published case studies that prove milestone-based routing and human handoff matter once a service moment is finished.",
      studies: [
        {
          industry: "Review-request parent page",
          headline: "The parent review-request page already defines the operational workflow this setup page narrows",
          body: "That page explains what the review workflow should accomplish once the work is done: timing, unhappy-reply routing, field-to-office handoff, and turning completed jobs into cleaner reputation signals. This setup page stays narrower by focusing on implementation scope before launch.",
          link: "/review-request-automation-for-service-businesses",
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
          body: "That case study is not review-specific, but it is direct proof that valuable follow-through gets lost when ownership after a status change is weak. Review-request setup depends on the same mechanics: clean stage detection, fast routing, and human context when the contact re-engages.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Review request automation for service businesses", href: "/review-request-automation-for-service-businesses" },
        { label: "Review request setup mistakes", href: "/review-request-automation-setup-mistakes-small-business" },
        { label: "Review request setup vs. DIY", href: "/review-request-automation-setup-vs-diy-small-business" },
        { label: "Review request automation ROI", href: "/review-request-automation-roi-small-business" },
        { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
        { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
        { label: "Review automation for restaurants", href: "/review-request-automation-for-restaurants" },
        { label: "Review automation for HVAC companies", href: "/review-request-automation-for-hvac-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does review-request automation setup involve for a service business?",
      answer:
        "It usually includes defining a trustworthy completed-job trigger, setting timing rules by service type, deciding whether a soft satisfaction check should happen before the public ask, routing unhappy replies back to a human, logging the workflow in the CRM, and separating review asks from referral or other post-job follow-up paths.",
    },
    {
      question: "How is this different from the review-request parent page?",
      answer:
        "The parent page explains what review-request automation does and when it fits. This page is specifically about implementation scope: what has to be configured before launch, what usually breaks, and when setup help is worth paying for versus keeping the process manual.",
    },
    {
      question: "How is this different from the review-vs-referral comparison page?",
      answer:
        "The comparison page helps a business decide which post-job workflow should come first. This page assumes the review workflow is already the chosen direction and focuses on what needs to be set up so the build runs cleanly in production.",
    },
    {
      question: "When is setup help worth paying for?",
      answer:
        "Usually when completion signals are messy, different service types need different timing, complaint routing matters, the business wants review and referral workflows kept separate, or nobody internal has time to define the stop rules, CRM fields, and reply ownership before launch.",
    },
    {
      question: "What is the most common setup mistake?",
      answer:
        "Sending review asks from an unreliable completion trigger. If the system cannot confidently tell when the work is actually finished — and whether any issue is still open — the workflow sends asks too early and creates awkward follow-through the team then has to clean up manually.",
    },
  ],
  faqSubtitle:
    "Practical questions from service business owners evaluating review-request implementation",
  ctaHeading: "Want review-request automation set up cleanly the first time?",
  ctaText:
    "Book a 30-minute call. We will look at how completed jobs get marked done today, where review timing breaks, how complaint replies should route, and scope the narrowest build that improves reputation follow-through without stacking extra post-job asks into the same message.",
  ctaSubtext:
    "No generic reputation-management pitch. Just a practical setup conversation about your completed-job handoff, timing, and workflow ownership.",
  relatedLinks: [
    { label: "Review request automation for service businesses", href: "/review-request-automation-for-service-businesses" },
    { label: "Review request launch checklist", href: "/review-request-automation-launch-checklist-small-business" },
    { label: "Review request setup mistakes", href: "/review-request-automation-setup-mistakes-small-business" },
    { label: "Review request setup vs. DIY", href: "/review-request-automation-setup-vs-diy-small-business" },
    { label: "Review request automation cost", href: "/review-request-automation-cost-small-business" },
    { label: "Review request automation ROI", href: "/review-request-automation-roi-small-business" },
    { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
    { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
    { label: "Missed call text-back setup for service businesses", href: "/missed-call-text-back-setup-for-service-businesses" },
    { label: "Estimate follow-up setup for service businesses", href: "/estimate-follow-up-setup-for-service-businesses" },
    { label: "Client reactivation setup for service businesses", href: "/client-reactivation-setup-for-service-businesses" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
