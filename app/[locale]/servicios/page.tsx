import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import ServiciosContent from "@/components/servicios/ServiciosContent"
import CTASection from "@/components/home/CTASection"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/servicios">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta.servicios" })
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale,
      type: "website",
    },
  }
}

export default function ServiciosPage() {
  return (
    <>
      <ServiciosContent />
      <CTASection />
    </>
  )
}
