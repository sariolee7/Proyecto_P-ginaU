import { ChevronDown, Search } from "lucide-react"

const menuItems = [
  "La Universidad",
  "Oferta Académica",
  "Aspirantes",
  "Estudiantes",
  "Graduados",
  "Servicios",
]

function Navbar() {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between px-20 py-3">

        
        <div className="flex items-center gap-4">
          <img
            src="src\assets\Logo.png"
            alt="Universidad de San Buenaventura"
            className="h-26"
          />
          <div className="h-18 w-[3px] bg-[#E67500] flex-shrink-0" />
          <img
            src="src\assets\Acreditacion.png"
            alt="Acreditación Institucional de Alta Calidad Multicampus"
            className="h-15"
          />
        </div>

        {/* Menú */}
        <nav className="flex items-center divide-x divide-[#CCCCCC] text-gray-800 font-medium ">
          {menuItems.map((item) => (
            <button
              key={item}
              className="px-3 flex items-center gap-1 hover:text-orange-500"
            >
              {item}
              <ChevronDown size={16} />
            </button>
          ))}
        </nav>

        {/* Buscador */}
        <div className="flex items-center gap-1">
          <input
            type="text"
            placeholder="Buscar"
            className="border border-gray-300 rounded-[12px] px-3 py-2 text-sm w-17 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <button className="bg-[#E67500] hover:bg-orange-400 text-white px-2.5 py-2 rounded-[9px]">
            <Search size={19} />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar