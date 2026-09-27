/* Founder card — full version (About page) and compact version (home).
   Shows /public/team/founder.jpg when the file exists, otherwise initials. */
import fs from "fs";
import path from "path";
import Link from "next/link";
import { FOUNDER, CONTACT } from "../data";

function hasPhoto() {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", FOUNDER.photo));
  } catch (e) {
    return false;
  }
}

function Avatar({ size }) {
  const photo = hasPhoto();
  return (
    <div className="fc-avatar" style={{ "--fc-size": `${size}px` }}>
      <span className="fc-ring" aria-hidden="true" />
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={FOUNDER.photo} alt={`${FOUNDER.name}, ${FOUNDER.role} of KS TechX`} width={size} height={size} loading="lazy" decoding="async" />
      ) : (
        <span className="fc-initials" aria-label={FOUNDER.name}>
          {FOUNDER.initials}
        </span>
      )}
      <span className="fc-verified" title="Founder">
        ✓
      </span>
    </div>
  );
}

export default function FounderCard({ compact = false }) {
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hi ${FOUNDER.name.split(" ")[1] || FOUNDER.name}, I'd like to talk about KS TechX services.`)}`;

  if (compact) {
    return (
      <div className="fc fc-compact reveal">
        <Avatar size={96} />
        <div className="fc-body">
          <span className="fc-kicker">Meet the founder</span>
          <h3 className="fc-name">{FOUNDER.name}</h3>
          <p className="fc-role">
            {FOUNDER.role} · {FOUNDER.company}
          </p>
          <p className="fc-quote-short">“{FOUNDER.short}”</p>
        </div>
        <Link href="/about#founder" className="btn btn-ghost fc-more">
          Read the founder&apos;s message →
        </Link>
      </div>
    );
  }

  return (
    <article className="fc reveal" id="founder">
      <div className="fc-side">
        <Avatar size={176} />
        <h3 className="fc-name">{FOUNDER.name}</h3>
        <p className="fc-role">{FOUNDER.role}</p>
        <p className="fc-company">{FOUNDER.company}</p>
        <div className="fc-actions">
          {CONTACT.whatsapp && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="fc-act fc-act-wa" aria-label="WhatsApp the founder">
              💬
            </a>
          )}
          <a href={CONTACT.phoneHref} className="fc-act" aria-label={`Call ${CONTACT.phone}`}>
            📞
          </a>
          <a href={`mailto:${CONTACT.email}`} className="fc-act" aria-label={`Email ${CONTACT.email}`}>
            ✉️
          </a>
          {FOUNDER.linkedin && (
            <a href={FOUNDER.linkedin} target="_blank" rel="noopener noreferrer" className="fc-act fc-act-in" aria-label="LinkedIn">
              in
            </a>
          )}
        </div>
      </div>

      <div className="fc-main">
        <span className="kicker left">Founder&apos;s message</span>
        <h2 className="fc-title">Built on trust, delivered by our own team</h2>
        <blockquote className="fc-quote">
          <span className="fc-qmark" aria-hidden="true">
            “
          </span>
          <p>{FOUNDER.message}</p>
          <footer>
            <span className="fc-sign">{FOUNDER.name}</span>
            <span className="fc-sign-role">
              {FOUNDER.role}, KS TechX
            </span>
          </footer>
        </blockquote>
        <ul className="fc-facts">
          {FOUNDER.facts.map((f) => (
            <li key={f.label}>
              <span aria-hidden="true">{f.icon}</span>
              {f.label}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
