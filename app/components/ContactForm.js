"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { webServices, fintech, CONTACT, PARTNER_JOIN, LEAD_API } from "../data";

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
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", topic: defaultTopic, message: "", kx_trap: "" });
  const [state, setState] = useState("idle"); // idle | sending | done | failed
  const [ref, setRef] = useState("");
  const [error, setError] = useState("");
  const [sentWa, setSentWa] = useState(false);
  const [bad, setBad] = useState(""); // field with the error (for screen readers & focus)
  const doneRef = useRef(null);
  useEffect(() => {
    if (state === "done") doneRef.current?.focus();
  }, [state]);

  useEffect(() => {
    if (defaultTopic) return;
    const q = new URLSearchParams(window.location.search).get("service");
    if (q && topics.some((t) => t.value === q)) setForm((f) => ({ ...f, topic: q }));
  }, [defaultTopic]);

  const update = (k) => (e) => {
    setError("");
    setBad("");
    setForm({ ...form, [k]: e.target.value });
  };
  const topicLabel = (v) =>
    (topics.find((t) => t.value === v)?.label || v || "Enquiry").replace(/^[\s—]+/, "").trim();
  const phone10 = () => {
    const d = form.phone.replace(/\D/g, "");
    return d.length === 12 && d.startsWith("91") ? d.slice(2) : d.slice(-10);
  };

  const summary = (withRef = "") =>
    `${withRef ? `Reference: ${withRef}\n` : ""}Name: ${form.name}\nPhone / WhatsApp: ${form.phone}\nEmail: ${form.email}\nCity / Town: ${form.city}\nInterested in: ${topicLabel(
      form.topic
    )}${TOPIC_HELP[form.topic]?.line ? `\n${TOPIC_HELP[form.topic].line}` : ""}\n\n${form.message}`;

  const check = () => {
    if (form.name.trim().length < 2) return ["name", "Enter your name."];
    if (!/^[6-9]\d{9}$/.test(phone10())) return ["phone", "Enter a valid 10-digit mobile number."];
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return ["email", "Check your email address (or leave it empty)."];
    if (!form.topic) return ["topic", "Choose the service you're interested in."];
    return ["", ""];
  };
  const valid = () => {
    const [field, msg] = check();
    setBad(field);
    if (field) document.getElementById(`cf-${field}`)?.focus();
    return msg;
  };

  /* main action: save the enquiry + instant email to our team */
  const submit = async (e) => {
    e.preventDefault();
    const v = valid();
    if (v) return setError(v);
    setState("sending");
    setError("");
    const sp = new URLSearchParams(window.location.search);
    const utm = ["utm_source", "utm_medium", "utm_campaign"].map((k) => sp.get(k)).filter(Boolean).join(" / ");
    try {
      const r = await fetch(LEAD_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          name: form.name.trim(),
          topicLabel: topicLabel(form.topic) + (TOPIC_HELP[form.topic]?.line ? ` · ${TOPIC_HELP[form.topic].line}` : ""),
          page: window.location.pathname + (sp.get("service") ? `?service=${sp.get("service")}` : ""),
          utm: utm || (document.referrer && !document.referrer.includes(window.location.host) ? `referrer: ${document.referrer.slice(0, 120)}` : ""),
        }),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        setRef(j.ref);
        setState("done");
        if (typeof window.gtag === "function") window.gtag("event", "generate_lead", { event_category: "contact", event_label: form.topic });
        return;
      }
      setState(r.status >= 500 ? "failed" : "idle");
      setError(j.error || "Something went wrong. Please WhatsApp us instead.");
    } catch (err) {
      setState("failed");
      setError("Couldn't reach our server. Please send it on WhatsApp — it takes one tap.");
    }
  };

  const sendWhatsApp = (withRef = "") => {
    if (!withRef) {
      const v = valid();
      if (v) return setError(v);
    }
    const text = encodeURIComponent(`Hello KS TechX 👋\n\n${summary(withRef)}`);
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, "_blank", "noopener");
    setSentWa(true);
  };

  const reset = () => {
    setForm({ name: "", phone: "", email: "", city: "", topic: defaultTopic, message: "", kx_trap: "" });
    setRef("");
    setState("idle");
    setSentWa(false);
  };

  if (state === "done")
    return (
      <div className="contact-form lead-done" role="status" aria-live="polite">
        <div className="lead-done-tick">✓</div>
        <h3 ref={doneRef} tabIndex={-1}>
          Enquiry received, {form.name.trim().split(" ")[0]}! 🎉
        </h3>
        <p>
          Our team will call or WhatsApp you on <b>+91 {phone10()}</b> soon
          {CONTACT.hours ? ` (${CONTACT.hours})` : ""}.
          {form.email.trim() ? " We've also emailed you a copy." : ""}
        </p>
        <div className="lead-ref">
          <span>Your reference</span>
          <b>{ref}</b>
        </div>
        <div className="lead-done-summary">
          <span>🎯 {topicLabel(form.topic)}</span>
          {form.city && <span>📍 {form.city}</span>}
        </div>
        <div className="form-actions">
          {CONTACT.whatsapp && (
            <button type="button" className="btn btn-wa btn-lg" onClick={() => sendWhatsApp(ref)}>
              💬 Need it fast? Chat now
            </button>
          )}
          <button type="button" className="btn btn-ghost btn-lg" onClick={reset}>
            ➕ Send another enquiry
          </button>
        </div>
        <p className="form-note">{sentWa ? "WhatsApp opened with your reference — just press send." : `Prefer to talk? Call ${CONTACT.phone}.`}</p>
      </div>
    );

  return (
    <form className="contact-form reveal" onSubmit={submit} noValidate>
      {title && <h3 className="form-title">{title}</h3>}
      {/* hidden from people — only bots fill it */}
      <input className="hp-field" tabIndex={-1} autoComplete="new-password" aria-hidden="true" value={form.kx_trap} onChange={update("kx_trap")} name="kx_trap" />
      <div className="field-row">
        <div className="field">
          <label htmlFor="cf-name">Your name</label>
          <input id="cf-name" aria-invalid={bad === "name"} aria-describedby={bad === "name" ? "cf-err" : undefined} value={form.name} onChange={update("name")} placeholder="Ravi Kumar" autoComplete="name" maxLength={120} />
        </div>
        <div className="field">
          <label htmlFor="cf-phone">Phone / WhatsApp</label>
          <input id="cf-phone" aria-invalid={bad === "phone"} aria-describedby={bad === "phone" ? "cf-err" : undefined} type="tel" inputMode="tel" value={form.phone} onChange={update("phone")} placeholder="98765 43210" autoComplete="tel" maxLength={16} />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="cf-email">Email (optional)</label>
          <input id="cf-email" aria-invalid={bad === "email"} aria-describedby={bad === "email" ? "cf-err" : undefined} type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" autoComplete="email" maxLength={190} />
        </div>
        <div className="field">
          <label htmlFor="cf-city">City / Town</label>
          <input id="cf-city" value={form.city} onChange={update("city")} placeholder="Your town / city" autoComplete="address-level2" maxLength={80} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-topic">I&apos;m interested in</label>
        <select id="cf-topic" aria-invalid={bad === "topic"} aria-describedby={bad === "topic" ? "cf-err" : undefined} value={form.topic} onChange={update("topic")}>
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
        <label htmlFor="cf-msg">Message</label>
        <textarea
          id="cf-msg"
          rows={4}
          value={form.message}
          onChange={update("message")}
          maxLength={3000}
          placeholder={TOPIC_HELP[form.topic]?.placeholder || "Tell us a little about what you need"}
        />
      </div>
      {error && (
        <p className="form-error" role="alert" id="cf-err">
          {error}
        </p>
      )}
      <div className="form-actions">
        <button type="submit" className="btn btn-primary btn-lg" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "📩 Submit enquiry"}
        </button>
        {CONTACT.whatsapp && (
          <button type="button" className={`btn btn-lg ${state === "failed" ? "btn-wa" : "btn-ghost"}`} onClick={() => sendWhatsApp()}>
            💬 WhatsApp instead
          </button>
        )}
      </div>
      <p className="form-note">
        {sentWa
          ? "WhatsApp opened with your details — just press send."
          : state === "failed"
          ? (
            <>
              Or email us at <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`[${topicLabel(form.topic)}] ${form.name}`)}&body=${encodeURIComponent(summary())}`}>{CONTACT.email}</a> · Call {CONTACT.phone}
            </>
          )
          : `🔒 Your details go only to the KS TechX team. Prefer to talk? Call ${CONTACT.phone}.`}
      </p>
    </form>
  );
}
