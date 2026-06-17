import { Sun, Shield, Eye, Thermometer, Car, Wrench, Lock, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Sun,
    title: "Protección UV hasta 100%",
    description: "Nuestras láminas Series AK y BK bloquean prácticamente la totalidad de rayos UV, protegiendo tu piel y el tapizado de tu vehículo en el clima de Guayaquil."
  },
  {
    icon: Thermometer,
    title: "Control térmico avanzado",
    description: "Reduce hasta un 85% el calor interior de tu auto. Ideal para el calor extremo de la Costa ecuatoriana — menos aire acondicionado, menos gasto de combustible."
  },
  {
    icon: Eye,
    title: "Privacidad sin perder visibilidad",
    description: "Desde 5% hasta 35% de luz visible transmitida. Elige el nivel de privacidad que necesitas sin comprometer tu campo de visión al conducir."
  },
  {
    icon: Shield,
    title: "Láminas de seguridad estructural",
    description: "Al instalarse sobre el vidrio, la lámina lo mantiene unido ante impactos, reduciendo el riesgo de rotura y la exposición ante robos o accidentes."
  },
  {
    icon: Wrench,
    title: "Accesorios de instalación profesional",
    description: "Espátulas de moldeado, espátulas con tela antirayas, cintas nano antideslizantes para estribos y protectores nano carbón para filos de puerta."
  },
  {
    icon: Lock,
    title: "Seguridad para equipos vehiculares",
    description: "Seguros antirrobo, brazos de pluma universales, tuercas cónicas y pernos de seguridad para fijar computadoras y pantallas en tu vehículo de forma segura."
  },
  {
    icon: Car,
    title: "Compatible con todo tipo de vehículos",
    description: "Láminas y accesorios para carros, camionetas, SUVs y vehículos comerciales de todas las marcas. Consulta disponibilidad para tu modelo."
  },
  {
    icon: Layers,
    title: "Catálogo amplio, un solo proveedor",
    description: "Desde la lámina hasta la espátula de instalación y el perno de fijación — todo disponible en Guayaquil, sin necesidad de buscar en varios proveedores."
  }
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <p className="text-accent text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 md:mb-4">
            Nuestros Servicios
          </p>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Protección completa para tu vehículo
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Láminas de control solar de alta tecnología, herramientas de instalación profesional y accesorios de seguridad vehicular — todo disponible en Guayaquil con entrega a Samborondón y Durán.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group cursor-pointer border-border bg-card hover:bg-secondary hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-5 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary flex items-center justify-center mb-4 md:mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <h3 className="font-sans text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
