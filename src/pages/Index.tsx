import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <div id="services">
          <ServicesSection />
        </div>
        <div id="results">
          <ResultsSection />
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
