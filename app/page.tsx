import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Stethoscope, ShieldCheck, CreditCard, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 lg:px-10 pb-20">
      {/* Hero Section */}
      <section className="py-6">
        <div className="relative h-[520px] rounded-2xl overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDI-a9XAgzq7LZrauYPDkVrXHJcS1D2FwNyl6O-9fyqMtBwmDRhM206J6qWip4um3kZcq96TcCUg3AZVHVokQ7u22rOCegievGge2WEqF2rZvMguj_KX7nEKZ6BnJAT5LwlRy7kE9DCrq0garflsbNREV-DotyiVt5bIzwSJ8HyVn6dOo_c3tMRpsNQz6lyJfP2wl_vgPTuonItQcYx1_JEd6dcCaQv4eXSVuq7LhmBrQO5jwItOo61xjOvZFvEIXNLLGBTnE9FtYpo")',
            }}
          ></div>
          <div className="relative h-full flex flex-col justify-end p-8 md:p-16 max-w-[800px]">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              En el año 2002
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium mb-8">
              Comenzamos a brindar asistencia médica abocando nuestros servicios a la gente que más lo necesitaba,
              así fuimos creciendo y desarrollándonos en las distintas áreas de la salud y llegando a cubrir
              todas las especialidades médicas.
            </p>
          </div>
        </div>
      </section>

      {/* Body Section 1: Info Cards */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-[#cfdbe7] shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-primary/10 text-primary size-12 rounded-lg flex items-center justify-center">
              <Stethoscope className="size-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Kinesiología atiende:</h3>
              <p className="text-[#4c739a] text-sm leading-relaxed">
                i.o.m.a. - Docthos - medife sancor salud - swiss medical colegios escribano otras
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-[#cfdbe7] shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-primary/10 text-primary size-12 rounded-lg flex items-center justify-center">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Tecnología digital</h3>
              <p className="text-[#4c739a] text-sm leading-relaxed">
                Equipamiento avanzado para diagnostico por imagen, asegurando precisión.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-[#cfdbe7] shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-primary/10 text-primary size-12 rounded-lg flex items-center justify-center">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Obras Sociales</h3>
              <p className="text-[#4c739a] text-sm leading-relaxed">
                También atendemos gran variedad de obras sociales y PAMI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Body Section 2: Promotional */}
      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden group bg-primary rounded-xl p-8 text-white flex items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Asóciese sin cuota de ingreso</h3>
              <p className="text-white/80 text-sm">
                Únase a nuestra red médica hoy mismo sin costos iniciales.
              </p>
            </div>
            <div className="size-20 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <CreditCard className="size-10" />
            </div>
          </div>
          <div className="relative overflow-hidden group bg-slate-800 rounded-xl p-8 text-white flex items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Sin limites de edad</h3>
              <p className="text-white/80 text-sm">
                Garantizamos atención de calidad para todas las etapas de la vida.
              </p>
            </div>
            <div className="size-20 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <Users className="size-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Body Section 3: Main Pillars */}
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-primary rounded-full"></span>
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Medicine Card */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all">
            <div
              className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSdLfsy8TTJq8rIysFTcRjikAMPLxyag282222cK6eS3L_1NHcERGZeVsyr78pM0_Ws6vub9oq1_eQYu-9aClqiMs6N_dcKl7G3J4m7LyOv9SrE7X2eM_UZP9JX30xifvqLHroDL0OfSpX801icEN4eZzczH1BEUJYZjybcRu62FPNDcStkGk03jqBHd6O4CHfePAUBm0RGX2zTGdXU9Zj5fcoHxdyUka4Tb4nHT3pubIaEaqRVb7GMyHWWMdgeWUcele5MF5vlwoU")',
              }}
            ></div>
            <div className="p-8 relative bg-white">
              <h3 className="text-2xl font-bold mb-4">Medicina</h3>
              <p className="text-[#4c739a] mb-6 leading-relaxed">
                Una empresa de salud dedicada al cuidado de Ud. y su familia.
              </p>
              <Link href="/medicina" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                Leer más <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
          {/* Aesthetics Card */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all">
            <div
              className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqLx98pxxOzufYxVOpoz2rgJ_OgGUXwqo39rmC_J0QsVgDfVA4LE0dFUS-l0jOpO4AGwvPEvheqCxMCdpn6Lm_EJWVhn7QJqxiZYFTXQWu--WVsOMHTauNSFp_ZIo4eyyVb_VjzwtZwGo_5hRmTG8abdc12XN6dzLLpVBbbnB9a_z5vpJ-7zWWtCoHcbD4hz7VDC2p-0c2N2Rwd5VQAqv6uQ-yu_EK07h07wR6o4AE-yUbQVjs2AXjIwT_yJjzaXHNS4qtsFbGzVEe")',
              }}
            ></div>
            <div className="p-8 relative bg-white">
              <h3 className="text-2xl font-bold mb-4">Estética</h3>
              <p className="text-[#4c739a] mb-6 leading-relaxed">
                Estética corporal y facial no invasiva.
              </p>
              <Link href="/estetica" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                Leer más <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-primary rounded-full"></span>
          Cómo Encontrarnos
        </h2>
        <div className="rounded-2xl overflow-hidden border border-slate-200 h-[400px] relative">
          <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
            {/* Placeholder for Map - Pointing to Gaucho Cruz 5510, B1682AKN Villa Bosch */}
            <div
              className="w-full h-full bg-cover bg-center opacity-80"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxkVXIk9NSca1uyHqdrCBV05B0X31aL7dB6UN8FplQDmEJX25Roco4qG74K0h2IOLr69jR56UKY-yzZvMR0GirmL5jXVSdCqaWNi166cv-jfaukWDMJiiHHNoXCmMcnIt77Muyv4gDUUCM-f64IjBsxcT9PhrRNgYMtYlK6G1pS8dZku4AwvN4IZWBRSUjEVG5w5OWf4JM66Ijiyn5vlZzivL6KpPOcMYM5or1vvIDD1uc6fKjFklKRpaNFyamsIy7365h17hciaZN")',
              }}
            ></div>
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-white p-5 rounded-xl shadow-xl border border-slate-100 max-w-sm">
              <h4 className="font-bold text-lg mb-2">Centro Médico Brius</h4>
              <p className="text-sm text-[#4c739a] flex items-start gap-2">
                Gaucho Cruz 5510, B1682AKN Villa Bosch, Provincia de Buenos Aires
              </p>
              <a
                href="https://maps.google.com/?q=Gaucho+Cruz+5510,+Villa+Bosch,+Buenos+Aires"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-bold text-primary hover:underline"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
