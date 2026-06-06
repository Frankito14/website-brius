import Link from "next/link";
import { MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 pt-16 border-t border-slate-200 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Envíanos un mensaje</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Nombre completo"
                  type="text"
                />
                <input
                  className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Correo electrónico"
                  type="email"
                />
              </div>
              <input
                className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Asunto"
                type="text"
              />
              <textarea
                className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="¿En qué podemos ayudarte?"
                rows={4}
              ></textarea>
              <button
                type="button"
                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Enviar Consulta
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-primary">
                  Información de contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary mt-1 size-5 shrink-0" />
                    <div>
                      <p className="font-bold">Dirección</p>
                      <p className="text-[#4c739a] text-sm">Gaucho Cruz 5510, B1682AKN Villa Bosch, Provincia de Buenos Aires</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-primary mt-1 size-5 shrink-0" />
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-[#4c739a] text-sm">contacto@centromedicobrius.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-primary mt-1 size-5 shrink-0" />
                    <div>
                      <p className="font-bold">Horarios de Atención</p>
                      <p className="text-[#4c739a] text-sm">Lunes a Viernes: 08:00 - 20:00 | Sábados: 09:00 - 13:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-primary">
                  Seguinos
                </h3>
                <div className="flex gap-4">
                  <Link
                    className="size-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    href="#"
                    aria-label="Facebook"
                  >
                    <Mail className="size-5" />
                  </Link>
                  <Link
                    className="size-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                    href="#"
                    aria-label="Instagram"
                  >
                    <Mail className="size-5" />
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#4c739a] mt-12">
              © 2024 Centro Médico Brius. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
