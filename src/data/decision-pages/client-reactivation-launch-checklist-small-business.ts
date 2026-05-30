import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Clock,
  Database,
  MessageSquare,
  RefreshCw,
  Route,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "client-reactivation-launch-checklist-small-business",
  metaTitle:
    "Client Reactivation Launch Checklist for Small Business — What to Verify Before Dormant-Client Outreach Goes Live | Dmytro AI",
  metaDescription:
    "Practical client reactivation launch checklist for small businesses. Verify segment readiness, suppression rules, timing windows, reply routing, CRM visibility, and ugly-case testing before dormant-client outreach goes live.",
  badgeText: "Launch Checklist",
  badgeIcon: ClipboardList,
  h1: "Client Reactivation Launch Checklist for Small Business",
  heroIntro:
    "Client reactivation should not go live just because the first draft email sounded friendly and the automation technically sent a test message. Before a small business starts dormant-client outreach, the operating layer under the campaign needs to be trustworthy: the first segment is actually clean enough to contact, recent and unhappy contacts are suppressed, timing matches a believable next service window, replies route to the right person with enough context, and the CRM shows what happened after the outreach fired. If those checks are still fuzzy, launch week usually teaches the wrong lesson. The wrong past customers get nudged, recent clients hear from you too soon, replies land in a shared inbox with no owner, and the team starts treating client reactivation like another cleanup project instead of a repeat-revenue workflow.",
  heroSubtext:
    "Below: the go-live checks that matter most, what to test before reactivation touches real past clients, when this page is the right one versus setup-help / setup-mistakes / cost / ROI / DIY pages, and what honest proof supports the release-readiness layer in this cluster.",
  sections: [
    {
      type: "cards",
      title: "What should be verified before client reactivation goes live",
      subtitle:
        "These are the checks that decide whether the first campaign feels responsible or careless:",
      items: [
        {
          icon: Database,
          title: "The first dormant segment is actually trustworthy",
          body: "Do not launch from a giant export just because it exists. The first segment should be narrow enough to explain clearly: which past clients belong, why they are dormant now, and why outreach is believable at this moment. If the team cannot describe the first segment in one sentence, the list is not ready.",
        },
        {
          icon: ShieldCheck,
          title: "Suppression rules protect recent, active, and unhappy contacts",
          body: "Recent customers, active jobs, open complaints, do-not-contact records, and people already inside another live workflow should usually be excluded before the first reactivation message sends. Bad suppression is one of the fastest ways to turn dormant-client recovery into apology work.",
        },
        {
          icon: Clock,
          title: "Timing matches a believable next service window",
          body: "A lapsed recurring client, a deferred-work contact, and a customer whose job just wrapped up last week should not all hear from you on the same cadence. Before launch, the outreach window should make sense relative to job history, recency, seasonality, and what the next plausible need actually is.",
        },
        {
          icon: MessageSquare,
          title: "The first message creates a useful next step",
          body: "The opening touch should do more than say hello. It should make the next move obvious: reply if you still need service, book a check-in, confirm interest, or expect a callback within a real window. If the message only acknowledges the past relationship without shaping what happens next, the campaign feels active but not useful.",
        },
        {
          icon: Route,
          title: "Replies and edge cases route correctly",
          body: "Positive replies, pricing questions, unsubscribes, complaints, and wrong-person answers should not all land in the same place. Before go-live, the workflow needs a clear path for each so the team can trust what happens once a past client responds.",
        },
        {
          icon: Users,
          title: "CRM visibility and ownership are tested",
          body: "The office should be able to see which campaign fired, who replied, who owns the next action, and whether outreach stopped correctly. If the team still has to reconstruct state manually after a reply comes in, the workflow is not ready for real past-client volume.",
        },
      ],
    },
    {
      type: "table",
      title: "The pre-launch checks that matter most",
      subtitle:
        "If you only test the happy path, you miss the failures that usually break trust first:",
      headers: ["Checklist item", "What to verify", "Why it matters"],
      rows: [
        {
          label: "Segment readiness",
          values: [
            "The first list contains the exact past-client group you intend to contact — not stale leads, not active jobs, and not everyone in the CRM",
            "Bad segment selection makes every later result harder to trust, even if the copy and routing are decent",
          ],
        },
        {
          label: "Suppression and stop rules",
          values: [
            "Recent clients, active opportunities, complaints, opt-outs, and replied contacts all stay out of future touches automatically",
            "This protects trust and keeps the office from cleaning up contradictory outreach after the campaign starts",
          ],
        },
        {
          label: "Timing logic",
          values: [
            "Outreach sends when the next service need is actually believable by job type, recency, or seasonality",
            "Wrong timing is what makes even a polite dormant-client message feel random or desperate",
          ],
        },
        {
          label: "Reply routing",
          values: [
            "Interested replies, pricing questions, wrong-person replies, and complaints each route to the right place with enough context attached",
            "Client reactivation only works when the reopened conversation reaches a human fast enough to matter",
          ],
        },
        {
          label: "CRM visibility and ownership",
          values: [
            "The team can see last touch, reply status, owner, and next action without piecing it together across multiple tools",
            "Without visible state truth, the workflow becomes another hidden automation nobody wants to trust twice",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is useful — and when it is not",
      subtitle:
        "This checklist is for owners who are already near launch and want a safer first reactivation release:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You already know dormant-client recovery is the right workflow and now need to decide whether it is safe enough to turn on",
            "A few wrong live messages would be enough to make the team distrust reactivation quickly",
            "Your bigger question is release readiness, not setup scope, cost, or ROI",
            "Past-client replies need to reach a real owner fast because recovered opportunities matter financially",
            "You want a narrower first release instead of a vague launch that teaches the team the workflow is noisy",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether client reactivation is even the right workflow to build first",
            "Your main question is setup scope, cost, ROI, or DIY-vs-hiring-help rather than go-live readiness",
            "The list is so small that a manual check-in is still more sensible than a reusable automation",
            "The bigger leak is still missed calls, slow first response, or stale estimates before repeat-customer recovery",
            "You want a generic checklist that avoids real decisions around segmentation, suppression, and reply ownership",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to use a launch checklist without turning it into busywork",
      subtitle:
        "The goal is not another internal document. The goal is a narrower and more trustworthy first release:",
      items: [
        {
          icon: Wrench,
          title: "Launch one disciplined segment first",
          body: "One service type, one believable timing window, one owner, and one obvious next step is enough for a first release. The checklist should make the rollout smaller and safer, not broader and harder to trust.",
        },
        {
          icon: AlertTriangle,
          title: "Test ugly scenarios, not just polite positive replies",
          body: "Run recent-client false positives, wrong-person replies, unhappy customers, duplicate contacts, unsubscribes, and past clients already in another active process. If the workflow only works when everyone behaves predictably, it is not ready.",
        },
        {
          icon: Workflow,
          title: "Write the stop rules before polishing the campaign",
          body: "The expensive launch failures are usually boundary failures, not wording failures. Decide what stops the sequence, who owns each reply type, and when a human should take over before debating how warm the first message sounds.",
        },
        {
          icon: RefreshCw,
          title: "Make post-launch review part of the release gate",
          body: "The first live segment will expose blind spots. Decide in advance who reviews campaign results, edge cases, and routing misses after week one so the workflow gets tighter instead of drifting quietly.",
        },
      ],
    },
    {
      type: "prose",
      title: "How this page stays distinct from the other client-reactivation pages",
      subtitle:
        "The live cluster already covers the parent, setup-help, setup-mistakes, setup-vs-DIY, cost, and ROI layers. This page sits one step later in the decision chain:",
      blocks: [
        {
          heading: "This page is about go-live readiness, not implementation scope",
          body: "The setup-help page explains what a proper reactivation build should include and when setup help is worth paying for. This launch-checklist page assumes the workflow is already close to that stage and asks whether it is actually safe enough to turn on now.",
        },
        {
          heading: "This page turns the mistakes layer into an operational release gate",
          body: "The setup-mistakes page explains the failures that create bad segments, weak suppression, and messy routing. This page turns those risks into a practical launch decision: what has to be verified, tested, and owned before dormant-client outreach touches real past customers.",
        },
        {
          heading: "A useful checklist should change launch behavior",
          body: "If this page does not help the owner narrow the release, delay a risky launch, tighten ownership, or test uglier real-world cases, it is just content clutter. The real output should be a cleaner first reactivation rollout, not another page in the cluster that says the same thing differently.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone client-reactivation launch-checklist case study here. The support comes from the live reactivation cluster, the HVAC database reactivation page, and the published e-commerce CRM case study already on the site:",
      studies: [
        {
          industry: "Existing client-reactivation cluster",
          headline: "The live parent, setup-help, setup-mistakes, cost, ROI, and DIY pages already define the surrounding buyer decisions clearly",
          body: "That cluster makes the remaining exact release-readiness page viable: what should be verified before dormant-client outreach goes live? This page isolates the go-live gate instead of rehashing broader setup scope, budget, or buy-vs-build framing.",
          link: "/client-reactivation-setup-for-service-businesses",
        },
        {
          industry: "HVAC / database reactivation",
          headline: "The HVAC database reactivation page proves why timing, segmentation, and routed follow-up matter before outreach ever starts",
          body: "That page already depends on good segment selection, believable service timing, and clean routing back to the team. The same implementation discipline this page describes is what makes dormant-customer recovery usable in a real service business.",
          link: "/hvac-database-reactivation",
        },
        {
          industry: "E-commerce / CRM automation",
          headline: "The vehicle accessories case study shows the operational side of cleanup, segmentation, and routed follow-up",
          body: "The published CRM case study proves that organizing messy records, building usable sequences, and routing reactivated demand back to a real team is implementation work, not just copywriting. That same operational discipline is what separates a trustworthy reactivation launch from a cleanup project.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Client reactivation for service businesses", href: "/client-reactivation-automation-for-service-businesses" },
        { label: "Client reactivation setup help", href: "/client-reactivation-setup-for-service-businesses" },
        { label: "Client reactivation setup mistakes", href: "/client-reactivation-setup-mistakes-small-business" },
        { label: "Client reactivation setup vs. DIY", href: "/client-reactivation-setup-vs-diy-small-business" },
        { label: "Client reactivation cost", href: "/client-reactivation-cost-small-business" },
        { label: "Client reactivation ROI", href: "/client-reactivation-roi-small-business" },
        { label: "HVAC database reactivation", href: "/hvac-database-reactivation" },
        { label: "E-commerce CRM case study", href: "/case-studies/ecommerce-crm-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should be verified before client reactivation goes live?",
      answer:
        "At minimum: a trustworthy first dormant segment, strong suppression for recent and unhappy contacts, believable timing windows, clear reply routing, CRM visibility, and obvious ownership after a past client responds. If those pieces are still fuzzy, the launch is not ready.",
    },
    {
      question: "What should I test before turning on dormant-client outreach?",
      answer:
        "Test recent-client false positives, duplicate-contact behavior, wrong-person replies, complaints, unsubscribes, timing windows, and whether a live positive reply stops the sequence and reaches the correct human with enough context. The real test is whether the workflow behaves responsibly when the contact is off the happy path.",
    },
    {
      question: "How is this different from the client reactivation setup-help page?",
      answer:
        "The setup-help page explains what a good implementation project should include and when setup help is worth paying for. This page is narrower: the go-live checklist that helps you decide whether the workflow is actually safe enough to launch now.",
    },
    {
      question: "How is this different from the client reactivation setup-mistakes page?",
      answer:
        "The setup-mistakes page explains the failure patterns that create bad segments, awkward timing, weak routing, and future cleanup. This page turns those risks into a release gate: what has to be verified, tested, and owned before live dormant-client outreach starts.",
    },
    {
      question: "When should I delay launch instead of forcing client reactivation live?",
      answer:
        "Delay launch when the first segment is still fuzzy, suppression is incomplete, reply ownership is unclear, timing still feels guessed, or the CRM cannot show what happened after a message goes out. A slightly later clean launch is usually cheaper than a fast launch the team stops trusting after a few bad sends.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners who are close to launching client reactivation and want a safer first rollout instead of a CRM cleanup project a few weeks later",
  ctaHeading: "Need a second opinion before client reactivation goes live?",
  ctaText:
    "Book a 30-minute call. We will review your first segment, timing logic, suppression rules, reply routing, CRM visibility, and ugly-case tests so you can decide whether the workflow is ready now, needs a narrower first release, or should wait until the launch risk is lower.",
  ctaSubtext:
    "Useful if you are already near go-live and want dormant-client recovery to feel reliable from week one instead of becoming another list-cleanup project later.",
  relatedLinks: [
    { label: "Client reactivation for service businesses", href: "/client-reactivation-automation-for-service-businesses" },
    { label: "Client reactivation setup help", href: "/client-reactivation-setup-for-service-businesses" },
    { label: "Client reactivation setup mistakes", href: "/client-reactivation-setup-mistakes-small-business" },
    { label: "Client reactivation setup vs. DIY", href: "/client-reactivation-setup-vs-diy-small-business" },
    { label: "Client reactivation cost", href: "/client-reactivation-cost-small-business" },
    { label: "Client reactivation ROI", href: "/client-reactivation-roi-small-business" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "HVAC database reactivation", href: "/hvac-database-reactivation" },
    { label: "AI lead follow-up setup", href: "/ai-lead-follow-up-setup-for-service-businesses" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
