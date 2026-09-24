/* =========================================================
   KS TechX — animated SVG illustration library
   Pure SVG + CSS animations (see "ART ANIMATIONS" in globals.css).
   Usage: <Illustration name="aeps" />
   Names: hero, web, website, single, business, advanced, software,
          webapp, mobile, android, fintech, aeps, upi, card, rupay,
          partner, about, how, contact
   ========================================================= */

const C = {
  navy: "#0b1f4b",
  navy2: "#16306e",
  blue: "#1f5bd8",
  blue2: "#3b82f6",
  lb: "#e8efff",
  lb2: "#d6e3ff",
  red: "#e63946",
  red2: "#ff4d5e",
  green: "#16a34a",
  gold: "#f4b53f",
  white: "#ffffff",
  line: "#dbe3f2",
  soft: "#f4f7fd",
};

const d = (s) => ({ animationDelay: `${s}s` });

/* ---------- frame with shared defs ---------- */
function Frame({ p, label, children }) {
  return (
    <svg viewBox="0 0 480 380" className="art" role="img" aria-label={label}>
      <defs>
        <radialGradient id={`${p}-bg`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor={C.lb2} stopOpacity="0.95" />
          <stop offset="1" stopColor={C.lb} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${p}-blue`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.blue2} />
          <stop offset="1" stopColor={C.blue} />
        </linearGradient>
        <linearGradient id={`${p}-red`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.red2} />
          <stop offset="1" stopColor={C.red} />
        </linearGradient>
        <linearGradient id={`${p}-navy`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.navy2} />
          <stop offset="1" stopColor={C.navy} />
        </linearGradient>
        <linearGradient id={`${p}-orange`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff9a3c" />
          <stop offset="1" stopColor={C.red} />
        </linearGradient>
        <filter id={`${p}-sh`} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#0b1f4b" floodOpacity="0.14" />
        </filter>
      </defs>
      <circle cx="240" cy="190" r="170" fill={`url(#${p}-bg)`} />
      <circle
        className="a-spin"
        cx="240"
        cy="190"
        r="178"
        fill="none"
        stroke={C.lb2}
        strokeWidth="2"
        strokeDasharray="3 12"
      />
      {children}
    </svg>
  );
}

/* ---------- floating badge ---------- */
function Badge({ p, x, y, w = 150, text, tone = "white", delay = 0, pop }) {
  // auto-size the pill to its text and keep it inside the canvas
  const est = Math.round([...text].reduce((n, ch) => n + (ch.codePointAt(0) > 0x2000 ? 15 : 7.4), 0) + 26);
  w = Math.max(w, est);
  if (x + w > 474) x = 474 - w;
  if (x < 6) x = 6;
  const fill = tone === "red" ? `url(#${p}-red)` : tone === "blue" ? `url(#${p}-blue)` : tone === "green" ? C.green : C.white;
  const color = tone === "white" ? C.navy : C.white;
  return (
    <g transform={`translate(${x},${y})`}>
      <g className={pop ? "a-poploop" : "a-bob"} style={d(delay)}>
        <rect width={w} height="38" rx="12" fill={fill} filter={`url(#${p}-sh)`} />
        <text x={w / 2} y="24" textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>
          {text}
        </text>
      </g>
    </g>
  );
}

/* ---------- browser window (360 x 240) ---------- */
function BrowserG({ p, variant = "website" }) {
  return (
    <g>
      <rect width="360" height="240" rx="14" fill={C.white} filter={`url(#${p}-sh)`} />
      <rect width="360" height="30" rx="14" fill={C.soft} />
      <rect y="16" width="360" height="14" fill={C.soft} />
      <circle cx="18" cy="15" r="4.5" fill={C.red} />
      <circle cx="32" cy="15" r="4.5" fill={C.gold} />
      <circle cx="46" cy="15" r="4.5" fill="#22c55e" />
      <rect x="70" y="7" width="210" height="16" rx="8" fill={C.white} stroke={C.line} />
      <text x="84" y="19" fontSize="9" fill={C.blue}>
        🔒 yourbusiness.com
      </text>
      <clipPath id={`${p}-clip-${variant}`}>
        <rect x="0" y="30" width="360" height="210" rx="0" />
      </clipPath>
      <g clipPath={`url(#${p}-clip-${variant})`}>
        {variant === "single" && (
          <g className="a-scrollpage">
            <rect x="16" y="42" width="328" height="74" rx="10" fill={`url(#${p}-blue)`} />
            <rect x="30" y="58" width="150" height="10" rx="5" fill={C.white} />
            <rect x="30" y="76" width="110" height="7" rx="3.5" fill={C.white} opacity="0.7" />
            <rect x="30" y="92" width="64" height="16" rx="8" fill={C.red} />
            {[0, 1, 2].map((i) => (
              <rect key={i} x={16 + i * 112} y="128" width="100" height="60" rx="8" fill={C.lb} />
            ))}
            <rect x="16" y="200" width="200" height="8" rx="4" fill={C.line} />
            <rect x="16" y="214" width="260" height="8" rx="4" fill={C.line} />
            <rect x="16" y="236" width="328" height="70" rx="10" fill={C.soft} stroke={C.line} />
            <circle cx="60" cy="271" r="18" fill={C.lb2} />
            <text x="60" y="276" textAnchor="middle" fontSize="14">📍</text>
            <rect x="90" y="258" width="150" height="8" rx="4" fill={C.line} />
            <rect x="90" y="274" width="110" height="8" rx="4" fill={C.line} />
            <rect x="16" y="318" width="160" height="26" rx="13" fill="#22c55e" />
            <text x="96" y="335" textAnchor="middle" fontSize="11" fill={C.white} fontWeight="700">
              WhatsApp us
            </text>
          </g>
        )}
        {variant === "business" && (
          <g>
            {["Home", "About", "Services", "Gallery", "Contact"].map((t, i) => (
              <g key={t}>
                <rect x={16 + i * 66} y="40" width="58" height="16" rx="8" fill={C.lb} />
                <text x={45 + i * 66} y="51.5" textAnchor="middle" fontSize="8" fill={C.navy}>
                  {t}
                </text>
              </g>
            ))}
            <rect className="a-tabslide" x="16" y="40" width="58" height="16" rx="8" fill={C.red} opacity="0.9" />
            <rect x="16" y="66" width="328" height="64" rx="10" fill={`url(#${p}-blue)`} />
            <rect x="30" y="82" width="140" height="10" rx="5" fill={C.white} />
            <rect x="30" y="100" width="100" height="7" rx="3.5" fill={C.white} opacity="0.7" />
            {[0, 1, 2].map((i) => (
              <g key={i} className="a-pop" style={d(0.3 + i * 0.25)}>
                <rect x={16 + i * 112} y="142" width="100" height="84" rx="8" fill={C.soft} stroke={C.line} />
                <rect x={26 + i * 112} y="152" width="80" height="36" rx="6" fill={C.lb2} />
                <rect x={26 + i * 112} y="196" width="60" height="6" rx="3" fill={C.line} />
                <rect x={26 + i * 112} y="208" width="44" height="6" rx="3" fill={C.line} />
              </g>
            ))}
          </g>
        )}
        {variant === "advanced" && (
          <g>
            <rect x="16" y="40" width="328" height="20" rx="6" fill={C.soft} />
            <rect x="24" y="46" width="40" height="8" rx="4" fill={C.red} />
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} x={200 + i * 36} y="47" width="28" height="6" rx="3" fill={C.line} />
            ))}
            {/* sitemap tree */}
            <g stroke={C.blue} strokeWidth="2" fill="none">
              <path className="a-dash" d="M180 92 V112 M180 112 H80 V132 M180 112 V132 M180 112 H280 V132" />
              <path className="a-dash" style={d(0.6)} d="M80 160 V176 M80 176 H50 V190 M80 176 H110 V190 M180 160 V190 M280 160 V176 M280 176 H250 V190 M280 176 H310 V190" />
            </g>
            <rect x="140" y="72" width="80" height="22" rx="7" fill={`url(#${p}-red)`} />
            <text x="180" y="87" textAnchor="middle" fontSize="9" fill={C.white} fontWeight="700">
              Home
            </text>
            {[80, 180, 280].map((x, i) => (
              <g key={x} className="a-pop" style={d(0.2 + i * 0.2)}>
                <rect x={x - 36} y="132" width="72" height="28" rx="7" fill={`url(#${p}-blue)`} />
                <text x={x} y="150" textAnchor="middle" fontSize="8.5" fill={C.white} fontWeight="700">
                  {["Services", "Products", "Locations"][i]}
                </text>
              </g>
            ))}
            {[50, 110, 180, 250, 310].map((x, i) => (
              <g key={x} className="a-pop" style={d(0.8 + i * 0.15)}>
                <rect x={x - 24} y="190" width="48" height="22" rx="6" fill={C.lb} stroke={C.lb2} />
                <rect x={x - 14} y="199" width="28" height="4" rx="2" fill={C.blue} opacity="0.6" />
              </g>
            ))}
          </g>
        )}
        {(variant === "website" || variant === "web") && (
          <g>
            <rect x="16" y="42" width="200" height="12" rx="6" fill={C.navy} opacity="0.85" />
            <rect x="16" y="62" width="150" height="8" rx="4" fill={C.line} />
            <rect x="16" y="76" width="170" height="8" rx="4" fill={C.line} />
            <rect className="a-pulse-soft" x="16" y="94" width="86" height="24" rx="12" fill={`url(#${p}-red)`} />
            <text x="59" y="110" textAnchor="middle" fontSize="10" fill={C.white} fontWeight="700">
              Get started
            </text>
            <rect x="230" y="42" width="114" height="86" rx="10" fill={`url(#${p}-blue)`} />
            <circle cx="287" cy="80" r="22" fill={C.white} opacity="0.25" />
            <path d="M262 118 L285 92 L300 106 L312 96 L334 118 Z" fill={C.white} opacity="0.5" />
            {[0, 1, 2].map((i) => (
              <g key={i} className="a-pop" style={d(0.2 + i * 0.2)}>
                <rect x={16 + i * 112} y="140" width="100" height="84" rx="10" fill={C.soft} stroke={C.line} />
                <circle cx={36 + i * 112} cy="162" r="10" fill={C.lb2} />
                <rect x={26 + i * 112} y="182" width="70" height="6" rx="3" fill={C.line} />
                <rect x={26 + i * 112} y="194" width="54" height="6" rx="3" fill={C.line} />
              </g>
            ))}
          </g>
        )}
      </g>
    </g>
  );
}

