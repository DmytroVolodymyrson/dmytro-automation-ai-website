import {
  CalendarCheck,
  Bell,
  Clock,
  MessageSquare,
  CheckCircle2,
  XCircle,
  TrendingUp,
  BarChart3,
  Bot,
  Users,
  Mail,
  Zap,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "booking-confirmation-and-reminder-automation",
  metaTitle:
    "Booking Confirmation & Reminder Automation — Reduce No-Shows for Service Businesses | Dmytro AI",
  metaDescription:
    "How booking confirmation and reminder automation works for service businesses. Automated confirmations, multi-step reminders, rescheduling flows, and no-show reduction. Practical guide.",
  badgeText: "Scheduling",
  badgeIcon: CalendarCheck,
  h1: "Booking Confirmation and Reminder Automation",
  heroIntro:
    "You book the appointment. The customer confirms. Then they forget, double-book, or just do not show up. No-shows cost service businesses thousands per month in lost revenue and wasted time slots. Booking confirmation and reminder automation sends the right messages at the right times — confirmation immediately, reminder the day before, final reminder the morning of — and gives customers an easy way to reschedule instead of ghosting.",
  heroSubtext:
    "Below: what a proper confirmation and reminder system looks like, how it reduces no-shows, and what kind of businesses benefit most.",
  sections: [
    {
      type: "cards",
      title: "What a confirmation and reminder system includes",
      subtitle:
        "These are the building blocks. Most businesses start with confirmations and reminders, then add rescheduling and feedback loops:",
      items: [
        {
          icon: Zap,
          title: "Instant booking confirmation",
          body: "The moment an appointment is booked, the customer gets a confirmation via SMS and email with date, time, location, and what to bring or prepare. Sets expectations from the start.",
        },
        {
          icon: Bell,
          title: "Multi-step reminders",
          body: "Automated reminders at 24 hours, 2 hours, or custom intervals before the appointment. SMS, email, or both. Each reminder includes a one-tap confirm or reschedule option.",
        },
        {
          icon: MessageSquare,
          title: "Easy rescheduling",
          body: "Instead of calling to cancel, customers can reschedule with a single tap from the reminder. This turns potential no-shows into rebooked appointments instead of lost revenue.",
        },
        {
          icon: Clock,
          title: "Waitlist management",
          body: "When someone cancels or reschedules, the freed slot can be automatically offered to the next person on the waitlist. Fills gaps without manual phone calls.",
        },
        {
          icon: Users,
          title: "Staff notifications",
          body: "Your team gets real-time updates when appointments are confirmed, rescheduled, or cancelled. No more checking the calendar every 15 minutes to see if the next slot is still happening.",
        },
        {
          icon: Mail,
          title: "Post-appointment follow-up",
          body: "After the appointment, automated follow-up requests a review, schedules the next visit, or sends care instructions. Extends the automation beyond just getting them through the door.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is reminder automation right for your business?",
      subtitle:
        "If no-shows cost you money, this is almost always worth it. But here is the honest breakdown:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Strong fit",
          variant: "green",
          items: [
            "Your no-show rate is above 10%",
            "Each missed appointment has a real cost (time, lost revenue, staff idle time)",
            "You book appointments more than 24 hours in advance",
            "Your customers are used to receiving text reminders from other businesses",
            "You use a calendar or scheduling tool that supports integrations",
            "You want to reduce the admin time spent on confirmation calls",
          ],
        },
        {
          icon: XCircle,
          heading: "Not needed yet",
          variant: "neutral",
          items: [
            "Your no-show rate is already below 5%",
            "Most of your appointments are same-day or walk-in",
            "You have a receptionist who already calls to confirm every appointment",
            "Your customers do not respond well to automated messages",
            "Your business does not lose money when someone does not show up",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How reminder timing affects no-show rates",
      subtitle:
        "The timing of your reminders matters more than the content:",
      blocks: [
        {
          heading: "24-hour reminder: the critical touchpoint",
          body: "A reminder 24 hours before the appointment gives the customer enough time to reschedule if needed, but is close enough to keep the appointment top of mind. This single reminder typically reduces no-shows by 25-40% on its own.",
        },
        {
          heading: "Same-day reminder: the final nudge",
          body: "A reminder 2-3 hours before the appointment catches people who confirmed yesterday but forgot this morning. Keep it short: 'Reminder: your appointment with [Business] is at [time] today. Reply R to reschedule.' This adds another 10-15% reduction.",
        },
        {
          heading: "Confirmation request vs passive reminder",
          body: "Active confirmation requests ('Reply YES to confirm') outperform passive reminders ('Your appointment is tomorrow'). When someone actively confirms, they are psychologically committed. When they do not respond, your team knows to follow up or open the slot.",
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI of booking reminders",
      subtitle:
        "The payoff is easy to calculate because no-shows have a direct dollar cost:",
      items: [
        {
          icon: TrendingUp,
          title: "Revenue recovered from reduced no-shows",
          body: "A business with 50 appointments per week and a 15% no-show rate loses 7-8 appointments weekly. At $150 per appointment, that is over $1,000/week in lost revenue. Cutting no-shows in half recovers $500+/week.",
        },
        {
          icon: BarChart3,
          title: "Time savings",
          body: "Manual confirmation calls take 3-5 minutes each. At 50 appointments per week, that is 2-4 hours of phone time. Automation eliminates this entirely and does it more consistently.",
        },
        {
          icon: Clock,
          title: "Better schedule utilization",
          body: "When cancellations come in early (via easy rescheduling), you can fill the slot from a waitlist. Late cancellations and no-shows leave gaps that cannot be filled. Earlier notice means more billable hours.",
        },
        {
          icon: Bot,
          title: "Implementation cost",
          body: "A confirmation and reminder system is one of the most affordable automations to build. Basic setups run $1K-$2K with monthly SMS costs of $20-$50. The payback period is typically measured in days, not months.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Related automation builds",
      subtitle:
        "These projects use the same scheduling and follow-up patterns:",
      studies: [
        {
          industry: "Restaurant",
          headline: "AI-powered reservation management",
          body: "AI voice agent handles booking, confirmations, and follow-up automatically. The same confirmation and reminder logic applies to any appointment-based business.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI appointment setter", href: "/ai-appointment-setter" },
        { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
        { label: "Client onboarding automation", href: "/client-onboarding-automation" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What channels do reminders go through?",
      answer:
        "SMS is the most effective channel for reminders due to near-100% open rates. Email is a good backup. Most systems send SMS as the primary channel with an email copy. Some businesses add voice call reminders for high-value appointments.",
    },
    {
      question: "Can customers reschedule directly from the reminder?",
      answer:
        "Yes. The reminder includes a link to reschedule or a simple reply keyword. This is critical — making it easy to reschedule converts potential no-shows into rebooked appointments instead of empty slots.",
    },
    {
      question: "How many reminders should I send?",
      answer:
        "Two is the sweet spot for most businesses: one at 24 hours and one at 2-3 hours before. More than three and you risk annoying the customer. Fewer than two and you leave no-show reduction on the table.",
    },
    {
      question: "Does this integrate with my scheduling tool?",
      answer:
        "Yes. We integrate with Google Calendar, Calendly, Acuity, GoHighLevel, and most scheduling tools that have APIs or webhooks. If your tool supports it, we can connect to it.",
    },
    {
      question: "What does it cost?",
      answer:
        "A basic confirmation and reminder system runs $1K-$2K. A full system with rescheduling flows, waitlist management, and post-appointment follow-up runs $2K-$4K. SMS costs are typically $20-$50/month depending on volume.",
    },
  ],
  faqSubtitle:
    "Practical answers about booking confirmation and reminder automation",
  ctaHeading: "Stop losing revenue to no-shows",
  ctaText:
    "Book a 30-minute call. We will look at your current no-show rate, estimate what it is costing you, and map out a reminder system that fits your workflow.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your scheduling gaps.",
  relatedLinks: [
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
    { label: "Client onboarding automation", href: "/client-onboarding-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
