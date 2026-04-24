import {
  Workflow,
  Phone,
  CalendarCheck,
  MessageSquare,
  Clock3,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  Timer,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "what-to-automate-first-for-restaurants",
  metaTitle:
    "What to Automate First for Restaurants — Choose the Highest-ROI Workflow | Dmytro AI",
  metaDescription:
    "Not sure what to automate first in your restaurant? Practical guide to choosing between missed-call recovery, reservation confirmations, private-event follow-up, and after-hours phone answering before a bigger restaurant automation build.",
  badgeText: "Restaurant Priorities",
  badgeIcon: Workflow,
  h1: "What to Automate First for Restaurants",
  heroIntro:
    "If your restaurant knows it needs better automation, the safest first move is usually not a giant all-in-one hospitality-tech rollout. It is one bounded workflow that fixes an expensive leak first. For most restaurants, that first workflow is one of four things: missed-call recovery, reservation confirmations and reminders, private-event inquiry follow-up, or after-hours phone answering. The right choice depends on where revenue and staff time are already slipping today — when callers hit voicemail during service, when booked guests still no-show because reminders are weak, when event inquiries sit too long without a reply, or when the restaurant keeps losing reservation demand after close.",
  heroSubtext:
    "Below: how to choose the first restaurant workflow to automate, how this page stays distinct from the broader restaurant parent and the already-live child pages, what direct proof supports the recommendation, and when you should keep the first project smaller instead of forcing a bigger restaurant automation rollout.",
  sections: [
    {
      type: "cards",
      title: "The first restaurant workflows usually worth automating",
      subtitle:
        "Most restaurants do not need to automate everything at once. They need to start where the leak is already costing bookings, event revenue, or front-of-house focus:",
      items: [
        {
          icon: Phone,
          title: "Missed-call recovery",
          body: "Start here when reservation and guest-service calls keep hitting voicemail because the host stand is busy, the floor is slammed, or nobody can answer after hours. This is usually the best first project when the leak starts before any reservation or inquiry is even captured.",
        },
        {
          icon: CalendarCheck,
          title: "Reservation confirmations and reminders",
          body: "Start here when reservations are already getting booked, but no-shows, weak confirmations, and messy reminder timing are still creating empty tables or service surprises. This is the safest first move when the leak starts after the booking already exists.",
        },
        {
          icon: MessageSquare,
          title: "Private-event inquiry follow-up",
          body: "Start here when buyout, catering, and large-party leads matter, but those higher-value inquiries sit too long without structured intake or fast first response. This is the right first workflow when speed and ownership break down before the sales conversation really starts.",
        },
        {
          icon: Clock3,
          title: "After-hours phone answering",
          body: "Start here when reservation demand or guest questions keep arriving after close and voicemail is clearly not enough. This is the better first project when the restaurant needs live overnight coverage, not just SMS-first recovery after the missed call.",
        },
      ],
    },
    {
      type: "when-to-use",
      title: "Which restaurant workflow should you automate first?",
      subtitle:
        "Choose the first build by looking at the exact point where response speed, ownership, or guest follow-through breaks down:",
      options: [
        {
          icon: Phone,
          heading: "Start with missed-call recovery",
          highlighted: true,
          items: [
            "Good callers are still being lost before anyone can answer live",
            "The host stand keeps bouncing between in-person service and the phone",
            "You want the lightest first fix that protects bookings without forcing live AI coverage everywhere",
            "Closest next page: /missed-call-text-back-for-restaurants",
          ],
        },
        {
          icon: CalendarCheck,
          heading: "Start with reservation confirmations and reminders",
          items: [
            "Reservations are already getting booked, but reminder discipline is weak or inconsistent",
            "No-shows, late changes, or unclear confirmation flows are creating avoidable service friction",
            "The workflow problem starts after the table is already on the books",
            "Closest next page: /reservation-confirmation-and-reminder-automation-for-restaurants",
          ],
        },
        {
          icon: MessageSquare,
          heading: "Start with private-event inquiry follow-up",
          items: [
            "Event, catering, and large-party leads matter, but nobody owns the first response consistently",
            "High-value inquiries sit in inboxes while the team is busy running service",
            "One recovered event booking per month would justify the build",
            "Closest next page: /private-event-inquiry-follow-up-for-restaurants",
          ],
        },
        {
          icon: Clock3,
          heading: "Start with after-hours phone answering",
          items: [
            "Reservation demand after close is real and voicemail is already leaking it",
            "Guests expect a live answer, not a callback sometime tomorrow",
            "SMS-first recovery feels too light for the call pattern and guest expectations",
            "Closest next page: /after-hours-phone-answering-for-restaurants",
          ],
        },
      ],
    },
    {
      type: "table",
      title: "This page vs. the rest of the restaurant cluster",
      subtitle:
        "These pages can coexist when each one answers a different buyer question:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "What to automate first for restaurants",
          values: [
            "Owners deciding which single workflow deserves to be the first restaurant automation project",
            "Helps choose between missed-call recovery, reservation reminders, event follow-up, and after-hours phone answering before anything broader gets built",
          ],
        },
        {
          label: "AI automation for restaurants",
          values: [
            "Owners evaluating the whole operating layer",
            "Explains the broader system across calls, reservations, event inquiries, guest communication, and where automation should stop overall",
          ],
        },
        {
          label: "Missed call text-back for restaurants",
          values: [
            "Restaurants that already know the first leak is unanswered calls",
            "Focuses narrowly on SMS-first recovery after missed calls, callback triage, and when a voice agent becomes the better fit",
          ],
        },
        {
          label: "After-hours phone answering for restaurants",
          values: [
            "Restaurants that already know they need live overnight phone coverage",
            "Focuses narrowly on after-close call answering, booking recovery, and when voicemail or text-back stops being enough",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your restaurant?",
      subtitle:
        "This page is useful when you know the operation needs better follow-through, but you still need to choose the smallest high-payoff first project.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You can already see one obvious leak: missed calls, weak reservation reminders, slow event follow-up, or after-hours demand loss",
            "You want a bounded workflow that proves value before funding a broader restaurant automation layer",
            "The front-of-house team is overloaded and phone or message follow-through is inconsistent",
            "You want a practical recommendation instead of another generic restaurant-tech pitch",
            "You care more about protected bookings and smoother service than about flashy AI features",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "Phone and reservation demand are genuinely light and staff already handle everything cleanly",
            "The real problem is empty demand, menu/offer issues, or service quality — not response speed or follow-through",
            "Nobody agrees on booking rules, event ownership, or guest communication standards at all",
            "You are looking for a giant all-in-one rebuild before proving one narrower workflow first",
            "Manual discipline is already strong and there is no visible leak to fix",
          ],
        },
      ],
    },
    {
      type: "prose",
      title: "How to choose the first restaurant automation without overbuilding",
      subtitle:
        "The best first project is usually the workflow closest to lost revenue or repeated front-of-house drag.",
      blocks: [
        {
          heading: "Start where delay already costs bookings",
          body: "If callers keep hitting voicemail while service is busy, missed-call recovery usually comes first. If the booking already exists but no-shows and guest confusion still create drag, reservation confirmations and reminders come first. If event leads matter but they sit too long without an answer, private-event follow-up comes first. If reservation demand after close is strong and guests expect a live answer, after-hours phone answering can be the right first build. The decision should follow the leak, not whichever automation sounds the most impressive.",
        },
        {
          heading: "Keep the first workflow small enough to run cleanly",
          body: "A narrower first build gives you faster time to value and fewer places to hide a broken process. Most restaurants learn more from one disciplined workflow than from a half-finished hospitality-tech stack that tries to touch every guest message before the team is ready.",
        },
        {
          heading: "Do not jump straight to live AI answering if a lighter fix will do",
          body: "Many restaurants should start with missed-call text-back before they jump into full after-hours live phone coverage. That lighter layer is often enough to recover real reservation demand quickly. If call volume, guest expectations, or after-close demand prove that text-back is too light, then it is easier to justify the heavier phone layer from real operating evidence.",
        },
        {
          heading: "Treat private-event follow-up as a different problem from reservation handling",
          body: "Large-party and catering inquiries can be worth more than routine reservations, but they need a different workflow. If event leads are the real leak, do not bury them inside the general reservation stack. Give that sales-adjacent process its own first project and clear owner.",
        },
      ],
    },
    {
      type: "considerations",
      title: "Mistakes that make the first restaurant project harder than it needs to be",
      subtitle:
        "These mistakes usually create bloated scope and weaker ROI:",
      items: [
        {
          icon: AlertTriangle,
          title: "Choosing the broadest build instead of the clearest leak",
          body: "Many restaurants jump straight to a giant AI host or all-in-one platform idea when the real issue is still one stage: missed calls, weak reminders, event follow-up, or after-hours coverage. Bigger scope feels strategic, but it often delays the first measurable win.",
        },
        {
          icon: Timer,
          title: "Ignoring manager and host time as a real cost",
          body: "DIY work is not free when managers spend weeks patching phone flows, reminder rules, and event-inquiry routing between service shifts. The first workflow should be scoped against both cash cost and the time drag of getting it wrong.",
        },
        {
          icon: BarChart3,
          title: "Skipping the baseline",
          body: "Know what the current leak costs: missed reservation calls, no-shows, slow event replies, or after-hours demand loss. Without that baseline, it is hard to choose the right first workflow or prove that the first build paid off.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "Relevant proof and adjacent proof",
      subtitle:
        "There is not a published restaurant first-project prioritization case study on the site yet, so this page stays grounded in the live restaurant cluster plus the Paris Cafe deployment.",
      studies: [
        {
          industry: "Restaurant cluster",
          headline: "The live restaurant pages already isolate the exact first-project options this page is comparing",
          body: "The broader restaurant parent plus the missed-call, reservation-reminder, private-event, and after-hours phone children already break the cluster into real workflow stages. This page sits one level earlier and helps an owner choose which of those narrower workflows should come first.",
          link: "/ai-automation-for-restaurants",
        },
        {
          industry: "Published restaurant proof",
          headline: "The Paris Cafe case study proves what happens when a restaurant fixes phone coverage and response speed directly",
          body: "That build took after-hours calls answered from 0% to 100%, cut web lead response time to under 60 seconds, and freed about 15 hours of management time each week. It is direct proof for the restaurant phone and guest-response layer this page is prioritizing.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Adjacent workflow proof",
          headline: "The already-live restaurant child pages show how the broader parent can be split into smaller, buyer-specific first projects",
          body: "Those child pages make this prioritization page more credible, not less. They already define the surrounding workflow boundaries. This page exists to help the owner choose the first one based on where bookings or guest communication are leaking now.",
          link: "/private-event-inquiry-follow-up-for-restaurants",
        },
      ],
      links: [
        { label: "AI automation for restaurants", href: "/ai-automation-for-restaurants" },
        { label: "Missed call text-back for restaurants", href: "/missed-call-text-back-for-restaurants" },
        { label: "Reservation confirmation and reminder automation for restaurants", href: "/reservation-confirmation-and-reminder-automation-for-restaurants" },
        { label: "Paris Cafe case study", href: "/case-studies/paris-cafe-voice-agent" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What should a restaurant automate first?",
      answer:
        "Usually start where the most expensive leak is already obvious: missed-call recovery if reservation demand is getting lost before anyone answers, reservation reminders if no-shows and weak confirmations are creating service drag, private-event follow-up if larger leads sit too long without a reply, or after-hours phone answering if overnight demand is strong and voicemail is clearly not enough.",
    },
    {
      question: "How is this different from the broader restaurant automation page?",
      answer:
        "The broader restaurant page explains the whole operating layer. This page is narrower. It helps you choose which single workflow deserves to be the first project before you scope anything broader.",
    },
    {
      question: "Should a restaurant start with missed-call text-back or after-hours phone answering?",
      answer:
        "Start with missed-call text-back if you need the lightest first fix for unanswered calls and guest expectations are still workable with SMS-first recovery. Start with after-hours phone answering if reservation demand after close is strong and callers clearly expect a live answer instead of a callback or text.",
    },
    {
      question: "When should private-event follow-up come before reservation reminders?",
      answer:
        "When event, catering, or large-party leads matter enough that one recovered booking can pay for the workflow quickly. If those higher-value inquiries sit too long without a response, private-event follow-up can deserve to come before a lighter reservation-reminder project.",
    },
    {
      question: "What is the main ROI of choosing the first workflow correctly?",
      answer:
        "You stop funding the wrong first project. In practice that means more protected bookings, fewer lost callers, cleaner guest communication, and a faster path to a measurable win — without paying for a bloated restaurant-tech rollout before the operation has earned it.",
    },
  ],
  faqSubtitle:
    "Practical questions about choosing the first restaurant automation",
  ctaHeading: "Need help choosing the first restaurant workflow to automate?",
  ctaText:
    "Book a 30-minute call. We will look at where your restaurant is leaking missed calls, no-show protection, private-event follow-up, or after-hours reservation demand now, then recommend whether the first move should be SMS-first recovery, reminder automation, event follow-up, or live overnight phone coverage before anything broader gets built.",
  ctaSubtext:
    "No generic restaurant-tech pitch. Just a practical first-project recommendation tied to how your phone flow, bookings, and guest communication actually work today.",
  relatedLinks: [
    { label: "AI automation for restaurants", href: "/ai-automation-for-restaurants" },
    { label: "Missed call text-back for restaurants", href: "/missed-call-text-back-for-restaurants" },
    { label: "Reservation confirmation and reminder automation for restaurants", href: "/reservation-confirmation-and-reminder-automation-for-restaurants" },
    { label: "Private-event inquiry follow-up for restaurants", href: "/private-event-inquiry-follow-up-for-restaurants" },
    { label: "After-hours phone answering for restaurants", href: "/after-hours-phone-answering-for-restaurants" },
  ],
};

export default data;
