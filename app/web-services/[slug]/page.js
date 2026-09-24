import Link from "next/link";
import { notFound } from "next/navigation";
import Illustration from "../../components/Illustration";
import { PageHero, TierCards, SingleOffer, ProcessSteps, PartnerBand, CtaBand } from "../../components/Blocks";
import { webServices } from "../../data";

export function generateStaticParams() {
  return webServices.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = webServices.find((x) => x.slug === params.slug);
  if (!s) return {};
  return { title: s.name, description: s.summary };
}

export default function WebServiceDetail({ params }) {
  const s = webServices.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const quote = `/contact?service=${s.slug}`;
  const base = `/web-services/${s.slug}`;
  const others = webServices.filter((x) => x.slug !== s.slug);

  return (
    <main style={{ "--accent": s.accent }}>
      <PageHero
        crumbs={[{ label: "Web Services", href: "/web-services" }, { label: s.name }]}
        badge={`${s.icon} ${s.tag}`}
        title={s.name}
        tagline={s.tagline}
        lead={s.summary}
        art={s.art}
      >
        <div className="hero-cta reveal" data-d="3">
          <Link href={quote} className="btn btn-primary btn-lg">
            {s.cta} →
          </Link>
          <Link href="/partners" className="btn btn-ghost btn-lg">
            Sell this &amp; earn
          </Link>
        </div>
      </PageHero>

      {/* SUB-SERVICE CARDS WITH ART */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">{s.kind === "tiers" ? "Packages" : "Our offering"}</span>
          <h2 className="section-title reveal">
            {s.kind === "tiers" ? "Choose your package" : "What we build for you"}
          </h2>
          <div className={`sub-grid ${s.offerings.length === 1 ? "one" : ""}`}>
            {s.offerings.map((o, i) => (
              <Link
                key={o.slug}
                href={`${base}/${o.slug}`}
                className={`sub-card reveal ${o.popular ? "sub-pop" : ""}`}
                data-d={String(i + 1)}
              >
                {o.popular && <span className="tier-badge">Most popular</span>}
                <div className="sub-art">
                  <Illustration name={o.art} />
                </div>
                <div className="sub-body">
                  <h3>
                    {o.icon} {o.title}
                  </h3>
                  <p>{o.text}</p>
                  <span className="card-link">View full details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">What&apos;s included</span>
          <h2 className="section-title reveal">Everything you get</h2>
          <div style={{ marginTop: 44 }}>
            {s.kind === "tiers" && <TierCards items={s.offerings} href={quote} base={base} />}
            {s.kind === "single" && (
              <SingleOffer
                offer={s.offerings[0]}
                examples={s.examples}
                href={quote}
                cta={s.cta}
                detailHref={`${base}/${s.offerings[0].slug}`}
              />
            )}
          </div>
          <p className="who reveal">
            <strong>Ideal for:</strong> {s.who}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker reveal">How we deliver</span>
          <h2 className="section-title reveal">From idea to live — in four steps</h2>
          <div style={{ marginTop: 44 }}>
            <ProcessSteps />
          </div>
        </div>
      </section>

      <PartnerBand />

      <section className="section">
        <div className="container">
          <span className="kicker reveal">More web services</span>
          <h2 className="section-title reveal">Explore what else we build</h2>
          <div className="mini-grid">
            {others.map((o) => (
              <Link key={o.slug} href={`/web-services/${o.slug}`} className="mini-card reveal">
                <div className="mini-art">
                  <Illustration name={o.art} />
                </div>
                <div>
                  <h3>{o.name}</h3>
                  <p>{o.short}</p>
                  <span className="card-link">Learn more →</span>
                </div>
              </Link>
            ))}
            <Link href="/fintech" className="mini-card reveal">
              <div className="mini-art">
                <Illustration name="fintech" />
              </div>
              <div>
                <h3>Fintech Solutions</h3>
                <p>AEPS, UPI and credit card merchant IDs for retailers.</p>
                <span className="card-link">Explore fintech →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Let's start your ${s.name.toLowerCase()} project`}
        text="Share your idea — we'll reply with a clear plan and quote."
        primary={{ href: quote, label: s.cta }}
        secondary={{ href: "/web-services", label: "All web services" }}
      />
    </main>
  );
}
