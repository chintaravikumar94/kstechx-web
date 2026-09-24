import TiltCard from "../components/TiltCard";
import { PageHero, ProcessSteps, PartnerBand } from "../components/Blocks";
import { services, partner } from "../data";

export const metadata = {
  title: "Services",
  description:
    "KS TechX services — Fintech Solutions (AEPS, UPI & card merchant IDs), Website Development, Custom Software, Android App Development and the KS TechX Partner program.",
};

export default function ServicesPage() {
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
      <PageHero
        kicker="Our services"
        title="Everything your business needs to grow"
        lead="Fintech IDs for retailers, websites, custom software and Android apps — all designed, built and supported by KS TechX."
      />

      <section className="section pt0">
        <div className="container">
          <div className="grid grid-5">
            {cards.map((c) => (
              <TiltCard key={c.href} item={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">How we deliver</span>
          <h2 className="section-title reveal">A clear, proven process</h2>
          <p className="section-sub reveal">
            Every project follows the same four steps — so you always know what
            happens next.
          </p>
          <ProcessSteps />
        </div>
      </section>

      <PartnerBand />
    </main>
  );
}
