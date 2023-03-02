import React from 'react'
import Footer from '../components/footer/ComponentsFooter'
import Header from '../components/header/ComponentsHeader'
import ComponentsHome from '../components/home/ComponentsHome'
import "../components/home/Home.css"



function PagesHome() {
  
  return (
    <div className='PagesHome'>
       <Header />
    
      <div className="d-flex flex-row justify-content-center">
          <ComponentsHome/>
      </div>
   <Footer/>
    
    </div>
   
  )
}

export default PagesHome