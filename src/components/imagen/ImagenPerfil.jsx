import React from 'react';
import "../../components/main/Main.css"


function ImagenPerfil(props){
    return(
      <div className="card" style={{width: '10rem'}}>
      <img className="main-imagen-perfil card-img-top d-flex aling-items-end" src={props.src} alt="Imagen Perfil" />
      </div>
    )
}

export default ImagenPerfil;