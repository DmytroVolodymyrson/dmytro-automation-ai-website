import {
  Sun,
  Users,
  ArrowRightLeft,
  MessageSquare,
  ClipboardCheck,
  Clock3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Star,
  Shield,
  BatteryCharging,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "referral-request-automation-for-solar-companies",
  metaTitle:
    "Referral Request Automation for Solar Companies — Turn Completed Installs Into More Warm Introductions | Dmytro AI",
  metaDescription:
    "Referral request automation for solar companies. Ask at the right moment after install and PTO, separate referral asks from review asks, route homeowner introductions and second-property replies fast, and turn completed projects into cleaner word-of-mouth growth.",
  badgeText: "Solar Workflow",
  badgeIcon: Users,
  h1: "Referral Request Automation for Solar Companies",
  heroIntro:
    "A lot of solar companies say referrals are one of their best lead sources, then handle referrals like an afterthought. The system is installed, PTO is granted or close, the homeowner sounds happy enough, and then the project quietly disappears from the team's active attention. No clean moment to ask for an introduction. No separate path for a referral versus a review. No fast routing when a homeowner mentions a neighbor, a family member, or another property. Referral request automation for solar companies fixes that narrower post-install advocacy workflow. It gives the team a practical way to ask for introductions at the right moment, keep the ask distinct from the public-review path, and route warm referral replies back to a human before that momentum fades.",
  heroSubtext:
    "Below: what a practical solar referral workflow should actually handle, how it stays distinct from the live solar review page and broader parent page, what guardrails matter, and what proof honestly supports this page without pretending there is already a dedicated solar referral-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What solar referral automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the advocacy layer after install and homeowner handoff — not on early lead response, not on quote recovery, and not on general reactivation months later.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A believable post-install trigger",
          body: "The workflow should start from a real closeout signal: install complete, punch-list items handled, PTO granted or clearly imminent, final walkthrough finished, or another milestone the team already trusts. If the trigger is sloppy, the referral ask lands before the homeowner experience actually feels settled.",
        },
        {
          icon: Star,
          title: "A separate referral path from the review path",
          body: "A homeowner may be happy enough to recommend you privately before they are ready for a public review, and some projects need a review ask later even if a referral intro happens right away. Strong automation keeps those asks separate so the team is not stacking every post-install request into one awkward message.",
        },
        {
          icon: Sun,
          title: "Timing that matches how solar projects really feel complete",
          body: "For some installs, the right moment is shortly after PTO or a clean final handoff. For others, a softer check-in first makes more sense. Good referral automation respects the difference between 'panels are on the roof' and 'the homeowner actually feels comfortable recommending us'.",
        },
        {
          icon: BatteryCharging,
          title: "Referral opportunities tied to real solar buying behavior",
          body: "Solar referrals often come from neighbors who saw the install, family who ask about savings, friends who are starting the quote process, or homeowners who mention another property. The workflow should make those moments easy to capture instead of hoping the office remembers to ask later.",
        },
        {
          icon: ArrowRightLeft,
          title: "Fast routing when someone names a referral or second property",
          body: "If a homeowner replies with a referral lead, asks you to contact a neighbor, or mentions another building, the office or rep should get that context immediately. The value comes from the handoff after the ask works, not from the outbound message alone.",
        },
        {
          icon: MessageSquare,
          title: "Simple language that sounds like a real solar company",
          body: "The strongest ask sounds practical and specific to a recently completed solar project, not like a generic marketing blast. Homeowners should understand exactly what kind of intro is useful and how easy it is to reply.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the solar cluster",
      subtitle:
        "These pages can coexist when each one owns a different stage in the solar customer lifecycle:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for solar companies",
          values: [
            "Owners evaluating the broader solar operating system across lead response, utility-bill collection, scheduling, project updates, phone coverage, and post-install follow-through",
            "Explains the whole solar stack instead of isolating one post-install advocacy workflow",
          ],
        },
        {
          label: "Project status update automation for solar companies",
          values: [
            "Teams getting buried in homeowner update questions during permitting, install, inspection, and PTO",
            "Focuses on in-flight milestone communication while the project is still moving, not on the narrower moment when the homeowner is ready to introduce someone else",
          ],
        },
        {
          label: "Review request automation for solar companies",
          values: [
            "Companies tightening the public reputation layer after install and PTO",
            "Focuses on review timing, unhappy-reply routing, and local-trust signals rather than asking for private introductions or another property conversation",
          ],
        },
        {
          label: "Referral request automation for solar companies",
          values: [
            "Companies that finish solid projects but still rely on luck for neighbor introductions, family referrals, and second-property conversations",
            "Focuses narrowly on post-install referral timing, distinct advocacy asks, and routing warm homeowner replies back to the business quickly",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your solar company?",
      subtitle:
        "Best fit when the team already delivers good homeowner outcomes but still has no disciplined referral layer after the project is done.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You complete enough installs that referrals should already be a meaningful growth channel",
            "Some homeowners naturally mention neighbors or friends, but there is no clean workflow to turn that goodwill into introductions",
            "The business already has a decent post-install experience and can route warm replies quickly once they come in",
            "Your market includes visible neighborhood installs, family referrals, or multi-property homeowners where one good project can open more doors",
            "You want a narrower post-install advocacy workflow before forcing a much bigger CRM or lifecycle rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still missed calls, weak first response, or quotes going cold before the project is sold",
            "Install quality, billing clarity, monitoring setup, or punch-list handling is too inconsistent to justify more post-install asks right now",
            "The company completes too few projects for referral discipline to matter much yet",
            "Nobody can follow up quickly when a homeowner names a referral or another property",
            "You are looking for one giant post-sale broadcast instead of a clean, milestone-based referral workflow",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep solar referral automation useful instead of awkward",
      subtitle:
        "The goal is cleaner advocacy follow-through, not more noise after the system is installed.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not stack every post-install ask into one message",
          body: "A homeowner does not need a review request, a referral ask, a support survey, and an upsell prompt all at once. Stronger workflows separate those moments so the next message still feels natural.",
        },
        {
          icon: Shield,
          title: "Protect service recovery before the referral ask",
          body: "If PTO is unclear, monitoring still needs setup, billing questions are open, or the homeowner has a loose-end concern, the workflow should route that back inside first. Referral automation only helps if the customer experience actually earned an introduction.",
        },
        {
          icon: Users,
          title: "Keep the ask specific to how solar referrals actually happen",
          body: "Generic 'send us referrals' copy underperforms. Better asks reference the real scenarios: a neighbor asking about the install, a friend exploring solar now, a family member with high bills, or another property the homeowner mentioned already.",
        },
        {
          icon: BarChart3,
          title: "Measure introductions and booked conversations, not just messages sent",
          body: "The KPI is not how many referral asks went out. It is whether more completed projects produce real homeowner introductions, second-property conversations, and fast follow-up on those opportunities.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical solar referral workflow usually works",
      subtitle:
        "The clean version is simple: finish the project well, wait until the homeowner experience feels settled, make a clear advocacy ask, and route any useful reply back to a human fast.",
      blocks: [
        {
          heading: "A real closeout milestone starts the advocacy stage",
          body: "The trigger should come from a milestone the solar team already respects: install complete plus no open issues, PTO granted, a final handoff call, or another explicit closeout marker. Once that signal is clean, the workflow finally has a believable moment to ask for more than silence.",
        },
        {
          heading: "The first touch can confirm that the homeowner is actually in a good position to recommend you",
          body: "Some solar projects are ready for a referral ask quickly. Others need a softer check-in first so the homeowner can raise a billing, monitoring, or completion question before the business asks for an introduction. That guardrail matters more than fancy wording.",
        },
        {
          heading: "Satisfied homeowners get a simple referral prompt tied to realistic next steps",
          body: "The best asks point somewhere practical: a neighbor who noticed the install, a family member who keeps asking about bills, a friend starting the quote process, or another property that could use a solar conversation. The message should make it easy to reply with a name, intro, or question.",
        },
        {
          heading: "Warm replies move back to the office or rep with context attached",
          body: "If the homeowner names a referral, asks for follow-up on another property, or wants to connect you with someone, the business should inherit that conversation with enough project context to move quickly. That is the real value of the workflow — not the outbound text itself, but the speed and clarity of the handoff after it works.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published solar-specific referral-automation case study on the site yet. The honest support comes from the live solar parent page, the live solar review-request child, the generic referral-request guide, and the published CRM case study that proves stage visibility and human handoff create recoverable value after a meaningful milestone.",
      studies: [
        {
          industry: "Solar parent page",
          headline: "The live solar parent already names referral and review requests as a real post-install workflow family",
          body: "The broader solar page explicitly frames referral growth as part of the operating system once the install and PTO journey are effectively complete. This child page narrows that broader promise into one buyer decision: how to ask for introductions cleanly after a completed project.",
          link: "/ai-automation-for-solar-companies",
        },
        {
          industry: "Solar reputation adjacency",
          headline: "The live solar review-request page proves the cluster already isolates post-install advocacy into narrower children",
          body: "That page focuses on public-review timing and unhappy-reply routing. This referral page sits beside it, handling the private-introduction layer instead of public reputation proof. The distinction is operationally real and worth its own page.",
          link: "/review-request-automation-for-solar-companies",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "The 5,600+ contact CRM case study proves why milestone-based routing and human handoff matter after a meaningful customer event",
          body: "That published case study is not about solar referrals, but it proves the same operating mechanics: once a record crosses an important milestone, the next action needs ownership, visibility, and fast follow-up instead of depending on memory. This page applies that principle to post-install referral asks.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
        { label: "Review request automation for solar companies", href: "/review-request-automation-for-solar-companies" },
        { label: "What to automate first for solar companies", href: "/what-to-automate-first-for-solar-companies" },
        { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from review request automation for solar companies?",
      answer:
        "Review-request automation focuses on public social proof: review timing, unhappy-reply routing, and local-trust signals. Referral request automation focuses on private introductions: neighbors, friends, family members, and second-property conversations. They can support each other, but they should not be the same generic message or the same timing rule.",
    },
    {
      question: "When should a solar company ask for referrals?",
      answer:
        "Usually after the project feels truly settled: install is done, loose-end concerns are handled, and PTO or final handoff has put the homeowner in a position to recommend you comfortably. Some projects are ready quickly. Others need a softer check-in first.",
    },
    {
      question: "What kinds of referrals does this usually help capture?",
      answer:
        "Usually neighbors who saw the install, family or friends asking about savings, homeowners with another property, or anyone the customer already has in mind once the project is complete. The workflow works best when the ask stays practical and specific instead of vague.",
    },
    {
      question: "What does a focused solar referral workflow usually cost?",
      answer:
        "A focused post-install referral workflow usually lands around the same range as other bounded single-workflow builds on the site, but the real price depends on how cleanly project completion can be detected, whether the referral path needs a soft check-in first, and how much CRM or handoff cleanup is required. Cleaner closeout discipline usually means a cheaper implementation.",
    },
    {
      question: "Where does the ROI usually come from?",
      answer:
        "Usually from more warm introductions off completed installs, faster follow-up on those opportunities, more second-property conversations, and less reliance on luck after a homeowner already had a good experience. In solar, one extra qualified project from a strong referral path can justify the workflow quickly.",
    },
  ],
  faqSubtitle:
    "Practical answers for solar companies considering a cleaner referral workflow after install and PTO",
  ctaHeading: "Want more completed solar projects to turn into real referrals?",
  ctaText:
    "Book a 30-minute call. We will look at how your team closes out projects today, where referral opportunities are getting lost, and whether a focused referral workflow, a review-timing fix, or an earlier lead or quote fix is the smarter next move.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your solar-company workflow.",
  relatedLinks: [
    { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
    { label: "Review request automation for solar companies", href: "/review-request-automation-for-solar-companies" },
    { label: "What to automate first for solar companies", href: "/what-to-automate-first-for-solar-companies" },
    { label: "Project status update automation for solar companies", href: "/project-status-update-automation-for-solar-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
