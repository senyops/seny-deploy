"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { heroEntrance, fadeInUp, staggerContainer } from "@/lib/variants"
import { IconArrowRight } from "@tabler/icons-react"

export default function HeroSection() {
  const t = useTranslations("hero")
  const tTrust = useTranslations("trust")
  const shouldReduce = useReducedMotion()

  const variants = shouldReduce
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.1 } },
      }
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
        paddingBottom: "40px",
      }}
    >
      {/* Radial terracota gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 50% at 88% 12%, rgba(196,103,58,0.09) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.015,
          backgroundImage:
            "radial-gradient(circle, rgba(250,249,247,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* Watermark logo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "72px",
          bottom: "72px",
          opacity: 0.04,
          pointerEvents: "none",
        }}
        className="hidden lg:block"
      >
        <svg width="240" height="163" viewBox="0 0 37 25" fill="none">
          <rect x="0" y="0" width="8" height="4" rx="1" fill="#FAF9F7" />
          <rect x="13" y="0" width="24" height="4" rx="1" fill="#FAF9F7" />
          <rect x="0" y="10.5" width="8" height="4" rx="1" fill="#C4673A" />
          <rect x="13" y="10.5" width="16" height="4" rx="1" fill="#C4673A" />
          <rect x="0" y="21" width="8" height="4" rx="1" fill="#FAF9F7" />
          <rect x="13" y="21" width="24" height="4" rx="1" fill="#FAF9F7" />
        </svg>
      </div>

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "760px" }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} style={{ marginBottom: "28px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 14px 4px 6px",
                background: "rgba(196,103,58,0.10)",
                border: "1px solid rgba(196,103,58,0.24)",
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
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#C4673A",
                }}
              >
                {t("badge")}
              </span>
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={variants}
            style={{
              fontSize: "clamp(44px, 6.5vw, 80px)",
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
              color: "rgba(250,249,247,0.46)",
              maxWidth: "500px",
              marginBottom: "40px",
              fontWeight: 400,
            }}
          >
            {t("subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
          >
            <Link
              href="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 26px",
                background: "#C4673A",
                color: "#fff",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "-0.1px",
                transition:
                  "background 0.18s cubic-bezier(0.16,1,0.3,1), transform 0.18s cubic-bezier(0.16,1,0.3,1), box-shadow 0.18s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "#9E5230"
                el.style.transform = "translateY(-2px)"
                el.style.boxShadow = "0 8px 24px rgba(196,103,58,0.30)"
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
                padding: "13px 26px",
                color: "rgba(250,249,247,0.62)",
                borderRadius: "8px",
                border: "1.5px solid rgba(250,249,247,0.14)",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                transition:
                  "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "rgba(250,249,247,0.90)"
                el.style.borderColor = "rgba(250,249,247,0.28)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "rgba(250,249,247,0.62)"
                el.style.borderColor = "rgba(250,249,247,0.14)"
              }}
            >
              {t("cta_secondary")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          style={{
            marginTop: "64px",
            paddingTop: "28px",
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
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#FAF9F7",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "rgba(250,249,247,0.32)",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
