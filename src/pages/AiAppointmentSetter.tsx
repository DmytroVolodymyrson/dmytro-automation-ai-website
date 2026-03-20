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
  XCircle,
  CalendarCheck,
  Phone,
  MessageSquare,
  Users,
  Bot,
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
    question: "Will an AI appointment setter sound robotic to my customers?",
    answer:
      "Modern AI voice and chat agents are significantly better than the robotic phone trees from a few years ago. Most callers cannot tell the difference on routine interactions like scheduling or confirming appointments. That said, the quality depends on how well the system is configured. A well-built AI setter with the right prompts and voice sounds natural. A poorly configured one sounds like a bad chatbot.",
  },
  {
    question: "What happens if the AI cannot handle a question?",
    answer:
      "A properly built system has escalation paths. If the caller asks something outside the AI's scope, it takes a message, logs the request, and routes it to a human on your team. The goal is not to replace humans entirely. It is to handle the 70 to 80% of interactions that are repetitive so your team focuses on the ones that need a real person.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "A basic AI appointment setter (chat or SMS-based) can be live in 5 to 7 days. A full voice agent with booking integration, qualification logic, and CRM sync typically takes 2 to 3 weeks. The timeline depends on how many tools need to be connected and how complex your scheduling rules are.",
  },
  {
    question: "What does it cost?",
    answer:
      "A one-time build typically ranges from $2,000 to $6,000 depending on complexity. Ongoing costs include the AI platform usage (usually $50 to $200/month depending on call volume) and optional maintenance retainers. Most businesses recoup the cost within the first month through reduced missed leads and lower no-show rates.",
  },
  {
    question: "Can it work with my existing scheduling tool?",
    answer:
      "In most cases, yes. AI appointment setters integrate with common scheduling platforms like Calendly, Acuity, GoHighLevel, and Google Calendar. If you use a less common tool, a custom API connection is usually possible.",
  },
];

