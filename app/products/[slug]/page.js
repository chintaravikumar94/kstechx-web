import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) return {};
  return { title: p.name, description: p.summary };
}

export default function ProductDetail({ params }) {
  const p = products.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const others = products.filter((x) => x.slug !== p.slug);

  return (
    <main style={{ "--accent": p.accent }}>
      <section className="page-hero product-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <span className="crumb-current">{p.name}</span>
          </nav>
          <span className="product-tag">{p.tag}</span>
          <h1 className="reveal">{p.name}</h1>
          <p className="product-tagline reveal" data-d="1">
            {p.tagline}
          </p>
          <p className="page-lead reveal" data-d="2">
            {p.summary}
          </p>
          <div className="hero-cta reveal" data-d="3">
            <a href={p.url} className="btn btn-primary btn-lg">
              Open {p.name} →
            </a>
            <Link href="/contact" className="btn btn-ghost btn-lg">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <section className="section pt0">
        <div className="container">
          <h2 className="section-title reveal">What you get</h2>
          <div className="featured-grid detail-features reveal">
            {p.features.map((h) => (
              <div key={h.label} className="feat-pill">
                <span className="feat-icon">{h.icon}</span>
                <div>
                  <strong>{h.label}</strong>
                  <span>{h.note}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="who reveal">
            <strong>Built for:</strong> {p.who}
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">More products</span>
          <h2 className="section-title reveal">Explore the rest of the suite</h2>
          <div className="grid" style={{ marginTop: 40 }}>
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/products/${o.slug}`}
                className="card reveal"
                style={{ "--accent": o.accent }}
              >
                <div className="card-tag">{o.tag}</div>
                <h3>{o.name}</h3>
                <p>{o.summary}</p>
                <span className="card-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
