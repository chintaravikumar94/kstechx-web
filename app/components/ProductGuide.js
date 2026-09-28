/* Product guide for our own platforms (KS TechX QR, Mera Chat Mitra):
   how it works · why · features grid · plans. Content lives in data.js (service.guide / qrGuide). */
import Link from "next/link";
import { guideFor } from "../data";

/** Internal links use <Link>, external ones open in a new tab */
export function SmartLink({ href, className, children }) {
  if (href.startsWith("/"))
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  return (
    <a href={href} className={className} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

export function ProductCtas({ product, compact }) {
  // contact-only products (e.g. Mera Chat Mitra) have primary/secondary; self-serve ones (KS TechX QR) have signup/login
  if (product.primary)
    return (
      <>
        <div className="hero-cta reveal" data-d="3">
          <SmartLink href={product.primary.href} className="btn btn-primary btn-lg btn-wa">
            {product.primary.label}
          </SmartLink>
          {product.secondary && (
            <SmartLink href={product.secondary.href} className="btn btn-ghost btn-lg">
              {product.secondary.label}
            </SmartLink>
          )}
        </div>
        {product.login && (
          <p className="login-note reveal" data-d="3">
            {product.loginNote || "Already a user?"}{" "}
            <a href={product.login} target="_blank" rel="noopener">
              Log in to {product.host} →
            </a>
          </p>
        )}
      </>
    );
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
          {g.offer && (
            <Link href={`/contact?service=${service.slug}`} className="offer-band reveal">
              <span>{g.offer}</span>
              <b>Claim now →</b>
            </Link>
          )}
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
            {g.startCta ? (
              <SmartLink href={g.startCta.href} className="btn btn-primary btn-lg btn-wa">
                {g.startCta.label}
              </SmartLink>
            ) : (
              <a href={product.signup} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                Start free at {product.host} →
              </a>
            )}
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
          <h2 className="section-title reveal">{g.plansTitle || "Start free. Grow when you're ready."}</h2>
          <p className="section-sub reveal">{g.plansSub}</p>
          <div className="qrg-plans">
            {g.plans.map((p, i) => (
              <div key={p.name} className={`qrg-plan reveal ${p.pop ? "pop" : ""}`} data-d={String(i + 1)}>
                {p.pop && <span className="tier-badge">{p.badge || "Most popular"}</span>}
                <h3>{p.name}</h3>
                {p.price && <div className="qrg-price">{p.price}</div>}
                <p>{p.note}</p>
                <SmartLink href={p.href} className={`btn ${p.pop ? "btn-primary" : "btn-ghost"}`}>
                  {p.cta} →
                </SmartLink>
              </div>
            ))}
          </div>
          {g.noteLead && (
            <p className="who reveal">
              <strong>{g.noteLead}</strong> {g.noteText}{" "}
              {g.noteCta && (
                <SmartLink href={g.noteCta.href} className="who-link">
                  {g.noteCta.label}
                </SmartLink>
              )}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
