import React from 'react';
import './Proyecto.css';
import ImagenDeploy from '../imagen/ImagenDeploy';
import Deploy1 from "../../imagenes/deploy/DEPLOY-CALCULADORA.png"

function CardProyecto(props) {
  return (
  <>
    <div className="cardProyectos mb-3" >
    <div className="cardProyectos-caja-1 card-body text-dark ">
    <div class="card-Proyectos d-flex mb-2 card">
      <ImagenDeploy src={Deploy1} />

    <h5 className="card-title text-center text-dark">{props.name}</h5>
  <p className="cardProyectos-parrafo title text-start text-dark">Deploy: <a href={props.deploy} class="text-dark mt-1 btn">Ir a deploy</a></p>
  <br/>
  <p className="cardProyectos-parrafo title text-start text-dark">Git-Hub: <a href={props.github} class="text-dark mt-1 btn">Ir a repositorio</a></p>
  </div>
  </div>
  </div>
</>
  )
}


export default CardProyecto;