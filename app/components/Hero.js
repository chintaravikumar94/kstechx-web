"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Illustration from "./Illustration";
import { webServices, fintechIntro, partner, audiences } from "../data";

export default function Hero() {
  const canvasRef = useRef(null);

  // soft blue particle network behind the hero
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 1100px), (pointer: coarse)").matches) return;
    const ctx = canvas.getContext("2d");
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0,
      h = 0,
      raf;
    const pts = [];
    const N = 40;
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
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
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
          const dd = Math.hypot(a.x - b.x, a.y - b.y);
          if (dd < 130) {
            ctx.globalAlpha = (1 - dd / 130) * 0.35;
            ctx.strokeStyle = "#1f5bd8";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 0.55;
      for (const p of pts) {
        ctx.fillStyle = "#1f5bd8";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
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

  const chips = [
    ...webServices.map((s) => ({ href: `/web-services/${s.slug}`, label: s.name, icon: s.icon })),
    { href: "/fintech", label: fintechIntro.name, icon: fintechIntro.icon },
    { href: "/partners", label: partner.name, icon: partner.icon },
  ];

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="hero-bg-dots" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill reveal">
            <span className="ping" /> Kumara Swamy Technologies · Made in India 🇮🇳
          </span>
          <h1 className="reveal" data-d="1">
            Digital &amp; fintech solutions <span className="grad-anim">built for Bharat.</span>
          </h1>
          <p className="lead reveal" data-d="2">
            KS TechX helps businesses grow with websites, custom software and
            Android apps, helps retailers earn with fintech IDs — and our
            partners earn commission on every sale.
          </p>
          <div className="hero-cta reveal" data-d="3">
            <Link href="/web-services" className="btn btn-primary btn-lg">
              Explore Web Services
            </Link>
            <Link href="/fintech" className="btn btn-ghost btn-lg">
              Apply for a Fintech ID
            </Link>
          </div>
          <div className="trust-row reveal" data-d="4">
            <span>🔐 KYC-compliant onboarding</span>
            <span>🏗️ Built in-house</span>
            <span>🤝 Dedicated support</span>
          </div>
        </div>
        <div className="hero-art reveal" data-d="2">
          <Illustration name="hero" />
        </div>
      </div>

      <div className="container">
        <div className="hero-chips reveal">
          {chips.map((c) => (
            <Link key={c.href} href={c.href} className="chip">
              <span>{c.icon}</span>
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="marquee reveal">
        <div className="marquee-track">
          {[...audiences, ...audiences].map((b, i) => (
            <span key={i} className="marquee-item">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
