"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { staggerContainer, fadeInUp } from "@/lib/variants"
import {
  IconBuildingHospital,
  IconLanguage,
  IconSparkles,
  IconHandStop,
} from "@tabler/icons-react"

const ICONS = [
  <IconBuildingHospital size={20} key="1" />,
  <IconLanguage size={20} key="2" />,
  <IconSparkles size={20} key="3" />,
  <IconHandStop size={20} key="4" />,
]

export default function WhySenySection() {
  const t = useTranslations("why")
  const shouldReduce = useReducedMotion()

  const reasons = t.raw("reasons") as Array<{ title: string; desc: string }>

  const containerVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerContainer

  const itemVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : fadeInUp

  return (
    <section style={{ background: "#FAF9F7", padding: "96px 0" }}>
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
          style={{ marginBottom: "56px", maxWidth: "480px" }}
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

        {/* Reasons grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
          className="md:grid-cols-2 grid-cols-1"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(28,25,23,0.08)",
                borderRadius: "12px",
                padding: "28px",
                transition:
                  "border-color 0.2s, box-shadow 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)",
              }}
              whileHover={{
                y: -2,
                boxShadow: "0 4px 16px rgba(28,25,23,0.08)",
                borderColor: "rgba(28,25,23,0.14)",
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "rgba(196,103,58,0.08)",
                  border: "1px solid rgba(196,103,58,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "18px",
                  color: "#C4673A",
                }}
              >
                {ICONS[i % ICONS.length]}
              </div>

              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#1C1917",
                  marginBottom: "8px",
                }}
              >
                {reason.title}
              </h3>
              <p
                style={{
                  fontSize: "13.5px",
                  lineHeight: 1.72,
                  color: "#57534E",
                }}
              >
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
