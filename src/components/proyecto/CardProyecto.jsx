import React from 'react';
import './Proyecto.css';

function CardProyecto(props) {
  return (
  <>
    <div className="cardProyectos card  bg-transparent mb-3" >
    <div className="card-body text-white">
    <h5 className="card-title text-center text-white">{props.name}</h5>
    <p className="cardProyectos-parrafo title text-start text-white">Lenguajes: {props.lenguajes}</p>
  <p className="cardProyectos-parrafo title text-start text-white">Descripción: {props.descripcion}</p>
  <p className="cardProyectos-parrafo title text-start text-white">Deploy: <a href={props.deploy} class="text-white mt-1">Link Deploy</a></p>
  <br/>
  <p className="cardProyectos-parrafo title text-start text-white">Git-Hub: <a href={props.github} class="text-white mt-1">Link Git-Hub</a></p>
  </div>
  </div>
</>
  )
}


export default CardProyecto;