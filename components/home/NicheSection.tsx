"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { IconBowlSpoon, IconBuildingSkyscraper, IconActivityHeartbeat, IconArrowRight } from "@tabler/icons-react"
import SpotlightCard from "@/components/ui/SpotlightCard"

const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const

interface CardProps {
  category: string; title: string; pain: string; solution: string
  price: string; ctaLabel: string; ctaHref: string
  icon: React.ReactNode; accent: string; large?: boolean
  illustrationSlot: React.ReactNode; reduced: boolean
}

function NicheCard({ category, title, pain, solution, price, ctaLabel, ctaHref, icon, accent, large, illustrationSlot, reduced }: CardProps) {
  return (
    <SpotlightCard
      disabled={reduced}
      spotlightColor={`${accent}22`}
      tiltDeg={5}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-card)",
        borderRadius: "18px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        transition: "box-shadow 0.3s cubic-bezier(.165,.84,.44,1)",
      }}
    >
      {/* Illustrated header */}
      <div style={{ background: `linear-gradient(145deg, ${accent}12 0%, ${accent}06 100%)`, borderBottom: `1px solid ${accent}16`, padding: large ? "28px 28px 22px" : "22px 24px 18px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", width: "180px", height: "180px", borderRadius: "50%", background: `${accent}08`, top: "-70px", right: "-50px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "14px" }}>
            <span style={{ display: "inline-flex", fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, padding: "3px 10px", background: `${accent}14`, border: `1px solid ${accent}28`, borderRadius: "4px" }}>
              {category}
            </span>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "var(--bg-card)", border: `1px solid ${accent}20`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: accent, boxShadow: "0 2px 8px rgba(28,25,23,0.07)" }}>
              {icon}
            </div>
          </div>
          <h3 style={{ fontSize: large ? "21px" : "17px", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--text-1)", lineHeight: 1.22 }}>{title}</h3>
          {illustrationSlot}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: large ? "24px 28px" : "20px 24px", flex: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 2 }}>
        <div style={{ background: "var(--pain-bg)", border: "1px solid rgba(194,59,59,0.10)", borderLeft: "3px solid #C23B3B", borderRadius: "6px", padding: "12px 14px", marginBottom: "14px" }}>
          <p style={{ fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C23B3B", marginBottom: "5px" }}>Dónde sangra</p>
          <p style={{ fontSize: "13px", lineHeight: 1.65, color: "var(--pain-text)" }}>{pain}</p>
        </div>
        <div style={{ background: "var(--sol-bg)", border: "1px solid rgba(42,122,87,0.10)", borderLeft: "3px solid #2A7A57", borderRadius: "6px", padding: "12px 14px", marginBottom: "20px", flex: 1 }}>
          <p style={{ fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2A7A57", marginBottom: "5px" }}>La solución Seny</p>
          <p style={{ fontSize: "13px", lineHeight: 1.65, color: "var(--sol-text)" }}>{solution}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid var(--border-card)" }}>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#2A7A57", letterSpacing: "-0.2px" }}>{price}</span>
          <Link href={ctaHref} style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12.5px", fontWeight: 700, color: accent, textDecoration: "none", cursor: "pointer", transition: "gap 0.18s cubic-bezier(.165,.84,.44,1)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = "10px" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = "6px" }}>
            {ctaLabel}<IconArrowRight size={14} />
          </Link>
        </div>
      </div>
    </SpotlightCard>
  )
}

function LangBadges() {
  return (
    <div style={{ display: "flex", gap: "6px", marginTop: "16px", flexWrap: "wrap" }}>
      {["ES", "EN", "FR"].map((lang, i) => (
        <motion.div key={lang}
          initial={{ opacity: 0, scale: 0.85, y: 6 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + i * 0.09, duration: 0.35, ease: EASE_OUT_QUART }}
          style={{ background: i === 0 ? "#C4673A" : "var(--bg-card)", border: `1px solid ${i === 0 ? "#C4673A" : "var(--border-card)"}`, borderRadius: "6px", padding: "5px 11px", fontSize: "10px", fontWeight: 800, color: i === 0 ? "#fff" : "var(--text-1)", letterSpacing: "0.05em", boxShadow: i === 0 ? "0 2px 10px rgba(196,103,58,0.32)" : "0 1px 4px rgba(28,25,23,0.06)" }}>
          {lang}
        </motion.div>
      ))}
      <div style={{ display: "flex", alignItems: "center", gap: "5px", marginLeft: "4px" }}>
        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2A7A57", animation: "pulse-dot 2.4s ease-in-out infinite" }} />
        <span style={{ fontSize: "9px", color: "#2A7A57", fontWeight: 700 }}>QR activo</span>
      </div>
    </div>
  )
}

function HotelWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.45, ease: EASE_OUT_QUART }}
      style={{ marginTop: "16px", background: "#16120E", borderRadius: "10px", padding: "12px 14px", display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "rgba(196,103,58,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C4673A" strokeWidth="2.5" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "10.5px", fontWeight: 700, color: "#FAF9F7", letterSpacing: "-0.1px" }}>Código: 4821 · WiFi: seny_guest</div>
        <div style={{ fontSize: "8.5px", color: "rgba(250,249,247,0.32)", marginTop: "2px" }}>Checkout 11h · Normas · 5 idiomas</div>
      </div>
      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2A7A57", animation: "pulse-dot 2.4s ease-in-out infinite", flexShrink: 0 }} />
    </motion.div>
  )
}

function ClinicWidget() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "14px" }}>
      {[
        { text: "Recordatorio 48h enviado", ok: true },
        { text: "Paciente confirmó · SÍ", ok: true },
      ].map((r, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 + i * 0.1, duration: 0.38, ease: EASE_OUT_QUART }}
          style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(42,122,87,0.08)", border: "1px solid rgba(42,122,87,0.14)", borderRadius: "7px", padding: "7px 11px" }}>
          <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#2A7A57", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
          </div>
          <span style={{ fontSize: "11px", fontWeight: 600, color: "#1C6644" }}>{r.text}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default function NicheSection() {
  const t = useTranslations("niches")
  const shouldReduce = useReducedMotion()

  return (
    <section style={{ background: "var(--bg-page)", padding: "120px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: EASE_OUT_QUART }}
          style={{ marginBottom: "68px" }}
        >
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C4673A", marginBottom: "18px" }}>{t("eyebrow")}</p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <h2 style={{ fontSize: "clamp(34px, 3.8vw, 56px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.04, color: "var(--text-1)", maxWidth: "540px" }}>{t("heading")}</h2>
            <p style={{ fontSize: "14px", color: "var(--text-2b)", maxWidth: "260px", lineHeight: 1.72 }}>Tres nichos. Un método. Resultados medibles desde el primer mes.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Hotels: tall card */}
          <motion.div
            className="lg:row-span-2"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: EASE_OUT_QUART }}
          >
            <NicheCard
              category={t("hotels.category")} title={t("hotels.title")} pain={t("hotels.pain")}
              solution={t("hotels.solution")} price={t("hotels.price")} ctaLabel={t("hotels.cta")}
              ctaHref="/servicios#hoteleria" icon={<IconBuildingSkyscraper size={20} />}
              accent="#C4673A" large illustrationSlot={<HotelWidget />} reduced={!!shouldReduce}
            />
          </motion.div>
          {/* Restaurants */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_QUART }}
          >
            <NicheCard
              category={t("restaurants.category")} title={t("restaurants.title")} pain={t("restaurants.pain")}
              solution={t("restaurants.solution")} price={t("restaurants.price")} ctaLabel={t("restaurants.cta")}
              ctaHref="/servicios#restaurantes" icon={<IconBowlSpoon size={20} />}
              accent="#9E5230" illustrationSlot={<LangBadges />} reduced={!!shouldReduce}
            />
          </motion.div>
          {/* Clinics */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE_OUT_QUART }}
          >
            <NicheCard
              category={t("clinics.category")} title={t("clinics.title")} pain={t("clinics.pain")}
              solution={t("clinics.solution")} price={t("clinics.price")} ctaLabel={t("clinics.cta")}
              ctaHref="/servicios#clinicas" icon={<IconActivityHeartbeat size={20} />}
              accent="#2A7A57" illustrationSlot={<ClinicWidget />} reduced={!!shouldReduce}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
