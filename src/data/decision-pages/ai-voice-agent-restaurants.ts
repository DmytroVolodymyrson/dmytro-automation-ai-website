import {
  UtensilsCrossed,
  Phone,
  CalendarCheck,
  Clock,
  MessageSquare,
  Bot,
  CheckCircle2,
  XCircle,
  Users,
  AlertTriangle,
  Wrench,
  Mic,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-voice-agent-for-restaurants",
  metaTitle:
    "AI Voice Agent for Restaurants — What It Does and When It Pays Off | Dmytro AI",
  metaDescription:
    "AI phone answering for restaurants. Learn what an AI voice agent can handle, when it improves bookings, where it fails, and whether it is a fit for your restaurant.",
  badgeText: "Restaurant Use Case",
  badgeIcon: UtensilsCrossed,
  h1: "AI Voice Agent for Restaurants",
  heroIntro:
    "If your restaurant misses calls during service, after hours, or when the host stand is overloaded, an AI voice agent can capture reservations and routine questions without adding another person to payroll. The real value is not 'using AI.' It is answering more calls, booking more tables, and freeing your staff to focus on guests in front of them.",
  heroSubtext:
    "Below: what an AI restaurant voice agent actually does, where it helps most, where it should not be used, and how to decide if it is worth implementing in your restaurant.",
  sections: [
    {
      type: "cards",
      title: "What an AI voice agent can actually do for a restaurant",
      subtitle:
        "This is the practical version, not the hype version. A good restaurant voice agent handles repetitive phone traffic that normally pulls staff away from service:",
      items: [
        {
          icon: Phone,
          title: "Answer every inbound call",
          body: "Picks up after-hours calls and overflow calls during busy service windows so callers do not hit voicemail or give up after two rings.",
        },
        {
          icon: CalendarCheck,
          title: "Book and confirm reservations",
          body: "Collects party size, date, and time, then confirms the reservation or routes it into your booking workflow. This is the highest-value use case for most restaurants.",
        },
        {
          icon: Clock,
          title: "Handle common questions instantly",
          body: "Answers routine questions about hours, location, parking, private events, and whether reservations are required. That removes a large share of repetitive phone traffic.",
        },
        {
          icon: MessageSquare,
          title: "Capture missed demand after hours",
          body: "A caller who wants to book for tomorrow night at 10 PM should still get an answer. The agent can take the call, confirm the request, and follow up automatically.",
        },
        {
          icon: Bot,
          title: "Route edge cases to a human",
          body: "If the caller has a complicated request, a complaint, or a VIP situation, the system can take a message and route it to a manager instead of improvising badly.",
        },
        {
          icon: Users,
          title: "Reduce front-of-house interruptions",
          body: "Your host or manager spends less time tied up on repetitive calls and more time on guests, service flow, and the in-person experience.",
        },
      ],
    },
    {
      type: "table",
      title: "AI voice agent vs voicemail vs a human host",
      subtitle:
        "Restaurants usually compare the wrong things. The question is not whether AI beats a great host. The question is whether it beats missed calls and distracted staff:",
      headers: ["AI voice agent", "Voicemail", "Human host"],
      rows: [
        {
          label: "After-hours coverage",
          values: [
            "24/7",
            "Caller leaves a message, maybe",
            "Only when staff are present",
          ],
        },
        {
          label: "Reservation capture",
          values: [
            "Immediate",
            "Delayed follow-up",
            "Immediate when someone picks up",
          ],
        },
        {
          label: "Routine question handling",
          values: [
            "Consistent and fast",
            "None",
            "Good, but pulls staff off service",
          ],
        },
        {
          label: "Labor cost",
          values: [
            "Low fixed software cost",
            "Low, but lost demand is high",
            "Highest, but best for nuanced service",
          ],
        },
        {
          label: "Best use",
          values: [
            "Overflow and after-hours call handling",
            "Backup only",
            "High-touch guest situations",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When it is a good fit and when it is not",
      subtitle:
        "This matters more than the tech itself. Some restaurants benefit a lot. Others do not need it yet:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You miss calls during lunch, dinner, or weekend rushes",
            "You get meaningful reservation demand after hours",
            "Your team repeats the same phone answers all day",
            "One extra booked table per day would materially matter",
            "You want overflow coverage without hiring another full-time person",
            "Your booking flow is simple enough to standardize",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Most of your business is walk-in and reservations barely matter",
            "You get very low call volume and staff already answer everything",
            "Your concept depends on highly customized concierge-style booking",
            "Your menu, hours, and policies change constantly without clear system updates",
            "You expect AI to replace every human interaction on the phone",
            "Your main problem is empty demand, not missed call handling",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What needs to be set up properly",
      subtitle:
        "The difference between a useful AI host and an annoying one is configuration. These are the pieces that need to be right:",
      items: [
        {
          icon: Mic,
          title: "Voice and prompt quality",
          body: "The agent should sound calm, clear, and on-brand. Bad scripting is the fastest way to make the experience feel cheap.",
        },
        {
          icon: Wrench,
          title: "Reservation logic",
          body: "The system needs the right rules for party sizes, service windows, exceptions, and what happens when the desired time is unavailable.",
        },
        {
          icon: AlertTriangle,
          title: "Escalation paths",
          body: "Private events, allergies, large groups, complaints, and VIP requests should route to a person instead of being mishandled by the agent.",
        },
        {
          icon: MessageSquare,
          title: "Follow-up handling",
          body: "Confirmation texts, manager callbacks, and missed-request routing should all happen automatically so nothing gets dropped after the call ends.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What this looks like in the real world",
      subtitle:
        "This is not hypothetical. The Paris Cafe case study is the clearest example of where a restaurant voice agent makes sense:",
      studies: [
        {
          industry: "Restaurant",
          headline: "Paris Cafe voice receptionist",
          body: "A 24/7 AI voice receptionist now answers after-hours calls, handles reservation demand that used to be missed, and cut web lead response time from hours to under 60 seconds.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "View the full case study", href: "/case-studies/paris-cafe-voice-agent" },
        { label: "Browse all case studies", href: "/case-studies" },
      ],
    },
    {
      type: "when-to-use",
      title: "How to evaluate your options",
      subtitle:
        "Most restaurant owners are comparing three realistic paths:",
      options: [
        {
          icon: Bot,
          heading: "Install an AI voice agent",
          highlighted: true,
          items: [
            "Best when calls are repetitive and missed demand is the real problem",
            "Covers after-hours and peak-time overflow without more payroll",
            "Works best with clear reservation logic and escalation rules",
            "Typical fit: independent restaurants and small groups with meaningful reservation traffic",
          ],
        },
        {
          icon: Users,
          heading: "Hire more front-of-house coverage",
          highlighted: false,
          items: [
            "Best when you need more in-person guest handling anyway",
            "Most flexible option, but highest labor cost",
            "Still does not solve after-hours demand unless someone is always on the clock",
            "Better fit when the problem is service load overall, not just calls",
          ],
        },
        {
          icon: Phone,
          heading: "Keep voicemail and manual callbacks",
          highlighted: false,
          items: [
            "Lowest short-term cost",
            "Also the highest risk of lost bookings and poor first impressions",
            "Usually acceptable only when phone demand is genuinely low",
            "Weak fit for reservation-driven restaurants",
          ],
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "Will guests be annoyed that it is AI?",
      answer:
        "Not if it is configured well and used for the right type of calls. Guests care more about getting an answer quickly than whether a human or AI handled a basic reservation request. The problem is bad implementation, not the concept itself.",
    },
    {
      question: "Can an AI voice agent actually book reservations?",
      answer:
        "Yes. That is one of the strongest restaurant use cases. The system can collect party size, date, and time, confirm the booking flow, and send follow-up messages. The exact setup depends on how your restaurant currently handles reservations.",
    },
    {
      question: "What should never be left fully to AI?",
      answer:
        "Complaints, private events, complicated special requests, and anything where judgment or relationship handling matters. The AI should route those to a human instead of trying to fake its way through them.",
    },
    {
      question: "How much does a restaurant voice agent usually cost?",
      answer:
        "A focused setup for phone answering, reservation capture, and follow-up is usually in the low-thousands to build, with optional monthly maintenance depending on call volume and integration complexity. The key comparison is against missed booking value and staff interruption cost, not just software price in isolation.",
    },
    {
      question: "Is this only useful for large restaurants?",
      answer:
        "No. Smaller independent restaurants can benefit more because one missed reservation matters more, and there is less staffing redundancy. If call volume is meaningful and the team is stretched, the ROI can show up quickly.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "A focused restaurant voice-agent setup can usually go live in 1 to 2 weeks once the call flows, booking logic, and escalation rules are clear. More complex routing or custom integrations can take longer.",
    },
  ],
  faqSubtitle:
    "Straight answers for restaurant owners considering AI phone coverage",
  ctaHeading: "Want to stop losing reservations to missed calls?",
  ctaText:
    "Book a 30-minute call. We will look at your current phone flow, where calls are being missed, and whether an AI voice agent actually makes sense for your restaurant.",
  ctaSubtext:
    "No inflated AI promises. Just a practical look at bookings, staffing pressure, and whether this would pay off.",
  relatedLinks: [
    { label: "AI automation for restaurants", href: "/ai-automation-for-restaurants" },
    { label: "Paris Cafe voice agent case study", href: "/case-studies/paris-cafe-voice-agent" },
    { label: "Private event inquiry follow-up for restaurants", href: "/private-event-inquiry-follow-up-for-restaurants" },
    { label: "Reservation confirmation and reminder automation", href: "/reservation-confirmation-and-reminder-automation-for-restaurants" },
  ],
};

export default data;
