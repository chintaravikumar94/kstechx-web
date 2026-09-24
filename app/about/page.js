import Link from "next/link";
import Stat from "../components/Stat";
import { stats } from "../data";

export const metadata = {
  title: "About",
  description:
    "Kumara Swamy Technologies (KS TechX) is a digital growth company from Andhra Pradesh, India — building software, setup services, digital products and a partner network.",
};

const pillars = [
  {
    icon: "🏗️",
    title: "Built in-house",
    text: "Every product is engineered end-to-end by our own team — full-stack software, not off-the-shelf templates.",
  },
  {
    icon: "⚡",
    title: "Ships fast",
    text: "A modern, reliable stack with continuous deployment. Businesses go live in minutes, not months.",
  },
  {
    icon: "🇮🇳",
    title: "Made for India",
    text: "UPI, GST invoices, regional-language AI and local courier networks — designed for how India actually does business.",
  },
];

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">About us</span>
          <h1 className="reveal">Kumara Swamy Technologies</h1>
          <p className="page-lead reveal" data-d="1">
            KS TechX is a digital growth company from Andhra Pradesh, India. We
            build software, set businesses up online, sell digital products and
            run a partner network — everything a local business needs to sell,
            get paid and grow, in one place.
          </p>
        </div>
      </section>

      <section className="section pt0">
        <div className="container">
          <h2 className="section-title reveal">What we stand for</h2>
          <div className="offer-grid" style={{ marginTop: 40 }}>
            {pillars.map((v, i) => (
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

      <section className="section">
        <div className="container about reveal">
          <h2 className="section-title">Let&apos;s build something together</h2>
          <p>
            Whether you&apos;re a business owner ready to go online or a partner
            ready to earn — we&apos;d love to hear from you.
          </p>
          <div className="hero-cta center" style={{ marginTop: 28 }}>
            <a href="https://biz.kstechx.com" className="btn btn-primary btn-lg">
              Start your business
            </a>
            <Link href="/contact" className="btn btn-ghost btn-lg">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
