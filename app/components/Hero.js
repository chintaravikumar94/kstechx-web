"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { products, businessTypes } from "../data";

export default function Hero() {
  const canvasRef = useRef(null);

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

  return (
    <section className="hero">
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
          KS TechX is a complete digital growth company. We build the software,
          set your business up end-to-end, and back it with a partner network —
          so you can sell, get paid and deliver from day one.
        </p>
        <div className="hero-cta center reveal" data-d="3">
          <a href="https://biz.kstechx.com" className="btn btn-primary btn-lg">
            Start your business
          </a>
          <Link href="/partners" className="btn btn-ghost btn-lg">
            Become a partner
          </Link>
        </div>
        <div className="hero-chips reveal" data-d="4">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="chip"
              style={{ "--accent": p.accent }}
            >
              <span className="chip-dot" />
              {p.name}
            </Link>
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
  );
}
