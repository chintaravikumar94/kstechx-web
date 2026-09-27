/* Founder card — full version (About page) and compact version (home).
   Shows /public/team/founder.jpg when the file exists, otherwise initials. */
import fs from "fs";
import path from "path";
import Link from "next/link";
import { FOUNDER, CONTACT, ADDRESS } from "../data";

function hasPhoto() {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", FOUNDER.photo));
  } catch (e) {
    return false;
  }
}

/* crisp line icons (24×24) */
const PATHS = {
  chat: <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.6A8.5 8.5 0 1 1 21 11.5z" />,
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3 6.5l9 6.5 9-6.5" />
    </>
  ),
  linkedin: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" />
      <path d="M7.5 10.5v6M7.5 7.5v.01M11.5 16.5v-6M11.5 13c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5v3.5" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 9h4a1 1 0 0 1 1 1v11M3 21h18" />
      <path d="M8 8h3M8 12h3M8 16h3" />
    </>
  ),
  receipt: (
    <>
      <path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5M3 17.5l9 5 9-5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.8-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.7-7.5-9.5V6L12 3z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

function Icon({ name, size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
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
      <span className="fc-verified" title="Verified founder">
        <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
          <path d="M6.5 12.5l3.5 3.5 7.5-8" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

function Actions() {
  const first = FOUNDER.name.split(" ")[1] || FOUNDER.name;
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hi ${first}, I'd like to talk about KS TechX services.`)}`;
  return (
    <div className="fc-actions">
      {CONTACT.whatsapp && (
        <a href={wa} target="_blank" rel="noopener noreferrer" className="fc-act fc-act-wa" aria-label="WhatsApp the founder" title="WhatsApp">
          <Icon name="chat" />
        </a>
      )}
      <a href={CONTACT.phoneHref} className="fc-act fc-act-call" aria-label={`Call ${CONTACT.phone}`} title="Call">
        <Icon name="phone" />
      </a>
      <a href={`mailto:${CONTACT.email}`} className="fc-act fc-act-mail" aria-label={`Email ${CONTACT.email}`} title="Email">
        <Icon name="mail" />
      </a>
      {FOUNDER.linkedin && (
        <a href={FOUNDER.linkedin} target="_blank" rel="noopener noreferrer" className="fc-act fc-act-in" aria-label="LinkedIn" title="LinkedIn">
          <Icon name="linkedin" />
        </a>
      )}
    </div>
  );
}

export default function FounderCard({ compact = false }) {
  if (compact) {
    return (
      <div className="fc2 fc2-compact reveal">
        <Avatar size={104} />
        <div className="fc2c-body">
          <span className="fc2-kicker">Meet the founder</span>
          <div className="fc2c-namerow">
            <h3 className="fc2-name">{FOUNDER.name}</h3>
            <span className="fc2-pill">{FOUNDER.role}</span>
          </div>
          <p className="fc2c-quote">“{FOUNDER.short}”</p>
        </div>
        <div className="fc2c-cta">
          <Link href="/about#founder" className="btn btn-primary fc2c-btn">
            Founder&apos;s message <Icon name="arrow" size={16} />
          </Link>
          <Actions />
        </div>
      </div>
    );
  }

  return (
    <article className="fc2 reveal" id="founder">
      <aside className="fc2-side">
        <span className="fc2-glow" aria-hidden="true" />
        <Avatar size={184} />
        <h3 className="fc2-name">{FOUNDER.name}</h3>
        <span className="fc2-pill">{FOUNDER.role}</span>
        <p className="fc2-company">{FOUNDER.company}</p>
        <Actions />
        <div className="fc2-verified">
          <Icon name="shield" size={16} />
          <span>
            GST-registered · <strong>{ADDRESS.gstin}</strong>
          </span>
        </div>
      </aside>

      <div className="fc2-main">
        <span className="fc2-kicker">Founder&apos;s message</span>
        <h2 className="fc2-title">
          Built on trust, <span>delivered by our own team</span>
        </h2>
        <blockquote className="fc2-quote">
          <svg className="fc2-qmark" viewBox="0 0 48 36" aria-hidden="true">
            <path d="M0 36V22C0 9.6 6.4 2.3 19.2 0l2 5.2C14 7 10.6 11 10.2 17H20v19H0zm28 0V22C28 9.6 34.4 2.3 47.2 0l2 5.2C42 7 38.6 11 38.2 17H48v19H28z" />
          </svg>
          <p>{FOUNDER.message}</p>
          <footer>
            <span className="fc2-sign">{FOUNDER.name}</span>
            <span className="fc2-sign-role">{FOUNDER.role}, KS TechX</span>
          </footer>
        </blockquote>
        <ul className="fc2-facts">
          {FOUNDER.facts.map((f, i) => (
            <li key={f.label} className={`t${i % 4}`}>
              <span className="fc2-fi">
                <Icon name={f.icon} />
              </span>
              {f.label}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
