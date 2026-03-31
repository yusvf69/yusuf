import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Three.js / WebGL", level: 90, category: "Code" },
  { name: "React / TypeScript", level: 85, category: "Code" },
  { name: "Blender / 3D Modeling", level: 80, category: "3D" },
  { name: "UI/UX Design", level: 85, category: "Design" },
  { name: "Digital Marketing", level: 75, category: "Strategy" },
  { name: "Node.js / APIs", level: 80, category: "Code" },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-primary"></div>
            <span className="font-mono text-primary uppercase tracking-widest text-sm">Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight mb-6">Technical Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Mastery across multiple disciplines allows me to bridge the gap between technical execution and creative vision. I don't just design; I engineer experiences.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {skills.map((skill, index) => (
            <div key={skill.name} className="relative group">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-sm uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                <span className="font-mono text-sm text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-primary to-accent relative"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/40 blur-[4px] animate-pulse" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
