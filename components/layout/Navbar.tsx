"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { usePathname, useRouter, Link } from "@/i18n/navigation"
import { useParams } from "next/navigation"
import SenyLogo from "@/components/ui/SenyLogo"
import {
  IconMenu2,
  IconX,
  IconChevronDown,
} from "@tabler/icons-react"

const LOCALES = [
  { code: "es", label: "ES", name: "Español" },
  { code: "en", label: "EN", name: "English" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "it", label: "IT", name: "Italiano" },
  { code: "pt", label: "PT", name: "Português" },
]

export default function Navbar() {
  const t = useTranslations("nav")
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const locale = params.locale as string

  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const handleLangChange = (code: string) => {
    router.replace(pathname, { locale: code })
    setLangOpen(false)
  }

  const navLinks = [
    { href: "/servicios", label: t("servicios") },
    { href: "/casos", label: t("casos") },
    { href: "/contacto", label: t("contacto") },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#16120E",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
          transition: "border-color 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          {/* Logo */}
          <Link href="/" aria-label="Seny — Inicio">
            <SenyLogo variant="dark" size="sm" />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            style={{ flex: 1, marginLeft: "40px" }}
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  color: isActive(href)
                    ? "rgba(250,249,247,0.95)"
                    : "rgba(250,249,247,0.45)",
                  textDecoration: "none",
                  transition: "color 0.2s, background 0.2s",
                  background: isActive(href)
                    ? "rgba(255,255,255,0.06)"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive(href))
                    (e.target as HTMLElement).style.color =
                      "rgba(250,249,247,0.85)"
                }}
                onMouseLeave={(e) => {
                  if (!isActive(href))
                    (e.target as HTMLElement).style.color =
                      "rgba(250,249,247,0.45)"
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right side: lang + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language selector */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "5px 10px",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "6px",
                  color: "rgba(250,249,247,0.50)",
                  fontSize: "11.5px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "inherit",
                }}
                aria-label="Cambiar idioma"
                aria-expanded={langOpen}
              >
                {locale.toUpperCase()}
                <IconChevronDown size={12} />
              </button>

              {langOpen && (
                <>
                  <div
                    style={{
                      position: "fixed",
                      inset: 0,
                      zIndex: 40,
                    }}
                    onClick={() => setLangOpen(false)}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      right: 0,
                      background: "#1E1711",
                      border: "1px solid rgba(255,255,255,0.10)",
                      borderRadius: "10px",
                      padding: "6px",
                      zIndex: 50,
                      minWidth: "120px",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                    }}
                  >
                    {LOCALES.map(({ code, label, name }) => (
                      <button
                        key={code}
                        onClick={() => handleLangChange(code)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          width: "100%",
                          padding: "7px 10px",
                          background:
                            code === locale
                              ? "rgba(196,103,58,0.12)"
                              : "transparent",
                          border: "none",
                          borderRadius: "6px",
                          color:
                            code === locale
                              ? "#C4673A"
                              : "rgba(250,249,247,0.55)",
                          fontSize: "12px",
                          fontWeight: code === locale ? 700 : 500,
                          cursor: "pointer",
                          textAlign: "left",
                          fontFamily: "inherit",
                          transition: "all 0.15s",
                          letterSpacing: "0.02em",
                        }}
                      >
                        <span style={{ fontWeight: 700, minWidth: "24px" }}>
                          {label}
                        </span>
                        <span style={{ opacity: 0.6 }}>{name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CTA */}
            <Link
              href="/contacto"
              style={{
                padding: "8px 16px",
                background: "#C4673A",
                color: "#fff",
                borderRadius: "8px",
                fontSize: "12.5px",
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "-0.1px",
                transition: "background 0.18s, transform 0.18s",
                whiteSpace: "nowrap",
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
              {t("cta")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(250,249,247,0.70)",
              cursor: "pointer",
              padding: "8px",
              borderRadius: "6px",
            }}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 49,
          background: "#16120E",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
          display: "flex",
          flexDirection: "column",
          padding: "80px 24px 40px",
        }}
      >
        <nav style={{ flex: 1 }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: isActive(href)
                  ? "#FAF9F7"
                  : "rgba(250,249,247,0.40)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contacto"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              marginTop: "32px",
              padding: "14px 24px",
              background: "#C4673A",
              color: "#fff",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            {t("cta")}
          </Link>
        </nav>

        {/* Mobile lang selector */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginTop: "32px",
          }}
        >
          {LOCALES.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => {
                handleLangChange(code)
                setMenuOpen(false)
              }}
              style={{
                padding: "6px 12px",
                background:
                  code === locale
                    ? "rgba(196,103,58,0.14)"
                    : "rgba(255,255,255,0.05)",
                border:
                  code === locale
                    ? "1px solid rgba(196,103,58,0.28)"
                    : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "6px",
                color: code === locale ? "#C4673A" : "rgba(250,249,247,0.45)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
