import React from 'react'
import './Cursos.css';


function CardCursos(props) {
  return (
    <div>
    <div class="card-curso card bg-dark d-flex mb-2">
    <img className="Imagen-titulo card-img-top d-flex align-items-end p-3" src={props.src} alt="Imagen Perfil" />
    <a href={props.link} class="btn btn-dark mt-1">Ir</a>
  </div>
</div>
  )
}

export default CardCursos;


