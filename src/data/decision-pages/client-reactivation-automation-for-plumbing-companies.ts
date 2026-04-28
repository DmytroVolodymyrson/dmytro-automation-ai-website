import {
  Wrench,
  RefreshCcw,
  CalendarRange,
  MessageSquare,
  Repeat,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  ArrowUpRight,
  ClipboardList,
  Droplets,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "client-reactivation-automation-for-plumbing-companies",
  metaTitle:
    "Client Reactivation Automation for Plumbing Companies — Bring Past Service Clients Back Before the Next Plumbing Need | Dmytro AI",
  metaDescription:
    "Client reactivation automation for plumbing companies. Bring back past service, install, drain, sewer, and maintenance clients with better timing, practical outreach, and fast office handoff when old customers need help again.",
  badgeText: "Plumbing Workflow",
  badgeIcon: Wrench,
  h1: "Client Reactivation Automation for Plumbing Companies",
  heroIntro:
    "A lot of plumbing companies keep chasing only the next emergency call while old customers quietly disappear after the first job. A homeowner who used you for a water-heater install, drain issue, sump-pump problem, leak repair, sewer line job, or another service need is often easier to win again than a brand-new lead — if someone reaches out before the next problem sends them to another plumber. Client reactivation automation for plumbing companies fixes that narrow retention workflow. It gives the business a practical way to follow up with past clients at believable times, reopen the conversation before the next service need turns urgent, surface repeat work or another property without constant manual chasing, and route live intent back to the office before it cools off again.",
  heroSubtext:
    "Below: what this plumbing-company reactivation workflow should actually handle, how it stays distinct from the broader plumbing cluster and the generic reactivation guides, what proof honestly supports it, and when reactivation is or is not the right next build compared with fresh lead response, estimate follow-up, booked-job communication, or after-hours phone coverage.",
  sections: [
    {
      type: "cards",
      title: "What this plumbing-company workflow should actually handle",
      subtitle:
        "This page only works if it stays tightly on past-client recovery, repeat-service timing, and practical handoff — not generic lead nurture or estimate chasing.",
      items: [
        {
          icon: RefreshCcw,
          title: "Dormant client reactivation",
          body: "Past plumbing clients should not disappear forever once the service call is complete. The workflow can trigger after a believable gap in service and reopen the conversation before another plumber becomes the default when the next issue shows up.",
        },
        {
          icon: CalendarRange,
          title: "Timed outreach around realistic plumbing service windows",
          body: "A past drain-cleaning client, a water-heater install customer, a sump-pump contact, and a commercial service account do not all come back on the same schedule. Good automation follows likely maintenance, inspection, or replacement timing instead of blasting every old contact at random.",
        },
        {
          icon: MessageSquare,
          title: "Practical messages tied to real plumbing needs",
          body: "The outreach should sound like a real plumbing company checking whether the customer needs maintenance, another repair, an inspection, a second property visit, or help with a related issue — not a newsletter pretending to be personal.",
        },
        {
          icon: Repeat,
          title: "Repeat-service and referral prompts",
          body: "For many plumbing companies, the win is not only another direct job. It is preventative maintenance, a second property, a commercial follow-up need, or a neighbor referral surfaced while trust is still there. The workflow should make those next conversations easier to start without sounding pushy.",
        },
        {
          icon: ArrowUpRight,
          title: "Fast handoff when old clients show intent again",
          body: "When a past client replies about a new issue, maintenance, pricing, another property, or a referral, the office should get that context immediately. Automation should reopen the relationship and hand the live scheduling or dispatch conversation back to a person fast.",
        },
        {
          icon: ClipboardList,
          title: "Visibility into which completed jobs are aging out",
          body: "Owners should be able to see which past jobs have gone quiet for 6, 12, or 24+ months, which segments still respond, and whether dormant-client recovery is becoming a bigger leak than missed calls or stale estimates in the current season.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the plumbing cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays obvious:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for plumbing companies",
          values: [
            "Owners evaluating the whole plumbing operating layer",
            "Covers missed calls, lead response, estimate follow-up, booked-job communication, client reactivation, and review automation across the business",
          ],
        },
        {
          label: "What to automate first for plumbing companies",
          values: [
            "Owners still deciding which single workflow deserves to be the first build",
            "Helps choose between missed-call recovery, lead follow-up, estimate follow-up, booked-job scheduling, and live AI phone coverage before a broader rollout",
          ],
        },
        {
          label: "Appointment scheduling and reminder automation for plumbing companies",
          values: [
            "Companies that already booked the visit but keep fighting confirmations, reminder gaps, reschedules, and office-to-tech continuity",
            "Focuses on the booked-job layer after the appointment already exists, not on bringing old customers back months later",
          ],
        },
        {
          label: "Client reactivation automation for plumbing companies",
          values: [
            "Plumbing companies that already know dormant-client recovery, repeat-service timing, and old-customer follow-through are the next leak worth fixing",
            "Focuses narrowly on past-client outreach, believable maintenance or replacement timing, referral nudges, and fast handoff when old customers show new intent",
          ],
        },
        {
          label: "Client reactivation automation for service businesses",
          values: [
            "Businesses looking for the cross-industry retention pattern",
            "Explains broader lifecycle logic without the plumbing-specific realities of service-call history, water-heater/drain/sewer job timing, and dispatch-friendly handoff",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your plumbing company?",
      subtitle:
        "Strongest when the business already has real completed-job history and the bigger leak is weak repeat-opportunity discipline, not a shortage of fresh inquiries.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You already have years of completed service calls, installs, drain jobs, sewer work, maintenance visits, or commercial account history with usable contact data",
            "The company wins jobs, but almost nobody follows up once the work is done unless the customer calls first",
            "Past clients could plausibly turn into another service call, preventative check, replacement discussion, second property job, or referral if someone stayed in touch",
            "Your front-end lead handling is decent enough that retention and repeat opportunities now look like the clearer leak",
            "Winning back even a small number of past clients would easily justify the build because plumbing jobs are high value and time-sensitive",
            "Someone on the team can step into scheduling or dispatch once a past client replies",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger problem is still missed calls, weak first response, or estimates going cold before jobs are won",
            "You have very little past-client data to work from",
            "Service quality, callback handling, or customer trust issues are the real reason old clients are not returning or referring",
            "You want one giant promotional blast, not a structured repeat-opportunity workflow",
            "Nobody can own replies or next-step handoff once old clients start responding",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep plumbing-company reactivation useful instead of spammy",
      subtitle:
        "The workflow should feel timely, relevant, and tied to believable plumbing needs — not like a desperate coupon campaign.",
      items: [
        {
          icon: CalendarRange,
          title: "Use job history and timing, not one giant blast",
          body: "A past drain-cleaning customer, a water-heater install client, a commercial account, and a one-time emergency leak repair should not all get the same message. Good reactivation uses job type, recency, and likely next need to make outreach feel earned.",
        },
        {
          icon: AlertTriangle,
          title: "Do not use automation to hide weak service delivery",
          body: "If customers are not returning because the work was sloppy, callbacks were messy, or the experience was poor, more follow-up will not fix the root problem. Reactivation works best when the previous job actually earned another conversation.",
        },
        {
          icon: Droplets,
          title: "Keep the message tied to a real plumbing reason to check in",
          body: "A useful follow-up mentions something plausible: another issue at the property, preventative maintenance, equipment age, seasonal risk, or a related need. It should not read like a random marketing sequence with no connection to the original job.",
        },
        {
          icon: BarChart3,
          title: "Measure recovered jobs and dispatchable conversations, not just opens",
          body: "The real KPI is how many dormant clients request another service, ask for pricing, mention another property, or send a usable referral. That is what proves the workflow is worth keeping.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical plumbing-company reactivation workflow usually works",
      subtitle:
        "The clean version is simple: identify the right completed-job segments, trigger outreach around believable next-service windows, and hand live intent back to the office quickly.",
      blocks: [
        {
          heading: "Past clients are grouped by the kind of plumbing work they bought before",
          body: "The best starting point is not one giant list. It is smaller segments: water-heater installs, drain or sewer work, one-time emergency repairs, maintenance-plan clients, commercial accounts, or customers with another property. That makes the outreach more relevant and the replies easier to route.",
        },
        {
          heading: "Outreach runs when another plumbing need is actually plausible",
          body: "A customer who just called for an urgent repair last month does not need a random check-in next week, but they may be a real fit for a later maintenance touchpoint or another service discussion. Timing matters more than volume.",
        },
        {
          heading: "Warm replies move to a human with context attached",
          body: "If a past client says they noticed another issue, wants service pricing, asks about another property, or mentions a referral, the office should see the relationship context immediately. That makes the business feel organized instead of forcing the customer to start from zero again.",
        },
        {
          heading: "The results show whether repeat-opportunity recovery deserves more attention than fresh acquisition",
          body: "Once the workflow runs, the company can see how many past clients were still recoverable, which segments actually produce repeat jobs, and whether dormant relationships are a bigger growth lever than everyone assumed. That makes the next automation decision less speculative.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is not a published plumbing-specific reactivation case study on the site yet. The honest proof frame is the live plumbing cluster, the service-business reactivation parent, and adjacent published workflow proof already on the site.",
      studies: [
        {
          industry: "Plumbing cluster",
          headline: "The live plumbing parent already implies the retention problem this child isolates",
          body: "The broader plumbing page already makes the case that past customers should not get forgotten once the first service call is done. This child turns that broader retention idea into one narrower, commercially real workflow.",
          link: "/ai-automation-for-plumbing-companies",
        },
        {
          industry: "Published reactivation framework",
          headline: "The service-business reactivation parent already explains why old contacts are often the cheapest leads in the business",
          body: "That page is not plumbing-specific, but it explains the same mechanics this child depends on: segment dormant contacts, time the outreach, and route reactivated demand back to the team before it fades again.",
          link: "/client-reactivation-automation-for-service-businesses",
        },
        {
          industry: "Adjacent home-service retention workflow",
          headline: "The HVAC database reactivation page shows how a home-service company can recover old demand without collapsing back into a generic nurture page",
          body: "HVAC and plumbing are different businesses, but the workflow logic is close: completed jobs create future opportunities, timing matters, and old-customer follow-through only works when a human steps in quickly once interest returns.",
          link: "/hvac-database-reactivation",
        },
      ],
      links: [
        {
          label: "AI automation for plumbing companies",
          href: "/ai-automation-for-plumbing-companies",
        },
        {
          label: "Client reactivation automation for service businesses",
          href: "/client-reactivation-automation-for-service-businesses",
        },
        {
          label: "Appointment scheduling and reminder automation for plumbing companies",
          href: "/appointment-scheduling-and-reminder-automation-for-plumbing-companies",
        },
        {
          label: "Review request automation for plumbing companies",
          href: "/review-request-automation-for-plumbing-companies",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader plumbing automation page?",
      answer:
        "The broader plumbing page explains the full operating layer: missed calls, lead response, estimate follow-up, booked-job communication, client reactivation, and reviews. This page is narrower. It isolates the repeat-opportunity layer after the first job is already done.",
    },
    {
      question: "When is reactivation the right next plumbing workflow to automate?",
      answer:
        "Usually when your company already handles fresh inquiries and sent estimates reasonably well, but almost nothing happens after a job is complete unless the customer starts the conversation. If the bigger leak is still missed calls or stale estimates, fix that first. Reactivation becomes the right next move when past-client value is the clearer missed opportunity.",
    },
    {
      question: "Which plumbing clients fit best in a reactivation system?",
      answer:
        "Past service-call customers, water-heater install clients, drain or sewer job contacts, maintenance-plan clients, commercial accounts, and happy homeowners who are likely to call again or refer someone else are the strongest segments. The right mix depends on your job history and service model.",
    },
    {
      question: "What does a focused plumbing-company reactivation build usually cost?",
      answer:
        "A focused reactivation workflow usually lands around $1.5K-$3K depending on list cleanliness, segmentation depth, channels, handoff rules, and whether your CRM already tracks inactivity clearly. Broader plumbing systems cost more when they also include missed-call recovery, lead response, estimate follow-up, and review automation.",
    },
    {
      question: "Will this annoy past clients if we message them again?",
      answer:
        "It can if the outreach is sloppy. Good reactivation uses job history and timing so the message feels relevant, stops once someone replies or opts out, and does not treat the whole list like a coupon blast. The goal is useful follow-through, not more noise.",
    },
  ],
  faqSubtitle:
    "Practical questions about bringing dormant plumbing clients back without turning follow-up into spam",
  ctaHeading: "Want more repeat plumbing revenue from clients you already paid to win?",
  ctaText:
    "Book a 30-minute call. We will look at your completed-job history, where repeat opportunities are quietly leaking, and whether a focused reactivation workflow is the cleanest automation to build next for your plumbing company.",
};

export default data;
