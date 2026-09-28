/* ---------------- SHARED SITE DATA ----------------
   Edit this one file to change content across the whole site. */

/* ---------- CONTACT (one place for phone, email & WhatsApp) ----------
   One professional business email for the whole site: info@kstechx.com   */
export const CONTACT = {
  email: "info@kstechx.com",
  phone: "+91 99494 99177",
  phoneHref: "tel:+919949499177",
  whatsapp: "919949499177", // set to "" to hide WhatsApp Assist & buttons
  hours: "", // e.g. "Mon – Sat · 9:30 AM – 7:00 PM" — shown when set
};
/* ---------- REGISTERED BUSINESS ADDRESS (as per GST registration) ----------
   Keep this EXACTLY the same on Google Business Profile, invoices & listings. */
export const ADDRESS = {
  business: "Kumara Swamy Technologies",
  constitution: "Proprietorship",
  gstin: "37AYPPC2454H2ZB",
  street: "Ground Floor, 2-10, Kottumeraka Road",
  locality: "Pasarlapudi",
  district: "Dr BR Ambedkar Konaseema",
  state: "Andhra Pradesh",
  pin: "533247",
  country: "India",
  countryCode: "IN",
};
ADDRESS.lines = [
  ADDRESS.street,
  `${ADDRESS.locality}, ${ADDRESS.district} District`,
  `${ADDRESS.state} – ${ADDRESS.pin}, ${ADDRESS.country}`,
];
ADDRESS.short = `${ADDRESS.locality}, ${ADDRESS.state} ${ADDRESS.pin}`;
ADDRESS.maps =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(`${ADDRESS.business}, ${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.state} ${ADDRESS.pin}`);

/* ---------- FOUNDER (About page + home) ----------
   Photo: save a square photo as /public/team/founder.jpg (min 600×600).
   Until then, the card shows "CR" initials. */
export const FOUNDER = {
  name: "Chinta Ravikumar",
  initials: "CR",
  role: "Founder & Proprietor", // change to "Founder & CEO" after Pvt Ltd registration
  company: "Kumara Swamy Technologies (KS TechX)",
  location: "Pasarlapudi, Konaseema, Andhra Pradesh",
  photo: "/team/founder.jpg",
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-profile"
  message:
    "I started KS TechX with one goal — to give every shop and small business in Bharat the same digital and fintech tools that big companies use. Every website, app and fintech ID we deliver is handled by our own team, and I personally stand behind our work. When you work with KS TechX, you work with people you can call, meet and trust.",
  short: "Every website, app and fintech ID we deliver is handled by our own team — and I personally stand behind our work.",
  facts: [
    { icon: "building", label: "Founded Kumara Swamy Technologies" },
    { icon: "receipt", label: "GST-registered business" },
    { icon: "layers", label: "Web, software & fintech under one roof" },
    { icon: "pin", label: "Pasarlapudi, Konaseema, Andhra Pradesh" },
  ],
};

/* ---------- SHOP (online store at shop.kstechx.com) ---------- */
export const SHOP = {
  url: "https://shop.kstechx.com/shop/",
  categories: "https://shop.kstechx.com/shop/categories/",
  track: "https://shop.kstechx.com/shop/orders/",
  privacy: "https://shop.kstechx.com/shop/privacy/",
  terms: "https://shop.kstechx.com/shop/terms/",
  refunds: "https://shop.kstechx.com/shop/refunds/",
  perks: ["Prices include GST", "Card, UPI or cash on delivery", "Delivered across Andhra Pradesh", "GST invoice in your business name"],
};
export const shopCategories = [
  { icon: "🏧", name: "Mini ATM machines", text: "Cash withdrawal devices for your shop" },
  { icon: "💳", name: "Card swipe machines", text: "Accept debit & credit cards" },
  { icon: "👆", name: "AEPS agency", text: "Aadhaar banking services" },
  { icon: "🔗", name: "Payment gateway", text: "Take payments online" },
  { icon: "🖨️", name: "Printing & design", text: "Logos, cards, banners & more" },
  { icon: "🔋", name: "Power backup & solar", text: "Keep your shop running" },
];

export const CONTACT_EMAIL = CONTACT.email;
export const WHATSAPP_NUMBER = CONTACT.whatsapp;

/* =========================================================
   WEB SERVICES
   ========================================================= */
