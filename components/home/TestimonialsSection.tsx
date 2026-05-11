"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { IconQuote } from "@tabler/icons-react"

const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const

const TYPE_COLORS: Record<string, string> = {
  Restaurante: "#C4673A",
  Restaurant: "#C4673A",
  Ristorante: "#C4673A",
  Restaurante_pt: "#C4673A",
  Hostel: "#C88A0A",
  Auberge: "#C88A0A",
  Ostello: "#C88A0A",
  Clínica: "#2A7A57",
  Clinic: "#2A7A57",
  Clinique: "#2A7A57",
  Clinica: "#2A7A57",
}

interface TestimonialItem {
  stat: string
  stat_label: string
  quote: string
  author: string
  role: string
  type: string
}

export default function TestimonialsSection() {
  const t = useTranslations("testimonials")
  const shouldReduce = useReducedMotion()
  const items = t.raw("items") as TestimonialItem[]

  return (
    <section style={{
      background: "#16120E",
      padding: "120px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Aurora orbs */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,103,58,0.10) 0%, transparent 65%)",
          top: "-300px",
          left: "-200px",
          filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(42,122,87,0.08) 0%, transparent 65%)",
          bottom: "-150px",
          right: "-100px",
          filter: "blur(80px)",
        }} />
      </div>

      {/* Dot grid */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        opacity: 0.015,
        backgroundImage: "radial-gradient(circle, rgba(250,249,247,1) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: EASE_OUT_QUART }}
          style={{ marginBottom: "72px" }}
        >
          <p style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#C4673A",
            marginBottom: "18px",
          }}>
            {t("eyebrow")}
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <h2 style={{
              fontSize: "clamp(34px, 3.8vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1.04,
              color: "#FAF9F7",
              maxWidth: "480px",
            }}>
              {t("heading")}
            </h2>
            <p style={{
              fontSize: "14px",
              color: "rgba(250,249,247,0.36)",
              maxWidth: "260px",
              lineHeight: 1.72,
            }}>
              {t("subtitle")}
            </p>
          </div>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const accent = TYPE_COLORS[item.type] ?? "#C4673A"
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE_OUT_QUART }}
                style={{
                  background: "rgba(250,249,247,0.03)",
                  border: "1px solid rgba(250,249,247,0.08)",
                  borderRadius: "18px",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.25s ease, background 0.25s ease",
                  cursor: "default",
                }}
                whileHover={shouldReduce ? {} : {
                  borderColor: `${accent}30`,
                  backgroundColor: "rgba(250,249,247,0.045)",
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: "28px",
                  right: "28px",
                  height: "1px",
                  background: `linear-gradient(to right, transparent, ${accent}50, transparent)`,
                }} />

                {/* Stat */}
                <div>
                  <div style={{
                    fontSize: "52px",
                    fontWeight: 800,
                    letterSpacing: "-0.06em",
                    color: accent,
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}>
                    {item.stat}
                  </div>
                  <div style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "rgba(250,249,247,0.30)",
                  }}>
                    {item.stat_label}
                  </div>
                </div>

                {/* Quote */}
                <div style={{ flex: 1, position: "relative" }}>
                  <IconQuote
                    size={18}
                    color={`${accent}40`}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                  <p style={{
                    fontSize: "13.5px",
                    lineHeight: 1.75,
                    color: "rgba(250,249,247,0.56)",
                    paddingTop: "24px",
                    fontStyle: "italic",
                  }}>
                    "{item.quote}"
                  </p>
                </div>

                {/* Author */}
                <div style={{
                  borderTop: "1px solid rgba(250,249,247,0.06)",
                  paddingTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}>
                  {/* Avatar placeholder */}
                  <div style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: `${accent}18`,
                    border: `1px solid ${accent}28`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "13px",
                    fontWeight: 800,
                    color: accent,
                  }}>
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <div style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#FAF9F7",
                      letterSpacing: "-0.02em",
                    }}>
                      {item.author}
                    </div>
                    <div style={{
                      fontSize: "10.5px",
                      color: "rgba(250,249,247,0.30)",
                      marginTop: "2px",
                      letterSpacing: "0.01em",
                    }}>
                      {item.role}
                    </div>
                  </div>

                  {/* Type badge */}
                  <div style={{
                    marginLeft: "auto",
                    fontSize: "8px",
                    fontWeight: 700,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: accent,
                    padding: "3px 8px",
                    background: `${accent}14`,
                    border: `1px solid ${accent}24`,
                    borderRadius: "4px",
                    whiteSpace: "nowrap",
                  }}>
                    {item.type}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
