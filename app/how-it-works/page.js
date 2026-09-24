import Link from "next/link";
import { PageHero, ProcessSteps, PartnerBand } from "../components/Blocks";
import { howClient, howPartner } from "../data";

export const metadata = {
  title: "How it works",
  description:
    "How KS TechX works — for customers who need fintech IDs, websites, software or apps, and for partners who earn commission on every sale.",
};

export default function HowItWorks() {
  return (
    <main>
      <PageHero
        kicker="How it works"
        title="Two simple paths"
        lead="Come to us as a customer who needs a service — or as a partner who wants to earn on every sale."
      />

      <section className="section pt0">
        <div className="container">
          <div className="how-grid">
            <div className="how-col reveal">
              <div className="how-head">
                <span className="how-badge biz">🏪 For customers</span>
                <h3>Get the service you need</h3>
              </div>
              <ol className="steps">
                {howClient.map((s, i) => (
                  <li key={i}>
                    <span className="step-n">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <Link href="/contact" className="btn btn-primary">
                Get a quote →
              </Link>
            </div>
            <div className="how-col reveal" data-d="2">
              <div className="how-head">
                <span className="how-badge earn">🤝 For partners</span>
                <h3>Sell &amp; earn commission</h3>
              </div>
              <ol className="steps">
                {howPartner.map((s, i) => (
                  <li key={i}>
                    <span className="step-n">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <Link href="/partners" className="btn btn-ghost">
                Become a partner →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Our delivery process</span>
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
