import {
  Workflow,
  Phone,
  Mail,
  CalendarCheck,
  Star,
  Users,
  Clock,
  Database,
  MessageSquare,
  Bot,
  FileCheck,
  Zap,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "n8n-automation-examples-small-business",
  metaTitle:
    "n8n Automation Examples for Small Business — Real Workflows That Work | Dmytro AI",
  metaDescription:
    "Practical n8n automation examples for small businesses. Lead follow-up, CRM workflows, email sequences, scheduling, and review requests. Real workflows, not toy demos.",
  badgeText: "n8n Workflows",
  badgeIcon: Workflow,
  h1: "n8n Automation Examples for Small Business",
  heroIntro:
    "n8n is one of the most powerful automation platforms available to small businesses — but most tutorials show you toy examples that do not solve real problems. This page shows you actual n8n workflows that run in production for service businesses. Lead follow-up, CRM automation, email sequences, appointment scheduling, and more.",
  heroSubtext:
    "Below: practical n8n automation examples organized by use case, with honest guidance on complexity and what you need to get started.",
  sections: [
    {
      type: "cards",
      title: "Lead response and follow-up workflows",
      subtitle:
        "These are the workflows that generate the clearest ROI for most small businesses — getting back to leads faster and following up consistently:",
      items: [
        {
          icon: Phone,
          title: "Missed call text-back",
          body: "When a call goes unanswered, n8n detects the missed call via your phone system webhook, waits 30 seconds, then sends an automated text: 'Sorry we missed your call — how can we help?' Opens a conversation before the lead calls your competitor.",
        },
        {
          icon: MessageSquare,
          title: "Web form instant response",
          body: "New form submission triggers an n8n workflow that sends an immediate text and email to the lead, creates a CRM contact, assigns a follow-up task, and notifies your team on Slack. Lead response time goes from hours to seconds.",
        },
        {
          icon: Mail,
          title: "Multi-step lead nurture sequence",
          body: "Lead enters your CRM and n8n runs a timed follow-up sequence: immediate response, day 1 check-in, day 3 value message, day 7 soft close. If the lead responds at any point, the sequence stops and a human takes over.",
        },
        {
          icon: Database,
          title: "Database reactivation campaign",
          body: "n8n queries your CRM for contacts who have not engaged in 90+ days, segments them by service history, and runs a personalized re-engagement sequence. Turns dormant contacts into booked appointments.",
        },
      ],
    },
    {
      type: "cards",
      title: "Scheduling, onboarding, and operations",
      subtitle:
        "Workflows that save hours of repetitive admin work every week:",
      items: [
        {
          icon: CalendarCheck,
          title: "Appointment booking and reminders",
          body: "n8n connects your booking tool to your calendar, CRM, and notification system. When a client books, confirmations go out instantly. Reminders fire at 24 hours and 1 hour before the appointment. No-shows get a rebooking text.",
        },
        {
          icon: FileCheck,
          title: "Client onboarding pipeline",
          body: "New client triggers a workflow that sends an intake form, waits for completion, creates internal tasks, schedules the kickoff call, and moves the CRM deal through onboarding stages. All automatic.",
        },
        {
          icon: Star,
          title: "Post-job review requests",
          body: "After a job is marked complete in your CRM, n8n waits 2 hours and sends a review request text. Happy customers get a direct Google review link. Responses below a threshold route feedback to you privately first.",
        },
        {
          icon: Users,
          title: "Internal team notifications",
          body: "New lead assigned? Slack message. Appointment cancelled? Slack message plus CRM update. Invoice overdue? Email to the account manager plus a task in your project tool. n8n connects all your internal tools into one coordinated system.",
        },
      ],
    },
    {
      type: "table",
      title: "n8n workflow complexity guide",
      subtitle:
        "Not all automations are equal. Here is a realistic guide to what is simple, moderate, and advanced:",
      headers: ["Build Time", "Complexity", "DIY Feasible?"],
      rows: [
        {
          label: "Missed call text-back",
          values: ["2–4 hours", "Simple", "Yes, with some n8n experience"],
        },
        {
          label: "Form → CRM → notification",
          values: ["3–6 hours", "Simple", "Yes"],
        },
        {
          label: "Multi-step follow-up sequence",
          values: ["1–2 days", "Moderate", "Possible but error-prone"],
        },
        {
          label: "Appointment booking + reminders",
          values: ["1–2 days", "Moderate", "Possible with API experience"],
        },
        {
          label: "Full onboarding pipeline",
          values: ["3–5 days", "Advanced", "Likely need help"],
        },
        {
          label: "AI voice agent + n8n backend",
          values: ["1–2 weeks", "Advanced", "Professional build recommended"],
        },
        {
          label: "Database reactivation with AI personalization",
          values: ["3–5 days", "Advanced", "Professional build recommended"],
        },
      ],
    },
    {
      type: "considerations",
      title: "Why n8n for small business automation",
      subtitle:
        "n8n is not the only option, but here is why we use it for most client projects:",
      items: [
        {
          icon: Zap,
          title: "Self-hosted = no per-task pricing",
          body: "Unlike Zapier where costs scale with volume, self-hosted n8n has a flat cost. Run 100 workflows or 10,000 — the price does not change. For businesses with any meaningful volume, this saves thousands per year.",
        },
        {
          icon: Bot,
          title: "Native AI integration",
          body: "n8n has built-in nodes for OpenAI, Anthropic, and other AI providers. You can add AI-powered classification, response generation, and data extraction to any workflow without writing code.",
        },
        {
          icon: Clock,
          title: "Complex logic without code",
          body: "Branching, loops, error handling, wait nodes, and conditional paths are all visual. You can build sophisticated workflows that would require custom code in simpler tools.",
        },
        {
          icon: Database,
          title: "400+ integrations",
          body: "CRMs, email platforms, phone systems, calendars, payment processors, databases — n8n connects to everything. And if there is no native integration, the HTTP node handles any API.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Real results from n8n-powered automations",
      subtitle:
        "These projects were built on n8n workflows:",
      studies: [
        {
          industry: "Restaurant",
          headline: "AI voice agent powered by n8n backend",
          body: "n8n orchestrates the entire post-call workflow: logging call data, updating the CRM, sending follow-up messages, and routing urgent requests. The voice agent handles the conversation; n8n handles everything after.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "CRM automation with n8n workflows",
          body: "n8n workflows power the entire lead management system: automatic tagging, follow-up sequences, Slack notifications, and pipeline automation. Thousands of leads organized without manual work.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Info Business",
          headline: "50+ qualified leads per day automated",
          body: "n8n automates the full pipeline: scraping leads, enriching data, scoring quality, and delivering qualified contacts to the client's CRM. Zero manual work after setup.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "n8n vs Zapier for small business", href: "/n8n-vs-zapier-small-business" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Do I need to know how to code to use n8n?",
      answer:
        "For basic workflows, no. n8n is visual and drag-and-drop. For more complex automations — especially those involving APIs, data transformation, or AI — some technical comfort helps. That is where working with a consultant makes sense.",
    },
    {
      question: "Should I self-host n8n or use n8n Cloud?",
      answer:
        "For most small businesses, n8n Cloud is the easier starting point. Self-hosting saves money at scale and gives you full control, but requires a server and basic maintenance. We typically set up self-hosted for clients and handle the infrastructure.",
    },
    {
      question: "How does n8n compare to Zapier for small business?",
      answer:
        "Zapier is simpler for basic automations but gets expensive fast. n8n is more powerful, more flexible, and cheaper at volume. If you only need 2-3 simple automations, Zapier is fine. For anything more, n8n usually wins. See our detailed comparison.",
    },
    {
      question: "Can I start with one workflow and add more later?",
      answer:
        "Absolutely. That is the recommended approach. Start with the highest-ROI workflow (usually lead follow-up or missed call text-back), prove it works, then build from there. Each workflow is independent.",
    },
    {
      question: "What does it cost to have n8n workflows built for me?",
      answer:
        "Simple workflows run $500-$1.5K. Moderate workflows $1.5K-$3K. Complex multi-step systems $3K-$6K. We scope every project with fixed pricing before work starts. Monthly hosting for self-hosted n8n runs $10-$30.",
    },
  ],
  faqSubtitle:
    "Practical answers about n8n automation for small businesses",
  ctaHeading: "Ready to automate the repetitive work?",
  ctaText:
    "Book a 30-minute call. We will look at your current workflows, identify the best starting point, and show you what an n8n automation would look like for your business.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your automation needs.",
  relatedLinks: [
    { label: "n8n vs Zapier for small business", href: "/n8n-vs-zapier-small-business" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "Client onboarding automation", href: "/client-onboarding-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
