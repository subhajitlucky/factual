"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ShieldAlert, UserCheck, RefreshCcw, Bell } from "lucide-react"
import { cn } from "@/lib/utils"

const Toggle = ({ active, onClick, label, icon: Icon }: { active: boolean, onClick: () => void, label: string, icon: any }) => (
  <div className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm group hover:border-slate-700 transition-colors">
    <div className="flex items-center gap-3">
      <div className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
        active ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-800 text-slate-500"
      )}>
        <Icon size={20} />
      </div>
      <div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">Guardrail</span>
        <span className="text-sm font-semibold text-slate-200">{label}</span>
      </div>
    </div>
    
    <button 
      onClick={onClick}
      className={cn(
        "w-12 h-6 rounded-full p-1 transition-colors relative",
        active ? "bg-cyan-500" : "bg-slate-700"
      )}
    >
      <motion.div 
        animate={{ x: active ? 24 : 0 }}
        className="w-4 h-4 rounded-full bg-white shadow-sm"
      />
    </button>
  </div>
)

const StatusItem = ({ label, value, status }: { label: string, value: string, status: 'good' | 'neutral' | 'bad' }) => (
  <div className="p-3 rounded-lg border border-slate-800/50 bg-slate-900/30">
    <span className="text-[9px] font-bold text-slate-600 uppercase tracking-tight block mb-1">{label}</span>
    <div className="flex items-center justify-between">
      <span className="text-xs font-mono text-slate-300">{value}</span>
      <div className={cn(
        "w-1.5 h-1.5 rounded-full",
        status === 'good' ? "bg-emerald-500" : status === 'bad' ? "bg-red-500" : "bg-amber-500"
      )} />
    </div>
  </div>
)

export function GuardrailToggles() {
  const [toggles, setToggles] = useState({
    budget: true,
    human: false,
    retry: true
  })

  return (
    <div className="relative w-full aspect-[16/9] bg-slate-950/50 rounded-xl border border-slate-800 p-6 flex gap-6 overflow-hidden">
      {/* Sidebar Controls */}
      <div className="flex-1 space-y-3 relative z-10">
        <Toggle 
          label="Hard Budget Cap" 
          active={toggles.budget} 
          onClick={() => setToggles(t => ({ ...t, budget: !t.budget }))}
          icon={ShieldAlert}
        />
        <Toggle 
          label="Human-in-the-loop" 
          active={toggles.human} 
          onClick={() => setToggles(t => ({ ...t, human: !t.human }))}
          icon={UserCheck}
        />
        <Toggle 
          label="Auto-Retry Logic" 
          active={toggles.retry} 
          onClick={() => setToggles(t => ({ ...t, retry: !t.retry }))}
          icon={RefreshCcw}
        />
      </div>

      {/* Status Panel */}
      <div className="w-1/3 flex flex-col gap-3 relative z-10">
        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Bell size={14} className="text-cyan-400" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Alerts</span>
          </div>
          
          <div className="flex-1 space-y-3">
            <StatusItem label="Daily Spend" value="$12.40 / $50.00" status="good" />
            <StatusItem label="Success Rate" value="99.2%" status="good" />
            <StatusItem label="Latency" value="142ms" status="neutral" />
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col items-center">
             <div className="text-[8px] font-mono text-slate-600 uppercase mb-2">Security Hash</div>
             <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
                />
             </div>
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />
    </div>
  )
}
