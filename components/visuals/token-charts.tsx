"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Bar = ({ index, height }: { index: number, height: number }) => (
  <div className="flex-1 flex flex-col items-center gap-1 group relative">
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: `${height}%` }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.03,
        ease: "circOut" 
      }}
      className="w-full bg-gradient-to-t from-blue-600/40 via-blue-500/60 to-blue-400 rounded-t-[2px] relative"
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
    {/* Secondary bar for "shadow" effect */}
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: `${height * 0.6}%` }}
      transition={{ duration: 1, delay: index * 0.04 }}
      className="absolute bottom-0 w-[40%] bg-blue-400/20 rounded-t-full blur-[2px] -z-10"
    />
  </div>
)

export function TokenCharts() {
  const [data, setData] = useState<number[]>(Array.from({ length: 32 }, () => 40))

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(Array.from({ length: 32 }, () => Math.random() * 70 + 20))
    }, 100)
    
    const interval = setInterval(() => {
      setData(prev => [...prev.slice(1), Math.random() * 70 + 20])
    }, 1500)
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="relative w-full h-full min-h-[280px] bg-slate-900/40 rounded-3xl border border-slate-700/30 p-6 md:p-8 flex flex-col overflow-hidden shadow-inner">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-1">
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Live Telemetry</h4>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-mono font-bold text-white tracking-tighter">1.2M</span>
            <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">tokens/hr</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-right space-y-1">
            <span className="text-[8px] font-bold text-slate-500 uppercase block tracking-wider">Fleet Burn</span>
            <span className="text-lg font-mono text-blue-400">$42.08</span>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 flex items-end gap-1.5 min-h-0 relative px-2">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="w-full h-px bg-slate-800/30" />
          ))}
        </div>
        
        {data.map((height, i) => (
          <Bar key={i} index={i} height={height} />
        ))}
      </div>

      {/* X-Axis */}
      <div className="flex justify-between mt-6 px-2">
        {['00:00', '06:00', '12:00', '18:00', 'Now'].map((label) => (
          <span key={label} className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">{label}</span>
        ))}
      </div>

      {/* Ambient Inner Glow */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
    </div>
  )
}
