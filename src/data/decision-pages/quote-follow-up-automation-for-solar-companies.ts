import {
  ClipboardCheck,
  Sun,
  MessageSquare,
  BadgeDollarSign,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileText,
  Clock3,
  Users,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "quote-follow-up-automation-for-solar-companies",
  metaTitle:
    "Quote Follow-Up Automation for Solar Companies — Recover Stale Solar Proposals | Dmytro AI",
  metaDescription:
    "Quote follow-up automation for solar companies. Recover sent proposals with timed reminders, financing-question handling, incentive-window context, sales rep handoff, and stale-quote visibility across the solar pipeline.",
  badgeText: "Solar Workflow",
  badgeIcon: ClipboardCheck,
  h1: "Quote Follow-Up Automation for Solar Companies",
  heroIntro:
    "The proposal is out. The homeowner has your pricing, financing options, and system design. Then silence. In solar, that gap between sent proposal and signed contract is where a huge share of revenue disappears. Some homeowners are comparing three installers. Some are stuck on financing math. Some are waiting on a spouse, a tax question, or a seasonal decision they haven't fully committed to yet. If nobody follows up with practical next steps and real context, the deal usually dies quietly — not because the homeowner said no, but because nobody made the next step easy enough to take. Quote follow-up automation fixes that narrow post-proposal stage. It starts after the quote is sent, keeps the deal alive with useful reminders and next-step prompts tied to how solar buyers actually stall, and routes real buying intent back to the sales rep before another winnable solar project goes cold in the pipeline.",
  heroSubtext:
    "Below: what solar quote follow-up automation actually handles, how it stays distinct from the parent solar page and the other live solar children (lead follow-up, utility bill collection, scheduling/reminders, phone answering, and phone comparisons), what guardrails matter, and what proof supports the page without inventing a solar quote-recovery case study that doesn't exist.",
  sections: [
    {
      type: "cards",
      title: "What solar quote follow-up automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on sent proposals that have not converted yet — not the earlier lead-response or utility-bill stage, and not the later install-scheduling layer.",
      items: [
        {
          icon: Clock3,
          title: "Timed follow-up after the solar proposal goes out",
          body: "Once the proposal is marked sent, the workflow triggers touches at practical intervals — day 1, day 3, day 7, day 14. Solar decisions take longer than most home services because the homeowner is weighing a multi-year investment. The follow-up cadence should reflect that longer decision window without going silent after the first week.",
        },
        {
          icon: MessageSquare,
          title: "Messages that match how solar buyers actually stall",
          body: "Good follow-up is not a generic 'just checking in.' Solar proposals stall around financing questions, roof condition concerns, household decision-making, net metering confusion, and whether the tax credit timeline still works. Each touch should address a real friction point instead of repeating the same ask.",
        },
        {
          icon: BadgeDollarSign,
          title: "Financing and incentive-aware nudges",
          body: "Many solar deals stall because the homeowner hasn't fully processed the financing math or isn't sure how federal and state incentives apply to their situation. Follow-up can surface approved financing summaries, link to relevant incentive info, and prompt the homeowner to ask their remaining questions — without the automation pretending to give tax advice.",
        },
        {
          icon: ArrowUpRight,
          title: "Sales rep handoff when the buyer re-engages",
          body: "If the homeowner replies with a question, asks for a callback, wants to adjust the system size, or says they are ready to move forward, the sales rep gets the conversation with the full proposal context attached. That keeps humans focused on closable deals instead of manually chasing every quiet proposal.",
        },
        {
          icon: FileText,
          title: "Stale-quote visibility and pipeline reporting",
          body: "Owners and sales managers can see how many solar proposals are sitting open, how old they are, which ones have gone completely silent, and where deals are stalling in the pipeline. That visibility is often the first real answer to why close rates feel softer than the lead volume should produce.",
        },
        {
          icon: Sun,
          title: "Honest urgency tied to real solar timing",
          body: "Solar has legitimate timing factors: federal tax credit deadlines, state incentive windows, seasonal install backlogs, utility rate changes, and net metering policy shifts. Follow-up can reference those real conditions without manufacturing fake countdown pressure. The goal is to help the homeowner act while the opportunity is still available, not to trick them into a decision.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the solar cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays obvious:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for solar companies",
          values: [
            "Owners evaluating the full solar operating system across leads, quotes, scheduling, phone coverage, and project updates",
            "Explains the whole solar automation picture instead of isolating the sent-proposal recovery stage",
          ],
        },
        {
          label: "AI lead follow-up for solar companies",
          values: [
            "Solar teams whose biggest leak is still slow response to fresh inquiries before a proposal exists",
            "Focuses on first response, early nurture, and speed-to-lead for new inquiries rather than sent proposals that went quiet later",
          ],
        },
        {
          label: "Utility bill collection for solar",
          values: [
            "Teams whose bottleneck is gathering usage data before the proposal can be created",
            "Handles the documentation-capture stage before quoting, not the follow-up stage after the proposal is already out",
          ],
        },
        {
          label: "Quote follow-up automation for solar companies",
          values: [
            "Solar companies that already send proposals but lose too many deals in the gap between sent quote and signed contract",
            "Focuses tightly on post-proposal recovery: reminder timing, financing-question handling, incentive-window context, rep handoff, and stale-quote visibility once the proposal is already on the table",
          ],
        },
        {
          label: "Appointment scheduling and reminders for solar",
          values: [
            "Companies that already book consultations but still lose time to no-shows and vague confirmations",
            "Focuses on the booked-visit layer — confirmations, reminders, reschedule routing — not on recovering proposals that went silent after the site visit already happened",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your solar company?",
      subtitle:
        "Best fit when your team already sends proposals consistently, but too many deals still die quietly after pricing is out.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You send enough solar proposals each month that manual follow-up on every one is inconsistent",
            "Your sales reps are busy running consultations and designing systems, so sent proposals get less attention than they should",
            "One recovered solar project per month would likely justify the build cost",
            "You have a clear 'proposal sent' stage in your CRM or sales process",
            "You want a narrower quote-recovery workflow before rebuilding the whole solar CRM stack",
            "Your team can respond quickly when a homeowner re-engages and is ready to sign",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still slow first response to new inquiries before a proposal exists",
            "You send very few proposals each month, so a dedicated follow-up workflow won't move much revenue yet",
            "Your team already follows up on every proposal with strong discipline and close rates are healthy",
            "There is no clean way to tell when a solar proposal was actually sent or who owns the next step",
            "You want automation closing deals, negotiating system changes, or giving financial advice without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep solar quote follow-up useful",
      subtitle:
        "The goal is disciplined proposal recovery, not more noise or fake urgency around a major home investment.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate before the proposal stage is real",
          body: "If one rep emails a PDF, another texts a rough number, and nobody updates the CRM when the proposal is actually out, the workflow has nothing reliable to trigger from. Tighten the proposal-sent stage first, then automate around it.",
        },
        {
          icon: FileText,
          title: "Every touch needs one clear next step",
          body: "The strongest follow-up tells the homeowner exactly what to do: reply with a financing question, confirm they want to move forward, schedule a follow-up call with the rep, or ask about an incentive deadline. Long generic check-ins do not recover solar deals.",
        },
        {
          icon: Users,
          title: "Know when the sales rep needs to take over",
          body: "If the buyer wants to adjust system size, discuss financing terms in detail, compare lease vs purchase, or negotiate pricing, the rep should step in immediately. Automation keeps the proposal active. It should not pretend to handle consultative solar sales decisions.",
        },
        {
          icon: BarChart3,
          title: "Measure recovered proposals, not just sent reminders",
          body: "The KPI is not how many follow-up messages went out. It is how many proposals re-engaged, how many contracts were signed, how old open quotes are getting, and whether the team finally has visibility into where proposal-stage revenue is leaking.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical solar quote-recovery workflow usually works",
      subtitle:
        "The strongest version is simple: trigger from the sent-proposal stage, follow up while the deal is still warm, and route humans when buying intent comes back.",
      blocks: [
        {
          heading: "The solar proposal is marked sent",
          body: "That event becomes the workflow trigger. Whether the proposal lives in GoHighLevel, Aurora, Solo, a custom CRM, or a cleaned-up office spreadsheet, the key is having one reliable moment where the system knows pricing is out and the next move belongs to the homeowner.",
        },
        {
          heading: "The first follow-up lands while the site visit is still fresh",
          body: "A short, useful touch goes out before the homeowner forgets the walkthrough, the system design, and the numbers the rep presented. This is usually where solar companies get the biggest lift because manual follow-up often happens days later — after the best proposals have already gone cold.",
        },
        {
          heading: "Later touches address predictable solar hesitation",
          body: "If there is still no response, later messages can address familiar stall points: financing confusion, comparing installer bids, waiting on another household decision-maker, uncertainty about the tax credit, or wondering whether to wait for next year's incentive cycle. Each message should reduce decision friction instead of repeating the same generic ask.",
        },
        {
          heading: "High-intent replies go back to the sales rep with context attached",
          body: "When the homeowner re-engages, the right rep gets the conversation plus the proposal context — system size, pricing, financing option, and last touchpoint. That makes follow-up feel fast and human instead of forcing the rep to reconstruct the deal from CRM fragments and email threads.",
        },
        {
          heading: "Owners finally see where proposal-stage revenue is leaking",
          body: "Over time the workflow shows whether proposals are dying because follow-up starts too late, stops too early, financing-stage deals need a different cadence, or the sales team is too overloaded with new consultations to work the existing pipeline with any discipline once fresh leads take priority.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published solar quote-follow-up-only case study on the site yet. The honest support comes from the broader solar parent page, the HVAC quote-follow-up page that proves the same sent-estimate recovery pattern, and the published CRM case study that proves the stage-tracking and follow-up mechanics.",
      studies: [
        {
          industry: "Solar parent page",
          headline: "The broader solar guide already names quote follow-up as part of the sales-cycle challenge",
          body: "That parent page explains why lead response, utility bill collection, scheduling, and proposal follow-up all matter in the solar pipeline. This child narrows that broader opportunity to one stage: recovering sent proposals before they die in the gap.",
          link: "/ai-automation-for-solar-companies",
        },
        {
          industry: "HVAC quote-follow-up proof",
          headline: "The HVAC quote-follow-up page proves the same sent-estimate recovery pattern in a different vertical",
          body: "That page covers reminder timing, objection-aware follow-up, office handoff, and stale-quote visibility for HVAC companies. The workflow mechanics transfer directly — solar adds financing complexity, longer decision windows, and incentive-timing context.",
          link: "/quote-follow-up-automation-for-hvac-companies",
        },
        {
          industry: "Published CRM lifecycle proof",
          headline: "The e-commerce CRM case study proves the stage tracking, reminder discipline, and human handoff this workflow depends on",
          body: "That case study is not a solar build, but it is direct proof of the operating mechanics: stage visibility, automated reminders, stale-opportunity reporting, and routing live replies to humans quickly. The workflow logic is directly relevant here.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
        { label: "AI lead follow-up for solar companies", href: "/ai-lead-follow-up-for-solar-companies" },
        { label: "Utility bill collection for solar", href: "/utility-bill-collection-automation-for-solar-companies" },
        { label: "Financing follow-up for solar companies", href: "/financing-follow-up-automation-for-solar-companies" },
        { label: "Appointment scheduling for solar", href: "/appointment-scheduling-and-reminder-automation-for-solar-companies" },
        { label: "What to automate first for solar companies", href: "/what-to-automate-first-for-solar-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from AI lead follow-up for solar companies?",
      answer:
        "Lead follow-up covers the earlier stage: immediate response to new inquiries, short nurture, and light qualification before a proposal exists. This page is narrower. It focuses on what happens after the solar proposal is already sent and before the homeowner signs or disappears.",
    },
    {
      question: "How is this different from the broader solar automation page?",
      answer:
        "The broader solar page covers the full system: lead response, utility bill collection, scheduling, project updates, and proposal follow-up together. This child page isolates one high-stakes stage — recovering sent proposals — so the buyer can evaluate that narrower problem clearly.",
    },
    {
      question: "What does a focused solar quote-follow-up build usually cost?",
      answer:
        "A focused proposal-recovery workflow usually lands around $1.5K-$3K depending on your current CRM, channel mix, escalation rules, and whether the proposal-sent trigger is already clean. Broader solar automation builds cost more when they also include lead response, scheduling, utility bill collection, reviews, or phone-answering layers.",
    },
    {
      question: "Can this work with our current solar CRM?",
      answer:
        "Usually yes, as long as there is a reliable way to detect when a proposal was sent and who owns the next step. GoHighLevel, Aurora, Solo, and most solar CRMs can support this directly or through a practical integration layer. The automation improves the follow-up discipline around the existing proposal stage.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is recovering solar proposals that would otherwise die in silence after pricing goes out. When your average solar project value is meaningful, one additional signed contract per month can cover the build quickly. The secondary win is giving the sales team cleaner visibility into which proposals are still alive so reps stop chasing blindly and managers can see where pipeline revenue is leaking.",
    },
  ],
  faqSubtitle:
    "Practical questions from solar companies considering quote follow-up automation",
  ctaHeading: "Want fewer solar proposals dying in silence?",
  ctaText:
    "Book a 30-minute call. We will look at how your team handles sent proposals today, where pipeline revenue is leaking after the site visit, and whether a focused quote-recovery workflow is the cleanest solar automation to build next.",
  ctaSubtext:
    "No fake close-rate promises. Just a practical recommendation based on your current proposal volume, sales process, and follow-up discipline.",
  relatedLinks: [
    { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
    { label: "What to automate first for solar companies", href: "/what-to-automate-first-for-solar-companies" },
    { label: "AI lead follow-up for solar companies", href: "/ai-lead-follow-up-for-solar-companies" },
    { label: "Financing follow-up automation for solar companies", href: "/financing-follow-up-automation-for-solar-companies" },
    { label: "Project status update automation for solar companies", href: "/project-status-update-automation-for-solar-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
