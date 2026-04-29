import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  DollarSign,
  MessageSquare,
  Scale,
  ShieldCheck,
  Smartphone,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-setup-vs-diy-small-business",
  metaTitle:
    "Missed-Call Text-Back Setup vs. DIY for Small Business — When to Hire Help | Dmytro AI",
  metaDescription:
    "Should a small business DIY missed-call text-back setup or hire expert help? Practical guide to owner time, trigger filtering, business-hours vs after-hours logic, CRM logging, duplicate prevention, urgency routing, and when setup help is cheaper than more DIY drift.",
  badgeText: "Setup Buy-vs-Build",
  badgeIcon: Scale,
  h1: "Missed-Call Text-Back Setup: Hire Help or DIY?",
  heroIntro:
    "DIY can be completely reasonable when missed-call text-back is still a narrow build: one phone number, one clean missed-call trigger, one message path, and low enough call volume that an occasional mistake will not create real customer confusion or lost revenue. Hiring help usually becomes the better move once business-hours versus after-hours logic matters, answered-call filtering needs to be trustworthy, CRM logging has to stay clean, duplicate contacts create follow-up noise, or urgent replies need to route to the right human fast. The real question is not whether you could wire a text after a missed call. It is whether this phone-recovery layer is important enough that you want it live, reliable, and low-risk without spending nights debugging trigger filters, timing windows, escalation rules, and contact-creation mess.",
  heroSubtext:
    "Below: when DIY missed-call text-back setup is still a smart move, when expert help usually pays for itself, what each path really costs, and how to tell whether you need a quick tutorial, a bounded setup engagement, or a simpler phone workflow first.",
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
          body: "Doing the setup yourself can reduce cash spend, but it shifts the cost into owner or manager time: checking what counts as a true missed call, separating office-hours from after-hours logic, mapping the CRM record correctly, testing booking links, and fixing whatever breaks once real callers start replying.",
        },
        {
          icon: Workflow,
          title: "Text-back setup is workflow design, not just one SMS",
          body: "The hard part is not writing a polite message. The hard part is deciding what happens when the team actually answered, when the same number calls twice, when an existing customer replies in the same thread, when a late-night caller needs different expectations, and when an urgent text should notify a human immediately instead of waiting until morning.",
        },
        {
          icon: Wrench,
          title: "Hiring help makes sense when bad filtering would be embarrassing or expensive",
          body: "If the workflow is already close to customer-facing production, setup help is often cheaper than another month of DIY drift. You are not paying for a button click. You are paying to avoid sending apology texts to answered callers, burying recovered leads in duplicate records, and quietly losing trust in the phone layer.",
        },
      ],
    },
    {
      type: "table",
      title: "DIY missed-call text-back setup vs. hiring expert help",
      subtitle:
        "This is the practical trade-off for a small business that already believes SMS-first missed-call recovery probably matters:",
      headers: ["DIY setup", "Hire setup help"],
      rows: [
        {
          label: "Best for",
          values: [
            "One narrow phone-recovery path, one number, lower missed-call volume, owner-led learning, or a prototype before a wider rollout",
            "Revenue-critical missed-call recovery, after-hours logic, CRM routing, duplicate prevention, urgency escalation, or messy inherited phone/CRM behavior",
          ],
        },
        {
          label: "Typical cash cost",
          values: [
            "Lower upfront spend, plus your own time and tool cost",
            "Often $800-$2.5K for a bounded small-business text-back workflow depending on CRM depth, schedule branching, and escalation logic",
          ],
        },
        {
          label: "Time to a trustworthy launch",
          values: [
            "Several evenings to a couple of weeks depending on trigger quality, schedule logic, and how disciplined your testing is",
            "Often 3-10 business days for a focused workflow with filtering, business-hours logic, CRM logging, and documentation",
          ],
        },
        {
          label: "Biggest risk",
          values: [
            "A workflow that texts answered callers, creates duplicate contacts, or sends the wrong message at the wrong time of day",
            "Paying for a heavier setup than your call pattern actually needs yet",
          ],
        },
        {
          label: "What success should look like",
          values: [
            "A workflow you understand because you built it and are willing to maintain",
            "A production-ready text-back system the team trusts to trigger, log, route, and stop correctly without constant cleanup",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When DIY is a strong fit — and when hiring help is smarter",
      subtitle:
        "DIY can be completely reasonable for the right scope. It becomes expensive when the missed-call workflow matters more than the learning experience:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "DIY can be a good fit",
          variant: "green",
          items: [
            "You are setting up one narrow missed-call recovery path with clear success criteria",
            "Call volume is low enough that a temporary mistake will not damage a meaningful chunk of opportunity",
            "You only need one phone number, one message path, and basic CRM logging before expanding later",
            "You are comfortable owning trigger filters, business-hours schedules, and sequence edits after launch",
            "You want a prototype first so you can prove the lighter SMS-first layer is enough before hardening it",
          ],
        },
        {
          icon: XCircle,
          heading: "Hiring help is usually smarter",
          variant: "neutral",
          items: [
            "The workflow must reliably separate answered calls from true misses before it talks to real customers",
            "After-hours versus business-hours handling changes what the text should promise next",
            "CRM logging, duplicate prevention, and reply routing need to work from day one because the team already misses enough calls for this to matter",
            "Urgent or safety-sensitive replies need a human escalation path instead of a generic text conversation",
            "No one on the team wants to own testing edge cases across the phone system, the CRM, and live customer replies",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where small-business DIY text-back setups usually start breaking down",
      subtitle:
        "The issue is rarely the first message. The issue is everything around it once real callers, real schedules, and real CRM behavior show up:",
      blocks: [
        {
          heading: "Answered-call filtering sounds simple until the phone system gets weird",
          body: "A lot of DIY builds assume the phone provider cleanly labels every missed call. In reality, short answered calls, transfers, voicemail pickups, and tracking-number quirks can create false misses. If that trigger is wrong, your first customer experience is a confusing apology text to someone who just spoke with your office.",
        },
        {
          heading: "Business-hours and after-hours logic need different promises",
          body: "A missed call at 2 PM and a missed call at 9 PM are not the same workflow. During office hours the text should usually acknowledge a temporary miss and set up a near-term reply. After hours it should set realistic expectations, offer a lighter self-service next step, or escalate only if the business actually supports that path.",
        },
        {
          heading: "Duplicate contacts and buried replies quietly kill trust in the workflow",
          body: "A text-back system only creates value if recovered callers become visible, owned leads. DIY starts getting expensive when every repeated missed call creates a new record, when replies stay trapped inside a text thread nobody owns, or when the office cannot tell whether the lead has already been contacted.",
        },
      ],
    },
    {
      type: "considerations",
      title: "How to make the right call before you burn a week on setup",
      subtitle:
        "A few practical checks usually make the answer obvious:",
      items: [
        {
          icon: Clock,
          title: "Put a real value on owner or manager time",
          body: "If your time is worth $100-$200 an hour and the setup will realistically take 8-20 hours to scope, wire, test, and clean up, DIY is not automatically cheap. It may still be worth it for learning, but not because it is free.",
        },
        {
          icon: Smartphone,
          title: "Start with one phone path, not every phone edge case at once",
          body: "The safest rollout is one bounded use case: one number, one trigger definition, one message path, one CRM owner model. If you are trying to solve multi-location routing, after-hours escalation, marketing-number overlap, and customer-service threads all in the first pass, the scope is probably already too wide for clean DIY.",
        },
        {
          icon: AlertTriangle,
          title: "Separate prototype value from production value",
          body: "DIY is great for proving that SMS-first missed-call recovery could help. Hiring help is usually better once you already know the workflow should exist and now need it to run reliably with true missed-call filtering, scheduling logic, and lead ownership that the team trusts.",
        },
        {
          icon: ShieldCheck,
          title: "Keep ownership either way",
          body: "Whether you build it yourself or hire it out, your business should own the texting number, CRM access, workflow docs, and schedule logic. Good setup help reduces risk. It should not trap your phone-recovery layer inside somebody else's accounts.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is grounded in the live missed-call text-back cluster plus adjacent published proof around phone recovery, routing, and reliable follow-up:",
      studies: [
        {
          industry: "Text-back implementation scope",
          headline: "The setup-help page explains what expert implementation should actually include before text-back goes live",
          body: "That page stays on implementation scope: trigger filtering, business-hours logic, CRM mapping, duplicate prevention, urgency routing, and testing. This page answers the narrower buyer decision that comes one step earlier: keep DIYing, or pay for setup help now?",
          link: "/missed-call-text-back-setup-for-service-businesses",
        },
        {
          industry: "Phone-recovery economics",
          headline: "The cost and ROI children prove this cluster already supports a narrower buy-vs-build decision page",
          body: "Those pages price the workflow and model payback once missed-call recovery is working. This page stays distinct by helping a small business decide whether to invest owner time in DIY setup first or pay for bounded implementation help now.",
          link: "/missed-call-text-back-cost-small-business",
        },
        {
          industry: "Adjacent call-recovery proof",
          headline: "The Paris Cafe case study shows why reliable phone recovery and handoff matter operationally",
          body: "The Paris Cafe voice-agent case study is not a missed-call text-back setup build, but it proves the business value of catching inbound demand fast, routing it cleanly, and reducing after-hours loss. That is the same operational logic behind paying for setup help once your lighter SMS-first phone layer becomes important enough to trust.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "Missed call text-back for service businesses", href: "/missed-call-text-back-for-service-businesses" },
        { label: "Missed call text-back setup help", href: "/missed-call-text-back-setup-for-service-businesses" },
        { label: "Missed call text-back cost for small business", href: "/missed-call-text-back-cost-small-business" },
        { label: "Missed call text-back ROI for small business", href: "/missed-call-text-back-roi-small-business" },
        { label: "Missed call text-back vs. AI phone answering", href: "/missed-call-text-back-vs-ai-phone-answering-for-service-businesses" },
        { label: "AI phone answering setup for small business", href: "/ai-phone-answering-setup-small-business" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "When is DIY missed-call text-back setup actually the right move?",
      answer:
        "Usually when the workflow is narrow, call volume is still manageable, and you mainly want to learn the tools. DIY is strongest when you only need one clear missed-call trigger, one basic message path, and enough internal discipline that a temporary mistake will not create major customer confusion or lost opportunity.",
    },
    {
      question: "When should I hire someone to set up missed-call text-back instead of doing it myself?",
      answer:
        "Hire help when answered-call filtering has to be trustworthy, business-hours versus after-hours logic matters, CRM logging and duplicate prevention need to work cleanly, or urgent replies need fast human routing. At that point the cost of delay and cleanup usually outweighs the setup invoice.",
    },
    {
      question: "How is this different from the existing missed-call text-back setup page?",
      answer:
        "The setup page explains what good text-back implementation should include and what has to be configured before launch. This page sits one step earlier in the buying journey and answers the decision itself: keep DIYing, or pay for setup help now?",
    },
    {
      question: "How much does it usually cost to hire help for missed-call text-back setup?",
      answer:
        "A focused small-business text-back setup often lands around $800-$1.5K. More complex builds with deeper CRM cleanup, multiple numbers, schedule branching, and urgency escalation often land around $1.5K-$2.5K. The real driver is workflow depth and edge-case complexity, not the label alone.",
    },
    {
      question: "Can I prototype the workflow myself and then hire someone later?",
      answer:
        "Yes. That is often the smartest path. DIY can prove the workflow is worth building. Then setup help can harden the trigger filters, scheduling logic, CRM ownership, and escalation rules so the system is safe to run in production.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners deciding whether to keep building missed-call text-back alone or bring in expert setup help",
  ctaHeading: "Want a clear answer on whether this workflow is worth DIYing?",
  ctaText:
    "Book a 30-minute call. We will look at your missed-call pattern, phone-system behavior, CRM handoff, and owner-time constraints, then tell you whether to keep the first version DIY, scope a bounded setup engagement, or simplify the phone layer before spending more.",
  ctaSubtext:
    "No vague pitch. Just a practical call about whether this missed-call workflow should stay in-house or get implemented properly now.",
  relatedLinks: [
    { label: "Missed call text-back for service businesses", href: "/missed-call-text-back-for-service-businesses" },
    { label: "Missed call text-back setup help", href: "/missed-call-text-back-setup-for-service-businesses" },
    { label: "Missed call text-back cost for small business", href: "/missed-call-text-back-cost-small-business" },
    { label: "Missed call text-back ROI for small business", href: "/missed-call-text-back-roi-small-business" },
    { label: "Missed call text-back vs. AI phone answering", href: "/missed-call-text-back-vs-ai-phone-answering-for-service-businesses" },
    { label: "AI phone answering setup vs. DIY", href: "/ai-phone-answering-setup-vs-diy-small-business" },
    { label: "AI lead follow-up setup vs. DIY", href: "/ai-lead-follow-up-setup-vs-diy-small-business" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
