import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "I work with small service businesses: HVAC companies, restaurants, real estate agents, mortgage brokers, and e-commerce brands with 1-20 employees. They all have the same problem: consistent inbound leads that slip through because follow-up is too slow or too manual. I don't work with enterprises or businesses without an existing product or service.",
  },
  {
    question: "How long does it take to build an AI automation system?",
    answer:
      "Most builds go from first call to live in 1-3 weeks. A basic lead follow-up workflow is typically 5-7 days. A full AI voice agent with booking integration takes 2-3 weeks. Complex CRM builds with multiple integrations run 4-6 weeks. I scope everything on the discovery call so there are no surprises.",
  },
  {
    question: "What does AI automation cost for a small business?",
    answer:
      "One-time builds range from $1,500 to $8,000 depending on complexity. Monthly retainers start at $500/month. Most clients see ROI within 30 days. One recovered deal usually covers the cost of the entire build.",
  },
  {
    question: "What kind of ROI can I expect?",
    answer:
      "Most clients break even within the first month. A restaurant I worked with went from missing every after-hours call to capturing 100% of them. One recovered reservation night paid for the whole build. An info business I built for went from manual lead searching to 50+ qualified leads per day at $0.29 each. On the discovery call I'll run the numbers with you based on your deal size and lead volume.",
  },
  {
    question: "Do I need a developer or technical team to use this?",
    answer:
      "No. I build the system, document how it works, and hand you a dashboard you can manage without touching code. When something needs updating, I handle it. You run your business. The automation runs in the background.",
  },
  {
    question: "What happens if something breaks after you build it?",
    answer:
      "Every build includes a 30-day support window. For ongoing maintenance, I offer monthly retainer plans that cover monitoring, fixes, and unlimited tweaks. I'm the one who built it, so when something breaks, I know exactly where to look.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Common Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Straight answers about working with an AI automation consultant
          </p>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-border/60 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-card hover:bg-card/80 transition-colors"
              >
                <span className="font-semibold text-base md:text-lg">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
