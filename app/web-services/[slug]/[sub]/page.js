import Link from "next/link";
import { notFound } from "next/navigation";
import Illustration from "../../../components/Illustration";
import ContactForm from "../../../components/ContactForm";
import { PageHero, HighlightTiles, ProcessSteps, Faq, CtaBand } from "../../../components/Blocks";
import { webServices, subTopic } from "../../../data";

function find(params) {
  const s = webServices.find((x) => x.slug === params.slug);
  const o = s && s.offerings.find((x) => x.slug === params.sub);
  return { s, o };
}

export function generateStaticParams() {
  return webServices.flatMap((s) => s.offerings.map((o) => ({ slug: s.slug, sub: o.slug })));
}

export function generateMetadata({ params }) {
  const { s, o } = find(params);
  if (!o) return {};
  return { title: `${o.title} — ${s.name}`, description: o.overview };
}

export default function SubServicePage({ params }) {
  const { s, o } = find(params);
  if (!o) notFound();

  const base = `/web-services/${s.slug}`;
  const topic = subTopic(s, o);
  const siblings = s.offerings.filter((x) => x.slug !== o.slug);
  const otherServices = webServices.filter((x) => x.slug !== s.slug);

  return (
    <main style={{ "--accent": s.accent }}>
      <PageHero
        crumbs={[
          { label: "Web Services", href: "/web-services" },
          { label: s.name, href: base },
          { label: o.title.replace(/ \(.*\)/, "") },
        ]}
        badge={`${o.icon} ${s.name}${o.popular ? " · Most popular" : ""}`}
        title={o.title}
        tagline={o.tagline}
        lead={o.overview}
        art={o.art}
      >
        <div className="hero-cta reveal" data-d="3">
          <a href="#quote" className="btn btn-primary btn-lg">
            Get a quote →
          </a>
          <a href="#included" className="btn btn-ghost btn-lg">
            What&apos;s included
          </a>
        </div>
      </PageHero>

      {/* HIGHLIGHTS */}
      <section className="section pt0">
        <div className="container">
          <HighlightTiles items={o.highlights} />
        </div>
      </section>

      {/* WHAT'S INCLUDED + BEST FOR */}
      <section id="included" className="section section-alt">
        <div className="container incl-grid">
          <div className="incl-card reveal">
            <span className="kicker left">What&apos;s included</span>
            <h2>Everything in your {o.title.replace(/ \(.*\)/, "").toLowerCase()}</h2>
            <ul className="ticks two">
              {o.includes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="incl-side reveal" data-d="2">
            <div className="best-card">
              <h3>Perfect for</h3>
              <div className="best-tags">
                {o.bestFor.map((b) => (
                  <span key={b} className="best-tag">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="best-card accent">
              <h3>Quick facts</h3>
              <ul className="facts">
                <li>
                  <span>Service</span>
                  <strong>{s.name}</strong>
                </li>
                <li>
                  <span>Built by</span>
                  <strong>KS TechX in-house team</strong>
                </li>
                <li>
                  <span>Support</span>
                  <strong>Training & ongoing help</strong>
                </li>
                <li>
                  <span>Pricing</span>
                  <strong>Custom quote</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">How we deliver</span>
          <h2 className="section-title reveal">From idea to live — in four steps</h2>
          <div style={{ marginTop: 44 }}>
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* SIBLING PACKAGES */}
      {siblings.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <span className="kicker reveal">Compare packages</span>
            <h2 className="section-title reveal">Other {s.name.toLowerCase()} options</h2>
            <div className="mini-grid">
              {siblings.map((x) => (
                <Link key={x.slug} href={`${base}/${x.slug}`} className="mini-card reveal">
                  <div className="mini-art">
                    <Illustration name={x.art} />
                  </div>
                  <div>
                    <h3>
                      {x.icon} {x.title}
                    </h3>
                    <p>{x.text}</p>
                    <span className="card-link">View details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ + QUOTE FORM */}
      <section id="quote" className="section">
        <div className="container fx-apply">
          <div className="reveal">
            <span className="kicker left">Get a quote</span>
            <h2 className="fx-apply-title">Let&apos;s plan your {o.title.replace(/ \(.*\)/, "").toLowerCase()}</h2>
            <p className="fx-apply-lead">
              Share a few details and our team will get back to you with a clear
              plan, timeline and quote.
            </p>
            <div style={{ marginTop: 28 }}>
              <Faq items={o.faqs} />
            </div>
          </div>
          <ContactForm defaultTopic={topic} title={`Quote request — ${o.title}`} />
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">More from KS TechX</span>
          <h2 className="section-title reveal">Explore other services</h2>
          <div className="mini-grid">
            {otherServices.map((x) => (
              <Link key={x.slug} href={`/web-services/${x.slug}`} className="mini-card reveal">
                <div className="mini-art">
                  <Illustration name={x.art} />
                </div>
                <div>
                  <h3>{x.name}</h3>
                  <p>{x.short}</p>
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
        title="Know someone who needs this?"
        text="Become a KS TechX Partner and earn commission on every sale you refer."
        primary={{ href: "/partners", label: "Become a partner" }}
        secondary={{ href: "/contact", label: "Talk to us" }}
      />
    </main>
  );
}
