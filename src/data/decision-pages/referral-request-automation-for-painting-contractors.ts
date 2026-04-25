import {
  Paintbrush,
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
  Home,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "referral-request-automation-for-painting-contractors",
  metaTitle:
    "Referral Request Automation for Painting Contractors — Turn Finished Jobs into Better Referral Flow | Dmytro AI",
  metaDescription:
    "Referral request automation for painting contractors. Ask at the right moment after a finished job, separate referral asks from review asks, route warm neighbor or repeat-project replies fast, and keep post-job follow-up useful instead of awkward.",
  badgeText: "Painting Workflow",
  badgeIcon: Users,
  h1: "Referral Request Automation for Painting Contractors",
  heroIntro:
    "A lot of painting companies say referrals are their best leads, then leave referrals to luck. The crew finishes a job, the homeowner is happy enough, and everyone moves on. No clean follow-up. No timed ask once the project actually feels complete. No simple way to turn a satisfied client into a neighbor introduction, a second property conversation, or a repeat-project opportunity while trust is still warm. Referral request automation for painting contractors fixes that narrower post-job advocacy workflow. It gives the business a practical way to ask for referrals at the right moment, separate referral asks from review asks, route warm replies back to the owner or office quickly, and keep finished jobs producing introductions instead of going quiet the minute the final invoice is paid.",
  heroSubtext:
    "Below: what a practical painting-contractor referral workflow should actually handle, how it stays distinct from review requests and broader client reactivation, what guardrails matter, and what proof honestly supports this page without pretending there is already a painting-specific referral-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What painting-contractor referral automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the referral and advocacy layer after a good project — not on fresh lead response, not on cold estimate recovery, and not on reactivating dormant clients years later.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A real post-job trigger",
          body: "The workflow should start from a believable closeout moment: final walkthrough complete, invoice sent, touch-ups finished, or the office confirming the customer experience feels settled. If that trigger is sloppy, the referral ask lands too early and feels pushy.",
        },
        {
          icon: Star,
          title: "A separate referral path from the review path",
          body: "Happy clients can leave a review and still not be the right fit for an immediate referral ask, and vice versa. Strong automation keeps those asks distinct so the business does not blast the same generic message for reputation, referrals, and repeat work all at once.",
        },
        {
          icon: Home,
          title: "Neighbor and repeat-project opportunities",
          body: "Painting referrals often come from nearby homeowners, property managers, real-estate contacts, or clients who mention another room, rental turn, or second property. The workflow should make those opportunities easy to raise while the finished work is still top of mind.",
        },
        {
          icon: MessageSquare,
          title: "Simple messaging that sounds practical",
          body: "The best referral ask sounds like a real company following up after a good project, not a forced marketing campaign. Keep the request simple, timely, and tied to the job that just finished.",
        },
        {
          icon: ArrowRightLeft,
          title: "Fast routing when someone names a neighbor or asks about another project",
          body: "If a client replies with a referral, a friend who needs an estimate, or another property they want painted, the owner or office should get that context immediately. The workflow should create the handoff, not bury the opportunity in a generic inbox.",
        },
        {
          icon: CalendarRange,
          title: "Follow-up that respects timing",
          body: "Some referral asks make sense right after a clean closeout. Others are better a little later, once the client has lived with the result or had a chance to mention your work to neighbors. Timing should match the job and relationship, not one rigid rule.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the painting cluster",
      subtitle:
        "These pages can coexist when each one owns a different workflow stage:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for painting contractors",
          values: [
            "Owners evaluating the broader painting operating system",
            "Explains the whole stack across calls, fresh lead response, estimate follow-up, reactivation, referrals, and review automation instead of isolating one post-job advocacy layer",
          ],
        },
        {
          label: "Client reactivation automation for painting contractors",
          values: [
            "Companies trying to bring dormant past clients back for another project months later",
            "Focuses on seasonal outreach, repeat-project timing, and recovering old relationships rather than asking satisfied clients for introductions right after a completed job",
          ],
        },
        {
          label: "Review request automation for painting contractors",
          values: [
            "Companies tightening the post-job reputation layer",
            "Focuses on review timing, unhappy-reply routing, and local-trust signals rather than explicitly asking for introductions or referral handoff",
          ],
        },
        {
          label: "Referral request automation for painting contractors",
          values: [
            "Companies that already finish good work but still rely on luck for neighbor introductions and repeat-project referrals",
            "Focuses narrowly on post-job referral timing, clean advocacy asks, and routing warm referral or repeat-project replies back to the business quickly",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your painting company?",
      subtitle:
        "Best fit when the company already completes enough good projects that a disciplined referral layer would materially change growth.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You finish enough residential or commercial jobs that referrals should already be a meaningful lead source",
            "The company gets some word of mouth, but there is no clean follow-up that turns happy clients into deliberate introductions",
            "Your team can route a warm referral or repeat-project reply quickly once it appears",
            "Neighborhood work, repeat homeowners, property managers, or local trust already matter in how you win jobs",
            "You want a narrower post-job advocacy workflow before forcing a much bigger CRM or marketing rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still missed calls, weak first response, or cold estimates before the project is booked",
            "The company does too little completed-job volume for referral discipline to matter yet",
            "Service quality or project closeout is too inconsistent to justify more post-job asks",
            "Nobody can follow up quickly when a client mentions a neighbor, second property, or another project",
            "You are looking for one giant marketing blast instead of a clean referral workflow tied to real project completion",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep painting referral automation useful instead of awkward",
      subtitle:
        "The goal is cleaner advocacy follow-through, not more noise after the project is done.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not stack every ask into one message",
          body: "A client does not need a review ask, a referral ask, a touch-up survey, and a repeat-project promotion all at once. Stronger workflows separate those moments so the customer only gets the next most natural ask.",
        },
        {
          icon: Users,
          title: "Keep the ask specific",
          body: "Generic 'send us referrals' copy underperforms. A cleaner ask references the kind of introductions that actually happen in painting — neighbors, family, property managers, real-estate contacts, or another property the client already mentioned.",
        },
        {
          icon: MessageSquare,
          title: "Use human handoff once the client shows intent",
          body: "Automation should not try to carry the whole referral conversation. If a client names someone, wants pricing for another project, or opens a real conversation, that should route to a person quickly while trust is still warm.",
        },
        {
          icon: BarChart3,
          title: "Measure introductions and booked conversations, not just sends",
          body: "The KPI is not only how many referral asks went out. It is how many useful introductions, repeat-project conversations, and booked estimates came back because the company finally followed up on finished jobs consistently.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical painting referral workflow usually works",
      subtitle:
        "The clean version is simple: close the project well, wait until the customer experience actually feels settled, make a clear advocacy ask, and route any real opportunity back to a human fast.",
      blocks: [
        {
          heading: "The project closes out with a usable signal",
          body: "A real closeout trigger matters more than clever wording. Once the project is marked complete and any obvious touch-up or billing issues are out of the way, the business finally has a believable moment to ask for more than silence.",
        },
        {
          heading: "The first follow-up checks whether the customer is in a good position to advocate",
          body: "Some jobs are ready for a referral ask quickly. Others need a softer check-in first. The workflow should protect service recovery before it asks a homeowner to recommend the company to somebody else.",
        },
        {
          heading: "Satisfied clients get a simple referral prompt tied to real next steps",
          body: "The strongest asks usually point somewhere practical: a neighbor who saw the work, a friend planning an interior refresh, a rental turn, or another property the client owns. The message should make it easy to reply with a name, an intro, or another project need.",
        },
        {
          heading: "Warm replies move back to the business with context attached",
          body: "If the client names a referral, asks about another room, or mentions a second property, the office should inherit that conversation with enough context to move quickly. That is where the value comes from — not from the outbound text itself, but from the speed and clarity of the handoff after it works.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published painting-specific referral-automation case study on the site yet. The honest support comes from the live painting cluster, the existing painting reactivation and review-request children, and the published CRM case study that proves stage visibility and follow-through create recoverable value.",
      studies: [
        {
          industry: "Painting cluster",
          headline: "The live painting parent and first-project pages already isolate referrals as a real workflow family",
          body: "The broader painting cluster already frames referrals and repeat-project nurture as part of the operating system beside missed calls, lead response, and estimate follow-up. This child page narrows that post-job advocacy layer instead of rewriting the whole painting stack.",
          link: "/ai-automation-for-painting-contractors",
        },
        {
          industry: "Adjacent painting retention proof",
          headline: "The live client-reactivation and review-request pages prove that post-job painting follow-through already supports more than one distinct child workflow",
          body: "Those pages cover dormant-client recovery and reputation timing. This page sits between them: not months-later reactivation and not public-review timing, but the narrower ask for introductions and repeat-project opportunities while goodwill is still fresh.",
          link: "/client-reactivation-automation-for-painting-contractors",
        },
        {
          industry: "CRM follow-through proof",
          headline: "The 5,600+ contact CRM case study proves why clean segmentation and human handoff matter once a customer relationship hits a meaningful milestone",
          body: "That published case study is not about painting referrals, but it proves the same operating principle: once a record crosses an important milestone, the next action needs ownership, routing, and visibility instead of depending on memory. This page applies that principle to post-job referral follow-up.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for painting contractors", href: "/ai-automation-for-painting-contractors" },
        { label: "Client reactivation automation for painting contractors", href: "/client-reactivation-automation-for-painting-contractors" },
        { label: "Review request automation for painting contractors", href: "/review-request-automation-for-painting-contractors" },
        { label: "What to automate first for painting contractors", href: "/what-to-automate-first-for-painting-contractors" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from client reactivation automation for painting contractors?",
      answer:
        "Client reactivation is about bringing older relationships back when months have passed and a new project might be plausible again. Referral request automation is narrower and earlier. It asks satisfied clients for introductions or another immediate project while the completed job is still fresh.",
    },
    {
      question: "How is this different from a review-request workflow?",
      answer:
        "A review workflow asks for public social proof and routes unhappy replies safely. A referral workflow asks for introductions and repeat-project opportunities. They can be connected, but they should not be the same generic message or the same exact timing rule.",
    },
    {
      question: "When should a painting contractor ask for referrals?",
      answer:
        "Usually after the project feels fully complete and any obvious touch-up, cleanup, or billing issues are settled. Some jobs are ready quickly. Others need a softer check-in first. The best timing matches the job type and customer experience instead of using one rigid rule.",
    },
    {
      question: "What does a focused painting referral workflow usually cost?",
      answer:
        "A narrow referral workflow usually fits the same general range as other bounded single-workflow builds on the site, but the real price depends on how clean the project-closeout trigger, messaging rules, and handoff path already are. The simpler the closeout discipline is today, the cheaper the workflow usually is to implement well.",
    },
    {
      question: "Where does the ROI usually come from?",
      answer:
        "Usually from more repeat-project conversations, more neighbor or friend introductions, faster follow-up on those opportunities, and less reliance on luck after a good project is already finished. In a referral-heavy trade, one or two extra booked jobs from finished work can justify the build quickly.",
    },
  ],
  faqSubtitle:
    "Practical answers for painting contractors considering a cleaner referral workflow after the job is done",
  ctaHeading: "Want finished painting jobs to produce more real referrals?",
  ctaText:
    "Book a 30-minute call. We will look at how your company closes out projects today, where referral opportunities are getting lost, and whether a focused referral workflow, a review-timing fix, or an earlier lead or estimate fix is the smarter next move.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your painting-company workflow.",
  relatedLinks: [
    { label: "AI automation for painting contractors", href: "/ai-automation-for-painting-contractors" },
    { label: "Client reactivation automation for painting contractors", href: "/client-reactivation-automation-for-painting-contractors" },
    { label: "Review request automation for painting contractors", href: "/review-request-automation-for-painting-contractors" },
    { label: "What to automate first for painting contractors", href: "/what-to-automate-first-for-painting-contractors" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
