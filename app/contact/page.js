import ContactForm from "../components/ContactForm";
import { PageHero } from "../components/Blocks";
import { CONTACT_EMAIL } from "../data";

export const metadata = {
  title: "Contact",
  description:
    "Contact KS TechX for fintech IDs, website development, custom software, Android apps or the KS TechX Partner program.",
};

export default function Contact() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Let's talk"
        lead="Need a fintech ID, a website, custom software or an app — or want to become a partner? Send an enquiry and our team will get back to you."
      />

      <section className="section pt0">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            <h3>Reach us directly</h3>
            <a className="contact-line" href={`mailto:${CONTACT_EMAIL}`}>
              ✉️ {CONTACT_EMAIL}
            </a>
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
                Choose the exact service in the form — we&apos;ll reply with the
                right plan and documents needed.
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
