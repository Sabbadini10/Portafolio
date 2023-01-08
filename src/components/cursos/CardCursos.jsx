import React from 'react'
import './Cursos.css';


function CardCursos(props) {
  return (
    <div className='CardCursos d-flex justify-content-center '>
    <div className='cardCursos-caja-1 '>
    <div class="card-curso d-flex align-items-center mb-2 card">
    <img className="Imagen-titulo card-img-top d-flex align-items-end p-3" src={props.src} alt="Imagen Perfil" />
    <a href={props.link} class="btn mt-1">Ir</a>
  </div>
  </div>
</div>
  )
}

export default CardCursos;


