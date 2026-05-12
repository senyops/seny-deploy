import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { LenisProvider } from "@/components/providers/LenisProvider"

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params

  if (!routing.locales.includes(locale as "es" | "en" | "fr" | "it" | "pt")) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <LenisProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </LenisProvider>
    </NextIntlClientProvider>
  )
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
