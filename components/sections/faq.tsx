"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

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
    <section className="py-24 bg-slate-950">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mission Intelligence
            </h2>
            <p className="text-slate-400">
              Common inquiries regarding the Nexus orchestration layer.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-slate-800 rounded-2xl bg-slate-900/40 backdrop-blur-sm overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between group transition-colors hover:bg-slate-800/30"
                >
                  <span className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-slate-500 transition-transform duration-300",
                      activeIndex === index && "rotate-180 text-cyan-400"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
