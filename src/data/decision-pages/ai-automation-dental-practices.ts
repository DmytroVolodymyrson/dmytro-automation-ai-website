import {
  Heart,
  Phone,
  CalendarCheck,
  MessageSquare,
  Clock,
  Star,
  CheckCircle2,
  XCircle,
  Users,
  Wrench,
  Bot,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-for-dental-practices",
  metaTitle:
    "AI Automation for Dental Practices — Patient Booking, Recalls, Follow-Up | Dmytro AI",
  metaDescription:
    "AI automation for dental practices. Automate patient booking, recall campaigns, appointment reminders, intake forms, and no-show follow-up. Practical guide for dental offices.",
  badgeText: "Dental Industry",
  badgeIcon: Heart,
  h1: "AI Automation for Dental Practices",
  heroIntro:
    "Your front desk is the bottleneck. They are answering phones, confirming appointments, chasing recall patients, and processing intake forms — all while trying to give the person standing in front of them a good experience. AI automation handles the repetitive communication so your team can focus on patients in the chair.",
  heroSubtext:
    "Below: what dental automation looks like in practice, where it delivers the clearest ROI, and how to decide if it is the right move for your practice.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in a dental practice",
      subtitle:
        "These are the automations we build most often for dental offices. Each one reduces front desk load without changing your clinical workflow:",
      items: [
        {
          icon: Phone,
          title: "New patient inquiry response",
          body: "Every website form submission, missed call, or Google inquiry gets an instant text and email. The patient hears from you before they call the practice down the street.",
        },
        {
          icon: CalendarCheck,
          title: "Online booking and confirmations",
          body: "Patients book appointments directly from your website or a text link. Automatic confirmations, reminders at 48h and 2h, and rescheduling options reduce no-shows.",
        },
        {
          icon: MessageSquare,
          title: "Recall and reactivation campaigns",
          body: "Automated outreach to patients overdue for cleanings, exams, or incomplete treatment plans. The system sends reminders at intervals you choose until they book or opt out.",
        },
        {
          icon: Clock,
          title: "No-show follow-up",
          body: "When a patient misses an appointment, an automated sequence goes out within minutes offering to reschedule. Recovers appointments that would otherwise be lost.",
        },
        {
          icon: Star,
          title: "Review request automation",
          body: "After every completed appointment, an automated text asks for a Google review. Happy patients get a direct link. Negative feedback gets routed to your office manager first.",
        },
        {
          icon: Bot,
          title: "After-hours call handling",
          body: "An AI voice agent or automated text-back answers after-hours calls. Captures booking requests, routes emergencies, and ensures no patient inquiry goes unanswered overnight.",
        },
      ],
    },
    {
      type: "table",
      title: "Automated vs. manual front desk operations",
      subtitle:
        "Dental practices that automate repetitive communication free up significant front desk time:",
      headers: ["Automated", "Manual"],
      rows: [
        {
          label: "New patient response",
          values: [
            "Under 60 seconds, including after hours",
            "Next business day if call was missed",
          ],
        },
        {
          label: "Appointment reminders",
          values: [
            "Automatic at scheduled intervals",
            "Staff calls each patient individually",
          ],
        },
        {
          label: "Recall outreach",
          values: [
            "Persistent multi-touch campaigns",
            "One postcard or phone call, then forgotten",
          ],
        },
        {
          label: "No-show follow-up",
          values: [
            "Automatic within minutes",
            "If someone remembers to call",
          ],
        },
        {
          label: "Review collection",
          values: [
            "Every patient, every time",
            "Only when staff remembers to ask",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your dental practice?",
      subtitle:
        "Honest assessment. Some practices benefit immediately. Others are not ready yet:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your front desk spends hours daily on phone calls and confirmations",
            "You have a backlog of recall patients who have not been contacted",
            "You lose new patients because your response time is slow",
            "No-shows are a consistent problem costing you chair time",
            "You want more Google reviews but your team never remembers to ask",
            "You are a multi-provider practice and scheduling is complex",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a solo practitioner with very low patient volume",
            "Your front desk is underutilized and not overwhelmed",
            "Your practice management software already handles all of this well",
            "You are not willing to invest $2K to $5K in a system build",
            "You have no online presence and do not get digital inquiries",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What to keep in mind for dental automation",
      subtitle:
        "Dental practices have specific requirements. Here is what matters:",
      items: [
        {
          icon: Wrench,
          title: "Practice management integration",
          body: "The automation should connect to your PMS (Dentrix, Eaglesoft, Open Dental, etc.) or at minimum sync with your scheduling system. We verify compatibility during the scoping call.",
        },
        {
          icon: Users,
          title: "Patient communication tone",
          body: "Automated messages need to feel professional and caring, not robotic. We draft the messaging with your team and you approve everything before it goes live.",
        },
        {
          icon: BarChart3,
          title: "Privacy and consent",
          body: "Patient communication must respect privacy requirements. The system handles opt-outs and we build with consent tracking. Your team reviews all messaging.",
        },
        {
          icon: Clock,
          title: "Timing and frequency",
          body: "Recall reminders, confirmations, and follow-ups need to be timed properly. Too many messages annoys patients. Too few means they forget. We calibrate the cadence with your input.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same appointment and follow-up automation patterns that apply directly to dental practices:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "AI voice agent handles all after-hours calls and routes booking requests. For dental, the same system captures patient inquiries and schedules appointments outside office hours.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of contacts reactivated",
          body: "Automated CRM workflows re-engaged dormant contacts. For dental, the same approach reactivates recall patients who have not been seen in 6 to 18 months.",
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
      question: "Will this integrate with my practice management software?",
      answer:
        "In most cases, yes. We work with Dentrix, Eaglesoft, Open Dental, and other common PMS platforms. If direct integration is not available, we connect through your scheduling or communication layer. We verify compatibility during the initial call.",
    },
    {
      question: "How does this work with patient privacy requirements?",
      answer:
        "We build the automation with consent tracking and opt-out management. All patient-facing messaging is reviewed and approved by your team before launch. We do not store patient health information in the automation layer.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "A booking and reminder system can be live in 1 to 2 weeks. A full system with recall campaigns, review automation, and after-hours coverage takes 2 to 4 weeks.",
    },
    {
      question: "What does it cost?",
      answer:
        "A focused automation (booking reminders, no-show follow-up) runs $2K to $3K. A comprehensive system with recall campaigns, review automation, and AI call handling runs $4K to $6K. Fixed pricing.",
    },
    {
      question: "Will patients be annoyed by automated messages?",
      answer:
        "Not if the messaging is well-written and properly timed. Patients actually prefer text confirmations over phone calls. The key is appropriate frequency and easy opt-out. We calibrate this with your team.",
    },
  ],
  faqSubtitle:
    "Practical answers for dental practices considering automation",
  ctaHeading: "Ready to free up your front desk?",
  ctaText:
    "Book a 30-minute call. We will look at your current patient communication workflow, identify where time and appointments are being lost, and give you a clear plan for automation.",
  ctaSubtext:
    "No obligation. No hard sell. Just a practical conversation about your dental practice.",
  relatedLinks: [
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