/* ---------- dashboard window (380 x 260) ---------- */
function DashG({ p }) {
  const bars = [52, 78, 60, 94, 70, 104];
  return (
    <g>
      <rect width="380" height="260" rx="14" fill={C.white} filter={`url(#${p}-sh)`} />
      <rect width="84" height="260" rx="14" fill={`url(#${p}-navy)`} />
      <rect x="70" width="14" height="260" fill={C.navy} />
      <circle cx="24" cy="26" r="9" fill={C.red} />
      <rect x="38" y="22" width="32" height="8" rx="4" fill={C.white} opacity="0.8" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="18" y={58 + i * 28} width={i === 1 ? 54 : 44} height="10" rx="5" fill={C.white} opacity={i === 1 ? 0.9 : 0.25} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i} className="a-pop" style={d(0.1 + i * 0.2)}>
          <rect x={98 + i * 92} y="16" width="80" height="48" rx="9" fill={C.soft} stroke={C.line} />
          <rect x={108 + i * 92} y="26" width="34" height="6" rx="3" fill={C.line} />
          <rect x={108 + i * 92} y="40" width="48" height="12" rx="4" fill={[C.blue, C.red, C.green][i]} opacity="0.85" />
        </g>
      ))}
      <rect x="98" y="76" width="176" height="118" rx="10" fill={C.soft} stroke={C.line} />
      {bars.map((h, i) => (
        <rect
          key={i}
          className="a-grow"
          style={d(0.2 + i * 0.12)}
          x={112 + i * 26}
          y={182 - h}
          width="16"
          height={h}
          rx="4"
          fill={i === 5 ? `url(#${p}-red)` : `url(#${p}-blue)`}
        />
      ))}
      <rect x="284" y="76" width="82" height="118" rx="10" fill={C.soft} stroke={C.line} />
      <path
        className="a-dash"
        d="M292 170 L306 150 L320 158 L334 128 L348 136 L358 104"
        fill="none"
        stroke={C.red}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="98" y={206 + i * 16} width="268" height="11" rx="5" fill={i === 0 ? C.lb : C.soft} />
          <rect x="106" y={209 + i * 16} width="60" height="5" rx="2.5" fill={C.line} />
          <rect x="310" y={209 + i * 16} width="46" height="5" rx="2.5" fill={i === 0 ? C.blue : C.line} />
        </g>
      ))}
    </g>
  );
}

