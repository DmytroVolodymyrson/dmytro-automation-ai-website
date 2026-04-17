import {
  Calculator,
  Phone,
  CalendarCheck,
  MessageSquare,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  Users,
  Wrench,
  Bot,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-for-accounting-firms",
  metaTitle:
    "AI Automation for Accounting Firms — Client Onboarding, Document Collection, Follow-Up | Dmytro AI",
  metaDescription:
    "AI automation for accounting firms. Automate client onboarding, document collection, appointment scheduling, and seasonal workflows. Practical guide for CPA and bookkeeping practices.",
  badgeText: "Accounting Industry",
  badgeIcon: Calculator,
  h1: "AI Automation for Accounting Firms",
  heroIntro:
    "Tax season crushes your team every year. Document collection alone eats up hundreds of hours of follow-up calls and emails. New client onboarding stalls because intake forms sit incomplete. And between January and April, your staff barely has time to eat lunch. AI automation handles the repetitive communication — document chasing, appointment scheduling, client follow-up — so your team focuses on the work that requires their expertise.",
  heroSubtext:
    "Below: what accounting firm automation looks like in practice, where it delivers the most value, and how to decide if it is worth the investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in an accounting firm",
      subtitle:
        "These automations handle the operational side of your practice. They do not replace your accountants — they free them from admin work:",
      items: [
        {
          icon: FileText,
          title: "Document collection automation",
          body: "Automated reminders for missing documents — W-2s, 1099s, receipts, bank statements. The system tracks what has been received and follows up on what is outstanding, per client.",
        },
        {
          icon: Users,
          title: "Client onboarding sequences",
          body: "New clients receive a structured onboarding flow: engagement letter, intake form, document checklist, and scheduling link. Everything arrives in order without manual follow-up.",
        },
        {
          icon: CalendarCheck,
          title: "Appointment scheduling",
          body: "Clients self-schedule tax prep meetings, quarterly reviews, and consultations. Syncs with your calendar, sends reminders, and handles rescheduling automatically.",
        },
        {
          icon: Phone,
          title: "New prospect response",
          body: "Every website inquiry or referral gets an instant text and email. Prospects hear from you in under 60 seconds instead of waiting for someone to check the inbox.",
        },
        {
          icon: Clock,
          title: "Seasonal campaign automation",
          body: "Tax season prep reminders, quarterly filing nudges, year-end planning outreach. Campaigns that run at the right time every year without manual setup.",
        },
        {
          icon: MessageSquare,
          title: "Client re-engagement",
          body: "Automated outreach to inactive clients and prospects who inquired but never engaged. Turn your contact list into a source of new business.",
        },
      ],
    },
    {
      type: "table",
      title: "Manual vs. automated accounting operations",
      subtitle:
        "The firms that automate their client communication spend more time on billable work:",
      headers: ["Automated", "Manual"],
      rows: [
        {
          label: "Document follow-up",
          values: [
            "Automatic reminders per client, per document",
            "Staff calls or emails each client individually",
          ],
        },
        {
          label: "Client onboarding",
          values: [
            "Structured sequence delivered automatically",
            "Ad-hoc emails and phone calls over days",
          ],
        },
        {
          label: "Appointment scheduling",
          values: [
            "Self-service booking with reminders",
            "Back-and-forth phone calls and emails",
          ],
        },
        {
          label: "Tax season prep reminders",
          values: [
            "Scheduled campaigns that run every year",
            "Scramble to send reminders in January",
          ],
        },
        {
          label: "Prospect follow-up",
          values: [
            "Consistent multi-touch sequences",
            "One call, then forgotten",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your firm?",
      subtitle:
        "Honest assessment. Automation helps some accounting practices more than others:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Document collection eats up significant staff hours during tax season",
            "New client onboarding is inconsistent and takes too long",
            "You lose prospects because your response time is slow",
            "Your team spends more time on admin than on client-facing work",
            "You want to grow your client base without adding more admin staff",
            "You have 50+ clients and the volume makes manual follow-up unsustainable",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You have a very small client base and can manage everything manually",
            "Your practice management software already handles all communication well",
            "You are looking for AI to do the actual accounting work",
            "You are not willing to invest $2K to $5K in a system build",
            "Your client communication does not follow predictable patterns",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What to keep in mind for accounting automation",
      subtitle:
        "Accounting firms have specific requirements. Here is what matters:",
      items: [
        {
          icon: Wrench,
          title: "Practice management integration",
          body: "The automation should work with your existing tools — QuickBooks, Xero, TaxDome, Karbon, or CCH. We integrate at the communication and scheduling layer, not the accounting layer.",
        },
        {
          icon: BarChart3,
          title: "Client data security",
          body: "Automated communication does not transmit sensitive financial data. Document collection links use secure portals. We build with privacy in mind and your team reviews all workflows.",
        },
        {
          icon: Clock,
          title: "Seasonal timing",
          body: "The best time to set up automation is before your busy season, not during it. Most firms implement in Q3 or Q4 so the system is running smoothly by January.",
        },
        {
          icon: Users,
          title: "Client communication tone",
          body: "Automated messages should match your firm's professional voice. We draft messaging with your team and you approve everything before it goes live.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same client communication and follow-up patterns that apply to accounting firms:",
      studies: [
        {
          industry: "E-Commerce",
          headline: "Thousands of contacts organized and reactivated",
          body: "Automated CRM workflows organized untouched contacts and created consistent follow-up. For accounting firms, this means no client or prospect falls through the cracks.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Restaurant",
          headline: "100% of after-hours inquiries captured",
          body: "AI handles all after-hours communication. For accounting firms, this means prospects who inquire on evenings and weekends get an immediate response.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Will this integrate with my practice management software?",
      answer:
        "In most cases, yes. We integrate with TaxDome, Karbon, Canopy, and other common platforms at the communication and scheduling layer. We verify compatibility during the initial call.",
    },
    {
      question: "How does document collection automation work?",
      answer:
        "The system sends each client a personalized document checklist with secure upload links. As documents come in, the system marks them complete. Missing items trigger automated reminders at intervals you set.",
    },
    {
      question: "When is the best time to implement this?",
      answer:
        "Q3 or Q4 — before your busy season. Implementation takes 2 to 4 weeks, and you want the system running smoothly before the rush starts. That said, we can implement at any time.",
    },
    {
      question: "What does it cost?",
      answer:
        "A focused automation (document collection and scheduling) runs $2K to $4K. A full system with onboarding, seasonal campaigns, and prospect follow-up runs $4K to $6K. Fixed pricing.",
    },
    {
      question: "Is this for tax firms only?",
      answer:
        "No. We work with tax practices, bookkeeping firms, advisory practices, and full-service CPA firms. The automations apply to any accounting practice that communicates regularly with clients.",
    },
  ],
  faqSubtitle:
    "Practical answers for accounting firms considering automation",
  ctaHeading: "Ready to stop chasing documents and start closing clients?",
  ctaText:
    "Book a 30-minute call. We will look at your client communication workflow, identify where time is being lost, and give you a clear plan for automation.",
  ctaSubtext:
    "No obligation. No hard sell. Just a practical conversation about your practice operations.",
  relatedLinks: [
    { label: "AI automation for law firms", href: "/ai-automation-for-law-firms" },
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
