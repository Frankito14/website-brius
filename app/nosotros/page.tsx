import Image from "next/image";

export default function Nosotros() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 lg:px-10 py-16 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d141b] mb-12 flex items-center gap-4">
          <span className="w-12 h-1.5 bg-primary rounded-full hidden sm:block"></span>
          Centro Médico Brius
        </h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#e7edf3] text-[#4c739a] text-lg leading-relaxed space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[#0d141b] mb-4">Quiénes Somos</h2>
            <p className="font-semibold text-primary text-xl">
              Centro Médico Brius... Una empresa dedicada al cuidado de la salud.
            </p>
          </div>
          
          <p>
            Comenzamos a brindar asistencia médica en el año 2002. Desde nuestros inicios, enfocamos nuestros servicios hacia la gente que más lo necesitaba; esa fue la clave de nuestro crecimiento, siempre acompañada de nuestra constancia y trato cordial.
          </p>
          
          <p>
            Nos destacamos en distintas áreas de la salud y cubrimos todas las especialidades médicas, garantizando una atención integral para usted y su familia.
          </p>
          
          <p>
            Contamos con un servicio avanzado de Diagnóstico por Imagen, siendo uno de los pocos centros en la provincia de Buenos Aires capacitados para realizar espinogramas digitales con la mayor precisión.
          </p>
          
          <p>
            En la actualidad, contamos con la infraestructura y capacidad para realizar tratamientos de estética corporal y facial no invasivos, logrando notables resultados y garantizando la satisfacción de nuestros pacientes.
          </p>
          
          <div className="p-6 bg-slate-50 border-l-4 border-primary rounded-r-xl">
            <p className="font-semibold text-[#0d141b] italic">
              Todo tratamiento está estrictamente supervisado y controlado por nuestros profesionales médicos altamente capacitados.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
