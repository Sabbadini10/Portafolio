import React from 'react'
import Footer from '../components/footer/ComponentsFooter'
import Navbar from '../components/navbar/ComponentsNavbar'
import ComponentsNoPage from '../components/NoPage/ComponentsNoPage'


function PagesNoPage() {
  
  return (
   <div>
     <Navbar />
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Portfolio| NoPage</h1>
      </div>
      <div className="row justify-content-center">
          
        <ComponentsNoPage />
      </div>
    </div>
    <Footer />
   </div>
  )
}

export default PagesNoPage