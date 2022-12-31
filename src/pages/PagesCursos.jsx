import React from 'react'
import ComponentsCursos from '../components/cursos/ComponentsCurso'
import Footer from '../components/footer/ComponentsFooter'
import Navbar from '../components/navbar/ComponentsNavbar'


function PagesCursos() {
  
  return (
    <div className='PagesCursos'>
      <Navbar />
      <div className="container-fluid">
      <div className="row justify-content-center">
        <ComponentsCursos />
      </div>
    </div>
    <Footer />
    </div>
    
  )
}

export default PagesCursos;