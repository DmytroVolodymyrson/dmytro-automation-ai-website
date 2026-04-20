import {
  Wrench,
  LayoutDashboard,
  CalendarCheck,
  Bot,
  BarChart3,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  DollarSign,
  Workflow,
  Scale,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "gohighlevel-automation-setup",
  metaTitle:
    "GoHighLevel Automation Setup & Expert Help for Small Business | Dmytro AI",
  metaDescription:
    "Need help setting up GoHighLevel for a small business? Practical guide to GHL pipeline setup, calendars, automations, cleanup, pricing, and when expert help is worth it.",
  badgeText: "CRM Setup",
  badgeIcon: Wrench,
  h1: "GoHighLevel Automation Setup & Expert Help for Small Business",
  heroIntro:
    "If you are already on GoHighLevel, expert setup usually pays off faster than switching tools. The goal is not just to 'have GHL.' The goal is to make sure your pipelines, calendars, forms, follow-up automations, and reporting are configured so leads do not leak and your team is not babysitting the CRM every day. If your account is messy, half-built, or full of duplicate automations, this is the kind of setup work worth hiring for.",
  heroSubtext:
    "Below: what a solid GoHighLevel setup actually includes, what it typically costs, when DIY is fine, and when GHL is the wrong tool for your business.",
  sections: [
    {
      type: "cards",
      title: "What a solid GoHighLevel setup should include",
      subtitle:
        "For most small service businesses, the high-value setup work is not fancy. It is getting the revenue-critical pieces configured correctly from the start:",
      items: [
        {
          icon: LayoutDashboard,
          title: "Pipeline and opportunity stage cleanup",
          body: "Your stages should match how your business actually sells: new lead, contacted, qualified, booked, quoted, won, lost. If the pipeline is vague or overloaded, reporting becomes useless and automation breaks.",
        },
        {
          icon: CalendarCheck,
          title: "Calendars, forms, chat widgets, and attribution",
          body: "Booking links, intake forms, and chat widgets need to push the right data into the right pipeline with source tags attached. If this is not mapped well, leads show up with missing info and your team starts working blind.",
        },
        {
          icon: Bot,
          title: "SMS, email, and AI follow-up automations",
          body: "GoHighLevel setup is valuable when the follow-up is real: instant response, missed-call text back, reminder sequences, no-show recovery, and lead nurture. Not just a template sequence left running with generic copy.",
        },
        {
          icon: BarChart3,
          title: "Assignment rules, alerts, and reporting",
          body: "A useful account tells you where leads come from, which automations fire, how fast your team responds, and where deals stall. Without this, GHL becomes another place data goes to die.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is GoHighLevel setup help a good fit?",
      subtitle:
        "This page is for businesses already leaning toward GoHighLevel. It is not automatically the right platform for everyone:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You already use GoHighLevel or have decided to use it",
            "Your account has pipelines, calendars, forms, or automations that are half-configured",
            "Leads are coming in, but follow-up is inconsistent or delayed",
            "You want missed-call text back, booking flows, nurture sequences, or CRM cleanup without building a custom system",
            "You need one person to map the workflow and implement it properly instead of handing it to a general VA",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You do not have a repeatable sales or booking process yet",
            "You only need a calendar link and a couple of basic reminders",
            "You expect GoHighLevel to replace broken operations by itself",
            "Your workflow is so custom that GHL would force awkward workarounds everywhere",
            "You are better served by a custom CRM or a lighter stack than paying for GHL plus setup help",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "DIY GoHighLevel setup vs. expert help",
      subtitle:
        "The question is usually not whether GHL can do it. It is whether you want to spend your time figuring out the platform or getting the system live:",
      headers: ["DIY inside GHL", "Expert setup help"],
      rows: [
        {
          label: "Time to working setup",
          values: ["1-4 weeks of owner or staff time", "3-10 business days for a focused core build"],
        },
        {
          label: "Risk of messy automations",
          values: ["High if triggers, tags, and stages are improvised", "Lower because the workflow is mapped before automation is built"],
        },
        {
          label: "Typical cost",
          values: ["Lower cash cost, higher time cost", "$1.5K-$5K depending on account complexity and scope"],
        },
        {
          label: "Best for",
          values: ["Simple reminder flows and owner-led tinkering", "Revenue-critical lead routing, booking, nurture, and cleanup work"],
        },
        {
          label: "What usually gets missed",
          values: ["Source attribution, edge cases, duplicate contacts, reporting gaps", "Less likely, because setup is tied to the actual business process"],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When to hire for GoHighLevel setup and when to skip GHL entirely",
      subtitle:
        "Good setup help should also tell you when not to keep forcing the platform:",
      options: [
        {
          icon: Wrench,
          heading: "Hire for GoHighLevel setup when…",
          highlighted: true,
          items: [
            "Your business model is standard enough for pipelines, campaigns, calendars, and reminders to live inside one system",
            "You need missed-call follow-up, booking automation, nurture sequences, or database cleanup live this month",
            "You already pay for GHL and the bigger problem is configuration quality, not platform choice",
            "You want someone who can connect GHL with n8n, voice agents, forms, and reporting without handing it to an agency team",
          ],
        },
        {
          icon: Scale,
          heading: "Skip GHL or move custom when…",
          highlighted: false,
          items: [
            "Your operational workflow depends on logic GHL does not handle cleanly",
            "You need ownership of the data model, custom dashboards, or deeper product-specific workflows",
            "You are paying for lots of GHL features your team never uses",
            "You already know the long-term answer is a custom CRM and you do not want to replatform twice",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "What usually breaks in a messy GoHighLevel account",
      subtitle:
        "These are the failures that matter because they directly affect lead handling and booked revenue:",
      blocks: [
        {
          heading: "Automations fire in the wrong order",
          body: "A lead fills out a form, gets added to a campaign, books a call, and still receives the wrong follow-up because there is no cleanup logic. Good setup work is mostly about state management: when a lead should enter, exit, pause, or switch sequences.",
        },
        {
          heading: "Calendars and pipelines do not reflect the same reality",
          body: "A booked appointment does not move the opportunity. A no-show is not tagged. A completed call never updates the next stage. This is how teams start distrusting the CRM and go back to manual tracking in Slack or spreadsheets.",
        },
        {
          heading: "Duplicate contacts and weak source tracking hide the truth",
          body: "When Facebook leads, web forms, calls, and manual imports are not normalized, reporting becomes fiction. You cannot tell which sources convert, which automations work, or how many opportunities are actually active.",
        },
        {
          heading: "The account is full of templates nobody truly owns",
          body: "A common failure mode is agency or marketplace templates being dropped into the account without being rebuilt for the real business. They look impressive in the sidebar, but they do not match your booking rules, service areas, or lead qualification process.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What to watch before you pay for GoHighLevel setup help",
      subtitle:
        "You do not need a big agency. You do need someone who will scope the workflow honestly:",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not pay for feature sprawl",
          body: "Start with the automation that affects revenue first: new lead response, booking flow, missed-call follow-up, pipeline cleanup, or reactivation. If the proposal is stuffed with funnels, snapshots, and vanity extras, that is usually a bad sign.",
        },
        {
          icon: Workflow,
          title: "Map the workflow before building the automations",
          body: "A good setup starts with the actual process: where leads enter, who owns them, what qualifies as booked, what happens after a no-show, and when handoff occurs. Without that map, GHL becomes a pile of disconnected triggers.",
        },
        {
          icon: DollarSign,
          title: "Know what success should pay back",
          body: "A $2K-$4K setup only makes sense if it protects or creates more revenue than that. For many service businesses, one or two recovered jobs per month can justify the project. If the math is not there, keep the scope smaller.",
        },
        {
          icon: Clock,
          title: "Make sure ownership stays with your business",
          body: "Admin access, workflow documentation, phone number ownership, and exportability should stay with you. Setup help is valuable. Being trapped in someone else's account is not.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "These projects show the kind of CRM, lead-routing, and automation work that matters in a GoHighLevel setup engagement:",
      studies: [
        {
          industry: "Restaurant",
          headline: "After-hours calls captured and routed instead of lost",
          body: "Paris Cafe's voice agent stack used VAPI, n8n, and CRM workflow logic so inquiries were answered immediately and pushed into the next step instead of waiting for staff to catch up the next day.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "CRM follow-up system built around real lead handling",
          body: "The WheelsFeels CRM case study is adjacent proof that Dmytro can design lead stages, follow-up logic, and handoffs around how a business actually operates instead of dropping in generic automations.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        {
          label: "GoHighLevel vs. custom CRM",
          href: "/gohighlevel-vs-custom-crm-small-business",
        },
        {
          label: "AI lead follow-up guide",
          href: "/ai-lead-follow-up-for-service-businesses",
        },
        {
          label: "All case studies",
          href: "/case-studies",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does GoHighLevel setup help usually include?",
      answer:
        "Usually pipeline design, forms, calendars, tags, custom fields, opportunity stages, SMS and email automations, missed-call follow-up, source tracking, and cleanup of old or conflicting workflows. The exact scope depends on whether your account is new, half-built, or already live with bad data.",
    },
    {
      question: "How much does GoHighLevel setup help cost?",
      answer:
        "A focused setup for one core workflow typically lands around $1.5K-$3K. A broader build with multiple pipelines, booking logic, nurture sequences, cleanup work, and integrations is more often $3K-$5K. If someone quotes much less, expect a template install. If they quote much more, make sure the revenue case is real.",
    },
    {
      question: "Can you fix an existing messy GoHighLevel account instead of rebuilding from scratch?",
      answer:
        "Yes. In many cases, cleanup is the right first move. That usually means auditing triggers, tags, custom fields, duplicate contacts, pipeline stages, and campaigns, then simplifying the account so the core workflow is trustworthy again.",
    },
    {
      question: "When is GoHighLevel the wrong tool?",
      answer:
        "It is the wrong tool when your business depends on a highly custom operational workflow, a unique data model, or deep product-specific logic that would require constant workarounds. In that case, a lighter stack or custom CRM is often cleaner and cheaper over time.",
    },
    {
      question: "Can GoHighLevel connect to n8n, voice agents, and other tools I already use?",
      answer:
        "Yes. GoHighLevel can sit inside a broader stack. It can trigger or receive data from n8n workflows, AI voice agents, forms, calendars, and reporting tools. The point is not to force everything into GHL. The point is to let it handle the parts it is good at and integrate the rest cleanly.",
    },
  ],
  faqSubtitle:
    "Practical questions from small businesses considering GoHighLevel setup help",
  ctaHeading: "Need GoHighLevel set up properly?",
  ctaText:
    "Book a 30-minute call. We will look at your current account or planned workflow, figure out whether GoHighLevel is the right fit, and map out the smallest setup that would create real value first.",
  ctaSubtext:
    "No vague agency pitch. Just a practical discussion about your CRM, follow-up flow, and where automation is leaking today.",
  relatedLinks: [
    {
      label: "GoHighLevel vs. custom CRM",
      href: "/gohighlevel-vs-custom-crm-small-business",
    },
    {
      label: "AI lead follow-up for service businesses",
      href: "/ai-lead-follow-up-for-service-businesses",
    },
    {
      label: "Client onboarding automation",
      href: "/client-onboarding-automation",
    },
    {
      label: "All guides",
      href: "/guides",
    },
  ],
};

export default data;
