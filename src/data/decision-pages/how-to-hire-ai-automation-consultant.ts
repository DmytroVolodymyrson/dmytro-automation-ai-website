import {
  Search,
  ShieldCheck,
  FolderCheck,
  MessagesSquare,
  ClipboardCheck,
  TriangleAlert,
  CheckCircle2,
  XCircle,
  Handshake,
  Workflow,
  KeyRound,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "how-to-hire-ai-automation-consultant",
  metaTitle:
    "How to Hire an AI Automation Consultant — What to Look For | Dmytro AI",
  metaDescription:
    "Need to find someone to automate your business with AI? Practical hiring guide for small businesses: what to ask, what proof matters, red flags, ownership terms, and how to vet an AI automation consultant.",
  badgeText: "Hiring Guide",
  badgeIcon: Search,
  h1: "How to Hire an AI Automation Consultant",
  heroIntro:
    "If your workflow is simple and low-risk, you may not need to hire anyone yet. But if the automation touches live leads, booking, CRM handoff, or customer-facing AI, the right consultant can save you weeks of false starts and a lot of expensive cleanup. The key is not finding the person who sounds the most technical. It is finding the person who can diagnose the workflow clearly, show relevant proof, explain tradeoffs honestly, and leave you owning a system that works in production.",
  heroSubtext:
    "Below: how to tell if you even need consultant help, what a good discovery call should produce, the questions to ask before you sign anything, and the red flags that usually signal a flashy seller rather than a reliable implementation partner.",
  sections: [
    {
      type: "cards",
      title: "What you are really hiring for",
      subtitle:
        "A strong AI automation consultant is not just a tool operator. They should reduce business risk in a workflow that matters:",
      items: [
        {
          icon: Workflow,
          title: "Workflow diagnosis before tool talk",
          body: "A good consultant starts with the operational problem: where leads are getting lost, where handoff breaks, where staff time gets wasted, and what the automation should and should not own. If the first conversation jumps straight into stack buzzwords, the workflow understanding is probably weak.",
        },
        {
          icon: ShieldCheck,
          title: "Production reliability, not demo logic",
          body: "Most business owners do not need help making a form send an email. They need help building something that survives real replies, duplicate submissions, missed calls, after-hours edge cases, and messy CRM data. Reliable implementation is the real product.",
        },
        {
          icon: FolderCheck,
          title: "Clear ownership after launch",
          body: "You should end up owning the workflows, accounts, credentials, documentation, and operating logic. Hiring the wrong consultant often creates a system you cannot maintain or safely hand off later. Hiring the right one gives you leverage, not dependency.",
        },
      ],
    },
    {
      type: "table",
      title: "What to look for — and what to avoid",
      subtitle:
        "The strongest hiring signal is not charisma. It is whether the consultant can make the workflow legible and bounded:",
      headers: ["Strong signal", "Red flag"],
      rows: [
        {
          label: "Proof",
          values: [
            "Can point to published case studies or adjacent production work that matches the kind of workflow you need",
            "Talks in generic promises with no grounded examples beyond mockups, screenshots, or tool certifications",
          ],
        },
        {
          label: "Discovery process",
          values: [
            "Asks specific questions about lead sources, handoff, failure states, ownership, and what should stay human",
            "Tries to quote quickly without understanding your workflow, constraints, or business risk",
          ],
        },
        {
          label: "Scope clarity",
          values: [
            "Can explain what phase one includes, what is intentionally out of scope, and what success should look like",
            "Says yes to everything, keeps scope vague, or frames every concern as 'we'll figure it out later'",
          ],
        },
        {
          label: "Ownership",
          values: [
            "Builds on your accounts or cleanly transfers everything with documentation and access",
            "Wants the core system to live inside their accounts, proprietary wrappers, or an opaque retainer relationship",
          ],
        },
        {
          label: "Communication",
          values: [
            "Can translate technical choices into operational consequences you can actually evaluate",
            "Uses complexity itself as the pitch and never makes the workflow clearer than it was before the call",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When hiring a consultant makes sense — and when it does not",
      subtitle:
        "The right answer is not always 'hire now.' The fit depends on workflow stakes, owner bandwidth, and clarity:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Hire now",
          variant: "green",
          items: [
            "Leads are already getting lost because response, routing, or follow-up is inconsistent",
            "The workflow spans multiple tools and needs reliable CRM updates, notifications, and fallback logic",
            "You need customer-facing AI or call handling where mistakes show up immediately in real conversations",
            "No one on the team wants to own debugging, maintenance, and edge-case cleanup after launch",
            "The business case is clear enough that speed-to-value matters more than learning the tools personally",
          ],
        },
        {
          icon: XCircle,
          heading: "Wait or keep it DIY",
          variant: "neutral",
          items: [
            "The workflow is still fuzzy and you do not yet know what success should look like",
            "You mainly want to learn the stack yourself through a small internal prototype",
            "The automation is low-risk enough that temporary failure will not hurt revenue or customers",
            "You are still choosing the process itself, not just the implementation partner",
            "You are shopping for a full transformation pitch when one narrow automation would be the smarter first step",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "What a good discovery call should produce",
      subtitle:
        "You should leave the first serious conversation with more clarity than you started with:",
      blocks: [
        {
          heading: "A defined phase-one workflow",
          body: "The consultant should help narrow the project to one meaningful workflow: missed-call recovery, lead qualification, booking handoff, CRM follow-up, or another clearly bounded operational problem. If the call expands into a giant AI wishlist, that is usually a sign the scope is not under control.",
        },
        {
          heading: "A realistic explanation of where AI belongs — and where it does not",
          body: "Good consultants do not try to automate every human interaction. They should tell you which parts can be standardized, where human review still matters, and which edge cases deserve a manual handoff instead of fake AI confidence.",
        },
        {
          heading: "A concrete statement of risk, ownership, and next steps",
          body: "By the end of the call, you should know the likely delivery model, who owns the accounts, what documentation you will receive, how testing will work, and what would make the consultant advise against the build. If those basics are still foggy, keep looking.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Five questions to ask before you hire anyone",
      subtitle:
        "These questions usually reveal whether you are talking to a real operator or just a persuasive seller:",
      items: [
        {
          icon: ClipboardCheck,
          title: "What similar workflow have you already shipped?",
          body: "Ask for the closest public example or adjacent proof. You are not looking for exact-industry perfection. You are looking for evidence that they have handled a similar operational problem in production, not only in test environments.",
        },
        {
          icon: MessagesSquare,
          title: "What should stay human in this workflow?",
          body: "This is one of the fastest quality filters. Weak consultants treat AI like a replacement hammer. Strong consultants can tell you where human judgment, escalation, approval, or exception handling should remain in the loop.",
        },
        {
          icon: KeyRound,
          title: "Who owns the accounts, credentials, and workflow logic?",
          body: "The correct answer is: you do, with clean access and documentation. If the answer depends on a vague future handoff, the consultant relationship can become more expensive than it looks on day one.",
        },
        {
          icon: Handshake,
          title: "What does a successful first phase actually include?",
          body: "Good answers are specific: trigger sources, integrations, routing, alerts, testing depth, documentation, and post-launch support window. Bad answers stay abstract because the seller wants room to reinterpret scope later.",
        },
        {
          icon: TriangleAlert,
          title: "What could go wrong with this workflow?",
          body: "A consultant worth hiring should be able to name likely failure states immediately: duplicate leads, bad routing, edge-case conversations, stale CRM records, calendar conflicts, or support overload. If they cannot describe failure, they probably have not run enough real systems.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This hiring guide is grounded in published work where the quality of implementation matters more than fancy tooling:",
      studies: [
        {
          industry: "Restaurant / voice handling",
          headline: "Customer-facing call workflows need real production discipline",
          body: "The Paris Cafe case study is useful proof for anyone hiring around phone workflows. It shows the kind of environment where call routing, after-hours handling, booking flow, and guest experience all have to work in production, not just in a demo.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce / CRM operations",
          headline: "The downstream system matters as much as lead capture",
          body: "The WheelsFeels CRM build is adjacent proof for owners hiring around follow-up and pipeline automation. It is not just about collecting leads. It is about the rules, alerts, handoff, and data integrity that make the workflow commercially usable once the lead exists.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Platform-specific implementation help",
          headline: "There are already narrower hiring guides when the workflow and stack are clearer",
          body: "Pages like the n8n consultant and GoHighLevel setup guides exist because good hiring decisions get easier once the workflow and tool choice are narrower. This page sits one level earlier in the funnel: deciding who to trust before the implementation details are fully locked.",
          link: "/n8n-automation-consultant",
        },
      ],
      links: [
        { label: "AI automation consultant for small business", href: "/ai-automation-consultant-small-business" },
        { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
        { label: "Consultant vs agency", href: "/hire-ai-automation-consultant-vs-agency" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How do I know if an AI automation consultant is actually qualified?",
      answer:
        "Look for relevant proof, a clear discovery process, and a grounded explanation of risk and ownership. You do not need someone who has worked in your exact niche 50 times. You do need someone who can show production work that matches the workflow stakes and can explain what stays human, what gets automated, and what failure handling looks like.",
    },
    {
      question: "What should an AI automation consultant help me decide before building anything?",
      answer:
        "They should help define the first workflow, the business outcome, the data and systems involved, the handoff points, and whether AI is even the right fit for each step. If they skip straight to tool setup without clarifying the workflow, that is a warning sign.",
    },
    {
      question: "Should I hire a consultant, an agency, or a freelancer?",
      answer:
        "That depends on scope and communication needs. For many small businesses, a solo consultant is attractive because the person selling the work is also the person doing the diagnosis and implementation. Agencies can make sense for broader programs. Freelancers can work well for narrower tasks. The main filter is still workflow fit, proof, and ownership clarity — not the label alone.",
    },
    {
      question: "What ownership terms should I insist on?",
      answer:
        "You should own the accounts, credentials, workflow logic, documentation, and data access. If the consultant uses their own accounts temporarily during setup, the transfer plan should be explicit before the project starts. The deliverable should be a working system you control, not a dependency you rent indefinitely by accident.",
    },
    {
      question: "What is the biggest red flag when hiring someone to automate my business with AI?",
      answer:
        "Usually it is overconfidence without specificity: promising broad transformation, giving fast quotes without understanding the workflow, or claiming AI can replace nuanced human work without tradeoffs. The right consultant usually sounds more precise, more bounded, and more honest about where automation should stop.",
    },
  ],
  faqSubtitle:
    "Straight answers for owners trying to choose the right implementation partner",
  ctaHeading: "Need a second opinion before you hire anyone?",
  ctaText:
    "Book a 30-minute call. We will look at the workflow you want to automate, whether it is consultant-worthy yet, what kind of partner actually fits the job, and what questions you should ask before signing anything.",
  ctaSubtext:
    "Useful even if you hire someone else. The goal is a clearer decision, not a pressure pitch.",
  relatedLinks: [
    { label: "AI automation consultant for small business", href: "/ai-automation-consultant-small-business" },
    { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
    { label: "Hire an AI automation consultant or do it yourself?", href: "/hire-ai-automation-consultant-vs-diy" },
    { label: "GoHighLevel automation setup", href: "/gohighlevel-automation-setup" },
  ],
};

export default data;
