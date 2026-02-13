import { ArrowRight, Zap, Clock, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const results = [
  {
    icon: Clock,
    metric: "10+",
    unit: "hrs/week",
    description: "Time saved on average per client",
  },
  {
    icon: Zap,
    metric: "80%",
    unit: "reduction",
    description: "in manual work",
  },
  {
    icon: Users,
    metric: "3x",
    unit: "capacity",
    description: "without hiring more staff",
  },
  {
    icon: TrendingUp,
    metric: "300%+",
    unit: "ROI",
    description: "typical ROI in year one",
  },
];

const caseStudies = [
  {
    industry: "Restaurant",
    challenge: "Missing reservations from after-hours calls and staff overwhelmed with phone bookings",
    solution: "Built 24/7 AI voice receptionist handling calls, managing reservations, and routing complex inquiries",
    result: "Captured 100% of after-hours bookings and freed up 15+ staff hours weekly",
  },
  {
    industry: "Info Business",
    challenge: "Manually searching Instagram Reels for fitness creators, copy-pasting to Notion. Hours of work for a handful of leads",
    solution: "Built a fully automated n8n + AI pipeline that discovers, qualifies, and delivers creator leads daily with zero manual work",
    result: "",
    slug: "/case-studies/instagram-lead-generation",
    keyResult: "50+ leads/day at $0.29/lead",
  },
  {
    industry: "E-commerce Brand",
    challenge: "Struggling to maintain consistent social media presence across multiple platforms",
    solution: "Deployed AI system that analyzes trends, generates posts, images, and captions automatically",
    result: "Cut content production time by 80% and grew Instagram following by 150% in 3 months",
  },
];

const ResultsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: caseHeaderRef, isVisible: caseHeaderVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: caseGridRef, isVisible: caseGridVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        {/* Stats Grid */}
        <div
          ref={headerRef}
          className={`text-center mb-10 lg:mb-12 animate-on-scroll ${headerVisible ? "is-visible" : ""}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's what happens when you automate the right processes
          </p>
        </div>

        <div ref={statsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-20">
          {results.map((result, index) => (
            <div
              key={index}
              className={`bg-card p-6 lg:p-8 rounded-2xl shadow-card text-center border border-border/50 animate-on-scroll stagger-${index + 1} ${statsVisible ? "is-visible" : ""}`}
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <result.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display text-4xl font-bold text-foreground mb-1">
                {result.metric}
              </div>
              <div className="text-accent font-semibold mb-2">{result.unit}</div>
              <p className="text-sm text-muted-foreground">{result.description}</p>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div
          ref={caseHeaderRef}
          className={`text-center mb-8 lg:mb-12 animate-on-scroll ${caseHeaderVisible ? "is-visible" : ""}`}
        >
          <div id="case-studies" />
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Client Success Stories
          </h3>
          <p className="text-muted-foreground">
            See how automation transformed these businesses
          </p>
        </div>

        <div ref={caseGridRef} className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => {
            const isTouficCaseStudy = index === 1;
            const cardClasses = `bg-card p-6 lg:p-8 rounded-2xl shadow-card border border-border/50 hover:border-primary/30 transition-colors animate-on-scroll stagger-${index + 1} ${caseGridVisible ? "is-visible" : ""}`;

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
                    {isTouficCaseStudy ? (
                      <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
                        <p className="text-xs uppercase tracking-wide text-accent font-semibold mb-1">KEY RESULT</p>
                        <p className="font-display text-md font-bold text-foreground">{study.keyResult}</p>
                      </div>
                    ) : (
                      <>
                        <h5 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                          Result
                        </h5>
                        <p className="text-foreground font-medium">{study.result}</p>
                      </>
                    )}
                  </div>

                  {isTouficCaseStudy ? (
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  ) : null}
                </div>
              </>
            );

            if (isTouficCaseStudy && study.slug) {
              return (
                <Link key={index} to={study.slug} className={cardClasses}>
                  {cardContent}
                </Link>
              );
            }

            return (
              <div key={index} className={cardClasses}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
