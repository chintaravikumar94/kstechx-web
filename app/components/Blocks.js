import Link from "next/link";
import { process } from "../data";

/* Fintech-style ID cards */
export function IdCards({ items, cta = "Apply now", href = "/contact" }) {
  return (
    <div className="id-grid">
      {items.map((o, i) => (
        <div key={o.title} className="id-card reveal" data-d={String((i % 4) + 1)}>
          <div className="id-top">
            <span className="id-icon">{o.icon}</span>
            <span className="id-chip" aria-hidden="true" />
          </div>
          <h3>{o.title}</h3>
          <p>{o.text}</p>
          <ul className="ticks">
            {o.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Link href={href} className="card-link">
            {cta} →
          </Link>
        </div>
      ))}
    </div>
  );
}

/* Package / tier cards (website packages) */
export function TierCards({ items, href = "/contact" }) {
  return (
    <div className="tier-grid">
      {items.map((o, i) => (
        <div
          key={o.title}
          className={`tier reveal ${o.popular ? "tier-pop" : ""}`}
          data-d={String(i + 1)}
        >
          {o.popular && <span className="tier-badge">Most popular</span>}
          <span className="tier-icon">{o.icon}</span>
          <h3>{o.title}</h3>
          <p>{o.text}</p>
          <ul className="ticks">
            {o.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Link href={href} className={`btn ${o.popular ? "btn-primary" : "btn-ghost"} tier-btn`}>
            Get a quote →
          </Link>
        </div>
      ))}
    </div>
  );
}

/* Single featured offering + examples */
export function SingleOffer({ offer, examples, href = "/contact", cta }) {
  return (
    <div className="single-offer reveal">
      <div className="single-main">
        <span className="tier-icon">{offer.icon}</span>
        <h3>{offer.title}</h3>
        <p>{offer.text}</p>
        <ul className="ticks two">
          {offer.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <Link href={href} className="btn btn-primary btn-lg">
          {cta || "Discuss your project"} →
        </Link>
      </div>
      {examples && (
        <div className="single-side">
          <h4>What we can build</h4>
          <div className="example-grid">
            {examples.map((e) => (
              <span key={e} className="example">
                {e}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* 4-step delivery process */
export function ProcessSteps() {
  return (
    <div className="process">
      {process.map((p, i) => (
        <div key={p.title} className="process-step reveal" data-d={String(i + 1)}>
          <span className="process-n">{String(i + 1).padStart(2, "0")}</span>
          <span className="process-icon">{p.icon}</span>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </div>
      ))}
    </div>
  );
}

/* Partner commission band */
export function PartnerBand() {
  return (
    <section className="earn-band">
      <div className="container earn-inner reveal">
        <span className="earn-kicker">KS TechX Partner</span>
        <h2>Every sale earns you commission</h2>
        <p>
          Sell any KS TechX service — fintech IDs, websites, custom software or
          Android apps — and earn commission on every single sale.
        </p>
        <div className="hero-cta center">
          <Link href="/partners" className="btn btn-primary btn-lg">
            Become a partner →
          </Link>
          <Link href="/contact" className="btn btn-ghost btn-lg">
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Page hero for child pages */
export function PageHero({ kicker, title, lead, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        {kicker && <span className="kicker">{kicker}</span>}
        <h1 className="reveal">{title}</h1>
        {lead && (
          <p className="page-lead reveal" data-d="1">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
