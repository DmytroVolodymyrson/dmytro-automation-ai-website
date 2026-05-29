import { ArrowRight, Zap, Clock, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTrackSection } from "@/hooks/useTrackSection";
import { siteConfig } from "@/config/siteConfig";
import { capture } from "@/lib/posthog";
import { homepageCaseStudies } from "@/data/caseStudies";

const statIcons = [Clock, Zap, Users, TrendingUp];

const ResultsSection = () => {
  const sectionRef = useTrackSection("results");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: caseHeaderRef, isVisible: caseHeaderVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: caseGridRef, isVisible: caseGridVisible } = useScrollAnimation<HTMLDivElement>();

  const { results } = siteConfig;

  return (
    <section ref={sectionRef} className="py-8 md:py-12 lg:py-16 bg-background">
      <div className="container-tight">
        {/* Stats Grid */}
        <div
          ref={headerRef}
          className={`text-center mb-10 lg:mb-12 animate-on-scroll ${headerVisible ? "is-visible" : ""}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {results.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {results.subtitle}
          </p>
        </div>

        <div ref={statsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-20">
          {results.stats.map((result, index) => {
            const Icon = statIcons[index];
            return (
              <div
                key={index}
                className={`bg-card p-6 lg:p-8 rounded-2xl shadow-card text-center border border-border/50 animate-on-scroll stagger-${index + 1} ${statsVisible ? "is-visible" : ""}`}
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-4xl font-bold text-foreground mb-1">
                  {result.metric}
                </div>
                <div className="text-accent font-semibold mb-2">{result.unit}</div>
                <p className="text-sm text-muted-foreground">{result.description}</p>
              </div>
            );
          })}
        </div>

        {/* Case Studies */}
        <div
          ref={caseHeaderRef}
          className={`text-center mb-8 lg:mb-12 animate-on-scroll ${caseHeaderVisible ? "is-visible" : ""}`}
        >
          <div id="case-studies" />
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Proof from shipped automation systems
          </h3>
          <p className="text-muted-foreground">
            Three builds. Three industries. Measurable outcomes.
          </p>
        </div>

        <div ref={caseGridRef} className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {homepageCaseStudies.map((study, index) => {
            const cardClasses = `bg-card p-6 lg:p-8 rounded-2xl shadow-card border border-border/50 hover:border-primary/30 transition-colors animate-on-scroll stagger-${index + 1} ${caseGridVisible ? "is-visible" : ""}`;

            const handleClick = () => {
              capture("case_study_clicked", {
                slug: study.slug,
                industry: study.industry,
                position: index,
              });
            };

            const cardContent = (
              <>
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                  {study.industry}
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                      Challenge
                    </h5>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                      Solution
                    </h5>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
                      <p className="text-xs uppercase tracking-wide text-accent font-semibold mb-1">KEY RESULT</p>
                      <p className="font-display text-md font-bold text-foreground">{study.keyResult}</p>
                      {study.proofStatus === "modeled" && (
                        <p className="text-xs text-muted-foreground/70 mt-1">Based on project estimate</p>
                      )}
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </>
            );

            return (
              <Link key={study.slug} to={`/case-studies/${study.slug}`} className={cardClasses} onClick={handleClick}>
                {cardContent}
              </Link>
            );
          })}
        </div>

        {/* View all CTA */}
        <div className={`text-center mt-8 lg:mt-10 animate-on-scroll ${caseGridVisible ? "is-visible" : ""}`}>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors"
          >
            View all case studies
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
