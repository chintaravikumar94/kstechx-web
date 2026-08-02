"use client";

import { useEffect, useRef, useState } from "react";

/* ---------------- DATA ---------------- */
const offers = [
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

const products = [
  {
    name: "Bizfree",
    tag: "Flagship · Commerce",
    description:
      "Sell on WhatsApp & the web with AI ordering, online payments and 15+ courier delivery — one dashboard.",
    url: "https://biz.kstechx.com",
    accent: "#25d366",
  },
  {
    name: "Mera Digi Card",
    tag: "Digital Identity",
    description:
      "A smart digital business card — share your profile, links and contact in a single tap.",
    url: "https://mdc.kstechx.com",
    accent: "#e63946",
  },
  {
    name: "LocalKart",
    tag: "Marketplace",
    description:
      "Local-first online marketplace connecting nearby stores with the customers around them.",
    url: "https://localkart.kstechx.com",
    accent: "#ff7a3c",
  },
  {
    name: "Mera Partners",
    tag: "Partner Network",
    description:
      "The platform that powers our partner & downline network — onboard businesses and track earnings.",
    url: "https://partners.kstechx.com",
    accent: "#f4b53f",
  },
];

const bizHighlights = [
  { icon: "💬", label: "WhatsApp AI ordering", note: "English · Hindi · Telugu" },
  { icon: "🌐", label: "Web storefront", note: "Your own store link" },
  { icon: "💳", label: "Online payments", note: "UPI · cards · netbanking" },
  { icon: "🚚", label: "Doorstep delivery", note: "15+ courier partners" },
  { icon: "📅", label: "Bookings & slots", note: "Appointments & calendar" },
  { icon: "🧾", label: "GST-ready invoices", note: "Automatic tax invoice" },
];

const howBusiness = [
  "Choose a plan — or let us set you up",
  "Go live on WhatsApp & your web store",
  "Get paid online — UPI, cards or COD",
  "Deliver across India and grow",
];

const howPartner = [
  "Join the partner network — free to start",
  "Onboard local businesses around you",
  "Earn commission on every plan they take",
  "Scale your downline and your income",
];

const integrations = [
  "💳 Cashfree Payments",
  "🚚 15+ Courier Partners",
  "💬 WhatsApp · Meta",
  "☁️ Cloud Hosting",
  "🔐 Secure UPI Gateway",
  "🧾 GST Invoicing",
];

const testimonials = [
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

/* ---------------- LOGO ---------------- */
function Logo() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" width="20" height="20">
        <path
          d="M7 4h4v9l8-9h5l-9 10 9 14h-5l-6.5-10L11 21v7H7z"
          fill="#fff"
        />
      </svg>
    </span>
  );
}

/* ---------------- ANIMATED STAT ---------------- */
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

/* ---------------- TILT CARD ---------------- */
function TiltCard({ p }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${(-py * 8).toFixed(
      2
    )}deg) rotateY(${(px * 10).toFixed(2)}deg) translateY(-6px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <a
      ref={ref}
      href={p.url}
      className="card tilt reveal"
      style={{ "--accent": p.accent }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      <div className="card-tag">{p.tag}</div>
      <h3>{p.name}</h3>
      <p>{p.description}</p>
      <span className="card-link">Visit site →</span>
    </a>
  );
}

