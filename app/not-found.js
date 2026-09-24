import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main>
      <section className="page-hero" style={{ textAlign: "center" }}>
        <div className="container">
          <span className="kicker">404</span>
          <h1>This page took a wrong turn</h1>
          <p className="page-lead" style={{ margin: "16px auto 28px" }}>
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
            you back on track.
          </p>
          <div className="hero-cta center">
            <Link href="/" className="btn btn-primary btn-lg">
              Back to home
            </Link>
            <Link href="/fintech" className="btn btn-ghost btn-lg">
              Fintech IDs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
