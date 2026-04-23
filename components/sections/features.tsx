"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { FlowBuilder } from "@/components/visuals/flow-builder"
import { TokenCharts } from "@/components/visuals/token-charts"
import { GuardrailToggles } from "@/components/visuals/guardrail-toggles"
import { Layers, Eye, ShieldCheck } from "lucide-react"

const FeatureItem = ({ 
  title, 
  description, 
  visual: Visual, 
  icon: Icon, 
  reversed = false 
}: { 
  title: string, 
  description: string, 
  visual: React.ComponentType, 
  icon: any,
  reversed?: boolean 
}) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
      <motion.div 
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 space-y-6"
      >
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
          <Icon size={24} />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
          {description}
        </p>
        <ul className="space-y-3">
          {['Real-time execution monitoring', 'Adaptive agent allocation', 'Universal API bridge'].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-slate-500">
              <div className="w-1 h-1 rounded-full bg-cyan-500" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, x: reversed ? -40 : 40 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 w-full"
      >
        <div className="relative p-2 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm shadow-2xl">
          <Visual />
        </div>
      </motion.div>
    </div>
  )
}

export function Features() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em]">The Triple Threat</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Stop guessing. Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">commanding.</span>
          </h3>
          <p className="text-lg text-slate-400">
            Most agent frameworks are "black boxes." Nexus gives you the dials, the levers, and the radar to operate with absolute confidence.
          </p>
        </div>

        <div className="space-y-32 md:space-y-48">
          <FeatureItem 
            icon={Layers}
            title="Surgical Orchestration"
            description="Chain complex workflows with sub-second latency. Our proprietary flow-engine ensures data moves between agents with zero loss and maximum efficiency."
            visual={FlowBuilder}
          />

          <FeatureItem 
            icon={Eye}
            title="Radical Visibility"
            description="Every token, every cent, every millisecond. Track your entire fleet's performance with granular charts and real-time telemetry."
            visual={TokenCharts}
            reversed
          />

          <FeatureItem 
            icon={ShieldCheck}
            title="Unbreakable Reliability"
            description="Deploy guardrails that actually work. From hard budget caps to human-in-the-loop triggers, keep your agents aligned and your costs predictable."
            visual={GuardrailToggles}
          />
        </div>
      </Container>
    </section>
  )
}
