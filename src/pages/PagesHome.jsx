import React from 'react'
import ComponentsHome from '../components/home/ComponentsHome'


function PagesHome() {
  
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Portfolio| Home</h1>
      </div>

      <div className="row justify-content-center">
          
        <ComponentsHome />
      </div>
    </div>
  )
}

export default PagesHome