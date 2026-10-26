"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "WORK" },
    { href: "/services", label: "SERVICES" },
    { href: "/ai-lab", label: "AI LAB" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-sm font-mono-ui border-b border-line bg-white/90">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium tracking-tight text-ink">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-bright opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
          </span>
          AMANULLAH KHAN
        </Link>

        <ul className="hidden md:flex gap-5 text-xs text-sub">
          {links.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="tracking-wide transition-colors hover:text-accent"
              >
                [ {String(i).padStart(2, "0")} ] {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden meta uppercase text-ink border border-line px-3 py-1.5"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col border-t border-line bg-white px-6 py-4 gap-4 text-xs text-sub">
          {links.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="tracking-wide transition-colors hover:text-accent"
              >
                [ {String(i).padStart(2, "0")} ] {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}