"use client"

import React from "react"
import { motion } from "framer-motion"
import { Search, PenTool, CheckSquare, LucideIcon } from "lucide-react"

const AgentCard = ({ icon: Icon, name, delay }: { icon: LucideIcon, name: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm relative z-10"
  >
    <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
      <Icon size={24} />
    </div>
    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">{name}</span>
  </motion.div>
)

const DataPulse = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ left: "0%", opacity: 0 }}
    animate={{ 
      left: ["0%", "100%"],
      opacity: [0, 1, 1, 0],
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      delay,
      ease: "linear"
    }}
    className="absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-0"
  />
)

export function FlowBuilder() {
  return (
    <div className="relative w-full aspect-[16/9] flex items-center justify-between px-8 bg-slate-950/50 rounded-xl border border-slate-800 overflow-hidden group">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:30px_30px] opacity-10" />
      
      <div className="relative flex items-center justify-between w-full max-w-2xl mx-auto">
        {/* Connection Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-800 -translate-y-1/2" />
        
        {/* Data Pulses */}
        <div className="absolute top-1/2 left-[15%] right-[55%] h-px -translate-y-1/2 overflow-hidden">
          <DataPulse delay={0} />
          <DataPulse delay={1} />
        </div>
        <div className="absolute top-1/2 left-[50%] right-[20%] h-px -translate-y-1/2 overflow-hidden">
          <DataPulse delay={0.5} />
          <DataPulse delay={1.5} />
        </div>

        <AgentCard icon={Search} name="Researcher" delay={0.1} />
        <AgentCard icon={PenTool} name="Writer" delay={0.3} />
        <AgentCard icon={CheckSquare} name="Editor" delay={0.5} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">Workflow: active</span>
      </div>

      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" 
      />
    </div>
  )
}
