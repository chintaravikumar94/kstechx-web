"use client";

/* =========================================================
   MobileMenu — liquid-glass slide-in drawer for phones/tablets
   • Quick actions: Get a quote · WhatsApp · Call
   • Accordions for Web Services (with packages) & Fintech IDs
   • Staggered item animation, backdrop blur, scroll lock
   ========================================================= */

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { webServices, fintech, CONTACT } from "../data";

const LINKS = [
  { href: "/", label: "Home", icon: "🏠" },
  { key: "web", href: "/web-services", label: "Web Services", icon: "🌐" },
  { key: "fin", href: "/fintech", label: "Fintech IDs", icon: "💳" },
  { href: "/partners", label: "KS TechX Partner", icon: "🤝" },
  { href: "/how-it-works", label: "How it works", icon: "🧭" },
  { href: "/about", label: "About us", icon: "🏢" },
  { href: "/contact", label: "Contact", icon: "✉️" },
];

export default function MobileMenu({ open, onClose, pathname }) {
  const [section, setSection] = useState(null);

  // open the accordion for the section you're currently in
  useEffect(() => {
    if (!open) return;
    if (pathname.startsWith("/web-services")) setSection("web");
    else if (pathname.startsWith("/fintech")) setSection("fin");
    else setSection(null);
  }, [open, pathname]);

  // lock page scroll + Escape to close
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));
  const toggle = (k) => setSection((s) => (s === k ? null : k));

  return (
    <div className={`mm ${open ? "mm-open" : ""}`} aria-hidden={!open}>
      <div className="mm-backdrop" onClick={onClose} />
      <aside className="mm-panel" role="dialog" aria-label="Site menu" aria-modal="true">
        <div className="mm-head">
          <Link className="brand" href="/" onClick={onClose}>
            <Logo />
            <span className="brand-text">
              TechX<span className="brand-dot">.</span>
            </span>
          </Link>
          <button className="mm-close" aria-label="Close menu" onClick={onClose}>
            <span />
          </button>
        </div>

        <div className="mm-actions mm-item" style={{ "--i": 0 }}>
          <Link href="/contact" className="mm-act mm-act-primary" onClick={onClose}>
            <span>📝</span>Get a quote
          </Link>
          {CONTACT.whatsapp && (
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hello KS TechX, I'd like to know more about your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mm-act mm-act-wa"
            >
              <span>💬</span>WhatsApp
            </a>
          )}
          <a href={CONTACT.phoneHref} className="mm-act mm-act-call">
            <span>📞</span>Call
          </a>
        </div>

        <nav className="mm-nav">
          {LINKS.map((l, i) =>
            l.key ? (
              <div key={l.href} className={`mm-group mm-item ${section === l.key ? "is-open" : ""}`} style={{ "--i": i + 1 }}>
                <button
                  className={`mm-link ${isActive(l.href) ? "active" : ""}`}
                  aria-expanded={section === l.key}
                  onClick={() => toggle(l.key)}
                >
                  <span className="mm-ico">{l.icon}</span>
                  <span className="mm-label">{l.label}</span>
                  <span className="mm-chev">⌄</span>
                </button>
                <div className="mm-sub">
                  <div className="mm-sub-inner">
                    {l.key === "web"
                      ? webServices.map((s) => (
                          <div key={s.slug} className="mm-svc">
                            <Link
                              href={`/web-services/${s.slug}`}
                              className={`mm-svc-head ${pathname === `/web-services/${s.slug}` ? "on" : ""}`}
                              onClick={onClose}
                            >
                              <span>{s.icon}</span>
                              {s.name}
                            </Link>
                            {s.offerings.length > 1 && (
                              <div className="mm-pills">
                                {s.offerings.map((o) => (
                                  <Link
                                    key={o.slug}
                                    href={`/web-services/${s.slug}/${o.slug}`}
                                    className={`mm-pill ${pathname === `/web-services/${s.slug}/${o.slug}` ? "on" : ""}`}
                                    onClick={onClose}
                                  >
                                    {o.title.replace(/ \(.*\)/, "")}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))
                      : fintech.map((f) => (
                          <Link
                            key={f.slug}
                            href={`/fintech/${f.slug}`}
                            className={`mm-svc-head ${pathname === `/fintech/${f.slug}` ? "on" : ""}`}
                            onClick={onClose}
                          >
                            <span>{f.icon}</span>
                            {f.name}
                          </Link>
                        ))}
                    <Link href={l.href} className="mm-all" onClick={onClose}>
                      View all {l.label} →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`mm-link mm-item ${isActive(l.href) ? "active" : ""}`}
                style={{ "--i": i + 1 }}
                onClick={onClose}
              >
                <span className="mm-ico">{l.icon}</span>
                <span className="mm-label">{l.label}</span>
                <span className="mm-go">›</span>
              </Link>
            )
          )}
        </nav>

        <div className="mm-foot mm-item" style={{ "--i": LINKS.length + 1 }}>
          <a href={CONTACT.phoneHref}>📞 {CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`}>✉️ {CONTACT.email}</a>
          <span>Kumara Swamy Technologies · Made in India 🇮🇳</span>
        </div>
      </aside>
    </div>
  );
}
