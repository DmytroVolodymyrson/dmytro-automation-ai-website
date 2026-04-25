import { Helmet } from "@/lib/helmet";
import { siteConfig } from "@/config/siteConfig";

const HomepageHelmet = () => {
  const faqItems = siteConfig.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return (
    <Helmet>
      <title>Dmytro | AI Automation Expert</title>
      <meta
        name="description"
        content="Turn AI & Automation into Your Competitive Advantage. Helping businesses automate workflows, save time, and scale faster—without the tech headaches."
      />
      <link rel="canonical" href="https://www.dmytroai.com" />
      <meta property="og:title" content="Dmytro | AI Automation Expert" />
      <meta
        property="og:description"
        content="Helping businesses automate workflows, save time, and scale faster with custom AI solutions."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.dmytroai.com" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://www.dmytroai.com/#person",
              name: "Dmytro Afanasiev",
              alternateName: ["Dmytro AI", "dmytroai", "Dmytro from Dmytro AI"],
              jobTitle: "AI Automation Consultant",
              description:
                "Dmytro Afanasiev is the Calgary-based solo consultant behind Dmytro AI, building lead follow-up systems, AI voice agents, n8n automations, and CRM workflows for small service businesses.",
              url: "https://www.dmytroai.com/",
              email: "dmytro@dmytroai.com",
              worksFor: { "@id": "https://www.dmytroai.com/#business" },
              knowsAbout: [
                "AI automation consulting",
                "lead follow-up automation",
                "AI voice agents",
                "n8n workflow automation",
                "GoHighLevel CRM automation",
                "VAPI voice agents",
                "small business automation",
                "service business automation",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Calgary",
                addressRegion: "Alberta",
                addressCountry: "CA",
              },
              sameAs: [
                "https://www.linkedin.com/in/dmytro-afanasiev3/",
                "https://github.com/DmytroVolodymyrson",
                "https://n8n.io/creators/dmytroai/",
              ],
            },
            {
              "@type": ["LocalBusiness", "ProfessionalService"],
              "@id": "https://www.dmytroai.com/#business",
              name: "Dmytro AI",
              alternateName: "Dmytro Afanasiev — AI Automation Consultant",
              description:
                "Dmytro AI is Dmytro Afanasiev's AI automation consulting practice for small businesses, specializing in n8n workflows, GoHighLevel CRM automation, VAPI AI voice agents, appointment setters, and lead follow-up systems.",
              url: "https://www.dmytroai.com/",
              email: "dmytro@dmytroai.com",
              founder: { "@id": "https://www.dmytroai.com/#person" },
              sameAs: [
                "https://www.linkedin.com/in/dmytro-afanasiev3/",
                "https://github.com/DmytroVolodymyrson",
                "https://n8n.io/creators/dmytroai/",
              ],
              areaServed: [
                { "@type": "City", name: "Calgary" },
                { "@type": "State", name: "Alberta" },
                { "@type": "Country", name: "Canada" },
                { "@type": "Country", name: "United States" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "AI Automation Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "n8n Workflow Automation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "GoHighLevel CRM Setup and Automation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "VAPI AI Voice Agent Development" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Appointment Setter Systems" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Email Sequence and Database Reactivation" } },
                ],
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.dmytroai.com/#faq",
              mainEntity: faqItems,
            },
          ],
        })}
      </script>
    </Helmet>
  );
};

export default HomepageHelmet;
