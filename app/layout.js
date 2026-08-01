import "./globals.css";

export const metadata = {
  title: "KS TechX — Building Digital Products",
  description:
    "KS TechX is the home of Mera Digi Card, LocalKart, Mera Partners and more. Explore our digital products.",
  metadataBase: new URL("https://kstechx.com"),
  openGraph: {
    title: "KS TechX — Building Digital Products",
    description:
      "The home of Mera Digi Card, LocalKart, Mera Partners and more.",
    url: "https://kstechx.com",
    siteName: "KS TechX",
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
