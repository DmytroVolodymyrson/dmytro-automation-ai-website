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
  Mail,
  MessageSquare,
  Zap,
  BarChart3,
  Users,
  Target,
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
    question: "How fast should lead follow-up actually be?",
    answer:
      "Under five minutes is the benchmark. Research from Lead Response Management shows that contacting a lead within five minutes is 21 times more effective than waiting 30 minutes. Most service businesses average 47 hours. AI closes that gap to seconds.",
  },
  {
    question: "Will AI follow-up feel impersonal to my leads?",
    answer:
      "Done right, no. Modern AI follow-up pulls in the lead's name, the service they asked about, and specific details from their inquiry. It reads more like a fast, attentive team member than a generic autoresponder. The key is configuring the system with your tone and your context.",
  },
  {
    question: "What channels does AI lead follow-up cover?",
    answer:
      "SMS, email, web chat, and in some cases voice. The best setups use whichever channel the lead came in on, then add a secondary channel if there is no response. For example, if someone fills out a web form, they get an instant SMS and a follow-up email an hour later.",
  },
  {
    question: "How does this work with my existing CRM?",
    answer:
      "AI follow-up systems connect to most CRMs through APIs or integration platforms like n8n or Zapier. Leads get logged, tagged, and tracked automatically. If you use GoHighLevel, HubSpot, Salesforce, or a similar tool, integration is straightforward.",
  },
  {
    question: "Can I still have my team follow up manually for big opportunities?",
    answer:
      "Absolutely. The system handles the initial response and routine follow-up sequences. High-value leads or complex requests get flagged and routed to your team with full context. The goal is not to remove humans from the process. It is to make sure no lead waits.",
  },
];

