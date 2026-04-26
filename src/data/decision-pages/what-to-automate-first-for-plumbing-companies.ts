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
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-plumbing-companies",
  metaTitle:
    "What to Automate First for Plumbing Companies — Highest-ROI Plumbing Workflows | Dmytro AI",
  metaDescription:
    "Choosing your first plumbing automation project? Practical guide to picking between missed-call recovery, lead follow-up, booked-job scheduling, and live AI phone answering for plumbers.",
  badgeText: "Plumbing Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Plumbing Companies",
  heroIntro:
    "For plumbing companies, the most effective first step into automation is rarely a massive system overhaul. It's usually a targeted fix for one specific operational leak. Most plumbers find the highest immediate ROI by focusing on one of four areas: missed-call recovery when emergency calls hit voicemail after hours, lead follow-up when web inquiries or referral leads aren't contacted fast enough, job scheduling and coordination when the office is drowning in reminders and reschedule calls, or live AI phone answering for high-volume shops that need more than just a callback system. The right choice depends on where you're losing money right now: before the customer talks to you, after they've sent an inquiry, or after the job is already on the schedule.",
  heroSubtext:
    "This guide helps you identify your biggest bottleneck and choose the first plumbing workflow to automate. We'll compare the options, look at the proof, and help you decide when to start small rather than overcomplicating your first automation project.",
  sections: [
    {
      type: "cards",
      title: "Common first steps for plumbing automation",
      subtitle:
        "You don't need to automate every part of your plumbing business at once. Start where the inefficiency is costing you most:",
      items: [
        {
          icon: MessageSquare,
          title: "Missed-call recovery",
          body: "Focus here if you're losing emergency jobs—like burst pipes or water heater failures—because you can't answer the phone 24/7. This is the best first move when you need to capture demand that arrives when the office is closed or the team is busy.",
        },
        {
          icon: Zap,
          title: "Lead follow-up",
          body: "Start here if you get plenty of inquiries from your website, Google LSAs, or Yelp, but your response time is inconsistent. Plumbing is a speed game; the first company to respond usually gets the job.",
        },
        {
          icon: CalendarClock,
          title: "Job scheduling and follow-through",
          body: "Choose this if your calendar is full, but your office time is consumed by confirmations, tech handoffs, and reschedule requests. This is the best fix when the problem is operational drag after the job is booked.",
        },
        {
          icon: Phone,
          title: "Live AI phone answering",
          body: "Start here if you need more than a text-back. If your callers expect a live conversation to triage an emergency or book a service call, and you can't staff a 24/7 dispatch desk, a live AI voice agent is the answer.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Choosing your first plumbing workflow",
      subtitle:
        "Look at where your current process breaks down most often to find your starting point:",
      options: [
        {
          icon: MessageSquare,
          heading: "Start with missed-call recovery",
          highlighted: true,
          items: [
            "Emergency calls often hit voicemail when the team is in the field",
            "You want a simple, high-impact fix for after-hours demand",
            "You're losing 'low-hanging fruit' jobs because you can't text back fast enough",
            "Closest next page: /missed-call-text-back-for-plumbing-companies",
          ],
        },
        {
          icon: Zap,
          heading: "Start with lead follow-up",
          items: [
            "You have steady inquiry volume, but follow-up is manual and slow",
            "Web forms and estimate requests sit for hours or days",
            "Improving speed-to-lead is your top priority for growth",
            "Closest next page: /ai-lead-follow-up-for-plumbing-companies",
          ],
        },
        {
          icon: CalendarClock,
          heading: "Start with job scheduling and follow-through",
          items: [
            "Jobs are getting booked, but the follow-up and reminder process is messy",
            "You're losing time to 'where is the tech?' calls and manual confirmations",
            "The office-to-field handoff is a major point of friction",
            "Closest next page: /appointment-scheduling-and-reminder-automation-for-plumbing-companies",
          ],
        },
        {
          icon: Phone,
          heading: "Start with live AI phone answering",
          items: [
            "A simple text-back isn't enough for the complexity of your typical calls",
            "You need to triage emergencies and book into a calendar live on the phone",
            "You want to provide a professional 'big company' feel without the overhead of an answering service",
            "Closest next page: /ai-phone-answering-for-plumbing-companies",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "Plumbing Cluster: Choosing the Right Page",
      subtitle:
        "How this guide fits into the rest of the plumbing-specific resources:",
      headers: ["Target Audience", "Core Purpose"],
      rows: [
        {
          label: "What to automate first for plumbing companies",
          values: [
            "Owners who are ready to start but aren't sure which specific project to fund first.",
            "Helps prioritize between missed calls, lead response, scheduling, and phone coverage.",
          ],
        },
        {
          label: "AI automation for plumbing companies",
          values: [
            "Owners looking for a total overview of how AI fits into their whole operation.",
            "Explains the broader system across calls, lead response, booked-job coordination, seasonal outreach, and where AI helps overall.",
          ],
        },
        {
          label: "Plumbing lead follow-up automation",
          values: [
            "Plumbers who know their main problem is slow response to new inquiries.",
            "Focuses exclusively on speed-to-lead and first-touch conversion.",
          ],
        },
        {
          label: "AI phone answering for plumbing companies",
          values: [
            "Shops that need a sophisticated, live-voice solution for dispatch and triage.",
            "Focuses on voice agent capabilities, emergency handling, and live booking.",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good starting point for you?",
      subtitle:
        "This guide is designed for plumbing business owners who want to see measurable results without the risk of a 'boil the ocean' project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already point to one obvious leak: missed calls, slow inquiry response, booked-job confusion, or overloaded live phone coverage",
            "You want a project that pays for itself quickly through recovered jobs or saved time",
            "The office is losing time to repetitive follow-up and communication work instead of customer support",
            "Seasonal peaks and emergency call windows make response discipline matter commercially",
            "You want a practical recommendation instead of another generic plumbing software pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The company still has very little inbound volume and no clear workflow pressure yet",
            "The real problem is weak demand, bad pricing, or technician capacity — not follow-through",
            "Nobody agrees on who owns calls, callbacks, booked-job updates, or customer records at all",
            "You are trying to automate everything at once before proving one narrower workflow first",
            "Manual discipline is already strong and there is no visible operational leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first plumbing automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost jobs or repeated office drag.",
      blocks: [
        {
          heading: "Start where delay already costs you revenue",
          body: "If service calls are still being lost before anyone responds, missed-call recovery usually comes first. If web forms, quote requests, and callbacks sit too long after the inquiry lands, lead follow-up comes first. If the company already books plenty of jobs but the office keeps fighting reminder, reschedule, and handoff chaos, the booked-job workflow comes first. The decision should follow the leak, not whichever automation sounds the most advanced.",
        },
        {
          heading: "Keep the first workflow small enough to run cleanly",
          body: "A narrower first build gives you faster time to value and fewer places to hide a broken process. Most plumbing companies learn more from one disciplined workflow than from a half-finished all-in-one rollout that touches every phone path, every reminder, and every CRM trigger before the team is ready.",
        },
        {
          heading: "Use live AI phone coverage only when the lighter fix stops being enough",
          body: "Many plumbing companies should start with missed-call recovery or lead follow-up before they jump into full live AI phone answering. Those lighter layers are often enough to protect demand quickly. If call urgency, after-hours volume, or caller expectations prove that the lighter fix is not enough, then it becomes easier to justify the heavier phone layer from real operating evidence.",
        },
        {
          heading: "Let the first workflow shape the broader system later",
          body: "Once one narrow plumbing workflow is working, you learn where the real bottlenecks and message failures actually live. That makes the broader rollout safer because it is now grounded in real call patterns, booking behavior, and office workload instead of assumptions.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first plumbing automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest project instead of the clearest leak",
          body: "Many plumbing companies jump toward a full automation stack when the real issue is still one stage: calls, first response, scheduling continuity, or after-hours coverage. Bigger scope feels strategic, but it often delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring office time as a real cost",
          body: "DIY work is not free when the owner, dispatcher, or CSR spends weeks patching reminders, follow-up rules, and routing logic. The first workflow should be scoped against both cash cost and the time drag of getting it wrong.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: missed calls, cold inquiries, callback-heavy schedule changes, or after-hours demand nobody is covering. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
        {
          icon: ShieldCheck,
          title: "Trying to automate judgment-heavy dispatch decisions too early",
          body: "The first plumbing workflow should improve timing, consistency, and visibility — not improvise technician assignment logic, pricing exceptions, or nuanced service judgment without clear guardrails. Use automation to support dispatch and office staff, not to fake operational judgment before the inputs are reliable.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "The plumbing cluster already has several live child pages covering lead response and phone handling. This guide sits one level earlier to help you decide where to start.",
      studies: [
        {
          industry: "Plumbing industry cluster",
          headline: "The live plumbing pages already isolate the exact first-project options this page is comparing",
          body: "The plumbing parent page plus the lead-follow-up, missed-call, and live-phone children already break the cluster into real workflow stages. This page helps a plumbing business owner decide which of those narrower workflows should come first.",
          link: "/ai-automation-for-plumbing-companies",
        },
        {
          industry: "Direct service-business proof",
          headline: "The Paris Cafe voice agent case study proves the value of immediate call handling",
          body: "While it is a different industry, the principle is identical: capturing demand at the moment of interest. This case study shows how an AI voice agent can book appointments without human intervention when the shop is busy.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "CRM and follow-up evidence",
          headline: "The WheelsFeels CRM case study demonstrates why structured lead ownership matters",
          body: "This project shows how automated SMS and email follow-up can manage thousands of leads with total consistency—logic that transfers directly to a plumbing service desk or emergency dispatch flow.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI Automation for Plumbing Companies", href: "/ai-automation-for-plumbing-companies" },
        { label: "Plumbing Lead Follow-Up Automation", href: "/ai-lead-follow-up-for-plumbing-companies" },
        { label: "AI Phone Answering for Plumbing Companies", href: "/ai-phone-answering-for-plumbing-companies" },
        { label: "Missed Call Text-Back for Plumbing Companies", href: "/missed-call-text-back-for-plumbing-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should a plumbing company automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: missed-call recovery if emergency calls are still being lost before anyone responds, lead follow-up if new inquiries sit too long after they arrive, or booked-job scheduling and follow-through if the office keeps fighting reminder and reschedule chaos.",
    },
    {
      question: "How is this different from the broader plumbing automation page?",
      answer:
        "The broader plumbing page explains the whole operating picture: calls, follow-up, booked-job communication, and where AI helps overall. This page stays one step earlier and helps you choose which single workflow should come first before you try to automate more of the plumbing operation.",
    },
    {
      question: "When should lead follow-up come before missed-call recovery?",
      answer:
        "Choose lead follow-up first when the bigger leak is not unanswered calls but slow response to web forms, quote requests, and inbound inquiries that are already entering your systems. Choose missed-call recovery first when the business is still losing emergency plumbing calls before anyone gets the chance to respond.",
    },
    {
      question: "When should booked-job scheduling come before live AI phone answering?",
      answer:
        "Choose booked-job scheduling first when demand is already getting booked and the real pain is confirmations, reminders, reschedules, or office-to-tech handoff. Choose live AI phone answering first when the front-end phone volume is still the bottleneck and callers need a real answer before the job even exists on the calendar.",
    },
    {
      question: "Do most plumbing companies need a big all-in-one automation build right away?",
      answer:
        "Usually no. Most small and mid-sized plumbing companies get better ROI by fixing one bounded workflow first, proving it works, and then expanding. The first project should be small enough to run cleanly and measurable enough to justify the next layer.",
    },
  ],
  relatedPages: [
    {
      title: "AI Automation for Plumbing Companies",
      description:
        "Broad plumbing automation overview covering calls, lead response, scheduling, and where AI actually helps.",
      href: "/ai-automation-for-plumbing-companies",
    },
    {
      title: "Plumbing Lead Follow-Up Automation",
      description:
        "Early-funnel plumbing workflow focused on speed-to-lead, inquiry response, and short nurture before scheduling takes over.",
      href: "/ai-lead-follow-up-for-plumbing-companies",
    },
    {
      title: "AI Phone Answering for Plumbing Companies",
      description:
        "Heavier plumbing phone-coverage guide for live call handling, emergency triage, and CSR relief when lighter fixes are not enough.",
      href: "/ai-phone-answering-for-plumbing-companies",
    },
    {
      title: "Missed Call Text-Back for Plumbing Companies",
      description:
        "Simple, high-impact fix for unanswered plumbing calls and after-hours demand.",
      href: "/missed-call-text-back-for-plumbing-companies",
    },
  ],
  bottomCta: {
    heading: "Need help choosing the first plumbing workflow to automate?",
    body: "Book a free 20-minute audit. We will look at where your plumbing company is actually leaking jobs or office time today, tell you which workflow should come first, and show you what a smaller first build would need to include.",
  },
};

export default data;
