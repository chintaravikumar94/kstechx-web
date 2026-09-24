import Link from "next/link";
import { howBusiness, howPartner } from "../data";

export const metadata = {
  title: "How it works",
  description:
    "Two simple paths with KS TechX — grow your business online, or join as a partner and earn.",
};

export default function HowItWorks() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">How it works</span>
          <h1 className="reveal">Two simple paths</h1>
          <p className="page-lead reveal" data-d="1">
            Come as a business that wants to grow — or as a partner who wants to
            earn. Here&apos;s exactly how each one works.
          </p>
        </div>
      </section>

      <section className="section pt0">
        <div className="container">
          <div className="how-grid">
            <div className="how-col reveal">
              <div className="how-head">
                <span className="how-badge biz">🏪 For business owners</span>
                <h3>Get online &amp; start selling</h3>
              </div>
              <ol className="steps">
                {howBusiness.map((s, i) => (
                  <li key={i}>
                    <span className="step-n">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <a href="https://biz.kstechx.com" className="btn btn-primary">
                Start your business →
              </a>
            </div>
            <div className="how-col reveal" data-d="2">
              <div className="how-head">
                <span className="how-badge earn">🤝 For partners</span>
                <h3>Onboard businesses &amp; earn</h3>
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

      <section className="earn-band">
        <div className="container earn-inner reveal">
          <span className="earn-kicker">Ready when you are</span>
          <h2>Pick your path and get started today</h2>
          <p>
            Set up your business in minutes, or join the partner network and
            start earning.
          </p>
          <div className="hero-cta center">
            <a href="https://biz.kstechx.com" className="btn btn-primary btn-lg">
              Start a business
            </a>
            <Link href="/partners" className="btn btn-ghost btn-lg">
              Become a partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
