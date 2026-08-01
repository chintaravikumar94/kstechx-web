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
  {
    name: "Coming Soon",
    tag: "New",
    description:
      "The next KS TechX product is on the way. Watch this space.",
    url: "#",
    live: false,
    accent: "#8a94a6",
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
          <p className="eyebrow">Building Digital Products</p>
          <h1>
            One platform.
            <br />
            <span className="grad">Many possibilities.</span>
          </h1>
          <p className="lead">
            KS TechX is the home of Mera Digi Card, LocalKart, Mera Partners and
            more. Explore everything we&apos;re building below.
          </p>
          <div className="hero-cta">
            <a href="#products" className="btn btn-primary">
              Explore Products
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="section">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
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
            KS TechX designs and ships digital products that make everyday life
            simpler — from digital identity to local commerce and partner
            networks. Every product is built in-house and deployed with a modern,
            reliable stack.
          </p>
          <div className="stats">
            <div className="stat">
              <strong>3+</strong>
              <span>Live products</span>
            </div>
            <div className="stat">
              <strong>100%</strong>
              <span>In-house built</span>
            </div>
            <div className="stat">
              <strong>24/7</strong>
              <span>Online</span>
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
            <p className="footer-note">Building Digital Products.</p>
          </div>
          <div className="footer-links">
            <a href="mailto:chintaravikumar1994@gmail.com">Email us</a>
            <a href="https://mdc.kstechx.com" target="_blank" rel="noopener noreferrer">
              Mera Digi Card
            </a>
            <a href="https://localkart.kstechx.com" target="_blank" rel="noopener noreferrer">
              LocalKart
            </a>
          </div>
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} KS TechX. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
