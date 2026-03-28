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
  MapPin,
  Wrench,
  BarChart3,
  Building2,
  Workflow,
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
    question: "Do I need to be in Calgary to work with you?",
    answer:
      "No. We work remotely with businesses across North America. That said, we understand the Calgary market, the industries here, and the pace at which local businesses operate. If you are based in Calgary or Alberta, you are working with someone who knows the context.",
  },
  {
    question: "What size business is this for?",
    answer:
      "Most of our clients are small to mid-size businesses with 5 to 100 employees. The sweet spot is businesses doing $500K to $10M in annual revenue that are growing but hitting operational bottlenecks. If you have manual processes eating up your team's time, you are likely a fit.",
  },
  {
    question: "How long does a typical automation project take?",
    answer:
      "A focused automation (lead follow-up, appointment booking, CRM cleanup) takes 1 to 3 weeks. A larger system with multiple integrations and custom logic takes 3 to 6 weeks. We scope everything before starting so there are no surprises.",
  },
  {
    question: "What tools and platforms do you work with?",
    answer:
      "We build primarily with n8n, Make, and custom API integrations. For AI components, we use OpenAI, Anthropic, and voice platforms like Vapi and Bland. For CRMs, we work with GoHighLevel, HubSpot, Salesforce, and others. The tooling depends on what makes sense for your business.",
  },
  {
    question: "What if I am not sure what to automate first?",
    answer:
      "That is exactly what the initial call is for. We look at your current operations, identify the highest-impact bottlenecks, and recommend where to start. Most businesses have 2 to 3 obvious automation opportunities once someone maps out the workflows.",
  },
];

