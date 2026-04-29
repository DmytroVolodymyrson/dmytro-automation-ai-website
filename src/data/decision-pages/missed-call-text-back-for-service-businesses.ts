import {
  PhoneMissed,
  MessageSquare,
  Clock,
  Zap,
  Bot,
  CalendarCheck,
  CheckCircle2,
  XCircle,
  TrendingUp,
  BarChart3,
  Users,
  ArrowUpRight,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "missed-call-text-back-for-service-businesses",
  metaTitle:
    "Missed Call Text-Back for Service Businesses — SMS-First Recovery When a Full Voice Agent Is Overkill | Dmytro AI",
  metaDescription:
    "How service businesses use missed call text-back to recover leads with a fast SMS instead of voicemail, manual callbacks, or full AI phone answering. When it is enough, when it is not, and how to decide.",
  badgeText: "Missed Call Recovery",
  badgeIcon: PhoneMissed,
  h1: "Missed Call Text-Back for Service Businesses",
  heroIntro:
    "Most service businesses miss 20-40% of inbound calls. During jobs, after hours, on weekends — the phone rings and nobody picks up. The standard fallback is voicemail, and most callers do not leave one. They hang up and call the next provider. Missed call text-back is the simplest layer of defense: the call is missed, an SMS goes out within seconds, the caller gets a clear next step, and the lead stays alive long enough for your team or booking flow to recover it. It is not a full phone system replacement. It is a fast, cheap, SMS-first recovery layer that sits between doing nothing and deploying a live AI voice agent.",
  heroSubtext:
    "Below: what missed call text-back should actually handle, how it compares to voicemail, manual callbacks, and AI phone answering, when the SMS-first approach is enough, when you need more, and what proof from the live vertical pages on this site honestly supports this pattern.",
  sections: [
    {
      type: "cards",
      title: "What a missed call text-back system should handle",
      subtitle:
        "The workflow is narrow by design. Each step recovers the lead without requiring a live person:",
      items: [
        {
          icon: Zap,
          title: "Instant SMS (under 30 seconds)",
          body: "The caller gets a text within seconds of the missed call: something like 'Hey, sorry we missed your call — what can we help with?' Short, conversational, and opens a two-way thread before the caller moves on to the next provider.",
        },
        {
          icon: MessageSquare,
          title: "Two-way text conversation",
          body: "The caller replies with what they need. Your team sees the thread in their CRM, phone, or Slack. They now have a written lead with context instead of a voicemail they might never check or a missed-call notification they will forget about.",
        },
        {
          icon: CalendarCheck,
          title: "Booking link or next step",
          body: "The text can include a direct link to book an appointment, request an estimate, or get directions — whatever the natural next step is for your business. Captures commitment while the caller is still holding their phone.",
        },
        {
          icon: Users,
          title: "CRM lead creation",
          body: "Every missed call creates a contact record with the phone number, timestamp, and any text conversation. Nothing falls through the cracks even if your team does not follow up for hours.",
        },
        {
          icon: Bot,
          title: "Optional qualification questions",
          body: "For businesses that need to triage inbound calls, the text thread can ask qualifying questions — service type, zip code, timeline. By the time your team responds, they know whether it is a real opportunity.",
        },
        {
          icon: ArrowUpRight,
          title: "Urgency escalation",
          body: "For businesses that handle emergencies (plumbing, HVAC, electrical), the system can detect urgency keywords and escalate to your on-call person immediately instead of following the standard text-back flow.",
        },
      ],
    },
    {
      type: "table",
      title: "Text-back vs. voicemail vs. manual callback vs. AI phone answering",
      subtitle:
        "Each option handles missed calls differently. The right choice depends on your call volume, budget, and how complex your inbound calls are:",
      headers: ["Missed call text-back", "Voicemail", "Manual callback", "AI phone answering"],
      rows: [
        {
          label: "Response time",
          values: [
            "Under 30 seconds",
            "Whenever someone checks",
            "Hours to never",
            "Immediate — answers live",
          ],
        },
        {
          label: "Caller effort",
          values: [
            "Zero — text arrives automatically",
            "Must leave a message",
            "Must answer a callback",
            "Speaks with AI agent",
          ],
        },
        {
          label: "Lead capture rate",
          values: [
            "High — catches the 70-80% who skip voicemail",
            "Low — 20-30% leave messages",
            "Depends on callback speed",
            "Highest — live conversation",
          ],
        },
        {
          label: "Setup cost",
          values: [
            "$1.5K-$2.5K one-time",
            "Free (already built in)",
            "Free (just labor)",
            "$3K-$8K+ one-time",
          ],
        },
        {
          label: "Monthly cost",
          values: [
            "$50-$150 for SMS",
            "$0",
            "Staff time",
            "$200-$500+ for AI minutes",
          ],
        },
        {
          label: "Complexity",
          values: [
            "Low — one workflow",
            "None",
            "None",
            "High — voice AI training and edge cases",
          ],
        },
        {
          label: "Best for",
          values: [
            "Straightforward service requests",
            "Low call volume, not competitive",
            "Small teams who always call back fast",
            "Complex intake, high volume, after-hours coverage",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When SMS-first text-back is enough — and when it is not",
      subtitle:
        "Text-back is not a universal fix. It works well in specific conditions and falls short in others:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Text-back is usually enough when",
          variant: "green",
          items: [
            "Most missed calls are simple service requests or appointment inquiries",
            "The caller just needs a next step — book online, get an estimate, leave details",
            "Your team can follow up within a few hours once the text thread starts",
            "You want the cheapest, fastest layer of missed-call recovery",
            "Your business already answers most calls live and text-back covers the gaps",
            "You are in a competitive market where any response beats no response",
          ],
        },
        {
          icon: XCircle,
          heading: "You probably need more when",
          variant: "neutral",
          items: [
            "Calls require real-time conversation — intake questions, pricing, triage",
            "You miss a high volume of calls and callers expect a live answer",
            "After-hours calls are complex (emergencies, detailed scheduling)",
            "Your industry has callers who will not text back (some older demographics)",
            "You need the phone answered live to compete with businesses that have front desks",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How this page relates to the rest of the site",
      subtitle:
        "This is the horizontal parent page for missed call text-back. It covers the shared workflow pattern that applies across industries:",
      blocks: [
        {
          heading: "Vertical text-back pages by industry",
          body: "This site has dedicated missed call text-back pages for restaurants, HVAC companies, auto repair shops, roofing companies, landscaping companies, home inspectors, pest control companies, painting contractors, cleaning companies, chiropractors, med spas, plumbing companies, electrical contractors, dental practices, solar companies, and law firms. Each one covers the same core workflow with industry-specific nuances. This page covers what they all have in common.",
        },
        {
          heading: "Different from missed call follow-up automation",
          body: "The missed call follow-up automation page covers the broader multi-step system: text-back plus voicemail transcription, automated qualification sequences, CRM logging, and escalation routing. This page focuses narrowly on SMS-first recovery — when that lighter layer is the practical first step and when you should skip ahead to the fuller system.",
        },
        {
          heading: "Different from AI phone answering",
          body: "AI phone answering is a live voice agent that picks up the call and has a real-time conversation. Text-back is what happens after the call is already missed. They solve different problems at different price points. Some businesses start with text-back and add AI phone answering later. Some need AI phone answering from day one.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What makes text-back work or fail in practice",
      subtitle:
        "The technology is simple. The difference between text-back that recovers leads and text-back that gets ignored is execution detail:",
      items: [
        {
          icon: Clock,
          title: "Speed matters more than message quality",
          body: "A generic text in 15 seconds beats a perfect text in 5 minutes. The caller is still holding their phone, still thinking about their problem. After a few minutes, they have already called someone else or moved on.",
        },
        {
          icon: TrendingUp,
          title: "The message should open a conversation, not close one",
          body: "The worst text-back messages are informational dead ends: 'We received your call and will get back to you soon.' The best ones ask a question: 'What can we help with?' That turns a missed call into a two-way thread.",
        },
        {
          icon: BarChart3,
          title: "Follow-through after the text matters",
          body: "Text-back captures the lead. Your team still has to respond to the thread within a reasonable window. If text threads sit unanswered for a day, you have a fancier version of the same problem. Build a notification that makes threads hard to ignore.",
        },
        {
          icon: Users,
          title: "After-hours and business-hours messages should differ",
          body: "During business hours: 'Sorry we missed your call — what do you need?' After hours: 'We are closed but saw your call — here is a link to book, or text us what you need and we will follow up first thing.' Matching the message to the context improves reply rates.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Adjacent proof from this site",
      subtitle:
        "There is no dedicated horizontal missed-call-text-back case study on this site. The proof comes from the vertical text-back pages and adjacent published case studies that use the same operational patterns:",
      studies: [
        {
          industry: "Restaurant",
          headline: "0% to 100% after-hours call coverage",
          body: "An AI voice agent captures every missed call and routes it into an automated follow-up workflow. Response time went from hours to seconds. The missed-call capture logic — fast SMS, booking link, CRM logging — is the same foundation that text-back uses across every industry.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "Missed call text-back for restaurants", href: "/missed-call-text-back-for-restaurants" },
        { label: "Missed call text-back for HVAC", href: "/hvac-missed-call-text-back" },
        { label: "Missed call text-back for plumbing companies", href: "/missed-call-text-back-for-plumbing-companies" },
        { label: "Missed call follow-up automation (full system)", href: "/missed-call-follow-up-automation" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "After-hours lead capture", href: "/after-hours-lead-capture-for-service-businesses" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the missed call follow-up automation page?",
      answer:
        "The missed call follow-up page covers the full multi-step system: text-back, voicemail transcription, qualification sequences, CRM logging, and escalation. This page focuses narrowly on the SMS-first layer — the simplest, cheapest recovery step. Start here if you want the fastest win. Move to the full system when your needs grow.",
    },
    {
      question: "What does the text message actually say?",
      answer:
        "It is customized for your business, but a typical first message is: 'Hey, this is [Business Name]. Sorry we missed your call — what can we help with?' Short, conversational, and designed to get a reply. No promotional fluff, no links unless a booking link makes sense for your workflow.",
    },
    {
      question: "What if the caller does not text back?",
      answer:
        "You still have their phone number in your CRM with the missed call timestamp. Your team can call them back later. The text-back catches the 40-60% who will engage via text — which is 40-60% more than voicemail alone was capturing.",
    },
    {
      question: "How fast does the text go out?",
      answer:
        "Typically under 30 seconds from the missed call event. This timing is critical — the caller is still holding their phone and thinking about their problem. A text that arrives minutes later has significantly lower response rates.",
    },
    {
      question: "What does a basic text-back system cost?",
      answer:
        "A basic setup runs $1.5K-$2.5K to build with SMS costs of $0.01-$0.03 per message. Monthly software costs are typically $50-$150. If it recovers even one extra job per month, the ROI usually pays for the annual cost of the system.",
    },
  ],
  faqSubtitle:
    "Common questions about missed call text-back for service businesses",
  ctaHeading: "Stop losing callers to voicemail",
  ctaText:
    "Book a 30-minute call. We will look at how many calls you are missing, whether SMS-first text-back is the right layer, or whether your situation calls for AI phone answering, a fuller missed-call system, or a different fix entirely.",
  ctaSubtext:
    "No obligation. No pitch. Just a practical look at what your missed calls are actually costing you.",
  relatedLinks: [
    { label: "Missed call text-back cost for small business", href: "/missed-call-text-back-cost-small-business" },
    { label: "Missed call text-back ROI for small business", href: "/missed-call-text-back-roi-small-business" },
    { label: "Missed call text-back setup for service businesses", href: "/missed-call-text-back-setup-for-service-businesses" },
    { label: "AI phone answering vs. voicemail for service businesses", href: "/ai-phone-answering-vs-voicemail-for-service-businesses" },
    { label: "Missed call follow-up automation (full system)", href: "/missed-call-follow-up-automation" },
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "After-hours lead capture", href: "/after-hours-lead-capture-for-service-businesses" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
