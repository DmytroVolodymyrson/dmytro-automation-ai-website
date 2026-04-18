import {
  MessageSquare,
  Phone,
  Mail,
  Clock,
  Zap,
  Users,
  Bot,
  Target,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "lead-follow-up-automation-examples",
  metaTitle:
    "Lead Follow-Up Automation Examples — Real Workflows for Small Business | Dmytro AI",
  metaDescription:
    "Practical lead follow-up automation examples for small businesses. Missed call text-back, multi-step sequences, AI-powered responses, and channel-specific workflows with real results.",
  badgeText: "Follow-Up Examples",
  badgeIcon: MessageSquare,
  h1: "Lead Follow-Up Automation Examples for Small Business",
  heroIntro:
    "Speed to lead is the single biggest predictor of whether you close a deal. Research consistently shows that businesses responding within 5 minutes are 8x more likely to qualify a lead than those responding within 30 minutes. But consistent, fast follow-up is nearly impossible manually. These are the exact follow-up automation workflows that service businesses use to respond instantly and follow up consistently.",
  heroSubtext:
    "Below: specific follow-up workflows with trigger, timing, and message examples — organized by channel and use case.",
  sections: [
    {
      type: "cards",
      title: "Instant response workflows",
      subtitle:
        "These fire within seconds of a new inquiry — the automations with the highest proven ROI:",
      items: [
        {
          icon: Phone,
          title: "Missed call text-back (< 30 seconds)",
          body: "Trigger: call goes unanswered. After 30 seconds, an SMS fires: 'Hey, sorry we missed your call. How can we help?' The text opens a conversation before the caller tries your competitor. Average response rate: 40-60%. Cost to build: $1K-$2K. This is the single highest-ROI automation for most service businesses.",
        },
        {
          icon: Zap,
          title: "Web form instant response (< 60 seconds)",
          body: "Trigger: form submission. Immediately sends a personalized text acknowledging the inquiry, an email with relevant information, creates a CRM contact, assigns a follow-up task, and notifies the team. The lead gets a response in under a minute even if nobody is at a desk.",
        },
        {
          icon: Bot,
          title: "AI-qualified instant response",
          body: "Trigger: new lead from any source. AI reads the inquiry, classifies the service needed, estimates urgency, and sends a contextual response. 'Hi [name], sounds like you need [service]. We have availability [timeframe]. Want me to book a call?' More personalized than a template, faster than a human.",
        },
        {
          icon: Mail,
          title: "After-hours auto-responder",
          body: "Trigger: inquiry received outside business hours. Sends an immediate acknowledgment with your next-day availability. Sets a priority task for the first person in the office. Lead knows you received their inquiry and will follow up — instead of wondering if their message went into a void.",
        },
      ],
    },
    {
      type: "cards",
      title: "Multi-step follow-up sequences",
      subtitle:
        "Single responses close some deals. Persistent, well-timed sequences close many more:",
      items: [
        {
          icon: MessageSquare,
          title: "5-touch lead nurture (14 days)",
          body: "Day 0: instant response. Day 1: value-add message (tip, resource, case study). Day 3: soft check-in. Day 7: social proof (testimonial or result). Day 14: last-chance message with specific offer. If the lead responds at any point, the sequence stops and a human takes over. This pattern converts 20-35% of leads that would have gone cold.",
        },
        {
          icon: Target,
          title: "Quote follow-up sequence (7 days)",
          body: "Day 0: quote sent, confirmation text. Day 2: 'Any questions about the quote?' Day 4: address common objections proactively. Day 7: time-limited availability message. Each step adds information rather than just asking 'did you decide yet?' — which is what most businesses do manually (once).",
        },
        {
          icon: Users,
          title: "No-response re-engagement (30 days)",
          body: "For leads who received your initial sequence but never responded. Day 14: different angle message. Day 21: case study or testimonial relevant to their industry. Day 30: candid close — 'Not sure if the timing is right. We are here when you are ready.' This recovers 5-10% of otherwise dead leads.",
        },
        {
          icon: ArrowUpRight,
          title: "Post-appointment follow-up",
          body: "After an initial consultation or estimate: immediate summary email, 24-hour check-in text, 3-day decision nudge, 7-day final follow-up. Tailored to whether the lead expressed high intent or was still comparing options. The automation adjusts its urgency based on the lead's behavior.",
        },
      ],
    },
    {
      type: "table",
      title: "Follow-up timing benchmarks",
      subtitle:
        "What the data shows about response time and conversion rates:",
      headers: ["Conversion Impact", "Your Target"],
      rows: [
        {
          label: "Response in under 1 minute",
          values: ["391% higher conversion", "Automated instant response"],
        },
        {
          label: "Response in 1-5 minutes",
          values: ["8x more likely to qualify", "Automated with human handoff"],
        },
        {
          label: "Response in 30-60 minutes",
          values: ["21x less likely to qualify", "Unacceptable for high-value leads"],
        },
        {
          label: "No follow-up after initial response",
          values: ["44% of salespeople give up after 1 try", "Automated sequences solve this"],
        },
        {
          label: "5+ follow-up touches",
          values: ["80% of sales happen after 5+ contacts", "Only automation achieves this consistently"],
        },
      ],
    },
    {
      type: "considerations",
      title: "Follow-up automation best practices",
      subtitle:
        "The difference between effective follow-up and annoying spam:",
      items: [
        {
          icon: CheckCircle2,
          title: "Stop the sequence when the lead responds",
          body: "This is non-negotiable. If a lead replies to your day-3 message, the automated sequence must stop immediately and a human must take over. Nothing kills trust faster than receiving an automated follow-up after you already replied. Every sequence needs a response-detection trigger.",
        },
        {
          icon: AlertTriangle,
          title: "Add value in every message, not just 'checking in'",
          body: "Each follow-up should give the lead a reason to engage: a relevant tip, a case study, a specific availability window, or an answer to a common objection. 'Just checking in' and 'Did you get my last message?' are not follow-up — they are noise.",
        },
        {
          icon: Clock,
          title: "Vary timing and channel",
          body: "Do not send 5 texts in a row. Mix channels: text for immediacy, email for detail, a call for high-value leads. Vary timing: not every 24 hours on the dot. Slight variation (day 1, day 3, day 7) feels more natural than a rigid daily cadence.",
        },
        {
          icon: BarChart3,
          title: "Measure and adjust",
          body: "Track which messages get replies and which get ignored. If your day-3 message consistently gets zero response, rewrite it. If your day-7 message outperforms everything, move it earlier. Good follow-up automation is built once and refined continuously.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "How many follow-up messages is too many?",
      answer:
        "For a new lead that has never responded, 5-7 messages over 14-30 days is the sweet spot. For a lead who responded once and then went quiet, 3-4 messages over 7-14 days. For a lead who received a quote, 3-5 messages over 7 days. The key is that every message adds value — not just asks for a decision.",
    },
    {
      question: "Should I use text, email, or both?",
      answer:
        "Both. Text for time-sensitive messages (missed call text-back, appointment reminders, quick check-ins). Email for longer content (quotes, case studies, detailed information). Text has higher open rates (98% vs. 20% for email) but email allows more detail. The best sequences use both channels strategically.",
    },
    {
      question: "What tools do I need for follow-up automation?",
      answer:
        "At minimum: a CRM with automation features (GoHighLevel, HubSpot) or a CRM plus an automation tool (any CRM + n8n or Zapier). For AI-powered responses, add an AI layer through n8n or a platform with built-in AI. Most setups cost $50-$200/month in tools. Professional setup runs $2K-$4K.",
    },
    {
      question: "Do automated follow-ups feel robotic to leads?",
      answer:
        "Badly written ones do. Well-written automated messages are indistinguishable from manual ones. The trick is conversational tone, personalization (use the lead's name and service interest), and varying the format. Nobody can tell the difference between a well-crafted automated text and one typed by hand.",
    },
    {
      question: "How do I handle leads that respond mid-sequence?",
      answer:
        "Your automation must detect responses and stop the sequence immediately. Most CRM platforms and automation tools support this natively — look for 'stop on reply' or 'response detection' settings. When the lead responds, a task should be created for a human to continue the conversation personally.",
    },
  ],
  faqSubtitle:
    "Practical answers about lead follow-up automation",
  ctaHeading: "Stop losing leads to slow follow-up",
  ctaText:
    "Book a 30-minute call. We will map your current follow-up process, identify the gaps, and show you exactly which automation workflows will have the biggest impact on your close rate.",
  ctaSubtext:
    "No obligation. If your follow-up is already solid, we will tell you.",
  relatedLinks: [
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "AI email sequence automation", href: "/ai-email-sequence-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
