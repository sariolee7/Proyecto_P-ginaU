import { useState, useEffect } from "react"
import fondo1 from "../assets/Fondo1.png"
import fondo2 from "../assets/Fondo2.png"
import fondo3 from "../assets/Fondo3.png"
import fondo4 from "../assets/Fondo4.png"

const slides = [
  {
    imagen: fondo1,
  },
  {
    imagen: fondo2,
  },
  {
    imagen: fondo3,
  },
    {
    imagen: fondo4,
  },
]

function Hero() {
  const [current, setCurrent] = useState(0)

  // Cambia de slide automáticamente cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 9000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <div
      className="relative bg-cover bg-center h-[510px] flex items-center overflow-hidden transition-all duration-500"
      style={{ backgroundImage: `url(${slide.imagen})` }}
    >
     

      {/* Contenido del slide activo */}
      <div className="relative z-10 w-full px-10">
        <div className="text-white">
          <p className="text-3xl md:text-4xl font-bold">{slide.titulo1}</p>
          <p className="text-6xl md:text-7xl font-extrabold text-orange-500 leading-none">
            {slide.titulo2}
          </p>
          <p className="text-3xl md:text-4xl font-bold ml-4">{slide.titulo3}</p>
          <p className="text-6xl md:text-7xl font-extrabold italic">
            {slide.titulo4}
          </p>
        </div>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white text-4xl hover:text-orange-500"
      >
        ‹
      </button>

      {/* Flecha derecha */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white text-4xl hover:text-orange-500"
      >
        ›
      </button>

      {/* Puntos indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === current ? "bg-orange-500" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero