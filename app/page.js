import Link from "next/link";
import Hero from "./components/Hero";
import TiltCard from "./components/TiltCard";
import Stat from "./components/Stat";
import ServiceExplorer from "./components/ServiceExplorer";
import { IdCards, TierCards, ProcessSteps, PartnerBand } from "./components/Blocks";
import { services, partner, stats, values } from "./data";

export default function Home() {
  const fintech = services.find((s) => s.slug === "fintech-solutions");
  const web = services.find((s) => s.slug === "website-development");

  const cards = [
    ...services.map((s) => ({
      href: `/services/${s.slug}`,
      icon: s.icon,
      name: s.name,
      tag: s.tag,
      text: s.short,
      accent: s.accent,
    })),
    {
      href: "/partners",
      icon: partner.icon,
      name: partner.name,
      tag: "Earn commission",
      text: partner.short,
      accent: partner.accent,
      cta: "Become a partner →",
    },
  ];

  return (
    <main>
      <Hero />

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">What we do</span>
          <h2 className="section-title reveal">Five ways KS TechX grows you</h2>
          <p className="section-sub reveal">
            From fintech IDs for your shop to custom software for your business —
            and a partner model where every sale earns.
          </p>
          <div className="grid grid-5">
            {cards.map((c) => (
              <TiltCard key={c.href} item={c} />
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE EXPLORER */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Explore</span>
          <h2 className="section-title reveal">Pick a service, see what&apos;s inside</h2>
          <p className="section-sub reveal">Tap a tab to explore each service in detail.</p>
          <ServiceExplorer />
        </div>
      </section>

      {/* FINTECH SPOTLIGHT */}
      <section className="section fintech-zone">
        <div className="container">
          <span className="kicker reveal">Fintech Solutions</span>
          <h2 className="section-title reveal">{fintech.tagline}</h2>
          <p className="section-sub reveal">{fintech.summary}</p>
          <IdCards items={fintech.offerings} cta="Apply for this ID" />
        </div>
      </section>

      {/* WEBSITE PACKAGES */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Website Development</span>
          <h2 className="section-title reveal">Choose your website package</h2>
          <p className="section-sub reveal">{web.summary}</p>
          <TierCards items={web.offerings} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">How we deliver</span>
          <h2 className="section-title reveal">From idea to live — in four steps</h2>
          <p className="section-sub reveal">
            The same proven process for every website, software and app we build.
          </p>
          <ProcessSteps />
        </div>
      </section>

      <PartnerBand />

      {/* WHY US */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Why KS TechX</span>
          <h2 className="section-title reveal">One trusted partner for everything</h2>
          <div className="offer-grid" style={{ marginTop: 44 }}>
            {values.map((v, i) => (
              <div key={v.title} className="offer reveal" data-d={String(i + 1)}>
                <span className="offer-icon">{v.icon}</span>
                <h3 style={{ marginTop: 14 }}>{v.title}</h3>
                <p>{v.text}</p>
              </div>
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

      {/* FINAL CTA */}
      <section className="cta-band">
        <div className="container cta-inner cta-red reveal">
          <h2>Let&apos;s build your next step</h2>
          <p>Tell us what you need — we&apos;ll send a clear plan and quote.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Get a free quote →
          </Link>
        </div>
      </section>
    </main>
  );
}
