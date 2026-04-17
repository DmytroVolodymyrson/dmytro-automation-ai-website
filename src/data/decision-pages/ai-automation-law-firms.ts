import {
  Scale,
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
  slug: "ai-automation-for-law-firms",
  metaTitle:
    "AI Automation for Law Firms — Client Intake, Follow-Up, Scheduling | Dmytro AI",
  metaDescription:
    "AI automation for law firms. Automate client intake, consultation booking, lead follow-up, and case status updates. What works for small to mid-size practices.",
  badgeText: "Legal Industry",
  badgeIcon: Scale,
  h1: "AI Automation for Law Firms",
  heroIntro:
    "Potential clients contact your firm and hear nothing for hours — or days. They call during court, after hours, or on weekends when nobody picks up. By the time someone follows up, they have already retained another attorney. AI automation handles the intake, follow-up, and scheduling so every inquiry gets a fast, professional response.",
  heroSubtext:
    "Below: what law firm automation looks like in practice, where it helps most, and how to evaluate whether it is a fit for your practice.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a law firm",
      subtitle:
        "These automations are built for the business operations side of your practice, not legal work itself:",
      items: [
        {
          icon: Phone,
          title: "Instant inquiry response",
          body: "Every website form, missed call, or directory inquiry gets an instant text and email. The prospect gets a professional response in under 60 seconds, even at 10 PM on a Saturday.",
        },
        {
          icon: FileText,
          title: "Client intake automation",
          body: "Automated intake forms sent immediately after a prospect books a consultation. Collects key details — case type, timeline, prior representation — before your first meeting.",
        },
        {
          icon: CalendarCheck,
          title: "Consultation scheduling",
          body: "Prospects self-schedule consultations based on your availability. Automated confirmations, reminders, and rescheduling options. No phone tag with your receptionist.",
        },
        {
          icon: MessageSquare,
          title: "Lead nurture for unconverted consultations",
          body: "Prospects who consulted but did not retain get a follow-up sequence. Stays professional and persistent without your team manually tracking who needs a nudge.",
        },
        {
          icon: Clock,
          title: "Case status updates",
          body: "Automated status updates to clients at defined milestones. Reduces the volume of status inquiry calls and emails your team handles daily.",
        },
        {
          icon: Bot,
          title: "After-hours call handling",
          body: "AI voice agent or automated text-back for calls outside business hours. Captures the inquiry, qualifies urgency, and routes appropriately. No more lost prospects overnight.",
        },
      ],
    },
    {
      type: "table",
      title: "Manual vs. automated law firm intake",
      subtitle:
        "The intake process is where most law firms lose the highest percentage of potential clients:",
      headers: ["Automated", "Manual"],
      rows: [
        {
          label: "Inquiry response time",
          values: [
            "Under 60 seconds, 24/7",
            "Next business day for after-hours inquiries",
          ],
        },
        {
          label: "Intake form completion",
          values: [
            "Sent instantly after booking, tracked automatically",
            "Emailed manually, followed up if remembered",
          ],
        },
        {
          label: "Consultation scheduling",
          values: [
            "Self-service, synced to calendar",
            "3 to 5 phone calls to find a mutual time",
          ],
        },
        {
          label: "Follow-up on unconverted leads",
          values: [
            "Automated multi-touch sequence",
            "Rarely happens after initial consultation",
          ],
        },
        {
          label: "Client status inquiries",
          values: [
            "Proactive automated updates",
            "Reactive phone calls and emails",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your law firm?",
      subtitle:
        "Honest assessment. Automation works well for firms with certain characteristics:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You get 15+ inquiries per month and cannot respond to all of them quickly",
            "Your receptionist or paralegal spends hours on scheduling and intake",
            "You lose prospects because they call after hours or during court",
            "You run a practice area with high inquiry volume (PI, family, immigration, criminal)",
            "You want to convert more consultations into retained clients",
            "You are a small to mid-size firm (1 to 15 attorneys)",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You handle fewer than 5 new matters per month",
            "Your practice is entirely referral-based with no inbound marketing",
            "You need AI to do substantive legal work (document review, research)",
            "You are not comfortable with any automated client communication",
            "You are not willing to invest $2K to $5K in a system build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important considerations for law firm automation",
      subtitle:
        "Legal practices have specific requirements that automation must respect:",
      items: [
        {
          icon: Scale,
          title: "Ethics and confidentiality",
          body: "Automated messages should not create attorney-client relationships or provide legal advice. We build intake and follow-up workflows; your team handles all substantive communication.",
        },
        {
          icon: Users,
          title: "Professional tone",
          body: "Every automated message represents your firm. We draft messaging that is professional, empathetic, and appropriate for legal prospects. You review and approve all copy.",
        },
        {
          icon: Wrench,
          title: "Practice management integration",
          body: "We integrate with Clio, PracticePanther, MyCase, Lawmatics, and common law firm tools. The automation works alongside your existing software.",
        },
        {
          icon: BarChart3,
          title: "Conflict checking",
          body: "Intake automation collects party names and case details upfront so your team can run conflict checks before the consultation, not during it.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies demonstrate the same intake and follow-up automation patterns that apply to law firms:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours inquiries captured",
          body: "AI voice agent handles all after-hours calls and routes complex requests to humans. For law firms, the same system captures prospective client details and schedules consultations.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and reactivated",
          body: "Automated CRM workflows organized untouched contacts and built consistent follow-up. For law firms, this means no consultation inquiry gets forgotten.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Will automated messages create attorney-client privilege issues?",
      answer:
        "No. Automated intake and follow-up messages do not provide legal advice or create attorney-client relationships. They handle scheduling, information collection, and follow-up only. We include appropriate disclaimers and your team reviews all messaging.",
    },
    {
      question: "Can this integrate with Clio or my existing practice management software?",
      answer:
        "Yes. We integrate with Clio, PracticePanther, MyCase, Lawmatics, and other common legal practice management platforms. We verify compatibility during the scoping call.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "An intake and scheduling system can be live in 1 to 2 weeks. A full system with lead nurture, case status updates, and after-hours coverage takes 2 to 4 weeks.",
    },
    {
      question: "What does it cost?",
      answer:
        "A focused intake and scheduling automation runs $2K to $4K. A comprehensive system with nurture sequences, status updates, and AI call handling runs $4K to $6K. Fixed pricing, scoped upfront.",
    },
    {
      question: "What practice areas benefit most?",
      answer:
        "High-volume practice areas — personal injury, family law, immigration, criminal defense, estate planning — see the biggest impact because they have the most inbound inquiries and the highest cost of a missed lead.",
    },
  ],
  faqSubtitle:
    "Practical answers for law firms considering automation",
  ctaHeading: "Stop losing clients to slow intake",
  ctaText:
    "Book a 30-minute call. We will look at your current intake process, identify where prospects are falling through the cracks, and give you a clear plan.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your firm's operations.",
  relatedLinks: [
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "AI automation for accounting firms", href: "/ai-automation-for-accounting-firms" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
