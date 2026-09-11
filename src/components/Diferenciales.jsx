const diferenciales = [
  {
    numero: "01",
    titulo: "Educación integral y de alta calidad",
    texto: "Educación con bases académicas sólidas, docentes altamente calificados y programas actualizados, que forma profesionales con pensamiento crítico y sentido social.",
  },
  {
    numero: "02",
    titulo: "Experiencia práctica",
    texto: "Laboratorios, proyectos aplicados y escenarios reales que fortalecen las competencias de nuestros estudiantes.",
  },
  {
    numero: "03",
    titulo: "Conexión con el mundo",
    texto: "Convenios, intercambios y oportunidades de movilidad que amplían la visión global de nuestros estudiantes.",
  },
  {
    numero: "04",
    titulo: "Campus y bienestar",
    texto: "Espacios pensados para aprender, crear comunidad y vivir una experiencia universitaria integral.",
  },
  {
    numero: "05",
    titulo: "Acreditación Institucional de Alta Calidad Multicampus",
    texto: "Un reconocimiento que respalda nuestro compromiso con la excelencia académica, la calidad institucional y la formación con impacto en la sociedad.",
  },
]

function Diferenciales() {
  return (
    <div className="bg-[#0D1E78] px-50 py-14">

      {/* Encabezado */}
      <p className="italic text-white/80 font-serif">Diferenciales</p>
      <h2 className="text-white text-3xl font-bold mb-8">¿Por qué estudiar en la USB Bogotá?</h2>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {diferenciales.map((item) => (
          <div
            key={item.numero}
            className="bg-white rounded-lg p-5 border-b-4 border-orange-500 flex flex-col"
          >
            <p className="text-orange-500 text-4xl font-extrabold mb-2">{item.numero}</p>
            <p className="text-orange-500 font-bold text-lg leading-snug mb-2">{item.titulo}</p>
            <p className="text-gray-700 text-sm">{item.texto}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Diferenciales