import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chris Tyson",
    role: "CEO, Tyson Insulation",
    quote: "Working with Dmytro completely transformed how we handle leads. We went from losing potential customers to converting them consistently. The automation pays for itself many times over.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, Digital Marketing Co.",
    quote: "I was skeptical about AI automation, but Dmytro showed me exactly how it would work for my business. Now I save over 10 hours a week on tasks that used to drain my energy.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Owner, Johnson Consulting",
    quote: "The custom chatbot Dmytro built handles 80% of our customer inquiries automatically. My team can finally focus on high-value work instead of answering the same questions repeatedly.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Clients Are Saying
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Don't just take my word for it—hear from businesses that have transformed their operations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/20"
            >
              <Quote className="w-10 h-10 text-accent mb-6 opacity-80" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
