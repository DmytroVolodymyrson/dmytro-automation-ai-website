import {
  DollarSign,
  RefreshCw,
  Users,
  MessageSquare,
  Workflow,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Calculator,
  Clock,
  Database,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "client-reactivation-cost-small-business",
  metaTitle:
    "Client Reactivation Cost for Small Business — Real Pricing Guide | Dmytro AI",
  metaDescription:
    "What does client reactivation automation cost for a small business? Practical pricing ranges for dormant-client outreach, CRM cleanup, segmented campaigns, human handoff, and when the investment actually pays off.",
  badgeText: "Reactivation Pricing",
  badgeIcon: DollarSign,
  h1: "Client Reactivation Cost for Small Business",
  heroIntro:
    "Most small businesses should expect a focused client-reactivation build to land somewhere between $1.5K and $4K, with monthly running costs often in the $25-$120 range before heavier SMS volume, CRM add-ons, or ongoing support. The useful question is not 'how cheap can I get a win-back campaign?' It is 'what level of reactivation problem am I actually solving?' A business that only needs a simple check-in message to recent past clients should not buy the same system as a business that needs multi-segment dormant-client identification, job-history-based outreach timing, multi-channel sequences, CRM cleanup, and human-handoff routing when old clients reply. This page breaks down realistic cost ranges for client-reactivation automation specifically — not broad retention platforms, and not one-off email blasts — so you can budget the right first build instead of overbuying or underbuilding.",
  heroSubtext:
    "Below: what different reactivation builds usually cost, what those budget bands actually buy, what drives the price up, where small businesses overspend, and when the math makes sense versus when a simpler manual check-in is enough.",
  sections: [
    {
      type: "table",
      title: "What client-reactivation automation usually costs",
      subtitle:
        "These are realistic small-business ranges for the most common dormant-client recovery builds:",
      headers: ["Build Cost", "Monthly Running Cost", "Typical Timeline"],
      rows: [
        {
          label: "Simple check-in sequence to recent past clients",
          values: ["$1K-$1.8K", "$20-$50", "3-5 days"],
        },
        {
          label: "Segment-based outreach with CRM tagging",
          values: ["$1.5K-$2.5K", "$25-$80", "4-7 days"],
        },
        {
          label: "Multi-channel reactivation (email + SMS) with stop rules",
          values: ["$2K-$3.2K", "$35-$100", "1-2 weeks"],
        },
        {
          label: "Job-history-based timing with owner alerts and handoff",
          values: ["$2.5K-$3.8K", "$50-$120", "1-2 weeks"],
        },
        {
          label: "CRM cleanup + segmentation + reactivation workflow",
          values: ["$3K-$4.5K+", "$60-$150", "2-3 weeks"],
        },
      ],
    },
    {
      type: "prose",
      title: "What those budget bands usually buy in practice",
      subtitle:
        "The number only becomes useful when you tie it to the actual operating problem:",
      blocks: [
        {
          heading: "$1K-$1.8K range: a short check-in to your most recent dormant clients",
          body: "This is the band for businesses that mainly need a simple, well-timed message to clients who completed a job in the last 6-18 months and never heard from the company again. Expect one short sequence — usually email or SMS — with a clear next step like 'reply to schedule' or a booking link. No complex segmentation, no CRM overhaul. It is the right first project when the core leak is silence after job completion, not a messy database.",
        },
        {
          heading: "$1.8K-$3.2K range: real segmentation and multi-channel outreach",
          body: "This is where the system starts grouping past clients by job type, recency, or service category and sending different messages to each segment at different times. Expect email plus SMS, reply-detection stop rules so people do not get spammed after responding, CRM contact updates, and owner or office alerts when someone shows interest. This is the range most small businesses should benchmark against when they want a production reactivation workflow instead of a one-off blast.",
        },
        {
          heading: "$3K+ range: CRM cleanup, deeper segmentation, and messier starting conditions",
          body: "Once the project also requires cleaning up contact records, merging duplicates, fixing missing job-history data, or building segments from scratch because the CRM was never maintained, you are no longer paying only for outreach messages. You are paying for data preparation and system design so the reactivation workflow can target the right people with the right timing instead of spraying the entire list.",
        },
      ],
    },
    {
      type: "cards",
      title: "What makes the price go up",
      subtitle:
        "Reactivation pricing is mostly driven by data quality and workflow complexity, not by the word AI in the proposal:",
      items: [
        {
          icon: Database,
          title: "How clean the client data actually is",
          body: "If your CRM has duplicates, missing job dates, no service-type tags, or contacts with no phone or email, the project gets more expensive before any outreach is built. Data cleanup is real work and it has to happen first or the reactivation targeting will be unreliable.",
        },
        {
          icon: Users,
          title: "How many segments the workflow has to manage",
          body: "One message to all past clients is cheap. Separate sequences for maintenance clients, one-time project clients, lapsed recurring accounts, and high-value referral candidates cost more because each segment needs its own timing, copy, and next-step logic.",
        },
        {
          icon: MessageSquare,
          title: "How many channels are involved",
          body: "Email-only reactivation is less expensive than email plus SMS plus a separate re-engagement path for clients with no email on file. Every additional channel adds message logic, opt-out handling, and more edge cases to test.",
        },
        {
          icon: Workflow,
          title: "Whether the workflow only sends or also routes replies",
          body: "A simple outbound campaign is cheaper than a system that detects replies, tags interested contacts, notifies the right person, updates the CRM pipeline, and stops the sequence so the human can take over. The handoff logic is where the real operating value lives — and where the build cost increases.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this is worth paying for — and when it is overkill",
      subtitle:
        "This page is for businesses with a real dormant-client recovery problem, not businesses shopping for automation because it sounds productive:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth the investment",
          variant: "green",
          items: [
            "You have at least a year of completed jobs with usable contact history",
            "Almost nobody follows up after a job is complete unless the client calls first",
            "One recovered repeat job, maintenance visit, or referral per month would matter financially",
            "Your front-end lead handling is already decent — the bigger leak is weak retention and repeat-opportunity discipline",
            "Someone on the team can handle scheduling or estimating once a dormant client replies",
          ],
        },
        {
          icon: XCircle,
          heading: "Probably overkill for now",
          variant: "neutral",
          items: [
            "Your bigger problem is still missed calls, slow first response, or stale estimates going cold",
            "You have very little past-client data — fewer than 50 usable contacts with valid phone or email",
            "The main reason past clients are not returning is service quality, not silence after the job",
            "Nobody on the team can own replies or handoff when old clients start responding",
            "You are comparing a custom reactivation workflow to a generic email blast tool and expecting them to cost the same",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to budget this without wasting money",
      subtitle:
        "The easiest way to overspend is to buy too much system before proving the dormant-client opportunity is real:",
      items: [
        {
          icon: Calculator,
          title: "Start with your most recoverable segment, not the entire database",
          body: "If you have 500 past clients, do not try to build a five-segment workflow on day one. Pick the group most likely to respond — usually recent completions in your highest-value service category — prove the economics, then expand.",
        },
        {
          icon: AlertTriangle,
          title: "Budget for data cleanup if your CRM is a mess",
          body: "If the project requires cleaning up contacts, merging duplicates, and backfilling job dates before any outreach can run, that work should be scoped and priced honestly. Pretending the data is ready when it is not creates a workflow that targets the wrong people.",
        },
        {
          icon: Clock,
          title: "Plan for message tuning after the first round",
          body: "The first outreach sequence almost always needs refinement. Timing, copy, subject lines, and reply-handling rules get sharper after the workflow touches real past clients and you see which segments actually respond.",
        },
        {
          icon: TrendingUp,
          title: "Compare the cost to one recovered repeat job per month",
          body: "For most service businesses, that is the right sanity check. If one reactivated maintenance visit, repeat project, or referral per month would cover a meaningful share of the build and running cost, the economics are usually credible.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "There is no dedicated horizontal client-reactivation cost case study on this site. The honest proof frame comes from the HVAC reactivation page, the e-commerce CRM case study, and the existing reactivation cluster already live:",
      studies: [
        {
          industry: "HVAC / database reactivation",
          headline: "HVAC database reactivation proves the dormant-client recovery economics",
          body: "The HVAC reactivation page shows how a real service business uses automated campaigns to re-engage past maintenance and repair customers. The segmentation, timing, and handoff patterns are the same ones this cost page prices against — the economics of recovering one seasonal tune-up or repair callback per month are what make the build worthwhile.",
          link: "/hvac-database-reactivation",
        },
        {
          industry: "E-commerce / CRM automation",
          headline: "WheelsFeels shows what database segmentation and re-engagement costs at scale",
          body: "The e-commerce CRM case study organized thousands of contacts, built multi-step follow-up sequences, and routed reactivated demand back to the team. That project sits at the higher end of the pricing spectrum and demonstrates what happens when CRM cleanup and segmentation complexity drive the build cost up.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Service-business reactivation cluster",
          headline: "The parent and vertical reactivation pages define the workflow this cost page prices",
          body: "The existing client-reactivation-for-service-businesses parent page and the vertical children for roofing, plumbing, cleaning, auto repair, and painting contractors already explain where the workflow fits and how it should run. This page stays narrower by focusing specifically on budget ranges and cost decisions for small businesses.",
          link: "/client-reactivation-automation-for-service-businesses",
        },
      ],
      links: [
        { label: "Client reactivation for service businesses", href: "/client-reactivation-automation-for-service-businesses" },
        { label: "Client reactivation launch checklist", href: "/client-reactivation-launch-checklist-small-business" },
        { label: "Client reactivation automation (generic)", href: "/client-reactivation-automation" },
        { label: "HVAC database reactivation", href: "/hvac-database-reactivation" },
        { label: "E-commerce CRM case study", href: "/case-studies/ecommerce-crm-automation" },
        { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
        { label: "AI lead follow-up cost", href: "/ai-lead-follow-up-cost-small-business" },
      ],
    },
    {
      type: "prose",
      title: "What small businesses usually get wrong about reactivation pricing",
      subtitle:
        "These are the assumptions that create bad buying decisions:",
      blocks: [
        {
          heading: "Treating a bulk email blast as a reactivation system",
          body: "A one-time promotional email to your entire past-client list is not the same thing as a working reactivation workflow. The real value comes from segmenting by job type and timing, writing messages that feel relevant instead of generic, detecting replies, routing interested contacts to a human, and stopping the sequence so people do not get spammed after responding.",
        },
        {
          heading: "Buying complex lifecycle automation before proving the simple version works",
          body: "Many owners overbuy because proposals bundle CRM cleanup, multi-segment workflows, AI classification, and full lifecycle automation into one giant project. If you have not proven that past clients will respond to a simple, well-timed check-in first, the expensive version is premature.",
        },
        {
          heading: "Ignoring the cost of silent churned clients",
          body: "Owners treat dormant clients as a sunk cost because no invoice shows up for them. They are not free. Every past client who would have booked again if someone had followed up is already a revenue leak. The question is whether the reactivation build costs less than the repeat business it recovers.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does client-reactivation automation cost for a small business?",
      answer:
        "For most small businesses, a focused client-reactivation build usually lands between $1.5K and $4K depending on data cleanliness, segmentation depth, channels, handoff logic, and whether CRM cleanup is needed first. Monthly running costs are often in the $25-$120 range before heavier SMS volume or ongoing support.",
    },
    {
      question: "Why is this different from the general client reactivation page?",
      answer:
        "The general reactivation page explains what the workflow is and when it fits. The service-businesses parent page covers cross-industry operating patterns. This page stays narrow on the buying decision: realistic budget ranges, what makes the price go up, and how to avoid paying for complexity you do not need yet.",
    },
    {
      question: "What usually makes client-reactivation automation expensive?",
      answer:
        "Messy CRM data that needs cleanup first, multiple client segments with different outreach timing, multi-channel logic (email plus SMS), reply-detection and routing, and unclear ownership rules for who handles reactivated demand. The more the workflow has to manage before and after the messages go out, the more build time it needs.",
    },
    {
      question: "Can I start with a simple reactivation sequence and expand later?",
      answer:
        "Yes. That is usually the smartest approach. Start with the narrowest segment most likely to respond — often recent completions in your highest-value service category — prove the economics with a short sequence, then expand into more segments, channels, and richer handoff logic once the first phase shows results.",
    },
    {
      question: "How do I know if the price is worth it?",
      answer:
        "Compare the build cost to one recovered repeat job, maintenance visit, or referral per month. If your average job value is high enough that a small lift in reactivated demand covers a meaningful share of the project cost, the economics are usually reasonable. If your past-client list is tiny or your average ticket is very low, manual check-ins may be enough for now.",
    },
  ],
  faqSubtitle:
    "Practical answers about budgeting client-reactivation automation for a small business",
  ctaHeading: "Want a realistic quote for a client-reactivation workflow?",
  ctaText:
    "Book a 30-minute call. We will look at your past-client data, assess how much CRM cleanup is really needed, and give you a fixed-price range for the narrowest reactivation build worth doing first.",
  ctaSubtext:
    "No inflated lifecycle proposal. Just a practical scope and cost discussion.",
  relatedLinks: [
    { label: "Client reactivation for service businesses", href: "/client-reactivation-automation-for-service-businesses" },
    { label: "Client reactivation setup for service businesses", href: "/client-reactivation-setup-for-service-businesses" },
    { label: "Client reactivation launch checklist for small business", href: "/client-reactivation-launch-checklist-small-business" },
    { label: "Client reactivation ROI for small business", href: "/client-reactivation-roi-small-business" },
    { label: "Client reactivation setup vs. DIY", href: "/client-reactivation-setup-vs-diy-small-business" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "HVAC database reactivation", href: "/hvac-database-reactivation" },
    { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
    { label: "AI lead follow-up cost", href: "/ai-lead-follow-up-cost-small-business" },
    { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
    { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "Case studies", href: "/case-studies" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
