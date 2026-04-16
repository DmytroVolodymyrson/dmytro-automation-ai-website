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
  XCircle,
  Zap,
  DollarSign,
  Wrench,
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

const faqItems = [
  {
    question: "Can I migrate from Zapier to n8n later?",
    answer:
      "Yes, but it is not a one-click move. Zapier workflows need to be rebuilt in n8n since the platforms have different architectures. The migration is straightforward for a developer or consultant, but it does take time. If you think you might outgrow Zapier within a year, starting on n8n can save you the rework.",
  },
  {
    question: "Is n8n reliable enough for a business to depend on?",
    answer:
      "n8n Cloud is a managed hosted option that handles uptime and updates for you. Self-hosted n8n is as reliable as the server you put it on. Most small businesses do fine with n8n Cloud. If you self-host, you need someone who can maintain it.",
  },
  {
    question: "Do I need a developer to use n8n?",
    answer:
      "For basic workflows, no. n8n has a visual editor that non-technical users can learn. For anything involving custom logic, API integrations, or error handling, having a developer or consultant build and hand off the system is the more reliable path.",
  },
  {
    question: "What about Make (formerly Integromat)?",
    answer:
      "Make sits between Zapier and n8n in complexity and flexibility. It is a solid middle option. For most small businesses, the decision still comes down to: simple triggers (Zapier), moderate complexity (Make), or full control and self-hosting (n8n).",
  },
];

