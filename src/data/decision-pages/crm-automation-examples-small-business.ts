import {
  Database,
  Users,
  Mail,
  Phone,
  Tag,
  Bell,
  BarChart3,
  Zap,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "crm-automation-examples-small-business",
  metaTitle:
    "CRM Automation Examples for Small Business — Real Workflows | Dmytro AI",
  metaDescription:
    "Practical CRM automation examples for small businesses. Lead tagging, pipeline automation, follow-up triggers, task creation, and reporting workflows that actually work.",
  badgeText: "CRM Workflows",
  badgeIcon: Database,
  h1: "CRM Automation Examples for Small Business",
  heroIntro:
    "Your CRM should not be a glorified contact list. With the right automation, it becomes the engine that runs your lead follow-up, client communication, and operations. This page shows you real CRM automation workflows that small service businesses use every day — not theoretical possibilities, but systems that are running in production right now.",
  heroSubtext:
    "Below: practical CRM automation examples organized by use case, with honest guidance on complexity and what you need to get started.",
  sections: [
    {
      type: "cards",
      title: "Lead management automations",
      subtitle:
        "These workflows ensure no lead falls through the cracks — the biggest revenue leak for most small businesses:",
      items: [
        {
          icon: Tag,
          title: "Automatic lead tagging and scoring",
          body: "When a new lead enters your CRM, automation tags them based on source (web form, phone call, referral), service interest, and urgency. High-value leads get flagged immediately. Low-priority inquiries get added to a nurture sequence. Your team sees a prioritized list instead of a pile of unorganized contacts.",
        },
        {
          icon: Zap,
          title: "Instant lead assignment and notification",
          body: "New lead comes in — automation assigns it to the right team member based on territory, service type, or workload. The assigned person gets a Slack message or text immediately. No more leads sitting in an inbox for hours because nobody checked.",
        },
        {
          icon: Mail,
          title: "Pipeline stage triggers",
          body: "When a deal moves from 'New Lead' to 'Quote Sent,' the CRM automatically schedules a follow-up task for day 3, sends the client a 'what to expect' email, and updates the team dashboard. Each stage has its own set of automated actions. Nothing gets forgotten.",
        },
        {
          icon: Phone,
          title: "Stale lead re-engagement",
          body: "Leads sitting in the same pipeline stage for 7+ days trigger an automated check-in message. 14+ days triggers a different message. 30+ days moves them to a long-term nurture sequence. The CRM does the follow-up a busy team cannot consistently do.",
        },
      ],
    },
    {
      type: "cards",
      title: "Client communication automations",
      subtitle:
        "Keep clients informed without your team sending the same emails and texts manually:",
      items: [
        {
          icon: Bell,
          title: "Appointment reminders and confirmations",
          body: "Client books an appointment — CRM sends an immediate confirmation, a 24-hour reminder, and a 1-hour reminder. If the client does not confirm, a task appears for your team to call. After the appointment, a satisfaction check or review request fires automatically.",
        },
        {
          icon: FileCheck,
          title: "Onboarding drip sequences",
          body: "New client signed? The CRM triggers a welcome email, intake form, document request, and kickoff scheduling link — all timed and sequenced. Day 1: welcome. Day 2: intake form. Day 3: follow-up if form not completed. Day 7: kickoff call scheduling. Zero manual effort.",
        },
        {
          icon: Users,
          title: "Service completion follow-up",
          body: "Job marked complete in the CRM triggers a thank-you message, a Google review request (timed for 2 hours after completion), and a referral incentive email at day 7. Positive reviews feed back into the CRM as social proof data.",
        },
        {
          icon: BarChart3,
          title: "Renewal and reactivation campaigns",
          body: "Annual service coming due? Warranty expiring? Last visit was 90+ days ago? The CRM identifies these triggers and runs targeted campaigns automatically. Past clients who have not booked in 6 months get a re-engagement sequence. Renewal dates trigger reminders 30 days in advance.",
        },
      ],
    },
    {
      type: "table",
      title: "CRM automation complexity and tools",
      subtitle:
        "What you can build depends on your CRM platform and the automation layer on top of it:",
      headers: ["Built-In CRM", "CRM + Zapier", "CRM + n8n"],
      rows: [
        {
          label: "Lead tagging",
          values: ["Basic rules", "Multi-criteria rules", "AI-powered classification"],
        },
        {
          label: "Email sequences",
          values: ["Template sequences", "Conditional branching", "AI-personalized content"],
        },
        {
          label: "Task creation",
          values: ["Simple triggers", "Multi-step workflows", "Complex conditional logic"],
        },
        {
          label: "Cross-platform sync",
          values: ["Limited native integrations", "200+ app connections", "400+ with custom APIs"],
        },
        {
          label: "Reporting automation",
          values: ["Built-in reports", "Data push to sheets", "Custom dashboards + alerts"],
        },
        {
          label: "Monthly cost",
          values: ["$0 (included in CRM)", "$20–$100+ (per-task)", "$0–$50 (self-hosted)"],
        },
      ],
    },
    {
      type: "considerations",
      title: "CRM automation mistakes to avoid",
      subtitle:
        "These issues are more common than technical failures:",
      items: [
        {
          icon: AlertTriangle,
          title: "Automating before your data is clean",
          body: "Automation amplifies whatever is in your CRM. If your contacts are duplicated, mistagged, or outdated, automation will send the wrong messages to the wrong people at scale. Spend a day cleaning your CRM before automating anything. Remove duplicates, update tags, and archive stale contacts.",
        },
        {
          icon: Clock,
          title: "Over-automating communication",
          body: "Clients can tell when a message is robotic. Automate the trigger and the timing, but keep high-touch communications personal where it matters. Automated appointment reminders are fine. Automated 'just checking in' messages that sound like a bot erode trust.",
        },
        {
          icon: CheckCircle2,
          title: "Building automations nobody monitors",
          body: "Set-and-forget does not work for CRM automation. Review your automated sequences monthly. Check delivery rates, response rates, and unsubscribes. An automation that worked 6 months ago may need updating as your process evolves or your CRM data changes.",
        },
        {
          icon: Users,
          title: "Ignoring your team's workflow",
          body: "CRM automation should fit how your team actually works, not how you wish they worked. If your team ignores CRM tasks, adding more automated tasks will not fix the problem. Build automation around the tools and habits your team already uses — Slack, text, email — and route CRM actions there.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Real CRM automation results",
      subtitle:
        "These businesses transformed their CRM from a contact list into an operational engine:",
      studies: [
        {
          industry: "E-commerce",
          headline: "5,600+ leads managed with zero manual tagging",
          body: "Automated lead scoring, follow-up sequences, and pipeline management across thousands of contacts. CRM automation handles tagging, Slack notifications, and sequence triggers. Team focuses on closing, not organizing.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Info Business",
          headline: "50+ qualified leads per day into CRM automatically",
          body: "Instagram lead generation pipeline feeds directly into CRM with automatic qualification, tagging, and follow-up sequencing. $0.29 per qualified lead with zero manual data entry.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "GoHighLevel vs. custom CRM", href: "/gohighlevel-vs-custom-crm-small-business" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Which CRM is best for small business automation?",
      answer:
        "GoHighLevel is the most popular all-in-one CRM for service businesses because it includes built-in automation, SMS, email, and pipeline management. HubSpot is strong for businesses that need marketing automation. For maximum flexibility, pair any CRM with n8n for custom workflows. The best CRM is the one your team will actually use.",
    },
    {
      question: "Can I automate my CRM without coding?",
      answer:
        "Yes. Most CRM automation is no-code — drag-and-drop workflow builders, if-then rules, and template sequences. Tools like Zapier add cross-platform connections without code. For more complex automation (AI-powered lead scoring, multi-system orchestration), n8n or a consultant handles the technical side.",
    },
    {
      question: "How many automations should I start with?",
      answer:
        "Three to five. Start with: (1) instant lead notification, (2) automated lead tagging, (3) follow-up sequence for new leads, (4) appointment reminders, and (5) review request after service completion. These five cover the highest-impact areas and take 1-2 weeks to set up.",
    },
    {
      question: "What does CRM automation cost?",
      answer:
        "CRM subscription: $50-$300/month depending on platform. Automation layer: $0-$100/month (built-in or self-hosted). Professional setup: $1.5K-$4K for a CRM configured with 5-8 automations. Ongoing maintenance: $50-$200/month. Total first-year investment for a well-automated CRM: $3K-$8K.",
    },
    {
      question: "How long before I see results from CRM automation?",
      answer:
        "Lead response automations show results immediately — your response time drops from hours to seconds on day one. Follow-up sequence results appear in 2-4 weeks as leads progress through the pipeline. Full operational impact (time savings, pipeline visibility, consistent client experience) is usually clear within 60 days.",
    },
  ],
  faqSubtitle:
    "Practical answers about CRM automation for small businesses",
  ctaHeading: "Ready to make your CRM work for you?",
  ctaText:
    "Book a 30-minute call. We will look at your current CRM setup, identify the highest-impact automations, and show you what a fully automated pipeline looks like for your business.",
  ctaSubtext:
    "No obligation. If your CRM is already working well, we will tell you.",
  relatedLinks: [
    { label: "n8n automation examples", href: "/n8n-automation-examples-small-business" },
    { label: "GoHighLevel vs. custom CRM", href: "/gohighlevel-vs-custom-crm-small-business" },
    { label: "AI email sequence automation", href: "/ai-email-sequence-automation" },
    { label: "Lead follow-up automation examples", href: "/lead-follow-up-automation-examples" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
