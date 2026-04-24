import {
  Leaf,
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
  slug: "review-request-automation-for-landscaping-companies",
  metaTitle:
    "Review Request Automation for Landscaping Companies — Cleaner Post-Job Reputation Follow-Up | Dmytro AI",
  metaDescription:
    "Review request automation for landscaping companies. Ask at the right time after completed work, route unhappy replies before a public review ask, and turn finished jobs into cleaner reputation follow-up.",
  badgeText: "Landscaping Workflow",
  badgeIcon: Star,
  h1: "Review Request Automation for Landscaping Companies",
  heroIntro:
    "A landscaping company can win the lead, finish the project, leave the property looking great, and still lose the trust signal that helps the next customer choose them. The crew wrapped the job, the homeowner looked happy enough, and then nobody followed up while the result was still fresh. Or the review request went out too early before the customer had seen the yard settle, the cleanup finished, or the recurring service cadence feel reliable. Or every completed project got the same generic message even when a complaint, touch-up request, billing question, or scheduling issue should have come back inside the office first. Review request automation for landscaping companies fixes that narrower post-job workflow. It gives completed projects and recurring-service milestones a cleaner closeout path, helps the company ask for reviews when the experience is actually ready, and protects reputation by routing uncertain replies back to a human before the business pushes for a public rating.",
  heroSubtext:
    "Below: what a practical landscaping review-request workflow should actually handle, how it stays distinct from the broader landscaping page and the other live child pages, what guardrails matter, and what proof honestly supports this page without pretending there is already a dedicated landscaping review-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What landscaping review-request automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the stage after the work is completed — not lead response, not estimate follow-up, and not recurring-service scheduling.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A real completed-job or completed-service trigger",
          body: "The workflow should start from a believable closeout moment: project marked complete, invoice closed, recurring-service visit finished, or the office confirming the work was done cleanly. If that signal is sloppy, review asks go out before the customer experience actually feels settled.",
        },
        {
          icon: Clock3,
          title: "Timing that matches the type of landscaping work",
          body: "A spring cleanup, a hardscape install, a mulch refresh, and a recurring mowing visit do not feel finished on the same timeline. Strong review timing respects the service type instead of blasting the same ask right after every visit.",
        },
        {
          icon: MessageSquare,
          title: "Different paths for happy customers and unhappy replies",
          body: "If the homeowner replies with a touch-up issue, billing question, plant concern, or complaint about the crew, the workflow should route that back inside fast instead of pushing harder for a Google review. Reputation automation only helps if service recovery comes first.",
        },
        {
          icon: Users,
          title: "Cleaner crew-to-office handoff after the job",
          body: "The office should know what was completed, whether the client seemed pleased, and whether anything still needs follow-up before a review ask goes out. That internal handoff matters more than clever SMS copy.",
        },
        {
          icon: ArrowRightLeft,
          title: "Simple routing when the client wants more work",
          body: "A post-job touchpoint can surface additional planting work, seasonal maintenance, irrigation needs, snow service interest, or a referral opportunity. The workflow should route that response with context attached instead of burying it in a generic inbox.",
        },
        {
          icon: BarChart3,
          title: "Visibility into which jobs create the best review opportunities",
          body: "Owners should be able to see which completed services create reviews, where review asks are getting ignored, and where unresolved complaints keep blocking the ask. That turns reputation follow-up into an operating signal instead of another forgotten admin task.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the landscaping cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays obvious:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for landscaping companies",
          values: [
            "Owners evaluating the full landscaping operating system across lead response, estimates, recurring services, seasonal campaigns, phone handling, and reviews",
            "Explains the broader business layer instead of isolating the post-job reputation stage after work is already complete",
          ],
        },
        {
          label: "Estimate follow-up automation for landscaping companies",
          values: [
            "Companies still losing open quotes before the project is booked",
            "Focuses on recovering sent estimates before the work happens, not on post-job reputation follow-through after the project is done",
          ],
        },
        {
          label: "Recurring service scheduling and reminder automation for landscaping companies",
          values: [
            "Companies already selling recurring work but still fighting visit confirmations, skip requests, weather-delay updates, and office-to-field handoff",
            "Focuses on keeping active service organized before and during the visit, not on the closeout moment after the visit is complete",
          ],
        },
        {
          label: "Review request automation for landscaping companies",
          values: [
            "Companies that already complete good work but ask for reviews inconsistently, too early, or with no unhappy-reply routing guardrail",
            "Focuses narrowly on post-job timing, complaint routing, office follow-up, and turning completed projects into healthier local-trust signals",
          ],
        },
        {
          label: "Seasonal reactivation automation for landscaping companies",
          values: [
            "Companies trying to bring past clients back before spring, fall, or snow-season demand hits",
            "Focuses on reactivating earlier customers before the next season, not on capturing reviews from the work that just finished",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your landscaping company?",
      subtitle:
        "Best fit when the company already completes enough work that review discipline matters, but post-job follow-through still depends on memory and scattered manual effort.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You complete enough projects or recurring visits that review consistency materially affects local trust and quote conversion",
            "Review asks happen irregularly, too early, or only when someone in the office remembers",
            "The crew finishes good work, but there is no clean closeout signal for who should receive a follow-up",
            "You want unhappy replies routed back to the office before anyone gets pushed toward a public review",
            "A few additional strong Google reviews each month would likely justify the build because local proof matters in your market",
            "You want a narrow post-job workflow before forcing a bigger CRM or marketing rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still missed calls, slow first response, or estimate follow-up before the project is even booked",
            "The company does too little completed-job volume for review discipline to matter yet",
            "Service quality or post-job cleanup is inconsistent enough that automating review asks would only amplify the problem",
            "You already run a disciplined review process with very little manual drift",
            "You want automation deciding whether a complaint is resolved without human judgment",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep landscaping review-request automation useful",
      subtitle:
        "The goal is cleaner reputation follow-up and safer service recovery — not just more outbound texts.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate around unresolved quality or cleanup issues",
          body: "If the homeowner still wants a touch-up, has concerns about plant health, or is unhappy with cleanup or crew communication, more review requests will only expose the weakness faster. Fix the recovery path first.",
        },
        {
          icon: Leaf,
          title: "Respect the difference between one-off projects and recurring service",
          body: "The right review timing for a large install is not always the same as the timing for mowing, maintenance, or a seasonal cleanup. Strong automation adapts to the type of work instead of forcing one rigid follow-up rule.",
        },
        {
          icon: Users,
          title: "Keep the crew-to-office signal clean",
          body: "If the office does not know which jobs finished cleanly, which clients sounded pleased, or which issues were flagged on-site, the review workflow stays blind. That handoff is part of the build.",
        },
        {
          icon: BarChart3,
          title: "Measure review quality, not just message volume",
          body: "The KPI is not only how many requests were sent. It is whether completed jobs create more positive reviews, fewer unhappy clients get pushed public too early, and the team spends less time manually chasing review follow-through.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical landscaping review-request workflow usually works",
      subtitle:
        "The clean version is simple: finish the work, wait until the experience actually feels settled, route live replies fast, and ask for the review when the signal says it is safe.",
      blocks: [
        {
          heading: "A completed job or completed visit starts the closeout stage",
          body: "The strongest trigger is a real completion moment from the office or crew-lead side, not a vague guess. Once that handoff is trustworthy, the reputation workflow finally has something reliable to act on.",
        },
        {
          heading: "The first touch checks whether the experience feels complete",
          body: "For some jobs, a soft post-service check-in can make more sense before the public review ask. That gives the client a chance to raise a concern and gives your team a safer read on whether the experience is ready for a review request.",
        },
        {
          heading: "Satisfied replies move toward the review ask; uncertain replies come back inside",
          body: "A strong workflow does not pretend every customer belongs on the same path. If the homeowner sounds pleased, the ask can move forward with a direct review link. If there is hesitation, confusion, or a service issue, the office should inherit the conversation fast.",
        },
        {
          heading: "The office gets the context needed to recover the moment or expand the opportunity",
          body: "When someone replies, the handoff should include what work was completed, when it happened, and why the follow-up fired. That makes it easier to resolve the issue, ask for the review later, or notice another service opportunity.",
        },
        {
          heading: "Owners can finally see where post-job reputation follow-through breaks",
          body: "Over time the workflow shows which service lines create the cleanest review asks, which project types produce more complaints or silence, and where the real problem is timing, service quality, or weak internal follow-up discipline.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published landscaping-specific review-automation case study on the site yet. The honest support comes from the live landscaping parent and first-project pages, the adjacent auto-repair review-request page that proves the post-service reputation layer can stand on its own, and the published CRM case study that proves stage visibility plus human handoff matter after an operational milestone.",
      studies: [
        {
          industry: "Landscaping cluster",
          headline: "The live landscaping parent and first-project pages already isolate review automation as a real workflow family",
          body: "The landscaping parent explicitly names review automation, and the first-project scoping page already compares reviews against missed calls, estimate follow-up, recurring service coordination, and seasonal reactivation. This child narrows that broader post-job trust layer instead of re-explaining the whole landscaping stack.",
          link: "/what-to-automate-first-for-landscaping-companies",
        },
        {
          industry: "Adjacent review-closeout workflow",
          headline: "The auto-repair review-request page proves the same post-service reputation layer can stay distinct from earlier lead, scheduling, and phone stages",
          body: "Auto repair and landscaping are different businesses, but the workflow logic is similar: the work is completed, the customer experience still needs a clean closeout, and review timing only works when complaints route back internally first.",
          link: "/review-request-automation-for-auto-repair-shops",
        },
        {
          industry: "CRM follow-up proof",
          headline: "The e-commerce CRM case study shows why stage visibility and fast human handoff matter once a workflow crosses a meaningful customer milestone",
          body: "That case study is not about landscaping, but it proves the same operating principle: once an important customer state changes, the next action needs to route cleanly with context instead of depending on memory. This page applies that principle to post-job reputation follow-up.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        {
          label: "AI automation for landscaping companies",
          href: "/ai-automation-for-landscaping-companies",
        },
        {
          label: "What to automate first for landscaping companies",
          href: "/what-to-automate-first-for-landscaping-companies",
        },
        {
          label: "Review request automation for auto repair shops",
          href: "/review-request-automation-for-auto-repair-shops",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader landscaping automation page?",
      answer:
        "The broader landscaping page explains the full operating layer: lead response, estimates, recurring services, seasonal campaigns, phone handling, and review automation. This page isolates the narrower post-job reputation layer after the work is already complete.",
    },
    {
      question: "Why should a landscaping company avoid sending every review request immediately after the crew leaves?",
      answer:
        "Because not every job feels fully settled the moment the crew wraps. Some clients need to see the result for a day or two, and some reply with a concern or touch-up request first. A strong workflow protects service recovery before it pushes for a public review.",
    },
    {
      question: "What does a focused landscaping review-request workflow usually cost?",
      answer:
        "A narrow post-job review workflow is usually a smaller build than a full landscaping automation stack. In practice it often fits in the same rough range as other bounded single-workflow projects on the site, but the real price depends on how clean the completion trigger, messaging rules, and unhappy-reply routing already are.",
    },
    {
      question: "Can this work for both one-off projects and recurring landscaping service?",
      answer:
        "Usually yes, as long as there is a reliable way to detect when a project or service visit is actually complete and who should own the follow-up if the client replies. In many cases the current CRM, field-service app, or office workflow stays in place while automation improves the timing and routing around it.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is turning completed landscaping work into more consistent public proof without making the office manually chase every client. If local reviews materially affect quote conversion in your market, even a handful of additional strong reviews per month can justify the build. The secondary win is catching unhappy replies before they become public damage.",
    },
  ],
  faqSubtitle:
    "Practical answers for landscaping companies considering a cleaner post-job review workflow",
  ctaHeading: "Need cleaner reputation follow-up after the work is done?",
  ctaText:
    "Book a 30-minute call. We will look at how completed jobs get handed off today, where review asks are being missed or mistimed, and whether a focused post-job workflow, an earlier lead or estimate fix, or no new build is the smarter next move.",
  ctaSubtext:
    "No inflated review promises. Just a practical recommendation based on your closeout process, service mix, and current follow-through discipline.",
  relatedLinks: [
    {
      label: "AI automation for landscaping companies",
      href: "/ai-automation-for-landscaping-companies",
    },
    {
      label: "What to automate first for landscaping companies",
      href: "/what-to-automate-first-for-landscaping-companies",
    },
    {
      label: "Review request automation for auto repair shops",
      href: "/review-request-automation-for-auto-repair-shops",
    },
    {
      label: "Estimate follow-up automation for landscaping companies",
      href: "/estimate-follow-up-automation-for-landscaping-companies",
    },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
