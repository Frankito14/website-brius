import { MapPin, Mail, Clock, Phone } from "lucide-react";

export default function Contacto() {
  return (
    <main className="pb-20">
      {/* Header */}
      <section className="bg-primary/5 py-16 md:py-24 border-b border-[#e7edf3]">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d141b] mb-4">
            Contacto
          </h1>
          <p className="text-lg text-[#4c739a] max-w-2xl mx-auto">
            Estamos a su disposición. Contáctenos para programar su turno, hacernos una consulta o visitar nuestras instalaciones.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 lg:px-10 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info & Form */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0d141b] mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <MapPin className="text-primary size-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d141b] text-lg">Dirección</h3>
                    <p className="text-[#4c739a]">Gaucho Cruz 5510, B1682AKN Villa Bosch, Provincia de Buenos Aires</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Phone className="text-primary size-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d141b] text-lg">Teléfono</h3>
                    <p className="text-[#4c739a]">011 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Mail className="text-primary size-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d141b] text-lg">Email</h3>
                    <p className="text-[#4c739a]">contacto@centromedicobrius.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Clock className="text-primary size-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d141b] text-lg">Horarios de Atención</h3>
                    <p className="text-[#4c739a]">Lunes a Viernes: 08:00 - 20:00<br/>Sábados: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Envíenos un mensaje</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Nombre completo"
                    type="text"
                  />
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Correo electrónico"
                    type="email"
                  />
                </div>
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Asunto"
                  type="text"
                />
                <textarea
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="¿En qué podemos ayudarte?"
                  rows={5}
                ></textarea>
                <button
                  type="button"
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[500px] rounded-2xl overflow-hidden border border-slate-200 relative shadow-sm">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxkVXIk9NSca1uyHqdrCBV05B0X31aL7dB6UN8FplQDmEJX25Roco4qG74K0h2IOLr69jR56UKY-yzZvMR0GirmL5jXVSdCqaWNi166cv-jfaukWDMJiiHHNoXCmMcnIt77Muyv4gDUUCM-f64IjBsxcT9PhrRNgYMtYlK6G1pS8dZku4AwvN4IZWBRSUjEVG5w5OWf4JM66Ijiyn5vlZzivL6KpPOcMYM5or1vvIDD1uc6fKjFklKRpaNFyamsIy7365h17hciaZN")'
              }}
            ></div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white p-5 rounded-xl shadow-xl border border-slate-100 text-center">
              <h4 className="font-bold text-lg mb-2">Centro Médico Brius</h4>
              <p className="text-sm text-[#4c739a] mb-4">
                Gaucho Cruz 5510, Villa Bosch
              </p>
              <a 
                href="https://maps.google.com/?q=Gaucho+Cruz+5510,+Villa+Bosch,+Buenos+Aires" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-primary text-white text-sm font-bold py-2.5 px-6 rounded-lg w-full hover:bg-primary/90 transition-colors"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
