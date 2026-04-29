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
  Users,
  Zap,
  XCircle,
  Bot,
  BarChart3,
  MessageSquare,
  CalendarCheck,
  Phone,
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
/*  FAQ accordion (self-contained for this page)                       */
/* ------------------------------------------------------------------ */
const faqItems = [
  {
    question: "How is working with a consultant different from hiring a freelancer on Upwork?",
    answer:
      "A freelancer builds what you spec. A consultant figures out what to build first. The value is in the diagnosis: identifying which process to automate, in what order, and how it connects to your existing tools. That upstream thinking is what determines whether an automation actually sticks or gets abandoned in two months. See our full guide on how to hire an AI automation consultant for the evaluation criteria that matter most.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most builds go from first call to live in 1 to 3 weeks. A basic lead follow-up workflow is typically 5 to 7 days. A full AI voice agent with booking integration takes 2 to 3 weeks. You'll see the first results as soon as the system is live. There's no long ramp-up period.",
  },
  {
    question: "Do I need to be technical to use what you build?",
    answer:
      "No. Every system I build comes with a dashboard you can manage without touching code. I document how it works, train your team on the basics, and handle all maintenance. You run your business; the automation runs in the background.",
  },
  {
    question: "What if I'm not sure what to automate first?",
    answer:
      "That's exactly what the initial call is for. We'll walk through your current workflows, identify where time and money are leaking, and figure out the highest-impact first move. If you want to self-diagnose before booking, compare the Paris Cafe case study for phone coverage and booking flow, the WheelsFeels case study for CRM cleanup and lead follow-up, and the best-first-automation guide for the most common small-business starting points. You don't need to arrive with a perfect plan. That's my job.",
  },
  {
    question: "What does a first consultant project usually turn into?",
    answer:
      "For most small businesses, the first project is not a giant AI rollout. It is one bounded operating problem: lead follow-up, missed-call recovery, scheduling and reminders, CRM cleanup, or reactivation. The best first project is the one tied to a live bottleneck you can already see in missed leads, slow response time, or admin drag. If you want to compare those starting points before booking, use the best-first-automation guide, the implementation roadmap, and the case studies together.",
  },
  {
    question: "Are there any hidden costs?",
    answer:
      "No. I quote fixed prices for the build. You'll also have small monthly platform costs (like n8n hosting or CRM fees) which we'll discuss during the mapping stage. I optimize for the lowest long-term cost, often replacing expensive tools with self-hosted alternatives like n8n.",
  },
  {
    question: "How do you handle security and privacy?",
    answer:
      "I prioritize data security by using official APIs and enterprise-grade platforms (Supabase, n8n, GoHighLevel). For businesses with sensitive data, we can self-host the automation layer so your data never leaves your infrastructure. We'll discuss your specific security needs during the scoping call.",
  },
  {
    question: "What happens after the build is done?",
    answer:
      "Every build includes a 30-day support window. For ongoing monitoring, fixes, and optimization, I offer monthly retainer plans. I built the system, so when something needs updating, I know exactly where to look.",
  },
  {
    question: "Can you work with the tools I already use?",
    answer:
      "Almost always. I build on platforms like n8n, GoHighLevel, Supabase, and standard APIs. If you're already using a CRM, scheduling tool, or email platform, the automation plugs into what you have. No rip-and-replace required.",
  },
  {
    question: "Should I hire a consultant or try automating one workflow myself first?",
    answer:
      "If the task is a single trigger-to-action sequence with low stakes, try it yourself using a tool like Zapier or n8n. If the workflow touches multiple systems, is customer-facing, or needs to work reliably from day one, a consultant will get you there faster and with fewer false starts. The deciding factor is usually complexity: one tool doing one thing is DIY territory; multiple tools that need to stay in sync is consultant territory.",
  },
];

