interface SenyLogoProps {
  variant?: "light" | "dark" | "accent"
  size?: "sm" | "md" | "lg"
  showWordmark?: boolean
}

const SIZES = {
  sm: { w: 28, h: 19, textSize: "text-base" },
  md: { w: 36, h: 24, textSize: "text-xl" },
  lg: { w: 52, h: 35, textSize: "text-2xl" },
}

export default function SenyLogo({
  variant = "dark",
  size = "md",
  showWordmark = true,
}: SenyLogoProps) {
  const { w, h, textSize } = SIZES[size]

  const colors = {
    light: { bars: "#1C1917", accent: "#C4673A" },
    dark: { bars: "#F5F2EF", accent: "#C4673A" },
    accent: { bars: "rgba(253,245,240,0.90)", accent: "rgba(253,245,240,0.50)" },
  }[variant]

  const wordmarkColor = {
    light: "#1C1917",
    dark: "#F5F2EF",
    accent: "#FDF5F0",
  }[variant]

  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <svg
        width={w}
        height={h}
        viewBox="0 0 37 25"
        fill="none"
        aria-hidden="true"
      >
        {/* Top row */}
        <rect x="0" y="0" width="8" height="4" rx="1" fill={colors.bars} />
        <rect x="13" y="0" width="24" height="4" rx="1" fill={colors.bars} />
        {/* Middle row (terracotta accent) */}
        <rect x="0" y="10.5" width="8" height="4" rx="1" fill={colors.accent} />
        <rect x="13" y="10.5" width="16" height="4" rx="1" fill={colors.accent} />
        {/* Bottom row */}
        <rect x="0" y="21" width="8" height="4" rx="1" fill={colors.bars} />
        <rect x="13" y="21" width="24" height="4" rx="1" fill={colors.bars} />
      </svg>
      {showWordmark && (
        <span
          className={`font-bold tracking-tight ${textSize}`}
          style={{ color: wordmarkColor, letterSpacing: "-0.4px" }}
        >
          Seny
        </span>
      )}
    </div>
  )
}
