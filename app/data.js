/* ---------------- SHARED SITE DATA ----------------
   Edit this one file to change content across the whole site. */

export const CONTACT_EMAIL = "bizfree@kstechx.com"; // change to e.g. info@kstechx.com
export const WHATSAPP_NUMBER = ""; // e.g. "919876543210" — shows a WhatsApp button when set

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/services/fintech-solutions", label: "Fintech" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/partners", label: "Partner" },
  { href: "/about", label: "About" },
];

/* ---------- SERVICES ---------- */
export const services = [
  {
    slug: "fintech-solutions",
    name: "Fintech Solutions",
    short: "Retailer & merchant IDs that turn your shop into a banking and cash service point.",
    icon: "💳",
    accent: "#e63946",
    tag: "Retailer & Merchant IDs",
    tagline: "Turn your shop into a banking point",
    summary:
      "Get the retailer and merchant IDs you need to offer Aadhaar banking, UPI and card-based cash services at your counter — earn on every transaction and bring more customers into your store.",
    kind: "ids",
    offerings: [
      {
        icon: "👆",
        title: "AEPS Retailer ID",
        text: "Offer Aadhaar-enabled cash withdrawal, balance enquiry and mini statements with biometric authentication.",
        points: ["Aadhaar cash withdrawal", "Balance enquiry", "Mini statement", "Biometric device support"],
      },
      {
        icon: "📲",
        title: "UPI Cash Withdrawal Merchant ID",
        text: "Accept UPI payments at your counter and provide UPI-based cash withdrawal services to customers.",
        points: ["UPI QR at counter", "Instant settlement", "Works with all UPI apps", "Transaction reports"],
      },
      {
        icon: "💳",
        title: "Credit Card Withdrawal Merchant ID",
        text: "A merchant ID to accept credit card transactions for card-based withdrawal services.",
        points: ["Visa & Mastercard", "Secure card acceptance", "Merchant dashboard", "Settlement to your bank"],
      },
      {
        icon: "🟠",
        title: "RuPay Credit Card Withdrawal Merchant ID",
        text: "A merchant ID that supports RuPay credit card transactions, including RuPay on UPI.",
        points: ["RuPay credit cards", "RuPay on UPI", "Low-cost acceptance", "Settlement to your bank"],
      },
    ],
    who: "Retailers, kirana stores, mobile & recharge shops, CSC operators and small merchants.",
    cta: "Apply for an ID",
  },
  {
    slug: "website-development",
    name: "Website Development",
    short: "Fast, beautiful websites — from a single page to advanced sites with child pages.",
    icon: "🌐",
    accent: "#ff7a3c",
    tag: "3 packages",
    tagline: "Websites that make your business look big",
    summary:
      "Professional, mobile-first websites that load fast, rank on Google and turn visitors into customers. Pick the package that fits your business today — upgrade any time.",
    kind: "tiers",
    offerings: [
      {
        icon: "📄",
        title: "Single Page Website",
        text: "One fast, beautiful page with everything a customer needs — ideal for getting online quickly.",
        points: ["Mobile responsive design", "Services & about sections", "Click-to-call & WhatsApp button", "Google Maps location", "Contact form"],
      },
      {
        icon: "🏢",
        title: "Business Website (3–5 pages)",
        text: "A complete business presence — Home, About, Services, Gallery and Contact pages.",
        points: ["3 to 5 custom pages", "Basic SEO setup", "Gallery & testimonials", "Enquiry forms", "Social media links"],
        popular: true,
      },
      {
        icon: "🚀",
        title: "Advanced Website (with child pages)",
        text: "A multi-level website with child pages, dynamic sections and advanced design.",
        points: ["Unlimited child pages", "Dynamic content & animations", "Advanced SEO & schema", "Blog / updates section", "Performance optimised"],
      },
    ],
    who: "Shops, clinics, schools, startups, professionals and growing businesses.",
    cta: "Get a website quote",
  },
  {
    slug: "custom-software",
    name: "Custom Software Solutions",
    short: "Custom web applications built around the way your business actually works.",
    icon: "🧩",
    accent: "#ff4d5e",
    tag: "Custom Web Apps",
    tagline: "Software built around your workflow",
    summary:
      "Stop forcing your business into off-the-shelf tools. We design and build custom web applications — secure, scalable and made exactly for your process.",
    kind: "single",
    offerings: [
      {
        icon: "🖥️",
        title: "Custom Web Application",
        text: "A browser-based application designed around your workflow, accessible from any device.",
        points: ["Admin & user dashboards", "Role-based login", "Reports & analytics", "Payment integration", "Cloud hosting & support"],
      },
    ],
    examples: ["CRM & lead management", "Billing & invoicing", "Inventory & stock", "Booking & appointments", "HR & attendance", "Custom business portals"],
    who: "SMEs, distributors, institutions and teams with unique processes.",
    cta: "Discuss your project",
  },
  {
    slug: "mobile-app-development",
    name: "Custom Mobile App Development",
    short: "Custom Android applications that put your business in every customer's pocket.",
    icon: "📱",
    accent: "#f4b53f",
    tag: "Android Apps",
    tagline: "Your business, in every customer's pocket",
    summary:
      "We build custom Android applications — fast, reliable and ready for the Play Store — so your customers and team can reach you anytime.",
    kind: "single",
    offerings: [
      {
        icon: "🤖",
        title: "Custom Android Application",
        text: "A native-quality Android app designed for your customers or your internal team.",
        points: ["Custom UI/UX design", "Login & user accounts", "Push notifications", "Payments & API integration", "Play Store publishing"],
      },
    ],
    examples: ["Ordering & delivery apps", "Booking apps", "Customer loyalty apps", "Field staff & sales apps", "Service & support apps", "Business companion apps"],
    who: "Businesses ready to engage customers and teams on mobile.",
    cta: "Plan your app",
  },
];

