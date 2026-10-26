"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedHeadline({ text, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const words = el.querySelectorAll(".word-inner");

    if (mediaQuery.matches) {
      gsap.set(words, { y: 0, opacity: 1 });
      return;
    }

    gsap.set(words, { y: "100%", opacity: 0 });
    gsap.to(words, {
      y: "0%",
      opacity: 1,
      duration: 0.7,
      stagger: 0.06,
      ease: "power3.out",
      delay: 0.1,
    });
  }, []);

  const words = text.split(" ");

  return (
    <h1 ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <span className="word-inner inline-block">
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </h1>
  );
}