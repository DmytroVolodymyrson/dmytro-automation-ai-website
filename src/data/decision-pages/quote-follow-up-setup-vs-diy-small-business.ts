import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  DollarSign,
  FileText,
  MessageSquare,
  Scale,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "quote-follow-up-setup-vs-diy-small-business",
  metaTitle:
    "Quote Follow-Up Setup vs. DIY for Small Business — When to Hire Help | Dmytro AI",
  metaDescription:
    "Should a small business DIY quote follow-up setup or hire expert help? Practical guide to owner time, quote-stage workflow risk, CRM routing, stale-quote logic, and when setup help is cheaper than another month of DIY delay.",
  badgeText: "Setup Buy-vs-Build",
  badgeIcon: Scale,
  h1: "Quote Follow-Up Setup: Hire Help or DIY?",
  heroIntro:
    "DIY can be completely reasonable when quote follow-up is still a narrow experiment: one clean quote-sent trigger, one or two reminders, one owner, and a low enough quote volume that mistakes will not quietly bleed real revenue. Hiring help usually becomes the better move once sent quotes matter operationally, multiple people share ownership after pricing goes out, CRM stages need to stay clean, and the workflow has to know when to stop, escalate, or route a live reply back to the right human fast. The real decision is not whether DIY is possible. It is whether this quote-stage workflow is important enough that you want it live, trusted, and revenue-safe without spending nights debugging triggers, stale-quote rules, revision-request handoff, and reply routing.",
  heroSubtext:
    "Below: when DIY quote-follow-up setup is still a smart call, when expert help usually pays for itself, what each path actually costs, and how to tell whether you need a tutorial, a bounded setup engagement, or a narrower quote workflow first.",
  sections: [
    {
      type: "cards",
      title: "What this decision is really about",
      subtitle:
        "Most owners are not choosing between free and expensive. They are choosing which kind of cost, delay, and workflow risk they want to carry:",
      items: [
        {
          icon: DollarSign,
          title: "DIY lowers the invoice, not always the total cost",
          body: "Doing the setup yourself can reduce cash spend, but it shifts the cost into owner or staff time: cleaning the quote-sent trigger, defining stale-quote thresholds, mapping owners in the CRM, testing stop rules, and fixing whatever breaks after a live buyer replies with a revision request instead of a clean yes or no.",
        },
        {
          icon: Workflow,
          title: "Quote-follow-up setup is workflow design, not just reminder copy",
          body: "The hard part is not writing a reminder text. The hard part is deciding what happens when a quote is marked sent from the wrong stage, when a buyer asks for a revised scope, when an office manager should own the reply instead of the salesperson, and when an aging quote needs a different escalation path instead of the same generic nudge.",
        },
        {
          icon: Wrench,
          title: "Hiring help makes sense when quote-stage drift is already costing deals",
          body: "If sent quotes already go cold because follow-up is inconsistent, setup help is often cheaper than another month of DIY delay. You are not paying for software buttons. You are paying to close a real quote-stage leak before more winnable opportunities disappear after pricing goes out.",
        },
      ],
    },
    {
      type: "table",
      title: "DIY quote-follow-up setup vs. hiring expert help",
      subtitle:
        "This is the practical trade-off for a small business that already believes quote-stage follow-up probably matters:",
      headers: ["DIY setup", "Hire setup help"],
      rows: [
        {
          label: "Best for",
          values: [
            "One narrow sent-quote workflow, lower quote volume, owner-led learning, or a prototype before a wider rollout",
            "Revenue-critical quote recovery, multiple owners after pricing, CRM routing, stale-quote logic, or messy inherited follow-up",
          ],
        },
        {
          label: "Typical cash cost",
          values: [
            "Lower upfront spend, plus your own time and tool cost",
            "Often $1K-$4K for a bounded small-business quote-stage workflow depending on channels, CRM cleanup, and edge-case depth",
          ],
        },
        {
          label: "Time to a trustworthy launch",
          values: [
            "Several evenings to several weeks depending on trigger quality, routing logic, and how disciplined your testing is",
            "Often 5-15 business days for a focused workflow with stop rules, stale-quote logic, and documentation",
          ],
        },
        {
          label: "Biggest risk",
          values: [
            "A workflow that sends reminders but misroutes replies, keeps nudging after a quote is under revision, or leaves the CRM too messy to trust",
            "Paying for complexity your business does not actually need yet",
          ],
        },
        {
          label: "What success should look like",
          values: [
            "A workflow you understand because you built it and are willing to maintain",
            "A production-ready quote-follow-up system the team trusts to trigger, route, escalate, and stop correctly without constant cleanup",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When DIY is a strong fit — and when hiring help is smarter",
      subtitle:
        "DIY can be completely reasonable for the right scope. It becomes expensive when the quote-stage workflow matters more than the learning experience:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "DIY can be a good fit",
          variant: "green",
          items: [
            "You are setting up one narrow quote-recovery path with clear success criteria",
            "Quote volume is low enough that a temporary mistake will not cost meaningful revenue",
            "You mainly need one disciplined reminder layer after pricing goes out before expanding into deeper stale-quote logic",
            "You are comfortable owning CRM field mapping, stop rules, and sequence changes after launch",
            "You want a prototype first so you can prove the workflow is worth hardening later",
          ],
        },
        {
          icon: XCircle,
          heading: "Hiring help is usually smarter",
          variant: "neutral",
          items: [
            "Sent quotes already go cold because ownership and follow-up discipline are inconsistent",
            "The workflow spans email, SMS, CRM stages, and multiple people who need different routing rules",
            "Revision requests, financing questions, or scope objections need to stop automation and get back to a human fast",
            "No one on the team wants to own debugging stale-quote logic, reply routing, and edge cases after hours",
            "A few recovered deals per month would easily justify paying to get this right now",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where small-business DIY quote-follow-up projects usually start breaking down",
      subtitle:
        "The issue is rarely the first reminder. The issue is everything around it once real sent quotes and real handoff show up:",
      blocks: [
        {
          heading: "The sent-quote trigger sounds simple until the team uses it inconsistently",
          body: "A lot of DIY builds assume there is one clean moment when a quote is officially out. In reality, some people send pricing from email, others from a proposal tool, and some skip the CRM stage update entirely. If that trigger is not reliable, the workflow starts at the wrong time or misses good opportunities completely.",
        },
        {
          heading: "Revision requests and objections do not fit inside a generic sequence",
          body: "Once a prospect asks for a scope change, another option, or clarification on what is included, they are no longer in a standard reminder flow. DIY gets expensive when the workflow cannot tell the difference between a quiet quote and an active negotiation that needs a human now.",
        },
        {
          heading: "CRM ownership and stale-quote visibility stay fuzzy",
          body: "A quote only counts as recovered if the right person sees it with the right context. DIY starts getting expensive when reminders go out but nobody can tell which sent quotes are still alive, who owns the next move, or which replies need immediate follow-up.",
        },
      ],
    },
    {
      type: "considerations",
      title: "How to make the right call before you burn a month on setup",
      subtitle:
        "A few practical checks usually make the answer obvious:",
      items: [
        {
          icon: Clock,
          title: "Put a real value on owner time",
          body: "If your time is worth $100-$200 an hour and the setup will realistically take 10-25 hours to scope, build, test, and clean up, DIY is not automatically cheap. It may still be worth it for learning, but not because it is free.",
        },
        {
          icon: MessageSquare,
          title: "Start with one quote stage, not every pricing path at once",
          body: "The safest rollout is one bounded use case: one quote source, one reminder path, one escalation rule, one ownership model. If you are trying to automate every quote type, every objection pattern, and every owner handoff at once, the scope is probably already too wide for a clean DIY first pass.",
        },
        {
          icon: AlertTriangle,
          title: "Separate prototype value from production value",
          body: "DIY is great for proving that quote-stage follow-up could help. Hiring help is usually better once you know the workflow should exist and now need it to run reliably with real sent quotes, real stale thresholds, and real downstream accountability.",
        },
        {
          icon: ShieldCheck,
          title: "Keep ownership either way",
          body: "Whether you build it yourself or hire it out, your business should own the sending numbers, email domains, CRM access, workflow docs, and sequence logic. Good setup help reduces risk. It should not trap quote recovery inside somebody else's accounts.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is grounded in the live quote-follow-up cluster plus published adjacent proof around CRM follow-up, quote-stage routing, and production workflow cleanup:",
      studies: [
        {
          industry: "Quote-follow-up implementation scope",
          headline: "The setup-help page explains what expert implementation should actually include before quote recovery goes live",
          body: "That page stays on implementation scope: quote-sent triggers, stale thresholds, ownership rules, routing, stop rules, and testing. This page answers the narrower buyer decision that comes one step earlier: keep DIYing, or pay for setup help now?",
          link: "/quote-follow-up-setup-for-service-businesses",
        },
        {
          industry: "Quote-stage economics",
          headline: "The cost and ROI children prove this cluster already supports a narrower buy-vs-build decision page",
          body: "Those pages price the workflow and model payback once quote recovery is working. This page stays distinct by helping a small business decide whether to invest owner time in DIY setup first or pay for bounded implementation help now.",
          link: "/quote-follow-up-cost-small-business",
        },
        {
          industry: "CRM follow-up and handoff",
          headline: "The published CRM case study shows what proper routing and stage ownership protect operationally",
          body: "The vehicle accessories CRM case study is not a quote-follow-up setup build, but it proves the downstream value of clean stages, structured follow-up, and fast handoff once interest returns. That is the operational logic behind paying for setup help when quote recovery becomes revenue-critical.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
        { label: "Quote follow-up setup help", href: "/quote-follow-up-setup-for-service-businesses" },
        { label: "Quote follow-up cost for small business", href: "/quote-follow-up-cost-small-business" },
        { label: "Quote follow-up ROI for small business", href: "/quote-follow-up-roi-small-business" },
        { label: "Estimate follow-up setup for service businesses", href: "/estimate-follow-up-setup-for-service-businesses" },
        { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "When is DIY quote-follow-up setup actually the right move?",
      answer:
        "Usually when the workflow is narrow, quote volume is still manageable, and you mainly want to learn the tools. DIY is strongest when you only need one clear quote-sent trigger, a basic reminder path, and enough internal discipline that a temporary mistake will not cost meaningful revenue or create a messy buyer experience.",
    },
    {
      question: "When should I hire someone to set up quote follow-up instead of doing it myself?",
      answer:
        "Hire help when sent quotes already go cold because ownership and follow-up discipline are inconsistent, the workflow spans multiple channels or CRM stages, or revision requests and objections need reliable human handoff. At that point the cost of delay and cleanup usually outweighs the setup invoice.",
    },
    {
      question: "How is this different from the existing quote follow-up setup page?",
      answer:
        "The setup page explains what good quote-follow-up implementation should include and what has to be configured before launch. This page sits one step earlier in the buying journey and answers the decision itself: keep DIYing, or pay for setup help now?",
    },
    {
      question: "How much does it usually cost to hire help for quote-follow-up setup?",
      answer:
        "A focused small-business quote-follow-up setup often lands around $1K-$2.5K. More complex builds with deeper CRM cleanup, multiple quote types, multi-channel routing, and stale-quote escalation often land around $2.5K-$4K. The real driver is workflow depth and edge-case complexity, not the label alone.",
    },
    {
      question: "Can I prototype the workflow myself and then hire someone later?",
      answer:
        "Yes. That is often the smartest path. DIY can prove the workflow is worth building. Then setup help can harden the trigger logic, stale thresholds, reply routing, and CRM handoff so the system is safe to run in production.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners deciding whether to keep building quote-stage follow-up alone or bring in expert setup help",
  ctaHeading: "Want a clear answer on whether this workflow is worth DIYing?",
  ctaText:
    "Book a 30-minute call. We will look at your quote volume, follow-up gaps, CRM handoff, and owner-time constraints, then tell you whether to keep the first version DIY, scope a bounded setup engagement, or simplify the workflow before spending more.",
  ctaSubtext:
    "No vague pitch. Just a practical call about whether this quote-stage workflow should stay in-house or get implemented properly now.",
  relatedLinks: [
    { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
    { label: "Quote follow-up setup help", href: "/quote-follow-up-setup-for-service-businesses" },
    { label: "Quote follow-up setup mistakes for small business", href: "/quote-follow-up-setup-mistakes-small-business" },
    { label: "Quote follow-up cost for small business", href: "/quote-follow-up-cost-small-business" },
    { label: "Quote follow-up ROI for small business", href: "/quote-follow-up-roi-small-business" },
    { label: "Estimate follow-up setup for service businesses", href: "/estimate-follow-up-setup-for-service-businesses" },
    { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
    { label: "AI lead follow-up setup vs. DIY", href: "/ai-lead-follow-up-setup-vs-diy-small-business" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