/* ------------------------------------------------------------------ */
/*  Section wrapper for consistent animation                           */
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
const AiAutomationConsultantSmallBusiness = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Automation Consultant for Small Business | Dmytro AI</title>
        <meta
          name="description"
          content="AI automation consultant for small businesses. Reduce manual work, respond to leads faster, and build systems that run without adding headcount. See what it looks like and whether your business is a fit."
        />
        <link
          rel="canonical"
          href="https://www.dmytroai.com/ai-automation-consultant-small-business"
        />
        <meta
          property="og:title"
          content="AI Automation Consultant for Small Business | Dmytro AI"
        />
        <meta
          property="og:description"
          content="What an AI automation consultant actually does for small businesses, and how to tell if you need one."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.dmytroai.com/ai-automation-consultant-small-business"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "AI Automation Consulting for Small Business",
            description:
              "Hands-on AI automation consulting for small businesses. Custom systems for lead follow-up, scheduling, CRM, voice agents, and workflow automation.",
            provider: { "@id": "https://www.dmytroai.com/#person" },
            url: "https://www.dmytroai.com/ai-automation-consultant-small-business",
            areaServed: ["Canada", "USA", "UK"],
            knowsAbout: ["AI Automation", "Workflow Optimization", "CRM Implementation", "AI Voice Agents", "n8n", "GoHighLevel"],
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.dmytroai.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Guides",
                item: "https://www.dmytroai.com/guides",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "AI Automation Consultant for Small Business",
                item: "https://www.dmytroai.com/ai-automation-consultant-small-business",
              },
            ],
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
                <Zap className="w-4 h-4" />
                AI Automation Consulting
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                AI Automation Consultant for Small Businesses
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                An AI automation consultant for small business audits your day-to-day operations, identifies the manual steps that cost you the most time or lost revenue, and builds systems that handle those steps automatically — lead follow-up, scheduling, CRM workflows, and phone handling.
                <strong> Dmytro AI helps small businesses reduce management time by up to 15 hours per week</strong> and increase team capacity without hiring more staff. Fixed-price builds, typically $1.5K–$8K, with a working system live in 1–3 weeks.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Below: <Link to="/what-does-an-ai-automation-consultant-do" className="text-primary hover:text-primary/80 underline underline-offset-2">what a consultant actually does</Link>, how to tell if your
                business is a fit, <Link to="/ai-automation-consultant-pricing-small-business" className="text-primary hover:text-primary/80 underline underline-offset-2">what it costs</Link>, and how to evaluate your options.
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

        {/* ── Buyer routing ───────────────────────────────────────── */}
        <Section>
          <div className="rounded-2xl border border-border/60 bg-card/80 p-5 md:p-6">
            <p className="text-sm font-semibold text-foreground mb-3">
              Start from where you are
            </p>
            <p className="text-sm text-muted-foreground mb-4 max-w-3xl leading-relaxed">
              This page covers what an AI automation consultant does for small
              businesses and how to tell if you need one. If you already know
              that, the pages below will be more useful:
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  text: "See proof first — real results from real builds",
                  href: "/case-studies",
                },
                {
                  text: "Understand pricing — what projects actually cost",
                  href: "/ai-automation-consultant-pricing-small-business",
                },
                {
                  text: "Pick your first project — best starting automations",
                  href: "/best-ai-automation-for-service-businesses",
                },
                {
                  text: "Compare hiring vs. DIY — when expert help is worth it",
                  href: "/hire-ai-automation-consultant-vs-diy",
                },
                {
                  text: "No tech team — automation without technical staff",
                  href: "/ai-automation-for-businesses-without-a-tech-team",
                },
                {
                  text: "Step-by-step guides — lead follow-up, scheduling, CRM",
                  href: "/guides",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group flex items-center gap-2 rounded-xl border border-border/40 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-background transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Proof router ─────────────────────────────────────────── */}
        <Section>
          <div className="rounded-3xl border border-primary/15 bg-primary/5 p-6 md:p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
              Match the proof to your bottleneck
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
              If you are considering a consultant, start with the proof closest to your problem
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              This page explains what consultant help looks like. These three proof assets show what that help turns into in practice: after-hours phone coverage and booking flow, CRM cleanup plus lead follow-up, and automated qualification for higher-volume inbound.
            </p>
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  title: "Paris Cafe — phone coverage and booking flow",
                  body: "Use this if the real problem is missed calls, after-hours coverage, or warm leads going cold before anyone can book them. Paris Cafe went from 0% to 100% after-hours call coverage and cut web lead response time to under 60 seconds.",
                  href: "/case-studies/paris-cafe-voice-agent",
                },
                {
                  title: "WheelsFeels — CRM cleanup and lead follow-up",
                  body: "Use this if your CRM is messy, old leads sit untouched, or the team does too much manual follow-up. WheelsFeels automated follow-up for 5,600+ leads and improved conversion by 185%.",
                  href: "/case-studies/ecommerce-crm-automation",
                },
                {
                  title: "Instagram lead generation — qualification and routing",
                  body: "Use this if the question is not just follow-up but how to capture, qualify, and route more inbound without adding headcount. This build now produces 50+ qualified leads per day at roughly $0.29 per lead.",
                  href: "/case-studies/instagram-lead-generation",
                },
              ].map((item) => (
                <div key={item.href} className="rounded-2xl border border-border/60 bg-background/80 p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.body}</p>
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1"
                  >
                    Read the case study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link to="/case-studies" className="font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1">
                View all case studies <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/best-ai-automation-for-service-businesses" className="font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1">
                Compare the best first automations <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Section>

        {/* ── When is consultant help worth paying for first ──────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            When is consultant help worth paying for first?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Most small businesses hit a point where the cost of not automating
            is higher than the cost of hiring help. Here are the four scenarios
            where paying a consultant now saves more than waiting.
          </p>
          <div className="grid gap-5 md:grid-cols-2 max-w-5xl">
            {[
              {
                icon: Clock,
                title: "Leads are going cold because nobody responds fast enough",
                body: "If your average response time is hours or days, every week you wait is revenue you already paid to generate walking out the door. A consultant scopes and ships a lead-response system in days, not months of trial-and-error.",
                links: [
                  { label: "Best first automations", href: "/best-ai-automation-for-service-businesses" },
                  { label: "What it costs", href: "/ai-automation-consultant-pricing-small-business" },
                ],
              },
              {
                icon: AlertTriangle,
                title: "You tried DIY tools and the workflow broke or stalled",
                body: "A half-built Zapier chain or abandoned n8n flow means you already spent the time and still have the problem. A consultant picks up where you stopped, fixes what's broken, and finishes the job with a system that stays running.",
                links: [
                  { label: "Consultant vs. DIY breakdown", href: "/hire-ai-automation-consultant-vs-diy" },
                  { label: "Case studies", href: "/case-studies" },
                ],
              },
              {
                icon: Users,
                title: "You have no technical staff and can't debug integrations",
                body: "When nobody on the team can troubleshoot API errors or broken triggers, every outage becomes a fire drill. A consultant builds the system, documents it, and hands off something your non-technical team can actually operate.",
                links: [
                  { label: "No-tech-team guide", href: "/ai-automation-for-businesses-without-a-tech-team" },
                  { label: "Implementation roadmap", href: "/ai-automation-implementation-roadmap" },
                ],
              },
              {
                icon: BarChart3,
                title: "You're about to hire for a role that automation could replace",
                body: "If the job description is mostly data entry, follow-up, or scheduling, a one-time automation build often costs less than two months of salary — and runs 24/7 without onboarding or turnover.",
                links: [
                  { label: "What it costs", href: "/ai-automation-consultant-pricing-small-business" },
                  { label: "Best first automations", href: "/best-ai-automation-for-service-businesses" },
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-card flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {item.body}
                </p>
                <div className="flex flex-wrap gap-3">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── What a consultant actually does ─────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What an AI automation consultant actually does
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            The title sounds broad, so let's make it concrete. A good AI
            automation consultant for small business does three things:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: BarChart3,
                title: "Diagnoses",
                body: "Maps your current workflows and finds the specific bottlenecks where time, money, or leads are leaking. This is the part most businesses can't do on their own. Not because they're not smart, but because they're too close to the work.",
              },
              {
                icon: Zap,
                title: "Builds",
                body: "Designs and implements automations that plug those gaps using tools like n8n, GoHighLevel, AI voice agents, or custom integrations. Not generic templates. Systems built around how your business actually runs.",
              },
              {
                icon: Users,
                title: "Hands off cleanly",
                body: "Delivers a working system with documentation and a dashboard your team can operate. No vendor lock-in, no dependency. You own the system.",
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
          <p className="text-base text-muted-foreground mt-8 leading-relaxed max-w-3xl">
            The difference between a consultant and a tool vendor: a tool vendor
            sells you software. A consultant figures out whether you need software
            at all, and if so, which piece to build first. For a deeper breakdown, see{" "}
            <Link to="/what-does-an-ai-automation-consultant-do" className="text-primary hover:text-primary/80 underline underline-offset-2">what an AI automation consultant actually does</Link>.
          </p>
        </Section>

        {/* ── Signs your business is a fit ────────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Signs your business is ready for automation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            You don't need to be "tech-forward" or have a big budget. But these
            patterns usually mean automation will have a meaningful impact:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
            {[
              "You or your team spend hours each week on the same steps: data entry, follow-ups, scheduling, reporting.",
              "Leads come in but don't get contacted fast enough, or at all.",
              "You've hired (or want to hire) someone mainly to handle repetitive admin.",
              "You're turning away work because your current capacity can't keep up.",
              "You've tried tools like Zapier or ChatGPT but couldn't get them to stick.",
              "Your CRM has thousands of contacts but no systematic follow-up.",
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
            If three or more of these apply, you're probably leaving significant
            time or revenue on the table.
          </p>
        </Section>

        {/* ── Best-fit businesses ──────────────────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Businesses that get the most from this
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            AI automation works across industries, but the biggest wins tend to
            come from businesses with high lead volume, appointment-based
            revenue, or repeat customer workflows:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            {[
              { name: "Restaurants & hospitality", detail: "Reservations, after-hours calls, review management" },
              { name: "Home services (HVAC, plumbing, electrical)", detail: "Lead routing, scheduling, follow-up" },
              { name: "Real estate & mortgage", detail: "Lead qualification, drip campaigns, CRM cleanup" },
              { name: "Medical & dental practices", detail: "Appointment reminders, intake forms, patient follow-up" },
              { name: "E-commerce brands", detail: "Customer support, order tracking, abandoned cart recovery" },
              { name: "Professional services & agencies", detail: "Client onboarding, reporting, proposal automation" },
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

        {/* ── What this can help automate ──────────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What automation typically replaces
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            These are the workflows I build most often for small businesses. Each
            one starts manual and ends with a system that runs without daily
            attention:
          </p>
          <div className="grid gap-5 sm:grid-cols-2 max-w-4xl">
            {[
              {
                icon: MessageSquare,
                title: "Lead follow-up & nurture",
                body: "Automated email/SMS sequences triggered the moment a lead comes in. No more 48-hour response gaps.",
              },
              {
                icon: Phone,
                title: "Phone handling & voice agents",
                body: "AI voice agents that answer calls 24/7. Take messages, book appointments, route complex inquiries to your team.",
              },
              {
                icon: CalendarCheck,
                title: "Scheduling & reminders",
                body: "Automated booking flows, confirmation texts, and reminder sequences that cut no-shows.",
              },
              {
                icon: Bot,
                title: "CRM organization & reactivation",
                body: "Clean up messy lead databases, tag and segment contacts, and run automated campaigns to re-engage cold leads.",
              },
              {
                icon: BarChart3,
                title: "Reporting & dashboards",
                body: "Automated reports pulled from your tools and delivered on schedule. No manual spreadsheet work.",
              },
              {
                icon: Zap,
                title: "Custom workflow automation",
                body: "Any multi-step process your team runs the same way every time: intake forms, onboarding, data sync between tools.",
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
            For step-by-step implementation guides, see{" "}
            <Link to="/ai-lead-follow-up-for-service-businesses" className="text-primary hover:text-primary/80 underline underline-offset-2">AI lead follow-up</Link> and{" "}
            <Link to="/ai-appointment-setter" className="text-primary hover:text-primary/80 underline underline-offset-2">AI appointment setter</Link>. Or browse{" "}
            <Link to="/guides" className="text-primary hover:text-primary/80 underline underline-offset-2">all automation guides</Link>.
          </p>
        </Section>

        {/* ── Proof / case study references ────────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What this looks like in practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Three recent projects that show the range of what automation changes
            for small businesses:
          </p>
          <div className="grid gap-6 md:grid-cols-3">
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
                body: "Manual Instagram prospecting took hours and produced a handful of leads. An automated n8n + AI pipeline now discovers, qualifies, and delivers leads daily at $0.29 each, with zero manual work.",
                link: "/case-studies/instagram-lead-generation",
              },
              {
                industry: "E-commerce",
                headline: "3x follow-up capacity",
                body: "5,600+ leads were sitting in spreadsheets with no systematic outreach. A full CRM build with automated email sequences organized every contact and tripled the team's effective capacity without adding headcount.",
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
              to="/case-studies"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              View all case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/ai-lead-follow-up-for-service-businesses"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              AI lead follow-up guide
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
              to="/hire-ai-automation-consultant-vs-agency"
              className="text-base font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              Consultant vs. agency comparison
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        {/* ── What a first consultant project usually is ───────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What a first consultant project usually turns into
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Most small businesses do not start with a giant AI transformation. The
            first win is usually one bottleneck with a clear owner, a measurable
            leak, and a simple before-and-after story.
          </p>
          <div className="grid gap-5 md:grid-cols-2 max-w-5xl">
            {[
              {
                title: "Leads are waiting too long",
                body:
                  "The first project is usually instant response plus short follow-up so form fills and inbound inquiries stop sitting for hours or days.",
                links: [
                  { label: "AI lead follow-up", href: "/ai-lead-follow-up-for-service-businesses" },
                  { label: "Estimate / quote follow-up", href: "/estimate-follow-up-automation-for-service-businesses" },
                ],
              },
              {
                title: "Calls are getting missed after hours",
                body:
                  "The first project is usually missed-call recovery or live AI phone coverage, depending on volume, caller expectations, and how fast the team can call back.",
                links: [
                  { label: "Missed-call text-back", href: "/missed-call-text-back-for-service-businesses" },
                  { label: "AI phone answering", href: "/ai-phone-answering-for-service-businesses" },
                ],
              },
              {
                title: "Booked appointments are still leaking",
                body:
                  "The first project is usually scheduling, confirmation, reminder, and no-show protection so warm demand actually turns into attended appointments.",
                links: [
                  { label: "Scheduling and reminders", href: "/appointment-scheduling-and-reminder-automation-for-service-businesses" },
                  { label: "AI appointment setter", href: "/ai-appointment-setter" },
                ],
              },
              {
                title: "The CRM is messy and old leads go untouched",
                body:
                  "The first project is usually database cleanup, segmentation, and reactivation so the business gets value from contacts it already paid to acquire.",
                links: [
                  { label: "Client reactivation", href: "/client-reactivation-automation-for-service-businesses" },
                  { label: "Implementation roadmap", href: "/ai-automation-implementation-roadmap" },
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-card"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.body}
                </p>
                <div className="flex flex-wrap gap-3">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-3xl leading-relaxed">
            If you want to compare these starting points before booking a call, use the{" "}
            <Link to="/best-ai-automation-for-service-businesses" className="text-primary hover:text-primary/80 underline underline-offset-2">best-first-automation page</Link>, the{" "}
            <Link to="/case-studies" className="text-primary hover:text-primary/80 underline underline-offset-2">case studies hub</Link>, and the{" "}
            <Link to="/ai-automation-maintenance-and-support-small-business" className="text-primary hover:text-primary/80 underline underline-offset-2">maintenance and support guide</Link>{" "}
            together. They show what usually gets built first, what proof on this site supports it, and what ongoing ownership looks like once the workflow goes live.
          </p>
        </Section>

        {/* ── Consultant vs agency vs DIY ──────────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Consultant vs. agency vs. DIY
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            There's more than one way to get automation into your business. Here's
            an honest comparison so you can pick the right path:
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
                    Agency
                  </th>
                  <th className="py-3 px-4 font-semibold text-foreground">
                    DIY (Zapier, ChatGPT, etc.)
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Diagnosis", "Deep: maps your actual workflow", "Template-driven", "You figure it out yourself"],
                  ["Build speed", "1–3 weeks typical", "4–8 weeks", "Weeks to months of tinkering"],
                  ["Cost", "$1.5K–$8K one-time", "$5K–$25K+", "Low upfront, high time cost"],
                  ["Customization", "Built for your process", "Adapted from templates", "Limited by platform"],
                  ["Ongoing support", "Direct access to the builder", "Account manager (not the builder)", "Community forums"],
                  ["Best for", "Businesses that want a working system fast", "Large orgs with big budgets", "Simple, single-step automations"],
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
            If your automation is a single Zap or a ChatGPT prompt, DIY is fine.
            If you need a system that connects multiple tools, handles edge cases,
            and runs reliably without babysitting, that's consultant territory.
            See the detailed breakdowns:{" "}
            <Link to="/hire-ai-automation-consultant-vs-diy" className="text-primary hover:text-primary/80 underline underline-offset-2">consultant vs. DIY</Link>,{" "}
            <Link to="/hire-ai-automation-consultant-vs-agency" className="text-primary hover:text-primary/80 underline underline-offset-2">consultant vs. agency</Link>, and{" "}
            <Link to="/ai-automation-consultant-pricing-small-business" className="text-primary hover:text-primary/80 underline underline-offset-2">consultant pricing for small business</Link>.
          </p>
        </Section>

        {/* ── Consultant or one bounded workflow ────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            When to hire a consultant vs. start with one bounded workflow
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Not every automation problem needs a consultant. Some are better
            solved by picking one workflow, building it yourself, and seeing what
            happens. Here's how to tell the difference.
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Start with one workflow yourself
              </h3>
              <ul className="space-y-3">
                {[
                  "The task is a single, linear trigger-to-action sequence (form submitted, send confirmation email).",
                  "You're comfortable experimenting inside Zapier, Make, or n8n.",
                  "The stakes are low. Nothing breaks if it's down for a day.",
                  "You want to feel how automation works before investing.",
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
                <Users className="w-5 h-5 text-primary" />
                Bring in a consultant
              </h3>
              <ul className="space-y-3">
                {[
                  "The workflow touches multiple systems (CRM + calendar + email + phone).",
                  "Speed matters. Leads are leaking now and every week of tinkering is lost revenue.",
                  "You already tried a DIY approach and it stalled or got messy.",
                  "Nobody on the team can debug a broken automation.",
                  "The first project is customer-facing and needs to work reliably from day one.",
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
          <p className="text-sm text-muted-foreground mt-6 max-w-3xl leading-relaxed">
            If you're in the first column, the{" "}
            <Link to="/best-ai-automation-for-service-businesses" className="text-primary hover:text-primary/80 underline underline-offset-2">best-first-automation guide</Link>{" "}
            will help you pick the right workflow. If you're in the second, the{" "}
            <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 underline underline-offset-2 text-sm font-normal" onClick={scrollToBooking}>30-minute call</Button>{" "}
            is the fastest way to scope what's worth building. Not sure yet?{" "}
            <Link to="/ai-automation-cost-small-business" className="text-primary hover:text-primary/80 underline underline-offset-2">Check what it costs</Link> or{" "}
            <Link to="/ai-automation-for-businesses-without-a-tech-team" className="text-primary hover:text-primary/80 underline underline-offset-2">read the no-tech-team guide</Link>.
          </p>
        </Section>

        {/* ── What working together looks like ─────────────────────── */}
        <Section className="bg-secondary/30">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            What working together looks like
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            No long proposals. No months of discovery. Here's the actual process:
          </p>
          <div className="max-w-3xl space-y-6">
            {[
              {
                step: "1",
                title: "30-minute strategy call",
                body: "We walk through your current operations and identify the highest-impact automation opportunity. Free, no commitment.",
              },
              {
                step: "2",
                title: "Scope & quote",
                body: "Within 48 hours you get a clear scope document: what gets built, what it connects to, timeline, and fixed price. No hourly billing surprises.",
              },
              {
                step: "3",
                title: "Build (1–3 weeks)",
                body: "I build the system, test it, and share progress along the way. You'll see working pieces before the final handoff, not a big reveal at the end.",
              },
              {
                step: "4",
                title: "Handoff & training",
                body: "You get documentation, a walkthrough, and a dashboard you can manage. 30-day support included. Optional monthly retainer for ongoing optimization.",
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

        {/* ── Fit / non-fit ────────────────────────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Good fit / not a fit
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            I'd rather be upfront now than waste your time on the call. Here's who
            this works well for, and who it doesn't:
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Good fit
              </h3>
              <ul className="space-y-3">
                {[
                  "You have a real business with paying customers",
                  "You can point to specific tasks that eat up your time",
                  "You want a system that runs without you babysitting it",
                  "You're ready to invest in infrastructure, not just another tool trial",
                  "You value speed and direct communication",
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
                  "You're pre-revenue and still validating your idea",
                  "You want a chatbot just because everyone has one",
                  "You need enterprise-scale infrastructure for 500+ employees",
                  "You're looking for the cheapest possible option regardless of quality",
                  "You need a full-time in-house developer, not a project-based consultant",
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

        {/* ── Crawl-priority internal links ─────────────────────────── */}
        <Section className="bg-secondary/30">
          <div className="rounded-3xl border border-primary/15 bg-card/90 p-6 md:p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
              Continue researching
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              The next pages to read before choosing an automation project
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              If you are still deciding what to automate first, use the guides hub, the best-first-automation decision page, and the proof hub together. They explain the sequence, show examples, and help separate useful automation from AI noise.
            </p>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                { label: "What does a consultant do?", href: "/what-does-an-ai-automation-consultant-do" },
                { label: "Consultant pricing", href: "/ai-automation-consultant-pricing-small-business" },
                { label: "How to hire a consultant", href: "/how-to-hire-ai-automation-consultant" },
                { label: "Consultant vs. DIY", href: "/hire-ai-automation-consultant-vs-diy" },
                { label: "Consultant vs. agency", href: "/hire-ai-automation-consultant-vs-agency" },
                { label: "Best first automations", href: "/best-ai-automation-for-service-businesses" },
                { label: "Implementation roadmap", href: "/ai-automation-implementation-roadmap" },
                { label: "Maintenance and support", href: "/ai-automation-maintenance-and-support-small-business" },
                { label: "Automation guides", href: "/guides" },
                { label: "Case studies", href: "/case-studies" },
                { label: "Automation costs", href: "/ai-automation-cost-small-business" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group rounded-2xl border border-border/60 bg-background/80 px-5 py-4 text-sm font-semibold text-foreground hover:border-primary/30 hover:bg-background transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="inline-block ml-2 w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </Section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <Section>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-center">
            Common questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-center leading-relaxed">
            Straight answers about hiring an AI automation consultant
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

        {/* ── Final CTA / Booking ──────────────────────────────────── */}
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
                Ready to see what's worth automating?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-2">
                Book a 30-minute call. We'll look at your current workflows,
                identify the best first move, and you'll leave with a concrete
                direction, whether we work together or not.
              </p>
              <p className="text-sm text-muted-foreground">
                No hard sell. No vague AI buzzwords. Just a clear look at what's
                actually worth automating first.
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
                { icon: CheckCircle2, text: "Identify your highest-impact automation" },
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

export default AiAutomationConsultantSmallBusiness;
