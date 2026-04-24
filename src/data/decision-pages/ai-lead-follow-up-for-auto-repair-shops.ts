import {
  Wrench,
  Timer,
  MessageSquare,
  ArrowUpRight,
  ClipboardCheck,
  Phone,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock3,
  BarChart3,
  CalendarClock,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-for-auto-repair-shops",
  metaTitle:
    "AI Lead Follow-Up for Auto Repair Shops — Faster Quote Response | Dmytro AI",
  metaDescription:
    "AI lead follow-up for auto repair shops. Faster first response to fresh repair inquiries, short nurture before the estimate exists, light qualification, and cleaner service-advisor handoff while the shop is busy.",
  badgeText: "Auto Repair Workflow",
  badgeIcon: Wrench,
  h1: "AI Lead Follow-Up for Auto Repair Shops",
  heroIntro:
    "Many auto repair shops do not mainly lose work because the estimate was wrong. They lose it before the estimate even gets written. A driver submits a brake quote form, asks about a check-engine light, replies to a Google ad, or messages about inspection timing while the service advisor is already on the phone, walking the lot, or writing up another ticket. By the time someone calls back, that driver has already reached two other shops and booked diagnostic time with the fastest one. AI lead follow-up for auto repair shops fixes that earlier speed-to-lead problem. It responds quickly, keeps the conversation alive over the next few hours or days, captures the next useful detail, and routes real service intent back to a human before the opportunity goes cold.",
  heroSubtext:
    "Below: what this auto-repair workflow should actually handle, how it stays distinct from the broader auto-repair page and the estimate / appointment / phone pages already live, what guardrails matter, and what proof honestly supports it without pretending there is already an auto-repair-specific lead-response case study.",
  sections: [
    {
      type: "cards",
      title: "What auto-repair lead follow-up should actually handle",
      subtitle:
        "This page is about the stage after a fresh repair inquiry arrives but before an estimate, inspection slot, or booked appointment exists. It is earlier than estimate follow-up and broader than missed-call recovery.",
      items: [
        {
          icon: Timer,
          title: "Immediate first response on fresh repair inquiries",
          body: "The first reply should land while the driver still remembers reaching out. In auto repair, speed matters because people often contact multiple shops about brakes, diagnostics, inspections, or urgent availability and the first serious reply often decides who gets the vehicle.",
        },
        {
          icon: MessageSquare,
          title: "Short multi-step nurture before the lead disappears",
          body: "One acknowledgement is rarely enough. A stronger workflow follows up over the next few hours and days with one practical next step instead of hoping the service advisor remembers every form fill after a packed day at the counter.",
        },
        {
          icon: ClipboardCheck,
          title: "Light qualification that makes the callback easier",
          body: "The workflow can capture basics like the vehicle issue, urgency, preferred callback window, whether the customer wants a diagnostic appointment or a rough ballpark first, and whether the inquiry came from web form, ad, or text. That gives the advisor context without forcing a long robotic intake.",
        },
        {
          icon: ArrowUpRight,
          title: "Fast handoff when service intent is real",
          body: "If the driver replies, asks about timing, or wants to book, the conversation should route back to the right human with context attached instead of starting from zero after another delayed callback.",
        },
        {
          icon: Phone,
          title: "Clear boundary between lead follow-up and phone recovery",
          body: "This workflow can catch web forms, ad leads, webchat replies, and text conversations. It is not just a missed-call text-back. The auto-repair phone pages already cover the narrower moment when the call itself gets missed.",
        },
        {
          icon: BarChart3,
          title: "Visibility into where fresh repair demand leaks first",
          body: "Owners can finally see whether opportunities are being lost because response is too slow, follow-up ends too early, nobody owns new web leads cleanly, or good inquiries keep arriving when the front desk is already overloaded.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the auto-repair cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for auto repair shops",
          values: [
            "Owners evaluating the broader operating system across fresh lead response, estimates, booked appointments, maintenance reminders, and phone handling",
            "Explains the full auto-repair automation layer instead of isolating the earliest inquiry-response stage",
          ],
        },
        {
          label: "What to automate first for auto repair shops",
          values: [
            "Owners deciding which single workflow should be the first project",
            "Helps choose between fresh lead response, missed-call recovery, estimate follow-up, appointment reminders, and maintenance campaigns before a broader rollout",
          ],
        },
        {
          label: "AI lead follow-up for auto repair shops",
          values: [
            "Teams that already know the earliest leak is slow first response to fresh repair inquiries",
            "Focuses on immediate response, short nurture, light qualification, and advisor handoff before the estimate or booked-visit stage starts",
          ],
        },
        {
          label: "Estimate follow-up automation for auto repair shops",
          values: [
            "Shops that already inspect vehicles and send quotes reliably but let too many recommendations die afterward",
            "Starts after pricing or scope already exists and focuses on reminder timing, deferred-work recovery, and open-estimate visibility",
          ],
        },
        {
          label: "Appointment scheduling and reminder automation for auto repair shops",
          values: [
            "Shops that already win the work but waste bay time after the visit is booked",
            "Focuses on confirmations, reminder timing, reschedules, and day-of attendance instead of the earlier lead-response layer",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your auto repair shop?",
      subtitle:
        "Best fit when fresh inquiries already exist and the first few hours after they arrive still decide who gets the car in the bay.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Fresh repair inquiries arrive through web forms, ads, texts, or inboxes and first response is still measured in hours instead of minutes",
            "The service advisor cannot consistently call back every new lead while also handling the counter, phones, and live estimates",
            "You are losing brake, diagnostic, inspection, or general repair inquiries before the estimate process even starts",
            "One tighter early-funnel workflow would pay off faster than trying to automate the whole shop at once",
            "One recovered repair job or a handful of new booked diagnostics each month could justify the build quickly",
            "You care about cleaner lead ownership and faster handoff, not just more messages being sent",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The shop already responds to every fresh inquiry within a few minutes consistently",
            "The bigger leak is open estimates, no-shows, or weak maintenance retention after the customer is already in the system",
            "Inquiry volume is too low for a dedicated lead-follow-up workflow to matter yet",
            "Nobody agrees on who owns new web leads or inbound messages, so there is no stable trigger to automate",
            "You want automation making diagnosis, pricing, or technical service decisions without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep auto-repair lead follow-up useful",
      subtitle:
        "The goal is disciplined speed-to-lead and cleaner advisor handoff — not robotic chasing.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate on top of messy lead ownership",
          body: "If Google Ads leads, website forms, SMS threads, webchat messages, and callback requests all land in different places with no clear owner, the workflow cannot rescue everything by itself. The shop still needs one reliable point where a fresh inquiry becomes real.",
        },
        {
          icon: MessageSquare,
          title: "Keep the first reply short and practical",
          body: "A driver asking about brakes, diagnostics, or inspection timing does not want a long automated brochure. They need proof that someone saw the request, one clear next step, and a sense that the shop is responsive.",
        },
        {
          icon: Clock3,
          title: "Separate fresh-lead nurture from estimate reminders and booked-visit reminders",
          body: "A brand-new inquiry should not get the same cadence as a sent estimate or a booked appointment. Strong systems keep those stages separate so the message still fits the moment.",
        },
        {
          icon: CalendarClock,
          title: "Use qualification to make the advisor faster, not to replace the advisor",
          body: "The workflow should collect just enough detail to make the callback easier. It should not pretend to diagnose the vehicle, price the repair, or over-promise availability without a real human taking over.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical auto-repair lead-follow-up workflow usually works",
      subtitle:
        "The strongest version is simple: answer quickly, keep the driver warm, and hand the conversation off at the right point.",
      blocks: [
        {
          heading: "A new repair inquiry arrives from a real channel",
          body: "The driver fills out a form, responds to an ad, sends a message, or asks about timing while comparing several local shops. The workflow catches that fresh demand right away instead of waiting until whoever notices first finally gets time to respond.",
        },
        {
          heading: "The first reply lands while the repair problem still feels urgent",
          body: "That first message acknowledges the request and gives one clear next step: reply with the issue, confirm a callback window, share the year/make/model, or move toward a diagnostic appointment. In auto repair, that timing window is short because people usually contact more than one shop when the car problem is active now.",
        },
        {
          heading: "Non-responders enter a short follow-up sequence",
          body: "If there is no reply, the system follows up over the next few hours and days with useful reminders instead of disappearing after one touch. This is usually where manual follow-up breaks because the service advisor is buried under live customers and open tickets.",
        },
        {
          heading: "High-intent replies route back to the advisor with context attached",
          body: "Once the driver replies, asks about timing, or wants to get scheduled, the shop inherits the conversation with source, notes, and prior messages attached. That creates a faster handoff than reconstructing the lead from a late callback.",
        },
        {
          heading: "The next workflow takes over once the estimate or visit stage starts",
          body: "Lead follow-up should end where estimate follow-up, appointment reminders, or the phone-recovery workflow begins. Once the shop is actively quoting or scheduling, the narrower downstream page should own that stage instead of stretching this workflow too far.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published auto-repair-specific lead-follow-up case study on the site yet. The honest support comes from the live auto-repair cluster plus published lead-response and structured-follow-up proof already live.",
      studies: [
        {
          industry: "Auto-repair parent page",
          headline: "The broader auto-repair guide already isolates fresh lead handling as a distinct operating problem",
          body: "That parent page separates missed calls, estimate follow-up, appointment workflows, maintenance reminders, and broader customer follow-up. This child page narrows the earliest inquiry-response stage instead of re-explaining the whole stack.",
          link: "/ai-automation-for-auto-repair-shops",
        },
        {
          industry: "Lead-response proof",
          headline: "The service-business lead-follow-up guide already proves the same speed-to-lead and handoff pattern this workflow depends on",
          body: "That page covers instant response, short structured follow-up, and clean human handoff in a broader service-business context. This auto-repair child keeps those mechanics but grounds them in repair urgency, service-advisor overload, and diagnostic-booking context.",
          link: "/ai-lead-follow-up-for-service-businesses",
        },
        {
          industry: "Published CRM proof",
          headline: "The Instagram lead-generation case study proves why fast, structured outreach matters once leads start arriving",
          body: "That project is not an auto-repair build, but it is direct proof that speed, ownership, and disciplined follow-up change what happens after a lead enters the system. The same operating logic supports auto-repair inquiry response before the estimate is written.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "AI automation for auto repair shops", href: "/ai-automation-for-auto-repair-shops" },
        { label: "What to automate first for auto repair shops", href: "/what-to-automate-first-for-auto-repair-shops" },
        { label: "Estimate follow-up automation for auto repair shops", href: "/estimate-follow-up-automation-for-auto-repair-shops" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from estimate follow-up automation for auto repair shops?",
      answer:
        "Lead follow-up covers the stage before the estimate is written. It focuses on first response, short nurture, light qualification, and routing fresh repair intent back to a human. Estimate follow-up starts later, after pricing or recommendations already exist and the customer has gone quiet.",
    },
    {
      question: "What does a focused auto-repair lead-follow-up build usually cost?",
      answer:
        "A focused lead-follow-up workflow usually lands around $1.5K-$3.5K depending on how many channels are involved, how much qualification logic is needed, and whether it has to connect to an existing CRM, inbox, booking flow, or shop-management layer. Broader auto-repair systems cost more when they also include estimate reminders, booked-visit messaging, maintenance campaigns, and phone-answering layers.",
    },
    {
      question: "Can this work with my current shop software or inbox?",
      answer:
        "Usually yes, as long as there is a reliable way to catch fresh inquiries and hand them into your current communication or scheduling layer. API access helps, but practical workflows can also work through forms, webhooks, synced inboxes, or other stable trigger points around the early inquiry-response stage.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main ROI is fewer fresh repair inquiries dying in the first hour, more live diagnostic or booking conversations created from the same ad and referral volume, and less advisor time wasted reconstructing cold leads after the moment that mattered already passed.",
    },
    {
      question: "Will this replace the service advisor?",
      answer:
        "No. It removes repetitive first-touch and reminder work. Humans still handle technical questions, real diagnosis, pricing nuance, scheduling judgment, trust-sensitive conversations, and the moments where an actual advisor closes the work.",
    },
  ],
  faqSubtitle:
    "Practical questions from auto repair shops that know fresh repair inquiries are leaking somewhere before the estimate stage starts",
  ctaHeading: "Want faster follow-up on new repair inquiries before the customer books with another shop?",
  ctaText:
    "Book a 30-minute call. We will look at your current inquiry flow, response timing, advisor handoff, and where fresh repair leads are actually stalling, then map the smallest workflow that would fix the leak without overbuilding it.",
  ctaSubtext:
    "No obligation. No generic automation pitch. Just a practical look at where your shop is losing speed-to-lead.",
  relatedLinks: [
    { label: "AI automation for auto repair shops", href: "/ai-automation-for-auto-repair-shops" },
    { label: "What to automate first for auto repair shops", href: "/what-to-automate-first-for-auto-repair-shops" },
    { label: "Estimate follow-up automation for auto repair shops", href: "/estimate-follow-up-automation-for-auto-repair-shops" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
