import {
  FileText,
  Clock,
  MessageSquare,
  Mail,
  Bot,
  Target,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Users,
  BarChart3,
  Workflow,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "contact-form-lead-follow-up-automation",
  metaTitle:
    "Contact Form Lead Follow-Up Automation — Why Form Leads Go Cold and How to Fix It | Dmytro AI",
  metaDescription:
    "Why businesses lose contact-form leads and how to fix it with instant response, qualification, routing, and structured follow-up automation. Practical guide for service businesses.",
  badgeText: "Form Lead Recovery",
  badgeIcon: FileText,
  h1: "Contact Form Lead Follow-Up Automation",
  heroIntro:
    "If leads fill out your contact form but never book, the problem usually is not the form itself. It is what happens after the form fires. Slow first response, generic auto-replies, no clear owner, weak qualification, and no follow-up sequence are the reasons form leads go cold. A working contact-form follow-up system fixes that by answering immediately, capturing enough context to route the lead properly, and keeping the conversation moving until a human takes over or the lead clearly drops out.",
  heroSubtext:
    "Below: why contact-form leads stall, what a reliable follow-up workflow should do, when this page is the right fit versus a broader lead-response project, and what mistakes usually waste form traffic.",
  sections: [
    {
      type: "table",
      title: "Why contact-form leads go cold",
      subtitle:
        "Most businesses do have a form. The leak happens in the follow-up layer right after submission:",
      headers: ["What usually happens", "Why it kills conversion"],
      rows: [
        {
          label: "Reply comes hours later",
          values: [
            "The form notification sits in an inbox until someone notices it",
            "The prospect keeps shopping and talks to a faster competitor while intent is still high",
          ],
        },
        {
          label: "Generic autoresponder only",
          values: [
            "The lead gets a vague 'thanks, we will be in touch' email with no next step",
            "There is no momentum, no qualification, and no reason for the lead to respond back",
          ],
        },
        {
          label: "No routing or ownership",
          values: [
            "Everyone assumes someone else will call the lead",
            "Hot form submissions die because there is no single person accountable for the next action",
          ],
        },
        {
          label: "No follow-up after the first touch",
          values: [
            "One email goes out and then nothing if the lead does not reply immediately",
            "A large share of good-fit leads are lost simply because nobody followed up again",
          ],
        },
        {
          label: "Form data is too thin or messy",
          values: [
            "The team has to manually figure out what service the lead wanted or whether it is urgent",
            "Slow clarification adds friction and makes every response feel later than it already is",
          ],
        },
      ],
    },
    {
      type: "cards",
      title: "What a working contact-form follow-up system should do",
      subtitle:
        "The fix is not just an email notification. A real workflow covers response, qualification, routing, and persistence:",
      items: [
        {
          icon: Clock,
          title: "Respond in under 60 seconds",
          body: "As soon as the form is submitted, the lead should get an immediate acknowledgment by the right channel — often email plus SMS if phone number is provided. Speed matters because form leads compare providers in parallel.",
        },
        {
          icon: MessageSquare,
          title: "Ask one useful qualifying question back",
          body: "Instead of sending a dead-end thank-you, ask for the next piece of information that helps route the lead: service type, urgency, location, timeline, or preferred booking window. That turns the form into the start of a conversation.",
        },
        {
          icon: Workflow,
          title: "Create ownership immediately",
          body: "Every form lead should be assigned to a person, pipeline stage, or queue with an internal alert. If ownership is ambiguous, speed-to-lead falls apart even when the automation technically worked.",
        },
        {
          icon: Bot,
          title: "Run a short follow-up sequence if the lead stays silent",
          body: "Most form submissions do not convert on the first reply. A lightweight sequence over the next few days protects the lead without spamming them. The sequence should stop the second a real reply arrives.",
        },
        {
          icon: Mail,
          title: "Log everything in the CRM with context",
          body: "The inquiry details, channel, timing, and replies should all land in the CRM so the human follow-up is not starting blind. Clean context is what makes the handoff feel professional instead of disjointed.",
        },
        {
          icon: Target,
          title: "Differentiate hot leads from low-fit noise",
          body: "Not every form lead deserves the same treatment. Good workflows use rules or AI classification to separate urgent, high-value inquiries from low-fit or informational messages so the team spends time in the right place.",
        },
      ],
    },
    {
      type: "prose",
      title: "How to fix contact-form drop-off without turning your site into robotic spam",
      subtitle:
        "The goal is to move the lead forward, not to drown them in automation:",
      blocks: [
        {
          heading: "Use the form to start the right next step",
          body: "If the lead asked for a quote, the reply should move toward quote qualification. If they asked about availability, the reply should move toward scheduling. The biggest mistake is treating every form submission like the same generic inquiry.",
        },
        {
          heading: "Keep the first response short and useful",
          body: "The best first response is usually one or two sentences plus one clear next step. Long automated emails packed with company background do not help. Fast acknowledgment, relevant context, and one question or booking path does.",
        },
        {
          heading: "Design the human handoff before launch",
          body: "Automation is only the front half. Decide who gets alerted, how fast they are expected to act, when the sequence stops, and what happens if the owner does not respond. If the handoff is vague, the form will keep leaking even with better automation.",
        },
      ],
    },
    {
      type: "evaluation",
      title: "When this page is the right fit — and when a broader lead-response project is better",
      subtitle:
        "Use this page when the web form is the leak. Use a broader page when the whole inbound system is slow:",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit for this page",
          variant: "green",
          items: [
            "A meaningful share of inbound leads comes through your website contact form",
            "You already suspect the problem is slow or weak follow-up after the form submit",
            "You want a tighter form-specific workflow before rebuilding all channels at once",
            "Your team needs cleaner qualification and routing from form submissions",
            "You are spending on SEO, ads, or referrals that drive traffic to the website form",
          ],
        },
        {
          icon: XCircle,
          heading: "Broader project is better",
          variant: "neutral",
          items: [
            "Your main leak is missed calls, not website forms",
            "The business needs instant response across forms, calls, chat, and social all together",
            "Lead volume is so low that a manual same-day callback is still enough",
            "You do not have clear offer or service routing yet, so the form questions themselves are still messy",
            "The real bottleneck is sales follow-up after a discovery call, not initial form response",
          ],
        },
      ],
    },
    {
      type: "case-studies",
      title: "Proof and adjacent proof",
      subtitle:
        "This page is grounded in published speed-to-lead proof and nearby workflow pages that cover the same economics from different angles:",
      studies: [
        {
          industry: "Restaurant / web lead response",
          headline: "Paris Café shows what faster web inquiry response changes",
          body: "The Paris Café case study documents web lead response time dropping from hours to under 60 seconds once the voice and workflow layer was set up. Different vertical, same contact-form math: respond while intent is still alive or lose the conversation.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Lead-gen pipeline / immediate outreach",
          headline: "Instagram lead generation proves the speed-to-lead discipline",
          body: "The Instagram pipeline case study is adjacent proof that fast, structured follow-up matters at scale. The channel is different, but the principle is identical: the lead should hear from you immediately with the right next step instead of falling into a manual queue.",
          link: "/case-studies/instagram-lead-generation",
        },
        {
          industry: "Workflow cluster / form-specific fit",
          headline: "The existing instant-response and lead-follow-up pages frame the broader system",
          body: "Those pages cover multi-channel speed-to-lead and sequence design. This page stays narrower by focusing specifically on the website contact-form leak: what goes wrong after submit, what to automate first, and how to hand the lead to a human cleanly.",
          link: "/instant-lead-response-automation",
        },
      ],
      links: [
        { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
        { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
        { label: "Lead follow-up automation examples", href: "/lead-follow-up-automation-examples" },
        { label: "Paris Café case study", href: "/case-studies/paris-cafe-voice-agent" },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that keep website-form leads from converting",
      subtitle:
        "These are the patterns that make owners think 'web leads are low quality' when the real problem is the workflow:",
      items: [
        {
          icon: AlertTriangle,
          title: "Treating the form like an inbox, not a trigger",
          body: "A form should start a workflow immediately. If it only sends an email notification, you are relying on human attention and hoping someone notices fast enough.",
        },
        {
          icon: Users,
          title: "No single owner for the lead",
          body: "Even with instant acknowledgment, form leads still die when nobody owns the next action. The automation should route the lead and make ownership explicit the moment the form is submitted.",
        },
        {
          icon: BarChart3,
          title: "Not measuring the gap between submit and contact",
          body: "Most teams know their ad spend and site traffic but cannot tell you how long it takes to contact a form lead. Measure that gap first. It usually explains more lost revenue than the form design itself.",
        },
        {
          icon: FileText,
          title: "Asking too much up front and too little after submit",
          body: "Long forms depress conversion, but ultra-short forms create weak handoff context. The balance is: capture only what you need to start the workflow, then use the response sequence to gather the next useful detail.",
        },
      ],
    },
  ],
  faqItems: [
    {
      question: "Why do contact-form leads go cold so often?",
      answer:
        "Usually because the first response is too slow, too generic, or not tied to a real owner. Form leads are often comparison shoppers. If they do not hear something useful quickly, they move on to the next business that looks more responsive.",
    },
    {
      question: "Is a generic autoresponder enough for website leads?",
      answer:
        "Not usually. A simple 'thanks, we got your message' email does not qualify the lead, create momentum, or alert the right person clearly enough. It is better than silence, but it is rarely enough to protect conversion on its own.",
    },
    {
      question: "Should contact-form follow-up use email, SMS, or both?",
      answer:
        "Often both when the phone number is present. Email is useful for context and detail. SMS is useful for immediacy. The best mix depends on the buying motion and how quickly your team can take over once the lead replies.",
    },
    {
      question: "How is this different from the instant lead response page?",
      answer:
        "That page covers the whole speed-to-lead system across forms, calls, chat, social, and ads. This page is narrower. It is specifically about website contact-form drop-off: why form submissions go cold and how to fix the post-submit workflow.",
    },
    {
      question: "What is the first version of this workflow most businesses should build?",
      answer:
        "Start with one immediate response, one qualifying question, CRM logging, owner assignment, and one or two follow-up touches if the lead stays silent. You do not need a huge nurture machine to recover a meaningful share of website leads.",
    },
  ],
  faqSubtitle:
    "Practical questions from businesses that know website leads are leaking somewhere after the form submission",
  ctaHeading: "Want to stop losing website leads after they hit submit?",
  ctaText:
    "Book a 30-minute call. We will look at your current contact form, response timing, owner handoff, and follow-up process, then map the smallest workflow that would fix the leak without overbuilding it.",
  ctaSubtext:
    "No hype and no fake conversion promises. Just a practical diagnosis of where your form leads are really stalling.",
  relatedLinks: [
    { label: "Instant lead response automation", href: "/instant-lead-response-automation" },
    { label: "AI lead follow-up for service businesses", href: "/ai-lead-follow-up-for-service-businesses" },
    { label: "Lead follow-up automation examples", href: "/lead-follow-up-automation-examples" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
