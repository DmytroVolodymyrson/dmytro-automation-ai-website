import {
  Wrench,
  Phone,
  CalendarCheck,
  MessageSquare,
  Clock,
  Star,
  CheckCircle2,
  XCircle,
  Users,
  Bot,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-for-auto-repair-shops",
  metaTitle:
    "AI Automation for Auto Repair Shops — Missed Calls, Estimate Follow-Up, Maintenance Reminders | Dmytro AI",
  metaDescription:
    "AI automation for auto repair shops. Missed call text-back, appointment scheduling, estimate follow-up, maintenance reminders, client reactivation, and review automation. What works and where to start.",
  badgeText: "Auto Repair Industry",
  badgeIcon: Wrench,
  h1: "AI Automation for Auto Repair Shops",
  heroIntro:
    "A customer calls your shop about a check-engine light. Your techs are under cars, the service advisor is writing up an estimate, and the phone rings out. That customer calls the next shop on Google and books there instead. That missed call was a $1,200 diagnostic and repair job. Auto repair shops lose thousands in revenue every month to unanswered calls, unsent follow-ups, and customers who got an estimate but never heard back. AI automation handles the call capture, estimate follow-up, and maintenance outreach that your team cannot keep up with when the bays are full.",
  heroSubtext:
    "Below: what auto repair shop automation looks like in practice, where it delivers the clearest ROI, and how to decide if it is worth the investment.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in an auto repair shop",
      subtitle:
        "These automations are built for the reality of running a repair shop — noisy bays, busy service advisors, and customers who need follow-up but never get it:",
      items: [
        {
          icon: Phone,
          title: "Missed call text-back",
          body: "When a call goes unanswered — because the shop floor is loud and the advisor is with a customer — an automatic text goes out within seconds. Captures the caller and starts a conversation before they move on to the next shop.",
        },
        {
          icon: CalendarCheck,
          title: "Appointment scheduling automation",
          body: "Online booking for oil changes, brake jobs, inspections, and other common services. Automated confirmations and reminders reduce no-shows and free up your advisor from playing phone tag.",
        },
        {
          icon: MessageSquare,
          title: "Estimate follow-up",
          body: "Customer got a quote for brake pads and rotors but has not approved the work. Automated sequences follow up at 2 days, 5 days, and 14 days — professional reminders that convert sitting estimates into approved repairs.",
        },
        {
          icon: Clock,
          title: "Maintenance reminder campaigns",
          body: "Automated outreach when oil changes are due, tire rotations are coming up, or inspections are expiring. Keeps your bays full with recurring revenue from your existing customer base.",
        },
        {
          icon: Users,
          title: "Client reactivation",
          body: "Automated outreach to customers who have not been in for 6 or more months. Seasonal campaigns, inspection reminders, and re-engagement sequences turn dormant contacts into booked appointments.",
        },
        {
          icon: Star,
          title: "Review request automation",
          body: "After every completed repair, an automated text asks for a Google review. Happy customers get a direct review link. Unhappy ones get routed to you first so you can address the issue.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your auto repair shop?",
      subtitle:
        "Honest assessment. Some shops see immediate ROI. Others are not ready yet:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You miss calls because techs are under cars and the advisor is busy",
            "Customers call for pricing and availability and nobody picks up",
            "You send estimates but do not follow up when the customer goes quiet",
            "You have thousands of past customers but no system to bring them back",
            "You want more Google reviews but asking is inconsistent",
            "You are running 3 or more bays and growing",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are a solo mechanic fully booked from word of mouth",
            "You already have a service advisor who handles all follow-up consistently",
            "You have no online presence or marketing driving inbound calls",
            "You are not ready to invest at least $2K in a one-time build",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI expectations for auto repair shop automation",
      subtitle:
        "The math is straightforward for most repair shops:",
      items: [
        {
          icon: BarChart3,
          title: "The cost of a missed call",
          body: "Your average repair order is $300 to $800. A single missed call could be a $2,000 engine or transmission job. If you miss even 3 to 5 calls a week because the shop floor is loud and the advisor is tied up, that is $5,000 to $15,000 in potential revenue walking out the door every month.",
        },
        {
          icon: Clock,
          title: "Estimate conversion",
          body: "Most shops send estimates and never follow up when the customer does not respond. A customer who got a $900 brake job quote and went quiet is not necessarily a lost sale — they are busy, distracted, or waiting for payday. Automated follow-up at the right intervals brings them back.",
        },
        {
          icon: TrendingUp,
          title: "Maintenance customer lifetime value",
          body: "A regular maintenance customer is worth $1,500 to $3,000 per year in oil changes, tire rotations, inspections, and minor repairs. Automated maintenance reminders keep them coming to your shop instead of the quick-lube down the street.",
        },
        {
          icon: Users,
          title: "Reactivating past customers",
          body: "Most shops have thousands of customers in their database who have not been in for over a year. Automated reactivation campaigns turn those dormant records into booked appointments at a fraction of the cost of acquiring a new customer.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar service businesses",
      subtitle:
        "These case studies show the same call handling and follow-up patterns that apply directly to auto repair shops:",
      studies: [
        {
          industry: "Restaurant",
          headline: "100% of after-hours calls answered",
          body: "AI voice agent handles all after-hours calls and routes requests. For auto repair shops, the same system captures callers when the advisor is tied up and books appointments while the shop is closed.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and reactivated",
          body: "Automated follow-up sequences organized untouched leads and drove consistent outreach. For repair shops, this means no estimate sits unapproved and no past customer gets forgotten.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for roofing companies", href: "/ai-automation-for-roofing-companies" },
        { label: "AI automation for HVAC companies", href: "/ai-automation-for-hvac-companies" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is the most impactful automation for an auto repair shop?",
      answer:
        "Missed call text-back and estimate follow-up. Most shops lose the most revenue from calls that go unanswered when the advisor is busy and from estimates that sit unapproved because nobody followed up. Fixing those two problems typically pays for the entire automation build within the first month.",
    },
    {
      question: "How do maintenance reminders get scheduled?",
      answer:
        "When a service is completed, the system logs the date and mileage interval for the next service. Reminders go out automatically via text at the appropriate time — oil change at 3 months or 3,000 miles, tire rotation at 6 months, inspection 30 days before expiration. You set the intervals once and the system handles everything.",
    },
    {
      question: "What does the estimate approval workflow look like?",
      answer:
        "When an estimate is sent and the customer does not respond within a set timeframe, the system sends a professional follow-up text. If still no response, it follows up again at day 5 and day 14. Each message is conversational, not pushy — a simple reminder that the estimate is ready and you can get them scheduled. If they reply, the conversation routes to your advisor.",
    },
    {
      question: "What does it cost?",
      answer:
        "A single workflow like missed call text-back runs $1K to $2K. A complete system — missed call capture, estimate follow-up, maintenance reminders, reactivation campaigns, reviews — runs $3K to $6K. Fixed pricing, scoped before work starts.",
    },
    {
      question: "Will this work with my shop management software?",
      answer:
        "In most cases, yes. We integrate at the communication and scheduling layer. If your platform — Shop-Ware, Tekmetric, Mitchell, AutoFluent, or similar — has an API or supports webhooks, we can connect to it. We verify compatibility during the scoping call.",
    },
  ],
  faqSubtitle:
    "Practical answers for auto repair shops considering automation",
  ctaHeading: "Stop losing repair jobs to missed calls and unapproved estimates",
  ctaText:
    "Book a 30-minute call. We will look at your current call flow, identify where jobs are being lost, and give you a clear plan for what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your auto repair business.",
  relatedLinks: [
    { label: "AI automation for HVAC companies", href: "/ai-automation-for-hvac-companies" },
    { label: "AI automation for roofing companies", href: "/ai-automation-for-roofing-companies" },
    { label: "AI phone answering for service businesses", href: "/ai-phone-answering-for-service-businesses" },
    { label: "Quote follow-up automation", href: "/quote-follow-up-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
