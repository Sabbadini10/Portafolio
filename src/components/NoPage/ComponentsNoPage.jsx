import React from 'react'
import errorImage from '../../imagenes/error404.webp'
import ImagenError from '../imagen/ImagenError';
import "./NoPages.css"

function ComponentsNoPage() {
  return (
    <div>
        <div>
          <ImagenError src={errorImage} alt="Card image cap"  />
      </div>

      <div>
       
      </div>
    </div>
    
     
  )
}

export default ComponentsNoPage;