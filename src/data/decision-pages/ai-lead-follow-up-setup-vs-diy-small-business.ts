import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  DollarSign,
  MessageSquare,
  Route,
  Scale,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-setup-vs-diy-small-business",
  metaTitle:
    "AI Lead Follow-Up Setup vs. DIY for Small Business — When to Hire Help | Dmytro AI",
  metaDescription:
    "Should you set up AI lead follow-up yourself or hire expert help? Practical small-business guide to owner time, workflow risk, CRM routing, sequence complexity, and when setup help is cheaper than DIY delay.",
  badgeText: "Setup Buy-vs-Build",
  badgeIcon: Scale,
  h1: "AI Lead Follow-Up Setup: Hire Help or DIY?",
  heroIntro:
    "DIY can be completely reasonable when the workflow is narrow, the stakes are low, and you mainly want to learn the tools. Hiring help usually becomes the better move once the system touches real lead volume, multiple channels, CRM routing, stop conditions, owner assignment, and hot-lead escalation. The practical question is not whether DIY is possible. It is whether this lead-follow-up workflow matters enough that you want it live, trusted, and revenue-safe without spending nights debugging triggers, sequence timing, CRM field mapping, and edge cases.",
  heroSubtext:
    "Below: when DIY lead-follow-up setup is still a smart call, when expert help usually pays for itself, what each path really costs, and how to tell whether you need a tutorial, a bounded setup engagement, or a narrower workflow first.",
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
          body: "Doing the setup yourself can reduce cash spend, but it shifts the cost into owner or staff time: mapping every lead source, building sequences, testing stop conditions, cleaning up CRM mistakes, and monitoring what breaks once real leads start replying.",
        },
        {
          icon: Workflow,
          title: "Lead-follow-up setup is workflow design, not just writing messages",
          body: "The hard part is not sending the first SMS. The hard part is deciding what happens when a web form lead replies after hours, when a missed-call lead needs a callback instead of a sequence, when a hot lead should trigger an alert, and when the workflow should stop so the team does not look disorganized.",
        },
        {
          icon: Wrench,
          title: "Hiring help makes sense when delay is already costing you leads",
          body: "If response lag, weak routing, or inconsistent follow-up is already hurting bookings, setup help is often cheaper than another month of DIY drift. You are not paying for software buttons. You are paying to close a real speed-to-lead leak before more opportunities die in the queue.",
        },
      ],
    },
    {
      type: "table",
      title: "DIY lead-follow-up setup vs. hiring expert help",
      subtitle:
        "This is the practical trade-off for a small business that already believes faster follow-up might help:",
      headers: ["DIY setup", "Hire setup help"],
      rows: [
        {
          label: "Best for",
          values: [
            "One narrow response path, lower lead volume, owner-led learning, or a prototype before a wider rollout",
            "Revenue-critical first response, multi-channel routing, CRM ownership rules, hot-lead escalation, or messy inherited follow-up",
          ],
        },
        {
          label: "Typical cash cost",
          values: [
            "Lower upfront spend, plus your own time and software cost",
            "Often $1.5K-$5K for one bounded workflow depending on channels, CRM integration, and testing depth",
          ],
        },
        {
          label: "Time to a trustworthy launch",
          values: [
            "Several evenings to several weeks depending on channel count, CRM mapping, and how disciplined your testing is",
            "Often 5-15 business days for a focused workflow with testing, handoff rules, and documentation",
          ],
        },
        {
          label: "Biggest risk",
          values: [
            "A workflow that looks fine in demos but misroutes leads, keeps messaging after a reply, or leaves the CRM messy",
            "Paying for complexity your business does not actually need yet",
          ],
        },
        {
          label: "What success should look like",
          values: [
            "A workflow you understand because you built it and are willing to maintain",
            "A production-ready lead-follow-up system the team trusts to respond, route, and escalate correctly without constant cleanup",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When DIY is a strong fit — and when hiring help is smarter",
      subtitle:
        "DIY can be completely reasonable for the right scope. It becomes expensive when the workflow matters more than the learning experience:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "DIY can be a good fit",
          variant: "green",
          items: [
            "You are setting up one narrow follow-up path with clear success criteria",
            "Lead volume is low enough that a temporary mistake will not cost meaningful revenue",
            "You mainly need instant response on one channel before expanding into multi-step nurture",
            "You are comfortable owning CRM field mapping, stop rules, and sequence edits after launch",
            "You want a prototype first so you can prove the workflow is worth hardening later",
          ],
        },
        {
          icon: XCircle,
          heading: "Hiring help is usually smarter",
          variant: "neutral",
          items: [
            "Leads already go cold because first response or follow-up discipline is inconsistent",
            "The workflow spans web forms, missed calls, SMS, email, or multiple lead sources that need different routing",
            "The AI needs to log cleanly into the CRM and hand hot leads to the right owner fast",
            "No one on the team wants to own debugging duplicates, edge cases, and after-hours replies",
            "A few recovered jobs or consults per month would justify paying to get this right now",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where small-business DIY lead-follow-up projects usually start breaking down",
      subtitle:
        "The issue is rarely the first message. The issue is everything around it once real leads and real staff handoff show up:",
      blocks: [
        {
          heading: "The first response works, but the rest of the sequence does not",
          body: "A lot of DIY builds stop at instant acknowledgment. Then nobody clearly defines what happens on touch two, touch three, or after a lead replies. The workflow sounds fast but still leaves good leads in limbo because the follow-up logic was never fully mapped.",
        },
        {
          heading: "CRM routing and owner assignment stay fuzzy",
          body: "A lead only counts as recovered if the right person sees it with the right context. DIY starts getting expensive when messages go out but the lead lands in the wrong stage, gets assigned to nobody, or creates duplicates that make the team stop trusting the pipeline.",
        },
        {
          heading: "Hot-lead escalation is too slow or too generic",
          body: "If every reply gets treated the same, the owner or closer still has to dig through the inbox to find buying intent. Good setup makes a real distinction between a basic acknowledgment, a nurture lead, and a ready-to-book lead that needs immediate human attention.",
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
          icon: MessageSquare,
          title: "Start with one lead source, not every inquiry path",
          body: "The safest rollout is one bounded use case: one form source, one missed-call path, one sequence, one escalation rule. If you are trying to automate every lead source, every touchpoint, and every owner handoff at once, the scope is probably already too wide for a clean DIY first pass.",
        },
        {
          icon: AlertTriangle,
          title: "Separate prototype value from production value",
          body: "DIY is great for proving that lead-follow-up automation could help. Hiring help is usually better once you know the workflow should exist and now need it to run reliably with real leads, real routing, and real downstream accountability.",
        },
        {
          icon: ShieldCheck,
          title: "Keep ownership either way",
          body: "Whether you build it yourself or hire it out, your business should own the phone numbers, domains, CRM access, workflow docs, and sequence logic. Good setup help reduces risk. It should not trap the workflow inside somebody else's accounts.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is grounded in the live lead-follow-up cluster plus published adjacent proof around CRM follow-up, instant response, and production workflow cleanup:",
      studies: [
        {
          industry: "Lead-follow-up implementation scope",
          headline: "The setup page explains what expert help should actually include",
          body: "That page stays on implementation scope: channel mapping, sequence design, CRM routing, stop rules, and testing. This page answers the narrower buyer decision that comes one step earlier: keep DIYing, or pay for setup help now?",
          link: "/ai-lead-follow-up-setup-for-service-businesses",
        },
        {
          industry: "CRM follow-up and handoff",
          headline: "The e-commerce CRM case study shows what proper follow-up setup protects",
          body: "The published CRM case study demonstrates the downstream value of getting routing and handoff right: automated outreach replaced manual chasing, pipeline ownership became clearer, and the business stopped relying on inconsistent follow-up discipline. That is the operational logic behind paying for setup help once the workflow becomes revenue-critical.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Narrower first-step automation",
          headline: "The contact-form and instant-response pages show when a lighter DIY phase is enough",
          body: "Before paying for a broader multi-channel setup, a smaller first build may be enough. The contact-form follow-up and instant-response pages help clarify when your real bottleneck is only the first reply versus the full follow-up discipline after that.",
          link: "/contact-form-lead-follow-up-automation",
        },
      ],
      links: [
        { label: "AI lead follow-up setup help", href: "/ai-lead-follow-up-setup-for-service-businesses" },
        { label: "AI lead follow-up setup mistakes", href: "/ai-lead-follow-up-setup-mistakes-small-business" },
        { label: "AI lead follow-up cost for small business", href: "/ai-lead-follow-up-cost-small-business" },
        { label: "AI lead follow-up ROI for small business", href: "/ai-lead-follow-up-roi-small-business" },
        { label: "Contact form lead follow-up automation", href: "/contact-form-lead-follow-up-automation" },
        { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "When is DIY AI lead-follow-up setup actually the right move?",
      answer:
        "Usually when the workflow is narrow, the stakes are low, and you mainly want to learn the tools. DIY is strongest when you only need one clear response path, lower lead volume, and enough internal discipline that a temporary mistake will not cost meaningful revenue or create a messy customer experience.",
    },
    {
      question: "When should I hire someone to set up AI lead follow-up instead of doing it myself?",
      answer:
        "Hire help when the workflow already affects real response speed, multi-channel routing, CRM ownership, hot-lead escalation, or after-hours handling. At that point the cost of delay, bad routing, and ongoing cleanup usually outweighs the setup invoice.",
    },
    {
      question: "How is this different from the existing AI lead follow-up setup page?",
      answer:
        "The setup page explains what good implementation should include and when expert help is worth considering. This page sits one step earlier in the buying journey and answers the decision itself: keep DIYing, or pay for setup help now?",
    },
    {
      question: "How much does it usually cost to hire help for lead-follow-up setup?",
      answer:
        "A focused small-business setup often lands around $1.5K-$3K. More complex builds with deeper CRM routing, multiple lead sources, multi-channel sequences, and hot-lead escalation often land around $3K-$5K. The real driver is workflow depth and edge-case complexity, not the label alone.",
    },
    {
      question: "Can I prototype the workflow myself and then hire someone later?",
      answer:
        "Yes. That is often the smartest path. DIY can prove the workflow is worth building. Then setup help can harden the sequence logic, clean up the edge cases, connect the CRM properly, and leave you with something safe to run in production.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners deciding whether to keep building lead-follow-up automation alone or bring in expert setup help",
  ctaHeading: "Want a clear answer on whether this workflow is worth DIYing?",
  ctaText:
    "Book a 30-minute call. We will look at your lead sources, follow-up gaps, CRM handoff, and owner-time constraints, then tell you whether to keep the first version DIY, scope a bounded setup engagement, or simplify the workflow before spending more.",
  ctaSubtext:
    "No vague pitch. Just a practical call about whether this follow-up setup should stay in-house or get implemented properly now.",
  relatedLinks: [
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "AI lead follow-up setup help", href: "/ai-lead-follow-up-setup-for-service-businesses" },
    { label: "AI lead follow-up setup mistakes", href: "/ai-lead-follow-up-setup-mistakes-small-business" },
    { label: "AI lead follow-up cost for small business", href: "/ai-lead-follow-up-cost-small-business" },
    { label: "AI lead follow-up ROI for small business", href: "/ai-lead-follow-up-roi-small-business" },
    { label: "Contact form lead follow-up automation", href: "/contact-form-lead-follow-up-automation" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "Lead follow-up automation examples", href: "/lead-follow-up-automation-examples" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
