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
              jobTitle: "AI Automation Consultant",
              description:
                "Solo AI automation consultant building lead follow-up systems, AI voice agents, and CRM workflows for small service businesses.",
              url: "https://www.dmytroai.com",
              email: "dmytro@dmytroai.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Calgary",
                addressRegion: "Alberta",
                addressCountry: "CA",
              },
              sameAs: [
                "https://www.linkedin.com/in/dmytro-afanasiev3/",
                "https://github.com/DmytroVolodymyrson",
              ],
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://www.dmytroai.com/#business",
              name: "Dmytro Afanasiev — AI Automation Consultant",
              description:
                "AI automation consultant for small businesses. Specializing in n8n workflows, GoHighLevel CRM automation, VAPI AI voice agents, and lead follow-up systems.",
              url: "https://www.dmytroai.com",
              email: "dmytro@dmytroai.com",
              founder: { "@id": "https://www.dmytroai.com/#person" },
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
