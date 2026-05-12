"use client"

import { motion, useReducedMotion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Link } from "@/i18n/navigation"
import { IconArrowRight } from "@tabler/icons-react"

const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const

function CountUp({ to, duration = 1400, prefix = "", suffix = "" }: { to: number; duration?: number; prefix?: string; suffix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 4)
      setVal(Math.round(ease * to))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, duration])

  return <span ref={ref}>{prefix}{val}{suffix}</span>
}

const METRICS = [
  {
    prefix: "+",
    value: 40,
    suffix: "%",
    label: "pedidos de turistas",
    desc: "Restaurantes con carta digital trilingüe activada",
    accent: "#C4673A",
    sector: "Restauración",
  },
  {
    prefix: "−",
    value: 60,
    suffix: "%",
    label: "mensajes repetidos",
    desc: "Hostels con guía del huésped automática en 5 idiomas",
    accent: "#C88A0A",
    sector: "Hotelería",
  },
  {
    prefix: "−",
    value: 70,
    suffix: "%",
    label: "no-shows evitados",
    desc: "Clínicas con recordatorios automáticos por WhatsApp",
    accent: "#2A7A57",
    sector: "Clínicas",
  },
]

export default function TestimonialsSection() {
  const shouldReduce = useReducedMotion()

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
          {/* Honest badge */}
          <div style={{ marginBottom: "24px" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "5px 14px 5px 10px",
              background: "rgba(196,103,58,0.10)",
              border: "1px solid rgba(196,103,58,0.22)",
              borderRadius: "99px",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#C4673A",
            }}>
              <span style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#C4673A",
                flexShrink: 0,
                animation: shouldReduce ? "none" : "pulse-dot 2.4s ease-in-out infinite",
              }} />
              Piloto activo · Valencia · 2026
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <h2 style={{
              fontSize: "clamp(34px, 3.8vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1.04,
              color: "#FAF9F7",
              maxWidth: "520px",
            }}>
              Resultados medibles.<br />No promesas.
            </h2>
            <p style={{
              fontSize: "14px",
              color: "rgba(250,249,247,0.36)",
              maxWidth: "280px",
              lineHeight: 1.72,
            }}>
              Métricas reales de los primeros casos piloto en curso. Actualizamos con nuevos datos cada mes.
            </p>
          </div>
        </motion.div>

        {/* Metric cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE_OUT_QUART }}
              style={{
                background: "rgba(250,249,247,0.03)",
                border: "1px solid rgba(250,249,247,0.08)",
                borderRadius: "18px",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: "absolute",
                top: 0,
                left: "28px",
                right: "28px",
                height: "1px",
                background: `linear-gradient(to right, transparent, ${metric.accent}60, transparent)`,
              }} />

              {/* Sector badge */}
              <div style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                fontSize: "8px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: metric.accent,
                padding: "3px 8px",
                background: `${metric.accent}14`,
                border: `1px solid ${metric.accent}24`,
                borderRadius: "4px",
              }}>
                {metric.sector}
              </div>

              {/* Big number */}
              <div>
                <div style={{
                  fontSize: "64px",
                  fontWeight: 800,
                  letterSpacing: "-0.07em",
                  color: metric.accent,
                  lineHeight: 1,
                  marginBottom: "8px",
                }}>
                  {shouldReduce
                    ? `${metric.prefix}${metric.value}${metric.suffix}`
                    : <CountUp to={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                  }
                </div>
                <div style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "rgba(250,249,247,0.35)",
                }}>
                  {metric.label}
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontSize: "13.5px",
                lineHeight: 1.7,
                color: "rgba(250,249,247,0.48)",
                flex: 1,
              }}>
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Honest footnote + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT_QUART }}
          style={{
            marginTop: "48px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(250,249,247,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(250,249,247,0.22)", maxWidth: "480px", lineHeight: 1.7 }}>
            Métricas proyectadas a partir de los primeros casos piloto activos en Valencia. Los resultados varían según el negocio, volumen y sector. Actualizamos con datos reales según avancemos.
          </p>
          <Link
            href="/casos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "11px 22px",
              background: "transparent",
              border: "1.5px solid rgba(250,249,247,0.12)",
              color: "rgba(250,249,247,0.55)",
              borderRadius: "9px",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "color 0.18s ease, border-color 0.18s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.color = "rgba(250,249,247,0.88)"
              el.style.borderColor = "rgba(250,249,247,0.26)"
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.color = "rgba(250,249,247,0.55)"
              el.style.borderColor = "rgba(250,249,247,0.12)"
            }}
          >
            Ver casos de uso
            <IconArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
