"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { staggerContainer, fadeInUp } from "@/lib/variants"
import {
  IconBowlSpoon,
  IconBuildingSkyscraper,
  IconActivityHeartbeat,
  IconArrowRight,
} from "@tabler/icons-react"

interface NicheCardProps {
  category: string
  title: string
  pain: string
  solution: string
  price: string
  ctaLabel: string
  ctaHref: string
  icon: React.ReactNode
  large?: boolean
}

function NicheCard({
  category,
  title,
  pain,
  solution,
  price,
  ctaLabel,
  ctaHref,
  icon,
  large,
}: NicheCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(28,25,23,0.09)",
        borderRadius: "12px",
        padding: large ? "32px" : "24px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        transition: "border-color 0.2s, box-shadow 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)",
        cursor: "default",
        height: "100%",
      }}
      whileHover={{
        y: -2,
        boxShadow: "0 4px 16px rgba(28,25,23,0.09)",
        borderColor: "rgba(28,25,23,0.18)",
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "9.5px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#C4673A",
              padding: "3px 10px",
              background: "rgba(196,103,58,0.09)",
              border: "1px solid rgba(196,103,58,0.22)",
              borderRadius: "4px",
            }}
          >
            {category}
          </span>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              border: "1px solid rgba(28,25,23,0.09)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#57534E",
            }}
          >
            {icon}
          </div>
        </div>

        <h3
          style={{
            fontSize: large ? "20px" : "17px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#1C1917",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Pain section */}
      <div
        style={{
          background: "#FCEBEB",
          border: "1px solid rgba(194,59,59,0.14)",
          borderRadius: "8px",
          padding: "14px 16px",
          marginBottom: "18px",
        }}
      >
        <p
          style={{
            fontSize: "8.5px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#C23B3B",
            marginBottom: "6px",
          }}
        >
          Dónde sangra
        </p>
        <p
          style={{
            fontSize: "13px",
            lineHeight: 1.65,
            color: "#7A2020",
          }}
        >
          {pain}
        </p>
      </div>

      {/* Solution */}
      <p
        style={{
          fontSize: "13.5px",
          lineHeight: 1.65,
          color: "#57534E",
          marginBottom: "20px",
          flex: 1,
        }}
      >
        {solution}
      </p>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "16px",
          borderTop: "1px solid rgba(28,25,23,0.07)",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "#2A7A57",
            letterSpacing: "-0.2px",
          }}
        >
          {price}
        </span>
        <Link
          href={ctaHref}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "12.5px",
            fontWeight: 600,
            color: "#C4673A",
            textDecoration: "none",
            transition: "gap 0.2s",
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.gap = "8px"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.gap = "4px"
          }}
        >
          {ctaLabel}
          <IconArrowRight size={14} />
        </Link>
      </div>
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
    <section
      style={{
        background: "#FAF9F7",
        padding: "96px 0",
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
          style={{ marginBottom: "56px" }}
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
              fontSize: "clamp(32px, 3.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.06,
              color: "#1C1917",
            }}
          >
            {t("heading")}
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "auto",
            gap: "20px",
          }}
          className="lg:grid-cols-2 grid-cols-1"
        >
          {/* Hotels — spans 2 rows on desktop */}
          <div style={{ gridRow: "span 2" }} className="col-span-1">
            <NicheCard
              category={t("hotels.category")}
              title={t("hotels.title")}
              pain={t("hotels.pain")}
              solution={t("hotels.solution")}
              price={t("hotels.price")}
              ctaLabel={t("hotels.cta")}
              ctaHref="/servicios#hoteleria"
              icon={<IconBuildingSkyscraper size={18} />}
              large
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
            icon={<IconBowlSpoon size={18} />}
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
            icon={<IconActivityHeartbeat size={18} />}
          />
        </motion.div>
      </div>
    </section>
  )
}
