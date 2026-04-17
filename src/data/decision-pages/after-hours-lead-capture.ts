import {
  Moon,
  Phone,
  MessageSquare,
  Clock,
  Bot,
  CalendarCheck,
  CheckCircle2,
  XCircle,
  TrendingUp,
  BarChart3,
  Zap,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "after-hours-lead-capture-for-service-businesses",
  metaTitle:
    "After-Hours Lead Capture for Service Businesses — Never Miss a Night or Weekend Inquiry | Dmytro AI",
  metaDescription:
    "How service businesses capture leads after hours with AI automation. Instant responses to calls, forms, and messages when your office is closed. What works and how to set it up.",
  badgeText: "Lead Capture",
  badgeIcon: Moon,
  h1: "After-Hours Lead Capture for Service Businesses",
  heroIntro:
    "Half of your inbound leads come in outside business hours. Evenings, weekends, holidays — when your phone goes to voicemail and your contact form sits unanswered. By the time you see the inquiry Monday morning, the prospect has already called your competitor. After-hours lead capture automation means every inquiry gets an immediate response, no matter when it arrives.",
  heroSubtext:
    "Below: how after-hours lead capture works, which channels matter most, and what kind of businesses see the biggest payoff.",
  sections: [
    {
      type: "cards",
      title: "What after-hours lead capture covers",
      subtitle:
        "These are the channels where leads come in outside your operating hours. Each one needs a different response strategy:",
      items: [
        {
          icon: Phone,
          title: "Missed call response",
          body: "Call goes unanswered after hours. Within 30 seconds, the caller gets a text: 'Hey, we are closed right now but got your call. What do you need help with?' Starts a conversation instead of losing the lead to voicemail.",
        },
        {
          icon: MessageSquare,
          title: "Web form instant reply",
          body: "Someone fills out your contact form at 10 PM. Instead of waiting until morning, they get a personalized email and SMS within 60 seconds acknowledging the inquiry and asking a qualifying question.",
        },
        {
          icon: Bot,
          title: "AI phone answering",
          body: "An AI voice agent picks up after-hours calls, answers common questions, captures caller details, and books appointments directly into your calendar. No voicemail, no missed opportunities.",
        },
        {
          icon: CalendarCheck,
          title: "Self-service booking",
          body: "After-hours callers and form submitters get a booking link so they can schedule a call or appointment for the next business day. Captures commitment, not just interest.",
        },
        {
          icon: Zap,
          title: "Chat and social message response",
          body: "Facebook messages, Instagram DMs, and website chat widgets get instant automated responses after hours. Acknowledges the inquiry, captures details, and sets expectations for follow-up.",
        },
        {
          icon: Clock,
          title: "Morning briefing for your team",
          body: "Every after-hours inquiry is logged in your CRM with full context. Your team starts the day with a prioritized list of warm leads instead of sifting through voicemails and unread emails.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is after-hours lead capture worth it for your business?",
      subtitle:
        "Some businesses lose significant revenue after hours. Others do not. Here is how to tell:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Strong fit",
          variant: "green",
          items: [
            "You get 5+ after-hours calls or form fills per week",
            "Your services are urgent or time-sensitive (HVAC, plumbing, legal)",
            "Prospects are comparing multiple providers and speed matters",
            "You have noticed competitors respond faster than you do",
            "You rely on inbound leads, not just referrals",
            "Weekend and evening inquiries are a meaningful share of your pipeline",
          ],
        },
        {
          icon: XCircle,
          heading: "Not a priority yet",
          variant: "neutral",
          items: [
            "Almost all your business comes from referrals and repeat clients",
            "You get fewer than 3 after-hours inquiries per week",
            "Your industry does not have urgency-driven demand",
            "You already have someone answering calls after hours",
            "Your sales cycle is long enough that response speed barely matters",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Why speed matters more after hours",
      subtitle:
        "The research on lead response time is clear, but after hours the stakes are even higher:",
      blocks: [
        {
          heading: "Leads that come in at night are shopping actively",
          body: "Someone filling out your form at 9 PM is comparing options right now. They are not casually browsing. They have a problem and they are looking for who can solve it fastest. If you respond in 60 seconds with a helpful message, you are the only provider they are talking to. If you respond at 9 AM the next day, they have already contacted three others.",
        },
        {
          heading: "Voicemail is a dead end",
          body: "Most callers do not leave voicemails anymore. If your after-hours call goes to voicemail, the caller hangs up and calls the next provider on the list. An instant text-back or AI phone agent captures the lead before they move on. This is especially true for emergency and urgent services.",
        },
        {
          heading: "First response wins a disproportionate share",
          body: "For service businesses, the first provider to respond meaningfully gets the job the majority of the time. Not because they are the best — because they are there. After-hours automation means you are always first, even when your office is dark.",
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI of after-hours lead capture",
      subtitle:
        "The math is straightforward for most service businesses:",
      items: [
        {
          icon: TrendingUp,
          title: "Recovered revenue",
          body: "If you miss 5 after-hours leads per week and your average job is worth $500, that is $2,500 per week in potential revenue walking away. Even capturing 30% of those leads pays for the automation many times over.",
        },
        {
          icon: BarChart3,
          title: "Higher conversion from faster response",
          body: "Leads that get a response within 60 seconds convert at significantly higher rates than those contacted hours later. The improvement is not marginal — it is often the difference between winning and losing the job.",
        },
        {
          icon: Clock,
          title: "No additional labor cost",
          body: "After-hours coverage traditionally requires hiring an answering service ($300-$800/month) or paying staff overtime. Automation handles the first response for a fraction of the cost with better consistency.",
        },
        {
          icon: Bot,
          title: "Better lead quality data",
          body: "Automated responses can ask qualifying questions up front — what service they need, their address, their timeline. By morning, your team has qualified leads with context, not just missed call notifications.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Real-world after-hours capture results",
      subtitle:
        "These case studies show the same after-hours capture patterns in action:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "AI voice receptionist captures every after-hours reservation request and inquiry. Response time went from hours to under 60 seconds. The same approach applies to any service business losing leads overnight.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of leads with automated follow-up",
          body: "Automated CRM workflows captured and organized leads around the clock. No manual intervention required for first response. The same pipeline logic powers after-hours lead capture for service businesses.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What happens when someone calls after hours?",
      answer:
        "Depends on the setup. The most common approach: an AI voice agent answers the call, handles routine questions, captures the caller's details, and either books an appointment or sends the info to your CRM for morning follow-up. If the caller needs urgent help, the system can route to an on-call number.",
    },
    {
      question: "Is this different from an answering service?",
      answer:
        "Yes. Answering services take messages. After-hours automation responds, qualifies, and can book appointments — all instantly. It also costs less than most answering services and does not depend on a third-party human being available.",
    },
    {
      question: "Does this work for emergency service businesses?",
      answer:
        "Yes, and emergency businesses benefit the most. Plumbing, HVAC, locksmith, and similar trades can route urgent calls to on-call staff while the automation handles non-emergency inquiries and scheduling.",
    },
    {
      question: "What tools are involved?",
      answer:
        "Typically a combination of AI voice agent (VAPI or similar), SMS automation via your CRM (GoHighLevel, HubSpot), n8n for workflow orchestration, and your existing calendar for booking. The specific stack depends on what you already use.",
    },
    {
      question: "What does it cost?",
      answer:
        "A basic after-hours capture system (missed call text-back, form auto-response, CRM logging) runs $1.5K-$2.5K. A full system with AI phone answering, booking, and qualification runs $3K-$5K. Fixed pricing, scoped before work starts.",
    },
  ],
  faqSubtitle:
    "Practical answers about after-hours lead capture for service businesses",
  ctaHeading: "Stop losing leads while you sleep",
  ctaText:
    "Book a 30-minute call. We will look at how many leads you are missing after hours and map out the fastest way to start capturing them.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your after-hours lead flow.",
  relatedLinks: [
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
