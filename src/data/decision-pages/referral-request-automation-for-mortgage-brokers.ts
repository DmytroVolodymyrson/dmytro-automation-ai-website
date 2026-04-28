import {
  Handshake,
  Landmark,
  MessageSquare,
  ClipboardCheck,
  ArrowRightLeft,
  Clock3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "referral-request-automation-for-mortgage-brokers",
  metaTitle:
    "Referral Request Automation for Mortgage Brokers — Turn Funded Loans into More Warm Introductions | Dmytro AI",
  metaDescription:
    "Referral request automation for mortgage brokers. Ask at the right post-closing moment, keep referral asks separate from review asks, route warm introductions back to the broker fast, and turn funded loans into cleaner word-of-mouth follow-through.",
  badgeText: "Mortgage Workflow",
  badgeIcon: Handshake,
  h1: "Referral Request Automation for Mortgage Brokers",
  heroIntro:
    "A lot of mortgage brokers say referrals are their best business, then handle referral follow-up with no real system at all. The loan funds. The borrower is relieved. The broker solved a stressful process well. Maybe the client already mentions a friend buying soon, a coworker shopping rates, or a family member who still needs financing. Then nothing happens. Or the referral ask gets mixed into a generic thank-you or review request and loses all specificity. Or the team waits too long, the goodwill cools off, and the warm introduction never becomes a real conversation. Referral request automation for mortgage brokers fixes that narrower post-closing advocacy workflow. It gives the brokerage a believable moment to ask, keeps referral asks separate from review asks, routes warm introductions back to a broker fast, and turns funded loans into cleaner word-of-mouth follow-through instead of hoping happy borrowers remember to send business later.",
  heroSubtext:
    "Below: what a practical mortgage referral workflow should actually handle, how it stays distinct from lead follow-up, document collection, and the broader mortgage page, what guardrails matter most, and what proof honestly supports this page without pretending there is already a dedicated mortgage-referral automation case study on the site.",
  sections: [
    {
      type: "cards",
      title: "What mortgage referral-request automation should actually handle",
      subtitle:
        "This page only works if it stays tightly on the advocacy layer after a funded loan or successful closing experience — not on new lead response, not on incomplete applications, and not on broad past-client marketing.",
      items: [
        {
          icon: ClipboardCheck,
          title: "A believable post-closing trigger",
          body: "The workflow should start from a real completion milestone: loan funded, closing confirmed, post-close check-in complete, or another signal that the borrower experience actually feels settled. If the trigger is weak, the referral ask lands too early and feels tone-deaf.",
        },
        {
          icon: MessageSquare,
          title: "A separate referral path from the review path",
          body: "A happy borrower may be open to leaving a review, introducing a friend, or both — but those are not the same ask. Strong automation keeps referral follow-up distinct from testimonial or review follow-up so neither message feels generic.",
        },
        {
          icon: Users,
          title: "Referral language that fits mortgage reality",
          body: "Mortgage referrals often sound like a coworker shopping rates, a sibling buying their first home, a realtor contact asking for a lender recommendation, or a friend who got stuck with another broker. The ask should make that kind of introduction easy without sounding like a campaign.",
        },
        {
          icon: ArrowRightLeft,
          title: "Fast routing when somebody names a real opportunity",
          body: "If a funded borrower replies with a name, asks whether you can help someone they know, or mentions another active home-buying conversation, the response should route back to the right broker or loan team member immediately with context attached instead of sitting in a shared inbox.",
        },
        {
          icon: Clock3,
          title: "Timing that matches the closing experience",
          body: "Some borrowers are ready for a referral ask shortly after funding. Others still need a softer post-closing check-in first because paperwork, questions, or move-related stress is still active. Good timing matters more than sending the ask first.",
        },
        {
          icon: TrendingUp,
          title: "Visibility into which funded loans actually generate introductions",
          body: "Broker-owners should be able to see which funded-borrower moments create replies, where referral opportunities are still being lost, and whether the real issue is timing, ownership, or message quality. That turns referrals into an operating system instead of guesswork.",
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
            "Explains the full mortgage automation picture instead of isolating the narrower advocacy step after a funded loan already feels complete",
          ],
        },
        {
          label: "What to automate first for mortgage brokers",
          values: [
            "Brokerages still deciding which single workflow deserves the first project",
            "Helps choose the first bounded build before a broader rollout, while this page assumes the brokerage specifically wants the post-closing referral layer",
          ],
        },
        {
          label: "AI lead follow-up / incomplete-application follow-up",
          values: [
            "Brokerages whose bigger leak still happens before the loan is active or before the borrower becomes a clean file",
            "Focuses on early-funnel speed, nurture, and recovery before the closing ever happens, not on asking happy funded borrowers for introductions afterward",
          ],
        },
        {
          label: "Document collection / appointment scheduling",
          values: [
            "Brokerages trying to move live borrowers through active-file admin or booked consultations more cleanly",
            "Focuses on active-pipeline execution rather than the narrower advocacy ask once the deal is already done",
          ],
        },
        {
          label: "Referral request automation",
          values: [
            "Brokerages that already create happy closings but still rely on luck for warm introductions from satisfied borrowers, realtors, and household contacts",
            "Focuses tightly on post-closing referral timing, separate advocacy asks, and fast handoff when a funded borrower names a real person who needs mortgage help",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your mortgage brokerage?",
      subtitle:
        "Best fit when the brokerage already closes enough funded loans that cleaner word-of-mouth follow-through would materially affect growth.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your borrowers are often happy at closing, but referral follow-up mostly depends on memory or random personal texting",
            "Referrals already matter in your business, yet nobody owns a consistent post-closing ask",
            "You can route a warm introduction quickly once a borrower names a real person or active purchase conversation",
            "You want a narrower advocacy workflow before forcing a much broader past-client or CRM nurture rebuild",
            "One or two additional warm introductions per month would likely justify the build because referred loans convert differently than cold rate-shopper leads",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger leak is still slow lead response, missed calls, or incomplete applications before a file gets to closing",
            "Post-closing borrower experience is inconsistent enough that more advocacy asks would amplify the wrong problem",
            "The brokerage closes too little volume for referral discipline to matter yet",
            "Nobody can respond quickly when a borrower actually introduces a friend, family member, or realtor contact",
            "You really need broader past-client nurture or database reactivation and are calling it referral automation",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep mortgage referral automation useful instead of awkward",
      subtitle:
        "The goal is cleaner advocacy follow-through after a successful closing — not more generic marketing noise once the loan is done.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not stack the review ask and referral ask into one pushy message",
          body: "A borrower does not need a review request, a referral request, and another nurture touch all at once. Stronger workflows separate those moments so the next ask still feels believable.",
        },
        {
          icon: ShieldCheck,
          title: "Protect post-close recovery before asking for introductions",
          body: "If the borrower still has a document question, funding confusion, closing issue, or unresolved frustration, the workflow should route that back inside first. Referral automation only helps when the experience actually feels settled.",
        },
        {
          icon: Landmark,
          title: "Keep the ask grounded in real mortgage context",
          body: "Generic 'send me referrals' language underperforms. A cleaner ask reflects real mortgage situations: a friend shopping lenders, a family member planning to buy, a refinance conversation, or a realtor contact who needs a reliable broker recommendation.",
        },
        {
          icon: Handshake,
          title: "Measure introductions and funded conversations, not just message volume",
          body: "The KPI is not how many referral asks went out. It is how many useful introductions came back, how quickly a broker followed up, and whether the workflow created more real conversations from satisfied funded borrowers.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical mortgage referral workflow usually works",
      subtitle:
        "The clean version is simple: close the loan well, confirm the borrower experience feels settled, make a believable advocacy ask, and route any real opportunity back to a human fast.",
      blocks: [
        {
          heading: "A funded or closed loan starts the advocacy stage",
          body: "The strongest trigger is a real mortgage milestone, not a vague guess that the deal is probably done. Once the brokerage or CRM confirms funding or closing, the referral workflow finally has something trustworthy to act on.",
        },
        {
          heading: "The first follow-up checks whether the borrower is actually in a good position to advocate",
          body: "Some borrowers are ready for a referral ask quickly. Others still need a softer post-close check-in first because the move is not settled, questions are open, or closing stress is still fresh. Service recovery comes before advocacy.",
        },
        {
          heading: "Satisfied borrowers get a simple ask tied to real next steps",
          body: "The strongest asks point somewhere practical: a coworker needing pre-approval, a sibling buying their first home, a realtor needing a lender recommendation, or a friend comparing loan options. The message should make it easy to reply with a name, context, or direct introduction.",
        },
        {
          heading: "Warm replies move back to the broker or loan team fast with context attached",
          body: "If the borrower names someone, asks whether you can help a contact, or mentions another active buying conversation, the workflow should route that response with closing context so human follow-up is fast and credible while trust is still warm.",
        },
        {
          heading: "Over time the brokerage can see where referrals actually happen",
          body: "You start to learn which funded-loan moments create advocacy, which asks get ignored, and where the bigger issue is still timing, message quality, or inconsistent post-closing ownership. That turns referrals into a workflow problem you can actually improve.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published mortgage-specific referral-automation case study on the site yet. The honest support comes from the live mortgage cluster that already proves the brokerage workflow can be split into narrower child pages, the adjacent referral pages for other trust-driven industries, and the published CRM case study that shows why milestone-based routing plus fast human handoff matter after a relationship changes state.",
      studies: [
        {
          industry: "Mortgage cluster",
          headline: "The live mortgage parent and child pages already prove the brokerage workflow can be broken into narrower operational stages",
          body: "The broader mortgage page plus lead-follow-up, scheduling, document-collection, and incomplete-application pages already isolate real workflow layers. This child page narrows the post-closing advocacy step instead of re-explaining the whole stack.",
          link: "/ai-automation-for-mortgage-brokers",
        },
        {
          industry: "Adjacent referral-layer proof",
          headline: "The real-estate and insurance referral pages show the trust-layer pattern this mortgage child page is following",
          body: "Those pages prove the site already supports a distinct post-success referral workflow in relationship-driven industries. This mortgage page applies the same logic to funded-borrower advocacy without pretending there is already a mortgage-specific referral case study.",
          link: "/referral-request-automation-for-real-estate-agents",
        },
        {
          industry: "Published operational proof",
          headline: "The e-commerce CRM case study proves the system logic this page depends on: stage visibility, timely routing, and human follow-up after a meaningful milestone changes",
          body: "That case study is not about mortgage referrals, but it does prove the operating principle that recoverable value gets lost when nobody owns the next step after a milestone. This page applies that same logic to post-closing borrower advocacy follow-through.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
        { label: "What to automate first for mortgage brokers", href: "/what-to-automate-first-for-mortgage-brokers" },
        { label: "Referral request automation for real estate agents", href: "/referral-request-automation-for-real-estate-agents" },
        { label: "Referral request automation for insurance agencies", href: "/referral-request-automation-for-insurance-agencies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from lead follow-up or incomplete-application follow-up for mortgage brokers?",
      answer:
        "Lead follow-up and incomplete-application follow-up happen before a clean funded loan exists. They focus on first response, nurture, and recovering stalled borrowers earlier in the pipeline. Referral-request automation is narrower and later. It focuses on asking satisfied funded borrowers for warm introductions once the transaction already feels complete.",
    },
    {
      question: "When should a mortgage broker ask for referrals?",
      answer:
        "Usually after the loan has funded or the closing is complete and the borrower experience genuinely feels settled. Some closings support a referral ask fairly quickly. Others need a softer post-close check-in first. Good timing matters more than blanket coverage.",
    },
    {
      question: "Should referral asks happen right after every funded loan automatically?",
      answer:
        "Usually no. The strongest systems tie the ask to a believable positive milestone, not every transaction. Some files deserve a referral prompt. Others still need service recovery or a lighter satisfaction check first. The workflow should be selective.",
    },
    {
      question: "What does a focused mortgage referral workflow usually cost?",
      answer:
        "A narrow referral workflow is usually smaller than a full mortgage follow-up stack. In practice it often lands in the same general range as other bounded single-workflow projects on the site, but the real price depends on how clean the post-closing trigger, ownership rules, channel setup, and handoff path already are.",
    },
    {
      question: "Where does the ROI usually come from?",
      answer:
        "Usually from more referred borrower conversations, faster follow-up on those introductions, and less reliance on luck after a successful closing is already complete. For brokerages where referrals already matter, even a small lift in warm funded-loan introductions can justify the build quickly.",
    },
  ],
  faqSubtitle:
    "Practical answers for mortgage brokerages considering a cleaner referral workflow after a funded loan or closing",
  ctaHeading: "Want more funded borrowers to turn into real introductions?",
  ctaText:
    "Book a 30-minute call. We will look at how your brokerage handles post-closing follow-up today, where warm referral opportunities are being lost, and whether a focused referral workflow, an earlier pipeline fix, or a broader past-client system is the smarter next build.",
  ctaSubtext:
    "No obligation. No generic mortgage-tech pitch. Just a practical conversation about where post-closing advocacy is leaking value.",
  relatedLinks: [
    { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
    { label: "What to automate first for mortgage brokers", href: "/what-to-automate-first-for-mortgage-brokers" },
    { label: "Document collection automation for mortgage brokers", href: "/document-collection-automation-for-mortgage-brokers" },
    { label: "Incomplete application follow-up for mortgage brokers", href: "/incomplete-application-follow-up-for-mortgage-brokers" },
    { label: "Appointment scheduling and reminder automation for mortgage brokers", href: "/appointment-scheduling-and-reminder-automation-for-mortgage-brokers" },
    { label: "Review request automation for mortgage brokers", href: "/review-request-automation-for-mortgage-brokers" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
