"use client"

import { useState } from "react"
import { MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "+593 998975183",
    link: "tel:+59399897518"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+593 998975183",
    link: "https://wa.me/59399897518"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Atención personalizada en todo Guayaquil",
    link: "#"
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Lun - Sáb: 8am - 6pm",
    link: null
  }
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicle: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = encodeURIComponent(
      `¡Hola! Me interesa cotizar láminas de sol.\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nVehículo: ${formData.vehicle}\nMensaje: ${formData.message}`
    )
    window.open(`https://wa.me/593998975183?text=${whatsappMessage}`, "_blank")
  }

  return (
    <section id="contacto" className="py-16 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <p className="text-accent text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 md:mb-4">
            Contacto
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Solicita tu cotización gratis
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Completa el formulario o contáctanos directamente. 
            Te responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border bg-card">
            <CardContent className="p-5 md:p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-10 md:h-11"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Teléfono / WhatsApp
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+593 123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-10 md:h-11"
                  />
                </div>
                <div>
                  <label htmlFor="vehicle" className="block text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Marca y modelo del vehículo
                  </label>
                  <Input
                    id="vehicle"
                    type="text"
                    placeholder="Ej: Toyota Corolla 2023"
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    required
                    className="h-10 md:h-11"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Mensaje (opcional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos qué tipo de lámina te interesa..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-11 md:h-12">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 md:gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm md:text-base text-foreground mb-0.5 md:mb-1">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-xs sm:text-sm text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-6 md:mt-8 rounded-lg overflow-hidden border border-border bg-muted aspect-video flex items-center justify-center">
              <div className="text-center p-4">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Ubicados en el centro de la ciudad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
