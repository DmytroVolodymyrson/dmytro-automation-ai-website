import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Clock,
  MessageSquare,
  Route,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "estimate-follow-up-launch-checklist-small-business",
  metaTitle:
    "Estimate Follow-Up Launch Checklist for Small Business — What to Verify Before Go-Live | Dmytro AI",
  metaDescription:
    "Practical estimate follow-up launch checklist for small businesses. What to verify before go-live: estimate-sent triggers, stale-estimate timing, stop rules, reply routing, CRM visibility, and estimator-to-office ownership.",
  badgeText: "Launch Checklist",
  badgeIcon: ClipboardList,
  h1: "Estimate Follow-Up Launch Checklist for Small Business",
  heroIntro:
    "Estimate follow-up should not go live just because the reminder copy sounds polite and the CRM can technically send a test message. Before a small business turns estimate recovery on, the operating layer under the workflow needs to be trustworthy: the estimate-sent trigger is actually clean, stale-estimate timing matches the real buying cycle, revision and objection replies stop the automation instead of colliding with it, the office can see what happened after each touch, and estimator-versus-office ownership is obvious once a customer answers. If those checks are still fuzzy, launch week usually teaches the wrong lesson. Estimates get nudged from the wrong stage, live conversations keep getting automated reminders, open quotes look healthy when nobody really owns them, and the team starts treating estimate follow-up like another cleanup project instead of a recovery workflow.",
  heroSubtext:
    "Below: the go-live checks that matter most, what to test before estimate follow-up touches real sent estimates, when this page is the right one versus setup-help / setup-mistakes / cost / ROI / DIY pages, and what honest proof supports the release-readiness layer in this cluster.",
  sections: [
    {
      type: "cards",
      title: "What should be verified before estimate follow-up goes live",
      subtitle:
        "These are the checks that decide whether launch week feels trustworthy or messy:",
      items: [
        {
          icon: Workflow,
          title: "The estimate-sent trigger is actually trustworthy",
          body: "The workflow should only start when the business can confidently say pricing is really out and the estimate is now live. If estimators, office staff, and the CRM all treat that moment differently, launch is not ready yet.",
        },
        {
          icon: Clock,
          title: "Stale-estimate timing matches the real sales cycle",
          body: "A same-day service estimate, a larger project bid, and an insurance-delayed quote do not all cool off on the same schedule. Before go-live, the timing rules should reflect how customers actually decide instead of one generic delay.",
        },
        {
          icon: ShieldCheck,
          title: "Stop rules are written before the sequence sends",
          body: "Accepted estimates, lost jobs, revision requests, financing questions, active objections, and booked-site follow-up should stop or reroute the workflow immediately. If the automation keeps running through those states, it is not ready.",
        },
        {
          icon: MessageSquare,
          title: "Revision and objection replies route to the right human fast",
          body: "A buyer asking for another option, clarifying scope, or pushing timing should not stay inside a canned reminder path. Before launch, the business should know exactly who owns those replies and what the next step looks like.",
        },
        {
          icon: Users,
          title: "CRM visibility and ownership are tested",
          body: "The office should be able to see when follow-up fired, what the customer replied, whether the workflow stopped, and who owns the next move now. If the team still has to reconstruct estimate state manually, the workflow is not ready for live volume.",
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
          label: "Estimate-sent trigger",
          values: [
            "One reliable event means pricing is actually delivered and the opportunity is now in the follow-up window",
            "If the trigger is fuzzy, every reminder after it inherits the same bad state and the workflow looks broken from day one",
          ],
        },
        {
          label: "Stale timing by estimate type",
          values: [
            "Emergency, standard, larger, and insurance-dependent estimates each use a timing pattern that fits how buyers really review them",
            "Bad timing makes follow-up sound robotic even if the copy itself is fine",
          ],
        },
        {
          label: "Stop rules and reroutes",
          values: [
            "Accepted, lost, revised, disputed, or actively discussed estimates stop the generic reminder path and route correctly",
            "This is the difference between estimate recovery and automation colliding with a real sales conversation",
          ],
        },
        {
          label: "Reply ownership",
          values: [
            "The business knows whether questions, objections, approvals, and revision asks go to the owner, office, or estimator",
            "If ownership is unclear, automation creates one more inbox mess instead of helping recover the estimate",
          ],
        },
        {
          label: "CRM visibility",
          values: [
            "The team can see last touch, current owner, last reply, stop status, and next step without digging through multiple tools",
            "If estimate state stays invisible, the workflow still creates manual cleanup later",
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
            "You already know estimate follow-up matters and now need to decide whether the workflow is safe enough to turn on",
            "Wrong timing, weak stop rules, or bad ownership would create real office friction quickly",
            "The business wants a narrower release gate, not another broad page about setup scope or ROI",
            "Different estimate types, channels, or handoff rules mean a sloppy launch would be expensive to clean up quietly",
            "One or two visibly wrong reminders would be enough to make the team stop trusting the workflow",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether estimate follow-up is the right workflow at all",
            "Your main question is setup help, pricing, ROI, or DIY-vs-hiring help rather than go-live readiness",
            "Estimate volume is low enough that careful manual follow-up is still realistic",
            "The real gap is still first response before the estimate stage exists",
            "You want a generic checklist that avoids making a real trigger, timing, or ownership decision",
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
          title: "Launch one disciplined estimate path first",
          body: "Start with one reliable estimate-sent event, one timing pattern, one clean stop-rule set, and one visible ownership path. The checklist should make the first release smaller and safer, not push you toward a broader sales system before the basics work.",
        },
        {
          icon: AlertTriangle,
          title: "Test ugly reply scenarios, not just silent prospects",
          body: "Run revision requests, scope questions, timing objections, lost-job confirmations, partial replies, out-of-office pauses, and buyers who ask for a callback instead of replying in-channel. If the workflow only works when the buyer stays quiet and happy, it is not ready.",
        },
        {
          icon: Route,
          title: "Write the stop rules down before polishing copy",
          body: "The expensive launch failures are boundary failures, not wording failures. Decide what stops the workflow, who gets the reply, and when a human should take over before debating whether reminder two sounds warmer than reminder three.",
        },
        {
          icon: Users,
          title: "Make ownership visible after the workflow fires",
          body: "The office should know whether the estimate was nudged, whether the customer replied, whether the workflow stopped, and who owns the next move. Hidden state is what makes teams distrust estimate recovery fastest.",
        },
      ],
    },
    {
      type: "prose",
      title: "How this page stays distinct from the other estimate-follow-up pages",
      subtitle:
        "The live cluster already covers setup help, setup mistakes, setup-vs-DIY, cost, ROI, and the estimate-vs-quote comparison. This page sits one step later in the decision chain:",
      blocks: [
        {
          heading: "This page is about go-live readiness, not project scope",
          body: "The setup-help page explains what a proper estimate-follow-up implementation should include. This launch-checklist page assumes the workflow is already close to that stage and asks whether it is actually ready for live estimates now.",
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
        "There is no fake standalone estimate-follow-up launch-checklist case study here. The support comes from the live estimate-follow-up cluster, adjacent estimate/setup pages, and the published CRM lifecycle case study already on the site:",
      studies: [
        {
          industry: "Existing estimate-follow-up cluster",
          headline: "The parent, setup-help, setup-mistakes, DIY, cost, ROI, and comparison pages already define the surrounding buyer decisions clearly",
          body: "That live cluster makes the remaining exact launch-readiness page viable: what should be verified before estimate follow-up automation actually goes live? This page isolates the release gate instead of rehashing broader setup scope, pricing, or payback.",
          link: "/estimate-follow-up-automation-for-service-businesses",
        },
        {
          industry: "Estimate and setup proof",
          headline: "The estimate-follow-up and setup pages already prove why stage design, routing, and ownership matter before a recovery workflow goes live",
          body: "Estimate follow-up depends on the same operational discipline: clean stage definitions, realistic timing, visible ownership, and a workflow the office can trust after launch. That is the honest adjacent proof for why launch-checklist gaps here get expensive quickly.",
          link: "/estimate-follow-up-setup-for-service-businesses",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "The vehicle accessories CRM case study proves why stale opportunities still need clean state, routing, and next-step ownership behind them",
          body: "Different exact workflow, same operational lesson. The published CRM case study shows that recovered opportunities only become revenue when the business can trust stage ownership, follow-up visibility, and downstream handoff after a buyer re-engages.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Estimate follow-up automation for service businesses", href: "/estimate-follow-up-automation-for-service-businesses" },
        { label: "Estimate follow-up setup help", href: "/estimate-follow-up-setup-for-service-businesses" },
        { label: "Estimate follow-up setup mistakes", href: "/estimate-follow-up-setup-mistakes-small-business" },
        { label: "Estimate follow-up setup vs. DIY", href: "/estimate-follow-up-setup-vs-diy-small-business" },
        { label: "Estimate follow-up cost", href: "/estimate-follow-up-cost-small-business" },
        { label: "Estimate follow-up ROI", href: "/estimate-follow-up-roi-small-business" },
        { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should be verified before estimate follow-up automation goes live?",
      answer:
        "At minimum: the business has one trustworthy estimate-sent trigger, stale timing matches the real buying cycle, accepted or revised estimates stop the sequence, objection and revision replies route to the right human, CRM visibility is clear after the workflow fires, and ownership is obvious when a customer re-engages. If those pieces are still fuzzy, the launch is not ready.",
    },
    {
      question: "What should I test before turning on an estimate-follow-up workflow?",
      answer:
        "Test bad triggers, revision requests, scope questions, timing objections, accepted estimates that should stop immediately, lost jobs, partial replies, and any path where a human conversation should take over. The real test is whether the workflow still behaves responsibly when the buyer is no longer on the quiet happy path.",
    },
    {
      question: "How is this different from the estimate follow-up setup-help page?",
      answer:
        "The setup-help page explains what a good implementation project should include and when setup help is worth paying for. This page is narrower: the go-live checklist that helps you decide whether the workflow is actually safe enough to launch now.",
    },
    {
      question: "How is this different from the estimate follow-up setup-mistakes page?",
      answer:
        "The setup-mistakes page explains the failure patterns that usually create future cleanup. This page turns those risks into a practical release gate: what has to be verified, tested, and owned before the workflow goes live.",
    },
    {
      question: "When should I delay launch instead of forcing estimate follow-up live?",
      answer:
        "Delay launch when estimate-sent state is inconsistent, stale timing is still guessed, stop rules are untested, reply ownership is unclear, or the CRM cannot show what happened after the last touch. A slightly later clean launch is almost always cheaper than an awkward first release the team stops trusting.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners who are close to launching estimate follow-up and want a safer first rollout instead of a cleanup project a few weeks later",
  ctaHeading: "Need a second opinion before estimate follow-up goes live?",
  ctaText:
    "Book a 30-minute call. We will look at your estimate-sent trigger, stale-estimate timing, stop rules, reply routing, ownership, and CRM visibility so you can decide whether the workflow is ready now, needs a narrower first release, or should wait until the launch risk is lower.",
  ctaSubtext:
    "Useful if you are already close to go-live and want to avoid teaching the team that estimate follow-up is noisy or untrustworthy after the first few live opportunities.",
  relatedLinks: [
    { label: "Estimate follow-up automation for service businesses", href: "/estimate-follow-up-automation-for-service-businesses" },
    { label: "Estimate follow-up setup help", href: "/estimate-follow-up-setup-for-service-businesses" },
    { label: "Estimate follow-up setup mistakes", href: "/estimate-follow-up-setup-mistakes-small-business" },
    { label: "Estimate follow-up setup vs. DIY", href: "/estimate-follow-up-setup-vs-diy-small-business" },
    { label: "Estimate follow-up cost", href: "/estimate-follow-up-cost-small-business" },
    { label: "Estimate follow-up ROI", href: "/estimate-follow-up-roi-small-business" },
    { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
    { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
    { label: "CRM automation setup for contractors", href: "/crm-automation-setup-for-contractors" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
