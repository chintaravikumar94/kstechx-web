/* KS TechX wordmark
   • variant="light" → for light backgrounds (header)
   • variant="dark"  → for dark backgrounds (footer): white "tech", brighter X
   Source files: /public/brand/ (full-size master: kstechx-logo-full.png) */
export default function Logo({ variant = "light", className = "" }) {
  const base = `/brand/kstechx-logo-${variant}`;
  return (
    <picture className={`brand-logo ${className}`}>
      <source srcSet={`${base}.webp`} type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${base}.png`} alt="KS TechX" width="414" height="96" decoding="async" />
    </picture>
  );
}
