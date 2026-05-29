import { motion } from "framer-motion";
import { Helmet } from "@/lib/helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import {
  caseStudies,
  featuredCaseStudies,
  caseStudiesByWorkflow,
  type WorkflowType,
} from "@/data/caseStudies";

const heroMetrics = [
  { value: "$9,000/mo", label: "Projected savings", note: "modeled" },
  { value: "5,600+", label: "Leads organized" },
  { value: "15 hrs/week", label: "Management time freed" },
];

const findYourFit = [
  {
    problem: "Losing calls or bookings after hours?",
    answer: "Read the Paris Cafe voice agent case study.",
    href: "/case-studies/paris-cafe-voice-agent",
  },
  {
    problem: "CRM is messy or leads are going stale?",
    answer: "Read the e-commerce CRM automation case study.",
    href: "/case-studies/ecommerce-crm-automation",
  },
  {
    problem: "Outbound or video production can't scale?",
    answer: "Read the marketing agency outbound video case study.",
    href: "/case-studies/marketing-agency-outbound-video-automation",
  },
  {
    problem: "Raw lead lists need filtering before sales review?",
    answer: "Read the Facebook Marketplace lead qualification case study.",
    href: "/case-studies/facebook-marketplace-ai-lead-qualification",
  },
];

const faqItems = [
  {
    question: "What do these case studies prove?",
    answer:
      "They show five concrete categories of automation Dmytro AI has shipped: outbound video production at scale, CRM cleanup and lead follow-up, after-hours phone handling and booking flow, lead qualification and enrichment, and automated lead-generation pipelines. If you want evidence before paying for a consultant or choosing a workflow, this is the proof layer.",
  },
  {
    question: "Which case study should I read first?",
    answer:
      "If outbound costs are the bottleneck, start with the marketing agency case. If missed calls or booking gaps are the problem, start with Paris Cafe. If your CRM is messy or leads are going stale, start with the e-commerce CRM build. If your team is drowning in raw leads, start with the Marketplace qualification workflow.",
  },
  {
    question: "Can these examples apply outside the exact same industry?",
    answer:
      "Yes. The value is in the workflow pattern, not the industry label. A restaurant phone-coverage case study helps any service business thinking about AI appointment setting. An e-commerce CRM cleanup applies to any business evaluating lead follow-up and reactivation systems.",
  },
  {
    question: "Some metrics say 'modeled' - what does that mean?",
    answer:
      "Modeled means the number is calculated from workflow data and cost assumptions, not from an audited client-confirmed report. We label these clearly so you know the basis of every claim.",
  },
];

const workflowTypeOrder: WorkflowType[] = [
  "Revenue & Outbound",
  "Lead Follow-Up & CRM",
  "Phone & Appointment Handling",
  "Lead Qualification & Enrichment",
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: caseStudies.map((cs, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: cs.title,
    url: `https://www.dmytroai.com/case-studies/${cs.slug}`,
    description: cs.description,
  })),
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AI Automation Case Studies | Dmytro AI",
  description:
    "Five documented AI automation case studies for small and service businesses by Dmytro AI: outbound video automation for a marketing agency, e-commerce CRM and lead follow-up, a restaurant voice agent, Instagram lead generation, and Facebook Marketplace lead qualification.",
  url: "https://www.dmytroai.com/case-studies",
  isPartOf: {
    "@type": "WebSite",
    name: "Dmytro AI",
    url: "https://www.dmytroai.com",
  },
};

const faqSchema = {
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
      name: "Case Studies",
      item: "https://www.dmytroai.com/case-studies",
    },
  ],
};

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Automation Case Studies | Dmytro AI</title>
        <meta name="description" content="Five documented AI automation case studies: outbound video automation saving $9,000/month, e-commerce CRM handling 5,600+ leads, a restaurant voice agent, Instagram lead generation, and Facebook Marketplace lead qualification. Real systems, measurable outcomes." />
        <link rel="canonical" href="https://www.dmytroai.com/case-studies" />
        <meta property="og:title" content="AI Automation Case Studies | Dmytro AI" />
        <meta property="og:description" content="Documented AI automation builds for small and service businesses. Real systems, real problems, measurable outcomes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dmytroai.com/case-studies" />
        <script type="application/ld+json">{JSON.stringify(collectionPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Navbar />
      <main className="pt-24 md:pt-28 section-padding">
        <div className="container-tight">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl mb-10 md:mb-14"
          >
            <p className="text-accent font-semibold uppercase tracking-wide text-sm mb-3">
              Case Studies
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              AI Automation Case Studies
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real systems built for real businesses. Each case study documents the problem, the automation shipped, and the measurable outcome. Start here if you want proof before choosing a workflow or hiring a consultant.
            </p>
          </motion.div>

          {/* Proof metric strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid sm:grid-cols-3 gap-4 mb-12 md:mb-16"
          >
            {heroMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5 text-center"
              >
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{m.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
                {m.note && (
                  <p className="text-xs text-muted-foreground/70 mt-0.5 italic">{m.note}</p>
                )}
              </div>
            ))}
          </motion.div>

          {/* Featured case study */}
          {featuredCaseStudies[0] && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-12 md:mb-16"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-4">Featured</p>
              <Link
                to={`/case-studies/${featuredCaseStudies[0].slug}`}
                className="group block rounded-2xl border border-primary/20 bg-card p-6 md:p-8 shadow-card hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
                    {featuredCaseStudies[0].industry}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent">
                    {featuredCaseStudies[0].workflowType}
                  </span>
                  {featuredCaseStudies[0].proofStatus === "modeled" && (
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground/70">
                      <Info className="w-3 h-3" /> Modeled from workflow data
                    </span>
                  )}
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {featuredCaseStudies[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">
                  {featuredCaseStudies[0].description}
                </p>
                <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 inline-block mb-4">
                  <p className="text-xs uppercase tracking-wide text-accent font-semibold mb-1">Key Result</p>
                  <p className="font-display text-lg font-bold text-foreground">{featuredCaseStudies[0].keyResult}</p>
                </div>
                <div className="block">
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:text-accent transition-colors">
                    Read case study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Case studies grouped by workflow type */}
          {workflowTypeOrder.map((type) => {
            const studies = caseStudiesByWorkflow[type];
            if (studies.length === 0) return null;
            return (
              <div key={type} className="mb-10 md:mb-14">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {type}
                </h2>
                <div className="grid gap-6 md:gap-8">
                  {studies.map((cs, index) => (
                    <CaseStudyCard key={cs.slug} caseStudy={cs} index={index} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Find your fit */}
          <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6 md:p-8 mb-10 shadow-card">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">
              Not sure which applies to your business?
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {findYourFit.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group rounded-2xl border border-border/60 bg-background/80 p-5 hover:border-primary/30 transition-colors"
                >
                  <p className="font-semibold text-foreground mb-1">{item.problem}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-2 group-hover:text-accent transition-colors">
                    Read it <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 mb-10 shadow-card">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">
              Common questions about these case studies
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-border/60 bg-background/80 p-5"
                >
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-10 text-center shadow-card">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Want to know which automation fits your business?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Book a free strategy call and get a clear recommendation based on your workflow, team size, and goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/#booking"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ai-automation-consultant-pricing-small-business"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/30 transition-colors"
              >
                View pricing
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
