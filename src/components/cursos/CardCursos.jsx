import React from 'react'
import './Cursos.css';


function CardCursos(props) {
  return (
    <div>
    <div class="card d-flex mb-2" style={{width: '17rem'}}>
    <img className="main-imagen-perfil card-img-top d-flex align-items-end" src={props.src} alt="Imagen Perfil" />
    <a href={props.link} class="btn btn-primary mt-1">Ir</a>
  </div>
</div>
  )
}

export default CardCursos;