/* ---------- PARTNER ---------- */
export const partner = {
  name: "KS TechX Partner",
  short: "Sell any KS TechX service and earn commission on every sale.",
  icon: "🤝",
  accent: "#f4b53f",
};

export const partnerBenefits = [
  { icon: "💰", title: "Commission on every sale", text: "Every sale you bring in earns you commission — fintech IDs, websites, software or apps." },
  { icon: "🧰", title: "Many services to sell", text: "One partnership, many products. Offer your customers exactly what they need." },
  { icon: "👥", title: "Grow your network", text: "Build your team and expand your reach across your town and district." },
  { icon: "📈", title: "Transparent tracking", text: "Know what you've sold and what you've earned — clear and on time." },
  { icon: "🎓", title: "Training & support", text: "We help you pitch, close and deliver. You're never on your own." },
  { icon: "🆓", title: "Easy to start", text: "Simple onboarding — start referring customers right away." },
];

export const howClient = [
  "Tell us what you need — a fintech ID, website, software or app",
  "Get a clear plan and quote from our team",
  "We set up, design and build it for you",
  "Go live — with ongoing support from KS TechX",
];

export const howPartner = [
  "Join as a KS TechX Partner",
  "Refer or sell any KS TechX service",
  "We deliver the service to your customer",
  "You earn commission on every sale",
];

export const process = [
  { icon: "🔍", title: "Discover", text: "We understand your business, goals and customers." },
  { icon: "✏️", title: "Design", text: "Clear plan, clean design, approved by you." },
  { icon: "⚙️", title: "Build", text: "Developed and tested by our in-house team." },
  { icon: "🚀", title: "Launch & support", text: "Go live with training and ongoing support." },
];

export const values = [
  { icon: "🏗️", title: "Built in-house", text: "Every website, app and software is designed and developed by our own team." },
  { icon: "🤝", title: "One partner for everything", text: "Fintech, web, software and apps — one company, one point of contact." },
  { icon: "🇮🇳", title: "Made for Bharat", text: "Solutions designed for Indian retailers, businesses and customers." },
];

export const audiences = [
  "🏪 Retailers",
  "🛒 Kirana stores",
  "📱 Mobile shops",
  "🏛️ CSC centres",
  "🏥 Clinics",
  "🍽️ Restaurants",
  "🎓 Schools",
  "🚀 Startups",
  "🏢 SMEs",
];

export const stats = [
  { value: 4, suffix: "", label: "Fintech IDs" },
  { value: 3, suffix: "", label: "Website packages" },
  { value: 5, suffix: "", label: "Service lines" },
  { value: 100, suffix: "%", label: "Built in-house" },
];
