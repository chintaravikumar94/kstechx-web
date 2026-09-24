import Link from "next/link";
import Stat from "../components/Stat";
import { PageHero } from "../components/Blocks";
import { stats, values, webServices, fintechIntro } from "../data";

const services = [
  { href: "/fintech", icon: fintechIntro.icon, name: fintechIntro.name, short: "AEPS, UPI, credit card and RuPay credit card merchant IDs for retailers.", accent: fintechIntro.accent },
  ...webServices.map((s) => ({ href: `/web-services/${s.slug}`, icon: s.icon, name: s.name, short: s.short, accent: s.accent })),
];

export const metadata = {
  title: "About",
  description:
    "Kumara Swamy Technologies (KS TechX) — fintech and digital solutions company from Andhra Pradesh, India.",
};

export default function About() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "About" }]}
        art="about"
        kicker="About us"
        title="Kumara Swamy Technologies"
        lead="KS TechX is a fintech and digital solutions company from Andhra Pradesh, India. We help retailers earn with fintech services, help businesses grow with websites, custom software and Android apps — and help partners earn on every sale."
      />

      <section className="section pt0">
        <div className="container">
          <h2 className="section-title reveal">What we stand for</h2>
          <div className="offer-grid" style={{ marginTop: 40 }}>
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

      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Our services</span>
          <h2 className="section-title reveal">What we do</h2>
          <div className="sell-grid" style={{ marginTop: 40 }}>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="sell-card reveal"
                style={{ "--accent": s.accent }}
              >
                <span className="sell-icon">{s.icon}</span>
                <div>
                  <strong>{s.name}</strong>
                  <span>{s.short}</span>
                </div>
              </Link>
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

      <section className="section">
        <div className="container about reveal">
          <h2 className="section-title">Let&apos;s build something together</h2>
          <p>
            Whether you need a fintech ID, a website, custom software or an app —
            or you want to partner and earn — we&apos;d love to hear from you.
          </p>
          <div className="hero-cta center" style={{ marginTop: 28 }}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Get a quote
            </Link>
            <Link href="/partners" className="btn btn-ghost btn-lg">
              Become a partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
