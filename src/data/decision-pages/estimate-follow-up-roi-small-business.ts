import {
  Calculator,
  TrendingUp,
  Clock,
  MessageSquare,
  Workflow,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  DollarSign,
  FileText,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "estimate-follow-up-roi-small-business",
  metaTitle:
    "Estimate Follow-Up ROI for Small Business — When Automation Pays for Itself and When It Doesn't | Dmytro AI",
  metaDescription:
    "How to evaluate estimate follow-up ROI for a small business. Conservative payback math for stale-estimate recovery, saved admin time, estimator handoff efficiency, and when the automation is worth building versus when a manual reminder is enough.",
  badgeText: "Estimate Follow-Up ROI",
  badgeIcon: Calculator,
  h1: "Estimate Follow-Up ROI for Small Business",
  heroIntro:
    "If your business sends estimates after site visits and a meaningful share of them go cold, estimate-follow-up automation can have short payback. The ROI does not come from AI hype — it comes from recovering jobs that already made it past the inspection. You paid for the truck roll, the estimator's time, and the office work to prepare the quote. When that estimate dies quietly because nobody followed up at day 3 or day 7, the sunk cost is real and the lost revenue is measurable. The useful question is not whether automation sounds good in theory. It is whether the math works with conservative assumptions: a modest number of recovered estimates per month, some saved admin time, and better visibility into where open quotes are stalling.",
  heroSubtext:
    "Below: where estimate-follow-up ROI usually comes from, how to model it conservatively, what makes payback happen faster, when a simpler reminder is the smarter first move, and what adjacent proof from the site supports the pattern.",
  sections: [
    {
      type: "table",
      title: "Where the ROI usually comes from",
      subtitle:
        "Estimate-follow-up economics are mostly about recovering sunk site-visit costs and closing jobs that already cleared the inspection stage:",
      headers: ["Operational change", "Why it matters financially"],
      rows: [
        {
          label: "Structured follow-up after the estimate is sent",
          values: [
            "Open estimates get timed reminders at day 2, day 5, and day 10 instead of relying on whoever remembers to check",
            "More estimates convert because the homeowner hears from you while they are still comparing bids — not two weeks later when they have already signed with someone else",
          ],
        },
        {
          label: "Recovered sunk cost from site visits",
          values: [
            "Every estimate that goes cold wastes the truck roll, the estimator's time on site, and the office labor to prepare the quote",
            "Even modest estimate recovery — one or two extra jobs per month — recoups a significant share of that wasted field time",
          ],
        },
        {
          label: "Saved admin and estimator follow-up time",
          values: [
            "The office manager or estimator stops manually tracking who needs a callback, drafting one-off texts, and checking CRM stages",
            "That recovered time has value whether you count it as labor savings or as capacity freed for new site visits and estimates",
          ],
        },
        {
          label: "Better visibility into stale estimates",
          values: [
            "The business can see how many estimates are sitting open, how long they have been idle, and which ones need escalation",
            "That visibility stops the quiet leak where estimates die without anyone noticing until the quarterly revenue review",
          ],
        },
        {
          label: "Cleaner estimator-to-office handoff",
          values: [
            "When a homeowner re-engages after receiving the estimate, the right person gets notified with context instead of the reply sitting unread",
            "Faster handoff means the homeowner gets a real answer while they are still warm — not a delayed callback that feels like starting over",
          ],
        },
      ],
    },
    {
      type: "cards",
      title: "A conservative ROI model for estimate follow-up",
      subtitle:
        "You do not need heroic conversion claims for this to work. Use bounded math tied to your real numbers:",
      items: [
        {
          icon: FileText,
          title: "1. Count how many estimates go cold each month",
          body: "Look at estimates sent versus jobs booked over the past few months. The gap is your opportunity pool. Not every cold estimate is recoverable — some were never serious — but even a modest share of that gap represents real revenue left on the table.",
          links: [
            { label: "Estimate follow-up automation for service businesses", href: "/estimate-follow-up-automation-for-service-businesses" },
            { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
          ],
        },
        {
          icon: DollarSign,
          title: "2. Estimate the value of one recovered job",
          body: "Use your real average job value from estimate-stage work. For most field-service businesses — roofing, plumbing, painting, HVAC, electrical, landscaping — one recovered job is worth enough that even one or two extra closes per month changes the math significantly.",
          links: [
            { label: "Estimate follow-up cost for small business", href: "/estimate-follow-up-cost-small-business" },
            { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
          ],
        },
        {
          icon: Clock,
          title: "3. Add back saved admin and estimator time",
          body: "If the office manager currently spends hours each week checking who followed up, sending reminder texts, and updating CRM stages manually, that labor matters. If the estimator is pulling time from new site visits to circle back on old quotes, that capacity cost matters too.",
          links: [
            { label: "AI automation time savings", href: "/ai-automation-time-savings-small-business" },
          ],
        },
        {
          icon: BarChart3,
          title: "4. Keep the payback test modest",
          body: "A cautious model works: one recovered estimate-stage job per month, some saved admin time, and better visibility that prevents the quiet leak. If the math works even with those conservative assumptions, the real-world case is usually strong enough.",
          links: [
            { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
            { label: "AI automation ROI calculator", href: "/ai-automation-roi-calculator" },
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What makes estimate-follow-up payback happen faster",
      subtitle:
        "Estimate-follow-up automation is not equally valuable in every business. ROI comes faster when these conditions are true:",
      items: [
        {
          icon: TrendingUp,
          title: "You send enough estimates that manual follow-up keeps slipping",
          body: "If the team sends more than a handful of estimates per week, manual tracking breaks down. Reminders get missed, callbacks get delayed, and cold estimates pile up without anyone flagging them. That volume is where automation pays back fastest.",
        },
        {
          icon: DollarSign,
          title: "One recovered job has real financial weight",
          body: "A roofer recovering one $8K job from a stale estimate has a different ROI profile than a handyman recovering a $200 task. The higher the average estimate value, the fewer recoveries you need to justify the build cost.",
        },
        {
          icon: Workflow,
          title: "The bottleneck is follow-up discipline, not pricing",
          body: "If estimates go cold because nobody follows up — not because the price is wrong or the scope was off — automation addresses the real leak. If the problem is pricing competitiveness or poor scope communication, better follow-up will not fix it.",
        },
        {
          icon: MessageSquare,
          title: "You start with the narrowest workflow that recovers revenue",
          body: "A simple reminder sequence at the estimate-sent stage usually pays back faster than a full escalation dashboard with estimator routing and stale-estimate visibility. Start narrow, prove the economics, then expand.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When estimate-follow-up ROI is strong vs. weak",
      subtitle:
        "Use this to decide whether the automation belongs near the top of your list or further down:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Strong ROI case",
          variant: "green",
          items: [
            "Estimates regularly go cold because nobody circles back after day 2 or 3",
            "One or two recovered jobs per month would cover a meaningful share of the build cost",
            "The team already has a CRM or job tool that tracks when estimates are sent",
            "Manual follow-up is inconsistent because the estimator is already on the next site visit",
            "You want visibility into how many estimates are sitting open and where they stall",
          ],
        },
        {
          icon: XCircle,
          heading: "Weak ROI case",
          variant: "neutral",
          items: [
            "Estimate volume is low enough that a calendar reminder per quote is still realistic",
            "The real problem is pricing or scope positioning, not follow-up timing",
            "Estimates live in email or paper with no CRM trigger for automation to hook into",
            "Your close rate is already strong and few estimates genuinely go cold",
            "You want full pipeline automation before proving the narrower estimate-recovery layer",
          ],
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "This page uses adjacent proof already published on the site. The exact vertical may differ, but the estimate-recovery economics are the same: protect the sunk cost of the site visit by following up before the quote goes cold.",
      studies: [
        {
          industry: "E-commerce / CRM pipeline ROI",
          headline: "The vehicle accessories case study shows what pipeline-stage visibility changes financially",
          body: "The e-commerce CRM case study is adjacent proof for the higher end of estimate-follow-up ROI. Once the workflow tracks multiple pipeline stages and surfaces stalled opportunities, the financial visibility changes how the business allocates follow-up effort.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Field service / estimate cluster",
          headline: "Live estimate-follow-up pages define the operational scope that drives ROI",
          body: "The estimate follow-up parent page and vertical children for contractors, roofers, plumbers, painters, landscapers, electricians, and auto repair shops already explain what the workflow handles operationally. This ROI page stays narrow by focusing specifically on when those builds pay back and when they do not.",
          link: "/estimate-follow-up-automation-for-service-businesses",
        },
        {
          industry: "Cost context / estimate follow-up pricing",
          headline: "The cost page provides the budget side of the ROI equation",
          body: "The estimate follow-up cost page covers realistic build ranges from $800 to $5.5K. This ROI page complements it by answering the next question: given that cost, how many recovered estimates per month does it take to justify the investment?",
          link: "/estimate-follow-up-cost-small-business",
        },
      ],
      links: [
        { label: "Estimate follow-up automation for service businesses", href: "/estimate-follow-up-automation-for-service-businesses" },
        { label: "Estimate follow-up setup for service businesses", href: "/estimate-follow-up-setup-for-service-businesses" },
        { label: "Estimate follow-up cost for small business", href: "/estimate-follow-up-cost-small-business" },
        { label: "Estimate follow-up setup vs. DIY for small business", href: "/estimate-follow-up-setup-vs-diy-small-business" },
        { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
        { label: "AI lead follow-up ROI for small business", href: "/ai-lead-follow-up-roi-small-business" },
        { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
        { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
      ],
    },
    {
      type: "prose",
      title: "What small businesses usually get wrong about estimate-follow-up ROI",
      subtitle:
        "These mistakes make the economics look better or worse than they really are:",
      blocks: [
        {
          heading: "Counting every sent estimate as a recoverable opportunity",
          body: "Not every cold estimate died because of weak follow-up. Some were never serious, some were price shopping with no intent to hire, and some went to a competitor on factors your follow-up cannot change. Model ROI on the portion of estimates that realistically could have converted with better timing and persistence — not the entire gap between sent and booked.",
        },
        {
          heading: "Ignoring the sunk cost of the site visit",
          body: "Owners often treat a cold estimate as zero cost. It is not — the estimator drove to the site, spent time scoping the job, and the office prepared the quote. That labor and truck-roll cost is already spent. When the estimate goes cold without follow-up, you lose both the investment and the revenue. Even modest recovery changes the math.",
        },
        {
          heading: "Buying a full escalation system before proving the reminder layer",
          body: "If estimates go cold mainly because nobody sends a follow-up text at day 3, a basic reminder sequence fixes the problem and pays back quickly. Jumping to stale-estimate dashboards and estimator routing before proving the simpler workflow adds cost and delays payback.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "How do I estimate ROI on estimate follow-up automation?",
      answer:
        "Start with how many estimates go cold each month and what one recovered job is worth. Use conservative math — one or two extra closes per month — then add back saved admin time from less manual follow-up tracking. For most field-service businesses, even that modest model shows meaningful payback within the first few months.",
    },
    {
      question: "How quickly can estimate follow-up automation pay for itself?",
      answer:
        "For businesses where one recovered estimate-stage job has real value — roofing, HVAC, plumbing, painting, landscaping — payback can happen within the first one to three months. For lower-value jobs or very low estimate volume, the timeline stretches out and a manual reminder may be the smarter first step.",
    },
    {
      question: "How is this different from the estimate follow-up cost page?",
      answer:
        "The cost page covers what the automation costs to build and run — realistic budget ranges from $800 to $5.5K. This page covers the other side: how to think about recovered estimate value, saved admin time, payback speed, and whether the economics justify building it now.",
    },
    {
      question: "How is this different from the AI lead follow-up ROI page?",
      answer:
        "The AI lead follow-up ROI page covers the earlier funnel stage — responding to new inquiries, qualifying interest, and booking the site visit. This page covers the stage after the estimate is sent — recovering quotes that went cold after the estimator already visited the property.",
    },
    {
      question: "When is a manual reminder better than automated estimate follow-up?",
      answer:
        "If you send fewer than a handful of estimates per week and the office can realistically track each one with a calendar reminder, manual follow-up may be sufficient. Automation becomes worth it when volume exceeds what manual discipline can reliably handle — which for most growing field-service businesses is lower than they think.",
    },
  ],
  faqSubtitle:
    "Practical questions from business owners trying to decide whether estimate-follow-up automation is financially worth building",
  ctaHeading: "Want to see whether estimate follow-up automation would actually pay back in your business?",
  ctaText:
    "Book a 30-minute call. We will look at your estimate volume, close rate, average job value, and current follow-up process, then estimate whether automated estimate recovery has real payback or whether a simpler reminder should come first.",
  ctaSubtext:
    "No inflated ROI model. Just a practical fit check based on your real numbers.",
  relatedLinks: [
    { label: "Estimate follow-up automation for service businesses", href: "/estimate-follow-up-automation-for-service-businesses" },
    { label: "Estimate follow-up setup for service businesses", href: "/estimate-follow-up-setup-for-service-businesses" },
    { label: "Estimate follow-up launch checklist for small business", href: "/estimate-follow-up-launch-checklist-small-business" },
    { label: "Estimate follow-up cost for small business", href: "/estimate-follow-up-cost-small-business" },
    { label: "Estimate follow-up vs. quote follow-up", href: "/estimate-follow-up-vs-quote-follow-up-for-service-businesses" },
    { label: "AI lead follow-up ROI for small business", href: "/ai-lead-follow-up-roi-small-business" },
    { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
    { label: "AI automation ROI calculator", href: "/ai-automation-roi-calculator" },
    { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
    { label: "Best AI automations for service businesses", href: "/best-ai-automation-for-service-businesses" },
    { label: "Case studies", href: "/case-studies" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
