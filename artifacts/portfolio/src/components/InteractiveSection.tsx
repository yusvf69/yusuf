import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function InteractiveSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.lineCap = "round";
        context.lineJoin = "round";
        setCtx(context);
        
        // Initial clear
        context.fillStyle = "rgba(0,0,0,0.4)";
        context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const endDrawing = () => {
    setIsDrawing(false);
    if (ctx) ctx.beginPath();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctx || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    let clientX, clientY;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }
    
    // Scale coordinates based on actual rendered size vs internal canvas size
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    // Dynamic color based on position
    const r = Math.floor((x / canvas.width) * 150) + 100;
    const g = Math.floor((y / canvas.height) * 150) + 50;
    const b = 255;
    
    ctx.lineWidth = Math.random() * 8 + 4;
    ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
    
    // Add glow effect to drawing
    ctx.shadowBlur = 15;
    ctx.shadowColor = `rgb(${r}, ${g}, ${b})`;
    
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    if (ctx && canvasRef.current) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-accent"></div>
            <span className="font-mono text-accent uppercase tracking-widest text-sm">Interactive Playground</span>
            <div className="w-8 h-px bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight mb-6">Leave Your Mark</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Interact with the generative canvas below. Draw something. The colors shift based on your spatial coordinates.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative p-1 bg-gradient-to-tr from-primary via-card to-accent rounded-2xl w-full aspect-video shadow-[0_0_40px_rgba(139,92,246,0.15)] group"
          >
            <div className="absolute inset-0 bg-background/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center backdrop-blur-[1px]">
              <span className="font-mono text-primary bg-background/90 px-4 py-2 rounded-full border border-primary/30 hidden group-hover:block">Click & Drag</span>
            </div>
            <canvas
              ref={canvasRef}
              width={1000}
              height={562}
              className="w-full h-full rounded-xl bg-card cursor-crosshair touch-none interactive"
              onMouseDown={startDrawing}
              onMouseUp={endDrawing}
              onMouseOut={endDrawing}
              onMouseMove={draw}
              onTouchStart={startDrawing}
              onTouchEnd={endDrawing}
              onTouchMove={draw}
            />
          </motion.div>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onClick={clearCanvas}
            className="mt-8 px-8 py-3 border border-border/50 rounded-full font-mono text-sm tracking-widest uppercase hover:bg-muted hover:border-primary/50 transition-all interactive text-muted-foreground hover:text-foreground"
          >
            [ Initialize Reset ]
          </motion.button>
        </div>
      </div>
    </section>
  );
}
