"use client";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-zinc-200 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-zinc-400">
        <span>&copy; {year ?? ""} Amanullah Khan</span>
        <div className="flex gap-4">
          <a href="https://github.com/amanullahykhan" target="_blank" rel="noopener noreferrer" className="hover:text--white-400">
            GitHub
          </a>
          <a href="mailto:amanullahykhan@gmail.com" className="hover:text--white-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}