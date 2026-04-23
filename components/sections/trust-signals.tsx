"use client"

import React from "react"
import { Container } from "@/components/ui/container"
import { Lock, Shield, Server, Key, LucideIcon } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const TrustBadge = ({ icon: Icon, title, description }: { icon: LucideIcon, title: string, description: string }) => (
  <SpotlightCard className="flex flex-col p-8 group" spotlightColor="rgba(59,130,246,0.1)">
    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-5 group-hover:border-blue-400/50 transition-colors">
      <Icon size={24} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
    </div>
    <h4 className="text-base font-bold text-white mb-2 tracking-tight">{title}</h4>
    <p className="text-sm text-slate-200 leading-relaxed">
      {description}
    </p>
  </SpotlightCard>
)

export function TrustSignals() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-slate-800/50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Enterprise-Grade Security
          </h2>
          <p className="text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
            Nexus operates with zero-trust architecture. Your agents, your data, your infrastructure—protected by clinical-grade safeguards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <TrustBadge 
            icon={Lock} 
            title="SOC 2 Type II" 
            description="Audited and certified for strict data security, availability, and processing integrity." 
          />
          <TrustBadge 
            icon={Shield} 
            title="End-to-End Encryption" 
            description="All agent communications and memory vectors are AES-256 encrypted at rest and in transit." 
          />
          <TrustBadge 
            icon={Key} 
            title="Role-Based Access" 
            description="Granular IAM controls over which team members can deploy or halt specific agent fleets." 
          />
          <TrustBadge 
            icon={Server} 
            title="VPC Deployment" 
            description="Deploy Nexus entirely within your own cloud infrastructure for air-gapped security." 
          />
        </div>

        {/* Integration Banner */}
        <div className="p-8 md:p-12 rounded-2xl border border-slate-700 bg-slate-800/50 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left space-y-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">Integrated with your stack</h3>
              <p className="text-base text-slate-200">
                Nexus is infrastructure-agnostic. Bring your own models, vector stores, and existing agent frameworks. We provide the unified command layer.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              {['LangChain', 'OpenAI', 'Anthropic', 'Pinecone', 'AWS', 'Azure'].map((brand) => (
                <div key={brand} className="px-5 py-2.5 rounded-xl border border-slate-600 bg-slate-700/50 text-sm font-bold text-slate-200 hover:border-cyan-500/40 hover:text-white transition-colors">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
