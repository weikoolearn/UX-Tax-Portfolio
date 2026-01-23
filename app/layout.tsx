import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yiwei Wei | UX Designer with Tax Experience",
  description:
    "A modern UX portfolio focused on tax, compliance, and financial service experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <header className="site-header">
            <div className="brand">
              <span className="brand-title">Yiwei Wei</span>
              <span className="brand-subtitle">
                UX Designer • Tax-Focused Experience
              </span>
            </div>
            <nav className="site-nav">
              <a href="/">Home</a>
              <a href="/projects">Projects</a>
              <a href="/about">About</a>
            </nav>
          </header>

          <main className="site-main">{children}</main>

          <footer className="site-footer">
            <span>
              Specialized in UX for tax, compliance, and financial platforms.
            </span>
            <span>© 2026 Yiwei Wei</span>
          </footer>
        </div>
      </body>
    </html>
  );
}