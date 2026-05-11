"use client"

import { motion, useReducedMotion, useInView } from "framer-motion"
import { useTranslations } from "next-intl"
import { useRef } from "react"
import { fadeInUp, staggerContainer } from "@/lib/variants"
import { IconPhone, IconSettings, IconRocket } from "@tabler/icons-react"

const STEP_ICONS = [
  <IconPhone size={22} key="phone" />,
  <IconSettings size={22} key="settings" />,
  <IconRocket size={22} key="rocket" />,
]

export default function HowItWorksSection() {
  const t = useTranslations("howItWorks")
  const shouldReduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<SVGLineElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const steps = t.raw("steps") as Array<{ num: string; title: string; desc: string }>

  const containerVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerContainer

  const itemVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : fadeInUp

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#F3F0EC",
        padding: "112px 0",
        borderTop: "1px solid rgba(28,25,23,0.07)",
        borderBottom: "1px solid rgba(28,25,23,0.07)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(28,25,23,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "80px", textAlign: "center" }}
        >
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4673A", marginBottom: "16px" }}>
            {t("eyebrow")}
          </p>
          <h2 style={{ fontSize: "clamp(30px, 3vw, 48px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#1C1917", marginBottom: "16px" }}>
            {t("heading")}
          </h2>
          <p style={{ fontSize: "15px", color: "#78716C", maxWidth: "380px", margin: "0 auto", lineHeight: 1.7 }}>
            Sin burocracia. Sin técnica. Solo resultados.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ position: "relative" }}>
          {/* Animated connecting SVG line (desktop only) */}
          <div className="hidden md:block" style={{ position: "absolute", top: "40px", left: "16.66%", right: "16.66%", height: "2px", zIndex: 0 }}>
            <svg width="100%" height="2" style={{ overflow: "visible" }}>
              <motion.line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="rgba(196,103,58,0.18)"
                strokeWidth="1"
                strokeDasharray="5 5"
              />
              <motion.line
                ref={lineRef}
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#C4673A"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ strokeDasharray: "none" }}
              />
            </svg>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                variants={itemVariants}
                style={{ position: "relative", zIndex: 1 }}
              >
                {/* Card */}
                <motion.div
                  whileHover={shouldReduce ? {} : { y: -4, boxShadow: "0 16px 48px rgba(28,25,23,0.12)" }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(28,25,23,0.08)",
                    borderRadius: "16px",
                    padding: "32px 28px",
                    cursor: "default",
                    boxShadow: "0 2px 8px rgba(28,25,23,0.05)",
                    transition: "box-shadow 0.3s, transform 0.3s",
                  }}
                >
                  {/* Step number bubble */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        background: index === 0 ? "#C4673A" : index === 1 ? "#16120E" : "#2A7A57",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "#FAF9F7",
                        position: "relative",
                      }}
                    >
                      {STEP_ICONS[index]}
                      {/* Outer ring */}
                      <div
                        style={{
                          position: "absolute",
                          inset: "-5px",
                          borderRadius: "50%",
                          border: `1.5px solid ${index === 0 ? "rgba(196,103,58,0.22)" : index === 1 ? "rgba(22,18,14,0.18)" : "rgba(42,122,87,0.22)"}`,
                        }}
                      />
                    </motion.div>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: index === 0 ? "#C4673A" : index === 1 ? "#1C1917" : "#2A7A57",
                      }}
                    >
                      Paso {step.num}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "18px", fontWeight: 800, letterSpacing: "-0.03em", color: "#1C1917", marginBottom: "12px", lineHeight: 1.2 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#78716C" }}>
                    {step.desc}
                  </p>

                  {/* Bottom accent */}
                  <div
                    style={{
                      marginTop: "24px",
                      height: "2px",
                      borderRadius: "1px",
                      background: index === 0 ? "rgba(196,103,58,0.20)" : index === 1 ? "rgba(22,18,14,0.12)" : "rgba(42,122,87,0.20)",
                    }}
                  >
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        height: "100%",
                        background: index === 0 ? "#C4673A" : index === 1 ? "#1C1917" : "#2A7A57",
                        borderRadius: "1px",
                        transformOrigin: "left",
                        width: "40%",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginTop: "64px" }}
        >
          <p style={{ fontSize: "13px", color: "#A8A29E", fontWeight: 500 }}>
            El diagnóstico es gratuito · La llamada dura 30 minutos · Sin compromiso
          </p>
        </motion.div>
      </div>
    </section>
  )
}
