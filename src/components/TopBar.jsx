function TopBar() {
  return (
    <div className="bg-[#E67500] text-white text-[14px]">
      <div className="flex justify-between items-center px-21.5 py-3.5">
        
        {/*izquierda */}
        <div className="flex items-center gap-2">
          <a href="#" className="hover:underline">Investigación</a>
          <span>|</span>
          <a href="#" className="hover:underline">Internacionalización</a>
          <span>|</span>
          <a href="#" className="hover:underline">Bienestar Institucional</a>
          <span>|</span>
          <a href="#" className="hover:underline">Proyección Social</a>
          <span>|</span>
          <a href="#" className="hover:underline">Biblioteca</a>
        </div>

        {/*derecha */}
        <div className="flex items-center gap-2">
          <a href="#" className="hover:underline">Pago en línea</a>
          <span>|</span>
          <a href="#" className="hover:underline">ASIS</a>
          <span>|</span>
          <a href="#" className="hover:underline">NEXUS</a>
          <span>|</span>
          <a href="#" className="font-bold hover:underline">Soy Colaborador</a>
        </div>

      </div>
    </div>
  )
}

export default TopBar