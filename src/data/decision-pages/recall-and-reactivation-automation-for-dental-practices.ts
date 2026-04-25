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
  ShieldCheck,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "recall-and-reactivation-automation-for-dental-practices",
  metaTitle:
    "Recall and Reactivation Automation for Dental Practices — Recover Overdue Patients | Dmytro AI",
  metaDescription:
    "Recall and reactivation automation for dental practices. Bring overdue hygiene, exam, and unscheduled-treatment patients back with interval-based reminders, lapse recovery, and practical front-desk handoff.",
  badgeText: "Dental Workflow",
  badgeIcon: Repeat,
  h1: "Recall and Reactivation Automation for Dental Practices",
  heroIntro:
    "A lot of dental practices do not only lose revenue when a new patient inquiry waits too long. They also lose it later, after the patient already exists in the system. The hygiene recall was due. The periodic exam should have been scheduled. The treatment plan was diagnosed, accepted, or left half-finished, and then nobody followed up consistently because recall depended on a task list, a report someone meant to check, or whoever on the front desk had time that day. Recall and reactivation automation for dental practices fixes that narrower retention workflow. It uses due-date timing, overdue-patient detection, unscheduled-treatment follow-up, simple booking paths, and clean staff handoff so hygiene, exam, and treatment opportunities do not keep quietly dying in the background.",
  heroSubtext:
    "Below: what a practical dental recall and reactivation workflow should actually handle, how it stays distinct from the broader dental cluster and the first-project page, what proof honestly supports it, and when recall is or is not the right next build compared with new-patient follow-up, booking friction, no-show reduction, or after-hours phone coverage.",
  sections: [
    {
      type: "cards",
      title: "What dental recall and reactivation automation should actually handle",
      subtitle:
        "This page is about recovering existing-patient revenue after the relationship already exists — not top-of-funnel lead response and not attendance protection for a visit that is already booked.",
      items: [
        {
          icon: CalendarClock,
          title: "Reminder timing tied to the real recall schedule",
          body: "Hygiene recall, periodic exams, treatment follow-up, and unscheduled treatment do not all belong in the same generic reminder blast. The workflow should trigger from the real due date, last completed visit, or treatment-state logic the office already uses.",
        },
        {
          icon: MessageSquare,
          title: "Outreach that sounds like follow-through, not spam",
          body: "Good recall messaging feels like the practice following up at the right time, not randomly pushing people back onto the schedule. The message should make the next step obvious without sounding like a discount campaign sent to everyone in the database.",
        },
        {
          icon: ArrowRightLeft,
          title: "Easy booking and staff routing when a patient replies",
          body: "When someone says they are ready to come back, asks whether they are due, or wants to talk through a treatment plan, the front desk should see why that patient was contacted and what kind of appointment likely fits. That keeps recall from becoming another manual inbox puzzle.",
        },
        {
          icon: Users,
          title: "Overdue-patient recovery before people disappear for another six months",
          body: "Some patients are just now due. Others have already lapsed. Recall automation should separate those states so a normal hygiene nudge does not look the same as a deeper reactivation attempt for someone who quietly fell off the schedule.",
        },
        {
          icon: BellRing,
          title: "Unscheduled-treatment follow-up with the right timing and tone",
          body: "When restorative, cosmetic, or larger treatment work has not been scheduled yet, the workflow can support structured follow-up instead of leaving accepted or still-considering treatment to memory. That only works if the timing and escalation rules are clear.",
        },
        {
          icon: PhoneCall,
          title: "Human handoff when a patient needs reassurance or scheduling help",
          body: "If someone asks about insurance, finances, treatment questions, or whether they should book hygiene versus an exam, the workflow should hand the conversation to a real person quickly. Automation keeps recall disciplined; it should not fake clinical or financial judgment.",
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the dental cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for dental practices",
          values: [
            "Owners evaluating the broader patient-communication and front-desk system",
            "Explains the whole dental operating layer across new-patient response, booking, reminders, recall, reviews, and after-hours coverage",
          ],
        },
        {
          label: "What to automate first for dental practices",
          values: [
            "Owners choosing which single workflow should come first",
            "Compares new-patient follow-up, booking and reminders, recall/reactivation, no-show reduction, and after-hours call handling before a broader rollout",
          ],
        },
        {
          label: "Booking confirmation and reminder automation",
          values: [
            "Practices that already know the main leak is confirmation discipline, reminders, and reschedules for booked appointments",
            "Focuses on protecting a visit that is already on the calendar",
          ],
        },
        {
          label: "Recall and reactivation automation for dental practices",
          values: [
            "Practices where the bigger leak is overdue hygiene, exam, or unscheduled-treatment patients quietly falling out of the system",
            "Stays tightly on due-date reminders, lapse recovery, treatment follow-through, and getting existing patients back onto the schedule",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your dental practice?",
      subtitle:
        "Best fit when the practice already has patient history and follow-through value to recover, but recall discipline is weak enough that overdue patients keep slipping away.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Hygiene recall, periodic exams, or unscheduled treatment follow-up depends too much on memory or one-off staff effort",
            "You can already see overdue patients in the system, but nobody owns the outreach consistently",
            "The practice already paid to acquire these patients once, so recovering them is often higher ROI than buying more top-of-funnel demand first",
            "One or two recovered hygiene or treatment appointments per week would likely justify the build",
            "You need a narrower patient-retention workflow before funding a broader front-desk automation layer",
            "Your team wants cleaner recall discipline without pretending automation should replace real staff conversations",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The earlier expensive leak is still slow new-patient response or missed-call coverage before anyone ever books",
            "The office already runs disciplined recall and very few overdue patients fall through",
            "Your patient data is too messy to tell who is due for hygiene, an exam, or treatment follow-up",
            "The main problem is no-shows on already-booked appointments, not lapsed recall patients",
            "You want automation making clinical, insurance, or financing judgments without staff review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that make dental recall workflows work",
      subtitle:
        "The goal is not more reminder volume. It is more recovered chair time and less overdue patient revenue quietly disappearing.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate recall on dirty due-date data",
          body: "If the practice cannot reliably tell whether someone is due for hygiene, overdue for an exam, or sitting on unscheduled treatment, automation will fire at the wrong time. Clean the patient-state signal before you automate outreach.",
        },
        {
          icon: Repeat,
          title: "Treat routine recall and deeper reactivation differently",
          body: "A patient who is due this week should not get the same message as someone who vanished months ago after incomplete treatment. Good recall workflows separate on-time reminders from true reactivation so the tone and urgency still make sense.",
        },
        {
          icon: ShieldCheck,
          title: "Keep the workflow operational, not clinical",
          body: "Automation can remind, route, and help schedule. It should not imply a diagnosis, answer treatment questions that need staff judgment, or push people into the wrong appointment type without review.",
        },
        {
          icon: BarChart3,
          title: "Measure recovered appointments, not texts sent",
          body: "The KPI is not how many reminders went out. It is whether more overdue patients actually booked, fewer accepted treatments stayed unscheduled, and the front desk spent less time manually chasing people who should have been contacted already.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical dental recall and reactivation workflow usually works",
      subtitle:
        "The clean version is simple: know who is due, start the right timing clock, and route booking intent back to staff with context attached.",
      blocks: [
        {
          heading: "A completed visit or treatment-state update starts the recall clock",
          body: "Once the practice knows what happened at the last visit and when the patient should come back, recall stops being a vague promise and becomes a real operating workflow with timing behind it.",
        },
        {
          heading: "The first reminder lands when the patient is actually due",
          body: "The outreach should arrive when hygiene, exam, or treatment follow-up timing makes sense — not weeks too early and not months after everyone forgot. That keeps the message credible and more likely to get a reply.",
        },
        {
          heading: "Later touches recover patients who quietly drifted",
          body: "If the first message gets ignored, the workflow can move into slower reactivation steps for people who already lapsed. This is usually where manual recall breaks down, because nobody has time to keep checking overdue lists every day.",
        },
        {
          heading: "Replies route back to the front desk with the reason for outreach attached",
          body: "When a patient replies, the team should see whether the reminder was about hygiene, a periodic exam, or unscheduled treatment. That makes scheduling faster and keeps the office from rebuilding the story from scratch.",
        },
        {
          heading: "Owners finally see where patient follow-through is leaking",
          body: "Over time the office can see which recall categories lapse most often, which reminders actually bring people back, and whether the bigger problem is weak data, weak ownership, or weak messaging. That makes recall automation both a retention workflow and an operations diagnostic.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is not a published dental recall case study on the site yet. The honest support is the live dental cluster plus adjacent published reactivation and CRM proof that shows the same timing and handoff mechanics.",
      studies: [
        {
          industry: "Dental cluster",
          headline: "The live dental pages already isolate recall and reactivation as one of the clearest workflow leaks in the practice",
          body: "The broader dental page and the first-project scoping page both identify recall/reactivation as a distinct problem beside new-patient response, booking, no-show reduction, and after-hours handling. This child page narrows that one retention layer instead of re-explaining the whole dental operating system.",
          link: "/ai-automation-for-dental-practices",
        },
        {
          industry: "Published reactivation proof",
          headline: "The generic client reactivation guide already covers the core retention pattern this workflow depends on",
          body: "That page is not dental-specific, but it proves the operating pattern: identifying dormant contacts, restarting the conversation at the right time, and handing live replies back to a human cleanly. This page applies the same logic to overdue hygiene, exam, and treatment follow-up.",
          link: "/client-reactivation-automation",
        },
        {
          industry: "Published CRM and handoff proof",
          headline: "The e-commerce CRM case study still proves why structured follow-up and ownership beat memory-driven pipelines",
          body: "That project is not a dental deployment, but it is direct proof that stage visibility, timing, and handoff discipline materially change what gets recovered. The same operating principle supports dental recall and unscheduled-treatment follow-up.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for dental practices", href: "/ai-automation-for-dental-practices" },
        { label: "What to automate first for dental practices", href: "/what-to-automate-first-for-dental-practices" },
        { label: "Client reactivation automation", href: "/client-reactivation-automation" },
        { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the broader dental automation page?",
      answer:
        "The broader dental page covers the whole operating layer across inquiries, booking, reminders, recall, reviews, and after-hours coverage. This page is narrower. It is specifically about bringing overdue hygiene, exam, and unscheduled-treatment patients back on time once retention is the main leak.",
    },
    {
      question: "How is this different from the first-project page?",
      answer:
        "The first-project page helps you choose which workflow should come first. This page assumes recall/reactivation is already the workflow you need to evaluate and goes deeper on how that one retention system should work.",
    },
    {
      question: "What does a focused dental recall workflow usually cost?",
      answer:
        "A focused recall/reactivation workflow usually lands around $1.5K-$3K depending on patient-data cleanliness, reminder branching, hygiene versus treatment segmentation, and how many systems need to stay in sync. Broader dental automation costs more when it also includes new-patient follow-up, booking flow, reviews, and after-hours handling.",
    },
    {
      question: "Can this work for hygiene recall and unscheduled treatment at the same time?",
      answer:
        "Usually yes, as long as there is a reliable way to identify why the patient is due and what kind of next step makes sense. Different patient groups can use different timing and routing rules so the office is not treating every overdue patient like the same recall problem.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is recovering production from patients you already paid to acquire. Fewer overdue patients quietly disappear, more hygiene and treatment appointments get back onto the schedule, and the front desk spends less time manually checking who should have been contacted weeks ago.",
    },
  ],
  faqSubtitle:
    "Practical questions about automating dental recall and reactivation",
  ctaHeading: "Need a cleaner way to bring overdue dental patients back?",
  ctaText:
    "Book a 30-minute call. We will look at how your practice tracks recall today, where overdue patient revenue is slipping, and whether a focused recall/reactivation workflow is the cleanest automation to build next.",
  ctaSubtext:
    "No fake dental case-study claims. Just a practical recommendation based on your recall discipline, patient data, and front-desk workflow.",
  relatedLinks: [
    { label: "AI automation for dental practices", href: "/ai-automation-for-dental-practices" },
    { label: "What to automate first for dental practices", href: "/what-to-automate-first-for-dental-practices" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "No-show reduction automation", href: "/no-show-reduction-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
