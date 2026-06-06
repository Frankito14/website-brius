import { Stethoscope } from "lucide-react";
import { EspecialidadCard } from "./components/EspecialidadCard";

const specialities = [
  { name: "Alergia" },
  {
    name: "Cardiología",
    sub: ["E.C.G.", "Ecocardiograma, arterial y venoso", "Ecocardiograma Doppler B/N y color", "Ergometría 12 derivaciones", "Holter 24 Hs.", "Presurometría 24 Hs."]
  },
  { name: "Cirugía general" },
  { name: "Clinica Médica" },
  { name: "Dermatología" },
  { name: "Diabetología" },
  { name: "Endocrinología" },
  {
    name: "Fonoaudiología",
    sub: ["Audiometrías", "Logoaudiometría", "Otoemisiones acústicas", "Timpanometría"]
  },
  { name: "Flebología y vascular" },
  { name: "Gastroenterología" },
  { name: "Gerontología" },
  { name: "Ginecología", sub: ["Pap y colpo"] },
  { name: "Inmunología" },
  { name: "Nefrología" },
  { name: "Neumonología", sub: ["Espirometría"] },
  { name: "Nutrición" },
  { name: "Obesidad" },
  { name: "Oftalmología" },
  { name: "Ortopedia" },
  { name: "O.R.L.", sub: ["Rinoscopía"] },
  { name: "Pediatría" },
  { name: "Reumatología" },
  { name: "Traumatología" },
  { name: "Traumatología Infantil" },
  { name: "Urología" },
];

function HeroMedicina() {
  return (
    <section className="relative p-10 bg-gradient-to-br from-indigo-50 to-indigo-100/50">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="md:p-10">
          <span
            className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 font-label-md mb-6 uppercase tracking-wider">
            Salud
          </span>
          <h1 className="font-black text-6xl mb-6">Brius Medicina</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
            Profesionales altamente calificados dedicados a tu salud integral.
          </p>
          <div className="flex gap-4">
            <a className="bg-indigo-400 text-white px-8 py-4 rounded-xl font-label-md shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              href="#contacto">Agendar Turno</a>
            <a className="text-indigo-400 px-8 py-4 rounded-xl font-label-md hover:bg-indigo-100/90 transition-colors"
              href="#servicios">Ver Especialidades</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FCE4EC] rounded-full blur-3xl opacity-50"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img alt="Tratamiento Facial Estético" className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSdLfsy8TTJq8rIysFTcRjikAMPLxyag282222cK6eS3L_1NHcERGZeVsyr78pM0_Ws6vub9oq1_eQYu-9aClqiMs6N_dcKl7G3J4m7LyOv9SrE7X2eM_UZP9JX30xifvqLHroDL0OfSpX801icEN4eZzczH1BEUJYZjybcRu62FPNDcStkGk03jqBHd6O4CHfePAUBm0RGX2zTGdXU9Zj5fcoHxdyUka4Tb4nHT3pubIaEaqRVb7GMyHWWMdgeWUcele5MF5vlwoU" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Medicina() {
  return (
    <main className="pb-20 bg-indigo-50/30 min-h-screen">
      {/* Mini Hero */}
      <HeroMedicina />
      {/* Specialties List */}
      <section className="max-w-[1200px] mx-auto px-4 lg:px-10 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-950 mb-4">Nuestras Especialidades</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialities.map((spec, index) => (
            <EspecialidadCard key={index} spec={spec} />
          ))}
        </div>
      </section>
    </main>
  );
}
