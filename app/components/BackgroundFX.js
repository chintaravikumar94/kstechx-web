"use client";

/* =========================================================
   BackgroundFX — page-aware animated background graphics
   • Web Services pages → code, browsers, phones, gears
   • Fintech pages      → ₹ coins, QR, cards, fingerprints
   • Other pages        → a mix + growth & launch icons
   • Circuit lines with travelling data pulses
   • Depth parallax on scroll + mouse (disabled for reduced motion)
   ========================================================= */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/* ---------- simple line icons (24×24, stroke = currentColor) ---------- */
const ICONS = {
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  browser: (
    <>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
      <path d="M2.5 8.5h19M6 6.3h.01M8.5 6.3h.01M6 12h8M6 15.5h5" />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3M9.5 6.5h5M9.5 9.5h5M9.5 12.5h3" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" />
    </>
  ),
  cursor: <path d="M5 3l14 7-6 1.8L10.8 18 5 3z" />,
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M3 9h18M9 9v12" />
    </>
  ),
  rupee: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M8.5 7.5h7M8.5 10.5h7M10.5 7.5c3 0 3 5.5 0 5.5H8.5l5.5 4.5" />
    </>
  ),
  qr: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3zM18 18h3v3M14 20h2" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.5h19M6 15h4" />
    </>
  ),
  finger: (
    <path d="M8 20c-1.5-2-2-4-2-7a6 6 0 0 1 12 0M12 21c-1.5-2.5-2-5-2-8a2 2 0 0 1 4 0c0 2.5.5 4.5 1.5 6.5M16.5 19.5c.4-1.3.5-2.6.5-4M5 9.5A8 8 0 0 1 19 9" />
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.8-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.7-7.5-9.5V6L12 3z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  chart: <path d="M4 20h16M6.5 16v-4M11 16V8M15.5 16v-6M20 5l-5 4-4-2.5L5 11" />,
  rocket: (
    <>
      <path d="M14.5 4.5c3-1 5-.9 5-.9s.1 2-.9 5l-5.5 5.5-4.1-4.1 5.5-5.5z" />
      <path d="M9 10l-4-.5-2 2.5 4.5 1M14 15l.5 4-2.5 2-1-4.5M6 17.5l-2 2.5" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2.5" />
    </>
  ),
  cloud: <path d="M7 18.5h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.6 11 3.75 3.75 0 0 0 7 18.5z" />,
  nodes: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <path d="M11 7l-5 9M13 7l5 9M7.2 18h9.6" />
    </>
  ),
};

const THEMES = {
  web: ["code", "browser", "phone", "gear", "cursor", "layout", "code", "cloud", "browser", "gear", "phone", "code", "layout", "cursor"],
  fintech: ["rupee", "qr", "card", "finger", "shield", "rupee", "lock", "qr", "card", "chart", "rupee", "finger", "shield", "card"],
  partner: ["nodes", "rupee", "chart", "rocket", "nodes", "card", "code", "rupee", "chart", "nodes", "shield", "rocket", "rupee", "browser"],
  mix: ["code", "rupee", "browser", "qr", "phone", "chart", "card", "rocket", "gear", "shield", "cursor", "finger", "cloud", "nodes"],
};

/* fixed, hand-balanced positions (percent of viewport) */
const SLOTS = [
  [6, 14, 54, 0.9],
  [88, 10, 44, 0.6],
  [18, 38, 36, 0.4],
  [74, 32, 62, 1],
  [4, 62, 46, 0.7],
  [92, 56, 38, 0.5],
  [30, 82, 58, 0.95],
  [64, 78, 42, 0.55],
  [46, 20, 30, 0.35],
  [56, 52, 34, 0.45],
  [14, 90, 32, 0.3],
  [84, 88, 52, 0.8],
  [38, 60, 28, 0.3],
  [96, 36, 30, 0.35],
];
const TONES = ["t-blue", "t-red", "t-blue", "t-violet", "t-blue", "t-red", "t-teal"];

function themeFor(path) {
  if (path.startsWith("/web-services")) return "web";
  if (path.startsWith("/fintech")) return "fintech";
  if (path.startsWith("/partners")) return "partner";
  return "mix";
}

/* circuit lines with moving data pulses */
function Circuit() {
  const paths = [
    "M0 120 H220 V260 H520 V180 H900",
    "M1440 200 H1180 V360 H940 V300 H700",
    "M0 620 H160 V520 H460 V700 H760",
    "M1440 720 H1260 V600 H1020 V760 H820",
  ];
  return (
    <svg className="fx-circuit" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="fx-pulse">
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.35" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fx-pulse-red">
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.35" stopColor="#e63946" />
          <stop offset="1" stopColor="#e63946" stopOpacity="0" />
        </radialGradient>
      </defs>
      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} className="fx-trace" />
          <circle r="9" fill={`url(#${i % 2 ? "fx-pulse-red" : "fx-pulse"})`}>
            <animateMotion dur={`${9 + i * 2}s`} repeatCount="indefinite" path={d} begin={`${i * 1.5}s`} />
          </circle>
        </g>
      ))}
      {[
        [220, 120],
        [520, 260],
        [1180, 200],
        [940, 360],
        [160, 620],
        [460, 520],
        [1260, 720],
        [1020, 600],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" className="fx-node" style={{ animationDelay: `${i * 0.4}s` }} />
      ))}
    </svg>
  );
}

export default function BackgroundFX() {
  const pathname = usePathname() || "/";
  const theme = themeFor(pathname);
  const icons = THEMES[theme];

  const glyphRefs = useRef([]);

  // wrap-around parallax: icons drift up at different speeds as you scroll
  // and loop back in from the bottom, so the screen is never empty
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let mx = 0,
      my = 0;
    const apply = () => {
      raf = 0;
      const H = window.innerHeight * 1.15;
      const sy = window.scrollY;
      glyphRefs.current.forEach((el, i) => {
        if (!el) return;
        const [, top, , depth] = SLOTS[i];
        const base = (top / 100) * window.innerHeight;
        let y = base - sy * 0.35 * depth;
        y = (((y + H * 0.08) % H) + H) % H - H * 0.08;
        const x = mx * depth * -40;
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${(y + my * depth * -30).toFixed(1)}px, 0)`;
      });
    };
    const queue = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
      queue();
    };
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    window.addEventListener("mousemove", onMove, { passive: true });
    apply();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
      window.removeEventListener("mousemove", onMove);
    };
  }, [theme]);

  return (
    <div className={`bgfx bgfx-${theme}`} aria-hidden="true">
      <Circuit />
      {SLOTS.map(([x, y, size, depth], i) => (
        <span
          key={`${theme}-${i}`}
          ref={(el) => (glyphRefs.current[i] = el)}
          className={`fx-glyph ${TONES[i % TONES.length]}`}
          style={{
            left: `${x}%`,
            top: 0,
            transform: `translate3d(0, ${y}vh, 0)`,
            width: size,
            height: size,
            "--d": depth,
          }}
        >
          <span className="fx-float" style={{ animationDuration: `${12 + (i % 5) * 3}s`, animationDelay: `${-i * 1.7}s` }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {ICONS[icons[i % icons.length]]}
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
}
