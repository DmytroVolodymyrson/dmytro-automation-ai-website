import {
  ArrowUpRight,
  BarChart3,
  Car,
  CheckCircle2,
  Clock,
  FileText,
  Mail,
  MessageSquare,
  Package,
  Users,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "quote-follow-up-automation-for-auto-parts-ecommerce",
  metaTitle:
    "Quote Follow-Up Automation for Auto Parts E-Commerce | Dmytro AI",
  metaDescription:
    "How auto parts brands automate quote follow-up without mixing live pricing conversations into generic support or stale-lead cleanup. Covers reminder timing, fitment-aware messaging, salesperson handoff, and what a focused build usually costs.",
  badgeText: "Auto Parts Workflow",
  badgeIcon: Car,
  h1: "Quote Follow-Up Automation for Auto Parts E-Commerce",
  heroIntro:
    "Auto parts brands do not only lose revenue because new inquiries never arrive. They also lose revenue because a buyer asked for pricing, sent vehicle details, requested a custom order, or opened a wholesale conversation — then the quote went out and the follow-up never stayed disciplined after that. Someone meant to respond. Someone planned to call back. Someone assumed the buyer would return when they were ready. In reality, quote-stage demand usually goes cold because nobody owned the next step clearly enough. Quote follow-up automation fixes that narrower workflow stage. It starts after the pricing conversation is real, keeps the opportunity moving with practical reminders and next-step prompts, and routes serious buying signals back to the right human before the deal dies quietly in the inbox or CRM.",
  heroSubtext:
    "Below: what quote follow-up automation should actually handle for an auto parts brand, how it stays distinct from mixed inquiry routing and stale-lead recovery, what proof supports it directly, and when this narrower build is or is not worth doing first.",
  sections: [
    {
      type: "cards",
      title: "What auto-parts quote follow-up automation actually handles",
      subtitle:
        "This page is specifically about pre-sale opportunities that already reached a pricing, quote, or custom-order stage but have not converted yet.",
      items: [
        {
          icon: Clock,
          title: "Timed follow-up after the quote or pricing answer goes out",
          body: "Once the store has sent pricing, a quote, or the next custom-order step, the workflow can follow up at practical intervals like day 1, day 3, and day 7 while the buyer is still comparing options instead of weeks later when the conversation is already dead.",
        },
        {
          icon: MessageSquare,
          title: "Messaging that fits the actual buying question",
          body: "A fitment-sensitive quote, a wholesale request, and a custom product inquiry should not all get the same generic check-in. Better systems preserve the original quote context so the next message helps the buyer move forward instead of making them repeat everything.",
        },
        {
          icon: Mail,
          title: "One clear next step in every touch",
          body: "The strongest quote follow-up asks for something simple: confirm the vehicle details, reopen the quote, approve the order, reply with the blocker, or talk to the right human. That keeps momentum without sounding desperate or vague.",
        },
        {
          icon: ArrowUpRight,
          title: "Human handoff when buying intent becomes real again",
          body: "If the buyer replies with a fitment detail, asks for a revised quote, or signals they are ready to move, the workflow should route that conversation to the right salesperson or operator with the quote history attached.",
        },
        {
          icon: Package,
          title: "Separation from support and post-purchase traffic",
          body: "Quote-stage follow-up works only when it is not buried under shipping questions, warranty issues, or routine support. The workflow should protect the revenue queue from service noise instead of sending everything through one mixed inbox.",
        },
        {
          icon: BarChart3,
          title: "Visibility into which quote types actually recover",
          body: "Over time, the system should show whether fitment-heavy quotes, wholesale requests, custom-order opportunities, or higher-ticket product conversations are worth the most recovery attention so the team stops guessing.",
        },
      ],
    },
    {
      type: "table",
      title: "Quote follow-up vs. the other live auto-parts pages",
      subtitle:
        "These pages can coexist when the workflow stage stays disciplined:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "Customer inquiry automation",
          values: [
            "Mixed live inbound questions across fitment, product, quote, and support channels",
            "Classifies and routes new inbound conversations before they get buried in one shared queue",
          ],
        },
        {
          label: "Quote follow-up automation",
          values: [
            "Opportunities that already reached a pricing or quote stage but have not converted yet",
            "Keeps quote-stage buyers moving with reminder timing, context-aware follow-up, and sales handoff when intent returns",
          ],
        },
        {
          label: "Stale lead follow-up",
          values: [
            "Older inquiry-stage leads that already went quiet and now need reactivation",
            "Reopens dormant pre-sale opportunities from the backlog instead of handling fresh quote-stage momentum",
          ],
        },
        {
          label: "CRM automation vs manual follow-up",
          values: [
            "Owners deciding whether the broader auto-parts follow-up system should stay manual or be automated",
            "Answers the earlier buyer decision about whether to build the system at all, not just the quote-stage workflow inside it",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your brand?",
      subtitle:
        "Best fit when the store already gets quote-stage demand but too many buyers disappear between the pricing conversation and the order.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You send enough quotes, pricing replies, or custom-order next steps each month that manual follow-up is inconsistent",
            "Fitment or pricing questions often become real opportunities, but nobody owns the post-quote follow-up clearly",
            "The same inbox or CRM is mixing quote-stage demand with routine support noise",
            "One recovered higher-ticket order or wholesale conversation would justify a focused build quickly",
            "Your team can tell when the quote or pricing answer was actually sent",
            "You want a narrower quote-stage workflow before expanding into a larger CRM rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Your main problem is still first-response speed before the pricing conversation exists",
            "Quote volume is low enough that every opportunity already gets personal same-day follow-up",
            "Your product or catalog data is too inconsistent to define a real quote stage cleanly",
            "You are really dealing with old dead leads, not live quote-stage momentum",
            "You want automation to answer complex technical fitment or commercial pricing questions with no human review",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep quote follow-up useful",
      subtitle:
        "The system should improve response discipline without creating more inbox clutter or fake urgency.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate before the quote stage is real",
          body: "If one rep sends a quote by email, another gives rough pricing by DM, and a third handles everything by memory, the workflow has nothing stable to trigger from. Tighten the quote stage first, then automate it.",
        },
        {
          icon: FileText,
          title: "Keep the message tied to the original request",
          body: "A buyer should feel like the store remembers what they asked for. The follow-up should reference the original quote or pricing context instead of sounding like a generic broadcast sent to everyone in the CRM.",
        },
        {
          icon: Users,
          title: "Know when a human has to take over",
          body: "When the buyer asks for a revised quote, clarifies fitment, wants a wholesale exception, or is ready to move, the workflow should get the right human in quickly. Automation keeps the opportunity alive; it should not pretend to close every complex sale alone.",
        },
        {
          icon: Car,
          title: "Use urgency honestly",
          body: "The right urgency is practical: parts availability, the buyer still comparing options, a custom-order window, or the fact that a vehicle-specific decision goes stale when nobody follows up. Fake countdowns or spammy discount pressure usually hurt trust.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical auto-parts quote-follow-up workflow usually works",
      subtitle:
        "The strongest version is simple: trigger from the quote stage, keep the conversation moving while it is still warm, and route humans when intent returns.",
      blocks: [
        {
          heading: "The quote or pricing answer is marked sent",
          body: "That event becomes the workflow trigger. Whether the pricing lives in a CRM, inbox workflow, form system, or a more custom quote process, the key is having one reliable moment where the store knows the opportunity has reached a real quote stage.",
        },
        {
          heading: "The first follow-up arrives while the buyer still remembers the conversation",
          body: "A short, useful touch lands before the buyer has fully moved on. This is usually where the biggest lift comes from, because manual quote follow-up often happens too late or only if someone remembers.",
        },
        {
          heading: "Later touches handle predictable hesitation",
          body: "If there is still no response, the next messages can ask whether the buyer needs a fitment confirmation, an updated quote, a different product option, or a quick human review before ordering. Each touch should reduce decision friction instead of repeating the same empty check-in.",
        },
        {
          heading: "Replies route back to the right operator fast",
          body: "When the buyer re-engages, the workflow should fire the right internal alert and keep the original quote context attached so the human can pick up the conversation without reconstructing it from scratch.",
        },
        {
          heading: "The team finally sees where quote-stage opportunities stall",
          body: "Over time, the brand can see which quote types die fastest, which follow-up timing creates replies, and where pricing-stage leakage is really happening. That makes the workflow both a recovery system and a diagnostic layer for the sales process.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no published auto-parts quote-follow-up-only case study yet. The honest proof frame is direct WheelsFeels CRM proof plus the already-live auto-parts workflow cluster.",
      studies: [
        {
          industry: "Auto Parts E-Commerce",
          headline: "5,600+ contacts organized with automated follow-up and reply visibility",
          body: "The published WheelsFeels CRM case study is direct proof for the vertical and for the operating mechanics behind this page: quote-stage follow-up discipline, centralized records, segmented outreach, and Slack visibility when a real buyer replies.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Auto-parts workflow cluster",
          headline: "The live auto-parts pages already isolate the adjacent workflow layers",
          body: "The broader auto-parts guide plus the inquiry, stale-lead, and CRM-decision pages make this child page more credible, not less. They already define the surrounding workflow boundaries; this page narrows in on the post-quote gap inside that same operating system.",
          link: "/ai-automation-for-auto-parts-ecommerce",
        },
      ],
      links: [
        { label: "Auto parts CRM case study", href: "/case-studies/ecommerce-crm-automation" },
        { label: "AI automation for auto parts e-commerce", href: "/ai-automation-for-auto-parts-ecommerce" },
        { label: "Customer inquiry automation for auto parts e-commerce", href: "/customer-inquiry-automation-for-auto-parts-ecommerce" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from customer inquiry automation for auto parts e-commerce?",
      answer:
        "Customer inquiry automation is about handling new inbound questions when they first arrive. This page is narrower. It focuses on what happens after the pricing or quote conversation is already real and the buyer still needs disciplined follow-up to convert.",
    },
    {
      question: "How is this different from stale lead follow-up?",
      answer:
        "Stale-lead follow-up is about old opportunities that already went quiet and need reactivation. Quote follow-up is closer to the live buying moment. It keeps active quote-stage demand moving before it turns into a stale-lead problem at all.",
    },
    {
      question: "What does a focused auto-parts quote-follow-up build usually cost?",
      answer:
        "A focused quote-follow-up workflow often starts around $2K-$4K when the main job is stage detection, follow-up timing, context-aware messaging, CRM logging, and reply alerts. If the build also needs heavier CRM cleanup, multiple quote paths, or deeper integration logic, scope usually moves into the $4K-$8K range.",
    },
    {
      question: "Can this work if our store has different quote types?",
      answer:
        "Usually yes. In fact, that is one of the main reasons to automate it carefully. Fitment-heavy quotes, wholesale requests, custom products, and straightforward pricing replies can all share the same core workflow while still using different messaging, ownership rules, and escalation paths.",
    },
    {
      question: "What is the main ROI?",
      answer:
        "The main win is recovering quote-stage revenue that should have converted but died in silence. The secondary win is saving operator time that would otherwise be spent manually chasing pricing conversations with no visibility into which ones are still worth working.",
    },
  ],
  faqSubtitle:
    "Practical questions from auto-parts operators considering quote-stage follow-up automation",
  ctaHeading: "Want fewer auto-parts quotes dying after the pricing conversation?",
  ctaText:
    "Book a 30-minute call. We will look at how quote-stage opportunities move through your store today, where pricing and fitment conversations go cold, and whether a focused quote-follow-up workflow is the cleanest automation to build before anything broader.",
  ctaSubtext:
    "No inflated close-rate promises. Just a practical recommendation based on your quote volume, team ownership, and current sales process.",
  relatedLinks: [
    { label: "AI automation for auto parts e-commerce", href: "/ai-automation-for-auto-parts-ecommerce" },
    { label: "Customer inquiry automation for auto parts e-commerce", href: "/customer-inquiry-automation-for-auto-parts-ecommerce" },
    { label: "Stale lead follow-up for auto parts e-commerce", href: "/stale-lead-follow-up-for-auto-parts-ecommerce" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
