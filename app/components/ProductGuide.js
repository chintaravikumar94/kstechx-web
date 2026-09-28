/* Product guide for our own platforms (KS TechX QR, Mera Chat Mitra):
   how it works · why · features grid · plans. Content lives in data.js (service.guide / qrGuide). */
import Link from "next/link";
import { guideFor } from "../data";

export function ProductCtas({ product, compact }) {
  return (
    <div className="hero-cta reveal" data-d="3">
      <a href={product.signup} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
        {product.cta || "Start free"} →
      </a>
      <a href={product.login} className="btn btn-ghost btn-lg" target="_blank" rel="noopener">
        {compact ? "Log in" : "Log in to dashboard"}
      </a>
    </div>
  );
}

export default function ProductGuide({ service }) {
  const g = guideFor(service);
  const product = service.product;
  if (!g || !product) return null;
  return (
    <>
      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">How it works</span>
          <h2 className="section-title reveal">{g.stepsTitle}</h2>
          <p className="section-sub reveal">{g.stepsSub}</p>
          <div className="qrg-steps">
            {g.steps.map((s, i) => (
              <div key={s.title} className="qrg-step reveal" data-d={String(i + 1)}>
                <span className="qrg-n">{i + 1}</span>
                <span className="qrg-ico">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="center-row reveal">
            <a href={product.signup} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
              Start free at {product.host} →
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">{g.compare.kicker}</span>
          <h2 className="section-title reveal">{g.compare.title}</h2>
          <div className="qrg-compare reveal">
            {[g.compare.bad, g.compare.good].map((c, i) => (
              <div key={c.title} className={`qrg-col ${i ? "good" : ""}`}>
                <h3>{c.title}</h3>
                <ul>
                  {c.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES / TYPES */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">{g.grid.kicker}</span>
          <h2 className="section-title reveal">{g.grid.title}</h2>
          <div className="qrg-types reveal">
            {g.grid.items.map(([i, t]) => (
              <span key={t}>
                <b>{i}</b> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Plans</span>
          <h2 className="section-title reveal">Start free. Grow when you&apos;re ready.</h2>
          <p className="section-sub reveal">{g.plansSub}</p>
          <div className="qrg-plans">
            {g.plans.map((p, i) => (
              <div key={p.name} className={`qrg-plan reveal ${p.pop ? "pop" : ""}`} data-d={String(i + 1)}>
                {p.pop && <span className="tier-badge">Most popular</span>}
                <h3>{p.name}</h3>
                <p>{p.note}</p>
                {p.href.startsWith("/") ? (
                  <Link href={p.href} className={`btn ${p.pop ? "btn-primary" : "btn-ghost"}`}>
                    {p.cta} →
                  </Link>
                ) : (
                  <a href={p.href} className={`btn ${p.pop ? "btn-primary" : "btn-ghost"}`} target="_blank" rel="noopener">
                    {p.cta} →
                  </a>
                )}
              </div>
            ))}
          </div>
          {g.noteLead && (
            <p className="who reveal">
              <strong>{g.noteLead}</strong> {g.noteText}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
