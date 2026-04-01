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
  Timer,
  Mail,
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
    question: "How fast does the automated follow-up actually go out?",
    answer:
      "Within 60 seconds of a lead coming in — whether from a web form, missed call, Google LSA, or any other source that connects via API or webhook. The first message is a text (highest open rate), followed by an email, and then additional touchpoints over the next few days based on the sequence you approve.",
  },
  {
    question: "What if the lead responds to the automated message?",
    answer:
      "The system detects the response and can either route it to your team immediately with full context (who they are, what they need, their conversation history) or continue an AI-powered conversation to qualify and book them. You choose the level of automation you're comfortable with.",
  },
  {
    question: "Does this work with Google Local Service Ads (LSA) leads?",
    answer:
      "Yes. LSA leads come in as phone calls or messages, and the automation captures them the same way. The follow-up fires whether the lead comes from LSA, your website, Yelp, Angi, or any other source. The goal is one system for all leads, not a different process for each channel.",
  },
  {
    question: "How many follow-up messages are too many?",
    answer:
      "In our experience, 3 to 5 touchpoints over 7 to 10 days hits the sweet spot for HVAC leads. The first message is instant. Day 2 might be a value-add (\"here's what to check before we arrive\"). Day 4 is a gentle nudge. Beyond that, you're into long-term nurture territory. The sequences are fully customizable — we set them based on your comfort level.",
  },
  {
    question: "What about leads who filled out a form but didn't leave a phone number?",
    answer:
      "Email follow-up sequences handle those. The automation sends a personalized email within minutes, then follows up with additional emails over the next week. If they eventually provide a phone number (many do when they reply), they get added to the SMS sequence automatically.",
  },
  {
    question: "Can this follow up on quotes and estimates that haven't closed?",
    answer:
      "Absolutely — this is one of the highest-ROI automations for HVAC. When an estimate is sent and not accepted within a set time (24 hours, 3 days, whatever you choose), a follow-up sequence triggers automatically. It's polite, helpful, and persistent without being pushy. Shops that add systematic follow-up almost always close quotes that would have otherwise gone cold.",
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
const HvacLeadFollowUpAutomation = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>HVAC Lead Follow-Up Automation — Stop Losing Jobs to Slow Response | Dmytro AI</title>
        <meta
          name="description"
          content="HVAC lead follow-up automation that responds to every lead within 60 seconds. Automated text, email, and call sequences so you never lose a job to slow response again."
        />
        <link
          rel="canonical"
          href="https://www.dmytroai.com/hvac-lead-follow-up-automation"
        />
        <meta
          property="og:title"
          content="HVAC Lead Follow-Up Automation — Stop Losing Jobs to Slow Response | Dmytro AI"
        />
        <meta
          property="og:description"
          content="Automated lead follow-up for HVAC companies. Respond in 60 seconds, not 60 minutes."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.dmytroai.com/hvac-lead-follow-up-automation"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            name: "HVAC Lead Follow-Up Automation",
            description:
              "How HVAC companies use automated lead follow-up to respond faster, convert more leads, and stop losing jobs to competitors with quicker response times.",
            author: { "@id": "https://www.dmytroai.com/#person" },
            url: "https://www.dmytroai.com/hvac-lead-follow-up-automation",
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
                <Zap className="w-4 h-4" />
                HVAC Lead Follow-Up
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                HVAC Lead Follow-Up Automation
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                The #1 reason HVAC companies lose jobs isn't price or quality —
                it's speed. The company that responds first gets the job. If
                your follow-up takes hours instead of seconds, you're handing
                revenue to competitors.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Below: how automated follow-up works for HVAC, what the
                workflows look like, and what changes when every lead gets a
                response in under 60 seconds.
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

        {/* -- The speed-to-lead problem in HVAC --------------------- */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            The speed-to-lead problem in HVAC
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            HVAC leads are different from most industries. When someone's AC
            goes out in July or their furnace dies in January, they're not
            browsing — they're calling every company they can find until someone
            picks up:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Timer,
                title: "The speed window",
                body: "Industry research consistently shows that faster response times improve conversion rates. The sooner you reach a lead, the better your chances. Most HVAC companies take hours or the next business day, leaving a wide gap for competitors to step in.",
              },
              {
                icon: Phone,
                title: "Multi-company inquiries",
                body: "A homeowner with a broken system doesn't submit one form and wait. They call 2 to 4 companies. The first one to respond with something useful — not just \"we'll call you back\" — wins the job. Speed is the differentiator.",
              },
              {
                icon: Clock,
                title: "After-hours and weekend leads",
                body: "HVAC emergencies don't happen 9 to 5. A huge chunk of leads come in evenings and weekends when your office is closed. Without automation, those leads sit until Monday morning — or they've already booked someone else.",
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

        {/* -- What automated follow-up looks like ------------------- */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What automated HVAC lead follow-up looks like
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Here's what happens when a lead comes in with automation running
            versus what happens without it:
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-muted-foreground" />
                Without automation
              </h3>
              <ul className="space-y-3">
                {[
                  "Lead submits a form at 7 PM on Tuesday",
                  "Nobody sees it until Wednesday morning",
                  "Office manager calls back the next morning",
                  "Homeowner already booked with a competitor who responded at 7:30 PM",
                  "Lead is marked \"no answer\" and forgotten",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="text-muted-foreground/40 flex-shrink-0 mt-0.5 font-mono text-xs">
                      {i + 1}.
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                With automation
              </h3>
              <ul className="space-y-3">
                {[
                  "Lead submits a form at 7 PM on Tuesday",
                  "Within 45 seconds: text message — \"Thanks for reaching out! What's going on with your system?\"",
                  "Within 2 minutes: email with service info and booking link",
                  "Lead replies to the text, AI qualifies the request and offers available time slots",
                  "Appointment booked by 7:15 PM — before the homeowner calls anyone else",
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
        </Section>

        {/* -- What gets built --------------------------------------- */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What gets built: specific HVAC follow-up workflows
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Lead follow-up isn't just one thing. These are the specific
            workflows I build for HVAC companies, each targeting a different
            stage of the lead lifecycle:
          </p>
          <div className="grid gap-5 sm:grid-cols-2 max-w-4xl">
            {[
              {
                icon: Zap,
                title: "Instant new-lead response",
                body: "Every new lead — web form, missed call, Google LSA, Yelp, Angi — gets a text within 60 seconds and an email within 2 minutes. The text is conversational, not robotic. It asks what's going on with their system and offers to schedule.",
              },
              {
                icon: Phone,
                title: "Missed call text-back",
                body: "When a call goes unanswered, an automatic text goes out immediately. This alone recovers a significant percentage of leads who would otherwise call the next company on their list.",
                link: "/hvac-missed-call-text-back",
              },
              {
                icon: MessageSquare,
                title: "Quote follow-up sequences",
                body: "Estimate sent but not accepted? A timed sequence nudges the homeowner: day 1, day 3, day 7. Each message adds value — addressing common concerns, offering to answer questions, providing a direct booking link. Polite persistence that converts stale quotes.",
              },
              {
                icon: CalendarCheck,
                title: "Appointment confirmation and reminders",
                body: "Once booked, the lead gets a confirmation text, a day-before reminder, and an on-the-way message. Cuts no-shows and same-day cancellations. Simple but surprisingly few HVAC companies do it consistently.",
              },
              {
                icon: TrendingUp,
                title: "Post-job review requests",
                body: "After a completed job, a review request sequence fires. Happy customers get a direct link to Google. The timing matters — we send it within hours of completion when satisfaction is highest.",
              },
              {
                icon: Mail,
                title: "Long-term nurture for cold leads",
                body: "Leads who didn't convert get added to a monthly nurture sequence — seasonal tips, maintenance reminders, and periodic check-ins. When they're ready to buy (or their system finally dies), you're the company they remember.",
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

        {/* -- Results from similar businesses ----------------------- */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What faster follow-up looks like in practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            These case studies are from service businesses using the same
            follow-up automation patterns. The workflows translate directly to
            HVAC:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                industry: "Restaurant",
                headline: "100% of after-hours inquiries captured",
                body: "A NYC restaurant was losing reservations every night. A 24/7 AI system now captures every inquiry instantly. For HVAC, the same architecture means no lead sits unanswered — even at midnight on a Saturday.",
                link: "/case-studies/paris-cafe-voice-agent",
              },
              {
                industry: "Info Business",
                headline: "Automated qualification at scale",
                body: "Manual follow-up couldn't keep pace with volume. Automated qualification and routing now handles the intake. The same approach helps HVAC companies process inbound leads faster without adding headcount.",
                link: "/case-studies/instagram-lead-generation",
              },
              {
                industry: "E-commerce",
                headline: "Thousands of leads organized and activated",
                body: "Thousands of leads sitting in spreadsheets with no follow-up. Automated sequences brought consistent outreach to every contact on the list. HVAC shops with years of unsold estimates and past customers can apply the same reactivation approach.",
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
            <Link
              to="/ai-lead-follow-up-for-service-businesses"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              General lead follow-up guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        {/* -- FAQ --------------------------------------------------- */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-center">
            Lead follow-up questions from HVAC owners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-center leading-relaxed">
            How automated follow-up works in practice
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
                Ready to stop losing leads to slow follow-up?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                Book a 30-minute call. We'll map out your current lead flow,
                identify where jobs are falling through the cracks, and build a
                follow-up plan specific to your shop.
              </p>
              <p className="text-sm text-muted-foreground">
                Free strategy call. No commitment. You'll leave knowing exactly
                where automation will have the biggest impact on your close rate.
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
                { icon: Zap, text: "Lead flow audit for your shop" },
                { icon: ArrowRight, text: "Leave with a concrete plan" },
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

export default HvacLeadFollowUpAutomation;
