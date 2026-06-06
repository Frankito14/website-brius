import { Sparkles, CheckCircle2 } from "lucide-react";


function HeroEstetica() {
  return (
    <section className="relative p-10 bg-gradient-to-br from-pink-50 to-pink-100/50">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="md:p-10">
          <span
            className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-800 font-label-md mb-6 uppercase tracking-wider">Bienestar
            &amp; Belleza</span>
          <h1 className="font-black text-6xl mb-6">Brius Estética</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
            Descubre un espacio diseñado para potenciar tu belleza natural con tecnología de vanguardia y atención
            profesional personalizada.
          </p>
          <div className="flex gap-4">
            <a className="bg-pink-400 text-white px-8 py-4 rounded-xl font-label-md shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              href="#contacto">Agendar Turno</a>
            <a className="text-pink-400 px-8 py-4 rounded-xl font-label-md hover:bg-pink-100/90 transition-colors"
              href="#servicios">Ver Tratamientos</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FCE4EC] rounded-full blur-3xl opacity-50"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img alt="Tratamiento Facial Estético" className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgU65q6wSFMSGQEmg29PvR0i7mdPiN745mYDiDwQ-7Iz3kz4Q2szbmJiOwqpAkO2fk360pHy2roidQxH0oIbyf9kBsULYyGoyUmKwywQUVTkVaCKnXWdwL8zZ3tgA0Y2WhZZNQ7RwjDkn9zLdIREsAYtu7ch4RqBBL0QyfXYzzis1o48kaqSUBm3Ay67erwp_DbU0uifWZ81g0qlJ4FKM9ZO-06Q0YSEztYMen-a7GBmNaU2PsvMsOa_lCerCUc7lEqm_woMRkHwja" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Estetica() {
  return (
    <main className="pb-20 bg-rose-50/30 min-h-screen">
      {/* Mini Hero */}
      <HeroEstetica />
      {/* Treatments Section */}
      <section className="max-w-[1000px] mx-auto px-4 lg:px-10 mt-16 space-y-12">

        {/* Cosmiatría */}
        <div className="bg-white rounded-2xl p-8 border border-pink-100 shadow-sm">
          <h2 className="text-2xl font-bold text-pink-950 mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-pink-400 rounded-full"></span>
            Tratamientos Cosmiatría
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Acné, rosácea y máculas (manchas)", "Lifting", "Anti age / Peeling", "Punta de diamante", "Radiofrecuencia"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[#4c739a] font-medium">
                <CheckCircle2 className="size-5 text-pink-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Corporales */}
        <div className="bg-white rounded-2xl p-8 border border-pink-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-pink-100 text-pink-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Primera consulta sin cargo
          </div>
          <h2 className="text-2xl font-bold text-pink-950 mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-pink-400 rounded-full"></span>
            Tratamientos Corporales
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Masaje reductor y modelador", "Tratamiento para la celulitis", "Tonificación con electrodos",
              "Tratamiento Esclerosante", "Lipoescultura láser", "Depilación Láser definitiva",
              "Drenaje Linfático", "Crioterapia", "Botox", "Criolipólisis", "Mesoterapia", "Radiofrecuencia"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[#4c739a] font-medium">
                <CheckCircle2 className="size-5 text-pink-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Podología */}
          <div className="bg-white rounded-2xl p-8 border border-pink-100 shadow-sm">
            <h2 className="text-2xl font-bold text-pink-950 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-pink-400 rounded-full"></span>
              Podología
            </h2>
            <ul className="space-y-4">
              {["Onicomicosis", "Onicocriptosis", "Tratamientos láser", "Pie diabético"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#4c739a] font-medium">
                  <CheckCircle2 className="size-5 text-pink-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Masajes */}
          <div className="bg-white rounded-2xl p-8 border border-pink-100 shadow-sm">
            <h2 className="text-2xl font-bold text-pink-950 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-pink-400 rounded-full"></span>
              Masajes
            </h2>
            <ul className="space-y-4">
              {["Descontracturantes", "Tailandés", "Californiano", "Drenaje linfático"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#4c739a] font-medium">
                  <CheckCircle2 className="size-5 text-pink-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Depilación */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-400 rounded-2xl p-8 md:p-12 text-white shadow-lg text-center relative overflow-hidden">
          <Sparkles className="absolute top-4 right-8 size-24 text-white/10" />
          <Sparkles className="absolute bottom-4 left-8 size-16 text-white/10" />

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10">
            Depilación Definitiva Láser
          </h2>
          <p className="text-xl md:text-2xl font-bold text-pink-100 uppercase tracking-widest mt-4">
            ¡Las leonas se atienden con nosotros!
          </p>
        </div>

        {/* Footer Banner */}
        <div className="mt-16 text-center bg-white p-8 rounded-xl border border-pink-100 shadow-sm">
          <p className="text-xl md:text-2xl font-bold text-pink-900">
            Consultas y asesoramiento sin cargo
          </p>
          <p className="text-pink-500 font-medium tracking-widest uppercase mt-2">
            • Atendido por profesionales •
          </p>
        </div>

      </section>
    </main>
  );
}
