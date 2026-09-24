/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Old URLs → new pages (keeps shared links & Google results working)
  async redirects() {
    return [
      { source: "/products", destination: "/web-services", permanent: true },
      { source: "/products/:slug", destination: "/web-services", permanent: true },
      { source: "/services", destination: "/web-services", permanent: true },
      { source: "/services/fintech-solutions", destination: "/fintech", permanent: true },
      { source: "/services/:slug", destination: "/web-services/:slug", permanent: true },
    ];
  },
};

module.exports = nextConfig;
