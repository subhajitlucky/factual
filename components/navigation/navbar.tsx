"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Results", href: "#results" },
  { name: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", updateScrolled)
    return () => window.removeEventListener("scroll", updateScrolled)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const elem = document.getElementById(href.replace("#", ""))
    if (elem) elem.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className={cn(
        "max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300",
        isScrolled ? "max-w-4xl" : "max-w-7xl"
      )}>
        <div className={cn(
          "flex items-center justify-between transition-all duration-300 px-6 py-2.5 rounded-full border",
          isScrolled 
            ? "bg-slate-900/95 backdrop-blur-2xl border-slate-700 shadow-lg" 
            : "bg-slate-900/60 backdrop-blur-xl border-slate-800"
        )}>
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center gap-2 group"
            onClick={(e) => handleLinkClick(e, "#hero")}
          >
            <div className="w-7 h-7 bg-cyan-500 rounded-lg flex items-center justify-center group-hover:bg-cyan-400 transition-colors">
              <span className="text-slate-950 font-black text-[10px]">NX</span>
            </div>
            <span className="text-base font-mono font-bold tracking-tight text-white">
              NEXUS
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Button size="sm" className="h-8 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold px-4 rounded-lg transition-colors">
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-4 right-4 mt-2 bg-slate-900/95 backdrop-blur-2xl border border-slate-700 p-6 rounded-2xl flex flex-col gap-5 shadow-xl z-[101]"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-semibold text-white hover:text-cyan-400 transition-colors"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full bg-cyan-500 text-slate-950 font-bold py-3">
            Get Started
          </Button>
        </motion.div>
      )}
    </motion.nav>
  )
}
