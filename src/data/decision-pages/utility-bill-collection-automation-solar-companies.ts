import {
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  Zap,
  Bell,
  Database,
  Lock,
  Phone,
  ArrowRight,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "utility-bill-collection-automation-for-solar-companies",
  metaTitle:
    "Utility Bill Collection Automation for Solar Companies | Dmytro AI",
  metaDescription:
    "Automate utility bill collection for solar sales. Reduce document chasing, speed up quotes, and increase solar lead conversion with AI-driven reminders.",
  badgeText: "Solar Workflow",
  badgeIcon: FileText,
  h1: "Utility Bill Collection Automation for Solar Companies",
  heroIntro:
    "In solar sales, speed is everything. But the process often hits a wall at the utility bill. Chasing homeowners for a PDF or photo of their bill wastes days of sales time and kills momentum. AI automation turns this friction point into a seamless background process, handling the reminders and document intake so your team can focus on the proposal.",
  heroSubtext:
    "Stop acting like a document collector. Automate the bill-chasing cycle and get your solar quotes out faster.",
  sections: [
    {
      type: "cards",
      title: "How utility bill automation works",
      subtitle:
        "The system replaces manual follow-up with a disciplined, automated document intake pipeline:",
      items: [
        {
          icon: Zap,
          title: "Instant Upload Link",
          body: "As soon as a lead is qualified or an audit is requested, the system sends a personalized, secure upload link via SMS and email. No login required for the homeowner.",
        },
        {
          icon: Bell,
          title: "Intelligent Reminders",
          body: "If the bill isn't received, the system sends automated nudges at strategic intervals (e.g., 4 hours, 24 hours, and 48 hours). Reminders stop the moment the file arrives.",
        },
        {
          icon: FileText,
          title: "File Type Verification",
          body: "The system confirms a file was uploaded and alerts the rep immediately. Advanced setups can even scan the document to ensure it is actually a utility bill before notifying the team.",
        },
        {
          icon: Database,
          title: "CRM Auto-Sync",
          body: "The bill is automatically attached to the correct lead record in GoHighLevel, JobNimbus, or your custom CRM. No manual downloading or uploading between tools.",
        },
        {
          icon: ArrowRight,
          title: "Proposal Trigger",
          body: "Once the document is verified, the system moves the lead to the 'Bill Received' stage and pings the design team to start the proposal immediately.",
        },
        {
          icon: Phone,
          title: "Human Escalation",
          body: "If a lead fails to upload after three automated attempts, the system alerts a human rep to make a personal call, ensuring no high-intent lead is abandoned.",
        },
      ],
    },
    {
      type: "table",
      title: "Manual vs. Automated Bill Collection",
      subtitle:
        "Solar companies using automation reduce their 'time-to-proposal' by up to 70%:",
      headers: ["Automated Workflow", "Manual Process"],
      rows: [
        {
          label: "Initial Request",
          values: ["Instant via SMS/Email link", "Rep asks during call/text"],
        },
        {
          label: "Follow-Up",
          values: [
            "Programmed nudges (no effort)",
            "Rep remembers to call back",
          ],
        },
        {
          label: "Data Entry",
          values: ["Auto-attached to CRM record", "Manual download & upload"],
        },
        {
          label: "Speed to Design",
          values: ["Seconds after upload", "Hours or days of lag"],
        },
        {
          label: "Lead Abandonment",
          values: ["Minimally low", "High (forgotten leads)"],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When to automate your document intake",
      subtitle:
        "Is it time to stop chasing bills manually? Here is how to decide:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Ideal for you if",
          variant: "green",
          items: [
            "You generate 50+ solar leads per month",
            "Your sales reps spend 20%+ of their time document chasing",
            "Leads often go 'cold' while waiting for the utility bill",
            "You use a CRM like GoHighLevel or JobNimbus",
            "You want to scale without adding more admin staff",
          ],
        },
        {
          icon: XCircle,
          heading: "Not right yet if",
          variant: "neutral",
          items: [
            "You only handle 2-3 leads per week",
            "You collect all bills in person during door-to-door visits",
            "You don't have a centralized CRM for lead management",
            "Your sales process is strictly low-volume/bespoke",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Implementation Checklist",
      subtitle:
        "What you need for a successful bill-collection automation setup:",
      items: [
        {
          icon: Lock,
          title: "Secure Document Portal",
          body: "Homeowners are sensitive about data. We use secure, branded upload pages that build trust and ensure compliance.",
        },
        {
          icon: Clock,
          title: "Reminder Cadence",
          body: "Timing matters. We help you define a reminder sequence that is persistent enough to get the bill but polite enough not to annoy the customer.",
        },
        {
          icon: Zap,
          title: "Lead Source Integration",
          body: "Whether the lead comes from Facebook Ads, Google LSA, or your website, the request should trigger automatically based on the source.",
        },
        {
          icon: CheckCircle2,
          title: "Verification Logic",
          body: "Don't notify the design team if the lead uploaded a blank page. We can add validation steps to confirm the document is usable.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Related Proof Points",
      subtitle:
        "While every solar workflow is unique, the document-chasing pattern is common across service industries:",
      studies: [
        {
          industry: "E-Commerce (Auto Parts)",
          headline: "5,000+ leads activated via CRM automation",
          body: "Automated sequences turned a stale backlog into active opportunities. For solar, this means automated bill-chasing for every lead.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Mortgage Broking",
          headline: "Automated document collection for loan files",
          body: "Used similar 'chasing' logic to gather income docs and bank statements, reducing loan-processor workload by 40%.",
          link: "/document-collection-automation-for-mortgage-brokers",
        },
      ],
      links: [{ label: "View all case studies", href: "/case-studies" }],
    },
  ],
  faqItems: [
    {
      question: "Is the upload link secure?",
      answer:
        "Yes. We set up encrypted upload paths so homeowners feel safe sharing their billing data. The files go directly to your secure CRM or cloud storage.",
    },
    {
      question: "What if they upload a photo instead of a PDF?",
      answer:
        "The system can handle multiple file formats. Most solar homeowners take a photo of their bill with their phone, which is perfectly acceptable for the design team.",
    },
    {
      question: "Can we customize the reminder messages?",
      answer:
        "Absolutely. You have full control over the tone and timing of the SMS and email reminders to match your brand's voice.",
    },
    {
      question: "Does this integrate with JobNimbus or GoHighLevel?",
      answer:
        "Yes. We specialize in connecting these tools to your communication layer to ensure the bill is always exactly where you need it.",
    },
  ],
  faqSubtitle: "Answers for solar teams looking to speed up their sales cycle",
  ctaHeading: "Stop chasing bills. Start building proposals.",
  ctaText:
    "Ready to automate your solar document collection? Book a 30-minute call to map out your intake workflow.",
  ctaSubtext: "Practical advice. No sales pressure. Just better operations.",
  relatedLinks: [
    { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
    { label: "AI lead follow-up", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "Document collection for mortgage brokers", href: "/document-collection-automation-for-mortgage-brokers" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
