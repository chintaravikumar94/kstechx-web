"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "../data";

/* Interactive tabbed explorer — pick a service, see what's inside. */
export default function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <div className="explorer reveal" style={{ "--accent": s.accent }}>
      <div className="explorer-tabs" role="tablist">
        {services.map((x, i) => (
          <button
            key={x.slug}
            role="tab"
            aria-selected={i === active}
            className={`explorer-tab ${i === active ? "on" : ""}`}
            style={{ "--accent": x.accent }}
            onClick={() => setActive(i)}
          >
            <span className="explorer-tab-icon">{x.icon}</span>
            {x.name}
          </button>
        ))}
      </div>

      <div className="explorer-panel" key={s.slug}>
        <div className="explorer-head">
          <div>
            <span className="product-tag">{s.tag}</span>
            <h3>{s.tagline}</h3>
            <p>{s.summary}</p>
          </div>
          <Link href={`/services/${s.slug}`} className="btn btn-primary">
            View {s.name} →
          </Link>
        </div>
        <div className="explorer-items">
          {s.offerings.map((o) => (
            <div key={o.title} className="explorer-item">
              <span className="feat-icon">{o.icon}</span>
              <div>
                <strong>{o.title}</strong>
                <span>{o.text}</span>
              </div>
            </div>
          ))}
          {s.examples &&
            s.examples.slice(0, 4).map((e) => (
              <div key={e} className="explorer-item soft">
                <span className="feat-icon">✓</span>
                <div>
                  <strong>{e}</strong>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
