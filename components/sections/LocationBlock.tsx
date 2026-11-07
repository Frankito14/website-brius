import React from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "../ui/Button";
import { WhatsAppIcon } from "../icons/SocialIcons";
import { waLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";


export function LocationBlock() {
  return (
    <Reveal delayMs={200}>
      <div className="rounded-md bg-white border border-ink-200 shadow-soft overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Map iframe (7 cols) */}
          <div className="lg:col-span-7 h-[360px] sm:h-[420px] lg:h-auto min-h-[380px] relative bg-ink-100">
            <iframe
              src={site.address.mapsEmbed}
              title="Mapa de ubicación de Centro Médico Brius en Villa Bosch"
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Data & Directions Card (5 cols) */}
          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-8 bg-white">
            <div className="space-y-6">
              <div>

                <h3 className="font-display text-2xl  font-bold text-ink-950">
                  Sede Central
                </h3>
              </div>

              <div className="space-y-4 text-sm text-ink-700">
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-lg bg-accent-100 text-accent-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <p className="font-bold text-ink-950">Dirección</p>
                    <p className="text-ink-600 leading-relaxed">
                      {site.address.street}, {site.address.locality}, {site.address.region}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-lg bg-accent-100 text-accent-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <p className="font-bold text-ink-950">Teléfono para turnos</p>
                    <a
                      href={`tel:${site.contact.phoneHref}`}
                      className="text-accent-600 font-semibold hover:underline"
                    >
                      {site.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {site.hours.length > 0 && (
                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-lg bg-accent-100 text-accent-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="size-4" />
                    </div>
                    <div>
                      <p className="font-bold text-ink-950">Horarios de atención</p>
                      {site.hours.map((h, i) => (
                        <p key={i} className="text-ink-600">
                          {h.days}: {h.time}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                href={site.address.mapsLink}
                external
                variant="primary"
                size="md"
                className="flex-1"
              >
                <Navigation className="size-4" />
                Cómo llegar
              </Button>

              <Button
                href={waLink("Hola, quisiera saber cómo llegar al centro médico.")}
                variant="whatsapp"
                size="md"
                className="flex-1"
              >
                <WhatsAppIcon className="size-6" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
