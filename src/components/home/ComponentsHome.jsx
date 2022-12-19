import React from 'react';
import './Home.css'
import Footer from '../footer/ComponentsFooter'
import Header from '../header/ComponentsHeader'
import Main from '../main/ComponentsMain'

function Home() {
  return (
    <div className='Home'>
      < Header />
      <Main />
      <Footer />
      </div>
  )
}

export default Home;