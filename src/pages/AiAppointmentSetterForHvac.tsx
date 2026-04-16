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
  Phone,
  CalendarCheck,
  MessageSquare,
  Thermometer,
  Wrench,
  Calendar,
  RefreshCw,
  AlertCircle,
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
    question: "Can the AI appointment setter handle emergency vs. routine scheduling?",
    answer:
      "Yes. The system is configured with rules for your business: emergencies (no heat in winter, gas smell, flooding) get flagged and routed to your on-call team immediately. Routine maintenance and non-urgent repairs go through the normal scheduling flow. You define what counts as an emergency — the AI follows those rules consistently every time.",
  },
  {
    question: "How does this connect to our existing dispatch calendar?",
    answer:
      "It depends on your setup. If you're using ServiceTitan, Housecall Pro, Jobber, or a similar tool, the AI books directly into your calendar via API. If you're using Google Calendar or a simpler system, it syncs there. The key requirement is that your calendar has an API or webhook capability. During the strategy call, we'll confirm compatibility with your specific tools.",
  },
  {
    question: "What happens when the schedule is full?",
    answer:
      "The AI doesn't overbook. When your available slots are taken, it offers the next available window and asks if the customer wants to be waitlisted. If it's urgent, it routes to your team for a manual scheduling decision. You set the capacity rules — the AI enforces them.",
  },
  {
    question: "Does this replace our front desk or CSR?",
    answer:
      "No. It handles the high-volume, repetitive scheduling work — especially after hours, during peak call times, and on weekends. Your front desk still handles complex scheduling, customer complaints, rescheduling with specific tech requirements, and anything that needs a human judgment call. The AI handles the majority of scheduling interactions that are straightforward.",
  },
  {
    question: "Can it handle rescheduling and cancellations?",
    answer:
      "Yes. If a customer texts or calls to reschedule, the AI can pull up their existing appointment, offer alternative times, and update the calendar. For cancellations, it confirms the cancellation, frees the slot, and can optionally trigger a follow-up to rebook. All changes sync back to your dispatch calendar in real time.",
  },
  {
    question: "What about time windows and service areas?",
    answer:
      "The system respects your service area boundaries and time window rules. If you schedule in 2-hour windows (8-10 AM, 10-12 PM, etc.), the AI offers those same windows. If certain areas only get service on certain days, those rules are built in. The goal is to mirror exactly how your dispatcher would schedule — just faster and available 24/7.",
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
const AiAppointmentSetterForHvac = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Appointment Setter for HVAC — Book Service Calls Without the Phone Tag | Dmytro AI</title>
        <meta
          name="description"
          content="AI appointment setter for HVAC companies. Automate service call booking, confirmations, reminders, and rescheduling — connected to your dispatch calendar."
        />
        <link
          rel="canonical"
          href="https://www.dmytroai.com/ai-appointment-setter-for-hvac"
        />
        <meta
          property="og:title"
          content="AI Appointment Setter for HVAC — Book Service Calls Without the Phone Tag | Dmytro AI"
        />
        <meta
          property="og:description"
          content="Stop playing phone tag with HVAC customers. AI appointment scheduling that books, confirms, and reminds — 24/7."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.dmytroai.com/ai-appointment-setter-for-hvac"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            name: "AI Appointment Setter for HVAC",
            description:
              "How HVAC companies use AI appointment setters to automate service call booking, reduce phone tag, and fill their schedule without overloading the front desk.",
            author: { "@id": "https://www.dmytroai.com/#person" },
            url: "https://www.dmytroai.com/ai-appointment-setter-for-hvac",
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
                <CalendarCheck className="w-4 h-4" />
                HVAC Appointment Scheduling
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                AI Appointment Setter for HVAC
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                HVAC scheduling is a mess of phone tag, time windows, emergency
                priorities, and dispatch logistics. An AI appointment setter
                handles the repetitive booking work so your team can focus on
                getting techs to the right place at the right time.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Below: why HVAC scheduling is uniquely complex, what AI handles
                well, what it doesn't, and how it connects to your existing
                dispatch workflow.
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

        {/* -- Why HVAC scheduling is uniquely frustrating ----------- */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Why HVAC scheduling is harder than most industries
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            A dentist books 30-minute slots. A plumber books half-day windows.
            HVAC scheduling has layers of complexity that make it uniquely
            frustrating for both the company and the customer:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: AlertCircle,
                title: "Emergency vs. maintenance priority",
                body: "A no-heat call in January can't wait two days. A tune-up can. Your scheduling system needs to triage urgency and route accordingly — something a static booking page can't handle.",
              },
              {
                icon: Clock,
                title: "Time window complexity",
                body: "Customers want specific windows. Your dispatch needs to route efficiently by geography. Balancing customer preferences with drive-time optimization creates back-and-forth that eats up your front desk's entire day.",
              },
              {
                icon: Wrench,
                title: "Tech specialization and equipment",
                body: "Not every tech handles every job. Commercial vs. residential, install vs. repair, specific brand certifications — the right tech for the right job adds another variable to every scheduling decision.",
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
          <p className="text-sm text-muted-foreground mt-6 max-w-3xl leading-relaxed">
            The result: your front desk spends half their day on the phone
            playing scheduling Tetris. Customers get frustrated by hold times
            and callbacks. And after hours, nobody's scheduling anything — those
            leads wait until morning.
          </p>
        </Section>

        {/* -- What an AI appointment setter handles ----------------- */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What an AI appointment setter handles
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            The AI doesn't replace your dispatcher. It handles the intake and
            booking that takes up most of your front desk's time, so your team
            can focus on the scheduling decisions that actually need a human:
          </p>
          <div className="grid gap-5 sm:grid-cols-2 max-w-4xl">
            {[
              {
                icon: Phone,
                title: "Inbound call booking",
                body: "Customer calls, AI answers (or handles the missed call via text), collects the service details — what's wrong, system type, urgency, address — and offers available time slots from your calendar. The appointment is booked before they hang up.",
              },
              {
                icon: MessageSquare,
                title: "Web form to appointment",
                body: "Someone fills out your contact form. Instead of waiting for a callback, they immediately get a text with available appointment times. They pick a slot, confirm, and they're booked. Total elapsed time: 2 to 3 minutes.",
              },
              {
                icon: CalendarCheck,
                title: "Confirmation and reminders",
                body: "Once booked: instant confirmation text with date, time window, and what to expect. Day-before reminder. Morning-of reminder. On-the-way text when the tech is en route. Shops that add reminder sequences typically see a noticeable drop in no-shows.",
              },
              {
                icon: RefreshCw,
                title: "Rescheduling and cancellation handling",
                body: "Customer texts \"I need to reschedule\"? The AI pulls up their appointment, offers alternative slots, and updates the calendar. Cancellations free the slot immediately and can trigger a waitlist notification to fill the gap.",
              },
              {
                icon: Zap,
                title: "After-hours booking",
                body: "At 10 PM on a Saturday, a customer can book a Monday appointment via text or your website without waiting until your office opens. The AI handles the entire interaction, and your dispatcher sees the booking first thing Monday morning.",
              },
              {
                icon: Calendar,
                title: "Seasonal campaign scheduling",
                body: "Running a fall tune-up campaign? The AI can handle the inbound from those campaigns — scheduling dozens of maintenance appointments without your front desk making a single call. Pairs with database reactivation for maximum impact.",
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

        {/* -- How it connects to dispatch/calendar ------------------ */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            How it connects to your dispatch and calendar
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            The AI appointment setter isn't a standalone tool — it plugs into
            your existing system. Here's what the integration looks like:
          </p>
          <div className="max-w-3xl space-y-6">
            {[
              {
                step: "1",
                title: "Calendar sync",
                body: "The AI reads your available slots in real time from ServiceTitan, Housecall Pro, Jobber, Google Calendar, or whatever you use. It never books a slot that's already taken.",
              },
              {
                step: "2",
                title: "Rule-based scheduling",
                body: "Your business rules get built into the system: service area boundaries, time window formats, minimum booking notice, emergency routing rules, tech assignment preferences. The AI follows these rules every time — no exceptions, no human error.",
              },
              {
                step: "3",
                title: "Two-way updates",
                body: "When the AI books an appointment, it writes back to your calendar/dispatch tool immediately. When your dispatcher makes changes on their end, the AI sees those updates. No duplicate bookings, no conflicts.",
              },
              {
                step: "4",
                title: "Escalation paths",
                body: "When the AI encounters something outside its rules — a complex multi-day job, a customer demanding a specific tech, an unusual request — it escalates to your team with full context. It doesn't guess or make decisions it shouldn't.",
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

        {/* -- What doesn't work (honest limitations) ---------------- */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What doesn't work — honest limitations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            AI appointment setting is powerful, but it's not a magic fix for
            everything. Here's what it doesn't handle well today:
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-muted-foreground" />
                Not great at (yet)
              </h3>
              <ul className="space-y-3">
                {[
                  "Complex multi-day installations that require site visits, permitting, and equipment ordering before scheduling",
                  "Routing decisions that require real-time knowledge of where each truck is and how long each job is running",
                  "Handling angry or emotionally escalated customers who need a human touch",
                  "Jobs that require detailed technical diagnosis before a time estimate can be given",
                  "Navigating insurance claims, warranty work, or third-party authorization processes",
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
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Excellent at
              </h3>
              <ul className="space-y-3">
                {[
                  "Routine service calls and maintenance appointments — the bread and butter of HVAC scheduling",
                  "After-hours and weekend booking when your office is closed",
                  "High-volume periods when your front desk is overwhelmed with calls",
                  "Confirmation, reminder, and rescheduling workflows that follow consistent rules",
                  "Converting web leads into booked appointments without human intervention",
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
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-3xl leading-relaxed">
            The honest takeaway: AI appointment setting handles the majority of
            scheduling interactions — the straightforward, repetitive ones. The
            rest still needs your team. But freeing up that volume is what
            gives your front desk room to breathe.
          </p>
        </Section>

        {/* -- Results from similar businesses ----------------------- */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Scheduling automation in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            These case studies show the same scheduling and booking automation
            patterns applied to other service businesses. The workflows
            translate directly to HVAC:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                industry: "Restaurant",
                headline: "24/7 booking without staff",
                body: "A NYC restaurant automated all reservation booking through an AI voice agent. Every call gets answered, every request gets scheduled. The same architecture lets HVAC companies book service calls around the clock without adding headcount.",
                link: "/case-studies/paris-cafe-voice-agent",
              },
              {
                industry: "Info Business",
                headline: "Automated lead-to-appointment pipeline",
                body: "High-volume leads flowing through an automated qualification and routing system. For HVAC, the same pipeline takes an inbound call or form submission and turns it into a booked, confirmed appointment in minutes.",
                link: "/case-studies/instagram-lead-generation",
              },
              {
                industry: "E-commerce",
                headline: "Systematic follow-up at scale",
                body: "Thousands of contacts organized with automated sequences. The same CRM automation that powers follow-up drives appointment confirmations, reminders, and rescheduling for HVAC companies at scale.",
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
              to="/ai-automation-for-hvac-companies"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              AI automation overview for HVAC
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
              HVAC missed call text-back
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/ai-appointment-setter"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              General AI appointment setter guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        {/* -- FAQ --------------------------------------------------- */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-center">
            HVAC appointment scheduling questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-center leading-relaxed">
            How AI scheduling works for HVAC companies
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
                Ready to automate your HVAC scheduling?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                Book a 30-minute call. We'll look at your current scheduling
                workflow, identify what the AI can handle for your specific
                setup, and map out the integration with your dispatch tools.
              </p>
              <p className="text-sm text-muted-foreground">
                No generic demo. We'll talk through your actual dispatch calendar,
                service areas, and scheduling rules.
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
                { icon: Wrench, text: "Dispatch tool compatibility check" },
                { icon: ArrowRight, text: "Custom scheduling automation plan" },
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

export default AiAppointmentSetterForHvac;
