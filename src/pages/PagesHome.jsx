import React from 'react'
import Footer from '../components/footer/ComponentsFooter'
import ComponentsHome from '../components/home/ComponentsHome'
import Navbar from '../components/navbar/ComponentsNavbar'


function PagesHome() {
  
  return (
    <div>
       <Navbar />
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Portfolio| Home</h1>
      </div>

      <div className="row justify-content-center">
          
        <ComponentsHome />
      </div>
    </div>
    <Footer />
    </div>
   
  )
}

export default PagesHome