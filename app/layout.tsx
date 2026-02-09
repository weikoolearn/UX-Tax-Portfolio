import "./globals.css";

export const metadata = {
  title: "Avery Chen | UX & Tax Experience Designer",
  description:
    "A modern UX portfolio focused on tax and financial service experiences."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <header className="site-header">
            <div className="brand">
              <span className="brand-title">Avery Chen</span>
              <span className="brand-subtitle">UX Designer • Tax-Focused</span>
            </div>
            <nav className="site-nav">
              <a href="/">Home</a>
              <a href="/projects">Projects</a>
              <a href="/about">About</a>
            </nav>
          </header>
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            <span>Available for collaboration in fintech and tax services.</span>
            <span>© 2024 Avery Chen</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
