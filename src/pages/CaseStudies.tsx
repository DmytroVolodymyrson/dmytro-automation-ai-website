import { useEffect } from "react";
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
    "Six documented AI automation case studies for small and service businesses by Dmytro AI: outbound video automation for a marketing agency, vehicle accessories CRM and lead follow-up, mortgage broker lead follow-up, a restaurant voice agent, Instagram lead generation, and Facebook Marketplace lead qualification.",
  url: "https://www.dmytroai.com/case-studies",
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
      name: "Case Studies",
      item: "https://www.dmytroai.com/case-studies",
    },
  ],
};

const CaseStudies = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://link.msgsndr.com/js/form_embed.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Automation Case Studies | Dmytro AI</title>
        <meta name="description" content="Six documented AI automation case studies, led by a marketing agency outbound video system that saved $9,000/month. Clear problems, shipped systems, and measurable outcomes." />
        <link rel="canonical" href="https://www.dmytroai.com/case-studies" />
        <meta property="og:title" content="AI Automation Case Studies | Dmytro AI" />
        <meta property="og:description" content="Documented AI automation builds for small and service businesses. Real systems, real problems, measurable outcomes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dmytroai.com/case-studies" />
        <script type="application/ld+json">{JSON.stringify(collectionPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
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
              Real systems built for real businesses. Each case study documents the problem, the automation shipped, and the measurable outcome. Start with the marketing agency case if outbound production cost is the bottleneck.
            </p>
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
            const studies = caseStudiesByWorkflow[type].filter(
              (cs) => cs.slug !== featuredCaseStudies[0]?.slug,
            );
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

          <section id="booking" className="mb-10 md:mb-14">
            <div className="rounded-2xl border border-primary/20 bg-card px-4 sm:px-5 lg:px-6 pt-6 lg:pt-0 pb-6 shadow-card overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/bookings/dmytro-automation"
                className="lg:-mt-5"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "550px" }}
                loading="eager"
                scrolling="no"
                id="dmytro-automation-booking"
                title="Book a Strategy Call"
              />
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
