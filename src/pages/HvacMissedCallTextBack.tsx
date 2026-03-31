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
  Smartphone,
  PhoneOff,
  Bell,
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
    question: "How fast does the text go out after a missed call?",
    answer:
      "Within 10 to 30 seconds of the call ending. The homeowner's phone buzzes before they've even had time to search for the next company on their list. That speed is what makes this work — it keeps the conversation alive while your company is still top of mind.",
  },
  {
    question: "What does the text message say?",
    answer:
      "You choose the message. A typical one reads something like: \"Hey, sorry we missed your call! This is [Your Company]. How can we help you today?\" Simple, friendly, and it opens a two-way conversation. We help you write the message during setup and you can change it anytime.",
  },
  {
    question: "Does this work if someone calls and hangs up quickly?",
    answer:
      "Yes, as long as the call registers as a missed call. If someone calls and hangs up after 2 rings, they still get the text. The only exception is blocked or unknown numbers, which you can configure to exclude if you prefer.",
  },
  {
    question: "What if the person texts back? Who handles the conversation?",
    answer:
      "You have options. The simplest setup routes their reply directly to your team's phone or a shared inbox so someone can respond manually. A more advanced setup uses an AI agent to continue the conversation — qualifying the issue, collecting their address, and booking an appointment. Most shops start with manual responses and add AI later once they see the volume.",
  },
  {
    question: "Will this send texts to spam callers and robocalls?",
    answer:
      "You can filter out known spam numbers and set rules to exclude certain area codes or number types. In practice, most shops find that the occasional text to a wrong number is worth it for the leads they recover. You can also set it to only trigger during business hours if you prefer.",
  },
  {
    question: "How much does missed call text-back cost to set up?",
    answer:
      "A standalone missed call text-back system typically runs $1,000 to $2,000 to build, depending on what it connects to and how much intelligence you want in the response. Monthly costs for SMS are minimal — usually a few cents per message. If you're combining it with other automations (lead follow-up, scheduling), it's often included in the broader build.",
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
const HvacMissedCallTextBack = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>HVAC Missed Call Text Back — Never Lose a Lead to Voicemail | Dmytro AI</title>
        <meta
          name="description"
          content="HVAC missed call text-back: when you can't answer the phone, an instant text keeps the lead warm. Simple automation that recovers jobs you'd otherwise lose to voicemail."
        />
        <link
          rel="canonical"
          href="https://www.dmytroai.com/hvac-missed-call-text-back"
        />
        <meta
          property="og:title"
          content="HVAC Missed Call Text Back — Never Lose a Lead to Voicemail | Dmytro AI"
        />
        <meta
          property="og:description"
          content="Instant text-back when you miss a call. Simple HVAC automation that saves leads from going to your competitors."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.dmytroai.com/hvac-missed-call-text-back"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            name: "HVAC Missed Call Text Back",
            description:
              "How HVAC companies use missed call text-back to instantly engage leads they can't answer, keeping them from calling competitors.",
            author: { "@id": "https://www.dmytroai.com/#person" },
            url: "https://www.dmytroai.com/hvac-missed-call-text-back",
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
                <PhoneOff className="w-4 h-4" />
                Missed Call Text-Back
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                HVAC Missed Call Text Back
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Every missed call is a potential job walking to your competitor.
                Missed call text-back is the simplest, fastest automation an
                HVAC company can set up — and often the one with the highest
                immediate ROI.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                When your phone rings and nobody answers, an instant text goes
                to the caller within seconds. Below: how it works, what the
                customer experience looks like, and when it makes sense.
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

        {/* -- The cost of missed calls ------------------------------ */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            The real cost of missed calls in HVAC
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Nobody answers every call. Your team is on jobs, on the other line,
            at lunch, or it's after hours. The question isn't whether you miss
            calls — it's what happens when you do:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "They call the next company",
                body: "A homeowner with a broken AC doesn't leave a voicemail and wait. They hang up and call the next result on Google. By the time you call back, they've already booked someone. This is the most common outcome of a missed call in HVAC.",
              },
              {
                icon: Clock,
                title: "Voicemail is a dead end",
                body: "Voicemail completion rates for service businesses are low. Most callers hang up before leaving a message. Even when they do leave one, the callback often comes hours later — long after the urgency (and your chance) has passed.",
              },
              {
                icon: Thermometer,
                title: "Seasonal spikes make it worse",
                body: "The first hot week of summer or first cold snap of winter, your phone lights up. That's exactly when you're least likely to answer every call — and exactly when each call is worth the most. Missed calls during peak season hit your revenue hardest.",
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
            A realistic estimate: if you miss 5 to 10 calls per week and your
            average job is worth $500 to $1,500, even converting one extra job
            per week from missed call text-back means $2K to $6K per month in
            recovered revenue. The automation costs a fraction of that to build.
          </p>
        </Section>

        {/* -- How it works ------------------------------------------ */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            How missed call text-back works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            The concept is simple. The execution takes some care to get right:
          </p>
          <div className="max-w-3xl space-y-6">
            {[
              {
                step: "1",
                title: "A call comes in and goes unanswered",
                body: "Doesn't matter why — your team is on another call, on a job, or it's 9 PM on a Saturday. The call rings, nobody picks up, and the caller hangs up or hits voicemail.",
              },
              {
                step: "2",
                title: "Within seconds, an automatic text goes out",
                body: "The caller gets a text from your business number: \"Hey, sorry we missed your call! This is [Your Company]. How can we help you today?\" It arrives while your company is still fresh in their mind — before they've dialed the next number.",
              },
              {
                step: "3",
                title: "The lead responds via text",
                body: "Most people prefer texting anyway. They reply with what they need: \"My AC isn't cooling,\" \"Need a furnace quote,\" \"Emergency — no heat.\" Now you have a two-way conversation going instead of a dead voicemail.",
              },
              {
                step: "4",
                title: "Your team (or AI) continues the conversation",
                body: "In the simplest setup, the reply goes to your team's phone and they take over. In a more advanced setup, an AI agent qualifies the issue, collects their address, and offers available appointment times — all via text.",
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

        {/* -- Customer experience ----------------------------------- */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What the customer experience looks like
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            From the homeowner's perspective, here's what happens:
          </p>
          <div className="max-w-3xl rounded-2xl border border-border/60 bg-card/80 p-6 space-y-4">
            {[
              {
                time: "6:47 PM",
                who: "Homeowner",
                action: "Calls your company. Rings 4 times. No answer.",
              },
              {
                time: "6:47 PM",
                who: "Homeowner",
                action: "Starts to Google \"HVAC repair near me\" to find another company.",
              },
              {
                time: "6:48 PM",
                who: "Your system",
                action: "Text arrives: \"Hey, sorry we missed your call! This is ABC Heating & Air. How can we help?\"",
              },
              {
                time: "6:49 PM",
                who: "Homeowner",
                action: "Replies: \"AC not blowing cold air. Need someone ASAP.\"",
              },
              {
                time: "6:50 PM",
                who: "Your team / AI",
                action: "\"Got it — can you share your address? We can get someone out tomorrow morning between 8-10 AM.\"",
              },
              {
                time: "6:52 PM",
                who: "Homeowner",
                action: "Shares address. Books the appointment. Stops searching for competitors.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="flex gap-4 items-start"
              >
                <span className="text-xs font-mono text-muted-foreground/60 flex-shrink-0 w-16 mt-0.5">
                  {item.time}
                </span>
                <div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                    {item.who}
                  </span>
                  <p className="text-sm text-foreground leading-relaxed">
                    {item.action}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-3xl leading-relaxed">
            Total time from missed call to booked appointment: about 5 minutes.
            Without the text-back, that homeowner would be on the phone with
            your competitor by 6:50 PM.
          </p>
        </Section>

        {/* -- Beyond text-back -------------------------------------- */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Beyond text-back: what else can trigger from a missed call
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Missed call text-back is the starting point. Once the infrastructure
            is in place, you can layer on additional automations triggered by
            that same missed call:
          </p>
          <div className="grid gap-5 sm:grid-cols-2 max-w-4xl">
            {[
              {
                icon: Bell,
                title: "Team notifications",
                body: "Your dispatcher or office manager gets an instant Slack message, email, or push notification with the caller's number and any CRM data you have on them. Even if automation handles the text, your team knows what's happening.",
              },
              {
                icon: MessageSquare,
                title: "AI-powered qualification via text",
                body: "Instead of a simple \"how can we help?\" message, an AI agent continues the conversation — asking about the issue, system type, urgency, and address. By the time your team follows up, the lead is pre-qualified and ready to schedule.",
              },
              {
                icon: CalendarCheck,
                title: "Direct booking from the text thread",
                body: "Include a scheduling link in the initial text or have the AI offer available time slots. The homeowner books directly from the text conversation without ever calling back.",
              },
              {
                icon: Zap,
                title: "CRM logging and follow-up sequences",
                body: "Every missed call creates a contact in your CRM (if they're not already there) with the call timestamp, any text conversation, and tags for follow-up. If they don't respond to the initial text, a follow-up sequence can fire at 1 hour, 24 hours, and 3 days.",
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

        {/* -- Good fit / not a fit ---------------------------------- */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Good fit / not a fit for missed call text-back
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            This is a simple automation, but it's not for everyone. Here's an
            honest assessment:
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Good fit
              </h3>
              <ul className="space-y-3">
                {[
                  "You're getting regular inbound calls and know you're missing some",
                  "You have after-hours calls going to voicemail",
                  "Your team is on jobs during the day and can't always answer",
                  "You want the quickest possible automation win with minimal setup",
                  "You're already running Google Ads or LSAs and want better conversion from existing spend",
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
                  "You answer every call already and have full-time phone coverage",
                  "Your call volume is very low (1 to 2 calls per day) — the impact won't be significant",
                  "You only do commercial work with long sales cycles (text-back is best for residential urgency)",
                  "You don't have a way to respond to texts when they come in (no smartphone, no team coverage)",
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
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/ai-automation-hvac"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              Full HVAC automation services
              <ArrowRight className="w-4 h-4" />
            </Link>
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
              to="/ai-appointment-setter-for-hvac"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              AI appointment setter for HVAC
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/ai-chatbot-vs-ai-voice-agent-for-lead-qualification"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              Chatbot vs voice agent comparison
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        {/* -- FAQ --------------------------------------------------- */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-center">
            Missed call text-back questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-center leading-relaxed">
            How it works, what it costs, and what to expect
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
                Ready to stop losing leads to voicemail?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                Book a 30-minute call. We'll look at your current call volume,
                estimate how many calls you're missing, and map out a text-back
                system for your shop.
              </p>
              <p className="text-sm text-muted-foreground">
                This is one of the fastest automations to set up and one of the
                first to pay for itself.
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
                { icon: Smartphone, text: "See exactly how text-back works" },
                { icon: ArrowRight, text: "Get a plan specific to your shop" },
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

export default HvacMissedCallTextBack;
