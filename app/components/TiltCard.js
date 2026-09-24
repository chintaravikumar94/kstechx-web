"use client";

import { useRef } from "react";
import Link from "next/link";

export default function TiltCard({ p }) {
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
    <Link
      ref={ref}
      href={`/products/${p.slug}`}
      className="card tilt reveal"
      style={{ "--accent": p.accent }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      <div className="card-tag">{p.tag}</div>
      <h3>{p.name}</h3>
      <p>{p.summary}</p>
      <span className="card-link">Learn more →</span>
    </Link>
  );
}
