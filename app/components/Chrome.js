"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { nav, webServices, fintech, CONTACT } from "../data";
import WhatsAppAssist from "./WhatsAppAssist";
import BackgroundFX from "./BackgroundFX";

export default function Chrome({ children }) {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(null); // which dropdown is open
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hoverable, setHoverable] = useState(false); // desktop mouse → open dropdowns on hover
  const spotRef = useRef(null);
  const pathname = usePathname();

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
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e) => {
      if (spotRef.current)
        spotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // close menus + reveal on scroll — re-run on each route change
  useEffect(() => {
    setOpen(false);
    setDrop(null);
    window.scrollTo(0, 0);
    const els = document.querySelectorAll(".reveal:not(.in)");
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
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (min-width: 1081px)");
    const set = () => setHoverable(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  // close dropdown on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setDrop(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <div className="scroll-bar" style={{ width: progress + "%" }} />
      <div className="spotlight" ref={spotRef} aria-hidden="true" />
      <BackgroundFX />

      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href={CONTACT.phoneHref}>📞 {CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`}>✉️ {CONTACT.email}</a>
            {CONTACT.hours && <span>🕘 {CONTACT.hours}</span>}
          </div>
          <div className="topbar-right">
            <Link href="/web-services">Web Services</Link>
            <Link href="/fintech">Fintech IDs</Link>
          </div>
        </div>
      </div>

      <header className={`nav ${scrolled || open ? "nav-scrolled" : ""}`}>
        <div className="container nav-inner">
          <Link className="brand" href="/">
            <Logo />
            <span className="brand-text">
              TechX<span className="brand-dot">.</span>
            </span>
          </Link>

          <nav className={`nav-links ${open ? "open" : ""}`}>
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className={`nav-item has-drop ${drop === item.href ? "drop-open" : ""}`}
                  onMouseEnter={() => hoverable && setDrop(item.href)}
                  onMouseLeave={() => hoverable && setDrop(null)}
                >
                  <button
                    className={`nav-drop-btn ${isActive(item.href) ? "active" : ""}`}
                    aria-expanded={drop === item.href}
                    onClick={() => setDrop(drop === item.href ? null : item.href)}
                  >
                    {item.label}
                    <span className="caret">▾</span>
                  </button>
                  <div className="dropdown">
                    {item.mega ? (
                      <div className="dropdown-inner mega">
                        <div className="mega-cols">
                          {item.children.map((c) => (
                            <div key={c.href} className="mega-col">
                              <Link href={c.href} className={`drop-link ${pathname === c.href ? "on" : ""}`}>
                                <span className="drop-icon">{c.icon}</span>
                                <span>
                                  <strong>{c.label}</strong>
                                  <em>{c.note}</em>
                                </span>
                              </Link>
                              <div className="mega-subs">
                                {c.subs.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    className={`mega-sub ${pathname === sub.href ? "on" : ""}`}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <Link href={item.href} className="drop-all">
                          View all {item.label} →
                        </Link>
                      </div>
                    ) : (
                    <div className="dropdown-inner">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className={`drop-link ${pathname === c.href ? "on" : ""}`}
                        >
                          <span className="drop-icon">{c.icon}</span>
                          <span>
                            <strong>{c.label}</strong>
                            <em>{c.note}</em>
                          </span>
                        </Link>
                      ))}
                      <Link href={item.href} className="drop-all">
                        View all {item.label} →
                      </Link>
                    </div>
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item ${isActive(item.href) ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href="/contact" className="btn btn-primary btn-sm nav-cta">
              Get a quote
            </Link>
          </nav>

          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? "x" : ""} />
          </button>
        </div>
      </header>

      {children}

      <WhatsAppAssist />

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <Logo />
              <span className="brand-text">
                TechX<span className="brand-dot">.</span>
              </span>
            </Link>
            <p className="footer-note">
              Kumara Swamy Technologies — digital &amp; fintech solutions for
              Bharat. Andhra Pradesh, India 🇮🇳
            </p>
            <div className="footer-contact">
              <a href={CONTACT.phoneHref}>📞 {CONTACT.phone}</a>
              {CONTACT.whatsapp && (
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp us
                </a>
              )}
              <a href={`mailto:${CONTACT.email}`}>✉️ {CONTACT.email}</a>
            </div>
          </div>
          <div className="footer-cols">
            <div>
              <h4>Web Services</h4>
              {webServices.map((s) =>
                s.offerings.map((o) => (
                  <Link key={o.slug} href={`/web-services/${s.slug}/${o.slug}`}>
                    {o.title.replace(/ \(.*\)/, "")}
                  </Link>
                ))
              )}
            </div>
            <div>
              <h4>Fintech</h4>
              {fintech.map((f) => (
                <Link key={f.slug} href={`/fintech/${f.slug}`}>
                  {f.name}
                </Link>
              ))}
            </div>
            <div>
              <h4>Company</h4>
              <Link href="/partners">KS TechX Partner</Link>
              <Link href="/how-it-works">How it works</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} Kumara Swamy Technologies · GSTIN
          37AYPPC2454H2ZB. All rights reserved.
        </div>
      </footer>
    </>
  );
}
