"use client"

import { motion, useReducedMotion, useInView, useScroll, useTransform } from "framer-motion"
import { useTranslations } from "next-intl"
import { useRef } from "react"
import { IconPhone, IconSettings, IconRocket } from "@tabler/icons-react"

const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const

const STEP_META = [
  { icon: <IconPhone size={20} />, bg: "#C4673A", label: "30 min" },
  { icon: <IconSettings size={20} />, bg: "#16120E", label: "48–72h" },
  { icon: <IconRocket size={20} />, bg: "#2A7A57", label: "Para siempre" },
]

export default function HowItWorksSection() {
  const t = useTranslations("howItWorks")
  const shouldReduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 })

  const steps = t.raw("steps") as Array<{ num: string; title: string; desc: string }>

  return (
    <section
      ref={sectionRef}
      style={{ background: "#F3F0EC", padding: "120px 0", borderTop: "1px solid rgba(28,25,23,0.07)", position: "relative", overflow: "hidden" }}
    >
      {/* Background texture */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(28,25,23,0.035) 1px, transparent 1px)", backgroundSize: "22px 22px", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: EASE_OUT_QUART }}
          style={{ marginBottom: "80px", textAlign: "center" }}
        >
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C4673A", marginBottom: "16px" }}>{t("eyebrow")}</p>
          <h2 style={{ fontSize: "clamp(32px, 3.2vw, 50px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.06, color: "#1C1917", marginBottom: "16px" }}>{t("heading")}</h2>
          <p style={{ fontSize: "15px", color: "#78716C", maxWidth: "340px", margin: "0 auto", lineHeight: 1.72 }}>Sin burocracia. Sin técnica. Solo resultados.</p>
        </motion.div>

        {/* Steps with connector line */}
        <div style={{ position: "relative" }}>
          {/* Animated connector (desktop) */}
          <div className="hidden md:block" style={{ position: "absolute", top: "32px", left: "calc(16.66% + 20px)", right: "calc(16.66% + 20px)", height: "2px", background: "rgba(28,25,23,0.08)", borderRadius: "1px", zIndex: 0, overflow: "hidden" }}>
            <motion.div
              style={{ height: "100%", background: "linear-gradient(to right, #C4673A, #2A7A57)", borderRadius: "1px", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: EASE_OUT_QUART }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: EASE_OUT_QUART }}
                style={{ position: "relative", zIndex: 1 }}
              >
                <motion.div
                  whileHover={shouldReduce ? {} : { y: -5, boxShadow: "0 20px 56px rgba(28,25,23,0.14)" }}
                  transition={{ duration: 0.25, ease: [0.165, 0.84, 0.44, 1] }}
                  style={{ background: "#FFFFFF", border: "1px solid rgba(28,25,23,0.07)", borderRadius: "18px", padding: "32px 28px", boxShadow: "0 2px 10px rgba(28,25,23,0.06)", position: "relative", overflow: "hidden" }}
                >
                  {/* Step color accent line */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: STEP_META[index].bg, borderRadius: "18px 18px 0 0" }} />

                  {/* Icon bubble */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.5, ease: EASE_OUT_QUART }}
                    style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}
                  >
                    <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: STEP_META[index].bg, display: "flex", alignItems: "center", justifyContent: "center", color: "#FAF9F7", flexShrink: 0, position: "relative", boxShadow: `0 6px 20px ${STEP_META[index].bg}40` }}>
                      {STEP_META[index].icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "9.5px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: STEP_META[index].bg }}>Paso {step.num}</div>
                      <div style={{ fontSize: "10px", color: "#A8A29E", fontWeight: 600, marginTop: "2px" }}>{STEP_META[index].label}</div>
                    </div>
                  </motion.div>

                  <h3 style={{ fontSize: "19px", fontWeight: 800, letterSpacing: "-0.04em", color: "#1C1917", marginBottom: "12px", lineHeight: 1.2 }}>{step.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#78716C" }}>{step.desc}</p>

                  {/* Animated progress bar */}
                  <div style={{ marginTop: "28px", height: "2px", background: "rgba(28,25,23,0.07)", borderRadius: "1px", overflow: "hidden" }}>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.15, duration: 0.9, ease: EASE_OUT_QUART }}
                      style={{ height: "100%", background: STEP_META[index].bg, borderRadius: "1px", transformOrigin: "left", width: `${65 + index * 15}%` }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ textAlign: "center", marginTop: "60px", fontSize: "13px", color: "#A8A29E", fontWeight: 500 }}
        >
          El diagnóstico es gratuito · 30 minutos · Sin compromiso
        </motion.p>
      </div>
    </section>
  )
}
