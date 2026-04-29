import {
  Home,
  Users,
  ArrowRightLeft,
  MessageSquare,
  CalendarRange,
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Star,
  Shield,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "referral-request-automation-for-roofing-companies",
  metaTitle:
    "Referral Request Automation for Roofing Companies — Turn Finished Jobs Into Better Referral Flow | Dmytro AI",
  metaDescription:
    "Referral request automation for roofing companies. Ask at the right moment after completed repairs and replacements, separate referral asks from review asks, route warm neighbor or second-property replies fast, and keep post-job follow-up useful instead of awkward.",
  badgeText: "Roofing Workflow",
  badgeIcon: Users,
  h1: "Referral Request Automation for Roofing Companies",
  heroIntro:
    "A lot of roofing companies say referrals are their best leads, then leave referrals to luck. The roof is finished, the homeowner sounds happy enough, and everyone moves on. No clean follow-up. No timed ask once the project actually feels complete. No simple way to turn a satisfied client into a neighbor introduction, a second-property conversation, or a repeat-service opportunity while trust is still warm. Referral request automation for roofing companies fixes that narrower post-job advocacy workflow. It gives the business a practical way to ask for referrals at the right moment, separate referral asks from review asks, route warm replies back to the office or owner quickly, and keep completed jobs producing introductions instead of going quiet the minute the final invoice is paid.",
  heroSubtext:
    "Below: what a practical roofing-company referral workflow should actually handle, how it stays distinct from review requests and broader client reactivation, what guardrails matter, and what proof honestly supports this page without pretending there is already a roofing-specific referral-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What roofing-company referral automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the referral and advocacy layer after a good job — not on fresh lead response, not on cold estimate recovery, and not on reactivating dormant clients years later.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A real post-job trigger",
          body: "The workflow should start from a believable closeout moment: final walkthrough complete, invoice sent, punch-list items handled, or the office confirming the homeowner experience feels settled. If that trigger is sloppy, the referral ask lands too early and feels pushy.",
        },
        {
          icon: Star,
          title: "A separate referral path from the review path",
          body: "Happy clients can leave a review and still not be the right fit for an immediate referral ask, and vice versa. Strong automation keeps those asks distinct so the business does not blast the same generic message for reputation, referrals, and repeat work all at once.",
        },
        {
          icon: Home,
          title: "Neighbor, second-property, and repeat-work opportunities",
          body: "Roofing referrals often come from nearby homeowners after a visible replacement, a property manager with another building, or a customer who mentions gutters, siding, or another roof issue later. The workflow should make those opportunities easy to raise while the finished job is still top of mind.",
        },
        {
          icon: MessageSquare,
          title: "Simple messaging that sounds practical",
          body: "The best referral ask sounds like a real roofing company following up after a completed job, not a forced marketing campaign. Keep the message simple, timely, and tied to the work that just finished.",
        },
        {
          icon: ArrowRightLeft,
          title: "Fast routing when someone names a neighbor or another property",
          body: "If a client replies with a referral, a friend who needs an inspection, or another property they want looked at, the owner or office should get that context immediately. The workflow should create the handoff, not bury the opportunity in a generic inbox.",
        },
        {
          icon: CalendarRange,
          title: "Timing that respects the kind of roofing job",
          body: "Some referral asks make sense right after a clean closeout. Others are better a little later, once the homeowner has seen the result through another rain, mentioned your work to neighbors, or remembered another property issue. Timing should match the job and relationship, not one rigid rule.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the roofing cluster",
      subtitle:
        "These pages can coexist when each one owns a different workflow stage:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for roofing companies",
          values: [
            "Owners evaluating the broader roofing operating system",
            "Explains the whole stack across calls, fresh lead response, estimate follow-up, insurance communication, reactivation, referrals, and review automation instead of isolating one post-job advocacy layer",
          ],
        },
        {
          label: "Client reactivation automation for roofing companies",
          values: [
            "Companies trying to bring dormant past clients back for another inspection, repair, or maintenance conversation months later",
            "Focuses on seasonal outreach and repeat-opportunity timing after a relationship has gone quiet rather than asking satisfied clients for introductions right after a completed job",
          ],
        },
        {
          label: "Review request automation for roofing companies",
          values: [
            "Companies tightening the post-job reputation layer",
            "Focuses on review timing, unhappy-reply routing, and local-trust signals rather than explicitly asking for introductions or referral handoff",
          ],
        },
        {
          label: "Referral request automation for roofing companies",
          values: [
            "Companies that already finish good work but still rely on luck for neighbor introductions and repeat-project referrals",
            "Focuses narrowly on post-job referral timing, clean advocacy asks, and routing warm referral or second-property replies back to the business quickly",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your roofing company?",
      subtitle:
        "Best fit when the company already completes enough good jobs that a disciplined referral layer would materially change growth.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You finish enough repairs or replacements that referrals should already be a meaningful lead source",
            "The company gets some word of mouth, but there is no clean follow-up that turns happy clients into deliberate introductions",
            "Your team can route a warm referral or second-property reply quickly once it appears",
            "Neighborhood work, insurance-driven visibility, property-manager relationships, or repeat homeowners already matter in how you win jobs",
            "You want a narrower post-job advocacy workflow before forcing a much bigger CRM or marketing rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still missed calls, weak first response, or cold estimates before the job is booked",
            "The company does too little completed-job volume for referral discipline to matter yet",
            "Service quality, cleanup, or callback handling is too inconsistent to justify more post-job asks",
            "Nobody can follow up quickly when a client mentions a neighbor, another property, or another issue",
            "You are looking for one giant marketing blast instead of a clean referral workflow tied to real job completion",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep roofing referral automation useful instead of awkward",
      subtitle:
        "The goal is cleaner advocacy follow-through, not more noise after the job is done.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not stack every ask into one message",
          body: "A client does not need a review ask, a referral ask, a punch-list survey, and a maintenance promotion all at once. Stronger workflows separate those moments so the customer only gets the next most natural ask.",
        },
        {
          icon: Shield,
          title: "Protect service recovery before the referral ask",
          body: "If the homeowner still has a workmanship concern, billing question, or callback issue, the workflow should route that back inside first. Referral automation only helps if the customer experience actually earned an introduction.",
        },
        {
          icon: Users,
          title: "Keep the ask specific",
          body: "Generic 'send us referrals' copy underperforms. A cleaner ask references the kinds of introductions that actually happen in roofing — neighbors after visible work, family with another issue, property managers, or another property the client already mentioned.",
        },
        {
          icon: BarChart3,
          title: "Measure introductions and booked conversations, not just sends",
          body: "The KPI is not only how many referral asks went out. It is how many useful introductions, second-property conversations, and booked inspections or estimates came back because the company finally followed up on completed jobs consistently.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical roofing referral workflow usually works",
      subtitle:
        "The clean version is simple: close the job well, wait until the customer experience actually feels settled, make a clear advocacy ask, and route any real opportunity back to a human fast.",
      blocks: [
        {
          heading: "The job closes out with a usable signal",
          body: "A real closeout trigger matters more than clever wording. Once the project is marked complete and any obvious cleanup, billing, or callback issues are handled, the business finally has a believable moment to ask for more than silence.",
        },
        {
          heading: "The first follow-up checks whether the customer is in a good position to advocate",
          body: "Some roofing jobs are ready for a referral ask quickly. Others need a softer check-in first. The workflow should protect service recovery before it asks a homeowner to recommend the company to someone else.",
        },
        {
          heading: "Satisfied clients get a simple referral prompt tied to real next steps",
          body: "The strongest asks usually point somewhere practical: a neighbor who saw the work, a friend planning an inspection, a property manager with another roof, or another issue the homeowner already mentioned. The message should make it easy to reply with a name, an intro, or another property need.",
        },
        {
          heading: "Warm replies move back to the business with context attached",
          body: "If the client names a referral, asks about another building, or mentions another roof issue, the office should inherit that conversation with enough context to move quickly. That is where the value comes from — not from the outbound text itself, but from the speed and clarity of the handoff after it works.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published roofing-specific referral-automation case study on the site yet. The honest support comes from the live roofing cluster, the existing roofing reactivation and review-request children, the generic referral-request guide, and the published CRM case study that proves stage visibility and human handoff create recoverable value.",
      studies: [
        {
          industry: "Roofing cluster",
          headline: "The live roofing parent and first-project pages already isolate referrals as a real workflow family",
          body: "The broader roofing cluster already frames referrals and repeat-project nurture as part of the operating system beside missed calls, lead response, estimate follow-up, insurance claim follow-up, and review automation. This child page narrows that post-job advocacy layer instead of rewriting the whole roofing stack.",
          link: "/ai-automation-for-roofing-companies",
        },
        {
          industry: "Adjacent roofing retention and reputation proof",
          headline: "The live client-reactivation and review-request pages prove that post-job roofing follow-through already supports more than one distinct child workflow",
          body: "Those pages cover dormant-client recovery and reputation timing. This page sits between them: not months-later reactivation and not public-review timing, but the narrower ask for introductions and second-property opportunities while goodwill is still fresh.",
          link: "/client-reactivation-automation-for-roofing-companies",
        },
        {
          industry: "CRM follow-through proof",
          headline: "The 5,600+ contact CRM case study proves why clean segmentation and human handoff matter once a customer relationship hits a meaningful milestone",
          body: "That published case study is not about roofing referrals, but it proves the same operating principle: once a record crosses an important milestone, the next action needs ownership, routing, and visibility instead of depending on memory. This page applies that principle to post-job referral follow-up.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for roofing companies", href: "/ai-automation-for-roofing-companies" },
        { label: "Client reactivation automation for roofing companies", href: "/client-reactivation-automation-for-roofing-companies" },
        { label: "Review request automation for roofing companies", href: "/review-request-automation-for-roofing-companies" },
        { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from client reactivation automation for roofing companies?",
      answer:
        "Client reactivation is about bringing older relationships back when months have passed and another roofing need might be plausible again. Referral request automation is narrower and earlier. It asks satisfied clients for introductions or another immediate project while the completed job is still fresh.",
    },
    {
      question: "How is this different from a review-request workflow?",
      answer:
        "A review workflow asks for public social proof and routes unhappy replies safely. A referral workflow asks for introductions and repeat-project opportunities. They can be connected, but they should not be the same generic message or the same exact timing rule.",
    },
    {
      question: "When should a roofing company ask for referrals?",
      answer:
        "Usually after the job feels fully complete and any obvious cleanup, callback, or billing issues are settled. Some projects are ready quickly. Others need a softer check-in first. The best timing matches the job type and customer experience instead of using one rigid rule.",
    },
    {
      question: "What does a focused roofing referral workflow usually cost?",
      answer:
        "A narrow referral workflow usually fits the same general range as other bounded single-workflow builds on the site, but the real price depends on how clean the project-closeout trigger, messaging rules, and handoff path already are. The simpler the closeout discipline is today, the cheaper the workflow usually is to implement well.",
    },
    {
      question: "Where does the ROI usually come from?",
      answer:
        "Usually from more second-property conversations, more neighbor or friend introductions, faster follow-up on those opportunities, and less reliance on luck after a good project is already finished. In a referral-heavy trade, one or two extra booked jobs from completed work can justify the build quickly.",
    },
  ],
  faqSubtitle:
    "Practical answers for roofing companies considering a cleaner referral workflow after the job is done",
  ctaHeading: "Want finished roofing jobs to produce more real referrals?",
  ctaText:
    "Book a 30-minute call. We will look at how your company closes out jobs today, where referral opportunities are getting lost, and whether a focused referral workflow, a review-timing fix, or an earlier lead or estimate fix is the smarter next move.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your roofing-company workflow.",
  relatedLinks: [
    { label: "AI automation for roofing companies", href: "/ai-automation-for-roofing-companies" },
    { label: "Client reactivation automation for roofing companies", href: "/client-reactivation-automation-for-roofing-companies" },
    { label: "Review request automation for roofing companies", href: "/review-request-automation-for-roofing-companies" },
    { label: "What to automate first for roofing companies", href: "/what-to-automate-first-for-roofing-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
