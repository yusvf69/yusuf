import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.tagName === "A" || t.tagName === "BUTTON" ||
        t.closest("a") || t.closest("button") ||
        t.classList.contains("interactive")
      ) {
        setIsHovering(true);
      }
    };

    const out = () => setIsHovering(false);
    const leave = () => setIsVisible(false);
    const enter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {/* Precise dot — follows exactly */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
      >
        <div
          style={{ transform: "translate(-50%, -50%)" }}
          className="w-[6px] h-[6px] rounded-full bg-white"
        />
      </motion.div>

      {/* Ring — follows with spring lag */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.25 }, opacity: { duration: 0.2 } }}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
      >
        <div
          style={{ transform: "translate(-50%, -50%)" }}
          className={`w-[32px] h-[32px] rounded-full border transition-all duration-300 ${
            isHovering
              ? "border-accent bg-accent/15 shadow-[0_0_16px_2px_hsl(var(--accent)_/_40%)]"
              : "border-primary/70 bg-primary/5"
          }`}
        />
      </motion.div>

      {/* Outer aura — appears only on hover */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isHovering ? 1 : 0.4,
          opacity: isHovering && isVisible ? 0.35 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none fixed top-0 left-0 z-[9997]"
      >
        <div
          style={{ transform: "translate(-50%, -50%)" }}
          className="w-[64px] h-[64px] rounded-full bg-accent/20 blur-sm"
        />
      </motion.div>
    </>
  );
}
