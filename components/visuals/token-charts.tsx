"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

const Bar = ({ index, height }: { index: number, height: number }) => (
  <motion.div
    initial={{ height: 0 }}
    animate={{ height: `${height}%` }}
    transition={{ 
      duration: 1, 
      delay: index * 0.05,
      ease: "easeOut" 
    }}
    className="w-full bg-gradient-to-t from-blue-600/20 to-blue-400 rounded-t-sm relative group"
  >
    <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity" />
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-slate-800 text-[8px] font-mono px-1 rounded border border-slate-700 text-white">
      {Math.round(height * 100)}
    </div>
  </motion.div>
)

export function TokenCharts() {
  const [data, setData] = useState<number[]>([40, 45, 30, 55, 60, 40, 35, 50, 65, 70, 45, 40, 55, 60, 50, 45, 60, 75, 80, 60])

  useEffect(() => {
    // Wrap in setTimeout to avoid synchronous setState in effect body which triggers cascading renders
    const timer = setTimeout(() => {
      setData(Array.from({ length: 20 }, () => Math.random() * 60 + 20))
    }, 0)
    
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1), Math.random() * 60 + 20]
        return newData
      })
    }, 2000)
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="relative w-full aspect-[16/9] bg-slate-950/50 rounded-xl border border-slate-800 p-6 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Compute Usage</h4>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-mono font-bold text-white tracking-tight">1.2M</span>
            <span className="text-[10px] text-emerald-500 font-mono">tokens/hr</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <span className="text-[8px] font-bold text-slate-600 uppercase block">Current Cost</span>
            <span className="text-sm font-mono text-blue-400">$42.08</span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <TrendingUp size={16} />
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 flex items-end gap-1.5 min-h-0 relative">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-full h-px bg-slate-800/50" />
          ))}
        </div>
        
        {data.map((height, i) => (
          <Bar key={i} index={i} height={height} />
        ))}
      </div>

      {/* X-Axis */}
      <div className="flex justify-between mt-3 px-1">
        {['00:00', '06:00', '12:00', '18:00', 'Now'].map((label) => (
          <span key={label} className="text-[8px] font-mono text-slate-600 uppercase">{label}</span>
        ))}
      </div>

      {/* Background glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
    </div>
  )
}
