import React from 'react'
import Footer from '../components/footer/ComponentsFooter'
import Navbar from '../components/navbar/ComponentsNavbar'
import ComponentsProyecto from '../components/proyecto/ComponentsProyecto'


function PagesProyecto() {
  
  return (
    <div className='PagesProyecto'>
      <Navbar />
    <div className="container-fluid">
      <div className="row justify-content-center">
        <ComponentsProyecto />
      </div>
    </div>
    <Footer />
    </div>
    
  )
}

export default PagesProyecto