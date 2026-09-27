/* KS TechX QR — product guide shown on the Dynamic QR service pages */
import Link from "next/link";
import { qrGuide } from "../data";

export function QrCtas({ product, compact }) {
  return (
    <div className="hero-cta reveal" data-d="3">
      <a href={product.signup} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
        Create free QR code →
      </a>
      <a href={product.login} className="btn btn-ghost btn-lg" target="_blank" rel="noopener">
        {compact ? "Log in" : "Log in to dashboard"}
      </a>
    </div>
  );
}

export default function QrGuide({ product }) {
  return (
    <>
      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">How it works</span>
          <h2 className="section-title reveal">Your first dynamic QR in 4 simple steps</h2>
          <p className="section-sub reveal">No technical knowledge needed. If you can fill a form, you can create a QR code.</p>
          <div className="qrg-steps">
            {qrGuide.steps.map((s, i) => (
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
              Start free at qr.kstechx.com →
            </a>
          </div>
        </div>
      </section>

      {/* STATIC vs DYNAMIC */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Why dynamic?</span>
          <h2 className="section-title reveal">Normal QR vs KS TechX dynamic QR</h2>
          <div className="qrg-compare reveal">
            <div className="qrg-col">
              <h3>😐 Normal (static) QR</h3>
              <ul>
                <li>✗ Link is fixed forever — wrong link means reprinting</li>
                <li>✗ No idea how many people scanned</li>
                <li>✗ Plain black & white</li>
                <li>✗ Can&apos;t pause or expire an offer</li>
              </ul>
            </div>
            <div className="qrg-col good">
              <h3>🚀 KS TechX dynamic QR</h3>
              <ul>
                <li>✓ Change the link anytime — same printed QR</li>
                <li>✓ Live scans, unique visitors, time, city & device</li>
                <li>✓ Your colours, logo & &quot;Scan me&quot; frame</li>
                <li>✓ Pause, expiry date, scan limit & password</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">{qrGuide.types.length} QR types</span>
          <h2 className="section-title reveal">One platform for every kind of QR</h2>
          <div className="qrg-types reveal">
            {qrGuide.types.map(([i, t]) => (
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
          <p className="section-sub reveal">Current Pro prices are always shown on qr.kstechx.com. All plans include a GST invoice.</p>
          <div className="qrg-plans">
            {qrGuide.plans.map((p, i) => (
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
          <p className="who reveal">
            <strong>KS TechX website client?</strong> We can add dynamic QR codes to your website package and set up your analytics login for
            you — just ask our team.
          </p>
        </div>
      </section>
    </>
  );
}
