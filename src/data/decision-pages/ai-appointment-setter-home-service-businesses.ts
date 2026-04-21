import {
  CalendarCheck,
  Phone,
  Clock,
  Home,
  Wrench,
  Truck,
  Bot,
  Users,
  CheckCircle2,
  XCircle,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-appointment-setter-for-home-service-businesses",
  metaTitle:
    "AI Appointment Setter for Home Service Businesses — When It Pays Off and What to Expect | Dmytro AI",
  metaDescription:
    "How AI appointment setters work for HVAC, plumbing, electrical, roofing, cleaning, and other home service businesses. Learn when they help, what they should handle, and where human dispatch still matters.",
  badgeText: "Home Service Guide",
  badgeIcon: Home,
  h1: "AI Appointment Setter for Home Service Businesses",
  heroIntro:
    "If your home service business loses jobs because calls come in after hours, form leads sit too long, or the office spends half the day playing phone tag, an AI appointment setter can be a very good fit. It answers fast, qualifies the lead, offers the right next step, books into the calendar when the workflow is clear, and hands edge cases to a human instead of letting them disappear. It is not a magic replacement for dispatch or sales judgment, but it is often the simplest way to stop losing easy bookings to slow response.",
  heroSubtext:
    "Below: where appointment-setting AI works well for home services, where it breaks down, what setup usually involves, and how to tell whether your real bottleneck is booking speed, dispatch complexity, or both.",
  sections: [
    {
      type: "cards",
      title: "What an AI appointment setter actually handles in home services",
      subtitle:
        "For most trades businesses, the value is not just 'booking.' It is removing the repetitive first-response work that slows the office down:",
      items: [
        {
          icon: Phone,
          title: "Answer missed and after-hours inquiries immediately",
          body: "Calls, texts, and web leads get a response right away instead of waiting until someone gets back to the desk. That matters in home services because the customer usually calls the next company if nobody answers quickly.",
        },
        {
          icon: Bot,
          title: "Qualify the request before it hits the calendar",
          body: "The system can ask what service is needed, where the customer is located, whether the issue is urgent, whether they are an existing customer, and what kind of appointment should be offered. That keeps bad-fit or incomplete requests from clogging dispatch.",
        },
        {
          icon: CalendarCheck,
          title: "Book straightforward jobs and estimates",
          body: "When the booking rules are clear, AI can offer time windows, confirm appointments, send reminders, and log everything into the CRM automatically. This is strongest for repeatable estimate bookings, tune-ups, inspections, and standard service calls.",
        },
        {
          icon: MessageSquare,
          title: "Trigger the right follow-up when booking is not immediate",
          body: "If the lead should not be booked instantly, the AI can still capture details, route to the right person, and launch a callback or nurture workflow instead of dropping the inquiry into a generic inbox.",
        },
      ],
    },
    {
      type: "table",
      title: "Where appointment-setting AI helps most in home services",
      subtitle:
        "Home service companies do not all have the same scheduling complexity. The fit depends on how repeatable your intake and booking rules are:",
      headers: ["Strong fit", "Needs human review"],
      rows: [
        {
          label: "Lead type",
          values: [
            "Routine service requests, estimate requests, maintenance bookings, missed-call recovery",
            "Complex diagnostics, custom installs, insurance-heavy jobs, emotionally charged complaints",
          ],
        },
        {
          label: "Response workflow",
          values: [
            "Fast qualification + book or dispatch callback",
            "Long consultative conversation before any next step can be offered",
          ],
        },
        {
          label: "Calendar logic",
          values: [
            "Defined time windows, clear service areas, standard appointment types",
            "Constant manual reshuffling across crews, inventory, and specialty technicians",
          ],
        },
        {
          label: "After-hours coverage",
          values: [
            "Very strong — capture and triage every lead when the office is closed",
            "Human-only if emergency escalation rules are unclear or unsafe",
          ],
        },
        {
          label: "Best outcome",
          values: [
            "More booked jobs and fewer missed opportunities without adding office headcount",
            "Better callback prep for the team, but not full autonomous booking",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Good fit vs. bad fit",
      subtitle:
        "The honest version: this is powerful for the right home service workflow and frustrating for the wrong one.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Strong fit",
          variant: "green",
          items: [
            "You miss leads because nobody answers quickly during jobs, evenings, or weekends",
            "Your team already knows which requests can be booked immediately versus routed for callback",
            "You have enough inbound volume that phone tag and inbox triage eat real admin time",
            "One additional booked job or estimate per week would easily cover the software cost",
            "You want every inquiry logged with contact info, transcript, and next step automatically",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Every inbound request needs deep manual diagnosis before you can offer any slot",
            "Your office already answers nearly every call live and response speed is not the problem",
            "You do not yet have clear service areas, appointment types, or dispatch rules",
            "You expect AI to replace the dispatcher, sales rep, and customer service manager in one step",
            "Your team is not willing to define escalation rules for emergencies and edge cases",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What usually makes or breaks the rollout",
      subtitle:
        "The technical setup is rarely the hardest part. The real work is deciding what the AI should do versus what should stay human.",
      items: [
        {
          icon: Truck,
          title: "Dispatch complexity matters more than call volume alone",
          body: "A home service business with moderate call volume but simple booking rules can automate faster than a higher-volume business with messy dispatch logic. Before building anything, define which job types can be booked automatically and which must be escalated.",
        },
        {
          icon: Clock,
          title: "After-hours capture is often the fastest ROI lever",
          body: "Many trades businesses justify the system before looking at daytime office efficiency. If evenings and weekends currently mean voicemail, the first gain is simply that every lead gets an immediate next step instead of cooling off overnight.",
        },
        {
          icon: Wrench,
          title: "Emergency handling needs explicit rules",
          body: "For HVAC, plumbing, electrical, roofing, and similar trades, some requests need priority escalation. The AI should know when to offer the next available slot, when to create a hot callback, and when to route straight to the on-call process.",
        },
        {
          icon: ArrowUpRight,
          title: "The best setups combine booking with follow-up automation",
          body: "Not every lead books on the first interaction. The strongest systems connect appointment setting to CRM logging, reminder flows, missed-call text-back, estimate follow-up, and internal alerts so no inquiry stalls after the first contact.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof for this use case",
      subtitle:
        "There is not a generic 'home services' vanity claim here. The support for this page comes from a real HVAC scheduling build plus adjacent proof in voice handling and automated follow-up:",
      studies: [
        {
          industry: "HVAC",
          headline: "Existing HVAC scheduling page shows the exact dispatch-aware booking pattern",
          body: "The HVAC appointment setter guide already maps the real scheduling constraints that matter in home services: emergency triage, time windows, calendar sync, reschedules, and field-team logistics. This page extends that same logic to adjacent trades where the first-response problem looks almost identical.",
          link: "/ai-appointment-setter-for-hvac",
        },
        {
          industry: "Restaurant / voice handling",
          headline: "After-hours calls answered instead of lost",
          body: "The Paris Café voice agent proves the front-end piece: inbound calls can be answered immediately, after hours, with clear routing and no staff intervention. Home service businesses usually have the same missed-call problem even if the booking rules are different.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce / CRM follow-up",
          headline: "Downstream lead handling can be automated, not just the first reply",
          body: "The WheelsFeels CRM automation is adjacent proof for the back-half of the system: once a lead is captured, segmentation, follow-up, alerts, and routing can happen automatically. That matters for home services when a request needs a callback, estimate sequence, or nurture instead of instant booking.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI appointment setter", href: "/ai-appointment-setter" },
        { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
        { label: "Missed call follow-up automation", href: "/missed-call-follow-up-automation" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What counts as a home service business for this kind of setup?",
      answer:
        "Typically HVAC, plumbing, electrical, roofing, pest control, cleaning, landscaping, painting, garage door, and similar trades where inbound calls or web leads turn into estimates, service calls, or dispatch requests. The common pattern is high-value inquiries that need fast first response and a repeatable booking workflow.",
    },
    {
      question: "Can an AI appointment setter handle emergency service calls?",
      answer:
        "Yes, but only if you define the escalation rules clearly. The AI should know which keywords or conditions count as urgent, whether to trigger an on-call callback, and when not to offer a routine calendar slot. Emergency handling is a workflow design problem first, not a voice-AI problem.",
    },
    {
      question: "Is this different from AI phone answering?",
      answer:
        "Yes. AI phone answering focuses on answering and handling the conversation. An AI appointment setter goes one step further by qualifying the request, offering the right next step, booking when appropriate, and triggering structured follow-up when it is not. Many systems do both, but appointment setting is more operationally specific.",
    },
    {
      question: "How long does setup usually take for a home service business?",
      answer:
        "A narrow setup with clear booking rules can often be live in 1-2 weeks. More complex implementations with calendar integration, CRM sync, emergency routing, reschedules, and multi-location logic usually take 2-3 weeks because the edge cases need proper testing.",
    },
    {
      question: "What is the simplest way to decide if this is worth building?",
      answer:
        "Review your last 20 inbound calls or leads and ask three questions: how many came in after hours, how many waited too long for a reply, and how many could have been booked or routed with a repeatable script. If the answer is 'a lot,' an AI appointment setter is probably worth evaluating. If the answer is 'almost none,' you may need a different bottleneck fixed first.",
    },
  ],
  faqSubtitle:
    "Practical questions from trades and field-service businesses considering AI for booking and first response",
  ctaHeading: "Want to know if this would work for your home service business?",
  ctaText:
    "Book a 30-minute call. We will look at your call flow, booking rules, after-hours gaps, and dispatch complexity, then decide whether an AI appointment setter would create real ROI or just add another tool.",
  ctaSubtext:
    "No generic AI pitch. Just a practical fit check based on how your leads and crews actually operate.",
  relatedLinks: [
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "AI appointment setter for HVAC", href: "/ai-appointment-setter-for-hvac" },
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
