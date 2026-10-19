"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/outreach", label: "Outreach" },
  { href: "/campaigns", label: "Campaigns" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="container-page flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-baseline gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
        >
          <span className="font-display text-xl md:text-2xl text-dusk font-semibold">
            Food of Life
          </span>
          <span className="font-display italic text-base md:text-lg text-clay">
            Foundation
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] text-ink-soft hover:text-dusk transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/get-involved#donate" className="btn-primary">
            Give
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="lg:hidden p-2 -mr-2 text-dusk rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-line bg-paper">
          <nav aria-label="Mobile navigation" className="container-page flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[17px] text-ink border-b border-line last:border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/get-involved#donate"
              onClick={() => setOpen(false)}
              className="mt-4 btn-primary justify-center"
            >
              Give
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
