"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { nav } from "../data";

export default function Chrome({ children }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const spotRef = useRef(null);
  const pathname = usePathname();

  // scroll state + progress
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

  // cursor spotlight
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

      {children}

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
              Kumara Swamy Technologies · GSTIN 37AYPPC2454H2ZB · Andhra Pradesh
              🇮🇳
            </p>
          </div>
          <div className="footer-cols">
            <div>
              <h4>Products</h4>
              <Link href="/products/bizfree">Bizfree</Link>
              <Link href="/products/mera-digi-card">Mera Digi Card</Link>
              <Link href="/products/localkart">LocalKart</Link>
              <Link href="/products/mera-partners">Mera Partners</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link href="/how-it-works">How it works</Link>
              <Link href="/partners">Partner program</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} Kumara Swamy Technologies. All rights
          reserved.
        </div>
      </footer>
    </>
  );
}
