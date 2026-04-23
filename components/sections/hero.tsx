"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { DashboardMockup } from "@/components/visuals/dashboard-mockup"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const mockupScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section id="hero" ref={containerRef} className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Visible hero glow */}
      <div className="absolute top-0 inset-x-0 h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.12)_0%,transparent_65%)] pointer-events-none" />
      
      <Container className="relative z-10 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-8"
          style={{ y: textY }}
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 backdrop-blur-xl"
          >
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-cyan-400">
              V4.8.2 Protocol Active
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="max-w-4xl text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Command your AI workforce with{" "}
            <span className="text-cyan-400">absolute precision.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl text-lg md:text-xl text-slate-200 leading-relaxed"
          >
            Nexus is the mission control for agentic fleets. 
            Orchestrate, monitor, and safeguard your autonomous operations with surgical clarity.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button size="lg" className="h-12 px-8 text-sm font-bold rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              Launch Command Center
            </Button>
            <Button variant="secondary" size="lg" className="h-12 px-8 text-sm font-bold rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-800 transition-all">
              Watch Live Demo
            </Button>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div 
            variants={itemVariants}
            className="w-full pt-20 relative"
            style={{ scale: mockupScale, y: mockupY }}
          >
            {/* Glow behind dashboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
            
            {/* Floating status pills */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -left-2 md:top-8 md:-left-10 z-20 px-4 py-2 rounded-xl border border-slate-700 bg-slate-800/90 backdrop-blur-md shadow-lg"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                <span className="text-xs font-mono text-slate-200">Agent: Online</span>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -right-2 md:bottom-12 md:-right-6 z-20 px-4 py-2 rounded-xl border border-slate-700 bg-slate-800/90 backdrop-blur-md shadow-lg"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
                <span className="text-xs font-mono text-slate-200">Sync: 12ms</span>
              </div>
            </motion.div>

            <div className="relative z-10 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
              <DashboardMockup />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
