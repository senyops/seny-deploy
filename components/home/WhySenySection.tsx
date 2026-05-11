"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import SpotlightCard from "@/components/ui/SpotlightCard"
import { IconBuildingHospital, IconLanguage, IconSparkles, IconHandStop } from "@tabler/icons-react"

const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const

const ICONS = [
  <IconBuildingHospital size={22} key="1" />,
  <IconLanguage size={22} key="2" />,
  <IconSparkles size={22} key="3" />,
  <IconHandStop size={22} key="4" />,
]

const ACCENTS = ["#C4673A", "#C88A0A", "#C4673A", "#2A7A57"]

export default function WhySenySection() {
  const t = useTranslations("why")
  const shouldReduce = useReducedMotion()
  const reasons = t.raw("reasons") as Array<{ title: string; desc: string }>

  return (
    <section style={{ background: "#16120E", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Subtle aurora in this section too */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,103,58,0.08) 0%, transparent 65%)", bottom: "-150px", right: "-100px", filter: "blur(80px)" }} />
      </div>

      {/* Dot grid */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.015, backgroundImage: "radial-gradient(circle, rgba(250,249,247,1) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: EASE_OUT_QUART }}
          style={{ marginBottom: "72px" }}
        >
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C4673A", marginBottom: "18px" }}>{t("eyebrow")}</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <h2 style={{ fontSize: "clamp(34px, 3.8vw, 56px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.04, color: "#FAF9F7", maxWidth: "480px" }}>{t("heading")}</h2>
            <p style={{ fontSize: "14px", color: "rgba(250,249,247,0.40)", maxWidth: "260px", lineHeight: 1.72 }}>
              Un equipo de hostelería real que también sabe de tecnología.
            </p>
          </div>
        </motion.div>

        {/* 2×2 grid of glowing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: EASE_OUT_QUART }}
            >
              <SpotlightCard
                disabled={!!shouldReduce}
                spotlightColor={`${ACCENTS[i]}20`}
                tiltDeg={4}
                style={{
                  background: "rgba(250,249,247,0.03)",
                  border: "1px solid rgba(250,249,247,0.08)",
                  borderRadius: "16px",
                  padding: "28px",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {/* Glow accent line at top */}
                <div style={{ position: "absolute", top: 0, left: "24px", right: "24px", height: "1px", background: `linear-gradient(to right, transparent, ${ACCENTS[i]}50, transparent)` }} />

                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: `${ACCENTS[i]}14`, border: `1px solid ${ACCENTS[i]}24`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: ACCENTS[i] }}>
                  {ICONS[i % ICONS.length]}
                </div>

                <h3 style={{ fontSize: "16px", fontWeight: 800, letterSpacing: "-0.03em", color: "#FAF9F7", marginBottom: "10px", lineHeight: 1.25 }}>
                  {reason.title}
                </h3>
                <p style={{ fontSize: "13.5px", lineHeight: 1.75, color: "rgba(250,249,247,0.45)" }}>
                  {reason.desc}
                </p>

                {/* Bottom number */}
                <div style={{ marginTop: "24px", fontSize: "48px", fontWeight: 800, color: `${ACCENTS[i]}18`, letterSpacing: "-0.06em", lineHeight: 1, userSelect: "none" }}>
                  0{i + 1}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
