import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with KS TechX (Kumara Swamy Technologies) — for business setup, the partner program, or support.",
};

export default function Contact() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Contact</span>
          <h1 className="reveal">Let&apos;s talk</h1>
          <p className="page-lead reveal" data-d="1">
            Questions about getting online, the partner program or a product?
            Send us a message and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="section pt0">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            <h3>Reach us directly</h3>
            <a className="contact-line" href="mailto:bizfree@kstechx.com">
              ✉️ bizfree@kstechx.com
            </a>
            <a className="contact-line" href="https://biz.kstechx.com">
              🌐 biz.kstechx.com
            </a>
            <p className="contact-addr">
              Kumara Swamy Technologies
              <br />
              Andhra Pradesh, India 🇮🇳
              <br />
              GSTIN 37AYPPC2454H2ZB
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
