import {
  Mail,
  Clock,
  MessageSquare,
  Users,
  Target,
  BarChart3,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Bot,
  Zap,
  ArrowUpRight,
  Star,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-email-sequence-automation",
  metaTitle:
    "AI Email Sequence Automation — Smarter Follow-Up for Small Business | Dmytro AI",
  metaDescription:
    "How AI email sequence automation works for small businesses. Automated follow-up, lead nurture, re-engagement campaigns, and personalized outreach. What works and where to start.",
  badgeText: "Email Automation",
  badgeIcon: Mail,
  h1: "AI Email Sequence Automation for Small Business",
  heroIntro:
    "Most small businesses have email follow-up that is either nonexistent or painfully manual. Someone closes a deal and forgets to send the welcome sequence. A lead fills out a form and nobody responds for two days. A quote goes out and nobody follows up. AI email sequence automation fixes this — not by blasting generic templates, but by running intelligent, timed, and personalized email sequences that actually get responses.",
  heroSubtext:
    "Below: what AI email sequences look like in practice, where they deliver the most value, and what makes AI-powered sequences different from basic drip campaigns.",
  sections: [
    {
      type: "cards",
      title: "Email sequences that move the needle",
      subtitle:
        "These are the sequences with the clearest ROI for small businesses. Most companies start with 1-2 and expand:",
      items: [
        {
          icon: Zap,
          title: "Instant lead response",
          body: "New lead comes in from a web form, ad, or referral. Within 60 seconds, they get a personalized email acknowledging their inquiry and outlining next steps. Response time is the single biggest factor in lead conversion.",
        },
        {
          icon: MessageSquare,
          title: "Multi-step lead nurture",
          body: "Leads that do not convert immediately enter a timed sequence: value content on day 2, social proof on day 5, soft close on day 7, final follow-up on day 14. If they engage at any point, the sequence adapts.",
        },
        {
          icon: Target,
          title: "Quote and estimate follow-up",
          body: "Proposal sent but not signed? Automated follow-up at 2 days, 5 days, and 14 days. Each email adds value — answering common objections, sharing relevant case studies, or offering to clarify scope.",
        },
        {
          icon: Users,
          title: "Client onboarding drip",
          body: "New client starts and gets a structured sequence: welcome and expectations on day 0, setup instructions on day 1, first milestone check-in on day 5, feedback request on day 14.",
        },
        {
          icon: ArrowUpRight,
          title: "Database reactivation",
          body: "Past clients and cold leads get a re-engagement sequence: relevant update, limited-time offer, or seasonal prompt. Turns contacts sitting idle in your CRM back into active conversations.",
        },
        {
          icon: Star,
          title: "Post-service review and referral",
          body: "After a job is completed, a timed sequence requests a Google review, then a week later asks for referrals. Automated but personal enough to feel genuine.",
        },
      ],
    },
    {
      type: "prose",
      title: "What makes AI email sequences different from basic drip campaigns",
      subtitle:
        "The difference between a Mailchimp drip and an AI-powered sequence:",
      blocks: [
        {
          heading: "Timing adapts based on behavior",
          body: "Basic drips fire on a fixed schedule regardless of engagement. AI sequences adjust timing based on opens, clicks, replies, and other signals. If a lead opens every email but never replies, the sequence adjusts the approach. If they go dark, it pauses before becoming annoying.",
        },
        {
          heading: "Content is personalized beyond merge fields",
          body: "AI can tailor the email body based on the lead's industry, inquiry type, location, or previous interactions. Instead of 'Hi {first_name}, thanks for your interest,' you get a message that references their specific situation. This is not about replacing human writing — it is about scaling the personalization your best salesperson already does manually.",
        },
        {
          heading: "Sequences stop when they should",
          body: "Smart exit conditions are critical. The sequence stops when the lead replies, books a call, converts, or explicitly opts out. No more embarrassing follow-ups to someone who already signed up yesterday. This requires integration between your email tool, CRM, and scheduling system — which is where workflow automation comes in.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is AI email automation right for your business?",
      subtitle:
        "Honest assessment — this is not for every situation:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You get 10+ new leads per month and follow-up is inconsistent",
            "You send quotes or proposals and rarely follow up systematically",
            "Your sales cycle is longer than one interaction",
            "You have past clients you have not contacted in months",
            "You use a CRM but email follow-up is still manual",
            "You want to look like you have a sales team even though you do not",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You get fewer than 5 leads per month — manual follow-up is fine",
            "Every deal is unique and cannot be templated at all",
            "Your clients are allergic to email (some industries are phone-only)",
            "You do not have a CRM or any way to track contacts",
            "You want a mass email blast tool, not intelligent sequences",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI of email sequence automation",
      subtitle:
        "The numbers are straightforward for most service businesses:",
      items: [
        {
          icon: TrendingUp,
          title: "Lead conversion improvement",
          body: "Responding to leads within 60 seconds instead of hours dramatically improves conversion rates. For service businesses, the difference between a 5-minute response and a 5-hour response can mean losing the job entirely.",
        },
        {
          icon: BarChart3,
          title: "Quote follow-up recovery",
          body: "Most service businesses send quotes and never follow up systematically. Even a modest improvement in quote-to-close rate from automated follow-up adds up significantly over a year.",
        },
        {
          icon: Clock,
          title: "Time savings",
          body: "Manually sending follow-up emails, checking who needs a reminder, and personalizing outreach takes 5-10 hours per week for a busy sales process. Automation handles the routine while you handle the conversations that matter.",
        },
        {
          icon: Bot,
          title: "Consistency",
          body: "The biggest value might be consistency. Every lead gets followed up with. Every quote gets a reminder. Every new client gets a proper welcome. No more leads falling through cracks because someone was busy or forgot.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar builds",
      subtitle:
        "These projects use the same email and follow-up automation patterns:",
      studies: [
        {
          industry: "E-Commerce",
          headline: "Thousands of leads with automated follow-up",
          body: "Automated email and SMS sequences organized and nurtured thousands of leads. The same sequence logic powers lead nurture, re-engagement, and follow-up for any service business.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Info Business",
          headline: "50+ qualified leads per day at $0.29 each",
          body: "Automated pipeline with qualification and outreach at scale. The lead scoring and sequence logic applies directly to email automation for service businesses.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "Client onboarding automation", href: "/client-onboarding-automation" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What tools do you use for AI email sequences?",
      answer:
        "n8n for workflow orchestration, your existing CRM or GoHighLevel for contact management and email sending, and AI (OpenAI or Anthropic) for personalization where it adds value. The specific stack depends on what you already use.",
    },
    {
      question: "Will my emails end up in spam?",
      answer:
        "Deliverability depends on your domain reputation, email volume, and content quality. We configure proper DNS records (SPF, DKIM, DMARC), use warm-up sequences for new sending domains, and keep email content conversational — not promotional. Automated does not mean spammy.",
    },
    {
      question: "How many emails should be in a sequence?",
      answer:
        "For lead nurture, 4-7 emails over 2-3 weeks is typical. For quote follow-up, 3-4 over 2 weeks. For onboarding, 5-8 over the first month. The right number depends on your sales cycle and how much value you can deliver in each email.",
    },
    {
      question: "Can sequences include SMS and email together?",
      answer:
        "Yes. Multi-channel sequences (email + SMS) consistently outperform email-only. A typical pattern: instant SMS response, follow-up email 30 minutes later, SMS check-in on day 2, email with case study on day 5. We build these as coordinated workflows.",
    },
    {
      question: "What does it cost?",
      answer:
        "A single email sequence (e.g., lead nurture or quote follow-up) runs $1K-$2K. A multi-sequence system covering lead response, nurture, onboarding, and reactivation runs $3K-$5K. Fixed pricing, scoped before work starts.",
    },
  ],
  faqSubtitle:
    "Practical answers about AI email automation for small businesses",
  ctaHeading: "Stop losing leads to inconsistent follow-up",
  ctaText:
    "Book a 30-minute call. We will look at your current email workflow, identify the biggest gaps, and map out the sequences that will have the most impact.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your follow-up process.",
  relatedLinks: [
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "n8n automation examples for small business", href: "/n8n-automation-examples-small-business" },
    { label: "Client onboarding automation", href: "/client-onboarding-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
