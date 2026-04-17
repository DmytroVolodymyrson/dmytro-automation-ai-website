import {
  UserX,
  Bell,
  CalendarCheck,
  MessageSquare,
  Clock,
  CheckCircle2,
  XCircle,
  TrendingUp,
  BarChart3,
  Bot,
  Users,
  Zap,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "no-show-reduction-automation",
  metaTitle:
    "No-Show Reduction Automation — Cut Missed Appointments by 50%+ | Dmytro AI",
  metaDescription:
    "How no-show reduction automation works for service businesses. Automated reminders, confirmation requests, easy rescheduling, and deposit workflows. Practical guide to cutting no-shows.",
  badgeText: "Revenue Protection",
  badgeIcon: UserX,
  h1: "No-Show Reduction Automation",
  heroIntro:
    "No-shows are not just annoying — they are expensive. Every missed appointment is wasted time, lost revenue, and a slot that could have gone to someone else. For most service businesses, no-shows run 10-25% of booked appointments. That adds up to thousands per month in lost income. No-show reduction automation uses a combination of confirmation requests, timed reminders, easy rescheduling, and deposit workflows to cut no-shows by 50% or more.",
  heroSubtext:
    "Below: the specific tactics that reduce no-shows, how they work together, and what kind of results to expect.",
  sections: [
    {
      type: "cards",
      title: "The no-show reduction toolkit",
      subtitle:
        "No single tactic eliminates no-shows entirely. The most effective approach layers multiple tactics together:",
      items: [
        {
          icon: CheckCircle2,
          title: "Active confirmation requests",
          body: "Instead of passive reminders, ask the customer to actively confirm: 'Reply YES to confirm your appointment tomorrow at 2 PM.' When they confirm, they are psychologically committed. When they do not, you know to follow up or free the slot.",
        },
        {
          icon: Bell,
          title: "Multi-step reminder sequence",
          body: "Automated reminders at 48 hours, 24 hours, and 2 hours before the appointment. Each reminder includes appointment details and a one-tap reschedule option. Consistent timing catches forgetful customers before it is too late.",
        },
        {
          icon: CalendarCheck,
          title: "Easy rescheduling (not just cancellation)",
          body: "Make rescheduling as easy as replying to a text or tapping a link. Most no-shows happen because cancelling feels awkward and rescheduling is too much work. Remove the friction and they will reschedule instead of ghosting.",
        },
        {
          icon: Zap,
          title: "Deposit or prepayment requirement",
          body: "For high-value appointments, requiring a small deposit at booking dramatically reduces no-shows. The deposit creates commitment. Refundable if they reschedule 24+ hours in advance, forfeited for no-shows.",
        },
        {
          icon: MessageSquare,
          title: "No-show follow-up sequence",
          body: "When someone does not show up, an automated message goes out within 30 minutes: 'We missed you today — want to rebook?' Recovers some of the lost appointments instead of writing them off entirely.",
        },
        {
          icon: Users,
          title: "Waitlist backfill",
          body: "When a cancellation comes in early, the freed slot is automatically offered to the next person on the waitlist. Fills gaps before they become lost revenue. Works best with 24-hour cancellation policies.",
        },
      ],
    },
    {
      type: "prose",
      title: "Why no-shows happen and what actually prevents them",
      subtitle:
        "Understanding the reasons behind no-shows helps target the right solution:",
      blocks: [
        {
          heading: "They forgot",
          body: "The most common reason. Life is busy, and an appointment booked 5 days ago is easy to forget. This is where reminders work. A 24-hour and same-day reminder catches the majority of forgetful customers.",
        },
        {
          heading: "They want to cancel but it feels awkward",
          body: "Many no-shows are people who decided not to come but did not want to deal with the phone call to cancel. Easy rescheduling via text or link removes this barrier. They will tell you if you make it simple enough.",
        },
        {
          heading: "There was no commitment",
          body: "Free appointments with no friction to book and no consequence for missing are the most likely to have high no-show rates. Deposits, confirmation requirements, and pre-appointment preparation tasks all increase commitment.",
        },
        {
          heading: "The appointment was too far out",
          body: "Appointments booked 2+ weeks in advance have higher no-show rates than those booked 1-3 days out. For longer lead times, confirmation requests at 72 and 24 hours are essential to keep the appointment real in the customer's mind.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Which businesses benefit most from no-show reduction?",
      subtitle:
        "Almost every appointment-based business benefits, but some get outsized returns:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "High impact",
          variant: "green",
          items: [
            "Your no-show rate is above 10%",
            "Each missed appointment costs you $100+ in revenue or time",
            "You book appointments days or weeks in advance",
            "Your schedule is full and no-shows mean genuinely lost revenue",
            "You do not currently send appointment reminders or confirmations",
            "Your team spends time making manual confirmation calls",
          ],
        },
        {
          icon: XCircle,
          heading: "Lower impact",
          variant: "neutral",
          items: [
            "Your no-show rate is already below 5%",
            "Most appointments are same-day bookings",
            "No-shows do not materially affect your revenue (flexible schedule)",
            "You already have a robust reminder system in place",
            "Your business model does not depend on appointment utilization",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Expected results",
      subtitle:
        "Here is what businesses typically see after implementing no-show reduction:",
      items: [
        {
          icon: TrendingUp,
          title: "50%+ reduction in no-shows",
          body: "A layered approach (confirmation + reminders + easy rescheduling) typically cuts no-shows by 50-70%. A business with a 20% no-show rate can expect to drop to 6-10%. The biggest gains come from the first two tactics.",
        },
        {
          icon: BarChart3,
          title: "Revenue recovery",
          body: "At 50 appointments per week, a 20% no-show rate means 10 lost slots. At $150 per appointment, cutting no-shows in half recovers $750/week — over $3,000/month in revenue that was being thrown away.",
        },
        {
          icon: Clock,
          title: "Better schedule utilization",
          body: "Fewer gaps in your schedule means more billable hours per day. Early cancellations (from easy rescheduling) let you fill slots from the waitlist. Late no-shows leave gaps that cannot be filled.",
        },
        {
          icon: Bot,
          title: "Reduced admin time",
          body: "No more manual confirmation calls, no more chasing no-shows. The automation handles the entire workflow — from booking confirmation to post-no-show recovery — without your team touching it.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Related scheduling automation",
      subtitle:
        "These projects use the same scheduling and follow-up patterns:",
      studies: [
        {
          industry: "Restaurant",
          headline: "AI-powered booking with confirmation workflow",
          body: "AI voice agent handles reservations with automated confirmation and follow-up. The same confirmation and reminder patterns that reduce restaurant no-shows apply to any appointment-based service business.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "Booking confirmation and reminder automation", href: "/booking-confirmation-and-reminder-automation" },
        { label: "AI appointment setter", href: "/ai-appointment-setter" },
        { label: "AI automation for dental practices", href: "/ai-automation-for-dental-practices" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How much can I realistically reduce no-shows?",
      answer:
        "Most businesses see a 50-70% reduction with a combination of confirmation requests, timed reminders, and easy rescheduling. Adding deposits for high-value appointments can push reduction even higher. Results vary by industry and appointment type.",
    },
    {
      question: "Should I require deposits for all appointments?",
      answer:
        "Not necessarily. Deposits work best for high-value appointments ($200+) and businesses with chronic no-show problems. For routine, lower-value appointments, confirmation requests and reminders are usually sufficient.",
    },
    {
      question: "What if a customer does not respond to the confirmation request?",
      answer:
        "The system sends a follow-up asking them to confirm or reschedule. If there is still no response, it can flag the appointment as at-risk and notify your team, who can decide whether to call or open the slot to the waitlist.",
    },
    {
      question: "Can this work with my existing scheduling tool?",
      answer:
        "Yes. We integrate with Google Calendar, Calendly, Acuity, GoHighLevel, Jobber, ServiceTitan, and most scheduling tools that have APIs. The automation works alongside your existing booking flow.",
    },
    {
      question: "What does it cost?",
      answer:
        "A no-show reduction system runs $1.5K-$3K to build, covering confirmation workflows, reminder sequences, rescheduling flows, and CRM integration. Monthly costs are typically $30-$60 for SMS. Payback period is usually under 2 weeks.",
    },
  ],
  faqSubtitle:
    "Practical answers about no-show reduction for service businesses",
  ctaHeading: "Stop losing money to empty appointment slots",
  ctaText:
    "Book a 30-minute call. We will look at your current no-show rate, calculate what it is costing you, and map out the fastest path to cutting it in half.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about protecting your schedule and revenue.",
  relatedLinks: [
    { label: "Booking confirmation and reminder automation", href: "/booking-confirmation-and-reminder-automation" },
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "AI automation for dental practices", href: "/ai-automation-for-dental-practices" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