/* ---------- phone (140 x 290) ---------- */
function PhoneG({ p, variant = "mobile" }) {
  return (
    <g>
      <rect width="140" height="290" rx="26" fill={`url(#${p}-navy)`} filter={`url(#${p}-sh)`} />
      <clipPath id={`${p}-screen-${variant}`}>
        <rect x="8" y="10" width="124" height="270" rx="19" />
      </clipPath>
      <g clipPath={`url(#${p}-screen-${variant})`}>
        <rect x="8" y="10" width="124" height="270" fill={C.white} />
        <rect x="8" y="10" width="124" height="58" fill={variant === "android" ? "#7c3aed" : `url(#${p}-blue)`} />
        <circle cx="30" cy="44" r="10" fill={C.white} opacity="0.3" />
        <rect x="46" y="38" width="54" height="8" rx="4" fill={C.white} />
        <rect x="46" y="50" width="34" height="5" rx="2.5" fill={C.white} opacity="0.6" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i} className="a-pop" style={d(0.2 + i * 0.25)}>
            <rect x="18" y={80 + i * 44} width="104" height="36" rx="9" fill={C.soft} stroke={C.line} />
            <circle cx="36" cy={98 + i * 44} r="9" fill={[C.red, C.blue, C.gold, C.green][i]} opacity="0.85" />
            <rect x="52" y={91 + i * 44} width="54" height="5" rx="2.5" fill={C.line} />
            <rect x="52" y={101 + i * 44} width="36" height="5" rx="2.5" fill={C.line} />
          </g>
        ))}
        <rect x="8" y="254" width="124" height="26" fill={C.soft} />
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx={34 + i * 24} cy="267" r="4" fill={i === 0 ? C.red : C.line} />
        ))}
      </g>
      <rect x="52" y="14" width="36" height="6" rx="3" fill={C.navy} />
    </g>
  );
}

