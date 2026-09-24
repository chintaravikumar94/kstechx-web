/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Old product URLs → new services pages
  async redirects() {
    return [
      { source: "/products", destination: "/services", permanent: true },
      { source: "/products/:slug", destination: "/services", permanent: true },
    ];
  },
};

module.exports = nextConfig;
