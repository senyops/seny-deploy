"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { IconArrowRight, IconPhone } from "@tabler/icons-react"

export default function CTASection() {
  const t = useTranslations("cta_section")
  const shouldReduce = useReducedMotion()

  return (
    <section
      style={{
        background: "#16120E",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated blobs */}
      {!shouldReduce && (
        <>
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.1, 0.9, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "800px",
              height: "800px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(196,103,58,0.14) 0%, transparent 60%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              filter: "blur(80px)",
            }}
          />
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, -60, 40, 0], y: [0, 50, -40, 0], scale: [1, 0.88, 1.12, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            style={{
              position: "absolute",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(196,103,58,0.08) 0%, transparent 60%)",
              bottom: "-100px",
              right: "-50px",
              pointerEvents: "none",
              filter: "blur(60px)",
            }}
          />
        </>
      )}

      {/* Grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.015,
          backgroundImage: "radial-gradient(circle, rgba(250,249,247,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      {/* Decorative corner lines */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          width: "60px",
          height: "60px",
          borderTop: "1.5px solid rgba(196,103,58,0.25)",
          borderLeft: "1.5px solid rgba(196,103,58,0.25)",
          borderRadius: "2px",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          width: "60px",
          height: "60px",
          borderBottom: "1.5px solid rgba(196,103,58,0.25)",
          borderRight: "1.5px solid rgba(196,103,58,0.25)",
          borderRadius: "2px",
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
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}
          >
            <div style={{ height: "1px", width: "32px", background: "rgba(196,103,58,0.5)" }} />
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C4673A" }}>
              Diagnóstico gratuito
            </span>
            <div style={{ height: "1px", width: "32px", background: "rgba(196,103,58,0.5)" }} />
          </motion.div>

          <h2
            style={{
              fontSize: "clamp(34px, 4.5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1.04,
              color: "#FAF9F7",
              marginBottom: "24px",
              maxWidth: "780px",
              margin: "0 auto 24px",
            }}
          >
            {t("heading")}
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              color: "rgba(250,249,247,0.42)",
              maxWidth: "440px",
              margin: "0 auto 48px",
            }}
          >
            {t("subtitle")}
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center", marginBottom: "56px" }}>
            <motion.div
              whileHover={shouldReduce ? {} : { scale: 1.03, y: -2 }}
              whileTap={shouldReduce ? {} : { scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contacto"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "16px 36px",
                  background: "#C4673A",
                  color: "#fff",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "-0.1px",
                  boxShadow: "0 0 48px rgba(196,103,58,0.30)",
                  transition: "background 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "#9E5230"
                  el.style.boxShadow = "0 0 64px rgba(196,103,58,0.50)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "#C4673A"
                  el.style.boxShadow = "0 0 48px rgba(196,103,58,0.30)"
                }}
              >
                {t("button")}
                <IconArrowRight size={18} />
              </Link>
            </motion.div>

            <Link
              href="tel:+34600000000"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 28px",
                color: "rgba(250,249,247,0.50)",
                borderRadius: "10px",
                border: "1.5px solid rgba(250,249,247,0.10)",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "rgba(250,249,247,0.80)"
                el.style.borderColor = "rgba(250,249,247,0.22)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = "rgba(250,249,247,0.50)"
                el.style.borderColor = "rgba(250,249,247,0.10)"
              }}
            >
              <IconPhone size={16} />
              hola@senyops.com
            </Link>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "28px 40px",
              justifyContent: "center",
              paddingTop: "40px",
              borderTop: "1px solid rgba(250,249,247,0.06)",
            }}
          >
            {[
              { value: "+40%", label: "pedidos turistas" },
              { value: "−70%", label: "no-shows clínicas" },
              { value: "−60%", label: "mensajes repetidos" },
            ].map(({ value, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ textAlign: "center" }}
              >
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#C4673A", letterSpacing: "-0.05em", lineHeight: 1 }}>
                  {value}
                </div>
                <div style={{ fontSize: "10px", fontWeight: 600, color: "rgba(250,249,247,0.28)", letterSpacing: "0.07em", textTransform: "uppercase", marginTop: "6px" }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
