const facultades = [
  "Ingeniería",
  "Psicología",
  "Ciencias Económicas y Administrativas",
  "Ciencias Jurídicas y Políticas",
  "Humanidades y Ciencias de la Educación",
]

function Facultades() {
  return (
    <div className="bg-gray-100 px-50 pb-16">

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        {/* Texto - ocupa la primera casilla de la grilla */}
        <div className="flex items-center">
          <p className="italic text-2xl font-serif leading-snug">
            Conoce nuestras<br />facultades
          </p>
        </div>

        {/* Tarjetas - ocupan el resto de las casillas */}
        {facultades.map((facultad) => (
          <div
            key={facultad}
            className="border border-gray-400 rounded-lg bg-gray-200 p-5 hover:bg-gray-300 transition cursor-pointer"
          >
            <p className="font-bold">Facultad de</p>
            <p className="italic font-serif">{facultad}</p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Facultades