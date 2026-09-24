import Link from "next/link";
import Hero from "./components/Hero";
import TiltCard from "./components/TiltCard";
import Stat from "./components/Stat";
import { offers, products, testimonials, stats } from "./data";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">What we do</span>
          <h2 className="section-title reveal">One company · four ways we grow you</h2>
          <p className="section-sub reveal">
            Whether you want the tools, the whole thing done for you, or a way to
            earn — KS TechX has a path for you.
          </p>
          <div className="offer-grid">
            {offers.map((o, i) => (
              <div key={o.title} className="offer reveal" data-d={String((i % 4) + 1)}>
                <span className="offer-icon">{o.icon}</span>
                <span className="offer-badge">{o.badge}</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Our software</span>
          <h2 className="section-title reveal">The products businesses run on</h2>
          <p className="section-sub reveal">
            Tap any product to see what it does — each runs on its own space
            under kstechx.com.
          </p>
          <div className="grid">
            {products.map((p) => (
              <TiltCard key={p.slug} p={p} />
            ))}
          </div>
          <div className="center-row reveal">
            <Link href="/products" className="btn btn-ghost btn-lg">
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS PREVIEW */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">How it works</span>
          <h2 className="section-title reveal">Two simple paths</h2>
          <p className="section-sub reveal">
            Come as a business that wants to grow — or a partner who wants to
            earn.
          </p>
          <div className="split reveal">
            <Link href="/how-it-works" className="split-card">
              <span className="how-badge biz">🏪 For business owners</span>
              <h3>Get online &amp; start selling</h3>
              <p>Pick a plan or let us set you up, then sell on WhatsApp and the web.</p>
              <span className="card-link brandlink">See the steps →</span>
            </Link>
            <Link href="/partners" className="split-card">
              <span className="how-badge earn">🤝 For partners</span>
              <h3>Onboard businesses &amp; earn</h3>
              <p>Join the network, bring businesses on board, and earn recurring commission.</p>
              <span className="card-link goldlink">See the program →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* EARN BAND */}
      <section className="earn-band">
        <div className="container earn-inner reveal">
          <span className="earn-kicker">Partner Program</span>
          <h2>Earn by growing businesses around you</h2>
          <p>
            Join the KS TechX partner network, bring local shops online, and earn
            recurring commission on every plan — build your own downline income.
          </p>
          <Link href="/partners" className="btn btn-primary btn-lg">
            Join as a partner →
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">Loved by owners</span>
          <h2 className="section-title reveal">Businesses run better with KS TechX</h2>
          <div className="tgrid">
            {testimonials.map((t, i) => (
              <figure key={i} className="tcard reveal" data-d={String(i + 1)}>
                <div className="stars">★★★★★</div>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <span className="tavatar">{t.name.charAt(0)}</span>
                  <span>
                    <strong>{t.name}</strong>
                    <em>{t.role}</em>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-band">
        <div className="container stats reveal">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>
    </main>
  );
}
