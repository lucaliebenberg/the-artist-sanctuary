"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { navLinks } from "@/data/navigation";
import { MobileNav } from "./MobileNav";

export function Header() {
  const scrolled = useScrollHeader();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-serif text-xl font-bold tracking-tight text-charcoal"
        >
          Sanctuary Studios
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-charcoal/80 transition-colors hover:text-terracotta-dark"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
