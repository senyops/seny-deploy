import type { Metadata } from "next"
import { getLocale } from "next-intl/server"
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
          background: "#FAF9F7",
          color: "#1C1917",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  )
}
