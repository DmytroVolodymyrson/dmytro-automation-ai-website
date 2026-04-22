import {
  Shield,
  Users,
  Filter,
  CalendarClock,
  Mail,
  Phone,
  BarChart3,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  ArrowUpRight,
  Layers3,
  MessageSquare,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "cross-sell-automation-for-insurance-agencies",
  metaTitle:
    "Cross-Sell Automation for Insurance Agencies — Grow Revenue Per Account | Dmytro AI",
  metaDescription:
    "How insurance agencies automate cross-sell campaigns without spamming the book. Coverage-gap segmentation, timing rules, producer handoff, and what a focused build usually costs.",
  badgeText: "Insurance Workflow",
  badgeIcon: Shield,
  h1: "Cross-Sell Automation for Insurance Agencies",
  heroIntro:
    "Most insurance agencies already have hidden revenue sitting inside the current book. A client has auto but not home. Home but not umbrella. Commercial coverage but no complementary policy the agency could realistically place. The problem is rarely knowing cross-sell exists. The problem is having no disciplined workflow to segment the book, choose the right timing, send relevant outreach, and route real buying signals to a producer before the opportunity disappears into day-to-day service work. Cross-sell automation fixes that narrow revenue workflow.",
  heroSubtext:
    "Below: what insurance cross-sell automation actually handles, how it differs from the broader insurance page and the renewal or quote-stage child pages, what guardrails matter, and what adjacent proof honestly supports this page.",
  sections: [
    {
      type: "cards",
      title: "What insurance cross-sell automation actually handles",
      subtitle:
        "This page is specifically about expanding revenue inside the existing book, not generic insurance automation.",
      items: [
        {
          icon: Filter,
          title: "Book segmentation by coverage gap",
          body: "The workflow identifies clients who likely fit a specific cross-sell motion: auto without home, home without umbrella, landlord coverage without additional property protection, or business coverage missing a nearby add-on your agency already sells.",
        },
        {
          icon: CalendarClock,
          title: "Timing around natural trigger moments",
          body: "Cross-sell works better when it shows up at believable moments: after a policy is bound, around a renewal review, after a life or business change signal, or when a producer already has a recent positive interaction with the client.",
        },
        {
          icon: Mail,
          title: "Email and SMS campaigns with one relevant offer",
          body: "Instead of blasting the whole book with generic upsell language, the system sends narrower outreach tied to one obvious coverage gap and one clear next step: reply, request a review call, or ask for a quick quote.",
        },
        {
          icon: Users,
          title: "Producer handoff when intent appears",
          body: "If a client clicks, replies, or asks for options, the automation routes the opportunity to the right producer with context attached: current policies, segment, prior outreach, and why the cross-sell motion makes sense.",
        },
        {
          icon: Layers3,
          title: "Suppression and sequencing rules",
          body: "Good systems avoid messaging clients who already declined recently, have an open service issue, or are already in another active campaign. Cross-sell automation should improve relevance, not create inbox fatigue.",
        },
        {
          icon: BarChart3,
          title: "Visibility into what actually converts",
          body: "You can see which segments respond, which cross-sell offers get traction, where producers convert opportunities, and which campaigns create noise without enough revenue upside.",
        },
      ],
    },
    {
      type: "table",
      title: "Cross-sell automation vs. broader insurance automation vs. quote and renewal workflows",
      subtitle:
        "These pages can coexist when the workflow stage and economic job are clearly different:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for insurance agencies",
          values: [
            "Agency owners evaluating the full automation opportunity across the book",
            "Covers the broader operating picture: lead response, quote follow-up, renewals, cross-sell, reviews, and after-hours communication",
          ],
        },
        {
          label: "Quote follow-up automation",
          values: [
            "New-business opportunities that already received a quote but have not yet bound",
            "Converts prospects before the policy is written",
          ],
        },
        {
          label: "Renewal reminder automation",
          values: [
            "Existing-policy retention before expiration",
            "Protects renewal discipline with earlier reminders and escalation rules",
          ],
        },
        {
          label: "Cross-sell automation",
          values: [
            "Existing clients with believable adjacent coverage opportunities",
            "Grows revenue per account through segmentation, timing, relevant outreach, and producer handoff",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your agency?",
      subtitle:
        "Best for agencies with enough book depth that cross-sell is real, but not enough operator bandwidth to run it consistently by hand.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You already know there are coverage gaps in the book but follow-up is inconsistent",
            "Your agency sells multiple lines and has meaningful overlap between client needs",
            "Producers want cross-sell opportunities surfaced with context instead of building lists manually",
            "You have enough data in the AMS or CRM to segment clients by current policies, account type, or lifecycle stage",
            "You want campaigns that feel targeted rather than generic blasts to the whole book",
            "You care about revenue per account, not just new quote volume",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your agency only sells one narrow product line with little cross-sell opportunity",
            "Your client data is too messy to identify believable coverage gaps or account ownership",
            "You want fully autonomous selling with no producer involvement",
            "Your immediate problem is still slow lead response or weak renewal discipline, not book expansion",
            "You are planning to send the same pitch to every client regardless of context",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for insurance cross-sell workflows",
      subtitle:
        "This should create relevant revenue opportunities, not spam the book or trigger compliance headaches.",
      items: [
        {
          icon: ShieldCheck,
          title: "Use approved messaging and narrow claims",
          body: "Cross-sell campaigns should stay inside approved agency language, disclosure expectations, and opt-in rules. The automation can surface relevance and timing, but it should not improvise regulated insurance advice.",
        },
        {
          icon: Filter,
          title: "Segment before you send anything",
          body: "The biggest mistake is treating cross-sell like a mass email blast. Better systems segment by current coverage, account value, household or business profile, prior interactions, and reasonable product adjacency.",
        },
        {
          icon: MessageSquare,
          title: "Give one believable next step",
          body: "Good outreach does not dump three offers into one message. It gives the client one obvious reason to respond now: review a gap, request a quote, or book a short conversation with the producer.",
        },
        {
          icon: ArrowUpRight,
          title: "Escalate real interest quickly",
          body: "If the client replies, clicks, or asks for options, the workflow should route that signal to the right producer fast. The system's job is to surface the opportunity while it is warm, not to replace the advisor relationship.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical insurance cross-sell system usually works",
      subtitle:
        "The strongest version feels disciplined, not clever.",
      blocks: [
        {
          heading: "Start with the current book, not a generic marketing list",
          body: "The workflow begins with current-policy data in your AMS or CRM. That lets the agency find clients who already trust you and have a believable adjacent coverage need instead of chasing cold acquisition for the same revenue.",
        },
        {
          heading: "Build a small number of clear segments first",
          body: "Most agencies do not need twenty campaigns. They need a few sensible ones: personal-lines bundle opportunities, umbrella fit, commercial add-ons, or another nearby policy the producer already knows how to sell well.",
        },
        {
          heading: "Trigger outreach when the timing makes sense",
          body: "Cross-sell campaigns perform better around real account moments such as policy bind, annual review, renewal preparation, or a recent successful service interaction. Timing matters because relevance matters.",
        },
        {
          heading: "Route intent to a producer with context attached",
          body: "When a client shows interest, the producer should see the current policies, why the account was selected, what message they saw, and what they clicked or replied to. That keeps the human conversation short, informed, and commercially useful.",
        },
        {
          heading: "Use campaign data to tighten the offer mix",
          body: "Over time the agency can see which segments and offers create real conversations, which ones just add noise, and where cross-sell should stay automated versus where it deserves more producer attention.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no published insurance-specific cross-sell case study yet. The honest proof frame is the already-live insurance cluster plus adjacent CRM lifecycle automation.",
      studies: [
        {
          industry: "Insurance parent page",
          headline: "The broader insurance guide already frames cross-sell as a core revenue workflow",
          body: "The parent insurance page explicitly includes cross-sell and upsell campaigns as a practical automation win. This child page narrows that broader idea to the book-segmentation, timing, and producer-handoff workflow needed to make cross-sell repeatable.",
          link: "/ai-automation-for-insurance-agencies",
        },
        {
          industry: "CRM lifecycle automation",
          headline: "Published CRM automation proof shows the segmentation and follow-up discipline this workflow depends on",
          body: "The e-commerce CRM case study demonstrates structured records, campaign timing, and automated follow-up across a large contact base. Insurance cross-sell messaging is different, but the operational pattern is similar: segment well, trigger the right outreach, and surface high-intent responses for humans.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for insurance agencies", href: "/ai-automation-for-insurance-agencies" },
        { label: "Renewal reminder automation for insurance agencies", href: "/renewal-reminder-automation-for-insurance-agencies" },
        { label: "Quote follow-up automation for insurance agencies", href: "/quote-follow-up-automation-for-insurance-agencies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the main insurance automation page?",
      answer:
        "The main insurance page is broader and covers the full operating picture. This page is narrower: it focuses specifically on expanding revenue inside the existing book through cross-sell segmentation, campaign timing, and producer handoff.",
    },
    {
      question: "How is this different from quote follow-up or renewal automation?",
      answer:
        "Quote follow-up is for new-business prospects before the policy is written. Renewal automation is for retention before expiration. Cross-sell automation is for existing clients who already trust the agency but have a believable adjacent coverage opportunity.",
    },
    {
      question: "What does a focused cross-sell automation build usually cost?",
      answer:
        "A focused insurance cross-sell workflow usually lands around $2K-$4K depending on data quality, segmentation depth, channel mix, AMS or CRM integration, and producer handoff rules. Broader insurance systems cost more when they also include lead response, renewals, or quote nurture.",
    },
    {
      question: "Can this work with my current agency management system?",
      answer:
        "Usually yes, as long as the system exposes enough client, policy, and ownership data to build sensible segments. API access is ideal, but practical builds can also work through exports, tags, synced CRM records, or other stable integration methods.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is revenue from the existing book without needing more lead volume. The secondary win is producer efficiency because good opportunities are surfaced with context instead of forcing the team to build and chase cross-sell lists manually.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating insurance cross-sell campaigns",
  ctaHeading: "Want more revenue from the book you already have?",
  ctaText:
    "Book a 30-minute call. We will look at how your agency segments the current book, where cross-sell opportunities are being missed, and whether a focused cross-sell workflow is the highest-leverage automation to build next.",
  ctaSubtext:
    "No fake insurance-sales claims. Just a practical recommendation based on your current systems, product mix, and producer workflow.",
  relatedLinks: [
    { label: "AI automation for insurance agencies", href: "/ai-automation-for-insurance-agencies" },
    { label: "Quote follow-up automation for insurance agencies", href: "/quote-follow-up-automation-for-insurance-agencies" },
    { label: "Renewal reminder automation for insurance agencies", href: "/renewal-reminder-automation-for-insurance-agencies" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