export const webServices = [
  {
    slug: "website-development",
    name: "Website Development",
    short: "Fast, beautiful websites — from a single page to advanced sites with child pages.",
    icon: "🌐",
    accent: "#1f5bd8",
    art: "website",
    tag: "3 packages",
    tagline: "Websites that make your business look big",
    summary:
      "Professional, mobile-first websites that load fast, rank on Google and turn visitors into customers. Pick the package that fits your business today — upgrade any time.",
    kind: "tiers",
    offerings: [
      {
        slug: "single-page-website",
        icon: "📄",
        art: "single",
        title: "Single Page Website",
        text: "One fast, beautiful page with everything a customer needs — ideal for getting online quickly.",
        points: ["Mobile responsive design", "Services & about sections", "Click-to-call & WhatsApp button", "Google Maps location", "Contact form"],
        tagline: "Get online fast — one page, everything customers need",
        overview:
          "A single, beautifully designed page that tells customers who you are, what you offer and how to reach you — with click-to-call, WhatsApp and Google Maps built in. The quickest, most affordable way to get your business online.",
        highlights: [
          { icon: "📱", label: "Mobile-first", note: "Perfect on every phone" },
          { icon: "⚡", label: "Super fast", note: "Loads in a blink" },
          { icon: "💬", label: "WhatsApp & call", note: "One-tap contact" },
          { icon: "📍", label: "Google Maps", note: "Easy to find you" },
        ],
        includes: [
          "Custom one-page design in your brand colours",
          "Hero banner with your main offer",
          "About & services sections",
          "Photo gallery strip",
          "Click-to-call & WhatsApp buttons",
          "Google Maps location",
          "Enquiry / contact form",
          "Social media links",
          "Basic SEO (title & description)",
          "Free SSL (https) setup",
        ],
        bestFor: ["Local shops", "Freelancers", "Home businesses", "Events & launches", "Personal brands"],
        faqs: [
          { q: "Can I upgrade to more pages later?", a: "Yes. You can move up to a Business or Advanced website any time — your design and content carry over." },
          { q: "Do you write the content?", a: "We help structure and polish it. Share your details and photos and we shape them into a professional page." },
          { q: "Do I need a domain and hosting?", a: "Yes — we guide you to get a domain and hosting, or set the site up on the ones you already have." },
        ],
      },
      {
        slug: "business-website",
        icon: "🏢",
        art: "business",
        title: "Business Website (3–5 pages)",
        text: "A complete business presence — Home, About, Services, Gallery and Contact pages.",
        points: ["3 to 5 custom pages", "Basic SEO setup", "Gallery & testimonials", "Enquiry forms", "Social media links"],
        popular: true,
        tagline: "A complete, professional home for your business",
        overview:
          "A 3–5 page website that gives your business a complete, credible presence — Home, About, Services, Gallery and Contact — designed to build trust and bring in enquiries every day.",
        highlights: [
          { icon: "🗂️", label: "3–5 pages", note: "Clear & structured" },
          { icon: "🔎", label: "SEO ready", note: "Get found on Google" },
          { icon: "🖼️", label: "Gallery", note: "Show your work" },
          { icon: "✉️", label: "Enquiry forms", note: "Capture every lead" },
        ],
        includes: [
          "3 to 5 custom-designed pages",
          "Home, About, Services, Gallery & Contact",
          "Mobile responsive layout",
          "Enquiry forms on key pages",
          "Testimonials section",
          "Google Maps & business hours",
          "WhatsApp & call buttons",
          "Basic on-page SEO",
          "Social media integration",
          "Free SSL (https) setup",
        ],
        bestFor: ["Clinics & hospitals", "Schools & coaching", "Shops & showrooms", "Service businesses", "Startups"],
        faqs: [
          { q: "How many pages do I get?", a: "Between 3 and 5 pages — we help you choose the right structure for your business." },
          { q: "Can I update content later?", a: "Yes. We can make updates for you, or set up an easy way for you to edit key content." },
          { q: "Will it show on Google?", a: "We set up on-page SEO so Google can index your site. Ranking depends on competition and ongoing effort." },
        ],
      },
      {
        slug: "advanced-website",
        icon: "🚀",
        art: "advanced",
        title: "Advanced Website (with child pages)",
        text: "A multi-level website with child pages, dynamic sections and advanced design.",
        points: ["Unlimited child pages", "Dynamic content & animations", "Advanced SEO & schema", "Blog / updates section", "Performance optimised"],
        tagline: "A powerful multi-level website with child pages",
        overview:
          "An advanced website with parent and child pages, mega menus, dynamic sections, premium animations and deeper SEO — built for businesses with many services, products or locations.",
        highlights: [
          { icon: "🧭", label: "Child pages", note: "Unlimited structure" },
          { icon: "✨", label: "Animations", note: "Premium feel" },
          { icon: "📈", label: "Advanced SEO", note: "Schema & speed" },
          { icon: "📰", label: "Blog", note: "Share updates" },
        ],
        includes: [
          "Unlimited parent & child pages",
          "Mega menu navigation",
          "Dynamic, data-driven sections",
          "Premium animations & graphics",
          "Blog / news section",
          "Advanced SEO & structured data",
          "Performance optimisation",
          "Analytics integration",
          "Lead forms on every page",
          "Free SSL (https) setup",
        ],
        bestFor: ["Multi-service companies", "Growing brands", "Institutions", "Multi-location businesses", "Product catalogues"],
        faqs: [
          { q: "What are child pages?", a: "Pages that sit under a main page — like Web Services → Website Development → Single Page Website. They keep big sites organised and help SEO." },
          { q: "Is there an example?", a: "Yes — kstechx.com itself is built as an advanced website with child pages, mega menus and animations." },
          { q: "Can it grow later?", a: "Absolutely. New pages, sections and features can be added any time." },
        ],
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
    accent: "#0ea5a4",
    art: "software",
    tag: "Custom Web Apps",
    tagline: "Software built around your workflow",
    summary:
      "Stop forcing your business into off-the-shelf tools. We design and build custom web applications — secure, scalable and made exactly for your process.",
    kind: "single",
    offerings: [
      {
        slug: "custom-web-application",
        icon: "🖥️",
        art: "webapp",
        title: "Custom Web Application",
        text: "A browser-based application designed around your workflow, accessible from any device.",
        points: ["Admin & user dashboards", "Role-based login", "Reports & analytics", "Payment integration", "Cloud hosting & support"],
        tagline: "Your process, turned into powerful software",
        overview:
          "A custom, browser-based application designed around exactly how your business works — dashboards, logins, reports and integrations, securely accessible from any device, anywhere.",
        highlights: [
          { icon: "📊", label: "Dashboards", note: "Real-time insights" },
          { icon: "🔐", label: "Secure login", note: "Role-based access" },
          { icon: "🔗", label: "Integrations", note: "Payments & APIs" },
          { icon: "☁️", label: "Cloud hosted", note: "Access anywhere" },
        ],
        includes: [
          "Requirement discovery & planning",
          "Custom UI/UX design",
          "Admin & user dashboards",
          "Role-based login & permissions",
          "Reports & exports",
          "Payment gateway integration",
          "Third-party API integration",
          "Cloud deployment",
          "Training & handover",
          "Ongoing support & updates",
        ],
        bestFor: ["CRM & lead management", "Billing & invoicing", "Inventory & stock", "Booking & appointments", "HR & attendance", "Custom portals"],
        faqs: [
          { q: "How long does it take?", a: "It depends on scope. After discovery we share a clear plan with milestones before we start." },
          { q: "Who owns the software?", a: "Ownership and licensing terms are agreed in writing before development begins." },
          { q: "Do you support it after launch?", a: "Yes — we offer ongoing support, fixes and feature updates." },
        ],
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
    accent: "#7c3aed",
    art: "mobile",
    tag: "Android Apps",
    tagline: "Your business, in every customer's pocket",
    summary:
      "We build custom Android applications — fast, reliable and ready for the Play Store — so your customers and team can reach you anytime.",
    kind: "single",
    offerings: [
      {
        slug: "custom-android-application",
        icon: "🤖",
        art: "android",
        title: "Custom Android Application",
        text: "A native-quality Android app designed for your customers or your internal team.",
        points: ["Custom UI/UX design", "Login & user accounts", "Push notifications", "Payments & API integration", "Play Store publishing"],
        tagline: "A custom Android app your customers will love",
        overview:
          "A custom Android application designed for your customers or your team — clean UI, secure login, push notifications and payments, published on Google Play.",
        highlights: [
          { icon: "🎨", label: "Custom UI", note: "Designed for you" },
          { icon: "🔔", label: "Push alerts", note: "Stay connected" },
          { icon: "💳", label: "Payments", note: "Integrated checkout" },
          { icon: "▶️", label: "Play Store", note: "We publish it" },
        ],
        includes: [
          "App planning & wireframes",
          "Custom UI/UX design",
          "Login & user accounts",
          "Push notifications",
          "Payment integration",
          "Admin panel / backend",
          "API integration",
          "Testing on real devices",
          "Google Play publishing",
          "Support & updates",
        ],
        bestFor: ["Ordering & delivery", "Booking & services", "Loyalty & rewards", "Field staff & sales", "Customer support"],
        faqs: [
          { q: "Do you build iOS apps?", a: "Our focus is custom Android apps. Talk to us if you also need iOS." },
          { q: "Will you publish it on Google Play?", a: "Yes — we handle the Play Store publishing process using your developer account." },
          { q: "Can the app connect to my website?", a: "Yes — your app and website can share the same backend and data." },
        ],
      },
    ],
    examples: ["Ordering & delivery apps", "Booking apps", "Customer loyalty apps", "Field staff & sales apps", "Service & support apps", "Business companion apps"],
    who: "Businesses ready to engage customers and teams on mobile.",
    cta: "Plan your app",
  },
  {
    slug: "dynamic-qr-codes",
    name: "Dynamic QR Codes",
    short: "Smart QR codes you can edit after printing — with live scan analytics and your own login.",
    icon: "🔳",
    accent: "#e63946",
    art: "qr",
    tag: "KS TechX QR",
    isNew: true,
    tagline: "Print once. Update anytime. Track every scan.",
    summary:
      "Create QR codes for your website, WhatsApp, UPI payments, Google reviews, menus and business cards. Change where they point anytime without reprinting, and see how many people scan — when, from which city and on which phone.",
    kind: "single",
    product: {
      url: "https://qr.kstechx.com",
      signup: "https://qr.kstechx.com/signup",
      login: "https://qr.kstechx.com/login",
      pricing: "https://qr.kstechx.com/#pricing",
      host: "qr.kstechx.com",
      cta: "Create free QR code",
    },
    offerings: [
      {
        slug: "dynamic-qr-code-platform",
        icon: "📊",
        art: "qrdash",
        title: "Dynamic QR Code Platform",
        text: "Create, design and track QR codes from one dashboard at qr.kstechx.com.",
        points: ["18 QR types", "Edit after printing", "Smart redirects & A/B", "Retargeting pixels", "Team access"],
        tagline: "Every scan counted. Every QR under your control.",
        overview:
          "KS TechX QR is our own dynamic QR platform. Each QR points to a smart short link, so you can change the destination anytime and see real-time analytics — total and unique scans, time of day, city, device and more — from your own login.",
        highlights: [
          { icon: "✏️", label: "Edit anytime", note: "No reprinting" },
          { icon: "📊", label: "Live analytics", note: "Scans, city, device" },
          { icon: "🎨", label: "Your brand", note: "Logo, colours, frames" },
          { icon: "🔒", label: "Pro controls", note: "Password, expiry, limits" },
        ],
        includes: [
          "Website, WhatsApp, UPI & Google Review QRs",
          "Digital business card with Save Contact",
          "Link page, menu / PDF, app download & maps QRs",
          "Custom design — colours, logo & 'Scan me' frames",
          "PNG, SVG & print-quality downloads",
          "Total & unique scans, time, city & device reports",
          "Pause, expiry date, scan limit & password",
          "UTM tags for Google Analytics",
          "Excel (CSV) export",
          "Upload menus & PDFs — we host them",
          "Lead capture forms with instant email alerts",
          "Bulk create up to 500 QR codes from Excel",
          "Weekly scan report by email",
          "Smart redirects — by device, time of day & A/B split",
          "Meta Pixel, GA4 & Google Ads retargeting",
          "Feedback & star ratings, coupons, events with Add to Calendar, social hub",
          "Team members (Editor / Viewer) with activity log",
          "Your own client login & GST invoice",
        ],
        bestFor: ["Restaurant menus & table ordering", "Shop counters & UPI payments", "Visiting cards", "Google review stands", "Product packaging", "Brochures, events & real estate"],
        faqs: [
          { q: "What is a dynamic QR code?", a: "It points to a short link that we manage for you. You can change where it goes anytime and see every scan — while the printed QR stays the same." },
          { q: "Is there a free plan?", a: "Yes — start free with a few dynamic QR codes. Upgrade to Pro, or ask for a Custom plan for more QR codes, scans and features." },
          { q: "Will my printed QR stop working if my plan ends?", a: "No. Printed QR codes keep working. Only premium features pause until you renew." },
          { q: "I'm a KS TechX website client — do I get this?", a: "Yes. We can add dynamic QR codes to your website package and give you your own analytics login. Ask our team." },
          { q: "Can I use it for UPI payments?", a: "Yes. Dynamic UPI QRs open a clean payment page; for scanning inside GPay/PhonePe we provide a static UPI option." },
        ],
      },
    ],
    examples: ["Restaurant menus & WhatsApp ordering", "UPI payment stands", "Google review cards", "Digital visiting cards", "Product packaging & manuals", "Events, brochures & real estate"],
    who: "Shops, restaurants, clinics, schools, real estate, events and every KS TechX website client.",
    cta: "Create free QR code",
  },

  {
    slug: "whatsapp-chatbot",
    name: "WhatsApp Chatbot",
    short: "Mera Chat Mitra replies to your WhatsApp customers, shows your menu and takes orders — 24×7. FREE for KS TechX clients.",
    icon: "💬",
    accent: "#16a34a",
    art: "chat",
    tag: "Mera Chat Mitra",
    isNew: true,
    tagline: "Your WhatsApp answers customers. Even while you sleep.",
    summary:
      "Mera Chat Mitra is our own WhatsApp chatbot for Indian businesses. It greets every customer instantly, shows your menu or product list, takes orders, answers common questions with AI and alerts you on WhatsApp the moment an order lands. Set up for you by our team — FREE for every KS TechX client.",
    kind: "single",
    product: {
      url: "https://chat.kstechx.com",
      login: "https://chat.kstechx.com/app",
      host: "chat.kstechx.com",
      // no public sign-up: FREE for KS TechX clients, everyone else talks to us
      primary: { label: "🎁 Claim free Mitra — KS TechX clients", href: "/contact?service=whatsapp-chatbot" },
      secondary: { label: "💬 Talk to us on WhatsApp", href: "https://wa.me/919949499177?text=Hi%20KS%20TechX%2C%20I%27m%20interested%20in%20Mera%20Chat%20Mitra%20%28WhatsApp%20chatbot%29%20for%20my%20business." },
      loginNote: "Mitra already activated?",
    },
    offerings: [
      {
        slug: "mera-chat-mitra",
        icon: "🤖",
        art: "chatdash",
        title: "Mera Chat Mitra — WhatsApp Chatbot",
        text: "Auto-replies, WhatsApp menu & ordering, AI answers and broadcasts — managed from one simple dashboard at chat.kstechx.com.",
        points: ["FREE for KS TechX clients", "Official WhatsApp API", "Orders on WhatsApp", "AI answers", "Broadcast offers"],
        tagline: "Every customer answered. Every order captured.",
        overview:
          "Customers already message you on WhatsApp — but replies get late, orders get missed and the same questions come again and again. Mera Chat Mitra works on the official WhatsApp Business Platform: it replies in seconds, lets customers pick items from a WhatsApp list without typing, answers FAQs with AI and sends you an alert for every order. You simply confirm and deliver.",
        highlights: [
          { icon: "⚡", label: "Instant replies", note: "24×7, in seconds" },
          { icon: "🛒", label: "WhatsApp orders", note: "Tap to order, no typing" },
          { icon: "🧠", label: "AI answers", note: "Timings, prices, FAQs" },
          { icon: "📣", label: "Broadcasts", note: "Offers to opted-in customers" },
        ],
        includes: [
          "Runs on the official WhatsApp Business Platform (Meta)",
          "Instant greeting when a customer says “Hi”",
          "Your menu / product list inside WhatsApp — customers tap to choose",
          "Order-taking on WhatsApp with an order alert to your phone",
          "AI answers for common questions — timings, prices, location, services",
          "Broadcast offers & updates to customers who opted in",
          "Simple dashboard — if you can use WhatsApp, you can use Mitra",
          "FREE for every KS TechX client — included when you buy any KS TechX service",
          "Done-for-you setup — our team adds your menu, answers & WhatsApp number",
          "Your customer data stays yours",
          "Setup help from the KS TechX team",
          "Works with your KS TechX website & QR codes",
        ],
        bestFor: ["Restaurants, sweets & bakeries", "Kirana & retail shops", "Clinics & diagnostic centres", "Coaching centres & schools", "Salons & services", "Real estate & local businesses"],
        faqs: [
          { q: "What is Mera Chat Mitra?", a: "A WhatsApp chatbot by Kumara Swamy Technologies (KS TechX). It replies to your customers automatically, shows your list, takes orders and alerts you — so no customer waits and no order is missed." },
          { q: "Is it the official WhatsApp API?", a: "Yes. Mitra runs on Meta's official WhatsApp Business Platform. Our team guides you through connecting your business number during setup." },
          { q: "Do I need technical knowledge?", a: "No. Our team sets everything up for you. If you can use WhatsApp, you can use Mitra." },
          { q: "I bought a service from KS TechX. Do I pay for Mitra?", a: "No — Mera Chat Mitra is free for KS TechX clients. If you have purchased any KS TechX service (website, software, app, QR plan or fintech ID), message our team on WhatsApp and we'll activate your free Mitra and help you set it up." },
          { q: "I'm not a KS TechX client. Can I get Mitra?", a: "Yes — contact us. You can buy any KS TechX service (website, app, software, QR plan or fintech ID) and get Mitra free, or we'll share a standalone plan that fits your business." },
          { q: "Are there any other charges?", a: "Mitra itself is free for KS TechX clients. WhatsApp (Meta) may charge separately for some message types, such as marketing broadcasts — we explain this clearly before you start." },
          { q: "Can I send offers to all my customers?", a: "Yes — you can broadcast offers and updates to customers who have agreed to receive them, as per WhatsApp's rules." },
          { q: "Can I use it with my KS TechX QR codes?", a: "Yes. Print a KS TechX WhatsApp QR on your counter, menu or packaging — customers scan, say “Hi”, and Mitra takes it from there." },
        ],
      },
    ],
    examples: ["Restaurant & sweet-shop orders", "Kirana home delivery", "Clinic appointment enquiries", "Coaching admission enquiries", "Salon bookings", "Offer broadcasts"],
    who: "Shops, restaurants, clinics, coaching centres and every business that gets customers on WhatsApp.",
    cta: "Claim free Mitra",
    guide: {
      offer: "🎁 FREE for KS TechX clients — buy any KS TechX service and get Mera Chat Mitra free.",
      stepsTitle: "Your WhatsApp chatbot live in 4 simple steps",
      stepsSub: "Done for you by the KS TechX team — no coding, no technical work on your side.",
      startCta: { label: "🎁 Claim your free Mitra →", href: "/contact?service=whatsapp-chatbot" },
      steps: [
        { icon: "📞", title: "Contact us", text: "KS TechX client? Share your name or invoice number. New? Tell us about your business — we'll suggest the best option." },
        { icon: "📋", title: "We set it up", text: "Our team adds your menu or products, prices and common answers — timings, location, delivery." },
        { icon: "🔗", title: "Connect WhatsApp", text: "We connect your business number on the official WhatsApp platform, step by step with you." },
        { icon: "🔔", title: "Go live & get orders", text: "Customers say “Hi”, pick items and order. You get an instant WhatsApp alert." },
      ],
      compare: {
        kicker: "Why a chatbot?",
        title: "Manual WhatsApp vs Mera Chat Mitra",
        bad: { title: "😩 Replying manually", items: ["✗ Customers wait — or leave for another shop", "✗ Same questions again and again", "✗ Orders lost in long chats", "✗ No replies at night or when you're busy"] },
        good: { title: "🤖 With Mera Chat Mitra", items: ["✓ Instant reply, 24×7 — even while you sleep", "✓ AI answers timings, prices & FAQs", "✓ Tap-to-order list — clean, clear orders", "✓ Order alert on your phone + simple dashboard"] },
      },
      grid: {
        kicker: "Built for Indian businesses",
        title: "Everything your WhatsApp needs",
        items: [
          ["🙏", "Auto greeting"],
          ["📋", "Menu / product list"],
          ["🛒", "WhatsApp ordering"],
          ["🔔", "Order alerts"],
          ["🧠", "AI answers"],
          ["📣", "Broadcast offers"],
          ["📱", "Simple dashboard"],
          ["✅", "Official WhatsApp API"],
          ["🔒", "Your data stays yours"],
          ["🔳", "Works with KS TechX QR"],
        ],
      },
      plansTitle: "Free for our clients. Made-to-fit for everyone else.",
      plansSub: "Mera Chat Mitra is available through the KS TechX team only — so every business gets a proper, done-for-you setup.",
      plans: [
        { name: "KS TechX clients — FREE", price: "₹0", note: "Bought any KS TechX service — website, software, app, QR plan or fintech ID? Your Mera Chat Mitra is free, with full setup.", cta: "Claim free Mitra", href: "/contact?service=whatsapp-chatbot", pop: true, badge: "🎁 Client benefit" },
        { name: "New business", price: "Contact us", note: "Not a client yet? Buy any KS TechX service and get Mitra free — or ask for a standalone Mitra plan.", cta: "Talk to us", href: "https://wa.me/919949499177?text=Hi%20KS%20TechX%2C%20I%27m%20interested%20in%20Mera%20Chat%20Mitra%20%28WhatsApp%20chatbot%29%20for%20my%20business." },
        { name: "Chains & custom", price: "On request", note: "Multi-branch, higher volumes and special order flows — planned and set up end to end.", cta: "Request a call", href: "/contact?service=whatsapp-chatbot" },
      ],
      noteLead: "🎁 Free for KS TechX clients.",
      noteText: "Buy any KS TechX service and Mera Chat Mitra comes free — we connect it with your website and QR codes and set everything up for you. WhatsApp (Meta) message charges, if any, are billed by Meta as per their rates.",
      noteCta: { label: "Claim now →", href: "/contact?service=whatsapp-chatbot" },
    },
  },
];

/* KS TechX QR — how it works (shown on the QR service page) */
export const qrGuide = {
  stepsTitle: "Your first dynamic QR in 4 simple steps",
  stepsSub: "No technical knowledge needed. If you can fill a form, you can create a QR code.",
  steps: [
    { icon: "🧾", title: "Sign up free", text: "Create your free account at qr.kstechx.com — takes 30 seconds, no card needed." },
    { icon: "🔳", title: "Create your QR", text: "Pick a type — website, WhatsApp, UPI, review, menu or business card — and fill in the details." },
    { icon: "🎨", title: "Design & download", text: "Add your colours, logo and a 'Scan me' frame. Download PNG / SVG and print." },
    { icon: "📊", title: "Track & update", text: "Watch scans live from your dashboard. Change the destination anytime — no reprint." },
  ],
  compare: {
    kicker: "Why dynamic?",
    title: "Normal QR vs KS TechX dynamic QR",
    bad: { title: "😐 Normal (static) QR", items: ["✗ Link is fixed forever — wrong link means reprinting", "✗ No idea how many people scanned", "✗ Plain black & white", "✗ Can't pause or expire an offer"] },
    good: { title: "🚀 KS TechX dynamic QR", items: ["✓ Change the link anytime — same printed QR", "✓ Live scans, unique visitors, time, city & device", "✓ Your colours, logo & “Scan me” frame", "✓ Smart redirects, pixels, pause, expiry & password"] },
  },
  grid: {
    kicker: "18 QR types",
    title: "One platform for every kind of QR",
    items: [
      ["🌐", "Website"],
      ["💬", "WhatsApp chat"],
      ["₹", "UPI payment"],
      ["⭐", "Google review"],
      ["🪪", "Business card"],
      ["🔗", "Link page"],
      ["📄", "Menu / PDF"],
      ["📱", "App download"],
      ["📍", "Location"],
      ["📞", "Call"],
      ["✉️", "Email"],
      ["📝", "Text / notice"],
      ["🎯", "Lead form"],
      ["📲", "Social media hub"],
      ["🏷️", "Coupon / offer"],
      ["📅", "Event invite"],
      ["⭐", "Feedback & rating"],
      ["📶", "Wi-Fi"],
    ],
  },
  plansSub: "Current Pro prices are always shown on qr.kstechx.com. All plans include a GST invoice.",
  plans: [
    { name: "Free", note: "Start with a few dynamic QR codes and 30-day analytics.", cta: "Start free", href: "https://qr.kstechx.com/signup" },
    { name: "Pro", note: "More QR codes & scans, your logo, smart redirects, pixels, team access & CSV export.", cta: "See Pro price", href: "https://qr.kstechx.com/#pricing", pop: true },
    { name: "Custom", note: "For chains, agencies & big campaigns — limits and price made for you.", cta: "Talk to us", href: "/contact?service=dynamic-qr-codes" },
  ],
  noteLead: "KS TechX website client?",
  noteText: "We can add dynamic QR codes to your website package and set up your analytics login for you — just ask our team.",
};

/* product guide for a service (QR or Mera Chat Mitra) */
export const guideFor = (s) => s.guide || (s.slug === "dynamic-qr-codes" ? qrGuide : null);

/* helpers */
export const subHref = (s, o) => `/web-services/${s.slug}/${o.slug}`;
export const subTopic = (s, o) => (s.offerings.length > 1 ? `${s.slug}::${o.title}` : s.slug);

/* =========================================================
   FINTECH — detailed retailer & merchant IDs
   ========================================================= */
export const fintechIntro = {
  name: "Fintech Solutions",
  icon: "💳",
  accent: "#e63946",
  art: "fintech",
  tagline: "Turn your shop into a banking & cash service point",
  summary:
    "Get the retailer and merchant IDs you need to offer Aadhaar banking, UPI and card-based services at your counter. Serve more customers, earn on every transaction, and build daily footfall into your store.",
};

export const fintech = [
  {
    slug: "aeps-retailer-id",
    art: "aeps",
    name: "AEPS Retailer ID",
    short: "Offer Aadhaar-based cash withdrawal, balance enquiry and mini statements with a fingerprint.",
    icon: "👆",
    badge: "Most requested",
    tagline: "Be the neighbourhood bank — with just a fingerprint",
    overview:
      "AEPS (Aadhaar Enabled Payment System) lets your customers withdraw cash, check their balance and get a mini statement from their Aadhaar-linked bank account — using only their Aadhaar number and fingerprint. With an AEPS Retailer ID, your shop becomes a trusted banking point for your area.",
    earn: "Earn commission on every eligible AEPS transaction, as per your plan.",
    highlights: [
      { icon: "💵", label: "Cash withdrawal", note: "From any Aadhaar-linked bank" },
      { icon: "🔎", label: "Balance enquiry", note: "Instant, on the spot" },
      { icon: "🧾", label: "Mini statement", note: "Recent transactions" },
      { icon: "🖐️", label: "Biometric secure", note: "Fingerprint authenticated" },
    ],
    steps: [
      "Customer gives their Aadhaar number and selects their bank",
      "Customer places a finger on the registered biometric device",
      "Transaction is authenticated and processed instantly",
      "You hand over cash — your wallet is credited, and you earn commission",
    ],
    benefits: [
      "Daily footfall from customers who need cash nearby",
      "No bank branch or ATM visit needed for your customers",
      "Commission on eligible transactions",
      "Simple, app-based operation",
    ],
    eligibility: ["Indian citizen, 18 years or above", "Running shop / retail outlet", "Active bank account in your name"],
    documents: ["Aadhaar card", "PAN card", "Bank account details / cancelled cheque", "Shop photo (inside & outside)", "Passport-size photo"],
    requirements: ["Registered biometric (RD) fingerprint device", "Android smartphone or PC", "Stable internet connection"],
    faqs: [
      { q: "Do customers need a debit card?", a: "No. AEPS works with the customer's Aadhaar number and fingerprint — their bank account must be linked to Aadhaar." },
      { q: "Which fingerprint device do I need?", a: "A registered (RD service) biometric device. Our team will guide you on compatible models during onboarding." },
      { q: "How long does activation take?", a: "Once your KYC documents are verified, activation is usually quick. Our team keeps you updated at every step." },
    ],
  },
  {
    slug: "upi-cash-withdrawal-merchant-id",
    art: "upi",
    name: "UPI Cash Withdrawal Merchant ID",
    short: "Accept UPI at your counter and offer UPI-based cash withdrawal to customers.",
    icon: "📲",
    badge: "Fast setup",
    tagline: "Scan, pay, get cash — the UPI way",
    overview:
      "With a UPI Cash Withdrawal Merchant ID, your counter accepts UPI payments from any UPI app and lets customers withdraw cash by paying through UPI. It is quick, paperless and works with the apps your customers already use every day.",
    earn: "Earn on eligible transactions and grow daily walk-ins, as per your plan.",
    highlights: [
      { icon: "🔳", label: "UPI QR at counter", note: "All UPI apps supported" },
      { icon: "💵", label: "UPI cash withdrawal", note: "Pay via UPI, receive cash" },
      { icon: "⚡", label: "Quick settlement", note: "As per provider terms" },
      { icon: "📊", label: "Transaction reports", note: "Track every payment" },
    ],
    steps: [
      "Customer scans your merchant QR with any UPI app",
      "Customer enters the amount and approves with UPI PIN",
      "Payment is confirmed instantly on your app",
      "You hand over cash — settlement goes to your bank account",
    ],
    benefits: [
      "Works with every major UPI app",
      "No card or device needed for the customer",
      "Clean digital record of every transaction",
      "Brings new customers to your shop",
    ],
    eligibility: ["Indian citizen, 18 years or above", "Running shop / business", "Active bank account in your name"],
    documents: ["Aadhaar card", "PAN card", "Bank account details / cancelled cheque", "Shop photo", "Business proof (GST / Udyam / shop licence) if available"],
    requirements: ["Android smartphone", "Stable internet connection", "Printed QR displayed at counter"],
    faqs: [
      { q: "Which UPI apps can customers use?", a: "Any UPI app — PhonePe, Google Pay, Paytm, BHIM, bank apps and more." },
      { q: "When do I receive settlement?", a: "Settlement goes to your registered bank account as per the provider's settlement terms." },
      { q: "Is GST registration mandatory?", a: "Not always. Basic KYC is enough for many plans — our team will confirm what applies to you." },
    ],
  },
  {
    slug: "credit-card-withdrawal-merchant-id",
    art: "card",
    name: "Credit Card Withdrawal Merchant ID",
    short: "A merchant ID to accept Visa & Mastercard credit card transactions for card-based withdrawal services.",
    icon: "💳",
    badge: "High value",
    tagline: "Accept credit cards at your counter",
    overview:
      "A Credit Card Withdrawal Merchant ID lets your business accept Visa and Mastercard credit card transactions through a secure payment channel, with settlement to your bank account. All transactions must be genuine and follow RBI and card-network rules — our team onboards you with full KYC.",
    earn: "Earn on eligible transactions, as per your plan.",
    highlights: [
      { icon: "💳", label: "Visa & Mastercard", note: "Credit card acceptance" },
      { icon: "🔐", label: "Secure payments", note: "Encrypted & authorised" },
      { icon: "🏦", label: "Bank settlement", note: "As per provider terms" },
      { icon: "📱", label: "Merchant dashboard", note: "Track all transactions" },
    ],
    steps: [
      "Customer chooses to pay by credit card",
      "Payment is made via the secure payment link / terminal",
      "Card is authorised by the issuing bank",
      "Transaction settles to your bank account as per provider terms",
    ],
    benefits: [
      "Serve customers who prefer paying by credit card",
      "Higher ticket transactions at your counter",
      "Full digital record for accounting",
      "Onboarding and support from our team",
    ],
    eligibility: ["Registered / operating business", "Active bank account (current or savings)", "Completed merchant KYC"],
    documents: ["Aadhaar card", "PAN card", "Business proof (GST / Udyam / shop licence)", "Bank account details / cancelled cheque", "Shop photos (inside & outside)"],
    requirements: ["Android smartphone or PC", "Stable internet connection", "Genuine business activity"],
    faqs: [
      { q: "Which cards are supported?", a: "Visa and Mastercard credit cards. For RuPay credit cards, see our RuPay Credit Card Withdrawal Merchant ID." },
      { q: "Are there any rules to follow?", a: "Yes. Transactions must be genuine and comply with RBI and card-network guidelines. Misuse can lead to the ID being blocked." },
      { q: "What are the charges?", a: "Charges depend on the plan and provider. Contact us and we will share the current plan details." },
    ],
  },
  {
    slug: "rupay-credit-card-withdrawal-merchant-id",
    art: "rupay",
    name: "RuPay Credit Card Withdrawal Merchant ID",
    short: "Accept RuPay credit cards — including RuPay credit card on UPI — at your counter.",
    icon: "🟠",
    badge: "RuPay on UPI",
    tagline: "Accept RuPay credit cards — even on UPI",
    overview:
      "RuPay credit cards can now be linked to UPI. With a RuPay Credit Card Withdrawal Merchant ID, your counter accepts RuPay credit card payments — by UPI QR or card — with settlement to your bank. All transactions must be genuine and follow RBI and NPCI guidelines.",
    earn: "Earn on eligible transactions, as per your plan.",
    highlights: [
      { icon: "🟠", label: "RuPay credit cards", note: "India's own network" },
      { icon: "🔳", label: "RuPay on UPI", note: "Accept via UPI QR" },
      { icon: "🏦", label: "Bank settlement", note: "As per provider terms" },
      { icon: "📊", label: "Merchant reports", note: "Every transaction tracked" },
    ],
    steps: [
      "Customer scans your QR using a UPI app linked to their RuPay credit card",
      "Customer selects the RuPay credit card and approves with UPI PIN",
      "Payment is confirmed instantly",
      "Settlement goes to your bank account as per provider terms",
    ],
    benefits: [
      "Tap into the fast-growing RuPay credit card user base",
      "Simple QR-based acceptance — no card machine needed",
      "Digital records for every payment",
      "Onboarding and support from our team",
    ],
    eligibility: ["Registered / operating business", "Active bank account (current or savings)", "Completed merchant KYC"],
    documents: ["Aadhaar card", "PAN card", "Business proof (GST / Udyam / shop licence)", "Bank account details / cancelled cheque", "Shop photos (inside & outside)"],
    requirements: ["Android smartphone", "Stable internet connection", "Printed QR displayed at counter"],
    faqs: [
      { q: "What is RuPay credit card on UPI?", a: "Customers can link their RuPay credit card to UPI apps and pay by scanning a merchant QR — just like a normal UPI payment." },
      { q: "Do I need a card machine?", a: "Not for RuPay on UPI — a merchant QR is enough." },
      { q: "Are there any rules to follow?", a: "Yes. Transactions must be genuine and follow RBI and NPCI guidelines. Misuse can lead to the ID being blocked." },
    ],
  },
];

export const fintechOnboarding = [
  { icon: "📝", title: "Apply", text: "Fill the application with your basic details." },
  { icon: "📂", title: "Submit KYC", text: "Share Aadhaar, PAN, bank and shop details." },
  { icon: "✅", title: "Verification", text: "Our team verifies and processes your application." },
  { icon: "🚀", title: "Go live", text: "Get your ID, app access and training — start earning." },
];

/* =========================================================
   NAV
   ========================================================= */
export const nav = [
  { href: "/", label: "Home" },
  {
    href: "/web-services",
    label: "Web Services",
    mega: true,
    children: webServices.map((s) => ({
      href: `/web-services/${s.slug}`,
      label: s.name,
      icon: s.icon,
      note: s.tag,
      subs: s.offerings.map((o) => ({ href: `/web-services/${s.slug}/${o.slug}`, label: o.title })),
    })),
  },
  {
    href: "/fintech",
    label: "Fintech",
    children: fintech.map((f) => ({ href: `/fintech/${f.slug}`, label: f.name, icon: f.icon, note: f.badge })),
  },
  { href: "/partners", label: "Partner" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
];

/* =========================================================
   PARTNER & COMPANY
   ========================================================= */
/* Partner entry rule — edit here and it updates everywhere */
export const PARTNER_JOIN = {
  minPurchase: "₹10,000",
  rule: "Purchase any one KS TechX product or service worth ₹10,000 or more",
  why: "Use it for your own business — so you know exactly what you're selling to your customers.",
};

export const partner = {
  name: "KS TechX Partner",
  short: "Sell any KS TechX service and earn commission on every sale.",
  icon: "🤝",
  accent: "#f4b53f",
};

export const partnerBenefits = [
  { icon: "💰", title: "Commission on every sale", text: "Every sale you bring in earns you commission — websites, software, apps or fintech IDs." },
  { icon: "🧰", title: "Many services to sell", text: "One partnership, many products. Offer your customers exactly what they need." },
  { icon: "📍", title: "Expand your reach", text: "Offer KS TechX services to shops and businesses across your town and district." },
  { icon: "📈", title: "Transparent tracking", text: "Know what you've sold and what you've earned — clear and on time." },
  { icon: "🎓", title: "Training & support", text: "We help you pitch, close and deliver. You're never on your own." },
  { icon: "🎟️", title: "Partner entry — from ₹10,000", text: "Purchase any one KS TechX product worth ₹10,000 or more, use it in your own business, and start earning." },
];

export const howClient = [
  "Tell us what you need — a website, software, app or fintech ID",
  "Get a clear plan and quote from our team",
  "We set up, design and build it for you",
  "Go live — with ongoing support from KS TechX",
];

export const howPartner = [
  "Purchase any one KS TechX product — minimum ₹10,000",
  "Complete KYC and get your partner ID & training",
  "Refer or sell any KS TechX service to customers",
  "Earn commission on every sale you make",
];

export const process = [
  { icon: "🔍", title: "Discover", text: "We understand your business, goals and customers." },
  { icon: "✏️", title: "Design", text: "Clear plan, clean design, approved by you." },
  { icon: "⚙️", title: "Build", text: "Developed and tested by our in-house team." },
  { icon: "🚀", title: "Launch & support", text: "Go live with training and ongoing support." },
];

export const values = [
  { icon: "🏗️", title: "Built in-house", text: "Every website, app and software is designed and developed by our own team." },
  { icon: "🤝", title: "One partner for everything", text: "Websites, software, apps and fintech — one company, one point of contact." },
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
  { value: 3, suffix: "", label: "Web services" },
  { value: 3, suffix: "", label: "Website packages" },
  { value: 4, suffix: "", label: "Fintech IDs" },
  { value: 100, suffix: "%", label: "Built in-house" },
];
