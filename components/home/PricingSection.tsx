"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { IconCheck, IconArrowRight, IconBowlSpoon, IconBuildingSkyscraper, IconActivityHeartbeat } from "@tabler/icons-react"
import SpotlightCard from "@/components/ui/SpotlightCard"

const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const
const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const

const PRODUCT_ICONS = [
  <IconBowlSpoon size={20} key="rest" />,
  <IconBuildingSkyscraper size={20} key="hotel" />,
  <IconActivityHeartbeat size={20} key="clinic" />,
]

const ACCENTS = ["#C4673A", "#C88A0A", "#2A7A57"]

interface Product {
  id: string
  name: string
  niche: string
  tagline: string
  price_setup: string
  price_monthly: string
  popular: boolean
  delivery: string
  features: string[]
}

function PricingCard({
  product,
  icon,
  accent,
  setupLabel,
  perMonth,
  ctaLabel,
  badgeLabel,
  index,
  reduced,
}: {
  product: Product
  icon: React.ReactNode
  accent: string
  setupLabel: string
  perMonth: string
  ctaLabel: string
  badgeLabel: string
  index: number
  reduced: boolean
}) {
  const isPopular = product.popular

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: EASE_OUT_QUART }}
      style={{ height: "100%" }}
    >
      <SpotlightCard
        disabled={reduced}
        spotlightColor={`${accent}20`}
        tiltDeg={4}
        style={{
          background: isPopular ? "#16120E" : "var(--pricing-non-popular-bg)",
          border: isPopular ? `1.5px solid ${accent}44` : "1.5px solid var(--border-card)",
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          position: "relative",
          boxShadow: isPopular
            ? `0 24px 80px rgba(0,0,0,0.35), 0 0 0 1px ${accent}20`
            : "0 4px 24px rgba(28,25,23,0.06)",
          transition: "box-shadow 0.3s ease, transform 0.3s ease",
        }}
      >
        {/* Popular: animated gradient border */}
        {isPopular && !reduced && (
          <div className="pricing-popular-border" aria-hidden="true" />
        )}

        {/* Popular badge */}
        {isPopular && (
          <div style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: accent,
            color: "#fff",
            fontSize: "9px",
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: "99px",
            zIndex: 2,
          }}>
            {badgeLabel}
          </div>
        )}

        {/* Accent glow line at top (popular only) */}
        {isPopular && (
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(to right, transparent, ${accent}, transparent)`,
          }} />
        )}

        {/* Header */}
        <div style={{
          padding: "28px 28px 22px",
          borderBottom: isPopular
            ? "1px solid rgba(250,249,247,0.07)"
            : "1px solid var(--border-card)",
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "16px" }}>
            <div style={{
              width: "46px",
              height: "46px",
              borderRadius: "12px",
              background: `${accent}16`,
              border: `1px solid ${accent}28`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              color: accent,
            }}>
              {icon}
            </div>
            <div>
              <div style={{
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: accent,
                marginBottom: "4px",
              }}>
                {product.niche}
              </div>
              <h3 style={{
                fontSize: "17px",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: isPopular ? "#FAF9F7" : "var(--text-1)",
                lineHeight: 1.2,
              }}>
                {product.name}
              </h3>
            </div>
          </div>
          <p style={{
            fontSize: "13px",
            lineHeight: 1.7,
            color: isPopular ? "rgba(250,249,247,0.48)" : "var(--text-2)",
          }}>
            {product.tagline}
          </p>
        </div>

        {/* Price block */}
        <div style={{
          padding: "24px 28px",
          borderBottom: isPopular
            ? "1px solid rgba(250,249,247,0.07)"
            : "1px solid var(--border-card)",
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "6px" }}>
            <span style={{
              fontSize: "42px",
              fontWeight: 800,
              letterSpacing: "-0.06em",
              color: isPopular ? "#FAF9F7" : "var(--text-1)",
              lineHeight: 1,
            }}>
              €{product.price_setup}
            </span>
            <span style={{
              fontSize: "12px",
              fontWeight: 600,
              color: isPopular ? "rgba(250,249,247,0.38)" : "var(--text-muted)",
              letterSpacing: "0.02em",
            }}>
              {setupLabel}
            </span>
          </div>
          <div style={{
            fontSize: "13px",
            color: accent,
            fontWeight: 700,
          }}>
            + €{product.price_monthly}{perMonth}
          </div>
          <div style={{
            marginTop: "8px",
            fontSize: "10px",
            color: isPopular ? "rgba(250,249,247,0.24)" : "var(--text-muted)",
            letterSpacing: "0.04em",
          }}>
            Entrega: {product.delivery}
          </div>
        </div>

        {/* Features */}
        <div style={{ padding: "22px 28px", flex: 1 }}>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "11px" }}>
            {product.features.map((feat, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: `${accent}16`,
                  border: `1px solid ${accent}28`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "1px",
                }}>
                  <IconCheck size={10} color={accent} />
                </div>
                <span style={{
                  fontSize: "12.5px",
                  lineHeight: 1.65,
                  color: isPopular ? "rgba(250,249,247,0.55)" : "var(--text-2)",
                }}>
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div style={{ padding: "0 28px 28px" }}>
          <Link
            href="/contacto"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "13px 20px",
              background: isPopular ? accent : "transparent",
              border: isPopular ? "none" : `1.5px solid ${accent}40`,
              color: isPopular ? "#fff" : accent,
              borderRadius: "10px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "-0.1px",
              transition: "all 0.18s cubic-bezier(.165,.84,.44,1)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              if (isPopular) {
                el.style.background = accent === "#C88A0A" ? "#A37208" : accent === "#2A7A57" ? "#1e5c40" : "#9E5230"
                el.style.transform = "translateY(-2px)"
                el.style.boxShadow = `0 10px 30px ${accent}44`
              } else {
                el.style.background = `${accent}10`
                el.style.transform = "translateY(-1px)"
              }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = isPopular ? accent : "transparent"
              el.style.transform = ""
              el.style.boxShadow = ""
            }}
          >
            {ctaLabel}
            <IconArrowRight size={14} />
          </Link>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

export default function PricingSection() {
  const t = useTranslations("pricing")
  const shouldReduce = useReducedMotion()
  const products = t.raw("products") as Product[]

  return (
    <section style={{
      background: "var(--bg-page)",
      padding: "120px 0",
      position: "relative",
      overflow: "hidden",
      transition: "background 0.25s ease",
    }}>
      {/* Subtle warm grid */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        opacity: 0.018,
        backgroundImage: "radial-gradient(circle, rgba(22,18,14,1) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }} />

      {/* Warm orb */}
      <div aria-hidden="true" style={{
        position: "absolute",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(196,103,58,0.06) 0%, transparent 65%)",
        top: "-200px",
        right: "-150px",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: EASE_OUT_QUART }}
          style={{ marginBottom: "72px", textAlign: "center" }}
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
            fontSize: "clamp(34px, 3.8vw, 56px)",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            lineHeight: 1.04,
            color: "var(--text-1)",
            marginBottom: "16px",
          }}>
            {t("heading")}
          </h2>
          <p style={{
            fontSize: "15px",
            color: "var(--text-2)",
            maxWidth: "440px",
            margin: "0 auto",
            lineHeight: 1.72,
          }}>
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {products.map((product, i) => (
            <PricingCard
              key={product.id}
              product={product}
              icon={PRODUCT_ICONS[i]}
              accent={ACCENTS[i]}
              setupLabel={t("setup")}
              perMonth={t("per_month")}
              ctaLabel={t("cta")}
              badgeLabel={t("badge_popular")}
              index={i}
              reduced={!!shouldReduce}
            />
          ))}
        </div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT_EXPO }}
          style={{
            textAlign: "center",
            marginTop: "40px",
            fontSize: "11px",
            color: "var(--text-muted)",
            letterSpacing: "0.03em",
          }}
        >
          {t("note")}
        </motion.p>
      </div>
    </section>
  )
}
