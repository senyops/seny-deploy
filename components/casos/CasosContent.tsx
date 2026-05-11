"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { staggerContainer, fadeInUp } from "@/lib/variants"
import { IconX, IconCheck } from "@tabler/icons-react"

interface CaseCardProps {
  client: string
  location: string
  type: string
  beforeTitle: string
  beforeItems: string[]
  afterTitle: string
  afterItems: string[]
  statValue: string
  statLabel: string
}

function CaseCard({
  client,
  location,
  type,
  beforeTitle,
  beforeItems,
  afterTitle,
  afterItems,
  statValue,
  statLabel,
}: CaseCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(28,25,23,0.09)",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(28,25,23,0.07)",
        transition: "box-shadow 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}
      whileHover={{
        y: -2,
        boxShadow: "0 8px 32px rgba(28,25,23,0.10)",
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Card header */}
      <div
        style={{
          padding: "24px 28px 20px",
          borderBottom: "1px solid rgba(28,25,23,0.07)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#1C1917",
              marginBottom: "4px",
            }}
          >
            {client}
          </h3>
          <p
            style={{
              fontSize: "12px",
              color: "#A8A29E",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {location}
          </p>
        </div>
        <span
          style={{
            fontSize: "9.5px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#C4673A",
            padding: "3px 10px",
            background: "rgba(196,103,58,0.09)",
            border: "1px solid rgba(196,103,58,0.22)",
            borderRadius: "4px",
            whiteSpace: "nowrap",
          }}
        >
          {type}
        </span>
      </div>

      {/* Before / After grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
        className="sm:grid-cols-2 grid-cols-1"
      >
        {/* Before */}
        <div
          style={{
            padding: "24px 28px",
            borderRight: "1px solid rgba(28,25,23,0.07)",
            background: "#FDFAFA",
          }}
          className="border-r-0 sm:border-r"
        >
          <p
            style={{
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#C23B3B",
              marginBottom: "16px",
            }}
          >
            {beforeTitle}
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {beforeItems.map((item, i) => (
              <li
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: "2px",
                    color: "#C23B3B",
                    opacity: 0.7,
                  }}
                >
                  <IconX size={14} strokeWidth={2.5} />
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#7A5555",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div style={{ padding: "24px 28px" }}>
          <p
            style={{
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#2A7A57",
              marginBottom: "16px",
            }}
          >
            {afterTitle}
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {afterItems.map((item, i) => (
              <li
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    marginTop: "2px",
                    color: "#2A7A57",
                  }}
                >
                  <IconCheck size={14} strokeWidth={2.5} />
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#3D5A4B",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stat bar */}
      <div
        style={{
          padding: "20px 28px",
          background: "#16120E",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontSize: "28px",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            color: "#C4673A",
            lineHeight: 1,
          }}
        >
          {statValue}
        </span>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "rgba(250,249,247,0.45)",
          }}
        >
          {statLabel}
        </span>
      </div>
    </motion.article>
  )
}

export default function CasosContent() {
  const t = useTranslations("casos_page")
  const shouldReduce = useReducedMotion()

  const cases = t.raw("cases") as Array<{
    client: string
    location: string
    type: string
    before_title: string
    before_items: string[]
    after_title: string
    after_items: string[]
    stat_value: string
    stat_label: string
  }>

  const containerVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerContainer

  return (
    <div style={{ background: "#FAF9F7" }}>
      {/* Hero */}
      <section
        style={{
          background: "#16120E",
          padding: "120px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 50% 60% at 20% 80%, rgba(196,103,58,0.08) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#C4673A",
                display: "block",
                marginBottom: "16px",
              }}
            >
              {t("eyebrow")}
            </span>
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                lineHeight: 1.04,
                color: "#FAF9F7",
                maxWidth: "640px",
                marginBottom: "20px",
              }}
            >
              {t("heading")}
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.72,
                color: "rgba(250,249,247,0.45)",
                maxWidth: "480px",
              }}
            >
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases grid */}
      <section style={{ padding: "80px 0 96px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {cases.map((c) => (
              <CaseCard
                key={c.client}
                client={c.client}
                location={c.location}
                type={c.type}
                beforeTitle={c.before_title}
                beforeItems={c.before_items}
                afterTitle={c.after_title}
                afterItems={c.after_items}
                statValue={c.stat_value}
                statLabel={c.stat_label}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
