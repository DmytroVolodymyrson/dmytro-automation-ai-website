import {
  UtensilsCrossed,
  Phone,
  CalendarCheck,
  Clock,
  MessageSquare,
  Bot,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Star,
  ArrowUpRight,
  Users,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-for-restaurants",
  metaTitle:
    "AI Automation for Restaurants — Reservations, Missed Calls, Follow-Up | Dmytro AI",
  metaDescription:
    "AI automation for restaurants. Learn what is actually worth automating in 2026 — phone answering, reservation capture, after-hours follow-up, review requests, and guest communication.",
  badgeText: "Restaurant Industry",
  badgeIcon: UtensilsCrossed,
  h1: "AI Automation for Restaurants",
  heroIntro:
    "Most restaurants do not need 'AI everywhere.' They need fewer missed calls, faster reservation handling, better after-hours coverage, and less front-of-house time wasted on repetitive phone traffic. AI automation is useful in restaurants when it fixes those operational leaks directly: answering calls during service, capturing reservation demand after hours, following up on private-event inquiries, and triggering guest communication without someone remembering every step manually.",
  heroSubtext:
    "Below: what is actually worth automating in a restaurant, where the ROI usually appears first, when to keep things manual, and how the Paris Cafe build translates into a broader restaurant operations playbook without pretending every concept needs the same setup.",
  sections: [
    {
      type: "cards",
      title: "What is actually worth automating in a restaurant",
      subtitle:
        "The best restaurant automations usually sit around reservation demand, guest communication, and repetitive front-of-house workflows:",
      items: [
        {
          icon: Phone,
          title: "After-hours and overflow call answering",
          body: "If the phone rings during service or after close, the restaurant still needs a clean next step. Automation answers, captures the reason for the call, and keeps reservation demand from dying in voicemail.",
        },
        {
          icon: CalendarCheck,
          title: "Reservation capture and confirmation",
          body: "Automation can collect party size, date, time, and callback details, then confirm or route the request into your booking workflow. This is usually the clearest revenue-protection use case.",
        },
        {
          icon: MessageSquare,
          title: "Private-event and large-party inquiry follow-up",
          body: "These leads often go cold because nobody follows up quickly enough. Automation can log the inquiry, notify the right person, and trigger the first response without making the whole process feel robotic.",
        },
        {
          icon: Clock,
          title: "Routine guest questions",
          body: "Hours, location, reservation policy, parking, dietary basics, and other common questions do not need to keep interrupting service. Automation can handle the repetitive layer consistently.",
        },
        {
          icon: Star,
          title: "Review and return-visit follow-up",
          body: "Post-visit messages, review requests, and light win-back campaigns are useful when they are timed well and tied to real guest interactions instead of generic blasts.",
        },
        {
          icon: Bot,
          title: "Human handoff for edge cases",
          body: "Complaints, VIP requests, custom event conversations, and anything sensitive should route to a person quickly. Good restaurant automation reduces busywork; it does not fake hospitality where judgment matters.",
        },
      ],
    },
    {
      type: "table",
      title: "Where restaurants usually feel the difference",
      subtitle:
        "The comparison is not AI versus perfect hospitality. It is structured automation versus the operational gaps most restaurants already live with:",
      headers: ["Automated", "Manual"],
      rows: [
        {
          label: "Missed calls",
          values: [
            "Calls are answered, logged, or routed with a defined next step",
            "Calls hit voicemail or get returned later if someone remembers",
          ],
        },
        {
          label: "Reservation demand after hours",
          values: [
            "Requests are captured immediately and pushed into the booking flow",
            "Potential guests give up or book elsewhere",
          ],
        },
        {
          label: "Private-event inquiries",
          values: [
            "Inquiry details trigger alerts and follow-up fast",
            "Leads sit in inboxes while managers juggle service",
          ],
        },
        {
          label: "Front-of-house interruptions",
          values: [
            "Repetitive questions are handled consistently in the background",
            "Hosts and managers keep getting pulled off the floor",
          ],
        },
        {
          label: "Guest follow-up",
          values: [
            "Confirmations, reminders, and review prompts happen on schedule",
            "Follow-up happens inconsistently or not at all",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this is a good fit and when it is not",
      subtitle:
        "Restaurant automation works best when it solves a real operational bottleneck instead of being installed just because the tech sounds interesting:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your restaurant misses calls during rushes or after hours",
            "Reservations or phone inquiries materially affect revenue",
            "Your host stand keeps repeating the same answers all day",
            "Private-event, catering, or large-party inquiries need faster follow-up",
            "You want more consistency without adding another full-time person",
            "Your booking rules are clear enough to standardize",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Phone demand is genuinely low and staff already answer everything",
            "Your concept depends on high-touch concierge conversation for nearly every booking",
            "Menu, policies, and hours change constantly without any system discipline",
            "Your core problem is empty demand, not response speed or operational leakage",
            "You expect AI to replace hospitality instead of supporting it",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Where the ROI usually shows up first",
      subtitle:
        "For restaurants, the payoff usually comes from a few narrow wins rather than one giant platform project:",
      items: [
        {
          icon: TrendingUp,
          title: "Recovered reservation demand",
          body: "One extra booked table per day can justify a focused phone and reservation workflow faster than most owners expect. The value is in the demand you stop losing, not in the novelty of the tool.",
        },
        {
          icon: Users,
          title: "Less front-of-house distraction",
          body: "When repetitive calls stop interrupting service, staff can stay with guests instead of bouncing between hospitality and phone triage.",
        },
        {
          icon: ArrowUpRight,
          title: "Faster event and catering follow-up",
          body: "High-value inquiries usually need speed more than they need complexity. Getting the first response out quickly often matters more than building a huge campaign.",
        },
        {
          icon: Star,
          title: "More consistent guest communication",
          body: "Confirmations, reminders, and review prompts work better when they are systemized. Restaurants often lose easy reputation and repeat-visit upside because nobody owns this layer consistently.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Direct proof and adjacent fit",
      subtitle:
        "This page is grounded in a live restaurant deployment, not a hypothetical restaurant trend piece:",
      studies: [
        {
          industry: "Restaurant",
          headline: "Paris Cafe voice receptionist",
          body: "Dmytro built a 24/7 AI voice receptionist for The Paris Cafe that moved after-hours calls from 0% answered to 100%, cut web lead response time to under 60 seconds, and freed about 15 hours of management time per week. That is direct proof for the restaurant call-handling and reservation-capture layer.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Workflow design",
          headline: "Restaurant automation should stay narrow and operational",
          body: "The practical lesson from the case study is not 'automate everything.' It is that restaurants win when they automate the repetitive communication layer first, then keep human judgment for service recovery, VIP requests, and nuanced hospitality.",
          link: "/ai-voice-agent-for-restaurants",
        },
      ],
      links: [
        { label: "Paris Cafe case study", href: "/case-studies/paris-cafe-voice-agent" },
        { label: "Restaurant voice agent guide", href: "/ai-voice-agent-for-restaurants" },
        { label: "AI phone answering guide", href: "/ai-phone-answering-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Do restaurants really need broad AI automation or just phone coverage?",
      answer:
        "Usually they need the narrow operational layer first: phone answering, reservation capture, inquiry follow-up, and guest communication. Broad automation only makes sense after those basics are working and there is a clear next bottleneck worth fixing.",
    },
    {
      question: "What is the best first restaurant workflow to automate?",
      answer:
        "For most independent restaurants, it is missed-call and reservation handling. That is where lost demand shows up fastest and where the ROI is easiest to understand. Private-event inquiry follow-up is another strong candidate if that line of business matters to you.",
    },
    {
      question: "Will this replace my host or manager?",
      answer:
        "No, and it should not. The point is to remove repetitive phone traffic and speed-sensitive follow-up so the team can focus on guests, service quality, and the situations that require judgment.",
    },
    {
      question: "How much does restaurant automation usually cost?",
      answer:
        "A focused workflow like AI phone answering plus reservation capture usually lands in the low-thousands to build, with optional monthly maintenance depending on call volume and integration complexity. The right comparison is against lost bookings and labor interruptions, not software price alone.",
    },
    {
      question: "What should stay manual in a restaurant?",
      answer:
        "Complaints, unusual guest requests, sensitive VIP situations, and complex event conversations should stay human-led. Automation should support the operation, not try to fake hospitality where nuance matters most.",
    },
  ],
  faqSubtitle:
    "Straight answers for restaurant owners deciding whether automation is actually worth implementing",
  ctaHeading: "Want to see where restaurant automation would pay off first?",
  ctaText:
    "Book a 30-minute call. We will look at your phone flow, reservation demand, and guest communication bottlenecks, then map the narrowest automation system that would create a real operational win first.",
  ctaSubtext:
    "No generic AI pitch. No fake restaurant-tech promises. Just a practical conversation about missed demand, service pressure, and what should stay human.",
  relatedLinks: [
    { label: "Paris Cafe case study", href: "/case-studies/paris-cafe-voice-agent" },
    { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
