import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import CasosContent from "@/components/casos/CasosContent"
import CTASection from "@/components/home/CTASection"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/casos">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta.casos" })
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

export default function CasosPage() {
  return (
    <>
      <CasosContent />
      <CTASection />
    </>
  )
}
