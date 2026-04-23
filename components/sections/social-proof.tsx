"use client"

import React, { useEffect, useRef } from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Zap, Brain, Cpu, Quote, LucideIcon } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const StatItem = ({ label, value, suffix = "", prefix = "" }: { label: string, value: number, suffix?: string, prefix?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const spring = useSpring(0, { mass: 1, stiffness: 100, damping: 30 })
  const displayValue = useTransform(spring, (current) => {
    if (value % 1 !== 0) return current.toFixed(1)
    return Math.floor(current).toLocaleString()
  })

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  return (
    <SpotlightCard className="flex flex-col items-center p-8 text-center" spotlightColor="rgba(6, 182, 212, 0.1)">
      <div ref={ref} className="relative z-10 flex flex-col items-center">
        <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-baseline">
          <span className="text-cyan-400 mr-1">{prefix}</span>
          <motion.span>{displayValue}</motion.span>
          <span className="text-cyan-400 ml-1">{suffix}</span>
        </div>
        <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">
          {label}
        </div>
      </div>
    </SpotlightCard>
  )
}

const LogoItem = ({ icon: Icon, name }: { icon: LucideIcon, name: string }) => (
  <div className="flex items-center gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default px-6 py-4">
    <Icon size={22} className="text-slate-300" />
    <span className="text-base font-semibold tracking-tight text-slate-300">{name}</span>
  </div>
)

export function SocialProof() {
  return (
    <section id="results" className="py-32 relative overflow-hidden border-t border-slate-800/50">
      <Container>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <StatItem label="Tasks Orchestrated" value={12} suffix="M+" />
          <StatItem label="Agent Uptime" value={99.9} suffix="%" />
          <StatItem label="Saved in Token Overrun" value={4.2} prefix="$" suffix="M" />
        </div>

        {/* Mission Partners */}
        <div className="flex flex-col items-center mb-24">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-10">
            Trusted by global AI leaders
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto mt-32"
        >
          <div className="relative p-10 md:p-14 rounded-2xl border border-slate-700 bg-slate-800/60 overflow-hidden">
            {/* Quote watermark */}
            <div className="absolute top-4 right-6 opacity-[0.04]">
              <Quote size={120} className="text-cyan-400" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
              <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                &quot;Nexus turned our chaotic collection of scripts into a{" "}
                <span className="text-cyan-400 font-bold">professional AI workforce.</span>{" "}
                The visibility alone paid for itself in the first week.&quot;
              </blockquote>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 rounded-full border border-slate-600 p-0.5 overflow-hidden relative">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" 
                      alt="Marcus Thorne, CTO at ScaleAI Systems" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-base">Marcus Thorne</div>
                  <div className="text-cyan-400 font-mono text-xs uppercase tracking-wider">CTO, ScaleAI Systems</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
