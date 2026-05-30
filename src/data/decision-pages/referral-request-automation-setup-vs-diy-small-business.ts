import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  ClipboardList,
  DollarSign,
  Scale,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "referral-request-automation-setup-vs-diy-small-business",
  metaTitle:
    "Referral Request Automation Setup vs. DIY for Small Business — When to Hire Help | Dmytro AI",
  metaDescription:
    "Should a small business DIY referral request automation setup or hire expert help? Practical guide to completed-job triggers, timing rules, review-vs-referral separation, warm-intro routing, and when setup help is cheaper than more DIY drift.",
  badgeText: "Setup Buy-vs-Build",
  badgeIcon: Scale,
  h1: "Referral Request Automation Setup: Hire Help or DIY?",
  heroIntro:
    "DIY is completely reasonable when referral-request automation is still a narrow build: one clean completed-job trigger, one referral ask separate from review asks, low job volume, and an owner or office manager willing to test timing, watch replies, and fix routing mistakes without losing real warm introductions along the way. Hiring help usually becomes the better move once the workflow depends on messy completion signals, different service types need different timing or different referral language, warm-intro replies must route to the right person quickly, or the team already knows the referral ask matters but keeps losing weeks to setup drift instead of getting it live. The real question is not whether you could build this yourself. It is whether post-job advocacy follow-through is important enough that you want a trustworthy referral workflow now instead of another month of inconsistent asking, half-built logic, and missed introductions.",
  heroSubtext:
    "Below: when DIY referral-request setup is still a smart move, when expert help usually pays for itself, what each path really costs, and how to tell whether you need a tutorial, a bounded setup engagement, or a simpler manual referral checklist first.",
  sections: [
    {
      type: "cards",
      title: "What this decision is really about",
      subtitle:
        "Most owners are not choosing between free and expensive. They are choosing which kind of delay, risk, and missed-introduction burden they want to own:",
      items: [
        {
          icon: DollarSign,
          title: "DIY reduces invoice cost, not always total cost",
          body: "Doing setup yourself can lower upfront cash spend, but it shifts the cost into owner or office time: deciding what truly counts as a completed job worth asking about, separating the referral ask from the review ask, testing when the ask should fire, routing warm-intro replies to the right human, and cleaning up whatever breaks after the first real replies come in.",
        },
        {
          icon: Workflow,
          title: "Referral-request setup is workflow design, not just message copy",
          body: "The hard part is not writing the referral ask message. The hard part is defining which completed jobs qualify, when the referral ask should wait versus when it should fire alongside or after the review ask, what should suppress the ask entirely, how the CRM logs the touchpoint, and who owns the next move when a customer replies with a real name and introduction.",
        },
        {
          icon: Wrench,
          title: "Hiring help makes sense when missed introductions cost more than setup",
          body: "If the business already completes enough work that inconsistent or missing referral asks are leaving warm introductions on the table, and the current process is messy enough that DIY keeps stalling, setup help is often cheaper than another stretch of advocacy drift. You are not paying for software buttons. You are paying to close a real post-job introduction leak without burning more nights on routing, testing, and cleanup.",
        },
      ],
    },
    {
      type: "table",
      title: "DIY referral-request setup vs. hiring expert help",
      subtitle:
        "This is the practical trade-off for a small business that already believes the referral workflow matters:",
      headers: ["DIY setup", "Hire setup help"],
      rows: [
        {
          label: "Best for",
          values: [
            "One clean completed-job trigger, one referral ask that is already clearly separate from the review ask, lower job volume, and a hands-on owner willing to test and tune the workflow personally",
            "Revenue-critical referral follow-through, messy closeout signals, multiple service types needing different timing, warm-intro routing that needs to work cleanly on the first launch, and clear referral-vs-review separation",
          ],
        },
        {
          label: "Typical cash cost",
          values: [
            "Lower upfront spend plus your own time, tool cost, and post-launch cleanup",
            "Often $1K-$3K for a bounded small-business setup depending on completion-signal hygiene, referral-vs-review separation, warm-intro routing, CRM logging, and team handoff complexity",
          ],
        },
        {
          label: "Time to a trustworthy launch",
          values: [
            "Several evenings to several weeks depending on how clean the completed-job process and referral-vs-review separation already are",
            "Often 4-10 business days for a focused build with tested timing, stop rules, and introduction routing",
          ],
        },
        {
          label: "Biggest risk",
          values: [
            "Asking too early, collapsing the referral ask into the review ask, missing warm-intro replies, or leaving introduction routing in a black hole because ownership was never made explicit",
            "Paying for a workflow that is broader than your current referral gap actually requires",
          ],
        },
        {
          label: "What success should look like",
          values: [
            "A workflow you understand because you built it and are willing to maintain after real warm-intro replies start showing edge cases",
            "A production-ready referral workflow the team trusts to trigger, wait, separate from review asks, log, and route introductions correctly without constant owner babysitting",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When DIY is a strong fit — and when hiring help is smarter",
      subtitle:
        "DIY can be the right move for the right scope. It becomes expensive when the referral workflow matters more than the learning exercise:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "DIY can be a good fit",
          variant: "green",
          items: [
            "You have one clear definition of \"job complete\" and the team already agrees on it",
            "Completed-job volume is low enough that a setup mistake will not cost a meaningful number of warm introductions",
            "You mainly need one clean referral ask after satisfied jobs, and the review ask is already separate or does not exist yet",
            "You are comfortable owning CRM logging, testing, and warm-intro reply handling after launch",
            "You want a prototype first so you can confirm the referral gap is real before hardening the workflow",
          ],
        },
        {
          icon: XCircle,
          heading: "Hiring help is usually smarter",
          variant: "neutral",
          items: [
            "Completion signals are messy enough that the business still argues about when a customer should actually get the referral ask",
            "Different service types, job sizes, or locations need different timing or referral language",
            "Warm-intro replies, re-engagement questions, and introduction details must route cleanly before the next step gets lost",
            "The owner already knows the workflow should exist but keeps losing time to setup drift instead of getting it live",
            "A few additional warm introductions per month would easily justify paying to stop overthinking and launch cleanly now",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Where small-business DIY referral-request projects usually start breaking down",
      subtitle:
        "The problem is rarely the first message draft. The problem is everything around it once real jobs, real customers, and real replies are involved:",
      blocks: [
        {
          heading: "The referral ask collapses into the review ask",
          body: "The most common DIY shortcut is bundling referral and review asks into one message or one sequence. That usually weakens both: the customer sees a wall of asks instead of a clear single request, the referral conversation gets lost inside the review flow, and nobody knows which reply is a warm introduction versus a complaint versus a review link click. Setup help earns its keep when it keeps referral-vs-review separation clean from day one.",
        },
        {
          heading: "Warm-intro replies have no clear owner",
          body: "The workflow sends the referral ask, a customer replies with a real name and a real need, and nobody picks it up fast enough because ownership was never defined. The introduction cools off, the customer feels ignored, and the referral that could have turned into revenue disappears. The routing problem is rarely a technology gap — it is a workflow design gap that DIY projects skip because it is easier to solve the message template first.",
        },
        {
          heading: "A generic timing rule ignores service-type differences",
          body: "Quick repairs, recurring visits, and larger projects do not all feel complete on the same timeline. The cheaper-looking DIY version often sends every referral ask at the same delay because that is easier to build, not because it is safer for trust. Customers who get asked before the work feels truly finished are less likely to advocate — and more likely to feel pushed.",
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
          body: "If your time is worth $75-$200 an hour and the workflow will realistically take 10-20 hours to define triggers, clean up referral-vs-review separation, test introduction routing, and fix launch mistakes, DIY is not automatically cheap. It may still be worth doing — but not because it is free.",
        },
        {
          icon: ClipboardList,
          title: "Start with one clean referral path, not every advocacy touchpoint",
          body: "The safest DIY version is one bounded use case: one service type, one completed-job signal, one referral ask that is clearly separate from the review flow, one introduction owner. If you are also trying to solve reviews, upsells, surveys, and complaint recovery in the same project, the scope is already wider than a clean first pass.",
        },
        {
          icon: AlertTriangle,
          title: "Separate prototype value from production value",
          body: "DIY is great for proving the referral workflow might help. Hiring help is usually better once you already know the referral ask matters and now need it to run reliably with real timing, stop rules, referral-vs-review separation, and CRM visibility instead of remaining a half-finished office side project.",
        },
        {
          icon: ShieldCheck,
          title: "Keep ownership either way",
          body: "Whether you build it yourself or hire setup help, your business should own the sending numbers, CRM access, referral destinations, and workflow docs. Good setup help reduces risk. It should not trap your referral process inside someone else's accounts.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "This page is grounded in the live referral-request cluster plus published adjacent proof around milestone-based routing, CRM visibility, and production workflow quality:",
      studies: [
        {
          industry: "Referral-request setup scope",
          headline: "The setup-help page explains what expert implementation should actually include before a referral workflow goes live",
          body: "That page stays on implementation scope: completed-job triggers, timing rules, intro routing, CRM logging, referral-vs-review separation, and field-to-office handoff. This page answers the narrower buyer decision that comes one step earlier: keep DIYing, or pay for setup help now?",
          link: "/referral-request-automation-setup-for-service-businesses",
        },
        {
          industry: "Referral-request cost + ROI",
          headline: "The cost and ROI siblings prove there is already a real budgeting and payback layer around this workflow",
          body: "Those pages already cover what the build usually costs and when it pays back. This page stays distinct by answering the buy-vs-build call before the owner commits to either more DIY nights or a bounded setup engagement.",
          link: "/referral-request-automation-cost-small-business",
        },
        {
          industry: "Published CRM workflow proof",
          headline: "The vehicle accessories CRM case study proves why milestone-based routing and clear ownership matter once a customer re-engages",
          body: "That project is not a referral-request system, but it is direct proof that valuable follow-through gets lost when ownership after a status change is weak. Referral-request setup depends on the same mechanics: detect the milestone, route the reply, and give a human enough context to act quickly.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
        { label: "Referral request automation setup help", href: "/referral-request-automation-setup-for-service-businesses" },
        { label: "Referral request automation cost", href: "/referral-request-automation-cost-small-business" },
        { label: "Referral request automation ROI", href: "/referral-request-automation-roi-small-business" },
        { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "When is DIY referral-request setup actually the right move?",
      answer:
        "Usually when the business has one clean completion signal, one straightforward referral path that is already separate from the review ask, lower job volume, and someone internal who is willing to test timing, watch replies, and maintain the workflow after launch. DIY works best when the main value is learning and proving the workflow, not when the business needs a trust-safe production system immediately.",
    },
    {
      question: "When should I hire someone to set up referral-request automation instead of doing it myself?",
      answer:
        "Hire help when completion signals are messy, timing varies by service type, referral-vs-review separation matters, warm-intro routing needs to work cleanly, or the workflow already feels important enough that another month of owner-side setup drift costs more than the build invoice. If missed introductions or collapsed referral-and-review asks would damage advocacy, setup help is usually the safer move.",
    },
    {
      question: "How is this different from the existing referral-request setup page?",
      answer:
        "The setup page explains what a clean referral-request implementation should include before launch. This page sits one step earlier in the buying journey and answers the decision itself: keep DIYing, or pay for setup help now?",
    },
    {
      question: "How much does it usually cost to hire help for referral-request setup?",
      answer:
        "A focused small-business referral-request setup often lands around $1K-$2K when the completion signal is already clean and the workflow is narrow. More complex builds with service-type timing, referral-vs-review separation, warm-intro routing, CRM visibility, and shared team ownership often land around $2K-$3K. The real driver is process cleanliness and routing complexity, not the label alone.",
    },
    {
      question: "Can I prototype the workflow myself and then hire someone later?",
      answer:
        "Yes. That is often the smartest path. DIY can prove the referral gap is real. Then setup help can harden the timing, stop rules, referral-vs-review separation, logging, and introduction routing so the workflow is safe to run consistently against real completed jobs in production.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners deciding whether to keep building post-job referral follow-through alone or bring in expert setup help",
  ctaHeading: "Want a clear answer on whether this referral workflow is worth DIYing?",
  ctaText:
    "Book a 30-minute call. We will look at how your business marks jobs complete today, where referral asks are getting missed or mistimed, how warm-intro replies should route, whether referral and review asks are properly separated, and whether to keep the first version DIY, scope a bounded setup engagement, or simplify the workflow before spending more.",
  ctaSubtext:
    "No generic word-of-mouth marketing pitch. Just a practical call about whether this referral workflow should stay in-house or get implemented properly now.",
  relatedLinks: [
    { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
    { label: "Referral request automation setup help", href: "/referral-request-automation-setup-for-service-businesses" },
    { label: "Referral request setup mistakes", href: "/referral-request-setup-mistakes-small-business" },
    { label: "Referral request automation cost", href: "/referral-request-automation-cost-small-business" },
    { label: "Referral request automation ROI", href: "/referral-request-automation-roi-small-business" },
    { label: "Review request vs. referral request", href: "/review-request-vs-referral-request-for-service-businesses" },
    { label: "Review request setup vs. DIY", href: "/review-request-automation-setup-vs-diy-small-business" },
    { label: "Estimate follow-up setup vs. DIY", href: "/estimate-follow-up-setup-vs-diy-small-business" },
    { label: "Client reactivation setup vs. DIY", href: "/client-reactivation-setup-vs-diy-small-business" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
