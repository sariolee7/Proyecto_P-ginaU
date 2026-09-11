const tarjetas = [
  {
    titulo: "USB Radio",
    subtitulo: "Ingresar",
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
  },
  {
    titulo: "Colegios a la U",
    subtitulo: "Conoce más",
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    titulo: "Breviloquio",
    subtitulo: "Leer aquí",
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a7 7 0 0 1 14 0v1" />
      </svg>
    ),
  },
  {
    titulo: "Directorio USB",
    subtitulo: "Ver aquí",
    icono: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
]

function VidaUniversitaria() {
  return (
    <div className="bg-gray-100 px-48 py-12">
      
      {/* Encabezado */}
      <p className="italic text-gray-600">Vida universitaria</p>
      <h2 className="text-3xl font-bold mb-6">Tu vida en el campus</h2>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {tarjetas.map((tarjeta) => (
          <div
            key={tarjeta.titulo}
            className="bg-[#0D1E78] text-white rounded-lg p-5 flex flex-col justify-between h-21 hover:bg-[#FF8000] transition cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <p className="font-bold text-lg">{tarjeta.titulo}</p>
              <span className="opacity-80">{tarjeta.icono}</span>
            </div>
            <p className="italic text-sm">{tarjeta.subtitulo}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default VidaUniversitaria