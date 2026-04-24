import {
  Workflow,
  MessageSquare,
  Phone,
  CalendarCheck,
  FileText,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Clock3,
  Users,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-home-inspectors",
  metaTitle:
    "What to Automate First for Home Inspectors — Choose the Highest-ROI Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in a home inspection business? Practical guide to choosing between lead follow-up, missed-call recovery, booking and reminders, and report delivery follow-up before a bigger automation build.",
  badgeText: "Home-Inspector Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Home Inspectors",
  heroIntro:
    "If your home inspection business knows it needs better automation, the first move usually should not be a giant all-in-one system. It should be one bounded workflow that fixes the leak already costing you referrals, bookings, or follow-through. For most home inspectors, that first workflow is one of four things: lead follow-up on new agent and buyer inquiries, missed-call recovery while you are still on-site, inspection scheduling and reminders once the booking is real, or report-delivery follow-up after the inspection is done. The right choice depends on where the business is already losing momentum today — before contact happens, while the phone is unanswered, during booking friction, or after the field work is complete.",
  heroSubtext:
    "Below: how to choose the first home-inspector workflow to automate, how this page stays distinct from the broader home-inspector page and the narrower child pages already live, what adjacent proof honestly supports the recommendation, and when you should keep the first project smaller instead of forcing a bigger operating-system build too early.",
  sections: [
    {
      type: "cards",
      title: "The first home-inspector workflows usually worth automating",
      subtitle:
        "Most inspection businesses do not need everything automated at once. They need to start where the transaction is already leaking:",
      items: [
        {
          icon: MessageSquare,
          title: "Lead follow-up",
          body: "Start here when new agent referrals, web forms, and buyer inquiries sit too long before anyone replies. This is usually the highest-payoff first build when speed-to-lead and referral confidence are the main reasons inspections are being lost before booking starts.",
        },
        {
          icon: Phone,
          title: "Missed-call recovery",
          body: "Start here when good calls keep landing during inspections and voicemail is clearly not enough. This is the right first workflow when the leak starts before the inquiry is fully captured and you cannot answer because you are already on-site.",
        },
        {
          icon: CalendarCheck,
          title: "Inspection scheduling and reminders",
          body: "Start here when inquiries are already being answered, but too much friction still exists between interest and a confirmed inspection. This is the better first project when phone tag, availability confusion, or reschedule churn are the real bottlenecks.",
        },
        {
          icon: FileText,
          title: "Report delivery and review follow-up",
          body: "Start here when the bigger leak is post-inspection inconsistency. If reports go out unevenly, buyers and agents do not get a clean closeout, or review asks happen only when someone remembers, this can be a stronger first build than another front-end workflow.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which home-inspector workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact stage where delay, weak ownership, or inconsistency is already hurting referral trust or booked inspections:",
      options: [
        {
          icon: MessageSquare,
          heading: "Start with lead follow-up",
          highlighted: true,
          items: [
            "New web forms, agent referrals, and buyer inquiries are arriving, but response time is measured in hours instead of minutes",
            "Agents care more about fast acknowledgement and clear handoff than about another back-office automation layer",
            "You are paying for traffic or relying on referrals that still are not getting a disciplined first response",
            "Closest next page: /ai-lead-follow-up-for-home-inspectors",
          ],
        },
        {
          icon: Phone,
          heading: "Start with missed-call recovery",
          items: [
            "Good callers are still being lost while you are under a house, in an attic, or driving between inspections",
            "The office is small or nonexistent, so unanswered calls are a normal operating reality",
            "Voicemail and callbacks are already costing referrals and you need a lighter first layer before live AI phone coverage",
            "Closest next page: /missed-call-text-back-for-home-inspectors",
          ],
        },
        {
          icon: CalendarCheck,
          heading: "Start with scheduling and reminders",
          items: [
            "The business usually responds fast enough, but too much friction still exists between interest and a confirmed booking",
            "Agents and buyers are stuck in phone tag, reschedules, or unclear availability windows",
            "Inspection-type logic, travel timing, and reminder discipline are the real operational headaches now",
            "Closest next page: /inspection-scheduling-and-reminder-automation-for-home-inspectors",
          ],
        },
        {
          icon: FileText,
          heading: "Start with report delivery and review follow-up",
          items: [
            "The front end is working reasonably well, but the post-inspection closeout still feels manual and inconsistent",
            "Reports, follow-up questions, and review requests depend too much on memory and inbox cleanup",
            "You want a cleaner buyer and agent experience after the field work is done before adding broader nurture layers",
            "Closest next page: /report-delivery-and-review-automation-for-home-inspectors",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the home-inspector cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for home inspectors",
          values: [
            "Owners deciding which single workflow deserves the first project",
            "Helps choose between lead follow-up, missed-call recovery, scheduling and reminders, and report-delivery closeout",
          ],
        },
        {
          label: "AI automation for home inspectors",
          values: [
            "Owners evaluating the broader operating layer",
            "Explains the full home-inspector system across lead capture, missed calls, booking, report delivery, reviews, and agent nurture",
          ],
        },
        {
          label: "AI lead follow-up for home inspectors",
          values: [
            "Businesses that already know the first leak is slow response to new inquiries",
            "Focuses narrowly on early-funnel response speed, light qualification, and handoff before scheduling begins",
          ],
        },
        {
          label: "Inspection scheduling and reminder automation for home inspectors",
          values: [
            "Businesses that already know the leak starts after the inquiry is real",
            "Focuses narrowly on booking logic, confirmations, reminders, reschedules, and cleaner scheduling ownership",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your inspection business?",
      subtitle:
        "This page is useful when you know the business needs better follow-through, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already see one obvious leak: slow inquiry response, missed calls during inspections, booking friction, or inconsistent post-inspection follow-up",
            "You want one bounded workflow that proves value before funding a broader automation layer",
            "Agent trust and responsiveness matter to the business as much as raw consumer demand",
            "The same few follow-up tasks keep falling back onto nights, weekends, or memory",
            "You want a practical recommendation instead of a giant software-stack pitch",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Lead volume is still very low and there is not yet enough workflow pressure to justify automation",
            "The main problem is pricing, service quality, or referral scarcity rather than follow-through",
            "Nobody agrees on who owns inquiries, booking, and post-inspection follow-up at all",
            "You are looking for a full rebuild before proving one narrower workflow first",
            "Manual discipline is already strong and there is no visible leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first home-inspector automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost referrals or repeated admin drag.",
      blocks: [
        {
          heading: "Start where the referral or booking leak is already visible",
          body: "If agent and buyer inquiries arrive and nobody responds quickly, lead follow-up usually comes first. If calls are being missed while you are on-site, missed-call recovery comes first. If interest is real but booking still feels sloppy, scheduling and reminders come first. If the front end is already decent but closeout and review timing are inconsistent, post-inspection follow-up can be the smarter first build.",
        },
        {
          heading: "Do not confuse a heavier phone layer with the right first project",
          body: "Some home inspectors eventually need live AI phone answering, but not every business should start there. If a lighter missed-call workflow would already protect most referrals, start with the smaller layer and prove value before committing to the heavier build.",
        },
        {
          heading: "Keep the first workflow narrow enough to run cleanly",
          body: "One disciplined workflow teaches you more than a half-finished system that tries to touch inquiry response, booking, report delivery, reviews, and agent nurture all at once. Smaller scope usually means faster time to value and fewer places for bad process design to hide.",
        },
        {
          heading: "Expand only after the first workflow proves itself",
          body: "Once one workflow is running cleanly, the next layer becomes easier to justify and easier to design. For example, lead follow-up can come first, then scheduling, then report-delivery closeout. The sequence should follow evidence, not wishful scope.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first home-inspector automation project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest build instead of the clearest leak",
          body: "A full inspection-business system sounds strategic, but if the real problem is still one stage — fast response, missed calls, booking friction, or report follow-up — bigger scope usually delays the first measurable win.",
        },
        {
          icon: Clock3,
          title: "Ignoring owner time as a real cost",
          body: "DIY work is not free when nights get consumed by voicemail catch-up, scheduling cleanup, and review-request admin. The first project should be scoped against both direct spend and the time drag of keeping manual work alive.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: slow replies, missed calls, abandoned booking attempts, or weak review follow-up. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published home-inspector first-project case study on the site yet, so the page stays grounded in the live home-inspector cluster plus published phone-handling and CRM/follow-up proof.",
      studies: [
        {
          industry: "Home-inspector cluster",
          headline: "The live home-inspector page already isolates the exact workflow families this page is comparing",
          body: "The broader home-inspector page already breaks the operating layer into real workflow families: missed-call recovery, lead follow-up, booking automation, report delivery, review timing, and agent nurture. This page sits one level earlier and helps the owner choose which bounded workflow should come first.",
          link: "/ai-automation-for-home-inspectors",
        },
        {
          industry: "Published phone-handling proof",
          headline: "The restaurant voice-agent case study proves why immediate response matters when nobody can answer live",
          body: "That project is not a home-inspector build, but it is direct proof that after-hours and unanswered-call coverage change what happens before the lead disappears. The same operating principle applies when an agent or buyer calls while you are still in the field.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ lead CRM case study proves why structured follow-up and clean ownership matter once contacts start piling up",
          body: "That e-commerce case study is not a home-inspection project, but it is direct proof that weak ownership and inconsistent follow-up destroy recoverable value. The same logic supports inquiry follow-up, booking handoff, and post-inspection closeout for a home-inspector business.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "AI automation for home inspectors", href: "/ai-automation-for-home-inspectors" },
        { label: "AI lead follow-up for home inspectors", href: "/ai-lead-follow-up-for-home-inspectors" },
        { label: "Inspection scheduling and reminder automation for home inspectors", href: "/inspection-scheduling-and-reminder-automation-for-home-inspectors" },
        { label: "Report delivery and review automation for home inspectors", href: "/report-delivery-and-review-automation-for-home-inspectors" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should a home inspector automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: lead follow-up if new inquiries sit too long before a reply, missed-call recovery if good calls keep landing during inspections, scheduling if booking friction is the real bottleneck, or report-delivery follow-up if the bigger problem is inconsistent closeout after the inspection is done.",
    },
    {
      question: "How is this different from the broader home-inspector automation page?",
      answer:
        "The broader home-inspector page explains the whole operating layer. This page sits one step earlier and helps you decide which single workflow should be the first project before you expand into a larger system.",
    },
    {
      question: "Should a home inspector start with missed-call text-back or lead follow-up?",
      answer:
        "Start with lead follow-up if the main problem is slow response to web forms, email inquiries, and referrals. Start with missed-call recovery if good callers are still being lost before anyone can answer because you are on-site. Many inspection businesses eventually need both, but the first project should match the leak you can already see.",
    },
    {
      question: "When should scheduling and reminders come before more lead-response work?",
      answer:
        "Only when the business already responds quickly enough and the bigger problem is still getting the inspection actually booked. If phone tag, unclear availability, and reschedules are where deals stall, scheduling may be the smarter first workflow than another front-end follow-up layer.",
    },
    {
      question: "When should report delivery and review follow-up come first?",
      answer:
        "Usually only after the front end is already being handled reasonably well. If the main pain is inconsistent report-ready communication, unanswered post-inspection questions, or weak review discipline, post-inspection closeout can be a valid first project. If fresh inquiries are still being answered late, fix the front-end leak first.",
    },
  ],
  faqSubtitle:
    "Practical questions about choosing the first home-inspector automation",
  ctaHeading: "Need help choosing the first home-inspector workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your business is leaking referrals, missed calls, booking momentum, or post-inspection follow-through now, then recommend whether the first move should be lead follow-up, missed-call recovery, scheduling, or report-delivery closeout before anything broader gets built.",
  ctaSubtext:
    "No obligation. No generic pitch. Just a practical recommendation based on where your inspection business is already losing momentum.",
  relatedLinks: [
    { label: "AI automation for home inspectors", href: "/ai-automation-for-home-inspectors" },
    { label: "AI lead follow-up for home inspectors", href: "/ai-lead-follow-up-for-home-inspectors" },
    { label: "Inspection scheduling and reminder automation for home inspectors", href: "/inspection-scheduling-and-reminder-automation-for-home-inspectors" },
    { label: "Report delivery and review automation for home inspectors", href: "/report-delivery-and-review-automation-for-home-inspectors" },
    { label: "Missed call text-back for home inspectors", href: "/missed-call-text-back-for-home-inspectors" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
