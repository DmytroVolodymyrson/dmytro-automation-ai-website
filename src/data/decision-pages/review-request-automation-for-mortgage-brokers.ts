import {
  Star,
  Landmark,
  MessageSquare,
  ClipboardCheck,
  ArrowRightLeft,
  Clock3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ShieldCheck,
  BarChart3,
  Users,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "review-request-automation-for-mortgage-brokers",
  metaTitle:
    "Review Request Automation for Mortgage Brokers — Better Post-Closing Reputation Follow-Up | Dmytro AI",
  metaDescription:
    "Review request automation for mortgage brokers. Ask at the right time after a funded loan, route unhappy replies before a public review ask, keep review asks separate from referral asks, and turn completed closings into cleaner Google and local-trust follow-up.",
  badgeText: "Mortgage Workflow",
  badgeIcon: Star,
  h1: "Review Request Automation for Mortgage Brokers",
  heroIntro:
    "A lot of mortgage brokers lose easy trust after the loan is already funded. The borrower seemed happy, the closing went smoothly, and then nothing happened. Or a review request went out the same week the borrower was still dealing with move-in stress, escrow questions, and first-payment confusion. Or every funded loan got the same generic message even when a billing question, closing-cost concern, or post-funding frustration should have come back to the broker first. Or the review ask got stacked on top of a referral request so the borrower ignored both. Review request automation for mortgage brokers fixes that narrower post-closing workflow. It gives funded loans a cleaner closeout path, helps the brokerage ask for reviews when the borrower experience has actually settled, and protects reputation by routing uncertain replies back inside before anybody pushes for a public rating on Google or wherever else matters for local mortgage trust.",
  heroSubtext:
    "Below: what a practical mortgage review-request workflow should actually handle, how it stays distinct from the referral-request page and the broader mortgage parent page, what guardrails matter most, and what proof honestly supports this page without pretending there is already a dedicated mortgage review-automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What mortgage review-request automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the reputation closeout stage after a funded loan — not on lead follow-up, document collection, or the separate referral-request workflow.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A real funded-loan or closing trigger",
          body: "The workflow should start from a believable completion signal: loan funded, closing confirmed, post-close check-in complete, or deal status updated in the CRM or LOS. If the trigger is sloppy, review requests go out before the borrower experience is actually settled.",
        },
        {
          icon: Clock3,
          title: "Timing that matches the closing experience",
          body: "A smooth refinance, a complicated first-time purchase with multiple contingencies, and a jumbo loan with extended underwriting do not all feel complete on the same timeline. Strong review timing respects the closing experience instead of blasting the same ask three days after every funding.",
        },
        {
          icon: MessageSquare,
          title: "Different paths for happy borrowers and unhappy replies",
          body: "If the borrower replies with a post-closing concern, a first-payment question, an escrow confusion, or frustration about something that happened during the process, the workflow should route that back to the broker or team fast instead of pushing harder for a Google review. Reputation automation only helps when service recovery comes first.",
        },
        {
          icon: ArrowRightLeft,
          title: "A separate review path from the referral path",
          body: "A happy funded borrower may be open to leaving a review, introducing a friend, or both — but those are not the same ask. Stronger automation keeps the review follow-up distinct from the referral follow-up so neither message feels generic or stacked.",
        },
        {
          icon: Users,
          title: "Cleaner broker-to-team handoff after the closing",
          body: "The team should know which loans closed cleanly, which borrowers sounded satisfied, and whether any unresolved issue was flagged before closeout. That handoff matters more than fancy review-request wording.",
        },
        {
          icon: BarChart3,
          title: "Visibility into which funded loans create the best review opportunities",
          body: "Broker-owners should be able to see which loan types produce reviews, where review asks are being ignored, and where unresolved issues keep blocking the ask. That turns reputation follow-up into a business signal instead of another forgotten post-closing admin task.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the mortgage cluster",
      subtitle:
        "These pages can coexist when each one owns a different stage or buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for mortgage brokers",
          values: [
            "Brokerage owners evaluating the broader operating layer across lead response, consultation booking, document collection, incomplete-application recovery, and post-close follow-through",
            "Explains the full mortgage automation picture instead of isolating the narrower reputation-closeout step after a funded loan already feels complete",
          ],
        },
        {
          label: "Referral request automation for mortgage brokers",
          values: [
            "Brokerages that already create happy closings but rely on luck for warm introductions from satisfied borrowers, realtors, and household contacts",
            "Focuses on post-closing advocacy and warm-introduction routing, not on the narrower review-capture step that protects Google presence and local trust",
          ],
        },
        {
          label: "What to automate first for mortgage brokers",
          values: [
            "Brokerages still deciding which single workflow deserves the first project",
            "Helps choose the first bounded build before a broader rollout, while this page assumes the brokerage specifically wants the post-closing reputation layer",
          ],
        },
        {
          label: "AI lead follow-up / incomplete-application follow-up",
          values: [
            "Brokerages whose bigger leak still happens before the loan is active or before the borrower becomes a clean file",
            "Focuses on early-funnel speed, nurture, and recovery before the closing ever happens, not on asking happy funded borrowers for reviews afterward",
          ],
        },
        {
          label: "Review request automation for mortgage brokers",
          values: [
            "Brokerages that already fund enough loans but ask for reviews inconsistently, too early, or with no complaint-routing guardrail",
            "Focuses narrowly on post-closing review timing, unhappy-reply routing, review-vs-referral separation, and turning funded loans into healthier local-trust signals on Google and mortgage-specific platforms",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your mortgage brokerage?",
      subtitle:
        "Best fit when the brokerage already funds enough loans that review discipline matters, but post-closing reputation follow-through still depends on memory and scattered manual effort.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your borrowers are usually happy at closing, but review follow-up mostly depends on the broker remembering to send something weeks later",
            "Review asks happen irregularly, too early, or get stacked on top of referral requests so neither message lands well",
            "You fund enough loans that review consistency materially affects your Google presence and local trust",
            "You want unhappy replies routed back to the broker or team before anybody gets pushed toward a public review",
            "A handful of additional 5-star reviews each month on Google would likely justify the build because online reputation matters for rate-shopper trust in your market",
            "You want a narrow post-closing workflow before forcing a bigger CRM or past-client rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still slow lead response, missed calls, or incomplete applications before a file gets to closing",
            "Post-closing borrower experience is inconsistent enough that more review asks would amplify the wrong problem",
            "The brokerage closes too few loans per quarter for review discipline to matter yet",
            "Nobody can respond quickly when a borrower replies with a post-closing concern instead of a clean review",
            "You already run a consistent review process with very little manual drift",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep mortgage review-request automation useful instead of awkward",
      subtitle:
        "The goal is cleaner reputation follow-up and safer service recovery — not just more outbound messages after every funded loan.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not stack the review ask and referral ask into one pushy message",
          body: "A funded borrower does not need a review request, a referral request, and another nurture touch all at once. Stronger workflows separate those moments so each ask still feels believable instead of transactional.",
        },
        {
          icon: ShieldCheck,
          title: "Protect post-close recovery before asking for reviews",
          body: "If the borrower still has a first-payment question, escrow confusion, closing-cost concern, or unresolved frustration from the process, the workflow should route that back inside first. Review automation only helps when the experience actually feels settled.",
        },
        {
          icon: Landmark,
          title: "Respect the difference between loan types",
          body: "The right review timing for a smooth refinance is not always the same as a complicated first-time purchase, a jumbo loan with extended underwriting, or a VA loan with extra documentation steps. Strong automation adapts to the closing experience and loan complexity.",
        },
        {
          icon: BarChart3,
          title: "Measure review quality and platform relevance, not just volume",
          body: "The KPI is not only how many review asks were sent. It is whether funded loans produce more positive reviews on the platforms that matter — Google Business Profile, Zillow, LendingTree, or your brokerage profile — and fewer unhappy borrowers get pushed toward public channels too early.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical mortgage review-request workflow usually works",
      subtitle:
        "The clean version is simple: fund the loan, wait until the borrower experience has actually settled, route live replies fast, and ask for the review when the signal says it is safe.",
      blocks: [
        {
          heading: "A funded or closed loan starts the reputation closeout stage",
          body: "The strongest trigger is a real completion event from the LOS, CRM, or brokerage side, not a vague guess that the deal is probably done. Once that signal is reliable, the review workflow finally has something trustworthy to act on.",
        },
        {
          heading: "The first touch checks whether the closing experience feels settled",
          body: "For some funded loans, a soft post-close check-in makes more sense before the review ask. That gives the borrower a chance to raise a first-payment question, ask about escrow, or flag a lingering concern — and gives the broker a safer read on whether the experience is ready for a public review request.",
        },
        {
          heading: "Good replies move toward the review ask; uncertain replies come back inside",
          body: "A strong workflow does not pretend every borrower belongs on the same path. If the borrower clearly sounds satisfied, the ask can move forward with a direct review link for Google or wherever matters most. If there is hesitation, confusion, or a post-closing issue, the broker should inherit the conversation fast.",
        },
        {
          heading: "The broker gets the context needed to recover the moment or expand the relationship",
          body: "When someone replies, the handoff should include what loan type closed, when it funded, and why the follow-up fired. That makes it easier to resolve a concern, ask for the review later, or notice a referral opportunity.",
        },
        {
          heading: "Over time the brokerage can see where post-closing reputation follow-through breaks",
          body: "You start to learn which loan types generate the cleanest review asks, which closings create more complaints or silence, and where the bigger issue is still timing, message quality, or weak internal follow-up discipline.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published mortgage-specific review-automation case study on the site yet. The honest support comes from the live mortgage cluster that already proves the brokerage workflow can be split into narrower child pages, the adjacent review-request pages for other industries, and the published CRM case study that shows why milestone-based routing plus fast human handoff matter after a relationship changes state.",
      studies: [
        {
          industry: "Mortgage cluster",
          headline: "The live mortgage parent and child pages already prove the brokerage workflow can be broken into narrower operational stages",
          body: "The broader mortgage page plus lead-follow-up, scheduling, document-collection, incomplete-application, and referral-request pages already isolate real workflow layers. This child page narrows the post-closing reputation step instead of re-explaining the whole stack.",
          link: "/ai-automation-for-mortgage-brokers",
        },
        {
          industry: "Adjacent review-layer proof",
          headline: "The real-estate, accounting, and HVAC review-request pages show the post-completion reputation pattern this mortgage child page is following",
          body: "Those pages prove the site already supports a distinct post-success review workflow in relationship-driven and service industries. This mortgage page applies the same logic to funded-borrower reputation without pretending there is already a mortgage-specific review case study.",
          link: "/review-request-automation-for-real-estate-agents",
        },
        {
          industry: "Published operational proof",
          headline: "The e-commerce CRM case study proves the system logic this page depends on: stage visibility, timely routing, and human follow-up after a meaningful milestone changes",
          body: "That case study is not about mortgage reviews, but it does prove the operating principle that recoverable value gets lost when nobody owns the next step after a milestone. This page applies that same logic to post-closing borrower reputation follow-through.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
        { label: "Referral request automation for mortgage brokers", href: "/referral-request-automation-for-mortgage-brokers" },
        { label: "Review request automation for real estate agents", href: "/review-request-automation-for-real-estate-agents" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the referral-request page for mortgage brokers?",
      answer:
        "The referral-request page focuses on post-closing advocacy: getting warm introductions from happy funded borrowers to friends, family, or realtor contacts who need financing. This page is narrower. It focuses on the reputation closeout step: asking for a review at the right time, routing unhappy replies back inside before a public review ask, and turning funded loans into healthier Google and local-trust signals.",
    },
    {
      question: "Why not just ask for a review immediately after every funded loan?",
      answer:
        "Because different closings land differently. A smooth refinance may feel settled quickly. A complicated first-time purchase with inspection issues or closing-cost surprises may need a week before the borrower is ready to leave a thoughtful review. Good automation respects the closing experience instead of forcing the same ask onto every funded loan.",
    },
    {
      question: "Should review requests and referral requests go out together?",
      answer:
        "Usually no. Stacking both asks into one message makes each one feel less personal and more like a campaign. Stronger workflows separate those moments so the review ask lands on its own terms and the referral ask gets its own believable window later.",
    },
    {
      question: "What does a focused mortgage review-request workflow usually cost?",
      answer:
        "A focused post-closing review workflow usually lands around $1.5K-$3K depending on how cleanly loan funding can be detected, whether the build needs a soft check-in before the review ask, how many review platforms matter, and how much complaint-routing or CRM cleanup is required. Broader mortgage systems cost more when they also include lead response, scheduling, document collection, or phone coverage.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main ROI is cleaner local-trust follow-through after funded loans: more consistent review asks, fewer unhappy borrowers getting pushed toward public reviews before an issue is resolved, better visibility into which loan types create reputation wins, and less broker time spent manually remembering who should get the next message.",
    },
  ],
  faqSubtitle:
    "Practical answers for mortgage brokerages considering a cleaner post-closing review workflow",
  ctaHeading: "Need cleaner reputation follow-up after the loan funds?",
  ctaText:
    "Book a 30-minute call. We will look at how funded loans get handed off today, where review asks are being missed or mistimed, and whether a focused post-closing workflow, an earlier pipeline fix, or no new build is the smarter next move.",
  ctaSubtext:
    "No obligation. No generic reputation-management pitch. Just a practical conversation about where the post-closing stage is leaking trust or reviews.",
  relatedLinks: [
    { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
    { label: "Referral request automation for mortgage brokers", href: "/referral-request-automation-for-mortgage-brokers" },
    { label: "What to automate first for mortgage brokers", href: "/what-to-automate-first-for-mortgage-brokers" },
    { label: "Document collection automation for mortgage brokers", href: "/document-collection-automation-for-mortgage-brokers" },
    { label: "Incomplete application follow-up for mortgage brokers", href: "/incomplete-application-follow-up-for-mortgage-brokers" },
    { label: "Review request automation for real estate agents", href: "/review-request-automation-for-real-estate-agents" },
    { label: "Review request automation for service businesses", href: "/review-request-automation-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
