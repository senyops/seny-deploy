"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import SenyLogo from "@/components/ui/SenyLogo"

export default function Footer() {
  const t = useTranslations("footer")

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

  return (
    <footer
      style={{
        background: "#16120E",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "64px 0 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
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
                fontSize: "14px",
                lineHeight: 1.72,
                color: "rgba(250,249,247,0.38)",
                maxWidth: "280px",
                fontStyle: "italic",
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
                style={{
                  fontSize: "12px",
                  color: "rgba(250,249,247,0.35)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(250,249,247,0.70)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(250,249,247,0.35)")
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
              style={{
                fontSize: "13px",
                color: "rgba(250,249,247,0.40)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(250,249,247,0.78)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(250,249,247,0.40)")
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
