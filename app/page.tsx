import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProductsSection } from "@/components/products-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
