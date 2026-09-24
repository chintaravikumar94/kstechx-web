"use client";

import { useEffect, useState } from "react";
import { webServices, fintech, CONTACT_EMAIL } from "../data";

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
  { value: "other", label: "Something else" },
];

/* defaultTopic lets a page (e.g. a fintech detail page) pre-select the service */
export default function ContactForm({ defaultTopic = "", title }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", topic: defaultTopic, message: "" });
  const [sent, setSent] = useState(false);

  // pre-select from ?service=slug (read on client — no Suspense needed)
  useEffect(() => {
    if (defaultTopic) return;
    const q = new URLSearchParams(window.location.search).get("service");
    if (q && topics.some((t) => t.value === q)) setForm((f) => ({ ...f, topic: q }));
  }, [defaultTopic]);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const topicLabel = (v) =>
    (topics.find((t) => t.value === v)?.label || v || "Enquiry").replace(/^[\s—]+/, "").trim();

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${topicLabel(form.topic)}] ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone / WhatsApp: ${form.phone}\nEmail: ${form.email}\nCity / Town: ${form.city}\nInterested in: ${topicLabel(
        form.topic
      )}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form className="contact-form reveal" onSubmit={onSubmit}>
      {title && <h3 className="form-title">{title}</h3>}
      <div className="field-row">
        <div className="field">
          <label>Your name</label>
          <input value={form.name} onChange={update("name")} placeholder="e.g. Ravi Kumar" required />
        </div>
        <div className="field">
          <label>Phone / WhatsApp</label>
          <input type="tel" value={form.phone} onChange={update("phone")} placeholder="+91" required />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label>Email (optional)</label>
          <input type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" />
        </div>
        <div className="field">
          <label>City / Town</label>
          <input value={form.city} onChange={update("city")} placeholder="e.g. Vijayawada" />
        </div>
      </div>
      <div className="field">
        <label>I&apos;m interested in</label>
        <select value={form.topic} onChange={update("topic")} required>
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
          placeholder="Tell us a little about what you need…"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg">
        Send application →
      </button>
      {sent && (
        <p className="form-note">
          Your email app should open with everything filled in — just press
          send. If it didn&apos;t, email us at <strong>{CONTACT_EMAIL}</strong>.
        </p>
      )}
    </form>
  );
}
