import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef, Suspense, Component, ReactNode } from "react";
import * as THREE from "three";
import { useTheme } from "../hooks/useTheme";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </Sphere>
    </Float>
  );
}

class WebGLErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function ThreeBackground({ starCount }: { starCount: number }) {
  return (
    <WebGLErrorBoundary fallback={<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />}>
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <Stars radius={100} depth={50} count={starCount} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </Suspense>
    </WebGLErrorBoundary>
  );
}

export function HeroSection() {
  const { theme } = useTheme();
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ThreeBackground starCount={theme === 'dark' ? 5000 : 1000} />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 pointer-events-none mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-primary font-mono tracking-widest uppercase mb-4 text-sm md:text-base drop-shadow-md"
          >
            Digital Creative Studio
          </motion.h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-sans tracking-tighter leading-[0.9] mb-6 drop-shadow-2xl">
            I Build Experiences<br />That Live Between<br />
            <span className="text-gradient drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">Code & Art</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xl text-muted-foreground max-w-2xl mb-10 drop-shadow-md backdrop-blur-sm bg-background/10 p-2 rounded-lg"
          >
            Hi, I'm Alex Creative. A 3D designer, developer, and digital strategist focused on pushing the boundaries of web experiences.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-4 pointer-events-auto"
          >
            <a href="#portfolio" data-testid="button-view-work" className="px-8 py-4 bg-primary text-primary-foreground font-mono uppercase text-sm font-bold tracking-widest rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_hsl(var(--primary)_/_30%)] hover:shadow-[0_0_30px_hsl(var(--primary)_/_50%)] interactive">
              View Work
            </a>
            <a href="#contact" data-testid="button-contact" className="px-8 py-4 border border-border bg-background/50 backdrop-blur-sm font-mono uppercase text-sm font-bold tracking-widest rounded-full hover:bg-accent/10 hover:border-accent/50 transition-all interactive hover:shadow-[0_0_20px_hsl(var(--accent)_/_20%)]">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
