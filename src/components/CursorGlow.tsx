"use client";

import { useEffect, useRef } from "react";

// A soft glowing circle that follows the mouse with a slight delay.
// Only runs on devices with a real mouse, and not when the user prefers reduced motion.
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!glow || !hasMouse || reduceMotion) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      glow.style.opacity = "1";
    };
    const onLeave = () => {
      glow.style.opacity = "0";
    };
    const animate = () => {
      x += (targetX - x) * 0.15; // 0.15 = how quickly it catches up
      y += (targetY - y) * 0.15;
      glow.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[60] size-10 rounded-full border border-brand-blue/40 bg-brand-blue/15 opacity-0 shadow-[0_0_40px_8px] shadow-brand-violet/30 transition-opacity duration-300"
    />
  );
}
