"use client"

import React from "react"
import { motion } from "framer-motion"
import { Search, PenTool, CheckSquare, LucideIcon } from "lucide-react"

const AgentCard = ({ icon: Icon, name, delay }: { icon: LucideIcon, name: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center gap-3 p-6 rounded-[24px] border border-slate-700/50 bg-slate-900/80 backdrop-blur-xl relative z-10 shadow-2xl group"
  >
    <div className="relative">
      <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 relative">
        <Icon size={24} />
      </div>
    </div>
    <div className="flex flex-col items-center gap-1">
      <span className="text-[10px] font-mono font-bold text-white uppercase tracking-[0.2em]">{name}</span>
      <div className="flex items-center gap-1.5">
        <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[8px] font-mono text-emerald-500/80 uppercase">online</span>
      </div>
    </div>
  </motion.div>
)

const DataPulse = ({ delay, duration = 2 }: { delay: number, duration?: number }) => (
  <motion.div
    initial={{ left: "-10%", opacity: 0 }}
    animate={{ 
      left: ["-10%", "110%"],
      opacity: [0, 1, 1, 0],
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    className="absolute top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-0"
  >
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
  </motion.div>
)

export function FlowBuilder() {
  return (
    <div className="relative w-full h-full min-h-[250px] flex items-center justify-center bg-slate-950/20 rounded-3xl overflow-hidden">
      {/* Background Grid - Sophisticated */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.07]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]" />
      
      <div className="relative flex items-center justify-between w-full max-w-2xl px-6 md:px-10">
        {/* Connection Path */}
        <div className="absolute top-1/2 left-20 right-20 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent -translate-y-1/2" />
        
        {/* Data Pulses */}
        <div className="absolute top-1/2 left-0 right-0 h-16 -translate-y-1/2 pointer-events-none">
          <DataPulse delay={0} duration={3} />
          <DataPulse delay={1} duration={3.5} />
          <DataPulse delay={2} duration={2.5} />
        </div>

        <AgentCard icon={Search} name="Explorer" delay={0.1} />
        <AgentCard icon={PenTool} name="Architect" delay={0.3} />
        <AgentCard icon={CheckSquare} name="Validator" delay={0.5} />
      </div>

      {/* Cinematic HUD elements */}
      <div className="absolute top-8 left-8 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
          <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">Neural Link: Established</span>
        </div>
        <span className="text-[8px] font-mono text-slate-500 uppercase">Latency: 14ms | Load: 12.4%</span>
      </div>

      <div className="absolute bottom-8 right-8 flex items-center gap-4">
        <div className="h-8 w-px bg-slate-800" />
        <div className="flex flex-col gap-1">
          <span className="text-[8px] font-mono text-slate-500 uppercase">Engine version</span>
          <span className="text-[10px] font-mono text-white font-bold">v4.8.2-stable</span>
        </div>
      </div>
    </div>
  )
}
