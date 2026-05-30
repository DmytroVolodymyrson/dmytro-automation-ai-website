import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Clock,
  MessageSquare,
  Route,
  ShieldCheck,
  Star,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "review-request-automation-launch-checklist-small-business",
  metaTitle:
    "Review Request Automation Launch Checklist for Small Business — What to Verify Before Go-Live | Dmytro AI",
  metaDescription:
    "Practical review-request automation launch checklist for small businesses. What to verify before go-live: completed-job triggers, timing rules, complaint suppression, CRM logging, review-vs-referral separation, and owner handoff.",
  badgeText: "Launch Checklist",
  badgeIcon: ClipboardList,
  h1: "Review Request Automation Launch Checklist for Small Business",
  heroIntro:
    "A review-request workflow should not go live just because the message sounds polite and the review link works. Before launch, a small business needs to verify the operating layer underneath it: the system can tell when the work is truly complete, timing matches the service type, unresolved issues stop the public ask, replies route to the right human, and the CRM shows enough state that the team can trust what happened. If those checks are still fuzzy, the first live week usually creates exactly the kind of cleanup owners hate — early asks, confused customers, unresolved complaints sitting inside a public-review sequence, and a team that stops trusting the workflow after a few obvious misses.",
  heroSubtext:
    "Below: the launch checklist that matters most, what to test before turning review automation on, when this page is useful, and how it stays distinct from the setup-help, setup-mistakes, cost, ROI, and DIY pages already live in the review-request cluster.",
  sections: [
    {
      type: "cards",
      title: "What to verify before a review-request workflow goes live",
      subtitle:
        "These are the checks that decide whether launch week feels trustworthy or awkward:",
      items: [
        {
          icon: Workflow,
          title: "The completed-job trigger is actually trustworthy",
          body: "The workflow should only fire when the business can confidently say the work is done enough to ask for public proof. If technicians, office staff, or the CRM all mark completion differently, the launch is not ready yet.",
        },
        {
          icon: Clock,
          title: "Timing matches the actual service experience",
          body: "A same-day repair, recurring visit, larger install, and longer project closeout do not all create review readiness on the same timeline. Before go-live, each timing rule should match the real customer experience instead of one generic delay.",
        },
        {
          icon: ShieldCheck,
          title: "Open issues stop the public ask automatically",
          body: "Callbacks, billing questions, warranty concerns, cleanup issues, and active complaint threads should suppress review requests immediately. If the workflow cannot stop itself when service recovery is still happening, it is not ready.",
        },
        {
          icon: MessageSquare,
          title: "Reply routing and ownership are tested",
          body: "A thank-you, a complaint, a confused reply, and a referral mention should not all land in the same lane. Before launch, the business should know who owns each kind of reply and what the next step looks like.",
        },
        {
          icon: Star,
          title: "Review asks stay separate from referral asks",
          body: "If the business also wants referrals, the launch should keep review and referral workflows separate. Stacking both asks into one message usually weakens both and makes it harder to tell which path actually worked.",
        },
      ],
    },
    {
      type: "table",
      title: "The pre-launch checks that matter most",
      subtitle:
        "If you only test the clean demo path, you miss the things that usually break trust first:",
      headers: ["Checklist item", "What to verify", "Why it matters"],
      rows: [
        {
          label: "Completion signal",
          values: [
            "One reliable status, invoice, or closeout event means the work is actually done enough to ask for a review",
            "If the trigger is fuzzy, every message after it inherits the same bad timing problem",
          ],
        },
        {
          label: "Timing by service type",
          values: [
            "Quick jobs, recurring work, and larger projects each have the right delay before the ask fires",
            "Bad timing makes the workflow sound scripted and tone-deaf even if the copy itself is fine",
          ],
        },
        {
          label: "Complaint suppression",
          values: [
            "Open issues, callbacks, warranty work, and billing confusion stop the public ask instead of letting it continue",
            "This is the difference between reputation automation and accidental trust damage",
          ],
        },
        {
          label: "CRM visibility and handoff",
          values: [
            "The team can see when the ask fired, what the customer replied, who owns the next step, and whether the workflow should stay stopped",
            "If the office still has to reconstruct what happened manually, the workflow is not ready for live volume",
          ],
        },
        {
          label: "Review-vs-referral separation",
          values: [
            "Public-proof asks and private-advocacy asks stay on different paths with different timing and ownership",
            "Bundled post-job asks create weaker engagement and messier follow-through on both sides",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is useful — and when it is not",
      subtitle:
        "This checklist is useful for businesses that are already near launch and want a safer first rollout:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You already know review-request automation matters and now need to decide whether the workflow is actually safe enough to turn on",
            "Wrong timing or bad complaint routing would create real office friction or customer awkwardness quickly",
            "The business wants a narrower release gate, not another abstract page about setup scope or ROI",
            "Different service types, locations, or handoff rules mean a sloppy launch would be hard to clean up quietly",
            "One or two visibly wrong review asks would be enough to make the team stop trusting the workflow",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether review-request automation is the right workflow at all",
            "Your main question is setup help, pricing, ROI, or DIY-vs-hiring help rather than go-live readiness",
            "Completed-job volume is low enough that a manual ask after each job is still realistic",
            "The business does not yet have a stable closeout process, so the real gap is operational discipline before launch",
            "You want a generic checklist that avoids making a real timing, routing, or ownership decision",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to use a launch checklist without turning it into busywork",
      subtitle:
        "The goal is not more process theatre. The goal is a narrower and more trustworthy first release:",
      items: [
        {
          icon: Wrench,
          title: "Launch one disciplined review path first",
          body: "Start with one reliable completed-job trigger, one timing pattern, one complaint stop path, and one clean public ask. The checklist should make the first release smaller and safer, not push you toward a bigger reputation system before the basics work.",
        },
        {
          icon: AlertTriangle,
          title: "Test ugly service-recovery scenarios, not just happy customers",
          body: "Run callbacks, open billing questions, repeat visits for the same problem, unresolved issues, and customers who reply with frustration. If the workflow only works when the customer is already happy and silent, it is not ready.",
        },
        {
          icon: Route,
          title: "Write the stop rules down before polishing copy",
          body: "The expensive launch failures are boundary failures, not wording failures. Decide what stops the review ask, who gets the reply, and when a human should take over before you debate tone.",
        },
        {
          icon: Users,
          title: "Make ownership visible after the workflow fires",
          body: "The office should know whether the customer was asked, whether they replied, whether the workflow stopped, and who owns the next move. Hidden state is what makes teams distrust post-job automation fastest.",
        },
      ],
    },
    {
      type: "prose",
      title: "How this page stays distinct from the other review-request setup pages",
      subtitle:
        "The live cluster already covers setup help, setup mistakes, setup-vs-DIY, cost, ROI, and the review-vs-referral comparison. This page sits one step later in the decision chain:",
      blocks: [
        {
          heading: "This page is about go-live readiness, not project scope",
          body: "The setup-help page explains what a proper review-request implementation should include. This launch-checklist page assumes the workflow is already close to that stage and asks whether it is actually ready for live customers now.",
        },
        {
          heading: "This page turns the mistakes layer into an operational release gate",
          body: "The setup-mistakes page explains the failure patterns that usually create future cleanup. This page turns those risks into a launch decision: what has to be verified, tested, and owned before the workflow goes live.",
        },
        {
          heading: "A useful checklist changes launch behavior",
          body: "If this page does not help the owner narrow scope, test real edge cases, delay a risky release, or assign clearer ownership, it is just content clutter. The real output should be a cleaner first launch, not more automation theatre.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone review-request launch-checklist case study here. The support comes from the live review-request cluster, the review-vs-referral decision page, and the published CRM lifecycle case study already on the site:",
      studies: [
        {
          industry: "Existing review-request cluster",
          headline: "The parent, setup, setup-mistakes, DIY, cost, and ROI pages already define the surrounding buyer decisions clearly",
          body: "That live cluster makes the remaining exact launch-readiness page viable: what should be verified before review-request automation actually goes live? This page isolates the release gate instead of rehashing broader setup scope, pricing, or payback.",
          link: "/review-request-automation-setup-for-service-businesses",
        },
        {
          industry: "Post-job decision proof",
          headline: "The review-vs-referral comparison already proves why post-job asks need separate timing, routing, and ownership",
          body: "That page is not a launch checklist, but it is direct adjacent proof for one of the biggest go-live failures here: collapsing public-review and private-referral asks into one crowded workflow because it looked efficient in the automation tool.",
          link: "/review-request-vs-referral-request-for-service-businesses",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "The vehicle accessories CRM case study proves why state truth, routing, and next-step ownership matter after a customer milestone changes",
          body: "Different exact workflow, same operational lesson. Valuable follow-through only works when the business can trust the stage change, see the reply, and know who owns the next move. A review-request launch depends on the same mechanics.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Review request automation setup", href: "/review-request-automation-setup-for-service-businesses" },
        { label: "Review request setup mistakes", href: "/review-request-automation-setup-mistakes-small-business" },
        { label: "Review request setup vs. DIY", href: "/review-request-automation-setup-vs-diy-small-business" },
        { label: "Review request automation cost", href: "/review-request-automation-cost-small-business" },
        { label: "Review request automation ROI", href: "/review-request-automation-roi-small-business" },
        { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
        { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should be verified before review-request automation goes live?",
      answer:
        "At minimum: the business has one trustworthy completed-job trigger, timing rules match the service type, open issues automatically stop the public ask, replies route to the right human, CRM state is visible after the workflow fires, and review asks stay separate from referral asks. If those pieces are still fuzzy, the launch is not ready.",
    },
    {
      question: "What should I test before turning on a review-request workflow?",
      answer:
        "Test early-closeout mistakes, unresolved callbacks, billing questions, repeat visits for the same problem, unhappy replies, and any path where a public ask should stop. The real test is whether the workflow still behaves responsibly when the customer is not on the happy path.",
    },
    {
      question: "How is this different from the review-request setup-help page?",
      answer:
        "The setup-help page explains what a good implementation project should include and when setup help is worth paying for. This page is narrower: the go-live checklist that helps you decide whether the workflow is actually safe enough to launch now.",
    },
    {
      question: "How is this different from the review-request setup-mistakes page?",
      answer:
        "The setup-mistakes page explains the failure patterns that usually create future cleanup. This page turns those risks into a practical release gate: what has to be verified, tested, and owned before the workflow goes live.",
    },
    {
      question: "When should I delay launch instead of forcing review automation live?",
      answer:
        "Delay launch when completion signals are still inconsistent, complaint suppression is untested, reply ownership is unclear, CRM visibility is weak, or the business still wants to bundle review and referral asks into the same path. A slightly later clean launch is almost always cheaper than an awkward first release the team stops trusting.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners who are close to launching review-request automation and want a safer release instead of a cleanup project a few weeks later",
  ctaHeading: "Need a second opinion before review automation goes live?",
  ctaText:
    "Book a 30-minute call. We will look at your completed-job trigger, timing rules, complaint suppression, reply ownership, review-vs-referral separation, and CRM visibility so you can decide whether the workflow is ready now, needs a narrower first launch, or should wait until the release risk is lower.",
  ctaSubtext:
    "Useful if you are already close to go-live and want to avoid teaching the team that review automation is awkward or unsafe after the first few live customers.",
  relatedLinks: [
    { label: "Review request automation for service businesses", href: "/review-request-automation-for-service-businesses" },
    { label: "Review request automation setup", href: "/review-request-automation-setup-for-service-businesses" },
    { label: "Review request setup mistakes", href: "/review-request-automation-setup-mistakes-small-business" },
    { label: "Review request setup vs. DIY", href: "/review-request-automation-setup-vs-diy-small-business" },
    { label: "Review request automation cost", href: "/review-request-automation-cost-small-business" },
    { label: "Review request automation ROI", href: "/review-request-automation-roi-small-business" },
    { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
    { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
    { label: "No-show reduction launch checklist", href: "/no-show-reduction-launch-checklist-small-business" },
    { label: "Client onboarding launch checklist", href: "/client-onboarding-launch-checklist-small-business" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
