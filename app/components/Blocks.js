import Link from "next/link";
import Illustration from "./Illustration";
import { process, fintechOnboarding } from "../data";

/* ---------- Fintech ID cards: detailed + Apply | View details ---------- */
export function FintechCards({ items }) {
  return (
    <div className="fx-grid">
      {items.map((f, i) => (
        <article key={f.slug} className="fx-card reveal" data-d={String((i % 2) + 1)}>
          <div className="fx-top">
            <div className="fx-title">
              <span className="fx-icon">{f.icon}</span>
              <div>
                <span className="fx-badge">{f.badge}</span>
                <h3>{f.name}</h3>
              </div>
            </div>
            <span className="id-chip" aria-hidden="true" />
          </div>

          <p className="fx-short">{f.short}</p>

          <div className="fx-highlights">
            {f.highlights.map((h) => (
              <div key={h.label} className="fx-hl">
                <span>{h.icon}</span>
                <div>
                  <strong>{h.label}</strong>
                  <em>{h.note}</em>
                </div>
              </div>
            ))}
          </div>

          <div className="fx-meta">
            <div>
              <h4>Documents</h4>
              <p>{f.documents.slice(0, 3).join(" · ")}{f.documents.length > 3 ? " +more" : ""}</p>
            </div>
            <div>
              <h4>You need</h4>
              <p>{f.requirements.slice(0, 2).join(" · ")}</p>
            </div>
          </div>

          <p className="fx-earn">💰 {f.earn}</p>

          <div className="fx-actions">
            <Link href={`/fintech/${f.slug}#apply`} className="btn btn-primary">
              Apply for ID
            </Link>
            <Link href={`/fintech/${f.slug}`} className="btn btn-ghost">
              View details →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ---------- Fintech onboarding steps ---------- */
export function OnboardingSteps() {
  return (
    <div className="process">
      {fintechOnboarding.map((p, i) => (
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

/* ---------- FAQ accordion (native details — no JS) ---------- */
export function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={i} className="faq-item reveal" open={i === 0}>
          <summary>
            {f.q}
            <span className="faq-plus">+</span>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- Website package tiers ---------- */
export function TierCards({ items, href = "/contact", base }) {
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
          <div className="tier-actions">
            <Link href={href} className={`btn ${o.popular ? "btn-primary" : "btn-ghost"} tier-btn`}>
              Get a quote
            </Link>
            {base && o.slug && (
              <Link href={`${base}/${o.slug}`} className="tier-more">
                View details →
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Single featured offering + examples ---------- */
export function SingleOffer({ offer, examples, href = "/contact", cta, detailHref }) {
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
        <div className="hero-cta">
          <Link href={href} className="btn btn-primary btn-lg">
            {cta || "Discuss your project"} →
          </Link>
          {detailHref && (
            <Link href={detailHref} className="btn btn-ghost btn-lg">
              View full details
            </Link>
          )}
        </div>
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

/* ---------- 4-step delivery process ---------- */
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

/* ---------- Partner commission band ---------- */
export function PartnerBand() {
  return (
    <section className="earn-band">
      <div className="container earn-inner reveal">
        <div className="earn-text">
          <span className="earn-kicker">KS TechX Partner</span>
          <h2>Every sale earns you commission</h2>
          <p>
            Sell any KS TechX service — fintech IDs, websites, custom software or
            Android apps — and earn commission on every single sale. Join by
            purchasing any one KS TechX product worth ₹1,000 or more.
          </p>
          <div className="hero-cta">
            <Link href="/partners" className="btn btn-primary btn-lg">
              Become a partner →
            </Link>
            <Link href="/contact?service=partner" className="btn btn-light btn-lg">
              Talk to us
            </Link>
          </div>
        </div>
        <div className="earn-art">
          <Illustration name="partner" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Page hero for child pages (split layout with animated art) ---------- */
export function PageHero({ kicker, title, lead, children, crumbs, art, tagline, badge }) {
  const Crumbs = crumbs ? (
    <nav className="breadcrumb">
      <Link href="/">Home</Link>
      {crumbs.map((c) => (
        <span key={c.label} className="crumb">
          <span className="crumb-sep">/</span>
          {c.href ? <Link href={c.href}>{c.label}</Link> : <span className="crumb-current">{c.label}</span>}
        </span>
      ))}
    </nav>
  ) : null;

  return (
    <section className={`page-hero ${art ? "page-hero-split" : ""}`}>
      <div className="hero-bg-dots" aria-hidden="true" />
      <div className={`container ${art ? "ph-grid" : ""}`}>
        <div className="ph-text">
          {Crumbs}
          {badge && <span className="ph-badge reveal">{badge}</span>}
          {kicker && <span className="kicker">{kicker}</span>}
          <h1 className="reveal">{title}</h1>
          {tagline && (
            <p className="product-tagline reveal" data-d="1">
              {tagline}
            </p>
          )}
          {lead && (
            <p className="page-lead reveal" data-d="1">
              {lead}
            </p>
          )}
          {children}
        </div>
        {art && (
          <div className="ph-art reveal" data-d="2">
            <Illustration name={art} />
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Highlight tiles ---------- */
export function HighlightTiles({ items }) {
  return (
    <div className="hl-grid">
      {items.map((h, i) => (
        <div key={h.label} className="hl-card reveal" data-d={String(i + 1)}>
          <span className="hl-icon">{h.icon}</span>
          <strong>{h.label}</strong>
          <em>{h.note}</em>
        </div>
      ))}
    </div>
  );
}

/* ---------- Final CTA band ---------- */
export function CtaBand({ title, text, primary, secondary }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner reveal">
        <div className="cta-glow" aria-hidden="true" />
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="hero-cta center">
          {primary && (
            <Link href={primary.href} className="btn btn-primary btn-lg">
              {primary.label}
            </Link>
          )}
          {secondary && (
            <Link href={secondary.href} className="btn btn-light btn-lg">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
