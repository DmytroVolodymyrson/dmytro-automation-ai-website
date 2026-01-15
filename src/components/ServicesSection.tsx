import { motion } from "framer-motion";
import {
  Users,
  Phone,
  Share2,
  BarChart3,
  Briefcase,
  Settings,
  CheckCircle2
} from "lucide-react";

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
    icon: Briefcase,
    title: "Hiring & Recruitment Automation",
    description: "Screen candidates and schedule interviews to find the right hire faster",
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
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-tight">
        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I build AI-powered systems that free up hours every week by:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
            What This Looks Like
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-accent/30"
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
