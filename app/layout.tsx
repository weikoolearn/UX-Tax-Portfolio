import "./globals.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Yiwei Wei | UX Designer with Tax Experience",
  description:
    "A modern UX portfolio focused on tax, compliance, and financial service experiences."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
