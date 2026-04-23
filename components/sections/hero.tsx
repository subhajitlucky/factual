"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { DashboardMockup } from "@/components/visuals/dashboard-mockup"
import { Play } from "lucide-react"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-400">
              Nexus v2.4 — The Future of Agentic Ops
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            Command your AI workforce with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              absolute precision.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            One platform to orchestrate, monitor, and safeguard your entire fleet of AI agents. 
            Scale from prototype to production with total visibility and zero rogue behavior.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button size="lg" className="h-14 px-10 text-base">
              Launch Your Command Center
            </Button>
            <Button variant="secondary" size="lg" className="h-14 px-10 text-base gap-2">
              <Play size={18} fill="currentColor" />
              Watch Live Demo
            </Button>
          </motion.div>

          {/* Visual / Mockup */}
          <motion.div 
            variants={itemVariants}
            className="w-full pt-16 relative"
          >
            {/* Ambient glow behind dashboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 p-1 md:p-2 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm shadow-2xl">
                <DashboardMockup />
            </div>
            
            {/* Reflection / Bottom fade */}
            <div className="absolute -bottom-10 inset-x-0 h-40 bg-gradient-to-t from-slate-950 to-transparent z-20" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
