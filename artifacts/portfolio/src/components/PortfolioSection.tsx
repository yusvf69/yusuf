import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project Nova",
    category: "3D",
    image: "/projects/project1.png",
    desc: "Interactive 3D space station configurator built with Three.js and React."
  },
  {
    id: 2,
    title: "Neon Threads",
    category: "Code",
    image: "/projects/project2.png",
    desc: "High-performance headless e-commerce experience with WebGL features."
  },
  {
    id: 3,
    title: "Crypto Pulse",
    category: "Marketing",
    image: "/projects/project3.png",
    desc: "Viral gamified marketing campaign that generated 1M+ impressions."
  },
  {
    id: 4,
    title: "Generative Art Engine",
    category: "Code",
    image: "/projects/project4.png",
    desc: "Procedural art generator using complex mathematical algorithms."
  },
  {
    id: 5,
    title: "Aura Characters",
    category: "3D",
    image: "/projects/project5.png",
    desc: "A series of rigged and animated abstract 3D characters for a brand."
  },
  {
    id: 6,
    title: "Global Reach",
    category: "Marketing",
    image: "/projects/project6.png",
    desc: "Data-driven launch strategy visualized through interactive maps."
  }
];

const categories = ["All", "3D", "Code", "Marketing"];

export function PortfolioSection() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
             <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-accent"></div>
              <span className="font-mono text-accent uppercase tracking-widest text-sm">Showcase</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight mb-4">Selected Works</h2>
            <p className="text-muted-foreground text-lg max-w-xl">Projects where technology and imagination intersect to create memorable digital experiences.</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-mono text-sm tracking-wider uppercase transition-all border interactive ${
                  filter === cat 
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(var(--primary)_/_40%)]" 
                    : "bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 text-foreground hover:bg-card"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_hsl(var(--primary)_/_20%)] cursor-pointer interactive"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-border/50">
                    <span className="text-xs font-mono uppercase text-primary font-bold">{project.category}</span>
                  </div>
                </div>
                <div className="p-8 relative z-20 bg-card/80 backdrop-blur-md border-t border-border/50">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
                  
                  <div className="mt-6 flex items-center text-sm font-mono text-accent opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Explore Project <span className="ml-2">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
