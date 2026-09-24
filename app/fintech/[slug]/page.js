import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "../../components/ContactForm";
import { Faq, OnboardingSteps } from "../../components/Blocks";
import { fintech } from "../../data";

export function generateStaticParams() {
  return fintech.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }) {
  const f = fintech.find((x) => x.slug === params.slug);
  if (!f) return {};
  return { title: `${f.name} — Apply Online`, description: f.overview };
}

export default function FintechDetail({ params }) {
  const f = fintech.find((x) => x.slug === params.slug);
  if (!f) notFound();
  const others = fintech.filter((x) => x.slug !== f.slug);

  return (
    <main>
      {/* HERO */}
      <section className="page-hero fx-hero">
        <div className="container fx-hero-grid">
          <div>
            <nav className="breadcrumb left">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/fintech">Fintech</Link>
              <span>/</span>
              <span className="crumb-current">{f.name}</span>
            </nav>
            <span className="fx-badge">{f.badge}</span>
            <h1 className="reveal left">{f.name}</h1>
            <p className="product-tagline left reveal" data-d="1">
              {f.tagline}
            </p>
            <p className="page-lead left reveal" data-d="2">
              {f.overview}
            </p>
            <div className="hero-cta reveal" data-d="3">
              <a href="#apply" className="btn btn-primary btn-lg">
                Apply for ID →
              </a>
              <a href="#documents" className="btn btn-ghost btn-lg">
                Documents needed
              </a>
            </div>
          </div>

          {/* visual ID card */}
          <div className="fx-visual reveal" data-d="2">
            <div className="fx-idcard">
              <div className="fx-idcard-top">
                <span className="fx-idcard-brand">KS TechX</span>
                <span className="id-chip" />
              </div>
              <div className="fx-idcard-icon">{f.icon}</div>
              <div className="fx-idcard-name">{f.name}</div>
              <div className="fx-idcard-row">
                <span>Status</span>
                <strong>● Ready to apply</strong>
              </div>
            </div>
            <p className="fx-earn center">💰 {f.earn}</p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section pt0">
        <div className="container">
          <div className="fx-hl-grid">
            {f.highlights.map((h, i) => (
              <div key={h.label} className="fx-hl-card reveal" data-d={String(i + 1)}>
                <span>{h.icon}</span>
                <strong>{h.label}</strong>
                <em>{h.note}</em>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW A TRANSACTION WORKS + BENEFITS */}
      <section className="section section-alt">
        <div className="container fx-two">
          <div className="fx-panel reveal">
            <span className="kicker left">How it works</span>
            <h2>A transaction, step by step</h2>
            <ol className="steps">
              {f.steps.map((s, i) => (
                <li key={i}>
                  <span className="step-n">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
          <div className="fx-panel reveal" data-d="2">
            <span className="kicker left">Why retailers choose it</span>
            <h2>Benefits for your shop</h2>
            <ul className="ticks">
              {f.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY / DOCUMENTS / REQUIREMENTS */}
      <section id="documents" className="section">
        <div className="container">
          <span className="kicker reveal">Before you apply</span>
          <h2 className="section-title reveal">Eligibility, documents &amp; requirements</h2>
          <div className="fx-req-grid">
            <div className="fx-req reveal" data-d="1">
              <span className="fx-req-icon">🙋</span>
              <h3>Eligibility</h3>
              <ul className="ticks">
                {f.eligibility.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="fx-req reveal hot" data-d="2">
              <span className="fx-req-icon">📂</span>
              <h3>Documents needed</h3>
              <ul className="ticks">
                {f.documents.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="fx-req reveal" data-d="3">
              <span className="fx-req-icon">🧰</span>
              <h3>What you need</h3>
              <ul className="ticks">
                {f.requirements.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="fx-compliance reveal">
            🛡️ Complete KYC is mandatory. All transactions must be genuine and
            follow RBI, NPCI and card-network guidelines. Charges and settlement
            timelines depend on your plan and provider.
          </p>
        </div>
      </section>

      {/* ONBOARDING */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Onboarding</span>
          <h2 className="section-title reveal">From application to live</h2>
          <div style={{ marginTop: 44 }}>
            <OnboardingSteps />
          </div>
        </div>
      </section>

      {/* APPLY + FAQ */}
      <section id="apply" className="section">
        <div className="container fx-apply">
          <div className="reveal">
            <span className="kicker left">Apply now</span>
            <h2 className="fx-apply-title">Apply for your {f.name}</h2>
            <p className="fx-apply-lead">
              Share your details and our team will call you, confirm the documents
              and start your application.
            </p>
            <div style={{ marginTop: 28 }}>
              <Faq items={f.faqs} />
            </div>
          </div>
          <ContactForm defaultTopic={f.slug} title={`Application — ${f.name}`} />
        </div>
      </section>

      {/* OTHER IDS */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">More fintech IDs</span>
          <h2 className="section-title reveal">Add more services to your counter</h2>
          <div className="grid grid-3" style={{ marginTop: 40 }}>
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/fintech/${o.slug}`}
                className="card reveal"
                style={{ "--accent": "#e63946" }}
              >
                <span className="card-icon">{o.icon}</span>
                <div className="card-tag">{o.badge}</div>
                <h3>{o.name}</h3>
                <p>{o.short}</p>
                <span className="card-link">View details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
