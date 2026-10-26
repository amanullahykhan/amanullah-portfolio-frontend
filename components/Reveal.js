"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(el, { opacity: 0, y: 24 });

    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}