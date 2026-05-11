"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

const TECH_ITEMS = [
  {
    name: "Claude AI",
    sub: "Anthropic",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp Business",
    sub: "Meta",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "n8n",
    sub: "Automation",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#EA4B71">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#EA4B71" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Google Business",
    sub: "Google",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  {
    name: "Booking.com",
    sub: "OTA Connect",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#003580">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
  },
  {
    name: "Google Calendar",
    sub: "Scheduling",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" fill="#4285F4" />
        <rect x="3" y="4" width="18" height="6" rx="2" fill="#1565C0" />
        <rect x="7" y="2" width="2" height="4" rx="1" fill="#78909C" />
        <rect x="15" y="2" width="2" height="4" rx="1" fill="#78909C" />
        <rect x="7" y="13" width="10" height="2" rx="1" fill="white" opacity="0.9" />
        <rect x="7" y="17" width="6" height="2" rx="1" fill="white" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: "Make",
    sub: "Integromat",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#6D00CC">
        <circle cx="5" cy="12" r="3" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="12" r="3" />
        <line x1="8" y1="12" x2="9" y2="12" stroke="#6D00CC" strokeWidth="2" />
        <line x1="15" y1="12" x2="16" y2="12" stroke="#6D00CC" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Airbnb",
    sub: "Channel Manager",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF5A5F">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
]

function TechPill({ name, sub, logo }: { name: string; sub: string; logo: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 18px",
        background: "#FFFFFF",
        border: "1px solid rgba(28,25,23,0.08)",
        borderRadius: "10px",
        marginRight: "10px",
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxShadow: "0 1px 4px rgba(28,25,23,0.05)",
      }}
    >
      <div style={{ width: "22px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {logo}
      </div>
      <div>
        <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#1C1917", letterSpacing: "-0.1px", lineHeight: 1.2 }}>{name}</div>
        <div style={{ fontSize: "9px", fontWeight: 600, color: "#A8A29E", letterSpacing: "0.05em", textTransform: "uppercase" }}>{sub}</div>
      </div>
    </div>
  )
}

export default function TechMarquee() {
  const t = useTranslations("marquee")
  const doubled = [...TECH_ITEMS, ...TECH_ITEMS]

  return (
    <section
      style={{
        background: "#FAF9F7",
        padding: "60px 0",
        borderTop: "1px solid rgba(28,25,23,0.07)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: "center",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#C4A282",
          marginBottom: "28px",
        }}
      >
        {t("label")}
      </motion.p>

      {/* Marquee track */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Fade edges */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, #FAF9F7, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, #FAF9F7, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            animation: "marquee-scroll 32s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((item, i) => (
            <TechPill key={`${item.name}-${i}`} name={item.name} sub={item.sub} logo={item.logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
