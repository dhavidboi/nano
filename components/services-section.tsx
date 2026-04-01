import { Sun, Shield, Eye, Thermometer, Car, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Sun,
    title: "Protección UV",
    description: "Bloquea hasta el 99% de los rayos UV dañinos, protegiendo tu piel y el interior de tu vehículo."
  },
  {
    icon: Thermometer,
    title: "Control de Temperatura",
    description: "Reduce significativamente el calor interior, manteniendo tu carro fresco incluso en días calurosos."
  },
  {
    icon: Eye,
    title: "Privacidad Total",
    description: "Diferentes niveles de oscurecimiento para la privacidad que necesitas sin sacrificar visibilidad."
  },
  {
    icon: Shield,
    title: "Seguridad Mejorada",
    description: "Las láminas refuerzan los vidrios, reduciendo el riesgo de rotura y protegiendo a los ocupantes."
  },
  {
    icon: Car,
    title: "Todo Tipo de Vehículos",
    description: "Láminas compatibles con carros, camionetas, SUVs, y vehículos comerciales de todas las marcas."
  },
  {
    icon: Award,
    title: "Materiales Premium",
    description: "Vendemos láminas de las mejores marcas del mercado con garantía extendida."
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
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Soluciones completas para tu vehículo
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Ofrecemos láminas de sol de alta calidad con los más altos 
            estándares del mercado para proteger tu vehículo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer border-border bg-card hover:bg-secondary hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-5 md:p-6 lg:p-8">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary flex items-center justify-center mb-4 md:mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3 group-hover:text-accent transition-colors duration-300">
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
