import type { Metadata } from "next"
import { getLocale } from "next-intl/server"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://senyops.com"),
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        style={{
          fontFamily:
            "'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif",
          background: "var(--bg-page)",
          color: "var(--text-1)",
          minHeight: "100vh",
          transition: "background 0.25s ease, color 0.25s ease",
        }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
