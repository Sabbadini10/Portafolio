import React from 'react'
import Footer from '../components/footer/ComponentsFooter'
import Navbar from '../components/navbar/ComponentsNavbar'
import ComponentsSkill from '../components/skill/ComponentsSkill'


function PagesSkill() {
  
  return (
    <div className='PagesSkill'>
      <Navbar />
    <div className="container-fluid">
      <div className="row justify-content-center">
        <ComponentsSkill />
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default PagesSkill