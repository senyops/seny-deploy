"use client"

import { useState } from "react"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { IconPlus } from "@tabler/icons-react"

const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const

interface FAQItem {
  q: string
  a: string
}

function FAQRow({ item, index, reduced }: { item: FAQItem; index: number; reduced: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: EASE_OUT_QUART }}
      style={{
        borderBottom: "1px solid var(--faq-border)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "22px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "inherit",
        }}
        aria-expanded={open}
      >
        <span style={{
          fontSize: "15px",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          color: "var(--faq-q)",
          lineHeight: 1.4,
          flex: 1,
          transition: "color 0.18s ease",
        }}>
          {item.q}
        </span>
        {/* Rotating plus icon */}
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={reduced ? { duration: 0 } : { duration: 0.22, ease: EASE_OUT_QUART }}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: open ? "#C4673A" : "rgba(196,103,58,0.10)",
            border: open ? "none" : "1px solid rgba(196,103,58,0.20)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: open ? "#fff" : "#C4673A",
          }}
        >
          <IconPlus size={14} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reduced
              ? { duration: 0 }
              : { duration: 0.32, ease: EASE_OUT_QUART }
            }
            style={{ overflow: "hidden" }}
          >
            <p style={{
              paddingBottom: "24px",
              paddingRight: "48px",
              fontSize: "14px",
              lineHeight: 1.78,
              color: "var(--faq-a)",
            }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const t = useTranslations("faq")
  const shouldReduce = useReducedMotion()
  const items = t.raw("items") as FAQItem[]

  return (
    <section style={{
      background: "var(--bg-page)",
      padding: "120px 0",
      position: "relative",
      overflow: "hidden",
      transition: "background 0.25s ease",
    }}>
      {/* Warm orb bottom left */}
      <div aria-hidden="true" style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(196,103,58,0.05) 0%, transparent 65%)",
        bottom: "-200px",
        left: "-100px",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-16 lg:gap-24">
          {/* Left: sticky label */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: EASE_OUT_QUART }}
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
            <h2 style={{
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1.08,
              color: "var(--faq-q)",
              marginBottom: "24px",
            }}>
              {t("heading")}
            </h2>
            {/* Decorative line */}
            <div style={{
              width: "48px",
              height: "3px",
              borderRadius: "2px",
              background: "linear-gradient(to right, #C4673A, rgba(196,103,58,0.2))",
            }} />
          </motion.div>

          {/* Right: accordion */}
          <div style={{ borderTop: "1px solid var(--faq-border)" }}>
            {items.map((item, i) => (
              <FAQRow
                key={i}
                item={item}
                index={i}
                reduced={!!shouldReduce}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
