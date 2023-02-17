import React from 'react';
import "../../components/main/Main.css"


function ImagenDeploy(props){
    return(
      <div className="card-imagen">
      <img className="d-flex" src={props.src} alt="Imagen Deploy" />
      </div>
    )
}

export default ImagenDeploy;