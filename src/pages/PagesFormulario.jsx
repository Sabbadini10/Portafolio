import React from 'react'
import ComponentsFormulario from '../components/formulario/ComponentsFormulario'
import Footer from '../components/footer/ComponentsFooter'
import Navbar from '../components/navbar/ComponentsNavbar'


function PagesFormulario() {
  
  return (
    <div className='PagesFormulario'>
      <Navbar />
      <div className="container-fluid">
      <div className="row justify-content-center">
        <ComponentsFormulario />
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default PagesFormulario;