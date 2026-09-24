import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Chrome from "./components/Chrome";

// fonts are downloaded at build time and served from kstechx.com itself
// (no Google Fonts request, no render-blocking, no layout shift)
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap", variable: "--font-jakarta" });

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
  alternateName: ["KS TechX", "KSTechX", "KSTECHX", "kstechx.com"],
  url: "https://kstechx.com",
  logo: "https://kstechx.com/icon.svg",
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

// tells Google the site's name (shown above the result) and its spelling variants
const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KS TechX",
  alternateName: ["KSTechX", "KSTECHX", "Kumara Swamy Technologies", "kstechx.com"],
  url: "https://kstechx.com/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <meta name="theme-color" content="#0b1f4b" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Chrome>{children}</Chrome>
      </body>
    </html>
  );
}
