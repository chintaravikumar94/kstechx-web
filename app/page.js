"use client";

import { useEffect, useRef, useState } from "react";

const featured = {
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
    accent: "#6d5efc",
  },
  {
    name: "LocalKart",
    tag: "Marketplace",
    description:
      "Local-first online marketplace connecting nearby stores with customers.",
    url: "https://localkart.kstechx.com",
    accent: "#22b8a6",
  },
  {
    name: "Mera Partners",
    tag: "Network",
    description:
      "Partner and downline management platform for growing your network.",
    url: "https://partners.kstechx.com",
    accent: "#f2a33c",
  },
];

const businessTypes = [
  "🍽️ Restaurants",
  "🏥 Clinics",
  "💇 Salons",
  "🛍️ Retail",
  "🍰 Bakeries",
  "🧾 Professionals",
  "☕ Cafés",
  "🌸 Boutiques",
];

function Stat({ value, suffix, label }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            const dur = 1300;
            const start = performance.now();
            const tick = (t) => {
              const p = Math.min((t - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div className="stat" ref={ref}>
      <strong>
        {n}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <main>
      {/* NAV */}
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="container nav-inner">
          <a className="brand" href="#top" onClick={close}>
            <span className="brand-mark">KS</span>
            <span className="brand-text">
              TechX<span className="brand-dot">.</span>
            </span>
          </a>
          <nav className={`nav-links ${open ? "open" : ""}`}>
            <a href="#bizfree" onClick={close}>
              Bizfree
            </a>
            <a href="#products" onClick={close}>
              Products
            </a>
            <a href="#about" onClick={close}>
              About
            </a>
            <a href="https://biz.kstechx.com" className="btn btn-primary btn-sm">
              Get Started
            </a>
          </nav>
          <button
            className="nav-toggle"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? "x" : ""} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="hero">
        <div className="aurora" aria-hidden="true">
          <span className="blob b1" />
          <span className="blob b2" />
          <span className="blob b3" />
        </div>
        <div className="grid-overlay" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="pill reveal">
              <span className="ping" /> Kumara Swamy Technologies
            </span>
            <h1 className="reveal" data-d="1">
              Software that helps
              <br />
              India&apos;s businesses{" "}
              <span className="grad-anim">sell &amp; grow.</span>
            </h1>
            <p className="lead reveal" data-d="2">
              We build products that turn everyday chat into commerce — led by{" "}
              <strong>Bizfree</strong>, our WhatsApp &amp; web platform with
              payments and delivery built in.
            </p>
            <div className="hero-cta reveal" data-d="3">
              <a href="https://biz.kstechx.com" className="btn btn-primary btn-lg">
                Explore Bizfree →
              </a>
              <a href="#products" className="btn btn-ghost btn-lg">
                All Products
              </a>
            </div>
            <div className="trust reveal" data-d="4">
              <span>✓ Live in minutes</span>
              <span>✓ GST-ready</span>
              <span>✓ Made in India 🇮🇳</span>
            </div>
          </div>

          {/* Live order mockup */}
          <div className="hero-visual reveal" data-d="3">
            <div className="phone">
              <div className="phone-top">
                <span className="wa-dot" /> Ravi Restaurant
                <span className="wa-online">online</span>
              </div>
              <div className="chat">
                <div className="msg in-msg">Hi! 2 Chicken Biryani please 🍗</div>
                <div className="msg out-msg">
                  Added ✅ Total ₹400. Pay by UPI?
                </div>
                <div className="msg in-msg">Yes, paying now</div>
                <div className="msg out-msg pay">💳 Payment received · ₹400 · UPI</div>
                <div className="msg out-msg ship">
                  🚚 Out for delivery · AWB #KSC…
                </div>
              </div>
            </div>
            <div className="float-card fc1">💳 Payment received</div>
            <div className="float-card fc2">🚚 Out for delivery</div>
          </div>
        </div>

        {/* marquee */}
        <div className="marquee reveal">
          <div className="marquee-track">
            {[...businessTypes, ...businessTypes].map((b, i) => (
              <span key={i} className="marquee-item">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED — BIZFREE */}
      <section id="bizfree" className="featured">
        <div className="container">
          <div className="featured-card reveal">
            <div className="featured-head">
              <span className="featured-badge">🟢 Flagship product</span>
              <h2 className="featured-name">Bizfree</h2>
              <p className="featured-tagline">
                Sell on WhatsApp &amp; the web — with delivery built in
              </p>
              <p className="featured-desc">
                Take orders, bookings and appointments through WhatsApp and your
                own web storefront. Collect payments online and ship anywhere in
                India with 15+ courier partners — all from one dashboard.
              </p>
              <div className="featured-cta">
                <a href="https://biz.kstechx.com" className="btn btn-wa btn-lg">
                  Visit Bizfree →
                </a>
                <a
                  href="https://biz.kstechx.com/pricing"
                  className="btn btn-ghost btn-lg"
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
          <h2 className="section-title reveal">More from KS TechX</h2>
          <p className="section-sub reveal">
            Every product runs on its own space under kstechx.com.
          </p>
          <div className="grid">
            {projects.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                className="card reveal"
                data-d={String(i + 1)}
                style={{ "--accent": p.accent }}
              >
                <div className="card-tag">{p.tag}</div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <span className="card-link">Visit site →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-band">
        <div className="container stats reveal">
          <Stat value={4} suffix="+" label="Products shipped" />
          <Stat value={15} suffix="+" label="Courier partners" />
          <Stat value={3} suffix="" label="AI languages" />
          <Stat value={24} suffix="/7" label="Always selling" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-alt">
        <div className="container about reveal">
          <h2 className="section-title">About KS TechX</h2>
          <p>
            Kumara Swamy Technologies designs and ships digital products that
            make everyday business simpler — from WhatsApp commerce and digital
            identity to local marketplaces. Every product is built in-house and
            deployed on a modern, reliable stack.
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container cta-inner reveal">
          <h2>Ready to sell on WhatsApp &amp; the web?</h2>
          <p>Set up your store, payments and delivery in minutes with Bizfree.</p>
          <a href="https://biz.kstechx.com" className="btn btn-wa btn-lg">
            Get started →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div>
            <a className="brand" href="#top">
              <span className="brand-mark">KS</span>
              <span className="brand-text">
                TechX<span className="brand-dot">.</span>
              </span>
            </a>
            <p className="footer-note">
              Kumara Swamy Technologies · GSTIN 37AYPPC2454H2ZB · Andhra Pradesh
              🇮🇳
            </p>
          </div>
          <div className="footer-links">
            <a href="https://biz.kstechx.com">Bizfree</a>
            <a href="https://mdc.kstechx.com">Mera Digi Card</a>
            <a href="https://localkart.kstechx.com">LocalKart</a>
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
