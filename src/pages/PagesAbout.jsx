import React from 'react'
import ComponentsAbout from '../components/about/ComponentsAbout'


function PagesAbout() {
  
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Portfolio| About</h1>
      </div>

      <div className="row justify-content-center">
          
        <ComponentsAbout />
      </div>
    </div>
  )
}

export default PagesAbout