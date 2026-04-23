"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

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
            
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Join 500+ enterprises leveraging the Nexus orchestration layer to achieve 
              autonomous fleet operations at scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="text-lg px-10 py-4">
                Initialize Your Fleet
              </Button>
              <button className="text-slate-400 hover:text-white font-medium transition-colors cursor-pointer">
                View Documentation →
              </button>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Warp Speed Effect / Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: 0, 
              scaleX: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
              x: (Math.random() > 0.5 ? "+=100" : "-=100") + "px"
            }}
            transition={{ 
              duration: Math.random() * 2 + 1, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute h-[1px] w-24 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
          />
        ))}
      </div>
    </section>
  )
}
