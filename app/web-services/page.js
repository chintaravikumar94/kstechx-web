import Link from "next/link";
import ServiceExplorer from "../components/ServiceExplorer";
import Illustration from "../components/Illustration";
import { PageHero, TierCards, ProcessSteps, PartnerBand, CtaBand } from "../components/Blocks";
import { webServices } from "../data";

export const metadata = {
  title: "Web Services — Websites, Custom Software & Android Apps",
  description:
    "KS TechX Web Services — Single Page, Business and Advanced websites, Custom Web Applications and Custom Android App Development.",
};

export default function WebServicesPage() {
  const web = webServices.find((s) => s.slug === "website-development");

  return (
    <main>
      <PageHero
        crumbs={[{ label: "Web Services" }]}
        kicker="Web Services"
        title="Websites, software & apps — built in-house"
        lead="From your first website to custom software and Android apps — designed, developed and supported by the KS TechX team."
        art="web"
      >
        <div className="hero-cta reveal" data-d="2">
          <a href="#services" className="btn btn-primary btn-lg">
            Explore services ↓
          </a>
          <Link href="/contact" className="btn btn-ghost btn-lg">
            Get a free quote
          </Link>
        </div>
      </PageHero>

      {/* SERVICE SHOWCASE — one big card per service with art + sub-services */}
      <section id="services" className="section">
        <div className="container">
          <span className="kicker reveal">Our web services</span>
          <h2 className="section-title reveal">Pick what your business needs</h2>
          <div className="showcase">
            {webServices.map((s, i) => (
              <article
                key={s.slug}
                className={`showcase-card reveal ${i % 2 ? "flip" : ""}`}
                style={{ "--accent": s.accent }}
              >
                <div className="showcase-art">
                  <Illustration name={s.art} />
                </div>
                <div className="showcase-text">
                  <span className="product-tag">
                    {s.icon} {s.tag}
                  </span>
                  <h3>{s.name}</h3>
                  <p className="showcase-tagline">{s.tagline}</p>
                  <p>{s.summary}</p>
                  <div className="sub-links">
                    {s.offerings.map((o) => (
                      <Link key={o.slug} href={`/web-services/${s.slug}/${o.slug}`} className="sub-link">
                        <span>{o.icon}</span>
                        {o.title}
                        <em>→</em>
                      </Link>
                    ))}
                  </div>
                  <div className="hero-cta">
                    <Link href={`/web-services/${s.slug}`} className="btn btn-primary">
                      View {s.name}
                    </Link>
                    <Link href={`/contact?service=${s.slug}`} className="btn btn-ghost">
                      Get a quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Explore</span>
          <h2 className="section-title reveal">Pick a service, see what&apos;s inside</h2>
          <p className="section-sub reveal">Tap a tab to explore each web service.</p>
          <ServiceExplorer />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker reveal">Website packages</span>
          <h2 className="section-title reveal">Choose your website package</h2>
          <p className="section-sub reveal">{web.summary}</p>
          <TierCards
            items={web.offerings}
            href="/contact?service=website-development"
            base="/web-services/website-development"
          />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">How we deliver</span>
          <h2 className="section-title reveal">From idea to live — in four steps</h2>
          <div style={{ marginTop: 44 }}>
            <ProcessSteps />
          </div>
        </div>
      </section>

      <PartnerBand />

      <CtaBand
        title="Ready to build something great?"
        text="Tell us about your website, software or app idea — we'll send a clear plan and quote."
        primary={{ href: "/contact", label: "Get a free quote" }}
        secondary={{ href: "/fintech", label: "Explore Fintech IDs" }}
      />
    </main>
  );
}
