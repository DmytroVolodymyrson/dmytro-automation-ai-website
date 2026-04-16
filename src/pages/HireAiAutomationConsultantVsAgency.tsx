import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "@/lib/helmet";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  AlertTriangle,
  Zap,
  XCircle,
  Users,
  Building2,
  Wrench,
  DollarSign,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const scrollToBooking = () => {
  const bookingWidget = document.getElementById("booking-widget");
  if (bookingWidget) {
    bookingWidget.scrollIntoView({ behavior: "smooth" });
  }
};

/* ------------------------------------------------------------------ */
/*  FAQ accordion                                                      */
/* ------------------------------------------------------------------ */
const faqItems = [
  {
    question: "When does hiring an agency make more sense than a consultant?",
    answer:
      "If you need a large team across multiple disciplines — paid ads, brand design, content, and automation all at once — an agency can staff that. If your primary need is getting automation systems built and running, a solo consultant is faster, cheaper, and more accountable. Most small businesses don't need the full agency apparatus.",
  },
  {
    question: "Can a solo consultant handle complex integrations?",
    answer:
      "Yes. Complex doesn't mean you need a big team — it means you need someone who understands the tools deeply. A good consultant builds on platforms like n8n, GoHighLevel, and standard APIs. I've built multi-step workflows connecting CRMs, voice agents, payment systems, and scheduling tools. One person who knows the stack well moves faster than a team learning it.",
  },
  {
    question: "What about DIY with Zapier or Make — can I just do it myself?",
    answer:
      "For simple, single-step automations — yes. If you need to send a Slack message when a form is submitted, Zapier works fine. But the moment you need branching logic, error handling, multi-step sequences, or integrations with tools that don't have native connectors, DIY hits a wall fast. The time you spend debugging is time you're not running your business.",
  },
  {
    question: "How do I evaluate if a consultant is actually good?",
    answer:
      "Ask three things: (1) Can they show you systems they've built, not just talk about them? (2) Do they understand your business operations, or just the tools? (3) Will you have direct access to the person building the system? If the answer to any of these is no, keep looking.",
  },
  {
    question: "What if the consultant disappears after the project?",
    answer:
      "This is a legitimate concern with any freelancer. The safeguard is ownership: you should own everything that gets built. Documentation, access credentials, system architecture — all of it. I include full documentation and training with every build. If we stop working together, you keep everything and can hand it to anyone.",
  },
  {
    question: "How much should I expect to spend?",
    answer:
      "A solo consultant typically charges $1,500 to $8,000 for a project, depending on complexity. Agencies run $5,000 to $25,000+ for comparable scope. DIY costs less upfront but the time investment is significant — and if the automation doesn't work reliably, the hidden cost is the revenue you keep losing.",
  },
];

/* ------------------------------------------------------------------ */
/*  Section wrapper                                                    */
/* ------------------------------------------------------------------ */
const Section = ({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.45 }}
    className={`section-padding ${className}`}
  >
    <div className="container-tight">{children}</div>
  </motion.section>
);

