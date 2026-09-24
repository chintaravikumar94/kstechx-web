"use client";

import { useEffect, useState } from "react";
import { webServices, fintech, CONTACT } from "../data";

const topics = [
  { value: "", label: "Choose a service…", disabled: true },
  ...fintech.map((f) => ({ value: f.slug, label: `💳 ${f.name}` })),
  ...webServices.flatMap((s) => [
    { value: s.slug, label: `${s.icon} ${s.name}` },
    ...(s.offerings.length > 1
      ? s.offerings.map((o) => ({ value: `${s.slug}::${o.title}`, label: `   — ${o.title}` }))
      : []),
  ]),
  { value: "partner", label: "🤝 KS TechX Partner (earn commission)" },
  { value: "support", label: "🛠️ Support — I'm an existing customer" },
  { value: "other", label: "Something else" },
];

/* which inbox gets the enquiry */
const inboxFor = (topic) =>
  topic === "support" ? CONTACT.emails.support : topic === "other" || !topic ? CONTACT.emails.info : CONTACT.emails.sales;

/* defaultTopic lets a page (e.g. a fintech detail page) pre-select the service */
export default function ContactForm({ defaultTopic = "", title }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", topic: defaultTopic, message: "" });
  const [sent, setSent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (defaultTopic) return;
    const q = new URLSearchParams(window.location.search).get("service");
    if (q && topics.some((t) => t.value === q)) setForm((f) => ({ ...f, topic: q }));
  }, [defaultTopic]);

  const update = (k) => (e) => {
    setError("");
    setForm({ ...form, [k]: e.target.value });
  };
  const topicLabel = (v) =>
    (topics.find((t) => t.value === v)?.label || v || "Enquiry").replace(/^[\s—]+/, "").trim();

  const summary = () =>
    `Name: ${form.name}\nPhone / WhatsApp: ${form.phone}\nEmail: ${form.email}\nCity / Town: ${form.city}\nInterested in: ${topicLabel(
      form.topic
    )}\n\n${form.message}`;

  const valid = () => {
    if (!form.name.trim()) return "Enter your name.";
    if (form.phone.replace(/\D/g, "").length < 10) return "Enter a valid 10-digit phone number.";
    if (!form.topic) return "Choose the service you're interested in.";
    return "";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const v = valid();
    if (v) return setError(v);
    const to = inboxFor(form.topic);
    const subject = encodeURIComponent(`[${topicLabel(form.topic)}] ${form.name}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${encodeURIComponent(summary())}`;
    setSent(to);
  };

  const sendWhatsApp = () => {
    const v = valid();
    if (v) return setError(v);
    const text = encodeURIComponent(`Hello KS TechX 👋\n\n${summary()}`);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, "_blank", "noopener");
    setSent("whatsapp");
  };

  return (
    <form className="contact-form reveal" onSubmit={sendEmail} noValidate>
      {title && <h3 className="form-title">{title}</h3>}
      <div className="field-row">
        <div className="field">
          <label>Your name</label>
          <input value={form.name} onChange={update("name")} placeholder="Ravi Kumar" />
        </div>
        <div className="field">
          <label>Phone / WhatsApp</label>
          <input type="tel" value={form.phone} onChange={update("phone")} placeholder="98765 43210" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label>Email (optional)</label>
          <input type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" />
        </div>
        <div className="field">
          <label>City / Town</label>
          <input value={form.city} onChange={update("city")} placeholder="Vijayawada" />
        </div>
      </div>
      <div className="field">
        <label>I&apos;m interested in</label>
        <select value={form.topic} onChange={update("topic")}>
          {topics.map((t) => (
            <option key={t.value || "none"} value={t.value} disabled={t.disabled}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label>Message</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us a little about what you need"
        />
      </div>
      {error && <p className="form-error">{error}</p>}
      <div className="form-actions">
        {CONTACT.whatsapp && (
          <button type="button" className="btn btn-wa btn-lg" onClick={sendWhatsApp}>
            💬 Send on WhatsApp
          </button>
        )}
        <button type="submit" className="btn btn-primary btn-lg">
          ✉️ Send by email
        </button>
      </div>
      <p className="form-note">
        {sent === "whatsapp"
          ? "WhatsApp opened with your details — just press send."
          : sent
          ? `Your email app opened with everything filled in for ${sent} — just press send.`
          : `Prefer to talk? Call ${CONTACT.phone}.`}
      </p>
    </form>
  );
}
