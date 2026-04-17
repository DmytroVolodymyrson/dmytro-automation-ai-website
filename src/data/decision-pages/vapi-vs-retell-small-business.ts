import {
  Scale,
  Phone,
  Mic,
  DollarSign,
  Clock,
  AlertTriangle,
  Zap,
  Workflow,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "vapi-vs-retell-small-business",
  metaTitle:
    "VAPI vs Retell for Small Business Voice AI — Honest Comparison | Dmytro AI",
  metaDescription:
    "Comparing VAPI and Retell for small business voice AI. Pricing, latency, CRM integration, customization, and which platform fits your use case.",
  badgeText: "Comparison",
  badgeIcon: Scale,
  h1: "VAPI vs Retell for Small Business Voice AI",
  heroIntro:
    "VAPI and Retell are the two platforms most small businesses consider when building an AI voice agent. Both let you create phone agents that answer calls, book appointments, and qualify leads. But they differ in pricing structure, developer experience, and how much control you get over the conversation flow. This guide cuts through the marketing and compares what matters.",
  heroSubtext:
    "Below: how each platform works, real cost comparisons at different call volumes, and which one fits your specific situation.",
  sections: [
    {
      type: "cards",
      title: "Two leading voice AI platforms",
      subtitle:
        "Both can power your AI phone agent. They approach the problem differently:",
      items: [
        {
          icon: Phone,
          title: "VAPI",
          body: "Developer-first voice AI platform with deep customization. You define conversation flows, connect your own LLM providers, and control every aspect of the call experience. Strong webhook system for n8n and backend integration. Per-minute pricing with separate costs for telephony, LLM, and transcription. Best when you need full control over the voice agent's behavior and backend logic.",
        },
        {
          icon: Mic,
          title: "Retell",
          body: "Streamlined voice AI with a focus on natural-sounding conversations and fast deployment. Clean dashboard for building and testing agents. Bundled pricing that includes LLM, telephony, and transcription in one rate. Built-in analytics and call monitoring. Best when you want a polished voice agent running quickly with less technical overhead.",
        },
        {
          icon: Zap,
          title: "Key differences at a glance",
          body: "VAPI gives you more control but requires more technical work to get right. Retell gives you a faster path to a working agent but with less flexibility on edge cases. VAPI's pricing is unbundled (you optimize each component separately). Retell's pricing is simpler (one per-minute rate). For most small businesses, the deciding factor is how custom your conversation flow needs to be.",
        },
      ],
    },
    {
      type: "table",
      title: "Side-by-side comparison",
      subtitle:
        "How VAPI and Retell compare on the factors that matter for small business voice AI:",
      headers: ["VAPI", "Retell"],
      rows: [
        {
          label: "Pricing model",
          values: [
            "Unbundled: telephony + LLM + transcription billed separately ($0.05–$0.15/min total)",
            "Bundled per-minute rate ($0.07–$0.20/min depending on plan and features)",
          ],
        },
        {
          label: "Latency",
          values: [
            "Depends on LLM provider choice — sub-second with fast models",
            "Optimized for low latency out of the box — consistently fast responses",
          ],
        },
        {
          label: "Customization",
          values: [
            "Deep — custom LLM providers, conversation flows, function calling, tool use",
            "Moderate — good defaults with configuration options, less low-level control",
          ],
        },
        {
          label: "CRM integration",
          values: [
            "Via webhooks and API — connects to n8n, Make, or custom backends",
            "Native integrations for common CRMs, plus API and webhook support",
          ],
        },
        {
          label: "Language support",
          values: [
            "Multilingual via LLM and TTS provider choice — you configure it",
            "Built-in multilingual support with pre-configured voice options",
          ],
        },
        {
          label: "Developer experience",
          values: [
            "Strong API docs, webhook-first architecture, SDKs for multiple languages",
            "Clean dashboard, guided setup, API available but less emphasis on code-first",
          ],
        },
        {
          label: "Call analytics",
          values: [
            "Basic call logs — build custom analytics via webhooks",
            "Built-in dashboard with call recordings, transcripts, and metrics",
          ],
        },
        {
          label: "Best for",
          values: [
            "Technical teams building custom voice AI with backend logic",
            "Businesses wanting a polished voice agent with minimal dev work",
          ],
        },
      ],
    },
    {
      type: "when-to-use",
      title: "When each platform wins",
      subtitle:
        "The right choice depends on your technical capacity and how much control you need:",
      options: [
        {
          icon: Phone,
          heading: "VAPI is the better choice when...",
          highlighted: true,
          items: [
            "You need the voice agent tightly integrated with backend workflows (n8n, custom APIs)",
            "Your conversation flow requires dynamic tool-calling, database lookups, or real-time decisions",
            "You want to choose your own LLM provider (OpenAI, Anthropic, or open-source models)",
            "You are building for multiple clients and need granular cost optimization per component",
            "Your use case requires custom function calling during the conversation",
          ],
        },
        {
          icon: Mic,
          heading: "Retell wins when...",
          highlighted: false,
          items: [
            "You want a working voice agent in days, not weeks",
            "Your team is non-technical and needs a visual builder with good defaults",
            "Simple call flows are enough — answer questions, book appointments, route calls",
            "You prefer bundled pricing over managing separate LLM and telephony costs",
            "Built-in call analytics and monitoring matter more than custom reporting",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "What matters beyond the platform",
      subtitle:
        "The platform is 30% of the outcome. These factors drive the other 70%:",
      items: [
        {
          icon: Workflow,
          title: "Integration with n8n or your backend is where the value lives",
          body: "A voice agent that answers calls but cannot update your CRM, trigger follow-up sequences, or route to the right person is a toy. VAPI's webhook architecture connects naturally to n8n workflows. Retell also supports webhooks but the integration often requires more middleware. Either way, plan the backend integration before choosing the platform.",
        },
        {
          icon: Zap,
          title: "Backend flexibility determines what your agent can actually do",
          body: "The difference between a demo voice agent and a production voice agent is backend logic. Can the agent check appointment availability in real time? Pull customer history from your CRM? Apply business rules to routing decisions? Both platforms can do this, but VAPI makes it more straightforward through native function calling. With Retell, you may need an intermediary layer.",
        },
        {
          icon: DollarSign,
          title: "Scaling costs hit differently at volume",
          body: "At 100 minutes per month, both platforms cost roughly $7-$15. At 1,000 minutes, VAPI's unbundled model lets you optimize costs by choosing cheaper LLM providers — total might be $50-$80. Retell's bundled rate keeps pricing simpler at $70-$150. At 5,000+ minutes, the cost gap widens. If call volume is a significant part of your business, model out costs at your projected scale.",
        },
        {
          icon: AlertTriangle,
          title: "Voice quality depends on more than the platform",
          body: "Both platforms support multiple TTS (text-to-speech) providers. Voice quality is more about which TTS model you choose and how you configure conversation pacing than about VAPI vs Retell. ElevenLabs and PlayHT sound great on both platforms. The real differentiator is conversational design — how well the agent handles interruptions, pauses, and turn-taking.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Voice AI in production",
      subtitle:
        "Real implementations that show what matters beyond platform choice:",
      studies: [
        {
          industry: "Restaurant",
          headline: "VAPI-powered agent handling 100% of after-hours calls",
          body: "A NYC restaurant runs a VAPI voice agent integrated with n8n for backend logic. The agent handles reservations, answers menu and hours questions, and routes urgent calls to staff. The VAPI + n8n combination was chosen specifically for its flexibility in handling multi-step conversation flows with real-time data lookups.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "E-commerce",
          headline: "Automated follow-up that replaced manual outreach",
          body: "Voice and messaging automation replaced manual follow-up for 5,600+ leads. The system handles initial outreach, qualification, and appointment booking without human involvement. The backend automation layer — not the voice platform — was the critical success factor.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "View all case studies", href: "/case-studies" },
        {
          label: "AI phone answering guide",
          href: "/ai-phone-answering-for-service-businesses",
        },
        {
          label: "AI voice agent for restaurants",
          href: "/ai-voice-agent-for-restaurants",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "Which platform has better voice quality?",
      answer:
        "Voice quality depends more on the TTS provider you choose than the platform itself. Both VAPI and Retell support ElevenLabs, PlayHT, and other leading TTS engines. The real quality difference is in conversation design: how the agent handles interruptions, turn-taking, and natural pauses. A well-designed conversation on either platform sounds better than a poorly designed one on the other.",
    },
    {
      question: "How do costs compare at different call volumes?",
      answer:
        "At 100 minutes per month, both cost $7-$15 and the difference is negligible. At 1,000 minutes, VAPI typically runs $50-$80 (depending on LLM choice) vs Retell at $70-$150. At 5,000+ minutes, VAPI's unbundled pricing gives you more room to optimize by choosing cost-effective LLM and TTS providers. If volume is low, pick based on features. If volume is high, model out costs with your specific providers.",
    },
    {
      question: "Can I switch between VAPI and Retell after launching?",
      answer:
        "You can, but it is not trivial. Your conversation prompts and basic logic transfer conceptually, but the implementation details differ. Webhook integrations, function calls, and backend connections need rebuilding. Phone numbers can usually be ported. Plan for 1-2 weeks to migrate a production agent. The harder part is re-testing edge cases and conversation flows on the new platform.",
    },
    {
      question: "Which integrates better with CRM systems?",
      answer:
        "Retell has more native CRM integrations out of the box. VAPI integrates with CRMs through webhooks and n8n workflows, which gives you more flexibility but requires more setup. If you already use n8n for automation, VAPI's webhook-first approach connects naturally. If you want a CRM integration working in an afternoon without code, Retell's native connectors are faster to set up.",
    },
    {
      question: "Which platform is easier to customize?",
      answer:
        "Retell is easier to get started with — the dashboard lets non-technical users build basic agents quickly. VAPI is more customizable once you dig in — you control LLM selection, conversation state, function calling, and backend logic at a granular level. For simple use cases (answering questions, booking appointments), Retell's approach is more efficient. For complex flows (dynamic routing, real-time lookups, multi-step logic), VAPI gives you the tools to build exactly what you need.",
    },
  ],
  faqSubtitle:
    "Practical answers about choosing between VAPI and Retell",
  ctaHeading: "Need help choosing and building your voice AI agent?",
  ctaText:
    "Book a 30-minute call. We will assess your call volume, conversation complexity, and integration needs, then recommend the platform and architecture that fits your business.",
  ctaSubtext:
    "We have built production voice agents on both platforms. No bias — just what works for your situation.",
  relatedLinks: [
    {
      label: "AI phone answering for service businesses",
      href: "/ai-phone-answering-for-service-businesses",
    },
    {
      label: "AI voice agent for restaurants",
      href: "/ai-voice-agent-for-restaurants",
    },
    { label: "AI appointment setter", href: "/ai-appointment-setter" },
    {
      label: "Chatbot vs voice agent comparison",
      href: "/ai-chatbot-vs-ai-voice-agent-for-lead-qualification",
    },
    {
      label: "n8n vs Zapier comparison",
      href: "/n8n-vs-zapier-small-business",
    },
  ],
};

export default data;
