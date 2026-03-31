import {
  Scale,
  LayoutDashboard,
  Code2,
  DollarSign,
  Clock,
  AlertTriangle,
  Zap,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "gohighlevel-vs-custom-crm-small-business",
  metaTitle:
    "GoHighLevel vs. Custom CRM for Small Business | Dmytro AI",
  metaDescription:
    "Comparing GoHighLevel and custom-built CRM solutions for small businesses. Cost, flexibility, time-to-value, and what makes sense at different growth stages.",
  badgeText: "Tool Comparison",
  badgeIcon: Scale,
  h1: "GoHighLevel vs. Custom CRM for Small Business",
  heroIntro:
    "GoHighLevel gives you a pre-built marketing and CRM platform for $97/month. A custom CRM gives you exactly what you need — but takes weeks to build and costs thousands upfront. Here's how to decide which path makes sense for your business right now.",
  heroSubtext:
    "Below: what each option actually includes, real cost analysis, and when it makes sense to switch.",
  sections: [
    {
      type: "cards",
      title: "Two approaches to managing your leads and clients",
      subtitle:
        "Both can run your sales pipeline. They just get there very differently:",
      items: [
        {
          icon: LayoutDashboard,
          title: "GoHighLevel (GHL)",
          body: "All-in-one platform: CRM, email/SMS marketing, pipeline management, appointment booking, reputation management, and more. Pre-built templates for service businesses. You configure and customize within the platform's boundaries.",
        },
        {
          icon: Code2,
          title: "Custom CRM build",
          body: "Purpose-built system using tools like n8n, Airtable, Supabase, or a full-stack app. You get exactly what your workflow needs — nothing more, nothing less. Built around your process rather than adapting your process to fit a platform.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "How the two options compare across the factors that matter for small service businesses:",
      headers: ["GoHighLevel", "Custom CRM"],
      rows: [
        {
          label: "Upfront cost",
          values: ["$0–$300 (plan + initial setup)", "$2K–$10K build cost"],
        },
        {
          label: "Monthly cost",
          values: ["$97–$497/month", "$0–$50/month (hosting + tools)"],
        },
        {
          label: "Time to launch",
          values: ["1–3 days for basic setup", "2–6 weeks for full build"],
        },
        {
          label: "Built-in features",
          values: [
            "CRM, email, SMS, booking, reputation, funnels",
            "Only what you build",
          ],
        },
        {
          label: "Customization",
          values: [
            "Within platform limits",
            "Unlimited — built to your spec",
          ],
        },
        {
          label: "Learning curve",
          values: [
            "Moderate — lots of features to learn",
            "Low — built for your workflow",
          ],
        },
        {
          label: "Vendor lock-in",
          values: [
            "High — data and workflows live in GHL",
            "Low — you own everything",
          ],
        },
        {
          label: "Best for",
          values: [
            "Businesses that need many features fast",
            "Businesses with specific workflow needs",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each option makes sense",
      subtitle:
        "The right choice depends on where your business is right now and what you actually need:",
      options: [
        {
          icon: LayoutDashboard,
          heading: "Use GoHighLevel when…",
          highlighted: false,
          items: [
            "You need CRM + marketing + booking in one tool and don't want to assemble parts",
            "You're starting from zero and need something working this week",
            "Your workflows are fairly standard for a service business",
            "You want pre-built templates for SMS campaigns, email sequences, and funnels",
            "You're an agency or consultant managing multiple client accounts",
          ],
        },
        {
          icon: Code2,
          heading: "Build custom when…",
          highlighted: true,
          items: [
            "GoHighLevel's features don't fit your actual workflow",
            "You need integrations GHL doesn't support natively",
            "You're paying for GHL features you never use",
            "You want full ownership and no vendor lock-in",
            "Your process is unique enough that pre-built templates don't work",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "The real cost math most people miss",
      subtitle:
        "Sticker price is misleading. Here's the full picture:",
      blocks: [
        {
          heading: "GoHighLevel: $97/month sounds cheap until you add it up",
          body: "The base plan is $97/month ($1,164/year). The Agency Pro plan with advanced features is $497/month ($5,964/year). Add SMS and calling costs ($0.0079/segment, $0.013/min), extra users, and WhatsApp fees. A typical small business spends $150–$300/month all-in. Over 3 years, that's $5,400–$10,800 plus your time configuring it.",
        },
        {
          heading: "Custom CRM: expensive upfront, cheap forever",
          body: "A well-built custom CRM costs $3K–$8K to build. Monthly hosting and tool costs run $10–$50. Over 3 years, total cost is $3,360–$9,800. The breakeven point is typically 18–24 months. After that, the custom build is significantly cheaper — and it's built exactly for your workflow.",
        },
        {
          heading: "The hidden cost: adapting your workflow to the tool",
          body: "GoHighLevel is opinionated — it wants you to work its way. If your sales process, follow-up cadence, or client communication style doesn't match GHL's assumptions, you'll spend hours fighting the platform instead of running your business. This adaptation cost is invisible but real.",
        },
      ],
    },
    {
      type: "considerations",
      title: "What to watch out for",
      subtitle:
        "Regardless of which path you choose, these are the traps that catch small businesses:",
      items: [
        {
          icon: AlertTriangle,
          title: "Don't overbuild a custom CRM",
          body: "The biggest risk with custom is scope creep. Start with your core workflow: leads in, qualification, follow-up, booking. Add features only when the base system is proven and running. A simple system that works beats a complex system that's always 80% done.",
        },
        {
          icon: DollarSign,
          title: "Don't ignore GHL's total cost",
          body: "GHL's $97 plan gets you in the door, but real usage — SMS, calling, extra sub-accounts — adds up. Calculate your actual monthly spend for 3 months before committing long-term. Some businesses spend $300+/month before they realize a custom build would have been cheaper.",
        },
        {
          icon: Clock,
          title: "Don't underestimate migration difficulty",
          body: "Moving from GHL to a custom system (or vice versa) is painful. Data export is limited, workflows don't transfer, and phone numbers may need porting. Pick a path you can commit to for at least 12–18 months.",
        },
        {
          icon: Zap,
          title: "Automation matters more than the platform",
          body: "The CRM itself is just the container. What matters is what happens automatically: lead follow-up speed, sequence quality, booking conversion. A well-automated simple CRM outperforms a feature-rich platform with no automation every time.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "Can I start with GoHighLevel and switch to custom later?",
      answer:
        "Yes, but plan for it. Export your contacts and deal data regularly. Keep your workflows documented. When you're ready to switch, the transition takes 2–4 weeks. The main friction is rebuilding automations and re-training your team. It's doable, just not instant.",
    },
    {
      question: "Is GoHighLevel good for HVAC companies?",
      answer:
        "It can work. GHL handles basic CRM, SMS follow-up, and reputation management well. But HVAC-specific needs — dispatch integration, seasonal campaign logic, service history tracking — often require custom work on top of GHL or a purpose-built system. If your workflow is standard lead-to-booking, GHL is fine. If you need deeper operational automation, custom is usually better.",
    },
    {
      question: "What does a custom CRM actually get built on?",
      answer:
        "It depends on the complexity. Simple systems use n8n for automation + Airtable or Google Sheets as a database + a booking tool. More complex builds use Supabase or PostgreSQL for data, n8n for workflows, and a custom dashboard. The tools are chosen based on your specific needs — there's no one-size-fits-all stack.",
    },
    {
      question: "What if I need features from both approaches?",
      answer:
        "That's common. Some businesses use GHL for marketing (email, SMS, funnels) and a custom system for operational CRM (lead routing, dispatch, service tracking). The two can integrate via APIs or n8n. This hybrid approach costs more upfront but gives you the best of both worlds.",
    },
  ],
  faqSubtitle:
    "Practical answers about CRM choices for small businesses",
  ctaHeading: "Need help deciding?",
  ctaText:
    "Book a 30-minute call. We'll look at your current workflow, figure out whether GoHighLevel, a custom build, or a hybrid makes the most sense, and map out what it would cost and how long it would take.",
  ctaSubtext: "No pressure. Just clarity on your options.",
  relatedLinks: [
    { label: "n8n vs Zapier comparison", href: "/n8n-vs-zapier-small-business" },
    {
      label: "AI lead follow-up guide",
      href: "/ai-lead-follow-up-for-service-businesses",
    },
    {
      label: "Consultant vs. agency comparison",
      href: "/hire-ai-automation-consultant-vs-agency",
    },
  ],
};

export default data;
