import {
  Landmark,
  Timer,
  MessageSquare,
  FileText,
  CalendarCheck,
  Users,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  BarChart3,
  Bot,
  Phone,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-for-mortgage-brokers",
  metaTitle:
    "AI Lead Follow-Up for Mortgage Brokers — Faster Response, Better Conversion | Dmytro AI",
  metaDescription:
    "AI lead follow-up for mortgage brokers. Respond in under 60 seconds, automate application nurture and document reminders, and stop losing rate shoppers to slower brokers.",
  badgeText: "Mortgage Lead Follow-Up",
  badgeIcon: Landmark,
  h1: "AI Lead Follow-Up for Mortgage Brokers",
  heroIntro:
    "A mortgage lead from Zillow, LendingTree, or a paid ad costs $30 to $100+. If the first response takes two hours, that money is already working for a faster broker. Most brokerages lose deals not because their rates are worse, but because someone else picked up the phone first. AI lead follow-up responds in under 60 seconds, nurtures incomplete applications automatically, and hands qualified conversations to your team with context — so more of the leads you already pay for turn into funded files.",
  heroSubtext:
    "Below: what mortgage lead follow-up automation actually handles, where it improves conversion first, what the workflow looks like in practice, and when a brokerage should keep parts of the process manual.",
  sections: [
    {
      type: "cards",
      title: "What AI lead follow-up can handle for a mortgage brokerage",
      subtitle:
        "The highest-value workflows are the ones tied directly to speed-to-lead, consistency, and application completion:",
      items: [
        {
          icon: Timer,
          title: "Instant first response",
          body: "Website, referral, ad, and portal leads get an immediate text and email so the prospect hears from your brokerage in under 60 seconds instead of after your next break in the day.",
        },
        {
          icon: MessageSquare,
          title: "Multi-touch nurture for incomplete applications",
          body: "Leads who inquire but do not finish the next step get structured follow-up over the next hours and days. That keeps your brokerage in front of them without someone manually chasing every file.",
        },
        {
          icon: FileText,
          title: "Document reminder sequences",
          body: "Borrowers who still owe pay stubs, ID, or bank statements get automated reminders with the right next action instead of relying on your team to remember who is missing what.",
        },
        {
          icon: CalendarCheck,
          title: "Consultation booking and confirmation",
          body: "Qualified leads can book discovery calls or pre-approval consultations automatically, with confirmations and reminders handled without back-and-forth admin.",
        },
        {
          icon: BarChart3,
          title: "CRM stage updates and source tracking",
          body: "Leads can be tagged by source, urgency, and status automatically so the pipeline stays usable and your team knows what actually needs human attention.",
        },
        {
          icon: Users,
          title: "Broker handoff for high-intent conversations",
          body: "The system handles the repetitive outreach, then routes warm responses to the right broker with notes and conversation history attached.",
        },
      ],
    },
    {
      type: "table",
      title: "Manual mortgage follow-up vs. automated mortgage follow-up",
      subtitle:
        "The difference is not just convenience. It changes how many expensive leads you actually get a chance to convert:",
      headers: ["Automated", "Manual"],
      rows: [
        {
          label: "First response time",
          values: [
            "Under 60 seconds, including evenings and weekends",
            "Depends on calendar gaps and office hours",
          ],
        },
        {
          label: "Incomplete application nurture",
          values: [
            "Every lead enters a consistent follow-up sequence",
            "A few manual attempts, then it usually stops",
          ],
        },
        {
          label: "Document chasing",
          values: [
            "Automatic reminders tied to missing items",
            "Manual email and phone follow-up",
          ],
        },
        {
          label: "Pipeline visibility",
          values: [
            "Lead status and activity logged automatically",
            "CRM hygiene depends on whoever updates it",
          ],
        },
        {
          label: "Broker time usage",
          values: [
            "More time spent on funded files and real conversations",
            "Too much time spent on reminders and admin",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your brokerage?",
      subtitle:
        "Mortgage automation works best when the volume and follow-up burden are real. It is less useful when the book is still tiny or fully managed already:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You get enough inbound leads that response time is inconsistent",
            "Prospects start applications but disappear before the next step",
            "Document collection eats up hours every week",
            "Your CRM has leads sitting in the wrong stage or with no active nurture",
            "You want more consistency without hiring another coordinator yet",
            "You are already paying for leads and want more of them to turn into applications",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You only get a handful of inquiries each month and can respond personally to all of them",
            "You already have a strong ops team handling follow-up consistently",
            "You want AI to replace broker judgment on rate advice or compliance-sensitive conversations",
            "Your lead sources are not stable enough yet to justify automation",
            "You are not ready to invest in a one-time system build before measuring results",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What matters specifically in mortgage lead follow-up",
      subtitle:
        "This is not generic small-business nurturing. Mortgage workflows need a few extra guardrails:",
      items: [
        {
          icon: ShieldCheck,
          title: "Compliance-reviewed messaging",
          body: "Automation should use approved language and respect consent, opt-out, and record-keeping requirements. The workflow gets built around your reviewed messaging, not around improvised copy.",
        },
        {
          icon: Bot,
          title: "Clear line between automation and broker advice",
          body: "Automation handles response, reminders, qualification, and scheduling. Product advice, underwriting nuance, and sensitive borrower questions stay with your human team.",
        },
        {
          icon: Phone,
          title: "Fast handoff on warm replies",
          body: "The goal is not to keep a serious borrower talking to a bot forever. The goal is to make sure a broker gets pulled in quickly once intent is clear.",
        },
        {
          icon: Landmark,
          title: "Different lead sources need different follow-up",
          body: "Referral leads, ad leads, rate shoppers, and renewal opportunities should not all get the same sequence. The automation works best when source and urgency shape the follow-up logic.",
        },
      ],
    },
    {
      type: "prose",
      title: "How mortgage lead follow-up automation works in practice",
      subtitle:
        "The workflow is not complicated, but the details matter. Here is what a typical automated follow-up path looks like from inquiry to booked consultation:",
      blocks: [
        {
          heading: "Lead comes in from any source",
          body: "A prospect submits a form on your site, clicks a rate ad, arrives through LendingTree or Zillow, or gets referred by a realtor. The system picks up the lead immediately regardless of source, time of day, or whether your team is available.",
        },
        {
          heading: "First response goes out in under 60 seconds",
          body: "The lead gets a personalized text and email acknowledging their inquiry and offering a clear next step — usually a link to book a pre-approval call or a simple qualifying question. This is the single highest-leverage moment in the funnel. Industry data consistently shows that responding within the first minute dramatically increases contact rates compared to even a 10-minute delay.",
        },
        {
          heading: "Non-responders enter a structured nurture sequence",
          body: "If the lead does not reply or book, they get a multi-touch follow-up over the next 24 to 72 hours. Each touchpoint adds value — rate context, a quick pre-qualification question, or a reminder that the consultation is free. The sequence stops automatically when the lead responds or books.",
        },
        {
          heading: "Warm reply triggers broker handoff",
          body: "When a lead replies with genuine interest, the system notifies the assigned broker with the full conversation history, lead source, and any qualifying details collected. The broker picks up a warm conversation, not a cold dial.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof from similar automation builds",
      subtitle:
        "We have not published a mortgage-specific case study yet, but these builds use the exact same speed-to-lead, automated nurture, CRM structuring, and qualification patterns that mortgage follow-up depends on:",
      studies: [
        {
          industry: "E-Commerce CRM",
          headline: "5,600+ leads organized into a usable follow-up system",
          body: "A messy lead database was cleaned up, structured, and turned into something the team could actually follow up on consistently. Mortgage brokerages with stale CRM data have the same operational problem.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Restaurant Voice Agent",
          headline: "After-hours inquiries captured instead of waiting until morning",
          body: "Inbound inquiries were handled immediately instead of sitting overnight. Mortgage brokers see the same value when web and call leads get a response before the next business day.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Lead Qualification",
          headline: "High-volume prospect handling without manual bottlenecks",
          body: "Automated qualification reduced the amount of repetitive human work required to identify good-fit conversations. Mortgage teams benefit from the same screening and handoff pattern.",
          link: "/case-studies/instagram-lead-generation",
        },
      ],
      links: [{ label: "View all case studies", href: "/case-studies" }],
    },
  ],
  faqItems: [
    {
      question: "Will this work with my mortgage CRM or LOS?",
      answer:
        "Usually, yes. If your system has an API, webhook support, or a reliable integration path, we can connect it. We check compatibility during scoping before any build starts.",
    },
    {
      question: "Can AI follow up without sounding robotic or spammy?",
      answer:
        "Yes, if the sequence is written with restraint. The goal is fast, clear, useful contact — not aggressive blasting. We keep the flow practical and tuned to your brokerage tone.",
    },
    {
      question: "Does this replace my team?",
      answer:
        "No. It removes repetitive chasing and delayed first response. Brokers still handle advice, nuanced borrower conversations, and sensitive application decisions.",
    },
    {
      question: "How long does a mortgage lead follow-up system take to launch?",
      answer:
        "A focused system for response, nurture, and booking can usually be live in 1 to 2 weeks. More complex builds with document workflows and deeper CRM logic often take 2 to 4 weeks.",
    },
    {
      question: "What does this usually cost?",
      answer:
        "A focused lead follow-up build usually lands around $2K to $4K. A broader mortgage ops system with document reminders, CRM automation, and multiple sequences usually lands around $4K to $6K, scoped upfront.",
    },
    {
      question: "What happens to leads that come in after hours or on weekends?",
      answer:
        "They get the same instant response as any other lead. The system runs 24/7, so a Friday-night rate inquiry gets acknowledged in under 60 seconds and enters the nurture sequence immediately instead of sitting until Monday morning.",
    },
    {
      question: "Can the follow-up differ based on lead source?",
      answer:
        "Yes. A Zillow lead, a referral from a realtor partner, and someone who clicked a pre-approval ad are at different stages and need different messaging. The automation routes each source into the right sequence with the right tone and next step.",
    },
    {
      question: "What kind of improvement should I expect?",
      answer:
        "The biggest shift is contact rate. Most brokerages that move from inconsistent manual follow-up to sub-60-second automated response see a meaningful lift in the percentage of leads that actually become conversations. The exact number depends on your current response time, lead volume, and how many leads currently go untouched.",
    },
  ],
  faqSubtitle:
    "Practical questions from mortgage brokers considering automated follow-up",
  ctaHeading: "Want faster response without more admin overhead?",
  ctaText:
    "Book a 30-minute call. We will look at your lead flow, current follow-up process, and where applications are stalling, then map out the best workflow to automate first.",
  ctaSubtext:
    "No generic audit. No obligation. Just a focused conversation about your brokerage's conversion bottlenecks.",
  relatedLinks: [
    { label: "AI automation for mortgage brokers", href: "/ai-automation-for-mortgage-brokers" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "Lead follow-up automation examples", href: "/lead-follow-up-automation-examples" },
    { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
