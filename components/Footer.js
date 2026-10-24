"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-line mt-24 font-mono-ui">
      <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-xs text-sub">
        <span>© {year ?? ""} AMANULLAH KHAN</span>
        <div className="flex gap-5">
          <a
            href="https://github.com/amanullahykhan"
            target="_blank"
            rel="noopener noreferrer"
            className="tracking-wide transition-colors hover:text-ink"
          >
            GITHUB ↗
          </a>
          <a
            href="mailto:amanullahykhan@gmail.com"
            className="tracking-wide transition-colors hover:text-ink"
          >
            EMAIL ↗
          </a>
        </div>
      </div>
    </footer>
  );
}