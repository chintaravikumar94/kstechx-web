// KS monogram — same design as the favicon (app/icon.svg)
export default function Logo() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="5 7 22 18" width="26" height="22">
        <g fill="none" stroke="#fff" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.4 9.2v13.6M14.4 9.2 8.2 16l6.4 6.8" />
          <path d="M24.4 11.1c-.8-1.3-2-1.9-3.4-1.9-1.8 0-3.1 1.1-3.1 2.6 0 3.6 6.8 2.3 6.8 6.5 0 2.1-1.6 3.5-3.7 3.5-1.6 0-3-.8-3.8-2.1" />
        </g>
      </svg>
    </span>
  );
}
