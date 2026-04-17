import {
  FileText,
  Clock,
  MessageSquare,
  Mail,
  Target,
  BarChart3,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Bot,
  Users,
  ArrowUpRight,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "quote-follow-up-automation",
  metaTitle:
    "Quote Follow-Up Automation — Close More Estimates on Autopilot | Dmytro AI",
  metaDescription:
    "How quote follow-up automation works for service businesses. Automated reminders, objection handling, and timed sequences that close more estimates without manual chasing.",
  badgeText: "Sales Automation",
  badgeIcon: FileText,
  h1: "Quote Follow-Up Automation",
  heroIntro:
    "You send a quote. The prospect says they will think about it. And then silence. No response to your email. No callback. You are too busy to follow up because you are on the next job. Two weeks later, they went with someone else — not because your price was wrong, but because the other business followed up and you did not. Quote follow-up automation sends timed, relevant follow-ups that keep you top of mind without you thinking about it.",
  heroSubtext:
    "Below: what quote follow-up automation looks like in practice, which sequences close the most deals, and what makes the difference between helpful follow-up and annoying follow-up.",
  sections: [
    {
      type: "cards",
      title: "What a quote follow-up system does",
      subtitle:
        "These are the building blocks of an automated quote follow-up sequence. Most businesses start with the first three and expand:",
      items: [
        {
          icon: Clock,
          title: "Timed follow-up sequence",
          body: "Quote sent but not accepted? Automated follow-up at 2 days, 5 days, and 14 days. Each message adds value — not just 'checking in' but answering a likely objection or adding relevant context.",
        },
        {
          icon: MessageSquare,
          title: "Multi-channel outreach",
          body: "Email and SMS together outperform either alone. The first follow-up might be an email with helpful information. The second might be a quick text: 'Hey, any questions about that estimate?' Different channels for different touchpoints.",
        },
        {
          icon: Target,
          title: "Objection-aware messaging",
          body: "Each follow-up addresses common reasons prospects hesitate: price concerns, timing uncertainty, scope questions. A follow-up that says 'Most clients ask about X — here is how we handle it' is far more effective than 'just checking in.'",
        },
        {
          icon: Mail,
          title: "Social proof integration",
          body: "Follow-up emails include relevant case studies, testimonials, or before/after photos for similar projects. Prospects who see proof of results are more likely to move forward.",
        },
        {
          icon: Bot,
          title: "Smart exit conditions",
          body: "The sequence stops when the prospect responds, signs, or books a call. No embarrassing follow-ups after someone already accepted. This requires integration between your email, CRM, and invoicing system.",
        },
        {
          icon: ArrowUpRight,
          title: "Expiration and urgency",
          body: "For time-sensitive quotes, automated messages before expiration: 'Your estimate expires in 3 days — want to lock in this pricing?' Creates natural urgency without pressure tactics.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is quote follow-up automation right for your business?",
      subtitle:
        "If you send quotes and do not follow up consistently, the answer is almost certainly yes:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "High impact",
          variant: "green",
          items: [
            "You send 10+ quotes or estimates per month",
            "Your close rate on quotes is below 50%",
            "You rarely follow up more than once after sending a quote",
            "Your team is too busy on job sites to chase estimates",
            "Competitors are following up and winning jobs you quoted first",
            "Your average job value is high enough that one extra close per month matters",
          ],
        },
        {
          icon: XCircle,
          heading: "Not a priority",
          variant: "neutral",
          items: [
            "You close 80%+ of quotes already",
            "Your quotes are simple and decisions happen on the spot",
            "You send fewer than 5 quotes per month",
            "Your industry does not use formal quotes or estimates",
            "You already have a salesperson who follows up consistently",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "What makes follow-up work vs feel spammy",
      subtitle:
        "The difference between effective follow-up and annoying follow-up:",
      blocks: [
        {
          heading: "Add value, do not just check in",
          body: "'Just checking in' emails get ignored. 'Here is a project we finished last week that is similar to yours' gets read. Every follow-up should give the prospect a reason to engage — new information, a relevant example, an answer to a question they probably have.",
        },
        {
          heading: "Timing matters more than volume",
          body: "A follow-up at 48 hours catches them while the quote is fresh. Day 5 catches them if they have been comparing other options. Day 14 is a final gentle nudge. Three well-timed messages outperform seven poorly timed ones.",
        },
        {
          heading: "Make it easy to say yes",
          body: "Every follow-up should include a clear next step: a link to accept the quote, a booking link for a quick call, or a simple reply option. Remove friction from the decision. If accepting your quote requires printing, signing, scanning, and emailing — you are losing deals to convenience.",
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI of quote follow-up automation",
      subtitle:
        "The math on this automation is compelling:",
      items: [
        {
          icon: TrendingUp,
          title: "Close rate improvement",
          body: "Businesses that follow up systematically close significantly more quotes than those that do not. For a company sending 30 quotes per month, even a 10% improvement in close rate is 3 extra jobs per month.",
        },
        {
          icon: BarChart3,
          title: "Revenue per quote sent",
          body: "If your average job is $2,000 and you close 3 more per month from follow-up, that is $6,000/month in additional revenue. The automation pays for itself with one extra closed deal.",
        },
        {
          icon: Clock,
          title: "Time savings",
          body: "Manual follow-up takes 10-15 minutes per quote per touchpoint. At 30 quotes with 3 touchpoints each, that is 15-22 hours per month. Automation handles this entirely while your team is on job sites.",
        },
        {
          icon: Users,
          title: "Consistency",
          body: "Every quote gets followed up. Not just the big ones. Not just when someone remembers. Every single one. The leads that fall through cracks are often the easiest wins.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Follow-up automation in practice",
      subtitle:
        "These projects use the same follow-up and nurture patterns:",
      studies: [
        {
          industry: "E-Commerce",
          headline: "Automated follow-up for thousands of leads",
          body: "Multi-step follow-up sequences organized and nurtured leads automatically. The same sequence logic powers quote follow-up for service businesses — timed messages, multi-channel outreach, and smart exit conditions.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI email sequence automation", href: "/ai-email-sequence-automation" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "Client reactivation automation", href: "/client-reactivation-automation" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How many follow-up messages should a quote sequence have?",
      answer:
        "3-4 messages over 2-3 weeks is the sweet spot for most service businesses. Enough to stay top of mind without becoming annoying. Each message should add new value, not repeat the same request.",
    },
    {
      question: "Should I use email or SMS for follow-up?",
      answer:
        "Both. Email works well for longer messages with attachments and social proof. SMS works for short, conversational check-ins. A typical sequence alternates: email on day 2, text on day 5, email on day 14.",
    },
    {
      question: "What if the prospect already accepted the quote?",
      answer:
        "The automation stops. Smart exit conditions check your CRM and invoicing system before sending each message. If the quote is accepted, paid, or marked as lost, the sequence ends automatically.",
    },
    {
      question: "Can I see if the prospect opened my follow-up emails?",
      answer:
        "Yes. Email open and click tracking is built in. If a prospect opens the email but does not respond, the next follow-up can acknowledge that: 'I noticed you had a chance to look at the estimate — happy to clarify anything.'",
    },
    {
      question: "What does it cost?",
      answer:
        "A quote follow-up automation runs $1.5K-$3K depending on complexity. Includes CRM integration, email/SMS sequences, exit conditions, and template setup. SMS costs are typically $0.01-$0.03 per message.",
    },
  ],
  faqSubtitle:
    "Practical answers about quote follow-up automation",
  ctaHeading: "Stop losing jobs to silence",
  ctaText:
    "Book a 30-minute call. We will look at your current quote process, estimate how many deals you are losing to no follow-up, and map out a sequence that fits your business.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical conversation about closing more of the quotes you already send.",
  relatedLinks: [
    { label: "AI email sequence automation", href: "/ai-email-sequence-automation" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "Client reactivation automation", href: "/client-reactivation-automation" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
