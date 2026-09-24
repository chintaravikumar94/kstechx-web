// Auto-generated sitemap → https://kstechx.com/sitemap.xml
// Submit this URL in Google Search Console. New services/IDs added in data.js appear automatically.
import { webServices, fintech } from "./data";

const BASE = "https://kstechx.com";

export default function sitemap() {
  const now = new Date();
  const page = (path, priority, changeFrequency = "monthly") => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1.0, "weekly"),
    page("/web-services", 0.9, "weekly"),
    ...webServices.map((s) => page(`/web-services/${s.slug}`, 0.8)),
    ...webServices.flatMap((s) => s.offerings.map((o) => page(`/web-services/${s.slug}/${o.slug}`, 0.7))),
    page("/fintech", 0.9, "weekly"),
    ...fintech.map((f) => page(`/fintech/${f.slug}`, 0.8)),
    page("/partners", 0.7),
    page("/how-it-works", 0.6),
    page("/about", 0.6),
    page("/contact", 0.7),
  ];
}