const N8nVsZapierSmallBusiness = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>n8n vs Zapier for Small Business | Dmytro AI</title>
        <meta
          name="description"
          content="Practical comparison of n8n and Zapier for small businesses. When Zapier is enough, when n8n is the better fit, and what to consider for cost, complexity, and control."
        />
        <link
          rel="canonical"
          href="https://www.dmytroai.com/n8n-vs-zapier-small-business"
        />
        <meta
          property="og:title"
          content="n8n vs Zapier for Small Business | Dmytro AI"
        />
        <meta
          property="og:description"
          content="When Zapier is enough, when n8n is the better fit, and what actually matters for small business automation."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.dmytroai.com/n8n-vs-zapier-small-business"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "n8n vs Zapier for Small Business",
            description:
              "Practical comparison of n8n and Zapier for small businesses. When Zapier is enough, when n8n is the better fit, and what to consider for cost, complexity, and control.",
            author: { "@id": "https://www.dmytroai.com/#person" },
            url: "https://www.dmytroai.com/n8n-vs-zapier-small-business",
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
        {/* Hero */}
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
                Comparison Guide
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                n8n vs Zapier for Small Business
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Both tools automate workflows. But they solve different problems
                at different price points. This page helps you figure out which
                one fits your business.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                No affiliate links. No vendor sponsorship. Just a practical
                breakdown based on building with both tools for real businesses.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  onClick={scrollToBooking}
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Help Choosing
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/guides">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg font-semibold rounded-xl"
                  >
                    All Guides
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick summary */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            The short version
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            If you need a quick decision framework, here it is:
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Zapier is probably enough if...
              </h3>
              <ul className="space-y-3">
                {[
                  "You need simple triggers: when X happens, do Y",
                  "You use mainstream SaaS tools (Gmail, Slack, HubSpot, Sheets)",
                  "You want zero setup and zero maintenance",
                  "Your automations are under 5 steps each",
                  "You are not technical and do not have a developer on call",
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
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                n8n is the better fit if...
              </h3>
              <ul className="space-y-3">
                {[
                  "Your workflows have branching logic, loops, or error handling",
                  "You need to connect to APIs that Zapier does not support natively",
                  "You want to own your data and not depend on a third-party cloud",
                  "Your Zapier bill is climbing past $100/month",
                  "You have a developer or consultant who can build and maintain it",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* What each tool actually is */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What each tool actually is
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Both are workflow automation platforms. But they come from different
            design philosophies.
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Zapier
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Cloud-only. No-code. Connects 6,000+ apps with a trigger-action
                model. You pick an event in one app, and Zapier does something
                in another app. Setup takes minutes for basic use cases.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Zapier is optimized for speed-to-value. If your automation is "when a form is submitted, add a row to a spreadsheet and send an email," Zapier does that well and fast.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                n8n
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Open-source. Visual workflow builder with a code option. Can be
                self-hosted or used via n8n Cloud. Supports branching, loops,
                sub-workflows, custom functions, and direct API calls.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                n8n is optimized for flexibility. If your automation needs
                conditional logic, data transformation, or connections to
                non-standard APIs, n8n handles that without workarounds.
              </p>
            </div>
          </div>
        </Section>

        {/* Comparison table */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Side-by-side comparison
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            The details that matter for a small business making this decision:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse max-w-4xl">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="py-3 pr-4 font-semibold text-foreground" />
                  <th className="py-3 px-4 font-semibold text-foreground">
                    Zapier
                  </th>
                  <th className="py-3 px-4 font-semibold text-foreground">
                    n8n
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Pricing", "Free tier (limited). Paid plans start ~$20/month. Costs scale with task volume.", "Free self-hosted. n8n Cloud starts ~$20/month. Costs scale with workflows, not tasks."],
                  ["Ease of use", "Very easy for simple automations. Non-technical users can build basic Zaps in minutes.", "Moderate learning curve. Visual editor is approachable, but advanced features need some technical comfort."],
                  ["Complexity ceiling", "Low to moderate. Multi-step Zaps work but get brittle. Branching is limited.", "High. Branching, loops, error handling, sub-workflows, and custom code are all built in."],
                  ["App integrations", "6,000+ native integrations. Strong coverage of mainstream SaaS.", "400+ native integrations. Any API can be connected via HTTP nodes."],
                  ["Data ownership", "Data passes through Zapier's cloud. You depend on their uptime and policies.", "Self-hosted: you own everything. Cloud: similar to Zapier but with export options."],
                  ["Maintenance", "Near-zero for simple Zaps. Zapier handles infrastructure.", "Self-hosted requires server maintenance. Cloud is managed. Either way, complex workflows need monitoring."],
                  ["Best for", "Quick, simple automations between popular tools.", "Custom, multi-step workflows with logic, APIs, or self-hosting requirements."],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/30">
                    <td className="py-3 pr-4 font-medium text-foreground">
                      {row[0]}
                    </td>
                    <td className="py-3 px-4">{row[1]}</td>
                    <td className="py-3 px-4">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Cost reality */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            The cost question
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Pricing is where this decision gets practical. Here is what actually
            happens as your usage grows:
          </p>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl">
            {[
              {
                icon: DollarSign,
                title: "Zapier costs scale with volume",
                body: "Zapier charges per task (each step in a Zap counts). A 5-step workflow processing 1,000 records/month uses 5,000 tasks. At higher volumes, monthly bills can reach $200 to $800+ quickly.",
              },
              {
                icon: Wrench,
                title: "n8n costs scale with complexity",
                body: "n8n Cloud charges by workflow count, not task volume. Self-hosted n8n costs whatever your server costs (typically $5 to $50/month). The tradeoff is that setup and maintenance take more effort.",
              },
              {
                icon: Clock,
                title: "The hidden cost is time",
                body: "Zapier saves time upfront but costs more at scale. n8n saves money at scale but costs more time upfront. For most small businesses, the break-even point is around $100 to $150/month in Zapier spend.",
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

        {/* When to care */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            When this decision actually matters
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            For most small businesses, the tool choice is less important than
            building the right workflow. But here are the scenarios where the
            platform decision genuinely changes outcomes:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
            {[
              {
                title: "High-volume lead processing",
                body: "If you process hundreds or thousands of leads per month, Zapier's per-task pricing adds up fast. n8n's flat pricing model makes more sense.",
              },
              {
                title: "Complex conditional logic",
                body: "If your workflow needs if/else branching, retries, or error handling, Zapier's linear model fights you. n8n handles this natively.",
              },
              {
                title: "Custom API connections",
                body: "If you need to connect to tools that Zapier does not support, n8n's HTTP request node lets you call any API directly.",
              },
              {
                title: "Data privacy requirements",
                body: "If your industry or clients require data to stay on your own servers, self-hosted n8n is the only option of the two.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="rounded-2xl border border-border/60 bg-card/80 p-5"
              >
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-3xl leading-relaxed">
            If none of these apply and your automations are straightforward,
            Zapier is a fine choice. Do not over-engineer the decision.
          </p>
        </Section>

        {/* Good fit / not a fit */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Who should use which
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Stick with Zapier
              </h3>
              <ul className="space-y-3">
                {[
                  "You are non-technical and want to manage automations yourself",
                  "Your workflows are simple and linear (under 5 steps)",
                  "You use popular SaaS tools with native Zapier support",
                  "Your monthly task volume is manageable on your current plan",
                  "You do not have specific data residency requirements",
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
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" />
                Move to n8n
              </h3>
              <ul className="space-y-3">
                {[
                  "Your Zapier bill is over $100/month and climbing",
                  "You need workflows with conditions, loops, or error handling",
                  "You connect to APIs or internal tools without native integrations",
                  "You want to own your automation infrastructure",
                  "You have a developer or consultant who can build and hand off systems",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Related */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            See how n8n works in practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            If you want to see what n8n-powered automation looks like for a real
            business, these case studies show the range:
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            {[
              {
                industry: "Lead generation",
                headline: "50+ qualified leads per day at $0.29 each",
                body: "An automated n8n + AI pipeline replaced hours of manual Instagram prospecting with a system that discovers, qualifies, and delivers leads daily.",
                link: "/case-studies/instagram-lead-generation",
              },
              {
                industry: "E-commerce",
                headline: "5,600+ leads organized with automated follow-up",
                body: "A CRM build with n8n-powered automations organized scattered leads and tripled the team's effective follow-up capacity.",
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
          <div className="mt-6 flex flex-wrap gap-4">
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
              Learn about automation consulting
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        {/* FAQ */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-center">
            Common questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-center leading-relaxed">
            Answers to the things businesses ask most about n8n vs Zapier
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

        {/* CTA / Booking */}
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
                Not sure which tool fits your business?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                Book a 30-minute call. We will look at your workflows, your
                current tools, and figure out the right automation platform and
                approach together.
              </p>
              <p className="text-sm text-muted-foreground">
                No sales pitch. Just a clear recommendation based on your
                specific situation.
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
                { icon: CheckCircle2, text: "Platform recommendation for your use case" },
                { icon: ArrowRight, text: "Leave with a clear next step" },
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

export default N8nVsZapierSmallBusiness;
