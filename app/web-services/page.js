import TiltCard from "../components/TiltCard";
import ServiceExplorer from "../components/ServiceExplorer";
import { PageHero, TierCards, ProcessSteps, PartnerBand } from "../components/Blocks";
import { webServices } from "../data";

export const metadata = {
  title: "Web Services",
  description:
    "KS TechX Web Services — Website Development (single page, business & advanced websites), Custom Software Solutions and Custom Android App Development.",
};

export default function WebServicesPage() {
  const web = webServices.find((s) => s.slug === "website-development");
  const cards = webServices.map((s) => ({
    href: `/web-services/${s.slug}`,
    icon: s.icon,
    name: s.name,
    tag: s.tag,
    text: s.short,
    accent: s.accent,
  }));

  return (
    <main>
      <PageHero
        crumbs={[{ label: "Web Services" }]}
        kicker="Web Services"
        title="Websites, software & apps — built in-house"
        lead="From your first website to custom software and Android apps — designed, developed and supported by the KS TechX team."
      />

      <section className="section pt0">
        <div className="container">
          <div className="grid grid-3">
            {cards.map((c) => (
              <TiltCard key={c.href} item={c} />
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
          <TierCards items={web.offerings} href="/contact?service=website-development" />
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
    </main>
  );
}
