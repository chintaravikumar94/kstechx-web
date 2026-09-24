import Link from "next/link";
import Illustration from "../components/Illustration";
import { PageHero, FintechCards, OnboardingSteps, Faq, PartnerBand, CtaBand } from "../components/Blocks";
import { fintech, fintechIntro } from "../data";

export const metadata = {
  title: "Fintech Solutions — AEPS, UPI & Credit Card Merchant IDs",
  description:
    "Apply for AEPS Retailer ID, UPI Cash Withdrawal Merchant ID, Credit Card Withdrawal Merchant ID and RuPay Credit Card Withdrawal Merchant ID with KS TechX.",
};

const compare = [
  { label: "Customer pays with", key: ["Aadhaar + fingerprint", "Any UPI app", "Visa / Mastercard credit card", "RuPay credit card (incl. on UPI)"] },
  { label: "Device needed", key: ["Biometric (RD) device + phone", "Phone + QR", "Phone / PC", "Phone + QR"] },
  { label: "Business proof", key: ["Not always required", "If available", "Required", "Required"] },
];

const commonFaqs = [
  {
    q: "Can I take more than one ID?",
    a: "Yes. Many retailers combine AEPS with UPI and card merchant IDs so they can serve every customer who walks in.",
  },
  {
    q: "Is there any training?",
    a: "Yes. After activation our team trains you on the app, daily operations and best practices.",
  },
  {
    q: "What rules must I follow?",
    a: "Complete KYC is mandatory, and every transaction must be genuine and follow RBI, NPCI and card-network guidelines. Misuse can lead to an ID being blocked.",
  },
];

export default function FintechPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Fintech" }]}
        kicker="Fintech Solutions"
        title={fintechIntro.tagline}
        lead={fintechIntro.summary}
        art={fintechIntro.art}
      >
        <div className="hero-cta reveal" data-d="2">
          <a href="#ids" className="btn btn-primary btn-lg">
            View all IDs ↓
          </a>
          <Link href="/contact?service=aeps-retailer-id" className="btn btn-ghost btn-lg">
            Talk to an expert
          </Link>
        </div>
        <div className="fx-strip left reveal" data-d="3">
          {fintech.map((f) => (
            <Link key={f.slug} href={`/fintech/${f.slug}`} className="fx-strip-item">
              <span>{f.icon}</span>
              {f.name}
            </Link>
          ))}
        </div>
      </PageHero>

      {/* ID VISUAL GALLERY */}
      <section className="section pt0">
        <div className="container">
          <div className="id-gallery">
            {fintech.map((f, i) => (
              <Link key={f.slug} href={`/fintech/${f.slug}`} className="id-gal reveal" data-d={String(i + 1)}>
                <div className="id-gal-art">
                  <Illustration name={f.art} />
                </div>
                <strong>{f.name}</strong>
                <span>{f.badge} · View details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ID CARDS */}
      <section id="ids" className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Choose your ID</span>
          <h2 className="section-title reveal">Four IDs. One trusted partner.</h2>
          <p className="section-sub reveal">
            Every card below shows what you can offer, what documents you need and
            what equipment is required. Tap <strong>View details</strong> for the
            full guide, or <strong>Apply for ID</strong> to start.
          </p>
          <FintechCards items={fintech} />
        </div>
      </section>

      {/* COMPARE */}
      <section className="section">
        <div className="container">
          <span className="kicker reveal">Compare</span>
          <h2 className="section-title reveal">Which ID is right for you?</h2>
          <div className="compare-wrap reveal">
            <table className="compare">
              <thead>
                <tr>
                  <th></th>
                  {fintech.map((f) => (
                    <th key={f.slug}>
                      <span>{f.icon}</span>
                      {f.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row.label}>
                    <td className="compare-label">{row.label}</td>
                    {row.key.map((v, i) => (
                      <td key={i}>{v}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="compare-label"></td>
                  {fintech.map((f) => (
                    <td key={f.slug}>
                      <Link href={`/fintech/${f.slug}#apply`} className="compare-apply">
                        Apply →
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section className="section section-alt">
        <div className="container">
          <span className="kicker reveal">Onboarding</span>
          <h2 className="section-title reveal">Get your ID in four simple steps</h2>
          <p className="section-sub reveal">
            Our team handles the paperwork and guides you until your ID is live.
          </p>
          <OnboardingSteps />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container narrow">
          <span className="kicker reveal">FAQ</span>
          <h2 className="section-title reveal">Common questions</h2>
          <div style={{ marginTop: 40 }}>
            <Faq items={commonFaqs} />
          </div>
        </div>
      </section>

      <PartnerBand />

      <CtaBand
        title="Ready to start earning at your counter?"
        text="Apply for your fintech ID today — our team guides you from KYC to go-live."
        primary={{ href: "/fintech/aeps-retailer-id#apply", label: "Apply for AEPS ID" }}
        secondary={{ href: "/contact", label: "Talk to an expert" }}
      />
    </main>
  );
}
