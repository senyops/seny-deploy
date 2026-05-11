import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import HeroSection from "@/components/home/HeroSection"
import NicheSection from "@/components/home/NicheSection"
import HowItWorksSection from "@/components/home/HowItWorksSection"
import WhySenySection from "@/components/home/WhySenySection"
import TechMarquee from "@/components/home/TechMarquee"
import CTASection from "@/components/home/CTASection"

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta.home" })
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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NicheSection />
      <TechMarquee />
      <HowItWorksSection />
      <WhySenySection />
      <CTASection />
    </>
  )
}
