"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { staggerContainer, fadeInUp } from "@/lib/variants"
import {
  IconCheck,
  IconBowlSpoon,
  IconBuildingSkyscraper,
  IconActivityHeartbeat,
  IconArrowRight,
} from "@tabler/icons-react"

function ServiceSection({
  id,
  eyebrow,
  heading,
  painTitle,
  painDesc,
  solutionTitle,
  features,
  price,
  priceNote,
  icon,
  reverse,
}: {
  id: string
  eyebrow: string
  heading: string
  painTitle: string
  painDesc: string
  solutionTitle: string
  features: string[]
  price: string
  priceNote: string
  icon: React.ReactNode
  reverse?: boolean
}) {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id={id}
      style={{
        padding: "96px 0",
        borderBottom: "1px solid rgba(28,25,23,0.07)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "start",
        }}
        className="lg:grid-cols-2 grid-cols-1"
      >
        {/* Content */}
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ order: reverse ? 2 : 1 }}
          className={reverse ? "md:order-2" : "md:order-1"}
        >
          {/* Eyebrow + icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "rgba(196,103,58,0.09)",
                border: "1px solid rgba(196,103,58,0.22)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#C4673A",
              }}
            >
              {icon}
            </div>
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#C4673A",
              }}
            >
              {eyebrow}
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(26px, 2.8vw, 38px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "#1C1917",
              marginBottom: "28px",
            }}
          >
            {heading}
          </h2>

          {/* Pain */}
          <div
            style={{
              background: "#FCEBEB",
              border: "1px solid rgba(194,59,59,0.14)",
              borderRadius: "10px",
              padding: "18px 20px",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#C23B3B",
                marginBottom: "8px",
              }}
            >
              {painTitle}
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.65,
                color: "#7A2020",
              }}
            >
              {painDesc}
            </p>
          </div>

          {/* Price */}
          <div
            style={{
              paddingTop: "20px",
              borderTop: "1px solid rgba(28,25,23,0.08)",
            }}
          >
            <Link
              href="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                background: "#C4673A",
                color: "#fff",
                borderRadius: "8px",
                fontSize: "13.5px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.18s, transform 0.18s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "#9E5230"
                el.style.transform = "translateY(-1px)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "#C4673A"
                el.style.transform = "none"
              }}
            >
              Solicitar diagnóstico
              <IconArrowRight size={15} />
            </Link>
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(28,25,23,0.09)",
            borderRadius: "16px",
            padding: "32px",
            boxShadow: "0 4px 16px rgba(28,25,23,0.07)",
            order: reverse ? 1 : 2,
          }}
          className={reverse ? "md:order-1" : "md:order-2"}
        >
          <p
            style={{
              fontSize: "9.5px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#A8A29E",
              marginBottom: "20px",
            }}
          >
            {solutionTitle}
          </p>

          {/* Features list */}
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
            {features.map((feature, i) => (
              <li
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
              >
                <span
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "rgba(42,122,87,0.10)",
                    border: "1px solid rgba(42,122,87,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "1px",
                    color: "#2A7A57",
                  }}
                >
                  <IconCheck size={11} strokeWidth={2.5} />
                </span>
                <span
                  style={{
                    fontSize: "13.5px",
                    lineHeight: 1.65,
                    color: "#57534E",
                  }}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Price block */}
          <div
            style={{
              background: "rgba(42,122,87,0.06)",
              border: "1px solid rgba(42,122,87,0.18)",
              borderRadius: "10px",
              padding: "16px 20px",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#2A7A57",
                lineHeight: 1,
                marginBottom: "6px",
              }}
            >
              {price}
            </p>
            <p
              style={{
                fontSize: "11.5px",
                color: "#2A7A57",
                opacity: 0.75,
              }}
            >
              {priceNote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function ServiciosContent() {
  const t = useTranslations("servicios_page")

  return (
    <div style={{ background: "#FAF9F7" }}>
      {/* Page hero */}
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
              "radial-gradient(ellipse 50% 60% at 80% 20%, rgba(196,103,58,0.08) 0%, transparent 60%)",
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

      {/* Restaurants */}
      <ServiceSection
        id="restaurantes"
        eyebrow={t("restaurants.eyebrow")}
        heading={t("restaurants.heading")}
        painTitle={t("restaurants.pain_title")}
        painDesc={t("restaurants.pain_desc")}
        solutionTitle={t("restaurants.solution_title")}
        features={t.raw("restaurants.features") as string[]}
        price={t("restaurants.price")}
        priceNote={t("restaurants.price_note")}
        icon={<IconBowlSpoon size={18} />}
      />

      {/* Hotels */}
      <ServiceSection
        id="hoteleria"
        eyebrow={t("hotels.eyebrow")}
        heading={t("hotels.heading")}
        painTitle={t("hotels.pain_title")}
        painDesc={t("hotels.pain_desc")}
        solutionTitle={t("hotels.solution_title")}
        features={t.raw("hotels.features") as string[]}
        price={t("hotels.price")}
        priceNote={t("hotels.price_note")}
        icon={<IconBuildingSkyscraper size={18} />}
        reverse
      />

      {/* Clinics */}
      <ServiceSection
        id="clinicas"
        eyebrow={t("clinics.eyebrow")}
        heading={t("clinics.heading")}
        painTitle={t("clinics.pain_title")}
        painDesc={t("clinics.pain_desc")}
        solutionTitle={t("clinics.solution_title")}
        features={t.raw("clinics.features") as string[]}
        price={t("clinics.price")}
        priceNote={t("clinics.price_note")}
        icon={<IconActivityHeartbeat size={18} />}
      />
    </div>
  )
}
