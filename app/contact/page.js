import ContactForm from "../components/ContactForm";
import { PageHero } from "../components/Blocks";
import { CONTACT } from "../data";

export const metadata = {
  title: "Contact",
  description:
    "Contact KS TechX — call or WhatsApp +91 99494 99177, or email sales@kstechx.com for fintech IDs, websites, software, Android apps and the partner program.",
};

const desks = [
  {
    icon: "💼",
    title: "Sales & new enquiries",
    text: "Fintech ID applications, website / software / app quotes and partner enquiries.",
    email: CONTACT.emails.sales,
  },
  {
    icon: "🛠️",
    title: "Customer support",
    text: "Already a KS TechX customer? Get help with your ID, website or app.",
    email: CONTACT.emails.support,
  },
  {
    icon: "✉️",
    title: "General information",
    text: "Company information, collaborations and everything else.",
    email: CONTACT.emails.info,
  },
];

export default function Contact() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        art="contact"
        kicker="Contact"
        title="Let's talk"
        lead="Need a fintech ID, a website, custom software or an app — or want to become a partner? Call, WhatsApp or send an enquiry and our team will get back to you."
      >
        <div className="hero-cta reveal" data-d="2">
          <a href={CONTACT.phoneHref} className="btn btn-primary btn-lg">
            📞 Call {CONTACT.phone}
          </a>
          {CONTACT.whatsapp && (
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-lg"
            >
              💬 WhatsApp us
            </a>
          )}
        </div>
      </PageHero>

      {/* DEPARTMENT DESKS */}
      <section className="section pt0">
        <div className="container">
          <div className="desk-grid">
            {desks.map((d, i) => (
              <a key={d.email} href={`mailto:${d.email}`} className="desk reveal" data-d={String(i + 1)}>
                <span className="desk-icon">{d.icon}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <strong className="desk-mail">{d.email}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="section section-alt">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            <h3>Reach us directly</h3>
            <a className="contact-line" href={CONTACT.phoneHref}>
              📞 {CONTACT.phone}
            </a>
            {CONTACT.whatsapp && (
              <a
                className="contact-line"
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp: {CONTACT.phone}
              </a>
            )}
            <a className="contact-line" href={`mailto:${CONTACT.emails.sales}`}>
              💼 {CONTACT.emails.sales}
            </a>
            <a className="contact-line" href={`mailto:${CONTACT.emails.support}`}>
              🛠️ {CONTACT.emails.support}
            </a>
            {CONTACT.hours && <p className="contact-hours">🕘 {CONTACT.hours}</p>}
            <p className="contact-addr">
              Kumara Swamy Technologies
              <br />
              Andhra Pradesh, India 🇮🇳
              <br />
              GSTIN 37AYPPC2454H2ZB
            </p>
            <div className="contact-tip">
              <strong>Quick tip</strong>
              <span>
                Choose the exact service in the form — your enquiry goes straight
                to the right team, and we&apos;ll reply with the right plan and
                documents needed.
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
