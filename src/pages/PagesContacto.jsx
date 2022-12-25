import React from 'react'
import ComponentsContacto from '../components/contacto/ComponentsContacto'
import Footer from '../components/footer/ComponentsFooter'
import Navbar from '../components/navbar/ComponentsNavbar'


function PagesContacto() {
  
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Portfolio| Contacto</h1>
      </div>

      <div className="row justify-content-center">
          
        <ComponentsContacto />
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default PagesContacto
