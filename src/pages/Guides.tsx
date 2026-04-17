import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "@/lib/helmet";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type GuideCategory =
  | "strategy"
  | "comparisons"
  | "workflows"
  | "industries"
  | "geo";

interface GuideItem {
  title: string;
  description: string;
  href: string;
  category: GuideCategory;
  featured?: boolean;
}

const categoryMeta: Record<
  GuideCategory,
  { label: string; description: string; anchor: string }
> = {
  strategy: {
    label: "Strategy & buying decisions",
    description:
      "Core pages for business owners figuring out whether automation is worth doing, how much it costs, and who to hire.",
    anchor: "strategy-buying-decisions",
  },
  comparisons: {
    label: "Comparisons",
    description:
      "Direct side-by-side pages for tool choice, delivery model choice, and channel choice.",
    anchor: "comparisons",
  },
  workflows: {
    label: "Workflow systems",
    description:
      "Operational pages for onboarding, lead follow-up, email nurture, ROI, and repeatable automation systems.",
    anchor: "workflow-systems",
  },
  industries: {
    label: "Industry playbooks",
    description:
      "Vertical-specific pages built around common automation patterns for service businesses.",
    anchor: "industry-playbooks",
  },
  geo: {
    label: "Calgary, Edmonton & beyond",
    description:
      "Location-specific pages for business owners looking for a consultant in Calgary, Edmonton, Alberta, or across Canada.",
    anchor: "calgary-edmonton-beyond",
  },
};

