"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Láminas de seguridad automotriz, accesorios de instalación y protección vehicular en Guayaquil, Ecuador"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95 md:bg-gradient-to-r md:from-background/95 md:via-background/80 md:to-background/60" />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center container mx-auto px-4 relative z-10 pt-20 md:pt-24">
        <div className="max-w-3xl pb-48 md:pb-36">
          <p className="text-accent text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 sm:mb-3">
            Protección automotriz premium · Guayaquil, Ecuador
          </p>

          <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-3 sm:mb-4 text-balance">
            Láminas de seguridad y accesorios automotrices en Guayaquil
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-5 sm:mb-6 max-w-xl">
            Venta de láminas de control solar, espátulas de instalación profesional, cintas nano antideslizantes y sistemas de seguridad vehicular. Todo lo que necesitas para tu auto, en un solo lugar — con cobertura en Guayaquil, Samborondón y Durán.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild className="text-sm w-full sm:w-auto h-11 sm:h-12">
              <a
                href="#contacto"
                onClick={(e) => handleSmoothScroll(e, "#contacto")}
                className="flex items-center justify-center gap-2"
                title="Solicitar cotización de láminas y accesorios automotrices en Guayaquil"
              >
                Solicitar Cotización
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-sm bg-transparent text-foreground border-foreground/30 hover:bg-foreground/10 w-full sm:w-auto h-11 sm:h-12">
              <a
                href="#productos"
                onClick={(e) => handleSmoothScroll(e, "#productos")}
                className="flex items-center justify-center"
                title="Ver catálogo completo: láminas, accesorios y seguridad vehicular"
              >
                Ver Catálogo
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border z-20">
        <div className="container mx-auto px-4 py-3 sm:py-4 md:py-5">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8">
            <div className="text-center">
              <p className="font-serif text-lg sm:text-xl md:text-3xl font-bold text-accent">100%</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5">Protección UV</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-lg sm:text-xl md:text-3xl font-bold text-accent">85%</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5">Rechazo Calor</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-lg sm:text-xl md:text-3xl font-bold text-accent">3</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5">Categorías</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-lg sm:text-xl md:text-3xl font-bold text-accent">5</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5">Años Garantía</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
