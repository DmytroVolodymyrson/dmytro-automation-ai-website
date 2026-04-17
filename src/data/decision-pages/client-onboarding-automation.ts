import {
  Users,
  FileCheck,
  CalendarCheck,
  Mail,
  Clock,
  CheckCircle2,
  XCircle,
  BarChart3,
  TrendingUp,
  Bot,
  ClipboardList,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "client-onboarding-automation",
  metaTitle:
    "Client Onboarding Automation for Service Businesses — Intake, Documents, Scheduling | Dmytro AI",
  metaDescription:
    "How to automate client onboarding for service businesses. Intake forms, document collection, welcome sequences, scheduling, and CRM setup. What works, what to build first, and realistic ROI.",
  badgeText: "Workflow Automation",
  badgeIcon: ClipboardList,
  h1: "Client Onboarding Automation for Service Businesses",
  heroIntro:
    "You close the deal and then spend the next week chasing the client for documents, scheduling a kickoff, sending login credentials, and answering the same five setup questions. The gap between 'yes' and 'work starts' is where momentum dies. Automating onboarding means every new client gets the same professional, reliable experience — without your team doing it manually every time.",
  heroSubtext:
    "Below: what client onboarding automation looks like in practice, which pieces deliver the fastest ROI, and how to decide if your business is ready.",
  sections: [
    {
      type: "cards",
      title: "What you can automate in client onboarding",
      subtitle:
        "These are the building blocks of an automated onboarding flow. Most businesses start with 2-3 and add more as they see the impact:",
      items: [
        {
          icon: FileCheck,
          title: "Intake forms and document collection",
          body: "Automated intake form goes out the moment a deal is closed. Follow-up reminders for missing documents at 1 day, 3 days, and 7 days. No more chasing clients over email.",
        },
        {
          icon: Mail,
          title: "Welcome sequences",
          body: "New client welcome email with next steps, timeline, and what to expect. Drip onboarding instructions over the first week so clients are not overwhelmed on day one.",
        },
        {
          icon: CalendarCheck,
          title: "Kickoff scheduling",
          body: "Automated kickoff call booking link sent after intake is complete. Calendar integration checks availability, sends confirmations, and handles rescheduling.",
        },
        {
          icon: Users,
          title: "CRM pipeline automation",
          body: "New client automatically moves through your CRM pipeline — from 'won' to 'onboarding' to 'active.' Tasks are assigned, internal notifications fire, and nothing gets missed.",
        },
        {
          icon: Bot,
          title: "Account setup and credentials",
          body: "Automated provisioning of client accounts, portal logins, and shared folders. Login credentials delivered via secure message instead of plain-text email chains.",
        },
        {
          icon: Clock,
          title: "Status updates and check-ins",
          body: "Automated onboarding status emails to the client at key milestones. Reduces 'where are we at?' messages and builds confidence from the start.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is onboarding automation right for your business?",
      subtitle:
        "This is not for everyone. Here is an honest assessment:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You onboard 5+ new clients per month",
            "Your onboarding process takes more than 3 days end-to-end",
            "Clients regularly miss steps or submit incomplete documents",
            "You or your team spend hours per week on repetitive onboarding tasks",
            "You use a CRM or project management tool already",
            "You want every client to get the same consistent experience",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit yet",
          variant: "neutral",
          items: [
            "You onboard fewer than 3 clients per month",
            "Your onboarding is already fast and clients rarely complain",
            "Every client requires a completely unique process with no repeatable steps",
            "You do not have a CRM or any digital tools in place",
            "You are not ready to invest $2K-$5K in a one-time build",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How onboarding automation works in practice",
      subtitle:
        "A typical automated onboarding flow for a service business:",
      blocks: [
        {
          heading: "Trigger: deal is marked 'won'",
          body: "The moment your CRM status changes or a contract is signed, the automation fires. No waiting for someone to remember to start the onboarding process. The client gets their first email within minutes.",
        },
        {
          heading: "Phase 1: intake and document collection (day 0-3)",
          body: "Intake form goes out immediately. The form is pre-populated with information from your CRM so the client is not re-entering details you already have. Automated reminders go out if documents are not submitted within 24 and 72 hours.",
        },
        {
          heading: "Phase 2: scheduling and setup (day 1-5)",
          body: "Once intake is complete, a kickoff booking link is sent automatically. In parallel, internal tasks are created — account setup, folder creation, team assignment. The client sees a professional, proactive experience. Your team sees a checklist, not chaos.",
        },
        {
          heading: "Phase 3: active onboarding (day 3-14)",
          body: "Drip emails guide the client through setup, training, and first milestones. Status updates go out at key checkpoints. If the client stalls, a follow-up sequence re-engages them before they go cold.",
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI of onboarding automation",
      subtitle:
        "The payoff is not just time savings — it is client retention and team capacity:",
      items: [
        {
          icon: Clock,
          title: "Time savings per client",
          body: "Most service businesses spend 2-5 hours per client on manual onboarding tasks. Automation cuts that to 15-30 minutes of oversight. At 10 clients per month, that is 20-45 hours recovered.",
        },
        {
          icon: BarChart3,
          title: "Faster time-to-value",
          body: "Clients who are onboarded in 3 days instead of 10 start seeing results sooner, complain less, and are more likely to stay. First impressions are not trivial — they shape the entire relationship.",
        },
        {
          icon: TrendingUp,
          title: "Reduced churn",
          body: "Clients who have a disorganized onboarding experience are more likely to cancel early. Consistent, professional onboarding sets the tone and reduces early-stage churn.",
        },
        {
          icon: Users,
          title: "Team capacity",
          body: "Your team stops being the bottleneck in onboarding. They focus on the work that actually requires human judgment — not sending the same emails and chasing the same documents for every new client.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Results from similar automation builds",
      subtitle:
        "These case studies show the same workflow automation patterns that power onboarding systems:",
      studies: [
        {
          industry: "E-Commerce",
          headline: "Thousands of leads organized and followed up",
          body: "Automated CRM workflows organized untouched leads and ran multi-step follow-up sequences. The same pipeline automation powers client onboarding — trigger-based actions, status tracking, and automated outreach.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Restaurant",
          headline: "100% of after-hours inquiries captured",
          body: "AI voice agent captures every inquiry and routes it into the right workflow. The same principles apply to onboarding: every new client triggers an immediate, automated response instead of waiting for manual action.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
      ],
      links: [
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "AI automation for accounting firms", href: "/ai-automation-for-accounting-firms" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What tools do you use to build onboarding automation?",
      answer:
        "Typically n8n for workflow orchestration, GoHighLevel or your existing CRM for pipeline management, and native integrations for email, forms, and scheduling. The specific stack depends on what you already use.",
    },
    {
      question: "How long does it take to set up?",
      answer:
        "A core onboarding automation — intake form, welcome sequence, scheduling, and CRM pipeline — takes 1-2 weeks. More complex builds with document collection, account provisioning, and multi-phase drip sequences take 2-3 weeks.",
    },
    {
      question: "What does it cost?",
      answer:
        "A basic onboarding automation runs $2K-$3K. A comprehensive system with document collection, conditional logic, internal task assignment, and client-facing status updates runs $3K-$6K. Fixed pricing, scoped before work starts.",
    },
    {
      question: "Can it integrate with my existing CRM?",
      answer:
        "Yes. We build on top of whatever CRM or project management tool you already use — GoHighLevel, HubSpot, Salesforce, Monday, or a custom setup. If it has an API or supports webhooks, we can connect to it.",
    },
    {
      question: "What if my onboarding process is different for each client?",
      answer:
        "Automation handles the repeatable parts — the 80% that is the same every time. Conditional logic handles variations like different service tiers or document requirements. The truly unique parts still get human attention.",
    },
  ],
  faqSubtitle:
    "Practical answers for businesses considering onboarding automation",
  ctaHeading: "Stop losing momentum after the sale",
  ctaText:
    "Book a 30-minute call. We will look at your current onboarding process, identify the biggest time sinks, and map out what to automate first.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about your onboarding workflow.",
  relatedLinks: [
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "AI email sequence automation", href: "/ai-email-sequence-automation" },
    { label: "AI automation for accounting firms", href: "/ai-automation-for-accounting-firms" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
