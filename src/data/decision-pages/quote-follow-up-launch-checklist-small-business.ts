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
  slug: "quote-follow-up-launch-checklist-small-business",
  metaTitle:
    "Quote Follow-Up Launch Checklist for Small Business — What to Verify Before Go-Live | Dmytro AI",
  metaDescription:
    "Practical quote follow-up launch checklist for small businesses. What to verify before go-live: quote-sent triggers, stale-quote timing, stop rules, objection routing, CRM visibility, and clear ownership after pricing goes out.",
  badgeText: "Launch Checklist",
  badgeIcon: ClipboardList,
  h1: "Quote Follow-Up Launch Checklist for Small Business",
  heroIntro:
    "A quote-follow-up workflow should not go live just because the reminders sound polite and the CRM can technically send them. Before launch, a small business needs to verify the operating layer underneath the sequence: the system can tell when a quote is truly out, stale-quote timing matches the real buying cycle, revision and objection replies stop the automation instead of colliding with it, ownership is visible after the prospect answers, and the CRM shows enough state that the office can trust what happened. If those checks are still fuzzy, launch week usually teaches the wrong lesson — reminders fire off a bad trigger, a live sales conversation keeps getting nudged by automation, open quotes look active when they are not, and the team starts treating the workflow like another cleanup job instead of a revenue-recovery system.",
  heroSubtext:
    "Below: the launch checklist that matters most, what to test before turning quote follow-up on, when this page is useful, and how it stays distinct from the setup-help, setup-mistakes, setup-vs-DIY, cost, and ROI pages already live in the quote-follow-up cluster.",
  sections: [
    {
      type: "cards",
      title: "What to verify before a quote-follow-up workflow goes live",
      subtitle:
        "These are the checks that decide whether launch week feels trustworthy or messy:",
      items: [
        {
          icon: Workflow,
          title: "The quote-sent trigger is actually trustworthy",
          body: "The workflow should only start when the business can confidently say the buyer has really received pricing. If salespeople, office staff, or the quoting tool all mark that stage differently, the launch is not ready yet.",
        },
        {
          icon: Clock,
          title: "Stale-quote timing matches the real sales cycle",
          body: "A quick service quote, a bigger project proposal, and a renewal-style pricing conversation do not all go cold on the same schedule. Before go-live, the timing rules should reflect how buyers actually decide instead of one generic delay.",
        },
        {
          icon: ShieldCheck,
          title: "Stop rules are written before the sequence sends",
          body: "Accepted quotes, lost deals, revision requests, active objections, and payment conversations should stop or reroute the workflow immediately. If the automation keeps running through those states, it is not ready.",
        },
        {
          icon: MessageSquare,
          title: "Revision and objection replies route to the right human fast",
          body: "A buyer asking for a scope change, clarifying price, or pushing timing should not stay inside a canned reminder path. Before launch, the business should know exactly who owns those replies and what the next step looks like.",
        },
        {
          icon: Users,
          title: "CRM visibility and ownership are tested",
          body: "The office should be able to see when follow-up fired, what the buyer replied, whether the workflow stopped, and who owns the next move now. If the team still has to reconstruct the quote state manually, the workflow is not ready for live volume.",
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
          label: "Quote-sent trigger",
          values: [
            "One reliable event means pricing is actually delivered and the buyer is now in the follow-up window",
            "If the trigger is fuzzy, every reminder after it inherits the same bad state and the workflow looks broken from day one",
          ],
        },
        {
          label: "Stale timing by deal type",
          values: [
            "Smaller, bigger, and more custom quotes each use a timing pattern that fits how buyers really review them",
            "Bad timing makes follow-up sound robotic even if the copy itself is fine",
          ],
        },
        {
          label: "Stop rules and reroutes",
          values: [
            "Accepted, lost, revised, disputed, or actively discussed quotes stop the generic reminder path and route correctly",
            "This is the difference between revenue recovery and automation colliding with a real sales conversation",
          ],
        },
        {
          label: "Reply ownership",
          values: [
            "The business knows whether questions, objections, approvals, and revision asks go to the owner, office, or salesperson",
            "If ownership is unclear, automation creates one more inbox mess instead of helping close the quote",
          ],
        },
        {
          label: "CRM visibility",
          values: [
            "The team can see last touch, current owner, last reply, stop status, and next step without digging through multiple tools",
            "If quote state stays invisible, the workflow still creates manual cleanup later",
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
            "You already know quote follow-up matters and now need to decide whether the workflow is safe enough to turn on",
            "Wrong timing, weak stop rules, or bad ownership would create real office friction quickly",
            "The business wants a narrower release gate, not another broad page about setup scope or ROI",
            "Different quote types, channels, or handoff rules mean a sloppy launch would be expensive to clean up quietly",
            "One or two visibly wrong reminders would be enough to make the team stop trusting the workflow",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether quote follow-up is the right workflow at all",
            "Your main question is setup help, pricing, ROI, or DIY-vs-hiring help rather than go-live readiness",
            "Quote volume is low enough that careful manual follow-up is still realistic",
            "The real gap is still first response before the quote stage exists",
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
          title: "Launch one disciplined quote path first",
          body: "Start with one reliable quote-sent event, one timing pattern, one clean stop-rule set, and one visible ownership path. The checklist should make the first release smaller and safer, not push you toward a broader sales system before the basics work.",
        },
        {
          icon: AlertTriangle,
          title: "Test ugly reply scenarios, not just silent prospects",
          body: "Run revision requests, pricing objections, lost-deal confirmations, partial replies, out-of-office pauses, and buyers who ask for a callback instead of replying in-channel. If the workflow only works when the prospect stays quiet and happy, it is not ready.",
        },
        {
          icon: Route,
          title: "Write the stop rules down before polishing copy",
          body: "The expensive launch failures are boundary failures, not wording failures. Decide what stops the workflow, who gets the reply, and when a human should take over before debating whether reminder two sounds warmer than reminder three.",
        },
        {
          icon: Users,
          title: "Make ownership visible after the workflow fires",
          body: "The office should know whether the buyer was reminded, whether they replied, whether the workflow stopped, and who owns the next move. Hidden state is what makes teams distrust quote recovery fastest.",
        },
      ],
    },
    {
      type: "prose",
      title: "How this page stays distinct from the other quote-follow-up setup pages",
      subtitle:
        "The live cluster already covers setup help, setup mistakes, setup-vs-DIY, cost, ROI, and the estimate-vs-quote comparison. This page sits one step later in the decision chain:",
      blocks: [
        {
          heading: "This page is about go-live readiness, not project scope",
          body: "The setup-help page explains what a proper quote-follow-up implementation should include. This launch-checklist page assumes the workflow is already close to that stage and asks whether it is actually ready for live buyers now.",
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
        "There is no fake standalone quote-follow-up launch-checklist case study here. The support comes from the live quote-follow-up cluster, adjacent estimate/setup pages, and the published CRM lifecycle case study already on the site:",
      studies: [
        {
          industry: "Existing quote-follow-up cluster",
          headline: "The parent, setup-help, setup-mistakes, DIY, cost, and ROI pages already define the surrounding buyer decisions clearly",
          body: "That live cluster makes the remaining exact launch-readiness page viable: what should be verified before quote follow-up automation actually goes live? This page isolates the release gate instead of rehashing broader setup scope, pricing, or payback.",
          link: "/quote-follow-up-setup-for-service-businesses",
        },
        {
          industry: "Estimate and setup proof",
          headline: "The estimate-follow-up and setup pages already prove why stage design, routing, and ownership matter before a recovery workflow goes live",
          body: "Quote follow-up depends on the same operational discipline: clean stage definitions, realistic timing, visible ownership, and a workflow the office can trust after launch. That is the honest adjacent proof for why launch-checklist gaps here get expensive quickly.",
          link: "/estimate-follow-up-setup-for-service-businesses",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "The WheelsFeels CRM case study proves why stale opportunities still need clean state, routing, and next-step ownership behind them",
          body: "Different exact workflow, same operational lesson. The published CRM case study shows that recovered opportunities only become revenue when the business can trust stage ownership, follow-up visibility, and downstream handoff after a buyer re-engages.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
        { label: "Quote follow-up setup help", href: "/quote-follow-up-setup-for-service-businesses" },
        { label: "Quote follow-up setup mistakes", href: "/quote-follow-up-setup-mistakes-small-business" },
        { label: "Quote follow-up setup vs. DIY", href: "/quote-follow-up-setup-vs-diy-small-business" },
        { label: "Quote follow-up cost", href: "/quote-follow-up-cost-small-business" },
        { label: "Quote follow-up ROI", href: "/quote-follow-up-roi-small-business" },
        { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should be verified before quote follow-up automation goes live?",
      answer:
        "At minimum: the business has one trustworthy quote-sent trigger, stale timing matches the real buying cycle, accepted or revised quotes stop the sequence, objection and revision replies route to the right human, CRM visibility is clear after the workflow fires, and ownership is obvious when a buyer re-engages. If those pieces are still fuzzy, the launch is not ready.",
    },
    {
      question: "What should I test before turning on a quote-follow-up workflow?",
      answer:
        "Test bad triggers, revision requests, pricing objections, accepted quotes that should stop immediately, lost deals, partial replies, and any path where a human conversation should take over. The real test is whether the workflow still behaves responsibly when the buyer is no longer on the quiet happy path.",
    },
    {
      question: "How is this different from the quote follow-up setup-help page?",
      answer:
        "The setup-help page explains what a good implementation project should include and when setup help is worth paying for. This page is narrower: the go-live checklist that helps you decide whether the workflow is actually safe enough to launch now.",
    },
    {
      question: "How is this different from the quote follow-up setup-mistakes page?",
      answer:
        "The setup-mistakes page explains the failure patterns that usually create future cleanup. This page turns those risks into a practical release gate: what has to be verified, tested, and owned before the workflow goes live.",
    },
    {
      question: "When should I delay launch instead of forcing quote follow-up live?",
      answer:
        "Delay launch when quote-sent state is inconsistent, stale timing is still guessed, stop rules are untested, reply ownership is unclear, or the CRM cannot show what happened after the last touch. A slightly later clean launch is almost always cheaper than an awkward first release the team stops trusting.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners who are close to launching quote follow-up automation and want a safer release instead of a cleanup project a few weeks later",
  ctaHeading: "Need a second opinion before quote follow-up goes live?",
  ctaText:
    "Book a 30-minute call. We will look at your quote-sent trigger, stale-quote timing, stop rules, objection routing, ownership, and CRM visibility so you can decide whether the workflow is ready now, needs a narrower first launch, or should wait until the release risk is lower.",
  ctaSubtext:
    "Useful if you are already close to go-live and want to avoid teaching the team that quote follow-up is noisy or untrustworthy after the first few live opportunities.",
  relatedLinks: [
    { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
    { label: "Quote follow-up setup help", href: "/quote-follow-up-setup-for-service-businesses" },
    { label: "Quote follow-up setup mistakes", href: "/quote-follow-up-setup-mistakes-small-business" },
    { label: "Quote follow-up setup vs. DIY", href: "/quote-follow-up-setup-vs-diy-small-business" },
    { label: "Quote follow-up cost", href: "/quote-follow-up-cost-small-business" },
    { label: "Quote follow-up ROI", href: "/quote-follow-up-roi-small-business" },
    { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
  ],
};

export default data;