/* ---------------- PAGE ---------------- */
export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef(null);
  const spotRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const h = document.body.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
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
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e) => {
      if (spotRef.current)
        spotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = canvas.getContext("2d");
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0,
      h = 0,
      raf;
    const pts = [];
    const N = 46;
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    const init = () => {
      pts.length = 0;
      for (let i = 0; i < N; i++)
        pts.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
        });
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i],
            b = pts[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 128) {
            ctx.globalAlpha = (1 - d / 128) * 0.5;
            ctx.strokeStyle = "#a8524f";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 0.9;
      for (const p of pts) {
        ctx.fillStyle = "#d78a86";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    resize();
    init();
    draw();
    const onR = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onR);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onR);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <main>
      <div className="scroll-bar" style={{ width: progress + "%" }} />
      <div className="spotlight" ref={spotRef} aria-hidden="true" />

      {/* NAV */}
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="container nav-inner">
          <a className="brand" href="#top" onClick={close}>
            <Logo />
            <span className="brand-text">
              TechX<span className="brand-dot">.</span>
            </span>
          </a>
          <nav className={`nav-links ${open ? "open" : ""}`}>
            <a href="#offer" onClick={close}>
              What we do
            </a>
            <a href="#products" onClick={close}>
              Products
            </a>
            <a href="#how" onClick={close}>
              How it works
            </a>
            <a href="#partner" onClick={close}>
              Earn
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
        <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
        <div className="aurora" aria-hidden="true">
          <span className="blob b1" />
          <span className="blob b2" />
          <span className="blob b3" />
        </div>
        <div className="grid-overlay" aria-hidden="true" />
        <div className="container hero-center">
          <span className="pill reveal">
            <span className="ping" /> Kumara Swamy Technologies · Made in India 🇮🇳
          </span>
          <h1 className="reveal" data-d="1">
            We get Indian businesses
            <br />
            online — <span className="grad-anim">and growing.</span>
          </h1>
          <p className="lead center reveal" data-d="2">
            KS TechX is a complete digital growth company. We build the
            software, set your business up end-to-end, and back it with a partner
            network — so you can sell, get paid and deliver from day one.
          </p>
          <div className="hero-cta center reveal" data-d="3">
            <a href="https://biz.kstechx.com" className="btn btn-primary btn-lg magnetic">
              Start your business
            </a>
            <a href="#partner" className="btn btn-ghost btn-lg">
              Become a partner
            </a>
          </div>
          <div className="hero-chips reveal" data-d="4">
            {products.map((p) => (
              <a
                key={p.name}
                href={p.url}
                className="chip"
                style={{ "--accent": p.accent }}
              >
                <span className="chip-dot" />
                {p.name}
              </a>
            ))}
          </div>
        </div>
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

      {/* WHAT WE DO — 4 pillars */}
      <section id="offer" className="section">
        <div className="container">
          <span className="kicker reveal">What we do</span>
          <h2 className="section-title reveal">One company · four ways we grow you</h2>
          <p className="section-sub reveal">
            Whether you want the tools, the whole thing done for you, or a way to
            earn — KS TechX has a path for you.
          </p>
          <div className="offer-grid">
            {offers.map((o, i) => (
              <div
                key={o.title}
                className="offer reveal"
                data-d={String((i % 4) + 1)}
              >
                <span className="offer-icon">{o.icon}</span>
                <span className="offer-badge">{o.badge}</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Our software</span>
          <h2 className="section-title reveal">The products businesses run on</h2>
          <p className="section-sub reveal">
            Each product is built in-house and runs on its own space under
            kstechx.com.
          </p>
          <div className="grid">
            {products.map((p) => (
              <TiltCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* BIZFREE DEEP DIVE */}
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
                <a href="https://biz.kstechx.com" className="btn btn-wa btn-lg magnetic">
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
              {bizHighlights.map((h) => (
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

      {/* HOW IT WORKS */}
      <section id="how" className="section">
        <div className="container">
          <span className="kicker reveal">How it works</span>
          <h2 className="section-title reveal">Two simple paths</h2>
          <p className="section-sub reveal">
            Come as a business that wants to grow — or as a partner who wants to
            earn.
          </p>
          <div className="how-grid">
            <div className="how-col reveal">
              <div className="how-head">
                <span className="how-badge biz">🏪 For business owners</span>
                <h3>Get online &amp; start selling</h3>
              </div>
              <ol className="steps">
                {howBusiness.map((s, i) => (
                  <li key={i}>
                    <span className="step-n">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <a href="https://biz.kstechx.com" className="btn btn-primary">
                Start your business →
              </a>
            </div>
            <div className="how-col reveal" data-d="2">
              <div className="how-head">
                <span className="how-badge earn">🤝 For partners</span>
                <h3>Onboard businesses &amp; earn</h3>
              </div>
              <ol className="steps">
                {howPartner.map((s, i) => (
                  <li key={i}>
                    <span className="step-n">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <a href="https://partners.kstechx.com" className="btn btn-ghost">
                Become a partner →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER / EARN BAND */}
      <section id="partner" className="earn-band">
        <div className="container earn-inner reveal">
          <span className="earn-kicker">Partner Program</span>
          <h2>Earn by growing businesses around you</h2>
          <p>
            Join the KS TechX partner network, bring local shops online, and earn
            recurring commission on every plan — build your own downline income.
          </p>
          <a href="https://partners.kstechx.com" className="btn btn-primary btn-lg magnetic">
            Join as a partner →
          </a>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Powered by</span>
          <h2 className="section-title reveal">Best-in-class technology, built in</h2>
          <p className="section-sub reveal">
            Payments, delivery and messaging you can trust — integrated so your
            business works out of the box.
          </p>
          <div className="partner-marquee reveal">
            <div className="partner-track">
              {[...integrations, ...integrations].map((p, i) => (
                <span key={i} className="partner-chip">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">Loved by owners</span>
          <h2 className="section-title reveal">Businesses run better with KS TechX</h2>
          <div className="tgrid">
            {testimonials.map((t, i) => (
              <figure key={i} className="tcard reveal" data-d={String(i + 1)}>
                <div className="stars">★★★★★</div>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <span className="tavatar">{t.name.charAt(0)}</span>
                  <span>
                    <strong>{t.name}</strong>
                    <em>{t.role}</em>
                  </span>
                </figcaption>
              </figure>
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
          <span className="kicker">About us</span>
          <h2 className="section-title">Kumara Swamy Technologies</h2>
          <p>
            KS TechX is a digital growth company from Andhra Pradesh, India. We
            build software, set businesses up online, sell digital products, and
            run a partner network — everything a local business needs to sell,
            get paid and grow, in one place. Made in India 🇮🇳.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-band">
        <div className="container cta-inner reveal">
          <h2>Ready to grow your business?</h2>
          <p>Start selling on WhatsApp &amp; the web in minutes with Bizfree.</p>
          <a href="https://biz.kstechx.com" className="btn btn-wa btn-lg magnetic">
            Get started →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <Logo />
              <span className="brand-text">
                TechX<span className="brand-dot">.</span>
              </span>
            </a>
            <p className="footer-note">
              Kumara Swamy Technologies · GSTIN 37AYPPC2454H2ZB · Andhra Pradesh
              🇮🇳
            </p>
          </div>
          <div className="footer-cols">
            <div>
              <h4>Products</h4>
              <a href="https://biz.kstechx.com">Bizfree</a>
              <a href="https://mdc.kstechx.com">Mera Digi Card</a>
              <a href="https://localkart.kstechx.com">LocalKart</a>
              <a href="https://partners.kstechx.com">Mera Partners</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#offer">What we do</a>
              <a href="#how">How it works</a>
              <a href="#partner">Partner program</a>
              <a href="mailto:bizfree@kstechx.com">Contact</a>
            </div>
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
