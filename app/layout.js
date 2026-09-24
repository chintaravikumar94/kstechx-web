import "./globals.css";
import Chrome from "./components/Chrome";

export const metadata = {
  title: {
    default: "KS TechX — Fintech & Digital Solutions | Kumara Swamy Technologies",
    template: "%s | KS TechX",
  },
  description:
    "KS TechX (Kumara Swamy Technologies) — AEPS retailer ID, UPI & credit card merchant IDs, website development, custom software, Android app development and a partner program where every sale earns commission.",
  metadataBase: new URL("https://kstechx.com"),
  keywords: [
    "KS TechX",
    "Kumara Swamy Technologies",
    "AEPS retailer ID",
    "UPI merchant ID",
    "RuPay credit card merchant ID",
    "website development Andhra Pradesh",
    "custom software development",
    "Android app development",
    "partner program commission",
  ],
  openGraph: {
    title: "KS TechX — Fintech & Digital Solutions built for Bharat",
    description:
      "Fintech IDs, websites, custom software, Android apps — and a partner program where every sale earns commission.",
    url: "https://kstechx.com",
    siteName: "KS TechX",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KS TechX — Fintech & Digital Solutions",
    description:
      "Fintech IDs, websites, custom software, Android apps and a commission-based partner program.",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kumara Swamy Technologies",
  alternateName: "KS TechX",
  url: "https://kstechx.com",
  email: "info@kstechx.com",
  telephone: "+91-99494-99177",
  contactPoint: [
    { "@type": "ContactPoint", contactType: "sales", email: "sales@kstechx.com", telephone: "+91-99494-99177", areaServed: "IN", availableLanguage: ["English", "Telugu", "Hindi"] },
    { "@type": "ContactPoint", contactType: "customer support", email: "support@kstechx.com", telephone: "+91-99494-99177", areaServed: "IN" },
  ],
  description:
    "Fintech and digital solutions company — retailer & merchant IDs, website development, custom software and Android app development.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "KS TechX Services",
    itemListElement: [
      "Fintech Solutions",
      "Website Development",
      "Custom Software Solutions",
      "Custom Mobile App Development",
    ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Chrome>{children}</Chrome>
      </body>
    </html>
  );
}
