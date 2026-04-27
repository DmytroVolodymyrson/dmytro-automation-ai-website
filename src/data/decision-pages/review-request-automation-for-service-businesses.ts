import {
  Star,
  Clock3,
  MessageSquare,
  ArrowRightLeft,
  BarChart3,
  Users,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Workflow,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "review-request-automation-for-service-businesses",
  metaTitle:
    "Review Request Automation for Service Businesses — Post-Service Reputation Follow-Up That Works | Dmytro AI",
  metaDescription:
    "Review request automation for service businesses. Time the ask after the job lands, route unhappy replies before a public review push, and turn completed work into consistent local-trust signals.",
  badgeText: "Reputation Workflow",
  badgeIcon: Star,
  h1: "Review Request Automation for Service Businesses",
  heroIntro:
    "Most service businesses do not have a review problem. They have a post-service follow-up problem. The work gets done, the customer seems happy, and then nobody asks — or the ask goes out too early, too late, or with no guardrail for unhappy replies. Review request automation fixes the narrow workflow between a completed job and a public reputation signal. It gives the business a reliable way to ask at the right time, route problems back inside before they become public complaints, and stop depending on whoever in the office remembers to send the link.",
  heroSubtext:
    "Below: what a practical review-request workflow should handle, how it stays distinct from lead follow-up and phone answering pages, when it is a good fit, what guardrails matter, and what proof honestly supports this page across the live vertical review pages already on the site.",
  sections: [
    {
      type: "cards",
      title: "What review-request automation should actually handle",
      subtitle:
        "This page covers the post-service reputation layer — not the earlier lead, scheduling, or phone stages.",
      items: [
        {
          icon: Workflow,
          title: "A real completed-job trigger",
          body: "The workflow should fire from a reliable completion signal: job marked done, invoice closed, service status updated, or a clean handoff from the field. If the trigger is unreliable, review requests land before the customer knows the work is finished.",
        },
        {
          icon: Clock3,
          title: "Timing matched to the service type",
          body: "A quick repair, a recurring cleaning visit, and a multi-day install do not feel complete on the same timeline. Strong review timing adapts to the work instead of blasting a generic message five minutes after every appointment.",
        },
        {
          icon: MessageSquare,
          title: "Separate paths for satisfied customers and unhappy replies",
          body: "If the customer replies with a problem, a complaint, or a billing question, the workflow should route that back to the team immediately instead of pushing harder for a public review. Reputation automation only works when service recovery comes first.",
        },
        {
          icon: Users,
          title: "A clean field-to-office handoff",
          body: "The office should know which jobs finished cleanly, whether the customer seemed satisfied, and whether anything was flagged on-site. That handoff matters more than clever message copy.",
        },
        {
          icon: ArrowRightLeft,
          title: "Routing when a reply opens a new opportunity",
          body: "A post-job touchpoint can surface a maintenance question, a referral, or a second-service request. The workflow should route those replies with context instead of dumping them into a generic inbox.",
        },
        {
          icon: BarChart3,
          title: "Visibility into which jobs produce reviews and which do not",
          body: "Owners should see which service types generate reviews, where review asks get ignored, and where complaints keep blocking the ask. That turns reputation follow-up into an operating signal instead of a guess.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct from lead follow-up and phone answering",
      subtitle:
        "Review-request automation sits after the job is done. These other pages cover earlier stages:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI lead follow-up for service businesses",
          values: [
            "Businesses losing new inquiries before the first appointment is booked",
            "Speed-to-lead, qualification, and first-touch follow-up sequences",
          ],
        },
        {
          label: "Instant lead response automation",
          values: [
            "Companies where the form, call, or message sits too long before anyone replies",
            "Multi-channel response speed and owner routing before the lead goes cold",
          ],
        },
        {
          label: "Contact form lead follow-up automation",
          values: [
            "Businesses specifically leaking website-form leads after submission",
            "Post-submit response, qualification, and structured follow-up for web forms",
          ],
        },
        {
          label: "Quote follow-up automation",
          values: [
            "Companies where sent estimates go cold without structured reminders",
            "Recovering open quotes with timed sequences and objection-aware follow-up",
          ],
        },
        {
          label: "Review request automation for service businesses",
          values: [
            "Companies that already complete the work but ask for reviews inconsistently, too early, or with no complaint routing",
            "Post-job timing, unhappy-reply routing, field-to-office handoff, and turning completed jobs into cleaner reputation signals",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your business?",
      subtitle:
        "Best fit when the team already completes enough jobs that review discipline matters, but post-service follow-through still depends on memory.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You complete enough work that review consistency materially affects local trust, map-pack ranking, or referral volume",
            "Review asks happen irregularly, too early, or only when someone remembers",
            "Field or delivery staff finish jobs, but the office does not get a clean closeout signal for follow-up",
            "You want unhappy replies routed back to the team before anybody gets pushed toward a public review",
            "A handful of additional 5-star reviews each month would likely justify the build",
            "You want a narrow post-job workflow before forcing a bigger CRM or marketing rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The bigger leak is still missed calls, slow lead response, or booking communication before the work even happens",
            "Completed-job volume is too low for review discipline to matter yet",
            "Service quality or complaint handling is unstable enough that automating review asks would amplify the problem",
            "You already run a consistent review process with very little manual drift",
            "You want automation deciding whether a complaint is resolved without human judgment",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep review-request automation useful",
      subtitle:
        "The goal is cleaner reputation follow-up and safer service recovery — not just more outbound messages.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate around unresolved service issues",
          body: "If callbacks, warranty problems, or billing disputes are still open, more review requests will only expose the weakness faster. Fix the recovery path first.",
        },
        {
          icon: Clock3,
          title: "Respect the difference between quick jobs and longer engagements",
          body: "A same-day repair, a weekly cleaning, and a multi-week project do not feel complete at the same moment. Timing should match the service type, not the calendar.",
        },
        {
          icon: Users,
          title: "Keep the field-to-office signal clean",
          body: "If the office does not know which jobs finished cleanly, which customers seemed satisfied, or which issues were flagged, the review workflow stays blind. The handoff is part of the build.",
        },
        {
          icon: BarChart3,
          title: "Measure review quality, not just review volume",
          body: "The KPI is not only how many review asks were sent. It is whether completed jobs produce more positive reviews, fewer unhappy customers get pushed toward public channels prematurely, and the team spends less time manually chasing follow-through.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical review-request workflow usually works",
      subtitle:
        "The clean version is simple: finish the job, wait until the experience has landed, route live replies fast, and ask for the review when the signal says it is safe.",
      blocks: [
        {
          heading: "A completed job starts the closeout stage",
          body: "The strongest trigger is a real completion moment from the field or office side — not a vague guess. Once that signal is reliable, the review workflow has something trustworthy to act on.",
        },
        {
          heading: "The first touch checks whether the job feels settled",
          body: "For some service types, a soft check-in makes more sense before the public review ask. That gives the customer a chance to raise a concern and gives the team a safer read on whether the experience is ready.",
        },
        {
          heading: "Good replies move toward the review ask; uncertain replies come back inside",
          body: "A strong workflow does not pretend every customer belongs on the same path. If the customer sounds satisfied, the ask moves forward with a direct review link. If there is hesitation, confusion, or a complaint, the team inherits the conversation fast.",
        },
        {
          heading: "The team gets the context needed to recover or expand the opportunity",
          body: "When someone replies, the handoff should include what service was performed, when it happened, and why the follow-up fired. That makes it easier to resolve the concern, ask for the review later, or notice a referral or second-job opportunity.",
        },
        {
          heading: "Owners can see where post-job reputation follow-through breaks",
          body: "Over time the workflow shows which job types generate the cleanest review asks, which service lines create more complaints or silence, and where the bigger problem is timing, quality, or weak internal follow-up discipline.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no single horizontal review-automation case study on the site. The honest support comes from the many live vertical review-request pages that all use the same operational logic, and from published case studies that prove stage visibility and timely human handoff matter after key milestones.",
      studies: [
        {
          industry: "Vertical review-request pages",
          headline: "15 live vertical review-request pages already prove the workflow pattern across industries",
          body: "HVAC, restaurants, dental, plumbing, electrical, insurance, chiropractic, med spa, cleaning, auto repair, landscaping, painting, pest control, home inspectors, and e-commerce brands each have a dedicated review-request page. This horizontal page consolidates the shared workflow logic instead of repeating it per industry.",
          link: "/review-request-automation-for-restaurants",
        },
        {
          industry: "Operational proof",
          headline: "The e-commerce CRM case study proves the system logic this page depends on: stage visibility, timely follow-up, and human handoff when a contact re-engages",
          body: "That case study is not review-specific, but it is direct proof that recoverable value gets lost when ownership after a milestone is weak. Review-request automation depends on the same discipline: detect the moment, follow up appropriately, and hand off fast when the reply needs a human.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Adjacent workflow proof",
          headline: "The Paris Cafe case study shows what faster post-event follow-through changes for a service business",
          body: "Different context, same operational truth: the window between a completed service moment and the right next step is where trust either builds or leaks. Review-request automation targets that same window after the job is done.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "Review automation for restaurants", href: "/review-request-automation-for-restaurants" },
        { label: "Review automation for HVAC companies", href: "/review-request-automation-for-hvac-companies" },
        { label: "Review automation for dental practices", href: "/review-request-automation-for-dental-practices" },
        { label: "Review automation for cleaning companies", href: "/review-request-automation-for-cleaning-companies" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the vertical review-request pages on the site?",
      answer:
        "The vertical pages (HVAC, dental, plumbing, cleaning, etc.) address review-request automation within a specific industry. This page covers the shared workflow logic that applies across service businesses: completed-job triggers, timing, unhappy-reply routing, and field-to-office handoff. If you already know your industry, start with the vertical page. If you want the general workflow pattern, start here.",
    },
    {
      question: "Why not just ask for a review immediately after every completed job?",
      answer:
        "Because different service types land differently. A quick repair may feel settled the same day. A larger project or recurring service may need time before the customer knows the experience is truly complete. Good automation adapts the timing to the service instead of forcing the same ask onto every job.",
    },
    {
      question: "What does a focused review-request workflow usually cost?",
      answer:
        "A focused post-job review workflow usually lands around $1.5K-$3K depending on how cleanly job completion can be detected, whether the build needs a soft check-in before the review ask, and how much complaint-routing or CRM integration is required. Broader workflows that also include lead response, scheduling, or phone coverage cost more.",
    },
    {
      question: "Can this work with my current software stack?",
      answer:
        "Usually yes, as long as there is a stable way to detect that a job is truly complete and enough context can pass into the follow-up. API access helps, but practical workflows can also run from webhooks, status changes, exports, or other reliable handoff points between completion and office follow-through.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "Cleaner local-trust follow-through after completed jobs: more consistent review asks, fewer unhappy customers getting pushed toward public reviews before their issue is resolved, better visibility into which service types create reputation wins, and less office time spent manually remembering who should get the next message.",
    },
  ],
  faqSubtitle:
    "Practical answers for service businesses considering a cleaner post-job reputation workflow",
  ctaHeading: "Need cleaner reputation follow-up after the work is done?",
  ctaText:
    "Book a 30-minute call. We will look at how completed jobs get handed off today, where review asks are being missed or mistimed, and whether a focused post-job workflow, an earlier lead or scheduling fix, or no new build is the smarter next move.",
  ctaSubtext:
    "No obligation. No generic reputation-management pitch. Just a practical conversation about where post-service follow-through is leaking trust or reviews.",
  relatedLinks: [
    { label: "Review automation for restaurants", href: "/review-request-automation-for-restaurants" },
    { label: "Review automation for HVAC companies", href: "/review-request-automation-for-hvac-companies" },
    { label: "Review automation for dental practices", href: "/review-request-automation-for-dental-practices" },
    { label: "Review automation for cleaning companies", href: "/review-request-automation-for-cleaning-companies" },
    { label: "Referral request automation", href: "/referral-request-automation-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
