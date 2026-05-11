"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  spotlightColor?: string
  tiltDeg?: number
  disabled?: boolean
}

export default function SpotlightCard({
  children,
  className,
  style,
  spotlightColor = "rgba(196,103,58,0.14)",
  tiltDeg = 6,
  disabled = false,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [spotPos, setSpotPos] = useState({ x: 0, y: 0 })

  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const springCfg = { stiffness: 380, damping: 32, mass: 0.5 }
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [tiltDeg, -tiltDeg]), springCfg)
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-tiltDeg, tiltDeg]), springCfg)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width - 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(relX)
    my.set(relY)
    setSpotPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseLeave = () => {
    mx.set(0)
    my.set(0)
    setIsHovered(false)
  }

  if (disabled) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "900px",
        cursor: "default",
        ...style,
      }}
      className={className}
    >
      {/* Spotlight overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          background: isHovered
            ? `radial-gradient(280px at ${spotPos.x}px ${spotPos.y}px, ${spotlightColor}, transparent 80%)`
            : "transparent",
          pointerEvents: "none",
          zIndex: 1,
          transition: "opacity 150ms ease",
          opacity: isHovered ? 1 : 0,
        }}
      />
      {children}
    </motion.div>
  )
}