/* ---------- credit card (250 x 158) ---------- */
function CardG({ p, variant = "card" }) {
  return (
    <g>
      <rect width="250" height="158" rx="18" fill={variant === "rupay" ? `url(#${p}-orange)` : `url(#${p}-navy)`} filter={`url(#${p}-sh)`} />
      <circle cx="220" cy="20" r="80" fill={C.white} opacity="0.06" />
      <circle cx="30" cy="160" r="70" fill={C.white} opacity="0.05" />
      <rect x="24" y="44" width="42" height="32" rx="6" fill={C.gold} />
      <path d="M24 60 H66 M45 44 V76" stroke="#c99a3c" strokeWidth="1.5" />
      <g className="a-wave" stroke={C.white} strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M82 50 Q90 60 82 70" />
        <path d="M90 44 Q102 60 90 76" opacity="0.7" />
        <path d="M98 38 Q114 60 98 82" opacity="0.45" />
      </g>
      <text x="24" y="112" fontSize="15" fill={C.white} letterSpacing="2" fontWeight="600">
        •••• •••• •••• 4821
      </text>
      <text x="24" y="138" fontSize="9" fill={C.white} opacity="0.8" letterSpacing="1.5">
        KS TECHX
      </text>
      <text x="226" y="138" textAnchor="end" fontSize="10" fill={C.white} fontWeight="800" letterSpacing="1">
        {variant === "rupay" ? "RUPAY · CREDIT" : "CREDIT CARD"}
      </text>
    </g>
  );
}

/* ---------- QR (80 x 80) ---------- */
const QR_BITS = [
  "1110111", "1010001", "1110101", "0001100", "1011011", "0110010", "1101101",
];
function QrG() {
  return (
    <g>
      <rect width="84" height="84" rx="8" fill={C.white} stroke={C.line} />
      {[
        [6, 6],
        [54, 6],
        [6, 54],
      ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="24" height="24" rx="4" fill={C.navy} />
          <rect x={x + 5} y={y + 5} width="14" height="14" rx="2" fill={C.white} />
          <rect x={x + 8} y={y + 8} width="8" height="8" rx="1.5" fill={C.navy} />
        </g>
      ))}
      {QR_BITS.map((row, r) =>
        row.split("").map((b, c) =>
          b === "1" && !((r < 3 && c < 3) || (r < 3 && c > 3) || (r > 3 && c < 3)) ? (
            <rect key={`${r}-${c}`} x={34 + (c - 3) * 7 + 3} y={34 + (r - 3) * 7 + 3} width="6" height="6" rx="1" fill={C.navy} />
          ) : null
        )
      )}
    </g>
  );
}

/* =========================================================
   SCENES
   ========================================================= */
