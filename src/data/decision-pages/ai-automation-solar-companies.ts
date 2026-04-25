import {
  Sun,
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
  slug: "ai-automation-for-solar-companies",
  metaTitle:
    "AI Automation for Solar Companies — Lead Follow-Up, Utility Bills, Project Updates | Dmytro AI",
  metaDescription:
    "AI automation for solar companies. Automate lead response, utility bill collection, site audit scheduling, and project status updates. Practical guide for solar installers.",
  badgeText: "Solar Industry",
  badgeIcon: Sun,
  h1: "AI Automation for Solar Companies",
  heroIntro:
    "Selling solar is a race against time. Every lead is expensive, and if you don't respond in seconds, they've already clicked the next ad. Once a lead is warm, project management becomes a communication nightmare: site audits, utility bills, financing approvals, and installation updates. AI automation handles the constant follow-up and document chasing so your sales team can focus on closing deals and your project managers can focus on the install.",
  heroSubtext:
    "Below: what solar company automation looks like in practice, where it delivers the most value, and how to decide if it is worth the investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a solar business",
      subtitle:
        "These automations handle the high-volume communication and document chasing that slows down solar projects:",
      items: [
        {
          icon: Phone,
          title: "Instant Lead Response",
          body: "Every lead from your website, Facebook ads, or Google LSA gets an instant text and email. Prospects hear from you in under 60 seconds, which is the single biggest driver of solar lead conversion.",
        },
        {
          icon: FileText,
          title: "Utility Bill Collection",
          body: "Automated reminders to homeowners to upload their utility bills. The system tracks what has been received and follows up on what is outstanding, so you don't have to manual chase docs for the quote.",
        },
        {
          icon: CalendarCheck,
          title: "Site Audit Scheduling",
          body: "Homeowners can self-schedule site audits and consultations. The system syncs with your reps' calendars, sends reminders to reduce no-shows, and handles rescheduling automatically.",
        },
        {
          icon: Clock,
          title: "Project Milestone Updates",
          body: "Automated SMS/email notifications at every stage: permit application submitted, equipment ordered, install date confirmed. Keeps the customer informed without manual calls.",
        },
        {
          icon: MessageSquare,
          title: "Financing Nurture",
          body: "Automated follow-up with leads who stalled at the financing stage. Clear the objections and keep the deal moving forward without your sales team getting bogged down.",
        },
        {
          icon: Users,
          title: "Referral & Review Requests",
          body: "Automatically request a Google review and a referral once the system is installed and PTO (Permission to Operate) is granted. Scale your word-of-mouth growth.",
        },
      ],
    },
    {
      type: "table",
      title: "Manual vs. automated solar operations",
      subtitle:
        "Solar companies that automate their communication cycle through the project faster:",
      headers: ["Automated", "Manual"],
      rows: [
        {
          label: "New Lead Response",
          values: [
            "Instant (under 60s) via SMS and Email",
            "Calls made when the rep has a break",
          ],
        },
        {
          label: "Document Chasing",
          values: [
            "System tracks and nudges for utility bills",
            "Staff calls/texts homeowner repeatedly",
          ],
        },
        {
          label: "Site Audit Booking",
          values: [
            "Homeowner picks time from live calendar",
            "Back-and-forth calls to find a slot",
          ],
        },
        {
          label: "Project Updates",
          values: [
            "Milestone-triggered status notifications",
            "Homeowner calls in asking for status",
          ],
        },
        {
          label: "Post-Install Reviews",
          values: [
            "Automatic request sent on PTO date",
            "Forgotten or sent weeks later",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your solar business?",
      subtitle:
        "Honest assessment. Automation delivers different results based on your current volume:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You spend over $2,000/month on lead generation",
            "You are losing deals because competitors call leads faster than you",
            "Project managers spend hours every week chasing utility bills and signatures",
            "Customers frequently call in asking for project status updates",
            "You have a sales team of 2+ people who need better lead distribution",
            "You want to increase your referral rate without manual effort",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You only handle 1-2 projects per month and can manage them manually",
            "You rely entirely on door-to-door leads with no digital presence",
            "You are looking for AI to handle the actual solar engineering/design",
            "You are not willing to invest $3K+ in a professional system build",
            "Your installation process is highly irregular and cannot be mapped to milestones",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What to keep in mind for solar automation",
      subtitle:
        "Solar has unique project timelines. Here is what matters for a successful build:",
      items: [
        {
          icon: Wrench,
          title: "CRM & Field Service Integration",
          body: "The automation should work with your existing tools — GoHighLevel, JobNimbus, or Aurora. We integrate at the communication and milestone layer to keep data in sync.",
        },
        {
          icon: BarChart3,
          title: "Lead Attribution Tracking",
          body: "Automated response systems should preserve lead source data. We ensure your marketing reports correctly show which ads are actually turning into audits and installs.",
        },
        {
          icon: Clock,
          title: "Milestone-Based Logic",
          body: "Project updates only work if they are tied to real milestones. We map your project stages (permit, finance, install) so the notifications feel accurate, not generic.",
        },
        {
          icon: Users,
          title: "Human Handoff Points",
          body: "Automation should never hide your team. We build clear 'exit ramps' where a human rep takes over for consultative selling and technical design questions.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same lead follow-up and project communication patterns that apply to solar companies:",
      studies: [
        {
          industry: "E-Commerce (Auto Parts)",
          headline: "5,000+ leads activated via CRM automation",
          body: "Automated CRM workflows organized untouched leads and created consistent follow-up sequences. For solar, this means no expensive lead goes cold.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Restaurant",
          headline: "100% after-hours inquiry capture",
          body: "AI handles all after-hours communication. For solar installers, this means homeowners who browse late at night get an immediate response.",
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
      question: "Which solar CRM do you work with?",
      answer:
        "We primarily build on GoHighLevel but can integrate with JobNimbus, Aurora, and other platforms via Zapier or Make (formerly Integromat). We verify your current stack during the strategy call.",
    },
    {
      question: "How do you automate utility bill collection?",
      answer:
        "The system sends a personalized secure upload link to the homeowner via SMS and email. It tracks the file arrival in your CRM. If the file isn't uploaded within 24 hours, it sends a polite reminder.",
    },
    {
      question: "Will this work for door-to-door leads?",
      answer:
        "Yes. While most impact is seen on digital leads, door-to-door reps can use a simple mobile form to trigger the follow-up and project update sequences immediately.",
    },
    {
      question: "What does it cost to set up?",
      answer:
        "A focused lead response and utility bill collection system runs $3K to $5K. A full project-milestone update and referral system typically runs $5K to $8K. Fixed pricing, no hidden fees.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Typically 2 to 4 weeks. We map your current project stages, build the automation sequences, test the logic, and then train your team on the new workflow.",
    },
  ],
  faqSubtitle:
    "Practical answers for solar companies considering AI automation",
  ctaHeading: "Ready to stop losing expensive leads and start closing more solar projects?",
  ctaText:
    "Book a 30-minute call. We will look at your lead follow-up and project management workflows, identify the leaks, and give you a clear plan for automation.",
  ctaSubtext:
    "No obligation. No hard sell. Just a practical conversation about your solar operations.",
  relatedLinks: [
    { label: "AI automation for HVAC companies", href: "/ai-automation-for-hvac-companies" },
    { label: "AI lead follow-up", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "GoHighLevel automation setup", href: "/gohighlevel-automation-setup" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
