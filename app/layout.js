import "./globals.css";

export const metadata = {
  title: "KS TechX — Building Digital Products for India",
  description:
    "Kumara Swamy Technologies (KS TechX) builds Bizfree — sell on WhatsApp & web with payments and delivery — plus Mera Digi Card, LocalKart and more.",
  metadataBase: new URL("https://kstechx.com"),
  openGraph: {
    title: "KS TechX — Building Digital Products for India",
    description:
      "Home of Bizfree (WhatsApp & web commerce), Mera Digi Card, LocalKart and more.",
    url: "https://kstechx.com",
    siteName: "KS TechX",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
