"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { nav, services, CONTACT_EMAIL, WHATSAPP_NUMBER } from "../data";

export default function Chrome({ children }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
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

  // reveal on scroll — re-run on each route change
  useEffect(() => {
    setOpen(false);
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

  const close = () => setOpen(false);

  return (
    <>
      <div className="scroll-bar" style={{ width: progress + "%" }} />
      <div className="spotlight" ref={spotRef} aria-hidden="true" />

      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="container nav-inner">
          <Link className="brand" href="/" onClick={close}>
            <Logo />
            <span className="brand-text">
              TechX<span className="brand-dot">.</span>
            </span>
          </Link>
          <nav className={`nav-links ${open ? "open" : ""}`}>
            {nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={pathname === item.href ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary btn-sm" onClick={close}>
              Get a quote
            </Link>
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

      {children}

      {WHATSAPP_NUMBER && (
        <a
          className="wa-float"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          💬
        </a>
      )}

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
              Kumara Swamy Technologies — fintech &amp; digital solutions for
              Bharat. Andhra Pradesh, India 🇮🇳
            </p>
            <a className="footer-mail" href={`mailto:${CONTACT_EMAIL}`}>
              ✉️ {CONTACT_EMAIL}
            </a>
          </div>
          <div className="footer-cols">
            <div>
              <h4>Services</h4>
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  {s.name}
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
