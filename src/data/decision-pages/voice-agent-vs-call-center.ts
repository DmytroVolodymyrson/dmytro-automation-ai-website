import {
  Scale,
  Phone,
  Bot,
  DollarSign,
  Clock,
  AlertTriangle,
  Zap,
  Users,
  Headphones,
  RotateCcw,
  Link,
  FileText,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-voice-agent-vs-call-center",
  metaTitle:
    "AI Voice Agent vs. Call Center for Small Businesses — Cost, Quality, and Coverage Compared | Dmytro AI",
  metaDescription:
    "Compare AI voice agents and call centers for small service businesses. Side-by-side on monthly cost, per-call cost, availability, script accuracy, CRM integration, and scalability.",
  badgeText: "Decision Guide",
  badgeIcon: Scale,
  h1: "AI Voice Agent vs. Call Center",
  heroIntro:
    "Call centers have been the default for small businesses that need professional phone coverage without hiring full-time staff. But AI voice agents now do much of the same work — answering calls, qualifying leads, booking appointments — at a fraction of the cost. This guide compares both options honestly, including where call centers still have the edge.",
  heroSubtext:
    "Below: real cost breakdowns, capability comparisons, and a framework for deciding which option fits your business right now.",
  sections: [
    {
      type: "cards",
      title: "Two approaches to never missing a call",
      subtitle:
        "Both solve the same problem — your phone rings and somebody needs to answer it. How they solve it is fundamentally different:",
      items: [
        {
          icon: Headphones,
          title: "Call center",
          body: "A team of human operators answers your calls using scripts you provide. They take messages, transfer calls, and handle basic intake. Pricing is usually per-minute or per-call. Quality depends on the center — some are excellent, many have high turnover and inconsistent operators. Works well for complex, empathy-driven calls.",
        },
        {
          icon: Bot,
          title: "AI voice agent",
          body: "A trained AI agent answers your calls, follows your script precisely, books appointments, qualifies leads, and logs everything to your CRM. Available 24/7 with zero wait time. Quality is consistent — every call gets the same professional handling. Works well for routine calls that follow predictable patterns.",
        },
        {
          icon: Zap,
          title: "Hybrid approach",
          body: "AI handles the first line of defense: after-hours calls, routine inquiries, and appointment booking. Complex calls, complaints, and high-value clients get routed to a small call center team or your own staff. This gives you 24/7 coverage with human backup where it actually matters.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "The factors that actually drive the decision for small service businesses:",
      headers: ["Call Center", "AI Voice Agent"],
      rows: [
        {
          label: "Monthly cost",
          values: [
            "$300-$1,200 depending on volume",
            "$50-$200 software + per-minute usage",
          ],
        },
        {
          label: "Per-call cost",
          values: [
            "$0.75-$2.50 per minute or $6-$15 per call",
            "$0.05-$0.15 per minute of talk time",
          ],
        },
        {
          label: "Availability",
          values: [
            "Varies — 24/7 costs premium, most offer business hours only",
            "24/7/365, same cost regardless of time",
          ],
        },
        {
          label: "Script accuracy",
          values: [
            "Varies by operator — new hires miss details, veterans are better",
            "Follows your script exactly, every call, no drift",
          ],
        },
        {
          label: "CRM integration",
          values: [
            "Basic — email/text summaries, manual CRM entry typical",
            "Direct integration — auto-logs calls, transcripts, and actions to your CRM",
          ],
        },
        {
          label: "Scalability",
          values: [
            "Limited by available operators, wait times increase at peak",
            "Unlimited concurrent calls, no wait times ever",
          ],
        },
        {
          label: "Appointment booking",
          values: [
            "Manual — operator checks availability, calls back to confirm",
            "Real-time — checks calendar and books instantly during the call",
          ],
        },
        {
          label: "Complex call handling",
          values: [
            "Better — humans adapt to emotion and unusual situations",
            "Good for routine calls, escalates complex ones to your team",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "Neither option is universally better. Your decision should come down to call complexity, volume, and budget:",
      options: [
        {
          icon: Headphones,
          heading: "Call center makes sense when...",
          highlighted: false,
          items: [
            "Your calls require emotional intelligence — complaints, sensitive intake, high-stakes conversations",
            "You need bilingual or multilingual support that AI cannot reliably deliver yet",
            "Call volume is low (under 100 calls/month) and a basic plan covers your needs",
            "Your industry has strict compliance requirements that need human judgment calls",
            "Callers expect to reach a specific person and will not accept automated handling",
          ],
        },
        {
          icon: Bot,
          heading: "AI voice agent wins when...",
          highlighted: true,
          items: [
            "You need 24/7 coverage without paying premium after-hours rates",
            "Most calls follow predictable patterns: booking, availability, pricing, service area",
            "You want every call logged to your CRM automatically with full transcripts",
            "Call volume is growing and you do not want costs to scale linearly",
            "Script consistency matters — you need every caller to hear the same information",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Hidden costs of call centers",
      subtitle:
        "Call center pricing looks straightforward on the sales page. Here is what you discover after signing up:",
      items: [
        {
          icon: Clock,
          title: "Hold times erode your caller experience",
          body: "Call centers have peak periods too. When multiple clients are busy at the same time, your callers wait. Average hold times of 45-90 seconds are common during peak hours. Your callers do not know they are waiting in a shared queue — they just know they called your business and nobody picked up quickly.",
        },
        {
          icon: FileText,
          title: "Script drift happens gradually",
          body: "Your call center starts strong. But operators handle dozens of accounts. Over time, they shortcut your script, miss qualification questions, or give outdated information. You only find out when a customer complains or a lead falls through the cracks. AI does not drift — it says exactly what you configured, every single time.",
        },
        {
          icon: RotateCcw,
          title: "Operator turnover affects your quality",
          body: "Call center turnover rates average 30-45% annually. That means the operator who finally learned your business may be gone in 6 months, replaced by someone who has not read your script carefully yet. You pay the same rate but get inconsistent quality. With AI, there is no turnover — the agent improves over time instead of degrading.",
        },
        {
          icon: Link,
          title: "Integration gaps create manual work",
          body: "Most call centers send you an email or text summary after each call. Someone on your team still has to enter that into your CRM, check the calendar, and send a confirmation. An AI voice agent does all of this automatically during the call. The difference between a call summary email and an auto-booked CRM-logged appointment is hours of admin work per week.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "AI voice agents replacing call center functions",
      subtitle:
        "Real implementations where AI took over work that was previously outsourced:",
      studies: [
        {
          industry: "Restaurant",
          headline: "Replaced answering service with AI voice agent",
          body: "A NYC restaurant was paying $400/month for an answering service that took messages and emailed summaries. Switched to an AI voice agent that answers calls, handles reservation questions, and provides instant responses. Saved $300/month and improved caller experience — bookings happen during the call instead of waiting for a callback.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce",
          headline: "CRM automation replaced manual call logging",
          body: "An e-commerce company was paying call center operators to log lead information into their CRM manually. Automated the entire pipeline — calls get transcribed, leads are qualified, and everything is logged automatically. The system handles 5,600+ contacts with zero manual data entry.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
        { label: "AI phone answering guide", href: "/ai-phone-answering-for-service-businesses" },
        { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
      ],
    },
  ],
  faqItems: [
    {
      question: "Can an AI voice agent match call center quality?",
      answer:
        "For routine calls — scheduling, qualification, FAQ answers — AI matches or exceeds call center quality because it is perfectly consistent. For complex calls requiring empathy, judgment, or creative problem-solving, a good human operator is still better. The practical answer: AI handles 70-85% of typical service business calls as well or better than a call center. The remaining calls get routed to your team with full context.",
    },
    {
      question: "How does cost compare at different call volumes?",
      answer:
        "At 100 calls per month, a call center costs $600-$1,500 while AI costs $70-$150. At 500 calls per month, a call center costs $2,000-$5,000 while AI costs $150-$400. The gap widens as volume increases because call center costs scale linearly with operator time, while AI per-minute costs decrease with platform tier discounts. For most small businesses, AI is 60-80% cheaper at any volume.",
    },
    {
      question: "How do I transition from a call center to AI?",
      answer:
        "Start by running AI alongside your call center for 2-4 weeks. Route after-hours calls to AI first — this is the lowest-risk test because those calls currently get lesser coverage anyway. Compare call logs, booking rates, and caller feedback. Once you are confident, shift daytime overflow to AI. Most businesses fully transition in 30-60 days while keeping the call center as a backup during the switchover.",
    },
    {
      question: "What about overflow calls during peak times?",
      answer:
        "This is where AI has a clear structural advantage. A call center has a fixed number of operators, and when all lines are busy, your callers wait. AI handles unlimited concurrent calls — even if 10 people call in the same minute, every single one gets answered immediately. For businesses with unpredictable call spikes, this alone can justify the switch.",
    },
    {
      question: "Do callers know they are talking to AI?",
      answer:
        "Modern AI voice agents sound conversational and natural. Some callers notice, most do not — especially for routine calls like scheduling and basic questions. You can configure the agent to identify itself as an AI assistant or a virtual receptionist, depending on your preference and any disclosure requirements in your industry. In practice, most callers care about getting their problem solved quickly, not about who solved it.",
    },
  ],
  faqSubtitle:
    "Practical answers about switching from a call center to AI voice handling",
  ctaHeading: "Paying too much for call center coverage?",
  ctaText:
    "Book a 30-minute call. We will compare your current call center costs against what AI would cost for the same coverage, and show you what the transition looks like step by step.",
  ctaSubtext:
    "Bring your current call center invoice. We will do the math together.",
  relatedLinks: [
    { label: "AI phone answering guide", href: "/ai-phone-answering-for-service-businesses" },
    { label: "AI voice agent for restaurants", href: "/ai-voice-agent-for-restaurants" },
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    { label: "Chatbot vs. voice agent", href: "/ai-chatbot-vs-ai-voice-agent-for-lead-qualification" },
  ],
};

export default data;