const scenes = {
  hero: (p) => {
    const nodes = [
      { x: 240, y: 46, e: "💳", t: "Fintech" },
      { x: 392, y: 148, e: "🌐", t: "Websites" },
      { x: 334, y: 318, e: "🧩", t: "Software" },
      { x: 146, y: 318, e: "📱", t: "Apps" },
      { x: 88, y: 148, e: "🤝", t: "Partner" },
    ];
    return (
      <>
        {nodes.map((n, i) => (
          <line key={i} className="a-flow" x1="240" y1="190" x2={n.x} y2={n.y} stroke={C.blue} strokeWidth="2" strokeDasharray="6 8" opacity="0.55" />
        ))}
        <circle className="a-ring" cx="240" cy="190" r="62" fill="none" stroke={C.red} strokeWidth="2" />
        <circle className="a-ring" style={d(1.2)} cx="240" cy="190" r="62" fill="none" stroke={C.red} strokeWidth="2" />
        <circle cx="240" cy="190" r="62" fill={`url(#${p}-red)`} filter={`url(#${p}-sh)`} />
        <text x="240" y="192" textAnchor="middle" fontSize="30" fontWeight="800" fill={C.white}>
          KS
        </text>
        <text x="240" y="214" textAnchor="middle" fontSize="12" fontWeight="700" fill={C.white} letterSpacing="2">
          TECHX
        </text>
        {nodes.map((n, i) => (
          <g key={n.t} transform={`translate(${n.x},${n.y})`}>
            <g className="a-bob" style={d(i * 0.4)}>
              <circle r="34" fill={C.white} filter={`url(#${p}-sh)`} />
              <text y="9" textAnchor="middle" fontSize="26">
                {n.e}
              </text>
              <rect x="-34" y="40" width="68" height="20" rx="10" fill={C.navy} />
              <text y="54" textAnchor="middle" fontSize="10" fontWeight="700" fill={C.white}>
                {n.t}
              </text>
            </g>
          </g>
        ))}
      </>
    );
  },

  web: (p) => (
    <>
      <g transform="translate(150,34) scale(0.78)">
        <DashG p={p} />
      </g>
      <g transform="translate(24,140) scale(0.66)">
        <BrowserG p={p} variant="web" />
      </g>
      <g transform="translate(352,120) scale(0.66)">
        <PhoneG p={p} />
      </g>
      <Badge p={p} x={30} y={70} w={130} text="🚀 Site is live" tone="red" />
      <Badge p={p} x={330} y={322} w={130} text="✓ Built in-house" delay={0.8} />
    </>
  ),

  website: (p) => (
    <>
      <g transform="translate(40,74)">
        <BrowserG p={p} variant="website" />
      </g>
      <g transform="translate(352,168) scale(0.55)">
        <PhoneG p={p} />
      </g>
      <Badge p={p} x={286} y={36} w={140} text="📱 Mobile-ready" />
      <Badge p={p} x={30} y={318} w={130} text="🔎 SEO ready" tone="blue" delay={0.8} />
    </>
  ),

  single: (p) => (
    <>
      <g transform="translate(60,70)">
        <BrowserG p={p} variant="single" />
      </g>
      <g transform="translate(436,110)">
        <rect width="8" height="200" rx="4" fill={C.lb2} />
        <rect className="a-scrollthumb" width="8" height="60" rx="4" fill={C.red} />
      </g>
      <Badge p={p} x={40} y={30} w={150} text="📄 One powerful page" tone="red" />
      <Badge p={p} x={300} y={322} w={140} text="💬 WhatsApp ready" delay={0.7} />
    </>
  ),

  business: (p) => (
    <>
      <g transform="translate(60,70)">
        <BrowserG p={p} variant="business" />
      </g>
      <Badge p={p} x={300} y={30} w={140} text="✉️ New enquiry!" tone="red" pop />
      <Badge p={p} x={40} y={322} w={130} text="🗂️ 3–5 pages" tone="blue" delay={0.6} />
    </>
  ),

  advanced: (p) => (
    <>
      <rect x="92" y="42" width="330" height="230" rx="14" fill={C.white} stroke={C.line} opacity="0.7" />
      <rect x="76" y="56" width="340" height="236" rx="14" fill={C.white} stroke={C.line} opacity="0.85" />
      <g transform="translate(60,74)">
        <BrowserG p={p} variant="advanced" />
      </g>
      <Badge p={p} x={290} y={24} w={150} text="🧭 Child pages" tone="red" />
      <Badge p={p} x={34} y={326} w={150} text="✨ Premium motion" tone="blue" delay={0.7} />
    </>
  ),

  software: (p) => (
    <>
      <g transform="translate(50,62)">
        <DashG p={p} />
      </g>
      <Badge p={p} x={300} y={24} w={150} text="📊 Report ready ✓" tone="red" pop />
      <Badge p={p} x={30} y={326} w={140} text="🔐 Secure login" tone="blue" delay={0.6} />
    </>
  ),

  webapp: (p) => (
    <>
      <g transform="translate(50,62)">
        <DashG p={p} />
      </g>
      <g transform="translate(330,190)">
        <g className="a-bob" style={d(0.4)}>
          <rect width="126" height="104" rx="14" fill={C.white} filter={`url(#${p}-sh)`} />
          <text x="63" y="26" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.navy}>
            Sign in
          </text>
          <rect x="14" y="36" width="98" height="16" rx="6" fill={C.soft} stroke={C.line} />
          <rect x="14" y="58" width="98" height="16" rx="6" fill={C.soft} stroke={C.line} />
          <rect x="14" y="80" width="98" height="16" rx="8" fill={`url(#${p}-red)`} />
        </g>
      </g>
      <Badge p={p} x={290} y={24} w={150} text="☁️ Cloud hosted" tone="blue" />
    </>
  ),

  mobile: (p) => (
    <>
      <g transform="translate(170,44)">
        <PhoneG p={p} variant="mobile" />
      </g>
      <Badge p={p} x={318} y={70} w={160} text="🔔 New order received" tone="red" pop />
      <Badge p={p} x={14} y={200} w={140} text="💳 Payment done ✓" delay={0.6} />
      <Badge p={p} x={318} y={296} w={140} text="📲 Custom Android" tone="blue" delay={1.1} />
    </>
  ),

  android: (p) => (
    <>
      <g transform="translate(170,44)">
        <PhoneG p={p} variant="android" />
      </g>
      <g transform="translate(76,96)">
        <g className="a-bob">
          <circle r="34" fill="#3ddc84" filter={`url(#${p}-sh)`} />
          <path d="M-16 6 A16 16 0 0 1 16 6 Z" fill={C.white} />
          <circle cx="-7" cy="-1" r="2.5" fill="#3ddc84" />
          <circle cx="7" cy="-1" r="2.5" fill="#3ddc84" />
          <path d="M-12 -12 L-8 -6 M12 -12 L8 -6" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </g>
      <Badge p={p} x={318} y={70} w={150} text="🔔 Push alert sent" tone="red" pop />
      <Badge p={p} x={318} y={296} w={150} text="▶️ Published on Play" tone="blue" delay={0.8} />
    </>
  ),

  fintech: (p) => {
    const nodes = [
      { x: 88, y: 84, e: "👆", t: "AEPS" },
      { x: 392, y: 84, e: "📲", t: "UPI" },
      { x: 88, y: 300, e: "💳", t: "Card" },
      { x: 392, y: 300, e: "🟠", t: "RuPay" },
    ];
    return (
      <>
        {nodes.map((n, i) => (
          <line key={i} className="a-flow" x1="240" y1="200" x2={n.x} y2={n.y} stroke={C.red} strokeWidth="2.5" strokeDasharray="6 8" opacity="0.6" />
        ))}
        <circle className="a-ring" cx="240" cy="200" r="80" fill="none" stroke={C.blue} strokeWidth="2" />
        <g transform="translate(170,130)">
          <rect x="0" y="40" width="140" height="100" rx="10" fill={C.white} filter={`url(#${p}-sh)`} />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <path key={i} d={`M${i * 20} 40 L${i * 20 + 20} 40 L${i * 20 + 20} 18 L${i * 20} 18 Z`} fill={i % 2 ? C.white : C.red} />
          ))}
          <path d="M-6 18 H146 L140 0 H0 Z" fill={C.navy} />
          <text x="70" y="13" textAnchor="middle" fontSize="10" fontWeight="800" fill={C.white} letterSpacing="1">
            BANKING POINT
          </text>
          <rect x="16" y="60" width="50" height="40" rx="6" fill={C.lb} />
          <text x="41" y="86" textAnchor="middle" fontSize="16">
            ₹
          </text>
          <rect x="82" y="60" width="42" height="80" rx="6" fill={`url(#${p}-blue)`} />
          <circle cx="116" cy="100" r="3" fill={C.gold} />
        </g>
        {nodes.map((n, i) => (
          <g key={n.t} transform={`translate(${n.x},${n.y})`}>
            <g className="a-bob" style={d(i * 0.45)}>
              <circle r="36" fill={C.white} filter={`url(#${p}-sh)`} />
              <text y="9" textAnchor="middle" fontSize="26">
                {n.e}
              </text>
              <rect x="-30" y="42" width="60" height="20" rx="10" fill={`url(#${p}-red)`} />
              <text y="56" textAnchor="middle" fontSize="10" fontWeight="800" fill={C.white}>
                {n.t}
              </text>
            </g>
          </g>
        ))}
      </>
    );
  },

  aeps: (p) => (
    <>
      <g transform="translate(150,120)">
        <rect width="190" height="160" rx="26" fill={`url(#${p}-navy)`} filter={`url(#${p}-sh)`} />
        <rect x="45" y="22" width="100" height="116" rx="16" fill="#10306e" />
        <g stroke={C.blue2} strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.95">
          {[12, 20, 28, 36, 44].map((r, i) => (
            <path key={r} d={`M${95 - r} ${86 + i * 2} A${r} ${r + 6} 0 0 1 ${95 + r} ${86 + i * 2}`} />
          ))}
          <path d="M95 60 V104" />
          <path d="M83 70 Q95 58 107 70 V100" />
        </g>
        <rect className="a-scan" x="45" y="22" width="100" height="4" rx="2" fill={C.red2} />
        <circle cx="168" cy="22" r="5" fill="#22c55e" className="a-blink" />
      </g>
      <g transform="translate(40,70)">
        <g className="a-bob" style={d(0.5)}>
          <rect width="96" height="170" rx="16" fill={C.white} filter={`url(#${p}-sh)`} />
          <rect x="10" y="12" width="76" height="36" rx="8" fill={`url(#${p}-blue)`} />
          <text x="48" y="35" textAnchor="middle" fontSize="10" fontWeight="800" fill={C.white}>
            AEPS
          </text>
          <text x="48" y="80" textAnchor="middle" fontSize="11" fill={C.navy} fontWeight="700">
            Withdraw
          </text>
          <text x="48" y="104" textAnchor="middle" fontSize="20" fill={C.red} fontWeight="800">
            ₹2,000
          </text>
          <rect x="14" y="126" width="68" height="24" rx="12" fill="#22c55e" />
          <text x="48" y="142" textAnchor="middle" fontSize="10" fill={C.white} fontWeight="800">
            Success ✓
          </text>
        </g>
      </g>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${360 + i * 12},${110 + i * 26})`}>
          <g className="a-bob2" style={d(i * 0.4)}>
            <rect width="84" height="42" rx="6" fill="#22c55e" filter={`url(#${p}-sh)`} />
            <rect x="6" y="6" width="72" height="30" rx="4" fill="#4ade80" />
            <circle cx="42" cy="21" r="10" fill="#16a34a" />
            <text x="42" y="25" textAnchor="middle" fontSize="11" fill={C.white} fontWeight="800">
              ₹
            </text>
          </g>
        </g>
      ))}
      <Badge p={p} x={170} y={36} w={160} text="✓ Aadhaar verified" tone="green" pop />
      <Badge p={p} x={170} y={316} w={150} text="🖐️ Biometric secure" tone="blue" delay={0.8} />
    </>
  ),

  upi: (p) => (
    <>
      <g transform="translate(170,40)">
        <rect width="140" height="296" rx="26" fill={`url(#${p}-navy)`} filter={`url(#${p}-sh)`} />
        <rect x="8" y="10" width="124" height="276" rx="19" fill={C.white} />
        <rect x="50" y="14" width="40" height="6" rx="3" fill={C.navy} />
        <text x="70" y="46" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.navy}>
          Scan &amp; Pay
        </text>
        <g transform="translate(28,62)">
          <QrG />
          <rect className="a-scan2" x="0" y="0" width="84" height="3" rx="1.5" fill={C.red} />
        </g>
        <text x="70" y="176" textAnchor="middle" fontSize="10" fill="#5b6b8c">
          Amount
        </text>
        <text x="70" y="200" textAnchor="middle" fontSize="22" fontWeight="800" fill={C.navy}>
          ₹2,000
        </text>
        <rect x="24" y="220" width="92" height="30" rx="15" fill={`url(#${p}-red)`} />
        <text x="70" y="240" textAnchor="middle" fontSize="11" fontWeight="800" fill={C.white}>
          Pay via UPI
        </text>
      </g>
      {[
        [80, 120],
        [380, 150],
        [100, 270],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <g className={i % 2 ? "a-bob2" : "a-bob"} style={d(i * 0.5)}>
            <circle r="22" fill={C.gold} filter={`url(#${p}-sh)`} />
            <circle r="16" fill="#f7cb6a" />
            <text y="6" textAnchor="middle" fontSize="16" fontWeight="800" fill="#9a6a12">
              ₹
            </text>
          </g>
        </g>
      ))}
      <Badge p={p} x={300} y={60} w={160} text="✓ Payment received" tone="green" pop />
      <Badge p={p} x={20} y={326} w={150} text="⚡ Works on all UPI apps" tone="blue" delay={0.8} />
    </>
  ),

  card: (p) => (
    <>
      <g transform="translate(40,100) rotate(-8)">
        <g className="a-bob">
          <CardG p={p} variant="card" />
        </g>
      </g>
      <g transform="translate(320,150)">
        <rect width="120" height="180" rx="18" fill="#1e293b" filter={`url(#${p}-sh)`} />
        <rect x="12" y="14" width="96" height="56" rx="8" fill="#dcfce7" />
        <text className="a-poploop" x="60" y="48" textAnchor="middle" fontSize="12" fontWeight="800" fill={C.green}>
          APPROVED ✓
        </text>
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={18 + c * 30} y={86 + r * 24} width="24" height="16" rx="4" fill="#334155" />)
        )}
        <rect x="18" y="160" width="84" height="8" rx="4" fill={C.red} />
      </g>
      <g className="a-wave" transform="translate(292,160)" stroke={C.blue} strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M0 0 Q10 14 0 28" />
        <path d="M-10 -8 Q6 14 -10 36" opacity="0.6" />
      </g>
      <Badge p={p} x={60} y={30} w={170} text="🔐 Secure & authorised" tone="blue" />
      <Badge p={p} x={60} y={316} w={150} text="🏦 Bank settlement" delay={0.7} />
    </>
  ),

  rupay: (p) => (
    <>
      <g transform="translate(40,96) rotate(-8)">
        <g className="a-bob">
          <CardG p={p} variant="rupay" />
        </g>
      </g>
      <path className="a-flow" d="M270 190 C 300 190, 300 150, 330 150" stroke={C.red} strokeWidth="3" strokeDasharray="6 8" fill="none" />
      <g transform="translate(330,90)">
        <rect width="120" height="200" rx="20" fill={`url(#${p}-navy)`} filter={`url(#${p}-sh)`} />
        <rect x="8" y="10" width="104" height="180" rx="14" fill={C.white} />
        <g transform="translate(18,34) scale(0.98)">
          <QrG />
          <rect className="a-scan2" x="0" y="0" width="84" height="3" rx="1.5" fill={C.red} />
        </g>
        <text x="60" y="146" textAnchor="middle" fontSize="10" fontWeight="800" fill={C.navy}>
          Credit card on UPI
        </text>
        <rect x="20" y="158" width="80" height="20" rx="10" fill="#22c55e" />
        <text x="60" y="172" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={C.white}>
          Paid ✓
        </text>
      </g>
      <Badge p={p} x={60} y={30} w={160} text="🟠 RuPay on UPI" tone="red" pop />
      <Badge p={p} x={60} y={316} w={150} text="🔳 QR acceptance" tone="blue" delay={0.7} />
    </>
  ),

  partner: (p) => {
    const R = 138;
    const pts = [0, 60, 120, 180, 240, 300].map((a) => {
      const r = ((a - 90) * Math.PI) / 180;
      return { x: 240 + R * Math.cos(r), y: 190 + R * Math.sin(r) };
    });
    return (
      <>
        {pts.map((n, i) => (
          <line key={i} className="a-flow" x1={n.x} y1={n.y} x2="240" y2="190" stroke={C.gold} strokeWidth="2.5" strokeDasharray="6 8" />
        ))}
        <circle className="a-ring" cx="240" cy="190" r="52" fill="none" stroke={C.red} strokeWidth="2" />
        <circle cx="240" cy="190" r="52" fill={`url(#${p}-red)`} filter={`url(#${p}-sh)`} />
        <text x="240" y="200" textAnchor="middle" fontSize="28" fontWeight="800" fill={C.white}>
          KS
        </text>
        {pts.map((n, i) => (
          <g key={i} transform={`translate(${n.x},${n.y})`}>
            <g className="a-bob" style={d(i * 0.3)}>
              <circle r="28" fill={C.white} filter={`url(#${p}-sh)`} />
              <text y="8" textAnchor="middle" fontSize="22">
                {["🧑‍💼", "👩‍💼", "🧑‍🔧", "👨‍💼", "🧑‍🏫", "👩‍🔧"][i]}
              </text>
            </g>
          </g>
        ))}
        <Badge p={p} x={290} y={20} w={124} text="+ Commission 💰" tone="green" pop delay={0.2} />
        <Badge p={p} x={30} y={326} w={124} text="+ Commission 💰" tone="green" pop delay={1.4} />
      </>
    );
  },

  about: (p) => (
    <>
      <g className="a-spin-slow">
        <ellipse cx="240" cy="190" rx="170" ry="60" fill="none" stroke={C.blue} strokeWidth="1.5" strokeDasharray="4 8" opacity="0.6" />
        <circle cx="410" cy="190" r="7" fill={C.red} />
        <circle cx="70" cy="190" r="6" fill={C.blue} />
      </g>
      <g transform="translate(170,70)">
        <path d="M70 0 L140 26 V98 C140 150 106 190 70 206 C34 190 0 150 0 98 V26 Z" fill={`url(#${p}-blue)`} filter={`url(#${p}-sh)`} />
        <path d="M70 18 L124 38 V98 C124 140 98 172 70 186 C42 172 16 140 16 98 V38 Z" fill={C.white} opacity="0.12" />
        <path className="a-draw" d="M40 104 L62 126 L104 80" stroke={C.white} strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <Badge p={p} x={30} y={46} w={140} text="🇮🇳 Made in India" />
      <Badge p={p} x={320} y={96} w={140} text="🏗️ Built in-house" tone="red" delay={0.5} />
      <Badge p={p} x={300} y={306} w={160} text="🤝 One trusted partner" tone="blue" delay={1} />
    </>
  ),

  how: (p) => {
    const nodes = [
      [70, 318],
      [178, 236],
      [300, 168],
      [410, 72],
    ];
    const path = "M70 318 C 130 318, 120 236, 178 236 S 260 168, 300 168 S 380 80, 410 72";
    return (
      <>
        <path d={path} stroke={C.lb2} strokeWidth="12" fill="none" strokeLinecap="round" />
        <path className="a-dashlong" d={path} stroke={C.blue} strokeWidth="4" fill="none" strokeLinecap="round" />
        {nodes.map(([x, y], i) => (
          <g key={i} transform={`translate(${x},${y})`}>
            <g className="a-pop" style={d(0.3 + i * 0.35)}>
              <circle r="26" fill={i === 3 ? `url(#${p}-red)` : C.white} stroke={C.blue} strokeWidth={i === 3 ? 0 : 3} filter={`url(#${p}-sh)`} />
              <text y="7" textAnchor="middle" fontSize="18" fontWeight="800" fill={i === 3 ? C.white : C.navy}>
                {i === 3 ? "🚀" : i + 1}
              </text>
            </g>
          </g>
        ))}
        <Badge p={p} x={34} y={40} w={150} text="🏪 For customers" tone="blue" />
        <Badge p={p} x={270} y={300} w={150} text="🤝 For partners" tone="red" delay={0.7} />
      </>
    );
  },

  contact: (p) => (
    <>
      <g transform="translate(140,150)">
        <rect width="200" height="130" rx="14" fill={C.white} filter={`url(#${p}-sh)`} />
        <path d="M0 14 L100 80 L200 14" stroke={C.lb2} strokeWidth="3" fill="none" />
        <path d="M0 14 Q0 0 14 0 H186 Q200 0 200 14 L100 76 Z" fill={`url(#${p}-blue)`} />
        <circle cx="170" cy="104" r="14" fill={C.red} />
        <text x="170" y="109" textAnchor="middle" fontSize="13" fill={C.white}>
          ✓
        </text>
      </g>
      <g transform="translate(40,60)">
        <g className="a-poploop">
          <rect width="190" height="46" rx="16" fill={`url(#${p}-blue)`} filter={`url(#${p}-sh)`} />
          <text x="95" y="28" textAnchor="middle" fontSize="12.5" fontWeight="700" fill={C.white}>
            Hi! I need a fintech ID 👋
          </text>
        </g>
      </g>
      <g transform="translate(250,90)">
        <g className="a-poploop" style={d(1.2)}>
          <rect width="190" height="46" rx="16" fill={C.white} filter={`url(#${p}-sh)`} />
          <text x="95" y="28" textAnchor="middle" fontSize="12.5" fontWeight="700" fill={C.navy}>
            Sure — let&apos;s get started ✓
          </text>
        </g>
      </g>
      <g transform="translate(96,300)">
        <circle className="a-ring-sm" r="26" fill="none" stroke={C.red} strokeWidth="2" />
        <circle r="26" fill={`url(#${p}-red)`} filter={`url(#${p}-sh)`} />
        <text y="8" textAnchor="middle" fontSize="20">
          📞
        </text>
      </g>
      <Badge p={p} x={290} y={306} w={150} text="⚡ Quick response" delay={0.6} />
    </>
  ),
};

export default function Illustration({ name = "hero", className = "" }) {
  const scene = scenes[name] || scenes.hero;
  const p = `ks-${name}`;
  return (
    <div className={`art-wrap ${className}`}>
      <Frame p={p} label={`${name} illustration`}>
        {scene(p)}
      </Frame>
    </div>
  );
}
