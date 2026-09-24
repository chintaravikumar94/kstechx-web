"use client";

import { useEffect, useState } from "react";
import { services, CONTACT_EMAIL } from "../data";

const topics = [
  ...services.flatMap((s) => [
    { value: s.slug, label: s.name, group: true },
    ...s.offerings.map((o) => ({ value: `${s.slug}::${o.title}`, label: `— ${o.title}` })),
  ]),
  { value: "partner", label: "KS TechX Partner (earn commission)", group: true },
  { value: "other", label: "Something else", group: true },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", topic: "", message: "" });
  const [sent, setSent] = useState(false);

  // pre-select service from ?service=slug (read on client, no Suspense needed)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("service");
    if (q && topics.some((t) => t.value === q)) setForm((f) => ({ ...f, topic: q }));
  }, []);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const topicLabel = (v) => (topics.find((t) => t.value === v)?.label || v).replace(/^— /, "");

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${topicLabel(form.topic) || "Enquiry"}] ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nInterested in: ${topicLabel(
        form.topic
      )}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form className="contact-form reveal" onSubmit={onSubmit}>
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
      <div className="field">
        <label>Email (optional)</label>
        <input type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" />
      </div>
      <div className="field">
        <label>I&apos;m interested in</label>
        <select value={form.topic} onChange={update("topic")} required>
          <option value="" disabled>
            Choose a service…
          </option>
          {topics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label>Message</label>
        <textarea
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us a little about what you need…"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg">
        Send enquiry →
      </button>
      {sent && (
        <p className="form-note">
          Your email app should open with the enquiry ready to send. If it
          didn&apos;t, email us at <strong>{CONTACT_EMAIL}</strong>.
        </p>
      )}
    </form>
  );
}