const AiAppointmentSetter = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Appointment Setter for Service Businesses | Dmytro AI</title>
        <meta
          name="description"
          content="What an AI appointment setter actually does for service businesses. Where it helps, when it is a fit, and what it should not replace. Practical guide for business owners."
        />
        <link
          rel="canonical"
          href="https://www.dmytroai.com/ai-appointment-setter"
        />
        <meta
          property="og:title"
          content="AI Appointment Setter for Service Businesses | Dmytro AI"
        />
        <meta
          property="og:description"
          content="What an AI appointment setter does, where it helps most, and how to decide if it is the right move."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.dmytroai.com/ai-appointment-setter"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI Appointment Setter for Service Businesses",
            description:
              "Practical guide to AI appointment setters for service businesses. What they do, where they help, and when they are a fit.",
            publisher: { "@id": "https://www.dmytroai.com/#person" },
            url: "https://www.dmytroai.com/ai-appointment-setter",
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
                <CalendarCheck className="w-4 h-4" />
                Use Case Guide
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                AI Appointment Setter for Service Businesses
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Stop losing leads to slow follow-up and after-hours silence. An
                AI appointment setter handles the repetitive parts of booking so
                your team focuses on the work that matters.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Below: what it actually does, which businesses benefit most, and
                how to decide if it is the right investment for yours.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  onClick={scrollToBooking}
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book a 30-Minute Call
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

        {/* What it actually does */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What an AI appointment setter actually does
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            The term gets used loosely, so here is what it means in practice for
            a service business:
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Answers calls and messages",
                body: "Picks up the phone or responds to texts and web chat 24/7. Handles the initial conversation, asks qualifying questions, and provides basic information about your services.",
              },
              {
                icon: CalendarCheck,
                title: "Books appointments directly",
                body: "Checks your calendar for availability, offers time slots, and confirms bookings. Sends confirmation messages to both you and the customer. No back-and-forth required.",
              },
              {
                icon: MessageSquare,
                title: "Qualifies leads before booking",
                body: "Asks the right screening questions so you do not waste time on poor-fit appointments. Routes qualified leads to booking and flags the rest for follow-up or rejection.",
              },
              {
                icon: Clock,
                title: "Sends reminders and reduces no-shows",
                body: "Automated confirmation and reminder sequences via SMS or email. Most businesses see a 20 to 40% reduction in no-shows with simple reminder flows.",
              },
              {
                icon: Bot,
                title: "Follows up with leads who do not book",
                body: "If a lead engages but does not complete a booking, the system follows up automatically over the next few days. No manual chasing required.",
              },
              {
                icon: Users,
                title: "Hands off to your team when needed",
                body: "Complex requests, complaints, or anything outside the AI's scope gets routed to a real person with full context. The AI handles the routine; your team handles the exceptions.",
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

        {/* Where it helps most */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Where it helps most
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            AI appointment setters solve specific, common problems for service
            businesses. If any of these are costing you revenue, this is worth
            looking into:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
            {[
              {
                title: "Missed after-hours leads",
                body: "Most service businesses lose leads that call or message outside business hours. An AI setter responds immediately, 24/7, so leads do not go to a competitor while you sleep.",
              },
              {
                title: "Slow follow-up on inquiries",
                body: "The average business takes 47 hours to respond to a lead. By then, the lead has already booked elsewhere. AI responds in seconds, not days.",
              },
              {
                title: "Staff time wasted on scheduling",
                body: "If your receptionist or team spends hours per day on phone tag and scheduling, an AI setter reclaims that time for higher-value work.",
              },
              {
                title: "High no-show rates",
                body: "Automated reminders and confirmations reduce no-shows significantly. The system follows up without your team needing to remember.",
              },
              {
                title: "Inconsistent lead qualification",
                body: "Some leads are not a fit for your services. An AI setter asks the same qualifying questions every time, so only good-fit leads make it to your calendar.",
              },
              {
                title: "Seasonal volume spikes",
                body: "During busy periods, leads pile up and response times suffer. An AI setter scales instantly without hiring temporary staff.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="rounded-2xl border border-border/60 bg-background/60 p-5"
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
        </Section>

        {/* Best-fit businesses */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Businesses that benefit most
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            AI appointment setters work best for businesses where revenue
            depends on booked appointments. The pattern is consistent:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            {[
              { name: "Medical and dental practices", detail: "Patient scheduling, intake, reminders" },
              { name: "Home services (HVAC, plumbing, electrical)", detail: "Service calls, estimates, dispatch" },
              { name: "Salons and spas", detail: "Booking, confirmations, waitlist management" },
              { name: "Legal and financial services", detail: "Consultation booking, qualification, follow-up" },
              { name: "Real estate", detail: "Showing scheduling, buyer/seller qualification" },
              { name: "Fitness and wellness", detail: "Class booking, personal training, trial sessions" },
            ].map((biz, i) => (
              <motion.div
                key={biz.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="rounded-2xl border border-border/60 bg-card/80 p-5"
              >
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {biz.name}
                </h3>
                <p className="text-sm text-muted-foreground">{biz.detail}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* What it should not replace */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What an AI setter should not replace
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            An AI appointment setter is not a replacement for your team. It is a
            tool that handles a specific layer of work. Be clear about the
            boundaries:
          </p>
          <div className="grid gap-4 max-w-3xl">
            {[
              "Complex consultations or sales conversations that require empathy, nuance, or negotiation",
              "Complaint resolution or situations where a customer is frustrated and needs a human",
              "High-stakes decisions like medical advice, legal guidance, or financial recommendations",
              "Relationship-building with key accounts or VIP clients who expect personal attention",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 px-5 py-4"
              >
                <AlertTriangle className="w-5 h-5 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-3xl leading-relaxed">
            The best results come from using AI for the repetitive 70 to 80% and
            freeing your team to focus on the interactions that actually require
            a person.
          </p>
        </Section>

        {/* Good fit / not a fit */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Good fit / not a fit
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Good fit
              </h3>
              <ul className="space-y-3">
                {[
                  "Your revenue depends on booked appointments",
                  "You lose leads outside business hours or during busy periods",
                  "Your team spends significant time on scheduling logistics",
                  "You have a clear booking flow (service types, durations, availability)",
                  "No-shows are a meaningful cost to your business",
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
                  "Your business does not rely on scheduled appointments",
                  "You get fewer than 10 inquiries per week (manual handling is fine)",
                  "Every interaction requires deep customization or negotiation",
                  "You do not have a defined scheduling process to automate",
                  "You are looking for a full sales closer, not a scheduling assistant",
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

        {/* Proof / case study references */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What this looks like in practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Real examples of AI handling scheduling and lead response for small
            businesses:
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            {[
              {
                industry: "Restaurant",
                headline: "100% of after-hours calls answered",
                body: "A NYC restaurant was missing reservations every night after close. A 24/7 AI voice agent now handles all calls, books tables, and routes complex requests. That freed up roughly 15 hours of management time per week.",
                link: "/case-studies/paris-cafe-voice-agent",
              },
              {
                industry: "Info Business",
                headline: "50+ qualified leads per day",
                body: "Manual Instagram prospecting took hours and produced a handful of leads. An automated AI pipeline now discovers, qualifies, and delivers leads daily at $0.29 each, with zero manual work.",
                link: "/case-studies/instagram-lead-generation",
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
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-center">
            Common questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-center leading-relaxed">
            Practical answers about AI appointment setters for service businesses
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
                Ready to stop losing leads to slow follow-up?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                Book a 30-minute call. We will look at your current booking
                process, identify where leads are falling through, and figure
                out the right setup for your business.
              </p>
              <p className="text-sm text-muted-foreground">
                No hard sell. Just a clear look at whether an AI appointment
                setter makes sense for your situation.
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
                { icon: CheckCircle2, text: "Identify where leads are dropping off" },
                { icon: ArrowRight, text: "Leave with a clear recommendation" },
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

export default AiAppointmentSetter;
