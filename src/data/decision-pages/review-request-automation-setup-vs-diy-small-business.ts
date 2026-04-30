import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  ClipboardList,
  DollarSign,
  MessageSquare,
  Scale,
  Settings,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "review-request-automation-setup-vs-diy-small-business",
  metaTitle:
    "Review Request Automation Setup vs. DIY for Small Business — When to Hire Help | Dmytro AI",
  metaDescription:
    "Should a small business DIY review request automation setup or hire expert help? Practical guide to owner time, completion-signal hygiene, complaint routing, CRM visibility, and when setup help is cheaper than more DIY drift.",
  badgeText: "Setup Buy-vs-Build",
  badgeIcon: Scale,
  h1: "Review Request Automation Setup: Hire Help or DIY?",
  heroIntro:
    "DIY is completely reasonable when review-request automation is still a narrow build: one reliable completed-job trigger, one review destination, low job volume, and an owner or office manager willing to test timing, watch replies, and fix mistakes without risking meaningful reputation damage. Hiring help usually becomes the better move once the workflow depends on messy completion signals, different service types need different timing, complaint replies must route back to the right human quickly, or the team already knows the review ask matters but keeps losing nights to setup drift instead of getting it live. The real question is not whether you could build this yourself. It is whether post-job reputation follow-through is important enough that you want a trustworthy workflow now instead of another month of manual asking, half-built logic, and awkward early review requests.",
  heroSubtext:
    "Below: when DIY review-request setup is still a smart move, when expert help usually pays for itself, what each path really costs, and how to tell whether you need a tutorial, a bounded setup engagement, or a simpler manual closeout checklist first.",
  sections: [
    {
      type: "cards",
      title: "What this decision is really about",
      subtitle:
        "Most owners are not choosing between free and expensive. They are choosing which kind of delay, risk, and cleanup burden they want to own:",
      items: [
        {
          icon: DollarSign,
          title: "DIY reduces invoice cost, not always total cost",
          body: "Doing setup yourself can lower upfront cash spend, but it shifts the cost into owner or office time: deciding what truly counts as job completion, testing when the ask should fire, separating happy follow-through from complaint routing, checking duplicates, and cleaning up whatever breaks after the first real replies come in.",
        },
        {
          icon: Workflow,
          title: "Review-request setup is workflow design, not just message copy",
          body: "The hard part is not writing “Thanks for choosing us.” The hard part is defining which jobs should qualify, when the ask should wait, what should suppress automation, how the CRM logs the touchpoint, and who owns the next move when the customer replies with a concern instead of a review.",
        },
        {
          icon: Wrench,
          title: "Hiring help makes sense when sloppy review asking would cost more than setup",
          body: "If the business already completes enough work that missed or mistimed review asks are weakening local proof, and the current process is messy enough that DIY keeps stalling, setup help is often cheaper than another stretch of reputation drift. You are not paying for software buttons. You are paying to close a real post-job trust leak without burning more nights on routing, testing, and cleanup.",
        },
      ],
    },
    {
      type: "table",
      title: "DIY review-request setup vs. hiring expert help",
      subtitle:
        "This is the practical trade-off for a small business that already believes the review workflow matters:",
      headers: ["DIY setup", "Hire setup help"],
      rows: [
        {
          label: "Best for",
          values: [
            "One review destination, one clean completion signal, lower job volume, and a hands-on owner willing to test and tune the workflow personally",
            "Revenue-critical review follow-through, messy closeout signals, different service types or timing windows, and complaint routing that needs to work cleanly on the first launch",
          ],
        },
        {
          label: "Typical cash cost",
          values: [
            "Lower upfront spend plus your own time, tool cost, and post-launch cleanup",
            "Often $1K-$3K for a bounded small-business setup depending on completion-signal hygiene, complaint routing, CRM logging, and team handoff complexity",
          ],
        },
        {
          label: "Time to a trustworthy launch",
          values: [
            "Several evenings to several weeks depending on how clean the completed-job process already is",
            "Often 4-10 business days for a focused build with tested timing, stop rules, and reply routing",
          ],
        },
        {
          label: "Biggest risk",
          values: [
            "Asking too early, asking the wrong customer, missing complaints, or leaving replies in a black hole because ownership was never made explicit",
            "Paying for a workflow that is broader than your current review gap actually requires",
          ],
        },
        {
          label: "What success should look like",
          values: [
            "A workflow you understand because you built it and are willing to maintain after real replies start showing edge cases",
            "A production-ready review workflow the team trusts to trigger, wait, stop, log, and route correctly without constant owner babysitting",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When DIY is a strong fit — and when hiring help is smarter",
      subtitle:
        "DIY can be the right move for the right scope. It becomes expensive when the review workflow matters more than the learning exercise:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "DIY can be a good fit",
          variant: "green",
          items: [
            "You have one clear definition of “job complete” and the team already agrees on it",
            "Completed-job volume is low enough that a setup mistake will not damage a meaningful amount of reputation signal",
            "You mainly need one clean review ask after satisfied jobs, not a layered complaint-routing or service-type timing system",
            "You are comfortable owning CRM logging, testing, and reply handling after launch",
            "You want a prototype first so you can confirm the review gap is real before hardening the workflow",
          ],
        },
        {
          icon: XCircle,
          heading: "Hiring help is usually smarter",
          variant: "neutral",
          items: [
            "Completion signals are messy enough that the business still argues about when a customer should actually get asked",
            "Different service types, job sizes, or locations need different timing or exclusions",
            "Complaint replies, billing questions, and “please call me” messages must route cleanly before any public review ask",
            "The owner already knows the workflow should exist but keeps losing time to setup drift instead of getting it live",
            "A few additional strong reviews per month would easily justify paying to stop overthinking and launch cleanly now",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where small-business DIY review-request projects usually start breaking down",
      subtitle:
        "The problem is rarely the first message draft. The problem is everything around it once real jobs, real customers, and real replies are involved:",
      blocks: [
        {
          heading: "The workflow has no trustworthy definition of “done”",
          body: "A technician closes the task, the office reopens it, an invoice stays unpaid, or a callback is still pending — and now nobody knows whether the review ask should fire. DIY becomes expensive fast when the business never cleaned up the completion signal before trying to automate from it.",
        },
        {
          heading: "A generic timing rule gets applied to every service type",
          body: "Quick repairs, recurring visits, and larger projects do not all feel complete on the same timeline. The cheaper-looking DIY version often skips this distinction and sends every ask the same way because that is easier to build, not because it is safer for trust.",
        },
        {
          heading: "Reply ownership stays fuzzy after launch",
          body: "The workflow sends the ask, a customer replies with a concern, and nobody knows whether the office, technician, or owner is supposed to handle it. Setup help earns its keep when it makes those stop rules and handoffs explicit before the first awkward live reply shows up.",
        },
      ],
    },
    {
      type: "considerations",
      title: "How to decide before you burn a month on setup",
      subtitle:
        "A few practical checks usually make the answer obvious:",
      items: [
        {
          icon: Clock,
          title: "Put a real value on owner or office time",
          body: "If your time is worth $75-$200 an hour and the workflow will realistically take 10-20 hours to define triggers, clean edge cases, test reply routing, and fix launch mistakes, DIY is not automatically cheap. It may still be worth doing — but not because it is free.",
        },
        {
          icon: ClipboardList,
          title: "Start with one clean review path, not every reputation touchpoint",
          body: "The safest DIY version is one bounded use case: one service type, one completed-job signal, one review destination, one reply owner. If you are also trying to solve referrals, upsells, surveys, and complaint recovery in the same project, the scope is already wider than a clean first pass.",
        },
        {
          icon: AlertTriangle,
          title: "Separate prototype value from production value",
          body: "DIY is great for proving the workflow might help. Hiring help is usually better once you already know the review ask matters and now need it to run reliably with real timing, stop rules, and CRM visibility instead of remaining a half-finished office side project.",
        },
        {
          icon: ShieldCheck,
          title: "Keep ownership either way",
          body: "Whether you build it yourself or hire setup help, your business should own the sending numbers, CRM access, review destinations, and workflow docs. Good setup help reduces risk. It should not trap your review process inside someone else’s accounts.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is grounded in the live review-request cluster plus published adjacent proof around milestone-based routing, CRM visibility, and production workflow quality:",
      studies: [
        {
          industry: "Review-request setup scope",
          headline: "The setup-help page explains what expert implementation should actually include before a review workflow goes live",
          body: "That page stays on implementation scope: completed-job triggers, timing rules, complaint routing, CRM logging, and field-to-office handoff. This page answers the narrower buyer decision that comes one step earlier: keep DIYing, or pay for setup help now?",
          link: "/review-request-automation-setup-for-service-businesses",
        },
        {
          industry: "Review-request cost + ROI",
          headline: "The cost and ROI siblings prove there is already a real budgeting and payback layer around this workflow",
          body: "Those pages already cover what the build usually costs and when it pays back. This page stays distinct by answering the buy-vs-build call before the owner commits to either more DIY nights or a bounded setup engagement.",
          link: "/review-request-automation-cost-small-business",
        },
        {
          industry: "Published CRM workflow proof",
          headline: "The WheelsFeels CRM case study proves why milestone-based routing and clear ownership matter once a customer re-engages",
          body: "That project is not a review-request system, but it is direct proof that valuable follow-through gets lost when ownership after a status change is weak. Review-request setup depends on the same mechanics: detect the milestone, route the reply, and give a human enough context to act quickly.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Review request automation for service businesses", href: "/review-request-automation-for-service-businesses" },
        { label: "Review request automation setup help", href: "/review-request-automation-setup-for-service-businesses" },
        { label: "Review request setup mistakes", href: "/review-request-automation-setup-mistakes-small-business" },
        { label: "Review request automation cost", href: "/review-request-automation-cost-small-business" },
        { label: "Review request automation ROI", href: "/review-request-automation-roi-small-business" },
        { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "When is DIY review-request setup actually the right move?",
      answer:
        "Usually when the business has one clean completion signal, one straightforward review path, lower job volume, and someone internal who is willing to test timing, watch replies, and maintain the workflow after launch. DIY works best when the main value is learning and proving the workflow, not when the business needs a trust-safe production system immediately.",
    },
    {
      question: "When should I hire someone to set up review-request automation instead of doing it myself?",
      answer:
        "Hire help when completion signals are messy, timing varies by service type, complaint routing matters, or the workflow already feels important enough that another month of owner-side setup drift costs more than the build invoice. If mistimed asks or missed replies would damage trust, setup help is usually the safer move.",
    },
    {
      question: "How is this different from the existing review-request setup page?",
      answer:
        "The setup page explains what a clean review-request implementation should include before launch. This page sits one step earlier in the buying journey and answers the decision itself: keep DIYing, or pay for setup help now?",
    },
    {
      question: "How much does it usually cost to hire help for review-request setup?",
      answer:
        "A focused small-business review-request setup often lands around $1K-$2K when the completion signal is already clean and the workflow is narrow. More complex builds with service-type timing, complaint routing, CRM visibility, and shared team ownership often land around $2K-$3K. The real driver is process cleanliness and routing complexity, not the label alone.",
    },
    {
      question: "Can I prototype the workflow myself and then hire someone later?",
      answer:
        "Yes. That is often the smartest path. DIY can prove the review gap is real. Then setup help can harden the timing, stop rules, logging, and reply routing so the workflow is safe to run consistently against real completed jobs in production.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners deciding whether to keep building post-job review follow-through alone or bring in expert setup help",
  ctaHeading: "Want a clear answer on whether this review workflow is worth DIYing?",
  ctaText:
    "Book a 30-minute call. We will look at how your business marks jobs complete today, where review asks are getting missed or mistimed, how complaint replies should route, and whether to keep the first version DIY, scope a bounded setup engagement, or simplify the workflow before spending more.",
  ctaSubtext:
    "No generic reputation-management pitch. Just a practical call about whether this review workflow should stay in-house or get implemented properly now.",
  relatedLinks: [
    { label: "Review request automation for service businesses", href: "/review-request-automation-for-service-businesses" },
    { label: "Review request automation setup help", href: "/review-request-automation-setup-for-service-businesses" },
    { label: "Review request setup mistakes", href: "/review-request-automation-setup-mistakes-small-business" },
    { label: "Review request automation cost", href: "/review-request-automation-cost-small-business" },
    { label: "Review request automation ROI", href: "/review-request-automation-roi-small-business" },
    { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
    { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
    { label: "Estimate follow-up setup vs. DIY", href: "/estimate-follow-up-setup-vs-diy-small-business" },
    { label: "Client reactivation setup vs. DIY", href: "/client-reactivation-setup-vs-diy-small-business" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
