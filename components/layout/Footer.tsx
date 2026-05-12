"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import SenyLogo from "@/components/ui/SenyLogo"
import { IconArrowRight } from "@tabler/icons-react"

export default function Footer() {
  const t = useTranslations("footer")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const serviceLinks = (t.raw("links_services") as string[]).map(
    (label, i) => {
      const hrefs = ["/servicios#restaurantes", "/servicios#hoteleria", "/servicios#clinicas"]
      return { label, href: hrefs[i] || "/servicios" }
    }
  )

  const nicheLinks = (t.raw("links_niches") as string[]).map((label, i) => {
    const hrefs = ["/servicios#restaurantes", "/servicios#hoteleria", "/servicios#clinicas"]
    return { label, href: hrefs[i] || "/servicios" }
  })

  const legalLinks = (t.raw("links_legal") as string[]).map((label, i) => {
    const hrefs = ["/privacidad", "/terminos", "/cookies"]
    return { label, href: hrefs[i] || "/" }
  })

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <footer
      style={{
        background: "#16120E",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "80px 0 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Newsletter strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "40px",
            alignItems: "center",
            padding: "36px 40px",
            background: "rgba(196,103,58,0.06)",
            border: "1px solid rgba(196,103,58,0.14)",
            borderRadius: "16px",
            marginBottom: "64px",
            flexWrap: "wrap",
          }}
          className="grid-cols-1 lg:grid-cols-[1fr_auto]"
        >
          <div>
            <p style={{ fontSize: "13px", fontWeight: 800, color: "#FAF9F7", letterSpacing: "-0.02em", marginBottom: "4px" }}>
              Novedades Seny — sin spam
            </p>
            <p style={{ fontSize: "12px", color: "rgba(250,249,247,0.36)", lineHeight: 1.6 }}>
              Casos reales, tips de hostelería y cuando lancemos nuevas funcionalidades.
            </p>
          </div>

          {submitted ? (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "11px 20px",
              background: "rgba(42,122,87,0.12)",
              border: "1px solid rgba(42,122,87,0.22)",
              borderRadius: "9px",
              whiteSpace: "nowrap",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2A7A57" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#2A7A57" }}>¡Apuntado!</span>
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              style={{ display: "flex", gap: "8px", flexShrink: 0 }}
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                style={{
                  padding: "10px 16px",
                  background: "rgba(250,249,247,0.05)",
                  border: "1px solid rgba(250,249,247,0.12)",
                  borderRadius: "8px",
                  color: "#FAF9F7",
                  fontSize: "13px",
                  fontFamily: "inherit",
                  outline: "none",
                  width: "200px",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => (e.target.style.borderColor = "rgba(196,103,58,0.50)")}
                onBlur={e => (e.target.style.borderColor = "rgba(250,249,247,0.12)")}
              />
              <button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 18px",
                  background: "#C4673A",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  whiteSpace: "nowrap",
                  transition: "background 0.18s ease, transform 0.15s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.background = "#9E5230"
                  el.style.transform = "translateY(-1px)"
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.background = "#C4673A"
                  el.style.transform = ""
                }}
              >
                Suscribirme
                <IconArrowRight size={13} />
              </button>
            </form>
          )}
        </div>

        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
          className="lg:grid-cols-[2fr_1fr_1fr_1fr] grid-cols-1 md:grid-cols-2"
        >
          {/* Brand */}
          <div>
            <Link href="/">
              <SenyLogo variant="dark" size="md" />
            </Link>
            <p
              style={{
                marginTop: "16px",
                fontSize: "13.5px",
                lineHeight: 1.75,
                color: "rgba(250,249,247,0.36)",
                maxWidth: "280px",
                fontStyle: "italic",
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              &ldquo;{t("tagline")}&rdquo;
            </p>
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <a
                href="mailto:hola@senyops.com"
                className="link-underline"
                style={{
                  fontSize: "12px",
                  color: "rgba(250,249,247,0.35)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "rgba(250,249,247,0.70)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "rgba(250,249,247,0.35)")
                }
              >
                hola@senyops.com
              </a>
            </div>
          </div>

          {/* Services */}
          <FooterColumn
            title={t("col_services")}
            links={serviceLinks}
          />

          {/* Niches */}
          <FooterColumn
            title={t("col_niches")}
            links={nicheLinks}
          />

          {/* Legal */}
          <FooterColumn
            title={t("col_legal")}
            links={legalLinks}
          />
        </div>

        {/* Bottom */}
        <div
          style={{
            paddingTop: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "rgba(250,249,247,0.22)",
              letterSpacing: "0.02em",
            }}
          >
            {t("copyright")}
          </p>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(250,249,247,0.16)",
              letterSpacing: "0.02em",
            }}
          >
            Breno Sampayo · Valencia, España
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <p
        style={{
          fontSize: "9.5px",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(250,249,247,0.28)",
          marginBottom: "16px",
        }}
      >
        {title}
      </p>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="link-underline"
              style={{
                fontSize: "13px",
                color: "rgba(250,249,247,0.40)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "rgba(250,249,247,0.78)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "rgba(250,249,247,0.40)")
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
