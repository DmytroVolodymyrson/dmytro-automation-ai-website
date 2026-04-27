import {
  UtensilsCrossed,
  Star,
  Clock3,
  MessageSquare,
  ArrowRightLeft,
  BarChart3,
  Users,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Workflow,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "review-request-automation-for-restaurants",
  metaTitle:
    "Review Request Automation for Restaurants — Post-Visit Reputation Follow-Up That Works | Dmytro AI",
  metaDescription:
    "Review request automation for restaurants. Time the ask after the guest experience lands, route unhappy replies before a public review push, and turn completed visits into consistent local-trust signals.",
  badgeText: "Restaurant Reputation",
  badgeIcon: UtensilsCrossed,
  h1: "Review Request Automation for Restaurants",
  heroIntro:
    "Most restaurants do not have a review problem. They have a post-visit follow-up problem. The guest leaves happy, the meal was good, the private event went smoothly — and then nobody asks. Or the ask goes out before the guest has even left the parking lot. Or it lands the next morning with no routing for the guest who had a bad experience and is now being nudged toward Google. Review request automation for restaurants fixes the narrow workflow between a completed visit and a public reputation signal. It gives the restaurant a reliable way to ask at the right time, route problems back to the floor manager before they become one-star reviews, and stop depending on whoever remembers to send the link after a busy service.",
  heroSubtext:
    "Below: what a practical restaurant review-request workflow should handle, how it stays distinct from reservation reminders and phone-answering pages, when it is a good fit, what guardrails matter, and what proof honestly supports this page.",
  sections: [
    {
      type: "cards",
      title: "What restaurant review-request automation should actually handle",
      subtitle:
        "This page covers the post-visit reputation layer — not the earlier reservation, phone-coverage, or private-event stages.",
      items: [
        {
          icon: Workflow,
          title: "A real visit-completion trigger",
          body: "The workflow should fire from a reliable post-visit signal: reservation marked seated-and-closed, POS ticket settled, event concluded, or takeout order delivered. If the trigger fires too early — before the guest knows the experience is over — the review ask feels premature and gets ignored.",
        },
        {
          icon: Clock3,
          title: "Timing matched to the dining context",
          body: "A weeknight dinner, a private event, a catering delivery, and a Sunday brunch do not feel complete on the same timeline. A two-top that paid at 7:30 PM is ready for a check-in that evening. A private-event host needs a day to decompress before the ask lands well.",
        },
        {
          icon: MessageSquare,
          title: "Separate paths for happy guests and unhappy replies",
          body: "If the guest replies mentioning cold food, a long wait, a billing error, or a rude interaction, the workflow should route that reply to the manager immediately instead of pushing harder for a public review. Reputation automation only works when service recovery comes first.",
        },
        {
          icon: Users,
          title: "A clean front-of-house to back-office handoff",
          body: "The office or GM should know which services finished cleanly, which reservations had complaints flagged by the host, and which private events had issues on-site. That context determines whether a review ask is safe to send or whether the team should reach out differently.",
        },
        {
          icon: ArrowRightLeft,
          title: "Routing when a reply opens a new opportunity",
          body: "A post-visit touchpoint can surface a catering question, a private-event booking, a gift-card inquiry, or a referral. The workflow should route those replies with context instead of dumping them into a generic inbox where they sit until someone notices.",
        },
        {
          icon: BarChart3,
          title: "Visibility into which visit types produce reviews and which do not",
          body: "Owners should see whether weeknight diners, weekend brunch crowds, private-event hosts, or takeout customers are the ones actually leaving reviews — and where review asks are being ignored, complained about, or quietly suppressed by unresolved issues.",
        },
      ],
    },
    {
      type: "table",
      title: "How this page stays distinct from other restaurant automation pages",
      subtitle:
        "Review-request automation sits after the visit is complete. These other pages cover earlier stages:",
      headers: ["Best for", "Main job"],
      rows: [
        {
          label: "AI automation for restaurants",
          values: [
            "Restaurants exploring which workflows to automate across reservations, calls, events, and guest communication",
            "Broad category overview connecting all restaurant automation pages",
          ],
        },
        {
          label: "Reservation confirmation and reminder automation",
          values: [
            "Restaurants losing tables to no-shows, forgotten reservations, or unclear guest communication before the visit",
            "Pre-visit confirmations, reminder timing, waitlist backfill, and change/cancel flows",
          ],
        },
        {
          label: "Private event inquiry follow-up",
          values: [
            "Restaurants with private-dining or large-party inquiries that go cold before the event is booked",
            "Speed-to-lead, structured intake, reminder sequences, and event-sales handoff",
          ],
        },
        {
          label: "AI voice agent for restaurants",
          values: [
            "Restaurants missing reservation calls during service or after hours",
            "Live AI phone coverage, reservation capture, and overflow call handling",
          ],
        },
        {
          label: "Review request automation for restaurants",
          values: [
            "Restaurants that complete enough visits but ask for reviews inconsistently, too early, or with no complaint routing",
            "Post-visit timing, unhappy-reply routing, front-of-house handoff, and turning completed dining experiences into cleaner reputation signals",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Is this a good fit for your restaurant?",
      subtitle:
        "Best fit when the restaurant already serves enough guests that review discipline matters, but post-visit follow-through still depends on memory or inconsistent manual effort.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Good fit",
          variant: "green",
          items: [
            "You serve enough covers that review consistency materially affects local search ranking, reservation demand, or word-of-mouth",
            "Review asks happen irregularly — only when the manager remembers, or only for certain service types",
            "You have no reliable way to catch an unhappy guest before they leave a public review",
            "Private-event hosts and catering clients rarely get asked for reviews even though their experience is usually strong",
            "A handful of additional 5-star reviews each month would likely justify the build",
            "You want a narrow post-visit workflow before forcing a bigger CRM or marketing rebuild",
          ],
        },
        {
          icon: XCircle,
          heading: "Not the right fit",
          variant: "neutral",
          items: [
            "The bigger leak is still missed reservation calls, no-shows, or booking communication before the guest even arrives",
            "Service quality or kitchen consistency is unstable enough that automating review asks would amplify the problem",
            "You already run a consistent review process with very little manual drift",
            "Guest volume is too low for review discipline to matter yet",
            "You want automation deciding whether a guest complaint is resolved without a manager making the call",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "Guardrails that keep restaurant review-request automation useful",
      subtitle:
        "The goal is cleaner reputation follow-up and safer guest-recovery routing — not just more outbound messages after every meal.",
      items: [
        {
          icon: AlertTriangle,
          title: "Do not automate around unresolved guest issues",
          body: "If comps, callback promises, or service complaints are still open, more review requests will only push the guest toward sharing that unresolved frustration publicly. Fix the recovery path first.",
        },
        {
          icon: Clock3,
          title: "Respect the difference between a quick dinner and a multi-hour event",
          body: "A Tuesday dinner guest may be ready for a check-in that same evening. A private-event host who just managed a 50-person party needs space before any ask feels appropriate. Timing should match the dining context.",
        },
        {
          icon: Users,
          title: "Keep the front-of-house signal clean",
          body: "If the office does not know which tables had issues, which events had complaints, or which guests left unhappy, the review workflow is flying blind. The host or manager flagging context before close is part of the build.",
        },
        {
          icon: BarChart3,
          title: "Measure guest sentiment, not just review volume",
          body: "The KPI is not only how many review asks were sent. It is whether completed visits produce more positive reviews, fewer unhappy guests get pushed toward public channels prematurely, and management spends less time manually chasing follow-through after service.",
        },
      ],
    },
    {
      type: "prose",
      title: "How a practical restaurant review-request workflow usually works",
      subtitle:
        "The clean version is simple: complete the visit, wait until the experience has landed, route live replies fast, and ask for the review when the signal says it is safe.",
      blocks: [
        {
          heading: "A completed visit starts the post-service stage",
          body: "The strongest trigger is a real completion moment — POS close, reservation status change, event wrap, or delivery confirmation. Once that signal is reliable, the review workflow has something trustworthy to act on instead of guessing when the guest left.",
        },
        {
          heading: "The first touch checks whether the experience landed well",
          body: "For restaurants, a soft check-in often makes more sense before the public review ask. That gives the guest a chance to mention a cold dish, a long wait, or a billing issue — and gives the team a safer read on whether the visit is review-ready.",
        },
        {
          heading: "Good replies move toward the review ask; uncertain replies come back inside",
          body: "If the guest sounds happy, the ask moves forward with a direct review link. If there is hesitation, a complaint about food or service, or confusion about a charge, the manager inherits the conversation immediately instead of the automation pushing harder.",
        },
        {
          heading: "The team gets the context needed to recover or expand the opportunity",
          body: "When a guest replies, the handoff should include what type of visit occurred, when it happened, party size, and why the follow-up fired. That makes it easier to resolve a concern, offer a return visit, or notice a catering or private-event lead.",
        },
        {
          heading: "Owners can see where post-visit reputation follow-through breaks",
          body: "Over time the workflow shows which visit types generate the cleanest reviews, which services create more complaints or silence, and where the real problem is timing, quality, or weak internal follow-up discipline after the guest leaves.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof honestly supports this page",
      subtitle:
        "There is no published restaurant-specific review-automation case study on the site yet. The honest support comes from the horizontal review-request parent page, the live Paris Cafe case study, and the adjacent restaurant workflow pages that prove the operational pattern.",
      studies: [
        {
          industry: "Adjacent restaurant proof",
          headline: "The Paris Cafe case study proves faster post-event follow-through changes outcomes for a restaurant",
          body: "Different workflow, same operational truth: the window between a completed guest moment and the right next step is where trust either builds or leaks. When Paris Cafe deployed faster follow-up after guest interactions, response time dropped from hours to under 60 seconds. Review-request automation targets the same post-visit window.",
          link: "/case-studies/paris-cafe-voice-agent",
        },
        {
          industry: "Horizontal review-request proof",
          headline: "The service-business review-request parent page already proves the workflow pattern across 14 industries",
          body: "HVAC, dental, plumbing, electrical, cleaning, auto repair, landscaping, and more each have a dedicated review-request page using the same operational logic. This restaurant page applies that proven workflow to restaurant-specific triggers: POS close, reservation completion, event wrap, and guest-experience timing.",
          link: "/review-request-automation-for-service-businesses",
        },
        {
          industry: "Adjacent workflow proof",
          headline: "The reservation confirmation page proves the same stage-gate approach works before the visit — this page extends it to after",
          body: "Reservation confirmation automation already proves that reliable triggers, appropriate timing, and routing for guest concerns work in a restaurant context. Review-request automation uses the same structure for the post-visit stage instead of the pre-visit stage.",
          link: "/reservation-confirmation-and-reminder-automation-for-restaurants",
        },
      ],
      links: [
        { label: "Paris Cafe case study", href: "/case-studies/paris-cafe-voice-agent" },
        { label: "Review automation for service businesses", href: "/review-request-automation-for-service-businesses" },
        { label: "Reservation confirmation automation for restaurants", href: "/reservation-confirmation-and-reminder-automation-for-restaurants" },
        { label: "View all case studies", href: "/case-studies" },
      ],
    },
  ],
  faqItems: [
    {
      question: "How is this different from the reservation confirmation page?",
      answer:
        "The reservation confirmation page covers what happens before the guest arrives: confirmations, reminders, no-show prevention, and waitlist backfill. This page covers what happens after the visit is complete: review timing, unhappy-reply routing, and turning a good experience into a public reputation signal. They are sequential stages in the same guest lifecycle.",
    },
    {
      question: "Why not just ask for a review immediately after every guest pays?",
      answer:
        "Because different dining contexts land differently. A quick weeknight dinner may feel settled by 9 PM. A private event with 40 guests needs space before the host is ready for any outreach. A catering order needs time for the client to get feedback from their own guests. Good automation adapts the timing to the visit type instead of blasting the same message at checkout.",
    },
    {
      question: "What does a focused restaurant review-request workflow usually cost?",
      answer:
        "A focused post-visit review workflow for a restaurant usually lands around $1.5K-$3K depending on how cleanly visit completion can be detected from the POS or reservation system, whether the build needs a soft check-in before the review ask, and how much complaint-routing or manager-alert logic is required. Broader workflows that also cover phone answering or reservation reminders cost more.",
    },
    {
      question: "Can this work with my current reservation or POS system?",
      answer:
        "Usually yes, as long as there is a stable way to detect that a visit is truly complete and enough guest context can pass into the follow-up. API access from your POS, reservation platform, or event-management system helps, but practical workflows can also run from webhooks, status changes, or other reliable handoff points between service and office follow-through.",
    },
    {
      question: "What is the main ROI for a restaurant?",
      answer:
        "Cleaner local-trust follow-through after completed visits: more consistent review asks, fewer unhappy guests getting pushed toward public reviews before their issue is resolved, better visibility into which service types and visit contexts create the strongest reputation signals, and less manager time spent manually remembering who should get the next message after a busy service.",
    },
  ],
  faqSubtitle:
    "Practical answers for restaurant owners considering a cleaner post-visit reputation workflow",
  ctaHeading: "Need cleaner reputation follow-up after guests leave happy?",
  ctaText:
    "Book a 30-minute call. We will look at how completed visits get tracked today, where review asks are being missed or mistimed, and whether a focused post-visit workflow, an earlier reservation or phone fix, or no new build is the smarter next move.",
  ctaSubtext:
    "No obligation. No generic reputation-management pitch. Just a practical conversation about where post-visit follow-through is leaking trust or reviews for your restaurant.",
  relatedLinks: [
    { label: "AI automation for restaurants", href: "/ai-automation-for-restaurants" },
    { label: "Reservation confirmation automation", href: "/reservation-confirmation-and-reminder-automation-for-restaurants" },
    { label: "Review automation for service businesses", href: "/review-request-automation-for-service-businesses" },
    { label: "Paris Cafe case study", href: "/case-studies/paris-cafe-voice-agent" },
    { label: "All guides", href: "/guides" },
  ],
};

export default data;
