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
  slug: "missed-call-follow-up-automation",
  metaTitle:
    "Missed Call Follow-Up Automation — Never Lose a Lead to Voicemail | Dmytro AI",
  metaDescription:
    "How missed call follow-up automation works for service businesses. Instant text-back, voicemail transcription, CRM logging, and automated sequences. Stop losing leads to unanswered calls.",
  badgeText: "Lead Recovery",
  badgeIcon: PhoneMissed,
  h1: "Missed Call Follow-Up Automation",
  heroIntro:
    "Every missed call is a potential customer choosing someone else. Most service businesses miss 20-40% of inbound calls — during jobs, after hours, on weekends. The callers rarely leave voicemails. They just call the next provider. Missed call follow-up automation sends an instant text within seconds of a missed call, starts a conversation, and captures the lead before they move on.",
  heroSubtext:
    "Below: how missed call automation works, what the caller actually experiences, and which businesses get the most value from it.",
  sections: [
    {
      type: "cards",
      title: "What happens when a call goes unanswered",
      subtitle:
        "A missed call triggers a multi-step automated response. Each step is designed to recover the lead:",
      items: [
        {
          icon: Zap,
          title: "Instant text-back (under 30 seconds)",
          body: "The caller receives a text message within seconds: 'Hey, sorry we missed your call. What can we help with?' Starts a two-way conversation immediately instead of hoping they leave a voicemail.",
        },
        {
          icon: MessageSquare,
          title: "Voicemail transcription",
          body: "If they do leave a voicemail, it is transcribed and sent to your team via text, email, or Slack. No more listening through a queue of recordings. The transcript goes straight into your CRM.",
        },
        {
          icon: Bot,
          title: "Automated qualification",
          body: "The text conversation can ask qualifying questions — what service they need, their location, their timeline. By the time your team follows up, you already know if it is a real opportunity.",
        },
        {
          icon: CalendarCheck,
          title: "Self-service booking",
          body: "Include a booking link in the text-back so the caller can schedule a call or appointment immediately. Captures commitment while they are still thinking about their problem.",
        },
        {
          icon: Users,
          title: "CRM lead creation",
          body: "Every missed call creates a contact in your CRM with the phone number, time, any text conversation, and voicemail transcript. Nothing falls through the cracks even if nobody follows up manually.",
        },
        {
          icon: ArrowUpRight,
          title: "Escalation for urgent calls",
          body: "For emergency services, the system can detect urgency keywords and escalate to your on-call person immediately. Non-urgent calls follow the standard text-back and booking flow.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is missed call automation a fit for your business?",
      subtitle:
        "This is one of the highest-ROI automations for most service businesses, but not universally:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Strong fit",
          variant: "green",
          items: [
            "Your team misses calls during jobs, meetings, or busy periods",
            "You get meaningful call volume (10+ inbound calls per day)",
            "Your customers expect fast response and compare providers",
            "You are in a competitive local market where speed wins",
            "You have a CRM or are willing to set one up",
            "Many of your leads come from phone calls, not just forms",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You answer 95%+ of inbound calls already",
            "Your business is appointment-only with no inbound call demand",
            "You get fewer than 5 missed calls per week",
            "Your customers do not text (rare, but some demographics prefer email only)",
            "You have a fully staffed call center already",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "Why text-back beats voicemail",
      subtitle:
        "The data on missed call behavior is clear:",
      blocks: [
        {
          heading: "Most callers do not leave voicemails",
          body: "Voicemail completion rates for service businesses are typically around 20-30%. That means 70-80% of missed callers simply hang up and call someone else. A text-back reaches the other 70-80% who would have been lost entirely.",
        },
        {
          heading: "Text has a near-100% open rate",
          body: "Unlike email, text messages are opened and read almost immediately. A well-timed text within 30 seconds of the missed call catches the caller while they are still holding their phone, still thinking about the problem, and still willing to engage.",
        },
        {
          heading: "Two-way texting converts better than callbacks",
          body: "When a caller texts back with their question, you have a written lead with context. When your team calls back hours later, the prospect may not answer (ironic, but common). Text threads stay open and easy to continue.",
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI of missed call follow-up",
      subtitle:
        "This is often the single highest-ROI automation a service business can install:",
      items: [
        {
          icon: TrendingUp,
          title: "Lead recovery rate",
          body: "Businesses that implement missed call text-back typically recover 30-50% of leads that would have been lost. For a business missing 10 calls per week with an average job value of $400, that is $1,200-$2,000 in recovered revenue per week.",
        },
        {
          icon: BarChart3,
          title: "Response time improvement",
          body: "Average response time goes from hours (whenever someone checks voicemail) to under 30 seconds. This alone dramatically improves conversion, especially in competitive local markets.",
        },
        {
          icon: Clock,
          title: "Zero additional labor",
          body: "The automation handles the first response without your team lifting a finger. They engage only when a qualified lead is ready to talk, instead of playing phone tag all day.",
        },
        {
          icon: Bot,
          title: "Setup cost vs ongoing value",
          body: "A missed call system typically costs $1.5K-$3K to build and $50-$150/month in software. If it recovers even one extra job per week, the ROI is massive.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Similar automation in action",
      subtitle:
        "These projects use the same missed call and follow-up automation patterns:",
      studies: [
        {
          industry: "Restaurant",
          headline: "0% to 100% after-hours call coverage",
          body: "AI voice agent captures every missed call and routes it into an automated follow-up workflow. Response time went from hours to seconds. The same missed-call logic applies to any service business.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "HVAC missed call text back", href: "/hvac-missed-call-text-back" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "After-hours lead capture", href: "/after-hours-lead-capture-for-service-businesses" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What does the text message actually say?",
      answer:
        "It is customized for your business, but a typical first message looks like: 'Hey, this is [Business Name]. Sorry we missed your call — what can we help with?' Short, conversational, and opens a dialogue. No promotional fluff.",
    },
    {
      question: "Does it work for both business hours and after hours?",
      answer:
        "Yes. During business hours, it covers calls missed while your team is on another call or on a job site. After hours, it is your entire lead capture system. The messaging can differ based on time of day.",
    },
    {
      question: "What if the caller texts back with an emergency?",
      answer:
        "The system can detect urgency keywords and escalate to your on-call person via call, text, or Slack notification. Non-urgent requests follow the standard qualification and booking flow.",
    },
    {
      question: "How fast is the text-back?",
      answer:
        "Typically under 30 seconds from the missed call. Fast enough that the caller is still holding their phone and thinking about the problem. This timing is critical — even a 5-minute delay significantly reduces response rates.",
    },
    {
      question: "What does it cost?",
      answer:
        "A basic missed call text-back system runs $1.5K-$2.5K to build. A full system with qualification questions, CRM integration, booking, and escalation runs $2.5K-$4K. SMS costs are typically $0.01-$0.03 per message.",
    },
  ],
  faqSubtitle:
    "Common questions about missed call follow-up automation",
  ctaHeading: "Stop losing leads to voicemail",
  ctaText:
    "Book a 30-minute call. We will look at how many calls you are missing, what those leads are worth, and how to start recovering them this month.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your missed call problem.",
  relatedLinks: [
    { label: "HVAC missed call text back", href: "/hvac-missed-call-text-back" },
    { label: "After-hours lead capture", href: "/after-hours-lead-capture-for-service-businesses" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
