import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="section-padding pt-32">
        <div className="container-tight">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-display mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using the Dmytro Automation AI website ("Site"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-display mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground mb-4">
                Dmytro Automation AI provides AI automation consulting and implementation services. Our Site serves as an informational platform and allows visitors to schedule consultation calls.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-display mb-4">3. Use of the Site</h2>
              <p className="text-muted-foreground mb-4">You agree to use this Site only for lawful purposes and in a manner that does not:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Interfere with or disrupt the Site's functionality</li>
                <li>Attempt to gain unauthorized access to any part of the Site</li>
                <li>Use automated systems to access the Site without permission</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-display mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content on this Site, including text, graphics, logos, images, and software, is the property of Dmytro Automation AI or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-display mb-4">5. Disclaimers</h2>
              <p className="text-muted-foreground mb-4">
                The Site and its content are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the Site will be uninterrupted, secure, or error-free.
              </p>
              <p className="text-muted-foreground mb-4">
                Results and outcomes mentioned on this Site are examples and may vary. Past performance does not guarantee future results.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-display mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                To the fullest extent permitted by law, Dmytro Automation AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-display mb-4">7. Third-Party Links</h2>
              <p className="text-muted-foreground mb-4">
                Our Site may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites. Accessing them is at your own risk.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-display mb-4">8. Modifications</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-display mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold font-display mb-4">10. Contact</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us through our website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
