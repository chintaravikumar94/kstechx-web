"use client";

/* =========================================================
   WhatsApp Assist — floating button + smart chat card
   • Context-aware quick options (changes per page)
   • Every option opens WhatsApp with a ready-written message
   • Official WhatsApp icon: save it as /public/icons/whatsapp.svg
     (from WhatsApp's brand resources). Until then a chat icon is used.
   ========================================================= */

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CONTACT, fintech, webServices } from "../data";

function ChatGlyph() {
  // generic chat-bubble icon (fallback until the official icon file is added)
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
      <path
        d="M12 3C7 3 3 6.6 3 11c0 2.3 1.1 4.4 2.9 5.9L5 21l4.4-2.2c.8.2 1.7.3 2.6.3 5 0 9-3.6 9-8s-4-8-9-8z"
        fill="#fff"
      />
      <circle cx="8.5" cy="11" r="1.3" fill="#128c7e" />
      <circle cx="12" cy="11" r="1.3" fill="#128c7e" />
      <circle cx="15.5" cy="11" r="1.3" fill="#128c7e" />
    </svg>
  );
}

function WaIcon({ size = 30 }) {
  const [ok, setOk] = useState(true);
  if (!ok) return <ChatGlyph />;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/icons/whatsapp.svg" width={size} height={size} alt="" onError={() => setOk(false)} />
  );
}

/* quick options that adapt to the page the visitor is on */
export function optionsFor(path) {
  const base = [
    { icon: "💳", label: "Apply for a Fintech ID", msg: "I want to apply for a Fintech ID (AEPS / UPI / Credit card merchant ID)." },
    { icon: "🌐", label: "Website development quote", msg: "I need a quote for website development." },
    { icon: "🧩", label: "Custom software or Android app", msg: "I want to discuss a custom software / Android app project." },
    { icon: "🤝", label: "Become a KS TechX Partner", msg: "I want to become a KS TechX Partner and earn commission." },
    { icon: "🛠️", label: "Support for my existing service", msg: "I'm an existing customer and need support." },
  ];
  let top = null;
  const parts = path.split("/").filter(Boolean);
  if (parts[0] === "fintech" && parts[1]) {
    const f = fintech.find((x) => x.slug === parts[1]);
    if (f) top = { icon: f.icon, label: `Apply for ${f.name}`, msg: `I want to apply for the ${f.name}. Please share the process and documents needed.` };
  } else if (parts[0] === "web-services" && parts[1]) {
    const s = webServices.find((x) => x.slug === parts[1]);
    const o = s && parts[2] && s.offerings.find((x) => x.slug === parts[2]);
    if (o) top = { icon: o.icon, label: `Quote for ${o.title.replace(/ \(.*\)/, "")}`, msg: `I'd like a quote for a ${o.title}.` };
    else if (s) top = { icon: s.icon, label: `Quote for ${s.name}`, msg: `I'd like a quote for ${s.name}.` };
  } else if (parts[0] === "partners") {
    top = { icon: "🤝", label: "Join as a KS TechX Partner", msg: "I want to become a KS TechX Partner. Please explain the onboarding process." };
  }
  if (!top) return base;
  return [{ ...top, featured: true }, ...base.filter((b) => b.label !== top.label && b.icon !== top.icon)].slice(0, 5);
}

export default function WhatsAppAssist() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [typing, setTyping] = useState(true);
  const panelRef = useRef(null);

  // gentle teaser bubble after a few seconds (once per visit)
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("ks-wa-teaser") === "1";
    } catch (e) {}
    if (seen) return;
    const t = setTimeout(() => setTeaser(true), 6000);
    return () => clearTimeout(t);
  }, []);

  // typing animation each time the card opens
  useEffect(() => {
    if (!open) return;
    setTyping(true);
    const t = setTimeout(() => setTyping(false), 900);
    return () => clearTimeout(t);
  }, [open]);

  // close on Escape / outside click
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  if (!CONTACT.whatsapp) return null;

  const hideTeaser = () => {
    setTeaser(false);
    try {
      sessionStorage.setItem("ks-wa-teaser", "1");
    } catch (e) {}
  };

  const chat = (msg, label) => {
    const text = `Hi KS TechX 👋\n${msg}\n\n(From: kstechx.com${pathname === "/" ? "" : pathname})`;
    try {
      window.dataLayer && window.dataLayer.push({ event: "whatsapp_chat", topic: label || "general", page: pathname });
    } catch (e) {}
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setOpen(false);
  };

  const options = optionsFor(pathname);

  return (
    <div className="wa-assist" ref={panelRef}>
      {open && (
        <div className="wa-card" role="dialog" aria-label="Chat with KS TechX on WhatsApp">
          <div className="wa-head">
            <span className="wa-avatar">KS</span>
            <div className="wa-who">
              <strong>KS TechX</strong>
              <em>
                <span className="wa-dot" /> Chat with us on WhatsApp
              </em>
            </div>
            <button className="wa-close" aria-label="Close" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>

          <div className="wa-body">
            {typing ? (
              <div className="wa-bubble wa-typing" aria-label="Typing">
                <span />
                <span />
                <span />
              </div>
            ) : (
              <div className="wa-bubble">
                Hi 👋 Welcome to <strong>KS TechX</strong>.
                <br />
                How can we help you today? Pick an option and we&apos;ll continue on WhatsApp.
              </div>
            )}

            {!typing && (
              <div className="wa-options">
                {options.map((o) => (
                  <button
                    key={o.label}
                    className={`wa-opt ${o.featured ? "featured" : ""}`}
                    onClick={() => chat(o.msg, o.label)}
                  >
                    <span className="wa-opt-icon">{o.icon}</span>
                    <span className="wa-opt-label">{o.label}</span>
                    <span className="wa-opt-go">›</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="wa-foot">
            <button className="wa-start" onClick={() => chat("I'd like to know more about your services.", "general")}>
              <WaIcon size={20} /> Start chat
            </button>
            <a className="wa-call" href={CONTACT.phoneHref}>
              📞 Or call {CONTACT.phone}
            </a>
          </div>
        </div>
      )}

      {teaser && !open && (
        <div className="wa-teaser">
          <button className="wa-teaser-x" aria-label="Dismiss" onClick={hideTeaser}>
            ×
          </button>
          <button
            className="wa-teaser-text"
            onClick={() => {
              hideTeaser();
              setOpen(true);
            }}
          >
            Need help? <strong>Chat with us</strong> 👋
          </button>
        </div>
      )}

      <button
        className={`wa-fab ${open ? "is-open" : ""}`}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        aria-expanded={open}
        onClick={() => {
          hideTeaser();
          setOpen((v) => !v);
        }}
      >
        <span className="wa-ring" aria-hidden="true" />
        {open ? <span className="wa-fab-x">×</span> : <WaIcon />}
      </button>
    </div>
  );
}
