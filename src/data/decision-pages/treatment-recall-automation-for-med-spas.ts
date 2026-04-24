import {
  Repeat,
  CalendarClock,
  MessageSquare,
  ArrowRightLeft,
  Users,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BellRing,
  PhoneCall,
  BarChart3,
  Sparkles,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "treatment-recall-automation-for-med-spas",
  metaTitle:
    "Treatment Recall Automation for Med Spas — Bring Patients Back on Time | Dmytro AI",
  metaDescription:
    "Treatment recall automation for med spas. Bring Botox, filler, laser, and skincare patients back on time with interval-based reminders, lapse recovery, and practical front-desk handoff.",
  badgeText: "Med Spa Workflow",
  badgeIcon: Repeat,
  h1: "Treatment Recall Automation for Med Spas",
  heroIntro:
    "A lot of med spas do not have a lead problem. They have a return-visit problem. The first consultation happened, the treatment plan was sold, the patient said they would be back in three months, and then nothing happened because recall lived in somebody's memory, a sticky note, or a calendar nobody checked consistently. Treatment recall automation for med spas fixes that narrower retention workflow. It uses treatment-interval reminders, lapse detection, simple rebooking paths, and clean front-desk handoff so Botox, filler, laser, skincare, and membership patients come back on time instead of quietly aging out of the calendar.",
  heroSubtext:
    "Below: what a practical med spa treatment-recall workflow should actually handle, how it stays distinct from the broader med-spa page, the first-project scoping page, the consultation-booking child, and the no-show child, what proof honestly supports it, and when recall is or is not the right next automation to build.",
  sections: [
    {
      type: "cards",
      title: "What treatment recall automation should actually handle in a med spa",
      subtitle:
        "This page is about repeat-treatment retention after a patient already exists in your system — not top-of-funnel lead response and not attendance protection for a visit that is already booked.",
      items: [
        {
          icon: CalendarClock,
          title: "Reminder timing matched to real treatment intervals",
          body: "Botox, filler, laser packages, facials, memberships, and skincare plans do not all come back on the same schedule. The workflow should trigger from the real treatment type, last visit date, or cadence the clinic already uses instead of blasting everyone with the same generic reminder.",
        },
        {
          icon: MessageSquare,
          title: "Outreach that feels like follow-through, not spam",
          body: "A good recall sequence sounds like a clinic following up at the right time, not a desperate promotion. It can remind the patient why they are due, what kind of visit they usually come back for, and what the next step is if they want another appointment.",
        },
        {
          icon: ArrowRightLeft,
          title: "Easy rebooking and front-desk routing",
          body: "When someone is ready to come back, the workflow should make it obvious how to request a slot and route the conversation with enough context attached. That way the front desk sees what treatment cycle the patient is likely returning for instead of rebuilding the story from scratch.",
        },
        {
          icon: Users,
          title: "Lapse detection before repeat revenue disappears",
          body: "Some patients are a few weeks late. Others have quietly lapsed for months. Recall automation should distinguish those two states so the clinic can nudge an on-time return differently from a deeper reactivation attempt.",
        },
        {
          icon: BellRing,
          title: "Membership or package renewal touchpoints",
          body: "If the med spa runs memberships, prepaid packages, or recurring skincare programs, the workflow can support renewal timing and utilization reminders so recurring revenue is not left to whoever happens to notice the account first.",
        },
        {
          icon: PhoneCall,
          title: "Human handoff when the patient needs reassurance or a plan change",
          body: "If someone asks about pricing, treatment fit, downtime, or a revised plan, the workflow should route the message back to a real person fast. Automation keeps recall disciplined; it should not fake clinical judgment or trap the patient in canned replies.",
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the med spa cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for med spas",
          values: [
            "Owners evaluating the whole clinic communication and retention layer",
            "Explains the broader system across lead follow-up, consultation booking, no-show reduction, treatment recall, reviews, and after-hours handling",
          ],
        },
        {
          label: "What to automate first for med spas",
          values: [
            "Owners choosing which single workflow should come first",
            "Compares lead follow-up, consultation booking, no-show reduction, treatment recall, and after-hours inquiry handling before a broader rollout",
          ],
        },
        {
          label: "Consultation booking and reminder automation for med spas",
          values: [
            "Clinics losing momentum between consult intent, scheduled visit, reminder timing, and attendance",
            "Focuses on getting consults booked and protecting them before the visit happens",
          ],
        },
        {
          label: "No-show reduction automation for med spas",
          values: [
            "Clinics that already know empty consult or treatment slots are the most expensive leak",
            "Goes deeper on attendance protection itself: confirmation discipline, reminder cadence, reschedules, deposits, and recovering missed visits",
          ],
        },
        {
          label: "Treatment recall automation for med spas",
          values: [
            "Clinics where the bigger leak is repeat-treatment revenue quietly disappearing after the first visit",
            "Stays tightly on interval-based follow-up, lapse recovery, membership or package touchpoints, and getting existing patients back onto the calendar",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your med spa?",
      subtitle:
        "Best fit when your clinic already has patient history and repeat-treatment potential, but recall discipline is weak enough that revenue keeps slipping away between visits.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Patients should be coming back for Botox, filler, laser, skincare, or maintenance visits, but many quietly lapse",
            "Your front desk has no reliable system for interval-based recall beyond memory or manual to-do lists",
            "You already spent to acquire the patient once and want a higher-payoff retention workflow before chasing more top-of-funnel volume",
            "Membership or package utilization depends too much on whoever notices the account first",
            "One or two recovered repeat visits per week would likely justify the build",
            "You need a narrower retention workflow before funding a bigger full-clinic automation layer",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The bigger leak is still slow lead response before a consult is ever booked",
            "Your clinic already runs disciplined recall timing with very few overdue patients",
            "The treatment mix or patient data is too messy to know when someone is actually due",
            "You mostly need no-show protection on already-booked visits rather than recurring recall",
            "You want automation making treatment recommendations or clinical decisions without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that make med spa recall workflows work",
      subtitle:
        "The goal is not more reminder volume. It is more on-time repeat visits and less lapsed treatment revenue.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not build recall on dirty treatment history",
          body: "If the clinic cannot reliably tell what treatment happened, when it happened, or whether the patient is still an active fit for the same cadence, automation will fire at the wrong time. Fix the treatment-history signal first.",
        },
        {
          icon: Repeat,
          title: "Treat on-time reminders and deeper reactivation differently",
          body: "A patient who is due this month should not get the same message as someone who disappeared six months ago. Strong recall workflows separate normal follow-through from true reactivation so the message and urgency still make sense.",
        },
        {
          icon: Sparkles,
          title: "Keep promotional pressure in check",
          body: "The best recall messaging is grounded in continuity and timing, not endless discount blasts. If every reminder turns into a promotion, the clinic teaches patients to ignore routine outreach unless there is a sale attached.",
        },
        {
          icon: BarChart3,
          title: "Measure return visits recovered, not texts sent",
          body: "Success is not how many reminders went out. It is whether more patients rebooked on time, fewer fell off their treatment cadence, and the front desk spent less time manually chasing overdue patients.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical med spa treatment-recall workflow usually works",
      subtitle:
        "The clean version is simple: log the last treatment, start the right timing clock, and route re-engagement when the patient is ready.",
      blocks: [
        {
          heading: "A completed treatment or consult outcome starts the recall clock",
          body: "Once the clinic knows what the patient came in for and when they are likely due again, the next-touch timing becomes explicit. That one step turns recall from a vague hope into a real operating workflow.",
        },
        {
          heading: "The first reminder lands when the patient is actually due",
          body: "The message shows up when the treatment interval makes sense, not every week forever. That keeps the outreach credible and helps the patient feel like the clinic is following through at the right time instead of randomly pushing appointments.",
        },
        {
          heading: "Later touches recover patients who quietly drifted",
          body: "If the first message gets ignored, the workflow can escalate into a slower reactivation sequence that acknowledges the lapse without sounding desperate. This is usually where manual recall breaks down, because nobody has time to keep checking who is overdue.",
        },
        {
          heading: "Replies and booking intent route back to the front desk with context attached",
          body: "When a patient replies, asks about timing, or wants to come back in, the clinic should see the likely treatment cycle and history that triggered the outreach. That lets the front desk move faster and keeps recall from turning into another inbox puzzle.",
        },
        {
          heading: "Owners finally see where repeat-treatment revenue is leaking",
          body: "Over time the clinic can see which services lapse the most, which reminder timing actually brings patients back, and whether the bigger problem is weak patient data, weak messaging, or weak handoff. That makes recall automation both a revenue workflow and an operations diagnostic.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is not a published med-spa recall case study on the site yet. The honest support is the live med-spa cluster plus adjacent published reactivation, CRM, and phone-handling proof that shows the same timing and handoff mechanics.",
      studies: [
        {
          industry: "Med spa cluster",
          headline: "The live med-spa pages already isolate treatment recall as one of the clearest workflow leaks in the clinic",
          body: "The parent page and first-project scoping page both identify treatment recall as a distinct revenue problem beside lead follow-up, booking, no-shows, and after-hours handling. This child page narrows that one retention layer instead of re-explaining the full med spa system.",
          link: "/ai-automation-for-med-spas",
        },
        {
          industry: "Published reactivation proof",
          headline: "The generic client reactivation guide already covers the core retention pattern this workflow depends on",
          body: "That page is not med-spa-specific, but it proves the operating pattern: identifying dormant customers, restarting the conversation at the right time, and handing live replies back to a human cleanly. This page applies the same logic to repeat-treatment timing.",
          link: "/client-reactivation-automation",
        },
        {
          industry: "Published CRM and handoff proof",
          headline: "The e-commerce CRM case study still shows why disciplined follow-up and human handoff beat memory-driven pipelines",
          body: "That project is not a med spa build, but it is direct proof that stage visibility, follow-up timing, and handoff discipline materially change what gets recovered. The same operating principle supports med spa recall and lapse recovery.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
        { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
        { label: "Client reactivation automation", href: "/client-reactivation-automation" },
        { label: "No-show reduction automation for med spas", href: "/no-show-reduction-automation-for-med-spas" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader med spa automation page?",
      answer:
        "The broader med spa page covers the whole clinic communication layer: lead follow-up, consultation booking, no-show reduction, treatment recall, reviews, and after-hours handling. This page is narrower. It is specifically about bringing existing patients back on time once repeat-treatment revenue is the main leak.",
    },
    {
      question: "How is this different from the no-show or consultation-booking pages?",
      answer:
        "Those pages focus on getting a consult booked and protecting an already-booked visit. This page lives later in the lifecycle. It assumes the patient already exists in your system and focuses on interval-based recall, lapse recovery, and getting them back for the next appropriate visit.",
    },
    {
      question: "What does a focused med spa treatment-recall workflow usually cost?",
      answer:
        "A focused treatment-recall workflow usually lands around $1.5K-$3K depending on treatment-history cleanliness, reminder branching, package or membership logic, and how many systems need to stay in sync. Broader med spa automation costs more when it also includes lead follow-up, booking, no-show reduction, reviews, and after-hours handling.",
    },
    {
      question: "Can this work with Botox, filler, laser, or membership patients on different schedules?",
      answer:
        "Usually yes, as long as there is a reliable way to identify the last visit or expected return cadence. Different services can use different timing rules so the clinic is not treating every patient like they are due for the same thing at the same moment.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is recovering repeat-treatment revenue you already earned the right to keep. Fewer overdue patients quietly disappear, more high-intent return visits get back onto the calendar, and the front desk spends less time manually checking who should have been contacted weeks ago.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating treatment recall in a med spa",
  ctaHeading: "Want more repeat-treatment revenue without relying on manual recall?",
  ctaText:
    "Book a 30-minute call. We will look at how your clinic tracks due patients today, where repeat-treatment revenue is slipping, and whether a focused recall workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No fake med-spa case-study claims. Just a practical recommendation based on your treatment mix, patient history, and front-desk recall discipline.",
  relatedLinks: [
    { label: "AI automation for med spas", href: "/ai-automation-for-med-spas" },
    { label: "What to automate first for med spas", href: "/what-to-automate-first-for-med-spas" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "No-show reduction automation for med spas", href: "/no-show-reduction-automation-for-med-spas" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
