import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "../../components/ContactForm";
import { Faq, OnboardingSteps, PageHero, HighlightTiles, CtaBand } from "../../components/Blocks";
import Illustration from "../../components/Illustration";
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
      <PageHero
        crumbs={[{ label: "Fintech", href: "/fintech" }, { label: f.name }]}
        badge={`${f.icon} ${f.badge}`}
        title={f.name}
        tagline={f.tagline}
        lead={f.overview}
        art={f.art}
      >
        <div className="hero-cta reveal" data-d="3">
          <a href="#apply" className="btn btn-primary btn-lg">
            Apply for ID →
          </a>
          <a href="#documents" className="btn btn-ghost btn-lg">
            Documents needed
          </a>
        </div>
        <p className="fx-earn inline reveal" data-d="4">💰 {f.earn}</p>
      </PageHero>

      {/* HIGHLIGHTS */}
      <section className="section pt0">
        <div className="container">
          <HighlightTiles items={f.highlights} />
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
          <div className="mini-grid">
            {others.map((o) => (
              <Link key={o.slug} href={`/fintech/${o.slug}`} className="mini-card reveal">
                <div className="mini-art">
                  <Illustration name={o.art} />
                </div>
                <div>
                  <h3>
                    {o.icon} {o.name}
                  </h3>
                  <p>{o.short}</p>
                  <span className="card-link">View details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Refer retailers & earn"
        text="Know shop owners who need these IDs? Become a KS TechX Partner and earn commission on every sale."
        primary={{ href: "/partners", label: "Become a partner" }}
        secondary={{ href: "/fintech", label: "All fintech IDs" }}
      />
    </main>
  );
}
