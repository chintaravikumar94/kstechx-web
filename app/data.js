/* ---------------- SHARED SITE DATA ----------------
   Edit this one file to change content across the whole site. */

export const CONTACT_EMAIL = "bizfree@kstechx.com"; // change to e.g. info@kstechx.com
export const WHATSAPP_NUMBER = ""; // e.g. "919876543210" — shows a WhatsApp button when set

/* =========================================================
   WEB SERVICES
   ========================================================= */
export const webServices = [
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

/* =========================================================
   FINTECH — detailed retailer & merchant IDs
   ========================================================= */
export const fintechIntro = {
  name: "Fintech Solutions",
  icon: "💳",
  accent: "#e63946",
  tagline: "Turn your shop into a banking & cash service point",
  summary:
    "Get the retailer and merchant IDs you need to offer Aadhaar banking, UPI and card-based services at your counter. Serve more customers, earn on every transaction, and build daily footfall into your store.",
};

export const fintech = [
  {
    slug: "aeps-retailer-id",
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
    children: webServices.map((s) => ({ href: `/web-services/${s.slug}`, label: s.name, icon: s.icon, note: s.tag })),
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
  { value: 3, suffix: "", label: "Web services" },
  { value: 3, suffix: "", label: "Website packages" },
  { value: 100, suffix: "%", label: "Built in-house" },
];
