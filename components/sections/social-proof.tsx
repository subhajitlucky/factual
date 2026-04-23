"use client"

import React, { useEffect, useRef } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Zap, Brain, Cpu, Quote, LucideIcon } from "lucide-react"

const StatItem = ({ label, value, suffix = "", prefix = "" }: { label: string, value: number, suffix?: string, prefix?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  })

  const displayValue = useTransform(spring, (current) => {
    if (value % 1 !== 0) {
      return current.toFixed(1)
    }
    return Math.floor(current).toLocaleString()
  })

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return (
    <div ref={ref} className="flex flex-col items-center p-8 rounded-2xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm relative overflow-hidden group">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[length:20px_20px] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]" />
      
      {/* Glowing border effect on hover */}
      <div className="absolute inset-0 rounded-2xl border border-cyan-500/0 group-hover:border-cyan-500/30 transition-colors duration-500" />
      
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-baseline">
        <span className="text-cyan-400 mr-1">{prefix}</span>
        <motion.span>{displayValue}</motion.span>
        <span className="text-cyan-400 ml-1">{suffix}</span>
      </div>
      <div className="text-slate-400 text-sm font-medium uppercase tracking-widest text-center">
        {label}
      </div>
    </div>
  )
}

const LogoItem = ({ icon: Icon, name }: { icon: LucideIcon, name: string }) => (
  <div className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default px-6 py-4">
    <Icon size={24} className="text-slate-300" />
    <span className="text-lg font-semibold tracking-tight text-slate-300">{name}</span>
  </div>
)

export function SocialProof() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <Container>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <StatItem label="Tasks Orchestrated" value={12} suffix="M+" />
          <StatItem label="Agent Uptime" value={99.9} suffix="%" />
          <StatItem label="Saved in Token Overrun" value={4.2} prefix="$" suffix="M" />
        </div>

        {/* Mission Partners */}
        <div className="flex flex-col items-center mb-24">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-12">
            Powering the next generation of AI fleets
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <LogoItem icon={Zap} name="Aether Labs" />
            <LogoItem icon={Brain} name="NeuralPath" />
            <LogoItem icon={Cpu} name="SynthCore" />
          </div>
        </div>

        {/* Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl overflow-hidden group">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Quote size={120} className="text-cyan-400" />
            </div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
              <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed italic">
                &quot;Nexus turned our chaotic collection of scripts into a professional AI workforce. The visibility alone paid for itself in the first week.&quot;
              </blockquote>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 mb-4 flex items-center justify-center text-white font-bold">
                  SA
                </div>
                <div className="text-white font-bold text-lg">CTO, ScaleAI</div>
                <div className="text-cyan-400/80 text-sm font-medium uppercase tracking-widest">Featured Mission Partner</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
