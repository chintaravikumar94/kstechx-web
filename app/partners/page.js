import Link from "next/link";
import { PageHero } from "../components/Blocks";
import { partnerBenefits, howPartner, webServices, fintech, CONTACT, PARTNER_JOIN } from "../data";

const onboarding = [
  { icon: "📝", title: "Enquire", text: "Fill the partner form or WhatsApp us — our team explains the model and commissions." },
  { icon: "🛒", title: "Purchase a product", text: "Buy any one KS TechX product or service worth ₹1,000 or more." },
  { icon: "🪪", title: "KYC & agreement", text: "Quick verification and a clear written partner agreement." },
  { icon: "🎓", title: "Training & go-live", text: "Get trained, get your partner ID and start selling." },
];

const sellable = [
  {
    href: "/fintech",
    icon: "💳",
    name: "Fintech Solutions",
    list: fintech.map((f) => f.name).join(" · "),
    accent: "#e63946",
  },
  ...webServices.map((s) => ({
    href: `/web-services/${s.slug}`,
    icon: s.icon,
    name: s.name,
    list: s.offerings.map((o) => o.title).join(" · "),
    accent: s.accent,
  })),
];

export const metadata = {
  title: "KS TechX Partner",
  description:
    "Become a KS TechX Partner — sell fintech IDs, websites, custom software and Android apps, and earn commission on every sale.",
};

export default function Partners() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Partner" }]}
        art="partner"
        kicker="KS TechX Partner"
        title="Every sale earns you commission"
        lead="Partner with KS TechX and sell services every business needs. You bring the customer — we deliver the service — you earn commission on every sale."
      >
        <div className="hero-cta reveal" data-d="2">
          <Link href="/contact?service=partner" className="btn btn-primary btn-lg">
            Join as a partner →
          </Link>
          <Link href="/how-it-works" className="btn btn-ghost btn-lg">
            How it works
          </Link>
        </div>
        <div className="join-card reveal" data-d="3">
          <span className="join-price">
            <em>Join from</em>
            <strong>{PARTNER_JOIN.minPurchase}</strong>
          </span>
          <span className="join-text">
            <strong>{PARTNER_JOIN.rule}.</strong>
            <span>{PARTNER_JOIN.why}</span>
          </span>
        </div>
      </PageHero>

      {/* ELIGIBILITY */}
      <section className="section pt0">
        <div className="container">
          <div className="elig reveal">
            <div className="elig-head">
              <span className="kicker left">Partner eligibility</span>
              <h2>How to become a KS TechX Partner</h2>
              <p>
                To join, purchase any one KS TechX product or service worth a minimum
                of <strong>{PARTNER_JOIN.minPurchase}</strong> — a fintech ID, a website
                package, software or an app. You use it in your own business, you
                understand exactly what you&apos;re selling, and you&apos;re ready to earn.
              </p>
            </div>
            <div className="elig-picks">
              {sellable.map((s) => (
                <Link key={s.href} href={s.href} className="elig-pick" style={{ "--accent": s.accent }}>
                  <span>{s.icon}</span>
                  {s.name}
                </Link>
              ))}
            </div>
            <ul className="elig-rules">
              <li>
                <strong>Minimum purchase:</strong> {PARTNER_JOIN.minPurchase} on any one KS TechX product or service
              </li>
              <li>
                <strong>Commission:</strong> earned only on genuine sales you make to customers
              </li>
              <li>
                <strong>KYC:</strong> required for every partner, with a written partner agreement
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMMISSION FLOW */}
      <section className="section pt0">
        <div className="container">
          <div className="flow reveal">
            <div className="flow-step">
              <span>🤝</span>
              <strong>You refer</strong>
              <em>a customer</em>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <span>⚙️</span>
              <strong>We deliver</strong>
              <em>the service</em>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step hot">
              <span>💰</span>
              <strong>You earn</strong>
              <em>commission</em>
            </div>
          </div>
        </div>
      </section>

      {/* ASSISTED ONBOARDING */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">Partner onboarding</span>
          <h2 className="section-title reveal">Personally onboarded by our team</h2>
          <p className="section-sub reveal">
            Every KS TechX Partner is verified and trained one-to-one — so you start
            with the right knowledge, and your customers get a trusted experience.
          </p>
          <div className="process">
            {onboarding.map((o, i) => (
              <div key={o.title} className="process-step reveal" data-d={String(i + 1)}>
                <span className="process-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="process-icon">{o.icon}</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
          <div className="center-row reveal">
            <div className="hero-cta center">
              <Link href="/contact?service=partner" className="btn btn-primary btn-lg">
                Apply to become a partner
              </Link>
              {CONTACT.whatsapp && (
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi KS TechX, I'd like to become a partner.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa btn-lg"
                >
                  💬 WhatsApp to join
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN SELL */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">What you can sell</span>
          <h2 className="section-title reveal">One partnership. Every service.</h2>
          <p className="section-sub reveal">
            Earn commission on every sale across the full KS TechX range.
          </p>
          <div className="sell-grid">
            {sellable.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className="sell-card reveal"
                data-d={String(i + 1)}
                style={{ "--accent": s.accent }}
              >
                <span className="sell-icon">{s.icon}</span>
                <div>
                  <strong>{s.name}</strong>
                  <span>{s.list}</span>
                </div>
                <em className="sell-earn">Earn ✓</em>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">Why partner with us</span>
          <h2 className="section-title reveal">Built to help partners win</h2>
          <div className="offer-grid" style={{ marginTop: 44 }}>
            {partnerBenefits.map((b, i) => (
              <div key={b.title} className="offer reveal" data-d={String((i % 4) + 1)}>
                <span className="offer-icon">{b.icon}</span>
                <h3 style={{ marginTop: 14 }}>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Get started</span>
          <h2 className="section-title reveal">Four steps to your first commission</h2>
          <div className="how-grid single reveal">
            <div className="how-col">
              <ol className="steps">
                {howPartner.map((s, i) => (
                  <li key={i}>
                    <span className="step-n">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <Link href="/contact?service=partner" className="btn btn-primary">
                Join as a partner →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