const AiAutomationConsultantCalgary = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Automation Consultant Calgary | Dmytro AI</title>
        <meta
          name="description"
          content="AI automation consultant serving Calgary businesses. Custom automations for lead follow-up, scheduling, CRM, and operations. Practical solutions, fixed pricing, real results."
        />
        <link
          rel="canonical"
          href="https://www.dmytroai.com/ai-automation-consultant-calgary"
        />
        <meta
          property="og:title"
          content="AI Automation Consultant Calgary | Dmytro AI"
        />
        <meta
          property="og:description"
          content="AI automation consultant serving Calgary businesses. Practical solutions, fixed pricing, real results."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.dmytroai.com/ai-automation-consultant-calgary"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Dmytro AI - AI Automation Consultant Calgary",
            description:
              "AI automation consulting for Calgary businesses. Custom automations for lead follow-up, scheduling, CRM workflows, and operations.",
            url: "https://www.dmytroai.com/ai-automation-consultant-calgary",
            areaServed: {
              "@type": "City",
              name: "Calgary",
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Alberta",
              },
            },
            provider: { "@id": "https://www.dmytroai.com/#person" },
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
                <MapPin className="w-4 h-4" />
                Calgary, Alberta
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                AI Automation Consultant for Calgary Businesses
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Your team is spending hours on work that should run itself.
                Lead follow-up, scheduling, data entry, CRM updates. We build
                AI-powered automations that handle it so your people focus on
                revenue.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Below: what we do, who we work with, and how to tell if
                automation consulting is the right move for your business.
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

        {/* What we automate */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What we automate for Calgary businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Every business is different, but the bottlenecks tend to fall into
            the same categories. These are the automations we build most often:
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Bot,
                title: "Lead follow-up and response",
                body: "Instant SMS and email responses to every inquiry. Multi-touch follow-up sequences that run until the lead books or opts out. No more leads going cold overnight.",
              },
              {
                icon: Workflow,
                title: "Appointment scheduling",
                body: "AI-powered booking that qualifies leads, checks availability, and confirms appointments without your team touching a thing. Reminders and no-show follow-up included.",
              },
              {
                icon: BarChart3,
                title: "CRM cleanup and automation",
                body: "Leads logged, tagged, and enrolled in the right sequences automatically. No more messy data, duplicate contacts, or leads sitting untouched in your pipeline.",
              },
              {
                icon: Wrench,
                title: "Operations and internal workflows",
                body: "Invoice generation, reporting, inventory updates, team notifications. If your team does it repeatedly and it follows a pattern, it can probably be automated.",
              },
              {
                icon: Building2,
                title: "AI voice agents",
                body: "24/7 phone answering for booking, qualification, and routing. Handles the calls your team cannot get to and routes complex requests to the right person.",
              },
              {
                icon: MapPin,
                title: "Multi-location coordination",
                body: "If you operate multiple locations in Calgary or across Alberta, we build systems that keep scheduling, lead routing, and reporting consistent across all of them.",
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

        {/* Calgary industries */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Calgary industries we work with
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Calgary's economy runs on services, trades, and professional firms.
            These are the industries where automation delivers the clearest ROI:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            {[
              { name: "HVAC, plumbing, and electrical", detail: "Estimate requests, dispatch, seasonal demand management" },
              { name: "Dental and medical clinics", detail: "Patient booking, intake, reminders, follow-up" },
              { name: "Real estate teams and brokerages", detail: "Lead qualification, showing coordination, drip campaigns" },
              { name: "Law firms and accounting practices", detail: "Consultation booking, document intake, client follow-up" },
              { name: "Oil and gas service companies", detail: "Vendor coordination, compliance tracking, reporting" },
              { name: "Fitness, wellness, and coaching", detail: "Class booking, membership management, retention sequences" },
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

        {/* How we work */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            How we work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            No hourly billing. No vague timelines. Here is the process from
            first call to live automation:
          </p>
          <div className="grid gap-4 max-w-3xl">
            {[
              {
                step: "1",
                title: "30-minute discovery call",
                body: "We look at your current operations, identify the biggest bottlenecks, and figure out where automation will have the most impact. You leave with a clear picture of what is possible.",
              },
              {
                step: "2",
                title: "Scope and fixed quote",
                body: "We define exactly what gets built, what it connects to, and what the deliverable looks like. You get a fixed price and timeline before any work starts.",
              },
              {
                step: "3",
                title: "Build and test",
                body: "We build the automation, test it with real data, and make sure it works with your existing tools. You review it before anything goes live.",
              },
              {
                step: "4",
                title: "Launch and support",
                body: "The system goes live. We monitor it for the first two weeks and fix anything that comes up. Optional ongoing maintenance retainer if you want hands-off management.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="flex gap-4 rounded-2xl border border-border/60 bg-background/60 p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0">
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

        {/* Good fit / not a fit */}
        <Section>
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
                  "Your team spends hours daily on repetitive manual tasks",
                  "You lose leads because follow-up is slow or inconsistent",
                  "You are growing but cannot keep hiring to handle the volume",
                  "You use a CRM or scheduling tool but it is not fully utilized",
                  "You want fixed pricing and a clear scope before committing",
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
                  "You are looking for a full software product, not targeted automation",
                  "Your processes change weekly and are not defined enough to automate",
                  "You need a full-time in-house developer, not a consulting engagement",
                  "You want the cheapest possible option regardless of quality",
                  "You are not ready to invest at least $2,000 in a one-time build",
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

        {/* Case study references */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Results from businesses like yours
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            {[
              {
                industry: "Restaurant",
                headline: "100% of after-hours calls answered",
                body: "A NYC restaurant was missing reservations every night. We built a 24/7 AI voice agent that handles all calls, books tables, and routes complex requests. Freed up 15 hours/week of management time.",
                link: "/case-studies/paris-cafe-voice-agent",
              },
              {
                industry: "E-Commerce",
                headline: "5,600 leads organized and automated",
                body: "A US auto parts brand had thousands of untouched leads. We built automated follow-up sequences, tripled team capacity without hiring, and lifted conversions 185%.",
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
          <div className="mt-6">
            <Link
              to="/case-studies"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              View all case studies
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
            Practical answers about working with an AI automation consultant in Calgary
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
                Ready to automate the busywork?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                Book a 30-minute call. We will look at your current operations,
                identify the highest-impact automation opportunities, and give
                you a clear picture of what it would take to build them.
              </p>
              <p className="text-sm text-muted-foreground">
                No obligation. No hard sell. Just a straightforward conversation
                about whether automation makes sense for your business.
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
                { icon: CheckCircle2, text: "Identify your top automation opportunities" },
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

export default AiAutomationConsultantCalgary;
