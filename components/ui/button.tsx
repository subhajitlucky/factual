"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, forwardedRef) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)

    const [position, setPosition] = React.useState({ x: 0, y: 0 })

    // Sync the internal ref with the forwarded ref
    React.useImperativeHandle(forwardedRef, () => buttonRef.current!)

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return
      const { clientX, clientY } = e
      const { height, width, left, top } = buttonRef.current.getBoundingClientRect()
      const middleX = clientX - (left + width / 2)
      const middleY = clientY - (top + height / 2)
      setPosition({ x: middleX * 0.2, y: middleY * 0.2 })
    }

    const reset = () => {
      setPosition({ x: 0, y: 0 })
    }

    const variants = {
      primary: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] border border-cyan-400/30",
      secondary: "border border-slate-700 bg-slate-900/50 text-slate-100 hover:bg-slate-800 hover:border-slate-600 backdrop-blur-sm",
      ghost: "bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-white",
    }

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-6 py-2.5 text-sm",
      lg: "px-8 py-3 text-base",
    }

    return (
      <motion.button
        ref={buttonRef}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
