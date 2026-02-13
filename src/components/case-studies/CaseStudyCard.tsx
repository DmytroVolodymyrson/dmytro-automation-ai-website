import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CaseStudySummary } from "@/data/caseStudies";

type CaseStudyCardProps = {
  caseStudy: CaseStudySummary;
  index?: number;
};

const CaseStudyCard = ({ caseStudy, index = 0 }: CaseStudyCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-card hover:border-primary/40 hover:shadow-card-hover transition-all duration-300"
    >
      <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary mb-4">
        {caseStudy.industry}
      </div>

      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
        {caseStudy.title}
      </h2>

      <p className="text-muted-foreground mb-6 leading-relaxed">{caseStudy.description}</p>

      <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
        <p className="text-xs uppercase tracking-wide text-accent font-semibold mb-1">Key Result</p>
        <p className="font-display text-xl font-bold text-foreground">{caseStudy.keyResult}</p>
      </div>

      <Link
        to={`/case-studies/${caseStudy.slug}`}
        className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors"
      >
        Read More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.article>
  );
};

export default CaseStudyCard;
