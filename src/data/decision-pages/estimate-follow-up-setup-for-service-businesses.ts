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
  slug: "estimate-follow-up-setup-for-service-businesses",
  metaTitle:
    "Estimate Follow-Up Setup for Service Businesses — What to Configure Before Launch | Dmytro AI",
  metaDescription:
    "What goes into estimate follow-up setup for a service business? Estimate-stage triggers, CRM mapping, stale-estimate thresholds, estimator-to-office handoff, stop rules, reply routing, testing, and when setup help is worth paying for.",
  badgeText: "Estimate Follow-Up Setup",
  badgeIcon: Settings,
  h1: "Estimate Follow-Up Setup for Service Businesses",
  heroIntro:
    "Most estimate follow-up systems do not fail because the reminder copy was weak. They fail because the setup was shallow. The estimate-sent trigger is inconsistent, nobody agreed on what counts as stale, the office cannot tell which estimator owns the next step, replies land in the wrong place, and the workflow goes live before anyone tests what happens when a customer asks for revisions instead of simply saying yes. Estimate follow-up setup for service businesses is the work that prevents that mess. It defines when the workflow should start, what the office and estimator each own, how long an estimate can sit before escalation, which replies should stop automation immediately, and how the CRM should reflect the real state of the opportunity before launch.",
  heroSubtext:
    "Below: what estimate follow-up setup actually includes, what should be configured before the workflow goes live, when setup help is worth paying for, and how this page stays distinct from the parent, cost, ROI, and comparison pages in the same cluster.",
  sections: [
    {
      type: "cards",
      title: "What estimate follow-up setup actually covers",
      subtitle:
        "Setup is not just scheduling a reminder. These are the implementation layers that decide whether estimate recovery feels reliable or sloppy:",
      items: [
        {
          icon: MessageSquare,
          title: "Estimate-stage trigger and message ownership",
          body: "Someone has to define exactly when an estimate is considered sent and ready for follow-up. In some businesses that is the moment a proposal email goes out. In others it is a CRM stage change after the estimator confirms pricing was delivered. If the trigger is vague, the workflow starts too early, too late, or not at all.",
        },
        {
          icon: Route,
          title: "Estimator-to-office handoff rules",
          body: "The workflow has to know who owns the next move. Some replies should route back to the estimator who visited the site. Others belong to office staff who can book the work or answer routine timing questions. Setup defines those ownership lines before the first live reply lands.",
        },
        {
          icon: Workflow,
          title: "Sequence logic and stale-estimate escalation",
          body: "A focused estimate-follow-up setup usually includes stage-based reminders, a stale-estimate threshold, and escalation when the quote has sat untouched too long. That logic should match the real sales cycle of the business instead of copying a generic day-1 / day-3 / day-7 sequence from another industry.",
        },
        {
          icon: ShieldCheck,
          title: "Stop rules, suppression, and edge-case handling",
          body: "If a customer replies, books, asks for a revision, opts out, or says they chose another bid, the workflow should behave differently. Setup covers those stop rules up front so automation does not keep nudging somebody after the estimate is already active, closed, or dead.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What should be configured before launch",
      subtitle:
        "These are the setup decisions that protect estimate recovery from turning into another office headache:",
      items: [
        {
          icon: ClipboardList,
          title: "What counts as an estimate-ready trigger",
          body: "Decide whether the workflow starts when the quote is drafted, when it is actually delivered, or when the customer confirms receipt. Most businesses should trigger from delivered or sent status, not draft status, so reminders do not start before the customer has anything to review.",
        },
        {
          icon: Clock,
          title: "How long an estimate can sit before the workflow changes",
          body: "A roofing estimate, a drain repair quote, and a multi-day painting proposal do not go stale on the same timeline. Setup should define when the sequence shifts from normal reminder to stale-estimate escalation based on the sales cycle and job urgency of the business.",
        },
        {
          icon: Wrench,
          title: "CRM mapping, stage names, and reply visibility",
          body: "Every estimate should land in a clear stage with the right owner, service category, and last-touch date. If the CRM mapping is incomplete, nobody trusts the pipeline and the business cannot tell whether automation is recovering jobs or just creating more noise.",
        },
        {
          icon: AlertTriangle,
          title: "Revision requests and objection routing",
          body: "Customers rarely reply with a clean yes or no. They ask for alternate scopes, timing changes, financing details, or clarification on what the estimate includes. Setup should define which replies stop automation and escalate to a human immediately instead of staying inside a canned sequence.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When setup help is worth paying for — and when it is not",
      subtitle:
        "Professional setup makes sense when bad implementation will cost more than the setup itself:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth paying for setup help",
          variant: "green",
          items: [
            "You already send enough estimates that the office cannot track every open quote manually without things slipping",
            "Estimate ownership is split between field staff and office staff, so handoff rules need to be explicit",
            "The business needs a real stale-estimate threshold, escalation logic, and pipeline visibility instead of a single reminder",
            "Reply routing, CRM stages, and service categories all have to stay accurate for the workflow to be trusted",
            "Nobody internal has time to design the logic, test edge cases, and clean the trigger before launch",
          ],
        },
        {
          icon: XCircle,
          heading: "A lighter path is probably enough",
          variant: "neutral",
          items: [
            "Your main leak is still first response before the estimate stage, not estimate recovery after pricing goes out",
            "You send too few estimates for a more structured workflow to matter yet",
            "The office already follows up consistently and the real issue is win rate, not follow-up discipline",
            "The estimate process is so inconsistent that there is no stable sent-stage trigger to build on yet",
            "A simple manual reminder or calendar-based check-in covers the real gap without deeper setup work",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "The setup mistakes that usually break estimate recovery",
      subtitle:
        "These are the practical gaps that make an estimate-follow-up workflow look ineffective even when the opportunity was real:",
      blocks: [
        {
          heading: "Launching before the estimate-sent stage is clean",
          body: "If estimators mark sent quotes differently, send pricing outside the CRM, or leave the office guessing which estimates are actually live, the automation has nothing stable to trigger from. The first setup job is often cleaning the stage definition, not writing the messages.",
        },
        {
          heading: "Using the same timeline for every estimate type",
          body: "Small repair estimates, large project bids, emergency work, and multi-option proposals move at different speeds. A good setup does not force one stale window onto every job. It matches timing to the actual decision cycle so follow-up feels relevant instead of robotic.",
        },
        {
          heading: "Treating every reply like a simple follow-up success",
          body: "A customer asking for scope changes, alternate options, or another conversation is not the same as a customer saying they are ready to book. Setup should route live negotiation and revision requests back to a human with the estimate context attached instead of pretending every reply is one more step in the automated sequence.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "There is no published cross-industry setup case study for estimate follow-up yet. The honest proof frame comes from the live estimate-follow-up cluster, contractor CRM setup pages, and the published CRM case study already on the site.",
      studies: [
        {
          industry: "Estimate-follow-up cluster",
          headline: "The live parent, cost, ROI, and comparison pages already define the estimate-recovery workflow this setup page narrows",
          body: "Those live pages already explain what estimate follow-up does operationally, what it costs, when it pays back, and how it differs from broader quote follow-up. This page stays narrower by focusing on implementation scope before launch: trigger quality, ownership, stale thresholds, routing, and testing.",
          link: "/estimate-follow-up-automation-for-service-businesses",
        },
        {
          industry: "Contractor CRM setup",
          headline: "The contractor CRM setup pages show why stage design and ownership decisions matter before any workflow goes live",
          body: "Estimate follow-up setup depends on the same implementation discipline: clean stage definitions, consistent ownership, realistic routing, and a workflow the office can trust after launch. That is why adjacent CRM setup proof is more useful here than pretending setup is only a copy problem.",
          link: "/crm-automation-setup-for-contractors",
        },
        {
          industry: "E-commerce / CRM lifecycle",
          headline: "The published CRM case study proves the operational value of clean stages, routed follow-up, and visibility into stale opportunities",
          body: "The WheelsFeels CRM case study is not an estimate-recovery build, but it does prove the mechanics this setup page depends on: reliable stage tracking, automated follow-up, cleaner handoff, and better visibility once a deal stalls or wakes back up.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Estimate follow-up automation for service businesses", href: "/estimate-follow-up-automation-for-service-businesses" },
        { label: "Estimate follow-up cost for small business", href: "/estimate-follow-up-cost-small-business" },
        { label: "Estimate follow-up ROI for small business", href: "/estimate-follow-up-roi-small-business" },
        { label: "Estimate follow-up vs. quote follow-up for service businesses", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
        { label: "CRM automation setup for contractors", href: "/crm-automation-setup-for-contractors" },
        { label: "Case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does estimate follow-up setup involve for a service business?",
      answer:
        "It usually includes defining the estimate-sent trigger, setting sequence timing and stale-estimate thresholds, mapping CRM stages and ownership, deciding how replies and revision requests route, writing stop rules, and testing what happens when a quote becomes active again before the workflow goes live.",
    },
    {
      question: "How is this different from the estimate follow-up parent page?",
      answer:
        "The parent page explains what estimate follow-up automation does and when the workflow fits. This page is specifically about implementation scope: what has to be configured before launch and what breaks when the trigger, ownership, routing, and stop rules are shallow or inconsistent.",
    },
    {
      question: "How is this different from the cost and ROI pages?",
      answer:
        "The cost page is about realistic budget ranges. The ROI page is about payback and recovered estimate value. This page is about build quality: estimate-stage triggers, stale thresholds, estimator-to-office handoff, CRM mapping, stop rules, and reply routing before launch.",
    },
    {
      question: "When is setup help worth paying for?",
      answer:
        "Usually when estimate ownership is split across field and office staff, multiple service types move at different speeds, the CRM needs clean stage mapping, and the business cannot afford to get stale-estimate follow-up wrong. If the real need is just one basic reminder after pricing goes out, a lighter path may be enough.",
    },
    {
      question: "What is the most common setup mistake?",
      answer:
        "Launching before the estimate-sent stage is reliable. If nobody can clearly tell when an estimate is truly out, who owns the next move, or what should happen when a customer asks for revisions, the workflow creates confusion faster instead of recovering more jobs.",
    },
  ],
  faqSubtitle:
    "Practical questions from service business owners evaluating estimate-follow-up implementation",
  ctaHeading: "Want estimate follow-up set up before more open quotes go stale?",
  ctaText:
    "Book a 30-minute call. We will look at how your business sends estimates today, where ownership breaks between the field and the office, and scope the narrowest setup that gets disciplined estimate recovery live without overbuilding.",
  ctaSubtext:
    "No generic automation demo. Just a practical setup conversation tied to your estimate process, sales cycle, and current pipeline reality.",
  relatedLinks: [
    { label: "Estimate follow-up automation for service businesses", href: "/estimate-follow-up-automation-for-service-businesses" },
    { label: "Estimate follow-up cost for small business", href: "/estimate-follow-up-cost-small-business" },
    { label: "Estimate follow-up ROI for small business", href: "/estimate-follow-up-roi-small-business" },
    { label: "Estimate follow-up vs. quote follow-up for service businesses", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
    { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
    { label: "AI lead follow-up setup for service businesses", href: "/ai-lead-follow-up-setup-for-service-businesses" },
    { label: "Client reactivation setup for service businesses", href: "/client-reactivation-setup-for-service-businesses" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
