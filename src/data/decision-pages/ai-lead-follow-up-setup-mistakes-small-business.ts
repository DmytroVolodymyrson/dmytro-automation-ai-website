import {
  AlertTriangle,
  CheckCircle2,
  ClipboardX,
  Clock,
  MessageSquare,
  Route,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  XCircle,
  Database,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-lead-follow-up-setup-mistakes-small-business",
  metaTitle:
    "AI Lead Follow-Up Setup Mistakes for Small Business — What Usually Goes Wrong Before Launch | Dmytro AI",
  metaDescription:
    "Common AI lead-follow-up setup mistakes that create duplicate outreach, bad CRM routing, weak stop rules, and expensive cleanup later. Practical guide for small businesses before launch.",
  badgeText: "Setup Mistakes",
  badgeIcon: ClipboardX,
  h1: "AI Lead Follow-Up Setup Mistakes for Small Business",
  heroIntro:
    "Most lead-follow-up automations do not fail because the first message sounded bad. They fail because the setup underneath that message was weak. A small business goes live without clear stop conditions, without channel-specific timing, without duplicate protection, without CRM ownership rules, and without testing what happens when a lead replies after hours or books mid-sequence. Then the system starts sending awkward extra messages, hot leads sit in the wrong pipeline stage, and the team stops trusting the automation. If you are setting up lead follow-up now, the highest-leverage move is catching the expensive mistakes before they become rescue work.",
  heroSubtext:
    "Below: the most common lead-follow-up setup mistakes, which ones usually create the biggest downstream mess, when DIY is still fine, and how this page stays separate from the broader setup-help, cost, ROI, and DIY pages already live on the site.",
  sections: [
    {
      type: "cards",
      title: "The setup mistakes that usually create the biggest cleanup later",
      subtitle:
        "These are the pre-launch lead-follow-up decisions that quietly turn a promising workflow into an unreliable one:",
      items: [
        {
          icon: MessageSquare,
          title: "Treating every lead source like the same conversation",
          body: "A web form, a missed call, a Google Business message, and a referral inquiry do not behave the same way. One of the most common setup mistakes is sending the same first response and same follow-up timing to every source instead of mapping urgency and buyer intent by channel.",
        },
        {
          icon: Route,
          title: "Leaving stop conditions and owner handoff vague",
          body: "If nobody defined what should happen when a lead replies, books, calls back, asks for a quote, or opts out, the sequence keeps running after the conversation already moved. That is how small businesses end up sending duplicate messages to people who already booked or already said no.",
        },
        {
          icon: Database,
          title: "Connecting messages before CRM state is trustworthy",
          body: "It is easy to launch the outreach layer before contact creation, owner assignment, duplicate handling, and pipeline routing are stable. Then the business sees messages going out but cannot trust the contact records or follow-up reporting behind them.",
        },
        {
          icon: ShieldCheck,
          title: "Skipping ugly real-world testing before launch",
          body: "The happy path rarely breaks. The real problems show up when a lead replies at 10 PM, asks an off-script question, fills the form twice, or books outside the normal calendar path. If those edge cases are not tested, the workflow loses trust fast.",
        },
      ],
    },
    {
      type: "table",
      title: "What each setup mistake usually breaks downstream",
      subtitle:
        "The early mistake matters because it creates a specific operational problem later:",
      headers: ["Setup mistake", "What it usually breaks", "Why it gets expensive"],
      rows: [
        {
          label: "One-size-fits-all lead-source logic",
          values: [
            "Leads from high-intent channels get under-handled while lower-intent channels get over-sequenced",
            "The business wastes owner attention on the wrong inquiries while stronger opportunities wait too long",
          ],
        },
        {
          label: "Weak stop rules and reply handling",
          values: [
            "Booked leads, active replies, and no-fit leads keep receiving queued automation",
            "A few obviously wrong messages are enough to make the team stop trusting the workflow",
          ],
        },
        {
          label: "Loose CRM mapping and duplicate handling",
          values: [
            "Contacts land with missing owners, wrong stages, or fragmented history across duplicate records",
            "The team still has to clean data manually, which cancels much of the automation value",
          ],
        },
        {
          label: "No testing for after-hours and exception paths",
          values: [
            "Urgent leads, calendar exceptions, and odd replies fall into dead ends or get ignored too long",
            "Revenue leaks continue even though the business thinks follow-up is now automated",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is useful — and when it is not",
      subtitle:
        "This page is for owners trying to avoid common lead-follow-up rollout mistakes before they create rework:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are setting up lead follow-up now or cleaning up a workflow that just launched",
            "The system touches real inbound demand where slow response or duplicate outreach costs revenue",
            "You want to catch the mistakes that usually create bad timing, weak routing, or messy CRM state",
            "You already think automation belongs here, but you do not want a fragile first rollout",
            "You would rather launch one narrow trustworthy workflow than a broader system nobody trusts",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether lead follow-up is the first workflow to automate at all",
            "Your main question is setup scope, cost, ROI, or DIY-vs-hiring help rather than mistakes specifically",
            "Lead volume is so low that a fast manual callback is still covering the real gap",
            "You do not yet have a clear pipeline, owner, or booking path for leads once they reply",
            "The bigger operational problem is after booking, not before the lead books",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to avoid turning setup into future cleanup",
      subtitle:
        "Most small businesses do not need a fancier lead-follow-up build. They need a more disciplined one:",
      items: [
        {
          icon: Wrench,
          title: "Start with one narrow response job",
          body: "Pick one exact workflow first: instant web-form response, missed-call lead recovery, quote-request follow-up, or short nurture until booking. A narrower first launch is easier to test and easier for the team to trust than a giant sequence trying to do everything.",
        },
        {
          icon: Clock,
          title: "Write the stop rules before polishing the copy",
          body: "Most expensive mistakes come from sequence logic, not message wording. Decide exactly what should happen after a reply, a booking, a callback request, a no-fit answer, and an opt-out before spending too much time rewriting message tone.",
        },
        {
          icon: AlertTriangle,
          title: "Test ugly edge cases on purpose",
          body: "Submit duplicate forms. Reply outside business hours. Book mid-sequence. Trigger owner reassignment. Ask a weird question. The point is to catch the handoff and stop-rule problems before a real lead does.",
        },
        {
          icon: Sparkles,
          title: "Keep the first rollout sized to a clear leak",
          body: "If recovering a handful of lost leads each month or preventing one recurring routing mistake would justify the project, the scope is probably sensible. If the payoff still feels vague, the build is probably too broad.",
        },
      ],
    },
    {
      type: "prose",
      title: "The five lead-follow-up setup mistakes owners regret most",
      subtitle:
        "These are the patterns that show up when a new workflow already feels unreliable:",
      blocks: [
        {
          heading: "Mistake 1: launching the messages before defining the workflow",
          body: "A lot of weak launches happen because the business writes the perfect first SMS or email before deciding who owns the lead after a reply, what counts as a hot lead, and when automation should stop. The messages can sound polished while the workflow logic is still missing.",
        },
        {
          heading: "Mistake 2: assuming one sequence can serve every channel equally well",
          body: "A missed-call lead, a web-form lead, and a quote-request lead carry different intent. When they all get the same timing and same escalation path, some leads feel ignored while others get over-contacted.",
        },
        {
          heading: "Mistake 3: treating CRM state as a reporting problem instead of a live workflow dependency",
          body: "If stage movement, assignment, tags, and duplicate logic are wrong, the team does not know who should act next. The result is not only bad reporting — it is bad real-time follow-up ownership.",
        },
        {
          heading: "Mistake 4: not defining what should happen when a lead replies in an unexpected way",
          body: "A workflow that only knows how to wait for a booking link click is too narrow. Real leads ask side questions, request callbacks, say they are comparing vendors, or reappear after going cold. Without a plan for those responses, automation starts looking careless instead of helpful.",
        },
        {
          heading: "Mistake 5: no one owns changes after go-live",
          body: "Lead routing changes. Calendar rules change. Service offers change. If nobody owns the live workflow after launch, a decent first build quietly drifts into a messy one. That is when the team decides automation is the problem, even though the real issue was lack of ongoing ownership.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone lead-follow-up setup-mistakes case study here. The support comes from the live lead-follow-up cluster plus adjacent CRM and first-response proof already published on the site:",
      studies: [
        {
          industry: "Existing lead-follow-up setup cluster",
          headline: "The live setup, setup-vs-DIY, cost, and ROI pages already define the surrounding buyer decisions clearly",
          body: "That cluster makes the remaining exact tracked query viable: what are the most common setup mistakes in lead-follow-up automation? This page isolates the pre-launch mistake layer instead of rehashing setup-help, pricing, ROI, or the broader category page.",
          link: "/ai-lead-follow-up-setup-for-service-businesses",
        },
        {
          industry: "CRM follow-through proof",
          headline: "The WheelsFeels CRM case study shows why routing and ownership mistakes get expensive fast",
          body: "The published CRM automation case study is adjacent proof for the back half of this workflow: once follow-up starts, the value depends on clean handoff, trustworthy pipeline state, and clear next-step ownership instead of disconnected messages.",
          link: "/case-studies/ecommerce-crm-automation",
        },
        {
          industry: "Narrower first-response proof",
          headline: "The contact-form and instant-response pages show why a smaller first launch can be smarter than a broad fragile build",
          body: "For some businesses, the right move is not full multi-channel follow-up on day one. It is solving the highest-value first-response leak first, then expanding once the workflow state and handoff logic are trustworthy.",
          link: "/contact-form-lead-follow-up-automation",
        },
      ],
      links: [
        { label: "AI lead follow-up setup help", href: "/ai-lead-follow-up-setup-for-service-businesses" },
        { label: "AI lead follow-up launch checklist", href: "/ai-lead-follow-up-launch-checklist-small-business" },
        { label: "AI lead follow-up setup vs. DIY", href: "/ai-lead-follow-up-setup-vs-diy-small-business" },
        { label: "AI lead follow-up cost for small business", href: "/ai-lead-follow-up-cost-small-business" },
        { label: "AI lead follow-up ROI for small business", href: "/ai-lead-follow-up-roi-small-business" },
        { label: "Contact form lead follow-up automation", href: "/contact-form-lead-follow-up-automation" },
        { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What are the most common setup mistakes in lead-follow-up automation?",
      answer:
        "The biggest ones are treating every lead source the same, leaving stop conditions vague, launching messages before CRM routing and duplicate handling are trustworthy, skipping ugly real-world testing, and failing to assign ownership for updates after go-live.",
    },
    {
      question: "How do I avoid a messy lead-follow-up launch?",
      answer:
        "Start with one narrow workflow, define stop rules before polishing the copy, map lead-source logic by channel, make sure CRM ownership is trustworthy, and test ugly real-world cases like duplicate submissions, after-hours replies, and mid-sequence bookings before launch.",
    },
    {
      question: "How is this different from the lead-follow-up setup-help page?",
      answer:
        "The setup-help page explains what a solid implementation should include and when expert help is worth paying for. This page stays narrower: the specific pre-launch mistakes that usually make a first lead-follow-up rollout fragile and expensive later.",
    },
    {
      question: "When do setup mistakes turn into a cleanup problem?",
      answer:
        "Usually when the business starts sending duplicate outreach, hot leads reach the wrong owner, CRM records become hard to trust, or nobody is confident the workflow will stop when a lead already booked. At that point the issue is no longer just setup quality — it is operational cleanup.",
    },
    {
      question: "Should I fix lead-follow-up setup mistakes myself or hire help before launch?",
      answer:
        "DIY can be fine when the workflow is narrow, channel count is low, and you are comfortable testing routing and CRM logic yourself. If the workflow touches multiple lead sources, multiple owners, or revenue-critical speed-to-lead, expert help usually costs less than a weak first launch that creates messy cleanup later.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners trying to avoid the setup mistakes that quietly turn a promising lead-follow-up workflow into an unreliable one",
  ctaHeading: "Want a cleaner lead-follow-up launch before small setup mistakes get expensive?",
  ctaText:
    "Book a 30-minute call. We will look at your current lead sources, follow-up logic, CRM routing, and ownership rules, identify the setup mistakes most likely to create lost leads or duplicate outreach, and help you scope the narrowest trustworthy rollout first.",
  ctaSubtext:
    "Useful if you are still in setup mode and want to avoid paying for rescue work a month from now.",
  relatedLinks: [
    { label: "AI lead follow-up setup help", href: "/ai-lead-follow-up-setup-for-service-businesses" },
    { label: "AI lead follow-up launch checklist", href: "/ai-lead-follow-up-launch-checklist-small-business" },
    { label: "AI lead follow-up setup vs. DIY", href: "/ai-lead-follow-up-setup-vs-diy-small-business" },
    { label: "AI lead follow-up cost for small business", href: "/ai-lead-follow-up-cost-small-business" },
    { label: "AI lead follow-up ROI for small business", href: "/ai-lead-follow-up-roi-small-business" },
    { label: "Contact form lead follow-up automation", href: "/contact-form-lead-follow-up-automation" },
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "Guides hub", href: "/guides" },
  ],
};

export default data;
