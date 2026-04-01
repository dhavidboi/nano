"use client"

import { useState } from "react"
import { Sun, Thermometer, Shield, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const akSeries = [
  {
    code: "AK05",
    visibleLight: "5%",
    irRejection: "73%",
    uvRejection: "100%",
    tser: "85.6%",
    thickness: "4MIL",
    description: "Máxima privacidad"
  },
  {
    code: "AK20",
    visibleLight: "15%",
    irRejection: "56%",
    uvRejection: "100%",
    tser: "72.6%",
    thickness: "4MIL",
    description: "Balance ideal"
  },
  {
    code: "AK35",
    visibleLight: "34%",
    irRejection: "44%",
    uvRejection: "99%",
    tser: "61%",
    thickness: "4MIL",
    description: "Mayor claridad"
  }
]

const bkSeries = [
  {
    code: "BK05",
    visibleLight: "5%",
    irRejection: "69%",
    uvRejection: "98.7%",
    tser: "85.3%",
    sc: "0.169",
    scratchResistant: "3H",
    description: "HD + Privacidad"
  },
  {
    code: "BK20",
    visibleLight: "17.1%",
    irRejection: "52.2%",
    uvRejection: "95.1%",
    tser: "71.9%",
    sc: "0.323",
    scratchResistant: "3H",
    description: "Visibilidad óptima"
  },
  {
    code: "BK35",
    visibleLight: "30.4%",
    irRejection: "39.5%",
    uvRejection: "89.2%",
    tser: "59.3%",
    sc: "0.468",
    scratchResistant: "3H",
    description: "Claridad máxima"
  }
]

const features = [
  { icon: Eye, label: "Alta Definición" },
  { icon: Thermometer, label: "Aislamiento Térmico" },
  { icon: Sun, label: "Protección UV" },
  { icon: Shield, label: "Privacidad" }
]

export function ProductsSection() {
  const [activeSeries, setActiveSeries] = useState<"ak" | "bk">("ak")
  const currentSeries = activeSeries === "ak" ? akSeries : bkSeries

  return (
    <section id="productos" className="py-16 md:py-24 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <p className="text-accent text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 md:mb-4">
            Nuestros Productos
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Láminas de alta calidad
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Conoce las especificaciones técnicas de nuestras láminas premium.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 mb-8 md:mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
              <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span className="text-xs sm:text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-6 md:mb-10">
          <button
            onClick={() => setActiveSeries("ak")}
            className={cn(
              "relative px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-lg transition-all duration-300",
              activeSeries === "ak"
                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80"
            )}
          >
            AK-Series
          </button>
          <button
            onClick={() => setActiveSeries("bk")}
            className={cn(
              "relative px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-lg transition-all duration-300",
              activeSeries === "bk"
                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80"
            )}
          >
            BK-Series
          </button>
        </div>

        <Card className="border-border bg-card overflow-hidden">
          <CardContent className="p-0">
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-accent">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-accent-foreground">
                      Código
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-accent-foreground">
                      Luz Visible
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-accent-foreground">
                      Rechazo IR
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-accent-foreground">
                      Rechazo UV
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-accent-foreground">
                      TSER
                    </th>
                    {activeSeries === "bk" && (
                      <th className="px-6 py-4 text-center text-sm font-semibold text-accent-foreground">
                        Resistencia
                      </th>
                    )}
                    <th className="px-6 py-4 text-center text-sm font-semibold text-accent-foreground">
                      Grosor
                    </th>
                  </tr>
                </thead>
                <tbody key={activeSeries}>
                  {currentSeries.map((product, index) => (
                    <tr 
                      key={product.code}
                      className={cn(
                        "border-b border-border transition-all duration-300 hover:bg-accent/10",
                        index % 2 === 0 ? "bg-card" : "bg-secondary/30"
                      )}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-6 rounded bg-gradient-to-r from-foreground/80 to-foreground/40" 
                               style={{ opacity: 1 - (parseInt(product.visibleLight) / 100) }} />
                          <div>
                            <p className="font-semibold text-foreground">{product.code}</p>
                            <p className="text-xs text-muted-foreground">{product.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="text-lg font-bold text-foreground">{product.visibleLight}</span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="text-lg font-bold text-foreground">{product.irRejection}</span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="text-lg font-bold text-accent">{product.uvRejection}</span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="text-lg font-bold text-foreground">{product.tser}</span>
                      </td>
                      {activeSeries === "bk" && "scratchResistant" in product && (
                        <td className="px-6 py-5 text-center">
                          <span className="text-lg font-bold text-foreground">{product.scratchResistant}</span>
                        </td>
                      )}
                      <td className="px-6 py-5 text-center">
                        <span className="text-sm font-medium text-muted-foreground">
                          {activeSeries === "ak" ? product.thickness : "4MIL"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden divide-y divide-border">
              {currentSeries.map((product) => (
                <div key={product.code} className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-5 rounded bg-gradient-to-r from-foreground/80 to-foreground/40 flex-shrink-0" 
                         style={{ opacity: 1 - (parseInt(product.visibleLight) / 100) }} />
                    <div>
                      <p className="font-bold text-base text-foreground">{product.code}</p>
                      <p className="text-xs text-muted-foreground">{product.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-secondary rounded-md p-2 text-center">
                      <p className="text-[10px] text-muted-foreground mb-0.5">Luz</p>
                      <p className="text-sm font-bold text-foreground">{product.visibleLight}</p>
                    </div>
                    <div className="bg-secondary rounded-md p-2 text-center">
                      <p className="text-[10px] text-muted-foreground mb-0.5">IR</p>
                      <p className="text-sm font-bold text-foreground">{product.irRejection}</p>
                    </div>
                    <div className="bg-secondary rounded-md p-2 text-center">
                      <p className="text-[10px] text-muted-foreground mb-0.5">UV</p>
                      <p className="text-sm font-bold text-accent">{product.uvRejection}</p>
                    </div>
                    <div className="bg-secondary rounded-md p-2 text-center">
                      <p className="text-[10px] text-muted-foreground mb-0.5">TSER</p>
                      <p className="text-sm font-bold text-foreground">{product.tser}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 md:mt-8">
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-card rounded-lg p-3 md:p-4 border border-border text-center">
              <p className="text-accent font-semibold text-sm mb-0.5">Rechazo UV</p>
              <p className="text-xs text-muted-foreground">Protección ultravioleta</p>
            </div>
            <div className="bg-card rounded-lg p-3 md:p-4 border border-border text-center">
              <p className="text-foreground font-semibold text-sm mb-0.5">Rechazo IR</p>
              <p className="text-xs text-muted-foreground">Reducción de calor</p>
            </div>
            <div className="bg-card rounded-lg p-3 md:p-4 border border-border text-center">
              <p className="text-foreground font-semibold text-sm mb-0.5">TSER</p>
              <p className="text-xs text-muted-foreground">Rechazo total solar</p>
            </div>
            <div className="bg-card rounded-lg p-3 md:p-4 border border-border text-center">
              <p className="text-foreground font-semibold text-sm mb-0.5">Luz Visible</p>
              <p className="text-xs text-muted-foreground">Luz que atraviesa</p>
            </div>
          </div>
          <p className="sm:hidden text-xs text-muted-foreground text-center">
            <span className="text-accent">UV:</span> Protección ultravioleta | <span className="text-foreground">IR:</span> Rechazo calor | <span className="text-foreground">TSER:</span> Rechazo solar total
          </p>
        </div>
      </div>
    </section>
  )
}
