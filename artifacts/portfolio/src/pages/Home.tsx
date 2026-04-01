import { Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";
import { InteractiveSection } from "@/components/InteractiveSection";
import { ContactSection } from "@/components/ContactSection";
import { Navigation } from "@/components/Navigation";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground font-sans">
      <CustomCursor />
      <Navigation />
      <main>
        <Suspense fallback={<div className="h-screen bg-background" />}>
          <HeroSection />
        </Suspense>
        <SkillsSection />
        <PortfolioSection />
        <AboutSection />
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <InteractiveSection />
        </Suspense>
        <ContactSection />
      </main>
      <footer className="py-12 text-center border-t border-border/50 bg-card/30 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <a
            href="#home"
            className="text-3xl font-bold font-sans tracking-tighter text-gradient interactive mb-6"
          >
            YUSUF.
          </a>
          <div className="flex gap-6 mb-8 text-sm font-mono text-muted-foreground uppercase tracking-widest">
            <a
              href="#skills"
              className="hover:text-primary transition-colors interactive"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="hover:text-primary transition-colors interactive"
            >
              Work
            </a>
            <a
              href="#about"
              className="hover:text-primary transition-colors interactive"
            >
              About
            </a>
          </div>
          <p className="font-mono text-xs text-muted-foreground opacity-60 flex items-center gap-2">
            <span className="text-primary">&copy;</span>{" "}
            {new Date().getFullYear()} YUSUF. All rights reserved.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
      </footer>
    </div>
  );
}
