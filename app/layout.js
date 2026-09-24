import "./globals.css";
import Chrome from "./components/Chrome";

export const metadata = {
  title: {
    default:
      "KS TechX — Kumara Swamy Technologies | Digital growth for Indian businesses",
    template: "%s | KS TechX",
  },
  description:
    "Kumara Swamy Technologies (KS TechX) is a digital growth company — software, done-for-you setup, digital products and a partner network for Indian businesses.",
  metadataBase: new URL("https://kstechx.com"),
  keywords: [
    "KS TechX",
    "Kumara Swamy Technologies",
    "Bizfree",
    "WhatsApp commerce",
    "SaaS India",
    "Mera Digi Card",
    "LocalKart",
    "partner program",
  ],
  openGraph: {
    title: "KS TechX — Digital growth for Indian businesses",
    description:
      "Software, done-for-you setup, digital products and a partner network — Bizfree, Mera Digi Card, LocalKart and Mera Partners.",
    url: "https://kstechx.com",
    siteName: "KS TechX",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KS TechX — Digital growth for Indian businesses",
    description:
      "Software, setup, digital products and a partner network for Indian businesses.",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kumara Swamy Technologies",
  alternateName: "KS TechX",
  url: "https://kstechx.com",
  email: "bizfree@kstechx.com",
  description:
    "Digital growth company building SaaS, done-for-you setup, digital products and a partner network for Indian businesses.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
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
