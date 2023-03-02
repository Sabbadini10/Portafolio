import React from 'react'
import './Cursos.css';


function CardCursos(props) {
  return (
    
    <div className='cardCursos-contenedor'>
    <div className="card-curso d-flex align-items-center mb-2 card">
    <img className="Imagen-titulo card-img-top d-flex  p-3" src={props.src} alt="Imagen Perfil" />
    <a href={props.link} target="_blank" className="btn btn-cursos mt-1"><strong>Ir</strong></a>
  </div>
  </div>

  )
}

export default CardCursos;


