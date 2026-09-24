// → https://kstechx.com/robots.txt
// Lets Google crawl every page and tells it where the sitemap is.
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://kstechx.com/sitemap.xml",
    host: "https://kstechx.com",
  };
}
