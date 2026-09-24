import Link from "next/link";
import Hero from "./components/Hero";
import TiltCard from "./components/TiltCard";
import Stat from "./components/Stat";
import ServiceExplorer from "./components/ServiceExplorer";
import { FintechCards, TierCards, ProcessSteps, PartnerBand } from "./components/Blocks";
import { webServices, fintech, fintechIntro, partner, stats, values } from "./data";

export default function Home() {
  const web = webServices.find((s) => s.slug === "website-development");

  const cards = [
    {
      href: "/fintech",
      icon: fintechIntro.icon,
      name: fintechIntro.name,
      tag: "4 IDs",
      text: "AEPS retailer ID plus UPI, credit card and RuPay credit card merchant IDs.",
      accent: fintechIntro.accent,
      cta: "Explore fintech →",
    },
    ...webServices.map((s) => ({
      href: `/web-services/${s.slug}`,
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
            Fintech IDs for your shop, websites, software and apps for your
            business — and a partner model where every sale earns.
          </p>
          <div className="grid grid-5">
            {cards.map((c) => (
              <TiltCard key={c.href} item={c} />
            ))}
          </div>
        </div>
      </section>

      {/* FINTECH */}
      <section className="section fintech-zone section-edge">
        <div className="container">
          <span className="kicker reveal">Fintech Solutions</span>
          <h2 className="section-title reveal">{fintechIntro.tagline}</h2>
          <p className="section-sub reveal">{fintechIntro.summary}</p>
          <FintechCards items={fintech} />
          <div className="center-row reveal">
            <Link href="/fintech" className="btn btn-ghost btn-lg">
              Compare all fintech IDs →
            </Link>
          </div>
        </div>
      </section>

      {/* WEB SERVICES EXPLORER */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Web Services</span>
          <h2 className="section-title reveal">Websites, software &amp; apps</h2>
          <p className="section-sub reveal">Tap a tab to explore each web service.</p>
          <ServiceExplorer />
        </div>
      </section>

      {/* WEBSITE PACKAGES */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">Website Development</span>
          <h2 className="section-title reveal">Choose your website package</h2>
          <p className="section-sub reveal">{web.summary}</p>
          <TierCards items={web.offerings} href="/contact?service=website-development" />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section-alt">
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

      <section className="stats-band">
        <div className="container stats reveal">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner cta-red reveal">
          <h2>Let&apos;s build your next step</h2>
          <p>Apply for a fintech ID or get a quote for your website, software or app.</p>
          <div className="hero-cta center">
            <Link href="/fintech" className="btn btn-primary btn-lg">
              Apply for a fintech ID
            </Link>
            <Link href="/contact" className="btn btn-ghost btn-lg">
              Get a free quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
