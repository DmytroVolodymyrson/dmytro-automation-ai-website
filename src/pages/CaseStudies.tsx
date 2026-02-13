import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
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
