const featured = {
  name: "Bizfree",
  tagline: "Sell on WhatsApp & the web — with delivery built in",
  description:
    "Take orders, bookings and appointments through WhatsApp and your own web storefront. Collect payments online and ship anywhere in India with 15+ courier partners — all from one simple dashboard.",
  url: "https://biz.kstechx.com",
  highlights: [
    { icon: "💬", label: "WhatsApp AI ordering", note: "English · Hindi · Telugu" },
    { icon: "🌐", label: "Web storefront", note: "Your own store link" },
    { icon: "💳", label: "Online payments", note: "UPI · cards · netbanking" },
    { icon: "🚚", label: "Doorstep delivery", note: "15+ courier partners" },
    { icon: "📅", label: "Bookings & appointments", note: "Slots & calendar" },
    { icon: "🧾", label: "GST-ready invoices", note: "Auto tax invoice" },
  ],
};

const projects = [
  {
    name: "Mera Digi Card",
    tag: "MDC",
    description:
      "Your smart digital business card — share your profile, links and contact in one tap.",
    url: "https://mdc.kstechx.com",
    live: true,
    accent: "#6d5efc",
  },
  {
    name: "LocalKart",
    tag: "Shopping",
    description:
      "Local-first online marketplace connecting nearby stores with customers.",
    url: "https://localkart.kstechx.com",
    live: true,
    accent: "#22b8a6",
  },
  {
    name: "Mera Partners",
    tag: "Network",
    description:
      "Partner and downline management platform for growing your network.",
    url: "https://partners.kstechx.com",
    live: true,
    accent: "#f2a33c",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="/">
            <span className="brand-mark">KS</span>
            <span className="brand-text">TechX</span>
          </a>
          <nav className="nav-links">
            <a href="#bizfree">Bizfree</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact" className="btn btn-ghost">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Kumara Swamy Technologies</p>
          <h1>
            Digital products
            <br />
            <span className="grad">for Indian businesses.</span>
          </h1>
          <p className="lead">
            We build software that helps local businesses sell, grow and get
            paid — led by <strong>Bizfree</strong>, our WhatsApp &amp; web
            commerce platform.
          </p>
          <div className="hero-cta">
            <a href="#bizfree" className="btn btn-primary">
              Explore Bizfree
            </a>
            <a href="#products" className="btn btn-ghost">
              All Products
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED — BIZFREE */}
      <section id="bizfree" className="featured">
        <div className="container">
          <div className="featured-card">
            <div className="featured-head">
              <span className="featured-badge">🟢 Flagship product</span>
              <h2 className="featured-name">{featured.name}</h2>
              <p className="featured-tagline">{featured.tagline}</p>
              <p className="featured-desc">{featured.description}</p>
              <div className="featured-cta">
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa"
                >
                  Visit Bizfree →
                </a>
                <a
                  href="https://biz.kstechx.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  See pricing
                </a>
              </div>
            </div>
            <div className="featured-grid">
              {featured.highlights.map((h) => (
                <div key={h.label} className="feat-pill">
                  <span className="feat-icon">{h.icon}</span>
                  <div>
                    <strong>{h.label}</strong>
                    <span>{h.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="section">
        <div className="container">
          <h2 className="section-title">More from KS TechX</h2>
          <p className="section-sub">
            Each product runs on its own dedicated space under kstechx.com.
          </p>
          <div className="grid">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                className={`card ${p.live ? "" : "card-soon"}`}
                target={p.live ? "_blank" : undefined}
                rel={p.live ? "noopener noreferrer" : undefined}
              >
                <div
                  className="card-tag"
                  style={{ background: p.accent + "22", color: p.accent }}
                >
                  {p.tag}
                </div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <span className="card-link">
                  {p.live ? "Visit site →" : "Coming soon"}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-alt">
        <div className="container about">
          <h2 className="section-title">About KS TechX</h2>
          <p>
            Kumara Swamy Technologies designs and ships digital products that
            make everyday business simpler — from WhatsApp commerce and digital
            identity to local marketplaces. Every product is built in-house and
            deployed on a modern, reliable stack. Made in India 🇮🇳.
          </p>
          <div className="stats">
            <div className="stat">
              <strong>4+</strong>
              <span>Products</span>
            </div>
            <div className="stat">
              <strong>15+</strong>
              <span>Courier partners</span>
            </div>
            <div className="stat">
              <strong>3</strong>
              <span>Languages (AI)</span>
            </div>
            <div className="stat">
              <strong>24/7</strong>
              <span>Always selling</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div>
            <a className="brand" href="/">
              <span className="brand-mark">KS</span>
              <span className="brand-text">TechX</span>
            </a>
            <p className="footer-note">
              Kumara Swamy Technologies · GSTIN 37AYPPC2454H2ZB · Andhra Pradesh
              🇮🇳
            </p>
          </div>
          <div className="footer-links">
            <a href="https://biz.kstechx.com" target="_blank" rel="noopener noreferrer">
              Bizfree
            </a>
            <a href="https://mdc.kstechx.com" target="_blank" rel="noopener noreferrer">
              Mera Digi Card
            </a>
            <a href="https://localkart.kstechx.com" target="_blank" rel="noopener noreferrer">
              LocalKart
            </a>
            <a href="mailto:bizfree@kstechx.com">Email us</a>
          </div>
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} Kumara Swamy Technologies. All rights
          reserved.
        </div>
      </footer>
    </main>
  );
}
