"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

// Generate static particles outside of render to satisfy React 19 purity rules
const STATIC_PARTICLES = [...Array(20)].map((_, i) => ({
  id: i,
  x: (i * 5) + "%", // Distribute them somewhat evenly
  y: ((i * 7) % 100) + "%",
  direction: i % 2 === 0 ? "+=100" : "-=100",
  duration: 1.5 + (i % 3) * 0.5,
  delay: i * 0.2
}))

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-950">
      {/* Dramatic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] opacity-30" />
        
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, #334155 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              Stop managing agents.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Start commanding them.
              </span>
            </h2>
            
            <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto">
              Join 500+ enterprises leveraging the Nexus orchestration layer to achieve 
              autonomous fleet operations at scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <div className="relative w-full sm:w-auto flex-1">
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="w-full h-14 px-6 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all backdrop-blur-sm"
                />
              </div>
              <Button size="lg" className="h-14 px-8 w-full sm:w-auto shrink-0 text-base shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all">
                Get Early Access
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-slate-500">
              Free 14-day trial. No credit card required.
            </p>
          </motion.div>
        </div>
      </Container>

      {/* Warp Speed Effect / Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {STATIC_PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            initial={{ 
              x: p.x, 
              y: p.y, 
              opacity: 0, 
              scaleX: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
              x: p.direction + "px"
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay 
            }}
            className="absolute h-[1px] w-24 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
          />
        ))}
      </div>
    </section>
  )
}
