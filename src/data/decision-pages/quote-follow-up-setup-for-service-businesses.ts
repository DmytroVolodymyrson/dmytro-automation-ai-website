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
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "quote-follow-up-setup-for-service-businesses",
  metaTitle:
    "Quote Follow-Up Setup for Service Businesses — What to Configure Before Launch | Dmytro AI",
  metaDescription:
    "What goes into quote follow-up setup for a service business? Quote-sent triggers, ownership rules, reply routing, CRM mapping, stop rules, stale-quote thresholds, testing, and when setup help is worth paying for before the workflow goes live.",
  badgeText: "Quote Follow-Up Setup",
  badgeIcon: Settings,
  h1: "Quote Follow-Up Setup for Service Businesses",
  heroIntro:
    "Most quote follow-up workflows do not fail because the reminder text was wrong. They fail because the setup was incomplete. The quote-sent trigger fires inconsistently, nobody defined who owns the next move after pricing goes out, replies land in a shared inbox with no context, the CRM stage does not update when a quote goes stale, and the workflow launches before anyone tests what happens when a prospect asks for a revision instead of saying yes or no. Quote follow-up setup for service businesses is the implementation work that prevents those problems. It defines the trigger, the ownership rules, the stale-quote threshold, the stop conditions, the reply routing, and the CRM mapping that make the workflow trustworthy before it touches a real opportunity.",
  heroSubtext:
    "Below: what quote follow-up setup actually includes, what should be configured before the workflow goes live, when setup help is worth paying for, and how this page stays distinct from the quote-follow-up parent, the estimate-follow-up setup page, and future cost or ROI pages in the same cluster.",
  sections: [
    {
      type: "cards",
      title: "What quote follow-up setup actually covers",
      subtitle:
        "Setup is not just writing reminder messages. These are the implementation layers that decide whether quote recovery runs cleanly or creates more confusion than it solves:",
      items: [
        {
          icon: MessageSquare,
          title: "Quote-sent trigger and stage definition",
          body: "Someone has to define exactly when a quote is considered sent and ready for automated follow-up. In some businesses that is a CRM stage change. In others it is a proposal email or a quoting-tool event. If the trigger is vague or inconsistent, the workflow starts at the wrong time or not at all.",
        },
        {
          icon: Route,
          title: "Ownership rules after pricing goes out",
          body: "The workflow has to know who owns the next step. Some replies should route to the salesperson or producer who prepared the quote. Others belong to office staff who can answer scheduling questions or confirm availability. Setup defines those ownership lines before the first live reply arrives.",
        },
        {
          icon: Workflow,
          title: "Sequence logic and stale-quote escalation",
          body: "A practical quote-follow-up setup includes reminder timing matched to the real decision cycle, a stale-quote threshold when the opportunity has sat too long, and escalation logic that changes the approach instead of repeating the same ask. That logic should reflect how buyers actually decide in the business, not a generic day-1 / day-3 / day-7 template.",
        },
        {
          icon: ShieldCheck,
          title: "Stop rules, suppression, and edge-case handling",
          body: "If a prospect replies, books, asks for a revised scope, opts out, or says they chose another vendor, the workflow should stop or change direction. Setup covers those stop rules up front so automation does not keep nudging someone after the quote is already won, lost, or under active revision.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What should be configured before launch",
      subtitle:
        "These are the setup decisions that protect quote recovery from turning into an office problem instead of an office solution:",
      items: [
        {
          icon: ClipboardList,
          title: "What counts as a quote-ready trigger",
          body: "Decide whether the workflow starts when the quote is drafted, when it is actually delivered, or when the prospect confirms receipt. Most businesses should trigger from the delivered or sent event, not from the draft stage, so reminders do not fire before the prospect has anything to review.",
        },
        {
          icon: Clock,
          title: "How long a quote can sit before the workflow changes",
          body: "A small repair quote, a multi-phase project proposal, and an insurance renewal do not go stale on the same timeline. Setup should define when the sequence shifts from normal reminder to stale-quote escalation based on the deal type and the realistic decision window for the business.",
        },
        {
          icon: Wrench,
          title: "CRM mapping, stage names, and reply visibility",
          body: "Every open quote should land in a clear pipeline stage with the right owner, service category, and last-touch date visible. If the CRM mapping is incomplete, the team cannot tell which quotes are still alive and the workflow creates noise instead of useful follow-through.",
        },
        {
          icon: AlertTriangle,
          title: "Revision requests and objection routing",
          body: "Prospects rarely reply with a clean yes or no. They ask for alternate scopes, different timing, payment options, or clarification on what the quote covers. Setup should define which replies stop automation and escalate to a human immediately instead of staying inside the canned follow-up sequence.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When setup help is worth paying for — and when it is not",
      subtitle:
        "Professional setup makes sense when incomplete implementation will cost more than the setup itself:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth paying for setup help",
          variant: "green",
          items: [
            "You send enough quotes that the team cannot manually track every open opportunity without things slipping through",
            "Quote ownership is shared across salespeople, producers, or office staff, so handoff rules need to be explicit before launch",
            "The business needs a real stale-quote threshold, escalation logic, and pipeline visibility instead of a single generic reminder",
            "Reply routing, CRM stages, and service categories all have to stay accurate for the workflow to be trusted by the team",
            "Nobody internal has time to design the logic, test edge cases, and verify the trigger before the workflow goes live",
          ],
        },
        {
          icon: XCircle,
          heading: "A lighter path is probably enough",
          variant: "neutral",
          items: [
            "Your real leak is still first response before the quote stage, not recovery after pricing goes out",
            "You send too few quotes for a structured follow-up workflow to matter yet",
            "The team already follows up consistently and the real issue is win rate or pricing, not follow-up discipline",
            "The quoting process is too inconsistent to provide a stable sent-stage trigger to build on yet",
            "A simple calendar reminder or manual check-in covers the real gap without deeper automation",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "The setup mistakes that usually break quote recovery",
      subtitle:
        "These are the practical gaps that make a quote-follow-up workflow look broken even when the opportunity was real:",
      blocks: [
        {
          heading: "Launching before the quote-sent stage is clean",
          body: "If different people mark quotes as sent at different points, send pricing outside the CRM, or skip the pipeline entirely for smaller jobs, the automation has nothing stable to trigger from. The first setup job is often cleaning the stage definition, not writing the follow-up messages.",
        },
        {
          heading: "Using the same timeline for every quote type",
          body: "Small service quotes, large project proposals, recurring-contract bids, and emergency-work estimates move at different speeds. A good setup does not force one stale window onto every opportunity. It matches timing to the actual decision cycle so follow-up feels relevant instead of robotic.",
        },
        {
          heading: "Treating every reply like a simple win",
          body: "A prospect asking for scope changes, different timing, or another conversation is not the same as a prospect ready to book. Setup should route live negotiation and revision requests back to the right human with the quote context attached instead of counting every reply as a follow-up success and closing the sequence.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "There is no published cross-industry setup case study for quote follow-up yet. The honest proof frame comes from the live quote-follow-up cluster, the estimate-follow-up setup page, and the published CRM case study already on the site.",
      studies: [
        {
          industry: "Quote-follow-up cluster",
          headline: "The live parent and vertical child pages already define the quote-recovery workflow this setup page narrows",
          body: "Those pages explain what quote follow-up does operationally across service businesses, insurance agencies, cleaning companies, solar companies, and more. This page stays narrower by focusing on implementation scope before launch: trigger quality, ownership, stale thresholds, routing, and testing.",
          link: "/quote-follow-up-automation-for-service-businesses",
        },
        {
          industry: "Estimate-follow-up setup",
          headline: "The estimate-follow-up setup page proves why pre-launch implementation decisions matter for recovery workflows",
          body: "Estimate follow-up setup covers the same category of implementation work — triggers, ownership, stale thresholds, CRM mapping, stop rules — but is scoped to the narrower estimate stage after site visits. This page applies the same setup discipline to the broader quote stage across all service-business contexts.",
          link: "/estimate-follow-up-setup-for-service-businesses",
        },
        {
          industry: "E-commerce / CRM lifecycle",
          headline: "The published CRM case study proves the operational value of clean stages, routed follow-up, and stale-opportunity visibility",
          body: "The WheelsFeels CRM case study is not a quote-recovery build, but it proves the mechanics this setup page depends on: reliable stage tracking, automated follow-up, cleaner handoff, and better visibility once a deal stalls or wakes back up.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
        { label: "Quote follow-up cost for small business", href: "/quote-follow-up-cost-small-business" },
        { label: "Estimate follow-up setup for service businesses", href: "/estimate-follow-up-setup-for-service-businesses" },
        { label: "Estimate follow-up vs. quote follow-up for service businesses", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
        { label: "AI lead follow-up setup for service businesses", href: "/ai-lead-follow-up-setup-for-service-businesses" },
        { label: "CRM automation setup for contractors", href: "/crm-automation-setup-for-contractors" },
        { label: "Case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does quote follow-up setup involve for a service business?",
      answer:
        "It usually includes defining the quote-sent trigger, setting sequence timing and stale-quote thresholds, mapping CRM stages and ownership, deciding how replies and revision requests route, writing stop rules, and testing what happens when a quote becomes active again before the workflow goes live.",
    },
    {
      question: "How is this different from the quote follow-up parent page?",
      answer:
        "The parent page explains what quote follow-up automation does and when the workflow fits. This page is specifically about implementation scope: what has to be configured before launch and what breaks when the trigger, ownership, routing, and stop rules are shallow or inconsistent.",
    },
    {
      question: "How is this different from the estimate follow-up setup page?",
      answer:
        "The estimate-follow-up setup page is scoped to the narrower estimate stage that typically follows a site visit or inspection, with estimator-to-office handoff as a central concern. This page covers the broader quote stage across all service-business contexts, where the quote may come from a salesperson, an office team, a quoting tool, or a proposal workflow that does not depend on a field visit.",
    },
    {
      question: "When is setup help worth paying for?",
      answer:
        "Usually when quote ownership is shared across multiple people, the CRM needs clean stage mapping, stale-quote thresholds need to match different deal types, and the business cannot afford to get reply routing and stop rules wrong. If the real need is just one basic reminder after pricing goes out, a lighter path may be enough.",
    },
    {
      question: "What is the most common setup mistake?",
      answer:
        "Launching before the quote-sent stage is reliable. If nobody can clearly tell when a quote is truly out, who owns the next move, or what should happen when a prospect asks for revisions, the workflow creates confusion instead of recovering more deals.",
    },
  ],
  faqSubtitle:
    "Practical questions from service business owners evaluating quote-follow-up implementation",
  ctaHeading: "Want quote follow-up set up before more sent quotes go cold?",
  ctaText:
    "Book a 30-minute call. We will look at how your business sends quotes today, where ownership breaks after pricing goes out, and scope the narrowest setup that gets disciplined quote recovery live without overbuilding.",
  ctaSubtext:
    "No generic automation demo. Just a practical setup conversation tied to your quoting process, your sales cycle, and your current pipeline reality.",
  relatedLinks: [
    { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
    { label: "Quote follow-up cost for small business", href: "/quote-follow-up-cost-small-business" },
    { label: "Estimate follow-up setup for service businesses", href: "/estimate-follow-up-setup-for-service-businesses" },
    { label: "Estimate follow-up vs. quote follow-up for service businesses", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
    { label: "AI lead follow-up setup for service businesses", href: "/ai-lead-follow-up-setup-for-service-businesses" },
    { label: "Client reactivation setup for service businesses", href: "/client-reactivation-setup-for-service-businesses" },
    { label: "CRM automation setup for contractors", href: "/crm-automation-setup-for-contractors" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