/* ================================================================== */
/*  PAGE COMPONENT                                                     */
/* ================================================================== */
const HireAiAutomationConsultantVsAgency = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Hire an AI Automation Consultant vs. Agency vs. DIY | Dmytro AI</title>
        <meta
          name="description"
          content="Comparing your options for AI automation: solo consultant, agency, or DIY. Honest breakdown of cost, speed, quality, and what makes sense for your business."
        />
        <link
          rel="canonical"
          href="https://www.dmytroai.com/hire-ai-automation-consultant-vs-agency"
        />
        <meta
          property="og:title"
          content="Hire an AI Automation Consultant vs. Agency vs. DIY | Dmytro AI"
        />
        <meta
          property="og:description"
          content="Should you hire a consultant, an agency, or do it yourself? Honest comparison for business owners exploring AI automation."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.dmytroai.com/hire-ai-automation-consultant-vs-agency"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hire an AI Automation Consultant vs. Agency vs. DIY",
            description:
              "A practical comparison of hiring a solo AI automation consultant, working with an agency, or building automations yourself. Cost, speed, and quality breakdown for small businesses.",
            author: { "@id": "https://www.dmytroai.com/#person" },
            url: "https://www.dmytroai.com/hire-ai-automation-consultant-vs-agency",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-24 md:pt-28">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-background pb-16 md:pb-24">
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />

          <div className="container-tight relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-6">
                <Scale className="w-4 h-4" />
                Buyer's Guide
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                Hire an AI Automation Consultant vs. Agency vs. DIY
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                You know your business needs automation. The question is who
                builds it. Here's an honest comparison of your three options —
                with real tradeoffs, not a sales pitch.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Below: what each path actually looks like, what it costs, who
                it's best for, and how to decide.
              </p>
              <Button
                size="lg"
                onClick={scrollToBooking}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a 30-Minute Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ── The three paths ────────────────────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Three ways to get AI automation into your business
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Each option has genuine strengths. The right choice depends on your
            budget, timeline, and how much hands-on attention your automation
            needs:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Solo consultant",
                body: "One person who diagnoses your workflow, builds the system, and hands it off. Direct access to the builder. Fast turnaround. Best for businesses that want a working system without the overhead of a large team.",
              },
              {
                icon: Building2,
                title: "Agency",
                body: "A team with account managers, project managers, and specialists. Good for large, multi-discipline projects that need design, marketing, and automation all at once. Higher cost, longer timelines, more process.",
              },
              {
                icon: Wrench,
                title: "DIY (Zapier, Make, ChatGPT)",
                body: "You build it yourself using no-code tools. Low upfront cost, full control. Works well for simple, single-step automations. Gets difficult fast when you need multi-step logic, error handling, or custom integrations.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 shadow-card"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── Side-by-side comparison ────────────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Side-by-side comparison
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Here's how the three options stack up across the factors that
            actually matter when you're choosing who builds your automation:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse max-w-4xl">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="py-3 pr-4 font-semibold text-foreground" />
                  <th className="py-3 px-4 font-semibold text-foreground">
                    Solo consultant
                  </th>
                  <th className="py-3 px-4 font-semibold text-foreground">
                    Agency
                  </th>
                  <th className="py-3 px-4 font-semibold text-foreground">
                    DIY
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Cost", "$1.5K–$8K one-time", "$5K–$25K+", "Low upfront, high time cost"],
                  ["Timeline", "1–3 weeks", "4–8 weeks", "Weeks to months"],
                  ["Who builds it", "The person you talk to", "A team you may never meet", "You"],
                  ["Diagnosis depth", "Maps your actual workflow", "Template-driven assessment", "You figure it out"],
                  ["Customization", "Built for your process", "Adapted from existing templates", "Limited by platform"],
                  ["Communication", "Direct, one person", "Account manager relay", "Community forums / docs"],
                  ["Ongoing support", "Direct access to builder", "Support ticket queue", "Self-serve"],
                  ["Ownership", "You own everything", "Depends on contract", "You own everything"],
                  ["Best for", "SMBs that want results fast", "Large orgs, multi-discipline projects", "Simple single-step automations"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/30">
                    <td className="py-3 pr-4 font-medium text-foreground">
                      {row[0]}
                    </td>
                    <td className="py-3 px-4">{row[1]}</td>
                    <td className="py-3 px-4">{row[2]}</td>
                    <td className="py-3 px-4">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── When each option is best ───────────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            When each option is the right call
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            There's no universally right answer. Here's when each path makes
            the most sense:
          </p>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Hire a consultant when…
              </h3>
              <ul className="space-y-3">
                {[
                  "You have a specific workflow to automate and want it done fast",
                  "You want direct access to the person building your system",
                  "Your budget is $2K–$8K and you need maximum ROI from it",
                  "You value speed and accountability over process and meetings",
                  "You need someone who understands your operations, not just the tools",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-muted-foreground" />
                Hire an agency when…
              </h3>
              <ul className="space-y-3">
                {[
                  "You need multiple disciplines at once (design, ads, automation)",
                  "You have a budget above $10K and can absorb longer timelines",
                  "You need a large team to run ongoing campaigns alongside automation",
                  "You're a mid-to-large company with formal procurement processes",
                  "You want one vendor for everything, even if it's more expensive",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-muted-foreground" />
                Go DIY when…
              </h3>
              <ul className="space-y-3">
                {[
                  "Your automation is a single step: trigger → action",
                  "You enjoy tinkering with tools and have time to invest",
                  "Budget is very tight and you're willing to trade time for money",
                  "You're just experimenting and don't need reliability yet",
                  "The automation is for personal productivity, not business-critical",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ── Hidden costs ───────────────────────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            The costs nobody talks about
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            The sticker price is only part of the story. Here are the hidden
            costs that change the math for each option:
          </p>
          <div className="grid gap-5 sm:grid-cols-2 max-w-4xl">
            {[
              {
                icon: DollarSign,
                title: "Agency overhead",
                body: "You're paying for account managers, project managers, office space, and sales teams. The person actually building your automation might represent 30% of what you're billed. The rest is overhead you don't benefit from.",
              },
              {
                icon: Clock,
                title: "DIY time cost",
                body: "Every hour you spend learning Zapier, debugging workflows, and searching forums is an hour you're not running your business. At $100/hour of your time, a 40-hour DIY project costs $4,000 in opportunity cost alone.",
              },
              {
                icon: AlertTriangle,
                title: "Reliability cost",
                body: "A broken automation that drops leads or double-books customers costs you real revenue. DIY automations break more often because they're built without error handling. Agencies use templates that may not fit your edge cases. A consultant builds for your specific workflow.",
              },
              {
                icon: Zap,
                title: "Iteration speed",
                body: "Your business changes. When you need to update an automation, a consultant can turn it around in days. With an agency, you're in a ticket queue. With DIY, you're back to debugging. The cost of slow iteration compounds over time.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="flex gap-4 rounded-2xl border border-border/60 bg-background/60 p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── Real results ───────────────────────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What consultant-built automation looks like
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Here's what the consultant path produces in practice — real systems
            built for real businesses:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                industry: "Restaurant",
                headline: "100% of after-hours calls answered",
                body: "A NYC restaurant was missing reservations every night after close. A 24/7 AI voice agent now handles all calls, books tables, and routes complex requests. Built in under two weeks by one consultant.",
                link: "/case-studies/paris-cafe-voice-agent",
              },
              {
                industry: "Info Business",
                headline: "50+ qualified leads per day",
                body: "Manual Instagram prospecting took hours and produced a handful of leads. An automated pipeline now discovers, qualifies, and delivers leads daily at $0.29 each. No agency team required.",
                link: "/case-studies/instagram-lead-generation",
              },
              {
                industry: "E-commerce",
                headline: "3x follow-up capacity",
                body: "5,600+ leads sitting in spreadsheets with no systematic outreach. A full CRM build with automated sequences organized every contact and tripled the team's effective capacity. One person, one project.",
                link: "/case-studies/ecommerce-crm-automation",
              },
            ].map((cs, i) => (
              <motion.div
                key={cs.industry}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 shadow-card flex flex-col"
              >
                <span className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                  {cs.industry}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {cs.headline}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {cs.body}
                </p>
                <Link
                  to={cs.link}
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                >
                  Read the full case study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/case-studies"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              View all case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/ai-automation-consultant-small-business"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              About automation consulting
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/n8n-vs-zapier-small-business"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              n8n vs Zapier comparison
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/ai-automation-for-hvac-companies"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              HVAC automation guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        {/* ── How to evaluate a consultant ───────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            How to evaluate an AI automation consultant
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            If you decide the consultant route is right, here's what to look
            for — and what to avoid:
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Green flags
              </h3>
              <ul className="space-y-3">
                {[
                  "They can show you systems they've built, not just testimonials",
                  "They ask about your workflow before pitching a solution",
                  "Fixed pricing with clear scope — no open-ended hourly billing",
                  "You talk directly to the person who builds the system",
                  "They're upfront about what's not a fit for them",
                  "You own everything: documentation, credentials, architecture",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-muted-foreground" />
                Red flags
              </h3>
              <ul className="space-y-3">
                {[
                  "They promise results before understanding your business",
                  "Vague scope, hourly billing, or 'it depends' pricing",
                  "You can't talk to the person who'll actually build the system",
                  "They push proprietary tools that lock you into their platform",
                  "No case studies, no demos, just buzzwords",
                  "They can't explain what happens if you stop working together",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <AlertTriangle className="w-4 h-4 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-center">
            Common questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-center leading-relaxed">
            Straight answers about choosing between a consultant, agency, and DIY
          </p>
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-border/60 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-card hover:bg-card/80 transition-colors"
                >
                  <span className="font-semibold text-base md:text-lg">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pt-4 pb-5 text-muted-foreground leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Final CTA / Booking ────────────────────────────────── */}
        <section className="relative bg-background overflow-hidden pt-8 pb-12 md:pt-14 md:pb-20 lg:pt-20 lg:pb-28">
          <div className="absolute inset-0 opacity-[0.015]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
                backgroundSize: "38px 38px",
              }}
            />
          </div>
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

          <div className="relative z-10 container-tight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Want to talk through your options?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                Book a 30-minute call. We'll look at your current workflows,
                figure out which automation path makes sense for your situation,
                and you'll leave with a clear next step — whether that involves
                working together or not.
              </p>
              <p className="text-sm text-muted-foreground">
                No hard sell. No vague AI buzzwords. Just an honest conversation
                about what's worth automating and who should build it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8"
            >
              {[
                { icon: Clock, text: "30-minute focused call" },
                { icon: CheckCircle2, text: "Honest assessment of your options" },
                { icon: ArrowRight, text: "Leave with a plan, not a pitch" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 px-5 py-4"
                >
                  <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              id="booking-widget"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card px-4 sm:px-5 lg:px-6 pt-6 lg:pt-0 pb-6 rounded-2xl shadow-card border border-border/50 overflow-hidden max-w-6xl xl:max-w-[76rem] mx-auto"
            >
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground font-medium mb-4 lg:hidden">
                <ArrowRight className="w-4 h-4 text-primary" />
                Pick a time that works for you below
              </div>
              <iframe
                src="https://api.leadconnectorhq.com/widget/bookings/dmytro-automation"
                className="lg:-mt-5"
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  minHeight: "550px",
                }}
                loading="eager"
                scrolling="no"
                id="dmytro-automation-booking"
                title="Book a 30-Minute Call"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HireAiAutomationConsultantVsAgency;
