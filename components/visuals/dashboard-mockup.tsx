"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { 
  Bot, 
  Shield, 
  Activity, 
  Cpu, 
  Terminal,
  AlertCircle,
  CheckCircle2
} from "lucide-react"
import { cn } from "@/lib/utils"

const AgentNode = ({ status, load, name }: { status: 'active' | 'idle' | 'warning', load: number, name: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 backdrop-blur-md relative overflow-hidden group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-2 h-2 rounded-full animate-pulse",
            status === 'active' ? "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" :
            status === 'warning' ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" :
            "bg-slate-500"
          )} />
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">{name}</span>
        </div>
        <Bot size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-end">
          <span className="text-[9px] text-slate-500 uppercase">Load Capacity</span>
          <span className="text-xs font-mono text-cyan-400">{load}%</span>
        </div>
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${load}%` }}
            className={cn(
              "h-full transition-all duration-1000",
              status === 'warning' ? "bg-amber-500" : "bg-cyan-500"
            )}
          />
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <div className="h-4 w-12 bg-slate-800/50 rounded flex items-center justify-center">
          <span className="text-[8px] font-mono text-slate-500">v2.4.0</span>
        </div>
        <div className="h-4 w-12 bg-slate-800/50 rounded flex items-center justify-center">
          <Activity size={8} className="text-slate-500 mr-1" />
          <span className="text-[8px] font-mono text-slate-500">LIVE</span>
        </div>
      </div>
    </motion.div>
  )
}

const TickingNumber = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.floor(Math.random() * 5) - 2
      setDisplayValue(prev => Math.max(0, prev + diff))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="font-mono">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden group">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      
      {/* Top Bar */}
      <div className="absolute top-0 inset-x-0 h-12 bg-slate-900/50 border-b border-slate-800 backdrop-blur-xl flex items-center justify-between px-4 z-10">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
          </div>
          <div className="h-4 w-px bg-slate-700 mx-1" />
          <div className="flex items-center gap-2 text-slate-400">
            <Terminal size={14} />
            <span className="text-[10px] font-mono tracking-tight uppercase">nexus-fleet-manager --v-all</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-emerald-500 font-bold uppercase animate-pulse">System Online</span>
            <CheckCircle2 size={14} className="text-emerald-500" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute inset-0 pt-16 p-6 grid grid-cols-12 gap-4">
        {/* Sidebar / Stats */}
        <div className="col-span-3 space-y-4">
          <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
            <span className="text-[10px] uppercase text-slate-500 font-bold block mb-1">Total Agents</span>
            <div className="text-2xl font-bold text-white flex items-baseline gap-2">
              <TickingNumber value={1242} />
              <span className="text-xs text-emerald-500 font-normal">+12%</span>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
            <span className="text-[10px] uppercase text-slate-500 font-bold block mb-1">Active Compute</span>
            <div className="text-2xl font-bold text-white flex items-baseline gap-2">
              <TickingNumber value={84} suffix="%" />
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm overflow-hidden relative">
             <div className="absolute -right-4 -bottom-4 opacity-10">
                <Cpu size={80} className="text-cyan-400" />
             </div>
            <span className="text-[10px] uppercase text-slate-500 font-bold block mb-1">Daily Tokens</span>
            <div className="text-2xl font-bold text-cyan-400">
              <TickingNumber value={142050} />
            </div>
          </div>
        </div>

        {/* Center - Fleet Grid */}
        <div className="col-span-6 grid grid-cols-2 gap-3">
          <AgentNode name="Sentinel-Alpha" status="active" load={64} />
          <AgentNode name="Cipher-7" status="active" load={28} />
          <AgentNode name="Oracle-Prime" status="warning" load={92} />
          <AgentNode name="Ghost-Protocol" status="active" load={45} />
          <AgentNode name="Vector-Scan" status="idle" load={0} />
          <AgentNode name="Logic-Gate" status="active" load={71} />
        </div>

        {/* Right - Radar/Alerts */}
        <div className="col-span-3 space-y-4">
          <div className="aspect-square rounded-lg bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm relative flex items-center justify-center overflow-hidden">
             {/* Radar Visual */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-cyan-500/20 rounded-full" />
                <div className="w-1/2 h-1/2 border border-cyan-500/20 rounded-full" />
                <div className="w-1/4 h-1/4 border border-cyan-500/20 rounded-full" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent origin-center rounded-full"
                  style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }}
                />
             </div>
             <Shield size={24} className="text-cyan-400 relative z-10" />
             <span className="absolute bottom-2 text-[8px] font-mono text-slate-500 uppercase tracking-widest">Scanning Network</span>
          </div>

          <div className="flex-1 p-3 rounded-lg bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2 text-amber-500">
              <AlertCircle size={12} />
              <span className="text-[10px] font-bold uppercase">Security Log</span>
            </div>
            <div className="space-y-2">
              <div className="text-[9px] font-mono text-slate-400 border-l border-slate-700 pl-2">
                [14:20:01] Rogue query blocked - Node P-12
              </div>
              <div className="text-[9px] font-mono text-slate-400 border-l border-slate-700 pl-2">
                [14:19:45] Auto-scaling engaged: +4 instances
              </div>
              <div className="text-[9px] font-mono text-slate-400 border-l border-slate-700 pl-2">
                [14:18:22] Latency spike detected in EU-West
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
    </div>
  )
}
