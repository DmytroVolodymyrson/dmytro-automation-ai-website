import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  AlertTriangle,
  Zap,
  XCircle,
  Phone,
  CalendarCheck,
  MessageSquare,
  Thermometer,
  Wrench,
  TrendingUp,
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
    question: "How long does it take to set up AI automation for an HVAC company?",
    answer:
      "Most HVAC automation builds go live in 1 to 3 weeks. A lead follow-up system is typically 5 to 7 days. A full package with voice agent, scheduling, and CRM automation takes 2 to 3 weeks. You see results the day it goes live.",
  },
  {
    question: "Will this work with our existing scheduling and CRM tools?",
    answer:
      "Almost always. I build on platforms like n8n, GoHighLevel, and standard APIs. If you're using ServiceTitan, Housecall Pro, Jobber, or another field service tool, the automation plugs into what you already have. No rip-and-replace required.",
  },
  {
    question: "What happens to calls when the AI can't answer a question?",
    answer:
      "The voice agent is built to handle common scenarios: booking, rescheduling, basic service questions, and after-hours messaging. When a call falls outside its scope, it routes to your team with full context — who called, what they need, and urgency level. Nothing gets dropped.",
  },
  {
    question: "Do we need to be technical to manage this?",
    answer:
      "No. Every system comes with a dashboard your team can operate without touching code. I document how it works, train your team on the basics, and handle all maintenance. You run your business; the automation runs in the background.",
  },
  {
    question: "How much does this cost compared to hiring another dispatcher or CSR?",
    answer:
      "A typical HVAC automation build runs $2K to $6K one-time, with optional monthly maintenance. Compare that to $35K to $50K per year for a full-time employee, plus benefits and training. The automation handles the repetitive work 24/7 without sick days or turnover.",
  },
  {
    question: "What if we're a smaller shop — just 2 to 5 trucks?",
    answer:
      "That's actually the sweet spot. Smaller HVAC companies feel the pain of missed calls and slow follow-up the most because every lead matters more. You don't need a big operation to benefit. If you're losing even a few jobs a month to slow response, automation pays for itself fast.",
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
const AiAutomationHvac = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Automation for HVAC Companies | Dmytro AI</title>
        <meta
          name="description"
          content="AI automation for HVAC companies. Automate lead follow-up, after-hours calls, scheduling, and dispatch so you stop losing jobs to slow response times."
        />
        <link
          rel="canonical"
          href="https://www.dmytroai.com/ai-automation-hvac"
        />
        <meta
          property="og:title"
          content="AI Automation for HVAC Companies | Dmytro AI"
        />
        <meta
          property="og:description"
          content="Stop losing HVAC jobs to slow follow-up. AI automation for calls, scheduling, and lead management."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.dmytroai.com/ai-automation-hvac"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "AI Automation for HVAC Companies",
            description:
              "AI automation consulting for HVAC businesses. Custom systems for lead follow-up, after-hours call handling, scheduling, dispatch, and CRM workflows.",
            provider: { "@id": "https://www.dmytroai.com/#person" },
            url: "https://www.dmytroai.com/ai-automation-hvac",
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
                <Thermometer className="w-4 h-4" />
                HVAC Automation
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                AI Automation for HVAC Companies
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Stop losing jobs to missed calls and slow follow-up. Automate
                lead response, after-hours call handling, scheduling, and
                dispatch — so your team focuses on the work, not the phones.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Below: what HVAC automation looks like in practice, where the
                biggest wins are, and how to tell if your shop is ready.
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

        {/* ── The problem ────────────────────────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Where HVAC companies lose the most revenue
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Most HVAC businesses don't have a service problem — they have a
            response time problem. The work is there. The leads come in. But
            the gap between inquiry and first contact is where jobs disappear:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Missed after-hours calls",
                body: "A homeowner's AC dies at 9 PM. They call three companies. The one that answers — or calls back first — gets the job. If that's not you, it's your competitor.",
              },
              {
                icon: Clock,
                title: "Slow lead follow-up",
                body: "Web form submitted at 2 PM. Your team gets to it the next morning. By then the homeowner already booked someone else. Speed to lead is the single biggest factor in HVAC conversion.",
              },
              {
                icon: MessageSquare,
                title: "No systematic nurture",
                body: "Seasonal maintenance reminders, quote follow-ups, and reactivation of past customers — most shops know they should do it, but nobody has time. Those are jobs sitting in your CRM, waiting.",
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

        {/* ── What gets automated ────────────────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What HVAC automation actually replaces
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            These are the workflows I build most often for HVAC companies. Each
            one starts manual and ends with a system that runs without daily
            attention:
          </p>
          <div className="grid gap-5 sm:grid-cols-2 max-w-4xl">
            {[
              {
                icon: Phone,
                title: "24/7 AI call handling",
                body: "An AI voice agent answers every call — day, night, weekends, holidays. Books appointments, captures service details, and routes emergencies to on-call techs. No more voicemail black holes.",
              },
              {
                icon: Zap,
                title: "Instant lead response",
                body: "Web form or call comes in, and the prospect gets a text and email within 60 seconds. Automated qualification asks the right questions: system type, issue, urgency, address. Your dispatcher gets a ready-to-schedule lead.",
              },
              {
                icon: CalendarCheck,
                title: "Scheduling and reminders",
                body: "Automated booking flows that sync with your dispatch calendar. Confirmation texts, day-before reminders, and on-the-way alerts that cut no-shows and same-day cancellations.",
              },
              {
                icon: MessageSquare,
                title: "Quote and estimate follow-up",
                body: "Sent a quote three days ago? Automated follow-up sequences nudge the homeowner at the right intervals — no manual tracking, no forgotten quotes sitting in a spreadsheet.",
              },
              {
                icon: Thermometer,
                title: "Seasonal maintenance campaigns",
                body: "Automatic reminders to your existing customer base when tune-up season hits. Segment by system type, last service date, and location. Fill your shoulder-season schedule without cold calling.",
              },
              {
                icon: TrendingUp,
                title: "Review and referral automation",
                body: "After every completed job, trigger a review request sequence. Happy customers get a direct link to leave a Google review. The ones who aren't happy get routed to your team first.",
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

        {/* ── Signs your shop is ready ───────────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Signs your HVAC business is ready for automation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            You don't need to be a large operation. These patterns mean
            automation will have a meaningful impact on your revenue:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
            {[
              "You're missing calls after hours, on weekends, or when your team is on jobs.",
              "Leads sit in your inbox or CRM for hours before someone follows up.",
              "You send quotes but don't have a system for follow-up beyond 'I'll call them back.'",
              "Seasonal maintenance reminders go out late, or not at all.",
              "You've thought about hiring a CSR or dispatcher mainly to answer phones and chase leads.",
              "Your Google reviews are good but you know you could have more if you asked consistently.",
            ].map((sign, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 px-5 py-4"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-foreground leading-relaxed">
                  {sign}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            If three or more of these sound familiar, you're probably losing
            jobs every month to problems automation solves overnight.
          </p>
        </Section>

        {/* ── What results look like ─────────────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What this looks like in practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            HVAC is a service business, and service businesses share the same
            core automation wins. Here's what I've built for similar companies:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                industry: "Restaurant",
                headline: "100% of after-hours calls answered",
                body: "A NYC restaurant was missing reservations every night after close. A 24/7 AI voice agent now handles all calls, books tables, and routes complex requests. The same architecture applies to HVAC: every call answered, every lead captured.",
                link: "/case-studies/paris-cafe-voice-agent",
              },
              {
                industry: "Info Business",
                headline: "50+ qualified leads per day",
                body: "Manual prospecting took hours and produced a handful of leads. An automated pipeline now discovers, qualifies, and delivers leads daily at $0.29 each. For HVAC, the same lead qualification logic routes the right jobs to the right techs.",
                link: "/case-studies/instagram-lead-generation",
              },
              {
                industry: "E-commerce",
                headline: "3x follow-up capacity",
                body: "5,600+ leads sitting in spreadsheets with no systematic outreach. A full CRM build with automated sequences organized every contact and tripled effective capacity. HVAC companies with years of past customers see similar results from reactivation campaigns.",
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
          <div className="mt-8">
            <Link
              to="/case-studies"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              View all case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        {/* ── Consultant vs agency vs DIY ────────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Hiring a consultant vs. an agency vs. doing it yourself
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            There's more than one way to get automation into your HVAC business.
            Here's an honest comparison:
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
                    Marketing agency
                  </th>
                  <th className="py-3 px-4 font-semibold text-foreground">
                    DIY (Zapier, ChatGPT)
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Diagnosis", "Maps your actual dispatch flow", "Sells a package", "You figure it out yourself"],
                  ["Build speed", "1–3 weeks typical", "4–8 weeks", "Weeks to months of tinkering"],
                  ["Cost", "$2K–$6K one-time", "$5K–$25K+", "Low upfront, high time cost"],
                  ["HVAC knowledge", "Understands service-business operations", "Generic marketing templates", "Limited by platform"],
                  ["Ongoing support", "Direct access to the builder", "Account manager (not the builder)", "Community forums"],
                  ["Best for", "Shops that want a working system fast", "Large companies with big budgets", "Simple, single-step automations"],
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
          <p className="text-sm text-muted-foreground mt-6 max-w-3xl leading-relaxed">
            If you just need a Zapier zap to send a text when a form comes in,
            DIY is fine. If you want a system that handles calls, qualifies
            leads, books appointments, follows up on quotes, and runs seasonal
            campaigns — that's consultant territory.
          </p>
        </Section>

        {/* ── How it works ───────────────────────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What working together looks like
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            No long proposals. No months of discovery. Here's the actual
            process:
          </p>
          <div className="max-w-3xl space-y-6">
            {[
              {
                step: "1",
                title: "30-minute strategy call",
                body: "We walk through your current lead flow, dispatch process, and biggest bottlenecks. Free, no commitment. You'll leave with a clear picture of what's worth automating first.",
              },
              {
                step: "2",
                title: "Scope and quote",
                body: "Within 48 hours you get a clear scope document: what gets built, what it connects to, timeline, and fixed price. No hourly billing surprises.",
              },
              {
                step: "3",
                title: "Build (1–3 weeks)",
                body: "I build the system, test it against real scenarios, and share progress along the way. You'll see working pieces before the final handoff.",
              },
              {
                step: "4",
                title: "Handoff and training",
                body: "Your team gets documentation, a walkthrough, and a dashboard they can manage. 30-day support included. Optional monthly retainer for ongoing optimization and seasonal campaign management.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex gap-5"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-primary">
                    {item.step}
                  </span>
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

        {/* ── Good fit / not a fit ───────────────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Good fit / not a fit
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            I'd rather be upfront now than waste your time on the call:
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Good fit
              </h3>
              <ul className="space-y-3">
                {[
                  "You're running 2+ trucks and getting regular inbound leads",
                  "You know you're missing calls or following up too slowly",
                  "You have a CRM or dispatch tool (even if it's messy)",
                  "You want a system that runs without babysitting",
                  "You're ready to invest in infrastructure, not just another tool trial",
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
                Not a fit
              </h3>
              <ul className="space-y-3">
                {[
                  "You're just starting out and don't have steady lead flow yet",
                  "You need enterprise-scale fleet management for 50+ trucks",
                  "You're looking for the cheapest option regardless of quality",
                  "You want a full-time in-house developer, not project-based consulting",
                  "You need help with marketing strategy, not operational automation",
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
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-center">
            Common questions from HVAC owners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-center leading-relaxed">
            Straight answers about AI automation for HVAC businesses
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
                Ready to stop losing jobs to slow follow-up?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                Book a 30-minute call. We'll look at your current lead flow,
                identify the highest-impact first move, and you'll leave with a
                concrete direction — whether we work together or not.
              </p>
              <p className="text-sm text-muted-foreground">
                No hard sell. No vague AI buzzwords. Just a clear look at where
                automation will make the biggest difference for your shop.
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
                { icon: Wrench, text: "HVAC-specific automation plan" },
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

export default AiAutomationHvac;
