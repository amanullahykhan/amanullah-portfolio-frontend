"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CountUp({ value, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");

  // Separate numeric part from suffix, e.g. "9+" -> 9, "+"
  const match = String(value).match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setDisplay(`${numeric}${suffix}`);
      return;
    }

    const obj = { val: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: numeric,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => setDisplay(`${Math.round(obj.val)}${suffix}`),
        });
      },
    });

    return () => trigger.kill();
  }, [numeric, suffix]);

  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  );
}