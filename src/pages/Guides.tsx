import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "@/lib/helmet";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const guides = [
  {
    title: "AI Automation Consultant for Small Business",
    description:
      "What an AI automation consultant actually does, how to tell if your business is a fit, and how to evaluate your options.",
    href: "/ai-automation-consultant-small-business",
  },
  {
    title: "n8n vs Zapier for Small Business",
    description:
      "A practical comparison for business owners. When Zapier is enough, when n8n is the better fit, and what actually matters for cost and complexity.",
    href: "/n8n-vs-zapier-small-business",
  },
  {
    title: "AI Appointment Setter for Service Businesses",
    description:
      "What an AI appointment setter does, where it helps most, and how to decide if it is the right move for your business.",
    href: "/ai-appointment-setter",
  },
  {
    title: "AI Voice Agent for Restaurants",
    description:
      "How AI phone answering works for restaurants. When it helps bookings, where it fails, and whether it is worth implementing.",
    href: "/ai-voice-agent-for-restaurants",
  },
  {
    title: "AI Lead Follow-Up for Service Businesses",
    description:
      "How AI lead follow-up works. Respond to every inquiry in seconds, run multi-touch sequences automatically, and stop losing leads to slow response times.",
    href: "/ai-lead-follow-up-for-service-businesses",
  },
  {
    title: "AI Automation Consultant Calgary",
    description:
      "AI automation consulting for Calgary businesses. Custom automations for lead follow-up, scheduling, CRM workflows, and operations. Fixed pricing, clear scope.",
    href: "/ai-automation-consultant-calgary",
  },
  {
    title: "AI Automation Consultant Edmonton",
    description:
      "AI automation consulting for Edmonton businesses. Custom automations for lead follow-up, scheduling, CRM workflows, and operations. Fixed pricing, clear scope.",
    href: "/ai-automation-consultant-edmonton",
  },
  {
    title: "AI Automation for HVAC Companies",
    description:
      "Honest overview of AI automation for HVAC — what works today, what's overhyped, common starting points, and realistic ROI expectations.",
    href: "/ai-automation-for-hvac-companies",
  },
  {
    title: "Hire an AI Automation Consultant vs. Agency vs. DIY",
    description:
      "Comparing your options for AI automation: solo consultant, agency, or doing it yourself. Honest breakdown of cost, speed, quality, and what makes sense for your business.",
    href: "/hire-ai-automation-consultant-vs-agency",
  },
  {
    title: "HVAC Database Reactivation",
    description:
      "How HVAC companies use AI-powered database reactivation to re-engage past customers and cold leads. Turn dormant contacts into booked jobs with automated outreach.",
    href: "/hvac-database-reactivation",
  },
  {
    title: "HVAC Lead Follow-Up Automation",
    description:
      "How HVAC companies stop losing jobs to slow response. Automated follow-up for web forms, missed calls, and quote nurture.",
    href: "/hvac-lead-follow-up-automation",
  },
  {
    title: "HVAC Missed Call Text Back",
    description:
      "Never lose an HVAC lead to voicemail again. Instant text-back when a call goes unanswered — how it works and what it costs.",
    href: "/hvac-missed-call-text-back",
  },
  {
    title: "AI Appointment Setter for HVAC",
    description:
      "AI-powered scheduling for HVAC service calls. Book appointments, send confirmations, and reduce no-shows without phone tag.",
    href: "/ai-appointment-setter-for-hvac",
  },
  {
    title: "AI Automation Consultant vs. Freelancer",
    description:
      "Deciding between an AI automation consultant and a freelancer? Compare pricing, accountability, expertise, and project outcomes for small businesses.",
    href: "/ai-automation-consultant-vs-freelancer",
  },
  {
    title: "AI Chatbot vs. AI Voice Agent for Lead Qualification",
    description:
      "Should you use an AI chatbot or a voice agent to qualify leads? Compare response rates, conversion, cost, and implementation for service businesses.",
    href: "/ai-chatbot-vs-ai-voice-agent-for-lead-qualification",
  },
  {
    title: "GoHighLevel vs. Custom CRM for Small Business",
    description:
      "Comparing GoHighLevel and custom-built CRM solutions for small businesses. Cost, flexibility, time-to-value, and what makes sense at different stages.",
    href: "/gohighlevel-vs-custom-crm-small-business",
  },
  {
    title: "AI Automation Consultant Pricing for Small Business",
    description:
      "What does an AI automation consultant cost? Honest pricing breakdown — project fees, retainers, hourly rates, and what drives the price up or down.",
    href: "/ai-automation-consultant-pricing-small-business",
  },
  {
    title: "Best AI Automations for Service Businesses",
    description:
      "Which AI automations actually move the needle? A decision framework for HVAC, dental, legal, real estate, and other service companies.",
    href: "/best-ai-automation-for-service-businesses",
  },
  {
    title: "AI Automation for Businesses Without a Tech Team",
    description:
      "Can you automate without developers or IT staff? Yes. What works, what does not, and how to decide if you are ready.",
    href: "/ai-automation-for-businesses-without-a-tech-team",
  },
  {
    title: "AI Automation Consultant Alberta",
    description:
      "AI automation consulting for Alberta businesses. Lead follow-up, scheduling, CRM workflows, and operations. Based in Calgary, serving the entire province.",
    href: "/ai-automation-consultant-alberta",
  },
  {
    title: "AI Automation Consultant Canada",
    description:
      "AI automation consulting for Canadian businesses coast to coast. Remote delivery, fixed pricing, and clear scope for lead follow-up, scheduling, and CRM automation.",
    href: "/ai-automation-consultant-canada",
  },
  {
    title: "AI Automation for Real Estate",
    description:
      "AI automation for real estate agents and teams. Lead follow-up, showing coordination, CRM workflows, and drip campaigns. What works and where to start.",
    href: "/ai-automation-for-real-estate",
  },
  {
    title: "AI Automation for Mortgage Brokers",
    description:
      "AI automation for mortgage brokers. Lead follow-up, document collection, application nurture, and CRM workflows. Practical guide for brokerages.",
    href: "/ai-automation-for-mortgage-brokers",
  },
  {
    title: "AI Automation for Dental Practices",
    description:
      "AI automation for dental practices. Patient booking, recall campaigns, appointment reminders, intake forms, and no-show follow-up.",
    href: "/ai-automation-for-dental-practices",
  },
  {
    title: "AI Automation for Law Firms",
    description:
      "AI automation for law firms. Client intake, consultation booking, lead follow-up, and case status updates. What works for small to mid-size practices.",
    href: "/ai-automation-for-law-firms",
  },
  {
    title: "AI Automation for Accounting Firms",
    description:
      "AI automation for accounting firms. Client onboarding, document collection, appointment scheduling, and seasonal workflows for CPA and bookkeeping practices.",
    href: "/ai-automation-for-accounting-firms",
  },
  {
    title: "AI Automation for Plumbing Companies",
    description:
      "AI automation for plumbing companies. Missed call text-back, lead follow-up, appointment scheduling, estimate follow-up, and review automation.",
    href: "/ai-automation-for-plumbing-companies",
  },
  {
    title: "AI Automation for Electrical Contractors",
    description:
      "AI automation for electrical contractors. Lead follow-up, missed call text-back, scheduling, estimate follow-up, and review automation.",
    href: "/ai-automation-for-electrical-contractors",
  },
];

const Guides = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Guides | Dmytro AI</title>
        <meta
          name="description"
          content="Practical guides for small businesses exploring AI automation. Comparisons, use cases, and decision frameworks to help you make informed choices."
        />
        <link rel="canonical" href="https://www.dmytroai.com/guides" />
        <meta property="og:title" content="Guides | Dmytro AI" />
        <meta
          property="og:description"
          content="Practical guides for small businesses exploring AI automation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dmytroai.com/guides" />
      </Helmet>

      <Navbar />

      <main className="pt-24 md:pt-28">
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
                <BookOpen className="w-4 h-4" />
                Guides
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                Practical Guides for Small Business Automation
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Comparisons, use cases, and decision frameworks. No fluff, no
                affiliate links. Just the information you need to make a good
                call.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-tight">
            <div className="grid gap-6 max-w-4xl">
              {guides.map((guide, i) => (
                <motion.div
                  key={guide.href}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={guide.href}
                    className="group flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 shadow-card hover:shadow-card-hover transition-shadow"
                  >
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {guide.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {guide.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Guides;
