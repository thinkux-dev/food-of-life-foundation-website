import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Food of Life Foundation — Abuja, Nigeria",
  description:
    "Food of Life Foundation reaches the needy with food across the Nation — serving vulnerable families, widows, and children in Abuja and across Nigeria through food outreach, nutrition relief, and community empowerment.",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-dusk focus:text-paper focus:font-medium focus:text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
