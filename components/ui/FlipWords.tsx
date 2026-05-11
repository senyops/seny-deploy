"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

interface FlipWordsProps {
  words: string[]
  interval?: number
  className?: string
  style?: React.CSSProperties
}

export default function FlipWords({ words, interval = 2800, className, style }: FlipWordsProps) {
  const [index, setIndex] = useState(0)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % words.length), interval)
    return () => clearInterval(timer)
  }, [words.length, interval])

  if (shouldReduce) {
    return <span className={className} style={style}>{words[0]}</span>
  }

  return (
    <span style={{ position: "relative", display: "inline-block", ...style }} className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
          style={{ display: "inline-block" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
