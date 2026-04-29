import {
  Star,
  Sun,
  MessageSquare,
  ClipboardCheck,
  ArrowRightLeft,
  BarChart3,
  Users,
  Clock3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileText,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "review-request-automation-for-solar-companies",
  metaTitle:
    "Review Request Automation for Solar Companies — Better Post-Install Reputation Follow-Up | Dmytro AI",
  metaDescription:
    "Review request automation for solar companies. Ask at the right time after install and PTO, route unhappy replies before a public review ask, and turn completed solar projects into cleaner local-trust follow-up.",
  badgeText: "Solar Workflow",
  badgeIcon: Star,
  h1: "Review Request Automation for Solar Companies",
  heroIntro:
    "A lot of solar companies lose trust long after the lead was won. The homeowner signed, the install happened, the system is nearly or fully live, and then post-project follow-up gets handled sloppily. Sometimes nobody asks for a review at all. Sometimes a public review ask goes out while inspection, monitoring, billing, or punch-list questions are still unresolved. Sometimes the office treats every completed install the same even though some homeowners are ready to advocate right away and others still need a softer check-in before a review link makes sense. Review request automation for solar companies fixes that narrower post-install workflow. It gives the team a practical way to ask for reviews once the project really feels complete, keep unhappy replies inside the business first, and turn strong project outcomes into better local-trust signals without pushing homeowners toward a public ask too early.",
  heroSubtext:
    "Below: what a practical solar review-request workflow should actually handle, how it stays distinct from the broader solar page and the other live solar children, what guardrails matter most, and what proof honestly supports this page without pretending there is already a dedicated solar review-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What solar review-request automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the stage after install and homeowner handoff — not the earlier lead, quote, scheduling, or project-status layers.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A real post-install or PTO-ready trigger",
          body: "The workflow should start from a believable milestone: install complete, inspection passed, PTO granted, final walkthrough finished, or another reliable closeout signal the team already trusts. If the trigger is vague, review requests go out before the homeowner experience is actually settled.",
        },
        {
          icon: Clock3,
          title: "Timing that matches how solar projects actually land",
          body: "A same-week install finish, a delayed PTO, and a project with lingering utility or monitoring questions do not all deserve the same timing. Strong review-request automation respects that difference instead of blasting the same ask to every homeowner the moment a crew leaves the roof.",
        },
        {
          icon: MessageSquare,
          title: "Different paths for happy homeowners and unresolved replies",
          body: "If the homeowner replies with a billing concern, monitoring confusion, inspection question, or install punch-list issue, the workflow should route that back to the project team fast instead of pushing harder for a Google review. Reputation automation only helps when service recovery comes first.",
        },
        {
          icon: Users,
          title: "Cleaner handoff from project completion to reputation follow-through",
          body: "The office should know whether the project truly feels done, whether the homeowner sounded satisfied, and whether any loose end is still open. That operational handoff matters more than fancy wording in the review ask itself.",
        },
        {
          icon: ArrowRightLeft,
          title: "Reply routing when the homeowner asks for another step",
          body: "A post-install message can surface an expansion question, another property, a referral opportunity, or a support issue. The workflow should route that response with context instead of dumping it into a generic inbox where the original project history gets lost.",
        },
        {
          icon: BarChart3,
          title: "Visibility into which completed projects create the best review opportunities",
          body: "Owners should be able to see which project types produce reviews, where the ask gets ignored, and where unresolved issues keep blocking the review path. That turns review follow-through into an operating signal instead of another admin task that depends on memory.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the solar cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays obvious:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for solar companies",
          values: [
            "Owners evaluating the full solar operating system across leads, utility-bill collection, scheduling, project updates, phone coverage, and post-install follow-through",
            "Explains the broader solar stack instead of isolating the post-install reputation stage",
          ],
        },
        {
          label: "Quote follow-up automation for solar companies",
          values: [
            "Teams still losing deals between proposal sent and signed contract",
            "Focuses on sent-proposal recovery before the project is even sold, not on the reputation-closeout layer after installation is effectively complete",
          ],
        },
        {
          label: "Project status update automation for solar companies",
          values: [
            "Companies that already sold the project but keep fielding repetitive homeowner update questions during permitting, install, and PTO",
            "Focuses on milestone communication while the project is still moving, not on the narrower moment when the homeowner is ready for a public review ask",
          ],
        },
        {
          label: "Appointment scheduling and reminder automation for solar companies",
          values: [
            "Companies that already book consultations but still lose rep time to no-shows, weak confirmations, and reschedule chaos",
            "Focuses on the booked-visit layer before the install exists, not on reputation follow-through after the system is effectively handed off",
          ],
        },
        {
          label: "Review request automation for solar companies",
          values: [
            "Solar companies that already finish projects but ask for reviews inconsistently, too early, or with no unhappy-reply guardrail",
            "Focuses narrowly on post-install / PTO-ready timing, project-team handoff, complaint routing, and turning completed projects into healthier local-trust signals",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your solar company?",
      subtitle:
        "Best fit when the team already completes enough installs that review discipline matters, but post-project follow-through still depends on memory and scattered manual effort.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You complete enough installs or PTO-ready projects each month that review consistency materially affects trust and close rates",
            "Review asks happen irregularly, too early, or only when somebody in the office remembers",
            "The project team finishes the work, but nobody owns the clean handoff into post-project follow-through",
            "You want unhappy replies routed back inside before anyone gets pushed toward a public review",
            "A handful of additional strong Google reviews each month would likely justify the build because local trust still matters heavily in solar buying decisions",
            "You want a narrow post-install workflow before forcing a bigger CRM or customer-communication rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still missed calls, slow first response, quote follow-up, or project-status communication before the install is even finished",
            "You complete too few projects each month for review discipline to move much business yet",
            "Install quality, billing clarity, or punch-list follow-through is too unstable to justify automating review asks right now",
            "You already run a consistent review process with very little manual drift",
            "You want automation deciding whether a homeowner concern is truly resolved without human judgment",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep solar review-request automation useful",
      subtitle:
        "The goal is cleaner reputation follow-through and safer service recovery — not simply sending more messages after install.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate around unresolved post-install friction",
          body: "If PTO is still unclear, monitoring is not set up, a punch-list item is open, or the homeowner is already frustrated, more review requests will only expose the weakness faster. Fix the recovery path first.",
        },
        {
          icon: Sun,
          title: "Respect the difference between install complete and truly settled",
          body: "Some homeowners are ready for a review quickly after install. Others need inspection or PTO confirmation before the project feels complete enough to advocate publicly. Strong automation reflects the real finish line for your process.",
        },
        {
          icon: FileText,
          title: "Keep the project-team handoff explicit",
          body: "If the office does not know which homeowner is fully settled, which issue is still open, or which rep or project manager should inherit a reply, the review workflow stays blind. The handoff is part of the build.",
        },
        {
          icon: BarChart3,
          title: "Measure review quality, not just review volume",
          body: "The KPI is not only how many review asks were sent. It is whether more completed projects produce strong reviews, fewer unhappy homeowners are pushed public too early, and the team spends less time manually remembering which install deserves the next touch.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical solar review-request workflow usually works",
      subtitle:
        "The clean version is simple: project hits a trustworthy closeout stage, the team checks whether the homeowner experience feels settled, and only then does the public ask go out.",
      blocks: [
        {
          heading: "A real closeout milestone starts the reputation stage",
          body: "The strongest trigger is a milestone the team already respects: install complete plus no open issues, inspection passed, PTO granted, or another explicit handoff marker. Once that signal is clean, the workflow finally has something trustworthy to act on.",
        },
        {
          heading: "A soft check-in can come before the public ask",
          body: "For some projects, a quick check-in makes more sense before the review request itself. That gives the homeowner a chance to raise a billing, monitoring, or completion concern and gives the team a better read on whether the experience is actually ready for a public review ask.",
        },
        {
          heading: "Satisfied replies move toward the review ask; uncertain replies come back inside",
          body: "A strong workflow does not pretend every homeowner belongs on the same path. If the homeowner clearly sounds satisfied, the ask can move forward with a direct review link. If there is hesitation, confusion, or a post-install issue, the project or office team should inherit the conversation fast.",
        },
        {
          heading: "The office gets the context needed to recover the moment or expand the opportunity",
          body: "When someone replies, the handoff should include the project stage, install context, and why the follow-up fired. That makes it easier to resolve the concern, ask for the review later, or notice another property, referral, or expansion opportunity.",
        },
        {
          heading: "Owners can finally see where post-install trust follow-through breaks",
          body: "Over time the workflow shows which project types create the cleanest review opportunities, which stages still generate uncertainty, and where the bigger issue is timing, service quality, or weak internal ownership after install.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published solar-specific review-automation case study on the site yet. The honest support comes from the live solar parent page, the live solar post-sale status page, and the published CRM case study that proves stage visibility and timely human handoff matter after important milestones.",
      studies: [
        {
          industry: "Solar parent page",
          headline: "The broader solar guide already names review requests as one of the workflow wins that matter after installation and PTO",
          body: "That parent page explicitly frames referral and review requests as part of the solar operating system once the homeowner journey reaches the closeout stage. This child narrows that broader opportunity to one buyer decision: how to ask for reviews cleanly after a completed project.",
          link: "/ai-automation-for-solar-companies",
        },
        {
          industry: "Solar post-sale adjacency",
          headline: "The solar project-status page proves the cluster already isolates homeowner communication after the sale instead of treating every post-sale message as one blob",
          body: "That page focuses on milestone updates during permitting, install, inspection, and PTO. This review page sits one stage later: once the homeowner experience is settled enough for a public trust ask instead of an operational status update.",
          link: "/project-status-update-automation-for-solar-companies",
        },
        {
          industry: "Published CRM lifecycle proof",
          headline: "The e-commerce CRM case study proves the stage tracking, reminder discipline, and human handoff mechanics this workflow depends on",
          body: "That case study is not a solar build, but it is direct proof of the operating mechanics: milestone visibility, routed follow-up, and fast human response once a contact re-engages. Review-request automation depends on the same discipline after project completion.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
        { label: "What to automate first for solar companies", href: "/what-to-automate-first-for-solar-companies" },
        { label: "Project status update automation for solar companies", href: "/project-status-update-automation-for-solar-companies" },
        { label: "Review request automation for service businesses", href: "/review-request-automation-for-service-businesses" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader solar automation page?",
      answer:
        "The broader solar page covers the full system: lead response, utility-bill collection, scheduling, project updates, phone coverage, and post-install follow-through. This child page is narrower. It only focuses on the post-install reputation layer once the project is effectively complete.",
    },
    {
      question: "Why not just ask for a review immediately after every solar install?",
      answer:
        "Because different projects settle differently. Some homeowners are ready quickly after install. Others need inspection, PTO, billing clarification, or a soft post-install check-in first. Good automation respects the actual customer experience instead of forcing the same ask onto every project the moment the crew leaves.",
    },
    {
      question: "What does a focused solar review-request workflow usually cost?",
      answer:
        "A focused post-install review workflow usually lands around $1.5K-$3K depending on how cleanly project completion can be detected, whether a soft check-in comes before the public ask, and how much complaint routing or CRM cleanup is required. Broader solar systems cost more when they also include lead response, utility-bill collection, scheduling, project updates, or phone-answering layers.",
    },
    {
      question: "Can this work with our current solar CRM or project stack?",
      answer:
        "Usually yes, as long as there is a stable way to detect that a project is truly at the right closeout stage and enough context can pass into the follow-up. Aurora, Solo, GoHighLevel, spreadsheets, or project-management tools can all work if the milestone and ownership signals are reliable enough.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main ROI is cleaner local-trust follow-through after completed projects: more consistent review asks, fewer unresolved homeowners getting pushed public too early, better visibility into which installs create the strongest advocacy, and less office time spent manually remembering who should get the next message.",
    },
  ],
  faqSubtitle:
    "Practical answers for solar companies considering a cleaner post-install review workflow",
  ctaHeading: "Need cleaner reputation follow-through after the install is done?",
  ctaText:
    "Book a 30-minute call. We will look at how completed projects get handed off today, where review asks are being missed or mistimed, and whether a focused post-install workflow, an earlier quote or status fix, or no new build is the smarter next move.",
  ctaSubtext:
    "No obligation. No generic reputation-management pitch. Just a practical conversation about where the closeout stage is leaking trust or reviews.",
  relatedLinks: [
    { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
    { label: "What to automate first for solar companies", href: "/what-to-automate-first-for-solar-companies" },
    { label: "Quote follow-up automation for solar companies", href: "/quote-follow-up-automation-for-solar-companies" },
    { label: "Project status update automation for solar companies", href: "/project-status-update-automation-for-solar-companies" },
    { label: "Review request automation for service businesses", href: "/review-request-automation-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
