import {
  Sun,
  Phone,
  Clock,
  CheckCircle2,
  XCircle,
  Wrench,
  BarChart3,
  Users,
  Zap,
  ShieldCheck,
  Target,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-for-solar-companies",
  metaTitle:
    "AI Lead Follow-Up for Solar Companies — Response Time & Conversion | Dmytro AI",
  metaDescription:
    "Automate lead follow-up for your solar business. Respond to every lead in under 60 seconds, recover abandoned quotes, and increase your audit set rate with AI automation.",
  badgeText: "Lead Response",
  badgeIcon: Zap,
  h1: "AI Lead Follow-Up for Solar Companies",
  heroIntro:
    "In solar, speed is the only differentiator that matters for digital leads. If you call a lead 30 minutes after they fill out a form, they have likely already scheduled an audit with a competitor. AI lead follow-up ensures that every prospect from Facebook, Google, or your website gets an instant, personalized response via SMS and email. It handles the initial 'speed-to-lead' race automatically, so your sales team only spends time talking to homeowners who are ready for a quote.",
  heroSubtext:
    "Below: how automated lead response works for solar, why 60 seconds is the target, and how it integrates with your current sales process.",
  sections: [
    {
      type: "cards",
      title: "How automation fixes solar lead conversion",
      subtitle:
        "Lead follow-up in solar is often inconsistent. Automation makes it repeatable and instant:",
      items: [
        {
          icon: Zap,
          title: "The < 60s Response",
          body: "The system triggers a text and email the millisecond a lead is captured. Homeowners appreciate the professional speed, and it effectively 'takes them off the market' before they click another ad.",
        },
        {
          icon: Target,
          title: "Multi-Channel Nurture",
          body: "If they don't reply to the first text, the system follows up over 5-7 days with helpful info about solar incentives, utility bill benefits, and social proof. Consistency beats manual effort every time.",
        },
        {
          icon: ShieldCheck,
          title: "Lead Qualification",
          body: "The automation asks basic qualifying questions (roof type, monthly bill, homeowner status). Only qualified prospects are passed to your reps or allowed to book a site audit.",
        },
        {
          icon: Clock,
          title: "After-Hours Coverage",
          body: "Solar leads often browse late at night. AI responds at 10 PM on a Sunday with the same speed as 10 AM on a Monday, capturing demand while your competitors are asleep.",
        },
      ],
    },
    {
      type: "table",
      title: "Lead follow-up: AI vs. Manual Reps",
      subtitle:
        "Comparison of lead response efficiency in a typical solar sales organization:",
      headers: ["Automated AI Follow-Up", "Manual Sales Team"],
      rows: [
        {
          label: "Response Time",
          values: ["Instant (< 60 seconds)", "15 minutes to 4+ hours"],
        },
        {
          label: "Follow-Up Persistence",
          values: ["100% of leads get 7+ touches", "2-3 touches max per lead"],
        },
        {
          label: "Weekend/Evening Coverage",
          values: ["24/7/365", "Office hours only"],
        },
        {
          label: "Data Accuracy",
          values: ["Automatic CRM logging", "Dependent on rep notes"],
        },
        {
          label: "Cost",
          values: ["Fixed monthly software cost", "Hourly wages + commission"],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is your solar business ready for automated follow-up?",
      subtitle:
        "Automation yields the highest ROI when you have consistent lead flow and a clear sales process:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Ideal for",
          variant: "green",
          items: [
            "Companies buying Facebook, Google, or LSA leads",
            "Teams spending $3,000+/mo on marketing",
            "Sales reps who are 'too busy' to call new leads instantly",
            "Businesses wanting to improve their audit-to-close ratio",
            "Owners who want to track exactly which ad sources are converting",
          ],
        },
        {
          icon: XCircle,
          heading: "Not ideal for",
          variant: "neutral",
          items: [
            "Businesses with zero digital lead flow",
            "Door-to-door only teams with no CRM follow-up",
            "Low-volume operations (under 10 leads per month)",
            "Companies not using a CRM like GoHighLevel or JobNimbus",
            "Teams looking for AI to handle the actual solar engineering",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Implementation Requirements",
      subtitle:
        "What goes into building a high-converting solar follow-up system:",
      items: [
        {
          icon: Wrench,
          title: "CRM Connectivity",
          body: "The system must live inside your CRM. We specialize in GoHighLevel for solar, ensuring all automation triggers are tied to real lead stages.",
        },
        {
          icon: BarChart3,
          title: "Attribution Mapping",
          body: "Every automated response should track back to the original ad. We ensure your data shows exactly where your best solar leads are coming from.",
        },
        {
          icon: Users,
          title: "Rep Handoff Logic",
          body: "Automation should warm the lead, not replace the human. We build 'Speed-to-Call' alerts that ping your reps the moment a lead engages with the AI.",
        },
        {
          icon: Phone,
          title: "A/B Testing Messaging",
          body: "Solar buyers respond differently to 'Save Money' vs 'Go Green.' we set up simple tests to see which SMS copy gets more site audits scheduled.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proven Results",
      subtitle:
        "These results demonstrate the impact of lead follow-up and CRM automation in high-value service industries:",
      studies: [
        {
          industry: "E-Commerce (Auto Parts)",
          headline: "5,000+ leads activated via CRM automation",
          body: "Automated sequences recovered 'dead' leads and ensured no new inquiry went unanswered. Applied to solar, this dramatically increases the ROI of your ad spend.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Service Business",
          headline: "Instagram Lead Gen Pipeline",
          body: "Turned social media interest into qualified leads with instant triage. Solar installers can use the same pattern to capture leads from Facebook/Instagram ads.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How fast is the 'instant' response?",
      answer:
        "Typically under 60 seconds. Our goal is to reach the prospect while they are still on your website or still have their phone in their hand after submitting an ad form.",
    },
    {
      question: "What happens if a lead replies with a question?",
      answer:
        "The system can either use basic AI to answer common questions (like 'do you serve my area?') or instantly alert your sales team that a live conversation is required.",
    },
    {
      question: "Can this work with my existing Facebook leads?",
      answer:
        "Yes. We use Zapier, Make, or native GHL integrations to pull leads from Facebook Lead Forms directly into the follow-up sequences without manual export.",
    },
    {
      question: "Do you provide the leads too?",
      answer:
        "No. We are not a lead generation agency. We build the infrastructure that ensures the leads you are ALREADY buying actually get converted into appointments.",
    },
    {
      question: "What is the ROI?",
      answer:
        "Most solar installers see a 20-40% lift in their audit set rate simply by fixing the response-time gap. If your lead cost is $100, saving just two extra leads per month pays for the system.",
    },
  ],
  faqSubtitle:
    "Common questions about automating solar lead follow-up",
  ctaHeading: "Stop wasting money on solar leads that don't get called.",
  ctaText:
    "Book a 20-minute strategy call. We will audit your current lead response time, identify where leads are dropping off, and show you exactly how to automate your follow-up.",
  ctaSubtext:
    "Practical advice for solar installers. No fluff, just workflow fixes that drive closings.",
  relatedLinks: [
    { label: "AI automation for solar companies", href: "/ai-automation-for-solar-companies" },
    { label: "Utility bill collection for solar", href: "/utility-bill-collection-automation-for-solar-companies" },
    { label: "AI lead follow-up", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "GoHighLevel automation setup", href: "/gohighlevel-automation-setup" },
  ],
};

export default data;
