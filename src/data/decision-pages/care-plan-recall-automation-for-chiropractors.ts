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
  HeartPulse,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "care-plan-recall-automation-for-chiropractors",
  metaTitle:
    "Care Plan Recall Automation for Chiropractors — Recover Lapsed Patients | Dmytro AI",
  metaDescription:
    "Care plan recall automation for chiropractors. Bring overdue maintenance and treatment-plan patients back with interval-based reminders, lapse recovery, and practical front-desk handoff.",
  badgeText: "Chiropractic Workflow",
  badgeIcon: Repeat,
  h1: "Care Plan Recall Automation for Chiropractors",
  heroIntro:
    "A lot of chiropractic practices do not only lose revenue at the first missed new-patient call. They also lose it later, after the patient already started care. The treatment plan was explained, the maintenance cadence made sense, the patient meant to come back, and then recall depended on somebody remembering to text, call, or check a report that nobody had time to review consistently. Care plan recall automation for chiropractors fixes that narrower retention workflow. It uses visit-interval timing, overdue-patient detection, simple rebooking paths, and clean front-desk handoff so maintenance visits, plan-of-care follow-through, and reactivation do not keep slipping through the cracks.",
  heroSubtext:
    "Below: what a practical chiropractic care-plan recall workflow should actually handle, how it stays distinct from the broader chiropractor page and the first-project scoping page, what proof honestly supports it, and when recall is or is not the right next automation to build.",
  sections: [
    {
      type: "cards",
      title: "What care-plan recall automation should actually handle in a chiropractic practice",
      subtitle:
        "This page is about retention after the patient relationship already exists — not top-of-funnel call capture and not attendance protection for a visit that is already booked.",
      items: [
        {
          icon: CalendarClock,
          title: "Reminder timing tied to the real plan of care",
          body: "A patient on short-term acute visits, monthly maintenance, or a re-exam cycle should not all get the same reminder at the same time. The workflow should use the actual visit cadence, last appointment date, or provider recommendation already driving the plan.",
        },
        {
          icon: MessageSquare,
          title: "Outreach that feels like follow-through, not nagging",
          body: "Good recall sounds like the practice following up on a care recommendation, not chasing people randomly. The messages should acknowledge where the patient is in the plan, make the next step obvious, and avoid turning every touch into generic promotional noise.",
        },
        {
          icon: ArrowRightLeft,
          title: "Easy scheduling handoff when a patient is ready to return",
          body: "When someone replies, asks whether they should come back, or wants a slot, the front desk should see why the patient is being contacted and what kind of visit likely fits. That keeps recall from becoming one more inbox puzzle your team has to reconstruct from memory.",
        },
        {
          icon: Users,
          title: "Lapse detection before patients disappear for months",
          body: "Some patients are only a little overdue. Others have fully dropped out of care. Recall automation should separate those states so an on-time nudge does not look the same as a deeper reactivation attempt for someone who vanished long ago.",
        },
        {
          icon: BellRing,
          title: "Escalation when a plan changed or someone needs reassurance",
          body: "If the patient asks whether they still need care, wants to discuss symptoms, or is unsure what to book, the workflow should hand the conversation to a real person fast. Automation keeps recall disciplined; it should not fake clinical judgment.",
        },
        {
          icon: PhoneCall,
          title: "Visibility into which patients and plans are slipping most often",
          body: "A strong recall workflow shows whether the bigger leak is weak timing, weak ownership, or a specific segment of patients quietly falling out of care. That gives the practice a usable operations signal instead of another vague feeling that recall is messy.",
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the chiropractic cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for chiropractors",
          values: [
            "Owners evaluating the broader patient-communication and front-desk support layer",
            "Explains the whole chiropractic system across intake, scheduling, recall, reminders, reviews, and after-hours coverage",
          ],
        },
        {
          label: "What to automate first for chiropractors",
          values: [
            "Owners choosing which single workflow should come first",
            "Compares missed-call recovery, intake and scheduling, care-plan recall, no-show reduction, and after-hours handling before a broader rollout",
          ],
        },
        {
          label: "Client reactivation automation",
          values: [
            "Businesses that already know the problem is lapsed customers or patients in general",
            "Explains the generic reactivation pattern across dormant contacts, timing, sequencing, and clean handoff",
          ],
        },
        {
          label: "No-show reduction automation",
          values: [
            "Practices that already know the biggest leak is empty slots and weak confirmation discipline",
            "Focuses on attendance protection after the appointment is already booked",
          ],
        },
        {
          label: "Care plan recall automation for chiropractors",
          values: [
            "Practices where the bigger leak is overdue maintenance or treatment-plan patients quietly falling out of care",
            "Stays tightly on visit-interval reminders, overdue-patient recovery, rebooking handoff, and getting existing patients back onto the schedule",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your chiropractic practice?",
      subtitle:
        "Best fit when you already have patient history and follow-through value to recover, but recall discipline is weak enough that maintenance and treatment-plan revenue keeps slipping away.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Patients are supposed to return on a maintenance or treatment cadence, but many quietly disappear",
            "The front desk has no reliable recall system beyond memory, one-off calls, sticky notes, or ad hoc task lists",
            "You already spent to acquire and educate the patient once, so a retention workflow is likely higher ROI than another top-of-funnel build",
            "You can see overdue patients in the system, but nobody owns the follow-up consistently",
            "One or two recovered returning patients per week would likely justify the build",
            "You want a narrower retention workflow before paying for a bigger front-desk automation layer",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The earliest expensive leak is still missed new-patient calls or booking friction before the first visit happens",
            "Your practice already runs disciplined care-plan recall with very few overdue patients",
            "Your patient records are too messy to tell who is actually due and for what kind of visit",
            "You mostly need no-show protection on already-booked visits, not reactivation of lapsed patients",
            "You want automation making care recommendations without human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that make chiropractic recall workflows work",
      subtitle:
        "The goal is not more reminder volume. It is more completed return visits and less patient drop-off between care stages.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate recall on dirty patient-state data",
          body: "If the practice cannot reliably tell what the plan was, when the last visit happened, or whether the patient should still be coming in, automation will fire at the wrong moment. Clean up the patient-state signal before you automate outreach.",
        },
        {
          icon: Repeat,
          title: "Separate normal follow-through from deeper reactivation",
          body: "A patient who is a week late should not get the same message as someone who vanished for four months. Good recall workflows distinguish near-due reminders from true reactivation so the tone and urgency still make sense.",
        },
        {
          icon: HeartPulse,
          title: "Keep the system operational, not clinical",
          body: "Automation can remind, route, and schedule. It should not pretend to diagnose, prescribe, or decide whether a patient still clinically needs the same plan. That boundary protects both trust and workflow clarity.",
        },
        {
          icon: BarChart3,
          title: "Measure recovered visits, not messages sent",
          body: "The KPI is not how many reminders went out. It is whether more overdue patients booked, fewer plans quietly lapsed, and the front desk spent less time manually chasing people who should have been contacted already.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical chiropractic care-plan recall workflow usually works",
      subtitle:
        "The clean version is simple: track the care stage, start the right timing clock, and route return intent cleanly when it appears.",
      blocks: [
        {
          heading: "A completed visit or care recommendation starts the recall clock",
          body: "Once the practice knows what stage of care the patient is in and when they are likely due back, recall stops being a vague hope and becomes a real operating workflow with actual timing behind it.",
        },
        {
          heading: "The first reminder lands when the patient is actually due",
          body: "The outreach should show up when a maintenance or plan-follow-through message makes sense, not because someone suddenly remembered to send one that day. That keeps the message credible and more likely to get a response.",
        },
        {
          heading: "Later touches recover patients who quietly drifted",
          body: "If the first message gets ignored, the workflow can escalate into slower reactivation attempts for people who have already lapsed. This is usually where manual recall breaks down, because nobody has time to keep checking who is now weeks or months overdue.",
        },
        {
          heading: "Replies and booking intent route back to the front desk with context attached",
          body: "When someone wants to come back or asks what they should do next, the team should see what plan stage or visit cadence triggered the outreach. That makes follow-through faster and keeps staff from rebuilding the story manually every time.",
        },
        {
          heading: "Owners finally see where care-plan revenue is leaking",
          body: "Over time the practice can see which patient groups lapse most often, which timing windows recover the most visits, and whether the deeper problem is weak data, weak messaging, or weak ownership. That makes recall automation both a retention workflow and a practical operations diagnostic.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is not a published chiropractic recall case study on the site yet. The honest support is the live chiropractic cluster plus adjacent published reactivation, CRM, and phone-handling proof that shows the same timing and handoff mechanics.",
      studies: [
        {
          industry: "Chiropractic cluster",
          headline: "The live chiropractor pages already isolate care-plan recall as one of the clearest workflow leaks in the practice",
          body: "The parent page and first-project scoping page both identify care-plan recall as a distinct problem beside missed-call recovery, intake and scheduling, no-show reduction, and after-hours handling. This child page narrows that one retention layer instead of re-explaining the whole chiropractic system.",
          link: "/ai-automation-for-chiropractors",
        },
        {
          industry: "Published reactivation proof",
          headline: "The generic client reactivation guide already covers the core retention pattern this workflow depends on",
          body: "That page is not chiropractic-specific, but it proves the operating pattern: identifying dormant contacts, restarting the conversation at the right time, and handing live replies back to a human cleanly. This page applies the same logic to care-plan adherence and overdue-patient recovery.",
          link: "/client-reactivation-automation",
        },
        {
          industry: "Published CRM and handoff proof",
          headline: "The e-commerce CRM case study still proves why structured follow-up and ownership beat memory-driven pipelines",
          body: "That project is not a chiropractic build, but it is direct proof that stage visibility, timing, and handoff discipline materially change what gets recovered. The same operating principle supports care-plan recall and overdue-patient recovery.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for chiropractors", href: "/ai-automation-for-chiropractors" },
        { label: "What to automate first for chiropractors", href: "/what-to-automate-first-for-chiropractors" },
        { label: "Client reactivation automation", href: "/client-reactivation-automation" },
        { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader chiropractor page?",
      answer:
        "The broader chiropractor page covers the whole operating layer across intake, scheduling, recall, reminders, reviews, and after-hours handling. This page is narrower. It is specifically about bringing overdue care-plan and maintenance patients back on time once retention is the main leak.",
    },
    {
      question: "How is this different from the first-project page?",
      answer:
        "The first-project page helps you choose which workflow should come first. This page assumes care-plan recall is the workflow you already need to evaluate and goes deeper on how that one retention system should work.",
    },
    {
      question: "What does a focused chiropractic recall workflow usually cost?",
      answer:
        "A focused care-plan recall workflow usually lands around $1.5K-$3K depending on patient-data cleanliness, reminder branching, scheduling handoff, and how many systems need to stay in sync. Broader chiropractic automation costs more when it also includes missed-call recovery, intake flow, no-show reduction, reviews, and after-hours handling.",
    },
    {
      question: "Can this work with different visit cadences or plan types?",
      answer:
        "Usually yes, as long as there is a reliable way to identify the last visit, likely next-step timing, or plan type. Different patient groups can use different timing rules so the practice is not treating every overdue patient like they are due for the same thing at the same moment.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is recovering patient value you already paid to acquire. Fewer overdue patients quietly disappear, more return visits get back onto the schedule, and the front desk spends less time manually checking who should have been contacted weeks ago.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating care-plan recall in a chiropractic practice",
  ctaHeading: "Need a cleaner way to bring overdue chiropractic patients back?",
  ctaText:
    "Book a 30-minute call. We will look at how your practice tracks care-plan follow-through today, where overdue-patient revenue is slipping, and whether a focused recall workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No fake chiropractic case-study claims. Just a practical recommendation based on your patient cadence, front-desk workflow, and recall discipline.",
  relatedLinks: [
    { label: "AI automation for chiropractors", href: "/ai-automation-for-chiropractors" },
    { label: "What to automate first for chiropractors", href: "/what-to-automate-first-for-chiropractors" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
