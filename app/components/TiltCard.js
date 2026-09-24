"use client";

import { useRef } from "react";
import Link from "next/link";

/* Generic 3D-tilt card. item = { href, icon, name, tag, text, accent, cta } */
export default function TiltCard({ item }) {
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
      href={item.href}
      className="card tilt reveal"
      style={{ "--accent": item.accent }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {item.icon && <span className="card-icon">{item.icon}</span>}
      {item.tag && <div className="card-tag">{item.tag}</div>}
      <h3>{item.name}</h3>
      <p>{item.text}</p>
      <span className="card-link">{item.cta || "Learn more →"}</span>
    </Link>
  );
}
