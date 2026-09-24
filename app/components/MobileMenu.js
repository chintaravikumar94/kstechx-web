"use client";

/* =========================================================
   MobileMenu — compact liquid-glass popover (phones/tablets)
   • Pops out of the top-right corner, sized to its content
   • Slim quick actions · grouped list with hairline dividers
   • Compact accordions for Web Services & Fintech IDs
   ========================================================= */

import { useEffect, useState } from "react";
import Link from "next/link";
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

  useEffect(() => {
    if (!open) return;
    if (pathname.startsWith("/web-services")) setSection("web");
    else if (pathname.startsWith("/fintech")) setSection("fin");
    else setSection(null);
  }, [open, pathname]);

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
      <div className="mm-pop" role="dialog" aria-label="Site menu" aria-modal="true">
        <div className="mm-top">
          <span className="mm-title">Menu</span>
          <button className="mm-x" aria-label="Close menu" onClick={onClose}>
            <span />
          </button>
        </div>

        <div className="mm-quick">
          <Link href="/contact" className="mm-q mm-q-red" onClick={onClose}>
            <span>📝</span>Quote
          </Link>
          {CONTACT.whatsapp && (
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hello KS TechX, I'd like to know more about your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mm-q mm-q-wa"
            >
              <span>💬</span>WhatsApp
            </a>
          )}
          <a href={CONTACT.phoneHref} className="mm-q">
            <span>📞</span>Call
          </a>
        </div>

        <nav className="mm-list">
          {LINKS.map((l) =>
            l.key ? (
              <div key={l.href} className={`mm-grp ${section === l.key ? "is-open" : ""}`}>
                <button
                  className={`mm-row ${isActive(l.href) ? "on" : ""}`}
                  aria-expanded={section === l.key}
                  onClick={() => toggle(l.key)}
                >
                  <span className="mm-i">{l.icon}</span>
                  <span className="mm-t">{l.label}</span>
                  <span className="mm-chev" aria-hidden="true" />
                </button>
                <div className="mm-sub">
                  <div className="mm-sub-in">
                    {l.key === "web"
                      ? webServices.map((s) => (
                          <div key={s.slug}>
                            <Link
                              href={`/web-services/${s.slug}`}
                              className={`mm-srow ${pathname === `/web-services/${s.slug}` ? "on" : ""}`}
                              onClick={onClose}
                            >
                              <span>{s.icon}</span>
                              {s.name.replace("Custom ", "")}
                            </Link>
                            {s.offerings.length > 1 && (
                              <div className="mm-chips">
                                {s.offerings.map((o) => (
                                  <Link
                                    key={o.slug}
                                    href={`/web-services/${s.slug}/${o.slug}`}
                                    className={`mm-chip ${pathname === `/web-services/${s.slug}/${o.slug}` ? "on" : ""}`}
                                    onClick={onClose}
                                  >
                                    {o.title.replace(/ Website.*$/, "").replace(/ \(.*\)/, "")}
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
                            className={`mm-srow ${pathname === `/fintech/${f.slug}` ? "on" : ""}`}
                            onClick={onClose}
                          >
                            <span>{f.icon}</span>
                            {f.name.replace(" Merchant ID", "").replace(" Retailer ID", " Retailer")}
                          </Link>
                        ))}
                    <Link href={l.href} className="mm-all" onClick={onClose}>
                      View all →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href} className={`mm-row ${isActive(l.href) ? "on" : ""}`} onClick={onClose}>
                <span className="mm-i">{l.icon}</span>
                <span className="mm-t">{l.label}</span>
                <span className="mm-arrow" aria-hidden="true" />
              </Link>
            )
          )}
        </nav>

        <div className="mm-foot">
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <span>·</span>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
      </div>
    </div>
  );
}
