import {
  Scale,
  Users,
  Zap,
  Phone,
  MessageSquare,
  CalendarCheck,
  Star,
  CheckCircle2,
  XCircle,
  Wrench,
  Monitor,
  ShieldCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-for-businesses-without-a-tech-team",
  metaTitle:
    "AI Automation for Businesses Without a Tech Team — Honest Guide | Dmytro AI",
  metaDescription:
    "Can you automate your business without developers or IT staff? Yes, for most small business use cases. Here is what works, what does not, and how to decide if you are ready.",
  badgeText: "Decision Guide",
  badgeIcon: Scale,
  h1: "AI Automation for Businesses Without a Tech Team",
  heroIntro:
    "Yes, you can automate lead follow-up, appointment booking, review requests, and CRM workflows without a single developer on staff. For most small-business automation projects, the bottleneck is not a missing tech team. It is slow follow-up, manual admin work, and disconnected tools. If your business already runs on repeatable steps, automation can work without hiring developers first.",
  heroSubtext:
    "Below: what you actually need (and do not need) to get started, which automations work best for non-technical teams, when it is not the right fit, and how to evaluate your options honestly.",
  sections: [
    {
      type: "prose",
      title: "What 'no tech team' actually means here",
      subtitle:
        "A quick clarification, because the term gets used loosely:",
      blocks: [
        {
          heading: "You do not need developers",
          body: "The automations I build run on platforms like n8n, GoHighLevel, and standard APIs. You do not write code. You do not maintain servers. You do not need anyone on your team who knows how to code. The system runs in the background and you interact with it through dashboards, text messages, and your existing tools.",
        },
        {
          heading: "You do not need IT staff",
          body: "There is no hardware to install, no software to update manually, no network configuration. Everything runs in the cloud. If you can use a smartphone and check email, you have enough technical skill to operate what gets built.",
        },
        {
          heading: "You do need someone who knows your operations",
          body: "The one thing automation cannot replace is knowledge of your business. Someone on your team needs to explain your current workflow: how leads come in, how appointments get booked, what your follow-up process looks like today. That person is usually the owner. That is enough.",
        },
      ],
    },
    {
      type: "cards",
      title: "What you can automate without technical staff",
      subtitle:
        "These are the automations I build most often for businesses with no technical employees. Each one runs without daily attention once it is set up:",
      items: [
        {
          icon: Phone,
          title: "Instant lead response",
          body: "Every form submission or missed call triggers an immediate text and email. The prospect hears from you in under 60 seconds. No one on your team needs to do anything. The system handles it.",
        },
        {
          icon: MessageSquare,
          title: "Multi-touch follow-up sequences",
          body: "Automated SMS and email sequences that nurture leads who do not book on first contact. Five to seven messages over 14 days. You set it up once. It runs for every new lead, forever.",
        },
        {
          icon: CalendarCheck,
          title: "AI appointment booking",
          body: "An AI voice agent or chatbot that books appointments 24/7 without human involvement. Syncs with your calendar. Sends confirmations and reminders. Eliminates phone tag.",
        },
        {
          icon: Star,
          title: "Review and reputation automation",
          body: "After every completed job, an automated sequence asks for a Google review. Happy customers get a direct link. Unhappy ones get routed to you first. Runs on autopilot.",
        },
        {
          icon: Zap,
          title: "CRM workflow automation",
          body: "Lead status updates, task assignments, notification triggers, and pipeline management. Your CRM does the bookkeeping automatically instead of relying on someone to update it manually.",
        },
        {
          icon: Users,
          title: "Database reactivation",
          body: "Automated campaigns to re-engage past customers and cold leads sitting in your CRM. Turn dormant contacts into booked jobs without manual outreach.",
        },
      ],
    },
    {
      type: "table",
      title: "What you need vs. what you do not",
      subtitle:
        "Business owners often overestimate what is required. Here is the reality:",
      headers: ["Required", "Not required"],
      rows: [
        {
          label: "Technical knowledge",
          values: [
            "Can use a smartphone and email",
            "Coding, IT, or software development skills",
          ],
        },
        {
          label: "Team involvement",
          values: [
            "One person who knows your workflow (usually the owner)",
            "A dedicated tech hire or IT department",
          ],
        },
        {
          label: "Existing tools",
          values: [
            "Any CRM, scheduling tool, or even spreadsheets",
            "Enterprise software or custom-built systems",
          ],
        },
        {
          label: "Ongoing maintenance",
          values: [
            "Checking a dashboard occasionally",
            "Server management, code updates, or debugging",
          ],
        },
        {
          label: "Budget",
          values: [
            "$1.5K to $5K for the first automation",
            "$50K+ enterprise implementation budgets",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your business?",
      subtitle:
        "Honest assessment. Automation without a tech team works well in some situations and poorly in others:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You get regular inbound leads but respond too slowly",
            "You have a CRM or scheduling tool, even a basic one",
            "Your bottleneck is response time, follow-up, or manual admin tasks",
            "You are willing to invest $1.5K to $5K in the first build",
            "You have 15 to 30 minutes to explain your current workflow on a call",
            "You want a system that runs without daily babysitting",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You need a custom software product built from scratch",
            "Your process changes every week and is not yet standardized",
            "You need enterprise-grade integrations with legacy systems",
            "You are looking for the cheapest possible option regardless of reliability",
            "You have no existing lead flow to automate (automation amplifies what exists)",
            "You need full-time, in-house technical support on an ongoing basis",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "How to evaluate your options",
      subtitle:
        "Three paths to AI automation for businesses without technical staff. Each has trade-offs:",
      options: [
        {
          icon: Users,
          heading: "Hire a consultant",
          highlighted: true,
          items: [
            "Someone maps your workflow, builds the system, and hands it over",
            "You own everything that gets built, with documentation",
            "Typical cost: $1.5K to $8K per project, 1 to 3 weeks",
            "Best for: businesses that want a working system without learning the tools",
            "You get a system tailored to your specific operations",
          ],
        },
        {
          icon: Wrench,
          heading: "DIY with no-code tools",
          highlighted: false,
          items: [
            "Platforms like Zapier or Make let you build simple automations yourself",
            "Works for single-step triggers (e.g., form submission sends a Slack message)",
            "Breaks down with branching logic, error handling, or multi-step sequences",
            "Time investment is significant if you are not already familiar with the tools",
            "Best for: very simple automations where reliability is not critical",
          ],
        },
        {
          icon: Monitor,
          heading: "All-in-one platform",
          highlighted: false,
          items: [
            "Platforms like GoHighLevel bundle CRM, automation, and communication tools",
            "Monthly subscription ($97 to $497/month) covers many features",
            "Learning curve is real, even though it is marketed as easy",
            "You may pay for 100 features and use 3 of them",
            "Best for: businesses willing to invest time learning a new platform",
          ],
        },
      ],
    },
    {
      type: "case-studies",
      title: "Examples of automation replacing manual work",
      subtitle:
        "These examples show the kinds of operational problems automation can solve for small businesses:",
      studies: [
        {
          industry: "Hospitality",
          headline: "AI voice agent for a Paris cafe",
          body: "The owner needed a way to handle reservation calls during peak hours and after hours. An AI voice agent now answers calls, books tables, and sends confirmations automatically.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce",
          headline: "CRM automation for an online store",
          body: "A small e-commerce team was running on spreadsheets and manual email. Automated CRM workflows now handle lead scoring, follow-up sequences, and customer segmentation.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Info Business",
          headline: "Instagram lead generation automation",
          body: "An info business was manually prospecting on Instagram. Automated discovery and qualification replaced a slow, inconsistent workflow and now delivers qualified leads daily.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question:
        "Do I need to be technical to use the automation after it is built?",
      answer:
        "No. Every system I build comes with a dashboard you can manage without touching code. I document how it works, train your team on the basics, and handle all maintenance during the support period. You run your business; the automation runs in the background.",
    },
    {
      question: "What if something breaks and I do not have a tech person to fix it?",
      answer:
        "Every build includes a 30-day support window. If something breaks, I fix it. For ongoing monitoring and optimization, I offer monthly retainer plans. Since I built the system, I know exactly where to look when something needs attention.",
    },
    {
      question:
        "Can you work with whatever tools I already use?",
      answer:
        "Almost always. I build on platforms like n8n, GoHighLevel, and standard APIs. If you are using a CRM, scheduling tool, or email platform, the automation plugs into what you have. No rip-and-replace required.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most builds go from first call to live in 1 to 3 weeks. A basic lead follow-up workflow is typically 5 to 7 days. A full AI voice agent with booking integration takes 2 to 3 weeks. You will see results as soon as the system is live.",
    },
    {
      question: "What if I do not know what to automate first?",
      answer:
        "That is exactly what the initial call is for. We walk through your current workflows, identify where time and money are leaking, and figure out the highest-impact first move. You do not need to arrive with a plan.",
    },
    {
      question: "Is this different from hiring a marketing agency?",
      answer:
        "Yes. An agency typically sells you a package of services (ads, content, social media). A consultant builds systems that run your operations more efficiently. The automation keeps working after the project ends. You are not paying a monthly retainer for someone to post on Instagram.",
    },
  ],
  faqSubtitle:
    "Practical answers for business owners without technical staff",
  ctaHeading: "Ready to automate without a tech team?",
  ctaText:
    "Book a 30-minute call. We will look at your current workflow, identify the highest-impact automation, and you will leave with a clear direction, whether we work together or not.",
  ctaSubtext:
    "No jargon. No assumptions about your technical knowledge. Just a practical conversation about your business.",
  relatedLinks: [
    {
      label: "Best AI automations for service businesses",
      href: "/best-ai-automation-for-service-businesses",
    },
    {
      label: "Consultant vs. agency vs. DIY",
      href: "/hire-ai-automation-consultant-vs-agency",
    },
    {
      label: "AI automation consultant pricing",
      href: "/ai-automation-consultant-pricing-small-business",
    },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
