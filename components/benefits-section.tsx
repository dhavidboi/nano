import Image from "next/image"
import { Check } from "lucide-react"

const benefits = [
  "Láminas Series AK y BK con certificación técnica",
  "Espátulas y herramientas de instalación profesional",
  "Cintas nano antideslizantes para estribos",
  "Seguros y pernos para computadoras vehiculares",
  "Garantía de 5 años en láminas de seguridad",
  "Asesoría personalizada sin compromiso",
  "Entrega en Guayaquil, Samborondón y Durán",
  "Cotización rápida por WhatsApp"
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/installation.jpg"
                alt="Instalación profesional de láminas de seguridad automotriz en Guayaquil"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden lg:block absolute -bottom-3 -right-3 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
            <div className="hidden lg:block absolute -top-3 -left-3 w-20 h-20 border-2 border-accent rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-accent text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 sm:mb-3">
              ¿Por Qué Elegirnos?
            </p>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              Todo lo que necesita tu vehículo, en un solo lugar
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 sm:mb-6">
              En NanoWindowsFilm no solo vendemos láminas de seguridad — somos tu proveedor completo de protección automotriz en Guayaquil. Desde las láminas AK y BK con tecnología de rechazo solar, hasta espátulas de instalación, cintas nano antideslizantes para estribos, protectores de filo de puerta y sistemas de seguridad para computadoras y pantallas vehiculares.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 sm:gap-6 pt-4 border-t border-border">
              <div className="text-center">
                <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground">20+</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Productos disponibles</p>
              </div>
              <div className="w-px h-8 sm:h-10 bg-border" />
              <div className="text-center">
                <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground">3</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Categorías</p>
              </div>
              <div className="w-px h-8 sm:h-10 bg-border" />
              <div className="text-center">
                <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground">5</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Años garantía</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
