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
  slug: "review-request-automation-for-hvac-companies",
  metaTitle:
    "Review Request Automation for HVAC Companies — Better Post-Job Reputation Follow-Up | Dmytro AI",
  metaDescription:
    "Review request automation for HVAC companies. Ask at the right time after service, route unhappy replies before a public review ask, and turn completed jobs into cleaner local-trust follow-up.",
  badgeText: "HVAC Workflow",
  badgeIcon: Star,
  h1: "Review Request Automation for HVAC Companies",
  heroIntro:
    "A lot of HVAC companies do not only lose jobs because somebody missed the first call. They also lose easy trust after the work is already done. The technician finished the repair or maintenance visit, the customer seemed satisfied, and then nothing happened. Or a review request went out too early while the customer was still waiting to see if the fix held. Or every completed job got the same generic message even when a callback issue, billing question, or comfort complaint should have come back to the office first. Review request automation for HVAC companies fixes that narrower post-job workflow. It gives completed service calls a cleaner closeout path, helps the office ask for reviews when the experience is actually ready, and protects reputation by routing uncertain replies back inside before the company pushes for a public rating.",
  heroSubtext:
    "Below: what a practical HVAC review-request workflow should actually handle, how it stays distinct from the broader HVAC page and the other live child pages, what guardrails matter, and what proof honestly supports this page without pretending there is already a dedicated HVAC review-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What HVAC review-request automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the stage after the job is completed — not the earlier call, lead, or scheduling layers.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A real completed-job trigger",
          body: "The workflow should start from a believable completion signal: service marked complete, invoice closed, technician notes handed off, or job status updated in the CRM. If the trigger is sloppy, review requests go out before the customer experience is actually settled.",
        },
        {
          icon: Clock3,
          title: "Timing that matches the service type",
          body: "A same-day no-cool repair, a maintenance visit, and a larger install do not feel complete on the same timeline. Strong review timing respects the job type instead of blasting the same ask five minutes after every appointment.",
        },
        {
          icon: MessageSquare,
          title: "Different paths for happy customers and unhappy replies",
          body: "If the homeowner replies with a problem, a comeback issue, or a billing question, the workflow should route that back to the office fast instead of pushing harder for a Google review. Reputation automation only helps if service recovery comes first.",
        },
        {
          icon: Users,
          title: "Cleaner technician-to-office handoff after the job",
          body: "The office should know what kind of work was done, whether the customer sounded satisfied, and whether any issue was flagged on-site. That handoff matters more than fancy message wording.",
        },
        {
          icon: ArrowRightLeft,
          title: "Simple routing when the customer asks for another service",
          body: "A post-job touchpoint can surface a maintenance-plan question, another problem in the home, or a referral opportunity. The workflow should route that response with context instead of dumping it into a generic inbox.",
        },
        {
          icon: BarChart3,
          title: "Visibility into which completed jobs create the best review opportunities",
          body: "Owners should be able to see which job types produce reviews, where review asks are being ignored, and where unresolved issues keep blocking the ask. That turns reputation follow-up into an operating signal instead of another forgotten admin task.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the HVAC cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays obvious:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for HVAC companies",
          values: [
            "Owners evaluating the full HVAC operating layer across lead response, missed calls, scheduling, review requests, seasonal outreach, and phone coverage",
            "Explains the broader system instead of isolating the post-job reputation stage",
          ],
        },
        {
          label: "HVAC lead follow-up automation",
          values: [
            "Companies still losing work before the appointment is booked",
            "Focuses on speed-to-lead, first-touch sequences, and recovering new inquiries before a job exists",
          ],
        },
        {
          label: "HVAC scheduling and follow-up automation",
          values: [
            "Companies that already book the work but keep fighting confirmations, reminders, reschedules, and office-to-field continuity",
            "Focuses on the booked-job layer before the appointment happens, not on the completed-job reputation layer after the work is done",
          ],
        },
        {
          label: "Review request automation for HVAC companies",
          values: [
            "Companies that already complete the work but ask for reviews inconsistently, too early, or with no complaint-routing guardrail",
            "Focuses narrowly on post-job timing, unhappy-reply routing, technician-to-office handoff, and turning completed service calls into healthier local-trust signals",
          ],
        },
        {
          label: "AI phone answering for HVAC companies",
          values: [
            "Companies still fixing what happens before or during the first live call",
            "Covers live answer coverage and urgent intake instead of the reputation-closeout stage after the service call is already done",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your HVAC company?",
      subtitle:
        "Best fit when the team already completes enough jobs that review discipline matters, but post-job follow-through still depends on memory and scattered manual effort.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You complete enough service or install work that review consistency materially affects local trust and conversion",
            "Review asks happen irregularly, too early, or only when someone in the office remembers",
            "Technicians finish the job, but the office does not get a clean closeout signal for who should receive a follow-up",
            "You want unhappy replies routed back to the team before anybody gets pushed toward a public review",
            "A handful of additional 5-star reviews each month would likely justify the build because map-pack trust matters in your market",
            "You want a narrow post-job workflow before forcing a bigger CRM or marketing rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still missed calls, slow lead response, or booked-job communication before the appointment even happens",
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
      title: "Guardrails that keep HVAC review-request automation useful",
      subtitle:
        "The goal is cleaner reputation follow-up and safer service recovery — not just more outbound messages.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate around unresolved callback issues",
          body: "If no-heat problems are resurfacing, install punch-list items are still open, or the customer is already frustrated, more review requests will only expose the weakness faster. Fix the recovery path first.",
        },
        {
          icon: Wrench,
          title: "Respect the difference between maintenance, repair, and install work",
          body: "The right review timing for a completed tune-up is not always the same as the timing for a larger install or a repair the customer needs to live with for a day or two. Strong automation adapts to the service type.",
        },
        {
          icon: Users,
          title: "Keep the field-to-office signal clean",
          body: "If the office does not know which jobs finished cleanly, which customers sounded pleased, or which issues were flagged on-site, the review workflow stays blind. The handoff is part of the build.",
        },
        {
          icon: BarChart3,
          title: "Measure review quality, not just review volume",
          body: "The KPI is not only how many review asks were sent. It is whether completed jobs produce more positive reviews, fewer unhappy customers get pushed toward public channels too early, and the office spends less time manually chasing the follow-through.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical HVAC review-request workflow usually works",
      subtitle:
        "The clean version is simple: finish the job, wait until the experience has actually landed, route live replies fast, and ask for the review when the signal says it is safe.",
      blocks: [
        {
          heading: "A completed job starts the closeout stage",
          body: "The strongest trigger is a real completion moment from the field or office side, not a vague guess. Once that signal is reliable, the review workflow finally has something trustworthy to act on.",
        },
        {
          heading: "The first touch checks whether the job feels settled",
          body: "For some service calls, a soft check-in can make more sense before the public review ask. That gives the customer a chance to raise a comfort issue or small concern and gives your team a safer read on whether the experience is ready for a review request.",
        },
        {
          heading: "Good replies move toward the review ask; uncertain replies come back inside",
          body: "A strong workflow does not pretend every customer belongs on the same path. If the homeowner clearly sounds satisfied, the ask can move forward with a direct review link. If there is hesitation, confusion, or a callback issue, the office should inherit the conversation fast.",
        },
        {
          heading: "The office gets the context needed to recover the moment or expand the opportunity",
          body: "When someone replies, the handoff should include what service was performed, when it happened, and why the follow-up fired. That makes it easier to resolve the concern, ask for the review later, or notice a maintenance-plan or second-job opportunity.",
        },
        {
          heading: "Owners can finally see where post-job reputation follow-through breaks",
          body: "Over time the workflow shows which job types generate the cleanest review asks, which service lines create more complaints or silence, and where the bigger problem is timing, service quality, or weak internal follow-up discipline.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published HVAC-specific review-automation case study on the site yet. The honest support comes from the live HVAC parent page, an HVAC child page that already names post-job review requests as part of the workflow, and published CRM / voice-agent case studies that prove stage visibility and timely human handoff matter after key operational milestones.",
      studies: [
        {
          industry: "HVAC parent page",
          headline: "The broader HVAC guide already names review requests as one of the workflow wins that matter after completed jobs",
          body: "That parent page explicitly frames review requests as part of the HVAC operating system alongside lead follow-up, scheduling, missed-call recovery, and seasonal outreach. This child narrows the post-job reputation layer instead of re-explaining the whole stack.",
          link: "/ai-automation-for-hvac-companies",
        },
        {
          industry: "HVAC child-page adjacency",
          headline: "The HVAC lead-follow-up page already shows the same operational logic: a completed service should trigger the right next step instead of disappearing after the visit",
          body: "That page includes post-job review requests inside the broader follow-through sequence. This child page pulls that one workflow family out and treats it as its own buyer decision for HVAC companies that already know completed-job closeout is the leak.",
          link: "/hvac-lead-follow-up-automation",
        },
        {
          industry: "Published operational proof",
          headline: "The e-commerce CRM case study proves the system logic this page depends on: stage visibility, timely follow-up, and human handoff when a contact re-engages",
          body: "That case study is not HVAC-specific, but it is direct proof that recoverable value gets lost when ownership after a milestone is weak. Review-request automation uses different copy, yet it depends on the same operational discipline.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for HVAC companies", href: "/ai-automation-for-hvac-companies" },
        { label: "HVAC lead follow-up automation", href: "/hvac-lead-follow-up-automation" },
        { label: "HVAC scheduling and follow-up automation", href: "/hvac-scheduling-and-follow-up-automation" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader HVAC automation page?",
      answer:
        "The broader HVAC page covers the full operating system: missed calls, lead response, scheduling, review requests, seasonal outreach, and where AI helps overall. This child page is narrower. It only focuses on the post-job reputation layer after a service call or install is already completed.",
    },
    {
      question: "Why not just ask for a review immediately after every completed HVAC job?",
      answer:
        "Because different service types land differently. Some maintenance visits feel settled right away. A repair or install may need a little time before the customer knows the issue is truly resolved. Good automation respects the service experience instead of forcing the same ask onto every job.",
    },
    {
      question: "What does a focused HVAC review-request workflow usually cost?",
      answer:
        "A focused post-job review workflow usually lands around $1.5K-$3K depending on how cleanly job completion can be detected, whether the build needs a soft check-in before the review ask, and how much complaint-routing or CRM cleanup is required. Broader HVAC systems cost more when they also include lead response, scheduling, seasonal outreach, or live phone coverage.",
    },
    {
      question: "Can this work with my current HVAC software stack?",
      answer:
        "Usually yes, as long as there is a stable way to detect that a job is truly complete and enough context can pass into the follow-up. API access helps, but practical workflows can also run from webhooks, status changes, exports, or other reliable handoff points between field completion and office follow-through.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main ROI is cleaner local-trust follow-through after completed jobs: more consistent review asks, fewer unhappy customers getting pushed toward public reviews before the issue is resolved, better visibility into which job types create reputation wins, and less office time spent manually remembering who should get the next message.",
    },
  ],
  faqSubtitle:
    "Practical answers for HVAC companies considering a cleaner post-job review workflow",
  ctaHeading: "Need cleaner reputation follow-up after the work is done?",
  ctaText:
    "Book a 30-minute call. We will look at how completed jobs get handed off today, where review asks are being missed or mistimed, and whether a focused post-job workflow, an earlier lead or scheduling fix, or no new build is the smarter next move.",
  ctaSubtext:
    "No obligation. No generic reputation-management pitch. Just a practical conversation about where the closeout stage is leaking trust or reviews.",
  relatedLinks: [
    { label: "AI automation for HVAC companies", href: "/ai-automation-for-hvac-companies" },
    { label: "What to automate first for HVAC companies", href: "/what-to-automate-first-for-hvac-companies" },
    { label: "HVAC scheduling and follow-up automation", href: "/hvac-scheduling-and-follow-up-automation" },
    { label: "AI phone answering for HVAC companies", href: "/ai-phone-answering-for-hvac-companies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
