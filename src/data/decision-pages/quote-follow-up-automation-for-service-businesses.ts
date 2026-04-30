import {
  FileText,
  Clock,
  MessageSquare,
  Mail,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ClipboardCheck,
  Users,
  RefreshCw,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "quote-follow-up-automation-for-service-businesses",
  metaTitle:
    "Quote Follow-Up Automation for Service Businesses — Recover More Sent Quotes | Dmytro AI",
  metaDescription:
    "Quote follow-up automation for service businesses. Recover sent quotes with timed reminders, objection-aware messaging, clear human handoff, and better visibility into open opportunities before they go cold.",
  badgeText: "Workflow Automation",
  badgeIcon: FileText,
  h1: "Quote Follow-Up Automation for Service Businesses",
  heroIntro:
    "A lot of service businesses do the hard part, then lose the deal in silence. The lead came in, somebody answered, the quote or proposal went out, and then nobody followed up with any real discipline. The owner is on the next job. The office assumes the salesperson handled it. The prospect is comparing options and the business that stays visible wins. Quote follow-up automation fixes that narrower stage. It starts after pricing is already out, keeps the opportunity alive with useful reminders and low-friction next steps, and routes real buying intent back to a human before another winnable quote quietly dies.",
  heroSubtext:
    "Below: what quote follow-up automation actually handles for service businesses, how it stays distinct from the generic quote-follow-up guide and the narrower estimate-follow-up page already live on this site, what guardrails matter, and what proof honestly supports the pattern without pretending there is a single published cross-industry quote-recovery case study.",
  sections: [
    {
      type: "cards",
      title: "What quote follow-up automation actually handles",
      subtitle:
        "This page is specifically about opportunities that already reached the quote stage but have not booked, signed, or paid yet.",
      items: [
        {
          icon: Clock,
          title: "Timed follow-up once the quote is sent",
          body: "When a quote, proposal, or estimate is marked sent, the workflow starts. A practical sequence might follow up on day 1, day 3, and day 7 while the opportunity is still warm instead of waiting until someone remembers two weeks later.",
        },
        {
          icon: MessageSquare,
          title: "Messages that reduce friction instead of just checking in",
          body: "The strongest follow-up does more than ask whether the prospect had time to review the quote. It answers the next likely question, reminds them what happens next, and gives them one simple response path.",
        },
        {
          icon: Mail,
          title: "Email and SMS in the right mix",
          body: "Some businesses close better through email with scope details attached. Others get faster replies with a short text that asks whether the buyer has questions or wants to move ahead. Good workflows use the right channel mix for the deal size and buyer type.",
        },
        {
          icon: ClipboardCheck,
          title: "Clear quote-stage ownership",
          body: "Automation helps when the business keeps losing track of who owns the next move after pricing goes out. The workflow makes the follow-up happen automatically, then hands the conversation back to the right human when the prospect re-engages.",
        },
        {
          icon: ArrowUpRight,
          title: "Human handoff when intent comes back",
          body: "Replies, clicks, request-for-changes messages, or booking intent can route straight to the owner, office manager, producer, or salesperson with quote context attached. Humans step in when the opportunity becomes active again, not after manually chasing every stale quote.",
        },
        {
          icon: BarChart3,
          title: "Visibility into open quotes and lost opportunities",
          body: "The business can finally see how many sent quotes are still open, how old they are, where replies happen, and whether deals are dying because nobody followed up or because the quote stage itself is weak.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct from nearby quote-stage pages",
      subtitle:
        "These pages can coexist when the workflow stage and buyer question stay clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "Quote follow-up automation (generic)",
          values: [
            "A broad category overview for anyone asking how quote follow-up works at all",
            "Explains the core reminder-sequence pattern, objection-aware follow-up, and basic ROI without a service-business cluster role",
          ],
        },
        {
          label: "Quote follow-up automation for service businesses (this page)",
          values: [
            "Service-business owners who need the horizontal parent for quote-stage recovery across multiple service contexts",
            "Adds cross-industry service-business framing, cluster links to vertical quote pages, ownership clarity after pricing goes out, and a practical bridge between the generic guide and narrower child pages",
          ],
        },
        {
          label: "Estimate follow-up automation for service businesses",
          values: [
            "Field-service and trades teams where the quote follows a site visit or inspection",
            "Focuses on estimate-stage recovery after an on-site visit, including estimator-to-office handoff, open-estimate visibility, and field-team coordination",
          ],
        },
        {
          label: "Vertical quote-follow-up pages",
          values: [
            "A specific industry like insurance, cleaning, solar, pool service, pest control, or auto parts e-commerce",
            "Uses that industry's exact buying friction, timing, and follow-up language rather than the broader service-business parent framing",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your service business?",
      subtitle:
        "Best fit when quotes are already being sent, but too many opportunities still go cold after pricing is out.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You send quotes or proposals every week and a meaningful share of them go quiet afterward",
            "Your team answers leads but does not follow up consistently once pricing is already out",
            "The owner, office, or sales team keeps losing track of which open quotes still need attention",
            "You want a narrower revenue-recovery build before trying to automate the whole front office",
            "Your average deal value is high enough that one or two recovered quotes per month matters",
            "You have a workable CRM, spreadsheet, or pipeline stage that can tell the system when a quote was sent",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your real problem is still slow first response before the quote stage exists",
            "You already close most quotes with disciplined manual follow-up",
            "You send very few quotes per month",
            "Your quote process is too messy to define a reliable 'quote sent' trigger yet",
            "You want automation to negotiate custom scope, pricing exceptions, or edge-case objections without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep quote follow-up useful",
      subtitle:
        "The goal is cleaner follow-through and better visibility, not more noise or fake urgency.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate before the quote stage is clean",
          body: "If one person emails pricing, another texts a number informally, and nobody updates status the same way twice, the workflow has no stable trigger. Tighten the quote stage first, then automate it.",
        },
        {
          icon: MessageSquare,
          title: "Each touch should have one clear next step",
          body: "Reply with a question. Book the call. Confirm you want to move forward. Ask for a revision. Good follow-up reduces friction. Long generic check-ins usually get ignored.",
        },
        {
          icon: Users,
          title: "Know when a human should step in",
          body: "The workflow should escalate when the prospect wants to revise scope, compare options, discuss unusual timing, or move into a real buying conversation. Automation is there to create discipline, not to replace the closer.",
        },
        {
          icon: RefreshCw,
          title: "Use honest urgency only",
          body: "If pricing expires, availability is limited, or seasonal timing matters, say that. But do not manufacture fake countdown pressure. Helpful urgency improves follow-through. Fake urgency creates distrust and awkward conversations later.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical service-business quote-recovery workflow usually works",
      subtitle:
        "The pattern is simple: trigger from the quote stage, follow up while the deal is still warm, and route a human back in when intent returns.",
      blocks: [
        {
          heading: "The quote is marked sent",
          body: "That event becomes the trigger. It might come from a CRM stage, quoting tool, spreadsheet update, or lightweight ops system. The important part is having one reliable point where the business knows pricing is out and the buyer is deciding.",
        },
        {
          heading: "The first follow-up lands while the quote is still fresh",
          body: "A short, professional touch goes out before the buyer forgets the conversation. For many service businesses this is where the biggest lift happens, because manual follow-up usually happens too late or not at all.",
        },
        {
          heading: "Later touches handle predictable hesitation",
          body: "If there is still no reply, later messages can address familiar stall points: comparing options, unclear timing, wanting a simpler next step, or needing a quick clarification before saying yes. Each touch should lower decision friction instead of repeating the same ask.",
        },
        {
          heading: "High-intent replies go to the right human fast",
          body: "When the buyer responds, the right person sees the conversation with quote context attached. That could be the owner, office manager, salesperson, or producer depending on the business. Humans step in at the moment the deal becomes live again.",
        },
        {
          heading: "The business learns where quotes are really stalling",
          body: "Over time, the workflow becomes an operating lens. You can see whether deals are dying because follow-up is too slow, messaging stops too early, certain channels underperform, or your quote-stage process itself needs work.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is not one published service-business quote-recovery case study on the site yet. The honest proof frame is the live quote-follow-up child cluster, the generic quote and estimate pages, and the published CRM lifecycle case study.",
      studies: [
        {
          industry: "Live vertical quote cluster",
          headline: "Multiple quote-follow-up child pages are already live across different service contexts",
          body: "Insurance agencies, cleaning companies, solar companies, pool service companies, pest control companies, and auto parts e-commerce all now have dedicated quote-follow-up pages. This horizontal parent captures the shared service-business pattern they point to without pretending every industry behaves the same.",
          link: "/quote-follow-up-automation-for-insurance-agencies",
        },
        {
          industry: "Generic quote baseline",
          headline: "The generic quote-follow-up guide already proves the broad sequence logic this page builds on",
          body: "The broader quote-follow-up page explains reminder timing, objection-aware messaging, exit conditions, and revenue-recovery basics. This service-business parent narrows the framing to cross-industry service operators and acts as a better cluster hub.",
          link: "/quote-follow-up-automation",
        },
        {
          industry: "CRM lifecycle proof",
          headline: "The published e-commerce CRM case study proves the stage tracking, ownership clarity, and reminder discipline this workflow depends on",
          body: "That project is not a service-business quote system, but it is real published proof that stale opportunities, unclear ownership, and inconsistent follow-up destroy recoverable value — and that structured workflow automation can fix the leak.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Estimate follow-up automation for service businesses", href: "/estimate-follow-up-automation-for-service-businesses" },
        { label: "Estimate follow-up vs. quote follow-up for service businesses", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
        { label: "Quote follow-up cost for small business", href: "/quote-follow-up-cost-small-business" },
        { label: "Quote follow-up automation for insurance agencies", href: "/quote-follow-up-automation-for-insurance-agencies" },
        { label: "Quote follow-up automation for cleaning companies", href: "/quote-follow-up-automation-for-cleaning-companies" },
        { label: "Quote follow-up automation for solar companies", href: "/quote-follow-up-automation-for-solar-companies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the generic quote-follow-up page?",
      answer:
        "The generic page explains the broad category. This page is the service-business parent for that category. It gives the quote stage a cross-industry service-business frame, connects the live child pages into one cluster, and answers the operator question of how sent quotes get owned and recovered across different service contexts.",
    },
    {
      question: "How is this different from estimate follow-up automation for service businesses?",
      answer:
        "Estimate follow-up is narrower and more field-service specific. It is about the stage after an inspection or site visit, where estimator-to-office handoff and open-estimate visibility matter. This page is broader: it covers service-business quote recovery generally, including businesses where the quote does not depend on an on-site visit.",
    },
    {
      question: "How is this different from the vertical quote-follow-up pages?",
      answer:
        "The vertical pages use industry-specific buying language and timing. Insurance quote follow-up is not the same as cleaning quotes or pool-service repair quotes. This parent page explains the shared service-business pattern while the children stay tighter on one industry's exact decision friction.",
    },
    {
      question: "What does a focused quote-follow-up build usually cost?",
      answer:
        "A focused quote-follow-up workflow for a service business usually lands around $1.5K–$3.5K depending on your systems, channel mix, human-handoff logic, and whether the quote stage is already clean. Broader front-office systems cost more when they also cover lead response, booking, phone handling, or retention automation.",
    },
    {
      question: "Where is the main ROI?",
      answer:
        "The main ROI is recovering opportunities that already made it to pricing but would otherwise fade out because nobody followed up consistently. If your average quote value matters, one or two recovered deals per month can cover the workflow quickly. The secondary ROI is time: owners and office staff stop manually chasing every stale quote and focus on live responses instead.",
    },
  ],
  faqSubtitle:
    "Practical questions about quote follow-up automation for service businesses",
  ctaHeading: "Want fewer sent quotes dying in silence?",
  ctaText:
    "Book a 30-minute call. We will look at how your business handles sent quotes today, where opportunities are going cold after pricing, and whether a focused quote-follow-up workflow is the cleanest automation to build before anything broader.",
  ctaSubtext:
    "No inflated close-rate promises. Just a practical recommendation based on your quote process, your current follow-through, and the handoff between automation and a human closer.",
  relatedLinks: [
    { label: "Estimate follow-up automation for service businesses", href: "/estimate-follow-up-automation-for-service-businesses" },
    { label: "Estimate follow-up vs. quote follow-up for service businesses", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
    { label: "Quote follow-up setup for service businesses", href: "/quote-follow-up-setup-for-service-businesses" },
        { label: "Quote follow-up setup mistakes for small business", href: "/quote-follow-up-setup-mistakes-small-business" },
    { label: "Quote follow-up cost for small business", href: "/quote-follow-up-cost-small-business" },
    { label: "Quote follow-up ROI for small business", href: "/quote-follow-up-roi-small-business" },
    { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
    { label: "Quote follow-up automation for insurance agencies", href: "/quote-follow-up-automation-for-insurance-agencies" },
    { label: "Quote follow-up automation for auto parts e-commerce", href: "/quote-follow-up-automation-for-auto-parts-ecommerce" },
  ],
};

export default data;
