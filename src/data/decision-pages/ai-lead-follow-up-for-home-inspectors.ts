import {
  ClipboardCheck,
  Timer,
  MessageSquare,
  Users,
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Phone,
  Clock3,
  BarChart3,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-for-home-inspectors",
  metaTitle:
    "AI Lead Follow-Up for Home Inspectors — Faster Agent Response | Dmytro AI",
  metaDescription:
    "AI lead follow-up for home inspectors. Faster response to agent and buyer inquiries, short nurture before the inspection is booked, light qualification, and cleaner handoff while you are still on-site.",
  badgeText: "Home Inspector Workflow",
  badgeIcon: ClipboardCheck,
  h1: "AI Lead Follow-Up for Home Inspectors",
  heroIntro:
    "Many home inspectors do not mainly lose work because their inspection quality is weak. They lose it earlier — when an agent calls during an attic crawl, a buyer fills out a request form after hours, or a referral arrives while you are still driving between properties and nobody follows up fast enough. In home inspection, the first serious response often decides who gets the booking because agents work on tight timelines and buyers usually contact more than one inspector. AI lead follow-up for home inspectors fixes that narrower early-funnel problem. It answers quickly, keeps the conversation alive over the next few hours or days, captures the next useful detail, and routes real booking intent back to a human before the referral goes cold.",
  heroSubtext:
    "Below: what this home-inspector workflow should actually cover, how it stays distinct from the broader home-inspector page and the existing phone pages, what guardrails matter, and what proof honestly supports it without pretending there is already a home-inspector-only lead-follow-up case study.",
  sections: [
    {
      type: "cards",
      title: "What home-inspector lead follow-up should actually handle",
      subtitle:
        "This page is about the stage after a fresh inquiry or referral arrives but before the inspection is booked. It is earlier than booking automation and broader than the narrower missed-call recovery layer.",
      items: [
        {
          icon: Timer,
          title: "Immediate first response on fresh inquiries",
          body: "When an agent or buyer reaches out, the first reply should land while the inspection need still feels active. That matters because home-inspection work is often tied to offer conditions, tight due-diligence windows, or a buyer comparing several inspectors at once.",
        },
        {
          icon: MessageSquare,
          title: "Short multi-step nurture before the referral disappears",
          body: "One acknowledgement is rarely enough. A stronger workflow follows up over the next few hours and days with one practical next step instead of hoping you remember every web form, text thread, and voicemail after a full day in the field.",
        },
        {
          icon: Users,
          title: "Agent and buyer context captured without a long intake",
          body: "The workflow can collect basics like property type, preferred inspection timing, location, add-on interest, and whether the inquiry came from a real estate agent or a direct buyer. That gives you a faster callback without forcing a long robotic questionnaire.",
        },
        {
          icon: ArrowUpRight,
          title: "Fast handoff once booking intent is real",
          body: "If the agent wants to lock timing, the buyer asks about availability, or someone replies with enough detail to move forward, the conversation should route back to you with context attached instead of starting from zero after another delayed callback.",
        },
        {
          icon: Phone,
          title: "Clear boundary between lead follow-up and phone recovery",
          body: "This workflow can catch web forms, direct referrals, text replies, and broader inquiry threads. It is not just a missed-call text-back. The existing home-inspector phone pages already cover the narrower moment when the original call itself gets missed.",
        },
        {
          icon: BarChart3,
          title: "Visibility into where inspection demand leaks first",
          body: "You can finally see whether opportunities are being lost because response is too slow, follow-up ends too early, nobody owns new referrals cleanly, or live field work keeps pushing callbacks later than the market will tolerate.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the home-inspector cluster",
      subtitle:
        "These pages can coexist when the workflow stage stays clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for home inspectors",
          values: [
            "Inspectors evaluating the broader operating system across lead response, booking, agent nurture, report follow-up, reviews, and phone handling",
            "Explains the full home-inspector automation layer instead of isolating the earliest inquiry-response stage",
          ],
        },
        {
          label: "AI lead follow-up for home inspectors",
          values: [
            "Inspectors who already know the first leak is slow response to fresh agent or buyer inquiries",
            "Focuses on immediate response, short nurture, light qualification, and clean handoff before the inspection is booked",
          ],
        },
        {
          label: "Missed call text-back for home inspectors",
          values: [
            "Inspectors mainly losing demand at the exact moment an on-site missed call goes unanswered",
            "Covers the SMS-first recovery layer after a missed call, not the broader nurture path across referrals, forms, and messages",
          ],
        },
        {
          label: "AI phone answering for home inspectors",
          values: [
            "Inspectors whose callers need live answers during the call itself and who have outgrown lighter callback recovery",
            "Handles live call coverage and routine call intake, not the broader early-funnel nurture sequence across all inquiry channels",
          ],
        },
        {
          label: "Booking automation for home inspectors",
          values: [
            "Inspectors where the main friction starts after intent exists and the next problem is inspection-slot coordination",
            "Would focus on calendar availability, confirmations, reminders, reschedules, and inspection-type logic after the inquiry is already warm",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your home-inspection business?",
      subtitle:
        "Best fit when fresh referral and inquiry demand already exists and the first few hours after it arrives still decide who gets the booking.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "New agent referrals, web forms, or buyer inquiries still sit for too long while you are on-site or driving",
            "The business wins more when it responds first than when it sends a longer message later",
            "You are missing inspection opportunities before the booking conversation really starts",
            "One tighter early-funnel workflow would pay off faster than trying to automate the whole operation at once",
            "A single active referring agent or a handful of recovered bookings each month could justify the build quickly",
            "You want cleaner lead ownership and faster handoff, not just more messages going out",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You already respond to every fresh inquiry within minutes consistently",
            "The bigger leak is booking logistics, report delivery, review generation, or later-stage agent nurture after the inspection is already booked",
            "Inquiry volume is too low for a dedicated lead-follow-up workflow to matter yet",
            "Nobody agrees on who owns new referrals or website leads, so there is no stable trigger to automate",
            "You want automation making inspection judgments, technical recommendations, or edge-case service promises without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep home-inspector lead follow-up useful",
      subtitle:
        "The goal is disciplined speed-to-lead and cleaner handoff — not robotic chasing.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate on top of unclear referral ownership",
          body: "If agent referrals, website forms, missed-call callbacks, and text threads all land in different places with no clear owner, the workflow cannot rescue everything by itself. The business still needs one reliable moment where a new inquiry becomes real.",
        },
        {
          icon: MessageSquare,
          title: "Keep the first reply practical",
          body: "Agents and buyers do not need a long automated brochure. They need proof that someone saw the request, one clear next step, and confidence that the inspection can move forward without another round of phone tag.",
        },
        {
          icon: Clock3,
          title: "Separate fresh-inquiry nurture from booked-inspection messaging",
          body: "A new inquiry should not get the same cadence as a confirmed inspection slot, a report-delivery update, or a post-inspection review request. Strong systems keep those stages separate so the message still fits the moment.",
        },
        {
          icon: CalendarCheck,
          title: "Use qualification to make your callback faster, not to replace your judgment",
          body: "The workflow should collect just enough detail to make the callback easier. It should not pretend to commit to complex timing, unusual property edge cases, or technical inspection advice before you review the situation yourself.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical home-inspector lead-follow-up workflow usually works",
      subtitle:
        "The strongest version is simple: respond fast, keep the referral warm, and hand the conversation off at the right point.",
      blocks: [
        {
          heading: "A new inquiry arrives from a real channel",
          body: "The request comes through a web form, text, ad reply, direct buyer message, or an agent referral while you are already in the field. The workflow catches that demand right away instead of waiting until you finish the inspection block and finally look at your phone.",
        },
        {
          heading: "The first reply lands while timing still matters",
          body: "That first message acknowledges the request and gives one clear next step: reply with the address, confirm the preferred inspection window, note the property type, or request a callback. In inspection work, that timing window is short because contract deadlines and agent expectations are real.",
        },
        {
          heading: "Non-responders enter a short follow-up sequence",
          body: "If there is no reply, the system follows up over the next few hours and days with useful reminders instead of disappearing after one touch. This is usually where manual follow-up breaks because live inspection work takes over the rest of the day.",
        },
        {
          heading: "High-intent replies route back with context attached",
          body: "Once the buyer or agent replies, asks about timing, or wants to book, you inherit the conversation with source, notes, and prior messages attached. That creates a cleaner handoff than trying to reconstruct the lead from a late callback.",
        },
        {
          heading: "The booking layer takes over once the inspection is ready to schedule",
          body: "Lead follow-up should end where a booking workflow begins. Once someone is actively choosing a slot, the next system should handle availability, confirmations, reminders, and reschedules instead of stretching this early-funnel workflow too far.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published home-inspector-specific lead-follow-up case study on the site yet. The honest support comes from the live home-inspector parent page plus published lead-response and structured-follow-up proof already live.",
      studies: [
        {
          industry: "Home-inspector parent page",
          headline: "The broader home-inspector guide already isolates lead follow-up as one of the clearest workflow families",
          body: "That page explicitly separates missed calls, lead follow-up, booking automation, agent nurture, report delivery, and reviews. This child page narrows the earliest inquiry-response stage instead of re-explaining the full operating system.",
          link: "/ai-automation-for-home-inspectors",
        },
        {
          industry: "Lead-response proof",
          headline: "The service-business lead-follow-up guide already proves the same speed-to-lead and handoff pattern this workflow depends on",
          body: "That page covers immediate response, structured follow-up, and clean human handoff in a broader service-business context. This home-inspector child keeps those mechanics but grounds them in agent referrals, transaction timing, and on-site field reality.",
          link: "/ai-lead-follow-up-for-service-businesses",
        },
        {
          industry: "Published CRM proof",
          headline: "The e-commerce CRM case study proves why neglected leads and weak ownership quietly destroy recoverable revenue",
          body: "That project is not a home-inspection deployment, but it is still direct proof that structured follow-up and clear ownership change what happens once leads begin arriving. The same operating logic supports inspection inquiry response before the booking is locked in.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for home inspectors", href: "/ai-automation-for-home-inspectors" },
        { label: "Missed call text-back for home inspectors", href: "/missed-call-text-back-for-home-inspectors" },
        { label: "AI phone answering for home inspectors", href: "/ai-phone-answering-for-home-inspectors" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from missed-call text-back for home inspectors?",
      answer:
        "Missed-call text-back is the narrower recovery layer after a phone call goes unanswered. Lead follow-up is broader. It covers fresh referrals, website forms, text replies, and other early-stage inquiries that need immediate response, short nurture, light qualification, and handoff before the inspection is booked.",
    },
    {
      question: "What does a focused home-inspector lead-follow-up build usually cost?",
      answer:
        "A focused lead-follow-up workflow usually lands around $1.5K-$3.5K depending on how many channels are involved, how much qualification logic is needed, and whether it has to connect into an existing CRM, inbox, booking flow, or inspection-software stack. Broader home-inspector systems cost more when they also include booking automation, report follow-up, reviews, and phone-answering layers.",
    },
    {
      question: "Can this work with my current inspection software or inbox?",
      answer:
        "Usually yes, as long as there is a reliable way to catch fresh inquiries and hand them into your current communication or scheduling layer. API access helps, but practical workflows can also work through forms, synced inboxes, webhooks, or other stable trigger points around the early inquiry-response stage.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main ROI is fewer fresh referrals and buyer inquiries dying in the first hour, more live booking conversations created from the same agent and lead volume, and less personal time wasted reconstructing cold opportunities after the moment that mattered already passed.",
    },
    {
      question: "Will this replace me or an admin person?",
      answer:
        "No. It removes repetitive first-touch and reminder work. Humans still handle real scheduling judgment, unusual property questions, service-area nuance, inspection-specific advice, and the trust-sensitive conversations where a live inspector or admin person should take over.",
    },
  ],
  faqSubtitle:
    "Straight answers for home inspectors deciding whether their first leak is slow response",
  ctaHeading: "Stop losing home-inspection referrals before the booking conversation starts",
  ctaText:
    "Book a 30-minute call. We will look at how fresh referrals and buyer inquiries currently arrive, identify where response is slowing down, and tell you whether lead follow-up, booking automation, or a lighter phone workflow should come first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about where your inspection pipeline is leaking first.",
  relatedLinks: [
    { label: "AI automation for home inspectors", href: "/ai-automation-for-home-inspectors" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "Missed call text-back for home inspectors", href: "/missed-call-text-back-for-home-inspectors" },
    { label: "AI phone answering for home inspectors", href: "/ai-phone-answering-for-home-inspectors" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
