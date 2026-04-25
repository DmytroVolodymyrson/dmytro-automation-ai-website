import {
  Star,
  Wrench,
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
  slug: "review-request-automation-for-plumbing-companies",
  metaTitle:
    "Review Request Automation for Plumbing Companies — Better Post-Job Reputation Follow-Up | Dmytro AI",
  metaDescription:
    "Review request automation for plumbing companies. Ask at the right time after service work, route unhappy replies before a public review ask, and turn completed jobs into cleaner local-trust follow-up.",
  badgeText: "Plumbing Reputation Workflow",
  badgeIcon: Star,
  h1: "Review Request Automation for Plumbing Companies",
  heroIntro:
    "A lot of plumbing companies do not only lose work because somebody missed the first call. They also leave easy trust on the table after the job is already done. The water-heater replacement finished. The drain or sewer call solved the problem. The repipe, leak repair, or service visit wrapped cleanly. Then nothing happened. Or the review ask went out too early while the homeowner was still waiting to see whether the leak really stayed fixed. Or every completed job got the same generic message even when a callback issue, invoice concern, warranty question, or return-visit detail should have come back to the office first. Review request automation for plumbing companies fixes that narrower post-job workflow. It gives completed work a cleaner closeout path, helps the office ask for reviews when the experience is actually ready, and protects reputation by routing uncertain replies back inside before the company pushes for a public rating.",
  heroSubtext:
    "Below: what a practical plumbing review-request workflow should actually handle, how it stays distinct from the broader plumbing page and the newer first-project / estimate-recovery pages, what guardrails matter, and what proof honestly supports this page without pretending there is already a dedicated plumbing review-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What plumbing review-request automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the stage after the work is completed — not the earlier missed-call, lead, scheduling, or estimate layers.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A real completed-job trigger",
          body: "The workflow should start from a believable completion signal: service marked complete, invoice closed, job status updated, or technician notes handed back to the office. If the trigger is sloppy, review requests go out before the customer experience is actually settled.",
        },
        {
          icon: Clock3,
          title: "Timing that matches the plumbing job type",
          body: "A same-day leak repair, a water-heater replacement, a sewer or drain job, and a repipe do not all feel complete on the same timeline. Strong review timing respects the work type instead of blasting the same ask five minutes after every visit.",
        },
        {
          icon: MessageSquare,
          title: "Different paths for happy customers and unhappy replies",
          body: "If the homeowner replies with a callback issue, unfinished scope question, invoice concern, warranty concern, or a leak that seems to have returned, the workflow should route that back to the office fast instead of pushing harder for a Google review. Reputation automation only helps when service recovery comes first.",
        },
        {
          icon: Users,
          title: "Cleaner field-to-office handoff after the job",
          body: "The office should know what kind of work was done, whether the customer sounded satisfied, and whether any issue was flagged on-site. That handoff matters more than fancy review-request wording.",
        },
        {
          icon: ArrowRightLeft,
          title: "Simple routing when the customer asks for additional work",
          body: "A post-job touchpoint can surface another plumbing issue, another property, or a referral opportunity. The workflow should route that response with context instead of dumping it into a generic inbox.",
        },
        {
          icon: BarChart3,
          title: "Visibility into which jobs produce the best review opportunities",
          body: "Owners should be able to see which job types create reviews, where review asks are ignored, and where unresolved issues keep blocking the ask. That turns reputation follow-through into an operating signal instead of another forgotten admin task.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the plumbing cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays obvious:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for plumbing companies",
          values: [
            "Owners evaluating the full plumbing operating layer across missed calls, lead response, scheduling, estimate follow-up, review requests, and heavier phone coverage",
            "Explains the broader plumbing system instead of isolating the post-job reputation stage after completed work",
          ],
        },
        {
          label: "What to automate first for plumbing companies",
          values: [
            "Owners deciding which single plumbing workflow deserves to be the first project",
            "Helps choose between missed-call recovery, lead follow-up, scheduling, estimate follow-up, review requests, and heavier phone coverage before a bigger rollout",
          ],
        },
        {
          label: "Estimate follow-up automation for plumbing companies",
          values: [
            "Companies that already quote consistently but let too many estimates go quiet afterward",
            "Focuses on sent-quote recovery before the job is won, not on the reputation-closeout stage after the work is complete",
          ],
        },
        {
          label: "Review request automation for plumbing companies",
          values: [
            "Companies that already complete the work but ask for reviews inconsistently, too early, or with no complaint-routing guardrail",
            "Focuses narrowly on post-job timing, unhappy-reply routing, field-to-office handoff, and turning completed plumbing work into healthier local-trust signals",
          ],
        },
        {
          label: "Review request automation for electrical contractors",
          values: [
            "Companies wanting to see the same post-job reputation pattern in another adjacent trades / home-service vertical",
            "Useful adjacent proof for workflow shape, but this plumbing page stays specific to water-heater work, drain and sewer service, leak repairs, return-visit concerns, and office handoff after plumbing jobs",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your plumbing company?",
      subtitle:
        "Best fit when the team already completes enough work that review discipline matters, but post-job follow-through still depends on memory and scattered office effort.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You complete enough service calls or larger plumbing jobs that review consistency materially affects local trust and conversion",
            "Review asks happen irregularly, too early, or only when somebody in the office remembers",
            "Technicians finish the work, but the office does not get a clean closeout signal for who should receive a follow-up",
            "You want unhappy replies routed back to the team before anybody gets pushed toward a public review",
            "A handful of additional strong reviews each month would likely justify the build because local trust matters in your market",
            "You want a narrow post-job workflow before forcing a bigger CRM or communications rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still missed calls, slow lead response, or estimate follow-through before the job is won",
            "The company does too little completed-job volume for review discipline to matter yet",
            "Service quality or callback handling is unstable enough that automating review asks would only amplify the problem",
            "You already run a consistent review process with very little manual drift",
            "You want automation deciding whether a complaint is resolved without human judgment",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep plumbing review-request automation useful",
      subtitle:
        "The goal is cleaner reputation follow-up and safer service recovery — not just more outbound messages.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate around unresolved callback, invoice, or repeat-problem issues",
          body: "If the fix is still in question, there is an invoice dispute, or the homeowner is worried about whether the plumbing issue is really solved, more review requests will only expose the weakness faster. Fix the recovery path first.",
        },
        {
          icon: Wrench,
          title: "Respect the difference between quick service calls and bigger plumbing jobs",
          body: "The right review timing for a quick leak repair is not always the same as the timing for a water-heater replacement, sewer job, repipe, or bigger project. Strong automation adapts to the work type.",
        },
        {
          icon: Users,
          title: "Keep the field-to-office signal clean",
          body: "If the office does not know which jobs finished cleanly, which customers sounded pleased, or which issues were flagged on-site, the review workflow stays blind. The handoff is part of the build.",
        },
        {
          icon: BarChart3,
          title: "Measure review quality, not just review volume",
          body: "The KPI is not only how many review asks were sent. It is whether completed jobs produce more positive reviews, fewer unhappy customers get pushed toward public channels too early, and the office spends less time manually remembering who should get the next message.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical plumbing review-request workflow usually works",
      subtitle:
        "The clean version is simple: finish the work, wait until the experience has actually landed, route live replies fast, and ask for the review when the signal says it is safe.",
      blocks: [
        {
          heading: "A completed job starts the closeout stage",
          body: "The strongest trigger is a real completion moment from the field or office side, not a vague guess. Once that signal is reliable, the review workflow finally has something trustworthy to act on.",
        },
        {
          heading: "The first touch checks whether the job feels settled",
          body: "For some plumbing jobs, a soft check-in can make more sense before the public review ask. That gives the customer a chance to raise a callback issue or lingering concern and gives your team a safer read on whether the experience is ready for a review request.",
        },
        {
          heading: "Good replies move toward the review ask; uncertain replies come back inside",
          body: "A strong workflow does not pretend every customer belongs on the same path. If the homeowner clearly sounds satisfied, the ask can move forward with a direct review link. If there is hesitation, confusion, or a callback issue, the office should inherit the conversation fast.",
        },
        {
          heading: "The office gets the context needed to recover the moment or expand the opportunity",
          body: "When someone replies, the handoff should include what work was completed, when it happened, and why the follow-up fired. That makes it easier to resolve the concern, ask for the review later, or notice a second-job opportunity.",
        },
        {
          heading: "Owners can finally see where post-job reputation follow-through breaks",
          body: "Over time the workflow shows which job types generate the cleanest review asks, which job types create more complaints or silence, and where the bigger problem is timing, service quality, or weak internal follow-through discipline.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published plumbing-specific review-automation case study on the site yet. The honest support comes from the live plumbing parent page, the first-project page that already names review requests as one of the workflow choices, the electrical review-request page that proves the post-job pattern is already live elsewhere on the site, and the published CRM case study that proves stage visibility and timely human handoff matter after key milestones.",
      studies: [
        {
          industry: "Plumbing parent page",
          headline: "The broader plumbing guide already names review requests as one of the workflow wins that matter after completed jobs",
          body: "That parent page explicitly frames review requests as part of the plumbing operating system alongside missed calls, lead follow-up, scheduling, estimate follow-up, and after-hours phone coverage. This child narrows the post-job reputation layer instead of re-explaining the whole stack.",
          link: "/ai-automation-for-plumbing-companies",
        },
        {
          industry: "Plumbing first-project scoping",
          headline: "The first-project page already proves review requests are a distinct buyer decision inside the plumbing cluster",
          body: "That page helps owners choose between missed-call recovery, lead follow-up, scheduling, estimate follow-up, review requests, and heavier phone coverage. This child page isolates the post-job review stage once the owner already knows that is the leak.",
          link: "/what-to-automate-first-for-plumbing-companies",
        },
        {
          industry: "Adjacent workflow proof",
          headline: "The electrical review-request page shows this post-job pattern already exists live on the site, and the CRM case study proves the stage-tracking and handoff logic behind it",
          body: "The electrical page proves the review-request workflow can stand on its own as a distinct buyer question. The e-commerce CRM case study proves the mechanics that matter here too: stage visibility, timely follow-up, and routing live replies to humans when the moment becomes commercially important.",
          link: "/review-request-automation-for-electrical-contractors",
        },
      ],
      links: [
        { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
        { label: "What to automate first for plumbing companies", href: "/what-to-automate-first-for-plumbing-companies" },
        { label: "Review request automation for electrical contractors", href: "/review-request-automation-for-electrical-contractors" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader plumbing automation page?",
      answer:
        "The broader plumbing page covers the full operating system: missed calls, lead response, scheduling, estimate follow-up, review requests, and heavier phone coverage. This child page is narrower. It only focuses on the post-job reputation layer after the service work is already complete.",
    },
    {
      question: "Why not just ask for a review immediately after every completed plumbing job?",
      answer:
        "Because different work types land differently. A quick leak repair may feel settled fast. A water-heater replacement, sewer job, or repipe may need a little time before the homeowner knows everything is truly complete. Good automation respects the service experience instead of forcing the same ask onto every job.",
    },
    {
      question: "What does a focused plumbing review-request workflow usually cost?",
      answer:
        "A focused post-job review workflow usually lands around $1.5K-$3K depending on how cleanly job completion can be detected, whether the build needs a soft check-in before the review ask, and how much complaint-routing or CRM cleanup is required. Broader plumbing systems cost more when they also include lead response, scheduling, estimate recovery, or live phone coverage.",
    },
    {
      question: "Can this work with my current contractor software stack?",
      answer:
        "Usually yes, as long as there is a stable way to detect that a job is truly complete and enough context can pass into the follow-up. Jobber, Housecall Pro, GoHighLevel, spreadsheets, and custom CRM stacks can often support this directly or through a practical integration layer.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main ROI is cleaner local-trust follow-through after completed jobs: more consistent review asks, fewer unhappy homeowners getting pushed toward public reviews before the issue is resolved, better visibility into which job types create reputation wins, and less office time spent manually remembering who should get the next message.",
    },
  ],
  faqSubtitle:
    "Practical answers for plumbing companies considering a cleaner post-job review workflow",
  ctaHeading: "Need cleaner reputation follow-up after the work is done?",
  ctaText:
    "Book a 30-minute call. We will look at how completed jobs get handed off today, where review asks are being missed or mistimed, and whether a focused post-job workflow, an earlier lead or estimate fix, or no new build is the smarter next move.",
  ctaSubtext:
    "No obligation. No generic reputation-management pitch. Just a practical conversation about where the closeout stage is leaking trust or reviews.",
  relatedLinks: [
    { label: "AI automation for plumbing companies", href: "/ai-automation-for-plumbing-companies" },
    { label: "What to automate first for plumbing companies", href: "/what-to-automate-first-for-plumbing-companies" },
    { label: "Estimate follow-up automation for plumbing companies", href: "/estimate-follow-up-automation-for-plumbing-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
