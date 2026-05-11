"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { IconArrowRight } from "@tabler/icons-react"

export default function CTASection() {
  const t = useTranslations("cta_section")
  const shouldReduce = useReducedMotion()

  return (
    <section
      style={{
        background: "#16120E",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(196,103,58,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Accent rule */}
          <div
            style={{
              width: "32px",
              height: "2px",
              background: "#C4673A",
              borderRadius: "1px",
              margin: "0 auto 32px",
            }}
          />

          <h2
            style={{
              fontSize: "clamp(30px, 3.5vw, 50px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.06,
              color: "#FAF9F7",
              marginBottom: "20px",
              maxWidth: "680px",
              margin: "0 auto 20px",
            }}
          >
            {t("heading")}
          </h2>

          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.72,
              color: "rgba(250,249,247,0.45)",
              maxWidth: "440px",
              margin: "0 auto 40px",
            }}
          >
            {t("subtitle")}
          </p>

          <Link
            href="/contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              background: "#C4673A",
              color: "#fff",
              borderRadius: "8px",
              fontSize: "14.5px",
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
              el.style.boxShadow = "0 8px 32px rgba(196,103,58,0.35)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "#C4673A"
              el.style.transform = "none"
              el.style.boxShadow = "none"
            }}
          >
            {t("button")}
            <IconArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
