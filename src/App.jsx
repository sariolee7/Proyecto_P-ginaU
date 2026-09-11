import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VidaUniversitaria from './components/VidaUniversitaria'
import BannerFinanciamiento from './components/BannerFinanciamiento'
import OfertaAcademica from './components/OfertaAcademica'
import Facultades from './components/Facultades'
import Diferenciales from './components/Diferenciales'

import Orgullo from './components2/Orgullo'
import Eventos from './components2/Eventos'
import Conocecampus from './components2/Conocecampus'
import Visitanos from './components2/Visitanos'
import Footer from './components2/Footer'
import VidaUniversitaria from './components/VidaUniversitaria'


function App() {
  return (
    <div>
      <TopBar />

      <Navbar />

      <Hero />

     <VidaUniversitaria />

 <BannerFinanciamiento />

     <OfertaAcademica />

      <Facultades />

      <Diferenciales /> 

      
      {/*Orgullo*/}
      <Orgullo />

      {/*Eventos*/}
      <Eventos />

      {/*Conoce*/}
      <Conocecampus />

      {/*Visítanos*/}
      <Visitanos />

      {/*Footer*/}
      <Footer />

    </div>
  )
}

export default App