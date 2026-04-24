import {
  MessageSquare,
  Timer,
  Phone,
  CalendarCheck,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  Bot,
  Clock3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-for-med-spas",
  metaTitle:
    "AI Lead Follow-Up for Med Spas — Faster Consultation Response | Dmytro AI",
  metaDescription:
    "AI lead follow-up for med spas. Faster consultation response, multi-step nurture, cleaner front-desk handoff, and less revenue lost to slow replies or weak follow-up.",
  badgeText: "Med Spa Workflow",
  badgeIcon: Sparkles,
  h1: "AI Lead Follow-Up for Med Spas",
  heroIntro:
    "Most med spas do not lose consultation revenue because nobody wants the treatment. They lose it because the inquiry arrives, sits too long, gets one weak reply, or disappears between Instagram DMs, web forms, missed calls, and a busy front desk. When a prospective patient is comparing Botox, filler, laser, or skincare options, the clinic that responds first and follows through usually gets the consult. AI lead follow-up for med spas fixes that narrower early-funnel workflow. It answers fast, keeps the conversation moving while interest is still hot, captures the next useful detail, and hands real buying intent back to a human before the consult goes cold.",
  heroSubtext:
    "Below: what this med spa workflow actually covers, how it stays distinct from the broader med spa page and the booking / no-show / phone pages already live, what guardrails matter, and what adjacent proof honestly supports it.",
  sections: [
    {
      type: "cards",
      title: "What med spa lead follow-up should actually handle",
      subtitle:
        "This page is about the stage after a consultation inquiry arrives but before the visit is booked. It is earlier than booking reminders and broader than a missed-call text-back.",
      items: [
        {
          icon: Timer,
          title: "Immediate first response",
          body: "The first reply should go out while the prospective patient is still comparing clinics, not the next morning when the front desk finally catches up. That matters for web forms, ad leads, Instagram DMs, texts, and missed-call follow-up alike.",
        },
        {
          icon: MessageSquare,
          title: "Multi-step nurture before the consult is booked",
          body: "One text is rarely enough. Strong lead follow-up keeps the conversation alive over the next few hours and days with useful next steps instead of relying on memory, sticky notes, or whoever happens to be free.",
        },
        {
          icon: Sparkles,
          title: "Light qualification without killing intent",
          body: "The workflow can capture the service of interest, timing, preferred contact channel, and whether the prospect wants a consultation now or is still comparing options. That gives the front desk a cleaner handoff without forcing a long robotic intake.",
        },
        {
          icon: ArrowUpRight,
          title: "Fast routing to the right human",
          body: "When someone wants pricing guidance, asks to book, or shows clear buying intent, the right staff member gets the conversation with context attached instead of reconstructing it from scattered messages.",
        },
        {
          icon: CalendarCheck,
          title: "Clear handoff into booking",
          body: "Lead follow-up should move naturally into the consultation-booking workflow instead of stopping at vague interest. The goal is not endless messaging. It is getting the patient to a real booking conversation faster.",
        },
        {
          icon: BarChart3,
          title: "Visibility into where consult demand leaks",
          body: "Owners can finally see whether the loss is happening because response is too slow, follow-up ends too early, inquiries are poorly routed, or the front desk is drowning during busy periods.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the med spa cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for med spas",
          values: [
            "Owners evaluating the broader operating system across inquiries, booking, reminders, recall, reviews, and after-hours coverage",
            "Explains the whole med spa automation layer instead of isolating the early-funnel speed-to-lead workflow",
          ],
        },
        {
          label: "What to automate first for med spas",
          values: [
            "Owners deciding which single workflow should be the first automation project",
            "Helps choose between lead follow-up, consultation booking, no-show reduction, treatment recall, and after-hours handling before a broader rollout",
          ],
        },
        {
          label: "AI lead follow-up for med spas",
          values: [
            "Clinics that already know the earliest leak is slow first response or weak inquiry nurture",
            "Focuses on immediate response, multi-step follow-up, light qualification, and front-desk handoff before the consult is booked",
          ],
        },
        {
          label: "Consultation booking and reminder automation for med spas",
          values: [
            "Clinics where interest is arriving but booking friction is still the bigger problem",
            "Focuses on time-slot coordination, confirmations, reminder timing, and reschedules after the prospect is already engaged",
          ],
        },
        {
          label: "Missed call text-back for med spas",
          values: [
            "Clinics mainly losing demand at the exact moment a consultation call is missed",
            "Handles the immediate SMS-first phone recovery layer, not the broader nurture path after any inquiry source arrives",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your med spa?",
      subtitle:
        "Best fit when demand exists, consultation value is meaningful, and the first few hours after inquiry still decide who gets the booking.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are spending on ads, social content, SEO, or referrals, but first response is still measured in hours instead of minutes",
            "Consultation inquiries land in too many places and ownership gets fuzzy fast",
            "The clinic wins more when it responds first than when it writes longer nurture copy later",
            "Your front desk is too busy with patients, check-ins, and calls to follow up consistently",
            "One tighter early-funnel workflow would pay off faster than automating the whole patient-communication stack at once",
            "A single saved consult each week could justify the build quickly",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your clinic already responds to every inquiry within a few minutes consistently",
            "The bigger leak is no-shows, repeat-treatment recall, or after-hours call coverage after the booking exists",
            "You get too little inquiry volume for a dedicated lead-follow-up workflow to matter yet",
            "Nobody agrees on who owns new inquiries at all, so there is no stable trigger to automate",
            "You want automation making treatment recommendations or pricing decisions without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep med spa lead follow-up useful",
      subtitle:
        "The goal is disciplined speed-to-lead and cleaner handoff — not robotic chasing.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate on top of chaotic inquiry ownership",
          body: "If DMs, forms, calls, and text replies all live in different places with no clear owner, the workflow cannot rescue everything by itself. The clinic still needs one reliable point where a new inquiry becomes real.",
        },
        {
          icon: Bot,
          title: "Keep qualification light",
          body: "The system should capture the next useful detail and move the prospect toward booking. It should not trap someone in a long scripted intake while they are still deciding which clinic to trust.",
        },
        {
          icon: Phone,
          title: "Escalate real buying intent quickly",
          body: "If the prospect asks to book, wants to speak now, or sounds highly motivated, the conversation should route back to a human fast. Speed matters more than squeezing every reply through automation.",
        },
        {
          icon: Clock3,
          title: "Separate fresh-lead nurture from reminders and recall",
          body: "A new consultation inquiry should not get the same cadence as a booked reminder or a treatment-recall campaign. Strong systems keep those stages separate so the message still fits the moment.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical med spa lead-follow-up workflow usually works",
      subtitle:
        "The strongest version is simple: respond fast, keep the prospect warm, and hand the conversation off at the right point.",
      blocks: [
        {
          heading: "A consultation inquiry arrives from any real channel",
          body: "The prospect fills out a form, replies to an ad, sends an Instagram DM, texts the clinic, or calls and misses the front desk. The workflow catches that new demand right away instead of waiting for whoever notices first.",
        },
        {
          heading: "The first reply goes out while intent still feels urgent",
          body: "That first message acknowledges the request and gives one clear next step: reply with the service they want, request a callback, or move toward booking. In cosmetic and elective services, that timing window is short because the prospect is often comparing multiple clinics at once.",
        },
        {
          heading: "Non-responders enter a short nurture sequence",
          body: "If there is no reply, the system follows up over the next few hours and days with useful reminders instead of disappearing after one touch. This is usually where manual follow-up breaks because the clinic gets busy and urgent live work takes over.",
        },
        {
          heading: "Serious replies route back to staff with context attached",
          body: "When the prospect replies, asks about availability, or wants to book, the front desk inherits the conversation with source, notes, and prior messages attached. That creates a faster live handoff than starting from zero on a callback.",
        },
        {
          heading: "The booking layer takes over once the prospect is ready",
          body: "Lead follow-up should end where booking logistics begin. Once the patient is actively scheduling, the next workflow is confirmations, reminders, and reschedules — not more generic nurture.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no published med-spa-specific lead-follow-up case study on the site yet. The honest support comes from the live med spa cluster plus published lead-response and call-handling proof already live.",
      studies: [
        {
          industry: "Med spa parent page",
          headline: "The broader med spa guide already isolates lead follow-up as one of the clearest workflow families",
          body: "That parent page explicitly frames lead follow-up, consultation booking, no-show reduction, recall, and after-hours handling as separate parts of the operating system. This child page narrows the earliest inquiry-response layer instead of re-explaining the whole stack.",
          link: "/ai-automation-for-med-spas",
        },
        {
          industry: "Lead-response proof",
          headline: "The service-business lead-follow-up guide already proves the same speed-to-lead and nurture pattern this workflow depends on",
          body: "That page covers instant response, structured follow-up, and clean human handoff in a broader service-business context. This med spa child keeps those mechanics but grounds them in consultation demand, front-desk overload, and cosmetic-service buyer behavior.",
          link: "/ai-lead-follow-up-for-service-businesses",
        },
        {
          industry: "Published CRM proof",
          headline: "The e-commerce CRM case study proves why neglected leads and weak follow-up quietly destroy recoverable revenue",
          body: "That project is not a med spa build, but it is direct proof that structured follow-up, ownership, and reactivation matter once inquiries start piling up. The same operating logic supports med spa consultation response before the first visit is booked.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
        { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
        { label: "Consultation booking and reminder automation for med spas", href: "/consultation-booking-and-reminder-automation-for-med-spas" },
        { label: "All guides", href: "/guides" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from consultation booking automation for med spas?",
      answer:
        "Lead follow-up covers the stage before the consult is booked. It focuses on first response, nurture, light qualification, and routing intent back to staff. Consultation-booking automation picks up once the prospect is already engaged and the main friction is scheduling, confirmations, reminders, and reschedules.",
    },
    {
      question: "What does a focused med spa lead-follow-up build usually cost?",
      answer:
        "A focused lead-follow-up workflow usually lands around $1.5K-$3.5K depending on how many channels are involved, how much qualification logic is needed, and whether it needs to connect into an existing CRM, booking platform, or inbox stack. Broader med spa systems cost more when they also include reminders, recall, reviews, and phone-answering layers.",
    },
    {
      question: "Can this work with my existing booking software or CRM?",
      answer:
        "Usually yes, as long as there is a reliable way to catch new inquiries and hand them into your current communication or scheduling layer. API access helps, but practical workflows can also work through forms, webhooks, synced inboxes, or other stable trigger points around the inquiry-response layer.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main ROI is not abstract efficiency. It is fewer consultation inquiries dying in the first hour, more live booking conversations created from the same ad or referral volume, and less front-desk time wasted manually chasing prospects after the moment that mattered already passed.",
    },
    {
      question: "Will this replace my front desk?",
      answer:
        "No. It removes repetitive first-touch and reminder work. Humans still handle pricing nuance, treatment suitability boundaries, unusual patient questions, real booking judgment, and the conversations where trust matters most.",
    },
  ],
  faqSubtitle:
    "Practical questions about lead-follow-up workflows for med spas",
  ctaHeading: "Want more med spa inquiries handled before they go cold?",
  ctaText:
    "Book a 30-minute call. We will look at how your clinic handles new consultation inquiries today, where speed-to-lead is leaking, and whether this narrower lead-follow-up workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No obligation. No generic automation pitch. Just a practical review of your inquiry-response process.",
  relatedLinks: [
    { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
    { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
    { label: "Consultation booking and reminder automation for med spas", href: "/consultation-booking-and-reminder-automation-for-med-spas" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
