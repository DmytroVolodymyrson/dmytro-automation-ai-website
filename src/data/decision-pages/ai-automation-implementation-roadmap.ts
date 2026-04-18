import {
  Map,
  Target,
  Search,
  Wrench,
  Rocket,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-implementation-roadmap",
  metaTitle:
    "AI Automation Implementation Roadmap for Small Business — Step by Step | Dmytro AI",
  metaDescription:
    "A practical implementation roadmap for AI automation in small business. From audit to launch to optimization — clear phases, realistic timelines, and common pitfalls to avoid.",
  badgeText: "Implementation Roadmap",
  badgeIcon: Map,
  h1: "AI Automation Implementation Roadmap for Small Business",
  heroIntro:
    "You have decided to automate. Now what? Most small businesses fail at automation not because the technology is wrong, but because they skip steps, try to do everything at once, or launch without a plan for what comes after. This roadmap gives you a clear, phase-by-phase approach — from initial audit to launch to ongoing optimization — based on what actually works for businesses with 2-20 employees.",
  heroSubtext:
    "Below: five phases of implementation, realistic timelines for each, decision points along the way, and the mistakes that derail most projects.",
  sections: [
    {
      type: "cards",
      title: "Phase 1 — Audit and prioritize (Week 1)",
      subtitle:
        "Before building anything, understand where automation will have the biggest impact:",
      items: [
        {
          icon: Search,
          title: "Map your current workflows",
          body: "Document your top 5 business processes end to end: lead response, follow-up, scheduling, onboarding, and service delivery. For each process, note who does what, how long it takes, and where things break down. You cannot automate what you have not mapped.",
        },
        {
          icon: Target,
          title: "Identify the highest-ROI target",
          body: "Rank your automation opportunities by revenue impact and implementation difficulty. For most service businesses, the winner is speed-to-lead — automating the response to new inquiries. It has the clearest ROI, the simplest implementation, and proves the value of automation to your team.",
        },
        {
          icon: BarChart3,
          title: "Baseline your current metrics",
          body: "Before you automate, measure what you have now: average response time, follow-up consistency, lead conversion rate, hours spent on repetitive tasks. Without a baseline, you cannot prove that automation worked. Spend one week tracking these numbers.",
        },
      ],
    },
    {
      type: "cards",
      title: "Phase 2 — Choose tools and partner (Weeks 2-3)",
      subtitle:
        "The right tools and the right build partner determine 80% of your project's success:",
      items: [
        {
          icon: Wrench,
          title: "Select your automation stack",
          body: "For most small businesses: a CRM (GoHighLevel, HubSpot, or similar), an automation engine (n8n for complex workflows, Zapier for simple ones), and communication channels (SMS, email, voice). If you already have tools in place, build on them rather than replacing everything.",
        },
        {
          icon: Users,
          title: "Decide: DIY, consultant, or agency",
          body: "DIY works for simple, single-platform automations if you have technical comfort. A consultant ($1.5K-$8K per project) is best for custom multi-system workflows. An agency ($5K-$25K+) makes sense for enterprise-scale projects. For most small businesses with 2-3 automation targets, a consultant is the sweet spot.",
        },
        {
          icon: Clock,
          title: "Define scope and timeline",
          body: "Write down exactly what the first automation will do — trigger, actions, and expected outcome. Agree on a fixed timeline and fixed price. Open-ended projects with vague scope are where budgets spiral. A good scope document is one page: what triggers the automation, what it does, what success looks like.",
        },
      ],
    },
    {
      type: "cards",
      title: "Phase 3 — Build and test (Weeks 3-5)",
      subtitle:
        "The build phase is where most of the technical work happens:",
      items: [
        {
          icon: Wrench,
          title: "Build the core workflow",
          body: "The consultant or your team builds the automation based on the agreed scope. For a lead follow-up sequence, this means: connecting the lead source to the CRM, building the response templates, setting up timing logic, adding notification triggers, and configuring the human handoff point.",
        },
        {
          icon: Target,
          title: "Test with real scenarios",
          body: "Do not test with fake data. Run real test leads through the system. Submit your own web form. Call your own number and let it go to voicemail. Send a test inquiry by email. Verify every step fires correctly. Test edge cases: what happens with a duplicate lead? A lead with no phone number? A response outside business hours?",
        },
        {
          icon: Users,
          title: "Train your team",
          body: "Before launch, every team member who interacts with the automation needs to understand: what it does, when to take over from the automation, and how to flag issues. A 30-minute walkthrough with a reference document is usually enough. Teams that skip training abandon the system within 30 days.",
        },
      ],
    },
    {
      type: "cards",
      title: "Phase 4 — Launch and monitor (Weeks 5-6)",
      subtitle:
        "Go live with close monitoring — the first two weeks after launch are critical:",
      items: [
        {
          icon: Rocket,
          title: "Soft launch first",
          body: "Start with the automation running on a subset of leads — one lead source, one service type, or one team member. Monitor every automated action for the first 48 hours. Fix any issues before expanding to all leads. A soft launch catches problems without risking your entire pipeline.",
        },
        {
          icon: BarChart3,
          title: "Monitor daily for two weeks",
          body: "Check every day during the first two weeks: Are messages sending at the right times? Are leads being tagged correctly? Are notifications reaching the right people? Are there any leads falling through the cracks? Daily monitoring catches issues before they become patterns.",
        },
        {
          icon: CheckCircle2,
          title: "Expand to full operation",
          body: "After two weeks of clean operation, expand the automation to all leads and all team members. At this point, the system should handle 80-90% of scenarios correctly. The remaining 10-20% are edge cases you will refine in Phase 5.",
        },
      ],
    },
    {
      type: "cards",
      title: "Phase 5 — Optimize and expand (Month 2+)",
      subtitle:
        "The automation is running. Now make it better and add the next workflow:",
      items: [
        {
          icon: TrendingUp,
          title: "Measure against your baseline",
          body: "Compare your post-automation metrics to the baseline from Phase 1. Response time should be dramatically faster. Follow-up consistency should be near 100%. If metrics are not improving, the automation needs adjustment — not replacement.",
        },
        {
          icon: Target,
          title: "Refine based on real data",
          body: "Which automated messages get responses? Which get ignored? What time of day performs best? After 30 days of data, you have enough to optimize. Rewrite underperforming messages, adjust timing, and add handling for edge cases you discovered during monitoring.",
        },
        {
          icon: Map,
          title: "Plan your next automation",
          body: "With one automation running successfully, you have earned internal trust and have data to support the investment. Go back to your Phase 1 priority list and pick the next target. Each subsequent automation builds faster because the infrastructure (CRM, integrations, team training) is already in place.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Are you ready to start implementing?",
      subtitle:
        "Quick readiness check before committing to a project:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good to go",
          variant: "green",
          items: [
            "You have identified at least one clear automation target",
            "You have a CRM or are willing to set one up",
            "You can invest $1.5K-$5K in the first build",
            "You have 3-5 hours to contribute during the build phase",
            "Your team is open to new workflows",
          ],
        },
        {
          icon: XCircle,
          heading: "Address first",
          variant: "neutral",
          items: [
            "You have not mapped your current workflows",
            "Your processes change weekly — nothing is standardized",
            "You have no budget for both the build and monthly costs",
            "Your team is resistant to technology changes",
            "You want to automate everything at once",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Implementation pitfalls",
      subtitle:
        "These derail more projects than technical challenges:",
      items: [
        {
          icon: AlertTriangle,
          title: "Trying to automate everything in Phase 1",
          body: "The most common failure mode. You want lead follow-up AND onboarding AND review requests AND reporting all at once. The result: a complex system that takes 3 months to build, launches with bugs, and overwhelms your team. Start with one workflow. Prove it works. Then expand.",
        },
        {
          icon: Clock,
          title: "Launching without team training",
          body: "Your team gets automated notifications they do not understand, leads are handled twice (once by automation, once manually), and nobody trusts the system. Two weeks later, the automation is turned off. Thirty minutes of training prevents this entirely.",
        },
        {
          icon: Users,
          title: "No owner after launch",
          body: "Every automation needs someone responsible for monitoring it. Not maintaining the code — just checking that it is working correctly. When nobody owns it, small issues compound into big failures that only surface when a client complains.",
        },
        {
          icon: BarChart3,
          title: "Skipping the measurement phase",
          body: "Without baseline metrics, you cannot prove ROI. Without proving ROI, you cannot justify the next automation investment. Measure before, during, and after. The numbers are what build organizational confidence in automation.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "How long does the full implementation take?",
      answer:
        "For a single automation workflow (lead follow-up, missed call text-back, onboarding sequence): 4-6 weeks from audit to optimized operation. For a multi-workflow system: 8-12 weeks. The build itself is typically 1-3 weeks. The rest is planning, testing, monitoring, and optimization.",
    },
    {
      question: "What is the minimum viable automation to start?",
      answer:
        "A missed call text-back or web form instant response. Either can be built in 3-5 days for $1K-$2K. Both have immediate, measurable ROI. They prove the concept and build your team's confidence before you invest in more complex systems.",
    },
    {
      question: "Can I implement in phases with a limited budget?",
      answer:
        "Absolutely — phased implementation is the recommended approach regardless of budget. Phase 1: one core automation ($1.5K-$3K). Phase 2: add 1-2 supporting workflows ($2K-$4K) after proving Phase 1 ROI. Phase 3: optimization and expansion. Most businesses space phases 4-8 weeks apart.",
    },
    {
      question: "Who should own the automation after launch?",
      answer:
        "Designate one person on your team as the automation owner. They do not need technical skills — just the responsibility to check that automations are running correctly, flag issues, and request adjustments. For hands-off operation, a consultant maintenance retainer ($100-$300/month) handles monitoring and updates.",
    },
    {
      question: "What if my automation is not working as expected?",
      answer:
        "First, check the basics: are triggers firing? Are messages sending? Are notifications reaching the right people? Most issues are configuration problems, not fundamental design flaws. If the automation is running but not producing results, the problem is usually message copy, timing, or the wrong automation target. Refine before rebuilding.",
    },
  ],
  faqSubtitle:
    "Practical answers about implementing AI automation",
  ctaHeading: "Ready to start your automation roadmap?",
  ctaText:
    "Book a 30-minute call. We will walk through your current situation, identify the right Phase 1 automation, and give you a clear timeline and fixed-price quote.",
  ctaSubtext:
    "No obligation. You will leave with a clear plan whether or not you work with us.",
  relatedLinks: [
    { label: "AI automation audit checklist", href: "/ai-automation-audit-checklist" },
    { label: "AI automation cost guide", href: "/ai-automation-cost-small-business" },
    { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
    { label: "AI automation consultant guide", href: "/ai-automation-consultant-small-business" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
