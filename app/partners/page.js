import Link from "next/link";
import { howPartner } from "../data";

export const metadata = {
  title: "Partner Program",
  description:
    "Join the KS TechX partner network — onboard local businesses and earn recurring commission. Build your own downline income.",
};

const benefits = [
  {
    icon: "💰",
    title: "Recurring commission",
    text: "Earn on every plan your businesses take — month after month, not just once.",
  },
  {
    icon: "👥",
    title: "Build a downline",
    text: "Grow a team of partners under you and earn as your network expands.",
  },
  {
    icon: "🧰",
    title: "Ready-made products",
    text: "Sell software businesses actually need — Bizfree, Mera Digi Card and more.",
  },
  {
    icon: "📈",
    title: "Live dashboard",
    text: "Track your businesses, team and earnings in real time on Mera Partners.",
  },
  {
    icon: "🎓",
    title: "Training & support",
    text: "We help you pitch, onboard and grow — you're never on your own.",
  },
  {
    icon: "🆓",
    title: "Free to join",
    text: "No upfront cost. Start onboarding businesses around you today.",
  },
];

export default function Partners() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Partner Program</span>
          <h1 className="reveal">Earn by growing businesses around you</h1>
          <p className="page-lead reveal" data-d="1">
            Become a KS TechX partner, bring local shops online, and earn
            recurring commission on every plan. Build your own downline and turn
            your network into income.
          </p>
          <div className="hero-cta reveal" data-d="2">
            <a href="https://partners.kstechx.com" className="btn btn-primary btn-lg">
              Join as a partner →
            </a>
            <Link href="/contact" className="btn btn-ghost btn-lg">
              Ask a question
            </Link>
          </div>
        </div>
      </section>

      <section className="section pt0">
        <div className="container">
          <h2 className="section-title reveal">Why partner with us</h2>
          <div className="offer-grid" style={{ marginTop: 40 }}>
            {benefits.map((b, i) => (
              <div key={b.title} className="offer reveal" data-d={String((i % 4) + 1)}>
                <span className="offer-icon">{b.icon}</span>
                <h3 style={{ marginTop: 14 }}>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">How partners earn</span>
          <h2 className="section-title reveal">Four steps to your first commission</h2>
          <div className="how-grid single reveal">
            <div className="how-col">
              <ol className="steps">
                {howPartner.map((s, i) => (
                  <li key={i}>
                    <span className="step-n">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <a href="https://partners.kstechx.com" className="btn btn-primary">
                Start earning →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
