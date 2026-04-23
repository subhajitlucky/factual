"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Check, Zap } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { cn } from "@/lib/utils"

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section id="pricing" className="relative py-32 overflow-hidden bg-slate-950">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Pricing that scales with your fleet.
            </h2>
            <p className="text-lg text-slate-200 mb-10">
              Start with a powerful foundation, then scale infinitely. Zero hidden costs, full transparency.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={cn("text-sm font-medium transition-colors", !isAnnual ? "text-white" : "text-slate-500")}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-16 h-8 rounded-full bg-slate-800 border border-slate-700 cursor-pointer"
              >
                <motion.div 
                  className="absolute top-1 left-1 w-6 h-6 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                  animate={{ x: isAnnual ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={cn("text-sm font-medium transition-colors flex items-center gap-2", isAnnual ? "text-white" : "text-slate-500")}>
                Annually
                <span className="text-[10px] uppercase bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full font-bold">Save 20%</span>
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SpotlightCard className="h-full p-8 flex flex-col" spotlightColor="rgba(255,255,255,0.05)">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <p className="text-slate-400 text-sm">Perfect for small teams launching their first agents.</p>
              </div>
              
              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">${isAnnual ? "49" : "59"}</span>
                <span className="text-slate-500">/ month</span>
              </div>
              
              <Button variant="secondary" className="w-full mb-8">Start Free Trial</Button>
              
              <div className="space-y-4 flex-grow">
                {[
                  "Up to 5 Active Agents",
                  "100,000 Orchestration Tokens",
                  "Standard Telemetry Dashboard",
                  "Community Support",
                  "7-day Log Retention"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-slate-300" />
                    </div>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center gap-1">
                <Zap size={12} />
                Most Popular
              </div>
            </div>
            
            <SpotlightCard className="h-full p-8 flex flex-col border-cyan-500/30" spotlightColor="rgba(6,182,212,0.15)">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-slate-400 text-sm">Mission-critical orchestration for production fleets.</p>
              </div>
              
              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">${isAnnual ? "249" : "299"}</span>
                <span className="text-slate-500">/ month</span>
              </div>
              
              <Button className="w-full mb-8">Deploy Now</Button>
              
              <div className="space-y-4 flex-grow">
                {[
                  "Unlimited Active Agents",
                  "10,000,000 Orchestration Tokens",
                  "Real-time Radar Visualizations",
                  "Priority 24/7 Support",
                  "Unlimited Log Retention",
                  "SOC2 Type II Compliance",
                  "Custom VPC Deployment"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-cyan-400" />
                    </div>
                    <span className="text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
