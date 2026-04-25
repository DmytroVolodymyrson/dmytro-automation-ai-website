import {
  Calculator,
  Users,
  FileText,
  CalendarCheck,
  MessageSquare,
  Clock,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  BarChart3,
  Bot,
  ClipboardList,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "client-onboarding-automation-for-accounting-firms",
  metaTitle:
    "Client Onboarding Automation for Accounting Firms — Engagement Letters, Intake, Portal Setup | Dmytro AI",
  metaDescription:
    "Automate client onboarding for accounting firms. Standardize engagement-letter delivery, intake forms, document checklists, portal setup, kickoff scheduling, and next-step follow-up without manual email chasing.",
  badgeText: "Accounting Workflow",
  badgeIcon: Calculator,
  h1: "Client Onboarding Automation for Accounting Firms",
  heroIntro:
    "Many accounting firms do not lose momentum because they cannot win the client. They lose momentum in the week after the client says yes. The engagement letter goes out late. The intake form is still missing three days later. Portal access has not been set up. The kickoff or tax-prep call is still waiting on a manual email thread. A partner or admin lead ends up stitching the whole process together from memory while new work keeps arriving. Client onboarding automation for accounting firms fixes that specific post-sale gap. It makes the first steps consistent, visible, and repeatable so new clients stop entering the firm through ad-hoc inbox work.",
  heroSubtext:
    "Below: what onboarding automation should actually handle in an accounting practice, where it stays distinct from the broader accounting page and the newer document-collection child, what adjacent proof honestly supports it, and when this workflow should come before scheduling, prospect-response, or seasonal reactivation automation.",
  sections: [
    {
      type: "cards",
      title: "What onboarding automation actually handles in an accounting firm",
      subtitle:
        "A useful accounting onboarding system does not try to automate accounting judgment. It standardizes the first operational steps after the client is already won:",
      items: [
        {
          icon: FileText,
          title: "Engagement-letter and intake delivery",
          body: "The moment a client is marked won, the firm can send the right engagement letter, intake form, and checklist in the right order instead of relying on someone to remember the first email manually.",
        },
        {
          icon: ClipboardList,
          title: "Checklist-driven next steps",
          body: "New clients get one clean path: sign, complete intake, submit the first documents, and move to the next milestone. That reduces back-and-forth and cuts down on internal guesswork about what is still outstanding.",
        },
        {
          icon: CalendarCheck,
          title: "Kickoff and review scheduling",
          body: "Once the right intake step is complete, the workflow can trigger the consultation, kickoff, tax-prep, or bookkeeping-review booking step automatically instead of leaving calendar coordination buried in email.",
        },
        {
          icon: Users,
          title: "Internal ownership and handoff",
          body: "Admins, preparers, or client-success owners can get the right tasks at the right stage so onboarding stops depending on whoever happened to close the client.",
        },
        {
          icon: MessageSquare,
          title: "Client-facing follow-up",
          body: "The system can send useful reminders when intake forms are incomplete, signatures are missing, or portal setup has not happened yet. Automation keeps the process moving without turning every follow-up into a custom email thread.",
        },
        {
          icon: BarChart3,
          title: "Onboarding visibility",
          body: "The firm can see which new clients are fully onboarded, which are stuck, and where the current drag is really happening. That is difficult when onboarding status lives in inboxes, notes, and memory.",
        },
      ],
    },
    {
      type: "table",
      title: "Manual onboarding vs. automated onboarding",
      subtitle:
        "This is where post-sale admin drag usually shows up inside accounting firms:",
      headers: ["Automated", "Manual"],
      rows: [
        {
          label: "First-step consistency",
          values: [
            "Every new client gets the same onboarding sequence in the right order",
            "Each client experience depends on who sent the first email and when",
          ],
        },
        {
          label: "Status visibility",
          values: [
            "The team can see signed, incomplete, scheduled, and stuck clients centrally",
            "Progress is scattered across inboxes, spreadsheets, and memory",
          ],
        },
        {
          label: "Reminder discipline",
          values: [
            "Missing signatures, intake steps, or portal actions trigger the next follow-up automatically",
            "Follow-up only happens when a staff member remembers to chase it",
          ],
        },
        {
          label: "Calendar coordination",
          values: [
            "Scheduling happens after the right prerequisites are complete",
            "Back-and-forth starts before the client is actually ready",
          ],
        },
        {
          label: "Staff workload",
          values: [
            "Humans step in for exceptions, questions, and relationship-sensitive moments",
            "Humans spend prime admin time moving every basic step manually",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your accounting firm?",
      subtitle:
        "Onboarding automation is strongest when the post-sale process is already predictable enough to standardize:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "Signed clients still take too long to move from yes to active work",
            "Engagement letters, intake forms, portal access, and first meetings regularly stall or arrive out of order",
            "The same 5 to 10 onboarding steps repeat for most new clients or service lines",
            "You already know which first actions every new client should complete",
            "The firm has enough new-client volume that manual onboarding discipline is unreliable",
            "You want a cleaner handoff from sales or partner close to delivery, not more inbox work",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your bigger problem is slow lead flow, not what happens after the client says yes",
            "Every engagement starts differently and there is no stable onboarding sequence yet",
            "The firm only signs a handful of new clients and manual follow-up is still easy",
            "You want automation to answer accounting-specific questions or replace review judgment",
            "The team is not willing to standardize checklist ownership, secure portal usage, or stage definitions",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Important guardrails for accounting onboarding automation",
      subtitle:
        "This workflow can save real time, but it needs clear boundaries:",
      items: [
        {
          icon: ShieldCheck,
          title: "Keep secure portal and signature steps explicit",
          body: "Automation should route clients toward your approved signature flow, portal, and document path. It should not create a looser data-handling process just because email follow-up is easier to automate.",
        },
        {
          icon: FileText,
          title: "Separate onboarding from later document chasing",
          body: "The onboarding page should focus on the first handoff after the client is won. If the real problem is ongoing missing-document reminders during tax prep, that belongs on the narrower document-collection page instead of bloating this one.",
        },
        {
          icon: Clock,
          title: "Design the sequence before busy season chaos starts",
          body: "This workflow is strongest when the firm defines the onboarding stages before client volume spikes. Trying to invent the process mid-rush usually creates a messier rollout.",
        },
        {
          icon: Bot,
          title: "Automation handles the process, not the accounting advice",
          body: "The workflow can move clients through engagement, intake, and setup. It should not improvise accounting answers, fee negotiations, or review decisions that belong with your team.",
        },
        {
          icon: Users,
          title: "Escalate client confusion to humans quickly",
          body: "If a client is stuck, uncertain, or frustrated, the right answer is often a human conversation. Good automation makes that handoff obvious instead of endlessly repeating the same reminder logic.",
        },
      ],
    },
    {
      type: "prose",
      title: "How the workflow usually works in practice",
      subtitle:
        "A focused onboarding build is usually simple. The value comes from making the same first steps happen every time:",
      blocks: [
        {
          heading: "The client is marked won or engaged",
          body: "Once the engagement is approved, the workflow creates the onboarding record and triggers the first communication. That keeps the process from waiting on whoever closed the deal to manually start the next step.",
        },
        {
          heading: "The client gets the right first package",
          body: "The system sends the engagement letter, intake form, portal or secure-upload instructions, and the first checklist items in a clean sequence. That performs better than one overloaded welcome email that leaves the client guessing what to do first.",
        },
        {
          heading: "Missing steps trigger follow-up automatically",
          body: "If a signature is missing, an intake form is incomplete, or a setup step has not happened yet, the next reminder goes out on schedule. The firm does not have to rely on memory to keep onboarding moving.",
        },
        {
          heading: "Scheduling happens after the client is actually ready",
          body: "When the right prerequisites are complete, the workflow triggers the kickoff, review, or tax-prep booking step. That keeps staff from wasting time on calendar coordination before the client has finished the basics.",
        },
        {
          heading: "Humans step in when exceptions matter",
          body: "If the client has a blocker, billing question, or unusual setup need, the handoff goes to the right person with context. Automation handles the sequence and visibility while your team handles the relationship-sensitive parts.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no published accounting-specific onboarding case study yet, so the proof framing has to stay honest and adjacent:",
      studies: [
        {
          industry: "Accounting cluster",
          headline: "The live accounting parent and first-project page already isolate onboarding as one of the clearest workflow families",
          body: "The broader accounting page explicitly separates onboarding from document collection, scheduling, prospect response, and seasonal outreach. This child page goes one level narrower and stays only on the post-sale onboarding handoff.",
          link: "/ai-automation-for-accounting-firms",
        },
        {
          industry: "Published workflow proof",
          headline: "The service-business onboarding guide already proves the intake, checklist, and reminder pattern",
          body: "The existing onboarding guide covers intake forms, document requests, welcome steps, scheduling, and CRM stage movement. Accounting firms use different language and stricter guardrails, but the workflow mechanics are directly adjacent.",
          link: "/client-onboarding-automation",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ contact CRM case study supports the value of stage visibility, ownership, and sequence discipline at scale",
          body: "That build is not an accounting deployment, but it is direct proof that pipeline visibility, structured follow-up, and clear stage ownership recover value once work can no longer be managed from memory alone.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "Accounting automation overview", href: "/ai-automation-for-accounting-firms" },
        { label: "What to automate first for accounting firms", href: "/what-to-automate-first-for-accounting-firms" },
        { label: "Client onboarding automation", href: "/client-onboarding-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the document-collection page?",
      answer:
        "The document-collection page stays tightly on missing-file reminders and incomplete-file movement once the client is already inside the process. This onboarding page is earlier. It focuses on engagement-letter delivery, intake, portal setup, initial scheduling, and the first handoff after the client says yes.",
    },
    {
      question: "Can this work with my current practice-management stack?",
      answer:
        "Usually yes, if the system supports APIs, webhooks, or a stable handoff pattern. The key is tracking onboarding stages and triggering the next message or task from a reliable status change rather than replacing your entire accounting stack.",
    },
    {
      question: "What does a focused build usually cost?",
      answer:
        "A narrow onboarding workflow often lands around $2K-$4K depending on your engagement-letter flow, intake logic, secure portal steps, internal task routing, and scheduling rules. If you also want broader document chasing, prospect response, or seasonal campaigns, the scope usually moves higher.",
    },
    {
      question: "When should this come before appointment scheduling or prospect-response automation?",
      answer:
        "Choose onboarding first when the firm already wins enough clients but the first week after the sale still feels messy, slow, and manual. If the bigger leak is slow first response to new inquiries, a prospect-response workflow should come first. If the real friction is calendar coordination between interested prospects and booked meetings, scheduling may be the better first move.",
    },
    {
      question: "Can this automate accounting advice or review questions too?",
      answer:
        "No. The safer role for automation is operational: moving clients through engagement, intake, setup, and next-step reminders. Accounting-specific advice, review judgment, and nuanced client guidance should stay with your team.",
    },
  ],
  faqSubtitle:
    "Practical questions from accounting firms considering onboarding automation",
  ctaHeading: "Want new accounting clients to stop entering the firm through inbox chaos?",
  ctaText:
    "Book a 30-minute call. We will look at your current first-week client handoff, where onboarding stalls today, and whether a focused onboarding workflow should come before broader scheduling or seasonal campaign automation.",
  ctaSubtext:
    "No obligation. No generic automation pitch. Just a practical review of your post-sale accounting workflow.",
  relatedLinks: [
    { label: "AI automation for accounting firms", href: "/ai-automation-for-accounting-firms" },
    { label: "Document collection automation for accounting firms", href: "/document-collection-automation-for-accounting-firms" },
    { label: "Client onboarding automation", href: "/client-onboarding-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
