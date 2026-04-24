import {
  Wrench,
  Star,
  MessageSquare,
  ClipboardCheck,
  ArrowRightLeft,
  BarChart3,
  Users,
  Clock3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "review-request-automation-for-auto-repair-shops",
  metaTitle:
    "Review Request Automation for Auto Repair Shops — Cleaner Post-Service Reputation Follow-Up | Dmytro AI",
  metaDescription:
    "Review request automation for auto repair shops. Ask at the right time after completed service, route unhappy replies before a public review ask, and turn finished visits into cleaner local-trust follow-up.",
  badgeText: "Auto Repair Workflow",
  badgeIcon: Star,
  h1: "Review Request Automation for Auto Repair Shops",
  heroIntro:
    "A lot of repair shops do not only lose revenue on the first missed call or the estimate that never gets approved. They also lose trust after the work is already finished. The vehicle was picked up, the customer sounded satisfied enough, and then nobody followed up while the experience was still fresh. Or a review request went out too early before the customer had driven the car long enough to feel sure the issue was really fixed. Or every finished job got the same generic text even when a comeback concern, billing question, or service-advisor follow-up should have come back inside the shop first. Review request automation for auto repair shops fixes that narrower post-service workflow. It gives completed visits a cleaner closeout path, helps the shop ask for reviews when the experience is actually ready, and protects reputation by routing uncertain replies back to the advisor before the shop pushes for a public rating.",
  heroSubtext:
    "Below: what a practical auto-repair review-request workflow should actually handle, how it stays distinct from the broader auto-repair page and the other live child pages, what guardrails matter, and what proof honestly supports this page without pretending there is already a dedicated auto-repair review-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What auto-repair review-request automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the stage after service is completed — not missed-call recovery, not estimate follow-up, and not booked-visit reminder workflows.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A real completed-service trigger",
          body: "The workflow should start from a believable completion moment: repair order closed, vehicle picked up, invoice finalized, or advisor-closeout notes marked done. If the trigger is sloppy, review requests go out before the customer experience actually feels settled.",
        },
        {
          icon: Clock3,
          title: "Timing that matches the service type",
          body: "A same-day oil change, a brake job, and a larger diagnostic or drivability repair do not feel complete on the same timeline. Strong review timing respects the service type instead of blasting the same ask five minutes after every pickup.",
        },
        {
          icon: MessageSquare,
          title: "Different paths for happy customers and unhappy replies",
          body: "If the customer replies with a comeback concern, a billing question, or a lingering issue, the workflow should route that back to the service advisor fast instead of pushing harder for a Google review. Reputation automation only helps if service recovery comes first.",
        },
        {
          icon: Users,
          title: "Cleaner technician-to-advisor handoff after the job",
          body: "The front office should know what work was completed, whether anything was flagged at pickup, and whether the visit feels safe for a review ask. That handoff matters more than fancy SMS copy.",
        },
        {
          icon: ArrowRightLeft,
          title: "Simple routing when the customer wants another service",
          body: "A post-service touchpoint can surface deferred work, another vehicle issue, a maintenance-plan question, or a referral. The workflow should route that response with context attached instead of dropping it into a generic inbox.",
        },
        {
          icon: BarChart3,
          title: "Visibility into which completed jobs create the best review opportunities",
          body: "Owners should be able to see which repair types create reviews, where review asks are being ignored, and where unresolved issues keep blocking the ask. That turns reputation follow-up into an operating signal instead of another forgotten admin task.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the auto-repair cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays obvious:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for auto repair shops",
          values: [
            "Owners evaluating the full operating system across missed calls, estimates, reminders, maintenance outreach, and review automation",
            "Explains the broader shop workflow instead of isolating the post-service reputation layer",
          ],
        },
        {
          label: "Estimate follow-up automation for auto repair shops",
          values: [
            "Shops still losing approved work after pricing goes out",
            "Focuses on recovering open estimates before a job is completed, not on post-service reputation follow-through after the vehicle leaves the shop",
          ],
        },
        {
          label: "Appointment scheduling and reminder automation for auto repair shops",
          values: [
            "Shops that already book visits but keep fighting confirmations, reminders, reschedules, and advisor continuity",
            "Focuses on the booked-visit layer before service happens, not on the closeout stage after the work is done",
          ],
        },
        {
          label: "Review request automation for auto repair shops",
          values: [
            "Shops that already complete the work but ask for reviews inconsistently, too early, or with no unhappy-reply routing guardrail",
            "Focuses narrowly on post-service timing, complaint routing, advisor handoff, and turning completed visits into healthier local-trust signals",
          ],
        },
        {
          label: "AI phone answering for auto repair shops",
          values: [
            "Shops still fixing what happens before or during the first live call",
            "Covers live answer coverage and inbound call handling instead of the reputation-closeout stage after service is already finished",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your auto repair shop?",
      subtitle:
        "Best fit when the team already completes enough visits that review discipline matters, but post-service follow-through still depends on memory and scattered manual effort.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You complete enough repair or maintenance work that review consistency materially affects local trust and inbound conversion",
            "Review asks happen irregularly, too early, or only when someone on the advisor side remembers",
            "Vehicles are picked up, but the shop does not get a clean closeout signal for who should receive a follow-up",
            "You want unhappy replies routed back to the service advisor before anybody gets pushed toward a public review",
            "A few additional 5-star reviews each month would likely justify the build because map-pack trust matters in your market",
            "You want a narrow post-service workflow before forcing a bigger CRM or marketing rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still missed calls, slow first response, or estimate follow-up before the repair is ever approved",
            "The shop does too little completed-job volume for review discipline to matter yet",
            "Service quality or comeback handling is unstable enough that automating review asks would only amplify the problem",
            "You already run a consistent review process with very little manual drift",
            "You want automation deciding whether a complaint is resolved without human judgment",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep auto-repair review-request automation useful",
      subtitle:
        "The goal is cleaner reputation follow-up and safer service recovery — not just more outbound messages.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate around unresolved comeback issues",
          body: "If the car is coming back for a check-engine light, a parts issue, or a billing dispute, more review requests will only expose the weakness faster. Fix the service-recovery path first.",
        },
        {
          icon: Wrench,
          title: "Respect the difference between quick maintenance and bigger repair work",
          body: "The right review timing for a same-day oil change is not always the same as the timing for a larger diagnostic or repair the customer needs to drive for a day or two. Strong automation adapts to the service type.",
        },
        {
          icon: Users,
          title: "Keep the tech-to-advisor signal clean",
          body: "If the advisor does not know which jobs finished cleanly, which customers sounded pleased, or which issues were flagged at pickup, the review workflow stays blind. The handoff is part of the build.",
        },
        {
          icon: BarChart3,
          title: "Measure review quality, not just review volume",
          body: "The KPI is not only how many texts were sent. It is whether completed visits create more positive reviews, fewer unhappy customers get pushed toward public channels too early, and the advisor spends less time manually chasing review follow-through.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical auto-repair review-request workflow usually works",
      subtitle:
        "The clean version is simple: finish the work, wait until the visit actually feels settled, route live replies fast, and ask for the review when the signal says it is safe.",
      blocks: [
        {
          heading: "A completed visit starts the closeout stage",
          body: "The strongest trigger is a real completion moment from the advisor or front-office side, not a vague guess. Once that handoff is trustworthy, the reputation workflow finally has something reliable to act on.",
        },
        {
          heading: "The first touch checks whether the repair experience feels settled",
          body: "For some jobs, a soft post-service check-in can make more sense before the public review ask. That gives the customer a chance to raise a concern and gives your team a safer read on whether the experience is ready for a review request.",
        },
        {
          heading: "Good replies move toward the review ask; uncertain replies come back inside",
          body: "A strong workflow does not pretend every customer belongs on the same path. If the customer clearly sounds satisfied, the ask can move forward with a direct review link. If there is hesitation, confusion, or a comeback issue, the advisor should inherit the conversation fast.",
        },
        {
          heading: "The advisor gets the context needed to recover the moment or expand the opportunity",
          body: "When someone replies, the handoff should include what service was completed, when it happened, and why the follow-up fired. That makes it easier to resolve the issue, ask for the review later, or notice a deferred-work or maintenance opportunity.",
        },
        {
          heading: "Owners can finally see where post-service reputation follow-through breaks",
          body: "Over time the workflow shows which service lines generate the cleanest review asks, which repair types produce more complaints or silence, and where the bigger problem is timing, service quality, or weak internal follow-up discipline.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published auto-repair-specific review-automation case study on the site yet. The honest support comes from the live auto-repair parent page, a similar post-service closeout page already live in another service cluster, and the published CRM case study that proves stage visibility plus human handoff matter after an operational milestone.",
      studies: [
        {
          industry: "Auto-repair parent page",
          headline: "The broader auto-repair guide already isolates review automation as one of the workflow families that matter after service is complete",
          body: "That parent page explicitly names review request automation inside the auto-repair operating system alongside missed calls, estimate follow-up, maintenance reminders, and appointment handling. This child narrows the post-service reputation layer instead of re-explaining the whole stack.",
          link: "/ai-automation-for-auto-repair-shops",
        },
        {
          industry: "Adjacent closeout workflow",
          headline: "The home-inspector report-delivery and review page proves a similar post-service closeout layer can stay distinct from the earlier lead, booking, and phone stages",
          body: "Home inspections and auto repair are different businesses, but the workflow logic is similar: the job is completed, the experience still needs a clean closeout, and review timing only works when complaints route back internally first.",
          link: "/report-delivery-and-review-automation-for-home-inspectors",
        },
        {
          industry: "CRM follow-up proof",
          headline: "The e-commerce CRM case study shows why stage visibility and fast human handoff matter once a workflow crosses a meaningful customer milestone",
          body: "That case study is not about auto repair, but it does prove the same operating principle: once an important customer state changes, the next action needs to route cleanly with context instead of depending on memory. This page applies that principle to post-service reputation follow-up.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        {
          label: "AI automation for auto repair shops",
          href: "/ai-automation-for-auto-repair-shops",
        },
        {
          label: "Appointment scheduling and reminder automation for auto repair shops",
          href: "/appointment-scheduling-and-reminder-automation-for-auto-repair-shops",
        },
        {
          label: "Report delivery and review automation for home inspectors",
          href: "/report-delivery-and-review-automation-for-home-inspectors",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader auto-repair automation page?",
      answer:
        "The broader page explains the full operating system: missed calls, estimates, reminders, maintenance outreach, and review automation. This page isolates the narrower post-service reputation layer after the vehicle is already picked up and the visit is complete.",
    },
    {
      question: "Why should a repair shop avoid sending every review request immediately after pickup?",
      answer:
        "Because not every repair feels fully settled the moment the vehicle leaves the shop. Some jobs need a little time, and some customers reply with a concern or billing question first. A strong workflow protects service recovery before it pushes for a public review.",
    },
    {
      question: "What does a focused auto-repair review-request workflow usually cost?",
      answer:
        "A narrow post-service review workflow is usually a smaller build than a full shop automation stack. In practice it often fits in the same rough range as other single-workflow projects on the site — usually closer to a bounded workflow build than a full multi-system rollout — but the real price depends on how clean the completion signal, messaging rules, and handoff logic already are.",
    },
    {
      question: "Can this fit the current shop management stack?",
      answer:
        "Usually, yes. The main requirement is a reliable completion signal and a clean place to route replies or flags. During scoping we look at how the shop tracks completed work today and whether the current tools expose enough structure to trigger the follow-up safely.",
    },
    {
      question: "Where does the ROI usually come from?",
      answer:
        "Usually from cleaner local-trust growth, more consistent review volume from completed jobs, and less advisor time spent manually remembering who should get a follow-up. The workflow is worth it when a few additional strong reviews each month materially affect conversion in local search or referral trust.",
    },
  ],
  faqSubtitle:
    "Practical answers for auto repair shops considering a cleaner post-service review workflow",
  ctaHeading: "Need cleaner reputation follow-up after the work is done?",
  ctaText:
    "Book a 30-minute call. We will look at how completed visits get handed off today, where review asks are being missed or mistimed, and whether a focused post-service workflow, an earlier estimate or phone fix, or no new build is the smarter next move.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your repair shop's follow-through.",
  relatedLinks: [
    {
      label: "AI automation for auto repair shops",
      href: "/ai-automation-for-auto-repair-shops",
    },
    {
      label: "Appointment scheduling and reminder automation for auto repair shops",
      href: "/appointment-scheduling-and-reminder-automation-for-auto-repair-shops",
    },
    {
      label: "Maintenance reminder automation for auto repair shops",
      href: "/maintenance-reminder-automation-for-auto-repair-shops",
    },
    {
      label: "AI phone answering for auto repair shops",
      href: "/ai-phone-answering-for-auto-repair-shops",
    },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
