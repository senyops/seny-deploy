"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { IconArrowRight, IconLanguage } from "@tabler/icons-react"
import SpotlightCard from "@/components/ui/SpotlightCard"

const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const
const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const

const VALUE_ACCENTS = ["#C4673A", "#C88A0A", "#C4673A", "#2A7A57"]

interface TeamMember {
  name: string
  role: string
  langs: string
  bio: string
  detail: string
}

interface Value {
  title: string
  desc: string
}

export default function SobrePage() {
  const t = useTranslations("sobre_page")
  const shouldReduce = useReducedMotion()
  const team = t.raw("team") as TeamMember[]
  const values = t.raw("values") as Value[]

  const stagger = (i: number, base = 0.1) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: base + i * 0.1, duration: 0.8, ease: EASE_OUT_EXPO },
  })

  return (
    <>
      {/* ── HERO ───────────────────────────── */}
      <section style={{
        background: "#16120E",
        position: "relative",
        overflow: "hidden",
        paddingTop: "120px",
        paddingBottom: "100px",
      }}>
        {/* Aurora */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{
            position: "absolute",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,103,58,0.16) 0%, transparent 65%)",
            top: "-300px",
            right: "-150px",
            filter: "blur(80px)",
          }} />
          <div style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,103,58,0.08) 0%, transparent 65%)",
            bottom: "-100px",
            left: "-80px",
            filter: "blur(60px)",
          }} />
        </div>

        {/* Dot grid */}
        <div aria-hidden="true" style={{
          position: "absolute",
          inset: 0,
          opacity: 0.016,
          backgroundImage: "radial-gradient(circle, rgba(250,249,247,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}>
          <motion.p
            {...stagger(0, 0.1)}
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#C4673A",
              marginBottom: "24px",
            }}
          >
            {t("eyebrow")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: EASE_OUT_EXPO }}
            style={{
              fontSize: "clamp(42px, 5.5vw, 80px)",
              fontWeight: 800,
              letterSpacing: "-0.055em",
              lineHeight: 1.02,
              color: "#FAF9F7",
              maxWidth: "760px",
              marginBottom: "28px",
            }}
          >
            {t("heading")}
          </motion.h1>

          <motion.p
            {...stagger(2, 0.1)}
            style={{
              fontSize: "16px",
              lineHeight: 1.78,
              color: "rgba(250,249,247,0.44)",
              maxWidth: "540px",
              marginBottom: "48px",
            }}
          >
            {t("subtitle")}
          </motion.p>

          {/* Mission callout */}
          <motion.div
            {...stagger(3, 0.1)}
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: "8px",
              padding: "20px 28px",
              background: "rgba(196,103,58,0.08)",
              border: "1px solid rgba(196,103,58,0.20)",
              borderRadius: "14px",
              maxWidth: "640px",
            }}
          >
            <span style={{
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#C4673A",
            }}>
              {t("mission_label")}
            </span>
            <span style={{
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.45,
              color: "rgba(250,249,247,0.80)",
              fontStyle: "italic",
            }}>
              "{t("mission")}"
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── TEAM ───────────────────────────── */}
      <section style={{
        background: "#FAF9F7",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,103,58,0.05) 0%, transparent 65%)",
          top: "-150px",
          right: "-100px",
          filter: "blur(80px)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: EASE_OUT_QUART }}
              >
                <SpotlightCard
                  disabled={!!shouldReduce}
                  spotlightColor="rgba(196,103,58,0.12)"
                  tiltDeg={4}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(22,18,14,0.08)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 24px rgba(22,18,14,0.06)",
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  {/* Card header */}
                  <div style={{
                    background: "linear-gradient(145deg, rgba(196,103,58,0.06) 0%, rgba(196,103,58,0.02) 100%)",
                    borderBottom: "1px solid rgba(196,103,58,0.08)",
                    padding: "32px 32px 28px",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    {/* Background number */}
                    <div aria-hidden="true" style={{
                      position: "absolute",
                      right: "24px",
                      top: "16px",
                      fontSize: "100px",
                      fontWeight: 800,
                      color: "rgba(196,103,58,0.06)",
                      letterSpacing: "-0.06em",
                      lineHeight: 1,
                      userSelect: "none",
                    }}>
                      0{i + 1}
                    </div>

                    {/* Avatar */}
                    <div style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      background: "rgba(196,103,58,0.12)",
                      border: "1.5px solid rgba(196,103,58,0.22)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      fontSize: "22px",
                      fontWeight: 800,
                      color: "#C4673A",
                    }}>
                      {member.name.charAt(0)}
                    </div>

                    <h3 style={{
                      fontSize: "22px",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: "#16120E",
                      marginBottom: "4px",
                    }}>
                      {member.name}
                    </h3>
                    <p style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#C4673A",
                      letterSpacing: "0.03em",
                      marginBottom: "12px",
                    }}>
                      {member.role}
                    </p>

                    {/* Languages badge */}
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "4px 10px",
                      background: "rgba(196,103,58,0.08)",
                      border: "1px solid rgba(196,103,58,0.16)",
                      borderRadius: "999px",
                    }}>
                      <IconLanguage size={11} color="#C4673A" />
                      <span style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: "#C4673A",
                      }}>
                        {member.langs}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: "28px 32px", flex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
                    <p style={{
                      fontSize: "14px",
                      lineHeight: 1.75,
                      color: "rgba(22,18,14,0.70)",
                    }}>
                      {member.bio}
                    </p>
                    <p style={{
                      fontSize: "12.5px",
                      lineHeight: 1.72,
                      color: "rgba(22,18,14,0.40)",
                      borderTop: "1px solid rgba(22,18,14,0.06)",
                      paddingTop: "14px",
                    }}>
                      {member.detail}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ─────────────────────────── */}
      <section style={{
        background: "#16120E",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Dot grid */}
        <div aria-hidden="true" style={{
          position: "absolute",
          inset: 0,
          opacity: 0.015,
          backgroundImage: "radial-gradient(circle, rgba(250,249,247,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: EASE_OUT_QUART }}
            style={{ marginBottom: "64px" }}
          >
            <h2 style={{
              fontSize: "clamp(30px, 3.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              color: "#FAF9F7",
              lineHeight: 1.08,
            }}>
              {t("values_heading")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: EASE_OUT_QUART }}
              >
                <SpotlightCard
                  disabled={!!shouldReduce}
                  spotlightColor={`${VALUE_ACCENTS[i]}20`}
                  tiltDeg={4}
                  style={{
                    background: "rgba(250,249,247,0.03)",
                    border: "1px solid rgba(250,249,247,0.07)",
                    borderRadius: "16px",
                    padding: "28px",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Glow line top */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: "24px",
                    right: "24px",
                    height: "1px",
                    background: `linear-gradient(to right, transparent, ${VALUE_ACCENTS[i]}55, transparent)`,
                  }} />

                  {/* Number */}
                  <div style={{
                    fontSize: "42px",
                    fontWeight: 800,
                    letterSpacing: "-0.06em",
                    color: `${VALUE_ACCENTS[i]}20`,
                    lineHeight: 1,
                    marginBottom: "20px",
                  }}>
                    0{i + 1}
                  </div>

                  <h3 style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "#FAF9F7",
                    marginBottom: "10px",
                  }}>
                    {val.title}
                  </h3>
                  <p style={{
                    fontSize: "13.5px",
                    lineHeight: 1.75,
                    color: "rgba(250,249,247,0.42)",
                  }}>
                    {val.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────── */}
      <section style={{
        background: "#FAF9F7",
        padding: "100px 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,103,58,0.07) 0%, transparent 65%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: EASE_OUT_QUART }}
            style={{
              fontSize: "clamp(32px, 3.8vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1.08,
              color: "#16120E",
              marginBottom: "16px",
            }}
          >
            {t("cta_heading")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT_QUART }}
            style={{
              fontSize: "15px",
              lineHeight: 1.75,
              color: "rgba(22,18,14,0.50)",
              marginBottom: "36px",
            }}
          >
            {t("cta_sub")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.2, ease: EASE_OUT_QUART }}
          >
            <Link
              href="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "15px 32px",
                background: "#C4673A",
                color: "#fff",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "-0.1px",
                transition: "background 0.18s, transform 0.18s, box-shadow 0.18s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "#9E5230"
                el.style.transform = "translateY(-2px)"
                el.style.boxShadow = "0 12px 36px rgba(196,103,58,0.40)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "#C4673A"
                el.style.transform = ""
                el.style.boxShadow = ""
              }}
            >
              {t("cta_button")}
              <IconArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
