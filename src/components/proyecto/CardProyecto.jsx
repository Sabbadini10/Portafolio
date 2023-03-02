import React from 'react';
import './Proyecto.css';

function CardProyecto(props) {
  return (
  <>
    <div className="cardProyectos mb-3" >
    <div className="cardProyectos-caja-1 card-body text-dark ">
    <div className="card-Proyectos d-flex flex-column mb-2 card">
    <h5 className="card-title text-center text-dark">{props.name}</h5>
    <img className='proyecto-card-imagen' src={props.src} alt={props.alt}/>
    <div className='proyectos-contenedor-botones'>
  <a href={props.deploy} className="text-dark mt-1 btn btn-proyectos">Deploy</a>
  <a href={props.github} className="text-dark mt-1 btn btn-proyectos">Repositorio</a>
    </div>
  
  </div>
  </div>
  </div>
</>
  )
}


export default CardProyecto;