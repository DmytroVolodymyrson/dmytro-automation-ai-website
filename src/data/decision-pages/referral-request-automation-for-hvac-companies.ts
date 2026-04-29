import {
  Wrench,
  Users,
  ArrowRightLeft,
  MessageSquare,
  ClipboardCheck,
  CalendarRange,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Star,
  Shield,
  Home,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "referral-request-automation-for-hvac-companies",
  metaTitle:
    "Referral Request Automation for HVAC Companies — Turn Completed Jobs Into Better Referral Flow | Dmytro AI",
  metaDescription:
    "Referral request automation for HVAC companies. Ask at the right moment after completed repairs, installs, or tune-ups, keep referral asks separate from review asks, and route warm homeowner, neighbor, or property-manager replies back to the office fast.",
  badgeText: "HVAC Workflow",
  badgeIcon: Users,
  h1: "Referral Request Automation for HVAC Companies",
  heroIntro:
    "A lot of HVAC companies say referrals are their best jobs, then leave referrals to luck. The repair is done, the maintenance visit went smoothly, or the install wrapped without drama — and then nobody follows up while goodwill is still warm. Or the office stuffs a review ask, a maintenance reminder, and a referral ask into one generic post-job message that feels more like admin overflow than a real homeowner follow-up. Referral request automation for HVAC companies fixes that narrower post-job advocacy workflow. It gives the business a practical way to ask for referrals at the right moment after a completed service call, install, or tune-up, keep referral asks separate from review asks, route warm replies back to the office quickly, and turn satisfied customers into more neighbor, family, and property-manager introductions instead of letting the opportunity disappear once the van pulls away.",
  heroSubtext:
    "Below: what a practical HVAC referral workflow should actually handle, how it stays distinct from review requests, maintenance reminders, and the broader HVAC automation stack, what guardrails matter most, and what proof honestly supports the page without pretending there is already a dedicated HVAC referral-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What HVAC referral-request automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the post-job advocacy layer after the service call, install, or tune-up is truly done — not on early lead response, not on booked-job reminders, and not on later seasonal recall.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A real completed-job trigger",
          body: "The workflow should start from a believable closeout signal: service marked complete, install wrapped, final invoice sent, maintenance visit closed cleanly, or the office confirming there is no active callback issue. If that trigger is sloppy, the referral ask lands too early and feels pushy.",
        },
        {
          icon: Star,
          title: "A separate referral path from the review path",
          body: "A happy homeowner might be fine leaving a Google review but still not be the right fit for an immediate referral ask, and some referral opportunities happen privately without any need for a public review ask first. Strong automation keeps those asks distinct so the company does not blast one generic post-job message for reputation, referrals, and maintenance at the same time.",
        },
        {
          icon: Home,
          title: "Neighbor, family, and property-manager opportunities",
          body: "HVAC referrals often come from a neighbor asking who handled the install, a family member with the same comfort problem, a landlord or property manager with another unit, or a homeowner who mentions a second property. The workflow should make those practical introductions easy to surface while the completed job is still fresh.",
        },
        {
          icon: MessageSquare,
          title: "Simple messaging that sounds practical",
          body: "The best referral ask sounds like a real HVAC company following up after work that went well, not a forced marketing sequence. Keep it tied to the completed job and make the next step easy: reply with a name, another address, or a quick intro request.",
        },
        {
          icon: ArrowRightLeft,
          title: "Fast routing when someone names another person or property",
          body: "If a homeowner replies with a neighbor, a family member, a rental property, or another comfort issue in the same home, the office should get that context immediately. The workflow should create a usable handoff instead of burying the opportunity in a generic inbox.",
        },
        {
          icon: CalendarRange,
          title: "Timing that respects the kind of HVAC work",
          body: "A same-day no-cool repair, a seasonal tune-up, and a larger install do not all become referral-ready on the same timeline. Strong automation respects the service type and customer confidence instead of forcing one rigid send rule.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the HVAC cluster",
      subtitle:
        "These pages can coexist when each one owns a different workflow stage:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for HVAC companies",
          values: [
            "Owners evaluating the broader HVAC operating layer across calls, first response, scheduling, review requests, maintenance reminders, phone coverage, and post-job follow-through",
            "Explains the whole stack instead of isolating the narrower advocacy layer after a completed service, install, or tune-up",
          ],
        },
        {
          label: "What to automate first for HVAC companies",
          values: [
            "Owners deciding whether the first project should be missed-call recovery, lead follow-up, booked-job coordination, or heavier live phone coverage",
            "Helps choose the first bounded workflow before a broader rollout rather than focusing only on post-job referral timing",
          ],
        },
        {
          label: "Review request automation for HVAC companies",
          values: [
            "Companies tightening the post-job reputation layer",
            "Focuses on public social proof, complaint routing, and review timing rather than private introductions and warmer homeowner-to-office handoff",
          ],
        },
        {
          label: "Maintenance reminder automation for HVAC companies",
          values: [
            "Companies trying to bring past customers back for tune-ups, service-due reminders, or membership renewals",
            "Focuses on later seasonal recall and repeat-service timing, not on asking satisfied customers for introductions right after the completed job",
          ],
        },
        {
          label: "Referral request automation for HVAC companies",
          values: [
            "Companies that already finish enough jobs well but still rely on luck for neighbor, family, and property-manager introductions",
            "Focuses tightly on post-job referral timing, separate review-vs-referral asks, and routing warm referral replies back to the office quickly",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your HVAC company?",
      subtitle:
        "Best fit when the team already completes enough good work that stronger advocacy follow-through would materially change growth.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You already hear that referrals are one of your best lead sources, but nobody asks consistently after completed jobs",
            "Service calls, tune-ups, or installs often end well, but referral follow-up still depends on memory",
            "The office can follow up quickly once someone names another homeowner, another property, or a family member",
            "Local trust, neighborhood visibility, and word of mouth already matter in how the company wins work",
            "You want a narrower advocacy workflow before forcing a much bigger CRM or marketing rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still missed calls, slow lead response, or quote follow-up before the job is ever booked",
            "The company does too little completed-job volume for referral discipline to matter yet",
            "Service quality, callback handling, or office follow-through is too inconsistent to justify more post-job asks",
            "Nobody can respond quickly when a homeowner mentions a referral or another property",
            "You want one stacked message that asks for reviews, referrals, and maintenance all at once",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep HVAC referral automation useful instead of awkward",
      subtitle:
        "The goal is cleaner advocacy follow-through after completed work — not more noise after the van leaves.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not stack every ask into one message",
          body: "A homeowner does not need a review ask, a referral ask, a maintenance-plan reminder, and a callback survey all at once. Stronger workflows separate those moments so the customer only gets the next most natural ask.",
        },
        {
          icon: Shield,
          title: "Protect service recovery before asking for introductions",
          body: "If the customer still has a comfort issue, billing question, callback concern, or uncertainty about whether the fix held, the workflow should route that back inside first. Referral automation only helps when the experience actually earned an introduction.",
        },
        {
          icon: Wrench,
          title: "Respect the difference between repair, tune-up, and install work",
          body: "A completed maintenance visit, a same-day repair, and a larger install create different kinds of trust and different windows for asking. Good automation adapts to the service type instead of pretending one schedule fits every job.",
        },
        {
          icon: BarChart3,
          title: "Measure introductions and booked conversations, not just sends",
          body: "The KPI is not only how many referral asks went out. It is how many useful introductions, second-property conversations, and booked follow-up calls came back because the business finally followed up after completed jobs consistently.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical HVAC referral workflow usually works",
      subtitle:
        "The clean version is simple: close the job well, wait until the experience actually feels settled, make a clear advocacy ask, and route any real opportunity back to a human fast.",
      blocks: [
        {
          heading: "The completed job creates a trustworthy signal",
          body: "A real closeout trigger matters more than clever wording. Once the repair is clearly resolved, the tune-up finished cleanly, or the install wrapped without open issues, the company finally has a believable moment to ask for more than silence.",
        },
        {
          heading: "The first follow-up checks whether the homeowner is in a good position to advocate",
          body: "Some jobs are ready for a referral ask quickly. Others need a softer check-in first so there is room for a question, callback concern, or billing issue before the referral prompt appears. Good referral timing protects the relationship before it tries to leverage it.",
        },
        {
          heading: "Satisfied customers get a simple referral prompt tied to real next steps",
          body: "The strongest asks usually point somewhere practical: a neighbor who saw the install, a family member with the same no-cool problem, a rental property that needs service, or another comfort issue the homeowner already mentioned. The message should make it easy to reply with a name, an address, or an intro request.",
        },
        {
          heading: "Warm replies move back to the office with enough context to act fast",
          body: "If the customer names another homeowner, asks about another property, or mentions another issue in the same home, the office should inherit that conversation with enough context to respond quickly. That is where the value comes from — not from the outbound text itself, but from the speed and clarity of the handoff once it works.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published HVAC-specific referral-automation case study on the site yet. The honest support comes from the live HVAC cluster, the existing HVAC review and maintenance children, the generic referral-request guide, and the published CRM case study that proves stage visibility and human handoff create recoverable value.",
      studies: [
        {
          industry: "HVAC cluster",
          headline: "The live HVAC parent and first-project pages already isolate referral-worthy post-job follow-through as its own workflow family",
          body: "The broader HVAC cluster already frames post-job follow-through, review timing, maintenance reminders, and phone-recovery layers as distinct operating problems. This child narrows the referral and advocacy layer instead of rewriting the whole HVAC stack.",
          link: "/ai-automation-for-hvac-companies",
        },
        {
          industry: "Adjacent HVAC closeout workflows",
          headline: "The live review-request and maintenance-reminder children prove the HVAC cluster already supports more than one distinct post-job workflow",
          body: "Those pages cover public reputation timing and later seasonal service-due follow-up. This page sits between them: not public review timing and not months-later recall, but private referral advocacy while the completed job still feels current.",
          link: "/review-request-automation-for-hvac-companies",
        },
        {
          industry: "CRM follow-through proof",
          headline: "The 5,600+ contact CRM case study proves why milestone-based follow-up and human handoff matter once a relationship changes state",
          body: "That published case study is not about HVAC referrals, but it proves the same operating principle: once a contact hits an important milestone, the next action needs ownership, routing, and visibility instead of depending on memory. This page applies that principle to post-job referral follow-up.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for HVAC companies", href: "/ai-automation-for-hvac-companies" },
        { label: "What to automate first for HVAC companies", href: "/what-to-automate-first-for-hvac-companies" },
        { label: "Review request automation for HVAC companies", href: "/review-request-automation-for-hvac-companies" },
        { label: "Referral request automation for service businesses", href: "/referral-request-automation-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from review-request automation for HVAC companies?",
      answer:
        "Review-request automation is about public social proof and routing unhappy replies before a public ask. Referral-request automation is about private introductions. The best HVAC workflows keep those asks separate so neither one feels stacked or mistimed.",
    },
    {
      question: "How is this different from maintenance reminder automation for HVAC companies?",
      answer:
        "Maintenance reminders are about bringing existing customers back later for tune-ups, membership renewals, or service-due follow-up. Referral-request automation is earlier and narrower. It asks satisfied customers to introduce another homeowner or another property while the completed job still feels fresh.",
    },
    {
      question: "When should an HVAC company ask for referrals?",
      answer:
        "Usually after the work feels fully complete and any obvious callback, comfort, or billing issues are settled. Some tune-ups are ready quickly. Larger installs or repairs may need a softer check-in first. The best timing matches the job type and customer experience instead of using one rigid rule.",
    },
    {
      question: "What does a focused HVAC referral workflow usually cost?",
      answer:
        "A narrow referral workflow is usually a smaller build than a full HVAC communication stack. In practice it often fits the same rough range as other bounded single-workflow projects on the site, but the real price depends on how clean the completed-job trigger, messaging rules, and office handoff already are.",
    },
    {
      question: "Where does the ROI usually come from?",
      answer:
        "Usually from more neighbor and family introductions, more second-property conversations, faster follow-up on those opportunities, and less reliance on luck after good work is already done. In a trade where word of mouth already matters, one or two extra booked jobs from completed work can justify the build quickly.",
    },
  ],
  faqSubtitle:
    "Practical answers for HVAC companies considering a cleaner referral workflow after completed work",
  ctaHeading: "Want completed HVAC jobs to produce more real referrals?",
  ctaText:
    "Book a 30-minute call. We will look at how your team closes out service calls, installs, and maintenance visits today, where referral opportunities are getting lost, and whether a focused referral workflow, a review-timing fix, or an earlier lead or scheduling fix is the smarter next move.",
  ctaSubtext:
    "No obligation. No generic growth-system pitch. Just a practical conversation about where post-job advocacy is getting lost.",
  relatedLinks: [
    { label: "AI automation for HVAC companies", href: "/ai-automation-for-hvac-companies" },
    { label: "What to automate first for HVAC companies", href: "/what-to-automate-first-for-hvac-companies" },
    { label: "Review request automation for HVAC companies", href: "/review-request-automation-for-hvac-companies" },
    { label: "Maintenance reminder automation for HVAC companies", href: "/maintenance-reminder-automation-for-hvac-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
