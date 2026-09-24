import Link from "next/link";
import { notFound } from "next/navigation";
import { IdCards, TierCards, SingleOffer, ProcessSteps, PartnerBand } from "../../components/Blocks";
import { services } from "../../data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return { title: s.name, description: s.summary };
}

export default function ServiceDetail({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const quote = `/contact?service=${s.slug}`;
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <main style={{ "--accent": s.accent }}>
      <section className="page-hero product-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span className="crumb-current">{s.name}</span>
          </nav>
          <div className="detail-icon reveal">{s.icon}</div>
          <h1 className="reveal">{s.name}</h1>
          <p className="product-tagline reveal" data-d="1">
            {s.tagline}
          </p>
          <p className="page-lead reveal" data-d="2">
            {s.summary}
          </p>
          <div className="hero-cta center reveal" data-d="3">
            <Link href={quote} className="btn btn-primary btn-lg">
              {s.cta} →
            </Link>
            <Link href="/partners" className="btn btn-ghost btn-lg">
              Sell this &amp; earn
            </Link>
          </div>
        </div>
      </section>

      <section className="section pt0">
        <div className="container">
          <h2 className="section-title reveal">
            {s.kind === "tiers" ? "Choose your package" : s.kind === "ids" ? "Available IDs" : "What you get"}
          </h2>
          <div style={{ marginTop: 44 }}>
            {s.kind === "ids" && <IdCards items={s.offerings} cta="Apply for this ID" href={quote} />}
            {s.kind === "tiers" && <TierCards items={s.offerings} href={quote} />}
            {s.kind === "single" && (
              <SingleOffer offer={s.offerings[0]} examples={s.examples} href={quote} cta={s.cta} />
            )}
          </div>
          <p className="who reveal">
            <strong>Ideal for:</strong> {s.who}
          </p>
        </div>
      </section>

      {s.kind !== "ids" && (
        <section className="section section-alt">
          <div className="container">
            <span className="kicker reveal">How we deliver</span>
            <h2 className="section-title reveal">From idea to live — in four steps</h2>
            <div style={{ marginTop: 44 }}>
              <ProcessSteps />
            </div>
          </div>
        </section>
      )}

      <PartnerBand />

      <section className="section">
        <div className="container">
          <span className="kicker reveal">More services</span>
          <h2 className="section-title reveal">Explore what else we do</h2>
          <div className="grid" style={{ marginTop: 40 }}>
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="card reveal"
                style={{ "--accent": o.accent }}
              >
                <span className="card-icon">{o.icon}</span>
                <div className="card-tag">{o.tag}</div>
                <h3>{o.name}</h3>
                <p>{o.short}</p>
                <span className="card-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
