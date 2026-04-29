import {
  Settings,
  Database,
  CalendarRange,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  ClipboardList,
  ShieldCheck,
  Users,
  AlertTriangle,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "client-reactivation-setup-for-service-businesses",
  metaTitle:
    "Client Reactivation Setup for Service Businesses — What to Configure Before Dormant-Client Outreach Goes Live | Dmytro AI",
  metaDescription:
    "What goes into client reactivation setup for a service business? Segmentation rules, CRM cleanup, timing windows, stop rules, reply routing, handoff ownership, testing, and when setup help is worth paying for versus a simpler manual check-in.",
  badgeText: "Reactivation Setup",
  badgeIcon: Settings,
  h1: "Client Reactivation Setup for Service Businesses",
  heroIntro:
    "Most client reactivation projects fail before the first message is sent. The business exports a big list of past customers, writes one generic check-in, and assumes dormant revenue will come back on its own. Then the wrong people get contacted, recent clients get messages too early, unsubscribes are handled sloppily, replies land in the wrong inbox, and nobody knows who owns the next step when a past customer finally responds. Client reactivation setup for service businesses is the work that prevents that mess. It defines which dormant segments are truly worth contacting, when outreach is believable, how CRM cleanup and suppression rules protect trust, and how live replies get routed back to a person fast enough to matter.",
  heroSubtext:
    "Below: what setup should include before a reactivation workflow goes live, how this stays distinct from the parent / cost / ROI pages, when professional implementation help is worth paying for, and what honest proof supports the setup guidance.",
  sections: [
    {
      type: "cards",
      title: "What client reactivation setup actually covers",
      subtitle:
        "A real setup is more than writing a message and scheduling a blast. These are the implementation layers that decide whether dormant-client recovery feels useful or spammy:",
      items: [
        {
          icon: Database,
          title: "CRM cleanup and segment definition",
          body: "Before outreach starts, someone has to decide which contacts are real candidates for reactivation. That means cleaning duplicates, checking whether phone and email fields are usable, separating completed-job clients from stale leads, and defining what dormant actually means for the business instead of treating the whole database as one audience.",
        },
        {
          icon: CalendarRange,
          title: "Timing windows tied to believable service needs",
          body: "A recent cleaning client, a deferred auto-repair customer, and a roofing customer from 18 months ago should not all get the same message on the same day. Setup includes defining when outreach makes sense by service cycle, recency, and likely next need so the reactivation feels timely instead of random.",
        },
        {
          icon: MessageSquare,
          title: "Sequence logic, stop rules, and suppression",
          body: "Reactivation usually needs more than one touch, but it also needs clear rules for when to stop. A reply, booking request, opt-out, bounced address, or recent open opportunity should each suppress future messages. Without that setup, dormant-client outreach becomes noisy fast.",
        },
        {
          icon: ArrowUpRight,
          title: "Reply routing and human handoff",
          body: "When a past client responds, the automation should route that context to the right person with enough history attached for a useful follow-up. If replies sit in a shared inbox without job history, the business wastes the reopened relationship and turns a warm response into another cold lead.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What should be configured before reactivation goes live",
      subtitle:
        "These decisions protect trust and make the first campaign usable in the real business, not just in a demo.",
      items: [
        {
          icon: ClipboardList,
          title: "Who belongs in the first reactivation segment",
          body: "Start with the highest-confidence dormant group: recent completions, lapsed recurring clients, deferred-work customers, or past clients entering the next believable service window. Do not open with the entire CRM unless the data is unusually clean and the timing is obvious.",
        },
        {
          icon: ShieldCheck,
          title: "Suppression rules that avoid embarrassing outreach",
          body: "Recent customers, active deals, do-not-contact records, unresolved complaints, and contacts already in another live workflow should be suppressed before a reactivation sequence starts. This protects trust and keeps the business from sending the wrong message to the wrong person at the wrong time.",
        },
        {
          icon: Users,
          title: "Ownership when a dormant client replies",
          body: "Someone must own the next step. If a past customer says they want to schedule, asks for pricing, or mentions another property, the office should know exactly who handles that response, how fast they respond, and what context they see in the CRM before they call or text back.",
        },
        {
          icon: BarChart3,
          title: "Measurement beyond open rate",
          body: "Setup should define what counts as a useful outcome: a repeat booking, an estimate request, a referral conversation, a lapsed account returning, or at least a warm reply that moves into a pipeline stage. If the business only measures opens and clicks, it will miss whether the workflow is actually recovering revenue.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When setup help is worth paying for — and when it is not",
      subtitle:
        "Professional setup makes sense when sloppy implementation will cost more than the setup itself.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth paying for setup help",
          variant: "green",
          items: [
            "Your CRM or spreadsheet history is messy enough that segmentation, duplicate cleanup, and suppression rules need real attention before outreach can run",
            "You want different timing and messages for multiple dormant groups instead of one generic blast",
            "Past-client replies need routing into a CRM, owner queue, or estimator / office workflow instead of landing in one shared inbox",
            "The business already has enough completed-job history that one or two recovered opportunities per month would matter financially",
            "Nobody on the team has the time to design the logic, test edge cases, and catch bad outreach before it damages trust",
          ],
        },
        {
          icon: XCircle,
          heading: "A lighter path is probably enough",
          variant: "neutral",
          items: [
            "You mainly need one manual check-in to a short list of recent past clients, not a reusable reactivation system",
            "The past-client list is tiny or poorly documented, so the setup work would be more speculative than useful",
            "The bigger leak is still missed calls, weak first response, or estimates going cold before jobs are won",
            "The business cannot actually respond quickly when dormant clients reply, so the handoff layer would still fail",
            "You are trying to use automation to cover for poor service quality or unresolved complaints instead of fixing the real trust problem first",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "The setup mistakes that usually break dormant-client recovery",
      subtitle:
        "These are the practical gaps that make reactivation look ineffective even when the underlying opportunity was real.",
      blocks: [
        {
          heading: "Treating stale leads and past customers as the same audience",
          body: "A contact who once requested a quote but never bought is not the same as a satisfied customer whose service cycle has simply gone quiet. Mixing those audiences creates confused messaging, misleading reporting, and a workflow that is harder to trust after the first run.",
        },
        {
          heading: "Sending one generic message without timing logic",
          body: "Reactivation works when the outreach lines up with a believable next step. If the business ignores job history, service cycle, seasonality, or recency, even a well-written message feels random. Setup should define timing logic before copy is drafted, not after the first campaign disappoints.",
        },
        {
          heading: "Launching without testing suppression and stop conditions",
          body: "If recent clients, active opportunities, opt-outs, and replied contacts are not handled correctly, the workflow creates awkward follow-up fast. Most businesses discover this only after a customer replies with some version of 'why am I getting this?' Testing those edge cases is part of the setup, not optional cleanup after launch.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "There is no single published setup case study for cross-industry client reactivation. The honest proof frame comes from the HVAC database reactivation page, the e-commerce CRM case study, and the live service-business reactivation cluster already on the site.",
      studies: [
        {
          industry: "HVAC / database reactivation",
          headline: "The HVAC database reactivation page proves why setup quality matters before outreach ever starts",
          body: "That page already depends on good segment selection, believable timing, and clean routing back to the team. The same setup layers this page describes are what make that kind of dormant-customer recovery usable in a real service business.",
          link: "/hvac-database-reactivation",
        },
        {
          industry: "E-commerce / CRM automation",
          headline: "WheelsFeels shows the operational side of cleanup, segmentation, and routed follow-up",
          body: "The published CRM case study proves that organizing messy records, building usable sequences, and routing reactivated demand back to a real team is implementation work, not just copywriting. That same operational discipline is what service-business reactivation setup needs.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Service-business reactivation cluster",
          headline: "The parent, cost, ROI, and vertical reactivation children define where this setup page fits",
          body: "Those live pages already explain when reactivation is useful, what it costs, and where it pays back. This page stays narrower by focusing on implementation scope: what must be configured before the first dormant-client workflow goes live without damaging trust.",
          link: "/client-reactivation-automation-for-service-businesses",
        },
      ],
      links: [
        {
          label: "Client reactivation for service businesses",
          href: "/client-reactivation-automation-for-service-businesses",
        },
        {
          label: "Client reactivation cost for small business",
          href: "/client-reactivation-cost-small-business",
        },
        {
          label: "Client reactivation ROI for small business",
          href: "/client-reactivation-roi-small-business",
        },
        {
          label: "Client reactivation automation",
          href: "/client-reactivation-automation",
        },
        {
          label: "HVAC database reactivation",
          href: "/hvac-database-reactivation",
        },
        {
          label: "E-commerce CRM case study",
          href: "/case-studies/ecommerce-crm-automation",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does client reactivation setup involve for a service business?",
      answer:
        "It usually includes cleaning and segmenting past-client data, defining who should and should not be contacted, setting timing windows for believable outreach, writing stop and suppression rules, mapping how replies route back to the right person, and testing the workflow before the first live campaign goes out.",
    },
    {
      question: "How is this different from the service-business reactivation parent page?",
      answer:
        "The parent page explains where client reactivation fits operationally across trades. This page focuses on implementation scope: what has to be configured before dormant-client outreach goes live and what breaks when that setup work is skipped.",
    },
    {
      question: "How is this different from the cost and ROI pages?",
      answer:
        "The cost page is about realistic budget ranges. The ROI page is about payback and recovered repeat revenue. This page is about build quality: segmentation rules, suppression logic, reply routing, ownership, and testing before launch.",
    },
    {
      question: "When is setup help worth paying for?",
      answer:
        "Usually when the CRM data is messy, multiple dormant segments need different timing, replies have to route into a real owner workflow, and the business cannot afford sloppy outreach that makes recent clients or unhappy customers feel spammed. If the need is just one manual check-in to a short list, a lighter path may be enough.",
    },
    {
      question: "What is the most common mistake in reactivation setup?",
      answer:
        "Treating the whole past-client database like one audience. Good reactivation starts with the right segment, believable timing, and strong suppression rules. When businesses skip that and blast everyone at once, the workflow feels noisy, reporting becomes muddy, and trust drops before the automation has a chance to prove anything.",
    },
  ],
  faqSubtitle:
    "Practical questions about implementing client reactivation without making dormant-client outreach sloppy",
  ctaHeading: "Want to set up client reactivation without turning your CRM into a spam machine?",
  ctaText:
    "Book a 30-minute call. We will look at your past-client data, define the first segment worth reactivating, and scope the narrowest setup that gets useful dormant-client outreach live without creating routing or trust problems.",
  ctaSubtext:
    "No generic lifecycle pitch. Just a practical setup conversation tied to your service cycle, CRM state, and team capacity.",
  relatedLinks: [
    {
      label: "Client reactivation for service businesses",
      href: "/client-reactivation-automation-for-service-businesses",
    },
    {
      label: "Client reactivation cost for small business",
      href: "/client-reactivation-cost-small-business",
    },
    {
      label: "Client reactivation ROI for small business",
      href: "/client-reactivation-roi-small-business",
    },
    {
      label: "Client reactivation automation",
      href: "/client-reactivation-automation",
    },
    {
      label: "AI lead follow-up setup for service businesses",
      href: "/ai-lead-follow-up-setup-for-service-businesses",
    },
    {
      label: "Estimate follow-up automation for service businesses",
      href: "/estimate-follow-up-automation-for-service-businesses",
    },
    {
      label: "Guides hub",
      href: "/guides",
    },
  ],
};

export default data;
