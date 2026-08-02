import "./globals.css";

export const metadata = {
  title: "KS TechX — Kumara Swamy Technologies | SaaS for Indian Businesses",
  description:
    "Kumara Swamy Technologies (KS TechX) is a product studio building SaaS for India — Bizfree (WhatsApp & web commerce), Mera Digi Card, LocalKart and Mera Partners.",
  metadataBase: new URL("https://kstechx.com"),
  keywords: [
    "KS TechX",
    "Kumara Swamy Technologies",
    "Bizfree",
    "WhatsApp commerce",
    "SaaS India",
    "Mera Digi Card",
    "LocalKart",
  ],
  openGraph: {
    title: "KS TechX — Building SaaS for Indian Businesses",
    description:
      "A product studio behind Bizfree, Mera Digi Card, LocalKart and Mera Partners.",
    url: "https://kstechx.com",
    siteName: "KS TechX",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KS TechX — Building SaaS for Indian Businesses",
    description:
      "A product studio behind Bizfree, Mera Digi Card, LocalKart and Mera Partners.",
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
    "Product studio building SaaS for Indian businesses — Bizfree, Mera Digi Card, LocalKart and Mera Partners.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Bizfree", url: "https://biz.kstechx.com" } },
    { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Mera Digi Card", url: "https://mdc.kstechx.com" } },
    { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "LocalKart", url: "https://localkart.kstechx.com" } },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
