"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { staggerContainer, fadeInUp } from "@/lib/variants"

export default function HowItWorksSection() {
  const t = useTranslations("howItWorks")
  const shouldReduce = useReducedMotion()

  const steps = (t.raw("steps") as Array<{ num: string; title: string; desc: string }>)

  const containerVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerContainer

  const itemVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : fadeInUp

  return (
    <section
      style={{
        background: "#F3F0EC",
        padding: "96px 0",
        borderTop: "1px solid rgba(28,25,23,0.07)",
        borderBottom: "1px solid rgba(28,25,23,0.07)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "64px", maxWidth: "480px" }}
        >
          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#C4673A",
              marginBottom: "14px",
            }}
          >
            {t("eyebrow")}
          </p>
          <h2
            style={{
              fontSize: "clamp(30px, 3vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.06,
              color: "#1C1917",
            }}
          >
            {t("heading")}
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0",
            position: "relative",
          }}
          className="md:grid-cols-3 grid-cols-1"
        >
          {/* Connecting line (desktop only) */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "28px",
              left: "calc(16.66% + 16px)",
              right: "calc(16.66% + 16px)",
              height: "1px",
              background:
                "linear-gradient(to right, rgba(196,103,58,0.25), rgba(196,103,58,0.08))",
              zIndex: 0,
            }}
            className="hidden md:block"
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              variants={itemVariants}
              style={{
                position: "relative",
                zIndex: 1,
                padding: "0 32px 0 0",
              }}
              className={index < steps.length - 1 ? "pb-8 md:pb-0" : ""}
            >
              {/* Number bubble */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "#FAF9F7",
                  border: "1.5px solid rgba(196,103,58,0.28)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#C4673A",
                  }}
                >
                  {step.num}
                </span>
                {/* Terracota dot ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-4px",
                    borderRadius: "50%",
                    border: "1px solid rgba(196,103,58,0.10)",
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#1C1917",
                  marginBottom: "10px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "13.5px",
                  lineHeight: 1.72,
                  color: "#57534E",
                  maxWidth: "280px",
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
