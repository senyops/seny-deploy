"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { fadeInUp, staggerContainer, heroEntrance } from "@/lib/variants"
import { IconArrowRight, IconCheck, IconMessage, IconStar, IconChartBar } from "@tabler/icons-react"

function SenyDashboard({ reduced }: { reduced: boolean }) {
  const floatY = (amp: number, delay: number) =>
    reduced ? {} : { animate: { y: [0, -amp, 0] }, transition: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut" as const, delay } }

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "430px", margin: "0 auto" }}>
      {/* Review badge — top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "absolute", top: "-20px", right: "-8px", zIndex: 10 }}
      >
        <motion.div
          {...floatY(5, 0.6)}
          style={{
            background: "#1E1A15",
            border: "1px solid rgba(200,138,10,0.25)",
            borderRadius: "10px",
            padding: "10px 14px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(200,138,10,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <IconStar size={14} color="#C88A0A" fill="#C88A0A" />
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#FAF9F7", letterSpacing: "-0.3px", lineHeight: 1 }}>9.4 / 10</div>
            <div style={{ fontSize: "9px", color: "rgba(250,249,247,0.4)", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.07em" }}>Booking.com</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          {...floatY(8, 0)}
          style={{
            background: "rgba(22,18,14,0.80)",
            border: "1px solid rgba(250,249,247,0.09)",
            borderRadius: "18px",
            padding: "22px",
            backdropFilter: "blur(24px)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(250,249,247,0.06)",
          }}
        >
          {/* Header bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(196,103,58,0.14)", border: "1px solid rgba(196,103,58,0.24)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="15" height="10" viewBox="0 0 37 25" fill="none">
                  <rect x="0" y="0" width="8" height="4" rx="1" fill="#C4673A" />
                  <rect x="13" y="0" width="24" height="4" rx="1" fill="#FAF9F7" opacity="0.5" />
                  <rect x="0" y="10.5" width="8" height="4" rx="1" fill="#C4673A" opacity="0.7" />
                  <rect x="13" y="10.5" width="16" height="4" rx="1" fill="#C4673A" opacity="0.6" />
                  <rect x="0" y="21" width="8" height="4" rx="1" fill="#FAF9F7" opacity="0.5" />
                  <rect x="13" y="21" width="24" height="4" rx="1" fill="#FAF9F7" opacity="0.5" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#FAF9F7", lineHeight: 1.2, letterSpacing: "-0.2px" }}>Restaurante El Mercat</div>
                <div style={{ fontSize: "9px", color: "rgba(250,249,247,0.32)", textTransform: "uppercase", letterSpacing: "0.07em", marginTop: "2px" }}>Sistema Operativo · Valencia</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2A7A57", flexShrink: 0, animation: reduced ? "none" : "pulse-dot 2.4s ease-in-out infinite" }} />
              <span style={{ fontSize: "9px", fontWeight: 700, color: "#2A7A57", letterSpacing: "0.05em", textTransform: "uppercase" }}>Activo</span>
            </div>
          </div>

          {/* Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "16px" }}>
            {[
              { v: "47", label: "Pedidos hoy", delta: "+12%", deltaColor: "#2A7A57" },
              { v: "3", label: "Idiomas", delta: "ES·EN·FR", deltaColor: "#C4673A" },
              { v: "138", label: "QR escaneos", delta: "este mes", deltaColor: "rgba(250,249,247,0.4)" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.1, duration: 0.4 }}
                style={{
                  background: "rgba(250,249,247,0.04)",
                  border: "1px solid rgba(250,249,247,0.07)",
                  borderRadius: "8px",
                  padding: "10px 8px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "22px", fontWeight: 800, color: "#FAF9F7", letterSpacing: "-0.05em", lineHeight: 1 }}>{m.v}</div>
                <div style={{ fontSize: "8px", color: m.deltaColor, fontWeight: 700, marginTop: "3px", letterSpacing: "0.02em" }}>{m.delta}</div>
                <div style={{ fontSize: "7.5px", color: "rgba(250,249,247,0.22)", marginTop: "1px", letterSpacing: "0.03em" }}>{m.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Mini bar chart */}
          <div style={{ background: "rgba(250,249,247,0.03)", border: "1px solid rgba(250,249,247,0.06)", borderRadius: "8px", padding: "10px 12px", marginBottom: "14px" }}>
            <div style={{ fontSize: "8.5px", color: "rgba(250,249,247,0.3)", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "8px" }}>Pedidos / semana</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "32px" }}>
              {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.3 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    background: i === 5 ? "#C4673A" : "rgba(250,249,247,0.12)",
                    borderRadius: "2px",
                    transformOrigin: "bottom",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Activity feed */}
          <div style={{ borderTop: "1px solid rgba(250,249,247,0.07)", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "9px" }}>
            {[
              { icon: <IconMessage size={10} />, text: "Turista alemán abrió carta EN", time: "2min", accent: "#C4673A" },
              { icon: <IconChartBar size={10} />, text: "Mesa 7 · Paella ×3 · €42", time: "5min", accent: "rgba(250,249,247,0.55)" },
              { icon: <IconStar size={10} />, text: "Nueva reseña Google · 5 estrellas", time: "18min", accent: "#C88A0A" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + i * 0.15, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <div style={{ color: item.accent, flexShrink: 0, opacity: 0.9 }}>{item.icon}</div>
                <span style={{ fontSize: "11px", color: "rgba(250,249,247,0.6)", flex: 1, lineHeight: 1.3 }}>{item.text}</span>
                <span style={{ fontSize: "8.5px", color: "rgba(250,249,247,0.2)", flexShrink: 0, whiteSpace: "nowrap" }}>hace {item.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* WhatsApp notification — bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.5 }}
        style={{ position: "absolute", bottom: "-36px", left: "-16px", zIndex: 10 }}
      >
        <motion.div
          {...floatY(5, 0.4)}
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "10px 14px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.05)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            minWidth: "196px",
          }}
        >
          <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white" style={{ display: "block" }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "10.5px", fontWeight: 700, color: "#1C1917", lineHeight: 1.2 }}>Reserva confirmada</div>
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

  const variants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.1 } } }
    : heroEntrance

  const containerVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0 } } }
    : staggerContainer

  const itemVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : fadeInUp

  return (
    <section
      style={{
        background: "#16120E",
        position: "relative",
        overflow: "hidden",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        paddingTop: "64px",
        paddingBottom: "60px",
      }}
    >
      {/* Animated gradient orbs */}
      {!shouldReduce && (
        <>
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.95, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "700px",
              height: "700px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(196,103,58,0.12) 0%, transparent 65%)",
              top: "-200px",
              right: "-150px",
              pointerEvents: "none",
              filter: "blur(60px)",
            }}
          />
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, -30, 20, 0], y: [0, 20, -30, 0], scale: [1, 0.92, 1.06, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            style={{
              position: "absolute",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(196,103,58,0.07) 0%, transparent 65%)",
              bottom: "-100px",
              left: "-100px",
              pointerEvents: "none",
              filter: "blur(50px)",
            }}
          />
        </>
      )}

      {/* Dot grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.018,
          backgroundImage: "radial-gradient(circle, rgba(250,249,247,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Two-column grid on large screens */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left column: text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} style={{ marginBottom: "28px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 14px 5px 7px",
                  background: "rgba(196,103,58,0.10)",
                  border: "1px solid rgba(196,103,58,0.22)",
                  borderRadius: "999px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#C4673A",
                    flexShrink: 0,
                    animation: shouldReduce ? "none" : "pulse-dot 2.4s ease-in-out infinite",
                  }}
                />
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C4673A" }}>
                  {t("badge")}
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={variants}
              style={{
                fontSize: "clamp(40px, 5.5vw, 76px)",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                lineHeight: 1.02,
                color: "#FAF9F7",
                marginBottom: "24px",
              }}
            >
              {t("title1")}{" "}
              <span style={{ color: "#C4673A" }}>{t("title2")}</span>
              <br />
              {t("title3")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "16px",
                lineHeight: 1.75,
                color: "rgba(250,249,247,0.45)",
                maxWidth: "480px",
                marginBottom: "40px",
              }}
            >
              {t("subtitle")}
            </motion.p>

            {/* Check list */}
            <motion.ul
              variants={itemVariants}
              style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}
            >
              {["Sin jerga técnica", "Sin plantillas genéricas", "Instalación 100% incluida"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(42,122,87,0.15)", border: "1px solid rgba(42,122,87,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <IconCheck size={10} color="#2A7A57" />
                  </div>
                  <span style={{ fontSize: "13.5px", color: "rgba(250,249,247,0.58)", fontWeight: 500 }}>{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={itemVariants} style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "56px" }}>
              <Link
                href="/contacto"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  background: "#C4673A",
                  color: "#fff",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "-0.1px",
                  transition: "background 0.18s cubic-bezier(0.16,1,0.3,1), transform 0.18s cubic-bezier(0.16,1,0.3,1), box-shadow 0.18s",
                  boxShadow: "0 0 0 0 rgba(196,103,58,0)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "#9E5230"
                  el.style.transform = "translateY(-2px)"
                  el.style.boxShadow = "0 8px 28px rgba(196,103,58,0.40)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "#C4673A"
                  el.style.transform = "none"
                  el.style.boxShadow = "none"
                }}
              >
                {t("cta_primary")}
                <IconArrowRight size={16} />
              </Link>
              <Link
                href="/servicios"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "14px 28px",
                  color: "rgba(250,249,247,0.55)",
                  borderRadius: "8px",
                  border: "1.5px solid rgba(250,249,247,0.12)",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = "rgba(250,249,247,0.88)"
                  el.style.borderColor = "rgba(250,249,247,0.26)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = "rgba(250,249,247,0.55)"
                  el.style.borderColor = "rgba(250,249,247,0.12)"
                }}
              >
                {t("cta_secondary")}
              </Link>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              variants={itemVariants}
              style={{
                paddingTop: "24px",
                borderTop: "1px solid rgba(250,249,247,0.07)",
                display: "flex",
                gap: "32px 40px",
                flexWrap: "wrap",
              }}
            >
              {[
                { value: tTrust("stat1_value"), label: tTrust("stat1_label") },
                { value: tTrust("stat2_value"), label: tTrust("stat2_label") },
                { value: tTrust("stat3_value"), label: tTrust("stat3_label") },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.05em", color: "#FAF9F7", lineHeight: 1, marginBottom: "4px" }}>
                    {value}
                  </div>
                  <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "rgba(250,249,247,0.28)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column: dashboard mockup */}
          <div className="hidden lg:block" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
            <SenyDashboard reduced={!!shouldReduce} />
          </div>
        </div>
      </div>
    </section>
  )
}
