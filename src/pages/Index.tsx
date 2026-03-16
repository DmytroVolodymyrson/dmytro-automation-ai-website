import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProofStripSection from "@/components/ProofStripSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProofStripSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="results">
          <ResultsSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
