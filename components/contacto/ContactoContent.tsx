"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { fadeInUp, staggerContainer } from "@/lib/variants"
import {
  IconMail,
  IconMapPin,
  IconClock,
  IconLanguage,
  IconBrandWhatsapp,
  IconCheck,
} from "@tabler/icons-react"

export default function ContactoContent() {
  const t = useTranslations("contacto_page")
  const shouldReduce = useReducedMotion()

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const businessOptions = t.raw("form.business_options") as string[]

  const validate = () => {
    const e: Record<string, string> = {}
    if (!formState.name.trim()) e.name = "Requerido"
    if (!formState.email.trim() || !/\S+@\S+\.\S+/.test(formState.email))
      e.email = "Email inválido"
    if (!formState.business) e.business = "Requerido"
    if (!formState.message.trim() || formState.message.length < 20)
      e.message = "Mínimo 20 caracteres"
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setErrors({})
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    fontFamily: "inherit",
    fontSize: "14px",
    padding: "10px 14px",
    borderRadius: "8px",
    background: "#FFFFFF",
    color: "#1C1917",
    border: `1.5px solid ${hasError ? "#C23B3B" : "rgba(28,25,23,0.18)"}`,
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s, box-shadow 0.2s",
  })

  const containerVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerContainer

  const itemVariants = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : fadeInUp

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
              "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(196,103,58,0.08) 0%, transparent 60%)",
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
                maxWidth: "600px",
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

      {/* Form + Info */}
      <section style={{ padding: "80px 0 96px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="lg:grid-cols-[1.4fr_1fr] grid-cols-1"
        >
          {/* Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(28,25,23,0.09)",
                  borderRadius: "16px",
                  padding: "48px 40px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "rgba(42,122,87,0.10)",
                    border: "1px solid rgba(42,122,87,0.24)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    color: "#2A7A57",
                  }}
                >
                  <IconCheck size={24} />
                </div>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#1C1917",
                    marginBottom: "12px",
                  }}
                >
                  {t("form.success_title")}
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.72,
                    color: "#57534E",
                  }}
                >
                  {t("form.success_desc")}
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(28,25,23,0.09)",
                  borderRadius: "16px",
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Name */}
                <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    htmlFor="name"
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#1C1917",
                    }}
                  >
                    {t("form.name_label")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={t("form.name_placeholder")}
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    style={inputStyle(!!errors.name)}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#C4673A"
                      e.target.style.boxShadow = "0 0 0 3px rgba(196,103,58,0.09)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.name
                        ? "#C23B3B"
                        : "rgba(28,25,23,0.18)"
                      e.target.style.boxShadow = "none"
                    }}
                  />
                  {errors.name && (
                    <span style={{ fontSize: "11.5px", color: "#C23B3B" }}>
                      {errors.name}
                    </span>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    htmlFor="email"
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#1C1917",
                    }}
                  >
                    {t("form.email_label")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t("form.email_placeholder")}
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    style={inputStyle(!!errors.email)}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#C4673A"
                      e.target.style.boxShadow = "0 0 0 3px rgba(196,103,58,0.09)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.email
                        ? "#C23B3B"
                        : "rgba(28,25,23,0.18)"
                      e.target.style.boxShadow = "none"
                    }}
                  />
                  {errors.email && (
                    <span style={{ fontSize: "11.5px", color: "#C23B3B" }}>
                      {errors.email}
                    </span>
                  )}
                </motion.div>

                {/* Business type */}
                <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    htmlFor="business"
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#1C1917",
                    }}
                  >
                    {t("form.business_label")}
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      id="business"
                      value={formState.business}
                      onChange={(e) =>
                        setFormState({ ...formState, business: e.target.value })
                      }
                      style={{
                        ...inputStyle(!!errors.business),
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23A8A29E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 14px center",
                        paddingRight: "38px",
                        cursor: "pointer",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#C4673A"
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(196,103,58,0.09)"
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.business
                          ? "#C23B3B"
                          : "rgba(28,25,23,0.18)"
                        e.target.style.boxShadow = "none"
                      }}
                    >
                      <option value="">{t("form.business_placeholder")}</option>
                      {businessOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.business && (
                    <span style={{ fontSize: "11.5px", color: "#C23B3B" }}>
                      {errors.business}
                    </span>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    htmlFor="message"
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "#1C1917",
                    }}
                  >
                    {t("form.message_label")}
                  </label>
                  <textarea
                    id="message"
                    placeholder={t("form.message_placeholder")}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    rows={5}
                    style={{
                      ...inputStyle(!!errors.message),
                      resize: "vertical",
                      minHeight: "120px",
                      lineHeight: 1.65,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#C4673A"
                      e.target.style.boxShadow = "0 0 0 3px rgba(196,103,58,0.09)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.message
                        ? "#C23B3B"
                        : "rgba(28,25,23,0.18)"
                      e.target.style.boxShadow = "none"
                    }}
                  />
                  {errors.message && (
                    <span style={{ fontSize: "11.5px", color: "#C23B3B" }}>
                      {errors.message}
                    </span>
                  )}
                </motion.div>

                {/* Submit */}
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%",
                      padding: "13px 24px",
                      background: loading ? "#A8A29E" : "#C4673A",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: loading ? "not-allowed" : "pointer",
                      letterSpacing: "-0.1px",
                      transition: "background 0.18s, transform 0.18s",
                      fontFamily: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        ;(e.currentTarget as HTMLElement).style.background =
                          "#9E5230"
                        ;(e.currentTarget as HTMLElement).style.transform =
                          "translateY(-1px)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) {
                        ;(e.currentTarget as HTMLElement).style.background =
                          "#C4673A"
                        ;(e.currentTarget as HTMLElement).style.transform =
                          "none"
                      }
                    }}
                  >
                    {loading ? (
                      <>
                        <span
                          style={{
                            width: "14px",
                            height: "14px",
                            border: "2px solid rgba(255,255,255,0.3)",
                            borderTopColor: "#fff",
                            borderRadius: "50%",
                            animation: "spin 0.8s linear infinite",
                          }}
                        />
                        Enviando...
                      </>
                    ) : (
                      t("form.submit")
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Info cards */}
            {[
              {
                icon: <IconMail size={18} />,
                label: "Email",
                value: t("info.email"),
              },
              {
                icon: <IconBrandWhatsapp size={18} />,
                label: "WhatsApp",
                value: t("info.whatsapp"),
              },
              {
                icon: <IconMapPin size={18} />,
                label: "Ubicación",
                value: t("info.location"),
              },
              {
                icon: <IconClock size={18} />,
                label: "Respuesta",
                value: t("info.response_time"),
              },
              {
                icon: <IconLanguage size={18} />,
                label: "Idiomas",
                value: t("info.languages"),
              },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  padding: "16px 18px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(28,25,23,0.08)",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(196,103,58,0.08)",
                    border: "1px solid rgba(196,103,58,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#C4673A",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#A8A29E",
                      marginBottom: "2px",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#1C1917",
                    }}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
