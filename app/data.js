/* ---------------- SHARED SITE DATA ---------------- */

export const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const offers = [
  {
    icon: "🧰",
    title: "Software products",
    badge: "Subscribe & go live",
    text: "Ready-to-use SaaS your business runs on — Bizfree, Mera Digi Card, LocalKart. Pick a plan and start today.",
  },
  {
    icon: "🚀",
    title: "Done-for-you setup",
    badge: "We build it for you",
    text: "We put your whole business online — storefront, payments, delivery and digital identity. You just serve customers.",
  },
  {
    icon: "🤝",
    title: "Partner & earn",
    badge: "Grow your income",
    text: "Join our partner network and earn commission for every business you bring on board. Build your own downline.",
  },
  {
    icon: "🪪",
    title: "Digital products",
    badge: "One-time",
    text: "Smart digital business cards, mini-sites and more — professional digital assets ready in minutes.",
  },
];

export const products = [
  {
    slug: "bizfree",
    name: "Bizfree",
    tag: "Flagship · Commerce",
    accent: "#25d366",
    url: "https://biz.kstechx.com",
    tagline: "Sell on WhatsApp & the web — with delivery built in",
    summary:
      "Take orders, bookings and appointments through WhatsApp and your own web storefront. Collect payments online and ship anywhere in India with 15+ courier partners.",
    features: [
      { icon: "💬", label: "WhatsApp AI ordering", note: "English · Hindi · Telugu" },
      { icon: "🌐", label: "Web storefront", note: "Your own store link" },
      { icon: "💳", label: "Online payments", note: "UPI · cards · netbanking" },
      { icon: "🚚", label: "Doorstep delivery", note: "15+ courier partners" },
      { icon: "📅", label: "Bookings & slots", note: "Appointments & calendar" },
      { icon: "🧾", label: "GST-ready invoices", note: "Automatic tax invoice" },
    ],
    who: "Restaurants, clinics, salons, retail, bakeries and professionals.",
  },
  {
    slug: "mera-digi-card",
    name: "Mera Digi Card",
    tag: "Digital Identity",
    accent: "#e63946",
    url: "https://mdc.kstechx.com",
    tagline: "Your smart digital business card",
    summary:
      "Share your profile, links, contact and social handles in a single tap. A modern, professional identity that replaces paper cards.",
    features: [
      { icon: "📇", label: "One-tap sharing", note: "QR & link" },
      { icon: "🔗", label: "All your links", note: "Social & web" },
      { icon: "📞", label: "Save contact", note: "vCard download" },
      { icon: "🎨", label: "Custom branding", note: "Your colors & logo" },
      { icon: "📊", label: "View analytics", note: "Track taps" },
      { icon: "📱", label: "Always updated", note: "Edit anytime" },
    ],
    who: "Professionals, founders, sales teams and freelancers.",
  },
  {
    slug: "localkart",
    name: "LocalKart",
    tag: "Marketplace",
    accent: "#ff7a3c",
    url: "https://localkart.kstechx.com",
    tagline: "A local-first online marketplace",
    summary:
      "Connect nearby stores with the customers around them. Discover, order and support local businesses — all in one marketplace.",
    features: [
      { icon: "📍", label: "Local discovery", note: "Shops near you" },
      { icon: "🛒", label: "Easy ordering", note: "Cart & checkout" },
      { icon: "💳", label: "Online payments", note: "UPI & cards" },
      { icon: "🚚", label: "Local delivery", note: "Fast & tracked" },
      { icon: "⭐", label: "Ratings & reviews", note: "Trust built-in" },
      { icon: "🏪", label: "Store profiles", note: "For every seller" },
    ],
    who: "Local shops, customers and neighbourhood sellers.",
  },
  {
    slug: "mera-partners",
    name: "Mera Partners",
    tag: "Partner Network",
    accent: "#f4b53f",
    url: "https://partners.kstechx.com",
    tagline: "The engine behind our partner network",
    summary:
      "The platform that powers our partner and downline network — onboard businesses, track your team and see your earnings in real time.",
    features: [
      { icon: "🤝", label: "Onboard businesses", note: "In minutes" },
      { icon: "💰", label: "Track earnings", note: "Real-time" },
      { icon: "👥", label: "Manage downline", note: "Your whole team" },
      { icon: "📈", label: "Growth dashboard", note: "Clear metrics" },
      { icon: "🎯", label: "Targets & rewards", note: "Stay motivated" },
      { icon: "🧾", label: "Payout history", note: "Transparent" },
    ],
    who: "Partners, agents, resellers and team leaders.",
  },
];

export const howBusiness = [
  "Choose a plan — or let us set you up",
  "Go live on WhatsApp & your web store",
  "Get paid online — UPI, cards or COD",
  "Deliver across India and grow",
];

export const howPartner = [
  "Join the partner network — free to start",
  "Onboard local businesses around you",
  "Earn commission on every plan they take",
  "Scale your downline and your income",
];

export const integrations = [
  "💳 Cashfree Payments",
  "🚚 15+ Courier Partners",
  "💬 WhatsApp · Meta",
  "☁️ Cloud Hosting",
  "🔐 Secure UPI Gateway",
  "🧾 GST Invoicing",
];

export const testimonials = [
  {
    quote:
      "Customers order on WhatsApp, pay online, and the courier gets booked in one tap. We stopped losing orders to missed calls.",
    name: "Ravi",
    role: "Restaurant owner",
  },
  {
    quote:
      "Patients book appointments themselves now instead of calling. My front desk finally has breathing room.",
    name: "Dr. Meena",
    role: "Clinic",
  },
  {
    quote:
      "I share my web store link on Instagram, orders come in with payment done, and I just print the label. Game changer.",
    name: "Kiran",
    role: "Home bakery",
  },
];

export const businessTypes = [
  "🍽️ Restaurants",
  "🏥 Clinics",
  "💇 Salons",
  "🛍️ Retail",
  "🍰 Bakeries",
  "🧾 Professionals",
  "☕ Cafés",
  "🌸 Boutiques",
];

export const stats = [
  { value: 4, suffix: "+", label: "Products shipped" },
  { value: 15, suffix: "+", label: "Courier partners" },
  { value: 3, suffix: "", label: "AI languages" },
  { value: 24, suffix: "/7", label: "Always selling" },
];
