"use client"

import { motion, useReducedMotion, useInView } from "framer-motion"
import { useTranslations } from "next-intl"
import { useRef, useEffect, useState } from "react"
import { Link } from "@/i18n/navigation"
import { IconArrowRight, IconMail } from "@tabler/icons-react"

function CountUp({ to, prefix = "", suffix = "", duration = 1400 }: { to: number; prefix?: string; suffix?: string; duration?: number }) {
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

const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const
const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const

export default function CTASection() {
  const t = useTranslations("cta_section")
  const shouldReduce = useReducedMotion()

  return (
    <section style={{ background: "#16120E", padding: "130px 0", position: "relative", overflow: "hidden" }}>

      {/* Beam pulses — 3 rings expanding from center */}
      {!shouldReduce && (
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              style={{ position: "absolute", borderRadius: "50%", border: "1px solid rgba(196,103,58,0.18)" }}
              animate={{ width: ["200px", "900px"], height: ["200px", "900px"], opacity: [0.5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: i * 1.3 }}
            />
          ))}
        </div>
      )}

      {/* Aurora orb center */}
      <div aria-hidden="true" style={{ position: "absolute", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,103,58,0.13) 0%, transparent 60%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", filter: "blur(80px)", pointerEvents: "none" }} />

      {/* Grain */}
      <div aria-hidden="true" className="grain-overlay" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2 }} />

      {/* Dot grid */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.015, backgroundImage: "radial-gradient(circle, rgba(250,249,247,1) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

      {/* Corner brackets */}
      {["tl", "br"].map((pos) => (
        <div key={pos} aria-hidden="true" style={{ position: "absolute", ...(pos === "tl" ? { top: "36px", left: "36px" } : { bottom: "36px", right: "36px" }), width: "48px", height: "48px", ...(pos === "tl" ? { borderTop: "1.5px solid rgba(196,103,58,0.28)", borderLeft: "1.5px solid rgba(196,103,58,0.28)" } : { borderBottom: "1.5px solid rgba(196,103,58,0.28)", borderRight: "1.5px solid rgba(196,103,58,0.28)" }), borderRadius: "2px" }} />
      ))}

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 5, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
        >
          {/* Eyebrow with lines */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "36px" }}>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT_QUART }} style={{ height: "1px", width: "40px", background: "rgba(196,103,58,0.5)", transformOrigin: "right" }} />
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4673A" }}>Diagnóstico gratuito</span>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT_QUART }} style={{ height: "1px", width: "40px", background: "rgba(196,103,58,0.5)", transformOrigin: "left" }} />
          </div>

          {/* Headline — massive */}
          <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 800, letterSpacing: "-0.055em", lineHeight: 1.03, color: "#FAF9F7", marginBottom: "24px", maxWidth: "820px", margin: "0 auto 24px" }}>
            {t("heading")}
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(250,249,247,0.40)", maxWidth: "400px", margin: "0 auto 52px" }}>
            {t("subtitle")}
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center", marginBottom: "60px" }}>
            {/* Primary — shimmer on hover */}
            <Link
              href="/contacto"
              className="btn-shimmer"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 38px", background: "#C4673A", color: "#fff", borderRadius: "10px", fontSize: "15px", fontWeight: 700, textDecoration: "none", letterSpacing: "-0.1px", position: "relative", overflow: "hidden", cursor: "pointer", transition: "background 0.15s cubic-bezier(.165,.84,.44,1), transform 0.15s cubic-bezier(.165,.84,.44,1), box-shadow 0.15s", boxShadow: "0 0 40px rgba(196,103,58,0.28)" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#9E5230"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 0 60px rgba(196,103,58,0.50)" }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#C4673A"; el.style.transform = ""; el.style.boxShadow = "0 0 40px rgba(196,103,58,0.28)" }}
            >
              {t("button")}
              <IconArrowRight size={18} />
            </Link>

            <Link
              href="mailto:hola@senyops.com"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 28px", color: "rgba(250,249,247,0.48)", borderRadius: "10px", border: "1.5px solid rgba(250,249,247,0.10)", fontSize: "15px", fontWeight: 600, textDecoration: "none", cursor: "pointer", transition: "color 0.15s ease, border-color 0.15s ease" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(250,249,247,0.82)"; el.style.borderColor = "rgba(250,249,247,0.22)" }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(250,249,247,0.48)"; el.style.borderColor = "rgba(250,249,247,0.10)" }}
            >
              <IconMail size={16} />
              hola@senyops.com
            </Link>
          </div>

          {/* Results strip with CountUp */}
          <div style={{ paddingTop: "44px", borderTop: "1px solid rgba(250,249,247,0.06)", display: "flex", flexWrap: "wrap", gap: "32px 56px", justifyContent: "center" }}>
            {[
              { prefix: "+", to: 40, suffix: "%", label: "pedidos turistas", accent: "#C4673A" },
              { prefix: "−", to: 70, suffix: "%", label: "no-shows clínicas", accent: "#2A7A57" },
              { prefix: "−", to: 60, suffix: "%", label: "mensajes repetidos", accent: "#C88A0A" },
            ].map(({ prefix, to, suffix, label, accent }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: EASE_OUT_QUART }}
                style={{ textAlign: "center" }}
              >
                <div style={{ fontSize: "32px", fontWeight: 800, color: accent, letterSpacing: "-0.06em", lineHeight: 1 }}>
                  <CountUp to={to} prefix={prefix} suffix={suffix} />
                </div>
                <div style={{ fontSize: "10px", fontWeight: 600, color: "rgba(250,249,247,0.26)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "6px" }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
