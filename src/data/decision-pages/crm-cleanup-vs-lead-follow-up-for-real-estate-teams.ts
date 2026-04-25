import {
  AlertTriangle,
  ArrowRightLeft,
  Bot,
  CheckCircle2,
  Clock3,
  Database,
  Home,
  MessageSquare,
  Route,
  Scale,
  Users,
  XCircle,
} from "lucide-react";
import type { DecisionPageData } from "@/components/DecisionPageTemplate";

const data: DecisionPageData = {
  slug: "crm-cleanup-vs-lead-follow-up-for-real-estate-teams",
  metaTitle:
    "CRM Cleanup vs Lead Follow-Up for Real Estate Teams — Which Fix Comes First? | Dmytro AI",
  metaDescription:
    "Should a real estate team clean up CRM stages, routing, and ownership first, or automate lead follow-up now? Practical decision guide for owners who need to fix the bigger leak first.",
  badgeText: "Real Estate Decision Guide",
  badgeIcon: Scale,
  h1: "CRM Cleanup vs Lead Follow-Up for Real Estate Teams",
  heroIntro:
    "If your real-estate team cannot trust the CRM, more lead-follow-up automation usually makes the mess louder instead of fixing it. But if the pipeline is basically usable and the bigger leak is slow first response, waiting for a perfect cleanup can cost more than starting with lead follow-up now. That is the real decision. Not 'which page sounds more strategic?' The question is which problem is already more expensive today: messy stages, routing, and ownership inside the CRM, or leads going cold because nobody is responding and nurturing quickly enough.",
  heroSubtext:
    "Below: when CRM cleanup should come first, when lead follow-up should come first, how this decision page stays distinct from the broader real-estate parent plus the already-live cleanup and lead-response guides, and what adjacent proof honestly supports the choice without pretending there is already a published real-estate-specific comparison case study.",
  sections: [
    {
      type: "cards",
      title: "What this decision is actually about",
      subtitle:
        "Most teams do not need both projects at once. They need the one that removes the more expensive bottleneck first.",
      items: [
        {
          icon: Database,
          title: "Choose CRM cleanup first when the system cannot be trusted",
          body: "If leads sit in the wrong stage, duplicates are everywhere, ownership is fuzzy, and nobody agrees what the pipeline means, faster follow-up automation will fire on top of bad data and produce more confusion.",
        },
        {
          icon: MessageSquare,
          title: "Choose lead follow-up first when speed-to-lead is the obvious leak",
          body: "If the CRM is imperfect but still usable, and the real loss is that portal, website, or sign-call leads wait too long for a reply, lead-response automation usually creates payback faster than a deeper operations cleanup.",
        },
        {
          icon: Route,
          title: "This is a sequence decision, not a forever decision",
          body: "Most real-estate teams eventually need both cleaner pipeline logic and better follow-up discipline. The practical question is which one should be fixed before the other so the second project lands on more stable ground.",
        },
        {
          icon: AlertTriangle,
          title: "The wrong first move wastes trust",
          body: "If you automate lead follow-up on top of a broken CRM, the team blames automation. If you spend months cleaning the CRM while paid leads keep cooling off, the team loses faith in cleanup. The order matters because it shapes whether the next build feels useful or academic.",
        },
      ],
    },
    {
      type: "table",
      title: "CRM cleanup first vs. lead follow-up first",
      subtitle:
        "Use the current bottleneck — not generic best practice — to decide the first project:",
      headers: ["CRM cleanup first", "Lead follow-up first", "What changes fastest"],
      rows: [
        {
          label: "Main symptom",
          values: [
            "The CRM is too messy to trust: duplicates, vague stages, weak ownership, broken routing",
            "Leads arrive and sit too long before first response or early nurture happens",
            "You fix the most obvious leak instead of trying to solve everything at once",
          ],
        },
        {
          label: "Best when",
          values: [
            "Agents and admins cannot tell who owns the next step or what stage means what",
            "The team mostly knows where leads live, but response speed and follow-up discipline are poor",
            "The first project lands where execution is already failing hardest",
          ],
        },
        {
          label: "Risk if chosen too early",
          values: [
            "You spend time tidying structure while live leads still cool off",
            "You automate on top of bad stage logic and create louder confusion",
            "The wrong first project makes the second one harder to trust",
          ],
        },
        {
          label: "Early payoff",
          values: [
            "Cleaner reporting, routing, ownership, and pipeline truth",
            "Faster first response, more replies, and better handoff into live conversations",
            "You get a clearer signal about what the next build should be",
          ],
        },
        {
          label: "Typical next project",
          values: [
            "Lead follow-up, showing coordination, or nurture once the pipeline is stable",
            "CRM cleanup once early response proves the revenue leak and the team wants cleaner visibility",
            "A smaller second build lands with less waste",
          ],
        },
      ],
    },
    {
      type: "evaluation",
      title: "Which side are you actually on?",
      subtitle:
        "The honest answer is usually clearer than operators think once they look at where deals are already dying.",
      columns: [
        {
          icon: CheckCircle2,
          heading: "Start with CRM cleanup if...",
          variant: "green",
          items: [
            "The team argues about what stages mean or who owns active leads",
            "Showing-intent leads, colder inquiries, and old nurture contacts all live in the same buckets",
            "Duplicates or stale tasks keep agents from trusting the pipeline",
            "You already have some follow-up happening, but the system beneath it is too unreliable to scale",
            "Your biggest fear is automating the wrong trigger on top of broken routing",
          ],
        },
        {
          icon: XCircle,
          heading: "Start with lead follow-up if...",
          variant: "neutral",
          items: [
            "New buyer or seller inquiries are waiting too long for the first response",
            "Paid portal or ad leads are expensive enough that slow reply time is the clearest leak",
            "The CRM is imperfect but still usable enough to log the lead and route a human next step",
            "You need proof of faster conversations and booked showings before funding deeper ops cleanup",
            "The team already knows the pipeline is messy, but response speed is costing real deals today",
          ],
        },
      ],
    },
    {
      type: "considerations",
      title: "A practical sequence if both are broken",
      subtitle:
        "When both problems are real, the safest move is usually a bounded phase one — not two giant projects at once.",
      items: [
        {
          icon: Clock3,
          title: "Fix the bottleneck that is killing deals this week",
          body: "If fresh leads are cooling off in the first 15 minutes, lead follow-up often deserves to come first. If the team cannot even tell where serious prospects are in the CRM, cleanup deserves the first pass instead.",
        },
        {
          icon: ArrowRightLeft,
          title: "Keep the first project narrow enough to prove something",
          body: "A focused cleanup means stages, routing, duplicates, and ownership on the active pipeline — not a giant theoretical data-governance project. A focused lead-follow-up build means first response, early nurture, and handoff — not every downstream workflow at once.",
        },
        {
          icon: Users,
          title: "Use the first project to reveal the real second step",
          body: "Good cleanup work makes it obvious whether the next move should be lead response, showing coordination, or reactivation. Good lead-follow-up work makes it obvious whether the next move should be CRM cleanup, cleaner routing, or a booked-showing workflow.",
        },
        {
          icon: Bot,
          title: "Do not automate ambiguity",
          body: "If the team cannot agree what should happen next for a contact, automation should not guess. The rule should be simple enough that a human could explain it clearly before you ask software to run it every time.",
        },
      ],
    },
    {
      type: "case-studies",
      title: "What proof supports this page",
      subtitle:
        "There is no published real-estate-specific comparison case study on the site yet, so the proof framing stays explicit and adjacent:",
      studies: [
        {
          industry: "Tracked real-estate decision query",
          headline: "The live CRM cleanup page already carried the exact buyer question this page now isolates",
          body: "The existing CRM cleanup page already tracked the decision query 'Should a real estate team start with CRM cleanup or lead follow-up?' This new page extracts that buyer choice into its own guide instead of leaving it buried inside a narrower operations explainer.",
          link: "/crm-cleanup-and-routing-for-real-estate-teams",
        },
        {
          industry: "Live real-estate cluster",
          headline: "The cluster already has both sibling pages needed for a real comparison",
          body: "The real-estate cluster already includes a CRM-cleanup guide, a lead-response guide, a first-project page, showing coordination, and past-client reactivation. That makes this comparison useful because the buyer can now compare two real sibling workflows instead of a vague abstract choice.",
          link: "/what-to-automate-first-for-real-estate",
        },
        {
          industry: "Published CRM proof",
          headline: "The 5,600+ contact CRM case study shows why stage truth and ownership matter before automation scales",
          body: "The WheelsFeels CRM case study is not a real-estate deployment, but it is still the clearest published proof for the underlying operations principle: if records, statuses, and next-step ownership are not clean, follow-up automation becomes noisy instead of useful.",
          link: "/case-studies/ecommerce-crm-automation",
        },
      ],
      links: [
        { label: "CRM cleanup and routing for real estate teams", href: "/crm-cleanup-and-routing-for-real-estate-teams" },
        { label: "Real-estate lead response and follow-up automation", href: "/real-estate-lead-response-and-follow-up-automation" },
        { label: "What to automate first for real estate teams", href: "/what-to-automate-first-for-real-estate" },
        { label: "E-commerce CRM automation case study", href: "/case-studies/ecommerce-crm-automation" },
      ],
    },
  ],
  faqItems: [
    {
      question: "What is the clearest sign CRM cleanup should come before lead follow-up?",
      answer:
        "When the team cannot trust the pipeline itself. If stages are vague, duplicates are common, ownership is unclear, and the CRM cannot reliably separate fresh leads from nurture or showing-intent contacts, cleanup usually has to come first so later follow-up automation is firing on something real.",
    },
    {
      question: "What is the clearest sign lead follow-up should come before CRM cleanup?",
      answer:
        "When new inquiries are obviously sitting too long and the CRM is messy but still usable enough to capture and route the lead. If response speed is the expensive leak today, a focused follow-up build often pays back faster than a deeper cleanup project.",
    },
    {
      question: "Can a team do a smaller version of both?",
      answer:
        "Yes, if the scope stays bounded. That might mean cleaning stages, ownership, and duplicates only on the active pipeline while also adding a simple first-response workflow. The mistake is trying to rebuild the whole CRM and every nurture sequence at the same time.",
    },
    {
      question: "How is this different from the existing CRM cleanup and lead-response pages?",
      answer:
        "Those sibling pages explain each workflow on its own. This page sits one step earlier in the decision chain. It helps the buyer choose which of those two workflows should come first based on the real bottleneck inside the team today.",
    },
    {
      question: "What does a focused first project usually cost?",
      answer:
        "A bounded CRM cleanup pass or a focused lead-response build often starts around $2K-$4K depending on routing rules, CRM complexity, integrations, and whether handoff or calendar logic is included. The right first project is usually the one that removes the more expensive leak, not the one with the lower sticker price.",
    },
  ],
  faqSubtitle:
    "Practical questions from real-estate teams deciding whether pipeline cleanup or faster lead follow-up should come first.",
  ctaHeading:
    "Need help deciding whether your real-estate team should fix CRM cleanup or lead follow-up first?",
  ctaText:
    "Book a 30-minute call. We will look at where your team is actually losing momentum today — inside stage/routing chaos or inside response speed and early nurture — and tell you which smaller project is most likely to pay off first.",
  ctaSubtext:
    "No generic proptech pitch. Just a practical recommendation based on your current lead flow, CRM discipline, and handoff reality.",
  relatedLinks: [
    { label: "AI automation for real estate", href: "/ai-automation-for-real-estate" },
    { label: "CRM cleanup and routing for real estate teams", href: "/crm-cleanup-and-routing-for-real-estate-teams" },
    { label: "Real-estate lead response and follow-up automation", href: "/real-estate-lead-response-and-follow-up-automation" },
    { label: "What to automate first for real estate teams", href: "/what-to-automate-first-for-real-estate" },
    { label: "Showing coordination automation for real estate teams", href: "/showing-coordination-automation-for-real-estate-teams" },
  ],
};

export default data;
