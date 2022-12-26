import React from 'react'
import Footer from '../components/footer/ComponentsFooter'
import Navbar from '../components/navbar/ComponentsNavbar'
import ComponentsProyecto from '../components/proyecto/ComponentsProyecto'


function PagesProyecto() {
  
  return (
    <div>
      <Navbar />
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Portfolio| Proyecto</h1>
      </div>
      <div className="row justify-content-center">
        <ComponentsProyecto />
      </div>
    </div>
    <Footer />
    </div>
    
  )
}

export default PagesProyecto