const AiLeadFollowUpForServiceBusinesses = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Lead Follow-Up for Service Businesses | Dmytro AI</title>
        <meta
          name="description"
          content="How AI lead follow-up works for service businesses. Respond to every inquiry in seconds, not hours. Practical guide covering setup, channels, cost, and when it makes sense."
        />
        <link
          rel="canonical"
          href="https://www.dmytroai.com/ai-lead-follow-up-for-service-businesses"
        />
        <meta
          property="og:title"
          content="AI Lead Follow-Up for Service Businesses | Dmytro AI"
        />
        <meta
          property="og:description"
          content="How AI lead follow-up works for service businesses. Respond in seconds, not hours."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.dmytroai.com/ai-lead-follow-up-for-service-businesses"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AI Lead Follow-Up for Service Businesses",
            description:
              "Practical guide to AI-powered lead follow-up for service businesses. How it works, what it costs, and when it makes sense.",
            publisher: { "@id": "https://www.dmytroai.com/#person" },
            url: "https://www.dmytroai.com/ai-lead-follow-up-for-service-businesses",
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
                <Zap className="w-4 h-4" />
                Use Case Guide
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                AI Lead Follow-Up for Service Businesses
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Most service businesses lose leads because they respond too
                slowly. AI follow-up fixes that by contacting every lead within
                seconds and staying on them until they book or opt out.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Below: how it works, what it costs, which businesses benefit
                most, and how to tell if it is worth the investment for yours.
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

        {/* The problem */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            The follow-up problem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Lead follow-up for service businesses is broken in predictable ways.
            These are the patterns we see repeatedly:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
            {[
              {
                title: "Leads go cold before anyone responds",
                body: "A potential customer fills out your form at 9 PM. Your team sees it at 9 AM. By then, they have already called your competitor. Speed to first contact is the single biggest factor in conversion.",
              },
              {
                title: "Manual follow-up is inconsistent",
                body: "When things get busy, follow-up slips. Some leads get three touches, some get none. There is no system, just whoever remembers to check the inbox or CRM.",
              },
              {
                title: "No follow-up sequence after the first contact",
                body: "Most leads do not convert on the first touch. They need two, three, sometimes five follow-ups before they book. Without automation, those touches rarely happen.",
              },
              {
                title: "Leads fall through the cracks between tools",
                body: "A lead comes in through the website form, another through Instagram DM, another by phone. Without a unified follow-up system, some get lost entirely.",
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

        {/* What AI follow-up actually does */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What AI lead follow-up actually does
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            It is not a chatbot sitting on your website. It is a system that
            handles the full follow-up sequence from first contact through
            booking:
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Instant first response",
                body: "Every lead gets contacted within seconds of submitting a form, sending a message, or calling. SMS, email, or both. No waiting for your team to notice.",
              },
              {
                icon: MessageSquare,
                title: "Multi-touch follow-up sequences",
                body: "If the lead does not respond to the first message, the system follows up over the next days with a structured sequence. Different messages, different angles, different channels.",
              },
              {
                icon: Target,
                title: "Lead qualification",
                body: "The system asks qualifying questions before booking. Service type, budget range, timeline, location. Qualified leads go to your calendar. Poor fits get filtered.",
              },
              {
                icon: Mail,
                title: "Multi-channel outreach",
                body: "SMS, email, and web chat all handled from one system. The follow-up matches the channel the lead came in on and adds secondary channels if needed.",
              },
              {
                icon: BarChart3,
                title: "CRM logging and tracking",
                body: "Every interaction is logged in your CRM automatically. Lead status, conversation history, qualification data. Your team sees exactly where every lead stands.",
              },
              {
                icon: Users,
                title: "Handoff to your team",
                body: "When a lead is qualified and ready to talk, the system books them or routes them to the right person on your team with full context. No cold transfers.",
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

        {/* Who benefits most */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Businesses that benefit most
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            AI lead follow-up works best when your revenue depends on converting
            inbound inquiries into booked appointments or closed deals:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            {[
              { name: "Home services (HVAC, plumbing, roofing)", detail: "Estimate requests, service calls, seasonal demand spikes" },
              { name: "Medical and dental practices", detail: "New patient inquiries, appointment requests, insurance questions" },
              { name: "Legal and financial services", detail: "Consultation requests, intake qualification, document follow-up" },
              { name: "Real estate teams", detail: "Buyer/seller inquiries, showing requests, market updates" },
              { name: "B2B service providers", detail: "Demo requests, proposal follow-up, pipeline nurturing" },
              { name: "Fitness, wellness, and coaching", detail: "Trial bookings, program inquiries, membership follow-up" },
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

        {/* What the numbers look like */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What the numbers typically look like
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            These are the ranges we see across service businesses that implement
            AI-powered lead follow-up:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
            {[
              { metric: "Response time", before: "2 to 48 hours", after: "Under 60 seconds" },
              { metric: "Lead contact rate", before: "30 to 50%", after: "85 to 95%" },
              { metric: "Follow-up consistency", before: "1 to 2 touches", after: "5 to 7 touches over 14 days" },
              { metric: "Booking rate from inquiries", before: "10 to 20%", after: "25 to 40%" },
            ].map((item, i) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="rounded-2xl border border-border/60 bg-background/60 p-5"
              >
                <h3 className="text-base font-semibold text-foreground mb-3">
                  {item.metric}
                </h3>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-muted-foreground">{item.before}</span>
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{item.after}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-3xl leading-relaxed">
            Results vary by industry, lead volume, and existing processes. These
            ranges reflect what is typical, not guaranteed.
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
                  "You get 20+ inbound leads per week and cannot respond to all of them quickly",
                  "Your revenue depends on converting inquiries into appointments or calls",
                  "You lose leads after hours, on weekends, or during busy periods",
                  "Your follow-up is inconsistent and you know leads are falling through",
                  "You have a CRM but lead data is messy or incomplete",
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
                  "You get fewer than 5 leads per week (manual follow-up is fine at that volume)",
                  "Every lead requires a custom proposal or complex scoping before any response",
                  "You do not have a defined service offering or booking process",
                  "Your leads come exclusively through referrals with warm introductions",
                  "You are looking for outbound prospecting, not inbound follow-up",
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

        {/* Related resources */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Related resources
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            {[
              {
                industry: "E-Commerce",
                headline: "5,600 untouched leads to full automation",
                body: "A US auto parts brand had thousands of leads sitting in their CRM with no follow-up. We built an automated pipeline that enrolled every lead in sequences, tripled team capacity, and lifted conversions 185%.",
                link: "/case-studies/ecommerce-crm-automation",
              },
              {
                industry: "Restaurant",
                headline: "100% of after-hours calls answered",
                body: "A NYC restaurant was missing reservations every night after close. A 24/7 AI voice agent now handles all calls, books tables, and routes complex requests. Freed up roughly 15 hours of management time per week.",
                link: "/case-studies/paris-cafe-voice-agent",
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
              to="/ai-appointment-setter"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              AI appointment setter guide
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
              to="/ai-automation-for-hvac-companies"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              HVAC automation guide
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
            Practical answers about AI lead follow-up for service businesses
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
                Book a 30-minute call. We will look at your current lead flow,
                identify where leads are going cold, and map out what an
                automated follow-up system would look like for your business.
              </p>
              <p className="text-sm text-muted-foreground">
                No hard sell. Just a clear look at whether AI follow-up makes
                sense for your situation.
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
                { icon: CheckCircle2, text: "Identify where leads go cold" },
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

export default AiLeadFollowUpForServiceBusinesses;
