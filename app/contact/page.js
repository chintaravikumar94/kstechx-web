import ContactForm from "../components/ContactForm";
import { PageHero } from "../components/Blocks";
import { CONTACT } from "../data";

export const metadata = {
  title: "Contact",
  description:
    "Contact KS TechX — call or WhatsApp +91 99494 99177, or email info@kstechx.com for fintech IDs, websites, software, Android apps and the partner program.",
};

const desks = [
  {
    icon: "📞",
    title: "Call us",
    text: "Speak directly with our team about fintech IDs, websites, software or apps.",
    label: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: "💬",
    title: "WhatsApp",
    text: "The fastest way to reach us — send your query and documents on WhatsApp.",
    label: "Chat on WhatsApp",
    href: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hello KS TechX, I'd like to know more about your services.")}`,
    external: true,
  },
  {
    icon: "✉️",
    title: "Email",
    text: "For detailed requirements, proposals and documents.",
    label: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
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
            {desks
              .filter((d) => d.title !== "WhatsApp" || CONTACT.whatsapp)
              .map((d, i) => (
                <a
                  key={d.title}
                  href={d.href}
                  className="desk reveal"
                  data-d={String(i + 1)}
                  {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="desk-icon">{d.icon}</span>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <strong className="desk-mail">{d.label}</strong>
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
            <a className="contact-line" href={`mailto:${CONTACT.email}`}>
              ✉️ {CONTACT.email}
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
