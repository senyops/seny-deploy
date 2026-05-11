"use client"

import { useTranslations } from "next-intl"

const TECH_ITEMS = [
  { name: "Claude AI", sub: "Anthropic" },
  { name: "GPT-4o", sub: "OpenAI" },
  { name: "WhatsApp Business", sub: "Meta" },
  { name: "n8n", sub: "Automation" },
  { name: "Make", sub: "Integromat" },
  { name: "Google Business", sub: "Google" },
  { name: "Booking.com API", sub: "OTA" },
  { name: "Google Calendar", sub: "Scheduling" },
]

function TechPill({ name, sub }: { name: string; sub: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 20px",
        background: "#FFFFFF",
        border: "1px solid rgba(28,25,23,0.09)",
        borderRadius: "8px",
        marginRight: "12px",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}
    >
      {/* Dot */}
      <span
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: "#C4673A",
          opacity: 0.5,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "#1C1917",
          letterSpacing: "-0.1px",
        }}
      >
        {name}
      </span>
      <span
        style={{
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: "#A8A29E",
        }}
      >
        {sub}
      </span>
    </div>
  )
}

export default function TechMarquee() {
  const t = useTranslations("marquee")
  const doubled = [...TECH_ITEMS, ...TECH_ITEMS]

  return (
    <section
      style={{
        background: "#F3F0EC",
        padding: "48px 0",
        borderTop: "1px solid rgba(28,25,23,0.07)",
        borderBottom: "1px solid rgba(28,25,23,0.07)",
        overflow: "hidden",
      }}
    >
      {/* Label */}
      <p
        style={{
          textAlign: "center",
          fontSize: "9.5px",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#A8A29E",
          marginBottom: "24px",
        }}
      >
        {t("label")}
      </p>

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
            width: "80px",
            background:
              "linear-gradient(to right, #F3F0EC, transparent)",
            zIndex: 1,
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
            width: "80px",
            background:
              "linear-gradient(to left, #F3F0EC, transparent)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            animation: "marquee-scroll 28s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((item, i) => (
            <TechPill key={`${item.name}-${i}`} name={item.name} sub={item.sub} />
          ))}
        </div>
      </div>
    </section>
  )
}
