import React from 'react'
import ComponentsCursos from '../components/cursos/ComponentsCurso'
import Footer from '../components/footer/ComponentsFooter'
import Navbar from '../components/navbar/ComponentsNavbar'


function PagesCursos() {
  
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Portfolio| Cursos</h1>
      </div>

      <div className="row justify-content-center">
          
        <ComponentsCursos />
      </div>
    </div>
    <Footer />
    </div>
    
  )
}

export default PagesCursos;