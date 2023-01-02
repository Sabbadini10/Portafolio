import React from 'react';
import './Proyecto.css';

function CardProyecto(props) {
  return (
  <>
    <div className="cardProyectos card bg-transparent mb-3" >
    <div className="card-body text-light">
    <h5 className="card-title text-center text-light">{props.name}</h5>
    <p className="cardProyectos-parrafo title text-start text-light">Lenguajes: {props.lenguajes}</p>
  <p className="cardProyectos-parrafo title text-start text-light">Descripción: {props.descripcion}</p>
  <p className="cardProyectos-parrafo title text-start text-light">Deploy: <a href={props.deploy} class="text-light mt-1">{props.deploy}</a></p>
  <br/>
  <p className="cardProyectos-parrafo title text-start text-light">Git-Hub: <a href={props.github} class="text-light mt-1">{props.github}</a></p>
  </div>
  </div>
</>
  )
}


export default CardProyecto;