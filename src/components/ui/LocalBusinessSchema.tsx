import { CONTACT, SITE } from "@/lib/constants";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.name,
    description: `Coaching center in ${SITE.location} for Class 1–12. Small batches, experienced faculty, proven results.`,
    url: "https://srtutor.in",
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Tilak Nagar",
      addressRegion: "Delhi",
      postalCode: "110018",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6262,
      longitude: 77.0997,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    foundingDate: SITE.established,
    numberOfEmployees: { "@type": "QuantitativeValue", value: 5 },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
