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
    "A mortgage lead from Zillow, LendingTree, Google Ads, or a realtor partner can cost serious money before a broker ever speaks to them. If that lead waits two hours for a reply, you are not really buying inquiries — you are funding faster competitors. For most brokerages, the first win from AI lead follow-up is simple and commercial: more expensive leads turn into real conversations, more half-finished applications get pulled forward, and brokers spend less time chasing documents and no-response leads manually. The system responds in under 60 seconds, keeps following up automatically, and hands warm borrowers to your team with source, timeline, and context attached.",
  heroSubtext:
    "Below: what mortgage lead follow-up automation actually handles, where brokerages usually recover ROI first, how proof should be framed when you have not published a mortgage case study yet, what the workflow looks like in practice, and when to keep parts of the process manual.",
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
      type: "cards",
      title: "Where mortgage brokerages usually see the first measurable lift",
      subtitle:
        "The early proof is usually operational before it becomes revenue reporting. These are the metrics that move first when the workflow is set up correctly:",
      items: [
        {
          icon: Timer,
          title: "Speed-to-lead drops from hours to seconds",
          body: "The clearest before-and-after is response time. A brokerage that used to answer paid or portal leads in 45 minutes, 2 hours, or the next morning can start responding in under 60 seconds around the clock.",
        },
        {
          icon: MessageSquare,
          title: "More expensive leads turn into actual conversations",
          body: "The first commercial gain is usually better contact rate, not some vague 'AI efficiency' claim. More of the leads you already buy reply, book, or re-engage before they choose another broker.",
        },
        {
          icon: FileText,
          title: "Fewer applications stall on missing next steps",
          body: "Incomplete files stop relying on memory and manual chasing. Borrowers get nudged toward the next required action — booking, document upload, or a reply to a qualifying question — without coordinators babysitting every record.",
        },
        {
          icon: Users,
          title: "Broker time shifts toward funded-file work",
          body: "Instead of spending prime selling time on first-response admin and repetitive reminders, brokers and coordinators pick up warmer conversations with context already collected.",
        },
        {
          icon: BarChart3,
          title: "CRM reporting becomes believable again",
          body: "Lead source, stage, and reply activity start getting logged consistently. That makes it easier to see whether Zillow, realtor referrals, paid search, or renewal campaigns are actually producing funded opportunities.",
        },
        {
          icon: CalendarCheck,
          title: "Booking consistency improves before close-rate reporting does",
          body: "Most teams can verify booked consultations and borrower replies within days. Funded-loan lift takes longer to measure, but the earlier pipeline indicators show whether the workflow is working.",
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
      title: "How to frame proof honestly before you have a mortgage-specific case study",
      subtitle:
        "You do not need to invent funded-loan numbers to make the page credible. The stronger approach is to show the operational proof you can stand behind and connect it to mortgage economics:",
      blocks: [
        {
          heading: "Lead response speed is a valid first proof point",
          body: "If a workflow takes first response from hours to under 60 seconds, that is already commercially meaningful for mortgage brokers. It means paid leads, referral leads, and after-hours inquiries stop sitting idle during the exact window when comparison shopping is happening.",
        },
        {
          heading: "Use adjacent-case proof for the system pattern, not fake industry parity",
          body: "The right proof framing is: these published projects show the same automation pattern — instant response, structured nurture, CRM updates, qualification, and human handoff. Then explain that mortgage brokerages use the same pattern with mortgage-specific messaging, compliance review, and document workflows layered on top.",
        },
        {
          heading: "Measure the early pipeline numbers first",
          body: "For a new mortgage build, the first scoreboard is usually response time, reply rate, booked consultations, incomplete-application recovery, and document completion speed. Those move faster than funded-loan reporting and give a brokerage an honest read on whether the automation is improving the funnel.",
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
          body: "The lead gets a personalized text and email acknowledging their inquiry and offering a clear next step — usually a link to book a pre-approval call or a simple qualifying question. This is the single highest-leverage moment in the funnel. The practical goal is simple: become the first serious conversation while the borrower is still actively shopping, not the brokerage that replies after two other brokers already made contact.",
        },
        {
          heading: "Non-responders enter a structured nurture sequence",
          body: "If the lead does not reply or book, they get a multi-touch follow-up over the next 24 to 72 hours. Each touchpoint adds value — rate context, a quick pre-qualification question, or a reminder that the consultation is free. The sequence stops automatically when the lead responds or books.",
        },
        {
          heading: "Warm reply triggers broker handoff",
          body: "When a lead replies with genuine interest, the system notifies the assigned broker with the full conversation history, lead source, and any qualifying details collected. The broker picks up a warm conversation, not a cold dial.",
        },
        {
          heading: "Incomplete files keep moving without manual babysitting",
          body: "If the borrower starts the process but stalls on booking or document submission, the system continues with the right reminder sequence. Instead of your team guessing who still owes bank statements, pay stubs, or a callback, the workflow keeps nudging the file until the borrower responds or the handoff rules say a human should step in.",
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
      question: "What should I measure first after launch?",
      answer:
        "Start with response time, reply rate, booked consultations, incomplete-application recovery, and document completion speed. Those are the earliest signals that the workflow is improving conversion before you have enough time to measure funded-loan impact cleanly.",
    },
    {
      question: "Can AI follow up without sounding robotic or spammy?",
      answer:
        "Yes, if the sequence is written with restraint. The goal is fast, clear, useful contact — not aggressive blasting. We keep the flow practical and tuned to your brokerage tone.",
    },
    {
      question: "Can this handle after-hours and weekend mortgage leads?",
      answer:
        "Yes. That is one of the highest-value use cases. A Friday-night website lead or Sunday rate shopper can get an immediate acknowledgment, a booking option, and the right next-step prompt instead of waiting until the office opens again.",
    },
    {
      question: "Does this replace my team?",
      answer:
        "No. It removes repetitive chasing and delayed first response. Brokers still handle advice, nuanced borrower conversations, and sensitive application decisions.",
    },
    {
      question: "Can the system follow up differently for Zillow leads, realtor referrals, and renewal opportunities?",
      answer:
        "Yes. Different source types should not get the same sequence. A cold paid lead usually needs fast qualification and booking. A realtor referral may need a warmer introduction. A past client approaching renewal can receive a different reactivation flow entirely.",
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
    { label: "AI automation for real estate", href: "/ai-automation-for-real-estate" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "Lead follow-up automation examples", href: "/lead-follow-up-automation-examples" },
    { label: "After-hours lead capture", href: "/after-hours-lead-capture-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
