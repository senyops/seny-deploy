import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import ContactoContent from "@/components/contacto/ContactoContent"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contacto">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta.contacto" })
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

export default function ContactoPage() {
  return <ContactoContent />
}
