import {
  AlertTriangle,
  CheckCircle2,
  ClipboardX,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Wrench,
  XCircle,
  Clock,
  DollarSign,
  Workflow,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "ai-voice-agent-setup-mistakes-small-business",
  metaTitle:
    "AI Voice Agent Setup Mistakes for Small Business — What Usually Goes Wrong Before Launch | Dmytro AI",
  metaDescription:
    "Common AI voice-agent setup mistakes that create bad caller experience, weak transfer logic, messy CRM handoff, and expensive rework later. Practical guide for small businesses before launch.",
  badgeText: "Voice Setup Risks",
  badgeIcon: ClipboardX,
  h1: "AI Voice Agent Setup Mistakes for Small Business",
  heroIntro:
    "Most AI voice-agent failures do not start after months of scale. They start before launch. A small business goes live with a prompt that sounds polished but does not know the real call objective, transfer boundaries, booking rules, fallback behavior, or CRM handoff — then the team loses trust after a few bad calls. If you are setting up a voice agent now, the smartest move is to catch the expensive mistakes before they become a rescue project.",
  heroSubtext:
    "Below: the most common voice-agent setup mistakes, which ones usually create the biggest downstream mess, when DIY is still fine, and how this page stays separate from the broader setup-help, cost, ROI, DIY, and manual-callback pages already live on the site.",
  sections: [
    {
      type: "cards",
      title: "The setup mistakes that usually create the biggest mess later",
      subtitle:
        "These are the early voice-agent decisions that quietly turn a first launch into daily cleanup work:",
      items: [
        {
          icon: Phone,
          title: "Designing for a demo instead of a real call objective",
          body: "A voice agent can sound impressive and still fail operationally. If the workflow is not built around a specific job — qualify, route, book, capture callback details, or hand off — the system talks a lot without actually moving the business outcome forward.",
        },
        {
          icon: Route,
          title: "Leaving transfer and fallback rules vague",
          body: "One of the most common setup mistakes is not defining when the agent should transfer live, when it should create a priority callback, when it should stop, and what should never stay with AI. Without those boundaries, edge cases become caller-frustration moments fast.",
        },
        {
          icon: Workflow,
          title: "Treating CRM handoff as an afterthought",
          body: "If the call summary, disposition, transcript, tags, and next-step ownership do not land cleanly after the conversation, the team still works blind. A voice workflow that ends outside the CRM is usually where trust starts breaking.",
        },
        {
          icon: ShieldCheck,
          title: "Skipping launch controls and ownership rules",
          body: "Phone numbers, telephony settings, escalation contacts, booking rules, prompt versions, and update ownership should be clear before launch. If nobody owns the live system, even a decent first build decays quickly after the first change request.",
        },
      ],
    },
    {
      type: "table",
      title: "What each setup mistake usually causes downstream",
      subtitle:
        "The early mistake matters because it creates a specific operational problem later:",
      headers: ["Setup mistake", "What it usually breaks", "Why it gets expensive"],
      rows: [
        {
          label: "No hard call objective",
          values: [
            "The agent talks but does not consistently qualify, route, or book the right next step",
            "You pay for usage and setup while still needing staff to rescue confused calls",
          ],
        },
        {
          label: "Weak transfer and fallback logic",
          values: [
            "Urgent callers, bad-fit leads, and edge cases stay with AI too long or go nowhere",
            "A few bad handoff moments are enough for the team to stop trusting the workflow",
          ],
        },
        {
          label: "Loose CRM and calendar mapping",
          values: [
            "Calls get logged with missing context, wrong tags, weak ownership, or broken booking data",
            "The business still needs manual cleanup after every call instead of real operational leverage",
          ],
        },
        {
          label: "No testing against real-world calls",
          values: [
            "Interruptions, noise, reschedules, pricing questions, and unexpected caller behavior break the flow",
            "Owner time shifts from growth to reactive patching right after launch",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is useful — and when it is not",
      subtitle:
        "This page is for owners trying to avoid obvious voice-agent rollout mistakes before they become expensive:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You are setting up a voice agent now or cleaning up a very recent launch",
            "The workflow touches real inbound calls where slow response or bad handoff costs revenue",
            "You want to catch the mistakes that usually create caller confusion, missed transfers, or messy CRM follow-through",
            "You already think voice may be the right channel, but you do not want a fragile first rollout",
            "You would rather launch one narrow trustworthy phone workflow than a bigger flashy system nobody trusts",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "You are still deciding whether a voice agent is even the right channel for your business",
            "Your real question is setup help, ROI, cost, or DIY vs. hiring help rather than launch mistakes specifically",
            "Almost every call requires deep human expertise from the first minute",
            "You only need a simple missed-call fallback and do not need live conversational handling yet",
            "Your team has not agreed on qualification rules, transfer ownership, or booking windows at all",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "How to avoid turning setup into future cleanup",
      subtitle:
        "Most small businesses do not need a more impressive voice-agent setup. They need a more disciplined one:",
      items: [
        {
          icon: Wrench,
          title: "Start with one narrow phone job",
          body: "Pick one specific workflow: qualify inbound leads, route after-hours callers, capture callbacks, or book one clear appointment type. A narrow first launch is easier to trust, test, and improve than a broad phone workflow trying to do everything at once.",
        },
        {
          icon: AlertTriangle,
          title: "Write down what the agent should never improvise",
          body: "Pricing promises, complaint handling, complex reschedules, detailed diagnosis, edge-case policy decisions, and anything else that should go straight to a human need hard boundaries before launch. That protects caller trust and team adoption.",
        },
        {
          icon: Clock,
          title: "Test real interruptions and ugly-call scenarios",
          body: "The important test is not whether the scripted happy path works. It is what happens when someone interrupts, asks the wrong question, wants a person immediately, has background noise, or reaches the wrong number. That is where launch trust is won or lost.",
        },
        {
          icon: DollarSign,
          title: "Keep the first rollout sized to recovered demand",
          body: "If one or two extra qualified calls, bookings, or saved after-hours opportunities per week would justify the project, the scope is probably sensible. If the payoff still feels vague, make the workflow smaller before making it fancier.",
        },
      ],
    },
    {
      type: "prose",
      title: "The five AI voice-agent setup mistakes owners regret most",
      subtitle:
        "These are the patterns that show up when a new voice workflow already feels fragile:",
      blocks: [
        {
          heading: "Mistake 1: building the prompt before defining the workflow",
          body: "A lot of weak launches happen because the team spends time polishing tone and scripting greetings before deciding the actual business outcome. The voice can sound professional while the workflow still has no real qualification logic, routing rules, or stop conditions.",
        },
        {
          heading: "Mistake 2: optimizing for realism instead of operational clarity",
          body: "Owners often chase the most human-sounding voice instead of the clearest handoff path. But a realistic voice does not save a bad system. If the agent cannot determine fit, book correctly, or transfer safely, sounding natural only hides the problem for a little longer.",
        },
        {
          heading: "Mistake 3: assuming edge cases are rare enough to ignore",
          body: "Interruptions, price shoppers, wrong-number callers, urgent cases, and reschedule requests are not edge cases in practice. They are normal. If they are not handled intentionally before launch, the first bad calls will train the team to stop relying on the system.",
        },
        {
          heading: "Mistake 4: launching without a clean handoff behind the call",
          body: "A captured call only creates value if the next person sees what happened and what should happen next. If the CRM record is incomplete, tags are wrong, summaries are weak, or the callback owner is unclear, the business keeps leaking work after the AI step ends.",
        },
        {
          heading: "Mistake 5: no one owns prompt and routing updates after go-live",
          body: "Voice agents are not a set-and-forget asset. Hours change, routing changes, qualification rules change, and integration points drift. Without clear ownership, the system becomes stale quietly until someone finally decides the AI phone coverage just does not work.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no fake standalone voice-agent setup-mistakes case study here. The support comes from the live voice-agent cluster plus adjacent phone, qualification, and CRM proof already published on the site:",
      studies: [
        {
          industry: "Existing AI voice-agent setup cluster",
          headline: "The live setup, setup-vs-DIY, cost, ROI, and manual-callback pages already define the surrounding buyer decisions clearly",
          body: "That cluster makes the remaining exact tracked query viable: what are common AI voice agent setup mistakes before launch? This page isolates the pre-launch mistake layer instead of rehashing setup-help, pricing, ROI, or the broader channel-choice decision.",
          link: "/ai-voice-agent-setup-for-lead-qualification",
        },
        {
          industry: "Phone workflow proof",
          headline: "Paris Cafe proves the value of mapping phone handling and handoff before a workflow goes live",
          body: "Different exact use case, same operational lesson. The published restaurant case study works because the call flow, fallback behavior, and downstream handoff were defined clearly enough to protect after-hours demand instead of sending callers into a dead end.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "CRM follow-through proof",
          headline: "The WheelsFeels CRM case study shows why downstream state truth matters after a conversation is captured",
          body: "That project is adjacent proof for the back half of the voice workflow: once a lead is captured, the value depends on clean logging, ownership, alerts, and follow-up instead of leaving conversations stranded in disconnected tools.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI voice agent setup help", href: "/ai-voice-agent-setup-for-lead-qualification" },
        { label: "AI voice agent setup vs. DIY", href: "/ai-voice-agent-setup-vs-diy-small-business" },
        { label: "AI voice agent ROI guide", href: "/ai-voice-agent-roi-for-lead-follow-up" },
        { label: "Book a strategy call", href: "/#booking" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What are the most common AI voice-agent setup mistakes before launch?",
      answer:
        "The biggest ones are launching without a clear call objective, leaving transfer and fallback rules vague, treating CRM and calendar handoff like an afterthought, skipping ugly real-world call testing, and failing to assign ownership for live updates after the workflow goes live.",
    },
    {
      question: "How do I avoid a messy AI voice-agent launch?",
      answer:
        "Start with one narrow call workflow, define what the agent should and should not handle, map transfer and fallback rules before polishing the prompt, test real interruptions and edge cases, and make sure call outcomes land cleanly in the systems your team actually uses.",
    },
    {
      question: "How is this different from the voice-agent setup-help page?",
      answer:
        "The setup-help page explains what a solid implementation should include and when expert help is worth paying for. This page stays narrower: the specific pre-launch mistakes that usually make a first voice rollout fragile and expensive later.",
    },
    {
      question: "When do setup mistakes turn into a cleanup problem?",
      answer:
        "Usually when the team stops trusting the workflow after a few bad calls, transfer behavior becomes inconsistent, call outcomes land in the CRM with weak context, or no one is confident about which prompt and routing changes are safe to make. At that point the system has crossed from launch risk into recovery work.",
    },
    {
      question: "Should I fix voice-agent setup mistakes myself or hire help before launch?",
      answer:
        "DIY can be fine when the workflow is narrow, call stakes are low, and you are comfortable mapping transfer boundaries and handoff logic yourself. If the rollout touches revenue-critical inbound calls or after-hours coverage, expert help usually costs less than a weak first launch that damages team trust.",
    },
  ],
  faqSubtitle:
    "Practical questions from owners trying to avoid the setup mistakes that quietly turn a promising voice-agent rollout into a fragile phone workflow nobody trusts",
  ctaHeading: "Want a cleaner voice-agent launch before small setup mistakes get expensive?",
  ctaText:
    "Book a 30-minute call. We will look at your planned call flow, identify the setup mistakes most likely to create weak qualification, bad transfer behavior, or messy handoff, and help you scope the narrowest trustworthy rollout first.",
  ctaSubtext:
    "Useful if you are still in setup mode and want to avoid paying for rescue work a month from now.",
  relatedLinks: [
    { label: "AI voice agent setup help", href: "/ai-voice-agent-setup-for-lead-qualification" },
    { label: "AI voice agent cost for small business", href: "/ai-voice-agent-cost-small-business" },
    { label: "AI voice agent vs. manual callback", href: "/ai-voice-agent-vs-manual-callback-for-service-businesses" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
