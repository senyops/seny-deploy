"use client"

import { motion, useReducedMotion, useInView } from "framer-motion"
import { useTranslations } from "next-intl"
import { useRef, useEffect, useState } from "react"
import { Link } from "@/i18n/navigation"
import { IconArrowRight, IconCheck, IconMessage, IconStar, IconChartBar } from "@tabler/icons-react"
import FlipWords from "@/components/ui/FlipWords"

// Ease tokens (motion design skill)
const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const
const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const

function CountUp({ to, duration = 1600, suffix = "" }: { to: number; duration?: number; suffix?: string }) {
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

  return <span ref={ref}>{val}{suffix}</span>
}

function SenyDashboard({ reduced }: { reduced: boolean }) {
  const floatY = (amp: number, delay: number) =>
    reduced ? {} : {
      animate: { y: [0, -amp, 0] as number[] },
      transition: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut" as const, delay },
    }

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "440px", margin: "0 auto" }}>
      {/* Booking badge — top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6, ease: EASE_OUT_EXPO }}
        style={{ position: "absolute", top: "-22px", right: "0", zIndex: 10 }}
      >
        <motion.div {...floatY(5, 0.5)} style={{
          background: "#1E1A15",
          border: "1px solid rgba(200,138,10,0.22)",
          borderRadius: "12px",
          padding: "11px 16px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(200,138,10,0.14)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <IconStar size={15} color="#C88A0A" fill="#C88A0A" />
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#FAF9F7", letterSpacing: "-0.3px", lineHeight: 1 }}>9.4 / 10</div>
            <div style={{ fontSize: "9px", color: "rgba(250,249,247,0.38)", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Booking.com</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, duration: 1.0, ease: EASE_OUT_EXPO }}
      >
        <motion.div {...floatY(9, 0)} style={{
          background: "rgba(18,14,10,0.88)",
          border: "1px solid rgba(250,249,247,0.08)",
          borderRadius: "20px",
          padding: "24px",
          backdropFilter: "blur(20px)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.65), inset 0 1px 0 rgba(250,249,247,0.05)",
        }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "rgba(196,103,58,0.16)", border: "1px solid rgba(196,103,58,0.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="11" viewBox="0 0 37 25" fill="none">
                  <rect x="0" y="0" width="8" height="4" rx="1" fill="#C4673A" />
                  <rect x="13" y="0" width="24" height="4" rx="1" fill="#FAF9F7" opacity="0.45" />
                  <rect x="0" y="10.5" width="8" height="4" rx="1" fill="#C4673A" opacity="0.7" />
                  <rect x="13" y="10.5" width="16" height="4" rx="1" fill="#C4673A" opacity="0.55" />
                  <rect x="0" y="21" width="8" height="4" rx="1" fill="#FAF9F7" opacity="0.45" />
                  <rect x="13" y="21" width="24" height="4" rx="1" fill="#FAF9F7" opacity="0.45" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#FAF9F7", lineHeight: 1.2, letterSpacing: "-0.2px" }}>El Mercat · Valencia</div>
                <div style={{ fontSize: "9px", color: "rgba(250,249,247,0.28)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "2px" }}>Sistema Operativo Seny</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2A7A57", flexShrink: 0, animation: reduced ? "none" : "pulse-dot 2.4s ease-in-out infinite" }} />
              <span style={{ fontSize: "9px", fontWeight: 700, color: "#2A7A57", letterSpacing: "0.06em", textTransform: "uppercase" }}>En vivo</span>
            </div>
          </div>

          {/* Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "16px" }}>
            {[
              { v: "47", label: "Pedidos", delta: "+12%", c: "#2A7A57" },
              { v: "3", label: "Idiomas", delta: "ES·EN·FR", c: "#C4673A" },
              { v: "138", label: "QR scans", delta: "este mes", c: "rgba(250,249,247,0.38)" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.08, duration: 0.45, ease: EASE_OUT_QUART }}
                style={{ background: "rgba(250,249,247,0.04)", border: "1px solid rgba(250,249,247,0.07)", borderRadius: "8px", padding: "10px 8px", textAlign: "center" }}
              >
                <div style={{ fontSize: "22px", fontWeight: 800, color: "#FAF9F7", letterSpacing: "-0.05em", lineHeight: 1 }}>{m.v}</div>
                <div style={{ fontSize: "8px", color: m.c, fontWeight: 700, marginTop: "3px", letterSpacing: "0.03em" }}>{m.delta}</div>
                <div style={{ fontSize: "7.5px", color: "rgba(250,249,247,0.22)", marginTop: "1px" }}>{m.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Sparkline */}
          <div style={{ background: "rgba(250,249,247,0.03)", border: "1px solid rgba(250,249,247,0.06)", borderRadius: "9px", padding: "10px 12px", marginBottom: "14px" }}>
            <div style={{ fontSize: "8px", color: "rgba(250,249,247,0.28)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>Pedidos / 7 días</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "32px" }}>
              {[35, 55, 40, 75, 50, 88, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.2 + i * 0.06, duration: 0.5, ease: EASE_OUT_EXPO }}
                  style={{ flex: 1, height: `${h}%`, background: i === 5 ? "#C4673A" : i === 6 ? "rgba(196,103,58,0.5)" : "rgba(250,249,247,0.10)", borderRadius: "2px 2px 0 0", transformOrigin: "bottom" }}
                />
              ))}
            </div>
          </div>

          {/* Feed */}
          <div style={{ borderTop: "1px solid rgba(250,249,247,0.06)", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "9px" }}>
            {[
              { icon: <IconMessage size={10} />, text: "Turista alemán abrió carta EN", time: "2min", c: "#C4673A" },
              { icon: <IconChartBar size={10} />, text: "Mesa 7 · Paella valenciana ×3", time: "6min", c: "rgba(250,249,247,0.5)" },
              { icon: <IconStar size={10} />, text: "Reseña Google · ★ ★ ★ ★ ★", time: "19min", c: "#C88A0A" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.35 + i * 0.12, duration: 0.38, ease: EASE_OUT_QUART }}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span style={{ color: item.c, flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: "11px", color: "rgba(250,249,247,0.58)", flex: 1, lineHeight: 1.3 }}>{item.text}</span>
                <span style={{ fontSize: "8.5px", color: "rgba(250,249,247,0.18)", flexShrink: 0 }}>hace {item.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* WhatsApp float */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.5, ease: EASE_OUT_QUART }}
        style={{ position: "absolute", bottom: "-40px", left: "-18px", zIndex: 10 }}
      >
        <motion.div {...floatY(5, 0.3)} style={{
          background: "#fff",
          borderRadius: "14px",
          padding: "11px 16px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.05)",
          display: "flex",
          alignItems: "center",
          gap: "11px",
          minWidth: "200px",
        }}>
          <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white" style={{ display: "block" }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#1C1917", lineHeight: 1.2 }}>Reserva confirmada</div>
            <div style={{ fontSize: "9px", color: "#78716C", marginTop: "2px" }}>Mesa 6 · 21:30 · 4 personas</div>
          </div>
          <div style={{ display: "flex", flexShrink: 0 }}>
            <IconCheck size={10} color="#25D366" />
            <IconCheck size={10} color="#25D366" style={{ marginLeft: "-3px" }} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  const t = useTranslations("hero")
  const tTrust = useTranslations("trust")
  const shouldReduce = useReducedMotion()
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.6 })

  const flipWords = ["pierdes dinero", "fallas operativas", "clientes insatisfechos", "no-shows cuestan"]

  const stagger = (i: number, base = 0.15) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: base + i * 0.1, duration: 0.8, ease: EASE_OUT_EXPO },
  })

  return (
    <section style={{ background: "#16120E", position: "relative", overflow: "hidden", minHeight: "100dvh", display: "flex", alignItems: "center", paddingTop: "64px", paddingBottom: "72px" }}>

      {/* Aurora background — 3 orbs, CSS-animated (performance: compositor only) */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div className="aurora-orb-1" style={{ position: "absolute", width: "900px", height: "900px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,103,58,0.18) 0%, transparent 65%)", top: "-280px", right: "-180px", filter: "blur(72px)" }} />
        <div className="aurora-orb-2" style={{ position: "absolute", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(158,82,48,0.12) 0%, transparent 65%)", bottom: "-120px", left: "-60px", filter: "blur(60px)" }} />
        <div className="aurora-orb-3" style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,103,58,0.07) 0%, transparent 65%)", top: "40%", left: "35%", filter: "blur(80px)" }} />
      </div>

      {/* Grain overlay */}
      <div aria-hidden="true" className="grain-overlay" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2 }} />

      {/* Dot grid */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.016, backgroundImage: "radial-gradient(circle, rgba(250,249,247,1) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[56%_44%] gap-10 lg:gap-16 items-center">

          {/* Left: editorial text */}
          <div>
            {/* Badge */}
            <motion.div {...stagger(0, 0.1)} style={{ marginBottom: "32px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px 5px 8px", background: "rgba(196,103,58,0.10)", border: "1px solid rgba(196,103,58,0.20)", borderRadius: "999px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C4673A", flexShrink: 0, animation: shouldReduce ? "none" : "pulse-dot 2.4s ease-in-out infinite" }} />
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4673A" }}>{t("badge")}</span>
              </span>
            </motion.div>

            {/* Headline — editorial, massive */}
            <motion.div style={{ marginBottom: "28px" }}>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.9, ease: EASE_OUT_EXPO }}
              >
                <h1 style={{ fontSize: "clamp(42px, 5.8vw, 82px)", fontWeight: 800, letterSpacing: "-0.055em", lineHeight: 1.0, color: "#FAF9F7", margin: 0 }}>
                  {t("title1")}{" "}
                  {shouldReduce ? (
                    <span style={{ color: "#C4673A" }}>{t("title2")}</span>
                  ) : (
                    <FlipWords
                      words={flipWords}
                      interval={2800}
                      style={{ color: "#C4673A" }}
                    />
                  )}
                </h1>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.9, ease: EASE_OUT_EXPO }}
                style={{ fontSize: "clamp(42px, 5.8vw, 82px)", fontWeight: 800, letterSpacing: "-0.055em", lineHeight: 1.0, color: "#FAF9F7", margin: 0 }}
              >
                {t("title3")}
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              {...stagger(3, 0.1)}
              style={{ fontSize: "16px", lineHeight: 1.78, color: "rgba(250,249,247,0.44)", maxWidth: "460px", marginBottom: "36px" }}
            >
              {t("subtitle")}
            </motion.p>

            {/* Checklist */}
            <motion.ul
              {...stagger(4, 0.1)}
              style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}
            >
              {["Sin jerga técnica ni plantillas", "Instalación 100% incluida", "Acompañamiento hasta que funciona"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(42,122,87,0.14)", border: "1px solid rgba(42,122,87,0.28)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <IconCheck size={10} color="#2A7A57" />
                  </div>
                  <span style={{ fontSize: "13.5px", color: "rgba(250,249,247,0.52)", fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div {...stagger(5, 0.1)} style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "60px" }}>
              <Link
                href="/contacto"
                className="btn-shimmer"
                style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "14px 30px", background: "#C4673A", color: "#fff", borderRadius: "9px", fontSize: "14px", fontWeight: 700, textDecoration: "none", letterSpacing: "-0.1px", position: "relative", overflow: "hidden", cursor: "pointer", transition: "background 0.15s cubic-bezier(.165,.84,.44,1), transform 0.15s cubic-bezier(.165,.84,.44,1), box-shadow 0.15s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#9E5230"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 10px 32px rgba(196,103,58,0.42)" }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#C4673A"; el.style.transform = ""; el.style.boxShadow = "" }}
              >
                {t("cta_primary")}
                <IconArrowRight size={16} />
              </Link>
              <Link
                href="/servicios"
                style={{ display: "inline-flex", alignItems: "center", padding: "14px 28px", color: "rgba(250,249,247,0.52)", borderRadius: "9px", border: "1.5px solid rgba(250,249,247,0.11)", fontSize: "14px", fontWeight: 600, textDecoration: "none", cursor: "pointer", transition: "color 0.15s ease, border-color 0.15s ease" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(250,249,247,0.88)"; el.style.borderColor = "rgba(250,249,247,0.26)" }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(250,249,247,0.52)"; el.style.borderColor = "rgba(250,249,247,0.11)" }}
              >
                {t("cta_secondary")}
              </Link>
            </motion.div>

            {/* Stats with CountUp */}
            <motion.div
              ref={statsRef}
              {...stagger(6, 0.1)}
              style={{ paddingTop: "24px", borderTop: "1px solid rgba(250,249,247,0.07)", display: "flex", gap: "32px 44px", flexWrap: "wrap" }}
            >
              {[
                { to: 5, suffix: "", label: tTrust("stat1_label") },
                { to: 3, suffix: "", label: tTrust("stat2_label") },
                { to: 100, suffix: "%", label: tTrust("stat3_label") },
              ].map(({ to, suffix, label }) => (
                <div key={label}>
                  <div style={{ fontSize: "30px", fontWeight: 800, letterSpacing: "-0.055em", color: "#FAF9F7", lineHeight: 1, marginBottom: "5px" }}>
                    {statsInView && !shouldReduce ? <CountUp to={to} suffix={suffix} /> : `${to}${suffix}`}
                  </div>
                  <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "rgba(250,249,247,0.26)" }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: dashboard */}
          <div className="hidden lg:block" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
            <SenyDashboard reduced={!!shouldReduce} />
          </div>
        </div>
      </div>
    </section>
  )
}
