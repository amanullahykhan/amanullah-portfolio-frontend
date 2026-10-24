"use client";
import Link from "next/link";

export default function Navbar() {
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
        <Link href="/" className="text-sm font-medium tracking-tight text-ink">
          AMANULLAH KHAN
        </Link>
        <ul className="flex gap-5 text-xs text-sub">
          {links.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="tracking-wide transition-colors hover:text-ink"
              >
                [ {String(i).padStart(2, "0")} ] {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}