import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  ClipboardList,
  DollarSign,
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
  slug: "client-onboarding-setup-vs-diy-small-business",
  metaTitle:
    "Client Onboarding Setup vs. DIY for Small Business — When to Hire Help | Dmytro AI",
  metaDescription:
    "Should you set up client onboarding automation yourself or hire expert help? Practical small-business guide to owner time, trigger reliability, intake sequencing, scheduling gates, CRM stage movement, and when setup help is cheaper than DIY delay.",
  badgeText: "Setup Buy-vs-Build",
  badgeIcon: Scale,
  h1: "Client Onboarding Setup: Hire Help or DIY?",
  heroIntro:
    "DIY onboarding setup can work well when the workflow is narrow, client volume is low, and you mainly want to learn the tools. Hiring help usually becomes the smarter move once the build touches real client handoff, multi-step intake sequencing, scheduling gates, CRM stage movement, internal task routing, and stall detection when new clients go quiet. The practical question is not whether you can wire a welcome email yourself. It is whether this onboarding workflow matters enough that you want it live, trusted, and retention-safe without spending nights debugging trigger logic, intake timing, completion gates, and edge cases.",
  heroSubtext:
    "Below: when DIY onboarding setup is still a smart call, when expert help usually pays for itself, what each path really costs, and how to tell whether you need a tutorial, a bounded setup engagement, or a simpler manual process first.",
  sections: [
    {
      type: "cards",
      title: "What this decision is really about",
      subtitle:
        "Most owners are not choosing between free and expensive. They are choosing which kind of cost and risk they want to carry:",
      items: [
        {
          icon: DollarSign,
          title: "DIY lowers the invoice, not always the total cost",
          body: "Doing onboarding setup yourself can reduce cash spend, but it shifts the cost into owner or staff time: mapping deal-won triggers, sequencing welcome messages, building intake handoff with chase logic, gating kickoff scheduling on completion, wiring CRM stage transitions, and testing what breaks when a real new client enters the workflow.",
        },
        {
          icon: Workflow,
          title: "Onboarding setup is workflow design, not just writing welcome emails",
          body: "The hard part is not sending the first message. The hard part is deciding what happens when the client does not fill out intake, when the kickoff booking link fires before documents are submitted, when internal tasks need assignment and deadlines, and when the CRM needs to reflect actual onboarding progress instead of aspirational pipeline status.",
        },
        {
          icon: Wrench,
          title: "Hiring help makes sense when delay is already costing you clients",
          body: "If new clients regularly wait too long after the deal closes, intake follow-up is inconsistent, or the team shows up to kickoff calls without the information they need, setup help is often cheaper than another month of DIY drift. You are not paying for software buttons. You are paying to close a real handoff leak before more clients start their experience with disorganization.",
        },
      ],
    },
    {
      type: "table",
      title: "DIY onboarding setup vs. hiring expert help",
      subtitle:
        "This is the practical trade-off for a small business that already believes onboarding automation could help:",
      headers: ["DIY setup", "Hire setup help"],
      rows: [
        {
          label: "Best for",
          values: [
            "Simple onboarding with one welcome message, one intake form, low client volume, or a prototype before a wider rollout",
            "Revenue-critical first impression, multi-step intake with document collection, scheduling gates, CRM stage movement, or messy inherited onboarding",
          ],
        },
        {
          label: "Typical cash cost",
          values: [
            "Lower upfront spend, plus your own time and software cost",
            "Often $1.5K-$4.5K for a bounded onboarding workflow depending on intake complexity, scheduling gates, and CRM routing depth",
          ],
        },
        {
          label: "Time to a trustworthy launch",
          values: [
            "Several evenings to several weeks depending on trigger reliability, intake steps, and how disciplined your testing is",
            "Often 5-15 business days for a focused workflow with sequencing, completion gates, and documentation",
          ],
        },
        {
          label: "Biggest risk",
          values: [
            "A workflow that looks fine in demos but fires the kickoff link before intake is complete, sends everything on day one, or leaves the CRM messy",
            "Paying for complexity your business does not actually need yet",
          ],
        },
        {
          label: "What success should look like",
          values: [
            "A workflow you understand because you built it and are willing to maintain",
            "A production-ready onboarding system the team trusts to welcome, collect, schedule, and hand off new clients without constant cleanup",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When DIY is a strong fit — and when hiring help is smarter",
      subtitle:
        "DIY can be completely reasonable for the right scope. It becomes expensive when the onboarding workflow matters more than the learning experience:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "DIY can be a good fit",
          variant: "green",
          items: [
            "Onboarding is genuinely simple — one welcome email, one intake form, one kickoff call",
            "Client volume is low enough that a temporary mistake will not create a visible retention problem",
            "You mainly need a reliable welcome message before expanding into multi-step intake or scheduling",
            "You are comfortable owning trigger logic, intake timing, and CRM stage edits after launch",
            "You want a prototype first so you can prove the workflow is worth hardening later",
          ],
        },
        {
          icon: XCircle,
          heading: "Hiring help is usually smarter",
          variant: "neutral",
          items: [
            "New clients already wait too long after the deal closes because welcome sequencing is inconsistent",
            "Intake requires multiple steps, document collection with chase reminders, or conditional paths for different engagement types",
            "Kickoff scheduling needs to fire only after intake is actually complete, not the moment the deal closes",
            "Internal tasks need creation, assignment, and escalation so nothing falls through during handoff",
            "A few clients per quarter who start their experience with disorganization would justify paying to get this right now",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where small-business DIY onboarding projects usually start breaking down",
      subtitle:
        "The issue is rarely the welcome email. The issue is everything around it once real clients and real team handoff show up:",
      blocks: [
        {
          heading: "The welcome message fires, but the rest of onboarding does not follow",
          body: "A lot of DIY builds stop at the first email. Then nobody clearly defines what happens after the welcome — when intake should go out, how long to wait before chasing, what triggers the kickoff scheduling link, and what the CRM should show at each stage. The workflow sounds automated but still leaves new clients in limbo because the sequencing was never fully mapped.",
        },
        {
          heading: "Intake and kickoff scheduling fire at the wrong time",
          body: "The most common DIY mistake is sending intake forms, scheduling links, portal credentials, and policy documents all on day one. The client is overwhelmed, skips most of it, and the business spends the next week re-sending individual items. Or the kickoff link fires before intake is complete, and the team shows up to the call without the information they need.",
        },
        {
          heading: "CRM stages stop reflecting reality",
          body: "If nobody updates the pipeline manually and the automation does not move clients through stages based on real events, onboarding progress becomes invisible. The sales team thinks the client is active. The delivery team thinks the client is still in intake. Nobody knows who is responsible for what because the CRM shows the same stage for every new client regardless of actual progress.",
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
          body: "If your time is worth $100-$200 an hour and the setup will realistically take 15-30 hours to scope, build, test, and clean up, DIY is not automatically cheap. It may still be worth it for learning, but not because it is free.",
        },
        {
          icon: ClipboardList,
          title: "Start with the narrowest onboarding layer that closes the gap",
          body: "The safest rollout is one bounded use case: welcome sequence plus one intake form, or just intake collection with chase reminders. If you are trying to automate welcome sequencing, multi-step document collection, scheduling gates, CRM stage movement, and internal task routing all at once, the scope is probably too wide for a clean DIY first pass.",
        },
        {
          icon: AlertTriangle,
          title: "Separate prototype value from production value",
          body: "DIY is great for proving that onboarding automation could help your business. Hiring help is usually better once you know the workflow should exist and now need it to run reliably with real clients, real intake, real scheduling, and real downstream accountability.",
        },
        {
          icon: ShieldCheck,
          title: "Keep ownership either way",
          body: "Whether you build it yourself or hire it out, your business should own the CRM access, form tools, scheduling integrations, workflow documentation, and sequence logic. Good setup help reduces risk. It should not trap the onboarding workflow inside somebody else's accounts.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is grounded in the live onboarding cluster plus published adjacent proof around CRM workflow automation, intake sequencing, and production workflow cleanup:",
      studies: [
        {
          industry: "Onboarding implementation scope",
          headline: "The setup page explains what expert help should actually include",
          body: "That page stays on implementation scope: deal-won triggers, welcome sequence timing, intake handoff, scheduling gates, internal task routing, and CRM stage movement. This page answers the narrower buyer decision that comes one step earlier: keep DIYing, or pay for setup help now?",
          link: "/client-onboarding-setup-for-service-businesses",
        },
        {
          industry: "Accounting firm onboarding",
          headline: "The accounting-firm onboarding page proves the same workflow pattern in a specific vertical",
          body: "Engagement-letter delivery, intake forms, portal setup, kickoff scheduling, and first-step follow-up for accounting firms. The workflow mechanics are the same ones this decision page covers at the cross-industry level: trigger reliability, intake sequencing, completion gates, and internal task routing.",
          link: "/client-onboarding-automation-for-accounting-firms",
        },
        {
          industry: "CRM follow-up and handoff",
          headline: "The e-commerce CRM case study proves trigger-based pipeline automation and multi-step sequencing",
          body: "Thousands of leads organized and followed up through automated CRM workflows with trigger-based actions and status tracking. The same pipeline automation pattern powers onboarding builds: deal-won triggers, stage movement, task creation, and sequenced outreach. The proof framing stays adjacent because that deployment is e-commerce lead management, not service-business client onboarding.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Client onboarding automation", href: "/client-onboarding-automation" },
        { label: "Client onboarding setup for service businesses", href: "/client-onboarding-setup-for-service-businesses" },
        { label: "Client onboarding cost for small business", href: "/client-onboarding-cost-small-business" },
        { label: "Client onboarding launch checklist for small business", href: "/client-onboarding-launch-checklist-small-business" },
        { label: "Intake forms and document collection", href: "/intake-forms-and-document-collection-automation-for-service-businesses" },
        { label: "Client onboarding for accounting firms", href: "/client-onboarding-automation-for-accounting-firms" },
        { label: "Ecommerce CRM automation case study", href: "/case-studies/ecommerce-crm-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "When is DIY client onboarding setup actually the right move?",
      answer:
        "Usually when onboarding is genuinely simple — one welcome email, one intake form, one kickoff call — and client volume is low enough that a temporary mistake will not create a visible retention problem. DIY is strongest when you want to learn the tools or prove the workflow is worth building before investing in a hardened version.",
    },
    {
      question: "When should I hire someone to set up client onboarding instead of doing it myself?",
      answer:
        "Hire help when the workflow already affects first impressions, when intake requires multiple steps or document collection with chase logic, when kickoff scheduling needs a completion gate, when internal task routing depends on automation rather than memory, or when CRM stages need to reflect actual onboarding progress instead of manual updates.",
    },
    {
      question: "How is this different from the client onboarding setup page?",
      answer:
        "The setup page explains what good onboarding implementation should include and when expert help is worth considering. This page sits one step earlier in the buying journey and answers the decision itself: keep DIYing, or pay for setup help now?",
    },
    {
      question: "How much does it usually cost to hire help for onboarding setup?",
      answer:
        "A focused small-business onboarding build often lands between $1.5K and $3K for welcome sequencing plus intake. More complex builds with document collection chase logic, scheduling gates, internal task routing, CRM stage movement, and stall detection often land between $3K and $5K. The real driver is workflow depth and handoff complexity, not the label alone.",
    },
    {
      question: "Can I prototype the onboarding workflow myself and then hire someone later?",
      answer:
        "Yes. That is often the smartest path. DIY can prove the workflow is worth building. Then setup help can harden the trigger logic, clean up the intake sequencing, add proper completion gates, connect the CRM stage transitions, and leave you with something safe to run in production.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners deciding whether to keep building onboarding automation alone or bring in expert setup help",
  ctaHeading: "Want a clear answer on whether this onboarding workflow is worth DIYing?",
  ctaText:
    "Book a 30-minute call. We will look at how new clients enter your workflow today, where intake and handoff break, and tell you whether to keep the first version DIY, scope a bounded setup engagement, or simplify the workflow before spending more.",
  ctaSubtext:
    "No vague pitch. Just a practical call about whether this onboarding setup should stay in-house or get implemented properly now.",
  relatedLinks: [
    { label: "Client onboarding automation", href: "/client-onboarding-automation" },
    { label: "Client onboarding setup for service businesses", href: "/client-onboarding-setup-for-service-businesses" },
    { label: "Client onboarding cost for small business", href: "/client-onboarding-cost-small-business" },
    { label: "Client onboarding launch checklist for small business", href: "/client-onboarding-launch-checklist-small-business" },
    { label: "Intake forms and document collection", href: "/intake-forms-and-document-collection-automation-for-service-businesses" },
    { label: "Client onboarding for accounting firms", href: "/client-onboarding-automation-for-accounting-firms" },
    { label: "AI lead follow-up setup vs. DIY", href: "/ai-lead-follow-up-setup-vs-diy-small-business" },
    { label: "No-show reduction setup vs. DIY", href: "/no-show-reduction-setup-vs-diy-small-business" },
    { label: "Ecommerce CRM automation case study", href: "/case-studies/ecommerce-crm-automation" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
