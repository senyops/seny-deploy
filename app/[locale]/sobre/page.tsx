import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import SobrePage from "@/components/sobre/SobrePage"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/sobre">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta.sobre" })
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

export default function Page() {
  return <SobrePage />
}
