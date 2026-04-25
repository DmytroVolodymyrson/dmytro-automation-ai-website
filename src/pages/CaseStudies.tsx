import { motion } from "framer-motion";
import { Helmet } from "@/lib/helmet";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Case Studies — AI Automation Results for Real Businesses | Dmytro AI</title>
        <meta name="description" content="Real AI automation case studies: restaurant voice agent, Instagram lead generation pipeline, e-commerce CRM automation. Specific problems, specific results." />
        <link rel="canonical" href="https://www.dmytroai.com/case-studies" />
        <meta property="og:title" content="Case Studies — AI Automation Results for Real Businesses" />
        <meta property="og:description" content="See how AI automation drives measurable growth for small businesses. Real systems, real numbers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dmytroai.com/case-studies" />
      </Helmet>
      <Navbar />
      <main className="pt-24 md:pt-28 section-padding">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl mb-10 md:mb-14"
          >
            <p className="text-accent font-semibold uppercase tracking-wide text-sm mb-3">
              Case Studies
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Proven Automation Outcomes
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real systems built for real businesses. Explore how strategic AI automation drives measurable growth with low operating overhead.
            </p>
          </motion.div>

          <div className="rounded-3xl border border-primary/15 bg-primary/5 p-6 md:p-8 mb-10 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
              Connect proof to the decision pages
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Use these proof assets with the main automation guides
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 max-w-3xl">
              These case studies support the pages Google has discovered but not crawled yet: the consultant overview, the best-first-automation guide, and the main guides hub.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "AI automation consultant", href: "/ai-automation-consultant-small-business" },
                { label: "Best first automations", href: "/best-ai-automation-for-service-businesses" },
                { label: "All automation guides", href: "/guides" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/30 hover:bg-background transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="inline-block ml-2 w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
