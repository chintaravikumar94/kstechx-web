"use client";

import { useState } from "react";
import Link from "next/link";
import Illustration from "./Illustration";
import { webServices as services } from "../data";

/* Interactive tabbed explorer — pick a web service, see what's inside. */
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
        <div className="explorer-body">
          <div>
            <span className="product-tag">{s.tag}</span>
            <h3>{s.tagline}</h3>
            <p>{s.summary}</p>
            <div className="explorer-items">
              {s.offerings.map((o) => (
                <Link
                  key={o.slug}
                  href={`/web-services/${s.slug}/${o.slug}`}
                  className="explorer-item"
                >
                  <span className="feat-icon">{o.icon}</span>
                  <div>
                    <strong>{o.title}</strong>
                    <span>{o.text}</span>
                  </div>
                  <em className="explorer-go">→</em>
                </Link>
              ))}
            </div>
            <div className="hero-cta">
              <Link href={`/web-services/${s.slug}`} className="btn btn-primary">
                View {s.name} →
              </Link>
              <Link href={`/contact?service=${s.slug}`} className="btn btn-ghost">
                Get a quote
              </Link>
            </div>
          </div>
          <div className="explorer-art">
            <Illustration name={s.art} />
          </div>
        </div>
      </div>
    </div>
  );
}
