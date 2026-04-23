"use client"

import React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { FlowBuilder } from "@/components/visuals/flow-builder"
import { TokenCharts } from "@/components/visuals/token-charts"
import { GuardrailToggles } from "@/components/visuals/guardrail-toggles"
import { Layers, Eye, ShieldCheck } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden border-t border-slate-800/50">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Core Capabilities
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Unrivaled control over{" "}
            <span className="text-cyan-400">autonomous fleets.</span>
          </h2>
          <p className="text-lg text-slate-200 max-w-xl mx-auto leading-relaxed">
            Nexus provides the surgical precision and radical visibility needed to scale agentic operations with absolute confidence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          
          {/* Card 1 — Surgical Orchestration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:col-span-8"
          >
            <SpotlightCard className="h-full group overflow-hidden" spotlightColor="rgba(6,182,212,0.12)">
              {/* Text content */}
              <div className="p-8 md:p-10 pb-6 space-y-5">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Layers size={28} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Surgical Orchestration</h3>
                  <p className="text-base text-slate-200 leading-relaxed max-w-lg">
                    Chain complex agent workflows with sub-second latency. Our flow-engine ensures data moves with zero loss and cryptographic integrity.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {["Low Latency", "Zero-Loss", "Auto-Scale"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-xs font-semibold text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Visual — sits below text, no overlap */}
              <div className="px-6 pb-2">
                <div className="rounded-xl border border-slate-700 bg-slate-900/80 backdrop-blur-md overflow-hidden shadow-2xl h-[280px] transition-transform duration-500 group-hover:scale-[1.01]">
                  <FlowBuilder />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2 — Radical Visibility */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-4"
          >
            <SpotlightCard className="h-full group overflow-hidden" spotlightColor="rgba(59,130,246,0.12)">
              {/* Text content */}
              <div className="p-8 md:p-10 pb-6 space-y-5">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Eye size={28} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white tracking-tight">Radical Visibility</h3>
                  <p className="text-base text-slate-200 leading-relaxed">
                    Every token and every cent tracked in real-time. Full telemetry across your entire fleet.
                  </p>
                </div>
              </div>
              {/* Visual — sits below text, no overlap */}
              <div className="px-6 pb-6">
                <div className="rounded-xl border border-slate-700 bg-slate-900/80 backdrop-blur-md overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                  <TokenCharts />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3 — Unbreakable Reliability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="md:col-span-12"
          >
            <SpotlightCard className="h-full flex flex-col md:flex-row p-8 md:p-12 gap-8 md:gap-16 md:items-center overflow-hidden" spotlightColor="rgba(16,185,129,0.1)">
              <div className="flex-1 space-y-6 relative z-20">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck size={28} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Unbreakable Reliability</h3>
                  <p className="text-base text-slate-200 leading-relaxed max-w-xl">
                    Deploy guardrails that actually work. From hard budget caps to human-in-the-loop triggers, keep your agents aligned and your costs predictable at any scale.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {["SOC2 Compliance", "VPC Support", "Audit Logs", "SLA Guarantee"].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full relative z-20">
                <div className="relative p-2 rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
                  <GuardrailToggles />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
