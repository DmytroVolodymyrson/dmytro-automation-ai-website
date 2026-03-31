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
  TrendingUp,
  Bot,
  DollarSign,
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
    question: "Is AI automation mature enough for HVAC companies to use today?",
    answer:
      "Yes, but not all of it. Lead follow-up automation, missed call text-back, appointment scheduling, and CRM workflows are production-ready and used by thousands of service businesses. Fully autonomous dispatch or AI that diagnoses equipment remotely — that's still experimental. The key is starting with what works now and has clear ROI.",
  },
  {
    question: "How is this different from just using a CRM like ServiceTitan or Housecall Pro?",
    answer:
      "CRMs store data and manage workflows, but they don't act on their own. Automation connects your CRM to actions: a missed call triggers a text, a new lead gets an instant follow-up sequence, a completed job fires off a review request. Think of automation as the layer that makes your CRM actually do things without someone clicking buttons.",
  },
  {
    question: "What size HVAC company benefits most from automation?",
    answer:
      "Companies running 2 to 15 trucks tend to see the biggest impact. You're big enough to have real lead volume but small enough that one missed call or slow follow-up actually hurts. Enterprise operations (50+ trucks) have different needs — usually dedicated software teams and custom integrations.",
  },
  {
    question: "Will AI replace our office staff or dispatchers?",
    answer:
      "Not likely, and that's not the goal. Automation handles the repetitive, time-sensitive tasks your team doesn't have capacity for — answering calls at 10 PM, sending follow-up texts within 60 seconds, reminding customers about maintenance. Your people still handle complex scheduling, customer relationships, and judgment calls. They just stop drowning in busywork.",
  },
  {
    question: "How much should an HVAC company expect to spend on automation?",
    answer:
      "A single workflow like missed call text-back might run $1K to $2K to build. A more complete system — lead follow-up, scheduling, review requests, seasonal campaigns — typically runs $3K to $6K one-time with optional monthly maintenance. Compare that to the cost of one missed job per week for a year.",
  },
  {
    question: "What's the typical ROI timeline for HVAC automation?",
    answer:
      "Most shops see the automation pay for itself within the first month or two. The math is straightforward: if your average job is worth $500 to $2,000 and automation captures even 2 to 3 extra jobs per month that would have been lost to slow response, the investment is recovered quickly. But results vary — it depends on your lead volume, current response time, and what you automate first.",
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
const AiAutomationForHvacCompanies = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Automation for HVAC Companies — What's Real and What's Hype | Dmytro AI</title>
        <meta
          name="description"
          content="Honest overview of AI automation for HVAC companies. What actually works, what's overhyped, where to start, and realistic ROI expectations for shops of all sizes."
        />
        <link
          rel="canonical"
          href="https://www.dmytroai.com/ai-automation-for-hvac-companies"
        />
        <meta
          property="og:title"
          content="AI Automation for HVAC Companies — What's Real and What's Hype | Dmytro AI"
        />
        <meta
          property="og:description"
          content="Honest overview of AI automation for HVAC companies. What works, what doesn't, and where to start."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.dmytroai.com/ai-automation-for-hvac-companies"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            name: "AI Automation for HVAC Companies — What's Real and What's Hype",
            description:
              "An honest overview of AI automation for HVAC companies: what works today, what's overhyped, common starting points, and realistic ROI expectations.",
            author: { "@id": "https://www.dmytroai.com/#person" },
            url: "https://www.dmytroai.com/ai-automation-for-hvac-companies",
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
        {/* -- Hero -------------------------------------------------- */}
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
                HVAC + AI Overview
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                AI Automation for HVAC Companies — What's Real and What's Hype
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Every HVAC vendor is talking about AI now. Most of it is
                marketing. This page breaks down what actually works for HVAC
                companies today, where the real wins are, and what you can
                safely ignore.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                No inflated stats. No "10x your revenue" claims. Just an honest
                look at where automation fits in the HVAC business model.
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

        {/* -- What AI automation means for HVAC --------------------- */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What "AI automation" actually means for an HVAC company
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-6 leading-relaxed">
            Strip away the buzzwords and AI automation for HVAC boils down to
            this: software that handles repetitive, time-sensitive tasks your
            team doesn't have the bandwidth for.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            It's not a robot replacing your technicians. It's not a chatbot
            pretending to be human. In practice, it's a set of workflows that
            run in the background — answering calls after hours, texting leads
            back instantly, sending reminders before appointments, following up
            on quotes that went cold. The stuff that should happen every time
            but doesn't because your team is busy running service calls.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Communication automation",
                body: "Instant text-backs on missed calls, automated follow-up sequences on new leads, appointment confirmations and reminders. The communication that makes or breaks whether a lead becomes a job.",
              },
              {
                icon: CalendarCheck,
                title: "Scheduling and dispatch workflows",
                body: "AI that books appointments from inbound calls or web forms, syncs with your calendar, and sends the right confirmations. Not replacing your dispatcher — handling the intake so they can focus on routing.",
              },
              {
                icon: TrendingUp,
                title: "Revenue recovery",
                body: "Reactivating past customers for seasonal maintenance, following up on unsold estimates, and requesting reviews after completed jobs. Revenue that's already in your database, just not being captured.",
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

        {/* -- Real vs overhyped ------------------------------------- */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Real vs. overhyped: an honest breakdown
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Not everything labeled "AI" is worth your money. Here's what
            delivers real results for HVAC companies today versus what's still
            more marketing than substance.
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Proven and delivering ROI
              </h3>
              <ul className="space-y-3">
                {[
                  "Missed call text-back — instant response when nobody can answer the phone",
                  "Lead follow-up sequences — automated texts and emails within 60 seconds of inquiry",
                  "Appointment booking from inbound calls or web forms",
                  "Review request automation after completed jobs",
                  "Seasonal maintenance reminders to your existing customer base",
                  "Quote follow-up sequences for estimates that haven't closed",
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
                <AlertTriangle className="w-5 h-5 text-muted-foreground" />
                Overhyped or not ready yet
              </h3>
              <ul className="space-y-3">
                {[
                  "AI that diagnoses HVAC equipment remotely from sensor data — interesting but not reliable enough for most shops",
                  "Fully autonomous dispatch that replaces your dispatcher entirely — too many edge cases",
                  "\"AI marketing\" that writes all your content and runs your ads — generic output that doesn't convert",
                  "Predictive maintenance for residential — works in commercial/industrial, not enough data for residential",
                  "Chatbots that \"handle everything\" — most customers still prefer a text or call, not a chat widget",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <XCircle className="w-4 h-4 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* -- Where HVAC companies start ---------------------------- */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Where most HVAC companies start
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            You don't need to automate everything at once. In our experience,
            HVAC companies get the most impact by starting with one of these
            three entry points — then expanding once the first system is
            running:
          </p>
          <div className="max-w-3xl space-y-6">
            {[
              {
                step: "1",
                title: "Missed call text-back",
                body: "The fastest win. When a call goes unanswered, an automatic text goes out within seconds: \"Hey, we missed your call. How can we help?\" This alone recovers leads that would have called your competitor next. Most shops set this up in under a week.",
                link: "/hvac-missed-call-text-back",
                linkText: "How missed call text-back works for HVAC",
              },
              {
                step: "2",
                title: "Lead follow-up automation",
                body: "Every new lead — whether from a web form, phone call, or Google LSA — gets an instant response and a multi-step follow-up sequence. No more leads sitting in your inbox until someone has time to call back. This is where most of the revenue recovery happens.",
                link: "/hvac-lead-follow-up-automation",
                linkText: "HVAC lead follow-up automation details",
              },
              {
                step: "3",
                title: "AI appointment scheduling",
                body: "An AI agent that handles the back-and-forth of booking service calls. It checks availability, confirms time windows, sends reminders, and handles rescheduling. Takes the scheduling load off your front desk without losing the personal touch.",
                link: "/ai-appointment-setter-for-hvac",
                linkText: "AI appointment setter for HVAC",
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
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {item.body}
                  </p>
                  <Link
                    to={item.link}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                  >
                    {item.linkText}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* -- ROI expectations -------------------------------------- */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            ROI expectations — honest numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Anyone promising "10x ROI guaranteed" is selling you something. Here
            is how the economics actually work for most HVAC companies:
          </p>
          <div className="grid gap-5 sm:grid-cols-2 max-w-4xl">
            {[
              {
                icon: DollarSign,
                title: "The math on missed calls",
                body: "If your average service call is worth $400 to $1,500 and you're missing even a few calls per week that go to competitors, the lost revenue adds up fast. A missed call text-back system costs $1K to $2K to build. For most shops, the payback period is short.",
              },
              {
                icon: Clock,
                title: "Speed-to-lead economics",
                body: "Lead response studies consistently show that faster follow-up improves conversion — responding in minutes rather than hours can make a significant difference. Automation closes that gap to under 60 seconds. Even a modest improvement in conversion rate compounds quickly across your lead volume.",
              },
              {
                icon: Bot,
                title: "Staff cost comparison",
                body: "A full-time CSR costs $35K to $50K per year plus benefits. Automation doesn't replace them, but it handles the after-hours, weekend, and overflow work they can't. A typical automation build runs $2K to $6K one-time. The question isn't \"automation or hiring\" — it's \"how do I get more from the team I already have?\"",
              },
              {
                icon: TrendingUp,
                title: "Database reactivation",
                body: "Most HVAC companies have hundreds or thousands of past customers in their CRM who haven't been contacted in months. A seasonal maintenance reactivation campaign can convert a meaningful percentage of the list. Even a modest response rate on a large list translates to real revenue from contacts you already own.",
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
          <p className="text-sm text-muted-foreground mt-6 max-w-3xl leading-relaxed">
            The caveat: these numbers depend on your lead volume, average job
            value, and current response time. A shop running 10 trucks with
            strong inbound will see different results than a 2-truck operation
            just starting to get leads from Google. The strategy call below
            helps you figure out which numbers apply to your situation.
          </p>
        </Section>

        {/* -- What results look like -------------------------------- */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Results from similar service businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            These case studies are from non-HVAC service businesses, but the
            automation patterns are identical — lead follow-up, call handling,
            and CRM workflows translate directly:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                industry: "Restaurant",
                headline: "100% of after-hours calls answered",
                body: "A NYC restaurant was losing reservations every night after close. A 24/7 AI voice agent now handles all calls and books tables. For HVAC, the same system answers service requests and captures emergency calls around the clock.",
                link: "/case-studies/paris-cafe-voice-agent",
              },
              {
                industry: "Info Business",
                headline: "50+ qualified leads per day",
                body: "Manual prospecting took hours and produced a handful of leads. An automated pipeline now discovers, qualifies, and delivers leads daily. The same lead qualification logic helps HVAC companies route the right jobs to the right techs instantly.",
                link: "/case-studies/instagram-lead-generation",
              },
              {
                industry: "E-commerce",
                headline: "3x follow-up capacity",
                body: "5,600+ leads sitting in spreadsheets with no outreach. A full CRM build with automated sequences organized every contact and tripled capacity. HVAC companies with years of past customers see similar results from reactivation campaigns.",
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
              to="/ai-automation-hvac"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              HVAC automation services
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/hvac-lead-follow-up-automation"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              HVAC lead follow-up automation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/hvac-missed-call-text-back"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              HVAC missed call text back
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/ai-appointment-setter-for-hvac"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              AI appointment setter for HVAC
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/hvac-database-reactivation"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              HVAC database reactivation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        {/* -- FAQ --------------------------------------------------- */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-center">
            Common questions about AI automation for HVAC
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-center leading-relaxed">
            Straight answers — no jargon, no hype
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

        {/* -- Final CTA / Booking ----------------------------------- */}
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
                Want to know what automation makes sense for your shop?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                Book a 30-minute call. We'll look at your current setup, identify
                the highest-impact starting point, and you'll leave with a clear
                plan — whether we work together or not.
              </p>
              <p className="text-sm text-muted-foreground">
                No pitch deck. No generic proposal. Just a focused conversation
                about your specific situation.
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
                { icon: Thermometer, text: "HVAC-specific recommendations" },
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

export default AiAutomationForHvacCompanies;
