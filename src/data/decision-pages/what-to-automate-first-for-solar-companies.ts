import {
  Workflow,
  MessageSquare,
  Zap,
  CalendarClock,
  Phone,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Clock3,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-solar-companies",
  metaTitle:
    "What to Automate First for Solar Companies — Highest-ROI Solar Workflows | Dmytro AI",
  metaDescription:
    "Choosing your first solar automation project? Practical guide to picking between lead follow-up, utility bill collection, site visit scheduling, and AI phone answering for solar installers.",
  badgeText: "Solar Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Solar Companies",
  heroIntro:
    "For solar companies, the most effective first step into automation is rarely a massive system overhaul. It's usually a targeted fix for one specific operational leak. Most solar installers find the highest immediate ROI by focusing on one of four areas: lead follow-up when web inquiries or ad leads aren't contacted fast enough, utility bill collection when quotes are delayed because you're waiting on homeowner data, site visit and consultation scheduling when the office is drowning in calendar coordination, or AI phone answering for high-volume shops that need to triage 'is solar right for me?' inquiries. The right choice depends on where you're losing momentum right now: before the lead is qualified, while you're waiting for quote data, or after the consultation is already on the schedule.",
  heroSubtext:
    "This guide helps you identify your biggest bottleneck and choose the first solar workflow to automate. We'll compare the options, look at the proof, and help you decide when to start small rather than overcomplicating your first automation project.",
  sections: [
    {
      type: "cards",
      title: "Common first steps for solar automation",
      subtitle:
        "You don't need to automate every part of your solar business at once. Start where the inefficiency is costing you most:",
      items: [
        {
          icon: Zap,
          title: "Lead follow-up",
          body: "Focus here if you're getting plenty of inquiries from Facebook, Google, or local leads, but your response time is inconsistent. Solar is a high-ticket, high-competition game; the first company to respond and qualify the lead usually wins the contract.",
        },
        {
          icon: ClipboardList,
          title: "Utility bill collection",
          body: "Start here if your quotes are stalled because you're waiting on homeowners to send their utility bills or usage data. Automating this collection step saves days of manual follow-up and keeps the deal moving while the buyer is still interested.",
        },
        {
          icon: CalendarClock,
          title: "Site visit and consultation scheduling",
          body: "Choose this if your sales team is busy, but your office time is consumed by confirmations, reschedules, and 'are you home?' calls. This is the best fix when the problem is operational drag after the lead is already interested.",
        },
        {
          icon: Phone,
          title: "AI phone answering",
          body: "Start here if you get a high volume of early-stage phone inquiries. If you can't staff a 24/7 desk to answer basic qualification questions and triage 'is solar worth it?' calls, a live AI voice agent is the answer.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Choosing your first solar workflow",
      subtitle:
        "Look at where your current process breaks down most often to find your starting point:",
      options: [
        {
          icon: Zap,
          heading: "Start with lead follow-up",
          highlighted: true,
          items: [
            "You have steady inquiry volume, but follow-up is manual and slow",
            "Ad leads sit for hours or days before someone calls them",
            "Improving speed-to-lead is your top priority for growth",
            "Closest next page: /ai-lead-follow-up-for-solar-companies",
          ],
        },
        {
          icon: ClipboardList,
          heading: "Start with utility bill collection",
          items: [
            "Quotes are delayed because homeowners forget to send bills",
            "The team spends hours chasing documentation via email/text",
            "You want to shorten the time between inquiry and quote",
            "Closest next page: /utility-bill-collection-automation-for-solar-companies",
          ],
        },
        {
          icon: CalendarClock,
          heading: "Start with consultation scheduling",
          items: [
            "Sales appointments are getting booked, but the reminder process is messy",
            "You're losing time to reschedules and no-show site visits",
            "The office-to-sales handoff is a major point of friction",
            "Closest next page: /ai-automation-for-solar-companies",
          ],
        },
        {
          icon: Phone,
          heading: "Start with AI phone answering",
          items: [
            "You're missing inbound calls when the office is busy or closed",
            "Callers need immediate answers to qualify their home for solar",
            "You want a professional 'big company' feel without the overhead of an answering service",
            "Closest next page: /ai-automation-for-solar-companies",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "Solar Cluster: Choosing the Right Page",
      subtitle:
        "How this guide fits into the rest of the solar-specific resources:",
      headers: ["Target Audience", "Core Purpose"],
      rows: [
        {
          label: "What to automate first for solar companies",
          values: [
            "Owners who are ready to start but aren't sure which specific project to fund first.",
            "Helps prioritize between lead response, bill collection, scheduling, and phone coverage.",
          ],
        },
        {
          label: "AI automation for solar companies",
          values: [
            "Owners looking for a total overview of how AI fits into their whole operation.",
            "Explains the broader system across calls, lead response, bill collection, and project coordination.",
          ],
        },
        {
          label: "Solar lead follow-up automation",
          values: [
            "Installers who know their main problem is slow response to new inquiries.",
            "Focuses exclusively on speed-to-lead and first-touch conversion.",
          ],
        },
        {
          label: "Utility bill collection for solar quotes",
          values: [
            "Teams that know their bottleneck is documentation and quote data capture.",
            "Focuses on automated bill requests, follow-ups, and data centralisation.",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good starting point for you?",
      subtitle:
        "This guide is designed for solar business owners who want to see measurable results without the risk of a 'boil the ocean' project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already point to one obvious leak: slow lead response, bill collection delays, or scheduling confusion",
            "You want a project that pays for itself quickly through more closed deals",
            "The office is losing time to repetitive follow-up work instead of moving projects forward",
            "High ad spend makes every lead too expensive to lose to manual delay",
            "You want a practical recommendation instead of another generic CRM pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The company still has very little lead volume and no clear workflow pressure yet",
            "The real problem is installer capacity, permitting delays, or hardware supply — not follow-through",
            "Nobody agrees on who owns leads, quotes, site visits, or customer records at all",
            "You are trying to automate every stage of the project lifecycle at once",
            "Manual discipline is already strong and there is no visible operational leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first solar automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost deals or repeated office drag.",
      blocks: [
        {
          heading: "Start where delay already costs you contracts",
          body: "If web leads are being lost because they go cold before anyone responds, lead follow-up usually comes first. If the team is already talking to leads but the process stalls because bills aren't being collected, utility bill collection comes first. If you're booking consultations but fighting no-shows and coordinate-chaos, site visit scheduling comes first. The decision should follow the leak, not whichever tool sounds the most interesting.",
        },
        {
          heading: "Keep the first workflow small enough to run cleanly",
          body: "A narrower first build gives you faster time to value and fewer places to hide a broken process. Most solar companies learn more from one disciplined workflow than from a half-finished all-in-one rollout that touches every stage of the project before the team is ready.",
        },
        {
          heading: "Prioritize documentation capture if quoting is the bottleneck",
          body: "In solar, the distance between inquiry and quote is often determined by homeowner cooperation. Automating the 'please send your bill' chase is one of the highest-ROI moves for solar installers because it removes human friction from the most sensitive part of the sales funnel.",
        },
        {
          heading: "Let the first workflow shape the broader system later",
          body: "Once one narrow solar workflow is working, you learn where the real bottlenecks and message failures actually live. That makes the broader rollout safer because it is now grounded in real homeowner behavior and office workload instead of assumptions.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first solar automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest project instead of the clearest leak",
          body: "Many solar companies jump toward a full project management stack when the real issue is still one stage: lead response, documentation capture, or scheduling continuity. Bigger scope feels strategic, but it often delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring office time as a real cost",
          body: "DIY work is not free when the owner or sales manager spends weeks patching reminders, follow-up rules, and routing logic. The first workflow should be scoped against both cash cost and the time drag of getting it wrong.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: lost ad leads, weeks of quote lag, no-show site visits, or unanswered calls. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
        {
          icon: ShieldCheck,
          title: "Trying to automate nuanced project judgment too early",
          body: "The first solar workflow should improve timing, consistency, and visibility — not improvise design logic, site viability exceptions, or complex project judgment without clear guardrails. Use automation to support the sales and project teams, not to fake judgment before the data is reliable.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "The solar cluster already has live pages covering lead response and documentation collection. This guide sits one level earlier to help you decide where to start.",
      studies: [
        {
          industry: "Solar industry cluster",
          headline: "The live solar pages already isolate the exact first-project options this page is comparing",
          body: "The solar parent page plus the lead-follow-up and utility-bill children already break the cluster into real workflow stages. This page helps a solar installer decide which of those narrower workflows should come first.",
          link: "/ai-automation-for-solar-companies",
        },
        {
          industry: "Direct service-business proof",
          headline: "The Paris Cafe voice agent case study proves the value of immediate call handling",
          body: "While it is a different industry, the principle is identical: capturing demand at the moment of interest. This case study shows how an AI voice agent can book appointments without human intervention when the team is busy.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "CRM and follow-up evidence",
          headline: "The WheelsFeels CRM case study demonstrates why structured lead ownership matters",
          body: "This project shows how automated SMS and email follow-up can manage thousands of leads with total consistency—logic that transfers directly to a solar sales desk or quote follow-up flow.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI Automation for Solar Companies", href: "/ai-automation-for-solar-companies" },
        { label: "Solar Lead Follow-Up Automation", href: "/ai-lead-follow-up-for-solar-companies" },
        { label: "Utility Bill Collection for Solar", href: "/utility-bill-collection-automation-for-solar-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should a solar company automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: lead follow-up if web and ad leads sit too long after they arrive, utility bill collection if quotes are delayed because you're waiting on data, or consultation scheduling if you're fighting no-show site visits.",
    },
    {
      question: "How is this different from the broader solar automation page?",
      answer:
        "The broader solar page explains the whole operating picture: leads, quotes, scheduling, and project coordination. This page stays one step earlier and helps you choose which single workflow should come first before you try to automate more of the solar operation.",
    },
    {
      question: "When should lead follow-up come before bill collection?",
      answer:
        "Choose lead follow-up first when the bigger leak is not documentation but first-touch response. If your speed-to-lead is over 5 minutes, fixing response time will usually produce the highest immediate ROI. Choose bill collection first when you have leads talking to you, but the sales cycle is stalling because documentation capture is manual.",
    },
    {
      question: "Do most solar companies need a full project management build right away?",
      answer:
        "Usually no. Most small and mid-sized solar installers get better ROI by fixing one bounded workflow first, proving it works, and then expanding. The first project should be small enough to run cleanly and measurable enough to justify the next stage.",
    },
  ],
  relatedPages: [
    {
      title: "AI Automation for Solar Companies",
      description:
        "Broad solar automation overview covering lead generation, quotes, scheduling, and where AI actually helps.",
      href: "/ai-automation-for-solar-companies",
    },
    {
      title: "Solar Lead Follow-Up Automation",
      description:
        "Early-funnel solar workflow focused on speed-to-lead, inquiry response, and short nurture before the quote stage.",
      href: "/ai-lead-follow-up-for-solar-companies",
    },
    {
      title: "Utility Bill Collection for Solar",
      description:
        "Specific solar workflow focused on automating document capture and quote data to shorten the sales cycle.",
      href: "/utility-bill-collection-automation-for-solar-companies",
    },
  ],
  bottomCta: {
    heading: "Need help choosing the first solar workflow to automate?",
    body: "Book a free 20-minute audit. We will look at where your solar company is actually leaking deals or office time today, tell you which workflow should come first, and show you what a smaller first build would need to include.",
  },
};

export default data;
