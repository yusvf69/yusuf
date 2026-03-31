import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

export function CustomCursor() {
  const { x, y, isHovering } = useMousePosition();

  // On mobile, don't show the custom cursor
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <motion.div
      className={`custom-cursor ${isHovering ? "hover" : ""}`}
      animate={{
        x: x,
        y: y,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 300,
        mass: 50,
      }}
    />
  );
}
