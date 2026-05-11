"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { staggerContainer, fadeInUp } from "@/lib/variants"
import { IconBowlSpoon, IconBuildingSkyscraper, IconActivityHeartbeat, IconArrowRight } from "@tabler/icons-react"

interface NicheCardProps {
  category: string
  title: string
  pain: string
  solution: string
  price: string
  ctaLabel: string
  ctaHref: string
  icon: React.ReactNode
  accent: string
  large?: boolean
  illustrationSlot: React.ReactNode
}

function NicheCard({ category, title, pain, solution, price, ctaLabel, ctaHref, icon, accent, large, illustrationSlot }: NicheCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(28,25,23,0.08)",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        cursor: "default",
        transition: "box-shadow 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}
      whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(28,25,23,0.12)", borderColor: "rgba(28,25,23,0.14)" }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Illustrated header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${accent}14 0%, ${accent}08 100%)`,
          borderBottom: `1px solid ${accent}18`,
          padding: large ? "28px 28px 20px" : "20px 24px 16px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative circles */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            background: `${accent}08`,
            top: "-60px",
            right: "-40px",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: `${accent}06`,
            bottom: "-20px",
            right: "60px",
            pointerEvents: "none",
          }}
        />

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", position: "relative", zIndex: 1 }}>
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: accent,
                padding: "3px 10px",
                background: `${accent}14`,
                border: `1px solid ${accent}28`,
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            >
              {category}
            </span>
            <h3
              style={{
                fontSize: large ? "20px" : "17px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#1C1917",
                lineHeight: 1.25,
              }}
            >
              {title}
            </h3>
          </div>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "#FFFFFF",
              border: `1px solid ${accent}22`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              color: accent,
              boxShadow: "0 2px 8px rgba(28,25,23,0.06)",
            }}
          >
            {icon}
          </div>
        </div>

        {/* Illustration slot */}
        {illustrationSlot}
      </div>

      {/* Body */}
      <div style={{ padding: large ? "24px 28px" : "20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Pain */}
        <div
          style={{
            background: "#FEF2F2",
            border: "1px solid rgba(194,59,59,0.12)",
            borderLeft: "3px solid #C23B3B",
            borderRadius: "6px",
            padding: "12px 14px",
            marginBottom: "16px",
          }}
        >
          <p style={{ fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C23B3B", marginBottom: "5px" }}>
            Dónde sangra
          </p>
          <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#7A2020" }}>{pain}</p>
        </div>

        {/* Solution */}
        <div
          style={{
            background: "rgba(42,122,87,0.05)",
            border: "1px solid rgba(42,122,87,0.12)",
            borderLeft: "3px solid #2A7A57",
            borderRadius: "6px",
            padding: "12px 14px",
            marginBottom: "20px",
            flex: 1,
          }}
        >
          <p style={{ fontSize: "8.5px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2A7A57", marginBottom: "5px" }}>
            La solución Seny
          </p>
          <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#1C6644" }}>{solution}</p>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "16px",
            borderTop: "1px solid rgba(28,25,23,0.06)",
          }}
        >
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#2A7A57", letterSpacing: "-0.2px" }}>{price}</span>
          <Link
            href={ctaHref}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12.5px",
              fontWeight: 700,
              color: accent,
              textDecoration: "none",
              transition: "gap 0.2s, opacity 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "10px" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "6px" }}
          >
            {ctaLabel}
            <IconArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// Mini UI illustrations for each niche
function MenuIllustration() {
  return (
    <div style={{ marginTop: "16px", display: "flex", gap: "6px" }}>
      {["ES", "EN", "FR"].map((lang, i) => (
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: i === 0 ? "#C4673A" : "#FFFFFF",
            border: `1px solid ${i === 0 ? "#C4673A" : "rgba(28,25,23,0.12)"}`,
            borderRadius: "6px",
            padding: "5px 10px",
            fontSize: "9px",
            fontWeight: 800,
            color: i === 0 ? "#fff" : "#1C1917",
            letterSpacing: "0.06em",
            boxShadow: i === 0 ? "0 2px 8px rgba(196,103,58,0.3)" : "0 1px 4px rgba(28,25,23,0.06)",
          }}
        >
          {lang}
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4 }}
        style={{ display: "flex", alignItems: "center", gap: "4px", marginLeft: "6px" }}
      >
        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2A7A57", animation: "pulse-dot 2.4s ease-in-out infinite" }} />
        <span style={{ fontSize: "8px", color: "#2A7A57", fontWeight: 700 }}>QR activo</span>
      </motion.div>
    </div>
  )
}

function HotelIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        marginTop: "16px",
        background: "#16120E",
        borderRadius: "8px",
        padding: "10px 12px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div style={{ width: "22px", height: "22px", borderRadius: "6px", background: "rgba(196,103,58,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C4673A" strokeWidth="2.5" strokeLinecap="round">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "9.5px", fontWeight: 700, color: "#FAF9F7", letterSpacing: "-0.1px" }}>Código de acceso: 4821</div>
        <div style={{ fontSize: "8px", color: "rgba(250,249,247,0.35)", marginTop: "2px" }}>WiFi · Normas · Checkout · 5 idiomas</div>
      </div>
      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2A7A57", animation: "pulse-dot 2.4s ease-in-out infinite", flexShrink: 0 }} />
    </motion.div>
  )
}

function ClinicIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "5px" }}
    >
      {[
        { label: "Recordatorio 48h", time: "10:00", ok: true },
        { label: "Confirmación recibida", time: "10:04", ok: true },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(42,122,87,0.08)", border: "1px solid rgba(42,122,87,0.14)", borderRadius: "6px", padding: "7px 10px" }}>
          <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#2A7A57", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <span style={{ fontSize: "10px", fontWeight: 600, color: "#1C6644", flex: 1 }}>{item.label}</span>
          <span style={{ fontSize: "8.5px", color: "#78716C" }}>{item.time}</span>
        </div>
      ))}
    </motion.div>
  )
}

export default function NicheSection() {
  const t = useTranslations("niches")
  const shouldReduce = useReducedMotion()

  const containerVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerContainer

  return (
    <section style={{ background: "#FAF9F7", padding: "112px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "64px" }}
        >
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4673A", marginBottom: "16px" }}>
            {t("eyebrow")}
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
            <h2 style={{ fontSize: "clamp(32px, 3.5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.06, color: "#1C1917", maxWidth: "560px" }}>
              {t("heading")}
            </h2>
            <p style={{ fontSize: "14px", color: "#78716C", maxWidth: "280px", lineHeight: 1.7 }}>
              Tres nichos. Un método. Resultados medibles desde el primer mes.
            </p>
          </div>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          {/* Hotels — tall left card */}
          <div className="row-span-1 lg:row-span-2">
            <NicheCard
              category={t("hotels.category")}
              title={t("hotels.title")}
              pain={t("hotels.pain")}
              solution={t("hotels.solution")}
              price={t("hotels.price")}
              ctaLabel={t("hotels.cta")}
              ctaHref="/servicios#hoteleria"
              icon={<IconBuildingSkyscraper size={20} />}
              accent="#C4673A"
              large
              illustrationSlot={<HotelIllustration />}
            />
          </div>

          {/* Restaurants */}
          <NicheCard
            category={t("restaurants.category")}
            title={t("restaurants.title")}
            pain={t("restaurants.pain")}
            solution={t("restaurants.solution")}
            price={t("restaurants.price")}
            ctaLabel={t("restaurants.cta")}
            ctaHref="/servicios#restaurantes"
            icon={<IconBowlSpoon size={20} />}
            accent="#9E5230"
            illustrationSlot={<MenuIllustration />}
          />

          {/* Clinics */}
          <NicheCard
            category={t("clinics.category")}
            title={t("clinics.title")}
            pain={t("clinics.pain")}
            solution={t("clinics.solution")}
            price={t("clinics.price")}
            ctaLabel={t("clinics.cta")}
            ctaHref="/servicios#clinicas"
            icon={<IconActivityHeartbeat size={20} />}
            accent="#2A7A57"
            illustrationSlot={<ClinicIllustration />}
          />
        </motion.div>
      </div>
    </section>
  )
}
