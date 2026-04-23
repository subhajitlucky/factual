"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Is Nexus another framework?",
    answer: "No. Nexus is a mission control layer that orchestrates your existing frameworks (LangChain, AutoGPT, etc.) into a cohesive fleet. We don't replace your tools; we give them a chain of command."
  },
  {
    question: "How hard is it to switch?",
    answer: "Nexus integrates via a single API call. You don't 'switch'; you upgrade. Most teams go from disconnected local scripts to centralized Nexus control in under 30 minutes."
  },
  {
    question: "Can I run it on-prem?",
    answer: "Absolutely. We offer full Docker-orchestrated deployments for air-gapped or VPC-restricted environments, ensuring your data never leaves your infrastructure."
  },
  {
    question: "Does it support local LLMs?",
    answer: "Yes. Nexus is model-agnostic and connects seamlessly to Ollama, LM Studio, or your custom internal inference endpoints via our standardized gateway."
  }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 relative overflow-hidden border-t border-slate-800/50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 space-y-3"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
              Common inquiries regarding the Nexus orchestration layer and fleet management protocols.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "border rounded-2xl transition-all duration-300 overflow-hidden",
                  activeIndex === index 
                    ? "border-cyan-500/40 bg-slate-800/80" 
                    : "border-slate-700 bg-slate-800/40 hover:border-slate-600"
                )}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between group"
                >
                  <span className={cn(
                    "text-base font-bold tracking-tight transition-colors",
                    activeIndex === index ? "text-white" : "text-slate-200 group-hover:text-white"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4",
                    activeIndex === index ? "bg-cyan-500 text-slate-950 rotate-180" : "bg-slate-700 text-slate-400 group-hover:bg-slate-600"
                  )}>
                    <ChevronDown size={14} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-700/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16 space-y-4">
            <p className="text-slate-400 text-sm">Ready to take command?</p>
            <Button size="lg" className="h-12 px-8 text-sm font-bold rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              Start Free Trial
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
