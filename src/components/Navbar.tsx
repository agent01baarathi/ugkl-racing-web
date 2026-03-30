"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/racing-events", label: "Racing Events" },
  { href: "/results", label: "Results" },
  { href: "/innovation", label: "Innovation" },
  { href: "/about", label: "About" },
  { href: "/news", label: "FPV News" },
  { href: "/sponsorship", label: "Sponsorship" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold tracking-wider text-accent">
            UGKL
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-300 hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <span className="text-sm text-gray-600 cursor-not-allowed">
              Shop
            </span>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-300 hover:text-accent"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-card-border bg-[#0a0a0a]">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-gray-300 hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <span className="block py-2 text-sm text-gray-600 cursor-not-allowed">
              Shop (Coming Soon)
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
