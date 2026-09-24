import TiltCard from "../components/TiltCard";
import { products, integrations } from "../data";

export const metadata = {
  title: "Products",
  description:
    "Explore the KS TechX product suite — Bizfree, Mera Digi Card, LocalKart and Mera Partners.",
};

export default function ProductsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Our software</span>
          <h1 className="reveal">A growing suite of SaaS products</h1>
          <p className="page-lead reveal" data-d="1">
            Every product is built in-house and runs on its own space under
            kstechx.com. Tap any product to see the details.
          </p>
        </div>
      </section>

      <section className="section pt0">
        <div className="container">
          <div className="grid">
            {products.map((p) => (
              <TiltCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Powered by</span>
          <h2 className="section-title reveal">Best-in-class technology, built in</h2>
          <p className="section-sub reveal">
            Payments, delivery and messaging you can trust — integrated so your
            business works out of the box.
          </p>
          <div className="partner-marquee reveal">
            <div className="partner-track">
              {[...integrations, ...integrations].map((p, i) => (
                <span key={i} className="partner-chip">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
