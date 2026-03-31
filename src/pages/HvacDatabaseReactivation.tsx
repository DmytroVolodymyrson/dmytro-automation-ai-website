import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Database,
  DollarSign,
  FileText,
  MessageSquare,
  Phone,
  RefreshCw,
  Send,
  Users,

  XCircle,
  AlertTriangle,
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
/*  FAQ items — objections specific to list quality, timing, workload  */
/* ------------------------------------------------------------------ */
const faqItems = [
  {
    question: "Our database is old. Most of these contacts are probably dead leads.",
    answer:
      "That's actually the norm. In any reactivation campaign, the majority of contacts won't respond, and that's fine. The economics work because the ones who do respond are already pre-qualified: they've used your services before or asked for a quote. Even a small percentage of a large list produces meaningful revenue because you're not paying to acquire these leads again.",
  },
  {
    question: "We don't want to annoy people who haven't heard from us in years.",
    answer:
      "The messaging isn't pushy or sales-heavy. It's framed as a check-in: seasonal maintenance reminder, warranty follow-up, or a simple 'still need that quote?' The tone is helpful, not aggressive. People who aren't interested simply don't reply. No one gets blasted with 10 follow-ups. And the ones who do reply are often relieved someone reached out because they've been meaning to schedule service.",
  },
  {
    question: "How much of our team's time does this take to run?",
    answer:
      "After setup, close to zero. The system handles sequencing, timing, and follow-up automatically. Your team only gets involved when a lead responds and is ready to book. No manual texting, no spreadsheet tracking, no 'who was supposed to call this person back?' conversations.",
  },
  {
    question: "What if our CRM data is messy? Duplicates, missing info, bad numbers?",
    answer:
      "I clean and deduplicate your list before anything goes out. Bad phone numbers get flagged, duplicates get merged, and contacts are segmented by type (past customer vs. old estimate) so messaging is relevant. You don't need a perfect CRM to start. Most HVAC companies don't have one.",
  },
  {
    question: "How quickly do we see results?",
    answer:
      "Timelines vary by list size and segment, but responses typically start coming in once the first wave of outreach lands. A full reactivation cycle can take several weeks depending on how large your database is.",
  },
  {
    question: "What does this cost compared to running ads?",
    answer:
      "A reactivation campaign is a one-time build with no ongoing ad spend. You're working contacts you already paid to acquire, so there's no new cost per lead. Whether it outperforms your current ad spend depends on your list size and quality, which is something we can assess on the call.",
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
const HvacDatabaseReactivation = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>HVAC Database Reactivation | Turn Old Leads Into Booked Jobs | Dmytro AI</title>
        <meta
          name="description"
          content="Reactivate your HVAC database: old estimates, past customers, and dormant leads. No new ad spend. Done-for-you system that turns contacts you already paid for into booked jobs."
        />
        <link
          rel="canonical"
          href="https://www.dmytroai.com/hvac-database-reactivation"
        />
        <meta
          property="og:title"
          content="HVAC Database Reactivation | Turn Old Leads Into Booked Jobs"
        />
        <meta
          property="og:description"
          content="You already paid for these leads. A done-for-you reactivation system turns dormant HVAC contacts into booked jobs. No new ad spend required."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.dmytroai.com/hvac-database-reactivation"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "HVAC Database Reactivation",
            description:
              "Done-for-you database reactivation for residential HVAC companies. Turns old estimates and past customers into booked jobs without new ad spend.",
            provider: { "@id": "https://www.dmytroai.com/#person" },
            url: "https://www.dmytroai.com/hvac-database-reactivation",
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
                <Database className="w-4 h-4" />
                HVAC Database Reactivation
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                You already paid for these leads.{" "}
                <span className="text-gradient">Let's turn them into jobs.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                Your CRM is full of old estimates, past customers, and leads that
                went cold. They already know your company. A done-for-you
                reactivation system reaches out, re-engages, and books the ones
                who are ready. No new ad spend.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Built for residential HVAC companies with 500+ contacts
                sitting untouched in ServiceTitan, Housecall Pro, Jobber, or
                spreadsheets.
              </p>
              <Button
                size="lg"
                onClick={scrollToBooking}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Free Database Review Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ── Problem: money sitting in the CRM ────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            There are probably bookable jobs sitting in your CRM
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Most HVAC companies have the same pattern: a database full of
            contacts that nobody is working. Not because the leads are bad, but
            because nobody has time. Some of those contacts still need work done.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "Estimates that never closed",
                body: "You sent a quote six months ago. The homeowner said 'let me think about it' and you never heard back. That estimate is still sitting in your CRM. Many of them still need the work done. They just need a reason to re-engage.",
              },
              {
                icon: Users,
                title: "Past customers who haven't called",
                body: "You installed their system two years ago. They haven't scheduled maintenance since. They're not unhappy. They just forgot. A well-timed reminder turns a dormant customer into a recurring revenue source.",
              },
              {
                icon: Phone,
                title: "Leads that went cold",
                body: "Someone called, asked about pricing, and never booked. Your team moved on. But circumstances change: budgets free up, systems break down, seasons turn. The lead that said no in March might say yes in September.",
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

        {/* ── Two revenue buckets ──────────────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Two revenue buckets hiding in your database
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Reactivation isn't one-size-fits-all. Old estimates and past
            customers need different messaging and different timing:
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-primary/20 bg-primary/5 p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Bucket 1: Old estimates
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                These contacts already expressed intent. They asked for a quote,
                got one, and didn't close. The system reaches out with a simple
                check-in:
              </p>
              <ul className="space-y-2">
                {[
                  "\"Hi [Name], we quoted your [system type] replacement back in [month]. Still on your radar?\"",
                  "Timed follow-up sequence if no response",
                  "Books directly to your calendar when they say yes",
                  "Segments by estimate size so your team knows where to focus",
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.4 }}
              className="rounded-2xl border border-primary/20 bg-primary/5 p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4">
                <RefreshCw className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Bucket 2: Past customers
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                People who already trust your work. They just haven't thought
                about their HVAC system since the last visit. The system brings
                them back:
              </p>
              <ul className="space-y-2">
                {[
                  "Seasonal maintenance reminders based on last service date",
                  "System age check-ins for equipment approaching end of life",
                  "\"It's been [X months] since your last tune-up\" (personalized, not mass-blast)",
                  "Re-engagement messaging that gives them a reason to book now",
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
            </motion.div>
          </div>
        </Section>

        {/* ── How the reactivation system works ────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            How the reactivation system works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            This is a done-for-you build. You don't need to learn software, write
            messages, or manage sequences. Here's the process:
          </p>
          <div className="max-w-3xl space-y-6">
            {[
              {
                step: "1",
                title: "Export and clean your database",
                body: "I pull your contact list from whatever system you use: ServiceTitan, Housecall Pro, Jobber, GoHighLevel, even spreadsheets. Duplicates get merged, bad numbers get flagged, and contacts are segmented into the two buckets: old estimates and past customers.",
              },
              {
                step: "2",
                title: "Build targeted outreach sequences",
                body: "Each bucket gets its own messaging. Old estimates get a direct check-in about their specific quote. Past customers get a seasonal or maintenance-based angle. Messages go out via text and email in a natural cadence, not all at once.",
              },
              {
                step: "3",
                title: "Launch and monitor responses",
                body: "The first wave goes out. Responses route directly to your team with full context: who the contact is, what they originally needed, and what they said. Your team just books the job. No guesswork.",
              },
              {
                step: "4",
                title: "Optimize and expand",
                body: "After the first cycle, we review what converted: which segments, which messages, which timing. Then we expand to the rest of your list and set up ongoing reactivation so new dormant contacts get worked automatically.",
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

        {/* ── Risk reversal ────────────────────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Why reactivation before buying more leads
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Most HVAC companies default to more ad spend when revenue slows
            down. But you're sitting on contacts that already know your name.
            Here's why working them first makes more sense:
          </p>
          <div className="grid gap-5 sm:grid-cols-2 max-w-4xl">
            {[
              {
                icon: DollarSign,
                title: "Zero ad spend",
                body: "You already paid to acquire these contacts. Reactivation works them without any new cost per lead.",
              },
              {
                icon: Clock,
                title: "Faster than new lead generation",
                body: "You're reaching people who already know you. No audience building, no brand awareness phase, no waiting for SEO to compound.",
              },
              {
                icon: Send,
                title: "One-time build, no retainer",
                body: "This is a project, not a subscription. Run it once, or set it to run continuously. Your call.",
              },
              {
                icon: Database,
                title: "Warm contacts, not cold calls",
                body: "Past customers already trust your work. Old estimates already know your name. Either way, you're reaching people with context, not strangers seeing your Google ad for the first time.",
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

        {/* ── Broader HVAC link ────────────────────────────────── */}
        <Section className="bg-secondary/30">
          <div className="max-w-3xl">
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Database reactivation is one piece of the puzzle. If you also need
              help with missed-call handling, lead follow-up, or scheduling
              automation, those are separate builds I offer for HVAC companies.
            </p>
            <Link
              to="/ai-automation-hvac"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              See all HVAC automation services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        {/* ── Good fit / not a fit ─────────────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Good fit / not a fit
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Database reactivation works well for a specific type of HVAC
            business. Here's how to tell if it's right for you:
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Good fit
              </h3>
              <ul className="space-y-3">
                {[
                  "You have 500+ contacts in your CRM, dispatch tool, or spreadsheets",
                  "You've been in business 2+ years with a history of estimates and service calls",
                  "You know there are old quotes and past customers you're not following up with",
                  "You're a residential HVAC company (or residential-heavy mix)",
                  "You want revenue without adding ad spend or hiring",
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
                  "You're a brand-new company with fewer than 100 contacts total",
                  "You do exclusively commercial/industrial HVAC with long procurement cycles",
                  "Your database is truly empty: no CRM, no records, no spreadsheets",
                  "You're looking for new lead generation, not reactivation of existing contacts",
                  "You need a full marketing overhaul, not a targeted campaign",
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

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-center">
            Common questions about database reactivation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-center leading-relaxed">
            Straight answers about list quality, timing, and what to expect
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

        {/* ── Final CTA / Booking ──────────────────────────────── */}
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
                Find out what's sitting in your database
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                Book a 30-minute call. I'll ask about your database, help you
                estimate what's worth reactivating, and explain how a campaign
                would work for your specific list. No pitch, no pressure. If
                reactivation isn't a good fit, I'll tell you.
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
                { icon: Clock, text: "30-minute database review call" },
                { icon: MessageSquare, text: "Honest assessment of your list" },
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
                title="Book a Database Reactivation Call"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HvacDatabaseReactivation;
