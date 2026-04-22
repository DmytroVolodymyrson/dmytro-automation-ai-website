import {
  Calculator,
  DollarSign,
  Clock,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Users,
  Target,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-automation-roi-calculator",
  metaTitle:
    "AI Automation ROI Calculator for Small Business | Dmytro AI",
  metaDescription:
    "Use a simple AI automation ROI calculator to estimate recovered revenue, time savings, payback period, and whether a small-business automation project is worth building.",
  badgeText: "ROI Calculator",
  badgeIcon: Calculator,
  h1: "AI Automation ROI Calculator for Small Business",
  heroIntro:
    "If you are trying to decide whether AI automation is worth it, you do not need a vague promise. You need a simple way to run the math. This page gives you a practical calculator for small-business automation: how much revenue you are leaking today, how much labor time you could reclaim, what the build will cost, and how long payback should take before the project makes sense.",
  heroSubtext:
    "Below: the inputs that matter, a manual ROI worksheet, where the math is usually strong or weak, and what real adjacent proof supports the numbers without pretending every business gets the same outcome.",
  sections: [
    {
      type: "prose",
      title: "The four numbers that drive automation ROI",
      subtitle:
        "Most small businesses do not need a complex spreadsheet first. Start with these core inputs:",
      blocks: [
        {
          heading: "1. Revenue currently lost to slow follow-up or missed demand",
          body: "Estimate how many calls, form leads, quote requests, or dormant contacts are slipping through each month. Multiply that by your close rate and average job value. This is usually the biggest ROI lever because recovered demand compounds fast when the workflow is tied to real inquiries instead of back-office busywork.",
        },
        {
          heading: "2. Manual hours your team spends every week",
          body: "Count the time spent on repetitive tasks like first-response follow-up, reminders, CRM updates, scheduling, and status chasing. Multiply those hours by the real hourly cost of the owner, admin, or coordinator doing the work. That gives you the labor cost of staying manual.",
        },
        {
          heading: "3. Total build cost plus monthly running cost",
          body: "Use the real project quote, not a fantasy SaaS price. Then add the recurring stack costs: CRM, automation tool, SMS/email sending, AI usage, and light maintenance. Good ROI math always includes both the upfront build and the monthly carry cost.",
        },
        {
          heading: "4. Payback window you actually find acceptable",
          body: "For most small businesses, a focused revenue-recovery workflow should usually pay back in roughly 1 to 4 months. A pure efficiency workflow may take longer. If the model says you need a year to break even on a small automation, that is usually a sign to narrow scope or choose a different build first.",
        },
      ],
    },
    {
      type: "table",
      title: "Simple ROI calculator worksheet",
      subtitle:
        "Use this manual worksheet before you buy another tool or approve another automation build:",
      headers: ["How to estimate it", "Quick example", "Why it matters"],
      rows: [
        {
          label: "Monthly recovered revenue",
          values: [
            "Lost leads per month × close rate × average job value",
            "20 missed leads × 20% close × $1,500 = $6,000",
            "Shows the revenue upside of fixing response speed or follow-up gaps",
          ],
        },
        {
          label: "Monthly labor savings",
          values: [
            "Hours saved per month × real hourly cost",
            "25 hours × $30/hour = $750",
            "Captures admin time your team gets back from repetitive work",
          ],
        },
        {
          label: "Monthly total value",
          values: [
            "Recovered revenue + labor savings",
            "$6,000 + $750 = $6,750",
            "This is the gross monthly benefit before software costs",
          ],
        },
        {
          label: "Monthly net value",
          values: [
            "Monthly total value − tool/usage/maintenance cost",
            "$6,750 − $250 = $6,500",
            "Shows what the workflow is worth after the stack keeps running",
          ],
        },
        {
          label: "Payback period",
          values: [
            "Build cost ÷ monthly net value",
            "$3,000 ÷ $6,500 = 0.46 months",
            "Helps you compare projects and choose the first build rationally",
          ],
        },
        {
          label: "12-month ROI",
          values: [
            "((12 × monthly net value) − build cost) ÷ build cost",
            "(($78,000 − $3,000) ÷ $3,000) = 25x",
            "Useful for long-term budgeting, but only after the payback looks realistic",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When the calculator usually says yes — and when it does not",
      subtitle:
        "This is the practical filter. Some workflows are obvious winners. Others should wait:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "The math is usually strong",
          variant: "green",
          items: [
            "You are already paying for ads or lead generation and response speed is inconsistent",
            "A missed call, stale quote, or delayed reply can cost you a $500+ job",
            "Your team repeats the same scheduling, reminder, or CRM tasks every week",
            "You can estimate the current leak with reasonable confidence",
            "The first build is narrow and tied to one bottleneck, not ten goals at once",
            "The projected payback is inside a window you would actually accept",
          ],
        },
        {
          icon: XCircle,
          heading: "The math is usually weak",
          variant: "neutral",
          items: [
            "Lead volume is low and there is not much demand to recover",
            "You want automation mainly because it sounds modern, not because a workflow is breaking",
            "The process is still changing every week and nobody agrees on the current steps",
            "The value case depends on aggressive assumptions you cannot defend",
            "The project is bloated with nice-to-have features before the first win is proven",
            "You do not have someone who can own the process during setup and early tuning",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "ROI mistakes that make the calculator lie",
      subtitle:
        "Bad assumptions are why owners get disappointed by automation. These are the common traps:",
      items: [
        {
          icon: AlertTriangle,
          title: "Counting hypothetical revenue instead of recoverable revenue",
          body: "Use the value you can plausibly recover from existing missed calls, stale leads, slow responses, or manual bottlenecks. Do not assume the automation will double demand if the real problem is that follow-up is already breaking.",
        },
        {
          icon: DollarSign,
          title: "Ignoring ongoing software and usage costs",
          body: "The workflow may be cheap to build and still become a weak financial decision if you ignore CRM fees, AI usage, messaging costs, and light maintenance. Put the running costs in the model early.",
        },
        {
          icon: Clock,
          title: "Treating owner time as free",
          body: "If you or your staff spend hours every week chasing leads, reminders, and updates, that is real cost. The calculator stays honest only when the manual alternative is priced realistically.",
        },
        {
          icon: Target,
          title: "Starting with the wrong workflow",
          body: "If your first project is a back-office optimization while top-of-funnel demand is still leaking, the ROI will look soft. Small businesses usually get the fastest wins from revenue-recovery or speed-to-lead workflows first.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What adjacent proof supports the calculator",
      subtitle:
        "These published projects show the kinds of revenue recovery, labor savings, and throughput gains this calculator is trying to model:",
      studies: [
        {
          industry: "Restaurant",
          headline: "After-hours demand capture moved from 0% to 100%",
          body: "The Paris Cafe voice-agent case study shows why missed-call recovery has such fast ROI. When after-hours reservations and routine inquiries stop going unanswered, the value is not theoretical anymore.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-Commerce",
          headline: "5,600 leads organized into a usable CRM workflow",
          body: "The e-commerce CRM case study is useful for ROI math because it shows the operational value of turning a messy lead database into something the business can actually follow up on consistently.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Lead generation",
          headline: "50+ qualified leads per day delivered automatically",
          body: "The Instagram lead-generation case study is proof that automation ROI is sometimes about throughput as much as labor savings. The calculator should capture both, not just one side of the equation.",
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
      question: "How accurate is an AI automation ROI calculator before anything is built?",
      answer:
        "It is only as good as the inputs. The goal is not to predict the future perfectly. The goal is to decide whether the workflow looks directionally strong enough to build now, weak enough to skip, or unclear enough that you should gather better baseline numbers first.",
    },
    {
      question: "What payback period is reasonable for a small business automation project?",
      answer:
        "For a focused revenue-recovery workflow, many small businesses want to see plausible payback in roughly 1 to 4 months. Efficiency-only workflows can take longer. If the model needs a year to break even on a narrow first project, it is usually better to pick a different workflow first.",
    },
    {
      question: "Should I count only revenue recovered, or also time saved?",
      answer:
        "Count both. Recovered revenue is usually the bigger lever, but time savings still matter because they free up owner or staff capacity. The safest model shows the numbers separately first, then combines them into monthly total value and monthly net value.",
    },
    {
      question: "What if I do not know my close rate or lead leakage exactly?",
      answer:
        "Use conservative ranges. Build a low, medium, and high scenario instead of a single heroic estimate. If the project still looks attractive under the conservative case, the ROI is probably real enough to move forward.",
    },
    {
      question: "What types of workflows usually score best in this calculator?",
      answer:
        "The strongest first projects are usually missed-call recovery, speed-to-lead follow-up, stale-lead reactivation, quote follow-up, and narrow onboarding or reminder workflows that remove obvious repetitive work. They are easier to scope and easier to measure than broad \"AI transformation\" projects.",
    },
  ],
  faqSubtitle:
    "Practical questions about using ROI math before you build automation",
  ctaHeading: "Want help running the numbers on your workflow?",
  ctaText:
    "Book a 30-minute call. We will look at your lead flow, manual workload, likely running costs, and whether the first automation project clears a realistic ROI bar before you spend money building it.",
  ctaSubtext:
    "No obligation. If the math is weak, we will say so.",
  relatedLinks: [
    { label: "AI automation ROI guide", href: "/ai-automation-roi-guide" },
    { label: "AI automation cost for small business", href: "/ai-automation-cost-small-business" },
    { label: "Build vs. buy AI automation", href: "/build-vs-buy-ai-automation" },
    { label: "AI automation consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
