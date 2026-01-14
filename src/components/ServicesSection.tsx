import { motion } from "framer-motion";
import { 
  Users, 
  Calendar, 
  Share2, 
  BarChart3, 
  MessageSquare, 
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
    icon: Calendar,
    title: "Automated Appointment Booking",
    description: "Set up smart scheduling with reminders that run on autopilot",
  },
  {
    icon: Share2,
    title: "Social Media Automation",
    description: "One-click content posting across all your platforms",
  },
  {
    icon: BarChart3,
    title: "Automated Reporting",
    description: "Get real-time analytics and reports without lifting a finger",
  },
  {
    icon: MessageSquare,
    title: "Custom AI Chatbots",
    description: "Handle customer inquiries 24/7 with intelligent automation",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailored automation built specifically for your business needs",
  },
];

const benefits = [
  "Automating repetitive tasks",
  "Streamlining lead generation and follow-ups",
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
          className="text-center mb-16"
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
          <p className="text-muted-foreground">
            Examples of AI automations I have built for service-based businesses:
          </p>
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12 text-lg font-medium text-foreground"
        >
          No cookie-cutter solutions. Every automation is built specifically for your business needs.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
