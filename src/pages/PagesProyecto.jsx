import React from 'react'
import ComponentsProyecto from '../components/proyecto/ComponentsProyecto'


function PagesProyecto() {
  
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Portfolio| Proyecto</h1>
      </div>

      <div className="row justify-content-center">
          
        <ComponentsProyecto />
      </div>
    </div>
  )
}

export default PagesProyecto