const guides: GuideItem[] = [
  {
    title: "AI Automation Consultant for Small Business",
    description:
      "What an AI automation consultant actually does, how to tell if your business is a fit, and how to evaluate your options.",
    href: "/ai-automation-consultant-small-business",
    category: "strategy",
    featured: true,
  },
  {
    title: "AI Automation Consultant Pricing for Small Business",
    description:
      "What does an AI automation consultant cost? Honest pricing breakdown — project fees, retainers, hourly rates, and what drives the price up or down.",
    href: "/ai-automation-consultant-pricing-small-business",
    category: "strategy",
    featured: true,
  },
  {
    title: "Best AI Automations for Service Businesses",
    description:
      "Which AI automations actually move the needle? A decision framework for HVAC, dental, legal, real estate, and other service companies.",
    href: "/best-ai-automation-for-service-businesses",
    category: "strategy",
  },
  {
    title: "AI Automation for Businesses Without a Tech Team",
    description:
      "Can you automate without developers or IT staff? Yes. What works, what does not, and how to decide if you are ready.",
    href: "/ai-automation-for-businesses-without-a-tech-team",
    category: "strategy",
  },
  {
    title: "n8n vs Zapier for Small Business",
    description:
      "A practical comparison for business owners. When Zapier is enough, when n8n is the better fit, and what actually matters for cost and complexity.",
    href: "/n8n-vs-zapier-small-business",
    category: "comparisons",
    featured: true,
  },
  {
    title: "Hire an AI Automation Consultant vs. Agency vs. DIY",
    description:
      "Comparing your options for AI automation: solo consultant, agency, or doing it yourself. Honest breakdown of cost, speed, quality, and what makes sense for your business.",
    href: "/hire-ai-automation-consultant-vs-agency",
    category: "comparisons",
  },
  {
    title: "AI Automation Consultant vs. Freelancer",
    description:
      "Deciding between an AI automation consultant and a freelancer? Compare pricing, accountability, expertise, and project outcomes for small businesses.",
    href: "/ai-automation-consultant-vs-freelancer",
    category: "comparisons",
  },
  {
    title: "AI Chatbot vs. AI Voice Agent for Lead Qualification",
    description:
      "Should you use an AI chatbot or a voice agent to qualify leads? Compare response rates, conversion, cost, and implementation for service businesses.",
    href: "/ai-chatbot-vs-ai-voice-agent-for-lead-qualification",
    category: "comparisons",
  },
  {
    title: "GoHighLevel vs. Custom CRM for Small Business",
    description:
      "Comparing GoHighLevel and custom-built CRM solutions for small businesses. Cost, flexibility, time-to-value, and what makes sense at different stages.",
    href: "/gohighlevel-vs-custom-crm-small-business",
    category: "comparisons",
  },
  {
    title: "AI Appointment Setter for Service Businesses",
    description:
      "What an AI appointment setter does, where it helps most, and how to decide if it is the right move for your business.",
    href: "/ai-appointment-setter",
    category: "workflows",
  },
  {
    title: "AI Lead Follow-Up for Service Businesses",
    description:
      "How AI lead follow-up works. Respond to every inquiry in seconds, run multi-touch sequences automatically, and stop losing leads to slow response times.",
    href: "/ai-lead-follow-up-for-service-businesses",
    category: "workflows",
    featured: true,
  },
  {
    title: "Client Onboarding Automation",
    description:
      "How to automate client onboarding for service businesses. Intake forms, document collection, welcome sequences, scheduling, and CRM pipeline automation.",
    href: "/client-onboarding-automation",
    category: "workflows",
  },
  {
    title: "AI Automation ROI Guide",
    description:
      "How to calculate AI automation ROI for your small business. Real cost breakdowns, payback timelines, and an honest framework for deciding if automation is worth it.",
    href: "/ai-automation-roi-guide",
    category: "workflows",
  },
  {
    title: "n8n Automation Examples for Small Business",
    description:
      "Practical n8n automation examples for small businesses. Lead follow-up, CRM workflows, email sequences, scheduling, and review requests. Real workflows, not toy demos.",
    href: "/n8n-automation-examples-small-business",
    category: "workflows",
  },
  {
    title: "AI Email Sequence Automation",
    description:
      "How AI email sequence automation works for small businesses. Automated follow-up, lead nurture, re-engagement campaigns, and personalized outreach.",
    href: "/ai-email-sequence-automation",
    category: "workflows",
  },
  {
    title: "AI Automation for HVAC Companies",
    description:
      "Honest overview of AI automation for HVAC — what works today, what's overhyped, common starting points, and realistic ROI expectations.",
    href: "/ai-automation-for-hvac-companies",
    category: "industries",
    featured: true,
  },
  {
    title: "HVAC Database Reactivation",
    description:
      "How HVAC companies use AI-powered database reactivation to re-engage past customers and cold leads. Turn dormant contacts into booked jobs with automated outreach.",
    href: "/hvac-database-reactivation",
    category: "industries",
  },
  {
    title: "HVAC Lead Follow-Up Automation",
    description:
      "How HVAC companies stop losing jobs to slow response. Automated follow-up for web forms, missed calls, and quote nurture.",
    href: "/hvac-lead-follow-up-automation",
    category: "industries",
  },
  {
    title: "HVAC Missed Call Text Back",
    description:
      "Never lose an HVAC lead to voicemail again. Instant text-back when a call goes unanswered — how it works and what it costs.",
    href: "/hvac-missed-call-text-back",
    category: "industries",
  },
  {
    title: "AI Appointment Setter for HVAC",
    description:
      "AI-powered scheduling for HVAC service calls. Book appointments, send confirmations, and reduce no-shows without phone tag.",
    href: "/ai-appointment-setter-for-hvac",
    category: "industries",
  },
  {
    title: "AI Voice Agent for Restaurants",
    description:
      "How AI phone answering works for restaurants. When it helps bookings, where it fails, and whether it is worth implementing.",
    href: "/ai-voice-agent-for-restaurants",
    category: "industries",
  },
  {
    title: "AI Automation for Real Estate",
    description:
      "AI automation for real estate agents and teams. Lead follow-up, showing coordination, CRM workflows, and drip campaigns. What works and where to start.",
    href: "/ai-automation-for-real-estate",
    category: "industries",
  },
  {
    title: "AI Automation for Mortgage Brokers",
    description:
      "AI automation for mortgage brokers. Lead follow-up, document collection, application nurture, and CRM workflows. Practical guide for brokerages.",
    href: "/ai-automation-for-mortgage-brokers",
    category: "industries",
  },
  {
    title: "AI Automation for Dental Practices",
    description:
      "AI automation for dental practices. Patient booking, recall campaigns, appointment reminders, intake forms, and no-show follow-up.",
    href: "/ai-automation-for-dental-practices",
    category: "industries",
  },
  {
    title: "AI Automation for Law Firms",
    description:
      "AI automation for law firms. Client intake, consultation booking, lead follow-up, and case status updates. What works for small to mid-size practices.",
    href: "/ai-automation-for-law-firms",
    category: "industries",
  },
  {
    title: "AI Automation for Accounting Firms",
    description:
      "AI automation for accounting firms. Client onboarding, document collection, appointment scheduling, and seasonal workflows for CPA and bookkeeping practices.",
    href: "/ai-automation-for-accounting-firms",
    category: "industries",
  },
  {
    title: "AI Automation for Plumbing Companies",
    description:
      "AI automation for plumbing companies. Missed call text-back, lead follow-up, appointment scheduling, estimate follow-up, and review automation.",
    href: "/ai-automation-for-plumbing-companies",
    category: "industries",
  },
  {
    title: "AI Automation for Electrical Contractors",
    description:
      "AI automation for electrical contractors. Lead follow-up, missed call text-back, scheduling, estimate follow-up, and review automation.",
    href: "/ai-automation-for-electrical-contractors",
    category: "industries",
  },
  {
    title: "AI Automation for Insurance Agencies",
    description:
      "AI automation for insurance agencies. Lead follow-up, renewal reminders, quote follow-up, cross-sell campaigns, and client communication.",
    href: "/ai-automation-for-insurance-agencies",
    category: "industries",
  },
  {
    title: "AI Automation for Property Management",
    description:
      "AI automation for property management companies. Tenant communication, maintenance requests, lease renewals, showing scheduling, and owner reporting.",
    href: "/ai-automation-for-property-management",
    category: "industries",
  },
  {
    title: "AI Automation Consultant Calgary",
    description:
      "AI automation consulting for Calgary businesses. Custom automations for lead follow-up, scheduling, CRM workflows, and operations. Fixed pricing, clear scope.",
    href: "/ai-automation-consultant-calgary",
    category: "geo",
  },
  {
    title: "AI Automation Consultant Edmonton",
    description:
      "AI automation consulting for Edmonton businesses. Custom automations for lead follow-up, scheduling, CRM workflows, and operations. Fixed pricing, clear scope.",
    href: "/ai-automation-consultant-edmonton",
    category: "geo",
  },
  {
    title: "AI Automation Consultant Alberta",
    description:
      "AI automation consulting for Alberta businesses. Lead follow-up, scheduling, CRM workflows, and operations. Based in Calgary, serving the entire province.",
    href: "/ai-automation-consultant-alberta",
    category: "geo",
  },
  {
    title: "AI Automation Consultant Canada",
    description:
      "AI automation consulting for Canadian businesses coast to coast. Remote delivery, fixed pricing, and clear scope for lead follow-up, scheduling, and CRM automation.",
    href: "/ai-automation-consultant-canada",
    category: "geo",
  },
];

