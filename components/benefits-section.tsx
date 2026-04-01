import Image from "next/image"
import { Check } from "lucide-react"

const benefits = [
  "Productos de primera calidad",
  "Garantía de 5 años incluida",
  "Asesoría personalizada",
  "Cotización sin compromiso",
  "Envíos a todo el país",
  "Variedad de tonos disponibles"
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
                alt="Láminas de sol de alta calidad"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element - hidden on mobile */}
            <div className="hidden lg:block absolute -bottom-3 -right-3 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
            <div className="hidden lg:block absolute -top-3 -left-3 w-20 h-20 border-2 border-accent rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-accent text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 sm:mb-3">
              ¿Por Qué Elegirnos?
            </p>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              Calidad y compromiso en cada producto
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 sm:mb-6">
              En NanoWindowsFilms nos dedicamos a ofrecer las mejores láminas de sol 
              del mercado. Nuestro compromiso es brindarte productos de calidad superior 
              y un servicio excepcional.
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
                <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground">6+</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Tipos de láminas</p>
              </div>
              <div className="w-px h-8 sm:h-10 bg-border" />
              <div className="text-center">
                <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground">2</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Series disponibles</p>
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
