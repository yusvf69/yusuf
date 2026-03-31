import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative bg-card/20 border-y border-border/50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative glow-effect border border-border/50 p-2 bg-card/50 backdrop-blur-sm">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 mix-blend-overlay z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" 
                  alt="Creative Workspace" 
                  className="w-full h-full object-cover grayscale-[50%] contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-10 -right-10 lg:-right-16 bg-background/90 backdrop-blur-xl border border-border p-8 rounded-2xl shadow-2xl max-w-[280px] hidden md:block group hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
              <p className="font-mono text-sm text-primary mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                System Status
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Currently taking on new projects for Q4. Operating out of the digital ether.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary"></div>
              <span className="font-mono text-primary uppercase tracking-widest text-sm">Identity</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight mb-8">The Mind Behind<br />The Machine</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I don't just write code or push pixels. I construct digital environments that provoke emotion and drive action. For the past 6 years, I've been obsessed with the intersection of art direction, logical architecture, and market psychology.
              </p>
              <p>
                My approach is deeply analytical yet highly intuitive. A beautiful design is worthless if it doesn't perform, and a performant site is forgettable if it lacks soul. <strong className="text-foreground font-medium">I bridge that gap.</strong>
              </p>
              <p>
                When I'm not orchestrating pixels in Three.js or architecting React applications, you'll find me experimenting with generative algorithms or dissecting modern digital marketing campaigns.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div>
                <h4 className="font-bold text-4xl mb-2 text-foreground">6<span className="text-primary">+</span></h4>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="font-bold text-4xl mb-2 text-foreground">40<span className="text-primary">+</span></h4>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Projects Delivered</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="font-bold text-4xl mb-2 text-foreground">∞</h4>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Lines of Code</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
