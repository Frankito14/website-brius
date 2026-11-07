import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { waLink } from "@/lib/whatsapp";
import { PlusMark } from "../icons/PlusMark";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "../icons/SocialIcons";
import { ContactForm } from "../forms/ContactForm";
import Image from "next/image";

export default function Footer({ hidePreFooter = false }: { hidePreFooter?: boolean }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Main Navy Footer */}
      <div className={`bg-emerald-950 text-neutral-200 pt-24 pb-20 border-t border-white/10`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
            {/* Col 1: Brand & Identity */}
            <div className="lg:col-span-4 space-y-5">
              <Link href="/" className="inline-flex items-center gap-2.5">

                <div className="flex flex-col">
                  <span className="font-display font-semibold text-2xl tracking-tight text-white leading-none">
                    Centro Médico Brius
                  </span>
                  <span className="font-sans text-[10px] font-bold tracking-[0.24em] text-white uppercase leading-none mt-1">
                    Medicina y Estética
                  </span>
                </div>
              </Link>

              <p className="text-sm text-ink-400 leading-relaxed max-w-sm">
                Desde 2002 brindando asistencia médica y estética con vocación, tecnología diagnóstica de avanzada y el más cálido trato profesional.
              </p>

              {/* Social links (only rendered if URL is provided in site.ts) */}
              {(site.social.instagram || site.social.facebook) && (
                <div className="flex items-center gap-3 pt-2">
                  {site.social.instagram && (
                    <a
                      href={site.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                      aria-label="Instagram de Centro Médico Brius"
                    >
                      <InstagramIcon className="size-4.5" />
                    </a>
                  )}
                  {site.social.facebook && (
                    <a
                      href={site.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                      aria-label="Facebook de Centro Médico Brius"
                    >
                      <FacebookIcon className="size-4.5" />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-display font-semibold text-lg text-white">
                Navegación
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="hover:text-emerald-300 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="hover:text-emerald-300 transition-colors">
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link href="/medicina" className="hover:text-emerald-300 transition-colors">
                    Medicina y Especialidades
                  </Link>
                </li>
                <li>
                  <Link href="/estetica" className="hover:text-emerald-300 transition-colors">
                    Estética y Tratamientos
                  </Link>
                </li>
                <li>
                  <Link href="/coberturas" className="hover:text-emerald-300 transition-colors">
                    Obras Sociales y Planes
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-emerald-300 transition-colors">
                    Contacto y Ubicación
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact Details & Hours */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-display font-semibold text-lg text-white">
                Ubicación y Atención
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="size-4.5 text-white mt-0.5 shrink-0" />
                  <span>
                    {site.address.street}, {site.address.zip} {site.address.locality}, {site.address.region}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4.5 text-white shrink-0" />
                  <a href={`tel:${site.contact.phoneHref}`} className="hover:text-emerald-300 transition-colors">
                    {site.contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4.5 text-white shrink-0" />
                  <a href={`mailto:${site.contact.email}`} className="hover:text-emerald-300 transition-colors">
                    {site.contact.email}
                  </a>
                </li>
                {site.hours.length > 0 && (
                  <li className="flex items-start gap-3 pt-1">
                    <Clock className="size-4.5 text-white mt-0.5 shrink-0" />
                    <div>
                      {site.hours.map((h, i) => (
                        <p key={i} className="text-xs text-ink-300">
                          <strong className="text-white">{h.days}:</strong> {h.time}
                        </p>
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            </div>

            {/* Col 4: Institutional & Legal */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-display font-semibold text-lg text-white">
                Información Legal
              </h4>
              <ul className="space-y-2.5 text-sm text-ink-400">
                <li>
                  <Link href="/politica-de-privacidad" className="hover:text-emerald-300 transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/coberturas#asociate" className="hover:text-emerald-300 transition-colors">
                    Asóciese sin cargo
                  </Link>
                </li>
                {site.legal.habilitacion && (
                  <li className="text-xs pt-2">
                    Hab. Sanitaria N°: {site.legal.habilitacion}
                  </li>
                )}
                {site.legal.directorMedico && (
                  <li className="text-xs">
                    Dirección Médica: {site.legal.directorMedico}
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Strip */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-400">
            <p>
              © {currentYear} {site.name}. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-2">
              <span>Villa Bosch, Buenos Aires</span>
              <span>•</span>
              <a href={site.address.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 flex items-center gap-1 transition-colors">
                Cómo llegar <ArrowUpRight className="size-3" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
