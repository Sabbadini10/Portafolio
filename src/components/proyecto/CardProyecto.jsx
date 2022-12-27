import React from 'react';
import './Proyecto.css';

function CardProyecto(props) {
  return (
  <>
    <div className="card bg-dark mb-3" style={{width: "15rem"}}>
    <div className="card-body text-white">
    <h5 className="card-title text-center">{props.name}</h5>
  <p className="title text-center">{props.descripcion}</p>
  </div>
  <a href={props.link} class="btn btn-primary mt-1">Ir</a>
  </div>
</>
  )
}


export default CardProyecto;