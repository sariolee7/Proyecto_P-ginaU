import fotoPregrados from "../assets/Pregrados.png"
import fotoPosgrados from "../assets/Posgrados.png"
import fotoTecnologias from "../assets/Tecnologias.png"
import fotoEducacionContinua from "../assets/EducacionContinua.png"
import fotoCentroIdiomas from "../assets/CentroIdiomas.png"

const programas = [
  { titulo: "Pregrados", imagen: fotoPregrados },
  { titulo: "Posgrados", imagen: fotoPosgrados },
  { titulo: "Tecnologías", imagen: fotoTecnologias },
  { titulo: "Educación Continua", imagen: fotoEducacionContinua },
  { titulo: "Centro de Idiomas (CBLC)", imagen: fotoCentroIdiomas },
]

function OfertaAcademica() {
  return (
    <div className="bg-gray-100 px-40 py-10">

      {/* Encabezado */}
      <p className="italic text-gray-600 font-serif">Oferta académica</p>
      <h2 className="text-3xl font-bold mb-6">Explora tu próximo camino profesional</h2>

      {/* Tarjetas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 items-end">
        {programas.map((programa) => (
          <div
            key={programa.titulo}
            className="relative rounded-lg overflow-hidden h-[510px] cursor-pointer group transition-transform duration-300 hover:-translate-y-5 hover:shadow-xl"
          >
            <img
              src={programa.imagen}
              alt={programa.titulo}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Degradado naranja que aparece al pasar el mouse */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/90 via-orange-500/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Botón */}
      <div className="flex justify-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-md">
          Ver todos los programas
        </button>
      </div>

    </div>
  )
}

export default OfertaAcademica