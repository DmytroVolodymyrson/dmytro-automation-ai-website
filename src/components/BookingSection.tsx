import { motion } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

const benefits = [
  "Identify 10+ hours/week you can save with automation",
  "Get a custom AI roadmap tailored to your business",
  "Learn how to scale revenue without hiring more staff",
  "Discover automation opportunities you're missing",
];

const BookingSection = () => {
  useEffect(() => {
    // Load the external script for the booking widget
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://link.msgsndr.com/js/form_embed.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="booking" className="section-padding bg-secondary/30">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Limited Spots Available
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your free strategy call and discover how AI automation can transform your operations
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-card p-6 rounded-2xl shadow-card border border-border/50 min-h-[600px]"
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/SOMYXRWGy378BJHYRxdU"
            style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "550px" }}
            scrolling="no"
            id="SOMYXRWGy378BJHYRxdU_1768362260925"
            title="Book a Strategy Call"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
