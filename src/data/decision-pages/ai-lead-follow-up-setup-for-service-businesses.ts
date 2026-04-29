import {
  Settings,
  Workflow,
  CheckCircle2,
  XCircle,
  ClipboardList,
  ArrowUpRight,
  Clock,
  Route,
  ShieldCheck,
  Wrench,
  MessageSquare,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-setup-for-service-businesses",
  metaTitle:
    "AI Lead Follow-Up Setup for Service Businesses — What to Configure Before Launch | Dmytro AI",
  metaDescription:
    "What goes into setting up AI lead follow-up for a service business? Setup scope, response logic, CRM connections, multi-channel sequencing, and when professional setup help is worth paying for versus a simpler workflow.",
  badgeText: "Lead Follow-Up Setup",
  badgeIcon: Settings,
  h1: "AI Lead Follow-Up Setup for Service Businesses",
  heroIntro:
    "Most lead follow-up automation fails not because the tool is wrong but because the setup was incomplete. The system goes live without clear response rules, without tested CRM connections, without a plan for what happens when a lead replies at 11 PM or submits through a channel nobody mapped, and without the sequencing logic that makes multi-touch follow-up useful instead of annoying. The difference between a lead follow-up system that actually converts and one that sends messages into the void is almost always in setup scope — what was configured before launch and how carefully the edge cases were tested. This page covers what a service business should expect from a proper lead follow-up setup, when professional implementation help is worth the spend, and when a lighter workflow handles the real need.",
  heroSubtext:
    "Below: what setup actually involves, the response logic that matters most, what should be configured before launch, and how to tell whether you need full setup help or a simpler path.",
  sections: [
    {
      type: "cards",
      title: "What lead follow-up setup actually covers",
      subtitle:
        "Setup is not just turning on auto-replies. These are the real implementation layers:",
      items: [
        {
          icon: MessageSquare,
          title: "Response logic and channel mapping",
          body: "Defining what happens when a lead comes in from a web form, a missed call, a social media DM, or a Google Business message. Each channel needs its own response path because a form submission and a missed call represent different urgency levels and different caller expectations.",
        },
        {
          icon: Route,
          title: "Sequencing and timing rules",
          body: "Building the multi-touch follow-up logic: how many messages, which channels, what spacing, and what happens when the lead replies versus goes silent. A plumber following up on an emergency call needs a completely different sequence than a med spa nurturing a cosmetic consultation inquiry.",
        },
        {
          icon: Workflow,
          title: "CRM, pipeline, and downstream automation",
          body: "Connecting the follow-up outcome to your real systems: contact creation, pipeline stage updates, owner assignment, task creation for the closer, and alert routing when a lead looks hot. Without these connections, messages go out but nothing useful happens in the business.",
        },
        {
          icon: ShieldCheck,
          title: "Edge-case testing and failure paths",
          body: "Testing what happens when leads reply outside business hours, opt out mid-sequence, submit through unexpected channels, or trigger duplicate records. A setup that only works for clean demo leads will break within the first week of real traffic.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What should be configured before launch",
      subtitle:
        "These are the setup decisions that protect lead quality and response reliability from day one:",
      items: [
        {
          icon: Clock,
          title: "Speed-to-lead rules by channel and time of day",
          body: "A web form submitted at 2 PM and one submitted at midnight need different response paths. Business hours, after hours, weekends, and holidays should each have clear logic. The goal is that no lead waits more than a few minutes for a first touch regardless of when they reach out.",
        },
        {
          icon: ClipboardList,
          title: "Sequence logic and stop conditions",
          body: "Define exactly when the follow-up sequence pauses, stops, or escalates. A reply, a booking, a phone call back, or an opt-out should each trigger a different path. Without explicit stop rules, leads get messages after they have already booked or told you they are not interested.",
        },
        {
          icon: Wrench,
          title: "CRM field mapping and pipeline routing",
          body: "Every new lead needs to land in the right pipeline stage with the right owner and the right tags from the first message. If CRM mapping is incomplete, leads pile up unassigned, follow-up sequences fire on the wrong contacts, and reporting becomes meaningless.",
        },
        {
          icon: ArrowUpRight,
          title: "Alert and escalation rules for hot leads",
          body: "Not every lead needs the same urgency. Define which signals — a reply, a callback request, a high-value service inquiry — should trigger an immediate alert to the closer or owner versus continuing through the automated sequence.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When setup help is worth paying for — and when it is not",
      subtitle:
        "Professional setup makes sense when the workflow is complex enough that getting it wrong wastes more than the setup cost:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Worth paying for setup help",
          variant: "green",
          items: [
            "You need multi-channel follow-up across SMS, email, and voicemail drop with different timing for each",
            "Leads come from multiple sources — web forms, missed calls, social media, referrals — and each needs different handling",
            "CRM integration needs to work from day one: contact creation, pipeline routing, owner assignment, and duplicate prevention",
            "You need alert routing so hot leads reach a closer within minutes instead of sitting in a queue",
            "You do not have someone internal who can build sequences, test edge cases, and debug CRM connections across real lead scenarios",
          ],
        },
        {
          icon: XCircle,
          heading: "A lighter path is probably enough",
          variant: "neutral",
          items: [
            "Your main need is instant response to web form leads without multi-step nurture",
            "Lead volume is low enough that a fast manual callback covers most of the gap",
            "The follow-up workflow is simple: respond, confirm interest, book the call",
            "You are comfortable building sequences and testing them yourself using the platform's tools",
            "The real bottleneck is not follow-up speed — it is what happens after the lead books",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Common setup mistakes that break lead follow-up workflows",
      subtitle:
        "These are the implementation gaps that cause most early failures:",
      blocks: [
        {
          heading: "Launching without mapping all lead sources",
          body: "Most service businesses get leads from at least three or four channels: web forms, phone calls, Google Business messages, social media, and referrals. A setup that only covers web form responses leaves the other channels on manual — which means the same speed-to-lead problem continues for half the pipeline.",
        },
        {
          heading: "Skipping stop conditions because they seem obvious",
          body: "Stop rules sound simple until you map the edge cases. What happens when a lead replies but does not book? When they book but the sequence has already queued the next message? When they call back but the CRM does not log the call as a reply? Every unmapped stop condition becomes an embarrassing duplicate message in production.",
        },
        {
          heading: "Connecting the channels before the CRM is ready",
          body: "Sending follow-up messages is only half the job. If the CRM connection is not working, pipeline stages are not mapped, owner assignment is not configured, or duplicate detection is not in place, the system sends messages but creates a data mess downstream. That makes reporting useless and follow-up unreliable because nobody trusts the pipeline.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "This page uses published proof already on the site. The framing is setup scope and implementation quality, not pricing or platform comparison.",
      studies: [
        {
          industry: "E-commerce / CRM follow-up setup",
          headline: "E-commerce CRM automation shows what proper follow-up setup delivers",
          body: "The e-commerce CRM case study demonstrates the downstream value of getting follow-up setup right: automated sequences replaced manual outreach, CRM pipeline stages drove clear owner assignment, and the business stopped losing leads to slow or inconsistent response. That result required proper channel mapping, CRM integration, and sequence testing — not just turning on auto-replies.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Contact form follow-up",
          headline: "The contact form follow-up page explains what instant response setup actually involves",
          body: "Before investing in full multi-channel setup, the contact form follow-up guide covers what it takes to automate the single highest-value response path: the moment a lead submits a form. That narrower scope is often the right first build before expanding to missed-call recovery and multi-touch nurture.",
          link: "/contact-form-lead-follow-up-automation",
        },
        {
          industry: "Lead follow-up pricing",
          headline: "The cost page covers what to budget once you have decided to move forward",
          body: "Once setup scope is clear, the AI lead follow-up cost page breaks down realistic small-business pricing ranges for different build complexities — from instant response to multi-channel CRM-routed nurture sequences.",
          link: "/ai-lead-follow-up-cost-small-business",
        },
      ],
      links: [
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "AI lead follow-up setup vs. DIY", href: "/ai-lead-follow-up-setup-vs-diy-small-business" },
        { label: "AI lead follow-up cost for small business", href: "/ai-lead-follow-up-cost-small-business" },
        { label: "AI lead follow-up ROI for small business", href: "/ai-lead-follow-up-roi-small-business" },
        { label: "Contact form lead follow-up automation", href: "/contact-form-lead-follow-up-automation" },
        { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does AI lead follow-up setup involve for a service business?",
      answer:
        "Setup covers channel mapping for every lead source, response logic and timing rules, multi-step sequence design, CRM integration with pipeline routing and owner assignment, stop conditions, alert rules for hot leads, and edge-case testing. The goal is a follow-up system that handles real leads reliably, not just clean demo submissions.",
    },
    {
      question: "How long does setup usually take?",
      answer:
        "A focused lead follow-up setup for a service business typically takes one to three weeks depending on complexity. A single-channel instant-response build is faster. Builds with multi-channel sequencing, CRM integration, and pipeline routing take longer because each layer needs real testing with actual lead data.",
    },
    {
      question: "Can I set up lead follow-up automation myself?",
      answer:
        "For simple instant-response workflows on a single channel, many platforms offer self-service tools that work. Once the build requires multi-channel sequencing, CRM pipeline routing, owner assignment, duplicate prevention, or conditional stop logic, professional setup usually saves more time and lost leads than it costs.",
    },
    {
      question: "What is the most common setup mistake?",
      answer:
        "Launching without mapping all lead sources. Most service businesses get leads from web forms, missed calls, Google Business, social media, and referrals. A setup that only covers one channel leaves the rest on manual, which means the same speed-to-lead problem continues for the majority of real inquiries.",
    },
    {
      question: "How is this different from the lead follow-up parent page?",
      answer:
        "The parent page covers what lead follow-up automation is and when it fits. This page focuses specifically on setup scope: what needs to be configured, what breaks if it is not, and when professional implementation help is worth paying for versus doing it yourself.",
    },
  ],
  faqSubtitle:
    "Practical answers for service business owners evaluating lead follow-up implementation",
  ctaHeading: "Want to get lead follow-up set up properly?",
  ctaText:
    "Book a 30-minute call. We will look at your lead sources, response gaps, CRM setup, and follow-up needs, then scope the narrowest build that handles your real speed-to-lead problem.",
  ctaSubtext:
    "No generic demo. Just a practical conversation about what your follow-up setup actually needs.",
  relatedLinks: [
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "AI lead follow-up cost for small business", href: "/ai-lead-follow-up-cost-small-business" },
    { label: "AI lead follow-up ROI for small business", href: "/ai-lead-follow-up-roi-small-business" },
    { label: "Contact form lead follow-up automation", href: "/contact-form-lead-follow-up-automation" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "Lead follow-up automation examples", href: "/lead-follow-up-automation-examples" },
    { label: "AI phone answering setup for small business", href: "/ai-phone-answering-setup-small-business" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
