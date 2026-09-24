"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", topic: "Business", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.topic}] Enquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
    );
    window.location.href = `mailto:bizfree@kstechx.com?subject=${subject}&body=${body}`;
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
          <label>Email</label>
          <input type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" required />
        </div>
      </div>
      <div className="field">
        <label>I&apos;m interested in</label>
        <select value={form.topic} onChange={update("topic")}>
          <option>Business</option>
          <option>Partner Program</option>
          <option>Done-for-you setup</option>
          <option>Digital products</option>
          <option>Support</option>
        </select>
      </div>
      <div className="field">
        <label>Message</label>
        <textarea
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us a little about what you need…"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-lg">
        Send message →
      </button>
      {sent && (
        <p className="form-note">
          Your email app should open with the message ready to send. If it
          didn&apos;t, email us directly at <strong>bizfree@kstechx.com</strong>.
        </p>
      )}
    </form>
  );
}
