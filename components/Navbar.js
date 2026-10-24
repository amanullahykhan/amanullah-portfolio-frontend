"use client";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/ai-lab", label: "AI Lab" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    
  ];

  return (
    <header className="w-full border-b border-zinc-200">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Amanullah Khan
        </Link>
        <ul className="flex gap-6 text-sm text-zinc-300">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}