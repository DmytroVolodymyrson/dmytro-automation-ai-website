import {
  Scale,
  Phone,
  MessageSquare,
  CalendarCheck,
  MailCheck,
  Star,
  DollarSign,
  Clock,
  AlertTriangle,
  Zap,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "best-ai-automation-for-service-businesses",
  metaTitle:
    "Best AI Automations for Service Businesses — A Decision Guide | Dmytro AI",
  metaDescription:
    "Which AI automations actually move the needle for service businesses? A decision framework — not a listicle — for HVAC, dental, legal, real estate, and other service companies.",
  badgeText: "Decision Guide",
  badgeIcon: Scale,
  h1: "Best AI Automations for Service Businesses",
  heroIntro:
    "The best AI automation for a service business is speed-to-lead response. Responding to inquiries within 60 seconds via SMS or voice increases conversion rates by up to 50% by capturing the lead before they contact a competitor. This is a decision guide — not a product list — that helps you identify which automations actually produce ROI for your type of business.",
  heroSubtext:
    "Below: the five automations with the highest proven ROI for service businesses, a fit/not-fit evaluation framework, and real-world case studies from HVAC and e-commerce.",
  sections: [
    {
      type: "cards",
      title: "The five automations that actually move the needle",
      subtitle:
        "Across HVAC, dental, legal, and real estate, these five automations consistently produce the highest ROI. They're ordered by typical impact:",
      items: [
        {
          icon: Phone,
          title: "1. Speed-to-lead response",
          body: "Respond to every inbound lead within 60 seconds via SMS, email, or voice. This single automation typically increases conversion by 30–50% because most competitors respond in hours or not at all. See our full guide on lead follow-up.",
        },
        {
          icon: MessageSquare,
          title: "2. Multi-touch follow-up sequences",
          body: "Automated SMS and email sequences that nurture leads who don't book on first contact. A 5–7 touch sequence over 14 days recovers 15–25% of leads that would otherwise be lost.",
        },
        {
          icon: CalendarCheck,
          title: "3. AI appointment booking",
          body: "AI voice agent or chatbot that books appointments without human involvement. Eliminates phone tag and works 24/7. See our AI appointment setter guide.",
        },
        {
          icon: MailCheck,
          title: "4. Database reactivation",
          body: "Automated campaigns to re-engage past customers and cold leads. A well-built reactivation campaign generates revenue from an asset you already own — your existing contact list.",
        },
        {
          icon: Star,
          title: "5. Review and reputation automation",
          body: "Automated review requests after service completion. Consistent 5-star reviews on Google directly impact your local search ranking and recurring lead flow.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is your business a fit for AI automation?",
      subtitle:
        "Automation is an investment. It delivers the highest ROI when these conditions are met:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Best Fit If...",
          variant: "green",
          items: [
            "You receive 20+ inbound inquiries per week",
            "You have a repeatable sales or booking process",
            "You lose leads because you can't answer the phone or respond fast enough",
            "You have a database of 500+ past customers or old leads",
          ],
        },
        {
          icon: XCircle,
          heading: "Wait/Skip If...",
          variant: "neutral",
          items: [
            "You are a referral-only business with no cold inbound volume",
            "Every project is a custom one-off with no repeatable steps",
            "Your total lead volume is under 5 inquiries per month",
            "You don't have a CRM or a centralized way to store customer data yet",
          ],
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proven results in service industries",
      subtitle: "Real outcomes from businesses that implemented these automation frameworks:",
      studies: [
        {
          industry: "Restaurant & Booking",
          headline: "24/7 AI Voice Receptionist for a NYC Restaurant",
          body: "Stopped losing after-hours reservations and freed up 15 hours of management time per week by automating phone FAQs and booking.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce & Lead Gen",
          headline: "Full CRM & Lead Follow-Up for an Auto Parts Brand",
          body: "Automated follow-up for 5,600+ leads, increasing conversion rate by 185% through systematic segmentation and instant response.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
    {
      type: "table",
      title: "Decision matrix: which automation to start with",
      subtitle:
        "Your first automation should target your biggest bottleneck. Use this matrix to identify it:",
      headers: ["Impact", "Setup cost", "Time to ROI"],
      rows: [
        {
          label: "Speed-to-lead response",
          values: ["Very high", "$1K–$2K", "Same week"],
        },
        {
          label: "Follow-up sequences",
          values: ["High", "$1.5K–$3K", "2–4 weeks"],
        },
        {
          label: "AI appointment booking",
          values: ["High", "$2K–$5K", "1–2 weeks"],
        },
        {
          label: "Database reactivation",
          values: ["Medium–High", "$1.5K–$3K", "1–2 weeks"],
        },
        {
          label: "Review automation",
          values: ["Medium (compounds)", "$500–$1.5K", "2–4 weeks"],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which automation fits your situation",
      subtitle:
        "Different businesses have different bottlenecks. Here's how to match the automation to your specific problem:",
      options: [
        {
          icon: Phone,
          heading: "You're losing leads to slow response",
          highlighted: true,
          items: [
            "Leads submit a form or call and don't hear back for hours",
            "Your competitors are booking the same leads while you're on a job site",
            "You know leads are coming in but your conversion rate is low",
            "Start with: Speed-to-lead response → then add follow-up sequences",
          ],
        },
        {
          icon: CalendarCheck,
          heading: "You're losing leads to booking friction",
          highlighted: false,
          items: [
            "Leads call after hours and get voicemail — most never call back",
            "Phone tag is killing your booking rate",
            "Your team spends too much time on scheduling calls",
            "Start with: AI appointment booking → then add speed-to-lead",
          ],
        },
        {
          icon: MailCheck,
          heading: "You have leads but aren't working them",
          highlighted: false,
          items: [
            "Your CRM has hundreds or thousands of contacts with no active follow-up",
            "Past customers haven't heard from you since their last service",
            "You know revenue is sitting in your database but don't have time to reach out",
            "Start with: Database reactivation → then add review automation",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "The right implementation order",
      subtitle:
        "Starting with the wrong automation wastes money. Here's the sequence that produces results fastest:",
      blocks: [
        {
          heading: "Step 1: Fix speed-to-lead (Week 1)",
          body: "If your leads wait more than 5 minutes for a response, nothing else matters. An instant SMS + email response to every form submission costs under $2K to set up and often doubles your conversion rate. This is always the first domino.",
        },
        {
          heading: "Step 2: Add follow-up sequences (Week 2–3)",
          body: "Once leads get an instant response, add a multi-touch sequence for those who don't book right away. 5–7 messages over 14 days via SMS and email. This recovers 15–25% of leads that would otherwise die. The ROI is immediate because you're working leads you've already paid to acquire.",
        },
        {
          heading: "Step 3: Automate booking (Week 3–4)",
          body: "With speed-to-lead and follow-up in place, the bottleneck shifts to booking. Add an AI voice agent or chatbot to handle scheduling. This removes human labor from the most repetitive part of your sales process and extends your booking hours to 24/7.",
        },
        {
          heading: "Step 4: Reactivate your database (Month 2)",
          body: "Once your inbound pipeline is automated, turn to your existing database. A targeted reactivation campaign to past customers and old leads generates revenue from day one because these people already know who you are.",
        },
        {
          heading: "Step 5: Automate reviews (Month 2–3)",
          body: "Last because it compounds over time rather than producing instant results. Automated review requests after each service call build your Google rating steadily. The effect is cumulative — more reviews mean better local rankings mean more leads into your now-automated pipeline.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What to skip (and why)",
      subtitle:
        "Not every AI automation marketed to service businesses is worth the investment:",
      items: [
        {
          icon: XCircle,
          title: "Skip: AI content generation for social media",
          body: "Automated social posts don't drive leads for most local service businesses. Your time and budget are better spent on the five automations above. Social matters, but it's a brand play — not a lead generation tool for most service companies.",
        },
        {
          icon: AlertTriangle,
          title: "Skip: Complex AI chatbots before the basics work",
          body: "Don't build an AI chatbot with 50 conversation paths when you don't have basic lead follow-up in place. Fix the fundamentals first. A fancy chatbot on a website that doesn't respond to form submissions for 6 hours is solving the wrong problem.",
        },
        {
          icon: DollarSign,
          title: "Skip: Expensive all-in-one platforms you won't use",
          body: "A $500/month platform with 100 features is a bad deal if you use 3 of them. Purpose-built automations targeting your specific bottleneck deliver better ROI than general-purpose tools with steep monthly costs.",
        },
        {
          icon: Clock,
          title: "Skip: Predictive analytics before you have clean data",
          body: "AI-powered demand forecasting and predictive lead scoring sound impressive but require months of clean data to be useful. If you're not consistently tracking leads, jobs, and revenue in a CRM, predictive analytics is premature.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question:
        "How much should a small service business budget for AI automation?",
      answer:
        "Start with $2K–$4K for your first automation (usually speed-to-lead + follow-up sequences). See the ROI before committing more. Most businesses recoup the investment within 30–60 days. A full automation stack (all five) typically costs $6K–$15K total built over 2–3 months.",
    },
    {
      question: "Do I need to change my CRM to use these automations?",
      answer:
        "Usually not. Most automations integrate with whatever CRM you're already using — ServiceTitan, Housecall Pro, Jobber, GoHighLevel, or even spreadsheets. The automation layer sits on top of your existing tools. If your current CRM can't receive data via API or webhook, that's a conversation to have upfront.",
    },
    {
      question: "Can I build these myself with Zapier or Make?",
      answer:
        "Simple speed-to-lead responses, yes. Multi-step sequences with branching logic, error handling, and AI voice agents, usually not without significant time investment. The DIY path works for basic automations but breaks down when reliability matters. If a broken automation means lost revenue, it's worth having someone build it properly.",
    },
    {
      question: "What results should I expect in the first 30 days?",
      answer:
        "With speed-to-lead and follow-up sequences: expect a 20–50% increase in lead-to-booking conversion rate. With AI appointment booking: expect 15–30 additional appointments per month from leads that would have dropped off. With database reactivation: expect 5–15 re-engaged customers in the first campaign. These are typical ranges, not guarantees — results depend on your lead volume and market.",
    },
  ],
  faqSubtitle:
    "Practical answers about AI automation for service businesses",
  ctaHeading: "Want to identify your highest-ROI automation?",
  ctaText:
    "Book a 30-minute call. We'll look at where you're losing leads, identify which automation would have the biggest impact, and map out a realistic implementation plan.",
  ctaSubtext:
    "No generic pitch. Specific recommendations based on your actual numbers.",
  relatedLinks: [
    { label: "All automation guides", href: "/guides" },
    { label: "Case studies", href: "/case-studies" },
    { label: "AI automation consultant for small business", href: "/ai-automation-consultant-small-business" },
    { label: "HVAC automation guide", href: "/ai-automation-for-hvac-companies" },
    {
      label: "AI appointment setter guide",
      href: "/ai-appointment-setter",
    },
    {
      label: "AI lead follow-up guide",
      href: "/ai-lead-follow-up-for-service-businesses",
    },
    {
      label: "HVAC database reactivation",
      href: "/hvac-database-reactivation",
    },
    {
      label: "Automation without a tech team",
      href: "/ai-automation-for-businesses-without-a-tech-team",
    },
  ],
};

export default data;
