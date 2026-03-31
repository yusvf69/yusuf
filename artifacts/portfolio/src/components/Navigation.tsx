import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg shadow-black/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold font-sans tracking-tighter text-gradient interactive">
          YUSUF.
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 text-sm font-mono uppercase tracking-wider text-muted-foreground">
            <a href="#skills" className="hover:text-primary transition-colors interactive">Skills</a>
            <a href="#portfolio" className="hover:text-primary transition-colors interactive">Portfolio</a>
            <a href="#about" className="hover:text-primary transition-colors interactive">About</a>
            <a href="#contact" className="hover:text-primary transition-colors interactive">Contact</a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
