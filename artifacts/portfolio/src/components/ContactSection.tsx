import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Transmission Sent successfully",
      description: "Data packets received. I'll process them and reply shortly.",
    });
    // Reset form would go here
  };

  return (
    <section id="contact" className="py-32 relative bg-card/40 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:text-center"
          >
            <div className="flex items-center md:justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary hidden md:block"></div>
              <span className="font-mono text-primary uppercase tracking-widest text-sm">Connection</span>
              <div className="w-12 h-px bg-primary hidden md:block"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-sans tracking-tighter mb-6 text-gradient pb-2">Initiate Contact</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Have a project in mind, a crazy idea, or just want to explore possibilities? Open a channel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-12"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  Direct Line <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">Currently accepting new transmissions for Q4. Focus areas include 3D web experiences, creative frontend development, and technical consulting.</p>
                <a href="mailto:hello@alexcreative.io" className="inline-flex items-center gap-4 text-foreground hover:text-primary transition-all font-mono text-sm group interactive p-4 border border-border/50 rounded-xl bg-background/50 hover:bg-card w-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <span className="block text-xs text-muted-foreground mb-1 uppercase tracking-wider">Email</span>
                    <span className="font-bold">hello@alexcreative.io</span>
                  </div>
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6 font-mono uppercase tracking-widest text-sm text-muted-foreground">Digital Footprint</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "#", name: "GitHub" },
                    { icon: Twitter, href: "#", name: "Twitter" },
                    { icon: Linkedin, href: "#", name: "LinkedIn" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href}
                      aria-label={social.name}
                      className="w-14 h-14 rounded-full bg-background border border-border/50 flex items-center justify-center hover:border-primary hover:text-primary transition-all hover:-translate-y-2 hover:shadow-[0_10px_20px_-10px_hsl(var(--primary)_/_30%)] interactive"
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-background/50 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                      <span className="text-primary">&gt;</span> Name
                    </label>
                    <Input 
                      id="name" 
                      required 
                      className="bg-card/50 border-border/50 focus:border-primary transition-all h-14 px-5 text-base interactive rounded-xl" 
                      placeholder="Enter your designation" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                      <span className="text-primary">&gt;</span> Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      className="bg-card/50 border-border/50 focus:border-primary transition-all h-14 px-5 text-base interactive rounded-xl" 
                      placeholder="Enter communication relay" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                    <span className="text-primary">&gt;</span> Message Payload
                  </label>
                  <Textarea 
                    id="message" 
                    required 
                    className="bg-card/50 border-border/50 focus:border-primary transition-all min-h-[180px] p-5 text-base interactive rounded-xl resize-none" 
                    placeholder="Input message data here..." 
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-16 font-mono uppercase tracking-widest text-sm shadow-[0_0_20px_hsl(var(--primary)_/_20%)] hover:shadow-[0_0_30px_hsl(var(--primary)_/_40%)] transition-all interactive group rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <span className="flex items-center justify-center gap-3">
                    Transmit Payload
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
