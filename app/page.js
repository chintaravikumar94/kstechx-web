import Link from "next/link";
import Hero from "./components/Hero";
import TiltCard from "./components/TiltCard";
import Stat from "./components/Stat";
import ServiceExplorer from "./components/ServiceExplorer";
import Illustration from "./components/Illustration";
import { FintechCards, TierCards, ProcessSteps, PartnerBand, CtaBand } from "./components/Blocks";
import { webServices, fintech, fintechIntro, partner, stats, values, SHOP, shopCategories } from "./data";

export default function Home() {
  const web = webServices.find((s) => s.slug === "website-development");

  const cards = [
    ...webServices.map((s) => ({
      href: `/web-services/${s.slug}`,
      icon: s.icon,
      name: s.name,
      tag: s.tag,
      text: s.short,
      accent: s.accent,
    })),
    {
      href: "/fintech",
      icon: fintechIntro.icon,
      name: fintechIntro.name,
      tag: "4 IDs",
      text: "AEPS retailer ID plus UPI, credit card and RuPay credit card merchant IDs.",
      accent: fintechIntro.accent,
      cta: "Explore fintech →",
    },
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
            Websites, software and apps for your business, fintech IDs for your
            shop — and a partner model where every sale earns.
          </p>
          <div className="grid grid-5">
            {cards.map((c) => (
              <TiltCard key={c.href} item={c} />
            ))}
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
          <TierCards
            items={web.offerings}
            href="/contact?service=website-development"
            base="/web-services/website-development"
          />
        </div>
      </section>

      {/* FINTECH SPOTLIGHT */}
      <section className="section section-alt">
        <div className="container">
          <div className="split-intro">
            <div>
              <span className="kicker left reveal">Fintech Solutions</span>
              <h2 className="section-title left reveal">{fintechIntro.tagline}</h2>
              <p className="section-sub left reveal">{fintechIntro.summary}</p>
              <div className="hero-cta reveal">
                <Link href="/fintech" className="btn btn-primary btn-lg">
                  Compare all IDs →
                </Link>
                <Link href="/fintech/aeps-retailer-id#apply" className="btn btn-ghost btn-lg">
                  Apply for AEPS
                </Link>
              </div>
            </div>
            <div className="reveal" data-d="2">
              <Illustration name="fintech" />
            </div>
          </div>
          <FintechCards items={fintech} />
        </div>
      </section>

      {/* SHOP */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">KS TechX Shop</span>
          <h2 className="section-title reveal">Buy business essentials online</h2>
          <p className="section-sub reveal">
            Payment devices, fintech services, printing, power backup and solar — order
            directly from our online shop.
          </p>
          <div className="shop-grid">
            {shopCategories.map((c, i) => (
              <a key={c.name} href={SHOP.categories} className="shop-cat reveal" data-d={String((i % 3) + 1)}>
                <span className="shop-cat-icon">{c.icon}</span>
                <span>
                  <strong>{c.name}</strong>
                  <em>{c.text}</em>
                </span>
                <span className="shop-cat-go" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
          <ul className="shop-perks reveal">
            {SHOP.perks.map((p) => (
              <li key={p}>✓ {p}</li>
            ))}
          </ul>
          <div className="center-row reveal">
            <div className="hero-cta center">
              <a href={SHOP.url} className="btn btn-primary btn-lg">
                🛒 Visit the shop
              </a>
              <a href={SHOP.track} className="btn btn-ghost btn-lg">
                Track an order
              </a>
            </div>
          </div>
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
      <section className="section">
        <div className="container split-intro">
          <div className="reveal">
            <Illustration name="about" />
          </div>
          <div>
            <span className="kicker left reveal">Why KS TechX</span>
            <h2 className="section-title left reveal">One trusted partner for everything</h2>
            <div className="why-list">
              {values.map((v, i) => (
                <div key={v.title} className="why-item reveal" data-d={String(i + 1)}>
                  <span className="why-icon">{v.icon}</span>
                  <div>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
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

      <CtaBand
        title="Let's build your next step"
        text="Get a quote for your website, software or app — or apply for a fintech ID."
        primary={{ href: "/contact", label: "Get a free quote" }}
        secondary={{ href: "/fintech", label: "Apply for a fintech ID" }}
      />
    </main>
  );
}
