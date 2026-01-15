import { motion } from "framer-motion";
import { Zap, Clock, Users, TrendingUp } from "lucide-react";

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
    industry: "B2B Marketing Agency",
    challenge: "Wasting hours manually qualifying leads from large contact databases",
    solution: "Created automated lead scoring system that enriches data, segments by criteria, and generates personalized outreach",
    result: "Increased qualified lead conversion by 45% and saved 20 hours weekly on research",
  },
  {
    industry: "E-commerce Brand",
    challenge: "Struggling to maintain consistent social media presence across multiple platforms",
    solution: "Deployed AI system that analyzes trends, generates posts, images, and captions automatically",
    result: "Cut content production time by 80% and grew Instagram following by 150% in 3 months",
  },
];

const ResultsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's what happens when you automate the right processes
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-card p-8 rounded-2xl shadow-card text-center border border-border/50"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <result.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display text-4xl font-bold text-foreground mb-1">
                {result.metric}
              </div>
              <div className="text-accent font-semibold mb-2">{result.unit}</div>
              <p className="text-sm text-muted-foreground">{result.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Client Success Stories
          </h3>
          <p className="text-muted-foreground">
            See how automation transformed these businesses
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-card p-8 rounded-2xl shadow-card border border-border/50 hover:border-primary/30 transition-colors"
            >
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
                  <h5 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                    Result
                  </h5>
                  <p className="text-foreground font-medium">{study.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
