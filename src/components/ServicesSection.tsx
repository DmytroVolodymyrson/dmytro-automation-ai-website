import {
  Users,
  Phone,
  Share2,
  BarChart3,
  Layers,
  Settings,
  CheckCircle2
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Users,
    title: "AI-Powered Lead Generation",
    description: "Automate lead capture and follow-ups to never miss an opportunity",
  },
  {
    icon: Phone,
    title: "AI Chatbots & Voice Agents",
    description: "Answer calls and messages instantly so you're always available to customers",
  },
  {
    icon: Share2,
    title: "Social Media Content Automation",
    description: "Stay consistent online and grow your audience without daily effort",
  },
  {
    icon: Layers,
    title: "Workflow Automation",
    description: "Connect your tools and automate multi-step processes across your business",
  },
  {
    icon: BarChart3,
    title: "Automated Reporting",
    description: "Track performance in real-time to make better decisions faster",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailored automation built specifically for your business needs",
  },
];

const benefits = [
  "Automating repetitive tasks",
  "Optimizing operations and workflows",
  "Eliminating bottlenecks that slow business growth",
];

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: subheaderRef, isVisible: subheaderVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-tight">
        {/* What I Do */}
        <div
          ref={headerRef}
          className={`text-center mb-12 animate-on-scroll ${headerVisible ? "is-visible" : ""}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I build AI-powered systems that free up hours every week by:
          </p>
        </div>

        <div
          ref={benefitsRef}
          className={`flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll ${benefitsVisible ? "is-visible" : ""}`}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm animate-on-scroll-scale stagger-${index + 1} ${benefitsVisible ? "is-visible" : ""}`}
            >
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Service Cards */}
        <div
          ref={subheaderRef}
          className={`text-center mb-12 animate-on-scroll ${subheaderVisible ? "is-visible" : ""}`}
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            What This Looks Like
          </h3>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-accent/30 animate-on-scroll stagger-${index + 1} ${gridVisible ? "is-visible" : ""}`}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