const featuredGuides = guides.filter((guide) => guide.featured);
const orderedCategories: GuideCategory[] = [
  "strategy",
  "comparisons",
  "workflows",
  "industries",
  "geo",
];

const Guides = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: guides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      url: `https://www.dmytroai.com${guide.href}`,
      description: guide.description,
    })),
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guides | Dmytro AI",
    description:
      "Practical guides for small businesses exploring AI automation. Comparisons, workflows, industry pages, and consultant decision guides.",
    url: "https://www.dmytroai.com/guides",
    isPartOf: {
      "@type": "WebSite",
      name: "Dmytro AI",
      url: "https://www.dmytroai.com",
    },
  };

  const breadcrumbSchema = {
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
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Guides | Dmytro AI</title>
        <meta
          name="description"
          content="Practical guides for small businesses exploring AI automation. Comparisons, workflows, industry pages, and consultant decision guides."
        />
        <link rel="canonical" href="https://www.dmytroai.com/guides" />
        <meta property="og:title" content="Guides | Dmytro AI" />
        <meta
          property="og:description"
          content="Practical guides for small businesses exploring AI automation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dmytroai.com/guides" />
        <script type="application/ld+json">{JSON.stringify(collectionPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
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
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Guides
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 tracking-tight">
                Practical Guides for Small Business Automation
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                Comparisons, use cases, and decision frameworks for business
                owners who want clear answers on AI automation. Structured by
                buying stage, workflow, industry, and geography so both humans
                and AI systems can find the right page fast.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {orderedCategories.map((category) => {
                const meta = categoryMeta[category];
                const count = guides.filter((guide) => guide.category === category).length;

                return (
                  <a
                    key={category}
                    href={`#${meta.anchor}`}
                    className="inline-flex items-center rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {meta.label}
                    <span className="ml-2 text-muted-foreground">{count}</span>
                  </a>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-tight">
            <div className="mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
                Start here
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                If you only read a few pages first, start with the core buying,
                workflow, and industry guides below.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {featuredGuides.map((guide, i) => (
                <motion.div
                  key={guide.href}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <Link
                    to={guide.href}
                    className="group block rounded-2xl border border-border/60 bg-card/80 p-6 shadow-card hover:shadow-card-hover transition-shadow h-full"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-600 mb-3">
                      Featured guide
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {guide.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Read guide
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {orderedCategories.map((category, sectionIndex) => {
          const meta = categoryMeta[category];
          const categoryGuides = guides.filter((guide) => guide.category === category);

          return (
            <section
              id={meta.anchor}
              key={category}
              className={`section-padding ${sectionIndex % 2 === 0 ? "bg-secondary/30" : ""}`}
            >
              <div className="container-tight">
                <div className="max-w-3xl mb-10">
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-600 mb-3">
                    {categoryGuides.length} pages
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
                    {meta.label}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {meta.description}
                  </p>
                </div>

                <div className="grid gap-6 max-w-5xl">
                  {categoryGuides.map((guide, i) => (
                    <motion.div
                      key={guide.href}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.35 }}
                    >
                      <Link
                        to={guide.href}
                        className="group flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 shadow-card hover:shadow-card-hover transition-shadow"
                      >
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {guide.title}
                          </h3>
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
          );
        })}
      </main>

      <Footer />
    </div>
  );
};

export default Guides;
