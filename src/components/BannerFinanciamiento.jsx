import chicaFinanciamiento from "../assets/chica.png"

function BannerFinanciamiento() {
  return (
    <div className="mx-48 mt-6 mb-12 bg-[#0D1E78] rounded-xl overflow-hidden relative flex items-center min-h-[150px]">

      {/* Foto de la chica */}
      <div className="relative h-full flex-shrink-0">
        <img
          src={chicaFinanciamiento}
          alt="Estudiante USB"
          className="h-[160px] object-contain relative z-10 translate-x-[-40px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-blue-400/40" />
      </div>

      {/* Texto */}
        <div className="flex-1 px-8">
        <p className="text-white text-2xl md:text-3xl font-bold leading-snug text-center translate-x-[-50px] ">
            Da el primer paso hacia<br />
            tu futuro profesional
        </p>
        </div>

      {/* Botón */}
      <div className="px-8">
        <button className="bg-orange-500 transition cursor-pointer text-[#0D1E78] text-[18px] font-bold px-8 py-3 rounded-lg text-center leading-tight translate-x-[-50px]">
          Quiero financiar<br />mi estudio
        </button>
      </div>

    </div>
  )
}

export default BannerFinanciamiento