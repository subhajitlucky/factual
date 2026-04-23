"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { 
  Bot, Shield, Activity, Cpu, Terminal, AlertCircle, CheckCircle2
} from "lucide-react"
import { cn } from "@/lib/utils"

const AgentNode = ({ status, load, name }: { status: 'active' | 'idle' | 'warning', load: number, name: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 relative overflow-hidden group"
  >
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div className={cn(
          "w-2 h-2 rounded-full",
          status === 'active' ? "bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.7)] animate-pulse" :
          status === 'warning' ? "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.7)] animate-pulse" :
          "bg-slate-500"
        )} />
        <span className="text-[10px] uppercase tracking-wider font-bold text-white">{name}</span>
      </div>
      <Bot size={13} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
    </div>
    
    <div className="space-y-1.5">
      <div className="flex justify-between items-end">
        <span className="text-[9px] text-slate-400 uppercase font-medium">Load Capacity</span>
        <span className="text-[11px] font-mono text-cyan-400 font-bold">{load}%</span>
      </div>
      <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${load}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={cn(
            "h-full rounded-full",
            status === 'warning' ? "bg-amber-400" : "bg-cyan-400"
          )}
        />
      </div>
    </div>

    <div className="mt-2.5 flex gap-1.5">
      <div className="h-4 px-2 bg-slate-700/60 rounded flex items-center justify-center">
        <span className="text-[8px] font-mono text-slate-300">v2.4.0</span>
      </div>
      <div className="h-4 px-2 bg-slate-700/60 rounded flex items-center justify-center gap-0.5">
        <Activity size={7} className="text-slate-400" />
        <span className="text-[8px] font-mono text-slate-300">LIVE</span>
      </div>
    </div>
  </motion.div>
)

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
    <div className="relative w-full max-w-4xl mx-auto min-h-[600px] md:aspect-[16/10] bg-slate-900 rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
      
      {/* Top Bar */}
      <div className="absolute top-0 inset-x-0 h-11 bg-slate-800/80 border-b border-slate-700 flex items-center justify-between px-4 z-10">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30 border border-amber-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/60" />
          </div>
          <div className="h-4 w-px bg-slate-700 mx-1 hidden sm:block" />
          <div className="hidden sm:flex items-center gap-2 text-slate-300">
            <Terminal size={13} />
            <span className="text-[10px] font-mono text-slate-300">nexus-fleet-manager --v-all</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-emerald-400 font-bold uppercase animate-pulse">System Online</span>
          <CheckCircle2 size={13} className="text-emerald-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative md:absolute inset-0 p-4 pt-14 md:p-5 md:pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3">
        {/* Sidebar */}
        <div className="col-span-1 md:col-span-3 space-y-3 order-2 md:order-1">
          <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 font-bold block mb-1">Total Agents</span>
            <div className="text-xl font-bold text-white flex items-baseline gap-2">
              <TickingNumber value={1242} />
              <span className="text-[10px] text-emerald-400 font-medium">+12%</span>
            </div>
          </div>
          
          <div className="hidden sm:block p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] uppercase text-slate-400 font-bold block mb-1">Active Compute</span>
            <div className="text-xl font-bold text-white">
              <TickingNumber value={84} suffix="%" />
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 overflow-hidden relative">
            <div className="absolute -right-3 -bottom-3 opacity-[0.06]">
              <Cpu size={64} className="text-cyan-400" />
            </div>
            <span className="text-[10px] uppercase text-slate-400 font-bold block mb-1">Daily Tokens</span>
            <div className="text-xl font-bold text-cyan-400">
              <TickingNumber value={142050} />
            </div>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="col-span-1 sm:col-span-2 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 order-1 md:order-2">
          <AgentNode name="Sentinel-Alpha" status="active" load={64} />
          <AgentNode name="Cipher-7" status="active" load={28} />
          <AgentNode name="Oracle-Prime" status="warning" load={92} />
          <AgentNode name="Ghost-Protocol" status="active" load={45} />
          <AgentNode name="Vector-Scan" status="idle" load={0} />
          <AgentNode name="Logic-Gate" status="active" load={71} />
        </div>

        {/* Right Panel */}
        <div className="col-span-1 md:col-span-3 space-y-3 order-3">
          <div className="hidden md:flex aspect-square rounded-lg bg-slate-800/60 border border-slate-700/60 relative items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 border border-cyan-500/15 rounded-full" />
              <div className="w-1/2 h-1/2 border border-cyan-500/15 rounded-full" />
              <div className="w-1/4 h-1/4 border border-cyan-500/15 rounded-full" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(34,211,238,0.15),transparent_90deg)] origin-center rounded-full"
              />
            </div>
            <Shield size={20} className="text-cyan-400 relative z-10" />
            <span className="absolute bottom-2 text-[8px] font-mono text-slate-500 uppercase tracking-wider">Scanning Network</span>
          </div>

          <div className="flex-1 p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-1.5 mb-2 text-amber-400">
              <AlertCircle size={11} />
              <span className="text-[10px] font-bold uppercase">Security Log</span>
            </div>
            <div className="space-y-1.5">
              {[
                "[14:20:01] Rogue query blocked — Node P-12",
                "[14:19:45] Auto-scaling engaged: +4 instances",
                "[14:18:22] Latency spike detected in EU-West"
              ].map((log, i) => (
                <div key={i} className="text-[9px] font-mono text-slate-400 border-l-2 border-slate-700 pl-2">
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle scanline */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_2px]" />
    </div>
  )
}
