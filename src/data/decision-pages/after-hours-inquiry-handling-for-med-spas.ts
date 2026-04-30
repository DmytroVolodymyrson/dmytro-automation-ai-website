import {
  Moon,
  Phone,
  MessageSquare,
  ClipboardList,
  ArrowRightLeft,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  TriangleAlert,
  Clock3,
  BellRing,
  Workflow,
  Sparkles,
  CalendarCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "after-hours-inquiry-handling-for-med-spas",
  metaTitle:
    "After-Hours Inquiry Handling for Med Spas — Capture Consultation Demand After Hours | Dmytro AI",
  metaDescription:
    "After-hours inquiry handling for med spas. Catch consultation requests, missed calls, texts, and web forms after hours, set clear next steps, route urgency cleanly, and stop overnight silence from turning into lost bookings.",
  badgeText: "Med Spa Workflow",
  badgeIcon: Moon,
  h1: "After-Hours Inquiry Handling for Med Spas",
  heroIntro:
    "Many med spas do not only lose consultation demand during office hours. They lose it at night, on weekends, and in the gaps between treatment blocks when nobody can answer fast. A prospective patient fills out a form after dinner, texts a question about a consultation, or calls after the front desk leaves. If the only response is silence until the next morning, the clinic is effectively letting warm demand keep shopping. After-hours inquiry handling for med spas is the narrower workflow that catches those off-hours messages, acknowledges them quickly, separates routine follow-up from higher-urgency cases, and makes the next-business-day handoff cleaner instead of forcing the front desk to reconstruct the conversation from scattered voicemails, text threads, forms, and inbox messages.",
  heroSubtext:
    "Below: what an after-hours med spa workflow should actually handle, how it stays distinct from the broader med spa page, the lighter missed-call text-back page, and the heavier live AI phone-answering page, what proof honestly supports it, and when a clinic should keep this workflow lighter instead of jumping straight to full live phone coverage.",
  sections: [
    {
      type: "cards",
      title: "What after-hours inquiry handling should actually cover in a med spa",
      subtitle:
        "This page only works if it stays tightly on off-hours communication discipline — not the entire patient-communication stack and not fake autonomous treatment guidance.",
      items: [
        {
          icon: Phone,
          title: "Acknowledge consultation calls and missed calls fast",
          body: "If a prospective patient calls after hours or during a busy treatment block, the workflow should acknowledge the request immediately instead of leaving the clinic dependent on voicemail and a next-day callback habit.",
        },
        {
          icon: MessageSquare,
          title: "Catch texts, forms, and simple off-hours questions in one response layer",
          body: "Many med spa inquiries do not start as a call. They come through forms, web chat, text, or social messages asking about consultations, timing, or next steps. The workflow should respond consistently across those channels instead of treating after-hours demand like an inbox lottery.",
        },
        {
          icon: ClipboardList,
          title: "Capture the minimum useful context before staff step in",
          body: "Treatment interest, whether the person is new or returning, urgency, callback preference, and the best next-step timing should be captured so the front desk starts with context instead of another vague message.",
        },
        {
          icon: ArrowRightLeft,
          title: "Separate routine follow-up from the messages that need faster human review",
          body: "A routine consultation request, a simple scheduling question, an existing patient asking for a callback, and an upset message about a treatment issue should not all get identical handling. The workflow should route urgency differently.",
        },
        {
          icon: BellRing,
          title: "Create a clean morning queue instead of voicemail chaos",
          body: "The real win is not only the auto-response. It is that the clinic starts the next day with a prioritized queue showing who asked for what, which conversations already got an acknowledgement, and which ones need a real callback first.",
        },
        {
          icon: Workflow,
          title: "Measure whether the clinic really needs a heavier phone layer",
          body: "A good after-hours workflow shows whether fast acknowledgement and clean routing are enough, or whether the clinic is now losing enough demand that it should step up to broader live AI phone answering.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct inside the med spa cluster",
      subtitle:
        "These pages can coexist when the workflow stage and decision frame stay clear:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for med spas",
          values: [
            "Owners evaluating the broader operating layer across lead follow-up, booking, no-show reduction, recall, reviews, and after-hours communication",
            "Explains the full med spa workflow stack instead of isolating the narrower off-hours response layer",
          ],
        },
        {
          label: "What to automate first for med spas",
          values: [
            "Owners deciding whether their first project should be lead follow-up, booking, no-show reduction, treatment recall, or after-hours handling",
            "Helps choose the first workflow instead of explaining the after-hours workflow itself in detail",
          ],
        },
        {
          label: "Missed call text-back for med spas",
          values: [
            "Clinics that mainly need a lighter fallback after a consultation call is missed",
            "Focuses on immediate SMS recovery after the missed call itself, while this page covers the broader off-hours layer across calls, texts, forms, and triage rules",
          ],
        },
        {
          label: "AI phone answering for med spas",
          values: [
            "Clinics that need live answers on the call because voicemail, callbacks, and lighter after-hours handling are no longer enough",
            "Covers the heavier live-answering layer, while this page stays on fast acknowledgement, intake, routing, and next-business-day handoff across off-hours channels",
          ],
        },
        {
          label: "Consultation booking and reminder automation for med spas",
          values: [
            "Clinics where the bigger leak starts after interest already exists and the consult still has to get confirmed and kept on the calendar",
            "Focuses on scheduling, confirmations, reminders, and reschedules after the patient is already in motion — not the off-hours first-response layer",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your med spa?",
      subtitle:
        "Best fit when off-hours inquiry volume is high enough that overnight silence is already costing trust, consults, or front-desk time.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Your clinic gets meaningful consultation demand through calls, forms, or texts after hours",
            "Voicemail or next-day callback habits are already costing warm inquiries",
            "The front desk starts the morning piecing together what happened overnight from multiple channels",
            "You want a believable fast acknowledgement without pretending the clinic has fully staffed 24/7 coverage",
            "You can define which situations deserve faster human escalation versus routine next-business-day follow-up",
            "A cleaner off-hours response layer would improve both conversion and front-desk calm",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your after-hours inquiry volume is low and the current manual callback habit is already fast and reliable",
            "The bigger leak is still daytime lead response, booking friction, or recall discipline — not off-hours communication",
            "You expect automation to answer nuanced treatment-fit, contraindication, or financing questions without human review",
            "There is no clear owner for callbacks, inboxes, or text replies once the system captures the inquiry",
            "You are unwilling to define realistic urgency rules or approved response boundaries before launch",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails matter here because speed and trust are the whole point",
      subtitle:
        "A good after-hours workflow feels calm and credible. A bad one creates more cleanup than the original silence.",
      items: [
        {
          icon: ShieldCheck,
          title: "Set expectations clearly instead of pretending the full conversation is happening overnight",
          body: "The workflow should acknowledge the inquiry, explain the next step, and capture enough context for follow-up. It should not pretend the clinic is delivering full treatment advice, package sales, or medical judgment after hours.",
        },
        {
          icon: TriangleAlert,
          title: "Escalate obvious risk and emotional urgency early",
          body: "An upset patient, a complaint tied to a treatment issue, or another message with real risk should route differently from a routine consultation request or pricing-range question. Faster routing matters more than clever copy.",
        },
        {
          icon: Clock3,
          title: "Channel mix changes the right response",
          body: "A missed call, a text asking about Botox timing, a web form requesting a consultation, and a returning patient asking for a callback should not all get identical handling. Better systems use source and intent to shape the response and handoff path.",
        },
        {
          icon: Sparkles,
          title: "Use this workflow to diagnose whether the clinic needs a heavier phone layer",
          body: "If fast acknowledgement and cleaner routing solve most of the leak, great. If off-hours conversations keep needing more real-time handling, the data will show when the clinic should step up to live AI phone answering instead of guessing.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical med spa after-hours workflow usually works",
      subtitle:
        "The strongest version is simple: capture the inquiry fast, set the next expectation, route obvious exceptions, and hand the rest to staff with context attached.",
      blocks: [
        {
          heading: "Off-hours demand enters one controlled response layer",
          body: "Calls, missed calls, forms, texts, and simple web inquiries should land in one visible system or at least one source of truth. That removes the usual morning scramble of checking five places and hoping the right person saw the lead first.",
        },
        {
          heading: "The first response confirms receipt and offers one believable next step",
          body: "The person should know the clinic saw the message, what happens next, and whether the next response is automated acknowledgement, a callback, or a booking-related follow-up. The goal is calm clarity, not a long script.",
        },
        {
          heading: "Routine consult interest stays warm while higher-risk messages route differently",
          body: "Many after-hours messages only need quick acknowledgement and a morning handoff. Others need a faster human review. The workflow should protect both without making every conversation feel like the same canned response.",
        },
        {
          heading: "The front desk starts the day with cleaner context",
          body: "Instead of replaying voicemails and piecing together half-finished threads, staff inherit treatment interest, callback preference, urgency hints, and the message source. That is what turns an auto-response into an actual operating improvement.",
        },
        {
          heading: "The clinic learns what kind of off-hours coverage is actually worth paying for",
          body: "Over time, this workflow shows how many inquiries arrive after hours, where callbacks still lag, and whether the right next investment is better callback discipline, a stronger missed-call text-back layer, or full live AI phone answering.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published med-spa-only after-hours case study on the site yet. The honest proof frame is the live med spa cluster, the generic after-hours and phone-handling guides, and the published call-handling case study already live.",
      studies: [
        {
          industry: "Med spa parent cluster",
          headline: "The live med spa parent already names after-hours inquiry handling as one of the clearest bounded workflow families in the vertical",
          body: "That broader page already isolates lead follow-up, booking, no-show reduction, review requests, treatment recall, and after-hours handling as distinct operational layers. This child extracts the off-hours response layer instead of stretching the broader page to answer it vaguely.",
          link: "/ai-automation-for-med-spas",
        },
        {
          industry: "First-project scoping proof",
          headline: "The med spa first-project page already frames after-hours handling as a separate buyer decision beside lead follow-up, booking, no-show reduction, and recall",
          body: "That makes this page defensible as a narrower child. It does not reopen the whole cluster. It isolates the after-hours workflow for clinics that already know off-hours response speed is one of the main leaks.",
          link: "/what-to-automate-first-for-med-spas",
        },
        {
          industry: "Generic after-hours + phone proof",
          headline: "The generic after-hours and phone-handling guides already prove the broader response and routing mechanics",
          body: "Those pages explain immediate acknowledgement, intake capture, routing, and when businesses step up from lighter fallback layers to heavier live phone coverage. This med spa page grounds the same mechanics in consultation demand, front-desk overload, and patient shopping behavior after hours.",
          link: "/after-hours-lead-capture-for-service-businesses",
        },
        {
          industry: "Published call-handling proof",
          headline: "Paris Cafe proves the business value of not letting after-hours inbound demand die in silence",
          body: "A restaurant is not a med spa, but the operating principle is directly relevant: when calls and messages sit overnight with no clear next step, demand leaks. This page applies that response-speed logic to consultation interest and front-desk handoff inside a med spa workflow.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
        { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
        { label: "Missed call text-back for med spas", href: "/missed-call-text-back-for-med-spas" },
        { label: "AI phone answering for med spas", href: "/ai-phone-answering-for-med-spas" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from missed-call text-back for med spas?",
      answer:
        "Missed-call text-back is the lighter fallback after a call is already missed. This page is broader. It covers the off-hours response layer across missed calls, forms, texts, and routing rules, including what should happen before the next business-day handoff even when the inquiry did not start as one missed call.",
    },
    {
      question: "How is this different from AI phone answering for med spas?",
      answer:
        "AI phone answering is the heavier live-answering layer that handles more of the conversation on the call itself. This page is about after-hours intake, acknowledgement, routing, and context capture across off-hours channels. It is often the narrower workflow a clinic should implement before deciding whether live answering is necessary.",
    },
    {
      question: "What does a focused after-hours inquiry workflow usually cost for a med spa?",
      answer:
        "A focused after-hours inquiry workflow usually lands around $2K-$4K depending on channel mix, missed-call handling, booking logic, routing rules, and whether the build includes only acknowledgement and handoff or also a heavier voice layer.",
    },
    {
      question: "Should every after-hours med spa message wake someone up?",
      answer:
        "Usually no. The point is the opposite: acknowledge quickly, separate routine follow-up from the messages that really deserve faster human attention, and avoid making the front desk reconstruct overnight demand from scratch the next morning.",
    },
    {
      question: "When does this turn into a broader live AI phone-answering project?",
      answer:
        "Usually when a meaningful share of off-hours inquiries need a real answer right away, when callbacks and lightweight acknowledgment are no longer enough, or when the clinic keeps losing consultation demand because patients expect live help on the call instead of a next-day follow-up.",
    },
  ],
  faqSubtitle:
    "Practical questions from med spa owners trying to protect off-hours consultation demand without overbuilding the phone layer too early",
  ctaHeading: "Need a cleaner after-hours response layer before more consultation demand goes cold overnight?",
  ctaText:
    "Book a 30-minute call. We will look at how your clinic handles after-hours calls, forms, texts, and callback ownership now, then tell you whether a lighter off-hours workflow is enough or whether you already need a heavier live phone layer.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about where off-hours demand is leaking today.",
  relatedLinks: [
    { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
    { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
    { label: "Missed call text-back for med spas", href: "/missed-call-text-back-for-med-spas" },
    { label: "AI phone answering for med spas", href: "/ai-phone-answering-for-med-spas" },
    { label: "After-hours lead capture for service businesses", href: "/after-hours-lead-capture-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
