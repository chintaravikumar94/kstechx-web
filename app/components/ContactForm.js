"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { webServices, fintech, CONTACT, PARTNER_JOIN } from "../data";

const topics = [
  { value: "", label: "Choose a service…", disabled: true },
  ...webServices.flatMap((s) => [
    { value: s.slug, label: `${s.icon} ${s.name}` },
    ...(s.offerings.length > 1
      ? s.offerings.map((o) => ({ value: `${s.slug}::${o.title}`, label: `   — ${o.title}` }))
      : []),
  ]),
  ...fintech.map((f) => ({ value: f.slug, label: `💳 ${f.name}` })),
  { value: "partner", label: `🤝 Join as KS TechX Partner — purchase ${PARTNER_JOIN.minPurchase}+ product` },
  { value: "support", label: "🛠️ Support — I'm an existing customer" },
  { value: "other", label: "Something else" },
];

/* Extra guidance shown under the dropdown for some choices */
const TOPIC_HELP = {
  partner: {
    icon: "🤝",
    title: `Partner entry: purchase any one KS TechX product worth ${PARTNER_JOIN.minPurchase} or more`,
    text: "Use the product in your own business, then start earning commission on every sale you refer. Tell us which product you'd like to buy — we'll share the price, process and partner onboarding.",
    link: { href: "/partners", label: "How the partner program works →" },
    placeholder: `e.g. I want to join as a partner. I'd like to buy a business website (or another product worth ${PARTNER_JOIN.minPurchase}+).`,
    line: `Partner entry: I understand I need to purchase any one KS TechX product worth ${PARTNER_JOIN.minPurchase} or more.`,
  },
  "whatsapp-chatbot": {
    icon: "🎁",
    title: "Mera Chat Mitra is FREE for KS TechX clients",
    text: "Already bought a KS TechX service? Mention your name or invoice number and we'll activate your free Mitra. New? Tell us about your business and we'll suggest the best option.",
    link: { href: "/web-services/whatsapp-chatbot", label: "See Mera Chat Mitra →" },
    placeholder: "e.g. I'm a KS TechX client (website, 2025) — please activate my free Mitra. / I run a sweet shop and want WhatsApp orders.",
  },
};

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
    )}${TOPIC_HELP[form.topic]?.line ? `\n${TOPIC_HELP[form.topic].line}` : ""}\n\n${form.message}`;

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
    const to = CONTACT.email;
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
          <input value={form.city} onChange={update("city")} placeholder="Your town / city" />
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
        {TOPIC_HELP[form.topic] && (
          <div className="topic-help">
            <span className="topic-help-ico">{TOPIC_HELP[form.topic].icon}</span>
            <div>
              <b>{TOPIC_HELP[form.topic].title}</b>
              <p>{TOPIC_HELP[form.topic].text}</p>
              <Link href={TOPIC_HELP[form.topic].link.href}>{TOPIC_HELP[form.topic].link.label}</Link>
            </div>
          </div>
        )}
      </div>
      <div className="field">
        <label>Message</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder={TOPIC_HELP[form.topic]?.placeholder || "Tell us a little about what you need"}
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
          ? "Your email app opened with everything filled in — just press send."
          : `Prefer to talk? Call ${CONTACT.phone}.`}
      </p>
    </form>
  );
}
