import "./globals.css";
import Chrome from "./components/Chrome";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "KS TechX — Digital & Fintech Solutions | Kumara Swamy Technologies",
    template: "%s | KS TechX",
  },
  description:
    "KS TechX (Kumara Swamy Technologies) — website development, custom software, Android app development, AEPS retailer ID, UPI & credit card merchant IDs, and a partner program where every sale earns commission.",
  metadataBase: new URL("https://kstechx.com"),
  keywords: [
    "KS TechX",
    "Kumara Swamy Technologies",
    "website development Andhra Pradesh",
    "custom software development",
    "Android app development",
    "AEPS retailer ID",
    "UPI merchant ID",
    "RuPay credit card merchant ID",
    "partner program commission",
  ],
  openGraph: {
    title: "KS TechX — Digital & Fintech Solutions built for Bharat",
    description:
      "Websites, custom software, Android apps and fintech IDs — plus a partner program where every sale earns commission.",
    url: "https://kstechx.com",
    siteName: "KS TechX",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KS TechX — Digital & Fintech Solutions",
    description:
      "Websites, custom software, Android apps, fintech IDs and a commission-based partner program.",
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
    { "@type": "ContactPoint", contactType: "sales", email: "info@kstechx.com", telephone: "+91-99494-99177", areaServed: "IN", availableLanguage: ["English", "Telugu", "Hindi"] },
    { "@type": "ContactPoint", contactType: "customer support", email: "info@kstechx.com", telephone: "+91-99494-99177", areaServed: "IN" },
  ],
  description:
    "Digital and fintech solutions company — website development, custom software, Android app development and retailer & merchant IDs.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "KS TechX Services",
    itemListElement: [
      "Website Development",
      "Custom Software Solutions",
      "Custom Mobile App Development",
      "Fintech Solutions",
    ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
        />
        <meta name="theme-color" content="#0b1f4b" />
      </head>
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
