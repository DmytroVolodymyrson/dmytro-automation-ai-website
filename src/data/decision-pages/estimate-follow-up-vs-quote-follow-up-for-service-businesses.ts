import {
  Scale,
  FileText,
  ClipboardCheck,
  MessageSquare,
  Users,
  ArrowRightLeft,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  BadgeDollarSign,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "estimate-follow-up-vs-quote-follow-up-for-service-businesses",
  metaTitle:
    "Estimate Follow-Up vs. Quote Follow-Up for Service Businesses | Dmytro AI",
  metaDescription:
    "Should a service business automate estimate follow-up or broader quote follow-up first? Practical comparison of workflow stage, field-to-office handoff, buyer timing, tools, cost, and where each build actually fits.",
  badgeText: "Workflow Comparison",
  badgeIcon: Scale,
  h1: "Estimate Follow-Up vs. Quote Follow-Up for Service Businesses",
  heroIntro:
    "A lot of service businesses know they are losing deals after pricing goes out, but they still choose the wrong fix. They build a broad quote-follow-up sequence when the real leak starts after on-site estimates, or they obsess over estimate-stage reminders when the bigger problem is a messy quote stage across the whole business. Estimate follow-up and quote follow-up are related, but they are not interchangeable. Estimate follow-up is the narrower field-service layer: the customer had an inspection, site visit, or scoped job, an estimate went out, and now the handoff between the estimator and the office decides whether that opportunity stays alive. Quote follow-up is broader: any service business that sends pricing, proposals, or quotes needs disciplined next-step messaging after the quote is sent, even when there was no site visit at all.",
  heroSubtext:
    "Below: where estimate follow-up fits, where quote follow-up fits, when one should come before the other, what operational signals actually decide it, and what proof on this site honestly supports the comparison.",
  sections: [
    {
      type: "cards",
      title: "What each workflow is actually trying to fix",
      subtitle:
        "These pages overlap, but they solve different operational leaks inside the post-pricing stage:",
      items: [
        {
          icon: ClipboardCheck,
          title: "Estimate follow-up automation",
          body: "Best for field-service and trade businesses where pricing follows a site visit, inspection, or scoped job. It focuses on sent estimates, estimator-to-office handoff, open-estimate visibility, and messaging that references what happened on-site.",
        },
        {
          icon: FileText,
          title: "Quote follow-up automation",
          body: "Best for service businesses that need a broader quote-stage recovery workflow across proposals, emailed pricing, digital quotes, or packaged offers. It focuses on quote ownership, timed reminders, objection-aware follow-up, and getting the right human back into the deal when buying intent returns.",
        },
        {
          icon: MessageSquare,
          title: "The shared core",
          body: "Both workflows automate the stage after pricing goes out. Both need reliable triggers, clean human ownership, and follow-up that reduces decision friction instead of sending hollow check-ins. The difference is whether the business needs the broader quote-stage layer or the narrower field-service estimate layer first.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "Use the workflow that matches the actual pricing stage in your business:",
      headers: ["Estimate Follow-Up", "Quote Follow-Up"],
      rows: [
        {
          label: "Best fit",
          values: [
            "Trades, field service, inspections, site visits, scoped jobs",
            "Broader service businesses with proposals, quotes, or pricing stages across multiple service contexts",
          ],
        },
        {
          label: "Trigger event",
          values: [
            "Estimate sent after a visit or inspection",
            "Quote or proposal sent, even without an on-site visit",
          ],
        },
        {
          label: "Main operational leak",
          values: [
            "Estimator-to-office handoff and stale open estimates after site work",
            "No disciplined ownership once pricing goes out",
          ],
        },
        {
          label: "Messaging context",
          values: [
            "References what happened on-site and the scoped job",
            "References the broader proposal, pricing, or next-step decision",
          ],
        },
        {
          label: "Pipeline visibility",
          values: [
            "Open estimates by age, estimator, and follow-up status",
            "Open quotes by owner, stage, and re-engagement signals",
          ],
        },
        {
          label: "Where it breaks",
          values: [
            "When the estimate-sent stage is not clean or the business problem actually starts earlier at generic quote ownership",
            "When the business really needs the narrower site-visit / estimator handoff workflow rather than another broad quote sequence",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each one should come first",
      subtitle:
        "Choose the smallest workflow that fixes the real revenue leak:",
      options: [
        {
          icon: ClipboardCheck,
          heading: "Start with estimate follow-up when...",
          highlighted: true,
          items: [
            "Most deals only reach pricing after an inspection, site visit, or scoped field appointment",
            "Open estimates go cold because the estimator is already on the next job and the office assumes someone else is following up",
            "You want visibility into stale estimates by estimator, job type, or age",
            "Your messaging needs to reference what happened on-site rather than just the price itself",
            "You already know the quote stage exists, but the field-to-office handoff is the real problem",
          ],
        },
        {
          icon: FileText,
          heading: "Start with quote follow-up when...",
          highlighted: false,
          items: [
            "Your business sends pricing in multiple ways — proposals, service packages, emailed quotes, or digital estimates — and the broader post-pricing workflow is inconsistent",
            "The real problem is that nobody owns follow-up after pricing goes out at all",
            "Not every quote depends on a site visit or field estimator",
            "You need one horizontal quote-stage system before deciding whether a narrower estimate child page matters",
            "You are still trying to clean up the whole quote stage across multiple service contexts",
          ],
        },
        {
          icon: ArrowRightLeft,
          heading: "Use both when...",
          highlighted: false,
          items: [
            "The business needs a broad quote-stage operating layer and also has a large field-service estimate workflow inside it",
            "You want the quote page as the horizontal parent and the estimate page as the narrower field-service child",
            "Different teams own proposal follow-up generally versus estimator-driven quote recovery specifically",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit / bad fit signals",
      subtitle:
        "This comparison is useful when the business already knows pricing-stage follow-up matters but is not sure which layer to automate first:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are losing opportunities after pricing goes out but the exact leak is still unclear",
            "Your team mixes office-owned quotes and field-driven estimates",
            "You want to decide whether the broader parent workflow or the narrower estimate child should come first",
            "You need a practical operator-level explanation, not a generic sales-process article",
            "You already have enough quote volume that one recovered job per month matters",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right comparison",
          variant: "neutral",
          items: [
            "Your real problem is still first response before any pricing exists",
            "You send so few quotes that manual follow-up is already consistent",
            "The pipeline is too messy to reliably tell when pricing was sent",
            "You are deciding between phone-response workflows, not quote-stage workflows",
            "You need trade-specific tactics more than a horizontal service-business comparison",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How businesses choose the wrong one",
      subtitle:
        "Most bad builds happen because the workflow label sounds right but the operational stage is wrong:",
      items: [
        {
          icon: AlertTriangle,
          title: "Calling everything a quote problem",
          body: "If the real leak happens after site visits, broad quote reminders may stay too generic. The workflow needs estimator context, a real estimate-sent trigger, and cleaner field-to-office ownership.",
        },
        {
          icon: Users,
          title: "Forcing estimate logic onto every pricing workflow",
          body: "Not every service business needs the field-service layer. If plenty of quotes never involve a site visit, estimate-specific language can overcomplicate the broader quote-stage build.",
        },
        {
          icon: Clock,
          title: "Ignoring who actually owns the next move",
          body: "Both workflows fail when no human owns re-engagement. Automation can trigger reminders and route replies, but someone still needs to take the live conversation when the buyer comes back.",
        },
        {
          icon: BadgeDollarSign,
          title: "Trying to save money by choosing the wrong scope",
          body: "The cheaper build is not always the better first build. A lighter quote-stage workflow is cheaper than a deeper estimate-handoff system, but only if it fixes the actual leak. Otherwise you save budget and keep losing deals.",
        },
      ],
    },
    {
      type: "prose",
      title: "A simple way to decide",
      subtitle:
        "Ask what had to happen before pricing went out — and who is supposed to act next.",
      blocks: [
        {
          heading: "If the customer was already visited, inspected, or scoped in the field",
          body: "That leans toward estimate follow-up. The workflow needs to know the estimate was sent, preserve site-visit context, and route replies back to the right estimator or office owner without losing the thread.",
        },
        {
          heading: "If the business mainly needs disciplined ownership after pricing goes out",
          body: "That leans toward quote follow-up. The broader system helps any service business keep sent quotes active, even when pricing was produced without a truck roll, inspection, or in-person scope review.",
        },
        {
          heading: "If both are true, use the quote page as the parent and the estimate page as the narrower child",
          body: "That is the clean cluster logic already emerging on this site: the quote page explains the cross-industry post-pricing layer, and the estimate page isolates the field-service handoff problem inside it.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this comparison",
      subtitle:
        "There is no single published comparison case study for this exact buyer choice yet. The honest proof frame is the two live parent pages, the existing vertical estimate/quote cluster, and the CRM lifecycle case study:",
      studies: [
        {
          industry: "Estimate-side proof",
          headline: "The service-business estimate page already shows the narrower field-service handoff pattern",
          body: "That page covers sent estimates after site visits, estimator-to-office coordination, open-estimate visibility, and why field-service businesses need more than a generic quote reminder sequence.",
          link: "/estimate-follow-up-automation-for-service-businesses",
        },
        {
          industry: "Quote-side proof",
          headline: "The service-business quote page already shows the broader post-pricing ownership pattern",
          body: "That page explains the cross-industry quote-stage system: timed reminders, objection-aware follow-up, and routing the right human back into the deal when intent returns.",
          link: "/quote-follow-up-automation-for-service-businesses",
        },
        {
          industry: "Adjacent proof",
          headline: "Published CRM lifecycle work proves the stage-tracking and handoff discipline both options depend on",
          body: "The e-commerce CRM case study is not a service-business estimate project, but it proves the underlying mechanics that matter here: clean stage tracking, automated follow-up, visibility into stale opportunities, and better human handoff when a deal wakes up again.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Estimate follow-up automation for service businesses", href: "/estimate-follow-up-automation-for-service-businesses" },
        { label: "Estimate follow-up setup for service businesses", href: "/estimate-follow-up-setup-for-service-businesses" },
        { label: "Estimate follow-up setup vs. DIY for small business", href: "/estimate-follow-up-setup-vs-diy-small-business" },
        { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
        { label: "Quote follow-up cost for small business", href: "/quote-follow-up-cost-small-business" },
        { label: "Quote follow-up automation for insurance agencies", href: "/quote-follow-up-automation-for-insurance-agencies" },
        { label: "Estimate follow-up for contractors", href: "/estimate-follow-up-automation-for-contractors" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is the real difference between estimate follow-up and quote follow-up?",
      answer:
        "Estimate follow-up is the narrower field-service version of the problem. It assumes pricing followed a site visit, inspection, or scoped job and focuses on estimator-to-office handoff, sent estimates, and open-estimate visibility. Quote follow-up is broader: it covers any service business that needs disciplined follow-up after pricing goes out, even when there was no site visit at all.",
    },
    {
      question: "Which one should a roofing, plumbing, HVAC, or electrical company build first?",
      answer:
        "Usually estimate follow-up first if most jobs depend on on-site scoping and the real leak starts after the estimate is sent. If the business has a broader quote-stage ownership problem across multiple offer types, the broader quote-follow-up workflow may still come first. The deciding factor is whether the biggest revenue leak is generic quote ownership or estimate-stage field handoff.",
    },
    {
      question: "Can both pages coexist without duplicating each other?",
      answer:
        "Yes. The broader quote-follow-up page can act as the horizontal parent for service businesses, while the estimate-follow-up page acts as the narrower child for field-service and trade teams that need site-visit context, estimator handoff, and open-estimate visibility.",
    },
    {
      question: "What does the narrower estimate-follow-up build usually cost compared with the broader quote-follow-up build?",
      answer:
        "A broader quote-stage workflow often lands around $1.5K–$3.5K. A narrower estimate-follow-up build can sit in a similar range when the estimate trigger is already clean, but it often costs more if it also needs stronger estimator handoff logic, field-to-office ownership rules, or visibility into stale open estimates by rep or job type.",
    },
    {
      question: "What should I fix before either workflow?",
      answer:
        "Make sure the pricing stage is real. If the team cannot reliably tell when a quote or estimate was sent, who owns the follow-up, or where replies should route, the automation will only make the confusion move faster. Clean stage definitions first, then automate.",
    },
  ],
  faqSubtitle:
    "Practical questions about estimate follow-up vs. quote follow-up for service businesses",
  ctaHeading: "Need help deciding which quote-stage workflow to build first?",
  ctaText:
    "Book a 30-minute call. We will look at how your business sends pricing today, where opportunities are going cold, whether the real leak is generic quote ownership or estimate-stage handoff, and which workflow is the cleaner first build.",
  ctaSubtext:
    "No fake precision and no pressure to overbuild. Just a practical recommendation based on your current process, pipeline shape, and who actually owns the next move after pricing goes out.",
  relatedLinks: [
    { label: "Estimate follow-up automation for service businesses", href: "/estimate-follow-up-automation-for-service-businesses" },
    { label: "Estimate follow-up setup for service businesses", href: "/estimate-follow-up-setup-for-service-businesses" },
    { label: "Estimate follow-up ROI for small business", href: "/estimate-follow-up-roi-small-business" },
    { label: "Quote follow-up automation for service businesses", href: "/quote-follow-up-automation-for-service-businesses" },
    { label: "Quote follow-up cost for small business", href: "/quote-follow-up-cost-small-business" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "Estimate follow-up automation for contractors", href: "/estimate-follow-up-automation-for-contractors" },
  ],
};

export default data;
